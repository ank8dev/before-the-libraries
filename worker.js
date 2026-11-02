// Web Worker: loads Python (Pyodide) and runs jobs, so the page never freezes.
importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
var ready = (async function () {
  var py = await loadPyodide();
  var src = await (await fetch("pyhelper.py")).text();
  py.runPython(src);
  return py;
})();
ready.then(function () { postMessage({ type: "ready" }); },
           function (e) { postMessage({ type: "fatal", message: String(e) }); });
onmessage = async function (ev) {
  var id = ev.data.id;
  try {
    var py = await ready;
    py.globals.set("btl_job", JSON.stringify(ev.data.job));
    var out = py.runPython("run_job(btl_job)");
    postMessage({ type: "result", id: id, result: JSON.parse(out) });
  } catch (e) {
    postMessage({ type: "result", id: id, result: { fatal: String(e) } });
  }
};
