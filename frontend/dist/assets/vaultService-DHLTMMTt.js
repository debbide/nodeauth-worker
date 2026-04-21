const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-A5gCNzyQ.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-CVRB8fAt.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as Q, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { n as x, o as H, l as D, r as y, b as z, p as S, u as G, s as q, g as K, q as b, a as N, __tla as __tla_1 } from "./index-A5gCNzyQ.js";
import { l as k, __tla as __tla_2 } from "./resourceRegistry-9eHlhal2.js";
import { f as W, e as M } from "./vue-core-Daban9YF.js";
let St, B, mt, dt, pt, gt, lt, ht, ft, yt, j, wt, At, tt, rt, nt, ot, at;
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
    })()
]).then(async ()=>{
    class w extends Error {
        constructor(n, e = "VAULT_ERROR", r = null){
            super(n), this.name = "vaultError", this.code = e, this.details = r, Error.captureStackTrace && Error.captureStackTrace(this, w);
        }
    }
    const F = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    B = function(t) {
        let n = 0, e = 0, r = 0;
        const s = t.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), a = new Uint8Array(Math.ceil(s.length * 5 / 8));
        for(let i = 0; i < s.length; i++){
            const o = F.indexOf(s[i]);
            o !== -1 && (e = e << 5 | o, n += 5, n >= 8 && (a[r++] = e >>> n - 8 & 255, n -= 8));
        }
        return a.slice(0, r);
    };
    lt = function(t) {
        let n = 0, e = 0, r = "";
        const s = new Uint8Array(t);
        for(let a = 0; a < s.length; a++)for(e = e << 8 | s[a], n += 8; n >= 5;)r += F[e >>> n - 5 & 31], n -= 5;
        return n > 0 && (r += F[e << 5 - n & 31]), r;
    };
    ft = function(t) {
        const n = t.replace(/[^0-9a-fA-F]/g, "");
        if (n.length % 2 !== 0) return new Uint8Array(0);
        const e = new Uint8Array(n.length / 2);
        for(let r = 0; r < n.length; r += 2)e[r / 2] = parseInt(n.substr(r, 2), 16);
        return e;
    };
    dt = function(t) {
        return Array.from(new Uint8Array(t)).map((n)=>n.toString(16).padStart(2, "0")).join("");
    };
    ht = function(t) {
        const n = new Uint8Array(t.length);
        for(let e = 0; e < t.length; e++)n[e] = t.charCodeAt(e);
        return n;
    };
    pt = function(t) {
        return String.fromCharCode.apply(null, new Uint8Array(t));
    };
    yt = function(t) {
        try {
            const n = atob(t.trim()), e = new Uint8Array(n.length);
            for(let r = 0; r < n.length; r++)e[r] = n.charCodeAt(r);
            return e;
        } catch  {
            return new Uint8Array(0);
        }
    };
    gt = function(t) {
        const n = new Uint8Array(t);
        let e = "";
        for(let r = 0; r < n.byteLength; r++)e += String.fromCharCode(n[r]);
        return btoa(e);
    };
    j = function() {
        const t = localStorage.getItem("app_time_offset"), n = t ? parseInt(t, 10) : 0;
        return Date.now() + n;
    };
    async function Z(t, n = 30, e = 6, r = "SHA-1", s = 0) {
        if (!t) return "------";
        try {
            const a = B(t);
            if (a.length === 0) return "------";
            const i = j() / 1e3, o = Math.floor(i / n) + s, u = new ArrayBuffer(8);
            new DataView(u).setBigUint64(0, BigInt(o), !1);
            const f = {
                name: "HMAC",
                hash: r.includes("-") ? r : r.replace("SHA", "SHA-")
            };
            let d;
            if (x("using hash-wasm fallback for TOTP generation.")) {
                const v = await k("hash-wasm"), { createHMAC: C, createSHA1: m, createSHA256: T, createSHA512: g } = v?.default || v;
                let O;
                f.hash === "SHA-256" ? O = T() : f.hash === "SHA-512" ? O = g() : O = m();
                const _ = await C(O, a);
                _.init(), _.update(new Uint8Array(u));
                const R = _.digest("hex"), J = new Uint8Array(R.length / 2);
                for(let L = 0; L < R.length; L += 2)J[L / 2] = parseInt(R.substring(L, L + 2), 16);
                d = J.buffer;
            } else {
                const v = await H.subtle.importKey("raw", a, f, !1, [
                    "sign"
                ]);
                d = await H.subtle.sign("HMAC", v, u);
            }
            const c = new DataView(d), h = c.getUint8(d.byteLength - 1) & 15;
            return (((c.getUint8(h) & 127) << 24 | (c.getUint8(h + 1) & 255) << 16 | (c.getUint8(h + 2) & 255) << 8 | c.getUint8(h + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (a) {
            return D.error("TOTP Error", a), "ERROR";
        }
    }
    const V = "23456789BCDFGHJKMNPQRTVWXY";
    async function X(t, n = 30, e = 0) {
        if (!t) return "-----";
        try {
            const r = B(t);
            if (r.length === 0) return "-----";
            const s = j() / 1e3, a = Math.floor(s / n) + e, i = new ArrayBuffer(8);
            new DataView(i).setBigUint64(0, BigInt(a), !1);
            const u = {
                name: "HMAC",
                hash: "SHA-1"
            };
            let l;
            if (x("using hash-wasm fallback for Steam TOTP generation.")) {
                const p = await k("hash-wasm"), { createHMAC: A, createSHA1: v } = p?.default || p, C = await A(v(), r);
                C.init(), C.update(new Uint8Array(i));
                const m = C.digest("hex"), T = new Uint8Array(m.length / 2);
                for(let g = 0; g < m.length; g += 2)T[g / 2] = parseInt(m.substring(g, g + 2), 16);
                l = T.buffer;
            } else {
                const p = await H.subtle.importKey("raw", r, u, !1, [
                    "sign"
                ]);
                l = await H.subtle.sign("HMAC", p, i);
            }
            const f = new DataView(l), d = f.getUint8(l.byteLength - 1) & 15;
            let c = (f.getUint8(d) & 127) << 24 | (f.getUint8(d + 1) & 255) << 16 | (f.getUint8(d + 2) & 255) << 8 | f.getUint8(d + 3) & 255, h = "";
            for(let p = 0; p < 5; p++)h += V.charAt(c % V.length), c = Math.floor(c / V.length);
            return h;
        } catch (r) {
            return D.error("Steam TOTP Error", r), "ERROR";
        }
    }
    async function Y(t, n = 0, e = 6, r = "SHA-1") {
        if (!t) return "------";
        try {
            const s = B(t);
            if (s.length === 0) return "------";
            const a = new ArrayBuffer(8);
            new DataView(a).setBigUint64(0, BigInt(n), !1);
            const o = {
                name: "HMAC",
                hash: r.includes("-") ? r : r.replace("SHA", "SHA-")
            };
            let u;
            if (x("using hash-wasm fallback for HOTP generation.")) {
                const h = await k("hash-wasm"), { createHMAC: p, createSHA1: A, createSHA256: v, createSHA512: C } = h?.default || h;
                let m;
                o.hash === "SHA-256" ? m = v() : o.hash === "SHA-512" ? m = C() : m = A();
                const T = await p(m, s);
                T.init(), T.update(new Uint8Array(a));
                const g = T.digest("hex"), O = new Uint8Array(g.length / 2);
                for(let _ = 0; _ < g.length; _ += 2)O[_ / 2] = parseInt(g.substring(_, _ + 2), 16);
                u = O.buffer;
            } else {
                const h = await H.subtle.importKey("raw", s, o, !1, [
                    "sign"
                ]);
                u = await H.subtle.sign("HMAC", h, a);
            }
            const l = new DataView(u), f = l.getUint8(u.byteLength - 1) & 15;
            return (((l.getUint8(f) & 127) << 24 | (l.getUint8(f + 1) & 255) << 16 | (l.getUint8(f + 2) & 255) << 8 | l.getUint8(f + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (s) {
            return D.error("HOTP Error", s), "ERROR";
        }
    }
    wt = async function(t, n = 30, e = 6, r = "SHA1", s = "totp", a = 0) {
        return s === "steam" ? X(t, n, a) : s === "hotp" ? Y(t, n, e, r) : Z(t, n, e, r, a);
    };
    tt = function(t = {}) {
        const n = et(t.type, t), e = {
            ...t,
            type: n
        };
        if (n === "steam") e.digits = 5, e.period = 30, e.algorithm = "SHA1";
        else {
            let r = (t.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(r) || (r = "SHA1"), e.algorithm = r;
            let s = parseInt(t.digits || "6", 10);
            (isNaN(s) || s <= 0) && (s = 6), e.digits = s;
            let a = parseInt(t.period || "30", 10);
            (isNaN(a) || a <= 0) && (a = 30), e.period = a;
        }
        return e.service = e.service || e.issuer || "Unknown", e.account = e.account || "Unknown", e.secret = (e.secret || "").replace(/[\s=]/g, "").toUpperCase(), e.counter = parseInt(e.counter || "0", 10), (isNaN(e.counter) || e.counter < 0) && (e.counter = 0), e.category = e.category || "", e;
    };
    function et(t, n = {}) {
        const e = (t || n.type || "").toLowerCase().trim(), r = (n.algorithm || "").toUpperCase(), s = (n.service || n.issuer || "").toUpperCase(), a = parseInt(n.digits || "0", 10);
        return e === "steam" || e === "steam guard" || r === "STEAM" || a === 5 && s.includes("STEAM") ? "steam" : e === "totp" ? "totp" : e === "hotp" || n.hasOwnProperty("counter") && n.counter !== null && n.counter !== void 0 ? "hotp" : "totp";
    }
    rt = function(t) {
        try {
            if (!t) return null;
            if (t.startsWith("steam://")) {
                const c = t.replace("steam://", "").replace(/[\s=]/g, "").toUpperCase();
                return c ? {
                    service: "Steam",
                    account: "Steam Guard",
                    secret: c,
                    type: "steam",
                    digits: 5,
                    period: 30,
                    algorithm: "SHA1",
                    counter: 0,
                    category: ""
                } : null;
            }
            const n = new URL(t);
            if (n.protocol !== "otpauth:") return null;
            let e = n.host || n.hostname;
            !e && n.pathname.startsWith("//") && (e = n.pathname.substring(2).split("/")[0]), e = (e || "").toLowerCase();
            const r = n.searchParams, s = r.get("secret");
            if (!s) return null;
            const a = decodeURIComponent(n.pathname.replace(/^\//, ""));
            let i = r.get("issuer") || "", o = a;
            if (a.includes(":")) {
                const c = a.indexOf(":"), h = a.substring(0, c).trim(), p = a.substring(c + 1).trim();
                i || (i = h), o = p;
            }
            let u = (r.get("algorithm") || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(u) || (u = "SHA1");
            const l = parseInt(r.get("digits") || "0", 10), f = parseInt(r.get("period") || "30", 10);
            let d = parseInt(r.get("counter") || "0", 10);
            return (isNaN(d) || d < 0) && (d = 0), tt({
                service: i,
                account: o,
                secret: s,
                type: e,
                digits: l,
                period: f,
                counter: d,
                algorithm: u
            });
        } catch  {
            return null;
        }
    };
    mt = function(t) {
        const { service: n, account: e, secret: r, algorithm: s = "SHA1", digits: a = 6, period: i = 30, type: o = "totp", counter: u = 0 } = t, l = encodeURIComponent(e ? `${n}:${e}` : n), f = encodeURIComponent(n);
        if (o === "hotp") {
            let d = `otpauth://hotp/${l}?secret=${r}&counter=${u}`;
            return n && (d += `&issuer=${f}`), s !== "SHA1" && (d += `&algorithm=${s}`), a !== 6 && (d += `&digits=${a}`), d;
        }
        return o === "steam" ? `otpauth://steam/${l}?secret=${r}&issuer=${f}&algorithm=SHA1&digits=5` : `otpauth://totp/${l}?secret=${r}&issuer=${f}&algorithm=${s}&digits=${a}&period=${i}`;
    };
    let I, E, P, $;
    St = {
        "2fas": [
            "totp",
            "hotp",
            "steam"
        ],
        aegis: [
            "totp",
            "hotp",
            "steam"
        ],
        google_auth: [
            "totp",
            "hotp"
        ],
        bitwarden_auth_json: [
            "totp",
            "steam"
        ],
        bitwarden_auth_csv: [
            "totp",
            "steam"
        ],
        proton_auth: [
            "totp",
            "steam"
        ],
        generic_json: [
            "totp",
            "hotp",
            "steam"
        ],
        generic_text: [
            "totp",
            "hotp",
            "steam"
        ],
        generic_csv: [
            "totp",
            "hotp",
            "steam"
        ],
        nodeauth_json: [
            "totp",
            "hotp",
            "steam"
        ],
        nodeauth_encrypted: [
            "totp",
            "hotp",
            "steam"
        ],
        encrypted: [
            "totp",
            "hotp",
            "steam"
        ]
    };
    nt = {
        async getTrashList () {
            const t = await y("/api/vault/trash");
            try {
                const { useLayoutStore: n } = await Q(async ()=>{
                    const { useLayoutStore: a } = await import("./index-A5gCNzyQ.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((i)=>i.x);
                    return {
                        useLayoutStore: a
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = n().appTrashRetention;
                let s = t.vault || t.data || (Array.isArray(t) ? t : []);
                if (r > 0 && s.length > 0) {
                    const a = Date.now(), i = r * 24 * 60 * 60 * 1e3, o = a - i, u = s.filter((l)=>l.deletedAt && l.deletedAt < o);
                    if (u.length > 0) {
                        const l = u.map((f)=>this.hardDelete(f.id));
                        Promise.allSettled(l).catch(console.warn), s = s.filter((f)=>!f.deletedAt || f.deletedAt >= o), t.vault = s, t.data && Array.isArray(t.data) && (t.data = s);
                    }
                }
            } catch (n) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", n);
            }
            return t;
        },
        async moveToTrash (t) {
            return await y(`/api/vault/${t}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (t) {
            return await y(`/api/vault/${t}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (t) {
            return await y("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: t
                })
            });
        },
        async hardDelete (t) {
            return await y(`/api/vault/${t}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await y("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    I = M([]);
    E = M(0);
    P = M(!1);
    $ = M(null);
    typeof window < "u" && K("vault:meta:trash_count").then((t)=>{
        typeof t == "number" && (E.value = t);
    }).catch(()=>{});
    ot = function() {
        const t = z(), n = S(), e = G(), r = async ()=>{
            if (!(t.isLocked || n.isOffline || !e.appTrashMode) && !P.value) {
                P.value = !0, $.value = null;
                try {
                    const i = await nt.getTrashList(), o = i.vault || i.data || (Array.isArray(i) ? i : []);
                    I.value = o, E.value = o.length, q("vault:meta:trash_count", o.length).catch(()=>{});
                } catch (i) {
                    $.value = i, D.error("[useTrashList] fetchTrash failed:", i);
                } finally{
                    P.value = !1;
                }
            }
        };
        return W([
            ()=>t.isInitialized,
            ()=>t.isLocked,
            ()=>n.isOffline,
            ()=>e.appTrashMode
        ], ([i, o, u, l])=>{
            if (i) {
                if (o || u || !l) {
                    I.value = [];
                    return;
                }
                r();
            }
        }, {
            immediate: !0
        }), {
            trashVault: I,
            trashCount: E,
            isFetchingTrash: P,
            trashError: $,
            fetchTrash: r,
            filteredTrash: (i = "")=>{
                if (!i) return I.value;
                const o = i.toLowerCase();
                return I.value.filter((u)=>u.service?.toLowerCase().includes(o) || u.account?.toLowerCase().includes(o));
            },
            updateTrashMetadata: (i, o = void 0)=>{
                o !== void 0 ? E.value = o : E.value = Math.max(0, E.value + i), q("vault:meta:trash_count", E.value).catch(()=>{});
            }
        };
    };
    let U;
    U = (t)=>t.isOffline || t.name === "TypeError" || t.message?.toLowerCase().includes("fetch") || t.message?.toLowerCase().includes("network") || typeof navigator < "u" && !navigator.onLine;
    at = {
        async getVault ({ page: t = 1, limit: n = 12, search: e = "", category: r = "" }) {
            if (S().isManualOffline) try {
                const i = await N().getData();
                let o = i?.vault || [];
                if (e && e.trim()) {
                    const c = e.trim().toLowerCase();
                    o = o.filter((h)=>h.service?.toLowerCase().includes(c) || h.account?.toLowerCase().includes(c));
                }
                r && r !== "____UNCATEGORIZED____" ? o = o.filter((c)=>(c.category || "") === r) : r === "____UNCATEGORIZED____" && (o = o.filter((c)=>!c.category || c.category === ""));
                const u = o.length, l = i?.vault || [], f = {};
                l.forEach((c)=>{
                    const h = c.category || "";
                    f[h] = (f[h] || 0) + 1;
                });
                const d = Object.entries(f).map(([c, h])=>({
                        category: c,
                        count: h
                    }));
                return {
                    success: !0,
                    vault: o,
                    total: u,
                    categoryStats: d,
                    pagination: {
                        page: 1,
                        limit: u || 1,
                        totalItems: u,
                        totalPages: 1
                    }
                };
            } catch (a) {
                throw console.error("[VaultService] Offline getVault failed:", a), a;
            }
            try {
                const a = new URLSearchParams({
                    page: t,
                    limit: n,
                    search: e,
                    category: r
                });
                return await y(`/api/vault?${a.toString()}`);
            } catch (a) {
                throw new w("Failed to fetch vault list", "VAULT_FETCH_FAILED", a);
            }
        },
        async createAccount (t) {
            const n = async ()=>{
                const e = N(), r = b(), a = (await e.getData())?.vault || [], i = (l, f)=>`${(l || "").trim().toLowerCase()}:${(f || "").trim().toLowerCase()}`, o = i(t.service, t.account);
                if (a.some((l)=>i(l.service, l.account) === o)) return console.warn("[VaultService] Account already exists locally, skipping duplicate create task"), {
                    success: !0,
                    alreadyExists: !0
                };
                const u = `tmp_${Date.now()}`;
                return r.enqueueAction("create", u, t), {
                    success: !0,
                    pending: !0,
                    item: {
                        ...t,
                        id: u,
                        pending: !0
                    }
                };
            };
            try {
                return S().isOffline ? n() : await y("/api/vault", {
                    method: "POST",
                    body: JSON.stringify(t)
                });
            } catch (e) {
                if (U(e)) return console.warn("[VaultService] Network error, falling back to offline queue", e), n();
                throw new w("Failed to create account", "ACCOUNT_CREATE_FAILED", e);
            }
        },
        async updateAccount (t, n) {
            const e = ()=>(b().enqueueAction("update", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? e() : await y(`/api/vault/${t}`, {
                    method: "PUT",
                    body: JSON.stringify(n)
                });
            } catch (r) {
                if (U(r)) return e();
                throw new w("Failed to update account", "ACCOUNT_UPDATE_FAILED", r);
            }
        },
        async incrementCounter (t, n) {
            const e = ()=>(b().enqueueAction("increment", t, {
                    updatedAt: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? e() : await y(`/api/vault/${t}/increment`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        updatedAt: n
                    })
                });
            } catch (r) {
                if (U(r)) return e();
                throw new w("Failed to increment counter", "ACCOUNT_INCREMENT_FAILED", r);
            }
        },
        async deleteAccount (t, n = {}) {
            const e = ()=>(b().enqueueAction("delete", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? e() : await y(`/api/vault/${t}`, {
                    method: "DELETE"
                });
            } catch (r) {
                const s = r.details?.statusCode || r.statusCode, a = r.details?.message || r.message;
                if (s === 404 || a === "account_not_found") return console.warn("[VaultService] Account already deleted on server, treating as success:", t), {
                    success: !0
                };
                if (U(r)) return e();
                throw new w("Failed to delete account", "ACCOUNT_DELETE_FAILED", r);
            }
        },
        async batchDelete (t) {
            const n = ()=>{
                const e = b();
                for (const r of t)e.enqueueAction("delete", r);
                return {
                    success: !0,
                    pending: !0,
                    deleted: t.length
                };
            };
            try {
                return S().isOffline ? n() : await y("/api/vault/batch-delete", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (U(e)) return n();
                throw new w("Failed to batch delete accounts", "ACCOUNTS_BATCH_DELETE_FAILED", e);
            }
        },
        async reorder (t) {
            const n = ()=>(b().enqueueAction("reorder", "global_order", {
                    ids: t
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? n() : await y("/api/vault/reorder", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (U(e)) return n();
                throw new w("Failed to reorder accounts", "VAULT_REORDER_FAILED", e);
            }
        },
        async moveSortOrder (t, n) {
            const e = ()=>(b().enqueueAction("move-sort", t, {
                    sortOrder: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? e() : await y(`/api/vault/${t}/sort-order`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        sortOrder: n
                    })
                });
            } catch (r) {
                if (U(r)) return e();
                throw new w("Failed to move sort order", "VAULT_SORT_MOVE_FAILED", r);
            }
        },
        async addFromUri (t, n = "扫码添加") {
            const e = async ()=>{
                const r = rt(t);
                if (!r) throw new Error("Invalid OTP URI");
                return r.category = n, await this.createAccount(r);
            };
            try {
                return S().isOffline ? await e() : await y("/api/vault/add-from-uri", {
                    method: "POST",
                    body: JSON.stringify({
                        uri: t,
                        category: n
                    })
                });
            } catch (r) {
                if (U(r)) return console.warn("[VaultService] Network error in addFromUri, falling back"), await e();
                throw new w("Failed to add account from URI", "ACCOUNT_ADD_URI_FAILED", r);
            }
        },
        async importVault (t, n = "raw") {
            const e = async ()=>{
                const r = N(), s = b(), i = (await r.getData())?.vault || [], o = (c, h)=>`${(c || "").trim().toLowerCase()}:${(h || "").trim().toLowerCase()}`, u = new Set(i.map((c)=>o(c.service, c.account)));
                let l = 0;
                const f = Array.isArray(t) ? t : typeof t == "string" ? JSON.parse(t) : [
                    t
                ], d = [];
                for (const c of f){
                    if (!c) continue;
                    const h = o(c.service, c.account);
                    if (u.has(h)) {
                        console.debug("[VaultService] Skipping duplicate import in sync queue:", h);
                        continue;
                    }
                    let p;
                    try {
                        p = JSON.parse(JSON.stringify(c));
                    } catch  {
                        console.warn("[importVault] Account not serializable, skipping:", c);
                        continue;
                    }
                    const A = p.id || Date.now().toString(36) + Math.random().toString(36).substr(2);
                    p.id = A, d.push({
                        type: "create",
                        id: A,
                        data: p
                    }), l++, u.add(h);
                }
                return d.length > 0 && await s.enqueueActions(d), {
                    success: !0,
                    count: l,
                    pending: !0
                };
            };
            try {
                return S().isOffline ? await e() : await y("/api/vault/import", {
                    method: "POST",
                    body: JSON.stringify({
                        type: n,
                        content: typeof t == "string" ? t : JSON.stringify(t)
                    })
                });
            } catch (r) {
                if (U(r)) return await e();
                throw new w("Failed to import vault data", "VAULT_IMPORT_FAILED", r);
            }
        },
        async syncOfflineActions () {
            const t = b();
            if (t.hasPendingChanges && !t.isSyncing) try {
                t.isSyncing = !0;
                const n = t.syncQueue.filter((o)=>o.type === "move-sort"), e = t.syncQueue.filter((o)=>o.type !== "move-sort"), r = await Promise.allSettled(n.map((o)=>y(`/api/vault/${o.id}/sort-order`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            sortOrder: o.data.sortOrder
                        })
                    }))), s = new Set(n.filter((o, u)=>r[u].status === "fulfilled").map((o)=>o.id));
                if (e.length === 0) return t.syncQueue = t.syncQueue.filter((o)=>!s.has(o.id)), await t.saveQueue(), {
                    success: !0
                };
                const a = e.map((o)=>({
                        id: o.id,
                        type: o.type,
                        data: {
                            ...o.data,
                            updatedAt: o.baselineUpdatedAt
                        }
                    })), i = await y("/api/vault/sync", {
                    method: "POST",
                    body: JSON.stringify({
                        actions: a
                    })
                });
                if (i.success && i.results) {
                    const o = i.results, u = [];
                    for(let d = 0; d < e.length; d++){
                        const c = e[d], h = o[d];
                        if (!h?.success) {
                            const p = h?.code || "error", A = h?.error || "", v = p === "conflict_detected" || A === "conflict_detected" || p === "409";
                            if (p === "404" || A === "account_not_found" || p === "account_not_found") continue;
                            if (v) {
                                u.push({
                                    ...c,
                                    status: "conflict"
                                });
                                const { useOfflineStore: m } = await Q(async ()=>{
                                    const { useOfflineStore: g } = await import("./index-A5gCNzyQ.js").then(async (m)=>{
                                        await m.__tla;
                                        return m;
                                    }).then((O)=>O.y);
                                    return {
                                        useOfflineStore: g
                                    };
                                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                                m().registerConflict(c.id);
                            } else u.push(c);
                        }
                    }
                    const l = t.syncQueue.filter((d)=>d.type === "move-sort" && !s.has(d.id));
                    t.syncQueue = [
                        ...u,
                        ...l
                    ], await t.saveQueue();
                    const { fetchTrash: f } = ot();
                    f();
                }
                return i;
            } catch (n) {
                throw console.error("[Sync] Batch sync failed:", n), new w("Offline sync failed", "SYNC_FAILED", n);
            } finally{
                t.isSyncing = !1;
            }
        }
    };
    At = Object.freeze(Object.defineProperty({
        __proto__: null,
        vaultService: at
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { St as O, B as a, mt as b, dt as c, pt as d, gt as e, lt as f, ht as g, ft as h, yt as i, j, wt as k, At as l, tt as n, rt as p, nt as t, ot as u, at as v, __tla };
