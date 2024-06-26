!(function (t) {
    var e = window.webpackHotUpdate;
    window.webpackHotUpdate = function (t, n) {
        !(function (t, e) {
            if (!x[t] || !b[t]) return;
            for (var n in ((b[t] = !1), e)) Object.prototype.hasOwnProperty.call(e, n) && (p[n] = e[n]);
            0 == --g && 0 === v && A();
        })(t, n),
            e && e(t, n);
    };
    var n,
        i = !0,
        o = "3570dda20e12db840763",
        r = {},
        a = [],
        s = [];
    function l(t) {
        var e = M[t];
        if (!e) return k;
        var i = function (i) {
                return (
                    e.hot.active
                        ? (M[i] ? -1 === M[i].parents.indexOf(t) && M[i].parents.push(t) : ((a = [t]), (n = i)),
                          -1 === e.children.indexOf(i) && e.children.push(i))
                        : (console.warn("[HMR] unexpected require(" + i + ") from disposed module " + t), (a = [])),
                    k(i)
                );
            },
            o = function (t) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return k[t];
                    },
                    set: function (e) {
                        k[t] = e;
                    },
                };
            };
        for (var r in k)
            Object.prototype.hasOwnProperty.call(k, r) && "e" !== r && "t" !== r && Object.defineProperty(i, r, o(r));
        return (
            (i.e = function (t) {
                return (
                    "ready" === c && d("prepare"),
                    v++,
                    k.e(t).then(e, function (t) {
                        throw (e(), t);
                    })
                );
                function e() {
                    v--, "prepare" === c && (y[t] || P(t), 0 === v && 0 === g && A());
                }
            }),
            (i.t = function (t, e) {
                return 1 & e && (t = i(t)), k.t(t, -2 & e);
            }),
            i
        );
    }
    function h(e) {
        var i = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _selfInvalidated: !1,
            _disposeHandlers: [],
            _main: n !== e,
            active: !0,
            accept: function (t, e) {
                if (void 0 === t) i._selfAccepted = !0;
                else if ("function" == typeof t) i._selfAccepted = t;
                else if ("object" == typeof t)
                    for (var n = 0; n < t.length; n++) i._acceptedDependencies[t[n]] = e || function () {};
                else i._acceptedDependencies[t] = e || function () {};
            },
            decline: function (t) {
                if (void 0 === t) i._selfDeclined = !0;
                else if ("object" == typeof t) for (var e = 0; e < t.length; e++) i._declinedDependencies[t[e]] = !0;
                else i._declinedDependencies[t] = !0;
            },
            dispose: function (t) {
                i._disposeHandlers.push(t);
            },
            addDisposeHandler: function (t) {
                i._disposeHandlers.push(t);
            },
            removeDisposeHandler: function (t) {
                var e = i._disposeHandlers.indexOf(t);
                e >= 0 && i._disposeHandlers.splice(e, 1);
            },
            invalidate: function () {
                switch (((this._selfInvalidated = !0), c)) {
                    case "idle":
                        ((p = {})[e] = t[e]), d("ready");
                        break;
                    case "ready":
                        S(e);
                        break;
                    case "prepare":
                    case "check":
                    case "dispose":
                    case "apply":
                        (m = m || []).push(e);
                }
            },
            check: L,
            apply: T,
            status: function (t) {
                if (!t) return c;
                u.push(t);
            },
            addStatusHandler: function (t) {
                u.push(t);
            },
            removeStatusHandler: function (t) {
                var e = u.indexOf(t);
                e >= 0 && u.splice(e, 1);
            },
            data: r[e],
        };
        return (n = void 0), i;
    }
    var u = [],
        c = "idle";
    function d(t) {
        c = t;
        for (var e = 0; e < u.length; e++) u[e].call(null, t);
    }
    var f,
        p,
        _,
        m,
        g = 0,
        v = 0,
        y = {},
        b = {},
        x = {};
    function w(t) {
        return +t + "" === t ? +t : t;
    }
    function L(t) {
        if ("idle" !== c) throw new Error("check() is only allowed in idle status");
        return (
            (i = t),
            d("check"),
            ((e = 1e4),
            (e = e || 1e4),
            new Promise(function (t, n) {
                if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
                try {
                    var i = new XMLHttpRequest(),
                        r = k.p + "" + o + ".hot-update.json";
                    i.open("GET", r, !0), (i.timeout = e), i.send(null);
                } catch (t) {
                    return n(t);
                }
                i.onreadystatechange = function () {
                    if (4 === i.readyState)
                        if (0 === i.status) n(new Error("Manifest request to " + r + " timed out."));
                        else if (404 === i.status) t();
                        else if (200 !== i.status && 304 !== i.status)
                            n(new Error("Manifest request to " + r + " failed."));
                        else {
                            try {
                                var e = JSON.parse(i.responseText);
                            } catch (t) {
                                return void n(t);
                            }
                            t(e);
                        }
                };
            })).then(function (t) {
                if (!t) return d(C() ? "ready" : "idle"), null;
                (b = {}), (y = {}), (x = t.c), (_ = t.h), d("prepare");
                var e = new Promise(function (t, e) {
                    f = { resolve: t, reject: e };
                });
                p = {};
                return P(0), "prepare" === c && 0 === v && 0 === g && A(), e;
            })
        );
        var e;
    }
    function P(t) {
        x[t]
            ? ((b[t] = !0),
              g++,
              (function (t) {
                  var e = document.createElement("script");
                  (e.charset = "utf-8"),
                      (e.src = k.p + "" + t + "." + o + ".hot-update.js"),
                      document.head.appendChild(e);
              })(t))
            : (y[t] = !0);
    }
    function A() {
        d("ready");
        var t = f;
        if (((f = null), t))
            if (i)
                Promise.resolve()
                    .then(function () {
                        return T(i);
                    })
                    .then(
                        function (e) {
                            t.resolve(e);
                        },
                        function (e) {
                            t.reject(e);
                        }
                    );
            else {
                var e = [];
                for (var n in p) Object.prototype.hasOwnProperty.call(p, n) && e.push(w(n));
                t.resolve(e);
            }
    }
    function T(e) {
        if ("ready" !== c) throw new Error("apply() is only allowed in ready status");
        return (function e(i) {
            var s, l, h, u, c;
            function f(t) {
                for (
                    var e = [t],
                        n = {},
                        i = e.map(function (t) {
                            return { chain: [t], id: t };
                        });
                    i.length > 0;

                ) {
                    var o = i.pop(),
                        r = o.id,
                        a = o.chain;
                    if ((u = M[r]) && (!u.hot._selfAccepted || u.hot._selfInvalidated)) {
                        if (u.hot._selfDeclined) return { type: "self-declined", chain: a, moduleId: r };
                        if (u.hot._main) return { type: "unaccepted", chain: a, moduleId: r };
                        for (var s = 0; s < u.parents.length; s++) {
                            var l = u.parents[s],
                                h = M[l];
                            if (h) {
                                if (h.hot._declinedDependencies[r])
                                    return { type: "declined", chain: a.concat([l]), moduleId: r, parentId: l };
                                -1 === e.indexOf(l) &&
                                    (h.hot._acceptedDependencies[r]
                                        ? (n[l] || (n[l] = []), g(n[l], [r]))
                                        : (delete n[l], e.push(l), i.push({ chain: a.concat([l]), id: l })));
                            }
                        }
                    }
                }
                return { type: "accepted", moduleId: t, outdatedModules: e, outdatedDependencies: n };
            }
            function g(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    -1 === t.indexOf(i) && t.push(i);
                }
            }
            C();
            var v = {},
                y = [],
                b = {},
                L = function () {
                    console.warn("[HMR] unexpected require(" + A.moduleId + ") to disposed module");
                };
            for (var P in p)
                if (Object.prototype.hasOwnProperty.call(p, P)) {
                    var A;
                    (c = w(P)), (A = p[P] ? f(c) : { type: "disposed", moduleId: P });
                    var T = !1,
                        S = !1,
                        E = !1,
                        O = "";
                    switch ((A.chain && (O = "\nUpdate propagation: " + A.chain.join(" -> ")), A.type)) {
                        case "self-declined":
                            i.onDeclined && i.onDeclined(A),
                                i.ignoreDeclined ||
                                    (T = new Error("Aborted because of self decline: " + A.moduleId + O));
                            break;
                        case "declined":
                            i.onDeclined && i.onDeclined(A),
                                i.ignoreDeclined ||
                                    (T = new Error(
                                        "Aborted because of declined dependency: " +
                                            A.moduleId +
                                            " in " +
                                            A.parentId +
                                            O
                                    ));
                            break;
                        case "unaccepted":
                            i.onUnaccepted && i.onUnaccepted(A),
                                i.ignoreUnaccepted || (T = new Error("Aborted because " + c + " is not accepted" + O));
                            break;
                        case "accepted":
                            i.onAccepted && i.onAccepted(A), (S = !0);
                            break;
                        case "disposed":
                            i.onDisposed && i.onDisposed(A), (E = !0);
                            break;
                        default:
                            throw new Error("Unexception type " + A.type);
                    }
                    if (T) return d("abort"), Promise.reject(T);
                    if (S)
                        for (c in ((b[c] = p[c]), g(y, A.outdatedModules), A.outdatedDependencies))
                            Object.prototype.hasOwnProperty.call(A.outdatedDependencies, c) &&
                                (v[c] || (v[c] = []), g(v[c], A.outdatedDependencies[c]));
                    E && (g(y, [A.moduleId]), (b[c] = L));
                }
            var B,
                z = [];
            for (l = 0; l < y.length; l++)
                (c = y[l]),
                    M[c] &&
                        M[c].hot._selfAccepted &&
                        b[c] !== L &&
                        !M[c].hot._selfInvalidated &&
                        z.push({ module: c, parents: M[c].parents.slice(), errorHandler: M[c].hot._selfAccepted });
            d("dispose"),
                Object.keys(x).forEach(function (t) {
                    !1 === x[t] &&
                        (function (t) {
                            delete installedChunks[t];
                        })(t);
                });
            var I,
                D,
                F = y.slice();
            for (; F.length > 0; )
                if (((c = F.pop()), (u = M[c]))) {
                    var j = {},
                        Z = u.hot._disposeHandlers;
                    for (h = 0; h < Z.length; h++) (s = Z[h])(j);
                    for (r[c] = j, u.hot.active = !1, delete M[c], delete v[c], h = 0; h < u.children.length; h++) {
                        var R = M[u.children[h]];
                        R && (B = R.parents.indexOf(c)) >= 0 && R.parents.splice(B, 1);
                    }
                }
            for (c in v)
                if (Object.prototype.hasOwnProperty.call(v, c) && (u = M[c]))
                    for (D = v[c], h = 0; h < D.length; h++)
                        (I = D[h]), (B = u.children.indexOf(I)) >= 0 && u.children.splice(B, 1);
            d("apply"), void 0 !== _ && ((o = _), (_ = void 0));
            for (c in ((p = void 0), b)) Object.prototype.hasOwnProperty.call(b, c) && (t[c] = b[c]);
            var N = null;
            for (c in v)
                if (Object.prototype.hasOwnProperty.call(v, c) && (u = M[c])) {
                    D = v[c];
                    var V = [];
                    for (l = 0; l < D.length; l++)
                        if (((I = D[l]), (s = u.hot._acceptedDependencies[I]))) {
                            if (-1 !== V.indexOf(s)) continue;
                            V.push(s);
                        }
                    for (l = 0; l < V.length; l++) {
                        s = V[l];
                        try {
                            s(D);
                        } catch (t) {
                            i.onErrored &&
                                i.onErrored({ type: "accept-errored", moduleId: c, dependencyId: D[l], error: t }),
                                i.ignoreErrored || N || (N = t);
                        }
                    }
                }
            for (l = 0; l < z.length; l++) {
                var H = z[l];
                (c = H.module), (a = H.parents), (n = c);
                try {
                    k(c);
                } catch (t) {
                    if ("function" == typeof H.errorHandler)
                        try {
                            H.errorHandler(t);
                        } catch (e) {
                            i.onErrored &&
                                i.onErrored({
                                    type: "self-accept-error-handler-errored",
                                    moduleId: c,
                                    error: e,
                                    originalError: t,
                                }),
                                i.ignoreErrored || N || (N = e),
                                N || (N = t);
                        }
                    else
                        i.onErrored && i.onErrored({ type: "self-accept-errored", moduleId: c, error: t }),
                            i.ignoreErrored || N || (N = t);
                }
            }
            if (N) return d("fail"), Promise.reject(N);
            if (m)
                return e(i).then(function (t) {
                    return (
                        y.forEach(function (e) {
                            t.indexOf(e) < 0 && t.push(e);
                        }),
                        t
                    );
                });
            return (
                d("idle"),
                new Promise(function (t) {
                    t(y);
                })
            );
        })((e = e || {}));
    }
    function C() {
        if (m) return p || (p = {}), m.forEach(S), (m = void 0), !0;
    }
    function S(e) {
        Object.prototype.hasOwnProperty.call(p, e) || (p[e] = t[e]);
    }
    var M = {};
    function k(e) {
        if (M[e]) return M[e].exports;
        var n = (M[e] = { i: e, l: !1, exports: {}, hot: h(e), parents: ((s = a), (a = []), s), children: [] });
        return t[e].call(n.exports, n, n.exports, l(e)), (n.l = !0), n.exports;
    }
    (k.m = t),
        (k.c = M),
        (k.d = function (t, e, n) {
            k.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (k.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (k.t = function (t, e) {
            if ((1 & e && (t = k(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (k.r(n),
                Object.defineProperty(n, "default", { enumerable: !0, value: t }),
                2 & e && "string" != typeof t)
            )
                for (var i in t)
                    k.d(
                        n,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return n;
        }),
        (k.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return k.d(e, "a", e), e;
        }),
        (k.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (k.p = ""),
        (k.h = function () {
            return o;
        }),
        l(473)((k.s = 473));
})([
    ,
    function (t, e, n) {
        "use strict";
        var i = n(48),
            o = Object.prototype.toString;
        function r(t) {
            return "[object Array]" === o.call(t);
        }
        function a(t) {
            return void 0 === t;
        }
        function s(t) {
            return null !== t && "object" == typeof t;
        }
        function l(t) {
            if ("[object Object]" !== o.call(t)) return !1;
            var e = Object.getPrototypeOf(t);
            return null === e || e === Object.prototype;
        }
        function h(t) {
            return "[object Function]" === o.call(t);
        }
        function u(t, e) {
            if (null != t)
                if (("object" != typeof t && (t = [t]), r(t)))
                    for (var n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
                else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t);
        }
        t.exports = {
            isArray: r,
            isArrayBuffer: function (t) {
                return "[object ArrayBuffer]" === o.call(t);
            },
            isBuffer: function (t) {
                return (
                    null !== t &&
                    !a(t) &&
                    null !== t.constructor &&
                    !a(t.constructor) &&
                    "function" == typeof t.constructor.isBuffer &&
                    t.constructor.isBuffer(t)
                );
            },
            isFormData: function (t) {
                return "undefined" != typeof FormData && t instanceof FormData;
            },
            isArrayBufferView: function (t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(t)
                    : t && t.buffer && t.buffer instanceof ArrayBuffer;
            },
            isString: function (t) {
                return "string" == typeof t;
            },
            isNumber: function (t) {
                return "number" == typeof t;
            },
            isObject: s,
            isPlainObject: l,
            isUndefined: a,
            isDate: function (t) {
                return "[object Date]" === o.call(t);
            },
            isFile: function (t) {
                return "[object File]" === o.call(t);
            },
            isBlob: function (t) {
                return "[object Blob]" === o.call(t);
            },
            isFunction: h,
            isStream: function (t) {
                return s(t) && h(t.pipe);
            },
            isURLSearchParams: function (t) {
                return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function () {
                return (
                    ("undefined" == typeof navigator ||
                        ("ReactNative" !== navigator.product &&
                            "NativeScript" !== navigator.product &&
                            "NS" !== navigator.product)) &&
                    "undefined" != typeof window &&
                    "undefined" != typeof document
                );
            },
            forEach: u,
            merge: function t() {
                var e = {};
                function n(n, i) {
                    l(e[i]) && l(n)
                        ? (e[i] = t(e[i], n))
                        : l(n)
                        ? (e[i] = t({}, n))
                        : r(n)
                        ? (e[i] = n.slice())
                        : (e[i] = n);
                }
                for (var i = 0, o = arguments.length; i < o; i++) u(arguments[i], n);
                return e;
            },
            extend: function (t, e, n) {
                return (
                    u(e, function (e, o) {
                        t[o] = n && "function" == typeof e ? i(e, n) : e;
                    }),
                    t
                );
            },
            trim: function (t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "");
            },
            stripBOM: function (t) {
                return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
            },
        };
    },
    function (t, e, n) {
        var i = n(23);
        (t.exports = n(13)(!1)).push([
            t.i,
            '@font-face {\r\n    font-family: "surface";\r\n    src: url(' +
                i(n(96)) +
                ');\r\n    font-display: swap;\r\n}\r\n\r\n.logo {\r\n    background: transparent !important;\r\n    margin-bottom: 3px !important;\r\n}\r\n\r\n/* 立即加载surface字体 */\r\n.logo::after {\r\n    content: "";\r\n    font-family: "surface";\r\n}\r\n\r\n.leaflet-bar i:active {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.leaflet-bar a:active {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.layer-toolbar-button {\r\n    color: #555;\r\n    width: auto !important;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.layer-toolbar-button:active {\r\n    color: red;\r\n}\r\n\r\n.leaflet-top {\r\n    height: 100%;\r\n}\r\n\r\n.leaflet-top ::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n/* tooltip */\r\n.leaflet-tooltip {\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\r\n    /* border-radius: 10px; */\r\n    border: 7px solid #777;\r\n}\r\n\r\n/* 图例 */\r\n.legend-pane {\r\n    border-radius: 5px;\r\n    background-color: #ffffffcc;\r\n    /* box-shadow: 0 0 3px black; */\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    top: 15%;\r\n}\r\n\r\n.button-checked {\r\n    font-weight: bold;\r\n    background-color: #ddd !important;\r\n}\r\n\r\n.img-shadow {\r\n    filter: drop-shadow(rgba(0, 0, 0, 0.5) 2px 2px 5px);\r\n    /* border: 1px dotted gray */\r\n    box-shadow: 0 0 3px gray;\r\n}\r\n\r\n@keyframes fide {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.toast {\r\n    min-width: 200px;\r\n    max-width: 500px;\r\n    color: black;\r\n    background: white;\r\n    border: 4px double black;\r\n    border-radius: 8px;\r\n    box-shadow: 2px 2px 5px #333333;\r\n    box-shadow: 2px 2px 5px #333333;\r\n    pointer-events: auto;\r\n    animation: fide 1s;\r\n    animation: fide 1s;\r\n}\r\n\r\n.toast > div a {\r\n    cursor: pointer;\r\n    float: right;\r\n    width: 17px;\r\n    height: 17px;\r\n    border-radius: 50%;\r\n    background: darkgray;\r\n}\r\n\r\n.toast > div a:hover {\r\n    background: gray;\r\n    color: white;\r\n}\r\n\r\n.toast-title {\r\n    text-align: center;\r\n    padding: 3px 5px 0 0;\r\n    margin: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n.toast-content {\r\n    margin: 5px 30px 10px 15px;\r\n}\r\n',
            "",
        ]);
    },
    function (t, e) {
        var n = (t.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = n);
    },
    function (t, e) {
        var n = (t.exports =
            "undefined" != typeof window && window.Math == Math
                ? window
                : "undefined" != typeof self && self.Math == Math
                ? self
                : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (t, e, n) {
        "use strict";
        var i,
            o = function () {
                return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i;
            },
            r = (function () {
                var t = {};
                return function (e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head;
                            } catch (t) {
                                n = null;
                            }
                        t[e] = n;
                    }
                    return t[e];
                };
            })(),
            a = [];
        function s(t) {
            for (var e = -1, n = 0; n < a.length; n++)
                if (a[n].identifier === t) {
                    e = n;
                    break;
                }
            return e;
        }
        function l(t, e) {
            for (var n = {}, i = [], o = 0; o < t.length; o++) {
                var r = t[o],
                    l = e.base ? r[0] + e.base : r[0],
                    h = n[l] || 0,
                    u = "".concat(l, " ").concat(h);
                n[l] = h + 1;
                var c = s(u),
                    d = { css: r[1], media: r[2], sourceMap: r[3] };
                -1 !== c
                    ? (a[c].references++, a[c].updater(d))
                    : a.push({ identifier: u, updater: m(d, e), references: 1 }),
                    i.push(u);
            }
            return i;
        }
        function h(t) {
            var e = document.createElement("style"),
                i = t.attributes || {};
            if (void 0 === i.nonce) {
                var o = n.nc;
                o && (i.nonce = o);
            }
            if (
                (Object.keys(i).forEach(function (t) {
                    e.setAttribute(t, i[t]);
                }),
                "function" == typeof t.insert)
            )
                t.insert(e);
            else {
                var a = r(t.insert || "head");
                if (!a)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                a.appendChild(e);
            }
            return e;
        }
        var u,
            c =
                ((u = []),
                function (t, e) {
                    return (u[t] = e), u.filter(Boolean).join("\n");
                });
        function d(t, e, n, i) {
            var o = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
            if (t.styleSheet) t.styleSheet.cssText = c(e, o);
            else {
                var r = document.createTextNode(o),
                    a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
            }
        }
        function f(t, e, n) {
            var i = n.css,
                o = n.media,
                r = n.sourceMap;
            if (
                (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
                r &&
                    "undefined" != typeof btoa &&
                    (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                        " */"
                    )),
                t.styleSheet)
            )
                t.styleSheet.cssText = i;
            else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i));
            }
        }
        var p = null,
            _ = 0;
        function m(t, e) {
            var n, i, o;
            if (e.singleton) {
                var r = _++;
                (n = p || (p = h(e))), (i = d.bind(null, n, r, !1)), (o = d.bind(null, n, r, !0));
            } else
                (n = h(e)),
                    (i = f.bind(null, n, e)),
                    (o = function () {
                        !(function (t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t);
                        })(n);
                    });
            return (
                i(t),
                function (e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        i((t = e));
                    } else o();
                }
            );
        }
        t.exports = function (t, e) {
            (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
            var n = l((t = t || []), e);
            return function (t) {
                if (((t = t || []), "[object Array]" === Object.prototype.toString.call(t))) {
                    for (var i = 0; i < n.length; i++) {
                        var o = s(n[i]);
                        a[o].references--;
                    }
                    for (var r = l(t, e), h = 0; h < n.length; h++) {
                        var u = s(n[h]);
                        0 === a[u].references && (a[u].updater(), a.splice(u, 1));
                    }
                    n = r;
                }
            };
        };
    },
    function (t, e, n) {
        var i = n(23);
        (t.exports = n(13)(!1)).push([
            t.i,
            "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\ttransform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(" +
                i(n(172)) +
                ");\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(" +
                i(n(173)) +
                ");\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url(" +
                i(n(174)) +
                ');\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: "";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n',
            "",
        ]);
    },
    function (t, e, n) {
        var i = n(43)("wks"),
            o = n(38),
            r = n(4).Symbol,
            a = "function" == typeof r;
        (t.exports = function (t) {
            return i[t] || (i[t] = (a && r[t]) || (a ? r : o)("Symbol." + t));
        }).store = i;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (e.createLayerToolbar = function (t) {
            return (
                (t._toolbar = null),
                t.userLayers.on("currentLayerChanged", function () {
                    t._toolbar && t._toolbar.remove(t);
                    var e = t.userLayers.getCurrentLayer();
                    e && e.getToolbar && (t._toolbar = e.getToolbar().addTo(t));
                }),
                t.userLayers.on("layerremove ", function (e) {
                    e.layer == t.userLayers.getCurrentLayer() && t.userLayers.setCurrentLayer(null);
                }),
                t._toolbar
            );
        });
        L.Map.mergeOptions({ hasLayerToolbar: !0 }),
            L.Map.addInitHook(function () {
                this.options.hasLayerToolbar && (this.layerToolbar = i(this, this.options));
            });
        e.LayerToolbar = L.Control.extend({
            options: { position: "topleft" },
            initialize: function (t, e) {
                L.setOptions(this, e), (this.layer = t);
            },
            onAdd: function () {
                return (
                    (this._container = L.DomUtil.create("div", " leaflet-bar layer-toolbar")),
                    L.DomEvent.on(
                        this._container,
                        "mousedown dblclick mousemove mousewheel",
                        L.DomEvent.stopPropagation
                    )
                        .on(this._container, "click", L.DomEvent.stop)
                        .on(this._container, "click", this._refocusOnMap, this),
                    this._container
                );
            },
            onRemove: function () {
                L.DomUtil.remove(this._container);
            },
            _redraw: function () {
                this._map.fire("viewreset", this);
            },
            _createButton: function (t, e, n, i, o) {
                var r = L.DomUtil.create("a", n, i);
                return (
                    (r.innerHTML = t),
                    (r.href = "#"),
                    (r.title = e),
                    r.setAttribute("role", "button"),
                    r.setAttribute("aria-label", e),
                    L.DomEvent.on(r, "mousedown dblclick", L.DomEvent.stopPropagation)
                        .on(r, "click", L.DomEvent.stop)
                        .on(r, "click", o, this)
                        .on(r, "click", this._refocusOnMap, this),
                    r
                );
            },
            checkItem: function (t, e) {
                e ? L.DomUtil.addClass(t, "button-checked") : L.DomUtil.removeClass(t, "button-checked");
            },
        });
    },
    function (t, e, n) {
        var i = n(17);
        t.exports = function (t) {
            if (!i(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    function (t, e, n) {
        var i = n(18),
            o = n(39);
        t.exports = n(12)
            ? function (t, e, n) {
                  return i.f(t, e, o(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Station = void 0),
            (e.station = function (t, e, n) {
                return new i(t, e, n);
            }),
            n(58);
        var i = (e.Station = L.CircleMarker.extend({
            initialize: function (t, e, n) {
                (this.options.style = n),
                    (this._latlng = L.latLng(t)),
                    (this._radius = this.options.radius),
                    e && this.setData(e),
                    this.getTooltipHtml && this.bindTooltip(this.getTooltipHtml),
                    this.getPopupHtml && this.bindPopup(this.getPopupHtml);
            },
            setData: function (t) {
                return (this._data = t), this;
            },
            getData: function () {
                return this._data;
            },
            getBounds: function () {
                var t = [this._radius, this._radiusY || this._radius];
                return new L.LatLngBounds(
                    this._map.layerPointToLatLng(this._point.subtract(t)),
                    this._map.layerPointToLatLng(this._point.add(t))
                );
            },
            _empty: function () {
                return (
                    !this._data ||
                    (this._radius && !this._renderer._bounds.intersects(this._pxBounds)) ||
                    !this._isVisible()
                );
            },
            _isVisible: function () {
                if (!this.options.style || !this.options.style.autoRank) return !0;
                var t = this.getData();
                if (t) {
                    var e = this._map.getZoom();
                    return this._testVisible(e, t.properties.rank);
                }
                return !0;
            },
            _testVisible: function (t, e) {
                if (!e) return !0;
                return [3, 4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9][Math.round(Math.log(e) / Math.LN2)] < t;
            },
            getTooltipHtml: function (t) {
                var e = t.options ? t.options.fields || t.options.style.fields : null,
                    n = t.getData().properties,
                    i = "<div><table>";
                for (var o in n) {
                    i +=
                        "<tr><td style=text-align:right><b>" +
                        ((e && e[o]) || o) +
                        "</b>:</td><td>" +
                        n[o] +
                        "</td></tr>";
                }
                return i + "</table></div>";
            },
            _updatePath: function () {
                this._renderer._updateStation(this);
            },
        }));
    },
    function (t, e, n) {
        t.exports = !n(22)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (t, e) {
        t.exports = function (t) {
            var e = [];
            return (
                (e.toString = function () {
                    return this.map(function (e) {
                        var n = (function (t, e) {
                            var n = t[1] || "",
                                i = t[3];
                            if (!i) return n;
                            if (e && "function" == typeof btoa) {
                                var o =
                                        ((a = i),
                                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                                            btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                                            " */"),
                                    r = i.sources.map(function (t) {
                                        return "/*# sourceURL=" + i.sourceRoot + t + " */";
                                    });
                                return [n].concat(r).concat([o]).join("\n");
                            }
                            var a;
                            return [n].join("\n");
                        })(e, t);
                        return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
                    }).join("");
                }),
                (e.i = function (t, n) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var i = {}, o = 0; o < this.length; o++) {
                        var r = this[o][0];
                        "number" == typeof r && (i[r] = !0);
                    }
                    for (o = 0; o < t.length; o++) {
                        var a = t[o];
                        ("number" == typeof a[0] && i[a[0]]) ||
                            (n && !a[2] ? (a[2] = n) : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
                    }
                }),
                e
            );
        };
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e, n) {
        var i = n(4),
            o = n(3),
            r = n(45),
            a = n(10),
            s = n(14),
            l = function (t, e, n) {
                var h,
                    u,
                    c,
                    d = t & l.F,
                    f = t & l.G,
                    p = t & l.S,
                    _ = t & l.P,
                    m = t & l.B,
                    g = t & l.W,
                    v = f ? o : o[e] || (o[e] = {}),
                    y = v.prototype,
                    b = f ? i : p ? i[e] : (i[e] || {}).prototype;
                for (h in (f && (n = e), n))
                    ((u = !d && b && void 0 !== b[h]) && s(v, h)) ||
                        ((c = u ? b[h] : n[h]),
                        (v[h] =
                            f && "function" != typeof b[h]
                                ? n[h]
                                : m && u
                                ? r(c, i)
                                : g && b[h] == c
                                ? (function (t) {
                                      var e = function (e, n, i) {
                                          if (this instanceof t) {
                                              switch (arguments.length) {
                                                  case 0:
                                                      return new t();
                                                  case 1:
                                                      return new t(e);
                                                  case 2:
                                                      return new t(e, n);
                                              }
                                              return new t(e, n, i);
                                          }
                                          return t.apply(this, arguments);
                                      };
                                      return (e.prototype = t.prototype), e;
                                  })(c)
                                : _ && "function" == typeof c
                                ? r(Function.call, c)
                                : c),
                        _ && (((v.virtual || (v.virtual = {}))[h] = c), t & l.R && y && !y[h] && a(y, h, c)));
            };
        (l.F = 1), (l.G = 2), (l.S = 4), (l.P = 8), (l.B = 16), (l.W = 32), (l.U = 64), (l.R = 128), (t.exports = l);
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    function (t, e, n) {
        var i = n(9),
            o = n(84),
            r = n(76),
            a = Object.defineProperty;
        e.f = n(12)
            ? Object.defineProperty
            : function (t, e, n) {
                  if ((i(t), (e = r(e, !0)), i(n), o))
                      try {
                          return a(t, e, n);
                      } catch (t) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (t[e] = n.value), t;
              };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = L.Class.extend({
                statics: {
                    getCharFromCACode: function (t) {
                        var e = +t;
                        return (
                            (e = isNaN(e) || e < 0 || e > 10 ? 9 : Math.round(0.8 * e)), String.fromCharCode(e + 196)
                        );
                    },
                    getCharFromWeatherCode: function (t) {
                        var e = +t;
                        return e < 4 || e > 99
                            ? ""
                            : e < 65
                            ? String.fromCharCode(e + 61)
                            : String.fromCharCode(e + 95);
                    },
                    drawWindBar: function (t, e, n) {
                        if (!(n < 0.1 || n > 200)) {
                            t.setLineDash([]);
                            var i = 22;
                            t.rotate((e * Math.PI) / 180), t.beginPath(), t.moveTo(0, 0), t.lineTo(0, -i);
                            for (
                                var o = parseInt(n / 2 + 0.5),
                                    r = parseInt(o / 10),
                                    a = parseInt((o - 10 * r) / 2),
                                    s = Math.round(o - 10 * r - 2 * a),
                                    l = 0;
                                l < r;
                                l++
                            )
                                t.moveTo(0, -i), t.lineTo(10, -i - 2), t.lineTo(0, 4 - i), (i -= 5);
                            r > 0 && (i -= 3);
                            for (var h = 0; h < a; h++) t.moveTo(0, -i), t.lineTo(10, -i - 6), (i -= 4);
                            s >= 1 && (t.moveTo(0, -i), t.lineTo(5, -i - 3), (i -= 4)),
                                t.stroke(),
                                t.rotate((-e * Math.PI) / 180);
                        }
                    },
                    drawArrow: function (t, e, n) {
                        if (!(n < 0.1)) {
                            t.setLineDash([]);
                            var i = 2 * -n,
                                o = ((e + 180) * Math.PI) / 180;
                            t.rotate(o),
                                t.beginPath(),
                                t.moveTo(0, 0),
                                t.lineTo(0, i),
                                t.lineTo(-3, i + 3 + 4),
                                t.moveTo(0, i),
                                t.lineTo(3, i + 3 + 4),
                                t.stroke(),
                                t.rotate(-o);
                        }
                    },
                    drawCloudAmount: function (t, e, n, i) {
                        if (e >= 0 && e <= 9) {
                            t.setLineDash([]);
                            var o = syb.cn[e];
                            this.drawSymbolDM(t, o, n, i);
                        }
                    },
                    drawWeather: function (t, e, n, i) {
                        if ((e -= 2) > 0 && e < 100) {
                            t.setLineDash([]);
                            var o = syb.ww[e];
                            this.drawSymbolDM(t, o, n, i);
                        }
                    },
                    drawCloud: function (t, e, n, i) {
                        if (e > 0 && e < 30) {
                            t.setLineDash([]);
                            var o = parseInt(e / 10),
                                r = e - 10 * o;
                            if (r > 0 && r < 9) {
                                var a = ["cl", "cm", "ch"];
                                a = a[o];
                                var s = syb[a][r];
                                this.drawSymbolDM(t, s, n, i);
                            }
                        }
                    },
                    drawSymbolDM: function (t, e, n, i) {
                        t.setLineDash([]);
                        for (var o = n.x, r = n.y, a = o, s = r, l = 0; 0 != e[l][0]; l++) {
                            var h = e[l][1] * i,
                                u = e[l][2] * i;
                            switch (e[l][0]) {
                                case 777:
                                    var c = h;
                                    t.beginPath(), t.arc(o, r, c + 1, 0, 2 * Math.PI), t.fill(), t.stroke();
                                    break;
                                case 888:
                                    (o = a + h),
                                        (r = s - u),
                                        t.beginPath(),
                                        t.moveTo(a, s),
                                        t.lineTo(o, r),
                                        t.stroke(),
                                        (a = o),
                                        (s = r);
                                    break;
                                case 999:
                                    (a = o = a + h), (s = r = s - u);
                            }
                        }
                    },
                },
            }));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.StationGroup = void 0),
            (e.stationGroup = function (t) {
                return new o(t);
            });
        var i = n(11),
            o = (e.StationGroup = L.GeoJSON.extend({
                options: {
                    caption: "站点图",
                    nameVisible: !0,
                    pointVisible: !0,
                    autoRank: !0,
                    font: "12px tahoma",
                    fillStyle: "#444",
                    shadowColor: "#aaa",
                    shadowBlur: 2,
                    radius: 10,
                },
                initialize: function (t) {
                    L.setOptions(this, o.options),
                        L.setOptions(this, t),
                        (this.options.pointToLayer = L.bind(function (t, e) {
                            return (0, i.station)(e, t, this.options);
                        }, this)),
                        L.GeoJSON.prototype.initialize.call(this, null, this.options);
                },
                setData: function (t) {
                    return (
                        (this._data = t),
                        this.clearLayers(),
                        t.properties &&
                            ((this.options.fields = this.options.fields || t.properties.fields),
                            (this.options.date = this.options.date || t.properties.date),
                            (this.options.level = this.options.level || t.properties.level),
                            this.setCaption(t.properties.name)),
                        this.addData(t),
                        this
                    );
                },
                getData: function () {
                    return this._data;
                },
                getInfo: function () {
                    var t = this.getData(),
                        e = t.properties,
                        n = t.features;
                    return "名称: " + e.name + "\n时间: " + e.date.toLocaleString() + "\n站数: " + n.length + " 站";
                },
            }));
    },
    function (t, e, n) {
        var i = n(91),
            o = n(27);
        t.exports = function (t) {
            return i(o(t));
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return "string" != typeof t
                ? t
                : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                  /["'() \t\n]/.test(t) ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t);
        };
    },
    ,
    ,
    ,
    function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e) {
        var n = Math.ceil,
            i = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
        };
    },
    function (t, e, n) {
        var i = n(43)("keys"),
            o = n(38);
        t.exports = function (t) {
            return i[t] || (i[t] = o(t));
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.addFactory = function (t, e) {
                return (i[t] = e), e;
            }),
            (e.getFactory = function (t) {
                if (!i[t]) throw { message: "不支持的数据协议" + tag + ": " + urlTemplate };
                return i[t];
            }),
            (e.create = function (t, e) {
                var n = t.indexOf("://");
                if (n < 0) throw { message: "url格式错误:" + t };
                var o = t.substr(0, n).toLowerCase(),
                    r = (0, i[o])(t, e);
                return (r.type = o), r;
            });
        var i = {};
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.palette = e.Palette = void 0);
        var i,
            o = n(123),
            r = (i = o) && i.__esModule ? i : { default: i };
        var a = (e.Palette = L.Class.extend({
            colors: ["a7f389", "3cba3c", "60b8e1", "0000ff", "f900f7"],
            outColors: [0, 0],
            levels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            initialize: function (t, e) {
                (this.levels = e || this.levels), this.setColors(t || this.colors);
            },
            setColors: function (t) {
                var e = t[0],
                    n = void 0;
                (this.colors = []),
                    Array.isArray(e)
                        ? ((this.outColors = t[0]), (n = t.slice(1)))
                        : ((this.outColors = [0, 0]), (n = t));
                var i = this.levels,
                    o = r.default;
                o.setSpectrumByArray(n), o.setNumberRange(0, i.length - 2);
                for (var a = 0; a < i.length - 1; a++) this.colors.push(o.colourAt(a));
            },
            getColorIndex: function (t) {
                if (t < this.levels[0]) return -1;
                if (t > this.levels[this.levels.length - 1]) return -2;
                for (var e = 0; e < this.levels.length - 1; e++)
                    if (t >= this.levels[e] && t < this.levels[e + 1]) return e;
                return 0;
            },
            getColor: function (t) {
                var e = this.getColorIndex(t),
                    n = "00000000";
                return (
                    e >= 0
                        ? (n = this.colors[e])
                        : -1 == e && this.outColors[0]
                        ? (n = this.outColors[0])
                        : -2 == e && this.outColors[1] && (n = this.outColors[1]),
                    n.length < 8 && (n += "ff"),
                    n
                );
            },
            getColorRgba: function (t) {
                var e = this.getColor(t);
                return this.hex2Rgba(e);
            },
            hex2Rgba: function (t) {
                return [
                    parseInt(t.substr(0, 2), 16),
                    parseInt(t.substr(2, 2), 16),
                    parseInt(t.substr(4, 2), 16),
                    parseInt(t.substr(6, 2), 16),
                ];
            },
            drawLegend: function (t, e) {
                var n = this.levels;
                (t.textBaseline = "middle"), (t.font = "14px Arial");
                var i = n.length - 1;
                this.outColors[0] && (e -= 20), this.outColors[1] && (e -= 20);
                var o = Math.round(e / i),
                    r = 20;
                this.outColors[0] &&
                    ((t.fillStyle = "#" + this.outColors[0]),
                    t.beginPath(),
                    (r += 20),
                    t.moveTo(15, r - 20),
                    t.lineTo(10, r),
                    t.lineTo(20, r),
                    t.closePath(),
                    t.fill()),
                    (t.strokeStyle = "white"),
                    (t.textBaseline = "middle");
                for (var a = 0; a < n.length; a++) {
                    var s = this.levels[a];
                    a < n.length - 1 && ((t.fillStyle = "#" + this.colors[a]), t.fillRect(10, r, 10, o)),
                        (t.fillStyle = "black"),
                        t.strokeText(s, 25, r),
                        t.fillText(s, 25, r),
                        (r += o);
                }
                this.outColors[1] &&
                    ((t.fillStyle = "#" + this.outColors[1]),
                    t.beginPath(),
                    (r -= o),
                    t.moveTo(10, r),
                    t.lineTo(20, r),
                    t.lineTo(15, r + 20),
                    t.closePath(),
                    t.fill());
            },
        }));
        e.palette = function (t, e) {
            return new a(t, e);
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(132);
        Object.defineProperty(e, "label", {
            enumerable: !0,
            get: function () {
                return i.label;
            },
        }),
            Object.defineProperty(e, "Label", {
                enumerable: !0,
                get: function () {
                    return i.Label;
                },
            });
    },
    function (t, e, n) {
        "use strict";
        function i(t, e) {
            var n = Math.round((e.lng - t.startLng) / t.lngGridSpace),
                i = Math.round((e.lat - t.startLat) / t.latGridSpace);
            return t.data[i * t.lngGridNumber + n];
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getSpline = function (t, e) {
                function n(t, e, n) {
                    for (
                        var i = [
                                ((1 - n) * (1 - n) * (1 - n)) / 6,
                                (3 * n * n * n - 6 * n * n + 4) / 6,
                                (-3 * n * n * n + 3 * n * n + 3 * n + 1) / 6,
                                (n * n * n) / 6,
                            ],
                            o = i.length,
                            r = { x: 0, y: 0 },
                            a = 0;
                        a < o;
                        a++
                    )
                        (r.x += i[a] * t[e + a].x), (r.y += i[a] * t[e + a].y);
                    return r;
                }
                if (((e = e || 0.2), t.length < 4)) return t;
                for (var i = [t[0]], o = 0; o < t.length - 4; o++)
                    for (
                        var r = t[o],
                            a = t[o + 1],
                            s = Math.sqrt((r.x - a.x) * (r.x - a.x) + (r.y - a.y) * (r.y - a.y)),
                            l = 0;
                        l < s;
                        l += 10 * e
                    ) {
                        var h = n(t, o, l / s);
                        i.push(h);
                    }
                return i.push(t[t.length - 1]), i;
            }),
            (e.lineClip = function (t, e) {
                var n,
                    i = [],
                    o = void 0,
                    r = void 0;
                for (o = 0, n = t.length; o < n - 1; o++)
                    (r = L.LineUtil.clipSegment(t[o], t[o + 1], e, o, !0)) &&
                        (i.push(r[0]), (r[1] === t[o + 1] && o !== n - 2) || i.push(r[1]));
                return i;
            }),
            (e.getSpline1 = function (t, e, n, i) {
                if (t.length < 2) return t;
                (n = n || 0.5), (e = !!e), (i = i || 10);
                var o = t.slice(0),
                    r = [],
                    a = void 0,
                    s = void 0,
                    l = void 0,
                    h = void 0,
                    u = void 0,
                    c = void 0,
                    d = void 0,
                    f = void 0,
                    p = void 0,
                    _ = void 0,
                    m = void 0,
                    g = void 0,
                    v = void 0;
                e
                    ? (o.unshift(t[t.length - 1]), o.unshift(t[t.length - 2]), o.push(t[0]))
                    : (o.unshift(t[0]), o.push(t[t.length - 1]));
                for (v = 1; v < o.length - 2; v++) {
                    var y = o[v - 1],
                        b = o[v],
                        x = o[v + 1],
                        w = o[v + 2];
                    for (
                        l = (x.x - y.x) * n, h = (w.x - b.x) * n, u = (x.y - y.y) * n, c = (w.y - b.y) * n, g = 0;
                        g <= i;
                        g++
                    )
                        (m = g / i),
                            (d = 2 * Math.pow(m, 3) - 3 * Math.pow(m, 2) + 1),
                            (f = -2 * Math.pow(m, 3) + 3 * Math.pow(m, 2)),
                            (p = Math.pow(m, 3) - 2 * Math.pow(m, 2) + m),
                            (_ = Math.pow(m, 3) - Math.pow(m, 2)),
                            (a = d * b.x + f * x.x + p * l + _ * h),
                            (s = d * b.y + f * x.y + p * u + _ * c),
                            r.push({ x: a, y: s });
                }
                return r;
            }),
            (e.gridProjetion = function (t, e) {
                for (var n = 0; n < t.data.length; n++);
                for (
                    var o = e.project(L.latLng(t.startLat, t.startLng)),
                        r = e.project(L.latLng(t.endLat, t.endLng)),
                        a = Math.abs((r.x - o.x) / (r.y - o.y)),
                        s = t.lngGridNumber,
                        l = Math.round(s / a),
                        h = (r.x - o.x) / (s - 1),
                        u = (r.y - o.y) / (s / a - 1),
                        c = [],
                        d = 0;
                    d < l;
                    d++
                )
                    for (var f = 0; f < s; f++) {
                        var p = e.unproject(L.point(o.x + f * h, o.y + d * u)),
                            _ = i(t, p);
                        c.push(_);
                    }
                return c;
            }),
            (e.getValueFromGrid = i);
    },
    function (t, e) {
        t.exports = !0;
    },
    function (t, e, n) {
        var i = n(18).f,
            o = n(14),
            r = n(7)("toStringTag");
        t.exports = function (t, e, n) {
            t && !o((t = n ? t : t.prototype), r) && i(t, r, { configurable: !0, value: e });
        };
    },
    function (t, e, n) {
        var i = n(83),
            o = n(44);
        t.exports =
            Object.keys ||
            function (t) {
                return i(t, o);
            };
    },
    function (t, e) {
        var n = 0,
            i = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36));
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        };
    },
    function (t, e, n) {
        var i = n(17),
            o = n(4).document,
            r = i(o) && i(o.createElement);
        t.exports = function (t) {
            return r ? o.createElement(t) : {};
        };
    },
    function (t, e, n) {
        t.exports = n(102);
    },
    function (t, e, n) {
        var i = n(27);
        t.exports = function (t) {
            return Object(i(t));
        };
    },
    function (t, e, n) {
        var i = n(3),
            o = n(4),
            r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return r[t] || (r[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: i.version,
            mode: n(35) ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
    },
    function (t, e) {
        t.exports =
            "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    function (t, e, n) {
        var i = n(46);
        t.exports = function (t, e, n) {
            if ((i(t), void 0 === e)) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, i) {
                        return t.call(e, n, i);
                    };
                case 3:
                    return function (n, i, o) {
                        return t.call(e, n, i, o);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.weatherLayerGroup = function (t, e) {
                return new o(t, e);
            });
        var i = ["navy", "Brown", "DarkGreen ", "Indigo", "drak"],
            o = (e.WeahterLayerGroup = L.LayerGroup.extend({
                addLayer: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (
                        (t.options &&
                            "auto" === t.options.color &&
                            ((t._autoColor = !0), (t.options.color = this._getAutoColor())),
                        e && this._map && this._map.addLayer(t),
                        !this.hasLayer(t))
                    ) {
                        var n = this.getLayerId(t);
                        (this._layers[n] = t), this.fire("layeradd", { layer: t });
                    }
                    return this;
                },
                removeLayer: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = t in this._layers ? t : this.getLayerId(t);
                    return (
                        this._layers[n] &&
                            (!this._map ||
                                (this._layers[n].options.locked && e) ||
                                (this._map.removeLayer(this._layers[n]),
                                this._layers[n] == this.getCurrentLayer() && this.setCurrentLayer(null)),
                            !this._layers[n].options.locked &&
                                e &&
                                (delete this._layers[n], this.fire("layerremove", { layer: t }))),
                        this
                    );
                },
                showLayer: function (t, e) {
                    e && !this._map.hasLayer(t) ? this.addLayer(t, !0) : this.removeLayer(t, !1);
                },
                _getAutoColor: function () {
                    var t = [];
                    this.eachLayer(function (e) {
                        e._autoColor && t.push(e.options.color);
                    }, this);
                    for (var e = 0, n = i.length; e < n; e++) if (-1 === t.indexOf(i[e])) return i[e];
                    return "black";
                },
                _currentLayer: null,
                getCurrentLayer: function () {
                    return this._currentLayer;
                },
                setCurrentLayer: function (t) {
                    if (t != this._currentLayer) {
                        var e = this._currentLayer;
                        (this._currentLayer = t),
                            e && e.onUnSelect && e.onUnSelect(),
                            t && t.onSelected && t.onSelected(),
                            this.fire("currentLayerChanged", { layer: t, oldLayer: e });
                    }
                },
                getLayersFuncs: function (t, e) {
                    var n = [];
                    function i(t, e) {
                        for (var i in n) {
                            var o = n[i];
                            if (t === o.source && e === o.cmd) return i;
                        }
                        return -1;
                    }
                    for (var o in (e = e || this._layers)) {
                        var r = void 0,
                            a = e[o];
                        a[t] &&
                            (((r = L.bind(a[t], a)).source = a.dataSource ? a.dataSource : this.getLayerId(a)),
                            (r.cmd = t),
                            i(r.source, r.cmd) < 0 && n.push(r));
                    }
                    return n;
                },
                _invoke: function (t, e, n) {
                    var i = this.getLayersFuncs(t, n);
                    for (var o in i) i[o] && i[o](e);
                    return this;
                },
                load: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return this._invoke("load", t, e), this;
                },
                next: function (t) {
                    return this._invoke("next", t), this;
                },
                down: function (t) {
                    return this._invoke("down", t), this;
                },
                setDate: function (t) {
                    return this._invoke("setDate", t), this;
                },
                getBounds: function () {
                    var t = L.latLngBounds();
                    for (var e in this._layers) {
                        var n = this._layers[e];
                        n.getBounds && t.extend(n.getBounds ? n.getBounds() : n.getLatLng());
                    }
                    return t;
                },
            }));
    },
    function (t, e, n) {
        "use strict";
        t.exports = function (t, e) {
            return function () {
                for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
                return t.apply(e, n);
            };
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(1);
        function o(t) {
            return encodeURIComponent(t)
                .replace(/%3A/gi, ":")
                .replace(/%24/g, "$")
                .replace(/%2C/gi, ",")
                .replace(/%20/g, "+")
                .replace(/%5B/gi, "[")
                .replace(/%5D/gi, "]");
        }
        t.exports = function (t, e, n) {
            if (!e) return t;
            var r;
            if (n) r = n(e);
            else if (i.isURLSearchParams(e)) r = e.toString();
            else {
                var a = [];
                i.forEach(e, function (t, e) {
                    null != t &&
                        (i.isArray(t) ? (e += "[]") : (t = [t]),
                        i.forEach(t, function (t) {
                            i.isDate(t) ? (t = t.toISOString()) : i.isObject(t) && (t = JSON.stringify(t)),
                                a.push(o(e) + "=" + o(t));
                        }));
                }),
                    (r = a.join("&"));
            }
            if (r) {
                var s = t.indexOf("#");
                -1 !== s && (t = t.slice(0, s)), (t += (-1 === t.indexOf("?") ? "?" : "&") + r);
            }
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return !(!t || !t.__CANCEL__);
        };
    },
    function (t, e, n) {
        "use strict";
        (function (e) {
            var i = n(1),
                o = n(108),
                r = { "Content-Type": "application/x-www-form-urlencoded" };
            function a(t, e) {
                !i.isUndefined(t) && i.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
            }
            var s,
                l = {
                    adapter:
                        (("undefined" != typeof XMLHttpRequest ||
                            (void 0 !== e && "[object process]" === Object.prototype.toString.call(e))) &&
                            (s = n(52)),
                        s),
                    transformRequest: [
                        function (t, e) {
                            return (
                                o(e, "Accept"),
                                o(e, "Content-Type"),
                                i.isFormData(t) ||
                                i.isArrayBuffer(t) ||
                                i.isBuffer(t) ||
                                i.isStream(t) ||
                                i.isFile(t) ||
                                i.isBlob(t)
                                    ? t
                                    : i.isArrayBufferView(t)
                                    ? t.buffer
                                    : i.isURLSearchParams(t)
                                    ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString())
                                    : i.isObject(t)
                                    ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t))
                                    : t
                            );
                        },
                    ],
                    transformResponse: [
                        function (t) {
                            if ("string" == typeof t)
                                try {
                                    t = JSON.parse(t);
                                } catch (t) {}
                            return t;
                        },
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function (t) {
                        return t >= 200 && t < 300;
                    },
                };
            (l.headers = { common: { Accept: "application/json, text/plain, */*" } }),
                i.forEach(["delete", "get", "head"], function (t) {
                    l.headers[t] = {};
                }),
                i.forEach(["post", "put", "patch"], function (t) {
                    l.headers[t] = i.merge(r);
                }),
                (t.exports = l);
        }.call(this, n(107)));
    },
    function (t, e, n) {
        "use strict";
        var i = n(1),
            o = n(109),
            r = n(111),
            a = n(49),
            s = n(112),
            l = n(115),
            h = n(116),
            u = n(53);
        t.exports = function (t) {
            return new Promise(function (e, n) {
                var c = t.data,
                    d = t.headers;
                i.isFormData(c) && delete d["Content-Type"];
                var f = new XMLHttpRequest();
                if (t.auth) {
                    var p = t.auth.username || "",
                        _ = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                    d.Authorization = "Basic " + btoa(p + ":" + _);
                }
                var m = s(t.baseURL, t.url);
                if (
                    (f.open(t.method.toUpperCase(), a(m, t.params, t.paramsSerializer), !0),
                    (f.timeout = t.timeout),
                    (f.onreadystatechange = function () {
                        if (
                            f &&
                            4 === f.readyState &&
                            (0 !== f.status || (f.responseURL && 0 === f.responseURL.indexOf("file:")))
                        ) {
                            var i = "getAllResponseHeaders" in f ? l(f.getAllResponseHeaders()) : null,
                                r = {
                                    data: t.responseType && "text" !== t.responseType ? f.response : f.responseText,
                                    status: f.status,
                                    statusText: f.statusText,
                                    headers: i,
                                    config: t,
                                    request: f,
                                };
                            o(e, n, r), (f = null);
                        }
                    }),
                    (f.onabort = function () {
                        f && (n(u("Request aborted", t, "ECONNABORTED", f)), (f = null));
                    }),
                    (f.onerror = function () {
                        n(u("Network Error", t, null, f)), (f = null);
                    }),
                    (f.ontimeout = function () {
                        var e = "timeout of " + t.timeout + "ms exceeded";
                        t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(u(e, t, "ECONNABORTED", f)), (f = null);
                    }),
                    i.isStandardBrowserEnv())
                ) {
                    var g = (t.withCredentials || h(m)) && t.xsrfCookieName ? r.read(t.xsrfCookieName) : void 0;
                    g && (d[t.xsrfHeaderName] = g);
                }
                if (
                    ("setRequestHeader" in f &&
                        i.forEach(d, function (t, e) {
                            void 0 === c && "content-type" === e.toLowerCase() ? delete d[e] : f.setRequestHeader(e, t);
                        }),
                    i.isUndefined(t.withCredentials) || (f.withCredentials = !!t.withCredentials),
                    t.responseType)
                )
                    try {
                        f.responseType = t.responseType;
                    } catch (e) {
                        if ("json" !== t.responseType) throw e;
                    }
                "function" == typeof t.onDownloadProgress && f.addEventListener("progress", t.onDownloadProgress),
                    "function" == typeof t.onUploadProgress &&
                        f.upload &&
                        f.upload.addEventListener("progress", t.onUploadProgress),
                    t.cancelToken &&
                        t.cancelToken.promise.then(function (t) {
                            f && (f.abort(), n(t), (f = null));
                        }),
                    c || (c = null),
                    f.send(c);
            });
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(110);
        t.exports = function (t, e, n, o, r) {
            var a = new Error(t);
            return i(a, e, n, o, r);
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(1);
        t.exports = function (t, e) {
            e = e || {};
            var n = {},
                o = ["url", "method", "data"],
                r = ["headers", "auth", "proxy", "params"],
                a = [
                    "baseURL",
                    "transformRequest",
                    "transformResponse",
                    "paramsSerializer",
                    "timeout",
                    "timeoutMessage",
                    "withCredentials",
                    "adapter",
                    "responseType",
                    "xsrfCookieName",
                    "xsrfHeaderName",
                    "onUploadProgress",
                    "onDownloadProgress",
                    "decompress",
                    "maxContentLength",
                    "maxBodyLength",
                    "maxRedirects",
                    "transport",
                    "httpAgent",
                    "httpsAgent",
                    "cancelToken",
                    "socketPath",
                    "responseEncoding",
                ],
                s = ["validateStatus"];
            function l(t, e) {
                return i.isPlainObject(t) && i.isPlainObject(e)
                    ? i.merge(t, e)
                    : i.isPlainObject(e)
                    ? i.merge({}, e)
                    : i.isArray(e)
                    ? e.slice()
                    : e;
            }
            function h(o) {
                i.isUndefined(e[o]) ? i.isUndefined(t[o]) || (n[o] = l(void 0, t[o])) : (n[o] = l(t[o], e[o]));
            }
            i.forEach(o, function (t) {
                i.isUndefined(e[t]) || (n[t] = l(void 0, e[t]));
            }),
                i.forEach(r, h),
                i.forEach(a, function (o) {
                    i.isUndefined(e[o]) ? i.isUndefined(t[o]) || (n[o] = l(void 0, t[o])) : (n[o] = l(void 0, e[o]));
                }),
                i.forEach(s, function (i) {
                    i in e ? (n[i] = l(t[i], e[i])) : i in t && (n[i] = l(void 0, t[i]));
                });
            var u = o.concat(r).concat(a).concat(s),
                c = Object.keys(t)
                    .concat(Object.keys(e))
                    .filter(function (t) {
                        return -1 === u.indexOf(t);
                    });
            return i.forEach(c, h), n;
        };
    },
    function (t, e, n) {
        "use strict";
        function i(t) {
            this.message = t;
        }
        (i.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }),
            (i.prototype.__CANCEL__ = !0),
            (t.exports = i);
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.grid2Img = function (t, e, n) {
                var i = e,
                    o = t.length / e,
                    r = document.createElement("canvas");
                (r.width = i), (r.height = o);
                for (var a = r.getContext("2d"), s = a.createImageData(i, o), l = 0; l < o; l++)
                    for (var h = 0; h < i; h++) {
                        var u = t[l * i + h],
                            c = n.getColorRgba(u),
                            d = 4 * (l * i + h);
                        (s.data[d + 0] = c[0]), (s.data[d + 1] = c[1]), (s.data[d + 2] = c[2]), (s.data[d + 3] = c[3]);
                    }
                return a.putImageData(s, 0, 0), r.toDataURL();
            }),
            (e.setPal = function (t, e) {});
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(11);
        Object.defineProperty(e, "Station", {
            enumerable: !0,
            get: function () {
                return i.Station;
            },
        }),
            Object.defineProperty(e, "station", {
                enumerable: !0,
                get: function () {
                    return i.station;
                },
            });
        var o = n(20);
        Object.defineProperty(e, "StationGroup", {
            enumerable: !0,
            get: function () {
                return o.StationGroup;
            },
        }),
            Object.defineProperty(e, "stationGroup", {
                enumerable: !0,
                get: function () {
                    return o.stationGroup;
                },
            });
        var r = n(58);
        Object.defineProperty(e, "drawStation", {
            enumerable: !0,
            get: function () {
                return r.drawStation;
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (e.drawStation = function (t, e, n, i) {
            t.translate(n.x, n.y),
                i.pointVisible &&
                    ((t.textAlign = "center"),
                    (t.textBaseline = "middle"),
                    (t.fillStyle = i.pointColor || "555"),
                    t.beginPath(),
                    t.arc(0, 0, 2, 0, 2 * Math.PI),
                    t.fill()),
                i.nameVisible &&
                    (e.name || e.id) &&
                    ((t.textAlign = "center"),
                    (t.textBaseline = "top"),
                    (t.fillStyle = i.nameColor || "555"),
                    t.fillText(e.name || e.id, 0, 5)),
                t.translate(-n.x, -n.y);
        });
        L.Canvas.include({
            _updateStation: function (t) {
                if (this._drawing && !t._empty()) {
                    var e = this._ctx;
                    e.save();
                    var n = t.options.style || t.options;
                    (e.font = n.font),
                        (e.shadowColor = n.shadowColor),
                        (e.shadowBlur = n.shadowBlur),
                        (e.fillStyle = "#555");
                    var o = t.getData(),
                        r = t._point;
                    i(e, o.properties, r, n), e.restore();
                }
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.HighStation = void 0),
            (e.highStation = function (t, e, n) {
                return new o(t, e, n);
            });
        var i = n(11);
        n(60);
        var o = (e.HighStation = i.Station.extend({
            _updatePath: function () {
                i.Station.prototype._updatePath.call(this), this._renderer._updateHigStation(this);
            },
        }));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.drawHighStation = a);
        var i,
            o = n(19),
            r = (i = o) && i.__esModule ? i : { default: i };
        function a(t, e, n, i) {
            t.translate(n.x, n.y);
            var o = e.dd || e[201],
                a = e.ff || e[203];
            if (
                (i.windVisible &&
                    o < "900000" &&
                    a < "900000" &&
                    a > 0.1 &&
                    ((t.strokeStyle = "black"), r.default.drawWindBar(t, o, a)),
                i.temVisible)
            ) {
                var s = parseFloat(e.tem || e[601]);
                s < "900000" &&
                    ((t.textAlign = "right"),
                    (t.textBaseline = "bottom"),
                    (t.fillStyle = "red"),
                    t.fillText(s.toFixed(0), -3, 0));
            }
            if (i.gphVisible) {
                var l = parseFloat(e.gph || e[421]);
                l < "900000" &&
                    ((t.fillStyle = "Navy"),
                    (t.textAlign = "left"),
                    (t.textBaseline = "bottom"),
                    t.fillText(l.toFixed(0), 3, 0));
            }
            if (i.dtdVisible) {
                var h = parseFloat(e.dtd || e[803]);
                h < "900000" &&
                    ((t.fillStyle = "DarkGreen"),
                    (t.textAlign = "right"),
                    (t.textBaseline = "top"),
                    t.fillText(h.toFixed(0), -3, 0));
            }
            t.translate(-n.x, -n.y);
        }
        L.Canvas.include({
            _updateHigStation: function (t) {
                if (this._drawing && !t._empty()) {
                    var e = this._ctx;
                    e.save();
                    var n = t.options.style || t.options;
                    (e.font = n.font),
                        (e.shadowColor = n.shadowColor),
                        (e.shadowBlur = n.shadowBlur),
                        (e.lineWidth = 1);
                    var i = t.getData(),
                        o = t._point;
                    a(e, i.properties, o, n), e.restore();
                }
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.HighStationGroup = void 0),
            (e.highStationGroup = function (t) {
                return new r(t);
            });
        var i = n(59),
            o = n(20),
            r = (e.HighStationGroup = o.StationGroup.extend({
                options: {
                    caption: "高空填图",
                    autoRank: !1,
                    gphVisible: !0,
                    temVisible: !0,
                    dtdVisible: !1,
                    windVisible: !0,
                    nameVisible: !1,
                    lineWidth: 1,
                },
                initialize: function (t) {
                    o.StationGroup.prototype.initialize.call(this, t),
                        L.setOptions(this, r.options),
                        L.setOptions(this, t),
                        (this.options.pointToLayer = L.bind(function (t, e) {
                            return (0, i.highStation)(e, t, this.options);
                        }, this));
                },
                setData: function (t) {
                    if (t.properties.date.getHours) {
                        var e = t.properties.date.getHours();
                        !this.dataSource || (14 !== e && 2 !== e) || this.dataSource.next(this.dataSource.n);
                    }
                    return o.StationGroup.prototype.setData.call(this, t), this;
                },
            }));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.SurfStation = void 0),
            (e.surfStation = function (t, e, n) {
                return new o(t, e, n);
            });
        var i = n(11);
        n(63);
        var o = (e.SurfStation = i.Station.extend({
            _updatePath: function () {
                i.Station.prototype._updatePath.call(this), this._renderer._updateSurfStation(this);
            },
        }));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.drawSurfStation = a);
        var i,
            o = n(19),
            r = (i = o) && i.__esModule ? i : { default: i };
        function a(t, e, n, i) {
            t.translate(n.x, n.y);
            var o = e.dd || e[209],
                a = e.ff || e[211];
            i.windVisible && o && a > 0.1 && ((t.strokeStyle = "black"), r.default.drawWindBar(t, o, a)),
                (t.font = "12px surface");
            var s = e.ca || e[1401];
            i.ccVisible &&
                ((t.textAlign = "center"),
                (t.textBaseline = "middle"),
                (t.fillStyle = "white"),
                t.fillText(r.default.getCharFromCACode(10), 0, 0),
                t.strokeText(r.default.getCharFromCACode(10), 0, 0),
                (t.fillStyle = "black"),
                (s = r.default.getCharFromCACode(s)),
                t.fillText(s, 0, 0));
            var l = e.ww || e[1601];
            i.wwVisible &&
                l > 0 &&
                ((l = r.default.getCharFromWeatherCode(l)),
                (t.textAlign = "center"),
                (t.textBaseline = "top"),
                (t.fillStyle = "black"),
                t.fillText(l, 0, 7)),
                (t.font = i.font);
            var h = e.tem || e[601];
            if (
                (i.temVisible &&
                    h < 50 &&
                    ((t.textAlign = "right"), (t.textBaseline = "bottom"), (t.fillStyle = "red"), t.fillText(h, -5, 0)),
                i.p0Visible)
            ) {
                var u = e.p0 || e[401];
                if (u) {
                    (t.fillStyle = "Navy"), (t.textAlign = "left"), (t.textBaseline = "bottom");
                    var c = parseInt(u / 10 + 0.5);
                    t.fillText(c, 5, 0);
                }
            }
            if (i.tdVisible) {
                var d = e.td || e[801];
                d < 50 &&
                    ((t.fillStyle = "DarkGreen"),
                    (t.textAlign = "right"),
                    (t.textBaseline = "top"),
                    t.fillText(d, -5, 0));
            }
            var f = e.p3 || e[403];
            i.p3Visible &&
                f < 100 &&
                ((t.fillStyle = "#088A85"), (t.textAlign = "left"), (t.textBaseline = "top"), t.fillText(f, 5, 0)),
                t.translate(-n.x, -n.y);
        }
        L.Canvas.include({
            _updateSurfStation: function (t) {
                if (this._drawing && !t._empty()) {
                    var e = this._ctx;
                    e.save();
                    var n = t.options.style || t.options;
                    (e.font = n.font),
                        (e.shadowColor = n.shadowColor),
                        (e.shadowBlur = n.shadowBlur),
                        (e.lineWidth = 1);
                    var i = t.getData(),
                        o = t._point;
                    a(e, i.properties, o, n), e.restore();
                }
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.SurfStationGroup = void 0),
            (e.surfStationGroup = function (t) {
                return new r(t);
            });
        var i = n(62),
            o = n(20),
            r = (e.SurfStationGroup = o.StationGroup.extend({
                options: {
                    caption: "地面填图",
                    nameVisible: !1,
                    pointVisible: !1,
                    p0Visible: !0,
                    temVisible: !0,
                    tdVisible: !0,
                    p3Visible: !0,
                    ccVisible: !0,
                    wwVisible: !0,
                    windVisible: !0,
                    autoRank: !0,
                    lineWidth: 1,
                },
                initialize: function (t) {
                    o.StationGroup.prototype.initialize.call(this, t),
                        L.setOptions(this, r.options),
                        L.setOptions(this, t),
                        (this.options.pointToLayer = L.bind(function (t, e) {
                            return (0, i.surfStation)(e, t, this.options);
                        }, this));
                },
            }));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Value = void 0),
            (e.value = function (t, e, n) {
                return new o(t, e, n);
            });
        var i = n(11);
        n(66);
        var o = (e.Value = i.Station.extend({
            _updatePath: function () {
                i.Station.prototype._updatePath.call(this), this._renderer._updateValue(this);
            },
        }));
    },
    function (t, e, n) {
        "use strict";
        function i(t, e, n, i) {
            t.translate(n.x, n.y), (t.fillStyle = i.valueColor || "navy"), t.fillText(e, 0, 0), t.translate(-n.x, -n.y);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.drawValue = i),
            L.Canvas.include({
                _updateValue: function (t) {
                    if (this._drawing && !t._empty()) {
                        var e = t.getData(),
                            n = t.options.style || t.options,
                            o = e.properties[n.field];
                        if (o) {
                            var r = this._ctx;
                            r.save(),
                                (r.font = n.font),
                                (r.fillStyle = n.valueColor),
                                (r.shadowColor = n.shadowColor),
                                (r.shadowBlur = n.shadowBlur),
                                (r.lineWidth = 1),
                                (r.textAlign = "center"),
                                (r.textBaseline = "bottom"),
                                i(r, o, t._point, n),
                                r.restore();
                        }
                    }
                },
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ValueGroup = void 0),
            (e.valueGroup = function (t) {
                return new r(t);
            });
        var i = n(65),
            o = n(20),
            r = (e.ValueGroup = o.StationGroup.extend({
                options: {
                    caption: "单要素填图",
                    autoRank: !0,
                    field: "tem",
                    pointVisible: !0,
                    nameVisible: !1,
                    font: "12px tahoma",
                    valueColor: "navy",
                    shadowColor: "#aaa",
                    shadowBlur: 5,
                    bkColor: "white",
                    display: "label",
                    offset: L.point(0, -1),
                },
                initialize: function (t) {
                    o.StationGroup.prototype.initialize.call(this, t),
                        L.setOptions(this, r.options),
                        L.setOptions(this, t),
                        (this.options.pointToLayer = L.bind(function (t, e) {
                            return (0, i.value)(e, t, this.options);
                        }, this));
                },
                setData: function (t) {
                    return (
                        o.StationGroup.prototype.setData.call(this, t),
                        t &&
                            (t.properties.fields && (this.options.fields = t.properties.fields),
                            this.setValueField(this.options.field)),
                        this
                    );
                },
                setValueField: function (t) {
                    this.options.field = t;
                    var e = t;
                    this.options.fields && (e = this.options.fields[t]),
                        this.setCaption(this._data.properties.name + e);
                    this.getData();
                    return this;
                },
            }));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.contourLayer = e.ContourLayer = void 0);
        var i = n(32),
            o = n(33),
            r = (e.ContourLayer = L.GeoJSON.extend({
                options: {
                    lineVisible: !0,
                    polyVisible: !1,
                    labelVisible: !0,
                    valueVisible: !0,
                    caption: "等值线图",
                    blodLevels: [0, 316, 588],
                    color: "auto",
                    outLineColor: "white",
                    font: "bold 13px tahoma",
                    weight: 1.3,
                    fillOpacity: 0.6,
                    shadowColor: "#aaa",
                    shadowBlur: 5,
                    colors: ["0000ff", "00ff00", "ffff00", "ff0000"],
                },
                initialize: function (t) {
                    L.Util.setOptions(this, t);
                    var e = this;
                    (this.options.pointToLayer = function (t, e) {
                        var n = t.properties;
                        return (0, o.label)(e, n.level);
                    }),
                        (this.options.coordsToLatLng = function (t) {
                            var n = e._data.properties;
                            return [n.startLat + t[1] * n.latGridSpace, n.startLng + t[0] * n.lngGridSpace];
                        }),
                        (this.options.style = function (t) {
                            var n = e.options,
                                i = t.geometry.type.toUpperCase(),
                                o = -1;
                            i.indexOf("POLY") >= 0
                                ? (o = "POLY")
                                : i.indexOf("LINE") >= 0
                                ? (o = "LINE")
                                : i.indexOf("POINT") >= 0 && (o = "POINT");
                            var r = +t.properties.level,
                                a = n.color,
                                s = void 0;
                            switch (o) {
                                case "POLY":
                                    s = {
                                        fill: n.polyVisible,
                                        stroke: !1,
                                        level: r,
                                        fillColor: e._colorMap ? e._getFillColor(t) : "",
                                        fillOpacity: n.fillOpacity,
                                    };
                                    break;
                                case "LINE":
                                    (s = {
                                        stroke: n.lineVisible,
                                        level: r,
                                        color: a,
                                        weight: -1 != n.blodLevels.indexOf(r) ? n.weight + 1 : n.weight,
                                        dashArray: r < 0 ? "10 5" : null,
                                    }),
                                        n.lineVisible && n.polyVisible && (s.weight = 0.2);
                                    break;
                                case "POINT":
                                    s = {
                                        labelVisible: n.labelVisible,
                                        color: a,
                                        level: r,
                                        font: n.font,
                                        outLineColor: n.outLineColor,
                                    };
                            }
                            return s;
                        }),
                        L.GeoJSON.prototype.initialize.call(this, "", t),
                        this.bindTooltip(this._getTooltip, { sticky: !0 });
                },
                setPalette: function (t) {
                    (this.options.colors = t),
                        this._data.properties.levels &&
                            (this._colorMap = (0, i.palette)(t, this._data.properties.levels));
                },
                _getTooltip: function (t) {
                    var e = t.feature;
                    return e
                        ? "Polygon" == e.geometry.type
                            ? (e.properties.isHigh ? ">" : "<") + e.properties.level
                            : "=" + (e.properties.level || e.properties.symbol)
                        : "";
                },
                _getFillLevel: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this._data.properties.levels,
                        i = n.indexOf(t);
                    return e || (t = 0 === i ? n[0] - (n[1] - n[0]) : n[i - 1]), t;
                },
                _getFillColor: function (t) {
                    var e = t.properties.level,
                        n = t.properties.isHigh,
                        i = this._colorMap.getColor(this._getFillLevel(e, n));
                    return (i = i ? "#" + i : "transparent");
                },
                setData1: function (t) {
                    var e = this;
                    this._gridData = t;
                    var n = new Worker();
                    (n.onmessage = function (n) {
                        if ("number" == typeof n.data) e.onLoading({ message: t.caption + " Tracking:" + n.data });
                        else {
                            e.clearLayers();
                            var i = n.data.properties;
                            (i.name = t.caption),
                                (i.startLng = t.startLng),
                                (i.startLat = t.startLat),
                                (i.lngGridSpace = t.lngGridSpace),
                                (i.latGridSpace = t.latGridSpace),
                                e._updateLegend(),
                                e.fire("load");
                        }
                    }),
                        (n.onError = function (t) {
                            e.onError({ message: t.message });
                        }),
                        this.options.levels && (t.levels = this.options.levels);
                    var i = { grid: t.data, levels: t.levels, n: t.latGridNumber };
                    return n.postMessage(i, [i.grid.buffer]), this;
                },
                setData: function (t) {
                    var e = n(137)(t.data, t.lngGridNumber);
                    this.options.levels && (t.levels = this.options.levels);
                    var i = e
                        .track(t.levels, function (t) {
                            console.log(t);
                        })
                        .toJson();
                    return (
                        (i.properties.name = t.caption),
                        (i.properties.startLng = t.startLng),
                        (i.properties.startLat = t.startLat),
                        (i.properties.lngGridSpace = t.lngGridSpace),
                        (i.properties.latGridSpace = t.latGridSpace),
                        (i.properties.levels = t.levels),
                        (this._data = i),
                        this.clearLayers(),
                        this.setPalette(this.options.colors),
                        this.addData(i),
                        this.setCaption(i.properties.name),
                        this.options.polyVisible && this.bringToBack(),
                        this._updateLegend(),
                        this
                    );
                },
                setStyle: function (t) {
                    L.GeoJSON.prototype.setStyle.call(this, t), this._updateLegend();
                },
                _updatePath: function () {
                    L.GeoJSON.prototype._updatePath.call(this),
                        this.options.valueVisible && this._renderer._updateGridValue(this);
                },
                _legend: null,
                _updateLegend: function () {
                    if (this._data && this._map)
                        if (this.options.polyVisible) {
                            this._legend.style.display = "inline";
                            var t = this._legend.getContext("2d");
                            this._colorMap.drawLegend(t, this._legend.height - 40);
                        } else this._legend.style.display = "none";
                },
                onAdd: function (t) {
                    L.GeoJSON.prototype.onAdd.call(this, t);
                    var e = this._map.getLegend().getContainer();
                    (this._legend = L.DomUtil.create("canvas", "", e)),
                        (this._legend.style.display = this.options.polyVisible ? "inline" : "none"),
                        (this._legend.width = 60),
                        (this._legend.height = 520),
                        this._updateLegend();
                },
                onRemove: function (t) {
                    this._legend && L.DomUtil.remove(this._legend),
                        L.GeoJSON.prototype.onRemove.call(this, t),
                        (this._legend = null);
                },
            }));
        e.contourLayer = function (t, e) {
            return new r(t, e);
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.streamLineLayer = e.StreamLineLayer = void 0);
        var i = n(141),
            o = n(34);
        n(142);
        var r = (e.StreamLineLayer = L.Path.extend({
            options: { density: 1, color: "auto", lineWidth: 1, shadowColor: "#aaa", shadowBlur: 5, interactive: !1 },
            _data: null,
            lines: [],
            _lines: [],
            initialize: function (t) {
                L.setOptions(this, t);
            },
            getData: function () {
                return this._data;
            },
            setData: function (t) {
                return (this._data = t), this.setCaption(t.caption + "流线"), this.redraw(), this;
            },
            genStreamLine: function () {
                var t = this.getData();
                if (t) {
                    for (
                        var e = this.options.density,
                            n = t.lngGridNumber,
                            o = t.latGridNumber,
                            r = n * o,
                            a = [],
                            s = 0;
                        s < r;
                        s++
                    ) {
                        var l = t.data[s],
                            h = ((t.data[s + r] - 180) * Math.PI) / 180;
                        (a[s] = -l * Math.cos(h)), (a[s + r] = l * Math.sin(h));
                    }
                    var u = new i.StreamLine(a, n, o),
                        c = Math.round((n / 30) * e);
                    c < 1 && (c = 1), (this.lines = u.track(c)), this._project();
                }
                return this;
            },
            getBounds: function () {
                var t = this.getData().bbox;
                return L.latLngBounds([t[1], t[0]], [t[3], t[2]]);
            },
            _update: function () {
                this._map && (0 === this.lines.length && this.genStreamLine(), this._updatePath());
            },
            _project: function () {
                var t = this.getData();
                if (t) {
                    var e = t.bbox,
                        n = this._map.latLngToLayerPoint([e[1], e[0]]),
                        i = this._map.latLngToLayerPoint([e[3], e[2]]),
                        r = [30, 30],
                        a = L.bounds(n, i);
                    (this._pxBounds = L.bounds(a.min.subtract(r), a.max.add(r))), (this._lines = []);
                    for (var s = 0; s < this.lines.length; s++) {
                        for (var l = this.lines[s], h = [], u = 0; u < l.length; u++) {
                            var c = t.startLng + l[u][0] * t.lngGridSpace,
                                d = t.startLat + l[u][1] * t.latGridSpace,
                                f = this._map.latLngToLayerPoint([d, c]);
                            h.push(f);
                        }
                        (h = L.LineUtil.simplify(h, 1)),
                            (h = (0, o.getSpline)(h, 0.1)).length > 2 && this._lines.push(h);
                    }
                }
                return this;
            },
            _updatePath: function () {
                this._renderer._updateStreamLine(this);
            },
            _containsPoint: function () {
                return !1;
            },
            _empty: function () {
                return !this._data || !this.lines || !this._renderer._bounds.intersects(this._pxBounds);
            },
        }));
        e.streamLineLayer = function (t, e) {
            return new r(t, e);
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.uvLayer = e.UVLayer = void 0), n(145);
        var i = (e.UVLayer = L.Path.extend({
            options: {
                density: 1,
                color: "black",
                lineWidth: 1,
                shadowColor: "#aaa",
                shadowBlur: 5,
                windStyle: "bar",
                interactive: !1,
            },
            _data: null,
            initialize: function (t) {
                L.setOptions(this, t);
            },
            getData: function () {
                return this._data;
            },
            setData: function (t) {
                return (this._data = t), t.caption && this.setCaption(t.caption + "-风"), this.redraw(), this;
            },
            getBounds: function () {
                var t = this.getData().bbox;
                return L.latLngBounds([t[1], t[0]], [t[3], t[2]]);
            },
            _update: function () {
                this._map && this._updatePath();
            },
            _project: function () {
                var t = this.getData();
                if (t) {
                    var e = t.bbox,
                        n = this._map.latLngToLayerPoint([e[1], e[0]]),
                        i = this._map.latLngToLayerPoint([e[3], e[2]]),
                        o = [30, 30],
                        r = L.bounds(n, i);
                    this._pxBounds = L.bounds(r.min.subtract(o), r.max.add(o));
                }
                return this;
            },
            _updatePath: function () {
                this._renderer._updateUV(this);
            },
            _containsPoint: function () {
                return !1;
            },
            _empty: function () {
                return !this._data || !this._renderer._bounds.intersects(this._pxBounds);
            },
        }));
        e.uvLayer = function (t, e) {
            return new i(t, e);
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ImagesLayer = void 0),
            (e.imagesLayer = function (t, e) {
                return new a(t, e);
            });
        var i,
            o = n(41),
            r = (i = o) && i.__esModule ? i : { default: i };
        var a = (e.ImagesLayer = L.ImageOverlay.extend({
            options: {
                caption: "栅格图",
                dataType: "text",
                timeout: 1e4,
                opacity: 0.8,
                bounds: [
                    [12.168225677390112, 69.8291015625],
                    [54.34214886448342, 140.1416015625],
                ],
                crossOrigin: !0,
                errorOverlayUrl: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                className: "img-shadow",
            },
            _index: -1,
            initialize: function (t, e) {
                L.setOptions(this, e),
                    (this.listUrl = t),
                    L.ImageOverlay.prototype.initialize.call(this, "", this.options.bounds, this.options);
            },
            load: function () {
                this._index < 0 || !this._list ? this.getList() : this._setIndex(this._index);
            },
            getList: function () {
                var t = this,
                    e = this.listUrl;
                e.indexOf("?") < 0 ? (e += "?") : (e += "&"), (e += "_t" + Date.now());
                this.onLoading({ message: "Connecting......", loaded: -1 }),
                    r.default
                        .get(e, {
                            dataType: this.options.dataType,
                            timeout: this.options.timeout,
                            onDownloadProgress: function (e) {
                                t.onLoading({
                                    message: "Loading......" + (e.loaded / 1024).toFixed(0) + "K",
                                    loaded: e.loaded,
                                });
                            },
                        })
                        .then(function (e) {
                            var n = e.data;
                            (t._list = t.options.onGetList ? t.options.onGetList(n) : n),
                                t._list.length > 0
                                    ? t._setIndex(t._list.length - 1)
                                    : t.onError({ message: "一张图都没找到" }),
                                console.log(t._list);
                        })
                        .catch(function (e) {
                            t.onError({ message: e.message });
                        });
            },
            _setIndex: function (t) {
                if (t < this._list.length && t >= 0) {
                    this._index = t;
                    var e = this._list[t].url;
                    console.log(e),
                        this.onLoading({ message: "Loading......", loaded: -1 }),
                        this.setCaption(this.options.caption + "-" + this._list[t].time),
                        this.setUrl(e);
                } else this.onError({ message: "没有图了..." });
                return this;
            },
            _overlayOnError: function (t) {
                if (this._url) this.fire("error", { message: t + ":" + this._list[this._index].dt });
                else {
                    var e = this.options.errorOverlayUrl;
                    e && this._url !== e && ((this._url = e), (this._image.src = e));
                }
            },
            next: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (0 != t && this._list) {
                    var e = this._list.length,
                        n = t ? this._index + t : e - 1;
                    this._setIndex(n);
                } else (this._index = -1), this.load();
                return this;
            },
            isAniming: !1,
            anim: function () {
                var t = this;
                if (!this.isAnimIng && this._list) {
                    var e = 0;
                    this.isAnimIng = !0;
                    var n = setInterval(function () {
                        e < t._list.length ? (t._setIndex(e), e++) : (clearInterval(n), (t.isAnimIng = !1));
                    }, 300);
                }
            },
        }));
    },
    function (t, e, n) {
        "use strict";
        var i = n(35),
            o = n(15),
            r = n(85),
            a = n(10),
            s = n(16),
            l = n(161),
            h = n(36),
            u = n(163),
            c = n(7)("iterator"),
            d = !([].keys && "next" in [].keys()),
            f = function () {
                return this;
            };
        t.exports = function (t, e, n, p, _, m, g) {
            l(n, e, p);
            var v,
                y,
                b,
                x = function (t) {
                    if (!d && t in A) return A[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t);
                            };
                    }
                    return function () {
                        return new n(this, t);
                    };
                },
                w = e + " Iterator",
                L = "values" == _,
                P = !1,
                A = t.prototype,
                T = A[c] || A["@@iterator"] || (_ && A[_]),
                C = T || x(_),
                S = _ ? (L ? x("entries") : C) : void 0,
                M = ("Array" == e && A.entries) || T;
            if (
                (M &&
                    (b = u(M.call(new t()))) !== Object.prototype &&
                    b.next &&
                    (h(b, w, !0), i || "function" == typeof b[c] || a(b, c, f)),
                L &&
                    T &&
                    "values" !== T.name &&
                    ((P = !0),
                    (C = function () {
                        return T.call(this);
                    })),
                (i && !g) || (!d && !P && A[c]) || a(A, c, C),
                (s[e] = C),
                (s[w] = f),
                _)
            )
                if (((v = { values: L ? C : x("values"), keys: m ? C : x("keys"), entries: S }), g))
                    for (y in v) y in A || r(A, y, v[y]);
                else o(o.P + o.F * (d || P), e, v);
            return v;
        };
    },
    ,
    function (t, e, n) {
        n(158);
        for (
            var i = n(4),
                o = n(10),
                r = n(16),
                a = n(7)("toStringTag"),
                s =
                    "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                        ","
                    ),
                l = 0;
            l < s.length;
            l++
        ) {
            var h = s[l],
                u = i[h],
                c = u && u.prototype;
            c && !c[a] && o(c, a, h), (r[h] = r.Array);
        }
    },
    function (t, e, n) {
        "use strict";
        var i = n(164)(!0);
        n(72)(
            String,
            "String",
            function (t) {
                (this._t = String(t)), (this._i = 0);
            },
            function () {
                var t,
                    e = this._t,
                    n = this._i;
                return n >= e.length
                    ? { value: void 0, done: !0 }
                    : ((t = i(e, n)), (this._i += t.length), { value: t, done: !1 });
            }
        );
    },
    function (t, e, n) {
        var i = n(17);
        t.exports = function (t, e) {
            if (!i(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !i((o = n.call(t)))) return o;
            if ("function" == typeof (n = t.valueOf) && !i((o = n.call(t)))) return o;
            if (!e && "function" == typeof (n = t.toString) && !i((o = n.call(t)))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        var i = n(29),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(i(t), 9007199254740991) : 0;
        };
    },
    function (t, e, n) {
        /* @preserve
         * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
         * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
         */
        !(function (t) {
            "use strict";
            function e(t) {
                var e, n, i, o;
                for (n = 1, i = arguments.length; n < i; n++) for (e in (o = arguments[n])) t[e] = o[e];
                return t;
            }
            var n =
                Object.create ||
                (function () {
                    function t() {}
                    return function (e) {
                        return (t.prototype = e), new t();
                    };
                })();
            function i(t, e) {
                var n = Array.prototype.slice;
                if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
                var i = n.call(arguments, 2);
                return function () {
                    return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments);
                };
            }
            var o = 0;
            function r(t) {
                return (t._leaflet_id = t._leaflet_id || ++o), t._leaflet_id;
            }
            function a(t, e, n) {
                var i, o, r, a;
                return (
                    (a = function () {
                        (i = !1), o && (r.apply(n, o), (o = !1));
                    }),
                    (r = function () {
                        i ? (o = arguments) : (t.apply(n, arguments), setTimeout(a, e), (i = !0));
                    })
                );
            }
            function s(t, e, n) {
                var i = e[1],
                    o = e[0],
                    r = i - o;
                return t === i && n ? t : ((((t - o) % r) + r) % r) + o;
            }
            function l() {
                return !1;
            }
            function h(t, e) {
                var n = Math.pow(10, void 0 === e ? 6 : e);
                return Math.round(t * n) / n;
            }
            function u(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
            }
            function c(t) {
                return u(t).split(/\s+/);
            }
            function d(t, e) {
                for (var i in (Object.prototype.hasOwnProperty.call(t, "options") ||
                    (t.options = t.options ? n(t.options) : {}),
                e))
                    t.options[i] = e[i];
                return t.options;
            }
            function f(t, e, n) {
                var i = [];
                for (var o in t) i.push(encodeURIComponent(n ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&");
            }
            var p = /\{ *([\w_-]+) *\}/g;
            function _(t, e) {
                return t.replace(p, function (t, n) {
                    var i = e[n];
                    if (void 0 === i) throw new Error("No value provided for variable " + t);
                    return "function" == typeof i && (i = i(e)), i;
                });
            }
            var m =
                Array.isArray ||
                function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t);
                };
            function g(t, e) {
                for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
                return -1;
            }
            var v = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
            function y(t) {
                return window["webkit" + t] || window["moz" + t] || window["ms" + t];
            }
            var b = 0;
            function x(t) {
                var e = +new Date(),
                    n = Math.max(0, 16 - (e - b));
                return (b = e + n), window.setTimeout(t, n);
            }
            var w = window.requestAnimationFrame || y("RequestAnimationFrame") || x,
                P =
                    window.cancelAnimationFrame ||
                    y("CancelAnimationFrame") ||
                    y("CancelRequestAnimationFrame") ||
                    function (t) {
                        window.clearTimeout(t);
                    };
            function A(t, e, n) {
                if (!n || w !== x) return w.call(window, i(t, e));
                t.call(e);
            }
            function T(t) {
                t && P.call(window, t);
            }
            var C = {
                extend: e,
                create: n,
                bind: i,
                lastId: o,
                stamp: r,
                throttle: a,
                wrapNum: s,
                falseFn: l,
                formatNum: h,
                trim: u,
                splitWords: c,
                setOptions: d,
                getParamString: f,
                template: _,
                isArray: m,
                indexOf: g,
                emptyImageUrl: v,
                requestFn: w,
                cancelFn: P,
                requestAnimFrame: A,
                cancelAnimFrame: T,
            };
            function S() {}
            (S.extend = function (t) {
                var i = function () {
                        this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
                    },
                    o = (i.__super__ = this.prototype),
                    r = n(o);
                for (var a in ((r.constructor = i), (i.prototype = r), this))
                    Object.prototype.hasOwnProperty.call(this, a) &&
                        "prototype" !== a &&
                        "__super__" !== a &&
                        (i[a] = this[a]);
                return (
                    t.statics && (e(i, t.statics), delete t.statics),
                    t.includes &&
                        ((function (t) {
                            if ("undefined" != typeof L && L && L.Mixin) {
                                t = m(t) ? t : [t];
                                for (var e = 0; e < t.length; e++)
                                    t[e] === L.Mixin.Events &&
                                        console.warn(
                                            "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                                            new Error().stack
                                        );
                            }
                        })(t.includes),
                        e.apply(null, [r].concat(t.includes)),
                        delete t.includes),
                    r.options && (t.options = e(n(r.options), t.options)),
                    e(r, t),
                    (r._initHooks = []),
                    (r.callInitHooks = function () {
                        if (!this._initHooksCalled) {
                            o.callInitHooks && o.callInitHooks.call(this), (this._initHooksCalled = !0);
                            for (var t = 0, e = r._initHooks.length; t < e; t++) r._initHooks[t].call(this);
                        }
                    }),
                    i
                );
            }),
                (S.include = function (t) {
                    return e(this.prototype, t), this;
                }),
                (S.mergeOptions = function (t) {
                    return e(this.prototype.options, t), this;
                }),
                (S.addInitHook = function (t) {
                    var e = Array.prototype.slice.call(arguments, 1),
                        n =
                            "function" == typeof t
                                ? t
                                : function () {
                                      this[t].apply(this, e);
                                  };
                    return (
                        (this.prototype._initHooks = this.prototype._initHooks || []),
                        this.prototype._initHooks.push(n),
                        this
                    );
                });
            var M = {
                on: function (t, e, n) {
                    if ("object" == typeof t) for (var i in t) this._on(i, t[i], e);
                    else for (var o = 0, r = (t = c(t)).length; o < r; o++) this._on(t[o], e, n);
                    return this;
                },
                off: function (t, e, n) {
                    if (t)
                        if ("object" == typeof t) for (var i in t) this._off(i, t[i], e);
                        else for (var o = 0, r = (t = c(t)).length; o < r; o++) this._off(t[o], e, n);
                    else delete this._events;
                    return this;
                },
                _on: function (t, e, n) {
                    this._events = this._events || {};
                    var i = this._events[t];
                    i || ((i = []), (this._events[t] = i)), n === this && (n = void 0);
                    for (var o = { fn: e, ctx: n }, r = i, a = 0, s = r.length; a < s; a++)
                        if (r[a].fn === e && r[a].ctx === n) return;
                    r.push(o);
                },
                _off: function (t, e, n) {
                    var i, o, r;
                    if (this._events && (i = this._events[t]))
                        if (e) {
                            if ((n === this && (n = void 0), i))
                                for (o = 0, r = i.length; o < r; o++) {
                                    var a = i[o];
                                    if (a.ctx === n && a.fn === e)
                                        return (
                                            (a.fn = l),
                                            this._firingCount && (this._events[t] = i = i.slice()),
                                            void i.splice(o, 1)
                                        );
                                }
                        } else {
                            for (o = 0, r = i.length; o < r; o++) i[o].fn = l;
                            delete this._events[t];
                        }
                },
                fire: function (t, n, i) {
                    if (!this.listens(t, i)) return this;
                    var o = e({}, n, { type: t, target: this, sourceTarget: (n && n.sourceTarget) || this });
                    if (this._events) {
                        var r = this._events[t];
                        if (r) {
                            this._firingCount = this._firingCount + 1 || 1;
                            for (var a = 0, s = r.length; a < s; a++) {
                                var l = r[a];
                                l.fn.call(l.ctx || this, o);
                            }
                            this._firingCount--;
                        }
                    }
                    return i && this._propagateEvent(o), this;
                },
                listens: function (t, e) {
                    var n = this._events && this._events[t];
                    if (n && n.length) return !0;
                    if (e) for (var i in this._eventParents) if (this._eventParents[i].listens(t, e)) return !0;
                    return !1;
                },
                once: function (t, e, n) {
                    if ("object" == typeof t) {
                        for (var o in t) this.once(o, t[o], e);
                        return this;
                    }
                    var r = i(function () {
                        this.off(t, e, n).off(t, r, n);
                    }, this);
                    return this.on(t, e, n).on(t, r, n);
                },
                addEventParent: function (t) {
                    return (this._eventParents = this._eventParents || {}), (this._eventParents[r(t)] = t), this;
                },
                removeEventParent: function (t) {
                    return this._eventParents && delete this._eventParents[r(t)], this;
                },
                _propagateEvent: function (t) {
                    for (var n in this._eventParents)
                        this._eventParents[n].fire(t.type, e({ layer: t.target, propagatedFrom: t.target }, t), !0);
                },
            };
            (M.addEventListener = M.on),
                (M.removeEventListener = M.clearAllEventListeners = M.off),
                (M.addOneTimeEventListener = M.once),
                (M.fireEvent = M.fire),
                (M.hasEventListeners = M.listens);
            var k = S.extend(M);
            function E(t, e, n) {
                (this.x = n ? Math.round(t) : t), (this.y = n ? Math.round(e) : e);
            }
            var O =
                Math.trunc ||
                function (t) {
                    return t > 0 ? Math.floor(t) : Math.ceil(t);
                };
            function B(t, e, n) {
                return t instanceof E
                    ? t
                    : m(t)
                    ? new E(t[0], t[1])
                    : null == t
                    ? t
                    : "object" == typeof t && "x" in t && "y" in t
                    ? new E(t.x, t.y)
                    : new E(t, e, n);
            }
            function z(t, e) {
                if (t) for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i]);
            }
            function I(t, e) {
                return !t || t instanceof z ? t : new z(t, e);
            }
            function D(t, e) {
                if (t) for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i]);
            }
            function F(t, e) {
                return t instanceof D ? t : new D(t, e);
            }
            function j(t, e, n) {
                if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                (this.lat = +t), (this.lng = +e), void 0 !== n && (this.alt = +n);
            }
            function Z(t, e, n) {
                return t instanceof j
                    ? t
                    : m(t) && "object" != typeof t[0]
                    ? 3 === t.length
                        ? new j(t[0], t[1], t[2])
                        : 2 === t.length
                        ? new j(t[0], t[1])
                        : null
                    : null == t
                    ? t
                    : "object" == typeof t && "lat" in t
                    ? new j(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
                    : void 0 === e
                    ? null
                    : new j(t, e, n);
            }
            (E.prototype = {
                clone: function () {
                    return new E(this.x, this.y);
                },
                add: function (t) {
                    return this.clone()._add(B(t));
                },
                _add: function (t) {
                    return (this.x += t.x), (this.y += t.y), this;
                },
                subtract: function (t) {
                    return this.clone()._subtract(B(t));
                },
                _subtract: function (t) {
                    return (this.x -= t.x), (this.y -= t.y), this;
                },
                divideBy: function (t) {
                    return this.clone()._divideBy(t);
                },
                _divideBy: function (t) {
                    return (this.x /= t), (this.y /= t), this;
                },
                multiplyBy: function (t) {
                    return this.clone()._multiplyBy(t);
                },
                _multiplyBy: function (t) {
                    return (this.x *= t), (this.y *= t), this;
                },
                scaleBy: function (t) {
                    return new E(this.x * t.x, this.y * t.y);
                },
                unscaleBy: function (t) {
                    return new E(this.x / t.x, this.y / t.y);
                },
                round: function () {
                    return this.clone()._round();
                },
                _round: function () {
                    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
                },
                floor: function () {
                    return this.clone()._floor();
                },
                _floor: function () {
                    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
                },
                ceil: function () {
                    return this.clone()._ceil();
                },
                _ceil: function () {
                    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
                },
                trunc: function () {
                    return this.clone()._trunc();
                },
                _trunc: function () {
                    return (this.x = O(this.x)), (this.y = O(this.y)), this;
                },
                distanceTo: function (t) {
                    var e = (t = B(t)).x - this.x,
                        n = t.y - this.y;
                    return Math.sqrt(e * e + n * n);
                },
                equals: function (t) {
                    return (t = B(t)).x === this.x && t.y === this.y;
                },
                contains: function (t) {
                    return (t = B(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
                },
                toString: function () {
                    return "Point(" + h(this.x) + ", " + h(this.y) + ")";
                },
            }),
                (z.prototype = {
                    extend: function (t) {
                        return (
                            (t = B(t)),
                            this.min || this.max
                                ? ((this.min.x = Math.min(t.x, this.min.x)),
                                  (this.max.x = Math.max(t.x, this.max.x)),
                                  (this.min.y = Math.min(t.y, this.min.y)),
                                  (this.max.y = Math.max(t.y, this.max.y)))
                                : ((this.min = t.clone()), (this.max = t.clone())),
                            this
                        );
                    },
                    getCenter: function (t) {
                        return new E((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
                    },
                    getBottomLeft: function () {
                        return new E(this.min.x, this.max.y);
                    },
                    getTopRight: function () {
                        return new E(this.max.x, this.min.y);
                    },
                    getTopLeft: function () {
                        return this.min;
                    },
                    getBottomRight: function () {
                        return this.max;
                    },
                    getSize: function () {
                        return this.max.subtract(this.min);
                    },
                    contains: function (t) {
                        var e, n;
                        return (
                            (t = "number" == typeof t[0] || t instanceof E ? B(t) : I(t)) instanceof z
                                ? ((e = t.min), (n = t.max))
                                : (e = n = t),
                            e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
                        );
                    },
                    intersects: function (t) {
                        t = I(t);
                        var e = this.min,
                            n = this.max,
                            i = t.min,
                            o = t.max,
                            r = o.x >= e.x && i.x <= n.x,
                            a = o.y >= e.y && i.y <= n.y;
                        return r && a;
                    },
                    overlaps: function (t) {
                        t = I(t);
                        var e = this.min,
                            n = this.max,
                            i = t.min,
                            o = t.max,
                            r = o.x > e.x && i.x < n.x,
                            a = o.y > e.y && i.y < n.y;
                        return r && a;
                    },
                    isValid: function () {
                        return !(!this.min || !this.max);
                    },
                }),
                (D.prototype = {
                    extend: function (t) {
                        var e,
                            n,
                            i = this._southWest,
                            o = this._northEast;
                        if (t instanceof j) (e = t), (n = t);
                        else {
                            if (!(t instanceof D)) return t ? this.extend(Z(t) || F(t)) : this;
                            if (((e = t._southWest), (n = t._northEast), !e || !n)) return this;
                        }
                        return (
                            i || o
                                ? ((i.lat = Math.min(e.lat, i.lat)),
                                  (i.lng = Math.min(e.lng, i.lng)),
                                  (o.lat = Math.max(n.lat, o.lat)),
                                  (o.lng = Math.max(n.lng, o.lng)))
                                : ((this._southWest = new j(e.lat, e.lng)), (this._northEast = new j(n.lat, n.lng))),
                            this
                        );
                    },
                    pad: function (t) {
                        var e = this._southWest,
                            n = this._northEast,
                            i = Math.abs(e.lat - n.lat) * t,
                            o = Math.abs(e.lng - n.lng) * t;
                        return new D(new j(e.lat - i, e.lng - o), new j(n.lat + i, n.lng + o));
                    },
                    getCenter: function () {
                        return new j(
                            (this._southWest.lat + this._northEast.lat) / 2,
                            (this._southWest.lng + this._northEast.lng) / 2
                        );
                    },
                    getSouthWest: function () {
                        return this._southWest;
                    },
                    getNorthEast: function () {
                        return this._northEast;
                    },
                    getNorthWest: function () {
                        return new j(this.getNorth(), this.getWest());
                    },
                    getSouthEast: function () {
                        return new j(this.getSouth(), this.getEast());
                    },
                    getWest: function () {
                        return this._southWest.lng;
                    },
                    getSouth: function () {
                        return this._southWest.lat;
                    },
                    getEast: function () {
                        return this._northEast.lng;
                    },
                    getNorth: function () {
                        return this._northEast.lat;
                    },
                    contains: function (t) {
                        t = "number" == typeof t[0] || t instanceof j || "lat" in t ? Z(t) : F(t);
                        var e,
                            n,
                            i = this._southWest,
                            o = this._northEast;
                        return (
                            t instanceof D ? ((e = t.getSouthWest()), (n = t.getNorthEast())) : (e = n = t),
                            e.lat >= i.lat && n.lat <= o.lat && e.lng >= i.lng && n.lng <= o.lng
                        );
                    },
                    intersects: function (t) {
                        t = F(t);
                        var e = this._southWest,
                            n = this._northEast,
                            i = t.getSouthWest(),
                            o = t.getNorthEast(),
                            r = o.lat >= e.lat && i.lat <= n.lat,
                            a = o.lng >= e.lng && i.lng <= n.lng;
                        return r && a;
                    },
                    overlaps: function (t) {
                        t = F(t);
                        var e = this._southWest,
                            n = this._northEast,
                            i = t.getSouthWest(),
                            o = t.getNorthEast(),
                            r = o.lat > e.lat && i.lat < n.lat,
                            a = o.lng > e.lng && i.lng < n.lng;
                        return r && a;
                    },
                    toBBoxString: function () {
                        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
                    },
                    equals: function (t, e) {
                        return (
                            !!t &&
                            ((t = F(t)),
                            this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
                        );
                    },
                    isValid: function () {
                        return !(!this._southWest || !this._northEast);
                    },
                }),
                (j.prototype = {
                    equals: function (t, e) {
                        return (
                            !!t &&
                            ((t = Z(t)),
                            Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
                                (void 0 === e ? 1e-9 : e))
                        );
                    },
                    toString: function (t) {
                        return "LatLng(" + h(this.lat, t) + ", " + h(this.lng, t) + ")";
                    },
                    distanceTo: function (t) {
                        return V.distance(this, Z(t));
                    },
                    wrap: function () {
                        return V.wrapLatLng(this);
                    },
                    toBounds: function (t) {
                        var e = (180 * t) / 40075017,
                            n = e / Math.cos((Math.PI / 180) * this.lat);
                        return F([this.lat - e, this.lng - n], [this.lat + e, this.lng + n]);
                    },
                    clone: function () {
                        return new j(this.lat, this.lng, this.alt);
                    },
                });
            var R,
                N = {
                    latLngToPoint: function (t, e) {
                        var n = this.projection.project(t),
                            i = this.scale(e);
                        return this.transformation._transform(n, i);
                    },
                    pointToLatLng: function (t, e) {
                        var n = this.scale(e),
                            i = this.transformation.untransform(t, n);
                        return this.projection.unproject(i);
                    },
                    project: function (t) {
                        return this.projection.project(t);
                    },
                    unproject: function (t) {
                        return this.projection.unproject(t);
                    },
                    scale: function (t) {
                        return 256 * Math.pow(2, t);
                    },
                    zoom: function (t) {
                        return Math.log(t / 256) / Math.LN2;
                    },
                    getProjectedBounds: function (t) {
                        if (this.infinite) return null;
                        var e = this.projection.bounds,
                            n = this.scale(t);
                        return new z(this.transformation.transform(e.min, n), this.transformation.transform(e.max, n));
                    },
                    infinite: !1,
                    wrapLatLng: function (t) {
                        var e = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
                        return new j(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
                    },
                    wrapLatLngBounds: function (t) {
                        var e = t.getCenter(),
                            n = this.wrapLatLng(e),
                            i = e.lat - n.lat,
                            o = e.lng - n.lng;
                        if (0 === i && 0 === o) return t;
                        var r = t.getSouthWest(),
                            a = t.getNorthEast();
                        return new D(new j(r.lat - i, r.lng - o), new j(a.lat - i, a.lng - o));
                    },
                },
                V = e({}, N, {
                    wrapLng: [-180, 180],
                    R: 6371e3,
                    distance: function (t, e) {
                        var n = Math.PI / 180,
                            i = t.lat * n,
                            o = e.lat * n,
                            r = Math.sin(((e.lat - t.lat) * n) / 2),
                            a = Math.sin(((e.lng - t.lng) * n) / 2),
                            s = r * r + Math.cos(i) * Math.cos(o) * a * a,
                            l = 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
                        return this.R * l;
                    },
                }),
                H = {
                    R: 6378137,
                    MAX_LATITUDE: 85.0511287798,
                    project: function (t) {
                        var e = Math.PI / 180,
                            n = this.MAX_LATITUDE,
                            i = Math.max(Math.min(n, t.lat), -n),
                            o = Math.sin(i * e);
                        return new E(this.R * t.lng * e, (this.R * Math.log((1 + o) / (1 - o))) / 2);
                    },
                    unproject: function (t) {
                        var e = 180 / Math.PI;
                        return new j((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, (t.x * e) / this.R);
                    },
                    bounds: ((R = 6378137 * Math.PI), new z([-R, -R], [R, R])),
                };
            function G(t, e, n, i) {
                if (m(t)) return (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), void (this._d = t[3]);
                (this._a = t), (this._b = e), (this._c = n), (this._d = i);
            }
            function U(t, e, n, i) {
                return new G(t, e, n, i);
            }
            G.prototype = {
                transform: function (t, e) {
                    return this._transform(t.clone(), e);
                },
                _transform: function (t, e) {
                    return (
                        (e = e || 1), (t.x = e * (this._a * t.x + this._b)), (t.y = e * (this._c * t.y + this._d)), t
                    );
                },
                untransform: function (t, e) {
                    return (e = e || 1), new E((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
                },
            };
            var W = e({}, V, {
                    code: "EPSG:3857",
                    projection: H,
                    transformation: (function () {
                        var t = 0.5 / (Math.PI * H.R);
                        return U(t, 0.5, -t, 0.5);
                    })(),
                }),
                q = e({}, W, { code: "EPSG:900913" });
            function Y(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t);
            }
            function Q(t, e) {
                var n,
                    i,
                    o,
                    r,
                    a,
                    s,
                    l = "";
                for (n = 0, o = t.length; n < o; n++) {
                    for (i = 0, r = (a = t[n]).length; i < r; i++) l += (i ? "L" : "M") + (s = a[i]).x + " " + s.y;
                    l += e ? (Ct ? "z" : "x") : "";
                }
                return l || "M0 0";
            }
            var J = document.documentElement.style,
                K = "ActiveXObject" in window,
                X = K && !document.addEventListener,
                $ = "msLaunchUri" in navigator && !("documentMode" in document),
                tt = Mt("webkit"),
                et = Mt("android"),
                nt = Mt("android 2") || Mt("android 3"),
                it = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
                ot = et && Mt("Google") && it < 537 && !("AudioNode" in window),
                rt = !!window.opera,
                at = !$ && Mt("chrome"),
                st = Mt("gecko") && !tt && !rt && !K,
                lt = !at && Mt("safari"),
                ht = Mt("phantom"),
                ut = "OTransition" in J,
                ct = 0 === navigator.platform.indexOf("Win"),
                dt = K && "transition" in J,
                ft = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !nt,
                pt = "MozPerspective" in J,
                _t = !window.L_DISABLE_3D && (dt || ft || pt) && !ut && !ht,
                mt = "undefined" != typeof orientation || Mt("mobile"),
                gt = mt && tt,
                vt = mt && ft,
                yt = !window.PointerEvent && window.MSPointerEvent,
                bt = !(!window.PointerEvent && !yt),
                xt =
                    !window.L_NO_TOUCH &&
                    (bt ||
                        "ontouchstart" in window ||
                        (window.DocumentTouch && document instanceof window.DocumentTouch)),
                wt = mt && rt,
                Lt = mt && st,
                Pt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
                At = (function () {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0;
                            },
                        });
                        window.addEventListener("testPassiveEventSupport", l, e),
                            window.removeEventListener("testPassiveEventSupport", l, e);
                    } catch (t) {}
                    return t;
                })(),
                Tt = !!document.createElement("canvas").getContext,
                Ct = !(!document.createElementNS || !Y("svg").createSVGRect),
                St =
                    !Ct &&
                    (function () {
                        try {
                            var t = document.createElement("div");
                            t.innerHTML = '<v:shape adj="1"/>';
                            var e = t.firstChild;
                            return (e.style.behavior = "url(#default#VML)"), e && "object" == typeof e.adj;
                        } catch (t) {
                            return !1;
                        }
                    })();
            function Mt(t) {
                return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
            }
            var kt = {
                    ie: K,
                    ielt9: X,
                    edge: $,
                    webkit: tt,
                    android: et,
                    android23: nt,
                    androidStock: ot,
                    opera: rt,
                    chrome: at,
                    gecko: st,
                    safari: lt,
                    phantom: ht,
                    opera12: ut,
                    win: ct,
                    ie3d: dt,
                    webkit3d: ft,
                    gecko3d: pt,
                    any3d: _t,
                    mobile: mt,
                    mobileWebkit: gt,
                    mobileWebkit3d: vt,
                    msPointer: yt,
                    pointer: bt,
                    touch: xt,
                    mobileOpera: wt,
                    mobileGecko: Lt,
                    retina: Pt,
                    passiveEvents: At,
                    canvas: Tt,
                    svg: Ct,
                    vml: St,
                },
                Et = yt ? "MSPointerDown" : "pointerdown",
                Ot = yt ? "MSPointerMove" : "pointermove",
                Bt = yt ? "MSPointerUp" : "pointerup",
                zt = yt ? "MSPointerCancel" : "pointercancel",
                It = {},
                Dt = !1;
            function Ft(t, e, n, o) {
                return (
                    "touchstart" === e
                        ? (function (t, e, n) {
                              var o = i(function (t) {
                                  t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && ze(t), Nt(t, e);
                              });
                              (t["_leaflet_touchstart" + n] = o),
                                  t.addEventListener(Et, o, !1),
                                  Dt ||
                                      (document.addEventListener(Et, jt, !0),
                                      document.addEventListener(Ot, Zt, !0),
                                      document.addEventListener(Bt, Rt, !0),
                                      document.addEventListener(zt, Rt, !0),
                                      (Dt = !0));
                          })(t, n, o)
                        : "touchmove" === e
                        ? (function (t, e, n) {
                              var i = function (t) {
                                  (t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons) ||
                                      Nt(t, e);
                              };
                              (t["_leaflet_touchmove" + n] = i), t.addEventListener(Ot, i, !1);
                          })(t, n, o)
                        : "touchend" === e &&
                          (function (t, e, n) {
                              var i = function (t) {
                                  Nt(t, e);
                              };
                              (t["_leaflet_touchend" + n] = i),
                                  t.addEventListener(Bt, i, !1),
                                  t.addEventListener(zt, i, !1);
                          })(t, n, o),
                    this
                );
            }
            function jt(t) {
                It[t.pointerId] = t;
            }
            function Zt(t) {
                It[t.pointerId] && (It[t.pointerId] = t);
            }
            function Rt(t) {
                delete It[t.pointerId];
            }
            function Nt(t, e) {
                for (var n in ((t.touches = []), It)) t.touches.push(It[n]);
                (t.changedTouches = [t]), e(t);
            }
            var Vt,
                Ht,
                Gt,
                Ut,
                Wt,
                qt = yt ? "MSPointerDown" : bt ? "pointerdown" : "touchstart",
                Yt = yt ? "MSPointerUp" : bt ? "pointerup" : "touchend",
                Qt = "_leaflet_",
                Jt = de(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
                Kt = de(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
                Xt = "webkitTransition" === Kt || "OTransition" === Kt ? Kt + "End" : "transitionend";
            function $t(t) {
                return "string" == typeof t ? document.getElementById(t) : t;
            }
            function te(t, e) {
                var n = t.style[e] || (t.currentStyle && t.currentStyle[e]);
                if ((!n || "auto" === n) && document.defaultView) {
                    var i = document.defaultView.getComputedStyle(t, null);
                    n = i ? i[e] : null;
                }
                return "auto" === n ? null : n;
            }
            function ee(t, e, n) {
                var i = document.createElement(t);
                return (i.className = e || ""), n && n.appendChild(i), i;
            }
            function ne(t) {
                var e = t.parentNode;
                e && e.removeChild(t);
            }
            function ie(t) {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
            }
            function oe(t) {
                var e = t.parentNode;
                e && e.lastChild !== t && e.appendChild(t);
            }
            function re(t) {
                var e = t.parentNode;
                e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
            }
            function ae(t, e) {
                if (void 0 !== t.classList) return t.classList.contains(e);
                var n = ue(t);
                return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n);
            }
            function se(t, e) {
                if (void 0 !== t.classList) for (var n = c(e), i = 0, o = n.length; i < o; i++) t.classList.add(n[i]);
                else if (!ae(t, e)) {
                    var r = ue(t);
                    he(t, (r ? r + " " : "") + e);
                }
            }
            function le(t, e) {
                void 0 !== t.classList
                    ? t.classList.remove(e)
                    : he(t, u((" " + ue(t) + " ").replace(" " + e + " ", " ")));
            }
            function he(t, e) {
                void 0 === t.className.baseVal ? (t.className = e) : (t.className.baseVal = e);
            }
            function ue(t) {
                return (
                    t.correspondingElement && (t = t.correspondingElement),
                    void 0 === t.className.baseVal ? t.className : t.className.baseVal
                );
            }
            function ce(t, e) {
                "opacity" in t.style
                    ? (t.style.opacity = e)
                    : "filter" in t.style &&
                      (function (t, e) {
                          var n = !1,
                              i = "DXImageTransform.Microsoft.Alpha";
                          try {
                              n = t.filters.item(i);
                          } catch (t) {
                              if (1 === e) return;
                          }
                          (e = Math.round(100 * e)),
                              n
                                  ? ((n.Enabled = 100 !== e), (n.Opacity = e))
                                  : (t.style.filter += " progid:" + i + "(opacity=" + e + ")");
                      })(t, e);
            }
            function de(t) {
                for (var e = document.documentElement.style, n = 0; n < t.length; n++) if (t[n] in e) return t[n];
                return !1;
            }
            function fe(t, e, n) {
                var i = e || new E(0, 0);
                t.style[Jt] =
                    (dt ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") +
                    (n ? " scale(" + n + ")" : "");
            }
            function pe(t, e) {
                (t._leaflet_pos = e), _t ? fe(t, e) : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
            }
            function _e(t) {
                return t._leaflet_pos || new E(0, 0);
            }
            if ("onselectstart" in document)
                (Vt = function () {
                    Pe(window, "selectstart", ze);
                }),
                    (Ht = function () {
                        Te(window, "selectstart", ze);
                    });
            else {
                var me = de(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                (Vt = function () {
                    if (me) {
                        var t = document.documentElement.style;
                        (Gt = t[me]), (t[me] = "none");
                    }
                }),
                    (Ht = function () {
                        me && ((document.documentElement.style[me] = Gt), (Gt = void 0));
                    });
            }
            function ge() {
                Pe(window, "dragstart", ze);
            }
            function ve() {
                Te(window, "dragstart", ze);
            }
            function ye(t) {
                for (; -1 === t.tabIndex; ) t = t.parentNode;
                t.style &&
                    (be(), (Ut = t), (Wt = t.style.outline), (t.style.outline = "none"), Pe(window, "keydown", be));
            }
            function be() {
                Ut && ((Ut.style.outline = Wt), (Ut = void 0), (Wt = void 0), Te(window, "keydown", be));
            }
            function xe(t) {
                do {
                    t = t.parentNode;
                } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
                return t;
            }
            function we(t) {
                var e = t.getBoundingClientRect();
                return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e };
            }
            var Le = {
                TRANSFORM: Jt,
                TRANSITION: Kt,
                TRANSITION_END: Xt,
                get: $t,
                getStyle: te,
                create: ee,
                remove: ne,
                empty: ie,
                toFront: oe,
                toBack: re,
                hasClass: ae,
                addClass: se,
                removeClass: le,
                setClass: he,
                getClass: ue,
                setOpacity: ce,
                testProp: de,
                setTransform: fe,
                setPosition: pe,
                getPosition: _e,
                disableTextSelection: Vt,
                enableTextSelection: Ht,
                disableImageDrag: ge,
                enableImageDrag: ve,
                preventOutline: ye,
                restoreOutline: be,
                getSizedParentNode: xe,
                getScale: we,
            };
            function Pe(t, e, n, i) {
                if ("object" == typeof e) for (var o in e) Me(t, o, e[o], n);
                else for (var r = 0, a = (e = c(e)).length; r < a; r++) Me(t, e[r], n, i);
                return this;
            }
            var Ae = "_leaflet_events";
            function Te(t, e, n, i) {
                if ("object" == typeof e) for (var o in e) ke(t, o, e[o], n);
                else if (e) for (var r = 0, a = (e = c(e)).length; r < a; r++) ke(t, e[r], n, i);
                else {
                    for (var s in t[Ae]) ke(t, s, t[Ae][s]);
                    delete t[Ae];
                }
                return this;
            }
            function Ce() {
                if (bt) return !($ || lt);
            }
            var Se = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
            function Me(t, e, n, i) {
                var o = e + r(n) + (i ? "_" + r(i) : "");
                if (t[Ae] && t[Ae][o]) return this;
                var a = function (e) {
                        return n.call(i || t, e || window.event);
                    },
                    s = a;
                bt && 0 === e.indexOf("touch")
                    ? Ft(t, e, a, o)
                    : xt && "dblclick" === e && !Ce()
                    ? (function (t, e, n) {
                          var i,
                              o,
                              r = !1;
                          function a(t) {
                              if (bt) {
                                  if (!t.isPrimary) return;
                                  if ("mouse" === t.pointerType) return;
                              } else if (t.touches.length > 1) return;
                              var e = Date.now(),
                                  n = e - (i || e);
                              (o = t.touches ? t.touches[0] : t), (r = n > 0 && n <= 250), (i = e);
                          }
                          function s(t) {
                              if (r && !o.cancelBubble) {
                                  if (bt) {
                                      if ("mouse" === t.pointerType) return;
                                      var n,
                                          a,
                                          s = {};
                                      for (a in o) (n = o[a]), (s[a] = n && n.bind ? n.bind(o) : n);
                                      o = s;
                                  }
                                  (o.type = "dblclick"), (o.button = 0), e(o), (i = null);
                              }
                          }
                          (t[Qt + qt + n] = a),
                              (t[Qt + Yt + n] = s),
                              (t[Qt + "dblclick" + n] = e),
                              t.addEventListener(qt, a, !!At && { passive: !1 }),
                              t.addEventListener(Yt, s, !!At && { passive: !1 }),
                              t.addEventListener("dblclick", e, !1);
                      })(t, a, o)
                    : "addEventListener" in t
                    ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e
                        ? t.addEventListener(Se[e] || e, a, !!At && { passive: !1 })
                        : "mouseenter" === e || "mouseleave" === e
                        ? ((a = function (e) {
                              (e = e || window.event), Ve(t, e) && s(e);
                          }),
                          t.addEventListener(Se[e], a, !1))
                        : t.addEventListener(e, s, !1)
                    : "attachEvent" in t && t.attachEvent("on" + e, a),
                    (t[Ae] = t[Ae] || {}),
                    (t[Ae][o] = a);
            }
            function ke(t, e, n, i) {
                var o = e + r(n) + (i ? "_" + r(i) : ""),
                    a = t[Ae] && t[Ae][o];
                if (!a) return this;
                bt && 0 === e.indexOf("touch")
                    ? (function (t, e, n) {
                          var i = t["_leaflet_" + e + n];
                          "touchstart" === e
                              ? t.removeEventListener(Et, i, !1)
                              : "touchmove" === e
                              ? t.removeEventListener(Ot, i, !1)
                              : "touchend" === e &&
                                (t.removeEventListener(Bt, i, !1), t.removeEventListener(zt, i, !1));
                      })(t, e, o)
                    : xt && "dblclick" === e && !Ce()
                    ? (function (t, e) {
                          var n = t[Qt + qt + e],
                              i = t[Qt + Yt + e],
                              o = t[Qt + "dblclick" + e];
                          t.removeEventListener(qt, n, !!At && { passive: !1 }),
                              t.removeEventListener(Yt, i, !!At && { passive: !1 }),
                              t.removeEventListener("dblclick", o, !1);
                      })(t, o)
                    : "removeEventListener" in t
                    ? t.removeEventListener(Se[e] || e, a, !1)
                    : "detachEvent" in t && t.detachEvent("on" + e, a),
                    (t[Ae][o] = null);
            }
            function Ee(t) {
                return (
                    t.stopPropagation
                        ? t.stopPropagation()
                        : t.originalEvent
                        ? (t.originalEvent._stopped = !0)
                        : (t.cancelBubble = !0),
                    Ne(t),
                    this
                );
            }
            function Oe(t) {
                return Me(t, "wheel", Ee), this;
            }
            function Be(t) {
                return Pe(t, "mousedown touchstart dblclick", Ee), Me(t, "click", Re), this;
            }
            function ze(t) {
                return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
            }
            function Ie(t) {
                return ze(t), Ee(t), this;
            }
            function De(t, e) {
                if (!e) return new E(t.clientX, t.clientY);
                var n = we(e),
                    i = n.boundingClientRect;
                return new E((t.clientX - i.left) / n.x - e.clientLeft, (t.clientY - i.top) / n.y - e.clientTop);
            }
            var Fe = ct && at ? 2 * window.devicePixelRatio : st ? window.devicePixelRatio : 1;
            function je(t) {
                return $
                    ? t.wheelDeltaY / 2
                    : t.deltaY && 0 === t.deltaMode
                    ? -t.deltaY / Fe
                    : t.deltaY && 1 === t.deltaMode
                    ? 20 * -t.deltaY
                    : t.deltaY && 2 === t.deltaMode
                    ? 60 * -t.deltaY
                    : t.deltaX || t.deltaZ
                    ? 0
                    : t.wheelDelta
                    ? (t.wheelDeltaY || t.wheelDelta) / 2
                    : t.detail && Math.abs(t.detail) < 32765
                    ? 20 * -t.detail
                    : t.detail
                    ? (t.detail / -32765) * 60
                    : 0;
            }
            var Ze = {};
            function Re(t) {
                Ze[t.type] = !0;
            }
            function Ne(t) {
                var e = Ze[t.type];
                return (Ze[t.type] = !1), e;
            }
            function Ve(t, e) {
                var n = e.relatedTarget;
                if (!n) return !0;
                try {
                    for (; n && n !== t; ) n = n.parentNode;
                } catch (t) {
                    return !1;
                }
                return n !== t;
            }
            var He = {
                    on: Pe,
                    off: Te,
                    stopPropagation: Ee,
                    disableScrollPropagation: Oe,
                    disableClickPropagation: Be,
                    preventDefault: ze,
                    stop: Ie,
                    getMousePosition: De,
                    getWheelDelta: je,
                    fakeStop: Re,
                    skipped: Ne,
                    isExternalTarget: Ve,
                    addListener: Pe,
                    removeListener: Te,
                },
                Ge = k.extend({
                    run: function (t, e, n, i) {
                        this.stop(),
                            (this._el = t),
                            (this._inProgress = !0),
                            (this._duration = n || 0.25),
                            (this._easeOutPower = 1 / Math.max(i || 0.5, 0.2)),
                            (this._startPos = _e(t)),
                            (this._offset = e.subtract(this._startPos)),
                            (this._startTime = +new Date()),
                            this.fire("start"),
                            this._animate();
                    },
                    stop: function () {
                        this._inProgress && (this._step(!0), this._complete());
                    },
                    _animate: function () {
                        (this._animId = A(this._animate, this)), this._step();
                    },
                    _step: function (t) {
                        var e = +new Date() - this._startTime,
                            n = 1e3 * this._duration;
                        e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete());
                    },
                    _runFrame: function (t, e) {
                        var n = this._startPos.add(this._offset.multiplyBy(t));
                        e && n._round(), pe(this._el, n), this.fire("step");
                    },
                    _complete: function () {
                        T(this._animId), (this._inProgress = !1), this.fire("end");
                    },
                    _easeOut: function (t) {
                        return 1 - Math.pow(1 - t, this._easeOutPower);
                    },
                }),
                Ue = k.extend({
                    options: {
                        crs: W,
                        center: void 0,
                        zoom: void 0,
                        minZoom: void 0,
                        maxZoom: void 0,
                        layers: [],
                        maxBounds: void 0,
                        renderer: void 0,
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4,
                        fadeAnimation: !0,
                        markerZoomAnimation: !0,
                        transform3DLimit: 8388608,
                        zoomSnap: 1,
                        zoomDelta: 1,
                        trackResize: !0,
                    },
                    initialize: function (t, e) {
                        (e = d(this, e)),
                            (this._handlers = []),
                            (this._layers = {}),
                            (this._zoomBoundLayers = {}),
                            (this._sizeChanged = !0),
                            this._initContainer(t),
                            this._initLayout(),
                            (this._onResize = i(this._onResize, this)),
                            this._initEvents(),
                            e.maxBounds && this.setMaxBounds(e.maxBounds),
                            void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                            e.center && void 0 !== e.zoom && this.setView(Z(e.center), e.zoom, { reset: !0 }),
                            this.callInitHooks(),
                            (this._zoomAnimated = Kt && _t && !wt && this.options.zoomAnimation),
                            this._zoomAnimated &&
                                (this._createAnimProxy(), Pe(this._proxy, Xt, this._catchTransitionEnd, this)),
                            this._addLayers(this.options.layers);
                    },
                    setView: function (t, n, i) {
                        return (
                            (n = void 0 === n ? this._zoom : this._limitZoom(n)),
                            (t = this._limitCenter(Z(t), n, this.options.maxBounds)),
                            (i = i || {}),
                            this._stop(),
                            this._loaded &&
                            !i.reset &&
                            !0 !== i &&
                            (void 0 !== i.animate &&
                                ((i.zoom = e({ animate: i.animate }, i.zoom)),
                                (i.pan = e({ animate: i.animate, duration: i.duration }, i.pan))),
                            this._zoom !== n
                                ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, n, i.zoom)
                                : this._tryAnimatedPan(t, i.pan))
                                ? (clearTimeout(this._sizeTimer), this)
                                : (this._resetView(t, n), this)
                        );
                    },
                    setZoom: function (t, e) {
                        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : ((this._zoom = t), this);
                    },
                    zoomIn: function (t, e) {
                        return (t = t || (_t ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, e);
                    },
                    zoomOut: function (t, e) {
                        return (t = t || (_t ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, e);
                    },
                    setZoomAround: function (t, e, n) {
                        var i = this.getZoomScale(e),
                            o = this.getSize().divideBy(2),
                            r = (t instanceof E ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / i),
                            a = this.containerPointToLatLng(o.add(r));
                        return this.setView(a, e, { zoom: n });
                    },
                    _getBoundsCenterZoom: function (t, e) {
                        (e = e || {}), (t = t.getBounds ? t.getBounds() : F(t));
                        var n = B(e.paddingTopLeft || e.padding || [0, 0]),
                            i = B(e.paddingBottomRight || e.padding || [0, 0]),
                            o = this.getBoundsZoom(t, !1, n.add(i));
                        if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
                            return { center: t.getCenter(), zoom: o };
                        var r = i.subtract(n).divideBy(2),
                            a = this.project(t.getSouthWest(), o),
                            s = this.project(t.getNorthEast(), o);
                        return { center: this.unproject(a.add(s).divideBy(2).add(r), o), zoom: o };
                    },
                    fitBounds: function (t, e) {
                        if (!(t = F(t)).isValid()) throw new Error("Bounds are not valid.");
                        var n = this._getBoundsCenterZoom(t, e);
                        return this.setView(n.center, n.zoom, e);
                    },
                    fitWorld: function (t) {
                        return this.fitBounds(
                            [
                                [-90, -180],
                                [90, 180],
                            ],
                            t
                        );
                    },
                    panTo: function (t, e) {
                        return this.setView(t, this._zoom, { pan: e });
                    },
                    panBy: function (t, e) {
                        if (((e = e || {}), !(t = B(t).round()).x && !t.y)) return this.fire("moveend");
                        if (!0 !== e.animate && !this.getSize().contains(t))
                            return (
                                this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
                                this
                            );
                        if (
                            (this._panAnim ||
                                ((this._panAnim = new Ge()),
                                this._panAnim.on(
                                    { step: this._onPanTransitionStep, end: this._onPanTransitionEnd },
                                    this
                                )),
                            e.noMoveStart || this.fire("movestart"),
                            !1 !== e.animate)
                        ) {
                            se(this._mapPane, "leaflet-pan-anim");
                            var n = this._getMapPanePos().subtract(t).round();
                            this._panAnim.run(this._mapPane, n, e.duration || 0.25, e.easeLinearity);
                        } else this._rawPanBy(t), this.fire("move").fire("moveend");
                        return this;
                    },
                    flyTo: function (t, e, n) {
                        if (!1 === (n = n || {}).animate || !_t) return this.setView(t, e, n);
                        this._stop();
                        var i = this.project(this.getCenter()),
                            o = this.project(t),
                            r = this.getSize(),
                            a = this._zoom;
                        (t = Z(t)), (e = void 0 === e ? a : e);
                        var s = Math.max(r.x, r.y),
                            l = s * this.getZoomScale(a, e),
                            h = o.distanceTo(i) || 1;
                        function u(t) {
                            var e =
                                    (l * l - s * s + 2.0164 * (t ? -1 : 1) * 2.0164 * h * h) /
                                    (2 * (t ? l : s) * 2.0164 * h),
                                n = Math.sqrt(e * e + 1) - e;
                            return n < 1e-9 ? -18 : Math.log(n);
                        }
                        function c(t) {
                            return (Math.exp(t) - Math.exp(-t)) / 2;
                        }
                        function d(t) {
                            return (Math.exp(t) + Math.exp(-t)) / 2;
                        }
                        var f = u(0);
                        function p(t) {
                            return (s * (d(f) * (c((e = f + 1.42 * t)) / d(e)) - c(f))) / 2.0164;
                            var e;
                        }
                        var _ = Date.now(),
                            m = (u(1) - f) / 1.42,
                            g = n.duration ? 1e3 * n.duration : 1e3 * m * 0.8;
                        return (
                            this._moveStart(!0, n.noMoveStart),
                            function n() {
                                var r = (Date.now() - _) / g,
                                    l =
                                        (function (t) {
                                            return 1 - Math.pow(1 - t, 1.5);
                                        })(r) * m;
                                r <= 1
                                    ? ((this._flyToFrame = A(n, this)),
                                      this._move(
                                          this.unproject(i.add(o.subtract(i).multiplyBy(p(l) / h)), a),
                                          this.getScaleZoom(
                                              s /
                                                  (function (t) {
                                                      return s * (d(f) / d(f + 1.42 * t));
                                                  })(l),
                                              a
                                          ),
                                          { flyTo: !0 }
                                      ))
                                    : this._move(t, e)._moveEnd(!0);
                            }.call(this),
                            this
                        );
                    },
                    flyToBounds: function (t, e) {
                        var n = this._getBoundsCenterZoom(t, e);
                        return this.flyTo(n.center, n.zoom, e);
                    },
                    setMaxBounds: function (t) {
                        return (t = F(t)).isValid()
                            ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
                              (this.options.maxBounds = t),
                              this._loaded && this._panInsideMaxBounds(),
                              this.on("moveend", this._panInsideMaxBounds))
                            : ((this.options.maxBounds = null), this.off("moveend", this._panInsideMaxBounds));
                    },
                    setMinZoom: function (t) {
                        var e = this.options.minZoom;
                        return (
                            (this.options.minZoom = t),
                            this._loaded &&
                            e !== t &&
                            (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom)
                                ? this.setZoom(t)
                                : this
                        );
                    },
                    setMaxZoom: function (t) {
                        var e = this.options.maxZoom;
                        return (
                            (this.options.maxZoom = t),
                            this._loaded &&
                            e !== t &&
                            (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom)
                                ? this.setZoom(t)
                                : this
                        );
                    },
                    panInsideBounds: function (t, e) {
                        this._enforcingBounds = !0;
                        var n = this.getCenter(),
                            i = this._limitCenter(n, this._zoom, F(t));
                        return n.equals(i) || this.panTo(i, e), (this._enforcingBounds = !1), this;
                    },
                    panInside: function (t, e) {
                        var n = B((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                            i = B(e.paddingBottomRight || e.padding || [0, 0]),
                            o = this.getCenter(),
                            r = this.project(o),
                            a = this.project(t),
                            s = this.getPixelBounds(),
                            l = s.getSize().divideBy(2),
                            h = I([s.min.add(n), s.max.subtract(i)]);
                        if (!h.contains(a)) {
                            this._enforcingBounds = !0;
                            var u = r.subtract(a),
                                c = B(a.x + u.x, a.y + u.y);
                            (a.x < h.min.x || a.x > h.max.x) &&
                                ((c.x = r.x - u.x), u.x > 0 ? (c.x += l.x - n.x) : (c.x -= l.x - i.x)),
                                (a.y < h.min.y || a.y > h.max.y) &&
                                    ((c.y = r.y - u.y), u.y > 0 ? (c.y += l.y - n.y) : (c.y -= l.y - i.y)),
                                this.panTo(this.unproject(c), e),
                                (this._enforcingBounds = !1);
                        }
                        return this;
                    },
                    invalidateSize: function (t) {
                        if (!this._loaded) return this;
                        t = e({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
                        var n = this.getSize();
                        (this._sizeChanged = !0), (this._lastCenter = null);
                        var o = this.getSize(),
                            r = n.divideBy(2).round(),
                            a = o.divideBy(2).round(),
                            s = r.subtract(a);
                        return s.x || s.y
                            ? (t.animate && t.pan
                                  ? this.panBy(s)
                                  : (t.pan && this._rawPanBy(s),
                                    this.fire("move"),
                                    t.debounceMoveend
                                        ? (clearTimeout(this._sizeTimer),
                                          (this._sizeTimer = setTimeout(i(this.fire, this, "moveend"), 200)))
                                        : this.fire("moveend")),
                              this.fire("resize", { oldSize: n, newSize: o }))
                            : this;
                    },
                    stop: function () {
                        return (
                            this.setZoom(this._limitZoom(this._zoom)),
                            this.options.zoomSnap || this.fire("viewreset"),
                            this._stop()
                        );
                    },
                    locate: function (t) {
                        if (
                            ((t = this._locateOptions = e({ timeout: 1e4, watch: !1 }, t)),
                            !("geolocation" in navigator))
                        )
                            return (
                                this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this
                            );
                        var n = i(this._handleGeolocationResponse, this),
                            o = i(this._handleGeolocationError, this);
                        return (
                            t.watch
                                ? (this._locationWatchId = navigator.geolocation.watchPosition(n, o, t))
                                : navigator.geolocation.getCurrentPosition(n, o, t),
                            this
                        );
                    },
                    stopLocate: function () {
                        return (
                            navigator.geolocation &&
                                navigator.geolocation.clearWatch &&
                                navigator.geolocation.clearWatch(this._locationWatchId),
                            this._locateOptions && (this._locateOptions.setView = !1),
                            this
                        );
                    },
                    _handleGeolocationError: function (t) {
                        var e = t.code,
                            n =
                                t.message ||
                                (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                        this._locateOptions.setView && !this._loaded && this.fitWorld(),
                            this.fire("locationerror", { code: e, message: "Geolocation error: " + n + "." });
                    },
                    _handleGeolocationResponse: function (t) {
                        var e = new j(t.coords.latitude, t.coords.longitude),
                            n = e.toBounds(2 * t.coords.accuracy),
                            i = this._locateOptions;
                        if (i.setView) {
                            var o = this.getBoundsZoom(n);
                            this.setView(e, i.maxZoom ? Math.min(o, i.maxZoom) : o);
                        }
                        var r = { latlng: e, bounds: n, timestamp: t.timestamp };
                        for (var a in t.coords) "number" == typeof t.coords[a] && (r[a] = t.coords[a]);
                        this.fire("locationfound", r);
                    },
                    addHandler: function (t, e) {
                        if (!e) return this;
                        var n = (this[t] = new e(this));
                        return this._handlers.push(n), this.options[t] && n.enable(), this;
                    },
                    remove: function () {
                        if (
                            (this._initEvents(!0),
                            this.off("moveend", this._panInsideMaxBounds),
                            this._containerId !== this._container._leaflet_id)
                        )
                            throw new Error("Map container is being reused by another instance");
                        try {
                            delete this._container._leaflet_id, delete this._containerId;
                        } catch (t) {
                            (this._container._leaflet_id = void 0), (this._containerId = void 0);
                        }
                        var t;
                        for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
                        this._stop(),
                        ne(this._mapPane),
                        this._clearControlPos && this._clearControlPos(),
                        this._resizeRequest && (T(this._resizeRequest), (this._resizeRequest = null)),
                        this._clearHandlers(),
                        this._loaded && this.fire("unload"),
                        this._layers))
                            this._layers[t].remove();
                        for (t in this._panes) ne(this._panes[t]);
                        return (
                            (this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this
                        );
                    },
                    createPane: function (t, e) {
                        var n = ee(
                            "div",
                            "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                            e || this._mapPane
                        );
                        return t && (this._panes[t] = n), n;
                    },
                    getCenter: function () {
                        return (
                            this._checkIfLoaded(),
                            this._lastCenter && !this._moved()
                                ? this._lastCenter
                                : this.layerPointToLatLng(this._getCenterLayerPoint())
                        );
                    },
                    getZoom: function () {
                        return this._zoom;
                    },
                    getBounds: function () {
                        var t = this.getPixelBounds();
                        return new D(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
                    },
                    getMinZoom: function () {
                        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
                    },
                    getMaxZoom: function () {
                        return void 0 === this.options.maxZoom
                            ? void 0 === this._layersMaxZoom
                                ? 1 / 0
                                : this._layersMaxZoom
                            : this.options.maxZoom;
                    },
                    getBoundsZoom: function (t, e, n) {
                        (t = F(t)), (n = B(n || [0, 0]));
                        var i = this.getZoom() || 0,
                            o = this.getMinZoom(),
                            r = this.getMaxZoom(),
                            a = t.getNorthWest(),
                            s = t.getSouthEast(),
                            l = this.getSize().subtract(n),
                            h = I(this.project(s, i), this.project(a, i)).getSize(),
                            u = _t ? this.options.zoomSnap : 1,
                            c = l.x / h.x,
                            d = l.y / h.y,
                            f = e ? Math.max(c, d) : Math.min(c, d);
                        return (
                            (i = this.getScaleZoom(f, i)),
                            u &&
                                ((i = Math.round(i / (u / 100)) * (u / 100)),
                                (i = e ? Math.ceil(i / u) * u : Math.floor(i / u) * u)),
                            Math.max(o, Math.min(r, i))
                        );
                    },
                    getSize: function () {
                        return (
                            (this._size && !this._sizeChanged) ||
                                ((this._size = new E(
                                    this._container.clientWidth || 0,
                                    this._container.clientHeight || 0
                                )),
                                (this._sizeChanged = !1)),
                            this._size.clone()
                        );
                    },
                    getPixelBounds: function (t, e) {
                        var n = this._getTopLeftPoint(t, e);
                        return new z(n, n.add(this.getSize()));
                    },
                    getPixelOrigin: function () {
                        return this._checkIfLoaded(), this._pixelOrigin;
                    },
                    getPixelWorldBounds: function (t) {
                        return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
                    },
                    getPane: function (t) {
                        return "string" == typeof t ? this._panes[t] : t;
                    },
                    getPanes: function () {
                        return this._panes;
                    },
                    getContainer: function () {
                        return this._container;
                    },
                    getZoomScale: function (t, e) {
                        var n = this.options.crs;
                        return (e = void 0 === e ? this._zoom : e), n.scale(t) / n.scale(e);
                    },
                    getScaleZoom: function (t, e) {
                        var n = this.options.crs;
                        e = void 0 === e ? this._zoom : e;
                        var i = n.zoom(t * n.scale(e));
                        return isNaN(i) ? 1 / 0 : i;
                    },
                    project: function (t, e) {
                        return (e = void 0 === e ? this._zoom : e), this.options.crs.latLngToPoint(Z(t), e);
                    },
                    unproject: function (t, e) {
                        return (e = void 0 === e ? this._zoom : e), this.options.crs.pointToLatLng(B(t), e);
                    },
                    layerPointToLatLng: function (t) {
                        var e = B(t).add(this.getPixelOrigin());
                        return this.unproject(e);
                    },
                    latLngToLayerPoint: function (t) {
                        return this.project(Z(t))._round()._subtract(this.getPixelOrigin());
                    },
                    wrapLatLng: function (t) {
                        return this.options.crs.wrapLatLng(Z(t));
                    },
                    wrapLatLngBounds: function (t) {
                        return this.options.crs.wrapLatLngBounds(F(t));
                    },
                    distance: function (t, e) {
                        return this.options.crs.distance(Z(t), Z(e));
                    },
                    containerPointToLayerPoint: function (t) {
                        return B(t).subtract(this._getMapPanePos());
                    },
                    layerPointToContainerPoint: function (t) {
                        return B(t).add(this._getMapPanePos());
                    },
                    containerPointToLatLng: function (t) {
                        var e = this.containerPointToLayerPoint(B(t));
                        return this.layerPointToLatLng(e);
                    },
                    latLngToContainerPoint: function (t) {
                        return this.layerPointToContainerPoint(this.latLngToLayerPoint(Z(t)));
                    },
                    mouseEventToContainerPoint: function (t) {
                        return De(t, this._container);
                    },
                    mouseEventToLayerPoint: function (t) {
                        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
                    },
                    mouseEventToLatLng: function (t) {
                        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
                    },
                    _initContainer: function (t) {
                        var e = (this._container = $t(t));
                        if (!e) throw new Error("Map container not found.");
                        if (e._leaflet_id) throw new Error("Map container is already initialized.");
                        Pe(e, "scroll", this._onScroll, this), (this._containerId = r(e));
                    },
                    _initLayout: function () {
                        var t = this._container;
                        (this._fadeAnimated = this.options.fadeAnimation && _t),
                            se(
                                t,
                                "leaflet-container" +
                                    (xt ? " leaflet-touch" : "") +
                                    (Pt ? " leaflet-retina" : "") +
                                    (X ? " leaflet-oldie" : "") +
                                    (lt ? " leaflet-safari" : "") +
                                    (this._fadeAnimated ? " leaflet-fade-anim" : "")
                            );
                        var e = te(t, "position");
                        "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
                            this._initPanes(),
                            this._initControlPos && this._initControlPos();
                    },
                    _initPanes: function () {
                        var t = (this._panes = {});
                        (this._paneRenderers = {}),
                            (this._mapPane = this.createPane("mapPane", this._container)),
                            pe(this._mapPane, new E(0, 0)),
                            this.createPane("tilePane"),
                            this.createPane("shadowPane"),
                            this.createPane("overlayPane"),
                            this.createPane("markerPane"),
                            this.createPane("tooltipPane"),
                            this.createPane("popupPane"),
                            this.options.markerZoomAnimation ||
                                (se(t.markerPane, "leaflet-zoom-hide"), se(t.shadowPane, "leaflet-zoom-hide"));
                    },
                    _resetView: function (t, e) {
                        pe(this._mapPane, new E(0, 0));
                        var n = !this._loaded;
                        (this._loaded = !0), (e = this._limitZoom(e)), this.fire("viewprereset");
                        var i = this._zoom !== e;
                        this._moveStart(i, !1)._move(t, e)._moveEnd(i), this.fire("viewreset"), n && this.fire("load");
                    },
                    _moveStart: function (t, e) {
                        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
                    },
                    _move: function (t, e, n) {
                        void 0 === e && (e = this._zoom);
                        var i = this._zoom !== e;
                        return (
                            (this._zoom = e),
                            (this._lastCenter = t),
                            (this._pixelOrigin = this._getNewPixelOrigin(t)),
                            (i || (n && n.pinch)) && this.fire("zoom", n),
                            this.fire("move", n)
                        );
                    },
                    _moveEnd: function (t) {
                        return t && this.fire("zoomend"), this.fire("moveend");
                    },
                    _stop: function () {
                        return T(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
                    },
                    _rawPanBy: function (t) {
                        pe(this._mapPane, this._getMapPanePos().subtract(t));
                    },
                    _getZoomSpan: function () {
                        return this.getMaxZoom() - this.getMinZoom();
                    },
                    _panInsideMaxBounds: function () {
                        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
                    },
                    _checkIfLoaded: function () {
                        if (!this._loaded) throw new Error("Set map center and zoom first.");
                    },
                    _initEvents: function (t) {
                        (this._targets = {}), (this._targets[r(this._container)] = this);
                        var e = t ? Te : Pe;
                        e(
                            this._container,
                            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
                            this._handleDOMEvent,
                            this
                        ),
                            this.options.trackResize && e(window, "resize", this._onResize, this),
                            _t &&
                                this.options.transform3DLimit &&
                                (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
                    },
                    _onResize: function () {
                        T(this._resizeRequest),
                            (this._resizeRequest = A(function () {
                                this.invalidateSize({ debounceMoveend: !0 });
                            }, this));
                    },
                    _onScroll: function () {
                        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
                    },
                    _onMoveEnd: function () {
                        var t = this._getMapPanePos();
                        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit &&
                            this._resetView(this.getCenter(), this.getZoom());
                    },
                    _findEventTargets: function (t, e) {
                        for (
                            var n,
                                i = [],
                                o = "mouseout" === e || "mouseover" === e,
                                a = t.target || t.srcElement,
                                s = !1;
                            a;

                        ) {
                            if (
                                (n = this._targets[r(a)]) &&
                                ("click" === e || "preclick" === e) &&
                                !t._simulated &&
                                this._draggableMoved(n)
                            ) {
                                s = !0;
                                break;
                            }
                            if (n && n.listens(e, !0)) {
                                if (o && !Ve(a, t)) break;
                                if ((i.push(n), o)) break;
                            }
                            if (a === this._container) break;
                            a = a.parentNode;
                        }
                        return i.length || s || o || !Ve(a, t) || (i = [this]), i;
                    },
                    _handleDOMEvent: function (t) {
                        if (this._loaded && !Ne(t)) {
                            var e = t.type;
                            ("mousedown" !== e && "keypress" !== e && "keyup" !== e && "keydown" !== e) ||
                                ye(t.target || t.srcElement),
                                this._fireDOMEvent(t, e);
                        }
                    },
                    _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                    _fireDOMEvent: function (t, n, i) {
                        if ("click" === t.type) {
                            var o = e({}, t);
                            (o.type = "preclick"), this._fireDOMEvent(o, o.type, i);
                        }
                        if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, n))).length) {
                            var r = i[0];
                            "contextmenu" === n && r.listens(n, !0) && ze(t);
                            var a = { originalEvent: t };
                            if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                                var s = r.getLatLng && (!r._radius || r._radius <= 10);
                                (a.containerPoint = s
                                    ? this.latLngToContainerPoint(r.getLatLng())
                                    : this.mouseEventToContainerPoint(t)),
                                    (a.layerPoint = this.containerPointToLayerPoint(a.containerPoint)),
                                    (a.latlng = s ? r.getLatLng() : this.layerPointToLatLng(a.layerPoint));
                            }
                            for (var l = 0; l < i.length; l++)
                                if (
                                    (i[l].fire(n, a, !0),
                                    a.originalEvent._stopped ||
                                        (!1 === i[l].options.bubblingMouseEvents && -1 !== g(this._mouseEvents, n)))
                                )
                                    return;
                        }
                    },
                    _draggableMoved: function (t) {
                        return (
                            ((t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved()) ||
                            (this.boxZoom && this.boxZoom.moved())
                        );
                    },
                    _clearHandlers: function () {
                        for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
                    },
                    whenReady: function (t, e) {
                        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
                    },
                    _getMapPanePos: function () {
                        return _e(this._mapPane) || new E(0, 0);
                    },
                    _moved: function () {
                        var t = this._getMapPanePos();
                        return t && !t.equals([0, 0]);
                    },
                    _getTopLeftPoint: function (t, e) {
                        return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(
                            this._getMapPanePos()
                        );
                    },
                    _getNewPixelOrigin: function (t, e) {
                        var n = this.getSize()._divideBy(2);
                        return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round();
                    },
                    _latLngToNewLayerPoint: function (t, e, n) {
                        var i = this._getNewPixelOrigin(n, e);
                        return this.project(t, e)._subtract(i);
                    },
                    _latLngBoundsToNewLayerBounds: function (t, e, n) {
                        var i = this._getNewPixelOrigin(n, e);
                        return I([
                            this.project(t.getSouthWest(), e)._subtract(i),
                            this.project(t.getNorthWest(), e)._subtract(i),
                            this.project(t.getSouthEast(), e)._subtract(i),
                            this.project(t.getNorthEast(), e)._subtract(i),
                        ]);
                    },
                    _getCenterLayerPoint: function () {
                        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
                    },
                    _getCenterOffset: function (t) {
                        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
                    },
                    _limitCenter: function (t, e, n) {
                        if (!n) return t;
                        var i = this.project(t, e),
                            o = this.getSize().divideBy(2),
                            r = new z(i.subtract(o), i.add(o)),
                            a = this._getBoundsOffset(r, n, e);
                        return a.round().equals([0, 0]) ? t : this.unproject(i.add(a), e);
                    },
                    _limitOffset: function (t, e) {
                        if (!e) return t;
                        var n = this.getPixelBounds(),
                            i = new z(n.min.add(t), n.max.add(t));
                        return t.add(this._getBoundsOffset(i, e));
                    },
                    _getBoundsOffset: function (t, e, n) {
                        var i = I(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
                            o = i.min.subtract(t.min),
                            r = i.max.subtract(t.max);
                        return new E(this._rebound(o.x, -r.x), this._rebound(o.y, -r.y));
                    },
                    _rebound: function (t, e) {
                        return t + e > 0
                            ? Math.round(t - e) / 2
                            : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
                    },
                    _limitZoom: function (t) {
                        var e = this.getMinZoom(),
                            n = this.getMaxZoom(),
                            i = _t ? this.options.zoomSnap : 1;
                        return i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t));
                    },
                    _onPanTransitionStep: function () {
                        this.fire("move");
                    },
                    _onPanTransitionEnd: function () {
                        le(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
                    },
                    _tryAnimatedPan: function (t, e) {
                        var n = this._getCenterOffset(t)._trunc();
                        return !((!0 !== (e && e.animate) && !this.getSize().contains(n)) || (this.panBy(n, e), 0));
                    },
                    _createAnimProxy: function () {
                        var t = (this._proxy = ee("div", "leaflet-proxy leaflet-zoom-animated"));
                        this._panes.mapPane.appendChild(t),
                            this.on(
                                "zoomanim",
                                function (t) {
                                    var e = Jt,
                                        n = this._proxy.style[e];
                                    fe(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                                        n === this._proxy.style[e] &&
                                            this._animatingZoom &&
                                            this._onZoomTransitionEnd();
                                },
                                this
                            ),
                            this.on("load moveend", this._animMoveEnd, this),
                            this._on("unload", this._destroyAnimProxy, this);
                    },
                    _destroyAnimProxy: function () {
                        ne(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
                    },
                    _animMoveEnd: function () {
                        var t = this.getCenter(),
                            e = this.getZoom();
                        fe(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
                    },
                    _catchTransitionEnd: function (t) {
                        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
                    },
                    _nothingToAnimate: function () {
                        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
                    },
                    _tryAnimatedZoom: function (t, e, n) {
                        if (this._animatingZoom) return !0;
                        if (
                            ((n = n || {}),
                            !this._zoomAnimated ||
                                !1 === n.animate ||
                                this._nothingToAnimate() ||
                                Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                        )
                            return !1;
                        var i = this.getZoomScale(e),
                            o = this._getCenterOffset(t)._divideBy(1 - 1 / i);
                        return !(
                            (!0 !== n.animate && !this.getSize().contains(o)) ||
                            (A(function () {
                                this._moveStart(!0, !1)._animateZoom(t, e, !0);
                            }, this),
                            0)
                        );
                    },
                    _animateZoom: function (t, e, n, o) {
                        this._mapPane &&
                            (n &&
                                ((this._animatingZoom = !0),
                                (this._animateToCenter = t),
                                (this._animateToZoom = e),
                                se(this._mapPane, "leaflet-zoom-anim")),
                            this.fire("zoomanim", { center: t, zoom: e, noUpdate: o }),
                            setTimeout(i(this._onZoomTransitionEnd, this), 250));
                    },
                    _onZoomTransitionEnd: function () {
                        this._animatingZoom &&
                            (this._mapPane && le(this._mapPane, "leaflet-zoom-anim"),
                            (this._animatingZoom = !1),
                            this._move(this._animateToCenter, this._animateToZoom),
                            A(function () {
                                this._moveEnd(!0);
                            }, this));
                    },
                }),
                We = S.extend({
                    options: { position: "topright" },
                    initialize: function (t) {
                        d(this, t);
                    },
                    getPosition: function () {
                        return this.options.position;
                    },
                    setPosition: function (t) {
                        var e = this._map;
                        return e && e.removeControl(this), (this.options.position = t), e && e.addControl(this), this;
                    },
                    getContainer: function () {
                        return this._container;
                    },
                    addTo: function (t) {
                        this.remove(), (this._map = t);
                        var e = (this._container = this.onAdd(t)),
                            n = this.getPosition(),
                            i = t._controlCorners[n];
                        return (
                            se(e, "leaflet-control"),
                            -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e),
                            this._map.on("unload", this.remove, this),
                            this
                        );
                    },
                    remove: function () {
                        return this._map
                            ? (ne(this._container),
                              this.onRemove && this.onRemove(this._map),
                              this._map.off("unload", this.remove, this),
                              (this._map = null),
                              this)
                            : this;
                    },
                    _refocusOnMap: function (t) {
                        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
                    },
                }),
                qe = function (t) {
                    return new We(t);
                };
            Ue.include({
                addControl: function (t) {
                    return t.addTo(this), this;
                },
                removeControl: function (t) {
                    return t.remove(), this;
                },
                _initControlPos: function () {
                    var t = (this._controlCorners = {}),
                        e = "leaflet-",
                        n = (this._controlContainer = ee("div", e + "control-container", this._container));
                    function i(i, o) {
                        var r = e + i + " " + e + o;
                        t[i + o] = ee("div", r, n);
                    }
                    i("top", "left"), i("top", "right"), i("bottom", "left"), i("bottom", "right");
                },
                _clearControlPos: function () {
                    for (var t in this._controlCorners) ne(this._controlCorners[t]);
                    ne(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
                },
            });
            var Ye = We.extend({
                    options: {
                        collapsed: !0,
                        position: "topright",
                        autoZIndex: !0,
                        hideSingleBase: !1,
                        sortLayers: !1,
                        sortFunction: function (t, e, n, i) {
                            return n < i ? -1 : i < n ? 1 : 0;
                        },
                    },
                    initialize: function (t, e, n) {
                        for (var i in (d(this, n),
                        (this._layerControlInputs = []),
                        (this._layers = []),
                        (this._lastZIndex = 0),
                        (this._handlingClick = !1),
                        t))
                            this._addLayer(t[i], i);
                        for (i in e) this._addLayer(e[i], i, !0);
                    },
                    onAdd: function (t) {
                        this._initLayout(),
                            this._update(),
                            (this._map = t),
                            t.on("zoomend", this._checkDisabledLayers, this);
                        for (var e = 0; e < this._layers.length; e++)
                            this._layers[e].layer.on("add remove", this._onLayerChange, this);
                        return this._container;
                    },
                    addTo: function (t) {
                        return We.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
                    },
                    onRemove: function () {
                        this._map.off("zoomend", this._checkDisabledLayers, this);
                        for (var t = 0; t < this._layers.length; t++)
                            this._layers[t].layer.off("add remove", this._onLayerChange, this);
                    },
                    addBaseLayer: function (t, e) {
                        return this._addLayer(t, e), this._map ? this._update() : this;
                    },
                    addOverlay: function (t, e) {
                        return this._addLayer(t, e, !0), this._map ? this._update() : this;
                    },
                    removeLayer: function (t) {
                        t.off("add remove", this._onLayerChange, this);
                        var e = this._getLayer(r(t));
                        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
                    },
                    expand: function () {
                        se(this._container, "leaflet-control-layers-expanded"), (this._section.style.height = null);
                        var t = this._map.getSize().y - (this._container.offsetTop + 50);
                        return (
                            t < this._section.clientHeight
                                ? (se(this._section, "leaflet-control-layers-scrollbar"),
                                  (this._section.style.height = t + "px"))
                                : le(this._section, "leaflet-control-layers-scrollbar"),
                            this._checkDisabledLayers(),
                            this
                        );
                    },
                    collapse: function () {
                        return le(this._container, "leaflet-control-layers-expanded"), this;
                    },
                    _initLayout: function () {
                        var t = "leaflet-control-layers",
                            e = (this._container = ee("div", t)),
                            n = this.options.collapsed;
                        e.setAttribute("aria-haspopup", !0), Be(e), Oe(e);
                        var i = (this._section = ee("section", t + "-list"));
                        n &&
                            (this._map.on("click", this.collapse, this),
                            et || Pe(e, { mouseenter: this.expand, mouseleave: this.collapse }, this));
                        var o = (this._layersLink = ee("a", t + "-toggle", e));
                        (o.href = "#"),
                            (o.title = "Layers"),
                            xt
                                ? (Pe(o, "click", Ie), Pe(o, "click", this.expand, this))
                                : Pe(o, "focus", this.expand, this),
                            n || this.expand(),
                            (this._baseLayersList = ee("div", t + "-base", i)),
                            (this._separator = ee("div", t + "-separator", i)),
                            (this._overlaysList = ee("div", t + "-overlays", i)),
                            e.appendChild(i);
                    },
                    _getLayer: function (t) {
                        for (var e = 0; e < this._layers.length; e++)
                            if (this._layers[e] && r(this._layers[e].layer) === t) return this._layers[e];
                    },
                    _addLayer: function (t, e, n) {
                        this._map && t.on("add remove", this._onLayerChange, this),
                            this._layers.push({ layer: t, name: e, overlay: n }),
                            this.options.sortLayers &&
                                this._layers.sort(
                                    i(function (t, e) {
                                        return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
                                    }, this)
                                ),
                            this.options.autoZIndex &&
                                t.setZIndex &&
                                (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                            this._expandIfNotCollapsed();
                    },
                    _update: function () {
                        if (!this._container) return this;
                        ie(this._baseLayersList), ie(this._overlaysList), (this._layerControlInputs = []);
                        var t,
                            e,
                            n,
                            i,
                            o = 0;
                        for (n = 0; n < this._layers.length; n++)
                            (i = this._layers[n]),
                                this._addItem(i),
                                (e = e || i.overlay),
                                (t = t || !i.overlay),
                                (o += i.overlay ? 0 : 1);
                        return (
                            this.options.hideSingleBase &&
                                ((t = t && o > 1), (this._baseLayersList.style.display = t ? "" : "none")),
                            (this._separator.style.display = e && t ? "" : "none"),
                            this
                        );
                    },
                    _onLayerChange: function (t) {
                        this._handlingClick || this._update();
                        var e = this._getLayer(r(t.target)),
                            n = e.overlay
                                ? "add" === t.type
                                    ? "overlayadd"
                                    : "overlayremove"
                                : "add" === t.type
                                ? "baselayerchange"
                                : null;
                        n && this._map.fire(n, e);
                    },
                    _createRadioElement: function (t, e) {
                        var n =
                                '<input type="radio" class="leaflet-control-layers-selector" name="' +
                                t +
                                '"' +
                                (e ? ' checked="checked"' : "") +
                                "/>",
                            i = document.createElement("div");
                        return (i.innerHTML = n), i.firstChild;
                    },
                    _addItem: function (t) {
                        var e,
                            n = document.createElement("label"),
                            i = this._map.hasLayer(t.layer);
                        t.overlay
                            ? (((e = document.createElement("input")).type = "checkbox"),
                              (e.className = "leaflet-control-layers-selector"),
                              (e.defaultChecked = i))
                            : (e = this._createRadioElement("leaflet-base-layers_" + r(this), i)),
                            this._layerControlInputs.push(e),
                            (e.layerId = r(t.layer)),
                            Pe(e, "click", this._onInputClick, this);
                        var o = document.createElement("span");
                        o.innerHTML = " " + t.name;
                        var a = document.createElement("div");
                        return (
                            n.appendChild(a),
                            a.appendChild(e),
                            a.appendChild(o),
                            (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(n),
                            this._checkDisabledLayers(),
                            n
                        );
                    },
                    _onInputClick: function () {
                        var t,
                            e,
                            n = this._layerControlInputs,
                            i = [],
                            o = [];
                        this._handlingClick = !0;
                        for (var r = n.length - 1; r >= 0; r--)
                            (t = n[r]),
                                (e = this._getLayer(t.layerId).layer),
                                t.checked ? i.push(e) : t.checked || o.push(e);
                        for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
                        for (r = 0; r < i.length; r++) this._map.hasLayer(i[r]) || this._map.addLayer(i[r]);
                        (this._handlingClick = !1), this._refocusOnMap();
                    },
                    _checkDisabledLayers: function () {
                        for (
                            var t, e, n = this._layerControlInputs, i = this._map.getZoom(), o = n.length - 1;
                            o >= 0;
                            o--
                        )
                            (t = n[o]),
                                (e = this._getLayer(t.layerId).layer),
                                (t.disabled =
                                    (void 0 !== e.options.minZoom && i < e.options.minZoom) ||
                                    (void 0 !== e.options.maxZoom && i > e.options.maxZoom));
                    },
                    _expandIfNotCollapsed: function () {
                        return this._map && !this.options.collapsed && this.expand(), this;
                    },
                    _expand: function () {
                        return this.expand();
                    },
                    _collapse: function () {
                        return this.collapse();
                    },
                }),
                Qe = We.extend({
                    options: {
                        position: "topleft",
                        zoomInText: "+",
                        zoomInTitle: "Zoom in",
                        zoomOutText: "&#x2212;",
                        zoomOutTitle: "Zoom out",
                    },
                    onAdd: function (t) {
                        var e = "leaflet-control-zoom",
                            n = ee("div", e + " leaflet-bar"),
                            i = this.options;
                        return (
                            (this._zoomInButton = this._createButton(
                                i.zoomInText,
                                i.zoomInTitle,
                                e + "-in",
                                n,
                                this._zoomIn
                            )),
                            (this._zoomOutButton = this._createButton(
                                i.zoomOutText,
                                i.zoomOutTitle,
                                e + "-out",
                                n,
                                this._zoomOut
                            )),
                            this._updateDisabled(),
                            t.on("zoomend zoomlevelschange", this._updateDisabled, this),
                            n
                        );
                    },
                    onRemove: function (t) {
                        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
                    },
                    disable: function () {
                        return (this._disabled = !0), this._updateDisabled(), this;
                    },
                    enable: function () {
                        return (this._disabled = !1), this._updateDisabled(), this;
                    },
                    _zoomIn: function (t) {
                        !this._disabled &&
                            this._map._zoom < this._map.getMaxZoom() &&
                            this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
                    },
                    _zoomOut: function (t) {
                        !this._disabled &&
                            this._map._zoom > this._map.getMinZoom() &&
                            this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
                    },
                    _createButton: function (t, e, n, i, o) {
                        var r = ee("a", n, i);
                        return (
                            (r.innerHTML = t),
                            (r.href = "#"),
                            (r.title = e),
                            r.setAttribute("role", "button"),
                            r.setAttribute("aria-label", e),
                            Be(r),
                            Pe(r, "click", Ie),
                            Pe(r, "click", o, this),
                            Pe(r, "click", this._refocusOnMap, this),
                            r
                        );
                    },
                    _updateDisabled: function () {
                        var t = this._map,
                            e = "leaflet-disabled";
                        le(this._zoomInButton, e),
                            le(this._zoomOutButton, e),
                            (this._disabled || t._zoom === t.getMinZoom()) && se(this._zoomOutButton, e),
                            (this._disabled || t._zoom === t.getMaxZoom()) && se(this._zoomInButton, e);
                    },
                });
            Ue.mergeOptions({ zoomControl: !0 }),
                Ue.addInitHook(function () {
                    this.options.zoomControl && ((this.zoomControl = new Qe()), this.addControl(this.zoomControl));
                });
            var Je = We.extend({
                    options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 },
                    onAdd: function (t) {
                        var e = ee("div", "leaflet-control-scale"),
                            n = this.options;
                        return (
                            this._addScales(n, "leaflet-control-scale-line", e),
                            t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
                            t.whenReady(this._update, this),
                            e
                        );
                    },
                    onRemove: function (t) {
                        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
                    },
                    _addScales: function (t, e, n) {
                        t.metric && (this._mScale = ee("div", e, n)), t.imperial && (this._iScale = ee("div", e, n));
                    },
                    _update: function () {
                        var t = this._map,
                            e = t.getSize().y / 2,
                            n = t.distance(
                                t.containerPointToLatLng([0, e]),
                                t.containerPointToLatLng([this.options.maxWidth, e])
                            );
                        this._updateScales(n);
                    },
                    _updateScales: function (t) {
                        this.options.metric && t && this._updateMetric(t),
                            this.options.imperial && t && this._updateImperial(t);
                    },
                    _updateMetric: function (t) {
                        var e = this._getRoundNum(t),
                            n = e < 1e3 ? e + " m" : e / 1e3 + " km";
                        this._updateScale(this._mScale, n, e / t);
                    },
                    _updateImperial: function (t) {
                        var e,
                            n,
                            i,
                            o = 3.2808399 * t;
                        o > 5280
                            ? ((e = o / 5280),
                              (n = this._getRoundNum(e)),
                              this._updateScale(this._iScale, n + " mi", n / e))
                            : ((i = this._getRoundNum(o)), this._updateScale(this._iScale, i + " ft", i / o));
                    },
                    _updateScale: function (t, e, n) {
                        (t.style.width = Math.round(this.options.maxWidth * n) + "px"), (t.innerHTML = e);
                    },
                    _getRoundNum: function (t) {
                        var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                            n = t / e;
                        return e * (n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1);
                    },
                }),
                Ke = We.extend({
                    options: {
                        position: "bottomright",
                        prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',
                    },
                    initialize: function (t) {
                        d(this, t), (this._attributions = {});
                    },
                    onAdd: function (t) {
                        for (var e in ((t.attributionControl = this),
                        (this._container = ee("div", "leaflet-control-attribution")),
                        Be(this._container),
                        t._layers))
                            t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                        return this._update(), this._container;
                    },
                    setPrefix: function (t) {
                        return (this.options.prefix = t), this._update(), this;
                    },
                    addAttribution: function (t) {
                        return t
                            ? (this._attributions[t] || (this._attributions[t] = 0),
                              this._attributions[t]++,
                              this._update(),
                              this)
                            : this;
                    },
                    removeAttribution: function (t) {
                        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
                    },
                    _update: function () {
                        if (this._map) {
                            var t = [];
                            for (var e in this._attributions) this._attributions[e] && t.push(e);
                            var n = [];
                            this.options.prefix && n.push(this.options.prefix),
                                t.length && n.push(t.join(", ")),
                                (this._container.innerHTML = n.join(" | "));
                        }
                    },
                });
            Ue.mergeOptions({ attributionControl: !0 }),
                Ue.addInitHook(function () {
                    this.options.attributionControl && new Ke().addTo(this);
                }),
                (We.Layers = Ye),
                (We.Zoom = Qe),
                (We.Scale = Je),
                (We.Attribution = Ke),
                (qe.layers = function (t, e, n) {
                    return new Ye(t, e, n);
                }),
                (qe.zoom = function (t) {
                    return new Qe(t);
                }),
                (qe.scale = function (t) {
                    return new Je(t);
                }),
                (qe.attribution = function (t) {
                    return new Ke(t);
                });
            var Xe = S.extend({
                initialize: function (t) {
                    this._map = t;
                },
                enable: function () {
                    return this._enabled || ((this._enabled = !0), this.addHooks()), this;
                },
                disable: function () {
                    return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
                },
                enabled: function () {
                    return !!this._enabled;
                },
            });
            Xe.addTo = function (t, e) {
                return t.addHandler(e, this), this;
            };
            var $e,
                tn = { Events: M },
                en = xt ? "touchstart mousedown" : "mousedown",
                nn = {
                    mousedown: "mouseup",
                    touchstart: "touchend",
                    pointerdown: "touchend",
                    MSPointerDown: "touchend",
                },
                on = {
                    mousedown: "mousemove",
                    touchstart: "touchmove",
                    pointerdown: "touchmove",
                    MSPointerDown: "touchmove",
                },
                rn = k.extend({
                    options: { clickTolerance: 3 },
                    initialize: function (t, e, n, i) {
                        d(this, i), (this._element = t), (this._dragStartTarget = e || t), (this._preventOutline = n);
                    },
                    enable: function () {
                        this._enabled || (Pe(this._dragStartTarget, en, this._onDown, this), (this._enabled = !0));
                    },
                    disable: function () {
                        this._enabled &&
                            (rn._dragging === this && this.finishDrag(),
                            Te(this._dragStartTarget, en, this._onDown, this),
                            (this._enabled = !1),
                            (this._moved = !1));
                    },
                    _onDown: function (t) {
                        if (
                            !t._simulated &&
                            this._enabled &&
                            ((this._moved = !1),
                            !ae(this._element, "leaflet-zoom-anim") &&
                                !(
                                    rn._dragging ||
                                    t.shiftKey ||
                                    (1 !== t.which && 1 !== t.button && !t.touches) ||
                                    ((rn._dragging = this),
                                    this._preventOutline && ye(this._element),
                                    ge(),
                                    Vt(),
                                    this._moving)
                                ))
                        ) {
                            this.fire("down");
                            var e = t.touches ? t.touches[0] : t,
                                n = xe(this._element);
                            (this._startPoint = new E(e.clientX, e.clientY)),
                                (this._parentScale = we(n)),
                                Pe(document, on[t.type], this._onMove, this),
                                Pe(document, nn[t.type], this._onUp, this);
                        }
                    },
                    _onMove: function (t) {
                        if (!t._simulated && this._enabled)
                            if (t.touches && t.touches.length > 1) this._moved = !0;
                            else {
                                var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                    n = new E(e.clientX, e.clientY)._subtract(this._startPoint);
                                (n.x || n.y) &&
                                    (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance ||
                                        ((n.x /= this._parentScale.x),
                                        (n.y /= this._parentScale.y),
                                        ze(t),
                                        this._moved ||
                                            (this.fire("dragstart"),
                                            (this._moved = !0),
                                            (this._startPos = _e(this._element).subtract(n)),
                                            se(document.body, "leaflet-dragging"),
                                            (this._lastTarget = t.target || t.srcElement),
                                            window.SVGElementInstance &&
                                                this._lastTarget instanceof window.SVGElementInstance &&
                                                (this._lastTarget = this._lastTarget.correspondingUseElement),
                                            se(this._lastTarget, "leaflet-drag-target")),
                                        (this._newPos = this._startPos.add(n)),
                                        (this._moving = !0),
                                        T(this._animRequest),
                                        (this._lastEvent = t),
                                        (this._animRequest = A(this._updatePosition, this, !0))));
                            }
                    },
                    _updatePosition: function () {
                        var t = { originalEvent: this._lastEvent };
                        this.fire("predrag", t), pe(this._element, this._newPos), this.fire("drag", t);
                    },
                    _onUp: function (t) {
                        !t._simulated && this._enabled && this.finishDrag();
                    },
                    finishDrag: function () {
                        for (var t in (le(document.body, "leaflet-dragging"),
                        this._lastTarget && (le(this._lastTarget, "leaflet-drag-target"), (this._lastTarget = null)),
                        on))
                            Te(document, on[t], this._onMove, this), Te(document, nn[t], this._onUp, this);
                        ve(),
                            Ht(),
                            this._moved &&
                                this._moving &&
                                (T(this._animRequest),
                                this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })),
                            (this._moving = !1),
                            (rn._dragging = !1);
                    },
                });
            function an(t, e) {
                if (!e || !t.length) return t.slice();
                var n = e * e;
                return (t = (function (t, e) {
                    var n = t.length,
                        i = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
                    (i[0] = i[n - 1] = 1),
                        (function t(e, n, i, o, r) {
                            var a,
                                s,
                                l,
                                h = 0;
                            for (s = o + 1; s <= r - 1; s++) (l = cn(e[s], e[o], e[r], !0)) > h && ((a = s), (h = l));
                            h > i && ((n[a] = 1), t(e, n, i, o, a), t(e, n, i, a, r));
                        })(t, i, e, 0, n - 1);
                    var o,
                        r = [];
                    for (o = 0; o < n; o++) i[o] && r.push(t[o]);
                    return r;
                })(
                    (t = (function (t, e) {
                        for (var n = [t[0]], i = 1, o = 0, r = t.length; i < r; i++)
                            (a = t[i]),
                                (s = t[o]),
                                (l = void 0),
                                (h = void 0),
                                (l = s.x - a.x),
                                (h = s.y - a.y),
                                l * l + h * h > e && (n.push(t[i]), (o = i));
                        var a, s, l, h;
                        return o < r - 1 && n.push(t[r - 1]), n;
                    })(t, n)),
                    n
                ));
            }
            function sn(t, e, n) {
                return Math.sqrt(cn(t, e, n, !0));
            }
            function ln(t, e, n, i, o) {
                var r,
                    a,
                    s,
                    l = i ? $e : un(t, n),
                    h = un(e, n);
                for ($e = h; ; ) {
                    if (!(l | h)) return [t, e];
                    if (l & h) return !1;
                    (s = un((a = hn(t, e, (r = l || h), n, o)), n)), r === l ? ((t = a), (l = s)) : ((e = a), (h = s));
                }
            }
            function hn(t, e, n, i, o) {
                var r,
                    a,
                    s = e.x - t.x,
                    l = e.y - t.y,
                    h = i.min,
                    u = i.max;
                return (
                    8 & n
                        ? ((r = t.x + (s * (u.y - t.y)) / l), (a = u.y))
                        : 4 & n
                        ? ((r = t.x + (s * (h.y - t.y)) / l), (a = h.y))
                        : 2 & n
                        ? ((r = u.x), (a = t.y + (l * (u.x - t.x)) / s))
                        : 1 & n && ((r = h.x), (a = t.y + (l * (h.x - t.x)) / s)),
                    new E(r, a, o)
                );
            }
            function un(t, e) {
                var n = 0;
                return (
                    t.x < e.min.x ? (n |= 1) : t.x > e.max.x && (n |= 2),
                    t.y < e.min.y ? (n |= 4) : t.y > e.max.y && (n |= 8),
                    n
                );
            }
            function cn(t, e, n, i) {
                var o,
                    r = e.x,
                    a = e.y,
                    s = n.x - r,
                    l = n.y - a,
                    h = s * s + l * l;
                return (
                    h > 0 &&
                        ((o = ((t.x - r) * s + (t.y - a) * l) / h) > 1
                            ? ((r = n.x), (a = n.y))
                            : o > 0 && ((r += s * o), (a += l * o))),
                    (s = t.x - r),
                    (l = t.y - a),
                    i ? s * s + l * l : new E(r, a)
                );
            }
            function dn(t) {
                return !m(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
            }
            function fn(t) {
                return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), dn(t);
            }
            var pn = {
                simplify: an,
                pointToSegmentDistance: sn,
                closestPointOnSegment: function (t, e, n) {
                    return cn(t, e, n);
                },
                clipSegment: ln,
                _getEdgeIntersection: hn,
                _getBitCode: un,
                _sqClosestPointOnSegment: cn,
                isFlat: dn,
                _flat: fn,
            };
            function _n(t, e, n) {
                var i,
                    o,
                    r,
                    a,
                    s,
                    l,
                    h,
                    u,
                    c,
                    d = [1, 4, 2, 8];
                for (o = 0, h = t.length; o < h; o++) t[o]._code = un(t[o], e);
                for (a = 0; a < 4; a++) {
                    for (u = d[a], i = [], o = 0, r = (h = t.length) - 1; o < h; r = o++)
                        (s = t[o]),
                            (l = t[r]),
                            s._code & u
                                ? l._code & u || (((c = hn(l, s, u, e, n))._code = un(c, e)), i.push(c))
                                : (l._code & u && (((c = hn(l, s, u, e, n))._code = un(c, e)), i.push(c)), i.push(s));
                    t = i;
                }
                return t;
            }
            var mn = { clipPolygon: _n },
                gn = {
                    project: function (t) {
                        return new E(t.lng, t.lat);
                    },
                    unproject: function (t) {
                        return new j(t.y, t.x);
                    },
                    bounds: new z([-180, -90], [180, 90]),
                },
                vn = {
                    R: 6378137,
                    R_MINOR: 6356752.314245179,
                    bounds: new z([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                    project: function (t) {
                        var e = Math.PI / 180,
                            n = this.R,
                            i = t.lat * e,
                            o = this.R_MINOR / n,
                            r = Math.sqrt(1 - o * o),
                            a = r * Math.sin(i),
                            s = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - a) / (1 + a), r / 2);
                        return (i = -n * Math.log(Math.max(s, 1e-10))), new E(t.lng * e * n, i);
                    },
                    unproject: function (t) {
                        for (
                            var e,
                                n = 180 / Math.PI,
                                i = this.R,
                                o = this.R_MINOR / i,
                                r = Math.sqrt(1 - o * o),
                                a = Math.exp(-t.y / i),
                                s = Math.PI / 2 - 2 * Math.atan(a),
                                l = 0,
                                h = 0.1;
                            l < 15 && Math.abs(h) > 1e-7;
                            l++
                        )
                            (e = r * Math.sin(s)),
                                (e = Math.pow((1 - e) / (1 + e), r / 2)),
                                (s += h = Math.PI / 2 - 2 * Math.atan(a * e) - s);
                        return new j(s * n, (t.x * n) / i);
                    },
                },
                yn = { LonLat: gn, Mercator: vn, SphericalMercator: H },
                bn = e({}, V, {
                    code: "EPSG:3395",
                    projection: vn,
                    transformation: (function () {
                        var t = 0.5 / (Math.PI * vn.R);
                        return U(t, 0.5, -t, 0.5);
                    })(),
                }),
                xn = e({}, V, { code: "EPSG:4326", projection: gn, transformation: U(1 / 180, 1, -1 / 180, 0.5) }),
                wn = e({}, N, {
                    projection: gn,
                    transformation: U(1, 0, -1, 0),
                    scale: function (t) {
                        return Math.pow(2, t);
                    },
                    zoom: function (t) {
                        return Math.log(t) / Math.LN2;
                    },
                    distance: function (t, e) {
                        var n = e.lng - t.lng,
                            i = e.lat - t.lat;
                        return Math.sqrt(n * n + i * i);
                    },
                    infinite: !0,
                });
            (N.Earth = V), (N.EPSG3395 = bn), (N.EPSG3857 = W), (N.EPSG900913 = q), (N.EPSG4326 = xn), (N.Simple = wn);
            var Ln = k.extend({
                options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 },
                addTo: function (t) {
                    return t.addLayer(this), this;
                },
                remove: function () {
                    return this.removeFrom(this._map || this._mapToAdd);
                },
                removeFrom: function (t) {
                    return t && t.removeLayer(this), this;
                },
                getPane: function (t) {
                    return this._map.getPane(t ? this.options[t] || t : this.options.pane);
                },
                addInteractiveTarget: function (t) {
                    return (this._map._targets[r(t)] = this), this;
                },
                removeInteractiveTarget: function (t) {
                    return delete this._map._targets[r(t)], this;
                },
                getAttribution: function () {
                    return this.options.attribution;
                },
                _layerAdd: function (t) {
                    var e = t.target;
                    if (e.hasLayer(this)) {
                        if (((this._map = e), (this._zoomAnimated = e._zoomAnimated), this.getEvents)) {
                            var n = this.getEvents();
                            e.on(n, this),
                                this.once(
                                    "remove",
                                    function () {
                                        e.off(n, this);
                                    },
                                    this
                                );
                        }
                        this.onAdd(e),
                            this.getAttribution &&
                                e.attributionControl &&
                                e.attributionControl.addAttribution(this.getAttribution()),
                            this.fire("add"),
                            e.fire("layeradd", { layer: this });
                    }
                },
            });
            Ue.include({
                addLayer: function (t) {
                    if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                    var e = r(t);
                    return (
                        this._layers[e] ||
                            ((this._layers[e] = t),
                            (t._mapToAdd = this),
                            t.beforeAdd && t.beforeAdd(this),
                            this.whenReady(t._layerAdd, t)),
                        this
                    );
                },
                removeLayer: function (t) {
                    var e = r(t);
                    return this._layers[e]
                        ? (this._loaded && t.onRemove(this),
                          t.getAttribution &&
                              this.attributionControl &&
                              this.attributionControl.removeAttribution(t.getAttribution()),
                          delete this._layers[e],
                          this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")),
                          (t._map = t._mapToAdd = null),
                          this)
                        : this;
                },
                hasLayer: function (t) {
                    return !!t && r(t) in this._layers;
                },
                eachLayer: function (t, e) {
                    for (var n in this._layers) t.call(e, this._layers[n]);
                    return this;
                },
                _addLayers: function (t) {
                    for (var e = 0, n = (t = t ? (m(t) ? t : [t]) : []).length; e < n; e++) this.addLayer(t[e]);
                },
                _addZoomLimit: function (t) {
                    (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
                        ((this._zoomBoundLayers[r(t)] = t), this._updateZoomLevels());
                },
                _removeZoomLimit: function (t) {
                    var e = r(t);
                    this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
                },
                _updateZoomLevels: function () {
                    var t = 1 / 0,
                        e = -1 / 0,
                        n = this._getZoomSpan();
                    for (var i in this._zoomBoundLayers) {
                        var o = this._zoomBoundLayers[i].options;
                        (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
                            (e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom));
                    }
                    (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
                        (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
                        n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                        void 0 === this.options.maxZoom &&
                            this._layersMaxZoom &&
                            this.getZoom() > this._layersMaxZoom &&
                            this.setZoom(this._layersMaxZoom),
                        void 0 === this.options.minZoom &&
                            this._layersMinZoom &&
                            this.getZoom() < this._layersMinZoom &&
                            this.setZoom(this._layersMinZoom);
                },
            });
            var Pn = Ln.extend({
                    initialize: function (t, e) {
                        var n, i;
                        if ((d(this, e), (this._layers = {}), t))
                            for (n = 0, i = t.length; n < i; n++) this.addLayer(t[n]);
                    },
                    addLayer: function (t) {
                        var e = this.getLayerId(t);
                        return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
                    },
                    removeLayer: function (t) {
                        var e = t in this._layers ? t : this.getLayerId(t);
                        return (
                            this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
                            delete this._layers[e],
                            this
                        );
                    },
                    hasLayer: function (t) {
                        return !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
                    },
                    clearLayers: function () {
                        return this.eachLayer(this.removeLayer, this);
                    },
                    invoke: function (t) {
                        var e,
                            n,
                            i = Array.prototype.slice.call(arguments, 1);
                        for (e in this._layers) (n = this._layers[e])[t] && n[t].apply(n, i);
                        return this;
                    },
                    onAdd: function (t) {
                        this.eachLayer(t.addLayer, t);
                    },
                    onRemove: function (t) {
                        this.eachLayer(t.removeLayer, t);
                    },
                    eachLayer: function (t, e) {
                        for (var n in this._layers) t.call(e, this._layers[n]);
                        return this;
                    },
                    getLayer: function (t) {
                        return this._layers[t];
                    },
                    getLayers: function () {
                        var t = [];
                        return this.eachLayer(t.push, t), t;
                    },
                    setZIndex: function (t) {
                        return this.invoke("setZIndex", t);
                    },
                    getLayerId: function (t) {
                        return r(t);
                    },
                }),
                An = Pn.extend({
                    addLayer: function (t) {
                        return this.hasLayer(t)
                            ? this
                            : (t.addEventParent(this),
                              Pn.prototype.addLayer.call(this, t),
                              this.fire("layeradd", { layer: t }));
                    },
                    removeLayer: function (t) {
                        return this.hasLayer(t)
                            ? (t in this._layers && (t = this._layers[t]),
                              t.removeEventParent(this),
                              Pn.prototype.removeLayer.call(this, t),
                              this.fire("layerremove", { layer: t }))
                            : this;
                    },
                    setStyle: function (t) {
                        return this.invoke("setStyle", t);
                    },
                    bringToFront: function () {
                        return this.invoke("bringToFront");
                    },
                    bringToBack: function () {
                        return this.invoke("bringToBack");
                    },
                    getBounds: function () {
                        var t = new D();
                        for (var e in this._layers) {
                            var n = this._layers[e];
                            t.extend(n.getBounds ? n.getBounds() : n.getLatLng());
                        }
                        return t;
                    },
                }),
                Tn = S.extend({
                    options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
                    initialize: function (t) {
                        d(this, t);
                    },
                    createIcon: function (t) {
                        return this._createIcon("icon", t);
                    },
                    createShadow: function (t) {
                        return this._createIcon("shadow", t);
                    },
                    _createIcon: function (t, e) {
                        var n = this._getIconUrl(t);
                        if (!n) {
                            if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                            return null;
                        }
                        var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);
                        return this._setIconStyles(i, t), i;
                    },
                    _setIconStyles: function (t, e) {
                        var n = this.options,
                            i = n[e + "Size"];
                        "number" == typeof i && (i = [i, i]);
                        var o = B(i),
                            r = B(("shadow" === e && n.shadowAnchor) || n.iconAnchor || (o && o.divideBy(2, !0)));
                        (t.className = "leaflet-marker-" + e + " " + (n.className || "")),
                            r && ((t.style.marginLeft = -r.x + "px"), (t.style.marginTop = -r.y + "px")),
                            o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
                    },
                    _createImg: function (t, e) {
                        return ((e = e || document.createElement("img")).src = t), e;
                    },
                    _getIconUrl: function (t) {
                        return (Pt && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
                    },
                }),
                Cn = Tn.extend({
                    options: {
                        iconUrl: "marker-icon.png",
                        iconRetinaUrl: "marker-icon-2x.png",
                        shadowUrl: "marker-shadow.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        tooltipAnchor: [16, -28],
                        shadowSize: [41, 41],
                    },
                    _getIconUrl: function (t) {
                        return (
                            Cn.imagePath || (Cn.imagePath = this._detectIconPath()),
                            (this.options.imagePath || Cn.imagePath) + Tn.prototype._getIconUrl.call(this, t)
                        );
                    },
                    _detectIconPath: function () {
                        var t = ee("div", "leaflet-default-icon-path", document.body),
                            e = te(t, "background-image") || te(t, "backgroundImage");
                        return (
                            document.body.removeChild(t),
                            (e =
                                null === e || 0 !== e.indexOf("url")
                                    ? ""
                                    : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, ""))
                        );
                    },
                }),
                Sn = Xe.extend({
                    initialize: function (t) {
                        this._marker = t;
                    },
                    addHooks: function () {
                        var t = this._marker._icon;
                        this._draggable || (this._draggable = new rn(t, t, !0)),
                            this._draggable
                                .on(
                                    {
                                        dragstart: this._onDragStart,
                                        predrag: this._onPreDrag,
                                        drag: this._onDrag,
                                        dragend: this._onDragEnd,
                                    },
                                    this
                                )
                                .enable(),
                            se(t, "leaflet-marker-draggable");
                    },
                    removeHooks: function () {
                        this._draggable
                            .off(
                                {
                                    dragstart: this._onDragStart,
                                    predrag: this._onPreDrag,
                                    drag: this._onDrag,
                                    dragend: this._onDragEnd,
                                },
                                this
                            )
                            .disable(),
                            this._marker._icon && le(this._marker._icon, "leaflet-marker-draggable");
                    },
                    moved: function () {
                        return this._draggable && this._draggable._moved;
                    },
                    _adjustPan: function (t) {
                        var e = this._marker,
                            n = e._map,
                            i = this._marker.options.autoPanSpeed,
                            o = this._marker.options.autoPanPadding,
                            r = _e(e._icon),
                            a = n.getPixelBounds(),
                            s = n.getPixelOrigin(),
                            l = I(a.min._subtract(s).add(o), a.max._subtract(s).subtract(o));
                        if (!l.contains(r)) {
                            var h = B(
                                (Math.max(l.max.x, r.x) - l.max.x) / (a.max.x - l.max.x) -
                                    (Math.min(l.min.x, r.x) - l.min.x) / (a.min.x - l.min.x),
                                (Math.max(l.max.y, r.y) - l.max.y) / (a.max.y - l.max.y) -
                                    (Math.min(l.min.y, r.y) - l.min.y) / (a.min.y - l.min.y)
                            ).multiplyBy(i);
                            n.panBy(h, { animate: !1 }),
                                this._draggable._newPos._add(h),
                                this._draggable._startPos._add(h),
                                pe(e._icon, this._draggable._newPos),
                                this._onDrag(t),
                                (this._panRequest = A(this._adjustPan.bind(this, t)));
                        }
                    },
                    _onDragStart: function () {
                        (this._oldLatLng = this._marker.getLatLng()),
                            this._marker.closePopup && this._marker.closePopup(),
                            this._marker.fire("movestart").fire("dragstart");
                    },
                    _onPreDrag: function (t) {
                        this._marker.options.autoPan &&
                            (T(this._panRequest), (this._panRequest = A(this._adjustPan.bind(this, t))));
                    },
                    _onDrag: function (t) {
                        var e = this._marker,
                            n = e._shadow,
                            i = _e(e._icon),
                            o = e._map.layerPointToLatLng(i);
                        n && pe(n, i),
                            (e._latlng = o),
                            (t.latlng = o),
                            (t.oldLatLng = this._oldLatLng),
                            e.fire("move", t).fire("drag", t);
                    },
                    _onDragEnd: function (t) {
                        T(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
                    },
                }),
                Mn = Ln.extend({
                    options: {
                        icon: new Cn(),
                        interactive: !0,
                        keyboard: !0,
                        title: "",
                        alt: "",
                        zIndexOffset: 0,
                        opacity: 1,
                        riseOnHover: !1,
                        riseOffset: 250,
                        pane: "markerPane",
                        shadowPane: "shadowPane",
                        bubblingMouseEvents: !1,
                        draggable: !1,
                        autoPan: !1,
                        autoPanPadding: [50, 50],
                        autoPanSpeed: 10,
                    },
                    initialize: function (t, e) {
                        d(this, e), (this._latlng = Z(t));
                    },
                    onAdd: function (t) {
                        (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation),
                            this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
                            this._initIcon(),
                            this.update();
                    },
                    onRemove: function (t) {
                        this.dragging &&
                            this.dragging.enabled() &&
                            ((this.options.draggable = !0), this.dragging.removeHooks()),
                            delete this.dragging,
                            this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
                            this._removeIcon(),
                            this._removeShadow();
                    },
                    getEvents: function () {
                        return { zoom: this.update, viewreset: this.update };
                    },
                    getLatLng: function () {
                        return this._latlng;
                    },
                    setLatLng: function (t) {
                        var e = this._latlng;
                        return (
                            (this._latlng = Z(t)),
                            this.update(),
                            this.fire("move", { oldLatLng: e, latlng: this._latlng })
                        );
                    },
                    setZIndexOffset: function (t) {
                        return (this.options.zIndexOffset = t), this.update();
                    },
                    getIcon: function () {
                        return this.options.icon;
                    },
                    setIcon: function (t) {
                        return (
                            (this.options.icon = t),
                            this._map && (this._initIcon(), this.update()),
                            this._popup && this.bindPopup(this._popup, this._popup.options),
                            this
                        );
                    },
                    getElement: function () {
                        return this._icon;
                    },
                    update: function () {
                        if (this._icon && this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng).round();
                            this._setPos(t);
                        }
                        return this;
                    },
                    _initIcon: function () {
                        var t = this.options,
                            e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                            n = t.icon.createIcon(this._icon),
                            i = !1;
                        n !== this._icon &&
                            (this._icon && this._removeIcon(),
                            (i = !0),
                            t.title && (n.title = t.title),
                            "IMG" === n.tagName && (n.alt = t.alt || "")),
                            se(n, e),
                            t.keyboard && (n.tabIndex = "0"),
                            (this._icon = n),
                            t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex });
                        var o = t.icon.createShadow(this._shadow),
                            r = !1;
                        o !== this._shadow && (this._removeShadow(), (r = !0)),
                            o && (se(o, e), (o.alt = "")),
                            (this._shadow = o),
                            t.opacity < 1 && this._updateOpacity(),
                            i && this.getPane().appendChild(this._icon),
                            this._initInteraction(),
                            o && r && this.getPane(t.shadowPane).appendChild(this._shadow);
                    },
                    _removeIcon: function () {
                        this.options.riseOnHover &&
                            this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                            ne(this._icon),
                            this.removeInteractiveTarget(this._icon),
                            (this._icon = null);
                    },
                    _removeShadow: function () {
                        this._shadow && ne(this._shadow), (this._shadow = null);
                    },
                    _setPos: function (t) {
                        this._icon && pe(this._icon, t),
                            this._shadow && pe(this._shadow, t),
                            (this._zIndex = t.y + this.options.zIndexOffset),
                            this._resetZIndex();
                    },
                    _updateZIndex: function (t) {
                        this._icon && (this._icon.style.zIndex = this._zIndex + t);
                    },
                    _animateZoom: function (t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                        this._setPos(e);
                    },
                    _initInteraction: function () {
                        if (
                            this.options.interactive &&
                            (se(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Sn)
                        ) {
                            var t = this.options.draggable;
                            this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()),
                                (this.dragging = new Sn(this)),
                                t && this.dragging.enable();
                        }
                    },
                    setOpacity: function (t) {
                        return (this.options.opacity = t), this._map && this._updateOpacity(), this;
                    },
                    _updateOpacity: function () {
                        var t = this.options.opacity;
                        this._icon && ce(this._icon, t), this._shadow && ce(this._shadow, t);
                    },
                    _bringToFront: function () {
                        this._updateZIndex(this.options.riseOffset);
                    },
                    _resetZIndex: function () {
                        this._updateZIndex(0);
                    },
                    _getPopupAnchor: function () {
                        return this.options.icon.options.popupAnchor;
                    },
                    _getTooltipAnchor: function () {
                        return this.options.icon.options.tooltipAnchor;
                    },
                }),
                kn = Ln.extend({
                    options: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 3,
                        opacity: 1,
                        lineCap: "round",
                        lineJoin: "round",
                        dashArray: null,
                        dashOffset: null,
                        fill: !1,
                        fillColor: null,
                        fillOpacity: 0.2,
                        fillRule: "evenodd",
                        interactive: !0,
                        bubblingMouseEvents: !0,
                    },
                    beforeAdd: function (t) {
                        this._renderer = t.getRenderer(this);
                    },
                    onAdd: function () {
                        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
                    },
                    onRemove: function () {
                        this._renderer._removePath(this);
                    },
                    redraw: function () {
                        return this._map && this._renderer._updatePath(this), this;
                    },
                    setStyle: function (t) {
                        return (
                            d(this, t),
                            this._renderer &&
                                (this._renderer._updateStyle(this),
                                this.options.stroke &&
                                    t &&
                                    Object.prototype.hasOwnProperty.call(t, "weight") &&
                                    this._updateBounds()),
                            this
                        );
                    },
                    bringToFront: function () {
                        return this._renderer && this._renderer._bringToFront(this), this;
                    },
                    bringToBack: function () {
                        return this._renderer && this._renderer._bringToBack(this), this;
                    },
                    getElement: function () {
                        return this._path;
                    },
                    _reset: function () {
                        this._project(), this._update();
                    },
                    _clickTolerance: function () {
                        return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
                    },
                }),
                En = kn.extend({
                    options: { fill: !0, radius: 10 },
                    initialize: function (t, e) {
                        d(this, e), (this._latlng = Z(t)), (this._radius = this.options.radius);
                    },
                    setLatLng: function (t) {
                        var e = this._latlng;
                        return (
                            (this._latlng = Z(t)),
                            this.redraw(),
                            this.fire("move", { oldLatLng: e, latlng: this._latlng })
                        );
                    },
                    getLatLng: function () {
                        return this._latlng;
                    },
                    setRadius: function (t) {
                        return (this.options.radius = this._radius = t), this.redraw();
                    },
                    getRadius: function () {
                        return this._radius;
                    },
                    setStyle: function (t) {
                        var e = (t && t.radius) || this._radius;
                        return kn.prototype.setStyle.call(this, t), this.setRadius(e), this;
                    },
                    _project: function () {
                        (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
                    },
                    _updateBounds: function () {
                        var t = this._radius,
                            e = this._radiusY || t,
                            n = this._clickTolerance(),
                            i = [t + n, e + n];
                        this._pxBounds = new z(this._point.subtract(i), this._point.add(i));
                    },
                    _update: function () {
                        this._map && this._updatePath();
                    },
                    _updatePath: function () {
                        this._renderer._updateCircle(this);
                    },
                    _empty: function () {
                        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
                    },
                    _containsPoint: function (t) {
                        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
                    },
                }),
                On = En.extend({
                    initialize: function (t, n, i) {
                        if (
                            ("number" == typeof n && (n = e({}, i, { radius: n })),
                            d(this, n),
                            (this._latlng = Z(t)),
                            isNaN(this.options.radius))
                        )
                            throw new Error("Circle radius cannot be NaN");
                        this._mRadius = this.options.radius;
                    },
                    setRadius: function (t) {
                        return (this._mRadius = t), this.redraw();
                    },
                    getRadius: function () {
                        return this._mRadius;
                    },
                    getBounds: function () {
                        var t = [this._radius, this._radiusY || this._radius];
                        return new D(
                            this._map.layerPointToLatLng(this._point.subtract(t)),
                            this._map.layerPointToLatLng(this._point.add(t))
                        );
                    },
                    setStyle: kn.prototype.setStyle,
                    _project: function () {
                        var t = this._latlng.lng,
                            e = this._latlng.lat,
                            n = this._map,
                            i = n.options.crs;
                        if (i.distance === V.distance) {
                            var o = Math.PI / 180,
                                r = this._mRadius / V.R / o,
                                a = n.project([e + r, t]),
                                s = n.project([e - r, t]),
                                l = a.add(s).divideBy(2),
                                h = n.unproject(l).lat,
                                u =
                                    Math.acos(
                                        (Math.cos(r * o) - Math.sin(e * o) * Math.sin(h * o)) /
                                            (Math.cos(e * o) * Math.cos(h * o))
                                    ) / o;
                            (isNaN(u) || 0 === u) && (u = r / Math.cos((Math.PI / 180) * e)),
                                (this._point = l.subtract(n.getPixelOrigin())),
                                (this._radius = isNaN(u) ? 0 : l.x - n.project([h, t - u]).x),
                                (this._radiusY = l.y - a.y);
                        } else {
                            var c = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
                            (this._point = n.latLngToLayerPoint(this._latlng)),
                                (this._radius = this._point.x - n.latLngToLayerPoint(c).x);
                        }
                        this._updateBounds();
                    },
                }),
                Bn = kn.extend({
                    options: { smoothFactor: 1, noClip: !1 },
                    initialize: function (t, e) {
                        d(this, e), this._setLatLngs(t);
                    },
                    getLatLngs: function () {
                        return this._latlngs;
                    },
                    setLatLngs: function (t) {
                        return this._setLatLngs(t), this.redraw();
                    },
                    isEmpty: function () {
                        return !this._latlngs.length;
                    },
                    closestLayerPoint: function (t) {
                        for (var e, n, i = 1 / 0, o = null, r = cn, a = 0, s = this._parts.length; a < s; a++)
                            for (var l = this._parts[a], h = 1, u = l.length; h < u; h++) {
                                var c = r(t, (e = l[h - 1]), (n = l[h]), !0);
                                c < i && ((i = c), (o = r(t, e, n)));
                            }
                        return o && (o.distance = Math.sqrt(i)), o;
                    },
                    getCenter: function () {
                        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                        var t,
                            e,
                            n,
                            i,
                            o,
                            r,
                            a,
                            s = this._rings[0],
                            l = s.length;
                        if (!l) return null;
                        for (t = 0, e = 0; t < l - 1; t++) e += s[t].distanceTo(s[t + 1]) / 2;
                        if (0 === e) return this._map.layerPointToLatLng(s[0]);
                        for (t = 0, i = 0; t < l - 1; t++)
                            if (((o = s[t]), (r = s[t + 1]), (i += n = o.distanceTo(r)) > e))
                                return (
                                    (a = (i - e) / n),
                                    this._map.layerPointToLatLng([r.x - a * (r.x - o.x), r.y - a * (r.y - o.y)])
                                );
                    },
                    getBounds: function () {
                        return this._bounds;
                    },
                    addLatLng: function (t, e) {
                        return (
                            (e = e || this._defaultShape()),
                            (t = Z(t)),
                            e.push(t),
                            this._bounds.extend(t),
                            this.redraw()
                        );
                    },
                    _setLatLngs: function (t) {
                        (this._bounds = new D()), (this._latlngs = this._convertLatLngs(t));
                    },
                    _defaultShape: function () {
                        return dn(this._latlngs) ? this._latlngs : this._latlngs[0];
                    },
                    _convertLatLngs: function (t) {
                        for (var e = [], n = dn(t), i = 0, o = t.length; i < o; i++)
                            n ? ((e[i] = Z(t[i])), this._bounds.extend(e[i])) : (e[i] = this._convertLatLngs(t[i]));
                        return e;
                    },
                    _project: function () {
                        var t = new z();
                        (this._rings = []),
                            this._projectLatlngs(this._latlngs, this._rings, t),
                            this._bounds.isValid() && t.isValid() && ((this._rawPxBounds = t), this._updateBounds());
                    },
                    _updateBounds: function () {
                        var t = this._clickTolerance(),
                            e = new E(t, t);
                        this._pxBounds = new z([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]);
                    },
                    _projectLatlngs: function (t, e, n) {
                        var i,
                            o,
                            r = t[0] instanceof j,
                            a = t.length;
                        if (r) {
                            for (o = [], i = 0; i < a; i++) (o[i] = this._map.latLngToLayerPoint(t[i])), n.extend(o[i]);
                            e.push(o);
                        } else for (i = 0; i < a; i++) this._projectLatlngs(t[i], e, n);
                    },
                    _clipPoints: function () {
                        var t = this._renderer._bounds;
                        if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
                            if (this.options.noClip) this._parts = this._rings;
                            else {
                                var e,
                                    n,
                                    i,
                                    o,
                                    r,
                                    a,
                                    s,
                                    l = this._parts;
                                for (e = 0, i = 0, o = this._rings.length; e < o; e++)
                                    for (n = 0, r = (s = this._rings[e]).length; n < r - 1; n++)
                                        (a = ln(s[n], s[n + 1], t, n, !0)) &&
                                            ((l[i] = l[i] || []),
                                            l[i].push(a[0]),
                                            (a[1] === s[n + 1] && n !== r - 2) || (l[i].push(a[1]), i++));
                            }
                    },
                    _simplifyPoints: function () {
                        for (var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length; n < i; n++)
                            t[n] = an(t[n], e);
                    },
                    _update: function () {
                        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
                    },
                    _updatePath: function () {
                        this._renderer._updatePoly(this);
                    },
                    _containsPoint: function (t, e) {
                        var n,
                            i,
                            o,
                            r,
                            a,
                            s,
                            l = this._clickTolerance();
                        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                        for (n = 0, r = this._parts.length; n < r; n++)
                            for (i = 0, o = (a = (s = this._parts[n]).length) - 1; i < a; o = i++)
                                if ((e || 0 !== i) && sn(t, s[o], s[i]) <= l) return !0;
                        return !1;
                    },
                });
            Bn._flat = fn;
            var zn = Bn.extend({
                    options: { fill: !0 },
                    isEmpty: function () {
                        return !this._latlngs.length || !this._latlngs[0].length;
                    },
                    getCenter: function () {
                        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                        var t,
                            e,
                            n,
                            i,
                            o,
                            r,
                            a,
                            s,
                            l,
                            h = this._rings[0],
                            u = h.length;
                        if (!u) return null;
                        for (r = a = s = 0, t = 0, e = u - 1; t < u; e = t++)
                            (n = h[t]),
                                (i = h[e]),
                                (o = n.y * i.x - i.y * n.x),
                                (a += (n.x + i.x) * o),
                                (s += (n.y + i.y) * o),
                                (r += 3 * o);
                        return (l = 0 === r ? h[0] : [a / r, s / r]), this._map.layerPointToLatLng(l);
                    },
                    _convertLatLngs: function (t) {
                        var e = Bn.prototype._convertLatLngs.call(this, t),
                            n = e.length;
                        return n >= 2 && e[0] instanceof j && e[0].equals(e[n - 1]) && e.pop(), e;
                    },
                    _setLatLngs: function (t) {
                        Bn.prototype._setLatLngs.call(this, t), dn(this._latlngs) && (this._latlngs = [this._latlngs]);
                    },
                    _defaultShape: function () {
                        return dn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
                    },
                    _clipPoints: function () {
                        var t = this._renderer._bounds,
                            e = this.options.weight,
                            n = new E(e, e);
                        if (
                            ((t = new z(t.min.subtract(n), t.max.add(n))),
                            (this._parts = []),
                            this._pxBounds && this._pxBounds.intersects(t))
                        )
                            if (this.options.noClip) this._parts = this._rings;
                            else
                                for (var i, o = 0, r = this._rings.length; o < r; o++)
                                    (i = _n(this._rings[o], t, !0)).length && this._parts.push(i);
                    },
                    _updatePath: function () {
                        this._renderer._updatePoly(this, !0);
                    },
                    _containsPoint: function (t) {
                        var e,
                            n,
                            i,
                            o,
                            r,
                            a,
                            s,
                            l,
                            h = !1;
                        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                        for (o = 0, s = this._parts.length; o < s; o++)
                            for (r = 0, a = (l = (e = this._parts[o]).length) - 1; r < l; a = r++)
                                (n = e[r]),
                                    (i = e[a]),
                                    n.y > t.y != i.y > t.y &&
                                        t.x < ((i.x - n.x) * (t.y - n.y)) / (i.y - n.y) + n.x &&
                                        (h = !h);
                        return h || Bn.prototype._containsPoint.call(this, t, !0);
                    },
                }),
                In = An.extend({
                    initialize: function (t, e) {
                        d(this, e), (this._layers = {}), t && this.addData(t);
                    },
                    addData: function (t) {
                        var e,
                            n,
                            i,
                            o = m(t) ? t : t.features;
                        if (o) {
                            for (e = 0, n = o.length; e < n; e++)
                                ((i = o[e]).geometries || i.geometry || i.features || i.coordinates) && this.addData(i);
                            return this;
                        }
                        var r = this.options;
                        if (r.filter && !r.filter(t)) return this;
                        var a = Dn(t, r);
                        return a
                            ? ((a.feature = Hn(t)),
                              (a.defaultOptions = a.options),
                              this.resetStyle(a),
                              r.onEachFeature && r.onEachFeature(t, a),
                              this.addLayer(a))
                            : this;
                    },
                    resetStyle: function (t) {
                        return void 0 === t
                            ? this.eachLayer(this.resetStyle, this)
                            : ((t.options = e({}, t.defaultOptions)), this._setLayerStyle(t, this.options.style), this);
                    },
                    setStyle: function (t) {
                        return this.eachLayer(function (e) {
                            this._setLayerStyle(e, t);
                        }, this);
                    },
                    _setLayerStyle: function (t, e) {
                        t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e));
                    },
                });
            function Dn(t, e) {
                var n,
                    i,
                    o,
                    r,
                    a = "Feature" === t.type ? t.geometry : t,
                    s = a ? a.coordinates : null,
                    l = [],
                    h = e && e.pointToLayer,
                    u = (e && e.coordsToLatLng) || jn;
                if (!s && !a) return null;
                switch (a.type) {
                    case "Point":
                        return Fn(h, t, (n = u(s)), e);
                    case "MultiPoint":
                        for (o = 0, r = s.length; o < r; o++) (n = u(s[o])), l.push(Fn(h, t, n, e));
                        return new An(l);
                    case "LineString":
                    case "MultiLineString":
                        return (i = Zn(s, "LineString" === a.type ? 0 : 1, u)), new Bn(i, e);
                    case "Polygon":
                    case "MultiPolygon":
                        return (i = Zn(s, "Polygon" === a.type ? 1 : 2, u)), new zn(i, e);
                    case "GeometryCollection":
                        for (o = 0, r = a.geometries.length; o < r; o++) {
                            var c = Dn({ geometry: a.geometries[o], type: "Feature", properties: t.properties }, e);
                            c && l.push(c);
                        }
                        return new An(l);
                    default:
                        throw new Error("Invalid GeoJSON object.");
                }
            }
            function Fn(t, e, n, i) {
                return t ? t(e, n) : new Mn(n, i && i.markersInheritOptions && i);
            }
            function jn(t) {
                return new j(t[1], t[0], t[2]);
            }
            function Zn(t, e, n) {
                for (var i, o = [], r = 0, a = t.length; r < a; r++)
                    (i = e ? Zn(t[r], e - 1, n) : (n || jn)(t[r])), o.push(i);
                return o;
            }
            function Rn(t, e) {
                return (
                    (e = "number" == typeof e ? e : 6),
                    void 0 !== t.alt ? [h(t.lng, e), h(t.lat, e), h(t.alt, e)] : [h(t.lng, e), h(t.lat, e)]
                );
            }
            function Nn(t, e, n, i) {
                for (var o = [], r = 0, a = t.length; r < a; r++) o.push(e ? Nn(t[r], e - 1, n, i) : Rn(t[r], i));
                return !e && n && o.push(o[0]), o;
            }
            function Vn(t, n) {
                return t.feature ? e({}, t.feature, { geometry: n }) : Hn(n);
            }
            function Hn(t) {
                return "Feature" === t.type || "FeatureCollection" === t.type
                    ? t
                    : { type: "Feature", properties: {}, geometry: t };
            }
            var Gn = {
                toGeoJSON: function (t) {
                    return Vn(this, { type: "Point", coordinates: Rn(this.getLatLng(), t) });
                },
            };
            function Un(t, e) {
                return new In(t, e);
            }
            Mn.include(Gn),
                On.include(Gn),
                En.include(Gn),
                Bn.include({
                    toGeoJSON: function (t) {
                        var e = !dn(this._latlngs);
                        return Vn(this, {
                            type: (e ? "Multi" : "") + "LineString",
                            coordinates: Nn(this._latlngs, e ? 1 : 0, !1, t),
                        });
                    },
                }),
                zn.include({
                    toGeoJSON: function (t) {
                        var e = !dn(this._latlngs),
                            n = e && !dn(this._latlngs[0]),
                            i = Nn(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
                        return e || (i = [i]), Vn(this, { type: (n ? "Multi" : "") + "Polygon", coordinates: i });
                    },
                }),
                Pn.include({
                    toMultiPoint: function (t) {
                        var e = [];
                        return (
                            this.eachLayer(function (n) {
                                e.push(n.toGeoJSON(t).geometry.coordinates);
                            }),
                            Vn(this, { type: "MultiPoint", coordinates: e })
                        );
                    },
                    toGeoJSON: function (t) {
                        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                        if ("MultiPoint" === e) return this.toMultiPoint(t);
                        var n = "GeometryCollection" === e,
                            i = [];
                        return (
                            this.eachLayer(function (e) {
                                if (e.toGeoJSON) {
                                    var o = e.toGeoJSON(t);
                                    if (n) i.push(o.geometry);
                                    else {
                                        var r = Hn(o);
                                        "FeatureCollection" === r.type ? i.push.apply(i, r.features) : i.push(r);
                                    }
                                }
                            }),
                            n
                                ? Vn(this, { geometries: i, type: "GeometryCollection" })
                                : { type: "FeatureCollection", features: i }
                        );
                    },
                });
            var Wn = Un,
                qn = Ln.extend({
                    options: {
                        opacity: 1,
                        alt: "",
                        interactive: !1,
                        crossOrigin: !1,
                        errorOverlayUrl: "",
                        zIndex: 1,
                        className: "",
                    },
                    initialize: function (t, e, n) {
                        (this._url = t), (this._bounds = F(e)), d(this, n);
                    },
                    onAdd: function () {
                        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
                            this.options.interactive &&
                                (se(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)),
                            this.getPane().appendChild(this._image),
                            this._reset();
                    },
                    onRemove: function () {
                        ne(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
                    },
                    setOpacity: function (t) {
                        return (this.options.opacity = t), this._image && this._updateOpacity(), this;
                    },
                    setStyle: function (t) {
                        return t.opacity && this.setOpacity(t.opacity), this;
                    },
                    bringToFront: function () {
                        return this._map && oe(this._image), this;
                    },
                    bringToBack: function () {
                        return this._map && re(this._image), this;
                    },
                    setUrl: function (t) {
                        return (this._url = t), this._image && (this._image.src = t), this;
                    },
                    setBounds: function (t) {
                        return (this._bounds = F(t)), this._map && this._reset(), this;
                    },
                    getEvents: function () {
                        var t = { zoom: this._reset, viewreset: this._reset };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
                    },
                    setZIndex: function (t) {
                        return (this.options.zIndex = t), this._updateZIndex(), this;
                    },
                    getBounds: function () {
                        return this._bounds;
                    },
                    getElement: function () {
                        return this._image;
                    },
                    _initImage: function () {
                        var t = "IMG" === this._url.tagName,
                            e = (this._image = t ? this._url : ee("img"));
                        se(e, "leaflet-image-layer"),
                            this._zoomAnimated && se(e, "leaflet-zoom-animated"),
                            this.options.className && se(e, this.options.className),
                            (e.onselectstart = l),
                            (e.onmousemove = l),
                            (e.onload = i(this.fire, this, "load")),
                            (e.onerror = i(this._overlayOnError, this, "error")),
                            (this.options.crossOrigin || "" === this.options.crossOrigin) &&
                                (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                            this.options.zIndex && this._updateZIndex(),
                            t ? (this._url = e.src) : ((e.src = this._url), (e.alt = this.options.alt));
                    },
                    _animateZoom: function (t) {
                        var e = this._map.getZoomScale(t.zoom),
                            n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                        fe(this._image, n, e);
                    },
                    _reset: function () {
                        var t = this._image,
                            e = new z(
                                this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                                this._map.latLngToLayerPoint(this._bounds.getSouthEast())
                            ),
                            n = e.getSize();
                        pe(t, e.min), (t.style.width = n.x + "px"), (t.style.height = n.y + "px");
                    },
                    _updateOpacity: function () {
                        ce(this._image, this.options.opacity);
                    },
                    _updateZIndex: function () {
                        this._image &&
                            void 0 !== this.options.zIndex &&
                            null !== this.options.zIndex &&
                            (this._image.style.zIndex = this.options.zIndex);
                    },
                    _overlayOnError: function () {
                        this.fire("error");
                        var t = this.options.errorOverlayUrl;
                        t && this._url !== t && ((this._url = t), (this._image.src = t));
                    },
                }),
                Yn = qn.extend({
                    options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1 },
                    _initImage: function () {
                        var t = "VIDEO" === this._url.tagName,
                            e = (this._image = t ? this._url : ee("video"));
                        if (
                            (se(e, "leaflet-image-layer"),
                            this._zoomAnimated && se(e, "leaflet-zoom-animated"),
                            this.options.className && se(e, this.options.className),
                            (e.onselectstart = l),
                            (e.onmousemove = l),
                            (e.onloadeddata = i(this.fire, this, "load")),
                            t)
                        ) {
                            for (var n = e.getElementsByTagName("source"), o = [], r = 0; r < n.length; r++)
                                o.push(n[r].src);
                            this._url = n.length > 0 ? o : [e.src];
                        } else {
                            m(this._url) || (this._url = [this._url]),
                                !this.options.keepAspectRatio &&
                                    Object.prototype.hasOwnProperty.call(e.style, "objectFit") &&
                                    (e.style.objectFit = "fill"),
                                (e.autoplay = !!this.options.autoplay),
                                (e.loop = !!this.options.loop),
                                (e.muted = !!this.options.muted);
                            for (var a = 0; a < this._url.length; a++) {
                                var s = ee("source");
                                (s.src = this._url[a]), e.appendChild(s);
                            }
                        }
                    },
                }),
                Qn = qn.extend({
                    _initImage: function () {
                        var t = (this._image = this._url);
                        se(t, "leaflet-image-layer"),
                            this._zoomAnimated && se(t, "leaflet-zoom-animated"),
                            this.options.className && se(t, this.options.className),
                            (t.onselectstart = l),
                            (t.onmousemove = l);
                    },
                }),
                Jn = Ln.extend({
                    options: { offset: [0, 7], className: "", pane: "popupPane" },
                    initialize: function (t, e) {
                        d(this, t), (this._source = e);
                    },
                    onAdd: function (t) {
                        (this._zoomAnimated = t._zoomAnimated),
                            this._container || this._initLayout(),
                            t._fadeAnimated && ce(this._container, 0),
                            clearTimeout(this._removeTimeout),
                            this.getPane().appendChild(this._container),
                            this.update(),
                            t._fadeAnimated && ce(this._container, 1),
                            this.bringToFront();
                    },
                    onRemove: function (t) {
                        t._fadeAnimated
                            ? (ce(this._container, 0),
                              (this._removeTimeout = setTimeout(i(ne, void 0, this._container), 200)))
                            : ne(this._container);
                    },
                    getLatLng: function () {
                        return this._latlng;
                    },
                    setLatLng: function (t) {
                        return (this._latlng = Z(t)), this._map && (this._updatePosition(), this._adjustPan()), this;
                    },
                    getContent: function () {
                        return this._content;
                    },
                    setContent: function (t) {
                        return (this._content = t), this.update(), this;
                    },
                    getElement: function () {
                        return this._container;
                    },
                    update: function () {
                        this._map &&
                            ((this._container.style.visibility = "hidden"),
                            this._updateContent(),
                            this._updateLayout(),
                            this._updatePosition(),
                            (this._container.style.visibility = ""),
                            this._adjustPan());
                    },
                    getEvents: function () {
                        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
                    },
                    isOpen: function () {
                        return !!this._map && this._map.hasLayer(this);
                    },
                    bringToFront: function () {
                        return this._map && oe(this._container), this;
                    },
                    bringToBack: function () {
                        return this._map && re(this._container), this;
                    },
                    _prepareOpen: function (t, e, n) {
                        if ((e instanceof Ln || ((n = e), (e = t)), e instanceof An))
                            for (var i in t._layers) {
                                e = t._layers[i];
                                break;
                            }
                        if (!n)
                            if (e.getCenter) n = e.getCenter();
                            else {
                                if (!e.getLatLng) throw new Error("Unable to get source layer LatLng.");
                                n = e.getLatLng();
                            }
                        return (this._source = e), this.update(), n;
                    },
                    _updateContent: function () {
                        if (this._content) {
                            var t = this._contentNode,
                                e =
                                    "function" == typeof this._content
                                        ? this._content(this._source || this)
                                        : this._content;
                            if ("string" == typeof e) t.innerHTML = e;
                            else {
                                for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                                t.appendChild(e);
                            }
                            this.fire("contentupdate");
                        }
                    },
                    _updatePosition: function () {
                        if (this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng),
                                e = B(this.options.offset),
                                n = this._getAnchor();
                            this._zoomAnimated ? pe(this._container, t.add(n)) : (e = e.add(t).add(n));
                            var i = (this._containerBottom = -e.y),
                                o = (this._containerLeft = -Math.round(this._containerWidth / 2) + e.x);
                            (this._container.style.bottom = i + "px"), (this._container.style.left = o + "px");
                        }
                    },
                    _getAnchor: function () {
                        return [0, 0];
                    },
                }),
                Kn = Jn.extend({
                    options: {
                        maxWidth: 300,
                        minWidth: 50,
                        maxHeight: null,
                        autoPan: !0,
                        autoPanPaddingTopLeft: null,
                        autoPanPaddingBottomRight: null,
                        autoPanPadding: [5, 5],
                        keepInView: !1,
                        closeButton: !0,
                        autoClose: !0,
                        closeOnEscapeKey: !0,
                        className: "",
                    },
                    openOn: function (t) {
                        return t.openPopup(this), this;
                    },
                    onAdd: function (t) {
                        Jn.prototype.onAdd.call(this, t),
                            t.fire("popupopen", { popup: this }),
                            this._source &&
                                (this._source.fire("popupopen", { popup: this }, !0),
                                this._source instanceof kn || this._source.on("preclick", Ee));
                    },
                    onRemove: function (t) {
                        Jn.prototype.onRemove.call(this, t),
                            t.fire("popupclose", { popup: this }),
                            this._source &&
                                (this._source.fire("popupclose", { popup: this }, !0),
                                this._source instanceof kn || this._source.off("preclick", Ee));
                    },
                    getEvents: function () {
                        var t = Jn.prototype.getEvents.call(this);
                        return (
                            (void 0 !== this.options.closeOnClick
                                ? this.options.closeOnClick
                                : this._map.options.closePopupOnClick) && (t.preclick = this._close),
                            this.options.keepInView && (t.moveend = this._adjustPan),
                            t
                        );
                    },
                    _close: function () {
                        this._map && this._map.closePopup(this);
                    },
                    _initLayout: function () {
                        var t = "leaflet-popup",
                            e = (this._container = ee(
                                "div",
                                t + " " + (this.options.className || "") + " leaflet-zoom-animated"
                            )),
                            n = (this._wrapper = ee("div", t + "-content-wrapper", e));
                        if (
                            ((this._contentNode = ee("div", t + "-content", n)),
                            Be(e),
                            Oe(this._contentNode),
                            Pe(e, "contextmenu", Ee),
                            (this._tipContainer = ee("div", t + "-tip-container", e)),
                            (this._tip = ee("div", t + "-tip", this._tipContainer)),
                            this.options.closeButton)
                        ) {
                            var i = (this._closeButton = ee("a", t + "-close-button", e));
                            (i.href = "#close"),
                                (i.innerHTML = "&#215;"),
                                Pe(i, "click", this._onCloseButtonClick, this);
                        }
                    },
                    _updateLayout: function () {
                        var t = this._contentNode,
                            e = t.style;
                        (e.width = ""), (e.whiteSpace = "nowrap");
                        var n = t.offsetWidth;
                        (n = Math.min(n, this.options.maxWidth)),
                            (n = Math.max(n, this.options.minWidth)),
                            (e.width = n + 1 + "px"),
                            (e.whiteSpace = ""),
                            (e.height = "");
                        var i = t.offsetHeight,
                            o = this.options.maxHeight;
                        o && i > o
                            ? ((e.height = o + "px"), se(t, "leaflet-popup-scrolled"))
                            : le(t, "leaflet-popup-scrolled"),
                            (this._containerWidth = this._container.offsetWidth);
                    },
                    _animateZoom: function (t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                            n = this._getAnchor();
                        pe(this._container, e.add(n));
                    },
                    _adjustPan: function () {
                        if (this.options.autoPan) {
                            this._map._panAnim && this._map._panAnim.stop();
                            var t = this._map,
                                e = parseInt(te(this._container, "marginBottom"), 10) || 0,
                                n = this._container.offsetHeight + e,
                                i = this._containerWidth,
                                o = new E(this._containerLeft, -n - this._containerBottom);
                            o._add(_e(this._container));
                            var r = t.layerPointToContainerPoint(o),
                                a = B(this.options.autoPanPadding),
                                s = B(this.options.autoPanPaddingTopLeft || a),
                                l = B(this.options.autoPanPaddingBottomRight || a),
                                h = t.getSize(),
                                u = 0,
                                c = 0;
                            r.x + i + l.x > h.x && (u = r.x + i - h.x + l.x),
                                r.x - u - s.x < 0 && (u = r.x - s.x),
                                r.y + n + l.y > h.y && (c = r.y + n - h.y + l.y),
                                r.y - c - s.y < 0 && (c = r.y - s.y),
                                (u || c) && t.fire("autopanstart").panBy([u, c]);
                        }
                    },
                    _onCloseButtonClick: function (t) {
                        this._close(), Ie(t);
                    },
                    _getAnchor: function () {
                        return B(
                            this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]
                        );
                    },
                });
            Ue.mergeOptions({ closePopupOnClick: !0 }),
                Ue.include({
                    openPopup: function (t, e, n) {
                        return (
                            t instanceof Kn || (t = new Kn(n).setContent(t)),
                            e && t.setLatLng(e),
                            this.hasLayer(t)
                                ? this
                                : (this._popup && this._popup.options.autoClose && this.closePopup(),
                                  (this._popup = t),
                                  this.addLayer(t))
                        );
                    },
                    closePopup: function (t) {
                        return (
                            (t && t !== this._popup) || ((t = this._popup), (this._popup = null)),
                            t && this.removeLayer(t),
                            this
                        );
                    },
                }),
                Ln.include({
                    bindPopup: function (t, e) {
                        return (
                            t instanceof Kn
                                ? (d(t, e), (this._popup = t), (t._source = this))
                                : ((this._popup && !e) || (this._popup = new Kn(e, this)), this._popup.setContent(t)),
                            this._popupHandlersAdded ||
                                (this.on({
                                    click: this._openPopup,
                                    keypress: this._onKeyPress,
                                    remove: this.closePopup,
                                    move: this._movePopup,
                                }),
                                (this._popupHandlersAdded = !0)),
                            this
                        );
                    },
                    unbindPopup: function () {
                        return (
                            this._popup &&
                                (this.off({
                                    click: this._openPopup,
                                    keypress: this._onKeyPress,
                                    remove: this.closePopup,
                                    move: this._movePopup,
                                }),
                                (this._popupHandlersAdded = !1),
                                (this._popup = null)),
                            this
                        );
                    },
                    openPopup: function (t, e) {
                        return (
                            this._popup &&
                                this._map &&
                                ((e = this._popup._prepareOpen(this, t, e)), this._map.openPopup(this._popup, e)),
                            this
                        );
                    },
                    closePopup: function () {
                        return this._popup && this._popup._close(), this;
                    },
                    togglePopup: function (t) {
                        return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
                    },
                    isPopupOpen: function () {
                        return !!this._popup && this._popup.isOpen();
                    },
                    setPopupContent: function (t) {
                        return this._popup && this._popup.setContent(t), this;
                    },
                    getPopup: function () {
                        return this._popup;
                    },
                    _openPopup: function (t) {
                        var e = t.layer || t.target;
                        this._popup &&
                            this._map &&
                            (Ie(t),
                            e instanceof kn
                                ? this.openPopup(t.layer || t.target, t.latlng)
                                : this._map.hasLayer(this._popup) && this._popup._source === e
                                ? this.closePopup()
                                : this.openPopup(e, t.latlng));
                    },
                    _movePopup: function (t) {
                        this._popup.setLatLng(t.latlng);
                    },
                    _onKeyPress: function (t) {
                        13 === t.originalEvent.keyCode && this._openPopup(t);
                    },
                });
            var Xn = Jn.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    interactive: !1,
                    opacity: 0.9,
                },
                onAdd: function (t) {
                    Jn.prototype.onAdd.call(this, t),
                        this.setOpacity(this.options.opacity),
                        t.fire("tooltipopen", { tooltip: this }),
                        this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
                },
                onRemove: function (t) {
                    Jn.prototype.onRemove.call(this, t),
                        t.fire("tooltipclose", { tooltip: this }),
                        this._source && this._source.fire("tooltipclose", { tooltip: this }, !0);
                },
                getEvents: function () {
                    var t = Jn.prototype.getEvents.call(this);
                    return xt && !this.options.permanent && (t.preclick = this._close), t;
                },
                _close: function () {
                    this._map && this._map.closeTooltip(this);
                },
                _initLayout: function () {
                    var t =
                        "leaflet-tooltip " +
                        (this.options.className || "") +
                        " leaflet-zoom-" +
                        (this._zoomAnimated ? "animated" : "hide");
                    this._contentNode = this._container = ee("div", t);
                },
                _updateLayout: function () {},
                _adjustPan: function () {},
                _setPosition: function (t) {
                    var e,
                        n,
                        i = this._map,
                        o = this._container,
                        r = i.latLngToContainerPoint(i.getCenter()),
                        a = i.layerPointToContainerPoint(t),
                        s = this.options.direction,
                        l = o.offsetWidth,
                        h = o.offsetHeight,
                        u = B(this.options.offset),
                        c = this._getAnchor();
                    "top" === s
                        ? ((e = l / 2), (n = h))
                        : "bottom" === s
                        ? ((e = l / 2), (n = 0))
                        : "center" === s
                        ? ((e = l / 2), (n = h / 2))
                        : "right" === s
                        ? ((e = 0), (n = h / 2))
                        : "left" === s
                        ? ((e = l), (n = h / 2))
                        : a.x < r.x
                        ? ((s = "right"), (e = 0), (n = h / 2))
                        : ((s = "left"), (e = l + 2 * (u.x + c.x)), (n = h / 2)),
                        (t = t.subtract(B(e, n, !0)).add(u).add(c)),
                        le(o, "leaflet-tooltip-right"),
                        le(o, "leaflet-tooltip-left"),
                        le(o, "leaflet-tooltip-top"),
                        le(o, "leaflet-tooltip-bottom"),
                        se(o, "leaflet-tooltip-" + s),
                        pe(o, t);
                },
                _updatePosition: function () {
                    var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t);
                },
                setOpacity: function (t) {
                    (this.options.opacity = t), this._container && ce(this._container, t);
                },
                _animateZoom: function (t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                    this._setPosition(e);
                },
                _getAnchor: function () {
                    return B(
                        this._source && this._source._getTooltipAnchor && !this.options.sticky
                            ? this._source._getTooltipAnchor()
                            : [0, 0]
                    );
                },
            });
            Ue.include({
                openTooltip: function (t, e, n) {
                    return (
                        t instanceof Xn || (t = new Xn(n).setContent(t)),
                        e && t.setLatLng(e),
                        this.hasLayer(t) ? this : this.addLayer(t)
                    );
                },
                closeTooltip: function (t) {
                    return t && this.removeLayer(t), this;
                },
            }),
                Ln.include({
                    bindTooltip: function (t, e) {
                        return (
                            t instanceof Xn
                                ? (d(t, e), (this._tooltip = t), (t._source = this))
                                : ((this._tooltip && !e) || (this._tooltip = new Xn(e, this)),
                                  this._tooltip.setContent(t)),
                            this._initTooltipInteractions(),
                            this._tooltip.options.permanent &&
                                this._map &&
                                this._map.hasLayer(this) &&
                                this.openTooltip(),
                            this
                        );
                    },
                    unbindTooltip: function () {
                        return (
                            this._tooltip &&
                                (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)),
                            this
                        );
                    },
                    _initTooltipInteractions: function (t) {
                        if (t || !this._tooltipHandlersAdded) {
                            var e = t ? "off" : "on",
                                n = { remove: this.closeTooltip, move: this._moveTooltip };
                            this._tooltip.options.permanent
                                ? (n.add = this._openTooltip)
                                : ((n.mouseover = this._openTooltip),
                                  (n.mouseout = this.closeTooltip),
                                  this._tooltip.options.sticky && (n.mousemove = this._moveTooltip),
                                  xt && (n.click = this._openTooltip)),
                                this[e](n),
                                (this._tooltipHandlersAdded = !t);
                        }
                    },
                    openTooltip: function (t, e) {
                        return (
                            this._tooltip &&
                                this._map &&
                                ((e = this._tooltip._prepareOpen(this, t, e)),
                                this._map.openTooltip(this._tooltip, e),
                                this._tooltip.options.interactive &&
                                    this._tooltip._container &&
                                    (se(this._tooltip._container, "leaflet-clickable"),
                                    this.addInteractiveTarget(this._tooltip._container))),
                            this
                        );
                    },
                    closeTooltip: function () {
                        return (
                            this._tooltip &&
                                (this._tooltip._close(),
                                this._tooltip.options.interactive &&
                                    this._tooltip._container &&
                                    (le(this._tooltip._container, "leaflet-clickable"),
                                    this.removeInteractiveTarget(this._tooltip._container))),
                            this
                        );
                    },
                    toggleTooltip: function (t) {
                        return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
                    },
                    isTooltipOpen: function () {
                        return this._tooltip.isOpen();
                    },
                    setTooltipContent: function (t) {
                        return this._tooltip && this._tooltip.setContent(t), this;
                    },
                    getTooltip: function () {
                        return this._tooltip;
                    },
                    _openTooltip: function (t) {
                        var e = t.layer || t.target;
                        this._tooltip &&
                            this._map &&
                            this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0);
                    },
                    _moveTooltip: function (t) {
                        var e,
                            n,
                            i = t.latlng;
                        this._tooltip.options.sticky &&
                            t.originalEvent &&
                            ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
                            (n = this._map.containerPointToLayerPoint(e)),
                            (i = this._map.layerPointToLatLng(n))),
                            this._tooltip.setLatLng(i);
                    },
                });
            var $n = Tn.extend({
                options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" },
                createIcon: function (t) {
                    var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                        n = this.options;
                    if (
                        (n.html instanceof Element
                            ? (ie(e), e.appendChild(n.html))
                            : (e.innerHTML = !1 !== n.html ? n.html : ""),
                        n.bgPos)
                    ) {
                        var i = B(n.bgPos);
                        e.style.backgroundPosition = -i.x + "px " + -i.y + "px";
                    }
                    return this._setIconStyles(e, "icon"), e;
                },
                createShadow: function () {
                    return null;
                },
            });
            Tn.Default = Cn;
            var ti = Ln.extend({
                    options: {
                        tileSize: 256,
                        opacity: 1,
                        updateWhenIdle: mt,
                        updateWhenZooming: !0,
                        updateInterval: 200,
                        zIndex: 1,
                        bounds: null,
                        minZoom: 0,
                        maxZoom: void 0,
                        maxNativeZoom: void 0,
                        minNativeZoom: void 0,
                        noWrap: !1,
                        pane: "tilePane",
                        className: "",
                        keepBuffer: 2,
                    },
                    initialize: function (t) {
                        d(this, t);
                    },
                    onAdd: function () {
                        this._initContainer(),
                            (this._levels = {}),
                            (this._tiles = {}),
                            this._resetView(),
                            this._update();
                    },
                    beforeAdd: function (t) {
                        t._addZoomLimit(this);
                    },
                    onRemove: function (t) {
                        this._removeAllTiles(),
                            ne(this._container),
                            t._removeZoomLimit(this),
                            (this._container = null),
                            (this._tileZoom = void 0);
                    },
                    bringToFront: function () {
                        return this._map && (oe(this._container), this._setAutoZIndex(Math.max)), this;
                    },
                    bringToBack: function () {
                        return this._map && (re(this._container), this._setAutoZIndex(Math.min)), this;
                    },
                    getContainer: function () {
                        return this._container;
                    },
                    setOpacity: function (t) {
                        return (this.options.opacity = t), this._updateOpacity(), this;
                    },
                    setZIndex: function (t) {
                        return (this.options.zIndex = t), this._updateZIndex(), this;
                    },
                    isLoading: function () {
                        return this._loading;
                    },
                    redraw: function () {
                        return this._map && (this._removeAllTiles(), this._update()), this;
                    },
                    getEvents: function () {
                        var t = {
                            viewprereset: this._invalidateAll,
                            viewreset: this._resetView,
                            zoom: this._resetView,
                            moveend: this._onMoveEnd,
                        };
                        return (
                            this.options.updateWhenIdle ||
                                (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)),
                                (t.move = this._onMove)),
                            this._zoomAnimated && (t.zoomanim = this._animateZoom),
                            t
                        );
                    },
                    createTile: function () {
                        return document.createElement("div");
                    },
                    getTileSize: function () {
                        var t = this.options.tileSize;
                        return t instanceof E ? t : new E(t, t);
                    },
                    _updateZIndex: function () {
                        this._container &&
                            void 0 !== this.options.zIndex &&
                            null !== this.options.zIndex &&
                            (this._container.style.zIndex = this.options.zIndex);
                    },
                    _setAutoZIndex: function (t) {
                        for (var e, n = this.getPane().children, i = -t(-1 / 0, 1 / 0), o = 0, r = n.length; o < r; o++)
                            (e = n[o].style.zIndex), n[o] !== this._container && e && (i = t(i, +e));
                        isFinite(i) && ((this.options.zIndex = i + t(-1, 1)), this._updateZIndex());
                    },
                    _updateOpacity: function () {
                        if (this._map && !X) {
                            ce(this._container, this.options.opacity);
                            var t = +new Date(),
                                e = !1,
                                n = !1;
                            for (var i in this._tiles) {
                                var o = this._tiles[i];
                                if (o.current && o.loaded) {
                                    var r = Math.min(1, (t - o.loaded) / 200);
                                    ce(o.el, r),
                                        r < 1
                                            ? (e = !0)
                                            : (o.active ? (n = !0) : this._onOpaqueTile(o), (o.active = !0));
                                }
                            }
                            n && !this._noPrune && this._pruneTiles(),
                                e && (T(this._fadeFrame), (this._fadeFrame = A(this._updateOpacity, this)));
                        }
                    },
                    _onOpaqueTile: l,
                    _initContainer: function () {
                        this._container ||
                            ((this._container = ee("div", "leaflet-layer " + (this.options.className || ""))),
                            this._updateZIndex(),
                            this.options.opacity < 1 && this._updateOpacity(),
                            this.getPane().appendChild(this._container));
                    },
                    _updateLevels: function () {
                        var t = this._tileZoom,
                            e = this.options.maxZoom;
                        if (void 0 !== t) {
                            for (var n in this._levels)
                                (n = Number(n)),
                                    this._levels[n].el.children.length || n === t
                                        ? ((this._levels[n].el.style.zIndex = e - Math.abs(t - n)),
                                          this._onUpdateLevel(n))
                                        : (ne(this._levels[n].el),
                                          this._removeTilesAtZoom(n),
                                          this._onRemoveLevel(n),
                                          delete this._levels[n]);
                            var i = this._levels[t],
                                o = this._map;
                            return (
                                i ||
                                    (((i = this._levels[t] = {}).el = ee(
                                        "div",
                                        "leaflet-tile-container leaflet-zoom-animated",
                                        this._container
                                    )),
                                    (i.el.style.zIndex = e),
                                    (i.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
                                    (i.zoom = t),
                                    this._setZoomTransform(i, o.getCenter(), o.getZoom()),
                                    i.el.offsetWidth,
                                    this._onCreateLevel(i)),
                                (this._level = i),
                                i
                            );
                        }
                    },
                    _onUpdateLevel: l,
                    _onRemoveLevel: l,
                    _onCreateLevel: l,
                    _pruneTiles: function () {
                        if (this._map) {
                            var t,
                                e,
                                n = this._map.getZoom();
                            if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
                            else {
                                for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
                                for (t in this._tiles)
                                    if ((e = this._tiles[t]).current && !e.active) {
                                        var i = e.coords;
                                        this._retainParent(i.x, i.y, i.z, i.z - 5) ||
                                            this._retainChildren(i.x, i.y, i.z, i.z + 2);
                                    }
                                for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
                            }
                        }
                    },
                    _removeTilesAtZoom: function (t) {
                        for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
                    },
                    _removeAllTiles: function () {
                        for (var t in this._tiles) this._removeTile(t);
                    },
                    _invalidateAll: function () {
                        for (var t in this._levels)
                            ne(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                        this._removeAllTiles(), (this._tileZoom = void 0);
                    },
                    _retainParent: function (t, e, n, i) {
                        var o = Math.floor(t / 2),
                            r = Math.floor(e / 2),
                            a = n - 1,
                            s = new E(+o, +r);
                        s.z = +a;
                        var l = this._tileCoordsToKey(s),
                            h = this._tiles[l];
                        return h && h.active
                            ? ((h.retain = !0), !0)
                            : (h && h.loaded && (h.retain = !0), a > i && this._retainParent(o, r, a, i));
                    },
                    _retainChildren: function (t, e, n, i) {
                        for (var o = 2 * t; o < 2 * t + 2; o++)
                            for (var r = 2 * e; r < 2 * e + 2; r++) {
                                var a = new E(o, r);
                                a.z = n + 1;
                                var s = this._tileCoordsToKey(a),
                                    l = this._tiles[s];
                                l && l.active
                                    ? (l.retain = !0)
                                    : (l && l.loaded && (l.retain = !0),
                                      n + 1 < i && this._retainChildren(o, r, n + 1, i));
                            }
                    },
                    _resetView: function (t) {
                        var e = t && (t.pinch || t.flyTo);
                        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
                    },
                    _animateZoom: function (t) {
                        this._setView(t.center, t.zoom, !0, t.noUpdate);
                    },
                    _clampZoom: function (t) {
                        var e = this.options;
                        return void 0 !== e.minNativeZoom && t < e.minNativeZoom
                            ? e.minNativeZoom
                            : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
                            ? e.maxNativeZoom
                            : t;
                    },
                    _setView: function (t, e, n, i) {
                        var o = Math.round(e);
                        o =
                            (void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
                            (void 0 !== this.options.minZoom && o < this.options.minZoom)
                                ? void 0
                                : this._clampZoom(o);
                        var r = this.options.updateWhenZooming && o !== this._tileZoom;
                        (i && !r) ||
                            ((this._tileZoom = o),
                            this._abortLoading && this._abortLoading(),
                            this._updateLevels(),
                            this._resetGrid(),
                            void 0 !== o && this._update(t),
                            n || this._pruneTiles(),
                            (this._noPrune = !!n)),
                            this._setZoomTransforms(t, e);
                    },
                    _setZoomTransforms: function (t, e) {
                        for (var n in this._levels) this._setZoomTransform(this._levels[n], t, e);
                    },
                    _setZoomTransform: function (t, e, n) {
                        var i = this._map.getZoomScale(n, t.zoom),
                            o = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();
                        _t ? fe(t.el, o, i) : pe(t.el, o);
                    },
                    _resetGrid: function () {
                        var t = this._map,
                            e = t.options.crs,
                            n = (this._tileSize = this.getTileSize()),
                            i = this._tileZoom,
                            o = this._map.getPixelWorldBounds(this._tileZoom);
                        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                            (this._wrapX = e.wrapLng &&
                                !this.options.noWrap && [
                                    Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x),
                                    Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y),
                                ]),
                            (this._wrapY = e.wrapLat &&
                                !this.options.noWrap && [
                                    Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x),
                                    Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y),
                                ]);
                    },
                    _onMoveEnd: function () {
                        this._map && !this._map._animatingZoom && this._update();
                    },
                    _getTiledPixelBounds: function (t) {
                        var e = this._map,
                            n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                            i = e.getZoomScale(n, this._tileZoom),
                            o = e.project(t, this._tileZoom).floor(),
                            r = e.getSize().divideBy(2 * i);
                        return new z(o.subtract(r), o.add(r));
                    },
                    _update: function (t) {
                        var e = this._map;
                        if (e) {
                            var n = this._clampZoom(e.getZoom());
                            if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
                                var i = this._getTiledPixelBounds(t),
                                    o = this._pxBoundsToTileRange(i),
                                    r = o.getCenter(),
                                    a = [],
                                    s = this.options.keepBuffer,
                                    l = new z(o.getBottomLeft().subtract([s, -s]), o.getTopRight().add([s, -s]));
                                if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                                    throw new Error("Attempted to load an infinite number of tiles");
                                for (var h in this._tiles) {
                                    var u = this._tiles[h].coords;
                                    (u.z === this._tileZoom && l.contains(new E(u.x, u.y))) ||
                                        (this._tiles[h].current = !1);
                                }
                                if (Math.abs(n - this._tileZoom) > 1) this._setView(t, n);
                                else {
                                    for (var c = o.min.y; c <= o.max.y; c++)
                                        for (var d = o.min.x; d <= o.max.x; d++) {
                                            var f = new E(d, c);
                                            if (((f.z = this._tileZoom), this._isValidTile(f))) {
                                                var p = this._tiles[this._tileCoordsToKey(f)];
                                                p ? (p.current = !0) : a.push(f);
                                            }
                                        }
                                    if (
                                        (a.sort(function (t, e) {
                                            return t.distanceTo(r) - e.distanceTo(r);
                                        }),
                                        0 !== a.length)
                                    ) {
                                        this._loading || ((this._loading = !0), this.fire("loading"));
                                        var _ = document.createDocumentFragment();
                                        for (d = 0; d < a.length; d++) this._addTile(a[d], _);
                                        this._level.el.appendChild(_);
                                    }
                                }
                            }
                        }
                    },
                    _isValidTile: function (t) {
                        var e = this._map.options.crs;
                        if (!e.infinite) {
                            var n = this._globalTileRange;
                            if (
                                (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x)) ||
                                (!e.wrapLat && (t.y < n.min.y || t.y > n.max.y))
                            )
                                return !1;
                        }
                        if (!this.options.bounds) return !0;
                        var i = this._tileCoordsToBounds(t);
                        return F(this.options.bounds).overlaps(i);
                    },
                    _keyToBounds: function (t) {
                        return this._tileCoordsToBounds(this._keyToTileCoords(t));
                    },
                    _tileCoordsToNwSe: function (t) {
                        var e = this._map,
                            n = this.getTileSize(),
                            i = t.scaleBy(n),
                            o = i.add(n);
                        return [e.unproject(i, t.z), e.unproject(o, t.z)];
                    },
                    _tileCoordsToBounds: function (t) {
                        var e = this._tileCoordsToNwSe(t),
                            n = new D(e[0], e[1]);
                        return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n;
                    },
                    _tileCoordsToKey: function (t) {
                        return t.x + ":" + t.y + ":" + t.z;
                    },
                    _keyToTileCoords: function (t) {
                        var e = t.split(":"),
                            n = new E(+e[0], +e[1]);
                        return (n.z = +e[2]), n;
                    },
                    _removeTile: function (t) {
                        var e = this._tiles[t];
                        e &&
                            (ne(e.el),
                            delete this._tiles[t],
                            this.fire("tileunload", { tile: e.el, coords: this._keyToTileCoords(t) }));
                    },
                    _initTile: function (t) {
                        se(t, "leaflet-tile");
                        var e = this.getTileSize();
                        (t.style.width = e.x + "px"),
                            (t.style.height = e.y + "px"),
                            (t.onselectstart = l),
                            (t.onmousemove = l),
                            X && this.options.opacity < 1 && ce(t, this.options.opacity),
                            et && !nt && (t.style.WebkitBackfaceVisibility = "hidden");
                    },
                    _addTile: function (t, e) {
                        var n = this._getTilePos(t),
                            o = this._tileCoordsToKey(t),
                            r = this.createTile(this._wrapCoords(t), i(this._tileReady, this, t));
                        this._initTile(r),
                            this.createTile.length < 2 && A(i(this._tileReady, this, t, null, r)),
                            pe(r, n),
                            (this._tiles[o] = { el: r, coords: t, current: !0 }),
                            e.appendChild(r),
                            this.fire("tileloadstart", { tile: r, coords: t });
                    },
                    _tileReady: function (t, e, n) {
                        e && this.fire("tileerror", { error: e, tile: n, coords: t });
                        var o = this._tileCoordsToKey(t);
                        (n = this._tiles[o]) &&
                            ((n.loaded = +new Date()),
                            this._map._fadeAnimated
                                ? (ce(n.el, 0), T(this._fadeFrame), (this._fadeFrame = A(this._updateOpacity, this)))
                                : ((n.active = !0), this._pruneTiles()),
                            e || (se(n.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: n.el, coords: t })),
                            this._noTilesToLoad() &&
                                ((this._loading = !1),
                                this.fire("load"),
                                X || !this._map._fadeAnimated
                                    ? A(this._pruneTiles, this)
                                    : setTimeout(i(this._pruneTiles, this), 250)));
                    },
                    _getTilePos: function (t) {
                        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
                    },
                    _wrapCoords: function (t) {
                        var e = new E(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
                        return (e.z = t.z), e;
                    },
                    _pxBoundsToTileRange: function (t) {
                        var e = this.getTileSize();
                        return new z(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
                    },
                    _noTilesToLoad: function () {
                        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
                        return !0;
                    },
                }),
                ei = ti.extend({
                    options: {
                        minZoom: 0,
                        maxZoom: 18,
                        subdomains: "abc",
                        errorTileUrl: "",
                        zoomOffset: 0,
                        tms: !1,
                        zoomReverse: !1,
                        detectRetina: !1,
                        crossOrigin: !1,
                    },
                    initialize: function (t, e) {
                        (this._url = t),
                            (e = d(this, e)).detectRetina &&
                                Pt &&
                                e.maxZoom > 0 &&
                                ((e.tileSize = Math.floor(e.tileSize / 2)),
                                e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--),
                                (e.minZoom = Math.max(0, e.minZoom))),
                            "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
                            et || this.on("tileunload", this._onTileRemove);
                    },
                    setUrl: function (t, e) {
                        return this._url === t && void 0 === e && (e = !0), (this._url = t), e || this.redraw(), this;
                    },
                    createTile: function (t, e) {
                        var n = document.createElement("img");
                        return (
                            Pe(n, "load", i(this._tileOnLoad, this, e, n)),
                            Pe(n, "error", i(this._tileOnError, this, e, n)),
                            (this.options.crossOrigin || "" === this.options.crossOrigin) &&
                                (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                            (n.alt = ""),
                            n.setAttribute("role", "presentation"),
                            (n.src = this.getTileUrl(t)),
                            n
                        );
                    },
                    getTileUrl: function (t) {
                        var n = {
                            r: Pt ? "@2x" : "",
                            s: this._getSubdomain(t),
                            x: t.x,
                            y: t.y,
                            z: this._getZoomForUrl(),
                        };
                        if (this._map && !this._map.options.crs.infinite) {
                            var i = this._globalTileRange.max.y - t.y;
                            this.options.tms && (n.y = i), (n["-y"] = i);
                        }
                        return _(this._url, e(n, this.options));
                    },
                    _tileOnLoad: function (t, e) {
                        X ? setTimeout(i(t, this, null, e), 0) : t(null, e);
                    },
                    _tileOnError: function (t, e, n) {
                        var i = this.options.errorTileUrl;
                        i && e.getAttribute("src") !== i && (e.src = i), t(n, e);
                    },
                    _onTileRemove: function (t) {
                        t.tile.onload = null;
                    },
                    _getZoomForUrl: function () {
                        var t = this._tileZoom,
                            e = this.options.maxZoom;
                        return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset;
                    },
                    _getSubdomain: function (t) {
                        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                        return this.options.subdomains[e];
                    },
                    _abortLoading: function () {
                        var t, e;
                        for (t in this._tiles)
                            this._tiles[t].coords.z !== this._tileZoom &&
                                (((e = this._tiles[t].el).onload = l),
                                (e.onerror = l),
                                e.complete || ((e.src = v), ne(e), delete this._tiles[t]));
                    },
                    _removeTile: function (t) {
                        var e = this._tiles[t];
                        if (e) return ot || e.el.setAttribute("src", v), ti.prototype._removeTile.call(this, t);
                    },
                    _tileReady: function (t, e, n) {
                        if (this._map && (!n || n.getAttribute("src") !== v))
                            return ti.prototype._tileReady.call(this, t, e, n);
                    },
                });
            function ni(t, e) {
                return new ei(t, e);
            }
            var ii = ei.extend({
                defaultWmsParams: {
                    service: "WMS",
                    request: "GetMap",
                    layers: "",
                    styles: "",
                    format: "image/jpeg",
                    transparent: !1,
                    version: "1.1.1",
                },
                options: { crs: null, uppercase: !1 },
                initialize: function (t, n) {
                    this._url = t;
                    var i = e({}, this.defaultWmsParams);
                    for (var o in n) o in this.options || (i[o] = n[o]);
                    var r = (n = d(this, n)).detectRetina && Pt ? 2 : 1,
                        a = this.getTileSize();
                    (i.width = a.x * r), (i.height = a.y * r), (this.wmsParams = i);
                },
                onAdd: function (t) {
                    (this._crs = this.options.crs || t.options.crs),
                        (this._wmsVersion = parseFloat(this.wmsParams.version));
                    var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                    (this.wmsParams[e] = this._crs.code), ei.prototype.onAdd.call(this, t);
                },
                getTileUrl: function (t) {
                    var e = this._tileCoordsToNwSe(t),
                        n = this._crs,
                        i = I(n.project(e[0]), n.project(e[1])),
                        o = i.min,
                        r = i.max,
                        a = (
                            this._wmsVersion >= 1.3 && this._crs === xn ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]
                        ).join(","),
                        s = ei.prototype.getTileUrl.call(this, t);
                    return (
                        s +
                        f(this.wmsParams, s, this.options.uppercase) +
                        (this.options.uppercase ? "&BBOX=" : "&bbox=") +
                        a
                    );
                },
                setParams: function (t, n) {
                    return e(this.wmsParams, t), n || this.redraw(), this;
                },
            });
            (ei.WMS = ii),
                (ni.wms = function (t, e) {
                    return new ii(t, e);
                });
            var oi = Ln.extend({
                    options: { padding: 0.1, tolerance: 0 },
                    initialize: function (t) {
                        d(this, t), r(this), (this._layers = this._layers || {});
                    },
                    onAdd: function () {
                        this._container ||
                            (this._initContainer(), this._zoomAnimated && se(this._container, "leaflet-zoom-animated")),
                            this.getPane().appendChild(this._container),
                            this._update(),
                            this.on("update", this._updatePaths, this);
                    },
                    onRemove: function () {
                        this.off("update", this._updatePaths, this), this._destroyContainer();
                    },
                    getEvents: function () {
                        var t = {
                            viewreset: this._reset,
                            zoom: this._onZoom,
                            moveend: this._update,
                            zoomend: this._onZoomEnd,
                        };
                        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
                    },
                    _onAnimZoom: function (t) {
                        this._updateTransform(t.center, t.zoom);
                    },
                    _onZoom: function () {
                        this._updateTransform(this._map.getCenter(), this._map.getZoom());
                    },
                    _updateTransform: function (t, e) {
                        var n = this._map.getZoomScale(e, this._zoom),
                            i = _e(this._container),
                            o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
                            r = this._map.project(this._center, e),
                            a = this._map.project(t, e).subtract(r),
                            s = o.multiplyBy(-n).add(i).add(o).subtract(a);
                        _t ? fe(this._container, s, n) : pe(this._container, s);
                    },
                    _reset: function () {
                        for (var t in (this._update(), this._updateTransform(this._center, this._zoom), this._layers))
                            this._layers[t]._reset();
                    },
                    _onZoomEnd: function () {
                        for (var t in this._layers) this._layers[t]._project();
                    },
                    _updatePaths: function () {
                        for (var t in this._layers) this._layers[t]._update();
                    },
                    _update: function () {
                        var t = this.options.padding,
                            e = this._map.getSize(),
                            n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                        (this._bounds = new z(n, n.add(e.multiplyBy(1 + 2 * t)).round())),
                            (this._center = this._map.getCenter()),
                            (this._zoom = this._map.getZoom());
                    },
                }),
                ri = oi.extend({
                    getEvents: function () {
                        var t = oi.prototype.getEvents.call(this);
                        return (t.viewprereset = this._onViewPreReset), t;
                    },
                    _onViewPreReset: function () {
                        this._postponeUpdatePaths = !0;
                    },
                    onAdd: function () {
                        oi.prototype.onAdd.call(this), this._draw();
                    },
                    _initContainer: function () {
                        var t = (this._container = document.createElement("canvas"));
                        Pe(t, "mousemove", this._onMouseMove, this),
                            Pe(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
                            Pe(t, "mouseout", this._handleMouseOut, this),
                            (this._ctx = t.getContext("2d"));
                    },
                    _destroyContainer: function () {
                        T(this._redrawRequest),
                            delete this._ctx,
                            ne(this._container),
                            Te(this._container),
                            delete this._container;
                    },
                    _updatePaths: function () {
                        if (!this._postponeUpdatePaths) {
                            for (var t in ((this._redrawBounds = null), this._layers)) this._layers[t]._update();
                            this._redraw();
                        }
                    },
                    _update: function () {
                        if (!this._map._animatingZoom || !this._bounds) {
                            oi.prototype._update.call(this);
                            var t = this._bounds,
                                e = this._container,
                                n = t.getSize(),
                                i = Pt ? 2 : 1;
                            pe(e, t.min),
                                (e.width = i * n.x),
                                (e.height = i * n.y),
                                (e.style.width = n.x + "px"),
                                (e.style.height = n.y + "px"),
                                Pt && this._ctx.scale(2, 2),
                                this._ctx.translate(-t.min.x, -t.min.y),
                                this.fire("update");
                        }
                    },
                    _reset: function () {
                        oi.prototype._reset.call(this),
                            this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
                    },
                    _initPath: function (t) {
                        this._updateDashArray(t), (this._layers[r(t)] = t);
                        var e = (t._order = { layer: t, prev: this._drawLast, next: null });
                        this._drawLast && (this._drawLast.next = e),
                            (this._drawLast = e),
                            (this._drawFirst = this._drawFirst || this._drawLast);
                    },
                    _addPath: function (t) {
                        this._requestRedraw(t);
                    },
                    _removePath: function (t) {
                        var e = t._order,
                            n = e.next,
                            i = e.prev;
                        n ? (n.prev = i) : (this._drawLast = i),
                            i ? (i.next = n) : (this._drawFirst = n),
                            delete t._order,
                            delete this._layers[r(t)],
                            this._requestRedraw(t);
                    },
                    _updatePath: function (t) {
                        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
                    },
                    _updateStyle: function (t) {
                        this._updateDashArray(t), this._requestRedraw(t);
                    },
                    _updateDashArray: function (t) {
                        if ("string" == typeof t.options.dashArray) {
                            var e,
                                n,
                                i = t.options.dashArray.split(/[, ]+/),
                                o = [];
                            for (n = 0; n < i.length; n++) {
                                if (((e = Number(i[n])), isNaN(e))) return;
                                o.push(e);
                            }
                            t.options._dashArray = o;
                        } else t.options._dashArray = t.options.dashArray;
                    },
                    _requestRedraw: function (t) {
                        this._map &&
                            (this._extendRedrawBounds(t),
                            (this._redrawRequest = this._redrawRequest || A(this._redraw, this)));
                    },
                    _extendRedrawBounds: function (t) {
                        if (t._pxBounds) {
                            var e = (t.options.weight || 0) + 1;
                            (this._redrawBounds = this._redrawBounds || new z()),
                                this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                                this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
                        }
                    },
                    _redraw: function () {
                        (this._redrawRequest = null),
                            this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
                            this._clear(),
                            this._draw(),
                            (this._redrawBounds = null);
                    },
                    _clear: function () {
                        var t = this._redrawBounds;
                        if (t) {
                            var e = t.getSize();
                            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
                        } else
                            this._ctx.save(),
                                this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                                this._ctx.clearRect(0, 0, this._container.width, this._container.height),
                                this._ctx.restore();
                    },
                    _draw: function () {
                        var t,
                            e = this._redrawBounds;
                        if ((this._ctx.save(), e)) {
                            var n = e.getSize();
                            this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, n.x, n.y), this._ctx.clip();
                        }
                        this._drawing = !0;
                        for (var i = this._drawFirst; i; i = i.next)
                            (t = i.layer), (!e || (t._pxBounds && t._pxBounds.intersects(e))) && t._updatePath();
                        (this._drawing = !1), this._ctx.restore();
                    },
                    _updatePoly: function (t, e) {
                        if (this._drawing) {
                            var n,
                                i,
                                o,
                                r,
                                a = t._parts,
                                s = a.length,
                                l = this._ctx;
                            if (s) {
                                for (l.beginPath(), n = 0; n < s; n++) {
                                    for (i = 0, o = a[n].length; i < o; i++)
                                        (r = a[n][i]), l[i ? "lineTo" : "moveTo"](r.x, r.y);
                                    e && l.closePath();
                                }
                                this._fillStroke(l, t);
                            }
                        }
                    },
                    _updateCircle: function (t) {
                        if (this._drawing && !t._empty()) {
                            var e = t._point,
                                n = this._ctx,
                                i = Math.max(Math.round(t._radius), 1),
                                o = (Math.max(Math.round(t._radiusY), 1) || i) / i;
                            1 !== o && (n.save(), n.scale(1, o)),
                                n.beginPath(),
                                n.arc(e.x, e.y / o, i, 0, 2 * Math.PI, !1),
                                1 !== o && n.restore(),
                                this._fillStroke(n, t);
                        }
                    },
                    _fillStroke: function (t, e) {
                        var n = e.options;
                        n.fill &&
                            ((t.globalAlpha = n.fillOpacity),
                            (t.fillStyle = n.fillColor || n.color),
                            t.fill(n.fillRule || "evenodd")),
                            n.stroke &&
                                0 !== n.weight &&
                                (t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []),
                                (t.globalAlpha = n.opacity),
                                (t.lineWidth = n.weight),
                                (t.strokeStyle = n.color),
                                (t.lineCap = n.lineCap),
                                (t.lineJoin = n.lineJoin),
                                t.stroke());
                    },
                    _onClick: function (t) {
                        for (var e, n, i = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                            (e = o.layer).options.interactive &&
                                e._containsPoint(i) &&
                                (("click" !== t.type && "preclick" === t.type) || !this._map._draggableMoved(e)) &&
                                (n = e);
                        n && (Re(t), this._fireEvent([n], t));
                    },
                    _onMouseMove: function (t) {
                        if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                            var e = this._map.mouseEventToLayerPoint(t);
                            this._handleMouseHover(t, e);
                        }
                    },
                    _handleMouseOut: function (t) {
                        var e = this._hoveredLayer;
                        e &&
                            (le(this._container, "leaflet-interactive"),
                            this._fireEvent([e], t, "mouseout"),
                            (this._hoveredLayer = null),
                            (this._mouseHoverThrottled = !1));
                    },
                    _handleMouseHover: function (t, e) {
                        if (!this._mouseHoverThrottled) {
                            for (var n, o, r = this._drawFirst; r; r = r.next)
                                (n = r.layer).options.interactive && n._containsPoint(e) && (o = n);
                            o !== this._hoveredLayer &&
                                (this._handleMouseOut(t),
                                o &&
                                    (se(this._container, "leaflet-interactive"),
                                    this._fireEvent([o], t, "mouseover"),
                                    (this._hoveredLayer = o))),
                                this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
                                (this._mouseHoverThrottled = !0),
                                setTimeout(
                                    i(function () {
                                        this._mouseHoverThrottled = !1;
                                    }, this),
                                    32
                                );
                        }
                    },
                    _fireEvent: function (t, e, n) {
                        this._map._fireDOMEvent(e, n || e.type, t);
                    },
                    _bringToFront: function (t) {
                        var e = t._order;
                        if (e) {
                            var n = e.next,
                                i = e.prev;
                            n &&
                                ((n.prev = i),
                                i ? (i.next = n) : n && (this._drawFirst = n),
                                (e.prev = this._drawLast),
                                (this._drawLast.next = e),
                                (e.next = null),
                                (this._drawLast = e),
                                this._requestRedraw(t));
                        }
                    },
                    _bringToBack: function (t) {
                        var e = t._order;
                        if (e) {
                            var n = e.next,
                                i = e.prev;
                            i &&
                                ((i.next = n),
                                n ? (n.prev = i) : i && (this._drawLast = i),
                                (e.prev = null),
                                (e.next = this._drawFirst),
                                (this._drawFirst.prev = e),
                                (this._drawFirst = e),
                                this._requestRedraw(t));
                        }
                    },
                });
            function ai(t) {
                return Tt ? new ri(t) : null;
            }
            var si = (function () {
                    try {
                        return (
                            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                            function (t) {
                                return document.createElement("<lvml:" + t + ' class="lvml">');
                            }
                        );
                    } catch (t) {
                        return function (t) {
                            return document.createElement(
                                "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
                            );
                        };
                    }
                })(),
                li = {
                    _initContainer: function () {
                        this._container = ee("div", "leaflet-vml-container");
                    },
                    _update: function () {
                        this._map._animatingZoom || (oi.prototype._update.call(this), this.fire("update"));
                    },
                    _initPath: function (t) {
                        var e = (t._container = si("shape"));
                        se(e, "leaflet-vml-shape " + (this.options.className || "")),
                            (e.coordsize = "1 1"),
                            (t._path = si("path")),
                            e.appendChild(t._path),
                            this._updateStyle(t),
                            (this._layers[r(t)] = t);
                    },
                    _addPath: function (t) {
                        var e = t._container;
                        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
                    },
                    _removePath: function (t) {
                        var e = t._container;
                        ne(e), t.removeInteractiveTarget(e), delete this._layers[r(t)];
                    },
                    _updateStyle: function (t) {
                        var e = t._stroke,
                            n = t._fill,
                            i = t.options,
                            o = t._container;
                        (o.stroked = !!i.stroke),
                            (o.filled = !!i.fill),
                            i.stroke
                                ? (e || (e = t._stroke = si("stroke")),
                                  o.appendChild(e),
                                  (e.weight = i.weight + "px"),
                                  (e.color = i.color),
                                  (e.opacity = i.opacity),
                                  i.dashArray
                                      ? (e.dashStyle = m(i.dashArray)
                                            ? i.dashArray.join(" ")
                                            : i.dashArray.replace(/( *, *)/g, " "))
                                      : (e.dashStyle = ""),
                                  (e.endcap = i.lineCap.replace("butt", "flat")),
                                  (e.joinstyle = i.lineJoin))
                                : e && (o.removeChild(e), (t._stroke = null)),
                            i.fill
                                ? (n || (n = t._fill = si("fill")),
                                  o.appendChild(n),
                                  (n.color = i.fillColor || i.color),
                                  (n.opacity = i.fillOpacity))
                                : n && (o.removeChild(n), (t._fill = null));
                    },
                    _updateCircle: function (t) {
                        var e = t._point.round(),
                            n = Math.round(t._radius),
                            i = Math.round(t._radiusY || n);
                        this._setPath(
                            t,
                            t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + i + " 0,23592600"
                        );
                    },
                    _setPath: function (t, e) {
                        t._path.v = e;
                    },
                    _bringToFront: function (t) {
                        oe(t._container);
                    },
                    _bringToBack: function (t) {
                        re(t._container);
                    },
                },
                hi = St ? si : Y,
                ui = oi.extend({
                    getEvents: function () {
                        var t = oi.prototype.getEvents.call(this);
                        return (t.zoomstart = this._onZoomStart), t;
                    },
                    _initContainer: function () {
                        (this._container = hi("svg")),
                            this._container.setAttribute("pointer-events", "none"),
                            (this._rootGroup = hi("g")),
                            this._container.appendChild(this._rootGroup);
                    },
                    _destroyContainer: function () {
                        ne(this._container),
                            Te(this._container),
                            delete this._container,
                            delete this._rootGroup,
                            delete this._svgSize;
                    },
                    _onZoomStart: function () {
                        this._update();
                    },
                    _update: function () {
                        if (!this._map._animatingZoom || !this._bounds) {
                            oi.prototype._update.call(this);
                            var t = this._bounds,
                                e = t.getSize(),
                                n = this._container;
                            (this._svgSize && this._svgSize.equals(e)) ||
                                ((this._svgSize = e), n.setAttribute("width", e.x), n.setAttribute("height", e.y)),
                                pe(n, t.min),
                                n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
                                this.fire("update");
                        }
                    },
                    _initPath: function (t) {
                        var e = (t._path = hi("path"));
                        t.options.className && se(e, t.options.className),
                            t.options.interactive && se(e, "leaflet-interactive"),
                            this._updateStyle(t),
                            (this._layers[r(t)] = t);
                    },
                    _addPath: function (t) {
                        this._rootGroup || this._initContainer(),
                            this._rootGroup.appendChild(t._path),
                            t.addInteractiveTarget(t._path);
                    },
                    _removePath: function (t) {
                        ne(t._path), t.removeInteractiveTarget(t._path), delete this._layers[r(t)];
                    },
                    _updatePath: function (t) {
                        t._project(), t._update();
                    },
                    _updateStyle: function (t) {
                        var e = t._path,
                            n = t.options;
                        e &&
                            (n.stroke
                                ? (e.setAttribute("stroke", n.color),
                                  e.setAttribute("stroke-opacity", n.opacity),
                                  e.setAttribute("stroke-width", n.weight),
                                  e.setAttribute("stroke-linecap", n.lineCap),
                                  e.setAttribute("stroke-linejoin", n.lineJoin),
                                  n.dashArray
                                      ? e.setAttribute("stroke-dasharray", n.dashArray)
                                      : e.removeAttribute("stroke-dasharray"),
                                  n.dashOffset
                                      ? e.setAttribute("stroke-dashoffset", n.dashOffset)
                                      : e.removeAttribute("stroke-dashoffset"))
                                : e.setAttribute("stroke", "none"),
                            n.fill
                                ? (e.setAttribute("fill", n.fillColor || n.color),
                                  e.setAttribute("fill-opacity", n.fillOpacity),
                                  e.setAttribute("fill-rule", n.fillRule || "evenodd"))
                                : e.setAttribute("fill", "none"));
                    },
                    _updatePoly: function (t, e) {
                        this._setPath(t, Q(t._parts, e));
                    },
                    _updateCircle: function (t) {
                        var e = t._point,
                            n = Math.max(Math.round(t._radius), 1),
                            i = "a" + n + "," + (Math.max(Math.round(t._radiusY), 1) || n) + " 0 1,0 ",
                            o = t._empty()
                                ? "M0 0"
                                : "M" + (e.x - n) + "," + e.y + i + 2 * n + ",0 " + i + 2 * -n + ",0 ";
                        this._setPath(t, o);
                    },
                    _setPath: function (t, e) {
                        t._path.setAttribute("d", e);
                    },
                    _bringToFront: function (t) {
                        oe(t._path);
                    },
                    _bringToBack: function (t) {
                        re(t._path);
                    },
                });
            function ci(t) {
                return Ct || St ? new ui(t) : null;
            }
            St && ui.include(li),
                Ue.include({
                    getRenderer: function (t) {
                        var e =
                            t.options.renderer ||
                            this._getPaneRenderer(t.options.pane) ||
                            this.options.renderer ||
                            this._renderer;
                        return (
                            e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e
                        );
                    },
                    _getPaneRenderer: function (t) {
                        if ("overlayPane" === t || void 0 === t) return !1;
                        var e = this._paneRenderers[t];
                        return (
                            void 0 === e && ((e = this._createRenderer({ pane: t })), (this._paneRenderers[t] = e)), e
                        );
                    },
                    _createRenderer: function (t) {
                        return (this.options.preferCanvas && ai(t)) || ci(t);
                    },
                });
            var di = zn.extend({
                initialize: function (t, e) {
                    zn.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
                },
                setBounds: function (t) {
                    return this.setLatLngs(this._boundsToLatLngs(t));
                },
                _boundsToLatLngs: function (t) {
                    return [(t = F(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
                },
            });
            (ui.create = hi),
                (ui.pointsToPath = Q),
                (In.geometryToLayer = Dn),
                (In.coordsToLatLng = jn),
                (In.coordsToLatLngs = Zn),
                (In.latLngToCoords = Rn),
                (In.latLngsToCoords = Nn),
                (In.getFeature = Vn),
                (In.asFeature = Hn),
                Ue.mergeOptions({ boxZoom: !0 });
            var fi = Xe.extend({
                initialize: function (t) {
                    (this._map = t),
                        (this._container = t._container),
                        (this._pane = t._panes.overlayPane),
                        (this._resetStateTimeout = 0),
                        t.on("unload", this._destroy, this);
                },
                addHooks: function () {
                    Pe(this._container, "mousedown", this._onMouseDown, this);
                },
                removeHooks: function () {
                    Te(this._container, "mousedown", this._onMouseDown, this);
                },
                moved: function () {
                    return this._moved;
                },
                _destroy: function () {
                    ne(this._pane), delete this._pane;
                },
                _resetState: function () {
                    (this._resetStateTimeout = 0), (this._moved = !1);
                },
                _clearDeferredResetState: function () {
                    0 !== this._resetStateTimeout &&
                        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
                },
                _onMouseDown: function (t) {
                    if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
                    this._clearDeferredResetState(),
                        this._resetState(),
                        Vt(),
                        ge(),
                        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
                        Pe(
                            document,
                            {
                                contextmenu: Ie,
                                mousemove: this._onMouseMove,
                                mouseup: this._onMouseUp,
                                keydown: this._onKeyDown,
                            },
                            this
                        );
                },
                _onMouseMove: function (t) {
                    this._moved ||
                        ((this._moved = !0),
                        (this._box = ee("div", "leaflet-zoom-box", this._container)),
                        se(this._container, "leaflet-crosshair"),
                        this._map.fire("boxzoomstart")),
                        (this._point = this._map.mouseEventToContainerPoint(t));
                    var e = new z(this._point, this._startPoint),
                        n = e.getSize();
                    pe(this._box, e.min), (this._box.style.width = n.x + "px"), (this._box.style.height = n.y + "px");
                },
                _finish: function () {
                    this._moved && (ne(this._box), le(this._container, "leaflet-crosshair")),
                        Ht(),
                        ve(),
                        Te(
                            document,
                            {
                                contextmenu: Ie,
                                mousemove: this._onMouseMove,
                                mouseup: this._onMouseUp,
                                keydown: this._onKeyDown,
                            },
                            this
                        );
                },
                _onMouseUp: function (t) {
                    if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                        this._clearDeferredResetState(),
                            (this._resetStateTimeout = setTimeout(i(this._resetState, this), 0));
                        var e = new D(
                            this._map.containerPointToLatLng(this._startPoint),
                            this._map.containerPointToLatLng(this._point)
                        );
                        this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
                    }
                },
                _onKeyDown: function (t) {
                    27 === t.keyCode && this._finish();
                },
            });
            Ue.addInitHook("addHandler", "boxZoom", fi), Ue.mergeOptions({ doubleClickZoom: !0 });
            var pi = Xe.extend({
                addHooks: function () {
                    this._map.on("dblclick", this._onDoubleClick, this);
                },
                removeHooks: function () {
                    this._map.off("dblclick", this._onDoubleClick, this);
                },
                _onDoubleClick: function (t) {
                    var e = this._map,
                        n = e.getZoom(),
                        i = e.options.zoomDelta,
                        o = t.originalEvent.shiftKey ? n - i : n + i;
                    "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
                },
            });
            Ue.addInitHook("addHandler", "doubleClickZoom", pi),
                Ue.mergeOptions({
                    dragging: !0,
                    inertia: !nt,
                    inertiaDeceleration: 3400,
                    inertiaMaxSpeed: 1 / 0,
                    easeLinearity: 0.2,
                    worldCopyJump: !1,
                    maxBoundsViscosity: 0,
                });
            var _i = Xe.extend({
                addHooks: function () {
                    if (!this._draggable) {
                        var t = this._map;
                        (this._draggable = new rn(t._mapPane, t._container)),
                            this._draggable.on(
                                { dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd },
                                this
                            ),
                            this._draggable.on("predrag", this._onPreDragLimit, this),
                            t.options.worldCopyJump &&
                                (this._draggable.on("predrag", this._onPreDragWrap, this),
                                t.on("zoomend", this._onZoomEnd, this),
                                t.whenReady(this._onZoomEnd, this));
                    }
                    se(this._map._container, "leaflet-grab leaflet-touch-drag"),
                        this._draggable.enable(),
                        (this._positions = []),
                        (this._times = []);
                },
                removeHooks: function () {
                    le(this._map._container, "leaflet-grab"),
                        le(this._map._container, "leaflet-touch-drag"),
                        this._draggable.disable();
                },
                moved: function () {
                    return this._draggable && this._draggable._moved;
                },
                moving: function () {
                    return this._draggable && this._draggable._moving;
                },
                _onDragStart: function () {
                    var t = this._map;
                    if ((t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
                        var e = F(this._map.options.maxBounds);
                        (this._offsetLimit = I(
                            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
                            this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
                        )),
                            (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
                    } else this._offsetLimit = null;
                    t.fire("movestart").fire("dragstart"),
                        t.options.inertia && ((this._positions = []), (this._times = []));
                },
                _onDrag: function (t) {
                    if (this._map.options.inertia) {
                        var e = (this._lastTime = +new Date()),
                            n = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
                        this._positions.push(n), this._times.push(e), this._prunePositions(e);
                    }
                    this._map.fire("move", t).fire("drag", t);
                },
                _prunePositions: function (t) {
                    for (; this._positions.length > 1 && t - this._times[0] > 50; )
                        this._positions.shift(), this._times.shift();
                },
                _onZoomEnd: function () {
                    var t = this._map.getSize().divideBy(2),
                        e = this._map.latLngToLayerPoint([0, 0]);
                    (this._initialWorldOffset = e.subtract(t).x),
                        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
                },
                _viscousLimit: function (t, e) {
                    return t - (t - e) * this._viscosity;
                },
                _onPreDragLimit: function () {
                    if (this._viscosity && this._offsetLimit) {
                        var t = this._draggable._newPos.subtract(this._draggable._startPos),
                            e = this._offsetLimit;
                        t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                            (this._draggable._newPos = this._draggable._startPos.add(t));
                    }
                },
                _onPreDragWrap: function () {
                    var t = this._worldWidth,
                        e = Math.round(t / 2),
                        n = this._initialWorldOffset,
                        i = this._draggable._newPos.x,
                        o = ((i - e + n) % t) + e - n,
                        r = ((i + e + n) % t) - e - n,
                        a = Math.abs(o + n) < Math.abs(r + n) ? o : r;
                    (this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = a);
                },
                _onDragEnd: function (t) {
                    var e = this._map,
                        n = e.options,
                        i = !n.inertia || this._times.length < 2;
                    if ((e.fire("dragend", t), i)) e.fire("moveend");
                    else {
                        this._prunePositions(+new Date());
                        var o = this._lastPos.subtract(this._positions[0]),
                            r = (this._lastTime - this._times[0]) / 1e3,
                            a = n.easeLinearity,
                            s = o.multiplyBy(a / r),
                            l = s.distanceTo([0, 0]),
                            h = Math.min(n.inertiaMaxSpeed, l),
                            u = s.multiplyBy(h / l),
                            c = h / (n.inertiaDeceleration * a),
                            d = u.multiplyBy(-c / 2).round();
                        d.x || d.y
                            ? ((d = e._limitOffset(d, e.options.maxBounds)),
                              A(function () {
                                  e.panBy(d, { duration: c, easeLinearity: a, noMoveStart: !0, animate: !0 });
                              }))
                            : e.fire("moveend");
                    }
                },
            });
            Ue.addInitHook("addHandler", "dragging", _i), Ue.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
            var mi = Xe.extend({
                keyCodes: {
                    left: [37],
                    right: [39],
                    down: [40],
                    up: [38],
                    zoomIn: [187, 107, 61, 171],
                    zoomOut: [189, 109, 54, 173],
                },
                initialize: function (t) {
                    (this._map = t),
                        this._setPanDelta(t.options.keyboardPanDelta),
                        this._setZoomDelta(t.options.zoomDelta);
                },
                addHooks: function () {
                    var t = this._map._container;
                    t.tabIndex <= 0 && (t.tabIndex = "0"),
                        Pe(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this),
                        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
                },
                removeHooks: function () {
                    this._removeHooks(),
                        Te(
                            this._map._container,
                            { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown },
                            this
                        ),
                        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
                },
                _onMouseDown: function () {
                    if (!this._focused) {
                        var t = document.body,
                            e = document.documentElement,
                            n = t.scrollTop || e.scrollTop,
                            i = t.scrollLeft || e.scrollLeft;
                        this._map._container.focus(), window.scrollTo(i, n);
                    }
                },
                _onFocus: function () {
                    (this._focused = !0), this._map.fire("focus");
                },
                _onBlur: function () {
                    (this._focused = !1), this._map.fire("blur");
                },
                _setPanDelta: function (t) {
                    var e,
                        n,
                        i = (this._panKeys = {}),
                        o = this.keyCodes;
                    for (e = 0, n = o.left.length; e < n; e++) i[o.left[e]] = [-1 * t, 0];
                    for (e = 0, n = o.right.length; e < n; e++) i[o.right[e]] = [t, 0];
                    for (e = 0, n = o.down.length; e < n; e++) i[o.down[e]] = [0, t];
                    for (e = 0, n = o.up.length; e < n; e++) i[o.up[e]] = [0, -1 * t];
                },
                _setZoomDelta: function (t) {
                    var e,
                        n,
                        i = (this._zoomKeys = {}),
                        o = this.keyCodes;
                    for (e = 0, n = o.zoomIn.length; e < n; e++) i[o.zoomIn[e]] = t;
                    for (e = 0, n = o.zoomOut.length; e < n; e++) i[o.zoomOut[e]] = -t;
                },
                _addHooks: function () {
                    Pe(document, "keydown", this._onKeyDown, this);
                },
                _removeHooks: function () {
                    Te(document, "keydown", this._onKeyDown, this);
                },
                _onKeyDown: function (t) {
                    if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                        var e,
                            n = t.keyCode,
                            i = this._map;
                        if (n in this._panKeys)
                            (i._panAnim && i._panAnim._inProgress) ||
                                ((e = this._panKeys[n]),
                                t.shiftKey && (e = B(e).multiplyBy(3)),
                                i.panBy(e),
                                i.options.maxBounds && i.panInsideBounds(i.options.maxBounds));
                        else if (n in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                        else {
                            if (27 !== n || !i._popup || !i._popup.options.closeOnEscapeKey) return;
                            i.closePopup();
                        }
                        Ie(t);
                    }
                },
            });
            Ue.addInitHook("addHandler", "keyboard", mi),
                Ue.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
            var gi = Xe.extend({
                addHooks: function () {
                    Pe(this._map._container, "wheel", this._onWheelScroll, this), (this._delta = 0);
                },
                removeHooks: function () {
                    Te(this._map._container, "wheel", this._onWheelScroll, this);
                },
                _onWheelScroll: function (t) {
                    var e = je(t),
                        n = this._map.options.wheelDebounceTime;
                    (this._delta += e),
                        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
                        this._startTime || (this._startTime = +new Date());
                    var o = Math.max(n - (+new Date() - this._startTime), 0);
                    clearTimeout(this._timer), (this._timer = setTimeout(i(this._performZoom, this), o)), Ie(t);
                },
                _performZoom: function () {
                    var t = this._map,
                        e = t.getZoom(),
                        n = this._map.options.zoomSnap || 0;
                    t._stop();
                    var i = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                        o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(i))))) / Math.LN2,
                        r = n ? Math.ceil(o / n) * n : o,
                        a = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
                    (this._delta = 0),
                        (this._startTime = null),
                        a &&
                            ("center" === t.options.scrollWheelZoom
                                ? t.setZoom(e + a)
                                : t.setZoomAround(this._lastMousePos, e + a));
                },
            });
            Ue.addInitHook("addHandler", "scrollWheelZoom", gi), Ue.mergeOptions({ tap: !0, tapTolerance: 15 });
            var vi = Xe.extend({
                addHooks: function () {
                    Pe(this._map._container, "touchstart", this._onDown, this);
                },
                removeHooks: function () {
                    Te(this._map._container, "touchstart", this._onDown, this);
                },
                _onDown: function (t) {
                    if (t.touches) {
                        if ((ze(t), (this._fireClick = !0), t.touches.length > 1))
                            return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
                        var e = t.touches[0],
                            n = e.target;
                        (this._startPos = this._newPos = new E(e.clientX, e.clientY)),
                            n.tagName && "a" === n.tagName.toLowerCase() && se(n, "leaflet-active"),
                            (this._holdTimeout = setTimeout(
                                i(function () {
                                    this._isTapValid() &&
                                        ((this._fireClick = !1), this._onUp(), this._simulateEvent("contextmenu", e));
                                }, this),
                                1e3
                            )),
                            this._simulateEvent("mousedown", e),
                            Pe(document, { touchmove: this._onMove, touchend: this._onUp }, this);
                    }
                },
                _onUp: function (t) {
                    if (
                        (clearTimeout(this._holdTimeout),
                        Te(document, { touchmove: this._onMove, touchend: this._onUp }, this),
                        this._fireClick && t && t.changedTouches)
                    ) {
                        var e = t.changedTouches[0],
                            n = e.target;
                        n && n.tagName && "a" === n.tagName.toLowerCase() && le(n, "leaflet-active"),
                            this._simulateEvent("mouseup", e),
                            this._isTapValid() && this._simulateEvent("click", e);
                    }
                },
                _isTapValid: function () {
                    return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
                },
                _onMove: function (t) {
                    var e = t.touches[0];
                    (this._newPos = new E(e.clientX, e.clientY)), this._simulateEvent("mousemove", e);
                },
                _simulateEvent: function (t, e) {
                    var n = document.createEvent("MouseEvents");
                    (n._simulated = !0),
                        (e.target._simulatedClick = !0),
                        n.initMouseEvent(
                            t,
                            !0,
                            !0,
                            window,
                            1,
                            e.screenX,
                            e.screenY,
                            e.clientX,
                            e.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                        ),
                        e.target.dispatchEvent(n);
                },
            });
            !xt || (bt && !lt) || Ue.addInitHook("addHandler", "tap", vi),
                Ue.mergeOptions({ touchZoom: xt && !nt, bounceAtZoomLimits: !0 });
            var yi = Xe.extend({
                addHooks: function () {
                    se(this._map._container, "leaflet-touch-zoom"),
                        Pe(this._map._container, "touchstart", this._onTouchStart, this);
                },
                removeHooks: function () {
                    le(this._map._container, "leaflet-touch-zoom"),
                        Te(this._map._container, "touchstart", this._onTouchStart, this);
                },
                _onTouchStart: function (t) {
                    var e = this._map;
                    if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                        var n = e.mouseEventToContainerPoint(t.touches[0]),
                            i = e.mouseEventToContainerPoint(t.touches[1]);
                        (this._centerPoint = e.getSize()._divideBy(2)),
                            (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
                            "center" !== e.options.touchZoom &&
                                (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))),
                            (this._startDist = n.distanceTo(i)),
                            (this._startZoom = e.getZoom()),
                            (this._moved = !1),
                            (this._zooming = !0),
                            e._stop(),
                            Pe(document, "touchmove", this._onTouchMove, this),
                            Pe(document, "touchend", this._onTouchEnd, this),
                            ze(t);
                    }
                },
                _onTouchMove: function (t) {
                    if (t.touches && 2 === t.touches.length && this._zooming) {
                        var e = this._map,
                            n = e.mouseEventToContainerPoint(t.touches[0]),
                            o = e.mouseEventToContainerPoint(t.touches[1]),
                            r = n.distanceTo(o) / this._startDist;
                        if (
                            ((this._zoom = e.getScaleZoom(r, this._startZoom)),
                            !e.options.bounceAtZoomLimits &&
                                ((this._zoom < e.getMinZoom() && r < 1) || (this._zoom > e.getMaxZoom() && r > 1)) &&
                                (this._zoom = e._limitZoom(this._zoom)),
                            "center" === e.options.touchZoom)
                        ) {
                            if (((this._center = this._startLatLng), 1 === r)) return;
                        } else {
                            var a = n._add(o)._divideBy(2)._subtract(this._centerPoint);
                            if (1 === r && 0 === a.x && 0 === a.y) return;
                            this._center = e.unproject(
                                e.project(this._pinchStartLatLng, this._zoom).subtract(a),
                                this._zoom
                            );
                        }
                        this._moved || (e._moveStart(!0, !1), (this._moved = !0)), T(this._animRequest);
                        var s = i(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 });
                        (this._animRequest = A(s, this, !0)), ze(t);
                    }
                },
                _onTouchEnd: function () {
                    this._moved && this._zooming
                        ? ((this._zooming = !1),
                          T(this._animRequest),
                          Te(document, "touchmove", this._onTouchMove, this),
                          Te(document, "touchend", this._onTouchEnd, this),
                          this._map.options.zoomAnimation
                              ? this._map._animateZoom(
                                    this._center,
                                    this._map._limitZoom(this._zoom),
                                    !0,
                                    this._map.options.zoomSnap
                                )
                              : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
                        : (this._zooming = !1);
                },
            });
            Ue.addInitHook("addHandler", "touchZoom", yi),
                (Ue.BoxZoom = fi),
                (Ue.DoubleClickZoom = pi),
                (Ue.Drag = _i),
                (Ue.Keyboard = mi),
                (Ue.ScrollWheelZoom = gi),
                (Ue.Tap = vi),
                (Ue.TouchZoom = yi),
                (t.version = "1.7.1"),
                (t.Control = We),
                (t.control = qe),
                (t.Browser = kt),
                (t.Evented = k),
                (t.Mixin = tn),
                (t.Util = C),
                (t.Class = S),
                (t.Handler = Xe),
                (t.extend = e),
                (t.bind = i),
                (t.stamp = r),
                (t.setOptions = d),
                (t.DomEvent = He),
                (t.DomUtil = Le),
                (t.PosAnimation = Ge),
                (t.Draggable = rn),
                (t.LineUtil = pn),
                (t.PolyUtil = mn),
                (t.Point = E),
                (t.point = B),
                (t.Bounds = z),
                (t.bounds = I),
                (t.Transformation = G),
                (t.transformation = U),
                (t.Projection = yn),
                (t.LatLng = j),
                (t.latLng = Z),
                (t.LatLngBounds = D),
                (t.latLngBounds = F),
                (t.CRS = N),
                (t.GeoJSON = In),
                (t.geoJSON = Un),
                (t.geoJson = Wn),
                (t.Layer = Ln),
                (t.LayerGroup = Pn),
                (t.layerGroup = function (t, e) {
                    return new Pn(t, e);
                }),
                (t.FeatureGroup = An),
                (t.featureGroup = function (t, e) {
                    return new An(t, e);
                }),
                (t.ImageOverlay = qn),
                (t.imageOverlay = function (t, e, n) {
                    return new qn(t, e, n);
                }),
                (t.VideoOverlay = Yn),
                (t.videoOverlay = function (t, e, n) {
                    return new Yn(t, e, n);
                }),
                (t.SVGOverlay = Qn),
                (t.svgOverlay = function (t, e, n) {
                    return new Qn(t, e, n);
                }),
                (t.DivOverlay = Jn),
                (t.Popup = Kn),
                (t.popup = function (t, e) {
                    return new Kn(t, e);
                }),
                (t.Tooltip = Xn),
                (t.tooltip = function (t, e) {
                    return new Xn(t, e);
                }),
                (t.Icon = Tn),
                (t.icon = function (t) {
                    return new Tn(t);
                }),
                (t.DivIcon = $n),
                (t.divIcon = function (t) {
                    return new $n(t);
                }),
                (t.Marker = Mn),
                (t.marker = function (t, e) {
                    return new Mn(t, e);
                }),
                (t.TileLayer = ei),
                (t.tileLayer = ni),
                (t.GridLayer = ti),
                (t.gridLayer = function (t) {
                    return new ti(t);
                }),
                (t.SVG = ui),
                (t.svg = ci),
                (t.Renderer = oi),
                (t.Canvas = ri),
                (t.canvas = ai),
                (t.Path = kn),
                (t.CircleMarker = En),
                (t.circleMarker = function (t, e) {
                    return new En(t, e);
                }),
                (t.Circle = On),
                (t.circle = function (t, e, n) {
                    return new On(t, e, n);
                }),
                (t.Polyline = Bn),
                (t.polyline = function (t, e) {
                    return new Bn(t, e);
                }),
                (t.Polygon = zn),
                (t.polygon = function (t, e) {
                    return new zn(t, e);
                }),
                (t.Rectangle = di),
                (t.rectangle = function (t, e) {
                    return new di(t, e);
                }),
                (t.Map = Ue),
                (t.map = function (t, e) {
                    return new Ue(t, e);
                });
            var bi = window.L;
            (t.noConflict = function () {
                return (window.L = bi), this;
            }),
                (window.L = t);
        })(e);
    },
    function (t, e, n) {
        var i = n(4).document;
        t.exports = i && i.documentElement;
    },
    function (t, e, n) {
        var i = n(81),
            o = n(7)("iterator"),
            r = n(16);
        t.exports = n(3).getIteratorMethod = function (t) {
            if (null != t) return t[o] || t["@@iterator"] || r[i(t)];
        };
    },
    function (t, e, n) {
        var i = n(28),
            o = n(7)("toStringTag"),
            r =
                "Arguments" ==
                i(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = function (t) {
            var e, n, a;
            return void 0 === t
                ? "Undefined"
                : null === t
                ? "Null"
                : "string" ==
                  typeof (n = (function (t, e) {
                      try {
                          return t[e];
                      } catch (t) {}
                  })((e = Object(t)), o))
                ? n
                : r
                ? i(e)
                : "Object" == (a = i(e)) && "function" == typeof e.callee
                ? "Arguments"
                : a;
        };
    },
    function (t, e, n) {
        t.exports = { default: n(89), __esModule: !0 };
    },
    function (t, e, n) {
        var i = n(14),
            o = n(21),
            r = n(92)(!1),
            a = n(30)("IE_PROTO");
        t.exports = function (t, e) {
            var n,
                s = o(t),
                l = 0,
                h = [];
            for (n in s) n != a && i(s, n) && h.push(n);
            for (; e.length > l; ) i(s, (n = e[l++])) && (~r(h, n) || h.push(n));
            return h;
        };
    },
    function (t, e, n) {
        t.exports =
            !n(12) &&
            !n(22)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(40)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        t.exports = n(10);
    },
    function (t, e, n) {
        var i = n(9),
            o = n(162),
            r = n(44),
            a = n(30)("IE_PROTO"),
            s = function () {},
            l = function () {
                var t,
                    e = n(40)("iframe"),
                    i = r.length;
                for (
                    e.style.display = "none",
                        n(79).appendChild(e),
                        e.src = "javascript:",
                        (t = e.contentWindow.document).open(),
                        t.write("<script>document.F=Object</script>"),
                        t.close(),
                        l = t.F;
                    i--;

                )
                    delete l.prototype[r[i]];
                return l();
            };
        t.exports =
            Object.create ||
            function (t, e) {
                var n;
                return (
                    null !== t ? ((s.prototype = i(t)), (n = new s()), (s.prototype = null), (n[a] = t)) : (n = l()),
                    void 0 === e ? n : o(n, e)
                );
            };
    },
    function (t, e, n) {
        "use strict";
        var i = u(n(82));
        n(95);
        var o = u(n(78)),
            r = u(n(97)),
            a = u(n(99)),
            s = u(n(120)),
            l = u(n(151)),
            h = u(n(155));
        function u(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function c(t) {
            (0, i.default)(t).forEach(function (t) {
                console.log("    ", t);
            });
        }
        o.default.extend(o.default, r.default),
            (o.default.DataSource = a.default),
            o.default.extend(o.default, s.default),
            o.default.extend(o.default.control, l.default),
            o.default.extend(o.default.Util, h.default),
            console.log("---------------------------------------"),
            console.log("leaflet:", o.default.version),
            console.log("leaflet-met:", "2.0"),
            console.log("---------------------------------------"),
            console.log("图层扩展"),
            c(s.default),
            console.log("---------------------------------------"),
            console.log("控件扩展"),
            c(l.default),
            console.log("---------------------------------------"),
            console.log("数据源扩展"),
            c(a.default),
            console.log("---------------------------------------"),
            console.log("工具类"),
            c(h.default),
            console.log("---------------------------------------"),
            (document.oncontextmenu = function () {
                return !1;
            });
    },
    function (t, e, n) {
        t.exports = { default: n(138), __esModule: !0 };
    },
    function (t, e, n) {
        n(90), (t.exports = n(3).Object.keys);
    },
    function (t, e, n) {
        var i = n(42),
            o = n(37);
        n(94)("keys", function () {
            return function (t) {
                return o(i(t));
            };
        });
    },
    function (t, e, n) {
        var i = n(28);
        t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (t) {
                  return "String" == i(t) ? t.split("") : Object(t);
              };
    },
    function (t, e, n) {
        var i = n(21),
            o = n(77),
            r = n(93);
        t.exports = function (t) {
            return function (e, n, a) {
                var s,
                    l = i(e),
                    h = o(l.length),
                    u = r(a, h);
                if (t && n != n) {
                    for (; h > u; ) if ((s = l[u++]) != s) return !0;
                } else for (; h > u; u++) if ((t || u in l) && l[u] === n) return t || u || 0;
                return !t && -1;
            };
        };
    },
    function (t, e, n) {
        var i = n(29),
            o = Math.max,
            r = Math.min;
        t.exports = function (t, e) {
            return (t = i(t)) < 0 ? o(t + e, 0) : r(t, e);
        };
    },
    function (t, e, n) {
        var i = n(15),
            o = n(3),
            r = n(22);
        t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t],
                a = {};
            (a[t] = e(n)),
                i(
                    i.S +
                        i.F *
                            r(function () {
                                n(1);
                            }),
                    "Object",
                    a
                );
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(5),
            o = n.n(i),
            r = n(2),
            a = n.n(r),
            s = { insert: "head", singleton: !1 },
            l = o()(a.a, s);
        if (!a.a.locals || t.hot.invalidate) {
            var h = a.a.locals;
            t.hot.accept(
                2,
                function (e) {
                    (r = n(2)),
                        (function (t, e, n) {
                            if ((!t && e) || (t && !e)) return !1;
                            var i;
                            for (i in t) if ((!n || "default" !== i) && t[i] !== e[i]) return !1;
                            for (i in e) if (!((n && "default" === i) || t[i])) return !1;
                            return !0;
                        })(h, (a = n.n(r)).a.locals, void 0)
                            ? ((h = a.a.locals), l(a.a))
                            : t.hot.invalidate();
                }.bind(this)
            );
        }
        t.hot.dispose(function () {
            l();
        }),
            (e.default = a.a.locals || {});
    },
    function (t, e, n) {
        t.exports = n.p + "./surface.ttf";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
            o = n(98),
            r = (i = o) && i.__esModule ? i : { default: i },
            a = n(47);
        var s = L.Map.extend({
            options: {
                zoomControl: !1,
                center: [37, 105],
                zoom: 4.5,
                zoomSnap: 0.1,
                renderer: L.canvas({ tolerance: 5 }),
                preferCanvas: !0,
            },
            userLayers: (0, a.weatherLayerGroup)(),
        });
        (e.default = {
            weatherMap: function (t, e) {
                return new s(t, e);
            },
            WeatherMap: s,
        }),
            L.Map.addInitHook(function () {
                var t = this.createPane("topPane");
                for (var e in ((t.style.zIndex = 410),
                (t.style.pointerEvents = "none"),
                (this.overLayers = this.options.overLayers || { "可切换底图(空)": L.layerGroup() }),
                (this.baseLayers = this.options.baseLayers || { "备选图层(空)": L.layerGroup() }),
                this.baseLayers)) {
                    var n = this.baseLayers[e];
                    n.options && n.options.visible && this.addLayer(n);
                }
                for (var i in this.overLayers) {
                    var o = this.overLayers[i];
                    o.options && o.options.visible && this.addLayer(o);
                }
                this.addLayer(this.userLayers),
                    this.attributionControl.addAttribution("<img src=data:image/png;base64:" + r.default + ">"),
                    L.DomUtil.addClass(this.attributionControl._container, "logo");
            });
    },
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAU2klEQVR42mL8//8/AwgwMjIyjAIIAIaJAZDyh3I/AvEGYPg8GI5+BQggRlgCAIIwIM4kQe90YKCsGoSR1wb1B8h9VaSqA4pPu/D4QubGixvBfH5OfoYAgwAGBWGFdqC6amQjhkMCAAgg5ASw37HX0YFYjf1h/QyKfIomAgICF6CB8X8wBAzQP+8FCwUFztecZ5AVkI1gYWFZhR5pQDVuH7592KlYrchwv/U+A+NvRiGgPz78+vXL4OqLq+cMWwxRzBTgEmB41/fuIxMTkySQ+w+I/0Lp/0M9IQAEEAsS2+HArQNYFe0v3s9grWh9BJ5qGBn/f/z4cTYw0K69ffvWiZ2d/R8zM/N/YGCDMVDJBajSACCWB+KNQD0XoIEvgCQOAg+hRewHPJEKUq9PqEgGqdtwYYMAMHIZEhckMuwr2pfZ2dm5rby8/Ac0omCRlpm4MJEBpA7kZ3d1dyeg2KY/f/4oPXj7AJcbQHUkLxD/AeKfIPrnz5/eQP/qARPGf0JVBVC/ApAyQPIHDBwEhRey/6FqFdDUgeQfoIXdRaC+DTjsAqnjJxTGAAHEQmxK2b1793RgRP9lY2P7y8XF9efbt2/vv379OvnUk1PJ6GoNZAzANDAyGB6+e8jgr+/fAAzcCGAisQcGeiZMHATkheRBRez8v3//dgDlq1D9ASmmQZF68clF5CK5H6h+xu/fvydwcHDcQsrd9gdvHQRzQBE7cd9E+5ycnH5gAiiE5tq/QD2NQPNACQWsDlTUe2h4BAKZuxYuXHgiIi4CXLptvLARnvuB7md48eLFNhAXFPnv37+v5efnTwTq5Ud3179//zYC3TadlZV1F9QToSA/ABOWA7BqYYCphwF7NXtweIH8//379wnAMOACqr2HnhAFOAVA1RADctjpy+iDzL8AtHMGUN+sL1++iHFzc9cD9YLD+OP3j+hhDFKXhRzGAAEEMgCG/zOkMWDF/Xv6/++/uR8Fn390/j8uPSD1CpUKcL5Dj8N/YAI42LC5AS6WsCABrA7EFigQ+D//6Pz/wCJ4JtBR7KCECQrE9efXg+VAagyaDf4j8wtWFvz/8ePHrDt37ugA1bMCMTPQOfeR7QVhkDvv3btXCpQXef78efz9N/fhZsDsBtoFCinpkydPBoL8hs1P/yF1pe3Dhw9XIbsDZB9ID8g9ILGAaQH/3399Dyohow8dOiQKYoP8D3MzSC3Ir+huAIUNyD/ARNCMHE4wDLIHhpHFQeEC8uPnz5+zQeGHrBfmNlBYg/ggez99+pQK9AcbNPMzAQQQEzG5H5RqQTkLGYNSMy5QuKoQ3HB63/8eXH3MT5jPULK2xA7oOLiaeMt4hgLnAkjZBiqygUXy1qtb04BVSgUwJXdsurQpI3B6IFgOXJcAzfPW9j4CK10m7J3AULGxIlVCQgKUuznu379vAnSTAnrOAZkrKC7YtWzZMntgrk0HVQ0wM2F2X3p6iW/ChAlWT58+5cUXDkeOHCk89+5cKLK7QLkSVD02ejTO2F+0HxwuIHlOTs4MPT29pAXHFzBceHKBYX78fIYO/47ZKlwqnsG6wX0wv8PcAAqbjt0dqcBSlQ2b3SB/5TvnM9xpvvPYQQ3RVAPZB/IjsHTOOHr/aBpyGIP0gEqOycGTV4DiAQSACYUNmsnAmQYggIhKAKDI0v+jv8ucxXyTI5/jSh9JnwXKf5XrcakHea7IsmjVxO6Jvm8vv00AeRAUYYQAKOHw8fGlAAMvFeQpdAAsvlGqLJCZr3+8Tpo0aZI2Ly9vEKzljgxAAVS4upDB2to6sWtvlyW2ds7C4wsZXFxcwl+/fo03AWgbagfichcwcfVx/+DuXp+5nsHfwJ/h5cuXu0NDQxcnmSb1gxqQwDD8CIykVGlp6RXA6sECm/kHbh5gAFZp9tjkQJEONOs0MHO8xOZHYOTrwKo/9Azwh+lPBP9X/noDLoNyoP2bgcKcsFIAIICIbgNs3rz57bx5884DmS+AGOSId8BSsRGbWlAALF++/FxDQ8Ov69eve888PpMoO0Ap9si9IzKgBIOcS2EA2OhiwxZ5EW4RccC6zwFWr6ODBccWgHKqN3LuQAYgfc1ezXabNm06h899oMSDx12iampqG7q6us57eHjoA/GavXv3Vr77/S4nf1E+2A6QXmCbgh9YilnhamwCqwB2XPYDqwiccqDIB9X12BKHY58jA7B0ajx/8nwXtB3zBSr9DyCAmIhNAMBUzgWkuKDFB8jDzPjUv3nzRhRUrwJzhha26gIkhi03gjyC3lCCJY6Lry8affj+ASPXCAkJWb34+kITZKaBrAFW94AiP8EqAWfCe/PzjSiw3uYnVBViA9AEIAHEwmVlZS+BRf/6goIC/e8s33NAXUpQAoQlnATLBIb1yevP4nIn0Cy8CQBfIgBVk6BGK65EYGhuWLZ69eogoBAftBRgBQggoksAYEOJFS3i/+FTD6xrBIGUEFAfM67ABLVSG3wbMFrF2IqyB28egMVBngRhGACl+uPHj1+8x31PHxSooCIYFOjoORUk1+HR8RRojjS2hAfKodra2urk9KWhCUAEiL9Cu4k/vL29w6u2VGG4AxRBd+/evQx0jzG2EgtbKQcDwEYeG6gLjk0O1As5cejEHqD/XRx7HbEmAlDbZHn08mBQpw5U2IAwQAARXQJALQZ1pX6BPAjFDHgcCyotOB88ePAEW2oHtSu0vmsdAGGdnzp7TZlM91W4Vnz/ef/nblD3BqMOVHdg0P6hvQ+kHkTr/dbbnW6S/kz4rfB2AwMDc1C3DVRPfn72eT2owYUOQGL79++/BzIHVxEKzLl4EwA2d4EAsIfDAstVwJ5EIrC03AmskqRAiRYbAHahOXDZATULA4BKPmD7gBtXhgL5fcaMGff/P/1/Cpv/YVXYD9YfOmFhYSqwdgBAADGRkNBhCeAvNJX/xqcY6BFQSmYF1qsXQW0CbGD79u0vgY45ycLCwialK+UkUSHBya7I7gryDLaiDBiwbED1p549e/bd0d3R1XOOp9Q5xnOefCJ86iDPgUqPY8eO3VBgUNiF3MoGlTJPLz29tnjx4iegPj2udoC8qrwGPj+5q7v/xOYuaKRwzZ0710lNRy1UtFSUp/9Qvyk2tSAAbOlz4SlpsSYAUA7O3ZwrxibMJo9eDYJKxL+v/t5RUVERFwAC+Z/yOBMBqLrT0NBQhg5qcQIEEBOJpd0/pATwh1ChAUo03d3d14R/Cm9HjhAYANbdXAcOHPDm1+S3BdVRII/wfuY9cebYmR3YPAAKHGBj1Nkv2s8bpB4E8p0gDSxYQGRkZJxpb2/fUeVY9RhU8oASU6hS6LP8/Pyz27Zte6cuov4TV8TgGgmFgY0bN17F5i5gY5gJaLZXUERQJMhdoK4hyF24EpuGqYYfrgYrdMQRA8BKUcUqRZQuOChcQW5aunTpTZsYG7+mE01qwLreTPG34gn0MAf5G9SNBnaJ38MSAEAAkVIF/EMqBQiWAFC1IHW/Jk6cuCbTIHMjcn0PKnKBDvZd8GCBDqhuqvepZ8jXzz+6YMGCHa6urkukfkntB9XnsMgCeVrGTMZi77e9xqA6HhSxoH73m2dvzoK6f6AAev/+/X2Q+1atWvVk9+7doPoQ3CYA9kjOAOvd16DMd/PmzQfI/WiUCMbSjUQGkZGRJzlfcl5EdhcoRz1nfC676/Muc9DcAijyQe56fPdxra+671r0hieo6wqKRGy9CVAClFKQksJmN6g/32rf+ux+233w2AoIg8ZZfEV8Twd4BcwGNu7ugfwFMhfkjvN/zluASkTkyAcllL3b9564c+cOKN55QKUWQADBJ4OAxetM0EAC1tQHTDU6ajqznj59ehfIvQsdW34B7JM2nn56Ogmbel113clPgACq9qWPjw9Xb29vGrAI8we13JGHM0EOv3DqwhZgv3kpsPcA66KwHTp0KE7XWNcfFDCwFjio0Qeqx5/eeLp78uTJW83NzfkdQxwbQR68fOzyZD8/v23QQQ5WT09Pudu3bzNBPQwqpv+XlpYqZ5VnpWHrhsGGW0EDNxj19p1vV4ANu30gJrAUsnBxcbHYcWMHB/JQMMgfgv8ETxw5cmRZTEzMbmBi1gOqi3n977Uv+uwiLPFgC7uJ+yYyoHdZQWZP9Zz6LC4ubo+hoSEzOzv7V2Cp8/j+/fv/oP5laG5u1oyOjjZm5GNUQR4KhoXxzs07z0ZERICKubdA/BSI7wMEECPSegD28+fPewBzisCjR49EgPWsFLBbJAJslfLs2bPnHZAP0wRy9WPoWMD3M2fOOAAbevwwPaDWP9BhHx4/fvwZ1BsE4kdA/Bra6mQDRrImsI9sIywsLAOqOy9fvvwEWHydA0bUM2gr+ge0qgF5ikNLS0scGJhmmpqaiv/+/WMCpql3oHYFsI99F9qf/V5VVaX08OHDb0BzXkBLHiZoFcQC7bpyQBMAuArz9fUVAgaiBLDPzQmsj/mBXSteUJsFmPh+At3zEhjRfKysrD9B9gEbs5ygHtC8efMeQUu/r9CJn3+NjY2mOjo6sqBiG2jO13379l1YuHDhadAYCVJfm7OoqMjE3d3dBaiEG2jH/zlz5twFR4y+PjczM/MfUNUGtJ8dVJUcPXr0zdSpUy2ApSDKlOT169efAs2+0tnZeQPUyYK64ReSX/9A+V+Cg4PZMzMzzYCJhA/UbQQ2TN/NmjXrLTCOYOpAxc9zUNwABODKDFoYhGEoTF2tl8mYmwcv+/9/bAxhMCZ1Q6U6C1/gsUMQ2qYveUmbFDUBAtdCw5v2tktHrShwvCf4D4I7QfJZdK4QnkvEi6R5kgAH/lC1fCtIjTgVSYAEZiCAJ2wr7UDuMsj6zXoObRnsJkHP/Y17fMv2XsAxgr6IY9yz9yIJkNg7yPyH4L/R3/DxCIbh2FNvAc/DmZMyOzNv+pXYHwVjlfUTNoxiX018Gjr/Fa7zobz/BODS3FYYBoEgWqsQaP//N/MgxMbEbkLgDAw+eVuddXaERS1Tgqenzo3gZcDegK1G+gAkTXMugAdAlTERqlxiZ9Mv6s2IP7HJ9O+sJZIO7BrYMd1NaC9hJyTZ+33Cx5+dnC+2wZrdxKZ+4VYLnASW8bvbf4G/iTLR/th9SpjYi+VOYfwu4Eo0wwTQTCjdygPbxXwYtIN5T6y2WwA2zW4FQBCGwiCF9f4PWhdptFKDOIOP0e10v2cbmzj9DG2nhKcAkknxJgE3gkyeooA00XeBZyHrqwxKAOGCQw0AVNmRETiD0z180OigE4CBxJrln8nmVbaMMOTOSNxHPP7g43Ic0BH88E3pBN8S7nfJT8BhIJkzupB3qKKYVugybGdemBlnh/Q28XzF+QpAqJmsIAwDYfguCBbcoD1ID4JLFTz6qm6g1gUPvlZLb30C/w9mZPBi4SdJk8wGzfxh+i0Hh6+CI2PQNM2FEqjyxlPjlTCv6/rKO+Wyfago0XbFF07MiQfcNJ5x2/H1IosHc6ITjt2MW43AnTS3nxxSYdi27THo6VnKYG7iMrFP+fRMH93sC8d5ovy+Y44Sq7cEn5JpkN23tDUVluYnWLgP9MU7HsG33GwZW4rM3KaqqsrgC2x+5HHBVptDZkFcf+K7DvpBAcSvXqwTR3pTjha2wsbkEL/Udfx7ROLvti83+5KPAEJPAMywAILOf8M1wyyBiSEVe+D6iwj1sKKSHRY5+ABMH8g9sEgEJSR0e2BskJnQYhyEOdHsBtPAhtYMNHGQWgFiAhCmB+YGXPKk6MWm5927dwuhCQuEpdDcqwpLbNBED8ocPDA1hDBUnRQ0Q4H0cgIEEHICgK0RxKkZm6NBgQpKBNgCHJ0NVctKrINxmYMc6Wj2ciEnYGLchGwGCYFItvuJUU8ooSBnDuTwJEYPNPIFoYmfDSCA0BMAeFUsPkOwORiWQ/EFNrJaXKUMNj6+XI8vx5ESQaDqgJDZMHFY9USJ+/HZhayeyMTITWICEIdWfaC5Cw6AAMJIAMilAKGAx5dDCTga1CXhR0+ZaHxQPSpPToQSSiA4AkUYPbJg9TyamCysfQQTgxbb0rA2CUwcxIeJwQAsAWELO+R2DbHVCxkJRhUatqCSgBcggJDXBMLwNGwJABeNbDkxKRFWhxGbg0ANL2IDg9jiFlkNqIEHZKvAGm5o+kGNJVVkMVBDCkd4aBBbChJTXVBSRRIoAcyhjUyQf4UBAghbAiDaort3764FLZIkpuikpIiGOtqQiEg1gLXYQS1yXG65du3aZhB98+ZN0IyMJXS5Nrh1DEug+BIejsg1Q5e7c+fOunv37q1BzyT4wgnU2iclweMKfzwJwA7kVmiiFwcIIJwlAK5AQ+YD2c5AbENqI4eUEgDa/bGCdYcI5DBbUKIkpZV+48YN0CC9BTRXqCKXUNhKDJj5yBGLLI7sFiC2BmJTXG5Hp6Fh6gRNlPpEJHhP0BoaEqsAD2giAHVzpQECiKgEgMfhYMNIKQEuX768FepJczSzrNH4PkDsDZoHQZfD5paLFy9uB7K9yC1CcfkZRxFqhS9ioYnWBuRudDWEqtOrV69ugSYeI9hYAZ4qDjTf7EJiCQDWA03wcgABhG06OBO0URSGoT0DrNOjQMfmII2xw+YUrIHYGYTRxIOBOExXV3caiA/MMWVoxjFj4YPFgEVpMZZ5c7D7YG6DzqMzAov1TVgSNVwPNnFk/8LMBOHnz58vB/L1sExzoyyJQ3cLdPUUeHRSXl4+hNiNtyB1Wlpa3rAxE1lZ2TDkeICpAdlz+vRp0MwkBzAOCtDMsEHjR2FZ0wHf0gYQQBgBAtqQga8fffbs2d3IfFA9hyWHgCaibbGkvCBQCkc3G2QGKKejqQfNmfqB6mlCjU5kuevXr2+CFukGyDkIST1oUSRotw5obZw3NvNBrXFcjVVYjibGLbBGJimNQygNKvVM0N0PkwdG/h7Q8gSQX9Ddhl6yYrHLE2o+aLRTFiCAsOUI2BiyALrF586dA213CgUVt3g8YwIt/qywFOkB6GZCh0KNQZGGph5Ugjhja1/AwKVLl7bhiAhT0NAuenWAnBChtBtyMQ2KeFzdT/QGF7pbYL0DXPLIfFhDD1u7Ccq3h4aJFiiicCRkUCL2QxMDTSGbEjDbBxq2oKFvOYAAAwDAzOyUgSKVvgAAAABJRU5ErkJggg==";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), n(100);
        var i = n(31),
            o = n(101);
        (0, i.addFactory)("http", o.create),
            (e.default = { create: i.create, addFactory: i.addFactory, getFactory: i.getFactory, Http: o.HttpSource });
    },
    function (t, e, n) {
        "use strict";
        var i = n(31);
        L.Layer.include({
            dataSource: null,
            _bindSourceEvent: function (t) {
                return (
                    t &&
                        (t.on("load", this.onSuccess, this),
                        t.on("error", this.onError, this),
                        t.on("loading", this.onLoading, this),
                        (this.load = function (e) {
                            return t.load && t.load(e), this;
                        }),
                        (this.next = function (e) {
                            return t.next && t.next(e), this;
                        }),
                        (this.down = function (e) {
                            return t.down && t.down(e), this;
                        }),
                        (this.setDate = function (e) {
                            return t.setDate && t.setDate(e), this;
                        })),
                    this
                );
            },
            _unBindSourceEvent: function (t) {
                return (
                    t &&
                        (t.off("loaded", this.onSuccess, this),
                        t.off("error", this.onError, this),
                        t.off("loading", this.onLoading, this),
                        delete this.load,
                        delete this.next,
                        delete this.down,
                        delete this.setData),
                    this
                );
            },
            bindSource: function (t) {
                if ((this.unBindSource(), "string" == typeof t)) this.dataSource = (0, i.create)(t, this.options);
                else {
                    if (!t.urlTemplate) return this.onSuccess({ data: t }), this;
                    this.dataSource = t;
                }
                return this._bindSourceEvent(this.dataSource), this;
            },
            unBindSource: function () {
                return this._unBindSourceEvent(this.dataSource), delete this.dataSource, delete this._bindParam, this;
            },
            onSuccess: function (t) {
                if (this.setData && t.data) {
                    var e = t.data;
                    this.adpater && (e = this.adpater(e)), this.setData(e);
                }
                this.onLoaded();
            },
            onLoaded: function () {
                this.fire("load");
            },
            onError: function (t) {
                console.error(t), this.fire("error", t);
            },
            onLoading: function (t) {
                this.fire("loading", t);
            },
        }),
            L.Layer.addInitHook(function () {
                var t = this;
                this.on("remove", function () {
                    t.dataSource && t.dataSource.cancel("移除图层");
                });
            }),
            (L.Layer.create = function (t, e, n) {
                if (t) return t(n).bindSource(e);
                throw new Error("layer factory is null!");
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.HttpSource = e.create = void 0);
        var i,
            o = n(41),
            r = (i = o) && i.__esModule ? i : { default: i },
            a = n(31);
        var s = (e.create = function (t, e) {
                return new l(t, e);
            }),
            l = (e.HttpSource = L.Evented.extend({
                options: { dataType: "json", timeout: 2e4 },
                urlTemplate: "",
                isLoading: !1,
                initialize: function (t, e) {
                    L.setOptions(this, e), (this.urlTemplate = t);
                },
                _getUrl: function () {
                    return L.Util.template(this.urlTemplate, this.options);
                },
                load: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (this.isLoading) return this;
                    var e = this;
                    this.isLoading = !0;
                    var n = this._getUrl();
                    return (
                        t || (n += "&_t=" + Date.now()),
                        e._fireLoading({ message: "Loading...", loaded: -1 }),
                        (this._axiosSource = r.default.CancelToken.source()),
                        r.default
                            .get(n, {
                                responseType: this.options.dataType,
                                timeout: this.options.timeout,
                                onDownloadProgress: function (t) {
                                    e._fireLoading({
                                        message: "Loading......" + (t.loaded / 1024).toFixed(0) + "K",
                                        loaded: t.loaded,
                                    });
                                },
                                cancelToken: this._axiosSource.token,
                            })
                            .then(function (n) {
                                (e.isLoading = !1), e.onParse ? e.onParse(n, t) : e._fireLoaded(n);
                            })
                            .catch(function (t) {
                                (e.isLoading = !1),
                                    r.default.isCancel(t)
                                        ? console.log("Request canceled", t.message)
                                        : e._fireError({ message: t.message || t });
                            }),
                        this
                    );
                },
                _axiosSource: void 0,
                cancel: function (t) {
                    this._axiosSource && this._axiosSource.cancel(t || "中止请求");
                },
                _fireLoading: function (t) {
                    this.fire("loading", t);
                },
                _fireLoaded: function (t) {
                    this.fire("load", t);
                },
                _fireError: function (t) {
                    this.fire("error", t);
                },
            }));
        (0, a.addFactory)("http", s);
    },
    function (t, e, n) {
        "use strict";
        var i = n(1),
            o = n(48),
            r = n(103),
            a = n(54);
        function s(t) {
            var e = new r(t),
                n = o(r.prototype.request, e);
            return i.extend(n, r.prototype, e), i.extend(n, e), n;
        }
        var l = s(n(51));
        (l.Axios = r),
            (l.create = function (t) {
                return s(a(l.defaults, t));
            }),
            (l.Cancel = n(55)),
            (l.CancelToken = n(117)),
            (l.isCancel = n(50)),
            (l.all = function (t) {
                return Promise.all(t);
            }),
            (l.spread = n(118)),
            (l.isAxiosError = n(119)),
            (t.exports = l),
            (t.exports.default = l);
    },
    function (t, e, n) {
        "use strict";
        var i = n(1),
            o = n(49),
            r = n(104),
            a = n(105),
            s = n(54);
        function l(t) {
            (this.defaults = t), (this.interceptors = { request: new r(), response: new r() });
        }
        (l.prototype.request = function (t) {
            "string" == typeof t ? ((t = arguments[1] || {}).url = arguments[0]) : (t = t || {}),
                (t = s(this.defaults, t)).method
                    ? (t.method = t.method.toLowerCase())
                    : this.defaults.method
                    ? (t.method = this.defaults.method.toLowerCase())
                    : (t.method = "get");
            var e = [a, void 0],
                n = Promise.resolve(t);
            for (
                this.interceptors.request.forEach(function (t) {
                    e.unshift(t.fulfilled, t.rejected);
                }),
                    this.interceptors.response.forEach(function (t) {
                        e.push(t.fulfilled, t.rejected);
                    });
                e.length;

            )
                n = n.then(e.shift(), e.shift());
            return n;
        }),
            (l.prototype.getUri = function (t) {
                return (t = s(this.defaults, t)), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "");
            }),
            i.forEach(["delete", "get", "head", "options"], function (t) {
                l.prototype[t] = function (e, n) {
                    return this.request(s(n || {}, { method: t, url: e, data: (n || {}).data }));
                };
            }),
            i.forEach(["post", "put", "patch"], function (t) {
                l.prototype[t] = function (e, n, i) {
                    return this.request(s(i || {}, { method: t, url: e, data: n }));
                };
            }),
            (t.exports = l);
    },
    function (t, e, n) {
        "use strict";
        var i = n(1);
        function o() {
            this.handlers = [];
        }
        (o.prototype.use = function (t, e) {
            return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1;
        }),
            (o.prototype.eject = function (t) {
                this.handlers[t] && (this.handlers[t] = null);
            }),
            (o.prototype.forEach = function (t) {
                i.forEach(this.handlers, function (e) {
                    null !== e && t(e);
                });
            }),
            (t.exports = o);
    },
    function (t, e, n) {
        "use strict";
        var i = n(1),
            o = n(106),
            r = n(50),
            a = n(51);
        function s(t) {
            t.cancelToken && t.cancelToken.throwIfRequested();
        }
        t.exports = function (t) {
            return (
                s(t),
                (t.headers = t.headers || {}),
                (t.data = o(t.data, t.headers, t.transformRequest)),
                (t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers)),
                i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
                    delete t.headers[e];
                }),
                (t.adapter || a.adapter)(t).then(
                    function (e) {
                        return s(t), (e.data = o(e.data, e.headers, t.transformResponse)), e;
                    },
                    function (e) {
                        return (
                            r(e) ||
                                (s(t),
                                e &&
                                    e.response &&
                                    (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))),
                            Promise.reject(e)
                        );
                    }
                )
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(1);
        t.exports = function (t, e, n) {
            return (
                i.forEach(n, function (n) {
                    t = n(t, e);
                }),
                t
            );
        };
    },
    function (t, e) {
        var n,
            i,
            o = (t.exports = {});
        function r() {
            throw new Error("setTimeout has not been defined");
        }
        function a() {
            throw new Error("clearTimeout has not been defined");
        }
        function s(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === r || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
            try {
                return n(t, 0);
            } catch (e) {
                try {
                    return n.call(null, t, 0);
                } catch (e) {
                    return n.call(this, t, 0);
                }
            }
        }
        !(function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : r;
            } catch (t) {
                n = r;
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (t) {
                i = a;
            }
        })();
        var l,
            h = [],
            u = !1,
            c = -1;
        function d() {
            u && l && ((u = !1), l.length ? (h = l.concat(h)) : (c = -1), h.length && f());
        }
        function f() {
            if (!u) {
                var t = s(d);
                u = !0;
                for (var e = h.length; e; ) {
                    for (l = h, h = []; ++c < e; ) l && l[c].run();
                    (c = -1), (e = h.length);
                }
                (l = null),
                    (u = !1),
                    (function (t) {
                        if (i === clearTimeout) return clearTimeout(t);
                        if ((i === a || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(t);
                        try {
                            i(t);
                        } catch (e) {
                            try {
                                return i.call(null, t);
                            } catch (e) {
                                return i.call(this, t);
                            }
                        }
                    })(t);
            }
        }
        function p(t, e) {
            (this.fun = t), (this.array = e);
        }
        function _() {}
        (o.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            h.push(new p(t, e)), 1 !== h.length || u || s(f);
        }),
            (p.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = _),
            (o.addListener = _),
            (o.once = _),
            (o.off = _),
            (o.removeListener = _),
            (o.removeAllListeners = _),
            (o.emit = _),
            (o.prependListener = _),
            (o.prependOnceListener = _),
            (o.listeners = function (t) {
                return [];
            }),
            (o.binding = function (t) {
                throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
                return "/";
            }),
            (o.chdir = function (t) {
                throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
                return 0;
            });
    },
    function (t, e, n) {
        "use strict";
        var i = n(1);
        t.exports = function (t, e) {
            i.forEach(t, function (n, i) {
                i !== e && i.toUpperCase() === e.toUpperCase() && ((t[e] = n), delete t[i]);
            });
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(53);
        t.exports = function (t, e, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status)
                ? e(i("Request failed with status code " + n.status, n.config, null, n.request, n))
                : t(n);
        };
    },
    function (t, e, n) {
        "use strict";
        t.exports = function (t, e, n, i, o) {
            return (
                (t.config = e),
                n && (t.code = n),
                (t.request = i),
                (t.response = o),
                (t.isAxiosError = !0),
                (t.toJSON = function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                    };
                }),
                t
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(1);
        t.exports = i.isStandardBrowserEnv()
            ? {
                  write: function (t, e, n, o, r, a) {
                      var s = [];
                      s.push(t + "=" + encodeURIComponent(e)),
                          i.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                          i.isString(o) && s.push("path=" + o),
                          i.isString(r) && s.push("domain=" + r),
                          !0 === a && s.push("secure"),
                          (document.cookie = s.join("; "));
                  },
                  read: function (t) {
                      var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                      return e ? decodeURIComponent(e[3]) : null;
                  },
                  remove: function (t) {
                      this.write(t, "", Date.now() - 864e5);
                  },
              }
            : {
                  write: function () {},
                  read: function () {
                      return null;
                  },
                  remove: function () {},
              };
    },
    function (t, e, n) {
        "use strict";
        var i = n(113),
            o = n(114);
        t.exports = function (t, e) {
            return t && !i(e) ? o(t, e) : e;
        };
    },
    function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
        };
    },
    function (t, e, n) {
        "use strict";
        t.exports = function (t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(1),
            o = [
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent",
            ];
        t.exports = function (t) {
            var e,
                n,
                r,
                a = {};
            return t
                ? (i.forEach(t.split("\n"), function (t) {
                      if (
                          ((r = t.indexOf(":")),
                          (e = i.trim(t.substr(0, r)).toLowerCase()),
                          (n = i.trim(t.substr(r + 1))),
                          e)
                      ) {
                          if (a[e] && o.indexOf(e) >= 0) return;
                          a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n;
                      }
                  }),
                  a)
                : a;
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(1);
        t.exports = i.isStandardBrowserEnv()
            ? (function () {
                  var t,
                      e = /(msie|trident)/i.test(navigator.userAgent),
                      n = document.createElement("a");
                  function o(t) {
                      var i = t;
                      return (
                          e && (n.setAttribute("href", i), (i = n.href)),
                          n.setAttribute("href", i),
                          {
                              href: n.href,
                              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                              host: n.host,
                              search: n.search ? n.search.replace(/^\?/, "") : "",
                              hash: n.hash ? n.hash.replace(/^#/, "") : "",
                              hostname: n.hostname,
                              port: n.port,
                              pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
                          }
                      );
                  }
                  return (
                      (t = o(window.location.href)),
                      function (e) {
                          var n = i.isString(e) ? o(e) : e;
                          return n.protocol === t.protocol && n.host === t.host;
                      }
                  );
              })()
            : function () {
                  return !0;
              };
    },
    function (t, e, n) {
        "use strict";
        var i = n(55);
        function o(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise(function (t) {
                e = t;
            });
            var n = this;
            t(function (t) {
                n.reason || ((n.reason = new i(t)), e(n.reason));
            });
        }
        (o.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
        }),
            (o.source = function () {
                var t;
                return {
                    token: new o(function (e) {
                        t = e;
                    }),
                    cancel: t,
                };
            }),
            (t.exports = o);
    },
    function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return function (e) {
                return t.apply(null, e);
            };
        };
    },
    function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return "object" == typeof t && !0 === t.isAxiosError;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), n(121);
        var i = g(n(122)),
            o = g(n(47)),
            r = g(n(57)),
            a = g(n(124)),
            s = g(n(126)),
            l = g(n(128)),
            h = g(n(130)),
            u = g(n(134)),
            c = g(n(136)),
            d = g(n(140)),
            f = g(n(144)),
            p = g(n(147)),
            _ = g(n(149)),
            m = g(n(33));
        function g(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
        }
        var v = { Render: i };
        L.extend(v, o),
            L.extend(v, r),
            L.extend(v, a),
            L.extend(v, s),
            L.extend(v, l),
            L.extend(v, h),
            L.extend(v, u),
            L.extend(v, c),
            L.extend(v, d),
            L.extend(v, f),
            L.extend(v, p),
            L.extend(v, _),
            L.extend(v, m),
            (e.default = v);
    },
    function (t, e, n) {
        "use strict";
        L.Layer.include({
            caption: "",
            setCaption: function (t) {
                return (
                    (this.caption = t),
                    this.fire("captionChanged", { layer: this }),
                    this._map && this._map.fire("captionChanged", { layer: this }),
                    this
                );
            },
            getCaption: function () {
                return this.caption || "未命名";
            },
        }),
            L.Layer.addInitHook(function () {
                this.options.caption && this.setCaption(this.options.caption);
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.grid2Img = e.palette = e.Palette = e.WeatherSymbol = void 0);
        var i,
            o = n(19),
            r = (i = o) && i.__esModule ? i : { default: i },
            a = n(32),
            s = n(56);
        L.Canvas.include({
            _getTextWidth: function (t, e) {
                var n = this._ctx;
                n.save(), (n.font = e);
                var i = n.measureText(t).width;
                return n.restore(), i;
            },
        }),
            (e.WeatherSymbol = r.default),
            (e.Palette = a.Palette),
            (e.palette = a.palette),
            (e.grid2Img = s.grid2Img);
    },
    function (t, e, n) {
        "use strict";
        function i() {
            var t = null,
                e = 0,
                n = 100,
                i = ["ff0000", "ffff00", "00ff00", "0000ff"];
            function r(r) {
                if (r.length < 2) throw new Error("Rainbow must have two or more colours.");
                var a = (n - e) / (r.length - 1),
                    s = new o();
                s.setGradient(r[0], r[1]), s.setNumberRange(e, e + a), (t = [s]);
                for (var l = 1; l < r.length - 1; l++) {
                    var h = new o();
                    h.setGradient(r[l], r[l + 1]), h.setNumberRange(e + a * l, e + a * (l + 1)), (t[l] = h);
                }
                i = r;
            }
            r(i),
                (this.setSpectrum = function () {
                    return r(arguments), this;
                }),
                (this.setSpectrumByArray = function (t) {
                    return r(t), this;
                }),
                (this.colourAt = function (i) {
                    if (isNaN(i)) throw new TypeError(i + " is not a number");
                    if (1 === t.length) return t[0].colourAt(i);
                    var o = (n - e) / t.length,
                        r = Math.min(Math.floor((Math.max(i, e) - e) / o), t.length - 1);
                    return t[r].colourAt(i);
                }),
                (this.colorAt = this.colourAt),
                (this.setNumberRange = function (t, o) {
                    if (!(o > t))
                        throw new RangeError("maxNumber (" + o + ") is not greater than minNumber (" + t + ")");
                    return (e = t), (n = o), r(i), this;
                });
        }
        function o() {
            var t = "ff0000",
                e = "0000ff",
                n = 0,
                i = 100;
            function o(t, e, o) {
                var r = t;
                r < n && (r = n), r > i && (r = i);
                var a,
                    s = i - n,
                    l = parseInt(e, 16),
                    h = (parseInt(o, 16) - l) / s,
                    u = Math.round(h * (r - n) + l);
                return 1 === (a = u.toString(16)).length ? "0" + a : a;
            }
            function r(t) {
                if (
                    (function (t) {
                        return /^#?[0-9a-fA-F]{6}$/i.test(t);
                    })(t)
                )
                    return t.substring(t.length - 6, t.length);
                var e = t.toLowerCase();
                if (a.hasOwnProperty(e)) return a[e];
                throw new Error(t + " is not a valid colour.");
            }
            (this.setGradient = function (n, i) {
                (t = r(n)), (e = r(i));
            }),
                (this.setNumberRange = function (t, e) {
                    if (!(e > t))
                        throw new RangeError("maxNumber (" + e + ") is not greater than minNumber (" + t + ")");
                    (n = t), (i = e);
                }),
                (this.colourAt = function (n) {
                    return (
                        o(n, t.substring(0, 2), e.substring(0, 2)) +
                        o(n, t.substring(2, 4), e.substring(2, 4)) +
                        o(n, t.substring(4, 6), e.substring(4, 6))
                    );
                });
            var a = {
                aliceblue: "F0F8FF",
                antiquewhite: "FAEBD7",
                aqua: "00FFFF",
                aquamarine: "7FFFD4",
                azure: "F0FFFF",
                beige: "F5F5DC",
                bisque: "FFE4C4",
                black: "000000",
                blanchedalmond: "FFEBCD",
                blue: "0000FF",
                blueviolet: "8A2BE2",
                brown: "A52A2A",
                burlywood: "DEB887",
                cadetblue: "5F9EA0",
                chartreuse: "7FFF00",
                chocolate: "D2691E",
                coral: "FF7F50",
                cornflowerblue: "6495ED",
                cornsilk: "FFF8DC",
                crimson: "DC143C",
                cyan: "00FFFF",
                darkblue: "00008B",
                darkcyan: "008B8B",
                darkgoldenrod: "B8860B",
                darkgray: "A9A9A9",
                darkgreen: "006400",
                darkgrey: "A9A9A9",
                darkkhaki: "BDB76B",
                darkmagenta: "8B008B",
                darkolivegreen: "556B2F",
                darkorange: "FF8C00",
                darkorchid: "9932CC",
                darkred: "8B0000",
                darksalmon: "E9967A",
                darkseagreen: "8FBC8F",
                darkslateblue: "483D8B",
                darkslategray: "2F4F4F",
                darkslategrey: "2F4F4F",
                darkturquoise: "00CED1",
                darkviolet: "9400D3",
                deeppink: "FF1493",
                deepskyblue: "00BFFF",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1E90FF",
                firebrick: "B22222",
                floralwhite: "FFFAF0",
                forestgreen: "228B22",
                fuchsia: "FF00FF",
                gainsboro: "DCDCDC",
                ghostwhite: "F8F8FF",
                gold: "FFD700",
                goldenrod: "DAA520",
                gray: "808080",
                green: "008000",
                greenyellow: "ADFF2F",
                grey: "808080",
                honeydew: "F0FFF0",
                hotpink: "FF69B4",
                indianred: "CD5C5C",
                indigo: "4B0082",
                ivory: "FFFFF0",
                khaki: "F0E68C",
                lavender: "E6E6FA",
                lavenderblush: "FFF0F5",
                lawngreen: "7CFC00",
                lemonchiffon: "FFFACD",
                lightblue: "ADD8E6",
                lightcoral: "F08080",
                lightcyan: "E0FFFF",
                lightgoldenrodyellow: "FAFAD2",
                lightgray: "D3D3D3",
                lightgreen: "90EE90",
                lightgrey: "D3D3D3",
                lightpink: "FFB6C1",
                lightsalmon: "FFA07A",
                lightseagreen: "20B2AA",
                lightskyblue: "87CEFA",
                lightslategray: "778899",
                lightslategrey: "778899",
                lightsteelblue: "B0C4DE",
                lightyellow: "FFFFE0",
                lime: "00FF00",
                limegreen: "32CD32",
                linen: "FAF0E6",
                magenta: "FF00FF",
                maroon: "800000",
                mediumaquamarine: "66CDAA",
                mediumblue: "0000CD",
                mediumorchid: "BA55D3",
                mediumpurple: "9370DB",
                mediumseagreen: "3CB371",
                mediumslateblue: "7B68EE",
                mediumspringgreen: "00FA9A",
                mediumturquoise: "48D1CC",
                mediumvioletred: "C71585",
                midnightblue: "191970",
                mintcream: "F5FFFA",
                mistyrose: "FFE4E1",
                moccasin: "FFE4B5",
                navajowhite: "FFDEAD",
                navy: "000080",
                oldlace: "FDF5E6",
                olive: "808000",
                olivedrab: "6B8E23",
                orange: "FFA500",
                orangered: "FF4500",
                orchid: "DA70D6",
                palegoldenrod: "EEE8AA",
                palegreen: "98FB98",
                paleturquoise: "AFEEEE",
                palevioletred: "DB7093",
                papayawhip: "FFEFD5",
                peachpuff: "FFDAB9",
                peru: "CD853F",
                pink: "FFC0CB",
                plum: "DDA0DD",
                powderblue: "B0E0E6",
                purple: "800080",
                red: "FF0000",
                rosybrown: "BC8F8F",
                royalblue: "4169E1",
                saddlebrown: "8B4513",
                salmon: "FA8072",
                sandybrown: "F4A460",
                seagreen: "2E8B57",
                seashell: "FFF5EE",
                sienna: "A0522D",
                silver: "C0C0C0",
                skyblue: "87CEEB",
                slateblue: "6A5ACD",
                slategray: "708090",
                slategrey: "708090",
                snow: "FFFAFA",
                springgreen: "00FF7F",
                steelblue: "4682B4",
                tan: "D2B48C",
                teal: "008080",
                thistle: "D8BFD8",
                tomato: "FF6347",
                turquoise: "40E0D0",
                violet: "EE82EE",
                wheat: "F5DEB3",
                white: "FFFFFF",
                whitesmoke: "F5F5F5",
                yellow: "FFFF00",
                yellowgreen: "9ACD32",
            };
        }
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.Rainbow = i), (e.default = new i());
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(59);
        Object.defineProperty(e, "HighStation", {
            enumerable: !0,
            get: function () {
                return i.HighStation;
            },
        }),
            Object.defineProperty(e, "highStation", {
                enumerable: !0,
                get: function () {
                    return i.highStation;
                },
            });
        var o = n(61);
        Object.defineProperty(e, "HighStationGroup", {
            enumerable: !0,
            get: function () {
                return o.HighStationGroup;
            },
        }),
            Object.defineProperty(e, "highStationGroup", {
                enumerable: !0,
                get: function () {
                    return o.highStationGroup;
                },
            });
        var r = n(60);
        Object.defineProperty(e, "drawHighStation", {
            enumerable: !0,
            get: function () {
                return r.drawHighStation;
            },
        });
        var a = n(125);
        Object.defineProperty(e, "HighToolbar", {
            enumerable: !0,
            get: function () {
                return a.HighToolbar;
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.HighToolbar = void 0);
        var i = n(61),
            o = n(8),
            r = (e.HighToolbar = o.LayerToolbar.extend({
                onAdd: function (t) {
                    var e = o.LayerToolbar.prototype.onAdd.call(this, t),
                        n = this.layer.options,
                        i = "layer-toolbar-button";
                    return (
                        (this.name = this._createButton("站名", "隐藏/显站名", i, e, function () {
                            (n.nameVisible = !n.nameVisible), this._update(n);
                        })),
                        (this.gph = this._createButton("高度", "隐藏/显示高度", i, e, function () {
                            (n.gphVisible = !n.gphVisible), this._update(n);
                        })),
                        (this.tem = this._createButton("温度", "隐藏/显示温度", i, e, function () {
                            (n.temVisible = !n.temVisible), this._update(n);
                        })),
                        (this.dtd = this._createButton("露点差", "隐藏/显示温度露点差", i, e, function () {
                            (n.dtdVisible = !n.dtdVisible), this._update(n);
                        })),
                        (this.wind = this._createButton("风", "隐藏/显示风", i, e, function () {
                            (n.windVisible = !n.windVisible), this._update(n);
                        })),
                        this._updateItems(n),
                        e
                    );
                },
                _update: function (t) {
                    this._redraw(), this._updateItems(t);
                },
                _updateItems: function (t) {
                    this.checkItem(this.tem, t.temVisible),
                        this.checkItem(this.dtd, t.dtdVisible),
                        this.checkItem(this.gph, t.gphVisible),
                        this.checkItem(this.wind, t.windVisible),
                        this.checkItem(this.name, t.nameVisible);
                },
            }));
        i.HighStationGroup.include({
            getToolbar: function () {
                return new r(this);
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(62);
        Object.defineProperty(e, "SurfStation", {
            enumerable: !0,
            get: function () {
                return i.SurfStation;
            },
        }),
            Object.defineProperty(e, "surfStation", {
                enumerable: !0,
                get: function () {
                    return i.surfStation;
                },
            });
        var o = n(64);
        Object.defineProperty(e, "SurfStationGroup", {
            enumerable: !0,
            get: function () {
                return o.SurfStationGroup;
            },
        }),
            Object.defineProperty(e, "surfStationGroup", {
                enumerable: !0,
                get: function () {
                    return o.surfStationGroup;
                },
            });
        var r = n(63);
        Object.defineProperty(e, "drawSurfStation", {
            enumerable: !0,
            get: function () {
                return r.drawSurfStation;
            },
        });
        var a = n(127);
        Object.defineProperty(e, "SurfToolbar", {
            enumerable: !0,
            get: function () {
                return a.SurfToolbar;
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SurfToolbar = void 0);
        var i = n(64),
            o = n(8),
            r = (e.SurfToolbar = o.LayerToolbar.extend({
                onAdd: function (t) {
                    var e = o.LayerToolbar.prototype.onAdd.call(this, t),
                        n = this.layer.options,
                        i = "layer-toolbar-button";
                    return (
                        (this.name = this._createButton("站名", "隐藏/显站名", i, e, function () {
                            (n.nameVisible = !n.nameVisible), this._update(n);
                        })),
                        (this.tem = this._createButton("温度", "隐藏/显示温度", i, e, function () {
                            (n.temVisible = !n.temVisible), this._update(n);
                        })),
                        (this.td = this._createButton("露点", "隐藏/显示露点温度", i, e, function () {
                            (n.tdVisible = !n.tdVisible), this._update(n);
                        })),
                        (this.p0 = this._createButton("海压", "隐藏/显示海平面气压", i, e, function () {
                            (n.p0Visible = !n.p0Visible), this._update(n);
                        })),
                        (this.p3 = this._createButton("△P3", "隐藏/显示三小时变压", i, e, function () {
                            (n.p3Visible = !n.p3Visible), this._update(n);
                        })),
                        (this.cc = this._createButton("云量", "隐藏/显示高度", i, e, function () {
                            (n.ccVisible = !n.ccVisible), this._update(n);
                        })),
                        (this.ww = this._createButton("天气现象", "隐藏/显示天气现象", i, e, function () {
                            (n.wwVisible = !n.wwVisible), this._update(n);
                        })),
                        (this.wind = this._createButton("风", "隐藏/显示风", i, e, function () {
                            (n.windVisible = !n.windVisible), this._update(n);
                        })),
                        this._updateItems(n),
                        e
                    );
                },
                _update: function (t) {
                    this._redraw(), this._updateItems(t);
                },
                _updateItems: function (t) {
                    this.checkItem(this.tem, t.temVisible),
                        this.checkItem(this.td, t.tdVisible),
                        this.checkItem(this.wind, t.windVisible),
                        this.checkItem(this.name, t.nameVisible),
                        this.checkItem(this.p0, t.p0Visible),
                        this.checkItem(this.p3, t.p3Visible),
                        this.checkItem(this.ww, t.wwVisible),
                        this.checkItem(this.cc, t.ccVisible);
                },
            }));
        i.SurfStationGroup.include({
            getToolbar: function () {
                return new r(this);
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(65);
        Object.defineProperty(e, "Value", {
            enumerable: !0,
            get: function () {
                return i.Value;
            },
        }),
            Object.defineProperty(e, "value", {
                enumerable: !0,
                get: function () {
                    return i.value;
                },
            });
        var o = n(67);
        Object.defineProperty(e, "ValueGroup", {
            enumerable: !0,
            get: function () {
                return o.ValueGroup;
            },
        }),
            Object.defineProperty(e, "valueGroup", {
                enumerable: !0,
                get: function () {
                    return o.valueGroup;
                },
            });
        var r = n(66);
        Object.defineProperty(e, "drawValue", {
            enumerable: !0,
            get: function () {
                return r.drawValue;
            },
        });
        var a = n(129);
        Object.defineProperty(e, "ValueToolbar", {
            enumerable: !0,
            get: function () {
                return a.ValueToolbar;
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ValueToolbar = void 0);
        var i = n(67),
            o = n(8),
            r = (e.ValueToolbar = o.LayerToolbar.extend({
                onAdd: function (t) {
                    var e = o.LayerToolbar.prototype.onAdd.call(this, t),
                        n = "layer-toolbar-button",
                        i = this.layer.options;
                    (this.autoRank = this._createButton("分级显示", "站点自动分级显示", n, e, function () {
                        (i.autoRank = !i.autoRank), this._update(i);
                    })),
                        (this.displayType = this._createButton("值/点", "显示方式：要素值/点切换", n, e, function () {
                            (i.display = "label" === i.display ? "point" : "label"), this._update(i);
                        }));
                    var r = [];
                    if (this.layer.getData() && i.fields) {
                        var a = i.fields;
                        for (var s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s],
                                    h = this._setField;
                                "name" == s && (h = this._showName);
                                var u = this._createButton(l, "显示" + l + "/" + s, n, e, h);
                                (u.field = s), r.push(u);
                            }
                    }
                    return this._update(), e;
                },
                _showName: function () {
                    (this.layer.options.nameVisible = !this.layer.options.nameVisible), this._update();
                },
                _setField: function (t) {
                    this.layer.setValueField(t.target.field), this._update();
                },
                _update: function () {
                    var t = this.layer.options;
                    if (this.layer.getData()) {
                        var e = this._container.childNodes;
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var i = e[n];
                                "name" == i.field
                                    ? this.checkItem(i, t.nameVisible)
                                    : this.checkItem(i, i.field == t.field);
                            }
                    }
                    this.checkItem(this.autoRank, t.autoRank), this._redraw();
                },
            }));
        i.ValueGroup.include({
            getToolbar: function () {
                return new r(this);
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(131);
        Object.defineProperty(e, "AnalyLayer", {
            enumerable: !0,
            get: function () {
                return i.AnalyLayer;
            },
        }),
            Object.defineProperty(e, "analyLayer", {
                enumerable: !0,
                get: function () {
                    return i.analyLayer;
                },
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.analyLayer = e.AnalyLayer = void 0);
        var i = n(33),
            o = (e.AnalyLayer = L.GeoJSON.extend({
                options: {
                    lineVisible: !0,
                    polyVisible: !1,
                    labelVisible: !0,
                    caption: "分析图",
                    blodLevels: [0, 316, 588],
                    color: "auto",
                    outLineColor: "white",
                    font: "bold 13px tahoma",
                    weight: 1.3,
                    fillOpacity: 0.6,
                    shadowColor: "#aaa",
                    shadowBlur: 5,
                },
                initialize: function (t) {
                    L.Util.setOptions(this, t);
                    var e = this;
                    (this.options.pointToLayer = function (t, n) {
                        var o = t.properties,
                            r = "";
                        switch (o.symbol) {
                            case "60":
                            case "62":
                                r = "H";
                                break;
                            case "61":
                            case "63":
                                r = "L";
                        }
                        return (0, i.label)(n, o.level || r, e.options);
                    }),
                        (this.options.style = function (t) {
                            var n = e.options,
                                i = t.geometry.type.toUpperCase(),
                                o = -1;
                            i.indexOf("POLY") >= 0
                                ? (o = "POLY")
                                : i.indexOf("LINE") >= 0
                                ? (o = "LINE")
                                : i.indexOf("POINT") >= 0 && (o = "POINT");
                            var r = +t.properties.level,
                                a = n.color,
                                s = void 0;
                            switch (o) {
                                case "POLY":
                                    s = {
                                        fill: n.polyVisible,
                                        stroke: !1,
                                        level: r,
                                        fillColor: e._colorMap ? e._getFillColor(t) : "",
                                        fillOpacity: n.fillOpacity,
                                    };
                                    break;
                                case "LINE":
                                    (s = {
                                        stroke: n.lineVisible,
                                        level: r,
                                        color: a,
                                        weight: -1 != n.blodLevels.indexOf(r) ? n.weight + 1 : n.weight,
                                        dashArray: r < 0 ? "10 5" : null,
                                    }),
                                        n.lineVisible && n.polyVisible && (s.weight = 0.5);
                                    break;
                                case "POINT":
                                    (s = {
                                        labelVisible: n.labelVisible,
                                        color: a,
                                        font: n.font,
                                        outLineColor: n.outLineColor,
                                    }),
                                        t.properties.symbol && (s.font = "bold 30px tahoma");
                            }
                            return s;
                        }),
                        L.GeoJSON.prototype.initialize.call(this, "", t),
                        this.bindTooltip(this._getTooltip, { sticky: !0 });
                },
                getData: function () {
                    return this._data;
                },
                setData: function (t) {
                    return (
                        this.clearLayers(),
                        (this._data = t),
                        this.addData(t),
                        this.setCaption(t.properties.name),
                        this.options.polyVisible && this.bringToBack(),
                        this
                    );
                },
                _getTooltip: function (t) {
                    var e = t.feature;
                    return e
                        ? "Polygon" == e.geometry.type
                            ? (e.properties.isHigh ? ">" : "<") + e.properties.level
                            : "=" + (e.properties.level || e.properties.symbol)
                        : "";
                },
                _getFillColor: function (t) {
                    var e = t.properties.level,
                        n = t.properties.isHigh,
                        i = this._colorMap.getColor(e, n);
                    return (i = i ? "#" + i : "transparent");
                },
            }));
        e.analyLayer = function (t, e) {
            return new o(t, e);
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.label = e.Label = void 0);
        var i = n(57);
        n(133);
        var o = (e.Label = i.Station.extend({
            options: {
                labelVisible: !0,
                color: "blue",
                outLineColor: "white",
                font: "bold 18px tahoma",
                shadowColor: "#aaa",
                shadowBlur: 5,
            },
            _updatePath: function () {
                this._renderer._updateLabel(this);
            },
            _updateBounds: function () {
                var t = this._getTextSize();
                this._pxBounds = new L.Bounds(this._point.subtract(t), this._point.add(t));
            },
            _getTextSize: function () {
                var t = this.getData();
                return [this._renderer._getTextWidth(t, this.options.font) / 2, 10];
            },
            getBounds: function () {
                var t = this._getTextSize();
                return new L.LatLngBounds(
                    this._map.layerPointToLatLng(this._point.subtract(t)),
                    this._map.layerPointToLatLng(this._point.add(t))
                );
            },
            getTooltipHtml: function () {
                return "";
            },
        }));
        e.label = function (t, e, n) {
            return new o(t, e, n);
        };
    },
    function (t, e, n) {
        "use strict";
        L.Canvas.include({
            _updateLabel: function (t) {
                var e = t.options;
                if (this._drawing && !t._empty() && !1 !== e.labelVisible) {
                    var n = t._point,
                        i = t.getData(),
                        o = this._ctx;
                    o.save(),
                        (o.font = e.font),
                        (o.fillStyle = e.color),
                        (o.strokeStyle = e.outLineColor),
                        (o.textAlign = "center"),
                        (o.textBaseline = "middle"),
                        e.outLineColor && o.strokeText(i, n.x, n.y),
                        o.fillText(i, n.x, n.y),
                        o.restore();
                }
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(135);
        Object.defineProperty(e, "GridImageLayer", {
            enumerable: !0,
            get: function () {
                return i.GridImageLayer;
            },
        }),
            Object.defineProperty(e, "gridImageLayer", {
                enumerable: !0,
                get: function () {
                    return i.gridImageLayer;
                },
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.GridImageLayer = void 0),
            (e.gridImageLayer = function (t) {
                return new a(t);
            });
        var i = n(56),
            o = n(34),
            r = n(32),
            a = (e.GridImageLayer = L.ImageOverlay.extend({
                options: {
                    caption: "网格栅格色斑图",
                    interactive: !0,
                    dataType: "arraybuffer",
                    timeout: 1e4,
                    opacity: 0.8,
                    bounds: [
                        [0, 0],
                        [0, 0],
                    ],
                    autoLevel: !0,
                    colors: [["0000ff", "ff0000"], "0000ff", "00ff00", "ffff00", "ff0000"],
                },
                initialize: function (t) {
                    L.setOptions(this, t),
                        L.ImageOverlay.prototype.initialize.call(this, "", this.options.bounds, this.options);
                },
                _overlayOnError: function (t) {
                    this._url && this.fire("error", { message: t });
                },
                getData: function () {
                    return this._data;
                },
                setData: function (t) {
                    return (
                        (this._data = t),
                        this.options.clipBounds && t.clip(this.options.clipBounds),
                        this.setBounds([
                            [t.startLat - t.latGridSpace / 2, t.startLng - t.lngGridSpace / 2],
                            [t.endLat + t.latGridSpace / 2, t.endLng + t.lngGridSpace / 2],
                        ]),
                        this.setCaption(t.caption + "-栅格"),
                        (this.max = Math.arrayMax(t.data)),
                        (this.min = Math.arrayMin(t.data)),
                        this.redraw(),
                        this
                    );
                },
                getValue: function (t, e) {
                    return console.log(t), t.getCaption();
                },
                redraw: function () {
                    this._image.style.imageRendering = "pixelated";
                    var t = this.toImage(this._data);
                    this.setUrl(t), this._updateLegend(this.pal);
                },
                setPalette: function (t) {
                    (this.options.colors = t), redraw();
                },
                toImage: function () {
                    var t = this._data;
                    this.options.levels && (this._data.levels = this.options.levels),
                        this.options.autoLevel
                            ? (this.min, this.max)
                            : (this._data.levels[0], this._data.levels[this._data.levels.length - 1]);
                    var e = (0, o.gridProjetion)(t, this._map.options.crs);
                    return (
                        (this.pal = (0, r.palette)(this.options.colors, this._data.levels)),
                        this._updateLegend(this.pal),
                        (0, i.grid2Img)(e, t.lngGridNumber, this.pal)
                    );
                },
                _legend: null,
                _updateLegend: function () {
                    if (this._data) {
                        var t = this._legend.getContext("2d");
                        this.pal.drawLegend(t, this._legend.height - 40);
                    }
                },
                onAdd: function (t) {
                    L.ImageOverlay.prototype.onAdd.call(this, t);
                    var e = this._map.getLegend().getContainer();
                    (this._legend = L.DomUtil.create("canvas", "", e)),
                        (this._legend.width = 60),
                        (this._legend.height = 520),
                        this._updateLegend(this.pal);
                },
                onRemove: function (t) {
                    L.DomUtil.remove(this._legend), L.ImageOverlay.prototype.onRemove.call(this, t);
                },
            }));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(68);
        Object.defineProperty(e, "ContourLayer", {
            enumerable: !0,
            get: function () {
                return i.ContourLayer;
            },
        }),
            Object.defineProperty(e, "contourLayer", {
                enumerable: !0,
                get: function () {
                    return i.contourLayer;
                },
            });
        var o = n(139);
        Object.defineProperty(e, "ContourToolbar", {
            enumerable: !0,
            get: function () {
                return o.ContourToolbar;
            },
        }),
            Object.defineProperty(e, "contourToolbar", {
                enumerable: !0,
                get: function () {
                    return o.contourToolbar;
                },
            });
    },
    function (t, e, n) {
        "use strict";
        var i,
            o = n(88),
            r = (i = o) && i.__esModule ? i : { default: i };
        !(function () {
            function e(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n],
                        o = i.toPolyArray();
                    if (o.length > 0) {
                        for (
                            var r = {
                                    type: "Feature",
                                    properties: {
                                        level: i.level,
                                        isHigh: i.isHigh,
                                        isClosed: i.isClosed,
                                        holes: i.subPolys,
                                    },
                                    geometry: { type: "Polygon", coordinates: [o] },
                                },
                                a = 0;
                            a < i.subPolys.length;
                            a++
                        ) {
                            var s = t[i.subPolys[a]];
                            r.geometry.coordinates.push(s.toPolyArray());
                        }
                        e.push(r);
                    }
                }
                return e;
            }
            function n(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n],
                        o = i.toLineArray();
                    if (o.length > 0) {
                        var r = {
                            type: "Feature",
                            properties: { level: i.level },
                            geometry: { type: "MultiLineString", coordinates: o },
                        };
                        e.push(r);
                    }
                }
                return e;
            }
            function i(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n],
                        o = i.toPointArray();
                    if (o.length > 0) {
                        var r = {
                            type: "Feature",
                            properties: { level: i.level },
                            geometry: { type: "MultiPoint", coordinates: o },
                        };
                        e.push(r);
                    }
                }
                return e;
            }
            t.exports = function (t, o) {
                var a = function (t, e) {
                    this._init(t, e);
                };
                a.prototype = {
                    _init: function (t, e) {
                        return (this._sides = []), t && this.setData(t, e), this;
                    },
                    setData: function (t, e) {
                        (this.gridData = e
                            ? (function (t, e) {
                                  for (var n = Math.floor(t.length / e), i = [], o = 0; o < n; o++) {
                                      var r = o * e;
                                      i.push(t.slice(r, r + e));
                                  }
                                  return i;
                              })(t, e)
                            : t),
                            (this.min = 999999),
                            (this.max = -999999);
                        for (var n = 0; n < this.gridData.length; n++)
                            for (var i = 0; i < this.gridData[n].length; i++)
                                (this.min = Math.min(this.min, this.gridData[n][i])),
                                    (this.max = Math.max(this.max, this.gridData[n][i]));
                        return this._createrSide(), this;
                    },
                    track: function (t, o) {
                        if (!this.gridData) throw "格点数据为空不能分析，请在构造函数或用setData传入数据";
                        t instanceof Array || (t = [t]),
                            (this.levels = t.sort(function (t, e) {
                                return t - e;
                            }));
                        for (var r = [], a = [], s = 0, l = t.length; s < l; s++) {
                            var u = t[s],
                                c = s === l - 1 ? u : t[s + 1],
                                d = 0 === s ? u : t[s - 1];
                            o && o(u),
                                c >= this.min && d <= this.max && (a.push(u), (r = r.concat(this._trackLevel(u))));
                        }
                        return (
                            r.sort(h.compare),
                            this._topo(r),
                            (r.toJson = function () {
                                return {
                                    type: "FeatureCollection",
                                    properties: { levels: t, realLevels: a },
                                    features: [].concat(e(r), n(r), i(r)),
                                };
                            }),
                            r
                        );
                    },
                    _trackLevel: function (t) {
                        var e = this;
                        function n(n) {
                            e._sides.forEach(function (o) {
                                if (o._atEdge == n) {
                                    var r = e._trackSide(o, t);
                                    if (r.length > 0) {
                                        var a = o.v2 > o.v1;
                                        i.push(new h(t, r, a));
                                    }
                                }
                            });
                        }
                        this._interpolate(t);
                        var i = [];
                        return n(!0), n(!1), i;
                    },
                    _trackSide: function (t, e) {
                        for (
                            var n = [];
                            !t.hasUsed && (n.push(t.point), (t.hasUsed = !0), (t = this._getNextSide(t, e)));

                        );
                        return n;
                    },
                    _getNextSide: function (t, e) {
                        var n = null,
                            i = [3],
                            o = void 0,
                            r = [
                                [
                                    [1, -1, 0],
                                    [1, -1, 1],
                                    [0, -1, 0],
                                ],
                                [
                                    [0, 0, -1],
                                    [0, 1, -1],
                                    [1, 0, -1],
                                ],
                                [
                                    [1, 0, 0],
                                    [1, 0, 1],
                                    [0, 1, 0],
                                ],
                                [
                                    [0, 0, 0],
                                    [0, 1, 0],
                                    [1, 0, 1],
                                ],
                            ][t.k + t.direct + 1];
                        for (o = 0; o < 3; o++)
                            if (((i[o] = this._getSide(r[o][0], t.i + r[o][1], t.j + r[o][2])), !i[o])) return null;
                        if (!i[0].hasUsed && !i[1].hasUsed && i[0].point && i[1].point)
                            ((t.v1 + t.v2 + i[2].v1 + i[2].v2) / 4 - e) * (t.v1 - e) < 0
                                ? ((n = i[0]).direct = -1)
                                : ((n = i[1]).direct = 1);
                        else
                            for (o = 0; o < i.length; o++)
                                if (!i[o].hasUsed) {
                                    (n = i[o]).direct = 0 === o ? -1 : 1 === o ? 1 : t.direct;
                                    break;
                                }
                        return n;
                    },
                    _topo: function (t) {
                        var e = [],
                            n = t.length;
                        for (var i = 0; i < n; i++) (t[i].index = i), e.push(i);
                        return (
                            t.forEach(function (n, i) {
                                (e[i] = -1),
                                    (function n(i) {
                                        for (var o = t.indexOf(i); o < t.length; o++)
                                            if (-1 != e[o]) {
                                                var r = t[o];
                                                i.ispolyInPoly(r) && (i.subPolys.push(o), (e[o] = -1), n(r));
                                            }
                                    })(n);
                            }),
                            this
                        );
                    },
                    _createrSide: function () {
                        var t = void 0,
                            e = void 0,
                            n = void 0,
                            i = void 0,
                            o = void 0,
                            r = this.gridData.length + 2,
                            a = this.gridData[0].length + 2;
                        for (this._sides = [], t = 0; t < r; t++)
                            for (e = 0; e < a - 1; e++)
                                (n = this._getValue(t - 1, e - 1)),
                                    (i = this._getValue(t - 1, e)),
                                    (o = t <= 1 || t >= r - 2 || 0 === e || e === a - 2),
                                    this._sides.push(new l(n, i, 0, t, e, o));
                        for (t = 0; t < r - 1; t++)
                            for (e = 0; e < a; e++)
                                (n = this._getValue(t - 1, e - 1)),
                                    (i = this._getValue(t, e - 1)),
                                    (o = 0 === t || t === r - 2 || e <= 1 || e >= a - 2),
                                    this._sides.push(new l(n, i, 1, t, e, o));
                    },
                    _getValue: function (t, e) {
                        return t < 0 || t >= this.gridData.length || e < 0 || e >= this.gridData[0].length
                            ? NaN
                            : this.gridData[t][e];
                    },
                    _getSide: function (t, e, n) {
                        var i = this.gridData.length + 2,
                            o = this.gridData[0].length + 2,
                            r = (o - 1) * i * t + (o + t - 1) * e + n;
                        return this._sides[r];
                    },
                    _interpolate: function (t) {
                        var e = this;
                        return (
                            this._sides.forEach(function (n) {
                                n.interpolate(t), (n.direct = n.j == e.gridData[0].length ? -1 : 1);
                            }),
                            this
                        );
                    },
                };
                var s = function (t, e) {
                        return Math.abs(t - e) < 1e-7;
                    },
                    l = function (t, e, n, i, o, r) {
                        this._init(t, e, n, i, o, r);
                    };
                l.prototype = {
                    _init: function (t, e, n, i, o, r) {
                        return (
                            (this.v1 = t),
                            (this.v2 = e),
                            (this.k = n),
                            (this.i = i),
                            (this.j = o),
                            (this.point = null),
                            (this._atEdge = r),
                            (this.direct = 1),
                            (this.hasUsed = !1),
                            this
                        );
                    },
                    interpolate: function (t) {
                        var e = this.v1,
                            n = this.v2,
                            i = NaN;
                        return (
                            (this.point = null),
                            (this.hasUsed = !0),
                            isNaN(e) && (e = -999999),
                            isNaN(n) && (n = -999999),
                            s(t, e) && (e += 1e-7),
                            s(t, n) && (n += 1e-7),
                            (t - e) * (t - n) < 0 &&
                                ((i = (t - e) / (n - e)),
                                (this.point = { x: this.j - 1, y: this.i - 1, _atEdge: this._atEdge }),
                                (this.point[0 === this.k ? "x" : "y"] += i),
                                (this.hasUsed = !1)),
                            this
                        );
                    },
                };
                var h = function t(e, n, i) {
                    this._init(e, n, i),
                        (t.compare = function (t, e) {
                            var n = e.size.area - t.size.area;
                            return Math.abs(n) < 1e-4 && (n = t.level - e.level), n;
                        });
                };
                return (
                    (h.prototype = {
                        _init: function (t, e, n) {
                            this.setData(t, e, n);
                        },
                        setData: function (t, e, n) {
                            (this.points = e),
                                this.reduce(),
                                this.points.push(JSON.parse((0, r.default)(e[0]))),
                                (this.isHigh = n),
                                (this.level = t),
                                (this.isClosed = !e[0]._atEdge),
                                this.isClosed || (this.isHigh = !0),
                                (this.size = this._getSize()),
                                (this.subPolys = []),
                                this._setPointFlag();
                        },
                        _getSpline: function (t) {
                            var e = t || 0.2,
                                n = this.points,
                                i = void 0,
                                o = n.length;
                            if (o < 4) return n;
                            if (this.isClosed) for (i = 0; i < 3; i++) n.push(n[i]);
                            var r = [];
                            for (i = 0; i < o; i++) {
                                var a = n[i];
                                this.isClosed
                                    ? (r = r.concat(this._spline(i, e)))
                                    : (a._atEdge && r.push(a),
                                      i < o - 2 && !n[i + 1]._atEdge && !n[i + 2]._atEdge
                                          ? (r = r.concat(this._spline(i, e)))
                                          : i > 0 &&
                                            i < o - 1 &&
                                            n[i - 1]._atEdge &&
                                            !a._atEdge &&
                                            n[i + 1]._atEdge &&
                                            r.push(a));
                            }
                            if (this.isClosed) for (i = 0; i < 3; i++) n.pop();
                            return r;
                        },
                        _spline: function (t, e) {
                            var n = [];
                            function i(t, e, n) {
                                for (
                                    var i = [
                                            ((1 - n) * (1 - n) * (1 - n)) / 6,
                                            (3 * n * n * n - 6 * n * n + 4) / 6,
                                            (-3 * n * n * n + 3 * n * n + 3 * n + 1) / 6,
                                            (n * n * n) / 6,
                                        ],
                                        o = { x: 0, y: 0 },
                                        r = 0;
                                    r < i.length;
                                    r++
                                )
                                    (o.x += i[r] * t[e + r].x), (o.y += i[r] * t[e + r].y);
                                return (o._atEdge = !1), o;
                            }
                            for (var o = 0; o <= 1; o += e) {
                                var r = i(this.points, t, o);
                                (r._atEdge = !1), n.push(r);
                            }
                            return n;
                        },
                        ispolyInPoly: function (t) {
                            var e = this.size,
                                n = t.size;
                            return (
                                e.area > n.area &&
                                e.left < n.left &&
                                e.right > n.right &&
                                e.top < n.top &&
                                e.bottom > n.bottom &&
                                this.isPointInPoly(t.points[0])
                            );
                        },
                        isPointInPoly: function (t) {
                            for (
                                var e = this.points, n = t.x, i = t.y, o = !1, r = 0, a = e.length - 1;
                                r < e.length;
                                a = r++
                            ) {
                                var s = e[r].x,
                                    l = e[r].y,
                                    h = e[a].x,
                                    u = e[a].y;
                                l > i != u > i && n < ((h - s) * (i - l)) / (u - l) + s && (o = !o);
                            }
                            return o;
                        },
                        _isHigh: function () {
                            var t = !0,
                                e = this._side,
                                n = e.v1,
                                i = e.v2,
                                o = { x: e.j, y: e.i };
                            return this.isClosed && (t = this.isPointInPoly(o) ? n > i : i > n), t;
                        },
                        _getSize: function () {
                            var t = this.points;
                            if (0 === t.length) return 0;
                            var e = 0,
                                n = 0,
                                i = t[0].x,
                                o = t[0].y;
                            return (
                                t.forEach(function (t) {
                                    (e = Math.max(t.x, e)),
                                        (n = Math.max(t.y, n)),
                                        (i = Math.min(t.x, i)),
                                        (o = Math.min(t.y, o));
                                }),
                                { area: (e - i) * (n - o), left: i, right: e, top: o, bottom: n }
                            );
                        },
                        _setPointFlag: function () {
                            for (var t = this.points, e = t.length, n = 0; n < e; n++) {
                                var i = t[n];
                                if (this.isClosed) i.flag = 0 === n ? "b" : n === e - 1 ? "e" : "m";
                                else {
                                    var o = t[n - 1],
                                        r = t[n + 1];
                                    i._atEdge
                                        ? r && !r._atEdge && o && !o._atEdge
                                            ? (i.flag = "m")
                                            : r && !r._atEdge
                                            ? (i.flag = "b")
                                            : o && !o._atEdge && (i.flag = "e")
                                        : (i.flag = "m");
                                }
                            }
                        },
                        getCenter: function () {
                            for (var t = this.points, e = 0, n = 0, i = 0, o = t.length, r = 1; r <= o; r++) {
                                var a = t[r - 1].x,
                                    s = t[r - 1].y,
                                    l = (t[r].x * s - t[r].y * a) / 2;
                                (e += l), (n += (l * (t[r].x + a)) / 3), (i += (l * (t[r].y + s)) / 3);
                            }
                            return { x: (n /= e), y: (i /= e) };
                        },
                        _isClockwise: function () {
                            var t = 0,
                                e = this.points,
                                n = e.length;
                            if (n < 3) return !0;
                            for (var i = 0; i < n - 1; i++) t += -0.5 * (e[i + 1].y + e[i].y) * (e[i + 1].x - e[i].x);
                            return t < 0;
                        },
                        reduce: function () {
                            function t(t, e) {
                                var n = e.x - t.x,
                                    i = e.y - t.y;
                                return n * n + i * i;
                            }
                            var e = this.points;
                            if (e.length > 3)
                                for (var n = 0; n < 5; n++) {
                                    for (var i = 0, o = e.length - 1; o >= 1; o--) {
                                        var r = e[o],
                                            a = e[o - 1];
                                        !a._atEdge && t(r, a) < 1e-4 && (e.splice(o, 1), i++);
                                    }
                                    if (0 == i) break;
                                }
                            return this;
                        },
                        toPolyArray: function () {
                            var t = [];
                            return (
                                this.points.forEach(function (e) {
                                    var n = [e.x.toFixed(6), e.y.toFixed(6), e.flag];
                                    t.push(n);
                                }),
                                t
                            );
                        },
                        toPointArray: function () {
                            var t = [];
                            return (
                                this.points.forEach(function (e) {
                                    if ("b" === e.flag || "e" === e.flag) {
                                        var n = [e.x.toFixed(6), e.y.toFixed(6), e.flag];
                                        t.push(n);
                                    }
                                }),
                                t
                            );
                        },
                        toLineArray: function () {
                            var t = [],
                                e = [];
                            return (
                                this.points.forEach(function (n) {
                                    var i = n.flag,
                                        o = [n.x.toFixed(6), n.y.toFixed(6), n.flag];
                                    "b" === i ? (e = [o]) : "e" === i ? (e.push(o), t.push(e)) : "m" === i && e.push(o);
                                }),
                                t
                            );
                        },
                    }),
                    new a(t, o)
                );
            };
        })();
    },
    function (t, e, n) {
        var i = n(3),
            o = i.JSON || (i.JSON = { stringify: JSON.stringify });
        t.exports = function (t) {
            return o.stringify.apply(o, arguments);
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ContourToolbar = void 0);
        var i = n(68),
            o = n(8),
            r = (e.ContourToolbar = o.LayerToolbar.extend({
                onAdd: function (t) {
                    var e = o.LayerToolbar.prototype.onAdd.call(this, t),
                        n = "layer-toolbar-button",
                        i = this.layer.options;
                    return (
                        (this.line = this._createButton("线条", "等值线线条", n, e, function () {
                            (i.lineVisible = !i.lineVisible), this._update(i);
                        })),
                        (this.poly = this._createButton("填色", "等值线填色", n, e, function () {
                            (i.polyVisible = !i.polyVisible), this._update(i);
                        })),
                        (this.label = this._createButton("线值", "等值线值", n, e, function () {
                            (i.labelVisible = !i.labelVisible), this._update(i);
                        })),
                        (this.alphaAdd = this._createButton("透明+", "图层不透明度增加", n, e, function () {
                            i.fillOpacity < 1 && (i.fillOpacity += 0.1), this._update(i);
                        })),
                        (this.alphaLess = this._createButton("透明-", "图层不透明度减少", n, e, function () {
                            i.fillOpacity > 0.1 && (i.fillOpacity -= 0.1), this._update(i);
                        })),
                        this._createButton("调色板1", "更换调色板", n, e, function () {
                            this.layer.setPalette(["0000ff", "00ff00", "ffff00", "ff0000"]), this._update(i);
                        }),
                        this._createButton("调色板2", "更换调色板", n, e, function () {
                            this.layer.setPalette(["FFFFFF", "#55ff55", "#00aa00", "#0000ff", "0000aa"]),
                                this._update(i);
                        }),
                        this._createButton("调色板3", "更换调色板", n, e, function () {
                            this.layer.setPalette(["blue", "green", "yellow", "white"]), this._update(i);
                        }),
                        this._createButton("调色板4", "更换调色板", n, e, function () {
                            this.layer.setPalette(["green", "white"]), this._update(i);
                        }),
                        this._updateItems(i),
                        e
                    );
                },
                _update: function (t) {
                    this.layer.setStyle(t.style), this._updateItems(this.layer.options);
                },
                _updateItems: function (t) {
                    this.checkItem(this.poly, t.polyVisible),
                        this.checkItem(this.line, t.lineVisible),
                        this.checkItem(this.label, t.labelVisible);
                },
            }));
        i.ContourLayer.include({
            getToolbar: function () {
                return new r(this);
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(69);
        Object.defineProperty(e, "StreamLineLayer", {
            enumerable: !0,
            get: function () {
                return i.StreamLineLayer;
            },
        }),
            Object.defineProperty(e, "streamLineLayer", {
                enumerable: !0,
                get: function () {
                    return i.streamLineLayer;
                },
            });
        var o = n(143);
        Object.defineProperty(e, "StreamLineToolbar", {
            enumerable: !0,
            get: function () {
                return o.StreamLineToolbar;
            },
        }),
            Object.defineProperty(e, "streamLineToolbar", {
                enumerable: !0,
                get: function () {
                    return o.streamLineToolbar;
                },
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "StreamLine", function () {
                return i;
            }),
            n.d(e, "streamLine", function () {
                return o;
            }),
            n.d(e, "draw", function () {
                return r;
            });
        var i = (function () {
            function t(t, e, n) {
                (this._uv = []),
                    (this._xCount = 0),
                    (this._yCount = 0),
                    (this._cellPoints = []),
                    t && e && n && this.setData(t, e, n);
            }
            return (
                (t.prototype.setData = function (t, e, n) {
                    if (t.length < e * n * 2)
                        throw "uv数据大小不匹配! uv:" + t.length + ", xCount*yCount*2:" + e * n * 2;
                    return (this._uv = t), (this._xCount = e), (this._yCount = n), this;
                }),
                Object.defineProperty(t.prototype, "uv", {
                    get: function () {
                        return this._uv;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "xCount", {
                    get: function () {
                        return this._xCount;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "yCount", {
                    get: function () {
                        return this._yCount;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.track = function (t) {
                    void 0 === t && (t = 1);
                    for (var e = 0; e < this._xCount * this._yCount; e++) this._cellPoints[e] = [];
                    for (var n = [], i = 0; i < this._yCount - 1; i += t)
                        for (e = 0; e < this._xCount - 1; e += t) {
                            var o = this._trackLine(e + 0.5, i + 0.5);
                            o.length > 3 && n.push(o);
                        }
                    return (this._cellPoints = []), n;
                }),
                (t.prototype._trackLine = function (t, e) {
                    for (var n = [t, e], i = [n], o = t, r = e, a = 0; a < 1e3; ) {
                        var s = this._getUV(o, r);
                        if (null === s) break;
                        var l = Math.abs(s[0]),
                            h = Math.abs(s[1]);
                        if (l + h < 0.3) break;
                        var u = Math.max(l, h);
                        if (((n = [(o += (s[0] / u) * 0.3), (r += (s[1] / u) * 0.3)]), this._isNearSelf(i))) break;
                        var c = this._getCellPoints(o, r);
                        if (!c || this._isNearOtherLine(n, c)) break;
                        i.push(n), a++;
                    }
                    var d = i.length;
                    if (d > 3)
                        for (var f = 0; f < d; f++) {
                            var p = i[f],
                                _ = this._getCellPoints(p[0], p[1]);
                            _ && _.push(p);
                        }
                    return i;
                }),
                (t.prototype._getCellPoints = function (t, e) {
                    if (this._indexIsValid(t, e)) {
                        var n = Math.floor(t) + Math.floor(e) * this._xCount;
                        return this._cellPoints[n];
                    }
                    return [];
                }),
                (t.prototype._isNearSelf = function (t, e) {
                    void 0 === e && (e = 0.5);
                    var n = t.length;
                    if (n < 10) return !1;
                    for (var i = t[n - 1], o = 0; o < n - 10; o++) {
                        var r = t[o];
                        if (this._getDist(i, r) < e) return !0;
                    }
                    return !1;
                }),
                (t.prototype._isNearOtherLine = function (t, e, n) {
                    void 0 === n && (n = 1);
                    var i = e.length;
                    if (i < 1) return !1;
                    for (var o = 0; o < i; o++) {
                        var r = e[o];
                        if (this._getDist(r, t) < n) return !0;
                    }
                    return !1;
                }),
                (t.prototype._getDist = function (t, e) {
                    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
                }),
                (t.prototype._getUV = function (t, e) {
                    if (this._indexIsValid(t, e)) {
                        var n = Math.floor(t),
                            i = Math.floor(e),
                            o = t - n,
                            r = e - i,
                            a = i * this._xCount + n,
                            s = this._uv[a],
                            l = this._uv[a + 1],
                            h = this._uv[a + this._xCount + 1],
                            u = this._uv[a + this._xCount],
                            c = s + (l - s) * o,
                            d = u + (h - u) * o,
                            f = c + (d - c) * r;
                        a += this.xCount * this.yCount;
                        var p = this._uv[a],
                            _ = this._uv[a + 1],
                            m = this._uv[a + this._xCount + 1],
                            g = this._uv[a + this._xCount],
                            v = (c = p + (_ - p) * o) + ((d = g + (m - g) * o) - c) * r;
                        return isNaN(f) && console.log(t, e), [f, v];
                    }
                    return null;
                }),
                (t.prototype._indexIsValid = function (t, e) {
                    return t >= 0 && t < this._xCount - 1 && e >= 0 && e < this._yCount - 1;
                }),
                t
            );
        })();
        function o(t, e, n) {
            return new i(t, e, n);
        }
        function r(t, e, n, i, o) {
            void 0 === o && (o = !0);
            var r = t.canvas.width,
                a = t.canvas.height,
                s = 2 * Math.min(r / n, a / i);
            t.clearRect(0, 0, r, a), (t.strokeStyle = "green");
            for (var l = 0, h = e.length; l < h; l++) {
                u(e[l]), c(t, e[l]);
            }
            function u(t) {
                for (var e = 0; e < t.length; e++) (t[e][0] *= s), (t[e][1] *= s);
            }
            function c(t, e) {
                if (!(e.length < 5)) {
                    t.beginPath();
                    for (var n = e.length, i = 0, o = 0; o < n; o++) {
                        var r = e[o][0],
                            a = e[o][1];
                        if (0 === o) t.moveTo(r, a);
                        else if ((t.lineTo(r, a), i % 30 == 0 || o === n - 1)) d(t, e[o - 1][0], e[o - 1][1], r, a);
                        i++;
                    }
                    t.stroke();
                }
            }
            function d(t, e, n, i, o) {
                var r = Math.atan2(o - n, i - e);
                t.save(),
                    t.translate(i, o),
                    t.rotate(r),
                    t.lineTo(-8, -3),
                    t.moveTo(-8, 3),
                    t.lineTo(0, 0),
                    t.restore();
            }
        }
    },
    function (t, e, n) {
        "use strict";
        L.Canvas.include({
            _updateStreamLine: function (t) {
                function e(t, e, n, i, o) {
                    var r = Math.atan2(o - n, i - e);
                    t.save(),
                        t.translate(i, o),
                        t.rotate(r),
                        t.lineTo(-10, -4),
                        t.moveTo(-10, 4),
                        t.lineTo(0, 0),
                        t.restore();
                }
                var n = t.options;
                if (this._drawing && !t._empty()) {
                    var i = t._lines,
                        o = this._ctx;
                    o.save(),
                        (o.strokeStyle = n.color),
                        (o.lineWidth = n.lineWidth),
                        (o.shadowColor = n.shadowColor),
                        (o.shadowBlur = n.shadowBlur),
                        o.setLineDash([]),
                        (o.lineJoin = "round"),
                        o.beginPath();
                    for (var r = 0; r < i.length; r++) {
                        var a = i[r],
                            s = a.length;
                        if (!(s < 3))
                            for (var l = 0; l < s; l++) {
                                var h = a[l];
                                if (0 == l) o.moveTo(h.x, h.y);
                                else if ((o.lineTo(h.x, h.y), l === s - 1)) {
                                    var u = a[l - 2];
                                    e(o, u.x, u.y, h.x, h.y);
                                }
                            }
                    }
                    o.stroke(), o.restore();
                }
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.StreamLineToolbar = void 0);
        var i = n(69),
            o = n(8),
            r = (e.StreamLineToolbar = o.LayerToolbar.extend({
                onAdd: function (t) {
                    var e = o.LayerToolbar.prototype.onAdd.call(this, t),
                        n = this.layer.options,
                        i = "layer-toolbar-button";
                    return (
                        (this.normal = this._createButton("中", "流线密度-中", i, e, function () {
                            (n.density = 1), this._update(n);
                        })),
                        (this.low = this._createButton("密", "流线密度-密", i, e, function () {
                            (n.density = 0.5), this._update(n);
                        })),
                        (this.high = this._createButton("疏", "流线密度-疏", i, e, function () {
                            (n.density = 1.5), this._update(n);
                        })),
                        this._updateItems(n),
                        e
                    );
                },
                _update: function () {
                    this._updateItems(), this.layer.genStreamLine(), this._redraw();
                },
                _updateItems: function () {
                    var t = this.layer.options;
                    this.checkItem(this.low, 0.5 == t.density),
                        this.checkItem(this.high, 1.5 == t.density),
                        this.checkItem(this.normal, 1 == t.density);
                },
            }));
        i.StreamLineLayer.include({
            getToolbar: function () {
                return new r(this);
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(70);
        Object.defineProperty(e, "UVLayer", {
            enumerable: !0,
            get: function () {
                return i.UVLayer;
            },
        }),
            Object.defineProperty(e, "uvLayer", {
                enumerable: !0,
                get: function () {
                    return i.uvLayer;
                },
            });
        var o = n(146);
        Object.defineProperty(e, "UVToolbar", {
            enumerable: !0,
            get: function () {
                return o.UVToolbar;
            },
        });
    },
    function (t, e, n) {
        "use strict";
        var i,
            o = n(19),
            r = (i = o) && i.__esModule ? i : { default: i };
        L.Canvas.include({
            _updateUV: function (t) {
                function e(t, e) {
                    return [i.startLat + t * i.latGridSpace, i.startLng + e * i.lngGridSpace];
                }
                var n = t.options;
                if (this._drawing && !t._empty()) {
                    var i = t.getData(),
                        o = this._ctx;
                    o.save(),
                        (o.strokeStyle = n.color),
                        (o.lineWidth = n.lineWidth),
                        (o.shadowColor = n.shadowColor),
                        (o.shadowBlur = n.shadowBlur),
                        (o.lineJoin = "round");
                    var a = this._map,
                        s = a.getSize().x / 2,
                        l = a.getSize().y / 2,
                        h = a.containerPointToLatLng([s + 15, l]).lng - a.containerPointToLatLng([s - 15, l]).lng,
                        u = a.containerPointToLatLng([s, l - 15]).lat - a.containerPointToLatLng([s, l + 15]).lat;
                    (h = Math.round(h / Math.abs(i.latGridSpace))),
                        (u = Math.round(u / Math.abs(i.lngGridSpace))),
                        (h = Math.max(h, 1)),
                        (u = Math.max(u, 1));
                    for (var c = i.latGridNumber * i.lngGridNumber, d = 0; d <= i.latGridNumber; d += u)
                        for (var f = 0; f < i.lngGridNumber; f += h) {
                            var p = e(d, f);
                            if (
                                !(Math.abs(p[0]) > 85) &&
                                ((p = this._map.latLngToLayerPoint(p)), this._bounds.contains(p))
                            ) {
                                var _ = d * i.lngGridNumber + f,
                                    m = Math.round(i.data[_]),
                                    g = 630 - Math.round(i.data[_ + c]);
                                o.translate(p.x, p.y),
                                    "bar" == n.windStyle
                                        ? r.default.drawWindBar(o, g, m)
                                        : r.default.drawArrow(o, g, Math.min(m, 20)),
                                    o.translate(-p.x, -p.y);
                            }
                        }
                    o.restore();
                }
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.UVToolbar = void 0);
        var i = n(70),
            o = n(8),
            r = (e.UVToolbar = o.LayerToolbar.extend({
                onAdd: function (t) {
                    var e = o.LayerToolbar.prototype.onAdd.call(this, t),
                        n = this.layer.options,
                        i = "layer-toolbar-button";
                    return (
                        (this.windBar = this._createButton("凤羽", "", i, e, function () {
                            (n.windStyle = "bar"), this._update(n);
                        })),
                        (this.windArrow = this._createButton("箭头", "", i, e, function () {
                            (n.windStyle = "arrow"), this._update(n);
                        })),
                        this._updateItems(n),
                        e
                    );
                },
                _update: function () {
                    this._updateItems(), this._redraw();
                },
                _updateItems: function () {
                    var t = this.layer.options;
                    this.checkItem(this.windBar, "bar" == t.windStyle),
                        this.checkItem(this.windArrow, "arrow" == t.windStyle);
                },
            }));
        i.UVLayer.include({
            getToolbar: function () {
                return new r(this);
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(148);
        Object.defineProperty(e, "GridValueLayer", {
            enumerable: !0,
            get: function () {
                return i.GridValueLayer;
            },
        }),
            Object.defineProperty(e, "gridValueLayer", {
                enumerable: !0,
                get: function () {
                    return i.gridValueLayer;
                },
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (e.GridValueLayer = L.Path.extend({
            options: { density: 1, color: "black", shadowColor: "#aaa", shadowBlur: 5, precision: 1, interactive: !1 },
            _data: null,
            initialize: function (t) {
                L.setOptions(this, t);
            },
            getData: function () {
                return this._data;
            },
            setData: function (t) {
                return (this._data = t), this.setCaption(t.caption + "-格点值"), this.redraw(), this;
            },
            getBounds: function () {
                var t = this.getData().bbox;
                return L.latLngBounds([t[1], t[0]], [t[3], t[2]]);
            },
            _update: function () {
                this._map && this._updatePath();
            },
            _project: function () {
                var t = this.getData();
                if (t) {
                    var e = t.bbox,
                        n = this._map.latLngToLayerPoint([e[1], e[0]]),
                        i = this._map.latLngToLayerPoint([e[3], e[2]]),
                        o = [30, 30],
                        r = L.bounds(n, i);
                    this._pxBounds = L.bounds(r.min.subtract(o), r.max.add(o));
                }
                return this;
            },
            _updatePath: function () {
                this._renderer._updateGridValue(this);
            },
            _containsPoint: function () {
                return !1;
            },
            _empty: function () {
                return !this._data || !this._renderer._bounds.intersects(this._pxBounds);
            },
        }));
        e.gridValueLayer = function (t) {
            return new i(t);
        };
        L.Canvas.include({
            _updateGridValue: function (t) {
                function e(t, e) {
                    return [i.startLat + t * i.latGridSpace, i.startLng + e * i.lngGridSpace];
                }
                var n = t.options;
                if (this._drawing && !t._empty()) {
                    var i = t.getData(),
                        o = this._ctx;
                    o.save(),
                        (o.fillStyle = n.color),
                        (o.shadowColor = n.shadowColor),
                        (o.shadowBlur = n.shadowBlur),
                        (o.textAlign = "center"),
                        (o.textBaseline = "middle");
                    var r = this._map,
                        a = r.getSize().x / 2,
                        s = r.getSize().y / 2,
                        l = r.containerPointToLatLng([a + 25, s]).lng - r.containerPointToLatLng([a - 25, s]).lng,
                        h = r.containerPointToLatLng([a, s - 25]).lat - r.containerPointToLatLng([a, s + 25]).lat;
                    (l = Math.round(l / Math.abs(i.latGridSpace))),
                        (h = Math.round(h / Math.abs(i.lngGridSpace))),
                        (l = Math.max(l, 1)),
                        (h = Math.max(h, 1));
                    for (var u = 0; u < i.latGridNumber; u += h)
                        for (var c = 0; c < i.lngGridNumber; c += l) {
                            var d = e(u, c);
                            if (
                                !(Math.abs(d[0]) > 85) &&
                                ((d = this._map.latLngToLayerPoint(d)), this._bounds.contains(d))
                            ) {
                                var f = u * i.lngGridNumber + c;
                                o.translate(d.x, d.y),
                                    o.fillText(i.data[f].toFixed(n.precision), 0, 0),
                                    o.translate(-d.x, -d.y);
                            }
                        }
                    o.restore();
                }
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(71);
        Object.defineProperty(e, "ImagesLayer", {
            enumerable: !0,
            get: function () {
                return i.ImagesLayer;
            },
        }),
            Object.defineProperty(e, "imagesLayer", {
                enumerable: !0,
                get: function () {
                    return i.imagesLayer;
                },
            });
        var o = n(150);
        Object.defineProperty(e, "ImagesToolbar", {
            enumerable: !0,
            get: function () {
                return o.ImagesToolbar;
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ImagesToolbar = void 0);
        var i = n(71),
            o = n(8),
            r = (e.ImagesToolbar = o.LayerToolbar.extend({
                onAdd: function (t) {
                    var e = o.LayerToolbar.prototype.onAdd.call(this, t);
                    return (
                        (this.anim = this._createButton("动画", "图像动画", "layer-toolbar-button", e, function () {
                            this.layer.anim();
                        })),
                        e
                    );
                },
            }));
        i.ImagesLayer.include({
            getToolbar: function () {
                return new r(this);
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), n(152);
        var i = n(8),
            o = n(153);
        n(154),
            (e.default = {
                LayerToolbar: i.LayerToolbar,
                createLayerToolbar: i.createLayerToolbar,
                Legend: o.Legend,
                legend: o.legend,
            });
    },
    function (t, e, n) {
        "use strict";
        L.Control.include({
            hint: "",
            addTo: function (t) {
                var e = this;
                this.remove(), (this._map = t);
                var n = this.getPosition(),
                    i = t._controlCorners[n] || L.DomUtil.get(n);
                i || console.error("{pos} not found");
                var o = (this._container = this.onAdd(t));
                return (
                    L.DomUtil.addClass(o, "leaflet-control"),
                    -1 !== n.indexOf("bottom") ? i.insertBefore(o, i.firstChild) : i.appendChild(o),
                    this._map.on("unload", this.remove, this),
                    "" != this.hint &&
                        (L.DomEvent.on(
                            i,
                            "mouseover",
                            function () {
                                e._map.fire("hint", { message: e.hint });
                            },
                            this
                        ),
                        L.DomEvent.on(
                            i,
                            "mouseout",
                            function () {
                                e._map.fire("hint", { message: "" });
                            },
                            this
                        )),
                    this
                );
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (e.Legend = L.Control.extend({
                options: { position: "topright" },
                initialize: function (t) {
                    L.setOptions(this, t);
                },
                onAdd: function (t) {
                    return (this._map = t), L.DomUtil.create("div", "legend-pane");
                },
                clear: function () {
                    this._container.innerHTML = "";
                },
            })),
            o = (e.legend = function (t) {
                return new i(t);
            });
        L.Map.include({
            getLegend: function () {
                return this._legend || (this._legend = o().addTo(this)), this._legend;
            },
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (e.Toast = L.Control.extend({
            initialize: function (t, e, n) {
                L.setOptions(this, t), (this.msg = e), (this.title = n), (this.delay = t.delay);
            },
            onAdd: function (t) {
                var e = L.DomUtil.create("div", "toast"),
                    n = L.DomUtil.create("div", "toast-title", e);
                this.title && (n.innerHTML = this.title);
                var i = L.DomUtil.create("a", "", n);
                return (
                    (i.innerHTML = "&nbsp;×&nbsp;"),
                    L.DomEvent.on(
                        i,
                        "click",
                        function () {
                            this.remove();
                        },
                        this
                    ),
                    (L.DomUtil.create("div", "toast-content", e).innerHTML = this.msg),
                    e
                );
            },
        }));
        L.Map.addInitHook(function () {
            var t = this;
            L.toast = function (e, n, o) {
                var r = new i({ position: "bottomright" }, e, (o = o || ""));
                return (
                    r.addTo(t),
                    (n |= 5) > 0 &&
                        setTimeout(function () {
                            r.remove();
                        }, 1e3 * n || 1e4),
                    this
                );
            };
        });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = a(n(156)),
            o = a(n(166)),
            r = (function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return (e.default = t), e;
            })(n(34));
        function a(t) {
            return t && t.__esModule ? t : { default: t };
        }
        var s = {};
        L.extend(s, r),
            (e.default = s),
            (Function.prototype.before = function (t) {
                var e = this;
                return function () {
                    return t.apply(this, arguments), e.apply(this, arguments);
                };
            }),
            (Function.prototype.after = function (t) {
                var e = this;
                return function () {
                    var n = e.apply(this, arguments);
                    return t.apply(this, arguments), n;
                };
            }),
            (Math.arrayMax = function (t) {
                var e = -o.default,
                    n = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var s, l = (0, i.default)(t); !(n = (s = l.next()).done); n = !0) {
                        var h = s.value;
                        h > e && (e = h);
                    }
                } catch (t) {
                    (r = !0), (a = t);
                } finally {
                    try {
                        !n && l.return && l.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return e;
            }),
            (Math.arrayMin = function (t) {
                var e = o.default,
                    n = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var s, l = (0, i.default)(t); !(n = (s = l.next()).done); n = !0) {
                        var h = s.value;
                        h < e && (e = h);
                    }
                } catch (t) {
                    (r = !0), (a = t);
                } finally {
                    try {
                        !n && l.return && l.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return e;
            });
    },
    function (t, e, n) {
        t.exports = { default: n(157), __esModule: !0 };
    },
    function (t, e, n) {
        n(74), n(75), (t.exports = n(165));
    },
    function (t, e, n) {
        "use strict";
        var i = n(159),
            o = n(160),
            r = n(16),
            a = n(21);
        (t.exports = n(72)(
            Array,
            "Array",
            function (t, e) {
                (this._t = a(t)), (this._i = 0), (this._k = e);
            },
            function () {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length
                    ? ((this._t = void 0), o(1))
                    : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
            },
            "values"
        )),
            (r.Arguments = r.Array),
            i("keys"),
            i("values"),
            i("entries");
    },
    function (t, e) {
        t.exports = function () {};
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { value: e, done: !!t };
        };
    },
    function (t, e, n) {
        "use strict";
        var i = n(86),
            o = n(39),
            r = n(36),
            a = {};
        n(10)(a, n(7)("iterator"), function () {
            return this;
        }),
            (t.exports = function (t, e, n) {
                (t.prototype = i(a, { next: o(1, n) })), r(t, e + " Iterator");
            });
    },
    function (t, e, n) {
        var i = n(18),
            o = n(9),
            r = n(37);
        t.exports = n(12)
            ? Object.defineProperties
            : function (t, e) {
                  o(t);
                  for (var n, a = r(e), s = a.length, l = 0; s > l; ) i.f(t, (n = a[l++]), e[n]);
                  return t;
              };
    },
    function (t, e, n) {
        var i = n(14),
            o = n(42),
            r = n(30)("IE_PROTO"),
            a = Object.prototype;
        t.exports =
            Object.getPrototypeOf ||
            function (t) {
                return (
                    (t = o(t)),
                    i(t, r)
                        ? t[r]
                        : "function" == typeof t.constructor && t instanceof t.constructor
                        ? t.constructor.prototype
                        : t instanceof Object
                        ? a
                        : null
                );
            };
    },
    function (t, e, n) {
        var i = n(29),
            o = n(27);
        t.exports = function (t) {
            return function (e, n) {
                var r,
                    a,
                    s = String(o(e)),
                    l = i(n),
                    h = s.length;
                return l < 0 || l >= h
                    ? t
                        ? ""
                        : void 0
                    : (r = s.charCodeAt(l)) < 55296 ||
                      r > 56319 ||
                      l + 1 === h ||
                      (a = s.charCodeAt(l + 1)) < 56320 ||
                      a > 57343
                    ? t
                        ? s.charAt(l)
                        : r
                    : t
                    ? s.slice(l, l + 2)
                    : a - 56320 + ((r - 55296) << 10) + 65536;
            };
        };
    },
    function (t, e, n) {
        var i = n(9),
            o = n(80);
        t.exports = n(3).getIterator = function (t) {
            var e = o(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return i(e.call(t));
        };
    },
    function (t, e, n) {
        t.exports = { default: n(167), __esModule: !0 };
    },
    function (t, e, n) {
        n(168), (t.exports = 9007199254740991);
    },
    function (t, e, n) {
        var i = n(15);
        i(i.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
    },
    ,
    ,
    function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(5),
            o = n.n(i),
            r = n(6),
            a = n.n(r),
            s = { insert: "head", singleton: !1 },
            l = o()(a.a, s);
        if (!a.a.locals || t.hot.invalidate) {
            var h = a.a.locals;
            t.hot.accept(
                6,
                function (e) {
                    (r = n(6)),
                        (function (t, e, n) {
                            if ((!t && e) || (t && !e)) return !1;
                            var i;
                            for (i in t) if ((!n || "default" !== i) && t[i] !== e[i]) return !1;
                            for (i in e) if (!((n && "default" === i) || t[i])) return !1;
                            return !0;
                        })(h, (a = n.n(r)).a.locals, void 0)
                            ? ((h = a.a.locals), l(a.a))
                            : t.hot.invalidate();
                }.bind(this)
            );
        }
        t.hot.dispose(function () {
            l();
        }),
            (e.default = a.a.locals || {});
    },
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC";
    },
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=";
    },
    function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
        "use strict";
        n(171), n(87);
        var i,
            o,
            r =
                ((i = "map"),
                (o = {
                    baseLayers: {
                        天地图: L.tileLayer(
                            "http://111.21.31.154:8000/map/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
                            { visible: !0 }
                        ),
                    },
                    overLayers: {
                        地名: L.tileLayer(
                            "http://111.21.31.154:8000/map/tianditu/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}",
                            { visible: !0, key: "174705aebfe31b79b3587279e211cb9a" }
                        ),
                    },
                    center: [37, 100],
                    zoom: 4.5,
                }),
                L.weatherMap(i, o));
        console.log("底图层(单选)", r.baseLayers),
            console.log("覆盖层(多选)", r.overLayers),
            console.log("用户层", r.userLayers);
    },
]);
