module.exports = (function (t) {
    var n = {}
    function e(r) {
        if (n[r]) return n[r].exports
        var o = (n[r] = { i: r, l: !1, exports: {} })
        return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
    }
    return (
        (e.m = t),
        (e.c = n),
        (e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r })
        }),
        (e.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 })
        }),
        (e.t = function (t, n) {
            if ((1 & n && (t = e(t)), 8 & n)) return t
            if (4 & n && 'object' == typeof t && t && t.__esModule) return t
            var r = Object.create(null)
            if (
                (e.r(r),
                Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: t,
                }),
                2 & n && 'string' != typeof t)
            )
                for (var o in t)
                    e.d(
                        r,
                        o,
                        function (n) {
                            return t[n]
                        }.bind(null, o)
                    )
            return r
        }),
        (e.n = function (t) {
            var n =
                t && t.__esModule
                    ? function () {
                          return t.default
                      }
                    : function () {
                          return t
                      }
            return e.d(n, 'a', n), n
        }),
        (e.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }),
        (e.p = ''),
        e((e.s = 10))
    )
})([
    function (t, n) {
        t.exports = require('react')
    },
    function (t, n, e) {
        t.exports = e(8)()
    },
    function (t, n, e) {
        'use strict'
        var r,
            o = function () {
                return (
                    void 0 === r &&
                        (r = Boolean(
                            window && document && document.all && !window.atob
                        )),
                    r
                )
            },
            i = (function () {
                var t = {}
                return function (n) {
                    if (void 0 === t[n]) {
                        var e = document.querySelector(n)
                        if (
                            window.HTMLIFrameElement &&
                            e instanceof window.HTMLIFrameElement
                        )
                            try {
                                e = e.contentDocument.head
                            } catch (t) {
                                e = null
                            }
                        t[n] = e
                    }
                    return t[n]
                }
            })(),
            a = []
        function c(t) {
            for (var n = -1, e = 0; e < a.length; e++)
                if (a[e].identifier === t) {
                    n = e
                    break
                }
            return n
        }
        function l(t, n) {
            for (var e = {}, r = [], o = 0; o < t.length; o++) {
                var i = t[o],
                    l = n.base ? i[0] + n.base : i[0],
                    u = e[l] || 0,
                    f = ''.concat(l, ' ').concat(u)
                e[l] = u + 1
                var s = c(f),
                    d = { css: i[1], media: i[2], sourceMap: i[3] }
                ;-1 !== s
                    ? (a[s].references++, a[s].updater(d))
                    : a.push({
                          identifier: f,
                          updater: m(d, n),
                          references: 1,
                      }),
                    r.push(f)
            }
            return r
        }
        function u(t) {
            var n = document.createElement('style'),
                r = t.attributes || {}
            if (void 0 === r.nonce) {
                var o = e.nc
                o && (r.nonce = o)
            }
            if (
                (Object.keys(r).forEach(function (t) {
                    n.setAttribute(t, r[t])
                }),
                'function' == typeof t.insert)
            )
                t.insert(n)
            else {
                var a = i(t.insert || 'head')
                if (!a)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    )
                a.appendChild(n)
            }
            return n
        }
        var f,
            s =
                ((f = []),
                function (t, n) {
                    return (f[t] = n), f.filter(Boolean).join('\n')
                })
        function d(t, n, e, r) {
            var o = e
                ? ''
                : r.media
                  ? '@media '.concat(r.media, ' {').concat(r.css, '}')
                  : r.css
            if (t.styleSheet) t.styleSheet.cssText = s(n, o)
            else {
                var i = document.createTextNode(o),
                    a = t.childNodes
                a[n] && t.removeChild(a[n]),
                    a.length ? t.insertBefore(i, a[n]) : t.appendChild(i)
            }
        }
        function p(t, n, e) {
            var r = e.css,
                o = e.media,
                i = e.sourceMap
            if (
                (o ? t.setAttribute('media', o) : t.removeAttribute('media'),
                i &&
                    'undefined' != typeof btoa &&
                    (r +=
                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                            btoa(
                                unescape(encodeURIComponent(JSON.stringify(i)))
                            ),
                            ' */'
                        )),
                t.styleSheet)
            )
                t.styleSheet.cssText = r
            else {
                for (; t.firstChild; ) t.removeChild(t.firstChild)
                t.appendChild(document.createTextNode(r))
            }
        }
        var g = null,
            b = 0
        function m(t, n) {
            var e, r, o
            if (n.singleton) {
                var i = b++
                ;(e = g || (g = u(n))),
                    (r = d.bind(null, e, i, !1)),
                    (o = d.bind(null, e, i, !0))
            } else
                (e = u(n)),
                    (r = p.bind(null, e, n)),
                    (o = function () {
                        !(function (t) {
                            if (null === t.parentNode) return !1
                            t.parentNode.removeChild(t)
                        })(e)
                    })
            return (
                r(t),
                function (n) {
                    if (n) {
                        if (
                            n.css === t.css &&
                            n.media === t.media &&
                            n.sourceMap === t.sourceMap
                        )
                            return
                        r((t = n))
                    } else o()
                }
            )
        }
        t.exports = function (t, n) {
            ;(n = n || {}).singleton ||
                'boolean' == typeof n.singleton ||
                (n.singleton = o())
            var e = l((t = t || []), n)
            return function (t) {
                if (
                    ((t = t || []),
                    '[object Array]' === Object.prototype.toString.call(t))
                ) {
                    for (var r = 0; r < e.length; r++) {
                        var o = c(e[r])
                        a[o].references--
                    }
                    for (var i = l(t, n), u = 0; u < e.length; u++) {
                        var f = c(e[u])
                        0 === a[f].references &&
                            (a[f].updater(), a.splice(f, 1))
                    }
                    e = i
                }
            }
        }
    },
    function (t, n, e) {
        'use strict'
        t.exports = function (t) {
            var n = []
            return (
                (n.toString = function () {
                    return this.map(function (n) {
                        var e = (function (t, n) {
                            var e = t[1] || '',
                                r = t[3]
                            if (!r) return e
                            if (n && 'function' == typeof btoa) {
                                var o =
                                        ((a = r),
                                        (c = btoa(
                                            unescape(
                                                encodeURIComponent(
                                                    JSON.stringify(a)
                                                )
                                            )
                                        )),
                                        (l =
                                            'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                                c
                                            )),
                                        '/*# '.concat(l, ' */')),
                                    i = r.sources.map(function (t) {
                                        return '/*# sourceURL='
                                            .concat(r.sourceRoot || '')
                                            .concat(t, ' */')
                                    })
                                return [e].concat(i).concat([o]).join('\n')
                            }
                            var a, c, l
                            return [e].join('\n')
                        })(n, t)
                        return n[2]
                            ? '@media '.concat(n[2], ' {').concat(e, '}')
                            : e
                    }).join('')
                }),
                (n.i = function (t, e, r) {
                    'string' == typeof t && (t = [[null, t, '']])
                    var o = {}
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var a = this[i][0]
                            null != a && (o[a] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var l = [].concat(t[c])
                        ;(r && o[l[0]]) ||
                            (e &&
                                (l[2]
                                    ? (l[2] = ''
                                          .concat(e, ' and ')
                                          .concat(l[2]))
                                    : (l[2] = e)),
                            n.push(l))
                    }
                }),
                n
            )
        }
    },
    function (t, n, e) {
        var r = e(2),
            o = e(5)
        'string' == typeof (o = o.__esModule ? o.default : o) &&
            (o = [[t.i, o, '']])
        var i = { insert: 'head', singleton: !1 }
        r(o, i)
        t.exports = o.locals || {}
    },
    function (t, n, e) {
        ;(n = e(3)(!1)).push([
            t.i,
            '#rainbow-text-dark {\n\tanimation-name: rainbow-flicker-dark;\n\tanimation-duration: 1s;\n\tanimation-iteration-count: infinite;\n}\n@keyframes rainbow-flicker-dark {\n\t0% {\n\t\tbackground-image: linear-gradient(\n\t\t\tto left,\n\t\t\twhite,\n\t\t\tgreen,\n\t\t\tyellow,\n\t\t\tmagenta,\n\t\t\torange,\n\t\t\tred\n\t\t);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t}\n\t25% {\n\t\tbackground-image: linear-gradient(\n\t\t\tto left,\n\t\t\torange,\n\t\t\tred,\n\t\t\twhite,\n\t\t\tgreen,\n\t\t\tyellow,\n\t\t\tmagenta\n\t\t);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t}\n\t50% {\n\t\tbackground-image: linear-gradient(\n\t\t\tto left,\n\t\t\tyellow,\n\t\t\tgreen,\n\t\t\tmagenta,\n\t\t\torange,\n\t\t\tred,\n\t\t\twhite\n\t\t);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t}\n\t100% {\n\t\tbackground-image: linear-gradient(\n\t\t\tto left,\n\t\t\tgreen,\n\t\t\tyellow,\n\t\t\tmagenta,\n\t\t\twhite,\n\t\t\torange,\n\t\t\tred\n\t\t);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t}\n}\n',
            '',
        ]),
            (t.exports = n)
    },
    function (t, n, e) {
        var r = e(2),
            o = e(7)
        'string' == typeof (o = o.__esModule ? o.default : o) &&
            (o = [[t.i, o, '']])
        var i = { insert: 'head', singleton: !1 }
        r(o, i)
        t.exports = o.locals || {}
    },
    function (t, n, e) {
        ;(n = e(3)(!1)).push([
            t.i,
            '#rainbow-text-light {\n\tanimation-name: rainbow-flicker-light;\n\tanimation-duration: 1s;\n\tanimation-iteration-count: infinite;\n}\n@keyframes rainbow-flicker-light {\n\t0% {\n\t\tbackground-image: linear-gradient(\n\t\t\tto left,\n\t\t\tred,\n\t\t\tpurple,\n\t\t\tbrown,\n\t\t\tblack,\n\t\t\tmagenta,\n\t\t\tteal\n\t\t);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t}\n\t25% {\n\t\tbackground-image: linear-gradient(\n\t\t\tto left,\n\t\t\tpurple,\n\t\t\tbrown,\n\t\t\tblack,\n\t\t\tmagenta,\n\t\t\tteal,\n\t\t\tred\n\t\t);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t}\n\t50% {\n\t\tbackground-image: linear-gradient(\n\t\t\tto left,\n\t\t\tbrown,\n\t\t\tblack,\n\t\t\tmagenta,\n\t\t\tteal,\n\t\t\tpurple,\n\t\t\tred\n\t\t);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t}\n\t100% {\n\t\tbackground-image: linear-gradient(\n\t\t\tto left,\n\t\t\tmagenta,\n\t\t\tteal,\n\t\t\tblack,\n\t\t\tbrown,\n\t\t\tpurple,\n\t\t\tred\n\t\t);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t}\n}\n',
            '',
        ]),
            (t.exports = n)
    },
    function (t, n, e) {
        'use strict'
        var r = e(9)
        function o() {}
        function i() {}
        ;(i.resetWarningCache = o),
            (t.exports = function () {
                function t(t, n, e, o, i, a) {
                    if (a !== r) {
                        var c = new Error(
                            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                        )
                        throw ((c.name = 'Invariant Violation'), c)
                    }
                }
                function n() {
                    return t
                }
                t.isRequired = t
                var e = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: n,
                    element: t,
                    elementType: t,
                    instanceOf: n,
                    node: t,
                    objectOf: n,
                    oneOf: n,
                    oneOfType: n,
                    shape: n,
                    exact: n,
                    checkPropTypes: i,
                    resetWarningCache: o,
                }
                return (e.PropTypes = e), e
            })
    },
    function (t, n, e) {
        'use strict'
        t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    function (t, n, e) {
        'use strict'
        e.r(n)
        var r = e(0),
            o = e.n(r),
            i =
                (e(4),
                function (t) {
                    var n = t.children,
                        e = t.fontSize,
                        r = t.fontWeight
                    return o.a.createElement(
                        'span',
                        {
                            id: 'rainbow-text-dark',
                            style: { fontSize: e || 50, fontWeight: r || 500 },
                        },
                        n
                    )
                }),
            a =
                (e(6),
                function (t) {
                    var n = t.children,
                        e = t.fontSize,
                        r = t.fontWeight
                    return o.a.createElement(
                        'span',
                        {
                            id: 'rainbow-text-light',
                            style: { fontSize: e || 50, fontWeight: r || 500 },
                        },
                        n
                    )
                }),
            c = e(1),
            l = e.n(c),
            u = function (t) {
                var n = t.children,
                    e = t.fontSize,
                    r = t.fontWeight,
                    c = t.colorMode,
                    l = { children: n, fontSize: e, fontWeight: r }
                return o.a.createElement(
                    'div',
                    null,
                    'dark' === c
                        ? o.a.createElement(i, l)
                        : o.a.createElement(a, l)
                )
            }
        u.propTypes = {
            children: l.a.element,
            fontSize: l.a.number,
            fontWeight: 1020,
            colorMode: 0,
        }
        n.default = u
    },
])
