(function () {
  "use strict";
  var SITE = window.SITE, BLOCKS = window.BLOCKS, EX = window.EXERCISES;
  var KEY = "btl-done-v1", CODE_KEY = "btl-code-v1-";

  // ---------- storage (always safe without localStorage) ----------
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) { /* ok */ } }
  function getCode(x) { try { var c = localStorage.getItem(CODE_KEY + x.id); if (c !== null) return c; } catch (e) { /* ok */ } return x.starter; }
  function putCode(x, c) { try { localStorage.setItem(CODE_KEY + x.id, c); } catch (e) { /* ok */ } }
  function dropCode(x) { try { localStorage.removeItem(CODE_KEY + x.id); } catch (e) { /* ok */ } }
  function count() { return EX.filter(function (x) { return done[x.id]; }).length; }

  // ---------- tiny DOM helpers ----------
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function T(tag, text, cls) { return el(tag, cls ? { text: text, "class": cls } : { text: text }); }
  function clear(n) { n.textContent = ""; }

  document.title = SITE.title;
  document.getElementById("brand").textContent = SITE.title;
  var nav = document.getElementById("nav"), main = document.getElementById("main");
  var menuBtn = document.getElementById("menu-btn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  // ---------- Python runner (Pyodide in a Web Worker) ----------
  var runner = { worker: null, state: "idle", ready: null, jobs: {}, nextId: 1 };
  function setState(s) {
    runner.state = s;
    var txt = { idle: "Python: not started", loading: "Python: loading (about 10 MB, first time only)...", ready: "Python: ready", failed: "Python: not available here. Run the file on your computer instead." }[s];
    Array.prototype.forEach.call(document.querySelectorAll(".py-status"), function (n) { n.textContent = txt; n.setAttribute("data-state", s); });
  }
  function startWorker() {
    if (runner.state === "loading" || runner.state === "ready") return runner.ready;
    setState("loading");
    runner.ready = new Promise(function (resolve, reject) {
      var w;
      try { w = new Worker("worker.js"); } catch (e) { setState("failed"); reject(e); return; }
      runner.worker = w;
      w.onmessage = function (ev) {
        var m = ev.data;
        if (m.type === "ready") { setState("ready"); resolve(); }
        else if (m.type === "fatal") { setState("failed"); reject(new Error(m.message)); }
        else if (m.type === "result" && runner.jobs[m.id]) { var j = runner.jobs[m.id]; delete runner.jobs[m.id]; clearTimeout(j.timer); j.resolve(m.result); }
      };
      w.onerror = function () { setState("failed"); reject(new Error("worker error")); };
    });
    runner.ready.catch(function () { /* shown in status */ });
    return runner.ready;
  }
  function runJob(job) {
    return startWorker().then(function () {
      return new Promise(function (resolve) {
        var id = runner.nextId++;
        var timer = setTimeout(function () {
          delete runner.jobs[id];
          runner.worker.terminate(); runner.state = "idle"; startWorker();
          resolve({ timeout: true });
        }, 8000);
        runner.jobs[id] = { resolve: resolve, timer: timer };
        runner.worker.postMessage({ id: id, job: job });
      });
    }, function () { return { unavailable: true }; });
  }

  // ---------- navigation and progress ----------
  function renderNav(current) {
    clear(nav);
    BLOCKS.forEach(function (b) {
      nav.appendChild(T("h2", b.title));
      var ul = el("ul");
      EX.filter(function (x) { return x.block === b.id; }).forEach(function (x) {
        var a = el("a", { href: "#" + x.id }, [T("span", String(x.n).padStart(2, "0"), "num"), T("span", x.title)]);
        if (x.id === current) a.setAttribute("aria-current", "page");
        if (done[x.id]) { var t = T("span", "done", "tick"); a.appendChild(t); }
        ul.appendChild(el("li", {}, [a]));
      });
      nav.appendChild(ul);
    });
  }
  function renderProgress() {
    document.getElementById("progress").textContent = count() + "/" + EX.length + " done";
  }

  function home() {
    clear(main);
    main.className = "";
    main.appendChild(T("h1", SITE.title));
    main.appendChild(T("p", SITE.subtitle, "lede"));
    var bar = el("div", { "class": "bar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(EX.length), "aria-valuenow": String(count()), "aria-label": "Progress" }, [el("div", { style: "width:" + (100 * count() / EX.length) + "%" })]);
    main.appendChild(bar);
    main.appendChild(T("p", "Progress: " + count() + "/" + EX.length));
    var next = EX.filter(function (x) { return !done[x.id]; })[0];
    var row = el("p", { "class": "row" });
    row.appendChild(el("a", { "class": "btn primary", href: "#" + (next || EX[0]).id, text: count() === 0 ? "Start with exercise 1" : (next ? "Continue: " + next.title : "All done. Review exercise 1") }));
    main.appendChild(row);
    main.appendChild(T("h2", "How to work"));
    var ol = el("ol");
    ["Read the task. Answer the Predict first question in your head.", "Use Run example. The pictures show what goes in and what comes out.", "Write your code in the editor. Use the Look this up terms. Open a hint only when you are stuck.", "Press Check my code. Every check shows pass or fail, with what you got and what was expected.", "When all checks pass, the exercise is marked done and the Library connection appears."].forEach(function (s) { ol.appendChild(T("li", s)); });
    main.appendChild(ol);
    main.appendChild(T("p", "Your code and progress stay in this browser only. Python runs inside the page. Nothing is sent to a server.", "note"));
    BLOCKS.forEach(function (b) {
      main.appendChild(T("h2", b.title));
      main.appendChild(T("p", b.note, "note"));
    });
    var reset = el("button", { type: "button", text: "Reset all progress and saved code" });
    reset.addEventListener("click", function () {
      if (!window.confirm("Delete all progress and saved code in this browser?")) return;
      EX.forEach(function (x) { dropCode(x); }); done = {}; save(); route();
    });
    main.appendChild(el("p", { "class": "row spaced" }, [reset]));
  }

  // ---------- visualisation ----------
  function isDict(v) { return v !== null && typeof v === "object" && !Array.isArray(v) && v.__dict__ !== undefined; }
  function isRepr(v) { return v !== null && typeof v === "object" && !Array.isArray(v) && v.__repr__ !== undefined; }
  function isNum(v) { return typeof v === "number"; }
  function num(v) { return Number.isInteger(v) ? String(v) : String(Math.round(v * 1000) / 1000); }
  function pyrepr(v) {
    if (v === null) return "None";
    if (v === true) return "True";
    if (v === false) return "False";
    if (isNum(v)) return num(v);
    if (typeof v === "string") return '"' + v + '"';
    if (isRepr(v)) return v.__repr__;
    if (isDict(v)) return "{" + v.__dict__.map(function (p) { return pyrepr(p[0]) + ": " + pyrepr(p[1]); }).join(", ") + "}";
    return "[" + v.map(pyrepr).join(", ") + "]";
  }
  function short(s, n) { return s.length > n ? s.slice(0, n - 1) + "…" : s; }
  function allOf(a, f) { for (var i = 0; i < a.length; i++) if (!f(a[i])) return false; return true; }

  function bars(pairs) {
    var max = 0; pairs.forEach(function (p) { max = Math.max(max, Math.abs(p[1])); });
    var box = el("div", { "class": "bars" });
    pairs.forEach(function (p) {
      var w = max === 0 ? 0 : Math.abs(p[1]) / max * 100;
      box.appendChild(el("div", { "class": "vrow" }, [
        T("span", short(String(p[0]), 14), "vlab"),
        el("div", { "class": "vtrack" }, [el("div", { "class": "vbar" + (p[1] < 0 ? " neg" : ""), style: "width:" + w + "%" })]),
        T("span", num(p[1]), "vnum")]));
    });
    return box;
  }
  function table(rowLabels, colLabels, cell, shade, corner) {
    var min = Infinity, max = -Infinity;
    cell.forEach(function (r) { r.forEach(function (c) { if (isNum(c)) { min = Math.min(min, c); max = Math.max(max, c); } }); });
    var t = el("table", { "class": "vgrid" });
    var head = el("tr"); head.appendChild(T("th", corner || ""));
    colLabels.forEach(function (c) { head.appendChild(T("th", short(String(c), 10))); });
    t.appendChild(head);
    cell.forEach(function (r, i) {
      var tr = el("tr"); tr.appendChild(T("th", short(String(rowLabels[i]), 12)));
      colLabels.forEach(function (_, j) {
        var c = r[j], td = T("td", c === undefined ? "" : (isNum(c) ? num(c) : short(pyrepr(c), 14)));
        if (shade && isNum(c)) {
          var a = max === min ? 40 : 8 + 52 * (c - min) / (max - min);
          td.setAttribute("style", "background: color-mix(in srgb, var(--accent) " + Math.round(a) + "%, transparent)");
        }
        tr.appendChild(td);
      });
      t.appendChild(tr);
    });
    return el("div", { "class": "scroll" }, [t]);
  }
  function chips(items) {
    var box = el("div", { "class": "chips" });
    items.forEach(function (it, i) { box.appendChild(el("span", { "class": "chip" }, [T("i", String(i)), document.createTextNode(short(pyrepr(it), 24))])); });
    return box;
  }
  // Returns { caption, node } for any value.
  function viz(v) {
    if (isRepr(v)) return { caption: "object", node: T("pre", v.__repr__) };
    if (!Array.isArray(v) && !isDict(v)) return { caption: v === null ? "nothing (None)" : typeof v === "string" ? "text" : typeof v === "boolean" ? "True or False" : "number", node: T("div", pyrepr(v), "big") };
    if (Array.isArray(v)) {
      var n = v.length;
      if (n === 0) return { caption: "empty list", node: T("p", "[ ]  (empty)", "note") };
      if (allOf(v, isNum)) return { caption: "list of " + n + " numbers", node: bars(v.map(function (x, i) { return [i, x]; })) };
      if (allOf(v, function (p) { return Array.isArray(p) && p.length === 2 && typeof p[0] === "string" && isNum(p[1]); }))
        return { caption: n + " pairs (word, count)", node: bars(v) };
      if (allOf(v, Array.isArray)) {
        var cols = Math.max.apply(null, v.map(function (r) { return r.length; }));
        var rect = allOf(v, function (r) { return r.length === cols; });
        var colL = []; for (var j = 0; j < cols; j++) colL.push(j);
        var numeric = allOf(v, function (r) { return allOf(r, isNum); });
        return { caption: rect ? "grid: " + n + " rows x " + cols + " columns" : n + " lists of different length", node: table(v.map(function (_, i) { return "[" + i + "]"; }), colL, v, numeric, "") };
      }
      return { caption: "list of " + n + " items", node: chips(v) };
    }
    var d = v.__dict__;
    if (d.length === 0) return { caption: "empty dict", node: T("p", "{ }  (empty)", "note") };
    if (allOf(d, function (p) { return isNum(p[1]); })) return { caption: "dict with " + d.length + " keys", node: bars(d.map(function (p) { return [pyrepr(p[0]).replace(/^"|"$/g, ""), p[1]]; })) };
    if (allOf(d, function (p) { return isDict(p[1]); })) {
      var cl = [];
      d.forEach(function (p) { p[1].__dict__.forEach(function (q) { var k = pyrepr(q[0]).replace(/^"|"$/g, ""); if (cl.indexOf(k) < 0) cl.push(k); }); });
      var rows = d.map(function (p) {
        var m = {}; p[1].__dict__.forEach(function (q) { m[pyrepr(q[0]).replace(/^"|"$/g, "")] = q[1]; });
        return cl.map(function (k) { return m[k] === undefined ? 0 : m[k]; });
      });
      return { caption: "table: row = first word, column = next word, number = count", node: table(d.map(function (p) { return pyrepr(p[0]).replace(/^"|"$/g, ""); }), cl, rows, true, "first \\ next") };
    }
    return { caption: "dict with " + d.length + " keys", node: table(d.map(function (p) { return pyrepr(p[0]); }), ["value"], d.map(function (p) { return [p[1]]; }), false, "key") };
  }
  function figure(label, v) {
    var r = viz(v);
    return el("figure", { "class": "viz" }, [T("figcaption", label + " · " + r.caption), r.node]);
  }

  // ---------- code editor (textarea + highlight layer) ----------
  var KW = "def|class|return|if|elif|else|for|while|in|not|and|or|is|None|True|False|import|from|as|pass|break|continue|yield|try|except|raise|with|lambda";
  var TOKEN = new RegExp("(#[^\\n]*)|(\"\"\"[\\s\\S]*?\"\"\"|'''[\\s\\S]*?'''|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*')|\\b(" + KW + ")\\b|\\b(\\d+(?:\\.\\d+)?)\\b", "g");
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function highlight(code) {
    var out = "", last = 0, m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(code)) !== null) {
      out += esc(code.slice(last, m.index));
      var cls = m[1] ? "c" : m[2] ? "s" : m[3] ? "k" : "n";
      out += '<span class="t-' + cls + '">' + esc(m[0]) + "</span>";
      last = m.index + m[0].length;
      if (m[0].length === 0) TOKEN.lastIndex++;
    }
    return out + esc(code.slice(last)) + "\n";
  }
  function makeEditor(initial, onChange) {
    var gutter = el("div", { "class": "gutter", "aria-hidden": "true" });
    var pre = el("pre", { "class": "hl", "aria-hidden": "true" }, [el("code")]);
    var ta = el("textarea", { "class": "ta", spellcheck: "false", autocapitalize: "off", autocomplete: "off", autocorrect: "off", wrap: "off", "aria-label": "Python code editor" });
    ta.value = initial;
    var wrap = el("div", { "class": "editor" }, [gutter, el("div", { "class": "ed-body" }, [pre, ta])]);
    var errLine = null, trap = true;
    function paint() {
      pre.firstChild.innerHTML = highlight(ta.value);
      var n = ta.value.split("\n").length; clear(gutter);
      for (var i = 1; i <= n; i++) gutter.appendChild(T("div", String(i), i === errLine ? "err" : ""));
      sync();
    }
    function sync() { pre.scrollTop = ta.scrollTop; pre.scrollLeft = ta.scrollLeft; gutter.scrollTop = ta.scrollTop; }
    function insert(text) {
      ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, "end");
      ta.dispatchEvent(new Event("input", { bubbles: true }));
    }
    ta.addEventListener("input", function () { errLine = null; paint(); onChange(ta.value); });
    ta.addEventListener("scroll", sync);
    ta.addEventListener("blur", function () { trap = true; });
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { trap = false; return; }
      if (e.key === "Tab" && trap && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        if (e.shiftKey) {
          var s = ta.selectionStart, ls = ta.value.lastIndexOf("\n", s - 1) + 1;
          var m = /^ {1,4}/.exec(ta.value.slice(ls));
          if (m) { ta.setRangeText("", ls, ls + m[0].length, "preserve"); ta.selectionStart = ta.selectionEnd = Math.max(ls, s - m[0].length); ta.dispatchEvent(new Event("input", { bubbles: true })); }
        } else insert("    ");
      } else if (e.key === "Enter" && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        var st = ta.selectionStart, from = ta.value.lastIndexOf("\n", st - 1) + 1;
        var line = ta.value.slice(from, st), ind = /^ */.exec(line)[0];
        if (/:\s*$/.test(line)) ind += "    ";
        insert("\n" + ind);
      }
    });
    paint();
    return {
      node: wrap, get: function () { return ta.value; },
      set: function (c) { ta.value = c; errLine = null; paint(); onChange(c); },
      mark: function (line) { errLine = line; paint(); }, focus: function () { ta.focus(); }
    };
  }

  // ---------- results panels ----------
  function errorBox(err) {
    var msg = err.message + (err.line ? "  (line " + err.line + " of " + err.where + ")" : "");
    return el("div", { "class": "result bad", role: "alert" }, [T("strong", "Python stopped with an error"), T("pre", msg)]);
  }
  function systemMessage(res) {
    if (res.unavailable) return el("div", { "class": "result bad", role: "alert" }, [T("p", "Python could not load in this browser (no internet, or the CDN is blocked). You can still do the exercise: open the file from the repo and run python3 on your computer.")]);
    if (res.timeout) return el("div", { "class": "result bad", role: "alert" }, [T("p", "Stopped after 8 seconds. Maybe a loop never ends? Check your while loop.")]);
    if (res.fatal) return el("div", { "class": "result bad", role: "alert" }, [T("pre", res.fatal)]);
    return null;
  }
  function showTry(box, res, editor) {
    clear(box);
    var sm = systemMessage(res); if (sm) { box.appendChild(sm); return; }
    if (res.error) { box.appendChild(errorBox(res.error)); if (res.error.where === "your code") editor.mark(res.error.line); }
    if (res.stdout) box.appendChild(el("div", {}, [T("p", "Printed output", "note"), T("pre", res.stdout)]));
    if (res.args) res.args.forEach(function (a) { box.appendChild(figure("Input: " + a.name, a.value)); });
    if (res.output) {
      if (res.args && res.args.length) box.appendChild(T("p", "↓ your function returns", "arrow"));
      box.appendChild(figure("Output", res.output.value));
      box.appendChild(el("p", { "class": "note" }, [T("code", short(res.output.repr, 200))]));
    } else if (!res.error) box.appendChild(T("p", "Nothing to show. Put an expression on the last line, for example a function call.", "note"));
  }
  function showCheck(box, res, x, editor, onPass) {
    clear(box);
    var sm = systemMessage(res); if (sm) { box.appendChild(sm); return; }
    if (res.error) { box.appendChild(errorBox(res.error)); if (res.error.where === "your code") editor.mark(res.error.line); return; }
    var list = res.results, ok = list.filter(function (r) { return r.ok; }).length, all = ok === list.length && list.length > 0;
    box.appendChild(el("div", { "class": "result " + (all ? "good" : "bad"), role: "status" }, [
      T("strong", all ? "All " + list.length + " checks passed." : ok + " of " + list.length + " checks passed.")]));
    if (all) onPass(box);
    var ul = el("ul", { "class": "checks" }), firstBad = true;
    list.forEach(function (r) {
      var li = el("li", { "class": r.ok ? "ok" : "fail" });
      var first = r.src.split("\n")[0], label = short(first, 70) + (r.src.indexOf("\n") >= 0 ? " …" : "");
      if (r.ok) { li.appendChild(T("span", "pass", "tag")); li.appendChild(T("code", label)); }
      else {
        var d = el("details"); if (firstBad) { d.setAttribute("open", ""); firstBad = false; }
        d.appendChild(el("summary", {}, [T("span", "fail", "tag"), T("code", label)]));
        if (r.got !== undefined) {
          d.appendChild(el("div", { "class": "gx" }, [T("span", "your code gives"), T("code", r.got), T("span", "the check wants (" + r.op + ")"), T("code", r.expected)]));
        } else d.appendChild(T("pre", r.error));
        li.appendChild(d);
      }
      ul.appendChild(li);
    });
    box.appendChild(ul);
    if (res.stdout) box.appendChild(el("div", {}, [T("p", "Printed output", "note"), T("pre", res.stdout)]));
  }

  // ---------- exercise page ----------
  function section(title, kids) { return el("section", {}, [T("h2", title)].concat(kids)); }

  function exercise(x) {
    clear(main); main.className = "ex";
    var block = BLOCKS.filter(function (b) { return b.id === x.block; })[0];

    var top = el("div", { "class": "a-top" });
    top.appendChild(T("p", block.title + " · Exercise " + x.n + " of " + EX.length, "kicker"));
    top.appendChild(T("h1", x.title));
    top.appendChild(section("Why this matters in AI", [T("p", x.why)]));
    var task = section("The task", x.task.map(function (p) { return T("p", p); }));
    task.appendChild(el("div", { "class": "example" }, [
      el("div", {}, [T("span", "Example input"), document.createTextNode(x.exampleIn)]),
      el("div", {}, [T("span", "Example output"), document.createTextNode(x.exampleOut)])]));
    top.appendChild(task);
    top.appendChild(el("section", { "class": "predict" }, [T("h3", "Predict first"), T("p", x.predict), T("p", "Write your answer down. Then use Run example and compare.", "note")]));
    var lu = el("ul"); x.lookup.forEach(function (q) { lu.appendChild(el("li", {}, [T("code", q)])); });
    top.appendChild(section("Look this up", [lu]));

    var bottom = el("div", { "class": "a-bottom" });
    var hs = section("Hints", []);
    x.hints.forEach(function (h, i) { hs.appendChild(el("details", {}, [T("summary", "Hint " + (i + 1)), T("p", h)])); });
    bottom.appendChild(hs);
    var libBody = el("div");
    bottom.appendChild(section("Library connection", [libBody]));
    var dl = el("dl", { "class": "words" });
    x.words.forEach(function (w) { dl.appendChild(T("dt", w[0])); dl.appendChild(T("dd", w[1])); });
    bottom.appendChild(section("Words", [dl]));
    var cb = el("input", { type: "checkbox", id: "done-" + x.id });
    cb.checked = !!done[x.id];
    bottom.appendChild(el("div", { "class": "done" }, [cb, el("label", { "for": "done-" + x.id, text: "Mark done" })]));
    var prev = EX[x.n - 2], next = EX[x.n];
    var pager = el("div", { "class": "pager" });
    pager.appendChild(prev ? el("a", { href: "#" + prev.id, text: "← " + prev.title }) : el("span"));
    pager.appendChild(next ? el("a", { href: "#" + next.id, text: next.title + " →" }) : el("span"));
    bottom.appendChild(pager);

    function showLib() {
      clear(libBody);
      libBody.appendChild(done[x.id] ? T("p", x.library) : T("p", "Hidden until you mark this exercise done. Solve it first.", "locked"));
    }
    showLib();
    function setDone(v) {
      if (v) done[x.id] = true; else delete done[x.id];
      cb.checked = v; save(); showLib(); renderNav(x.id); renderProgress();
    }
    cb.addEventListener("change", function () { setDone(cb.checked); });

    // workbench
    var bench = el("div", { "class": "a-bench" });
    bench.appendChild(T("h2", "Workbench"));
    bench.appendChild(T("p", "", "py-status note"));
    var editor = makeEditor(getCode(x), function (c) { putCode(x, c); });
    var copy = el("button", { type: "button", text: "Copy starter code" });
    copy.addEventListener("click", function () {
      function ok() { copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy starter code"; }, 1500); }
      function fb() {
        var ta = el("textarea", { "aria-hidden": "true" }); ta.value = x.starter; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); ok(); } catch (e) { copy.textContent = "Copy failed"; }
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(x.starter).then(ok, fb); else fb();
    });
    var reset = el("button", { type: "button", text: "Reset to starter" });
    reset.addEventListener("click", function () {
      if (window.confirm("Replace your code with the starter code?")) { dropCode(x); editor.set(x.starter); }
    });
    var gh = el("a", { "class": "btn", href: SITE.repo + "/blob/" + SITE.branch + "/" + x.file, text: "File on GitHub" });
    bench.appendChild(el("div", { "class": "row tools" }, [copy, reset, gh]));
    bench.appendChild(editor.node);
    bench.appendChild(T("p", "Tab indents. Press Esc, then Tab, to leave the editor. Ctrl+Enter runs the example. Ctrl+Shift+Enter checks your code.", "note"));

    var runBtn = el("button", { type: "button", "class": "primary", text: "Run example" });
    var chkBtn = el("button", { type: "button", "class": "primary", text: "Check my code" });
    bench.appendChild(el("div", { "class": "row" }, [runBtn, chkBtn]));

    bench.appendChild(T("h3", "Example to run (you can change it)"));
    var snip = el("textarea", { "class": "snip", rows: String(x.tryCode.split("\n").length + 1), spellcheck: "false", autocapitalize: "off", "aria-label": "Example code to run" });
    snip.value = x.tryCode;
    bench.appendChild(snip);
    var tryBox = el("div", { "class": "out", "aria-live": "polite" });
    var chkBox = el("div", { "class": "out", "aria-live": "polite" });
    bench.appendChild(tryBox);
    bench.appendChild(T("h3", "Checks"));
    bench.appendChild(chkBox);

    function busy(b, on, label) { b.disabled = on; b.textContent = on ? "Running..." : label; }
    function doRun() {
      busy(runBtn, true, "Run example"); editor.mark(null);
      runJob({ kind: "try", code: editor.get(), snippet: snip.value }).then(function (res) { busy(runBtn, false, "Run example"); showTry(tryBox, res, editor); });
    }
    function doCheck() {
      busy(chkBtn, true, "Check my code"); editor.mark(null);
      runJob({ kind: "check", code: editor.get(), checks: x.checks }).then(function (res) {
        busy(chkBtn, false, "Check my code");
        showCheck(chkBox, res, x, editor, function (box) {
          var first = !done[x.id]; setDone(true);
          var n = el("div", { "class": "passnote" }, [T("p", (first ? "Exercise marked done. " : "") + "Library connection: " + x.library)]);
          if (next) n.appendChild(el("p", {}, [el("a", { "class": "btn primary", href: "#" + next.id, text: "Next: " + next.title + " →" })]));
          box.appendChild(n);
        });
      });
    }
    runBtn.addEventListener("click", doRun);
    chkBtn.addEventListener("click", doCheck);
    bench.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); if (e.shiftKey) doCheck(); else doRun(); }
    });

    main.appendChild(top); main.appendChild(bench); main.appendChild(bottom);
    setState(runner.state);
    startWorker();
  }

  function route() {
    var id = decodeURIComponent((location.hash || "").replace(/^#\/?/, ""));
    var x = EX.filter(function (e) { return e.id === id; })[0];
    renderNav(x ? x.id : "");
    renderProgress();
    if (x) exercise(x); else home();
    nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);
  route();
})();
