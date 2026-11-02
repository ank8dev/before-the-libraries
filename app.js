(function () {
  "use strict";
  var SITE = window.SITE, BLOCKS = window.BLOCKS, EX = window.EXERCISES;
  var UI = {
    doneCount: "{n}/{total} done", contents: "Contents", skip: "Skip to content", design: "How this was designed", repo: "Source on GitHub", langLabel: "Language",
    progress: "Progress: {n}/{total}", start: "Start with exercise 1", cont: "Continue: {title}", allDone: "All done. Review exercise 1",
    howTo: "How to work",
    steps: ["Read the task. Answer the Predict first question in your head.", "Use Run example. The pictures show what goes in and what comes out.", "Write your code in the editor. Use the Look this up terms. Open a hint only when you are stuck.", "Press Check my code. Every check shows pass or fail, with what you got and what was expected.", "When all checks pass, the exercise is marked done and the Library connection appears."],
    localNote: "Your code and progress stay in this browser only. Python runs inside the page. Nothing is sent to a server.",
    resetAll: "Reset all progress and saved code", confirmReset: "Delete all progress and saved code in this browser?",
    exOf: "Exercise {n} of {total}", why: "Why this matters in AI", task: "The task", exIn: "Example input", exOut: "Example output",
    predict: "Predict first", predictNote: "Write your answer down. Then use Run example and compare.", lookup: "Look this up",
    hints: "Hints", hint: "Hint {n}", lib: "Library connection", libLocked: "Hidden until you mark this exercise done. Solve it first.", markDone: "Mark done",
    bench: "Workbench", copy: "Copy starter code", copied: "Copied", copyFail: "Copy failed", reset: "Reset to starter", confirmStarter: "Replace your code with the starter code?",
    gh: "File on GitHub", edNote: "Tab indents. Press Esc, then Tab, to leave the editor. Ctrl+Enter runs the example. Ctrl+Shift+Enter checks your code.",
    runEx: "Run example", check: "Check my code", running: "Running...", tryTitle: "Example to run (you can change it)", checksTitle: "Checks",
    py_idle: "Python: not started", py_loading: "Python: loading (about 10 MB, first time only)...", py_ready: "Python: ready",
    py_failed: "Python: not available here. Run the file on your computer instead.",
    errTitle: "Python stopped with an error", errLine: "(line {n} of {where})", whereCode: "your code", whereExample: "the example",
    unavail: "Python could not load in this browser (no internet, or the CDN is blocked). You can still do the exercise: open the file from the repo and run python3 on your computer.",
    timeout: "Stopped after 8 seconds. Maybe a loop never ends? Check your while loop.",
    allPassed: "All {n} checks passed.", somePassed: "{ok} of {n} checks passed.", pass: "pass", fail: "fail",
    gives: "your code gives", wants: "the check wants ({op})", printed: "Printed output", returns: "your function returns", output: "Output", input: "Input: {name}",
    nothing: "Nothing to show. Put an expression on the last line, for example a function call.",
    marked: "Exercise marked done.", libPrefix: "Library connection:", next: "Next: {title}", aria_editor: "Python code editor", aria_snip: "Example code to run",
    v_object: "object", v_none: "nothing (None)", v_text: "text", v_bool: "True or False", v_number: "number", v_emptyList: "empty list", v_listNums: "list of {n} numbers",
    v_pairs: "{n} pairs (word, count)", v_grid: "grid: {r} rows x {c} columns", v_ragged: "{n} lists of different length", v_listItems: "list of {n} items",
    extra: "Extra challenge (optional)", v_emptyDict: "empty dict", v_dictKeys: "dict with {n} keys", v_matrix: "table: row = first word, column = next word, number = count", v_corner: "first \\ next", v_value: "value", v_key: "key"
  };
  var lang = "";
  try { lang = localStorage.getItem("btl-lang") || ""; } catch (e) { lang = ""; }
  if (!lang) lang = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (!SITE.langs.some(function (l) { return l.code === lang; })) lang = "en";
  window.I18N = window.I18N || {};
  function D() { return window.I18N[lang] || null; }
  function S(key, vars) {
    var d = D(), s = (d && d.ui && d.ui[key] !== undefined) ? d.ui[key] : UI[key];
    if (vars && typeof s === "string") Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }
  function X(x, f) { var d = D(), e = d && d.ex && d.ex[x.id]; return (e && e[f] !== undefined) ? e[f] : x[f]; }
  function BT(b, f) { var d = D(), e = d && d.blocks && d.blocks[b.id]; return (e && e[f]) || b[f]; }
  function loadLang(code, cb) {
    if (code === "en" || window.I18N[code]) return cb();
    var sc = document.createElement("script"); sc.src = "lang/" + code + ".js"; sc.onload = cb; sc.onerror = cb; document.head.appendChild(sc);
  }

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
  document.getElementById("brand").setAttribute("aria-label", SITE.title);
  var nav = document.getElementById("nav"), main = document.getElementById("main");
  var menuBtn = document.getElementById("menu-btn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  var langBox = document.getElementById("lang");
  var langBtns = {};
  var SHORT = { en: "EN", ru: "RU", es: "ES", zh: "中文", hi: "हिं" };
  SITE.langs.forEach(function (l) {
    var b = el("button", { type: "button", "class": "langbtn", title: l.name, "aria-label": l.name, text: SHORT[l.code] || l.code.toUpperCase() });
    b.addEventListener("click", function () {
      lang = l.code;
      try { localStorage.setItem("btl-lang", lang); } catch (e) { /* ok */ }
      loadLang(lang, route);
    });
    langBtns[l.code] = b; langBox.appendChild(b);
  });
  function chrome() {
    document.documentElement.lang = lang;
    menuBtn.textContent = S("contents");
    langBox.setAttribute("aria-label", S("langLabel"));
    Object.keys(langBtns).forEach(function (c) { langBtns[c].setAttribute("aria-pressed", String(c === lang)); });
    document.querySelector(".skip").textContent = S("skip");
    document.getElementById("design-link").textContent = S("design");
    document.getElementById("repo-link").textContent = S("repo");
  }

  // ---------- Python runner (Pyodide in a Web Worker) ----------
  var runner = { worker: null, state: "idle", ready: null, jobs: {}, nextId: 1 };
  function setState(s) {
    runner.state = s;
    var txt = S("py_" + s);
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
      nav.appendChild(T("h2", BT(b, "title")));
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
    document.getElementById("progress").textContent = S("doneCount", { n: count(), total: EX.length });
  }

  function home() {
    clear(main);
    main.className = "";
    main.appendChild(T("h1", SITE.title));
    main.appendChild(T("p", (D() && D().subtitle) || SITE.subtitle, "lede"));
    var bar = el("div", { "class": "bar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(EX.length), "aria-valuenow": String(count()), "aria-label": "Progress" }, [el("div", { style: "width:" + (100 * count() / EX.length) + "%" })]);
    main.appendChild(bar);
    main.appendChild(T("p", S("progress", { n: count(), total: EX.length })));
    var next = EX.filter(function (x) { return !done[x.id]; })[0];
    var row = el("p", { "class": "row" });
    row.appendChild(el("a", { "class": "btn primary", href: "#" + (next || EX[0]).id, text: count() === 0 ? S("start") : (next ? S("cont", { title: next.title }) : S("allDone")) }));
    main.appendChild(row);
    main.appendChild(T("h2", S("howTo")));
    var ol = el("ol");
    S("steps").forEach(function (t) { ol.appendChild(T("li", t)); });
    main.appendChild(ol);
    main.appendChild(T("p", S("localNote"), "note"));
    BLOCKS.forEach(function (b) {
      main.appendChild(T("h2", BT(b, "title")));
      main.appendChild(T("p", BT(b, "note"), "note"));
    });
    var reset = el("button", { type: "button", text: S("resetAll") });
    reset.addEventListener("click", function () {
      if (!window.confirm(S("confirmReset"))) return;
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
    if (isRepr(v)) return { caption: S("v_object"), node: T("pre", v.__repr__) };
    if (!Array.isArray(v) && !isDict(v)) return { caption: v === null ? S("v_none") : typeof v === "string" ? S("v_text") : typeof v === "boolean" ? S("v_bool") : S("v_number"), node: T("div", pyrepr(v), "big") };
    if (Array.isArray(v)) {
      var n = v.length;
      if (n === 0) return { caption: S("v_emptyList"), node: T("p", "[ ]  (empty)", "note") };
      if (allOf(v, isNum)) return { caption: S("v_listNums", { n: n }), node: bars(v.map(function (x, i) { return [i, x]; })) };
      if (allOf(v, function (p) { return Array.isArray(p) && p.length === 2 && typeof p[0] === "string" && isNum(p[1]); }))
        return { caption: S("v_pairs", { n: n }), node: bars(v) };
      if (allOf(v, Array.isArray)) {
        var cols = Math.max.apply(null, v.map(function (r) { return r.length; }));
        var rect = allOf(v, function (r) { return r.length === cols; });
        var colL = []; for (var j = 0; j < cols; j++) colL.push(j);
        var numeric = allOf(v, function (r) { return allOf(r, isNum); });
        return { caption: rect ? S("v_grid", { r: n, c: cols }) : S("v_ragged", { n: n }), node: table(v.map(function (_, i) { return "[" + i + "]"; }), colL, v, numeric, "") };
      }
      return { caption: S("v_listItems", { n: n }), node: chips(v) };
    }
    var d = v.__dict__;
    if (d.length === 0) return { caption: S("v_emptyDict"), node: T("p", "{ }  (empty)", "note") };
    if (allOf(d, function (p) { return isNum(p[1]); })) return { caption: S("v_dictKeys", { n: d.length }), node: bars(d.map(function (p) { return [pyrepr(p[0]).replace(/^"|"$/g, ""), p[1]]; })) };
    if (allOf(d, function (p) { return isDict(p[1]); })) {
      var cl = [];
      d.forEach(function (p) { p[1].__dict__.forEach(function (q) { var k = pyrepr(q[0]).replace(/^"|"$/g, ""); if (cl.indexOf(k) < 0) cl.push(k); }); });
      var rows = d.map(function (p) {
        var m = {}; p[1].__dict__.forEach(function (q) { m[pyrepr(q[0]).replace(/^"|"$/g, "")] = q[1]; });
        return cl.map(function (k) { return m[k] === undefined ? 0 : m[k]; });
      });
      return { caption: S("v_matrix"), node: table(d.map(function (p) { return pyrepr(p[0]).replace(/^"|"$/g, ""); }), cl, rows, true, S("v_corner")) };
    }
    return { caption: S("v_dictKeys", { n: d.length }), node: table(d.map(function (p) { return pyrepr(p[0]); }), [S("v_value")], d.map(function (p) { return [p[1]]; }), false, S("v_key")) };
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
    var ta = el("textarea", { "class": "ta", spellcheck: "false", autocapitalize: "off", autocomplete: "off", autocorrect: "off", wrap: "off", "aria-label": S("aria_editor") });
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
    var msg = err.message + (err.line ? "  " + S("errLine", { n: err.line, where: err.where === "your code" ? S("whereCode") : S("whereExample") }) : "");
    return el("div", { "class": "result bad", role: "alert" }, [T("strong", S("errTitle")), T("pre", msg)]);
  }
  function systemMessage(res) {
    if (res.unavailable) return el("div", { "class": "result bad", role: "alert" }, [T("p", S("unavail"))]);
    if (res.timeout) return el("div", { "class": "result bad", role: "alert" }, [T("p", S("timeout"))]);
    if (res.fatal) return el("div", { "class": "result bad", role: "alert" }, [T("pre", res.fatal)]);
    return null;
  }
  function showTry(box, res, editor) {
    clear(box);
    var sm = systemMessage(res); if (sm) { box.appendChild(sm); return; }
    if (res.error) { box.appendChild(errorBox(res.error)); if (res.error.where === "your code") editor.mark(res.error.line); }
    if (res.stdout) box.appendChild(el("div", {}, [T("p", S("printed"), "note"), T("pre", res.stdout)]));
    if (res.args) res.args.forEach(function (a) { box.appendChild(figure(S("input", { name: a.name }), a.value)); });
    if (res.output) {
      if (res.args && res.args.length) box.appendChild(T("p", "↓ " + S("returns"), "arrow"));
      box.appendChild(figure(S("output"), res.output.value));
      box.appendChild(el("p", { "class": "note" }, [T("code", short(res.output.repr, 200))]));
    } else if (!res.error) box.appendChild(T("p", S("nothing"), "note"));
  }
  function showCheck(box, res, x, editor, onPass) {
    clear(box);
    var sm = systemMessage(res); if (sm) { box.appendChild(sm); return; }
    if (res.error) { box.appendChild(errorBox(res.error)); if (res.error.where === "your code") editor.mark(res.error.line); return; }
    var list = res.results, ok = list.filter(function (r) { return r.ok; }).length, all = ok === list.length && list.length > 0;
    box.appendChild(el("div", { "class": "result " + (all ? "good" : "bad"), role: "status" }, [
      T("strong", all ? S("allPassed", { n: list.length }) : S("somePassed", { ok: ok, n: list.length }))]));
    if (all) onPass(box);
    var ul = el("ul", { "class": "checks" }), firstBad = true;
    list.forEach(function (r) {
      var li = el("li", { "class": r.ok ? "ok" : "fail" });
      var first = r.src.split("\n")[0], label = short(first, 70) + (r.src.indexOf("\n") >= 0 ? " …" : "");
      if (r.ok) { li.appendChild(T("span", S("pass"), "tag")); li.appendChild(T("code", label)); }
      else {
        var d = el("details"); if (firstBad) { d.setAttribute("open", ""); firstBad = false; }
        d.appendChild(el("summary", {}, [T("span", S("fail"), "tag"), T("code", label)]));
        if (r.got !== undefined) {
          d.appendChild(el("div", { "class": "gx" }, [T("span", S("gives")), T("code", r.got), T("span", S("wants", { op: r.op })), T("code", r.expected)]));
        } else d.appendChild(T("pre", r.error));
        li.appendChild(d);
      }
      ul.appendChild(li);
    });
    box.appendChild(ul);
    if (res.stdout) box.appendChild(el("div", {}, [T("p", S("printed"), "note"), T("pre", res.stdout)]));
  }

  // ---------- exercise page ----------
  function section(title, kids) { return el("section", {}, [T("h2", title)].concat(kids)); }

  function exercise(x) {
    clear(main); main.className = "ex";
    var block = BLOCKS.filter(function (b) { return b.id === x.block; })[0];

    var top = el("div", { "class": "a-top" });
    top.appendChild(T("p", BT(block, "title") + " · " + S("exOf", { n: x.n, total: EX.length }), "kicker"));
    top.appendChild(T("h1", x.title));
    top.appendChild(section(S("why"), [T("p", X(x, "why"))]));
    var task = section(S("task"), X(x, "task").map(function (p) { return T("p", p); }));
    task.appendChild(el("div", { "class": "example" }, [
      el("div", {}, [T("span", S("exIn")), document.createTextNode(x.exampleIn)]),
      el("div", {}, [T("span", S("exOut")), document.createTextNode(x.exampleOut)])]));
    top.appendChild(task);
    top.appendChild(el("section", { "class": "predict" }, [T("h3", S("predict")), T("p", X(x, "predict")), T("p", S("predictNote"), "note")]));
    var lu = el("ul"); x.lookup.forEach(function (q) { lu.appendChild(el("li", {}, [T("code", q)])); });
    top.appendChild(section(S("lookup"), [lu]));

    var bottom = el("div", { "class": "a-bottom" });
    var hs = section(S("hints"), []);
    X(x, "hints").forEach(function (h, i) { hs.appendChild(el("details", {}, [T("summary", S("hint", { n: i + 1 })), T("p", h)])); });
    bottom.appendChild(hs);
    var libBody = el("div");
    bottom.appendChild(section(S("lib"), [libBody]));
    var cb = el("input", { type: "checkbox", id: "done-" + x.id });
    cb.checked = !!done[x.id];
    bottom.appendChild(el("div", { "class": "done" }, [cb, el("label", { "for": "done-" + x.id, text: S("markDone") })]));
    var prev = EX[x.n - 2], next = EX[x.n];
    var pager = el("div", { "class": "pager" });
    pager.appendChild(prev ? el("a", { href: "#" + prev.id, text: "← " + prev.title }) : el("span"));
    pager.appendChild(next ? el("a", { href: "#" + next.id, text: next.title + " →" }) : el("span"));
    bottom.appendChild(pager);

    function showLib() {
      clear(libBody);
      libBody.appendChild(done[x.id] ? T("p", X(x, "library")) : T("p", S("libLocked"), "locked"));
      if (done[x.id]) { libBody.appendChild(T("h3", S("extra"))); libBody.appendChild(T("p", X(x, "challenge"))); }
    }
    showLib();
    function setDone(v) {
      if (v) done[x.id] = true; else delete done[x.id];
      cb.checked = v; save(); showLib(); renderNav(x.id); renderProgress();
    }
    cb.addEventListener("change", function () { setDone(cb.checked); });

    // workbench
    var bench = el("div", { "class": "a-bench" });
    bench.appendChild(T("h2", S("bench")));
    bench.appendChild(T("p", "", "py-status note"));
    var editor = makeEditor(getCode(x), function (c) { putCode(x, c); });
    var copy = el("button", { type: "button", text: S("copy") });
    copy.addEventListener("click", function () {
      function ok() { copy.textContent = S("copied"); setTimeout(function () { copy.textContent = S("copy"); }, 1500); }
      function fb() {
        var ta = el("textarea", { "aria-hidden": "true" }); ta.value = x.starter; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); ok(); } catch (e) { copy.textContent = S("copyFail"); }
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(x.starter).then(ok, fb); else fb();
    });
    var reset = el("button", { type: "button", text: S("reset") });
    reset.addEventListener("click", function () {
      if (window.confirm(S("confirmStarter"))) { dropCode(x); editor.set(x.starter); }
    });
    var gh = el("a", { "class": "btn", href: SITE.repo + "/blob/" + SITE.branch + "/" + x.file, text: S("gh") });
    bench.appendChild(el("div", { "class": "row tools" }, [copy, reset, gh]));
    bench.appendChild(editor.node);
    bench.appendChild(T("p", S("edNote"), "note"));

    var runBtn = el("button", { type: "button", "class": "primary", text: S("runEx") });
    var chkBtn = el("button", { type: "button", "class": "primary", text: S("check") });
    bench.appendChild(el("div", { "class": "row" }, [runBtn, chkBtn]));

    bench.appendChild(T("h3", S("tryTitle")));
    var snip = el("textarea", { "class": "snip", rows: String(x.tryCode.split("\n").length + 1), spellcheck: "false", autocapitalize: "off", "aria-label": S("aria_snip") });
    snip.value = x.tryCode;
    bench.appendChild(snip);
    var tryBox = el("div", { "class": "out", "aria-live": "polite" });
    var chkBox = el("div", { "class": "out", "aria-live": "polite" });
    bench.appendChild(tryBox);
    bench.appendChild(T("h3", S("checksTitle")));
    bench.appendChild(chkBox);

    function busy(b, on, label) { b.disabled = on; b.textContent = on ? S("running") : label; }
    function doRun() {
      busy(runBtn, true, S("runEx")); editor.mark(null);
      runJob({ kind: "try", code: editor.get(), snippet: snip.value }).then(function (res) { busy(runBtn, false, S("runEx")); showTry(tryBox, res, editor); });
    }
    function doCheck() {
      busy(chkBtn, true, S("check")); editor.mark(null);
      runJob({ kind: "check", code: editor.get(), checks: x.checks }).then(function (res) {
        busy(chkBtn, false, S("check"));
        showCheck(chkBox, res, x, editor, function (box) {
          var first = !done[x.id]; setDone(true);
          var n = el("div", { "class": "passnote" }, [T("p", (first ? S("marked") + " " : "") + S("libPrefix") + " " + X(x, "library"))]);
          if (next) n.appendChild(el("p", {}, [el("a", { "class": "btn primary", href: "#" + next.id, text: S("next", { title: next.title }) + " →" })]));
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
    chrome();
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
  loadLang(lang, route);
})();
