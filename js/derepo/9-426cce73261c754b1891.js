(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        124: function(n, e, t) {
            "use strict";
            t(23), t(40);
            var a = t(141),
                r = t.n(a),
                s = t(9),
                i = t.n(s),
                o = "".concat(APIURL, "derepo_v2/"),
                c = "".concat(APIURL, "vr/vr_derepo/"),
                d = "timeline",
                p = "search",
                l = "favorite_list",
                m = "change_favorite",
                g = "keyword_list",
                h = "search_keyword_list",
                A = "top",
                f = "photo_list",
                u = "thread_list",
                x = "send_mail",
                _ = "search_keyword_idol_list",
                v = "favorite_idol_view_list",
                C = "set_favorite_idols",
                w = t(137),
                B = t.n(w),
                k = t(6);

            function b(n, e, t) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                    s = "";
                switch (n) {
                    case "top":
                        s = A;
                        break;
                    case "index":
                        s = d;
                        break;
                    case "search-result":
                        s = p;
                        break;
                    case "trend":
                        s = g;
                        break;
                    case "search-keyword":
                        s = h;
                        break;
                    case "favorite":
                        s = l;
                        break;
                    case "change-favorite":
                        s = m;
                        break;
                    case "photo-list":
                        s = f;
                        break;
                    case "thread-list":
                        s = u;
                        break;
                    case "favorite-idol":
                        s = v;
                        break;
                    case "set-favorite-idol":
                        s = C;
                        break;
                    case "send-name":
                        s = _;
                        break;
                    case "mail-send":
                        s = x
                }
                "landscape" === t ? s = o + s : (s = c + s, void 0 === e.vr_id && (e.vr_id = e.viewer_id));
                var w = new B.a;
                i.a.each(e, (function(n, e) {
                    w.append(e, n)
                })), r()({
                    url: s,
                    method: "post",
                    data: w
                }).then((function(n) {
                    try {
                        if (n.request.responseURL.match(/maintenance/)) {
                            return k.a.$emit("apiError", {
                                response: {
                                    status: 302,
                                    location: "maintenance"
                                }
                            }), void a({
                                isError: !0
                            })
                        }
                    } catch (n) {}
                    a(n)
                })).catch((function(n) {
                    k.a.$emit("apiError", n), a({
                        isError: !0
                    })
                }))
            }
            t.d(e, "a", (function() {
                return b
            }))
        },
        167: function(n, e, t) {
            var a = t(275);
            "string" == typeof a && (a = [
                [n.i, a, ""]
            ]), a.locals && (n.exports = a.locals);
            (0, t(34).default)("48bfc7a7", a, !0, {})
        },
        274: function(n, e, t) {
            "use strict";
            var a = t(167);
            t.n(a).a
        },
        275: function(n, e, t) {
            (e = t(33)(!0)).push([n.i, ".portrait .contents.search[data-v-8a6ad8d6]{padding:8px 16px 0}.portrait .contents.search h2[data-v-8a6ad8d6]{margin-bottom:16px;text-align:center;font-size:1.4rem;font-weight:bold}.landscape .contents.search[data-v-8a6ad8d6]{padding:64px 0 20px}.landscape .contents.search h2[data-v-8a6ad8d6]{margin-bottom:8px;padding-left:16px;width:295px;text-align:center;font-size:1rem;font-weight:bold;color:#959595}.landscape .is_pc .contents.search[data-v-8a6ad8d6]{padding:0 0 20px}.landscape .is_pc .contents.search h2[data-v-8a6ad8d6]{margin:0 auto 18px;width:663px;font-size:2.25rem}\n", "", {
                version: 3,
                sources: ["/mnt/data/home/stage_jenkins/release_repos/production_derepo/src/js/derepo/components/tag-list.vue", "/mnt/data/home/stage_jenkins/release_repos/production_derepo/src/sass/derepo/_inc/_core/_setting.scss"],
                names: [],
                mappings: "AA0FA,4CACC,kBAAsC,CADvC,+CAGE,kBAA4B,CAC5B,iBAAkB,CAClB,gBC5EgC,CD6EhC,gBAAiB,CACjB,6CAID,mBAA8B,CAD/B,gDAGE,iBAA4B,CAC5B,iBAA2B,CAC3B,WAAqB,CACrB,iBAAkB,CAClB,cCnGgC,CDoGhC,gBAAiB,CACjB,aAAc,CACd,oDAGD,gBAAiB,CADlB,uDAGE,kBAAmB,CACnB,WAAY,CACZ,iBAAkB",
                file: "tag-list.vue?vue&type=style&index=0&id=8a6ad8d6&lang=scss&scoped=true&",
                sourcesContent: ['$assetsurl: "https://apis.game.starlight-stage.jp//";\n@charset "UTF-8";\n@import "../../../sass/derepo/_inc/_core/_setting";\n@import "../../../sass/derepo/_inc/_core/_mixin";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.portrait .contents.search {\n\tpadding: (16 / 2) + px (32 / 2) + px 0;\n\th2 {\n\t\tmargin-bottom: (32 / 2) + px;\n\t\ttext-align: center;\n\t\tfont-size: map-get($p-font-size, \'large\');\n\t\tfont-weight: bold;\n\t}\n}\n\n.landscape .contents.search {\n\tpadding: (128 / 2) + px 0 20px;\n\th2 {\n\t\tmargin-bottom: (16 / 2) + px;\n\t\tpadding-left: (32 / 2) + px;\n\t\twidth: (590 / 2) + px;\n\t\ttext-align: center;\n\t\tfont-size: map-get($l-font-size, \'ex-large\');\n\t\tfont-weight: bold;\n\t\tcolor: #959595;\n\t}\n}\n.landscape .is_pc .contents.search {\n\tpadding: 0 0 20px;\n\th2 {\n\t\tmargin: 0 auto 18px;\n\t\twidth: 663px;\n\t\tfont-size: 2.25rem;\n\t}\n}\n', '@charset "UTF-8";\n$l-font-color: #ff0000;\n\n$l-font-size: (\n\tex5-large: ((24 / 2) * 0.1) + rem,\n\tex4-large: ((26 / 2) * 0.1) + rem,\n\tex3-large: ((22 / 2) * 0.1) + rem,\n\tex2-large: ((28 / 2) * 0.1) + rem,\n\tex-large : ((20 / 2) * 0.1) + rem,\n\tlarge    : ((19 / 2) * 0.1) + rem,\n\tnormal   : ((18 / 2) * 0.1) + rem,\n\tsmall    : ((17 / 2) * 0.1) + rem,\n\tex-small : ((16 / 2) * 0.1) + rem\n);\n\n$p-font-size: (\n\tex3-large: ((36 / 2) * 0.1) + rem,\n\tex2-large: ((32 / 2) * 0.1) + rem,\n\tex-large : ((30 / 2) * 0.1) + rem,\n\tlarge    : ((28 / 2) * 0.1) + rem,\n\tnormal   : ((26 / 2) * 0.1) + rem,\n\tsmall    : ((24 / 2) * 0.1) + rem,\n\tex-small : ((20 / 2) * 0.1) + rem,\n\tex2-small: ((16 / 2) * 0.1) + rem,\n\tex3-small: ((22 / 2) * 0.1) + rem\n);\n']
            }]), n.exports = e
        },
        295: function(n, e, t) {
            "use strict";
            t.r(e);
            t(67), t(115), t(68);
            var a = t(124),
                r = t(6),
                s = {
                    name: "hashtag",
                    component: function() {
                        return t.e(21).then(t.bind(null, 170))
                    },
                    ref: "hashtag"
                },
                i = {
                    name: "tag-list",
                    props: {
                        parentPageType: {
                            required: !0
                        },
                        keyword: {
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            type: s,
                            resData: {},
                            postData: {
                                viewer_id: parseInt(viewer_id, 10),
                                sign: sign,
                                keyword: ""
                            },
                            tagListType: "tag"
                        }
                    },
                    mounted: function() {
                        this.keyword && (this.$data.postData.keyword = this.keyword), this.pageRender()
                    },
                    watch: {
                        keyword: function() {
                            this.$data.postData.keyword = this.keyword, this.pageRender()
                        }
                    },
                    methods: {
                        pageRender: function() {
                            var n = this.parentPageType,
                                e = this;
                            Object(a.a)(n, this.$data.postData, TYPE, (function(n) {
                                n.isError || (n.data ? e.$data.resData = n.data : r.a.$emit("apiError"))
                            }))
                        }
                    }
                },
                o = (t(274), t(17)),
                c = Object(o.a)(i, (function() {
                    var n = this,
                        e = n.$createElement,
                        t = n._self._c || e;
                    return t("div", {
                        staticClass: "wrapper"
                    }, [t("section", {
                        staticClass: "contents search"
                    }, [t("h2", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "trend" === n.parentPageType,
                            expression: "parentPageType === 'trend'"
                        }]
                    }, [n._v("現在のトレンド")]), n._v(" "), n.resData.list ? t(n.type.component, {
                        tag: "component",
                        attrs: {
                            list: n.resData.list,
                            "tag-list-type": n.tagListType
                        }
                    }) : n._e()], 1)])
                }), [], !1, null, "8a6ad8d6", null);
            e.default = c.exports
        }
    }
]);