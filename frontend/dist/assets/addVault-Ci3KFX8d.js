const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-BnLSXxfO.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-ZD31REeY.js","assets/index-C8oaAiWk.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as X, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { p as J, f as Y, ay as j, aG as K, aF as W, a1 as x, G as ee, i as ae, d as le, az as te, Z as oe, R as se, _ as re, $ as ne, F as ue, a8 as ie, aQ as de, X as ce, E, o as me } from "./element-plus-CVRB8fAt.js";
import { p as pe, v as H, u as O, f as ve, __tla as __tla_1 } from "./vaultService-DDTwa51Q.js";
import { a as _e, u as fe, p as be, i as ge, __tla as __tla_2 } from "./index-C8oaAiWk.js";
import { f as ye, I as p, M as b, Q as n, O as e, P as o, u as _, _ as v, Y as A, F as he, ac as Ve, J as k, X as we, Z as U, e as h, c as $e, E as u, aD as Se } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let ea;
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
    let Ee, Ae, ke, Ue, Be, Fe, Re, Te, Ce, De, He, Oe, qe, Me, Ie, Le, Ne, ze, Ge;
    Ee = {
        class: "add-vault-wrapper"
    };
    Ae = {
        class: "tab-card-wrapper"
    };
    ke = {
        class: "page-header-container"
    };
    Ue = {
        class: "page-header-hero"
    };
    Be = {
        class: "hero-icon-wrapper"
    };
    Fe = {
        key: 0
    };
    Re = {
        class: "page-desc-text"
    };
    Te = {
        class: "max-w-600 m-auto"
    };
    Ce = {
        class: "batch-import-container-top mb-10"
    };
    De = {
        class: "card-left"
    };
    He = {
        class: "icon-ring"
    };
    Oe = {
        class: "text-meta"
    };
    qe = {
        class: "entry-title"
    };
    Me = {
        class: "entry-desc"
    };
    Ie = {
        class: "flex-center mb-20"
    };
    Le = {
        class: "flex-center gap-5"
    };
    Ne = {
        key: 0
    };
    ze = {
        key: 1,
        class: "vault-manual-form-container"
    };
    Ge = {
        class: "m-auto w-full"
    };
    ea = {
        __name: "addVault",
        emits: [
            "success"
        ],
        setup (Pe, { emit: q }) {
            const M = Se(()=>X(()=>import("./qrScanner-BnLSXxfO.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), B = q, g = _e(), F = fe(), R = be(), { t: s } = ge.global, f = h("camera"), I = $e(()=>[
                    {
                        label: s("vault.add_mode_camera"),
                        value: "camera",
                        icon: ie
                    },
                    {
                        label: s("vault.add_mode_image"),
                        value: "image",
                        icon: de
                    },
                    {
                        label: s("vault.add_account"),
                        value: "manual",
                        icon: ce
                    }
                ]), T = ()=>({
                    type: "totp",
                    service: "",
                    account: "",
                    secret: "",
                    category: "",
                    digits: 6,
                    period: 30,
                    algorithm: "SHA1"
                }), V = h(!1), w = h(null), t = h(T()), L = (l, a, i)=>{
                if (!a) return i(new Error(s("vault.require_secret")));
                const c = a.replace(/\s/g, "");
                if (c.length < 16) return i(new Error(s("vault.secret_min_length")));
                if (!/^[A-Z2-7]+$/i.test(c)) return i(new Error(s("vault.secret_invalid_char")));
                i();
            }, N = {
                service: [
                    {
                        required: !0,
                        message: s("vault.require_service"),
                        trigger: "blur"
                    }
                ],
                account: [
                    {
                        required: !0,
                        message: s("vault.require_account"),
                        trigger: "blur"
                    }
                ],
                secret: [
                    {
                        required: !0,
                        validator: L,
                        trigger: "blur"
                    }
                ]
            };
            ye(()=>t.value.type, (l)=>{
                const a = l === "steam";
                t.value.algorithm = "SHA1", t.value.digits = a ? 5 : 6, t.value.period = 30, a && !t.value.service && (t.value.service = "Steam");
            });
            const z = ()=>{
                const l = new Uint8Array(20);
                window.crypto.getRandomValues(l), t.value.secret = ve(l);
            }, G = async ()=>{
                w.value && await w.value.validate(async (l)=>{
                    if (l) {
                        V.value = !0;
                        try {
                            if ((await H.createAccount(t.value)).success) {
                                R.isOffline || await g.updateMetadata({
                                    delta: 1
                                }), E.success(s("vault.add_success")), t.value = T(), g.markDirty();
                                const { fetchTrash: i } = O();
                                i(), B("success");
                            }
                        } catch  {} finally{
                            V.value = !1;
                        }
                    }
                });
            }, P = async (l)=>{
                try {
                    const a = pe(l);
                    if (!a) {
                        E.error(s("vault.invalid_qr_format"));
                        return;
                    }
                    if (await me.confirm(u("div", {
                        class: "confirmation-box"
                    }, [
                        u("div", {
                            class: "confirmation-row"
                        }, [
                            u("span", {
                                class: "confirmation-label"
                            }, s("vault.service_label")),
                            u("span", {
                                class: "confirmation-value"
                            }, a.service || s("vault.unknown_service"))
                        ]),
                        u("div", {
                            class: "confirmation-row"
                        }, [
                            u("span", {
                                class: "confirmation-label"
                            }, s("vault.account_label")),
                            u("span", {
                                class: "confirmation-value mono"
                            }, a.account || s("vault.unnamed_account"))
                        ]),
                        u("div", {
                            class: "confirmation-row"
                        }, [
                            u("span", {
                                class: "confirmation-label"
                            }, s("vault.param_label")),
                            u("div", {
                                class: "confirmation-tags"
                            }, [
                                u("span", {
                                    class: "confirmation-tag confirmation-tag-primary"
                                }, a.type === "steam" ? s("vault.otp_type_steam") : s("vault.otp_type_totp")),
                                u("span", {
                                    class: "confirmation-tag confirmation-tag-info"
                                }, a.algorithm || "SHA1"),
                                u("span", {
                                    class: "confirmation-tag confirmation-tag-success"
                                }, `${a.digits || 6}${s("vault.digits_suffix")}`),
                                u("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${a.period || 30}${s("vault.period_suffix")}`)
                            ])
                        ])
                    ]), s("vault.confirm_add_title"), {
                        confirmButtonText: s("common.confirm"),
                        cancelButtonText: s("common.cancel"),
                        type: "success",
                        center: !0
                    }), (await H.addFromUri(l, "Scan")).success) {
                        R.isOffline || await g.updateMetadata({
                            delta: 1
                        }), E.success(s("vault.add_success")), g.markDirty();
                        const { fetchTrash: c } = O();
                        c(), B("success");
                    }
                } catch (a) {
                    a !== "cancel" && console.error(a);
                }
            };
            return (l, a)=>{
                const i = Y, c = W, C = x, y = ae, d = ee, D = le, m = ne, $ = re, S = se, Q = oe, Z = ue;
                return p(), b("div", Ee, [
                    n("div", Ae, [
                        n("div", ke, [
                            n("div", Ue, [
                                n("div", Be, [
                                    e(i, {
                                        size: 28
                                    }, {
                                        default: o(()=>[
                                                e(_(J))
                                            ]),
                                        _: 1
                                    })
                                ]),
                                _(F).isMobile ? A("", !0) : (p(), b("h2", Fe, v(l.$t("menu.add")), 1))
                            ]),
                            n("p", Re, v(l.$t("vault.add_account_tip")), 1)
                        ]),
                        n("div", Te, [
                            n("div", Ce, [
                                n("div", {
                                    class: "import-card-hero",
                                    onClick: a[0] || (a[0] = (r)=>_(F).setActiveTab("migration-import"))
                                }, [
                                    n("div", De, [
                                        n("div", He, [
                                            e(i, null, {
                                                default: o(()=>[
                                                        e(_(j))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        n("div", Oe, [
                                            n("div", qe, v(l.$t("vault.batch_import_entry_title")), 1),
                                            n("div", Me, v(l.$t("vault.batch_import_entry_desc")), 1)
                                        ])
                                    ]),
                                    e(i, {
                                        class: "card-arrow"
                                    }, {
                                        default: o(()=>[
                                                e(_(K))
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            n("div", Ie, [
                                e(C, {
                                    modelValue: f.value,
                                    "onUpdate:modelValue": a[1] || (a[1] = (r)=>f.value = r),
                                    class: "mode-switcher-radio"
                                }, {
                                    default: o(()=>[
                                            (p(!0), b(he, null, Ve(I.value, (r)=>(p(), k(c, {
                                                    key: r.value,
                                                    label: r.value
                                                }, {
                                                    default: o(()=>[
                                                            n("div", Le, [
                                                                e(i, null, {
                                                                    default: o(()=>[
                                                                            (p(), k(we(r.icon)))
                                                                        ]),
                                                                    _: 2
                                                                }, 1024),
                                                                n("span", null, v(r.label), 1)
                                                            ])
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "label"
                                                ]))), 128))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "modelValue"
                                ])
                            ]),
                            f.value === "camera" || f.value === "image" ? (p(), b("div", Ne, [
                                e(_(M), {
                                    "force-mode": f.value,
                                    onScanSuccess: P
                                }, null, 8, [
                                    "force-mode"
                                ])
                            ])) : f.value === "manual" ? (p(), b("div", ze, [
                                n("div", Ge, [
                                    e(Z, {
                                        model: t.value,
                                        "label-position": "top",
                                        rules: N,
                                        ref_key: "addFormRef",
                                        ref: w,
                                        class: "vault-manual-form-wrapper"
                                    }, {
                                        default: o(()=>[
                                                e(d, {
                                                    label: l.$t("vault.service_name"),
                                                    prop: "service"
                                                }, {
                                                    default: o(()=>[
                                                            e(y, {
                                                                modelValue: t.value.service,
                                                                "onUpdate:modelValue": a[2] || (a[2] = (r)=>t.value.service = r),
                                                                placeholder: l.$t("vault.input_service_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: l.$t("vault.account_identifier"),
                                                    prop: "account"
                                                }, {
                                                    default: o(()=>[
                                                            e(y, {
                                                                modelValue: t.value.account,
                                                                "onUpdate:modelValue": a[3] || (a[3] = (r)=>t.value.account = r),
                                                                placeholder: l.$t("vault.input_account_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: l.$t("vault.input_secret_label"),
                                                    prop: "secret"
                                                }, {
                                                    default: o(()=>[
                                                            e(y, {
                                                                modelValue: t.value.secret,
                                                                "onUpdate:modelValue": a[4] || (a[4] = (r)=>t.value.secret = r),
                                                                placeholder: l.$t("vault.input_secret_placeholder"),
                                                                clearable: ""
                                                            }, {
                                                                append: o(()=>[
                                                                        e(D, {
                                                                            onClick: z,
                                                                            title: l.$t("vault.generate_random_secret")
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(i, null, {
                                                                                        default: o(()=>[
                                                                                                e(_(te))
                                                                                            ]),
                                                                                        _: 1
                                                                                    })
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "title"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: l.$t("vault.otp_type_label"),
                                                    prop: "type"
                                                }, {
                                                    default: o(()=>[
                                                            e(C, {
                                                                modelValue: t.value.type,
                                                                "onUpdate:modelValue": a[5] || (a[5] = (r)=>t.value.type = r)
                                                            }, {
                                                                default: o(()=>[
                                                                        e(c, {
                                                                            label: "totp"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    U(v(l.$t("vault.otp_type_totp")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        }),
                                                                        e(c, {
                                                                            label: "steam"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    U(v(l.$t("vault.otp_type_steam")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(Q, {
                                                    gutter: 20
                                                }, {
                                                    default: o(()=>[
                                                            e(S, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: l.$t("vault.algorithm_label"),
                                                                            prop: "algorithm"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e($, {
                                                                                        modelValue: t.value.algorithm,
                                                                                        "onUpdate:modelValue": a[6] || (a[6] = (r)=>t.value.algorithm = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.type === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                e(m, {
                                                                                                    label: l.$t("vault.algo_sha1"),
                                                                                                    value: "SHA1"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(m, {
                                                                                                    label: "SHA256",
                                                                                                    value: "SHA256"
                                                                                                }),
                                                                                                e(m, {
                                                                                                    label: "SHA512",
                                                                                                    value: "SHA512"
                                                                                                })
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            e(S, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: l.$t("vault.digits_label"),
                                                                            prop: "digits"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e($, {
                                                                                        modelValue: t.value.digits,
                                                                                        "onUpdate:modelValue": a[7] || (a[7] = (r)=>t.value.digits = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.type === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                t.value.type === "steam" ? (p(), k(m, {
                                                                                                    key: 0,
                                                                                                    label: l.$t("vault.digits_5"),
                                                                                                    value: 5
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : A("", !0),
                                                                                                e(m, {
                                                                                                    label: l.$t("vault.digits_6"),
                                                                                                    value: 6
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(m, {
                                                                                                    label: l.$t("vault.digits_8"),
                                                                                                    value: 8
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            e(S, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: l.$t("vault.period_label"),
                                                                            prop: "period"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e($, {
                                                                                        modelValue: t.value.period,
                                                                                        "onUpdate:modelValue": a[8] || (a[8] = (r)=>t.value.period = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.type === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                e(m, {
                                                                                                    label: l.$t("vault.period_30s"),
                                                                                                    value: 30
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(m, {
                                                                                                    label: l.$t("vault.period_60s"),
                                                                                                    value: 60
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }),
                                                e(d, {
                                                    label: l.$t("vault.category_optional"),
                                                    prop: "category"
                                                }, {
                                                    default: o(()=>[
                                                            e(y, {
                                                                modelValue: t.value.category,
                                                                "onUpdate:modelValue": a[9] || (a[9] = (r)=>t.value.category = r),
                                                                placeholder: l.$t("vault.input_category_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    class: "mt-30"
                                                }, {
                                                    default: o(()=>[
                                                            e(D, {
                                                                type: "primary",
                                                                loading: V.value,
                                                                onClick: G,
                                                                class: "vault-manual-submit-btn",
                                                                size: "large"
                                                            }, {
                                                                default: o(()=>[
                                                                        U(v(l.$t("vault.confirm_add_btn")), 1)
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "loading"
                                                            ])
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "model"
                                    ])
                                ])
                            ])) : A("", !0)
                        ])
                    ])
                ]);
            };
        }
    };
});
export { ea as default, __tla };
