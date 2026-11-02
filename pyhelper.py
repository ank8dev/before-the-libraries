# Runs inside Pyodide (Python in the browser). It runs the learner's code and the checks.
import ast, contextlib, inspect, io, itertools, json

OPS = {"Eq": "==", "NotEq": "!=", "Is": "is", "IsNot": "is not", "Lt": "<", "LtE": "<=", "Gt": ">", "GtE": ">=", "In": "in", "NotIn": "not in"}


def _short(s, n=300):
    return s if len(s) <= n else s[:n] + "..."


def _plain(v, depth=0):
    """Turn a Python value into something JSON can hold."""
    if depth > 6:
        return {"__repr__": "..."}
    if v is None or isinstance(v, (bool, int, str)):
        return v
    if isinstance(v, float):
        return v if v == v and abs(v) != float("inf") else {"__repr__": repr(v)}
    if isinstance(v, (list, tuple)):
        return [_plain(x, depth + 1) for x in list(v)[:200]]
    if isinstance(v, (set, frozenset)):
        return [_plain(x, depth + 1) for x in sorted(v, key=repr)[:200]]
    if isinstance(v, dict):
        return {"__dict__": [[_plain(k, depth + 1), _plain(x, depth + 1)] for k, x in list(v.items())[:200]]}
    if inspect.isgenerator(v):
        return _plain(list(itertools.islice(v, 200)), depth)
    return {"__repr__": _short(repr(v))}


def _err(e):
    line, where = None, "your code"
    tb = e.__traceback__
    while tb is not None:
        name = tb.tb_frame.f_code.co_filename
        if name == "<your code>":
            line, where = tb.tb_lineno, "your code"
        elif name == "<try>":
            line, where = tb.tb_lineno, "the example"
        tb = tb.tb_next
    if isinstance(e, SyntaxError):
        if e.filename == "<your code>":
            line, where = e.lineno, "your code"
        elif e.filename == "<try>":
            line, where = e.lineno, "the example"
        text = type(e).__name__ + ": " + str(e.msg)
    else:
        text = type(e).__name__ + (": " + str(e) if str(e) else "")
    return {"message": text, "line": line, "where": where}


def _ev(node, ns, name):
    return eval(compile(ast.Expression(node), name, "eval"), ns)


def _ns(code):
    ns = {"__name__": "__main__"}
    exec(compile(code, "<your code>", "exec"), ns)
    return ns


def run_try(code, snippet):
    buf, res = io.StringIO(), {}
    try:
        with contextlib.redirect_stdout(buf):
            ns = _ns(code)
            tree = ast.parse(snippet, "<try>", "exec")
            last = tree.body[-1] if tree.body and isinstance(tree.body[-1], ast.Expr) else None
            body = tree.body[:-1] if last else tree.body
            exec(compile(ast.Module(body, []), "<try>", "exec"), ns)
            if last is not None:
                val = _ev(last.value, ns, "<try>")
                shown = _short(repr(val))
                res["output"] = {"value": _plain(val), "repr": shown}
                if isinstance(last.value, ast.Call):
                    names = []
                    try:
                        names = list(inspect.signature(_ev(last.value.func, ns, "<try>")).parameters)
                    except Exception:
                        pass
                    args = []
                    for i, a in enumerate(last.value.args):
                        args.append({"name": names[i] if i < len(names) else "argument %d" % (i + 1),
                                     "value": _plain(_ev(a, ns, "<try>"))})
                    res["args"] = args
    except BaseException as e:
        res["error"] = _err(e)
    res["stdout"] = buf.getvalue()
    return res


def run_check(code, checks):
    buf, out = io.StringIO(), {"results": []}
    with contextlib.redirect_stdout(buf):
        try:
            ns = _ns(code)
        except BaseException as e:
            out["error"] = _err(e)
            out["stdout"] = buf.getvalue()
            return out
        lines = checks.splitlines()
        for node in ast.parse(checks, "<checks>").body:
            src = "\n".join(lines[node.lineno - 1:node.end_lineno])
            counted = isinstance(node, (ast.Assert, ast.Try))
            try:
                exec(compile(ast.Module([node], []), "<checks>", "exec"), ns)
                if counted:
                    out["results"].append({"ok": True, "src": src})
            except BaseException as e:
                msg = type(e).__name__ + (": " + str(e) if str(e) else "")
                r = {"ok": False, "src": src, "error": msg}
                t = getattr(node, "test", None)
                if isinstance(node, ast.Assert) and isinstance(t, ast.Compare) and len(t.ops) == 1:
                    try:
                        r["got"] = _short(repr(_ev(t.left, ns, "<checks>")))
                        r["expected"] = _short(repr(_ev(t.comparators[0], ns, "<checks>")))
                        r["op"] = OPS.get(type(t.ops[0]).__name__, "?")
                    except BaseException:
                        pass
                out["results"].append(r)
    out["stdout"] = buf.getvalue()
    return out


def run_job(job_json):
    job = json.loads(job_json)
    try:
        if job["kind"] == "try":
            res = run_try(job["code"], job["snippet"])
        else:
            res = run_check(job["code"], job["checks"])
    except BaseException as e:
        res = {"fatal": type(e).__name__ + ": " + str(e)}
    return json.dumps(res)
