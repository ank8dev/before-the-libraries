(function () {
  "use strict";
  var SITE = window.SITE, BLOCKS = window.BLOCKS, EX = window.EXERCISES;
  var KEY = "btl-done-v1";
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) { /* works without storage */ } }
  function count() { return EX.filter(function (x) { return done[x.id]; }).length; }

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function T(tag, text, cls) { return el(tag, cls ? { text: text, "class": cls } : { text: text }); }

  document.title = SITE.title;
  document.getElementById("brand").textContent = SITE.title;
  var nav = document.getElementById("nav"), main = document.getElementById("main");
  var menuBtn = document.getElementById("menu-btn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  function renderNav(current) {
    nav.textContent = "";
    BLOCKS.forEach(function (b) {
      nav.appendChild(T("h2", b.title));
      var ul = el("ul");
      EX.filter(function (x) { return x.block === b.id; }).forEach(function (x) {
        var a = el("a", { href: "#" + x.id }, [T("span", String(x.n).padStart(2, "0"), "num"), T("span", x.title)]);
        if (x.id === current) a.setAttribute("aria-current", "page");
        if (done[x.id]) { var t = T("span", "done", "tick"); t.setAttribute("aria-label", "done"); a.appendChild(t); }
        ul.appendChild(el("li", {}, [a]));
      });
      nav.appendChild(ul);
    });
  }
  function renderProgress() {
    document.getElementById("progress").textContent = count() + "/" + EX.length + " done";
  }

  function home() {
    main.textContent = "";
    main.appendChild(T("h1", SITE.title));
    main.appendChild(T("p", SITE.subtitle, "lede"));
    main.appendChild(T("p", "Progress: " + count() + "/" + EX.length));
    main.appendChild(T("h2", "How to work"));
    var ol = el("ol");
    ["Read the task. Answer the Predict first question in your head.", "Copy the starter code. Save it in a file or open the file from the repo.", "Write your code. Use the Look this up terms. Open a hint only when you are stuck.", "Run the file with python3. The checks tell you if it works.", "Tick Mark done. The Library connection appears."].forEach(function (s) { ol.appendChild(T("li", s)); });
    main.appendChild(ol);
    main.appendChild(el("p", { "class": "row" }, [el("a", { "class": "btn", href: "#" + EX[0].id, text: "Start with exercise 1" })]));
    BLOCKS.forEach(function (b) {
      main.appendChild(T("h2", b.title));
      main.appendChild(T("p", b.note, "note"));
    });
  }

  function copyBtn(text) {
    var b = el("button", { type: "button", text: "Copy starter code" });
    b.addEventListener("click", function () {
      function ok() { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy starter code"; }, 1500); }
      function fallback() {
        var ta = el("textarea", { "aria-hidden": "true" }); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); ok(); } catch (e) { b.textContent = "Select the code and copy it by hand"; }
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fallback); else fallback();
    });
    return b;
  }

  function exercise(x) {
    main.textContent = "";
    var block = BLOCKS.filter(function (b) { return b.id === x.block; })[0];
    main.appendChild(T("p", block.title + " · Exercise " + x.n + " of " + EX.length, "kicker"));
    main.appendChild(T("h1", x.title));

    var s = el("section", {}, [T("h2", "Why this matters in AI"), T("p", x.why)]);
    main.appendChild(s);

    s = el("section", {}, [T("h2", "The task")]);
    x.task.forEach(function (p) { s.appendChild(T("p", p)); });
    s.appendChild(el("div", { "class": "example" }, [
      el("div", {}, [T("span", "Example input"), document.createTextNode(x.exampleIn)]),
      el("div", {}, [T("span", "Example output"), document.createTextNode(x.exampleOut)])]));
    main.appendChild(s);

    main.appendChild(el("section", { "class": "predict" }, [T("h3", "Predict first"), T("p", x.predict), T("p", "Write your answer down. Then run your code and compare.", "note")]));

    s = el("section", {}, [T("h2", "Look this up")]);
    var ul = el("ul"); x.lookup.forEach(function (q) { ul.appendChild(el("li", {}, [T("code", q)])); });
    s.appendChild(ul); main.appendChild(s);

    s = el("section", {}, [T("h2", "Hints")]);
    x.hints.forEach(function (h, i) { s.appendChild(el("details", {}, [T("summary", "Hint " + (i + 1)), T("p", h)])); });
    main.appendChild(s);

    s = el("section", {}, [T("h2", "Starter code")]);
    var pre = el("pre", {}, [T("code", x.starter)]);
    pre.setAttribute("tabindex", "0");
    s.appendChild(pre);
    var gh = el("a", { "class": "btn", href: SITE.repo + "/blob/" + SITE.branch + "/" + x.file, text: "Open file on GitHub" });
    gh.style.textDecoration = "none";
    s.appendChild(el("div", { "class": "row" }, [copyBtn(x.starter), gh]));
    s.appendChild(T("p", "The file in the repo also has the checks. Run: python3 " + x.file, "note"));
    main.appendChild(s);

    var lib = el("section", { id: "lib" }, [T("h2", "Library connection")]);
    var libBody = el("div");
    lib.appendChild(libBody);
    main.appendChild(lib);

    s = el("section", {}, [T("h2", "Words")]);
    var dl = el("dl", { "class": "words" });
    x.words.forEach(function (w) { dl.appendChild(T("dt", w[0])); dl.appendChild(T("dd", w[1])); });
    s.appendChild(dl); main.appendChild(s);

    var id = "done-" + x.id;
    var cb = el("input", { type: "checkbox", id: id });
    cb.checked = !!done[x.id];
    var label = el("label", { "for": id, text: "Mark done" });
    main.appendChild(el("div", { "class": "done" }, [cb, label]));
    function showLib() {
      libBody.textContent = "";
      if (done[x.id]) libBody.appendChild(T("p", x.library));
      else libBody.appendChild(T("p", "Hidden until you mark this exercise done. Solve it first.", "locked"));
    }
    showLib();
    cb.addEventListener("change", function () {
      if (cb.checked) done[x.id] = true; else delete done[x.id];
      save(); showLib(); renderNav(x.id); renderProgress();
    });

    var prev = EX[x.n - 2], next = EX[x.n];
    var pager = el("div", { "class": "pager" });
    pager.appendChild(prev ? el("a", { href: "#" + prev.id, text: "← " + prev.title }) : el("span"));
    pager.appendChild(next ? el("a", { href: "#" + next.id, text: next.title + " →" }) : el("span"));
    main.appendChild(pager);
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
