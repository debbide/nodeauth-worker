const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qr-utils-ZD31REeY.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css"])))=>i.map(i=>d[i]);
import { _ as ae, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { p as K, v as ce, b as ee, __tla as __tla_1 } from "./vaultService-DDTwa51Q.js";
import { l as L, d as ye, e as ge, __tla as __tla_2 } from "./index-C8oaAiWk.js";
import { a as le } from "./argon2-browser-DLxThqQg.js";
import { l as he, __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import { argon2id as me } from "./hash-wasm-Dup_VHWH.js";
import { unzipSync as we } from "./compression-utils-CXh1ITwj.js";
import { a as Ae } from "./qr-utils-ZD31REeY.js";
import { B as _e, S as ie, a as Se, b as J, c as be, d as Ee, M as ve, F as xe, e as fe, f as Te, g as Ie } from "./wa-sqlite-D0naBMh4.js";
import "./vue-core-Daban9YF.js";
import "./element-plus-CVRB8fAt.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let qe;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })()
]).then(async ()=>{
    function Y(s) {
        const o = new Uint8Array(s.length / 2);
        for(let t = 0; t < s.length; t += 2)o[t / 2] = parseInt(s.substring(t, t + 2), 16);
        return o;
    }
    function Pe(s) {
        const o = atob(s), t = new Uint8Array(o.length);
        for(let e = 0; e < o.length; e++)t[e] = o.charCodeAt(e);
        return t;
    }
    function te(s) {
        try {
            return JSON.parse(s);
        } catch  {
            return null;
        }
    }
    const Oe = {
        decodePayload (s) {
            const o = [];
            let t = 0;
            function e() {
                let d = 0, r = 0;
                for(; t < s.length;){
                    const i = s[t++];
                    if (d |= (i & 127) << r, (i & 128) === 0) break;
                    r += 7;
                }
                return d;
            }
            for(; t < s.length;){
                const d = s[t++], r = d >> 3, i = d & 7;
                if (r === 1 && i === 2) {
                    const a = e(), g = t + a;
                    let u = null, m = "", w = "", A = "SHA1", x = 6;
                    for(; t < g;){
                        const E = s[t++], c = E >> 3, n = E & 7;
                        if (c === 1 && n === 2) {
                            const f = e(), h = s.slice(t, t + f), l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
                            let y = 0, p = 0, _ = "";
                            for(let S = 0; S < h.length; S++)for(p = p << 8 | h[S], y += 8; y >= 5;)_ += l[p >>> y - 5 & 31], y -= 5;
                            y > 0 && (_ += l[p << 5 - y & 31]), u = _, t += f;
                        } else if (c === 2 && n === 2) {
                            const f = e();
                            m = new TextDecoder().decode(s.slice(t, t + f)), t += f;
                        } else if (c === 3 && n === 2) {
                            const f = e();
                            w = new TextDecoder().decode(s.slice(t, t + f)), t += f;
                        } else if (c === 4 && n === 0) {
                            const f = e();
                            f === 2 ? A = "SHA256" : f === 3 ? A = "SHA512" : f === 4 && (A = "MD5");
                        } else if (c === 5 && n === 0) e() === 2 && (x = 8);
                        else if (c === 6 && n === 0) e();
                        else if (n === 0) e();
                        else if (n === 2) t += e();
                        else break;
                    }
                    if (u) {
                        let E = m, c = w;
                        if (!c && m.includes(":")) {
                            const n = m.split(":");
                            c = n[0].trim(), E = n[1].trim();
                        }
                        o.push({
                            service: c || "Unknown",
                            account: E || "Unknown",
                            secret: u,
                            algorithm: A,
                            digits: x,
                            period: 30,
                            category: ""
                        });
                    }
                    t = g;
                } else if (i === 0) e();
                else if (i === 2) t += e();
                else break;
            }
            return o;
        }
    }, ue = {
        _splitCsvLine (s) {
            const o = [];
            let t = 0;
            for(; t <= s.length;){
                if (t === s.length) {
                    o.push("");
                    break;
                }
                if (s[t] === '"') {
                    let e = "";
                    for(t++; t < s.length;)if (s[t] === '"') if (s[t + 1] === '"') e += '"', t += 2;
                    else {
                        t++;
                        break;
                    }
                    else e += s[t++];
                    o.push(e.trim()), s[t] === "," && t++;
                } else {
                    const e = s.indexOf(",", t);
                    if (e === -1) {
                        o.push(s.slice(t).trim());
                        break;
                    }
                    o.push(s.slice(t, e).trim()), t = e + 1;
                }
            }
            return o;
        },
        parseCsv (s) {
            const o = s.split(`
`).filter((c)=>c.trim());
            if (o.length < 2) return [];
            const t = this._splitCsvLine(o[0]).map((c)=>c.toLowerCase()), e = [], d = t.includes("login_totp"), r = t.includes("otpauth") && !t.includes("title"), i = t.includes("otpauth") && t.includes("title"), a = t.includes("totp") && t.includes("vault") && t.includes("createtime"), g = t.includes("otpurl") && t.includes("title") && t.includes("username"), u = t.includes("issuer") || t.includes("secret") || t.includes("name"), m = [
                "otpauth",
                "login_totp",
                "totp",
                "mfa",
                "two_factor_code",
                "secret",
                "otpurl",
                "nodeauth",
                "authenticator"
            ], w = [
                "name",
                "title",
                "item name",
                "issuer",
                "label"
            ], A = [
                "username",
                "login",
                "login_username",
                "account",
                "email"
            ], x = (c)=>c ? c.toString().trim().replace(/[\s-]/g, "").toUpperCase() : "", E = t.some((c)=>m.includes(c));
            if (!d && !r && !i && !a && !g && !u && !E) return [];
            for(let c = 1; c < o.length; c++){
                const n = this._splitCsvLine(o[c]), f = {};
                if (t.forEach((h, l)=>{
                    f[h] = n[l] || "";
                }), i) {
                    const h = (f.otpauth || "").trim();
                    if (h && h.startsWith("otpauth://")) {
                        const l = K(h);
                        l && (l.service = f.title || l.service, l.account = f.username || l.account, e.push(l));
                    }
                } else if (d || r) {
                    const h = (f.login_totp || f.otpauth || f.totp || "").trim();
                    if (h) {
                        let l = null;
                        if (h.startsWith("otpauth://") || h.startsWith("steam://")) l = K(h);
                        else {
                            const y = x(h);
                            /^[A-Z2-7]+=*$/.test(y) && (l = {
                                service: f.name || "Unknown",
                                account: f.login_username || "Unknown",
                                secret: y,
                                algorithm: "SHA1",
                                digits: 6,
                                period: 30,
                                category: "",
                                type: "totp"
                            });
                        }
                        l && (l.service = f.name || l.service, l.account = f.login_username || l.account, e.push(l));
                    }
                } else if (a) {
                    const h = (f.totp || "").trim();
                    if (h && (h.startsWith("otpauth://") || h.startsWith("steam://"))) {
                        const l = K(h);
                        l && (l.service = f.name || l.service, l.account = f.username || l.account, l.category = f.vault || "", e.push(l));
                    }
                } else if (g) {
                    const h = (f.otpurl || "").trim();
                    if (h && (h.startsWith("otpauth://") || h.startsWith("steam://"))) {
                        const l = K(h);
                        l && (l.service = f.title || l.service, l.account = f.username || l.account, l.category = f.category || "", e.push(l));
                    }
                } else {
                    const h = t.find((y)=>m.includes(y)), l = h ? (f[h] || "").trim() : "";
                    if (l) if (l.toLowerCase().startsWith("otpauth://") || l.toLowerCase().startsWith("steam://")) {
                        const y = K(l);
                        if (y) {
                            const p = t.find((S)=>w.includes(S)), _ = t.find((S)=>A.includes(S));
                            y.service = f[p] || y.service, y.account = f[_] || y.account, e.push(y);
                        }
                    } else {
                        const y = x(l);
                        if (/^[A-Z2-7]+=*$/.test(y)) {
                            let _ = t.find((I)=>w.includes(I)), S = t.find((I)=>A.includes(I));
                            t.includes("issuer") && t.includes("name") && (_ = "issuer", S = "name");
                            const b = (f.type || "totp").toLowerCase(), T = b === "steam" || b === "steam guard";
                            e.push({
                                service: f[_] || "Unknown",
                                account: f[S] || "Unknown Account",
                                secret: y,
                                algorithm: T ? "SHA1" : (f.algorithm || "SHA1").toUpperCase().replace(/-/g, ""),
                                digits: T ? 5 : parseInt(f.digits || "6", 10),
                                period: T ? 30 : parseInt(f.period || "30", 10),
                                type: T ? "steam" : "totp",
                                category: f.category || ""
                            });
                        }
                    }
                }
            }
            return e;
        }
    };
    var se = {
        exports: {}
    }, pe;
    function Fe() {
        return pe || (pe = 1, (function(s, o) {
            (function(t) {
                function d(c) {
                    const n = new Uint32Array([
                        1116352408,
                        1899447441,
                        3049323471,
                        3921009573,
                        961987163,
                        1508970993,
                        2453635748,
                        2870763221,
                        3624381080,
                        310598401,
                        607225278,
                        1426881987,
                        1925078388,
                        2162078206,
                        2614888103,
                        3248222580,
                        3835390401,
                        4022224774,
                        264347078,
                        604807628,
                        770255983,
                        1249150122,
                        1555081692,
                        1996064986,
                        2554220882,
                        2821834349,
                        2952996808,
                        3210313671,
                        3336571891,
                        3584528711,
                        113926993,
                        338241895,
                        666307205,
                        773529912,
                        1294757372,
                        1396182291,
                        1695183700,
                        1986661051,
                        2177026350,
                        2456956037,
                        2730485921,
                        2820302411,
                        3259730800,
                        3345764771,
                        3516065817,
                        3600352804,
                        4094571909,
                        275423344,
                        430227734,
                        506948616,
                        659060556,
                        883997877,
                        958139571,
                        1322822218,
                        1537002063,
                        1747873779,
                        1955562222,
                        2024104815,
                        2227730452,
                        2361852424,
                        2428436474,
                        2756734187,
                        3204031479,
                        3329325298
                    ]);
                    let f = 1779033703, h = 3144134277, l = 1013904242, y = 2773480762, p = 1359893119, _ = 2600822924, S = 528734635, b = 1541459225;
                    const T = new Uint32Array(64);
                    function I(V) {
                        let Q = 0, B = V.length;
                        for(; B >= 64;){
                            let C = f, W = h, j = l, z = y, P = p, H = _, F = S, q = b, k, U, Z, X, re;
                            for(U = 0; U < 16; U++)Z = Q + U * 4, T[U] = (V[Z] & 255) << 24 | (V[Z + 1] & 255) << 16 | (V[Z + 2] & 255) << 8 | V[Z + 3] & 255;
                            for(U = 16; U < 64; U++)k = T[U - 2], X = (k >>> 17 | k << 15) ^ (k >>> 19 | k << 13) ^ k >>> 10, k = T[U - 15], re = (k >>> 7 | k << 25) ^ (k >>> 18 | k << 14) ^ k >>> 3, T[U] = (X + T[U - 7] | 0) + (re + T[U - 16] | 0) | 0;
                            for(U = 0; U < 64; U++)X = (((P >>> 6 | P << 26) ^ (P >>> 11 | P << 21) ^ (P >>> 25 | P << 7)) + (P & H ^ ~P & F) | 0) + (q + (n[U] + T[U] | 0) | 0) | 0, re = ((C >>> 2 | C << 30) ^ (C >>> 13 | C << 19) ^ (C >>> 22 | C << 10)) + (C & W ^ C & j ^ W & j) | 0, q = F, F = H, H = P, P = z + X | 0, z = j, j = W, W = C, C = X + re | 0;
                            f = f + C | 0, h = h + W | 0, l = l + j | 0, y = y + z | 0, p = p + P | 0, _ = _ + H | 0, S = S + F | 0, b = b + q | 0, Q += 64, B -= 64;
                        }
                    }
                    I(c);
                    let N, R = c.length % 64, O = c.length / 536870912 | 0, M = c.length << 3, G = R < 56 ? 56 : 120, D = c.slice(c.length - R, c.length);
                    for(D.push(128), N = R + 1; N < G; N++)D.push(0);
                    return D.push(O >>> 24 & 255), D.push(O >>> 16 & 255), D.push(O >>> 8 & 255), D.push(O >>> 0 & 255), D.push(M >>> 24 & 255), D.push(M >>> 16 & 255), D.push(M >>> 8 & 255), D.push(M >>> 0 & 255), I(D), [
                        f >>> 24 & 255,
                        f >>> 16 & 255,
                        f >>> 8 & 255,
                        f >>> 0 & 255,
                        h >>> 24 & 255,
                        h >>> 16 & 255,
                        h >>> 8 & 255,
                        h >>> 0 & 255,
                        l >>> 24 & 255,
                        l >>> 16 & 255,
                        l >>> 8 & 255,
                        l >>> 0 & 255,
                        y >>> 24 & 255,
                        y >>> 16 & 255,
                        y >>> 8 & 255,
                        y >>> 0 & 255,
                        p >>> 24 & 255,
                        p >>> 16 & 255,
                        p >>> 8 & 255,
                        p >>> 0 & 255,
                        _ >>> 24 & 255,
                        _ >>> 16 & 255,
                        _ >>> 8 & 255,
                        _ >>> 0 & 255,
                        S >>> 24 & 255,
                        S >>> 16 & 255,
                        S >>> 8 & 255,
                        S >>> 0 & 255,
                        b >>> 24 & 255,
                        b >>> 16 & 255,
                        b >>> 8 & 255,
                        b >>> 0 & 255
                    ];
                }
                function r(c, n, f) {
                    c = c.length <= 64 ? c : d(c);
                    const h = 64 + n.length + 4, l = new Array(h), y = new Array(64);
                    let p, _ = [];
                    for(p = 0; p < 64; p++)l[p] = 54;
                    for(p = 0; p < c.length; p++)l[p] ^= c[p];
                    for(p = 0; p < n.length; p++)l[64 + p] = n[p];
                    for(p = h - 4; p < h; p++)l[p] = 0;
                    for(p = 0; p < 64; p++)y[p] = 92;
                    for(p = 0; p < c.length; p++)y[p] ^= c[p];
                    function S() {
                        for(let b = h - 1; b >= h - 4; b--){
                            if (l[b]++, l[b] <= 255) return;
                            l[b] = 0;
                        }
                    }
                    for(; f >= 32;)S(), _ = _.concat(d(y.concat(d(l)))), f -= 32;
                    return f > 0 && (S(), _ = _.concat(d(y.concat(d(l))).slice(0, f))), _;
                }
                function i(c, n, f, h, l) {
                    let y;
                    for(m(c, (2 * f - 1) * 16, l, 0, 16), y = 0; y < 2 * f; y++)u(c, y * 16, l, 16), g(l, h), m(l, 0, c, n + y * 16, 16);
                    for(y = 0; y < f; y++)m(c, n + y * 2 * 16, c, y * 16, 16);
                    for(y = 0; y < f; y++)m(c, n + (y * 2 + 1) * 16, c, (y + f) * 16, 16);
                }
                function a(c, n) {
                    return c << n | c >>> 32 - n;
                }
                function g(c, n) {
                    m(c, 0, n, 0, 16);
                    for(let f = 8; f > 0; f -= 2)n[4] ^= a(n[0] + n[12], 7), n[8] ^= a(n[4] + n[0], 9), n[12] ^= a(n[8] + n[4], 13), n[0] ^= a(n[12] + n[8], 18), n[9] ^= a(n[5] + n[1], 7), n[13] ^= a(n[9] + n[5], 9), n[1] ^= a(n[13] + n[9], 13), n[5] ^= a(n[1] + n[13], 18), n[14] ^= a(n[10] + n[6], 7), n[2] ^= a(n[14] + n[10], 9), n[6] ^= a(n[2] + n[14], 13), n[10] ^= a(n[6] + n[2], 18), n[3] ^= a(n[15] + n[11], 7), n[7] ^= a(n[3] + n[15], 9), n[11] ^= a(n[7] + n[3], 13), n[15] ^= a(n[11] + n[7], 18), n[1] ^= a(n[0] + n[3], 7), n[2] ^= a(n[1] + n[0], 9), n[3] ^= a(n[2] + n[1], 13), n[0] ^= a(n[3] + n[2], 18), n[6] ^= a(n[5] + n[4], 7), n[7] ^= a(n[6] + n[5], 9), n[4] ^= a(n[7] + n[6], 13), n[5] ^= a(n[4] + n[7], 18), n[11] ^= a(n[10] + n[9], 7), n[8] ^= a(n[11] + n[10], 9), n[9] ^= a(n[8] + n[11], 13), n[10] ^= a(n[9] + n[8], 18), n[12] ^= a(n[15] + n[14], 7), n[13] ^= a(n[12] + n[15], 9), n[14] ^= a(n[13] + n[12], 13), n[15] ^= a(n[14] + n[13], 18);
                    for(let f = 0; f < 16; ++f)c[f] += n[f];
                }
                function u(c, n, f, h) {
                    for(let l = 0; l < h; l++)f[l] ^= c[n + l];
                }
                function m(c, n, f, h, l) {
                    for(; l--;)f[h++] = c[n++];
                }
                function w(c) {
                    if (!c || typeof c.length != "number") return !1;
                    for(let n = 0; n < c.length; n++){
                        const f = c[n];
                        if (typeof f != "number" || f % 1 || f < 0 || f >= 256) return !1;
                    }
                    return !0;
                }
                function A(c, n) {
                    if (typeof c != "number" || c % 1) throw new Error("invalid " + n);
                    return c;
                }
                function x(c, n, f, h, l, y, p) {
                    if (f = A(f, "N"), h = A(h, "r"), l = A(l, "p"), y = A(y, "dkLen"), f === 0 || (f & f - 1) !== 0) throw new Error("N must be power of 2");
                    if (f > 2147483647 / 128 / h) throw new Error("N too large");
                    if (h > 2147483647 / 128 / l) throw new Error("r too large");
                    if (!w(c)) throw new Error("password must be an array or buffer");
                    if (c = Array.prototype.slice.call(c), !w(n)) throw new Error("salt must be an array or buffer");
                    n = Array.prototype.slice.call(n);
                    let _ = r(c, n, l * 128 * h);
                    const S = new Uint32Array(l * 32 * h);
                    for(let P = 0; P < S.length; P++){
                        const H = P * 4;
                        S[P] = (_[H + 3] & 255) << 24 | (_[H + 2] & 255) << 16 | (_[H + 1] & 255) << 8 | (_[H + 0] & 255) << 0;
                    }
                    const b = new Uint32Array(64 * h), T = new Uint32Array(32 * h * f), I = 32 * h, N = new Uint32Array(16), R = new Uint32Array(16), O = l * f * 2;
                    let M = 0, G = null, D = !1, V = 0, Q = 0, B, C;
                    const W = p ? parseInt(1e3 / h) : 4294967295, j = typeof setImmediate < "u" ? setImmediate : setTimeout, z = function() {
                        if (D) return p(new Error("cancelled"), M / O);
                        let P;
                        switch(V){
                            case 0:
                                C = Q * 32 * h, m(S, C, b, 0, I), V = 1, B = 0;
                            case 1:
                                P = f - B, P > W && (P = W);
                                for(let F = 0; F < P; F++)m(b, 0, T, (B + F) * I, I), i(b, I, h, N, R);
                                if (B += P, M += P, p) {
                                    const F = parseInt(1e3 * M / O);
                                    if (F !== G) {
                                        if (D = p(null, M / O), D) break;
                                        G = F;
                                    }
                                }
                                if (B < f) break;
                                B = 0, V = 2;
                            case 2:
                                P = f - B, P > W && (P = W);
                                for(let F = 0; F < P; F++){
                                    const q = (2 * h - 1) * 16, k = b[q] & f - 1;
                                    u(T, k * I, b, I), i(b, I, h, N, R);
                                }
                                if (B += P, M += P, p) {
                                    const F = parseInt(1e3 * M / O);
                                    if (F !== G) {
                                        if (D = p(null, M / O), D) break;
                                        G = F;
                                    }
                                }
                                if (B < f) break;
                                if (m(b, 0, S, C, I), Q++, Q < l) {
                                    V = 0;
                                    break;
                                }
                                _ = [];
                                for(let F = 0; F < S.length; F++)_.push(S[F] >> 0 & 255), _.push(S[F] >> 8 & 255), _.push(S[F] >> 16 & 255), _.push(S[F] >> 24 & 255);
                                const H = r(c, _, y);
                                return p && p(null, 1, H), H;
                        }
                        p && j(z);
                    };
                    if (!p) for(;;){
                        const P = z();
                        if (P != null) return P;
                    }
                    z();
                }
                const E = {
                    scrypt: function(c, n, f, h, l, y, p) {
                        return new Promise(function(_, S) {
                            let b = 0;
                            p && p(0), x(c, n, f, h, l, y, function(T, I, N) {
                                if (T) S(T);
                                else if (N) p && b !== 1 && p(1), _(new Uint8Array(N));
                                else if (p && I !== b) return b = I, p(I);
                            });
                        });
                    },
                    syncScrypt: function(c, n, f, h, l, y) {
                        return new Uint8Array(x(c, n, f, h, l, y));
                    }
                };
                s.exports = E;
            })();
        })(se)), se.exports;
    }
    var Le = Fe();
    const De = {
        async decryptDatabase (s, o) {
            const t = s.header.slots;
            if (!t || !t.length) throw new Error("Aegis: 找不到密钥槽");
            const e = s.db, d = s.header.params;
            let r = null;
            const i = new TextEncoder().encode(o);
            for (const A of t)if (A.type === 1) {
                const x = Y(A.salt), E = await Le.scrypt(i, x, A.n, A.r, A.p, 32), c = Y(A.key), n = Y(A.key_params.nonce), f = Y(A.key_params.tag), h = new Uint8Array(c.length + f.length);
                h.set(c), h.set(f, c.length);
                try {
                    const l = await window.crypto.subtle.importKey("raw", E, {
                        name: "AES-GCM"
                    }, !1, [
                        "decrypt"
                    ]), y = await window.crypto.subtle.decrypt({
                        name: "AES-GCM",
                        iv: n
                    }, l, h);
                    r = new Uint8Array(y);
                    break;
                } catch  {
                    continue;
                }
            }
            if (!r) throw new Error("Aegis: 密码错误或不支持的加密格式 (缺少 Scrypt)");
            const a = Pe(e), g = Y(d.nonce), u = Y(d.tag), m = new Uint8Array(a.length + u.length);
            m.set(a), m.set(u, a.length);
            const w = await window.crypto.subtle.importKey("raw", r, {
                name: "AES-GCM"
            }, !1, [
                "decrypt"
            ]);
            try {
                const A = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: g
                }, w, m);
                return JSON.parse(new TextDecoder().decode(A));
            } catch  {
                throw new Error("Aegis: 数据库载荷解密失败");
            }
        }
    }, de = {
        name: "Proton Authenticator (.json)",
        fileType: "application/json, text/plain",
        async parse (s, o) {
            let t;
            try {
                t = JSON.parse(s);
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (t.version !== 1 || !t.salt || !t.content) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!o) throw new Error("PASSWORD_REQUIRED");
            try {
                const e = atob(t.salt), d = new Uint8Array(e.length);
                for(let n = 0; n < e.length; n++)d[n] = e.charCodeAt(n);
                const r = atob(t.content), i = new Uint8Array(r.length);
                for(let n = 0; n < r.length; n++)i[n] = r.charCodeAt(n);
                const a = i.slice(0, 12), g = i.slice(12), m = (await le.hash({
                    pass: o,
                    salt: d,
                    time: 2,
                    mem: 19 * 1024,
                    hashLen: 32,
                    parallelism: 1,
                    type: le.ArgonType.Argon2id,
                    distPath: "/"
                })).hash, w = await window.crypto.subtle.importKey("raw", m, {
                    name: "AES-GCM"
                }, !1, [
                    "decrypt"
                ]), A = new TextEncoder().encode("proton.authenticator.export.v1"), x = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: a,
                    additionalData: A,
                    tagLength: 128
                }, w, g), E = new TextDecoder().decode(x), c = JSON.parse(E);
                return this.parsePlaintext(c);
            } catch (e) {
                throw L.error("Proton Authenticator decryption failed:", e), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        },
        parsePlaintext (s) {
            const t = (typeof s == "string" ? JSON.parse(s) : s).entries || [], e = [];
            for (const d of t)if (d.content && d.content.uri) {
                const r = K(d.content.uri);
                r && (d.content.name && (r.account = d.content.name), (!r.service || r.service === "Unknown") && (r.service = d.content.entry_type || "Unknown"), e.push(r));
            }
            return e;
        }
    }, Ne = {
        name: "Proton Pass (.pgp)",
        fileType: "text/plain",
        async parse (s, o) {
            try {
                const t = await he("openpgp"), e = t?.default || t, d = await e.readMessage({
                    armoredMessage: s
                }), { data: r } = await e.decrypt({
                    message: d,
                    passwords: [
                        o
                    ],
                    format: "utf8"
                }), i = JSON.parse(r), a = [], g = i.vaults || {};
                for(const u in g){
                    const w = g[u].items || [];
                    for (const A of w){
                        const x = A.data || {}, E = x.content || {}, c = x.metadata || {};
                        if (E.totpUri) {
                            const n = K(E.totpUri);
                            n && (c.name && (n.service = c.name), E.itemUsername && (n.account = E.itemUsername), a.push(n));
                        }
                    }
                }
                return a;
            } catch (t) {
                throw L.error("Proton Pass PGP decryption failed:", t), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        }
    }, Re = {
        isEnteEncrypted (s) {
            return s && typeof s.kdfParams == "object" && typeof s.encryptedData == "string" && typeof s.encryptionNonce == "string";
        },
        async decryptAndParse (s, o) {
            let t;
            try {
                t = typeof s == "string" ? JSON.parse(s) : s;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (!this.isEnteEncrypted(t)) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!o) throw new Error("PASSWORD_REQUIRED");
            const e = oe(t.kdfParams.salt), d = oe(t.encryptionNonce), r = oe(t.encryptedData), { opsLimit: i, memLimit: a } = t.kdfParams, g = Math.floor(a / 1024);
            let u;
            try {
                u = await me({
                    password: o,
                    salt: e,
                    parallelism: 1,
                    iterations: i,
                    memorySize: g,
                    hashLength: 32,
                    outputType: "binary"
                });
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            let m;
            try {
                const E = await Ue(), c = E.crypto_secretstream_xchacha20poly1305_init_pull(d, u), n = E.crypto_secretstream_xchacha20poly1305_pull(c, r);
                if (!n || !n.message) throw new Error("no result");
                m = n.message;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            const A = new TextDecoder().decode(m).split(`
`), x = [];
            for (const E of A){
                const c = E.trim();
                if (!c.startsWith("otpauth://")) continue;
                const n = K(c);
                n && n.secret && x.push(n);
            }
            return x;
        }
    };
    function oe(s) {
        const o = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(s.length / 4) * 4, "="), t = atob(o), e = new Uint8Array(t.length);
        for(let d = 0; d < t.length; d++)e[d] = t.charCodeAt(d);
        return e;
    }
    let ne = null;
    async function Ue() {
        if (ne) return ne;
        const s = await he("libsodium"), o = s?.default || s;
        return await o.ready, ne = o, ne;
    }
    class v extends Error {
        constructor(o, t = "MIGRATION_ERROR", e = null){
            super(o), this.name = "migrationError", this.code = t, this.details = e;
        }
    }
    class Me extends _e {
        name = "memory";
        mapNameToFile = new Map;
        mapIdToFile = new Map;
        constructor(){
            super();
        }
        close() {
            for (const o of this.mapIdToFile.keys())this.xClose(o);
        }
        xOpen(o, t, e, d) {
            o = o || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
            let r = this.mapNameToFile.get(o);
            if (!r) if (e & ie) r = {
                name: o,
                flags: e,
                size: 0,
                data: new ArrayBuffer(0)
            }, this.mapNameToFile.set(o, r);
            else return Se;
            return this.mapIdToFile.set(t, r), d.setInt32(0, e, !0), J;
        }
        xClose(o) {
            const t = this.mapIdToFile.get(o);
            return t && (this.mapIdToFile.delete(o), t.flags & be && this.mapNameToFile.delete(t.name)), J;
        }
        xRead(o, t, e) {
            const d = this.mapIdToFile.get(o), r = Math.min(e, d.size), a = Math.min(e + t.byteLength, d.size) - r;
            return a && t.set(new Uint8Array(d.data, r, a)), a < t.byteLength ? (t.fill(0, a), Ee) : J;
        }
        xWrite(o, t, e) {
            const d = this.mapIdToFile.get(o);
            if (e + t.byteLength > d.data.byteLength) {
                const r = Math.max(e + t.byteLength, 2 * d.data.byteLength), i = new ArrayBuffer(r);
                new Uint8Array(i).set(new Uint8Array(d.data, 0, d.size)), d.data = i;
            }
            return new Uint8Array(d.data, e, t.byteLength).set(t), d.size = Math.max(d.size, e + t.byteLength), J;
        }
        xTruncate(o, t) {
            const e = this.mapIdToFile.get(o);
            return e.size = Math.min(e.size, t), J;
        }
        xFileSize(o, t) {
            const e = this.mapIdToFile.get(o);
            return t.setBigInt64(0, BigInt(e.size), !0), J;
        }
        xDelete(o, t) {
            return this.mapNameToFile.delete(o), J;
        }
        xAccess(o, t, e) {
            const d = this.mapNameToFile.get(o);
            return e.setInt32(0, d ? 1 : 0, !0), J;
        }
    }
    class Ce extends Me {
        name = "memory-async";
        constructor(){
            super();
        }
        async close() {
            for (const o of this.mapIdToFile.keys())await this.xClose(o);
        }
        xOpen(o, t, e, d) {
            return this.handleAsync(async ()=>super.xOpen(o, t, e, d));
        }
        xClose(o) {
            return this.handleAsync(async ()=>super.xClose(o));
        }
        xRead(o, t, e) {
            return this.handleAsync(async ()=>super.xRead(o, t, e));
        }
        xWrite(o, t, e) {
            return this.handleAsync(async ()=>super.xWrite(o, t, e));
        }
        xTruncate(o, t) {
            return this.handleAsync(async ()=>super.xTruncate(o, t));
        }
        xFileSize(o, t) {
            return this.handleAsync(async ()=>super.xFileSize(o, t));
        }
        xDelete(o, t) {
            return this.handleAsync(async ()=>super.xDelete(o, t));
        }
        xAccess(o, t, e) {
            return this.handleAsync(async ()=>super.xAccess(o, t, e));
        }
    }
    let $;
    $ = {
        SALT_LEN: 32,
        IV_LEN: 12,
        ITERATIONS: 1e4,
        ALGORITHM: "aes-256-gcm",
        KDF: "PBKDF2"
    };
    qe = {
        detectFileType (s, o) {
            if (s instanceof ArrayBuffer || s instanceof Uint8Array) {
                const e = s instanceof Uint8Array ? s : new Uint8Array(s), d = "SQLite format 3";
                let r = !0;
                for(let i = 0; i < d.length && i < e.length; i++)if (e[i] !== d.charCodeAt(i)) {
                    r = !1;
                    break;
                }
                if (r) return "phonefactor";
                try {
                    const i = new TextDecoder("utf-8", {
                        fatal: !1
                    }).decode(e);
                    if (i.includes("accounts") && (i.includes("oath_secret_key") || i.includes("encrypted_oath_secret_key"))) return "phonefactor";
                } catch  {}
            }
            if (o && o.toLowerCase().includes("phonefactor")) return "phonefactor";
            let t = s;
            if (s instanceof ArrayBuffer || s instanceof Uint8Array) try {
                const e = s instanceof Uint8Array ? s : new Uint8Array(s);
                t = new TextDecoder("utf-8", {
                    fatal: !1
                }).decode(e);
            } catch  {
                t = "";
            }
            if (o && o.toLowerCase().endsWith(".csv")) {
                const e = typeof t == "string" ? t.split(`
`)[0].toLowerCase() : "";
                return e.includes("login_totp") ? "bitwarden_pass_csv" : e.includes("title") && e.includes("otpauth") ? "1password_csv" : e.includes("otpauth") ? "bitwarden_auth_csv" : e.includes("totp") && e.includes("vault") && e.includes("createtime") ? "proton_pass_csv" : e.includes("otpurl") && e.includes("title") && e.includes("username") ? "dashlane_csv" : "generic_csv";
            }
            if (typeof t == "string" && t.trim().startsWith("otpauth://")) return "generic_text";
            if (typeof t == "string") {
                const e = te(t);
                if (e) {
                    if (Array.isArray(e.items) && Array.isArray(e.folders)) return "bitwarden_pass_json";
                    if (Array.isArray(e.items) && (e.encrypted === !1 || !("encrypted" in e))) return "bitwarden_auth_json";
                    if (e.encrypted === !0 && e.app === "nodeauth") return "nodeauth_encrypted";
                    if (e.version === 1 && Array.isArray(e.accounts) && (e.accounts.length === 0 || e.accounts[0].issuerName)) return "lastpass_auth_json";
                    if (e.app === "nodeauth" || Array.isArray(e.accounts) || Array.isArray(e.vault) || Array.isArray(e.secrets)) return "nodeauth_json";
                    if (e.schemaVersion && e.servicesEncrypted && typeof e.servicesEncrypted == "string") return "2fas_encrypted";
                    if (e.schemaVersion && Array.isArray(e.services)) return "2fas";
                    if (e.version === 1 && e.db && typeof e.db == "object" && Array.isArray(e.db.entries)) return "aegis";
                    if (e.version === 1 && e.entries && Array.isArray(e.entries)) return "proton_auth";
                    if (e.version === 1 && e.header && e.db && typeof e.db == "string") return "aegis_encrypted";
                    if (e.version === 1 && typeof e.salt == "string" && typeof e.content == "string") return "proton_auth_encrypted";
                    if (e.kdfParams && typeof e.encryptedData == "string") return "ente_encrypted";
                    if (e.encrypted === !0 && e.passwordProtected === !0 && e.encKeyValidation_DO_NOT_EDIT) return "bitwarden_pass_encrypted";
                    if (e.shared_secret && (e.account_name || e.SteamID)) return "steam_mafile";
                }
            }
            if (typeof t == "string" && t.includes("-----BEGIN PGP MESSAGE-----")) return "proton_pass_pgp";
            if (o) {
                const e = o.toLowerCase();
                if (e.endsWith(".2fas")) return "2fas";
                if (e.endsWith(".txt")) return "generic_text";
                if (e.endsWith(".mafile")) return "steam_mafile";
                if (e.endsWith(".1pux")) return "1password_pux";
            }
            return "unknown";
        },
        async fetchAllVault () {
            const s = await ce.getVault({
                limit: 9999
            });
            if (!s.success) throw new v("无法获取账号数据", "VAULT_FETCH_FAILED");
            return s.vault || [];
        },
        async exportData (s, o, t, e = "generic") {
            const r = {
                version: "2.0",
                app: "nodeauth",
                timestamp: new Date().toISOString()
            };
            if (o === "nodeauth_encrypted" || o === "encrypted") {
                if (!t) throw new v("加密导出需要密码", "MISSING_PASSWORD");
                const i = {
                    ...r,
                    accounts: s
                }, a = await ge(i, t);
                return JSON.stringify({
                    ...r,
                    encrypted: !0,
                    data: a,
                    note: "This file is encrypted with your export password (AES-GCM-256 + PBKDF2)."
                }, null, 2);
            }
            if (o === "generic_json") {
                const i = s.map((a)=>({
                        issuer: a.service || "Unknown",
                        account: a.account || "",
                        secret: a.secret,
                        type: a.type === "steam" ? "STEAM" : "TOTP",
                        digits: a.digits || 6,
                        period: a.period || 30,
                        algorithm: a.algorithm || "SHA1",
                        category: a.category || ""
                    }));
                return JSON.stringify({
                    version: "1.0",
                    exportDate: new Date().toISOString(),
                    count: i.length,
                    secrets: i
                }, null, 2);
            }
            if (o === "nodeauth_json") return JSON.stringify({
                ...r,
                encrypted: !1,
                accounts: s
            }, null, 2);
            if (o === "2fas") {
                const i = s.map((a, g)=>{
                    const u = a.type === "steam";
                    return {
                        name: a.service,
                        secret: a.secret,
                        otp: {
                            source: "manual",
                            account: a.account || "",
                            digits: u ? 5 : a.digits || 6,
                            period: a.period || 30,
                            algorithm: a.algorithm || "SHA1",
                            tokenType: u ? "STEAM" : "TOTP",
                            counter: 0
                        },
                        order: {
                            position: g
                        },
                        badge: {
                            color: "Default"
                        },
                        updatedAt: Date.now(),
                        icon: {
                            selected: "Label",
                            label: {
                                text: (a.service || "?").slice(0, 2).toUpperCase(),
                                backgroundColor: "Default"
                            },
                            iconCollection: {
                                id: "A5B3FB65-4EC5-43E6-8EC1-49E24CA9E7AD"
                            }
                        }
                    };
                });
                return JSON.stringify({
                    schemaVersion: 4,
                    appVersionCode: 50316,
                    appVersionName: "5.3.16",
                    appOrigin: "ios",
                    groups: [],
                    services: i
                });
            }
            if (o === "aegis") {
                const i = new Map;
                s.forEach((u)=>{
                    u.category && !i.has(u.category) && i.set(u.category, crypto.randomUUID());
                });
                const a = Array.from(i.entries()).map(([u, m])=>({
                        name: u,
                        uuid: m
                    })), g = s.map((u)=>{
                    const m = [];
                    return u.category && i.has(u.category) && m.push(i.get(u.category)), {
                        type: u.type === "steam" ? "steam" : "totp",
                        uuid: crypto.randomUUID(),
                        name: u.account || u.service,
                        issuer: u.service,
                        info: {
                            secret: u.secret,
                            algo: u.algorithm || "SHA1",
                            digits: u.type === "steam" ? 5 : u.digits || 6,
                            period: u.period || 30
                        },
                        groups: m
                    };
                });
                return JSON.stringify({
                    version: 1,
                    header: {
                        slots: null,
                        params: null
                    },
                    db: {
                        version: 3,
                        entries: g,
                        groups: a
                    }
                }, null, 2);
            }
            if (o === "proton_auth") {
                const i = {
                    version: 1,
                    entries: s.map((a)=>{
                        const g = a.type === "steam", u = g ? `steam://${a.secret}` : ee(a);
                        return {
                            id: crypto.randomUUID(),
                            content: {
                                uri: u,
                                entry_type: g ? "Steam" : "Totp",
                                name: a.account || a.service
                            },
                            note: a.category || null
                        };
                    })
                };
                return JSON.stringify(i, null, 2);
            }
            if (o === "generic_text") return s.map((i)=>ee(i)).join(`
`);
            if (o === "bitwarden_auth_csv") {
                let i = `name,secret,totp,favorite,folder
`;
                return s.forEach((a)=>{
                    const g = `"${a.service}${a.account ? ":" + a.account : ""}"`, u = a.type === "steam" ? `steam://${a.secret}` : ee(a);
                    i += `${g},${a.secret},"${u}",0,
`;
                }), i;
            }
            if (o === "generic_csv") {
                let i = `name,issuer,secret,algorithm,digits,period,type,category
`;
                return s.forEach((a)=>{
                    const g = a.account || "", u = a.service || "", m = a.type === "steam" ? "STEAM" : "TOTP", w = a.category || "";
                    i += `"${g}","${u}",${a.secret},${a.algorithm || "SHA1"},${a.digits || 6},${a.period || 30},${m},"${w}"
`;
                }), i;
            }
            if (o === "bitwarden_auth_json") {
                const i = s.map((a)=>{
                    const g = a.type === "steam" ? `steam://${a.secret}` : ee(a);
                    return {
                        favorite: !1,
                        id: crypto.randomUUID().toUpperCase(),
                        login: {
                            totp: g,
                            username: a.account || ""
                        },
                        name: a.service,
                        type: 1
                    };
                });
                return JSON.stringify({
                    encrypted: !1,
                    items: i
                });
            }
            throw new v("未知的导出类型: " + o, "UNKNOWN_EXPORT_TYPE");
        },
        async exportAsGaMigration (s) {
            if (!s || s.length === 0) throw new v("没有账户可以迁移", "EMPTY_VAULT");
            const o = 10, t = [];
            for(let u = 0; u < s.length; u += o)t.push(s.slice(u, u + o));
            const e = Math.floor(Math.random() * 2147483647), d = await ae(()=>import("./qr-utils-ZD31REeY.js").then((u)=>u.b), __vite__mapDeps([0,1,2,3])), r = [];
            function i(u, m) {
                for(; u >= 128;)m.push(u & 127 | 128), u >>>= 7;
                m.push(u);
            }
            function a(u, m) {
                const w = new TextEncoder().encode(u);
                i(w.length, m);
                for(let A = 0; A < w.length; A++)m.push(w[A]);
            }
            function g(u, m) {
                i(u.length, m);
                for(let w = 0; w < u.length; w++)m.push(u[w]);
            }
            for(let u = 0; u < t.length; u++){
                const m = t[u], w = [];
                w.push(16), i(1, w), w.push(24), i(t.length, w), w.push(32), i(u, w), w.push(40), i(e, w);
                for (const c of m){
                    const n = [], f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", h = c.secret.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), l = [];
                    let y = 0, p = 0;
                    for(let T = 0; T < h.length; T++){
                        const I = f.indexOf(h[T]);
                        I !== -1 && (p = p << 5 | I, y += 5, y >= 8 && (l.push(p >>> y - 8 & 255), y -= 8));
                    }
                    l.length > 0 && (n.push(10), g(l, n));
                    const _ = c.account || c.service;
                    _ && (n.push(18), a(_, n)), c.service && (n.push(26), a(c.service, n));
                    let S = 1;
                    c.algorithm === "SHA256" ? S = 2 : c.algorithm === "SHA512" && (S = 3), n.push(32), i(S, n);
                    let b = 1;
                    c.digits === 8 && (b = 2), n.push(40), i(b, n), n.push(48), i(2, n), w.push(10), i(n.length, w);
                    for(let T = 0; T < n.length; T++)w.push(n[T]);
                }
                let A = "";
                for(let c = 0; c < w.length; c++)A += String.fromCharCode(w[c]);
                const x = `otpauth-migration://offline?data=${encodeURIComponent(btoa(A))}`, E = await d.toDataURL(x, {
                    errorCorrectionLevel: "M",
                    width: 480,
                    margin: 2
                });
                r.push(E);
            }
            return r;
        },
        async exportAsHtml (s) {
            const o = await ae(()=>import("./qr-utils-ZD31REeY.js").then((e)=>e.b), __vite__mapDeps([0,1,2,3])), t = [];
            t.push(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>NodeAuth 备份报告</title>
        <style>
          body { font-family: -apple-system, system-ui, sans-serif; padding: 20px; color: #333; max-width: 1000px; margin: 0 auto; line-height: 1.5; }
          .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #eaeaea; padding-bottom: 20px; }
          .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
          .card { border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; background: white; page-break-inside: avoid; }
          .qr-img { width: 160px; height: 160px; margin: 10px 0; border: 1px solid #eee; }
          .service { font-weight: bold; font-size: 1.1em; color: #1a73e8; margin-bottom: 5px; word-break: break-all; }
          .account { color: #555; font-size: 0.9em; margin-bottom: 15px; word-break: break-all; }
          .code { font-family: monospace; background: #f5f5f5; padding: 5px 10px; border-radius: 4px; font-size: 1.2em; letter-spacing: 2px; }
          .footer { text-align: center; margin-top: 50px; color: #888; font-size: 0.9em; page-break-before: auto; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
            .card { box-shadow: none; border: 1px solid #999; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>NodeAuth 二步验证账户备份</h1>
          <p>生成时间：${new Date().toLocaleString()}</p>
          <p class="no-print" style="color: #d93025; font-weight: bold;">⚠️ 警告：此页面包含敏感信息，请妥善保管。请使用浏览器打印功能将其保存为 PDF 或打印成纸质备份。</p>
          <button class="no-print" onclick="window.print()" style="padding: 10px 20px; background: #1a73e8; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">打印 / 导出 PDF</button>
        </div>
        <div class="grid">
    `);
            for (const e of s){
                const d = ee({
                    service: e.service,
                    account: e.account,
                    secret: e.secret,
                    algorithm: e.algorithm,
                    digits: e.digits,
                    period: e.period
                });
                try {
                    const r = await o.toDataURL(d, {
                        errorCorrectionLevel: "M",
                        margin: 2
                    });
                    t.push(`
          <div class="card">
            <div class="service">${e.service}</div>
            <div class="account">${e.account || "-"}</div>
            <img class="qr-img" src="${r}" alt="QR Code">
            <div class="code">${e.secret.replace(/(.{4})/g, "$1 ").trim()}</div>
            <div style="font-size: 0.8em; color: #888; margin-top: 8px;">${e.algorithm || "SHA1"} / ${e.digits} / ${e.period}s</div>
          </div>
        `);
                } catch  {}
            }
            return t.push(`
        </div>
        <div class="footer"><p>This report was securely generated in the browser for backup purposes.</p></div>
      </body>
      </html>
    `), t.join(`
`);
        },
        async decrypt2FasEncrypted (s, o) {
            try {
                const t = o.servicesEncrypted;
                if (!t || typeof t != "string") throw new v("无效的 2FAS 加密数据：找不到 servicesEncrypted 字段", "INVALID_2FAS_ENCRYPTED");
                const e = t.split(":");
                if (e.length < 3) throw new v("无效的 2FAS 加密格式：应为 salt:iv:ciphertext", "INVALID_2FAS_FORMAT");
                const r = [
                    e[0],
                    e[1],
                    e.slice(2).join(":")
                ].map((l)=>Uint8Array.from(atob(l.replace(/\s+/g, "")), (y)=>y.charCodeAt(0))), i = (l)=>{
                    const y = l.reduce((S, b)=>S + b.length, 0), p = new Uint8Array(y);
                    let _ = 0;
                    for (const S of l)p.set(S, _), _ += S.length;
                    return p;
                };
                let a, g, u;
                const m = r.findIndex((l)=>l.length === $.IV_LEN);
                if (m !== -1 && (g = r.splice(m, 1)[0], r.length > 0)) {
                    let l = 0;
                    for(let y = 1; y < r.length; y++)r[y].length < r[l].length && (l = y);
                    a = r.splice(l, 1)[0], u = r.length === 1 ? r[0] : i(r);
                }
                if (!a || !g || !u) {
                    let l = !1;
                    const y = [
                        {
                            salt: r[1],
                            iv: r[2],
                            cipher: r[0],
                            name: "bufs[1]=salt, bufs[2]=iv, bufs[0]=cipher"
                        },
                        {
                            salt: r.length > 1 && r[1].length >= 44 ? r[1].slice(0, 32) : null,
                            iv: r.length > 1 && r[1].length >= 44 ? r[1].slice(32, 44) : null,
                            cipher: r[0],
                            name: "salt/iv extracted from bufs[1]"
                        },
                        {
                            salt: r[0].slice(0, 32),
                            iv: r[0].slice(32, 44),
                            cipher: r[0].slice(44),
                            name: "salt/iv extracted from bufs[0]"
                        }
                    ];
                    for (const p of y)if (!(!p.salt || !p.iv || !p.cipher) && p.iv.length === $.IV_LEN) try {
                        const _ = new TextEncoder().encode(s), S = await crypto.subtle.importKey("raw", _, {
                            name: "PBKDF2"
                        }, !1, [
                            "deriveKey"
                        ]), b = await crypto.subtle.deriveKey({
                            name: "PBKDF2",
                            salt: p.salt,
                            iterations: $.ITERATIONS,
                            hash: "SHA-256"
                        }, S, {
                            name: "AES-GCM",
                            length: 256
                        }, !1, [
                            "decrypt"
                        ]);
                        if (p.cipher.length >= 16) {
                            const T = p.cipher.slice(p.cipher.length - 16), I = p.cipher.slice(0, p.cipher.length - 16), N = await crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: p.iv
                            }, b, new Uint8Array([
                                ...I,
                                ...T
                            ])), R = new TextDecoder().decode(N);
                            JSON.parse(R), a = p.salt, g = p.iv, u = p.cipher, l = !0, L.debug("[decrypt2FasEncrypted] permutation succeeded with:", p.name);
                            break;
                        }
                    } catch  {}
                    !l && !a && (a = r[0], g = r[1], u = r[2], a.length !== $.SALT_LEN && g.length === $.SALT_LEN && ([a, g] = [
                        g,
                        a
                    ]), g.length !== $.IV_LEN && u.length === $.IV_LEN && ([g, u] = [
                        u,
                        g
                    ]));
                }
                if (L.debug("[decrypt2FasEncrypted] chosen mapping lengths salt,iv,cipher=", a?.length, g?.length, u?.length), a.length < 16) throw new v(`salt 长度过短：${a.length}`, "INVALID_SALT_LEN");
                if (g.length !== $.IV_LEN) throw new v(`IV 长度错误：期望 ${$.IV_LEN}，实际 ${g.length}`, "INVALID_IV_LEN");
                const w = new TextEncoder().encode(s), A = await crypto.subtle.importKey("raw", w, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveKey"
                ]), x = await crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: a,
                    iterations: $.ITERATIONS,
                    hash: "SHA-256"
                }, A, {
                    name: "AES-GCM",
                    length: 256
                }, !1, [
                    "decrypt"
                ]);
                if (L.debug("[decrypt2FasEncrypted] key derived"), u.length < 16) throw new v("密文过短（无法包含 auth tag）", "CIPHERTEXT_TOO_SHORT");
                const E = u.slice(u.length - 16), c = u.slice(0, u.length - 16), n = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: g
                }, x, new Uint8Array([
                    ...c,
                    ...E
                ])), f = new TextDecoder().decode(n), h = JSON.parse(f);
                if (!Array.isArray(h)) throw new v("解密后的数据不是数组格式", "INVALID_DECRYPTED_FORMAT");
                return h;
            } catch (t) {
                throw t instanceof v ? t : new v(`2FAS 解密失败：${t.message || String(t)}`, "TWOFAS_DECRYPTION_FAILED", t);
            }
        },
        async decryptBitwardenPassEncrypted (s, o) {
            try {
                const t = o.salt, e = o.kdfIterations, d = o.kdfType;
                if (d !== 0) throw new v(`不支持的 KDF 类型: ${d}`, "UNSUPPORTED_BITWARDEN_KDF");
                const r = new TextEncoder().encode(t), i = new TextEncoder().encode(s), a = await crypto.subtle.importKey("raw", i, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveBits"
                ]), g = await crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: r,
                    iterations: e,
                    hash: "SHA-256"
                }, a, 256), u = new Uint8Array(g), m = await this._hkdfExpandSha256(u, "enc", 32), w = await this._hkdfExpandSha256(u, "mac", 32), A = async (c, n, f)=>{
                    const h = c.split(".");
                    if (h[0] !== "2") throw new Error("Unsupported encryption type");
                    const l = h[1].split("|"), y = Uint8Array.from(atob(l[0]), (O)=>O.charCodeAt(0)), p = Uint8Array.from(atob(l[1]), (O)=>O.charCodeAt(0)), _ = Uint8Array.from(atob(l[2]), (O)=>O.charCodeAt(0)), S = await crypto.subtle.importKey("raw", f, {
                        name: "HMAC",
                        hash: "SHA-256"
                    }, !1, [
                        "sign"
                    ]), b = new Uint8Array(y.length + p.length);
                    b.set(y, 0), b.set(p, y.length);
                    const T = new Uint8Array(await crypto.subtle.sign("HMAC", S, b));
                    if (_.length !== T.length) return null;
                    let I = 0;
                    for(let O = 0; O < _.length; O++)I |= _[O] ^ T[O];
                    if (I !== 0) return null;
                    const N = await crypto.subtle.importKey("raw", n, {
                        name: "AES-CBC"
                    }, !1, [
                        "decrypt"
                    ]), R = await crypto.subtle.decrypt({
                        name: "AES-CBC",
                        iv: y
                    }, N, p);
                    return new TextDecoder().decode(R);
                };
                if (!await A(o.encKeyValidation_DO_NOT_EDIT, m, w)) throw new Error("MAC verification failed");
                const E = await A(o.data, m, w);
                return JSON.parse(E);
            } catch (t) {
                throw new v(`Bitwarden 解密失败: ${t.message}`, "BITWARDEN_DECRYPTION_FAILED", t);
            }
        },
        async _hkdfExpandSha256 (s, o, t) {
            const e = new TextEncoder().encode(o || ""), d = await crypto.subtle.importKey("raw", s, {
                name: "HMAC",
                hash: "SHA-256"
            }, !1, [
                "sign"
            ]), r = new Uint8Array(t);
            let i = new Uint8Array(0), a = 0, g = 1;
            for(; a < t;){
                const u = new Uint8Array(i.length + e.length + 1);
                u.set(i, 0), u.set(e, i.length), u[u.length - 1] = g & 255, i = new Uint8Array(await crypto.subtle.sign("HMAC", d, u));
                const m = Math.min(i.length, t - a);
                r.set(i.slice(0, m), a), a += m, g++;
            }
            return r;
        },
        bytesToBase32 (s) {
            const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            let t = 0, e = 0, d = "";
            for(let r = 0; r < s.length; r++)for(e = e << 8 | s[r], t += 8; t >= 5;)t -= 5, d += o[e >>> t & 31];
            for(t > 0 && (d += o[e << 5 - t & 31]); d.length % 8;)d += "=";
            return d;
        },
        base64ToBase32 (s) {
            try {
                const o = atob(s.trim()), t = new Uint8Array(o.length);
                for(let e = 0; e < o.length; e++)t[e] = o.charCodeAt(e);
                return this.bytesToBase32(t);
            } catch (o) {
                throw new Error(`Base64 转 Base32 失败: ${o.message}`);
            }
        },
        async parsePhoneFactor (s) {
            console.log("[PhoneFactor] parsePhoneFactor 开始");
            let o = null, t = null, e = null, d = null;
            try {
                if (s && s.main && s.main.buffer) o = new Uint8Array(s.main.buffer), s.wal && s.wal.buffer && (t = new Uint8Array(s.wal.buffer)), s.shm && s.shm.buffer && (e = new Uint8Array(s.shm.buffer));
                else if (s instanceof ArrayBuffer || s instanceof Uint8Array) o = new Uint8Array(s);
                else throw new v("无法识别传入的 PhoneFactor 数据格式", "INVALID_PHONEFACTOR_INPUT");
                console.log("[PhoneFactor] 文件提取完成", {
                    mainBufLen: o?.byteLength,
                    walBufLen: t?.byteLength ?? 0,
                    shmBufLen: e?.byteLength ?? 0
                }), console.log("[PhoneFactor] 调用 SQLiteESMFactory...");
                const r = await ve();
                console.log("[PhoneFactor] SQLiteESMFactory 完成，创建 sqlite3...");
                const i = xe(r);
                console.log("[PhoneFactor] sqlite3 Factory 完成"), d = new Ce;
                const a = `vfs-${Date.now()}`;
                d.name = a, i.vfs_register(d), console.log("[PhoneFactor] VFS 注册完成:", a);
                const g = "PhoneFactor", u = (h, l)=>{
                    const y = l.buffer.slice(l.byteOffset, l.byteOffset + l.byteLength);
                    d.mapNameToFile.set(h, {
                        name: h,
                        flags: ie | fe | Te,
                        size: l.byteLength,
                        data: y
                    });
                };
                u(g, o);
                const m = t && t.byteLength > 0;
                m && u(`${g}-wal`, t), e && e.byteLength > 0 && u(`${g}-shm`, e), console.log("[PhoneFactor] 注入文件到 VFS 完成", {
                    main: g,
                    hasWal: m,
                    hasShm: !!(e && e.byteLength > 0)
                }), console.log("[PhoneFactor] 调用 open_v2...");
                const w = await i.open_v2(g, fe | ie, a);
                L.info("[PhoneFactor] open_v2 成功"), L.info("[PhoneFactor] 执行 PRAGMA locking_mode..."), await i.exec(w, "PRAGMA locking_mode = EXCLUSIVE;"), L.info("[PhoneFactor] 执行 PRAGMA journal_mode..."), await i.exec(w, "PRAGMA journal_mode = DELETE;"), L.info("[PhoneFactor] PRAGMA 完成");
                let A = !1;
                if (await i.exec(w, "SELECT name FROM sqlite_master WHERE type='table' AND name='accounts'", (h)=>{
                    A = !0;
                }), L.info(`[PhoneFactor] accounts 表存在: ${A}`), !A) throw await i.close(w), new v("不是有效的Microsoft Authenticator数据文件", "INVALID_PHONEFACTOR_FILE");
                const x = [];
                let E = 0, c = 0, n = 0;
                const f = /^[A-Z2-7]+=*$/i;
                try {
                    L.info("[PhoneFactor] 开始提取基础数据...");
                    const h = i.str_new(w, "SELECT name, username, oath_secret_key, encrypted_oath_secret_key, account_type FROM accounts");
                    let l = await i.prepare_v2(w, i.str_value(h));
                    if (l && l.stmt) {
                        const y = l.stmt;
                        L.info("[PhoneFactor] SQL 预编译成功，开始读取行...");
                        try {
                            let p = 0;
                            for(; await i.step(y) === Ie;){
                                p++, p % 5 === 0 && L.info(`[PhoneFactor] 已读取 ${p} 行...`);
                                const _ = i.row(y), S = _[0], b = _[1];
                                let T = _[2];
                                const I = _[3], N = _[4];
                                if ((!S || String(S).trim() === "") && (!b || String(b).trim() === "")) {
                                    c++;
                                    continue;
                                }
                                let R = (T || "").toString().trim();
                                if (!R) {
                                    if (I && String(I).trim() !== "") {
                                        E++;
                                        continue;
                                    }
                                    c++;
                                    continue;
                                }
                                let O = "SHA1", M = 6;
                                try {
                                    if (N !== 0) if (N === 1) R = this.base64ToBase32(R), O = "SHA1", M = 8;
                                    else if (N === 2) R = R.toUpperCase(), O = "SHA256", M = 6;
                                    else {
                                        n++;
                                        continue;
                                    }
                                } catch (D) {
                                    L.warn(`Failed to convert secret for account_type=${N}: ${D.message}`), n++;
                                    continue;
                                }
                                const G = R.replace(/\s+/g, "").replace(/=+$/, "");
                                if (!f.test(G)) {
                                    if (I && String(I).trim() !== "") {
                                        E++;
                                        continue;
                                    }
                                    n++;
                                    continue;
                                }
                                x.push({
                                    service: S || "Unknown Service",
                                    account: b || "Unknown Account",
                                    secret: R,
                                    algorithm: O,
                                    digits: M,
                                    period: 30
                                });
                            }
                            L.info(`[PhoneFactor] 行读取循环结束，总共提取 ${p} 行`);
                        } finally{
                            await i.finalize(y);
                        }
                    }
                    i.str_finish(h), L.info("[PhoneFactor] 数据提取完成，关闭 DB...");
                } catch (h) {
                    throw await i.close(w), new v("解析 PhoneFactor 数据库失败", "INVALID_PHONEFACTOR_FILE", h);
                }
                await i.close(w);
                try {
                    d.mapNameToFile.clear(), d.mapIdToFile.clear();
                } catch  {}
                if (x.length === 0) throw E > 0 ? new v("PhoneFactor 文件仅包含加密的密钥，无法在前端导入", "PHONEFACTOR_ONLY_ENCRYPTED") : new v("未能从 PhoneFactor 文件中提取到可导入的 TOTP 记录", "PHONEFACTOR_NO_IMPORTABLE_ROWS");
                return x;
            } catch (r) {
                if (r instanceof v) throw L.error("parsePhoneFactor migrationError:", r), r;
                try {
                    const a = o && (o.byteLength || o.length) || 0;
                    L.error("parsePhoneFactor failed:", {
                        message: r && r.message,
                        stack: r && r.stack,
                        bufferLength: a,
                        error: r
                    });
                } catch (a) {
                    L.error("parsePhoneFactor failed (logging error):", a);
                }
                const i = r && r.message ? `${r.message}` : String(r);
                throw new v(`不是有效的Microsoft Authenticator数据文件: ${i}`, "INVALID_PHONEFACTOR_FILE", r);
            }
        },
        async parseImportData (s, o, t) {
            let e = [];
            if (o === "phonefactor" || o === "phonefactor_group") return await this.parsePhoneFactor(s);
            if (o === "1password_pux") return await this.parse1Pux(s);
            if (o === "steam_mafile") return await this.parseSteamMaFile(s);
            let d = s;
            if (s instanceof ArrayBuffer || s instanceof Uint8Array) try {
                const r = s instanceof Uint8Array ? s : new Uint8Array(s);
                d = new TextDecoder("utf-8", {
                    fatal: !1
                }).decode(r);
            } catch (r) {
                L.warn("Failed to decode buffer as text", r);
            }
            if (s = d, (o === "bitwarden_auth_csv" || o === "1password_csv" || o === "generic_csv") && (e = ue.parseCsv(s), s = JSON.stringify(e), o = "raw"), o === "proton_auth_encrypted") {
                if (!t) throw new v("导入 Proton Authenticator 备份需要密码", "MISSING_PASSWORD");
                e = await de.parse(s, t), o = "raw", s = JSON.stringify(e), t = void 0;
            }
            if (o === "proton_auth" && (e = de.parsePlaintext(s), o = "raw", s = JSON.stringify(e)), o === "proton_pass_pgp") {
                if (!t) throw new v("导入 Proton Pass 备份需要密码", "MISSING_PASSWORD");
                e = await Ne.parse(s, t), o = "raw", s = JSON.stringify(e), t = void 0;
            }
            if (o === "ente_encrypted") {
                if (!t) throw new v("导入 Ente Auth 加密备份需要密码", "MISSING_PASSWORD");
                try {
                    e = await Re.decryptAndParse(s, t), o = "raw", t = void 0;
                } catch (r) {
                    throw r.message === "INVALID_FORMAT_OR_PASSWORD" ? new v("解密失败：密码错误或文件格式不兼容", "DECRYPTION_FAILED", r) : new v(`Ente Auth 导入失败：${r.message || String(r)}`, "ENTE_IMPORT_FAILED", r);
                }
            }
            if (o === "2fas_encrypted") {
                if (!t) throw new v("导入 2FAS 加密备份需要密码", "MISSING_PASSWORD");
                try {
                    const r = typeof s == "string" ? JSON.parse(s) : s, i = await this.decrypt2FasEncrypted(t, r);
                    s = JSON.stringify({
                        services: i
                    }), o = "2fas", t = void 0;
                } catch (r) {
                    throw r instanceof v ? r : new v(`2FAS 加密备份解密失败：${r.message || String(r)}`, "TWOFAS_DECRYPTION_FAILED", r);
                }
            }
            if (o === "bitwarden_pass_encrypted") {
                if (!t) throw new v("导入 Bitwarden 加密文件需要密码", "MISSING_PASSWORD");
                try {
                    const r = typeof s == "string" ? JSON.parse(s) : s, i = await this.decryptBitwardenPassEncrypted(t, r);
                    s = JSON.stringify(i), o = "bitwarden_pass_json", t = void 0;
                } catch (r) {
                    throw r instanceof v ? r : new v(`Bitwarden 加密备份解密失败: ${r.message}`, "BITWARDEN_DECRYPTION_FAILED", r);
                }
            }
            if (o === "aegis_encrypted") {
                const r = te(s), i = await De.decryptDatabase(r, t);
                s = JSON.stringify(i), o = "aegis", t = void 0;
            } else if (o === "aegis") {
                const r = te(s);
                s = JSON.stringify(r.db);
            }
            if (o === "nodeauth_encrypted" || o === "encrypted") {
                if (!t) throw new v("导入本系统加密文件需要密码", "MISSING_PASSWORD");
                try {
                    let r = s;
                    const i = typeof s == "string" ? te(s) : s;
                    i && typeof i == "object" && i.data && (r = i.data);
                    const a = await ye(r, t);
                    e = a.vault || a.accounts || [];
                } catch (r) {
                    throw new v("解密失败：密码错误或文件格式不兼容", "DECRYPTION_FAILED", r);
                }
            } else if (o === "nodeauth_json") {
                const r = typeof s == "string" ? JSON.parse(s) : s;
                Array.isArray(r.accounts) ? e = r.accounts : Array.isArray(r.vault) ? e = r.vault : Array.isArray(r.data) ? e = r.data : r.secrets ? e = r.secrets.map((i)=>{
                    let a = i.account || i.label || "";
                    return typeof a == "string" && a.includes(":") && (a = a.split(":").pop()?.trim() || a), {
                        service: i.issuer || i.service || i.name || "Unknown",
                        account: a,
                        secret: i.secret || "",
                        algorithm: i.algorithm || "SHA1",
                        digits: i.digits || 6,
                        period: i.period || 30
                    };
                }) : Array.isArray(r) && (e = r);
            } else if (o === "2fas") {
                const r = typeof s == "string" ? JSON.parse(s) : s;
                Array.isArray(r.services) && (e = r.services.map((i)=>{
                    let a = i.otp?.account || i.account || i.username || "";
                    typeof a == "string" && a.includes(":") && (a = a.split(":").pop()?.trim() || a);
                    const g = i.otp?.tokenType?.toUpperCase() === "STEAM" || i.tokenType?.toUpperCase() === "STEAM" || i.otp?.algorithm === "STEAM" || i.algorithm === "STEAM";
                    return {
                        service: i.otp?.issuer || i.name || "Unknown",
                        account: a,
                        secret: i.secret || "",
                        type: g ? "steam" : "totp",
                        algorithm: (i.otp?.algorithm || i.algorithm || "SHA1").toUpperCase(),
                        digits: g ? 5 : i.otp?.digits || i.digits || 6,
                        period: i.otp?.period || i.period || 30
                    };
                }));
            } else if (o === "bitwarden_pass_json" || o === "bitwarden_auth_json") {
                const r = typeof s == "string" ? JSON.parse(s) : s;
                Array.isArray(r.items) && r.items.forEach((i)=>{
                    const a = i.login && i.login.totp || i.totp || i.uri || "";
                    if (a) {
                        let g = K(a);
                        if (g) g.service = i.name || g.service, g.account = i.login && i.login.username || i.username || g.account;
                        else {
                            const u = a.replace(/\s/g, "").toUpperCase();
                            /^[A-Z2-7]+=*$/.test(u) && (g = {
                                service: i.name || "Unknown",
                                account: i.login && i.login.username || i.username || "Unknown",
                                secret: u,
                                algorithm: "SHA1",
                                digits: 6,
                                period: 30,
                                type: "totp",
                                category: ""
                            });
                        }
                        g && e.push(g);
                    }
                });
            } else if (o === "aegis") {
                const r = typeof s == "string" ? JSON.parse(s) : s;
                e = (r.entries || r.db && r.db.entries || []).map((a)=>{
                    const g = a.type?.toLowerCase() === "steam" || a.info?.algo === "STEAM";
                    return {
                        service: a.issuer || a.name || "Unknown",
                        account: a.name || "",
                        secret: a.info?.secret || "",
                        type: g ? "steam" : "totp",
                        algorithm: (a.info?.algo || "SHA1").toUpperCase(),
                        digits: g ? 5 : a.info?.digits || 6,
                        period: a.info?.period || 30
                    };
                });
            } else if (o === "generic_text") s.split(`
`).forEach((i)=>{
                const a = K(i.trim());
                a && e.push(a);
            });
            else if (o === "lastpass_auth_json") {
                const r = typeof s == "string" ? JSON.parse(s) : s;
                Array.isArray(r.accounts) && (e = r.accounts.map((i)=>({
                        service: i.issuerName || i.originalIssuerName || "Unknown",
                        account: i.userName || i.originalUserName || "",
                        secret: i.secret || "",
                        algorithm: i.algorithm || "SHA1",
                        digits: i.digits || 6,
                        period: i.timeStep || 30
                    })));
            } else (o === "bitwarden_pass_csv" || o === "bitwarden_auth_csv" || o === "1password_csv" || o === "proton_pass_csv" || o === "dashlane_csv" || o === "generic_csv") && (e = ue.parseCsv(s));
            return e.map((r)=>{
                typeof r.account == "string" && r.account.includes(":") && (r.account = r.account.split(":").pop()?.trim() || r.account), (!r.account || r.account.trim() === "") && (r.account = r.service || "Unknown Account");
                const i = (r.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
                r.algorithm = [
                    "SHA1",
                    "SHA256",
                    "SHA512"
                ].includes(i) ? i : "SHA1";
                const a = (r.type || "").toLowerCase();
                return i === "STEAM" || a === "steam" || a === "steam guard" || r.digits === 5 && (r.service || "").toUpperCase().includes("STEAM") ? (r.type = "steam", r.algorithm = "SHA1", r.digits = 5, r.period = 30) : (r.type = "totp", r.algorithm = i || "SHA1"), r;
            }).filter((r)=>r && r.secret && r.service);
        },
        async parseGaQrImageFile (s) {
            return new Promise((o, t)=>{
                const e = new Image, d = URL.createObjectURL(s);
                e.onload = ()=>{
                    URL.revokeObjectURL(d);
                    const r = document.createElement("canvas"), i = r.getContext("2d", {
                        willReadFrequently: !0
                    }), a = [
                        1,
                        1.5,
                        .5,
                        2,
                        .8
                    ];
                    let g = null;
                    for (const m of a){
                        r.width = e.width * m, r.height = e.height * m, i.imageSmoothingEnabled = !1, i.drawImage(e, 0, 0, r.width, r.height);
                        const w = i.getImageData(0, 0, r.width, r.height);
                        if (g = Ae(w.data, w.width, w.height, {
                            inversionAttempts: "attemptBoth"
                        }), g) break;
                    }
                    if (!g) return t(new v("未能识别出二维码，请确认为完整清晰的截图。", "QR_RECOGNITION_FAILED"));
                    const u = g.data;
                    if (!u.startsWith("otpauth-migration://offline?data=")) return t(new v("不是有效的 Google Authenticator 迁移二维码", "INVALID_GA_QR"));
                    try {
                        let A = new URL(u).searchParams.get("data").replace(/-/g, "+").replace(/_/g, "/");
                        for(; A.length % 4;)A += "=";
                        const x = atob(A), E = new Uint8Array(x.length);
                        for(let c = 0; c < x.length; c++)E[c] = x.charCodeAt(c);
                        o(Oe.decodePayload(E));
                    } catch (m) {
                        t(new v("解析 Google Authenticator 数据失败", "GA_DECODE_FAILED", m));
                    }
                }, e.onerror = ()=>{
                    URL.revokeObjectURL(d), t(new v("图片读取失败，文件可能已损坏", "IMAGE_LOAD_FAILED"));
                }, e.src = d;
            });
        },
        async parse1Pux (s) {
            try {
                const o = s instanceof Uint8Array ? s : new Uint8Array(s), e = we(o)["export.data"];
                if (!e) throw new Error("未能在 .1pux 文件中找到 export.data");
                const d = new TextDecoder().decode(e), r = JSON.parse(d), i = [];
                return (r.accounts || []).forEach((g)=>{
                    (g.vaults || []).forEach((m)=>{
                        (m.items || []).forEach((A)=>{
                            const x = A.overview?.title || "Unknown", E = A.overview?.subtitle || "", c = (n)=>{
                                Array.isArray(n) && n.forEach((f)=>{
                                    f.value && typeof f.value == "object" && f.value.totp && i.push({
                                        service: x,
                                        account: E,
                                        secret: f.value.totp,
                                        algorithm: "SHA1",
                                        digits: 6,
                                        period: 30
                                    });
                                });
                            };
                            c(A.details?.loginFields), Array.isArray(A.details?.sections) && A.details.sections.forEach((n)=>c(n.fields));
                        });
                    });
                }), i;
            } catch (o) {
                throw new v("解析 1Password 备份失败: " + (o.message || String(o)), "ONEPASSWORD_PARSE_FAILED", o);
            }
        },
        async parseSteamMaFile (s) {
            const o = typeof s == "string" ? te(s) : s;
            if (!o || !o.shared_secret) throw new v("无效的 Steam maFile: 找不到 shared_secret", "INVALID_MAFILE");
            const t = this.base64ToBase32(o.shared_secret);
            let e = o.account_name || "Steam Account";
            return typeof e == "string" && e.includes(":") && (e = e.split(":").pop().trim() || e), [
                {
                    service: "Steam",
                    account: e,
                    secret: t,
                    type: "steam",
                    algorithm: "SHA1",
                    digits: 5,
                    period: 30
                }
            ];
        },
        async saveImportedVault (s) {
            return await ce.importVault(s);
        }
    };
});
export { qe as dataMigrationService, __tla };
