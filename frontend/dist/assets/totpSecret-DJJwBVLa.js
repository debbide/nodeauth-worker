const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-BnLSXxfO.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-ZD31REeY.js","assets/index-C8oaAiWk.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as we, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { E as M, d as Ve, i as $e, f as Ce, az as ke, ad as ae, aF as Be, a1 as Ae, $ as Ie, _ as Ue, w as Se, v as Te, u as Ee, W as He, b as Re, aG as qe, aH as ze, au as De } from "./element-plus-CVRB8fAt.js";
import { f as de, k as Qe, a3 as Ne, e as v, I as z, M as W, Q as o, _ as d, O as s, P as r, Z as $, S as D, u as e, W as P, $ as J, l as C, J as oe, Y as ne, aD as Oe } from "./vue-core-Daban9YF.js";
import { u as Me } from "./tanstack-query-C-OQsQoR.js";
import { c as ie, t as Pe } from "./common-9td22p7O.js";
import { a as Ge, c as Y, d as ue, e as F, h as Le, f as Z, g as je, i as We, b as Je, j as Ye, k as Fe, p as Ze, v as Ke, __tla as __tla_1 } from "./vaultService-DDTwa51Q.js";
import { l as Xe, i as xe, u as es, __tla as __tla_2 } from "./index-C8oaAiWk.js";
import { Q as ss } from "./qr-utils-ZD31REeY.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import "./simplewebauthn-3qpiAaRi.js";
let Ks;
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
    function ts() {
        const f = v("base32"), m = v(""), _ = v(""), y = v(""), b = v(""), u = v("totp"), g = v("NodeAuth.io"), B = v("NodeAuth"), c = v("SHA1"), h = v(6), w = v(30), A = v(0), S = v(""), T = v(""), Q = v(30);
        let I = null;
        de(u, (n)=>{
            n === "steam" ? (c.value = "SHA1", h.value = 5, w.value = 30, g.value = "Steam") : (c.value = "SHA1", h.value = 6, w.value = 30, g.value = "NodeAuth.io"), p("settings");
        });
        const p = async (n)=>{
            try {
                if (n === "base32") {
                    const t = Ge(m.value);
                    _.value = Y(t), y.value = ue(t), b.value = F(t);
                } else if (n === "hex") {
                    const t = Le(_.value);
                    t.length > 0 && (m.value = Z(t), y.value = ue(t), b.value = F(t));
                } else if (n === "ascii") {
                    const t = je(y.value);
                    m.value = Z(t), _.value = Y(t), b.value = F(t);
                } else if (n === "base64") {
                    const t = We(b.value);
                    t.length > 0 && (m.value = Z(t), _.value = Y(t), y.value = ue(t));
                }
                m.value ? S.value = Je({
                    service: g.value,
                    account: B.value,
                    secret: m.value,
                    algorithm: c.value,
                    digits: h.value,
                    period: w.value,
                    type: u.value
                }) : (S.value = "", T.value = ""), O();
            } catch (t) {
                Xe.error(t);
            }
        }, G = ()=>p("base32"), R = ()=>p("hex"), L = ()=>p("ascii"), K = ()=>p("base64"), X = ()=>p("settings"), j = ()=>{
            const n = new Uint8Array(20);
            window.crypto.getRandomValues(n), m.value = Z(n), p("base32");
        }, x = ()=>{
            const n = new Uint8Array(20);
            window.crypto.getRandomValues(n), _.value = Y(n), p("hex");
        }, q = ()=>{
            const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
            let t = "";
            const k = new Uint32Array(20);
            window.crypto.getRandomValues(k);
            for(let V = 0; V < 20; V++)t += n[k[V] % n.length];
            y.value = t, p("ascii");
        }, ee = ()=>{
            const n = new Uint8Array(20);
            window.crypto.getRandomValues(n), b.value = F(n), p("base64");
        }, O = async ()=>{
            if (!m.value) return;
            const n = w.value, t = Ye() / 1e3 + A.value;
            Q.value = Math.ceil(n - t % n);
            try {
                const k = Math.floor(A.value / n);
                T.value = await Fe(m.value, n, h.value, c.value, u.value, k);
            } catch  {
                T.value = "ERROR";
            }
        }, se = (n, t = !1)=>{
            t ? A.value = 0 : A.value += n, O();
        }, te = (n)=>{
            const t = Ze(n);
            return t ? (t.secret && (m.value = t.secret, p("base32")), t.service && (g.value = t.service), t.account && (B.value = t.account), t.digits && (h.value = t.digits), t.period && (w.value = t.period), t.algorithm && (c.value = t.algorithm), p("settings"), !0) : !1;
        };
        return Qe(()=>{
            j(), I = setInterval(O, 1e3);
        }), Ne(()=>{
            I && clearInterval(I);
        }), {
            app_active_tab: f,
            type: u,
            secretBase32: m,
            secretHex: _,
            secretAscii: y,
            secretBase64: b,
            issuer: g,
            account: B,
            algorithm: c,
            digits: h,
            period: w,
            app_time_offset: A,
            currentUri: S,
            currentCode: T,
            remaining: Q,
            handleBase32Input: G,
            handleHexInput: R,
            handleAsciiInput: L,
            handleBase64Input: K,
            updateUri: X,
            refreshBase32: j,
            refreshHex: x,
            refreshAscii: q,
            refreshBase64: ee,
            adjustTime: se,
            handleParsedUri: te
        };
    }
    function ls(f, m) {
        const { t: _ } = xe.global, y = v(!1), b = v(!1), u = v("");
        return de(()=>f.currentUri.value, async (c)=>{
            if (c) try {
                u.value = await ss.toDataURL(c, {
                    width: 200,
                    margin: 1
                });
            } catch  {
                u.value = "";
            }
            else u.value = "";
        }), {
            isSaving: y,
            showScanner: b,
            qrCodeUrl: u,
            handleScanSuccess: (c)=>{
                b.value = !1, f.handleParsedUri(c) ? M.success(_("tools.qr_parsed")) : M.warning(_("vault.generate_fail"));
            },
            saveToVault: async ()=>{
                if (!f.secretBase32.value) return M.warning(_("tools.secret_empty"));
                if (!f.issuer.value || !f.account.value) return M.warning(_("tools.fill_info"));
                y.value = !0;
                try {
                    (await Ke.createAccount({
                        service: f.issuer.value,
                        account: f.account.value,
                        secret: f.secretBase32.value,
                        type: f.type.value,
                        digits: f.digits.value,
                        period: f.period.value,
                        algorithm: f.algorithm.value,
                        category: _("tools.title")
                    })).success && (M.success(_("vault.add_success")), m.invalidateQueries([
                        "vault"
                    ]));
                } catch  {} finally{
                    y.value = !1;
                }
            }
        };
    }
    let as, os, ns, is, us, rs, ds, cs, vs, ps, fs, ms, _s, gs, hs, ys, bs, ws, Vs, $s, Cs, ks, Bs, As, Is, Us, Ss, Ts, Es, Hs, Rs, qs, zs, Ds, Qs, Ns;
    as = {
        class: "tool-pane"
    };
    os = {
        class: "totp-layout"
    };
    ns = {
        class: "config-side"
    };
    is = {
        class: "config-section"
    };
    us = {
        class: "section-header"
    };
    rs = {
        class: "section-title"
    };
    ds = {
        class: "pill-tabs-container"
    };
    cs = {
        class: "unified-input-card"
    };
    vs = {
        class: "inline-input-actions"
    };
    ps = {
        class: "config-section"
    };
    fs = {
        class: "section-title"
    };
    ms = {
        class: "meta-row"
    };
    _s = {
        class: "input-label"
    };
    gs = {
        class: "input-label"
    };
    hs = {
        class: "config-section advanced-settings"
    };
    ys = {
        class: "section-title"
    };
    bs = {
        class: "mb-15"
    };
    ws = {
        class: "advanced-row"
    };
    Vs = {
        class: "config-section"
    };
    $s = {
        class: "section-header"
    };
    Cs = {
        class: "section-title"
    };
    ks = {
        class: "unified-preview-card"
    };
    Bs = {
        class: "preview-layout-grid"
    };
    As = {
        class: "qr-unified-wrapper"
    };
    Is = [
        "src"
    ];
    Us = {
        class: "totp-unified-details"
    };
    Ss = [
        "title"
    ];
    Ts = {
        key: 0,
        class: "uri-box"
    };
    Es = {
        class: "uri-text"
    };
    Hs = {
        class: "config-section time-travel-section"
    };
    Rs = {
        class: "section-header"
    };
    qs = {
        class: "section-title mb-0"
    };
    zs = {
        class: "time-travel-controls"
    };
    Ds = {
        class: "offset-display"
    };
    Qs = {
        class: "offset-label"
    };
    Ns = {
        class: "config-section mt-20"
    };
    Ks = {
        __name: "totpSecret",
        setup (f) {
            const m = es(), _ = Oe(()=>we(()=>import("./qrScanner-BnLSXxfO.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), y = Me(), b = ts(), { app_active_tab: u, type: g, secretBase32: B, secretHex: c, secretAscii: h, secretBase64: w, issuer: A, account: S, algorithm: T, digits: Q, period: I, app_time_offset: p, currentUri: G, currentCode: R, remaining: L, handleBase32Input: K, handleHexInput: X, handleAsciiInput: j, handleBase64Input: x, updateUri: q, refreshBase32: ee, refreshHex: O, refreshAscii: se, refreshBase64: te, adjustTime: n } = b, { isSaving: t, showScanner: k, qrCodeUrl: V, handleScanSuccess: ce, saveToVault: ve } = ls(b, y), pe = ()=>{
                u.value === "base32" ? ee() : u.value === "hex" ? O() : u.value === "ascii" ? se() : u.value === "base64" && te();
            }, fe = ()=>{
                let a = "";
                u.value === "base32" ? a = B.value : u.value === "hex" ? a = c.value : u.value === "ascii" ? a = h.value : u.value === "base64" && (a = w.value), a && ie(a);
            }, me = ()=>{
                V.value && Pe(V.value, `nodeauth-qr-${S.value || "code"}.png`);
            };
            return (a, l)=>{
                const U = Ve, N = $e, E = Ce, re = Be, _e = Ae, H = Ie, le = Ue, ge = Ee, he = ze, ye = De, be = Te;
                return z(), W("div", as, [
                    o("div", os, [
                        o("div", ns, [
                            o("div", is, [
                                o("div", us, [
                                    o("h3", rs, d(a.$t("tools.secret_config")), 1),
                                    s(U, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[0] || (l[0] = (i)=>k.value = !0)
                                    }, {
                                        default: r(()=>[
                                                $(d(a.$t("vault.add_scan")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", ds, [
                                    o("div", {
                                        class: D([
                                            "pill-tab",
                                            {
                                                active: e(u) === "base32"
                                            }
                                        ]),
                                        onClick: l[1] || (l[1] = (i)=>u.value = "base32")
                                    }, "Base32", 2),
                                    o("div", {
                                        class: D([
                                            "pill-tab",
                                            {
                                                active: e(u) === "hex"
                                            }
                                        ]),
                                        onClick: l[2] || (l[2] = (i)=>u.value = "hex")
                                    }, d(a.$t("tools.totp_hex")), 3),
                                    o("div", {
                                        class: D([
                                            "pill-tab",
                                            {
                                                active: e(u) === "ascii"
                                            }
                                        ]),
                                        onClick: l[3] || (l[3] = (i)=>u.value = "ascii")
                                    }, "ASCII", 2),
                                    o("div", {
                                        class: D([
                                            "pill-tab",
                                            {
                                                active: e(u) === "base64"
                                            }
                                        ]),
                                        onClick: l[4] || (l[4] = (i)=>u.value = "base64")
                                    }, "Base64", 2)
                                ]),
                                o("div", cs, [
                                    P(s(N, {
                                        modelValue: e(B),
                                        "onUpdate:modelValue": l[5] || (l[5] = (i)=>C(B) ? B.value = i : null),
                                        onInput: e(K),
                                        placeholder: "JBSWY3DP...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            J,
                                            e(u) === "base32"
                                        ]
                                    ]),
                                    P(s(N, {
                                        modelValue: e(c),
                                        "onUpdate:modelValue": l[6] || (l[6] = (i)=>C(c) ? c.value = i : null),
                                        onInput: e(X),
                                        placeholder: "48656c6c6f...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            J,
                                            e(u) === "hex"
                                        ]
                                    ]),
                                    P(s(N, {
                                        modelValue: e(h),
                                        "onUpdate:modelValue": l[7] || (l[7] = (i)=>C(h) ? h.value = i : null),
                                        onInput: e(j),
                                        placeholder: "Hello...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            J,
                                            e(u) === "ascii"
                                        ]
                                    ]),
                                    P(s(N, {
                                        modelValue: e(w),
                                        "onUpdate:modelValue": l[8] || (l[8] = (i)=>C(w) ? w.value = i : null),
                                        onInput: e(x),
                                        placeholder: "SGVsbG8...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            J,
                                            e(u) === "base64"
                                        ]
                                    ]),
                                    o("div", vs, [
                                        s(U, {
                                            link: "",
                                            type: "primary",
                                            onClick: pe
                                        }, {
                                            default: r(()=>[
                                                    s(E, null, {
                                                        default: r(()=>[
                                                                s(e(ke))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    $(" " + d(a.$t("tools.regenerate")), 1)
                                                ]),
                                            _: 1
                                        }),
                                        s(U, {
                                            link: "",
                                            type: "primary",
                                            onClick: fe
                                        }, {
                                            default: r(()=>[
                                                    s(E, null, {
                                                        default: r(()=>[
                                                                s(e(ae))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    $(" " + d(a.$t("common.copy")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ])
                                ])
                            ]),
                            o("div", ps, [
                                o("h3", fs, d(a.$t("tools.basic_info")), 1),
                                o("div", ms, [
                                    s(N, {
                                        modelValue: e(A),
                                        "onUpdate:modelValue": l[9] || (l[9] = (i)=>C(A) ? A.value = i : null),
                                        onInput: e(q)
                                    }, {
                                        prefix: r(()=>[
                                                o("span", _s, d(a.$t("vault.service")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]),
                                    s(N, {
                                        modelValue: e(S),
                                        "onUpdate:modelValue": l[10] || (l[10] = (i)=>C(S) ? S.value = i : null),
                                        onInput: e(q)
                                    }, {
                                        prefix: r(()=>[
                                                o("span", gs, d(a.$t("vault.account")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ])
                                ])
                            ]),
                            o("div", hs, [
                                o("h3", ys, d(a.$t("tools.advanced_settings")), 1),
                                o("div", bs, [
                                    s(_e, {
                                        modelValue: e(g),
                                        "onUpdate:modelValue": l[11] || (l[11] = (i)=>C(g) ? g.value = i : null)
                                    }, {
                                        default: r(()=>[
                                                s(re, {
                                                    label: "totp"
                                                }, {
                                                    default: r(()=>[
                                                            $(d(a.$t("vault.otp_type_totp")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                s(re, {
                                                    label: "steam"
                                                }, {
                                                    default: r(()=>[
                                                            $(d(a.$t("vault.otp_type_steam")), 1)
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue"
                                    ])
                                ]),
                                o("div", ws, [
                                    s(le, {
                                        modelValue: e(T),
                                        "onUpdate:modelValue": l[12] || (l[12] = (i)=>C(T) ? T.value = i : null),
                                        onChange: e(q),
                                        placeholder: a.$t("tools.totp_algorithm"),
                                        class: "flex-1",
                                        disabled: e(g) === "steam"
                                    }, {
                                        default: r(()=>[
                                                s(H, {
                                                    label: a.$t("tools.totp_algo_sha1"),
                                                    value: "SHA1"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(H, {
                                                    label: "SHA256",
                                                    value: "SHA256"
                                                }),
                                                s(H, {
                                                    label: "SHA512",
                                                    value: "SHA512"
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange",
                                        "placeholder",
                                        "disabled"
                                    ]),
                                    s(le, {
                                        modelValue: e(Q),
                                        "onUpdate:modelValue": l[13] || (l[13] = (i)=>C(Q) ? Q.value = i : null),
                                        onChange: e(q),
                                        placeholder: a.$t("tools.totp_digits"),
                                        class: "w-100",
                                        disabled: e(g) === "steam"
                                    }, {
                                        default: r(()=>[
                                                e(g) === "steam" ? (z(), oe(H, {
                                                    key: 0,
                                                    label: a.$t("vault.digits_5"),
                                                    value: 5
                                                }, null, 8, [
                                                    "label"
                                                ])) : ne("", !0),
                                                s(H, {
                                                    label: a.$t("vault.digits_6"),
                                                    value: 6
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(H, {
                                                    label: a.$t("vault.digits_8"),
                                                    value: 8
                                                }, null, 8, [
                                                    "label"
                                                ])
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange",
                                        "placeholder",
                                        "disabled"
                                    ]),
                                    s(le, {
                                        modelValue: e(I),
                                        "onUpdate:modelValue": l[14] || (l[14] = (i)=>C(I) ? I.value = i : null),
                                        onChange: e(q),
                                        placeholder: a.$t("tools.totp_period"),
                                        class: "w-100",
                                        disabled: e(g) === "steam"
                                    }, {
                                        default: r(()=>[
                                                s(H, {
                                                    label: a.$t("vault.period_30s"),
                                                    value: 30
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(H, {
                                                    label: a.$t("vault.period_60s"),
                                                    value: 60
                                                }, null, 8, [
                                                    "label"
                                                ])
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange",
                                        "placeholder",
                                        "disabled"
                                    ])
                                ])
                            ]),
                            o("div", Vs, [
                                o("div", $s, [
                                    o("h3", Cs, d(a.$t("tools.preview")), 1),
                                    s(U, {
                                        link: "",
                                        type: "primary",
                                        onClick: me,
                                        disabled: !e(V)
                                    }, {
                                        default: r(()=>[
                                                s(E, null, {
                                                    default: r(()=>[
                                                            s(e(Se))
                                                        ]),
                                                    _: 1
                                                }),
                                                $(" " + d(a.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "disabled"
                                    ])
                                ]),
                                o("div", ks, [
                                    o("div", Bs, [
                                        P((z(), W("div", As, [
                                            e(V) ? (z(), W("img", {
                                                key: 0,
                                                src: e(V),
                                                alt: "QR Code",
                                                class: "qr-img-unified"
                                            }, null, 8, Is)) : (z(), oe(ge, {
                                                key: 1,
                                                description: a.$t("tools.totp_config_preview"),
                                                "image-size": 80
                                            }, null, 8, [
                                                "description"
                                            ]))
                                        ])), [
                                            [
                                                be,
                                                !e(V)
                                            ]
                                        ]),
                                        o("div", Us, [
                                            o("div", {
                                                class: "totp-code-clickable flex flex-items-center gap-10",
                                                onClick: l[15] || (l[15] = (i)=>e(R) && e(ie)(e(R), a.$t("common.copy_success"))),
                                                title: a.$t("common.copy")
                                            }, [
                                                o("span", {
                                                    class: D([
                                                        "totp-code-giant",
                                                        {
                                                            blur: !e(R)
                                                        }
                                                    ])
                                                }, d(e(R) || "------"), 3),
                                                e(R) ? (z(), oe(E, {
                                                    key: 0,
                                                    color: "var(--el-color-primary)",
                                                    size: "20"
                                                }, {
                                                    default: r(()=>[
                                                            s(e(ae))
                                                        ]),
                                                    _: 1
                                                })) : ne("", !0)
                                            ], 8, Ss),
                                            o("div", {
                                                class: D([
                                                    "totp-timer",
                                                    {
                                                        urgent: e(L) < 5
                                                    }
                                                ]),
                                                style: {
                                                    "margin-left": "10px"
                                                }
                                            }, [
                                                s(E, null, {
                                                    default: r(()=>[
                                                            s(e(He))
                                                        ]),
                                                    _: 1
                                                }),
                                                $(" " + d(e(L)) + "s " + d(a.$t("tools.refresh_after")), 1)
                                            ], 2)
                                        ])
                                    ])
                                ]),
                                e(V) ? (z(), W("div", Ts, [
                                    o("div", Es, d(e(G)), 1),
                                    s(U, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[16] || (l[16] = (i)=>e(ie)(e(G)))
                                    }, {
                                        default: r(()=>[
                                                s(E, null, {
                                                    default: r(()=>[
                                                            s(e(ae))
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])) : ne("", !0)
                            ]),
                            o("div", Hs, [
                                o("div", Rs, [
                                    o("h3", qs, d(a.$t("tools.time_offset")), 1),
                                    s(U, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[17] || (l[17] = (i)=>e(n)(0, !0)),
                                        size: "small"
                                    }, {
                                        default: r(()=>[
                                                $(d(a.$t("tools.reset_time")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", zs, [
                                    o("div", Ds, [
                                        o("span", Qs, d(a.$t("tools.current_offset")), 1),
                                        o("span", {
                                            class: D([
                                                "offset-value",
                                                {
                                                    "has-offset": e(p) !== 0
                                                }
                                            ])
                                        }, d(e(p) > 0 ? "+" : "") + d(e(p)) + "s ", 3)
                                    ]),
                                    s(he, {
                                        class: "segmented-control"
                                    }, {
                                        default: r(()=>[
                                                s(U, {
                                                    onClick: l[18] || (l[18] = (i)=>e(n)(-e(I))),
                                                    size: "default"
                                                }, {
                                                    default: r(()=>[
                                                            s(E, {
                                                                class: "mr-10"
                                                            }, {
                                                                default: r(()=>[
                                                                        s(e(Re))
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            $(" " + d(a.$t("tools.prev_period")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                s(U, {
                                                    onClick: l[19] || (l[19] = (i)=>e(n)(e(I))),
                                                    size: "default"
                                                }, {
                                                    default: r(()=>[
                                                            $(d(a.$t("tools.next_period")) + " ", 1),
                                                            s(E, {
                                                                class: "ml-5"
                                                            }, {
                                                                default: r(()=>[
                                                                        s(e(qe))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            o("div", Ns, [
                                s(U, {
                                    type: "success",
                                    size: "large",
                                    onClick: e(ve),
                                    class: "w-full",
                                    loading: e(t)
                                }, {
                                    default: r(()=>[
                                            $(d(a.$t("tools.save_to_vault")), 1)
                                        ]),
                                    _: 1
                                }, 8, [
                                    "onClick",
                                    "loading"
                                ])
                            ])
                        ])
                    ]),
                    s(ye, {
                        modelValue: e(k),
                        "onUpdate:modelValue": l[20] || (l[20] = (i)=>C(k) ? k.value = i : null),
                        title: a.$t("tools.totp_scan_qr_title"),
                        width: e(m).isMobile ? "90%" : "450px",
                        "destroy-on-close": "",
                        "append-to-body": ""
                    }, {
                        default: r(()=>[
                                s(e(_), {
                                    onScanSuccess: e(ce)
                                }, null, 8, [
                                    "onScanSuccess"
                                ])
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title",
                        "width"
                    ])
                ]);
            };
        }
    };
});
export { Ks as default, __tla };
