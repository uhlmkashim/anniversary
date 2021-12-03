var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.owns = function(a, l) {
    return Object.prototype.hasOwnProperty.call(a, l)
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, l, p) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[l] = p.value;
    return a
};
$jscomp.getGlobal = function(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var l = 0; l < a.length; ++l) {
        var p = a[l];
        if (p && p.Math == Math) return p
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, l) {
    var p = $jscomp.propertyToPolyfillSymbol[l];
    if (null == p) return a[l];
    p = a[p];
    return void 0 !== p ? p : a[l]
};
$jscomp.polyfill = function(a, l, p, h) {
    l && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, l, p, h) : $jscomp.polyfillUnisolated(a, l, p, h))
};
$jscomp.polyfillUnisolated = function(a, l, p, h) {
    p = $jscomp.global;
    a = a.split(".");
    for (h = 0; h < a.length - 1; h++) {
        var e = a[h];
        if (!(e in p)) return;
        p = p[e]
    }
    a = a[a.length - 1];
    h = p[a];
    l = l(h);
    l != h && null != l && $jscomp.defineProperty(p, a, {
        configurable: !0,
        writable: !0,
        value: l
    })
};
$jscomp.polyfillIsolated = function(a, l, p, h) {
    var e = a.split(".");
    a = 1 === e.length;
    h = e[0];
    h = !a && h in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var b = 0; b < e.length - 1; b++) {
        var A = e[b];
        if (!(A in h)) return;
        h = h[A]
    }
    e = e[e.length - 1];
    p = $jscomp.IS_SYMBOL_NATIVE && "es6" === p ? h[e] : null;
    l = l(p);
    null != l && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {
        configurable: !0,
        writable: !0,
        value: l
    }) : l !== p && ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + e, e =
        $jscomp.propertyToPolyfillSymbol[e], $jscomp.defineProperty(h, e, {
            configurable: !0,
            writable: !0,
            value: l
        })))
};
$jscomp.assign = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign ? Object.assign : function(a, l) {
    for (var p = 1; p < arguments.length; p++) {
        var h = arguments[p];
        if (h)
            for (var e in h) $jscomp.owns(h, e) && (a[e] = h[e])
    }
    return a
};
$jscomp.polyfill("Object.assign", function(a) {
    return a || $jscomp.assign
}, "es6", "es3");
(function(a, l) {
    function p() {
        var c = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        c.gotoAndStop(this.currentFrame);
        c.paused = this.paused;
        c.framerate = this.framerate;
        return c
    }

    function h(c, d, f) {
        c = a.extend(c, a.MovieClip);
        c.clone = p;
        c.nominalBounds = d;
        c.frameBounds = f;
        return c
    }
    var e, b = {},
        A = {},
        k = {};
    b.ssMetadata = [];
    (b.btn_good = function() {
        this.initialize(k.episode_commu_memory_btn_good)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 132, 90);
    (b.btn_normal = function() {
        this.initialize(k.episode_commu_memory_btn_normal)
    }).prototype =
        e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 132, 90);
    (b.btn_perfect = function() {
        this.initialize(k.episode_commu_memory_btn_perfect)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 132, 90);
    (b.excellent = function() {
        this.initialize(k.episode_commu_memory_excellent)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 428, 160);
    (b.excellent_text = function() {
        this.initialize(k.episode_commu_memory_excellent_text)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0,
        156, 32);
    (b.excellent_text_b = function() {
        this.initialize(k.episode_commu_memory_excellent_text_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 156, 32);
    (b.excellent_text_w = function() {
        this.initialize(k.episode_commu_memory_excellent_text_w)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 156, 32);
    (b.gauge_bar = function() {
        this.initialize(k.episode_commu_memory_gauge_bar)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 540, 92);
    (b.heart_white = function() {
        this.initialize(k.episode_commu_memory_heart_white)
    }).prototype =
        e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 30, 30);
    (b.popup_base = function() {
        this.initialize(k.episode_commu_memory_popup_base)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 480, 206);
    (b.popup_close = function() {
        this.initialize(k.episode_commu_memory_popup_close)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 50, 50);
    (b.produce_gauge = function() {
        this.initialize(k.episode_commu_memory_produce_gauge)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 560,
        92);
    (b.replace_bg = function() {
        this.initialize(k.episode_commu_memory_replace_bg)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.replace_btn_commu = function() {
        this.initialize(k.episode_commu_memory_replace_btn_commu)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 560, 88);
    (b.replace_btn_good = function() {
        this.initialize(k.episode_commu_memory_replace_btn_good)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 176, 176);
    (b.replace_btn_good_gray = function() {
        this.initialize(k.episode_commu_memory_replace_btn_good_gray)
    }).prototype =
        e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 176, 176);
    (b.replace_btn_perfect = function() {
        this.initialize(k.episode_commu_memory_replace_btn_perfect)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 176, 176);
    (b.replace_btn_perfect_gray = function() {
        this.initialize(k.episode_commu_memory_replace_btn_perfect_gray)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 176, 176);
    (b.replace_btn_up = function() {
        this.initialize(k.episode_commu_memory_replace_btn_up)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 176, 176);
    (b.replace_btn_up_gray = function() {
        this.initialize(k.episode_commu_memory_replace_btn_up_gray)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 176, 176);
    (b.replace_character1_1 = function() {
        this.initialize(k.episode_commu_memory_replace_character1_1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_2 = function() {
        this.initialize(k.episode_commu_memory_replace_character1_2)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_3 = function() {
        this.initialize(k.episode_commu_memory_replace_character1_3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_4 = function() {
        this.initialize(k.episode_commu_memory_replace_character1_4)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_5 = function() {
        this.initialize(k.episode_commu_memory_replace_character1_5)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_6 = function() {
        this.initialize(k.episode_commu_memory_replace_character1_6)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_b = function() {
        this.initialize(k.episode_commu_memory_replace_character1_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_1 = function() {
        this.initialize(k.episode_commu_memory_replace_character2_1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_2 = function() {
        this.initialize(k.episode_commu_memory_replace_character2_2)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_3 = function() {
        this.initialize(k.episode_commu_memory_replace_character2_3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_4 = function() {
        this.initialize(k.episode_commu_memory_replace_character2_4)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_5 = function() {
        this.initialize(k.episode_commu_memory_replace_character2_5)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_6 = function() {
        this.initialize(k.episode_commu_memory_replace_character2_6)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_b = function() {
        this.initialize(k.episode_commu_memory_replace_character2_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_1 = function() {
        this.initialize(k.episode_commu_memory_replace_character3_1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_2 = function() {
        this.initialize(k.episode_commu_memory_replace_character3_2)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_3 = function() {
        this.initialize(k.episode_commu_memory_replace_character3_3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_4 = function() {
        this.initialize(k.episode_commu_memory_replace_character3_4)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_5 = function() {
        this.initialize(k.episode_commu_memory_replace_character3_5)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_6 = function() {
        this.initialize(k.episode_commu_memory_replace_character3_6)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_b = function() {
        this.initialize(k.episode_commu_memory_replace_character3_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_1 = function() {
        this.initialize(k.episode_commu_memory_replace_character4_1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_2 = function() {
        this.initialize(k.episode_commu_memory_replace_character4_2)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_3 = function() {
        this.initialize(k.episode_commu_memory_replace_character4_3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_4 = function() {
        this.initialize(k.episode_commu_memory_replace_character4_4)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_5 = function() {
        this.initialize(k.episode_commu_memory_replace_character4_5)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_6 = function() {
        this.initialize(k.episode_commu_memory_replace_character4_6)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_b = function() {
        this.initialize(k.episode_commu_memory_replace_character4_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_1 = function() {
        this.initialize(k.episode_commu_memory_replace_character5_1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_2 = function() {
        this.initialize(k.episode_commu_memory_replace_character5_2)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_3 = function() {
        this.initialize(k.episode_commu_memory_replace_character5_3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_4 = function() {
        this.initialize(k.episode_commu_memory_replace_character5_4)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_5 = function() {
        this.initialize(k.episode_commu_memory_replace_character5_5)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_6 = function() {
        this.initialize(k.episode_commu_memory_replace_character5_6)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_b = function() {
        this.initialize(k.episode_commu_memory_replace_character5_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_1 = function() {
        this.initialize(k.episode_commu_memory_replace_character6_1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_2 = function() {
        this.initialize(k.episode_commu_memory_replace_character6_2)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_3 = function() {
        this.initialize(k.episode_commu_memory_replace_character6_3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_4 = function() {
        this.initialize(k.episode_commu_memory_replace_character6_4)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_5 = function() {
        this.initialize(k.episode_commu_memory_replace_character6_5)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_6 = function() {
        this.initialize(k.episode_commu_memory_replace_character6_6)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_b = function() {
        this.initialize(k.episode_commu_memory_replace_character6_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_1 = function() {
        this.initialize(k.episode_commu_memory_replace_character7_1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_2 = function() {
        this.initialize(k.episode_commu_memory_replace_character7_2)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_3 = function() {
        this.initialize(k.episode_commu_memory_replace_character7_3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_4 = function() {
        this.initialize(k.episode_commu_memory_replace_character7_4)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_5 = function() {
        this.initialize(k.episode_commu_memory_replace_character7_5)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_6 = function() {
        this.initialize(k.episode_commu_memory_replace_character7_6)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_b = function() {
        this.initialize(k.episode_commu_memory_replace_character7_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_1 = function() {
        this.initialize(k.episode_commu_memory_replace_character8_1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_2 = function() {
        this.initialize(k.episode_commu_memory_replace_character8_2)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_3 = function() {
        this.initialize(k.episode_commu_memory_replace_character8_3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_4 = function() {
        this.initialize(k.episode_commu_memory_replace_character8_4)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_5 = function() {
        this.initialize(k.episode_commu_memory_replace_character8_5)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_6 = function() {
        this.initialize(k.episode_commu_memory_replace_character8_6)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_b = function() {
        this.initialize(k.episode_commu_memory_replace_character8_b)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.sp_c_event = function() {
        this.initialize(k.episode_commu_memory_sp_c_event)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 128, 96);
    (b.sp_ki = function() {
        this.initialize(k.episode_commu_memory_sp_ki)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 40, 40);
    (b.sp_textRes1 = function() {
        this.initialize(k.episode_commu_memory_sp_textRes1)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_textRes2 = function() {
        this.initialize(k.episode_commu_memory_sp_textRes2)
    }).prototype =
        e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_textRes3 = function() {
        this.initialize(k.episode_commu_memory_sp_textRes3)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_txt_appear = function() {
        this.initialize(k.episode_commu_memory_sp_txt_appear)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 183, 82);
    (b.sp_txt_commu = function() {
        this.initialize(k.episode_commu_memory_sp_txt_commu)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0,
        0, 304, 61);
    (b.sp_txt_episode = function() {
        this.initialize(k.episode_commu_memory_sp_txt_episode)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 224, 58);
    (b.star = function() {
        this.initialize(k.episode_commu_memory_star)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.star_dark = function() {
        this.initialize(k.episode_commu_memory_star_dark)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 64, 60);
    (b.star_img = function() {
        this.initialize(k.episode_commu_memory_star_img)
    }).prototype =
        e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 64, 60);
    (b.star_light = function() {
        this.initialize(k.episode_commu_memory_star_light)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 64, 60);
    (b.star_line = function() {
        this.initialize(k.episode_commu_memory_star_line)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 412, 28);
    (b.tie_sp = function() {
        this.initialize(k.episode_commu_memory_tie_sp)
    }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 480, 64);
    (b.upper_base2 =
        function() {
            this.initialize(k.episode_commu_memory_upper_base2)
        }).prototype = e = new a.Bitmap;
    e.nominalBounds = new a.Rectangle(0, 0, 196, 80);
    (b.white_rect_02 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AzwXNMAAAguZMAnhAAAMAAAAuZg");
        this.shape.setTransform(126.5, 148.475);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.white_rect_02, new a.Rectangle(0, 0, 253, 297), null);
    (b.perfect_white = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AC6FVIgFAAIgKAAQgDADgCAAIg8AEQgVACgJgJIgFAAQgkgHAGgwQgLgDABAIQACArggAHIgBADQgYAGgOgJIgFAAIgKAAIgBADQgZAGgOgJQgSgIgRAJIgGACQgaAEgSgHQgDADgCAAIg8AEQgVACgJgJIgFABQgLACABgIIgFAAQgQgEABgVQgDgCAAgDQABgNgNADQgLACgEAIIAAAFQABAVgQAEQgJAJgQACQgVADgJgJIgFgBQgdgPAEgxIAFAAIgBgEQgIgKAEgVQAIgLgBgYIAAgFQACgfAGgYIAAgFIAAgKQAIgMAMgHIAFgBIAAgFIAFAAIAFAAIAAgFQAvAAAwADIAAACQAFAAAEACQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAIAKAAIAFAAIAAgFIAFAAIAFAAIAAgFQAqAAArADIAAACQAFAAAEACQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAIAFAAIAFAAIAAgFIAFAAIAFAAIAAgFQAtAAAtADIAAACQAFAAAEACQAAABAAAAQAAAAAAAAQAAABAAAAQABABAAAAIAKAAIAFAAIAAgFIAFAAIAFAAIAAgFQApAAArADIAAACQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIABADIAFAAIAFAAIAAgFIAFAAIAFAAIAAgFQAqAAArADIAAACQAFAAAEACQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAIAFAAIAFAAIAAgFIAFAAIAFAAIAAgFQAvAAAwADIAAACQAFAAAEACQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAIAFAAIAAgFIAFAAIAFAAIAAgFQAyAAAyADIAAACQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIABADQAagBABAaIABAFQABAOgEALQAIAHgCASQgCAOgHAJQgNARgYAFIAAAKIAAAFQgBAggGAcQgEAbgdADIgBADQgfAHgNgPIgFgBIgEgBQgMAGgTABQgDADgCAAIhBAEIgHABQgTAAgJgIgAKGA9IgFABQgLACABgIQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgJgJgHgKIgDAAQgCgUAAgTIAAgFIAAgtIAAgFIAAgoIAFAAIAAgFIAAgFIAAgoIAFAAIAAgFIAAgFIAAgFIAAgtIAFAAIAAgFIAAgFIAAgjIAFAAIAAgFIAAgFIAAgFIAAgjIAFAAIAAgFQAHgUAXgEIAFgBIAAgFIAAgFQApgDAcAKQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAKADAEAIIABAEQAIACABAIIABAFQAIAJAAAVQAAAOgIABQAxAnAoAvIABAEQAjAIARAYQAHAJgBAOIgCALIgBAJQAIAJgGAVIgCAAIAAAFQADAOgIABIgBAEIgOALIgBADQgJACgKAAQgOAJgaAAQgaAAgOgJIgFAAQgKgCgFgIIgDAAQgCgKgFgFIgEgBQgEgGgHAMIAAAUIAAAFIAAAFQAGA1gfAQIgBADQgHACgHAAQgCAJgNAAQgaAAgOgJgAjGA9IgFABQgLACABgIIgEgBIgGgJQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgKgSADgeIAAgFIAAgKIAAgFIAAgUQATgfAUgdIABgFIAAgFQAQgVANgYIABgFIgFAAIhVAAIgDAAQABALgIgBIAEAGIABAEQAAAPgCAPIgBAFQAAAjggAAIAAADQiHACiHAAIAAAKIAAAFQANATgHAWIgBAEQAIANgGAaIgCAAIgBAEQgLAOgSAHQgDADgCAAIhBAEQgaACgOgJIgFgBQgQgIgJgQIgDAAQgCgUAAgTIAFAAIgBgFIgEgUQAIgGgBgTQAAgCACgDIAGgKIABgEQAKgPgQgGQgEAMgEAJIgFAIQgIANgDASQgEAWgMANIAAAEIgBAFQgGAVgNAOIgBAFQgBALgNgBQAAABAAABQgBAAAAAAQAAABAAAAQAAAAAAAAQgEACgFAAQgMAJgXAAQgVAAgJgJIgFgBIgFgEIgFAAQgOgEgBgQIgDAAQgCgUAAgTIAFAAIgBgEQgIgMAEgYIATgjIABgFIAAgFIAAgFIAJgLIABgEIAAgFQANgVAJgcIADgBIAAgFIAAgFIAEgBIABgEIAAgFIAAgFQAIABgDgLIAAgFIAAgFIAAgeIAFAAIgBgEQgIgMAEgYQAGgNAIgMQAGgJAPgBIAAgFQAyAAAyADIAAACQAFAAAEACQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAPAJACgdQAAgCACgDQAJgLAWABIAAgFQAjAAAjADIAAACQAaABAIAUIABAEQAIAOAAAaQAAAOgIABIAAAFQADAVgIAJIAAAKIAAAFIAFAAIAFAAIAFAAIAAgFQBwAABxADIAAACIAFAAIAFAAIAAgFIAAgPIAAgFIAAgjIAFAAIAAgFIAAgKIAUgOIAFgBIAAgFIAFAAIAFAAIAAgFQCCAACBADIAAACQAFAAAEACQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAFAAAEACQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAWAKgEAjIgCAGQgCAHALgDIAAgFQBpAABpADIAAACQAhAFACAjIAAAFIAAAFIAAAFQAdgkAXgrQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAABAAIAAgFIAAgFIAdgpIABgEIAAgFQAKgHAPgCIAFgBIAAgFIAAgFQAbAAAcADIAAACIAAAFQAdABAFAYIABAFIAFAAQAeAAAeADIAAACQAFAAAEACQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAQANACAGAJIABAEQAMAIgEAWIgBAKQAAAFADAFIAAAFQACAqgRAXIAAAFQADALgIgBIAAAFQABAVgFAPQgEAJgFAHQgnA4grAzQgDADgBADQgKAcgfAGQgRAJgcAAQgaAAgOgJQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAgBQgbgLAIgtIAAgFIAAgjIAEgFIABgFIgFABQgYADgLgJIgFAAIgDAAQABAQgIAEIgBAFIgEAFIAEAGIABAEIAAAFQAFA5gtAHQgRAJgcgBQhGgDhGADQgaABgOgJQgXgBgHgSIgJgVQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgCgEAAgFQAIgDgDgQIAAgFIAAgFIAAgPQAIgEgBgQIADAAIAAgFIAAgFIAOgJIAFgBIAAgFIAFAAIAFAAIAAgFIAyAAIAFAAIAAgFIAAgFIgFAAQg5AEgDgxQgBAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgaAsIgBAFIgOAUIgBAFQgMAZgRAUIgBAFQgCAKgHAFIgBAFQgFALgJAIIgBAFQgDAOgLAGIgBAFQgBALgNgBQAAABAAABQgBAAAAAAQAAABAAAAQAAAAAAAAQgEACgFAAQgMAJgXAAQgYAAgLgJg");
        this.shape.setTransform(91.0435, 34.8613);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.perfect_white, new a.Rectangle(0, 0, 182.1, 69.7), null);
    (b.num_pink = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(11));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF407E").s().p("AgtA9QgPgVAAgoQAAgXAGgTQAHgSANgKQAOgLAUAAQAVAAANALQAOAKAGASQAHATAAAXQAAAZgHATQgGASgOAKQgNAKgVAAQgfAAgOgVgAgRglQgGAOAAAXQAAAZAGANQAGAOALAAQAMAAAGgOQAGgNAAgZQAAgXgGgNQgGgOgMgBQgMABgFANg");
        this.shape.setTransform(8.9242, 15.6);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FF407E").s().p("AAABOIAAhoIgbAKIgJgcQANgFAIgFQAIgFAFgGQAEgGACgGIAhAAIAACbg");
        this.shape_1.setTransform(7.9, 15.6);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FF407E").s().p("Ag4BQIAAgQQABgPAGgMQAHgMAKgLQAKgJAOgGQAKgGAHgFQAGgFACgFQACgFABgFQAAgIgGgEQgEgEgKgBQgJABgGAGQgGAHAAAMIghgIQABgPAGgLQAIgKANgGQALgGAQAAQASAAAMAGQAMAFAHALQAGAKABAOQgBALgEAJQgEAJgJAIQgKAIgQAIIgOAIQgGAFgEAGQgEAFAAAFIBHAAIAAAfg");
        this.shape_2.setTransform(9.1,
            15.4);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FF407E").s().p("AgoBIQgOgKgFgRIAfgOQADAKAHAGQAHAGAJAAQAGAAAGgDQAGgDAEgEQAEgFAAgFQAAgLgHgEQgHgGgMAAIgUAAIAAgeIARAAQAGAAAFgCQAGgCADgEQADgEAAgFQAAgIgFgFQgFgEgIAAQgJAAgGAFQgGAFgBAIIgfgKQACgKAHgIQAGgJAMgFQALgFAQAAQARAAAMAFQAMAFAGAKQAHAJAAALQgBAPgHAJQgHAJgNADQAJACAHAEQAHAEAFAIQAFAJAAANQAAAWgPANQgQAMgeAAQgYAAgPgKg");
        this.shape_3.setTransform(8.575, 15.6);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#FF407E").s().p("AAHBOIAAgfIhEAAIAAgfIA+hdIAoAAIAABdIAVAAIAAAfIgVAAIAAAfgAgbAQIAiAAIAAgyg");
        this.shape_4.setTransform(8.925, 15.6);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#FF407E").s().p("AgnBGQgOgMgGgSIAhgLQADALAHAEQAIAGAIAAQAHAAAGgDQAFgDADgGQADgGAAgIQAAgJgDgGQgDgGgFgDQgGgBgHAAQgHAAgFADQgHAEgDAGIgigGIAHhVIBjAAIAAAfIhEAAIgDAeIABAAQADgFAIgDQAHgDAIAAQAPAAAMAGQAMAFAIAMQAHAMAAASQAAASgIAMQgHANgNAGQgOAHgSAAQgXAAgQgKg");
        this.shape_5.setTransform(8.9, 15.8);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#FF407E").s().p("AgeBKQgOgIgIgSQgIgSAAgcQAAgcAIgTQAIgTAOgIQAPgJATAAQAUAAAOAHQANAIAIAQIgbAQQgDgKgIgEQgHgEgLAAQgMAAgJAKQgHALgBAWQAFgGAIgFQAIgEAKAAQAOAAANAFQANAGAIALQAHALABASQAAARgHAMQgHANgNAHQgNAGgSAAIgDAAQgQAAgOgIgAgOAIQgGAFgDAJQABAPAHAJQAHAIAKAAQAGAAAGgDQAGgCADgGQADgGAAgIQAAgNgHgGQgHgHgKAAQgJAAgHAFg");
        this.shape_6.setTransform(8.9, 15.5764);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#FF407E").s().p("AgjBOQAAgSAEgSQAEgSAHgRQAGgQAJgOQAHgNAJgJIhCAAIAAggIBvAAIAAAZQgOALgKAQQgKAOgHASQgHARgDATQgEASAAARg");
        this.shape_7.setTransform(9.15, 15.6);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#FF407E").s().p("AgfBMQgOgHgIgKQgIgLABgOQAAgKADgHQACgJAGgGQAGgFAKgDQgLgFgEgJQgFgJAAgMQAAgMAHgJQAHgJAMgFQANgFAOAAQAQAAAMAEQAMAGAIAJQAGAJAAAMQABAMgFAJQgEAJgMAFQAPAFAHAKQAFALAAAOQAAANgHALQgIALgNAGQgOAHgTAAQgRAAgOgGgAgRARQgHAEAAAKQAAAHADAGQAEAFAGACQAFADAGAAQAHAAAGgDQAFgCAEgFQADgGAAgHQAAgJgHgFQgHgGgLAAQgKAAgHAGgAgNgzQgHAFAAAIQABAIAFAFQAGAEAIAAQAJAAAGgEQAGgFAAgIQAAgIgGgFQgGgEgJAAQgIAAgFAEg");
        this.shape_8.setTransform(8.9, 15.6);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#FF407E").s().p("AgDBSQgVAAgNgHQgOgIgHgQIAbgQQADAJAIAFQAHAFALAAQANAAAIgLQAHgLABgWQgFAHgIAEQgJAFgJAAQgPAAgMgGQgNgFgIgMQgIgKAAgSQAAgRAHgNQAHgMANgHQANgHASAAQASAAAPAIQAOAJAIARQAIASAAAcQAAAdgIATQgIASgOAJQgOAIgSAAIgCAAgAgNgyQgGADgDAFQgDAGAAAIQAAANAHAGQAHAHAKAAQAJAAAHgFQAHgFACgJQgBgPgHgIQgHgIgKgBQgGAAgGADg");
        this.shape_9.setTransform(8.775, 15.5763);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
                state: [{
                    t: this.shape_1
                }]
            },
            1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, 0, 17.8, 29.9);
    (b.num_black = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(11));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AgtA9QgPgVAAgoQAAgXAGgTQAHgSANgKQAOgLAUAAQAVAAANALQAOAKAGASQAHATAAAXQAAAZgHATQgGASgOAKQgNAKgVAAQgfAAgOgVgAgRglQgGAOAAAXQAAAZAGANQAGAOALAAQAMAAAGgOQAGgNAAgZQAAgXgGgNQgGgOgMgBQgMABgFANg");
        this.shape.setTransform(8.9242, 15.6);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#000000").s().p("AAABOIAAhoIgbAKIgJgcQANgFAIgFQAIgFAFgGQAEgGACgGIAhAAIAACbg");
        this.shape_1.setTransform(7.9, 15.6);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#000000").s().p("Ag4BQIAAgQQABgPAGgMQAHgMAKgLQAKgJAOgGQAKgGAHgFQAGgFACgFQACgFABgFQAAgIgGgEQgEgEgKgBQgJABgGAGQgGAHAAAMIghgIQABgPAGgLQAIgKANgGQALgGAQAAQASAAAMAGQAMAFAHALQAGAKABAOQgBALgEAJQgEAJgJAIQgKAIgQAIIgOAIQgGAFgEAGQgEAFAAAFIBHAAIAAAfg");
        this.shape_2.setTransform(9.1, 15.4);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#000000").s().p("AgoBIQgOgKgFgRIAfgOQADAKAHAGQAHAGAJAAQAGAAAGgDQAGgDAEgEQAEgFAAgFQAAgLgHgEQgHgGgMAAIgUAAIAAgeIARAAQAGAAAFgCQAGgCADgEQADgEAAgFQAAgIgFgFQgFgEgIAAQgJAAgGAFQgGAFgBAIIgfgKQACgKAHgIQAGgJAMgFQALgFAQAAQARAAAMAFQAMAFAGAKQAHAJAAALQgBAPgHAJQgHAJgNADQAJACAHAEQAHAEAFAIQAFAJAAANQAAAWgPANQgQAMgeAAQgYAAgPgKg");
        this.shape_3.setTransform(8.575, 15.6);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#000000").s().p("AAHBOIAAgfIhEAAIAAgfIA+hdIAoAAIAABdIAVAAIAAAfIgVAAIAAAfgAgbAQIAiAAIAAgyg");
        this.shape_4.setTransform(8.925, 15.6);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#000000").s().p("AgnBGQgOgMgGgSIAhgLQADALAHAEQAIAGAIAAQAHAAAGgDQAFgDADgGQADgGAAgIQAAgJgDgGQgDgGgFgDQgGgBgHAAQgHAAgFADQgHAEgDAGIgigGIAHhVIBjAAIAAAfIhEAAIgDAeIABAAQADgFAIgDQAHgDAIAAQAPAAAMAGQAMAFAIAMQAHAMAAASQAAASgIAMQgHANgNAGQgOAHgSAAQgXAAgQgKg");
        this.shape_5.setTransform(8.9, 15.8);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#000000").s().p("AgeBKQgOgIgIgSQgIgSAAgcQAAgcAIgTQAIgTAOgIQAPgJATAAQAUAAAOAHQANAIAIAQIgbAQQgDgKgIgEQgHgEgLAAQgMAAgJAKQgHALgBAWQAFgGAIgFQAIgEAKAAQAOAAANAFQANAGAIALQAHALABASQAAARgHAMQgHANgNAHQgNAGgSAAIgDAAQgQAAgOgIgAgOAIQgGAFgDAJQABAPAHAJQAHAIAKAAQAGAAAGgDQAGgCADgGQADgGAAgIQAAgNgHgGQgHgHgKAAQgJAAgHAFg");
        this.shape_6.setTransform(8.9, 15.5764);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#000000").s().p("AgjBOQAAgSAEgSQAEgSAHgRQAGgQAJgOQAHgNAJgJIhCAAIAAggIBvAAIAAAZQgOALgKAQQgKAOgHASQgHARgDATQgEASAAARg");
        this.shape_7.setTransform(9.15, 15.6);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#000000").s().p("AgfBMQgOgHgIgKQgIgLABgOQAAgKADgHQACgJAGgGQAGgFAKgDQgLgFgEgJQgFgJAAgMQAAgMAHgJQAHgJAMgFQANgFAOAAQAQAAAMAEQAMAGAIAJQAGAJAAAMQABAMgFAJQgEAJgMAFQAPAFAHAKQAFALAAAOQAAANgHALQgIALgNAGQgOAHgTAAQgRAAgOgGgAgRARQgHAEAAAKQAAAHADAGQAEAFAGACQAFADAGAAQAHAAAGgDQAFgCAEgFQADgGAAgHQAAgJgHgFQgHgGgLAAQgKAAgHAGgAgNgzQgHAFAAAIQABAIAFAFQAGAEAIAAQAJAAAGgEQAGgFAAgIQAAgIgGgFQgGgEgJAAQgIAAgFAEg");
        this.shape_8.setTransform(8.9, 15.6);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#000000").s().p("AgDBSQgVAAgNgHQgOgIgHgQIAbgQQADAJAIAFQAHAFALAAQANAAAIgLQAHgLABgWQgFAHgIAEQgJAFgJAAQgPAAgMgGQgNgFgIgMQgIgKAAgSQAAgRAHgNQAHgMANgHQANgHASAAQASAAAPAIQAOAJAIARQAIASAAAcQAAAdgIATQgIASgOAJQgOAIgSAAIgCAAgAgNgyQgGADgDAFQgDAGAAAIQAAANAHAGQAHAHAKAAQAJAAAHgFQAHgFACgJQgBgPgHgIQgHgIgKgBQgGAAgGADg");
        this.shape_9.setTransform(8.775, 15.5763);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
                state: [{
                    t: this.shape_1
                }]
            },
            1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, 0, 17.8, 29.9);
    (b.num_base = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(11));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AgfArQgLgQABgbQAAgQAEgNQAEgNAKgHQAJgIAOAAQAPAAAJAIQAKAHAEANQAFANAAAQQAAARgFANQgEAOgKAGQgJAIgPgBQgVABgKgPgAgMgZQgEAJAAAQQAAASAEAJQAFAJAHAAQAIAAAFgJQAEgJAAgSQAAgQgEgJQgEgKgJAAQgIAAgEAKg");
        this.shape.setTransform(6.8489, 11.55);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#000000").s().p("AAAA3IAAhJIgTAHIgGgUQAJgDAGgDQAFgEAEgEQACgFABgDIAYAAIAABsg");
        this.shape_1.setTransform(6.15, 11.55);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#000000").s().p("AgmA4IAAgMQAAgKAEgJQAFgIAHgHQAHgHAKgEIALgHQAEgEACgDQACgDAAgDQAAgHgEgCQgEgEgGAAQgGAAgEAFQgEAFgBAIIgWgFQAAgKAFgIQAFgHAJgFQAIgEALAAQAMAAAJAEQAIAEAFAIQAEAHAAAIQABAIgDAHQgDAHgHAEQgHAGgKAGIgKAGQgFADgDAEQgCADgBAEIAyAAIAAAWg");
        this.shape_2.setTransform(6.9786, 11.4);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#000000").s().p("AgbAyQgLgGgDgNIAWgJQACAHAEAEQAGADAGABQAEgBAFgBQAEgCACgDQADgDAAgEQAAgIgFgDQgFgEgIAAIgOAAIAAgUIAMAAQADAAAEgCQAFgBACgDQACgDAAgEQAAgFgDgDQgEgDgGAAQgGAAgEADQgEAEgBAFIgVgHQABgHAEgFQAFgGAIgEQAIgEALAAQAMAAAIAEQAIAEAFAGQAEAGAAAJQAAAKgFAGQgFAHgJABQAGACAFACQAFAEADAGQADAFABAJQAAAQgLAIQgLAKgUgBQgRABgKgIg");
        this.shape_3.setTransform(6.6, 11.55);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#000000").s().p("AAFA3IAAgXIgvAAIAAgVIArhAIAcAAIAABAIAOAAIAAAVIgOAAIAAAXgAgTALIAYAAIAAgjg");
        this.shape_4.setTransform(6.85, 11.55);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#000000").s().p("AgaAxQgLgIgEgNIAYgHQABAGAFAEQAFAEAGAAQAEAAAFgDQADgBACgFQADgDAAgHQAAgFgDgFQgCgEgDgCQgFgBgEAAQgFAAgEACQgEADgCAEIgYgEIAFg7IBEAAIAAAVIguAAIgCAVIAAAAQADgDAFgCQAFgCAFAAQALAAAIAEQAIAEAGAIQAFAHAAANQAAANgFAJQgGAJgJAEQgKAFgMAAQgQAAgKgHg");
        this.shape_5.setTransform(6.85, 11.7);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#000000").s().p("AgUA0QgKgHgGgMQgGgMAAgUQAAgUAGgNQAGgMAKgHQAKgFANgBQAOABAJAEQAKAGAFALIgTALQgCgHgFgDQgFgCgIAAQgIAAgGAGQgGAIAAAQQADgFAGgDQAGgDAGAAQALAAAJAEQAJADAFAJQAFAHABANQAAAMgFAIQgFAJgJAFQgJAEgNAAQgNAAgJgFgAgKAFQgEAEgCAGQABALAFAFQAFAHAGAAQAFAAAEgCQAEgCACgEQACgEAAgGQAAgJgFgEQgEgFgIAAQgGAAgFADg");
        this.shape_6.setTransform(6.825, 11.55);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#000000").s().p("AgYA3QAAgNADgNQADgMAFgMQAEgLAGgKQAFgJAFgHIgtAAIAAgVIBOAAIAAARQgLAIgGALQgHAKgGALQgEANgCANQgDANAAAMg");
        this.shape_7.setTransform(7, 11.55);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#000000").s().p("AgWA1QgJgFgGgHQgFgIAAgKQAAgGACgGQACgFAEgFQAEgDAHgCQgIgDgDgHQgDgGAAgIQAAgJAFgGQAFgGAJgEQAIgEAKAAQALAAAJAEQAIADAFAHQAFAGAAAJQAAAIgDAGQgDAHgIADQAKADAFAHQAEAIAAAJQAAAKgFAHQgFAJgKAEQgKAFgNgBQgMABgKgFgAgMALQgEAEgBAHQABAFACADQACAEAEACQAEACAEAAQAFgBAEgBQAEgCACgEQADgDAAgFQAAgHgFgEQgFgDgIAAQgHAAgFADgAgJgjQgEADAAAGQAAAFAEAEQAEADAFAAQAHAAAEgDQAEgEAAgFQAAgGgEgDQgFgEgGAAQgFAAgEAEg");
        this.shape_8.setTransform(6.825, 11.55);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#000000").s().p("AgaA0QgKgFgEgLIASgMQADAHAFADQAFADAHABQAKgBAFgHQAGgIAAgPQgEAEgFADQgGAEgHAAQgKgBgJgDQgJgEgFgIQgGgHABgMQgBgMAFgKQAFgIAJgFQAJgFANAAQAMAAALAGQAKAGAFAMQAGANgBATQABAUgGANQgFANgKAHQgLAFgNAAQgOABgKgGgAgJgjQgEACgCAEQgDAEAAAGQABAIAFAFQAEAFAHAAQAHAAAFgEQAEgEACgGQgBgKgFgGQgFgGgHAAQgEAAgEACg");
        this.shape_9.setTransform(6.75, 11.55);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
                state: [{
                    t: this.shape_1
                }]
            },
            1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, 0, 13.7, 22.1);
    (b.good_bk = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAWFxQgOgDgJgIIgDgCQAAALgNgDIgFAFQgCACgDAAIhLAFQgVABgJgIQgOgBgGgJIgCgDQgMALgVACQgCACgDAAIg8AFQgXABgMgIIgFgBQgSgDgHgQIgCgBQgCgNgGgGQAIAAgCgKIgBgFIAAgFIAAgtIAFAAIAAgFIAAgeQAJgJgBgVIAAgKQgBgmAhgCIAAgFQA1AAA0ACIAAADQASACAKAKIACgDQAGgJAOAAIAAgFIBBAAIAFAAIAAgDQghgJAIgwIAAgFIgFgUQALgPAGgUIADgGIAFgJIgFAAQgaADgOgIIgFgBQgdgGgBglIgCgBQgDgVgFgSIAAgFIgCgBIgIgsIgCgBIgIgYIAEgGIABgEIAAgFIAAgPIAAgFIAAgKIAAgFIAAgKIAagTIAEgBIAAgFIAFAAIAFAAIAAgFQAeAAAeACIAAADQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAFAAIAFAAIAAgFIAFAAIAFAAIAAgFQAeAAAdACIAAADQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAKAAIAFAAIAAgFIAFAAIAFAAIAAgFQA6AAA5ACIAAADQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEQAYABAGATIAAAFQAJALgDAYIgBAFQADAWgHANIgmBHIgLARQgLARgIAVQgMAagQAVIgDAGQgUA4glAnIAAAFQAtAAAtACIAAADQAVACAJAIIADgDQACgCAFgCIAGgCIAEgBIAAgFIBfAAIAFAAIAAgFIgFgBQgqgEAHg3IAAgFQAAgKgFgFIAEgBIABgEIAAgFIAAgoIAFAAIAAgFIAAgEIAAgFIAAgjIAFAAIAAgFIAAgKIAAgFIAAgoIAFAAIAAgFIAAgFIAAgFIAAgoIAFAAIAAgFIAAgFIAAgjIAFAAIAAgFIAAgPIAAgFIAAgjIAFAAIAAgFIAAgoIAJgQQAIgPAXABIAAgFQAhAAAgACIAAADQAfgBAIAVIABAFQAJAOgDAaIgBAFIAAAjIAAAFQAVADgDgYIAAgJQADgWAEgSQADgPAFgOQAGgSAVgFIAKgBQASgCAMAFIAAgFQAUAAAUACIAAADQApABgBAsIAAAFIABAFQADAVgJAJIABAFQADASgJAHIAAAKIAAAFQACAkgNAXQgLAVghAAQAMAVAYAFQAbAGAKATQANAWgLAWQAJAGgFASIgBAGQgCAjgfAEIAAACQgKADgKAAQgQAIgdAAQgaAAgOgIIgFAAQgKADAAgIQgfgTgTgeIgDgCQgHAEgFAIIAAAFIAAAFIABAEQADAagJAOIAAAFIABAFQAJBDgoASIAAACQglADgmAAIAAAFQAUAAAGAOIADAGQABAFAAAFQAJALgCAYQgCAUAAAUIAAAFQABAcgLARQAAAHgBAHIgCALQgDAkgiAEQgCACgDAAIg8AFQgXABgMgIIgFAAQgFAAgCgDQgLgOgRAMIgFAFQgCACgDAAIhLAFIgEAAQgSAAgIgHgAn2CLIgFgBQgjgJAFgyIAAgFIgFgUQAUgjAYgeIABgEIgFAAQgQAIgdAAQgaAAgOgIIgEgBQgegKAEgsIAAgFQABgOgGgGQA1hfA4hbQALgTANgRIAEgHQAIgOAUgCIAAgFQAmAAAlACIAAADQAbADAHAWIABAFQAFAHAHAFIABgCQgBgLAIABIAAgFIAAgZIANgTQAEgJANgCIAAgFQAwAAAvACIAAADQAbAIADAgIAAAFIABAFQADAVgJAJIAAAFIABAFQADAagJAOIAAAFQAEAngdAGQgLAJgDAQIgJAiQgCAIgFAIIAAAFQgBAVgJAOQAAAFgCADQg5BZhCBSIgDAFQgIAagdAEQgCACgDAAIg3AFIgGAAQgQAAgIgHg");
        this.shape.setTransform(62.2676, 37.6303);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.good_bk, new a.Rectangle(0, 0, 124.6, 75.3), null);
    (b.ex_white = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AmgFzIgFgBQgagOgdAPQgDACgCAAIhpAFQgYABgLgIQgSgCgNgHQgfgRACgxQAIgMgBgXIAAgFQACgfAEgZIADgTQACgOAHgLIAAgFIAAgFQAIgCgBgNIADAAQAOgQAVgIIAFgBIAAgFQA3AAA3ACIAAADIAKAAIAFAAIAAgFQAWAAAWACIABADIAFAAQAPAGAUgGIAFAAIAoAAIAFAAIAAgFQA+AAA/ACIAAADIAKAAIAFAAIAAgFQA3AAA3ACIAAADIAPAAIAFAAIAAgFQAfgBAXAIQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAPAKAIAPIABAFQANADgBgNIADAAQAKgIAJgJIABgDIAAgFQAvgNAlAUQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAHANAOAEQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBQAJgVAbgDIAAgFQA3AAA3ACIAAADIAFAAIAFAAIAAgFQAfgBAXAIQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAUgFIAFAAIAAgFQBSAABTACIAAADQAXAEALAQIAGAKQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEQARAdgKAkQgJAfghAEQgIAMAAAXIgCAjQgBAOgEALQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgMAdgjAFIgBACQgZAGgOgIIgFgBQgUgIgUAJIgBACQgZAGgOgIIgFAAIgoAAIgBACQgZAGgOgIIgFAAQgDACgCAAIhBAFQgaABgOgIIgFAAIgKAAQgDACgCAAIhBAFQgaABgOgIIgFAAIgZAAQgDACgCAAIhAAFQgaABgOgIIgFAAIgKAAQgDACgCAAIhBAFQgaABgOgIIgFAAIgPAAQgDACgCAAIhVAFQgVABgJgIIgFAAIgFAAQgCAIgNAAQgVAAgJgIgAKcBRIgFgBIgGgCIgSgFQgNgFgKgKQgRgSgBgiQgUAUgRAXQgQAWggAFQgDACgCAAIhkAFQgVABgJgIIgegLQgngPAEg6QAIAAgDgKIAAgFQgSAWgNAaQgTApgyAKQgDACgCAAIh4AFQgaABgOgIQgHgGgNgCIgFABQgQAEgSADQgOAIgagBQhGgChGACQgaABgOgIQgZgDgPgMIgGgFQgUgPgBgeQgCgXAEgVQADgYgIgLQgbAmgdAjIgDAGQgYAvgvAXIgFAAQg2ABgugGQgCgJgIgDQgIgDgFgHIgCgDIgoAKQgDACgCAAQhBADhBAAQhJAAhIACQgYABgLgIIgFgBQg3gKgFg6QAIgEgBgQIADAAIAAgFIAAgKQAIAAgBgKIADAAIAAgFIAAgFQAOgQAVgIIAJgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgFIBBAAIAFAAIAAgFQAJgOgEgaIAAgFIAAgDQgaABgOgIQgegGgQgTIgDgGQgGgTgFgUQAIgJgBgVIABgFQABgOALgBIAAgFQAOgQAVgIIAJgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgFQCMAACMACIAFAAQANgBACAJQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEQANgBAEAIIADgBIAFgBIAbgqIAFgHIAFgIQAIgQAZADIAAgFIAFAAIAAgFQAeAAAeACIAAADQAFAAAEACQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAaADAIAWIABAFQAYAIAkgFQAQgCAEAJQAUACAHAPIABgDIALgZQAKgWAfgCIAAgFQAlAAAmACIAAADQAaAJAIAaIABAFQAIAEgCAQQgCAIALgBQAPgCAPAAIAAgFQAlAAAkgFIADgEQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAAgFIAAgKQAPgNARgJQAFgDAIAAIAAgFQAoAAAoACIAAADQAXAJALAVIABAFQANAEgBAVIABAFQACAZAAAZIBQAAIAFAAIAAgFIAAgFQAIgEAAgQQAAgUAMgKIAAgFQAJgOAOgJIAOgKQADgCAFAAIAKAAQAdgCANAOIAGAFQAoAbAvAVQAPgFACgUIADAAIAAgFQANgUAbgFIAFAAIAAgFIBGAAIAFAAIAAgFIAVgYIAEgBIAAgFQAlgIAvAFIABADQAiAGAKAdIABAFIAFAAQAMAUgCAjIAAAFIAEAFIABAFQAPAEAJAMIABAEIAYAVIABAEQASAcAhANQAeAMAOAbQAQAOgCAfQgCAegOASQgQAVggAGQgQAIgdAAQgaAAgOgIIgFAAQgXgCgMgNIAAAFQADAxgSAeIgEABQgOAVggADQgCAIgNAAQgaAAgOgIgAqGhnIAAAFIAFAAIAFAAIAAgFIAAgKIgDAAQABgOgIgBIAAAZg");
        this.shape.setTransform(97.7314, 37.925);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.ex_white, new a.Rectangle(0, 0, 195.5, 75.9), null);
    (b.ex_black = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AmgFzIgFgBQgagOgdAPQgDACgCAAIhpAFQgYABgLgIQgSgCgNgHQgfgRACgxQAIgMgBgXIAAgFQACgfAEgZIADgTQACgOAHgLIAAgFIAAgFQAIgCgBgNIADAAQAOgQAVgIIAFgBIAAgFQA3AAA3ACIAAADIAKAAIAFAAIAAgFQAWAAAWACIABADIAFAAQAPAGAUgGIAFAAIAoAAIAFAAIAAgFQA+AAA/ACIAAADIAKAAIAFAAIAAgFQA3AAA3ACIAAADIAPAAIAFAAIAAgFQAfgBAXAIQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAPAKAIAPIABAFQANADgBgNIADAAQAKgIAJgJIABgDIAAgFQAvgNAlAUQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAHANAOAEQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBQAJgVAbgDIAAgFQA3AAA3ACIAAADIAFAAIAFAAIAAgFQAfgBAXAIQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAUgFIAFAAIAAgFQBSAABTACIAAADQAXAEALAQIAGAKQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEQARAdgKAkQgJAfghAEQgIAMAAAXIgCAjQgBAOgEALQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgMAdgjAFIgBACQgZAGgOgIIgFgBQgUgIgUAJIgBACQgZAGgOgIIgFAAIgoAAIgBACQgZAGgOgIIgFAAQgDACgCAAIhBAFQgaABgOgIIgFAAIgKAAQgDACgCAAIhBAFQgaABgOgIIgFAAIgZAAQgDACgCAAIhAAFQgaABgOgIIgFAAIgKAAQgDACgCAAIhBAFQgaABgOgIIgFAAIgPAAQgDACgCAAIhVAFQgVABgJgIIgFAAIgFAAQgCAIgNAAQgVAAgJgIgAKcBRIgFgBIgGgCIgSgFQgNgFgKgKQgRgSgBgiQgUAUgRAXQgQAWggAFQgDACgCAAIhkAFQgVABgJgIIgegLQgngPAEg6QAIAAgDgKIAAgFQgSAWgNAaQgTApgyAKQgDACgCAAIh4AFQgaABgOgIQgHgGgNgCIgFABQgQAEgSADQgOAIgagBQhGgChGACQgaABgOgIQgZgDgPgMIgGgFQgUgPgBgeQgCgXAEgVQADgYgIgLQgbAmgdAjIgDAGQgYAvgvAXIgFAAQg2ABgugGQgCgJgIgDQgIgDgFgHIgCgDIgoAKQgDACgCAAQhBADhBAAQhJAAhIACQgYABgLgIIgFgBQg3gKgFg6QAIgEgBgQIADAAIAAgFIAAgKQAIAAgBgKIADAAIAAgFIAAgFQAOgQAVgIIAJgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgFIBBAAIAFAAIAAgFQAJgOgEgaIAAgFIAAgDQgaABgOgIQgegGgQgTIgDgGQgGgTgFgUQAIgJgBgVIABgFQABgOALgBIAAgFQAOgQAVgIIAJgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgFQCMAACMACIAFAAQANgBACAJQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEQANgBAEAIIADgBIAFgBIAbgqIAFgHIAFgIQAIgQAZADIAAgFIAFAAIAAgFQAeAAAeACIAAADQAFAAAEACQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAaADAIAWIABAFQAYAIAkgFQAQgCAEAJQAUACAHAPIABgDIALgZQAKgWAfgCIAAgFQAlAAAmACIAAADQAaAJAIAaIABAFQAIAEgCAQQgCAIALgBQAPgCAPAAIAAgFQAlAAAkgFIADgEQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAAgFIAAgKQAPgNARgJQAFgDAIAAIAAgFQAoAAAoACIAAADQAXAJALAVIABAFQANAEgBAVIABAFQACAZAAAZIBQAAIAFAAIAAgFIAAgFQAIgEAAgQQAAgUAMgKIAAgFQAJgOAOgJIAOgKQADgCAFAAIAKAAQAdgCANAOIAGAFQAoAbAvAVQAPgFACgUIADAAIAAgFQANgUAbgFIAFAAIAAgFIBGAAIAFAAIAAgFIAVgYIAEgBIAAgFQAlgIAvAFIABADQAiAGAKAdIABAFIAFAAQAMAUgCAjIAAAFIAEAFIABAFQAPAEAJAMIABAEIAYAVIABAEQASAcAhANQAeAMAOAbQAQAOgCAfQgCAegOASQgQAVggAGQgQAIgdAAQgaAAgOgIIgFAAQgXgCgMgNIAAAFQADAxgSAeIgEABQgOAVggADQgCAIgNAAQgaAAgOgIgAqGhnIAAAFIAFAAIAFAAIAAgFIAAgKIgDAAQABgOgIgBIAAAZg");
        this.shape.setTransform(97.7314, 37.925);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.ex_black, new a.Rectangle(0, 0, 195.5, 75.9), null);
    (b.epi_white = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AFyCRIgoAAIAAgFIgFAAQgigGAJgxQAJgJABgQIAAgFQhOAAhNADQgVAAgJgIIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgSgGgHAGQgKAKgHAMIgGAFQgSASgLAYQgIASgUAIIAAAFIgFAAIhFAAIgFAAIg8AAIgFAAIigAAIkEAAQgFAAAAgBQgFgVAAgXIAAgFIAAgFQAKgUAQgPQAEgFAKAAIAAgFIAyAAIAFAAQAFgPAHgOQALgVgXgCIgFAAQgtgCAKg3QAKgTAZgGIAFAAIAAgFQBYAABXACIAAADIAFAAQAYAGgCgVIACgGQAIgOAXAAIAAgFQAUAAATACIABADQAbABACAYIABAFQANgEABgQQACgTATgBIAAgFIAFAAIAFAAIAAgFIAyAAIAFAAIAAAFQAIAAAGACQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAXABACAdIAFAAQAagCAFAUIADgDQAKgLAPgEIAAgFQAqAAArACIAAADQAqABgJAwIgCAHIgBAEQAOAIAagBQA8gCA8ACQADABACACQARgCAAgXIABgFQACgZAKgPQAJgQAVgEIAAgFQAWAAAWACIABADQAWAOALgLQACgDAEgCIAGgCIAFgBIAAgFQAZAAAZADIAAACQAWABAFASIADABIAAAZIAAAFQgCADgBACIgEAOQgEAJgDAMIgDAJQgKATgcACQAIALAPAGQAFACAEAEQARASgOAcQgHANgNAHIgBADQgHACgHAAQgBAJgOAAQgaAAgOgJIgFABQgLACABgIIgFgFQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgLAGgDAQIgBAFQACAqgngCIAAAFIgFAAg");
        this.shape.setTransform(56, 14.5);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.epi_white, new a.Rectangle(0, 0, 112, 29), null);
    (b.commu_white = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ar0CRQgDgWAAgWIAFAAIAAgFIAAgFQAHgJAFgKQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAAgFIAAgFIAUgFIAFAAIAAgFIBkAAIAFAAQAPgZAEgiIABgFQgXAAgWABQgaACgOgIIgFgBQgmgGAIg1QALgWAYgIIAFAAIAAgFQBaAABaACIAAADQAZAAALgPQAFgGAOABIAAgFQBQAABQACIAAADQAcACAHAXIAAAFQAIAGACASIAFABQA8AAA8ACQADAAACADQAfgBAEAeIAEgCIBIgyIAmgbIARgMQAJgHAOgBIAAgFQAjAAAjACIAAADQATABAKAKIABAEIA8AAIAFAAIAAgFQAMgQAXgHIAAgCIAyAAIAFAAIAWASIAGAEQAHAIAKAFQAUAKASAMQAKAHAMAGQAUAKAGgZQAFgTAYgBIAAgFIAoAAIAFAAQAOgOAVgGIAFAAIAAgFQAUAAAUACIAAADQAoACgCArIgCAUIgBAKQASAGAIASIAEAGQAOAUAXANIAHAEQAOAJAHASIAAAPIAAAFIgCAAQgCAkgkgBQgMAIgXAAQgYAAgLgIQgFAAgDgDQgNgJgEAHQgJAOgDAUIAAAGQgCAhgkgDIAAAFIgFAAIgtAAIgFAAIhQAAIgFAAIiCAAIgFAAIg3AAIAAgFQgegBgFgYIgJgyIgBgFQgLgBgOABIAAACQgrADgqAAQAAARgGAMIgBAGQABAqgngCIAAAFIgFAAIgsAAIgUAAIknAAIgFAAIgFAAIhzAAQiTAAiUADIgCAAQgOAAgBgJg");
        this.shape.setTransform(76, 15.4013);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.commu_white, new a.Rectangle(0, 0, 152, 30.8), null);
    (b.btn = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.851)").s().p("AiuCvIAAldIFdAAIAAFdg");
        this.shape.setTransform(17.5, 17.5);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.btn, new a.Rectangle(0, 0, 35, 35), null);
    (b.bk_rect_02 = function(c, d, f) {
        this.initialize(c, d,
            f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("A0EaaMAAAg0zMAoJAAAMAAAA0zg");
        this.shape.setTransform(128.5, 168.975);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.bk_rect_02, new a.Rectangle(0, 0, 257, 338), null);
    (b.appear_white = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AlODNIhBAAIgtAAIgFAAQgFghAAggIAFAAIAAgFIAAgFQANgbAagPQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAHgEgKgNQgMgPgCgcIgBgGQgDgMAGgHQAHgWASgMQATgLAQgOQgEghgBglIAAgFQAQgnAogPIAEgBIAAgFQBJAABIACIAAADQALgEAOgBIAFAAIAAgFIAjAAIAFAAQA5gCAFA0QABABAAAAQAAABABAAQAAABABAAQAAAAABABQANAFABAQQAUgVASgZIABgEQAVgJAdgDQANAAAJgGQAJgGAOgBIAAgFIA3AAIAFAAIAAAFQAoACAHAmIABAKIACAZIAFAAQAVgEAJAJQAYAKgBgjQAAgFADgEIATgVQAhgHAqAAQArgBARAXQAQAbgMAhQgSAwgRAzQgKAdgOAaQgFAUACAUIAAAFQgFAggJAYQgKAYgXAKQggAIgrgEQgSgBgNgFQgMgEgIAEQgGACgIAAQgCADgDgBQg5ADg6AAQg+AAg+ADQgXABgMgJQgRgIgMAIQgDACgDAAIhBAFQhCAEgsgOQgFgCgBACQgJAPgZgCIAAAFIgFAAg");
        this.shape.setTransform(45.4571, 20.5);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.appear_white, new a.Rectangle(0, 0, 90.9, 41), null);
    (b.yajirusi_p = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#444545").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-5.3448, -5.1698);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.yajirusi_p, new a.Rectangle(-10.7, -10.3, 10.7,
        10.3), null);
    (b.window_shadow = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AxJArQgmAAgUgSQARAIAZAAIaFAAIIIAAQBOAAAChLIAAAFQAABQhRAAg");
        this.shape.setTransform(118.95, 88.225);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.463)").s().p("AxEFbQg1AAgUghIAIAGQAUAYAtAAMAh8AAAQBUAAAAhTIAAoyQAAgQgDgNIgDgQQAIASAAAbIAAIyQAABWhWAAg");
        this.shape_1.setTransform(118.45, 58.325);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AxGFSQguAAgUgZIAHAEQAVASAmAAMAh7AAAQBSAAgBhRIAAgEIAAo+IAAgMQADAMAAAQIAAIyQAABUhUAAg");
        this.shape_2.setTransform(118.7, 59);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(0,0,0,0.231)").s().p("AxAFqQhGAAgQg2IAGAKQAUApA8AAMAh8AAAQBYAAAAhYIAAoyQAAgkgOgWIgIgMQAZAXAAAvIAAIyQAABbhbAAg");
        this.shape_3.setTransform(118.05, 57.3);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("rgba(0,0,0,0.349)").s().p("AxCFjQg8AAgUgqIAHAHQAUAgA1AAMAh8AAAQBWAAAAhWIAAoyQAAgagIgSIgEgOQAOAWAAAkIAAIyQAABZhYAAg");
        this.shape_4.setTransform(118.25, 57.775);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("rgba(0,0,0,0.114)").s().p("Aw+FxQhRAAgLhGQACAHADAHQARA1BGABMAh7AAAQBbAAAAhbIAAozQABgvgZgXQgFgGgHgFQAnAVAAA8IAAIzQAABdheAAg");
        this.shape_5.setTransform(117.9, 56.85);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = h(b.window_shadow, new a.Rectangle(0, 0, 235.8, 93.8), null);
    (b.window_icon = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.visible = 0 == exportRoot.key_act_flag ? !0 : !1
        };
        this.frame_1 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgjgbIBHAAIgkA3g");
        this.shape.setTransform(-.025, .75);
        this.timeline.addTween(a.Tween.get(this.shape).wait(2));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.498)").s("#FFFFFF").ss(1, 1, 1).rr(-9, -8.1, 18, 16.2, 2);
        this.shape_1.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-10, -9.1, 20, 18.2);
    (b.textfield = function(c, d, f) {
        this.initialize(c,
            d, f, {});
        this.frame_0 = function() {
            this.stop();
            this.run = function() {
                this.txt_speed = 1;
                this.txt = exportRoot.before_tmsg || "";
                this.txt2 = exportRoot.writing_tmsg || "";
                this.count_num = 1;
                this.count_limit = 0;
                this.txt2_len = this.txt2 ? this.txt2.length : 0;
                this.linebreak_num = 0;
                this.linebreak4 = this.linebreak3 = this.linebreak2 = this.linebreak1 = "";
                this.count_linebreak = 1;
                if ("" != this.txt2) {
                    for (var g = 1; g <= this.txt2_len; g++) "\n" == this.txt2.substring(g - 1, g) && (this.linebreak_num++, this["linebreak" + this.linebreak_num] = g);
                    this.count_limit =
                        parseInt(this.txt2_len);
                    this.gotoAndPlay(2);
                    exportRoot.txt_auto_flag = 1
                } else this.gotoAndStop(1), exportRoot.txt_auto_flag = 0
            };
            this.skip_run = function() {
                exportRoot.txt_auto_flag = 0;
                this.txt = exportRoot.tmsg;
                this.msg.text = this.txt;
                this.gotoAndStop(1)
            }
        };
        this.frame_1 = function() {
            this.stop()
        };
        this.frame_2 = function() {
            this["linebreak" + this.count_linebreak] == this.count_num && (this.txt += this.txt2.substring(this.count_num - 1, this.count_num), this.count_num++, this.count_linebreak++);
            this.txt || (this.txt = "");
            this.txt2 ||
                (this.txt2 = "");
            this.txt += this.txt2.substring(this.count_num - 1, this.count_num + 1);
            this.msg.text = this.txt;
            this.parent.c_name.c_name.text = exportRoot.tname;
            this.count_num += 2
        };
        this.frame_3 = function() {
            this.count_num >= this.count_limit ? (this.msg.text = this.txt2, this.stop(), exportRoot.txt_auto_flag = 0, exportRoot.gotoAndStop("scene_end")) : this.gotoAndPlay(2)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));
        this.msg =
            new a.Text("", "13px 'Arial'");
        this.msg.name = "msg";
        this.msg.lineHeight = 15;
        this.msg.lineWidth = 224;
        this.msg.parent = this;
        this.msg.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get(this.msg).wait(4))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, 0, 228, 75);
    (b.symbol100 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.symbol100, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.symbol7 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["rgba(255,255,255,0)", "#FFFFFF", "#FFFFFF", "rgba(255,255,255,0)"], [0, .043, .961, 1], 0, 43.5, 0, -43.5).s().p("A13HHIAAuNMArvAAAIAAONg");
        this.shape.setTransform(0, -2);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.symbol7, new a.Rectangle(-140, -47.5, 280, 91), null);
    (b.sr_kira_star_inner = function(c, d, f) {
        this.initialize(c,
            d, f, {});
        this.instance = new b.star;
        this.instance.parent = this;
        this.instance.setTransform(-25.05, -25.1, .4167, .4167);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.sr_kira_star_inner, new a.Rectangle(-25, -25.1, 50, 50), null);
    (b.squear = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#808080").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape.setTransform(.725, .725);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.squear, new a.Rectangle(0,
        0, 1.5, 1.5), null);
    (b.sound_mc = function(c, d, f) {
        this.initialize(c, d, f, {
            gauge_up: 1,
            burst: 10,
            star_up: 16,
            commu_appear: 23,
            log_btn: 36,
            normal: 43,
            good: 49,
            perfect: 55,
            dialog_btn: 62,
            commu_fin: 72,
            excellent_logo: 82,
            commu_result_start: 94,
            excellent_small: 105,
            excellent_plus: 117,
            overflow_star1: 128,
            overflow_star2: 139
        });
        this.frame_0 = function() {
            this.stop();
            this.visible = !1
        };
        this.frame_1 = function() {
            window.se_play("se_132");
            this.gotoAndStop(0)
        };
        this.frame_10 = function() {
            window.se_play("se_134");
            this.gotoAndStop(0)
        };
        this.frame_16 =
            function() {
                window.se_play("se_117");
                this.gotoAndStop(0)
            };
        this.frame_23 = function() {
            window.se_play("se_37_1");
            this.gotoAndStop(0)
        };
        this.frame_36 = function() {
            window.se_play("se_009");
            this.gotoAndStop(0)
        };
        this.frame_43 = function() {
            window.se_play("se_109");
            this.gotoAndStop(0)
        };
        this.frame_49 = function() {
            window.se_play("se_114");
            this.gotoAndStop(0)
        };
        this.frame_55 = function() {
            window.se_play("se_072");
            this.gotoAndStop(0)
        };
        this.frame_62 = function() {
            window.se_play("se_009");
            this.gotoAndStop(0)
        };
        this.frame_72 = function() {
            window.se_play("se_102");
            this.gotoAndStop(0)
        };
        this.frame_82 = function() {
            window.se_play("se_134");
            this.gotoAndStop(0)
        };
        this.frame_94 = function() {
            window.se_play("se_007");
            this.gotoAndStop(0)
        };
        this.frame_105 = function() {
            window.se_play("se_145");
            this.gotoAndStop(0)
        };
        this.frame_117 = function() {
            window.se_play("se_102");
            this.gotoAndStop(0)
        };
        this.frame_128 = function() {
            window.se_play("se_083");
            this.gotoAndStop(0)
        };
        this.frame_139 = function() {
            window.se_play("se_127");
            this.gotoAndStop(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(6).call(this.frame_16).wait(7).call(this.frame_23).wait(13).call(this.frame_36).wait(7).call(this.frame_43).wait(6).call(this.frame_49).wait(6).call(this.frame_55).wait(7).call(this.frame_62).wait(10).call(this.frame_72).wait(10).call(this.frame_82).wait(12).call(this.frame_94).wait(11).call(this.frame_105).wait(12).call(this.frame_117).wait(11).call(this.frame_128).wait(11).call(this.frame_139).wait(11));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFCC").s().p("AhFBGIAAiLICLAAIAACLg");
        this.shape.setTransform(7, 7);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(149))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, 0, 14, 14);
    (b.shield = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EhRPBRQMAAAiifMCifAAAMAAACifgAyvV4MAlfAAAMAAAgrvMglfAAAg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.shield, new a.Rectangle(-520, -520, 1040, 1040), null);
    (b.shape65_star_b = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.heart_white;
        this.instance.parent = this;
        this.instance.setTransform(-7.75, -7.95, .4, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-8.2, -8.4, 16.7, 16.700000000000003);
    (b.shape65_star = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("EgAYAroIgFgCQgXgIgMgRQmClTnmlZQh/haj1inQj9ith3hUQkpjRjdjFQkGjri8j1QjOkNiAkvQiFk3gqlHQhLpDDToXQDfo0HUk3QEei/FYg9QFWg8FRBPQFfBSEdDHQD6CvCHDgQBZiPCMiAQCzikDphuQEXiFEqgiQEvgiElBGIABAAIACABIADABIACAAQHPB2FZFuQFMFfCGHfQBQEhACExQACEuhMElQhVFJixEzQisEpj2D8QjpDwjmCzQi/CTlgDvQmsElkNDHQlwERkgD8QgMARgXAIIgEACQgNAFgMAAQgMAAgNgFgEgcGgojQk7BSj1DIQjNCoiVDkQiTDghOEDQhUEXgFEnQgGEmBKEcQBUFGCzEsQCtEjD4D1QD5D2DNCbQB2BZCbBsQBOA2DHCIQGfEbDxCzQC7CLCqCJQBnBUBYBKIBBA5IA1gsICUh7QCeiBCDhkQDnixFFjhQCWhoEvjMQEIi2CwiQQEZjnDNjuQDpkQCNkhQCHkWA5ksQA6kzgdkuQgakNhgj8Qhhj/iejSQlXnHoJiEIgCgBQkMhAkWAfQkWAgj5B7QjXBrieCPQizCjhWDDQgRAlgwAAQgwAAgQglQiFktlFjRQkoi/lgg3Qh3gSh2AAQjEAAjDAzg");
        this.shape.setTransform(-1.4481, -2.2754, .0178, .0178);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["#FFB8C7", "#FFFFFF"], [.294, .776], 0, -152.5, 0, 0, -152.5, 440.2).s().p("EAAAAqhIgBABIAAgCQkzkPlqkLQjnirl4kBQl+kFiJhlQj/i8iXiZQodnijfprQjLo1Bho+QBcomFSmQQFbmbHzh8QEjhJEvAnQEUAkD/B8QDtB0C0CrQCvCoBPC3QBPi3CwioQCzirDuh0QD/h8ETgkQEvgnEkBJQH0B8FaGbQFSGQBcImQBhI+jLI1QjfJrodHiQiXCZj/C8QiKBll+EFQl3EBjoCrQlpEMk0EOIAAACg");
        this.shape_1.setTransform(-1.4476, -2.2751, .0178, .0178);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.shape_1
                },
                {
                    t: this.shape
                }
            ]
        }).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-8.2, -8.4, 16.7, 16.700000000000003);
    (b.replace_effect8 = function(c, d, f) {
        this.initialize(c, d, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect7 = function(c, d, f) {
        this.initialize(c, d, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect6 = function(c, d, f) {
        this.initialize(c, d, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect5 = function(c, d, f) {
        this.initialize(c, d, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect4 = function(c, d, f) {
        this.initialize(c, d, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect3 = function(c, d, f) {
        this.initialize(c, d, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-407.6, -407.3, 815.3, 814.7);
    (b.replace_effect2 = function(c, d, f) {
        this.initialize(c, d, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-38.7, -38.7, 77.5, 77.5);
    (b.replace_effect1 = function(c, d, f) {
        this.initialize(c, d, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-69.6, -85, 137.3, 99);
    (b.replace_btn4_on = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.replace_btn_perfect;
        this.instance.parent = this;
        this.instance.setTransform(-33, -32.9, .375, .3742);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_btn4_on, new a.Rectangle(-33, -32.9, 66, 65.9), null);
    (b.replace_btn4_off = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.replace_btn_perfect_gray;
        this.instance.parent =
            this;
        this.instance.setTransform(-33, -33, .375, .375);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_btn4_off, new a.Rectangle(-33, -33, 66, 66), null);
    (b.replace_btn3_on = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.replace_btn_up;
        this.instance.parent = this;
        this.instance.setTransform(-33, -33, .375, .375);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_btn3_on, new a.Rectangle(-33, -33, 66, 66), null);
    (b.replace_btn3_off = function(c,
        d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.replace_btn_up_gray;
        this.instance.parent = this;
        this.instance.setTransform(-33, -33, .375, .375);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_btn3_off, new a.Rectangle(-33, -33, 66, 66), null);
    (b.replace_btn2_on = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.replace_btn_good;
        this.instance.parent = this;
        this.instance.setTransform(-33, -33, .375, .375);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.replace_btn2_on, new a.Rectangle(-33, -33, 66, 66), null);
    (b.replace_btn2_off = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.replace_btn_good_gray;
        this.instance.parent = this;
        this.instance.setTransform(-33, -33, .375, .375);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_btn2_off, new a.Rectangle(-33, -33, 66, 66), null);
    (b.replace_btn1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.replace_btn_commu;
        this.instance.parent = this;
        this.instance.setTransform(-105,
            -16.25, .375, .3688);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_btn1, new a.Rectangle(-105, -16.2, 210, 32.4), null);
    (b.question = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["#FFFFFF", "#FFDDB6"], [.463, 1], 2.7, -17.8, -3.6, 17.1).s().p("AhhCbIABgSIACgPQAHgmAWgXQAUgWAogRQAVgIAKgJQALgKADgRQADgQgLgNQgLgMgVgGQgXgEgQAPQgRANgFAfIhzgnQAKgvAdgeQAcgdArgLQAsgKAyAJQAzAKAjAYQAjAYARAiQAQAhgHAnQgIApgUAaQgVAagnAPIgfAOQgMAGgJAKQgKAHgCAOIgBAMIgBAMg");
        this.shape.setTransform(1.8565, -7.2382);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFE1BF").s().p("AhLAwIAWh2ICBAXIgWB2g");
        this.shape_1.setTransform(-3.7, 18.9);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f().s("#FF8C00").ss(3, 1, 1).p("ABRjIQgigPgtAAQgrAAgjAPQgjAQgUAdQgUAdgBAqIBoAQQAAgcAMgOQALgPAUAAQATABALAJQALAKAAAPQAAAOgIAKQgHAKgRAKQgeAUgOAWQgOAXAAAgQAAAHAAAGQABAIABAHIBmAAQgBgFAAgFQgBgFAAgFQAAgMAHgJQAGgJAKgGQALgIANgJQAfgSANgZQAOgaAAgkQAAgigUgaQgSgagigPgAA3BvIhwAAIAABpIBwAAg");
        this.shape_2.setTransform(-.1745, .2105, 1.1606, 1.1606, 10.2941);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFFFF").s().p("Ag5DYIAAhpIBwAAIAABpgAg0BQIgCgQIAAgNQAAggAOgWQAOgXAegTQARgLAHgJQAIgKAAgPQAAgPgLgKQgLgIgTgCQgUAAgLAPQgMAOAAAcIhogPQABgqAUgdQAUgeAjgQQAjgPArAAQAtABAiAOQAiAPASAaQAUAaAAAiQAAAkgOAaQgNAZgfATIgYAQQgKAGgGAJQgHAJAAANIABAKIABAKg");
        this.shape_3.setTransform(-.1745, .2105, 1.1606, 1.1606, 10.2941);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(1))
    }).prototype =
        h(b.question, new a.Rectangle(-17.4, -26.3, 38.5, 53.900000000000006), null);
    (b.powder_rise_core = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(4 * Math.random() + 2))
        };
        this.frame_5 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgPAGIAAgSIAfANIAAAMg");
        this.shape.setTransform(.975, .475);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgFgNIAHAFIAEAMIgBAKg");
        this.shape_1.setTransform(.175, 1.225);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AgLAOIAOgdIAJAIIgIAXg");
        this.shape_2.setTransform(.2, .375);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFFFF").s().p("AgNgGIANgFIAOATIgEAEg");
        this.shape_3.setTransform(-.075, 1.125);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 2).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = e =
        new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-1.4, -1.2, 4, 3.8);
    (b.parts_particle1_3 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-.1, .8);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.particle_pp = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(.575, -.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = h(b.particle_pp, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.particle_p = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-.1, .8);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
                state: [{
                    t: this.shape_1
                }]
            },
            1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.mc_text_log_btn = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.visible = 0 == exportRoot.key_act_flag && 0 == exportRoot.key_log_flag && 1 == exportRoot.window_flag ? !0 : !1
        };
        this.frame_1 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgZAaQAUgCAKgMQALgLADgTIgeAAIgGAKQgDAFgFADQgFAEgFACIAAgKQAFgEAEgGQAFgGACgIIAnAAIAAgHIAHAAIAAAHIACAAIAAgHIAHAAIAAAMIgGAAQgBASgHANQgHANgMAGQgLAIgRAAg");
        this.shape.setTransform(10.475, 1.95);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgeAeIAAg7IA9AAIAAA7gAgUAUIApAAIAAgnIgpAAg");
        this.shape_1.setTransform(2.35, 2.2);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(2));
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f().s("#FFFFFF").ss(1, 1, 1).p("AgogZIBQAAAgoAAIBQAAAgoAaIBQAA");
        this.shape_2.setTransform(-9.65, 2.2);
        this.timeline.addTween(a.Tween.get(this.shape_2).wait(2));
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f().s("#FFFFFF").ss(1, 1, 1).p("ACchRIk3AAQgcAAAAAcIAABrQAAAcAcAAIE3AAQAcAAAAgcIAAhrQAAgcgcAAg");
        this.shape_3.setTransform(.025, 2.025);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("rgba(244,244,244,0.498)").s().p("AibBSQgcAAAAgcIAAhrQAAgcAcAAIE3AAQAcAAAAAcIAABrQAAAcgcAAg");
        this.shape_4.setTransform(.025, 2.025);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.shape_3
            }]
        }).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-19.3, -7.1,
        38.7, 18.299999999999997);
    (b.marker = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#CC0000").s().p("AkkAAIEkkkIElEkIklElg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.marker, new a.Rectangle(-29.3, -29.3, 58.7, 58.7), null);
    (b.light_grd_yellow = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.star;
        this.instance.parent =
            this;
        this.instance.setTransform(-95.45, -102.9, 1.575, 1.575);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFC6EA", "#FF8FD6", "rgba(255,79,190,0.71)", "rgba(145,255,251,0)"], [0, .212, .506, .698, 1], 0, 0, 0, 0, 0, 80.3).s().p("AotIuQjnjnAAlHQAAlGDnjnQDnjnFGAAQFHAADnDnQDnDnAAFGQAAFHjnDnQjnDnlHAAQlGAAjnjng");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.light_grd_yellow, new a.Rectangle(-95.4, -102.9, 189, 189), null);
    (b.guide_parts_particle_1 =
        function(c, d, f) {
            this.initialize(c, d, f, {});
            this.frame_0 = function() {
                this.visible = !1
            };
            this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
            this.shape = new a.Shape;
            this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
            this.shape.setTransform(.575, -.225);
            this.timeline.addTween(a.Tween.get(this.shape).wait(1));
            this.shape_1 = new a.Shape;
            this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
            this.shape_1.setTransform(71.375,
                -89.3);
            this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
        }).prototype = h(b.guide_parts_particle_1, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.gr_selectbtn4 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.instance = new b.btn_perfect;
        this.instance.parent = this;
        this.instance.setTransform(-33, -22.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-33, -22.5, 66, 45);
    (b.gr_selectbtn3 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.instance = new b.btn_good;
        this.instance.parent = this;
        this.instance.setTransform(-33, -22.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-33, -22.5, 66, 45);
    (b.gr_selectbtn2 = function(c, d, f) {
        this.initialize(c,
            d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.instance = new b.btn_normal;
        this.instance.parent = this;
        this.instance.setTransform(-33, -22.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-33, -22.5, 66, 45);
    (b.gr_returnbtn = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.sp_c_event;
        this.instance.parent = this;
        this.instance.setTransform(-32, -24,
            .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_returnbtn, new a.Rectangle(-32, -24, 64, 48), null);
    (b.gr_plate = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.tie_sp;
        this.instance.parent = this;
        this.instance.setTransform(-120, -16, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_plate, new a.Rectangle(-120, -16, 240, 32), null);
    (b.gr_peke = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.popup_close;
        this.instance.parent =
            this;
        this.instance.setTransform(-9.75, -9.75, .39, .39);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_peke, new a.Rectangle(-9.7, -9.7, 19.5, 19.5), null);
    (b.gr_nametxt = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.c_name = new a.Text("", "16px 'Arial'");
        this.c_name.name = "c_name";
        this.c_name.lineHeight = 18;
        this.c_name.lineWidth = 171;
        this.c_name.parent = this;
        this.c_name.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get(this.c_name).wait(1))
    }).prototype = h(b.gr_nametxt, new a.Rectangle(0,
        0, 175, 29), null);
    (b.gr_log_close_btn = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFFFFF").ss(1, 1, 1).p("AAshOIhXAAQgjAAAAAjIAABXQAAAjAjAAIBXAAQAjAAAAgjIAAhXQAAgjgjAAg");
        this.shape.setTransform(.025, 0);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f().s("#666666").ss(1, 1, 1).p("AAAAAIAogmAAnAoIgngoAgngnIAnAnIgnAo");
        this.shape_1.setTransform(.075, -.1);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(255,255,255,0.6)").s().p("AgrBPQgjAAAAgkIAAhVQAAgkAjAAIBXAAQAjAAAAAkIAABVQAAAkgjAAgAAAAAIAoAnIgognIAognIgoAngAgmAnIAmgnIgmgoIAmAog");
        this.shape_2.setTransform(.025, 0);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = h(b.gr_log_close_btn, new a.Rectangle(-8.8, -8.9, 17.700000000000003, 17.8), null);
    (b.gr_log_base = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AupUDQhIAAAAhKMAAAglxQAAhJBIAAIdTAAQBIAAAABJMAAAAlxQAABKhIAAg");
        this.shape.setTransform(0, -2.5054, .96, .9786);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.gr_log_base, new a.Rectangle(-96.9, -128, 193.9, 251), null);
    (b.gr_line = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.star_line;
        this.instance.parent = this;
        this.instance.setTransform(-103, -7, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_line, new a.Rectangle(-103, -7, 206, 14), null);
    (b.gr_heart_w = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.star_light;
        this.instance.parent = this;
        this.instance.setTransform(-17.25, -15, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.gr_heart_w, new a.Rectangle(-17.2, -15, 32.2, 30), null);
    (b.gr_heart_b = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.star_dark;
        this.instance.parent = this;
        this.instance.setTransform(-17.25, -15, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_heart_b, new a.Rectangle(-17.2, -15, 32.2, 30), null);
    (b.gr_heart = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.star_img;
        this.instance.parent = this;
        this.instance.setTransform(-17.25, -15, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.gr_heart, new a.Rectangle(-17.2, -15, 32.2, 30), null);
    (b.gr_guage_on = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.gauge_bar;
        this.instance.parent = this;
        this.instance.setTransform(2.8, 0, .25, .25);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_guage_on, new a.Rectangle(2.8, 0, 135, 23), null);
    (b.gr_guage = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.produce_gauge;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .25, .25);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.gr_guage, new a.Rectangle(0, 0, 140, 23), null);
    (b.gr_good_end_label_w = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.excellent_text_w;
        this.instance.parent = this;
        this.instance.setTransform(-39, -8, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_good_end_label_w, new a.Rectangle(-39, -8, 78, 16), null);
    (b.gr_good_end_label_b = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.excellent_text_b;
        this.instance.parent = this;
        this.instance.setTransform(-39,
            -8, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_good_end_label_b, new a.Rectangle(-39, -8, 78, 16), null);
    (b.gr_good_end_label = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.excellent_text;
        this.instance.parent = this;
        this.instance.setTransform(-39, -8, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_good_end_label, new a.Rectangle(-39, -8, 78, 16), null);
    (b.gr_excellent = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance =
            new b.excellent;
        this.instance.parent = this;
        this.instance.setTransform(-107, -40, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.gr_excellent, new a.Rectangle(-107, -40, 214, 80), null);
    (b.gr_effect_center = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FF0000").ss(1, 1, 1).p("AAAgDIAACVACvgDIivAAAAAiRIAACOAiugCICugB");
        this.shape.setTransform(0,
            .375);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.gr_effect_center, new a.Rectangle(-18.5, -15.2, 37, 31.2), null);
    (b.gr_dialog_returnend = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#666666").s().p("AgVAAIBPhMIAACZgAg5BLIAAiVIAdAAIAACVg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.gr_dialog_returnend, new a.Rectangle(-5.8, -7.7, 11.6, 15.5), null);
    (b.gr_dialog_return_btn = function(c, d, f) {
        this.initialize(c, d,
            f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#666666").s().p("AAiAWIgUgVIgTgWIgCgCIgDgBIgDABIgCACIgHANIgIANIgGAMIgTAAIAIgNIAJgQIAKgSQADgFAEgEQAFgDAGAAQAEAAADACIAFAEIAGAGIARAUIAPAQIAQAQIAAAVIgWgVg");
        this.shape.setTransform(10.175, .8);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#666666").s().p("AAUAoIAKAAIAEgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAgBgBIAAg3IAQAAIAAA8IgBAIQgBACgCACQgDACgEAAIgOABgAgvA3IAAhLIAyAAIAAA7QgBAGgBADQgBAEgEAAIgPABIgGgOIADAAIAIAAIACgCIABgDIAAgDIgVAAIAAAYgAggATIAVAAIAAgIIgVAAgAggAAIAVAAIAAgHIgVAAgAALAiIAAgzIAPAAIAAAzgAg0gZIAAgPIAZAAIgBgBIgCgEIgDgEIAOgFIAFAHIADAFIABACIAWAAIABgBIADgGIAEgHIAPAFIgDAHIgDACIAYAAIAAAPg");
        this.shape_1.setTransform(-1.8, .45);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#666666").s().p("AgnAAIBPhLIAACXg");
        this.shape_2.setTransform(-14.3, 1.425);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = h(b.gr_dialog_return_btn, new a.Rectangle(-18.3, -9.5, 36.6, 19.1), null);
    (b.gr_dialog_nextend = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#666666").s().p("Ag5hMIBPBMIhPBNgAAdBLIAAiVIAdAAIAACVg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.gr_dialog_nextend, new a.Rectangle(-5.8, -7.7, 11.6, 15.5), null);
    (b.gr_dialog_next_btn = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#666666").s().p("AAiAWIgUgVIgTgWIgCgCIgDgBIgDABIgCACIgHANIgIANIgGAMIgTAAIAIgNIAJgQIAKgSQADgFAEgEQAFgDAGAAQAEAAADACIAFAEIAGAGIARAUIAPAQIAQAQIAAAVIgWgVg");
        this.shape.setTransform(1.725, .8);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#666666").s().p("AAfArQgGgHgEgHIgHgPQgEALgIAKQgHALgNAIIgIgPQAKgFAGgHQAHgHADgIQADgHACgGIACgMIABgHIAAgBIAOAAIAAAAIAAAFIgBAKQAAAFADAFQACAGAEAHQAEAGAGAGQAGAGAJAEIgJAPQgJgFgGgGgAg2AgQAIgIAFgIQAGgJAEgJIANAIIgHAOIgIANIgKANgAAcgCIAFgMIACgJIABgDIgiAAIgEAMIgFAIIgCAEIgNgKIACgEIAFgHIAGgNQADgIACgJIAOACIgBAFIgCAFIAtAAIAAAFIgBALIgDAPIgFANgAghgSIgJgIIgMgIIALgNIAKAIIAJAGIADAEIgJANIgDgCg");
        this.shape_1.setTransform(-10.175, .5);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#666666").s().p("AgnhLIBPBLIhPBMg");
        this.shape_2.setTransform(14.35, 1.425);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = h(b.gr_dialog_next_btn, new a.Rectangle(-18.3, -9.5, 36.7, 19.1), null);
    (b.fx_fade_black = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Ay5ZAMAAAgx/MAlzAAAMAAAAx/g");
        this.shape.setTransform(121, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.fx_fade_black, new a.Rectangle(0, 0, 242, 320), null);
    (b.flash_col = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.flash_col, new a.Rectangle(0, 0, 240, 320), null);
    (b.episode_end_letter10 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AgpA+IAVAAIALgCQADgBABgCIABgFIAAhRIAIAAIALgHIAPgLIARgPIh5AAIAAgRICVAAIAAAPIgSASIgSAPIgPALIgJAGIAABGQAAAJgEAFQgEAGgKACQgKACgUAAg");
        this.shape.setTransform(.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.episode_end_letter10, new a.Rectangle(-7.4, -8, 14.9, 16), null);
    (b.episode_end_letter9 = function(c,
        d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AAnBJIgUgJIgPgGIgFgBIAKgPIAFACIAPAGIAVAIIAYAMIgKAQIgZgNgAg3BWIAAhHIgNAAIgKAAIgEAAIgDgQIAEAAIAIAAIAKgMIAJgLIgIgGIgLgIIgMgGIAMgOIAEADIADACIAHgJIAFgLIAEgLIARAHQgFAJgGAJIgKAPIAFAEIADAEIAIgLIAFgJIACgDIARAHIgEAFIgJANIgMAQIgOASIAHgBIAIAAIAHgBIgBgFIgCgGIAPgEIAEANIACAKQANgDAIgEIAQgKIgKgMIgIgLIgEAGIgEAGIgNgNQAIgIAGgJIAIgQIAFgMIACgFIASAEIgCAFIgFALIAxAAIAAAKIgFALIgIAPQgEAJgIAIQAHAGAJAFQAJAEAMAEIgKASIgWgMQgKgHgHgGQgJAGgKAGQgLAGgLAFIgIgLIABAEIABADIgRAEIAAgDIgBgHIgEAAIgFABIAABIgAAYglQAEAHAIAIIAKgNIAEgKIABgEIgiAAQACAFAFAHgAhUBKIAFgSIACgQIABgLIABgEIAQABIgBAGIgBANIgDARIgDAQgAgYBEIgCgKIgDgNIgDgPIAOgDIAGAUIADAPIACAGIgQAEIgBgEgAAmAmIgOgGIgFgCIAJgOIAFACIAMAFIARAJIgIAPIgQgJg");
        this.shape.setTransform(0, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.episode_end_letter9, new a.Rectangle(-8.5, -8.6, 17.1, 17.2), null);
    (b.episode_end_letter8 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AhHA9IAAgRIBVAAIAKhXIhOAAIAAgRIBjAAIgLBoIAmAAIAAARg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.episode_end_letter8, new a.Rectangle(-7.2, -6.1, 14.4, 12.3), null);
    (b.episode_end_letter7 =
        function(c, d, f) {
            this.initialize(c, d, f, {});
            this.shape = new a.Shape;
            this.shape.graphics.f("#000000").s().p("AAABDQglgDgkgBIAAgUQAkABAlADQAlADAlAFIAAAVQglgGglgDgAgBADIg7gCIAAgTIAmACIAnACIAoADIAAATQgdgDgdgCgAAAg1QgggCghAAIAAgUIAsABIAsACIAqADIAAAVQgigEgfgBg");
            this.shape.setTransform(.025, 0);
            this.timeline.addTween(a.Tween.get(this.shape).wait(1))
        }).prototype = h(b.episode_end_letter7, new a.Rectangle(-7.3, -7.5, 14.7, 15.1), null);
    (b.episode_end_letter6 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AhEBGIAAgTIB1AAIAAhlIh1AAIAAgTICJAAIAACLg");
        this.shape.setTransform(0, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.episode_end_letter6, new a.Rectangle(-6.9, -7, 13.9, 14), null);
    (b.episode_end_letter5 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AhABQIAAifIAVAAIAAA0IA3AOIA1AOIAAAVQgcgJgbgHIg1gMIAABWgAAlguIAAgdIAOAAIAAAdgAAPguIAAgdIANAAIAAAdg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.episode_end_letter5, new a.Rectangle(-6.4, -8, 12.9, 16.1), null);
    (b.episode_end_letter4 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AhNAKIAAgTICbAAIAAATg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.episode_end_letter4, new a.Rectangle(-7.8, -.9, 15.7, 1.9), null);
    (b.episode_end_letter3 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AgqA5QAWgGARgKQARgKANgQQANgPAHgWQAIgWACgfIAUAAQgCAugPAeQgPAfgaASQgZASgkAIgAgwgCIgMgkIgQgkIAVAAIAPAiIAOAmg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.episode_end_letter3, new a.Rectangle(-7.7, -7.6, 15.5, 15.2), null);
    (b.episode_end_letter2 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AgZBSQgQAAgJgEQgKgDgFgJQgFgJAAgPIAAhyIAVAAIAAAkIB0AAIAAASIh0AAIAAA6QAAANAGAFQAHAGAOAAIBcAAIAAASgAAngxQgFgEgBgIQABgJAFgGQAGgEAHgBQAIABAGAEQAFAGAAAJQAAAIgFAEQgGAGgIAAQgHAAgGgGgAAuhFQgEADAAAFQAAADAEADQACADAEABQAEgBADgDQADgDAAgDQAAgFgDgDQgDgDgEAAQgEAAgCADg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.episode_end_letter2, new a.Rectangle(-7.1, -8.2, 14.2, 16.4), null);
    (b.episode_end_letter1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AhPBEIAAgTIBDAAIAAhiIg4AAIAAgSICIAAIAAASIg8AAIAABiIBIAAIAAATg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.episode_end_letter1, new a.Rectangle(-8, -6.8, 16, 13.6), null);
    (b.efc_card_kira = function(c, d, f) {
        this.initialize(c,
            d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("ArcUsIAAg8QKuglMLAlIAAA8gArcSQIAAlCIW5AAIAAFCgArcLqIAAuuIW5AAIAAOugArcm9IAAlCIW5AAIAAFCgArctMIAAg8IW5AAIAAA8gArcy3IAAh0IW5AAIAAB0g");
        this.shape.setTransform(0, 46.6, 1, 1, 0, 0, 0, -2.1, 44.5);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.efc_card_kira, new a.Rectangle(-71.2, -130.3, 146.7, 264.9), null);
    (b.efa_kira_pp = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.efa_kira_pp, new a.Rectangle(-120, -150, 240, 300), null);
    (b.direction = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FF9900").ss(.5, 1, 1).p("AAAieIAAE9");
        this.shape.setTransform(0,
            15.575);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.direction, new a.Rectangle(-1, -1.3, 2, 33.8), null);
    (b.dark = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.dark, new a.Rectangle(-120, -155, 240, 310), null);
    (b.bg_ = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.instance = new b.replace_bg;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-240, 0, 960, 680);
    (b._txt3_3 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.sp_txt_appear;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._txt3_3, new a.Rectangle(0, 0, 91.5, 41), null);
    (b._txt3_2 = function(c, d, f) {
        this.initialize(c,
            d, f, {});
        this.instance = new b.sp_txt_commu;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._txt3_2, new a.Rectangle(0, 0, 152, 30.5), null);
    (b._txt3_1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.sp_txt_episode;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._txt3_1, new a.Rectangle(0, 0, 112, 29), null);
    (b._txt_rst2 =
        function(c, d, f) {
            this.initialize(c, d, f, {});
            this.instance = new b.sp_textRes3;
            this.instance.parent = this;
            this.instance.setTransform(-95, -39, .5, .5);
            this.timeline.addTween(a.Tween.get(this.instance).wait(1))
        }).prototype = h(b._txt_rst2, new a.Rectangle(-95, -39, 190, 78), null);
    (b._txt_rst1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.sp_textRes2;
        this.instance.parent = this;
        this.instance.setTransform(-95, -39, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._txt_rst1,
        new a.Rectangle(-95, -39, 190, 78), null);
    (b._txt_rst0 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.sp_textRes1;
        this.instance.parent = this;
        this.instance.setTransform(-95, -39, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._txt_rst0, new a.Rectangle(-95, -39, 190, 78), null);
    (b.replace_chracacter8 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance =
            new b.replace_character8_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character8_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character8_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character8_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character8_5;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character8_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-151, -129, 401,
        500);
    (b.replace_chracacter7 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance = new b.replace_character7_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character7_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character7_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150,
            -129, .5, .5);
        this.instance_3 = new b.replace_character7_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character7_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character7_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
                state: [{
                    t: this.instance_2
                }]
            },
            1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-151, -129, 401, 500);
    (b.replace_chracacter6 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance = new b.replace_character6_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character6_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character6_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character6_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character6_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character6_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150,
            -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-151, -129, 401, 500);
    (b.replace_chracacter5 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance = new b.replace_character5_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character5_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character5_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character5_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character5_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character5_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-151,
        -129, 401, 500);
    (b.replace_chracacter4 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance = new b.replace_character4_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character4_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character4_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150,
            -129, .5, .5);
        this.instance_3 = new b.replace_character4_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character4_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character4_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
                state: [{
                    t: this.instance_2
                }]
            },
            1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-151, -129, 401, 500);
    (b.replace_chracacter3 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance = new b.replace_character3_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character3_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character3_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character3_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character3_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-150, -129, .5, .5);
        this.instance_5 = new b.replace_character3_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150,
            -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-150, -129, 570.2, 500);
    (b.replace_chracacter2 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance = new b.replace_character2_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character2_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character2_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character2_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character2_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character2_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-151,
        -129, 401, 500);
    (b.replace_chracacter1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance = new b.replace_character1_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character1_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character1_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150,
            -129, .5, .5);
        this.instance_3 = new b.replace_character1_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character1_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-150, -129, .5, .5);
        this.instance_5 = new b.replace_character1_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
                state: [{
                    t: this.instance_2
                }]
            },
            1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-150, -129, 570.2, 500);
    (b.characters_b = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(8));
        this.instance = new b.replace_character1_b;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character2_b;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character3_b;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character4_b;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character5_b;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-150, -129, .5, .5);
        this.instance_5 = new b.replace_character6_b;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150,
            -129, .5, .5);
        this.instance_6 = new b.replace_character7_b;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-150, -129, .5, .5);
        this.instance_7 = new b.replace_character8_b;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
                state: [{
                    t: this.instance_6
                }]
            },
            1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-150, -129, 400, 500);
    (b._kirakira = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.sp_ki;
        this.instance.parent = this;
        this.instance.setTransform(-10, -10, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._kirakira, new a.Rectangle(-10, -10, 20, 20), null);
    (b.spread_flower_circle = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,79,156,0.2)",
            "#FF4194"
        ], [0, 1], 0, 0, 0, 0, 0, 47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.spread_flower_circle, new a.Rectangle(-47.5, -47.5, 95, 95), null);
    (b.flower2 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF74BA").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(.0156, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-5.6, -5.6, 11.3, 11.3);
    (b.flower1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFA9E9").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
        this.shape.setTransform(.017, -.0159);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-9.6, -9.6, 19.299999999999997, 19.299999999999997);
    (b.heart_num_p = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.n1 = new b.num_pink;
        this.n1.name = "n1";
        this.n1.parent = this;
        this.n1.setTransform(25.7, 11.1, 1, 1, 0, 0, 0, 11.7, 11.1);
        this.timeline.addTween(a.Tween.get(this.n1).wait(1));
        this.n10 = new b.num_pink;
        this.n10.name = "n10";
        this.n10.parent = this;
        this.n10.setTransform(11.7, 11.1, 1, 1, 0, 0, 0, 11.7, 11.1);
        this.timeline.addTween(a.Tween.get(this.n10).wait(1))
    }).prototype =
        h(b.heart_num_p, new a.Rectangle(2.9, 7.4, 26.1, 16.4), null);
    (b.heart_num_base = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.n1 = new b.num_base;
        this.n1.name = "n1";
        this.n1.parent = this;
        this.n1.setTransform(21.3, 11.1, 1, 1, 0, 0, 0, 11.7, 11.1);
        this.timeline.addTween(a.Tween.get(this.n1).wait(1));
        this.n10 = new b.num_base;
        this.n10.name = "n10";
        this.n10.parent = this;
        this.n10.setTransform(11.7, 11.1, 1, 1, 0, 0, 0, 11.7, 11.1);
        this.timeline.addTween(a.Tween.get(this.n10).wait(1))
    }).prototype = h(b.heart_num_base, new a.Rectangle(2.6,
        5.8, 18.099999999999998, 11.5), null);
    (b.heart_num = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.n1 = new b.num_black;
        this.n1.name = "n1";
        this.n1.parent = this;
        this.n1.setTransform(25.7, 11.1, 1, 1, 0, 0, 0, 11.7, 11.1);
        this.timeline.addTween(a.Tween.get(this.n1).wait(1));
        this.n10 = new b.num_black;
        this.n10.name = "n10";
        this.n10.parent = this;
        this.n10.setTransform(11.7, 11.1, 1, 1, 0, 0, 0, 11.7, 11.1);
        this.timeline.addTween(a.Tween.get(this.n10).wait(1))
    }).prototype = h(b.heart_num, new a.Rectangle(2.9, 7.4, 26.1, 16.4), null);
    (b.chara_replace8 =
        function(c, d, f) {
            this.initialize(c, d, f, {});
            this.shape = new a.Shape;
            this.shape.graphics.f("#FF00FF").s().p("AhRBGIBRiLIBSCLg");
            this.shape.setTransform(.025, 9.025);
            this.timeline.addTween(a.Tween.get(this.shape).wait(1));
            this.ef_position = new b.gr_effect_center;
            this.ef_position.name = "ef_position";
            this.ef_position.parent = this;
            this.ef_position.setTransform(0, -202);
            this.timeline.addTween(a.Tween.get(this.ef_position).wait(1));
            this.c = new b.replace_chracacter8;
            this.c.name = "c";
            this.c.parent = this;
            this.c.setTransform(-6.75,
                -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
            this.timeline.addTween(a.Tween.get(this.c).wait(1))
        }).prototype = h(b.chara_replace8, new a.Rectangle(-237.5, -399.4, 475, 525), null);
    (b.chara_replace7 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF00FF").s().p("AhRBGIBRiLIBSCLg");
        this.shape.setTransform(.025, 9.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.ef_position = new b.gr_effect_center;
        this.ef_position.name = "ef_position";
        this.ef_position.parent = this;
        this.ef_position.setTransform(0,
            -202);
        this.timeline.addTween(a.Tween.get(this.ef_position).wait(1));
        this.c = new b.replace_chracacter7;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-6.75, -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = h(b.chara_replace7, new a.Rectangle(-237.5, -399.4, 475, 525), null);
    (b.chara_replace6 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF00FF").s().p("AhRBGIBRiLIBSCLg");
        this.shape.setTransform(.025, 9.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.ef_position = new b.gr_effect_center;
        this.ef_position.name = "ef_position";
        this.ef_position.parent = this;
        this.ef_position.setTransform(0, -202);
        this.timeline.addTween(a.Tween.get(this.ef_position).wait(1));
        this.c = new b.replace_chracacter6;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-6.75, -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = h(b.chara_replace6, new a.Rectangle(-237.5, -399.4,
        475, 525), null);
    (b.chara_replace5 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#35ABFF").s().p("AhRBGIBRiLIBSCLg");
        this.shape.setTransform(.025, 9.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.ef_position = new b.gr_effect_center;
        this.ef_position.name = "ef_position";
        this.ef_position.parent = this;
        this.ef_position.setTransform(0, -202);
        this.timeline.addTween(a.Tween.get(this.ef_position).wait(1));
        this.c = new b.replace_chracacter5;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-6.75, -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = h(b.chara_replace5, new a.Rectangle(-237.5, -399.4, 475, 525), null);
    (b.chara_replace4 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF3582").s().p("AhRBGIBRiLIBSCLg");
        this.shape.setTransform(.025, 9.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.ef_position = new b.gr_effect_center;
        this.ef_position.name =
            "ef_position";
        this.ef_position.parent = this;
        this.ef_position.setTransform(0, -202);
        this.timeline.addTween(a.Tween.get(this.ef_position).wait(1));
        this.c = new b.replace_chracacter4;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-6.75, -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = h(b.chara_replace4, new a.Rectangle(-237.5, -399.4, 475, 525), null);
    (b.chara_replace3 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF6C35").s().p("AhRBGIBRiLIBSCLg");
        this.shape.setTransform(.025, 9.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.ef_position = new b.gr_effect_center;
        this.ef_position.name = "ef_position";
        this.ef_position.parent = this;
        this.ef_position.setTransform(0, -202);
        this.timeline.addTween(a.Tween.get(this.ef_position).wait(1));
        this.c = new b.replace_chracacter3;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-6.75, -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = h(b.chara_replace3,
        new a.Rectangle(-237.5, -399.4, 475, 525), null);
    (b.chara_replace2 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFD35").s().p("AhRBGIBRiLIBSCLg");
        this.shape.setTransform(.025, 9.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.ef_position = new b.gr_effect_center;
        this.ef_position.name = "ef_position";
        this.ef_position.parent = this;
        this.ef_position.setTransform(0, -202);
        this.timeline.addTween(a.Tween.get(this.ef_position).wait(1));
        this.c = new b.replace_chracacter2;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-6.75, -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = h(b.chara_replace2, new a.Rectangle(-237.5, -399.4, 475, 525), null);
    (b.chara_replace1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#70FF35").s().p("AhRBGIBRiLIBSCLg");
        this.shape.setTransform(.025, 9.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.ef_position = new b.gr_effect_center;
        this.ef_position.name =
            "ef_position";
        this.ef_position.parent = this;
        this.ef_position.setTransform(0, -202);
        this.timeline.addTween(a.Tween.get(this.ef_position).wait(1));
        this.c = new b.replace_chracacter1;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-6.75, -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = h(b.chara_replace1, new a.Rectangle(-237.5, -399.4, 475, 525), null);
    (b.symbol8 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.symbol7;
        this.instance.parent = this;
        this.instance.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.symbol8, new a.Rectangle(-140, -47.5, 280, 91), null);
    (b.square3 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 25.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 23.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7,
            20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = h(b.square3, new a.Rectangle(0, 17.5, 1.5, 9), null);
    (b.square2d = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 =
            new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7,
            .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = h(b.square2d, new a.Rectangle(0, 0, 1.5, 14), null);
    (b.square2c = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7,
            18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new b.squear;
        this.instance_6.parent =
            this;
        this.instance_6.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new b.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new b.squear;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype =
        h(b.square2c, new a.Rectangle(0, 0, 1.5, 21.5), null);
    (b.square2 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 25.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 23.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7,
            18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new b.squear;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new b.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new b.squear;
        this.instance_8.parent =
            this;
        this.instance_8.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_9 = new b.squear;
        this.instance_9.parent = this;
        this.instance_9.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_10 = new b.squear;
        this.instance_10.parent = this;
        this.instance_10.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                },
                {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = h(b.square2, new a.Rectangle(0, 0, 1.5, 26.5), null);
    (b.sprite66b = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_10 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(10).call(this.frame_10).wait(1));
        this.instance = new b.shape65_star("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(2.7, .95, 3.4133, 4.8676, 45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -1.4,
            regY: -2.3,
            scaleX: 3.1879,
            scaleY: 4.083,
            rotation: 10.6181,
            x: 27.4,
            y: -45.75
        }, 0).wait(1).to({
            scaleX: 3.0466,
            scaleY: 3.5909,
            rotation: -10.9492,
            x: 41.5,
            y: -66
        }, 0).wait(1).to({
            scaleX: 2.9515,
            scaleY: 3.2599,
            rotation: -25.4533,
            x: 51.85,
            y: -79.1
        }, 0).wait(1).to({
            scaleX: 2.8871,
            scaleY: 3.0357,
            rotation: -35.2756,
            x: 59.3,
            y: -88
        }, 0).wait(1).to({
            scaleX: 2.845,
            scaleY: 2.8893,
            rotation: -41.6917,
            x: 64.4,
            y: -93.75
        }, 0).wait(1).to({
            scaleX: 2.8197,
            scaleY: 2.8012,
            rotation: -45.5526,
            x: 67.45,
            y: -97.3
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 2.802,
            scaleY: 2.7395,
            rotation: -48.2594,
            x: 77,
            y: -98.5
        }, 0).wait(1).to({
            scaleY: 2.7394,
            rotation: -59.9604,
            x: 81.1,
            y: -101.65,
            alpha: .4297
        }, 0).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-10.2, -118.4, 95.7, 125.30000000000001);
    (b.sprite66 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_10 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(10).call(this.frame_10).wait(1));
        this.instance = new b.shape65_star("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(2.7, .95, 3.4133,
            4.8676, 45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -1.4,
            regY: -2.3,
            scaleX: 3.1879,
            scaleY: 4.083,
            rotation: 10.6181,
            x: -13.2,
            y: -36.05
        }, 0).wait(1).to({
            scaleX: 3.0466,
            scaleY: 3.5909,
            rotation: -10.9492,
            x: -24.65,
            y: -50.25
        }, 0).wait(1).to({
            scaleX: 2.9515,
            scaleY: 3.2599,
            rotation: -25.4533,
            x: -31.45,
            y: -59.25
        }, 0).wait(1).to({
            scaleX: 2.8871,
            scaleY: 3.0357,
            rotation: -35.2756,
            x: -35.65,
            y: -65.4
        }, 0).wait(1).to({
            scaleX: 2.845,
            scaleY: 2.8893,
            rotation: -41.6917,
            x: -38.15,
            y: -69.35
        }, 0).wait(1).to({
            scaleX: 2.8197,
            scaleY: 2.8012,
            rotation: -45.5526,
            x: -39.65,
            y: -71.8
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 2.802,
            scaleY: 2.7395,
            rotation: -48.2594,
            x: -33.35,
            y: -72.25
        }, 0).wait(1).to({
            x: -35.45,
            y: -75.95,
            alpha: .4609
        }, 0).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-59.8, -94.1, 92.3, 101);
    (b.powder_rise_inner = function(c, d, f) {
        this.initialize(c, d, f, {
            r: 46,
            "-": 90
        });
        this.frame_0 = function() {
            this.rotation += Math.floor(14 * Math.random());
            this.gotoAndPlay(Math.floor(40 * Math.random() + 42))
        };
        this.frame_90 =
            function() {
                this.gotoAndPlay("r")
            };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(90).call(this.frame_90).wait(1));
        this.instance = new b.powder_rise_core;
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(46).to({
            x: .6,
            y: 355.55
        }, 44).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-.6, -18.2, 3.8000000000000003, 375.5);
    (b.powder_rise = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.powder_rise_inner;
        this.instance.parent = this;
        this.instance.setTransform(63.5, 12.8, .5, .5);
        this.instance_1 = new b.powder_rise_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(16.6, 6, .5, .5);
        this.instance_2 = new b.powder_rise_inner;
        this.instance_2.parent = this;
        this.instance_2.setTransform(48.55, 9.75, .8768, .8768);
        this.instance_3 = new b.powder_rise_inner;
        this.instance_3.parent = this;
        this.instance_3.setTransform(96.2, 18.2, .8768, .8768);
        this.instance_4 = new b.powder_rise_inner;
        this.instance_4.parent = this;
        this.instance_4.setTransform(51.7,
            6.65, .5, .5);
        this.instance_5 = new b.powder_rise_inner;
        this.instance_5.parent = this;
        this.instance_5.setTransform(117.95, 19.7, .8768, .8768);
        this.instance_6 = new b.powder_rise_inner;
        this.instance_6.parent = this;
        this.instance_6.setTransform(5.05, 16.3, .8768, .8768);
        this.instance_7 = new b.powder_rise_inner;
        this.instance_7.parent = this;
        this.instance_7.setTransform(105.3, 11.8, .5, .5);
        this.instance_8 = new b.powder_rise_inner;
        this.instance_8.parent = this;
        this.instance_8.setTransform(3.5, 13.2, .5, .5);
        this.instance_9 = new b.powder_rise_inner;
        this.instance_9.parent = this;
        this.instance_9.setTransform(68.35, 16.95, .8768, .8768);
        this.instance_10 = new b.powder_rise_inner;
        this.instance_10.parent = this;
        this.instance_10.setTransform(37, 15.5, .8768, .8768);
        this.instance_11 = new b.powder_rise_inner;
        this.instance_11.parent = this;
        this.instance_11.setTransform(94.85, 8.15, .5, .5);
        this.instance_12 = new b.powder_rise_inner;
        this.instance_12.parent = this;
        this.instance_12.setTransform(61.8, .25, .5, .5);
        this.instance_13 = new b.powder_rise_inner;
        this.instance_13.parent =
            this;
        this.instance_13.setTransform(91.55, 6.65, .5, .5);
        this.instance_14 = new b.powder_rise_inner;
        this.instance_14.parent = this;
        this.instance_14.setTransform(16.7, 13.2, .5, .5);
        this.instance_15 = new b.powder_rise_inner;
        this.instance_15.parent = this;
        this.instance_15.setTransform(49.1, 22.7, .8768, .8768);
        this.instance_16 = new b.powder_rise_inner;
        this.instance_16.parent = this;
        this.instance_16.setTransform(112.7, 14.25, .8768, .8768);
        this.instance_17 = new b.powder_rise_inner;
        this.instance_17.parent = this;
        this.instance_17.setTransform(76.4,
            10.55, .8768, .8768);
        this.instance_18 = new b.powder_rise_inner;
        this.instance_18.parent = this;
        this.instance_18.setTransform(85.9, 11.15, .5, .5);
        this.instance_19 = new b.powder_rise_inner;
        this.instance_19.parent = this;
        this.instance_19.setTransform(75.6, 13.9, .5, .5);
        this.instance_20 = new b.powder_rise_inner;
        this.instance_20.parent = this;
        this.instance_20.setTransform(42.55, 6, .5, .5);
        this.instance_21 = new b.powder_rise_inner;
        this.instance_21.parent = this;
        this.instance_21.setTransform(25.3, 9.95, .5, .5);
        this.instance_22 =
            new b.powder_rise_inner;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-59.85, 12.8, .5, .5);
        this.instance_23 = new b.powder_rise_inner;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-106.75, 6, .5, .5);
        this.instance_24 = new b.powder_rise_inner;
        this.instance_24.parent = this;
        this.instance_24.setTransform(-74.8, 9.75, .8768, .8768);
        this.instance_25 = new b.powder_rise_inner;
        this.instance_25.parent = this;
        this.instance_25.setTransform(-27.15, 18.2, .8768, .8768);
        this.instance_26 = new b.powder_rise_inner;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-71.65, 6.65, .5, .5);
        this.instance_27 = new b.powder_rise_inner;
        this.instance_27.parent = this;
        this.instance_27.setTransform(-5.4, 19.7, .8768, .8768);
        this.instance_28 = new b.powder_rise_inner;
        this.instance_28.parent = this;
        this.instance_28.setTransform(-118.3, 16.3, .8768, .8768);
        this.instance_29 = new b.powder_rise_inner;
        this.instance_29.parent = this;
        this.instance_29.setTransform(-18.05, 11.8, .5, .5);
        this.instance_30 = new b.powder_rise_inner;
        this.instance_30.parent =
            this;
        this.instance_30.setTransform(-119.85, 13.2, .5, .5);
        this.instance_31 = new b.powder_rise_inner;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-55, 16.95, .8768, .8768);
        this.instance_32 = new b.powder_rise_inner;
        this.instance_32.parent = this;
        this.instance_32.setTransform(-86.35, 15.5, .8768, .8768);
        this.instance_33 = new b.powder_rise_inner;
        this.instance_33.parent = this;
        this.instance_33.setTransform(-28.5, 8.15, .5, .5);
        this.instance_34 = new b.powder_rise_inner;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-61.55,
            .25, .5, .5);
        this.instance_35 = new b.powder_rise_inner;
        this.instance_35.parent = this;
        this.instance_35.setTransform(-31.8, 6.65, .5, .5);
        this.instance_36 = new b.powder_rise_inner;
        this.instance_36.parent = this;
        this.instance_36.setTransform(-106.65, 13.2, .5, .5);
        this.instance_37 = new b.powder_rise_inner;
        this.instance_37.parent = this;
        this.instance_37.setTransform(-74.25, 22.7, .8768, .8768);
        this.instance_38 = new b.powder_rise_inner;
        this.instance_38.parent = this;
        this.instance_38.setTransform(-10.65, 14.25, .8768, .8768);
        this.instance_39 =
            new b.powder_rise_inner;
        this.instance_39.parent = this;
        this.instance_39.setTransform(-46.95, 10.55, .8768, .8768);
        this.instance_40 = new b.powder_rise_inner;
        this.instance_40.parent = this;
        this.instance_40.setTransform(-37.45, 11.15, .5, .5);
        this.instance_41 = new b.powder_rise_inner;
        this.instance_41.parent = this;
        this.instance_41.setTransform(-47.75, 13.9, .5, .5);
        this.instance_42 = new b.powder_rise_inner;
        this.instance_42.parent = this;
        this.instance_42.setTransform(-80.8, 6, .5, .5);
        this.instance_43 = new b.powder_rise_inner;
        this.instance_43.parent = this;
        this.instance_43.setTransform(-98.05, 9.95, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_43
                }, {
                    t: this.instance_42
                }, {
                    t: this.instance_41
                }, {
                    t: this.instance_40
                }, {
                    t: this.instance_39
                }, {
                    t: this.instance_38
                }, {
                    t: this.instance_37
                }, {
                    t: this.instance_36
                }, {
                    t: this.instance_35
                }, {
                    t: this.instance_34
                }, {
                    t: this.instance_33
                }, {
                    t: this.instance_32
                }, {
                    t: this.instance_31
                }, {
                    t: this.instance_30
                }, {
                    t: this.instance_29
                }, {
                    t: this.instance_28
                }, {
                    t: this.instance_27
                }, {
                    t: this.instance_26
                },
                {
                    t: this.instance_25
                }, {
                    t: this.instance_24
                }, {
                    t: this.instance_23
                }, {
                    t: this.instance_22
                }, {
                    t: this.instance_21
                }, {
                    t: this.instance_20
                }, {
                    t: this.instance_19
                }, {
                    t: this.instance_18
                }, {
                    t: this.instance_17
                }, {
                    t: this.instance_16
                }, {
                    t: this.instance_15
                }, {
                    t: this.instance_14
                }, {
                    t: this.instance_13
                }, {
                    t: this.instance_12
                }, {
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                },
                {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = h(b.powder_rise, new a.Rectangle(-120.1, -8.8, 240.3, 17.700000000000003), null);
    (b.parts_particle1_2 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.guide_parts_particle_1;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.parts_particle1_3;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7674, .7674);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5693,
            scaleY: .5693,
            rotation: -174.9492,
            x: 63.45,
            y: -63.95,
            alpha: .7229
        }, 0).wait(1).to({
            scaleX: .5097,
            scaleY: .5097,
            rotation: -119.2289,
            x: 69.8,
            y: -92.6,
            alpha: .6395
        }, 0).wait(1).to({
            scaleX: .4735,
            scaleY: .4735,
            rotation: -85.4829,
            x: 73.05,
            y: -105.45,
            alpha: .5889
        }, 0).wait(1).to({
                scaleX: .4484,
                scaleY: .4484,
                rotation: -61.9876,
                x: 75,
                y: -112.55,
                alpha: .5538
            },
            0).wait(1).to({
            scaleX: .4299,
            scaleY: .4299,
            rotation: -44.682,
            x: 76.7,
            y: -118.25,
            alpha: .5278
        }, 0).wait(1).to({
            scaleX: .4159,
            scaleY: .4159,
            rotation: -31.6108,
            x: 78.15,
            y: -122.6,
            alpha: .5083
        }, 0).wait(1).to({
            scaleX: .4052,
            scaleY: .4052,
            rotation: -21.661,
            x: 79.25,
            y: -126,
            alpha: .4934
        }, 0).wait(1).to({
            scaleX: .3972,
            scaleY: .3972,
            rotation: -14.1306,
            x: 80.25,
            y: -128.7,
            alpha: .4821
        }, 0).wait(1).to({
            scaleX: .3912,
            scaleY: .3912,
            rotation: -8.5439,
            x: 81.05,
            y: -130.7,
            alpha: .4737
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: -4.5615,
            x: 81.6,
            y: -132.1,
            alpha: .4678
        }, 0).wait(1).to({
            scaleX: .3841,
            scaleY: .3841,
            rotation: -1.9317,
            x: 82,
            y: -133.05,
            alpha: .4638
        }, 0).wait(1).to({
            scaleX: .3826,
            scaleY: .3826,
            rotation: -.4617,
            x: 82.25,
            y: -133.6,
            alpha: .4616
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 0,
            x: 82.45,
            y: -134,
            alpha: .4609
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.parts_particle1_1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.r = Math.floor(3 *
                Math.random() + 2);
            this.gotoAndPlay(this.r)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.guide_parts_particle_1;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.parts_particle1_3;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7347, .7347);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5967,
            scaleY: .5967,
            rotation: 140.8707,
            x: 62,
            y: -58.8,
            alpha: .8319
        }, 0).wait(1).to({
            scaleX: .5493,
            scaleY: .5493,
            rotation: 189.3068,
            x: 68.95,
            y: -89.2,
            alpha: .774
        }, 0).wait(1).to({
            scaleX: .5163,
            scaleY: .5163,
            rotation: 222.9188,
            x: 73.15,
            y: -105.85,
            alpha: .7339
        }, 0).wait(1).to({
            scaleX: .4911,
            scaleY: .4911,
            rotation: 248.676,
            x: 76.1,
            y: -115.95,
            alpha: .7032
        }, 0).wait(1).to({
            scaleX: .4709,
            scaleY: .4709,
            rotation: 269.3198,
            x: 78.9,
            y: -124.3,
            alpha: .6785
        }, 0).wait(1).to({
            scaleX: .4543,
            scaleY: .4543,
            rotation: 286.2744,
            x: 81.55,
            y: -131.45,
            alpha: .6583
        }, 0).wait(1).to({
            scaleX: .4404,
            scaleY: .4404,
            rotation: 300.3959,
            x: 84.35,
            y: -137.6,
            alpha: .6415
        }, 0).wait(1).to({
            scaleX: .4288,
            scaleY: .4288,
            rotation: 312.2476,
            x: 86.7,
            y: -142.4,
            alpha: .6273
        }, 0).wait(1).to({
            scaleX: .4191,
            scaleY: .4191,
            rotation: 322.2242,
            x: 88.9,
            y: -146.25,
            alpha: .6154
        }, 0).wait(1).to({
            scaleX: .4108,
            scaleY: .4108,
            rotation: 330.6158,
            x: 90.9,
            y: -149.45,
            alpha: .6054
        }, 0).wait(1).to({
            scaleX: .404,
            scaleY: .404,
            rotation: 337.643,
            x: 92.75,
            y: -152.15,
            alpha: .597
        }, 0).wait(1).to({
            scaleX: .3982,
            scaleY: .3982,
            rotation: 343.4783,
            x: 94.3,
            y: -154.45,
            alpha: .59
        }, 0).wait(1).to({
            scaleX: .3936,
            scaleY: .3936,
            rotation: 348.2599,
            x: 95.7,
            y: -156.2,
            alpha: .5843
        }, 0).wait(1).to({
            scaleX: .3898,
            scaleY: .3898,
            rotation: 352.1005,
            x: 96.9,
            y: -157.65,
            alpha: .5797
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: 355.0937,
            x: 97.85,
            y: -158.75,
            alpha: .5762
        }, 0).wait(1).to({
            scaleX: .3847,
            scaleY: .3847,
            rotation: 357.3179,
            x: 98.6,
            y: -159.55,
            alpha: .5735
        }, 0).wait(1).to({
            scaleX: .3832,
            scaleY: .3832,
            rotation: 358.8401,
            x: 99.1,
            y: -160.1,
            alpha: .5717
        }, 0).wait(1).to({
            scaleX: .3823,
            scaleY: .3823,
            rotation: 359.7175,
            x: 99.4,
            y: -160.4,
            alpha: .5706
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 360,
            x: 99.8,
            y: -160.55,
            alpha: .5703
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.particle2 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.particle_pp;
        this.instance.parent = this;
        this.instance.setTransform(0,
            .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.particle_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(41.85, -17.85, .7674, .7674);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5693,
            scaleY: .5693,
            rotation: -174.9492,
            x: 66.9,
            y: -79.8,
            alpha: .7229
        }, 0).wait(1).to({
            scaleX: .5097,
            scaleY: .5097,
            rotation: -119.2289,
            x: 71.85,
            y: -100.95,
            alpha: .6395
        }, 0).wait(1).to({
            scaleX: .4735,
            scaleY: .4735,
            rotation: -85.4829,
            x: 74.35,
            y: -110.15,
            alpha: .5889
        }, 0).wait(1).to({
            scaleX: .4484,
            scaleY: .4484,
            rotation: -61.9876,
            x: 76.1,
            y: -116.2,
            alpha: .5538
        }, 0).wait(1).to({
            scaleX: .4299,
            scaleY: .4299,
            rotation: -44.682,
            x: 77.6,
            y: -120.95,
            alpha: .5278
        }, 0).wait(1).to({
            scaleX: .4159,
            scaleY: .4159,
            rotation: -31.6108,
            x: 78.8,
            y: -124.55,
            alpha: .5083
        }, 0).wait(1).to({
            scaleX: .4052,
            scaleY: .4052,
            rotation: -21.661,
            x: 79.75,
            y: -127.35,
            alpha: .4934
        }, 0).wait(1).to({
            scaleX: .3972,
            scaleY: .3972,
            rotation: -14.1306,
            x: 80.6,
            y: -129.6,
            alpha: .4821
        }, 0).wait(1).to({
            scaleX: .3912,
            scaleY: .3912,
            rotation: -8.5439,
            x: 81.3,
            y: -131.25,
            alpha: .4737
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: -4.5615,
            x: 81.75,
            y: -132.4,
            alpha: .4678
        }, 0).wait(1).to({
            scaleX: .3841,
            scaleY: .3841,
            rotation: -1.9317,
            x: 82.05,
            y: -133.2,
            alpha: .4638
        }, 0).wait(1).to({
            scaleX: .3826,
            scaleY: .3826,
            rotation: -.4617,
            x: 82.25,
            y: -133.65,
            alpha: .4616
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 0,
            x: 82.45,
            y: -134,
            alpha: .4609
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.particle1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.r = Math.floor(3 * Math.random() + 2);
            this.gotoAndPlay(this.r)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.particle_pp;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.particle_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(40.95,
            -17, .7347, .7347);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5967,
            scaleY: .5967,
            rotation: 140.8707,
            x: 66.1,
            y: -77.15,
            alpha: .8319
        }, 0).wait(1).to({
            scaleX: .5493,
            scaleY: .5493,
            rotation: 189.3068,
            x: 71.8,
            y: -101.4,
            alpha: .774
        }, 0).wait(1).to({
            scaleX: .5163,
            scaleY: .5163,
            rotation: 222.9188,
            x: 75.3,
            y: -113.55,
            alpha: .7339
        }, 0).wait(1).to({
            scaleX: .4911,
            scaleY: .4911,
            rotation: 248.676,
            x: 78.2,
            y: -122.3,
            alpha: .7032
        }, 0).wait(1).to({
            scaleX: .4709,
            scaleY: .4709,
            rotation: 269.3198,
            x: 80.9,
            y: -129.65,
            alpha: .6785
        }, 0).wait(1).to({
            scaleX: .4543,
            scaleY: .4543,
            rotation: 286.2744,
            x: 83.5,
            y: -135.95,
            alpha: .6583
        }, 0).wait(1).to({
            scaleX: .4404,
            scaleY: .4404,
            rotation: 300.3959,
            x: 86.05,
            y: -141.05,
            alpha: .6415
        }, 0).wait(1).to({
            scaleX: .4288,
            scaleY: .4288,
            rotation: 312.2476,
            x: 88.15,
            y: -144.95,
            alpha: .6273
        }, 0).wait(1).to({
            scaleX: .4191,
            scaleY: .4191,
            rotation: 322.2242,
            x: 90.15,
            y: -148.3,
            alpha: .6154
        }, 0).wait(1).to({
            scaleX: .4108,
            scaleY: .4108,
            rotation: 330.6158,
            x: 91.95,
            y: -151.05,
            alpha: .6054
        }, 0).wait(1).to({
            scaleX: .404,
            scaleY: .404,
            rotation: 337.643,
            x: 93.6,
            y: -153.35,
            alpha: .597
        }, 0).wait(1).to({
            scaleX: .3982,
            scaleY: .3982,
            rotation: 343.4783,
            x: 94.95,
            y: -155.3,
            alpha: .59
        }, 0).wait(1).to({
            scaleX: .3936,
            scaleY: .3936,
            rotation: 348.2599,
            x: 96.2,
            y: -156.8,
            alpha: .5843
        }, 0).wait(1).to({
            scaleX: .3898,
            scaleY: .3898,
            rotation: 352.1005,
            x: 97.25,
            y: -158.05,
            alpha: .5797
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: 355.0937,
            x: 98.05,
            y: -159,
            alpha: .5762
        }, 0).wait(1).to({
            scaleX: .3847,
            scaleY: .3847,
            rotation: 357.3179,
            x: 98.7,
            y: -159.65,
            alpha: .5735
        }, 0).wait(1).to({
            scaleX: .3832,
            scaleY: .3832,
            rotation: 358.8401,
            x: 99.15,
            y: -160.15,
            alpha: .5717
        }, 0).wait(1).to({
            scaleX: .3823,
            scaleY: .3823,
            rotation: 359.7175,
            x: 99.4,
            y: -160.4,
            alpha: .5706
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 360,
            x: 99.8,
            y: -160.55,
            alpha: .5703
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.particle_white_b = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_18 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(18).call(this.frame_18).wait(1));
        this.instance = new b.shape65_star_b("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(17.75, -23.1, 3.4133, 4.8676, 45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -1.8,
            regY: -2,
            scaleX: 3.2677,
            scaleY: 4.361,
            rotation: 22.7983,
            x: 29.85,
            y: -51.4
        }, 0).wait(1).to({
            scaleX: 3.16,
            scaleY: 3.986,
            rotation: 6.3649,
            x: 37.5,
            y: -62.85
        }, 0).wait(1).to({
            scaleX: 3.0766,
            scaleY: 3.6957,
            rotation: -6.3549,
            x: 44.05,
            y: -71.35
        }, 0).wait(1).to({
                scaleX: 3.0107,
                scaleY: 3.4661,
                rotation: -16.4162,
                x: 49.6,
                y: -77.85
            },
            0).wait(1).to({
            scaleX: 2.9581,
            scaleY: 3.2829,
            rotation: -24.4463,
            x: 54.3,
            y: -83
        }, 0).wait(1).to({
            scaleX: 2.9161,
            scaleY: 3.1367,
            rotation: -30.8546,
            x: 58.2,
            y: -87.1
        }, 0).wait(1).to({
            scaleX: 2.8828,
            scaleY: 3.0209,
            rotation: -35.927,
            x: 61.4,
            y: -90.35
        }, 0).wait(1).to({
            scaleX: 2.857,
            scaleY: 2.9308,
            rotation: -39.875,
            x: 63.95,
            y: -92.9
        }, 0).wait(1).to({
            scaleX: 2.8373,
            scaleY: 2.8625,
            rotation: -42.8662,
            x: 65.9,
            y: -94.85
        }, 0).wait(1).to({
            scaleX: 2.823,
            scaleY: 2.8126,
            rotation: -45.0521,
            x: 67.35,
            y: -96.25
        }, 0).wait(1).to({
            scaleX: 2.8127,
            scaleY: 2.7767,
            rotation: -46.6252,
            x: 68.4,
            y: -97.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 2.802,
            scaleY: 2.7395,
            rotation: -48.2594,
            x: 77,
            y: -98.5
        }, 0).to({
            scaleY: 2.7394,
            rotation: -59.9604,
            x: 81.1,
            y: -101.65,
            alpha: .4297
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-14.9, -122.8, 111.60000000000001, 123.89999999999999);
    (b.particle_white_a = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_13 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(13).call(this.frame_13).wait(1));
        this.instance = new b.shape65_star_b("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-11.25, -19.85, 3.4133, 4.8676, 45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -1.8,
            regY: -2,
            scaleX: 3.2285,
            scaleY: 4.2244,
            rotation: 16.8128,
            x: -21,
            y: -45.45
        }, 0).wait(1).to({
            scaleX: 3.1023,
            scaleY: 3.7849,
            rotation: -2.4506,
            x: -28.35,
            y: -53.8
        }, 0).wait(1).to({
            scaleX: 3.0107,
            scaleY: 3.4661,
            rotation: -16.4162,
            x: -32.95,
            y: -59.45
        }, 0).wait(1).to({
                scaleX: 2.943,
                scaleY: 3.2304,
                rotation: -26.7465,
                x: -35.9,
                y: -63.5
            },
            0).wait(1).to({
            scaleX: 2.893,
            scaleY: 3.0564,
            rotation: -34.3705,
            x: -37.8,
            y: -66.5
        }, 0).wait(1).to({
            scaleX: 2.857,
            scaleY: 2.9308,
            rotation: -39.875,
            x: -39.05,
            y: -68.7
        }, 0).wait(1).to({
            scaleX: 2.832,
            scaleY: 2.844,
            rotation: -43.6766,
            x: -39.9,
            y: -70.25
        }, 0).wait(1).to({
            scaleX: 2.8158,
            scaleY: 2.7876,
            rotation: -46.1509,
            x: -40.35,
            y: -71.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 2.802,
            scaleY: 2.7395,
            rotation: -48.2594,
            x: -33.35,
            y: -72.25
        }, 0).to({
            scaleY: 2.7394,
            rotation: -53.2043,
            x: -35.45,
            y: -75.95,
            alpha: .4609
        }, 2, a.Ease.get(1)).to({
                _off: !0
            },
            1).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-65.8, -98.5, 92.19999999999999, 102.9);
    (b.particle_burst_parts = function(c, d, f) {
        null == f && (f = !1);
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3));
        this.instance = new b.sr_kira_star_inner;
        this.instance.parent = this;
        this.instance.setTransform(-.15, -.15, .592, .592, 118.0544);
        this.timeline.addTween(a.Tween.get(this.instance).wait(3))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-20.1, -20.2, 40, 40.099999999999994);
    (b.particle_burst = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_16 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(16).call(this.frame_16).wait(1));
        this.instance = new b.direction;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1, 1.8711);
        this.instance.filters = [new a.ColorFilter(0, 0, 0, 1, 0, 236, 240, 0)];
        this.instance.cache(-3, -3, 6, 38);
        this.timeline.addTween(a.Tween.get(this.instance).wait(17));
        this.instance_1 =
            new b.particle_burst_parts;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .9246, .9246);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            scaleX: .7333,
            scaleY: .7333,
            y: 45
        }, 11, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            y: 50
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            scaleX: .3806,
            scaleY: .3806,
            y: 52,
            alpha: .4883
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-18.5, -18.6, 37, 83.1);
    (b.mc_view_heart_point = function(c, d, f) {
        this.initialize(c, d,
            f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.p_p = new b.heart_num_p;
        this.p_p.name = "p_p";
        this.p_p.parent = this;
        this.p_p.setTransform(-4.25, -3.4, 1, 1, 0, 0, 0, 11.6, 11);
        this.p_p.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.p_p).wait(1).to({
            alpha: 1
        }, 0).wait(1));
        this.p = new b.heart_num;
        this.p.name = "p";
        this.p.parent = this;
        this.p.setTransform(-4.25, -3.4, 1, 1, 0, 0, 0, 11.6, 11);
        this.timeline.addTween(a.Tween.get(this.p).wait(1).to({
            alpha: 0
        }, 0).wait(1))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-15.8, -14.4, 31.700000000000003, 30.799999999999997);
    (b.mc_heart = function(c, d, f) {
        this.initialize(c, d, f, {
            run: 1
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_13 = function() {
            this.gotoAndStop(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));
        this.instance = new b.gr_heart_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .8181, .8181);
        this.instance.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
                alpha: .6992
            },
            0).wait(1).to({
            alpha: 0
        }, 0).wait(12));
        this.instance_1 = new b.gr_heart_w;
        this.instance_1.parent = this;
        this.instance_1.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(2).to({
            scaleX: 1.2167,
            scaleY: 1.2167,
            alpha: .6211,
            compositeOperation: NaN
        }, 0).to({
            scaleX: .95,
            scaleY: .95,
            alpha: 0
        }, 3, a.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 1
        }, 2).wait(7));
        this.instance_2 = new b.gr_heart;
        this.instance_2.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            scaleX: .8181,
            scaleY: .8181
        }, 0).wait(1).to({
            scaleX: 1.2167,
            scaleY: 1.2167
        }, 0).to({
            scaleX: .95,
            scaleY: .95
        }, 3, a.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 1
        }, 2).wait(7))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-21, -18.2, 39, 36.5);
    (b.gr_select_base = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.gr_line;
        this.instance.parent = this;
        this.instance.setTransform(0, -28);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.popup_base;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-120, -51, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype =
        h(b.gr_select_base, new a.Rectangle(-120, -68.5, 240, 137), null);
    (b.gr_log_text_container = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.view_txt = new a.Text("\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff10\uff11\uff12\uff13\uff14\n\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff10\uff11\uff12\uff13\uff14\n\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff10\uff11\uff12\uff13\uff14\n\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff10\uff11\uff12\uff13\uff14", "8px 'Arial'");
        this.view_txt.name = "view_txt";
        this.view_txt.lineHeight = 9;
        this.view_txt.lineWidth = 179;
        this.view_txt.parent = this;
        this.view_txt.setTransform(-7, 15);
        this.timeline.addTween(a.Tween.get(this.view_txt).wait(1));
        this.view_name = new a.Text("\u82b3\u4e43", "10px 'Arial'");
        this.view_name.name = "view_name";
        this.view_name.lineHeight = 10;
        this.view_name.lineWidth = 132;
        this.view_name.parent = this;
        this.view_name.setTransform(2, 1);
        this.timeline.addTween(a.Tween.get(this.view_name).wait(1));
        this.instance = new b.square3;
        this.instance.parent =
            this;
        this.instance.setTransform(179.9, 14.05, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_1 = new b.square2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(152.4, 14.05, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_2 = new b.square2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(124.95, 14.05, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_3 = new b.square2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(97.45, 14.05, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_4 = new b.square2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(69.95,
            14.05, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_5 = new b.square2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(42.45, 14.05, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_6 = new b.square2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(14.95, 14.05, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_7 = new b.square2d;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-5.55, 14, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_8 = new b.square2d;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-2.9, 14, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_9 =
            new b.square2d;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-.25, 14, 1, 1, 0, 0, 0, .7, 13.2);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = h(b.gr_log_text_container, new a.Rectangle(-9, -1, 184.6, 56.6), null);
    (b.gr_episode_commu_fin = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_30 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(30).call(this.frame_30).wait(1));
        this.instance = new b.episode_end_letter10;
        this.instance.parent = this;
        this.instance.setTransform(305.55, 0);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            x: 176.2599
        }, 0).wait(1).to({
            x: 124.8395
        }, 0).wait(1).to({
            x: 98.3894
        }, 0).wait(1).to({
            x: 89.55
        }, 0).wait(1).to({
            x: 88.6611
        }, 0).wait(1).to({
            x: 87.7722
        }, 0).wait(1).to({
            x: 86.8833
        }, 0).wait(1).to({
                x: 85.9944
            },
            0).wait(1).to({
            x: 85.1056
        }, 0).wait(1).to({
            x: 84.2167
        }, 0).wait(1).to({
            x: 83.3278
        }, 0).wait(1).to({
            x: 82.4389
        }, 0).wait(1).to({
            x: 81.55
        }, 0).wait(1).to({
            x: 77.5974
        }, 0).wait(1).to({
            x: 63.9391
        }, 0).wait(1).to({
            x: 36.124
        }, 0).wait(1).to({
            x: -16.0964
        }, 0).wait(1).to({
            x: -134.45
        }, 0).to({
            _off: !0
        }, 1).wait(7));
        this.instance_1 = new b.episode_end_letter9;
        this.instance_1.parent = this;
        this.instance_1.setTransform(286.5, -.45);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
                x: 157.2099
            },
            0).wait(1).to({
            x: 105.7895
        }, 0).wait(1).to({
            x: 79.3394
        }, 0).wait(1).to({
            x: 70.5
        }, 0).wait(1).to({
            x: 69.6111
        }, 0).wait(1).to({
            x: 68.7222
        }, 0).wait(1).to({
            x: 67.8333
        }, 0).wait(1).to({
            x: 66.9444
        }, 0).wait(1).to({
            x: 66.0556
        }, 0).wait(1).to({
            x: 65.1667
        }, 0).wait(1).to({
            x: 64.2778
        }, 0).wait(1).to({
            x: 63.3889
        }, 0).wait(1).to({
            x: 62.5
        }, 0).wait(1).to({
            x: 58.5474
        }, 0).wait(1).to({
            x: 44.8891
        }, 0).wait(1).to({
            x: 17.074
        }, 0).wait(1).to({
            x: -35.1464
        }, 0).wait(1).to({
            x: -153.5
        }, 0).to({
            _off: !0
        }, 1).wait(7));
        this.instance_2 = new b.episode_end_letter8;
        this.instance_2.parent = this;
        this.instance_2.setTransform(267.5, .9);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(4).to({
            _off: !1
        }, 0).wait(1).to({
            x: 138.2099
        }, 0).wait(1).to({
            x: 86.7895
        }, 0).wait(1).to({
            x: 60.3394
        }, 0).wait(1).to({
            x: 51.5
        }, 0).wait(1).to({
            x: 50.6111
        }, 0).wait(1).to({
            x: 49.7222
        }, 0).wait(1).to({
            x: 48.8333
        }, 0).wait(1).to({
            x: 47.9444
        }, 0).wait(1).to({
            x: 47.0556
        }, 0).wait(1).to({
            x: 46.1667
        }, 0).wait(1).to({
            x: 45.2778
        }, 0).wait(1).to({
            x: 44.3889
        }, 0).wait(1).to({
            x: 43.5
        }, 0).wait(1).to({
                x: 39.5474
            },
            0).wait(1).to({
            x: 25.8891
        }, 0).wait(1).to({
            x: -1.926
        }, 0).wait(1).to({
            x: -54.1464
        }, 0).wait(1).to({
            x: -172.5
        }, 0).to({
            _off: !0
        }, 1).wait(8));
        this.instance_3 = new b.episode_end_letter7;
        this.instance_3.parent = this;
        this.instance_3.setTransform(248.5, -.2);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(4).to({
            _off: !1
        }, 0).wait(1).to({
            x: 119.2099
        }, 0).wait(1).to({
            x: 67.7895
        }, 0).wait(1).to({
            x: 41.3394
        }, 0).wait(1).to({
            x: 32.5
        }, 0).wait(1).to({
            x: 31.6111
        }, 0).wait(1).to({
            x: 30.7222
        }, 0).wait(1).to({
                x: 29.8333
            },
            0).wait(1).to({
            x: 28.9444
        }, 0).wait(1).to({
            x: 28.0556
        }, 0).wait(1).to({
            x: 27.1667
        }, 0).wait(1).to({
            x: 26.2778
        }, 0).wait(1).to({
            x: 25.3889
        }, 0).wait(1).to({
            x: 24.5
        }, 0).wait(1).to({
            x: 20.5474
        }, 0).wait(1).to({
            x: 6.8891
        }, 0).wait(1).to({
            x: -20.926
        }, 0).wait(1).to({
            x: -73.1464
        }, 0).wait(1).to({
            x: -191.5
        }, 0).to({
            _off: !0
        }, 1).wait(8));
        this.instance_4 = new b.episode_end_letter6;
        this.instance_4.parent = this;
        this.instance_4.setTransform(229.5, -.15);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(4).to({
                _off: !1
            },
            0).wait(1).to({
            x: 100.2099
        }, 0).wait(1).to({
            x: 48.7895
        }, 0).wait(1).to({
            x: 22.3394
        }, 0).wait(1).to({
            x: 13.5
        }, 0).wait(1).to({
            x: 12.6111
        }, 0).wait(1).to({
            x: 11.7222
        }, 0).wait(1).to({
            x: 10.8333
        }, 0).wait(1).to({
            x: 9.9444
        }, 0).wait(1).to({
            x: 9.0556
        }, 0).wait(1).to({
            x: 8.1667
        }, 0).wait(1).to({
            x: 7.2778
        }, 0).wait(1).to({
            x: 6.3889
        }, 0).wait(1).to({
            x: 5.5
        }, 0).wait(1).to({
            x: 1.5474
        }, 0).wait(1).to({
            x: -12.1109
        }, 0).wait(1).to({
            x: -39.926
        }, 0).wait(1).to({
            x: -92.1464
        }, 0).wait(1).to({
            x: -210.5
        }, 0).to({
            _off: !0
        }, 1).wait(8));
        this.instance_5 =
            new b.episode_end_letter5;
        this.instance_5.parent = this;
        this.instance_5.setTransform(211.4, -.35);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(3).to({
            _off: !1
        }, 0).wait(1).to({
            x: 97.4579
        }, 0).wait(1).to({
            x: 47.3648
        }, 0).wait(1).to({
            x: 17.7887
        }, 0).wait(1).to({
            x: 1.1149
        }, 0).wait(1).to({
            x: -4.6
        }, 0).wait(1).to({
            x: -5.4889
        }, 0).wait(1).to({
            x: -6.3778
        }, 0).wait(1).to({
            x: -7.2667
        }, 0).wait(1).to({
            x: -8.1556
        }, 0).wait(1).to({
            x: -9.0444
        }, 0).wait(1).to({
            x: -9.9333
        }, 0).wait(1).to({
                x: -10.8222
            },
            0).wait(1).to({
            x: -11.7111
        }, 0).wait(1).to({
            x: -12.6
        }, 0).wait(1).to({
            x: -16.5526
        }, 0).wait(1).to({
            x: -30.2109
        }, 0).wait(1).to({
            x: -58.026
        }, 0).wait(1).to({
            x: -110.2464
        }, 0).wait(1).to({
            x: -228.6
        }, 0).to({
            _off: !0
        }, 1).wait(8));
        this.instance_6 = new b.episode_end_letter4;
        this.instance_6.parent = this;
        this.instance_6.setTransform(191.5, -1.2);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(3).to({
            _off: !1
        }, 0).wait(1).to({
            x: 62.2099
        }, 0).wait(1).to({
            x: 10.7895
        }, 0).wait(1).to({
            x: -15.6606
        }, 0).wait(1).to({
                x: -24.5
            },
            0).wait(1).to({
            x: -25.3889
        }, 0).wait(1).to({
            x: -26.2778
        }, 0).wait(1).to({
            x: -27.1667
        }, 0).wait(1).to({
            x: -28.0556
        }, 0).wait(1).to({
            x: -28.9444
        }, 0).wait(1).to({
            x: -29.8333
        }, 0).wait(1).to({
            x: -30.7222
        }, 0).wait(1).to({
            x: -31.6111
        }, 0).wait(1).to({
            x: -32.5
        }, 0).wait(1).to({
            x: -36.4526
        }, 0).wait(1).to({
            x: -50.1109
        }, 0).wait(1).to({
            x: -77.926
        }, 0).wait(1).to({
            x: -130.1464
        }, 0).wait(1).to({
            x: -248.5
        }, 0).to({
            _off: !0
        }, 1).wait(9));
        this.instance_7 = new b.episode_end_letter3;
        this.instance_7.parent = this;
        this.instance_7.setTransform(172.35,
            -.05);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(2).to({
            _off: !1
        }, 0).wait(1).to({
            x: 58.4079
        }, 0).wait(1).to({
            x: 8.3148
        }, 0).wait(1).to({
            x: -21.2613
        }, 0).wait(1).to({
            x: -37.9351
        }, 0).wait(1).to({
            x: -43.65
        }, 0).wait(1).to({
            x: -44.5389
        }, 0).wait(1).to({
            x: -45.4278
        }, 0).wait(1).to({
            x: -46.3167
        }, 0).wait(1).to({
            x: -47.2056
        }, 0).wait(1).to({
            x: -48.0944
        }, 0).wait(1).to({
            x: -48.9833
        }, 0).wait(1).to({
            x: -49.8722
        }, 0).wait(1).to({
            x: -50.7611
        }, 0).wait(1).to({
            x: -51.65
        }, 0).wait(1).to({
                x: -55.6026
            },
            0).wait(1).to({
            x: -69.2609
        }, 0).wait(1).to({
            x: -97.076
        }, 0).wait(1).to({
            x: -149.2964
        }, 0).wait(1).to({
            x: -267.65
        }, 0).to({
            _off: !0
        }, 1).wait(9));
        this.instance_8 = new b.episode_end_letter2;
        this.instance_8.parent = this;
        this.instance_8.setTransform(153.9, -.9);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            x: 39.9579
        }, 0).wait(1).to({
            x: -10.1352
        }, 0).wait(1).to({
            x: -39.7113
        }, 0).wait(1).to({
            x: -56.3851
        }, 0).wait(1).to({
            x: -62.1
        }, 0).wait(1).to({
            x: -62.9889
        }, 0).wait(1).to({
                x: -63.8778
            },
            0).wait(1).to({
            x: -64.7667
        }, 0).wait(1).to({
            x: -65.6556
        }, 0).wait(1).to({
            x: -66.5444
        }, 0).wait(1).to({
            x: -67.4333
        }, 0).wait(1).to({
            x: -68.3222
        }, 0).wait(1).to({
            x: -69.2111
        }, 0).wait(1).to({
            x: -70.1
        }, 0).wait(1).to({
            x: -74.0526
        }, 0).wait(1).to({
            x: -87.7109
        }, 0).wait(1).to({
            x: -115.526
        }, 0).wait(1).to({
            x: -167.7464
        }, 0).wait(1).to({
            x: -286.1
        }, 0).to({
            _off: !0
        }, 1).wait(10));
        this.instance_9 = new b.episode_end_letter1;
        this.instance_9.parent = this;
        this.instance_9.setTransform(134.5, -.2);
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(1).to({
                x: 20.5579
            },
            0).wait(1).to({
            x: -29.5352
        }, 0).wait(1).to({
            x: -59.1113
        }, 0).wait(1).to({
            x: -75.7851
        }, 0).wait(1).to({
            x: -81.5
        }, 0).wait(1).to({
            x: -82.3889
        }, 0).wait(1).to({
            x: -83.2778
        }, 0).wait(1).to({
            x: -84.1667
        }, 0).wait(1).to({
            x: -85.0556
        }, 0).wait(1).to({
            x: -85.9444
        }, 0).wait(1).to({
            x: -86.8333
        }, 0).wait(1).to({
            x: -87.7222
        }, 0).wait(1).to({
            x: -88.6111
        }, 0).wait(1).to({
            x: -89.5
        }, 0).wait(1).to({
            x: -93.4526
        }, 0).wait(1).to({
            x: -107.1109
        }, 0).wait(1).to({
            x: -134.926
        }, 0).wait(1).to({
            x: -187.1464
        }, 0).wait(1).to({
            x: -305.5
        }, 0).to({
            _off: !0
        }, 1).wait(11))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-313.5, -9.1, 626.6, 17.2);
    (b.gauge = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_18 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(18).call(this.frame_18).wait(1));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("AvuBtIAAjZIaPAAIAADZg");
        f = (new a.Graphics).p("AvtBtIAAjZIaOAAIAADZg");
        var g = (new a.Graphics).p("AvsBtIAAjZIaPAAIAADZg"),
            n = (new a.Graphics).p("AvqBtIAAjZIaPAAIAADZg"),
            m = (new a.Graphics).p("AvmBtIAAjZIaOAAIAADZg"),
            r =
            (new a.Graphics).p("AvhBtIAAjZIaOAAIAADZg"),
            B = (new a.Graphics).p("AvbBtIAAjZIaOAAIAADZg"),
            C = (new a.Graphics).p("AvUBtIAAjZIaPAAIAADZg"),
            t = (new a.Graphics).p("AvKBtIAAjZIaOAAIAADZg"),
            u = (new a.Graphics).p("Au+BtIAAjZIaOAAIAADZg"),
            v = (new a.Graphics).p("AuwBtIAAjZIaOAAIAADZg"),
            w = (new a.Graphics).p("AufBtIAAjZIaPAAIAADZg"),
            x = (new a.Graphics).p("AuKBtIAAjZIaPAAIAADZg"),
            y = (new a.Graphics).p("AtwBtIAAjZIaOAAIAADZg"),
            z = (new a.Graphics).p("AtQBtIAAjZIaPAAIAADZg"),
            q = (new a.Graphics).p("AtHBtIAAjZIaPAAIAADZg"),
            D = (new a.Graphics).p("AtHBtIAAjZIaPAAIAADZg"),
            E = (new a.Graphics).p("AtHBtIAAjZIaPAAIAADZg"),
            F = (new a.Graphics).p("AtHBtIAAjZIaPAAIAADZg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: d,
            x: -100.675,
            y: 5.225
        }).wait(1).to({
            graphics: f,
            x: -100.632,
            y: 5.225
        }).wait(1).to({
            graphics: g,
            x: -100.4974,
            y: 5.225
        }).wait(1).to({
            graphics: n,
            x: -100.2621,
            y: 5.225
        }).wait(1).to({
            graphics: m,
            x: -99.9152,
            y: 5.225
        }).wait(1).to({
            graphics: r,
            x: -99.4437,
            y: 5.225
        }).wait(1).to({
            graphics: B,
            x: -98.832,
            y: 5.225
        }).wait(1).to({
            graphics: C,
            x: -98.061,
            y: 5.225
        }).wait(1).to({
            graphics: t,
            x: -97.1071,
            y: 5.225
        }).wait(1).to({
            graphics: u,
            x: -95.9402,
            y: 5.225
        }).wait(1).to({
            graphics: v,
            x: -94.521,
            y: 5.225
        }).wait(1).to({
            graphics: w,
            x: -92.7972,
            y: 5.225
        }).wait(1).to({
            graphics: x,
            x: -90.696,
            y: 5.225
        }).wait(1).to({
            graphics: y,
            x: -88.1111,
            y: 5.225
        }).wait(1).to({
            graphics: z,
            x: -84.877,
            y: 5.225
        }).wait(1).to({
            graphics: q,
            x: -77.447,
            y: 5.225
        }).wait(1).to({
            graphics: D,
            x: -66.1363,
            y: 5.225
        }).wait(1).to({
            graphics: E,
            x: -48.996,
            y: 5.225
        }).wait(1).to({
            graphics: F,
            x: -12.025,
            y: 5.225
        }).wait(1));
        this.instance =
            new b.gr_guage_on;
        this.instance.parent = this;
        this.instance.setTransform(1.95, -8.2, 1, 1, 0, 0, 0, 69, 6);
        d = [this.instance];
        for (f = 0; f < d.length; f++) d[f].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance).wait(19));
        this.instance_1 = new b.gr_guage;
        this.instance_1.parent = this;
        this.instance_1.setTransform(1.95, -8.2, 1, 1, 0, 0, 0, 69, 6);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(19))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-67, -14.2, 140, 23);
    (b.effect_lvup_Copy = function(c, d, f) {
        this.initialize(c,
            d, f, {});
        this.frame_0 = function() {};
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.particle_white_a;
        this.instance.parent = this;
        this.instance.setTransform(-.3, -.35, .6564, .6564, -135.1055);
        this.instance_1 = new b.particle_white_a;
        this.instance_1.parent = this;
        this.instance_1.setTransform(1.7, -1.35, .6564, .6564, 0, 45.1055, -134.8945);
        this.instance_2 = new b.particle_white_a;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-3.3,
            -2.35, .6564, .6564, 0, -134.8945, 45.1055);
        this.instance_3 = new b.particle_white_a;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-1.3, -4.35, .6564, .6564, 44.8945);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }, 1).to({
            state: []
        }, 11).wait(1));
        this.instance_4 = new b.particle_white_b;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-.25, -3.1, .4201, .4201, 89.8939);
        this.instance_5 = new b.particle_white_b;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-1.7, -3.1, .4201, .4201, 0, -89.8939, 90.1061);
        this.instance_6 = new b.particle_white_b;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-.25, -.35, .4201, .4201, 0, 90.1061, -89.8939);
        this.instance_7 = new b.particle_white_b;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-1.3, -.35, .4201, .4201, -90.1061);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
                state: [{
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }]
            },
            2).to({
            state: []
        }, 10).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-35.1, -36.1, 68.6, 67.6);
    (b.effect_lvup = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.sprite66;
        this.instance.parent = this;
        this.instance.setTransform(-2.15, -.65, .6564, .6564, -135.1055);
        this.instance_1 = new b.sprite66;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.15, -1.65,
            .6564, .6564, 0, 45.1055, -134.8945);
        this.instance_2 = new b.sprite66;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-5.15, -2.65, .6564, .6564, 0, -134.8945, 45.1055);
        this.instance_3 = new b.sprite66;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-3.15, -4.65, .6564, .6564, 44.8945);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }, 1).to({
            state: []
        }, 11).wait(1));
        this.instance_4 = new b.sprite66b;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(-2.1, -3.4, .4201, .4201, 89.8939);
        this.instance_5 = new b.sprite66b;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-3.55, -3.4, .4201, .4201, 0, -89.8939, 90.1061);
        this.instance_6 = new b.sprite66b;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-2.1, -.65, .4201, .4201, 0, 90.1061, -89.8939);
        this.instance_7 = new b.sprite66b;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-3.15, -.65, .4201, .4201, -90.1061);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                    t: this.instance_7
                },
                {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }
            ]
        }, 2).to({
            state: []
        }, 10).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-26.1, -25.6, 47, 47);
    (b.efa_particle_Set = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.particle2;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
        this.instance_1 = new b.particle2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
        this.instance_2 =
            new b.particle2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(43.45, 31, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_3 = new b.particle1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new b.particle1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.particle1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(32.95, 25.05, .6032, .6032,
            154.5512);
        this.instance_6 = new b.particle2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(7, 31.2, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.particle1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_8 = new b.particle1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_9 = new b.particle2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2.25, 20.95, .5292, .5292,
            134.5199);
        this.instance_10 = new b.particle2;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_11 = new b.particle2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_12 = new b.particle2;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-19.15, 29.35, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_13 = new b.particle1;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-28,
            -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_14 = new b.particle1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_15 = new b.particle2;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_16 = new b.particle1;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-29.4, 10.5, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_17 = new b.particle2;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-32.05,
            -3.5, 1, 1, -135.4791);
        this.instance_18 = new b.particle1;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_19 = new b.particle2;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-9.2, -5.8, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_20 = new b.particle2;
        this.instance_20.parent = this;
        this.instance_20.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_21 = new b.particle2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(6.55,
            -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_22 = new b.particle2;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_23 = new b.particle1;
        this.instance_23.parent = this;
        this.instance_23.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_24 = new b.particle1;
        this.instance_24.parent = this;
        this.instance_24.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_25 = new b.particle1;
        this.instance_25.parent =
            this;
        this.instance_25.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_26 = new b.particle2;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_27 = new b.particle1;
        this.instance_27.parent = this;
        this.instance_27.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_28 = new b.particle1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_29 = new b.particle2;
        this.instance_29.parent =
            this;
        this.instance_29.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_30 = new b.particle2;
        this.instance_30.parent = this;
        this.instance_30.setTransform(46, 17.7, .8585, .8585, 61.4817);
        this.instance_31 = new b.particle2;
        this.instance_31.parent = this;
        this.instance_31.setTransform(44.95, -25.6, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_32 = new b.particle1;
        this.instance_32.parent = this;
        this.instance_32.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_33 = new b.particle1;
        this.instance_33.parent =
            this;
        this.instance_33.setTransform(41.2, 5.95, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_34 = new b.particle1;
        this.instance_34.parent = this;
        this.instance_34.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_35 = new b.particle2;
        this.instance_35.parent = this;
        this.instance_35.setTransform(45.8, -7.4, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_36 = new b.particle1;
        this.instance_36.parent = this;
        this.instance_36.setTransform(37.4, -24.15, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_37 = new b.particle1;
        this.instance_37.parent =
            this;
        this.instance_37.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_38 = new b.particle1;
        this.instance_38.parent = this;
        this.instance_38.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_39 = new b.particle2;
        this.instance_39.parent = this;
        this.instance_39.setTransform(46.15, -7.2, .5292, .5292, 44.5199);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_39
                }, {
                    t: this.instance_38
                }, {
                    t: this.instance_37
                }, {
                    t: this.instance_36
                }, {
                    t: this.instance_35
                }, {
                    t: this.instance_34
                },
                {
                    t: this.instance_33
                }, {
                    t: this.instance_32
                }, {
                    t: this.instance_31
                }, {
                    t: this.instance_30
                }, {
                    t: this.instance_29
                }, {
                    t: this.instance_28
                }, {
                    t: this.instance_27
                }, {
                    t: this.instance_26
                }, {
                    t: this.instance_25
                }, {
                    t: this.instance_24
                }, {
                    t: this.instance_23
                }, {
                    t: this.instance_22
                }, {
                    t: this.instance_21
                }, {
                    t: this.instance_20
                }, {
                    t: this.instance_19
                }, {
                    t: this.instance_18
                }, {
                    t: this.instance_17
                }, {
                    t: this.instance_16
                }, {
                    t: this.instance_15
                }, {
                    t: this.instance_14
                }, {
                    t: this.instance_13
                }, {
                    t: this.instance_12
                }, {
                    t: this.instance_11
                }, {
                    t: this.instance_10
                },
                {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = h(b.efa_particle_Set, new a.Rectangle(-318.7, -245.4, 558.2, 474.70000000000005), null);
    (b.efa_k = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_8 = function() {
            this.gotoAndPlay(this.timeline.position + Math.floor(7 * Math.random() + 1))
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(10));
        this.instance = new b.marker;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(17));
        this.instance_1 = new b.symbol100;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.05, 0, .1255, 1);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .4367,
            scaleY: .6897
        }, 0).to({
            scaleX: .5,
            scaleY: 1,
            alpha: .1289
        }, 4).to({
            _off: !0
        }, 1).wait(11));
        this.instance_2 = new b._kirakira;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_2.alpha = .4297;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            scaleX: 2.7527,
            scaleY: 2.7527,
            rotation: -11.2055,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: 3.456,
            scaleY: 3.456,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 3.4361,
            scaleY: 3.4361,
            rotation: 1.9399,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: 3.3801,
            scaleY: 3.3801,
            rotation: 7.4005,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: 3.2878,
            scaleY: 3.2878,
            rotation: 16.3817,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: 3.1595,
            scaleY: 3.1595,
            rotation: 28.8836,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: 2.9951,
            scaleY: 2.9951,
            rotation: 44.9061,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(10))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-74.1, -42.8, 148.2, 85.69999999999999);
    (b.cur_mc = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_8 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.yajirusi_p;
        this.instance.parent = this;
        this.instance.setTransform(-1.5,
            -1.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -5.3,
            regY: -5.2,
            x: -6.55,
            y: -6.45
        }, 0).wait(1).to({
            x: -6,
            y: -5.9
        }, 0).wait(1).to({
            x: -5.45,
            y: -5.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: -5.3,
            regY: -5.2,
            x: -5.5,
            y: -5.4
        }, 0).wait(1).to({
            x: -6.05,
            y: -5.95
        }, 0).wait(1).to({
            x: -6.6,
            y: -6.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -1.5,
            y: -1.5
        }, 0).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-12.2, -11.8, 12.2, 11.8);
    (b.charaEffect_set = function(c, d, f) {
        this.initialize(c,
            d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(13));
        this.effect1 = new b.replace_effect1;
        this.effect1.name = "effect1";
        this.effect1.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect1).wait(13));
        this.effect2 = new b.replace_effect2;
        this.effect2.name = "effect2";
        this.effect2.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect2).wait(13));
        this.effect3 = new b.replace_effect3;
        this.effect3.name = "effect3";
        this.effect3.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect3).wait(13));
        this.effect4 = new b.replace_effect4;
        this.effect4.name = "effect4";
        this.effect4.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect4).wait(13));
        this.effect5 = new b.replace_effect5;
        this.effect5.name = "effect5";
        this.effect5.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect5).wait(13));
        this.effect6 = new b.replace_effect6;
        this.effect6.name = "effect6";
        this.effect6.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect6).wait(13));
        this.effect7 = new b.replace_effect7;
        this.effect7.name = "effect7";
        this.effect7.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect7).wait(13));
        this.effect8 = new b.replace_effect8;
        this.effect8.name = "effect8";
        this.effect8.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect8).wait(13))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-406.3, -411.2, 815.3, 814.7);
    (b.characters = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(8));
        this.cf1 = new b.chara_replace1;
        this.cf1.name = "cf1";
        this.cf1.parent = this;
        this.cf2 = new b.chara_replace2;
        this.cf2.name = "cf2";
        this.cf2.parent = this;
        this.cf3 = new b.chara_replace3;
        this.cf3.name = "cf3";
        this.cf3.parent = this;
        this.cf4 = new b.chara_replace4;
        this.cf4.name = "cf4";
        this.cf4.parent = this;
        this.cf5 = new b.chara_replace5;
        this.cf5.name = "cf5";
        this.cf5.parent = this;
        this.cf6 = new b.chara_replace6;
        this.cf6.name = "cf6";
        this.cf6.parent = this;
        this.cf7 = new b.chara_replace7;
        this.cf7.name = "cf7";
        this.cf7.parent = this;
        this.cf8 = new b.chara_replace8;
        this.cf8.name =
            "cf8";
        this.cf8.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.cf1
            }]
        }).to({
            state: [{
                t: this.cf2
            }]
        }, 1).to({
            state: [{
                t: this.cf3
            }]
        }, 1).to({
            state: [{
                t: this.cf4
            }]
        }, 1).to({
            state: [{
                t: this.cf5
            }]
        }, 1).to({
            state: [{
                t: this.cf6
            }]
        }, 1).to({
            state: [{
                t: this.cf7
            }]
        }, 1).to({
            state: [{
                t: this.cf8
            }]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-211.5, -399.4, 420, 525);
    (b.c_col = function(c, d, f) {
        this.initialize(c, d, f, {
            def: 0,
            dark: 5
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_5 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));
        this.c_b = new b.characters_b;
        this.c_b.name = "c_b";
        this.c_b.parent = this;
        this.c_b.setTransform(-6.75, -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.c_b.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.c_b).wait(5).to({
            alpha: .3984
        }, 0).wait(5));
        this.c = new b.characters;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(0, -250, 1, 1, 0, 0, 0, 0, -250);
        this.timeline.addTween(a.Tween.get(this.c).wait(10))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-211.5, -399.4, 420, 525);
    (b.bg_sidemotion = function(c, d, f) {
        this.initialize(c, d, f, {
            C: 0,
            CtoR: 1,
            R: 16,
            RtoC: 17,
            CtoL: 33,
            L: 48,
            LtoC: 49
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_16 = function() {
            this.stop()
        };
        this.frame_32 = function() {
            this.stop()
        };
        this.frame_48 = function() {
            this.stop()
        };
        this.frame_64 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(16).call(this.frame_32).wait(16).call(this.frame_48).wait(16).call(this.frame_64).wait(1));
        this.bg_ = new b.bg_;
        this.bg_.name = "bg_";
        this.bg_.parent = this;
        this.bg_.setTransform(0, -43, 1, 1, 0, 0, 0, 240, 267);
        this.timeline.addTween(a.Tween.get(this.bg_).wait(2).to({
            regY: 310,
            x: -1.15,
            y: 0
        }, 0).wait(1).to({
            x: -4.85
        }, 0).wait(1).to({
            x: -11.45
        }, 0).wait(1).to({
            x: -21.3
        }, 0).wait(1).to({
            x: -34.55
        }, 0).wait(1).to({
            x: -51.05
        }, 0).wait(1).to({
            x: -69.85
        }, 0).wait(1).to({
            x: -89.65
        }, 0).wait(1).to({
            x: -108.55
        }, 0).wait(1).to({
            x: -125.1
        }, 0).wait(1).to({
            x: -138.45
        }, 0).wait(1).to({
            x: -148.4
        }, 0).wait(1).to({
            x: -155.05
        }, 0).wait(1).to({
                x: -158.8
            },
            0).wait(1).to({
            regY: 267,
            x: -160,
            y: -43
        }, 0).wait(2).to({
            regY: 310,
            x: -158.8,
            y: 0
        }, 0).wait(1).to({
            x: -155.1
        }, 0).wait(1).to({
            x: -148.5
        }, 0).wait(1).to({
            x: -138.65
        }, 0).wait(1).to({
            x: -125.4
        }, 0).wait(1).to({
            x: -108.9
        }, 0).wait(1).to({
            x: -90.1
        }, 0).wait(1).to({
            x: -70.3
        }, 0).wait(1).to({
            x: -51.4
        }, 0).wait(1).to({
            x: -34.85
        }, 0).wait(1).to({
            x: -21.5
        }, 0).wait(1).to({
            x: -11.55
        }, 0).wait(1).to({
            x: -4.9
        }, 0).wait(1).to({
            x: -1.15
        }, 0).wait(1).to({
            regY: 267,
            x: 0,
            y: -43
        }, 0).wait(2).to({
            regY: 310,
            x: 1.2,
            y: 0
        }, 0).wait(1).to({
            x: 4.9
        }, 0).wait(1).to({
                x: 11.5
            },
            0).wait(1).to({
            x: 21.35
        }, 0).wait(1).to({
            x: 34.6
        }, 0).wait(1).to({
            x: 51.1
        }, 0).wait(1).to({
            x: 69.9
        }, 0).wait(1).to({
            x: 89.7
        }, 0).wait(1).to({
            x: 108.6
        }, 0).wait(1).to({
            x: 125.15
        }, 0).wait(1).to({
            x: 138.5
        }, 0).wait(1).to({
            x: 148.45
        }, 0).wait(1).to({
            x: 155.1
        }, 0).wait(1).to({
            x: 158.85
        }, 0).wait(1).to({
            regY: 267,
            x: 160,
            y: -43
        }, 0).wait(2).to({
            regY: 310,
            x: 158.85,
            y: 0
        }, 0).wait(1).to({
            x: 155.15
        }, 0).wait(1).to({
            x: 148.55
        }, 0).wait(1).to({
            x: 138.7
        }, 0).wait(1).to({
            x: 125.45
        }, 0).wait(1).to({
            x: 108.95
        }, 0).wait(1).to({
            x: 90.15
        }, 0).wait(1).to({
                x: 70.35
            },
            0).wait(1).to({
            x: 51.45
        }, 0).wait(1).to({
            x: 34.9
        }, 0).wait(1).to({
            x: 21.55
        }, 0).wait(1).to({
            x: 11.6
        }, 0).wait(1).to({
            x: 4.95
        }, 0).wait(1).to({
            x: 1.2
        }, 0).wait(1).to({
            regY: 267,
            x: 0,
            y: -43
        }, 0).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-400, -310, 800, 620);
    (b.bg = function(c, d, f) {
        this.initialize(c, d, f, {
            on: 0,
            turn_off: 1,
            off: 10,
            turn_on: 11,
            change: 22,
            light_short: 30,
            light_long: 40
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_10 = function() {
            this.stop()
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.frame_22 =
            function() {
                bg_condition = 1 == bg_condition ? 2 : 1
            };
        this.frame_25 = function() {
            this.bg_sidemotion.bg_.gotoAndStop(bg_condition);
            this.bg_sidemotion.gotoAndStop("C")
        };
        this.frame_29 = function() {
            this.stop()
        };
        this.frame_39 = function() {
            this.stop()
        };
        this.frame_58 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(11).call(this.frame_21).wait(1).call(this.frame_22).wait(3).call(this.frame_25).wait(4).call(this.frame_29).wait(10).call(this.frame_39).wait(19).call(this.frame_58).wait(12));
        this.bg_sidemotion = new b.bg_sidemotion;
        this.bg_sidemotion.name = "bg_sidemotion";
        this.bg_sidemotion.parent = this;
        this.bg_sidemotion.setTransform(234, 304);
        this.timeline.addTween(a.Tween.get(this.bg_sidemotion).wait(2).to({
            alpha: .9826
        }, 0).wait(1).to({
            alpha: .9274
        }, 0).wait(1).to({
            alpha: .8305
        }, 0).wait(1).to({
            alpha: .6909
        }, 0).wait(1).to({
            alpha: .5157
        }, 0).wait(1).to({
            alpha: .3253
        }, 0).wait(1).to({
            alpha: .1547
        }, 0).wait(1).to({
            alpha: .0395
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: .0182
        }, 0).wait(1).to({
                alpha: .072
            },
            0).wait(1).to({
            alpha: .1586
        }, 0).wait(1).to({
            alpha: .2729
        }, 0).wait(1).to({
            alpha: .407
        }, 0).wait(1).to({
            alpha: .5504
        }, 0).wait(1).to({
            alpha: .6909
        }, 0).wait(1).to({
            alpha: .8162
        }, 0).wait(1).to({
            alpha: .9149
        }, 0).wait(1).to({
            alpha: .9781
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: 0
        }, 2, a.Ease.get(1)).wait(2).to({
            alpha: 1
        }, 3, a.Ease.get(-1)).wait(41));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EglfArwMAAAhXfMBK/AAAMAAABXfg");
        this.shape.setTransform(234, 334);
        this.timeline.addTween(a.Tween.get(this.shape).wait(70))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-6, -6, 480, 620);
    (b.spread_flower = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_7 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(7).call(this.frame_7).wait(1));
        this.instance = new b.flower2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(21.35, 5.15, .7153, .7153);
        this.instance.filters = [new a.ColorFilter(.83, .83, .83, 1, 43.35, 43.35, 43.35, 0)];
        this.instance.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .9946,
            scaleY: .9946,
            rotation: -144.6153,
            x: 43.3235,
            y: 3.744,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: 50.1138,
            y: 3.3095,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: 54.679,
            y: 3.0174,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: 60.2279,
            y: 2.6624,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: 76.05,
            y: 1.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_1 = new b.flower2("synched", 0);
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(-14, -10.15);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            scaleX: 1.2152,
            scaleY: 1.2152,
            rotation: -144.6153,
            x: -24.1833,
            y: -24.009,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.2817,
            scaleY: 1.2817,
            rotation: -189.3044,
            x: -27.3302,
            y: -28.2917,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.3264,
            scaleY: 1.3264,
            rotation: -219.35,
            x: -29.4459,
            y: -31.171,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.3808,
            scaleY: 1.3808,
            rotation: -255.8693,
            x: -32.0175,
            y: -34.6708,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.5357,
            scaleY: 1.5357,
            rotation: -360,
            x: -39.35,
            y: -44.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_2 = new b.flower1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.8, -6.5, .7927, .7927);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            scaleX: .9181,
            scaleY: .9181,
            rotation: -144.6153,
            x: 33.0735,
            y: -24.6372,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: .9569,
            scaleY: .9569,
            rotation: -189.3044,
            x: 38.4114,
            y: -30.2419,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: .9829,
            scaleY: .9829,
            rotation: -219.35,
            x: 42.0001,
            y: -34.0102,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.0146,
            scaleY: 1.0146,
            rotation: -255.8693,
            x: 46.3622,
            y: -38.5903,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.1049,
            scaleY: 1.1049,
            rotation: -360,
            x: 58.8,
            y: -51.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_3 = new b.flower2("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-14.45, 14.3, .7153, .7153);
        this.instance_3.filters = [new a.ColorFilter(.83, .83, .83, 1, 43.35, 43.35, 43.35, 0)];
        this.instance_3.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1).to({
            scaleX: .9946,
            scaleY: .9946,
            rotation: -144.6153,
            x: -28.0278,
            y: 32.5778,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: -32.2236,
            y: 38.226,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: -35.0445,
            y: 42.0234,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: -38.4733,
            y: 46.639,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: -48.25,
            y: 59.8,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_4 = new b.flower2("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(5.6, 19);
        this.instance_4.filters = [new a.ColorFilter(0, 0, 0, 1, 255, 153, 204, 0)];
        this.instance_4.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1).to({
            scaleX: 1.1953,
            scaleY: 1.1953,
            rotation: -144.6153,
            x: 13.6543,
            y: 39.8085,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.2556,
            scaleY: 1.2556,
            rotation: -189.3044,
            x: 16.1432,
            y: 46.2388,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.2962,
            scaleY: 1.2962,
            rotation: -219.35,
            x: 17.8166,
            y: 50.562,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.3455,
            scaleY: 1.3455,
            rotation: -255.8693,
            x: 19.8505,
            y: 55.8168,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4861,
            scaleY: 1.4861,
            rotation: -360,
            x: 25.65,
            y: 70.8,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_5 = new b.flower2("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-20.9, 2.15);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
            scaleX: 1.3587,
            scaleY: 1.3587,
            rotation: -144.6153,
            x: -42.1705,
            y: 3.9577,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.4695,
            scaleY: 1.4695,
            rotation: -189.3044,
            x: -48.7435,
            y: 4.5163,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.544,
            scaleY: 1.544,
            rotation: -219.35,
            x: -53.1627,
            y: 4.8919,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.6346,
            scaleY: 1.6346,
            rotation: -255.8693,
            x: -58.5341,
            y: 5.3484,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.8929,
            scaleY: 1.8929,
            rotation: -360,
            x: -73.85,
            y: 6.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_6 = new b.flower1("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(.3, -12.15, .7812, .7812, -44.9992);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(1).to({
            scaleX: 1.0148,
            scaleY: 1.0148,
            rotation: 43.8468,
            x: -1.106,
            y: -37.9799,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.087,
            scaleY: 1.087,
            rotation: -39.9454,
            x: -1.5405,
            y: -45.9619,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.1355,
            scaleY: 1.1355,
            rotation: -96.281,
            x: -1.8326,
            y: -51.3284,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.1945,
            scaleY: 1.1945,
            rotation: -164.7547,
            x: -2.1876,
            y: -57.8511,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.3627,
            scaleY: 1.3627,
            rotation: 0,
            x: -3.2,
            y: -76.45,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_7 = new b.spread_flower_circle;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(0, 0, .5578, .5578);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            scaleX: 1.2947,
            scaleY: 1.2947,
            alpha: .3984
        }, 1, a.Ease.get(1)).to({
            scaleX: 1.7159,
            scaleY: 1.7159,
            alpha: .1016
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-84.4, -89.6, 168.5, 171.1);
    (b.window22 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3));
        this.instance =
            new b.square2;
        this.instance.parent = this;
        this.instance.setTransform(218.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_1 = new b.square2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(191.35, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_2 = new b.square2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(163.9, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_3 = new b.square2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(136.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_4 = new b.square2;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(108.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_5 = new b.square2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(81.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_6 = new b.square2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(53.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_7 = new b.square2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(26.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_8 = new b.square2c;
        this.instance_8.parent = this;
        this.instance_8.setTransform(5.95,
            17, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_9 = new b.square2c;
        this.instance_9.parent = this;
        this.instance_9.setTransform(8.6, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_10 = new b.square2c;
        this.instance_10.parent = this;
        this.instance_10.setTransform(11.25, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                },
                {
                    t: this.instance
                }
            ]
        }).wait(3));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AxGFtQhQAAAAhQIAAqJIV3AAIAIAAINeAAQBQAAAABQIAAI5QAABQhQAAg");
        this.shape.setTransform(117.5, 55.75);
        this.timeline.addTween(a.Tween.get(this.shape).wait(3));
        this.instance_11 = new b.window_shadow;
        this.instance_11.parent = this;
        this.instance_11.setTransform(118.6, 47.65, 1, 1, 0, 0, 0, 117.9, 46.9);
        this.instance_11.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(3));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.702)").s().p("AASAmQgNgTgHgTQgSgkgKgSIAFAHQAJALAaA2IAVAkQgGgGgHgKg");
        this.shape_1.setTransform(77.125, 8.9);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AAbA1IgVglQgZg1gJgMIgFgGIgGgJQAHAGAGAIIAEAHQAMATASAnIAMAVIAUAdIgNgMg");
        this.shape_2.setTransform(77.475, 9.075);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(255,255,255,0.702)").s().p("ACmBgIprAAIAAhBIAAguQAAhQBQAAIIbAAIAuAAIARAAQAWAAARALIAHAHIAGAHIAFAJQAKARASAmQAIASANATQAHAKAGAGIAMANIABAAIAIAGIABABQAgAcA0ABg");
        this.shape_3.setTransform(45.425, 9.625);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("rgba(0,0,0,0.463)").s().p("AAtBHIgIgGIAAgBIgUgdIgMgVQgSgngMgTIgEgHQgGgIgHgGIgGgHIALAIIAKALQAIAKAbA4IAMAWQAOAZAPANg");
        this.shape_4.setTransform(77.775, 9.175);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("rgba(0,0,0,0.114)").s().p("ABABXQgNgHgIgIQgQgNgPgYQgGgKgGgOQgag3gKgLQgQgWgXgIIgJgGQAdAGAVAcQAJAMAaA3QAJASAGAHQAOAYAPALQAPAPAYAGIgUgEg");
        this.shape_5.setTransform(79.05, 9.15);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("rgba(0,0,0,0.349)").s().p("AAuBJQgPgNgOgZIgMgVQgbg5gIgKIgKgKIgKgJIgIgIQAQAJAOARQAKAMAZA3IANAWQAPAZAQAOIAHAGg");
        this.shape_6.setTransform(78.05, 9.15);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("rgba(0,0,0,0.231)").s().p("AA2BQIgHgGQgQgOgPgZIgNgXQgZg2gKgMQgOgRgQgJIgHgFQAXAIAQAVQAKAMAaA3QAGAOAGAKQAPAYAQANQAIAIANAGg");
        this.shape_7.setTransform(78.45, 9.175);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("rgba(255,255,255,0.702)").s().p("AFVBgIvJAAIAAhBIAAguQAAhQBQAAIN5AAIAuAAIARAAQAWAAARALIAHAHIAGAHIAFAJQAKARASAmQAIASANATQAHAKAGAGIAMANIABAAIAIAGIABABQAgAcA0ABg");
        this.shape_8.setTransform(62.925, 9.625);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("rgba(0,0,0,0.114)").s().p("ABABXQgMgHgKgIQgPgNgPgYQgGgKgGgOQgag3gKgLQgQgWgXgIIgJgGQAdAGAVAcQAJAMAbA3QAIASAFAHQAPAYAPALQAPAPAYAGg");
        this.shape_9.setTransform(114.05, 9.15);
        this.shape_10 = new a.Shape;
        this.shape_10.graphics.f("rgba(0,0,0,0.231)").s().p("AA2BQIgHgGQgQgOgPgZIgNgXQgZg2gKgMQgOgRgQgJIgHgFQAXAIAQAVQAKAMAaA3QAGAOAGAKQAPAYAPANQAKAIAMAGg");
        this.shape_10.setTransform(113.45, 9.175);
        this.shape_11 = new a.Shape;
        this.shape_11.graphics.f("rgba(0,0,0,0.114)").s().p("AA/BXQgMgHgIgIQgNgLgNgSIgFgIQgGgKgGgOQgbg3gJgLQgRgWgVgIIgJgGQAbAGAWAcQAIAMAbA3QAJASAGAHIABADQAOAVANALQARAPAXAGg");
        this.shape_11.setTransform(144.05, 9.15);
        this.shape_12 = new a.Shape;
        this.shape_12.graphics.f("rgba(0,0,0,0.58)").s().p("AAhA7IgGgGIgVglQgZg1gJgMIgFgGIgGgJQAHAGAGAIIAEAHQAMATASAnIAMAVIANATIAHAKIgHgGg");
        this.shape_12.setTransform(142.475, 9.075);
        this.shape_13 = new a.Shape;
        this.shape_13.graphics.f("rgba(0,0,0,0.463)").s().p("AAtBHIgIgGIAAgBIgHgKIgNgTIgMgVQgSgngMgTIgEgHQgGgIgHgGIgGgHIALAIIAKALQAIAKAbA4IAMAWIAKAQQAJANAKAJg");
        this.shape_13.setTransform(142.775, 9.175);
        this.shape_14 = new a.Shape;
        this.shape_14.graphics.f("rgba(0,0,0,0.349)").s().p("AAuBJQgKgIgJgOIgKgQIgMgVQgbg5gIgKIgKgKIgLgJIgHgIQARAJANARQAKAMAZA3IAMAWIAIAMQAMARAMAKIAHAGg");
        this.shape_14.setTransform(143.05, 9.15);
        this.shape_15 = new a.Shape;
        this.shape_15.graphics.f("rgba(255,255,255,0.702)").s().p("AKmBgIi7AAIz1AAIAAhBIAAguQAAhQBQAAISlAAIAuAAIARAAQAWAAARALIAHAHIAGAHIAFAJQAKARASAmQAIASANATQAHAKAGAGIAFAGIAHAHIABAAIAIAGIABABQAgAcA0ABg");
        this.shape_15.setTransform(77.925, 9.625);
        this.shape_16 = new a.Shape;
        this.shape_16.graphics.f("rgba(0,0,0,0.231)").s().p("AA2BQIgHgGQgMgLgMgQIgIgMIgMgXQgZg2gKgMQgNgRgRgJIgGgFQAVAIARAVQAJAMAbA3QAGAOAGAKIAFAHQANATANALQAIAIAMAGg");
        this.shape_16.setTransform(143.45,
            9.175);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6,
                p: {
                    x: 78.05
                }
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4,
                p: {
                    x: 77.775
                }
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2,
                p: {
                    x: 77.475
                }
            }, {
                t: this.shape_1,
                p: {
                    x: 77.125
                }
            }]
        }).to({
            state: [{
                t: this.shape_10
            }, {
                t: this.shape_6,
                p: {
                    x: 113.05
                }
            }, {
                t: this.shape_9
            }, {
                t: this.shape_4,
                p: {
                    x: 112.775
                }
            }, {
                t: this.shape_8
            }, {
                t: this.shape_2,
                p: {
                    x: 112.475
                }
            }, {
                t: this.shape_1,
                p: {
                    x: 112.125
                }
            }]
        }, 1).to({
            state: [{
                    t: this.shape_16
                }, {
                    t: this.shape_15
                }, {
                    t: this.shape_14
                }, {
                    t: this.shape_13
                },
                {
                    t: this.shape_12
                }, {
                    t: this.shape_1,
                    p: {
                        x: 142.125
                    }
                }, {
                    t: this.shape_11
                }
            ]
        }, 1).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, 0, 236.5, 94.5);
    (b.win_mc = function(c, d, f) {
        this.initialize(c, d, f, {
            f1: 1,
            out: 13,
            "in": 24,
            close: 32
        });
        this.frame_0 = function() {
            this.scene = "out";
            this.stop()
        };
        this.frame_1 = function() {
            this.play()
        };
        this.frame_5 = function() {
            this.stop()
        };
        this.frame_23 = function() {
            this.stop()
        };
        this.frame_31 = function() {
            this.stop()
        };
        this.frame_36 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(18).call(this.frame_23).wait(8).call(this.frame_31).wait(5).call(this.frame_36).wait(6));
        this.log = new b.mc_text_log_btn;
        this.log.name = "log";
        this.log.parent = this;
        this.log.setTransform(278.55, 6.85, 1, 1, 0, 0, 0, 0, .2);
        this.timeline.addTween(a.Tween.get(this.log).wait(5).to({
            x: 188.55
        }, 0).wait(8).to({
            x: 278.55
        }, 0).wait(18).to({
            x: 188.55
        }, 0).wait(1).to({
            x: 298.55
        }, 0).wait(10));
        this.icon_sp = new b.window_icon;
        this.icon_sp.name = "icon_sp";
        this.icon_sp.parent = this;
        this.icon_sp.setTransform(225.5, 8.5, .9999, 1);
        this.icon_sp.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.icon_sp).wait(1).to({
                y: 57.5,
                alpha: 1
            },
            0).wait(1).to({
            y: 28.2433
        }, 0).wait(1).to({
            y: 15.0075
        }, 0).wait(1).to({
            y: 9.7633
        }, 0).wait(1).to({
            y: 8.5
        }, 0).wait(8).to({
            scaleX: 1,
            y: 9.5
        }, 0).wait(1).to({
            rotation: 45,
            y: 13.4449
        }, 0).wait(1).to({
            rotation: 90,
            y: 31.6824
        }, 0).wait(1).to({
            rotation: 135,
            y: 77.8042
        }, 0).wait(1).to({
            regY: .2,
            rotation: 180,
            y: 93.8
        }, 0).wait(1).to({
            regY: 0,
            y: 92.3333
        }, 0).wait(1).to({
            y: 91.3333
        }, 0).wait(1).to({
            regY: .2,
            y: 90.8
        }, 0).wait(4).to({
            regY: 0,
            rotation: 150.0004,
            y: 77
        }, 0).wait(1).to({
            scaleX: .9999,
            rotation: 60.0004,
            y: 37
        }, 0).wait(1).to({
            rotation: 29.9992,
            y: 18
        }, 0).wait(1).to({
            scaleX: 1,
            rotation: 7.4998,
            y: 10.3125
        }, 0).wait(1).to({
            scaleX: .9999,
            rotation: 0,
            y: 7.75
        }, 0).wait(1).to({
            y: 8.3125
        }, 0).wait(1).to({
            y: 10
        }, 0).wait(1).to({
            y: 8.5
        }, 0).wait(1).to({
            x: 265.5,
            alpha: 0
        }, 0).wait(10));
        this.cur = new b.cur_mc;
        this.cur.name = "cur";
        this.cur.parent = this;
        this.cur.setTransform(229.55, 88.4);
        this.cur.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.cur).wait(5).to({
            alpha: 1
        }, 0).wait(8).to({
            alpha: 0
        }, 0).wait(18).to({
            alpha: 1
        }, 0).wait(1).to({
            x: 429.55,
            alpha: 0
        }, 0).wait(10));
        this.c_name =
            new b.gr_nametxt;
        this.c_name.name = "c_name";
        this.c_name.parent = this;
        this.c_name.setTransform(64, 16.5, 1, 1, 0, 0, 0, 50, 14.5);
        this.c_name.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.c_name).wait(1).to({
            y: 66.5,
            alpha: 1
        }, 0).wait(1).to({
            regX: 87.5,
            x: 101.5,
            y: 36.9
        }, 0).wait(1).to({
            y: 24.25
        }, 0).wait(1).to({
            y: 18.2
        }, 0).wait(1).to({
            regX: 50,
            x: 64,
            y: 16.5
        }, 0).wait(9).to({
            regX: 87.5,
            x: 101.5,
            y: 22.65
        }, 0).wait(1).to({
            y: 46.15
        }, 0).wait(1).to({
            y: 82.8
        }, 0).wait(1).to({
            y: 106.3
        }, 0).wait(1).to({
            regX: 50,
            x: 64,
            y: 112.5
        }, 0).wait(2).to({
                y: 101.5
            },
            3, a.Ease.get(1)).wait(1).to({
            y: 77.5
        }, 0).wait(1).to({
            y: 37.5
        }, 0).wait(1).to({
            y: 18.5
        }, 0).to({
            y: 14.5
        }, 2, a.Ease.get(1)).to({
            y: 16.5
        }, 2, a.Ease.get(-1)).wait(2).to({
            x: 334,
            alpha: 0
        }, 0).wait(10));
        this.tmsg = new b.textfield;
        this.tmsg.name = "tmsg";
        this.tmsg.parent = this;
        this.tmsg.setTransform(4, 25.5, 1, 1, 0, 0, 0, 0, -.5);
        this.tmsg.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.tmsg).wait(1).to({
            y: 75.5,
            alpha: 1
        }, 0).wait(1).to({
            regX: 114,
            regY: 37.5,
            x: 118,
            y: 83.9
        }, 0).wait(1).to({
            y: 71.25
        }, 0).wait(1).to({
            y: 65.2
        }, 0).wait(1).to({
            regX: 0,
            regY: -.5,
            x: 4,
            y: 25.5
        }, 0).wait(9).to({
            regX: 114,
            regY: 37.5,
            x: 118,
            y: 69.65
        }, 0).wait(1).to({
            y: 93.15
        }, 0).wait(1).to({
            y: 129.8
        }, 0).wait(1).to({
            y: 153.3
        }, 0).wait(1).to({
            regX: 0,
            regY: -.5,
            x: 4,
            y: 121.5
        }, 0).wait(2).to({
            y: 110.5
        }, 3, a.Ease.get(1)).wait(1).to({
            y: 86.5
        }, 0).wait(1).to({
            y: 46.5
        }, 0).wait(1).to({
            y: 27.5
        }, 0).to({
            y: 23.5
        }, 2, a.Ease.get(1)).to({
            y: 25.5
        }, 2, a.Ease.get(-1)).wait(2).to({
            x: 274,
            alpha: 0
        }, 0).wait(10));
        this.win_base = new b.window22;
        this.win_base.name = "win_base";
        this.win_base.parent = this;
        this.win_base.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.win_base).wait(1).to({
            y: 50,
            alpha: 1
        }, 0).wait(1).to({
            regX: 118.2,
            regY: 47.2,
            x: 118.2,
            y: 67.6
        }, 0).wait(1).to({
            y: 54.95
        }, 0).wait(1).to({
            y: 48.9
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(9).to({
            regX: 118.2,
            regY: 47.2,
            x: 118.2,
            y: 53.35
        }, 0).wait(1).to({
            y: 76.85
        }, 0).wait(1).to({
            y: 113.5
        }, 0).wait(1).to({
            y: 137
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 96
        }, 0).wait(2).to({
            y: 85
        }, 3, a.Ease.get(1)).wait(1).to({
            y: 61
        }, 0).wait(1).to({
            y: 21
        }, 0).wait(1).to({
            y: 2
        }, 0).to({
            y: -2
        }, 2, a.Ease.get(1)).to({
                y: 0
            },
            2, a.Ease.get(-1)).wait(3).to({
            y: 2,
            alpha: .6016
        }, 0).wait(1).to({
            y: 6,
            alpha: .3008
        }, 0).wait(1).to({
            y: 116,
            alpha: 1
        }, 0).wait(7))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, -6.1, 502, 216.6);
    (b.set_particle1 = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.instance = new b.parts_particle1_2;
        this.instance.parent = this;
        this.instance.setTransform(-1.4, 38.65, .8585, .8585, -173.2889);
        this.instance_1 = new b.parts_particle1_1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-26.5, 10.95, .8544, .5085,
            0, -124.1512, 76.2156, -59.8, -3.9);
        this.instance_2 = new b.parts_particle1_1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_3 = new b.parts_particle1_1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_4 = new b.parts_particle1_2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_5 = new b.parts_particle1_1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(36,
            16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_6 = new b.parts_particle1_1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_7 = new b.parts_particle1_2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_8 = new b.parts_particle1_2;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_9 = new b.parts_particle1_1;
        this.instance_9.parent =
            this;
        this.instance_9.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_10 = new b.parts_particle1_1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-6.95, -18.05, .6032, .6032, -115.4488);
        this.instance_11 = new b.parts_particle1_2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_12 = new b.parts_particle1_1;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_13 =
            new b.parts_particle1_2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_14 = new b.parts_particle1_1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_15 = new b.parts_particle1_2;
        this.instance_15.parent = this;
        this.instance_15.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_16 = new b.parts_particle1_2;
        this.instance_16.parent = this;
        this.instance_16.setTransform(6.55, -31.7, .5292,
            .5292, 0, 36.7457, -143.2543);
        this.instance_17 = new b.parts_particle1_1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_18 = new b.parts_particle1_1;
        this.instance_18.parent = this;
        this.instance_18.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_19 = new b.parts_particle1_1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_20 = new b.parts_particle1_2;
        this.instance_20.parent =
            this;
        this.instance_20.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_21 = new b.parts_particle1_2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_22 = new b.parts_particle1_1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_23 = new b.parts_particle1_2;
        this.instance_23.parent = this;
        this.instance_23.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_24 = new b.parts_particle1_1;
        this.instance_24.parent = this;
        this.instance_24.setTransform(13.4, 36.85, .8544, .5085, 0, 110.6446, -48.9891, -59.7, -3.7);
        this.instance_25 = new b.parts_particle1_1;
        this.instance_25.parent = this;
        this.instance_25.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_26 = new b.parts_particle1_1;
        this.instance_26.parent = this;
        this.instance_26.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_27 = new b.parts_particle1_2;
        this.instance_27.parent = this;
        this.instance_27.setTransform(27.95, -3.15, .67, .5378, 0,
            73.3557, -77.1152);
        this.instance_28 = new b.parts_particle1_1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_29 = new b.parts_particle1_1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_29
                }, {
                    t: this.instance_28
                }, {
                    t: this.instance_27
                }, {
                    t: this.instance_26
                }, {
                    t: this.instance_25
                }, {
                    t: this.instance_24
                }, {
                    t: this.instance_23
                }, {
                    t: this.instance_22
                },
                {
                    t: this.instance_21
                }, {
                    t: this.instance_20
                }, {
                    t: this.instance_19
                }, {
                    t: this.instance_18
                }, {
                    t: this.instance_17
                }, {
                    t: this.instance_16
                }, {
                    t: this.instance_15
                }, {
                    t: this.instance_14
                }, {
                    t: this.instance_13
                }, {
                    t: this.instance_12
                }, {
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = h(b.set_particle1, new a.Rectangle(-259.5,
        -245.4, 503, 474.70000000000005), null);
    (b.score_container = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_25 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(25).call(this.frame_25).wait(1));
        this.gauge = new b.gauge;
        this.gauge.name = "gauge";
        this.gauge.parent = this;
        this.gauge.setTransform(-.45, -.05, 3.335, 3.3335);
        this.gauge.alpha = .1992;
        this.timeline.addTween(a.Tween.get(this.gauge).wait(1).to({
            regX: 3,
            regY: -2.7,
            scaleX: 2.6652,
            scaleY: 2.6644,
            x: 8.75,
            y: -7.05,
            alpha: .3488
        }, 0).wait(1).to({
            scaleX: 2.3042,
            scaleY: 2.3038,
            x: 8.35,
            y: -5.95,
            alpha: .4294
        }, 0).wait(1).to({
            scaleX: 2.0783,
            scaleY: 2.0782,
            x: 8.1,
            y: -5.25,
            alpha: .4798
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1.988,
            scaleY: 1.988,
            x: 1.95,
            y: .4,
            alpha: .5
        }, 0).wait(1).to({
            regX: 3,
            regY: -2.7,
            scaleX: 1.8726,
            scaleY: 1.8726,
            x: 7.9,
            y: -4.55,
            alpha: .5584
        }, 0).wait(1).to({
            scaleX: 1.7829,
            scaleY: 1.7829,
            x: 7.95,
            y: -4.25,
            alpha: .6038
        }, 0).wait(1).to({
            scaleX: 1.7051,
            scaleY: 1.7051,
            y: -3.95,
            alpha: .6431
        }, 0).wait(1).to({
            scaleX: 1.6349,
            scaleY: 1.6349,
            x: 8,
            y: -3.7,
            alpha: .6787
        }, 0).wait(1).to({
            scaleX: 1.5702,
            scaleY: 1.5702,
            y: -3.5,
            alpha: .7114
        }, 0).wait(1).to({
            scaleX: 1.5099,
            scaleY: 1.5099,
            x: 8.05,
            y: -3.3,
            alpha: .7419
        }, 0).wait(1).to({
            scaleX: 1.4534,
            scaleY: 1.4534,
            y: -3.05,
            alpha: .7705
        }, 0).wait(1).to({
            scaleX: 1.4003,
            scaleY: 1.4003,
            y: -2.9,
            alpha: .7974
        }, 0).wait(1).to({
            scaleX: 1.3502,
            scaleY: 1.3502,
            y: -2.7,
            alpha: .8228
        }, 0).wait(1).to({
            scaleX: 1.303,
            scaleY: 1.303,
            x: 8.1,
            y: -2.5,
            alpha: .8466
        }, 0).wait(1).to({
            scaleX: 1.2586,
            scaleY: 1.2586,
            y: -2.35,
            alpha: .8691
        }, 0).wait(1).to({
            scaleX: 1.217,
            scaleY: 1.217,
            y: -2.2,
            alpha: .8902
        }, 0).wait(1).to({
            scaleX: 1.1783,
            scaleY: 1.1783,
            x: 8.15,
            y: -2.1,
            alpha: .9098
        }, 0).wait(1).to({
            scaleX: 1.1424,
            scaleY: 1.1424,
            y: -1.95,
            alpha: .9279
        }, 0).wait(1).to({
            scaleX: 1.1096,
            scaleY: 1.1096,
            y: -1.8,
            alpha: .9445
        }, 0).wait(1).to({
            scaleX: 1.0801,
            scaleY: 1.0801,
            y: -1.7,
            alpha: .9594
        }, 0).wait(1).to({
            scaleX: 1.0543,
            scaleY: 1.0543,
            y: -1.6,
            alpha: .9725
        }, 0).wait(1).to({
            scaleX: 1.0325,
            scaleY: 1.0325,
            y: -1.55,
            alpha: .9835
        }, 0).wait(1).to({
            scaleX: 1.0155,
            scaleY: 1.0155,
            y: -1.5,
            alpha: .9921
        }, 0).wait(1).to({
            scaleX: 1.0042,
            scaleY: 1.0042,
            y: -1.45,
            alpha: .9979
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: 5.2,
            y: 1.3,
            alpha: 1
        }, 0).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-671.9, -47.3, 914.8, 100.9);
    (b.result_normal = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_11 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(11).call(this.frame_11).wait(1));
        this.instance = new b.efa_particle_Set;
        this.instance.parent = this;
        this.instance.setTransform(-3.75, 88.3, .6802, .6802);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(3).to({
                _off: !1
            },
            0).wait(9));
        this.instance_1 = new b._txt_rst0;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 66.75, 1, 1, 0, 0, 0, 0, -.6);
        this.instance_1.alpha = .1602;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).to({
            regY: -1,
            y: 104,
            alpha: 1
        }, 2, a.Ease.get(-1)).to({
            regY: -.9,
            y: 90.1
        }, 3, a.Ease.get(1)).to({
            regY: -.2,
            y: 92.8
        }, 3, a.Ease.get(1)).wait(3));
        this.instance_2 = new b.symbol8;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-4.1, 95.9, 1, .4471, 0, 0, 0, -.1, -.2);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            regY: -1.2,
            scaleY: .9308
        }, 1, a.Ease.get(1)).to({
            regY: -1,
            scaleY: 1.092
        }, 1).to({
            regY: -1.2,
            scaleY: .9719,
            y: 95.85
        }, 3, a.Ease.get(1)).to({
            regY: -1.1,
            scaleY: .9875,
            y: 95.9
        }, 1, a.Ease.get(1)).to({
            scaleY: 1
        }, 2).wait(4))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-220.5, -78.6, 379.6, 322.79999999999995);
    (b.particle_burst_container = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_18 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));
        this.instance = new b.particle_burst_parts;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 2.8116, 2.8116);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(18));
        this.instance_1 = new b.particle_burst;
        this.instance_1.parent = this;
        this.instance_1.setTransform(38.45, 15.7, 1.1769, 1.1769, -68.2332);
        this.instance_2 = new b.particle_burst;
        this.instance_2.parent = this;
        this.instance_2.setTransform(18.45,
            -33.5, 1, 1, -150.0008);
        this.instance_3 = new b.particle_burst;
        this.instance_3.parent = this;
        this.instance_3.setTransform(35.75, 33.65, 1.2465, 1.2465, -38.234);
        this.instance_4 = new b.particle_burst;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-31.85, 8.5, 1, 1, 90);
        this.instance_5 = new b.particle_burst;
        this.instance_5.parent = this;
        this.instance_5.setTransform(45.55, 0, 1.5958, 1.5958, -91.0431);
        this.instance_6 = new b.particle_burst;
        this.instance_6.parent = this;
        this.instance_6.setTransform(9, -40.4, .6147, .6147,
            -173.2356);
        this.instance_7 = new b.particle_burst;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-26.8, 28.6, 1.5958, 1.5958, 51.7654);
        this.instance_8 = new b.particle_burst;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-24.9, -8.95, 1.2465, 1.2465, 111.7668);
        this.instance_9 = new b.particle_burst;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-11.7, -31.25, 1.5959, 1.5959, 156.7659);
        this.instance_10 = new b.particle_burst;
        this.instance_10.parent = this;
        this.instance_10.setTransform(29.2,
            -17.6, 1.3466, 1.3466, -128.2345);
        this.instance_11 = new b.particle_burst;
        this.instance_11.parent = this;
        this.instance_11.setTransform(66, 48, .6147, .6147, -53.2348);
        this.instance_12 = new b.particle_burst;
        this.instance_12.parent = this;
        this.instance_12.setTransform(6.15, 39.4);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                    t: this.instance_12
                }, {
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                },
                {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }
            ]
        }, 1).wait(18))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-101.4, -118.4, 271.3, 217.10000000000002);
    (b.mc_text_log = function(c, d, f) {
        this.initialize(c, d, f, {
            wait: 1,
            run: 5,
            view_reload: 13,
            close: 21
        });
        this.frame_0 = function() {
            this.log_max = 4;
            this.nextend_flg = this.next_btn_flg = this.return_btn_flg = this.returnend_flg = 1;
            this.route_confirm_flg = 0;
            var g = this.log_id = 1,
                n = 1;
            for (this.len = 0; void 0 != exportRoot["s" + g + "_1_name"] && !(g > exportRoot.select_end_id);) {
                for (; void 0 !=
                    exportRoot["s" + g + "_" + n + "_name"];) this["log_txt" + this.log_id] = exportRoot["s" + g + "_" + n + "_txt"], this["log_name" + this.log_id] = exportRoot["s" + g + "_" + n + "_name"], this["log_no" + this.log_id] = exportRoot["s" + g + "_" + n + "_ch1_no"], this["s" + g + "_" + n + "_id"] = this.log_id, this.log_id++, n++;
                n = 1;
                g++
            }
            this.len = this.log_id - 1;
            this.viewer = function() {
                for (var m = 1; m <= this.log_max; m++) this["log_id" + m] = this.view_id >= m ? this.view_id - m + 1 : "";
                for (m = 1; m <= this.log_max; m++) "" != this["log_id" + m] ? (this["log" + m].view_name.text = this["log_name" +
                    this["log_id" + m]], this["log" + m].view_txt.text = this["log_txt" + this["log_id" + m]], this["log" + m].visible = !0) : this["log" + m].visible = !1
            };
            this.pager = function() {
                this.view_page.text = this.now_page + "/" + this.page_max;
                1 < this.now_page ? (this.returnend.visible = !0, this.return_btn.visible = !0, this.return_btn_flg = this.returnend_flg = 1) : (this.returnend.visible = !1, this.return_btn.visible = !1, this.return_btn_flg = this.returnend_flg = 0);
                this.now_page < this.page_max ? (this.next_btn.visible = !0, this.nextend.visible = !0, this.nextend_flg =
                    this.next_btn_flg = 1) : (this.next_btn.visible = !1, this.nextend.visible = !1, this.nextend_flg = this.next_btn_flg = 0)
            };
            this.scene_return = function() {
                exportRoot.key_log_flag = 0;
                exportRoot.key_act_flag = 0;
                this.gotoAndStop("wait")
            }
        };
        this.frame_1 = function() {
            this.stop();
            this.visible = !1
        };
        this.frame_5 = function() {
            this.visible = !0;
            if (5 < exportRoot.scene_m && 0 == exportRoot.route_confirm_flg)
                for (var g = this.route_confirm_flg = 1;
                    "" != exportRoot["s" + exportRoot.scene_m + "_" + g + "_name"];) this["log_txt" + this.log_id] = exportRoot["s" + exportRoot.scene_m +
                    "_" + g + "_txt"], this["log_name" + this.log_id] = exportRoot["s" + exportRoot.scene_m + "_" + g + "_name"], this["log_no" + this.log_id] = exportRoot["s" + exportRoot.scene_m + "_" + g + "_ch1_no"], this["s" + exportRoot.scene_m + "_" + g + "_id"] = this.log_id, this.log_id++, g++;
            this.now_log_id = this["s" + exportRoot.scene_m + "_" + exportRoot.scene_s + "_id"];
            this.page_max = parseInt((this.now_log_id - 1) / this.log_max) + 1;
            for (g = 1; g <= this.page_max; g++) this.temp_id = this.now_log_id - (g - 1) * this.log_max, this["page_id" + this.temp_id] = g, this["view_id" + g] = this.temp_id;
            this.view_id = this.now_log_id;
            this.now_page = this["page_id" + this.view_id]
        };
        this.frame_13 = function() {
            this.pager();
            this.viewer()
        };
        this.frame_14 = function() {
            this.btn_close.removeAllEventListeners("click");
            this.btn_back.removeAllEventListeners("click");
            this.btn_next.removeAllEventListeners("click");
            this.btn_all_next.removeAllEventListeners("click");
            this.btn_all_back.removeAllEventListeners("click");
            this.btn_close.on("click", function() {
                this.gotoAndPlay("close")
            }, this, !0);
            this.btn_back.on("click", function() {
                1 ==
                    this.return_btn_flg && (this.return_btn_flg = 0, this.now_page--, this.view_id = this["view_id" + this.now_page], this.gotoAndPlay("view_reload"))
            }, this, !1);
            this.btn_next.on("click", function() {
                1 == this.next_btn_flg && (this.next_btn_flg = 0, this.now_page++, this.view_id = this["view_id" + this.now_page], this.gotoAndPlay("view_reload"))
            }, this, !1);
            this.btn_all_next.on("click", function() {
                    1 == this.next_btn_flg && (this.next_btn_flg = 0, this.now_page = this.page_max, this.view_id = this["view_id" + this.now_page], this.gotoAndPlay("view_reload"))
                },
                this, !1);
            this.btn_all_back.on("click", function() {
                1 == this.returnend_flg && (this.returnend_flg = 0, this.now_page = 1, this.view_id = this["view_id" + this.now_page], this.gotoAndPlay("view_reload"))
            }, this, !1)
        };
        this.frame_17 = function() {
            this.stop()
        };
        this.frame_21 = function() {
            this.btn_close.removeAllEventListeners("click");
            this.btn_back.removeAllEventListeners("click");
            this.btn_next.removeAllEventListeners("click");
            this.btn_all_next.removeAllEventListeners("click");
            this.btn_all_back.removeAllEventListeners("click")
        };
        this.frame_24 = function() {
            this.scene_return()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(8).call(this.frame_13).wait(1).call(this.frame_14).wait(3).call(this.frame_17).wait(4).call(this.frame_21).wait(3).call(this.frame_24).wait(28));
        this.shape = new a.Shape;
        this.shape.graphics.f("#00FF00").s().p("Ag7AyIAAhjIB3AAIAABjg");
        this.shape.setTransform(-179, -107.5);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(51));
        this.btn_all_back = new b.btn;
        this.btn_all_back.name = "btn_all_back";
        this.btn_all_back.parent = this;
        this.btn_all_back.setTransform(-84.9, 121, 1, 1, 0, 0, 0, 17.5, 17.5);
        this.btn_all_back.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn_all_back).wait(52));
        this.btn_all_next = new b.btn;
        this.btn_all_next.name = "btn_all_next";
        this.btn_all_next.parent = this;
        this.btn_all_next.setTransform(86.1, 120.7, 1, 1, 0, 0, 0, 17.5, 17.5);
        this.btn_all_next.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn_all_next).wait(52));
        this.btn_back = new b.btn;
        this.btn_back.name = "btn_back";
        this.btn_back.parent = this;
        this.btn_back.setTransform(-44.9, 121.5, 1, 1, 0, 0, 0, 17.5, 17.5);
        this.btn_back.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn_back).wait(52));
        this.btn_next = new b.btn;
        this.btn_next.name = "btn_next";
        this.btn_next.parent = this;
        this.btn_next.setTransform(46, 120.7, 1, 1, 0, 0, 0, 17.5, 17.5);
        this.btn_next.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn_next).wait(52));
        this.btn_close = new b.btn;
        this.btn_close.name = "btn_close";
        this.btn_close.parent = this;
        this.btn_close.setTransform(85.65, -124.45, 1, 1, 0, 0, 0, 17.5, 17.5);
        this.btn_close.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn_close).wait(52));
        this.instance = new b.gr_log_close_btn;
        this.instance.parent = this;
        this.instance.setTransform(89.3, -127.85);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(13).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 8).wait(31));
        this.log1 = new b.gr_log_text_container;
        this.log1.name = "log1";
        this.log1.parent = this;
        this.log1.setTransform(287.2,
            -82.4, 1, 1, 0, 0, 0, 91.2, 26.6);
        this.timeline.addTween(a.Tween.get(this.log1).wait(13).to({
            x: 6.2,
            y: -87.4
        }, 0).wait(8).to({
            x: 287.2,
            y: -82.4
        }, 0).wait(31));
        this.log2 = new b.gr_log_text_container;
        this.log2.name = "log2";
        this.log2.parent = this;
        this.log2.setTransform(287.2, -28.4, 1, 1, 0, 0, 0, 91.2, 26.6);
        this.timeline.addTween(a.Tween.get(this.log2).wait(13).to({
            x: 6.2,
            y: -32.4
        }, 0).wait(8).to({
            x: 287.2,
            y: -28.4
        }, 0).wait(31));
        this.log3 = new b.gr_log_text_container;
        this.log3.name = "log3";
        this.log3.parent = this;
        this.log3.setTransform(287.2,
            25.6, 1, 1, 0, 0, 0, 91.2, 26.6);
        this.timeline.addTween(a.Tween.get(this.log3).wait(13).to({
            x: 6.2,
            y: 22.6
        }, 0).wait(8).to({
            x: 287.2,
            y: 25.6
        }, 0).wait(31));
        this.log4 = new b.gr_log_text_container;
        this.log4.name = "log4";
        this.log4.parent = this;
        this.log4.setTransform(287.2, 79.6, 1, 1, 0, 0, 0, 91.2, 26.6);
        this.timeline.addTween(a.Tween.get(this.log4).wait(13).to({
            x: 6.2,
            y: 77.6
        }, 0).wait(8).to({
            x: 287.2,
            y: 79.6
        }, 0).wait(31));
        this.returnend = new b.gr_dialog_returnend;
        this.returnend.name = "returnend";
        this.returnend.parent = this;
        this.returnend.setTransform(-97.1,
            225.75);
        this.timeline.addTween(a.Tween.get(this.returnend).wait(13).to({
            x: -84.1,
            y: 120.25
        }, 0).wait(8).to({
            x: -97.1,
            y: 225.75
        }, 0).wait(31));
        this.return_btn = new b.gr_dialog_return_btn;
        this.return_btn.name = "return_btn";
        this.return_btn.parent = this;
        this.return_btn.setTransform(-58.1, 224.5);
        this.timeline.addTween(a.Tween.get(this.return_btn).wait(13).to({
            x: -45.1,
            y: 119
        }, 0).wait(8).to({
            x: -58.1,
            y: 224.5
        }, 0).wait(31));
        this.nextend = new b.gr_dialog_nextend;
        this.nextend.name = "nextend";
        this.nextend.parent = this;
        this.nextend.setTransform(97.2,
            225.75);
        this.timeline.addTween(a.Tween.get(this.nextend).wait(13).to({
            x: 84.2,
            y: 120.25
        }, 0).wait(8).to({
            x: 97.2,
            y: 225.75
        }, 0).wait(31));
        this.next_btn = new b.gr_dialog_next_btn;
        this.next_btn.name = "next_btn";
        this.next_btn.parent = this;
        this.next_btn.setTransform(58.15, 224.5);
        this.timeline.addTween(a.Tween.get(this.next_btn).wait(13).to({
            x: 45.15,
            y: 119
        }, 0).wait(8).to({
            x: 58.15,
            y: 224.5
        }, 0).wait(31));
        this.view_page = new a.Text("1/2", "12px 'MS Gothic'", "#666666");
        this.view_page.name = "view_page";
        this.view_page.textAlign =
            "center";
        this.view_page.lineHeight = 13;
        this.view_page.lineWidth = 34;
        this.view_page.parent = this;
        this.view_page.setTransform(.5, 219.9);
        this.timeline.addTween(a.Tween.get(this.view_page).wait(13).to({
            x: 0,
            y: 112.5,
            font: "12px 'FOT-RodinNTLG Pro DB'",
            lineHeight: 15.9
        }, 0).wait(8).to({
            x: .5,
            y: 219.9,
            font: "12px 'MS Gothic'",
            lineHeight: 13
        }, 0).wait(31));
        this.instance_1 = new b.gr_log_base;
        this.instance_1.parent = this;
        this.instance_1.setTransform(71, 55.25, .1955, .0667);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(5).to({
                _off: !1
            },
            0).to({
            scaleX: 1,
            scaleY: .004,
            x: 0
        }, 3, a.Ease.get(1)).to({
            scaleY: 1.0234,
            y: 9.75
        }, 3, a.Ease.get(-1)).wait(1).to({
            regY: -2.5,
            scaleY: 1.0125,
            y: 7.2
        }, 0).wait(1).to({
            regY: 0,
            scaleY: 1,
            y: 9.75
        }, 0).wait(8).to({
            scaleY: 1.0234
        }, 0).to({
            scaleY: .004,
            y: .1
        }, 2, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(28));
        this.instance_2 = new b.dark;
        this.instance_2.parent = this;
        this.instance_2.alpha = 0;
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(5).to({
            _off: !1
        }, 0).to({
            alpha: .6016
        }, 7, a.Ease.get(1)).wait(9).to({
                alpha: 0
            },
            3).to({
            _off: !0
        }, 1).wait(27))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-185, -155, 556.6, 389.1);
    (b.mc_selectbtn4 = function(c, d, f) {
        this.initialize(c, d, f, {
            push: 1
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_13 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));
        this.instance = new b.spread_flower;
        this.instance.parent = this;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 11).wait(1));
        this.btn4 = new b.gr_selectbtn4;
        this.btn4.name = "btn4";
        this.btn4.parent = this;
        this.timeline.addTween(a.Tween.get(this.btn4).wait(1).to({
            scaleX: .8561,
            scaleY: .8561
        }, 0).wait(1).to({
            scaleX: 1.0814,
            scaleY: 1.0809,
            y: -.1
        }, 0).wait(1).to({
            scaleX: 1.0598,
            scaleY: 1.0595,
            y: -.0602
        }, 0).wait(1).to({
            scaleX: 1.0415,
            scaleY: 1.0413,
            y: -.0265
        }, 0).wait(1).to({
            scaleX: 1.0266,
            scaleY: 1.0264,
            y: .001
        }, 0).wait(1).to({
            scaleX: 1.0149,
            scaleY: 1.0149,
            y: .0224
        }, 0).wait(1).to({
            scaleX: 1.0066,
            scaleY: 1.0066,
            y: .0378
        }, 0).wait(1).to({
            scaleX: 1.0017,
            scaleY: 1.0017,
            y: .0469
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            y: 0
        }, 0).wait(5))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-35.7, -26.5, 71.4, 53);
    (b.mc_selectbtn3 = function(c, d, f) {
        this.initialize(c, d, f, {
            push: 1
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_13 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));
        this.instance = new b.spread_flower;
        this.instance.parent = this;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 11).wait(1));
        this.btn3 = new b.gr_selectbtn3;
        this.btn3.name = "btn3";
        this.btn3.parent = this;
        this.timeline.addTween(a.Tween.get(this.btn3).wait(1).to({
            scaleX: .856,
            scaleY: .856
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081
        }, 0).wait(1).to({
            scaleX: 1.0595,
            scaleY: 1.0595
        }, 0).wait(1).to({
            scaleX: 1.0413,
            scaleY: 1.0413
        }, 0).wait(1).to({
            scaleX: 1.0264,
            scaleY: 1.0264
        }, 0).wait(1).to({
            scaleX: 1.0149,
            scaleY: 1.0149
        }, 0).wait(1).to({
            scaleX: 1.0066,
            scaleY: 1.0066
        }, 0).wait(1).to({
            scaleX: 1.0017,
            scaleY: 1.0017
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(5))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-35.6, -26.5, 71.30000000000001, 53);
    (b.mc_selectbtn2 = function(c, d, f) {
        this.initialize(c, d, f, {
            push: 1
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_11 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));
        this.instance = new b.spread_flower;
        this.instance.parent = this;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 9).wait(1));
        this.btn2 = new b.gr_selectbtn2;
        this.btn2.name = "btn2";
        this.btn2.parent = this;
        this.timeline.addTween(a.Tween.get(this.btn2).wait(1).to({
            scaleX: .856,
            scaleY: .856
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081
        }, 0).wait(1).to({
            scaleX: 1.0595,
            scaleY: 1.0595
        }, 0).wait(1).to({
            scaleX: 1.0413,
            scaleY: 1.0413
        }, 0).wait(1).to({
            scaleX: 1.0264,
            scaleY: 1.0264
        }, 0).wait(1).to({
            scaleX: 1.0149,
            scaleY: 1.0149
        }, 0).wait(1).to({
            scaleX: 1.0066,
            scaleY: 1.0066
        }, 0).wait(1).to({
            scaleX: 1.0017,
            scaleY: 1.0017
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(3))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-35.6, -26.5, 71.30000000000001, 53);
    (b.mc_goodend_label = function(c, d, f) {
        this.initialize(c, d, f, {
            run: 1,
            loop: 21
        });
        this.frame_0 = function() {
            this.stop();
            this.visible = !1
        };
        this.frame_1 = function() {
            this.visible = !0
        };
        this.frame_21 = function() {
            this.visible = !0
        };
        this.frame_39 = function() {
            this.gotoAndPlay("loop")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(20).call(this.frame_21).wait(18).call(this.frame_39).wait(2));
        this.instance = new b.efa_particle_Set;
        this.instance.parent = this;
        this.instance.setTransform(-2.1, -2.3, .3353, .3352, 0, 0, 0, -.6, 0);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 20).wait(20));
        this.instance_1 = new b.gr_good_end_label_b;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .7917, .7917);
        this.instance_1.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            alpha: .8008
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(39));
        this.instance_2 = new b.gr_good_end_label_w;
        this.instance_2.parent = this;
        this.instance_2.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            scaleX: .7917,
            scaleY: .7917
        }, 0).to({
            scaleX: 1.2903,
            scaleY: 1.2903,
            alpha: .4688,
            compositeOperation: NaN
        }, 1, a.Ease.get(-1)).to({
            scaleX: 1.2177,
            scaleY: 1.2177,
            alpha: .3516
        }, 5).to({
            scaleX: .96,
            scaleY: .96,
            alpha: 0
        }, 4, a.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 1
        }, 2).wait(8).to({
            alpha: .4688
        }, 5, a.Ease.get(-1)).to({
            alpha: 0
        }, 5, a.Ease.get(1)).wait(10));
        this.instance_3 = new b.gr_good_end_label;
        this.instance_3.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1).to({
            scaleX: .7917,
            scaleY: .7917
        }, 0).to({
            scaleX: 1.2903,
            scaleY: 1.2903
        }, 1, a.Ease.get(-1)).to({
            scaleX: 1.2177,
            scaleY: 1.2177
        }, 5).to({
            scaleX: .96,
            scaleY: .96
        }, 4, a.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 1
        }, 2).wait(28))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-108.7, -84.5, 187.10000000000002, 159.1);
    (b.mc_ending_commu = function(c, d, f) {
        this.initialize(c, d, f, {
            next: 82,
            goodend: 1,
            skip0: 23,
            skip1: 32,
            skip2: 49,
            normalend: 53,
            skip3: 75
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.play();
            exportRoot.sound_mc.gotoAndStop("commu_fin")
        };
        this.frame_10 = function() {
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.gotoAndPlay("skip0")
            }, this, !0)
        };
        this.frame_28 = function() {
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.gotoAndPlay("skip1")
            }, this, !0)
        };
        this.frame_32 = function() {
            this.btn.removeAllEventListeners("click");
            exportRoot.sound_mc.gotoAndStop("excellent_logo")
        };
        this.frame_38 = function() {
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.gotoAndPlay("skip2")
            }, this, !0)
        };
        this.frame_49 = function() {
            this.btn.removeAllEventListeners("click");
            exportRoot.gotoAndPlay("scene_play")
        };
        this.frame_52 = function() {
            this.gotoAndStop(0)
        };
        this.frame_53 = function() {
            this.play();
            exportRoot.sound_mc.gotoAndStop("commu_fin")
        };
        this.frame_62 = function() {
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.gotoAndPlay("skip3")
            }, this, !0)
        };
        this.frame_75 = function() {
            this.btn.removeAllEventListeners("click");
            exportRoot.gotoAndPlay("scene_play")
        };
        this.frame_80 = function() {
            this.gotoAndStop(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(18).call(this.frame_28).wait(4).call(this.frame_32).wait(6).call(this.frame_38).wait(11).call(this.frame_49).wait(3).call(this.frame_52).wait(1).call(this.frame_53).wait(9).call(this.frame_62).wait(13).call(this.frame_75).wait(5).call(this.frame_80).wait(8));
        this.shape = new a.Shape;
        this.shape.graphics.f("#0000FF").s().p("AiEBkIAAjHIEJAAIAADHg");
        this.shape.setTransform(-17.5, -42.5);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(87));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(117.85, 135.7, 7.3003, 8.3912, 0, 0, 0, 17.4, 17.1);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(88));
        this.instance = new b.set_particle1;
        this.instance.parent = this;
        this.instance.setTransform(119.35, 129.65, 1,
            .9998, 0, 0, 0, -.5, -.4);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(32).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 17).wait(39));
        this.instance_1 = new b.ex_white;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120.05, 134.15, .952, .9518, 0, 0, 0, 97.7, 38.1);
        this.instance_1.alpha = .3008;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(32).to({
            _off: !1
        }, 0).to({
            regX: 97.8,
            scaleX: 1.0804,
            scaleY: 1.0803,
            x: 120.45,
            y: 134.45,
            alpha: .5
        }, 3, a.Ease.get(1)).to({
            regY: 38.2,
            scaleX: .9884,
            scaleY: .9883,
            y: 134.55,
            alpha: .0117
        }, 3, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(49));
        this.instance_2 = new b.ex_black;
        this.instance_2.parent = this;
        this.instance_2.setTransform(120.1, 131, 1.9784, 1.9781, 0, 0, 0, 97.6, 38);
        this.instance_2.alpha = .5;
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(27).to({
            _off: !1
        }, 0).to({
            regX: 97.7,
            scaleX: .9366,
            scaleY: .9365,
            x: 120.05,
            y: 132.1,
            alpha: .0117
        }, 5, a.Ease.quadIn).to({
            _off: !0
        }, 1).wait(55));
        this.instance_3 = new b.gr_excellent;
        this.instance_3.parent =
            this;
        this.instance_3.setTransform(120.25, 128.55, 1.9907, 1.9899, 0, 0, 0, .1, -1.9);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(27).to({
            _off: !1
        }, 0).to({
            regX: 0,
            regY: -.5,
            scaleX: .9533,
            scaleY: .9531,
            x: 120,
            y: 133.5
        }, 5, a.Ease.quadIn).to({
            scaleX: 1.0744,
            scaleY: 1.0743
        }, 3, a.Ease.get(1)).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: 134.5
        }, 3, a.Ease.quadInOut).wait(11).to({
            regY: -.2,
            scaleX: 1.1168,
            scaleY: 1.1163,
            y: 134.1,
            alpha: 0
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(35));
        this.instance_4 = new b.gr_episode_commu_fin("synched",
            0, !1);
        this.instance_4.parent = this;
        this.instance_4.setTransform(119.3, 138.1, .8, .8);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(3).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 24).wait(28).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 24).wait(9));
        this.instance_5 = new b.gr_plate;
        this.instance_5.parent = this;
        this.instance_5.setTransform(120, 138, 1, .3123);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
            _off: !1
        }, 0).to({
            scaleY: 1.0623
        }, 4, a.Ease.get(1)).wait(1).to({
                scaleY: 1.0311
            },
            0).wait(1).to({
            scaleY: 1
        }, 0).wait(16).to({
            scaleY: 1.0938
        }, 0).to({
            scaleY: .1875
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(25).to({
            _off: !1,
            scaleY: .3123
        }, 0).to({
            scaleY: 1.0623
        }, 4, a.Ease.get(1)).wait(1).to({
            scaleY: 1.0311
        }, 0).wait(1).to({
            scaleY: 1
        }, 0).wait(16).to({
            scaleY: 1.0938
        }, 0).to({
            scaleY: .1875
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(8));
        this.instance_6 = new b.fx_fade_black;
        this.instance_6.parent = this;
        this.instance_6.setTransform(121, 160, 1, 1, 0, 0, 0, 121, 160);
        this.instance_6.alpha = 0;
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(27).to({
                _off: !1
            },
            0).to({
            alpha: .5
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(56));
        this.instance_7 = new b.flash_col;
        this.instance_7.parent = this;
        this.instance_7.alpha = .6992;
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(32).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 6).to({
            _off: !0
        }, 1).wait(49))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-139.7, -115.3, 509.4, 474.6);
    (b.mc_dialog_container = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.btn4 = new b.mc_selectbtn4;
        this.btn4.name = "btn4";
        this.btn4.parent = this;
        this.btn4.setTransform(67.5, 39);
        this.timeline.addTween(a.Tween.get(this.btn4).wait(1));
        this.btn3 = new b.mc_selectbtn3;
        this.btn3.name = "btn3";
        this.btn3.parent = this;
        this.btn3.setTransform(-4.5, 39);
        this.timeline.addTween(a.Tween.get(this.btn3).wait(1));
        this.btn2 = new b.mc_selectbtn2;
        this.btn2.name = "btn2";
        this.btn2.parent = this;
        this.btn2.setTransform(-76.5, 39);
        this.timeline.addTween(a.Tween.get(this.btn2).wait(1));
        this.instance = new b.gr_peke;
        this.instance.parent = this;
        this.instance.setTransform(100.5, -12, 1.1282, 1.1282);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.view_scene = new a.Text("", "10px 'Arial'", "#FFFFFF");
        this.view_scene.name = "view_scene";
        this.view_scene.textAlign = "center";
        this.view_scene.lineHeight = 13;
        this.view_scene.lineWidth = 171;
        this.view_scene.parent = this;
        this.view_scene.setTransform(-4.5, -11);
        this.timeline.addTween(a.Tween.get(this.view_scene).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AABAeQgDgCAAgHIAAgMIgBgFQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgFACIgEAGIgEAFIgCAGIgCAGIgBAFIgLAAIAHgYIAGgWIAHgTIAMAAIgEAKIgEALIgEAKQACgCAEgCIAGgBQAEAAADADQADADAAAFIAAAOIABADIADAAQADAAADgDQADgEABgGQABgHAAgHIAMAAIgCANQgBAIgDAFQgDAGgEADQgFAEgGgBQgGAAgEgDg");
        this.shape.setTransform(42.05, 69.4);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgLAgQgGgCgDgEQgCgEAAgGIAAgWIgNAAIAAgKIANAAIAAgQIAKAAIAAAQIAZAAIAAgQIAKAAIAAAQIANAAIAAAKIgNAAIAAATIgKAAIAAgTIgZAAIAAATIABAGQABACAEABIALABIALAAIALgCIAAALIgLABIgMAAQgJAAgGgBg");
        this.shape_1.setTransform(34, 69.4);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AgWAgQgEgBgDgEQgCgDAAgFQAAgFACgDQACgEAFgCQAFgDAIABIAFAAIAEAAIAAgFIgfAAIAAgJIAfAAIAAgGIgfAAIAAgJIAfAAIAAgHIAKAAIAAAHIAWAAIAAAJIgWAAIAAAGIAWAAIAAAJIgWAAIAAAIIANAGIAJAFIAAAMIgKgHIgMgGIAAAAQAAAGgCADQgCAEgDACIgGADIgIAAQgGAAgFgCgAgSANQgDACAAAEQAAADACABQADACAFAAQAGAAACgDQADgCAAgGIAAgBIgFgBIgFAAQgGAAgCABg");
        this.shape_2.setTransform(26.075, 69.4);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFFFF").s().p("AgUAiIAAgYIgHAIIgIAJIAAgPIAIgJIAHgIIAAgFIgPAAIAAgJIAPAAIAAgOIAKAAIAAARIAGgGIAFgDQAEgCADAAQAHAAACADQAEACACADQABAFAAAEIAAAZIABAEIACABIAEgBIAEgDIAAANIgFABIgFABIgGgBQgDgBgBgEQgBgDAAgFIAAgYIgBgFQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgFABIgDADIgGAGIgDAEIAAAkg");
        this.shape_3.setTransform(18.15, 69.4);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#FFFFFF").s().p("AgQAgQgHgDgEgEQgDgEgBgHQAAgFAEgFQADgEAEgBQAGgCAIAAIAJABIAIACIgDgGIgEgGIglAAIAAgKIAhAAIgCgGIgCgFIALAAIACAFIACAGIAWAAIAAAJIgSAAIAGANIAHALIgNAAIgJgEQgFgCgGAAIgIABQgEABgBACQgCACAAADQAAAEADACQACACAGABIAJABIAKgBIAJgBIAIgBIAAAKIgNACIgNABQgKAAgHgCg");
        this.shape_4.setTransform(10.1, 69.375);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#FFFFFF").s().p("AAOAZIAHAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAIABgEIAAgIIgSAAIAAAWIgJAAIAAgWIgSAAIgCANIgEAKIgIgJIADgJIACgMIAAgQIAAgXIBAAAIAAA0IgBAIIgCAGIgFACIgJABgAAHADIASAAIAAgJIgSAAgAgTgBIAAAEIARAAIAAgJIgRAAIAAAFgAAHgPIASAAIAAgKIgSAAgAgTgPIARAAIAAgKIgRAAg");
        this.shape_5.setTransform(1.775, 69.45);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#FFFFFF").s().p("AAVAjIgIgDIgHgEIgGAFIgJADIgGgJIAIgBIAGgDIgGgEIgFgEIAHgFIgFAAIAAgaIARAAIAAgEIgTAAIAAgIIgCAHIgCAFIAAA0IgKAAIAAgmIgDACIgDADIgDgLIAJgLQAEgHACgJIAKACIAAACIgBACIASAAIAAgGIAJAAIAAAGIATAAIAAAJIgTAAIAAAEIASAAIAAAaIgTAAIgCAGIgCAFIAIADIAIABIAJABIgEAKIgLgBgAAAAOIADADIABgDIABgEIgIAAIADAEgAAQgDIAAADIAAABIAIAAIAAgIIgIAAgAgBABIAIAAIAAgBIAAgDIAAgEIgIAAg");
        this.shape_6.setTransform(-6, 69.35);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#FFFFFF").s().p("AgHAgQgFgCgCgDQgDgEAAgFQAAgFACgDQADgEAEgCQAEgCAFAAIAFAAIAFABIAAgOIgaAAIAAgKIAaAAIAAgMIAKAAIAAAMIAMAAIAAAKIgMAAIAAASIAGADIAEADIACABIAAANIgEgEIgIgFQgBAIgEAEQgFAEgJAAQgFAAgEgCgAgFANQgCACAAADQAAADACACQADABAEAAQAEAAACgCQADgDAAgEIAAgCIgFgCIgEAAQgEAAgDACgAggAhIAAgMIAAgMIAAgVIACgVIAKAAIgBAVIgBAVIAAAMIABAMg");
        this.shape_7.setTransform(-13.775, 69.425);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#FFFFFF").s().p("AgiAgIAAgJIAFgMIAGgNIAFgPIAEgOIAMAAIgGATIgHARIgHARIAqAAIgFgKIgFgMIgGgKIAMAAIAKAUQAFAKAEAMg");
        this.shape_8.setTransform(-21.85, 69.4);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#FFFFFF").s().p("AgaAWQAMgCAGgGQAHgGABgJIghAAIAAgKIBDAAIAAAKIgXAAQgBAKgGAHQgEAHgIAEQgIAEgKACgAgcgWIAAgKIA6AAIAAAKg");
        this.shape_9.setTransform(-30.025, 69.525);
        this.shape_10 = new a.Shape;
        this.shape_10.graphics.f("#FFFFFF").s().p("AAAAjIAAgkIgPAFIgRAEIAAgKQAQgDALgEQAJgGAHgGQAGgGADgGIAMAAQgDAIgFAHQgGAGgGAFIAAAqg");
        this.shape_10.setTransform(-38.15, 69.5);
        this.shape_11 = new a.Shape;
        this.shape_11.graphics.f("#FFFFFF").s().p("AgdAWQAGgCAFgEQAFgFACgGQADgGAAgJIAAgEIAKAAIAAAEIgBAFIAAAFQAIgDAFgFQAEgFACgIIgzAAIAAgLIA/AAIAAACQAAAKgDAHQgDAHgEAFQgFAEgGADQgHADgFABQgDAGgEAFQgEAEgGADQgFADgGACg");
        this.shape_11.setTransform(-45.9, 69.525);
        this.shape_12 = new a.Shape;
        this.shape_12.graphics.f("#FFFFFF").s().p("AAAAEIgZAbIgFgFIAagaIgagZIAFgFIAZAaIAagaIAFAFIgbAZIAbAaIgFAFgAgEAbQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCgAARAFQgCgCAAgDQAAgCACgCQADgCACAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACABACQgBADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAQgCAAgDgCgAgaAFQgCgCAAgDQAAgCACgCQACgCADAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgDAAgCgCgAgEgQQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
        this.shape_12.setTransform(-54, 69.375);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));
        this.instance_1 = new b.gr_select_base;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-5, 33);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = h(b.mc_dialog_container,
        new a.Rectangle(-125, -23, 240, 108), null);
    (b.efa_kirakira_board = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_16 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(16).call(this.frame_16).wait(1));
        this.instance = new b.efa_k;
        this.instance.parent = this;
        this.instance.setTransform(-37.05, -11.05, .281, .281);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.instance_1 = new b.efa_k;
        this.instance_1.parent = this;
        this.instance_1.setTransform(18.35,
            -9.8, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(2).to({
            _off: !1
        }, 0).wait(15));
        this.instance_2 = new b.efa_k;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-59.45, 27.5, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(4).to({
            _off: !1
        }, 0).wait(13));
        this.instance_3 = new b.efa_k;
        this.instance_3.parent = this;
        this.instance_3.setTransform(71.65, -29.05, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(6).to({
                _off: !1
            },
            0).wait(11));
        this.instance_4 = new b.efa_k;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-77.95, -32.6, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(9).to({
            _off: !1
        }, 0).wait(8));
        this.instance_5 = new b.efa_k;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-11.2, 14.95, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(11).to({
            _off: !1
        }, 0).wait(6));
        this.instance_6 = new b.efa_k;
        this.instance_6.parent = this;
        this.instance_6.setTransform(39.5, 25.75, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(14).to({
            _off: !1
        }, 0).wait(3));
        this.instance_7 = new b.efa_kira_pp;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, .7624, .2815);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(17))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-91.5, -42.2, 183, 84.5);
    (b.efa_kira_board = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_14 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(14).call(this.frame_14).wait(1));
        this.instance = new b.efa_k;
        this.instance.parent = this;
        this.instance.setTransform(-90.5, -34.75, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(15));
        this.instance_1 = new b.efa_k;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-21.4, 1.95, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(2).to({
            _off: !1
        }, 0).wait(13));
        this.instance_2 = new b.efa_k;
        this.instance_2.parent =
            this;
        this.instance_2.setTransform(67.35, -3.05, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(3).to({
            _off: !1
        }, 0).wait(12));
        this.instance_3 = new b.efa_k;
        this.instance_3.parent = this;
        this.instance_3.setTransform(57.5, 24, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(4).to({
            _off: !1
        }, 0).wait(11));
        this.instance_4 = new b.efa_k;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-74, -9, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(6).to({
            _off: !1
        }, 0).wait(9));
        this.instance_5 = new b.efa_k;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-24, -37.6, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(9).to({
            _off: !1
        }, 0).wait(6));
        this.instance_6 = new b.efa_k;
        this.instance_6.parent = this;
        this.instance_6.setTransform(25.85, -6.55, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(7).to({
                _off: !1
            },
            0).wait(8));
        this.instance_7 = new b.efa_k;
        this.instance_7.parent = this;
        this.instance_7.setTransform(111, 24, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(8).to({
            _off: !1
        }, 0).wait(7));
        this.instance_8 = new b.efa_k;
        this.instance_8.parent = this;
        this.instance_8.setTransform(79.65, 53.25, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(9).to({
            _off: !1
        }, 0).wait(6));
        this.instance_9 = new b.efa_k;
        this.instance_9.parent = this;
        this.instance_9.setTransform(29.45,
            47.35, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(5).to({
            _off: !1
        }, 0).wait(10));
        this.instance_10 = new b.efa_k;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-52.95, -21.1, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(4).to({
            _off: !1
        }, 0).wait(11));
        this.instance_11 = new b.efa_kira_pp;
        this.instance_11.parent = this;
        this.instance_11.setTransform(6.6, 10.2, .9866, .3782);
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(15))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-111.8, -46.5, 236.8, 113.5);
    (b.c_mc = function(c, d, f) {
        this.initialize(c, d, f, {
            stay: 1,
            "in": 6,
            out: 8,
            outen: 12,
            in_L: 19,
            in_R: 27,
            in_fade: 35,
            in_float: 44,
            out_L: 58,
            out_R: 63,
            out_fade: 68,
            out_float: 74,
            out_fall: 81,
            shake: 88,
            pop: 95,
            jump: 102,
            jump_double: 112,
            nod: 127,
            nod2: 134,
            nod_double: 149,
            down: 160,
            question_right: 182,
            question_right2: 203,
            question_left: 224,
            question_left2: 245,
            swing: 266
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.stop()
        };
        this.frame_7 =
            function() {
                this.stop();
                exportRoot.move_end()
            };
        this.frame_9 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_18 = function() {
            this.stop()
        };
        this.frame_26 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_34 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_43 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_53 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_62 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_67 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_73 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_80 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_87 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_94 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_101 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_111 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_126 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_133 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_148 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_159 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_181 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_202 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_223 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_244 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_265 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.frame_287 = function() {
            this.stop();
            exportRoot.move_end()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(2).call(this.frame_9).wait(9).call(this.frame_18).wait(8).call(this.frame_26).wait(8).call(this.frame_34).wait(9).call(this.frame_43).wait(10).call(this.frame_53).wait(9).call(this.frame_62).wait(5).call(this.frame_67).wait(6).call(this.frame_73).wait(7).call(this.frame_80).wait(7).call(this.frame_87).wait(7).call(this.frame_94).wait(7).call(this.frame_101).wait(10).call(this.frame_111).wait(15).call(this.frame_126).wait(7).call(this.frame_133).wait(15).call(this.frame_148).wait(11).call(this.frame_159).wait(22).call(this.frame_181).wait(21).call(this.frame_202).wait(21).call(this.frame_223).wait(21).call(this.frame_244).wait(21).call(this.frame_265).wait(22).call(this.frame_287).wait(1));
        this.instance = new b.question;
        this.instance.parent = this;
        this.instance.setTransform(57.5, -234.35, .5122, .5122, 8.7167);
        this.instance.alpha = 0;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(185).to({
            _off: !1
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 8.7168,
            x: 65.3,
            y: -261.05,
            alpha: 1
        }, 2, a.Ease.get(1)).to({
            x: 63.75,
            y: -251.2
        }, 3, a.Ease.get(-1)).wait(8).to({
            x: 57.25,
            y: -237.3,
            alpha: 0
        }, 3, a.Ease.get(.3)).to({
            _off: !0
        }, 1).wait(25).to({
            _off: !1,
            scaleX: .5122,
            scaleY: .5122,
            rotation: -32.8289,
            x: -58.1,
            y: -212.05
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -32.8309,
            x: -76.65,
            y: -247.4,
            alpha: 1
        }, 2, a.Ease.get(1)).to({
            x: -72.15,
            y: -237.6
        }, 3, a.Ease.get(-1)).wait(8).to({
            x: -66.8,
            y: -229.05,
            alpha: 0
        }, 3, a.Ease.get(.3)).to({
            _off: !0
        }, 1).wait(44));
        this.c_col = new b.c_col;
        this.c_col.name = "c_col";
        this.c_col.parent = this;
        this.c_col.setTransform(0, -250, 1, 1, 0, 0, 0, 0, -250);
        this.c_col.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.c_col).wait(1).to({
            alpha: 1
        }, 0).wait(7).to({
            x: -548.15,
            alpha: 0
        }, 0).wait(11).to({
            x: -10,
            alpha: 1
        }, 0).to({
                x: 0
            },
            5, a.Ease.get(1)).wait(3).to({
            x: 10
        }, 0).to({
            x: 0
        }, 5, a.Ease.get(1)).wait(4).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -137
        }, 0).wait(6).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -250
        }, 0).wait(2).to({
            y: -230
        }, 0).to({
            y: -262
        }, 4, a.Ease.get(1)).to({
            y: -248
        }, 3, a.Ease.get(-1)).to({
            y: -250
        }, 2).wait(5).to({
            x: -10
        }, 3, a.Ease.get(-1)).wait(1).to({
            x: -500
        }, 0).wait(1).to({
            x: 0
        }, 0).to({
            x: 10
        }, 3, a.Ease.get(-1)).wait(1).to({
            x: -500
        }, 0).wait(1).to({
            x: 0
        }, 0).wait(5).to({
            x: -501
        }, 0).wait(1).to({
            x: 0
        }, 0).to({
            y: -255
        }, 2, a.Ease.get(1)).to({
            y: -230
        }, 3, a.Ease.get(-1)).wait(1).to({
                x: -481
            },
            0).wait(1).to({
            x: 0,
            y: -250
        }, 0).to({
            y: -210
        }, 5, a.Ease.get(-1)).wait(1).to({
            x: -481,
            y: -230
        }, 0).wait(1).to({
            x: 0,
            y: -252
        }, 0).wait(1).to({
            x: 4
        }, 0).wait(1).to({
            x: -12,
            y: -248
        }, 0).wait(1).to({
            x: 1,
            y: -251
        }, 0).wait(1).to({
            x: -4,
            y: -250
        }, 0).wait(1).to({
            x: 0
        }, 0).wait(3).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -150.25
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -266
        }, 0).to({
            y: -246
        }, 3, a.Ease.get(-1)).wait(1).to({
            y: -250
        }, 0).wait(1).to({
            y: -248
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -157.85
        }, 0).wait(1).to({
            y: -165.15
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -280
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -164.05
        }, 0).wait(1).to({
            y: -154.45
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -246
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -133.85
        }, 0).wait(1).to({
            y: -136.8
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -251
        }, 0).wait(1).to({
            y: -248
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -156.4
        }, 0).wait(1).to({
            y: -163.25
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -278
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -159
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -248
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -158.55
        }, 0).wait(1).to({
            y: -166.05
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -281
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -164.95
        }, 0).wait(1).to({
            y: -155.1
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -246
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -133.85
        }, 0).wait(1).to({
            y: -136.8
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -251
        }, 0).wait(1).to({
            y: -250
        }, 0).to({
            y: -241
        }, 3, a.Ease.get(1)).to({
            y: -250
        }, 3, a.Ease.get(-.3)).wait(2).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -136.8
        }, 0).wait(1).to({
            y: -136
        }, 0).wait(1).to({
                y: -134.5
            },
            0).wait(1).to({
            y: -132.55
        }, 0).wait(1).to({
            y: -131.05
        }, 0).wait(1).to({
            y: -130.25
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -243
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -130.25
        }, 0).wait(1).to({
            y: -131.05
        }, 0).wait(1).to({
            y: -132.55
        }, 0).wait(1).to({
            y: -134.5
        }, 0).wait(1).to({
            y: -136
        }, 0).wait(1).to({
            y: -136.8
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -250
        }, 0).wait(2).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -134.5
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -245
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -133.05
        }, 0).wait(1).to({
                y: -136
            },
            0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -250
        }, 0).to({
            y: -245
        }, 2).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -133.05
        }, 0).wait(1).to({
            y: -136
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -250
        }, 0).wait(2).to({
            regX: -2,
            regY: -137,
            x: -1.25,
            y: -135.5
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 1,
            y: -248
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -4.75,
            y: -132.75
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: -4,
            y: -245
        }, 0).to({
            x: 0,
            y: -243
        }, 2).wait(11).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -131.85
        }, 0).wait(1).to({
            y: -137.15
        }, 0).wait(1).to({
                regX: 0,
                regY: -250,
                x: 0,
                y: -252
            },
            0).wait(1).to({
            regX: -2,
            regY: -137,
            x: -2,
            y: -137.45
        }, 0).wait(1).to({
            regX: 0,
            regY: -250,
            x: 0,
            y: -250
        }, 0).wait(1).to({
            regY: 5.9,
            y: 5.9
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            rotation: .0994,
            x: -1.75,
            y: -137
        }, 0).wait(1).to({
            rotation: .443,
            x: -.95
        }, 0).wait(1).to({
            rotation: 1.1026,
            x: .75
        }, 0).wait(1).to({
            rotation: 2.0487,
            x: 3.1,
            y: -136.95
        }, 0).wait(1).to({
            rotation: 2.8911,
            x: 5.2
        }, 0).wait(1).to({
            regX: .1,
            regY: 5.9,
            rotation: 3.184,
            x: .05,
            y: 5.9
        }, 0).wait(9).to({
            regX: -2,
            regY: -137,
            rotation: 3.0759,
            x: 5.6,
            y: -136.9
        }, 0).wait(1).to({
            rotation: 2.6671,
            x: 4.55,
            y: -136.95
        }, 0).wait(1).to({
            rotation: 1.8154,
            x: 2.45,
            y: -137
        }, 0).wait(1).to({
            rotation: .7664,
            x: -.15,
            y: -137.05
        }, 0).wait(1).to({
            rotation: .1586,
            x: -1.6,
            y: -137
        }, 0).wait(1).to({
            regX: 0,
            regY: 5.9,
            rotation: 0,
            x: 0,
            y: 5.9
        }, 0).wait(2).to({
            regX: -2,
            regY: -137,
            rotation: .0994,
            x: -1.75,
            y: -137
        }, 0).wait(1).to({
            rotation: .443,
            x: -.95
        }, 0).wait(1).to({
            rotation: 1.1026,
            x: .75
        }, 0).wait(1).to({
            rotation: 2.0487,
            x: 3.1,
            y: -136.95
        }, 0).wait(1).to({
            rotation: 2.8911,
            x: 5.2
        }, 0).wait(1).to({
            regX: .1,
            regY: 5.9,
            rotation: 3.184,
            x: .05,
            y: 5.9
        }, 0).wait(9).to({
            regX: -2,
            regY: -137,
            rotation: 3.0759,
            x: 5.6,
            y: -136.9
        }, 0).wait(1).to({
            rotation: 2.6671,
            x: 4.55,
            y: -136.95
        }, 0).wait(1).to({
            rotation: 1.8154,
            x: 2.45,
            y: -137
        }, 0).wait(1).to({
            rotation: .7664,
            x: -.15,
            y: -137.05
        }, 0).wait(1).to({
            rotation: .1586,
            x: -1.6,
            y: -137
        }, 0).wait(1).to({
            regX: 0,
            regY: 5.9,
            rotation: 0,
            x: 0,
            y: 5.9
        }, 0).wait(2).to({
            regX: -2,
            regY: -137,
            rotation: -.0952,
            x: -2.25,
            y: -137
        }, 0).wait(1).to({
            rotation: -.4243,
            x: -3
        }, 0).wait(1).to({
            rotation: -1.0561,
            x: -4.6,
            y: -136.9
        }, 0).wait(1).to({
                scaleX: .9999,
                scaleY: .9999,
                rotation: -1.9623,
                x: -6.85,
                y: -136.85
            },
            0).wait(1).to({
            rotation: -2.7691,
            x: -8.85,
            y: -136.7
        }, 0).wait(1).to({
            regX: .1,
            regY: 5.9,
            scaleX: .9998,
            scaleY: .9998,
            rotation: -3.0496,
            x: .05,
            y: 5.9
        }, 0).wait(9).to({
            regX: -2,
            regY: -137,
            scaleX: .9999,
            scaleY: .9999,
            rotation: -2.9462,
            x: -9.35,
            y: -136.7
        }, 0).wait(1).to({
            rotation: -2.5546,
            x: -8.4,
            y: -136.75
        }, 0).wait(1).to({
            rotation: -1.7388,
            x: -6.35,
            y: -136.85
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -.734,
            x: -3.85,
            y: -136.95
        }, 0).wait(1).to({
            rotation: -.1519,
            x: -2.4,
            y: -137
        }, 0).wait(1).to({
            regX: 0,
            regY: 5.9,
            rotation: 0,
            x: 0,
            y: 5.9
        }, 0).wait(2).to({
            regX: -2,
            regY: -137,
            rotation: -.0952,
            x: -2.25,
            y: -137
        }, 0).wait(1).to({
            rotation: -.4243,
            x: -3
        }, 0).wait(1).to({
            rotation: -1.0561,
            x: -4.6,
            y: -136.9
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: -1.9623,
            x: -6.85,
            y: -136.85
        }, 0).wait(1).to({
            rotation: -2.7691,
            x: -8.85,
            y: -136.7
        }, 0).wait(1).to({
            regX: .1,
            regY: 5.9,
            scaleX: .9998,
            scaleY: .9998,
            rotation: -3.0496,
            x: .05,
            y: 5.9
        }, 0).wait(9).to({
            regX: -2,
            regY: -137,
            scaleX: .9999,
            scaleY: .9999,
            rotation: -2.9462,
            x: -9.35,
            y: -136.7
        }, 0).wait(1).to({
            rotation: -2.5546,
            x: -8.4,
            y: -136.75
        }, 0).wait(1).to({
            rotation: -1.7388,
            x: -6.35,
            y: -136.85
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -.734,
            x: -3.85,
            y: -136.95
        }, 0).wait(1).to({
            rotation: -.1519,
            x: -2.4,
            y: -137
        }, 0).wait(1).to({
            regX: 0,
            regY: 5.9,
            rotation: 0,
            x: 0,
            y: 5.9
        }, 0).wait(2).to({
            regX: -2,
            regY: -137,
            rotation: -.0712,
            x: -2.15,
            y: -137
        }, 0).wait(1).to({
            rotation: -.3125,
            x: -2.75
        }, 0).wait(1).to({
            rotation: -.7678,
            x: -3.9,
            y: -136.95
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: -1.4538,
            x: -5.55,
            y: -136.9
        }, 0).wait(1).to({
            rotation: -2.2682,
            x: -7.6,
            y: -136.8
        }, 0).wait(1).to({
            rotation: -2.9656,
            x: -9.35,
            y: -136.7
        }, 0).wait(1).to({
            rotation: -3.3743,
            x: -10.35,
            y: -136.65
        }, 0).wait(1).to({
            regX: .1,
            regY: 5.9,
            scaleX: .9998,
            scaleY: .9998,
            rotation: -3.4963,
            x: .05,
            y: 5.9
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            rotation: -3.4016,
            x: -10.5,
            y: -136.65
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: -3.0807,
            x: -9.7,
            y: -136.7
        }, 0).wait(1).to({
            rotation: -2.4751,
            x: -8.2,
            y: -136.75
        }, 0).wait(1).to({
            rotation: -1.5626,
            x: -5.95,
            y: -136.9
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -.4794,
            x: -3.25,
            y: -137
        }, 0).wait(1).to({
            rotation: .4482,
            x: -.95
        }, 0).wait(1).to({
            rotation: .9918,
            x: .35,
            y: -137.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 5.9,
            rotation: 1.1541,
            x: 0,
            y: 5.9
        }, 0).wait(1).to({
            regX: -2,
            regY: -137,
            rotation: 1.0905,
            x: .65,
            y: -137.05
        }, 0).wait(1).to({
            rotation: .8612,
            x: .1
        }, 0).wait(1).to({
            rotation: .4589,
            x: -.9,
            y: -137
        }, 0).wait(1).to({
            rotation: .1089,
            x: -1.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 5.9,
            rotation: 0,
            x: 0,
            y: 5.9
        }, 0).wait(1))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-759.6, -430.4, 990.3, 596);
    (b._txtSet1 = function(c, d, f) {
        this.initialize(c, d, f, {
            start: 1,
            flash_in: 31,
            out: 57
        });
        this.frame_0 =
            function() {
                this.stop()
            };
        this.frame_1 = function() {
            exportRoot.sound_mc.gotoAndStop("gauge_up")
        };
        this.frame_2 = function() {
            this.btn.on("click", function() {
                this.gotoAndPlay("flash_in")
            }, this, !0);
            this.handleKeydown = function(g) {
                13 == g.keyCode && exportRoot.first_commu.gotoAndPlay("flash_in")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_20 = function() {
            exportRoot.sound_mc.gotoAndStop("burst")
        };
        this.frame_31 = function() {
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown",
                this.handleKeydown);
            exportRoot.sound_mc.gotoAndStop("star_up")
        };
        this.frame_35 = function() {
            exportRoot.sound_mc.gotoAndStop("commu_appear")
        };
        this.frame_40 = function() {
            exportRoot.commu_result.gotoAndPlay("in")
        };
        this.frame_41 = function() {
            this.btn.on("click", function() {
                this.gotoAndPlay("out")
            }, this, !0);
            this.handleKeydown = function(g) {
                13 == g.keyCode && exportRoot.first_commu.gotoAndPlay("out")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_56 = function() {
            this.stop()
        };
        this.frame_57 = function() {
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown", this.handleKeydown);
            exportRoot.gotoAndPlay("scene_play")
        };
        this.frame_61 = function() {
            this.gotoAndStop(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(18).call(this.frame_20).wait(11).call(this.frame_31).wait(4).call(this.frame_35).wait(5).call(this.frame_40).wait(1).call(this.frame_41).wait(15).call(this.frame_56).wait(1).call(this.frame_57).wait(4).call(this.frame_61).wait(1));
        this.instance =
            new b.efa_kira_board;
        this.instance.parent = this;
        this.instance.setTransform(-2.2, 18.8, 1, 1, 0, 0, 0, -.2, -.2);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(49).to({
            _off: !1
        }, 0).wait(8).to({
            alpha: 0
        }, 3).wait(2));
        this.instance_1 = new b.efa_particle_Set;
        this.instance_1.parent = this;
        this.instance_1.setTransform(5.05, 20.1, .7968, .7968);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(37).to({
            _off: !1
        }, 0).wait(20).to({
            alpha: 0
        }, 3).wait(2));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("AEUHtQgkgDgVgEIAAAAIgKgPIgFAAIgFgyQAGgGABgFIAAAAQABgHACgDIAAAAQAEgFAOgJIAAAAQANgIAFgIIAAAAQgMgIgEgRIAAAAQgCgWgDgOIAAAAIgFAAIAFgeQAHgEADgHIAAAAQADgHADgCIAAAAIAKAAIAKgQIAKAAIAAgFIAUgPIgPgtIAFgfQAHgFANgUIAAAAQALgQAPgEIAAAAQAKgKAegBIAAAAQARgBAiACIAAAAIBCAAIAEADQAEADAHgBIAAAAIAAgFIAaAAIAAgFQASgGAaAGIAAAAQAOADAXAHIAAAAQABADAEADIAAAAIAFAEIAAAAIAAAKIAFAAIAAAUIAFAAIAJAOIAAAAIALAMIAAAAIAAgGQAJgFgBgCIAAAAQgBgDADgFIAAAAIAQgKIAAgKIAKgFIAAgFIAKAAIAAgFIAPAAIAAgFIAkAAIAFgKIAKAAIAAgFQAKgEApACIAAAAQApADAEAEIAAAAQAPADAIAJIAAAAQAHAKABASIAAAAIAFAAIgFAfQATgBANADIAAAAQALACAMAGIAAAAQABgOAGgNIAAAAIAJgYIAAAAIAPgFIAAgFIAPAAIAAgFQAMgEAsACIAAAAQArADAIAEIAAAAIAPAUIAFAAIAAAPQAHAUgJAaIAAAAQgGAOgMAaIAAAAIgLAuIgFAAIAAAKIgFAAIgKAuIgFAAIAAAKIgFAAIAAAPIgFAAQgBAFADADIAAAAIADACIAAAAIgKA4IgFAAIgFAeIgFAAIgFAPQgJACgDAEIAAAAQgCADgCABIAAAAQgGADglADIAAAAQgmACgKgDIAAAAIgSgHIAAAAQgNgFgKACIAAAAQgTAFgkAAIAAAAIg9AAIAAAAIhmABIAAAAQg8gBgkgFIAAAAIgZAFIAAAFIiYAAIAAgFIgVAAIAAgFQgJgBgCAEIAAAAIgEAHIAAAAIgKAAIAAAFQgIADgTAAIAAAAIghgBgAJTFeIgEADIAAAAIgCAHIAAAAIAQAAIAAgFIgEgEIAAAAIgBgGIAAAAIgFAAgAG8BUIAAgFIgTgFIgKgeIgRATIAAAAQgKANgIADIAAAAIiCAAIAAgFIgPAFIAAAFQgQAFgdgDIAAAAIgogHIAAAAIgGgJIAAAAQgCgEgCgHIAAAAQgGgGgEgYIAAAAIgFgiIAAAAIgZAFIAAAEIhVAAQAAAQgGASIAAAAIgJAfIAAAAQgNAIgGAHIAAAAQgzABgcgGIAAAAIgKgOIAAAAQgFgHAAgOIAAAAIgFAAIAAgFIAFAAIAAgPIAFAAIAAgYQADAAACgKIAAAAIgyAAIAAAKIAKAEIAAAPIAFAAQAAAFgJAWIAAAAQgJAWgCABIAAAAIgKAAQgHAFgSABIAAAAIgegBIAAAAIiWAAIAAAFIgKAAIAAAFQgLAEghgIIAAAAIgpgLIAAAAIhBgFIgSgHIAAAAQgRgFgFACIAAAAIgPAUIgKAAIAAAFIjHAAIAAgFIgUgFIAAgKIgKgFQgFgNAIgUIAAAAQAKgUACgGIAAAAIAUgFIAAgFIBzAAIAPhFIg6gBIAAAAQghgBgTgDIAAAAIgLgaIAAAAQgFgPAGgOIAAAAIAFAAIAFgUIAUgFIAAgFIA8AAIBOAAIAAAAQAtAAAaAFIAAAAIAEgKIAAAAIAGgFIAAAAIAAgFIAKAAIAAgFIC+AAIAFAKIAKAAQACALAFALIAAAAQADAJgFAOIAAAAICMAAIAAAFIAZAFIAAAKQAEACAEAFIAAAAIAHAIIAAAAIAAgFIAPgFIAFgKIAKAAIAKgPIAKAAIAEgKIAKAAIAKgPIAKAAIAFgKIAKAAIAKgPQAQgLAfgHIAAAAQAmgKAYAIIAAAAIAAAFIAZAFIAFAPIBBAAQACgNADgEIAAAAQAEgFALgDIAAAAQAGgGAYgEIAAAAQAbgFANAFIAAAAIAAAFIAOAEIAAAAQAIACADAEIAAAAIAFAPIAZAFIAAAFIAKAAIAFAKIAVALIAAAAQAMAGAHAIIAAAAQALgEAAgBIAAAAQABgGADgEIAAAAIAFAAIAAgKIAKgFIAAgFQAIgFAWACIAAAAQAZADAJgFIAAAAIAPgUIAPAAQATgHAXACIAAAAQATACATAIIAAAAQAHARAAANIAAAAQABAJgDAaIAAAAIAKAAIAAAFIAFAAIAAAKIAUAPIAAAKIAKAFIAQAPIAAAAQAJAHAPADIAAAAIAHAUIAAAAQADALAAASIAAAAQgFAFgEAGIAAAAIgEAJIAAAAQgGAIgVABIAAAAQgGAHgkgBIAAAAQgigBgJgFIAAAAQgFgHgFgDIAAAAIgUBGIgmAKIAAAAQgPADgLAAIAAAAQgMAAgJgDgAD1guQAGAbAEAEIAAAAQAFAGARAAIAAAAIAcgBIAAAAIAIgLIAAAAQAEgFADgJIAAAAQgEgBgDgEIAAAAIgDgFIAAAAIgKAAIgFgJIgUgFIgFgKIgKAAIAAgFIgJgGIAAAAIgLgEIAAAAQAAAMAFAagAlmgZIAFAAQAGAJATACIAAAAIAjgBIAAAAIAPgeQgTABgRgDIAAAAIgdgHIAAAAIgFAOIgFAAgAjnjQIAAgFIgUgFIgFgZIgFAAIAFgZIAFAAIAFgjIjDAAIAAgEIgUgFQgCADgEADIAAAAIgEADIAAAAIAAAKIgKAFIAAAKIgPAKIAAAKIgKAFIAAAKIgPAKIAAAKIgKAFIAAAFIgKAAIAAAFIgyABIAAAAQgagDgJgNIAAAAIgFAAIgFgjIAZgjQgKgCgFgDIAAAAQgEgCgGgHIAAAAIgFAAQgCgDABgLIAAAAQABgJgFgCIAAAAIgPAAIhaAdIAAAFQA/gBAbALIAAAAIAOAaIAAAAQACAJgLAUIAAAAIgFAPQgPALhIABIAAAAQhEABgZgIIAAAAIgUAAIgFgKQgmAFhIAAIAAAAIhAACIAAAAQgsAAgLgHIAAAAIgFgKIgKgFQgGgLADgOIAAAAIAIgZIAAAAQADgBADgEIAAAAIAEgFIAAAAIAKAAIAAgFIA7AAQAFgCAHgWIAAAAQAGgTACgLIAAAAQgbAAgKgHIAAAAQgKgHgHgVIAAAAIgEgDIAAAAQgDgCACgFIAAAAIAFAAIAFgZQADgCADgEIAAAAIAEgEIAAAAIAKAAIAAgFIA2AAIBRgDIAAAAQAzgBAXAJIAAAAQADgSAHgHIAAAAIAPgPIAAAAIBGAAIAIALIAAAAQAFAGACAIIAAAAIAKAAIAFgZQAOgHAGgIIAAAAQA3gCAKABIAAAAQAgAFADAaIAAAAQAbADANAMIAAAAIAAAKIAFAAIAAgFQAFgEAKgLIAAAAIAPAAIAAgFQAQgFApAEIAAAAQAoAEAIAHIAAAAIAFAPQAIAJgEAQIAAAAIgJAZIAAAAIC0AAIAFgeIAFAAIAAgUIAFAAQAEgSADgFIAAAAQADgIAPgEIAAAAQAFgFAYgCIAAAAQAYgCAMAEIAAAAIAAAFIAPAFIAKgPIAUAAIAAgFQAEgBADADIAAAAIADADIAAAAIAdgFIAAAFIAZAFIAFAPQAJAKgIAhIAAAAQgEAPgMAbIAAAAQgEACgFAGIAAAAIgGAHIAAAAIgTAAIAAAFIAFAAIAAAFIAOAAIAFAKQAMALACAFIAAAAQACAFgBAXIAAAAQgFAEgBAEIAAAAIgEAMIAAAAIguAKIAAAAQgoAHgNgHIAAAAQgLgMgEgDIAAAAQgCAZgIASIAAAAQgJAXgQAEIAAAAQgFAFgXACIAAAAIgOABIAAAAQgMAAgGgDgAuFkvIAjAAIAAgEIAFAAIAKgyIgoAAg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(40).to({
            graphics: d,
            x: -2.3364,
            y: 29.5689
        }).wait(9).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(13));
        this.instance_2 = new b.efc_card_kira;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-275.7, 27.25, 1.0415, 1, 0, -90, -57.7798);
        this.instance_2._off = !0;
        d = [this.instance_2];
        for (f = 0; f < d.length; f++) d[f].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(40).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 2.1,
            regY: 2.1,
            x: -248.55,
            y: 25.4
        }, 0).wait(1).to({
                x: -188.2
            },
            0).wait(1).to({
            x: -99.15
        }, 0).wait(1).to({
            x: 5.3
        }, 0).wait(1).to({
            x: 108.7
        }, 0).wait(1).to({
            x: 195.15
        }, 0).wait(1).to({
            x: 253.2
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 273.55,
            y: 27.25
        }, 0).to({
            _off: !0
        }, 1).wait(13));
        this.instance_3 = new b.epi_white;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-56, -5.5, 1, 1, 0, 0, 0, 56, 14.5);
        this.instance_3.alpha = .0117;
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(40).to({
            _off: !1
        }, 0).to({
            x: -58,
            alpha: .8008,
            compositeOperation: NaN
        }, 3, a.Ease.get(1)).to({
                alpha: .0117
            },
            5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(13));
        this.instance_4 = new b.commu_white;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 23.15, 1, 1, 0, 0, 0, 76, 15.4);
        this.instance_4.alpha = .0117;
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(40).to({
            _off: !1
        }, 0).to({
            x: -10,
            y: 23.4,
            alpha: .8008,
            compositeOperation: NaN
        }, 3, a.Ease.get(1)).to({
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(13));
        this.instance_5 = new b.appear_white;
        this.instance_5.parent = this;
        this.instance_5.setTransform(63.5,
            58.25, 1, 1, 0, 0, 0, 45.5, 20.5);
        this.instance_5.alpha = .0117;
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(40).to({
            _off: !1
        }, 0).to({
            x: 61.5,
            alpha: .8008,
            compositeOperation: NaN
        }, 3, a.Ease.get(1)).to({
            x: 63.5,
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(13));
        this.instance_6 = new b._txt3_1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(92.8, -20);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(35).to({
            _off: !1
        }, 0).to({
            x: -120
        }, 2, a.Ease.get(1)).to({
                x: -112
            },
            3, a.Ease.get(1)).to({
            x: -114
        }, 3, a.Ease.get(1)).wait(14).to({
            x: -154,
            alpha: 0
        }, 3, a.Ease.get(-1)).wait(2));
        this.instance_7 = new b._txt3_2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-169.9, 22.5, 1, 1, 0, 0, 0, 82.5, 15.5);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(35).to({
            _off: !1
        }, 0).to({
            x: 2.5,
            y: 23.5
        }, 2, a.Ease.get(1)).to({
            x: -5.5
        }, 3, a.Ease.get(1)).to({
            x: -3.5
        }, 3, a.Ease.get(1)).wait(14).to({
            x: 36.5,
            alpha: 0
        }, 3, a.Ease.get(-1)).wait(2));
        this.instance_8 = new b._txt3_3;
        this.instance_8.parent = this;
        this.instance_8.setTransform(145.4, 59, 1, 1, 0, 0, 0, 48, 21);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(35).to({
            _off: !1
        }, 0).to({
            x: 59
        }, 2, a.Ease.get(1)).to({
            x: 66
        }, 3, a.Ease.get(1)).to({
            x: 64
        }, 3, a.Ease.get(1)).wait(14).to({
            x: 14,
            alpha: 0
        }, 3, a.Ease.get(-1)).wait(2));
        this.instance_9 = new b.particle_burst_container;
        this.instance_9.parent = this;
        this.instance_9.setTransform(.65, 31.9, 1.8691, 1.8691, 0, 0, 0, 0, .5);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(20).to({
                _off: !1
            },
            0).wait(42));
        this.instance_10 = new b.light_grd_yellow;
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 31.6, .224, .224);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(26).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -1,
            regY: -8.4,
            scaleX: .3193,
            scaleY: .3193,
            rotation: 4.6607,
            x: -.1,
            y: 29.55
        }, 0).wait(1).to({
            scaleX: .6898,
            scaleY: .6898,
            rotation: 22.7669,
            x: 1.6,
            y: 29.3
        }, 0).wait(1).to({
            scaleX: 1.5048,
            scaleY: 1.5048,
            rotation: 62.5972,
            x: 10.5,
            y: 33.6
        }, 0).wait(1).to({
            scaleX: 3.1463,
            scaleY: 3.1463,
            rotation: 142.8244,
            x: 18.4,
            y: 71.6
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 7.59,
            scaleY: 7.59,
            rotation: 0,
            x: -.2,
            y: 84.25
        }, 0).to({
            scaleX: 14.8408,
            scaleY: 14.8408,
            rotation: 360,
            x: -.35,
            y: 136.15,
            alpha: 0
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(27));
        this.score_container = new b.score_container;
        this.score_container.name = "score_container";
        this.score_container.parent = this;
        this.score_container.setTransform(-10.1, 21.7, 1.2583, 1.2582, 0, 0, 0, -1.2, 1.4);
        this.score_container._off = !0;
        this.timeline.addTween(a.Tween.get(this.score_container).wait(1).to({
                _off: !1
            },
            0).wait(19).to({
            regX: 0,
            regY: 0,
            scaleX: 1.2404,
            scaleY: 1.2404,
            x: -5.45,
            y: 20.25
        }, 0).to({
            scaleX: 1.944,
            scaleY: 1.944,
            x: -8.6,
            y: 14.7
        }, 3, a.Ease.get(1)).wait(1).to({
            regX: 9.4,
            regY: -9.1,
            scaleX: 1.924,
            scaleY: 1.924,
            x: 9.6,
            y: -2.65
        }, 0).wait(1).to({
            scaleX: 1.8541,
            scaleY: 1.8541,
            x: 9.25,
            y: -1.45
        }, 0).wait(1).to({
            scaleX: 1.7095,
            scaleY: 1.7095,
            x: 8.5,
            y: .95
        }, 0).wait(1).to({
            scaleX: 1.4278,
            scaleY: 1.4278,
            x: 7.1,
            y: 5.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .6151,
            scaleY: .6151,
            x: -2.7,
            y: 25.15
        }, 0).to({
            _off: !0
        }, 1).wait(33));
        this.instance_11 =
            new b.powder_rise;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-.5, 183.55, 1, 1, 174.9999, 0, 0, 0, 6.5);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 19).wait(42));
        this.instance_12 = new b.bk_rect_02;
        this.instance_12.parent = this;
        this.instance_12.setTransform(1.55, 46.05, 1, 1, 0, 0, 0, 128.5, 169);
        this.instance_12.alpha = .0117;
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(1).to({
            _off: !1
        }, 0).to({
                alpha: .8281
            },
            18, a.Ease.get(-1)).wait(1).to({
            alpha: .0117
        }, 0).to({
            alpha: .8281
        }, 9, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(32));
        this.instance_13 = new b.white_rect_02;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-.45, 31.55, 1, 1, 0, 0, 0, 126.5, 148.5);
        this.instance_13.alpha = .5;
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(20).to({
            _off: !1
        }, 0).to({
            alpha: .0117
        }, 9, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(32));
        this.bg = new b.bg_;
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(-120,
            -140, .5, .5);
        this.bg._off = !0;
        this.timeline.addTween(a.Tween.get(this.bg).wait(1).to({
            _off: !1
        }, 0).wait(31).to({
            regX: 240,
            regY: 310,
            x: 0,
            y: 15
        }, 0).wait(14).to({
            regX: 0,
            regY: 0,
            x: -120,
            y: -140
        }, 0).to({
            _off: !0
        }, 11).wait(5));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(-.15, 30.95, 7.3428, 8.9429, 0, 0, 0, 17.6, 17.6);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(62))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-1951.5, -1816.8, 3731.1, 3731.1);
    (b.result_perfect = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_16 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(16).call(this.frame_16).wait(1));
        this.instance = new b.efa_particle_Set;
        this.instance.parent = this;
        this.instance.setTransform(-4.15, 78, .8734, .8734);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.instance_1 = new b.effect_lvup;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-5.75, 73.3, 1.4977,
            1.4977, 23.8569);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.instance_2 = new b.effect_lvup_Copy("synched", 0, !1);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-6.6, 82.9, 1.8254, 1.8254, 113.8308, 0, 0, .1, .2);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.instance_3 = new b.efa_kirakira_board;
        this.instance_3.parent = this;
        this.instance_3.setTransform(1.85, 91.2);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(5).to({
            _off: !1
        }, 0).wait(12));
        this.instance_4 = new b.perfect_white;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-.05, 96.1, 1.4224, 1.4224, 0, 0, 0, 91, 35);
        this.instance_4.alpha = .3984;
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(2).to({
            _off: !1
        }, 0).to({
            regY: 34.9,
            scaleX: .9449,
            scaleY: .9449,
            x: 0,
            y: 95.75,
            alpha: .1992
        }, 3, a.Ease.get(1)).to({
            regY: 35,
            scaleX: 1.0357,
            scaleY: 1.0357,
            x: .05,
            y: 95.55,
            alpha: .0117
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(8));
        this.instance_5 = new b._txt_rst2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 93.75, .6028, .6028, 0, 0, 0, 0, -.4);
        this.instance_5.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regY: -.8,
            scaleX: 1.4321,
            scaleY: 1.4321,
            y: 93.85,
            alpha: 1
        }, 2, a.Ease.get(.99)).to({
            regY: -1.3,
            scaleX: .9482,
            scaleY: .9482,
            y: 93.75
        }, 3, a.Ease.get(1)).to({
            regY: -1.2,
            scaleX: 1.0448,
            scaleY: 1.0448
        }, 3, a.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            y: 93.8
        }, 3).wait(6));
        this.instance_6 = new b.symbol8;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-4.1, 95.9, 1, .4471, 0, 0, 0, -.1, -.2);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            regY: -1,
            scaleY: 1.092
        }, 2, a.Ease.get(1)).to({
            regY: -1.2,
            scaleY: .9719,
            y: 95.85
        }, 3, a.Ease.get(1)).to({
            regY: -1.1,
            scaleY: 1,
            y: 95.9
        }, 3, a.Ease.get(1)).wait(9))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-282.4, -136.4, 487.4, 414.70000000000005);
    (b.result_good = function(c, d, f) {
        this.initialize(c, d, f, {});
        this.frame_14 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(14).call(this.frame_14).wait(1));
        this.instance = new b.efa_particle_Set;
        this.instance.parent = this;
        this.instance.setTransform(-2.9, 81.75, .8734, .8734);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(14));
        this.instance_1 = new b.effect_lvup;
        this.instance_1.parent = this;
        this.instance_1.setTransform(2.05, 87.7, 1.4977, 1.4977, 23.8569);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
                _off: !1
            },
            0).wait(14));
        this.instance_2 = new b.efa_kirakira_board;
        this.instance_2.parent = this;
        this.instance_2.setTransform(1.85, 92.65);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(7).to({
            _off: !1
        }, 0).wait(8));
        this.instance_3 = new b.good_bk;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-.2, 82.05, 1, 1, 0, 0, 0, 62.2, 37.6);
        this.instance_3.alpha = .5;
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1).to({
            _off: !1
        }, 0).to({
                y: 57.6,
                alpha: .3008
            }, 2,
            a.Ease.get(1)).to({
            y: 99.6,
            alpha: .0117
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(8));
        this.instance_4 = new b._txt_rst1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 108.15, 1, .4588, 0, 0, 0, 0, -1.9);
        this.instance_4.alpha = .3281;
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            regY: -1.1,
            scaleY: 1,
            y: 79.9,
            alpha: 1
        }, 1, a.Ease.get(-1)).to({
            y: 55.9
        }, 2, a.Ease.get(1)).to({
            regY: -.8,
            y: 98.2
        }, 3, a.Ease.get(-1)).to({
            regY: -1.1,
            y: 91.9
        }, 3, a.Ease.get(1)).to({
            regY: -1.2,
            y: 93.8
        }, 3).wait(3));
        this.instance_5 = new b.symbol8;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-4.1, 95.9, 1, .4471, 0, 0, 0, -.1, -.2);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regY: -1,
            scaleY: 1.092
        }, 2, a.Ease.get(1)).to({
            regY: -1.2,
            scaleY: .9719,
            y: 95.85
        }, 3, a.Ease.get(1)).to({
            regY: -1.1,
            scaleY: 1,
            y: 95.9
        }, 3, a.Ease.get(1)).wait(7))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-281.2, -132.7, 487.5, 414.7);
    (b.mc_select = function(c, d, f) {
        this.initialize(c, d, f, {
            connect: 27,
            start: 2,
            wait: 3,
            close: 14,
            end: 19
        });
        this.frame_0 = function() {
            this.stop();
            this.return_flag = 0;
            this.connect = function() {
                this.return_flag = 0;
                window.call_select_item && window.call_select_item(exportRoot.scene_m, this.select_id)
            };
            this.connect_return = function() {
                this.return_flag = 1
            }
        };
        this.frame_2 = function() {
            this.select_id = 0;
            this.dialog.view_scene.text = "\u30a8\u30d4\u30bd\u30fc\u30c9\u30b3\u30df\u30e5\u30a4\u30d9\u30f3\u30c8\u767a\u751f! [" + exportRoot.scene_m + "/" + exportRoot.select_end_id + "]"
        };
        this.frame_3 = function() {};
        this.frame_7 = function() {
            function g() {
                exportRoot.sound_mc.gotoAndStop("dialog_btn");
                this.gotoAndPlay("close");
                this.removeEventListener("click", g)
            }

            function n() {
                this.select_id = 9;
                exportRoot.sound_mc.gotoAndStop("dialog_btn");
                this.dialog.btn4.gotoAndPlay("push");
                this.gotoAndPlay("end");
                this.removeEventListener("click", n)
            }

            function m() {
                this.select_id = 8;
                this.dialog.btn3.gotoAndPlay("push");
                this.gotoAndPlay("end");
                exportRoot.sound_mc.gotoAndStop("dialog_btn");
                this.removeEventListener("click", m)
            }

            function r() {
                this.select_id = 7;
                this.dialog.btn2.gotoAndPlay("push");
                this.gotoAndPlay("end");
                exportRoot.sound_mc.gotoAndStop("dialog_btn");
                this.removeEventListener("click", r)
            }
            this.btn_close.removeAllEventListeners("click");
            this.btn_close.on("click", g, this, !0);
            this.btn_right.removeAllEventListeners("click");
            this.btn_right.on("click", n, this, !0);
            this.btn_center.removeAllEventListeners("click");
            this.btn_center.on("click", m, this, !0);
            this.btn_left.removeAllEventListeners("click");
            this.btn_left.on("click", r, this, !0)
        };
        this.frame_11 = function() {
            this.stop()
        };
        this.frame_14 = function() {
            this.btn_close.removeAllEventListeners("click");
            this.btn_right.removeAllEventListeners("click");
            this.btn_center.removeAllEventListeners("click");
            this.btn_left.removeAllEventListeners("click")
        };
        this.frame_17 = function() {
            this.stop();
            exportRoot.key_log_flag = 0;
            exportRoot.key_act_flag = 0;
            this.btn_com_back.removeAllEventListeners("click");
            this.btn_com_back.on("click", function() {
                0 == exportRoot.key_act_flag && (exportRoot.key_act_flag = 1, exportRoot.sound_mc.gotoAndStop("dialog_btn"), this.gotoAndPlay("wait"))
            }, this, !1)
        };
        this.frame_19 = function() {
            this.connect();
            exportRoot.key_log_flag = 1
        };
        this.frame_25 = function() {
            1 ==
                this.return_flag && (this.gotoAndStop(1), exportRoot.gotoAndPlay("select_result"))
        };
        this.frame_26 = function() {
            this.gotoAndPlay(this.currentFrame - 1)
        };
        this.frame_27 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(4).call(this.frame_7).wait(4).call(this.frame_11).wait(3).call(this.frame_14).wait(3).call(this.frame_17).wait(2).call(this.frame_19).wait(6).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(8));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AhtBuIAAjbIDbAAIAADbg");
        this.shape.setTransform(251.45, -28.5);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(34));
        this.btn_left = new b.btn;
        this.btn_left.name = "btn_left";
        this.btn_left.parent = this;
        this.btn_left.setTransform(308.35, 144.25, 1.7714, 1.7714, 0, 0, 0, 17.6, 17.6);
        this.btn_left.alpha = .0117;
        this.btn_center = new b.btn;
        this.btn_center.name = "btn_center";
        this.btn_center.parent = this;
        this.btn_center.setTransform(379.35, 144.25,
            1.7714, 1.7714, 0, 0, 0, 17.6, 17.6);
        this.btn_center.alpha = .0117;
        this.btn_right = new b.btn;
        this.btn_right.name = "btn_right";
        this.btn_right.parent = this;
        this.btn_right.setTransform(452.3, 144.25, 1.7714, 1.7714, 0, 0, 0, 17.6, 17.6);
        this.btn_right.alpha = .0117;
        this.btn_close = new b.btn;
        this.btn_close.name = "btn_close";
        this.btn_close.parent = this;
        this.btn_close.setTransform(485.05, 63, 1, 1, 0, 0, 0, 17.5, 17.5);
        this.btn_close.alpha = .0117;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.btn_close,
                p: {
                    x: 485.05,
                    y: 63
                }
            }, {
                t: this.btn_right,
                p: {
                    x: 452.3
                }
            }, {
                t: this.btn_center,
                p: {
                    x: 379.35
                }
            }, {
                t: this.btn_left,
                p: {
                    x: 308.35
                }
            }]
        }).to({
            state: [{
                t: this.btn_close,
                p: {
                    x: 222.5,
                    y: 89.55
                }
            }, {
                t: this.btn_right,
                p: {
                    x: 192.25
                }
            }, {
                t: this.btn_center,
                p: {
                    x: 119.3
                }
            }, {
                t: this.btn_left,
                p: {
                    x: 48.3
                }
            }]
        }, 9).to({
            state: [{
                t: this.btn_close,
                p: {
                    x: 473.5,
                    y: 63
                }
            }, {
                t: this.btn_right,
                p: {
                    x: 440.75
                }
            }, {
                t: this.btn_center,
                p: {
                    x: 367.8
                }
            }, {
                t: this.btn_left,
                p: {
                    x: 296.8
                }
            }]
        }, 3).to({
            state: []
        }, 15).wait(8));
        this.btn_com_back = new b.btn;
        this.btn_com_back.name = "btn_com_back";
        this.btn_com_back.parent = this;
        this.btn_com_back.setTransform(295.8,
            23.4, 1.8842, 1.3447, 0, 0, 0, 17.7, 17.4);
        this.btn_com_back.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn_com_back).wait(17).to({
            x: 208.6,
            y: 25.45
        }, 0).wait(2).to({
            x: 295,
            y: 23.4
        }, 0).to({
            _off: !0
        }, 8).wait(8));
        this.instance = new b.gr_returnbtn;
        this.instance.parent = this;
        this.instance.setTransform(208, 26);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(17).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(16));
        this.dialog = new b.mc_dialog_container;
        this.dialog.name = "dialog";
        this.dialog.parent =
            this;
        this.dialog.setTransform(384.95, 111, 1, 1, 0, 0, 0, 0, 5.5);
        this.timeline.addTween(a.Tween.get(this.dialog).wait(3).to({
            x: 124.95,
            y: 116,
            alpha: 0
        }, 0).to({
            y: 110,
            alpha: 1
        }, 4, a.Ease.get(1)).to({
            y: 111
        }, 2).wait(5).to({
            y: 116,
            alpha: 0
        }, 2, a.Ease.get(-1)).wait(1).to({
            x: 384.95,
            y: 111,
            alpha: 1
        }, 0).wait(2).to({
            x: 124.95
        }, 0).wait(3).to({
            alpha: 0
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 2).wait(8));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_1.setTransform(235.325, 274.475);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_2.setTransform(230.475, 274.475);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAANg");
        this.shape_3.setTransform(225.625, 274.475);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#FFFFFF").s().p("AgKA1IgKgCIgIgDIgBgHQAGADAIACIAPABQAHABAGgDQAGgDAEgFQAEgFAAgHIAAgQQgCAEgEAEIgIAEQgGACgFABQgKgBgHgEQgIgEgFgIQgEgIAAgNQAAgNAEgIQAFgJAIgEQAHgEAKgBQAIABAHADQAGADAEAGIABgLIAFAAIAABMQgBANgIAIQgJAHgPABIgKgBgAgMgsQgHAEgDAHQgEAHAAAMQAAAMAEAGQADAHAHAEQAGADAIAAQAGAAAGgDQAGgDADgFQAEgGAAgGIAAgaQgFgJgGgDQgHgEgHAAQgIAAgGADg");
        this.shape_4.setTransform(218.8, 272.65);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#FFFFFF").s().p("AAYAnIAAgzQAAgGgDgFQgDgFgFgCQgFgDgGAAQgFAAgFACQgFACgEAEQgEAEgCAGIAAA2IgHAAIAAhMIAHAAIAAAMQABgDAEgDQAEgDAGgCQAFgCAGAAQAHAAAHADQAGADAEAFQADAGABAIIAAA0g");
        this.shape_5.setTransform(210.7, 271.225);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#FFFFFF").s().p("AgCA2IAAhLIAFAAIAABLgAgDgmIAAgQIAGAAIAAAQg");
        this.shape_6.setTransform(205.05, 269.7);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#FFFFFF").s().p("AACAyQgEgCgCgEQgCgEAAgHIAAg2IgLAAIAAgFIALAAIAAgYIAGAAIAAAYIANAAIAAAFIgNAAIAAA1QAAAGAAADQACADAEABIAMAAIgDAGQgIAAgFgBg");
        this.shape_7.setTransform(201.625, 270.175);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#FFFFFF").s().p("AgNAkQgIgFgGgJQgFgJAAgNQAAgMAFgJQAGgJAIgFQAIgEAJAAQAJAAAIAEQAHACAFAHIgEAHQgEgIgGgDQgHgDgIgBQgEAAgGACQgFACgFAFQgEAEgDAGQgDAHAAAIQABAMAEAHQAFAIAHADQAHAFAGAAQAIgBAHgDQAGgDAEgHIAEAGQgFAGgIADQgHAEgJAAQgJAAgIgEg");
        this.shape_8.setTransform(195.475, 271.3);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#FFFFFF").s().p("AgQAjQgIgFgFgJQgEgJAAgMQAAgLAEgJQAFgJAIgFQAHgFAKAAQAPAAAJAKQAJAJAAASIg9AHQAAAJAFAGQAEAHAGAEQAGADAHABQAHgBAFgCQAGgCAEgEQAEgFADgFIAEAEQgFAJgIAGQgIAFgMAAQgJAAgIgFgAgNgdQgHAEgEAHQgDAIgBAKIA4gHQgBgIgDgGQgEgGgGgDQgGgDgHgBQgIAAgGAFg");
        this.shape_9.setTransform(187.525, 271.3);
        this.shape_10 = new a.Shape;
        this.shape_10.graphics.f("#FFFFFF").s().p("AAYAnIAAgzQAAgGgDgFQgDgFgFgCQgFgDgGAAQgFAAgFACQgFACgEAEQgEAEgDAGIAAA2IgGAAIAAhMIAGAAIAAAMQACgDAEgDQAEgDAGgCQAFgCAGAAQAIAAAGADQAGADAEAFQADAGAAAIIAAA0g");
        this.shape_10.setTransform(179.3, 271.225);
        this.shape_11 = new a.Shape;
        this.shape_11.graphics.f("#FFFFFF").s().p("AAYAnIAAgzQAAgGgDgFQgDgFgEgCQgGgDgGAAQgFAAgFACQgFACgEAEQgEAEgDAGIAAA2IgFAAIAAhMIAFAAIAAAMQACgDAEgDQAEgDAFgCQAGgCAFAAQAJAAAGADQAGADADAFQAEAGAAAIIAAA0g");
        this.shape_11.setTransform(171.05, 271.225);
        this.shape_12 = new a.Shape;
        this.shape_12.graphics.f("#FFFFFF").s().p("AgSAjQgIgFgEgJQgFgJAAgMQAAgLAFgJQAEgJAIgFQAIgFAKAAQALAAAIAFQAIAFAEAJQAFAJAAALQAAAMgFAJQgEAJgIAFQgIAFgLAAQgKAAgIgFgAgOgdQgGAEgEAIQgEAHgBAKQABAKAEAIQAEAIAGAEQAHAEAHABQAIAAAHgFQAHgDAEgJQADgHABgLQgBgKgDgHQgEgIgHgEQgHgFgIAAQgHAAgHAFg");
        this.shape_12.setTransform(162.675, 271.3);
        this.shape_13 = new a.Shape;
        this.shape_13.graphics.f("#FFFFFF").s().p("AgTAyQgLgHgFgNQgGgNAAgRQAAgRAFgMQAGgNALgGQAKgIANABQAOAAAJAFQAJAFAFAJIgFAGQgEgKgJgFQgIgFgLAAQgKAAgJAGQgJAHgGALQgFALAAAPQAAANAEAKQADAJAGAGQAFAGAHADQAIAEAGAAQAMAAAIgGQAJgFAFgJIAEAFQgEAJgKAGQgKAFgOAAQgNAAgKgGg");
        this.shape_13.setTransform(153.575, 269.7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }]
        }, 19).to({
            state: []
        }, 8).wait(8));
        this.instance_1 = new b.dark;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 155);
        this.instance_1.alpha = 0;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).to({
            alpha: .3984
        }, 4, a.Ease.get(1)).wait(7).to({
            alpha: 0
        }, 3, a.Ease.get(1)).wait(2).to({
            alpha: .3984
        }, 0).to({
            alpha: 0
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 5).wait(8))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, -39.5, 502.6, 349.5);
    (b.mc_heart_num = function(c, d, f) {
        this.initialize(c, d, f, {
            loop: 2
        });
        this.frame_1 = function() {
            var g = this.view_heart_num = this.heart_num = exportRoot.heart_f;
            g = g.toString();
            2 > g.length ? (this.view_point.p.n10.gotoAndStop(10),
                this.view_point.p.n1.gotoAndStop(parseInt(g)), this.view_point.p_p.n10.gotoAndStop(10), this.view_point.p_p.n1.gotoAndStop(parseInt(g))) : (this.view_point.p.n10.gotoAndStop(parseInt(g.substring(0, 1))), this.view_point.p.n1.gotoAndStop(parseInt(g.substring(1, 2))), this.view_point.p_p.n10.gotoAndStop(parseInt(g.substring(0, 1))), this.view_point.p_p.n1.gotoAndStop(parseInt(g.substring(1, 2))));
            g = exportRoot.heart_border;
            g = g.toString();
            2 > g.length ? (this.heart_border.n10.gotoAndStop(10), this.heart_border.n1.gotoAndStop(parseInt(g)),
                this.heart_border.n1.x = 14.4) : (this.heart_border.n10.gotoAndStop(parseInt(g.substring(0, 1))), this.heart_border.n1.gotoAndStop(parseInt(g.substring(1, 2))), this.heart_border.n1.x = 19.6);
            this.view_heart_num >= exportRoot.heart_border ? (this.goodend_flag = 1, this.goodend_label.gotoAndPlay("loop")) : this.goodend_flag = 0
        };
        this.frame_2 = function() {
            if (this.heart_num > this.view_heart_num) {
                this.view_heart_num++;
                this.heart.gotoAndPlay("run");
                0 == this.goodend_flag && this.view_heart_num >= exportRoot.heart_border && (this.goodend_flag =
                    1, this.goodend_label.gotoAndPlay("run"));
                var g = this.view_heart_num;
                g = g.toString();
                2 > g.length ? (this.view_point.p.n10.gotoAndStop(10), this.view_point.p.n1.gotoAndStop(parseInt(g)), this.view_point.p_p.n10.gotoAndStop(10), this.view_point.p_p.n1.gotoAndStop(parseInt(g))) : (this.view_point.p.n10.gotoAndStop(parseInt(g.substring(0, 1))), this.view_point.p.n1.gotoAndStop(parseInt(g.substring(1, 2))), this.view_point.p_p.n10.gotoAndStop(parseInt(g.substring(0, 1))), this.view_point.p_p.n1.gotoAndStop(parseInt(g.substring(1,
                    2))))
            }
            this.view_heart_num > exportRoot.heart_border && this.view_point.gotoAndStop(1)
        };
        this.frame_8 = function() {
            this.gotoAndPlay("loop")
        };
        this.timeline.addTween(a.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(6).call(this.frame_8).wait(14));
        this.view_point = new b.mc_view_heart_point;
        this.view_point.name = "view_point";
        this.view_point.parent = this;
        this.view_point.setTransform(49.35, 20.8);
        this.timeline.addTween(a.Tween.get(this.view_point).wait(22));
        this.heart_border = new b.heart_num_base;
        this.heart_border.name = "heart_border";
        this.heart_border.parent = this;
        this.heart_border.setTransform(77.9, 23.8, 1, 1, 0, 0, 0, 11.7, 11.1);
        this.timeline.addTween(a.Tween.get(this.heart_border).wait(22));
        this.heart = new b.mc_heart;
        this.heart.name = "heart";
        this.heart.parent = this;
        this.heart.setTransform(19.4, 18.7);
        this.timeline.addTween(a.Tween.get(this.heart).wait(22));
        this.goodend_label = new b.mc_goodend_label;
        this.goodend_label.name = "goodend_label";
        this.goodend_label.parent = this;
        this.goodend_label.setTransform(49.5,
            38.5);
        this.timeline.addTween(a.Tween.get(this.goodend_label).wait(22));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAVAkIgVgWIgUAWQgEACgDAAQgEAAgEgCQgCgDAAgEQAAgFACgDIAWgVIgWgVQgCgDAAgDQAAgFACgCQAEgDAEAAQADAAAEADIAUAVIAVgVQAEgDADAAQAFAAACADQADACAAAFQAAADgDADIgVAVIAVAVQADADAAAFQAAAEgDADQgCACgFAAQgDAAgEgCgAAZAgQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgZgZIAZgYQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgZAZIgYgZQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIAZAYIgZAZQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIAYgZg");
        this.shape.setTransform(34.7, 26.4);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#999999").s().p("AAZAgIgZgZIgYAZQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAZgZIgZgYQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAYAZIAZgZQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgZAYIAZAZQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
        this.shape_1.setTransform(34.7, 26.4);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(22));
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f().s("#000000").ss(1, 1, 1).p("AAWgzIgrBn");
        this.shape_2.setTransform(66.525, 23.375);
        this.timeline.addTween(a.Tween.get(this.shape_2).wait(22));
        this.instance = new b.upper_base2;
        this.instance.parent = this;
        this.instance.setTransform(0, 2, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 21).wait(1))
    }).prototype =
        e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(0, 0, 240, 320);
    (b.mc_commu_result = function(c, d, f) {
        this.initialize(c, d, f, {
            call_heart_add: 85,
            next: 97,
            "in": 1,
            wait: 8,
            normal: 9,
            normal_next: 28,
            good: 32,
            good_next: 54,
            perfect: 58,
            perfect_next: 80
        });
        this.frame_0 = function() {
            this.stop();
            this.in_flag = 0;
            this.next = function() {
                exportRoot.scene_m < exportRoot.select_end_id ? (exportRoot.scene_m++, exportRoot.scene_s = 1, exportRoot.gotoAndPlay("scene_play")) : exportRoot.gotoAndPlay("ending_movie")
            };
            this.call_heart_add = function() {
                this.mc_heart.heart_num +=
                    exportRoot.in_heart_add;
                exportRoot.in_heart_add = 0
            }
        };
        this.frame_1 = function() {
            this.in_flag = 1;
            this.play()
        };
        this.frame_8 = function() {
            this.stop()
        };
        this.frame_22 = function() {
            exportRoot.total_view_point += exportRoot.view_point;
            this.call_heart_add()
        };
        this.frame_23 = function() {
            this.btn.on("click", function() {
                this.gotoAndPlay("normal_next")
            }, this, !0);
            this.handleKeydown = function(g) {
                13 == g.keyCode && exportRoot.commu_result.gotoAndPlay("normal_next")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_27 =
            function() {
                this.stop()
            };
        this.frame_28 = function() {
            this.next();
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown", this.handleKeydown)
        };
        this.frame_31 = function() {
            this.gotoAndStop("wait")
        };
        this.frame_48 = function() {
            exportRoot.total_view_point += exportRoot.view_point;
            this.call_heart_add()
        };
        this.frame_50 = function() {
            this.btn.on("click", function() {
                this.gotoAndPlay("good_next")
            }, this, !0);
            this.handleKeydown = function(g) {
                13 == g.keyCode && exportRoot.commu_result.gotoAndPlay("good_next")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_53 = function() {
            this.stop()
        };
        this.frame_54 = function() {
            this.next();
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown", this.handleKeydown)
        };
        this.frame_57 = function() {
            this.gotoAndStop("wait")
        };
        this.frame_74 = function() {
            exportRoot.total_view_point += exportRoot.view_point;
            this.call_heart_add()
        };
        this.frame_76 = function() {
            this.btn.on("click", function() {
                this.gotoAndPlay("perfect_next")
            }, this, !0);
            this.handleKeydown = function(g) {
                13 ==
                    g.keyCode && exportRoot.commu_result.gotoAndPlay("perfect_next")
            };
            window.addEventListener("keydown", this.handleKeydown)
        };
        this.frame_79 = function() {
            this.stop()
        };
        this.frame_80 = function() {
            this.next();
            this.btn.removeAllEventListeners("click");
            window.removeEventListener("keydown", this.handleKeydown)
        };
        this.frame_83 = function() {
            this.gotoAndStop("wait")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(14).call(this.frame_22).wait(1).call(this.frame_23).wait(4).call(this.frame_27).wait(1).call(this.frame_28).wait(3).call(this.frame_31).wait(17).call(this.frame_48).wait(2).call(this.frame_50).wait(3).call(this.frame_53).wait(1).call(this.frame_54).wait(3).call(this.frame_57).wait(17).call(this.frame_74).wait(2).call(this.frame_76).wait(3).call(this.frame_79).wait(1).call(this.frame_80).wait(3).call(this.frame_83).wait(22));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.8)").s().p("Ag4A8IAAh3IByAAIAAB3g");
        this.shape.setTransform(-179.75, -177.5);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(104));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(-3.1, -42.85, 6.9465, 8.4379, 0, 0, 0, 17.1, 17.5);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(105));
        this.mc_heart = new b.mc_heart_num;
        this.mc_heart.name = "mc_heart";
        this.mc_heart.parent = this;
        this.mc_heart.setTransform(-121, -235);
        this.timeline.addTween(a.Tween.get(this.mc_heart).wait(1).to({
            y: -217
        }, 0).to({
            y: -183
        }, 4, a.Ease.get(1)).wait(1).to({
            regX: 34.3,
            regY: 33.5,
            x: -86.7,
            y: -149.95
        }, 0).wait(1).to({
            y: -150.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -121,
            y: -185
        }, 0).wait(97));
        this.instance = new b.result_normal;
        this.instance.parent = this;
        this.instance.setTransform(0, -70);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(9).to({
            _off: !1
        }, 0).wait(19).to({
            alpha: 0
        }, 3).to({
                _off: !0
            },
            1).wait(73));
        this.instance_1 = new b.result_good;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-4, 30.8, 1, 1, 0, 0, 0, -4, 100.8);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(32).to({
            _off: !1
        }, 0).wait(22).to({
            alpha: 0
        }, 3).to({
            _off: !0
        }, 1).wait(47));
        this.instance_2 = new b.result_perfect;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-4, 24, 1, 1, 0, 0, 0, -4, 94);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(58).to({
            _off: !1
        }, 0).wait(22).to({
                alpha: 0
            },
            3).to({
            _off: !0
        }, 1).wait(21))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-185.5, -233, 321.5, 337.9);
    (b.episode_commu_memory = function(c, d, f) {
        this.initialize(c, d, f, {
            first_movie: 4,
            scene_play: 13,
            scene_end: 22,
            select_wait: 30,
            select_result: 38,
            ending_movie: 49,
            last: 64
        });
        this.frame_0 = function() {
            this.condition_init = function() {
                this.RR_back = this.R_back = this.CR_back = this.C_back = this.CL_back = this.L_back = this.LL_back = this.RR_front = this.R_front = this.CR_front = this.C_front = this.CL_front = this.L_front =
                    this.LL_front = 0
            };
            this.chara_control = function() {
                for (var n = 1; n < this.MAXNUM + 1; n++) this["c" + n].visible = !1;
                for (n = 1; n <= this.position_len; n++) this._position = this["position" + n], this._num_front = this[this._position + "_front"], this._num_back = this[this._position + "_back"], 0 < this._num_front ? (this["c" + this._num_front + "_t"].visible = !1, this[this._position + "_back"] = this._num_front, this[this._position + "_front"] = 0, this["c" + this._num_front].visible = !0, this["c" + this._num_front].gotoAndStop("stay"), this["c" + this._num_front].x =
                    this[this._position + "X"]) : 0 < this._num_back && (this["c" + this._num_back].visible = !0)
            };
            this.boot_effect = function() {
                this._chara_effect = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_chara_effect"];
                if (0 < this._chara_effect) {
                    this._ef_pos = this.t_pos;
                    this.temp_id = parseInt(10 * this.scene_m + this.scene_s);
                    var n = "_effect" + this.temp_id,
                        m = new b.replace_effect1;
                    m.name = n;
                    this.charaEffect_set.addChild(m);
                    m.x = 120;
                    m.y = 120;
                    m.x = 0 != this._ef_pos ? this[this._ef_pos + "X"] + this["ch" + this.t_no + "_efposition_x"] : this.CX;
                    m.y = parseInt(this["ch" + this.t_no + "_efposition_y"]);
                    "R" == this.t_efdir ? m.gotoAndStop("R") : m.gotoAndStop("L")
                }
            };
            this.move_end = function() {
                1 == this.move_wait_flag && (this.move_wait_flag = 0, this.gotoAndStop("cptEnd"))
            };
            this.setMsg = function() {
                "" == this.t_txt ? (this.tname = this.writing_tmsg = this.before_tmsg = this.tmsg = "", 1 == this.win_open && (this.win_open = 0, this.window_1.gotoAndPlay("close"))) : (this.tname = this.t_name, 1 != this.win_open && (this.window_flag = this.win_open = 1, this.window_1.gotoAndPlay("f1")), this.window_1.cur.visible = !1, this.old_tmsg = this.tmsg, this.tmsg = this.t_txt, this.old_tmsg && (this.old_tmsg_len = parseInt(this.old_tmsg.length)), this.before_tmsg = "", this.writing_tmsg = this.tmsg);
                this.window_1.tmsg.run()
            };
            this.keyAct = function() {
                void 0 != this["s" + this.scene_m + "_" + (this.scene_s + 1) + "_txt"] ? (this.scene_s++, this.gotoAndStop("scene_play")) : this.scene_m > this.select_end_id ? this.gotoAndPlay("last") : this.gotoAndStop("select_wait")
            };
            this.keyWindow = function() {
                this.window_flag ? (this.window_flag = 0, this.key_log_flag = 1, this.window_1.gotoAndPlay("out")) :
                    (this.window_flag = 1, this.key_log_flag = 0, this.window_1.gotoAndPlay("in"))
            };
            this.jump = function() {
                console.log("jump");
                1 != this.key_flag && 1 != this.voice_flag && (this.key_flag = 1, window.location.href = this._url)
            };
            this.call_selected = function() {
                this.mc_select.connect_return()
            };
            this.keyLog = function() {
                0 == this.key_act_flag && 0 == this.key_log_flag && 1 == this.window_flag && (this.key_act_flag = this.key_log_flag = 1, this.sound_mc.gotoAndStop("log_btn"), this.text_log.gotoAndPlay("run"))
            };
            this.next = function() {
                this.gotoAndPlay("scene_play")
            };
            this.next_result = function() {
                this.scene_m < this.select_end_id ? (this.scene_m++, this.scene_s = 1, this.gotoAndPlay("scene_play")) : this.gotoAndPlay("ending_movie")
            };
            var g = window.im_cjs;
            this._url = g._url;
            this.now_scene = g.now_scene;
            this.heart_f = g.heart_f;
            this.heart_border = g.heart_border;
            this.total_point = g.total_point;
            this.item_free_name = g.item_free_name;
            this.item_free_num = g.item_free_num;
            this.item_pay_num = g.item_pay_num;
            this.select_end_id = g.select_end_id ? g.select_end_id : 5;
            this.good_end_id = g.good_end_id ? g.good_end_id :
                6;
            this.normal_end_id = g.normal_end_id ? g.normal_end_id : 7;
            this.init_chara_num = g.init_chara_num;
            this.init_chara1_no = g.init_chara1_no;
            this.init_chara1_pos = g.init_chara1_pos;
            this.init_chara1_face = g.init_chara1_face;
            this.init_chara1_active = g.init_chara1_active;
            this.init_chara2_no = g.init_chara2_no;
            this.init_chara2_pos = g.init_chara2_pos;
            this.init_chara2_face = g.init_chara2_face;
            this.init_chara2_active = g.init_chara2_active;
            this.s1_1_txt = g.s1_1_txt;
            this.s1_1_name = g.s1_1_name;
            this.s1_1_ch1_no = g.s1_1_ch1_no;
            this.s1_1_ch1_mov =
                g.s1_1_ch1_mov;
            this.s1_1_ch1_pos = g.s1_1_ch1_pos;
            this.s1_1_ch1_chara_effect = g.s1_1_ch1_chara_effect;
            this.s1_1_ch1_effect_dir = g.s1_1_ch1_effect_dir;
            this.s1_1_ch1_face = g.s1_1_ch1_face;
            this.s1_2_txt = g.s1_2_txt;
            this.s1_2_name = g.s1_2_name;
            this.s1_2_ch1_no = g.s1_2_ch1_no;
            this.s1_2_ch1_mov = g.s1_2_ch1_mov;
            this.s1_2_ch1_pos = g.s1_2_ch1_pos;
            this.s2_1_txt = g.s2_1_txt;
            this.s2_1_name = g.s2_1_name;
            this.s2_1_ch1_no = g.s2_1_ch1_no;
            this.s2_1_ch1_mov = g.s2_1_ch1_mov;
            this.s2_1_ch1_pos = g.s2_1_ch1_pos;
            Object.assign(this, g);
            this.position1 = "LL";
            this.position2 = "L";
            this.position3 = "CL";
            this.position4 = "C";
            this.position5 = "CR";
            this.position6 = "R";
            this.position7 = "RR";
            this.position_len = 7;
            this.LX = 60;
            this.RX = 180;
            this.CX = 120;
            this.LLX = 45;
            this.RRX = 195;
            this.CLX = 90;
            this.CRX = 150;
            this.cpt = 0;
            this.MAXNUM = 8;
            this.win_open = this.skip_flag = this.key_flag = 0;
            this.bg_condition = this.key_log_flag = this.key_act_flag = this.window_flag = 1;
            this.scene_m = this.now_scene;
            this.scene_s = 1;
            this.move_wait_flag = 0;
            this.window_width = 1;
            this.max_point_digit = 7;
            this.total_view_point =
                parseInt(this.total_point, 10)
        };
        this.frame_1 = function() {
            this.condition_init();
            for (var g = 1; g < this.MAXNUM + 1; g++) this["c" + g].c_col.c.gotoAndStop(g - 1), this["c" + g].c_col.c_b.gotoAndStop(g - 1), this["c" + g].c_col.gotoAndStop("dark"), this["c" + g + "_t"].c_col.c.gotoAndStop(g - 1), this["c" + g].visible = !1, this["c" + g + "_t"].visible = !1, this["ch" + g + "_efposition_x"] = "" != this["cf" + g].ef_position.x ? this["cf" + g].ef_position.x : 0, this["ch" + g + "_efposition_y"] = "" != this["cf" + g].ef_position.y ? this["cf" + g].ef_position.y + 310 : 100;
            for (var n =
                    g = 1; void 0 != this["s" + g + "_1_name"];) {
                for (; void 0 != this["s" + g + "_" + n + "_name"];) {
                    if (void 0 != this["s" + g + "_" + n + "_name"]) var m = this["s" + g + "_" + n + "_name"].length;
                    6 < m ? (this.window_1.win_base.gotoAndStop(2), this.window_width = 3) : 3 < m && 3 > this.window_width && (this.window_1.win_base.gotoAndStop(1), this.window_width = 2);
                    n++
                }
                n = 1;
                g++
            }
            1 == this.now_scene ? this.gotoAndPlay("first_movie") : (this.commu_result.gotoAndPlay("in"), this.play())
        };
        this.frame_2 = function() {
            if (0 < this.init_chara_num)
                for (var g = 1; g <= this.init_chara_num; g++) this.t_no =
                    this["init_chara" + g + "_no"], this.t_pos = this["init_chara" + g + "_pos"], this.t_fce = this["init_chara" + g + "_face"], this.t_act = this["init_chara" + g + "_active"], this.t_posX = this[this.t_pos + "X"], 1 == this.t_act ? (this["c" + this.t_no + "_t"].visible = !0, this["c" + this.t_no + "_t"].gotoAndPlay("stay"), "" != this.t_posX && (this["c" + this.t_no + "_t"].x = this[this.t_pos + "X"]), this[this.t_pos + "_front"] = this.t_no) : (this["c" + this.t_no].visible = !0, this["c" + this.t_no].gotoAndPlay("stay"), "" != this.t_posX && (this["c" + this.t_no].x = this[this.t_pos +
                        "X"])), this[this.t_pos + "_back"] = this.t_no, void 0 != this.t_fce && (this["c" + this.t_no + "_t"].c_col.c["cf" + this.t_no].c.gotoAndStop(this.t_fce - 1), this["c" + this.t_no].c_col.c["cf" + this.t_no].c.gotoAndStop(this.t_fce - 1));
            this.gotoAndPlay("scene_play")
        };
        this.frame_4 = function() {
            this.first_commu.gotoAndPlay("start")
        };
        this.frame_12 = function() {
            this.stop()
        };
        this.frame_13 = function() {
            this.sceneSkip = this.btn.on("click", function() {
                this.window_1.tmsg.skip_run();
                this.gotoAndPlay("scene_end")
            }, this, !0);
            window.removeEventListener("keydown",
                this.handleKeydown);
            this.handleKeydown = function(n) {
                13 == n.keyCode && (exportRoot.window_1.tmsg.skip_run(), exportRoot.gotoAndPlay("scene_end"))
            };
            window.addEventListener("keydown", this.handleKeydown);
            this.chara_control();
            this.t_txt = this["s" + this.scene_m + "_" + this.scene_s + "_txt"];
            this.t_name = this["s" + this.scene_m + "_" + this.scene_s + "_name"];
            for (this.count_ch = 1; void 0 != this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_no"];) {
                this.t_no = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_no"];
                this.t_mov = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_mov"];
                this.t_pos = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_pos"];
                this.t_chef = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_chara_effect"];
                this.t_efdir = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_effect_dir"];
                this.t_fce = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_face"];
                this.t_posX = this[this.t_pos + "X"];
                0 < this[this.t_pos + "_back"] && this[this.t_pos + "_back"] != this.t_no &&
                    (this._t_no = this[this.t_pos + "_back"], this["c" + this._t_no].visible = !1, this[this.t_pos + "_back"] = 0);
                for (var g = 1; g <= this.position_len; g++) this._position = this["position" + g], this._num_back = this[this._position + "_back"], this.t_no == this._num_back && (this[this._position + "_back"] = 0);
                this["c" + this.t_no].visible = !1;
                this[this.t_pos + "_back"] = 0;
                this["c" + this.t_no + "_t"].visible = !0;
                "" != this.t_mov && this["c" + this.t_no + "_t"].gotoAndPlay(this.t_mov);
                "" != this.t_posX && (this["c" + this.t_no + "_t"].x = this[this.t_pos + "X"]);
                "out" ==
                this.t_mov.substring(0, 2) ? this[this.t_pos + "_front"] = 0 : this[this.t_pos + "_front"] = this.t_no;
                "" != this.t_fce && (this["c" + this.t_no + "_t"].c_col.c["cf" + this.t_no].c.gotoAndStop(this.t_fce - 1), this["c" + this.t_no].c_col.c["cf" + this.t_no].c.gotoAndStop(this.t_fce - 1));
                this.boot_effect();
                this.count_ch++
            }
            this.setMsg();
            this.key_act_flag = 1;
            this.key_log_flag = 0;
            this.stop()
        };
        this.frame_22 = function() {
            this.btn_log.removeAllEventListeners("click");
            this.btn_log.on("click", function() {
                0 == this.key_act_flag && (this.window_flag ?
                    this.keyLog() : (this.key_log_flag = 0, this.window_flag = 1, this.window_1.gotoAndPlay("in")))
            }, this, !1);
            this.btn_window.removeAllEventListeners("click");
            this.btn_window.on("click", function() {
                0 == this.key_act_flag && this.keyWindow()
            }, this, !1);
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                0 == this.key_act_flag && (this.window_flag ? (this.key_act_flag = this.key_log_flag = 1, this.keyAct()) : (this.window_flag = 1, this.key_log_flag = 0, this.window_1.gotoAndPlay("in")))
            }, this, !1);
            window.removeEventListener("keydown",
                this.handleKeydown);
            this.handleKeydown = function(g) {
                13 == g.keyCode && 0 == exportRoot.key_act_flag && (exportRoot.window_flag ? (exportRoot.key_log_flag = 1, exportRoot.key_act_flag = 1, exportRoot.keyAct()) : (exportRoot.window_flag = 1, exportRoot.key_log_flag = 0, exportRoot.window_1.gotoAndPlay("in")))
            };
            window.addEventListener("keydown", this.handleKeydown);
            void 0 == this["s" + this.scene_m + "_" + (this.scene_s + 1) + "_txt"] ? this.scene_m > this.select_end_id ? this.gotoAndPlay("last") : this.gotoAndStop("select_wait") : (1 == this.win_open &&
                (this.window_1.cur.visible = !0), this.window_1.icon_sp.visible = !1, this.key_log_flag = this.key_act_flag = 0, this.stop())
        };
        this.frame_30 = function() {
            this.btn_log.removeAllEventListeners("click");
            this.btn_log.on("click", function() {
                0 == this.key_act_flag && (this.window_flag ? this.keyLog() : (this.window_flag = 1, this.key_log_flag = 0, this.window_1.gotoAndPlay("in")))
            }, this, !1);
            this.btn_window.removeAllEventListeners("click");
            this.btn_window.on("click", function() {
                0 == this.key_act_flag && this.keyWindow()
            }, this, !1);
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                0 != this.key_act_flag || this.window_flag || (this.window_flag = 1, this.key_log_flag = 0, this.window_1.gotoAndPlay("in"))
            }, this, !1);
            window.removeEventListener("keydown", this.handleKeydown);
            this.mc_select.gotoAndPlay("start");
            this.key_act_flag = 1;
            this.stop()
        };
        this.frame_38 = function() {
            this.view_point = this.in_get_point;
            void 0 != this.view_point && (this.pDef = this.view_point.toString().length);
            this.pnum = this.pDef;
            switch (this.in_comm_result) {
                case 0:
                    this.sound_mc.gotoAndStop("normal");
                    this.commu_result.gotoAndPlay("normal");
                    break;
                case 1:
                    this.sound_mc.gotoAndStop("good");
                    this.commu_result.gotoAndPlay("good");
                    break;
                case 2:
                    this.sound_mc.gotoAndStop("perfect"), this.commu_result.gotoAndPlay("perfect")
            }
            this.window_1.gotoAndPlay("close");
            this.win_open = 0
        };
        this.frame_47 = function() {
            this.stop()
        };
        this.frame_49 = function() {
            1 == this.ending_route ? (this.scene_m = this.good_end_id, this.scene_s = 1, this.ending_commu.gotoAndPlay("goodend")) : (this.scene_m = this.normal_end_id, this.scene_s = 1, this.ending_commu.gotoAndPlay("normalend"))
        };
        this.frame_63 = function() {
            this.stop()
        };
        this.frame_64 = function() {
            this.window_1.log.visible = !1;
            this.btn.removeAllEventListeners("click")
        };
        this.frame_72 = function() {
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.jump()
            }, this, !0);
            this.stop();
            window.removeEventListener("keydown", this.handleKeydown);
            this.handleKeydown = function(g) {
                13 == g.keyCode && exportRoot.jump()
            };
            window.addEventListener("keydown", this.handleKeydown);
            1 == exportRoot.win_open && (exportRoot.window_1.cur.visible = !0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2).call(this.frame_4).wait(8).call(this.frame_12).wait(1).call(this.frame_13).wait(9).call(this.frame_22).wait(8).call(this.frame_30).wait(8).call(this.frame_38).wait(9).call(this.frame_47).wait(2).call(this.frame_49).wait(14).call(this.frame_63).wait(1).call(this.frame_64).wait(8).call(this.frame_72).wait(1));
        this.sound_mc = new b.sound_mc;
        this.sound_mc.name = "sound_mc";
        this.sound_mc.parent =
            this;
        this.sound_mc.setTransform(211, -16, 1, 1, 0, 0, 0, 7, 7);
        this.timeline.addTween(a.Tween.get(this.sound_mc).wait(73));
        this.instance = new b.shield;
        this.instance.parent = this;
        this.instance.setTransform(120, 140);
        this.timeline.addTween(a.Tween.get(this.instance).wait(73));
        this.text_log = new b.mc_text_log;
        this.text_log.name = "text_log";
        this.text_log.parent = this;
        this.text_log.setTransform(120, 138.5);
        this.timeline.addTween(a.Tween.get(this.text_log).wait(73));
        this.mc_select = new b.mc_select;
        this.mc_select.name =
            "mc_select";
        this.mc_select.parent = this;
        this.mc_select.setTransform(11, 11, 1, 1, 0, 0, 0, 11, 11);
        this.timeline.addTween(a.Tween.get(this.mc_select).wait(73));
        this.ending_commu = new b.mc_ending_commu;
        this.ending_commu.name = "ending_commu";
        this.ending_commu.parent = this;
        this.timeline.addTween(a.Tween.get(this.ending_commu).to({
            _off: !0
        }, 64).wait(9));
        this.commu_result = new b.mc_commu_result;
        this.commu_result.name = "commu_result";
        this.commu_result.parent = this;
        this.commu_result.setTransform(121, 185);
        this.timeline.addTween(a.Tween.get(this.commu_result).wait(73));
        this.first_commu = new b._txtSet1;
        this.first_commu.name = "first_commu";
        this.first_commu.parent = this;
        this.first_commu.setTransform(120, 110);
        this.timeline.addTween(a.Tween.get(this.first_commu).wait(73));
        this.instance_1 = new b.fx_fade_black;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121, 160, 1, 1, 0, 0, 0, 121, 160);
        this.instance_1.alpha = 0;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(64).to({
            _off: !1
        }, 0).to({
            alpha: .1992
        }, 8).wait(1));
        this.window_1 = new b.win_mc;
        this.window_1.name =
            "window_1";
        this.window_1.parent = this;
        this.window_1.setTransform(2.75, 185.05);
        this.timeline.addTween(a.Tween.get(this.window_1).wait(73));
        this.charaEffect_set = new b.charaEffect_set;
        this.charaEffect_set.name = "charaEffect_set";
        this.charaEffect_set.parent = this;
        this.timeline.addTween(a.Tween.get(this.charaEffect_set).wait(73));
        this.c8_t = new b.c_mc;
        this.c8_t.name = "c8_t";
        this.c8_t.parent = this;
        this.c8_t.setTransform(-840.75, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c7_t = new b.c_mc;
        this.c7_t.name = "c7_t";
        this.c7_t.parent =
            this;
        this.c7_t.setTransform(-758.85, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c6_t = new b.c_mc;
        this.c6_t.name = "c6_t";
        this.c6_t.parent = this;
        this.c6_t.setTransform(-676.9, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c5_t = new b.c_mc;
        this.c5_t.name = "c5_t";
        this.c5_t.parent = this;
        this.c5_t.setTransform(-595, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c4_t = new b.c_mc;
        this.c4_t.name = "c4_t";
        this.c4_t.parent = this;
        this.c4_t.setTransform(-513.1, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c3_t = new b.c_mc;
        this.c3_t.name = "c3_t";
        this.c3_t.parent = this;
        this.c3_t.setTransform(-430.55,
            59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c2_t = new b.c_mc;
        this.c2_t.name = "c2_t";
        this.c2_t.parent = this;
        this.c2_t.setTransform(-348.65, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c1_t = new b.c_mc;
        this.c1_t.name = "c1_t";
        this.c1_t.parent = this;
        this.c1_t.setTransform(-266.75, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.c1_t
            }, {
                t: this.c2_t
            }, {
                t: this.c3_t
            }, {
                t: this.c4_t
            }, {
                t: this.c5_t
            }, {
                t: this.c6_t
            }, {
                t: this.c7_t
            }, {
                t: this.c8_t
            }]
        }).wait(73));
        this.c8 = new b.c_mc;
        this.c8.name = "c8";
        this.c8.parent = this;
        this.c8.setTransform(-840.75,
            59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c7 = new b.c_mc;
        this.c7.name = "c7";
        this.c7.parent = this;
        this.c7.setTransform(-758.85, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c6 = new b.c_mc;
        this.c6.name = "c6";
        this.c6.parent = this;
        this.c6.setTransform(-676.9, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c5 = new b.c_mc;
        this.c5.name = "c5";
        this.c5.parent = this;
        this.c5.setTransform(-595, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c4 = new b.c_mc;
        this.c4.name = "c4";
        this.c4.parent = this;
        this.c4.setTransform(-513.1, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c3 = new b.c_mc;
        this.c3.name = "c3";
        this.c3.parent = this;
        this.c3.setTransform(-430.55, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c2 = new b.c_mc;
        this.c2.name = "c2";
        this.c2.parent = this;
        this.c2.setTransform(-348.65, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c1 = new b.c_mc;
        this.c1.name = "c1";
        this.c1.parent = this;
        this.c1.setTransform(-266.75, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.c1
            }, {
                t: this.c2
            }, {
                t: this.c3
            }, {
                t: this.c4
            }, {
                t: this.c5
            }, {
                t: this.c6
            }, {
                t: this.c7
            }, {
                t: this.c8
            }]
        }).wait(73));
        this.bg = new b.bg;
        this.bg.name = "bg";
        this.bg.parent =
            this;
        this.bg.setTransform(3, -27, .5, .5);
        this.timeline.addTween(a.Tween.get(this.bg).wait(73));
        this.btn_log = new b.btn;
        this.btn_log.name = "btn_log";
        this.btn_log.parent = this;
        this.btn_log.setTransform(-132.3, 189.5, 1.3143, .8857, 0, 0, 0, 17.6, 17.5);
        this.btn_log.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn_log).wait(22).to({
            x: 189.65
        }, 0).wait(1).to({
            x: -132.3
        }, 0).wait(7).to({
            x: 189.65
        }, 0).wait(1).to({
            x: -132.3
        }, 0).wait(42));
        this.btn_window = new b.btn;
        this.btn_window.name = "btn_window";
        this.btn_window.parent =
            this;
        this.btn_window.setTransform(-105.05, 189.5, .7785, .8857, 0, 0, 0, 17.6, 17.5);
        this.btn_window.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn_window).wait(22).to({
            x: 226.5,
            y: 189.55
        }, 0).wait(1).to({
            x: -105.05,
            y: 189.5
        }, 0).wait(7).to({
            x: 226.5,
            y: 189.55
        }, 0).wait(1).to({
            x: -105.05,
            y: 189.5
        }, 0).wait(42));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(-218.3, 135.65, 7.329, 8.4595, 0, 0, 0, 17.7, 17.1);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(13).to({
            x: 119.95,
            y: 135.5
        }, 0).wait(1).to({
            x: -218.3,
            y: 135.65
        }, 0).wait(8).to({
            x: 119.95,
            y: 135.5
        }, 0).wait(1).to({
            x: -218.3,
            y: 135.65
        }, 0).wait(7).to({
            x: 119.95,
            y: 135.5
        }, 0).wait(1).to({
            x: -218.3,
            y: 135.65
        }, 0).wait(41).to({
            x: 119.95,
            y: 135.5
        }, 0).wait(1));
        this.effect8 = new b.replace_effect8;
        this.effect8.name = "effect8";
        this.effect8.parent = this;
        this.effect8.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect8).to({
            _off: !0
        }, 1).wait(72));
        this.effect7 = new b.replace_effect7;
        this.effect7.name = "effect7";
        this.effect7.parent =
            this;
        this.effect7.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect7).to({
            _off: !0
        }, 1).wait(72));
        this.effect6 = new b.replace_effect6;
        this.effect6.name = "effect6";
        this.effect6.parent = this;
        this.effect6.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect6).to({
            _off: !0
        }, 1).wait(72));
        this.effect5 = new b.replace_effect5;
        this.effect5.name = "effect5";
        this.effect5.parent = this;
        this.effect5.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect5).to({
                _off: !0
            },
            1).wait(72));
        this.effect4 = new b.replace_effect4;
        this.effect4.name = "effect4";
        this.effect4.parent = this;
        this.effect4.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect4).to({
            _off: !0
        }, 1).wait(72));
        this.effect3 = new b.replace_effect3;
        this.effect3.name = "effect3";
        this.effect3.parent = this;
        this.effect3.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect3).to({
            _off: !0
        }, 1).wait(72));
        this.effect2 = new b.replace_effect2;
        this.effect2.name = "effect2";
        this.effect2.parent = this;
        this.effect2.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect2).to({
            _off: !0
        }, 1).wait(72));
        this.effect1 = new b.replace_effect1;
        this.effect1.name = "effect1";
        this.effect1.parent = this;
        this.effect1.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect1).to({
            _off: !0
        }, 1).wait(72));
        this.cf8 = new b.chara_replace8;
        this.cf8.name = "cf8";
        this.cf8.parent = this;
        this.cf8.setTransform(679, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf8).to({
            _off: !0
        }, 1).wait(72));
        this.cf7 = new b.chara_replace7;
        this.cf7.name = "cf7";
        this.cf7.parent = this;
        this.cf7.setTransform(531, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf7).to({
            _off: !0
        }, 1).wait(72));
        this.cf6 = new b.chara_replace6;
        this.cf6.name = "cf6";
        this.cf6.parent = this;
        this.cf6.setTransform(334, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf6).to({
            _off: !0
        }, 1).wait(72));
        this.cf5 = new b.chara_replace5;
        this.cf5.name = "cf5";
        this.cf5.parent = this;
        this.cf5.setTransform(101, -550.25, 1, 1, 0, 0,
            0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf5).to({
            _off: !0
        }, 1).wait(72));
        this.cf4 = new b.chara_replace4;
        this.cf4.name = "cf4";
        this.cf4.parent = this;
        this.cf4.setTransform(-114.95, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf4).to({
            _off: !0
        }, 1).wait(72));
        this.cf3 = new b.chara_replace3;
        this.cf3.name = "cf3";
        this.cf3.parent = this;
        this.cf3.setTransform(-345.95, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf3).to({
            _off: !0
        }, 1).wait(72));
        this.cf2 = new b.chara_replace2;
        this.cf2.name = "cf2";
        this.cf2.parent = this;
        this.cf2.setTransform(-548.95, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf2).to({
            _off: !0
        }, 1).wait(72));
        this.cf1 = new b.chara_replace1;
        this.cf1.name = "cf1";
        this.cf1.parent = this;
        this.cf1.setTransform(-750.95, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf1).to({
            _off: !0
        }, 1).wait(72));
        this.instance_2 = new b.replace_btn4_off;
        this.instance_2.parent = this;
        this.instance_2.setTransform(253.35, 550.35);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
                _off: !0
            },
            1).wait(72));
        this.instance_3 = new b.replace_btn4_on;
        this.instance_3.parent = this;
        this.instance_3.setTransform(253.35, 489.85);
        this.timeline.addTween(a.Tween.get(this.instance_3).to({
            _off: !0
        }, 1).wait(72));
        this.instance_4 = new b.replace_btn3_off;
        this.instance_4.parent = this;
        this.instance_4.setTransform(253.85, 429.5);
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            _off: !0
        }, 1).wait(72));
        this.instance_5 = new b.replace_btn3_on;
        this.instance_5.parent = this;
        this.instance_5.setTransform(183.85, 549.5);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
                _off: !0
            },
            1).wait(72));
        this.instance_6 = new b.replace_btn2_off;
        this.instance_6.parent = this;
        this.instance_6.setTransform(183.85, 488.35);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            _off: !0
        }, 1).wait(72));
        this.instance_7 = new b.replace_btn2_on;
        this.instance_7.parent = this;
        this.instance_7.setTransform(184.35, 428.85);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            _off: !0
        }, 1).wait(72));
        this.instance_8 = new b.replace_btn1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(223.45, 377);
        this.timeline.addTween(a.Tween.get(this.instance_8).to({
                _off: !0
            },
            1).wait(72));
        this.instance_9 = new b.bg_;
        this.instance_9.parent = this;
        this.instance_9.setTransform(631.85, -155.45, .3915, .3915, 0, 0, 0, 240, 266.9);
        this.timeline.addTween(a.Tween.get(this.instance_9).to({
            _off: !0
        }, 1).wait(72))
    }).prototype = e = new a.MovieClip;
    e.nominalBounds = new a.Rectangle(-932.2, -622.7, 1819.7, 1282.7);
    b.properties = {
        id: "episode_commu_memory",
        width: 240,
        height: 280,
        fps: 12,
        color: "#666666",
        opacity: 1,
        manifest: [{
                src: "images/btn_good.png",
                id: "episode_commu_memory_btn_good"
            }, {
                src: "images/btn_normal.png",
                id: "episode_commu_memory_btn_normal"
            }, {
                src: "images/btn_perfect.png",
                id: "episode_commu_memory_btn_perfect"
            }, {
                src: "images/excellent.png",
                id: "episode_commu_memory_excellent"
            }, {
                src: "images/excellent_text.png",
                id: "episode_commu_memory_excellent_text"
            }, {
                src: "images/excellent_text_b.png",
                id: "episode_commu_memory_excellent_text_b"
            }, {
                src: "images/excellent_text_w.png",
                id: "episode_commu_memory_excellent_text_w"
            }, {
                src: "images/gauge_bar.png",
                id: "episode_commu_memory_gauge_bar"
            }, {
                src: "images/heart_white.png",
                id: "episode_commu_memory_heart_white"
            },
            {
                src: "images/popup_base.png",
                id: "episode_commu_memory_popup_base"
            }, {
                src: "images/popup_close.png",
                id: "episode_commu_memory_popup_close"
            }, {
                src: "images/produce_gauge.png",
                id: "episode_commu_memory_produce_gauge"
            }, {
                src: "images/replace_bg.jpg",
                id: "episode_commu_memory_replace_bg"
            }, {
                src: "images/replace_btn_commu.png",
                id: "episode_commu_memory_replace_btn_commu"
            }, {
                src: "images/replace_btn_good.png",
                id: "episode_commu_memory_replace_btn_good"
            }, {
                src: "images/replace_btn_good_gray.png",
                id: "episode_commu_memory_replace_btn_good_gray"
            },
            {
                src: "images/replace_btn_perfect.png",
                id: "episode_commu_memory_replace_btn_perfect"
            }, {
                src: "images/replace_btn_perfect_gray.png",
                id: "episode_commu_memory_replace_btn_perfect_gray"
            }, {
                src: "images/replace_btn_up.png",
                id: "episode_commu_memory_replace_btn_up"
            }, {
                src: "images/replace_btn_up_gray.png",
                id: "episode_commu_memory_replace_btn_up_gray"
            }, {
                src: "images/replace_character1_1.png",
                id: "episode_commu_memory_replace_character1_1"
            }, {
                src: "images/replace_character1_2.png",
                id: "episode_commu_memory_replace_character1_2"
            },
            {
                src: "images/replace_character1_3.png",
                id: "episode_commu_memory_replace_character1_3"
            }, {
                src: "images/replace_character1_4.png",
                id: "episode_commu_memory_replace_character1_4"
            }, {
                src: "images/replace_character1_5.png",
                id: "episode_commu_memory_replace_character1_5"
            }, {
                src: "images/replace_character1_6.png",
                id: "episode_commu_memory_replace_character1_6"
            }, {
                src: "images/replace_character1_b.png",
                id: "episode_commu_memory_replace_character1_b"
            }, {
                src: "images/replace_character2_1.png",
                id: "episode_commu_memory_replace_character2_1"
            },
            {
                src: "images/replace_character2_2.png",
                id: "episode_commu_memory_replace_character2_2"
            }, {
                src: "images/replace_character2_3.png",
                id: "episode_commu_memory_replace_character2_3"
            }, {
                src: "images/replace_character2_4.png",
                id: "episode_commu_memory_replace_character2_4"
            }, {
                src: "images/replace_character2_5.png",
                id: "episode_commu_memory_replace_character2_5"
            }, {
                src: "images/replace_character2_6.png",
                id: "episode_commu_memory_replace_character2_6"
            }, {
                src: "images/replace_character2_b.png",
                id: "episode_commu_memory_replace_character2_b"
            },
            {
                src: "images/replace_character3_1.png",
                id: "episode_commu_memory_replace_character3_1"
            }, {
                src: "images/replace_character3_2.png",
                id: "episode_commu_memory_replace_character3_2"
            }, {
                src: "images/replace_character3_3.png",
                id: "episode_commu_memory_replace_character3_3"
            }, {
                src: "images/replace_character3_4.png",
                id: "episode_commu_memory_replace_character3_4"
            }, {
                src: "images/replace_character3_5.png",
                id: "episode_commu_memory_replace_character3_5"
            }, {
                src: "images/replace_character3_6.png",
                id: "episode_commu_memory_replace_character3_6"
            },
            {
                src: "images/replace_character3_b.png",
                id: "episode_commu_memory_replace_character3_b"
            }, {
                src: "images/replace_character4_1.png",
                id: "episode_commu_memory_replace_character4_1"
            }, {
                src: "images/replace_character4_2.png",
                id: "episode_commu_memory_replace_character4_2"
            }, {
                src: "images/replace_character4_3.png",
                id: "episode_commu_memory_replace_character4_3"
            }, {
                src: "images/replace_character4_4.png",
                id: "episode_commu_memory_replace_character4_4"
            }, {
                src: "images/replace_character4_5.png",
                id: "episode_commu_memory_replace_character4_5"
            },
            {
                src: "images/replace_character4_6.png",
                id: "episode_commu_memory_replace_character4_6"
            }, {
                src: "images/replace_character4_b.png",
                id: "episode_commu_memory_replace_character4_b"
            }, {
                src: "images/replace_character5_1.png",
                id: "episode_commu_memory_replace_character5_1"
            }, {
                src: "images/replace_character5_2.png",
                id: "episode_commu_memory_replace_character5_2"
            }, {
                src: "images/replace_character5_3.png",
                id: "episode_commu_memory_replace_character5_3"
            }, {
                src: "images/replace_character5_4.png",
                id: "episode_commu_memory_replace_character5_4"
            },
            {
                src: "images/replace_character5_5.png",
                id: "episode_commu_memory_replace_character5_5"
            }, {
                src: "images/replace_character5_6.png",
                id: "episode_commu_memory_replace_character5_6"
            }, {
                src: "images/replace_character5_b.png",
                id: "episode_commu_memory_replace_character5_b"
            }, {
                src: "images/replace_character6_1.png",
                id: "episode_commu_memory_replace_character6_1"
            }, {
                src: "images/replace_character6_2.png",
                id: "episode_commu_memory_replace_character6_2"
            }, {
                src: "images/replace_character6_3.png",
                id: "episode_commu_memory_replace_character6_3"
            },
            {
                src: "images/replace_character6_4.png",
                id: "episode_commu_memory_replace_character6_4"
            }, {
                src: "images/replace_character6_5.png",
                id: "episode_commu_memory_replace_character6_5"
            }, {
                src: "images/replace_character6_6.png",
                id: "episode_commu_memory_replace_character6_6"
            }, {
                src: "images/replace_character6_b.png",
                id: "episode_commu_memory_replace_character6_b"
            }, {
                src: "images/replace_character7_1.png",
                id: "episode_commu_memory_replace_character7_1"
            }, {
                src: "images/replace_character7_2.png",
                id: "episode_commu_memory_replace_character7_2"
            },
            {
                src: "images/replace_character7_3.png",
                id: "episode_commu_memory_replace_character7_3"
            }, {
                src: "images/replace_character7_4.png",
                id: "episode_commu_memory_replace_character7_4"
            }, {
                src: "images/replace_character7_5.png",
                id: "episode_commu_memory_replace_character7_5"
            }, {
                src: "images/replace_character7_6.png",
                id: "episode_commu_memory_replace_character7_6"
            }, {
                src: "images/replace_character7_b.png",
                id: "episode_commu_memory_replace_character7_b"
            }, {
                src: "images/replace_character8_1.png",
                id: "episode_commu_memory_replace_character8_1"
            },
            {
                src: "images/replace_character8_2.png",
                id: "episode_commu_memory_replace_character8_2"
            }, {
                src: "images/replace_character8_3.png",
                id: "episode_commu_memory_replace_character8_3"
            }, {
                src: "images/replace_character8_4.png",
                id: "episode_commu_memory_replace_character8_4"
            }, {
                src: "images/replace_character8_5.png",
                id: "episode_commu_memory_replace_character8_5"
            }, {
                src: "images/replace_character8_6.png",
                id: "episode_commu_memory_replace_character8_6"
            }, {
                src: "images/replace_character8_b.png",
                id: "episode_commu_memory_replace_character8_b"
            },
            {
                src: "images/sp_c_event.png",
                id: "episode_commu_memory_sp_c_event"
            }, {
                src: "images/sp_ki.png",
                id: "episode_commu_memory_sp_ki"
            }, {
                src: "images/sp_textRes1.png",
                id: "episode_commu_memory_sp_textRes1"
            }, {
                src: "images/sp_textRes2.png",
                id: "episode_commu_memory_sp_textRes2"
            }, {
                src: "images/sp_textRes3.png",
                id: "episode_commu_memory_sp_textRes3"
            }, {
                src: "images/sp_txt_appear.png",
                id: "episode_commu_memory_sp_txt_appear"
            }, {
                src: "images/sp_txt_commu.png",
                id: "episode_commu_memory_sp_txt_commu"
            }, {
                src: "images/sp_txt_episode.png",
                id: "episode_commu_memory_sp_txt_episode"
            }, {
                src: "images/star.png",
                id: "episode_commu_memory_star"
            }, {
                src: "images/star_dark.png",
                id: "episode_commu_memory_star_dark"
            }, {
                src: "images/star_img.png",
                id: "episode_commu_memory_star_img"
            }, {
                src: "images/star_light.png",
                id: "episode_commu_memory_star_light"
            }, {
                src: "images/star_line.png",
                id: "episode_commu_memory_star_line"
            }, {
                src: "images/tie_sp.png",
                id: "episode_commu_memory_tie_sp"
            }, {
                src: "images/upper_base2.png",
                id: "episode_commu_memory_upper_base2"
            }
        ],
        preloads: []
    };
    (b.Stage =
        function(c) {
            createjs.Stage.call(this, c)
        }).prototype = e = new createjs.Stage;
    e.setAutoPlay = function(c) {
        this.tickEnabled = c
    };
    e.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    };
    e.stop = function(c) {
        c && this.seek(c);
        this.tickEnabled = !1
    };
    e.seek = function(c) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(b.properties.fps * c / 1E3)
    };
    e.getDuration = function() {
        return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
    };
    e.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame /
            b.properties.fps * 1E3
    };
    l.bootcompsLoaded = l.bootcompsLoaded || [];
    l.bootstrapListeners || (l.bootstrapListeners = []);
    l.bootstrapCallback = function(c) {
        l.bootstrapListeners.push(c);
        if (0 < l.bootcompsLoaded.length)
            for (var d = 0; d < l.bootcompsLoaded.length; ++d) c(l.bootcompsLoaded[d])
    };
    l.compositions = l.compositions || {};
    l.compositions.episode_commu_memory = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return A
        },
        getImages: function() {
            return k
        }
    };
    l.compositionLoaded =
        function(c) {
            l.bootcompsLoaded.push(c);
            for (var d = 0; d < l.bootstrapListeners.length; d++) l.bootstrapListeners[d](c)
        };
    l.getComposition = function(c) {
        return l.compositions[c]
    };
    l.makeResponsive = function(c, d, f, g, n) {
        function m() {
            var t = b.properties.width,
                u = b.properties.height,
                v = window.innerWidth,
                w = window.innerHeight,
                x = window.devicePixelRatio || 1,
                y = v / t,
                z = w / u,
                q = 1;
            if (c)
                if ("width" == d && r == v || "height" == d && B == w) q = C;
                else if (f) 1 == g ? q = Math.min(y, z) : 2 == g && (q = Math.max(y, z));
            else if (v < t || w < u) q = Math.min(y, z);
            n[0].width = t * x *
                q;
            n[0].height = u * x * q;
            n.forEach(function(D) {
                D.style.width = t * q + "px";
                D.style.height = u * q + "px"
            });
            stage.scaleX = x * q;
            stage.scaleY = x * q;
            r = v;
            B = w;
            C = q;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var r, B, C = 1;
        window.addEventListener("resize", m);
        m()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;