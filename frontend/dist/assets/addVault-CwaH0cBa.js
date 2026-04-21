const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-BKcakgWh.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-ZD31REeY.js","assets/index-A5gCNzyQ.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as J, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { p as Y, f as j, ay as K, aG as W, aF as x, a1 as ee, G as ae, i as te, d as le, az as oe, Z as se, R as ne, _ as ue, $ as re, a0 as ie, F as de, a8 as ce, aQ as pe, X as me, E as k, o as ve } from "./element-plus-CVRB8fAt.js";
import { p as _e, v as O, u as T, f as fe, __tla as __tla_1 } from "./vaultService-DHLTMMTt.js";
import { a as be, u as ge, p as ye, i as he, __tla as __tla_2 } from "./index-A5gCNzyQ.js";
import { f as Ve, I as d, M as b, Q as u, O as a, P as o, u as _, _ as m, Y as U, F as $e, ac as we, J as g, X as Se, Z as V, e as $, c as Ee, E as i, aD as Ae } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let ta;
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
    let ke, Ue, Be, Fe, He, Re, Ce, De, Oe, Te, qe, Ie, Me, Ne, Le, ze, Ge, Pe, Qe;
    ke = {
        class: "add-vault-wrapper"
    };
    Ue = {
        class: "tab-card-wrapper"
    };
    Be = {
        class: "page-header-container"
    };
    Fe = {
        class: "page-header-hero"
    };
    He = {
        class: "hero-icon-wrapper"
    };
    Re = {
        key: 0
    };
    Ce = {
        class: "page-desc-text"
    };
    De = {
        class: "max-w-600 m-auto"
    };
    Oe = {
        class: "batch-import-container-top mb-10"
    };
    Te = {
        class: "card-left"
    };
    qe = {
        class: "icon-ring"
    };
    Ie = {
        class: "text-meta"
    };
    Me = {
        class: "entry-title"
    };
    Ne = {
        class: "entry-desc"
    };
    Le = {
        class: "flex-center mb-20"
    };
    ze = {
        class: "flex-center gap-5"
    };
    Ge = {
        key: 0
    };
    Pe = {
        key: 1,
        class: "vault-manual-form-container"
    };
    Qe = {
        class: "m-auto w-full"
    };
    ta = {
        __name: "addVault",
        emits: [
            "success"
        ],
        setup (Ze, { emit: q }) {
            const I = Ae(()=>J(()=>import("./qrScanner-BKcakgWh.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), B = q, y = be(), F = ge(), H = ye(), { t: s } = he.global, f = $("camera"), M = Ee(()=>[
                    {
                        label: s("vault.add_mode_camera"),
                        value: "camera",
                        icon: ce
                    },
                    {
                        label: s("vault.add_mode_image"),
                        value: "image",
                        icon: pe
                    },
                    {
                        label: s("vault.add_account"),
                        value: "manual",
                        icon: me
                    }
                ]), R = ()=>({
                    type: "totp",
                    service: "",
                    account: "",
                    secret: "",
                    category: "",
                    digits: 6,
                    period: 30,
                    counter: 0,
                    algorithm: "SHA1"
                }), w = $(!1), S = $(null), l = $(R()), N = (t, e, r)=>{
                if (!e) return r(new Error(s("vault.require_secret")));
                const c = e.replace(/\s/g, "");
                if (c.length < 16) return r(new Error(s("vault.secret_min_length")));
                if (!/^[A-Z2-7]+$/i.test(c)) return r(new Error(s("vault.secret_invalid_char")));
                r();
            }, L = {
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
                        validator: N,
                        trigger: "blur"
                    }
                ]
            };
            Ve(()=>l.value.type, (t)=>{
                const e = t === "steam", r = t === "hotp";
                l.value.algorithm = "SHA1", l.value.digits = e ? 5 : 6, l.value.period = 30, r && (l.value.counter = 0), e && !l.value.service && (l.value.service = "Steam");
            });
            const z = ()=>{
                const t = new Uint8Array(20);
                window.crypto.getRandomValues(t), l.value.secret = fe(t);
            }, G = async ()=>{
                S.value && await S.value.validate(async (t)=>{
                    if (t) {
                        w.value = !0;
                        try {
                            if ((await O.createAccount(l.value)).success) {
                                H.isOffline || await y.updateMetadata({
                                    delta: 1
                                }), k.success(s("vault.add_success")), l.value = R(), y.markDirty();
                                const { fetchTrash: r } = T();
                                r(), B("success");
                            }
                        } catch  {} finally{
                            w.value = !1;
                        }
                    }
                });
            }, P = async (t)=>{
                try {
                    const e = _e(t);
                    if (!e) {
                        k.error(s("vault.invalid_qr_format"));
                        return;
                    }
                    if (await ve.confirm(i("div", {
                        class: "confirmation-box"
                    }, [
                        i("div", {
                            class: "confirmation-row"
                        }, [
                            i("span", {
                                class: "confirmation-label"
                            }, s("vault.service_label")),
                            i("span", {
                                class: "confirmation-value"
                            }, e.service || s("vault.unknown_service"))
                        ]),
                        i("div", {
                            class: "confirmation-row"
                        }, [
                            i("span", {
                                class: "confirmation-label"
                            }, s("vault.account_label")),
                            i("span", {
                                class: "confirmation-value mono"
                            }, e.account || s("vault.unnamed_account"))
                        ]),
                        i("div", {
                            class: "confirmation-row"
                        }, [
                            i("span", {
                                class: "confirmation-label"
                            }, s("vault.param_label")),
                            i("div", {
                                class: "confirmation-tags"
                            }, [
                                i("span", {
                                    class: "confirmation-tag confirmation-tag-primary"
                                }, e.type === "steam" ? s("vault.otp_type_steam") : e.type === "hotp" ? s("vault.otp_type_hotp") : s("vault.otp_type_totp")),
                                i("span", {
                                    class: "confirmation-tag confirmation-tag-info"
                                }, e.algorithm || "SHA1"),
                                i("span", {
                                    class: "confirmation-tag confirmation-tag-success"
                                }, `${e.digits || 6}${s("vault.digits_suffix")}`),
                                e.type === "hotp" ? i("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${s("vault.counter_label")}: ${e.counter || 0}`) : i("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${e.period || 30}${s("vault.period_suffix")}`)
                            ])
                        ])
                    ]), s("vault.confirm_add_title"), {
                        confirmButtonText: s("common.confirm"),
                        cancelButtonText: s("common.cancel"),
                        type: "success",
                        center: !0
                    }), (await O.addFromUri(t, "Scan")).success) {
                        H.isOffline || await y.updateMetadata({
                            delta: 1
                        }), k.success(s("vault.add_success")), y.markDirty();
                        const { fetchTrash: c } = T();
                        c(), B("success");
                    }
                } catch (e) {
                    e !== "cancel" && console.error(e);
                }
            };
            return (t, e)=>{
                const r = j, c = x, C = ee, h = te, p = ae, D = le, v = re, E = ue, A = ne, Q = ie, Z = se, X = de;
                return d(), b("div", ke, [
                    u("div", Ue, [
                        u("div", Be, [
                            u("div", Fe, [
                                u("div", He, [
                                    a(r, {
                                        size: 28
                                    }, {
                                        default: o(()=>[
                                                a(_(Y))
                                            ]),
                                        _: 1
                                    })
                                ]),
                                _(F).isMobile ? U("", !0) : (d(), b("h2", Re, m(t.$t("menu.add")), 1))
                            ]),
                            u("p", Ce, m(t.$t("vault.add_account_tip")), 1)
                        ]),
                        u("div", De, [
                            u("div", Oe, [
                                u("div", {
                                    class: "import-card-hero",
                                    onClick: e[0] || (e[0] = (n)=>_(F).setActiveTab("migration-import"))
                                }, [
                                    u("div", Te, [
                                        u("div", qe, [
                                            a(r, null, {
                                                default: o(()=>[
                                                        a(_(K))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        u("div", Ie, [
                                            u("div", Me, m(t.$t("vault.batch_import_entry_title")), 1),
                                            u("div", Ne, m(t.$t("vault.batch_import_entry_desc")), 1)
                                        ])
                                    ]),
                                    a(r, {
                                        class: "card-arrow"
                                    }, {
                                        default: o(()=>[
                                                a(_(W))
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            u("div", Le, [
                                a(C, {
                                    modelValue: f.value,
                                    "onUpdate:modelValue": e[1] || (e[1] = (n)=>f.value = n),
                                    class: "mode-switcher-radio"
                                }, {
                                    default: o(()=>[
                                            (d(!0), b($e, null, we(M.value, (n)=>(d(), g(c, {
                                                    key: n.value,
                                                    label: n.value
                                                }, {
                                                    default: o(()=>[
                                                            u("div", ze, [
                                                                a(r, null, {
                                                                    default: o(()=>[
                                                                            (d(), g(Se(n.icon)))
                                                                        ]),
                                                                    _: 2
                                                                }, 1024),
                                                                u("span", null, m(n.label), 1)
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
                            f.value === "camera" || f.value === "image" ? (d(), b("div", Ge, [
                                a(_(I), {
                                    "force-mode": f.value,
                                    onScanSuccess: P
                                }, null, 8, [
                                    "force-mode"
                                ])
                            ])) : f.value === "manual" ? (d(), b("div", Pe, [
                                u("div", Qe, [
                                    a(X, {
                                        model: l.value,
                                        "label-position": "top",
                                        rules: L,
                                        ref_key: "addFormRef",
                                        ref: S,
                                        class: "vault-manual-form-wrapper"
                                    }, {
                                        default: o(()=>[
                                                a(p, {
                                                    label: t.$t("vault.service_name"),
                                                    prop: "service"
                                                }, {
                                                    default: o(()=>[
                                                            a(h, {
                                                                modelValue: l.value.service,
                                                                "onUpdate:modelValue": e[2] || (e[2] = (n)=>l.value.service = n),
                                                                placeholder: t.$t("vault.input_service_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                a(p, {
                                                    label: t.$t("vault.account_identifier"),
                                                    prop: "account"
                                                }, {
                                                    default: o(()=>[
                                                            a(h, {
                                                                modelValue: l.value.account,
                                                                "onUpdate:modelValue": e[3] || (e[3] = (n)=>l.value.account = n),
                                                                placeholder: t.$t("vault.input_account_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                a(p, {
                                                    label: t.$t("vault.input_secret_label"),
                                                    prop: "secret"
                                                }, {
                                                    default: o(()=>[
                                                            a(h, {
                                                                modelValue: l.value.secret,
                                                                "onUpdate:modelValue": e[4] || (e[4] = (n)=>l.value.secret = n),
                                                                placeholder: t.$t("vault.input_secret_placeholder"),
                                                                clearable: ""
                                                            }, {
                                                                append: o(()=>[
                                                                        a(D, {
                                                                            onClick: z,
                                                                            title: t.$t("vault.generate_random_secret")
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    a(r, null, {
                                                                                        default: o(()=>[
                                                                                                a(_(oe))
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
                                                a(p, {
                                                    label: t.$t("vault.otp_type_label"),
                                                    prop: "type"
                                                }, {
                                                    default: o(()=>[
                                                            a(C, {
                                                                modelValue: l.value.type,
                                                                "onUpdate:modelValue": e[5] || (e[5] = (n)=>l.value.type = n)
                                                            }, {
                                                                default: o(()=>[
                                                                        a(c, {
                                                                            label: "totp"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    V(m(t.$t("vault.otp_type_totp")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        }),
                                                                        a(c, {
                                                                            label: "hotp"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    V(m(t.$t("vault.otp_type_hotp")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        }),
                                                                        a(c, {
                                                                            label: "steam"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    V(m(t.$t("vault.otp_type_steam")), 1)
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
                                                a(Z, {
                                                    gutter: 20
                                                }, {
                                                    default: o(()=>[
                                                            a(A, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        a(p, {
                                                                            label: t.$t("vault.algorithm_label"),
                                                                            prop: "algorithm"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    a(E, {
                                                                                        modelValue: l.value.algorithm,
                                                                                        "onUpdate:modelValue": e[6] || (e[6] = (n)=>l.value.algorithm = n),
                                                                                        class: "w-full",
                                                                                        disabled: l.value.type === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                a(v, {
                                                                                                    label: t.$t("vault.algo_sha1"),
                                                                                                    value: "SHA1"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                a(v, {
                                                                                                    label: "SHA256",
                                                                                                    value: "SHA256"
                                                                                                }),
                                                                                                a(v, {
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
                                                            a(A, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        a(p, {
                                                                            label: t.$t("vault.digits_label"),
                                                                            prop: "digits"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    a(E, {
                                                                                        modelValue: l.value.digits,
                                                                                        "onUpdate:modelValue": e[7] || (e[7] = (n)=>l.value.digits = n),
                                                                                        class: "w-full",
                                                                                        disabled: l.value.type === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                l.value.type === "steam" ? (d(), g(v, {
                                                                                                    key: 0,
                                                                                                    label: t.$t("vault.digits_5"),
                                                                                                    value: 5
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : U("", !0),
                                                                                                a(v, {
                                                                                                    label: t.$t("vault.digits_6"),
                                                                                                    value: 6
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                a(v, {
                                                                                                    label: t.$t("vault.digits_8"),
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
                                                            a(A, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        a(p, {
                                                                            label: l.value.type === "hotp" ? t.$t("vault.counter_label") : t.$t("vault.period_label"),
                                                                            prop: "period"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    l.value.type === "hotp" ? (d(), g(Q, {
                                                                                        key: 0,
                                                                                        modelValue: l.value.counter,
                                                                                        "onUpdate:modelValue": e[8] || (e[8] = (n)=>l.value.counter = n),
                                                                                        min: 0,
                                                                                        class: "w-full"
                                                                                    }, null, 8, [
                                                                                        "modelValue"
                                                                                    ])) : (d(), g(E, {
                                                                                        key: 1,
                                                                                        modelValue: l.value.period,
                                                                                        "onUpdate:modelValue": e[9] || (e[9] = (n)=>l.value.period = n),
                                                                                        class: "w-full",
                                                                                        disabled: l.value.type === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                a(v, {
                                                                                                    label: t.$t("vault.period_30s"),
                                                                                                    value: 30
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                a(v, {
                                                                                                    label: t.$t("vault.period_60s"),
                                                                                                    value: 60
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ]))
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
                                                a(p, {
                                                    label: t.$t("vault.category_optional"),
                                                    prop: "category"
                                                }, {
                                                    default: o(()=>[
                                                            a(h, {
                                                                modelValue: l.value.category,
                                                                "onUpdate:modelValue": e[10] || (e[10] = (n)=>l.value.category = n),
                                                                placeholder: t.$t("vault.input_category_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                a(p, {
                                                    class: "mt-30"
                                                }, {
                                                    default: o(()=>[
                                                            a(D, {
                                                                type: "primary",
                                                                loading: w.value,
                                                                onClick: G,
                                                                class: "vault-manual-submit-btn",
                                                                size: "large"
                                                            }, {
                                                                default: o(()=>[
                                                                        V(m(t.$t("vault.confirm_add_btn")), 1)
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
                            ])) : U("", !0)
                        ])
                    ])
                ]);
            };
        }
    };
});
export { ta as default, __tla };
