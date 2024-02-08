'use strict';
var it = Object.defineProperty;
var Co = Object.getOwnPropertyDescriptor;
var Ro = Object.getOwnPropertyNames;
var yo = Object.prototype.hasOwnProperty;
var te = (e, t) => () => (e && (t = e((e = 0))), t);
var T = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  De = (e, t) => {
    for (var r in t) it(e, r, { get: t[r], enumerable: !0 });
  },
  go = (e, t, r, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let n of Ro(t))
        !yo.call(e, n) &&
          n !== r &&
          it(e, n, { get: () => t[n], enumerable: !(o = Co(t, n)) || o.enumerable });
    return e;
  };
var Me = (e) => go(it({}, '__esModule', { value: !0 }), e);
function nr() {
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
var or = te(() => {
  'use strict';
});
var ur = T((aa, at) => {
  'use strict';
  var To = require('fs'),
    sr = require('path'),
    Io = require('os');
  function ir(e) {
    console.log(`[dotenv][DEBUG] ${e}`);
  }
  var xo = `
`,
    Oo = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,
    No = /\\n/g,
    Uo = /\r\n|\n|\r/;
  function ar(e, t) {
    let r = !!(t && t.debug),
      o = {};
    return (
      e
        .toString()
        .split(Uo)
        .forEach(function (n, s) {
          let i = n.match(Oo);
          if (i != null) {
            let u = i[1],
              a = i[2] || '',
              l = a.length - 1,
              c = a[0] === '"' && a[l] === '"';
            (a[0] === "'" && a[l] === "'") || c
              ? ((a = a.substring(1, l)), c && (a = a.replace(No, xo)))
              : (a = a.trim()),
              (o[u] = a);
          } else r && ir(`did not match key and value when parsing line ${s + 1}: ${n}`);
        }),
      o
    );
  }
  function wo(e) {
    return e[0] === '~' ? sr.join(Io.homedir(), e.slice(1)) : e;
  }
  function bo(e) {
    let t = sr.resolve(process.cwd(), '.env'),
      r = 'utf8',
      o = !1;
    e &&
      (e.path != null && (t = wo(e.path)),
      e.encoding != null && (r = e.encoding),
      e.debug != null && (o = !0));
    try {
      let n = ar(To.readFileSync(t, { encoding: r }), { debug: o });
      return (
        Object.keys(n).forEach(function (s) {
          Object.prototype.hasOwnProperty.call(process.env, s)
            ? o && ir(`"${s}" is already defined in \`process.env\` and will not be overwritten`)
            : (process.env[s] = n[s]);
        }),
        { parsed: n }
      );
    } catch (n) {
      return { error: n };
    }
  }
  at.exports.config = bo;
  at.exports.parse = ar;
});
var cr = T((Ie, ut) => {
  'use strict';
  (function (e, t) {
    typeof Ie == 'object' && typeof ut == 'object'
      ? (ut.exports = t(require('child_process'), require('crypto')))
      : typeof define == 'function' && define.amd
        ? define(['child_process', 'crypto'], t)
        : typeof Ie == 'object'
          ? (Ie['electron-machine-id'] = t(require('child_process'), require('crypto')))
          : (e['electron-machine-id'] = t(e.child_process, e.crypto));
  })(Ie, function (e, t) {
    return (function (r) {
      function o(s) {
        if (n[s]) return n[s].exports;
        var i = (n[s] = { exports: {}, id: s, loaded: !1 });
        return r[s].call(i.exports, i, i.exports, o), (i.loaded = !0), i.exports;
      }
      var n = {};
      return (o.m = r), (o.c = n), (o.p = ''), o(0);
    })([
      function (r, o, n) {
        r.exports = n(34);
      },
      function (r, o, n) {
        var s = n(29)('wks'),
          i = n(33),
          u = n(2).Symbol,
          a = typeof u == 'function',
          l = (r.exports = function (c) {
            return s[c] || (s[c] = (a && u[c]) || (a ? u : i)('Symbol.' + c));
          });
        l.store = s;
      },
      function (r, o) {
        var n = (r.exports =
          typeof window < 'u' && window.Math == Math
            ? window
            : typeof self < 'u' && self.Math == Math
              ? self
              : Function('return this')());
        typeof __g == 'number' && (__g = n);
      },
      function (r, o, n) {
        var s = n(9);
        r.exports = function (i) {
          if (!s(i)) throw TypeError(i + ' is not an object!');
          return i;
        };
      },
      function (r, o, n) {
        r.exports = !n(24)(function () {
          return (
            Object.defineProperty({}, 'a', {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        });
      },
      function (r, o, n) {
        var s = n(12),
          i = n(17);
        r.exports = n(4)
          ? function (u, a, l) {
              return s.f(u, a, i(1, l));
            }
          : function (u, a, l) {
              return (u[a] = l), u;
            };
      },
      function (r, o) {
        var n = (r.exports = { version: '2.4.0' });
        typeof __e == 'number' && (__e = n);
      },
      function (r, o, n) {
        var s = n(14);
        r.exports = function (i, u, a) {
          if ((s(i), u === void 0)) return i;
          switch (a) {
            case 1:
              return function (l) {
                return i.call(u, l);
              };
            case 2:
              return function (l, c) {
                return i.call(u, l, c);
              };
            case 3:
              return function (l, c, f) {
                return i.call(u, l, c, f);
              };
          }
          return function () {
            return i.apply(u, arguments);
          };
        };
      },
      function (r, o) {
        var n = {}.hasOwnProperty;
        r.exports = function (s, i) {
          return n.call(s, i);
        };
      },
      function (r, o) {
        r.exports = function (n) {
          return typeof n == 'object' ? n !== null : typeof n == 'function';
        };
      },
      function (r, o) {
        r.exports = {};
      },
      function (r, o) {
        var n = {}.toString;
        r.exports = function (s) {
          return n.call(s).slice(8, -1);
        };
      },
      function (r, o, n) {
        var s = n(3),
          i = n(26),
          u = n(32),
          a = Object.defineProperty;
        o.f = n(4)
          ? Object.defineProperty
          : function (l, c, f) {
              if ((s(l), (c = u(c, !0)), s(f), i))
                try {
                  return a(l, c, f);
                } catch {}
              if ('get' in f || 'set' in f) throw TypeError('Accessors not supported!');
              return 'value' in f && (l[c] = f.value), l;
            };
      },
      function (r, o, n) {
        var s = n(42),
          i = n(15);
        r.exports = function (u) {
          return s(i(u));
        };
      },
      function (r, o) {
        r.exports = function (n) {
          if (typeof n != 'function') throw TypeError(n + ' is not a function!');
          return n;
        };
      },
      function (r, o) {
        r.exports = function (n) {
          if (n == null) throw TypeError("Can't call method on  " + n);
          return n;
        };
      },
      function (r, o, n) {
        var s = n(9),
          i = n(2).document,
          u = s(i) && s(i.createElement);
        r.exports = function (a) {
          return u ? i.createElement(a) : {};
        };
      },
      function (r, o) {
        r.exports = function (n, s) {
          return { enumerable: !(1 & n), configurable: !(2 & n), writable: !(4 & n), value: s };
        };
      },
      function (r, o, n) {
        var s = n(12).f,
          i = n(8),
          u = n(1)('toStringTag');
        r.exports = function (a, l, c) {
          a && !i((a = c ? a : a.prototype), u) && s(a, u, { configurable: !0, value: l });
        };
      },
      function (r, o, n) {
        var s = n(29)('keys'),
          i = n(33);
        r.exports = function (u) {
          return s[u] || (s[u] = i(u));
        };
      },
      function (r, o) {
        var n = Math.ceil,
          s = Math.floor;
        r.exports = function (i) {
          return isNaN((i = +i)) ? 0 : (i > 0 ? s : n)(i);
        };
      },
      function (r, o, n) {
        var s = n(11),
          i = n(1)('toStringTag'),
          u =
            s(
              (function () {
                return arguments;
              })()
            ) == 'Arguments',
          a = function (l, c) {
            try {
              return l[c];
            } catch {}
          };
        r.exports = function (l) {
          var c, f, p;
          return l === void 0
            ? 'Undefined'
            : l === null
              ? 'Null'
              : typeof (f = a((c = Object(l)), i)) == 'string'
                ? f
                : u
                  ? s(c)
                  : (p = s(c)) == 'Object' && typeof c.callee == 'function'
                    ? 'Arguments'
                    : p;
        };
      },
      function (r, o) {
        r.exports =
          'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ','
          );
      },
      function (r, o, n) {
        var s = n(2),
          i = n(6),
          u = n(7),
          a = n(5),
          l = 'prototype',
          c = function (f, p, d) {
            var h,
              v,
              C,
              N = f & c.F,
              x = f & c.G,
              I = f & c.S,
              y = f & c.P,
              w = f & c.B,
              E = f & c.W,
              b = x ? i : i[p] || (i[p] = {}),
              U = b[l],
              S = x ? s : I ? s[p] : (s[p] || {})[l];
            x && (d = p);
            for (h in d)
              (v = !N && S && S[h] !== void 0),
                (v && h in b) ||
                  ((C = v ? S[h] : d[h]),
                  (b[h] =
                    x && typeof S[h] != 'function'
                      ? d[h]
                      : w && v
                        ? u(C, s)
                        : E && S[h] == C
                          ? (function (L) {
                              var K = function (V, B, z) {
                                if (this instanceof L) {
                                  switch (arguments.length) {
                                    case 0:
                                      return new L();
                                    case 1:
                                      return new L(V);
                                    case 2:
                                      return new L(V, B);
                                  }
                                  return new L(V, B, z);
                                }
                                return L.apply(this, arguments);
                              };
                              return (K[l] = L[l]), K;
                            })(C)
                          : y && typeof C == 'function'
                            ? u(Function.call, C)
                            : C),
                  y &&
                    (((b.virtual || (b.virtual = {}))[h] = C),
                    f & c.R && U && !U[h] && a(U, h, C)));
          };
        (c.F = 1),
          (c.G = 2),
          (c.S = 4),
          (c.P = 8),
          (c.B = 16),
          (c.W = 32),
          (c.U = 64),
          (c.R = 128),
          (r.exports = c);
      },
      function (r, o) {
        r.exports = function (n) {
          try {
            return !!n();
          } catch {
            return !0;
          }
        };
      },
      function (r, o, n) {
        r.exports = n(2).document && document.documentElement;
      },
      function (r, o, n) {
        r.exports =
          !n(4) &&
          !n(24)(function () {
            return (
              Object.defineProperty(n(16)('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });
      },
      function (r, o, n) {
        'use strict';
        var s = n(28),
          i = n(23),
          u = n(57),
          a = n(5),
          l = n(8),
          c = n(10),
          f = n(45),
          p = n(18),
          d = n(52),
          h = n(1)('iterator'),
          v = !([].keys && 'next' in [].keys()),
          C = '@@iterator',
          N = 'keys',
          x = 'values',
          I = function () {
            return this;
          };
        r.exports = function (y, w, E, b, U, S, L) {
          f(E, w, b);
          var K,
            V,
            B,
            z = function (_) {
              if (!v && _ in g) return g[_];
              switch (_) {
                case N:
                  return function () {
                    return new E(this, _);
                  };
                case x:
                  return function () {
                    return new E(this, _);
                  };
              }
              return function () {
                return new E(this, _);
              };
            },
            A = w + ' Iterator',
            J = U == x,
            $ = !1,
            g = y.prototype,
            q = g[h] || g[C] || (U && g[U]),
            P = q || z(U),
            Z = U ? (J ? z('entries') : P) : void 0,
            m = (w == 'Array' && g.entries) || q;
          if (
            (m &&
              ((B = d(m.call(new y()))),
              B !== Object.prototype && (p(B, A, !0), s || l(B, h) || a(B, h, I))),
            J &&
              q &&
              q.name !== x &&
              (($ = !0),
              (P = function () {
                return q.call(this);
              })),
            (s && !L) || (!v && !$ && g[h]) || a(g, h, P),
            (c[w] = P),
            (c[A] = I),
            U)
          )
            if (((K = { values: J ? P : z(x), keys: S ? P : z(N), entries: Z }), L))
              for (V in K) V in g || u(g, V, K[V]);
            else i(i.P + i.F * (v || $), w, K);
          return K;
        };
      },
      function (r, o) {
        r.exports = !0;
      },
      function (r, o, n) {
        var s = n(2),
          i = '__core-js_shared__',
          u = s[i] || (s[i] = {});
        r.exports = function (a) {
          return u[a] || (u[a] = {});
        };
      },
      function (r, o, n) {
        var s,
          i,
          u,
          a = n(7),
          l = n(41),
          c = n(25),
          f = n(16),
          p = n(2),
          d = p.process,
          h = p.setImmediate,
          v = p.clearImmediate,
          C = p.MessageChannel,
          N = 0,
          x = {},
          I = 'onreadystatechange',
          y = function () {
            var E = +this;
            if (x.hasOwnProperty(E)) {
              var b = x[E];
              delete x[E], b();
            }
          },
          w = function (E) {
            y.call(E.data);
          };
        (h && v) ||
          ((h = function (E) {
            for (var b = [], U = 1; arguments.length > U; ) b.push(arguments[U++]);
            return (
              (x[++N] = function () {
                l(typeof E == 'function' ? E : Function(E), b);
              }),
              s(N),
              N
            );
          }),
          (v = function (E) {
            delete x[E];
          }),
          n(11)(d) == 'process'
            ? (s = function (E) {
                d.nextTick(a(y, E, 1));
              })
            : C
              ? ((i = new C()),
                (u = i.port2),
                (i.port1.onmessage = w),
                (s = a(u.postMessage, u, 1)))
              : p.addEventListener && typeof postMessage == 'function' && !p.importScripts
                ? ((s = function (E) {
                    p.postMessage(E + '', '*');
                  }),
                  p.addEventListener('message', w, !1))
                : (s =
                    I in f('script')
                      ? function (E) {
                          c.appendChild(f('script'))[I] = function () {
                            c.removeChild(this), y.call(E);
                          };
                        }
                      : function (E) {
                          setTimeout(a(y, E, 1), 0);
                        })),
          (r.exports = { set: h, clear: v });
      },
      function (r, o, n) {
        var s = n(20),
          i = Math.min;
        r.exports = function (u) {
          return u > 0 ? i(s(u), 9007199254740991) : 0;
        };
      },
      function (r, o, n) {
        var s = n(9);
        r.exports = function (i, u) {
          if (!s(i)) return i;
          var a, l;
          if (
            (u && typeof (a = i.toString) == 'function' && !s((l = a.call(i)))) ||
            (typeof (a = i.valueOf) == 'function' && !s((l = a.call(i)))) ||
            (!u && typeof (a = i.toString) == 'function' && !s((l = a.call(i))))
          )
            return l;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (r, o) {
        var n = 0,
          s = Math.random();
        r.exports = function (i) {
          return 'Symbol('.concat(i === void 0 ? '' : i, ')_', (++n + s).toString(36));
        };
      },
      function (r, o, n) {
        'use strict';
        function s(I) {
          return I && I.__esModule ? I : { default: I };
        }
        function i() {
          return process.platform !== 'win32'
            ? ''
            : process.arch === 'ia32' && process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')
              ? 'mixed'
              : 'native';
        }
        function u(I) {
          return (0, h.createHash)('sha256').update(I).digest('hex');
        }
        function a(I) {
          switch (C) {
            case 'darwin':
              return I.split('IOPlatformUUID')[1]
                .split(
                  `
`
                )[0]
                .replace(/\=|\s+|\"/gi, '')
                .toLowerCase();
            case 'win32':
              return I.toString()
                .split('REG_SZ')[1]
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'linux':
              return I.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'freebsd':
              return I.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            default:
              throw new Error('Unsupported platform: ' + process.platform);
          }
        }
        function l(I) {
          var y = a((0, d.execSync)(x[C]).toString());
          return I ? y : u(y);
        }
        function c(I) {
          return new p.default(function (y, w) {
            return (0, d.exec)(x[C], {}, function (E, b, U) {
              if (E) return w(new Error('Error while obtaining machine id: ' + E.stack));
              var S = a(b.toString());
              return y(I ? S : u(S));
            });
          });
        }
        Object.defineProperty(o, '__esModule', { value: !0 });
        var f = n(35),
          p = s(f);
        (o.machineIdSync = l), (o.machineId = c);
        var d = n(70),
          h = n(71),
          v = process,
          C = v.platform,
          N = {
            native: '%windir%\\System32',
            mixed: '%windir%\\sysnative\\cmd.exe /c %windir%\\System32',
          },
          x = {
            darwin: 'ioreg -rd1 -c IOPlatformExpertDevice',
            win32:
              N[i()] +
              '\\REG.exe QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid',
            linux:
              '( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :',
            freebsd: 'kenv -q smbios.system.uuid || sysctl -n kern.hostuuid',
          };
      },
      function (r, o, n) {
        r.exports = { default: n(36), __esModule: !0 };
      },
      function (r, o, n) {
        n(66), n(68), n(69), n(67), (r.exports = n(6).Promise);
      },
      function (r, o) {
        r.exports = function () {};
      },
      function (r, o) {
        r.exports = function (n, s, i, u) {
          if (!(n instanceof s) || (u !== void 0 && u in n))
            throw TypeError(i + ': incorrect invocation!');
          return n;
        };
      },
      function (r, o, n) {
        var s = n(13),
          i = n(31),
          u = n(62);
        r.exports = function (a) {
          return function (l, c, f) {
            var p,
              d = s(l),
              h = i(d.length),
              v = u(f, h);
            if (a && c != c) {
              for (; h > v; ) if (((p = d[v++]), p != p)) return !0;
            } else for (; h > v; v++) if ((a || v in d) && d[v] === c) return a || v || 0;
            return !a && -1;
          };
        };
      },
      function (r, d, n) {
        var s = n(7),
          i = n(44),
          u = n(43),
          a = n(3),
          l = n(31),
          c = n(64),
          f = {},
          p = {},
          d = (r.exports = function (h, v, C, N, x) {
            var I,
              y,
              w,
              E,
              b = x
                ? function () {
                    return h;
                  }
                : c(h),
              U = s(C, N, v ? 2 : 1),
              S = 0;
            if (typeof b != 'function') throw TypeError(h + ' is not iterable!');
            if (u(b)) {
              for (I = l(h.length); I > S; S++)
                if (((E = v ? U(a((y = h[S]))[0], y[1]) : U(h[S])), E === f || E === p)) return E;
            } else
              for (w = b.call(h); !(y = w.next()).done; )
                if (((E = i(w, U, y.value, v)), E === f || E === p)) return E;
          });
        (d.BREAK = f), (d.RETURN = p);
      },
      function (r, o) {
        r.exports = function (n, s, i) {
          var u = i === void 0;
          switch (s.length) {
            case 0:
              return u ? n() : n.call(i);
            case 1:
              return u ? n(s[0]) : n.call(i, s[0]);
            case 2:
              return u ? n(s[0], s[1]) : n.call(i, s[0], s[1]);
            case 3:
              return u ? n(s[0], s[1], s[2]) : n.call(i, s[0], s[1], s[2]);
            case 4:
              return u ? n(s[0], s[1], s[2], s[3]) : n.call(i, s[0], s[1], s[2], s[3]);
          }
          return n.apply(i, s);
        };
      },
      function (r, o, n) {
        var s = n(11);
        r.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function (i) {
              return s(i) == 'String' ? i.split('') : Object(i);
            };
      },
      function (r, o, n) {
        var s = n(10),
          i = n(1)('iterator'),
          u = Array.prototype;
        r.exports = function (a) {
          return a !== void 0 && (s.Array === a || u[i] === a);
        };
      },
      function (r, o, n) {
        var s = n(3);
        r.exports = function (i, u, a, l) {
          try {
            return l ? u(s(a)[0], a[1]) : u(a);
          } catch (f) {
            var c = i.return;
            throw (c !== void 0 && s(c.call(i)), f);
          }
        };
      },
      function (r, o, n) {
        'use strict';
        var s = n(49),
          i = n(17),
          u = n(18),
          a = {};
        n(5)(a, n(1)('iterator'), function () {
          return this;
        }),
          (r.exports = function (l, c, f) {
            (l.prototype = s(a, { next: i(1, f) })), u(l, c + ' Iterator');
          });
      },
      function (r, o, n) {
        var s = n(1)('iterator'),
          i = !1;
        try {
          var u = [7][s]();
          (u.return = function () {
            i = !0;
          }),
            Array.from(u, function () {
              throw 2;
            });
        } catch {}
        r.exports = function (a, l) {
          if (!l && !i) return !1;
          var c = !1;
          try {
            var f = [7],
              p = f[s]();
            (p.next = function () {
              return { done: (c = !0) };
            }),
              (f[s] = function () {
                return p;
              }),
              a(f);
          } catch {}
          return c;
        };
      },
      function (r, o) {
        r.exports = function (n, s) {
          return { value: s, done: !!n };
        };
      },
      function (r, o, n) {
        var s = n(2),
          i = n(30).set,
          u = s.MutationObserver || s.WebKitMutationObserver,
          a = s.process,
          l = s.Promise,
          c = n(11)(a) == 'process';
        r.exports = function () {
          var f,
            p,
            d,
            h = function () {
              var x, I;
              for (c && (x = a.domain) && x.exit(); f; ) {
                (I = f.fn), (f = f.next);
                try {
                  I();
                } catch (y) {
                  throw (f ? d() : (p = void 0), y);
                }
              }
              (p = void 0), x && x.enter();
            };
          if (c)
            d = function () {
              a.nextTick(h);
            };
          else if (u) {
            var v = !0,
              C = document.createTextNode('');
            new u(h).observe(C, { characterData: !0 }),
              (d = function () {
                C.data = v = !v;
              });
          } else if (l && l.resolve) {
            var N = l.resolve();
            d = function () {
              N.then(h);
            };
          } else
            d = function () {
              i.call(s, h);
            };
          return function (x) {
            var I = { fn: x, next: void 0 };
            p && (p.next = I), f || ((f = I), d()), (p = I);
          };
        };
      },
      function (r, o, n) {
        var s = n(3),
          i = n(50),
          u = n(22),
          a = n(19)('IE_PROTO'),
          l = function () {},
          c = 'prototype',
          f = function () {
            var p,
              d = n(16)('iframe'),
              h = u.length,
              v = '>';
            for (
              d.style.display = 'none',
                n(25).appendChild(d),
                d.src = 'javascript:',
                p = d.contentWindow.document,
                p.open(),
                p.write('<script>document.F=Object</script' + v),
                p.close(),
                f = p.F;
              h--;

            )
              delete f[c][u[h]];
            return f();
          };
        r.exports =
          Object.create ||
          function (p, d) {
            var h;
            return (
              p !== null ? ((l[c] = s(p)), (h = new l()), (l[c] = null), (h[a] = p)) : (h = f()),
              d === void 0 ? h : i(h, d)
            );
          };
      },
      function (r, o, n) {
        var s = n(12),
          i = n(3),
          u = n(54);
        r.exports = n(4)
          ? Object.defineProperties
          : function (a, l) {
              i(a);
              for (var c, f = u(l), p = f.length, d = 0; p > d; ) s.f(a, (c = f[d++]), l[c]);
              return a;
            };
      },
      function (r, o, n) {
        var s = n(55),
          i = n(17),
          u = n(13),
          a = n(32),
          l = n(8),
          c = n(26),
          f = Object.getOwnPropertyDescriptor;
        o.f = n(4)
          ? f
          : function (p, d) {
              if (((p = u(p)), (d = a(d, !0)), c))
                try {
                  return f(p, d);
                } catch {}
              if (l(p, d)) return i(!s.f.call(p, d), p[d]);
            };
      },
      function (r, o, n) {
        var s = n(8),
          i = n(63),
          u = n(19)('IE_PROTO'),
          a = Object.prototype;
        r.exports =
          Object.getPrototypeOf ||
          function (l) {
            return (
              (l = i(l)),
              s(l, u)
                ? l[u]
                : typeof l.constructor == 'function' && l instanceof l.constructor
                  ? l.constructor.prototype
                  : l instanceof Object
                    ? a
                    : null
            );
          };
      },
      function (r, o, n) {
        var s = n(8),
          i = n(13),
          u = n(39)(!1),
          a = n(19)('IE_PROTO');
        r.exports = function (l, c) {
          var f,
            p = i(l),
            d = 0,
            h = [];
          for (f in p) f != a && s(p, f) && h.push(f);
          for (; c.length > d; ) s(p, (f = c[d++])) && (~u(h, f) || h.push(f));
          return h;
        };
      },
      function (r, o, n) {
        var s = n(53),
          i = n(22);
        r.exports =
          Object.keys ||
          function (u) {
            return s(u, i);
          };
      },
      function (r, o) {
        o.f = {}.propertyIsEnumerable;
      },
      function (r, o, n) {
        var s = n(5);
        r.exports = function (i, u, a) {
          for (var l in u) a && i[l] ? (i[l] = u[l]) : s(i, l, u[l]);
          return i;
        };
      },
      function (r, o, n) {
        r.exports = n(5);
      },
      function (r, o, n) {
        var s = n(9),
          i = n(3),
          u = function (a, l) {
            if ((i(a), !s(l) && l !== null)) throw TypeError(l + ": can't set as prototype!");
          };
        r.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function (a, l, c) {
                  try {
                    (c = n(7)(Function.call, n(51).f(Object.prototype, '__proto__').set, 2)),
                      c(a, []),
                      (l = !(a instanceof Array));
                  } catch {
                    l = !0;
                  }
                  return function (f, p) {
                    return u(f, p), l ? (f.__proto__ = p) : c(f, p), f;
                  };
                })({}, !1)
              : void 0),
          check: u,
        };
      },
      function (r, o, n) {
        'use strict';
        var s = n(2),
          i = n(6),
          u = n(12),
          a = n(4),
          l = n(1)('species');
        r.exports = function (c) {
          var f = typeof i[c] == 'function' ? i[c] : s[c];
          a &&
            f &&
            !f[l] &&
            u.f(f, l, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (r, o, n) {
        var s = n(3),
          i = n(14),
          u = n(1)('species');
        r.exports = function (a, l) {
          var c,
            f = s(a).constructor;
          return f === void 0 || (c = s(f)[u]) == null ? l : i(c);
        };
      },
      function (r, o, n) {
        var s = n(20),
          i = n(15);
        r.exports = function (u) {
          return function (a, l) {
            var c,
              f,
              p = String(i(a)),
              d = s(l),
              h = p.length;
            return d < 0 || d >= h
              ? u
                ? ''
                : void 0
              : ((c = p.charCodeAt(d)),
                c < 55296 ||
                c > 56319 ||
                d + 1 === h ||
                (f = p.charCodeAt(d + 1)) < 56320 ||
                f > 57343
                  ? u
                    ? p.charAt(d)
                    : c
                  : u
                    ? p.slice(d, d + 2)
                    : ((c - 55296) << 10) + (f - 56320) + 65536);
          };
        };
      },
      function (r, o, n) {
        var s = n(20),
          i = Math.max,
          u = Math.min;
        r.exports = function (a, l) {
          return (a = s(a)), a < 0 ? i(a + l, 0) : u(a, l);
        };
      },
      function (r, o, n) {
        var s = n(15);
        r.exports = function (i) {
          return Object(s(i));
        };
      },
      function (r, o, n) {
        var s = n(21),
          i = n(1)('iterator'),
          u = n(10);
        r.exports = n(6).getIteratorMethod = function (a) {
          if (a != null) return a[i] || a['@@iterator'] || u[s(a)];
        };
      },
      function (r, o, n) {
        'use strict';
        var s = n(37),
          i = n(47),
          u = n(10),
          a = n(13);
        (r.exports = n(27)(
          Array,
          'Array',
          function (l, c) {
            (this._t = a(l)), (this._i = 0), (this._k = c);
          },
          function () {
            var l = this._t,
              c = this._k,
              f = this._i++;
            return !l || f >= l.length
              ? ((this._t = void 0), i(1))
              : c == 'keys'
                ? i(0, f)
                : c == 'values'
                  ? i(0, l[f])
                  : i(0, [f, l[f]]);
          },
          'values'
        )),
          (u.Arguments = u.Array),
          s('keys'),
          s('values'),
          s('entries');
      },
      function (r, o) {},
      function (r, o, n) {
        'use strict';
        var s,
          i,
          u,
          a = n(28),
          l = n(2),
          c = n(7),
          f = n(21),
          p = n(23),
          d = n(9),
          h = (n(3), n(14)),
          v = n(38),
          C = n(40),
          N = (n(58).set, n(60)),
          x = n(30).set,
          I = n(48)(),
          y = 'Promise',
          w = l.TypeError,
          b = l.process,
          E = l[y],
          b = l.process,
          U = f(b) == 'process',
          S = function () {},
          L = !!(function () {
            try {
              var m = E.resolve(1),
                _ = ((m.constructor = {})[n(1)('species')] = function (R) {
                  R(S, S);
                });
              return (U || typeof PromiseRejectionEvent == 'function') && m.then(S) instanceof _;
            } catch {}
          })(),
          K = function (m, _) {
            return m === _ || (m === E && _ === u);
          },
          V = function (m) {
            var _;
            return !(!d(m) || typeof (_ = m.then) != 'function') && _;
          },
          B = function (m) {
            return K(E, m) ? new z(m) : new i(m);
          },
          z = (i = function (m) {
            var _, R;
            (this.promise = new m(function (O, k) {
              if (_ !== void 0 || R !== void 0) throw w('Bad Promise constructor');
              (_ = O), (R = k);
            })),
              (this.resolve = h(_)),
              (this.reject = h(R));
          }),
          A = function (m) {
            try {
              m();
            } catch (_) {
              return { error: _ };
            }
          },
          J = function (m, _) {
            if (!m._n) {
              m._n = !0;
              var R = m._c;
              I(function () {
                for (
                  var O = m._v,
                    k = m._s == 1,
                    se = 0,
                    pe = function (ne) {
                      var ee,
                        Be,
                        ge = k ? ne.ok : ne.fail,
                        Te = ne.resolve,
                        de = ne.reject,
                        Pe = ne.domain;
                      try {
                        ge
                          ? (k || (m._h == 2 && q(m), (m._h = 1)),
                            ge === !0
                              ? (ee = O)
                              : (Pe && Pe.enter(), (ee = ge(O)), Pe && Pe.exit()),
                            ee === ne.promise
                              ? de(w('Promise-chain cycle'))
                              : (Be = V(ee))
                                ? Be.call(ee, Te, de)
                                : Te(ee))
                          : de(O);
                      } catch (Eo) {
                        de(Eo);
                      }
                    };
                  R.length > se;

                )
                  pe(R[se++]);
                (m._c = []), (m._n = !1), _ && !m._h && $(m);
              });
            }
          },
          $ = function (m) {
            x.call(l, function () {
              var _,
                R,
                O,
                k = m._v;
              if (
                (g(m) &&
                  ((_ = A(function () {
                    U
                      ? b.emit('unhandledRejection', k, m)
                      : (R = l.onunhandledrejection)
                        ? R({ promise: m, reason: k })
                        : (O = l.console) && O.error && O.error('Unhandled promise rejection', k);
                  })),
                  (m._h = U || g(m) ? 2 : 1)),
                (m._a = void 0),
                _)
              )
                throw _.error;
            });
          },
          g = function (m) {
            if (m._h == 1) return !1;
            for (var _, R = m._a || m._c, O = 0; R.length > O; )
              if (((_ = R[O++]), _.fail || !g(_.promise))) return !1;
            return !0;
          },
          q = function (m) {
            x.call(l, function () {
              var _;
              U
                ? b.emit('rejectionHandled', m)
                : (_ = l.onrejectionhandled) && _({ promise: m, reason: m._v });
            });
          },
          P = function (m) {
            var _ = this;
            _._d ||
              ((_._d = !0),
              (_ = _._w || _),
              (_._v = m),
              (_._s = 2),
              _._a || (_._a = _._c.slice()),
              J(_, !0));
          },
          Z = function (m) {
            var _,
              R = this;
            if (!R._d) {
              (R._d = !0), (R = R._w || R);
              try {
                if (R === m) throw w("Promise can't be resolved itself");
                (_ = V(m))
                  ? I(function () {
                      var O = { _w: R, _d: !1 };
                      try {
                        _.call(m, c(Z, O, 1), c(P, O, 1));
                      } catch (k) {
                        P.call(O, k);
                      }
                    })
                  : ((R._v = m), (R._s = 1), J(R, !1));
              } catch (O) {
                P.call({ _w: R, _d: !1 }, O);
              }
            }
          };
        L ||
          ((E = function (m) {
            v(this, E, y, '_h'), h(m), s.call(this);
            try {
              m(c(Z, this, 1), c(P, this, 1));
            } catch (_) {
              P.call(this, _);
            }
          }),
          (s = function (m) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }),
          (s.prototype = n(56)(E.prototype, {
            then: function (m, _) {
              var R = B(N(this, E));
              return (
                (R.ok = typeof m != 'function' || m),
                (R.fail = typeof _ == 'function' && _),
                (R.domain = U ? b.domain : void 0),
                this._c.push(R),
                this._a && this._a.push(R),
                this._s && J(this, !1),
                R.promise
              );
            },
            catch: function (m) {
              return this.then(void 0, m);
            },
          })),
          (z = function () {
            var m = new s();
            (this.promise = m), (this.resolve = c(Z, m, 1)), (this.reject = c(P, m, 1));
          })),
          p(p.G + p.W + p.F * !L, { Promise: E }),
          n(18)(E, y),
          n(59)(y),
          (u = n(6)[y]),
          p(p.S + p.F * !L, y, {
            reject: function (m) {
              var _ = B(this),
                R = _.reject;
              return R(m), _.promise;
            },
          }),
          p(p.S + p.F * (a || !L), y, {
            resolve: function (m) {
              if (m instanceof E && K(m.constructor, this)) return m;
              var _ = B(this),
                R = _.resolve;
              return R(m), _.promise;
            },
          }),
          p(
            p.S +
              p.F *
                !(
                  L &&
                  n(46)(function (m) {
                    E.all(m).catch(S);
                  })
                ),
            y,
            {
              all: function (m) {
                var _ = this,
                  R = B(_),
                  O = R.resolve,
                  k = R.reject,
                  se = A(function () {
                    var pe = [],
                      ne = 0,
                      ee = 1;
                    C(m, !1, function (Be) {
                      var ge = ne++,
                        Te = !1;
                      pe.push(void 0),
                        ee++,
                        _.resolve(Be).then(function (de) {
                          Te || ((Te = !0), (pe[ge] = de), --ee || O(pe));
                        }, k);
                    }),
                      --ee || O(pe);
                  });
                return se && k(se.error), R.promise;
              },
              race: function (m) {
                var _ = this,
                  R = B(_),
                  O = R.reject,
                  k = A(function () {
                    C(m, !1, function (se) {
                      _.resolve(se).then(R.resolve, O);
                    });
                  });
                return k && O(k.error), R.promise;
              },
            }
          );
      },
      function (r, o, n) {
        'use strict';
        var s = n(61)(!0);
        n(27)(
          String,
          'String',
          function (i) {
            (this._t = String(i)), (this._i = 0);
          },
          function () {
            var i,
              u = this._t,
              a = this._i;
            return a >= u.length
              ? { value: void 0, done: !0 }
              : ((i = s(u, a)), (this._i += i.length), { value: i, done: !1 });
          }
        );
      },
      function (r, o, n) {
        n(65);
        for (
          var s = n(2),
            i = n(5),
            u = n(10),
            a = n(1)('toStringTag'),
            l = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'],
            c = 0;
          c < 5;
          c++
        ) {
          var f = l[c],
            p = s[f],
            d = p && p.prototype;
          d && !d[a] && i(d, a, f), (u[f] = u.Array);
        }
      },
      function (r, o) {
        r.exports = require('child_process');
      },
      function (r, o) {
        r.exports = require('crypto');
      },
    ]);
  });
});
var lr = {};
De(lr, {
  configureLightClientRequire: () => So,
  configuredPaths: () => ct,
  lightClientRequire: () => re,
});
function So(e) {
  (ct = e),
    (re = function (t) {
      if (ct.length === 0)
        throw new Error(
          'Light client require must have paths configured with `configureLightClientRequire`.'
        );
      let r;
      try {
        r = require.resolve(t, { paths: e });
      } catch (o) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able to require.resolve module ${t} from the following paths: ${e}. This may be expected.`
            ),
          o)
        );
      }
      try {
        return require(r);
      } catch (o) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able require module ${t} from path ${r}. This may be expected. `
            ),
          o)
        );
      }
    });
}
var re,
  ct,
  Fe = te(() => {
    'use strict';
    ct = [];
  });
var he = T((ie) => {
  'use strict';
  Fe();
  try {
    try {
      let { output: e } = re('nx/src/utils/output'),
        t;
      try {
        t = re('nx/src/utils/app-root').workspaceRoot;
      } catch {
        t = re('nx/src/utils/workspace-root').workspaceRoot;
      }
      (ie.workspaceRoot = t), (ie.output = e);
    } catch {
      let { output: t } = re('@nrwl/workspace/src/utilities/output'),
        { appRootPath: r } = re('@nrwl/tao/src/utils/app-root');
      (ie.workspaceRoot = r), (ie.output = t);
    }
  } catch {
    let t = (r) => {
      var o;
      return `${r.title}

${
  (o = r.bodyLines) == null
    ? void 0
    : o.join(`
`)
}`;
    };
    (ie.output = {
      note: (r) => console.info(t(r)),
      error: (r) => console.error(t(r)),
      warn: (r) => console.warn(t(r)),
      success: (r) => console.log(t(r)),
      addVerticalSeparator: () => '',
      addNewline: () =>
        console.log(`
`),
    }),
      (ie.workspaceRoot = process.cwd());
  }
});
var Cr = {};
De(Cr, {
  ACCESS_TOKEN: () => Oe,
  DEFAULT_FILE_SIZE_LIMIT: () => qo,
  DISTRIBUTED_TASK_EXECUTION_INTERNAL_ERROR_STATUS_CODE: () => ko,
  ENCRYPTION_KEY: () => mr,
  NO_COMPLETED_TASKS_TIMEOUT: () => Do,
  NO_MESSAGES_TIMEOUT: () => Po,
  NUMBER_OF_AXIOS_RETRIES: () => xe,
  NX_CLOUD_CONTRIBUTOR_TESTING: () => _r,
  NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT: () => Go,
  NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE: () => Ho,
  NX_CLOUD_FORCE_METRICS: () => hr,
  NX_CLOUD_NO_TIMEOUTS: () => ke,
  NX_CLOUD_UNLIMITED_OUTPUT: () => Fo,
  NX_NO_CLOUD: () => jo,
  UNLIMITED_FILE_SIZE: () => Mo,
  UNLIMITED_TIMEOUT: () => pt,
  VERBOSE_LOGGING: () => M,
  agentRunningInDistributedExecution: () => Vo,
  extractGitRef: () => Xo,
  extractGitSha: () => me,
  getBranch: () => Er,
  getCIExecutionEnv: () => lt,
  getCIExecutionId: () => dt,
  getCiEnvVars: () => Zo,
  getMachineInfo: () => Yo,
  getRunGroup: () => zo,
  nxInvokedByRunner: () => $o,
  parseCommand: () => Jo,
});
function Vo(e) {
  return !!e;
}
function $o() {
  return process.env.NX_INVOKED_BY_RUNNER === 'true' || process.env.NX_CLOUD === 'false';
}
function me() {
  try {
    return (0, ft.execSync)('git rev-parse HEAD', { stdio: 'pipe' }).toString().trim();
  } catch {
    return;
  }
}
function Xo() {
  try {
    return (0, ft.execSync)('git rev-parse --symbolic-full-name HEAD', { stdio: 'pipe' })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function Ko() {
  try {
    let e = (0, dr.readFileSync)((0, qe.join)(Bo, 'nx-cloud.env'));
    return Ao.parse(e);
  } catch {
    return {};
  }
}
function Wo() {
  let e = Ko();
  (Oe =
    process.env.NX_CLOUD_AUTH_TOKEN ||
    process.env.NX_CLOUD_ACCESS_TOKEN ||
    e.NX_CLOUD_AUTH_TOKEN ||
    e.NX_CLOUD_ACCESS_TOKEN),
    (mr = process.env.NX_CLOUD_ENCRYPTION_KEY || e.NX_CLOUD_ENCRYPTION_KEY),
    (M = process.env.NX_VERBOSE_LOGGING === 'true' || e.NX_VERBOSE_LOGGING === 'true'),
    (ke = process.env.NX_CLOUD_NO_TIMEOUTS === 'true' || e.NX_CLOUD_NO_TIMEOUTS === 'true'),
    (_r =
      process.env.NX_CLOUD_CONTRIBUTOR_TESTING === 'true' ||
      e.NX_CLOUD_CONTRIBUTOR_TESTING === 'true');
}
function dt() {
  return vr();
}
function vr() {
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
function lt() {
  return process.env.NX_CI_EXECUTION_ENV ?? '';
}
function zo() {
  if (process.env.NX_RUN_GROUP !== void 0) return process.env.NX_RUN_GROUP;
  let e = vr();
  return e ? (lt() ? `${e}-${lt()}` : e) : me();
}
function Er() {
  if (process.env.NX_BRANCH !== void 0) return process.env.NX_BRANCH;
  if (process.env.CIRCLECI !== void 0) {
    if (process.env.CIRCLE_PR_NUMBER !== void 0) return process.env.CIRCLE_PR_NUMBER;
    if (process.env.CIRCLE_PULL_REQUEST !== void 0) {
      let e = process.env.CIRCLE_PULL_REQUEST.split('/');
      return e[e.length - 1];
    } else if (process.env.CIRCLE_BRANCH !== void 0) return process.env.CIRCLE_BRANCH;
  }
  if (process.env.TRAVIS_PULL_REQUEST !== void 0) return process.env.TRAVIS_PULL_REQUEST;
  if (process.env.GITHUB_ACTIONS) {
    if (process.env.GITHUB_REF) {
      let e = process.env.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
      if (e) return e[1];
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
function Yo() {
  let e = require('os'),
    t = (0, pr.createHash)('md5');
  return (
    t.update(Lo()),
    {
      machineId: t.digest('base64'),
      platform: e.platform(),
      version: e.version ? e.version() : '',
      cpuCores: e.cpus().length,
    }
  );
}
function Jo() {
  let e = (0, qe.parse)(process.argv[1]).name,
    t = `${process.argv.slice(2).join(' ')}`;
  return `${e} ${t}`;
}
function Zo(e) {
  let t = es(),
    r = {};
  return (
    e == 'auto'
      ? (r = t)
      : e &&
        e
          .split(',')
          .map((o) => o.trim())
          .forEach((o) => {
            t[o] && (r[o] = t[o]);
          }),
    Object.keys(t)
      .filter((o) => o.startsWith('NX_'))
      .forEach((o) => {
        r[o] = t[o];
      }),
    M &&
      (fr.note({ title: 'Environment variables passed to cloud:', bodyLines: Object.keys(r) }),
      fr.addNewline()),
    r
  );
}
function es() {
  let e = {};
  for (let t of Object.keys(process.env))
    t != null && !Qo.includes(t) && process.env[t] && (e[t] = process.env[t]);
  return e;
}
var ft,
  pr,
  dr,
  qe,
  Ao,
  Lo,
  fr,
  Bo,
  pt,
  Po,
  Do,
  Mo,
  Fo,
  qo,
  ko,
  Go,
  Ho,
  hr,
  xe,
  jo,
  Oe,
  mr,
  M,
  ke,
  _r,
  Qo,
  _e = te(() => {
    'use strict';
    (ft = require('child_process')),
      (pr = require('crypto')),
      (dr = require('fs')),
      (qe = require('path'));
    or();
    (Ao = ur()),
      ({ machineIdSync: Lo } = cr()),
      ({ output: fr, workspaceRoot: Bo } = he()),
      (pt = 9999999),
      (Po = process.env.NX_CLOUD_AGENT_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_AGENT_TIMEOUT_MS)
        : 36e5),
      (Do = process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS)
        : 36e5),
      (Mo = 1e3 * 1e3 * 1e4),
      (Fo = process.env.NX_CLOUD_UNLIMITED_OUTPUT === 'true'),
      (qo = 1e3 * 1e3 * 300),
      (ko = 166),
      (Go = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT
        ? Number(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT)
        : null),
      (Ho = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE != 'false'),
      (hr = process.env.NX_CLOUD_FORCE_METRICS === 'true'),
      (xe = process.env.NX_CLOUD_NUMBER_OF_RETRIES
        ? Number(process.env.NX_CLOUD_NUMBER_OF_RETRIES)
        : nr()
          ? 10
          : 1),
      (jo = process.env.NX_NO_CLOUD === 'true');
    Wo();
    Qo = [
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
var xr = T((pa, Ir) => {
  'use strict';
  var ht = Symbol('singleComment'),
    Tr = Symbol('multiComment'),
    ts = () => '',
    rs = (e, t, r) => e.slice(t, r).replace(/\S/g, ' '),
    ns = (e, t) => {
      let r = t - 1,
        o = 0;
      for (; e[r] === '\\'; ) (r -= 1), (o += 1);
      return !!(o % 2);
    };
  Ir.exports = (e, t = {}) => {
    if (typeof e != 'string')
      throw new TypeError(
        `Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``
      );
    let r = t.whitespace === !1 ? ts : rs,
      o = !1,
      n = !1,
      s = 0,
      i = '';
    for (let u = 0; u < e.length; u++) {
      let a = e[u],
        l = e[u + 1];
      if ((!n && a === '"' && (ns(e, u) || (o = !o)), !o)) {
        if (!n && a + l === '//') (i += e.slice(s, u)), (s = u), (n = ht), u++;
        else if (
          n === ht &&
          a + l ===
            `\r
`
        ) {
          u++, (n = !1), (i += r(e, s, u)), (s = u);
          continue;
        } else if (
          n === ht &&
          a ===
            `
`
        )
          (n = !1), (i += r(e, s, u)), (s = u);
        else if (!n && a + l === '/*') {
          (i += e.slice(s, u)), (s = u), (n = Tr), u++;
          continue;
        } else if (n === Tr && a + l === '*/') {
          u++, (n = !1), (i += r(e, s, u + 1)), (s = u + 1);
          continue;
        }
      }
    }
    return i + (n ? r(e.slice(s)) : e.slice(s));
  };
});
var Nr = {};
De(Nr, { getCloudOptions: () => is });
function is() {
  var o, n;
  let e = JSON.parse(os((0, Or.readFileSync)(`${ss}/nx.json`).toString())),
    t = {},
    r = [];
  for (let s in e.targetDefaults) e.targetDefaults[s].cache && r.push(s);
  return (
    e.nxCloudAccessToken && (t.accessToken ?? (t.accessToken = e.nxCloudAccessToken)),
    e.nxCloudUrl && (t.url ?? (t.url = e.nxCloudUrl)),
    e.nxCloudEncryptionKey && (t.encryptionKey = e.nxCloudEncryptionKey),
    e.parallel && (t.parallel ?? (t.parallel = e.parallel)),
    e.cacheDirectory && (t.cacheDirectory ?? (t.cacheDirectory = e.cacheDirectory)),
    r.length && (t.cacheableOperations ?? (t.cacheableOperations = r)),
    {
      nxJson: e,
      nxCloudOptions: {
        ...t,
        ...((n = (o = e.tasksRunnerOptions) == null ? void 0 : o.default) == null
          ? void 0
          : n.options),
      },
    }
  );
}
var Or,
  os,
  ss,
  Ur = te(() => {
    'use strict';
    (Or = require('fs')), (os = xr()), ({ workspaceRoot: ss } = he());
  });
function mt(e) {
  return new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
var wr = te(() => {
  'use strict';
});
var _t = T((ha, br) => {
  'use strict';
  br.exports = function (t, r) {
    return function () {
      for (var n = new Array(arguments.length), s = 0; s < n.length; s++) n[s] = arguments[s];
      return t.apply(r, n);
    };
  };
});
var H = T((ma, Lr) => {
  'use strict';
  var as = _t(),
    ae = Object.prototype.toString;
  function Ct(e) {
    return ae.call(e) === '[object Array]';
  }
  function vt(e) {
    return typeof e > 'u';
  }
  function us(e) {
    return (
      e !== null &&
      !vt(e) &&
      e.constructor !== null &&
      !vt(e.constructor) &&
      typeof e.constructor.isBuffer == 'function' &&
      e.constructor.isBuffer(e)
    );
  }
  function cs(e) {
    return ae.call(e) === '[object ArrayBuffer]';
  }
  function ls(e) {
    return typeof FormData < 'u' && e instanceof FormData;
  }
  function fs(e) {
    var t;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && e.buffer instanceof ArrayBuffer),
      t
    );
  }
  function ps(e) {
    return typeof e == 'string';
  }
  function ds(e) {
    return typeof e == 'number';
  }
  function Sr(e) {
    return e !== null && typeof e == 'object';
  }
  function Ge(e) {
    if (ae.call(e) !== '[object Object]') return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype;
  }
  function hs(e) {
    return ae.call(e) === '[object Date]';
  }
  function ms(e) {
    return ae.call(e) === '[object File]';
  }
  function _s(e) {
    return ae.call(e) === '[object Blob]';
  }
  function Ar(e) {
    return ae.call(e) === '[object Function]';
  }
  function vs(e) {
    return Sr(e) && Ar(e.pipe);
  }
  function Es(e) {
    return typeof URLSearchParams < 'u' && e instanceof URLSearchParams;
  }
  function Cs(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
  }
  function Rs() {
    return typeof navigator < 'u' &&
      (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  }
  function Rt(e, t) {
    if (!(e === null || typeof e > 'u'))
      if ((typeof e != 'object' && (e = [e]), Ct(e)))
        for (var r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
      else for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e);
  }
  function Et() {
    var e = {};
    function t(n, s) {
      Ge(e[s]) && Ge(n)
        ? (e[s] = Et(e[s], n))
        : Ge(n)
          ? (e[s] = Et({}, n))
          : Ct(n)
            ? (e[s] = n.slice())
            : (e[s] = n);
    }
    for (var r = 0, o = arguments.length; r < o; r++) Rt(arguments[r], t);
    return e;
  }
  function ys(e, t, r) {
    return (
      Rt(t, function (n, s) {
        r && typeof n == 'function' ? (e[s] = as(n, r)) : (e[s] = n);
      }),
      e
    );
  }
  function gs(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
  }
  Lr.exports = {
    isArray: Ct,
    isArrayBuffer: cs,
    isBuffer: us,
    isFormData: ls,
    isArrayBufferView: fs,
    isString: ps,
    isNumber: ds,
    isObject: Sr,
    isPlainObject: Ge,
    isUndefined: vt,
    isDate: hs,
    isFile: ms,
    isBlob: _s,
    isFunction: Ar,
    isStream: vs,
    isURLSearchParams: Es,
    isStandardBrowserEnv: Rs,
    forEach: Rt,
    merge: Et,
    extend: ys,
    trim: Cs,
    stripBOM: gs,
  };
});
var He = T((_a, Pr) => {
  'use strict';
  var ve = H();
  function Br(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  Pr.exports = function (t, r, o) {
    if (!r) return t;
    var n;
    if (o) n = o(r);
    else if (ve.isURLSearchParams(r)) n = r.toString();
    else {
      var s = [];
      ve.forEach(r, function (a, l) {
        a === null ||
          typeof a > 'u' ||
          (ve.isArray(a) ? (l = l + '[]') : (a = [a]),
          ve.forEach(a, function (f) {
            ve.isDate(f) ? (f = f.toISOString()) : ve.isObject(f) && (f = JSON.stringify(f)),
              s.push(Br(l) + '=' + Br(f));
          }));
      }),
        (n = s.join('&'));
    }
    if (n) {
      var i = t.indexOf('#');
      i !== -1 && (t = t.slice(0, i)), (t += (t.indexOf('?') === -1 ? '?' : '&') + n);
    }
    return t;
  };
});
var Mr = T((va, Dr) => {
  'use strict';
  var Ts = H();
  function je() {
    this.handlers = [];
  }
  je.prototype.use = function (t, r, o) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  je.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null);
  };
  je.prototype.forEach = function (t) {
    Ts.forEach(this.handlers, function (o) {
      o !== null && t(o);
    });
  };
  Dr.exports = je;
});
var qr = T((Ea, Fr) => {
  'use strict';
  var Is = H();
  Fr.exports = function (t, r) {
    Is.forEach(t, function (n, s) {
      s !== r && s.toUpperCase() === r.toUpperCase() && ((t[r] = n), delete t[s]);
    });
  };
});
var Ve = T((Ca, kr) => {
  'use strict';
  kr.exports = function (t, r, o, n, s) {
    return (
      (t.config = r),
      o && (t.code = o),
      (t.request = n),
      (t.response = s),
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
});
var $e = T((Ra, Gr) => {
  'use strict';
  var xs = Ve();
  Gr.exports = function (t, r, o, n, s) {
    var i = new Error(t);
    return xs(i, r, o, n, s);
  };
});
var yt = T((ya, Hr) => {
  'use strict';
  var Os = $e();
  Hr.exports = function (t, r, o) {
    var n = o.config.validateStatus;
    !o.status || !n || n(o.status)
      ? t(o)
      : r(Os('Request failed with status code ' + o.status, o.config, null, o.request, o));
  };
});
var Vr = T((ga, jr) => {
  'use strict';
  var Xe = H();
  jr.exports = Xe.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (r, o, n, s, i, u) {
            var a = [];
            a.push(r + '=' + encodeURIComponent(o)),
              Xe.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
              Xe.isString(s) && a.push('path=' + s),
              Xe.isString(i) && a.push('domain=' + i),
              u === !0 && a.push('secure'),
              (document.cookie = a.join('; '));
          },
          read: function (r) {
            var o = document.cookie.match(new RegExp('(^|;\\s*)(' + r + ')=([^;]*)'));
            return o ? decodeURIComponent(o[3]) : null;
          },
          remove: function (r) {
            this.write(r, '', Date.now() - 864e5);
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
var Xr = T((Ta, $r) => {
  'use strict';
  $r.exports = function (t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
  };
});
var Wr = T((Ia, Kr) => {
  'use strict';
  Kr.exports = function (t, r) {
    return r ? t.replace(/\/+$/, '') + '/' + r.replace(/^\/+/, '') : t;
  };
});
var gt = T((xa, zr) => {
  'use strict';
  var Ns = Xr(),
    Us = Wr();
  zr.exports = function (t, r) {
    return t && !Ns(r) ? Us(t, r) : r;
  };
});
var Jr = T((Oa, Yr) => {
  'use strict';
  var Tt = H(),
    ws = [
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
  Yr.exports = function (t) {
    var r = {},
      o,
      n,
      s;
    return (
      t &&
        Tt.forEach(
          t.split(`
`),
          function (u) {
            if (
              ((s = u.indexOf(':')),
              (o = Tt.trim(u.substr(0, s)).toLowerCase()),
              (n = Tt.trim(u.substr(s + 1))),
              o)
            ) {
              if (r[o] && ws.indexOf(o) >= 0) return;
              o === 'set-cookie'
                ? (r[o] = (r[o] ? r[o] : []).concat([n]))
                : (r[o] = r[o] ? r[o] + ', ' + n : n);
            }
          }
        ),
      r
    );
  };
});
var en = T((Na, Zr) => {
  'use strict';
  var Qr = H();
  Zr.exports = Qr.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement('a'),
          o;
        function n(s) {
          var i = s;
          return (
            t && (r.setAttribute('href', i), (i = r.href)),
            r.setAttribute('href', i),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, '') : '',
              hash: r.hash ? r.hash.replace(/^#/, '') : '',
              hostname: r.hostname,
              port: r.port,
              pathname: r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname,
            }
          );
        }
        return (
          (o = n(window.location.href)),
          function (i) {
            var u = Qr.isString(i) ? n(i) : i;
            return u.protocol === o.protocol && u.host === o.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var rn = T((Ua, tn) => {
  'use strict';
  var Ke = H(),
    bs = yt(),
    Ss = Vr(),
    As = He(),
    Ls = gt(),
    Bs = Jr(),
    Ps = en(),
    It = $e();
  tn.exports = function (t) {
    return new Promise(function (o, n) {
      var s = t.data,
        i = t.headers,
        u = t.responseType;
      Ke.isFormData(s) && delete i['Content-Type'];
      var a = new XMLHttpRequest();
      if (t.auth) {
        var l = t.auth.username || '',
          c = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : '';
        i.Authorization = 'Basic ' + btoa(l + ':' + c);
      }
      var f = Ls(t.baseURL, t.url);
      a.open(t.method.toUpperCase(), As(f, t.params, t.paramsSerializer), !0),
        (a.timeout = t.timeout);
      function p() {
        if (a) {
          var h = 'getAllResponseHeaders' in a ? Bs(a.getAllResponseHeaders()) : null,
            v = !u || u === 'text' || u === 'json' ? a.responseText : a.response,
            C = {
              data: v,
              status: a.status,
              statusText: a.statusText,
              headers: h,
              config: t,
              request: a,
            };
          bs(o, n, C), (a = null);
        }
      }
      if (
        ('onloadend' in a
          ? (a.onloadend = p)
          : (a.onreadystatechange = function () {
              !a ||
                a.readyState !== 4 ||
                (a.status === 0 && !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                setTimeout(p);
            }),
        (a.onabort = function () {
          a && (n(It('Request aborted', t, 'ECONNABORTED', a)), (a = null));
        }),
        (a.onerror = function () {
          n(It('Network Error', t, null, a)), (a = null);
        }),
        (a.ontimeout = function () {
          var v = 'timeout of ' + t.timeout + 'ms exceeded';
          t.timeoutErrorMessage && (v = t.timeoutErrorMessage),
            n(
              It(
                v,
                t,
                t.transitional && t.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                a
              )
            ),
            (a = null);
        }),
        Ke.isStandardBrowserEnv())
      ) {
        var d =
          (t.withCredentials || Ps(f)) && t.xsrfCookieName ? Ss.read(t.xsrfCookieName) : void 0;
        d && (i[t.xsrfHeaderName] = d);
      }
      'setRequestHeader' in a &&
        Ke.forEach(i, function (v, C) {
          typeof s > 'u' && C.toLowerCase() === 'content-type'
            ? delete i[C]
            : a.setRequestHeader(C, v);
        }),
        Ke.isUndefined(t.withCredentials) || (a.withCredentials = !!t.withCredentials),
        u && u !== 'json' && (a.responseType = t.responseType),
        typeof t.onDownloadProgress == 'function' &&
          a.addEventListener('progress', t.onDownloadProgress),
        typeof t.onUploadProgress == 'function' &&
          a.upload &&
          a.upload.addEventListener('progress', t.onUploadProgress),
        t.cancelToken &&
          t.cancelToken.promise.then(function (v) {
            a && (a.abort(), n(v), (a = null));
          }),
        s || (s = null),
        a.send(s);
    });
  };
});
var on = T((wa, nn) => {
  'use strict';
  var Ee = 1e3,
    Ce = Ee * 60,
    Re = Ce * 60,
    ue = Re * 24,
    Ds = ue * 7,
    Ms = ue * 365.25;
  nn.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === 'string' && e.length > 0) return Fs(e);
    if (r === 'number' && isFinite(e)) return t.long ? ks(e) : qs(e);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e));
  };
  function Fs(e) {
    if (((e = String(e)), !(e.length > 100))) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          e
        );
      if (t) {
        var r = parseFloat(t[1]),
          o = (t[2] || 'ms').toLowerCase();
        switch (o) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return r * Ms;
          case 'weeks':
          case 'week':
          case 'w':
            return r * Ds;
          case 'days':
          case 'day':
          case 'd':
            return r * ue;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return r * Re;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return r * Ce;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return r * Ee;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return r;
          default:
            return;
        }
      }
    }
  }
  function qs(e) {
    var t = Math.abs(e);
    return t >= ue
      ? Math.round(e / ue) + 'd'
      : t >= Re
        ? Math.round(e / Re) + 'h'
        : t >= Ce
          ? Math.round(e / Ce) + 'm'
          : t >= Ee
            ? Math.round(e / Ee) + 's'
            : e + 'ms';
  }
  function ks(e) {
    var t = Math.abs(e);
    return t >= ue
      ? We(e, t, ue, 'day')
      : t >= Re
        ? We(e, t, Re, 'hour')
        : t >= Ce
          ? We(e, t, Ce, 'minute')
          : t >= Ee
            ? We(e, t, Ee, 'second')
            : e + ' ms';
  }
  function We(e, t, r, o) {
    var n = t >= r * 1.5;
    return Math.round(e / r) + ' ' + o + (n ? 's' : '');
  }
});
var xt = T((ba, sn) => {
  'use strict';
  function Gs(e) {
    (r.debug = r),
      (r.default = r),
      (r.coerce = a),
      (r.disable = s),
      (r.enable = n),
      (r.enabled = i),
      (r.humanize = on()),
      (r.destroy = l),
      Object.keys(e).forEach((c) => {
        r[c] = e[c];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {});
    function t(c) {
      let f = 0;
      for (let p = 0; p < c.length; p++) (f = (f << 5) - f + c.charCodeAt(p)), (f |= 0);
      return r.colors[Math.abs(f) % r.colors.length];
    }
    r.selectColor = t;
    function r(c) {
      let f,
        p = null,
        d,
        h;
      function v(...C) {
        if (!v.enabled) return;
        let N = v,
          x = Number(new Date()),
          I = x - (f || x);
        (N.diff = I),
          (N.prev = f),
          (N.curr = x),
          (f = x),
          (C[0] = r.coerce(C[0])),
          typeof C[0] != 'string' && C.unshift('%O');
        let y = 0;
        (C[0] = C[0].replace(/%([a-zA-Z%])/g, (E, b) => {
          if (E === '%%') return '%';
          y++;
          let U = r.formatters[b];
          if (typeof U == 'function') {
            let S = C[y];
            (E = U.call(N, S)), C.splice(y, 1), y--;
          }
          return E;
        })),
          r.formatArgs.call(N, C),
          (N.log || r.log).apply(N, C);
      }
      return (
        (v.namespace = c),
        (v.useColors = r.useColors()),
        (v.color = r.selectColor(c)),
        (v.extend = o),
        (v.destroy = r.destroy),
        Object.defineProperty(v, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            p !== null ? p : (d !== r.namespaces && ((d = r.namespaces), (h = r.enabled(c))), h),
          set: (C) => {
            p = C;
          },
        }),
        typeof r.init == 'function' && r.init(v),
        v
      );
    }
    function o(c, f) {
      let p = r(this.namespace + (typeof f > 'u' ? ':' : f) + c);
      return (p.log = this.log), p;
    }
    function n(c) {
      r.save(c), (r.namespaces = c), (r.names = []), (r.skips = []);
      let f,
        p = (typeof c == 'string' ? c : '').split(/[\s,]+/),
        d = p.length;
      for (f = 0; f < d; f++)
        p[f] &&
          ((c = p[f].replace(/\*/g, '.*?')),
          c[0] === '-'
            ? r.skips.push(new RegExp('^' + c.slice(1) + '$'))
            : r.names.push(new RegExp('^' + c + '$')));
    }
    function s() {
      let c = [...r.names.map(u), ...r.skips.map(u).map((f) => '-' + f)].join(',');
      return r.enable(''), c;
    }
    function i(c) {
      if (c[c.length - 1] === '*') return !0;
      let f, p;
      for (f = 0, p = r.skips.length; f < p; f++) if (r.skips[f].test(c)) return !1;
      for (f = 0, p = r.names.length; f < p; f++) if (r.names[f].test(c)) return !0;
      return !1;
    }
    function u(c) {
      return c
        .toString()
        .substring(2, c.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function a(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function l() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
      );
    }
    return r.enable(r.load()), r;
  }
  sn.exports = Gs;
});
var an = T((W, ze) => {
  'use strict';
  W.formatArgs = js;
  W.save = Vs;
  W.load = $s;
  W.useColors = Hs;
  W.storage = Xs();
  W.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        ((e = !0),
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        ));
    };
  })();
  W.colors = [
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
  function Hs() {
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
  function js(e) {
    if (
      ((e[0] =
        (this.useColors ? '%c' : '') +
        this.namespace +
        (this.useColors ? ' %c' : ' ') +
        e[0] +
        (this.useColors ? '%c ' : ' ') +
        '+' +
        ze.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let t = 'color: ' + this.color;
    e.splice(1, 0, t, 'color: inherit');
    let r = 0,
      o = 0;
    e[0].replace(/%[a-zA-Z%]/g, (n) => {
      n !== '%%' && (r++, n === '%c' && (o = r));
    }),
      e.splice(o, 0, t);
  }
  W.log = console.debug || console.log || (() => {});
  function Vs(e) {
    try {
      e ? W.storage.setItem('debug', e) : W.storage.removeItem('debug');
    } catch {}
  }
  function $s() {
    let e;
    try {
      e = W.storage.getItem('debug');
    } catch {}
    return !e && typeof process < 'u' && 'env' in process && (e = process.env.DEBUG), e;
  }
  function Xs() {
    try {
      return localStorage;
    } catch {}
  }
  ze.exports = xt()(W);
  var { formatters: Ks } = ze.exports;
  Ks.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return '[UnexpectedJSONParseError]: ' + t.message;
    }
  };
});
var cn = T((Sa, un) => {
  'use strict';
  un.exports = (e, t = process.argv) => {
    let r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--',
      o = t.indexOf(r + e),
      n = t.indexOf('--');
    return o !== -1 && (n === -1 || o < n);
  };
});
var pn = T((Aa, fn) => {
  'use strict';
  var Ws = require('os'),
    ln = require('tty'),
    Y = cn(),
    { env: D } = process,
    oe;
  Y('no-color') || Y('no-colors') || Y('color=false') || Y('color=never')
    ? (oe = 0)
    : (Y('color') || Y('colors') || Y('color=true') || Y('color=always')) && (oe = 1);
  'FORCE_COLOR' in D &&
    (D.FORCE_COLOR === 'true'
      ? (oe = 1)
      : D.FORCE_COLOR === 'false'
        ? (oe = 0)
        : (oe = D.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(D.FORCE_COLOR, 10), 3)));
  function Ot(e) {
    return e === 0 ? !1 : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
  }
  function Nt(e, t) {
    if (oe === 0) return 0;
    if (Y('color=16m') || Y('color=full') || Y('color=truecolor')) return 3;
    if (Y('color=256')) return 2;
    if (e && !t && oe === void 0) return 0;
    let r = oe || 0;
    if (D.TERM === 'dumb') return r;
    if (process.platform === 'win32') {
      let o = Ws.release().split('.');
      return Number(o[0]) >= 10 && Number(o[2]) >= 10586 ? (Number(o[2]) >= 14931 ? 3 : 2) : 1;
    }
    if ('CI' in D)
      return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(
        (o) => o in D
      ) || D.CI_NAME === 'codeship'
        ? 1
        : r;
    if ('TEAMCITY_VERSION' in D)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(D.TEAMCITY_VERSION) ? 1 : 0;
    if (D.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in D) {
      let o = parseInt((D.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (D.TERM_PROGRAM) {
        case 'iTerm.app':
          return o >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    return /-256(color)?$/i.test(D.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(D.TERM) ||
          'COLORTERM' in D
        ? 1
        : r;
  }
  function zs(e) {
    let t = Nt(e, e && e.isTTY);
    return Ot(t);
  }
  fn.exports = {
    supportsColor: zs,
    stdout: Ot(Nt(!0, ln.isatty(1))),
    stderr: Ot(Nt(!0, ln.isatty(2))),
  };
});
var hn = T((F, Je) => {
  'use strict';
  var Ys = require('tty'),
    Ye = require('util');
  F.init = ni;
  F.log = ei;
  F.formatArgs = Qs;
  F.save = ti;
  F.load = ri;
  F.useColors = Js;
  F.destroy = Ye.deprecate(
    () => {},
    'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
  );
  F.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = pn();
    e &&
      (e.stderr || e).level >= 2 &&
      (F.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76,
        77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162,
        163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198,
        199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch {}
  F.inspectOpts = Object.keys(process.env)
    .filter((e) => /^debug_/i.test(e))
    .reduce((e, t) => {
      let r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (n, s) => s.toUpperCase()),
        o = process.env[t];
      return (
        /^(yes|on|true|enabled)$/i.test(o)
          ? (o = !0)
          : /^(no|off|false|disabled)$/i.test(o)
            ? (o = !1)
            : o === 'null'
              ? (o = null)
              : (o = Number(o)),
        (e[r] = o),
        e
      );
    }, {});
  function Js() {
    return 'colors' in F.inspectOpts ? !!F.inspectOpts.colors : Ys.isatty(process.stderr.fd);
  }
  function Qs(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let o = this.color,
        n = '\x1B[3' + (o < 8 ? o : '8;5;' + o),
        s = `  ${n};1m${t} \x1B[0m`;
      (e[0] =
        s +
        e[0]
          .split(
            `
`
          )
          .join(
            `
` + s
          )),
        e.push(n + 'm+' + Je.exports.humanize(this.diff) + '\x1B[0m');
    } else e[0] = Zs() + t + ' ' + e[0];
  }
  function Zs() {
    return F.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
  }
  function ei(...e) {
    return process.stderr.write(
      Ye.format(...e) +
        `
`
    );
  }
  function ti(e) {
    e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
  }
  function ri() {
    return process.env.DEBUG;
  }
  function ni(e) {
    e.inspectOpts = {};
    let t = Object.keys(F.inspectOpts);
    for (let r = 0; r < t.length; r++) e.inspectOpts[t[r]] = F.inspectOpts[t[r]];
  }
  Je.exports = xt()(F);
  var { formatters: dn } = Je.exports;
  dn.o = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      Ye.inspect(e, this.inspectOpts)
        .split(
          `
`
        )
        .map((t) => t.trim())
        .join(' ')
    );
  };
  dn.O = function (e) {
    return (this.inspectOpts.colors = this.useColors), Ye.inspect(e, this.inspectOpts);
  };
});
var mn = T((La, Ut) => {
  'use strict';
  typeof process > 'u' || process.type === 'renderer' || process.browser === !0 || process.__nwjs
    ? (Ut.exports = an())
    : (Ut.exports = hn());
});
var vn = T((Ba, _n) => {
  'use strict';
  var Ne;
  _n.exports = function () {
    if (!Ne) {
      try {
        Ne = mn()('follow-redirects');
      } catch {}
      typeof Ne != 'function' && (Ne = function () {});
    }
    Ne.apply(null, arguments);
  };
});
var Dt = T((Pa, Pt) => {
  'use strict';
  var ce = require('url'),
    wt = ce.URL,
    oi = require('http'),
    si = require('https'),
    St = require('stream').Writable,
    Rn = require('assert'),
    yn = vn(),
    At = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'],
    Lt = Object.create(null);
  At.forEach(function (e) {
    Lt[e] = function (t, r, o) {
      this._redirectable.emit(e, t, r, o);
    };
  });
  var ii = we('ERR_INVALID_URL', 'Invalid URL', TypeError),
    En = we('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed'),
    ai = we('ERR_FR_TOO_MANY_REDIRECTS', 'Maximum number of redirects exceeded'),
    ui = we('ERR_FR_MAX_BODY_LENGTH_EXCEEDED', 'Request body larger than maxBodyLength limit'),
    ci = we('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    li = St.prototype.destroy || Tn;
  function X(e, t) {
    St.call(this),
      this._sanitizeOptions(e),
      (this._options = e),
      (this._ended = !1),
      (this._ending = !1),
      (this._redirectCount = 0),
      (this._redirects = []),
      (this._requestBodyLength = 0),
      (this._requestBodyBuffers = []),
      t && this.on('response', t);
    var r = this;
    (this._onNativeResponse = function (o) {
      r._processResponse(o);
    }),
      this._performRequest();
  }
  X.prototype = Object.create(St.prototype);
  X.prototype.abort = function () {
    Bt(this._currentRequest), this._currentRequest.abort(), this.emit('abort');
  };
  X.prototype.destroy = function (e) {
    return Bt(this._currentRequest, e), li.call(this, e), this;
  };
  X.prototype.write = function (e, t, r) {
    if (this._ending) throw new ci();
    if (!le(e) && !pi(e)) throw new TypeError('data should be a string, Buffer or Uint8Array');
    if ((Ue(t) && ((r = t), (t = null)), e.length === 0)) {
      r && r();
      return;
    }
    this._requestBodyLength + e.length <= this._options.maxBodyLength
      ? ((this._requestBodyLength += e.length),
        this._requestBodyBuffers.push({ data: e, encoding: t }),
        this._currentRequest.write(e, t, r))
      : (this.emit('error', new ui()), this.abort());
  };
  X.prototype.end = function (e, t, r) {
    if ((Ue(e) ? ((r = e), (e = t = null)) : Ue(t) && ((r = t), (t = null)), !e))
      (this._ended = this._ending = !0), this._currentRequest.end(null, null, r);
    else {
      var o = this,
        n = this._currentRequest;
      this.write(e, t, function () {
        (o._ended = !0), n.end(null, null, r);
      }),
        (this._ending = !0);
    }
  };
  X.prototype.setHeader = function (e, t) {
    (this._options.headers[e] = t), this._currentRequest.setHeader(e, t);
  };
  X.prototype.removeHeader = function (e) {
    delete this._options.headers[e], this._currentRequest.removeHeader(e);
  };
  X.prototype.setTimeout = function (e, t) {
    var r = this;
    function o(i) {
      i.setTimeout(e), i.removeListener('timeout', i.destroy), i.addListener('timeout', i.destroy);
    }
    function n(i) {
      r._timeout && clearTimeout(r._timeout),
        (r._timeout = setTimeout(function () {
          r.emit('timeout'), s();
        }, e)),
        o(i);
    }
    function s() {
      r._timeout && (clearTimeout(r._timeout), (r._timeout = null)),
        r.removeListener('abort', s),
        r.removeListener('error', s),
        r.removeListener('response', s),
        r.removeListener('close', s),
        t && r.removeListener('timeout', t),
        r.socket || r._currentRequest.removeListener('socket', n);
    }
    return (
      t && this.on('timeout', t),
      this.socket ? n(this.socket) : this._currentRequest.once('socket', n),
      this.on('socket', o),
      this.on('abort', s),
      this.on('error', s),
      this.on('response', s),
      this.on('close', s),
      this
    );
  };
  ['flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive'].forEach(function (e) {
    X.prototype[e] = function (t, r) {
      return this._currentRequest[e](t, r);
    };
  });
  ['aborted', 'connection', 'socket'].forEach(function (e) {
    Object.defineProperty(X.prototype, e, {
      get: function () {
        return this._currentRequest[e];
      },
    });
  });
  X.prototype._sanitizeOptions = function (e) {
    if (
      (e.headers || (e.headers = {}),
      e.host && (e.hostname || (e.hostname = e.host), delete e.host),
      !e.pathname && e.path)
    ) {
      var t = e.path.indexOf('?');
      t < 0
        ? (e.pathname = e.path)
        : ((e.pathname = e.path.substring(0, t)), (e.search = e.path.substring(t)));
    }
  };
  X.prototype._performRequest = function () {
    var e = this._options.protocol,
      t = this._options.nativeProtocols[e];
    if (!t) {
      this.emit('error', new TypeError('Unsupported protocol ' + e));
      return;
    }
    if (this._options.agents) {
      var r = e.slice(0, -1);
      this._options.agent = this._options.agents[r];
    }
    var o = (this._currentRequest = t.request(this._options, this._onNativeResponse));
    o._redirectable = this;
    for (var n of At) o.on(n, Lt[n]);
    if (
      ((this._currentUrl = /^\//.test(this._options.path)
        ? ce.format(this._options)
        : this._options.path),
      this._isRedirect)
    ) {
      var s = 0,
        i = this,
        u = this._requestBodyBuffers;
      (function a(l) {
        if (o === i._currentRequest)
          if (l) i.emit('error', l);
          else if (s < u.length) {
            var c = u[s++];
            o.finished || o.write(c.data, c.encoding, a);
          } else i._ended && o.end();
      })();
    }
  };
  X.prototype._processResponse = function (e) {
    var t = e.statusCode;
    this._options.trackRedirects &&
      this._redirects.push({ url: this._currentUrl, headers: e.headers, statusCode: t });
    var r = e.headers.location;
    if (!r || this._options.followRedirects === !1 || t < 300 || t >= 400) {
      (e.responseUrl = this._currentUrl),
        (e.redirects = this._redirects),
        this.emit('response', e),
        (this._requestBodyBuffers = []);
      return;
    }
    if (
      (Bt(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects)
    ) {
      this.emit('error', new ai());
      return;
    }
    var o,
      n = this._options.beforeRedirect;
    n && (o = Object.assign({ Host: e.req.getHeader('host') }, this._options.headers));
    var s = this._options.method;
    (((t === 301 || t === 302) && this._options.method === 'POST') ||
      (t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
      ((this._options.method = 'GET'),
      (this._requestBodyBuffers = []),
      bt(/^content-/i, this._options.headers));
    var i = bt(/^host$/i, this._options.headers),
      u = ce.parse(this._currentUrl),
      a = i || u.host,
      l = /^\w+:/.test(r) ? this._currentUrl : ce.format(Object.assign(u, { host: a })),
      c;
    try {
      c = ce.resolve(l, r);
    } catch (h) {
      this.emit('error', new En({ cause: h }));
      return;
    }
    yn('redirecting to', c), (this._isRedirect = !0);
    var f = ce.parse(c);
    if (
      (Object.assign(this._options, f),
      ((f.protocol !== u.protocol && f.protocol !== 'https:') ||
        (f.host !== a && !fi(f.host, a))) &&
        bt(/^(?:authorization|cookie)$/i, this._options.headers),
      Ue(n))
    ) {
      var p = { headers: e.headers, statusCode: t },
        d = { url: l, method: s, headers: o };
      try {
        n(this._options, p, d);
      } catch (h) {
        this.emit('error', h);
        return;
      }
      this._sanitizeOptions(this._options);
    }
    try {
      this._performRequest();
    } catch (h) {
      this.emit('error', new En({ cause: h }));
    }
  };
  function gn(e) {
    var t = { maxRedirects: 21, maxBodyLength: 10485760 },
      r = {};
    return (
      Object.keys(e).forEach(function (o) {
        var n = o + ':',
          s = (r[n] = e[o]),
          i = (t[o] = Object.create(s));
        function u(l, c, f) {
          if (le(l)) {
            var p;
            try {
              p = Cn(new wt(l));
            } catch {
              p = ce.parse(l);
            }
            if (!le(p.protocol)) throw new ii({ input: l });
            l = p;
          } else wt && l instanceof wt ? (l = Cn(l)) : ((f = c), (c = l), (l = { protocol: n }));
          return (
            Ue(c) && ((f = c), (c = null)),
            (c = Object.assign(
              { maxRedirects: t.maxRedirects, maxBodyLength: t.maxBodyLength },
              l,
              c
            )),
            (c.nativeProtocols = r),
            !le(c.host) && !le(c.hostname) && (c.hostname = '::1'),
            Rn.equal(c.protocol, n, 'protocol mismatch'),
            yn('options', c),
            new X(c, f)
          );
        }
        function a(l, c, f) {
          var p = i.request(l, c, f);
          return p.end(), p;
        }
        Object.defineProperties(i, {
          request: { value: u, configurable: !0, enumerable: !0, writable: !0 },
          get: { value: a, configurable: !0, enumerable: !0, writable: !0 },
        });
      }),
      t
    );
  }
  function Tn() {}
  function Cn(e) {
    var t = {
      protocol: e.protocol,
      hostname: e.hostname.startsWith('[') ? e.hostname.slice(1, -1) : e.hostname,
      hash: e.hash,
      search: e.search,
      pathname: e.pathname,
      path: e.pathname + e.search,
      href: e.href,
    };
    return e.port !== '' && (t.port = Number(e.port)), t;
  }
  function bt(e, t) {
    var r;
    for (var o in t) e.test(o) && ((r = t[o]), delete t[o]);
    return r === null || typeof r > 'u' ? void 0 : String(r).trim();
  }
  function we(e, t, r) {
    function o(n) {
      Error.captureStackTrace(this, this.constructor),
        Object.assign(this, n || {}),
        (this.code = e),
        (this.message = this.cause ? t + ': ' + this.cause.message : t);
    }
    return (
      (o.prototype = new (r || Error)()),
      (o.prototype.constructor = o),
      (o.prototype.name = 'Error [' + e + ']'),
      o
    );
  }
  function Bt(e, t) {
    for (var r of At) e.removeListener(r, Lt[r]);
    e.on('error', Tn), e.destroy(t);
  }
  function fi(e, t) {
    Rn(le(e) && le(t));
    var r = e.length - t.length - 1;
    return r > 0 && e[r] === '.' && e.endsWith(t);
  }
  function le(e) {
    return typeof e == 'string' || e instanceof String;
  }
  function Ue(e) {
    return typeof e == 'function';
  }
  function pi(e) {
    return typeof e == 'object' && 'length' in e;
  }
  Pt.exports = gn({ http: oi, https: si });
  Pt.exports.wrap = gn;
});
var Mt = T((Da, di) => {
  di.exports = {
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
var wn = T((Ma, Un) => {
  'use strict';
  var be = H(),
    In = yt(),
    hi = gt(),
    mi = He(),
    _i = require('http'),
    vi = require('https'),
    Ei = Dt().http,
    Ci = Dt().https,
    xn = require('url'),
    Ri = require('zlib'),
    yi = Mt(),
    Qe = $e(),
    Ft = Ve(),
    On = /https:?/;
  function Nn(e, t, r) {
    if (((e.hostname = t.host), (e.host = t.host), (e.port = t.port), (e.path = r), t.auth)) {
      var o = Buffer.from(t.auth.username + ':' + t.auth.password, 'utf8').toString('base64');
      e.headers['Proxy-Authorization'] = 'Basic ' + o;
    }
    e.beforeRedirect = function (s) {
      (s.headers.host = s.host), Nn(s, t, s.href);
    };
  }
  Un.exports = function (t) {
    return new Promise(function (o, n) {
      var s = function (g) {
          o(g);
        },
        i = function (g) {
          n(g);
        },
        u = t.data,
        a = t.headers;
      if (
        ('User-Agent' in a || 'user-agent' in a
          ? !a['User-Agent'] && !a['user-agent'] && (delete a['User-Agent'], delete a['user-agent'])
          : (a['User-Agent'] = 'axios/' + yi.version),
        u && !be.isStream(u))
      ) {
        if (!Buffer.isBuffer(u))
          if (be.isArrayBuffer(u)) u = Buffer.from(new Uint8Array(u));
          else if (be.isString(u)) u = Buffer.from(u, 'utf-8');
          else
            return i(
              Qe(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                t
              )
            );
        a['Content-Length'] = u.length;
      }
      var l = void 0;
      if (t.auth) {
        var c = t.auth.username || '',
          f = t.auth.password || '';
        l = c + ':' + f;
      }
      var p = hi(t.baseURL, t.url),
        d = xn.parse(p),
        h = d.protocol || 'http:';
      if (!l && d.auth) {
        var v = d.auth.split(':'),
          C = v[0] || '',
          N = v[1] || '';
        l = C + ':' + N;
      }
      l && delete a.Authorization;
      var x = On.test(h),
        I = x ? t.httpsAgent : t.httpAgent,
        y = {
          path: mi(d.path, t.params, t.paramsSerializer).replace(/^\?/, ''),
          method: t.method.toUpperCase(),
          headers: a,
          agent: I,
          agents: { http: t.httpAgent, https: t.httpsAgent },
          auth: l,
        };
      t.socketPath ? (y.socketPath = t.socketPath) : ((y.hostname = d.hostname), (y.port = d.port));
      var w = t.proxy;
      if (!w && w !== !1) {
        var E = h.slice(0, -1) + '_proxy',
          b = process.env[E] || process.env[E.toUpperCase()];
        if (b) {
          var U = xn.parse(b),
            S = process.env.no_proxy || process.env.NO_PROXY,
            L = !0;
          if (S) {
            var K = S.split(',').map(function (g) {
              return g.trim();
            });
            L = !K.some(function (g) {
              return g
                ? g === '*' ||
                  (g[0] === '.' && d.hostname.substr(d.hostname.length - g.length) === g)
                  ? !0
                  : d.hostname === g
                : !1;
            });
          }
          if (L && ((w = { host: U.hostname, port: U.port, protocol: U.protocol }), U.auth)) {
            var V = U.auth.split(':');
            w.auth = { username: V[0], password: V[1] };
          }
        }
      }
      w &&
        ((y.headers.host = d.hostname + (d.port ? ':' + d.port : '')),
        Nn(y, w, h + '//' + d.hostname + (d.port ? ':' + d.port : '') + y.path));
      var B,
        z = x && (w ? On.test(w.protocol) : !0);
      t.transport
        ? (B = t.transport)
        : t.maxRedirects === 0
          ? (B = z ? vi : _i)
          : (t.maxRedirects && (y.maxRedirects = t.maxRedirects), (B = z ? Ci : Ei)),
        t.maxBodyLength > -1 && (y.maxBodyLength = t.maxBodyLength);
      var A = B.request(y, function (g) {
        if (!A.aborted) {
          var q = g,
            P = g.req || A;
          if (g.statusCode !== 204 && P.method !== 'HEAD' && t.decompress !== !1)
            switch (g.headers['content-encoding']) {
              case 'gzip':
              case 'compress':
              case 'deflate':
                (q = q.pipe(Ri.createUnzip())), delete g.headers['content-encoding'];
                break;
            }
          var Z = {
            status: g.statusCode,
            statusText: g.statusMessage,
            headers: g.headers,
            config: t,
            request: P,
          };
          if (t.responseType === 'stream') (Z.data = q), In(s, i, Z);
          else {
            var m = [],
              _ = 0;
            q.on('data', function (O) {
              m.push(O),
                (_ += O.length),
                t.maxContentLength > -1 &&
                  _ > t.maxContentLength &&
                  (q.destroy(),
                  i(
                    Qe('maxContentLength size of ' + t.maxContentLength + ' exceeded', t, null, P)
                  ));
            }),
              q.on('error', function (O) {
                A.aborted || i(Ft(O, t, null, P));
              }),
              q.on('end', function () {
                var O = Buffer.concat(m);
                t.responseType !== 'arraybuffer' &&
                  ((O = O.toString(t.responseEncoding)),
                  (!t.responseEncoding || t.responseEncoding === 'utf8') && (O = be.stripBOM(O))),
                  (Z.data = O),
                  In(s, i, Z);
              });
          }
        }
      });
      if (
        (A.on('error', function (g) {
          (A.aborted && g.code !== 'ERR_FR_TOO_MANY_REDIRECTS') || i(Ft(g, t, null, A));
        }),
        t.timeout)
      ) {
        var J = parseInt(t.timeout, 10);
        if (isNaN(J)) {
          i(Qe('error trying to parse `config.timeout` to int', t, 'ERR_PARSE_TIMEOUT', A));
          return;
        }
        A.setTimeout(J, function () {
          A.abort(),
            i(
              Qe(
                'timeout of ' + J + 'ms exceeded',
                t,
                t.transitional && t.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                A
              )
            );
        });
      }
      t.cancelToken &&
        t.cancelToken.promise.then(function (g) {
          A.aborted || (A.abort(), i(g));
        }),
        be.isStream(u)
          ? u
              .on('error', function (g) {
                i(Ft(g, t, null, A));
              })
              .pipe(A)
          : A.end(u);
    });
  };
});
var et = T((Fa, An) => {
  'use strict';
  var j = H(),
    bn = qr(),
    gi = Ve(),
    Ti = { 'Content-Type': 'application/x-www-form-urlencoded' };
  function Sn(e, t) {
    !j.isUndefined(e) && j.isUndefined(e['Content-Type']) && (e['Content-Type'] = t);
  }
  function Ii() {
    var e;
    return (
      typeof XMLHttpRequest < 'u'
        ? (e = rn())
        : typeof process < 'u' &&
          Object.prototype.toString.call(process) === '[object process]' &&
          (e = wn()),
      e
    );
  }
  var Ze = {
    transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    adapter: Ii(),
    transformRequest: [
      function (t, r) {
        return (
          bn(r, 'Accept'),
          bn(r, 'Content-Type'),
          j.isFormData(t) ||
          j.isArrayBuffer(t) ||
          j.isBuffer(t) ||
          j.isStream(t) ||
          j.isFile(t) ||
          j.isBlob(t)
            ? t
            : j.isArrayBufferView(t)
              ? t.buffer
              : j.isURLSearchParams(t)
                ? (Sn(r, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString())
                : j.isObject(t) || (r && r['Content-Type'] === 'application/json')
                  ? (Sn(r, 'application/json'), JSON.stringify(t))
                  : t
        );
      },
    ],
    transformResponse: [
      function (t) {
        var r = this.transitional,
          o = r && r.silentJSONParsing,
          n = r && r.forcedJSONParsing,
          s = !o && this.responseType === 'json';
        if (s || (n && j.isString(t) && t.length))
          try {
            return JSON.parse(t);
          } catch (i) {
            if (s) throw i.name === 'SyntaxError' ? gi(i, this, 'E_JSON_PARSE') : i;
          }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
  };
  Ze.headers = { common: { Accept: 'application/json, text/plain, */*' } };
  j.forEach(['delete', 'get', 'head'], function (t) {
    Ze.headers[t] = {};
  });
  j.forEach(['post', 'put', 'patch'], function (t) {
    Ze.headers[t] = j.merge(Ti);
  });
  An.exports = Ze;
});
var Bn = T((qa, Ln) => {
  'use strict';
  var xi = H(),
    Oi = et();
  Ln.exports = function (t, r, o) {
    var n = this || Oi;
    return (
      xi.forEach(o, function (i) {
        t = i.call(n, t, r);
      }),
      t
    );
  };
});
var qt = T((ka, Pn) => {
  'use strict';
  Pn.exports = function (t) {
    return !!(t && t.__CANCEL__);
  };
});
var Fn = T((Ga, Mn) => {
  'use strict';
  var Dn = H(),
    kt = Bn(),
    Ni = qt(),
    Ui = et();
  function Gt(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
  }
  Mn.exports = function (t) {
    Gt(t),
      (t.headers = t.headers || {}),
      (t.data = kt.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = Dn.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers)),
      Dn.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (n) {
        delete t.headers[n];
      });
    var r = t.adapter || Ui.adapter;
    return r(t).then(
      function (n) {
        return Gt(t), (n.data = kt.call(t, n.data, n.headers, t.transformResponse)), n;
      },
      function (n) {
        return (
          Ni(n) ||
            (Gt(t),
            n &&
              n.response &&
              (n.response.data = kt.call(
                t,
                n.response.data,
                n.response.headers,
                t.transformResponse
              ))),
          Promise.reject(n)
        );
      }
    );
  };
});
var Ht = T((Ha, qn) => {
  'use strict';
  var G = H();
  qn.exports = function (t, r) {
    r = r || {};
    var o = {},
      n = ['url', 'method', 'data'],
      s = ['headers', 'auth', 'proxy', 'params'],
      i = [
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
      u = ['validateStatus'];
    function a(p, d) {
      return G.isPlainObject(p) && G.isPlainObject(d)
        ? G.merge(p, d)
        : G.isPlainObject(d)
          ? G.merge({}, d)
          : G.isArray(d)
            ? d.slice()
            : d;
    }
    function l(p) {
      G.isUndefined(r[p])
        ? G.isUndefined(t[p]) || (o[p] = a(void 0, t[p]))
        : (o[p] = a(t[p], r[p]));
    }
    G.forEach(n, function (d) {
      G.isUndefined(r[d]) || (o[d] = a(void 0, r[d]));
    }),
      G.forEach(s, l),
      G.forEach(i, function (d) {
        G.isUndefined(r[d])
          ? G.isUndefined(t[d]) || (o[d] = a(void 0, t[d]))
          : (o[d] = a(void 0, r[d]));
      }),
      G.forEach(u, function (d) {
        d in r ? (o[d] = a(t[d], r[d])) : d in t && (o[d] = a(void 0, t[d]));
      });
    var c = n.concat(s).concat(i).concat(u),
      f = Object.keys(t)
        .concat(Object.keys(r))
        .filter(function (d) {
          return c.indexOf(d) === -1;
        });
    return G.forEach(f, l), o;
  };
});
var Vn = T((ja, jn) => {
  'use strict';
  var Gn = Mt(),
    jt = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (e, t) {
    jt[e] = function (o) {
      return typeof o === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  });
  var kn = {},
    wi = Gn.version.split('.');
  function Hn(e, t) {
    for (var r = t ? t.split('.') : wi, o = e.split('.'), n = 0; n < 3; n++) {
      if (r[n] > o[n]) return !0;
      if (r[n] < o[n]) return !1;
    }
    return !1;
  }
  jt.transitional = function (t, r, o) {
    var n = r && Hn(r);
    function s(i, u) {
      return (
        '[Axios v' + Gn.version + "] Transitional option '" + i + "'" + u + (o ? '. ' + o : '')
      );
    }
    return function (i, u, a) {
      if (t === !1) throw new Error(s(u, ' has been removed in ' + r));
      return (
        n &&
          !kn[u] &&
          ((kn[u] = !0),
          console.warn(
            s(u, ' has been deprecated since v' + r + ' and will be removed in the near future')
          )),
        t ? t(i, u, a) : !0
      );
    };
  };
  function bi(e, t, r) {
    if (typeof e != 'object') throw new TypeError('options must be an object');
    for (var o = Object.keys(e), n = o.length; n-- > 0; ) {
      var s = o[n],
        i = t[s];
      if (i) {
        var u = e[s],
          a = u === void 0 || i(u, s, e);
        if (a !== !0) throw new TypeError('option ' + s + ' must be ' + a);
        continue;
      }
      if (r !== !0) throw Error('Unknown option ' + s);
    }
  }
  jn.exports = { isOlderVersion: Hn, assertOptions: bi, validators: jt };
});
var Yn = T((Va, zn) => {
  'use strict';
  var Kn = H(),
    Si = He(),
    $n = Mr(),
    Xn = Fn(),
    tt = Ht(),
    Wn = Vn(),
    ye = Wn.validators;
  function Se(e) {
    (this.defaults = e), (this.interceptors = { request: new $n(), response: new $n() });
  }
  Se.prototype.request = function (t) {
    typeof t == 'string' ? ((t = arguments[1] || {}), (t.url = arguments[0])) : (t = t || {}),
      (t = tt(this.defaults, t)),
      t.method
        ? (t.method = t.method.toLowerCase())
        : this.defaults.method
          ? (t.method = this.defaults.method.toLowerCase())
          : (t.method = 'get');
    var r = t.transitional;
    r !== void 0 &&
      Wn.assertOptions(
        r,
        {
          silentJSONParsing: ye.transitional(ye.boolean, '1.0.0'),
          forcedJSONParsing: ye.transitional(ye.boolean, '1.0.0'),
          clarifyTimeoutError: ye.transitional(ye.boolean, '1.0.0'),
        },
        !1
      );
    var o = [],
      n = !0;
    this.interceptors.request.forEach(function (p) {
      (typeof p.runWhen == 'function' && p.runWhen(t) === !1) ||
        ((n = n && p.synchronous), o.unshift(p.fulfilled, p.rejected));
    });
    var s = [];
    this.interceptors.response.forEach(function (p) {
      s.push(p.fulfilled, p.rejected);
    });
    var i;
    if (!n) {
      var u = [Xn, void 0];
      for (Array.prototype.unshift.apply(u, o), u.concat(s), i = Promise.resolve(t); u.length; )
        i = i.then(u.shift(), u.shift());
      return i;
    }
    for (var a = t; o.length; ) {
      var l = o.shift(),
        c = o.shift();
      try {
        a = l(a);
      } catch (f) {
        c(f);
        break;
      }
    }
    try {
      i = Xn(a);
    } catch (f) {
      return Promise.reject(f);
    }
    for (; s.length; ) i = i.then(s.shift(), s.shift());
    return i;
  };
  Se.prototype.getUri = function (t) {
    return (t = tt(this.defaults, t)), Si(t.url, t.params, t.paramsSerializer).replace(/^\?/, '');
  };
  Kn.forEach(['delete', 'get', 'head', 'options'], function (t) {
    Se.prototype[t] = function (r, o) {
      return this.request(tt(o || {}, { method: t, url: r, data: (o || {}).data }));
    };
  });
  Kn.forEach(['post', 'put', 'patch'], function (t) {
    Se.prototype[t] = function (r, o, n) {
      return this.request(tt(n || {}, { method: t, url: r, data: o }));
    };
  });
  zn.exports = Se;
});
var $t = T(($a, Jn) => {
  'use strict';
  function Vt(e) {
    this.message = e;
  }
  Vt.prototype.toString = function () {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  Vt.prototype.__CANCEL__ = !0;
  Jn.exports = Vt;
});
var Zn = T((Xa, Qn) => {
  'use strict';
  var Ai = $t();
  function rt(e) {
    if (typeof e != 'function') throw new TypeError('executor must be a function.');
    var t;
    this.promise = new Promise(function (n) {
      t = n;
    });
    var r = this;
    e(function (n) {
      r.reason || ((r.reason = new Ai(n)), t(r.reason));
    });
  }
  rt.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  rt.source = function () {
    var t,
      r = new rt(function (n) {
        t = n;
      });
    return { token: r, cancel: t };
  };
  Qn.exports = rt;
});
var to = T((Ka, eo) => {
  'use strict';
  eo.exports = function (t) {
    return function (o) {
      return t.apply(null, o);
    };
  };
});
var no = T((Wa, ro) => {
  'use strict';
  ro.exports = function (t) {
    return typeof t == 'object' && t.isAxiosError === !0;
  };
});
var io = T((za, Xt) => {
  'use strict';
  var oo = H(),
    Li = _t(),
    nt = Yn(),
    Bi = Ht(),
    Pi = et();
  function so(e) {
    var t = new nt(e),
      r = Li(nt.prototype.request, t);
    return oo.extend(r, nt.prototype, t), oo.extend(r, t), r;
  }
  var Q = so(Pi);
  Q.Axios = nt;
  Q.create = function (t) {
    return so(Bi(Q.defaults, t));
  };
  Q.Cancel = $t();
  Q.CancelToken = Zn();
  Q.isCancel = qt();
  Q.all = function (t) {
    return Promise.all(t);
  };
  Q.spread = to();
  Q.isAxiosError = no();
  Xt.exports = Q;
  Xt.exports.default = Q;
});
var uo = T((Ya, ao) => {
  'use strict';
  ao.exports = io();
});
function zt(e, t = 1e4) {
  let r = (s) => s,
    o = process.env.NX_CLOUD_API || e.url || 'https://cloud.nx.app',
    n = Oe ? Oe : e.accessToken;
  if (!n)
    throw new Error(
      'Unable to authenticate. Either define accessToken in nx.json or set the NX_CLOUD_ACCESS_TOKEN env variable.'
    );
  if (e.customProxyConfigPath) {
    let { nxCloudProxyConfig: s } = require((0, co.join)(process.cwd(), e.customProxyConfigPath));
    r = s ?? r;
  }
  return Di.create(
    r({
      baseURL: o,
      timeout: ke ? pt : t,
      headers: { authorization: n, 'Nx-Cloud-Client-Version': e.clientVersion || 'unknown' },
    })
  );
}
async function st(e, t = xe) {
  try {
    return await e();
  } catch (r) {
    let o = (r.response && r.response.status) || r.code;
    (o === 401 || o === 403) && (t = 0);
    let n = r.response
      ? r.response.data.message
        ? r.response.data.message
        : r.response.data
      : r.message;
    if (t === 0)
      throw (
        (typeof n != 'string' && (n = r.message),
        M &&
          Kt.note({
            title: `Connection to Nx Cloud failed with status code ${o}`,
            bodyLines: [`${o}: ${n}`],
          }),
        new Wt('failure', Mi(o), r))
      );
    if (o == 429) {
      if (!ot) {
        let s = 1e4 + (xe + 1 - t) * 6e4 * Math.random();
        Kt.note({ title: `Received Code ${o}. ${n} Retrying in ${s}ms.` }), (ot = mt(s));
      }
      await ot, (ot = null);
    } else {
      let s = 1e3 + (xe + 1 - t) * 4e3 * Math.random();
      M && Kt.note({ title: `Received Code ${o}. Retrying in ${s}ms.` }), await mt(s);
    }
    return st(e, t - 1);
  }
}
function Mi(e) {
  let t = `${e}:`;
  switch (e) {
    case 403:
      return `${t} Access to resource is not authorized.`;
    case 404:
      return `${t} Cannot find requested resource.`;
    case 500:
      return `${t} Unexpected server error.`;
    case 'ECONNABORTED':
    case 'ETIMEOUT':
      return `${t} Connection timed out, check for other network problems.`;
    case 'ECONNRESET':
      return `${t} The connection to Nx Cloud was closed suddenly.`;
    case 'ECONNREFUSED':
      return `${t} Cannot connect to server. Please check that you have the correct server address and port number.`;
    case 'ENOTFOUND':
      return `${t} DNS error due to invalid host. Are you accessing Nx Cloud from a network proxy?`;
    case 'SELF_SIGNED_CERT_IN_CHAIN':
      return `${t} Found a self-signed cert in certificate chain. Ensure you have verified trust for all certs in your network.`;
    default:
      return `${t} Unable to connect to Nx Cloud.`;
  }
}
var co,
  Kt,
  Di,
  Wt,
  ot,
  Yt = te(() => {
    'use strict';
    co = require('path');
    _e();
    wr();
    ({ output: Kt } = he()),
      (Di = uo()),
      (Wt = class {
        constructor(t, r, o) {
          this.type = t;
          this.message = r;
          this.axiosException = o;
        }
      });
    ot = null;
  });
function Jt() {
  for (let e of Object.values(Fi))
    if (e.detectorFn(process.env)) {
      let t = e.contextRetrieverFn(process.env);
      return M && console.log(JSON.stringify(t, null, 2)), t;
    }
  return M && console.log('[Nx Cloud] Unable to detect a VCS context from the environment.'), null;
}
function qi(e) {
  return e.CIRCLECI === 'true';
}
function ki(e) {
  M && console.log('[Nx Cloud] Detected Env: CircleCI');
  let t = (o) => {
      if (o.CIRCLE_PR_NUMBER !== void 0) return o.CIRCLE_PR_NUMBER;
      if (o.CIRCLE_PULL_REQUEST !== void 0) {
        let n = o.CIRCLE_PULL_REQUEST.split('/');
        return n[n.length - 1];
      }
      return o.CIRCLE_BRANCH !== void 0 ? o.CIRCLE_BRANCH : 'unknown';
    },
    r = (o) =>
      o.CIRCLE_USERNAME !== void 0
        ? o.CIRCLE_USERNAME
        : o.CIRCLE_PR_USERNAME
          ? o.CIRCLE_PR_USERNAME
          : null;
  return {
    branch: t(e),
    ref: e.CIRCLE_BRANCH ?? null,
    title: fe(),
    headSha: e.CIRCLE_SHA1 ?? 'unknown',
    baseSha: null,
    commitLink: e.CIRCLE_PULL_REQUEST ?? null,
    author: r(e),
    authorUrl: null,
    authorAvatarUrl: null,
    repositoryUrl: e.CIRCLE_REPOSITORY_URL ?? null,
  };
}
function Gi(e) {
  return e.TRAVIS === 'true';
}
function Hi(e) {
  return (
    M && console.log('[Nx Cloud] Detected Env: TravisCI'),
    {
      branch: ((r) =>
        r.TRAVIS_EVENT_TYPE === 'pull_request' ? r.TRAVIS_PULL_REQUEST : r.TRAVIS_BRANCH)(e),
      ref: null,
      title: fe(),
      headSha: e.TRAVIS_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Qt(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: null,
    }
  );
}
function ji(e) {
  return e.GITHUB_ACTIONS === 'true';
}
function Vi(e) {
  M && console.log('[Nx Cloud] Detected Env: GitHub Actions');
  let t = (n) => {
      if (n.GITHUB_REF) {
        let s = n.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
        if (s) return s[1];
      }
      return n.GITHUB_HEAD_REF
        ? n.GITHUB_HEAD_REF
        : n.GITHUB_REF_NAME
          ? n.GITHUB_REF_NAME
          : 'unknown';
    },
    r = (n) => {
      let s = `${n.GITHUB_SERVER_URL}/${n.GITHUB_REPOSITORY}`;
      return n.GITHUB_EVENT_NAME === 'pull_request'
        ? `${s}/pull/${t(n)}`
        : `${s}/commit/${n.GITHUB_SHA}`;
    },
    o = (n) => (n.GITHUB_HEAD_REF ? n.GITHUB_HEAD_REF : n.GITHUB_REF ? n.GITHUB_REF : null);
  return {
    branch: t(e),
    ref: o(e),
    title: fe(),
    headSha: e.GITHUB_SHA ?? 'unknown',
    baseSha: null,
    commitLink: r(e),
    author: e.GITHUB_ACTOR ?? null,
    authorUrl: `${e.GITHUB_SERVER_URL}/${e.GITHUB_ACTOR}`,
    authorAvatarUrl: `${e.GITHUB_SERVER_URL}/${e.GITHUB_ACTOR}.png`,
    repositoryUrl: `${e.GITHUB_SERVER_URL}/${e.GITHUB_REPOSITORY}`,
  };
}
function $i(e) {
  return e.BITBUCKET_BUILD_NUMBER != null;
}
function Xi(e) {
  return (
    M && console.log('[Nx Cloud] Detected Env: BitBucket Pipelines'),
    {
      branch: e.BITBUCKET_PR_ID ?? e.BITBUCKET_BRANCH ?? 'unknown',
      ref: null,
      title: fe(),
      headSha: e.BITBUCKET_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Qt(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: e.BITBUCKET_GIT_HTTP_ORIGIN ?? null,
    }
  );
}
function Ki(e) {
  return e.BUILD_BUILDID !== void 0 && e.AGENT_NAME !== void 0;
}
function Wi(e) {
  return (
    M && console.log('[Nx Cloud] Detected Env: Azure DevOps'),
    {
      branch: e.SYSTEM_PULLREQUEST_PULLREQUESTNUMBER ?? e.BUILD_SOURCEBRANCHNAME ?? 'unknown',
      ref: null,
      title: fe(),
      headSha: me() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: e.BUILD_REQUESTEDFOR ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: e.SYSTEM_PULLREQUEST_SOURCEREPOSITORYURI ?? e.BUILD_REPOSITORY_URI ?? null,
    }
  );
}
function zi(e) {
  return e.GITLAB_CI === 'true';
}
function Yi(e) {
  return (
    M && console.log('[Nx Cloud] Detected Env: GitLab Pipelines'),
    {
      branch: ((r) =>
        r.CI_MERGE_REQUEST_IID
          ? r.CI_MERGE_REQUEST_IID
          : r.CI_COMMIT_BRANCH
            ? r.CI_COMMIT_BRANCH
            : 'unknown')(e),
      ref: e.CI_COMMIT_REF_NAME ?? null,
      title: fe(),
      headSha: me() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: e.GITLAB_USER_NAME ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: e.CI_REPOSITORY_URL ?? null,
    }
  );
}
function Ji(e) {
  return e.NX_CLOUD_VERSION != null && e.NX_CLOUD_VERSION !== '';
}
function Qi(e) {
  return (
    M && console.log('[Nx Cloud] Detected Env: Nx Cloud'),
    {
      branch: Zi() ?? 'unknown',
      ref: ea(),
      title: fe(),
      headSha: me() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Qt(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: null,
    }
  );
}
function fe() {
  try {
    return (0, Ae.execSync)('git log -1 --pretty=%B', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function Qt() {
  try {
    return (0, Ae.execSync)('git log -1 --pretty=%aN', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function Zi() {
  try {
    return (0, Ae.execSync)('git branch --show-current', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function ea() {
  try {
    return (0, Ae.execSync)('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
var Ae,
  Fi,
  lo = te(() => {
    'use strict';
    Ae = require('child_process');
    _e();
    Fi = {
      CIRCLE_CI: { detectorFn: qi, contextRetrieverFn: ki },
      TRAVIS_CI: { detectorFn: Gi, contextRetrieverFn: Hi },
      GITHUB_ACTIONS: { detectorFn: ji, contextRetrieverFn: Vi },
      BITBUCKET_PIPELINES: { detectorFn: $i, contextRetrieverFn: Xi },
      AZURE_DEVOPS: { detectorFn: Ki, contextRetrieverFn: Wi },
      GITLAB_PIPELINES: { detectorFn: zi, contextRetrieverFn: Yi },
      NX_CLOUD: { detectorFn: Ji, contextRetrieverFn: Qi },
    };
  });
var nu,
  fo = te(() => {
    'use strict';
    Fe();
    ({ output: nu } = he());
  });
var Zt,
  ta,
  er,
  Le,
  tr,
  po = te(() => {
    'use strict';
    Zt = require('perf_hooks');
    Yt();
    _e();
    fo();
    (ta = []),
      (er = (e) => {
        let t = Zt.performance.now();
        return {
          recordMetric: (o) => {
            let n = Zt.performance.now();
            (o.durationMs = n - t), (o.entryType = e), ta.push(o);
          },
        };
      }),
      (Le = (e) => {
        var t;
        return {
          success:
            ((t = e == null ? void 0 : e.status) == null ? void 0 : t.toString().startsWith('2')) ??
            !1,
          statusCode: (e == null ? void 0 : e.status) ?? -1,
        };
      }),
      (tr = { success: !1, statusCode: -1 });
  });
var mo = {};
De(mo, { RunGroupApi: () => rr });
var ho,
  rr,
  _o = te(() => {
    'use strict';
    Yt();
    lo();
    po();
    ({ output: ho } = he()),
      (rr = class {
        constructor(t) {
          this.apiAxiosInstance = zt(t);
        }
        async createRunGroup(t, r, o, n, s, i, u, a, l, c, f, p, d = !1, h = []) {
          var C;
          let v = er('createRunGroup');
          try {
            let N = await st(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/create-run-group', {
                branch: t,
                runGroup: r,
                ciExecutionId: o,
                ciExecutionEnv: n,
                stopAgentsOnFailure: s,
                agentCount: i,
                stopAgentsAfter: u,
                commitSha: l,
                distributeOn: a,
                affectedProjectRatio: f,
                vcsContext: Jt(),
                envVars: p,
                requireExplicitCompletion: d,
                touchedProjects: h,
              })
            );
            v.recordMetric(Le(N));
          } catch (N) {
            v.recordMetric(
              (C = N == null ? void 0 : N.axiosException) != null && C.response
                ? Le(N.axiosException.response)
                : tr
            ),
              ho.error({ title: N.message }),
              process.exit(1);
          }
        }
        async completeRunGroup(t, r, o, n) {
          var i;
          let s = er('completeRunGroup');
          try {
            let u = await st(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/complete-run-group', {
                branch: t,
                runGroup: r,
                ciExecutionId: o,
                ciExecutionEnv: n,
                vcsContext: Jt(),
              })
            );
            s.recordMetric(Le(u));
          } catch (u) {
            s.recordMetric(
              (i = u == null ? void 0 : u.axiosException) != null && i.response
                ? Le(u.axiosException.response)
                : tr
            ),
              ho.error({ title: u.message }),
              process.exit(1);
          }
        }
        async sendHeartbeat(t, r) {
          await this.apiAxiosInstance.post('/nx-cloud/heartbeat', {
            ciExecutionId: t,
            runGroup: r,
          });
        }
        async fetchProjectGraph() {
          return await this.apiAxiosInstance.get('/nx-cloud/executions/project-graph');
        }
      });
  });
var vo = require('fs');
_e();
var Rr = require('os'),
  yr = require('path');
function gr(e) {
  return (0, yr.join)((0, Rr.tmpdir)(), `run-group-${e}-marker.lock`);
}
async function ra() {
  var l;
  let e = JSON.parse(process.env.NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS),
    { configureLightClientRequire: t } = (Fe(), Me(lr));
  t(e);
  let { getCloudOptions: r } = (Ur(), Me(Nr)),
    { RunGroupApi: o } = (_o(), Me(mo)),
    { getRunGroup: n } = (_e(), Me(Cr)),
    { nxCloudOptions: s } = r(),
    i = new o(s),
    u = dt();
  u == null && process.exit(0);
  let a = n();
  na(a), await oa(i, u, a), (l = process.stdout) == null || l.write('heartbeat-ready');
}
function na(e) {
  let t = (o) => {
    let n = gr(e);
    (0, vo.writeFileSync)(`${n}/logs`, `[${o}] Shutting down heartbeat process`), process.exit(0);
  };
  ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGHUP', 'SIGUSR1', 'SIGUSR2'].forEach((o) => {
    process.on(o, () => t(o));
  });
}
async function oa(e, t, r) {
  try {
    await e.sendHeartbeat(t, r);
  } catch {}
  let o = 5,
    n = 1,
    s = setInterval(() => {
      n > o && (clearInterval(s), process.exit(1)),
        e
          .sendHeartbeat(t, r)
          .then(() => {
            n = 1;
          })
          .catch(() => {
            n += 1;
          });
    }, 5e3);
}
ra();
