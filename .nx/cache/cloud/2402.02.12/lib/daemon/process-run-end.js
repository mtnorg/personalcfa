'use strict';
var df = Object.create;
var Qr = Object.defineProperty;
var pf = Object.getOwnPropertyDescriptor;
var mf = Object.getOwnPropertyNames;
var Ef = Object.getPrototypeOf,
  _f = Object.prototype.hasOwnProperty;
var ee = (r, e) => () => (r && (e = r((r = 0))), e);
var E = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
  Pe = (r, e) => {
    for (var t in e) Qr(r, t, { get: e[t], enumerable: !0 });
  },
  na = (r, e, t, s) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let n of mf(e))
        !_f.call(r, n) &&
          n !== t &&
          Qr(r, n, { get: () => e[n], enumerable: !(s = pf(e, n)) || s.enumerable });
    return r;
  };
var yf = (r, e, t) => (
    (t = r != null ? df(Ef(r)) : {}),
    na(e || !r || !r.__esModule ? Qr(t, 'default', { value: r, enumerable: !0 }) : t, r)
  ),
  ke = (r) => na(Qr({}, '__esModule', { value: !0 }), r);
var ia = {};
Pe(ia, {
  configureLightClientRequire: () => Rf,
  configuredPaths: () => Sn,
  lightClientRequire: () => B,
});
function Rf(r) {
  (Sn = r),
    (B = function (e) {
      if (Sn.length === 0)
        throw new Error(
          'Light client require must have paths configured with `configureLightClientRequire`.'
        );
      let t;
      try {
        t = require.resolve(e, { paths: r });
      } catch (s) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able to require.resolve module ${e} from the following paths: ${r}. This may be expected.`
            ),
          s)
        );
      }
      try {
        return require(t);
      } catch (s) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able require module ${e} from path ${t}. This may be expected. `
            ),
          s)
        );
      }
    });
}
var B,
  Sn,
  vr = ee(() => {
    'use strict';
    Sn = [];
  });
