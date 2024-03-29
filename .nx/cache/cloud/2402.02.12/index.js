'use strict';
var Rv = Object.create;
var Yi = Object.defineProperty;
var Tv = Object.getOwnPropertyDescriptor;
var xv = Object.getOwnPropertyNames;
var Ov = Object.getPrototypeOf,
  Cv = Object.prototype.hasOwnProperty;
var q = (r, e) => () => (r && (e = r((r = 0))), e);
var E = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
  At = (r, e) => {
    for (var t in e) Yi(r, t, { get: e[t], enumerable: !0 });
  },
  oh = (r, e, t, n) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let i of xv(e))
        !Cv.call(r, i) &&
          i !== t &&
          Yi(r, i, { get: () => e[i], enumerable: !(n = Tv(e, i)) || n.enumerable });
    return r;
  };
var Sr = (r, e, t) => (
    (t = r != null ? Rv(Ov(r)) : {}),
    oh(e || !r || !r.__esModule ? Yi(t, 'default', { value: r, enumerable: !0 }) : t, r)
  ),
  be = (r) => oh(Yi({}, '__esModule', { value: !0 }), r);
function ah() {
  return (
    process.env.CI === 'true' ||
    process.env.TF_BUILD === 'true' ||
    process.env.GITHUB_ACTIONS === 'true' ||
    process.env.BUILDKITE === 'true' ||
    process.env.CIRCLECI === 'true' ||
    process.env.CIRRUS_CI === 'true' ||
    process.env.TRAVIS === 'true' ||
    !!process.env['bamboo.buildKey'] ||
    !!process.env.CODEBUILD_BUILD_ID ||
    !!process.env.GITLAB_CI ||
    !!process.env.HEROKU_TEST_RUN_ID ||
    !!process.env.BUILD_ID ||
    !!process.env.BUILD_BUILDID ||
    !!process.env.TEAMCITY_VERSION
  );
}
var ch = q(() => {
  'use strict';
});
var hh = E((uA, ga) => {
  'use strict';
  var Iv = require('fs'),
    uh = require('path'),
    Nv = require('os');
  function lh(r) {
    console.log(`[dotenv][DEBUG] ${r}`);
  }
  var Av = `
`,
    Dv = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,
    kv = /\\n/g,
    Lv = /\r\n|\n|\r/;
  function fh(r, e) {
    let t = !!(e && e.debug),
      n = {};
    return (
      r
        .toString()
        .split(Lv)
        .forEach(function (i, s) {
          let o = i.match(Dv);
          if (o != null) {
            let a = o[1],
              c = o[2] || '',
              u = c.length - 1,
              l = c[0] === '"' && c[u] === '"';
            (c[0] === "'" && c[u] === "'") || l
              ? ((c = c.substring(1, u)), l && (c = c.replace(kv, Av)))
              : (c = c.trim()),
              (n[a] = c);
          } else t && lh(`did not match key and value when parsing line ${s + 1}: ${i}`);
        }),
      n
    );
  }
  function Pv(r) {
    return r[0] === '~' ? uh.join(Nv.homedir(), r.slice(1)) : r;
  }
  function Uv(r) {
    let e = uh.resolve(process.cwd(), '.env'),
      t = 'utf8',
      n = !1;
    r &&
      (r.path != null && (e = Pv(r.path)),
      r.encoding != null && (t = r.encoding),
      r.debug != null && (n = !0));
    try {
      let i = fh(Iv.readFileSync(e, { encoding: t }), { debug: n });
      return (
        Object.keys(i).forEach(function (s) {
          Object.prototype.hasOwnProperty.call(process.env, s)
            ? n && lh(`"${s}" is already defined in \`process.env\` and will not be overwritten`)
            : (process.env[s] = i[s]);
        }),
        { parsed: i }
      );
    } catch (i) {
      return { error: i };
    }
  }
  ga.exports.config = Uv;
  ga.exports.parse = fh;
});
var dh = E((Yn, _a) => {
  'use strict';
  (function (r, e) {
    typeof Yn == 'object' && typeof _a == 'object'
      ? (_a.exports = e(require('child_process'), require('crypto')))
      : typeof define == 'function' && define.amd
        ? define(['child_process', 'crypto'], e)
        : typeof Yn == 'object'
          ? (Yn['electron-machine-id'] = e(require('child_process'), require('crypto')))
          : (r['electron-machine-id'] = e(r.child_process, r.crypto));
  })(Yn, function (r, e) {
    return (function (t) {
      function n(s) {
        if (i[s]) return i[s].exports;
        var o = (i[s] = { exports: {}, id: s, loaded: !1 });
        return t[s].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
      }
      var i = {};
      return (n.m = t), (n.c = i), (n.p = ''), n(0);
    })([
      function (t, n, i) {
        t.exports = i(34);
      },
      function (t, n, i) {
        var s = i(29)('wks'),
          o = i(33),
          a = i(2).Symbol,
          c = typeof a == 'function',
          u = (t.exports = function (l) {
            return s[l] || (s[l] = (c && a[l]) || (c ? a : o)('Symbol.' + l));
          });
        u.store = s;
      },
      function (t, n) {
        var i = (t.exports =
          typeof window < 'u' && window.Math == Math
            ? window
            : typeof self < 'u' && self.Math == Math
              ? self
              : Function('return this')());
        typeof __g == 'number' && (__g = i);
      },
      function (t, n, i) {
        var s = i(9);
        t.exports = function (o) {
          if (!s(o)) throw TypeError(o + ' is not an object!');
          return o;
        };
      },
      function (t, n, i) {
        t.exports = !i(24)(function () {
          return (
            Object.defineProperty({}, 'a', {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        });
      },
      function (t, n, i) {
        var s = i(12),
          o = i(17);
        t.exports = i(4)
          ? function (a, c, u) {
              return s.f(a, c, o(1, u));
            }
          : function (a, c, u) {
              return (a[c] = u), a;
            };
      },
      function (t, n) {
        var i = (t.exports = { version: '2.4.0' });
        typeof __e == 'number' && (__e = i);
      },
      function (t, n, i) {
        var s = i(14);
        t.exports = function (o, a, c) {
          if ((s(o), a === void 0)) return o;
          switch (c) {
            case 1:
              return function (u) {
                return o.call(a, u);
              };
            case 2:
              return function (u, l) {
                return o.call(a, u, l);
              };
            case 3:
              return function (u, l, f) {
                return o.call(a, u, l, f);
              };
          }
          return function () {
            return o.apply(a, arguments);
          };
        };
      },
      function (t, n) {
        var i = {}.hasOwnProperty;
        t.exports = function (s, o) {
          return i.call(s, o);
        };
      },
      function (t, n) {
        t.exports = function (i) {
          return typeof i == 'object' ? i !== null : typeof i == 'function';
        };
      },
      function (t, n) {
        t.exports = {};
      },
      function (t, n) {
        var i = {}.toString;
        t.exports = function (s) {
          return i.call(s).slice(8, -1);
        };
      },
      function (t, n, i) {
        var s = i(3),
          o = i(26),
          a = i(32),
          c = Object.defineProperty;
        n.f = i(4)
          ? Object.defineProperty
          : function (u, l, f) {
              if ((s(u), (l = a(l, !0)), s(f), o))
                try {
                  return c(u, l, f);
                } catch {}
              if ('get' in f || 'set' in f) throw TypeError('Accessors not supported!');
              return 'value' in f && (u[l] = f.value), u;
            };
      },
      function (t, n, i) {
        var s = i(42),
          o = i(15);
        t.exports = function (a) {
          return s(o(a));
        };
      },
      function (t, n) {
        t.exports = function (i) {
          if (typeof i != 'function') throw TypeError(i + ' is not a function!');
          return i;
        };
      },
      function (t, n) {
        t.exports = function (i) {
          if (i == null) throw TypeError("Can't call method on  " + i);
          return i;
        };
      },
      function (t, n, i) {
        var s = i(9),
          o = i(2).document,
          a = s(o) && s(o.createElement);
        t.exports = function (c) {
          return a ? o.createElement(c) : {};
        };
      },
      function (t, n) {
        t.exports = function (i, s) {
          return { enumerable: !(1 & i), configurable: !(2 & i), writable: !(4 & i), value: s };
        };
      },
      function (t, n, i) {
        var s = i(12).f,
          o = i(8),
          a = i(1)('toStringTag');
        t.exports = function (c, u, l) {
          c && !o((c = l ? c : c.prototype), a) && s(c, a, { configurable: !0, value: u });
        };
      },
      function (t, n, i) {
        var s = i(29)('keys'),
          o = i(33);
        t.exports = function (a) {
          return s[a] || (s[a] = o(a));
        };
      },
      function (t, n) {
        var i = Math.ceil,
          s = Math.floor;
        t.exports = function (o) {
          return isNaN((o = +o)) ? 0 : (o > 0 ? s : i)(o);
        };
      },
      function (t, n, i) {
        var s = i(11),
          o = i(1)('toStringTag'),
          a =
            s(
              (function () {
                return arguments;
              })()
            ) == 'Arguments',
          c = function (u, l) {
            try {
              return u[l];
            } catch {}
          };
        t.exports = function (u) {
          var l, f, h;
          return u === void 0
            ? 'Undefined'
            : u === null
              ? 'Null'
              : typeof (f = c((l = Object(u)), o)) == 'string'
                ? f
                : a
                  ? s(l)
                  : (h = s(l)) == 'Object' && typeof l.callee == 'function'
                    ? 'Arguments'
                    : h;
        };
      },
      function (t, n) {
        t.exports =
          'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ','
          );
      },
      function (t, n, i) {
        var s = i(2),
          o = i(6),
          a = i(7),
          c = i(5),
          u = 'prototype',
          l = function (f, h, d) {
            var m,
              b,
              p,
              S = f & l.F,
              D = f & l.G,
              x = f & l.S,
              P = f & l.P,
              k = f & l.B,
              O = f & l.W,
              j = D ? o : o[h] || (o[h] = {}),
              $ = j[u],
              C = D ? s : x ? s[h] : (s[h] || {})[u];
            D && (d = h);
            for (m in d)
              (b = !S && C && C[m] !== void 0),
                (b && m in j) ||
                  ((p = b ? C[m] : d[m]),
                  (j[m] =
                    D && typeof C[m] != 'function'
                      ? d[m]
                      : k && b
                        ? a(p, s)
                        : O && C[m] == p
                          ? (function (I) {
                              var G = function (X, V, J) {
                                if (this instanceof I) {
                                  switch (arguments.length) {
                                    case 0:
                                      return new I();
                                    case 1:
                                      return new I(X);
                                    case 2:
                                      return new I(X, V);
                                  }
                                  return new I(X, V, J);
                                }
                                return I.apply(this, arguments);
                              };
                              return (G[u] = I[u]), G;
                            })(p)
                          : P && typeof p == 'function'
                            ? a(Function.call, p)
                            : p),
                  P &&
                    (((j.virtual || (j.virtual = {}))[m] = p),
                    f & l.R && $ && !$[m] && c($, m, p)));
          };
        (l.F = 1),
          (l.G = 2),
          (l.S = 4),
          (l.P = 8),
          (l.B = 16),
          (l.W = 32),
          (l.U = 64),
          (l.R = 128),
          (t.exports = l);
      },
      function (t, n) {
        t.exports = function (i) {
          try {
            return !!i();
          } catch {
            return !0;
          }
        };
      },
      function (t, n, i) {
        t.exports = i(2).document && document.documentElement;
      },
      function (t, n, i) {
        t.exports =
          !i(4) &&
          !i(24)(function () {
            return (
              Object.defineProperty(i(16)('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });
      },
      function (t, n, i) {
        'use strict';
        var s = i(28),
          o = i(23),
          a = i(57),
          c = i(5),
          u = i(8),
          l = i(10),
          f = i(45),
          h = i(18),
          d = i(52),
          m = i(1)('iterator'),
          b = !([].keys && 'next' in [].keys()),
          p = '@@iterator',
          S = 'keys',
          D = 'values',
          x = function () {
            return this;
          };
        t.exports = function (P, k, O, j, $, C, I) {
          f(O, k, j);
          var G,
            X,
            V,
            J = function (N) {
              if (!b && N in U) return U[N];
              switch (N) {
                case S:
                  return function () {
                    return new O(this, N);
                  };
                case D:
                  return function () {
                    return new O(this, N);
                  };
              }
              return function () {
                return new O(this, N);
              };
            },
            B = k + ' Iterator',
            K = $ == D,
            H = !1,
            U = P.prototype,
            z = U[m] || U[p] || ($ && U[$]),
            le = z || J($),
            Re = $ ? (K ? J('entries') : le) : void 0,
            R = (k == 'Array' && U.entries) || z;
          if (
            (R &&
              ((V = d(R.call(new P()))),
              V !== Object.prototype && (h(V, B, !0), s || u(V, m) || c(V, m, x))),
            K &&
              z &&
              z.name !== D &&
              ((H = !0),
              (le = function () {
                return z.call(this);
              })),
            (s && !I) || (!b && !H && U[m]) || c(U, m, le),
            (l[k] = le),
            (l[B] = x),
            $)
          )
            if (((G = { values: K ? le : J(D), keys: C ? le : J(S), entries: Re }), I))
              for (X in G) X in U || a(U, X, G[X]);
            else o(o.P + o.F * (b || H), k, G);
          return G;
        };
      },
      function (t, n) {
        t.exports = !0;
      },
      function (t, n, i) {
        var s = i(2),
          o = '__core-js_shared__',
          a = s[o] || (s[o] = {});
        t.exports = function (c) {
          return a[c] || (a[c] = {});
        };
      },
      function (t, n, i) {
        var s,
          o,
          a,
          c = i(7),
          u = i(41),
          l = i(25),
          f = i(16),
          h = i(2),
          d = h.process,
          m = h.setImmediate,
          b = h.clearImmediate,
          p = h.MessageChannel,
          S = 0,
          D = {},
          x = 'onreadystatechange',
          P = function () {
            var O = +this;
            if (D.hasOwnProperty(O)) {
              var j = D[O];
              delete D[O], j();
            }
          },
          k = function (O) {
            P.call(O.data);
          };
        (m && b) ||
          ((m = function (O) {
            for (var j = [], $ = 1; arguments.length > $; ) j.push(arguments[$++]);
            return (
              (D[++S] = function () {
                u(typeof O == 'function' ? O : Function(O), j);
              }),
              s(S),
              S
            );
          }),
          (b = function (O) {
            delete D[O];
          }),
          i(11)(d) == 'process'
            ? (s = function (O) {
                d.nextTick(c(P, O, 1));
              })
            : p
              ? ((o = new p()),
                (a = o.port2),
                (o.port1.onmessage = k),
                (s = c(a.postMessage, a, 1)))
              : h.addEventListener && typeof postMessage == 'function' && !h.importScripts
                ? ((s = function (O) {
                    h.postMessage(O + '', '*');
                  }),
                  h.addEventListener('message', k, !1))
                : (s =
                    x in f('script')
                      ? function (O) {
                          l.appendChild(f('script'))[x] = function () {
                            l.removeChild(this), P.call(O);
                          };
                        }
                      : function (O) {
                          setTimeout(c(P, O, 1), 0);
                        })),
          (t.exports = { set: m, clear: b });
      },
      function (t, n, i) {
        var s = i(20),
          o = Math.min;
        t.exports = function (a) {
          return a > 0 ? o(s(a), 9007199254740991) : 0;
        };
      },
      function (t, n, i) {
        var s = i(9);
        t.exports = function (o, a) {
          if (!s(o)) return o;
          var c, u;
          if (
            (a && typeof (c = o.toString) == 'function' && !s((u = c.call(o)))) ||
            (typeof (c = o.valueOf) == 'function' && !s((u = c.call(o)))) ||
            (!a && typeof (c = o.toString) == 'function' && !s((u = c.call(o))))
          )
            return u;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (t, n) {
        var i = 0,
          s = Math.random();
        t.exports = function (o) {
          return 'Symbol('.concat(o === void 0 ? '' : o, ')_', (++i + s).toString(36));
        };
      },
      function (t, n, i) {
        'use strict';
        function s(x) {
          return x && x.__esModule ? x : { default: x };
        }
        function o() {
          return process.platform !== 'win32'
            ? ''
            : process.arch === 'ia32' && process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')
              ? 'mixed'
              : 'native';
        }
        function a(x) {
          return (0, m.createHash)('sha256').update(x).digest('hex');
        }
        function c(x) {
          switch (p) {
            case 'darwin':
              return x
                .split('IOPlatformUUID')[1]
                .split(
                  `
`
                )[0]
                .replace(/\=|\s+|\"/gi, '')
                .toLowerCase();
            case 'win32':
              return x
                .toString()
                .split('REG_SZ')[1]
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'linux':
              return x
                .toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'freebsd':
              return x
                .toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            default:
              throw new Error('Unsupported platform: ' + process.platform);
          }
        }
        function u(x) {
          var P = c((0, d.execSync)(D[p]).toString());
          return x ? P : a(P);
        }
        function l(x) {
          return new h.default(function (P, k) {
            return (0, d.exec)(D[p], {}, function (O, j, $) {
              if (O) return k(new Error('Error while obtaining machine id: ' + O.stack));
              var C = c(j.toString());
              return P(x ? C : a(C));
            });
          });
        }
        Object.defineProperty(n, '__esModule', { value: !0 });
        var f = i(35),
          h = s(f);
        (n.machineIdSync = u), (n.machineId = l);
        var d = i(70),
          m = i(71),
          b = process,
          p = b.platform,
          S = {
            native: '%windir%\\System32',
            mixed: '%windir%\\sysnative\\cmd.exe /c %windir%\\System32',
          },
          D = {
            darwin: 'ioreg -rd1 -c IOPlatformExpertDevice',
            win32:
              S[o()] +
              '\\REG.exe QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid',
            linux:
              '( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :',
            freebsd: 'kenv -q smbios.system.uuid || sysctl -n kern.hostuuid',
          };
      },
      function (t, n, i) {
        t.exports = { default: i(36), __esModule: !0 };
      },
      function (t, n, i) {
        i(66), i(68), i(69), i(67), (t.exports = i(6).Promise);
      },
      function (t, n) {
        t.exports = function () {};
      },
      function (t, n) {
        t.exports = function (i, s, o, a) {
          if (!(i instanceof s) || (a !== void 0 && a in i))
            throw TypeError(o + ': incorrect invocation!');
          return i;
        };
      },
      function (t, n, i) {
        var s = i(13),
          o = i(31),
          a = i(62);
        t.exports = function (c) {
          return function (u, l, f) {
            var h,
              d = s(u),
              m = o(d.length),
              b = a(f, m);
            if (c && l != l) {
              for (; m > b; ) if (((h = d[b++]), h != h)) return !0;
            } else for (; m > b; b++) if ((c || b in d) && d[b] === l) return c || b || 0;
            return !c && -1;
          };
        };
      },
      function (t, d, i) {
        var s = i(7),
          o = i(44),
          a = i(43),
          c = i(3),
          u = i(31),
          l = i(64),
          f = {},
          h = {},
          d = (t.exports = function (m, b, p, S, D) {
            var x,
              P,
              k,
              O,
              j = D
                ? function () {
                    return m;
                  }
                : l(m),
              $ = s(p, S, b ? 2 : 1),
              C = 0;
            if (typeof j != 'function') throw TypeError(m + ' is not iterable!');
            if (a(j)) {
              for (x = u(m.length); x > C; C++)
                if (((O = b ? $(c((P = m[C]))[0], P[1]) : $(m[C])), O === f || O === h)) return O;
            } else
              for (k = j.call(m); !(P = k.next()).done; )
                if (((O = o(k, $, P.value, b)), O === f || O === h)) return O;
          });
        (d.BREAK = f), (d.RETURN = h);
      },
      function (t, n) {
        t.exports = function (i, s, o) {
          var a = o === void 0;
          switch (s.length) {
            case 0:
              return a ? i() : i.call(o);
            case 1:
              return a ? i(s[0]) : i.call(o, s[0]);
            case 2:
              return a ? i(s[0], s[1]) : i.call(o, s[0], s[1]);
            case 3:
              return a ? i(s[0], s[1], s[2]) : i.call(o, s[0], s[1], s[2]);
            case 4:
              return a ? i(s[0], s[1], s[2], s[3]) : i.call(o, s[0], s[1], s[2], s[3]);
          }
          return i.apply(o, s);
        };
      },
      function (t, n, i) {
        var s = i(11);
        t.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function (o) {
              return s(o) == 'String' ? o.split('') : Object(o);
            };
      },
      function (t, n, i) {
        var s = i(10),
          o = i(1)('iterator'),
          a = Array.prototype;
        t.exports = function (c) {
          return c !== void 0 && (s.Array === c || a[o] === c);
        };
      },
      function (t, n, i) {
        var s = i(3);
        t.exports = function (o, a, c, u) {
          try {
            return u ? a(s(c)[0], c[1]) : a(c);
          } catch (f) {
            var l = o.return;
            throw (l !== void 0 && s(l.call(o)), f);
          }
        };
      },
      function (t, n, i) {
        'use strict';
        var s = i(49),
          o = i(17),
          a = i(18),
          c = {};
        i(5)(c, i(1)('iterator'), function () {
          return this;
        }),
          (t.exports = function (u, l, f) {
            (u.prototype = s(c, { next: o(1, f) })), a(u, l + ' Iterator');
          });
      },
      function (t, n, i) {
        var s = i(1)('iterator'),
          o = !1;
        try {
          var a = [7][s]();
          (a.return = function () {
            o = !0;
          }),
            Array.from(a, function () {
              throw 2;
            });
        } catch {}
        t.exports = function (c, u) {
          if (!u && !o) return !1;
          var l = !1;
          try {
            var f = [7],
              h = f[s]();
            (h.next = function () {
              return { done: (l = !0) };
            }),
              (f[s] = function () {
                return h;
              }),
              c(f);
          } catch {}
          return l;
        };
      },
      function (t, n) {
        t.exports = function (i, s) {
          return { value: s, done: !!i };
        };
      },
      function (t, n, i) {
        var s = i(2),
          o = i(30).set,
          a = s.MutationObserver || s.WebKitMutationObserver,
          c = s.process,
          u = s.Promise,
          l = i(11)(c) == 'process';
        t.exports = function () {
          var f,
            h,
            d,
            m = function () {
              var D, x;
              for (l && (D = c.domain) && D.exit(); f; ) {
                (x = f.fn), (f = f.next);
                try {
                  x();
                } catch (P) {
                  throw (f ? d() : (h = void 0), P);
                }
              }
              (h = void 0), D && D.enter();
            };
          if (l)
            d = function () {
              c.nextTick(m);
            };
          else if (a) {
            var b = !0,
              p = document.createTextNode('');
            new a(m).observe(p, { characterData: !0 }),
              (d = function () {
                p.data = b = !b;
              });
          } else if (u && u.resolve) {
            var S = u.resolve();
            d = function () {
              S.then(m);
            };
          } else
            d = function () {
              o.call(s, m);
            };
          return function (D) {
            var x = { fn: D, next: void 0 };
            h && (h.next = x), f || ((f = x), d()), (h = x);
          };
        };
      },
      function (t, n, i) {
        var s = i(3),
          o = i(50),
          a = i(22),
          c = i(19)('IE_PROTO'),
          u = function () {},
          l = 'prototype',
          f = function () {
            var h,
              d = i(16)('iframe'),
              m = a.length,
              b = '>';
            for (
              d.style.display = 'none',
                i(25).appendChild(d),
                d.src = 'javascript:',
                h = d.contentWindow.document,
                h.open(),
                h.write('<script>document.F=Object</script' + b),
                h.close(),
                f = h.F;
              m--;

            )
              delete f[l][a[m]];
            return f();
          };
        t.exports =
          Object.create ||
          function (h, d) {
            var m;
            return (
              h !== null ? ((u[l] = s(h)), (m = new u()), (u[l] = null), (m[c] = h)) : (m = f()),
              d === void 0 ? m : o(m, d)
            );
          };
      },
      function (t, n, i) {
        var s = i(12),
          o = i(3),
          a = i(54);
        t.exports = i(4)
          ? Object.defineProperties
          : function (c, u) {
              o(c);
              for (var l, f = a(u), h = f.length, d = 0; h > d; ) s.f(c, (l = f[d++]), u[l]);
              return c;
            };
      },
      function (t, n, i) {
        var s = i(55),
          o = i(17),
          a = i(13),
          c = i(32),
          u = i(8),
          l = i(26),
          f = Object.getOwnPropertyDescriptor;
        n.f = i(4)
          ? f
          : function (h, d) {
              if (((h = a(h)), (d = c(d, !0)), l))
                try {
                  return f(h, d);
                } catch {}
              if (u(h, d)) return o(!s.f.call(h, d), h[d]);
            };
      },
      function (t, n, i) {
        var s = i(8),
          o = i(63),
          a = i(19)('IE_PROTO'),
          c = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (u) {
            return (
              (u = o(u)),
              s(u, a)
                ? u[a]
                : typeof u.constructor == 'function' && u instanceof u.constructor
                  ? u.constructor.prototype
                  : u instanceof Object
                    ? c
                    : null
            );
          };
      },
      function (t, n, i) {
        var s = i(8),
          o = i(13),
          a = i(39)(!1),
          c = i(19)('IE_PROTO');
        t.exports = function (u, l) {
          var f,
            h = o(u),
            d = 0,
            m = [];
          for (f in h) f != c && s(h, f) && m.push(f);
          for (; l.length > d; ) s(h, (f = l[d++])) && (~a(m, f) || m.push(f));
          return m;
        };
      },
      function (t, n, i) {
        var s = i(53),
          o = i(22);
        t.exports =
          Object.keys ||
          function (a) {
            return s(a, o);
          };
      },
      function (t, n) {
        n.f = {}.propertyIsEnumerable;
      },
      function (t, n, i) {
        var s = i(5);
        t.exports = function (o, a, c) {
          for (var u in a) c && o[u] ? (o[u] = a[u]) : s(o, u, a[u]);
          return o;
        };
      },
      function (t, n, i) {
        t.exports = i(5);
      },
      function (t, n, i) {
        var s = i(9),
          o = i(3),
          a = function (c, u) {
            if ((o(c), !s(u) && u !== null)) throw TypeError(u + ": can't set as prototype!");
          };
        t.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function (c, u, l) {
                  try {
                    (l = i(7)(Function.call, i(51).f(Object.prototype, '__proto__').set, 2)),
                      l(c, []),
                      (u = !(c instanceof Array));
                  } catch {
                    u = !0;
                  }
                  return function (f, h) {
                    return a(f, h), u ? (f.__proto__ = h) : l(f, h), f;
                  };
                })({}, !1)
              : void 0),
          check: a,
        };
      },
      function (t, n, i) {
        'use strict';
        var s = i(2),
          o = i(6),
          a = i(12),
          c = i(4),
          u = i(1)('species');
        t.exports = function (l) {
          var f = typeof o[l] == 'function' ? o[l] : s[l];
          c &&
            f &&
            !f[u] &&
            a.f(f, u, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (t, n, i) {
        var s = i(3),
          o = i(14),
          a = i(1)('species');
        t.exports = function (c, u) {
          var l,
            f = s(c).constructor;
          return f === void 0 || (l = s(f)[a]) == null ? u : o(l);
        };
      },
      function (t, n, i) {
        var s = i(20),
          o = i(15);
        t.exports = function (a) {
          return function (c, u) {
            var l,
              f,
              h = String(o(c)),
              d = s(u),
              m = h.length;
            return d < 0 || d >= m
              ? a
                ? ''
                : void 0
              : ((l = h.charCodeAt(d)),
                l < 55296 ||
                l > 56319 ||
                d + 1 === m ||
                (f = h.charCodeAt(d + 1)) < 56320 ||
                f > 57343
                  ? a
                    ? h.charAt(d)
                    : l
                  : a
                    ? h.slice(d, d + 2)
                    : ((l - 55296) << 10) + (f - 56320) + 65536);
          };
        };
      },
      function (t, n, i) {
        var s = i(20),
          o = Math.max,
          a = Math.min;
        t.exports = function (c, u) {
          return (c = s(c)), c < 0 ? o(c + u, 0) : a(c, u);
        };
      },
      function (t, n, i) {
        var s = i(15);
        t.exports = function (o) {
          return Object(s(o));
        };
      },
      function (t, n, i) {
        var s = i(21),
          o = i(1)('iterator'),
          a = i(10);
        t.exports = i(6).getIteratorMethod = function (c) {
          if (c != null) return c[o] || c['@@iterator'] || a[s(c)];
        };
      },
      function (t, n, i) {
        'use strict';
        var s = i(37),
          o = i(47),
          a = i(10),
          c = i(13);
        (t.exports = i(27)(
          Array,
          'Array',
          function (u, l) {
            (this._t = c(u)), (this._i = 0), (this._k = l);
          },
          function () {
            var u = this._t,
              l = this._k,
              f = this._i++;
            return !u || f >= u.length
              ? ((this._t = void 0), o(1))
              : l == 'keys'
                ? o(0, f)
                : l == 'values'
                  ? o(0, u[f])
                  : o(0, [f, u[f]]);
          },
          'values'
        )),
          (a.Arguments = a.Array),
          s('keys'),
          s('values'),
          s('entries');
      },
      function (t, n) {},
      function (t, n, i) {
        'use strict';
        var s,
          o,
          a,
          c = i(28),
          u = i(2),
          l = i(7),
          f = i(21),
          h = i(23),
          d = i(9),
          m = (i(3), i(14)),
          b = i(38),
          p = i(40),
          S = (i(58).set, i(60)),
          D = i(30).set,
          x = i(48)(),
          P = 'Promise',
          k = u.TypeError,
          j = u.process,
          O = u[P],
          j = u.process,
          $ = f(j) == 'process',
          C = function () {},
          I = !!(function () {
            try {
              var R = O.resolve(1),
                N = ((R.constructor = {})[i(1)('species')] = function (w) {
                  w(C, C);
                });
              return ($ || typeof PromiseRejectionEvent == 'function') && R.then(C) instanceof N;
            } catch {}
          })(),
          G = function (R, N) {
            return R === N || (R === O && N === a);
          },
          X = function (R) {
            var N;
            return !(!d(R) || typeof (N = R.then) != 'function') && N;
          },
          V = function (R) {
            return G(O, R) ? new J(R) : new o(R);
          },
          J = (o = function (R) {
            var N, w;
            (this.promise = new R(function (W, de) {
              if (N !== void 0 || w !== void 0) throw k('Bad Promise constructor');
              (N = W), (w = de);
            })),
              (this.resolve = m(N)),
              (this.reject = m(w));
          }),
          B = function (R) {
            try {
              R();
            } catch (N) {
              return { error: N };
            }
          },
          K = function (R, N) {
            if (!R._n) {
              R._n = !0;
              var w = R._c;
              x(function () {
                for (
                  var W = R._v,
                    de = R._s == 1,
                    Nt = 0,
                    ct = function (yt) {
                      var _e,
                        Jr,
                        vr = de ? yt.ok : yt.fail,
                        Pe = yt.resolve,
                        Wt = yt.reject,
                        y = yt.domain;
                      try {
                        vr
                          ? (de || (R._h == 2 && z(R), (R._h = 1)),
                            vr === !0 ? (_e = W) : (y && y.enter(), (_e = vr(W)), y && y.exit()),
                            _e === yt.promise
                              ? Wt(k('Promise-chain cycle'))
                              : (Jr = X(_e))
                                ? Jr.call(_e, Pe, Wt)
                                : Pe(_e))
                          : Wt(W);
                      } catch (_) {
                        Wt(_);
                      }
                    };
                  w.length > Nt;

                )
                  ct(w[Nt++]);
                (R._c = []), (R._n = !1), N && !R._h && H(R);
              });
            }
          },
          H = function (R) {
            D.call(u, function () {
              var N,
                w,
                W,
                de = R._v;
              if (
                (U(R) &&
                  ((N = B(function () {
                    $
                      ? j.emit('unhandledRejection', de, R)
                      : (w = u.onunhandledrejection)
                        ? w({ promise: R, reason: de })
                        : (W = u.console) && W.error && W.error('Unhandled promise rejection', de);
                  })),
                  (R._h = $ || U(R) ? 2 : 1)),
                (R._a = void 0),
                N)
              )
                throw N.error;
            });
          },
          U = function (R) {
            if (R._h == 1) return !1;
            for (var N, w = R._a || R._c, W = 0; w.length > W; )
              if (((N = w[W++]), N.fail || !U(N.promise))) return !1;
            return !0;
          },
          z = function (R) {
            D.call(u, function () {
              var N;
              $
                ? j.emit('rejectionHandled', R)
                : (N = u.onrejectionhandled) && N({ promise: R, reason: R._v });
            });
          },
          le = function (R) {
            var N = this;
            N._d ||
              ((N._d = !0),
              (N = N._w || N),
              (N._v = R),
              (N._s = 2),
              N._a || (N._a = N._c.slice()),
              K(N, !0));
          },
          Re = function (R) {
            var N,
              w = this;
            if (!w._d) {
              (w._d = !0), (w = w._w || w);
              try {
                if (w === R) throw k("Promise can't be resolved itself");
                (N = X(R))
                  ? x(function () {
                      var W = { _w: w, _d: !1 };
                      try {
                        N.call(R, l(Re, W, 1), l(le, W, 1));
                      } catch (de) {
                        le.call(W, de);
                      }
                    })
                  : ((w._v = R), (w._s = 1), K(w, !1));
              } catch (W) {
                le.call({ _w: w, _d: !1 }, W);
              }
            }
          };
        I ||
          ((O = function (R) {
            b(this, O, P, '_h'), m(R), s.call(this);
            try {
              R(l(Re, this, 1), l(le, this, 1));
            } catch (N) {
              le.call(this, N);
            }
          }),
          (s = function (R) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }),
          (s.prototype = i(56)(O.prototype, {
            then: function (R, N) {
              var w = V(S(this, O));
              return (
                (w.ok = typeof R != 'function' || R),
                (w.fail = typeof N == 'function' && N),
                (w.domain = $ ? j.domain : void 0),
                this._c.push(w),
                this._a && this._a.push(w),
                this._s && K(this, !1),
                w.promise
              );
            },
            catch: function (R) {
              return this.then(void 0, R);
            },
          })),
          (J = function () {
            var R = new s();
            (this.promise = R), (this.resolve = l(Re, R, 1)), (this.reject = l(le, R, 1));
          })),
          h(h.G + h.W + h.F * !I, { Promise: O }),
          i(18)(O, P),
          i(59)(P),
          (a = i(6)[P]),
          h(h.S + h.F * !I, P, {
            reject: function (R) {
              var N = V(this),
                w = N.reject;
              return w(R), N.promise;
            },
          }),
          h(h.S + h.F * (c || !I), P, {
            resolve: function (R) {
              if (R instanceof O && G(R.constructor, this)) return R;
              var N = V(this),
                w = N.resolve;
              return w(R), N.promise;
            },
          }),
          h(
            h.S +
              h.F *
                !(
                  I &&
                  i(46)(function (R) {
                    O.all(R).catch(C);
                  })
                ),
            P,
            {
              all: function (R) {
                var N = this,
                  w = V(N),
                  W = w.resolve,
                  de = w.reject,
                  Nt = B(function () {
                    var ct = [],
                      yt = 0,
                      _e = 1;
                    p(R, !1, function (Jr) {
                      var vr = yt++,
                        Pe = !1;
                      ct.push(void 0),
                        _e++,
                        N.resolve(Jr).then(function (Wt) {
                          Pe || ((Pe = !0), (ct[vr] = Wt), --_e || W(ct));
                        }, de);
                    }),
                      --_e || W(ct);
                  });
                return Nt && de(Nt.error), w.promise;
              },
              race: function (R) {
                var N = this,
                  w = V(N),
                  W = w.reject,
                  de = B(function () {
                    p(R, !1, function (Nt) {
                      N.resolve(Nt).then(w.resolve, W);
                    });
                  });
                return de && W(de.error), w.promise;
              },
            }
          );
      },
      function (t, n, i) {
        'use strict';
        var s = i(61)(!0);
        i(27)(
          String,
          'String',
          function (o) {
            (this._t = String(o)), (this._i = 0);
          },
          function () {
            var o,
              a = this._t,
              c = this._i;
            return c >= a.length
              ? { value: void 0, done: !0 }
              : ((o = s(a, c)), (this._i += o.length), { value: o, done: !1 });
          }
        );
      },
      function (t, n, i) {
        i(65);
        for (
          var s = i(2),
            o = i(5),
            a = i(10),
            c = i(1)('toStringTag'),
            u = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'],
            l = 0;
          l < 5;
          l++
        ) {
          var f = u[l],
            h = s[f],
            d = h && h.prototype;
          d && !d[c] && o(d, c, f), (a[f] = a.Array);
        }
      },
      function (t, n) {
        t.exports = require('child_process');
      },
      function (t, n) {
        t.exports = require('crypto');
      },
    ]);
  });
});
var ph = {};
At(ph, {
  configureLightClientRequire: () => Fv,
  configuredPaths: () => wr,
  lightClientRequire: () => ie,
});
function Fv(r) {
  (wr = r),
    (ie = function (e) {
      if (wr.length === 0)
        throw new Error(
          'Light client require must have paths configured with `configureLightClientRequire`.'
        );
      let t;
      try {
        t = require.resolve(e, { paths: r });
      } catch (n) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able to require.resolve module ${e} from the following paths: ${r}. This may be expected.`
            ),
          n)
        );
      }
      try {
        return require(t);
      } catch (n) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able require module ${e} from path ${t}. This may be expected. `
            ),
          n)
        );
      }
    });
}
var ie,
  wr,
  Rr = q(() => {
    'use strict';
    wr = [];
  });
var Y = E((Tr) => {
  'use strict';
  Rr();
  try {
    try {
      let { output: r } = ie('nx/src/utils/output'),
        e;
      try {
        e = ie('nx/src/utils/app-root').workspaceRoot;
      } catch {
        e = ie('nx/src/utils/workspace-root').workspaceRoot;
      }
      (Tr.workspaceRoot = e), (Tr.output = r);
    } catch {
      let { output: e } = ie('@nrwl/workspace/src/utilities/output'),
        { appRootPath: t } = ie('@nrwl/tao/src/utils/app-root');
      (Tr.workspaceRoot = t), (Tr.output = e);
    }
  } catch {
    let e = (t) => {
      var n;
      return `${t.title}

${
  (n = t.bodyLines) == null
    ? void 0
    : n.join(`
`)
}`;
    };
    (Tr.output = {
      note: (t) => console.info(e(t)),
      error: (t) => console.error(e(t)),
      warn: (t) => console.warn(e(t)),
      success: (t) => console.log(e(t)),
      addVerticalSeparator: () => '',
      addNewline: () =>
        console.log(`
`),
    }),
      (Tr.workspaceRoot = process.cwd());
  }
});
function ut(r) {
  return !!r;
}
function Sh() {
  return process.env.NX_INVOKED_BY_RUNNER === 'true' || process.env.NX_CLOUD === 'false';
}
function Ke() {
  try {
    return (0, ba.execSync)('git rev-parse HEAD', { stdio: 'pipe' }).toString().trim();
  } catch {
    return;
  }
}
function Qi() {
  try {
    return (0, ba.execSync)('git rev-parse --symbolic-full-name HEAD', { stdio: 'pipe' })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function jv() {
  try {
    let r = (0, Eh.readFileSync)((0, Ji.join)(Bv, 'nx-cloud.env'));
    return Mv.parse(r);
  } catch {
    return {};
  }
}
function Gv() {
  let r = jv();
  (Dt =
    process.env.NX_CLOUD_AUTH_TOKEN ||
    process.env.NX_CLOUD_ACCESS_TOKEN ||
    r.NX_CLOUD_AUTH_TOKEN ||
    r.NX_CLOUD_ACCESS_TOKEN),
    (xr = process.env.NX_CLOUD_ENCRYPTION_KEY || r.NX_CLOUD_ENCRYPTION_KEY),
    (A = process.env.NX_VERBOSE_LOGGING === 'true' || r.NX_VERBOSE_LOGGING === 'true'),
    (Et = process.env.NX_CLOUD_NO_TIMEOUTS === 'true' || r.NX_CLOUD_NO_TIMEOUTS === 'true'),
    (Ra =
      process.env.NX_CLOUD_CONTRIBUTOR_TESTING === 'true' ||
      r.NX_CLOUD_CONTRIBUTOR_TESTING === 'true');
}
function je() {
  return wh();
}
function wh() {
  return process.env.NX_CI_EXECUTION_ID !== void 0
    ? process.env.NX_CI_EXECUTION_ID
    : process.env.NX_RUN_GROUP !== void 0
      ? process.env.NX_RUN_GROUP
      : process.env.CIRCLECI !== void 0 && process.env.CIRCLE_WORKFLOW_ID
        ? process.env.CIRCLE_WORKFLOW_ID
        : process.env.TRAVIS_BUILD_ID !== void 0
          ? process.env.TRAVIS_BUILD_ID
          : process.env.GITHUB_ACTIONS && process.env.GITHUB_RUN_ID
            ? `${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`
            : process.env.BUILD_BUILDID
              ? process.env.BUILD_BUILDID
              : process.env.BITBUCKET_BUILD_NUMBER !== void 0
                ? process.env.BITBUCKET_BUILD_NUMBER
                : process.env.VERCEL_GIT_COMMIT_SHA !== void 0
                  ? process.env.VERCEL_GIT_COMMIT_SHA
                  : process.env.CI_PIPELINE_ID
                    ? process.env.CI_PIPELINE_ID
                    : process.env.BUILD_TAG
                      ? process.env.BUILD_TAG
                      : null;
}
function Te() {
  return process.env.NX_CI_EXECUTION_ENV ?? '';
}
function ve() {
  if (process.env.NX_RUN_GROUP !== void 0) return process.env.NX_RUN_GROUP;
  let r = wh();
  return r ? (Te() ? `${r}-${Te()}` : r) : Ke();
}
function me() {
  if (process.env.NX_BRANCH !== void 0) return process.env.NX_BRANCH;
  if (process.env.CIRCLECI !== void 0) {
    if (process.env.CIRCLE_PR_NUMBER !== void 0) return process.env.CIRCLE_PR_NUMBER;
    if (process.env.CIRCLE_PULL_REQUEST !== void 0) {
      let r = process.env.CIRCLE_PULL_REQUEST.split('/');
      return r[r.length - 1];
    } else if (process.env.CIRCLE_BRANCH !== void 0) return process.env.CIRCLE_BRANCH;
  }
  if (process.env.TRAVIS_PULL_REQUEST !== void 0) return process.env.TRAVIS_PULL_REQUEST;
  if (process.env.GITHUB_ACTIONS) {
    if (process.env.GITHUB_REF) {
      let r = process.env.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
      if (r) return r[1];
    }
    return process.env.GITHUB_HEAD_REF
      ? process.env.GITHUB_HEAD_REF
      : process.env.GITHUB_REF_NAME
        ? process.env.GITHUB_REF_NAME
        : '';
  }
  return process.env.BITBUCKET_PR_ID !== void 0
    ? process.env.BITBUCKET_PR_ID
    : process.env.VERCEL_GIT_COMMIT_REF !== void 0
      ? process.env.VERCEL_GIT_COMMIT_REF
      : process.env.CI_MERGE_REQUEST_IID
        ? process.env.CI_MERGE_REQUEST_IID
        : process.env.CI_COMMIT_BRANCH
          ? process.env.CI_COMMIT_BRANCH
          : process.env.GIT_BRANCH
            ? process.env.GIT_BRANCH
            : null;
}
function Zr() {
  let r = require('os'),
    e = (0, yh.createHash)('md5');
  return (
    e.update(qv()),
    {
      machineId: e.digest('base64'),
      platform: r.platform(),
      version: r.version ? r.version() : '',
      cpuCores: r.cpus().length,
    }
  );
}
function es() {
  let r = (0, Ji.parse)(process.argv[1]).name,
    e = `${process.argv.slice(2).join(' ')}`;
  return `${r} ${e}`;
}
function Rh(r) {
  let e = Hv(),
    t = {};
  return (
    r == 'auto'
      ? (t = e)
      : r &&
        r
          .split(',')
          .map((n) => n.trim())
          .forEach((n) => {
            e[n] && (t[n] = e[n]);
          }),
    Object.keys(e)
      .filter((n) => n.startsWith('NX_'))
      .forEach((n) => {
        t[n] = e[n];
      }),
    A &&
      (mh.note({ title: 'Environment variables passed to cloud:', bodyLines: Object.keys(t) }),
      mh.addNewline()),
    t
  );
}
function Hv() {
  let r = {};
  for (let e of Object.keys(process.env))
    e != null && !$v.includes(e) && process.env[e] && (r[e] = process.env[e]);
  return r;
}
var ba,
  yh,
  Eh,
  Ji,
  Mv,
  qv,
  mh,
  Bv,
  Jn,
  va,
  Sa,
  Zn,
  gh,
  Qn,
  Xt,
  wa,
  _h,
  bh,
  Zi,
  vh,
  Dt,
  xr,
  A,
  Et,
  Ra,
  $v,
  te = q(() => {
    'use strict';
    (ba = require('child_process')),
      (yh = require('crypto')),
      (Eh = require('fs')),
      (Ji = require('path'));
    ch();
    (Mv = hh()),
      ({ machineIdSync: qv } = dh()),
      ({ output: mh, workspaceRoot: Bv } = Y()),
      (Jn = 9999999),
      (va = process.env.NX_CLOUD_AGENT_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_AGENT_TIMEOUT_MS)
        : 36e5),
      (Sa = process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS)
        : 36e5),
      (Zn = 1e3 * 1e3 * 1e4),
      (gh = process.env.NX_CLOUD_UNLIMITED_OUTPUT === 'true'),
      (Qn = 1e3 * 1e3 * 300),
      (Xt = 166),
      (wa = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT
        ? Number(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT)
        : null),
      (_h = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE != 'false'),
      (bh = process.env.NX_CLOUD_FORCE_METRICS === 'true'),
      (Zi = process.env.NX_CLOUD_NUMBER_OF_RETRIES
        ? Number(process.env.NX_CLOUD_NUMBER_OF_RETRIES)
        : ah()
          ? 10
          : 1),
      (vh = process.env.NX_NO_CLOUD === 'true');
    Gv();
    $v = [
      'PWD',
      'HOME',
      'SHELL',
      'LOGNAME',
      'UID',
      'HOSTNAME',
      'MAIL',
      'EDITOR',
      'LANG',
      'TEMP',
      'PATH',
      'TERM',
      'USER',
      'COMMAND_MODE',
      'TMPDIR',
      'TERMINAL_EMULATOR',
      'TERM_SESSION_ID',
      'OLDPWD',
      'MANPATH',
      'PAGER',
      'LESS',
      'LSCOLORS',
      'PNPM_HOME',
      'ZSH',
      'GOPATH',
      'GOROOT',
      'NVM_DIR',
      'NVM_BIN',
      'NVM_INC',
    ];
  });
function Ge(r) {
  return new Promise((e) => {
    setTimeout(() => e(null), r);
  });
}
var Qr = q(() => {
  'use strict';
});
var Ta = E((mA, Th) => {
  'use strict';
  Th.exports = function (e, t) {
    return function () {
      for (var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s];
      return e.apply(t, i);
    };
  };
});
var Fe = E((yA, Ch) => {
  'use strict';
  var zv = Ta(),
    Or = Object.prototype.toString;
  function Ca(r) {
    return Or.call(r) === '[object Array]';
  }
  function xa(r) {
    return typeof r > 'u';
  }
  function Vv(r) {
    return (
      r !== null &&
      !xa(r) &&
      r.constructor !== null &&
      !xa(r.constructor) &&
      typeof r.constructor.isBuffer == 'function' &&
      r.constructor.isBuffer(r)
    );
  }
  function Wv(r) {
    return Or.call(r) === '[object ArrayBuffer]';
  }
  function Xv(r) {
    return typeof FormData < 'u' && r instanceof FormData;
  }
  function Kv(r) {
    var e;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (e = ArrayBuffer.isView(r))
        : (e = r && r.buffer && r.buffer instanceof ArrayBuffer),
      e
    );
  }
  function Yv(r) {
    return typeof r == 'string';
  }
  function Jv(r) {
    return typeof r == 'number';
  }
  function xh(r) {
    return r !== null && typeof r == 'object';
  }
  function ts(r) {
    if (Or.call(r) !== '[object Object]') return !1;
    var e = Object.getPrototypeOf(r);
    return e === null || e === Object.prototype;
  }
  function Zv(r) {
    return Or.call(r) === '[object Date]';
  }
  function Qv(r) {
    return Or.call(r) === '[object File]';
  }
  function eS(r) {
    return Or.call(r) === '[object Blob]';
  }
  function Oh(r) {
    return Or.call(r) === '[object Function]';
  }
  function tS(r) {
    return xh(r) && Oh(r.pipe);
  }
  function rS(r) {
    return typeof URLSearchParams < 'u' && r instanceof URLSearchParams;
  }
  function nS(r) {
    return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, '');
  }
  function iS() {
    return typeof navigator < 'u' &&
      (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  }
  function Ia(r, e) {
    if (!(r === null || typeof r > 'u'))
      if ((typeof r != 'object' && (r = [r]), Ca(r)))
        for (var t = 0, n = r.length; t < n; t++) e.call(null, r[t], t, r);
      else for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && e.call(null, r[i], i, r);
  }
  function Oa() {
    var r = {};
    function e(i, s) {
      ts(r[s]) && ts(i)
        ? (r[s] = Oa(r[s], i))
        : ts(i)
          ? (r[s] = Oa({}, i))
          : Ca(i)
            ? (r[s] = i.slice())
            : (r[s] = i);
    }
    for (var t = 0, n = arguments.length; t < n; t++) Ia(arguments[t], e);
    return r;
  }
  function sS(r, e, t) {
    return (
      Ia(e, function (i, s) {
        t && typeof i == 'function' ? (r[s] = zv(i, t)) : (r[s] = i);
      }),
      r
    );
  }
  function oS(r) {
    return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
  }
  Ch.exports = {
    isArray: Ca,
    isArrayBuffer: Wv,
    isBuffer: Vv,
    isFormData: Xv,
    isArrayBufferView: Kv,
    isString: Yv,
    isNumber: Jv,
    isObject: xh,
    isPlainObject: ts,
    isUndefined: xa,
    isDate: Zv,
    isFile: Qv,
    isBlob: eS,
    isFunction: Oh,
    isStream: tS,
    isURLSearchParams: rS,
    isStandardBrowserEnv: iS,
    forEach: Ia,
    merge: Oa,
    extend: sS,
    trim: nS,
    stripBOM: oS,
  };
});
var rs = E((EA, Nh) => {
  'use strict';
  var en = Fe();
  function Ih(r) {
    return encodeURIComponent(r)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  Nh.exports = function (e, t, n) {
    if (!t) return e;
    var i;
    if (n) i = n(t);
    else if (en.isURLSearchParams(t)) i = t.toString();
    else {
      var s = [];
      en.forEach(t, function (c, u) {
        c === null ||
          typeof c > 'u' ||
          (en.isArray(c) ? (u = u + '[]') : (c = [c]),
          en.forEach(c, function (f) {
            en.isDate(f) ? (f = f.toISOString()) : en.isObject(f) && (f = JSON.stringify(f)),
              s.push(Ih(u) + '=' + Ih(f));
          }));
      }),
        (i = s.join('&'));
    }
    if (i) {
      var o = e.indexOf('#');
      o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
    }
    return e;
  };
});
var Dh = E((gA, Ah) => {
  'use strict';
  var aS = Fe();
  function ns() {
    this.handlers = [];
  }
  ns.prototype.use = function (e, t, n) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  ns.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  };
  ns.prototype.forEach = function (e) {
    aS.forEach(this.handlers, function (n) {
      n !== null && e(n);
    });
  };
  Ah.exports = ns;
});
var Lh = E((_A, kh) => {
  'use strict';
  var cS = Fe();
  kh.exports = function (e, t) {
    cS.forEach(e, function (i, s) {
      s !== t && s.toUpperCase() === t.toUpperCase() && ((e[t] = i), delete e[s]);
    });
  };
});
var is = E((bA, Ph) => {
  'use strict';
  Ph.exports = function (e, t, n, i, s) {
    return (
      (e.config = t),
      n && (e.code = n),
      (e.request = i),
      (e.response = s),
      (e.isAxiosError = !0),
      (e.toJSON = function () {
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
      e
    );
  };
});
var ss = E((vA, Uh) => {
  'use strict';
  var uS = is();
  Uh.exports = function (e, t, n, i, s) {
    var o = new Error(e);
    return uS(o, t, n, i, s);
  };
});
var Na = E((SA, Fh) => {
  'use strict';
  var lS = ss();
  Fh.exports = function (e, t, n) {
    var i = n.config.validateStatus;
    !n.status || !i || i(n.status)
      ? e(n)
      : t(lS('Request failed with status code ' + n.status, n.config, null, n.request, n));
  };
});
var qh = E((wA, Mh) => {
  'use strict';
  var os = Fe();
  Mh.exports = os.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (t, n, i, s, o, a) {
            var c = [];
            c.push(t + '=' + encodeURIComponent(n)),
              os.isNumber(i) && c.push('expires=' + new Date(i).toGMTString()),
              os.isString(s) && c.push('path=' + s),
              os.isString(o) && c.push('domain=' + o),
              a === !0 && c.push('secure'),
              (document.cookie = c.join('; '));
          },
          read: function (t) {
            var n = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'));
            return n ? decodeURIComponent(n[3]) : null;
          },
          remove: function (t) {
            this.write(t, '', Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();
});
var jh = E((RA, Bh) => {
  'use strict';
  Bh.exports = function (e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  };
});
var $h = E((TA, Gh) => {
  'use strict';
  Gh.exports = function (e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
  };
});
var Aa = E((xA, Hh) => {
  'use strict';
  var fS = jh(),
    hS = $h();
  Hh.exports = function (e, t) {
    return e && !fS(t) ? hS(e, t) : t;
  };
});
var Vh = E((OA, zh) => {
  'use strict';
  var Da = Fe(),
    dS = [
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ];
  zh.exports = function (e) {
    var t = {},
      n,
      i,
      s;
    return (
      e &&
        Da.forEach(
          e.split(`
`),
          function (a) {
            if (
              ((s = a.indexOf(':')),
              (n = Da.trim(a.substr(0, s)).toLowerCase()),
              (i = Da.trim(a.substr(s + 1))),
              n)
            ) {
              if (t[n] && dS.indexOf(n) >= 0) return;
              n === 'set-cookie'
                ? (t[n] = (t[n] ? t[n] : []).concat([i]))
                : (t[n] = t[n] ? t[n] + ', ' + i : i);
            }
          }
        ),
      t
    );
  };
});
var Kh = E((CA, Xh) => {
  'use strict';
  var Wh = Fe();
  Xh.exports = Wh.isStandardBrowserEnv()
    ? (function () {
        var e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement('a'),
          n;
        function i(s) {
          var o = s;
          return (
            e && (t.setAttribute('href', o), (o = t.href)),
            t.setAttribute('href', o),
            {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, '') : '',
              hash: t.hash ? t.hash.replace(/^#/, '') : '',
              hostname: t.hostname,
              port: t.port,
              pathname: t.pathname.charAt(0) === '/' ? t.pathname : '/' + t.pathname,
            }
          );
        }
        return (
          (n = i(window.location.href)),
          function (o) {
            var a = Wh.isString(o) ? i(o) : o;
            return a.protocol === n.protocol && a.host === n.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var Jh = E((IA, Yh) => {
  'use strict';
  var as = Fe(),
    pS = Na(),
    mS = qh(),
    yS = rs(),
    ES = Aa(),
    gS = Vh(),
    _S = Kh(),
    ka = ss();
  Yh.exports = function (e) {
    return new Promise(function (n, i) {
      var s = e.data,
        o = e.headers,
        a = e.responseType;
      as.isFormData(s) && delete o['Content-Type'];
      var c = new XMLHttpRequest();
      if (e.auth) {
        var u = e.auth.username || '',
          l = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
        o.Authorization = 'Basic ' + btoa(u + ':' + l);
      }
      var f = ES(e.baseURL, e.url);
      c.open(e.method.toUpperCase(), yS(f, e.params, e.paramsSerializer), !0),
        (c.timeout = e.timeout);
      function h() {
        if (c) {
          var m = 'getAllResponseHeaders' in c ? gS(c.getAllResponseHeaders()) : null,
            b = !a || a === 'text' || a === 'json' ? c.responseText : c.response,
            p = {
              data: b,
              status: c.status,
              statusText: c.statusText,
              headers: m,
              config: e,
              request: c,
            };
          pS(n, i, p), (c = null);
        }
      }
      if (
        ('onloadend' in c
          ? (c.onloadend = h)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 && !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                setTimeout(h);
            }),
        (c.onabort = function () {
          c && (i(ka('Request aborted', e, 'ECONNABORTED', c)), (c = null));
        }),
        (c.onerror = function () {
          i(ka('Network Error', e, null, c)), (c = null);
        }),
        (c.ontimeout = function () {
          var b = 'timeout of ' + e.timeout + 'ms exceeded';
          e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
            i(
              ka(
                b,
                e,
                e.transitional && e.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                c
              )
            ),
            (c = null);
        }),
        as.isStandardBrowserEnv())
      ) {
        var d =
          (e.withCredentials || _S(f)) && e.xsrfCookieName ? mS.read(e.xsrfCookieName) : void 0;
        d && (o[e.xsrfHeaderName] = d);
      }
      'setRequestHeader' in c &&
        as.forEach(o, function (b, p) {
          typeof s > 'u' && p.toLowerCase() === 'content-type'
            ? delete o[p]
            : c.setRequestHeader(p, b);
        }),
        as.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
        a && a !== 'json' && (c.responseType = e.responseType),
        typeof e.onDownloadProgress == 'function' &&
          c.addEventListener('progress', e.onDownloadProgress),
        typeof e.onUploadProgress == 'function' &&
          c.upload &&
          c.upload.addEventListener('progress', e.onUploadProgress),
        e.cancelToken &&
          e.cancelToken.promise.then(function (b) {
            c && (c.abort(), i(b), (c = null));
          }),
        s || (s = null),
        c.send(s);
    });
  };
});
var Qh = E((NA, Zh) => {
  'use strict';
  var tn = 1e3,
    rn = tn * 60,
    nn = rn * 60,
    Cr = nn * 24,
    bS = Cr * 7,
    vS = Cr * 365.25;
  Zh.exports = function (r, e) {
    e = e || {};
    var t = typeof r;
    if (t === 'string' && r.length > 0) return SS(r);
    if (t === 'number' && isFinite(r)) return e.long ? RS(r) : wS(r);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(r));
  };
  function SS(r) {
    if (((r = String(r)), !(r.length > 100))) {
      var e =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          r
        );
      if (e) {
        var t = parseFloat(e[1]),
          n = (e[2] || 'ms').toLowerCase();
        switch (n) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return t * vS;
          case 'weeks':
          case 'week':
          case 'w':
            return t * bS;
          case 'days':
          case 'day':
          case 'd':
            return t * Cr;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return t * nn;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return t * rn;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return t * tn;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return t;
          default:
            return;
        }
      }
    }
  }
  function wS(r) {
    var e = Math.abs(r);
    return e >= Cr
      ? Math.round(r / Cr) + 'd'
      : e >= nn
        ? Math.round(r / nn) + 'h'
        : e >= rn
          ? Math.round(r / rn) + 'm'
          : e >= tn
            ? Math.round(r / tn) + 's'
            : r + 'ms';
  }
  function RS(r) {
    var e = Math.abs(r);
    return e >= Cr
      ? cs(r, e, Cr, 'day')
      : e >= nn
        ? cs(r, e, nn, 'hour')
        : e >= rn
          ? cs(r, e, rn, 'minute')
          : e >= tn
            ? cs(r, e, tn, 'second')
            : r + ' ms';
  }
  function cs(r, e, t, n) {
    var i = e >= t * 1.5;
    return Math.round(r / t) + ' ' + n + (i ? 's' : '');
  }
});
var La = E((AA, ed) => {
  'use strict';
  function TS(r) {
    (t.debug = t),
      (t.default = t),
      (t.coerce = c),
      (t.disable = s),
      (t.enable = i),
      (t.enabled = o),
      (t.humanize = Qh()),
      (t.destroy = u),
      Object.keys(r).forEach((l) => {
        t[l] = r[l];
      }),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {});
    function e(l) {
      let f = 0;
      for (let h = 0; h < l.length; h++) (f = (f << 5) - f + l.charCodeAt(h)), (f |= 0);
      return t.colors[Math.abs(f) % t.colors.length];
    }
    t.selectColor = e;
    function t(l) {
      let f,
        h = null,
        d,
        m;
      function b(...p) {
        if (!b.enabled) return;
        let S = b,
          D = Number(new Date()),
          x = D - (f || D);
        (S.diff = x),
          (S.prev = f),
          (S.curr = D),
          (f = D),
          (p[0] = t.coerce(p[0])),
          typeof p[0] != 'string' && p.unshift('%O');
        let P = 0;
        (p[0] = p[0].replace(/%([a-zA-Z%])/g, (O, j) => {
          if (O === '%%') return '%';
          P++;
          let $ = t.formatters[j];
          if (typeof $ == 'function') {
            let C = p[P];
            (O = $.call(S, C)), p.splice(P, 1), P--;
          }
          return O;
        })),
          t.formatArgs.call(S, p),
          (S.log || t.log).apply(S, p);
      }
      return (
        (b.namespace = l),
        (b.useColors = t.useColors()),
        (b.color = t.selectColor(l)),
        (b.extend = n),
        (b.destroy = t.destroy),
        Object.defineProperty(b, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            h !== null ? h : (d !== t.namespaces && ((d = t.namespaces), (m = t.enabled(l))), m),
          set: (p) => {
            h = p;
          },
        }),
        typeof t.init == 'function' && t.init(b),
        b
      );
    }
    function n(l, f) {
      let h = t(this.namespace + (typeof f > 'u' ? ':' : f) + l);
      return (h.log = this.log), h;
    }
    function i(l) {
      t.save(l), (t.namespaces = l), (t.names = []), (t.skips = []);
      let f,
        h = (typeof l == 'string' ? l : '').split(/[\s,]+/),
        d = h.length;
      for (f = 0; f < d; f++)
        h[f] &&
          ((l = h[f].replace(/\*/g, '.*?')),
          l[0] === '-'
            ? t.skips.push(new RegExp('^' + l.slice(1) + '$'))
            : t.names.push(new RegExp('^' + l + '$')));
    }
    function s() {
      let l = [...t.names.map(a), ...t.skips.map(a).map((f) => '-' + f)].join(',');
      return t.enable(''), l;
    }
    function o(l) {
      if (l[l.length - 1] === '*') return !0;
      let f, h;
      for (f = 0, h = t.skips.length; f < h; f++) if (t.skips[f].test(l)) return !1;
      for (f = 0, h = t.names.length; f < h; f++) if (t.names[f].test(l)) return !0;
      return !1;
    }
    function a(l) {
      return l
        .toString()
        .substring(2, l.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function c(l) {
      return l instanceof Error ? l.stack || l.message : l;
    }
    function u() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
      );
    }
    return t.enable(t.load()), t;
  }
  ed.exports = TS;
});
var td = E((Ye, us) => {
  'use strict';
  Ye.formatArgs = OS;
  Ye.save = CS;
  Ye.load = IS;
  Ye.useColors = xS;
  Ye.storage = NS();
  Ye.destroy = (() => {
    let r = !1;
    return () => {
      r ||
        ((r = !0),
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        ));
    };
  })();
  Ye.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33',
  ];
  function xS() {
    return typeof window < 'u' &&
      window.process &&
      (window.process.type === 'renderer' || window.process.__nwjs)
      ? !0
      : typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        ? !1
        : (typeof document < 'u' &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window < 'u' &&
            window.console &&
            (window.console.firebug || (window.console.exception && window.console.table))) ||
          (typeof navigator < 'u' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator < 'u' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function OS(r) {
    if (
      ((r[0] =
        (this.useColors ? '%c' : '') +
        this.namespace +
        (this.useColors ? ' %c' : ' ') +
        r[0] +
        (this.useColors ? '%c ' : ' ') +
        '+' +
        us.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let e = 'color: ' + this.color;
    r.splice(1, 0, e, 'color: inherit');
    let t = 0,
      n = 0;
    r[0].replace(/%[a-zA-Z%]/g, (i) => {
      i !== '%%' && (t++, i === '%c' && (n = t));
    }),
      r.splice(n, 0, e);
  }
  Ye.log = console.debug || console.log || (() => {});
  function CS(r) {
    try {
      r ? Ye.storage.setItem('debug', r) : Ye.storage.removeItem('debug');
    } catch {}
  }
  function IS() {
    let r;
    try {
      r = Ye.storage.getItem('debug');
    } catch {}
    return !r && typeof process < 'u' && 'env' in process && (r = process.env.DEBUG), r;
  }
  function NS() {
    try {
      return localStorage;
    } catch {}
  }
  us.exports = La()(Ye);
  var { formatters: AS } = us.exports;
  AS.j = function (r) {
    try {
      return JSON.stringify(r);
    } catch (e) {
      return '[UnexpectedJSONParseError]: ' + e.message;
    }
  };
});
var nd = E((DA, rd) => {
  'use strict';
  rd.exports = (r, e = process.argv) => {
    let t = r.startsWith('-') ? '' : r.length === 1 ? '-' : '--',
      n = e.indexOf(t + r),
      i = e.indexOf('--');
    return n !== -1 && (i === -1 || n < i);
  };
});
var od = E((kA, sd) => {
  'use strict';
  var DS = require('os'),
    id = require('tty'),
    rt = nd(),
    { env: ye } = process,
    Kt;
  rt('no-color') || rt('no-colors') || rt('color=false') || rt('color=never')
    ? (Kt = 0)
    : (rt('color') || rt('colors') || rt('color=true') || rt('color=always')) && (Kt = 1);
  'FORCE_COLOR' in ye &&
    (ye.FORCE_COLOR === 'true'
      ? (Kt = 1)
      : ye.FORCE_COLOR === 'false'
        ? (Kt = 0)
        : (Kt = ye.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(ye.FORCE_COLOR, 10), 3)));
  function Pa(r) {
    return r === 0 ? !1 : { level: r, hasBasic: !0, has256: r >= 2, has16m: r >= 3 };
  }
  function Ua(r, e) {
    if (Kt === 0) return 0;
    if (rt('color=16m') || rt('color=full') || rt('color=truecolor')) return 3;
    if (rt('color=256')) return 2;
    if (r && !e && Kt === void 0) return 0;
    let t = Kt || 0;
    if (ye.TERM === 'dumb') return t;
    if (process.platform === 'win32') {
      let n = DS.release().split('.');
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? (Number(n[2]) >= 14931 ? 3 : 2) : 1;
    }
    if ('CI' in ye)
      return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(
        (n) => n in ye
      ) || ye.CI_NAME === 'codeship'
        ? 1
        : t;
    if ('TEAMCITY_VERSION' in ye)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ye.TEAMCITY_VERSION) ? 1 : 0;
    if (ye.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in ye) {
      let n = parseInt((ye.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (ye.TERM_PROGRAM) {
        case 'iTerm.app':
          return n >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    return /-256(color)?$/i.test(ye.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(ye.TERM) ||
          'COLORTERM' in ye
        ? 1
        : t;
  }
  function kS(r) {
    let e = Ua(r, r && r.isTTY);
    return Pa(e);
  }
  sd.exports = {
    supportsColor: kS,
    stdout: Pa(Ua(!0, id.isatty(1))),
    stderr: Pa(Ua(!0, id.isatty(2))),
  };
});
var cd = E((Se, fs) => {
  'use strict';
  var LS = require('tty'),
    ls = require('util');
  Se.init = jS;
  Se.log = MS;
  Se.formatArgs = US;
  Se.save = qS;
  Se.load = BS;
  Se.useColors = PS;
  Se.destroy = ls.deprecate(
    () => {},
    'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
  );
  Se.colors = [6, 2, 3, 4, 5, 1];
  try {
    let r = od();
    r &&
      (r.stderr || r).level >= 2 &&
      (Se.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76,
        77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162,
        163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198,
        199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch {}
  Se.inspectOpts = Object.keys(process.env)
    .filter((r) => /^debug_/i.test(r))
    .reduce((r, e) => {
      let t = e
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (i, s) => s.toUpperCase()),
        n = process.env[e];
      return (
        /^(yes|on|true|enabled)$/i.test(n)
          ? (n = !0)
          : /^(no|off|false|disabled)$/i.test(n)
            ? (n = !1)
            : n === 'null'
              ? (n = null)
              : (n = Number(n)),
        (r[t] = n),
        r
      );
    }, {});
  function PS() {
    return 'colors' in Se.inspectOpts ? !!Se.inspectOpts.colors : LS.isatty(process.stderr.fd);
  }
  function US(r) {
    let { namespace: e, useColors: t } = this;
    if (t) {
      let n = this.color,
        i = '\x1B[3' + (n < 8 ? n : '8;5;' + n),
        s = `  ${i};1m${e} \x1B[0m`;
      (r[0] =
        s +
        r[0]
          .split(
            `
`
          )
          .join(
            `
` + s
          )),
        r.push(i + 'm+' + fs.exports.humanize(this.diff) + '\x1B[0m');
    } else r[0] = FS() + e + ' ' + r[0];
  }
  function FS() {
    return Se.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
  }
  function MS(...r) {
    return process.stderr.write(
      ls.format(...r) +
        `
`
    );
  }
  function qS(r) {
    r ? (process.env.DEBUG = r) : delete process.env.DEBUG;
  }
  function BS() {
    return process.env.DEBUG;
  }
  function jS(r) {
    r.inspectOpts = {};
    let e = Object.keys(Se.inspectOpts);
    for (let t = 0; t < e.length; t++) r.inspectOpts[e[t]] = Se.inspectOpts[e[t]];
  }
  fs.exports = La()(Se);
  var { formatters: ad } = fs.exports;
  ad.o = function (r) {
    return (
      (this.inspectOpts.colors = this.useColors),
      ls
        .inspect(r, this.inspectOpts)
        .split(
          `
`
        )
        .map((e) => e.trim())
        .join(' ')
    );
  };
  ad.O = function (r) {
    return (this.inspectOpts.colors = this.useColors), ls.inspect(r, this.inspectOpts);
  };
});
var ud = E((LA, Fa) => {
  'use strict';
  typeof process > 'u' || process.type === 'renderer' || process.browser === !0 || process.__nwjs
    ? (Fa.exports = td())
    : (Fa.exports = cd());
});
var fd = E((PA, ld) => {
  'use strict';
  var ei;
  ld.exports = function () {
    if (!ei) {
      try {
        ei = ud()('follow-redirects');
      } catch {}
      typeof ei != 'function' && (ei = function () {});
    }
    ei.apply(null, arguments);
  };
});
var za = E((UA, Ha) => {
  'use strict';
  var Ir = require('url'),
    Ma = Ir.URL,
    GS = require('http'),
    $S = require('https'),
    Ba = require('stream').Writable,
    pd = require('assert'),
    md = fd(),
    ja = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'],
    Ga = Object.create(null);
  ja.forEach(function (r) {
    Ga[r] = function (e, t, n) {
      this._redirectable.emit(r, e, t, n);
    };
  });
  var HS = ri('ERR_INVALID_URL', 'Invalid URL', TypeError),
    hd = ri('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed'),
    zS = ri('ERR_FR_TOO_MANY_REDIRECTS', 'Maximum number of redirects exceeded'),
    VS = ri('ERR_FR_MAX_BODY_LENGTH_EXCEEDED', 'Request body larger than maxBodyLength limit'),
    WS = ri('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    XS = Ba.prototype.destroy || Ed;
  function $e(r, e) {
    Ba.call(this),
      this._sanitizeOptions(r),
      (this._options = r),
      (this._ended = !1),
      (this._ending = !1),
      (this._redirectCount = 0),
      (this._redirects = []),
      (this._requestBodyLength = 0),
      (this._requestBodyBuffers = []),
      e && this.on('response', e);
    var t = this;
    (this._onNativeResponse = function (n) {
      t._processResponse(n);
    }),
      this._performRequest();
  }
  $e.prototype = Object.create(Ba.prototype);
  $e.prototype.abort = function () {
    $a(this._currentRequest), this._currentRequest.abort(), this.emit('abort');
  };
  $e.prototype.destroy = function (r) {
    return $a(this._currentRequest, r), XS.call(this, r), this;
  };
  $e.prototype.write = function (r, e, t) {
    if (this._ending) throw new WS();
    if (!Nr(r) && !YS(r)) throw new TypeError('data should be a string, Buffer or Uint8Array');
    if ((ti(e) && ((t = e), (e = null)), r.length === 0)) {
      t && t();
      return;
    }
    this._requestBodyLength + r.length <= this._options.maxBodyLength
      ? ((this._requestBodyLength += r.length),
        this._requestBodyBuffers.push({ data: r, encoding: e }),
        this._currentRequest.write(r, e, t))
      : (this.emit('error', new VS()), this.abort());
  };
  $e.prototype.end = function (r, e, t) {
    if ((ti(r) ? ((t = r), (r = e = null)) : ti(e) && ((t = e), (e = null)), !r))
      (this._ended = this._ending = !0), this._currentRequest.end(null, null, t);
    else {
      var n = this,
        i = this._currentRequest;
      this.write(r, e, function () {
        (n._ended = !0), i.end(null, null, t);
      }),
        (this._ending = !0);
    }
  };
  $e.prototype.setHeader = function (r, e) {
    (this._options.headers[r] = e), this._currentRequest.setHeader(r, e);
  };
  $e.prototype.removeHeader = function (r) {
    delete this._options.headers[r], this._currentRequest.removeHeader(r);
  };
  $e.prototype.setTimeout = function (r, e) {
    var t = this;
    function n(o) {
      o.setTimeout(r), o.removeListener('timeout', o.destroy), o.addListener('timeout', o.destroy);
    }
    function i(o) {
      t._timeout && clearTimeout(t._timeout),
        (t._timeout = setTimeout(function () {
          t.emit('timeout'), s();
        }, r)),
        n(o);
    }
    function s() {
      t._timeout && (clearTimeout(t._timeout), (t._timeout = null)),
        t.removeListener('abort', s),
        t.removeListener('error', s),
        t.removeListener('response', s),
        t.removeListener('close', s),
        e && t.removeListener('timeout', e),
        t.socket || t._currentRequest.removeListener('socket', i);
    }
    return (
      e && this.on('timeout', e),
      this.socket ? i(this.socket) : this._currentRequest.once('socket', i),
      this.on('socket', n),
      this.on('abort', s),
      this.on('error', s),
      this.on('response', s),
      this.on('close', s),
      this
    );
  };
  ['flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive'].forEach(function (r) {
    $e.prototype[r] = function (e, t) {
      return this._currentRequest[r](e, t);
    };
  });
  ['aborted', 'connection', 'socket'].forEach(function (r) {
    Object.defineProperty($e.prototype, r, {
      get: function () {
        return this._currentRequest[r];
      },
    });
  });
  $e.prototype._sanitizeOptions = function (r) {
    if (
      (r.headers || (r.headers = {}),
      r.host && (r.hostname || (r.hostname = r.host), delete r.host),
      !r.pathname && r.path)
    ) {
      var e = r.path.indexOf('?');
      e < 0
        ? (r.pathname = r.path)
        : ((r.pathname = r.path.substring(0, e)), (r.search = r.path.substring(e)));
    }
  };
  $e.prototype._performRequest = function () {
    var r = this._options.protocol,
      e = this._options.nativeProtocols[r];
    if (!e) {
      this.emit('error', new TypeError('Unsupported protocol ' + r));
      return;
    }
    if (this._options.agents) {
      var t = r.slice(0, -1);
      this._options.agent = this._options.agents[t];
    }
    var n = (this._currentRequest = e.request(this._options, this._onNativeResponse));
    n._redirectable = this;
    for (var i of ja) n.on(i, Ga[i]);
    if (
      ((this._currentUrl = /^\//.test(this._options.path)
        ? Ir.format(this._options)
        : this._options.path),
      this._isRedirect)
    ) {
      var s = 0,
        o = this,
        a = this._requestBodyBuffers;
      (function c(u) {
        if (n === o._currentRequest)
          if (u) o.emit('error', u);
          else if (s < a.length) {
            var l = a[s++];
            n.finished || n.write(l.data, l.encoding, c);
          } else o._ended && n.end();
      })();
    }
  };
  $e.prototype._processResponse = function (r) {
    var e = r.statusCode;
    this._options.trackRedirects &&
      this._redirects.push({ url: this._currentUrl, headers: r.headers, statusCode: e });
    var t = r.headers.location;
    if (!t || this._options.followRedirects === !1 || e < 300 || e >= 400) {
      (r.responseUrl = this._currentUrl),
        (r.redirects = this._redirects),
        this.emit('response', r),
        (this._requestBodyBuffers = []);
      return;
    }
    if (
      ($a(this._currentRequest), r.destroy(), ++this._redirectCount > this._options.maxRedirects)
    ) {
      this.emit('error', new zS());
      return;
    }
    var n,
      i = this._options.beforeRedirect;
    i && (n = Object.assign({ Host: r.req.getHeader('host') }, this._options.headers));
    var s = this._options.method;
    (((e === 301 || e === 302) && this._options.method === 'POST') ||
      (e === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
      ((this._options.method = 'GET'),
      (this._requestBodyBuffers = []),
      qa(/^content-/i, this._options.headers));
    var o = qa(/^host$/i, this._options.headers),
      a = Ir.parse(this._currentUrl),
      c = o || a.host,
      u = /^\w+:/.test(t) ? this._currentUrl : Ir.format(Object.assign(a, { host: c })),
      l;
    try {
      l = Ir.resolve(u, t);
    } catch (m) {
      this.emit('error', new hd({ cause: m }));
      return;
    }
    md('redirecting to', l), (this._isRedirect = !0);
    var f = Ir.parse(l);
    if (
      (Object.assign(this._options, f),
      ((f.protocol !== a.protocol && f.protocol !== 'https:') ||
        (f.host !== c && !KS(f.host, c))) &&
        qa(/^(?:authorization|cookie)$/i, this._options.headers),
      ti(i))
    ) {
      var h = { headers: r.headers, statusCode: e },
        d = { url: u, method: s, headers: n };
      try {
        i(this._options, h, d);
      } catch (m) {
        this.emit('error', m);
        return;
      }
      this._sanitizeOptions(this._options);
    }
    try {
      this._performRequest();
    } catch (m) {
      this.emit('error', new hd({ cause: m }));
    }
  };
  function yd(r) {
    var e = { maxRedirects: 21, maxBodyLength: 10485760 },
      t = {};
    return (
      Object.keys(r).forEach(function (n) {
        var i = n + ':',
          s = (t[i] = r[n]),
          o = (e[n] = Object.create(s));
        function a(u, l, f) {
          if (Nr(u)) {
            var h;
            try {
              h = dd(new Ma(u));
            } catch {
              h = Ir.parse(u);
            }
            if (!Nr(h.protocol)) throw new HS({ input: u });
            u = h;
          } else Ma && u instanceof Ma ? (u = dd(u)) : ((f = l), (l = u), (u = { protocol: i }));
          return (
            ti(l) && ((f = l), (l = null)),
            (l = Object.assign(
              { maxRedirects: e.maxRedirects, maxBodyLength: e.maxBodyLength },
              u,
              l
            )),
            (l.nativeProtocols = t),
            !Nr(l.host) && !Nr(l.hostname) && (l.hostname = '::1'),
            pd.equal(l.protocol, i, 'protocol mismatch'),
            md('options', l),
            new $e(l, f)
          );
        }
        function c(u, l, f) {
          var h = o.request(u, l, f);
          return h.end(), h;
        }
        Object.defineProperties(o, {
          request: { value: a, configurable: !0, enumerable: !0, writable: !0 },
          get: { value: c, configurable: !0, enumerable: !0, writable: !0 },
        });
      }),
      e
    );
  }
  function Ed() {}
  function dd(r) {
    var e = {
      protocol: r.protocol,
      hostname: r.hostname.startsWith('[') ? r.hostname.slice(1, -1) : r.hostname,
      hash: r.hash,
      search: r.search,
      pathname: r.pathname,
      path: r.pathname + r.search,
      href: r.href,
    };
    return r.port !== '' && (e.port = Number(r.port)), e;
  }
  function qa(r, e) {
    var t;
    for (var n in e) r.test(n) && ((t = e[n]), delete e[n]);
    return t === null || typeof t > 'u' ? void 0 : String(t).trim();
  }
  function ri(r, e, t) {
    function n(i) {
      Error.captureStackTrace(this, this.constructor),
        Object.assign(this, i || {}),
        (this.code = r),
        (this.message = this.cause ? e + ': ' + this.cause.message : e);
    }
    return (
      (n.prototype = new (t || Error)()),
      (n.prototype.constructor = n),
      (n.prototype.name = 'Error [' + r + ']'),
      n
    );
  }
  function $a(r, e) {
    for (var t of ja) r.removeListener(t, Ga[t]);
    r.on('error', Ed), r.destroy(e);
  }
  function KS(r, e) {
    pd(Nr(r) && Nr(e));
    var t = r.length - e.length - 1;
    return t > 0 && r[t] === '.' && r.endsWith(e);
  }
  function Nr(r) {
    return typeof r == 'string' || r instanceof String;
  }
  function ti(r) {
    return typeof r == 'function';
  }
  function YS(r) {
    return typeof r == 'object' && 'length' in r;
  }
  Ha.exports = yd({ http: GS, https: $S });
  Ha.exports.wrap = yd;
});
var Va = E((FA, JS) => {
  JS.exports = {
    name: 'axios',
    version: '0.21.2',
    description: 'Promise based HTTP client for the browser and node.js',
    main: 'index.js',
    scripts: {
      test: 'grunt test',
      start: 'node ./sandbox/server.js',
      build: 'NODE_ENV=production grunt build',
      preversion: 'npm test',
      version:
        'npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json',
      postversion: 'git push && git push --tags',
      examples: 'node ./examples/server.js',
      coveralls: 'cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js',
      fix: 'eslint --fix lib/**/*.js',
    },
    repository: { type: 'git', url: 'https://github.com/axios/axios.git' },
    keywords: ['xhr', 'http', 'ajax', 'promise', 'node'],
    author: 'Matt Zabriskie',
    license: 'MIT',
    bugs: { url: 'https://github.com/axios/axios/issues' },
    homepage: 'https://axios-http.com',
    devDependencies: {
      coveralls: '^3.0.0',
      'es6-promise': '^4.2.4',
      grunt: '^1.3.0',
      'grunt-banner': '^0.6.0',
      'grunt-cli': '^1.2.0',
      'grunt-contrib-clean': '^1.1.0',
      'grunt-contrib-watch': '^1.0.0',
      'grunt-eslint': '^23.0.0',
      'grunt-karma': '^4.0.0',
      'grunt-mocha-test': '^0.13.3',
      'grunt-ts': '^6.0.0-beta.19',
      'grunt-webpack': '^4.0.2',
      'istanbul-instrumenter-loader': '^1.0.0',
      'jasmine-core': '^2.4.1',
      karma: '^6.3.2',
      'karma-chrome-launcher': '^3.1.0',
      'karma-firefox-launcher': '^2.1.0',
      'karma-jasmine': '^1.1.1',
      'karma-jasmine-ajax': '^0.1.13',
      'karma-safari-launcher': '^1.0.0',
      'karma-sauce-launcher': '^4.3.6',
      'karma-sinon': '^1.0.5',
      'karma-sourcemap-loader': '^0.3.8',
      'karma-webpack': '^4.0.2',
      'load-grunt-tasks': '^3.5.2',
      minimist: '^1.2.0',
      mocha: '^8.2.1',
      sinon: '^4.5.0',
      'terser-webpack-plugin': '^4.2.3',
      typescript: '^4.0.5',
      'url-search-params': '^0.10.0',
      webpack: '^4.44.2',
      'webpack-dev-server': '^3.11.0',
    },
    browser: { './lib/adapters/http.js': './lib/adapters/xhr.js' },
    jsdelivr: 'dist/axios.min.js',
    unpkg: 'dist/axios.min.js',
    typings: './index.d.ts',
    dependencies: { 'follow-redirects': '^1.14.0' },
    bundlesize: [{ path: './dist/axios.min.js', threshold: '5kB' }],
  };
});
var wd = E((MA, Sd) => {
  'use strict';
  var ni = Fe(),
    gd = Na(),
    ZS = Aa(),
    QS = rs(),
    ew = require('http'),
    tw = require('https'),
    rw = za().http,
    nw = za().https,
    _d = require('url'),
    iw = require('zlib'),
    sw = Va(),
    hs = ss(),
    Wa = is(),
    bd = /https:?/;
  function vd(r, e, t) {
    if (((r.hostname = e.host), (r.host = e.host), (r.port = e.port), (r.path = t), e.auth)) {
      var n = Buffer.from(e.auth.username + ':' + e.auth.password, 'utf8').toString('base64');
      r.headers['Proxy-Authorization'] = 'Basic ' + n;
    }
    r.beforeRedirect = function (s) {
      (s.headers.host = s.host), vd(s, e, s.href);
    };
  }
  Sd.exports = function (e) {
    return new Promise(function (n, i) {
      var s = function (U) {
          n(U);
        },
        o = function (U) {
          i(U);
        },
        a = e.data,
        c = e.headers;
      if (
        ('User-Agent' in c || 'user-agent' in c
          ? !c['User-Agent'] && !c['user-agent'] && (delete c['User-Agent'], delete c['user-agent'])
          : (c['User-Agent'] = 'axios/' + sw.version),
        a && !ni.isStream(a))
      ) {
        if (!Buffer.isBuffer(a))
          if (ni.isArrayBuffer(a)) a = Buffer.from(new Uint8Array(a));
          else if (ni.isString(a)) a = Buffer.from(a, 'utf-8');
          else
            return o(
              hs(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                e
              )
            );
        c['Content-Length'] = a.length;
      }
      var u = void 0;
      if (e.auth) {
        var l = e.auth.username || '',
          f = e.auth.password || '';
        u = l + ':' + f;
      }
      var h = ZS(e.baseURL, e.url),
        d = _d.parse(h),
        m = d.protocol || 'http:';
      if (!u && d.auth) {
        var b = d.auth.split(':'),
          p = b[0] || '',
          S = b[1] || '';
        u = p + ':' + S;
      }
      u && delete c.Authorization;
      var D = bd.test(m),
        x = D ? e.httpsAgent : e.httpAgent,
        P = {
          path: QS(d.path, e.params, e.paramsSerializer).replace(/^\?/, ''),
          method: e.method.toUpperCase(),
          headers: c,
          agent: x,
          agents: { http: e.httpAgent, https: e.httpsAgent },
          auth: u,
        };
      e.socketPath ? (P.socketPath = e.socketPath) : ((P.hostname = d.hostname), (P.port = d.port));
      var k = e.proxy;
      if (!k && k !== !1) {
        var O = m.slice(0, -1) + '_proxy',
          j = process.env[O] || process.env[O.toUpperCase()];
        if (j) {
          var $ = _d.parse(j),
            C = process.env.no_proxy || process.env.NO_PROXY,
            I = !0;
          if (C) {
            var G = C.split(',').map(function (U) {
              return U.trim();
            });
            I = !G.some(function (U) {
              return U
                ? U === '*' ||
                  (U[0] === '.' && d.hostname.substr(d.hostname.length - U.length) === U)
                  ? !0
                  : d.hostname === U
                : !1;
            });
          }
          if (I && ((k = { host: $.hostname, port: $.port, protocol: $.protocol }), $.auth)) {
            var X = $.auth.split(':');
            k.auth = { username: X[0], password: X[1] };
          }
        }
      }
      k &&
        ((P.headers.host = d.hostname + (d.port ? ':' + d.port : '')),
        vd(P, k, m + '//' + d.hostname + (d.port ? ':' + d.port : '') + P.path));
      var V,
        J = D && (k ? bd.test(k.protocol) : !0);
      e.transport
        ? (V = e.transport)
        : e.maxRedirects === 0
          ? (V = J ? tw : ew)
          : (e.maxRedirects && (P.maxRedirects = e.maxRedirects), (V = J ? nw : rw)),
        e.maxBodyLength > -1 && (P.maxBodyLength = e.maxBodyLength);
      var B = V.request(P, function (U) {
        if (!B.aborted) {
          var z = U,
            le = U.req || B;
          if (U.statusCode !== 204 && le.method !== 'HEAD' && e.decompress !== !1)
            switch (U.headers['content-encoding']) {
              case 'gzip':
              case 'compress':
              case 'deflate':
                (z = z.pipe(iw.createUnzip())), delete U.headers['content-encoding'];
                break;
            }
          var Re = {
            status: U.statusCode,
            statusText: U.statusMessage,
            headers: U.headers,
            config: e,
            request: le,
          };
          if (e.responseType === 'stream') (Re.data = z), gd(s, o, Re);
          else {
            var R = [],
              N = 0;
            z.on('data', function (W) {
              R.push(W),
                (N += W.length),
                e.maxContentLength > -1 &&
                  N > e.maxContentLength &&
                  (z.destroy(),
                  o(
                    hs('maxContentLength size of ' + e.maxContentLength + ' exceeded', e, null, le)
                  ));
            }),
              z.on('error', function (W) {
                B.aborted || o(Wa(W, e, null, le));
              }),
              z.on('end', function () {
                var W = Buffer.concat(R);
                e.responseType !== 'arraybuffer' &&
                  ((W = W.toString(e.responseEncoding)),
                  (!e.responseEncoding || e.responseEncoding === 'utf8') && (W = ni.stripBOM(W))),
                  (Re.data = W),
                  gd(s, o, Re);
              });
          }
        }
      });
      if (
        (B.on('error', function (U) {
          (B.aborted && U.code !== 'ERR_FR_TOO_MANY_REDIRECTS') || o(Wa(U, e, null, B));
        }),
        e.timeout)
      ) {
        var K = parseInt(e.timeout, 10);
        if (isNaN(K)) {
          o(hs('error trying to parse `config.timeout` to int', e, 'ERR_PARSE_TIMEOUT', B));
          return;
        }
        B.setTimeout(K, function () {
          B.abort(),
            o(
              hs(
                'timeout of ' + K + 'ms exceeded',
                e,
                e.transitional && e.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                B
              )
            );
        });
      }
      e.cancelToken &&
        e.cancelToken.promise.then(function (U) {
          B.aborted || (B.abort(), o(U));
        }),
        ni.isStream(a)
          ? a
              .on('error', function (U) {
                o(Wa(U, e, null, B));
              })
              .pipe(B)
          : B.end(a);
    });
  };
});
var ps = E((qA, xd) => {
  'use strict';
  var Me = Fe(),
    Rd = Lh(),
    ow = is(),
    aw = { 'Content-Type': 'application/x-www-form-urlencoded' };
  function Td(r, e) {
    !Me.isUndefined(r) && Me.isUndefined(r['Content-Type']) && (r['Content-Type'] = e);
  }
  function cw() {
    var r;
    return (
      typeof XMLHttpRequest < 'u'
        ? (r = Jh())
        : typeof process < 'u' &&
          Object.prototype.toString.call(process) === '[object process]' &&
          (r = wd()),
      r
    );
  }
  var ds = {
    transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    adapter: cw(),
    transformRequest: [
      function (e, t) {
        return (
          Rd(t, 'Accept'),
          Rd(t, 'Content-Type'),
          Me.isFormData(e) ||
          Me.isArrayBuffer(e) ||
          Me.isBuffer(e) ||
          Me.isStream(e) ||
          Me.isFile(e) ||
          Me.isBlob(e)
            ? e
            : Me.isArrayBufferView(e)
              ? e.buffer
              : Me.isURLSearchParams(e)
                ? (Td(t, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString())
                : Me.isObject(e) || (t && t['Content-Type'] === 'application/json')
                  ? (Td(t, 'application/json'), JSON.stringify(e))
                  : e
        );
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional,
          n = t && t.silentJSONParsing,
          i = t && t.forcedJSONParsing,
          s = !n && this.responseType === 'json';
        if (s || (i && Me.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (o) {
            if (s) throw o.name === 'SyntaxError' ? ow(o, this, 'E_JSON_PARSE') : o;
          }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
  };
  ds.headers = { common: { Accept: 'application/json, text/plain, */*' } };
  Me.forEach(['delete', 'get', 'head'], function (e) {
    ds.headers[e] = {};
  });
  Me.forEach(['post', 'put', 'patch'], function (e) {
    ds.headers[e] = Me.merge(aw);
  });
  xd.exports = ds;
});
var Cd = E((BA, Od) => {
  'use strict';
  var uw = Fe(),
    lw = ps();
  Od.exports = function (e, t, n) {
    var i = this || lw;
    return (
      uw.forEach(n, function (o) {
        e = o.call(i, e, t);
      }),
      e
    );
  };
});
var Xa = E((jA, Id) => {
  'use strict';
  Id.exports = function (e) {
    return !!(e && e.__CANCEL__);
  };
});
var Dd = E((GA, Ad) => {
  'use strict';
  var Nd = Fe(),
    Ka = Cd(),
    fw = Xa(),
    hw = ps();
  function Ya(r) {
    r.cancelToken && r.cancelToken.throwIfRequested();
  }
  Ad.exports = function (e) {
    Ya(e),
      (e.headers = e.headers || {}),
      (e.data = Ka.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = Nd.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
      Nd.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (i) {
        delete e.headers[i];
      });
    var t = e.adapter || hw.adapter;
    return t(e).then(
      function (i) {
        return Ya(e), (i.data = Ka.call(e, i.data, i.headers, e.transformResponse)), i;
      },
      function (i) {
        return (
          fw(i) ||
            (Ya(e),
            i &&
              i.response &&
              (i.response.data = Ka.call(
                e,
                i.response.data,
                i.response.headers,
                e.transformResponse
              ))),
          Promise.reject(i)
        );
      }
    );
  };
});
var Ja = E(($A, kd) => {
  'use strict';
  var xe = Fe();
  kd.exports = function (e, t) {
    t = t || {};
    var n = {},
      i = ['url', 'method', 'data'],
      s = ['headers', 'auth', 'proxy', 'params'],
      o = [
        'baseURL',
        'transformRequest',
        'transformResponse',
        'paramsSerializer',
        'timeout',
        'timeoutMessage',
        'withCredentials',
        'adapter',
        'responseType',
        'xsrfCookieName',
        'xsrfHeaderName',
        'onUploadProgress',
        'onDownloadProgress',
        'decompress',
        'maxContentLength',
        'maxBodyLength',
        'maxRedirects',
        'transport',
        'httpAgent',
        'httpsAgent',
        'cancelToken',
        'socketPath',
        'responseEncoding',
      ],
      a = ['validateStatus'];
    function c(h, d) {
      return xe.isPlainObject(h) && xe.isPlainObject(d)
        ? xe.merge(h, d)
        : xe.isPlainObject(d)
          ? xe.merge({}, d)
          : xe.isArray(d)
            ? d.slice()
            : d;
    }
    function u(h) {
      xe.isUndefined(t[h])
        ? xe.isUndefined(e[h]) || (n[h] = c(void 0, e[h]))
        : (n[h] = c(e[h], t[h]));
    }
    xe.forEach(i, function (d) {
      xe.isUndefined(t[d]) || (n[d] = c(void 0, t[d]));
    }),
      xe.forEach(s, u),
      xe.forEach(o, function (d) {
        xe.isUndefined(t[d])
          ? xe.isUndefined(e[d]) || (n[d] = c(void 0, e[d]))
          : (n[d] = c(void 0, t[d]));
      }),
      xe.forEach(a, function (d) {
        d in t ? (n[d] = c(e[d], t[d])) : d in e && (n[d] = c(void 0, e[d]));
      });
    var l = i.concat(s).concat(o).concat(a),
      f = Object.keys(e)
        .concat(Object.keys(t))
        .filter(function (d) {
          return l.indexOf(d) === -1;
        });
    return xe.forEach(f, u), n;
  };
});
var Md = E((HA, Fd) => {
  'use strict';
  var Pd = Va(),
    Za = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (r, e) {
    Za[r] = function (n) {
      return typeof n === r || 'a' + (e < 1 ? 'n ' : ' ') + r;
    };
  });
  var Ld = {},
    dw = Pd.version.split('.');
  function Ud(r, e) {
    for (var t = e ? e.split('.') : dw, n = r.split('.'), i = 0; i < 3; i++) {
      if (t[i] > n[i]) return !0;
      if (t[i] < n[i]) return !1;
    }
    return !1;
  }
  Za.transitional = function (e, t, n) {
    var i = t && Ud(t);
    function s(o, a) {
      return (
        '[Axios v' + Pd.version + "] Transitional option '" + o + "'" + a + (n ? '. ' + n : '')
      );
    }
    return function (o, a, c) {
      if (e === !1) throw new Error(s(a, ' has been removed in ' + t));
      return (
        i &&
          !Ld[a] &&
          ((Ld[a] = !0),
          console.warn(
            s(a, ' has been deprecated since v' + t + ' and will be removed in the near future')
          )),
        e ? e(o, a, c) : !0
      );
    };
  };
  function pw(r, e, t) {
    if (typeof r != 'object') throw new TypeError('options must be an object');
    for (var n = Object.keys(r), i = n.length; i-- > 0; ) {
      var s = n[i],
        o = e[s];
      if (o) {
        var a = r[s],
          c = a === void 0 || o(a, s, r);
        if (c !== !0) throw new TypeError('option ' + s + ' must be ' + c);
        continue;
      }
      if (t !== !0) throw Error('Unknown option ' + s);
    }
  }
  Fd.exports = { isOlderVersion: Ud, assertOptions: pw, validators: Za };
});
var Hd = E((zA, $d) => {
  'use strict';
  var jd = Fe(),
    mw = rs(),
    qd = Dh(),
    Bd = Dd(),
    ms = Ja(),
    Gd = Md(),
    sn = Gd.validators;
  function ii(r) {
    (this.defaults = r), (this.interceptors = { request: new qd(), response: new qd() });
  }
  ii.prototype.request = function (e) {
    typeof e == 'string' ? ((e = arguments[1] || {}), (e.url = arguments[0])) : (e = e || {}),
      (e = ms(this.defaults, e)),
      e.method
        ? (e.method = e.method.toLowerCase())
        : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = 'get');
    var t = e.transitional;
    t !== void 0 &&
      Gd.assertOptions(
        t,
        {
          silentJSONParsing: sn.transitional(sn.boolean, '1.0.0'),
          forcedJSONParsing: sn.transitional(sn.boolean, '1.0.0'),
          clarifyTimeoutError: sn.transitional(sn.boolean, '1.0.0'),
        },
        !1
      );
    var n = [],
      i = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == 'function' && h.runWhen(e) === !1) ||
        ((i = i && h.synchronous), n.unshift(h.fulfilled, h.rejected));
    });
    var s = [];
    this.interceptors.response.forEach(function (h) {
      s.push(h.fulfilled, h.rejected);
    });
    var o;
    if (!i) {
      var a = [Bd, void 0];
      for (Array.prototype.unshift.apply(a, n), a.concat(s), o = Promise.resolve(e); a.length; )
        o = o.then(a.shift(), a.shift());
      return o;
    }
    for (var c = e; n.length; ) {
      var u = n.shift(),
        l = n.shift();
      try {
        c = u(c);
      } catch (f) {
        l(f);
        break;
      }
    }
    try {
      o = Bd(c);
    } catch (f) {
      return Promise.reject(f);
    }
    for (; s.length; ) o = o.then(s.shift(), s.shift());
    return o;
  };
  ii.prototype.getUri = function (e) {
    return (e = ms(this.defaults, e)), mw(e.url, e.params, e.paramsSerializer).replace(/^\?/, '');
  };
  jd.forEach(['delete', 'get', 'head', 'options'], function (e) {
    ii.prototype[e] = function (t, n) {
      return this.request(ms(n || {}, { method: e, url: t, data: (n || {}).data }));
    };
  });
  jd.forEach(['post', 'put', 'patch'], function (e) {
    ii.prototype[e] = function (t, n, i) {
      return this.request(ms(i || {}, { method: e, url: t, data: n }));
    };
  });
  $d.exports = ii;
});
var ec = E((VA, zd) => {
  'use strict';
  function Qa(r) {
    this.message = r;
  }
  Qa.prototype.toString = function () {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  Qa.prototype.__CANCEL__ = !0;
  zd.exports = Qa;
});
var Wd = E((WA, Vd) => {
  'use strict';
  var yw = ec();
  function ys(r) {
    if (typeof r != 'function') throw new TypeError('executor must be a function.');
    var e;
    this.promise = new Promise(function (i) {
      e = i;
    });
    var t = this;
    r(function (i) {
      t.reason || ((t.reason = new yw(i)), e(t.reason));
    });
  }
  ys.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  ys.source = function () {
    var e,
      t = new ys(function (i) {
        e = i;
      });
    return { token: t, cancel: e };
  };
  Vd.exports = ys;
});
var Kd = E((XA, Xd) => {
  'use strict';
  Xd.exports = function (e) {
    return function (n) {
      return e.apply(null, n);
    };
  };
});
var Jd = E((KA, Yd) => {
  'use strict';
  Yd.exports = function (e) {
    return typeof e == 'object' && e.isAxiosError === !0;
  };
});
var ep = E((YA, tc) => {
  'use strict';
  var Zd = Fe(),
    Ew = Ta(),
    Es = Hd(),
    gw = Ja(),
    _w = ps();
  function Qd(r) {
    var e = new Es(r),
      t = Ew(Es.prototype.request, e);
    return Zd.extend(t, Es.prototype, e), Zd.extend(t, e), t;
  }
  var lt = Qd(_w);
  lt.Axios = Es;
  lt.create = function (e) {
    return Qd(gw(lt.defaults, e));
  };
  lt.Cancel = ec();
  lt.CancelToken = Wd();
  lt.isCancel = Xa();
  lt.all = function (e) {
    return Promise.all(e);
  };
  lt.spread = Kd();
  lt.isAxiosError = Jd();
  tc.exports = lt;
  tc.exports.default = lt;
});
var rc = E((JA, tp) => {
  'use strict';
  tp.exports = ep();
});
function Oe(r, e = 1e4) {
  let t = (s) => s,
    n = process.env.NX_CLOUD_API || r.url || 'https://cloud.nx.app',
    i = Dt ? Dt : r.accessToken;
  if (!i)
    throw new Error(
      'Unable to authenticate. Either define accessToken in nx.json or set the NX_CLOUD_ACCESS_TOKEN env variable.'
    );
  if (r.customProxyConfigPath) {
    let { nxCloudProxyConfig: s } = require((0, rp.join)(process.cwd(), r.customProxyConfigPath));
    t = s ?? t;
  }
  return bw.create(
    t({
      baseURL: n,
      timeout: Et ? Jn : e,
      headers: { authorization: i, 'Nx-Cloud-Client-Version': r.clientVersion || 'unknown' },
    })
  );
}
async function sc(r, e) {
  let t = new Date(),
    n = await e();
  return A && console.log(`${r}: ${new Date().getTime() - t.getTime()}`), n;
}
async function ce(r, e = Zi) {
  try {
    return await r();
  } catch (t) {
    let n = (t.response && t.response.status) || t.code;
    (n === 401 || n === 403) && (e = 0);
    let i = t.response
      ? t.response.data.message
        ? t.response.data.message
        : t.response.data
      : t.message;
    if (e === 0)
      throw (
        (typeof i != 'string' && (i = t.message),
        A &&
          nc.note({
            title: `Connection to Nx Cloud failed with status code ${n}`,
            bodyLines: [`${n}: ${i}`],
          }),
        new ic('failure', vw(n), t))
      );
    if (n == 429) {
      if (!gs) {
        let s = 1e4 + (Zi + 1 - e) * 6e4 * Math.random();
        nc.note({ title: `Received Code ${n}. ${i} Retrying in ${s}ms.` }), (gs = Ge(s));
      }
      await gs, (gs = null);
    } else {
      let s = 1e3 + (Zi + 1 - e) * 4e3 * Math.random();
      A && nc.note({ title: `Received Code ${n}. Retrying in ${s}ms.` }), await Ge(s);
    }
    return ce(r, e - 1);
  }
}
function vw(r) {
  let e = `${r}:`;
  switch (r) {
    case 403:
      return `${e} Access to resource is not authorized.`;
    case 404:
      return `${e} Cannot find requested resource.`;
    case 500:
      return `${e} Unexpected server error.`;
    case 'ECONNABORTED':
    case 'ETIMEOUT':
      return `${e} Connection timed out, check for other network problems.`;
    case 'ECONNRESET':
      return `${e} The connection to Nx Cloud was closed suddenly.`;
    case 'ECONNREFUSED':
      return `${e} Cannot connect to server. Please check that you have the correct server address and port number.`;
    case 'ENOTFOUND':
      return `${e} DNS error due to invalid host. Are you accessing Nx Cloud from a network proxy?`;
    case 'SELF_SIGNED_CERT_IN_CHAIN':
      return `${e} Found a self-signed cert in certificate chain. Ensure you have verified trust for all certs in your network.`;
    default:
      return `${e} Unable to connect to Nx Cloud.`;
  }
}
var rp,
  nc,
  bw,
  ic,
  gs,
  gt = q(() => {
    'use strict';
    rp = require('path');
    te();
    Qr();
    ({ output: nc } = Y()),
      (bw = rc()),
      (ic = class {
        constructor(e, t, n) {
          this.type = e;
          this.message = t;
          this.axiosException = n;
        }
      });
    gs = null;
  });
function Yt(r) {
  Sw()
    ? (process.stdout.write(`   ${oc(r)}`), _t.addNewline(), _t.addNewline())
    : ww()
      ? (_t.addNewline(), process.stdout.write(`${oc(r)}`), _t.addNewline(), _t.addNewline())
      : (process.stdout.write(`  ${oc(r)}`), _t.addNewline(), _t.addNewline());
}
function Sw() {
  try {
    return ie('nx/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle'), !0;
  } catch {
    try {
      return (
        ie(
          '@nrwl/workspace/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle'
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
}
function oc(r) {
  let e;
  if (typeof _t.dim == 'function') return _t.dim(r);
  try {
    return _t.colors.gray(r);
  } catch {
    return r;
  }
}
function ww() {
  return process.argv.indexOf('run-many') === -1 && process.argv.indexOf('affected') === -1;
}
var _t,
  si = q(() => {
    'use strict';
    Rr();
    ({ output: _t } = Y());
  });
var ac,
  np,
  Ce,
  ne,
  Ie,
  Rw,
  Tw,
  on,
  kt = q(() => {
    'use strict';
    ac = require('perf_hooks');
    gt();
    te();
    si();
    (np = []),
      (Ce = (r) => {
        let e = ac.performance.now();
        return {
          recordMetric: (n) => {
            let i = ac.performance.now();
            (n.durationMs = i - e), (n.entryType = r), np.push(n);
          },
        };
      }),
      (ne = (r) => {
        var e;
        return {
          success:
            ((e = r == null ? void 0 : r.status) == null ? void 0 : e.toString().startsWith('2')) ??
            !1,
          statusCode: (r == null ? void 0 : r.status) ?? -1,
        };
      }),
      (Ie = { success: !1, statusCode: -1 }),
      (Rw = 0.1),
      (Tw = 0.01),
      (on = (r) => {
        let e;
        me() ? (e = Rw) : (e = Tw);
        try {
          return bh || Math.random() < e
            ? (A && Yt('Submitting runner metrics for this run.'),
              Oe(r)
                .post('/nx-cloud/save-metrics', { entries: np })
                .catch((n) => {}))
            : Promise.resolve();
        } catch {}
      });
  });
function _s(r) {
  return r[r.length - 1] === '/' ? r.substr(0, r.length - 1) : r;
}
var cc = q(() => {
  'use strict';
});
var xw,
  Jt,
  bs = q(() => {
    'use strict';
    gt();
    ({ output: xw } = Y()),
      (Jt = class {
        constructor(e) {
          this.apiAxiosInstance = Oe(e);
        }
        async reportError(e) {
          try {
            await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/report-client-error', { message: e })
            );
          } catch (t) {
            xw.warn({
              title: `Unable to record the following error: '${e}'`,
              bodyLines: [t.message],
            });
          }
        }
      });
  });
var cn,
  an,
  Zt,
  vs = q(() => {
    'use strict';
    (cn = require('crypto')),
      (an = require('fs')),
      (Zt = class {
        constructor(e) {
          e && (this.encryptionKey = this.to32bytes(e));
        }
        to32bytes(e) {
          let t = e;
          for (; t.length < 32; ) t += e;
          return Buffer.from(t).slice(0, 32);
        }
        hasEncryption() {
          return !!this.encryptionKey;
        }
        encryptFile(e) {
          let t = (0, cn.randomBytes)(16),
            n = (0, cn.createCipheriv)('aes-256-cbc', this.encryptionKey, t),
            i = (0, an.readFileSync)(e),
            s = n.update(i),
            o = Buffer.concat([t, s, n.final()]);
          (0, an.writeFileSync)(e, o);
        }
        decryptFile(e) {
          let t = (0, an.readFileSync)(e);
          try {
            let n = (0, cn.createDecipheriv)('aes-256-cbc', this.encryptionKey, t.slice(0, 16)),
              i = t.slice(16),
              s = n.update(i),
              o = Buffer.concat([s, n.final()]);
            (0, an.writeFileSync)(e, o);
          } catch {
            throw new Error('Could not decrypt the artifact. Please check your encryption key.');
          }
        }
      });
  });
var un = E((fD, sp) => {
  'use strict';
  var ip = new Map([
    ['C', 'cwd'],
    ['f', 'file'],
    ['z', 'gzip'],
    ['P', 'preservePaths'],
    ['U', 'unlink'],
    ['strip-components', 'strip'],
    ['stripComponents', 'strip'],
    ['keep-newer', 'newer'],
    ['keepNewer', 'newer'],
    ['keep-newer-files', 'newer'],
    ['keepNewerFiles', 'newer'],
    ['k', 'keep'],
    ['keep-existing', 'keep'],
    ['keepExisting', 'keep'],
    ['m', 'noMtime'],
    ['no-mtime', 'noMtime'],
    ['p', 'preserveOwner'],
    ['L', 'follow'],
    ['h', 'follow'],
  ]);
  sp.exports = (r) =>
    r
      ? Object.keys(r)
          .map((e) => [ip.has(e) ? ip.get(e) : e, r[e]])
          .reduce((e, t) => ((e[t[0]] = t[1]), e), Object.create(null))
      : {};
});
var fn = E((hD, pp) => {
  'use strict';
  var op = typeof process == 'object' && process ? process : { stdout: null, stderr: null },
    Ow = require('events'),
    ap = require('stream'),
    cp = require('string_decoder').StringDecoder,
    Lt = Symbol('EOF'),
    Pt = Symbol('maybeEmitEnd'),
    Qt = Symbol('emittedEnd'),
    Ss = Symbol('emittingEnd'),
    oi = Symbol('emittedError'),
    ws = Symbol('closed'),
    up = Symbol('read'),
    Rs = Symbol('flush'),
    lp = Symbol('flushChunk'),
    He = Symbol('encoding'),
    Ut = Symbol('decoder'),
    Ts = Symbol('flowing'),
    ai = Symbol('paused'),
    ln = Symbol('resume'),
    Ee = Symbol('bufferLength'),
    uc = Symbol('bufferPush'),
    lc = Symbol('bufferShift'),
    Ne = Symbol('objectMode'),
    Ae = Symbol('destroyed'),
    fc = Symbol('emitData'),
    fp = Symbol('emitEnd'),
    hc = Symbol('emitEnd2'),
    Ft = Symbol('async'),
    ci = (r) => Promise.resolve().then(r),
    hp = global._MP_NO_ITERATOR_SYMBOLS_ !== '1',
    Cw = (hp && Symbol.asyncIterator) || Symbol('asyncIterator not implemented'),
    Iw = (hp && Symbol.iterator) || Symbol('iterator not implemented'),
    Nw = (r) => r === 'end' || r === 'finish' || r === 'prefinish',
    Aw = (r) =>
      r instanceof ArrayBuffer ||
      (typeof r == 'object' &&
        r.constructor &&
        r.constructor.name === 'ArrayBuffer' &&
        r.byteLength >= 0),
    Dw = (r) => !Buffer.isBuffer(r) && ArrayBuffer.isView(r),
    xs = class {
      constructor(e, t, n) {
        (this.src = e),
          (this.dest = t),
          (this.opts = n),
          (this.ondrain = () => e[ln]()),
          t.on('drain', this.ondrain);
      }
      unpipe() {
        this.dest.removeListener('drain', this.ondrain);
      }
      proxyErrors() {}
      end() {
        this.unpipe(), this.opts.end && this.dest.end();
      }
    },
    dc = class extends xs {
      unpipe() {
        this.src.removeListener('error', this.proxyErrors), super.unpipe();
      }
      constructor(e, t, n) {
        super(e, t, n),
          (this.proxyErrors = (i) => t.emit('error', i)),
          e.on('error', this.proxyErrors);
      }
    };
  pp.exports = class dp extends ap {
    constructor(e) {
      super(),
        (this[Ts] = !1),
        (this[ai] = !1),
        (this.pipes = []),
        (this.buffer = []),
        (this[Ne] = (e && e.objectMode) || !1),
        this[Ne] ? (this[He] = null) : (this[He] = (e && e.encoding) || null),
        this[He] === 'buffer' && (this[He] = null),
        (this[Ft] = (e && !!e.async) || !1),
        (this[Ut] = this[He] ? new cp(this[He]) : null),
        (this[Lt] = !1),
        (this[Qt] = !1),
        (this[Ss] = !1),
        (this[ws] = !1),
        (this[oi] = null),
        (this.writable = !0),
        (this.readable = !0),
        (this[Ee] = 0),
        (this[Ae] = !1);
    }
    get bufferLength() {
      return this[Ee];
    }
    get encoding() {
      return this[He];
    }
    set encoding(e) {
      if (this[Ne]) throw new Error('cannot set encoding in objectMode');
      if (this[He] && e !== this[He] && ((this[Ut] && this[Ut].lastNeed) || this[Ee]))
        throw new Error('cannot change encoding');
      this[He] !== e &&
        ((this[Ut] = e ? new cp(e) : null),
        this.buffer.length && (this.buffer = this.buffer.map((t) => this[Ut].write(t)))),
        (this[He] = e);
    }
    setEncoding(e) {
      this.encoding = e;
    }
    get objectMode() {
      return this[Ne];
    }
    set objectMode(e) {
      this[Ne] = this[Ne] || !!e;
    }
    get async() {
      return this[Ft];
    }
    set async(e) {
      this[Ft] = this[Ft] || !!e;
    }
    write(e, t, n) {
      if (this[Lt]) throw new Error('write after end');
      if (this[Ae])
        return (
          this.emit(
            'error',
            Object.assign(new Error('Cannot call write after a stream was destroyed'), {
              code: 'ERR_STREAM_DESTROYED',
            })
          ),
          !0
        );
      typeof t == 'function' && ((n = t), (t = 'utf8')), t || (t = 'utf8');
      let i = this[Ft] ? ci : (s) => s();
      return (
        !this[Ne] &&
          !Buffer.isBuffer(e) &&
          (Dw(e)
            ? (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength))
            : Aw(e)
              ? (e = Buffer.from(e))
              : typeof e != 'string' && (this.objectMode = !0)),
        this[Ne]
          ? (this.flowing && this[Ee] !== 0 && this[Rs](!0),
            this.flowing ? this.emit('data', e) : this[uc](e),
            this[Ee] !== 0 && this.emit('readable'),
            n && i(n),
            this.flowing)
          : e.length
            ? (typeof e == 'string' &&
                !(t === this[He] && !this[Ut].lastNeed) &&
                (e = Buffer.from(e, t)),
              Buffer.isBuffer(e) && this[He] && (e = this[Ut].write(e)),
              this.flowing && this[Ee] !== 0 && this[Rs](!0),
              this.flowing ? this.emit('data', e) : this[uc](e),
              this[Ee] !== 0 && this.emit('readable'),
              n && i(n),
              this.flowing)
            : (this[Ee] !== 0 && this.emit('readable'), n && i(n), this.flowing)
      );
    }
    read(e) {
      if (this[Ae]) return null;
      if (this[Ee] === 0 || e === 0 || e > this[Ee]) return this[Pt](), null;
      this[Ne] && (e = null),
        this.buffer.length > 1 &&
          !this[Ne] &&
          (this.encoding
            ? (this.buffer = [this.buffer.join('')])
            : (this.buffer = [Buffer.concat(this.buffer, this[Ee])]));
      let t = this[up](e || null, this.buffer[0]);
      return this[Pt](), t;
    }
    [up](e, t) {
      return (
        e === t.length || e === null
          ? this[lc]()
          : ((this.buffer[0] = t.slice(e)), (t = t.slice(0, e)), (this[Ee] -= e)),
        this.emit('data', t),
        !this.buffer.length && !this[Lt] && this.emit('drain'),
        t
      );
    }
    end(e, t, n) {
      return (
        typeof e == 'function' && ((n = e), (e = null)),
        typeof t == 'function' && ((n = t), (t = 'utf8')),
        e && this.write(e, t),
        n && this.once('end', n),
        (this[Lt] = !0),
        (this.writable = !1),
        (this.flowing || !this[ai]) && this[Pt](),
        this
      );
    }
    [ln]() {
      this[Ae] ||
        ((this[ai] = !1),
        (this[Ts] = !0),
        this.emit('resume'),
        this.buffer.length ? this[Rs]() : this[Lt] ? this[Pt]() : this.emit('drain'));
    }
    resume() {
      return this[ln]();
    }
    pause() {
      (this[Ts] = !1), (this[ai] = !0);
    }
    get destroyed() {
      return this[Ae];
    }
    get flowing() {
      return this[Ts];
    }
    get paused() {
      return this[ai];
    }
    [uc](e) {
      this[Ne] ? (this[Ee] += 1) : (this[Ee] += e.length), this.buffer.push(e);
    }
    [lc]() {
      return (
        this.buffer.length && (this[Ne] ? (this[Ee] -= 1) : (this[Ee] -= this.buffer[0].length)),
        this.buffer.shift()
      );
    }
    [Rs](e) {
      do;
      while (this[lp](this[lc]()));
      !e && !this.buffer.length && !this[Lt] && this.emit('drain');
    }
    [lp](e) {
      return e ? (this.emit('data', e), this.flowing) : !1;
    }
    pipe(e, t) {
      if (this[Ae]) return;
      let n = this[Qt];
      return (
        (t = t || {}),
        e === op.stdout || e === op.stderr ? (t.end = !1) : (t.end = t.end !== !1),
        (t.proxyErrors = !!t.proxyErrors),
        n
          ? t.end && e.end()
          : (this.pipes.push(t.proxyErrors ? new dc(this, e, t) : new xs(this, e, t)),
            this[Ft] ? ci(() => this[ln]()) : this[ln]()),
        e
      );
    }
    unpipe(e) {
      let t = this.pipes.find((n) => n.dest === e);
      t && (this.pipes.splice(this.pipes.indexOf(t), 1), t.unpipe());
    }
    addListener(e, t) {
      return this.on(e, t);
    }
    on(e, t) {
      let n = super.on(e, t);
      return (
        e === 'data' && !this.pipes.length && !this.flowing
          ? this[ln]()
          : e === 'readable' && this[Ee] !== 0
            ? super.emit('readable')
            : Nw(e) && this[Qt]
              ? (super.emit(e), this.removeAllListeners(e))
              : e === 'error' &&
                this[oi] &&
                (this[Ft] ? ci(() => t.call(this, this[oi])) : t.call(this, this[oi])),
        n
      );
    }
    get emittedEnd() {
      return this[Qt];
    }
    [Pt]() {
      !this[Ss] &&
        !this[Qt] &&
        !this[Ae] &&
        this.buffer.length === 0 &&
        this[Lt] &&
        ((this[Ss] = !0),
        this.emit('end'),
        this.emit('prefinish'),
        this.emit('finish'),
        this[ws] && this.emit('close'),
        (this[Ss] = !1));
    }
    emit(e, t, ...n) {
      if (e !== 'error' && e !== 'close' && e !== Ae && this[Ae]) return;
      if (e === 'data') return t ? (this[Ft] ? ci(() => this[fc](t)) : this[fc](t)) : !1;
      if (e === 'end') return this[fp]();
      if (e === 'close') {
        if (((this[ws] = !0), !this[Qt] && !this[Ae])) return;
        let s = super.emit('close');
        return this.removeAllListeners('close'), s;
      } else if (e === 'error') {
        this[oi] = t;
        let s = super.emit('error', t);
        return this[Pt](), s;
      } else if (e === 'resume') {
        let s = super.emit('resume');
        return this[Pt](), s;
      } else if (e === 'finish' || e === 'prefinish') {
        let s = super.emit(e);
        return this.removeAllListeners(e), s;
      }
      let i = super.emit(e, t, ...n);
      return this[Pt](), i;
    }
    [fc](e) {
      for (let n of this.pipes) n.dest.write(e) === !1 && this.pause();
      let t = super.emit('data', e);
      return this[Pt](), t;
    }
    [fp]() {
      this[Qt] ||
        ((this[Qt] = !0), (this.readable = !1), this[Ft] ? ci(() => this[hc]()) : this[hc]());
    }
    [hc]() {
      if (this[Ut]) {
        let t = this[Ut].end();
        if (t) {
          for (let n of this.pipes) n.dest.write(t);
          super.emit('data', t);
        }
      }
      for (let t of this.pipes) t.end();
      let e = super.emit('end');
      return this.removeAllListeners('end'), e;
    }
    collect() {
      let e = [];
      this[Ne] || (e.dataLength = 0);
      let t = this.promise();
      return (
        this.on('data', (n) => {
          e.push(n), this[Ne] || (e.dataLength += n.length);
        }),
        t.then(() => e)
      );
    }
    concat() {
      return this[Ne]
        ? Promise.reject(new Error('cannot concat in objectMode'))
        : this.collect().then((e) =>
            this[Ne]
              ? Promise.reject(new Error('cannot concat in objectMode'))
              : this[He]
                ? e.join('')
                : Buffer.concat(e, e.dataLength)
          );
    }
    promise() {
      return new Promise((e, t) => {
        this.on(Ae, () => t(new Error('stream destroyed'))),
          this.on('error', (n) => t(n)),
          this.on('end', () => e());
      });
    }
    [Cw]() {
      return {
        next: () => {
          let t = this.read();
          if (t !== null) return Promise.resolve({ done: !1, value: t });
          if (this[Lt]) return Promise.resolve({ done: !0 });
          let n = null,
            i = null,
            s = (u) => {
              this.removeListener('data', o), this.removeListener('end', a), i(u);
            },
            o = (u) => {
              this.removeListener('error', s),
                this.removeListener('end', a),
                this.pause(),
                n({ value: u, done: !!this[Lt] });
            },
            a = () => {
              this.removeListener('error', s), this.removeListener('data', o), n({ done: !0 });
            },
            c = () => s(new Error('stream destroyed'));
          return new Promise((u, l) => {
            (i = l),
              (n = u),
              this.once(Ae, c),
              this.once('error', s),
              this.once('end', a),
              this.once('data', o);
          });
        },
      };
    }
    [Iw]() {
      return {
        next: () => {
          let t = this.read();
          return { value: t, done: t === null };
        },
      };
    }
    destroy(e) {
      return this[Ae]
        ? (e ? this.emit('error', e) : this.emit(Ae), this)
        : ((this[Ae] = !0),
          (this.buffer.length = 0),
          (this[Ee] = 0),
          typeof this.close == 'function' && !this[ws] && this.close(),
          e ? this.emit('error', e) : this.emit(Ae),
          this);
    }
    static isStream(e) {
      return (
        !!e &&
        (e instanceof dp ||
          e instanceof ap ||
          (e instanceof Ow &&
            (typeof e.pipe == 'function' ||
              (typeof e.write == 'function' && typeof e.end == 'function'))))
      );
    }
  };
});
var yp = E((dD, mp) => {
  'use strict';
  var kw = require('zlib').constants || { ZLIB_VERNUM: 4736 };
  mp.exports = Object.freeze(
    Object.assign(
      Object.create(null),
      {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_VERSION_ERROR: -6,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        DEFLATE: 1,
        INFLATE: 2,
        GZIP: 3,
        GUNZIP: 4,
        DEFLATERAW: 5,
        INFLATERAW: 6,
        UNZIP: 7,
        BROTLI_DECODE: 8,
        BROTLI_ENCODE: 9,
        Z_MIN_WINDOWBITS: 8,
        Z_MAX_WINDOWBITS: 15,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_MIN_CHUNK: 64,
        Z_MAX_CHUNK: 1 / 0,
        Z_DEFAULT_CHUNK: 16384,
        Z_MIN_MEMLEVEL: 1,
        Z_MAX_MEMLEVEL: 9,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_MIN_LEVEL: -1,
        Z_MAX_LEVEL: 9,
        Z_DEFAULT_LEVEL: -1,
        BROTLI_OPERATION_PROCESS: 0,
        BROTLI_OPERATION_FLUSH: 1,
        BROTLI_OPERATION_FINISH: 2,
        BROTLI_OPERATION_EMIT_METADATA: 3,
        BROTLI_MODE_GENERIC: 0,
        BROTLI_MODE_TEXT: 1,
        BROTLI_MODE_FONT: 2,
        BROTLI_DEFAULT_MODE: 0,
        BROTLI_MIN_QUALITY: 0,
        BROTLI_MAX_QUALITY: 11,
        BROTLI_DEFAULT_QUALITY: 11,
        BROTLI_MIN_WINDOW_BITS: 10,
        BROTLI_MAX_WINDOW_BITS: 24,
        BROTLI_LARGE_MAX_WINDOW_BITS: 30,
        BROTLI_DEFAULT_WINDOW: 22,
        BROTLI_MIN_INPUT_BLOCK_BITS: 16,
        BROTLI_MAX_INPUT_BLOCK_BITS: 24,
        BROTLI_PARAM_MODE: 0,
        BROTLI_PARAM_QUALITY: 1,
        BROTLI_PARAM_LGWIN: 2,
        BROTLI_PARAM_LGBLOCK: 3,
        BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
        BROTLI_PARAM_SIZE_HINT: 5,
        BROTLI_PARAM_LARGE_WINDOW: 6,
        BROTLI_PARAM_NPOSTFIX: 7,
        BROTLI_PARAM_NDIRECT: 8,
        BROTLI_DECODER_RESULT_ERROR: 0,
        BROTLI_DECODER_RESULT_SUCCESS: 1,
        BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
        BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
        BROTLI_DECODER_NO_ERROR: 0,
        BROTLI_DECODER_SUCCESS: 1,
        BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
        BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
        BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
        BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
        BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
        BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
        BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
        BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
        BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
        BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
        BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
        BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
        BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
      },
      kw
    )
  );
});
var Ic = E((Je) => {
  'use strict';
  var gc = require('assert'),
    er = require('buffer').Buffer,
    _p = require('zlib'),
    Ar = (Je.constants = yp()),
    Lw = fn(),
    Ep = er.concat,
    Dr = Symbol('_superWrite'),
    dn = class extends Error {
      constructor(e) {
        super('zlib: ' + e.message),
          (this.code = e.code),
          (this.errno = e.errno),
          this.code || (this.code = 'ZLIB_ERROR'),
          (this.message = 'zlib: ' + e.message),
          Error.captureStackTrace(this, this.constructor);
      }
      get name() {
        return 'ZlibError';
      }
    },
    Pw = Symbol('opts'),
    ui = Symbol('flushFlag'),
    gp = Symbol('finishFlushFlag'),
    Cc = Symbol('fullFlushFlag'),
    se = Symbol('handle'),
    Os = Symbol('onError'),
    hn = Symbol('sawError'),
    pc = Symbol('level'),
    mc = Symbol('strategy'),
    yc = Symbol('ended'),
    pD = Symbol('_defaultFullFlush'),
    Cs = class extends Lw {
      constructor(e, t) {
        if (!e || typeof e != 'object')
          throw new TypeError('invalid options for ZlibBase constructor');
        super(e),
          (this[hn] = !1),
          (this[yc] = !1),
          (this[Pw] = e),
          (this[ui] = e.flush),
          (this[gp] = e.finishFlush);
        try {
          this[se] = new _p[t](e);
        } catch (n) {
          throw new dn(n);
        }
        (this[Os] = (n) => {
          this[hn] || ((this[hn] = !0), this.close(), this.emit('error', n));
        }),
          this[se].on('error', (n) => this[Os](new dn(n))),
          this.once('end', () => this.close);
      }
      close() {
        this[se] && (this[se].close(), (this[se] = null), this.emit('close'));
      }
      reset() {
        if (!this[hn]) return gc(this[se], 'zlib binding closed'), this[se].reset();
      }
      flush(e) {
        this.ended ||
          (typeof e != 'number' && (e = this[Cc]),
          this.write(Object.assign(er.alloc(0), { [ui]: e })));
      }
      end(e, t, n) {
        return (
          e && this.write(e, t), this.flush(this[gp]), (this[yc] = !0), super.end(null, null, n)
        );
      }
      get ended() {
        return this[yc];
      }
      write(e, t, n) {
        if (
          (typeof t == 'function' && ((n = t), (t = 'utf8')),
          typeof e == 'string' && (e = er.from(e, t)),
          this[hn])
        )
          return;
        gc(this[se], 'zlib binding closed');
        let i = this[se]._handle,
          s = i.close;
        i.close = () => {};
        let o = this[se].close;
        (this[se].close = () => {}), (er.concat = (u) => u);
        let a;
        try {
          let u = typeof e[ui] == 'number' ? e[ui] : this[ui];
          (a = this[se]._processChunk(e, u)), (er.concat = Ep);
        } catch (u) {
          (er.concat = Ep), this[Os](new dn(u));
        } finally {
          this[se] &&
            ((this[se]._handle = i),
            (i.close = s),
            (this[se].close = o),
            this[se].removeAllListeners('error'));
        }
        this[se] && this[se].on('error', (u) => this[Os](new dn(u)));
        let c;
        if (a)
          if (Array.isArray(a) && a.length > 0) {
            c = this[Dr](er.from(a[0]));
            for (let u = 1; u < a.length; u++) c = this[Dr](a[u]);
          } else c = this[Dr](er.from(a));
        return n && n(), c;
      }
      [Dr](e) {
        return super.write(e);
      }
    },
    Mt = class extends Cs {
      constructor(e, t) {
        (e = e || {}),
          (e.flush = e.flush || Ar.Z_NO_FLUSH),
          (e.finishFlush = e.finishFlush || Ar.Z_FINISH),
          super(e, t),
          (this[Cc] = Ar.Z_FULL_FLUSH),
          (this[pc] = e.level),
          (this[mc] = e.strategy);
      }
      params(e, t) {
        if (!this[hn]) {
          if (!this[se]) throw new Error('cannot switch params when binding is closed');
          if (!this[se].params) throw new Error('not supported in this implementation');
          if (this[pc] !== e || this[mc] !== t) {
            this.flush(Ar.Z_SYNC_FLUSH), gc(this[se], 'zlib binding closed');
            let n = this[se].flush;
            this[se].flush = (i, s) => {
              this.flush(i), s();
            };
            try {
              this[se].params(e, t);
            } finally {
              this[se].flush = n;
            }
            this[se] && ((this[pc] = e), (this[mc] = t));
          }
        }
      }
    },
    _c = class extends Mt {
      constructor(e) {
        super(e, 'Deflate');
      }
    },
    bc = class extends Mt {
      constructor(e) {
        super(e, 'Inflate');
      }
    },
    Ec = Symbol('_portable'),
    vc = class extends Mt {
      constructor(e) {
        super(e, 'Gzip'), (this[Ec] = e && !!e.portable);
      }
      [Dr](e) {
        return this[Ec] ? ((this[Ec] = !1), (e[9] = 255), super[Dr](e)) : super[Dr](e);
      }
    },
    Sc = class extends Mt {
      constructor(e) {
        super(e, 'Gunzip');
      }
    },
    wc = class extends Mt {
      constructor(e) {
        super(e, 'DeflateRaw');
      }
    },
    Rc = class extends Mt {
      constructor(e) {
        super(e, 'InflateRaw');
      }
    },
    Tc = class extends Mt {
      constructor(e) {
        super(e, 'Unzip');
      }
    },
    Is = class extends Cs {
      constructor(e, t) {
        (e = e || {}),
          (e.flush = e.flush || Ar.BROTLI_OPERATION_PROCESS),
          (e.finishFlush = e.finishFlush || Ar.BROTLI_OPERATION_FINISH),
          super(e, t),
          (this[Cc] = Ar.BROTLI_OPERATION_FLUSH);
      }
    },
    xc = class extends Is {
      constructor(e) {
        super(e, 'BrotliCompress');
      }
    },
    Oc = class extends Is {
      constructor(e) {
        super(e, 'BrotliDecompress');
      }
    };
  Je.Deflate = _c;
  Je.Inflate = bc;
  Je.Gzip = vc;
  Je.Gunzip = Sc;
  Je.DeflateRaw = wc;
  Je.InflateRaw = Rc;
  Je.Unzip = Tc;
  typeof _p.BrotliCompress == 'function'
    ? ((Je.BrotliCompress = xc), (Je.BrotliDecompress = Oc))
    : (Je.BrotliCompress = Je.BrotliDecompress =
        class {
          constructor() {
            throw new Error('Brotli is not supported in this version of Node.js');
          }
        });
});
var pn = E((ED, bp) => {
  'use strict';
  var Uw = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
  bp.exports = Uw !== 'win32' ? (r) => r : (r) => r && r.replace(/\\/g, '/');
});
var Ns = E((_D, vp) => {
  'use strict';
  var Fw = fn(),
    Nc = pn(),
    Ac = Symbol('slurp');
  vp.exports = class extends Fw {
    constructor(e, t, n) {
      switch (
        (super(),
        this.pause(),
        (this.extended = t),
        (this.globalExtended = n),
        (this.header = e),
        (this.startBlockSize = 512 * Math.ceil(e.size / 512)),
        (this.blockRemain = this.startBlockSize),
        (this.remain = e.size),
        (this.type = e.type),
        (this.meta = !1),
        (this.ignore = !1),
        this.type)
      ) {
        case 'File':
        case 'OldFile':
        case 'Link':
        case 'SymbolicLink':
        case 'CharacterDevice':
        case 'BlockDevice':
        case 'Directory':
        case 'FIFO':
        case 'ContiguousFile':
        case 'GNUDumpDir':
          break;
        case 'NextFileHasLongLinkpath':
        case 'NextFileHasLongPath':
        case 'OldGnuLongPath':
        case 'GlobalExtendedHeader':
        case 'ExtendedHeader':
        case 'OldExtendedHeader':
          this.meta = !0;
          break;
        default:
          this.ignore = !0;
      }
      (this.path = Nc(e.path)),
        (this.mode = e.mode),
        this.mode && (this.mode = this.mode & 4095),
        (this.uid = e.uid),
        (this.gid = e.gid),
        (this.uname = e.uname),
        (this.gname = e.gname),
        (this.size = e.size),
        (this.mtime = e.mtime),
        (this.atime = e.atime),
        (this.ctime = e.ctime),
        (this.linkpath = Nc(e.linkpath)),
        (this.uname = e.uname),
        (this.gname = e.gname),
        t && this[Ac](t),
        n && this[Ac](n, !0);
    }
    write(e) {
      let t = e.length;
      if (t > this.blockRemain) throw new Error('writing more to entry than is appropriate');
      let n = this.remain,
        i = this.blockRemain;
      return (
        (this.remain = Math.max(0, n - t)),
        (this.blockRemain = Math.max(0, i - t)),
        this.ignore ? !0 : n >= t ? super.write(e) : super.write(e.slice(0, n))
      );
    }
    [Ac](e, t) {
      for (let n in e)
        e[n] !== null &&
          e[n] !== void 0 &&
          !(t && n === 'path') &&
          (this[n] = n === 'path' || n === 'linkpath' ? Nc(e[n]) : e[n]);
    }
  };
});
var Dc = E((As) => {
  'use strict';
  As.name = new Map([
    ['0', 'File'],
    ['', 'OldFile'],
    ['1', 'Link'],
    ['2', 'SymbolicLink'],
    ['3', 'CharacterDevice'],
    ['4', 'BlockDevice'],
    ['5', 'Directory'],
    ['6', 'FIFO'],
    ['7', 'ContiguousFile'],
    ['g', 'GlobalExtendedHeader'],
    ['x', 'ExtendedHeader'],
    ['A', 'SolarisACL'],
    ['D', 'GNUDumpDir'],
    ['I', 'Inode'],
    ['K', 'NextFileHasLongLinkpath'],
    ['L', 'NextFileHasLongPath'],
    ['M', 'ContinuationFile'],
    ['N', 'OldGnuLongPath'],
    ['S', 'SparseFile'],
    ['V', 'TapeVolumeHeader'],
    ['X', 'OldExtendedHeader'],
  ]);
  As.code = new Map(Array.from(As.name).map((r) => [r[1], r[0]]));
});
var Tp = E((vD, Rp) => {
  'use strict';
  var Mw = (r, e) => {
      if (Number.isSafeInteger(r)) r < 0 ? Bw(r, e) : qw(r, e);
      else throw Error('cannot encode number outside of javascript safe integer range');
      return e;
    },
    qw = (r, e) => {
      e[0] = 128;
      for (var t = e.length; t > 1; t--) (e[t - 1] = r & 255), (r = Math.floor(r / 256));
    },
    Bw = (r, e) => {
      e[0] = 255;
      var t = !1;
      r = r * -1;
      for (var n = e.length; n > 1; n--) {
        var i = r & 255;
        (r = Math.floor(r / 256)),
          t ? (e[n - 1] = Sp(i)) : i === 0 ? (e[n - 1] = 0) : ((t = !0), (e[n - 1] = wp(i)));
      }
    },
    jw = (r) => {
      let e = r[0],
        t = e === 128 ? $w(r.slice(1, r.length)) : e === 255 ? Gw(r) : null;
      if (t === null) throw Error('invalid base256 encoding');
      if (!Number.isSafeInteger(t))
        throw Error('parsed number outside of javascript safe integer range');
      return t;
    },
    Gw = (r) => {
      for (var e = r.length, t = 0, n = !1, i = e - 1; i > -1; i--) {
        var s = r[i],
          o;
        n ? (o = Sp(s)) : s === 0 ? (o = s) : ((n = !0), (o = wp(s))),
          o !== 0 && (t -= o * Math.pow(256, e - i - 1));
      }
      return t;
    },
    $w = (r) => {
      for (var e = r.length, t = 0, n = e - 1; n > -1; n--) {
        var i = r[n];
        i !== 0 && (t += i * Math.pow(256, e - n - 1));
      }
      return t;
    },
    Sp = (r) => (255 ^ r) & 255,
    wp = (r) => ((255 ^ r) + 1) & 255;
  Rp.exports = { encode: Mw, parse: jw };
});
var yn = E((SD, Op) => {
  'use strict';
  var kc = Dc(),
    mn = require('path').posix,
    xp = Tp(),
    Lc = Symbol('slurp'),
    Ze = Symbol('type'),
    Fc = class {
      constructor(e, t, n, i) {
        (this.cksumValid = !1),
          (this.needPax = !1),
          (this.nullBlock = !1),
          (this.block = null),
          (this.path = null),
          (this.mode = null),
          (this.uid = null),
          (this.gid = null),
          (this.size = null),
          (this.mtime = null),
          (this.cksum = null),
          (this[Ze] = '0'),
          (this.linkpath = null),
          (this.uname = null),
          (this.gname = null),
          (this.devmaj = 0),
          (this.devmin = 0),
          (this.atime = null),
          (this.ctime = null),
          Buffer.isBuffer(e) ? this.decode(e, t || 0, n, i) : e && this.set(e);
      }
      decode(e, t, n, i) {
        if ((t || (t = 0), !e || !(e.length >= t + 512)))
          throw new Error('need 512 bytes for header');
        if (
          ((this.path = kr(e, t, 100)),
          (this.mode = tr(e, t + 100, 8)),
          (this.uid = tr(e, t + 108, 8)),
          (this.gid = tr(e, t + 116, 8)),
          (this.size = tr(e, t + 124, 12)),
          (this.mtime = Pc(e, t + 136, 12)),
          (this.cksum = tr(e, t + 148, 12)),
          this[Lc](n),
          this[Lc](i, !0),
          (this[Ze] = kr(e, t + 156, 1)),
          this[Ze] === '' && (this[Ze] = '0'),
          this[Ze] === '0' && this.path.substr(-1) === '/' && (this[Ze] = '5'),
          this[Ze] === '5' && (this.size = 0),
          (this.linkpath = kr(e, t + 157, 100)),
          e.slice(t + 257, t + 265).toString() === 'ustar\x0000')
        )
          if (
            ((this.uname = kr(e, t + 265, 32)),
            (this.gname = kr(e, t + 297, 32)),
            (this.devmaj = tr(e, t + 329, 8)),
            (this.devmin = tr(e, t + 337, 8)),
            e[t + 475] !== 0)
          ) {
            let o = kr(e, t + 345, 155);
            this.path = o + '/' + this.path;
          } else {
            let o = kr(e, t + 345, 130);
            o && (this.path = o + '/' + this.path),
              (this.atime = Pc(e, t + 476, 12)),
              (this.ctime = Pc(e, t + 488, 12));
          }
        let s = 8 * 32;
        for (let o = t; o < t + 148; o++) s += e[o];
        for (let o = t + 156; o < t + 512; o++) s += e[o];
        (this.cksumValid = s === this.cksum),
          this.cksum === null && s === 8 * 32 && (this.nullBlock = !0);
      }
      [Lc](e, t) {
        for (let n in e)
          e[n] !== null && e[n] !== void 0 && !(t && n === 'path') && (this[n] = e[n]);
      }
      encode(e, t) {
        if (
          (e || ((e = this.block = Buffer.alloc(512)), (t = 0)),
          t || (t = 0),
          !(e.length >= t + 512))
        )
          throw new Error('need 512 bytes for header');
        let n = this.ctime || this.atime ? 130 : 155,
          i = Hw(this.path || '', n),
          s = i[0],
          o = i[1];
        (this.needPax = i[2]),
          (this.needPax = Lr(e, t, 100, s) || this.needPax),
          (this.needPax = rr(e, t + 100, 8, this.mode) || this.needPax),
          (this.needPax = rr(e, t + 108, 8, this.uid) || this.needPax),
          (this.needPax = rr(e, t + 116, 8, this.gid) || this.needPax),
          (this.needPax = rr(e, t + 124, 12, this.size) || this.needPax),
          (this.needPax = Uc(e, t + 136, 12, this.mtime) || this.needPax),
          (e[t + 156] = this[Ze].charCodeAt(0)),
          (this.needPax = Lr(e, t + 157, 100, this.linkpath) || this.needPax),
          e.write('ustar\x0000', t + 257, 8),
          (this.needPax = Lr(e, t + 265, 32, this.uname) || this.needPax),
          (this.needPax = Lr(e, t + 297, 32, this.gname) || this.needPax),
          (this.needPax = rr(e, t + 329, 8, this.devmaj) || this.needPax),
          (this.needPax = rr(e, t + 337, 8, this.devmin) || this.needPax),
          (this.needPax = Lr(e, t + 345, n, o) || this.needPax),
          e[t + 475] !== 0
            ? (this.needPax = Lr(e, t + 345, 155, o) || this.needPax)
            : ((this.needPax = Lr(e, t + 345, 130, o) || this.needPax),
              (this.needPax = Uc(e, t + 476, 12, this.atime) || this.needPax),
              (this.needPax = Uc(e, t + 488, 12, this.ctime) || this.needPax));
        let a = 8 * 32;
        for (let c = t; c < t + 148; c++) a += e[c];
        for (let c = t + 156; c < t + 512; c++) a += e[c];
        return (
          (this.cksum = a), rr(e, t + 148, 8, this.cksum), (this.cksumValid = !0), this.needPax
        );
      }
      set(e) {
        for (let t in e) e[t] !== null && e[t] !== void 0 && (this[t] = e[t]);
      }
      get type() {
        return kc.name.get(this[Ze]) || this[Ze];
      }
      get typeKey() {
        return this[Ze];
      }
      set type(e) {
        kc.code.has(e) ? (this[Ze] = kc.code.get(e)) : (this[Ze] = e);
      }
    },
    Hw = (r, e) => {
      let n = r,
        i = '',
        s,
        o = mn.parse(r).root || '.';
      if (Buffer.byteLength(n) < 100) s = [n, i, !1];
      else {
        (i = mn.dirname(n)), (n = mn.basename(n));
        do
          Buffer.byteLength(n) <= 100 && Buffer.byteLength(i) <= e
            ? (s = [n, i, !1])
            : Buffer.byteLength(n) > 100 && Buffer.byteLength(i) <= e
              ? (s = [n.substr(0, 99), i, !0])
              : ((n = mn.join(mn.basename(i), n)), (i = mn.dirname(i)));
        while (i !== o && !s);
        s || (s = [r.substr(0, 99), '', !0]);
      }
      return s;
    },
    kr = (r, e, t) =>
      r
        .slice(e, e + t)
        .toString('utf8')
        .replace(/\0.*/, ''),
    Pc = (r, e, t) => zw(tr(r, e, t)),
    zw = (r) => (r === null ? null : new Date(r * 1e3)),
    tr = (r, e, t) => (r[e] & 128 ? xp.parse(r.slice(e, e + t)) : Ww(r, e, t)),
    Vw = (r) => (isNaN(r) ? null : r),
    Ww = (r, e, t) =>
      Vw(
        parseInt(
          r
            .slice(e, e + t)
            .toString('utf8')
            .replace(/\0.*$/, '')
            .trim(),
          8
        )
      ),
    Xw = { 12: 8589934591, 8: 2097151 },
    rr = (r, e, t, n) =>
      n === null
        ? !1
        : n > Xw[t] || n < 0
          ? (xp.encode(n, r.slice(e, e + t)), !0)
          : (Kw(r, e, t, n), !1),
    Kw = (r, e, t, n) => r.write(Yw(n, t), e, t, 'ascii'),
    Yw = (r, e) => Jw(Math.floor(r).toString(8), e),
    Jw = (r, e) =>
      (r.length === e - 1 ? r : new Array(e - r.length - 1).join('0') + r + ' ') + '\0',
    Uc = (r, e, t, n) => (n === null ? !1 : rr(r, e, t, n.getTime() / 1e3)),
    Zw = new Array(156).join('\0'),
    Lr = (r, e, t, n) =>
      n === null
        ? !1
        : (r.write(n + Zw, e, t, 'utf8'), n.length !== Buffer.byteLength(n) || n.length > t);
  Op.exports = Fc;
});
var Ds = E((wD, Cp) => {
  'use strict';
  var Qw = yn(),
    eR = require('path'),
    li = class {
      constructor(e, t) {
        (this.atime = e.atime || null),
          (this.charset = e.charset || null),
          (this.comment = e.comment || null),
          (this.ctime = e.ctime || null),
          (this.gid = e.gid || null),
          (this.gname = e.gname || null),
          (this.linkpath = e.linkpath || null),
          (this.mtime = e.mtime || null),
          (this.path = e.path || null),
          (this.size = e.size || null),
          (this.uid = e.uid || null),
          (this.uname = e.uname || null),
          (this.dev = e.dev || null),
          (this.ino = e.ino || null),
          (this.nlink = e.nlink || null),
          (this.global = t || !1);
      }
      encode() {
        let e = this.encodeBody();
        if (e === '') return null;
        let t = Buffer.byteLength(e),
          n = 512 * Math.ceil(1 + t / 512),
          i = Buffer.allocUnsafe(n);
        for (let s = 0; s < 512; s++) i[s] = 0;
        new Qw({
          path: ('PaxHeader/' + eR.basename(this.path)).slice(0, 99),
          mode: this.mode || 420,
          uid: this.uid || null,
          gid: this.gid || null,
          size: t,
          mtime: this.mtime || null,
          type: this.global ? 'GlobalExtendedHeader' : 'ExtendedHeader',
          linkpath: '',
          uname: this.uname || '',
          gname: this.gname || '',
          devmaj: 0,
          devmin: 0,
          atime: this.atime || null,
          ctime: this.ctime || null,
        }).encode(i),
          i.write(e, 512, t, 'utf8');
        for (let s = t + 512; s < i.length; s++) i[s] = 0;
        return i;
      }
      encodeBody() {
        return (
          this.encodeField('path') +
          this.encodeField('ctime') +
          this.encodeField('atime') +
          this.encodeField('dev') +
          this.encodeField('ino') +
          this.encodeField('nlink') +
          this.encodeField('charset') +
          this.encodeField('comment') +
          this.encodeField('gid') +
          this.encodeField('gname') +
          this.encodeField('linkpath') +
          this.encodeField('mtime') +
          this.encodeField('size') +
          this.encodeField('uid') +
          this.encodeField('uname')
        );
      }
      encodeField(e) {
        if (this[e] === null || this[e] === void 0) return '';
        let t = this[e] instanceof Date ? this[e].getTime() / 1e3 : this[e],
          n =
            ' ' +
            (e === 'dev' || e === 'ino' || e === 'nlink' ? 'SCHILY.' : '') +
            e +
            '=' +
            t +
            `
`,
          i = Buffer.byteLength(n),
          s = Math.floor(Math.log(i) / Math.log(10)) + 1;
        return i + s >= Math.pow(10, s) && (s += 1), s + i + n;
      }
    };
  li.parse = (r, e, t) => new li(tR(rR(r), e), t);
  var tR = (r, e) => (e ? Object.keys(r).reduce((t, n) => ((t[n] = r[n]), t), e) : r),
    rR = (r) =>
      r
        .replace(/\n$/, '')
        .split(
          `
`
        )
        .reduce(nR, Object.create(null)),
    nR = (r, e) => {
      let t = parseInt(e, 10);
      if (t !== Buffer.byteLength(e) + 1) return r;
      e = e.substr((t + ' ').length);
      let n = e.split('='),
        i = n.shift().replace(/^SCHILY\.(dev|ino|nlink)/, '$1');
      if (!i) return r;
      let s = n.join('=');
      return (
        (r[i] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(i)
          ? new Date(s * 1e3)
          : /^[0-9]+$/.test(s)
            ? +s
            : s),
        r
      );
    };
  Cp.exports = li;
});
var En = E((RD, Ip) => {
  'use strict';
  Ip.exports = (r) => {
    let e = r.length - 1,
      t = -1;
    for (; e > -1 && r.charAt(e) === '/'; ) (t = e), e--;
    return t === -1 ? r : r.slice(0, t);
  };
});
var ks = E((TD, Np) => {
  'use strict';
  Np.exports = (r) =>
    class extends r {
      warn(e, t, n = {}) {
        this.file && (n.file = this.file),
          this.cwd && (n.cwd = this.cwd),
          (n.code = (t instanceof Error && t.code) || e),
          (n.tarCode = e),
          !this.strict && n.recoverable !== !1
            ? (t instanceof Error && ((n = Object.assign(t, n)), (t = t.message)),
              this.emit('warn', n.tarCode, t, n))
            : t instanceof Error
              ? this.emit('error', Object.assign(t, n))
              : this.emit('error', Object.assign(new Error(`${e}: ${t}`), n));
      }
    };
});
var qc = E((OD, Ap) => {
  'use strict';
  var Ls = ['|', '<', '>', '?', ':'],
    Mc = Ls.map((r) => String.fromCharCode(61440 + r.charCodeAt(0))),
    iR = new Map(Ls.map((r, e) => [r, Mc[e]])),
    sR = new Map(Mc.map((r, e) => [r, Ls[e]]));
  Ap.exports = {
    encode: (r) => Ls.reduce((e, t) => e.split(t).join(iR.get(t)), r),
    decode: (r) => Mc.reduce((e, t) => e.split(t).join(sR.get(t)), r),
  };
});
var Bc = E((CD, kp) => {
  'use strict';
  var { isAbsolute: oR, parse: Dp } = require('path').win32;
  kp.exports = (r) => {
    let e = '',
      t = Dp(r);
    for (; oR(r) || t.root; ) {
      let n = r.charAt(0) === '/' && r.slice(0, 4) !== '//?/' ? '/' : t.root;
      (r = r.substr(n.length)), (e += n), (t = Dp(r));
    }
    return [e, r];
  };
});
var Pp = E((ID, Lp) => {
  'use strict';
  Lp.exports = (r, e, t) => (
    (r &= 4095),
    t && (r = (r | 384) & -19),
    e && (r & 256 && (r |= 64), r & 32 && (r |= 8), r & 4 && (r |= 1)),
    r
  );
});
var Yc = E((DD, Kp) => {
  'use strict';
  var Gp = fn(),
    $p = Ds(),
    Hp = yn(),
    vt = require('fs'),
    Up = require('path'),
    bt = pn(),
    aR = En(),
    zp = (r, e) => (e ? ((r = bt(r).replace(/^\.(\/|$)/, '')), aR(e) + '/' + r) : bt(r)),
    cR = 16 * 1024 * 1024,
    Fp = Symbol('process'),
    Mp = Symbol('file'),
    qp = Symbol('directory'),
    Gc = Symbol('symlink'),
    Bp = Symbol('hardlink'),
    fi = Symbol('header'),
    Ps = Symbol('read'),
    $c = Symbol('lstat'),
    Us = Symbol('onlstat'),
    Hc = Symbol('onread'),
    zc = Symbol('onreadlink'),
    Vc = Symbol('openfile'),
    Wc = Symbol('onopenfile'),
    nr = Symbol('close'),
    Fs = Symbol('mode'),
    Xc = Symbol('awaitDrain'),
    jc = Symbol('ondrain'),
    St = Symbol('prefix'),
    jp = Symbol('hadError'),
    Vp = ks(),
    uR = qc(),
    Wp = Bc(),
    Xp = Pp(),
    Ms = Vp(
      class extends Gp {
        constructor(e, t) {
          if (((t = t || {}), super(t), typeof e != 'string'))
            throw new TypeError('path is required');
          (this.path = bt(e)),
            (this.portable = !!t.portable),
            (this.myuid = (process.getuid && process.getuid()) || 0),
            (this.myuser = process.env.USER || ''),
            (this.maxReadSize = t.maxReadSize || cR),
            (this.linkCache = t.linkCache || new Map()),
            (this.statCache = t.statCache || new Map()),
            (this.preservePaths = !!t.preservePaths),
            (this.cwd = bt(t.cwd || process.cwd())),
            (this.strict = !!t.strict),
            (this.noPax = !!t.noPax),
            (this.noMtime = !!t.noMtime),
            (this.mtime = t.mtime || null),
            (this.prefix = t.prefix ? bt(t.prefix) : null),
            (this.fd = null),
            (this.blockLen = null),
            (this.blockRemain = null),
            (this.buf = null),
            (this.offset = null),
            (this.length = null),
            (this.pos = null),
            (this.remain = null),
            typeof t.onwarn == 'function' && this.on('warn', t.onwarn);
          let n = !1;
          if (!this.preservePaths) {
            let [i, s] = Wp(this.path);
            i && ((this.path = s), (n = i));
          }
          (this.win32 = !!t.win32 || process.platform === 'win32'),
            this.win32 &&
              ((this.path = uR.decode(this.path.replace(/\\/g, '/'))), (e = e.replace(/\\/g, '/'))),
            (this.absolute = bt(t.absolute || Up.resolve(this.cwd, e))),
            this.path === '' && (this.path = './'),
            n &&
              this.warn('TAR_ENTRY_INFO', `stripping ${n} from absolute path`, {
                entry: this,
                path: n + this.path,
              }),
            this.statCache.has(this.absolute)
              ? this[Us](this.statCache.get(this.absolute))
              : this[$c]();
        }
        emit(e, ...t) {
          return e === 'error' && (this[jp] = !0), super.emit(e, ...t);
        }
        [$c]() {
          vt.lstat(this.absolute, (e, t) => {
            if (e) return this.emit('error', e);
            this[Us](t);
          });
        }
        [Us](e) {
          this.statCache.set(this.absolute, e),
            (this.stat = e),
            e.isFile() || (e.size = 0),
            (this.type = fR(e)),
            this.emit('stat', e),
            this[Fp]();
        }
        [Fp]() {
          switch (this.type) {
            case 'File':
              return this[Mp]();
            case 'Directory':
              return this[qp]();
            case 'SymbolicLink':
              return this[Gc]();
            default:
              return this.end();
          }
        }
        [Fs](e) {
          return Xp(e, this.type === 'Directory', this.portable);
        }
        [St](e) {
          return zp(e, this.prefix);
        }
        [fi]() {
          this.type === 'Directory' && this.portable && (this.noMtime = !0),
            (this.header = new Hp({
              path: this[St](this.path),
              linkpath: this.type === 'Link' ? this[St](this.linkpath) : this.linkpath,
              mode: this[Fs](this.stat.mode),
              uid: this.portable ? null : this.stat.uid,
              gid: this.portable ? null : this.stat.gid,
              size: this.stat.size,
              mtime: this.noMtime ? null : this.mtime || this.stat.mtime,
              type: this.type,
              uname: this.portable ? null : this.stat.uid === this.myuid ? this.myuser : '',
              atime: this.portable ? null : this.stat.atime,
              ctime: this.portable ? null : this.stat.ctime,
            })),
            this.header.encode() &&
              !this.noPax &&
              super.write(
                new $p({
                  atime: this.portable ? null : this.header.atime,
                  ctime: this.portable ? null : this.header.ctime,
                  gid: this.portable ? null : this.header.gid,
                  mtime: this.noMtime ? null : this.mtime || this.header.mtime,
                  path: this[St](this.path),
                  linkpath: this.type === 'Link' ? this[St](this.linkpath) : this.linkpath,
                  size: this.header.size,
                  uid: this.portable ? null : this.header.uid,
                  uname: this.portable ? null : this.header.uname,
                  dev: this.portable ? null : this.stat.dev,
                  ino: this.portable ? null : this.stat.ino,
                  nlink: this.portable ? null : this.stat.nlink,
                }).encode()
              ),
            super.write(this.header.block);
        }
        [qp]() {
          this.path.substr(-1) !== '/' && (this.path += '/'),
            (this.stat.size = 0),
            this[fi](),
            this.end();
        }
        [Gc]() {
          vt.readlink(this.absolute, (e, t) => {
            if (e) return this.emit('error', e);
            this[zc](t);
          });
        }
        [zc](e) {
          (this.linkpath = bt(e)), this[fi](), this.end();
        }
        [Bp](e) {
          (this.type = 'Link'),
            (this.linkpath = bt(Up.relative(this.cwd, e))),
            (this.stat.size = 0),
            this[fi](),
            this.end();
        }
        [Mp]() {
          if (this.stat.nlink > 1) {
            let e = this.stat.dev + ':' + this.stat.ino;
            if (this.linkCache.has(e)) {
              let t = this.linkCache.get(e);
              if (t.indexOf(this.cwd) === 0) return this[Bp](t);
            }
            this.linkCache.set(e, this.absolute);
          }
          if ((this[fi](), this.stat.size === 0)) return this.end();
          this[Vc]();
        }
        [Vc]() {
          vt.open(this.absolute, 'r', (e, t) => {
            if (e) return this.emit('error', e);
            this[Wc](t);
          });
        }
        [Wc](e) {
          if (((this.fd = e), this[jp])) return this[nr]();
          (this.blockLen = 512 * Math.ceil(this.stat.size / 512)),
            (this.blockRemain = this.blockLen);
          let t = Math.min(this.blockLen, this.maxReadSize);
          (this.buf = Buffer.allocUnsafe(t)),
            (this.offset = 0),
            (this.pos = 0),
            (this.remain = this.stat.size),
            (this.length = this.buf.length),
            this[Ps]();
        }
        [Ps]() {
          let { fd: e, buf: t, offset: n, length: i, pos: s } = this;
          vt.read(e, t, n, i, s, (o, a) => {
            if (o) return this[nr](() => this.emit('error', o));
            this[Hc](a);
          });
        }
        [nr](e) {
          vt.close(this.fd, e);
        }
        [Hc](e) {
          if (e <= 0 && this.remain > 0) {
            let i = new Error('encountered unexpected EOF');
            return (
              (i.path = this.absolute),
              (i.syscall = 'read'),
              (i.code = 'EOF'),
              this[nr](() => this.emit('error', i))
            );
          }
          if (e > this.remain) {
            let i = new Error('did not encounter expected EOF');
            return (
              (i.path = this.absolute),
              (i.syscall = 'read'),
              (i.code = 'EOF'),
              this[nr](() => this.emit('error', i))
            );
          }
          if (e === this.remain)
            for (let i = e; i < this.length && e < this.blockRemain; i++)
              (this.buf[i + this.offset] = 0), e++, this.remain++;
          let t =
            this.offset === 0 && e === this.buf.length
              ? this.buf
              : this.buf.slice(this.offset, this.offset + e);
          this.write(t) ? this[jc]() : this[Xc](() => this[jc]());
        }
        [Xc](e) {
          this.once('drain', e);
        }
        write(e) {
          if (this.blockRemain < e.length) {
            let t = new Error('writing more data than expected');
            return (t.path = this.absolute), this.emit('error', t);
          }
          return (
            (this.remain -= e.length),
            (this.blockRemain -= e.length),
            (this.pos += e.length),
            (this.offset += e.length),
            super.write(e)
          );
        }
        [jc]() {
          if (!this.remain)
            return (
              this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
              this[nr]((e) => (e ? this.emit('error', e) : this.end()))
            );
          this.offset >= this.length &&
            ((this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length))),
            (this.offset = 0)),
            (this.length = this.buf.length - this.offset),
            this[Ps]();
        }
      }
    ),
    Kc = class extends Ms {
      [$c]() {
        this[Us](vt.lstatSync(this.absolute));
      }
      [Gc]() {
        this[zc](vt.readlinkSync(this.absolute));
      }
      [Vc]() {
        this[Wc](vt.openSync(this.absolute, 'r'));
      }
      [Ps]() {
        let e = !0;
        try {
          let { fd: t, buf: n, offset: i, length: s, pos: o } = this,
            a = vt.readSync(t, n, i, s, o);
          this[Hc](a), (e = !1);
        } finally {
          if (e)
            try {
              this[nr](() => {});
            } catch {}
        }
      }
      [Xc](e) {
        e();
      }
      [nr](e) {
        vt.closeSync(this.fd), e();
      }
    },
    lR = Vp(
      class extends Gp {
        constructor(e, t) {
          (t = t || {}),
            super(t),
            (this.preservePaths = !!t.preservePaths),
            (this.portable = !!t.portable),
            (this.strict = !!t.strict),
            (this.noPax = !!t.noPax),
            (this.noMtime = !!t.noMtime),
            (this.readEntry = e),
            (this.type = e.type),
            this.type === 'Directory' && this.portable && (this.noMtime = !0),
            (this.prefix = t.prefix || null),
            (this.path = bt(e.path)),
            (this.mode = this[Fs](e.mode)),
            (this.uid = this.portable ? null : e.uid),
            (this.gid = this.portable ? null : e.gid),
            (this.uname = this.portable ? null : e.uname),
            (this.gname = this.portable ? null : e.gname),
            (this.size = e.size),
            (this.mtime = this.noMtime ? null : t.mtime || e.mtime),
            (this.atime = this.portable ? null : e.atime),
            (this.ctime = this.portable ? null : e.ctime),
            (this.linkpath = bt(e.linkpath)),
            typeof t.onwarn == 'function' && this.on('warn', t.onwarn);
          let n = !1;
          if (!this.preservePaths) {
            let [i, s] = Wp(this.path);
            i && ((this.path = s), (n = i));
          }
          (this.remain = e.size),
            (this.blockRemain = e.startBlockSize),
            (this.header = new Hp({
              path: this[St](this.path),
              linkpath: this.type === 'Link' ? this[St](this.linkpath) : this.linkpath,
              mode: this.mode,
              uid: this.portable ? null : this.uid,
              gid: this.portable ? null : this.gid,
              size: this.size,
              mtime: this.noMtime ? null : this.mtime,
              type: this.type,
              uname: this.portable ? null : this.uname,
              atime: this.portable ? null : this.atime,
              ctime: this.portable ? null : this.ctime,
            })),
            n &&
              this.warn('TAR_ENTRY_INFO', `stripping ${n} from absolute path`, {
                entry: this,
                path: n + this.path,
              }),
            this.header.encode() &&
              !this.noPax &&
              super.write(
                new $p({
                  atime: this.portable ? null : this.atime,
                  ctime: this.portable ? null : this.ctime,
                  gid: this.portable ? null : this.gid,
                  mtime: this.noMtime ? null : this.mtime,
                  path: this[St](this.path),
                  linkpath: this.type === 'Link' ? this[St](this.linkpath) : this.linkpath,
                  size: this.size,
                  uid: this.portable ? null : this.uid,
                  uname: this.portable ? null : this.uname,
                  dev: this.portable ? null : this.readEntry.dev,
                  ino: this.portable ? null : this.readEntry.ino,
                  nlink: this.portable ? null : this.readEntry.nlink,
                }).encode()
              ),
            super.write(this.header.block),
            e.pipe(this);
        }
        [St](e) {
          return zp(e, this.prefix);
        }
        [Fs](e) {
          return Xp(e, this.type === 'Directory', this.portable);
        }
        write(e) {
          let t = e.length;
          if (t > this.blockRemain) throw new Error('writing more to entry than is appropriate');
          return (this.blockRemain -= t), super.write(e);
        }
        end() {
          return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), super.end();
        }
      }
    );
  Ms.Sync = Kc;
  Ms.Tar = lR;
  var fR = (r) =>
    r.isFile()
      ? 'File'
      : r.isDirectory()
        ? 'Directory'
        : r.isSymbolicLink()
          ? 'SymbolicLink'
          : 'Unsupported';
  Kp.exports = Ms;
});
var Jp = E((kD, Yp) => {
  'use strict';
  Yp.exports = function (r) {
    r.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next) yield e.value;
    };
  };
});
var Jc = E((LD, Zp) => {
  'use strict';
  Zp.exports = Z;
  Z.Node = Pr;
  Z.create = Z;
  function Z(r) {
    var e = this;
    if (
      (e instanceof Z || (e = new Z()),
      (e.tail = null),
      (e.head = null),
      (e.length = 0),
      r && typeof r.forEach == 'function')
    )
      r.forEach(function (i) {
        e.push(i);
      });
    else if (arguments.length > 0)
      for (var t = 0, n = arguments.length; t < n; t++) e.push(arguments[t]);
    return e;
  }
  Z.prototype.removeNode = function (r) {
    if (r.list !== this) throw new Error('removing node which does not belong to this list');
    var e = r.next,
      t = r.prev;
    return (
      e && (e.prev = t),
      t && (t.next = e),
      r === this.head && (this.head = e),
      r === this.tail && (this.tail = t),
      r.list.length--,
      (r.next = null),
      (r.prev = null),
      (r.list = null),
      e
    );
  };
  Z.prototype.unshiftNode = function (r) {
    if (r !== this.head) {
      r.list && r.list.removeNode(r);
      var e = this.head;
      (r.list = this),
        (r.next = e),
        e && (e.prev = r),
        (this.head = r),
        this.tail || (this.tail = r),
        this.length++;
    }
  };
  Z.prototype.pushNode = function (r) {
    if (r !== this.tail) {
      r.list && r.list.removeNode(r);
      var e = this.tail;
      (r.list = this),
        (r.prev = e),
        e && (e.next = r),
        (this.tail = r),
        this.head || (this.head = r),
        this.length++;
    }
  };
  Z.prototype.push = function () {
    for (var r = 0, e = arguments.length; r < e; r++) dR(this, arguments[r]);
    return this.length;
  };
  Z.prototype.unshift = function () {
    for (var r = 0, e = arguments.length; r < e; r++) pR(this, arguments[r]);
    return this.length;
  };
  Z.prototype.pop = function () {
    if (this.tail) {
      var r = this.tail.value;
      return (
        (this.tail = this.tail.prev),
        this.tail ? (this.tail.next = null) : (this.head = null),
        this.length--,
        r
      );
    }
  };
  Z.prototype.shift = function () {
    if (this.head) {
      var r = this.head.value;
      return (
        (this.head = this.head.next),
        this.head ? (this.head.prev = null) : (this.tail = null),
        this.length--,
        r
      );
    }
  };
  Z.prototype.forEach = function (r, e) {
    e = e || this;
    for (var t = this.head, n = 0; t !== null; n++) r.call(e, t.value, n, this), (t = t.next);
  };
  Z.prototype.forEachReverse = function (r, e) {
    e = e || this;
    for (var t = this.tail, n = this.length - 1; t !== null; n--)
      r.call(e, t.value, n, this), (t = t.prev);
  };
  Z.prototype.get = function (r) {
    for (var e = 0, t = this.head; t !== null && e < r; e++) t = t.next;
    if (e === r && t !== null) return t.value;
  };
  Z.prototype.getReverse = function (r) {
    for (var e = 0, t = this.tail; t !== null && e < r; e++) t = t.prev;
    if (e === r && t !== null) return t.value;
  };
  Z.prototype.map = function (r, e) {
    e = e || this;
    for (var t = new Z(), n = this.head; n !== null; )
      t.push(r.call(e, n.value, this)), (n = n.next);
    return t;
  };
  Z.prototype.mapReverse = function (r, e) {
    e = e || this;
    for (var t = new Z(), n = this.tail; n !== null; )
      t.push(r.call(e, n.value, this)), (n = n.prev);
    return t;
  };
  Z.prototype.reduce = function (r, e) {
    var t,
      n = this.head;
    if (arguments.length > 1) t = e;
    else if (this.head) (n = this.head.next), (t = this.head.value);
    else throw new TypeError('Reduce of empty list with no initial value');
    for (var i = 0; n !== null; i++) (t = r(t, n.value, i)), (n = n.next);
    return t;
  };
  Z.prototype.reduceReverse = function (r, e) {
    var t,
      n = this.tail;
    if (arguments.length > 1) t = e;
    else if (this.tail) (n = this.tail.prev), (t = this.tail.value);
    else throw new TypeError('Reduce of empty list with no initial value');
    for (var i = this.length - 1; n !== null; i--) (t = r(t, n.value, i)), (n = n.prev);
    return t;
  };
  Z.prototype.toArray = function () {
    for (var r = new Array(this.length), e = 0, t = this.head; t !== null; e++)
      (r[e] = t.value), (t = t.next);
    return r;
  };
  Z.prototype.toArrayReverse = function () {
    for (var r = new Array(this.length), e = 0, t = this.tail; t !== null; e++)
      (r[e] = t.value), (t = t.prev);
    return r;
  };
  Z.prototype.slice = function (r, e) {
    (e = e || this.length), e < 0 && (e += this.length), (r = r || 0), r < 0 && (r += this.length);
    var t = new Z();
    if (e < r || e < 0) return t;
    r < 0 && (r = 0), e > this.length && (e = this.length);
    for (var n = 0, i = this.head; i !== null && n < r; n++) i = i.next;
    for (; i !== null && n < e; n++, i = i.next) t.push(i.value);
    return t;
  };
  Z.prototype.sliceReverse = function (r, e) {
    (e = e || this.length), e < 0 && (e += this.length), (r = r || 0), r < 0 && (r += this.length);
    var t = new Z();
    if (e < r || e < 0) return t;
    r < 0 && (r = 0), e > this.length && (e = this.length);
    for (var n = this.length, i = this.tail; i !== null && n > e; n--) i = i.prev;
    for (; i !== null && n > r; n--, i = i.prev) t.push(i.value);
    return t;
  };
  Z.prototype.splice = function (r, e, ...t) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var n = 0, i = this.head; i !== null && n < r; n++) i = i.next;
    for (var s = [], n = 0; i && n < e; n++) s.push(i.value), (i = this.removeNode(i));
    i === null && (i = this.tail), i !== this.head && i !== this.tail && (i = i.prev);
    for (var n = 0; n < t.length; n++) i = hR(this, i, t[n]);
    return s;
  };
  Z.prototype.reverse = function () {
    for (var r = this.head, e = this.tail, t = r; t !== null; t = t.prev) {
      var n = t.prev;
      (t.prev = t.next), (t.next = n);
    }
    return (this.head = e), (this.tail = r), this;
  };
  function hR(r, e, t) {
    var n = e === r.head ? new Pr(t, null, e, r) : new Pr(t, e, e.next, r);
    return n.next === null && (r.tail = n), n.prev === null && (r.head = n), r.length++, n;
  }
  function dR(r, e) {
    (r.tail = new Pr(e, r.tail, null, r)), r.head || (r.head = r.tail), r.length++;
  }
  function pR(r, e) {
    (r.head = new Pr(e, null, r.head, r)), r.tail || (r.tail = r.head), r.length++;
  }
  function Pr(r, e, t, n) {
    if (!(this instanceof Pr)) return new Pr(r, e, t, n);
    (this.list = n),
      (this.value = r),
      e ? ((e.next = this), (this.prev = e)) : (this.prev = null),
      t ? ((t.prev = this), (this.next = t)) : (this.next = null);
  }
  try {
    Jp()(Z);
  } catch {}
});
var Ws = E((UD, sm) => {
  'use strict';
  var zs = class {
      constructor(e, t) {
        (this.path = e || './'),
          (this.absolute = t),
          (this.entry = null),
          (this.stat = null),
          (this.readdir = null),
          (this.pending = !1),
          (this.ignore = !1),
          (this.piped = !1);
      }
    },
    mR = fn(),
    yR = Ic(),
    ER = Ns(),
    ou = Yc(),
    gR = ou.Sync,
    _R = ou.Tar,
    bR = Jc(),
    Qp = Buffer.alloc(1024),
    js = Symbol('onStat'),
    qs = Symbol('ended'),
    wt = Symbol('queue'),
    gn = Symbol('current'),
    Ur = Symbol('process'),
    Bs = Symbol('processing'),
    em = Symbol('processJob'),
    Rt = Symbol('jobs'),
    Zc = Symbol('jobDone'),
    Gs = Symbol('addFSEntry'),
    tm = Symbol('addTarEntry'),
    ru = Symbol('stat'),
    nu = Symbol('readdir'),
    $s = Symbol('onreaddir'),
    Hs = Symbol('pipe'),
    rm = Symbol('entry'),
    Qc = Symbol('entryOpt'),
    iu = Symbol('writeEntryClass'),
    im = Symbol('write'),
    eu = Symbol('ondrain'),
    Vs = require('fs'),
    nm = require('path'),
    vR = ks(),
    tu = pn(),
    au = vR(
      class extends mR {
        constructor(e) {
          super(e),
            (e = e || Object.create(null)),
            (this.opt = e),
            (this.file = e.file || ''),
            (this.cwd = e.cwd || process.cwd()),
            (this.maxReadSize = e.maxReadSize),
            (this.preservePaths = !!e.preservePaths),
            (this.strict = !!e.strict),
            (this.noPax = !!e.noPax),
            (this.prefix = tu(e.prefix || '')),
            (this.linkCache = e.linkCache || new Map()),
            (this.statCache = e.statCache || new Map()),
            (this.readdirCache = e.readdirCache || new Map()),
            (this[iu] = ou),
            typeof e.onwarn == 'function' && this.on('warn', e.onwarn),
            (this.portable = !!e.portable),
            (this.zip = null),
            e.gzip
              ? (typeof e.gzip != 'object' && (e.gzip = {}),
                this.portable && (e.gzip.portable = !0),
                (this.zip = new yR.Gzip(e.gzip)),
                this.zip.on('data', (t) => super.write(t)),
                this.zip.on('end', (t) => super.end()),
                this.zip.on('drain', (t) => this[eu]()),
                this.on('resume', (t) => this.zip.resume()))
              : this.on('drain', this[eu]),
            (this.noDirRecurse = !!e.noDirRecurse),
            (this.follow = !!e.follow),
            (this.noMtime = !!e.noMtime),
            (this.mtime = e.mtime || null),
            (this.filter = typeof e.filter == 'function' ? e.filter : (t) => !0),
            (this[wt] = new bR()),
            (this[Rt] = 0),
            (this.jobs = +e.jobs || 4),
            (this[Bs] = !1),
            (this[qs] = !1);
        }
        [im](e) {
          return super.write(e);
        }
        add(e) {
          return this.write(e), this;
        }
        end(e) {
          return e && this.write(e), (this[qs] = !0), this[Ur](), this;
        }
        write(e) {
          if (this[qs]) throw new Error('write after end');
          return e instanceof ER ? this[tm](e) : this[Gs](e), this.flowing;
        }
        [tm](e) {
          let t = tu(nm.resolve(this.cwd, e.path));
          if (!this.filter(e.path, e)) e.resume();
          else {
            let n = new zs(e.path, t, !1);
            (n.entry = new _R(e, this[Qc](n))),
              n.entry.on('end', (i) => this[Zc](n)),
              (this[Rt] += 1),
              this[wt].push(n);
          }
          this[Ur]();
        }
        [Gs](e) {
          let t = tu(nm.resolve(this.cwd, e));
          this[wt].push(new zs(e, t)), this[Ur]();
        }
        [ru](e) {
          (e.pending = !0), (this[Rt] += 1);
          let t = this.follow ? 'stat' : 'lstat';
          Vs[t](e.absolute, (n, i) => {
            (e.pending = !1), (this[Rt] -= 1), n ? this.emit('error', n) : this[js](e, i);
          });
        }
        [js](e, t) {
          this.statCache.set(e.absolute, t),
            (e.stat = t),
            this.filter(e.path, t) || (e.ignore = !0),
            this[Ur]();
        }
        [nu](e) {
          (e.pending = !0),
            (this[Rt] += 1),
            Vs.readdir(e.absolute, (t, n) => {
              if (((e.pending = !1), (this[Rt] -= 1), t)) return this.emit('error', t);
              this[$s](e, n);
            });
        }
        [$s](e, t) {
          this.readdirCache.set(e.absolute, t), (e.readdir = t), this[Ur]();
        }
        [Ur]() {
          if (!this[Bs]) {
            this[Bs] = !0;
            for (let e = this[wt].head; e !== null && this[Rt] < this.jobs; e = e.next)
              if ((this[em](e.value), e.value.ignore)) {
                let t = e.next;
                this[wt].removeNode(e), (e.next = t);
              }
            (this[Bs] = !1),
              this[qs] &&
                !this[wt].length &&
                this[Rt] === 0 &&
                (this.zip ? this.zip.end(Qp) : (super.write(Qp), super.end()));
          }
        }
        get [gn]() {
          return this[wt] && this[wt].head && this[wt].head.value;
        }
        [Zc](e) {
          this[wt].shift(), (this[Rt] -= 1), this[Ur]();
        }
        [em](e) {
          if (!e.pending) {
            if (e.entry) {
              e === this[gn] && !e.piped && this[Hs](e);
              return;
            }
            if (
              (e.stat ||
                (this.statCache.has(e.absolute)
                  ? this[js](e, this.statCache.get(e.absolute))
                  : this[ru](e)),
              !!e.stat &&
                !e.ignore &&
                !(
                  !this.noDirRecurse &&
                  e.stat.isDirectory() &&
                  !e.readdir &&
                  (this.readdirCache.has(e.absolute)
                    ? this[$s](e, this.readdirCache.get(e.absolute))
                    : this[nu](e),
                  !e.readdir)
                ))
            ) {
              if (((e.entry = this[rm](e)), !e.entry)) {
                e.ignore = !0;
                return;
              }
              e === this[gn] && !e.piped && this[Hs](e);
            }
          }
        }
        [Qc](e) {
          return {
            onwarn: (t, n, i) => this.warn(t, n, i),
            noPax: this.noPax,
            cwd: this.cwd,
            absolute: e.absolute,
            preservePaths: this.preservePaths,
            maxReadSize: this.maxReadSize,
            strict: this.strict,
            portable: this.portable,
            linkCache: this.linkCache,
            statCache: this.statCache,
            noMtime: this.noMtime,
            mtime: this.mtime,
            prefix: this.prefix,
          };
        }
        [rm](e) {
          this[Rt] += 1;
          try {
            return new this[iu](e.path, this[Qc](e))
              .on('end', () => this[Zc](e))
              .on('error', (t) => this.emit('error', t));
          } catch (t) {
            this.emit('error', t);
          }
        }
        [eu]() {
          this[gn] && this[gn].entry && this[gn].entry.resume();
        }
        [Hs](e) {
          (e.piped = !0),
            e.readdir &&
              e.readdir.forEach((i) => {
                let s = e.path,
                  o = s === './' ? '' : s.replace(/\/*$/, '/');
                this[Gs](o + i);
              });
          let t = e.entry,
            n = this.zip;
          n
            ? t.on('data', (i) => {
                n.write(i) || t.pause();
              })
            : t.on('data', (i) => {
                super.write(i) || t.pause();
              });
        }
        pause() {
          return this.zip && this.zip.pause(), super.pause();
        }
      }
    ),
    su = class extends au {
      constructor(e) {
        super(e), (this[iu] = gR);
      }
      pause() {}
      resume() {}
      [ru](e) {
        let t = this.follow ? 'statSync' : 'lstatSync';
        this[js](e, Vs[t](e.absolute));
      }
      [nu](e, t) {
        this[$s](e, Vs.readdirSync(e.absolute));
      }
      [Hs](e) {
        let t = e.entry,
          n = this.zip;
        e.readdir &&
          e.readdir.forEach((i) => {
            let s = e.path,
              o = s === './' ? '' : s.replace(/\/*$/, '/');
            this[Gs](o + i);
          }),
          n
            ? t.on('data', (i) => {
                n.write(i);
              })
            : t.on('data', (i) => {
                super[im](i);
              });
      }
    };
  au.Sync = su;
  sm.exports = au;
});
var xn = E((di) => {
  'use strict';
  var SR = fn(),
    wR = require('events').EventEmitter,
    ze = require('fs'),
    lu = ze.writev;
  if (!lu) {
    let r = process.binding('fs'),
      e = r.FSReqWrap || r.FSReqCallback;
    lu = (t, n, i, s) => {
      let o = (c, u) => s(c, u, n),
        a = new e();
      (a.oncomplete = o), r.writeBuffers(t, n, i, a);
    };
  }
  var Rn = Symbol('_autoClose'),
    ft = Symbol('_close'),
    hi = Symbol('_ended'),
    re = Symbol('_fd'),
    om = Symbol('_finished'),
    sr = Symbol('_flags'),
    cu = Symbol('_flush'),
    fu = Symbol('_handleChunk'),
    hu = Symbol('_makeBuf'),
    Zs = Symbol('_mode'),
    Xs = Symbol('_needDrain'),
    Sn = Symbol('_onerror'),
    Tn = Symbol('_onopen'),
    uu = Symbol('_onread'),
    bn = Symbol('_onwrite'),
    or = Symbol('_open'),
    qt = Symbol('_path'),
    Fr = Symbol('_pos'),
    Tt = Symbol('_queue'),
    vn = Symbol('_read'),
    am = Symbol('_readSize'),
    ir = Symbol('_reading'),
    Ks = Symbol('_remain'),
    cm = Symbol('_size'),
    Ys = Symbol('_write'),
    _n = Symbol('_writing'),
    Js = Symbol('_defaultFlag'),
    wn = Symbol('_errored'),
    Qs = class extends SR {
      constructor(e, t) {
        if (
          ((t = t || {}),
          super(t),
          (this.readable = !0),
          (this.writable = !1),
          typeof e != 'string')
        )
          throw new TypeError('path must be a string');
        (this[wn] = !1),
          (this[re] = typeof t.fd == 'number' ? t.fd : null),
          (this[qt] = e),
          (this[am] = t.readSize || 16 * 1024 * 1024),
          (this[ir] = !1),
          (this[cm] = typeof t.size == 'number' ? t.size : 1 / 0),
          (this[Ks] = this[cm]),
          (this[Rn] = typeof t.autoClose == 'boolean' ? t.autoClose : !0),
          typeof this[re] == 'number' ? this[vn]() : this[or]();
      }
      get fd() {
        return this[re];
      }
      get path() {
        return this[qt];
      }
      write() {
        throw new TypeError('this is a readable stream');
      }
      end() {
        throw new TypeError('this is a readable stream');
      }
      [or]() {
        ze.open(this[qt], 'r', (e, t) => this[Tn](e, t));
      }
      [Tn](e, t) {
        e ? this[Sn](e) : ((this[re] = t), this.emit('open', t), this[vn]());
      }
      [hu]() {
        return Buffer.allocUnsafe(Math.min(this[am], this[Ks]));
      }
      [vn]() {
        if (!this[ir]) {
          this[ir] = !0;
          let e = this[hu]();
          if (e.length === 0) return process.nextTick(() => this[uu](null, 0, e));
          ze.read(this[re], e, 0, e.length, null, (t, n, i) => this[uu](t, n, i));
        }
      }
      [uu](e, t, n) {
        (this[ir] = !1), e ? this[Sn](e) : this[fu](t, n) && this[vn]();
      }
      [ft]() {
        if (this[Rn] && typeof this[re] == 'number') {
          let e = this[re];
          (this[re] = null), ze.close(e, (t) => (t ? this.emit('error', t) : this.emit('close')));
        }
      }
      [Sn](e) {
        (this[ir] = !0), this[ft](), this.emit('error', e);
      }
      [fu](e, t) {
        let n = !1;
        return (
          (this[Ks] -= e),
          e > 0 && (n = super.write(e < t.length ? t.slice(0, e) : t)),
          (e === 0 || this[Ks] <= 0) && ((n = !1), this[ft](), super.end()),
          n
        );
      }
      emit(e, t) {
        switch (e) {
          case 'prefinish':
          case 'finish':
            break;
          case 'drain':
            typeof this[re] == 'number' && this[vn]();
            break;
          case 'error':
            return this[wn] ? void 0 : ((this[wn] = !0), super.emit(e, t));
          default:
            return super.emit(e, t);
        }
      }
    },
    du = class extends Qs {
      [or]() {
        let e = !0;
        try {
          this[Tn](null, ze.openSync(this[qt], 'r')), (e = !1);
        } finally {
          e && this[ft]();
        }
      }
      [vn]() {
        let e = !0;
        try {
          if (!this[ir]) {
            this[ir] = !0;
            do {
              let t = this[hu](),
                n = t.length === 0 ? 0 : ze.readSync(this[re], t, 0, t.length, null);
              if (!this[fu](n, t)) break;
            } while (!0);
            this[ir] = !1;
          }
          e = !1;
        } finally {
          e && this[ft]();
        }
      }
      [ft]() {
        if (this[Rn] && typeof this[re] == 'number') {
          let e = this[re];
          (this[re] = null), ze.closeSync(e), this.emit('close');
        }
      }
    },
    eo = class extends wR {
      constructor(e, t) {
        (t = t || {}),
          super(t),
          (this.readable = !1),
          (this.writable = !0),
          (this[wn] = !1),
          (this[_n] = !1),
          (this[hi] = !1),
          (this[Xs] = !1),
          (this[Tt] = []),
          (this[qt] = e),
          (this[re] = typeof t.fd == 'number' ? t.fd : null),
          (this[Zs] = t.mode === void 0 ? 438 : t.mode),
          (this[Fr] = typeof t.start == 'number' ? t.start : null),
          (this[Rn] = typeof t.autoClose == 'boolean' ? t.autoClose : !0);
        let n = this[Fr] !== null ? 'r+' : 'w';
        (this[Js] = t.flags === void 0),
          (this[sr] = this[Js] ? n : t.flags),
          this[re] === null && this[or]();
      }
      emit(e, t) {
        if (e === 'error') {
          if (this[wn]) return;
          this[wn] = !0;
        }
        return super.emit(e, t);
      }
      get fd() {
        return this[re];
      }
      get path() {
        return this[qt];
      }
      [Sn](e) {
        this[ft](), (this[_n] = !0), this.emit('error', e);
      }
      [or]() {
        ze.open(this[qt], this[sr], this[Zs], (e, t) => this[Tn](e, t));
      }
      [Tn](e, t) {
        this[Js] && this[sr] === 'r+' && e && e.code === 'ENOENT'
          ? ((this[sr] = 'w'), this[or]())
          : e
            ? this[Sn](e)
            : ((this[re] = t), this.emit('open', t), this[cu]());
      }
      end(e, t) {
        return (
          e && this.write(e, t),
          (this[hi] = !0),
          !this[_n] && !this[Tt].length && typeof this[re] == 'number' && this[bn](null, 0),
          this
        );
      }
      write(e, t) {
        return (
          typeof e == 'string' && (e = Buffer.from(e, t)),
          this[hi]
            ? (this.emit('error', new Error('write() after end()')), !1)
            : this[re] === null || this[_n] || this[Tt].length
              ? (this[Tt].push(e), (this[Xs] = !0), !1)
              : ((this[_n] = !0), this[Ys](e), !0)
        );
      }
      [Ys](e) {
        ze.write(this[re], e, 0, e.length, this[Fr], (t, n) => this[bn](t, n));
      }
      [bn](e, t) {
        e
          ? this[Sn](e)
          : (this[Fr] !== null && (this[Fr] += t),
            this[Tt].length
              ? this[cu]()
              : ((this[_n] = !1),
                this[hi] && !this[om]
                  ? ((this[om] = !0), this[ft](), this.emit('finish'))
                  : this[Xs] && ((this[Xs] = !1), this.emit('drain'))));
      }
      [cu]() {
        if (this[Tt].length === 0) this[hi] && this[bn](null, 0);
        else if (this[Tt].length === 1) this[Ys](this[Tt].pop());
        else {
          let e = this[Tt];
          (this[Tt] = []), lu(this[re], e, this[Fr], (t, n) => this[bn](t, n));
        }
      }
      [ft]() {
        if (this[Rn] && typeof this[re] == 'number') {
          let e = this[re];
          (this[re] = null), ze.close(e, (t) => (t ? this.emit('error', t) : this.emit('close')));
        }
      }
    },
    pu = class extends eo {
      [or]() {
        let e;
        if (this[Js] && this[sr] === 'r+')
          try {
            e = ze.openSync(this[qt], this[sr], this[Zs]);
          } catch (t) {
            if (t.code === 'ENOENT') return (this[sr] = 'w'), this[or]();
            throw t;
          }
        else e = ze.openSync(this[qt], this[sr], this[Zs]);
        this[Tn](null, e);
      }
      [ft]() {
        if (this[Rn] && typeof this[re] == 'number') {
          let e = this[re];
          (this[re] = null), ze.closeSync(e), this.emit('close');
        }
      }
      [Ys](e) {
        let t = !0;
        try {
          this[bn](null, ze.writeSync(this[re], e, 0, e.length, this[Fr])), (t = !1);
        } finally {
          if (t)
            try {
              this[ft]();
            } catch {}
        }
      }
    };
  di.ReadStream = Qs;
  di.ReadStreamSync = du;
  di.WriteStream = eo;
  di.WriteStreamSync = pu;
});
var ao = E((qD, mm) => {
  'use strict';
  var RR = ks(),
    TR = yn(),
    xR = require('events'),
    OR = Jc(),
    CR = 1024 * 1024,
    IR = Ns(),
    um = Ds(),
    NR = Ic(),
    mu = Buffer.from([31, 139]),
    nt = Symbol('state'),
    Mr = Symbol('writeEntry'),
    Bt = Symbol('readEntry'),
    yu = Symbol('nextEntry'),
    lm = Symbol('processEntry'),
    it = Symbol('extendedHeader'),
    pi = Symbol('globalExtendedHeader'),
    ar = Symbol('meta'),
    fm = Symbol('emitMeta'),
    ae = Symbol('buffer'),
    jt = Symbol('queue'),
    qr = Symbol('ended'),
    hm = Symbol('emittedEnd'),
    Br = Symbol('emit'),
    Ve = Symbol('unzip'),
    to = Symbol('consumeChunk'),
    ro = Symbol('consumeChunkSub'),
    Eu = Symbol('consumeBody'),
    dm = Symbol('consumeMeta'),
    pm = Symbol('consumeHeader'),
    no = Symbol('consuming'),
    gu = Symbol('bufferConcat'),
    _u = Symbol('maybeEnd'),
    mi = Symbol('writing'),
    cr = Symbol('aborted'),
    io = Symbol('onDone'),
    jr = Symbol('sawValidEntry'),
    so = Symbol('sawNullBlock'),
    oo = Symbol('sawEOF'),
    AR = (r) => !0;
  mm.exports = RR(
    class extends xR {
      constructor(e) {
        (e = e || {}),
          super(e),
          (this.file = e.file || ''),
          (this[jr] = null),
          this.on(io, (t) => {
            (this[nt] === 'begin' || this[jr] === !1) &&
              this.warn('TAR_BAD_ARCHIVE', 'Unrecognized archive format');
          }),
          e.ondone
            ? this.on(io, e.ondone)
            : this.on(io, (t) => {
                this.emit('prefinish'), this.emit('finish'), this.emit('end'), this.emit('close');
              }),
          (this.strict = !!e.strict),
          (this.maxMetaEntrySize = e.maxMetaEntrySize || CR),
          (this.filter = typeof e.filter == 'function' ? e.filter : AR),
          (this.writable = !0),
          (this.readable = !1),
          (this[jt] = new OR()),
          (this[ae] = null),
          (this[Bt] = null),
          (this[Mr] = null),
          (this[nt] = 'begin'),
          (this[ar] = ''),
          (this[it] = null),
          (this[pi] = null),
          (this[qr] = !1),
          (this[Ve] = null),
          (this[cr] = !1),
          (this[so] = !1),
          (this[oo] = !1),
          typeof e.onwarn == 'function' && this.on('warn', e.onwarn),
          typeof e.onentry == 'function' && this.on('entry', e.onentry);
      }
      [pm](e, t) {
        this[jr] === null && (this[jr] = !1);
        let n;
        try {
          n = new TR(e, t, this[it], this[pi]);
        } catch (i) {
          return this.warn('TAR_ENTRY_INVALID', i);
        }
        if (n.nullBlock)
          this[so]
            ? ((this[oo] = !0), this[nt] === 'begin' && (this[nt] = 'header'), this[Br]('eof'))
            : ((this[so] = !0), this[Br]('nullBlock'));
        else if (((this[so] = !1), !n.cksumValid))
          this.warn('TAR_ENTRY_INVALID', 'checksum failure', { header: n });
        else if (!n.path) this.warn('TAR_ENTRY_INVALID', 'path is required', { header: n });
        else {
          let i = n.type;
          if (/^(Symbolic)?Link$/.test(i) && !n.linkpath)
            this.warn('TAR_ENTRY_INVALID', 'linkpath required', { header: n });
          else if (!/^(Symbolic)?Link$/.test(i) && n.linkpath)
            this.warn('TAR_ENTRY_INVALID', 'linkpath forbidden', { header: n });
          else {
            let s = (this[Mr] = new IR(n, this[it], this[pi]));
            if (!this[jr])
              if (s.remain) {
                let o = () => {
                  s.invalid || (this[jr] = !0);
                };
                s.on('end', o);
              } else this[jr] = !0;
            s.meta
              ? s.size > this.maxMetaEntrySize
                ? ((s.ignore = !0), this[Br]('ignoredEntry', s), (this[nt] = 'ignore'), s.resume())
                : s.size > 0 &&
                  ((this[ar] = ''), s.on('data', (o) => (this[ar] += o)), (this[nt] = 'meta'))
              : ((this[it] = null),
                (s.ignore = s.ignore || !this.filter(s.path, s)),
                s.ignore
                  ? (this[Br]('ignoredEntry', s),
                    (this[nt] = s.remain ? 'ignore' : 'header'),
                    s.resume())
                  : (s.remain ? (this[nt] = 'body') : ((this[nt] = 'header'), s.end()),
                    this[Bt] ? this[jt].push(s) : (this[jt].push(s), this[yu]())));
          }
        }
      }
      [lm](e) {
        let t = !0;
        return (
          e
            ? Array.isArray(e)
              ? this.emit.apply(this, e)
              : ((this[Bt] = e),
                this.emit('entry', e),
                e.emittedEnd || (e.on('end', (n) => this[yu]()), (t = !1)))
            : ((this[Bt] = null), (t = !1)),
          t
        );
      }
      [yu]() {
        do;
        while (this[lm](this[jt].shift()));
        if (!this[jt].length) {
          let e = this[Bt];
          !e || e.flowing || e.size === e.remain
            ? this[mi] || this.emit('drain')
            : e.once('drain', (n) => this.emit('drain'));
        }
      }
      [Eu](e, t) {
        let n = this[Mr],
          i = n.blockRemain,
          s = i >= e.length && t === 0 ? e : e.slice(t, t + i);
        return (
          n.write(s), n.blockRemain || ((this[nt] = 'header'), (this[Mr] = null), n.end()), s.length
        );
      }
      [dm](e, t) {
        let n = this[Mr],
          i = this[Eu](e, t);
        return this[Mr] || this[fm](n), i;
      }
      [Br](e, t, n) {
        !this[jt].length && !this[Bt] ? this.emit(e, t, n) : this[jt].push([e, t, n]);
      }
      [fm](e) {
        switch ((this[Br]('meta', this[ar]), e.type)) {
          case 'ExtendedHeader':
          case 'OldExtendedHeader':
            this[it] = um.parse(this[ar], this[it], !1);
            break;
          case 'GlobalExtendedHeader':
            this[pi] = um.parse(this[ar], this[pi], !0);
            break;
          case 'NextFileHasLongPath':
          case 'OldGnuLongPath':
            (this[it] = this[it] || Object.create(null)),
              (this[it].path = this[ar].replace(/\0.*/, ''));
            break;
          case 'NextFileHasLongLinkpath':
            (this[it] = this[it] || Object.create(null)),
              (this[it].linkpath = this[ar].replace(/\0.*/, ''));
            break;
          default:
            throw new Error('unknown meta: ' + e.type);
        }
      }
      abort(e) {
        (this[cr] = !0), this.emit('abort', e), this.warn('TAR_ABORT', e, { recoverable: !1 });
      }
      write(e) {
        if (this[cr]) return;
        if (this[Ve] === null && e) {
          if (
            (this[ae] && ((e = Buffer.concat([this[ae], e])), (this[ae] = null)),
            e.length < mu.length)
          )
            return (this[ae] = e), !0;
          for (let n = 0; this[Ve] === null && n < mu.length; n++)
            e[n] !== mu[n] && (this[Ve] = !1);
          if (this[Ve] === null) {
            let n = this[qr];
            (this[qr] = !1),
              (this[Ve] = new NR.Unzip()),
              this[Ve].on('data', (s) => this[to](s)),
              this[Ve].on('error', (s) => this.abort(s)),
              this[Ve].on('end', (s) => {
                (this[qr] = !0), this[to]();
              }),
              (this[mi] = !0);
            let i = this[Ve][n ? 'end' : 'write'](e);
            return (this[mi] = !1), i;
          }
        }
        (this[mi] = !0), this[Ve] ? this[Ve].write(e) : this[to](e), (this[mi] = !1);
        let t = this[jt].length ? !1 : this[Bt] ? this[Bt].flowing : !0;
        return !t && !this[jt].length && this[Bt].once('drain', (n) => this.emit('drain')), t;
      }
      [gu](e) {
        e && !this[cr] && (this[ae] = this[ae] ? Buffer.concat([this[ae], e]) : e);
      }
      [_u]() {
        if (this[qr] && !this[hm] && !this[cr] && !this[no]) {
          this[hm] = !0;
          let e = this[Mr];
          if (e && e.blockRemain) {
            let t = this[ae] ? this[ae].length : 0;
            this.warn(
              'TAR_BAD_ARCHIVE',
              `Truncated input (needed ${e.blockRemain} more bytes, only ${t} available)`,
              { entry: e }
            ),
              this[ae] && e.write(this[ae]),
              e.end();
          }
          this[Br](io);
        }
      }
      [to](e) {
        if (this[no]) this[gu](e);
        else if (!e && !this[ae]) this[_u]();
        else {
          if (((this[no] = !0), this[ae])) {
            this[gu](e);
            let t = this[ae];
            (this[ae] = null), this[ro](t);
          } else this[ro](e);
          for (; this[ae] && this[ae].length >= 512 && !this[cr] && !this[oo]; ) {
            let t = this[ae];
            (this[ae] = null), this[ro](t);
          }
          this[no] = !1;
        }
        (!this[ae] || this[qr]) && this[_u]();
      }
      [ro](e) {
        let t = 0,
          n = e.length;
        for (; t + 512 <= n && !this[cr] && !this[oo]; )
          switch (this[nt]) {
            case 'begin':
            case 'header':
              this[pm](e, t), (t += 512);
              break;
            case 'ignore':
            case 'body':
              t += this[Eu](e, t);
              break;
            case 'meta':
              t += this[dm](e, t);
              break;
            default:
              throw new Error('invalid state: ' + this[nt]);
          }
        t < n &&
          (this[ae] ? (this[ae] = Buffer.concat([e.slice(t), this[ae]])) : (this[ae] = e.slice(t)));
      }
      end(e) {
        this[cr] || (this[Ve] ? this[Ve].end(e) : ((this[qr] = !0), this.write(e)));
      }
    }
  );
});
var co = E((BD, _m) => {
  'use strict';
  var DR = un(),
    Em = ao(),
    On = require('fs'),
    kR = xn(),
    ym = require('path'),
    bu = En();
  _m.exports = (r, e, t) => {
    typeof r == 'function'
      ? ((t = r), (e = null), (r = {}))
      : Array.isArray(r) && ((e = r), (r = {})),
      typeof e == 'function' && ((t = e), (e = null)),
      e ? (e = Array.from(e)) : (e = []);
    let n = DR(r);
    if (n.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!n.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return (
      e.length && PR(n, e),
      n.noResume || LR(n),
      n.file && n.sync ? UR(n) : n.file ? FR(n, t) : gm(n)
    );
  };
  var LR = (r) => {
      let e = r.onentry;
      r.onentry = e
        ? (t) => {
            e(t), t.resume();
          }
        : (t) => t.resume();
    },
    PR = (r, e) => {
      let t = new Map(e.map((s) => [bu(s), !0])),
        n = r.filter,
        i = (s, o) => {
          let a = o || ym.parse(s).root || '.',
            c = s === a ? !1 : t.has(s) ? t.get(s) : i(ym.dirname(s), a);
          return t.set(s, c), c;
        };
      r.filter = n ? (s, o) => n(s, o) && i(bu(s)) : (s) => i(bu(s));
    },
    UR = (r) => {
      let e = gm(r),
        t = r.file,
        n = !0,
        i;
      try {
        let s = On.statSync(t),
          o = r.maxReadSize || 16 * 1024 * 1024;
        if (s.size < o) e.end(On.readFileSync(t));
        else {
          let a = 0,
            c = Buffer.allocUnsafe(o);
          for (i = On.openSync(t, 'r'); a < s.size; ) {
            let u = On.readSync(i, c, 0, o, a);
            (a += u), e.write(c.slice(0, u));
          }
          e.end();
        }
        n = !1;
      } finally {
        if (n && i)
          try {
            On.closeSync(i);
          } catch {}
      }
    },
    FR = (r, e) => {
      let t = new Em(r),
        n = r.maxReadSize || 16 * 1024 * 1024,
        i = r.file,
        s = new Promise((o, a) => {
          t.on('error', a),
            t.on('end', o),
            On.stat(i, (c, u) => {
              if (c) a(c);
              else {
                let l = new kR.ReadStream(i, { readSize: n, size: u.size });
                l.on('error', a), l.pipe(t);
              }
            });
        });
      return e ? s.then(e, e) : s;
    },
    gm = (r) => new Em(r);
});
var Tm = E((jD, Rm) => {
  'use strict';
  var MR = un(),
    uo = Ws(),
    bm = xn(),
    vm = co(),
    Sm = require('path');
  Rm.exports = (r, e, t) => {
    if (
      (typeof e == 'function' && (t = e),
      Array.isArray(r) && ((e = r), (r = {})),
      !e || !Array.isArray(e) || !e.length)
    )
      throw new TypeError('no files or directories specified');
    e = Array.from(e);
    let n = MR(r);
    if (n.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!n.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return n.file && n.sync ? qR(n, e) : n.file ? BR(n, e, t) : n.sync ? jR(n, e) : GR(n, e);
  };
  var qR = (r, e) => {
      let t = new uo.Sync(r),
        n = new bm.WriteStreamSync(r.file, { mode: r.mode || 438 });
      t.pipe(n), wm(t, e);
    },
    BR = (r, e, t) => {
      let n = new uo(r),
        i = new bm.WriteStream(r.file, { mode: r.mode || 438 });
      n.pipe(i);
      let s = new Promise((o, a) => {
        i.on('error', a), i.on('close', o), n.on('error', a);
      });
      return vu(n, e), t ? s.then(t, t) : s;
    },
    wm = (r, e) => {
      e.forEach((t) => {
        t.charAt(0) === '@'
          ? vm({
              file: Sm.resolve(r.cwd, t.substr(1)),
              sync: !0,
              noResume: !0,
              onentry: (n) => r.add(n),
            })
          : r.add(t);
      }),
        r.end();
    },
    vu = (r, e) => {
      for (; e.length; ) {
        let t = e.shift();
        if (t.charAt(0) === '@')
          return vm({
            file: Sm.resolve(r.cwd, t.substr(1)),
            noResume: !0,
            onentry: (n) => r.add(n),
          }).then((n) => vu(r, e));
        r.add(t);
      }
      r.end();
    },
    jR = (r, e) => {
      let t = new uo.Sync(r);
      return wm(t, e), t;
    },
    GR = (r, e) => {
      let t = new uo(r);
      return vu(t, e), t;
    };
});
var Su = E((GD, Dm) => {
  'use strict';
  var $R = un(),
    xm = Ws(),
    Qe = require('fs'),
    Om = xn(),
    Cm = co(),
    Im = require('path'),
    Nm = yn();
  Dm.exports = (r, e, t) => {
    let n = $R(r);
    if (!n.file) throw new TypeError('file is required');
    if (n.gzip) throw new TypeError('cannot append to compressed archives');
    if (!e || !Array.isArray(e) || !e.length)
      throw new TypeError('no files or directories specified');
    return (e = Array.from(e)), n.sync ? HR(n, e) : VR(n, e, t);
  };
  var HR = (r, e) => {
      let t = new xm.Sync(r),
        n = !0,
        i,
        s;
      try {
        try {
          i = Qe.openSync(r.file, 'r+');
        } catch (c) {
          if (c.code === 'ENOENT') i = Qe.openSync(r.file, 'w+');
          else throw c;
        }
        let o = Qe.fstatSync(i),
          a = Buffer.alloc(512);
        e: for (s = 0; s < o.size; s += 512) {
          for (let l = 0, f = 0; l < 512; l += f) {
            if (
              ((f = Qe.readSync(i, a, l, a.length - l, s + l)),
              s === 0 && a[0] === 31 && a[1] === 139)
            )
              throw new Error('cannot append to compressed archives');
            if (!f) break e;
          }
          let c = new Nm(a);
          if (!c.cksumValid) break;
          let u = 512 * Math.ceil(c.size / 512);
          if (s + u + 512 > o.size) break;
          (s += u), r.mtimeCache && r.mtimeCache.set(c.path, c.mtime);
        }
        (n = !1), zR(r, t, s, i, e);
      } finally {
        if (n)
          try {
            Qe.closeSync(i);
          } catch {}
      }
    },
    zR = (r, e, t, n, i) => {
      let s = new Om.WriteStreamSync(r.file, { fd: n, start: t });
      e.pipe(s), WR(e, i);
    },
    VR = (r, e, t) => {
      e = Array.from(e);
      let n = new xm(r),
        i = (o, a, c) => {
          let u = (m, b) => {
              m ? Qe.close(o, (p) => c(m)) : c(null, b);
            },
            l = 0;
          if (a === 0) return u(null, 0);
          let f = 0,
            h = Buffer.alloc(512),
            d = (m, b) => {
              if (m) return u(m);
              if (((f += b), f < 512 && b)) return Qe.read(o, h, f, h.length - f, l + f, d);
              if (l === 0 && h[0] === 31 && h[1] === 139)
                return u(new Error('cannot append to compressed archives'));
              if (f < 512) return u(null, l);
              let p = new Nm(h);
              if (!p.cksumValid) return u(null, l);
              let S = 512 * Math.ceil(p.size / 512);
              if (l + S + 512 > a || ((l += S + 512), l >= a)) return u(null, l);
              r.mtimeCache && r.mtimeCache.set(p.path, p.mtime),
                (f = 0),
                Qe.read(o, h, 0, 512, l, d);
            };
          Qe.read(o, h, 0, 512, l, d);
        },
        s = new Promise((o, a) => {
          n.on('error', a);
          let c = 'r+',
            u = (l, f) => {
              if (l && l.code === 'ENOENT' && c === 'r+') return (c = 'w+'), Qe.open(r.file, c, u);
              if (l) return a(l);
              Qe.fstat(f, (h, d) => {
                if (h) return Qe.close(f, () => a(h));
                i(f, d.size, (m, b) => {
                  if (m) return a(m);
                  let p = new Om.WriteStream(r.file, { fd: f, start: b });
                  n.pipe(p), p.on('error', a), p.on('close', o), Am(n, e);
                });
              });
            };
          Qe.open(r.file, c, u);
        });
      return t ? s.then(t, t) : s;
    },
    WR = (r, e) => {
      e.forEach((t) => {
        t.charAt(0) === '@'
          ? Cm({
              file: Im.resolve(r.cwd, t.substr(1)),
              sync: !0,
              noResume: !0,
              onentry: (n) => r.add(n),
            })
          : r.add(t);
      }),
        r.end();
    },
    Am = (r, e) => {
      for (; e.length; ) {
        let t = e.shift();
        if (t.charAt(0) === '@')
          return Cm({
            file: Im.resolve(r.cwd, t.substr(1)),
            noResume: !0,
            onentry: (n) => r.add(n),
          }).then((n) => Am(r, e));
        r.add(t);
      }
      r.end();
    };
});
var Lm = E(($D, km) => {
  'use strict';
  var XR = un(),
    KR = Su();
  km.exports = (r, e, t) => {
    let n = XR(r);
    if (!n.file) throw new TypeError('file is required');
    if (n.gzip) throw new TypeError('cannot append to compressed archives');
    if (!e || !Array.isArray(e) || !e.length)
      throw new TypeError('no files or directories specified');
    return (e = Array.from(e)), YR(n), KR(n, e, t);
  };
  var YR = (r) => {
    let e = r.filter;
    r.mtimeCache || (r.mtimeCache = new Map()),
      (r.filter = e
        ? (t, n) => e(t, n) && !(r.mtimeCache.get(t) > n.mtime)
        : (t, n) => !(r.mtimeCache.get(t) > n.mtime));
  };
});
var Fm = E((HD, Um) => {
  'use strict';
  var { promisify: Pm } = require('util'),
    ur = require('fs'),
    JR = (r) => {
      if (!r) r = { mode: 511, fs: ur };
      else if (typeof r == 'object') r = { mode: 511, fs: ur, ...r };
      else if (typeof r == 'number') r = { mode: r, fs: ur };
      else if (typeof r == 'string') r = { mode: parseInt(r, 8), fs: ur };
      else throw new TypeError('invalid options argument');
      return (
        (r.mkdir = r.mkdir || r.fs.mkdir || ur.mkdir),
        (r.mkdirAsync = Pm(r.mkdir)),
        (r.stat = r.stat || r.fs.stat || ur.stat),
        (r.statAsync = Pm(r.stat)),
        (r.statSync = r.statSync || r.fs.statSync || ur.statSync),
        (r.mkdirSync = r.mkdirSync || r.fs.mkdirSync || ur.mkdirSync),
        r
      );
    };
  Um.exports = JR;
});
var qm = E((zD, Mm) => {
  'use strict';
  var ZR = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform,
    { resolve: QR, parse: eT } = require('path'),
    tT = (r) => {
      if (/\0/.test(r))
        throw Object.assign(new TypeError('path must be a string without null bytes'), {
          path: r,
          code: 'ERR_INVALID_ARG_VALUE',
        });
      if (((r = QR(r)), ZR === 'win32')) {
        let e = /[*|"<>?:]/,
          { root: t } = eT(r);
        if (e.test(r.substr(t.length)))
          throw Object.assign(new Error('Illegal characters in path.'), {
            path: r,
            code: 'EINVAL',
          });
      }
      return r;
    };
  Mm.exports = tT;
});
var Hm = E((VD, $m) => {
  'use strict';
  var { dirname: Bm } = require('path'),
    jm = (r, e, t = void 0) =>
      t === e
        ? Promise.resolve()
        : r.statAsync(e).then(
            (n) => (n.isDirectory() ? t : void 0),
            (n) => (n.code === 'ENOENT' ? jm(r, Bm(e), e) : void 0)
          ),
    Gm = (r, e, t = void 0) => {
      if (t !== e)
        try {
          return r.statSync(e).isDirectory() ? t : void 0;
        } catch (n) {
          return n.code === 'ENOENT' ? Gm(r, Bm(e), e) : void 0;
        }
    };
  $m.exports = { findMade: jm, findMadeSync: Gm };
});
var Tu = E((WD, Vm) => {
  'use strict';
  var { dirname: zm } = require('path'),
    wu = (r, e, t) => {
      e.recursive = !1;
      let n = zm(r);
      return n === r
        ? e.mkdirAsync(r, e).catch((i) => {
            if (i.code !== 'EISDIR') throw i;
          })
        : e.mkdirAsync(r, e).then(
            () => t || r,
            (i) => {
              if (i.code === 'ENOENT') return wu(n, e).then((s) => wu(r, e, s));
              if (i.code !== 'EEXIST' && i.code !== 'EROFS') throw i;
              return e.statAsync(r).then(
                (s) => {
                  if (s.isDirectory()) return t;
                  throw i;
                },
                () => {
                  throw i;
                }
              );
            }
          );
    },
    Ru = (r, e, t) => {
      let n = zm(r);
      if (((e.recursive = !1), n === r))
        try {
          return e.mkdirSync(r, e);
        } catch (i) {
          if (i.code !== 'EISDIR') throw i;
          return;
        }
      try {
        return e.mkdirSync(r, e), t || r;
      } catch (i) {
        if (i.code === 'ENOENT') return Ru(r, e, Ru(n, e, t));
        if (i.code !== 'EEXIST' && i.code !== 'EROFS') throw i;
        try {
          if (!e.statSync(r).isDirectory()) throw i;
        } catch {
          throw i;
        }
      }
    };
  Vm.exports = { mkdirpManual: wu, mkdirpManualSync: Ru };
});
var Km = E((XD, Xm) => {
  'use strict';
  var { dirname: Wm } = require('path'),
    { findMade: rT, findMadeSync: nT } = Hm(),
    { mkdirpManual: iT, mkdirpManualSync: sT } = Tu(),
    oT = (r, e) => (
      (e.recursive = !0),
      Wm(r) === r
        ? e.mkdirAsync(r, e)
        : rT(e, r).then((n) =>
            e
              .mkdirAsync(r, e)
              .then(() => n)
              .catch((i) => {
                if (i.code === 'ENOENT') return iT(r, e);
                throw i;
              })
          )
    ),
    aT = (r, e) => {
      if (((e.recursive = !0), Wm(r) === r)) return e.mkdirSync(r, e);
      let n = nT(e, r);
      try {
        return e.mkdirSync(r, e), n;
      } catch (i) {
        if (i.code === 'ENOENT') return sT(r, e);
        throw i;
      }
    };
  Xm.exports = { mkdirpNative: oT, mkdirpNativeSync: aT };
});
var Qm = E((KD, Zm) => {
  'use strict';
  var Ym = require('fs'),
    cT = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version,
    xu = cT.replace(/^v/, '').split('.'),
    Jm = +xu[0] > 10 || (+xu[0] == 10 && +xu[1] >= 12),
    uT = Jm ? (r) => r.mkdir === Ym.mkdir : () => !1,
    lT = Jm ? (r) => r.mkdirSync === Ym.mkdirSync : () => !1;
  Zm.exports = { useNative: uT, useNativeSync: lT };
});
var sy = E((YD, iy) => {
  'use strict';
  var Cn = Fm(),
    In = qm(),
    { mkdirpNative: ey, mkdirpNativeSync: ty } = Km(),
    { mkdirpManual: ry, mkdirpManualSync: ny } = Tu(),
    { useNative: fT, useNativeSync: hT } = Qm(),
    Nn = (r, e) => ((r = In(r)), (e = Cn(e)), fT(e) ? ey(r, e) : ry(r, e)),
    dT = (r, e) => ((r = In(r)), (e = Cn(e)), hT(e) ? ty(r, e) : ny(r, e));
  Nn.sync = dT;
  Nn.native = (r, e) => ey(In(r), Cn(e));
  Nn.manual = (r, e) => ry(In(r), Cn(e));
  Nn.nativeSync = (r, e) => ty(In(r), Cn(e));
  Nn.manualSync = (r, e) => ny(In(r), Cn(e));
  iy.exports = Nn;
});
var hy = E((JD, fy) => {
  'use strict';
  var st = require('fs'),
    Gr = require('path'),
    pT = st.lchown ? 'lchown' : 'chown',
    mT = st.lchownSync ? 'lchownSync' : 'chownSync',
    ay = st.lchown && !process.version.match(/v1[1-9]+\./) && !process.version.match(/v10\.[6-9]/),
    oy = (r, e, t) => {
      try {
        return st[mT](r, e, t);
      } catch (n) {
        if (n.code !== 'ENOENT') throw n;
      }
    },
    yT = (r, e, t) => {
      try {
        return st.chownSync(r, e, t);
      } catch (n) {
        if (n.code !== 'ENOENT') throw n;
      }
    },
    ET = ay
      ? (r, e, t, n) => (i) => {
          !i || i.code !== 'EISDIR' ? n(i) : st.chown(r, e, t, n);
        }
      : (r, e, t, n) => n,
    Ou = ay
      ? (r, e, t) => {
          try {
            return oy(r, e, t);
          } catch (n) {
            if (n.code !== 'EISDIR') throw n;
            yT(r, e, t);
          }
        }
      : (r, e, t) => oy(r, e, t),
    gT = process.version,
    cy = (r, e, t) => st.readdir(r, e, t),
    _T = (r, e) => st.readdirSync(r, e);
  /^v4\./.test(gT) && (cy = (r, e, t) => st.readdir(r, t));
  var lo = (r, e, t, n) => {
      st[pT](
        r,
        e,
        t,
        ET(r, e, t, (i) => {
          n(i && i.code !== 'ENOENT' ? i : null);
        })
      );
    },
    uy = (r, e, t, n, i) => {
      if (typeof e == 'string')
        return st.lstat(Gr.resolve(r, e), (s, o) => {
          if (s) return i(s.code !== 'ENOENT' ? s : null);
          (o.name = e), uy(r, o, t, n, i);
        });
      if (e.isDirectory())
        Cu(Gr.resolve(r, e.name), t, n, (s) => {
          if (s) return i(s);
          let o = Gr.resolve(r, e.name);
          lo(o, t, n, i);
        });
      else {
        let s = Gr.resolve(r, e.name);
        lo(s, t, n, i);
      }
    },
    Cu = (r, e, t, n) => {
      cy(r, { withFileTypes: !0 }, (i, s) => {
        if (i) {
          if (i.code === 'ENOENT') return n();
          if (i.code !== 'ENOTDIR' && i.code !== 'ENOTSUP') return n(i);
        }
        if (i || !s.length) return lo(r, e, t, n);
        let o = s.length,
          a = null,
          c = (u) => {
            if (!a) {
              if (u) return n((a = u));
              if (--o === 0) return lo(r, e, t, n);
            }
          };
        s.forEach((u) => uy(r, u, e, t, c));
      });
    },
    bT = (r, e, t, n) => {
      if (typeof e == 'string')
        try {
          let i = st.lstatSync(Gr.resolve(r, e));
          (i.name = e), (e = i);
        } catch (i) {
          if (i.code === 'ENOENT') return;
          throw i;
        }
      e.isDirectory() && ly(Gr.resolve(r, e.name), t, n), Ou(Gr.resolve(r, e.name), t, n);
    },
    ly = (r, e, t) => {
      let n;
      try {
        n = _T(r, { withFileTypes: !0 });
      } catch (i) {
        if (i.code === 'ENOENT') return;
        if (i.code === 'ENOTDIR' || i.code === 'ENOTSUP') return Ou(r, e, t);
        throw i;
      }
      return n && n.length && n.forEach((i) => bT(r, i, e, t)), Ou(r, e, t);
    };
  fy.exports = Cu;
  Cu.sync = ly;
});
var yy = E((ZD, Iu) => {
  'use strict';
  var dy = sy(),
    ot = require('fs'),
    fo = require('path'),
    py = hy(),
    ht = pn(),
    ho = class extends Error {
      constructor(e, t) {
        super('Cannot extract through symbolic link'), (this.path = t), (this.symlink = e);
      }
      get name() {
        return 'SylinkError';
      }
    },
    po = class extends Error {
      constructor(e, t) {
        super(t + ": Cannot cd into '" + e + "'"), (this.path = e), (this.code = t);
      }
      get name() {
        return 'CwdError';
      }
    },
    mo = (r, e) => r.get(ht(e)),
    yi = (r, e, t) => r.set(ht(e), t),
    vT = (r, e) => {
      ot.stat(r, (t, n) => {
        (t || !n.isDirectory()) && (t = new po(r, (t && t.code) || 'ENOTDIR')), e(t);
      });
    };
  Iu.exports = (r, e, t) => {
    r = ht(r);
    let n = e.umask,
      i = e.mode | 448,
      s = (i & n) !== 0,
      o = e.uid,
      a = e.gid,
      c =
        typeof o == 'number' && typeof a == 'number' && (o !== e.processUid || a !== e.processGid),
      u = e.preserve,
      l = e.unlink,
      f = e.cache,
      h = ht(e.cwd),
      d = (p, S) => {
        p ? t(p) : (yi(f, r, !0), S && c ? py(S, o, a, (D) => d(D)) : s ? ot.chmod(r, i, t) : t());
      };
    if (f && mo(f, r) === !0) return d();
    if (r === h) return vT(r, d);
    if (u) return dy(r, { mode: i }).then((p) => d(null, p), d);
    let b = ht(fo.relative(h, r)).split('/');
    yo(h, b, i, f, l, h, null, d);
  };
  var yo = (r, e, t, n, i, s, o, a) => {
      if (!e.length) return a(null, o);
      let c = e.shift(),
        u = ht(fo.resolve(r + '/' + c));
      if (mo(n, u)) return yo(u, e, t, n, i, s, o, a);
      ot.mkdir(u, t, my(u, e, t, n, i, s, o, a));
    },
    my = (r, e, t, n, i, s, o, a) => (c) => {
      c
        ? ot.lstat(r, (u, l) => {
            if (u) (u.path = u.path && ht(u.path)), a(u);
            else if (l.isDirectory()) yo(r, e, t, n, i, s, o, a);
            else if (i)
              ot.unlink(r, (f) => {
                if (f) return a(f);
                ot.mkdir(r, t, my(r, e, t, n, i, s, o, a));
              });
            else {
              if (l.isSymbolicLink()) return a(new ho(r, r + '/' + e.join('/')));
              a(c);
            }
          })
        : ((o = o || r), yo(r, e, t, n, i, s, o, a));
    },
    ST = (r) => {
      let e = !1,
        t = 'ENOTDIR';
      try {
        e = ot.statSync(r).isDirectory();
      } catch (n) {
        t = n.code;
      } finally {
        if (!e) throw new po(r, t);
      }
    };
  Iu.exports.sync = (r, e) => {
    r = ht(r);
    let t = e.umask,
      n = e.mode | 448,
      i = (n & t) !== 0,
      s = e.uid,
      o = e.gid,
      a =
        typeof s == 'number' && typeof o == 'number' && (s !== e.processUid || o !== e.processGid),
      c = e.preserve,
      u = e.unlink,
      l = e.cache,
      f = ht(e.cwd),
      h = (p) => {
        yi(l, r, !0), p && a && py.sync(p, s, o), i && ot.chmodSync(r, n);
      };
    if (l && mo(l, r) === !0) return h();
    if (r === f) return ST(f), h();
    if (c) return h(dy.sync(r, n));
    let m = ht(fo.relative(f, r)).split('/'),
      b = null;
    for (let p = m.shift(), S = f; p && (S += '/' + p); p = m.shift())
      if (((S = ht(fo.resolve(S))), !mo(l, S)))
        try {
          ot.mkdirSync(S, n), (b = b || S), yi(l, S, !0);
        } catch {
          let x = ot.lstatSync(S);
          if (x.isDirectory()) {
            yi(l, S, !0);
            continue;
          } else if (u) {
            ot.unlinkSync(S), ot.mkdirSync(S, n), (b = b || S), yi(l, S, !0);
            continue;
          } else if (x.isSymbolicLink()) return new ho(S, S + '/' + m.join('/'));
        }
    return h(b);
  };
});
var Au = E((QD, Ey) => {
  'use strict';
  var Nu = Object.create(null),
    { hasOwnProperty: wT } = Object.prototype;
  Ey.exports = (r) => (wT.call(Nu, r) || (Nu[r] = r.normalize('NFKD')), Nu[r]);
});
var vy = E((ek, by) => {
  'use strict';
  var gy = require('assert'),
    RT = Au(),
    TT = En(),
    { join: _y } = require('path'),
    xT = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform,
    OT = xT === 'win32';
  by.exports = () => {
    let r = new Map(),
      e = new Map(),
      t = (u) =>
        u
          .split('/')
          .slice(0, -1)
          .reduce((f, h) => (f.length && (h = _y(f[f.length - 1], h)), f.push(h || '/'), f), []),
      n = new Set(),
      i = (u) => {
        let l = e.get(u);
        if (!l) throw new Error('function does not have any path reservations');
        return { paths: l.paths.map((f) => r.get(f)), dirs: [...l.dirs].map((f) => r.get(f)) };
      },
      s = (u) => {
        let { paths: l, dirs: f } = i(u);
        return l.every((h) => h[0] === u) && f.every((h) => h[0] instanceof Set && h[0].has(u));
      },
      o = (u) => (n.has(u) || !s(u) ? !1 : (n.add(u), u(() => a(u)), !0)),
      a = (u) => {
        if (!n.has(u)) return !1;
        let { paths: l, dirs: f } = e.get(u),
          h = new Set();
        return (
          l.forEach((d) => {
            let m = r.get(d);
            gy.equal(m[0], u),
              m.length === 1
                ? r.delete(d)
                : (m.shift(),
                  typeof m[0] == 'function' ? h.add(m[0]) : m[0].forEach((b) => h.add(b)));
          }),
          f.forEach((d) => {
            let m = r.get(d);
            gy(m[0] instanceof Set),
              m[0].size === 1 && m.length === 1
                ? r.delete(d)
                : m[0].size === 1
                  ? (m.shift(), h.add(m[0]))
                  : m[0].delete(u);
          }),
          n.delete(u),
          h.forEach((d) => o(d)),
          !0
        );
      };
    return {
      check: s,
      reserve: (u, l) => {
        u = OT ? ['win32 parallelization disabled'] : u.map((h) => RT(TT(_y(h))).toLowerCase());
        let f = new Set(u.map((h) => t(h)).reduce((h, d) => h.concat(d)));
        return (
          e.set(l, { dirs: f, paths: u }),
          u.forEach((h) => {
            let d = r.get(h);
            d ? d.push(l) : r.set(h, [l]);
          }),
          f.forEach((h) => {
            let d = r.get(h);
            d
              ? d[d.length - 1] instanceof Set
                ? d[d.length - 1].add(l)
                : d.push(new Set([l]))
              : r.set(h, [new Set([l])]);
          }),
          o(l)
        );
      },
    };
  };
});
var Ry = E((tk, wy) => {
  'use strict';
  var CT = process.env.__FAKE_PLATFORM__ || process.platform,
    IT = CT === 'win32',
    NT = global.__FAKE_TESTING_FS__ || require('fs'),
    { O_CREAT: AT, O_TRUNC: DT, O_WRONLY: kT, UV_FS_O_FILEMAP: Sy = 0 } = NT.constants,
    LT = IT && !!Sy,
    PT = 512 * 1024,
    UT = Sy | DT | AT | kT;
  wy.exports = LT ? (r) => (r < PT ? UT : 'w') : () => 'w';
});
var Bu = E((rk, My) => {
  'use strict';
  var FT = require('assert'),
    MT = ao(),
    Q = require('fs'),
    qT = xn(),
    Gt = require('path'),
    Py = yy(),
    Ty = qc(),
    BT = vy(),
    jT = Bc(),
    et = pn(),
    GT = En(),
    $T = Au(),
    xy = Symbol('onEntry'),
    Lu = Symbol('checkFs'),
    Oy = Symbol('checkFs2'),
    _o = Symbol('pruneCache'),
    Pu = Symbol('isReusable'),
    at = Symbol('makeFs'),
    Uu = Symbol('file'),
    Fu = Symbol('directory'),
    bo = Symbol('link'),
    Cy = Symbol('symlink'),
    Iy = Symbol('hardlink'),
    Ny = Symbol('unsupported'),
    Ay = Symbol('checkPath'),
    lr = Symbol('mkdir'),
    De = Symbol('onError'),
    Eo = Symbol('pending'),
    Dy = Symbol('pend'),
    An = Symbol('unpend'),
    Du = Symbol('ended'),
    ku = Symbol('maybeClose'),
    Mu = Symbol('skip'),
    Ei = Symbol('doChown'),
    gi = Symbol('uid'),
    _i = Symbol('gid'),
    bi = Symbol('checkedCwd'),
    Uy = require('crypto'),
    Fy = Ry(),
    HT = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform,
    vi = HT === 'win32',
    zT = (r, e) => {
      if (!vi) return Q.unlink(r, e);
      let t = r + '.DELETE.' + Uy.randomBytes(16).toString('hex');
      Q.rename(r, t, (n) => {
        if (n) return e(n);
        Q.unlink(t, e);
      });
    },
    VT = (r) => {
      if (!vi) return Q.unlinkSync(r);
      let e = r + '.DELETE.' + Uy.randomBytes(16).toString('hex');
      Q.renameSync(r, e), Q.unlinkSync(e);
    },
    ky = (r, e, t) => (r === r >>> 0 ? r : e === e >>> 0 ? e : t),
    Ly = (r) => $T(GT(et(r))).toLowerCase(),
    WT = (r, e) => {
      e = Ly(e);
      for (let t of r.keys()) {
        let n = Ly(t);
        (n === e || n.indexOf(e + '/') === 0) && r.delete(t);
      }
    },
    XT = (r) => {
      for (let e of r.keys()) r.delete(e);
    },
    Si = class extends MT {
      constructor(e) {
        if (
          (e || (e = {}),
          (e.ondone = (t) => {
            (this[Du] = !0), this[ku]();
          }),
          super(e),
          (this[bi] = !1),
          (this.reservations = BT()),
          (this.transform = typeof e.transform == 'function' ? e.transform : null),
          (this.writable = !0),
          (this.readable = !1),
          (this[Eo] = 0),
          (this[Du] = !1),
          (this.dirCache = e.dirCache || new Map()),
          typeof e.uid == 'number' || typeof e.gid == 'number')
        ) {
          if (typeof e.uid != 'number' || typeof e.gid != 'number')
            throw new TypeError('cannot set owner without number uid and gid');
          if (e.preserveOwner)
            throw new TypeError('cannot preserve owner in archive and also set owner explicitly');
          (this.uid = e.uid), (this.gid = e.gid), (this.setOwner = !0);
        } else (this.uid = null), (this.gid = null), (this.setOwner = !1);
        e.preserveOwner === void 0 && typeof e.uid != 'number'
          ? (this.preserveOwner = process.getuid && process.getuid() === 0)
          : (this.preserveOwner = !!e.preserveOwner),
          (this.processUid =
            (this.preserveOwner || this.setOwner) && process.getuid ? process.getuid() : null),
          (this.processGid =
            (this.preserveOwner || this.setOwner) && process.getgid ? process.getgid() : null),
          (this.forceChown = e.forceChown === !0),
          (this.win32 = !!e.win32 || vi),
          (this.newer = !!e.newer),
          (this.keep = !!e.keep),
          (this.noMtime = !!e.noMtime),
          (this.preservePaths = !!e.preservePaths),
          (this.unlink = !!e.unlink),
          (this.cwd = et(Gt.resolve(e.cwd || process.cwd()))),
          (this.strip = +e.strip || 0),
          (this.processUmask = e.noChmod ? 0 : process.umask()),
          (this.umask = typeof e.umask == 'number' ? e.umask : this.processUmask),
          (this.dmode = e.dmode || 511 & ~this.umask),
          (this.fmode = e.fmode || 438 & ~this.umask),
          this.on('entry', (t) => this[xy](t));
      }
      warn(e, t, n = {}) {
        return (
          (e === 'TAR_BAD_ARCHIVE' || e === 'TAR_ABORT') && (n.recoverable = !1),
          super.warn(e, t, n)
        );
      }
      [ku]() {
        this[Du] &&
          this[Eo] === 0 &&
          (this.emit('prefinish'), this.emit('finish'), this.emit('end'), this.emit('close'));
      }
      [Ay](e) {
        if (this.strip) {
          let t = et(e.path).split('/');
          if (t.length < this.strip) return !1;
          if (((e.path = t.slice(this.strip).join('/')), e.type === 'Link')) {
            let n = et(e.linkpath).split('/');
            if (n.length >= this.strip) e.linkpath = n.slice(this.strip).join('/');
            else return !1;
          }
        }
        if (!this.preservePaths) {
          let t = et(e.path),
            n = t.split('/');
          if (n.includes('..') || (vi && /^[a-z]:\.\.$/i.test(n[0])))
            return this.warn('TAR_ENTRY_ERROR', "path contains '..'", { entry: e, path: t }), !1;
          let [i, s] = jT(t);
          i &&
            ((e.path = s),
            this.warn('TAR_ENTRY_INFO', `stripping ${i} from absolute path`, {
              entry: e,
              path: t,
            }));
        }
        if (
          (Gt.isAbsolute(e.path)
            ? (e.absolute = et(Gt.resolve(e.path)))
            : (e.absolute = et(Gt.resolve(this.cwd, e.path))),
          !this.preservePaths &&
            e.absolute.indexOf(this.cwd + '/') !== 0 &&
            e.absolute !== this.cwd)
        )
          return (
            this.warn('TAR_ENTRY_ERROR', 'path escaped extraction target', {
              entry: e,
              path: et(e.path),
              resolvedPath: e.absolute,
              cwd: this.cwd,
            }),
            !1
          );
        if (e.absolute === this.cwd && e.type !== 'Directory' && e.type !== 'GNUDumpDir') return !1;
        if (this.win32) {
          let { root: t } = Gt.win32.parse(e.absolute);
          e.absolute = t + Ty.encode(e.absolute.substr(t.length));
          let { root: n } = Gt.win32.parse(e.path);
          e.path = n + Ty.encode(e.path.substr(n.length));
        }
        return !0;
      }
      [xy](e) {
        if (!this[Ay](e)) return e.resume();
        switch ((FT.equal(typeof e.absolute, 'string'), e.type)) {
          case 'Directory':
          case 'GNUDumpDir':
            e.mode && (e.mode = e.mode | 448);
          case 'File':
          case 'OldFile':
          case 'ContiguousFile':
          case 'Link':
          case 'SymbolicLink':
            return this[Lu](e);
          case 'CharacterDevice':
          case 'BlockDevice':
          case 'FIFO':
          default:
            return this[Ny](e);
        }
      }
      [De](e, t) {
        e.name === 'CwdError'
          ? this.emit('error', e)
          : (this.warn('TAR_ENTRY_ERROR', e, { entry: t }), this[An](), t.resume());
      }
      [lr](e, t, n) {
        Py(
          et(e),
          {
            uid: this.uid,
            gid: this.gid,
            processUid: this.processUid,
            processGid: this.processGid,
            umask: this.processUmask,
            preserve: this.preservePaths,
            unlink: this.unlink,
            cache: this.dirCache,
            cwd: this.cwd,
            mode: t,
            noChmod: this.noChmod,
          },
          n
        );
      }
      [Ei](e) {
        return (
          this.forceChown ||
          (this.preserveOwner &&
            ((typeof e.uid == 'number' && e.uid !== this.processUid) ||
              (typeof e.gid == 'number' && e.gid !== this.processGid))) ||
          (typeof this.uid == 'number' && this.uid !== this.processUid) ||
          (typeof this.gid == 'number' && this.gid !== this.processGid)
        );
      }
      [gi](e) {
        return ky(this.uid, e.uid, this.processUid);
      }
      [_i](e) {
        return ky(this.gid, e.gid, this.processGid);
      }
      [Uu](e, t) {
        let n = e.mode & 4095 || this.fmode,
          i = new qT.WriteStream(e.absolute, { flags: Fy(e.size), mode: n, autoClose: !1 });
        i.on('error', (c) => {
          i.fd && Q.close(i.fd, () => {}), (i.write = () => !0), this[De](c, e), t();
        });
        let s = 1,
          o = (c) => {
            if (c) {
              i.fd && Q.close(i.fd, () => {}), this[De](c, e), t();
              return;
            }
            --s === 0 &&
              Q.close(i.fd, (u) => {
                u ? this[De](u, e) : this[An](), t();
              });
          };
        i.on('finish', (c) => {
          let u = e.absolute,
            l = i.fd;
          if (e.mtime && !this.noMtime) {
            s++;
            let f = e.atime || new Date(),
              h = e.mtime;
            Q.futimes(l, f, h, (d) => (d ? Q.utimes(u, f, h, (m) => o(m && d)) : o()));
          }
          if (this[Ei](e)) {
            s++;
            let f = this[gi](e),
              h = this[_i](e);
            Q.fchown(l, f, h, (d) => (d ? Q.chown(u, f, h, (m) => o(m && d)) : o()));
          }
          o();
        });
        let a = (this.transform && this.transform(e)) || e;
        a !== e &&
          (a.on('error', (c) => {
            this[De](c, e), t();
          }),
          e.pipe(a)),
          a.pipe(i);
      }
      [Fu](e, t) {
        let n = e.mode & 4095 || this.dmode;
        this[lr](e.absolute, n, (i) => {
          if (i) {
            this[De](i, e), t();
            return;
          }
          let s = 1,
            o = (a) => {
              --s === 0 && (t(), this[An](), e.resume());
            };
          e.mtime &&
            !this.noMtime &&
            (s++, Q.utimes(e.absolute, e.atime || new Date(), e.mtime, o)),
            this[Ei](e) && (s++, Q.chown(e.absolute, this[gi](e), this[_i](e), o)),
            o();
        });
      }
      [Ny](e) {
        (e.unsupported = !0),
          this.warn('TAR_ENTRY_UNSUPPORTED', `unsupported entry type: ${e.type}`, { entry: e }),
          e.resume();
      }
      [Cy](e, t) {
        this[bo](e, e.linkpath, 'symlink', t);
      }
      [Iy](e, t) {
        let n = et(Gt.resolve(this.cwd, e.linkpath));
        this[bo](e, n, 'link', t);
      }
      [Dy]() {
        this[Eo]++;
      }
      [An]() {
        this[Eo]--, this[ku]();
      }
      [Mu](e) {
        this[An](), e.resume();
      }
      [Pu](e, t) {
        return e.type === 'File' && !this.unlink && t.isFile() && t.nlink <= 1 && !vi;
      }
      [Lu](e) {
        this[Dy]();
        let t = [e.path];
        e.linkpath && t.push(e.linkpath), this.reservations.reserve(t, (n) => this[Oy](e, n));
      }
      [_o](e) {
        e.type === 'SymbolicLink'
          ? XT(this.dirCache)
          : e.type !== 'Directory' && WT(this.dirCache, e.absolute);
      }
      [Oy](e, t) {
        this[_o](e);
        let n = (a) => {
            this[_o](e), t(a);
          },
          i = () => {
            this[lr](this.cwd, this.dmode, (a) => {
              if (a) {
                this[De](a, e), n();
                return;
              }
              (this[bi] = !0), s();
            });
          },
          s = () => {
            if (e.absolute !== this.cwd) {
              let a = et(Gt.dirname(e.absolute));
              if (a !== this.cwd)
                return this[lr](a, this.dmode, (c) => {
                  if (c) {
                    this[De](c, e), n();
                    return;
                  }
                  o();
                });
            }
            o();
          },
          o = () => {
            Q.lstat(e.absolute, (a, c) => {
              if (c && (this.keep || (this.newer && c.mtime > e.mtime))) {
                this[Mu](e), n();
                return;
              }
              if (a || this[Pu](e, c)) return this[at](null, e, n);
              if (c.isDirectory()) {
                if (e.type === 'Directory') {
                  let u = !this.noChmod && e.mode && (c.mode & 4095) !== e.mode,
                    l = (f) => this[at](f, e, n);
                  return u ? Q.chmod(e.absolute, e.mode, l) : l();
                }
                if (e.absolute !== this.cwd) return Q.rmdir(e.absolute, (u) => this[at](u, e, n));
              }
              if (e.absolute === this.cwd) return this[at](null, e, n);
              zT(e.absolute, (u) => this[at](u, e, n));
            });
          };
        this[bi] ? s() : i();
      }
      [at](e, t, n) {
        if (e) {
          this[De](e, t), n();
          return;
        }
        switch (t.type) {
          case 'File':
          case 'OldFile':
          case 'ContiguousFile':
            return this[Uu](t, n);
          case 'Link':
            return this[Iy](t, n);
          case 'SymbolicLink':
            return this[Cy](t, n);
          case 'Directory':
          case 'GNUDumpDir':
            return this[Fu](t, n);
        }
      }
      [bo](e, t, n, i) {
        Q[n](t, e.absolute, (s) => {
          s ? this[De](s, e) : (this[An](), e.resume()), i();
        });
      }
    },
    go = (r) => {
      try {
        return [null, r()];
      } catch (e) {
        return [e, null];
      }
    },
    qu = class extends Si {
      [at](e, t) {
        return super[at](e, t, () => {});
      }
      [Lu](e) {
        if ((this[_o](e), !this[bi])) {
          let s = this[lr](this.cwd, this.dmode);
          if (s) return this[De](s, e);
          this[bi] = !0;
        }
        if (e.absolute !== this.cwd) {
          let s = et(Gt.dirname(e.absolute));
          if (s !== this.cwd) {
            let o = this[lr](s, this.dmode);
            if (o) return this[De](o, e);
          }
        }
        let [t, n] = go(() => Q.lstatSync(e.absolute));
        if (n && (this.keep || (this.newer && n.mtime > e.mtime))) return this[Mu](e);
        if (t || this[Pu](e, n)) return this[at](null, e);
        if (n.isDirectory()) {
          if (e.type === 'Directory') {
            let o = !this.noChmod && e.mode && (n.mode & 4095) !== e.mode,
              [a] = o
                ? go(() => {
                    Q.chmodSync(e.absolute, e.mode);
                  })
                : [];
            return this[at](a, e);
          }
          let [s] = go(() => Q.rmdirSync(e.absolute));
          this[at](s, e);
        }
        let [i] = e.absolute === this.cwd ? [] : go(() => VT(e.absolute));
        this[at](i, e);
      }
      [Uu](e, t) {
        let n = e.mode & 4095 || this.fmode,
          i = (a) => {
            let c;
            try {
              Q.closeSync(s);
            } catch (u) {
              c = u;
            }
            (a || c) && this[De](a || c, e), t();
          },
          s;
        try {
          s = Q.openSync(e.absolute, Fy(e.size), n);
        } catch (a) {
          return i(a);
        }
        let o = (this.transform && this.transform(e)) || e;
        o !== e && (o.on('error', (a) => this[De](a, e)), e.pipe(o)),
          o.on('data', (a) => {
            try {
              Q.writeSync(s, a, 0, a.length);
            } catch (c) {
              i(c);
            }
          }),
          o.on('end', (a) => {
            let c = null;
            if (e.mtime && !this.noMtime) {
              let u = e.atime || new Date(),
                l = e.mtime;
              try {
                Q.futimesSync(s, u, l);
              } catch (f) {
                try {
                  Q.utimesSync(e.absolute, u, l);
                } catch {
                  c = f;
                }
              }
            }
            if (this[Ei](e)) {
              let u = this[gi](e),
                l = this[_i](e);
              try {
                Q.fchownSync(s, u, l);
              } catch (f) {
                try {
                  Q.chownSync(e.absolute, u, l);
                } catch {
                  c = c || f;
                }
              }
            }
            i(c);
          });
      }
      [Fu](e, t) {
        let n = e.mode & 4095 || this.dmode,
          i = this[lr](e.absolute, n);
        if (i) {
          this[De](i, e), t();
          return;
        }
        if (e.mtime && !this.noMtime)
          try {
            Q.utimesSync(e.absolute, e.atime || new Date(), e.mtime);
          } catch {}
        if (this[Ei](e))
          try {
            Q.chownSync(e.absolute, this[gi](e), this[_i](e));
          } catch {}
        t(), e.resume();
      }
      [lr](e, t) {
        try {
          return Py.sync(et(e), {
            uid: this.uid,
            gid: this.gid,
            processUid: this.processUid,
            processGid: this.processGid,
            umask: this.processUmask,
            preserve: this.preservePaths,
            unlink: this.unlink,
            cache: this.dirCache,
            cwd: this.cwd,
            mode: t,
          });
        } catch (n) {
          return n;
        }
      }
      [bo](e, t, n, i) {
        try {
          Q[n + 'Sync'](t, e.absolute), i(), e.resume();
        } catch (s) {
          return this[De](s, e);
        }
      }
    };
  Si.Sync = qu;
  My.exports = Si;
});
var $y = E((nk, Gy) => {
  'use strict';
  var KT = un(),
    vo = Bu(),
    By = require('fs'),
    jy = xn(),
    qy = require('path'),
    ju = En();
  Gy.exports = (r, e, t) => {
    typeof r == 'function'
      ? ((t = r), (e = null), (r = {}))
      : Array.isArray(r) && ((e = r), (r = {})),
      typeof e == 'function' && ((t = e), (e = null)),
      e ? (e = Array.from(e)) : (e = []);
    let n = KT(r);
    if (n.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!n.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return (
      e.length && YT(n, e), n.file && n.sync ? JT(n) : n.file ? ZT(n, t) : n.sync ? QT(n) : ex(n)
    );
  };
  var YT = (r, e) => {
      let t = new Map(e.map((s) => [ju(s), !0])),
        n = r.filter,
        i = (s, o) => {
          let a = o || qy.parse(s).root || '.',
            c = s === a ? !1 : t.has(s) ? t.get(s) : i(qy.dirname(s), a);
          return t.set(s, c), c;
        };
      r.filter = n ? (s, o) => n(s, o) && i(ju(s)) : (s) => i(ju(s));
    },
    JT = (r) => {
      let e = new vo.Sync(r),
        t = r.file,
        n = By.statSync(t),
        i = r.maxReadSize || 16 * 1024 * 1024;
      new jy.ReadStreamSync(t, { readSize: i, size: n.size }).pipe(e);
    },
    ZT = (r, e) => {
      let t = new vo(r),
        n = r.maxReadSize || 16 * 1024 * 1024,
        i = r.file,
        s = new Promise((o, a) => {
          t.on('error', a),
            t.on('close', o),
            By.stat(i, (c, u) => {
              if (c) a(c);
              else {
                let l = new jy.ReadStream(i, { readSize: n, size: u.size });
                l.on('error', a), l.pipe(t);
              }
            });
        });
      return e ? s.then(e, e) : s;
    },
    QT = (r) => new vo.Sync(r),
    ex = (r) => new vo(r);
});
var Hy = E((fe) => {
  'use strict';
  fe.c = fe.create = Tm();
  fe.r = fe.replace = Su();
  fe.t = fe.list = co();
  fe.u = fe.update = Lm();
  fe.x = fe.extract = $y();
  fe.Pack = Ws();
  fe.Unpack = Bu();
  fe.Parse = ao();
  fe.ReadEntry = Ns();
  fe.WriteEntry = Yc();
  fe.Header = yn();
  fe.Pax = Ds();
  fe.types = Dc();
});
var Vy,
  ke,
  $r,
  Wy,
  zy,
  So,
  fr,
  hr,
  wo = q(() => {
    'use strict';
    (Vy = require('crypto')),
      (ke = require('fs')),
      ($r = Sr(require('path'))),
      (Wy = require('path'));
    gt();
    te();
    kt();
    Qr();
    (zy = rc()),
      (So = Hy()),
      ({ output: fr } = Y()),
      (hr = class {
        constructor(e, t, n, i) {
          this.encryption = e;
          this.errorReporter = t;
          this.context = i;
          this.storedHashes = [];
          this.axiosConfigBuilder = (e) => e;
          if (n.customProxyConfigPath) {
            let { fileServerProxyConfig: s } = require(
              (0, Wy.join)(process.cwd(), n.customProxyConfigPath)
            );
            this.axiosConfigBuilder = s ?? this.axiosConfigBuilder;
          }
        }
        async retrieve(e, t, n) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            fr.note({ title: `Nx Cloud: Downloading ${e}`, bodyLines: [`RETRIEVAL URL: ${t}`] });
          let i = this.createFileName(e, n),
            s = this.createCommitFilePath(e, n);
          try {
            await this.downloadFile(t, i, s),
              this.createCommitFile(s),
              A && fr.note({ title: `Nx Cloud: Downloaded ${e}` });
          } catch (o) {
            let a = o.message || o.toString(),
              c;
            throw (
              (a.includes('zlib') || a.includes('gzip') || a.includes('TAR_BAD_ARCHIVE')
                ? (c = `Failed to untar cached artifacts. The artifact may be corrupted. (Reference hash: ${e})`)
                : a.includes('decrypt')
                  ? (c = `Failed to decrypt artifact. Please review your encryption key. (Reference hash: ${e})`)
                  : (c = `Failed to download cached artifacts. Enable NX_VERBOSE_LOGGING for more details. (Reference hash: ${e})`),
              A &&
                fr.note({
                  title: `${c}`,
                  bodyLines: [
                    `- ${o.message}`,
                    `- Affected artifact: ${e} in context ${this.context}.`,
                  ],
                }),
              (this.context === 'dte-agent' || this.context === 'dte-main') &&
                (fr.note({
                  title: `An error occurred while trying to retrieve artifacts in the ${this.context} context. Hash: ${e}.`,
                  bodyLines: [
                    '- Please update the nx-cloud package to the latest version.',
                    '- Please update the nx package to 15.8.9 or higher. You can do it without updating the plugins.',
                    '- If you are not able to update the nx package, and you are passing --configuration to a run-many or an affected command, define that configuration for all the projects.',
                  ],
                }),
                process.env.NX_CLOUD_DEBUG_URLS == 'true' && fr.note({ title: `URL: ${e}` })),
              await this.errorReporter.reportError(c),
              new Error(c))
            );
          }
        }
        async store(e, t, n) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            fr.note({ title: `Nx Cloud: Storing ${e}`, bodyLines: [`STORAGE URL: ${t}`] });
          let i;
          if (process.env.NRWL_INTERNAL_TAR_DEBUG) {
            let o = 1,
              a = !1,
              c = [];
            for (; o <= 3 && !a; ) {
              i = await this.createFile(e, n);
              let u = `/tmp/${e}/attempt${o}`;
              (0, ke.mkdirSync)(u, { recursive: !0 });
              try {
                let l = (0, ke.createReadStream)(i).pipe(So.x({ cwd: u }));
                await this.convertStreamIntoPromise(l), (a = !0);
              } catch (l) {
                console.error(l), await Ge(5e3);
              }
              c.push({ attempt: o, success: a }), o++;
            }
            if (c.some((u) => !u.success)) {
              console.error(JSON.stringify(c, null, 2));
              let u = c
                .filter((l) => !l.success)
                .map((l) => l.attempt)
                .join(', ');
              throw new Error(`Untar failed for hash ${e} in attempts ${u} out of ${c.length}`);
            }
          } else i = await this.createFile(e, n);
          await this.uploadFile(t, i),
            this.storedHashes.push(e),
            A && fr.note({ title: `Nx Cloud: Stored ${e}` });
        }
        createFileName(e, t) {
          return $r.join(t, `${e}.tar.gz`);
        }
        async downloadFile(e, t, n) {
          var o;
          let i = Ce('retrieveFile'),
            s;
          try {
            let a = new URL(e),
              c = a.origin + a.pathname,
              u = {};
            for (let [l, f] of a.searchParams.entries()) u[l] = f;
            (s = await ce(() =>
              zy(
                c,
                this.axiosConfigBuilder({
                  method: 'GET',
                  responseType: 'stream',
                  maxContentLength: Et ? Zn : Qn,
                  maxBodyLength: Et ? Zn : Qn,
                  timeout: Et ? Jn : 6e4,
                  params: u,
                })
              )
            )),
              i.recordMetric({ ...ne(s), payloadSize: s.data.headers['content-length'] });
          } catch (a) {
            throw (
              (i.recordMetric(
                (o = a == null ? void 0 : a.axiosException) != null && o.response
                  ? ne(a.axiosException.response)
                  : Ie
              ),
              a)
            );
          }
          if ((0, ke.existsSync)(t)) {
            let a = 0;
            for (; a++ < 50; ) {
              if ((0, ke.existsSync)(n)) return;
              await Ge(500);
            }
          }
          if (this.encryption.hasEncryption()) {
            await new Promise((c) => {
              s.data.pipe((0, ke.createWriteStream)(t)).on('close', () => c(null));
            }),
              this.encryption.decryptFile(t);
            let a = (0, ke.createReadStream)(t).pipe(So.x({ cwd: $r.dirname(t) }));
            return this.convertStreamIntoPromise(a);
          } else {
            let a = s.data.pipe(So.x({ cwd: $r.dirname(t) }));
            return this.convertStreamIntoPromise(a);
          }
        }
        convertStreamIntoPromise(e) {
          return new Promise((t, n) => {
            e.on('error', (i) => {
              i.tarCode === 'TAR_ABORT' && i.message.indexOf('incorrect header check') > -1
                ? (console.warn('FileStorage: Decompression OK, Trailing garbage ignored.'),
                  t(null))
                : n(i);
            }),
              e.on('finish', () => t(null));
          });
        }
        createCommitFile(e) {
          (0, ke.writeFileSync)(e, 'true');
        }
        createCommitFilePath(e, t) {
          return $r.join(t, `${e}.commit`);
        }
        async createFile(e, t) {
          let n = this.createFileName(e, t);
          try {
            (0, ke.unlinkSync)($r.join(t, e, 'source'));
          } catch {}
          return (
            await So.c({ gzip: !0, file: n, cwd: t }, [e]),
            this.encryption.hasEncryption() && this.encryption.encryptFile(n),
            n
          );
        }
        async uploadFile(e, t) {
          var a;
          process.env.NX_CLOUD_ECONNABORTED_LOGGING == 'true' &&
            fr.note({ title: `Attempting to upload file with path: ${t}` });
          let n = Ce('storeFile'),
            i = (0, ke.readFileSync)(t),
            s = this.generateMD5(i),
            o = this.getFileUploadHeaders(e, s);
          try {
            let c = await ce(() =>
              zy(
                e,
                this.axiosConfigBuilder({
                  method: 'PUT',
                  data: i,
                  headers: o,
                  maxContentLength: Et ? Zn : Qn,
                  maxBodyLength: Et ? Zn : Qn,
                  timeout: Et ? Jn : 12e4,
                })
              )
            );
            n.recordMetric({ ...ne(c), payloadSize: c.config.headers['Content-Length'] });
          } catch (c) {
            if (c.message && c.message.includes('RetentionPolicyNotMet')) return;
            throw (
              (n.recordMetric(
                (a = c == null ? void 0 : c.axiosException) != null && a.response
                  ? ne(c.axiosException.response)
                  : Ie
              ),
              c)
            );
          }
        }
        generateMD5(e) {
          let t = (0, Vy.createHash)('md5');
          return t.update(e), t.digest('base64');
        }
        getFileUploadHeaders(e, t) {
          let n = e.includes('/file/'),
            i = { 'Content-Type': 'application/octet-stream', 'x-ms-blob-type': 'BlockBlob' };
          return n && (i['Content-MD5'] = t), i;
        }
      });
  });
var Ro,
  Xy = q(() => {
    'use strict';
    te();
    si();
    Ro = class {
      constructor(e, t, n) {
        this.runContext = e;
        this.taskExecutions = t;
        this.distributedExecutionId = n;
      }
      printCacheHitsMessage() {
        if (ut(this.distributedExecutionId) || !this.runContext.runUrl) return;
        let e = !!this.taskExecutions.find((s) => s.status !== 0),
          t = !!this.taskExecutions.find((s) => s.cacheStatus === 'cache-miss'),
          n = this.taskExecutions
            .filter((s) => this.runContext.statuses[s.hash] === 'remote-cache-hit')
            .map((s) => s.projectName),
          i = [];
        if (e) i.push(`View structured, searchable error logs at ${this.runContext.runUrl}`);
        else if (t) i.push(`View logs and investigate cache misses at ${this.runContext.runUrl}`);
        else if (n.length > 0) {
          let s = n.length === 1 ? n[0] : `${n.length} tasks`;
          i.push(`Nx Cloud made it possible to reuse ${s}: ${this.runContext.runUrl}`);
        } else
          this.runContext.runUrl &&
            i.push(`View logs and run details at ${this.runContext.runUrl}`);
        i.length > 0 && Yt(i.join(' '));
      }
    };
  });
var tx,
  Dn,
  Gu = q(() => {
    'use strict';
    si();
    ({ output: tx } = Y()),
      (Dn = class {
        constructor(e) {
          this.options = e;
          this.cacheError = null;
          this.apiError = null;
          this.message = null;
        }
        get anyErrors() {
          return this.cacheError || this.apiError;
        }
        printMessages() {
          if (this.anyErrors) {
            let e = [];
            this.cacheError && e.push(`- ${this.cacheError}`),
              this.apiError && this.apiError !== this.cacheError && e.push(`- ${this.apiError}`),
              tx.warn({ title: 'Nx Cloud Problems', bodyLines: e });
          }
          this.message && Yt(this.message);
        }
        extractErrorMessage(e, t) {
          if (e.code === 'ECONNABORTED')
            return (
              process.env.NX_CLOUD_ECONNABORTED_LOGGING == 'true' &&
                (console.log('[NX CLOUD DEBUG] Request config without `data`'),
                delete e.config.data,
                console.log(JSON.stringify(e.config, null, 2))),
              `Cannot connect to Nx Cloud (scope: ${t}, code: ${e.code}). Try invoking the command with the NX_CLOUD_NO_TIMEOUTS env variable set to 'true'.`
            );
          if (
            e.code === 'ECONNREFUSED' ||
            e.code === 'EAI_AGAIN' ||
            e.code === 'ENOTFOUND' ||
            e.code === 'EPROTO'
          )
            return `Cannot connect to Nx Cloud (scope: ${t}, code: ${e.code}).`;
          if (e.response && e.response.status === 401)
            return e.response.data.message ? e.response.data.message : e.response.data;
          if (e.response && e.response.status === 402)
            return this.options.showUsageWarnings === !1 ||
              this.options.showUsageWarnings === void 0
              ? null
              : e.response.data.message
                ? e.response.data.message
                : e.response.data;
          {
            let n = '';
            e.response && e.response.data && e.response.data.message
              ? (n = `. ${e.response.data.message}`)
              : e.response && e.response.data && (n = `. ${e.response.data}`);
            let i = e.code ? ` (code: ${e.code})` : '';
            return `${e.message}${n}${i}`;
          }
        }
      });
  });
var dr,
  To = q(() => {
    'use strict';
    dr = class {
      constructor(e = []) {
        this.normalizedMaskedProperties = [];
        this.normalizedMaskedProperties = Array.from(new Set(e)).map(this.toCamelCase);
      }
      obfuscate(e) {
        return (
          this.normalizedMaskedProperties.length &&
            (this.normalizedMaskedProperties.forEach((n) => {
              let i = new RegExp(`(--${n}=)[\\S]*`, 'g');
              e = e.replaceAll(i, '$1********');
            }),
            this.normalizedMaskedProperties
              .filter((n) => n in process.env)
              .map((n) => process.env[n])
              .forEach((n) => {
                e = e.replaceAll(n, '********');
              })),
          e
        );
      }
      toCamelCase(e) {
        return e.indexOf('-') > 1 ? e.toLowerCase().replace(/-(.)/g, (t, n) => n.toUpperCase()) : e;
      }
    };
  });
function kn(r) {
  return r.overrides.__overrides_unparsed__
    ? r.overrides.__overrides_unparsed__.join(' ')
    : $u(r.overrides).join(' ');
}
function $u(r) {
  let e = [];
  for (let t of Object.keys(r)) {
    let n = r[t];
    Ky(t, n, e);
  }
  return e;
}
function Ky(r, e, t) {
  if (r === '_') t.push(...e);
  else if (e === !0) t.push(`--${r}`);
  else if (e === !1) t.push(`--no-${r}`);
  else if (Array.isArray(e)) e.forEach((n) => Ky(r, n, t));
  else if (typeof e == 'string' && rx(e)) {
    let n = e.replace(/"/g, String.raw`\"`);
    t.push(`--${r}="${n}"`);
  } else e != null && t.push(`--${r}=${e}`);
}
function rx(r) {
  return r.includes(' ') || r.includes('{') || r.includes('"');
}
var wi = q(() => {
  'use strict';
});
function xo(r, e, t, n, i) {
  let s;
  r
    ? r.startsWith('./')
      ? (s = (0, Vu.join)(Yy, r))
      : (s = r)
    : (s = (0, Vu.join)(Yy, 'node_modules', '.cache', 'nx'));
  try {
    let o = ox(s, t),
      a = e.obfuscate(o);
    if (gh) return a;
    let c = n === 'cache-miss' ? (i === 0 ? ix : nx) : sx;
    return a.length > c
      ? `TRUNCATED

${a.slice(a.length - c)}`
      : a;
  } catch (o) {
    return process.env.NX_VERBOSE_LOGGING === 'true' && console.error(o), '';
  }
}
function ox(r, e) {
  try {
    return (0, Hu.readFileSync)(zu.join(r, 'terminalOutputs', e)).toString();
  } catch {
    try {
      return (0, Hu.readFileSync)(zu.join(r, e, 'terminalOutput')).toString();
    } catch {
      return '';
    }
  }
}
var Hu,
  zu,
  Vu,
  Yy,
  nx,
  ix,
  sx,
  Wu = q(() => {
    'use strict';
    (Hu = require('fs')), (zu = Sr(require('path'))), (Vu = require('path'));
    te();
    ({ workspaceRoot: Yy } = Y()), (nx = 2e5), (ix = 2e4), (sx = 2e4);
  });
var Jy,
  Oo,
  Zy = q(() => {
    'use strict';
    Jy = require('crypto');
    wi();
    Wu();
    Oo = class {
      constructor(e, t, n, i, s, o) {
        this.runContext = e;
        this.cacheDirectory = t;
        this.collectTerminalOutput = n;
        this.cacheableOperations = i;
        this.outputObfuscator = s;
        this.tasks = o;
      }
      scheduleTask(e) {
        this.runContext.scheduledTasks.push(e);
      }
      startTask(e) {
        this.tasks.push({
          taskId: e.id,
          startTime: new Date().toISOString(),
          target: e.target.target,
          projectName: e.target.project,
          hash: e.hash,
          hashDetails: this.cleanUpHashDetails(e.hashDetails),
          params: kn(e),
          uploadedToStorage: !1,
        });
      }
      endTasks(e) {
        for (let t of e) {
          let n,
            i = t.status === 'remote-cache',
            s = t.status === 'cache',
            o = t.status === 'local-cache' || t.status === 'local-cache-kept-existing' || s;
          this.runContext.statuses[t.task.hash]
            ? (n = this.runContext.statuses[t.task.hash])
            : i
              ? (n = 'remote-cache-hit')
              : o
                ? (n = 'local-cache-hit')
                : (n = 'cache-miss'),
            this.updateStartedTask(t, n);
        }
      }
      endCommand() {}
      updateStartedTask(e, t) {
        let n = this.tasks.find((i) => i.taskId === e.task.id);
        if (!n) throw new Error(`Cannot find task ${e.task.id}`);
        e != null && e.startTime && e != null && e.endTime
          ? ((n.startTime = new Date(e.startTime).toISOString()),
            (n.endTime = new Date(e.endTime).toISOString()))
          : (n.endTime = new Date().toISOString()),
          (n.status = e.code),
          (n.params = this.outputObfuscator.obfuscate(n.params)),
          (n.cacheStatus = t),
          this.collectTerminalOutput &&
            (n.terminalOutput = this.getTerminalOutput(e.task.hash, n.cacheStatus, e.code));
      }
      getTerminalOutput(e, t, n) {
        return xo(this.cacheDirectory, this.outputObfuscator, e, t, n);
      }
      cleanUpHashDetails(e) {
        let t = {},
          n = [];
        for (let i of Object.keys(e.nodes))
          i.startsWith('npm:') ? n.push(e.nodes[i]) : (t[i] = e.nodes[i]);
        if ((n.sort(), n.length > 0)) {
          let i = (0, Jy.createHash)('md5');
          i.update(n.join('|')), (t.npmDependencies = i.digest('base64'));
        }
        return { nodes: t, runtime: e.runtime, implicitDeps: e.implicitDeps };
      }
    };
  });
var Xu,
  Co,
  Qy = q(() => {
    'use strict';
    te();
    ({ output: Xu } = Y()),
      (Co = class {
        constructor(e, t, n, i, s, o) {
          this.messages = e;
          this.api = t;
          this.runContext = n;
          this.fileStorage = i;
          this.distributedExecutionId = s;
          this.storeInCurrentProcess = o;
          this.storeRequests = [];
          this.delayedStoreRequests = [];
        }
        async retrieve(e, t) {
          if (this.messages.cacheError) return !1;
          let n = await this.hashUrls(e);
          if (!n || !n.get)
            return (
              A && Xu.note({ title: `Nx Cloud: Cache miss ${e}.` }),
              (this.runContext.statuses[e] = 'cache-miss'),
              !1
            );
          try {
            return (
              await this.fileStorage.retrieve(e, n.get, t),
              (this.runContext.statuses[e] = 'remote-cache-hit'),
              !0
            );
          } catch (i) {
            let s = i.axiosException ?? i;
            return (
              s.response && s.response.status === 404
                ? A && Xu.note({ title: `Nx Cloud: Cache miss ${e}. Status 404.` })
                : (this.messages.cacheError = this.messages.extractErrorMessage(s, 'storage')),
              (this.runContext.statuses[e] = 'cache-miss'),
              !1
            );
          }
        }
        async store(e, t) {
          if (this.messages.cacheError) return !1;
          let n = Promise.resolve().then(async () => {
            let i = await this.hashUrls(e);
            if (!i) return !1;
            if (!i.put)
              return (
                A &&
                  Xu.note({
                    title: `Nx Cloud: Skipping storing ${e}.`,
                    bodyLines: [
                      'There are several reasons why this can happen.',
                      'Maybe you are using a read-only token or the artifact has already being uploaded.',
                    ],
                  }),
                !0
              );
            if (!this.storeInCurrentProcess)
              return this.delayedStoreRequests.push({ hash: e, url: i.put }), !0;
            try {
              return await this.fileStorage.store(e, i.put, t), !0;
            } catch (s) {
              let o = s.axiosException ?? s;
              return (
                (this.messages.cacheError = this.messages.extractErrorMessage(o, 'storage')), !1
              );
            }
          });
          return this.storeRequests.push(n), n;
        }
        async hashUrls(e) {
          if (e in this.runContext.requests) {
            let t = (await this.runContext.requests[e])[e];
            return (
              this.setTaskArtifactIdOnRunContext(e, t == null ? void 0 : t.artifactId),
              t == null ? void 0 : t.artifactUrls
            );
          } else {
            let t = this.runContext.scheduledTasks
              .filter((s) => !this.runContext.requests[s.hash])
              .map((s) => s.hash);
            t.indexOf(e) === -1 && t.push(e);
            let n = this.api.startRun(this.distributedExecutionId, t);
            t.forEach((s) => {
              this.runContext.requests[s] = n;
            });
            let i = (await n)[e];
            return (
              this.setTaskArtifactIdOnRunContext(e, i == null ? void 0 : i.artifactId),
              i == null ? void 0 : i.artifactUrls
            );
          }
        }
        async waitForStoreRequestsToComplete() {
          if (!(await Promise.all(this.storeRequests).then((t) => t.reduce((n, i) => n && i, !0))))
            throw new Error('Error when storing artifacts');
        }
        setTaskArtifactIdOnRunContext(e, t) {
          let n = this.runContext.allTasks.find((i) => i.hash === e);
          if (n === void 0) throw Error('Could not find task with hash $hash');
          n.artifactId = t;
        }
      });
  });
function rE() {
  return Math.floor(Math.random() * 100) + 1 <= (Ra ? 100 : ax) ? cx() : null;
}
function cx() {
  try {
    let r = (0, eE.execSync)('git log --since="30 days ago" --format="%ae"', {
      stdio: 'pipe',
      windowsHide: !0,
    })
      .toString()
      .trim().split(`
`);
    return [...new Set(r)].map((e) => {
      let t = (0, tE.createHash)('md5');
      return t.update(e), t.digest('base64');
    });
  } catch {
    return null;
  }
}
var eE,
  tE,
  ax,
  nE = q(() => {
    'use strict';
    (eE = require('child_process')), (tE = require('crypto'));
    te();
    ax = 2;
  });
function xt() {
  for (let r of Object.values(ux))
    if (r.detectorFn(process.env)) {
      let e = r.contextRetrieverFn(process.env);
      return A && console.log(JSON.stringify(e, null, 2)), e;
    }
  return A && console.log('[Nx Cloud] Unable to detect a VCS context from the environment.'), null;
}
function lx(r) {
  return r.CIRCLECI === 'true';
}
function fx(r) {
  A && console.log('[Nx Cloud] Detected Env: CircleCI');
  let e = (n) => {
      if (n.CIRCLE_PR_NUMBER !== void 0) return n.CIRCLE_PR_NUMBER;
      if (n.CIRCLE_PULL_REQUEST !== void 0) {
        let i = n.CIRCLE_PULL_REQUEST.split('/');
        return i[i.length - 1];
      }
      return n.CIRCLE_BRANCH !== void 0 ? n.CIRCLE_BRANCH : 'unknown';
    },
    t = (n) =>
      n.CIRCLE_USERNAME !== void 0
        ? n.CIRCLE_USERNAME
        : n.CIRCLE_PR_USERNAME
          ? n.CIRCLE_PR_USERNAME
          : null;
  return {
    branch: e(r),
    ref: r.CIRCLE_BRANCH ?? null,
    title: Hr(),
    headSha: r.CIRCLE_SHA1 ?? 'unknown',
    baseSha: null,
    commitLink: r.CIRCLE_PULL_REQUEST ?? null,
    author: t(r),
    authorUrl: null,
    authorAvatarUrl: null,
    repositoryUrl: r.CIRCLE_REPOSITORY_URL ?? null,
  };
}
function hx(r) {
  return r.TRAVIS === 'true';
}
function dx(r) {
  return (
    A && console.log('[Nx Cloud] Detected Env: TravisCI'),
    {
      branch: ((t) =>
        t.TRAVIS_EVENT_TYPE === 'pull_request' ? t.TRAVIS_PULL_REQUEST : t.TRAVIS_BRANCH)(r),
      ref: null,
      title: Hr(),
      headSha: r.TRAVIS_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Ku(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: null,
    }
  );
}
function px(r) {
  return r.GITHUB_ACTIONS === 'true';
}
function mx(r) {
  A && console.log('[Nx Cloud] Detected Env: GitHub Actions');
  let e = (i) => {
      if (i.GITHUB_REF) {
        let s = i.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
        if (s) return s[1];
      }
      return i.GITHUB_HEAD_REF
        ? i.GITHUB_HEAD_REF
        : i.GITHUB_REF_NAME
          ? i.GITHUB_REF_NAME
          : 'unknown';
    },
    t = (i) => {
      let s = `${i.GITHUB_SERVER_URL}/${i.GITHUB_REPOSITORY}`;
      return i.GITHUB_EVENT_NAME === 'pull_request'
        ? `${s}/pull/${e(i)}`
        : `${s}/commit/${i.GITHUB_SHA}`;
    },
    n = (i) => (i.GITHUB_HEAD_REF ? i.GITHUB_HEAD_REF : i.GITHUB_REF ? i.GITHUB_REF : null);
  return {
    branch: e(r),
    ref: n(r),
    title: Hr(),
    headSha: r.GITHUB_SHA ?? 'unknown',
    baseSha: null,
    commitLink: t(r),
    author: r.GITHUB_ACTOR ?? null,
    authorUrl: `${r.GITHUB_SERVER_URL}/${r.GITHUB_ACTOR}`,
    authorAvatarUrl: `${r.GITHUB_SERVER_URL}/${r.GITHUB_ACTOR}.png`,
    repositoryUrl: `${r.GITHUB_SERVER_URL}/${r.GITHUB_REPOSITORY}`,
  };
}
function yx(r) {
  return r.BITBUCKET_BUILD_NUMBER != null;
}
function Ex(r) {
  return (
    A && console.log('[Nx Cloud] Detected Env: BitBucket Pipelines'),
    {
      branch: r.BITBUCKET_PR_ID ?? r.BITBUCKET_BRANCH ?? 'unknown',
      ref: null,
      title: Hr(),
      headSha: r.BITBUCKET_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Ku(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: r.BITBUCKET_GIT_HTTP_ORIGIN ?? null,
    }
  );
}
function gx(r) {
  return r.BUILD_BUILDID !== void 0 && r.AGENT_NAME !== void 0;
}
function _x(r) {
  return (
    A && console.log('[Nx Cloud] Detected Env: Azure DevOps'),
    {
      branch: r.SYSTEM_PULLREQUEST_PULLREQUESTNUMBER ?? r.BUILD_SOURCEBRANCHNAME ?? 'unknown',
      ref: null,
      title: Hr(),
      headSha: Ke() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: r.BUILD_REQUESTEDFOR ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: r.SYSTEM_PULLREQUEST_SOURCEREPOSITORYURI ?? r.BUILD_REPOSITORY_URI ?? null,
    }
  );
}
function bx(r) {
  return r.GITLAB_CI === 'true';
}
function vx(r) {
  return (
    A && console.log('[Nx Cloud] Detected Env: GitLab Pipelines'),
    {
      branch: ((t) =>
        t.CI_MERGE_REQUEST_IID
          ? t.CI_MERGE_REQUEST_IID
          : t.CI_COMMIT_BRANCH
            ? t.CI_COMMIT_BRANCH
            : 'unknown')(r),
      ref: r.CI_COMMIT_REF_NAME ?? null,
      title: Hr(),
      headSha: Ke() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: r.GITLAB_USER_NAME ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: r.CI_REPOSITORY_URL ?? null,
    }
  );
}
function Sx(r) {
  return r.NX_CLOUD_VERSION != null && r.NX_CLOUD_VERSION !== '';
}
function wx(r) {
  return (
    A && console.log('[Nx Cloud] Detected Env: Nx Cloud'),
    {
      branch: Rx() ?? 'unknown',
      ref: Tx(),
      title: Hr(),
      headSha: Ke() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Ku(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: null,
    }
  );
}
function Hr() {
  try {
    return (0, Ri.execSync)('git log -1 --pretty=%B', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function Ku() {
  try {
    return (0, Ri.execSync)('git log -1 --pretty=%aN', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function Rx() {
  try {
    return (0, Ri.execSync)('git branch --show-current', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function Tx() {
  try {
    return (0, Ri.execSync)('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
var Ri,
  ux,
  Ti = q(() => {
    'use strict';
    Ri = require('child_process');
    te();
    ux = {
      CIRCLE_CI: { detectorFn: lx, contextRetrieverFn: fx },
      TRAVIS_CI: { detectorFn: hx, contextRetrieverFn: dx },
      GITHUB_ACTIONS: { detectorFn: px, contextRetrieverFn: mx },
      BITBUCKET_PIPELINES: { detectorFn: yx, contextRetrieverFn: Ex },
      AZURE_DEVOPS: { detectorFn: gx, contextRetrieverFn: _x },
      GITLAB_PIPELINES: { detectorFn: bx, contextRetrieverFn: vx },
      NX_CLOUD: { detectorFn: Sx, contextRetrieverFn: wx },
    };
  });
function Io(r) {
  if (!r) return null;
  let e = {};
  Object.entries(r.nodes).forEach(([n, i]) => {
    i.type !== 'npm' && (e[n] = i);
  });
  let t = {};
  return (
    Object.entries(r.dependencies).forEach(([n, i]) => {
      n.startsWith('npm:') || (t[n] = i.filter((s) => !s.target.startsWith('npm:')));
    }),
    { nodes: e, dependencies: t }
  );
}
var Yu = q(() => {
  'use strict';
});
var iE,
  sE,
  oE,
  No,
  Ln,
  Ju = q(() => {
    'use strict';
    (iE = require('fs')), (sE = require('util')), (oE = require('zlib'));
    gt();
    nE();
    te();
    Ti();
    kt();
    Yu();
    ({ output: No } = Y()),
      (Ln = class {
        constructor(e, t, n, i) {
          this.messages = e;
          this.runContext = t;
          this.machineInfo = i;
          this.apiAxiosInstance = Oe(n);
        }
        async startRun(e, t) {
          var i;
          if (this.messages.apiError) return {};
          let n = Ce('startRun');
          try {
            let s = {
              meta: { nxCloudVersion: this.nxCloudVersion() },
              branch: me(),
              runGroup: ve(),
              ciExecutionId: je(),
              ciExecutionEnv: Te(),
              distributedExecutionId: e,
              hashes: t,
              machineInfo: this.machineInfo,
              vcsContext: xt(),
            };
            A &&
              No.note({
                title: 'RunStart',
                bodyLines: [
                  `
` + JSON.stringify(s, null, 2),
                ],
              });
            let o = await sc('RunStart duration', () =>
              ce(() => this.apiAxiosInstance.post('/nx-cloud/v2/runs/start', s))
            );
            return (
              n.recordMetric(ne(o)),
              o.data && o.data.message && (this.messages.message = o.data.message),
              !o.data || !o.data.artifacts
                ? ((this.messages.apiError = `Invalid Nx Cloud response: ${JSON.stringify(
                    o.data
                  )}`),
                  {})
                : o.data.artifacts
            );
          } catch (s) {
            return (
              n.recordMetric(
                (i = s == null ? void 0 : s.axiosException) != null && i.response
                  ? ne(s.axiosException.response)
                  : Ie
              ),
              (this.messages.apiError = this.messages.extractErrorMessage(s, 'api')),
              {}
            );
          }
        }
        createEndRunReqBody(e, t, n, i, s) {
          let o = Io(i),
            a = {
              meta: { nxCloudVersion: this.nxCloudVersion() },
              tasks: t,
              run: e,
              linkId: s,
              ...n,
              projectGraph: o,
              machineInfo: this.machineInfo,
              vcsContext: xt(),
              hashedContributors: rE(),
            };
          return JSON.stringify(a);
        }
        async endRun(e, t, n, i, s) {
          var l;
          if (this.messages.apiError) return !1;
          (e.runGroup = null), (e.branch = null);
          let o = this.createEndRunReqBody(e, t, n, null, s);
          o.length > 20 * 1e3 * 1e3 &&
            (o = this.createEndRunReqBody(
              e,
              t.map((f) => ({ ...f, hashDetails: void 0 })),
              n,
              i,
              s
            ));
          let a = Buffer.from(o),
            c = await (0, sE.promisify)(oE.gzip)(a),
            u = Ce('endRun');
          try {
            if (A) {
              let h = t.map((d) => ({
                ...d,
                terminalOutput: d.terminalOutput ? `${d.terminalOutput.slice(0, 20)}...` : void 0,
              }));
              No.note({
                title: 'RunEnd. Completed tasks',
                bodyLines: [
                  `
` + JSON.stringify(h, null, 2),
                ],
              });
            }
            let f = await sc('RunEnd duration', () =>
              ce(() =>
                this.apiAxiosInstance.post('/nx-cloud/runs/end', c, {
                  headers: {
                    ...this.apiAxiosInstance.defaults.headers,
                    'Content-Encoding': 'gzip',
                    'Content-Type': 'application/octet-stream',
                  },
                })
              )
            );
            if (f) {
              if ((u.recordMetric(ne(f)), f.data && f.data.runUrl && f.data.status === 'success'))
                return (this.runContext.runUrl = f.data.runUrl), !0;
              f.data && f.data.status
                ? (this.messages.apiError = `Invalid end run response: ${JSON.stringify(
                    f.data.message
                  )}`)
                : f.data && typeof f.data == 'string'
                  ? f.data !== 'success' &&
                    (this.messages.apiError = `Invalid end run response: ${JSON.stringify(f.data)}`)
                  : (this.messages.apiError = `Invalid end run response: ${JSON.stringify(
                      f.data
                    )}`),
                A &&
                  No.note({
                    title: 'Invalid end run response',
                    bodyLines: [JSON.stringify(f.data, null, 2)],
                  });
            } else
              No.error({
                title: 'Nx Cloud: Unknown Error Occurred',
                bodyLines: [
                  'Run completion responded with `undefined`.',
                  'Run Details:',
                  JSON.stringify(e, null, 2),
                  'Stack Trace:',
                  JSON.stringify(new Error().stack, null, 2),
                ],
              });
            return !1;
          } catch (f) {
            u.recordMetric(
              (l = f == null ? void 0 : f.axiosException) != null && l.response
                ? ne(f.axiosException.response)
                : Ie
            );
            let h = f.axiosException ?? f;
            return (this.messages.apiError = this.messages.extractErrorMessage(h, 'api')), !1;
          }
        }
        nxCloudVersion() {
          try {
            let e = JSON.parse((0, iE.readFileSync)('package.json').toString());
            return e.devDependencies['nx-cloud'] || e.devDependencies['@nrwl/nx-cloud'];
          } catch {
            return 'unknown';
          }
        }
      });
  });
function Ao() {
  let r = '';
  for (let e = 0; e < 10; ++e) r += aE[Math.floor(Math.random() * aE.length)];
  return r;
}
var cE,
  xx,
  Ox,
  aE,
  Zu = q(() => {
    'use strict';
    (cE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      (xx = '0123456789'),
      (Ox = cE.toLowerCase()),
      (aE = cE + Ox + xx);
  });
var dt = E((qe) => {
  'use strict';
  var Qu = require('path');
  Rr();
  try {
    try {
      let r;
      try {
        r = ie('nx/src/utils/app-root').workspaceRoot;
      } catch {
        r = ie('nx/src/utils/workspace-root').workspaceRoot;
      }
      let { getDependencyConfigs: e } = ie('nx/src/tasks-runner/utils'),
        t = ie('nx/tasks-runners/default').default,
        { CompositeLifeCycle: n } = ie('nx/src/tasks-runner/life-cycle'),
        i = null;
      try {
        i = ie('nx/src/index').initTasksRunner;
      } catch {}
      let s;
      try {
        s = ie('nx/src/devkit-exports').cacheDir;
      } catch {
        try {
          s = ie('nx/src/utils/cache-directory').cacheDir;
        } catch {
          s = (0, Qu.join)(r, './node_modules/.cache/nx');
        }
      }
      let o = ie('nx/src/tasks-runner/utils').isCacheableTask;
      (qe.cacheDirectory = s),
        (qe.runnerReturnsPromise = !0),
        (qe.tasksRunner = t),
        (qe.CompositeLifeCycle = n),
        (qe.getDependencyConfigs = e),
        (qe.initTasksRunner = i),
        (qe.isCacheableTask = o);
    } catch {
      let { appRootPath: e } = ie('@nrwl/tao/src/utils/app-root'),
        { getDependencyConfigs: t } = ie('@nrwl/workspace/src/tasks-runner/utils'),
        { tasksRunnerV2: n } = ie('@nrwl/workspace/src/tasks-runner/tasks-runner-v2'),
        i;
      try {
        i = ie('@nrwl/workspace/src/tasks-runner/life-cycle').CompositeLifeCycle;
      } catch {}
      let s = ie('@nrwl/workspace/src/tasks-runner/utils').isCacheableTask;
      (qe.cacheDirectory = (0, Qu.join)(e, './node_modules/.cache/nx')),
        (qe.runnerReturnsPromise = !1),
        (qe.tasksRunner = n),
        (qe.CompositeLifeCycle = i),
        (qe.getDependencyConfigs = t),
        (qe.initTasksRunner = null),
        (qe.isCacheableTask = s);
    }
  } catch (r) {
    process.env.NX_VERBOSE_LOGGING === 'true' && console.log(r),
      console.error('NX CLOUD ERROR'),
      console.error('---------------------------------------'),
      console.error(
        'This version of Nx Cloud is incompatible with the @nrwl/* and @nx/* packages in your workspace, or Nx was not installed properly.'
      ),
      console.error(''),
      console.error('Verify your install step was successful, and if it was,'),
      console.error(
        'match your @nrwl/nx-cloud version to the same major version of your @nx/* and @nrwl/* packages and try again.'
      ),
      console.error('---------------------------------------'),
      process.exit(1);
  }
});
var We = E((el) => {
  'use strict';
  el.fromCallback = function (r) {
    return Object.defineProperty(
      function () {
        if (typeof arguments[arguments.length - 1] == 'function') r.apply(this, arguments);
        else
          return new Promise((e, t) => {
            (arguments[arguments.length] = (n, i) => {
              if (n) return t(n);
              e(i);
            }),
              arguments.length++,
              r.apply(this, arguments);
          });
      },
      'name',
      { value: r.name }
    );
  };
  el.fromPromise = function (r) {
    return Object.defineProperty(
      function () {
        let e = arguments[arguments.length - 1];
        if (typeof e != 'function') return r.apply(this, arguments);
        r.apply(this, arguments).then((t) => e(null, t), e);
      },
      'name',
      { value: r.name }
    );
  };
});
var lE = E((Bk, uE) => {
  'use strict';
  var pr = require('constants'),
    Cx = process.cwd,
    Do = null,
    Ix = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function () {
    return Do || (Do = Cx.call(process)), Do;
  };
  try {
    process.cwd();
  } catch {}
  typeof process.chdir == 'function' &&
    ((tl = process.chdir),
    (process.chdir = function (r) {
      (Do = null), tl.call(process, r);
    }),
    Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, tl));
  var tl;
  uE.exports = Nx;
  function Nx(r) {
    pr.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && e(r),
      r.lutimes || t(r),
      (r.chown = s(r.chown)),
      (r.fchown = s(r.fchown)),
      (r.lchown = s(r.lchown)),
      (r.chmod = n(r.chmod)),
      (r.fchmod = n(r.fchmod)),
      (r.lchmod = n(r.lchmod)),
      (r.chownSync = o(r.chownSync)),
      (r.fchownSync = o(r.fchownSync)),
      (r.lchownSync = o(r.lchownSync)),
      (r.chmodSync = i(r.chmodSync)),
      (r.fchmodSync = i(r.fchmodSync)),
      (r.lchmodSync = i(r.lchmodSync)),
      (r.stat = a(r.stat)),
      (r.fstat = a(r.fstat)),
      (r.lstat = a(r.lstat)),
      (r.statSync = c(r.statSync)),
      (r.fstatSync = c(r.fstatSync)),
      (r.lstatSync = c(r.lstatSync)),
      r.chmod &&
        !r.lchmod &&
        ((r.lchmod = function (l, f, h) {
          h && process.nextTick(h);
        }),
        (r.lchmodSync = function () {})),
      r.chown &&
        !r.lchown &&
        ((r.lchown = function (l, f, h, d) {
          d && process.nextTick(d);
        }),
        (r.lchownSync = function () {})),
      Ix === 'win32' &&
        (r.rename =
          typeof r.rename != 'function'
            ? r.rename
            : (function (l) {
                function f(h, d, m) {
                  var b = Date.now(),
                    p = 0;
                  l(h, d, function S(D) {
                    if (
                      D &&
                      (D.code === 'EACCES' || D.code === 'EPERM' || D.code === 'EBUSY') &&
                      Date.now() - b < 6e4
                    ) {
                      setTimeout(function () {
                        r.stat(d, function (x, P) {
                          x && x.code === 'ENOENT' ? l(h, d, S) : m(D);
                        });
                      }, p),
                        p < 100 && (p += 10);
                      return;
                    }
                    m && m(D);
                  });
                }
                return Object.setPrototypeOf && Object.setPrototypeOf(f, l), f;
              })(r.rename)),
      (r.read =
        typeof r.read != 'function'
          ? r.read
          : (function (l) {
              function f(h, d, m, b, p, S) {
                var D;
                if (S && typeof S == 'function') {
                  var x = 0;
                  D = function (P, k, O) {
                    if (P && P.code === 'EAGAIN' && x < 10) return x++, l.call(r, h, d, m, b, p, D);
                    S.apply(this, arguments);
                  };
                }
                return l.call(r, h, d, m, b, p, D);
              }
              return Object.setPrototypeOf && Object.setPrototypeOf(f, l), f;
            })(r.read)),
      (r.readSync =
        typeof r.readSync != 'function'
          ? r.readSync
          : (function (l) {
              return function (f, h, d, m, b) {
                for (var p = 0; ; )
                  try {
                    return l.call(r, f, h, d, m, b);
                  } catch (S) {
                    if (S.code === 'EAGAIN' && p < 10) {
                      p++;
                      continue;
                    }
                    throw S;
                  }
              };
            })(r.readSync));
    function e(l) {
      (l.lchmod = function (f, h, d) {
        l.open(f, pr.O_WRONLY | pr.O_SYMLINK, h, function (m, b) {
          if (m) {
            d && d(m);
            return;
          }
          l.fchmod(b, h, function (p) {
            l.close(b, function (S) {
              d && d(p || S);
            });
          });
        });
      }),
        (l.lchmodSync = function (f, h) {
          var d = l.openSync(f, pr.O_WRONLY | pr.O_SYMLINK, h),
            m = !0,
            b;
          try {
            (b = l.fchmodSync(d, h)), (m = !1);
          } finally {
            if (m)
              try {
                l.closeSync(d);
              } catch {}
            else l.closeSync(d);
          }
          return b;
        });
    }
    function t(l) {
      pr.hasOwnProperty('O_SYMLINK') && l.futimes
        ? ((l.lutimes = function (f, h, d, m) {
            l.open(f, pr.O_SYMLINK, function (b, p) {
              if (b) {
                m && m(b);
                return;
              }
              l.futimes(p, h, d, function (S) {
                l.close(p, function (D) {
                  m && m(S || D);
                });
              });
            });
          }),
          (l.lutimesSync = function (f, h, d) {
            var m = l.openSync(f, pr.O_SYMLINK),
              b,
              p = !0;
            try {
              (b = l.futimesSync(m, h, d)), (p = !1);
            } finally {
              if (p)
                try {
                  l.closeSync(m);
                } catch {}
              else l.closeSync(m);
            }
            return b;
          }))
        : l.futimes &&
          ((l.lutimes = function (f, h, d, m) {
            m && process.nextTick(m);
          }),
          (l.lutimesSync = function () {}));
    }
    function n(l) {
      return (
        l &&
        function (f, h, d) {
          return l.call(r, f, h, function (m) {
            u(m) && (m = null), d && d.apply(this, arguments);
          });
        }
      );
    }
    function i(l) {
      return (
        l &&
        function (f, h) {
          try {
            return l.call(r, f, h);
          } catch (d) {
            if (!u(d)) throw d;
          }
        }
      );
    }
    function s(l) {
      return (
        l &&
        function (f, h, d, m) {
          return l.call(r, f, h, d, function (b) {
            u(b) && (b = null), m && m.apply(this, arguments);
          });
        }
      );
    }
    function o(l) {
      return (
        l &&
        function (f, h, d) {
          try {
            return l.call(r, f, h, d);
          } catch (m) {
            if (!u(m)) throw m;
          }
        }
      );
    }
    function a(l) {
      return (
        l &&
        function (f, h, d) {
          typeof h == 'function' && ((d = h), (h = null));
          function m(b, p) {
            p && (p.uid < 0 && (p.uid += 4294967296), p.gid < 0 && (p.gid += 4294967296)),
              d && d.apply(this, arguments);
          }
          return h ? l.call(r, f, h, m) : l.call(r, f, m);
        }
      );
    }
    function c(l) {
      return (
        l &&
        function (f, h) {
          var d = h ? l.call(r, f, h) : l.call(r, f);
          return d && (d.uid < 0 && (d.uid += 4294967296), d.gid < 0 && (d.gid += 4294967296)), d;
        }
      );
    }
    function u(l) {
      if (!l || l.code === 'ENOSYS') return !0;
      var f = !process.getuid || process.getuid() !== 0;
      return !!(f && (l.code === 'EINVAL' || l.code === 'EPERM'));
    }
  }
});
var dE = E((jk, hE) => {
  'use strict';
  var fE = require('stream').Stream;
  hE.exports = Ax;
  function Ax(r) {
    return { ReadStream: e, WriteStream: t };
    function e(n, i) {
      if (!(this instanceof e)) return new e(n, i);
      fE.call(this);
      var s = this;
      (this.path = n),
        (this.fd = null),
        (this.readable = !0),
        (this.paused = !1),
        (this.flags = 'r'),
        (this.mode = 438),
        (this.bufferSize = 64 * 1024),
        (i = i || {});
      for (var o = Object.keys(i), a = 0, c = o.length; a < c; a++) {
        var u = o[a];
        this[u] = i[u];
      }
      if ((this.encoding && this.setEncoding(this.encoding), this.start !== void 0)) {
        if (typeof this.start != 'number') throw TypeError('start must be a Number');
        if (this.end === void 0) this.end = 1 / 0;
        else if (typeof this.end != 'number') throw TypeError('end must be a Number');
        if (this.start > this.end) throw new Error('start must be <= end');
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function () {
          s._read();
        });
        return;
      }
      r.open(this.path, this.flags, this.mode, function (l, f) {
        if (l) {
          s.emit('error', l), (s.readable = !1);
          return;
        }
        (s.fd = f), s.emit('open', f), s._read();
      });
    }
    function t(n, i) {
      if (!(this instanceof t)) return new t(n, i);
      fE.call(this),
        (this.path = n),
        (this.fd = null),
        (this.writable = !0),
        (this.flags = 'w'),
        (this.encoding = 'binary'),
        (this.mode = 438),
        (this.bytesWritten = 0),
        (i = i || {});
      for (var s = Object.keys(i), o = 0, a = s.length; o < a; o++) {
        var c = s[o];
        this[c] = i[c];
      }
      if (this.start !== void 0) {
        if (typeof this.start != 'number') throw TypeError('start must be a Number');
        if (this.start < 0) throw new Error('start must be >= zero');
        this.pos = this.start;
      }
      (this.busy = !1),
        (this._queue = []),
        this.fd === null &&
          ((this._open = r.open),
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]),
          this.flush());
    }
  }
});
var mE = E((Gk, pE) => {
  'use strict';
  pE.exports = kx;
  var Dx =
    Object.getPrototypeOf ||
    function (r) {
      return r.__proto__;
    };
  function kx(r) {
    if (r === null || typeof r != 'object') return r;
    if (r instanceof Object) var e = { __proto__: Dx(r) };
    else var e = Object.create(null);
    return (
      Object.getOwnPropertyNames(r).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      }),
      e
    );
  }
});
var ge = E(($k, il) => {
  'use strict';
  var ue = require('fs'),
    Lx = lE(),
    Px = dE(),
    Ux = mE(),
    ko = require('util'),
    we,
    Po;
  typeof Symbol == 'function' && typeof Symbol.for == 'function'
    ? ((we = Symbol.for('graceful-fs.queue')), (Po = Symbol.for('graceful-fs.previous')))
    : ((we = '___graceful-fs.queue'), (Po = '___graceful-fs.previous'));
  function Fx() {}
  function gE(r, e) {
    Object.defineProperty(r, we, {
      get: function () {
        return e;
      },
    });
  }
  var zr = Fx;
  ko.debuglog
    ? (zr = ko.debuglog('gfs4'))
    : /\bgfs4\b/i.test(process.env.NODE_DEBUG || '') &&
      (zr = function () {
        var r = ko.format.apply(ko, arguments);
        (r =
          'GFS4: ' +
          r.split(/\n/).join(`
GFS4: `)),
          console.error(r);
      });
  ue[we] ||
    ((yE = global[we] || []),
    gE(ue, yE),
    (ue.close = (function (r) {
      function e(t, n) {
        return r.call(ue, t, function (i) {
          i || EE(), typeof n == 'function' && n.apply(this, arguments);
        });
      }
      return Object.defineProperty(e, Po, { value: r }), e;
    })(ue.close)),
    (ue.closeSync = (function (r) {
      function e(t) {
        r.apply(ue, arguments), EE();
      }
      return Object.defineProperty(e, Po, { value: r }), e;
    })(ue.closeSync)),
    /\bgfs4\b/i.test(process.env.NODE_DEBUG || '') &&
      process.on('exit', function () {
        zr(ue[we]), require('assert').equal(ue[we].length, 0);
      }));
  var yE;
  global[we] || gE(global, ue[we]);
  il.exports = rl(Ux(ue));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH &&
    !ue.__patched &&
    ((il.exports = rl(ue)), (ue.__patched = !0));
  function rl(r) {
    Lx(r), (r.gracefulify = rl), (r.createReadStream = k), (r.createWriteStream = O);
    var e = r.readFile;
    r.readFile = t;
    function t(C, I, G) {
      return typeof I == 'function' && ((G = I), (I = null)), X(C, I, G);
      function X(V, J, B, K) {
        return e(V, J, function (H) {
          H && (H.code === 'EMFILE' || H.code === 'ENFILE')
            ? Pn([X, [V, J, B], H, K || Date.now(), Date.now()])
            : typeof B == 'function' && B.apply(this, arguments);
        });
      }
    }
    var n = r.writeFile;
    r.writeFile = i;
    function i(C, I, G, X) {
      return typeof G == 'function' && ((X = G), (G = null)), V(C, I, G, X);
      function V(J, B, K, H, U) {
        return n(J, B, K, function (z) {
          z && (z.code === 'EMFILE' || z.code === 'ENFILE')
            ? Pn([V, [J, B, K, H], z, U || Date.now(), Date.now()])
            : typeof H == 'function' && H.apply(this, arguments);
        });
      }
    }
    var s = r.appendFile;
    s && (r.appendFile = o);
    function o(C, I, G, X) {
      return typeof G == 'function' && ((X = G), (G = null)), V(C, I, G, X);
      function V(J, B, K, H, U) {
        return s(J, B, K, function (z) {
          z && (z.code === 'EMFILE' || z.code === 'ENFILE')
            ? Pn([V, [J, B, K, H], z, U || Date.now(), Date.now()])
            : typeof H == 'function' && H.apply(this, arguments);
        });
      }
    }
    var a = r.copyFile;
    a && (r.copyFile = c);
    function c(C, I, G, X) {
      return typeof G == 'function' && ((X = G), (G = 0)), V(C, I, G, X);
      function V(J, B, K, H, U) {
        return a(J, B, K, function (z) {
          z && (z.code === 'EMFILE' || z.code === 'ENFILE')
            ? Pn([V, [J, B, K, H], z, U || Date.now(), Date.now()])
            : typeof H == 'function' && H.apply(this, arguments);
        });
      }
    }
    var u = r.readdir;
    r.readdir = f;
    var l = /^v[0-5]\./;
    function f(C, I, G) {
      typeof I == 'function' && ((G = I), (I = null));
      var X = l.test(process.version)
        ? function (B, K, H, U) {
            return u(B, V(B, K, H, U));
          }
        : function (B, K, H, U) {
            return u(B, K, V(B, K, H, U));
          };
      return X(C, I, G);
      function V(J, B, K, H) {
        return function (U, z) {
          U && (U.code === 'EMFILE' || U.code === 'ENFILE')
            ? Pn([X, [J, B, K], U, H || Date.now(), Date.now()])
            : (z && z.sort && z.sort(), typeof K == 'function' && K.call(this, U, z));
        };
      }
    }
    if (process.version.substr(0, 4) === 'v0.8') {
      var h = Px(r);
      (S = h.ReadStream), (x = h.WriteStream);
    }
    var d = r.ReadStream;
    d && ((S.prototype = Object.create(d.prototype)), (S.prototype.open = D));
    var m = r.WriteStream;
    m && ((x.prototype = Object.create(m.prototype)), (x.prototype.open = P)),
      Object.defineProperty(r, 'ReadStream', {
        get: function () {
          return S;
        },
        set: function (C) {
          S = C;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(r, 'WriteStream', {
        get: function () {
          return x;
        },
        set: function (C) {
          x = C;
        },
        enumerable: !0,
        configurable: !0,
      });
    var b = S;
    Object.defineProperty(r, 'FileReadStream', {
      get: function () {
        return b;
      },
      set: function (C) {
        b = C;
      },
      enumerable: !0,
      configurable: !0,
    });
    var p = x;
    Object.defineProperty(r, 'FileWriteStream', {
      get: function () {
        return p;
      },
      set: function (C) {
        p = C;
      },
      enumerable: !0,
      configurable: !0,
    });
    function S(C, I) {
      return this instanceof S
        ? (d.apply(this, arguments), this)
        : S.apply(Object.create(S.prototype), arguments);
    }
    function D() {
      var C = this;
      $(C.path, C.flags, C.mode, function (I, G) {
        I
          ? (C.autoClose && C.destroy(), C.emit('error', I))
          : ((C.fd = G), C.emit('open', G), C.read());
      });
    }
    function x(C, I) {
      return this instanceof x
        ? (m.apply(this, arguments), this)
        : x.apply(Object.create(x.prototype), arguments);
    }
    function P() {
      var C = this;
      $(C.path, C.flags, C.mode, function (I, G) {
        I ? (C.destroy(), C.emit('error', I)) : ((C.fd = G), C.emit('open', G));
      });
    }
    function k(C, I) {
      return new r.ReadStream(C, I);
    }
    function O(C, I) {
      return new r.WriteStream(C, I);
    }
    var j = r.open;
    r.open = $;
    function $(C, I, G, X) {
      return typeof G == 'function' && ((X = G), (G = null)), V(C, I, G, X);
      function V(J, B, K, H, U) {
        return j(J, B, K, function (z, le) {
          z && (z.code === 'EMFILE' || z.code === 'ENFILE')
            ? Pn([V, [J, B, K, H], z, U || Date.now(), Date.now()])
            : typeof H == 'function' && H.apply(this, arguments);
        });
      }
    }
    return r;
  }
  function Pn(r) {
    zr('ENQUEUE', r[0].name, r[1]), ue[we].push(r), nl();
  }
  var Lo;
  function EE() {
    for (var r = Date.now(), e = 0; e < ue[we].length; ++e)
      ue[we][e].length > 2 && ((ue[we][e][3] = r), (ue[we][e][4] = r));
    nl();
  }
  function nl() {
    if ((clearTimeout(Lo), (Lo = void 0), ue[we].length !== 0)) {
      var r = ue[we].shift(),
        e = r[0],
        t = r[1],
        n = r[2],
        i = r[3],
        s = r[4];
      if (i === void 0) zr('RETRY', e.name, t), e.apply(null, t);
      else if (Date.now() - i >= 6e4) {
        zr('TIMEOUT', e.name, t);
        var o = t.pop();
        typeof o == 'function' && o.call(null, n);
      } else {
        var a = Date.now() - s,
          c = Math.max(s - i, 1),
          u = Math.min(c * 1.2, 100);
        a >= u ? (zr('RETRY', e.name, t), e.apply(null, t.concat([i]))) : ue[we].push(r);
      }
      Lo === void 0 && (Lo = setTimeout(nl, 0));
    }
  }
});
var sl = E((Un) => {
  'use strict';
  var Mx = We().fromCallback,
    Ot = ge(),
    qx = [
      'access',
      'appendFile',
      'chmod',
      'chown',
      'close',
      'copyFile',
      'fchmod',
      'fchown',
      'fdatasync',
      'fstat',
      'fsync',
      'ftruncate',
      'futimes',
      'lchown',
      'lchmod',
      'link',
      'lstat',
      'mkdir',
      'mkdtemp',
      'open',
      'readFile',
      'readdir',
      'readlink',
      'realpath',
      'rename',
      'rmdir',
      'stat',
      'symlink',
      'truncate',
      'unlink',
      'utimes',
      'writeFile',
    ].filter((r) => typeof Ot[r] == 'function');
  Object.keys(Ot).forEach((r) => {
    r !== 'promises' && (Un[r] = Ot[r]);
  });
  qx.forEach((r) => {
    Un[r] = Mx(Ot[r]);
  });
  Un.exists = function (r, e) {
    return typeof e == 'function' ? Ot.exists(r, e) : new Promise((t) => Ot.exists(r, t));
  };
  Un.read = function (r, e, t, n, i, s) {
    return typeof s == 'function'
      ? Ot.read(r, e, t, n, i, s)
      : new Promise((o, a) => {
          Ot.read(r, e, t, n, i, (c, u, l) => {
            if (c) return a(c);
            o({ bytesRead: u, buffer: l });
          });
        });
  };
  Un.write = function (r, e, ...t) {
    return typeof t[t.length - 1] == 'function'
      ? Ot.write(r, e, ...t)
      : new Promise((n, i) => {
          Ot.write(r, e, ...t, (s, o, a) => {
            if (s) return i(s);
            n({ bytesWritten: o, buffer: a });
          });
        });
  };
});
var al = E((zk, bE) => {
  'use strict';
  var ol = require('path');
  function _E(r) {
    return (r = ol.normalize(ol.resolve(r)).split(ol.sep)), r.length > 0 ? r[0] : null;
  }
  var Bx = /[<>:"|?*]/;
  function jx(r) {
    let e = _E(r);
    return (r = r.replace(e, '')), Bx.test(r);
  }
  bE.exports = { getRootPath: _E, invalidWin32Path: jx };
});
var SE = E((Vk, vE) => {
  'use strict';
  var Gx = ge(),
    cl = require('path'),
    $x = al().invalidWin32Path,
    Hx = parseInt('0777', 8);
  function ul(r, e, t, n) {
    if (
      (typeof e == 'function'
        ? ((t = e), (e = {}))
        : (!e || typeof e != 'object') && (e = { mode: e }),
      process.platform === 'win32' && $x(r))
    ) {
      let o = new Error(r + ' contains invalid WIN32 path characters.');
      return (o.code = 'EINVAL'), t(o);
    }
    let i = e.mode,
      s = e.fs || Gx;
    i === void 0 && (i = Hx & ~process.umask()),
      n || (n = null),
      (t = t || function () {}),
      (r = cl.resolve(r)),
      s.mkdir(r, i, (o) => {
        if (!o) return (n = n || r), t(null, n);
        switch (o.code) {
          case 'ENOENT':
            if (cl.dirname(r) === r) return t(o);
            ul(cl.dirname(r), e, (a, c) => {
              a ? t(a, c) : ul(r, e, t, c);
            });
            break;
          default:
            s.stat(r, (a, c) => {
              a || !c.isDirectory() ? t(o, n) : t(null, n);
            });
            break;
        }
      });
  }
  vE.exports = ul;
});
var RE = E((Wk, wE) => {
  'use strict';
  var zx = ge(),
    ll = require('path'),
    Vx = al().invalidWin32Path,
    Wx = parseInt('0777', 8);
  function fl(r, e, t) {
    (!e || typeof e != 'object') && (e = { mode: e });
    let n = e.mode,
      i = e.fs || zx;
    if (process.platform === 'win32' && Vx(r)) {
      let s = new Error(r + ' contains invalid WIN32 path characters.');
      throw ((s.code = 'EINVAL'), s);
    }
    n === void 0 && (n = Wx & ~process.umask()), t || (t = null), (r = ll.resolve(r));
    try {
      i.mkdirSync(r, n), (t = t || r);
    } catch (s) {
      if (s.code === 'ENOENT') {
        if (ll.dirname(r) === r) throw s;
        (t = fl(ll.dirname(r), e, t)), fl(r, e, t);
      } else {
        let o;
        try {
          o = i.statSync(r);
        } catch {
          throw s;
        }
        if (!o.isDirectory()) throw s;
      }
    }
    return t;
  }
  wE.exports = fl;
});
var tt = E((Xk, TE) => {
  'use strict';
  var Xx = We().fromCallback,
    hl = Xx(SE()),
    dl = RE();
  TE.exports = {
    mkdirs: hl,
    mkdirsSync: dl,
    mkdirp: hl,
    mkdirpSync: dl,
    ensureDir: hl,
    ensureDirSync: dl,
  };
});
var pl = E((Kk, OE) => {
  'use strict';
  var Le = ge(),
    xE = require('os'),
    Uo = require('path');
  function Kx() {
    let r = Uo.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2));
    r = Uo.join(xE.tmpdir(), r);
    let e = new Date(1435410243862);
    Le.writeFileSync(r, 'https://github.com/jprichardson/node-fs-extra/pull/141');
    let t = Le.openSync(r, 'r+');
    return Le.futimesSync(t, e, e), Le.closeSync(t), Le.statSync(r).mtime > 1435410243e3;
  }
  function Yx(r) {
    let e = Uo.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2));
    e = Uo.join(xE.tmpdir(), e);
    let t = new Date(1435410243862);
    Le.writeFile(e, 'https://github.com/jprichardson/node-fs-extra/pull/141', (n) => {
      if (n) return r(n);
      Le.open(e, 'r+', (i, s) => {
        if (i) return r(i);
        Le.futimes(s, t, t, (o) => {
          if (o) return r(o);
          Le.close(s, (a) => {
            if (a) return r(a);
            Le.stat(e, (c, u) => {
              if (c) return r(c);
              r(null, u.mtime > 1435410243e3);
            });
          });
        });
      });
    });
  }
  function Jx(r) {
    if (typeof r == 'number') return Math.floor(r / 1e3) * 1e3;
    if (r instanceof Date) return new Date(Math.floor(r.getTime() / 1e3) * 1e3);
    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type');
  }
  function Zx(r, e, t, n) {
    Le.open(r, 'r+', (i, s) => {
      if (i) return n(i);
      Le.futimes(s, e, t, (o) => {
        Le.close(s, (a) => {
          n && n(o || a);
        });
      });
    });
  }
  function Qx(r, e, t) {
    let n = Le.openSync(r, 'r+');
    return Le.futimesSync(n, e, t), Le.closeSync(n);
  }
  OE.exports = {
    hasMillisRes: Yx,
    hasMillisResSync: Kx,
    timeRemoveMillis: Jx,
    utimesMillis: Zx,
    utimesMillisSync: Qx,
  };
});
var ml = E((Yk, CE) => {
  'use strict';
  CE.exports = function (r) {
    if (typeof Buffer.allocUnsafe == 'function')
      try {
        return Buffer.allocUnsafe(r);
      } catch {
        return new Buffer(r);
      }
    return new Buffer(r);
  };
});
var LE = E((Jk, kE) => {
  'use strict';
  var oe = ge(),
    $t = require('path'),
    eO = tt().mkdirsSync,
    tO = pl().utimesMillisSync,
    Fo = Symbol('notExist');
  function rO(r, e, t) {
    typeof t == 'function' && (t = { filter: t }),
      (t = t || {}),
      (t.clobber = 'clobber' in t ? !!t.clobber : !0),
      (t.overwrite = 'overwrite' in t ? !!t.overwrite : t.clobber),
      t.preserveTimestamps &&
        process.arch === 'ia32' &&
        console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
    let n = DE(r, e);
    if (t.filter && !t.filter(r, e)) return;
    let i = $t.dirname(e);
    return oe.existsSync(i) || eO(i), IE(n, r, e, t);
  }
  function IE(r, e, t, n) {
    if (!(n.filter && !n.filter(e, t))) return nO(r, e, t, n);
  }
  function nO(r, e, t, n) {
    let s = (n.dereference ? oe.statSync : oe.lstatSync)(e);
    if (s.isDirectory()) return aO(s, r, e, t, n);
    if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return iO(s, r, e, t, n);
    if (s.isSymbolicLink()) return lO(r, e, t, n);
  }
  function iO(r, e, t, n, i) {
    return e === Fo ? NE(r, t, n, i) : sO(r, t, n, i);
  }
  function sO(r, e, t, n) {
    if (n.overwrite) return oe.unlinkSync(t), NE(r, e, t, n);
    if (n.errorOnExist) throw new Error(`'${t}' already exists`);
  }
  function NE(r, e, t, n) {
    return typeof oe.copyFileSync == 'function'
      ? (oe.copyFileSync(e, t),
        oe.chmodSync(t, r.mode),
        n.preserveTimestamps ? tO(t, r.atime, r.mtime) : void 0)
      : oO(r, e, t, n);
  }
  function oO(r, e, t, n) {
    let s = ml()(65536),
      o = oe.openSync(e, 'r'),
      a = oe.openSync(t, 'w', r.mode),
      c = 0;
    for (; c < r.size; ) {
      let u = oe.readSync(o, s, 0, 65536, c);
      oe.writeSync(a, s, 0, u), (c += u);
    }
    n.preserveTimestamps && oe.futimesSync(a, r.atime, r.mtime), oe.closeSync(o), oe.closeSync(a);
  }
  function aO(r, e, t, n, i) {
    if (e === Fo) return cO(r, t, n, i);
    if (e && !e.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${n}' with directory '${t}'.`);
    return AE(t, n, i);
  }
  function cO(r, e, t, n) {
    return oe.mkdirSync(t), AE(e, t, n), oe.chmodSync(t, r.mode);
  }
  function AE(r, e, t) {
    oe.readdirSync(r).forEach((n) => uO(n, r, e, t));
  }
  function uO(r, e, t, n) {
    let i = $t.join(e, r),
      s = $t.join(t, r),
      o = DE(i, s);
    return IE(o, i, s, n);
  }
  function lO(r, e, t, n) {
    let i = oe.readlinkSync(e);
    if ((n.dereference && (i = $t.resolve(process.cwd(), i)), r === Fo))
      return oe.symlinkSync(i, t);
    {
      let s;
      try {
        s = oe.readlinkSync(t);
      } catch (o) {
        if (o.code === 'EINVAL' || o.code === 'UNKNOWN') return oe.symlinkSync(i, t);
        throw o;
      }
      if ((n.dereference && (s = $t.resolve(process.cwd(), s)), yl(i, s)))
        throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${s}'.`);
      if (oe.statSync(t).isDirectory() && yl(s, i))
        throw new Error(`Cannot overwrite '${s}' with '${i}'.`);
      return fO(i, t);
    }
  }
  function fO(r, e) {
    return oe.unlinkSync(e), oe.symlinkSync(r, e);
  }
  function yl(r, e) {
    let t = $t.resolve(r).split($t.sep),
      n = $t.resolve(e).split($t.sep);
    return t.reduce((i, s, o) => i && n[o] === s, !0);
  }
  function hO(r, e) {
    let t = oe.statSync(r),
      n;
    try {
      n = oe.statSync(e);
    } catch (i) {
      if (i.code === 'ENOENT') return { srcStat: t, destStat: Fo };
      throw i;
    }
    return { srcStat: t, destStat: n };
  }
  function DE(r, e) {
    let { srcStat: t, destStat: n } = hO(r, e);
    if (n.ino && n.ino === t.ino) throw new Error('Source and destination must not be the same.');
    if (t.isDirectory() && yl(r, e))
      throw new Error(`Cannot copy '${r}' to a subdirectory of itself, '${e}'.`);
    return n;
  }
  kE.exports = rO;
});
var El = E((Zk, PE) => {
  'use strict';
  PE.exports = { copySync: LE() };
});
var Ct = E((Qk, FE) => {
  'use strict';
  var dO = We().fromPromise,
    UE = sl();
  function pO(r) {
    return UE.access(r)
      .then(() => !0)
      .catch(() => !1);
  }
  FE.exports = { pathExists: dO(pO), pathExistsSync: UE.existsSync };
});
var WE = E((eL, VE) => {
  'use strict';
  var he = ge(),
    Ht = require('path'),
    mO = tt().mkdirs,
    yO = Ct().pathExists,
    EO = pl().utimesMillis,
    Mo = Symbol('notExist');
  function gO(r, e, t, n) {
    typeof t == 'function' && !n
      ? ((n = t), (t = {}))
      : typeof t == 'function' && (t = { filter: t }),
      (n = n || function () {}),
      (t = t || {}),
      (t.clobber = 'clobber' in t ? !!t.clobber : !0),
      (t.overwrite = 'overwrite' in t ? !!t.overwrite : t.clobber),
      t.preserveTimestamps &&
        process.arch === 'ia32' &&
        console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`),
      zE(r, e, (i, s) => (i ? n(i) : t.filter ? BE(ME, s, r, e, t, n) : ME(s, r, e, t, n)));
  }
  function ME(r, e, t, n, i) {
    let s = Ht.dirname(t);
    yO(s, (o, a) => {
      if (o) return i(o);
      if (a) return gl(r, e, t, n, i);
      mO(s, (c) => (c ? i(c) : gl(r, e, t, n, i)));
    });
  }
  function BE(r, e, t, n, i, s) {
    Promise.resolve(i.filter(t, n)).then(
      (o) => (o ? (e ? r(e, t, n, i, s) : r(t, n, i, s)) : s()),
      (o) => s(o)
    );
  }
  function gl(r, e, t, n, i) {
    return n.filter ? BE(qE, r, e, t, n, i) : qE(r, e, t, n, i);
  }
  function qE(r, e, t, n, i) {
    (n.dereference ? he.stat : he.lstat)(e, (o, a) => {
      if (o) return i(o);
      if (a.isDirectory()) return SO(a, r, e, t, n, i);
      if (a.isFile() || a.isCharacterDevice() || a.isBlockDevice()) return _O(a, r, e, t, n, i);
      if (a.isSymbolicLink()) return TO(r, e, t, n, i);
    });
  }
  function _O(r, e, t, n, i, s) {
    return e === Mo ? jE(r, t, n, i, s) : bO(r, t, n, i, s);
  }
  function bO(r, e, t, n, i) {
    if (n.overwrite) he.unlink(t, (s) => (s ? i(s) : jE(r, e, t, n, i)));
    else return n.errorOnExist ? i(new Error(`'${t}' already exists`)) : i();
  }
  function jE(r, e, t, n, i) {
    return typeof he.copyFile == 'function'
      ? he.copyFile(e, t, (s) => (s ? i(s) : GE(r, t, n, i)))
      : vO(r, e, t, n, i);
  }
  function vO(r, e, t, n, i) {
    let s = he.createReadStream(e);
    s.on('error', (o) => i(o)).once('open', () => {
      let o = he.createWriteStream(t, { mode: r.mode });
      o.on('error', (a) => i(a))
        .on('open', () => s.pipe(o))
        .once('close', () => GE(r, t, n, i));
    });
  }
  function GE(r, e, t, n) {
    he.chmod(e, r.mode, (i) =>
      i ? n(i) : t.preserveTimestamps ? EO(e, r.atime, r.mtime, n) : n()
    );
  }
  function SO(r, e, t, n, i, s) {
    return e === Mo
      ? wO(r, t, n, i, s)
      : e && !e.isDirectory()
        ? s(new Error(`Cannot overwrite non-directory '${n}' with directory '${t}'.`))
        : $E(t, n, i, s);
  }
  function wO(r, e, t, n, i) {
    he.mkdir(t, (s) => {
      if (s) return i(s);
      $E(e, t, n, (o) => (o ? i(o) : he.chmod(t, r.mode, i)));
    });
  }
  function $E(r, e, t, n) {
    he.readdir(r, (i, s) => (i ? n(i) : HE(s, r, e, t, n)));
  }
  function HE(r, e, t, n, i) {
    let s = r.pop();
    return s ? RO(r, s, e, t, n, i) : i();
  }
  function RO(r, e, t, n, i, s) {
    let o = Ht.join(t, e),
      a = Ht.join(n, e);
    zE(o, a, (c, u) => {
      if (c) return s(c);
      gl(u, o, a, i, (l) => (l ? s(l) : HE(r, t, n, i, s)));
    });
  }
  function TO(r, e, t, n, i) {
    he.readlink(e, (s, o) => {
      if (s) return i(s);
      if ((n.dereference && (o = Ht.resolve(process.cwd(), o)), r === Mo))
        return he.symlink(o, t, i);
      he.readlink(t, (a, c) =>
        a
          ? a.code === 'EINVAL' || a.code === 'UNKNOWN'
            ? he.symlink(o, t, i)
            : i(a)
          : (n.dereference && (c = Ht.resolve(process.cwd(), c)),
            _l(o, c)
              ? i(new Error(`Cannot copy '${o}' to a subdirectory of itself, '${c}'.`))
              : r.isDirectory() && _l(c, o)
                ? i(new Error(`Cannot overwrite '${c}' with '${o}'.`))
                : xO(o, t, i))
      );
    });
  }
  function xO(r, e, t) {
    he.unlink(e, (n) => (n ? t(n) : he.symlink(r, e, t)));
  }
  function _l(r, e) {
    let t = Ht.resolve(r).split(Ht.sep),
      n = Ht.resolve(e).split(Ht.sep);
    return t.reduce((i, s, o) => i && n[o] === s, !0);
  }
  function OO(r, e, t) {
    he.stat(r, (n, i) => {
      if (n) return t(n);
      he.stat(e, (s, o) =>
        s
          ? s.code === 'ENOENT'
            ? t(null, { srcStat: i, destStat: Mo })
            : t(s)
          : t(null, { srcStat: i, destStat: o })
      );
    });
  }
  function zE(r, e, t) {
    OO(r, e, (n, i) => {
      if (n) return t(n);
      let { srcStat: s, destStat: o } = i;
      return o.ino && o.ino === s.ino
        ? t(new Error('Source and destination must not be the same.'))
        : s.isDirectory() && _l(r, e)
          ? t(new Error(`Cannot copy '${r}' to a subdirectory of itself, '${e}'.`))
          : t(null, o);
    });
  }
  VE.exports = gO;
});
var bl = E((tL, XE) => {
  'use strict';
  var CO = We().fromCallback;
  XE.exports = { copy: CO(WE()) };
});
var ng = E((rL, rg) => {
  'use strict';
  var KE = ge(),
    QE = require('path'),
    ee = require('assert'),
    xi = process.platform === 'win32';
  function eg(r) {
    ['unlink', 'chmod', 'stat', 'lstat', 'rmdir', 'readdir'].forEach((t) => {
      (r[t] = r[t] || KE[t]), (t = t + 'Sync'), (r[t] = r[t] || KE[t]);
    }),
      (r.maxBusyTries = r.maxBusyTries || 3);
  }
  function vl(r, e, t) {
    let n = 0;
    typeof e == 'function' && ((t = e), (e = {})),
      ee(r, 'rimraf: missing path'),
      ee.strictEqual(typeof r, 'string', 'rimraf: path should be a string'),
      ee.strictEqual(typeof t, 'function', 'rimraf: callback function required'),
      ee(e, 'rimraf: invalid options argument provided'),
      ee.strictEqual(typeof e, 'object', 'rimraf: options should be object'),
      eg(e),
      YE(r, e, function i(s) {
        if (s) {
          if (
            (s.code === 'EBUSY' || s.code === 'ENOTEMPTY' || s.code === 'EPERM') &&
            n < e.maxBusyTries
          ) {
            n++;
            let o = n * 100;
            return setTimeout(() => YE(r, e, i), o);
          }
          s.code === 'ENOENT' && (s = null);
        }
        t(s);
      });
  }
  function YE(r, e, t) {
    ee(r),
      ee(e),
      ee(typeof t == 'function'),
      e.lstat(r, (n, i) => {
        if (n && n.code === 'ENOENT') return t(null);
        if (n && n.code === 'EPERM' && xi) return JE(r, e, n, t);
        if (i && i.isDirectory()) return qo(r, e, n, t);
        e.unlink(r, (s) => {
          if (s) {
            if (s.code === 'ENOENT') return t(null);
            if (s.code === 'EPERM') return xi ? JE(r, e, s, t) : qo(r, e, s, t);
            if (s.code === 'EISDIR') return qo(r, e, s, t);
          }
          return t(s);
        });
      });
  }
  function JE(r, e, t, n) {
    ee(r),
      ee(e),
      ee(typeof n == 'function'),
      t && ee(t instanceof Error),
      e.chmod(r, 438, (i) => {
        i
          ? n(i.code === 'ENOENT' ? null : t)
          : e.stat(r, (s, o) => {
              s
                ? n(s.code === 'ENOENT' ? null : t)
                : o.isDirectory()
                  ? qo(r, e, t, n)
                  : e.unlink(r, n);
            });
      });
  }
  function ZE(r, e, t) {
    let n;
    ee(r), ee(e), t && ee(t instanceof Error);
    try {
      e.chmodSync(r, 438);
    } catch (i) {
      if (i.code === 'ENOENT') return;
      throw t;
    }
    try {
      n = e.statSync(r);
    } catch (i) {
      if (i.code === 'ENOENT') return;
      throw t;
    }
    n.isDirectory() ? Bo(r, e, t) : e.unlinkSync(r);
  }
  function qo(r, e, t, n) {
    ee(r),
      ee(e),
      t && ee(t instanceof Error),
      ee(typeof n == 'function'),
      e.rmdir(r, (i) => {
        i && (i.code === 'ENOTEMPTY' || i.code === 'EEXIST' || i.code === 'EPERM')
          ? IO(r, e, n)
          : i && i.code === 'ENOTDIR'
            ? n(t)
            : n(i);
      });
  }
  function IO(r, e, t) {
    ee(r),
      ee(e),
      ee(typeof t == 'function'),
      e.readdir(r, (n, i) => {
        if (n) return t(n);
        let s = i.length,
          o;
        if (s === 0) return e.rmdir(r, t);
        i.forEach((a) => {
          vl(QE.join(r, a), e, (c) => {
            if (!o) {
              if (c) return t((o = c));
              --s === 0 && e.rmdir(r, t);
            }
          });
        });
      });
  }
  function tg(r, e) {
    let t;
    (e = e || {}),
      eg(e),
      ee(r, 'rimraf: missing path'),
      ee.strictEqual(typeof r, 'string', 'rimraf: path should be a string'),
      ee(e, 'rimraf: missing options'),
      ee.strictEqual(typeof e, 'object', 'rimraf: options should be object');
    try {
      t = e.lstatSync(r);
    } catch (n) {
      if (n.code === 'ENOENT') return;
      n.code === 'EPERM' && xi && ZE(r, e, n);
    }
    try {
      t && t.isDirectory() ? Bo(r, e, null) : e.unlinkSync(r);
    } catch (n) {
      if (n.code === 'ENOENT') return;
      if (n.code === 'EPERM') return xi ? ZE(r, e, n) : Bo(r, e, n);
      if (n.code !== 'EISDIR') throw n;
      Bo(r, e, n);
    }
  }
  function Bo(r, e, t) {
    ee(r), ee(e), t && ee(t instanceof Error);
    try {
      e.rmdirSync(r);
    } catch (n) {
      if (n.code === 'ENOTDIR') throw t;
      if (n.code === 'ENOTEMPTY' || n.code === 'EEXIST' || n.code === 'EPERM') NO(r, e);
      else if (n.code !== 'ENOENT') throw n;
    }
  }
  function NO(r, e) {
    if ((ee(r), ee(e), e.readdirSync(r).forEach((t) => tg(QE.join(r, t), e)), xi)) {
      let t = Date.now();
      do
        try {
          return e.rmdirSync(r, e);
        } catch {}
      while (Date.now() - t < 500);
    } else return e.rmdirSync(r, e);
  }
  rg.exports = vl;
  vl.sync = tg;
});
var Oi = E((nL, sg) => {
  'use strict';
  var AO = We().fromCallback,
    ig = ng();
  sg.exports = { remove: AO(ig), removeSync: ig.sync };
});
var dg = E((iL, hg) => {
  'use strict';
  var DO = We().fromCallback,
    cg = require('fs'),
    ug = require('path'),
    lg = tt(),
    fg = Oi(),
    og = DO(function (e, t) {
      (t = t || function () {}),
        cg.readdir(e, (n, i) => {
          if (n) return lg.mkdirs(e, t);
          (i = i.map((o) => ug.join(e, o))), s();
          function s() {
            let o = i.pop();
            if (!o) return t();
            fg.remove(o, (a) => {
              if (a) return t(a);
              s();
            });
          }
        });
    });
  function ag(r) {
    let e;
    try {
      e = cg.readdirSync(r);
    } catch {
      return lg.mkdirsSync(r);
    }
    e.forEach((t) => {
      (t = ug.join(r, t)), fg.removeSync(t);
    });
  }
  hg.exports = { emptyDirSync: ag, emptydirSync: ag, emptyDir: og, emptydir: og };
});
var Eg = E((sL, yg) => {
  'use strict';
  var kO = We().fromCallback,
    pg = require('path'),
    Ci = ge(),
    mg = tt(),
    LO = Ct().pathExists;
  function PO(r, e) {
    function t() {
      Ci.writeFile(r, '', (n) => {
        if (n) return e(n);
        e();
      });
    }
    Ci.stat(r, (n, i) => {
      if (!n && i.isFile()) return e();
      let s = pg.dirname(r);
      LO(s, (o, a) => {
        if (o) return e(o);
        if (a) return t();
        mg.mkdirs(s, (c) => {
          if (c) return e(c);
          t();
        });
      });
    });
  }
  function UO(r) {
    let e;
    try {
      e = Ci.statSync(r);
    } catch {}
    if (e && e.isFile()) return;
    let t = pg.dirname(r);
    Ci.existsSync(t) || mg.mkdirsSync(t), Ci.writeFileSync(r, '');
  }
  yg.exports = { createFile: kO(PO), createFileSync: UO };
});
var Sg = E((oL, vg) => {
  'use strict';
  var FO = We().fromCallback,
    _g = require('path'),
    Vr = ge(),
    bg = tt(),
    gg = Ct().pathExists;
  function MO(r, e, t) {
    function n(i, s) {
      Vr.link(i, s, (o) => {
        if (o) return t(o);
        t(null);
      });
    }
    gg(e, (i, s) => {
      if (i) return t(i);
      if (s) return t(null);
      Vr.lstat(r, (o) => {
        if (o) return (o.message = o.message.replace('lstat', 'ensureLink')), t(o);
        let a = _g.dirname(e);
        gg(a, (c, u) => {
          if (c) return t(c);
          if (u) return n(r, e);
          bg.mkdirs(a, (l) => {
            if (l) return t(l);
            n(r, e);
          });
        });
      });
    });
  }
  function qO(r, e) {
    if (Vr.existsSync(e)) return;
    try {
      Vr.lstatSync(r);
    } catch (s) {
      throw ((s.message = s.message.replace('lstat', 'ensureLink')), s);
    }
    let n = _g.dirname(e);
    return Vr.existsSync(n) || bg.mkdirsSync(n), Vr.linkSync(r, e);
  }
  vg.exports = { createLink: FO(MO), createLinkSync: qO };
});
var Rg = E((aL, wg) => {
  'use strict';
  var mr = require('path'),
    Ii = ge(),
    BO = Ct().pathExists;
  function jO(r, e, t) {
    if (mr.isAbsolute(r))
      return Ii.lstat(r, (n) =>
        n
          ? ((n.message = n.message.replace('lstat', 'ensureSymlink')), t(n))
          : t(null, { toCwd: r, toDst: r })
      );
    {
      let n = mr.dirname(e),
        i = mr.join(n, r);
      return BO(i, (s, o) =>
        s
          ? t(s)
          : o
            ? t(null, { toCwd: i, toDst: r })
            : Ii.lstat(r, (a) =>
                a
                  ? ((a.message = a.message.replace('lstat', 'ensureSymlink')), t(a))
                  : t(null, { toCwd: r, toDst: mr.relative(n, r) })
              )
      );
    }
  }
  function GO(r, e) {
    let t;
    if (mr.isAbsolute(r)) {
      if (((t = Ii.existsSync(r)), !t)) throw new Error('absolute srcpath does not exist');
      return { toCwd: r, toDst: r };
    } else {
      let n = mr.dirname(e),
        i = mr.join(n, r);
      if (((t = Ii.existsSync(i)), t)) return { toCwd: i, toDst: r };
      if (((t = Ii.existsSync(r)), !t)) throw new Error('relative srcpath does not exist');
      return { toCwd: r, toDst: mr.relative(n, r) };
    }
  }
  wg.exports = { symlinkPaths: jO, symlinkPathsSync: GO };
});
var Og = E((cL, xg) => {
  'use strict';
  var Tg = ge();
  function $O(r, e, t) {
    if (((t = typeof e == 'function' ? e : t), (e = typeof e == 'function' ? !1 : e), e))
      return t(null, e);
    Tg.lstat(r, (n, i) => {
      if (n) return t(null, 'file');
      (e = i && i.isDirectory() ? 'dir' : 'file'), t(null, e);
    });
  }
  function HO(r, e) {
    let t;
    if (e) return e;
    try {
      t = Tg.lstatSync(r);
    } catch {
      return 'file';
    }
    return t && t.isDirectory() ? 'dir' : 'file';
  }
  xg.exports = { symlinkType: $O, symlinkTypeSync: HO };
});
var Lg = E((uL, kg) => {
  'use strict';
  var zO = We().fromCallback,
    Ig = require('path'),
    Fn = ge(),
    Ng = tt(),
    VO = Ng.mkdirs,
    WO = Ng.mkdirsSync,
    Ag = Rg(),
    XO = Ag.symlinkPaths,
    KO = Ag.symlinkPathsSync,
    Dg = Og(),
    YO = Dg.symlinkType,
    JO = Dg.symlinkTypeSync,
    Cg = Ct().pathExists;
  function ZO(r, e, t, n) {
    (n = typeof t == 'function' ? t : n),
      (t = typeof t == 'function' ? !1 : t),
      Cg(e, (i, s) => {
        if (i) return n(i);
        if (s) return n(null);
        XO(r, e, (o, a) => {
          if (o) return n(o);
          (r = a.toDst),
            YO(a.toCwd, t, (c, u) => {
              if (c) return n(c);
              let l = Ig.dirname(e);
              Cg(l, (f, h) => {
                if (f) return n(f);
                if (h) return Fn.symlink(r, e, u, n);
                VO(l, (d) => {
                  if (d) return n(d);
                  Fn.symlink(r, e, u, n);
                });
              });
            });
        });
      });
  }
  function QO(r, e, t) {
    if (Fn.existsSync(e)) return;
    let i = KO(r, e);
    (r = i.toDst), (t = JO(i.toCwd, t));
    let s = Ig.dirname(e);
    return Fn.existsSync(s) || WO(s), Fn.symlinkSync(r, e, t);
  }
  kg.exports = { createSymlink: zO(ZO), createSymlinkSync: QO };
});
var Ug = E((lL, Pg) => {
  'use strict';
  var jo = Eg(),
    Go = Sg(),
    $o = Lg();
  Pg.exports = {
    createFile: jo.createFile,
    createFileSync: jo.createFileSync,
    ensureFile: jo.createFile,
    ensureFileSync: jo.createFileSync,
    createLink: Go.createLink,
    createLinkSync: Go.createLinkSync,
    ensureLink: Go.createLink,
    ensureLinkSync: Go.createLinkSync,
    createSymlink: $o.createSymlink,
    createSymlinkSync: $o.createSymlinkSync,
    ensureSymlink: $o.createSymlink,
    ensureSymlinkSync: $o.createSymlinkSync,
  };
});
var Bg = E((fL, qg) => {
  'use strict';
  var Mn;
  try {
    Mn = ge();
  } catch {
    Mn = require('fs');
  }
  function eC(r, e, t) {
    t == null && ((t = e), (e = {})), typeof e == 'string' && (e = { encoding: e }), (e = e || {});
    var n = e.fs || Mn,
      i = !0;
    'throws' in e && (i = e.throws),
      n.readFile(r, e, function (s, o) {
        if (s) return t(s);
        o = Mg(o);
        var a;
        try {
          a = JSON.parse(o, e ? e.reviver : null);
        } catch (c) {
          return i ? ((c.message = r + ': ' + c.message), t(c)) : t(null, null);
        }
        t(null, a);
      });
  }
  function tC(r, e) {
    (e = e || {}), typeof e == 'string' && (e = { encoding: e });
    var t = e.fs || Mn,
      n = !0;
    'throws' in e && (n = e.throws);
    try {
      var i = t.readFileSync(r, e);
      return (i = Mg(i)), JSON.parse(i, e.reviver);
    } catch (s) {
      if (n) throw ((s.message = r + ': ' + s.message), s);
      return null;
    }
  }
  function Fg(r, e) {
    var t,
      n = `
`;
    typeof e == 'object' && e !== null && (e.spaces && (t = e.spaces), e.EOL && (n = e.EOL));
    var i = JSON.stringify(r, e ? e.replacer : null, t);
    return i.replace(/\n/g, n) + n;
  }
  function rC(r, e, t, n) {
    n == null && ((n = t), (t = {})), (t = t || {});
    var i = t.fs || Mn,
      s = '';
    try {
      s = Fg(e, t);
    } catch (o) {
      n && n(o, null);
      return;
    }
    i.writeFile(r, s, t, n);
  }
  function nC(r, e, t) {
    t = t || {};
    var n = t.fs || Mn,
      i = Fg(e, t);
    return n.writeFileSync(r, i, t);
  }
  function Mg(r) {
    return Buffer.isBuffer(r) && (r = r.toString('utf8')), (r = r.replace(/^\uFEFF/, '')), r;
  }
  var iC = { readFile: eC, readFileSync: tC, writeFile: rC, writeFileSync: nC };
  qg.exports = iC;
});
var zo = E((hL, Gg) => {
  'use strict';
  var jg = We().fromCallback,
    Ho = Bg();
  Gg.exports = {
    readJson: jg(Ho.readFile),
    readJsonSync: Ho.readFileSync,
    writeJson: jg(Ho.writeFile),
    writeJsonSync: Ho.writeFileSync,
  };
});
var zg = E((dL, Hg) => {
  'use strict';
  var sC = require('path'),
    oC = tt(),
    aC = Ct().pathExists,
    $g = zo();
  function cC(r, e, t, n) {
    typeof t == 'function' && ((n = t), (t = {}));
    let i = sC.dirname(r);
    aC(i, (s, o) => {
      if (s) return n(s);
      if (o) return $g.writeJson(r, e, t, n);
      oC.mkdirs(i, (a) => {
        if (a) return n(a);
        $g.writeJson(r, e, t, n);
      });
    });
  }
  Hg.exports = cC;
});
var Wg = E((pL, Vg) => {
  'use strict';
  var uC = ge(),
    lC = require('path'),
    fC = tt(),
    hC = zo();
  function dC(r, e, t) {
    let n = lC.dirname(r);
    uC.existsSync(n) || fC.mkdirsSync(n), hC.writeJsonSync(r, e, t);
  }
  Vg.exports = dC;
});
var Kg = E((mL, Xg) => {
  'use strict';
  var pC = We().fromCallback,
    Be = zo();
  Be.outputJson = pC(zg());
  Be.outputJsonSync = Wg();
  Be.outputJSON = Be.outputJson;
  Be.outputJSONSync = Be.outputJsonSync;
  Be.writeJSON = Be.writeJson;
  Be.writeJSONSync = Be.writeJsonSync;
  Be.readJSON = Be.readJson;
  Be.readJSONSync = Be.readJsonSync;
  Xg.exports = Be;
});
var Qg = E((yL, Zg) => {
  'use strict';
  var Xe = ge(),
    Wr = require('path'),
    mC = El().copySync,
    Sl = Oi().removeSync,
    yC = tt().mkdirsSync,
    EC = ml();
  function Jg(r, e, t) {
    t = t || {};
    let n = t.overwrite || t.clobber || !1;
    if (((r = Wr.resolve(r)), (e = Wr.resolve(e)), r === e)) return Xe.accessSync(r);
    if (bC(r, e)) throw new Error(`Cannot move '${r}' into itself '${e}'.`);
    yC(Wr.dirname(e)), i();
    function i() {
      if (n)
        try {
          return Xe.renameSync(r, e);
        } catch (s) {
          if (s.code === 'ENOTEMPTY' || s.code === 'EEXIST' || s.code === 'EPERM')
            return Sl(e), (t.overwrite = !1), Jg(r, e, t);
          if (s.code !== 'EXDEV') throw s;
          return Yg(r, e, n);
        }
      else
        try {
          return Xe.linkSync(r, e), Xe.unlinkSync(r);
        } catch (s) {
          if (
            s.code === 'EXDEV' ||
            s.code === 'EISDIR' ||
            s.code === 'EPERM' ||
            s.code === 'ENOTSUP'
          )
            return Yg(r, e, n);
          throw s;
        }
    }
  }
  function Yg(r, e, t) {
    return Xe.statSync(r).isDirectory() ? _C(r, e, t) : gC(r, e, t);
  }
  function gC(r, e, t) {
    let i = EC(65536),
      s = t ? 'w' : 'wx',
      o = Xe.openSync(r, 'r'),
      a = Xe.fstatSync(o),
      c = Xe.openSync(e, s, a.mode),
      u = 0;
    for (; u < a.size; ) {
      let l = Xe.readSync(o, i, 0, 65536, u);
      Xe.writeSync(c, i, 0, l), (u += l);
    }
    return Xe.closeSync(o), Xe.closeSync(c), Xe.unlinkSync(r);
  }
  function _C(r, e, t) {
    let n = { overwrite: !1 };
    t && Sl(e), i();
    function i() {
      return mC(r, e, n), Sl(r);
    }
  }
  function bC(r, e) {
    try {
      return (
        Xe.statSync(r).isDirectory() &&
        r !== e &&
        e.indexOf(r) > -1 &&
        e.split(Wr.dirname(r) + Wr.sep)[1].split(Wr.sep)[0] === Wr.basename(r)
      );
    } catch {
      return !1;
    }
  }
  Zg.exports = { moveSync: Jg };
});
var n_ = E((EL, r_) => {
  'use strict';
  var vC = We().fromCallback,
    wl = ge(),
    Ni = require('path'),
    SC = bl().copy,
    t_ = Oi().remove,
    wC = tt().mkdirp,
    RC = Ct().pathExists;
  function TC(r, e, t, n) {
    typeof t == 'function' && ((n = t), (t = {}));
    let i = t.overwrite || t.clobber || !1;
    if (((r = Ni.resolve(r)), (e = Ni.resolve(e)), r === e)) return wl.access(r, n);
    wl.stat(r, (s, o) => {
      if (s) return n(s);
      if (o.isDirectory() && CC(r, e))
        return n(new Error(`Cannot move '${r}' to a subdirectory of itself, '${e}'.`));
      wC(Ni.dirname(e), (a) => (a ? n(a) : xC(r, e, i, n)));
    });
  }
  function xC(r, e, t, n) {
    if (t) return t_(e, (i) => (i ? n(i) : e_(r, e, t, n)));
    RC(e, (i, s) => (i ? n(i) : s ? n(new Error('dest already exists.')) : e_(r, e, t, n)));
  }
  function e_(r, e, t, n) {
    wl.rename(r, e, (i) => (i ? (i.code !== 'EXDEV' ? n(i) : OC(r, e, t, n)) : n()));
  }
  function OC(r, e, t, n) {
    SC(r, e, { overwrite: t, errorOnExist: !0 }, (s) => (s ? n(s) : t_(r, n)));
  }
  function CC(r, e) {
    let t = r.split(Ni.sep),
      n = e.split(Ni.sep);
    return t.reduce((i, s, o) => i && n[o] === s, !0);
  }
  r_.exports = { move: vC(TC) };
});
var a_ = E((gL, o_) => {
  'use strict';
  var IC = We().fromCallback,
    Ai = ge(),
    i_ = require('path'),
    s_ = tt(),
    NC = Ct().pathExists;
  function AC(r, e, t, n) {
    typeof t == 'function' && ((n = t), (t = 'utf8'));
    let i = i_.dirname(r);
    NC(i, (s, o) => {
      if (s) return n(s);
      if (o) return Ai.writeFile(r, e, t, n);
      s_.mkdirs(i, (a) => {
        if (a) return n(a);
        Ai.writeFile(r, e, t, n);
      });
    });
  }
  function DC(r, ...e) {
    let t = i_.dirname(r);
    if (Ai.existsSync(t)) return Ai.writeFileSync(r, ...e);
    s_.mkdirsSync(t), Ai.writeFileSync(r, ...e);
  }
  o_.exports = { outputFile: IC(AC), outputFileSync: DC };
});
var Tl = E((_L, Rl) => {
  'use strict';
  Rl.exports = Object.assign(
    {},
    sl(),
    El(),
    bl(),
    dg(),
    Ug(),
    Kg(),
    tt(),
    Qg(),
    n_(),
    a_(),
    Ct(),
    Oi()
  );
  var c_ = require('fs');
  Object.getOwnPropertyDescriptor(c_, 'promises') &&
    Object.defineProperty(Rl.exports, 'promises', {
      get() {
        return c_.promises;
      },
    });
});
var Ol = E((xl) => {
  'use strict';
  Object.defineProperty(xl, '__esModule', { value: !0 });
  function kC(r) {
    return typeof r == 'function';
  }
  xl.isFunction = kC;
});
var Vo = E((Il) => {
  'use strict';
  Object.defineProperty(Il, '__esModule', { value: !0 });
  var Cl = !1;
  Il.config = {
    Promise: void 0,
    set useDeprecatedSynchronousErrorHandling(r) {
      if (r) {
        var e = new Error();
        console.warn(
          `DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: 
` + e.stack
        );
      } else Cl && console.log('RxJS: Back to a better error behavior. Thank you. <3');
      Cl = r;
    },
    get useDeprecatedSynchronousErrorHandling() {
      return Cl;
    },
  };
});
var Wo = E((Nl) => {
  'use strict';
  Object.defineProperty(Nl, '__esModule', { value: !0 });
  function LC(r) {
    setTimeout(function () {
      throw r;
    }, 0);
  }
  Nl.hostReportError = LC;
});
var Dl = E((Al) => {
  'use strict';
  Object.defineProperty(Al, '__esModule', { value: !0 });
  var PC = Vo(),
    UC = Wo();
  Al.empty = {
    closed: !0,
    next: function (r) {},
    error: function (r) {
      if (PC.config.useDeprecatedSynchronousErrorHandling) throw r;
      UC.hostReportError(r);
    },
    complete: function () {},
  };
});
var u_ = E((kl) => {
  'use strict';
  Object.defineProperty(kl, '__esModule', { value: !0 });
  kl.isArray = (function () {
    return (
      Array.isArray ||
      function (r) {
        return r && typeof r.length == 'number';
      }
    );
  })();
});
var Pl = E((Ll) => {
  'use strict';
  Object.defineProperty(Ll, '__esModule', { value: !0 });
  function FC(r) {
    return r !== null && typeof r == 'object';
  }
  Ll.isObject = FC;
});
var l_ = E((Ul) => {
  'use strict';
  Object.defineProperty(Ul, '__esModule', { value: !0 });
  var MC = (function () {
    function r(e) {
      return (
        Error.call(this),
        (this.message = e
          ? e.length +
            ` errors occurred during unsubscription:
` +
            e.map(function (t, n) {
              return n + 1 + ') ' + t.toString();
            }).join(`
  `)
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = e),
        this
      );
    }
    return (r.prototype = Object.create(Error.prototype)), r;
  })();
  Ul.UnsubscriptionError = MC;
});
var yr = E((Fl) => {
  'use strict';
  Object.defineProperty(Fl, '__esModule', { value: !0 });
  var qC = u_(),
    BC = Pl(),
    jC = Ol(),
    Xo = l_(),
    GC = (function () {
      function r(e) {
        (this.closed = !1),
          (this._parentOrParents = null),
          (this._subscriptions = null),
          e && (this._unsubscribe = e);
      }
      return (
        (r.prototype.unsubscribe = function () {
          var e;
          if (!this.closed) {
            var t = this,
              n = t._parentOrParents,
              i = t._unsubscribe,
              s = t._subscriptions;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof r)
            )
              n.remove(this);
            else if (n !== null)
              for (var o = 0; o < n.length; ++o) {
                var a = n[o];
                a.remove(this);
              }
            if (jC.isFunction(i))
              try {
                i.call(this);
              } catch (l) {
                e = l instanceof Xo.UnsubscriptionError ? f_(l.errors) : [l];
              }
            if (qC.isArray(s))
              for (var o = -1, c = s.length; ++o < c; ) {
                var u = s[o];
                if (BC.isObject(u))
                  try {
                    u.unsubscribe();
                  } catch (f) {
                    (e = e || []),
                      f instanceof Xo.UnsubscriptionError
                        ? (e = e.concat(f_(f.errors)))
                        : e.push(f);
                  }
              }
            if (e) throw new Xo.UnsubscriptionError(e);
          }
        }),
        (r.prototype.add = function (e) {
          var t = e;
          if (!e) return r.EMPTY;
          switch (typeof e) {
            case 'function':
              t = new r(e);
            case 'object':
              if (t === this || t.closed || typeof t.unsubscribe != 'function') return t;
              if (this.closed) return t.unsubscribe(), t;
              if (!(t instanceof r)) {
                var n = t;
                (t = new r()), (t._subscriptions = [n]);
              }
              break;
            default:
              throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
          }
          var i = t._parentOrParents;
          if (i === null) t._parentOrParents = this;
          else if (i instanceof r) {
            if (i === this) return t;
            t._parentOrParents = [i, this];
          } else if (i.indexOf(this) === -1) i.push(this);
          else return t;
          var s = this._subscriptions;
          return s === null ? (this._subscriptions = [t]) : s.push(t), t;
        }),
        (r.prototype.remove = function (e) {
          var t = this._subscriptions;
          if (t) {
            var n = t.indexOf(e);
            n !== -1 && t.splice(n, 1);
          }
        }),
        (r.EMPTY = (function (e) {
          return (e.closed = !0), e;
        })(new r())),
        r
      );
    })();
  Fl.Subscription = GC;
  function f_(r) {
    return r.reduce(function (e, t) {
      return e.concat(t instanceof Xo.UnsubscriptionError ? t.errors : t);
    }, []);
  }
});
var Ko = E((Di) => {
  'use strict';
  Object.defineProperty(Di, '__esModule', { value: !0 });
  Di.rxSubscriber = (function () {
    return typeof Symbol == 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
  })();
  Di.$$rxSubscriber = Di.rxSubscriber;
});
var Xr = E((Bn) => {
  'use strict';
  var d_ =
    (Bn && Bn.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Bn, '__esModule', { value: !0 });
  var h_ = Ol(),
    Ml = Dl(),
    $C = yr(),
    HC = Ko(),
    qn = Vo(),
    Yo = Wo(),
    p_ = (function (r) {
      d_(e, r);
      function e(t, n, i) {
        var s = r.call(this) || this;
        switch (
          ((s.syncErrorValue = null),
          (s.syncErrorThrown = !1),
          (s.syncErrorThrowable = !1),
          (s.isStopped = !1),
          arguments.length)
        ) {
          case 0:
            s.destination = Ml.empty;
            break;
          case 1:
            if (!t) {
              s.destination = Ml.empty;
              break;
            }
            if (typeof t == 'object') {
              t instanceof e
                ? ((s.syncErrorThrowable = t.syncErrorThrowable), (s.destination = t), t.add(s))
                : ((s.syncErrorThrowable = !0), (s.destination = new ql(s, t)));
              break;
            }
          default:
            (s.syncErrorThrowable = !0), (s.destination = new ql(s, t, n, i));
            break;
        }
        return s;
      }
      return (
        (e.prototype[HC.rxSubscriber] = function () {
          return this;
        }),
        (e.create = function (t, n, i) {
          var s = new e(t, n, i);
          return (s.syncErrorThrowable = !1), s;
        }),
        (e.prototype.next = function (t) {
          this.isStopped || this._next(t);
        }),
        (e.prototype.error = function (t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }),
        (e.prototype.complete = function () {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }),
        (e.prototype.unsubscribe = function () {
          this.closed || ((this.isStopped = !0), r.prototype.unsubscribe.call(this));
        }),
        (e.prototype._next = function (t) {
          this.destination.next(t);
        }),
        (e.prototype._error = function (t) {
          this.destination.error(t), this.unsubscribe();
        }),
        (e.prototype._complete = function () {
          this.destination.complete(), this.unsubscribe();
        }),
        (e.prototype._unsubscribeAndRecycle = function () {
          var t = this._parentOrParents;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }),
        e
      );
    })($C.Subscription);
  Bn.Subscriber = p_;
  var ql = (function (r) {
    d_(e, r);
    function e(t, n, i, s) {
      var o = r.call(this) || this;
      o._parentSubscriber = t;
      var a,
        c = o;
      return (
        h_.isFunction(n)
          ? (a = n)
          : n &&
            ((a = n.next),
            (i = n.error),
            (s = n.complete),
            n !== Ml.empty &&
              ((c = Object.create(n)),
              h_.isFunction(c.unsubscribe) && o.add(c.unsubscribe.bind(c)),
              (c.unsubscribe = o.unsubscribe.bind(o)))),
        (o._context = c),
        (o._next = a),
        (o._error = i),
        (o._complete = s),
        o
      );
    }
    return (
      (e.prototype.next = function (t) {
        if (!this.isStopped && this._next) {
          var n = this._parentSubscriber;
          !qn.config.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable
            ? this.__tryOrUnsub(this._next, t)
            : this.__tryOrSetError(n, this._next, t) && this.unsubscribe();
        }
      }),
      (e.prototype.error = function (t) {
        if (!this.isStopped) {
          var n = this._parentSubscriber,
            i = qn.config.useDeprecatedSynchronousErrorHandling;
          if (this._error)
            !i || !n.syncErrorThrowable
              ? (this.__tryOrUnsub(this._error, t), this.unsubscribe())
              : (this.__tryOrSetError(n, this._error, t), this.unsubscribe());
          else if (n.syncErrorThrowable)
            i ? ((n.syncErrorValue = t), (n.syncErrorThrown = !0)) : Yo.hostReportError(t),
              this.unsubscribe();
          else {
            if ((this.unsubscribe(), i)) throw t;
            Yo.hostReportError(t);
          }
        }
      }),
      (e.prototype.complete = function () {
        var t = this;
        if (!this.isStopped) {
          var n = this._parentSubscriber;
          if (this._complete) {
            var i = function () {
              return t._complete.call(t._context);
            };
            !qn.config.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable
              ? (this.__tryOrUnsub(i), this.unsubscribe())
              : (this.__tryOrSetError(n, i), this.unsubscribe());
          } else this.unsubscribe();
        }
      }),
      (e.prototype.__tryOrUnsub = function (t, n) {
        try {
          t.call(this._context, n);
        } catch (i) {
          if ((this.unsubscribe(), qn.config.useDeprecatedSynchronousErrorHandling)) throw i;
          Yo.hostReportError(i);
        }
      }),
      (e.prototype.__tryOrSetError = function (t, n, i) {
        if (!qn.config.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
        try {
          n.call(this._context, i);
        } catch (s) {
          return qn.config.useDeprecatedSynchronousErrorHandling
            ? ((t.syncErrorValue = s), (t.syncErrorThrown = !0), !0)
            : (Yo.hostReportError(s), !0);
        }
        return !1;
      }),
      (e.prototype._unsubscribe = function () {
        var t = this._parentSubscriber;
        (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
      }),
      e
    );
  })(p_);
  Bn.SafeSubscriber = ql;
});
var m_ = E((Bl) => {
  'use strict';
  Object.defineProperty(Bl, '__esModule', { value: !0 });
  var zC = Xr();
  function VC(r) {
    for (; r; ) {
      var e = r,
        t = e.closed,
        n = e.destination,
        i = e.isStopped;
      if (t || i) return !1;
      n && n instanceof zC.Subscriber ? (r = n) : (r = null);
    }
    return !0;
  }
  Bl.canReportError = VC;
});
var E_ = E((Gl) => {
  'use strict';
  Object.defineProperty(Gl, '__esModule', { value: !0 });
  var jl = Xr(),
    y_ = Ko(),
    WC = Dl();
  function XC(r, e, t) {
    if (r) {
      if (r instanceof jl.Subscriber) return r;
      if (r[y_.rxSubscriber]) return r[y_.rxSubscriber]();
    }
    return !r && !e && !t ? new jl.Subscriber(WC.empty) : new jl.Subscriber(r, e, t);
  }
  Gl.toSubscriber = XC;
});
var jn = E(($l) => {
  'use strict';
  Object.defineProperty($l, '__esModule', { value: !0 });
  $l.observable = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })();
});
var g_ = E((Hl) => {
  'use strict';
  Object.defineProperty(Hl, '__esModule', { value: !0 });
  function KC(r) {
    return r;
  }
  Hl.identity = KC;
});
var b_ = E((Jo) => {
  'use strict';
  Object.defineProperty(Jo, '__esModule', { value: !0 });
  var YC = g_();
  function JC() {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    return __(r);
  }
  Jo.pipe = JC;
  function __(r) {
    return r.length === 0
      ? YC.identity
      : r.length === 1
        ? r[0]
        : function (t) {
            return r.reduce(function (n, i) {
              return i(n);
            }, t);
          };
  }
  Jo.pipeFromArray = __;
});
var Er = E((zl) => {
  'use strict';
  Object.defineProperty(zl, '__esModule', { value: !0 });
  var ZC = m_(),
    QC = E_(),
    eI = jn(),
    tI = b_(),
    Zo = Vo(),
    rI = (function () {
      function r(e) {
        (this._isScalar = !1), e && (this._subscribe = e);
      }
      return (
        (r.prototype.lift = function (e) {
          var t = new r();
          return (t.source = this), (t.operator = e), t;
        }),
        (r.prototype.subscribe = function (e, t, n) {
          var i = this.operator,
            s = QC.toSubscriber(e, t, n);
          if (
            (i
              ? s.add(i.call(s, this.source))
              : s.add(
                  this.source ||
                    (Zo.config.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable)
                    ? this._subscribe(s)
                    : this._trySubscribe(s)
                ),
            Zo.config.useDeprecatedSynchronousErrorHandling &&
              s.syncErrorThrowable &&
              ((s.syncErrorThrowable = !1), s.syncErrorThrown))
          )
            throw s.syncErrorValue;
          return s;
        }),
        (r.prototype._trySubscribe = function (e) {
          try {
            return this._subscribe(e);
          } catch (t) {
            Zo.config.useDeprecatedSynchronousErrorHandling &&
              ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
              ZC.canReportError(e) ? e.error(t) : console.warn(t);
          }
        }),
        (r.prototype.forEach = function (e, t) {
          var n = this;
          return (
            (t = v_(t)),
            new t(function (i, s) {
              var o;
              o = n.subscribe(
                function (a) {
                  try {
                    e(a);
                  } catch (c) {
                    s(c), o && o.unsubscribe();
                  }
                },
                s,
                i
              );
            })
          );
        }),
        (r.prototype._subscribe = function (e) {
          var t = this.source;
          return t && t.subscribe(e);
        }),
        (r.prototype[eI.observable] = function () {
          return this;
        }),
        (r.prototype.pipe = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return e.length === 0 ? this : tI.pipeFromArray(e)(this);
        }),
        (r.prototype.toPromise = function (e) {
          var t = this;
          return (
            (e = v_(e)),
            new e(function (n, i) {
              var s;
              t.subscribe(
                function (o) {
                  return (s = o);
                },
                function (o) {
                  return i(o);
                },
                function () {
                  return n(s);
                }
              );
            })
          );
        }),
        (r.create = function (e) {
          return new r(e);
        }),
        r
      );
    })();
  zl.Observable = rI;
  function v_(r) {
    if ((r || (r = Zo.config.Promise || Promise), !r)) throw new Error('no Promise impl found');
    return r;
  }
});
var S_ = E((Vl) => {
  'use strict';
  Object.defineProperty(Vl, '__esModule', { value: !0 });
  var nI = (function () {
    function r() {
      return (
        Error.call(this),
        (this.message = 'object unsubscribed'),
        (this.name = 'ObjectUnsubscribedError'),
        this
      );
    }
    return (r.prototype = Object.create(Error.prototype)), r;
  })();
  Vl.ObjectUnsubscribedError = nI;
});
var w_ = E((ki) => {
  'use strict';
  var iI =
    (ki && ki.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(ki, '__esModule', { value: !0 });
  var sI = yr(),
    oI = (function (r) {
      iI(e, r);
      function e(t, n) {
        var i = r.call(this) || this;
        return (i.subject = t), (i.subscriber = n), (i.closed = !1), i;
      }
      return (
        (e.prototype.unsubscribe = function () {
          if (!this.closed) {
            this.closed = !0;
            var t = this.subject,
              n = t.observers;
            if (((this.subject = null), !(!n || n.length === 0 || t.isStopped || t.closed))) {
              var i = n.indexOf(this.subscriber);
              i !== -1 && n.splice(i, 1);
            }
          }
        }),
        e
      );
    })(sI.Subscription);
  ki.SubjectSubscription = oI;
});
var O_ = E((Kr) => {
  'use strict';
  var Kl =
    (Kr && Kr.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Kr, '__esModule', { value: !0 });
  var R_ = Er(),
    aI = Xr(),
    Wl = yr(),
    Li = S_(),
    cI = w_(),
    uI = Ko(),
    T_ = (function (r) {
      Kl(e, r);
      function e(t) {
        var n = r.call(this, t) || this;
        return (n.destination = t), n;
      }
      return e;
    })(aI.Subscriber);
  Kr.SubjectSubscriber = T_;
  var x_ = (function (r) {
    Kl(e, r);
    function e() {
      var t = r.call(this) || this;
      return (
        (t.observers = []),
        (t.closed = !1),
        (t.isStopped = !1),
        (t.hasError = !1),
        (t.thrownError = null),
        t
      );
    }
    return (
      (e.prototype[uI.rxSubscriber] = function () {
        return new T_(this);
      }),
      (e.prototype.lift = function (t) {
        var n = new Xl(this, this);
        return (n.operator = t), n;
      }),
      (e.prototype.next = function (t) {
        if (this.closed) throw new Li.ObjectUnsubscribedError();
        if (!this.isStopped)
          for (var n = this.observers, i = n.length, s = n.slice(), o = 0; o < i; o++) s[o].next(t);
      }),
      (e.prototype.error = function (t) {
        if (this.closed) throw new Li.ObjectUnsubscribedError();
        (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
        for (var n = this.observers, i = n.length, s = n.slice(), o = 0; o < i; o++) s[o].error(t);
        this.observers.length = 0;
      }),
      (e.prototype.complete = function () {
        if (this.closed) throw new Li.ObjectUnsubscribedError();
        this.isStopped = !0;
        for (var t = this.observers, n = t.length, i = t.slice(), s = 0; s < n; s++)
          i[s].complete();
        this.observers.length = 0;
      }),
      (e.prototype.unsubscribe = function () {
        (this.isStopped = !0), (this.closed = !0), (this.observers = null);
      }),
      (e.prototype._trySubscribe = function (t) {
        if (this.closed) throw new Li.ObjectUnsubscribedError();
        return r.prototype._trySubscribe.call(this, t);
      }),
      (e.prototype._subscribe = function (t) {
        if (this.closed) throw new Li.ObjectUnsubscribedError();
        return this.hasError
          ? (t.error(this.thrownError), Wl.Subscription.EMPTY)
          : this.isStopped
            ? (t.complete(), Wl.Subscription.EMPTY)
            : (this.observers.push(t), new cI.SubjectSubscription(this, t));
      }),
      (e.prototype.asObservable = function () {
        var t = new R_.Observable();
        return (t.source = this), t;
      }),
      (e.create = function (t, n) {
        return new Xl(t, n);
      }),
      e
    );
  })(R_.Observable);
  Kr.Subject = x_;
  var Xl = (function (r) {
    Kl(e, r);
    function e(t, n) {
      var i = r.call(this) || this;
      return (i.destination = t), (i.source = n), i;
    }
    return (
      (e.prototype.next = function (t) {
        var n = this.destination;
        n && n.next && n.next(t);
      }),
      (e.prototype.error = function (t) {
        var n = this.destination;
        n && n.error && this.destination.error(t);
      }),
      (e.prototype.complete = function () {
        var t = this.destination;
        t && t.complete && this.destination.complete();
      }),
      (e.prototype._subscribe = function (t) {
        var n = this.source;
        return n ? this.source.subscribe(t) : Wl.Subscription.EMPTY;
      }),
      e
    );
  })(x_);
  Kr.AnonymousSubject = Xl;
});
function hI(r, e, t) {
  let n = Zr();
  return new Ln(r, t, e, n);
}
function dI(r, e, t) {
  let n = JSON.stringify(r.map((i) => ({ taskId: i.taskId, hash: i.hash, code: i.status })));
  A && Qo.note({ title: `Executed tasks with hashes: ${n}` }),
    (0, C_.writeFileSync)(I_.join(e, `tasks-hashes-${t}`), n);
}
function pI(r, e, t) {
  r.filter((i) => i.cacheStatus === 'local-cache-hit')
    .map((i) => i.hash)
    .forEach((i) => e.store(i, t));
}
async function Yl({
  daemon: r,
  options: e,
  fileStorage: t,
  remoteCache: n,
  api: i,
  outputObfuscator: s,
  runStartTime: o,
  messages: a,
  endOfRunMessage: c,
  taskExecutions: u,
  versionOfNxBefore133: l,
  inner: f,
  encryptionKey: h,
  storeInCurrentProcess: d,
  distributedExecutionId: m,
  runContext: b,
  projectGraph: p,
}) {
  let S = new Date().toISOString(),
    D = me(),
    x = {
      command: s.obfuscate(es()),
      startTime: o,
      endTime: S,
      distributedExecutionId: m,
      branch: D,
      runGroup: ve(),
      sha: D ? Ke() : void 0,
      inner: f,
    },
    P = { branch: D, runGroup: ve(), ciExecutionId: je(), ciExecutionEnv: Te() };
  if (d) {
    ut(m) && (dI(u, ea, m), pI(u, n, ea));
    try {
      await n.waitForStoreRequestsToComplete();
    } catch {
      return Qo.error({ title: "Nx Cloud wasn't able to store artifacts." }), a.printMessages(), !1;
    }
    for (let k of t.storedHashes) {
      let O = u.find((j) => j.hash === k);
      if (!O) throw new Error(`Task with hash ${k} isn't recorded`);
      O.uploadedToStorage = !0;
    }
    u.forEach((k) => {
      var O;
      k.artifactId = (O = b.allTasks.find((j) => j.hash == k.hash)) == null ? void 0 : O.artifactId;
    });
    try {
      await i.endRun(x, u, P, p);
    } catch {
      return Qo.error({ title: "Nx Cloud wasn't able to record its run." }), a.printMessages(), !1;
    }
    await on(e);
  } else
    try {
      let k = Dt ? Dt : e.accessToken,
        O = Ao(),
        j = require.resolve('./lib/daemon/process-run-end');
      await r.processInBackground(j, {
        encryptionKey: h,
        runnerOptions: { ...e, accessToken: k },
        delayedStoreRequests: n.delayedStoreRequests,
        ciExecutionContext: P,
        runEnd: { runData: x, taskExecutions: u, allTasks: b.allTasks, linkId: O },
        lightRunnerResolutionPaths: wr,
      }),
        (b.runUrl = `${_s(e.url || 'https://nx.app')}/runs/${O}`);
    } catch (k) {
      return Qo.warn({ title: 'Nx Cloud Problems', bodyLines: [k.message || k.toString()] }), !1;
    }
  return (
    l
      ? setTimeout(() => {
          a.printMessages(), !a.anyErrors && !f && c.printCacheHitsMessage();
        }, 0)
      : (a.printMessages(), !a.anyErrors && !f && c.printCacheHitsMessage()),
    !0
  );
}
function mI(r, e, t, n) {
  let i = new Oo(r, ea, !0, e.cacheableOperations || [], t, n);
  try {
    let { CompositeLifeCycle: s } = dt();
    return s ? new s([e.lifeCycle, i]) : i;
  } catch {
    return i;
  }
}
async function yI(r, e, t, n, i) {
  if (n.skipNxCache) return;
  let s = t.map((c) => c.hash).filter((c) => !!c),
    o = await Promise.all(
      s.map((c) => {
        let u = (0, N_.join)(ea, `${c}.commit`);
        return fI(u);
      })
    ),
    a = [];
  for (let c = 0; c < o.length; ++c) o[c] || a.push(s[c]);
  if (a.length > 0) {
    let c = r.startRun(i, a);
    for (let u of a) e.requests[u] = c;
  }
}
function Pi(r, e, t, n = !1) {
  var k;
  let i = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID,
    s = { statuses: {}, scheduledTasks: [], requests: {}, allTasks: r },
    o = e.lifeCycle === void 0,
    a = [],
    c = new Dn(e),
    u = hI(c, e, s),
    l = new Ro(s, a, i),
    f = new dr(e.maskedProperties),
    h = new Date().toISOString(),
    d = mI(s, e, f, a),
    m = xr || e.encryptionKey,
    b = new Zt(m),
    p = new Jt(e),
    S = ut(i) || !((k = t.daemon) != null && k.enabled()),
    D = new hr(b, p, e, 'cloud-enabled-runner'),
    x = new Co(c, u, s, D, i, S);
  yI(u, s, r, e, i), delete process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID;
  let P = lI(r, { ...e, remoteCache: x, lifeCycle: d }, t);
  if (P.subscribe) {
    let { Subject: O } = O_(),
      j = new O();
    return (
      P.subscribe({
        next: ($) => j.next($),
        error: ($) => j.error($),
        complete: async () => {
          !(await Yl({
            daemon: t.daemon,
            options: e,
            fileStorage: D,
            remoteCache: x,
            api: u,
            outputObfuscator: f,
            runStartTime: h,
            messages: c,
            endOfRunMessage: l,
            taskExecutions: a,
            versionOfNxBefore133: o,
            inner: n,
            encryptionKey: m,
            storeInCurrentProcess: S,
            runContext: s,
            distributedExecutionId: i,
            projectGraph: t.projectGraph,
          })) &&
            ut(i) &&
            process.exit(Xt),
            j.complete();
        },
      }),
      j
    );
  } else
    return P.then(
      async (O) => (
        !(await Yl({
          daemon: t.daemon,
          options: e,
          fileStorage: D,
          remoteCache: x,
          api: u,
          outputObfuscator: f,
          runStartTime: h,
          messages: c,
          endOfRunMessage: l,
          taskExecutions: a,
          versionOfNxBefore133: o,
          inner: n,
          encryptionKey: m,
          storeInCurrentProcess: S,
          runContext: s,
          distributedExecutionId: i,
          projectGraph: t.projectGraph,
        })) &&
          ut(i) &&
          process.exit(Xt),
        O
      )
    ).catch(async (O) => {
      throw (
        (!(await Yl({
          daemon: t.daemon,
          options: e,
          fileStorage: D,
          remoteCache: x,
          api: u,
          outputObfuscator: f,
          runStartTime: h,
          messages: c,
          endOfRunMessage: l,
          taskExecutions: a,
          versionOfNxBefore133: o,
          inner: n,
          encryptionKey: m,
          storeInCurrentProcess: S,
          runContext: s,
          distributedExecutionId: i,
          projectGraph: t.projectGraph,
        })) &&
          ut(i) &&
          process.exit(Xt),
        O)
      );
    });
}
var C_,
  I_,
  N_,
  Qo,
  lI,
  ea,
  fI,
  A_ = q(() => {
    'use strict';
    (C_ = require('fs')), (I_ = Sr(require('path'))), (N_ = require('path'));
    te();
    Rr();
    kt();
    cc();
    bs();
    vs();
    wo();
    Xy();
    Gu();
    To();
    Zy();
    Qy();
    Ju();
    Zu();
    ({ output: Qo } = Y()),
      ({ tasksRunner: lI, cacheDirectory: ea } = dt()),
      ({ pathExists: fI } = Tl());
  });
function Ui(r) {
  return (0, k_.join)((0, D_.tmpdir)(), `run-group-${r}-marker.lock`);
}
function L_(r) {
  (0, ta.mkdirSync)(Ui(r));
}
function P_(r, e) {
  if (e === void 0) return;
  let t = Ui(r);
  (0, ta.writeFileSync)(`${t}/pid`, e.toString());
}
var ta,
  D_,
  k_,
  U_ = q(() => {
    'use strict';
    (ta = require('fs')), (D_ = require('os')), (k_ = require('path'));
  });
async function na() {
  if (me() == null) return;
  let r = ve();
  A && Gn.note({ title: `Trying to create heartbeat background process for run group: ${r}` });
  try {
    L_(r);
  } catch {
    let t = await gI(r);
    A &&
      (t === void 0
        ? Gn.note({ title: 'Heartbeat marker exists, but no process could be found.' })
        : Gn.note({ title: `Heartbeat marker exists, process expected with pid ${t}` })),
      M_(r, t);
    return;
  }
  await EI(r).catch(() => {
    Gn.error({
      title: 'Took longer than 3 seconds to hear from heartbeat process',
      bodyLines: [
        'The heartbeat process may have not started properly. This CIPE could have inconsistent status reporting.',
      ],
    });
  });
}
async function EI(r) {
  let e = process.env.NX_CLOUD_HEARTBEAT_INHERIT_STDIO == 'true' ? 'inherit' : 'pipe';
  return new Promise((t, n) => {
    let i = (0, F_.spawn)(
      process.execPath,
      [require.resolve('./lib/heartbeat/heartbeat-process.js')],
      {
        detached: !0,
        windowsHide: !0,
        stdio: e,
        env: { ...process.env, NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS: JSON.stringify(wr) },
      }
    );
    e === 'pipe'
      ? (i.stdout.on('data', (s) => {
          s == 'heartbeat-ready' &&
            (A && Gn.note({ title: `Heartbeat process started successfully with PID ${i.pid}` }),
            P_(r, i.pid),
            M_(r, i.pid),
            i.unref(),
            t());
        }),
        setTimeout(() => n(), 3e3))
      : t();
  });
}
async function gI(r) {
  let e = Ui(r),
    t = 1;
  for (; t <= 3; )
    try {
      let n = (0, Mi.readFileSync)(`${e}/pid`, { encoding: 'utf-8' });
      return Number(n);
    } catch {
      await Ge(1e3), (t += 1);
    }
}
function M_(r, e) {
  e !== void 0 &&
    (ra ||
      ((ra = setInterval(() => {
        if (!_I(e)) {
          let t = Ui(r),
            n;
          try {
            n = (0, Mi.readFileSync)(`${t}/logs`, { encoding: 'utf-8' });
          } catch {
            n = 'Unable to find shutdown logs, likely the heartbeat process was sent a SIGKILL';
          }
          Fi(),
            Gn.error({
              title: 'Nx Cloud Heartbeat missing',
              bodyLines: [
                `Expected to find process with PID ${e} but none was found.`,
                'Output:',
                ...n.split(`
`),
              ],
            }),
            (0, Mi.rmdirSync)(t, { recursive: !0 });
        }
      }, 1e3)),
      process.on('SIGINT', Fi),
      process.on('SIGTERM', Fi),
      process.on('uncaughtException', Fi),
      process.on('exit', Fi)));
}
function Fi() {
  clearInterval(ra), (ra = void 0);
}
function _I(r) {
  try {
    return process.kill(r, 0), !0;
  } catch {
    return !1;
  }
}
var F_,
  Mi,
  Gn,
  ra,
  Jl = q(() => {
    'use strict';
    (F_ = require('child_process')), (Mi = require('fs'));
    te();
    Rr();
    Qr();
    U_();
    ({ output: Gn } = Y());
  });
function j_() {
  (0, ia.writeFileSync)(B_, 'true');
}
function G_(r, e) {
  if (r === !0) return !0;
  if (r === !1) return !1;
  if (e === !0) return !0;
  if (e === !1) return !1;
  let t = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION;
  if (t === 'false' || t === 'FALSE' || t === '0') return !1;
  if (t === 'true' || t === 'TRUE' || t === '1') return !0;
  try {
    return (0, ia.readFileSync)(B_), !0;
  } catch {
    return !1;
  }
}
var ia,
  q_,
  sa,
  B_,
  Zl = q(() => {
    'use strict';
    (ia = require('fs')),
      (q_ = require('os')),
      (sa = require('path')),
      (B_ = (0, sa.join)(
        (0, q_.tmpdir)(),
        `NX_CLOUD_DISTRIBUTED_EXECUTION-${(0, sa.basename)(process.cwd())}`
      ));
  });
async function qi(r) {
  let e = Oe(r);
  return await ce(() => e.get('/nx-cloud/executions/workspace-status'));
}
var Ql = q(() => {
  'use strict';
  gt();
});
var $_ = E((ef) => {
  'use strict';
  Object.defineProperty(ef, '__esModule', { value: !0 });
  ef.subscribeToArray = function (r) {
    return function (e) {
      for (var t = 0, n = r.length; t < n && !e.closed; t++) e.next(r[t]);
      e.complete();
    };
  };
});
var H_ = E((tf) => {
  'use strict';
  Object.defineProperty(tf, '__esModule', { value: !0 });
  var bI = Wo();
  tf.subscribeToPromise = function (r) {
    return function (e) {
      return (
        r
          .then(
            function (t) {
              e.closed || (e.next(t), e.complete());
            },
            function (t) {
              return e.error(t);
            }
          )
          .then(null, bI.hostReportError),
        e
      );
    };
  };
});
var Bi = E(($n) => {
  'use strict';
  Object.defineProperty($n, '__esModule', { value: !0 });
  function z_() {
    return typeof Symbol != 'function' || !Symbol.iterator ? '@@iterator' : Symbol.iterator;
  }
  $n.getSymbolIterator = z_;
  $n.iterator = z_();
  $n.$$iterator = $n.iterator;
});
var V_ = E((rf) => {
  'use strict';
  Object.defineProperty(rf, '__esModule', { value: !0 });
  var vI = Bi();
  rf.subscribeToIterable = function (r) {
    return function (e) {
      var t = r[vI.iterator]();
      do {
        var n = t.next();
        if (n.done) {
          e.complete();
          break;
        }
        if ((e.next(n.value), e.closed)) break;
      } while (!0);
      return (
        typeof t.return == 'function' &&
          e.add(function () {
            t.return && t.return();
          }),
        e
      );
    };
  };
});
var W_ = E((nf) => {
  'use strict';
  Object.defineProperty(nf, '__esModule', { value: !0 });
  var SI = jn();
  nf.subscribeToObservable = function (r) {
    return function (e) {
      var t = r[SI.observable]();
      if (typeof t.subscribe != 'function')
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
      return t.subscribe(e);
    };
  };
});
var of = E((sf) => {
  'use strict';
  Object.defineProperty(sf, '__esModule', { value: !0 });
  sf.isArrayLike = function (r) {
    return r && typeof r.length == 'number' && typeof r != 'function';
  };
});
var cf = E((af) => {
  'use strict';
  Object.defineProperty(af, '__esModule', { value: !0 });
  function wI(r) {
    return !!r && typeof r.subscribe != 'function' && typeof r.then == 'function';
  }
  af.isPromise = wI;
});
var lf = E((uf) => {
  'use strict';
  Object.defineProperty(uf, '__esModule', { value: !0 });
  var RI = $_(),
    TI = H_(),
    xI = V_(),
    OI = W_(),
    CI = of(),
    II = cf(),
    NI = Pl(),
    AI = Bi(),
    DI = jn();
  uf.subscribeTo = function (r) {
    if (r && typeof r[DI.observable] == 'function') return OI.subscribeToObservable(r);
    if (CI.isArrayLike(r)) return RI.subscribeToArray(r);
    if (II.isPromise(r)) return TI.subscribeToPromise(r);
    if (r && typeof r[AI.iterator] == 'function') return xI.subscribeToIterable(r);
    var e = NI.isObject(r) ? 'an invalid object' : "'" + r + "'",
      t =
        'You provided ' +
        e +
        ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(t);
  };
});
var X_ = E((ff) => {
  'use strict';
  Object.defineProperty(ff, '__esModule', { value: !0 });
  var kI = Er(),
    LI = yr(),
    PI = jn();
  function UI(r, e) {
    return new kI.Observable(function (t) {
      var n = new LI.Subscription();
      return (
        n.add(
          e.schedule(function () {
            var i = r[PI.observable]();
            n.add(
              i.subscribe({
                next: function (s) {
                  n.add(
                    e.schedule(function () {
                      return t.next(s);
                    })
                  );
                },
                error: function (s) {
                  n.add(
                    e.schedule(function () {
                      return t.error(s);
                    })
                  );
                },
                complete: function () {
                  n.add(
                    e.schedule(function () {
                      return t.complete();
                    })
                  );
                },
              })
            );
          })
        ),
        n
      );
    });
  }
  ff.scheduleObservable = UI;
});
var K_ = E((hf) => {
  'use strict';
  Object.defineProperty(hf, '__esModule', { value: !0 });
  var FI = Er(),
    MI = yr();
  function qI(r, e) {
    return new FI.Observable(function (t) {
      var n = new MI.Subscription();
      return (
        n.add(
          e.schedule(function () {
            return r.then(
              function (i) {
                n.add(
                  e.schedule(function () {
                    t.next(i),
                      n.add(
                        e.schedule(function () {
                          return t.complete();
                        })
                      );
                  })
                );
              },
              function (i) {
                n.add(
                  e.schedule(function () {
                    return t.error(i);
                  })
                );
              }
            );
          })
        ),
        n
      );
    });
  }
  hf.schedulePromise = qI;
});
var Y_ = E((df) => {
  'use strict';
  Object.defineProperty(df, '__esModule', { value: !0 });
  var BI = Er(),
    jI = yr();
  function GI(r, e) {
    return new BI.Observable(function (t) {
      var n = new jI.Subscription(),
        i = 0;
      return (
        n.add(
          e.schedule(function () {
            if (i === r.length) {
              t.complete();
              return;
            }
            t.next(r[i++]), t.closed || n.add(this.schedule());
          })
        ),
        n
      );
    });
  }
  df.scheduleArray = GI;
});
var J_ = E((pf) => {
  'use strict';
  Object.defineProperty(pf, '__esModule', { value: !0 });
  var $I = Er(),
    HI = yr(),
    zI = Bi();
  function VI(r, e) {
    if (!r) throw new Error('Iterable cannot be null');
    return new $I.Observable(function (t) {
      var n = new HI.Subscription(),
        i;
      return (
        n.add(function () {
          i && typeof i.return == 'function' && i.return();
        }),
        n.add(
          e.schedule(function () {
            (i = r[zI.iterator]()),
              n.add(
                e.schedule(function () {
                  if (!t.closed) {
                    var s, o;
                    try {
                      var a = i.next();
                      (s = a.value), (o = a.done);
                    } catch (c) {
                      t.error(c);
                      return;
                    }
                    o ? t.complete() : (t.next(s), this.schedule());
                  }
                })
              );
          })
        ),
        n
      );
    });
  }
  pf.scheduleIterable = VI;
});
var Z_ = E((mf) => {
  'use strict';
  Object.defineProperty(mf, '__esModule', { value: !0 });
  var WI = jn();
  function XI(r) {
    return r && typeof r[WI.observable] == 'function';
  }
  mf.isInteropObservable = XI;
});
var Q_ = E((yf) => {
  'use strict';
  Object.defineProperty(yf, '__esModule', { value: !0 });
  var KI = Bi();
  function YI(r) {
    return r && typeof r[KI.iterator] == 'function';
  }
  yf.isIterable = YI;
});
var eb = E((Ef) => {
  'use strict';
  Object.defineProperty(Ef, '__esModule', { value: !0 });
  var JI = X_(),
    ZI = K_(),
    QI = Y_(),
    e0 = J_(),
    t0 = Z_(),
    r0 = cf(),
    n0 = of(),
    i0 = Q_();
  function s0(r, e) {
    if (r != null) {
      if (t0.isInteropObservable(r)) return JI.scheduleObservable(r, e);
      if (r0.isPromise(r)) return ZI.schedulePromise(r, e);
      if (n0.isArrayLike(r)) return QI.scheduleArray(r, e);
      if (i0.isIterable(r) || typeof r == 'string') return e0.scheduleIterable(r, e);
    }
    throw new TypeError(((r !== null && typeof r) || r) + ' is not observable');
  }
  Ef.scheduled = s0;
});
var _f = E((gf) => {
  'use strict';
  Object.defineProperty(gf, '__esModule', { value: !0 });
  var tb = Er(),
    o0 = lf(),
    a0 = eb();
  function c0(r, e) {
    return e
      ? a0.scheduled(r, e)
      : r instanceof tb.Observable
        ? r
        : new tb.Observable(o0.subscribeTo(r));
  }
  gf.from = c0;
});
var rb = E((ji) => {
  'use strict';
  var u0 =
    (ji && ji.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(ji, '__esModule', { value: !0 });
  var l0 = Xr(),
    f0 = (function (r) {
      u0(e, r);
      function e() {
        return (r !== null && r.apply(this, arguments)) || this;
      }
      return (
        (e.prototype.notifyNext = function (t, n, i, s, o) {
          this.destination.next(n);
        }),
        (e.prototype.notifyError = function (t, n) {
          this.destination.error(t);
        }),
        (e.prototype.notifyComplete = function (t) {
          this.destination.complete();
        }),
        e
      );
    })(l0.Subscriber);
  ji.OuterSubscriber = f0;
});
var bf = E((Gi) => {
  'use strict';
  var h0 =
    (Gi && Gi.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Gi, '__esModule', { value: !0 });
  var d0 = Xr(),
    p0 = (function (r) {
      h0(e, r);
      function e(t, n, i) {
        var s = r.call(this) || this;
        return (s.parent = t), (s.outerValue = n), (s.outerIndex = i), (s.index = 0), s;
      }
      return (
        (e.prototype._next = function (t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
        }),
        (e.prototype._error = function (t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }),
        (e.prototype._complete = function () {
          this.parent.notifyComplete(this), this.unsubscribe();
        }),
        e
      );
    })(d0.Subscriber);
  Gi.InnerSubscriber = p0;
});
var nb = E((vf) => {
  'use strict';
  Object.defineProperty(vf, '__esModule', { value: !0 });
  var m0 = bf(),
    y0 = lf(),
    E0 = Er();
  function g0(r, e, t, n, i) {
    if ((i === void 0 && (i = new m0.InnerSubscriber(r, t, n)), !i.closed))
      return e instanceof E0.Observable ? e.subscribe(i) : y0.subscribeTo(e)(i);
  }
  vf.subscribeToResult = g0;
});
var sb = E((Hn) => {
  'use strict';
  var _0 =
    (Hn && Hn.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Hn, '__esModule', { value: !0 });
  var b0 = Xr();
  function v0(r, e) {
    return function (n) {
      if (typeof r != 'function')
        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
      return n.lift(new ib(r, e));
    };
  }
  Hn.map = v0;
  var ib = (function () {
    function r(e, t) {
      (this.project = e), (this.thisArg = t);
    }
    return (
      (r.prototype.call = function (e, t) {
        return t.subscribe(new S0(e, this.project, this.thisArg));
      }),
      r
    );
  })();
  Hn.MapOperator = ib;
  var S0 = (function (r) {
    _0(e, r);
    function e(t, n, i) {
      var s = r.call(this, t) || this;
      return (s.project = n), (s.count = 0), (s.thisArg = i || s), s;
    }
    return (
      (e.prototype._next = function (t) {
        var n;
        try {
          n = this.project.call(this.thisArg, t, this.count++);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        this.destination.next(n);
      }),
      e
    );
  })(b0.Subscriber);
});
var ab = E(($i) => {
  'use strict';
  var w0 =
    ($i && $i.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty($i, '__esModule', { value: !0 });
  var R0 = rb(),
    T0 = bf(),
    x0 = nb(),
    O0 = sb(),
    C0 = _f();
  function ob(r, e) {
    return typeof e == 'function'
      ? function (t) {
          return t.pipe(
            ob(function (n, i) {
              return C0.from(r(n, i)).pipe(
                O0.map(function (s, o) {
                  return e(n, s, i, o);
                })
              );
            })
          );
        }
      : function (t) {
          return t.lift(new I0(r));
        };
  }
  $i.switchMap = ob;
  var I0 = (function () {
      function r(e) {
        this.project = e;
      }
      return (
        (r.prototype.call = function (e, t) {
          return t.subscribe(new N0(e, this.project));
        }),
        r
      );
    })(),
    N0 = (function (r) {
      w0(e, r);
      function e(t, n) {
        var i = r.call(this, t) || this;
        return (i.project = n), (i.index = 0), i;
      }
      return (
        (e.prototype._next = function (t) {
          var n,
            i = this.index++;
          try {
            n = this.project(t, i);
          } catch (s) {
            this.destination.error(s);
            return;
          }
          this._innerSub(n, t, i);
        }),
        (e.prototype._innerSub = function (t, n, i) {
          var s = this.innerSubscription;
          s && s.unsubscribe();
          var o = new T0.InnerSubscriber(this, n, i),
            a = this.destination;
          a.add(o),
            (this.innerSubscription = x0.subscribeToResult(this, t, void 0, void 0, o)),
            this.innerSubscription !== o && a.add(this.innerSubscription);
        }),
        (e.prototype._complete = function () {
          var t = this.innerSubscription;
          (!t || t.closed) && r.prototype._complete.call(this), this.unsubscribe();
        }),
        (e.prototype._unsubscribe = function () {
          this.innerSubscription = null;
        }),
        (e.prototype.notifyComplete = function (t) {
          var n = this.destination;
          n.remove(t),
            (this.innerSubscription = null),
            this.isStopped && r.prototype._complete.call(this);
        }),
        (e.prototype.notifyNext = function (t, n, i, s, o) {
          this.destination.next(n);
        }),
        e
      );
    })(R0.OuterSubscriber);
});
var Sf,
  A0,
  D0,
  k0,
  cb,
  ub,
  zn,
  wf = q(() => {
    'use strict';
    Sf = require('path');
    te();
    ({ readFile: A0, copy: D0, mkdirSync: k0 } = Tl()),
      ({ output: cb, workspaceRoot: ub } = Y()),
      (zn = class {
        constructor(e, t) {
          this.fileStorage = e;
          this.cacheDirectory = t;
          k0(t, { recursive: !0 });
        }
        async retrieveAndExtract(e, t) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            cb.note({ title: `Retrieving artifacts from ${t}` }),
            await this.fileStorage.retrieve(e, t, this.cacheDirectory);
          let n = (0, Sf.join)(this.cacheDirectory, e, 'outputs');
          return (
            A && cb.note({ title: 'Extracting artifacts', bodyLines: [`from: ${n}`, `to: ${ub}`] }),
            await D0(n, ub),
            (await A0((0, Sf.join)(this.cacheDirectory, e, 'terminalOutput'))).toString()
          );
        }
      });
  });
function gr(r, e) {
  return !!r || !!e;
}
function _r() {
  L0.error({
    title: 'Unable to determine the context for running Nx in CI',
    bodyLines: [
      "- Nx tried to determine the context automatically but wasn't able to do it.",
      '- Use the NX_CI_EXECUTION_ID env variable to set it manually.',
      '- NX_CI_EXECUTION_ID must be a unique value for every CI execution/run.',
    ],
  });
}
var L0,
  Hi = q(() => {
    'use strict';
    ({ output: L0 } = Y());
  });
function lb(r, e, t, n, i, s, o, a) {
  let c = i.map((l) =>
      l.map((f) => ({
        taskId: f.id,
        hash: f.hash,
        projectName: f.target.project,
        target: f.target.target,
        configuration: f.target.configuration || null,
        params: kn(f),
        projectRoot: f.projectRoot,
        cache: f.cache,
      }))
    ),
    u = {
      command: es(),
      branch: r,
      runGroup: e,
      ciExecutionId: t,
      ciExecutionEnv: n,
      tasks: c,
      maxParallel: P0(s),
      commitSha: o,
      projectGraph: null,
    };
  return wa && (u.agentCount = wa), _h || (u.stopAgentsOnFailure = !1), u;
}
function P0(r) {
  return r.parallel === 'false' || r.parallel === !1
    ? 1
    : r.parallel === 'true' || r.parallel === !0
      ? Number(r.maxParallel || 3)
      : r.parallel === void 0
        ? r.maxParallel
          ? Number(r.maxParallel)
          : 3
        : Number(r.parallel) || 3;
}
var Rf,
  Vn,
  Tf = q(() => {
    'use strict';
    gt();
    te();
    Ti();
    kt();
    wi();
    ({ output: Rf } = Y()),
      (Vn = class {
        constructor(e) {
          this.apiAxiosInstance = Oe(e, 6e4);
        }
        async start(e) {
          var i;
          let t = Ce('dteStart'),
            n;
          A &&
            Rf.note({
              title: 'Starting a distributed execution',
              bodyLines: [JSON.stringify(e, null, 2)],
            });
          try {
            (n = await ce(() => this.apiAxiosInstance.post('/nx-cloud/executions/start', e))),
              t.recordMetric(ne(n));
          } catch (s) {
            throw (
              (t.recordMetric(
                (i = s == null ? void 0 : s.axiosException) != null && i.response
                  ? ne(s.axiosException.response)
                  : Ie
              ),
              s)
            );
          }
          if (!n.data.enabled)
            throw new Error('Workspace is disabled. Cannot perform distributed task executions.');
          if (n.data.error) throw new Error(n.data.error);
          return n.data.id;
        }
        async status(e, t) {
          var i;
          let n = Ce('dteStatus');
          try {
            let s = await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/status', { id: e, prevUpdatedAt: t })
            );
            return n.recordMetric(ne(s)), s.data;
          } catch (s) {
            n.recordMetric(
              (i = s == null ? void 0 : s.axiosException) != null && i.response
                ? ne(s.axiosException.response)
                : Ie
            ),
              Rf.error({ title: s.message }),
              process.exit(1);
          }
        }
        async completeRunGroupWithError(e, t, n, i, s) {
          var a;
          let o = Ce('completeRunGroup');
          A &&
            Rf.note({
              title: 'Completing with an error',
              bodyLines: [
                `ciExecutionId: ${n}`,
                `ciExecutionEnv: ${i}`,
                `runGroup: ${t}`,
                `error: ${s}`,
              ],
            });
          try {
            let c = await ce(
              () =>
                this.apiAxiosInstance.post('/nx-cloud/executions/complete-run-group', {
                  branch: e,
                  runGroup: t,
                  ciExecutionId: n,
                  ciExecutionEnv: i,
                  criticalErrorMessage: s,
                  vcsContext: xt(),
                }),
              3
            );
            o.recordMetric(ne(c));
          } catch (c) {
            o.recordMetric(
              (a = c == null ? void 0 : c.axiosException) != null && a.response
                ? ne(c.axiosException.response)
                : Ie
            );
          }
        }
      });
  });
function oa(r) {
  let e = new Object(),
    t;
  return (n) => {
    e !== n
      ? ((e = n), (t = new Date()))
      : new Date().getTime() - t.getTime() > r.timeout &&
        (U0.error({ title: r.title }), process.exit(1));
  };
}
var U0,
  xf = q(() => {
    'use strict';
    ({ output: U0 } = Y());
  });
async function fb(r, e, t) {
  A && Of.note({ title: `Processing task ${t.taskId}` });
  let n = e.find((s) => t.taskId === s.id);
  if (!n) throw new Error(`Found unknown task: ${t.taskId}`);
  let i = await r.retrieveAndExtract(t.hash, t.url);
  Of.logCommand(F0(n)), process.stdout.write(i), Of.addVerticalSeparator();
}
function F0(r) {
  let e = r.target.configuration ? `:${r.target.configuration}` : '';
  return ['nx', 'run', `${r.target.project}:${r.target.target}${e}`, kn(r)].join(' ');
}
var Of,
  hb = q(() => {
    'use strict';
    te();
    wi();
    ({ output: Of } = Y());
  });
async function db(r, e, t, n) {
  let i = null,
    s = {},
    o = oa({ title: `No new completed tasks after ${Sa / 1e3} seconds.`, timeout: Sa });
  for (await Ge(1e3); ; ) {
    A && Cf.note({ title: 'Waiting...' });
    let a = await r.status(t, i);
    A &&
      Cf.note({
        title: 'Status update',
        bodyLines: [
          `executionId: ${t}`,
          `executionStatus: ${a.executionStatus}`,
          `number of completed tasks: ${a.completedTasks.length}`,
          `error: ${a.criticalErrorMessage}`,
        ],
      }),
      a.criticalErrorMessage &&
        (Cf.error({
          title: 'Distributed Execution Terminated',
          bodyLines: ['Error:', a.criticalErrorMessage],
        }),
        process.exit(1)),
      a.updatedAt || (await Ge(5e3)),
      (i = a.updatedAt),
      o(a.completedTasks.length);
    for (let c of a.completedTasks) s[c.taskId] || (await fb(e, n, c), (s[c.taskId] = !0));
    if (a.executionStatus === 'COMPLETED')
      return { commandStatus: a.commandStatus, runUrl: a.runUrl };
  }
}
var Cf,
  pb = q(() => {
    'use strict';
    xf();
    te();
    Qr();
    hb();
    ({ output: Cf } = Y());
  });
function mb(r) {
  let e = [],
    t = new Set(Object.values(r.tasks).map((i) => i.id)),
    n = 0;
  for (; t.size > 0; ) {
    let i = (e[n] = []);
    for (let s of t) {
      let o = !0;
      for (let c of r.dependencies[s])
        if (t.has(c)) {
          o = !1;
          break;
        }
      if (!o) continue;
      let a = r.tasks[s];
      i.push(a);
    }
    for (let s of i) t.delete(s.id);
    n++;
  }
  return e;
}
var yb = q(() => {
  'use strict';
});
var aa = E((KP, gb) => {
  'use strict';
  var If = Symbol('singleComment'),
    Eb = Symbol('multiComment'),
    M0 = () => '',
    q0 = (r, e, t) => r.slice(e, t).replace(/\S/g, ' '),
    B0 = (r, e) => {
      let t = e - 1,
        n = 0;
      for (; r[t] === '\\'; ) (t -= 1), (n += 1);
      return !!(n % 2);
    };
  gb.exports = (r, e = {}) => {
    if (typeof r != 'string')
      throw new TypeError(
        `Expected argument \`jsonString\` to be a \`string\`, got \`${typeof r}\``
      );
    let t = e.whitespace === !1 ? M0 : q0,
      n = !1,
      i = !1,
      s = 0,
      o = '';
    for (let a = 0; a < r.length; a++) {
      let c = r[a],
        u = r[a + 1];
      if ((!i && c === '"' && (B0(r, a) || (n = !n)), !n)) {
        if (!i && c + u === '//') (o += r.slice(s, a)), (s = a), (i = If), a++;
        else if (
          i === If &&
          c + u ===
            `\r
`
        ) {
          a++, (i = !1), (o += t(r, s, a)), (s = a);
          continue;
        } else if (
          i === If &&
          c ===
            `
`
        )
          (i = !1), (o += t(r, s, a)), (s = a);
        else if (!i && c + u === '/*') {
          (o += r.slice(s, a)), (s = a), (i = Eb), a++;
          continue;
        } else if (i === Eb && c + u === '*/') {
          a++, (i = !1), (o += t(r, s, a + 1)), (s = a + 1);
          continue;
        }
      }
    }
    return o + (i ? t(r.slice(s)) : r.slice(s));
  };
});
function bb(r, e, t) {
  let n = JSON.parse($0((0, _b.readFileSync)(`${j0}/nx.json`).toString()));
  return new Nf(e, H0(n, r)).createTaskGraph(t);
}
function H0(r, e) {
  let t = r.targetDependencies ?? {},
    n = e ? e.strictlyOrderedTargets ?? ['build'] : [];
  for (let i of n) (t[i] = t[i] || []), t[i].push({ target: i, projects: 'dependencies' });
  return t;
}
var _b,
  j0,
  G0,
  $0,
  Nf,
  vb = q(() => {
    'use strict';
    (_b = require('fs')),
      ({ workspaceRoot: j0 } = Y()),
      ({ getDependencyConfigs: G0 } = dt()),
      ($0 = aa());
    Nf = class {
      constructor(e, t) {
        this.projectGraph = e;
        this.defaultTargetDependencies = t;
      }
      createTaskGraph(e) {
        let t = { roots: [], tasks: {}, dependencies: {} };
        for (let n of e) {
          this.addTaskToGraph(n, t);
          let i = G0(n.target, this.defaultTargetDependencies, this.projectGraph);
          i && this.addTaskDependencies(n, i, e, t);
        }
        return (
          (t.roots = Object.keys(t.dependencies).filter((n) => t.dependencies[n].length === 0)), t
        );
      }
      addTaskDependencies(e, t, n, i) {
        for (let s of t)
          if (s.projects === 'self')
            for (let o of n)
              o.target.project === e.target.project &&
                o.target.target === s.target &&
                i.dependencies[e.id].push(o.id);
          else if (s.projects === 'dependencies') {
            let o = new Set();
            this.addDependencies(e.target.project, s.target, n, i, e.id, o);
          }
      }
      addDependencies(e, t, n, i, s, o) {
        o.add(e);
        let a = this.projectGraph.dependencies[e];
        if (a) {
          let c = a.map((u) => u.target);
          for (let u of c) {
            if (o.has(u)) continue;
            let l = this.findTask({ project: u, target: t }, n);
            l
              ? i.dependencies[s].indexOf(l.id) === -1 && i.dependencies[s].push(l.id)
              : this.addDependencies(u, t, n, i, s, o);
          }
        }
      }
      findTask({ project: e, target: t }, n) {
        return n.find((i) => i.target.project === e && i.target.target === t);
      }
      addTaskToGraph(e, t) {
        (t.tasks[e.id] = e), (t.dependencies[e.id] = []);
      }
    };
  });
var Df = {};
At(Df, { nxCloudDistributedTasksRunner: () => V0 });
function W0(r, e, t) {
  return r.taskGraph ? r.taskGraph : bb(t, r.projectGraph, e);
}
function X0(r, e, t, n, i) {
  process.on('SIGINT', async () => {
    await r.completeRunGroupWithError(e, t, n, i, 'Main job was terminated via SIGINT'),
      process.exit(1);
  }),
    process.on('SIGTERM', async () => {
      await r.completeRunGroupWithError(e, t, n, i, 'Main job was terminated via SIGTERM'),
        process.exit(1);
    });
}
async function K0(r, e, t, n, i, s, o, a, c, u, l) {
  let f = await r.start(lb(n, i, s, o, mb(a), e, u, c));
  return await db(r, t, f, Object.values(a.tasks));
}
var zi,
  z0,
  Af,
  V0,
  kf = q(() => {
    'use strict';
    wf();
    te();
    kt();
    Yu();
    bs();
    Hi();
    vs();
    wo();
    Tf();
    pb();
    yb();
    vb();
    ({ output: zi } = Y()),
      ({ cacheDirectory: z0 } = dt()),
      (Af = class {
        scheduleTask(e) {}
        startTask(e) {}
        endTasks(e) {}
      }),
      (V0 = async (r, e, t) => {
        e.skipNxCache &&
          zi.warn({
            title: '--skip-nx-cache is ignored when using distributed tasks execution (DTE).',
            bodyLine: ['DTE needs the cache to share files between agents.'],
          }),
          A && zi.note({ title: 'Starting distributed command execution' }),
          (e.lifeCycle = new Af());
        let n = me(),
          i = ve(),
          s = je(),
          o = Te(),
          a = Ke(),
          c = Qi();
        gr(i, s) || (_r(), process.exit(1));
        let u = new Zt(xr || e.encryptionKey),
          l = new Jt(e),
          f = new zn(new hr(u, l, e, 'dte-main'), z0),
          h = new Vn(e);
        X0(h, n, i, s, o);
        try {
          let d = W0(t, r, e),
            m = await K0(h, e, f, n, i, s, o, d, Io(t.projectGraph), a, c);
          m.commandStatus === 0
            ? zi.success({
                title: 'Successfully completed running the command.',
                bodyLines: [`See run details at ${m.runUrl}`],
              })
            : zi.error({
                title: 'Command execution failed.',
                bodyLines: [`See run details at ${m.runUrl}`],
              }),
            await on(e),
            process.exit(m.commandStatus);
        } catch (d) {
          zi.error({ title: 'Unable to complete a run.', bodyLines: [d.message] }),
            d.axiosException ? console.log(d.axiosException) : console.log(d);
          try {
            await h.completeRunGroupWithError(
              n,
              i,
              s,
              o,
              `Main job terminated with an error: "${d.message}"`
            );
          } finally {
            process.exit(1);
          }
        }
      });
  });
var wb = {};
At(wb, { default: () => nN });
function Z0(r, e, t) {
  let { from: n } = _f(),
    { switchMap: i } = ab();
  return n(qi(e)).pipe(
    i((s) =>
      s.data.enabled
        ? (kf(), be(Df)).nxCloudDistributedTasksRunner(r, e, t)
        : (Yr.warn({
            title: 'Nx Cloud: Workspace Disabled',
            bodyLines: [
              'This run and following runs will not use distributed task execution until',
              'the outstanding balance is paid or additional coupons are added for this',
              'workspace. If you believe you are receiving this message in error, please',
              'contact support at cloud-support@nrwl.io.',
              '',
              'Execution will now continue using this machine only.',
            ],
          }),
          (process.env.NX_INVOKED_BY_RUNNER = 'true'),
          Pi(r, e, t))
    )
  );
}
async function Q0(r, e, t) {
  return (await qi(e)).data.enabled
    ? (kf(), be(Df)).nxCloudDistributedTasksRunner(r, e, t)
    : (Yr.warn({
        title: 'Nx Cloud: Workspace Disabled',
        bodyLines: [
          'This run and following runs will not use distributed task execution until',
          'the outstanding balance is paid.',
          '',
          'If you believe you are receiving this message in error, please',
          'contact support at cloud-support@nrwl.io.',
          '',
          'Execution will now continue using this machine only.',
        ],
      }),
      (process.env.NX_INVOKED_BY_RUNNER = 'true'),
      Pi(r, e, t));
}
function eN(r, e) {
  let t = e.cacheableOperations || [];
  return r.some((n) => Lf(n, { cacheableOperations: t }));
}
function tN(r, e) {
  let t = e.cacheableOperations || [];
  for (let n of r)
    Lf(n, { cacheableOperations: t }) ||
      (Yr.error({
        title: 'Distributed task execution only works for cacheable targets',
        bodyLines: [
          `Target '${n.target.project}:${n.target.target}' cannot be executed.`,
          'To be able to replay the output of the target, distributed task execution only supports cacheable targets.',
          `You can verify that '${n.target.target}' is part of the list of cacheable targets in the 'nx.json' file.`,
          'You can invoke this command without distribution by doing "NX_CLOUD_DISTRIBUTED_EXECUTION=false nx ...".',
        ],
      }),
      process.exit(1));
}
function rN(r, e) {
  let t = e.cacheableOperations || [];
  for (let n of r)
    Lf(n, { cacheableOperations: t }) ||
      (Yr.error({
        title: 'Distributed task execution only works for cacheable targets',
        bodyLines: [
          `Target ${n.target.project}:${n.target.target} cannot be executed.`,
          'To be able to replay the output of the target, distributed task execution only supports cacheable targets.',
          `You can still invoke "nx ${n.target.target} ${n.target.project}" from within a cacheable target when using "nx:run-commands".`,
        ],
      }),
      process.exit(Xt));
}
var Yr,
  Sb,
  Y0,
  Lf,
  J0,
  nN,
  Rb = q(() => {
    'use strict';
    A_();
    Jl();
    Zl();
    te();
    Ql();
    ({ output: Yr } = Y()),
      ({ tasksRunner: Sb, runnerReturnsPromise: Y0, isCacheableTask: Lf } = dt()),
      (J0 = async (r, e, t = {}) => {
        let n = t.nxArgs || {},
          i = !Dt && !e.accessToken,
          s = n.cloud === !1 || vh;
        return i || s || e.skipNxCache
          ? (i &&
              Yr.warn({
                title: 'No access token found',
                bodyLines: [
                  'Nx will continue running, but nothing will be written or read from the remote cache.',
                  'Run details will also not be available in the Nx Cloud UI.',
                ],
              }),
            s &&
              Yr.warn({
                title: 'Nx Cloud Manually Disabled',
                bodyLines: [
                  'Nx will continue running, but nothing will be written or read from the remote cache.',
                  'Run details will also not be available in the Nx Cloud UI.',
                  '',
                  "If this wasn't intentional, check for the NX_NO_CLOUD environment variable, the --no-cloud flag",
                ],
              }),
            e.skipNxCache &&
              Yr.warn({
                title: '--skip-nx-cache disables the connection to Nx Cloud for the current run.',
                bodyLines: [
                  'The remote cache will not be read from or written to during this run.',
                ],
              }),
            Sb(r, e, t))
          : Sh()
            ? eN(r, e)
              ? Pi(r, e, t, !0)
              : Sb(r, e, t)
            : (ut(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID) ? rN(r, e) : await na(),
              G_(n.dte, n.useAgents) && !ut(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID)
                ? (tN(r, e), Y0 ? Q0(r, e, t) : Z0(r, e, t))
                : ((process.env.NX_INVOKED_BY_RUNNER = 'true'), Pi(r, e, t)));
      });
    nN = J0;
  });
var Pf = {};
At(Pf, { cleanUpAgents: () => oN });
async function oN() {
  let r = `${sN}/lockfiles`;
  return (
    A && iN.note({ title: 'Cleaning up agent metadata for this workspace.' }),
    (0, Tb.rm)(r, { recursive: !0, force: !0 }, (e) => {
      if (e) throw e;
    })
  );
}
var Tb,
  iN,
  sN,
  Uf = q(() => {
    'use strict';
    Tb = require('fs');
    te();
    ({ output: iN } = Y()), ({ cacheDirectory: sN } = dt());
  });
function It() {
  var n, i;
  let r = JSON.parse(aN((0, xb.readFileSync)(`${cN}/nx.json`).toString())),
    e = {},
    t = [];
  for (let s in r.targetDefaults) r.targetDefaults[s].cache && t.push(s);
  return (
    r.nxCloudAccessToken && (e.accessToken ?? (e.accessToken = r.nxCloudAccessToken)),
    r.nxCloudUrl && (e.url ?? (e.url = r.nxCloudUrl)),
    r.nxCloudEncryptionKey && (e.encryptionKey = r.nxCloudEncryptionKey),
    r.parallel && (e.parallel ?? (e.parallel = r.parallel)),
    r.cacheDirectory && (e.cacheDirectory ?? (e.cacheDirectory = r.cacheDirectory)),
    t.length && (e.cacheableOperations ?? (e.cacheableOperations = t)),
    {
      nxJson: r,
      nxCloudOptions: {
        ...e,
        ...((i = (n = r.tasksRunnerOptions) == null ? void 0 : n.default) == null
          ? void 0
          : i.options),
      },
    }
  );
}
var xb,
  aN,
  cN,
  Wn = q(() => {
    'use strict';
    (xb = require('fs')), (aN = aa()), ({ workspaceRoot: cN } = Y());
  });
var Ff = {};
At(Ff, { runCommandAndStoreInCloud: () => uN });
async function uN() {
  let { nxCloudOptions: r } = It(),
    e = Oe(r),
    t = new Vn(r),
    n = new dr(r.maskedProperties),
    i = me(),
    s = ve(),
    o = je(),
    a = Te(),
    c = lN(process.argv),
    [u, ...l] = c,
    f = new Date().toISOString(),
    { statusCode: h, terminalOutput: d } = await fN(u, l),
    m = new Date().toISOString(),
    b = {
      statusCode: h,
      terminalOutput: d,
      userCommandAndArgsString: c.join(' '),
      startTime: f,
      endTime: m,
      branch: i,
      runGroup: s,
      ciExecutionId: o,
      ciExecutionEnv: a,
    };
  await dN(e, n, r, b, t), process.exit(h);
}
function lN(r) {
  let e = r.findIndex((n) => n === 'record') + 1,
    t;
  if (e < process.argv.length) {
    let n = process.argv[e] === '--' ? 1 : 0;
    t = process.argv.slice(e + n);
  } else
    console.log('Invalid command. Use `nx-cloud record [my command] [my arg1] [my arg...]`'),
      process.exit(1);
  return t;
}
function fN(r, e) {
  return new Promise((t, n) => {
    try {
      let i = Ib.spawn(r, e, { stdio: ['inherit', 'pipe', 'pipe', 'ipc'] }),
        s = [];
      i.stdout.on('data', (o) => {
        process.stdout.write(o), s.push(o.toString());
      }),
        i.stderr.on('data', (o) => {
          process.stderr.write(o), s.push(o.toString());
        }),
        i.on('exit', (o, a) => {
          let c = o ?? mN(a || ''),
            u = s.join('');
          t({ statusCode: c, terminalOutput: u });
        });
    } catch (i) {
      n(i);
    }
  });
}
function hN(r, e) {
  let t = r.obfuscate(e.terminalOutput),
    n =
      t.length > Cb
        ? `TRUNCATED

${t.slice(t.length - Cb)}`
        : t;
  return {
    taskId: 'nx-cloud-tasks-runner:record-command',
    target: 'record-command',
    projectName: 'nx-cloud-tasks-runner',
    hash: '',
    startTime: e.startTime,
    endTime: e.endTime,
    hashDetails: {},
    params: e.userCommandAndArgsString,
    cacheStatus: 'n/a',
    status: e.statusCode,
    terminalOutput: n,
  };
}
async function dN(r, e, t, n, i) {
  let s = `nx-cloud record -- ${n.userCommandAndArgsString}`,
    o = {
      meta: { nxCloudVersion: '0.0.0' },
      tasks: [hN(e, n)],
      run: {
        command: s,
        startTime: n.startTime,
        endTime: n.endTime,
        branch: n.branch,
        runGroup: n.runGroup,
        sha: n.branch ? Ke() : void 0,
      },
      branch: n.branch,
      runGroup: n.runGroup,
      ciExecutionId: n.ciExecutionId,
      ciExecutionEnv: n.ciExecutionEnv,
      machineInfo: Zr(),
      vcsContext: xt(),
    },
    a = Buffer.from(JSON.stringify(o)),
    c = await (0, Nb.promisify)(Ab.gzip)(a),
    u = await ce(() =>
      r.post('/nx-cloud/runs/end', c, {
        headers: {
          ...r.defaults.headers,
          'Content-Encoding': 'gzip',
          'Content-Type': 'application/octet-stream',
        },
      })
    );
  process.env.NX_CLOUD_SILENT_RECORD !== 'true' && pN(u.data.runUrl),
    n.statusCode !== 0 &&
      (n.ciExecutionId || n.runGroup) &&
      (await i.completeRunGroupWithError(
        n.branch,
        n.runGroup,
        n.ciExecutionId,
        n.ciExecutionEnv,
        null
      ));
}
function pN(r) {
  Ob.addVerticalSeparator(),
    Ob.note({ title: 'Nx Cloud: Successfully recorded command output' }),
    Yt(`You can view or share your output by visiting ${r}`);
}
function mN(r) {
  return r === 'SIGHUP' ? 129 : r === 'SIGINT' ? 130 : r === 'SIGTERM' ? 143 : 128;
}
var Ib,
  Nb,
  Ab,
  Ob,
  Cb,
  Mf = q(() => {
    'use strict';
    (Ib = Sr(require('child_process'))), (Nb = require('util')), (Ab = require('zlib'));
    gt();
    te();
    Wn();
    Ti();
    si();
    Tf();
    To();
    ({ output: Ob } = Y()), (Cb = 2e5);
  });
function Db() {
  yN.error({
    title: 'Invalid Task Runner Configuration',
    bodyLines: [
      'To use Distributed Task Execution, your default task runner configuration must',
      'use the "nx-cloud" task runner.',
      '',
      'This can be adjusted in "nx.json".',
    ],
  });
}
var yN,
  kb = q(() => {
    'use strict';
    ({ output: yN } = Y());
  });
var Lb,
  ca,
  Pb = q(() => {
    'use strict';
    gt();
    te();
    kt();
    ({ output: Lb } = Y()),
      (ca = class {
        constructor(e, t, n, i, s, o) {
          this.branch = t;
          this.runGroup = n;
          this.ciExecutionId = i;
          this.ciExecutionEnv = s;
          this.agentName = o;
          this.apiAxiosInstance = Oe(e, 6e4);
        }
        async tasks(e, t, n, i) {
          var o;
          let s = Ce('dtePollTasks');
          try {
            let a = await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/tasks', {
                runGroup: this.runGroup,
                ciExecutionId: this.ciExecutionId,
                ciExecutionEnv: this.ciExecutionEnv,
                agentName: this.agentName,
                executionId: e,
                statusCode: t,
                completedTasks: n,
                targets: i,
              })
            );
            return s.recordMetric(ne(a)), a.data;
          } catch (a) {
            throw (
              (s.recordMetric(
                (o = a == null ? void 0 : a.axiosException) != null && o.response
                  ? ne(a.axiosException.response)
                  : Ie
              ),
              a)
            );
          }
        }
        async completeRunGroupWithError(e) {
          var n;
          A &&
            Lb.note({
              title: 'Completing with an error',
              bodyLines: [
                `ciExecutionId: ${this.ciExecutionId}`,
                `ciExecutionEnv: ${this.ciExecutionEnv}`,
                `runGroup: ${this.runGroup}`,
                `error: ${e}`,
              ],
            });
          let t = Ce('completeRunGroup');
          try {
            let i = await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/complete-run-group', {
                branch: this.branch,
                runGroup: this.runGroup,
                ciExecutionId: this.ciExecutionId,
                ciExecutionEnv: this.ciExecutionEnv,
                agentName: this.agentName,
                criticalErrorMessage: e,
              })
            );
            A && Lb.note({ title: 'Completed run group with an error' }), t.recordMetric(ne(i));
          } catch (i) {
            t.recordMetric(
              (n = i == null ? void 0 : i.axiosException) != null && n.response
                ? ne(i.axiosException.response)
                : Ie
            ),
              console.error(i);
          }
        }
      });
  });
async function Ub(r, e, t, n, i) {
  let s = 0,
    o = null,
    a = oa({ title: `No new messages received after ${va / 1e3} seconds`, timeout: va }),
    c = [],
    u = new Date(),
    l = !1,
    f = {};
  for (;;) {
    if (
      (A && Vi.note({ title: `${r} fetching tasks...` }),
      (o = await e.tasks(o ? o.executionId : null, s, c, i)),
      A &&
        Vi.note({
          title: `${r} received an API Response`,
          bodyLines: [
            `completed: ${o.completed}`,
            `status: ${o.status}`,
            `retryDuring: ${o.retryDuring}`,
            `executionId: ${o.executionId}`,
            `number of tasks: ${o.tasks.length}`,
            `error: ${o.criticalErrorMessage}`,
            `maxParallel: ${o.maxParallel}`,
          ],
        }),
      o.criticalErrorMessage &&
        (Vi.error({
          title: 'Distributed Execution Terminated',
          bodyLines: ['Error:', o.criticalErrorMessage],
        }),
        process.exit(1)),
      o != null &&
        o.retryDuring &&
        (o == null ? void 0 : o.retryDuring) !== 0 &&
        !l &&
        new Date().getTime() - u.getTime() > o.retryDuring)
    ) {
      await Ge(2e4);
      continue;
    }
    if ((o == null ? void 0 : o.status) !== void 0) {
      if (o.status === 'RUN_GROUP_COMPLETED' || o.status === 'NO_FURTHER_TASKS_TO_RUN') return;
    } else if (o.completed) return;
    if ((a(o.tasks.map((d) => d.taskId).join('')), !o.executionId)) {
      A && Vi.note({ title: `${r} waiting...` }), await Ge(5e3), (s = 0), (c = []);
      continue;
    }
    if (((l = !0), o.completedTasks))
      for (let d of o.completedTasks)
        f[d.taskId] ||
          (Vi.note({ title: `${r} downloading artifacts for ${d.taskId} Hash: ${d.hash}}` }),
          await t.retrieveAndExtract(d.hash, d.url),
          (f[d.taskId] = !0));
    let h = await n(o.executionId, o.tasks, o.maxParallel);
    for (let d of h.completedTasks) f[d.taskId] = !0;
    (s = h.completedStatusCode), (c = h.completedTasks);
  }
}
var Vi,
  Fb = q(() => {
    'use strict';
    xf();
    te();
    Qr();
    ({ output: Vi } = Y());
  });
var ua = E((D1, zb) => {
  'use strict';
  var EN = require('util'),
    Mb = require('path'),
    gN = require('fs');
  function Wi(r) {
    if (
      ((r !== r.toLowerCase() && r !== r.toUpperCase()) || (r = r.toLowerCase()),
      r.indexOf('-') === -1 && r.indexOf('_') === -1)
    )
      return r;
    {
      let t = '',
        n = !1,
        i = r.match(/^-+/);
      for (let s = i ? i[0].length : 0; s < r.length; s++) {
        let o = r.charAt(s);
        n && ((n = !1), (o = o.toUpperCase())),
          s !== 0 && (o === '-' || o === '_') ? (n = !0) : o !== '-' && o !== '_' && (t += o);
      }
      return t;
    }
  }
  function Gb(r, e) {
    let t = r.toLowerCase();
    e = e || '-';
    let n = '';
    for (let i = 0; i < r.length; i++) {
      let s = t.charAt(i),
        o = r.charAt(i);
      s !== o && i > 0 ? (n += `${e}${t.charAt(i)}`) : (n += o);
    }
    return n;
  }
  function $b(r) {
    return r == null
      ? !1
      : typeof r == 'number' || /^0x[0-9a-f]+$/i.test(r)
        ? !0
        : /^0[^.]/.test(r)
          ? !1
          : /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(r);
  }
  function _N(r) {
    if (Array.isArray(r)) return r.map((o) => (typeof o != 'string' ? o + '' : o));
    r = r.trim();
    let e = 0,
      t = null,
      n = null,
      i = null,
      s = [];
    for (let o = 0; o < r.length; o++) {
      if (((t = n), (n = r.charAt(o)), n === ' ' && !i)) {
        t !== ' ' && e++;
        continue;
      }
      n === i ? (i = null) : (n === "'" || n === '"') && !i && (i = n),
        s[e] || (s[e] = ''),
        (s[e] += n);
    }
    return s;
  }
  var pt;
  (function (r) {
    (r.BOOLEAN = 'boolean'), (r.STRING = 'string'), (r.NUMBER = 'number'), (r.ARRAY = 'array');
  })(pt || (pt = {}));
  var zt,
    $f = class {
      constructor(e) {
        zt = e;
      }
      parse(e, t) {
        let n = Object.assign(
            {
              alias: void 0,
              array: void 0,
              boolean: void 0,
              config: void 0,
              configObjects: void 0,
              configuration: void 0,
              coerce: void 0,
              count: void 0,
              default: void 0,
              envPrefix: void 0,
              narg: void 0,
              normalize: void 0,
              string: void 0,
              number: void 0,
              __: void 0,
              key: void 0,
            },
            t
          ),
          i = _N(e),
          s = typeof e == 'string',
          o = bN(Object.assign(Object.create(null), n.alias)),
          a = Object.assign(
            {
              'boolean-negation': !0,
              'camel-case-expansion': !0,
              'combine-arrays': !1,
              'dot-notation': !0,
              'duplicate-arguments-array': !0,
              'flatten-duplicate-arrays': !0,
              'greedy-arrays': !0,
              'halt-at-non-option': !1,
              'nargs-eats-options': !1,
              'negation-prefix': 'no-',
              'parse-numbers': !0,
              'parse-positional-numbers': !0,
              'populate--': !1,
              'set-placeholder-key': !1,
              'short-option-groups': !0,
              'strip-aliased': !1,
              'strip-dashed': !1,
              'unknown-options-as-args': !1,
            },
            n.configuration
          ),
          c = Object.assign(Object.create(null), n.default),
          u = n.configObjects || [],
          l = n.envPrefix,
          f = a['populate--'],
          h = f ? '--' : '_',
          d = Object.create(null),
          m = Object.create(null),
          b = n.__ || zt.format,
          p = {
            aliases: Object.create(null),
            arrays: Object.create(null),
            bools: Object.create(null),
            strings: Object.create(null),
            numbers: Object.create(null),
            counts: Object.create(null),
            normalize: Object.create(null),
            configs: Object.create(null),
            nargs: Object.create(null),
            coercions: Object.create(null),
            keys: [],
          },
          S = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,
          D = new RegExp('^--' + a['negation-prefix'] + '(.+)');
        []
          .concat(n.array || [])
          .filter(Boolean)
          .forEach(function (y) {
            let _ = typeof y == 'object' ? y.key : y,
              T = Object.keys(y)
                .map(function (v) {
                  return { boolean: 'bools', string: 'strings', number: 'numbers' }[v];
                })
                .filter(Boolean)
                .pop();
            T && (p[T][_] = !0), (p.arrays[_] = !0), p.keys.push(_);
          }),
          []
            .concat(n.boolean || [])
            .filter(Boolean)
            .forEach(function (y) {
              (p.bools[y] = !0), p.keys.push(y);
            }),
          []
            .concat(n.string || [])
            .filter(Boolean)
            .forEach(function (y) {
              (p.strings[y] = !0), p.keys.push(y);
            }),
          []
            .concat(n.number || [])
            .filter(Boolean)
            .forEach(function (y) {
              (p.numbers[y] = !0), p.keys.push(y);
            }),
          []
            .concat(n.count || [])
            .filter(Boolean)
            .forEach(function (y) {
              (p.counts[y] = !0), p.keys.push(y);
            }),
          []
            .concat(n.normalize || [])
            .filter(Boolean)
            .forEach(function (y) {
              (p.normalize[y] = !0), p.keys.push(y);
            }),
          typeof n.narg == 'object' &&
            Object.entries(n.narg).forEach(([y, _]) => {
              typeof _ == 'number' && ((p.nargs[y] = _), p.keys.push(y));
            }),
          typeof n.coerce == 'object' &&
            Object.entries(n.coerce).forEach(([y, _]) => {
              typeof _ == 'function' && ((p.coercions[y] = _), p.keys.push(y));
            }),
          typeof n.config < 'u' &&
            (Array.isArray(n.config) || typeof n.config == 'string'
              ? []
                  .concat(n.config)
                  .filter(Boolean)
                  .forEach(function (y) {
                    p.configs[y] = !0;
                  })
              : typeof n.config == 'object' &&
                Object.entries(n.config).forEach(([y, _]) => {
                  (typeof _ == 'boolean' || typeof _ == 'function') && (p.configs[y] = _);
                })),
          N(n.key, o, n.default, p.arrays),
          Object.keys(c).forEach(function (y) {
            (p.aliases[y] || []).forEach(function (_) {
              c[_] = c[y];
            });
          });
        let x = null;
        Wt();
        let P = [],
          k = Object.assign(Object.create(null), { _: [] }),
          O = {};
        for (let y = 0; y < i.length; y++) {
          let _ = i[y],
            T = _.replace(/^-{3,}/, '---'),
            v,
            g,
            F,
            L,
            M,
            pe;
          if (_ !== '--' && /^-/.test(_) && ct(_)) j(_);
          else if (T.match(/^---+(=|$)/)) {
            j(_);
            continue;
          } else if (_.match(/^--.+=/) || (!a['short-option-groups'] && _.match(/^-.+=/)))
            (L = _.match(/^--?([^=]+)=([\s\S]*)$/)),
              L !== null &&
                Array.isArray(L) &&
                L.length >= 3 &&
                (w(L[1], p.arrays)
                  ? (y = C(y, L[1], i, L[2]))
                  : w(L[1], p.nargs) !== !1
                    ? (y = $(y, L[1], i, L[2]))
                    : I(L[1], L[2], !0));
          else if (_.match(D) && a['boolean-negation'])
            (L = _.match(D)),
              L !== null &&
                Array.isArray(L) &&
                L.length >= 2 &&
                ((g = L[1]), I(g, w(g, p.arrays) ? [!1] : !1));
          else if (_.match(/^--.+/) || (!a['short-option-groups'] && _.match(/^-[^-]+/)))
            (L = _.match(/^--?(.+)/)),
              L !== null &&
                Array.isArray(L) &&
                L.length >= 2 &&
                ((g = L[1]),
                w(g, p.arrays)
                  ? (y = C(y, g, i))
                  : w(g, p.nargs) !== !1
                    ? (y = $(y, g, i))
                    : ((M = i[y + 1]),
                      (M !== void 0 &&
                        (!M.match(/^-/) || M.match(S)) &&
                        !w(g, p.bools) &&
                        !w(g, p.counts)) ||
                      /^(true|false)$/.test(M)
                        ? (I(g, M), y++)
                        : I(g, _e(g))));
          else if (_.match(/^-.\..+=/))
            (L = _.match(/^-([^=]+)=([\s\S]*)$/)),
              L !== null && Array.isArray(L) && L.length >= 3 && I(L[1], L[2]);
          else if (_.match(/^-.\..+/) && !_.match(S))
            (M = i[y + 1]),
              (L = _.match(/^-(.\..+)/)),
              L !== null &&
                Array.isArray(L) &&
                L.length >= 2 &&
                ((g = L[1]),
                M !== void 0 && !M.match(/^-/) && !w(g, p.bools) && !w(g, p.counts)
                  ? (I(g, M), y++)
                  : I(g, _e(g)));
          else if (_.match(/^-[^-]+/) && !_.match(S)) {
            (F = _.slice(1, -1).split('')), (v = !1);
            for (let Ue = 0; Ue < F.length; Ue++) {
              if (((M = _.slice(Ue + 2)), F[Ue + 1] && F[Ue + 1] === '=')) {
                (pe = _.slice(Ue + 3)),
                  (g = F[Ue]),
                  w(g, p.arrays)
                    ? (y = C(y, g, i, pe))
                    : w(g, p.nargs) !== !1
                      ? (y = $(y, g, i, pe))
                      : I(g, pe),
                  (v = !0);
                break;
              }
              if (M === '-') {
                I(F[Ue], M);
                continue;
              }
              if (
                /[A-Za-z]/.test(F[Ue]) &&
                /^-?\d+(\.\d*)?(e-?\d+)?$/.test(M) &&
                w(M, p.bools) === !1
              ) {
                I(F[Ue], M), (v = !0);
                break;
              }
              if (F[Ue + 1] && F[Ue + 1].match(/\W/)) {
                I(F[Ue], M), (v = !0);
                break;
              } else I(F[Ue], _e(F[Ue]));
            }
            (g = _.slice(-1)[0]),
              !v &&
                g !== '-' &&
                (w(g, p.arrays)
                  ? (y = C(y, g, i))
                  : w(g, p.nargs) !== !1
                    ? (y = $(y, g, i))
                    : ((M = i[y + 1]),
                      (M !== void 0 &&
                        (!/^(-|--)[^-]/.test(M) || M.match(S)) &&
                        !w(g, p.bools) &&
                        !w(g, p.counts)) ||
                      /^(true|false)$/.test(M)
                        ? (I(g, M), y++)
                        : I(g, _e(g))));
          } else if (_.match(/^-[0-9]$/) && _.match(S) && w(_.slice(1), p.bools))
            (g = _.slice(1)), I(g, _e(g));
          else if (_ === '--') {
            P = i.slice(y + 1);
            break;
          } else if (a['halt-at-non-option']) {
            P = i.slice(y);
            break;
          } else j(_);
        }
        H(k, !0),
          H(k, !1),
          J(k),
          K(),
          le(k, p.aliases, c, !0),
          U(k),
          a['set-placeholder-key'] && z(k),
          Object.keys(p.counts).forEach(function (y) {
            Re(k, y.split('.')) || I(y, 0);
          }),
          f && P.length && (k[h] = []),
          P.forEach(function (y) {
            k[h].push(y);
          }),
          a['camel-case-expansion'] &&
            a['strip-dashed'] &&
            Object.keys(k)
              .filter((y) => y !== '--' && y.includes('-'))
              .forEach((y) => {
                delete k[y];
              }),
          a['strip-aliased'] &&
            [].concat(...Object.keys(o).map((y) => o[y])).forEach((y) => {
              a['camel-case-expansion'] &&
                y.includes('-') &&
                delete k[
                  y
                    .split('.')
                    .map((_) => Wi(_))
                    .join('.')
                ],
                delete k[y];
            });
        function j(y) {
          let _ = V('_', y);
          (typeof _ == 'string' || typeof _ == 'number') && k._.push(_);
        }
        function $(y, _, T, v) {
          let g,
            F = w(_, p.nargs);
          if (((F = typeof F != 'number' || isNaN(F) ? 1 : F), F === 0))
            return Pe(v) || (x = Error(b('Argument unexpected for: %s', _))), I(_, _e(_)), y;
          let L = Pe(v) ? 0 : 1;
          if (a['nargs-eats-options'])
            T.length - (y + 1) + L < F && (x = Error(b('Not enough arguments following: %s', _))),
              (L = F);
          else {
            for (
              g = y + 1;
              g < T.length && (!T[g].match(/^-[^0-9]/) || T[g].match(S) || ct(T[g]));
              g++
            )
              L++;
            L < F && (x = Error(b('Not enough arguments following: %s', _)));
          }
          let M = Math.min(L, F);
          for (!Pe(v) && M > 0 && (I(_, v), M--), g = y + 1; g < M + y + 1; g++) I(_, T[g]);
          return y + M;
        }
        function C(y, _, T, v) {
          let g = [],
            F = v || T[y + 1],
            L = w(_, p.nargs);
          if (w(_, p.bools) && !/^(true|false)$/.test(F)) g.push(!0);
          else if (Pe(F) || (Pe(v) && /^-/.test(F) && !S.test(F) && !ct(F))) {
            if (c[_] !== void 0) {
              let M = c[_];
              g = Array.isArray(M) ? M : [M];
            }
          } else {
            Pe(v) || g.push(X(_, v, !0));
            for (
              let M = y + 1;
              M < T.length &&
              !(
                (!a['greedy-arrays'] && g.length > 0) ||
                (L && typeof L == 'number' && g.length >= L) ||
                ((F = T[M]), /^-/.test(F) && !S.test(F) && !ct(F))
              );
              M++
            )
              (y = M), g.push(X(_, F, s));
          }
          return (
            typeof L == 'number' &&
              ((L && g.length < L) || (isNaN(L) && g.length === 0)) &&
              (x = Error(b('Not enough arguments following: %s', _))),
            I(_, g),
            y
          );
        }
        function I(y, _, T = s) {
          if (/-/.test(y) && a['camel-case-expansion']) {
            let F = y
              .split('.')
              .map(function (L) {
                return Wi(L);
              })
              .join('.');
            G(y, F);
          }
          let v = X(y, _, T),
            g = y.split('.');
          R(k, g, v),
            p.aliases[y] &&
              p.aliases[y].forEach(function (F) {
                let L = F.split('.');
                R(k, L, v);
              }),
            g.length > 1 &&
              a['dot-notation'] &&
              (p.aliases[g[0]] || []).forEach(function (F) {
                let L = F.split('.'),
                  M = [].concat(g);
                M.shift(),
                  (L = L.concat(M)),
                  (p.aliases[y] || []).includes(L.join('.')) || R(k, L, v);
              }),
            w(y, p.normalize) &&
              !w(y, p.arrays) &&
              [y].concat(p.aliases[y] || []).forEach(function (L) {
                Object.defineProperty(O, L, {
                  enumerable: !0,
                  get() {
                    return _;
                  },
                  set(M) {
                    _ = typeof M == 'string' ? zt.normalize(M) : M;
                  },
                });
              });
        }
        function G(y, _) {
          (p.aliases[y] && p.aliases[y].length) || ((p.aliases[y] = [_]), (d[_] = !0)),
            (p.aliases[_] && p.aliases[_].length) || G(_, y);
        }
        function X(y, _, T) {
          T && (_ = vN(_)),
            (w(y, p.bools) || w(y, p.counts)) && typeof _ == 'string' && (_ = _ === 'true');
          let v = Array.isArray(_)
            ? _.map(function (g) {
                return V(y, g);
              })
            : V(y, _);
          return (
            w(y, p.counts) && (Pe(v) || typeof v == 'boolean') && (v = qf()),
            w(y, p.normalize) &&
              w(y, p.arrays) &&
              (Array.isArray(_) ? (v = _.map((g) => zt.normalize(g))) : (v = zt.normalize(_))),
            v
          );
        }
        function V(y, _) {
          return (
            (!a['parse-positional-numbers'] && y === '_') ||
              (!w(y, p.strings) &&
                !w(y, p.bools) &&
                !Array.isArray(_) &&
                (($b(_) &&
                  a['parse-numbers'] &&
                  Number.isSafeInteger(Math.floor(parseFloat(`${_}`)))) ||
                  (!Pe(_) && w(y, p.numbers))) &&
                (_ = Number(_))),
            _
          );
        }
        function J(y) {
          let _ = Object.create(null);
          le(_, p.aliases, c),
            Object.keys(p.configs).forEach(function (T) {
              let v = y[T] || _[T];
              if (v)
                try {
                  let g = null,
                    F = zt.resolve(zt.cwd(), v),
                    L = p.configs[T];
                  if (typeof L == 'function') {
                    try {
                      g = L(F);
                    } catch (M) {
                      g = M;
                    }
                    if (g instanceof Error) {
                      x = g;
                      return;
                    }
                  } else g = zt.require(F);
                  B(g);
                } catch (g) {
                  g.name === 'PermissionDenied'
                    ? (x = g)
                    : y[T] && (x = Error(b('Invalid JSON config file: %s', v)));
                }
            });
        }
        function B(y, _) {
          Object.keys(y).forEach(function (T) {
            let v = y[T],
              g = _ ? _ + '.' + T : T;
            typeof v == 'object' && v !== null && !Array.isArray(v) && a['dot-notation']
              ? B(v, g)
              : (!Re(k, g.split('.')) || (w(g, p.arrays) && a['combine-arrays'])) && I(g, v);
          });
        }
        function K() {
          typeof u < 'u' &&
            u.forEach(function (y) {
              B(y);
            });
        }
        function H(y, _) {
          if (typeof l > 'u') return;
          let T = typeof l == 'string' ? l : '',
            v = zt.env();
          Object.keys(v).forEach(function (g) {
            if (T === '' || g.lastIndexOf(T, 0) === 0) {
              let F = g.split('__').map(function (L, M) {
                return M === 0 && (L = L.substring(T.length)), Wi(L);
              });
              ((_ && p.configs[F.join('.')]) || !_) && !Re(y, F) && I(F.join('.'), v[g]);
            }
          });
        }
        function U(y) {
          let _,
            T = new Set();
          Object.keys(y).forEach(function (v) {
            if (!T.has(v) && ((_ = w(v, p.coercions)), typeof _ == 'function'))
              try {
                let g = V(v, _(y[v]));
                [].concat(p.aliases[v] || [], v).forEach((F) => {
                  T.add(F), (y[F] = g);
                });
              } catch (g) {
                x = g;
              }
          });
        }
        function z(y) {
          return (
            p.keys.forEach((_) => {
              ~_.indexOf('.') || (typeof y[_] > 'u' && (y[_] = void 0));
            }),
            y
          );
        }
        function le(y, _, T, v = !1) {
          Object.keys(T).forEach(function (g) {
            Re(y, g.split('.')) ||
              (R(y, g.split('.'), T[g]),
              v && (m[g] = !0),
              (_[g] || []).forEach(function (F) {
                Re(y, F.split('.')) || R(y, F.split('.'), T[g]);
              }));
          });
        }
        function Re(y, _) {
          let T = y;
          a['dot-notation'] || (_ = [_.join('.')]),
            _.slice(0, -1).forEach(function (g) {
              T = T[g] || {};
            });
          let v = _[_.length - 1];
          return typeof T != 'object' ? !1 : v in T;
        }
        function R(y, _, T) {
          let v = y;
          a['dot-notation'] || (_ = [_.join('.')]),
            _.slice(0, -1).forEach(function (pe) {
              (pe = qb(pe)),
                typeof v == 'object' && v[pe] === void 0 && (v[pe] = {}),
                typeof v[pe] != 'object' || Array.isArray(v[pe])
                  ? (Array.isArray(v[pe]) ? v[pe].push({}) : (v[pe] = [v[pe], {}]),
                    (v = v[pe][v[pe].length - 1]))
                  : (v = v[pe]);
            });
          let g = qb(_[_.length - 1]),
            F = w(_.join('.'), p.arrays),
            L = Array.isArray(T),
            M = a['duplicate-arguments-array'];
          !M &&
            w(g, p.nargs) &&
            ((M = !0),
            ((!Pe(v[g]) && p.nargs[g] === 1) ||
              (Array.isArray(v[g]) && v[g].length === p.nargs[g])) &&
              (v[g] = void 0)),
            T === qf()
              ? (v[g] = qf(v[g]))
              : Array.isArray(v[g])
                ? M && F && L
                  ? (v[g] = a['flatten-duplicate-arrays']
                      ? v[g].concat(T)
                      : (Array.isArray(v[g][0]) ? v[g] : [v[g]]).concat([T]))
                  : !M && !!F == !!L
                    ? (v[g] = T)
                    : (v[g] = v[g].concat([T]))
                : v[g] === void 0 && F
                  ? (v[g] = L ? T : [T])
                  : M && !(v[g] === void 0 || w(g, p.counts) || w(g, p.bools))
                    ? (v[g] = [v[g], T])
                    : (v[g] = T);
        }
        function N(...y) {
          y.forEach(function (_) {
            Object.keys(_ || {}).forEach(function (T) {
              p.aliases[T] ||
                ((p.aliases[T] = [].concat(o[T] || [])),
                p.aliases[T].concat(T).forEach(function (v) {
                  if (/-/.test(v) && a['camel-case-expansion']) {
                    let g = Wi(v);
                    g !== T &&
                      p.aliases[T].indexOf(g) === -1 &&
                      (p.aliases[T].push(g), (d[g] = !0));
                  }
                }),
                p.aliases[T].concat(T).forEach(function (v) {
                  if (v.length > 1 && /[A-Z]/.test(v) && a['camel-case-expansion']) {
                    let g = Gb(v, '-');
                    g !== T &&
                      p.aliases[T].indexOf(g) === -1 &&
                      (p.aliases[T].push(g), (d[g] = !0));
                  }
                }),
                p.aliases[T].forEach(function (v) {
                  p.aliases[v] = [T].concat(
                    p.aliases[T].filter(function (g) {
                      return v !== g;
                    })
                  );
                }));
            });
          });
        }
        function w(y, _) {
          let T = [].concat(p.aliases[y] || [], y),
            v = Object.keys(_),
            g = T.find((F) => v.includes(F));
          return g ? _[g] : !1;
        }
        function W(y) {
          let _ = Object.keys(p);
          return [].concat(_.map((v) => p[v])).some(function (v) {
            return Array.isArray(v) ? v.includes(y) : v[y];
          });
        }
        function de(y, ..._) {
          return [].concat(..._).some(function (v) {
            let g = y.match(v);
            return g && W(g[1]);
          });
        }
        function Nt(y) {
          if (y.match(S) || !y.match(/^-[^-]+/)) return !1;
          let _ = !0,
            T,
            v = y.slice(1).split('');
          for (let g = 0; g < v.length; g++) {
            if (((T = y.slice(g + 2)), !W(v[g]))) {
              _ = !1;
              break;
            }
            if (
              (v[g + 1] && v[g + 1] === '=') ||
              T === '-' ||
              (/[A-Za-z]/.test(v[g]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(T)) ||
              (v[g + 1] && v[g + 1].match(/\W/))
            )
              break;
          }
          return _;
        }
        function ct(y) {
          return a['unknown-options-as-args'] && yt(y);
        }
        function yt(y) {
          return (
            (y = y.replace(/^-{3,}/, '--')),
            y.match(S) || Nt(y)
              ? !1
              : !de(
                  y,
                  /^-+([^=]+?)=[\s\S]*$/,
                  D,
                  /^-+([^=]+?)$/,
                  /^-+([^=]+?)-$/,
                  /^-+([^=]+?\d+)$/,
                  /^-+([^=]+?)\W+.*$/
                )
          );
        }
        function _e(y) {
          return !w(y, p.bools) && !w(y, p.counts) && `${y}` in c ? c[y] : Jr(vr(y));
        }
        function Jr(y) {
          return { [pt.BOOLEAN]: !0, [pt.STRING]: '', [pt.NUMBER]: void 0, [pt.ARRAY]: [] }[y];
        }
        function vr(y) {
          let _ = pt.BOOLEAN;
          return (
            w(y, p.strings)
              ? (_ = pt.STRING)
              : w(y, p.numbers)
                ? (_ = pt.NUMBER)
                : w(y, p.bools)
                  ? (_ = pt.BOOLEAN)
                  : w(y, p.arrays) && (_ = pt.ARRAY),
            _
          );
        }
        function Pe(y) {
          return y === void 0;
        }
        function Wt() {
          Object.keys(p.counts).find((y) =>
            w(y, p.arrays)
              ? ((x = Error(b('Invalid configuration: %s, opts.count excludes opts.array.', y))),
                !0)
              : w(y, p.nargs)
                ? ((x = Error(b('Invalid configuration: %s, opts.count excludes opts.narg.', y))),
                  !0)
                : !1
          );
        }
        return {
          aliases: Object.assign({}, p.aliases),
          argv: Object.assign(O, k),
          configuration: a,
          defaulted: Object.assign({}, m),
          error: x,
          newAliases: Object.assign({}, d),
        };
      }
    };
  function bN(r) {
    let e = [],
      t = Object.create(null),
      n = !0;
    for (
      Object.keys(r).forEach(function (i) {
        e.push([].concat(r[i], i));
      });
      n;

    ) {
      n = !1;
      for (let i = 0; i < e.length; i++)
        for (let s = i + 1; s < e.length; s++)
          if (
            e[i].filter(function (a) {
              return e[s].indexOf(a) !== -1;
            }).length
          ) {
            (e[i] = e[i].concat(e[s])), e.splice(s, 1), (n = !0);
            break;
          }
    }
    return (
      e.forEach(function (i) {
        i = i.filter(function (o, a, c) {
          return c.indexOf(o) === a;
        });
        let s = i.pop();
        s !== void 0 && typeof s == 'string' && (t[s] = i);
      }),
      t
    );
  }
  function qf(r) {
    return r !== void 0 ? r + 1 : 1;
  }
  function qb(r) {
    return r === '__proto__' ? '___proto___' : r;
  }
  function vN(r) {
    return typeof r == 'string' && (r[0] === "'" || r[0] === '"') && r[r.length - 1] === r[0]
      ? r.substring(1, r.length - 1)
      : r;
  }
  var Bf,
    jf,
    Gf,
    Bb =
      process && process.env && process.env.YARGS_MIN_NODE_VERSION
        ? Number(process.env.YARGS_MIN_NODE_VERSION)
        : 12,
    jb =
      (jf =
        (Bf = process == null ? void 0 : process.versions) === null || Bf === void 0
          ? void 0
          : Bf.node) !== null && jf !== void 0
        ? jf
        : (Gf = process == null ? void 0 : process.version) === null || Gf === void 0
          ? void 0
          : Gf.slice(1);
  if (jb && Number(jb.match(/^([^.]+)/)[1]) < Bb)
    throw Error(
      `yargs parser supports a minimum Node.js version of ${Bb}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`
    );
  var SN = process ? process.env : {},
    Hb = new $f({
      cwd: process.cwd,
      env: () => SN,
      format: EN.format,
      normalize: Mb.normalize,
      resolve: Mb.resolve,
      require: (r) => {
        if (typeof require < 'u') return require(r);
        if (r.match(/\.json$/)) return JSON.parse(gN.readFileSync(r, 'utf8'));
        throw Error('only .json config files are supported in ESM');
      },
    }),
    Xi = function (e, t) {
      return Hb.parse(e.slice(), t).argv;
    };
  Xi.detailed = function (r, e) {
    return Hb.parse(r.slice(), e);
  };
  Xi.camelCase = Wi;
  Xi.decamelize = Gb;
  Xi.looksLikeNumber = $b;
  zb.exports = Xi;
});
async function Xb(r, e) {
  let t = await wN(r);
  return async (n, i, s) => {
    let o = i.map((u) => {
      let l = RN(u.params, { configuration: { 'camel-case-expansion': !1, 'dot-notation': !0 } }),
        f = $u(l);
      return (
        l._.length == 0 && delete l._,
        {
          id: u.taskId,
          target: { project: u.projectName, target: u.target, configuration: u.configuration },
          overrides: { ...l, __overrides_unparsed__: f },
          projectRoot: u.projectRoot,
          cache: u.cache,
        }
      );
    });
    (process.env.NX_CACHE_FAILURES = 'true'),
      (process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID = n),
      (process.env.NX_STREAM_OUTPUT = 'true'),
      (process.env.NX_PREFIX_OUTPUT = 'true');
    let a = await t.invoke({ tasks: o, parallel: s });
    return {
      completedTasks: Object.values(a.taskGraph.tasks).map((u) => ({
        taskId: u.id,
        hash: u.hash,
        code: TN(e, u.hash),
      })),
      completedStatusCode: a.status,
    };
  };
}
function TN(r, e) {
  try {
    let t = (0, Vb.readFileSync)((0, Wb.join)(r, e, 'code'), { encoding: 'utf-8' });
    return Number(t);
  } catch (t) {
    throw (console.error(`Unable to read status code for hash ${e} from cache directory ${r}`), t);
  }
}
var Vb,
  Wb,
  wN,
  RN,
  Kb = q(() => {
    'use strict';
    (Vb = require('fs')), (Wb = require('path'));
    wi();
    ({ initTasksRunner: wN } = dt()), (RN = ua());
  });
async function Jb() {
  let r = IN();
  return async function (t, n, i) {
    let s = 0,
      o = [];
    for (let a of CN(n)) {
      let c = a.configuration ? `--configuration=${a.configuration}` : '',
        u = i > 1 ? ` --parallel --max-parallel=${i}` : '',
        l = `npx nx run-many --target=${a.target} ${c} --projects=${a.projects.join(',')} ${
          a.params
        }${u}`;
      A && xN.note({ title: `Executing: '${l}'` });
      try {
        (0, Yb.execSync)(l, {
          stdio: ['ignore', 'inherit', 'inherit'],
          env: {
            ...process.env,
            NX_CACHE_FAILURES: 'true',
            NX_CLOUD_DISTRIBUTED_EXECUTION_ID: t,
            NX_STREAM_OUTPUT: 'true',
            NX_PREFIX_OUTPUT: 'true',
          },
        }),
          o.push(...r(t));
      } catch (f) {
        if (f.status === Xt) throw f;
        (s = 1), o.push(...r(t));
      }
    }
    return { completedStatusCode: s, completedTasks: o };
  };
}
function CN(r) {
  let e = [];
  return (
    r.forEach((t) => {
      let n = e.find((i) => i.target === t.target && i.configuration === t.configuration);
      n
        ? n.projects.push(t.projectName)
        : e.push({
            target: t.target,
            projects: [t.projectName],
            params: t.params,
            configuration: t.configuration,
          });
    }),
    e
  );
}
function IN() {
  return (r) => {
    let e = `Command execution failed (distributed task execution: ${r}). Tasks hashes haven't been recorded.`,
      t;
    try {
      let n = `${ON}/tasks-hashes-${r}`;
      (t = JSON.parse((0, la.readFileSync)(n).toString())), (0, la.unlinkSync)(n);
    } catch {
      throw new Error(e);
    }
    if (t.length == 0) throw new Error(e);
    return t;
  };
}
var Yb,
  la,
  xN,
  ON,
  Zb = q(() => {
    'use strict';
    (Yb = require('child_process')), (la = require('fs'));
    te();
    ({ output: xN } = Y()), ({ cacheDirectory: ON } = dt());
  });
var Vf = {};
At(Vf, { startAgent: () => DN });
async function DN() {
  let r = me(),
    e = ve(),
    t = je(),
    n = Te(),
    i = kN();
  gr(e, t) || (_r(), process.exit(1)),
    br.targets && br.targets.length
      ? Ki.note({ title: `Starting an agent for running Nx target(s) [${br.targets.join(', ')}]` })
      : Ki.note({ title: `Starting Agent '${i}' for running Nx tasks` });
  let { nxJson: s, nxCloudOptions: o } = It();
  function a() {
    var b;
    let m = (b = s.tasksRunnerOptions) == null ? void 0 : b.default;
    return s.nxCloudAccessToken && !m
      ? !0
      : (!(m != null && m.runner) && process.env.NX_CLOUD_ACCESS_TOKEN) ||
          (!(m != null && m.runner) && s.nxCloudAccessToken) ||
          (m == null ? void 0 : m.runner) === 'nx-cloud' ||
          (m == null ? void 0 : m.runner) === '@nrwl/nx-cloud';
  }
  if (!a()) return Db(), process.exit(1);
  (await qi(o)) ||
    (Ki.error({
      title: 'Nx Cloud: Workspace is disabled',
      bodyLines: [
        'Distributed Task Execution is disabled when your workspace is disabled',
        '',
        "Organization administrators can find more information on the 'Billing' page in the Nx Cloud Webapp",
      ],
    }),
    process.exit(1));
  let u = new ca(o, r, e, t, n, i);
  LN(u, o, i);
  let l = new Zt(xr || o.encryptionKey),
    f = new Jt(o),
    h = new zn(new hr(l, f, o, 'dte-agent'), zf),
    d = AN ? await Xb(o, zf) : await Jb();
  return Ub(i, u, h, d, br.targets)
    .then(async (m) => (await on(o), m))
    .catch(async (m) => {
      throw (await u.completeRunGroupWithError(`Critical Error in Agent: "${m.message}"`), m);
    });
}
function kN() {
  return process.env.NX_AGENT_NAME !== void 0
    ? process.env.NX_AGENT_NAME
    : process.env.CIRCLECI !== void 0 && process.env.CIRCLE_STAGE
      ? process.env.CIRCLE_STAGE
      : process.env.CIRCLECI !== void 0 && process.env.CIRCLE_JOB
        ? process.env.CIRCLE_JOB
        : `Agent ${Math.floor(Math.random() * 1e5)}`;
}
function LN(r, e, t) {
  let n = `${zf}/lockfiles`,
    i = `${n}/${t}.lock`;
  (0, mt.existsSync)(n) || (0, mt.mkdirSync)(n, { recursive: !0 });
  let s = (0, mt.readdirSync)(n);
  s.length &&
    (s.includes(`${t}.lock`) &&
      (Ki.error({
        title: 'Duplicate Agent ID Detected',
        bodyLines: [
          'We have detected another agent with this ID running in this workspace. This should not happen.',
          '',
          'End all currently running agents, run "npx nx-cloud clean-up-agents", and try again.',
        ],
      }),
      process.exit(1)),
    Ki.warn({
      title: 'Other Nx Cloud Agents Detected',
      bodyLines: [
        'We have detected other agents running in this workspace. This can cause unexpected behavior.',
        '',
        'This can also be a false positive caused by agents that did not shut down correctly.',
        'If you believe this is the case, run "npx nx-cloud clean-up-agents".',
      ],
    })),
    (0, mt.writeFileSync)(i, ''),
    process.on('exit', (o) => {
      Hf(i, o);
    }),
    process.on('SIGTERM', async () => {
      await r.completeRunGroupWithError('Agent was terminated via SIGTERM'), Hf(i, 1);
    }),
    process.on('SIGINT', async () => {
      await r.completeRunGroupWithError('Agent was terminated via SIGINT'), Hf(i, 1);
    });
}
function Hf(r, e) {
  (0, mt.existsSync)(r) && ((0, mt.unlinkSync)(r), process.exit(e));
}
var mt,
  NN,
  J1,
  Ki,
  Z1,
  AN,
  zf,
  br,
  Wf = q(() => {
    'use strict';
    mt = require('fs');
    wf();
    te();
    Wn();
    Ql();
    kt();
    bs();
    kb();
    Hi();
    vs();
    wo();
    Pb();
    Fb();
    Kb();
    Zb();
    (NN = ua()),
      (J1 = aa()),
      ({ output: Ki, workspaceRoot: Z1 } = Y()),
      ({ initTasksRunner: AN, cacheDirectory: zf } = dt()),
      (br = NN(process.argv, { array: ['targets'], default: {} }));
    br.targets &&
      br.targets.length === 1 &&
      (br.targets = br.targets[0].split(',').map((r) => r.trim()));
  });
function ev(r, e) {
  let t = FN(r),
    n = PN();
  return UN(Object.values(e.nodes), t, n);
}
function PN() {
  let r = process.env.NX_BASE || 'HEAD~1',
    e = process.env.NX_HEAD || 'HEAD';
  A &&
    (console.log('Evaluating touched files from Git'),
    console.log(`Base: ${r}`),
    console.log(`Head: ${e}`));
  let t = (0, Qb.execSync)(`git diff --name-only ${r} ${e}`)
    .toString()
    .split(
      `
`
    )
    .filter((n) => n.length !== 0);
  return (
    A &&
      (console.log('The following files were touched:'), t.forEach((n) => console.log(`- ${n}`))),
    t
  );
}
function UN(r, e, t) {
  let n = new Set(),
    i = r.sort((s, o) => o.data.root.split('/').length - s.data.root.split('/').length);
  return (
    A && console.log('Touched files result in the following affected projects'),
    t.forEach((s) => {
      for (let o = 0; o < e.length; o++)
        if (s === e[o]) {
          A && console.log(`- ${s} affects all projects`), n.add('*');
          break;
        }
      for (let o = 0; o < i.length; o++) {
        let a = i[o];
        if (s.startsWith(a.data.root)) {
          A && console.log(`- ${s} affects ${a.name}`), n.add(a.name);
          break;
        }
      }
    }),
    Array.from(n)
  );
}
function FN(r) {
  let e = [];
  return e.push(...MN(r.namedInputs)), e.push(...qN(r.targetDefaults)), e;
}
function MN(r) {
  let e = [];
  for (let t of Object.values(r || {})) e.push(...tv(t));
  return e;
}
function qN(r) {
  let e = [];
  for (let t of Object.values(r || {})) t.inputs && e.push(...tv(t.inputs));
  return e;
}
function tv(r) {
  let e = [];
  for (let t of r)
    typeof t == 'string' && t.startsWith('{workspaceRoot}/')
      ? e.push(t.substring(16))
      : t.fileset && t.fileset.startsWith('{workspaceRoot}/') && e.push(t.fileset.substring(16));
  return e;
}
var Qb,
  rv = q(() => {
    'use strict';
    Qb = require('child_process');
    te();
  });
var nv,
  Xn,
  Xf = q(() => {
    'use strict';
    gt();
    Ti();
    kt();
    ({ output: nv } = Y()),
      (Xn = class {
        constructor(e) {
          this.apiAxiosInstance = Oe(e);
        }
        async createRunGroup(e, t, n, i, s, o, a, c, u, l, f, h, d = !1, m = []) {
          var p;
          let b = Ce('createRunGroup');
          try {
            let S = await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/create-run-group', {
                branch: e,
                runGroup: t,
                ciExecutionId: n,
                ciExecutionEnv: i,
                stopAgentsOnFailure: s,
                agentCount: o,
                stopAgentsAfter: a,
                commitSha: u,
                distributeOn: c,
                affectedProjectRatio: f,
                vcsContext: xt(),
                envVars: h,
                requireExplicitCompletion: d,
                touchedProjects: m,
              })
            );
            b.recordMetric(ne(S));
          } catch (S) {
            b.recordMetric(
              (p = S == null ? void 0 : S.axiosException) != null && p.response
                ? ne(S.axiosException.response)
                : Ie
            ),
              nv.error({ title: S.message }),
              process.exit(1);
          }
        }
        async completeRunGroup(e, t, n, i) {
          var o;
          let s = Ce('completeRunGroup');
          try {
            let a = await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/complete-run-group', {
                branch: e,
                runGroup: t,
                ciExecutionId: n,
                ciExecutionEnv: i,
                vcsContext: xt(),
              })
            );
            s.recordMetric(ne(a));
          } catch (a) {
            s.recordMetric(
              (o = a == null ? void 0 : a.axiosException) != null && o.response
                ? ne(a.axiosException.response)
                : Ie
            ),
              nv.error({ title: a.message }),
              process.exit(1);
          }
        }
        async sendHeartbeat(e, t) {
          await this.apiAxiosInstance.post('/nx-cloud/heartbeat', {
            ciExecutionId: e,
            runGroup: t,
          });
        }
        async fetchProjectGraph() {
          return await this.apiAxiosInstance.get('/nx-cloud/executions/project-graph');
        }
      });
  });
var Kf = {};
At(Kf, { startCiRun: () => GN });
async function jN(r) {
  var e, t;
  try {
    return (t = (e = await r.fetchProjectGraph()) == null ? void 0 : e.data) == null
      ? void 0
      : t.projectGraph;
  } catch {
    return null;
  }
}
async function GN() {
  let { nxJson: r, nxCloudOptions: e } = It(),
    t = me(),
    n = ve(),
    i = je(),
    s = Te(),
    o = Ke(),
    a = Qi(),
    c = $N(Vt),
    u = void 0,
    l = Rh(Vt.withEnvVars);
  gr(n, i) || (_r(), process.exit(1)),
    A &&
      fa.note({
        title: `Creating run group. branch: ${t}, ciExecutionId: ${i}, ciExecutionEnv: ${s}, runGroup: ${n}, commitSha: ${o}, requireExplicitCompletion: ${Vt.requireExplicitCompletion}`,
      }),
    Vt.commandCount &&
      (fa.error({
        title: '--command-count is deprecated. Use --stop-agents-after instead.',
        bodyLines: ['E.g., npx nx-cloud start-ci-run --stop-agents-after="e2e"'],
      }),
      process.exit(1));
  let f = new Xn(e),
    h = [];
  if ((c != null && c.endsWith('.yaml')) || (c != null && c.endsWith('.yml'))) {
    let d = await jN(f);
    d != null
      ? ((h = ev(r, d)),
        A &&
          fa.note({
            title: 'The following projects were touched during recent changes',
            bodyLines: h,
          }))
      : fa.warn({
          title: 'Nx Cloud was unable to retrieve a project graph to compare against.',
          bodyLines: [
            'This CI Pipeline execution may still be recoverable, but auto-sizing will',
            'not be used.',
          ],
        });
  }
  await f.createRunGroup(
    t,
    n,
    i,
    s,
    Vt.stopAgentsOnFailure,
    Vt.agentCount,
    Vt.stopAgentsAfter,
    c,
    o,
    a,
    u,
    l,
    Vt.requireExplicitCompletion,
    h
  ),
    await na(),
    Vt.useDteByDefault && j_();
}
function $N(r) {
  let e = r.distributeOn ? r.distributeOn : r.distributesOn;
  if (e !== 'manual') return e;
}
var BN,
  fa,
  hU,
  Vt,
  Yf = q(() => {
    'use strict';
    Jl();
    Zl();
    te();
    Wn();
    rv();
    Xf();
    Hi();
    (BN = ua()),
      ({ output: fa, workspaceRoot: hU } = Y()),
      (Vt = BN(process.argv, {
        boolean: ['stop-agents-on-failure', 'use-dte-by-default', 'require-explicit-completion'],
        number: ['agent-count', 'command-count'],
        string: ['stop-agents-after', 'with-env-vars', 'distributes-on', 'distribute-on'],
        default: { useDteByDefault: !0 },
      }));
  });
var ha = {};
At(ha, { stopAllAgents: () => zN });
async function zN() {
  let r = me(),
    e = ve(),
    t = je(),
    n = Te();
  gr(e, t) || (_r(), process.exit(1)),
    A &&
      HN.note({
        title: `Stopping all agents running tasks for run group. branch: ${r}, ciExecutionId: ${t}, ciExecutionEnv: ${n}, runGroup: ${e}`,
      });
  let { nxCloudOptions: i } = It();
  await new Xn(i).completeRunGroup(r, e, t, n);
}
var HN,
  da = q(() => {
    'use strict';
    te();
    Wn();
    Xf();
    Hi();
    ({ output: HN } = Y());
  });
var Zf = E((EU, sv) => {
  'use strict';
  var iv = require('fs'),
    Jf;
  function VN() {
    try {
      return iv.statSync('/.dockerenv'), !0;
    } catch {
      return !1;
    }
  }
  function WN() {
    try {
      return iv.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
    } catch {
      return !1;
    }
  }
  sv.exports = () => (Jf === void 0 && (Jf = VN() || WN()), Jf);
});
var cv = E((gU, Qf) => {
  'use strict';
  var XN = require('os'),
    KN = require('fs'),
    ov = Zf(),
    av = () => {
      if (process.platform !== 'linux') return !1;
      if (XN.release().toLowerCase().includes('microsoft')) return !ov();
      try {
        return KN.readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft')
          ? !ov()
          : !1;
      } catch {
        return !1;
      }
    };
  process.env.__IS_WSL_TEST__ ? (Qf.exports = av) : (Qf.exports = av());
});
var lv = E((_U, uv) => {
  'use strict';
  uv.exports = (r, e, t) => {
    let n = (i) => Object.defineProperty(r, e, { value: i, enumerable: !0, writable: !0 });
    return (
      Object.defineProperty(r, e, {
        configurable: !0,
        enumerable: !0,
        get() {
          let i = t();
          return n(i), i;
        },
        set(i) {
          n(i);
        },
      }),
      r
    );
  };
});
var Ev = E((bU, yv) => {
  'use strict';
  var YN = require('path'),
    JN = require('child_process'),
    { promises: ma, constants: mv } = require('fs'),
    pa = cv(),
    ZN = Zf(),
    th = lv(),
    fv = YN.join(__dirname, 'xdg-open'),
    { platform: Kn, arch: hv } = process,
    QN = () => {
      try {
        return ma.statSync('/run/.containerenv'), !0;
      } catch {
        return !1;
      }
    },
    eh;
  function eA() {
    return eh === void 0 && (eh = QN() || ZN()), eh;
  }
  var tA = (() => {
      let r = '/mnt/',
        e;
      return async function () {
        if (e) return e;
        let t = '/etc/wsl.conf',
          n = !1;
        try {
          await ma.access(t, mv.F_OK), (n = !0);
        } catch {}
        if (!n) return r;
        let i = await ma.readFile(t, { encoding: 'utf8' }),
          s = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(i);
        return s ? ((e = s.groups.mountPoint.trim()), (e = e.endsWith('/') ? e : `${e}/`), e) : r;
      };
    })(),
    dv = async (r, e) => {
      let t;
      for (let n of r)
        try {
          return await e(n);
        } catch (i) {
          t = i;
        }
      throw t;
    },
    ya = async (r) => {
      if (
        ((r = { wait: !1, background: !1, newInstance: !1, allowNonzeroExitCode: !1, ...r }),
        Array.isArray(r.app))
      )
        return dv(r.app, (a) => ya({ ...r, app: a }));
      let { name: e, arguments: t = [] } = r.app || {};
      if (((t = [...t]), Array.isArray(e)))
        return dv(e, (a) => ya({ ...r, app: { name: a, arguments: t } }));
      let n,
        i = [],
        s = {};
      if (Kn === 'darwin')
        (n = 'open'),
          r.wait && i.push('--wait-apps'),
          r.background && i.push('--background'),
          r.newInstance && i.push('--new'),
          e && i.push('-a', e);
      else if (Kn === 'win32' || (pa && !eA() && !e)) {
        let a = await tA();
        (n = pa
          ? `${a}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`
          : `${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell`),
          i.push(
            '-NoProfile',
            '-NonInteractive',
            '\u2013ExecutionPolicy',
            'Bypass',
            '-EncodedCommand'
          ),
          pa || (s.windowsVerbatimArguments = !0);
        let c = ['Start'];
        r.wait && c.push('-Wait'),
          e
            ? (c.push(`"\`"${e}\`""`, '-ArgumentList'), r.target && t.unshift(r.target))
            : r.target && c.push(`"${r.target}"`),
          t.length > 0 && ((t = t.map((u) => `"\`"${u}\`""`)), c.push(t.join(','))),
          (r.target = Buffer.from(c.join(' '), 'utf16le').toString('base64'));
      } else {
        if (e) n = e;
        else {
          let a = !__dirname || __dirname === '/',
            c = !1;
          try {
            await ma.access(fv, mv.X_OK), (c = !0);
          } catch {}
          n = process.versions.electron || Kn === 'android' || a || !c ? 'xdg-open' : fv;
        }
        t.length > 0 && i.push(...t), r.wait || ((s.stdio = 'ignore'), (s.detached = !0));
      }
      r.target && i.push(r.target), Kn === 'darwin' && t.length > 0 && i.push('--args', ...t);
      let o = JN.spawn(n, i, s);
      return r.wait
        ? new Promise((a, c) => {
            o.once('error', c),
              o.once('close', (u) => {
                if (!r.allowNonzeroExitCode && u > 0) {
                  c(new Error(`Exited with code ${u}`));
                  return;
                }
                a(o);
              });
          })
        : (o.unref(), o);
    },
    rh = (r, e) => {
      if (typeof r != 'string') throw new TypeError('Expected a `target`');
      return ya({ ...e, target: r });
    },
    rA = (r, e) => {
      if (typeof r != 'string') throw new TypeError('Expected a `name`');
      let { arguments: t = [] } = e || {};
      if (t != null && !Array.isArray(t))
        throw new TypeError('Expected `appArguments` as Array type');
      return ya({ ...e, app: { name: r, arguments: t } });
    };
  function pv(r) {
    if (typeof r == 'string' || Array.isArray(r)) return r;
    let { [hv]: e } = r;
    if (!e) throw new Error(`${hv} is not supported`);
    return e;
  }
  function nh({ [Kn]: r }, { wsl: e }) {
    if (e && pa) return pv(e);
    if (!r) throw new Error(`${Kn} is not supported`);
    return pv(r);
  }
  var Ea = {};
  th(Ea, 'chrome', () =>
    nh(
      {
        darwin: 'google chrome',
        win32: 'chrome',
        linux: ['google-chrome', 'google-chrome-stable', 'chromium'],
      },
      {
        wsl: {
          ia32: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe',
          x64: [
            '/mnt/c/Program Files/Google/Chrome/Application/chrome.exe',
            '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe',
          ],
        },
      }
    )
  );
  th(Ea, 'firefox', () =>
    nh(
      {
        darwin: 'firefox',
        win32: 'C:\\Program Files\\Mozilla Firefox\\firefox.exe',
        linux: 'firefox',
      },
      { wsl: '/mnt/c/Program Files/Mozilla Firefox/firefox.exe' }
    )
  );
  th(Ea, 'edge', () =>
    nh(
      {
        darwin: 'microsoft edge',
        win32: 'msedge',
        linux: ['microsoft-edge', 'microsoft-edge-dev'],
      },
      { wsl: '/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' }
    )
  );
  rh.apps = Ea;
  rh.openApp = rA;
  yv.exports = rh;
});
function gv() {
  let { output: r } = Y();
  r.error({
    title: 'Connections to Nx Cloud are disabled for this workspace',
    bodyLines: [
      'This was an intentional decision by someone on your team.',
      'Nx Cloud cannot and will not be enabled.',
      '',
      "To allow connections to Nx Cloud again, remove the 'neverConnectToCloud'",
      'property in nx.json.',
    ],
  });
}
var _v = q(() => {
  'use strict';
});
var ih = {};
At(ih, { uploadAndShowRunDetails: () => sA });
async function iA(r) {
  let e = new Dn(r),
    t = {},
    n = Zr(),
    i = new Ln(e, t, r, n),
    s = new dr(r.maskedProperties),
    o = JSON.parse((0, vv.readFileSync)((0, wv.join)(bv, 'run.json')).toString()),
    a = o.tasks.map((u) => ({ ...u, terminalOutput: xo(bv, s, u.hash, u.cacheStatus, u.status) })),
    c = Ao();
  return (
    await i.endRun(
      o.run,
      a,
      { branch: null, runGroup: null, ciExecutionId: null, ciExecutionEnv: null },
      void 0,
      c
    ),
    `${_s(r.url || 'https://nx.app')}/runs/${c}`
  );
}
async function sA() {
  let { nxJson: r, nxCloudOptions: e } = It();
  r.neverConnectToCloud && (gv(), process.exit(1));
  let t = await iA(e);
  nA.success({
    title: 'Successfully uploaded the run details',
    bodyLines: [`View run details at ${t}`],
  }),
    (0, Sv.default)(t);
}
var vv,
  Sv,
  wv,
  nA,
  bv,
  sh = q(() => {
    'use strict';
    (vv = require('fs')), (Sv = Sr(Ev())), (wv = require('path'));
    te();
    Wn();
    _v();
    cc();
    Ju();
    Zu();
    Gu();
    To();
    Wu();
    ({ output: nA } = Y()), ({ cacheDirectory: bv } = dt());
  });
exports.nxCloudTasksRunner = (...r) => (Rb(), be(wb)).default(...r);
exports.configureLightClientRequire = () => (Rr(), be(ph)).configureLightClientRequire;
var oA = {
  'clean-up-agents': () => (Uf(), be(Pf)).cleanUpAgents(),
  record: () => (Mf(), be(Ff)).runCommandAndStoreInCloud(),
  'start-agent': () => (Wf(), be(Vf)).startAgent(),
  'start-ci-run': () => (Yf(), be(Kf)).startCiRun(),
  'stop-all-agents': () => (da(), be(ha)).stopAllAgents(),
  'complete-ci-run': () => (da(), be(ha)).stopAllAgents(),
  'upload-and-show-run-details': () => (sh(), be(ih)).uploadAndShowRunDetails(),
};
exports.commands = oA;
exports.cleanUpAgents = () => (Uf(), be(Pf)).cleanUpAgents();
exports.runCommandAndStoreInCloud = () => (Mf(), be(Ff)).runCommandAndStoreInCloud();
exports.startAgent = () => (Wf(), be(Vf)).startAgent();
exports.startCiRun = () => (Yf(), be(Kf)).startCiRun();
exports.stopAllAgents = () => (da(), be(ha)).stopAllAgents();
exports.uploadAndShowRunDetails = () => (sh(), be(ih)).uploadAndShowRunDetails();
