const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C8oaAiWk.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-CVRB8fAt.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as B, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { n as J, o as I, l as F, r as p, b as j, p as S, u as z, s as $, g as K, q as v, a as R, __tla as __tla_1 } from "./index-C8oaAiWk.js";
import { l as q, __tla as __tla_2 } from "./resourceRegistry-9eHlhal2.js";
import { f as Z, e as P } from "./vue-core-Daban9YF.js";
let Q, pt, ut, ft, ht, it, lt, ct, dt, G, yt, gt, X, tt, et, rt;
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
    class g extends Error {
        constructor(n, r = "VAULT_ERROR", e = null){
            super(n), this.name = "vaultError", this.code = r, this.details = e, Error.captureStackTrace && Error.captureStackTrace(this, g);
        }
    }
    const x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    Q = function(t) {
        let n = 0, r = 0, e = 0;
        const c = t.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), s = new Uint8Array(Math.ceil(c.length * 5 / 8));
        for(let o = 0; o < c.length; o++){
            const a = x.indexOf(c[o]);
            a !== -1 && (r = r << 5 | a, n += 5, n >= 8 && (s[e++] = r >>> n - 8 & 255, n -= 8));
        }
        return s.slice(0, e);
    };
    it = function(t) {
        let n = 0, r = 0, e = "";
        const c = new Uint8Array(t);
        for(let s = 0; s < c.length; s++)for(r = r << 8 | c[s], n += 8; n >= 5;)e += x[r >>> n - 5 & 31], n -= 5;
        return n > 0 && (e += x[r << 5 - n & 31]), e;
    };
    ct = function(t) {
        const n = t.replace(/[^0-9a-fA-F]/g, "");
        if (n.length % 2 !== 0) return new Uint8Array(0);
        const r = new Uint8Array(n.length / 2);
        for(let e = 0; e < n.length; e += 2)r[e / 2] = parseInt(n.substr(e, 2), 16);
        return r;
    };
    ut = function(t) {
        return Array.from(new Uint8Array(t)).map((n)=>n.toString(16).padStart(2, "0")).join("");
    };
    lt = function(t) {
        const n = new Uint8Array(t.length);
        for(let r = 0; r < t.length; r++)n[r] = t.charCodeAt(r);
        return n;
    };
    ft = function(t) {
        return String.fromCharCode.apply(null, new Uint8Array(t));
    };
    dt = function(t) {
        try {
            const n = atob(t.trim()), r = new Uint8Array(n.length);
            for(let e = 0; e < n.length; e++)r[e] = n.charCodeAt(e);
            return r;
        } catch  {
            return new Uint8Array(0);
        }
    };
    ht = function(t) {
        const n = new Uint8Array(t);
        let r = "";
        for(let e = 0; e < n.byteLength; e++)r += String.fromCharCode(n[e]);
        return btoa(r);
    };
    G = function() {
        const t = localStorage.getItem("app_time_offset"), n = t ? parseInt(t, 10) : 0;
        return Date.now() + n;
    };
    async function W(t, n = 30, r = 6, e = "SHA-1", c = 0) {
        if (!t) return "------";
        try {
            const s = Q(t);
            if (s.length === 0) return "------";
            const o = G() / 1e3, a = Math.floor(o / n) + c, u = new ArrayBuffer(8);
            new DataView(u).setBigUint64(0, BigInt(a), !1);
            const f = {
                name: "HMAC",
                hash: e.includes("-") ? e : e.replace("SHA", "SHA-")
            };
            let d;
            if (J("using hash-wasm fallback for TOTP generation.")) {
                const A = await q("hash-wasm"), { createHMAC: b, createSHA1: O, createSHA256: U, createSHA512: w } = A?.default || A;
                let C;
                f.hash === "SHA-256" ? C = U() : f.hash === "SHA-512" ? C = w() : C = O();
                const H = await b(C, s);
                H.init(), H.update(new Uint8Array(u));
                const M = H.digest("hex"), k = new Uint8Array(M.length / 2);
                for(let E = 0; E < M.length; E += 2)k[E / 2] = parseInt(M.substring(E, E + 2), 16);
                d = k.buffer;
            } else {
                const A = await I.subtle.importKey("raw", s, f, !1, [
                    "sign"
                ]);
                d = await I.subtle.sign("HMAC", A, u);
            }
            const i = new DataView(d), h = i.getUint8(d.byteLength - 1) & 15;
            return (((i.getUint8(h) & 127) << 24 | (i.getUint8(h + 1) & 255) << 16 | (i.getUint8(h + 2) & 255) << 8 | i.getUint8(h + 3) & 255) % Math.pow(10, r)).toString().padStart(r, "0");
        } catch (s) {
            return F.error("TOTP Error", s), "ERROR";
        }
    }
    const N = "23456789BCDFGHJKMNPQRTVWXY";
    async function Y(t, n = 30, r = 0) {
        if (!t) return "-----";
        try {
            const e = Q(t);
            if (e.length === 0) return "-----";
            const c = G() / 1e3, s = Math.floor(c / n) + r, o = new ArrayBuffer(8);
            new DataView(o).setBigUint64(0, BigInt(s), !1);
            const u = {
                name: "HMAC",
                hash: "SHA-1"
            };
            let l;
            if (J("using hash-wasm fallback for Steam TOTP generation.")) {
                const y = await q("hash-wasm"), { createHMAC: m, createSHA1: A } = y?.default || y, b = await m(A(), e);
                b.init(), b.update(new Uint8Array(o));
                const O = b.digest("hex"), U = new Uint8Array(O.length / 2);
                for(let w = 0; w < O.length; w += 2)U[w / 2] = parseInt(O.substring(w, w + 2), 16);
                l = U.buffer;
            } else {
                const y = await I.subtle.importKey("raw", e, u, !1, [
                    "sign"
                ]);
                l = await I.subtle.sign("HMAC", y, o);
            }
            const f = new DataView(l), d = f.getUint8(l.byteLength - 1) & 15;
            let i = (f.getUint8(d) & 127) << 24 | (f.getUint8(d + 1) & 255) << 16 | (f.getUint8(d + 2) & 255) << 8 | f.getUint8(d + 3) & 255, h = "";
            for(let y = 0; y < 5; y++)h += N.charAt(i % N.length), i = Math.floor(i / N.length);
            return h;
        } catch (e) {
            return F.error("Steam TOTP Error", e), "ERROR";
        }
    }
    yt = async function(t, n = 30, r = 6, e = "SHA1", c = "totp", s = 0) {
        return c === "steam" ? Y(t, n, s) : W(t, n, r, e, s);
    };
    X = function(t) {
        try {
            if (!t) return null;
            if (t.startsWith("steam://")) {
                const d = t.replace("steam://", "").replace(/[\s=]/g, "").toUpperCase();
                return d ? {
                    service: "Steam",
                    account: "Steam Guard",
                    secret: d,
                    type: "steam",
                    digits: 5,
                    period: 30,
                    algorithm: "SHA1",
                    category: ""
                } : null;
            }
            const n = new URL(t);
            if (n.protocol !== "otpauth:") return null;
            const r = n.searchParams, e = r.get("secret");
            if (!e) return null;
            const c = decodeURIComponent(n.pathname.replace(/^\//, ""));
            let s = r.get("issuer") || "", o = c;
            if (c.includes(":")) {
                const d = c.indexOf(":"), i = c.substring(0, d).trim(), h = c.substring(d + 1).trim();
                s || (s = i), o = h;
            }
            const a = n.host.toLowerCase() === "steam" || r.get("algorithm")?.toUpperCase() === "STEAM" || r.get("tokenType")?.toUpperCase() === "STEAM" || r.get("issuer")?.toUpperCase() === "STEAM" && r.get("digits") === "5";
            let u = (r.get("algorithm") || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(u) || (u = "SHA1");
            let l = parseInt(r.get("digits") || (a ? "5" : "6"), 10);
            isNaN(l) && (l = a ? 5 : 6);
            let f = parseInt(r.get("period") || "30", 10);
            return (isNaN(f) || f <= 0) && (f = 30), {
                service: s || "Unknown",
                account: o || "Unknown",
                secret: e.replace(/[\s=]/g, "").toUpperCase(),
                type: a ? "steam" : "totp",
                digits: a ? 5 : l,
                period: f,
                algorithm: a ? "SHA1" : u,
                category: ""
            };
        } catch  {
            return null;
        }
    };
    pt = function(t) {
        const { service: n, account: r, secret: e, algorithm: c = "SHA1", digits: s = 6, period: o = 30, type: a = "totp" } = t, u = encodeURIComponent(`${n}:${r}`), l = encodeURIComponent(n);
        return a === "steam" ? `otpauth://steam/${u}?secret=${e}&issuer=${l}&algorithm=SHA1&digits=5` : `otpauth://totp/${u}?secret=${e}&issuer=${l}&algorithm=${c}&digits=${s}&period=${o}`;
    };
    let L, _, D, V;
    tt = {
        async getTrashList () {
            const t = await p("/api/vault/trash");
            try {
                const { useLayoutStore: n } = await B(async ()=>{
                    const { useLayoutStore: s } = await import("./index-C8oaAiWk.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((o)=>o.x);
                    return {
                        useLayoutStore: s
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), e = n().appTrashRetention;
                let c = t.vault || t.data || (Array.isArray(t) ? t : []);
                if (e > 0 && c.length > 0) {
                    const s = Date.now(), o = e * 24 * 60 * 60 * 1e3, a = s - o, u = c.filter((l)=>l.deletedAt && l.deletedAt < a);
                    if (u.length > 0) {
                        const l = u.map((f)=>this.hardDelete(f.id));
                        Promise.allSettled(l).catch(console.warn), c = c.filter((f)=>!f.deletedAt || f.deletedAt >= a), t.vault = c, t.data && Array.isArray(t.data) && (t.data = c);
                    }
                }
            } catch (n) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", n);
            }
            return t;
        },
        async moveToTrash (t) {
            return await p(`/api/vault/${t}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (t) {
            return await p(`/api/vault/${t}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (t) {
            return await p("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: t
                })
            });
        },
        async hardDelete (t) {
            return await p(`/api/vault/${t}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await p("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    L = P([]);
    _ = P(0);
    D = P(!1);
    V = P(null);
    typeof window < "u" && K("vault:meta:trash_count").then((t)=>{
        typeof t == "number" && (_.value = t);
    }).catch(()=>{});
    et = function() {
        const t = j(), n = S(), r = z(), e = async ()=>{
            if (!(t.isLocked || n.isOffline || !r.appTrashMode) && !D.value) {
                D.value = !0, V.value = null;
                try {
                    const o = await tt.getTrashList(), a = o.vault || o.data || (Array.isArray(o) ? o : []);
                    L.value = a, _.value = a.length, $("vault:meta:trash_count", a.length).catch(()=>{});
                } catch (o) {
                    V.value = o, F.error("[useTrashList] fetchTrash failed:", o);
                } finally{
                    D.value = !1;
                }
            }
        };
        return Z([
            ()=>t.isInitialized,
            ()=>t.isLocked,
            ()=>n.isOffline,
            ()=>r.appTrashMode
        ], ([o, a, u, l])=>{
            if (o) {
                if (a || u || !l) {
                    L.value = [];
                    return;
                }
                e();
            }
        }, {
            immediate: !0
        }), {
            trashVault: L,
            trashCount: _,
            isFetchingTrash: D,
            trashError: V,
            fetchTrash: e,
            filteredTrash: (o = "")=>{
                if (!o) return L.value;
                const a = o.toLowerCase();
                return L.value.filter((u)=>u.service?.toLowerCase().includes(a) || u.account?.toLowerCase().includes(a));
            },
            updateTrashMetadata: (o, a = void 0)=>{
                a !== void 0 ? _.value = a : _.value = Math.max(0, _.value + o), $("vault:meta:trash_count", _.value).catch(()=>{});
            }
        };
    };
    let T;
    T = (t)=>t.isOffline || t.name === "TypeError" || t.message?.toLowerCase().includes("fetch") || t.message?.toLowerCase().includes("network") || typeof navigator < "u" && !navigator.onLine;
    rt = {
        async getVault ({ page: t = 1, limit: n = 12, search: r = "", category: e = "" }) {
            if (S().isManualOffline) try {
                const o = await R().getData();
                let a = o?.vault || [];
                if (r && r.trim()) {
                    const i = r.trim().toLowerCase();
                    a = a.filter((h)=>h.service?.toLowerCase().includes(i) || h.account?.toLowerCase().includes(i));
                }
                e && e !== "____UNCATEGORIZED____" ? a = a.filter((i)=>(i.category || "") === e) : e === "____UNCATEGORIZED____" && (a = a.filter((i)=>!i.category || i.category === ""));
                const u = a.length, l = o?.vault || [], f = {};
                l.forEach((i)=>{
                    const h = i.category || "";
                    f[h] = (f[h] || 0) + 1;
                });
                const d = Object.entries(f).map(([i, h])=>({
                        category: i,
                        count: h
                    }));
                return {
                    success: !0,
                    vault: a,
                    total: u,
                    categoryStats: d,
                    pagination: {
                        page: 1,
                        limit: u || 1,
                        totalItems: u,
                        totalPages: 1
                    }
                };
            } catch (s) {
                throw console.error("[VaultService] Offline getVault failed:", s), s;
            }
            try {
                const s = new URLSearchParams({
                    page: t,
                    limit: n,
                    search: r,
                    category: e
                });
                return await p(`/api/vault?${s.toString()}`);
            } catch (s) {
                throw new g("Failed to fetch vault list", "VAULT_FETCH_FAILED", s);
            }
        },
        async createAccount (t) {
            const n = async ()=>{
                const r = R(), e = v(), s = (await r.getData())?.vault || [], o = (l, f)=>`${(l || "").trim().toLowerCase()}:${(f || "").trim().toLowerCase()}`, a = o(t.service, t.account);
                if (s.some((l)=>o(l.service, l.account) === a)) return console.warn("[VaultService] Account already exists locally, skipping duplicate create task"), {
                    success: !0,
                    alreadyExists: !0
                };
                const u = `tmp_${Date.now()}`;
                return e.enqueueAction("create", u, t), {
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
                return S().isOffline ? n() : await p("/api/vault", {
                    method: "POST",
                    body: JSON.stringify(t)
                });
            } catch (r) {
                if (T(r)) return console.warn("[VaultService] Network error, falling back to offline queue", r), n();
                throw new g("Failed to create account", "ACCOUNT_CREATE_FAILED", r);
            }
        },
        async updateAccount (t, n) {
            const r = ()=>(v().enqueueAction("update", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? r() : await p(`/api/vault/${t}`, {
                    method: "PUT",
                    body: JSON.stringify(n)
                });
            } catch (e) {
                if (T(e)) return r();
                throw new g("Failed to update account", "ACCOUNT_UPDATE_FAILED", e);
            }
        },
        async deleteAccount (t, n = {}) {
            const r = ()=>(v().enqueueAction("delete", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? r() : await p(`/api/vault/${t}`, {
                    method: "DELETE"
                });
            } catch (e) {
                const c = e.details?.statusCode || e.statusCode, s = e.details?.message || e.message;
                if (c === 404 || s === "account_not_found") return console.warn("[VaultService] Account already deleted on server, treating as success:", t), {
                    success: !0
                };
                if (T(e)) return r();
                throw new g("Failed to delete account", "ACCOUNT_DELETE_FAILED", e);
            }
        },
        async batchDelete (t) {
            const n = ()=>{
                const r = v();
                for (const e of t)r.enqueueAction("delete", e);
                return {
                    success: !0,
                    pending: !0,
                    deleted: t.length
                };
            };
            try {
                return S().isOffline ? n() : await p("/api/vault/batch-delete", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (r) {
                if (T(r)) return n();
                throw new g("Failed to batch delete accounts", "ACCOUNTS_BATCH_DELETE_FAILED", r);
            }
        },
        async reorder (t) {
            const n = ()=>(v().enqueueAction("reorder", "global_order", {
                    ids: t
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? n() : await p("/api/vault/reorder", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (r) {
                if (T(r)) return n();
                throw new g("Failed to reorder accounts", "VAULT_REORDER_FAILED", r);
            }
        },
        async moveSortOrder (t, n) {
            const r = ()=>(v().enqueueAction("move-sort", t, {
                    sortOrder: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return S().isOffline ? r() : await p(`/api/vault/${t}/sort-order`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        sortOrder: n
                    })
                });
            } catch (e) {
                if (T(e)) return r();
                throw new g("Failed to move sort order", "VAULT_SORT_MOVE_FAILED", e);
            }
        },
        async addFromUri (t, n = "扫码添加") {
            const r = async ()=>{
                const e = X(t);
                if (!e) throw new Error("Invalid OTP URI");
                return e.category = n, await this.createAccount(e);
            };
            try {
                return S().isOffline ? await r() : await p("/api/vault/add-from-uri", {
                    method: "POST",
                    body: JSON.stringify({
                        uri: t,
                        category: n
                    })
                });
            } catch (e) {
                if (T(e)) return console.warn("[VaultService] Network error in addFromUri, falling back"), await r();
                throw new g("Failed to add account from URI", "ACCOUNT_ADD_URI_FAILED", e);
            }
        },
        async importVault (t, n = "raw") {
            const r = async ()=>{
                const e = R(), c = v(), o = (await e.getData())?.vault || [], a = (i, h)=>`${(i || "").trim().toLowerCase()}:${(h || "").trim().toLowerCase()}`, u = new Set(o.map((i)=>a(i.service, i.account)));
                let l = 0;
                const f = Array.isArray(t) ? t : typeof t == "string" ? JSON.parse(t) : [
                    t
                ], d = [];
                for (const i of f){
                    if (!i) continue;
                    const h = a(i.service, i.account);
                    if (u.has(h)) {
                        console.debug("[VaultService] Skipping duplicate import in sync queue:", h);
                        continue;
                    }
                    let y;
                    try {
                        y = JSON.parse(JSON.stringify(i));
                    } catch  {
                        console.warn("[importVault] Account not serializable, skipping:", i);
                        continue;
                    }
                    const m = y.id || Date.now().toString(36) + Math.random().toString(36).substr(2);
                    y.id = m, d.push({
                        type: "create",
                        id: m,
                        data: y
                    }), l++, u.add(h);
                }
                return d.length > 0 && await c.enqueueActions(d), {
                    success: !0,
                    count: l,
                    pending: !0
                };
            };
            try {
                return S().isOffline ? await r() : await p("/api/vault/import", {
                    method: "POST",
                    body: JSON.stringify({
                        type: n,
                        content: typeof t == "string" ? t : JSON.stringify(t)
                    })
                });
            } catch (e) {
                if (T(e)) return await r();
                throw new g("Failed to import vault data", "VAULT_IMPORT_FAILED", e);
            }
        },
        async syncOfflineActions () {
            const t = v();
            if (t.hasPendingChanges && !t.isSyncing) try {
                t.isSyncing = !0;
                const n = t.syncQueue.filter((a)=>a.type === "move-sort"), r = t.syncQueue.filter((a)=>a.type !== "move-sort"), e = await Promise.allSettled(n.map((a)=>p(`/api/vault/${a.id}/sort-order`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            sortOrder: a.data.sortOrder
                        })
                    }))), c = new Set(n.filter((a, u)=>e[u].status === "fulfilled").map((a)=>a.id));
                if (r.length === 0) return t.syncQueue = t.syncQueue.filter((a)=>!c.has(a.id)), await t.saveQueue(), {
                    success: !0
                };
                const s = r.map((a)=>({
                        id: a.id,
                        type: a.type,
                        data: {
                            ...a.data,
                            updatedAt: a.baselineUpdatedAt
                        }
                    })), o = await p("/api/vault/sync", {
                    method: "POST",
                    body: JSON.stringify({
                        actions: s
                    })
                });
                if (o.success && o.results) {
                    const a = o.results, u = [];
                    for(let d = 0; d < r.length; d++){
                        const i = r[d], h = a[d];
                        if (!h?.success) {
                            const y = h?.code || "error", m = h?.error || "", A = y === "conflict_detected" || m === "conflict_detected" || y === "409";
                            if (y === "404" || m === "account_not_found" || y === "account_not_found") continue;
                            if (A) {
                                u.push({
                                    ...i,
                                    status: "conflict"
                                });
                                const { useOfflineStore: O } = await B(async ()=>{
                                    const { useOfflineStore: w } = await import("./index-C8oaAiWk.js").then(async (m)=>{
                                        await m.__tla;
                                        return m;
                                    }).then((C)=>C.y);
                                    return {
                                        useOfflineStore: w
                                    };
                                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                                O().registerConflict(i.id);
                            } else u.push(i);
                        }
                    }
                    const l = t.syncQueue.filter((d)=>d.type === "move-sort" && !c.has(d.id));
                    t.syncQueue = [
                        ...u,
                        ...l
                    ], await t.saveQueue();
                    const { fetchTrash: f } = et();
                    f();
                }
                return o;
            } catch (n) {
                throw console.error("[Sync] Batch sync failed:", n), new g("Offline sync failed", "SYNC_FAILED", n);
            } finally{
                t.isSyncing = !1;
            }
        }
    };
    gt = Object.freeze(Object.defineProperty({
        __proto__: null,
        vaultService: rt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { Q as a, pt as b, ut as c, ft as d, ht as e, it as f, lt as g, ct as h, dt as i, G as j, yt as k, gt as l, X as p, tt as t, et as u, rt as v, __tla };