var oa = E((te) => {
  'use strict';
  var On = require('path');
  vr();
  try {
    try {
      let r;
      try {
        r = B('nx/src/utils/app-root').workspaceRoot;
      } catch {
        r = B('nx/src/utils/workspace-root').workspaceRoot;
      }
      let { getDependencyConfigs: e } = B('nx/src/tasks-runner/utils'),
        t = B('nx/tasks-runners/default').default,
        { CompositeLifeCycle: s } = B('nx/src/tasks-runner/life-cycle'),
        n = null;
      try {
        n = B('nx/src/index').initTasksRunner;
      } catch {}
      let i;
      try {
        i = B('nx/src/devkit-exports').cacheDir;
      } catch {
        try {
          i = B('nx/src/utils/cache-directory').cacheDir;
        } catch {
          i = (0, On.join)(r, './node_modules/.cache/nx');
        }
      }
      let o = B('nx/src/tasks-runner/utils').isCacheableTask;
      (te.cacheDirectory = i),
        (te.runnerReturnsPromise = !0),
        (te.tasksRunner = t),
        (te.CompositeLifeCycle = s),
        (te.getDependencyConfigs = e),
        (te.initTasksRunner = n),
        (te.isCacheableTask = o);
    } catch {
      let { appRootPath: e } = B('@nrwl/tao/src/utils/app-root'),
        { getDependencyConfigs: t } = B('@nrwl/workspace/src/tasks-runner/utils'),
        { tasksRunnerV2: s } = B('@nrwl/workspace/src/tasks-runner/tasks-runner-v2'),
        n;
      try {
        n = B('@nrwl/workspace/src/tasks-runner/life-cycle').CompositeLifeCycle;
      } catch {}
      let i = B('@nrwl/workspace/src/tasks-runner/utils').isCacheableTask;
      (te.cacheDirectory = (0, On.join)(e, './node_modules/.cache/nx')),
        (te.runnerReturnsPromise = !1),
        (te.tasksRunner = s),
        (te.CompositeLifeCycle = n),
        (te.getDependencyConfigs = t),
        (te.initTasksRunner = null),
        (te.isCacheableTask = i);
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
function aa() {
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
var ca = ee(() => {
  'use strict';
});
var fa = E((N_, Tn) => {
  'use strict';
  var gf = require('fs'),
    ua = require('path'),
    vf = require('os');
  function la(r) {
    console.log(`[dotenv][DEBUG] ${r}`);
  }
  var Cf = `
`,
    wf = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,
    Sf = /\\n/g,
    Of = /\r\n|\n|\r/;
  function ha(r, e) {
    let t = !!(e && e.debug),
      s = {};
    return (
      r
        .toString()
        .split(Of)
        .forEach(function (n, i) {
          let o = n.match(wf);
          if (o != null) {
            let c = o[1],
              a = o[2] || '',
              u = a.length - 1,
              l = a[0] === '"' && a[u] === '"';
            (a[0] === "'" && a[u] === "'") || l
              ? ((a = a.substring(1, u)), l && (a = a.replace(Sf, Cf)))
              : (a = a.trim()),
              (s[c] = a);
          } else t && la(`did not match key and value when parsing line ${i + 1}: ${n}`);
        }),
      s
    );
  }
  function Tf(r) {
    return r[0] === '~' ? ua.join(vf.homedir(), r.slice(1)) : r;
  }
  function xf(r) {
    let e = ua.resolve(process.cwd(), '.env'),
      t = 'utf8',
      s = !1;
    r &&
      (r.path != null && (e = Tf(r.path)),
      r.encoding != null && (t = r.encoding),
      r.debug != null && (s = !0));
    try {
      let n = ha(gf.readFileSync(e, { encoding: t }), { debug: s });
      return (
        Object.keys(n).forEach(function (i) {
          Object.prototype.hasOwnProperty.call(process.env, i)
            ? s && la(`"${i}" is already defined in \`process.env\` and will not be overwritten`)
            : (process.env[i] = n[i]);
        }),
        { parsed: n }
      );
    } catch (n) {
      return { error: n };
    }
  }
  Tn.exports.config = xf;
  Tn.exports.parse = ha;
});
var da = E((Cr, xn) => {
  'use strict';
  (function (r, e) {
    typeof Cr == 'object' && typeof xn == 'object'
      ? (xn.exports = e(require('child_process'), require('crypto')))
      : typeof define == 'function' && define.amd
        ? define(['child_process', 'crypto'], e)
        : typeof Cr == 'object'
          ? (Cr['electron-machine-id'] = e(require('child_process'), require('crypto')))
          : (r['electron-machine-id'] = e(r.child_process, r.crypto));
  })(Cr, function (r, e) {
    return (function (t) {
      function s(i) {
        if (n[i]) return n[i].exports;
        var o = (n[i] = { exports: {}, id: i, loaded: !1 });
        return t[i].call(o.exports, o, o.exports, s), (o.loaded = !0), o.exports;
      }
      var n = {};
      return (s.m = t), (s.c = n), (s.p = ''), s(0);
    })([
      function (t, s, n) {
        t.exports = n(34);
      },
      function (t, s, n) {
        var i = n(29)('wks'),
          o = n(33),
          c = n(2).Symbol,
          a = typeof c == 'function',
          u = (t.exports = function (l) {
            return i[l] || (i[l] = (a && c[l]) || (a ? c : o)('Symbol.' + l));
          });
        u.store = i;
      },
      function (t, s) {
        var n = (t.exports =
          typeof window < 'u' && window.Math == Math
            ? window
            : typeof self < 'u' && self.Math == Math
              ? self
              : Function('return this')());
        typeof __g == 'number' && (__g = n);
      },
      function (t, s, n) {
        var i = n(9);
        t.exports = function (o) {
          if (!i(o)) throw TypeError(o + ' is not an object!');
          return o;
        };
      },
      function (t, s, n) {
        t.exports = !n(24)(function () {
          return (
            Object.defineProperty({}, 'a', {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        });
      },
      function (t, s, n) {
        var i = n(12),
          o = n(17);
        t.exports = n(4)
          ? function (c, a, u) {
              return i.f(c, a, o(1, u));
            }
          : function (c, a, u) {
              return (c[a] = u), c;
            };
      },
      function (t, s) {
        var n = (t.exports = { version: '2.4.0' });
        typeof __e == 'number' && (__e = n);
      },
      function (t, s, n) {
        var i = n(14);
        t.exports = function (o, c, a) {
          if ((i(o), c === void 0)) return o;
          switch (a) {
            case 1:
              return function (u) {
                return o.call(c, u);
              };
            case 2:
              return function (u, l) {
                return o.call(c, u, l);
              };
            case 3:
              return function (u, l, h) {
                return o.call(c, u, l, h);
              };
          }
          return function () {
            return o.apply(c, arguments);
          };
        };
      },
      function (t, s) {
        var n = {}.hasOwnProperty;
        t.exports = function (i, o) {
          return n.call(i, o);
        };
      },
      function (t, s) {
        t.exports = function (n) {
          return typeof n == 'object' ? n !== null : typeof n == 'function';
        };
      },
      function (t, s) {
        t.exports = {};
      },
      function (t, s) {
        var n = {}.toString;
        t.exports = function (i) {
          return n.call(i).slice(8, -1);
        };
      },
      function (t, s, n) {
        var i = n(3),
          o = n(26),
          c = n(32),
          a = Object.defineProperty;
        s.f = n(4)
          ? Object.defineProperty
          : function (u, l, h) {
              if ((i(u), (l = c(l, !0)), i(h), o))
                try {
                  return a(u, l, h);
                } catch {}
              if ('get' in h || 'set' in h) throw TypeError('Accessors not supported!');
              return 'value' in h && (u[l] = h.value), u;
            };
      },
      function (t, s, n) {
        var i = n(42),
          o = n(15);
        t.exports = function (c) {
          return i(o(c));
        };
      },
      function (t, s) {
        t.exports = function (n) {
          if (typeof n != 'function') throw TypeError(n + ' is not a function!');
          return n;
        };
      },
      function (t, s) {
        t.exports = function (n) {
          if (n == null) throw TypeError("Can't call method on  " + n);
          return n;
        };
      },
      function (t, s, n) {
        var i = n(9),
          o = n(2).document,
          c = i(o) && i(o.createElement);
        t.exports = function (a) {
          return c ? o.createElement(a) : {};
        };
      },
      function (t, s) {
        t.exports = function (n, i) {
          return { enumerable: !(1 & n), configurable: !(2 & n), writable: !(4 & n), value: i };
        };
      },
      function (t, s, n) {
        var i = n(12).f,
          o = n(8),
          c = n(1)('toStringTag');
        t.exports = function (a, u, l) {
          a && !o((a = l ? a : a.prototype), c) && i(a, c, { configurable: !0, value: u });
        };
      },
      function (t, s, n) {
        var i = n(29)('keys'),
          o = n(33);
        t.exports = function (c) {
          return i[c] || (i[c] = o(c));
        };
      },
      function (t, s) {
        var n = Math.ceil,
          i = Math.floor;
        t.exports = function (o) {
          return isNaN((o = +o)) ? 0 : (o > 0 ? i : n)(o);
        };
      },
      function (t, s, n) {
        var i = n(11),
          o = n(1)('toStringTag'),
          c =
            i(
              (function () {
                return arguments;
              })()
            ) == 'Arguments',
          a = function (u, l) {
            try {
              return u[l];
            } catch {}
          };
        t.exports = function (u) {
          var l, h, f;
          return u === void 0
            ? 'Undefined'
            : u === null
              ? 'Null'
              : typeof (h = a((l = Object(u)), o)) == 'string'
                ? h
                : c
                  ? i(l)
                  : (f = i(l)) == 'Object' && typeof l.callee == 'function'
                    ? 'Arguments'
                    : f;
        };
      },
      function (t, s) {
        t.exports =
          'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ','
          );
      },
      function (t, s, n) {
        var i = n(2),
          o = n(6),
          c = n(7),
          a = n(5),
          u = 'prototype',
          l = function (h, f, d) {
            var p,
              _,
              y,
              g = h & l.F,
              w = h & l.G,
              S = h & l.S,
              O = h & l.P,
              L = h & l.B,
              v = h & l.W,
              A = w ? o : o[f] || (o[f] = {}),
              I = A[u],
              F = w ? i : S ? i[f] : (i[f] || {})[u];
            w && (d = f);
            for (p in d)
              (_ = !g && F && F[p] !== void 0),
                (_ && p in A) ||
                  ((y = _ ? F[p] : d[p]),
                  (A[p] =
                    w && typeof F[p] != 'function'
                      ? d[p]
                      : L && _
                        ? c(y, i)
                        : v && F[p] == y
                          ? (function (q) {
                              var le = function (ne, G, Ee) {
                                if (this instanceof q) {
                                  switch (arguments.length) {
                                    case 0:
                                      return new q();
                                    case 1:
                                      return new q(ne);
                                    case 2:
                                      return new q(ne, G);
                                  }
                                  return new q(ne, G, Ee);
                                }
                                return q.apply(this, arguments);
                              };
                              return (le[u] = q[u]), le;
                            })(y)
                          : O && typeof y == 'function'
                            ? c(Function.call, y)
                            : y),
                  O &&
                    (((A.virtual || (A.virtual = {}))[p] = y),
                    h & l.R && I && !I[p] && a(I, p, y)));
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
      function (t, s) {
        t.exports = function (n) {
          try {
            return !!n();
          } catch {
            return !0;
          }
        };
      },
      function (t, s, n) {
        t.exports = n(2).document && document.documentElement;
      },
      function (t, s, n) {
        t.exports =
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
      function (t, s, n) {
        'use strict';
        var i = n(28),
          o = n(23),
          c = n(57),
          a = n(5),
          u = n(8),
          l = n(10),
          h = n(45),
          f = n(18),
          d = n(52),
          p = n(1)('iterator'),
          _ = !([].keys && 'next' in [].keys()),
          y = '@@iterator',
          g = 'keys',
          w = 'values',
          S = function () {
            return this;
          };
        t.exports = function (O, L, v, A, I, F, q) {
          h(v, L, A);
          var le,
            ne,
            G,
            Ee = function (R) {
              if (!_ && R in T) return T[R];
              switch (R) {
                case g:
                  return function () {
                    return new v(this, R);
                  };
                case w:
                  return function () {
                    return new v(this, R);
                  };
              }
              return function () {
                return new v(this, R);
              };
            },
            k = L + ' Iterator',
            we = I == w,
            ie = !1,
            T = O.prototype,
            X = T[p] || T[y] || (I && T[I]),
            z = X || Ee(I),
            be = I ? (we ? Ee('entries') : z) : void 0,
            m = (L == 'Array' && T.entries) || X;
          if (
            (m &&
              ((G = d(m.call(new O()))),
              G !== Object.prototype && (f(G, k, !0), i || u(G, p) || a(G, p, S))),
            we &&
              X &&
              X.name !== w &&
              ((ie = !0),
              (z = function () {
                return X.call(this);
              })),
            (i && !q) || (!_ && !ie && T[p]) || a(T, p, z),
            (l[L] = z),
            (l[k] = S),
            I)
          )
            if (((le = { values: we ? z : Ee(w), keys: F ? z : Ee(g), entries: be }), q))
              for (ne in le) ne in T || c(T, ne, le[ne]);
            else o(o.P + o.F * (_ || ie), L, le);
          return le;
        };
      },
      function (t, s) {
        t.exports = !0;
      },
      function (t, s, n) {
        var i = n(2),
          o = '__core-js_shared__',
          c = i[o] || (i[o] = {});
        t.exports = function (a) {
          return c[a] || (c[a] = {});
        };
      },
      function (t, s, n) {
        var i,
          o,
          c,
          a = n(7),
          u = n(41),
          l = n(25),
          h = n(16),
          f = n(2),
          d = f.process,
          p = f.setImmediate,
          _ = f.clearImmediate,
          y = f.MessageChannel,
          g = 0,
          w = {},
          S = 'onreadystatechange',
          O = function () {
            var v = +this;
            if (w.hasOwnProperty(v)) {
              var A = w[v];
              delete w[v], A();
            }
          },
          L = function (v) {
            O.call(v.data);
          };
        (p && _) ||
          ((p = function (v) {
            for (var A = [], I = 1; arguments.length > I; ) A.push(arguments[I++]);
            return (
              (w[++g] = function () {
                u(typeof v == 'function' ? v : Function(v), A);
              }),
              i(g),
              g
            );
          }),
          (_ = function (v) {
            delete w[v];
          }),
          n(11)(d) == 'process'
            ? (i = function (v) {
                d.nextTick(a(O, v, 1));
              })
            : y
              ? ((o = new y()),
                (c = o.port2),
                (o.port1.onmessage = L),
                (i = a(c.postMessage, c, 1)))
              : f.addEventListener && typeof postMessage == 'function' && !f.importScripts
                ? ((i = function (v) {
                    f.postMessage(v + '', '*');
                  }),
                  f.addEventListener('message', L, !1))
                : (i =
                    S in h('script')
                      ? function (v) {
                          l.appendChild(h('script'))[S] = function () {
                            l.removeChild(this), O.call(v);
                          };
                        }
                      : function (v) {
                          setTimeout(a(O, v, 1), 0);
                        })),
          (t.exports = { set: p, clear: _ });
      },
      function (t, s, n) {
        var i = n(20),
          o = Math.min;
        t.exports = function (c) {
          return c > 0 ? o(i(c), 9007199254740991) : 0;
        };
      },
      function (t, s, n) {
        var i = n(9);
        t.exports = function (o, c) {
          if (!i(o)) return o;
          var a, u;
          if (
            (c && typeof (a = o.toString) == 'function' && !i((u = a.call(o)))) ||
            (typeof (a = o.valueOf) == 'function' && !i((u = a.call(o)))) ||
            (!c && typeof (a = o.toString) == 'function' && !i((u = a.call(o))))
          )
            return u;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (t, s) {
        var n = 0,
          i = Math.random();
        t.exports = function (o) {
          return 'Symbol('.concat(o === void 0 ? '' : o, ')_', (++n + i).toString(36));
        };
      },
      function (t, s, n) {
        'use strict';
        function i(S) {
          return S && S.__esModule ? S : { default: S };
        }
        function o() {
          return process.platform !== 'win32'
            ? ''
            : process.arch === 'ia32' && process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')
              ? 'mixed'
              : 'native';
        }
        function c(S) {
          return (0, p.createHash)('sha256').update(S).digest('hex');
        }
        function a(S) {
          switch (y) {
            case 'darwin':
              return S.split('IOPlatformUUID')[1]
                .split(
                  `
`
                )[0]
                .replace(/\=|\s+|\"/gi, '')
                .toLowerCase();
            case 'win32':
              return S.toString()
                .split('REG_SZ')[1]
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'linux':
              return S.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'freebsd':
              return S.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            default:
              throw new Error('Unsupported platform: ' + process.platform);
          }
        }
        function u(S) {
          var O = a((0, d.execSync)(w[y]).toString());
          return S ? O : c(O);
        }
        function l(S) {
          return new f.default(function (O, L) {
            return (0, d.exec)(w[y], {}, function (v, A, I) {
              if (v) return L(new Error('Error while obtaining machine id: ' + v.stack));
              var F = a(A.toString());
              return O(S ? F : c(F));
            });
          });
        }
        Object.defineProperty(s, '__esModule', { value: !0 });
        var h = n(35),
          f = i(h);
        (s.machineIdSync = u), (s.machineId = l);
        var d = n(70),
          p = n(71),
          _ = process,
          y = _.platform,
          g = {
            native: '%windir%\\System32',
            mixed: '%windir%\\sysnative\\cmd.exe /c %windir%\\System32',
          },
          w = {
            darwin: 'ioreg -rd1 -c IOPlatformExpertDevice',
            win32:
              g[o()] +
              '\\REG.exe QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid',
            linux:
              '( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :',
            freebsd: 'kenv -q smbios.system.uuid || sysctl -n kern.hostuuid',
          };
      },
      function (t, s, n) {
        t.exports = { default: n(36), __esModule: !0 };
      },
      function (t, s, n) {
        n(66), n(68), n(69), n(67), (t.exports = n(6).Promise);
      },
      function (t, s) {
        t.exports = function () {};
      },
      function (t, s) {
        t.exports = function (n, i, o, c) {
          if (!(n instanceof i) || (c !== void 0 && c in n))
            throw TypeError(o + ': incorrect invocation!');
          return n;
        };
      },
      function (t, s, n) {
        var i = n(13),
          o = n(31),
          c = n(62);
        t.exports = function (a) {
          return function (u, l, h) {
            var f,
              d = i(u),
              p = o(d.length),
              _ = c(h, p);
            if (a && l != l) {
              for (; p > _; ) if (((f = d[_++]), f != f)) return !0;
            } else for (; p > _; _++) if ((a || _ in d) && d[_] === l) return a || _ || 0;
            return !a && -1;
          };
        };
      },
      function (t, d, n) {
        var i = n(7),
          o = n(44),
          c = n(43),
          a = n(3),
          u = n(31),
          l = n(64),
          h = {},
          f = {},
          d = (t.exports = function (p, _, y, g, w) {
            var S,
              O,
              L,
              v,
              A = w
                ? function () {
                    return p;
                  }
                : l(p),
              I = i(y, g, _ ? 2 : 1),
              F = 0;
            if (typeof A != 'function') throw TypeError(p + ' is not iterable!');
            if (c(A)) {
              for (S = u(p.length); S > F; F++)
                if (((v = _ ? I(a((O = p[F]))[0], O[1]) : I(p[F])), v === h || v === f)) return v;
            } else
              for (L = A.call(p); !(O = L.next()).done; )
                if (((v = o(L, I, O.value, _)), v === h || v === f)) return v;
          });
        (d.BREAK = h), (d.RETURN = f);
      },
      function (t, s) {
        t.exports = function (n, i, o) {
          var c = o === void 0;
          switch (i.length) {
            case 0:
              return c ? n() : n.call(o);
            case 1:
              return c ? n(i[0]) : n.call(o, i[0]);
            case 2:
              return c ? n(i[0], i[1]) : n.call(o, i[0], i[1]);
            case 3:
              return c ? n(i[0], i[1], i[2]) : n.call(o, i[0], i[1], i[2]);
            case 4:
              return c ? n(i[0], i[1], i[2], i[3]) : n.call(o, i[0], i[1], i[2], i[3]);
          }
          return n.apply(o, i);
        };
      },
      function (t, s, n) {
        var i = n(11);
        t.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function (o) {
              return i(o) == 'String' ? o.split('') : Object(o);
            };
      },
      function (t, s, n) {
        var i = n(10),
          o = n(1)('iterator'),
          c = Array.prototype;
        t.exports = function (a) {
          return a !== void 0 && (i.Array === a || c[o] === a);
        };
      },
      function (t, s, n) {
        var i = n(3);
        t.exports = function (o, c, a, u) {
          try {
            return u ? c(i(a)[0], a[1]) : c(a);
          } catch (h) {
            var l = o.return;
            throw (l !== void 0 && i(l.call(o)), h);
          }
        };
      },
      function (t, s, n) {
        'use strict';
        var i = n(49),
          o = n(17),
          c = n(18),
          a = {};
        n(5)(a, n(1)('iterator'), function () {
          return this;
        }),
          (t.exports = function (u, l, h) {
            (u.prototype = i(a, { next: o(1, h) })), c(u, l + ' Iterator');
          });
      },
      function (t, s, n) {
        var i = n(1)('iterator'),
          o = !1;
        try {
          var c = [7][i]();
          (c.return = function () {
            o = !0;
          }),
            Array.from(c, function () {
              throw 2;
            });
        } catch {}
        t.exports = function (a, u) {
          if (!u && !o) return !1;
          var l = !1;
          try {
            var h = [7],
              f = h[i]();
            (f.next = function () {
              return { done: (l = !0) };
            }),
              (h[i] = function () {
                return f;
              }),
              a(h);
          } catch {}
          return l;
        };
      },
      function (t, s) {
        t.exports = function (n, i) {
          return { value: i, done: !!n };
        };
      },
      function (t, s, n) {
        var i = n(2),
          o = n(30).set,
          c = i.MutationObserver || i.WebKitMutationObserver,
          a = i.process,
          u = i.Promise,
          l = n(11)(a) == 'process';
        t.exports = function () {
          var h,
            f,
            d,
            p = function () {
              var w, S;
              for (l && (w = a.domain) && w.exit(); h; ) {
                (S = h.fn), (h = h.next);
                try {
                  S();
                } catch (O) {
                  throw (h ? d() : (f = void 0), O);
                }
              }
              (f = void 0), w && w.enter();
            };
          if (l)
            d = function () {
              a.nextTick(p);
            };
          else if (c) {
            var _ = !0,
              y = document.createTextNode('');
            new c(p).observe(y, { characterData: !0 }),
              (d = function () {
                y.data = _ = !_;
              });
          } else if (u && u.resolve) {
            var g = u.resolve();
            d = function () {
              g.then(p);
            };
          } else
            d = function () {
              o.call(i, p);
            };
          return function (w) {
            var S = { fn: w, next: void 0 };
            f && (f.next = S), h || ((h = S), d()), (f = S);
          };
        };
      },
      function (t, s, n) {
        var i = n(3),
          o = n(50),
          c = n(22),
          a = n(19)('IE_PROTO'),
          u = function () {},
          l = 'prototype',
          h = function () {
            var f,
              d = n(16)('iframe'),
              p = c.length,
              _ = '>';
            for (
              d.style.display = 'none',
                n(25).appendChild(d),
                d.src = 'javascript:',
                f = d.contentWindow.document,
                f.open(),
                f.write('<script>document.F=Object</script' + _),
                f.close(),
                h = f.F;
              p--;

            )
              delete h[l][c[p]];
            return h();
          };
        t.exports =
          Object.create ||
          function (f, d) {
            var p;
            return (
              f !== null ? ((u[l] = i(f)), (p = new u()), (u[l] = null), (p[a] = f)) : (p = h()),
              d === void 0 ? p : o(p, d)
            );
          };
      },
      function (t, s, n) {
        var i = n(12),
          o = n(3),
          c = n(54);
        t.exports = n(4)
          ? Object.defineProperties
          : function (a, u) {
              o(a);
              for (var l, h = c(u), f = h.length, d = 0; f > d; ) i.f(a, (l = h[d++]), u[l]);
              return a;
            };
      },
      function (t, s, n) {
        var i = n(55),
          o = n(17),
          c = n(13),
          a = n(32),
          u = n(8),
          l = n(26),
          h = Object.getOwnPropertyDescriptor;
        s.f = n(4)
          ? h
          : function (f, d) {
              if (((f = c(f)), (d = a(d, !0)), l))
                try {
                  return h(f, d);
                } catch {}
              if (u(f, d)) return o(!i.f.call(f, d), f[d]);
            };
      },
      function (t, s, n) {
        var i = n(8),
          o = n(63),
          c = n(19)('IE_PROTO'),
          a = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (u) {
            return (
              (u = o(u)),
              i(u, c)
                ? u[c]
                : typeof u.constructor == 'function' && u instanceof u.constructor
                  ? u.constructor.prototype
                  : u instanceof Object
                    ? a
                    : null
            );
          };
      },
      function (t, s, n) {
        var i = n(8),
          o = n(13),
          c = n(39)(!1),
          a = n(19)('IE_PROTO');
        t.exports = function (u, l) {
          var h,
            f = o(u),
            d = 0,
            p = [];
          for (h in f) h != a && i(f, h) && p.push(h);
          for (; l.length > d; ) i(f, (h = l[d++])) && (~c(p, h) || p.push(h));
          return p;
        };
      },
      function (t, s, n) {
        var i = n(53),
          o = n(22);
        t.exports =
          Object.keys ||
          function (c) {
            return i(c, o);
          };
      },
      function (t, s) {
        s.f = {}.propertyIsEnumerable;
      },
      function (t, s, n) {
        var i = n(5);
        t.exports = function (o, c, a) {
          for (var u in c) a && o[u] ? (o[u] = c[u]) : i(o, u, c[u]);
          return o;
        };
      },
      function (t, s, n) {
        t.exports = n(5);
      },
      function (t, s, n) {
        var i = n(9),
          o = n(3),
          c = function (a, u) {
            if ((o(a), !i(u) && u !== null)) throw TypeError(u + ": can't set as prototype!");
          };
        t.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function (a, u, l) {
                  try {
                    (l = n(7)(Function.call, n(51).f(Object.prototype, '__proto__').set, 2)),
                      l(a, []),
                      (u = !(a instanceof Array));
                  } catch {
                    u = !0;
                  }
                  return function (h, f) {
                    return c(h, f), u ? (h.__proto__ = f) : l(h, f), h;
                  };
                })({}, !1)
              : void 0),
          check: c,
        };
      },
      function (t, s, n) {
        'use strict';
        var i = n(2),
          o = n(6),
          c = n(12),
          a = n(4),
          u = n(1)('species');
        t.exports = function (l) {
          var h = typeof o[l] == 'function' ? o[l] : i[l];
          a &&
            h &&
            !h[u] &&
            c.f(h, u, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (t, s, n) {
        var i = n(3),
          o = n(14),
          c = n(1)('species');
        t.exports = function (a, u) {
          var l,
            h = i(a).constructor;
          return h === void 0 || (l = i(h)[c]) == null ? u : o(l);
        };
      },
      function (t, s, n) {
        var i = n(20),
          o = n(15);
        t.exports = function (c) {
          return function (a, u) {
            var l,
              h,
              f = String(o(a)),
              d = i(u),
              p = f.length;
            return d < 0 || d >= p
              ? c
                ? ''
                : void 0
              : ((l = f.charCodeAt(d)),
                l < 55296 ||
                l > 56319 ||
                d + 1 === p ||
                (h = f.charCodeAt(d + 1)) < 56320 ||
                h > 57343
                  ? c
                    ? f.charAt(d)
                    : l
                  : c
                    ? f.slice(d, d + 2)
                    : ((l - 55296) << 10) + (h - 56320) + 65536);
          };
        };
      },
      function (t, s, n) {
        var i = n(20),
          o = Math.max,
          c = Math.min;
        t.exports = function (a, u) {
          return (a = i(a)), a < 0 ? o(a + u, 0) : c(a, u);
        };
      },
      function (t, s, n) {
        var i = n(15);
        t.exports = function (o) {
          return Object(i(o));
        };
      },
      function (t, s, n) {
        var i = n(21),
          o = n(1)('iterator'),
          c = n(10);
        t.exports = n(6).getIteratorMethod = function (a) {
          if (a != null) return a[o] || a['@@iterator'] || c[i(a)];
        };
      },
      function (t, s, n) {
        'use strict';
        var i = n(37),
          o = n(47),
          c = n(10),
          a = n(13);
        (t.exports = n(27)(
          Array,
          'Array',
          function (u, l) {
            (this._t = a(u)), (this._i = 0), (this._k = l);
          },
          function () {
            var u = this._t,
              l = this._k,
              h = this._i++;
            return !u || h >= u.length
              ? ((this._t = void 0), o(1))
              : l == 'keys'
                ? o(0, h)
                : l == 'values'
                  ? o(0, u[h])
                  : o(0, [h, u[h]]);
          },
          'values'
        )),
          (c.Arguments = c.Array),
          i('keys'),
          i('values'),
          i('entries');
      },
      function (t, s) {},
      function (t, s, n) {
        'use strict';
        var i,
          o,
          c,
          a = n(28),
          u = n(2),
          l = n(7),
          h = n(21),
          f = n(23),
          d = n(9),
          p = (n(3), n(14)),
          _ = n(38),
          y = n(40),
          g = (n(58).set, n(60)),
          w = n(30).set,
          S = n(48)(),
          O = 'Promise',
          L = u.TypeError,
          A = u.process,
          v = u[O],
          A = u.process,
          I = h(A) == 'process',
          F = function () {},
          q = !!(function () {
            try {
              var m = v.resolve(1),
                R = ((m.constructor = {})[n(1)('species')] = function (C) {
                  C(F, F);
                });
              return (I || typeof PromiseRejectionEvent == 'function') && m.then(F) instanceof R;
            } catch {}
          })(),
          le = function (m, R) {
            return m === R || (m === v && R === c);
          },
          ne = function (m) {
            var R;
            return !(!d(m) || typeof (R = m.then) != 'function') && R;
          },
          G = function (m) {
            return le(v, m) ? new Ee(m) : new o(m);
          },
          Ee = (o = function (m) {
            var R, C;
            (this.promise = new m(function (x, W) {
              if (R !== void 0 || C !== void 0) throw L('Bad Promise constructor');
              (R = x), (C = W);
            })),
              (this.resolve = p(R)),
              (this.reject = p(C));
          }),
          k = function (m) {
            try {
              m();
            } catch (R) {
              return { error: R };
            }
          },
          we = function (m, R) {
            if (!m._n) {
              m._n = !0;
              var C = m._c;
              S(function () {
                for (
                  var x = m._v,
                    W = m._s == 1,
                    dt = 0,
                    Bt = function (Ye) {
                      var Ne,
                        Zr,
                        Rr = W ? Ye.ok : Ye.fail,
                        gr = Ye.resolve,
                        Mt = Ye.reject,
                        Jr = Ye.domain;
                      try {
                        Rr
                          ? (W || (m._h == 2 && X(m), (m._h = 1)),
                            Rr === !0
                              ? (Ne = x)
                              : (Jr && Jr.enter(), (Ne = Rr(x)), Jr && Jr.exit()),
                            Ne === Ye.promise
                              ? Mt(L('Promise-chain cycle'))
                              : (Zr = ne(Ne))
                                ? Zr.call(Ne, gr, Mt)
                                : gr(Ne))
                          : Mt(x);
                      } catch (ff) {
                        Mt(ff);
                      }
                    };
                  C.length > dt;

                )
                  Bt(C[dt++]);
                (m._c = []), (m._n = !1), R && !m._h && ie(m);
              });
            }
          },
          ie = function (m) {
            w.call(u, function () {
              var R,
                C,
                x,
                W = m._v;
              if (
                (T(m) &&
                  ((R = k(function () {
                    I
                      ? A.emit('unhandledRejection', W, m)
                      : (C = u.onunhandledrejection)
                        ? C({ promise: m, reason: W })
                        : (x = u.console) && x.error && x.error('Unhandled promise rejection', W);
                  })),
                  (m._h = I || T(m) ? 2 : 1)),
                (m._a = void 0),
                R)
              )
                throw R.error;
            });
          },
          T = function (m) {
            if (m._h == 1) return !1;
            for (var R, C = m._a || m._c, x = 0; C.length > x; )
              if (((R = C[x++]), R.fail || !T(R.promise))) return !1;
            return !0;
          },
          X = function (m) {
            w.call(u, function () {
              var R;
              I
                ? A.emit('rejectionHandled', m)
                : (R = u.onrejectionhandled) && R({ promise: m, reason: m._v });
            });
          },
          z = function (m) {
            var R = this;
            R._d ||
              ((R._d = !0),
              (R = R._w || R),
              (R._v = m),
              (R._s = 2),
              R._a || (R._a = R._c.slice()),
              we(R, !0));
          },
          be = function (m) {
            var R,
              C = this;
            if (!C._d) {
              (C._d = !0), (C = C._w || C);
              try {
                if (C === m) throw L("Promise can't be resolved itself");
                (R = ne(m))
                  ? S(function () {
                      var x = { _w: C, _d: !1 };
                      try {
                        R.call(m, l(be, x, 1), l(z, x, 1));
                      } catch (W) {
                        z.call(x, W);
                      }
                    })
                  : ((C._v = m), (C._s = 1), we(C, !1));
              } catch (x) {
                z.call({ _w: C, _d: !1 }, x);
              }
            }
          };
        q ||
          ((v = function (m) {
            _(this, v, O, '_h'), p(m), i.call(this);
            try {
              m(l(be, this, 1), l(z, this, 1));
            } catch (R) {
              z.call(this, R);
            }
          }),
          (i = function (m) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }),
          (i.prototype = n(56)(v.prototype, {
            then: function (m, R) {
              var C = G(g(this, v));
              return (
                (C.ok = typeof m != 'function' || m),
                (C.fail = typeof R == 'function' && R),
                (C.domain = I ? A.domain : void 0),
                this._c.push(C),
                this._a && this._a.push(C),
                this._s && we(this, !1),
                C.promise
              );
            },
            catch: function (m) {
              return this.then(void 0, m);
            },
          })),
          (Ee = function () {
            var m = new i();
            (this.promise = m), (this.resolve = l(be, m, 1)), (this.reject = l(z, m, 1));
          })),
          f(f.G + f.W + f.F * !q, { Promise: v }),
          n(18)(v, O),
          n(59)(O),
          (c = n(6)[O]),
          f(f.S + f.F * !q, O, {
            reject: function (m) {
              var R = G(this),
                C = R.reject;
              return C(m), R.promise;
            },
          }),
          f(f.S + f.F * (a || !q), O, {
            resolve: function (m) {
              if (m instanceof v && le(m.constructor, this)) return m;
              var R = G(this),
                C = R.resolve;
              return C(m), R.promise;
            },
          }),
          f(
            f.S +
              f.F *
                !(
                  q &&
                  n(46)(function (m) {
                    v.all(m).catch(F);
                  })
                ),
            O,
            {
              all: function (m) {
                var R = this,
                  C = G(R),
                  x = C.resolve,
                  W = C.reject,
                  dt = k(function () {
                    var Bt = [],
                      Ye = 0,
                      Ne = 1;
                    y(m, !1, function (Zr) {
                      var Rr = Ye++,
                        gr = !1;
                      Bt.push(void 0),
                        Ne++,
                        R.resolve(Zr).then(function (Mt) {
                          gr || ((gr = !0), (Bt[Rr] = Mt), --Ne || x(Bt));
                        }, W);
                    }),
                      --Ne || x(Bt);
                  });
                return dt && W(dt.error), C.promise;
              },
              race: function (m) {
                var R = this,
                  C = G(R),
                  x = C.reject,
                  W = k(function () {
                    y(m, !1, function (dt) {
                      R.resolve(dt).then(C.resolve, x);
                    });
                  });
                return W && x(W.error), C.promise;
              },
            }
          );
      },
      function (t, s, n) {
        'use strict';
        var i = n(61)(!0);
        n(27)(
          String,
          'String',
          function (o) {
            (this._t = String(o)), (this._i = 0);
          },
          function () {
            var o,
              c = this._t,
              a = this._i;
            return a >= c.length
              ? { value: void 0, done: !0 }
              : ((o = i(c, a)), (this._i += o.length), { value: o, done: !1 });
          }
        );
      },
      function (t, s, n) {
        n(65);
        for (
          var i = n(2),
            o = n(5),
            c = n(10),
            a = n(1)('toStringTag'),
            u = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'],
            l = 0;
          l < 5;
          l++
        ) {
          var h = u[l],
            f = i[h],
            d = f && f.prototype;
          d && !d[a] && o(d, a, h), (c[h] = c.Array);
        }
      },
      function (t, s) {
        t.exports = require('child_process');
      },
      function (t, s) {
        t.exports = require('crypto');
      },
    ]);
  });
});
var Ze = E((pt) => {
  'use strict';
  vr();
  try {
    try {
      let { output: r } = B('nx/src/utils/output'),
        e;
      try {
        e = B('nx/src/utils/app-root').workspaceRoot;
      } catch {
        e = B('nx/src/utils/workspace-root').workspaceRoot;
      }
      (pt.workspaceRoot = e), (pt.output = r);
    } catch {
      let { output: e } = B('@nrwl/workspace/src/utilities/output'),
        { appRootPath: t } = B('@nrwl/tao/src/utils/app-root');
      (pt.workspaceRoot = t), (pt.output = e);
    }
  } catch {
    let e = (t) => {
      var s;
      return `${t.title}

${
  (s = t.bodyLines) == null
    ? void 0
    : s.join(`
`)
}`;
    };
    (pt.output = {
      note: (t) => console.info(e(t)),
      error: (t) => console.error(e(t)),
      warn: (t) => console.warn(e(t)),
      success: (t) => console.log(e(t)),
      addVerticalSeparator: () => '',
      addNewline: () =>
        console.log(`
`),
    }),
      (pt.workspaceRoot = process.cwd());
  }
});
var Ra = {};
Pe(Ra, {
  ACCESS_TOKEN: () => Or,
  DEFAULT_FILE_SIZE_LIMIT: () => kt,
  DISTRIBUTED_TASK_EXECUTION_INTERNAL_ERROR_STATUS_CODE: () => Uf,
  ENCRYPTION_KEY: () => _a,
  NO_COMPLETED_TASKS_TIMEOUT: () => Af,
  NO_MESSAGES_TIMEOUT: () => Lf,
  NUMBER_OF_AXIOS_RETRIES: () => Sr,
  NX_CLOUD_CONTRIBUTOR_TESTING: () => ts,
  NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT: () => Bf,
  NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE: () => Mf,
  NX_CLOUD_FORCE_METRICS: () => bn,
  NX_CLOUD_NO_TIMEOUTS: () => Se,
  NX_CLOUD_UNLIMITED_OUTPUT: () => Df,
  NX_NO_CLOUD: () => Ff,
  UNLIMITED_FILE_SIZE: () => Pt,
  UNLIMITED_TIMEOUT: () => Ft,
  VERBOSE_LOGGING: () => U,
  agentRunningInDistributedExecution: () => Pf,
  extractGitRef: () => qf,
  extractGitSha: () => qt,
  getBranch: () => Tr,
  getCIExecutionEnv: () => wr,
  getCIExecutionId: () => Nn,
  getCiEnvVars: () => $f,
  getMachineInfo: () => zf,
  getRunGroup: () => Ln,
  nxInvokedByRunner: () => kf,
  parseCommand: () => Vf,
});
function Pf(r) {
  return !!r;
}
function kf() {
  return process.env.NX_INVOKED_BY_RUNNER === 'true' || process.env.NX_CLOUD === 'false';
}
function qt() {
  try {
    return (0, In.execSync)('git rev-parse HEAD', { stdio: 'pipe' }).toString().trim();
  } catch {
    return;
  }
}
function qf() {
  try {
    return (0, In.execSync)('git rev-parse --symbolic-full-name HEAD', { stdio: 'pipe' })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function Gf() {
  try {
    let r = (0, Ea.readFileSync)((0, es.join)(Nf, 'nx-cloud.env'));
    return If.parse(r);
  } catch {
    return {};
  }
}
function Hf() {
  let r = Gf();
  (Or =
    process.env.NX_CLOUD_AUTH_TOKEN ||
    process.env.NX_CLOUD_ACCESS_TOKEN ||
    r.NX_CLOUD_AUTH_TOKEN ||
    r.NX_CLOUD_ACCESS_TOKEN),
    (_a = process.env.NX_CLOUD_ENCRYPTION_KEY || r.NX_CLOUD_ENCRYPTION_KEY),
    (U = process.env.NX_VERBOSE_LOGGING === 'true' || r.NX_VERBOSE_LOGGING === 'true'),
    (Se = process.env.NX_CLOUD_NO_TIMEOUTS === 'true' || r.NX_CLOUD_NO_TIMEOUTS === 'true'),
    (ts =
      process.env.NX_CLOUD_CONTRIBUTOR_TESTING === 'true' ||
      r.NX_CLOUD_CONTRIBUTOR_TESTING === 'true');
}
function Nn() {
  return ya();
}
function ya() {
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
function wr() {
  return process.env.NX_CI_EXECUTION_ENV ?? '';
}
function Ln() {
  if (process.env.NX_RUN_GROUP !== void 0) return process.env.NX_RUN_GROUP;
  let r = ya();
  return r ? (wr() ? `${r}-${wr()}` : r) : qt();
}
function Tr() {
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
function zf() {
  let r = require('os'),
    e = (0, ma.createHash)('md5');
  return (
    e.update(bf()),
    {
      machineId: e.digest('base64'),
      platform: r.platform(),
      version: r.version ? r.version() : '',
      cpuCores: r.cpus().length,
    }
  );
}
function Vf() {
  let r = (0, es.parse)(process.argv[1]).name,
    e = `${process.argv.slice(2).join(' ')}`;
  return `${r} ${e}`;
}
function $f(r) {
  let e = Xf(),
    t = {};
  return (
    r == 'auto'
      ? (t = e)
      : r &&
        r
          .split(',')
          .map((s) => s.trim())
          .forEach((s) => {
            e[s] && (t[s] = e[s]);
          }),
    Object.keys(e)
      .filter((s) => s.startsWith('NX_'))
      .forEach((s) => {
        t[s] = e[s];
      }),
    U &&
      (pa.note({ title: 'Environment variables passed to cloud:', bodyLines: Object.keys(t) }),
      pa.addNewline()),
    t
  );
}
function Xf() {
  let r = {};
  for (let e of Object.keys(process.env))
    e != null && !jf.includes(e) && process.env[e] && (r[e] = process.env[e]);
  return r;
}
var In,
  ma,
  Ea,
  es,
  If,
  bf,
  pa,
  Nf,
  Ft,
  Lf,
  Af,
  Pt,
  Df,
  kt,
  Uf,
  Bf,
  Mf,
  bn,
  Sr,
  Ff,
  Or,
  _a,
  U,
  Se,
  ts,
  jf,
  Je = ee(() => {
    'use strict';
    (In = require('child_process')),
      (ma = require('crypto')),
      (Ea = require('fs')),
      (es = require('path'));
    ca();
    (If = fa()),
      ({ machineIdSync: bf } = da()),
      ({ output: pa, workspaceRoot: Nf } = Ze()),
      (Ft = 9999999),
      (Lf = process.env.NX_CLOUD_AGENT_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_AGENT_TIMEOUT_MS)
        : 36e5),
      (Af = process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS)
        : 36e5),
      (Pt = 1e3 * 1e3 * 1e4),
      (Df = process.env.NX_CLOUD_UNLIMITED_OUTPUT === 'true'),
      (kt = 1e3 * 1e3 * 300),
      (Uf = 166),
      (Bf = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT
        ? Number(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT)
        : null),
      (Mf = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE != 'false'),
      (bn = process.env.NX_CLOUD_FORCE_METRICS === 'true'),
      (Sr = process.env.NX_CLOUD_NUMBER_OF_RETRIES
        ? Number(process.env.NX_CLOUD_NUMBER_OF_RETRIES)
        : aa()
          ? 10
          : 1),
      (Ff = process.env.NX_NO_CLOUD === 'true');
    Hf();
    jf = [
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
function Gt(r) {
  return new Promise((e) => {
    setTimeout(() => e(null), r);
  });
}
var An = ee(() => {
  'use strict';
});
var Dn = E((B_, ga) => {
  'use strict';
  ga.exports = function (e, t) {
    return function () {
      for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
      return e.apply(t, n);
    };
  };
});
var re = E((M_, wa) => {
  'use strict';
  var Wf = Dn(),
    mt = Object.prototype.toString;
  function Mn(r) {
    return mt.call(r) === '[object Array]';
  }
  function Un(r) {
    return typeof r > 'u';
  }
  function Kf(r) {
    return (
      r !== null &&
      !Un(r) &&
      r.constructor !== null &&
      !Un(r.constructor) &&
      typeof r.constructor.isBuffer == 'function' &&
      r.constructor.isBuffer(r)
    );
  }
  function Yf(r) {
    return mt.call(r) === '[object ArrayBuffer]';
  }
  function Zf(r) {
    return typeof FormData < 'u' && r instanceof FormData;
  }
  function Jf(r) {
    var e;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (e = ArrayBuffer.isView(r))
        : (e = r && r.buffer && r.buffer instanceof ArrayBuffer),
      e
    );
  }
  function Qf(r) {
    return typeof r == 'string';
  }
  function ed(r) {
    return typeof r == 'number';
  }
  function va(r) {
    return r !== null && typeof r == 'object';
  }
  function rs(r) {
    if (mt.call(r) !== '[object Object]') return !1;
    var e = Object.getPrototypeOf(r);
    return e === null || e === Object.prototype;
  }
  function td(r) {
    return mt.call(r) === '[object Date]';
  }
  function rd(r) {
    return mt.call(r) === '[object File]';
  }
  function sd(r) {
    return mt.call(r) === '[object Blob]';
  }
  function Ca(r) {
    return mt.call(r) === '[object Function]';
  }
  function nd(r) {
    return va(r) && Ca(r.pipe);
  }
  function id(r) {
    return typeof URLSearchParams < 'u' && r instanceof URLSearchParams;
  }
  function od(r) {
    return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, '');
  }
  function ad() {
    return typeof navigator < 'u' &&
      (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  }
  function Fn(r, e) {
    if (!(r === null || typeof r > 'u'))
      if ((typeof r != 'object' && (r = [r]), Mn(r)))
        for (var t = 0, s = r.length; t < s; t++) e.call(null, r[t], t, r);
      else for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.call(null, r[n], n, r);
  }
  function Bn() {
    var r = {};
    function e(n, i) {
      rs(r[i]) && rs(n)
        ? (r[i] = Bn(r[i], n))
        : rs(n)
          ? (r[i] = Bn({}, n))
          : Mn(n)
            ? (r[i] = n.slice())
            : (r[i] = n);
    }
    for (var t = 0, s = arguments.length; t < s; t++) Fn(arguments[t], e);
    return r;
  }
  function cd(r, e, t) {
    return (
      Fn(e, function (n, i) {
        t && typeof n == 'function' ? (r[i] = Wf(n, t)) : (r[i] = n);
      }),
      r
    );
  }
  function ud(r) {
    return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
  }
  wa.exports = {
    isArray: Mn,
    isArrayBuffer: Yf,
    isBuffer: Kf,
    isFormData: Zf,
    isArrayBufferView: Jf,
    isString: Qf,
    isNumber: ed,
    isObject: va,
    isPlainObject: rs,
    isUndefined: Un,
    isDate: td,
    isFile: rd,
    isBlob: sd,
    isFunction: Ca,
    isStream: nd,
    isURLSearchParams: id,
    isStandardBrowserEnv: ad,
    forEach: Fn,
    merge: Bn,
    extend: cd,
    trim: od,
    stripBOM: ud,
  };
});
var ss = E((F_, Oa) => {
  'use strict';
  var Ht = re();
  function Sa(r) {
    return encodeURIComponent(r)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  Oa.exports = function (e, t, s) {
    if (!t) return e;
    var n;
    if (s) n = s(t);
    else if (Ht.isURLSearchParams(t)) n = t.toString();
    else {
      var i = [];
      Ht.forEach(t, function (a, u) {
        a === null ||
          typeof a > 'u' ||
          (Ht.isArray(a) ? (u = u + '[]') : (a = [a]),
          Ht.forEach(a, function (h) {
            Ht.isDate(h) ? (h = h.toISOString()) : Ht.isObject(h) && (h = JSON.stringify(h)),
              i.push(Sa(u) + '=' + Sa(h));
          }));
      }),
        (n = i.join('&'));
    }
    if (n) {
      var o = e.indexOf('#');
      o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf('?') === -1 ? '?' : '&') + n);
    }
    return e;
  };
});
var xa = E((P_, Ta) => {
  'use strict';
  var ld = re();
  function ns() {
    this.handlers = [];
  }
  ns.prototype.use = function (e, t, s) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  ns.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  };
  ns.prototype.forEach = function (e) {
    ld.forEach(this.handlers, function (s) {
      s !== null && e(s);
    });
  };
  Ta.exports = ns;
});
var ba = E((k_, Ia) => {
  'use strict';
  var hd = re();
  Ia.exports = function (e, t) {
    hd.forEach(e, function (n, i) {
      i !== t && i.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[i]);
    });
  };
});
var is = E((q_, Na) => {
  'use strict';
  Na.exports = function (e, t, s, n, i) {
    return (
      (e.config = t),
      s && (e.code = s),
      (e.request = n),
      (e.response = i),
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
var os = E((G_, La) => {
  'use strict';
  var fd = is();
  La.exports = function (e, t, s, n, i) {
    var o = new Error(e);
    return fd(o, t, s, n, i);
  };
});
var Pn = E((H_, Aa) => {
  'use strict';
  var dd = os();
  Aa.exports = function (e, t, s) {
    var n = s.config.validateStatus;
    !s.status || !n || n(s.status)
      ? e(s)
      : t(dd('Request failed with status code ' + s.status, s.config, null, s.request, s));
  };
});
var Ua = E((z_, Da) => {
  'use strict';
  var as = re();
  Da.exports = as.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (t, s, n, i, o, c) {
            var a = [];
            a.push(t + '=' + encodeURIComponent(s)),
              as.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
              as.isString(i) && a.push('path=' + i),
              as.isString(o) && a.push('domain=' + o),
              c === !0 && a.push('secure'),
              (document.cookie = a.join('; '));
          },
          read: function (t) {
            var s = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'));
            return s ? decodeURIComponent(s[3]) : null;
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
var Ma = E((V_, Ba) => {
  'use strict';
  Ba.exports = function (e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  };
});
var Pa = E((j_, Fa) => {
  'use strict';
  Fa.exports = function (e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
  };
});
var kn = E(($_, ka) => {
  'use strict';
  var pd = Ma(),
    md = Pa();
  ka.exports = function (e, t) {
    return e && !pd(t) ? md(e, t) : t;
  };
});
var Ga = E((X_, qa) => {
  'use strict';
  var qn = re(),
    Ed = [
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
  qa.exports = function (e) {
    var t = {},
      s,
      n,
      i;
    return (
      e &&
        qn.forEach(
          e.split(`
`),
          function (c) {
            if (
              ((i = c.indexOf(':')),
              (s = qn.trim(c.substr(0, i)).toLowerCase()),
              (n = qn.trim(c.substr(i + 1))),
              s)
            ) {
              if (t[s] && Ed.indexOf(s) >= 0) return;
              s === 'set-cookie'
                ? (t[s] = (t[s] ? t[s] : []).concat([n]))
                : (t[s] = t[s] ? t[s] + ', ' + n : n);
            }
          }
        ),
      t
    );
  };
});
var Va = E((W_, za) => {
  'use strict';
  var Ha = re();
  za.exports = Ha.isStandardBrowserEnv()
    ? (function () {
        var e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement('a'),
          s;
        function n(i) {
          var o = i;
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
          (s = n(window.location.href)),
          function (o) {
            var c = Ha.isString(o) ? n(o) : o;
            return c.protocol === s.protocol && c.host === s.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var $a = E((K_, ja) => {
  'use strict';
  var cs = re(),
    _d = Pn(),
    yd = Ua(),
    Rd = ss(),
    gd = kn(),
    vd = Ga(),
    Cd = Va(),
    Gn = os();
  ja.exports = function (e) {
    return new Promise(function (s, n) {
      var i = e.data,
        o = e.headers,
        c = e.responseType;
      cs.isFormData(i) && delete o['Content-Type'];
      var a = new XMLHttpRequest();
      if (e.auth) {
        var u = e.auth.username || '',
          l = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
        o.Authorization = 'Basic ' + btoa(u + ':' + l);
      }
      var h = gd(e.baseURL, e.url);
      a.open(e.method.toUpperCase(), Rd(h, e.params, e.paramsSerializer), !0),
        (a.timeout = e.timeout);
      function f() {
        if (a) {
          var p = 'getAllResponseHeaders' in a ? vd(a.getAllResponseHeaders()) : null,
            _ = !c || c === 'text' || c === 'json' ? a.responseText : a.response,
            y = {
              data: _,
              status: a.status,
              statusText: a.statusText,
              headers: p,
              config: e,
              request: a,
            };
          _d(s, n, y), (a = null);
        }
      }
      if (
        ('onloadend' in a
          ? (a.onloadend = f)
          : (a.onreadystatechange = function () {
              !a ||
                a.readyState !== 4 ||
                (a.status === 0 && !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                setTimeout(f);
            }),
        (a.onabort = function () {
          a && (n(Gn('Request aborted', e, 'ECONNABORTED', a)), (a = null));
        }),
        (a.onerror = function () {
          n(Gn('Network Error', e, null, a)), (a = null);
        }),
        (a.ontimeout = function () {
          var _ = 'timeout of ' + e.timeout + 'ms exceeded';
          e.timeoutErrorMessage && (_ = e.timeoutErrorMessage),
            n(
              Gn(
                _,
                e,
                e.transitional && e.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                a
              )
            ),
            (a = null);
        }),
        cs.isStandardBrowserEnv())
      ) {
        var d =
          (e.withCredentials || Cd(h)) && e.xsrfCookieName ? yd.read(e.xsrfCookieName) : void 0;
        d && (o[e.xsrfHeaderName] = d);
      }
      'setRequestHeader' in a &&
        cs.forEach(o, function (_, y) {
          typeof i > 'u' && y.toLowerCase() === 'content-type'
            ? delete o[y]
            : a.setRequestHeader(y, _);
        }),
        cs.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials),
        c && c !== 'json' && (a.responseType = e.responseType),
        typeof e.onDownloadProgress == 'function' &&
          a.addEventListener('progress', e.onDownloadProgress),
        typeof e.onUploadProgress == 'function' &&
          a.upload &&
          a.upload.addEventListener('progress', e.onUploadProgress),
        e.cancelToken &&
          e.cancelToken.promise.then(function (_) {
            a && (a.abort(), n(_), (a = null));
          }),
        i || (i = null),
        a.send(i);
    });
  };
});
var Wa = E((Y_, Xa) => {
  'use strict';
  var zt = 1e3,
    Vt = zt * 60,
    jt = Vt * 60,
    Et = jt * 24,
    wd = Et * 7,
    Sd = Et * 365.25;
  Xa.exports = function (r, e) {
    e = e || {};
    var t = typeof r;
    if (t === 'string' && r.length > 0) return Od(r);
    if (t === 'number' && isFinite(r)) return e.long ? xd(r) : Td(r);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(r));
  };
  function Od(r) {
    if (((r = String(r)), !(r.length > 100))) {
      var e =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          r
        );
      if (e) {
        var t = parseFloat(e[1]),
          s = (e[2] || 'ms').toLowerCase();
        switch (s) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return t * Sd;
          case 'weeks':
          case 'week':
          case 'w':
            return t * wd;
          case 'days':
          case 'day':
          case 'd':
            return t * Et;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return t * jt;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return t * Vt;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return t * zt;
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
  function Td(r) {
    var e = Math.abs(r);
    return e >= Et
      ? Math.round(r / Et) + 'd'
      : e >= jt
        ? Math.round(r / jt) + 'h'
        : e >= Vt
          ? Math.round(r / Vt) + 'm'
          : e >= zt
            ? Math.round(r / zt) + 's'
            : r + 'ms';
  }
  function xd(r) {
    var e = Math.abs(r);
    return e >= Et
      ? us(r, e, Et, 'day')
      : e >= jt
        ? us(r, e, jt, 'hour')
        : e >= Vt
          ? us(r, e, Vt, 'minute')
          : e >= zt
            ? us(r, e, zt, 'second')
            : r + ' ms';
  }
  function us(r, e, t, s) {
    var n = e >= t * 1.5;
    return Math.round(r / t) + ' ' + s + (n ? 's' : '');
  }
});
var Hn = E((Z_, Ka) => {
  'use strict';
  function Id(r) {
    (t.debug = t),
      (t.default = t),
      (t.coerce = a),
      (t.disable = i),
      (t.enable = n),
      (t.enabled = o),
      (t.humanize = Wa()),
      (t.destroy = u),
      Object.keys(r).forEach((l) => {
        t[l] = r[l];
      }),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {});
    function e(l) {
      let h = 0;
      for (let f = 0; f < l.length; f++) (h = (h << 5) - h + l.charCodeAt(f)), (h |= 0);
      return t.colors[Math.abs(h) % t.colors.length];
    }
    t.selectColor = e;
    function t(l) {
      let h,
        f = null,
        d,
        p;
      function _(...y) {
        if (!_.enabled) return;
        let g = _,
          w = Number(new Date()),
          S = w - (h || w);
        (g.diff = S),
          (g.prev = h),
          (g.curr = w),
          (h = w),
          (y[0] = t.coerce(y[0])),
          typeof y[0] != 'string' && y.unshift('%O');
        let O = 0;
        (y[0] = y[0].replace(/%([a-zA-Z%])/g, (v, A) => {
          if (v === '%%') return '%';
          O++;
          let I = t.formatters[A];
          if (typeof I == 'function') {
            let F = y[O];
            (v = I.call(g, F)), y.splice(O, 1), O--;
          }
          return v;
        })),
          t.formatArgs.call(g, y),
          (g.log || t.log).apply(g, y);
      }
      return (
        (_.namespace = l),
        (_.useColors = t.useColors()),
        (_.color = t.selectColor(l)),
        (_.extend = s),
        (_.destroy = t.destroy),
        Object.defineProperty(_, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            f !== null ? f : (d !== t.namespaces && ((d = t.namespaces), (p = t.enabled(l))), p),
          set: (y) => {
            f = y;
          },
        }),
        typeof t.init == 'function' && t.init(_),
        _
      );
    }
    function s(l, h) {
      let f = t(this.namespace + (typeof h > 'u' ? ':' : h) + l);
      return (f.log = this.log), f;
    }
    function n(l) {
      t.save(l), (t.namespaces = l), (t.names = []), (t.skips = []);
      let h,
        f = (typeof l == 'string' ? l : '').split(/[\s,]+/),
        d = f.length;
      for (h = 0; h < d; h++)
        f[h] &&
          ((l = f[h].replace(/\*/g, '.*?')),
          l[0] === '-'
            ? t.skips.push(new RegExp('^' + l.slice(1) + '$'))
            : t.names.push(new RegExp('^' + l + '$')));
    }
    function i() {
      let l = [...t.names.map(c), ...t.skips.map(c).map((h) => '-' + h)].join(',');
      return t.enable(''), l;
    }
    function o(l) {
      if (l[l.length - 1] === '*') return !0;
      let h, f;
      for (h = 0, f = t.skips.length; h < f; h++) if (t.skips[h].test(l)) return !1;
      for (h = 0, f = t.names.length; h < f; h++) if (t.names[h].test(l)) return !0;
      return !1;
    }
    function c(l) {
      return l
        .toString()
        .substring(2, l.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function a(l) {
      return l instanceof Error ? l.stack || l.message : l;
    }
    function u() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
      );
    }
    return t.enable(t.load()), t;
  }
  Ka.exports = Id;
});
var Ya = E((he, ls) => {
  'use strict';
  he.formatArgs = Nd;
  he.save = Ld;
  he.load = Ad;
  he.useColors = bd;
  he.storage = Dd();
  he.destroy = (() => {
    let r = !1;
    return () => {
      r ||
        ((r = !0),
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        ));
    };
  })();
  he.colors = [
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
  function bd() {
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
  function Nd(r) {
    if (
      ((r[0] =
        (this.useColors ? '%c' : '') +
        this.namespace +
        (this.useColors ? ' %c' : ' ') +
        r[0] +
        (this.useColors ? '%c ' : ' ') +
        '+' +
        ls.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let e = 'color: ' + this.color;
    r.splice(1, 0, e, 'color: inherit');
    let t = 0,
      s = 0;
    r[0].replace(/%[a-zA-Z%]/g, (n) => {
      n !== '%%' && (t++, n === '%c' && (s = t));
    }),
      r.splice(s, 0, e);
  }
  he.log = console.debug || console.log || (() => {});
  function Ld(r) {
    try {
      r ? he.storage.setItem('debug', r) : he.storage.removeItem('debug');
    } catch {}
  }
  function Ad() {
    let r;
    try {
      r = he.storage.getItem('debug');
    } catch {}
    return !r && typeof process < 'u' && 'env' in process && (r = process.env.DEBUG), r;
  }
  function Dd() {
    try {
      return localStorage;
    } catch {}
  }
  ls.exports = Hn()(he);
  var { formatters: Ud } = ls.exports;
  Ud.j = function (r) {
    try {
      return JSON.stringify(r);
    } catch (e) {
      return '[UnexpectedJSONParseError]: ' + e.message;
    }
  };
});
var Ja = E((J_, Za) => {
  'use strict';
  Za.exports = (r, e = process.argv) => {
    let t = r.startsWith('-') ? '' : r.length === 1 ? '-' : '--',
      s = e.indexOf(t + r),
      n = e.indexOf('--');
    return s !== -1 && (n === -1 || s < n);
  };
});
var tc = E((Q_, ec) => {
  'use strict';
  var Bd = require('os'),
    Qa = require('tty'),
    _e = Ja(),
    { env: V } = process,
    Qe;
  _e('no-color') || _e('no-colors') || _e('color=false') || _e('color=never')
    ? (Qe = 0)
    : (_e('color') || _e('colors') || _e('color=true') || _e('color=always')) && (Qe = 1);
  'FORCE_COLOR' in V &&
    (V.FORCE_COLOR === 'true'
      ? (Qe = 1)
      : V.FORCE_COLOR === 'false'
        ? (Qe = 0)
        : (Qe = V.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(V.FORCE_COLOR, 10), 3)));
  function zn(r) {
    return r === 0 ? !1 : { level: r, hasBasic: !0, has256: r >= 2, has16m: r >= 3 };
  }
  function Vn(r, e) {
    if (Qe === 0) return 0;
    if (_e('color=16m') || _e('color=full') || _e('color=truecolor')) return 3;
    if (_e('color=256')) return 2;
    if (r && !e && Qe === void 0) return 0;
    let t = Qe || 0;
    if (V.TERM === 'dumb') return t;
    if (process.platform === 'win32') {
      let s = Bd.release().split('.');
      return Number(s[0]) >= 10 && Number(s[2]) >= 10586 ? (Number(s[2]) >= 14931 ? 3 : 2) : 1;
    }
    if ('CI' in V)
      return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(
        (s) => s in V
      ) || V.CI_NAME === 'codeship'
        ? 1
        : t;
    if ('TEAMCITY_VERSION' in V)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(V.TEAMCITY_VERSION) ? 1 : 0;
    if (V.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in V) {
      let s = parseInt((V.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (V.TERM_PROGRAM) {
        case 'iTerm.app':
          return s >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    return /-256(color)?$/i.test(V.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(V.TERM) ||
          'COLORTERM' in V
        ? 1
        : t;
  }
  function Md(r) {
    let e = Vn(r, r && r.isTTY);
    return zn(e);
  }
  ec.exports = {
    supportsColor: Md,
    stdout: zn(Vn(!0, Qa.isatty(1))),
    stderr: zn(Vn(!0, Qa.isatty(2))),
  };
});
var sc = E(($, fs) => {
  'use strict';
  var Fd = require('tty'),
    hs = require('util');
  $.init = Vd;
  $.log = Gd;
  $.formatArgs = kd;
  $.save = Hd;
  $.load = zd;
  $.useColors = Pd;
  $.destroy = hs.deprecate(
    () => {},
    'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
  );
  $.colors = [6, 2, 3, 4, 5, 1];
  try {
    let r = tc();
    r &&
      (r.stderr || r).level >= 2 &&
      ($.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76,
        77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162,
        163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198,
        199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch {}
  $.inspectOpts = Object.keys(process.env)
    .filter((r) => /^debug_/i.test(r))
    .reduce((r, e) => {
      let t = e
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (n, i) => i.toUpperCase()),
        s = process.env[e];
      return (
        /^(yes|on|true|enabled)$/i.test(s)
          ? (s = !0)
          : /^(no|off|false|disabled)$/i.test(s)
            ? (s = !1)
            : s === 'null'
              ? (s = null)
              : (s = Number(s)),
        (r[t] = s),
        r
      );
    }, {});
  function Pd() {
    return 'colors' in $.inspectOpts ? !!$.inspectOpts.colors : Fd.isatty(process.stderr.fd);
  }
  function kd(r) {
    let { namespace: e, useColors: t } = this;
    if (t) {
      let s = this.color,
        n = '\x1B[3' + (s < 8 ? s : '8;5;' + s),
        i = `  ${n};1m${e} \x1B[0m`;
      (r[0] =
        i +
        r[0]
          .split(
            `
`
          )
          .join(
            `
` + i
          )),
        r.push(n + 'm+' + fs.exports.humanize(this.diff) + '\x1B[0m');
    } else r[0] = qd() + e + ' ' + r[0];
  }
  function qd() {
    return $.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
  }
  function Gd(...r) {
    return process.stderr.write(
      hs.format(...r) +
        `
`
    );
  }
  function Hd(r) {
    r ? (process.env.DEBUG = r) : delete process.env.DEBUG;
  }
  function zd() {
    return process.env.DEBUG;
  }
  function Vd(r) {
    r.inspectOpts = {};
    let e = Object.keys($.inspectOpts);
    for (let t = 0; t < e.length; t++) r.inspectOpts[e[t]] = $.inspectOpts[e[t]];
  }
  fs.exports = Hn()($);
  var { formatters: rc } = fs.exports;
  rc.o = function (r) {
    return (
      (this.inspectOpts.colors = this.useColors),
      hs
        .inspect(r, this.inspectOpts)
        .split(
          `
`
        )
        .map((e) => e.trim())
        .join(' ')
    );
  };
  rc.O = function (r) {
    return (this.inspectOpts.colors = this.useColors), hs.inspect(r, this.inspectOpts);
  };
});
var nc = E((ey, jn) => {
  'use strict';
  typeof process > 'u' || process.type === 'renderer' || process.browser === !0 || process.__nwjs
    ? (jn.exports = Ya())
    : (jn.exports = sc());
});
var oc = E((ty, ic) => {
  'use strict';
  var xr;
  ic.exports = function () {
    if (!xr) {
      try {
        xr = nc()('follow-redirects');
      } catch {}
      typeof xr != 'function' && (xr = function () {});
    }
    xr.apply(null, arguments);
  };
});
var Qn = E((ry, Jn) => {
  'use strict';
  var _t = require('url'),
    $n = _t.URL,
    jd = require('http'),
    $d = require('https'),
    Wn = require('stream').Writable,
    uc = require('assert'),
    lc = oc(),
    Kn = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'],
    Yn = Object.create(null);
  Kn.forEach(function (r) {
    Yn[r] = function (e, t, s) {
      this._redirectable.emit(r, e, t, s);
    };
  });
  var Xd = br('ERR_INVALID_URL', 'Invalid URL', TypeError),
    ac = br('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed'),
    Wd = br('ERR_FR_TOO_MANY_REDIRECTS', 'Maximum number of redirects exceeded'),
    Kd = br('ERR_FR_MAX_BODY_LENGTH_EXCEEDED', 'Request body larger than maxBodyLength limit'),
    Yd = br('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    Zd = Wn.prototype.destroy || fc;
  function oe(r, e) {
    Wn.call(this),
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
    (this._onNativeResponse = function (s) {
      t._processResponse(s);
    }),
      this._performRequest();
  }
  oe.prototype = Object.create(Wn.prototype);
  oe.prototype.abort = function () {
    Zn(this._currentRequest), this._currentRequest.abort(), this.emit('abort');
  };
  oe.prototype.destroy = function (r) {
    return Zn(this._currentRequest, r), Zd.call(this, r), this;
  };
  oe.prototype.write = function (r, e, t) {
    if (this._ending) throw new Yd();
    if (!yt(r) && !Qd(r)) throw new TypeError('data should be a string, Buffer or Uint8Array');
    if ((Ir(e) && ((t = e), (e = null)), r.length === 0)) {
      t && t();
      return;
    }
    this._requestBodyLength + r.length <= this._options.maxBodyLength
      ? ((this._requestBodyLength += r.length),
        this._requestBodyBuffers.push({ data: r, encoding: e }),
        this._currentRequest.write(r, e, t))
      : (this.emit('error', new Kd()), this.abort());
  };
  oe.prototype.end = function (r, e, t) {
    if ((Ir(r) ? ((t = r), (r = e = null)) : Ir(e) && ((t = e), (e = null)), !r))
      (this._ended = this._ending = !0), this._currentRequest.end(null, null, t);
    else {
      var s = this,
        n = this._currentRequest;
      this.write(r, e, function () {
        (s._ended = !0), n.end(null, null, t);
      }),
        (this._ending = !0);
    }
  };
  oe.prototype.setHeader = function (r, e) {
    (this._options.headers[r] = e), this._currentRequest.setHeader(r, e);
  };
  oe.prototype.removeHeader = function (r) {
    delete this._options.headers[r], this._currentRequest.removeHeader(r);
  };
  oe.prototype.setTimeout = function (r, e) {
    var t = this;
    function s(o) {
      o.setTimeout(r), o.removeListener('timeout', o.destroy), o.addListener('timeout', o.destroy);
    }
    function n(o) {
      t._timeout && clearTimeout(t._timeout),
        (t._timeout = setTimeout(function () {
          t.emit('timeout'), i();
        }, r)),
        s(o);
    }
    function i() {
      t._timeout && (clearTimeout(t._timeout), (t._timeout = null)),
        t.removeListener('abort', i),
        t.removeListener('error', i),
        t.removeListener('response', i),
        t.removeListener('close', i),
        e && t.removeListener('timeout', e),
        t.socket || t._currentRequest.removeListener('socket', n);
    }
    return (
      e && this.on('timeout', e),
      this.socket ? n(this.socket) : this._currentRequest.once('socket', n),
      this.on('socket', s),
      this.on('abort', i),
      this.on('error', i),
      this.on('response', i),
      this.on('close', i),
      this
    );
  };
  ['flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive'].forEach(function (r) {
    oe.prototype[r] = function (e, t) {
      return this._currentRequest[r](e, t);
    };
  });
  ['aborted', 'connection', 'socket'].forEach(function (r) {
    Object.defineProperty(oe.prototype, r, {
      get: function () {
        return this._currentRequest[r];
      },
    });
  });
  oe.prototype._sanitizeOptions = function (r) {
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
  oe.prototype._performRequest = function () {
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
    var s = (this._currentRequest = e.request(this._options, this._onNativeResponse));
    s._redirectable = this;
    for (var n of Kn) s.on(n, Yn[n]);
    if (
      ((this._currentUrl = /^\//.test(this._options.path)
        ? _t.format(this._options)
        : this._options.path),
      this._isRedirect)
    ) {
      var i = 0,
        o = this,
        c = this._requestBodyBuffers;
      (function a(u) {
        if (s === o._currentRequest)
          if (u) o.emit('error', u);
          else if (i < c.length) {
            var l = c[i++];
            s.finished || s.write(l.data, l.encoding, a);
          } else o._ended && s.end();
      })();
    }
  };
  oe.prototype._processResponse = function (r) {
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
      (Zn(this._currentRequest), r.destroy(), ++this._redirectCount > this._options.maxRedirects)
    ) {
      this.emit('error', new Wd());
      return;
    }
    var s,
      n = this._options.beforeRedirect;
    n && (s = Object.assign({ Host: r.req.getHeader('host') }, this._options.headers));
    var i = this._options.method;
    (((e === 301 || e === 302) && this._options.method === 'POST') ||
      (e === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
      ((this._options.method = 'GET'),
      (this._requestBodyBuffers = []),
      Xn(/^content-/i, this._options.headers));
    var o = Xn(/^host$/i, this._options.headers),
      c = _t.parse(this._currentUrl),
      a = o || c.host,
      u = /^\w+:/.test(t) ? this._currentUrl : _t.format(Object.assign(c, { host: a })),
      l;
    try {
      l = _t.resolve(u, t);
    } catch (p) {
      this.emit('error', new ac({ cause: p }));
      return;
    }
    lc('redirecting to', l), (this._isRedirect = !0);
    var h = _t.parse(l);
    if (
      (Object.assign(this._options, h),
      ((h.protocol !== c.protocol && h.protocol !== 'https:') ||
        (h.host !== a && !Jd(h.host, a))) &&
        Xn(/^(?:authorization|cookie)$/i, this._options.headers),
      Ir(n))
    ) {
      var f = { headers: r.headers, statusCode: e },
        d = { url: u, method: i, headers: s };
      try {
        n(this._options, f, d);
      } catch (p) {
        this.emit('error', p);
        return;
      }
      this._sanitizeOptions(this._options);
    }
    try {
      this._performRequest();
    } catch (p) {
      this.emit('error', new ac({ cause: p }));
    }
  };
  function hc(r) {
    var e = { maxRedirects: 21, maxBodyLength: 10485760 },
      t = {};
    return (
      Object.keys(r).forEach(function (s) {
        var n = s + ':',
          i = (t[n] = r[s]),
          o = (e[s] = Object.create(i));
        function c(u, l, h) {
          if (yt(u)) {
            var f;
            try {
              f = cc(new $n(u));
            } catch {
              f = _t.parse(u);
            }
            if (!yt(f.protocol)) throw new Xd({ input: u });
            u = f;
          } else $n && u instanceof $n ? (u = cc(u)) : ((h = l), (l = u), (u = { protocol: n }));
          return (
            Ir(l) && ((h = l), (l = null)),
            (l = Object.assign(
              { maxRedirects: e.maxRedirects, maxBodyLength: e.maxBodyLength },
              u,
              l
            )),
            (l.nativeProtocols = t),
            !yt(l.host) && !yt(l.hostname) && (l.hostname = '::1'),
            uc.equal(l.protocol, n, 'protocol mismatch'),
            lc('options', l),
            new oe(l, h)
          );
        }
        function a(u, l, h) {
          var f = o.request(u, l, h);
          return f.end(), f;
        }
        Object.defineProperties(o, {
          request: { value: c, configurable: !0, enumerable: !0, writable: !0 },
          get: { value: a, configurable: !0, enumerable: !0, writable: !0 },
        });
      }),
      e
    );
  }
  function fc() {}
  function cc(r) {
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
  function Xn(r, e) {
    var t;
    for (var s in e) r.test(s) && ((t = e[s]), delete e[s]);
    return t === null || typeof t > 'u' ? void 0 : String(t).trim();
  }
  function br(r, e, t) {
    function s(n) {
      Error.captureStackTrace(this, this.constructor),
        Object.assign(this, n || {}),
        (this.code = r),
        (this.message = this.cause ? e + ': ' + this.cause.message : e);
    }
    return (
      (s.prototype = new (t || Error)()),
      (s.prototype.constructor = s),
      (s.prototype.name = 'Error [' + r + ']'),
      s
    );
  }
  function Zn(r, e) {
    for (var t of Kn) r.removeListener(t, Yn[t]);
    r.on('error', fc), r.destroy(e);
  }
  function Jd(r, e) {
    uc(yt(r) && yt(e));
    var t = r.length - e.length - 1;
    return t > 0 && r[t] === '.' && r.endsWith(e);
  }
  function yt(r) {
    return typeof r == 'string' || r instanceof String;
  }
  function Ir(r) {
    return typeof r == 'function';
  }
  function Qd(r) {
    return typeof r == 'object' && 'length' in r;
  }
  Jn.exports = hc({ http: jd, https: $d });
  Jn.exports.wrap = hc;
});
var ei = E((sy, ep) => {
  ep.exports = {
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
var yc = E((ny, _c) => {
  'use strict';
  var Nr = re(),
    dc = Pn(),
    tp = kn(),
    rp = ss(),
    sp = require('http'),
    np = require('https'),
    ip = Qn().http,
    op = Qn().https,
    pc = require('url'),
    ap = require('zlib'),
    cp = ei(),
    ds = os(),
    ti = is(),
    mc = /https:?/;
  function Ec(r, e, t) {
    if (((r.hostname = e.host), (r.host = e.host), (r.port = e.port), (r.path = t), e.auth)) {
      var s = Buffer.from(e.auth.username + ':' + e.auth.password, 'utf8').toString('base64');
      r.headers['Proxy-Authorization'] = 'Basic ' + s;
    }
    r.beforeRedirect = function (i) {
      (i.headers.host = i.host), Ec(i, e, i.href);
    };
  }
  _c.exports = function (e) {
    return new Promise(function (s, n) {
      var i = function (T) {
          s(T);
        },
        o = function (T) {
          n(T);
        },
        c = e.data,
        a = e.headers;
      if (
        ('User-Agent' in a || 'user-agent' in a
          ? !a['User-Agent'] && !a['user-agent'] && (delete a['User-Agent'], delete a['user-agent'])
          : (a['User-Agent'] = 'axios/' + cp.version),
        c && !Nr.isStream(c))
      ) {
        if (!Buffer.isBuffer(c))
          if (Nr.isArrayBuffer(c)) c = Buffer.from(new Uint8Array(c));
          else if (Nr.isString(c)) c = Buffer.from(c, 'utf-8');
          else
            return o(
              ds(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                e
              )
            );
        a['Content-Length'] = c.length;
      }
      var u = void 0;
      if (e.auth) {
        var l = e.auth.username || '',
          h = e.auth.password || '';
        u = l + ':' + h;
      }
      var f = tp(e.baseURL, e.url),
        d = pc.parse(f),
        p = d.protocol || 'http:';
      if (!u && d.auth) {
        var _ = d.auth.split(':'),
          y = _[0] || '',
          g = _[1] || '';
        u = y + ':' + g;
      }
      u && delete a.Authorization;
      var w = mc.test(p),
        S = w ? e.httpsAgent : e.httpAgent,
        O = {
          path: rp(d.path, e.params, e.paramsSerializer).replace(/^\?/, ''),
          method: e.method.toUpperCase(),
          headers: a,
          agent: S,
          agents: { http: e.httpAgent, https: e.httpsAgent },
          auth: u,
        };
      e.socketPath ? (O.socketPath = e.socketPath) : ((O.hostname = d.hostname), (O.port = d.port));
      var L = e.proxy;
      if (!L && L !== !1) {
        var v = p.slice(0, -1) + '_proxy',
          A = process.env[v] || process.env[v.toUpperCase()];
        if (A) {
          var I = pc.parse(A),
            F = process.env.no_proxy || process.env.NO_PROXY,
            q = !0;
          if (F) {
            var le = F.split(',').map(function (T) {
              return T.trim();
            });
            q = !le.some(function (T) {
              return T
                ? T === '*' ||
                  (T[0] === '.' && d.hostname.substr(d.hostname.length - T.length) === T)
                  ? !0
                  : d.hostname === T
                : !1;
            });
          }
          if (q && ((L = { host: I.hostname, port: I.port, protocol: I.protocol }), I.auth)) {
            var ne = I.auth.split(':');
            L.auth = { username: ne[0], password: ne[1] };
          }
        }
      }
      L &&
        ((O.headers.host = d.hostname + (d.port ? ':' + d.port : '')),
        Ec(O, L, p + '//' + d.hostname + (d.port ? ':' + d.port : '') + O.path));
      var G,
        Ee = w && (L ? mc.test(L.protocol) : !0);
      e.transport
        ? (G = e.transport)
        : e.maxRedirects === 0
          ? (G = Ee ? np : sp)
          : (e.maxRedirects && (O.maxRedirects = e.maxRedirects), (G = Ee ? op : ip)),
        e.maxBodyLength > -1 && (O.maxBodyLength = e.maxBodyLength);
      var k = G.request(O, function (T) {
        if (!k.aborted) {
          var X = T,
            z = T.req || k;
          if (T.statusCode !== 204 && z.method !== 'HEAD' && e.decompress !== !1)
            switch (T.headers['content-encoding']) {
              case 'gzip':
              case 'compress':
              case 'deflate':
                (X = X.pipe(ap.createUnzip())), delete T.headers['content-encoding'];
                break;
            }
          var be = {
            status: T.statusCode,
            statusText: T.statusMessage,
            headers: T.headers,
            config: e,
            request: z,
          };
          if (e.responseType === 'stream') (be.data = X), dc(i, o, be);
          else {
            var m = [],
              R = 0;
            X.on('data', function (x) {
              m.push(x),
                (R += x.length),
                e.maxContentLength > -1 &&
                  R > e.maxContentLength &&
                  (X.destroy(),
                  o(
                    ds('maxContentLength size of ' + e.maxContentLength + ' exceeded', e, null, z)
                  ));
            }),
              X.on('error', function (x) {
                k.aborted || o(ti(x, e, null, z));
              }),
              X.on('end', function () {
                var x = Buffer.concat(m);
                e.responseType !== 'arraybuffer' &&
                  ((x = x.toString(e.responseEncoding)),
                  (!e.responseEncoding || e.responseEncoding === 'utf8') && (x = Nr.stripBOM(x))),
                  (be.data = x),
                  dc(i, o, be);
              });
          }
        }
      });
      if (
        (k.on('error', function (T) {
          (k.aborted && T.code !== 'ERR_FR_TOO_MANY_REDIRECTS') || o(ti(T, e, null, k));
        }),
        e.timeout)
      ) {
        var we = parseInt(e.timeout, 10);
        if (isNaN(we)) {
          o(ds('error trying to parse `config.timeout` to int', e, 'ERR_PARSE_TIMEOUT', k));
          return;
        }
        k.setTimeout(we, function () {
          k.abort(),
            o(
              ds(
                'timeout of ' + we + 'ms exceeded',
                e,
                e.transitional && e.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                k
              )
            );
        });
      }
      e.cancelToken &&
        e.cancelToken.promise.then(function (T) {
          k.aborted || (k.abort(), o(T));
        }),
        Nr.isStream(c)
          ? c
              .on('error', function (T) {
                o(ti(T, e, null, k));
              })
              .pipe(k)
          : k.end(c);
    });
  };
});
var ms = E((iy, vc) => {
  'use strict';
  var se = re(),
    Rc = ba(),
    up = is(),
    lp = { 'Content-Type': 'application/x-www-form-urlencoded' };
  function gc(r, e) {
    !se.isUndefined(r) && se.isUndefined(r['Content-Type']) && (r['Content-Type'] = e);
  }
  function hp() {
    var r;
    return (
      typeof XMLHttpRequest < 'u'
        ? (r = $a())
        : typeof process < 'u' &&
          Object.prototype.toString.call(process) === '[object process]' &&
          (r = yc()),
      r
    );
  }
  var ps = {
    transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    adapter: hp(),
    transformRequest: [
      function (e, t) {
        return (
          Rc(t, 'Accept'),
          Rc(t, 'Content-Type'),
          se.isFormData(e) ||
          se.isArrayBuffer(e) ||
          se.isBuffer(e) ||
          se.isStream(e) ||
          se.isFile(e) ||
          se.isBlob(e)
            ? e
            : se.isArrayBufferView(e)
              ? e.buffer
              : se.isURLSearchParams(e)
                ? (gc(t, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString())
                : se.isObject(e) || (t && t['Content-Type'] === 'application/json')
                  ? (gc(t, 'application/json'), JSON.stringify(e))
                  : e
        );
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional,
          s = t && t.silentJSONParsing,
          n = t && t.forcedJSONParsing,
          i = !s && this.responseType === 'json';
        if (i || (n && se.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (o) {
            if (i) throw o.name === 'SyntaxError' ? up(o, this, 'E_JSON_PARSE') : o;
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
  ps.headers = { common: { Accept: 'application/json, text/plain, */*' } };
  se.forEach(['delete', 'get', 'head'], function (e) {
    ps.headers[e] = {};
  });
  se.forEach(['post', 'put', 'patch'], function (e) {
    ps.headers[e] = se.merge(lp);
  });
  vc.exports = ps;
});
var wc = E((oy, Cc) => {
  'use strict';
  var fp = re(),
    dp = ms();
  Cc.exports = function (e, t, s) {
    var n = this || dp;
    return (
      fp.forEach(s, function (o) {
        e = o.call(n, e, t);
      }),
      e
    );
  };
});
var ri = E((ay, Sc) => {
  'use strict';
  Sc.exports = function (e) {
    return !!(e && e.__CANCEL__);
  };
});
var xc = E((cy, Tc) => {
  'use strict';
  var Oc = re(),
    si = wc(),
    pp = ri(),
    mp = ms();
  function ni(r) {
    r.cancelToken && r.cancelToken.throwIfRequested();
  }
  Tc.exports = function (e) {
    ni(e),
      (e.headers = e.headers || {}),
      (e.data = si.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = Oc.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
      Oc.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (n) {
        delete e.headers[n];
      });
    var t = e.adapter || mp.adapter;
    return t(e).then(
      function (n) {
        return ni(e), (n.data = si.call(e, n.data, n.headers, e.transformResponse)), n;
      },
      function (n) {
        return (
          pp(n) ||
            (ni(e),
            n &&
              n.response &&
              (n.response.data = si.call(
                e,
                n.response.data,
                n.response.headers,
                e.transformResponse
              ))),
          Promise.reject(n)
        );
      }
    );
  };
});
var ii = E((uy, Ic) => {
  'use strict';
  var K = re();
  Ic.exports = function (e, t) {
    t = t || {};
    var s = {},
      n = ['url', 'method', 'data'],
      i = ['headers', 'auth', 'proxy', 'params'],
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
      c = ['validateStatus'];
    function a(f, d) {
      return K.isPlainObject(f) && K.isPlainObject(d)
        ? K.merge(f, d)
        : K.isPlainObject(d)
          ? K.merge({}, d)
          : K.isArray(d)
            ? d.slice()
            : d;
    }
    function u(f) {
      K.isUndefined(t[f])
        ? K.isUndefined(e[f]) || (s[f] = a(void 0, e[f]))
        : (s[f] = a(e[f], t[f]));
    }
    K.forEach(n, function (d) {
      K.isUndefined(t[d]) || (s[d] = a(void 0, t[d]));
    }),
      K.forEach(i, u),
      K.forEach(o, function (d) {
        K.isUndefined(t[d])
          ? K.isUndefined(e[d]) || (s[d] = a(void 0, e[d]))
          : (s[d] = a(void 0, t[d]));
      }),
      K.forEach(c, function (d) {
        d in t ? (s[d] = a(e[d], t[d])) : d in e && (s[d] = a(void 0, e[d]));
      });
    var l = n.concat(i).concat(o).concat(c),
      h = Object.keys(e)
        .concat(Object.keys(t))
        .filter(function (d) {
          return l.indexOf(d) === -1;
        });
    return K.forEach(h, u), s;
  };
});
var Dc = E((ly, Ac) => {
  'use strict';
  var Nc = ei(),
    oi = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (r, e) {
    oi[r] = function (s) {
      return typeof s === r || 'a' + (e < 1 ? 'n ' : ' ') + r;
    };
  });
  var bc = {},
    Ep = Nc.version.split('.');
  function Lc(r, e) {
    for (var t = e ? e.split('.') : Ep, s = r.split('.'), n = 0; n < 3; n++) {
      if (t[n] > s[n]) return !0;
      if (t[n] < s[n]) return !1;
    }
    return !1;
  }
  oi.transitional = function (e, t, s) {
    var n = t && Lc(t);
    function i(o, c) {
      return (
        '[Axios v' + Nc.version + "] Transitional option '" + o + "'" + c + (s ? '. ' + s : '')
      );
    }
    return function (o, c, a) {
      if (e === !1) throw new Error(i(c, ' has been removed in ' + t));
      return (
        n &&
          !bc[c] &&
          ((bc[c] = !0),
          console.warn(
            i(c, ' has been deprecated since v' + t + ' and will be removed in the near future')
          )),
        e ? e(o, c, a) : !0
      );
    };
  };
  function _p(r, e, t) {
    if (typeof r != 'object') throw new TypeError('options must be an object');
    for (var s = Object.keys(r), n = s.length; n-- > 0; ) {
      var i = s[n],
        o = e[i];
      if (o) {
        var c = r[i],
          a = c === void 0 || o(c, i, r);
        if (a !== !0) throw new TypeError('option ' + i + ' must be ' + a);
        continue;
      }
      if (t !== !0) throw Error('Unknown option ' + i);
    }
  }
  Ac.exports = { isOlderVersion: Lc, assertOptions: _p, validators: oi };
});
var kc = E((hy, Pc) => {
  'use strict';
  var Mc = re(),
    yp = ss(),
    Uc = xa(),
    Bc = xc(),
    Es = ii(),
    Fc = Dc(),
    $t = Fc.validators;
  function Lr(r) {
    (this.defaults = r), (this.interceptors = { request: new Uc(), response: new Uc() });
  }
  Lr.prototype.request = function (e) {
    typeof e == 'string' ? ((e = arguments[1] || {}), (e.url = arguments[0])) : (e = e || {}),
      (e = Es(this.defaults, e)),
      e.method
        ? (e.method = e.method.toLowerCase())
        : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = 'get');
    var t = e.transitional;
    t !== void 0 &&
      Fc.assertOptions(
        t,
        {
          silentJSONParsing: $t.transitional($t.boolean, '1.0.0'),
          forcedJSONParsing: $t.transitional($t.boolean, '1.0.0'),
          clarifyTimeoutError: $t.transitional($t.boolean, '1.0.0'),
        },
        !1
      );
    var s = [],
      n = !0;
    this.interceptors.request.forEach(function (f) {
      (typeof f.runWhen == 'function' && f.runWhen(e) === !1) ||
        ((n = n && f.synchronous), s.unshift(f.fulfilled, f.rejected));
    });
    var i = [];
    this.interceptors.response.forEach(function (f) {
      i.push(f.fulfilled, f.rejected);
    });
    var o;
    if (!n) {
      var c = [Bc, void 0];
      for (Array.prototype.unshift.apply(c, s), c.concat(i), o = Promise.resolve(e); c.length; )
        o = o.then(c.shift(), c.shift());
      return o;
    }
    for (var a = e; s.length; ) {
      var u = s.shift(),
        l = s.shift();
      try {
        a = u(a);
      } catch (h) {
        l(h);
        break;
      }
    }
    try {
      o = Bc(a);
    } catch (h) {
      return Promise.reject(h);
    }
    for (; i.length; ) o = o.then(i.shift(), i.shift());
    return o;
  };
  Lr.prototype.getUri = function (e) {
    return (e = Es(this.defaults, e)), yp(e.url, e.params, e.paramsSerializer).replace(/^\?/, '');
  };
  Mc.forEach(['delete', 'get', 'head', 'options'], function (e) {
    Lr.prototype[e] = function (t, s) {
      return this.request(Es(s || {}, { method: e, url: t, data: (s || {}).data }));
    };
  });
  Mc.forEach(['post', 'put', 'patch'], function (e) {
    Lr.prototype[e] = function (t, s, n) {
      return this.request(Es(n || {}, { method: e, url: t, data: s }));
    };
  });
  Pc.exports = Lr;
});
var ci = E((fy, qc) => {
  'use strict';
  function ai(r) {
    this.message = r;
  }
  ai.prototype.toString = function () {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  ai.prototype.__CANCEL__ = !0;
  qc.exports = ai;
});
var Hc = E((dy, Gc) => {
  'use strict';
  var Rp = ci();
  function _s(r) {
    if (typeof r != 'function') throw new TypeError('executor must be a function.');
    var e;
    this.promise = new Promise(function (n) {
      e = n;
    });
    var t = this;
    r(function (n) {
      t.reason || ((t.reason = new Rp(n)), e(t.reason));
    });
  }
  _s.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  _s.source = function () {
    var e,
      t = new _s(function (n) {
        e = n;
      });
    return { token: t, cancel: e };
  };
  Gc.exports = _s;
});
var Vc = E((py, zc) => {
  'use strict';
  zc.exports = function (e) {
    return function (s) {
      return e.apply(null, s);
    };
  };
});
var $c = E((my, jc) => {
  'use strict';
  jc.exports = function (e) {
    return typeof e == 'object' && e.isAxiosError === !0;
  };
});
var Kc = E((Ey, ui) => {
  'use strict';
  var Xc = re(),
    gp = Dn(),
    ys = kc(),
    vp = ii(),
    Cp = ms();
  function Wc(r) {
    var e = new ys(r),
      t = gp(ys.prototype.request, e);
    return Xc.extend(t, ys.prototype, e), Xc.extend(t, e), t;
  }
  var Oe = Wc(Cp);
  Oe.Axios = ys;
  Oe.create = function (e) {
    return Wc(vp(Oe.defaults, e));
  };
  Oe.Cancel = ci();
  Oe.CancelToken = Hc();
  Oe.isCancel = ri();
  Oe.all = function (e) {
    return Promise.all(e);
  };
  Oe.spread = Vc();
  Oe.isAxiosError = $c();
  ui.exports = Oe;
  ui.exports.default = Oe;
});
var li = E((_y, Yc) => {
  'use strict';
  Yc.exports = Kc();
});
function Xt(r, e = 1e4) {
  let t = (i) => i,
    s = process.env.NX_CLOUD_API || r.url || 'https://cloud.nx.app',
    n = Or ? Or : r.accessToken;
  if (!n)
    throw new Error(
      'Unable to authenticate. Either define accessToken in nx.json or set the NX_CLOUD_ACCESS_TOKEN env variable.'
    );
  if (r.customProxyConfigPath) {
    let { nxCloudProxyConfig: i } = require((0, Zc.join)(process.cwd(), r.customProxyConfigPath));
    t = i ?? t;
  }
  return wp.create(
    t({
      baseURL: s,
      timeout: Se ? Ft : e,
      headers: { authorization: n, 'Nx-Cloud-Client-Version': r.clientVersion || 'unknown' },
    })
  );
}
async function di(r, e) {
  let t = new Date(),
    s = await e();
  return U && console.log(`${r}: ${new Date().getTime() - t.getTime()}`), s;
}
async function qe(r, e = Sr) {
  try {
    return await r();
  } catch (t) {
    let s = (t.response && t.response.status) || t.code;
    (s === 401 || s === 403) && (e = 0);
    let n = t.response
      ? t.response.data.message
        ? t.response.data.message
        : t.response.data
      : t.message;
    if (e === 0)
      throw (
        (typeof n != 'string' && (n = t.message),
        U &&
          hi.note({
            title: `Connection to Nx Cloud failed with status code ${s}`,
            bodyLines: [`${s}: ${n}`],
          }),
        new fi('failure', Sp(s), t))
      );
    if (s == 429) {
      if (!Rs) {
        let i = 1e4 + (Sr + 1 - e) * 6e4 * Math.random();
        hi.note({ title: `Received Code ${s}. ${n} Retrying in ${i}ms.` }), (Rs = Gt(i));
      }
      await Rs, (Rs = null);
    } else {
      let i = 1e3 + (Sr + 1 - e) * 4e3 * Math.random();
      U && hi.note({ title: `Received Code ${s}. Retrying in ${i}ms.` }), await Gt(i);
    }
    return qe(r, e - 1);
  }
}
function Sp(r) {
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
var Zc,
  hi,
  wp,
  fi,
  Rs,
  Ar = ee(() => {
    'use strict';
    Zc = require('path');
    Je();
    An();
    ({ output: hi } = Ze()),
      (wp = li()),
      (fi = class {
        constructor(e, t, s) {
          this.type = e;
          this.message = t;
          this.axiosException = s;
        }
      });
    Rs = null;
  });
function gs(r) {
  Op()
    ? (process.stdout.write(`   ${pi(r)}`), Le.addNewline(), Le.addNewline())
    : Tp()
      ? (Le.addNewline(), process.stdout.write(`${pi(r)}`), Le.addNewline(), Le.addNewline())
      : (process.stdout.write(`  ${pi(r)}`), Le.addNewline(), Le.addNewline());
}
function Op() {
  try {
    return B('nx/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle'), !0;
  } catch {
    try {
      return (
        B(
          '@nrwl/workspace/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle'
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
}
function pi(r) {
  let e;
  if (typeof Le.dim == 'function') return Le.dim(r);
  try {
    return Le.colors.gray(r);
  } catch {
    return r;
  }
}
function Tp() {
  return process.argv.indexOf('run-many') === -1 && process.argv.indexOf('affected') === -1;
}
var Le,
  mi = ee(() => {
    'use strict';
    vr();
    ({ output: Le } = Ze());
  });
var Qc = {};
Pe(Qc, {
  RUNNER_FAILURE_PERF_ENTRY: () => gt,
  createMetricRecorder: () => Rt,
  mapRespToPerfEntry: () => Te,
  submitRunMetrics: () => bp,
});
var Ei,
  Jc,
  Rt,
  Te,
  gt,
  xp,
  Ip,
  bp,
  vs = ee(() => {
    'use strict';
    Ei = require('perf_hooks');
    Ar();
    Je();
    mi();
    (Jc = []),
      (Rt = (r) => {
        let e = Ei.performance.now();
        return {
          recordMetric: (s) => {
            let n = Ei.performance.now();
            (s.durationMs = n - e), (s.entryType = r), Jc.push(s);
          },
        };
      }),
      (Te = (r) => {
        var e;
        return {
          success:
            ((e = r == null ? void 0 : r.status) == null ? void 0 : e.toString().startsWith('2')) ??
            !1,
          statusCode: (r == null ? void 0 : r.status) ?? -1,
        };
      }),
      (gt = { success: !1, statusCode: -1 }),
      (xp = 0.1),
      (Ip = 0.01),
      (bp = (r) => {
        let e;
        Tr() ? (e = xp) : (e = Ip);
        try {
          return bn || Math.random() < e
            ? (U && gs('Submitting runner metrics for this run.'),
              Xt(r)
                .post('/nx-cloud/save-metrics', { entries: Jc })
                .catch((s) => {}))
            : Promise.resolve();
        } catch {}
      });
  });
var Wt = E((Ty, tu) => {
  'use strict';
  var eu = new Map([
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
  tu.exports = (r) =>
    r
      ? Object.keys(r)
          .map((e) => [eu.has(e) ? eu.get(e) : e, r[e]])
          .reduce((e, t) => ((e[t[0]] = t[1]), e), Object.create(null))
      : {};
});
var Yt = E((xy, lu) => {
  'use strict';
  var ru = typeof process == 'object' && process ? process : { stdout: null, stderr: null },
    Np = require('events'),
    su = require('stream'),
    nu = require('string_decoder').StringDecoder,
    Ge = Symbol('EOF'),
    He = Symbol('maybeEmitEnd'),
    et = Symbol('emittedEnd'),
    Cs = Symbol('emittingEnd'),
    Dr = Symbol('emittedError'),
    ws = Symbol('closed'),
    iu = Symbol('read'),
    Ss = Symbol('flush'),
    ou = Symbol('flushChunk'),
    ae = Symbol('encoding'),
    ze = Symbol('decoder'),
    Os = Symbol('flowing'),
    Ur = Symbol('paused'),
    Kt = Symbol('resume'),
    j = Symbol('bufferLength'),
    _i = Symbol('bufferPush'),
    yi = Symbol('bufferShift'),
    Y = Symbol('objectMode'),
    Z = Symbol('destroyed'),
    Ri = Symbol('emitData'),
    au = Symbol('emitEnd'),
    gi = Symbol('emitEnd2'),
    Ve = Symbol('async'),
    Br = (r) => Promise.resolve().then(r),
    cu = global._MP_NO_ITERATOR_SYMBOLS_ !== '1',
    Lp = (cu && Symbol.asyncIterator) || Symbol('asyncIterator not implemented'),
    Ap = (cu && Symbol.iterator) || Symbol('iterator not implemented'),
    Dp = (r) => r === 'end' || r === 'finish' || r === 'prefinish',
    Up = (r) =>
      r instanceof ArrayBuffer ||
      (typeof r == 'object' &&
        r.constructor &&
        r.constructor.name === 'ArrayBuffer' &&
        r.byteLength >= 0),
    Bp = (r) => !Buffer.isBuffer(r) && ArrayBuffer.isView(r),
    Ts = class {
      constructor(e, t, s) {
        (this.src = e),
          (this.dest = t),
          (this.opts = s),
          (this.ondrain = () => e[Kt]()),
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
    vi = class extends Ts {
      unpipe() {
        this.src.removeListener('error', this.proxyErrors), super.unpipe();
      }
      constructor(e, t, s) {
        super(e, t, s),
          (this.proxyErrors = (n) => t.emit('error', n)),
          e.on('error', this.proxyErrors);
      }
    };
  lu.exports = class uu extends su {
    constructor(e) {
      super(),
        (this[Os] = !1),
        (this[Ur] = !1),
        (this.pipes = []),
        (this.buffer = []),
        (this[Y] = (e && e.objectMode) || !1),
        this[Y] ? (this[ae] = null) : (this[ae] = (e && e.encoding) || null),
        this[ae] === 'buffer' && (this[ae] = null),
        (this[Ve] = (e && !!e.async) || !1),
        (this[ze] = this[ae] ? new nu(this[ae]) : null),
        (this[Ge] = !1),
        (this[et] = !1),
        (this[Cs] = !1),
        (this[ws] = !1),
        (this[Dr] = null),
        (this.writable = !0),
        (this.readable = !0),
        (this[j] = 0),
        (this[Z] = !1);
    }
    get bufferLength() {
      return this[j];
    }
    get encoding() {
      return this[ae];
    }
    set encoding(e) {
      if (this[Y]) throw new Error('cannot set encoding in objectMode');
      if (this[ae] && e !== this[ae] && ((this[ze] && this[ze].lastNeed) || this[j]))
        throw new Error('cannot change encoding');
      this[ae] !== e &&
        ((this[ze] = e ? new nu(e) : null),
        this.buffer.length && (this.buffer = this.buffer.map((t) => this[ze].write(t)))),
        (this[ae] = e);
    }
    setEncoding(e) {
      this.encoding = e;
    }
    get objectMode() {
      return this[Y];
    }
    set objectMode(e) {
      this[Y] = this[Y] || !!e;
    }
    get async() {
      return this[Ve];
    }
    set async(e) {
      this[Ve] = this[Ve] || !!e;
    }
    write(e, t, s) {
      if (this[Ge]) throw new Error('write after end');
      if (this[Z])
        return (
          this.emit(
            'error',
            Object.assign(new Error('Cannot call write after a stream was destroyed'), {
              code: 'ERR_STREAM_DESTROYED',
            })
          ),
          !0
        );
      typeof t == 'function' && ((s = t), (t = 'utf8')), t || (t = 'utf8');
      let n = this[Ve] ? Br : (i) => i();
      return (
        !this[Y] &&
          !Buffer.isBuffer(e) &&
          (Bp(e)
            ? (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength))
            : Up(e)
              ? (e = Buffer.from(e))
              : typeof e != 'string' && (this.objectMode = !0)),
        this[Y]
          ? (this.flowing && this[j] !== 0 && this[Ss](!0),
            this.flowing ? this.emit('data', e) : this[_i](e),
            this[j] !== 0 && this.emit('readable'),
            s && n(s),
            this.flowing)
          : e.length
            ? (typeof e == 'string' &&
                !(t === this[ae] && !this[ze].lastNeed) &&
                (e = Buffer.from(e, t)),
              Buffer.isBuffer(e) && this[ae] && (e = this[ze].write(e)),
              this.flowing && this[j] !== 0 && this[Ss](!0),
              this.flowing ? this.emit('data', e) : this[_i](e),
              this[j] !== 0 && this.emit('readable'),
              s && n(s),
              this.flowing)
            : (this[j] !== 0 && this.emit('readable'), s && n(s), this.flowing)
      );
    }
    read(e) {
      if (this[Z]) return null;
      if (this[j] === 0 || e === 0 || e > this[j]) return this[He](), null;
      this[Y] && (e = null),
        this.buffer.length > 1 &&
          !this[Y] &&
          (this.encoding
            ? (this.buffer = [this.buffer.join('')])
            : (this.buffer = [Buffer.concat(this.buffer, this[j])]));
      let t = this[iu](e || null, this.buffer[0]);
      return this[He](), t;
    }
    [iu](e, t) {
      return (
        e === t.length || e === null
          ? this[yi]()
          : ((this.buffer[0] = t.slice(e)), (t = t.slice(0, e)), (this[j] -= e)),
        this.emit('data', t),
        !this.buffer.length && !this[Ge] && this.emit('drain'),
        t
      );
    }
    end(e, t, s) {
      return (
        typeof e == 'function' && ((s = e), (e = null)),
        typeof t == 'function' && ((s = t), (t = 'utf8')),
        e && this.write(e, t),
        s && this.once('end', s),
        (this[Ge] = !0),
        (this.writable = !1),
        (this.flowing || !this[Ur]) && this[He](),
        this
      );
    }
    [Kt]() {
      this[Z] ||
        ((this[Ur] = !1),
        (this[Os] = !0),
        this.emit('resume'),
        this.buffer.length ? this[Ss]() : this[Ge] ? this[He]() : this.emit('drain'));
    }
    resume() {
      return this[Kt]();
    }
    pause() {
      (this[Os] = !1), (this[Ur] = !0);
    }
    get destroyed() {
      return this[Z];
    }
    get flowing() {
      return this[Os];
    }
    get paused() {
      return this[Ur];
    }
    [_i](e) {
      this[Y] ? (this[j] += 1) : (this[j] += e.length), this.buffer.push(e);
    }
    [yi]() {
      return (
        this.buffer.length && (this[Y] ? (this[j] -= 1) : (this[j] -= this.buffer[0].length)),
        this.buffer.shift()
      );
    }
    [Ss](e) {
      do;
      while (this[ou](this[yi]()));
      !e && !this.buffer.length && !this[Ge] && this.emit('drain');
    }
    [ou](e) {
      return e ? (this.emit('data', e), this.flowing) : !1;
    }
    pipe(e, t) {
      if (this[Z]) return;
      let s = this[et];
      return (
        (t = t || {}),
        e === ru.stdout || e === ru.stderr ? (t.end = !1) : (t.end = t.end !== !1),
        (t.proxyErrors = !!t.proxyErrors),
        s
          ? t.end && e.end()
          : (this.pipes.push(t.proxyErrors ? new vi(this, e, t) : new Ts(this, e, t)),
            this[Ve] ? Br(() => this[Kt]()) : this[Kt]()),
        e
      );
    }
    unpipe(e) {
      let t = this.pipes.find((s) => s.dest === e);
      t && (this.pipes.splice(this.pipes.indexOf(t), 1), t.unpipe());
    }
    addListener(e, t) {
      return this.on(e, t);
    }
    on(e, t) {
      let s = super.on(e, t);
      return (
        e === 'data' && !this.pipes.length && !this.flowing
          ? this[Kt]()
          : e === 'readable' && this[j] !== 0
            ? super.emit('readable')
            : Dp(e) && this[et]
              ? (super.emit(e), this.removeAllListeners(e))
              : e === 'error' &&
                this[Dr] &&
                (this[Ve] ? Br(() => t.call(this, this[Dr])) : t.call(this, this[Dr])),
        s
      );
    }
    get emittedEnd() {
      return this[et];
    }
    [He]() {
      !this[Cs] &&
        !this[et] &&
        !this[Z] &&
        this.buffer.length === 0 &&
        this[Ge] &&
        ((this[Cs] = !0),
        this.emit('end'),
        this.emit('prefinish'),
        this.emit('finish'),
        this[ws] && this.emit('close'),
        (this[Cs] = !1));
    }
    emit(e, t, ...s) {
      if (e !== 'error' && e !== 'close' && e !== Z && this[Z]) return;
      if (e === 'data') return t ? (this[Ve] ? Br(() => this[Ri](t)) : this[Ri](t)) : !1;
      if (e === 'end') return this[au]();
      if (e === 'close') {
        if (((this[ws] = !0), !this[et] && !this[Z])) return;
        let i = super.emit('close');
        return this.removeAllListeners('close'), i;
      } else if (e === 'error') {
        this[Dr] = t;
        let i = super.emit('error', t);
        return this[He](), i;
      } else if (e === 'resume') {
        let i = super.emit('resume');
        return this[He](), i;
      } else if (e === 'finish' || e === 'prefinish') {
        let i = super.emit(e);
        return this.removeAllListeners(e), i;
      }
      let n = super.emit(e, t, ...s);
      return this[He](), n;
    }
    [Ri](e) {
      for (let s of this.pipes) s.dest.write(e) === !1 && this.pause();
      let t = super.emit('data', e);
      return this[He](), t;
    }
    [au]() {
      this[et] ||
        ((this[et] = !0), (this.readable = !1), this[Ve] ? Br(() => this[gi]()) : this[gi]());
    }
    [gi]() {
      if (this[ze]) {
        let t = this[ze].end();
        if (t) {
          for (let s of this.pipes) s.dest.write(t);
          super.emit('data', t);
        }
      }
      for (let t of this.pipes) t.end();
      let e = super.emit('end');
      return this.removeAllListeners('end'), e;
    }
    collect() {
      let e = [];
      this[Y] || (e.dataLength = 0);
      let t = this.promise();
      return (
        this.on('data', (s) => {
          e.push(s), this[Y] || (e.dataLength += s.length);
        }),
        t.then(() => e)
      );
    }
    concat() {
      return this[Y]
        ? Promise.reject(new Error('cannot concat in objectMode'))
        : this.collect().then((e) =>
            this[Y]
              ? Promise.reject(new Error('cannot concat in objectMode'))
              : this[ae]
                ? e.join('')
                : Buffer.concat(e, e.dataLength)
          );
    }
    promise() {
      return new Promise((e, t) => {
        this.on(Z, () => t(new Error('stream destroyed'))),
          this.on('error', (s) => t(s)),
          this.on('end', () => e());
      });
    }
    [Lp]() {
      return {
        next: () => {
          let t = this.read();
          if (t !== null) return Promise.resolve({ done: !1, value: t });
          if (this[Ge]) return Promise.resolve({ done: !0 });
          let s = null,
            n = null,
            i = (u) => {
              this.removeListener('data', o), this.removeListener('end', c), n(u);
            },
            o = (u) => {
              this.removeListener('error', i),
                this.removeListener('end', c),
                this.pause(),
                s({ value: u, done: !!this[Ge] });
            },
            c = () => {
              this.removeListener('error', i), this.removeListener('data', o), s({ done: !0 });
            },
            a = () => i(new Error('stream destroyed'));
          return new Promise((u, l) => {
            (n = l),
              (s = u),
              this.once(Z, a),
              this.once('error', i),
              this.once('end', c),
              this.once('data', o);
          });
        },
      };
    }
    [Ap]() {
      return {
        next: () => {
          let t = this.read();
          return { value: t, done: t === null };
        },
      };
    }
    destroy(e) {
      return this[Z]
        ? (e ? this.emit('error', e) : this.emit(Z), this)
        : ((this[Z] = !0),
          (this.buffer.length = 0),
          (this[j] = 0),
          typeof this.close == 'function' && !this[ws] && this.close(),
          e ? this.emit('error', e) : this.emit(Z),
          this);
    }
    static isStream(e) {
      return (
        !!e &&
        (e instanceof uu ||
          e instanceof su ||
          (e instanceof Np &&
            (typeof e.pipe == 'function' ||
              (typeof e.write == 'function' && typeof e.end == 'function'))))
      );
    }
  };
});
var fu = E((Iy, hu) => {
  'use strict';
  var Mp = require('zlib').constants || { ZLIB_VERNUM: 4736 };
  hu.exports = Object.freeze(
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
      Mp
    )
  );
});
var Fi = E((fe) => {
  'use strict';
  var Ti = require('assert'),
    tt = require('buffer').Buffer,
    mu = require('zlib'),
    vt = (fe.constants = fu()),
    Fp = Yt(),
    du = tt.concat,
    Ct = Symbol('_superWrite'),
    Jt = class extends Error {
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
    Pp = Symbol('opts'),
    Mr = Symbol('flushFlag'),
    pu = Symbol('finishFlushFlag'),
    Mi = Symbol('fullFlushFlag'),
    M = Symbol('handle'),
    xs = Symbol('onError'),
    Zt = Symbol('sawError'),
    Ci = Symbol('level'),
    wi = Symbol('strategy'),
    Si = Symbol('ended'),
    by = Symbol('_defaultFullFlush'),
    Is = class extends Fp {
      constructor(e, t) {
        if (!e || typeof e != 'object')
          throw new TypeError('invalid options for ZlibBase constructor');
        super(e),
          (this[Zt] = !1),
          (this[Si] = !1),
          (this[Pp] = e),
          (this[Mr] = e.flush),
          (this[pu] = e.finishFlush);
        try {
          this[M] = new mu[t](e);
        } catch (s) {
          throw new Jt(s);
        }
        (this[xs] = (s) => {
          this[Zt] || ((this[Zt] = !0), this.close(), this.emit('error', s));
        }),
          this[M].on('error', (s) => this[xs](new Jt(s))),
          this.once('end', () => this.close);
      }
      close() {
        this[M] && (this[M].close(), (this[M] = null), this.emit('close'));
      }
      reset() {
        if (!this[Zt]) return Ti(this[M], 'zlib binding closed'), this[M].reset();
      }
      flush(e) {
        this.ended ||
          (typeof e != 'number' && (e = this[Mi]),
          this.write(Object.assign(tt.alloc(0), { [Mr]: e })));
      }
      end(e, t, s) {
        return (
          e && this.write(e, t), this.flush(this[pu]), (this[Si] = !0), super.end(null, null, s)
        );
      }
      get ended() {
        return this[Si];
      }
      write(e, t, s) {
        if (
          (typeof t == 'function' && ((s = t), (t = 'utf8')),
          typeof e == 'string' && (e = tt.from(e, t)),
          this[Zt])
        )
          return;
        Ti(this[M], 'zlib binding closed');
        let n = this[M]._handle,
          i = n.close;
        n.close = () => {};
        let o = this[M].close;
        (this[M].close = () => {}), (tt.concat = (u) => u);
        let c;
        try {
          let u = typeof e[Mr] == 'number' ? e[Mr] : this[Mr];
          (c = this[M]._processChunk(e, u)), (tt.concat = du);
        } catch (u) {
          (tt.concat = du), this[xs](new Jt(u));
        } finally {
          this[M] &&
            ((this[M]._handle = n),
            (n.close = i),
            (this[M].close = o),
            this[M].removeAllListeners('error'));
        }
        this[M] && this[M].on('error', (u) => this[xs](new Jt(u)));
        let a;
        if (c)
          if (Array.isArray(c) && c.length > 0) {
            a = this[Ct](tt.from(c[0]));
            for (let u = 1; u < c.length; u++) a = this[Ct](c[u]);
          } else a = this[Ct](tt.from(c));
        return s && s(), a;
      }
      [Ct](e) {
        return super.write(e);
      }
    },
    je = class extends Is {
      constructor(e, t) {
        (e = e || {}),
          (e.flush = e.flush || vt.Z_NO_FLUSH),
          (e.finishFlush = e.finishFlush || vt.Z_FINISH),
          super(e, t),
          (this[Mi] = vt.Z_FULL_FLUSH),
          (this[Ci] = e.level),
          (this[wi] = e.strategy);
      }
      params(e, t) {
        if (!this[Zt]) {
          if (!this[M]) throw new Error('cannot switch params when binding is closed');
          if (!this[M].params) throw new Error('not supported in this implementation');
          if (this[Ci] !== e || this[wi] !== t) {
            this.flush(vt.Z_SYNC_FLUSH), Ti(this[M], 'zlib binding closed');
            let s = this[M].flush;
            this[M].flush = (n, i) => {
              this.flush(n), i();
            };
            try {
              this[M].params(e, t);
            } finally {
              this[M].flush = s;
            }
            this[M] && ((this[Ci] = e), (this[wi] = t));
          }
        }
      }
    },
    xi = class extends je {
      constructor(e) {
        super(e, 'Deflate');
      }
    },
    Ii = class extends je {
      constructor(e) {
        super(e, 'Inflate');
      }
    },
    Oi = Symbol('_portable'),
    bi = class extends je {
      constructor(e) {
        super(e, 'Gzip'), (this[Oi] = e && !!e.portable);
      }
      [Ct](e) {
        return this[Oi] ? ((this[Oi] = !1), (e[9] = 255), super[Ct](e)) : super[Ct](e);
      }
    },
    Ni = class extends je {
      constructor(e) {
        super(e, 'Gunzip');
      }
    },
    Li = class extends je {
      constructor(e) {
        super(e, 'DeflateRaw');
      }
    },
    Ai = class extends je {
      constructor(e) {
        super(e, 'InflateRaw');
      }
    },
    Di = class extends je {
      constructor(e) {
        super(e, 'Unzip');
      }
    },
    bs = class extends Is {
      constructor(e, t) {
        (e = e || {}),
          (e.flush = e.flush || vt.BROTLI_OPERATION_PROCESS),
          (e.finishFlush = e.finishFlush || vt.BROTLI_OPERATION_FINISH),
          super(e, t),
          (this[Mi] = vt.BROTLI_OPERATION_FLUSH);
      }
    },
    Ui = class extends bs {
      constructor(e) {
        super(e, 'BrotliCompress');
      }
    },
    Bi = class extends bs {
      constructor(e) {
        super(e, 'BrotliDecompress');
      }
    };
  fe.Deflate = xi;
  fe.Inflate = Ii;
  fe.Gzip = bi;
  fe.Gunzip = Ni;
  fe.DeflateRaw = Li;
  fe.InflateRaw = Ai;
  fe.Unzip = Di;
  typeof mu.BrotliCompress == 'function'
    ? ((fe.BrotliCompress = Ui), (fe.BrotliDecompress = Bi))
    : (fe.BrotliCompress = fe.BrotliDecompress =
        class {
          constructor() {
            throw new Error('Brotli is not supported in this version of Node.js');
          }
        });
});
var Qt = E((Ay, Eu) => {
  'use strict';
  var kp = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
  Eu.exports = kp !== 'win32' ? (r) => r : (r) => r && r.replace(/\\/g, '/');
});
var Ns = E((Uy, _u) => {
  'use strict';
  var qp = Yt(),
    Pi = Qt(),
    ki = Symbol('slurp');
  _u.exports = class extends qp {
    constructor(e, t, s) {
      switch (
        (super(),
        this.pause(),
        (this.extended = t),
        (this.globalExtended = s),
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
      (this.path = Pi(e.path)),
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
        (this.linkpath = Pi(e.linkpath)),
        (this.uname = e.uname),
        (this.gname = e.gname),
        t && this[ki](t),
        s && this[ki](s, !0);
    }
    write(e) {
      let t = e.length;
      if (t > this.blockRemain) throw new Error('writing more to entry than is appropriate');
      let s = this.remain,
        n = this.blockRemain;
      return (
        (this.remain = Math.max(0, s - t)),
        (this.blockRemain = Math.max(0, n - t)),
        this.ignore ? !0 : s >= t ? super.write(e) : super.write(e.slice(0, s))
      );
    }
    [ki](e, t) {
      for (let s in e)
        e[s] !== null &&
          e[s] !== void 0 &&
          !(t && s === 'path') &&
          (this[s] = s === 'path' || s === 'linkpath' ? Pi(e[s]) : e[s]);
    }
  };
});
var qi = E((Ls) => {
  'use strict';
  Ls.name = new Map([
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
  Ls.code = new Map(Array.from(Ls.name).map((r) => [r[1], r[0]]));
});
var vu = E((My, gu) => {
  'use strict';
  var Gp = (r, e) => {
      if (Number.isSafeInteger(r)) r < 0 ? zp(r, e) : Hp(r, e);
      else throw Error('cannot encode number outside of javascript safe integer range');
      return e;
    },
    Hp = (r, e) => {
      e[0] = 128;
      for (var t = e.length; t > 1; t--) (e[t - 1] = r & 255), (r = Math.floor(r / 256));
    },
    zp = (r, e) => {
      e[0] = 255;
      var t = !1;
      r = r * -1;
      for (var s = e.length; s > 1; s--) {
        var n = r & 255;
        (r = Math.floor(r / 256)),
          t ? (e[s - 1] = yu(n)) : n === 0 ? (e[s - 1] = 0) : ((t = !0), (e[s - 1] = Ru(n)));
      }
    },
    Vp = (r) => {
      let e = r[0],
        t = e === 128 ? $p(r.slice(1, r.length)) : e === 255 ? jp(r) : null;
      if (t === null) throw Error('invalid base256 encoding');
      if (!Number.isSafeInteger(t))
        throw Error('parsed number outside of javascript safe integer range');
      return t;
    },
    jp = (r) => {
      for (var e = r.length, t = 0, s = !1, n = e - 1; n > -1; n--) {
        var i = r[n],
          o;
        s ? (o = yu(i)) : i === 0 ? (o = i) : ((s = !0), (o = Ru(i))),
          o !== 0 && (t -= o * Math.pow(256, e - n - 1));
      }
      return t;
    },
    $p = (r) => {
      for (var e = r.length, t = 0, s = e - 1; s > -1; s--) {
        var n = r[s];
        n !== 0 && (t += n * Math.pow(256, e - s - 1));
      }
      return t;
    },
    yu = (r) => (255 ^ r) & 255,
    Ru = (r) => ((255 ^ r) + 1) & 255;
  gu.exports = { encode: Gp, parse: Vp };
});
var tr = E((Fy, wu) => {
  'use strict';
  var Gi = qi(),
    er = require('path').posix,
    Cu = vu(),
    Hi = Symbol('slurp'),
    de = Symbol('type'),
    ji = class {
      constructor(e, t, s, n) {
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
          (this[de] = '0'),
          (this.linkpath = null),
          (this.uname = null),
          (this.gname = null),
          (this.devmaj = 0),
          (this.devmin = 0),
          (this.atime = null),
          (this.ctime = null),
          Buffer.isBuffer(e) ? this.decode(e, t || 0, s, n) : e && this.set(e);
      }
      decode(e, t, s, n) {
        if ((t || (t = 0), !e || !(e.length >= t + 512)))
          throw new Error('need 512 bytes for header');
        if (
          ((this.path = wt(e, t, 100)),
          (this.mode = rt(e, t + 100, 8)),
          (this.uid = rt(e, t + 108, 8)),
          (this.gid = rt(e, t + 116, 8)),
          (this.size = rt(e, t + 124, 12)),
          (this.mtime = zi(e, t + 136, 12)),
          (this.cksum = rt(e, t + 148, 12)),
          this[Hi](s),
          this[Hi](n, !0),
          (this[de] = wt(e, t + 156, 1)),
          this[de] === '' && (this[de] = '0'),
          this[de] === '0' && this.path.substr(-1) === '/' && (this[de] = '5'),
          this[de] === '5' && (this.size = 0),
          (this.linkpath = wt(e, t + 157, 100)),
          e.slice(t + 257, t + 265).toString() === 'ustar\x0000')
        )
          if (
            ((this.uname = wt(e, t + 265, 32)),
            (this.gname = wt(e, t + 297, 32)),
            (this.devmaj = rt(e, t + 329, 8)),
            (this.devmin = rt(e, t + 337, 8)),
            e[t + 475] !== 0)
          ) {
            let o = wt(e, t + 345, 155);
            this.path = o + '/' + this.path;
          } else {
            let o = wt(e, t + 345, 130);
            o && (this.path = o + '/' + this.path),
              (this.atime = zi(e, t + 476, 12)),
              (this.ctime = zi(e, t + 488, 12));
          }
        let i = 8 * 32;
        for (let o = t; o < t + 148; o++) i += e[o];
        for (let o = t + 156; o < t + 512; o++) i += e[o];
        (this.cksumValid = i === this.cksum),
          this.cksum === null && i === 8 * 32 && (this.nullBlock = !0);
      }
      [Hi](e, t) {
        for (let s in e)
          e[s] !== null && e[s] !== void 0 && !(t && s === 'path') && (this[s] = e[s]);
      }
      encode(e, t) {
        if (
          (e || ((e = this.block = Buffer.alloc(512)), (t = 0)),
          t || (t = 0),
          !(e.length >= t + 512))
        )
          throw new Error('need 512 bytes for header');
        let s = this.ctime || this.atime ? 130 : 155,
          n = Xp(this.path || '', s),
          i = n[0],
          o = n[1];
        (this.needPax = n[2]),
          (this.needPax = St(e, t, 100, i) || this.needPax),
          (this.needPax = st(e, t + 100, 8, this.mode) || this.needPax),
          (this.needPax = st(e, t + 108, 8, this.uid) || this.needPax),
          (this.needPax = st(e, t + 116, 8, this.gid) || this.needPax),
          (this.needPax = st(e, t + 124, 12, this.size) || this.needPax),
          (this.needPax = Vi(e, t + 136, 12, this.mtime) || this.needPax),
          (e[t + 156] = this[de].charCodeAt(0)),
          (this.needPax = St(e, t + 157, 100, this.linkpath) || this.needPax),
          e.write('ustar\x0000', t + 257, 8),
          (this.needPax = St(e, t + 265, 32, this.uname) || this.needPax),
          (this.needPax = St(e, t + 297, 32, this.gname) || this.needPax),
          (this.needPax = st(e, t + 329, 8, this.devmaj) || this.needPax),
          (this.needPax = st(e, t + 337, 8, this.devmin) || this.needPax),
          (this.needPax = St(e, t + 345, s, o) || this.needPax),
          e[t + 475] !== 0
            ? (this.needPax = St(e, t + 345, 155, o) || this.needPax)
            : ((this.needPax = St(e, t + 345, 130, o) || this.needPax),
              (this.needPax = Vi(e, t + 476, 12, this.atime) || this.needPax),
              (this.needPax = Vi(e, t + 488, 12, this.ctime) || this.needPax));
        let c = 8 * 32;
        for (let a = t; a < t + 148; a++) c += e[a];
        for (let a = t + 156; a < t + 512; a++) c += e[a];
        return (
          (this.cksum = c), st(e, t + 148, 8, this.cksum), (this.cksumValid = !0), this.needPax
        );
      }
      set(e) {
        for (let t in e) e[t] !== null && e[t] !== void 0 && (this[t] = e[t]);
      }
      get type() {
        return Gi.name.get(this[de]) || this[de];
      }
      get typeKey() {
        return this[de];
      }
      set type(e) {
        Gi.code.has(e) ? (this[de] = Gi.code.get(e)) : (this[de] = e);
      }
    },
    Xp = (r, e) => {
      let s = r,
        n = '',
        i,
        o = er.parse(r).root || '.';
      if (Buffer.byteLength(s) < 100) i = [s, n, !1];
      else {
        (n = er.dirname(s)), (s = er.basename(s));
        do
          Buffer.byteLength(s) <= 100 && Buffer.byteLength(n) <= e
            ? (i = [s, n, !1])
            : Buffer.byteLength(s) > 100 && Buffer.byteLength(n) <= e
              ? (i = [s.substr(0, 99), n, !0])
              : ((s = er.join(er.basename(n), s)), (n = er.dirname(n)));
        while (n !== o && !i);
        i || (i = [r.substr(0, 99), '', !0]);
      }
      return i;
    },
    wt = (r, e, t) =>
      r
        .slice(e, e + t)
        .toString('utf8')
        .replace(/\0.*/, ''),
    zi = (r, e, t) => Wp(rt(r, e, t)),
    Wp = (r) => (r === null ? null : new Date(r * 1e3)),
    rt = (r, e, t) => (r[e] & 128 ? Cu.parse(r.slice(e, e + t)) : Yp(r, e, t)),
    Kp = (r) => (isNaN(r) ? null : r),
    Yp = (r, e, t) =>
      Kp(
        parseInt(
          r
            .slice(e, e + t)
            .toString('utf8')
            .replace(/\0.*$/, '')
            .trim(),
          8
        )
      ),
    Zp = { 12: 8589934591, 8: 2097151 },
    st = (r, e, t, s) =>
      s === null
        ? !1
        : s > Zp[t] || s < 0
          ? (Cu.encode(s, r.slice(e, e + t)), !0)
          : (Jp(r, e, t, s), !1),
    Jp = (r, e, t, s) => r.write(Qp(s, t), e, t, 'ascii'),
    Qp = (r, e) => em(Math.floor(r).toString(8), e),
    em = (r, e) =>
      (r.length === e - 1 ? r : new Array(e - r.length - 1).join('0') + r + ' ') + '\0',
    Vi = (r, e, t, s) => (s === null ? !1 : st(r, e, t, s.getTime() / 1e3)),
    tm = new Array(156).join('\0'),
    St = (r, e, t, s) =>
      s === null
        ? !1
        : (r.write(s + tm, e, t, 'utf8'), s.length !== Buffer.byteLength(s) || s.length > t);
  wu.exports = ji;
});
var As = E((Py, Su) => {
  'use strict';
  var rm = tr(),
    sm = require('path'),
    Fr = class {
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
          s = 512 * Math.ceil(1 + t / 512),
          n = Buffer.allocUnsafe(s);
        for (let i = 0; i < 512; i++) n[i] = 0;
        new rm({
          path: ('PaxHeader/' + sm.basename(this.path)).slice(0, 99),
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
        }).encode(n),
          n.write(e, 512, t, 'utf8');
        for (let i = t + 512; i < n.length; i++) n[i] = 0;
        return n;
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
          s =
            ' ' +
            (e === 'dev' || e === 'ino' || e === 'nlink' ? 'SCHILY.' : '') +
            e +
            '=' +
            t +
            `
`,
          n = Buffer.byteLength(s),
          i = Math.floor(Math.log(n) / Math.log(10)) + 1;
        return n + i >= Math.pow(10, i) && (i += 1), i + n + s;
      }
    };
  Fr.parse = (r, e, t) => new Fr(nm(im(r), e), t);
  var nm = (r, e) => (e ? Object.keys(r).reduce((t, s) => ((t[s] = r[s]), t), e) : r),
    im = (r) =>
      r
        .replace(/\n$/, '')
        .split(
          `
`
        )
        .reduce(om, Object.create(null)),
    om = (r, e) => {
      let t = parseInt(e, 10);
      if (t !== Buffer.byteLength(e) + 1) return r;
      e = e.substr((t + ' ').length);
      let s = e.split('='),
        n = s.shift().replace(/^SCHILY\.(dev|ino|nlink)/, '$1');
      if (!n) return r;
      let i = s.join('=');
      return (
        (r[n] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(n)
          ? new Date(i * 1e3)
          : /^[0-9]+$/.test(i)
            ? +i
            : i),
        r
      );
    };
  Su.exports = Fr;
});
var rr = E((ky, Ou) => {
  'use strict';
  Ou.exports = (r) => {
    let e = r.length - 1,
      t = -1;
    for (; e > -1 && r.charAt(e) === '/'; ) (t = e), e--;
    return t === -1 ? r : r.slice(0, t);
  };
});
var Ds = E((qy, Tu) => {
  'use strict';
  Tu.exports = (r) =>
    class extends r {
      warn(e, t, s = {}) {
        this.file && (s.file = this.file),
          this.cwd && (s.cwd = this.cwd),
          (s.code = (t instanceof Error && t.code) || e),
          (s.tarCode = e),
          !this.strict && s.recoverable !== !1
            ? (t instanceof Error && ((s = Object.assign(t, s)), (t = t.message)),
              this.emit('warn', s.tarCode, t, s))
            : t instanceof Error
              ? this.emit('error', Object.assign(t, s))
              : this.emit('error', Object.assign(new Error(`${e}: ${t}`), s));
      }
    };
});
var Xi = E((Hy, xu) => {
  'use strict';
  var Us = ['|', '<', '>', '?', ':'],
    $i = Us.map((r) => String.fromCharCode(61440 + r.charCodeAt(0))),
    am = new Map(Us.map((r, e) => [r, $i[e]])),
    cm = new Map($i.map((r, e) => [r, Us[e]]));
  xu.exports = {
    encode: (r) => Us.reduce((e, t) => e.split(t).join(am.get(t)), r),
    decode: (r) => $i.reduce((e, t) => e.split(t).join(cm.get(t)), r),
  };
});
var Wi = E((zy, bu) => {
  'use strict';
  var { isAbsolute: um, parse: Iu } = require('path').win32;
  bu.exports = (r) => {
    let e = '',
      t = Iu(r);
    for (; um(r) || t.root; ) {
      let s = r.charAt(0) === '/' && r.slice(0, 4) !== '//?/' ? '/' : t.root;
      (r = r.substr(s.length)), (e += s), (t = Iu(r));
    }
    return [e, r];
  };
});
var Lu = E((Vy, Nu) => {
  'use strict';
  Nu.exports = (r, e, t) => (
    (r &= 4095),
    t && (r = (r | 384) & -19),
    e && (r & 256 && (r |= 64), r & 32 && (r |= 8), r & 4 && (r |= 1)),
    r
  );
});
var no = E((Xy, ju) => {
  'use strict';
  var Pu = Yt(),
    ku = As(),
    qu = tr(),
    De = require('fs'),
    Au = require('path'),
    Ae = Qt(),
    lm = rr(),
    Gu = (r, e) => (e ? ((r = Ae(r).replace(/^\.(\/|$)/, '')), lm(e) + '/' + r) : Ae(r)),
    hm = 16 * 1024 * 1024,
    Du = Symbol('process'),
    Uu = Symbol('file'),
    Bu = Symbol('directory'),
    Yi = Symbol('symlink'),
    Mu = Symbol('hardlink'),
    Pr = Symbol('header'),
    Bs = Symbol('read'),
    Zi = Symbol('lstat'),
    Ms = Symbol('onlstat'),
    Ji = Symbol('onread'),
    Qi = Symbol('onreadlink'),
    eo = Symbol('openfile'),
    to = Symbol('onopenfile'),
    nt = Symbol('close'),
    Fs = Symbol('mode'),
    ro = Symbol('awaitDrain'),
    Ki = Symbol('ondrain'),
    Ue = Symbol('prefix'),
    Fu = Symbol('hadError'),
    Hu = Ds(),
    fm = Xi(),
    zu = Wi(),
    Vu = Lu(),
    Ps = Hu(
      class extends Pu {
        constructor(e, t) {
          if (((t = t || {}), super(t), typeof e != 'string'))
            throw new TypeError('path is required');
          (this.path = Ae(e)),
            (this.portable = !!t.portable),
            (this.myuid = (process.getuid && process.getuid()) || 0),
            (this.myuser = process.env.USER || ''),
            (this.maxReadSize = t.maxReadSize || hm),
            (this.linkCache = t.linkCache || new Map()),
            (this.statCache = t.statCache || new Map()),
            (this.preservePaths = !!t.preservePaths),
            (this.cwd = Ae(t.cwd || process.cwd())),
            (this.strict = !!t.strict),
            (this.noPax = !!t.noPax),
            (this.noMtime = !!t.noMtime),
            (this.mtime = t.mtime || null),
            (this.prefix = t.prefix ? Ae(t.prefix) : null),
            (this.fd = null),
            (this.blockLen = null),
            (this.blockRemain = null),
            (this.buf = null),
            (this.offset = null),
            (this.length = null),
            (this.pos = null),
            (this.remain = null),
            typeof t.onwarn == 'function' && this.on('warn', t.onwarn);
          let s = !1;
          if (!this.preservePaths) {
            let [n, i] = zu(this.path);
            n && ((this.path = i), (s = n));
          }
          (this.win32 = !!t.win32 || process.platform === 'win32'),
            this.win32 &&
              ((this.path = fm.decode(this.path.replace(/\\/g, '/'))), (e = e.replace(/\\/g, '/'))),
            (this.absolute = Ae(t.absolute || Au.resolve(this.cwd, e))),
            this.path === '' && (this.path = './'),
            s &&
              this.warn('TAR_ENTRY_INFO', `stripping ${s} from absolute path`, {
                entry: this,
                path: s + this.path,
              }),
            this.statCache.has(this.absolute)
              ? this[Ms](this.statCache.get(this.absolute))
              : this[Zi]();
        }
        emit(e, ...t) {
          return e === 'error' && (this[Fu] = !0), super.emit(e, ...t);
        }
        [Zi]() {
          De.lstat(this.absolute, (e, t) => {
            if (e) return this.emit('error', e);
            this[Ms](t);
          });
        }
        [Ms](e) {
          this.statCache.set(this.absolute, e),
            (this.stat = e),
            e.isFile() || (e.size = 0),
            (this.type = pm(e)),
            this.emit('stat', e),
            this[Du]();
        }
        [Du]() {
          switch (this.type) {
            case 'File':
              return this[Uu]();
            case 'Directory':
              return this[Bu]();
            case 'SymbolicLink':
              return this[Yi]();
            default:
              return this.end();
          }
        }
        [Fs](e) {
          return Vu(e, this.type === 'Directory', this.portable);
        }
        [Ue](e) {
          return Gu(e, this.prefix);
        }
        [Pr]() {
          this.type === 'Directory' && this.portable && (this.noMtime = !0),
            (this.header = new qu({
              path: this[Ue](this.path),
              linkpath: this.type === 'Link' ? this[Ue](this.linkpath) : this.linkpath,
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
                new ku({
                  atime: this.portable ? null : this.header.atime,
                  ctime: this.portable ? null : this.header.ctime,
                  gid: this.portable ? null : this.header.gid,
                  mtime: this.noMtime ? null : this.mtime || this.header.mtime,
                  path: this[Ue](this.path),
                  linkpath: this.type === 'Link' ? this[Ue](this.linkpath) : this.linkpath,
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
        [Bu]() {
          this.path.substr(-1) !== '/' && (this.path += '/'),
            (this.stat.size = 0),
            this[Pr](),
            this.end();
        }
        [Yi]() {
          De.readlink(this.absolute, (e, t) => {
            if (e) return this.emit('error', e);
            this[Qi](t);
          });
        }
        [Qi](e) {
          (this.linkpath = Ae(e)), this[Pr](), this.end();
        }
        [Mu](e) {
          (this.type = 'Link'),
            (this.linkpath = Ae(Au.relative(this.cwd, e))),
            (this.stat.size = 0),
            this[Pr](),
            this.end();
        }
        [Uu]() {
          if (this.stat.nlink > 1) {
            let e = this.stat.dev + ':' + this.stat.ino;
            if (this.linkCache.has(e)) {
              let t = this.linkCache.get(e);
              if (t.indexOf(this.cwd) === 0) return this[Mu](t);
            }
            this.linkCache.set(e, this.absolute);
          }
          if ((this[Pr](), this.stat.size === 0)) return this.end();
          this[eo]();
        }
        [eo]() {
          De.open(this.absolute, 'r', (e, t) => {
            if (e) return this.emit('error', e);
            this[to](t);
          });
        }
        [to](e) {
          if (((this.fd = e), this[Fu])) return this[nt]();
          (this.blockLen = 512 * Math.ceil(this.stat.size / 512)),
            (this.blockRemain = this.blockLen);
          let t = Math.min(this.blockLen, this.maxReadSize);
          (this.buf = Buffer.allocUnsafe(t)),
            (this.offset = 0),
            (this.pos = 0),
            (this.remain = this.stat.size),
            (this.length = this.buf.length),
            this[Bs]();
        }
        [Bs]() {
          let { fd: e, buf: t, offset: s, length: n, pos: i } = this;
          De.read(e, t, s, n, i, (o, c) => {
            if (o) return this[nt](() => this.emit('error', o));
            this[Ji](c);
          });
        }
        [nt](e) {
          De.close(this.fd, e);
        }
        [Ji](e) {
          if (e <= 0 && this.remain > 0) {
            let n = new Error('encountered unexpected EOF');
            return (
              (n.path = this.absolute),
              (n.syscall = 'read'),
              (n.code = 'EOF'),
              this[nt](() => this.emit('error', n))
            );
          }
          if (e > this.remain) {
            let n = new Error('did not encounter expected EOF');
            return (
              (n.path = this.absolute),
              (n.syscall = 'read'),
              (n.code = 'EOF'),
              this[nt](() => this.emit('error', n))
            );
          }
          if (e === this.remain)
            for (let n = e; n < this.length && e < this.blockRemain; n++)
              (this.buf[n + this.offset] = 0), e++, this.remain++;
          let t =
            this.offset === 0 && e === this.buf.length
              ? this.buf
              : this.buf.slice(this.offset, this.offset + e);
          this.write(t) ? this[Ki]() : this[ro](() => this[Ki]());
        }
        [ro](e) {
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
        [Ki]() {
          if (!this.remain)
            return (
              this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
              this[nt]((e) => (e ? this.emit('error', e) : this.end()))
            );
          this.offset >= this.length &&
            ((this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length))),
            (this.offset = 0)),
            (this.length = this.buf.length - this.offset),
            this[Bs]();
        }
      }
    ),
    so = class extends Ps {
      [Zi]() {
        this[Ms](De.lstatSync(this.absolute));
      }
      [Yi]() {
        this[Qi](De.readlinkSync(this.absolute));
      }
      [eo]() {
        this[to](De.openSync(this.absolute, 'r'));
      }
      [Bs]() {
        let e = !0;
        try {
          let { fd: t, buf: s, offset: n, length: i, pos: o } = this,
            c = De.readSync(t, s, n, i, o);
          this[Ji](c), (e = !1);
        } finally {
          if (e)
            try {
              this[nt](() => {});
            } catch {}
        }
      }
      [ro](e) {
        e();
      }
      [nt](e) {
        De.closeSync(this.fd), e();
      }
    },
    dm = Hu(
      class extends Pu {
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
            (this.path = Ae(e.path)),
            (this.mode = this[Fs](e.mode)),
            (this.uid = this.portable ? null : e.uid),
            (this.gid = this.portable ? null : e.gid),
            (this.uname = this.portable ? null : e.uname),
            (this.gname = this.portable ? null : e.gname),
            (this.size = e.size),
            (this.mtime = this.noMtime ? null : t.mtime || e.mtime),
            (this.atime = this.portable ? null : e.atime),
            (this.ctime = this.portable ? null : e.ctime),
            (this.linkpath = Ae(e.linkpath)),
            typeof t.onwarn == 'function' && this.on('warn', t.onwarn);
          let s = !1;
          if (!this.preservePaths) {
            let [n, i] = zu(this.path);
            n && ((this.path = i), (s = n));
          }
          (this.remain = e.size),
            (this.blockRemain = e.startBlockSize),
            (this.header = new qu({
              path: this[Ue](this.path),
              linkpath: this.type === 'Link' ? this[Ue](this.linkpath) : this.linkpath,
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
            s &&
              this.warn('TAR_ENTRY_INFO', `stripping ${s} from absolute path`, {
                entry: this,
                path: s + this.path,
              }),
            this.header.encode() &&
              !this.noPax &&
              super.write(
                new ku({
                  atime: this.portable ? null : this.atime,
                  ctime: this.portable ? null : this.ctime,
                  gid: this.portable ? null : this.gid,
                  mtime: this.noMtime ? null : this.mtime,
                  path: this[Ue](this.path),
                  linkpath: this.type === 'Link' ? this[Ue](this.linkpath) : this.linkpath,
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
        [Ue](e) {
          return Gu(e, this.prefix);
        }
        [Fs](e) {
          return Vu(e, this.type === 'Directory', this.portable);
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
  Ps.Sync = so;
  Ps.Tar = dm;
  var pm = (r) =>
    r.isFile()
      ? 'File'
      : r.isDirectory()
        ? 'Directory'
        : r.isSymbolicLink()
          ? 'SymbolicLink'
          : 'Unsupported';
  ju.exports = Ps;
});
var Xu = E((Wy, $u) => {
  'use strict';
  $u.exports = function (r) {
    r.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next) yield e.value;
    };
  };
});
var io = E((Ky, Wu) => {
  'use strict';
  Wu.exports = b;
  b.Node = Ot;
  b.create = b;
  function b(r) {
    var e = this;
    if (
      (e instanceof b || (e = new b()),
      (e.tail = null),
      (e.head = null),
      (e.length = 0),
      r && typeof r.forEach == 'function')
    )
      r.forEach(function (n) {
        e.push(n);
      });
    else if (arguments.length > 0)
      for (var t = 0, s = arguments.length; t < s; t++) e.push(arguments[t]);
    return e;
  }
  b.prototype.removeNode = function (r) {
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
  b.prototype.unshiftNode = function (r) {
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
  b.prototype.pushNode = function (r) {
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
  b.prototype.push = function () {
    for (var r = 0, e = arguments.length; r < e; r++) Em(this, arguments[r]);
    return this.length;
  };
  b.prototype.unshift = function () {
    for (var r = 0, e = arguments.length; r < e; r++) _m(this, arguments[r]);
    return this.length;
  };
  b.prototype.pop = function () {
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
  b.prototype.shift = function () {
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
  b.prototype.forEach = function (r, e) {
    e = e || this;
    for (var t = this.head, s = 0; t !== null; s++) r.call(e, t.value, s, this), (t = t.next);
  };
  b.prototype.forEachReverse = function (r, e) {
    e = e || this;
    for (var t = this.tail, s = this.length - 1; t !== null; s--)
      r.call(e, t.value, s, this), (t = t.prev);
  };
  b.prototype.get = function (r) {
    for (var e = 0, t = this.head; t !== null && e < r; e++) t = t.next;
    if (e === r && t !== null) return t.value;
  };
  b.prototype.getReverse = function (r) {
    for (var e = 0, t = this.tail; t !== null && e < r; e++) t = t.prev;
    if (e === r && t !== null) return t.value;
  };
  b.prototype.map = function (r, e) {
    e = e || this;
    for (var t = new b(), s = this.head; s !== null; )
      t.push(r.call(e, s.value, this)), (s = s.next);
    return t;
  };
  b.prototype.mapReverse = function (r, e) {
    e = e || this;
    for (var t = new b(), s = this.tail; s !== null; )
      t.push(r.call(e, s.value, this)), (s = s.prev);
    return t;
  };
  b.prototype.reduce = function (r, e) {
    var t,
      s = this.head;
    if (arguments.length > 1) t = e;
    else if (this.head) (s = this.head.next), (t = this.head.value);
    else throw new TypeError('Reduce of empty list with no initial value');
    for (var n = 0; s !== null; n++) (t = r(t, s.value, n)), (s = s.next);
    return t;
  };
  b.prototype.reduceReverse = function (r, e) {
    var t,
      s = this.tail;
    if (arguments.length > 1) t = e;
    else if (this.tail) (s = this.tail.prev), (t = this.tail.value);
    else throw new TypeError('Reduce of empty list with no initial value');
    for (var n = this.length - 1; s !== null; n--) (t = r(t, s.value, n)), (s = s.prev);
    return t;
  };
  b.prototype.toArray = function () {
    for (var r = new Array(this.length), e = 0, t = this.head; t !== null; e++)
      (r[e] = t.value), (t = t.next);
    return r;
  };
  b.prototype.toArrayReverse = function () {
    for (var r = new Array(this.length), e = 0, t = this.tail; t !== null; e++)
      (r[e] = t.value), (t = t.prev);
    return r;
  };
  b.prototype.slice = function (r, e) {
    (e = e || this.length), e < 0 && (e += this.length), (r = r || 0), r < 0 && (r += this.length);
    var t = new b();
    if (e < r || e < 0) return t;
    r < 0 && (r = 0), e > this.length && (e = this.length);
    for (var s = 0, n = this.head; n !== null && s < r; s++) n = n.next;
    for (; n !== null && s < e; s++, n = n.next) t.push(n.value);
    return t;
  };
  b.prototype.sliceReverse = function (r, e) {
    (e = e || this.length), e < 0 && (e += this.length), (r = r || 0), r < 0 && (r += this.length);
    var t = new b();
    if (e < r || e < 0) return t;
    r < 0 && (r = 0), e > this.length && (e = this.length);
    for (var s = this.length, n = this.tail; n !== null && s > e; s--) n = n.prev;
    for (; n !== null && s > r; s--, n = n.prev) t.push(n.value);
    return t;
  };
  b.prototype.splice = function (r, e, ...t) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var s = 0, n = this.head; n !== null && s < r; s++) n = n.next;
    for (var i = [], s = 0; n && s < e; s++) i.push(n.value), (n = this.removeNode(n));
    n === null && (n = this.tail), n !== this.head && n !== this.tail && (n = n.prev);
    for (var s = 0; s < t.length; s++) n = mm(this, n, t[s]);
    return i;
  };
  b.prototype.reverse = function () {
    for (var r = this.head, e = this.tail, t = r; t !== null; t = t.prev) {
      var s = t.prev;
      (t.prev = t.next), (t.next = s);
    }
    return (this.head = e), (this.tail = r), this;
  };
  function mm(r, e, t) {
    var s = e === r.head ? new Ot(t, null, e, r) : new Ot(t, e, e.next, r);
    return s.next === null && (r.tail = s), s.prev === null && (r.head = s), r.length++, s;
  }
  function Em(r, e) {
    (r.tail = new Ot(e, r.tail, null, r)), r.head || (r.head = r.tail), r.length++;
  }
  function _m(r, e) {
    (r.head = new Ot(e, null, r.head, r)), r.tail || (r.tail = r.head), r.length++;
  }
  function Ot(r, e, t, s) {
    if (!(this instanceof Ot)) return new Ot(r, e, t, s);
    (this.list = s),
      (this.value = r),
      e ? ((e.next = this), (this.prev = e)) : (this.prev = null),
      t ? ((t.prev = this), (this.next = t)) : (this.next = null);
  }
  try {
    Xu()(b);
  } catch {}
});
var Xs = E((Zy, tl) => {
  'use strict';
  var js = class {
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
    ym = Yt(),
    Rm = Fi(),
    gm = Ns(),
    mo = no(),
    vm = mo.Sync,
    Cm = mo.Tar,
    wm = io(),
    Ku = Buffer.alloc(1024),
    Gs = Symbol('onStat'),
    ks = Symbol('ended'),
    Be = Symbol('queue'),
    sr = Symbol('current'),
    Tt = Symbol('process'),
    qs = Symbol('processing'),
    Yu = Symbol('processJob'),
    Me = Symbol('jobs'),
    oo = Symbol('jobDone'),
    Hs = Symbol('addFSEntry'),
    Zu = Symbol('addTarEntry'),
    lo = Symbol('stat'),
    ho = Symbol('readdir'),
    zs = Symbol('onreaddir'),
    Vs = Symbol('pipe'),
    Ju = Symbol('entry'),
    ao = Symbol('entryOpt'),
    fo = Symbol('writeEntryClass'),
    el = Symbol('write'),
    co = Symbol('ondrain'),
    $s = require('fs'),
    Qu = require('path'),
    Sm = Ds(),
    uo = Qt(),
    Eo = Sm(
      class extends ym {
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
            (this.prefix = uo(e.prefix || '')),
            (this.linkCache = e.linkCache || new Map()),
            (this.statCache = e.statCache || new Map()),
            (this.readdirCache = e.readdirCache || new Map()),
            (this[fo] = mo),
            typeof e.onwarn == 'function' && this.on('warn', e.onwarn),
            (this.portable = !!e.portable),
            (this.zip = null),
            e.gzip
              ? (typeof e.gzip != 'object' && (e.gzip = {}),
                this.portable && (e.gzip.portable = !0),
                (this.zip = new Rm.Gzip(e.gzip)),
                this.zip.on('data', (t) => super.write(t)),
                this.zip.on('end', (t) => super.end()),
                this.zip.on('drain', (t) => this[co]()),
                this.on('resume', (t) => this.zip.resume()))
              : this.on('drain', this[co]),
            (this.noDirRecurse = !!e.noDirRecurse),
            (this.follow = !!e.follow),
            (this.noMtime = !!e.noMtime),
            (this.mtime = e.mtime || null),
            (this.filter = typeof e.filter == 'function' ? e.filter : (t) => !0),
            (this[Be] = new wm()),
            (this[Me] = 0),
            (this.jobs = +e.jobs || 4),
            (this[qs] = !1),
            (this[ks] = !1);
        }
        [el](e) {
          return super.write(e);
        }
        add(e) {
          return this.write(e), this;
        }
        end(e) {
          return e && this.write(e), (this[ks] = !0), this[Tt](), this;
        }
        write(e) {
          if (this[ks]) throw new Error('write after end');
          return e instanceof gm ? this[Zu](e) : this[Hs](e), this.flowing;
        }
        [Zu](e) {
          let t = uo(Qu.resolve(this.cwd, e.path));
          if (!this.filter(e.path, e)) e.resume();
          else {
            let s = new js(e.path, t, !1);
            (s.entry = new Cm(e, this[ao](s))),
              s.entry.on('end', (n) => this[oo](s)),
              (this[Me] += 1),
              this[Be].push(s);
          }
          this[Tt]();
        }
        [Hs](e) {
          let t = uo(Qu.resolve(this.cwd, e));
          this[Be].push(new js(e, t)), this[Tt]();
        }
        [lo](e) {
          (e.pending = !0), (this[Me] += 1);
          let t = this.follow ? 'stat' : 'lstat';
          $s[t](e.absolute, (s, n) => {
            (e.pending = !1), (this[Me] -= 1), s ? this.emit('error', s) : this[Gs](e, n);
          });
        }
        [Gs](e, t) {
          this.statCache.set(e.absolute, t),
            (e.stat = t),
            this.filter(e.path, t) || (e.ignore = !0),
            this[Tt]();
        }
        [ho](e) {
          (e.pending = !0),
            (this[Me] += 1),
            $s.readdir(e.absolute, (t, s) => {
              if (((e.pending = !1), (this[Me] -= 1), t)) return this.emit('error', t);
              this[zs](e, s);
            });
        }
        [zs](e, t) {
          this.readdirCache.set(e.absolute, t), (e.readdir = t), this[Tt]();
        }
        [Tt]() {
          if (!this[qs]) {
            this[qs] = !0;
            for (let e = this[Be].head; e !== null && this[Me] < this.jobs; e = e.next)
              if ((this[Yu](e.value), e.value.ignore)) {
                let t = e.next;
                this[Be].removeNode(e), (e.next = t);
              }
            (this[qs] = !1),
              this[ks] &&
                !this[Be].length &&
                this[Me] === 0 &&
                (this.zip ? this.zip.end(Ku) : (super.write(Ku), super.end()));
          }
        }
        get [sr]() {
          return this[Be] && this[Be].head && this[Be].head.value;
        }
        [oo](e) {
          this[Be].shift(), (this[Me] -= 1), this[Tt]();
        }
        [Yu](e) {
          if (!e.pending) {
            if (e.entry) {
              e === this[sr] && !e.piped && this[Vs](e);
              return;
            }
            if (
              (e.stat ||
                (this.statCache.has(e.absolute)
                  ? this[Gs](e, this.statCache.get(e.absolute))
                  : this[lo](e)),
              !!e.stat &&
                !e.ignore &&
                !(
                  !this.noDirRecurse &&
                  e.stat.isDirectory() &&
                  !e.readdir &&
                  (this.readdirCache.has(e.absolute)
                    ? this[zs](e, this.readdirCache.get(e.absolute))
                    : this[ho](e),
                  !e.readdir)
                ))
            ) {
              if (((e.entry = this[Ju](e)), !e.entry)) {
                e.ignore = !0;
                return;
              }
              e === this[sr] && !e.piped && this[Vs](e);
            }
          }
        }
        [ao](e) {
          return {
            onwarn: (t, s, n) => this.warn(t, s, n),
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
        [Ju](e) {
          this[Me] += 1;
          try {
            return new this[fo](e.path, this[ao](e))
              .on('end', () => this[oo](e))
              .on('error', (t) => this.emit('error', t));
          } catch (t) {
            this.emit('error', t);
          }
        }
        [co]() {
          this[sr] && this[sr].entry && this[sr].entry.resume();
        }
        [Vs](e) {
          (e.piped = !0),
            e.readdir &&
              e.readdir.forEach((n) => {
                let i = e.path,
                  o = i === './' ? '' : i.replace(/\/*$/, '/');
                this[Hs](o + n);
              });
          let t = e.entry,
            s = this.zip;
          s
            ? t.on('data', (n) => {
                s.write(n) || t.pause();
              })
            : t.on('data', (n) => {
                super.write(n) || t.pause();
              });
        }
        pause() {
          return this.zip && this.zip.pause(), super.pause();
        }
      }
    ),
    po = class extends Eo {
      constructor(e) {
        super(e), (this[fo] = vm);
      }
      pause() {}
      resume() {}
      [lo](e) {
        let t = this.follow ? 'statSync' : 'lstatSync';
        this[Gs](e, $s[t](e.absolute));
      }
      [ho](e, t) {
        this[zs](e, $s.readdirSync(e.absolute));
      }
      [Vs](e) {
        let t = e.entry,
          s = this.zip;
        e.readdir &&
          e.readdir.forEach((n) => {
            let i = e.path,
              o = i === './' ? '' : i.replace(/\/*$/, '/');
            this[Hs](o + n);
          }),
          s
            ? t.on('data', (n) => {
                s.write(n);
              })
            : t.on('data', (n) => {
                super[el](n);
              });
      }
    };
  Eo.Sync = po;
  tl.exports = Eo;
});
var hr = E((qr) => {
  'use strict';
  var Om = Yt(),
    Tm = require('events').EventEmitter,
    ce = require('fs'),
    Ro = ce.writev;
  if (!Ro) {
    let r = process.binding('fs'),
      e = r.FSReqWrap || r.FSReqCallback;
    Ro = (t, s, n, i) => {
      let o = (a, u) => i(a, u, s),
        c = new e();
      (c.oncomplete = o), r.writeBuffers(t, s, n, c);
    };
  }
  var ur = Symbol('_autoClose'),
    xe = Symbol('_close'),
    kr = Symbol('_ended'),
    D = Symbol('_fd'),
    rl = Symbol('_finished'),
    ot = Symbol('_flags'),
    _o = Symbol('_flush'),
    go = Symbol('_handleChunk'),
    vo = Symbol('_makeBuf'),
    Js = Symbol('_mode'),
    Ws = Symbol('_needDrain'),
    ar = Symbol('_onerror'),
    lr = Symbol('_onopen'),
    yo = Symbol('_onread'),
    ir = Symbol('_onwrite'),
    at = Symbol('_open'),
    $e = Symbol('_path'),
    xt = Symbol('_pos'),
    Fe = Symbol('_queue'),
    or = Symbol('_read'),
    sl = Symbol('_readSize'),
    it = Symbol('_reading'),
    Ks = Symbol('_remain'),
    nl = Symbol('_size'),
    Ys = Symbol('_write'),
    nr = Symbol('_writing'),
    Zs = Symbol('_defaultFlag'),
    cr = Symbol('_errored'),
    Qs = class extends Om {
      constructor(e, t) {
        if (
          ((t = t || {}),
          super(t),
          (this.readable = !0),
          (this.writable = !1),
          typeof e != 'string')
        )
          throw new TypeError('path must be a string');
        (this[cr] = !1),
          (this[D] = typeof t.fd == 'number' ? t.fd : null),
          (this[$e] = e),
          (this[sl] = t.readSize || 16 * 1024 * 1024),
          (this[it] = !1),
          (this[nl] = typeof t.size == 'number' ? t.size : 1 / 0),
          (this[Ks] = this[nl]),
          (this[ur] = typeof t.autoClose == 'boolean' ? t.autoClose : !0),
          typeof this[D] == 'number' ? this[or]() : this[at]();
      }
      get fd() {
        return this[D];
      }
      get path() {
        return this[$e];
      }
      write() {
        throw new TypeError('this is a readable stream');
      }
      end() {
        throw new TypeError('this is a readable stream');
      }
      [at]() {
        ce.open(this[$e], 'r', (e, t) => this[lr](e, t));
      }
      [lr](e, t) {
        e ? this[ar](e) : ((this[D] = t), this.emit('open', t), this[or]());
      }
      [vo]() {
        return Buffer.allocUnsafe(Math.min(this[sl], this[Ks]));
      }
      [or]() {
        if (!this[it]) {
          this[it] = !0;
          let e = this[vo]();
          if (e.length === 0) return process.nextTick(() => this[yo](null, 0, e));
          ce.read(this[D], e, 0, e.length, null, (t, s, n) => this[yo](t, s, n));
        }
      }
      [yo](e, t, s) {
        (this[it] = !1), e ? this[ar](e) : this[go](t, s) && this[or]();
      }
      [xe]() {
        if (this[ur] && typeof this[D] == 'number') {
          let e = this[D];
          (this[D] = null), ce.close(e, (t) => (t ? this.emit('error', t) : this.emit('close')));
        }
      }
      [ar](e) {
        (this[it] = !0), this[xe](), this.emit('error', e);
      }
      [go](e, t) {
        let s = !1;
        return (
          (this[Ks] -= e),
          e > 0 && (s = super.write(e < t.length ? t.slice(0, e) : t)),
          (e === 0 || this[Ks] <= 0) && ((s = !1), this[xe](), super.end()),
          s
        );
      }
      emit(e, t) {
        switch (e) {
          case 'prefinish':
          case 'finish':
            break;
          case 'drain':
            typeof this[D] == 'number' && this[or]();
            break;
          case 'error':
            return this[cr] ? void 0 : ((this[cr] = !0), super.emit(e, t));
          default:
            return super.emit(e, t);
        }
      }
    },
    Co = class extends Qs {
      [at]() {
        let e = !0;
        try {
          this[lr](null, ce.openSync(this[$e], 'r')), (e = !1);
        } finally {
          e && this[xe]();
        }
      }
      [or]() {
        let e = !0;
        try {
          if (!this[it]) {
            this[it] = !0;
            do {
              let t = this[vo](),
                s = t.length === 0 ? 0 : ce.readSync(this[D], t, 0, t.length, null);
              if (!this[go](s, t)) break;
            } while (!0);
            this[it] = !1;
          }
          e = !1;
        } finally {
          e && this[xe]();
        }
      }
      [xe]() {
        if (this[ur] && typeof this[D] == 'number') {
          let e = this[D];
          (this[D] = null), ce.closeSync(e), this.emit('close');
        }
      }
    },
    en = class extends Tm {
      constructor(e, t) {
        (t = t || {}),
          super(t),
          (this.readable = !1),
          (this.writable = !0),
          (this[cr] = !1),
          (this[nr] = !1),
          (this[kr] = !1),
          (this[Ws] = !1),
          (this[Fe] = []),
          (this[$e] = e),
          (this[D] = typeof t.fd == 'number' ? t.fd : null),
          (this[Js] = t.mode === void 0 ? 438 : t.mode),
          (this[xt] = typeof t.start == 'number' ? t.start : null),
          (this[ur] = typeof t.autoClose == 'boolean' ? t.autoClose : !0);
        let s = this[xt] !== null ? 'r+' : 'w';
        (this[Zs] = t.flags === void 0),
          (this[ot] = this[Zs] ? s : t.flags),
          this[D] === null && this[at]();
      }
      emit(e, t) {
        if (e === 'error') {
          if (this[cr]) return;
          this[cr] = !0;
        }
        return super.emit(e, t);
      }
      get fd() {
        return this[D];
      }
      get path() {
        return this[$e];
      }
      [ar](e) {
        this[xe](), (this[nr] = !0), this.emit('error', e);
      }
      [at]() {
        ce.open(this[$e], this[ot], this[Js], (e, t) => this[lr](e, t));
      }
      [lr](e, t) {
        this[Zs] && this[ot] === 'r+' && e && e.code === 'ENOENT'
          ? ((this[ot] = 'w'), this[at]())
          : e
            ? this[ar](e)
            : ((this[D] = t), this.emit('open', t), this[_o]());
      }
      end(e, t) {
        return (
          e && this.write(e, t),
          (this[kr] = !0),
          !this[nr] && !this[Fe].length && typeof this[D] == 'number' && this[ir](null, 0),
          this
        );
      }
      write(e, t) {
        return (
          typeof e == 'string' && (e = Buffer.from(e, t)),
          this[kr]
            ? (this.emit('error', new Error('write() after end()')), !1)
            : this[D] === null || this[nr] || this[Fe].length
              ? (this[Fe].push(e), (this[Ws] = !0), !1)
              : ((this[nr] = !0), this[Ys](e), !0)
        );
      }
      [Ys](e) {
        ce.write(this[D], e, 0, e.length, this[xt], (t, s) => this[ir](t, s));
      }
      [ir](e, t) {
        e
          ? this[ar](e)
          : (this[xt] !== null && (this[xt] += t),
            this[Fe].length
              ? this[_o]()
              : ((this[nr] = !1),
                this[kr] && !this[rl]
                  ? ((this[rl] = !0), this[xe](), this.emit('finish'))
                  : this[Ws] && ((this[Ws] = !1), this.emit('drain'))));
      }
      [_o]() {
        if (this[Fe].length === 0) this[kr] && this[ir](null, 0);
        else if (this[Fe].length === 1) this[Ys](this[Fe].pop());
        else {
          let e = this[Fe];
          (this[Fe] = []), Ro(this[D], e, this[xt], (t, s) => this[ir](t, s));
        }
      }
      [xe]() {
        if (this[ur] && typeof this[D] == 'number') {
          let e = this[D];
          (this[D] = null), ce.close(e, (t) => (t ? this.emit('error', t) : this.emit('close')));
        }
      }
    },
    wo = class extends en {
      [at]() {
        let e;
        if (this[Zs] && this[ot] === 'r+')
          try {
            e = ce.openSync(this[$e], this[ot], this[Js]);
          } catch (t) {
            if (t.code === 'ENOENT') return (this[ot] = 'w'), this[at]();
            throw t;
          }
        else e = ce.openSync(this[$e], this[ot], this[Js]);
        this[lr](null, e);
      }
      [xe]() {
        if (this[ur] && typeof this[D] == 'number') {
          let e = this[D];
          (this[D] = null), ce.closeSync(e), this.emit('close');
        }
      }
      [Ys](e) {
        let t = !0;
        try {
          this[ir](null, ce.writeSync(this[D], e, 0, e.length, this[xt])), (t = !1);
        } finally {
          if (t)
            try {
              this[xe]();
            } catch {}
        }
      }
    };
  qr.ReadStream = Qs;
  qr.ReadStreamSync = Co;
  qr.WriteStream = en;
  qr.WriteStreamSync = wo;
});
var cn = E((eR, hl) => {
  'use strict';
  var xm = Ds(),
    Im = tr(),
    bm = require('events'),
    Nm = io(),
    Lm = 1024 * 1024,
    Am = Ns(),
    il = As(),
    Dm = Fi(),
    So = Buffer.from([31, 139]),
    ye = Symbol('state'),
    It = Symbol('writeEntry'),
    Xe = Symbol('readEntry'),
    Oo = Symbol('nextEntry'),
    ol = Symbol('processEntry'),
    Re = Symbol('extendedHeader'),
    Gr = Symbol('globalExtendedHeader'),
    ct = Symbol('meta'),
    al = Symbol('emitMeta'),
    P = Symbol('buffer'),
    We = Symbol('queue'),
    bt = Symbol('ended'),
    cl = Symbol('emittedEnd'),
    Nt = Symbol('emit'),
    ue = Symbol('unzip'),
    tn = Symbol('consumeChunk'),
    rn = Symbol('consumeChunkSub'),
    To = Symbol('consumeBody'),
    ul = Symbol('consumeMeta'),
    ll = Symbol('consumeHeader'),
    sn = Symbol('consuming'),
    xo = Symbol('bufferConcat'),
    Io = Symbol('maybeEnd'),
    Hr = Symbol('writing'),
    ut = Symbol('aborted'),
    nn = Symbol('onDone'),
    Lt = Symbol('sawValidEntry'),
    on = Symbol('sawNullBlock'),
    an = Symbol('sawEOF'),
    Um = (r) => !0;
  hl.exports = xm(
    class extends bm {
      constructor(e) {
        (e = e || {}),
          super(e),
          (this.file = e.file || ''),
          (this[Lt] = null),
          this.on(nn, (t) => {
            (this[ye] === 'begin' || this[Lt] === !1) &&
              this.warn('TAR_BAD_ARCHIVE', 'Unrecognized archive format');
          }),
          e.ondone
            ? this.on(nn, e.ondone)
            : this.on(nn, (t) => {
                this.emit('prefinish'), this.emit('finish'), this.emit('end'), this.emit('close');
              }),
          (this.strict = !!e.strict),
          (this.maxMetaEntrySize = e.maxMetaEntrySize || Lm),
          (this.filter = typeof e.filter == 'function' ? e.filter : Um),
          (this.writable = !0),
          (this.readable = !1),
          (this[We] = new Nm()),
          (this[P] = null),
          (this[Xe] = null),
          (this[It] = null),
          (this[ye] = 'begin'),
          (this[ct] = ''),
          (this[Re] = null),
          (this[Gr] = null),
          (this[bt] = !1),
          (this[ue] = null),
          (this[ut] = !1),
          (this[on] = !1),
          (this[an] = !1),
          typeof e.onwarn == 'function' && this.on('warn', e.onwarn),
          typeof e.onentry == 'function' && this.on('entry', e.onentry);
      }
      [ll](e, t) {
        this[Lt] === null && (this[Lt] = !1);
        let s;
        try {
          s = new Im(e, t, this[Re], this[Gr]);
        } catch (n) {
          return this.warn('TAR_ENTRY_INVALID', n);
        }
        if (s.nullBlock)
          this[on]
            ? ((this[an] = !0), this[ye] === 'begin' && (this[ye] = 'header'), this[Nt]('eof'))
            : ((this[on] = !0), this[Nt]('nullBlock'));
        else if (((this[on] = !1), !s.cksumValid))
          this.warn('TAR_ENTRY_INVALID', 'checksum failure', { header: s });
        else if (!s.path) this.warn('TAR_ENTRY_INVALID', 'path is required', { header: s });
        else {
          let n = s.type;
          if (/^(Symbolic)?Link$/.test(n) && !s.linkpath)
            this.warn('TAR_ENTRY_INVALID', 'linkpath required', { header: s });
          else if (!/^(Symbolic)?Link$/.test(n) && s.linkpath)
            this.warn('TAR_ENTRY_INVALID', 'linkpath forbidden', { header: s });
          else {
            let i = (this[It] = new Am(s, this[Re], this[Gr]));
            if (!this[Lt])
              if (i.remain) {
                let o = () => {
                  i.invalid || (this[Lt] = !0);
                };
                i.on('end', o);
              } else this[Lt] = !0;
            i.meta
              ? i.size > this.maxMetaEntrySize
                ? ((i.ignore = !0), this[Nt]('ignoredEntry', i), (this[ye] = 'ignore'), i.resume())
                : i.size > 0 &&
                  ((this[ct] = ''), i.on('data', (o) => (this[ct] += o)), (this[ye] = 'meta'))
              : ((this[Re] = null),
                (i.ignore = i.ignore || !this.filter(i.path, i)),
                i.ignore
                  ? (this[Nt]('ignoredEntry', i),
                    (this[ye] = i.remain ? 'ignore' : 'header'),
                    i.resume())
                  : (i.remain ? (this[ye] = 'body') : ((this[ye] = 'header'), i.end()),
                    this[Xe] ? this[We].push(i) : (this[We].push(i), this[Oo]())));
          }
        }
      }
      [ol](e) {
        let t = !0;
        return (
          e
            ? Array.isArray(e)
              ? this.emit.apply(this, e)
              : ((this[Xe] = e),
                this.emit('entry', e),
                e.emittedEnd || (e.on('end', (s) => this[Oo]()), (t = !1)))
            : ((this[Xe] = null), (t = !1)),
          t
        );
      }
      [Oo]() {
        do;
        while (this[ol](this[We].shift()));
        if (!this[We].length) {
          let e = this[Xe];
          !e || e.flowing || e.size === e.remain
            ? this[Hr] || this.emit('drain')
            : e.once('drain', (s) => this.emit('drain'));
        }
      }
      [To](e, t) {
        let s = this[It],
          n = s.blockRemain,
          i = n >= e.length && t === 0 ? e : e.slice(t, t + n);
        return (
          s.write(i), s.blockRemain || ((this[ye] = 'header'), (this[It] = null), s.end()), i.length
        );
      }
      [ul](e, t) {
        let s = this[It],
          n = this[To](e, t);
        return this[It] || this[al](s), n;
      }
      [Nt](e, t, s) {
        !this[We].length && !this[Xe] ? this.emit(e, t, s) : this[We].push([e, t, s]);
      }
      [al](e) {
        switch ((this[Nt]('meta', this[ct]), e.type)) {
          case 'ExtendedHeader':
          case 'OldExtendedHeader':
            this[Re] = il.parse(this[ct], this[Re], !1);
            break;
          case 'GlobalExtendedHeader':
            this[Gr] = il.parse(this[ct], this[Gr], !0);
            break;
          case 'NextFileHasLongPath':
          case 'OldGnuLongPath':
            (this[Re] = this[Re] || Object.create(null)),
              (this[Re].path = this[ct].replace(/\0.*/, ''));
            break;
          case 'NextFileHasLongLinkpath':
            (this[Re] = this[Re] || Object.create(null)),
              (this[Re].linkpath = this[ct].replace(/\0.*/, ''));
            break;
          default:
            throw new Error('unknown meta: ' + e.type);
        }
      }
      abort(e) {
        (this[ut] = !0), this.emit('abort', e), this.warn('TAR_ABORT', e, { recoverable: !1 });
      }
      write(e) {
        if (this[ut]) return;
        if (this[ue] === null && e) {
          if (
            (this[P] && ((e = Buffer.concat([this[P], e])), (this[P] = null)), e.length < So.length)
          )
            return (this[P] = e), !0;
          for (let s = 0; this[ue] === null && s < So.length; s++)
            e[s] !== So[s] && (this[ue] = !1);
          if (this[ue] === null) {
            let s = this[bt];
            (this[bt] = !1),
              (this[ue] = new Dm.Unzip()),
              this[ue].on('data', (i) => this[tn](i)),
              this[ue].on('error', (i) => this.abort(i)),
              this[ue].on('end', (i) => {
                (this[bt] = !0), this[tn]();
              }),
              (this[Hr] = !0);
            let n = this[ue][s ? 'end' : 'write'](e);
            return (this[Hr] = !1), n;
          }
        }
        (this[Hr] = !0), this[ue] ? this[ue].write(e) : this[tn](e), (this[Hr] = !1);
        let t = this[We].length ? !1 : this[Xe] ? this[Xe].flowing : !0;
        return !t && !this[We].length && this[Xe].once('drain', (s) => this.emit('drain')), t;
      }
      [xo](e) {
        e && !this[ut] && (this[P] = this[P] ? Buffer.concat([this[P], e]) : e);
      }
      [Io]() {
        if (this[bt] && !this[cl] && !this[ut] && !this[sn]) {
          this[cl] = !0;
          let e = this[It];
          if (e && e.blockRemain) {
            let t = this[P] ? this[P].length : 0;
            this.warn(
              'TAR_BAD_ARCHIVE',
              `Truncated input (needed ${e.blockRemain} more bytes, only ${t} available)`,
              { entry: e }
            ),
              this[P] && e.write(this[P]),
              e.end();
          }
          this[Nt](nn);
        }
      }
      [tn](e) {
        if (this[sn]) this[xo](e);
        else if (!e && !this[P]) this[Io]();
        else {
          if (((this[sn] = !0), this[P])) {
            this[xo](e);
            let t = this[P];
            (this[P] = null), this[rn](t);
          } else this[rn](e);
          for (; this[P] && this[P].length >= 512 && !this[ut] && !this[an]; ) {
            let t = this[P];
            (this[P] = null), this[rn](t);
          }
          this[sn] = !1;
        }
        (!this[P] || this[bt]) && this[Io]();
      }
      [rn](e) {
        let t = 0,
          s = e.length;
        for (; t + 512 <= s && !this[ut] && !this[an]; )
          switch (this[ye]) {
            case 'begin':
            case 'header':
              this[ll](e, t), (t += 512);
              break;
            case 'ignore':
            case 'body':
              t += this[To](e, t);
              break;
            case 'meta':
              t += this[ul](e, t);
              break;
            default:
              throw new Error('invalid state: ' + this[ye]);
          }
        t < s &&
          (this[P] ? (this[P] = Buffer.concat([e.slice(t), this[P]])) : (this[P] = e.slice(t)));
      }
      end(e) {
        this[ut] || (this[ue] ? this[ue].end(e) : ((this[bt] = !0), this.write(e)));
      }
    }
  );
});
var un = E((tR, ml) => {
  'use strict';
  var Bm = Wt(),
    dl = cn(),
    fr = require('fs'),
    Mm = hr(),
    fl = require('path'),
    bo = rr();
  ml.exports = (r, e, t) => {
    typeof r == 'function'
      ? ((t = r), (e = null), (r = {}))
      : Array.isArray(r) && ((e = r), (r = {})),
      typeof e == 'function' && ((t = e), (e = null)),
      e ? (e = Array.from(e)) : (e = []);
    let s = Bm(r);
    if (s.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!s.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return (
      e.length && Pm(s, e),
      s.noResume || Fm(s),
      s.file && s.sync ? km(s) : s.file ? qm(s, t) : pl(s)
    );
  };
  var Fm = (r) => {
      let e = r.onentry;
      r.onentry = e
        ? (t) => {
            e(t), t.resume();
          }
        : (t) => t.resume();
    },
    Pm = (r, e) => {
      let t = new Map(e.map((i) => [bo(i), !0])),
        s = r.filter,
        n = (i, o) => {
          let c = o || fl.parse(i).root || '.',
            a = i === c ? !1 : t.has(i) ? t.get(i) : n(fl.dirname(i), c);
          return t.set(i, a), a;
        };
      r.filter = s ? (i, o) => s(i, o) && n(bo(i)) : (i) => n(bo(i));
    },
    km = (r) => {
      let e = pl(r),
        t = r.file,
        s = !0,
        n;
      try {
        let i = fr.statSync(t),
          o = r.maxReadSize || 16 * 1024 * 1024;
        if (i.size < o) e.end(fr.readFileSync(t));
        else {
          let c = 0,
            a = Buffer.allocUnsafe(o);
          for (n = fr.openSync(t, 'r'); c < i.size; ) {
            let u = fr.readSync(n, a, 0, o, c);
            (c += u), e.write(a.slice(0, u));
          }
          e.end();
        }
        s = !1;
      } finally {
        if (s && n)
          try {
            fr.closeSync(n);
          } catch {}
      }
    },
    qm = (r, e) => {
      let t = new dl(r),
        s = r.maxReadSize || 16 * 1024 * 1024,
        n = r.file,
        i = new Promise((o, c) => {
          t.on('error', c),
            t.on('end', o),
            fr.stat(n, (a, u) => {
              if (a) c(a);
              else {
                let l = new Mm.ReadStream(n, { readSize: s, size: u.size });
                l.on('error', c), l.pipe(t);
              }
            });
        });
      return e ? i.then(e, e) : i;
    },
    pl = (r) => new dl(r);
});
var vl = E((rR, gl) => {
  'use strict';
  var Gm = Wt(),
    ln = Xs(),
    El = hr(),
    _l = un(),
    yl = require('path');
  gl.exports = (r, e, t) => {
    if (
      (typeof e == 'function' && (t = e),
      Array.isArray(r) && ((e = r), (r = {})),
      !e || !Array.isArray(e) || !e.length)
    )
      throw new TypeError('no files or directories specified');
    e = Array.from(e);
    let s = Gm(r);
    if (s.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!s.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return s.file && s.sync ? Hm(s, e) : s.file ? zm(s, e, t) : s.sync ? Vm(s, e) : jm(s, e);
  };
  var Hm = (r, e) => {
      let t = new ln.Sync(r),
        s = new El.WriteStreamSync(r.file, { mode: r.mode || 438 });
      t.pipe(s), Rl(t, e);
    },
    zm = (r, e, t) => {
      let s = new ln(r),
        n = new El.WriteStream(r.file, { mode: r.mode || 438 });
      s.pipe(n);
      let i = new Promise((o, c) => {
        n.on('error', c), n.on('close', o), s.on('error', c);
      });
      return No(s, e), t ? i.then(t, t) : i;
    },
    Rl = (r, e) => {
      e.forEach((t) => {
        t.charAt(0) === '@'
          ? _l({
              file: yl.resolve(r.cwd, t.substr(1)),
              sync: !0,
              noResume: !0,
              onentry: (s) => r.add(s),
            })
          : r.add(t);
      }),
        r.end();
    },
    No = (r, e) => {
      for (; e.length; ) {
        let t = e.shift();
        if (t.charAt(0) === '@')
          return _l({
            file: yl.resolve(r.cwd, t.substr(1)),
            noResume: !0,
            onentry: (s) => r.add(s),
          }).then((s) => No(r, e));
        r.add(t);
      }
      r.end();
    },
    Vm = (r, e) => {
      let t = new ln.Sync(r);
      return Rl(t, e), t;
    },
    jm = (r, e) => {
      let t = new ln(r);
      return No(t, e), t;
    };
});
var Lo = E((sR, Il) => {
  'use strict';
  var $m = Wt(),
    Cl = Xs(),
    pe = require('fs'),
    wl = hr(),
    Sl = un(),
    Ol = require('path'),
    Tl = tr();
  Il.exports = (r, e, t) => {
    let s = $m(r);
    if (!s.file) throw new TypeError('file is required');
    if (s.gzip) throw new TypeError('cannot append to compressed archives');
    if (!e || !Array.isArray(e) || !e.length)
      throw new TypeError('no files or directories specified');
    return (e = Array.from(e)), s.sync ? Xm(s, e) : Km(s, e, t);
  };
  var Xm = (r, e) => {
      let t = new Cl.Sync(r),
        s = !0,
        n,
        i;
      try {
        try {
          n = pe.openSync(r.file, 'r+');
        } catch (a) {
          if (a.code === 'ENOENT') n = pe.openSync(r.file, 'w+');
          else throw a;
        }
        let o = pe.fstatSync(n),
          c = Buffer.alloc(512);
        e: for (i = 0; i < o.size; i += 512) {
          for (let l = 0, h = 0; l < 512; l += h) {
            if (
              ((h = pe.readSync(n, c, l, c.length - l, i + l)),
              i === 0 && c[0] === 31 && c[1] === 139)
            )
              throw new Error('cannot append to compressed archives');
            if (!h) break e;
          }
          let a = new Tl(c);
          if (!a.cksumValid) break;
          let u = 512 * Math.ceil(a.size / 512);
          if (i + u + 512 > o.size) break;
          (i += u), r.mtimeCache && r.mtimeCache.set(a.path, a.mtime);
        }
        (s = !1), Wm(r, t, i, n, e);
      } finally {
        if (s)
          try {
            pe.closeSync(n);
          } catch {}
      }
    },
    Wm = (r, e, t, s, n) => {
      let i = new wl.WriteStreamSync(r.file, { fd: s, start: t });
      e.pipe(i), Ym(e, n);
    },
    Km = (r, e, t) => {
      e = Array.from(e);
      let s = new Cl(r),
        n = (o, c, a) => {
          let u = (p, _) => {
              p ? pe.close(o, (y) => a(p)) : a(null, _);
            },
            l = 0;
          if (c === 0) return u(null, 0);
          let h = 0,
            f = Buffer.alloc(512),
            d = (p, _) => {
              if (p) return u(p);
              if (((h += _), h < 512 && _)) return pe.read(o, f, h, f.length - h, l + h, d);
              if (l === 0 && f[0] === 31 && f[1] === 139)
                return u(new Error('cannot append to compressed archives'));
              if (h < 512) return u(null, l);
              let y = new Tl(f);
              if (!y.cksumValid) return u(null, l);
              let g = 512 * Math.ceil(y.size / 512);
              if (l + g + 512 > c || ((l += g + 512), l >= c)) return u(null, l);
              r.mtimeCache && r.mtimeCache.set(y.path, y.mtime),
                (h = 0),
                pe.read(o, f, 0, 512, l, d);
            };
          pe.read(o, f, 0, 512, l, d);
        },
        i = new Promise((o, c) => {
          s.on('error', c);
          let a = 'r+',
            u = (l, h) => {
              if (l && l.code === 'ENOENT' && a === 'r+') return (a = 'w+'), pe.open(r.file, a, u);
              if (l) return c(l);
              pe.fstat(h, (f, d) => {
                if (f) return pe.close(h, () => c(f));
                n(h, d.size, (p, _) => {
                  if (p) return c(p);
                  let y = new wl.WriteStream(r.file, { fd: h, start: _ });
                  s.pipe(y), y.on('error', c), y.on('close', o), xl(s, e);
                });
              });
            };
          pe.open(r.file, a, u);
        });
      return t ? i.then(t, t) : i;
    },
    Ym = (r, e) => {
      e.forEach((t) => {
        t.charAt(0) === '@'
          ? Sl({
              file: Ol.resolve(r.cwd, t.substr(1)),
              sync: !0,
              noResume: !0,
              onentry: (s) => r.add(s),
            })
          : r.add(t);
      }),
        r.end();
    },
    xl = (r, e) => {
      for (; e.length; ) {
        let t = e.shift();
        if (t.charAt(0) === '@')
          return Sl({
            file: Ol.resolve(r.cwd, t.substr(1)),
            noResume: !0,
            onentry: (s) => r.add(s),
          }).then((s) => xl(r, e));
        r.add(t);
      }
      r.end();
    };
});
var Nl = E((nR, bl) => {
  'use strict';
  var Zm = Wt(),
    Jm = Lo();
  bl.exports = (r, e, t) => {
    let s = Zm(r);
    if (!s.file) throw new TypeError('file is required');
    if (s.gzip) throw new TypeError('cannot append to compressed archives');
    if (!e || !Array.isArray(e) || !e.length)
      throw new TypeError('no files or directories specified');
    return (e = Array.from(e)), Qm(s), Jm(s, e, t);
  };
  var Qm = (r) => {
    let e = r.filter;
    r.mtimeCache || (r.mtimeCache = new Map()),
      (r.filter = e
        ? (t, s) => e(t, s) && !(r.mtimeCache.get(t) > s.mtime)
        : (t, s) => !(r.mtimeCache.get(t) > s.mtime));
  };
});
var Dl = E((iR, Al) => {
  'use strict';
  var { promisify: Ll } = require('util'),
    lt = require('fs'),
    eE = (r) => {
      if (!r) r = { mode: 511, fs: lt };
      else if (typeof r == 'object') r = { mode: 511, fs: lt, ...r };
      else if (typeof r == 'number') r = { mode: r, fs: lt };
      else if (typeof r == 'string') r = { mode: parseInt(r, 8), fs: lt };
      else throw new TypeError('invalid options argument');
      return (
        (r.mkdir = r.mkdir || r.fs.mkdir || lt.mkdir),
        (r.mkdirAsync = Ll(r.mkdir)),
        (r.stat = r.stat || r.fs.stat || lt.stat),
        (r.statAsync = Ll(r.stat)),
        (r.statSync = r.statSync || r.fs.statSync || lt.statSync),
        (r.mkdirSync = r.mkdirSync || r.fs.mkdirSync || lt.mkdirSync),
        r
      );
    };
  Al.exports = eE;
});
var Bl = E((oR, Ul) => {
  'use strict';
  var tE = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform,
    { resolve: rE, parse: sE } = require('path'),
    nE = (r) => {
      if (/\0/.test(r))
        throw Object.assign(new TypeError('path must be a string without null bytes'), {
          path: r,
          code: 'ERR_INVALID_ARG_VALUE',
        });
      if (((r = rE(r)), tE === 'win32')) {
        let e = /[*|"<>?:]/,
          { root: t } = sE(r);
        if (e.test(r.substr(t.length)))
          throw Object.assign(new Error('Illegal characters in path.'), {
            path: r,
            code: 'EINVAL',
          });
      }
      return r;
    };
  Ul.exports = nE;
});
var ql = E((aR, kl) => {
  'use strict';
  var { dirname: Ml } = require('path'),
    Fl = (r, e, t = void 0) =>
      t === e
        ? Promise.resolve()
        : r.statAsync(e).then(
            (s) => (s.isDirectory() ? t : void 0),
            (s) => (s.code === 'ENOENT' ? Fl(r, Ml(e), e) : void 0)
          ),
    Pl = (r, e, t = void 0) => {
      if (t !== e)
        try {
          return r.statSync(e).isDirectory() ? t : void 0;
        } catch (s) {
          return s.code === 'ENOENT' ? Pl(r, Ml(e), e) : void 0;
        }
    };
  kl.exports = { findMade: Fl, findMadeSync: Pl };
});
var Uo = E((cR, Hl) => {
  'use strict';
  var { dirname: Gl } = require('path'),
    Ao = (r, e, t) => {
      e.recursive = !1;
      let s = Gl(r);
      return s === r
        ? e.mkdirAsync(r, e).catch((n) => {
            if (n.code !== 'EISDIR') throw n;
          })
        : e.mkdirAsync(r, e).then(
            () => t || r,
            (n) => {
              if (n.code === 'ENOENT') return Ao(s, e).then((i) => Ao(r, e, i));
              if (n.code !== 'EEXIST' && n.code !== 'EROFS') throw n;
              return e.statAsync(r).then(
                (i) => {
                  if (i.isDirectory()) return t;
                  throw n;
                },
                () => {
                  throw n;
                }
              );
            }
          );
    },
    Do = (r, e, t) => {
      let s = Gl(r);
      if (((e.recursive = !1), s === r))
        try {
          return e.mkdirSync(r, e);
        } catch (n) {
          if (n.code !== 'EISDIR') throw n;
          return;
        }
      try {
        return e.mkdirSync(r, e), t || r;
      } catch (n) {
        if (n.code === 'ENOENT') return Do(r, e, Do(s, e, t));
        if (n.code !== 'EEXIST' && n.code !== 'EROFS') throw n;
        try {
          if (!e.statSync(r).isDirectory()) throw n;
        } catch {
          throw n;
        }
      }
    };
  Hl.exports = { mkdirpManual: Ao, mkdirpManualSync: Do };
});
var jl = E((uR, Vl) => {
  'use strict';
  var { dirname: zl } = require('path'),
    { findMade: iE, findMadeSync: oE } = ql(),
    { mkdirpManual: aE, mkdirpManualSync: cE } = Uo(),
    uE = (r, e) => (
      (e.recursive = !0),
      zl(r) === r
        ? e.mkdirAsync(r, e)
        : iE(e, r).then((s) =>
            e
              .mkdirAsync(r, e)
              .then(() => s)
              .catch((n) => {
                if (n.code === 'ENOENT') return aE(r, e);
                throw n;
              })
          )
    ),
    lE = (r, e) => {
      if (((e.recursive = !0), zl(r) === r)) return e.mkdirSync(r, e);
      let s = oE(e, r);
      try {
        return e.mkdirSync(r, e), s;
      } catch (n) {
        if (n.code === 'ENOENT') return cE(r, e);
        throw n;
      }
    };
  Vl.exports = { mkdirpNative: uE, mkdirpNativeSync: lE };
});
var Kl = E((lR, Wl) => {
  'use strict';
  var $l = require('fs'),
    hE = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version,
    Bo = hE.replace(/^v/, '').split('.'),
    Xl = +Bo[0] > 10 || (+Bo[0] == 10 && +Bo[1] >= 12),
    fE = Xl ? (r) => r.mkdir === $l.mkdir : () => !1,
    dE = Xl ? (r) => r.mkdirSync === $l.mkdirSync : () => !1;
  Wl.exports = { useNative: fE, useNativeSync: dE };
});
var th = E((hR, eh) => {
  'use strict';
  var dr = Dl(),
    pr = Bl(),
    { mkdirpNative: Yl, mkdirpNativeSync: Zl } = jl(),
    { mkdirpManual: Jl, mkdirpManualSync: Ql } = Uo(),
    { useNative: pE, useNativeSync: mE } = Kl(),
    mr = (r, e) => ((r = pr(r)), (e = dr(e)), pE(e) ? Yl(r, e) : Jl(r, e)),
    EE = (r, e) => ((r = pr(r)), (e = dr(e)), mE(e) ? Zl(r, e) : Ql(r, e));
  mr.sync = EE;
  mr.native = (r, e) => Yl(pr(r), dr(e));
  mr.manual = (r, e) => Jl(pr(r), dr(e));
  mr.nativeSync = (r, e) => Zl(pr(r), dr(e));
  mr.manualSync = (r, e) => Ql(pr(r), dr(e));
  eh.exports = mr;
});
var ch = E((fR, ah) => {
  'use strict';
  var ge = require('fs'),
    At = require('path'),
    _E = ge.lchown ? 'lchown' : 'chown',
    yE = ge.lchownSync ? 'lchownSync' : 'chownSync',
    sh = ge.lchown && !process.version.match(/v1[1-9]+\./) && !process.version.match(/v10\.[6-9]/),
    rh = (r, e, t) => {
      try {
        return ge[yE](r, e, t);
      } catch (s) {
        if (s.code !== 'ENOENT') throw s;
      }
    },
    RE = (r, e, t) => {
      try {
        return ge.chownSync(r, e, t);
      } catch (s) {
        if (s.code !== 'ENOENT') throw s;
      }
    },
    gE = sh
      ? (r, e, t, s) => (n) => {
          !n || n.code !== 'EISDIR' ? s(n) : ge.chown(r, e, t, s);
        }
      : (r, e, t, s) => s,
    Mo = sh
      ? (r, e, t) => {
          try {
            return rh(r, e, t);
          } catch (s) {
            if (s.code !== 'EISDIR') throw s;
            RE(r, e, t);
          }
        }
      : (r, e, t) => rh(r, e, t),
    vE = process.version,
    nh = (r, e, t) => ge.readdir(r, e, t),
    CE = (r, e) => ge.readdirSync(r, e);
  /^v4\./.test(vE) && (nh = (r, e, t) => ge.readdir(r, t));
  var hn = (r, e, t, s) => {
      ge[_E](
        r,
        e,
        t,
        gE(r, e, t, (n) => {
          s(n && n.code !== 'ENOENT' ? n : null);
        })
      );
    },
    ih = (r, e, t, s, n) => {
      if (typeof e == 'string')
        return ge.lstat(At.resolve(r, e), (i, o) => {
          if (i) return n(i.code !== 'ENOENT' ? i : null);
          (o.name = e), ih(r, o, t, s, n);
        });
      if (e.isDirectory())
        Fo(At.resolve(r, e.name), t, s, (i) => {
          if (i) return n(i);
          let o = At.resolve(r, e.name);
          hn(o, t, s, n);
        });
      else {
        let i = At.resolve(r, e.name);
        hn(i, t, s, n);
      }
    },
    Fo = (r, e, t, s) => {
      nh(r, { withFileTypes: !0 }, (n, i) => {
        if (n) {
          if (n.code === 'ENOENT') return s();
          if (n.code !== 'ENOTDIR' && n.code !== 'ENOTSUP') return s(n);
        }
        if (n || !i.length) return hn(r, e, t, s);
        let o = i.length,
          c = null,
          a = (u) => {
            if (!c) {
              if (u) return s((c = u));
              if (--o === 0) return hn(r, e, t, s);
            }
          };
        i.forEach((u) => ih(r, u, e, t, a));
      });
    },
    wE = (r, e, t, s) => {
      if (typeof e == 'string')
        try {
          let n = ge.lstatSync(At.resolve(r, e));
          (n.name = e), (e = n);
        } catch (n) {
          if (n.code === 'ENOENT') return;
          throw n;
        }
      e.isDirectory() && oh(At.resolve(r, e.name), t, s), Mo(At.resolve(r, e.name), t, s);
    },
    oh = (r, e, t) => {
      let s;
      try {
        s = CE(r, { withFileTypes: !0 });
      } catch (n) {
        if (n.code === 'ENOENT') return;
        if (n.code === 'ENOTDIR' || n.code === 'ENOTSUP') return Mo(r, e, t);
        throw n;
      }
      return s && s.length && s.forEach((n) => wE(r, n, e, t)), Mo(r, e, t);
    };
  ah.exports = Fo;
  Fo.sync = oh;
});
var fh = E((dR, Po) => {
  'use strict';
  var uh = th(),
    ve = require('fs'),
    fn = require('path'),
    lh = ch(),
    Ie = Qt(),
    dn = class extends Error {
      constructor(e, t) {
        super('Cannot extract through symbolic link'), (this.path = t), (this.symlink = e);
      }
      get name() {
        return 'SylinkError';
      }
    },
    pn = class extends Error {
      constructor(e, t) {
        super(t + ": Cannot cd into '" + e + "'"), (this.path = e), (this.code = t);
      }
      get name() {
        return 'CwdError';
      }
    },
    mn = (r, e) => r.get(Ie(e)),
    zr = (r, e, t) => r.set(Ie(e), t),
    SE = (r, e) => {
      ve.stat(r, (t, s) => {
        (t || !s.isDirectory()) && (t = new pn(r, (t && t.code) || 'ENOTDIR')), e(t);
      });
    };
  Po.exports = (r, e, t) => {
    r = Ie(r);
    let s = e.umask,
      n = e.mode | 448,
      i = (n & s) !== 0,
      o = e.uid,
      c = e.gid,
      a =
        typeof o == 'number' && typeof c == 'number' && (o !== e.processUid || c !== e.processGid),
      u = e.preserve,
      l = e.unlink,
      h = e.cache,
      f = Ie(e.cwd),
      d = (y, g) => {
        y ? t(y) : (zr(h, r, !0), g && a ? lh(g, o, c, (w) => d(w)) : i ? ve.chmod(r, n, t) : t());
      };
    if (h && mn(h, r) === !0) return d();
    if (r === f) return SE(r, d);
    if (u) return uh(r, { mode: n }).then((y) => d(null, y), d);
    let _ = Ie(fn.relative(f, r)).split('/');
    En(f, _, n, h, l, f, null, d);
  };
  var En = (r, e, t, s, n, i, o, c) => {
      if (!e.length) return c(null, o);
      let a = e.shift(),
        u = Ie(fn.resolve(r + '/' + a));
      if (mn(s, u)) return En(u, e, t, s, n, i, o, c);
      ve.mkdir(u, t, hh(u, e, t, s, n, i, o, c));
    },
    hh = (r, e, t, s, n, i, o, c) => (a) => {
      a
        ? ve.lstat(r, (u, l) => {
            if (u) (u.path = u.path && Ie(u.path)), c(u);
            else if (l.isDirectory()) En(r, e, t, s, n, i, o, c);
            else if (n)
              ve.unlink(r, (h) => {
                if (h) return c(h);
                ve.mkdir(r, t, hh(r, e, t, s, n, i, o, c));
              });
            else {
              if (l.isSymbolicLink()) return c(new dn(r, r + '/' + e.join('/')));
              c(a);
            }
          })
        : ((o = o || r), En(r, e, t, s, n, i, o, c));
    },
    OE = (r) => {
      let e = !1,
        t = 'ENOTDIR';
      try {
        e = ve.statSync(r).isDirectory();
      } catch (s) {
        t = s.code;
      } finally {
        if (!e) throw new pn(r, t);
      }
    };
  Po.exports.sync = (r, e) => {
    r = Ie(r);
    let t = e.umask,
      s = e.mode | 448,
      n = (s & t) !== 0,
      i = e.uid,
      o = e.gid,
      c =
        typeof i == 'number' && typeof o == 'number' && (i !== e.processUid || o !== e.processGid),
      a = e.preserve,
      u = e.unlink,
      l = e.cache,
      h = Ie(e.cwd),
      f = (y) => {
        zr(l, r, !0), y && c && lh.sync(y, i, o), n && ve.chmodSync(r, s);
      };
    if (l && mn(l, r) === !0) return f();
    if (r === h) return OE(h), f();
    if (a) return f(uh.sync(r, s));
    let p = Ie(fn.relative(h, r)).split('/'),
      _ = null;
    for (let y = p.shift(), g = h; y && (g += '/' + y); y = p.shift())
      if (((g = Ie(fn.resolve(g))), !mn(l, g)))
        try {
          ve.mkdirSync(g, s), (_ = _ || g), zr(l, g, !0);
        } catch {
          let S = ve.lstatSync(g);
          if (S.isDirectory()) {
            zr(l, g, !0);
            continue;
          } else if (u) {
            ve.unlinkSync(g), ve.mkdirSync(g, s), (_ = _ || g), zr(l, g, !0);
            continue;
          } else if (S.isSymbolicLink()) return new dn(g, g + '/' + p.join('/'));
        }
    return f(_);
  };
});
var qo = E((pR, dh) => {
  'use strict';
  var ko = Object.create(null),
    { hasOwnProperty: TE } = Object.prototype;
  dh.exports = (r) => (TE.call(ko, r) || (ko[r] = r.normalize('NFKD')), ko[r]);
});
var _h = E((mR, Eh) => {
  'use strict';
  var ph = require('assert'),
    xE = qo(),
    IE = rr(),
    { join: mh } = require('path'),
    bE = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform,
    NE = bE === 'win32';
  Eh.exports = () => {
    let r = new Map(),
      e = new Map(),
      t = (u) =>
        u
          .split('/')
          .slice(0, -1)
          .reduce((h, f) => (h.length && (f = mh(h[h.length - 1], f)), h.push(f || '/'), h), []),
      s = new Set(),
      n = (u) => {
        let l = e.get(u);
        if (!l) throw new Error('function does not have any path reservations');
        return { paths: l.paths.map((h) => r.get(h)), dirs: [...l.dirs].map((h) => r.get(h)) };
      },
      i = (u) => {
        let { paths: l, dirs: h } = n(u);
        return l.every((f) => f[0] === u) && h.every((f) => f[0] instanceof Set && f[0].has(u));
      },
      o = (u) => (s.has(u) || !i(u) ? !1 : (s.add(u), u(() => c(u)), !0)),
      c = (u) => {
        if (!s.has(u)) return !1;
        let { paths: l, dirs: h } = e.get(u),
          f = new Set();
        return (
          l.forEach((d) => {
            let p = r.get(d);
            ph.equal(p[0], u),
              p.length === 1
                ? r.delete(d)
                : (p.shift(),
                  typeof p[0] == 'function' ? f.add(p[0]) : p[0].forEach((_) => f.add(_)));
          }),
          h.forEach((d) => {
            let p = r.get(d);
            ph(p[0] instanceof Set),
              p[0].size === 1 && p.length === 1
                ? r.delete(d)
                : p[0].size === 1
                  ? (p.shift(), f.add(p[0]))
                  : p[0].delete(u);
          }),
          s.delete(u),
          f.forEach((d) => o(d)),
          !0
        );
      };
    return {
      check: i,
      reserve: (u, l) => {
        u = NE ? ['win32 parallelization disabled'] : u.map((f) => xE(IE(mh(f))).toLowerCase());
        let h = new Set(u.map((f) => t(f)).reduce((f, d) => f.concat(d)));
        return (
          e.set(l, { dirs: h, paths: u }),
          u.forEach((f) => {
            let d = r.get(f);
            d ? d.push(l) : r.set(f, [l]);
          }),
          h.forEach((f) => {
            let d = r.get(f);
            d
              ? d[d.length - 1] instanceof Set
                ? d[d.length - 1].add(l)
                : d.push(new Set([l]))
              : r.set(f, [new Set([l])]);
          }),
          o(l)
        );
      },
    };
  };
});
var gh = E((ER, Rh) => {
  'use strict';
  var LE = process.env.__FAKE_PLATFORM__ || process.platform,
    AE = LE === 'win32',
    DE = global.__FAKE_TESTING_FS__ || require('fs'),
    { O_CREAT: UE, O_TRUNC: BE, O_WRONLY: ME, UV_FS_O_FILEMAP: yh = 0 } = DE.constants,
    FE = AE && !!yh,
    PE = 512 * 1024,
    kE = yh | BE | UE | ME;
  Rh.exports = FE ? (r) => (r < PE ? kE : 'w') : () => 'w';
});
var Ko = E((_R, Uh) => {
  'use strict';
  var qE = require('assert'),
    GE = cn(),
    N = require('fs'),
    HE = hr(),
    Ke = require('path'),
    Lh = fh(),
    vh = Xi(),
    zE = _h(),
    VE = Wi(),
    me = Qt(),
    jE = rr(),
    $E = qo(),
    Ch = Symbol('onEntry'),
    zo = Symbol('checkFs'),
    wh = Symbol('checkFs2'),
    Rn = Symbol('pruneCache'),
    Vo = Symbol('isReusable'),
    Ce = Symbol('makeFs'),
    jo = Symbol('file'),
    $o = Symbol('directory'),
    gn = Symbol('link'),
    Sh = Symbol('symlink'),
    Oh = Symbol('hardlink'),
    Th = Symbol('unsupported'),
    xh = Symbol('checkPath'),
    ht = Symbol('mkdir'),
    J = Symbol('onError'),
    _n = Symbol('pending'),
    Ih = Symbol('pend'),
    Er = Symbol('unpend'),
    Go = Symbol('ended'),
    Ho = Symbol('maybeClose'),
    Xo = Symbol('skip'),
    Vr = Symbol('doChown'),
    jr = Symbol('uid'),
    $r = Symbol('gid'),
    Xr = Symbol('checkedCwd'),
    Ah = require('crypto'),
    Dh = gh(),
    XE = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform,
    Wr = XE === 'win32',
    WE = (r, e) => {
      if (!Wr) return N.unlink(r, e);
      let t = r + '.DELETE.' + Ah.randomBytes(16).toString('hex');
      N.rename(r, t, (s) => {
        if (s) return e(s);
        N.unlink(t, e);
      });
    },
    KE = (r) => {
      if (!Wr) return N.unlinkSync(r);
      let e = r + '.DELETE.' + Ah.randomBytes(16).toString('hex');
      N.renameSync(r, e), N.unlinkSync(e);
    },
    bh = (r, e, t) => (r === r >>> 0 ? r : e === e >>> 0 ? e : t),
    Nh = (r) => $E(jE(me(r))).toLowerCase(),
    YE = (r, e) => {
      e = Nh(e);
      for (let t of r.keys()) {
        let s = Nh(t);
        (s === e || s.indexOf(e + '/') === 0) && r.delete(t);
      }
    },
    ZE = (r) => {
      for (let e of r.keys()) r.delete(e);
    },
    Kr = class extends GE {
      constructor(e) {
        if (
          (e || (e = {}),
          (e.ondone = (t) => {
            (this[Go] = !0), this[Ho]();
          }),
          super(e),
          (this[Xr] = !1),
          (this.reservations = zE()),
          (this.transform = typeof e.transform == 'function' ? e.transform : null),
          (this.writable = !0),
          (this.readable = !1),
          (this[_n] = 0),
          (this[Go] = !1),
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
          (this.win32 = !!e.win32 || Wr),
          (this.newer = !!e.newer),
          (this.keep = !!e.keep),
          (this.noMtime = !!e.noMtime),
          (this.preservePaths = !!e.preservePaths),
          (this.unlink = !!e.unlink),
          (this.cwd = me(Ke.resolve(e.cwd || process.cwd()))),
          (this.strip = +e.strip || 0),
          (this.processUmask = e.noChmod ? 0 : process.umask()),
          (this.umask = typeof e.umask == 'number' ? e.umask : this.processUmask),
          (this.dmode = e.dmode || 511 & ~this.umask),
          (this.fmode = e.fmode || 438 & ~this.umask),
          this.on('entry', (t) => this[Ch](t));
      }
      warn(e, t, s = {}) {
        return (
          (e === 'TAR_BAD_ARCHIVE' || e === 'TAR_ABORT') && (s.recoverable = !1),
          super.warn(e, t, s)
        );
      }
      [Ho]() {
        this[Go] &&
          this[_n] === 0 &&
          (this.emit('prefinish'), this.emit('finish'), this.emit('end'), this.emit('close'));
      }
      [xh](e) {
        if (this.strip) {
          let t = me(e.path).split('/');
          if (t.length < this.strip) return !1;
          if (((e.path = t.slice(this.strip).join('/')), e.type === 'Link')) {
            let s = me(e.linkpath).split('/');
            if (s.length >= this.strip) e.linkpath = s.slice(this.strip).join('/');
            else return !1;
          }
        }
        if (!this.preservePaths) {
          let t = me(e.path),
            s = t.split('/');
          if (s.includes('..') || (Wr && /^[a-z]:\.\.$/i.test(s[0])))
            return this.warn('TAR_ENTRY_ERROR', "path contains '..'", { entry: e, path: t }), !1;
          let [n, i] = VE(t);
          n &&
            ((e.path = i),
            this.warn('TAR_ENTRY_INFO', `stripping ${n} from absolute path`, {
              entry: e,
              path: t,
            }));
        }
        if (
          (Ke.isAbsolute(e.path)
            ? (e.absolute = me(Ke.resolve(e.path)))
            : (e.absolute = me(Ke.resolve(this.cwd, e.path))),
          !this.preservePaths &&
            e.absolute.indexOf(this.cwd + '/') !== 0 &&
            e.absolute !== this.cwd)
        )
          return (
            this.warn('TAR_ENTRY_ERROR', 'path escaped extraction target', {
              entry: e,
              path: me(e.path),
              resolvedPath: e.absolute,
              cwd: this.cwd,
            }),
            !1
          );
        if (e.absolute === this.cwd && e.type !== 'Directory' && e.type !== 'GNUDumpDir') return !1;
        if (this.win32) {
          let { root: t } = Ke.win32.parse(e.absolute);
          e.absolute = t + vh.encode(e.absolute.substr(t.length));
          let { root: s } = Ke.win32.parse(e.path);
          e.path = s + vh.encode(e.path.substr(s.length));
        }
        return !0;
      }
      [Ch](e) {
        if (!this[xh](e)) return e.resume();
        switch ((qE.equal(typeof e.absolute, 'string'), e.type)) {
          case 'Directory':
          case 'GNUDumpDir':
            e.mode && (e.mode = e.mode | 448);
          case 'File':
          case 'OldFile':
          case 'ContiguousFile':
          case 'Link':
          case 'SymbolicLink':
            return this[zo](e);
          case 'CharacterDevice':
          case 'BlockDevice':
          case 'FIFO':
          default:
            return this[Th](e);
        }
      }
      [J](e, t) {
        e.name === 'CwdError'
          ? this.emit('error', e)
          : (this.warn('TAR_ENTRY_ERROR', e, { entry: t }), this[Er](), t.resume());
      }
      [ht](e, t, s) {
        Lh(
          me(e),
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
          s
        );
      }
      [Vr](e) {
        return (
          this.forceChown ||
          (this.preserveOwner &&
            ((typeof e.uid == 'number' && e.uid !== this.processUid) ||
              (typeof e.gid == 'number' && e.gid !== this.processGid))) ||
          (typeof this.uid == 'number' && this.uid !== this.processUid) ||
          (typeof this.gid == 'number' && this.gid !== this.processGid)
        );
      }
      [jr](e) {
        return bh(this.uid, e.uid, this.processUid);
      }
      [$r](e) {
        return bh(this.gid, e.gid, this.processGid);
      }
      [jo](e, t) {
        let s = e.mode & 4095 || this.fmode,
          n = new HE.WriteStream(e.absolute, { flags: Dh(e.size), mode: s, autoClose: !1 });
        n.on('error', (a) => {
          n.fd && N.close(n.fd, () => {}), (n.write = () => !0), this[J](a, e), t();
        });
        let i = 1,
          o = (a) => {
            if (a) {
              n.fd && N.close(n.fd, () => {}), this[J](a, e), t();
              return;
            }
            --i === 0 &&
              N.close(n.fd, (u) => {
                u ? this[J](u, e) : this[Er](), t();
              });
          };
        n.on('finish', (a) => {
          let u = e.absolute,
            l = n.fd;
          if (e.mtime && !this.noMtime) {
            i++;
            let h = e.atime || new Date(),
              f = e.mtime;
            N.futimes(l, h, f, (d) => (d ? N.utimes(u, h, f, (p) => o(p && d)) : o()));
          }
          if (this[Vr](e)) {
            i++;
            let h = this[jr](e),
              f = this[$r](e);
            N.fchown(l, h, f, (d) => (d ? N.chown(u, h, f, (p) => o(p && d)) : o()));
          }
          o();
        });
        let c = (this.transform && this.transform(e)) || e;
        c !== e &&
          (c.on('error', (a) => {
            this[J](a, e), t();
          }),
          e.pipe(c)),
          c.pipe(n);
      }
      [$o](e, t) {
        let s = e.mode & 4095 || this.dmode;
        this[ht](e.absolute, s, (n) => {
          if (n) {
            this[J](n, e), t();
            return;
          }
          let i = 1,
            o = (c) => {
              --i === 0 && (t(), this[Er](), e.resume());
            };
          e.mtime &&
            !this.noMtime &&
            (i++, N.utimes(e.absolute, e.atime || new Date(), e.mtime, o)),
            this[Vr](e) && (i++, N.chown(e.absolute, this[jr](e), this[$r](e), o)),
            o();
        });
      }
      [Th](e) {
        (e.unsupported = !0),
          this.warn('TAR_ENTRY_UNSUPPORTED', `unsupported entry type: ${e.type}`, { entry: e }),
          e.resume();
      }
      [Sh](e, t) {
        this[gn](e, e.linkpath, 'symlink', t);
      }
      [Oh](e, t) {
        let s = me(Ke.resolve(this.cwd, e.linkpath));
        this[gn](e, s, 'link', t);
      }
      [Ih]() {
        this[_n]++;
      }
      [Er]() {
        this[_n]--, this[Ho]();
      }
      [Xo](e) {
        this[Er](), e.resume();
      }
      [Vo](e, t) {
        return e.type === 'File' && !this.unlink && t.isFile() && t.nlink <= 1 && !Wr;
      }
      [zo](e) {
        this[Ih]();
        let t = [e.path];
        e.linkpath && t.push(e.linkpath), this.reservations.reserve(t, (s) => this[wh](e, s));
      }
      [Rn](e) {
        e.type === 'SymbolicLink'
          ? ZE(this.dirCache)
          : e.type !== 'Directory' && YE(this.dirCache, e.absolute);
      }
      [wh](e, t) {
        this[Rn](e);
        let s = (c) => {
            this[Rn](e), t(c);
          },
          n = () => {
            this[ht](this.cwd, this.dmode, (c) => {
              if (c) {
                this[J](c, e), s();
                return;
              }
              (this[Xr] = !0), i();
            });
          },
          i = () => {
            if (e.absolute !== this.cwd) {
              let c = me(Ke.dirname(e.absolute));
              if (c !== this.cwd)
                return this[ht](c, this.dmode, (a) => {
                  if (a) {
                    this[J](a, e), s();
                    return;
                  }
                  o();
                });
            }
            o();
          },
          o = () => {
            N.lstat(e.absolute, (c, a) => {
              if (a && (this.keep || (this.newer && a.mtime > e.mtime))) {
                this[Xo](e), s();
                return;
              }
              if (c || this[Vo](e, a)) return this[Ce](null, e, s);
              if (a.isDirectory()) {
                if (e.type === 'Directory') {
                  let u = !this.noChmod && e.mode && (a.mode & 4095) !== e.mode,
                    l = (h) => this[Ce](h, e, s);
                  return u ? N.chmod(e.absolute, e.mode, l) : l();
                }
                if (e.absolute !== this.cwd) return N.rmdir(e.absolute, (u) => this[Ce](u, e, s));
              }
              if (e.absolute === this.cwd) return this[Ce](null, e, s);
              WE(e.absolute, (u) => this[Ce](u, e, s));
            });
          };
        this[Xr] ? i() : n();
      }
      [Ce](e, t, s) {
        if (e) {
          this[J](e, t), s();
          return;
        }
        switch (t.type) {
          case 'File':
          case 'OldFile':
          case 'ContiguousFile':
            return this[jo](t, s);
          case 'Link':
            return this[Oh](t, s);
          case 'SymbolicLink':
            return this[Sh](t, s);
          case 'Directory':
          case 'GNUDumpDir':
            return this[$o](t, s);
        }
      }
      [gn](e, t, s, n) {
        N[s](t, e.absolute, (i) => {
          i ? this[J](i, e) : (this[Er](), e.resume()), n();
        });
      }
    },
    yn = (r) => {
      try {
        return [null, r()];
      } catch (e) {
        return [e, null];
      }
    },
    Wo = class extends Kr {
      [Ce](e, t) {
        return super[Ce](e, t, () => {});
      }
      [zo](e) {
        if ((this[Rn](e), !this[Xr])) {
          let i = this[ht](this.cwd, this.dmode);
          if (i) return this[J](i, e);
          this[Xr] = !0;
        }
        if (e.absolute !== this.cwd) {
          let i = me(Ke.dirname(e.absolute));
          if (i !== this.cwd) {
            let o = this[ht](i, this.dmode);
            if (o) return this[J](o, e);
          }
        }
        let [t, s] = yn(() => N.lstatSync(e.absolute));
        if (s && (this.keep || (this.newer && s.mtime > e.mtime))) return this[Xo](e);
        if (t || this[Vo](e, s)) return this[Ce](null, e);
        if (s.isDirectory()) {
          if (e.type === 'Directory') {
            let o = !this.noChmod && e.mode && (s.mode & 4095) !== e.mode,
              [c] = o
                ? yn(() => {
                    N.chmodSync(e.absolute, e.mode);
                  })
                : [];
            return this[Ce](c, e);
          }
          let [i] = yn(() => N.rmdirSync(e.absolute));
          this[Ce](i, e);
        }
        let [n] = e.absolute === this.cwd ? [] : yn(() => KE(e.absolute));
        this[Ce](n, e);
      }
      [jo](e, t) {
        let s = e.mode & 4095 || this.fmode,
          n = (c) => {
            let a;
            try {
              N.closeSync(i);
            } catch (u) {
              a = u;
            }
            (c || a) && this[J](c || a, e), t();
          },
          i;
        try {
          i = N.openSync(e.absolute, Dh(e.size), s);
        } catch (c) {
          return n(c);
        }
        let o = (this.transform && this.transform(e)) || e;
        o !== e && (o.on('error', (c) => this[J](c, e)), e.pipe(o)),
          o.on('data', (c) => {
            try {
              N.writeSync(i, c, 0, c.length);
            } catch (a) {
              n(a);
            }
          }),
          o.on('end', (c) => {
            let a = null;
            if (e.mtime && !this.noMtime) {
              let u = e.atime || new Date(),
                l = e.mtime;
              try {
                N.futimesSync(i, u, l);
              } catch (h) {
                try {
                  N.utimesSync(e.absolute, u, l);
                } catch {
                  a = h;
                }
              }
            }
            if (this[Vr](e)) {
              let u = this[jr](e),
                l = this[$r](e);
              try {
                N.fchownSync(i, u, l);
              } catch (h) {
                try {
                  N.chownSync(e.absolute, u, l);
                } catch {
                  a = a || h;
                }
              }
            }
            n(a);
          });
      }
      [$o](e, t) {
        let s = e.mode & 4095 || this.dmode,
          n = this[ht](e.absolute, s);
        if (n) {
          this[J](n, e), t();
          return;
        }
        if (e.mtime && !this.noMtime)
          try {
            N.utimesSync(e.absolute, e.atime || new Date(), e.mtime);
          } catch {}
        if (this[Vr](e))
          try {
            N.chownSync(e.absolute, this[jr](e), this[$r](e));
          } catch {}
        t(), e.resume();
      }
      [ht](e, t) {
        try {
          return Lh.sync(me(e), {
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
        } catch (s) {
          return s;
        }
      }
      [gn](e, t, s, n) {
        try {
          N[s + 'Sync'](t, e.absolute), n(), e.resume();
        } catch (i) {
          return this[J](i, e);
        }
      }
    };
  Kr.Sync = Wo;
  Uh.exports = Kr;
});
var kh = E((yR, Ph) => {
  'use strict';
  var JE = Wt(),
    vn = Ko(),
    Mh = require('fs'),
    Fh = hr(),
    Bh = require('path'),
    Yo = rr();
  Ph.exports = (r, e, t) => {
    typeof r == 'function'
      ? ((t = r), (e = null), (r = {}))
      : Array.isArray(r) && ((e = r), (r = {})),
      typeof e == 'function' && ((t = e), (e = null)),
      e ? (e = Array.from(e)) : (e = []);
    let s = JE(r);
    if (s.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!s.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return (
      e.length && QE(s, e), s.file && s.sync ? e_(s) : s.file ? t_(s, t) : s.sync ? r_(s) : s_(s)
    );
  };
  var QE = (r, e) => {
      let t = new Map(e.map((i) => [Yo(i), !0])),
        s = r.filter,
        n = (i, o) => {
          let c = o || Bh.parse(i).root || '.',
            a = i === c ? !1 : t.has(i) ? t.get(i) : n(Bh.dirname(i), c);
          return t.set(i, a), a;
        };
      r.filter = s ? (i, o) => s(i, o) && n(Yo(i)) : (i) => n(Yo(i));
    },
    e_ = (r) => {
      let e = new vn.Sync(r),
        t = r.file,
        s = Mh.statSync(t),
        n = r.maxReadSize || 16 * 1024 * 1024;
      new Fh.ReadStreamSync(t, { readSize: n, size: s.size }).pipe(e);
    },
    t_ = (r, e) => {
      let t = new vn(r),
        s = r.maxReadSize || 16 * 1024 * 1024,
        n = r.file,
        i = new Promise((o, c) => {
          t.on('error', c),
            t.on('close', o),
            Mh.stat(n, (a, u) => {
              if (a) c(a);
              else {
                let l = new Fh.ReadStream(n, { readSize: s, size: u.size });
                l.on('error', c), l.pipe(t);
              }
            });
        });
      return e ? i.then(e, e) : i;
    },
    r_ = (r) => new vn.Sync(r),
    s_ = (r) => new vn(r);
});
var qh = E((H) => {
  'use strict';
  H.c = H.create = vl();
  H.r = H.replace = Lo();
  H.t = H.list = un();
  H.u = H.update = Nl();
  H.x = H.extract = kh();
  H.Pack = Xs();
  H.Unpack = Ko();
  H.Parse = cn();
  H.ReadEntry = Ns();
  H.WriteEntry = no();
  H.Header = tr();
  H.Pax = As();
  H.types = qi();
});
var Vh = {};
Pe(Vh, { FileStorage: () => Zo });
var Hh,
  Q,
  Dt,
  zh,
  Gh,
  Cn,
  ft,
  Zo,
  jh = ee(() => {
    'use strict';
    (Hh = require('crypto')),
      (Q = require('fs')),
      (Dt = yf(require('path'))),
      (zh = require('path'));
    Ar();
    Je();
    vs();
    An();
    (Gh = li()),
      (Cn = qh()),
      ({ output: ft } = Ze()),
      (Zo = class {
        constructor(e, t, s, n) {
          this.encryption = e;
          this.errorReporter = t;
          this.context = n;
          this.storedHashes = [];
          this.axiosConfigBuilder = (e) => e;
          if (s.customProxyConfigPath) {
            let { fileServerProxyConfig: i } = require(
              (0, zh.join)(process.cwd(), s.customProxyConfigPath)
            );
            this.axiosConfigBuilder = i ?? this.axiosConfigBuilder;
          }
        }
        async retrieve(e, t, s) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            ft.note({ title: `Nx Cloud: Downloading ${e}`, bodyLines: [`RETRIEVAL URL: ${t}`] });
          let n = this.createFileName(e, s),
            i = this.createCommitFilePath(e, s);
          try {
            await this.downloadFile(t, n, i),
              this.createCommitFile(i),
              U && ft.note({ title: `Nx Cloud: Downloaded ${e}` });
          } catch (o) {
            let c = o.message || o.toString(),
              a;
            throw (
              (c.includes('zlib') || c.includes('gzip') || c.includes('TAR_BAD_ARCHIVE')
                ? (a = `Failed to untar cached artifacts. The artifact may be corrupted. (Reference hash: ${e})`)
                : c.includes('decrypt')
                  ? (a = `Failed to decrypt artifact. Please review your encryption key. (Reference hash: ${e})`)
                  : (a = `Failed to download cached artifacts. Enable NX_VERBOSE_LOGGING for more details. (Reference hash: ${e})`),
              U &&
                ft.note({
                  title: `${a}`,
                  bodyLines: [
                    `- ${o.message}`,
                    `- Affected artifact: ${e} in context ${this.context}.`,
                  ],
                }),
              (this.context === 'dte-agent' || this.context === 'dte-main') &&
                (ft.note({
                  title: `An error occurred while trying to retrieve artifacts in the ${this.context} context. Hash: ${e}.`,
                  bodyLines: [
                    '- Please update the nx-cloud package to the latest version.',
                    '- Please update the nx package to 15.8.9 or higher. You can do it without updating the plugins.',
                    '- If you are not able to update the nx package, and you are passing --configuration to a run-many or an affected command, define that configuration for all the projects.',
                  ],
                }),
                process.env.NX_CLOUD_DEBUG_URLS == 'true' && ft.note({ title: `URL: ${e}` })),
              await this.errorReporter.reportError(a),
              new Error(a))
            );
          }
        }
        async store(e, t, s) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            ft.note({ title: `Nx Cloud: Storing ${e}`, bodyLines: [`STORAGE URL: ${t}`] });
          let n;
          if (process.env.NRWL_INTERNAL_TAR_DEBUG) {
            let o = 1,
              c = !1,
              a = [];
            for (; o <= 3 && !c; ) {
              n = await this.createFile(e, s);
              let u = `/tmp/${e}/attempt${o}`;
              (0, Q.mkdirSync)(u, { recursive: !0 });
              try {
                let l = (0, Q.createReadStream)(n).pipe(Cn.x({ cwd: u }));
                await this.convertStreamIntoPromise(l), (c = !0);
              } catch (l) {
                console.error(l), await Gt(5e3);
              }
              a.push({ attempt: o, success: c }), o++;
            }
            if (a.some((u) => !u.success)) {
              console.error(JSON.stringify(a, null, 2));
              let u = a
                .filter((l) => !l.success)
                .map((l) => l.attempt)
                .join(', ');
              throw new Error(`Untar failed for hash ${e} in attempts ${u} out of ${a.length}`);
            }
          } else n = await this.createFile(e, s);
          await this.uploadFile(t, n),
            this.storedHashes.push(e),
            U && ft.note({ title: `Nx Cloud: Stored ${e}` });
        }
        createFileName(e, t) {
          return Dt.join(t, `${e}.tar.gz`);
        }
        async downloadFile(e, t, s) {
          var o;
          let n = Rt('retrieveFile'),
            i;
          try {
            let c = new URL(e),
              a = c.origin + c.pathname,
              u = {};
            for (let [l, h] of c.searchParams.entries()) u[l] = h;
            (i = await qe(() =>
              Gh(
                a,
                this.axiosConfigBuilder({
                  method: 'GET',
                  responseType: 'stream',
                  maxContentLength: Se ? Pt : kt,
                  maxBodyLength: Se ? Pt : kt,
                  timeout: Se ? Ft : 6e4,
                  params: u,
                })
              )
            )),
              n.recordMetric({ ...Te(i), payloadSize: i.data.headers['content-length'] });
          } catch (c) {
            throw (
              (n.recordMetric(
                (o = c == null ? void 0 : c.axiosException) != null && o.response
                  ? Te(c.axiosException.response)
                  : gt
              ),
              c)
            );
          }
          if ((0, Q.existsSync)(t)) {
            let c = 0;
            for (; c++ < 50; ) {
              if ((0, Q.existsSync)(s)) return;
              await Gt(500);
            }
          }
          if (this.encryption.hasEncryption()) {
            await new Promise((a) => {
              i.data.pipe((0, Q.createWriteStream)(t)).on('close', () => a(null));
            }),
              this.encryption.decryptFile(t);
            let c = (0, Q.createReadStream)(t).pipe(Cn.x({ cwd: Dt.dirname(t) }));
            return this.convertStreamIntoPromise(c);
          } else {
            let c = i.data.pipe(Cn.x({ cwd: Dt.dirname(t) }));
            return this.convertStreamIntoPromise(c);
          }
        }
        convertStreamIntoPromise(e) {
          return new Promise((t, s) => {
            e.on('error', (n) => {
              n.tarCode === 'TAR_ABORT' && n.message.indexOf('incorrect header check') > -1
                ? (console.warn('FileStorage: Decompression OK, Trailing garbage ignored.'),
                  t(null))
                : s(n);
            }),
              e.on('finish', () => t(null));
          });
        }
        createCommitFile(e) {
          (0, Q.writeFileSync)(e, 'true');
        }
        createCommitFilePath(e, t) {
          return Dt.join(t, `${e}.commit`);
        }
        async createFile(e, t) {
          let s = this.createFileName(e, t);
          try {
            (0, Q.unlinkSync)(Dt.join(t, e, 'source'));
          } catch {}
          return (
            await Cn.c({ gzip: !0, file: s, cwd: t }, [e]),
            this.encryption.hasEncryption() && this.encryption.encryptFile(s),
            s
          );
        }
        async uploadFile(e, t) {
          var c;
          process.env.NX_CLOUD_ECONNABORTED_LOGGING == 'true' &&
            ft.note({ title: `Attempting to upload file with path: ${t}` });
          let s = Rt('storeFile'),
            n = (0, Q.readFileSync)(t),
            i = this.generateMD5(n),
            o = this.getFileUploadHeaders(e, i);
          try {
            let a = await qe(() =>
              Gh(
                e,
                this.axiosConfigBuilder({
                  method: 'PUT',
                  data: n,
                  headers: o,
                  maxContentLength: Se ? Pt : kt,
                  maxBodyLength: Se ? Pt : kt,
                  timeout: Se ? Ft : 12e4,
                })
              )
            );
            s.recordMetric({ ...Te(a), payloadSize: a.config.headers['Content-Length'] });
          } catch (a) {
            if (a.message && a.message.includes('RetentionPolicyNotMet')) return;
            throw (
              (s.recordMetric(
                (c = a == null ? void 0 : a.axiosException) != null && c.response
                  ? Te(a.axiosException.response)
                  : gt
              ),
              a)
            );
          }
        }
        generateMD5(e) {
          let t = (0, Hh.createHash)('md5');
          return t.update(e), t.digest('base64');
        }
        getFileUploadHeaders(e, t) {
          let s = e.includes('/file/'),
            n = { 'Content-Type': 'application/octet-stream', 'x-ms-blob-type': 'BlockBlob' };
          return s && (n['Content-MD5'] = t), n;
        }
      });
  });
function Wh() {
  return Math.floor(Math.random() * 100) + 1 <= (ts ? 100 : n_) ? i_() : null;
}
function i_() {
  try {
    let r = (0, $h.execSync)('git log --since="30 days ago" --format="%ae"', {
      stdio: 'pipe',
      windowsHide: !0,
    })
      .toString()
      .trim().split(`
`);
    return [...new Set(r)].map((e) => {
      let t = (0, Xh.createHash)('md5');
      return t.update(e), t.digest('base64');
    });
  } catch {
    return null;
  }
}
var $h,
  Xh,
  n_,
  Kh = ee(() => {
    'use strict';
    ($h = require('child_process')), (Xh = require('crypto'));
    Je();
    n_ = 2;
  });
function Jo() {
  for (let r of Object.values(o_))
    if (r.detectorFn(process.env)) {
      let e = r.contextRetrieverFn(process.env);
      return U && console.log(JSON.stringify(e, null, 2)), e;
    }
  return U && console.log('[Nx Cloud] Unable to detect a VCS context from the environment.'), null;
}
function a_(r) {
  return r.CIRCLECI === 'true';
}
function c_(r) {
  U && console.log('[Nx Cloud] Detected Env: CircleCI');
  let e = (s) => {
      if (s.CIRCLE_PR_NUMBER !== void 0) return s.CIRCLE_PR_NUMBER;
      if (s.CIRCLE_PULL_REQUEST !== void 0) {
        let n = s.CIRCLE_PULL_REQUEST.split('/');
        return n[n.length - 1];
      }
      return s.CIRCLE_BRANCH !== void 0 ? s.CIRCLE_BRANCH : 'unknown';
    },
    t = (s) =>
      s.CIRCLE_USERNAME !== void 0
        ? s.CIRCLE_USERNAME
        : s.CIRCLE_PR_USERNAME
          ? s.CIRCLE_PR_USERNAME
          : null;
  return {
    branch: e(r),
    ref: r.CIRCLE_BRANCH ?? null,
    title: Ut(),
    headSha: r.CIRCLE_SHA1 ?? 'unknown',
    baseSha: null,
    commitLink: r.CIRCLE_PULL_REQUEST ?? null,
    author: t(r),
    authorUrl: null,
    authorAvatarUrl: null,
    repositoryUrl: r.CIRCLE_REPOSITORY_URL ?? null,
  };
}
function u_(r) {
  return r.TRAVIS === 'true';
}
function l_(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: TravisCI'),
    {
      branch: ((t) =>
        t.TRAVIS_EVENT_TYPE === 'pull_request' ? t.TRAVIS_PULL_REQUEST : t.TRAVIS_BRANCH)(r),
      ref: null,
      title: Ut(),
      headSha: r.TRAVIS_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Qo(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: null,
    }
  );
}
function h_(r) {
  return r.GITHUB_ACTIONS === 'true';
}
function f_(r) {
  U && console.log('[Nx Cloud] Detected Env: GitHub Actions');
  let e = (n) => {
      if (n.GITHUB_REF) {
        let i = n.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
        if (i) return i[1];
      }
      return n.GITHUB_HEAD_REF
        ? n.GITHUB_HEAD_REF
        : n.GITHUB_REF_NAME
          ? n.GITHUB_REF_NAME
          : 'unknown';
    },
    t = (n) => {
      let i = `${n.GITHUB_SERVER_URL}/${n.GITHUB_REPOSITORY}`;
      return n.GITHUB_EVENT_NAME === 'pull_request'
        ? `${i}/pull/${e(n)}`
        : `${i}/commit/${n.GITHUB_SHA}`;
    },
    s = (n) => (n.GITHUB_HEAD_REF ? n.GITHUB_HEAD_REF : n.GITHUB_REF ? n.GITHUB_REF : null);
  return {
    branch: e(r),
    ref: s(r),
    title: Ut(),
    headSha: r.GITHUB_SHA ?? 'unknown',
    baseSha: null,
    commitLink: t(r),
    author: r.GITHUB_ACTOR ?? null,
    authorUrl: `${r.GITHUB_SERVER_URL}/${r.GITHUB_ACTOR}`,
    authorAvatarUrl: `${r.GITHUB_SERVER_URL}/${r.GITHUB_ACTOR}.png`,
    repositoryUrl: `${r.GITHUB_SERVER_URL}/${r.GITHUB_REPOSITORY}`,
  };
}
function d_(r) {
  return r.BITBUCKET_BUILD_NUMBER != null;
}
function p_(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: BitBucket Pipelines'),
    {
      branch: r.BITBUCKET_PR_ID ?? r.BITBUCKET_BRANCH ?? 'unknown',
      ref: null,
      title: Ut(),
      headSha: r.BITBUCKET_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Qo(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: r.BITBUCKET_GIT_HTTP_ORIGIN ?? null,
    }
  );
}
function m_(r) {
  return r.BUILD_BUILDID !== void 0 && r.AGENT_NAME !== void 0;
}
function E_(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: Azure DevOps'),
    {
      branch: r.SYSTEM_PULLREQUEST_PULLREQUESTNUMBER ?? r.BUILD_SOURCEBRANCHNAME ?? 'unknown',
      ref: null,
      title: Ut(),
      headSha: qt() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: r.BUILD_REQUESTEDFOR ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: r.SYSTEM_PULLREQUEST_SOURCEREPOSITORYURI ?? r.BUILD_REPOSITORY_URI ?? null,
    }
  );
}
function __(r) {
  return r.GITLAB_CI === 'true';
}
function y_(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: GitLab Pipelines'),
    {
      branch: ((t) =>
        t.CI_MERGE_REQUEST_IID
          ? t.CI_MERGE_REQUEST_IID
          : t.CI_COMMIT_BRANCH
            ? t.CI_COMMIT_BRANCH
            : 'unknown')(r),
      ref: r.CI_COMMIT_REF_NAME ?? null,
      title: Ut(),
      headSha: qt() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: r.GITLAB_USER_NAME ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: r.CI_REPOSITORY_URL ?? null,
    }
  );
}
function R_(r) {
  return r.NX_CLOUD_VERSION != null && r.NX_CLOUD_VERSION !== '';
}
function g_(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: Nx Cloud'),
    {
      branch: v_() ?? 'unknown',
      ref: C_(),
      title: Ut(),
      headSha: qt() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: Qo(),
      authorUrl: null,
      authorAvatarUrl: null,
      repositoryUrl: null,
    }
  );
}
function Ut() {
  try {
    return (0, Yr.execSync)('git log -1 --pretty=%B', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function Qo() {
  try {
    return (0, Yr.execSync)('git log -1 --pretty=%aN', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function v_() {
  try {
    return (0, Yr.execSync)('git branch --show-current', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
function C_() {
  try {
    return (0, Yr.execSync)('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}
var Yr,
  o_,
  Yh = ee(() => {
    'use strict';
    Yr = require('child_process');
    Je();
    o_ = {
      CIRCLE_CI: { detectorFn: a_, contextRetrieverFn: c_ },
      TRAVIS_CI: { detectorFn: u_, contextRetrieverFn: l_ },
      GITHUB_ACTIONS: { detectorFn: h_, contextRetrieverFn: f_ },
      BITBUCKET_PIPELINES: { detectorFn: d_, contextRetrieverFn: p_ },
      AZURE_DEVOPS: { detectorFn: m_, contextRetrieverFn: E_ },
      GITLAB_PIPELINES: { detectorFn: __, contextRetrieverFn: y_ },
      NX_CLOUD: { detectorFn: R_, contextRetrieverFn: g_ },
    };
  });
function Zh(r) {
  if (!r) return null;
  let e = {};
  Object.entries(r.nodes).forEach(([s, n]) => {
    n.type !== 'npm' && (e[s] = n);
  });
  let t = {};
  return (
    Object.entries(r.dependencies).forEach(([s, n]) => {
      s.startsWith('npm:') || (t[s] = n.filter((i) => !i.target.startsWith('npm:')));
    }),
    { nodes: e, dependencies: t }
  );
}
var Jh = ee(() => {
  'use strict';
});
var rf = {};
Pe(rf, { CloudRunApi: () => ea });
var Qh,
  ef,
  tf,
  wn,
  ea,
  sf = ee(() => {
    'use strict';
    (Qh = require('fs')), (ef = require('util')), (tf = require('zlib'));
    Ar();
    Kh();
    Je();
    Yh();
    vs();
    Jh();
    ({ output: wn } = Ze()),
      (ea = class {
        constructor(e, t, s, n) {
          this.messages = e;
          this.runContext = t;
          this.machineInfo = n;
          this.apiAxiosInstance = Xt(s);
        }
        async startRun(e, t) {
          var n;
          if (this.messages.apiError) return {};
          let s = Rt('startRun');
          try {
            let i = {
              meta: { nxCloudVersion: this.nxCloudVersion() },
              branch: Tr(),
              runGroup: Ln(),
              ciExecutionId: Nn(),
              ciExecutionEnv: wr(),
              distributedExecutionId: e,
              hashes: t,
              machineInfo: this.machineInfo,
              vcsContext: Jo(),
            };
            U &&
              wn.note({
                title: 'RunStart',
                bodyLines: [
                  `
` + JSON.stringify(i, null, 2),
                ],
              });
            let o = await di('RunStart duration', () =>
              qe(() => this.apiAxiosInstance.post('/nx-cloud/v2/runs/start', i))
            );
            return (
              s.recordMetric(Te(o)),
              o.data && o.data.message && (this.messages.message = o.data.message),
              !o.data || !o.data.artifacts
                ? ((this.messages.apiError = `Invalid Nx Cloud response: ${JSON.stringify(
                    o.data
                  )}`),
                  {})
                : o.data.artifacts
            );
          } catch (i) {
            return (
              s.recordMetric(
                (n = i == null ? void 0 : i.axiosException) != null && n.response
                  ? Te(i.axiosException.response)
                  : gt
              ),
              (this.messages.apiError = this.messages.extractErrorMessage(i, 'api')),
              {}
            );
          }
        }
        createEndRunReqBody(e, t, s, n, i) {
          let o = Zh(n),
            c = {
              meta: { nxCloudVersion: this.nxCloudVersion() },
              tasks: t,
              run: e,
              linkId: i,
              ...s,
              projectGraph: o,
              machineInfo: this.machineInfo,
              vcsContext: Jo(),
              hashedContributors: Wh(),
            };
          return JSON.stringify(c);
        }
        async endRun(e, t, s, n, i) {
          var l;
          if (this.messages.apiError) return !1;
          (e.runGroup = null), (e.branch = null);
          let o = this.createEndRunReqBody(e, t, s, null, i);
          o.length > 20 * 1e3 * 1e3 &&
            (o = this.createEndRunReqBody(
              e,
              t.map((h) => ({ ...h, hashDetails: void 0 })),
              s,
              n,
              i
            ));
          let c = Buffer.from(o),
            a = await (0, ef.promisify)(tf.gzip)(c),
            u = Rt('endRun');
          try {
            if (U) {
              let f = t.map((d) => ({
                ...d,
                terminalOutput: d.terminalOutput ? `${d.terminalOutput.slice(0, 20)}...` : void 0,
              }));
              wn.note({
                title: 'RunEnd. Completed tasks',
                bodyLines: [
                  `
` + JSON.stringify(f, null, 2),
                ],
              });
            }
            let h = await di('RunEnd duration', () =>
              qe(() =>
                this.apiAxiosInstance.post('/nx-cloud/runs/end', a, {
                  headers: {
                    ...this.apiAxiosInstance.defaults.headers,
                    'Content-Encoding': 'gzip',
                    'Content-Type': 'application/octet-stream',
                  },
                })
              )
            );
            if (h) {
              if ((u.recordMetric(Te(h)), h.data && h.data.runUrl && h.data.status === 'success'))
                return (this.runContext.runUrl = h.data.runUrl), !0;
              h.data && h.data.status
                ? (this.messages.apiError = `Invalid end run response: ${JSON.stringify(
                    h.data.message
                  )}`)
                : h.data && typeof h.data == 'string'
                  ? h.data !== 'success' &&
                    (this.messages.apiError = `Invalid end run response: ${JSON.stringify(h.data)}`)
                  : (this.messages.apiError = `Invalid end run response: ${JSON.stringify(
                      h.data
                    )}`),
                U &&
                  wn.note({
                    title: 'Invalid end run response',
                    bodyLines: [JSON.stringify(h.data, null, 2)],
                  });
            } else
              wn.error({
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
          } catch (h) {
            u.recordMetric(
              (l = h == null ? void 0 : h.axiosException) != null && l.response
                ? Te(h.axiosException.response)
                : gt
            );
            let f = h.axiosException ?? h;
            return (this.messages.apiError = this.messages.extractErrorMessage(f, 'api')), !1;
          }
        }
        nxCloudVersion() {
          try {
            let e = JSON.parse((0, Qh.readFileSync)('package.json').toString());
            return e.devDependencies['nx-cloud'] || e.devDependencies['@nrwl/nx-cloud'];
          } catch {
            return 'unknown';
          }
        }
      });
  });
var nf = {};
Pe(nf, { ErrorReporterApi: () => ta });
var w_,
  ta,
  of = ee(() => {
    'use strict';
    Ar();
    ({ output: w_ } = Ze()),
      (ta = class {
        constructor(e) {
          this.apiAxiosInstance = Xt(e);
        }
        async reportError(e) {
          try {
            await qe(() =>
              this.apiAxiosInstance.post('/nx-cloud/report-client-error', { message: e })
            );
          } catch (t) {
            w_.warn({
              title: `Unable to record the following error: '${e}'`,
              bodyLines: [t.message],
            });
          }
        }
      });
  });
var af = {};
Pe(af, { E2EEncryption: () => ra });
var yr,
  _r,
  ra,
  cf = ee(() => {
    'use strict';
    (yr = require('crypto')),
      (_r = require('fs')),
      (ra = class {
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
          let t = (0, yr.randomBytes)(16),
            s = (0, yr.createCipheriv)('aes-256-cbc', this.encryptionKey, t),
            n = (0, _r.readFileSync)(e),
            i = s.update(n),
            o = Buffer.concat([t, i, s.final()]);
          (0, _r.writeFileSync)(e, o);
        }
        decryptFile(e) {
          let t = (0, _r.readFileSync)(e);
          try {
            let s = (0, yr.createDecipheriv)('aes-256-cbc', this.encryptionKey, t.slice(0, 16)),
              n = t.slice(16),
              i = s.update(n),
              o = Buffer.concat([i, s.final()]);
            (0, _r.writeFileSync)(e, o);
          } catch {
            throw new Error('Could not decrypt the artifact. Please check your encryption key.');
          }
        }
      });
  });
var uf = {};
Pe(uf, { MessageReporter: () => sa });
var S_,
  sa,
  lf = ee(() => {
    'use strict';
    mi();
    ({ output: S_ } = Ze()),
      (sa = class {
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
              S_.warn({ title: 'Nx Cloud Problems', bodyLines: e });
          }
          this.message && gs(this.message);
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
            let s = '';
            e.response && e.response.data && e.response.data.message
              ? (s = `. ${e.response.data.message}`)
              : e.response && e.response.data && (s = `. ${e.response.data}`);
            let n = e.code ? ` (code: ${e.code})` : '';
            return `${e.message}${s}${n}`;
          }
        }
      });
  });
var O_ = {};
Pe(O_, { default: () => hf });
module.exports = ke(O_);
async function hf(r, e) {
  if (r.lightRunnerResolutionPaths) {
    let { configureLightClientRequire: g } = (vr(), ke(ia));
    g(r.lightRunnerResolutionPaths);
  }
  let { cacheDirectory: t } = oa(),
    { FileStorage: s } = (jh(), ke(Vh)),
    { CloudRunApi: n } = (sf(), ke(rf)),
    { ErrorReporterApi: i } = (of(), ke(nf)),
    { E2EEncryption: o } = (cf(), ke(af)),
    { getMachineInfo: c } = (Je(), ke(Ra)),
    { MessageReporter: a } = (lf(), ke(uf)),
    { submitRunMetrics: u } = (vs(), ke(Qc)),
    l = new o(r.encryptionKey),
    h = new i(r.runnerOptions),
    f = new s(l, h, r.runnerOptions, 'daemon'),
    d = new a(r.runnerOptions),
    p = {},
    _ = c(),
    y = new n(d, p, r.runnerOptions, _);
  return (
    setTimeout(async () => {
      e.log('Uploading file artifacts');
      try {
        await Promise.all(r.delayedStoreRequests.map((g) => f.store(g.hash, g.url, t))),
          e.log('Done uploading file artifacts');
      } catch (g) {
        e.log('Error when uploading file artifacts'), console.log(g);
        return;
      }
      for (let g of f.storedHashes) {
        let w = r.runEnd.taskExecutions.find((S) => S.hash === g);
        if (!w) throw new Error(`Task with hash ${g} isn't recorded`);
        w.uploadedToStorage = !0;
      }
      r.runEnd.taskExecutions.forEach((g) => {
        var w;
        g.artifactId =
          (w = r.runEnd.allTasks.find((S) => S.hash == g.hash)) == null ? void 0 : w.artifactId;
      }),
        e.log('Sending EndRun request');
      try {
        if (
          !(await y.endRun(
            r.runEnd.runData,
            r.runEnd.taskExecutions,
            r.ciExecutionContext,
            void 0,
            r.runEnd.linkId
          ))
        )
          throw new Error(d.apiError);
        e.log('Done sending EndRun request');
      } catch (g) {
        e.log('Error when sending EndRun'), console.log(g);
      }
      await u(r.runOptions);
    }, 0),
    '{}'
  );
}
