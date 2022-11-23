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
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, l, m) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[l] = m.value;
    return a
};
$jscomp.getGlobal = function(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var l = 0; l < a.length; ++l) {
        var m = a[l];
        if (m && m.Math == Math) return m
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
    var m = $jscomp.propertyToPolyfillSymbol[l];
    if (null == m) return a[l];
    m = a[m];
    return void 0 !== m ? m : a[l]
};
$jscomp.polyfill = function(a, l, m, h) {
    l && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, l, m, h) : $jscomp.polyfillUnisolated(a, l, m, h))
};
$jscomp.polyfillUnisolated = function(a, l, m, h) {
    m = $jscomp.global;
    a = a.split(".");
    for (h = 0; h < a.length - 1; h++) {
        var c = a[h];
        if (!(c in m)) return;
        m = m[c]
    }
    a = a[a.length - 1];
    h = m[a];
    l = l(h);
    l != h && null != l && $jscomp.defineProperty(m, a, {
        configurable: !0,
        writable: !0,
        value: l
    })
};
$jscomp.polyfillIsolated = function(a, l, m, h) {
    var c = a.split(".");
    a = 1 === c.length;
    h = c[0];
    h = !a && h in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var b = 0; b < c.length - 1; b++) {
        var q = c[b];
        if (!(q in h)) return;
        h = h[q]
    }
    c = c[c.length - 1];
    m = $jscomp.IS_SYMBOL_NATIVE && "es6" === m ? h[c] : null;
    l = l(m);
    null != l && (a ? $jscomp.defineProperty($jscomp.polyfills, c, {
        configurable: !0,
        writable: !0,
        value: l
    }) : l !== m && ($jscomp.propertyToPolyfillSymbol[c] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(c) : $jscomp.POLYFILL_PREFIX + c, c =
        $jscomp.propertyToPolyfillSymbol[c], $jscomp.defineProperty(h, c, {
            configurable: !0,
            writable: !0,
            value: l
        })))
};
$jscomp.assign = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign ? Object.assign : function(a, l) {
    for (var m = 1; m < arguments.length; m++) {
        var h = arguments[m];
        if (h)
            for (var c in h) $jscomp.owns(h, c) && (a[c] = h[c])
    }
    return a
};
$jscomp.polyfill("Object.assign", function(a) {
    return a || $jscomp.assign
}, "es6", "es3");
(function(a, l) {
    function m() {
        var d = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        d.gotoAndStop(this.currentFrame);
        d.paused = this.paused;
        d.framerate = this.framerate;
        return d
    }

    function h(d, e, f) {
        d = a.extend(d, a.MovieClip);
        d.clone = m;
        d.nominalBounds = e;
        d.frameBounds = f;
        return d
    }
    var c, b = {},
        q = {},
        g = {};
    b.ssMetadata = [];
    (b.bg = function() {
        this.initialize(g.countdown_login_bg)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.calender_frame = function() {
        this.initialize(g.countdown_login_calender_frame)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 64);
    (b.circre_rainbaw_small = function() {
        this.initialize(g.countdown_login_circre_rainbaw_small)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 320, 320);
    (b.day1 = function() {
        this.initialize(g.countdown_login_day1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day10 = function() {
        this.initialize(g.countdown_login_day10)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day1_00000 = function() {
        this.initialize(g.countdown_login_day1_00000)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00001 = function() {
        this.initialize(g.countdown_login_day1_00001)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00002 = function() {
        this.initialize(g.countdown_login_day1_00002)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00003 = function() {
        this.initialize(g.countdown_login_day1_00003)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00004 =
        function() {
            this.initialize(g.countdown_login_day1_00004)
        }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00005 = function() {
        this.initialize(g.countdown_login_day1_00005)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00006 = function() {
        this.initialize(g.countdown_login_day1_00006)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00007 = function() {
        this.initialize(g.countdown_login_day1_00007)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00008 = function() {
        this.initialize(g.countdown_login_day1_00008)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00009 = function() {
        this.initialize(g.countdown_login_day1_00009)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00010 = function() {
        this.initialize(g.countdown_login_day1_00010)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00011 =
        function() {
            this.initialize(g.countdown_login_day1_00011)
        }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00012 = function() {
        this.initialize(g.countdown_login_day1_00012)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00013 = function() {
        this.initialize(g.countdown_login_day1_00013)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day1_00014 = function() {
        this.initialize(g.countdown_login_day1_00014)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1920, 1080);
    (b.day2 = function() {
        this.initialize(g.countdown_login_day2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day3 = function() {
        this.initialize(g.countdown_login_day3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day4 = function() {
        this.initialize(g.countdown_login_day4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day5 = function() {
        this.initialize(g.countdown_login_day5)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day6 = function() {
        this.initialize(g.countdown_login_day6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day7 = function() {
        this.initialize(g.countdown_login_day7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day8 = function() {
        this.initialize(g.countdown_login_day8)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.day9 = function() {
        this.initialize(g.countdown_login_day9)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 588);
    (b.logo = function() {
        this.initialize(g.countdown_login_logo)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 420, 278);
    (b.logo_b = function() {
        this.initialize(g.countdown_login_logo_b)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 420, 278);
    (b.logo_w = function() {
        this.initialize(g.countdown_login_logo_w)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 420, 278);
    (b.office_bg = function() {
        this.initialize(g.countdown_login_office_bg)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 778, 620);
    (b.replace_character1_1 = function() {
        this.initialize(g.countdown_login_replace_character1_1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_2 = function() {
        this.initialize(g.countdown_login_replace_character1_2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_3 = function() {
        this.initialize(g.countdown_login_replace_character1_3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_4 = function() {
        this.initialize(g.countdown_login_replace_character1_4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_5 = function() {
        this.initialize(g.countdown_login_replace_character1_5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_6 = function() {
        this.initialize(g.countdown_login_replace_character1_6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds =
        new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_7 = function() {
        this.initialize(g.countdown_login_replace_character1_7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_b = function() {
        this.initialize(g.countdown_login_replace_character1_b)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_b2 = function() {
        this.initialize(g.countdown_login_replace_character1_b2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0,
        0, 800, 1E3);
    (b.replace_character1_b3 = function() {
        this.initialize(g.countdown_login_replace_character1_b3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_b4 = function() {
        this.initialize(g.countdown_login_replace_character1_b4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_b5 = function() {
        this.initialize(g.countdown_login_replace_character1_b5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800,
        1E3);
    (b.replace_character1_b6 = function() {
        this.initialize(g.countdown_login_replace_character1_b6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_b7 = function() {
        this.initialize(g.countdown_login_replace_character1_b7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_1 = function() {
        this.initialize(g.countdown_login_replace_character2_1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_2 =
        function() {
            this.initialize(g.countdown_login_replace_character2_2)
        }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_3 = function() {
        this.initialize(g.countdown_login_replace_character2_3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_4 = function() {
        this.initialize(g.countdown_login_replace_character2_4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_5 = function() {
        this.initialize(g.countdown_login_replace_character2_5)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_6 = function() {
        this.initialize(g.countdown_login_replace_character2_6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_7 = function() {
        this.initialize(g.countdown_login_replace_character2_7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_b = function() {
        this.initialize(g.countdown_login_replace_character2_b)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_b2 = function() {
        this.initialize(g.countdown_login_replace_character2_b2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_b3 = function() {
        this.initialize(g.countdown_login_replace_character2_b3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_b4 = function() {
        this.initialize(g.countdown_login_replace_character2_b4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds =
        new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_b5 = function() {
        this.initialize(g.countdown_login_replace_character2_b5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_b6 = function() {
        this.initialize(g.countdown_login_replace_character2_b6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_b7 = function() {
        this.initialize(g.countdown_login_replace_character2_b7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0,
        0, 800, 1E3);
    (b.replace_character3_1 = function() {
        this.initialize(g.countdown_login_replace_character3_1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_2 = function() {
        this.initialize(g.countdown_login_replace_character3_2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_3 = function() {
        this.initialize(g.countdown_login_replace_character3_3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_4 =
        function() {
            this.initialize(g.countdown_login_replace_character3_4)
        }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_5 = function() {
        this.initialize(g.countdown_login_replace_character3_5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_6 = function() {
        this.initialize(g.countdown_login_replace_character3_6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_7 = function() {
        this.initialize(g.countdown_login_replace_character3_7)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_b = function() {
        this.initialize(g.countdown_login_replace_character3_b)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_b2 = function() {
        this.initialize(g.countdown_login_replace_character3_b2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_b3 = function() {
        this.initialize(g.countdown_login_replace_character3_b3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_b4 = function() {
        this.initialize(g.countdown_login_replace_character3_b4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_b5 = function() {
        this.initialize(g.countdown_login_replace_character3_b5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_b6 = function() {
        this.initialize(g.countdown_login_replace_character3_b6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds =
        new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character3_b7 = function() {
        this.initialize(g.countdown_login_replace_character3_b7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_1 = function() {
        this.initialize(g.countdown_login_replace_character4_1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_2 = function() {
        this.initialize(g.countdown_login_replace_character4_2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0,
        0, 800, 1E3);
    (b.replace_character4_3 = function() {
        this.initialize(g.countdown_login_replace_character4_3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_4 = function() {
        this.initialize(g.countdown_login_replace_character4_4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_5 = function() {
        this.initialize(g.countdown_login_replace_character4_5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_6 =
        function() {
            this.initialize(g.countdown_login_replace_character4_6)
        }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_7 = function() {
        this.initialize(g.countdown_login_replace_character4_7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_b = function() {
        this.initialize(g.countdown_login_replace_character4_b)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_b2 = function() {
        this.initialize(g.countdown_login_replace_character4_b2)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_b3 = function() {
        this.initialize(g.countdown_login_replace_character4_b3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_b4 = function() {
        this.initialize(g.countdown_login_replace_character4_b4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_b5 = function() {
        this.initialize(g.countdown_login_replace_character4_b5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_b6 = function() {
        this.initialize(g.countdown_login_replace_character4_b6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character4_b7 = function() {
        this.initialize(g.countdown_login_replace_character4_b7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_1 = function() {
        this.initialize(g.countdown_login_replace_character5_1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds =
        new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_2 = function() {
        this.initialize(g.countdown_login_replace_character5_2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_3 = function() {
        this.initialize(g.countdown_login_replace_character5_3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_4 = function() {
        this.initialize(g.countdown_login_replace_character5_4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0,
        0, 800, 1E3);
    (b.replace_character5_5 = function() {
        this.initialize(g.countdown_login_replace_character5_5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_6 = function() {
        this.initialize(g.countdown_login_replace_character5_6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_7 = function() {
        this.initialize(g.countdown_login_replace_character5_7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_b =
        function() {
            this.initialize(g.countdown_login_replace_character5_b)
        }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_b2 = function() {
        this.initialize(g.countdown_login_replace_character5_b2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_b3 = function() {
        this.initialize(g.countdown_login_replace_character5_b3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_b4 = function() {
        this.initialize(g.countdown_login_replace_character5_b4)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_b5 = function() {
        this.initialize(g.countdown_login_replace_character5_b5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_b6 = function() {
        this.initialize(g.countdown_login_replace_character5_b6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character5_b7 = function() {
        this.initialize(g.countdown_login_replace_character5_b7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_1 = function() {
        this.initialize(g.countdown_login_replace_character6_1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_2 = function() {
        this.initialize(g.countdown_login_replace_character6_2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_3 = function() {
        this.initialize(g.countdown_login_replace_character6_3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds =
        new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_4 = function() {
        this.initialize(g.countdown_login_replace_character6_4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_5 = function() {
        this.initialize(g.countdown_login_replace_character6_5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_6 = function() {
        this.initialize(g.countdown_login_replace_character6_6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0,
        0, 800, 1E3);
    (b.replace_character6_7 = function() {
        this.initialize(g.countdown_login_replace_character6_7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_b = function() {
        this.initialize(g.countdown_login_replace_character6_b)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_b2 = function() {
        this.initialize(g.countdown_login_replace_character6_b2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_b3 = function() {
        this.initialize(g.countdown_login_replace_character6_b3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_b4 = function() {
        this.initialize(g.countdown_login_replace_character6_b4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_b5 = function() {
        this.initialize(g.countdown_login_replace_character6_b5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_b6 =
        function() {
            this.initialize(g.countdown_login_replace_character6_b6)
        }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character6_b7 = function() {
        this.initialize(g.countdown_login_replace_character6_b7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_1 = function() {
        this.initialize(g.countdown_login_replace_character7_1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_2 = function() {
        this.initialize(g.countdown_login_replace_character7_2)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_3 = function() {
        this.initialize(g.countdown_login_replace_character7_3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_4 = function() {
        this.initialize(g.countdown_login_replace_character7_4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_5 = function() {
        this.initialize(g.countdown_login_replace_character7_5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_6 = function() {
        this.initialize(g.countdown_login_replace_character7_6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_7 = function() {
        this.initialize(g.countdown_login_replace_character7_7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_b = function() {
        this.initialize(g.countdown_login_replace_character7_b)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds =
        new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_b2 = function() {
        this.initialize(g.countdown_login_replace_character7_b2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_b3 = function() {
        this.initialize(g.countdown_login_replace_character7_b3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_b4 = function() {
        this.initialize(g.countdown_login_replace_character7_b4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0,
        0, 800, 1E3);
    (b.replace_character7_b5 = function() {
        this.initialize(g.countdown_login_replace_character7_b5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_b6 = function() {
        this.initialize(g.countdown_login_replace_character7_b6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character7_b7 = function() {
        this.initialize(g.countdown_login_replace_character7_b7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800,
        1E3);
    (b.replace_character8_1 = function() {
        this.initialize(g.countdown_login_replace_character8_1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_2 = function() {
        this.initialize(g.countdown_login_replace_character8_2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_3 = function() {
        this.initialize(g.countdown_login_replace_character8_3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_4 =
        function() {
            this.initialize(g.countdown_login_replace_character8_4)
        }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_5 = function() {
        this.initialize(g.countdown_login_replace_character8_5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_6 = function() {
        this.initialize(g.countdown_login_replace_character8_6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_7 = function() {
        this.initialize(g.countdown_login_replace_character8_7)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_b = function() {
        this.initialize(g.countdown_login_replace_character8_b)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_b2 = function() {
        this.initialize(g.countdown_login_replace_character8_b2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_b3 = function() {
        this.initialize(g.countdown_login_replace_character8_b3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_b4 = function() {
        this.initialize(g.countdown_login_replace_character8_b4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_b5 = function() {
        this.initialize(g.countdown_login_replace_character8_b5)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_b6 = function() {
        this.initialize(g.countdown_login_replace_character8_b6)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds =
        new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character8_b7 = function() {
        this.initialize(g.countdown_login_replace_character8_b7)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_target_240x240_item_l = function() {
        this.initialize(g.countdown_login_replace_target_240x240_item_l)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 240);
    (b.star1 = function() {
        this.initialize(g.countdown_login_star1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 120,
        120);
    (b.wt_replace_item = function() {
        this.initialize(g.countdown_login_wt_replace_item)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 240);
    (b.w10 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("ADTIDQhXgChCgvQg8gsgvhVIgBAjQAAASACAKQAIAwgYAdQgXAcguAAQgkABhJAGQgeACgWgRQgXgRgHgfQgEgQgDgHQgFAcgUAVQgTATgcAHQhBAPg4gyQgWAZgZAGQgZAGgggPQgMgFgWADQgZAFgMABIgjAGQgVADgNgCQgMgCgNgLQgNgKgFgMQgcg6AmhAQAJgPgDgVQgEgaAJgTQAJgTAWgNIAGgDQADgCABgCQARgeAggGQAQgDArAEQALABANAKQALAIAJALQAIAKAGANQAGANABANQACAWAOATQAJALAYAWIgNgmQgIgVgCgNQgBgMACgNQADgOAGgJQALgTAhgLQAfgKAWAFQAVAHADAIQAUAqAxALIAAg+IAAg+IgDhBIgBhAQAAgLgFgGQgFgGgKgBQgjgBgTgkQgRghAIggQAIgeAGgQQAKgYAOgSQAogvBBgCQBHgBBQAMQAlAGAPAWQANASADAnIADAqIAEArQBPinCogSIgWg+IgRgFQgRAZgNANQgTARgYADQgeAEgTgEQgXgHgPgWQgCgDgGgDQgIgDgCgCQgWgTgggDQgQAAgrAEIhTAKQgIABgFAFQggAcgTABQgSABglgYIgZARQgPALgLAEQgLAEgSADIghAFQgHAPgUAIIgmALIgYAFQgPADgJADQgeAMgWgFQgZgFgUgcQgIAlgWATQgUATgjAFQgjAGgWgTQgVgSAEgeIAAgMIAAgPQgdgBgRgRQgPgPgGgeQgFgbAKgTQALgUAYgIQA1gQBqgdIBngfQAjgKAeAPQAeAPANAjQAqg2A4AgIAYguQAPgbAiAAIAbAAQAQAAALABQAJACAIAFQAKAEAEAHQAIAOAPACIAbABIBggBQADAAAEgCIAIgEIATgLQALgGAJgCIA0gKQAfgEAXACQAVABAmgCQApgCASABQAhACBRAHQAVACAMANQALAMAFAWIB1ARQAKABAEgDQAdgaAlgFQAggEAoAMQALADAJAHQALAHADAIQAFAJAIAEQAEADALACQAnALAiAFQAJABAOgFQAdgMAkAMQAkAMAQAbQAQAbgLAdQgLAegdAKQgJAEgNAHIgWAMQAAAggNAWQgNAWgVAGQgmAKgigRQgigSgVgrQgkAYgSAGQggAMgfgKQhGgXgHhFIhggMQgOgCgJAEQgLADgIAKQgFAIgLAIIgTAQIAjAJQAUAFANAGQCdBBAiCyQAJAvABAoQABAtgLAoIAAAFIABADIB/AAIAYAAIAYAAQAcACAOASQAPASABAgQADB2gDBAQgBAkgQARQgSAQglgBQgdgCgsAAIhKABQggAAgQgPQgQgQgBghIgDgrIgDgwQgyBUg8ApQhBAthTAAIgJAAgAC6BkQAJB9AfA3IAFgaQADgNAAgHIABhpQAAg7gCgsQgBgfgDgKQgGgYgUgLQgZAbAIB7g");
        this.shape.setTransform(90.4247, 51.5001);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w10, new a.Rectangle(0, 0, 180.9, 103), null);
    (b.w9 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("ACRIGIgvgIQgbgFgUgCQglgEgRgQQgUgRgEgjQgBgPAEgWQAGgZACgNQiggqg3iaQgtiDBDh8QAfg4AwgpQAwgqA5gTQB3gpBuA1QBpAxAsBrQAZA5gDA/QgCA4gYBAIhyEwQgRAug1ANgAAlA2QAAAfAHAXQAIAYAPAGQAUhLACgnQADgzgXgTQgfAcgBBIgAlGH3QgtgDgqgkQgXAZgYAGQgZAGgggPQgMgFgWADIglAGIgjAGQgVADgNgCQgMgDgNgKQgNgKgFgMQgcg7Amg/QAJgPgDgVQgDgaAIgTQAJgTAWgNIAGgDIAFgEQAQgeAggGQAPgDAsAEQALABANAJQALAIAJAMQAJAKAFANQAGANABANQACAWAOASQAJANAYAUIgNglQgHgVgCgOQgCgMACgNQACgPAHgHQAugxAwAPQAKADAMAMIAUAUIAOANQAIAHAHACQAjAJARAoQAQAmgmAgQASAkgGAgQgFAggcAVQgdAWgkAAIgGAAgAGuHyQgWAAgQgOQgQgOAAgUQgDhtADhtQAAgVAQgOQAQgNAWgBICXgFQAngBATASQATASABAnIABAtIgBAtIADAAIgDA5IgEA5QgDAUgNALQgOALgUAAIhCAAIhtAAgAK6iyQgigSgVgrQglAXgSAHQggAMgegKQhHgXgGhFIhXgLQgRgCgMADQgOAEgMANQgUAYgbAHQgbAGgfgLQgWgHgJgQQgJgPACgZIgWgHIgMAOQgXAmgrAIQgnAIgXgVQgMgLgagOQgbgPgLgJQgHgGgGABIiJARQgNACgQAMQgWASgSACQgbACgkgbQgTAagbALQgVAJgYgCIgtAVQgWAKgOAFQgIADgRADQgRADgIAEQgdALgXgFQgZgGgUgaQgIAkgWAUQgVASgjAGQghAFgWgSQgWgSAEgfIAAgMIAAgMQgpgMgTgdQgSgdAOggQAFgMALgKQALgLALgEQAggLAvgNIBQgWIBngfQAjgKAeAPQAdAOAMAfQAIgEAPgLQAOgIALgDQAKgCAQACIAcAFIAJgWQAGgOAIgHQAIgJAMgHQALgGAMgCQAhgGAHAAQAXgBAMAOQASAVAZAEQAQADAggFQANgCAUACIAiADQADAAAFgCIAJgEIASgKQALgHAIgBIA4gKQAhgFAYACQAUABAlgCQAngCARABIBzAJQAUACAMAOQALAMAFAWIB1AQQAKABAEgDQAegbAngEQAfgDArAMQAJACAJAHQAJAHADAIQAEAKAIAEIAPAFQAcAHAtAIQALACAIgEQAYgMAcAFQASAEAdAQQASAKAIASQAHARgDAVQgGAsgoALQgJADgMAHIgUANQAAAfgNAWQgMAWgXAGQgOAEgOAAQgWAAgVgLg");
        this.shape.setTransform(90.5163, 51.7469);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w9, new a.Rectangle(0, 0, 181.1, 103.5), null);
    (b.w8 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAiIFIg6gOQiFgkgziOIgaAlQARAigFAfQgGAhgcAUQgfAYgogCQgtgCgpglQgaAbgVAFQgTADglgMQgNgEgWACQgaAFgMABIgjAFQgVAEgNgDQgMgCgNgLQgMgKgGgMQgcg6AmhAQAFgHABgKQACgJgCgJQgDgbAIgTQAJgTAWgNIAGgDQAEgBABgCQAQgfAggGQAQgDArAEQALABANAKQALAIAJALQAJAKAFANQAGAOABAMQACAWAOATQAJAMAZAVIgNglQgHgTgDgNQgFgZAHgPQALgXAYgMQASgJAdgEQASgDAQAJQAQAKAIASQAGAMAKAHQAJAGAOAEQAIADAKAIIARANIAFguQAEgcAGgSQAIgagBgZQgBgXgJgcQgNglgBgkQgCghAIggQAQhBA0g5QA7g/BjgQIAAAAQAegEAdgBQCAgFBkBKQAiAaAXAgQAKANAHAPQAaAygBA8QAAA+goA8QgEAGgCAHQgCAIABAFIAPBCQAJApAEAaIAAglQACgYAPgPQAPgPAXgBICYgFQAngBASASQATARABAmQADB0gCBAQgCAkgQARQgSARgjgCQgegBgtAAIhLABQgfgBgQgPQgQgQgBgfIAAiRIgaA8QgPAhgNAUQgcArgtAaQgoAYg4ALIgqAKgABBD2QgPACgEAGQgFAGACAPQAAAGAFATQAAADAJACQAJADAFgCQAPgIAFgRQADgMgBgcIgcAFgABDguQgHACgDAFQgFAHACAPQAAAaAJAOQAJAOARAAQANAAALgOQALgPAAgQIAAgBQAAgTgKgJQgKgIgWgCIgGAAIgJABgAK5izQgigSgVgrQglAYgRAGQggAMgfgKQgjgLgTgWQgTgXgEgkIhjgMQgKgBgIADIgDABQgJAEgJAJQguA0g+gWQgXgIgJgPQgJgOACgWIAAgEIgYgIIgIANQgbAngmAHQgOADgPgBQgOgCgKgDIgIgDQgOgHgJgPQgCgDgFgDIgIgFIgGgCIgGgCQgmgZg6AHQhAANggAAQgEAAgFAEQgmAdgQABQgRABgngaQgVAbggALQgdAJgZgFQgIAQgRAIIgFADIgmALIgCABIgWAFQgPADgJADQgdAMgXgFQgZgGgUgbQgIAkgWAUQgKAJgNAGIgGADQgMAEgOACQgiAFgUgQQgUgRAAghIAAgbQgdgBgRgRQgPgQgGgeQgEgaAKgTQAKgUAZgIQA1gQBpgdIBogfQAVgGAUADQAMACAMAGQAeAPANAiQApg2A4AhIAMgZQAHgPAGgIQAHgIAIgGQAJgHAIgCQAegFAoAEIACABQAIABAIAEQAJAFAEAHQAGAKAKAEIAHACIAbABIBggBQADAAAEgCIAIgEIATgLQAMgHAIgBIA0gKQAbgEAVABIAGAAQAVACAmgCQApgCASABQAcABBXAIQAmADAKAuIB1AQQAKACAEgEQAegaAngEQAfgDArALQAJADAJAHQAIAHAEAHQAEAKAIAEIAPAFQAkAJAlAGQAJACAOgGQAdgLAkAMQAkALAQAbQAQAbgLAeQgLAdgdALIgWAKIgWANQAAAfgNAWQgNAWgVAGQgPAEgNAAQgXAAgVgLg");
        this.shape.setTransform(90.4382, 51.7188);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w8, new a.Rectangle(0, 0, 180.9, 103.5), null);
    (b.w7 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("ACMIIIhygUIgegHQgRgDgLgHQgUgMgIgUQgKgWAIgeIBpmSIgBgFQgXgJgOADQgNABgRAQQhAA9hmgZQgTgFgNgVIgBgCQgLgTAAgYQABgnAFg1IAFgkIABgGIACgSIABgMQAFgnAbgTQAYgQAnACQASABAgADIAzAEICIAIICJAIIAlAFIAkAFQAeAFARAcQAPAagFAbQgiCmgkCLQgqCgg0CLQgJAZgSARQgRAPgaAHgAlMH4QgugEgjgjQgWAbgaAFQgaAGghgQQgLgFgVADQgZAGgMACIggAHQgTAFgMgCQgdgDgUgfQgTgeAHgfQAEgQAJgWIAOgkQAFgMgCgIQgFghAHgUQAJgYAagLIAEgCIADgCQAQgeAggGQASgEApAEQAMABANAJQANAIAIALQAOAVAIAnQADASANAQQAJAKAXAUIgHgWIgHgRQgXgxATgcQAOgVAugQQAZgJATAIQASAHAQAXIALAQQAHAJALACQAtAMAKAlQALAkghAkQATAigHAiQgHAigdAUQgbATgjAAIgMAAgAJSH2QhRgCg9ABQgrAAgQgOQgSgPgBgqQgChSADhtQAAgYAPgOQAPgPAYgBQBegEA+gBQBJgBABBKIAABZIADABIgDA5QgCAigDAWQgGAugzAAIgDAAgALDirQgmgPgbgxQgkAWgTAHQggALgfgLQhFgVgHhGIhagLQgPgCgLADQgMADgKAMQgWAZgaAHQgcAIgfgKQgWgIgKgQQgLgQACgZIgWgHQgpBHhCgMQgLgCgQgKIgYgQIgSgLIgHgDIgHgCQglgZg5AJIgvAIQgVADgRABIgJgBQgCABgEADQgmAegRABQgRABgogaQgkAvhBgEIgEAAIgCAAQgSAagnAJQgsAIgUAIQgKAFgOAAQgoAGgZgkIgSAlQgMAWgiANQggALgZgHIgHgCQgQgGgKgOQgJgPAAgUIACgbIAAgCIgBAAQgdgCgRgRQgPgQgGgdQgFgbAKgTQALgVAYgIIASgFICLgoIAxgPQAegKATgFQAsgKAZALQAZALAXAnQAmgxA7AdIAKgYQAHgOAHgIQAJgJAMgGQAMgIAMgCQAhgHAWAFQAIACAIAEQASAJANARQADAFANAAIAXgBQA2AAAmgBQAEAAANgFQAHgEAPgKQAMgHAJAAQAQAAAVgEIAmgHQAtgIAfAOQAFACALgFIATgJIAKAAIAnADQAYABAQACQA3AKAiANQAGABAGAMIAKAWIBxAPQAKABAEgDQAegaAngEQAhgEAqANQAIACAIAHQAJAGADAHQAFALAKAFQAFADAPADQAUAEAtAJIAIACQAEABADgCQATgLAWABQAQABAZAJQAZAJANAQQAPARABAYQABAYgMAQQgMAQgZALIgVAKIgUAMQADAagMAXQgMAYgUAGQgSAGgQAAQgSAAgQgGg");
        this.shape.setTransform(90.4705, 52);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w7, new a.Rectangle(0, 0, 181, 104), null);
    (b.w6 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AhsHYQgkgVgbgkQgXgfgUguIgTAVQASAlgGAfQgGAhggAWQggAXgogEQgsgEgmgjQgWAagYAGQgaAGgggPQgMgFgWACIglAHIgjAKQgVAGgPgIQghgTgIgRQgcg5AmhBQAEgHABgKQACgKgBgIQgEgbAJgTQAJgTAXgOIAFgDIAEgDQAPgdAfgHQANgCAuABQAnABALAkIALAmQAHAWAHAOQAFAJALAMIAUASIAEgCIgLgfQgHgTgDgNQgEgVAGgTQAKgcAsgMQArgNAYARIAFACIADADIANAVQAHAMAHAGQAHAFAOAEIAXAGQABgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQgJg5AShFIAPgtIAZhLQAQgqAchAIAvhqIAGgMQAIgPAMgJQAQgOAXgBQArgCBaAFQAeABARAfQAOAbgGAeIgYB4QDgApAcDIIAogGIAogEQAygDBDgCQAlgBATASQATARABAlQADBqgDBMQgBAkgQAQQgSARglgBQgdgCgsABIhKAAQggAAgQgQQgQgPgBghIgGhuQg0BthhAuQhXAohOABIgCAAQhTAAhOgvgAA5CwQgFAEgBADQgHAeAAAYQABAcALAZQAGAMAJABQALABAFgMQAEgJADgPIAFgaIgHgdQgEgRgEgMQgCgEgGgDQgGgDgGgBIAAgBQgDAAgEAEgAK5i0QgigTgTgqQgnAYgRAGQggAMgggKQhGgYgFhFIhkgLQgMgBgIAEQgJADgIAJQgoAvg7gMQgagGgNgRQgNgSACgbIgWgHQgWAdgGAGQgSASgWAEQggAGgUgFQgYgGgRgZQgDgEgLgCQgNgDgDgEQgVgWgjAEIgeAEQgRADgLgCQgIgBgLACIgSADIgbAFIgCAAQgQAEgLAMQgPASgXABQgWAAgTgNIgTgMQgZAZgaAMQgZALgSgEIgpAUQgUAKgPAEIgsAOQgZAGgTABQgNAAgSgIIghgPQgJAkgbATQgcASgogDQgJAAgIgDQgXgGgIgUQgHgQACglIAAgFIgCAAQgogKgSgdQgTgeAPghQAFgLALgLQALgKAMgEIAPgFIA/gTIBOgWIBlgeQAmgLAdAPQAcANARAiQAdgcAUgCQAMgCAlAMIAMgZQAGgOAHgJQAGgIAIgGQAKgGAIgBQAvgGAMACQALABAJADQAUAIANAUQADAFAPAAIAagBIBWAAQANgBAFgEQAMgOASgFQALgDAYgCIAmgFQAZgEAOAAQAKgBAPADIAYAEIAMABIAdgFQARgCAMAAQAtAAA5AFQAdACAOAMQANALAJAcIBzAQQALABADgDQAegaAlgFQAhgDApAMQAIACAKAIIARAPIALAJQAGAGAFABQATAGA6AMQAKACAFgDQARgLAVACQAOABAZAIQA2ATACAvQABAWgNASQgNAVgXAGQgJACgMAIIgUANQADAcgNAXQgNAXgWAGQgPAEgOAAQgXAAgWgLg");
        this.shape.setTransform(90.5574, 51.8461);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w6, new a.Rectangle(0, 0, 181.1, 103.7), null);
    (b.w5 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAAIGIghgKQg4gPgag0QgZgzATg0QAIgXAYgMQAXgLAaAEQAcAEANAAQAXgBAQgNQAHgGAGgJQAGgKgCgGQgCgHgKgHQgKgHgHAAQg2AFgqAMQgjAKgVgEQgYgFgPgXQgPgVgEgkQgEghgEgwIgBgIIgIhYQgIhZgFglQgHg0AVgcQAVgcAxgDQBAgDBdgIICcgOIgbg7IAGgDIgWgIIgMAQQgXAlgrAJQgnAHgXgVQgMgLgagOQgbgPgLgJQgGgGgHABQhjALgmAGIgEAAQgNADgMALQgWAVgWgBQgVAAgkgXQg4AygqgIIggASQgRAKgLADQgSAGgbAHIgtALQgVAGgTgKQgQgHgRgUQgIAkgWATQgVASgjAGQgUADgQgGQgKgDgJgHQgWgSAEgfIAAgMIAAgHIAAgFIgBgBQgogMgTgcQgSgdAOggQAFgMALgKQALgLAMgEIAPgFQAbgJAkgKIBQgWIBlgeQAlgLAeAQQAdAPAOAhQApg1A4AgIAMgZQAHgPAHgIQAIgIAMgHQAMgGALgCQAigGAGAAQASgBALAIIAGAGQATAVAYAEQAQADAggFQANgCAUACIAiADQAEAAAFgCIAIgEIASgKQALgHAIgBIA4gKQAhgFAYACQAUABAlgCQAngCASABIByAJQAVACAMAOQAKAMAFAWIB1AQIAIAAQAFgBABgCQAIgMARgFIAdgIQAlgNArAPQAeALAIAQQAFAIAIAFQAFACALADQAdAIArAHQALACAIgEQAYgMAbAFQARAEAdAPQATAKAIASQAIAQgDAVQgFAtgpAMQgJADgMAHIgUANQABAdgNAXQgMAWgVAHQgmAKghgQQgkgRgWgtQgkAXgTAHQggAMgfgKQhHgXgEhGIg1gGQgfgDgVgBQgLgBgTANIgYASIgXASQAdAQAIAgQAIAegKAqQgNA4gYAcQgYAcg3AXIAjAVIAiAWQBTA8AQB3QAOBthIBWQg/BKhYATIgcAHIgcAIgAlKH2QgtgEglgjQgXAagZAGQgaAGgggQQgMgFgVADIgkAHQgHAAgZAHQgTAFgLgBQgegDgUgfQgUgeAHgfQAEgPAJgWIAOgkQAFgOgDgLQgFgcAJgTQAIgVAYgOIAFgCIAEgDQAPgdAfgHQAOgDAsABQAoACALAjIALAmQAHAVAHAPQAFAKAMAKIAXASIgFgSIgGgRQgYgxAVgdQAQgVAvgOQAtgOAaAqQAIANAJAHQAKAIAPAEQAmALAHAlQAHAlgeAgQASAigGAhQgGAhgcAVQgcAUgkAAIgKAAgAGuHyQgWAAgQgOQgPgOgBgUQgDhrADhvQAAgVAQgOQAQgNAWgBICYgFQAmgBATASQATASABAnIABAtIgBAtIADAAIgDA5IgEA5QgDAUgNALQgOALgUAAIhBAAIhuAAg");
        this.shape.setTransform(90.5032, 51.7469);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w5, new a.Rectangle(0, 0, 181, 103.5), null);
    (b.w4 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AC4IDQhWgDg6gIQgigFgRgWQgSgWAAglIAAgVIg2gEIg1gDQghgBgRgFQgbgIgRgWQAPAvgHAfQgHAmgnAVQhKAmhHhAQgVAagbAGQgaAFgdgNQgMgGgWADIglAFQgHABgYAHQgUAGgLgCQgfgDgUgfQgTgeAIggQADgPAJgWIAPglQAEgLgDgLQgFgcAIgUQAIgUAYgOIAGgDIAEgEQARgfAhgFQANgDAwAEQAKABAMAIQAKAIAIALQATAaACAZQACAWAPATQAIALAaAXIgOgmQgHgUgDgNQgEgWAHgSQALgbAqgNQAqgNAYAQIAFADQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAJAXAXAPQALAHAiAOIAsimIAsihIAoiJIAGgQQAKgWAUgKQAZgPAjAIQAqAKASACQAbADAQAbQARAbgHAcIgLA1IgNAzIBEAIIBEAIQAhADAQAVQAQAUACAoIABAzIAAA1QAoABAWAVQAXAVAEArQALgZASgLQAPgJAZAAIBFgCIBGgDQAmAAATARQATASABAmQACBzgCBBQgBAkgRAQQgRASgkgCQgegCgtABIhLAAQg+AAgBg+IgDhCIgBhCIABggIABggIgHAfQgFATgEAMQgXA5g3AWQgLAFgFAGQgEAHAAAMQAAAcgGAXQgGAWgUAPQgTAOgWAAIgCAAgAK5iwQgjgTgSgqQgoAYgQAGQghAMgfgLQhEgWgHhFIhYgLQgRgCgLADQgOAEgLAMQgSAWgZAIQgYAIgdgGQgagGgMgRQgNgSACgbIgVgHIgPATQgJAKgHAHQgXAXgkADQglAEgSgWQgLgMgagMQgbgNgKgLQgDgEgGABIiOAQIgHABQgGABgHAGQgbAagUACQgUABgggVIgJgFQgSAYgbALQgWAJgaAAIgpAUQgVAKgOAEIguAOQgaAGgVABQgMAAgRgJQgUgLgJgEQgLAoghATQgdAQglgFIgKgCQgTgFgJgLQgLgOABgbIAAgbIgBAAQgpgKgSgdQgTgeAPghQAFgLALgLQALgKAMgEIAPgFIA/gTIBOgWIBlgeQAngLAdAPQAbAOARAjQAog0A6AfIALgZQAHgPAHgJQAGgIAIgGQAJgGAIgBQAvgGANACQAMABALAFQARAIANASQADAFAQAAIAbgBQAtAAAngBQANAAAEgEQAMgNATgGQALgDAYgCIAmgFQAZgEAOAAQAKgBAOADIAZAEIAFABIAGAAIAegEQATgDAMAAQAsAAA4AFQAdACAOAMQANALAIAcIBzAQQAMABACgDQALgRAYgFQAOgEAbgEQAZgIAgANQAfAMAPAWQAFAHAWAGQAfAIATACQASABAggFQA5gIAnAiQAQAPAFATQAFAUgKAUQgKAWgTANQgKAHgRAIIgbAMQACAegNAXQgNAXgWAGQgOAEgPAAQgXAAgVgLg");
        this.shape.setTransform(90.5676, 51.4467);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w4, new a.Rectangle(0, 0, 181.1, 102.9), null);
    (b.w3 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9H9QgygMgmgbQgvgigHg8QgHg5AggmQAVgZAcgDQAdgEAcATQAbATAjAKQAIACAKgBQAKgDAIgEQAGgDAEgKQAEgJgCgEQgGgMgWgNQgFgDgIgBIgPgBQgdgHgQgUQgQgTABgdQABgNADgTIABgMIADgWQAEgbARgQQAPgOAbgHIAUgCQALgDgBgNQgCgQgIgLQgJgNgQgCQgkgCgVAIQgpAPgdgLQgdgLgQgkIgPgcIgBgCQgKgRgEgKQgOghAKgaQAJgYAbgOQBlg3B0AJQB9AIBOBRQBqBugwCfQgEANACAKQABAKAIAMQAtBAgHBRQgGBNgzA8QgvA2hCAaQg6AVhPABQg3AAgogLgAlMH3QgugEgigjQgXAbgZAFQgaAGghgPQgMgFgWADQgaAHgMABIgeAGQgTAEgLgBQgegDgTgeQgUgfAHgfQAEgPAJgWIAOgkQAFgNgBgIQgHggAIgTQAIgUAbgRQAGgCABgCQAQgeAggGQASgEApAEQAMACANAIQANAJAIAKQAPAVAHAnQADATANAPQAKAJAUAOIgFgPIgHgQQgXgyATgcQAOgVAugQQAZgIATAHQASAHAQAXIAMARQAIAJALACQAsAMAKAlQAJAkggAjQATAigHAiQgHAhgcAVQgbAUgjAAIgNgBgAJSH1QhPgBg/AAQgrABgQgPQgSgQgBgpQgChOADhxQAAgXAPgPQAPgPAXgBQBcgDBBgCQBJAAABBJIAABZIADABIgDA5QgCAhgDAXQgGAugzAAIgDAAgALDisQgmgPgbgyQgkAXgTAHQggALgfgKQhGgXgGhFIhagLQgPgCgLADQgMADgKAMQgWAZgaAHQgcAIgfgKQgWgIgKgQQgKgQACgZIgXgHQgpBHhCgLQgLgDgQgKIgYgQIgSgLIgHgDIgHgCQglgYg5AHIgvAJIgKABQgWADgPgBQgCAAgEAEQgmAegRABQgRABgogaQgkAvhAgEQgHAAAAABQgSAYgnAKQgrAIgVAIQgKAEgOACQgoAEgZgkIgSAmQgLAXgjAMQgYAJgVgCQgKgBgJgEQgQgFgKgPQgJgPAAgUIACgdQgdgCgRgQQgQgQgGgeQgFgaAKgUQALgVAYgHIAxgPIBsgeIAxgQQAegKATgFQAsgJAZAKQAZALAYAoQAlgyA7AdIALgYQAGgOAHgHQAJgKAMgGQAMgIAMgCQAhgHAWAGQAVAEAPAPIALAMQADAFANAAIAYgBQAtABAugCQAEAAAEgCIAJgDIAWgNQANgIAIAAQAQAAAVgEIAmgHQAtgHAfANQAFADALgGIATgIIAKAAIAnACQAYABAQACQA2AKAjANQAGABAGAMIAKAWIBxAPQAKABAEgDQAegaAngEQAhgDAqAMQAIADAIAGQAIAGAEAHQAFALAKAFIAUAGIBBANIAIACQAEAAACgBQATgLAWABQAQACAaAIQAZAJANAQQAPARABAYQAAAYgLAQQgMAQgZALQgJAEgMAGIgUANQADAZgMAXQgMAYgUAHQgRAGgRAAQgSAAgQgHg");
        this.shape.setTransform(90.4815, 52.05);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w3, new a.Rectangle(0, 0, 181, 104.1), null);
    (b.w2 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AhUIGQgrgRgPgcQgPgcANgmQAGgPASgRQBrhgAViKIADgZQADgsgLgoQgJgmgWgLQgVgLguAMQgYAIgMADQgVAFgQgGIgIgBQgNgGgMgMQgRgRgPgiQgZg4AOgeQAGgMAKgLQALgLALgHQBpg5BpgBQBpAABTBDQBTBDAZBnQAQBCgIBBQgIBAgeBBIAKADQAHADAEAAQAiADARAgQAQAdgGAhQgGAjgGARQgJAdgPAUQgpA5hMAFIhkAGIhkAGIgHABIgGADgAlNH7QgtgEgigjQgXAagaAFQgaAHgggQQgMgFgVADIglAHIgfAHQgUAFgLgBQgfgEgTgfQgTggAIggQAEgPAJgVIAPgkQADgJgBgJQgGghAIgUQAIgYAbgLQAFgDABgCQAQgeAggGQASgDAqAEQALABANAJQAMAIAJALQAQAVAFAfQACAVANARQALAPAXARQgJgbgFgLQgXgxATgbQAPgVAugRQAYgIATAHQASAIAQAYIALAPQAHAIALADQAtALALAlQAKAkggAjQAkBRg/AsQgaATghAAIgOgBgAJSH5QhegCgwAAQgrABgQgOQgSgQgBgpQgChPADhxQAAgXAPgPQAPgPAXgBQBegDA/gBQBJgBABBKIAABZIADAAIgDA5QgCAigDAXQgGAug0AAIgCAAgALDioQgmgPgbgyQgkAWgTAIQggALgfgLQhGgWgGhFIhagMQgPgCgLADQgMADgKAMQgWAZgaAIQgcAIgfgKQgWgIgKgQQgKgRACgZIgXgGQgpBHhCgNQgLgBgQgKIgYgRIgSgKIgHgDIgHgDQglgYg5AIIgvAIIgLACQgVADgPgBQgCAAgEADQgmAegRACQgRABgogaQgkAuhAgDIgEAAIgDAAQgSAZgnAJQgrAIgVAIQgKAFgOABQgoAFgZgkIgSAmQgLAWgjAMQgXAJgUgCQgLAAgKgEQgQgGgKgPQgJgOAAgUIACgeQgdgCgRgRQgQgPgGgeQgFgaAKgUQALgVAYgHIAwgOIBtgfIAxgQQAegKATgEQAsgLAZAMQAZAKAYAnQAlgwA7AcIALgYQAGgOAHgHQAJgJAMgHQAMgIAMgCQAhgGAWAFQAXAFARATIAHAIQADAEANAAIAYAAQA1AAAmgBIAIgCIAJgEQAHgEAPgJQANgHAIAAQAQAAAVgFIAmgGQAtgIAfANQAFACALgFIATgJIAKAAIAnADQAYACAQACQA3AJAiANQAGACAGAMIAKAVIBxAQQAKABAEgDQAegbAngEQAhgDAqAMQAIACAIAHQAIAGAEAIQAFAKAKAFQAFADAPADIBBAOIAIACQAEAAACgBQATgMAWACQARABAZAJQAZAIANAQQAPASABAXQAAAZgLAPQgMARgZAKIgVALIgUAMQADAZgMAXQgMAZgUAGQgSAGgRAAQgRAAgQgGg");
        this.shape.setTransform(90.4815, 51.75);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w2, new a.Rectangle(0, 0, 181, 103.5), null);
    (b.w1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAeIGIgWgKQgMgGgIgFQgRgMgHgUQgEgMgEgbQgKhXgFhVIgHiKIgGiCIgMgGQgtgNgPgZQgPgZAJgwQAHgnAVgeQAHgKAKgKQASgUAZgKQAXgKAbAAQBIgBBTAMQA/AIAEBJIAPFYIAIB5QAEBLACAtQADBVhSAGIgwACIgxADIgJACIgJADgAlHH7QgugDgogjQgWAZgZAFQgaAGgggOQgMgGgWAEQgaAGgMABIgfAGQgSAFgLgBQgfgEgTgeQgUggAIgfQADgQAJgVIAPglQAEgJgCgLQgGgfAIgTQAJgUAagQIAEgCIAEgEQARgeAigGQAOgBAwADQAKABALAJQALAHAGALQARAZAFAgQADATANAQQAKAMAVANIgMgeQgWgxARgbQANgVAtgSQAagKAXAJQAUAJAMAUQAMAVAOAEQAwAPAKAkQALAjggAlQARAlgGAfQgGAggdAWQgbAUgkAAIgHAAgAJUH5QhvgCgfAAQgsABgRgOQgRgPgCgsQgChMADhzQAAgXAQgOQAPgPAXgBQBegDA/gBQBGgBADBIIAABcIADAAIgDA5QgCAigDAXQgDAXgQALQgPALgWAAIgCAAgALDioQgmgPgbgyQgkAWgTAIQggALgfgLQhGgWgGhFIhagMQgPgCgLADQgMADgKAMQgWAZgaAIQgcAIgfgKQgWgIgKgQQgKgRACgZIgXgGQgpBHhCgNQgLgBgQgKIgYgRIgSgKIgHgDIgHgDQglgYg5AIIgvAIIgLACQgVADgPgBQgCAAgEADQgmAegRACQgRABgogaQgkAuhAgDIgEAAIgDAAQgSAZgnAJQgrAIgVAIQgKAFgOABQgoAFgZgkIgSAmQgLAWgjAMQgXAJgUgCQgLAAgKgEQgQgGgKgPQgJgOAAgUIACgeQgdgCgRgRQgQgPgGgeQgFgaAKgUQALgVAYgHIAwgOIBtgfIAxgQQAegKATgEQAsgLAZAMQAZAKAYAnQAlgwA7AcIALgYQAGgOAHgHQAJgJAMgHQAMgIAMgCQAhgGAWAFQAXAFARATIAHAIQADAEANAAIAYAAQA1AAAmgBIAIgCIAJgEQAHgEAPgJQANgHAIAAQAQAAAVgFIAmgGQAtgIAfANQAFACALgFIATgJIAKAAIAnADQAYACAQACQA3AJAiANQAGACAGAMIAKAVIBxAQQAKABAEgDQAegbAngEQAhgDAqAMQAIACAIAHQAIAGAEAIQAFAKAKAFQAFADAPADIBBAOIAIACQAEAAACgBQATgMAWACQARABAZAJQAZAIANAQQAPASABAXQAAAZgLAPQgMARgZAKIgVALIgUAMQADAZgMAXQgMAZgUAGQgSAGgRAAQgRAAgQgGg");
        this.shape.setTransform(90.4815, 51.75);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.w1, new a.Rectangle(0, 0, 181, 103.5), null);
    (b.replace_day_14 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00014;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_14, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_13 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00013;
        this.instance.parent =
            this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_13, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_12 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00012;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_12, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_11 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00011;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.replace_day_11, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_10 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00010;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_10, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_9 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00009;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_9,
        new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_8 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00008;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_8, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_7 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00007;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_7, new a.Rectangle(0,
        0, 1920, 1080), null);
    (b.replace_day_6 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00006;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_6, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_5 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00005;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_5, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_4 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00004;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_4, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_3 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00003;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_3, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_2 =
        function(d, e, f) {
            this.initialize(d, e, f, {});
            this.instance = new b.day1_00002;
            this.instance.parent = this;
            this.timeline.addTween(a.Tween.get(this.instance).wait(1))
        }).prototype = h(b.replace_day_2, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1_00001;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_1, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.replace_day_0 = function(d, e, f) {
        this.initialize(d,
            e, f, {});
        this.instance = new b.day1_00000;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_day_0, new a.Rectangle(0, 0, 1920, 1080), null);
    (b.wt_logo = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.logo_w;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.wt_logo, new a.Rectangle(0, 0, 210, 139), null);
    (b.wt_item = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.wt_replace_item;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.wt_item, new a.Rectangle(0, 0, 120, 120), null);
    (b.white_rect = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("EgcRAkzMAAAhJlMA4jAAAMAAABJlg");
        this.shape.setTransform(181, 235.475);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.white_rect, new a.Rectangle(0,
        0, 362, 471), null);
    (b.bg_pre = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.office_bg;
        this.instance.parent = this;
        this.instance.setTransform(-265, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.bg_pre, new a.Rectangle(-265, -155, 389, 310), null);
    (b.btn = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A0xaVMAAAg0pMApjAAAMAAAA0pg");
        this.shape.setTransform(133, 168.475);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.btn, new a.Rectangle(0, 0, 266, 337), null);
    (b.black_rect = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("A1ZbbMAAAg21MAqzAAAMAAAA21g");
        this.shape.setTransform(137, 175.475);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.black_rect, new a.Rectangle(0, 0, 274, 351), null);
    (b.bk_logo = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.logo_b;
        this.instance.parent = this;
        this.instance.setTransform(157, 122, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.bk_logo, new a.Rectangle(157, 122, 210, 139), null);
    (b.text_base_b = function(d, e, f) {
        this.initialize(d, e, f, {
            line4: 0
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.898)").s().p("AxLFeQg8AAAAg8IAApDQAAg8A8AAMAiXAAAQA8AAAAA8IAAJDQAAA8g8AAg");
        this.shape.setTransform(116, 35);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.text_base_b, new a.Rectangle(0, 0, 232, 70), null);
    (b.text_base = function(d, e, f) {
        this.initialize(d, e, f, {
            line4: 0
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AxLFeQg8AAAAg8IAApDQAAg8A8AAMAiXAAAQA8AAAAA8IAAJDQAAA8g8AAg");
        this.shape.setTransform(116, 35);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.text_base, new a.Rectangle(0, 0, 232, 70), null);
    (b.replace_item_l = function(d, e, f) {
        this.initialize(d,
            e, f, {});
        this.instance = new b.replace_target_240x240_item_l;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_item_l, new a.Rectangle(0, 0, 120, 120), null);
    (b.pointGlitter2 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds =
        new a.Rectangle(-34.6, -34.6, 69.30000000000001, 69.30000000000001);
    (b.logo_1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.logo;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 210, 139);
    (b.gr_bubble_parts = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(252,194,242,0)", "rgba(255,255,255,0.6)", "rgba(255,196,238,0)"],
            [.251, .855, .882], 0, 0, 0, 0, 0, 70.4).s().p("AnuHvQjNjMAAkjQAAkiDNjMQDMjNEiAAQEjAADMDNQDNDMAAEiQAAEjjNDMQjMDNkjAAQkiAAjMjNg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.gr_bubble_parts, new a.Rectangle(-70, -70, 140, 140), null);
    (b.cursor_inner_w = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AmplwINTAAImqLhg");
        this.shape.setTransform(0, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.cursor_inner_w,
        new a.Rectangle(-42.6, -36.9, 85.2, 73.8), null);
    (b.cursor_inner = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AmplwINTAAImqLhg");
        this.shape.setTransform(0, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.cursor_inner, new a.Rectangle(-42.6, -36.9, 85.2, 73.8), null);
    (b.bg_pink_light = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Akr/PIJXAAMgEsA+fg");
        this.shape.setTransform(0,
            -110.05, .8333, .55, 0, 0, 0, 0, -.1);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.bg_pink_light, new a.Rectangle(-25, -220, 50, 220), null);
    (b.bg_first = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.bg;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.bg_first, new a.Rectangle(0, 0, 240, 310), null);
    (b.asset_efc_particle_P2 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.asset_efc_particle_p1 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype =
        h(b.asset_efc_particle_p1, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.asset_efc_flashWhite1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(255,255,255,0)", "rgba(255,255,255,0)"], [.298, .522, 1, 1], 0, 0, 0, 0, 0, 130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.asset_efc_flashWhite1, new a.Rectangle(-129.2, -129.2, 258.4,
        258.4), null);
    (b.asset_efc_flashBlade1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.asset_efc_flashBlade1, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.arrow_inner = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-5.3448, -5.1698);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#666666").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape_1.setTransform(-5.8448, -4.6698);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = h(b.arrow_inner, new a.Rectangle(-11.2, -10.3, 11.2, 10.8), null);
    (b.cb8 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.replace_character8_b;
        this.instance.parent =
            this;
        this.instance.setTransform(0, 0, .5, .5);
        this.instance_1 = new b.replace_character8_b2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .5, .5);
        this.instance_2 = new b.replace_character8_b3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.replace_character8_b4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, .5, .5);
        this.instance_4 = new b.replace_character8_b5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, .5, .5);
        this.instance_5 =
            new b.replace_character8_b6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.replace_character8_b7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
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
        }, 1).wait(1))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 400, 500);
    (b.cb7 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.replace_character7_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.instance_1 = new b.replace_character7_b2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .5, .5);
        this.instance_2 = new b.replace_character7_b3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.replace_character7_b4;
        this.instance_3.parent =
            this;
        this.instance_3.setTransform(0, 0, .5, .5);
        this.instance_4 = new b.replace_character7_b5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, .5, .5);
        this.instance_5 = new b.replace_character7_b6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.replace_character7_b7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
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
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 400, 500);
    (b.cb6 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.replace_character6_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.instance_1 = new b.replace_character6_b2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .5, .5);
        this.instance_2 =
            new b.replace_character6_b3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.replace_character6_b4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, .5, .5);
        this.instance_4 = new b.replace_character6_b5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, .5, .5);
        this.instance_5 = new b.replace_character6_b6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.replace_character6_b7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
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
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 400, 500);
    (b.cb5 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.replace_character5_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.instance_1 = new b.replace_character5_b2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .5, .5);
        this.instance_2 = new b.replace_character5_b3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.replace_character5_b4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, .5, .5);
        this.instance_4 = new b.replace_character5_b5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0,
            0, .5, .5);
        this.instance_5 = new b.replace_character5_b6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.replace_character5_b7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
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
            1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 400, 500);
    (b.cb4 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.replace_character4_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.instance_1 = new b.replace_character4_b2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .5, .5);
        this.instance_2 = new b.replace_character4_b3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.replace_character4_b4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, .5, .5);
        this.instance_4 = new b.replace_character4_b5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, .5, .5);
        this.instance_5 = new b.replace_character4_b6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.replace_character4_b7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
                state: [{
                    t: this.instance_1
                }]
            },
            1).to({
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
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 400, 500);
    (b.cb3 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.replace_character3_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.instance_1 = new b.replace_character3_b2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0,
            0, .5, .5);
        this.instance_2 = new b.replace_character3_b3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.replace_character3_b4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, .5, .5);
        this.instance_4 = new b.replace_character3_b5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, .5, .5);
        this.instance_5 = new b.replace_character3_b6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.replace_character3_b7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
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
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 400, 500);
    (b.cb2 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance =
            new b.replace_character2_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.instance_1 = new b.replace_character2_b2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .5, .5);
        this.instance_2 = new b.replace_character2_b3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.replace_character2_b4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, .5, .5);
        this.instance_4 = new b.replace_character2_b5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0,
            0, .5, .5);
        this.instance_5 = new b.replace_character2_b6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.replace_character2_b7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
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
            1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 400, 500);
    (b.cb1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.replace_character1_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.instance_1 = new b.replace_character1_b2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .5, .5);
        this.instance_2 = new b.replace_character1_b3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.replace_character1_b4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, .5, .5);
        this.instance_4 = new b.replace_character1_b5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, .5, .5);
        this.instance_5 = new b.replace_character1_b6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.replace_character1_b7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
                state: [{
                    t: this.instance_1
                }]
            },
            1).to({
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
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 400, 500);
    (b.yajirusi_p = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#444545").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-5.3448, -5.1698);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.yajirusi_p, new a.Rectangle(-10.7, -10.3, 10.7, 10.3), null);
    (b.window_shadow = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AxJArQgmAAgUgSQARAIAZAAIaFAAIIIAAQBOAAAChLIAAAFQAABQhRAAg");
        this.shape.setTransform(118.95, 88.225);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.463)").s().p("AxEFbQg1AAgUghIAIAGQAUAYAtAAMAh8AAAQBUAAAAhTIAAoyQAAgQgDgNIgDgQQAIASAAAbIAAIyQAABWhWAAg");
        this.shape_1.setTransform(118.45, 58.325);
        this.shape_2 =
            new a.Shape;
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
    (b.textfield = function(d,
        e, f) {
        this.initialize(d, e, f, {});
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
                    for (var k = 1; k <= this.txt2_len; k++) "\n" == this.txt2.substring(k - 1, k) && (this.linebreak_num++, this["linebreak" + this.linebreak_num] =
                        k);
                    this.count_limit = parseInt(this.txt2_len);
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
            this.txt || (this.txt =
                "");
            this.txt2 || (this.txt2 = "");
            this.txt += this.txt2.substring(this.count_num - 1, this.count_num + 1);
            this.msg.text = this.txt;
            console.log(this.parent.c_name.alpha);
            this.parent.c_name.c_name.text = exportRoot.tname;
            this.count_num += 2
        };
        this.frame_3 = function() {
            this.count_num >= this.count_limit ? (this.msg.text = this.txt2, this.stop(), exportRoot.txt_auto_flag = 0, exportRoot.gotoAndStop("scene_end")) : this.gotoAndPlay(2)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));
        this.msg = new a.Text("", "13px 'Arial'");
        this.msg.name = "msg";
        this.msg.lineHeight = 15;
        this.msg.lineWidth = 224;
        this.msg.parent = this;
        this.msg.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get(this.msg).wait(4))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 228, 75);
    (b.squear = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#808080").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape.setTransform(.725, .725);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.squear, new a.Rectangle(0, 0, 1.5, 1.5), null);
    (b.replace_effect8 = function(d, e, f) {
        this.initialize(d, e, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect7 = function(d, e, f) {
        this.initialize(d, e, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect6 = function(d, e, f) {
        this.initialize(d, e, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect5 = function(d, e, f) {
        this.initialize(d, e, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect4 = function(d, e, f) {
        this.initialize(d, e, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect3 = function(d, e, f) {
        this.initialize(d, e, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-407.6, -407.3, 815.3, 814.7);
    (b.replace_effect2 = function(d, e, f) {
        this.initialize(d, e, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-38.7, -38.7, 77.5, 77.5);
    (b.replace_effect1 = function(d, e, f) {
        this.initialize(d, e, f, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-69.6, -85, 137.3, 99);
    (b.question = function(d, e, f) {
        this.initialize(d, e, f, {});
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
        this.shape_2.setTransform(-.1745, .2105, 1.1606,
            1.1606, 10.2941);
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
    }).prototype = h(b.question, new a.Rectangle(-17.4,
        -26.3, 38.5, 53.900000000000006), null);
    (b.parts_particle1_3 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = c = new a.MovieClip;
    c.nominalBounds =
        new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.loght_gra = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AjmO5Igy2BIAoAFIAxWCgAjhrUID3gJIAxWBIj3AJgACVu7IBTgCIAxWBIhTADg");
        this.shape.setTransform(-2.875, 71.9727, 1, 1.8018);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-44.2, -100.7, 88.5, 345.4);
    (b.guide_parts_particle_1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.visible =
                0
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
    }).prototype = h(b.guide_parts_particle_1,
        new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.gr_nametxt = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.c_name = new a.Text("", "16px 'Arial'");
        this.c_name.name = "c_name";
        this.c_name.lineHeight = 18;
        this.c_name.lineWidth = 171;
        this.c_name.parent = this;
        this.c_name.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get(this.c_name).wait(1))
    }).prototype = h(b.gr_nametxt, new a.Rectangle(0, 0, 175, 29), null);
    (b.gr_effect_center = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FF0000").ss(1, 1, 1).p("ACvgDIivAAIAACVAAAiRIAACOAiugCICugB");
        this.shape.setTransform(0, .375);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.gr_effect_center, new a.Rectangle(-18.5, -15.2, 37, 31.2), null);
    (b.effect_001 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.circre_rainbaw_small;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.effect_001, new a.Rectangle(0, 0, 160, 160), null);
    (b.replace_chracacter8 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7));
        this.instance = new b.replace_character8_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character8_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character8_3;
        this.instance_2.parent =
            this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character8_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character8_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character8_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.instance_6 = new b.replace_character8_7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-150,
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
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-151, -129, 401, 500);
    (b.replace_chracacter7 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7));
        this.instance = new b.replace_character7_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character7_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character7_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character7_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character7_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character7_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.instance_6 = new b.replace_character7_7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-150, -129, .5, .5);
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
            },
            1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-151, -129, 401, 500);
    (b.replace_chracacter6 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7));
        this.instance = new b.replace_character6_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character6_2;
        this.instance_1.parent =
            this;
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
        this.instance_6 = new b.replace_character6_7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-150, -129, .5, .5);
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
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-151, -129, 401,
        500);
    (b.replace_chracacter5 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7));
        this.instance = new b.replace_character5_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character5_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character5_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150,
            -129, .5, .5);
        this.instance_3 = new b.replace_character5_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character5_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character5_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.instance_6 = new b.replace_character5_7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
                state: [{
                    t: this.instance_1
                }]
            },
            1).to({
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
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-151, -129, 401, 500);
    (b.replace_chracacter4 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7));
        this.instance = new b.replace_character4_1;
        this.instance.parent =
            this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character4_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character4_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character4_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character4_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151,
            -129, .5, .5);
        this.instance_5 = new b.replace_character4_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.instance_6 = new b.replace_character4_7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-150, -129, .5, .5);
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
            1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-151, -129, 401, 500);
    (b.replace_chracacter3 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7));
        this.instance = new b.replace_character3_1;
        this.instance.parent = this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character3_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 =
            new b.replace_character3_3;
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
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.instance_6 = new b.replace_character3_7;
        this.instance_6.parent =
            this;
        this.instance_6.setTransform(-150, -129, .5, .5);
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
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-150, -129, 570.2, 500);
    (b.replace_chracacter2 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7));
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
        this.instance_3.parent =
            this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character2_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-151, -129, .5, .5);
        this.instance_5 = new b.replace_character2_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.instance_6 = new b.replace_character2_7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-150, -129, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
                state: [{
                    t: this.instance_1
                }]
            },
            1).to({
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
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-151, -129, 401, 500);
    (b.replace_chracacter1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7));
        this.instance = new b.replace_character1_1;
        this.instance.parent =
            this;
        this.instance.setTransform(-150, -129, .5, .5);
        this.instance_1 = new b.replace_character1_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-150, -129, .5, .5);
        this.instance_2 = new b.replace_character1_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-150, -129, .5, .5);
        this.instance_3 = new b.replace_character1_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-150, -129, .5, .5);
        this.instance_4 = new b.replace_character1_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-150,
            -129, .5, .5);
        this.instance_5 = new b.replace_character1_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-150, -129, .5, .5);
        this.instance_6 = new b.replace_character1_7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-150, -129, .5, .5);
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
            1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-150, -129, 400, 500);
    (b.spread_star_inner = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.star1;
        this.instance.parent = this;
        this.instance.setTransform(-30, -33, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.spread_star_inner, new a.Rectangle(-30, -33, 60, 60), null);
    (b.guideline = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1))
    }).prototype =
        h(b.guideline, new a.Rectangle(-1, -356, 2, 357), null);
    (b.text_window = function(d, e, f) {
        this.initialize(d, e, f, {
            white: 0,
            black: 10
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_9 = function() {
            this.stop()
        };
        this.frame_19 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));
        this.b1 = new b.text_base;
        this.b1.name = "b1";
        this.b1.parent = this;
        this.b1.setTransform(0, 0, 1, 1, 0, 0, 0, 116, 35);
        this.b1_1 = new b.text_base_b;
        this.b1_1.name =
            "b1_1";
        this.b1_1.parent = this;
        this.b1_1.setTransform(0, 0, 1, 1, 0, 0, 0, 116, 35);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.b1
            }]
        }).to({
            state: [{
                t: this.b1_1
            }]
        }, 10).wait(10))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-116, -35, 232, 70);
    (b.spread = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.bg_pink_light;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1, 1, 0, -119.9999, 60.0001);
        this.instance_1 = new b.bg_pink_light;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0,
            0, 1, 1, 0, -29.9996, 150.0004);
        this.instance_2 = new b.bg_pink_light;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, 1, 1, 149.9988);
        this.instance_3 = new b.bg_pink_light;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, 1, 1, 60.0001);
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
        }).wait(1));
        this.instance_4 = new b.bg_pink_light;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, 1, 1, 0, -150.0001,
            29.9999);
        this.instance_5 = new b.bg_pink_light;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, 1, 1, 0, -59.9992, 120.0008);
        this.instance_6 = new b.bg_pink_light;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, 1, 1, 119.9993);
        this.instance_7 = new b.bg_pink_light;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, 1, 1, 29.9999);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }]
        }).wait(1));
        this.instance_8 =
            new b.bg_pink_light;
        this.instance_8.parent = this;
        this.instance_8.setTransform(0, 0, 1, 1, 0, 180, 0);
        this.instance_9 = new b.bg_pink_light;
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, 0, 1, 1, 0, -89.9991, 90.0009);
        this.instance_10 = new b.bg_pink_light;
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 0, 1, 1, 89.9991);
        this.instance_11 = new b.bg_pink_light;
        this.instance_11.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                },
                {
                    t: this.instance_8
                }
            ]
        }).wait(1))
    }).prototype = h(b.spread, new a.Rectangle(-220, -220, 440, 440), null);
    (b.reward = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.wt_item;
        this.instance.parent = this;
        this.instance.setTransform(60, 60, 1, 1, 0, 0, 0, 60, 60);
        this.instance.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: .5
        }, 10, a.Ease.quadInOut).to({
            alpha: .0117
        }, 10, a.Ease.quadInOut).wait(1));
        this.instance_1 = new b.replace_item_l;
        this.instance_1.parent = this;
        this.instance_1.setTransform(60,
            60, 1, 1, 0, 0, 0, 60, 60);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(21))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, -.4, 125.7, 120.4);
    (b.mc_bubble = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(20 * Math.random() + 1));
            this.scaleX = this.scaleY = 1 * Math.random();
            this.visible = !1
        };
        this.frame_21 = function() {
            this.visible = !0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(25));
        this.instance =
            new b.gr_bubble_parts("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .2, .2, 89.9956);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(20).to({
            _off: !1,
            scaleX: .9,
            scaleY: .9,
            rotation: 89.9874,
            alpha: .1016
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 89.9974,
            x: -20,
            alpha: 1
        }, 12).to({
            scaleX: .95,
            scaleY: .95,
            rotation: -89.9991,
            x: -40,
            alpha: .1016
        }, 12).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-106.5, -70, 169.5, 140);
    (b.logo_400_large = function(d, e, f) {
        this.initialize(d,
            e, f, {
                light: 1
            });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.play()
        };
        this.frame_14 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1));
        d = new a.Shape;
        d._off = !0;
        d.graphics.p("Ag8G1QgDgEgHgBQgHgBgEACQgZAKgLACQgVADgRgKQgDgCgHABIgLAEQgcAHgLABQgVAAgPgPQgDgCgGABQgGAAgFADQgaALgNABQgVADgSgNQgCgBgFABIgJADQgTALgPgBQgPgCgSgOQgDgDgHAAQgHgBgEACQgZAKgLACQgVADgRgKQgFgDgOAFQgWAHgMABQgSACgQgHIgCAAIgvACQgcABgTADQgUADgLgDQgOgDgIgMQgIgNACgNQACgNANgQQACgEABgHQAAgGgCgEQgOgYAFgQQAEgRAYgPIAagSQAPgIAPABIAOACQAHACAEADQApAiAvgLQAEgBAHABIALADIAfAEIAUAEQAKACAIADQANAFAMgBQAMgBALgHQAWgNARADQAQADASAVQABACAHAAQAGAAACgCQAQgSAggJQAggKAXAIQAFACAKABIAQABIAlAEIAIACIAIACIAaADQAPACAKADQANAEAJgCQAJgCAJgKQAGgHALgFQALgFAKgBIAogEQAXAAARAEQAYAGAaAAQAWABAcgEQAGAAALAGIATAKIAJAEQAGACACgCQATgPAaADQAPACAeAJIAZAEQAMAAAKgLQACgDAIgCIAMgEIAXgLIgBgIIgMgDIgMgCIjmgCIkLgCIg7gCIg8gBQhtABiTADQgGAAgHAKQgIAKgHAAQgHAAgKgJQgGgFgJgEQgKgEgEADQgNAIgKgGQgGgEgFgMQgDgHgBgNIgBgUIAOgBIAOgCIAigFQATgFAKgOIACgFIAAgFIgPgjIgNALIgRgQQgKgHgEABQgVAGgLgKIgHgNQgCgHABgMIAAgGIghgNQgTgHgLgHQgzghgZgaQgWgaAFgWQAFgWAfgPIAZgNIAXgOIADABIAEACIgDgRIhYAHIABgFIACgDIAagSQAPgLAMgFQAMgGAEgFQAFgHAAgLQAAgUACgcIAEgwIAHAAIAFAeIAFAfQAAAEAEAGIAFAJIALgTIABgDIAAgGQAPAEAFgIQADgFgBgPIgCgbIAAgBIgBgNIAAgBIABgMIAAgBQABgKAEgQIAHgbIAKAKIAMg6IADAAIAOBXIAHgCIAQhyIAFAAIASBwIAEgaIADgQQACgJADgIIAKBBIAFgBIADgWIANAxQAHAcAEAUQACANAFACQAFABALgIQgMgPgDgTQgCgQADgVQABgIgEgHQgHgPADgHQAEgGAQgFQgEgTAHgKQAHgKAVgFQAGgBAHgIIAMgOQALgIAFABQANAEAJgBQALgBAKgIQALgKAOAHQAOAGAHARQALgMAIAAQAJABAHAPQABAEAFABQAUAIANASQAKAOAHAZQARgbAqgJIAhgHQAUgFAMgIQAYgRApAEIABABIAWACIAKACIAJAAIAYABIABAAIgPANIA5ADIAjABIAjABQAKABAGgFQAGgFAAgIQgBgIgEgGQgFgHgLABQgFABgFgGIAmgCQAWACAQAKQAXAPAcAEQAHABAKgFIATgIIANAZIAYACIAeABQAHAAANgCQANgDAHAAQAHAAAMADIAUADIANAAIASgCIghgaIARgNQAFAMAGAFQAIAGAMgDIAHAAIAIABIgJAVIA4AAIAPAPQAHAHAAACQACAGgIAGQgEAEgCALIgBASIgzAbIABAGIBJAPQAJADACADIAQAXIAQAXQADAEAHAFIALAIIAFgGIgYgXIAggYIAWAKIgVAXIAEAEIASgPIAFABIgJAcQAGAOAKADQAKAEAQgHQASgJAOAVQAIALgGARQgFAQgMAFQgCAEACAKQAAAIgLAAIgCAFIgDAOIgTgJIgSALQgCACgCAEQgBADABADIAHAVIAHAVIADAOIACATQAOAIAHATQAGARAAAVQAAAHgIAKIgPAQIgDgEIADAXIAAAAIgJgGIgKgGIAAAAIgBAAIAAAAIAAAAQgKgDgLAHQgIAFgSgBIggAAQgIAGgNgDQgNgDgRgNIgOgKQgJgGgIgEIAIATQAFAMAFAHQADAEAHAEQAHADAGgBIBHgCIBGgDIAcAAIAOgVQANAIgGALIgFAKQgDAGgBAFIAGgHIACgCIAFgEIACgBIAEgDIACAGIABAGIgHAmIgUgKQgFAJAJAGIAPAJIgKATIgbgKIgEAVQgCANgFAFQgGAGgOADIgXAHIAIATIgYAMIgJgOIgaADIgZAEIgaAHIgdAIQgGgKgJgEQgMgFgOAFIAGAWIAGATQACAEAFADQAGACADgBQASgGAHgFQANgJADgOQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIApAGIAoAFQAKABARAAIAagBQAVABALAMQALAMgCAWQgBARAGAPQAGAOgBALQgBAMgKAKQgLAOgLAFQgNAGgQgEQgHgCgLAAIgRAAIgVgDIgUgDIgNgCQgIgBgEACQgdAOgPgDQgOgEgUgZQgCgCgIgBQgHAAgCACQgOAOgZAHQgcAHgNAFQgRAFgUgFQgOgEgTgMQgIgFgIAAQgFAAgLADQgMADgTACIgfAEIgRADQgWAHgPgEQgPgEgNgTQgHgIgHAAQgGABgIAGQgVARgcAHQgXAFgeAAIgkgBQgUgBgPADIgJABQgUAAgOgRgAHtB5IAXADIgagqQgJADgJAIIgQAOQgTAQgVgJIAAAGIA5AAIALgOgAp/gpQACAKADADQALAGAQAIIAcANIACgEIgjhDIgDAFIgXgIQgFgCgKgGQgLgHgKAGQgHADgHALQgGAKAHAHQACADANAIIAFACIADABIATgYIAGAWgAnohCIAHANQADAHAAAFQAAAFgFAIIgJAOQAMgHAIgQQAHgQgFgKQgCgCgFgDIgJgEgApUh1IgPAIIAkAbIADgEIgHgKIAgAAIAAgGIghgHIgEgMIgMAEgAKyiUQABAOALAPQAMgJgCgUQgBgUgNgLQgKAPACAQgAJCjrQAQASAKANQAEAFACAKQACALgDADQgKAJgBAMQgBAIAEAMIAVgCQAGgBAEgDIAAgDIgCgFQgBgGACgDIACgBIAFAAQAPADAIgFQAJgEAEgOQABgEgDgFQgCgGgDgCQgCgCgGACIgJAFIgIAHIgIAJQgHgjgXgXQgTgSgkgRIAdAggApTjKQgFAKAAARIgBAdQAAABAQAFQgCgUAKgHQAGgEASgDQAPgCAFgJQAGgIgIgKQgLgOgVAAQgVAAgHAPgACAj8IgJAGIAEAGIAPAAIAHATQALgVgWgMIgBAAQgCAAgDACgAArkhQAHARAZAIQAbAJAIAKIAHgJIgSgJIAHgLIgCgGIgKACQgGACgDACQgJAFgFgCQgFgCgCgJQgDgNgDgBIgBAAQgEAAgKAHgAIHlsQgFABgGAHQgEADgHAFIgPAJIAcARIgnASIAfAFIgIgFIAMgFIAMgGQAOgKADgKQABgFgBgHQgCgHgDgFQgEgFgFAAIgCAAgABQlmIBGAFQgMgQgagCIgFAAQgVAAgGANgAAwlrIAVgUIgigGgACFmfQgCgCgKAEQgHACgBgJQAAgBAIgDIAPgEIAJgBIANAAQgGANgDADQgCADgDAAQgFAAgGgFgAFmm8IAegHIACALIgdAIIgDgMg");
        d.setTransform(5.4479, -14.1528);
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-90.9, -63, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: -69.2,
            y: -80.5
        }, 0).wait(1).to({
            x: -56.6,
            y: -67.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: -34.15,
            y: -6.25
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 39.35,
            y: 24.05
        }, 0).wait(1).to({
            x: 59.45,
            y: 42.7
        }, 0).wait(1).to({
            x: 73.15,
            y: 55.3
        }, 0).wait(1).to({
            x: 83.25,
            y: 64.7
        }, 0).wait(1).to({
            x: 90.8,
            y: 71.7
        }, 0).wait(1).to({
            x: 96.4,
            y: 76.9
        }, 0).wait(1).to({
            x: 100.25,
            y: 80.45
        }, 0).wait(1).to({
            x: 102.5,
            y: 82.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 85.75,
            y: 104.95
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.wt_logo;
        this.instance_1.parent = this;
        this.instance_1.setTransform(1.25, -5.3, .82, .82, 0, 0, 0, 100, 78.4);
        this.instance_1.alpha = 0;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
                _off: !1
            },
            0).to({
            alpha: .8008
        }, 3, a.Ease.quadIn).to({
            alpha: .3008
        }, 9, a.Ease.quadOut).to({
            _off: !0
        }, 1).wait(1));
        this.instance_2 = new b.logo_1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-80.75, -69.6, .82, .82);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            startPosition: 0
        }, 0).wait(14))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-80.7, -69.6, 172.3, 114);
    (b.lightburst_container = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.asset_efc_flashWhite1;
        this.instance.parent = this;
        this.instance.setTransform(55.1, 4.4, .3426, .0553);
        this.instance_1 = new b.asset_efc_flashBlade1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(55.1, 4.4, .4603, .4828, 0, 180, 0);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: .4603,
                    scaleY: .4828,
                    skewX: 180
                }
            }, {
                t: this.instance,
                p: {
                    scaleX: .3426,
                    scaleY: .0553
                }
            }]
        }).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0
                }
            }, {
                t: this.instance,
                p: {
                    scaleX: .7384,
                    scaleY: .2174
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 1.2592,
                    scaleY: 2.4138,
                    skewX: 0
                }
            }, {
                t: this.instance,
                p: {
                    scaleX: .7384,
                    scaleY: .7165
                }
            }]
        }, 1).to({
            state: []
        }, 1).wait(11))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-131.4, -88.1, 373.1, 185.1);
    (b.glitter_first_inner = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.pointGlitter2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .0121, .6227, 59.2024);
        this.instance_1 = new b.pointGlitter2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0,
            0, .0109, .7287, -30.7981);
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(255,252,237,0.051)", "rgba(255,255,255,0)"], [0, .055, .761, 1], 0, 0, 0, 0, 0, 5.4).s().p("AgZAtQgTgLgFgUQgGgVALgSQALgTAUgFQAVgGASALQATALAFAUQAGAVgLASQgLATgUAFQgIACgGAAQgNAAgMgHg");
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = h(b.glitter_first_inner, new a.Rectangle(-18.5, -21.7, 37.1, 43.4), null);
    (b.cursol_container_w = function(d, e, f) {
        this.initialize(d,
            e, f, {});
        this.frame_8 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.cursor_inner_w;
        this.instance.parent = this;
        this.instance.setTransform(9.55, 5.15, .127, .1282, 0, 0, 0, .4, 0);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 0,
            x: 9.5,
            y: 5.3277
        }, 0).wait(1).to({
            y: 6.0219
        }, 0).wait(1).to({
            y: 6.8238
        }, 0).wait(1).to({
            regX: .4,
            regY: -.4,
            x: 9.55,
            y: 7.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 9.5,
            y: 6.9223
        }, 0).wait(1).to({
                y: 6.2281
            },
            0).wait(1).to({
            y: 5.4262
        }, 0).wait(1).to({
            regX: .4,
            x: 9.55,
            y: 5.15
        }, 0).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(4.1, .4, 10.8, 11.4);
    (b.cursol_container = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_8 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.cursor_inner;
        this.instance.parent = this;
        this.instance.setTransform(9.5, 6.95, .1258, .127, 0, 0, 0, 0, -.8);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regY: 0,
            y: 7.2559
        }, 0).wait(1).to({
            y: 8.0606
        }, 0).wait(1).to({
            y: 8.9901
        }, 0).wait(1).to({
            regY: -.4,
            y: 9.15
        }, 0).wait(1).to({
            regY: 0,
            y: 8.9941
        }, 0).wait(1).to({
            y: 8.1894
        }, 0).wait(1).to({
            y: 7.2599
        }, 0).wait(1).to({
            regY: -.8,
            y: 6.95
        }, 0).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(4.1, 2.4, 10.8, 11.5);
    (b.asset_efc_particle2 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.asset_efc_particle_p1;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.asset_efc_particle_P2;
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
        }, 0).wait(1).to({
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
            },
            0).wait(1).to({
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
    }).prototype = c = new a.MovieClip;
    c.nominalBounds =
        new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.asset_efc_particle1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.r = Math.floor(3 * Math.random() + 2);
            this.gotoAndPlay(this.r)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.asset_efc_particle_p1;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 =
            new b.asset_efc_particle_P2;
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
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.arrow_container = function(d, e, f) {
        this.initialize(d,
            e, f, {});
        this.frame_16 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(16).call(this.frame_16).wait(1));
        this.instance = new b.arrow_inner;
        this.instance.parent = this;
        this.instance.setTransform(-1.5, -1.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -5.6,
            regY: -4.9,
            x: -7.05,
            y: -6.35
        }, 0).wait(1).to({
            x: -6.85,
            y: -6.15
        }, 0).wait(1).to({
            x: -6.6,
            y: -5.9
        }, 0).wait(1).to({
            x: -6.3,
            y: -5.6
        }, 0).wait(1).to({
            x: -6,
            y: -5.3
        }, 0).wait(1).to({
            x: -5.75,
            y: -5.05
        }, 0).wait(1).to({
            x: -5.6,
            y: -4.9
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: -5.6,
            regY: -4.9,
            x: -5.6,
            y: -4.9
        }, 0).wait(1).to({
            x: -5.8,
            y: -5.1
        }, 0).wait(1).to({
            x: -6.05,
            y: -5.35
        }, 0).wait(1).to({
            x: -6.35,
            y: -5.65
        }, 0).wait(1).to({
            x: -6.65,
            y: -5.95
        }, 0).wait(1).to({
            x: -6.9,
            y: -6.2
        }, 0).wait(1).to({
            x: -7.05,
            y: -6.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -1.5,
            y: -1.5
        }, 0).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-12.7, -11.8, 12.7, 12.3);
    (b.hq_day = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_20 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(20).call(this.frame_20).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("A0aXZMAAAguxIBeAAIAABxIB5AnQAJADAOgGQAXgKAYgPQAOgIAJgBQANgBALAKQACADAFACQAEABACgBQAQgHARAIIAdAOQAKAEAKABQAMABAKgCIAogMIAogMQAFgBAHACQAGADAEADQAtAmAtgjQAdgWAbgBQAdgCAcAYQAUAQAZACQAVACAbgKQATgGAbgFIAugKQAHgBAKACQAOADAJAGQAdAQAgACQAeACAhgMQBWgfBJAkQAkARAegTQA6gkBFAkQAmAUAegVQA1giBAAkQAbAQAagQQA0ggA0AhQAOAJAMgCQALgBALgMQAZgbAdASQADACAFAAQAFACADgCQAVgJARATQAQASAWgKIAFgCQBXgsBVAtQAGADALgCQAKAAAHgFIAfgQQATgHARAIQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAXgPAaAKQAPAFAeAQQAVAIATgGQASgHAZgKIAqgSIAAhkIB4AAMAAAAukg");
        f = (new a.Graphics).p("A3JaRMAAAguwIBeAAIAABwIB5AoQAJACAOgGQAXgKAYgOQAOgJAJAAQANgCALALQACACAFACQAEACACgCQAQgHARAIIAdAPQAKADAKABQAMABAKgCIAogLIAogMQAFgCAHADQAGACAEADQAtAmAtgiQAdgWAbgCQAdgBAcAYQAUAQAZACQAVABAbgJQATgGAbgGIAugKQAHgBAKACQAOAEAJAFQAdARAgABQAeACAhgMQBWgeBJAkQAkAQAfgSQA6glBFAlQAlAUAegVQA1giBAAkQAbAPAagPQA0ghA0AiIAEACICDoEIQHEGIjUNGIiKgjMAAAAj4g");
        var k = (new a.Graphics).p("A3JahMAAAguxIBeAAIAABxIB5AnQAJADAOgHQAXgJAYgPQAOgIAJgBQANgBALAKQACADAFABQAEACACgBQAQgIARAIIAdAPQAKAEAKABQAMABAKgCIAogMIAogMQAFgBAHACQAGACAEAEQAtAlAtgiQAdgWAbgCQAdgBAcAYQAUAQAZACQAVACAbgKQATgGAbgGIAugKQAHgBAKACQAOAEAJAGQAdAQAgACQAeABAhgLQBWgfBJAkQAkARAfgTQAsgbAyANIC1oRIE1BqIAThLIQHEGIjUNGIiKgjMAAAAj5g"),
            n = (new a.Graphics).p("A3JahMAAAguxIBeAAIAABxIB5AnQAJADAOgHQAXgJAYgPQAOgIAJgBQANgBALAKQACADAFABQAEACACgBQAQgIARAIIAdAPQAKAEAKABQAMABAKgCIAogMIAogMQAFgBAHACQAGACAEAEQAtAlAtgiQAdgWAbgCQAdgBAcAYQAUAQAZACQAVACAbgKQATgGAbgGIAugKQAHgBAKACQAOAEAJAGQAPAIAPAEIC3ofIFxB9IArh+IE1BqIAThLIQHEGIjUNGIiKgjMAAAAj5g"),
            p = (new a.Graphics).p("A3JahMAAAguxIBeAAIAABxIB5AnQAJADAOgHQAXgJAYgPQAOgIAJgBQANgBALAKQACADAFABQAEACACgBQAQgIARAIIAdAPQAKAEAKABQAMABAKgCIAogMIAogMQAFgBAHACQAGACAEAEQAaAVAagCICgoXIGCB0IAriCIFxB9IArh+IE1BqIAThLIQHEGIjUNGIiKgjMAAAAj5g"),
            r = (new a.Graphics).p("A3JakMAAAguwIBeAAIAABwIBmAiICwopIFrBzIAchdIGCB0IAriCIFxB9IArh+IE1BqIAThLIQHEGIjUNGIiKgjMAAAAj4g"),
            t = (new a.Graphics).p("AzzbcMAAAgoEImthtIDUtHIJDCTIALgiIFqBzIAchdIGCB0IAsiCIFwB9IAsh+IE0BqIAThLIQIEGIjVNGIiJgjMAAAAj4g");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: e,
            x: 481.2,
            y: 272.8
        }).wait(5).to({
            graphics: f,
            x: 498.7,
            y: 254.35
        }).wait(1).to({
            graphics: k,
            x: 498.7,
            y: 252.825
        }).wait(1).to({
            graphics: n,
            x: 498.7,
            y: 252.825
        }).wait(1).to({
            graphics: p,
            x: 498.7,
            y: 252.825
        }).wait(1).to({
            graphics: r,
            x: 498.7,
            y: 252.45
        }).wait(1).to({
            graphics: t,
            x: 477.25,
            y: 246.85
        }).wait(11));
        this.instance = new b.replace_day_0;
        this.instance.parent = this;
        this.instance.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_1 = new b.replace_day_1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_2 = new b.replace_day_2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_3 = new b.replace_day_3;
        this.instance_3.parent = this;
        this.instance_3.setTransform(480,
            270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_4 = new b.replace_day_4;
        this.instance_4.parent = this;
        this.instance_4.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_5 = new b.replace_day_5;
        this.instance_5.parent = this;
        this.instance_5.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_6 = new b.replace_day_6;
        this.instance_6.parent = this;
        this.instance_6.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_7 = new b.replace_day_7;
        this.instance_7.parent = this;
        this.instance_7.setTransform(480, 270, .5, .5, 0, 0,
            0, 960, 540);
        this.instance_8 = new b.replace_day_8;
        this.instance_8.parent = this;
        this.instance_8.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_9 = new b.replace_day_9;
        this.instance_9.parent = this;
        this.instance_9.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_10 = new b.replace_day_10;
        this.instance_10.parent = this;
        this.instance_10.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_11 = new b.replace_day_11;
        this.instance_11.parent = this;
        this.instance_11.setTransform(480, 270, .5, .5, 0, 0, 0, 960,
            540);
        this.instance_12 = new b.replace_day_12;
        this.instance_12.parent = this;
        this.instance_12.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_13 = new b.replace_day_13;
        this.instance_13.parent = this;
        this.instance_13.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        this.instance_14 = new b.replace_day_14;
        this.instance_14.parent = this;
        this.instance_14.setTransform(480, 270, .5, .5, 0, 0, 0, 960, 540);
        e = [this.instance, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14
        ];
        for (f = 0; f < e.length; f++) e[f].mask = d;
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
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
                state: [{
                    t: this.instance_8
                }]
            },
            1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: [{
                t: this.instance_13
            }]
        }, 1).to({
            state: [{
                t: this.instance_14
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: []
        }, 5).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 647, 422.5);
    (b.day10mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("AC5MBIgWgKQgNgGgIgFQgRgLgHgVQgEgLgDgbQgLhYgFhVIgNkNIgMgFQgtgNgPgaQgNgZAHgvQAKg1AjglQASgTAZgLQAXgIAbgBQBKgBBSALQBAAIADBJIAQFaIAHB4IAGB5QADBUhSAGIgwADIgxADIgJABIgJADgAisL3QgugDgogkQgWAagZAFQgaAGgggPQgMgFgWADQgaAGgMABIgeAHQgTAFgLgCQgegDgUgfQgUggAIgfQAEgPAJgWIAPgkQADgKgCgKQgGgfAJgUQAIgUAagQIAEgCIAEgDQASgfAhgFQAOgCAwAEQAKABALAIQALAIAHAKQAQAaAFAfQADAUAOAQQAKALAUANIgLgeQgXgwARgcQANgVAtgRQAagKAXAJQAUAIAMAVQAMAVAOAEQAwAPALAjQAKAjggAmQASAkgGAgQgGAfgeAWQgbAVgkAAIgHAAgALvL0QhugBggAAQgsABgRgPQgRgPgCgrQgChMADhzQABgXAPgPQAPgOAYgBQBegEA+gBQBGgBAEBIIAABdIACAAIgDA5QgCAigDAWQgDAXgQAMQgOAKgXAAIgCAAgANeBSQgmgPgbgyQgjAXgUAHQggALgfgKQhFgWgGhFIhbgLQgPgCgKADQgNADgKAMQgVAZgbAHQgcAHgfgJQgWgHgKgRQgKgRACgYIgXgHQgpBHhCgMQgLgCgPgKIgagQQgLgIgHgDIgHgDIgGgCQglgZg5AIIgvAJQgcAEgTAAQgCgBgEAEQgmAegRABQgRABgngaQglAvhAgEIgEAAIgDABQgSAYgmAJQgsAIgUAIQgLAEgNACQgoAEgagjIgSAlQgLAWgjANQgkANgbgLQgRgGgJgOQgKgPABgTIABgdQgdgCgRgRQgQgQgGgdQgFgaAKgUQALgVAZgIQAzgQBpgdIAxgPQAfgKATgFQArgKAZALQAZALAYAnQAlgxA7AdIALgYQAGgOAHgHQAJgKAMgHQANgHALgCQAhgGAWAEQAcAHATAZQADAFAOAAIAXgBQA0AAAmgBIAJgCIAIgEIAWgMQANgIAIAAQAQAAAWgEIAmgHQAtgHAfANQAFACALgFIATgJIAKAAIAoACQAXACAQACQA3AJAjANQAGADAFAMIAKAVIBxAPQAKABAEgDQAfgbAngDQAggEAqANQAJACAHAGQAJAHADAHQAFALAKAFQAFACAPAEIBBANIAIACQAFABACgCQATgLAWABQAQABAZAJQAZAJAOAQQAOARABAYQABAYgMAQQgMAQgZALIgVAKIgUAMQADAZgLAXQgNAYgUAHQgRAFgRAAQgSAAgQgGg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 105.9898,
            y: 76.8875
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day10;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day9mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("ABGMBQgrgRgPgcQgOgcANglQAFgPASgRQBrhhAWiKQAJg5gOgzQgKgogVgLQgWgKgtALIgkAMQgWAFgPgHIgIgBQgfgMgZg4QgZg4AOgfQAFgMALgLQAKgLAMgGQBog5BpgBQBpAABUBCQBSBDAZBnQARBDgJBCQgHA/gfBBIALAEQAGACAEABQAiACARAhQAQAdgGAhQgGAigGASQgJAcgPAVQgpA4hLAGIhlAGIhlAFIgGACIgHACgAiyL3QgtgFgigjQgXAbgZAFQgbAGgggPQgMgGgVAEIglAHIgfAHQgTAEgMgBQgegDgUggQgTggAIgfQAEgPAJgWIAPgkQAEgJgCgJQgFggAHgUQAIgZAbgLIAGgEQARgeAfgGQATgEApAEQALACAOAIQALAIAJALQARAVAEAfQADAWAMARQALAOAXARQgJgbgFgKQgXgxATgcQAPgVAugQQAZgJATAIQASAHAQAYIAKAQQAHAIALADQAuALAKAlQAKAkgfAjQAjBQg/AtQgaASgiAAIgNAAgALtL0QhegCgwABQgrABgQgPQgSgPgBgqQgChOADhxQAAgYAQgPQAOgOAYgBQBegEA+gBQBJgBABBKIABBaIACAAIgDA5QgBAhgEAXQgGAugzAAIgDAAgANeBSQgmgPgbgyQgjAXgUAHQggALgfgKQhFgWgGhFIhbgLQgPgCgKADQgNADgKAMQgVAZgbAHQgcAHgfgJQgWgHgKgRQgKgRACgYIgXgHQgpBHhCgMQgLgCgPgKIgagQQgLgIgHgDIgHgDIgGgCQglgZg5AIIgvAJQgcAEgTAAQgCgBgEAEQgmAegRABQgRABgngaQglAvhAgEIgEAAIgDABQgSAYgmAJQgsAIgUAIQgLAEgNACQgoAEgagjIgSAlQgLAWgjANQgkANgbgLQgRgGgJgOQgKgPABgTIABgdQgdgCgRgRQgQgQgGgdQgFgaAKgUQALgVAZgIQAzgQBpgdIAxgPQAfgKATgFQArgKAZALQAZALAYAnQAlgxA7AdIALgYQAGgOAHgHQAJgKAMgHQANgHALgCQAhgGAWAEQAcAHATAZQADAFAOAAIAXgBQA0AAAmgBIAJgCIAIgEIAWgMQANgIAIAAQAQAAAWgEIAmgHQAtgHAfANQAFACALgFIATgJIAKAAIAoACQAXACAQACQA3AJAjANQAGADAFAMIAKAVIBxAPQAKABAEgDQAfgbAngDQAggEAqANQAJACAHAGQAJAHADAHQAFALAKAFQAFACAPAEIBBANIAIACQAFABACgCQATgLAWABQAQABAZAJQAZAJAOAQQAOARABAYQABAYgMAQQgMAQgZALIgVAKIgUAMQADAZgLAXQgNAYgUAHQgRAFgRAAQgSAAgQgGg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 105.9898,
            y: 76.8875
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day9;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day8mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("ABeL4QgzgNgmgbQgugigHg8QgHg5AggnQAVgZAcgDQAcgDAcATQAbATAjAKQAIADALgDQAKgCAJgEQAFgDAEgKQAFgJgDgFQgFgMgXgMQgFgDgJgBIgOgCQgdgGgQgUQgRgUABgcQABgNADgUIAFghQADgbARgQQAPgPAbgGIAVgCQALgCgBgOQgCgRgHgLQgKgNgQgBQglgDgVAIQgoAPgdgLQgcgLgRgkIgPgdQgKgSgFgLQgNggAJgaQAJgYAbgPQBlg1B0AIQB+AJBNBQQBqBugwCfQgEAOACAKQACAKAHALQAuBBgHBRQgHBNgzA8QgvA2hCAZQg6AWhPABQg3gBgogJgAiwLxQgvgEgigjQgXAbgZAFQgaAGghgPQgMgGgWAEQgZAGgMACIgfAHQgSADgMgBQgdgDgUgfQgUgeAHgfQAEgPAJgWIAPglQAEgNgBgHQgGghAIgTQAHgTAcgRQAFgCABgCQAQgeAggGQASgEApAEQAMACANAIQANAIAIALQAPAVAHAmQADATAOAPQAJALAUANIgFgQIgGgPQgYgyATgcQAOgVAugQQAZgJATAIQATAHAPAXIAMARQAIAIALADQAtAMAJAlQAKAkghAjQAUAigIAiQgHAhgcAVQgbAUgjAAIgMgBgALuLvQhPgCg/ABQgrABgRgPQgSgQgBgpQgChOADhxQAAgXAQgPQAOgPAYgBICcgFQBJgBABBKIABBZIACABIgDA5QgBAhgEAXQgGAugzAAIgCAAgANeBNQgmgPgbgyQgkAXgTAHQggALgfgKQhFgXgGhEIhbgLQgPgCgKADQgNADgKAMQgVAZgbAHQgcAIgfgKQgWgHgKgRQgKgQACgZIgXgHQgpBHhCgMQgLgCgPgKIgagQIgSgLIgHgDIgGgCQglgZg5AJIgvAIQgcAEgTgBIgGAEQgmAegRABQgRABgngaQglAvhAgEQgGAAgBABQgSAXgmAKQgsAIgUAIQgLAEgNACQgoAFgagkIgSAlQgLAWgjANQgkANgbgLQgRgGgJgOQgKgPABgUIABgcQgdgCgRgRQgQgQgGgdQgFgaAKgUQALgVAZgIQAzgQBpgdIAxgPQAegKAUgFQArgKAZALQAZALAYAnQAlgxA7AdIALgYQAGgOAHgHQAJgKAMgHQANgHALgCQAhgHAWAFQAcAHATAaQADAEAOAAIAXgBQAsAAAugBQAEAAAFgCIAIgDIAWgNQANgIAIAAQAQAAAWgEIAmgHQAtgHAfANQAFACALgFIATgJIAKAAIAoACQAXACAQACQA2AJAkAOQAGABAFAMIAKAWIBxAPQAKACAEgEQAfgbAngDQAggDAqAMQAJACAHAHQAJAGADAHQAFALAKAFIAUAGIBBANIAIACQAFABACgCQATgLAWABQAQABAZAJQAZAJAOAQQAOARABAYQABAYgMAQQgMAQgZALIgVAKIgUANQADAYgLAXQgNAYgUAHQgRAGgRAAQgSAAgQgHg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 105.9898,
            y: 77.05
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w3;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day8;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day7mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("AFTL/QhWgDg6gHQgjgFgSgWQgRgWAAglIAAgVIg2gEIg1gDQgggBgRgFQgbgIgSgWQAPAvgGAfQgIAmgnAVQhJAmhHhAQgWAZgaAGQgaAGgdgNQgMgGgWACIglAGQgHABgZAHQgTAFgLgBQgfgDgUgfQgUgfAIggQAEgOAJgXIAOgkQAEgMgCgLQgGgcAJgUQAIgUAYgOIAGgDQADgBABgCQARgfAhgGQANgCAvAEQAKAAAMAJQALAIAIALQATAZACAaQACAWAOASQAJALAZAXIgNglQgHgUgDgNQgEgWAHgSQAKgcAqgMQAqgNAZAQIAFACQAAABABAAQAAAAABABQAAAAABABQAAAAAAAAQAJAYAXAPQALAHAhAOIBYlIIAoiJQAKgiAZgNQAagPAjAIQArAJARACQAcADAQAbQARAbgHAcIgLA1IgNAyIBEAJIBDAIQAhADARAVQAQAUACApIABAzIgBA1QApABAWAUQAXAWAEArQALgaARgKQAQgJAYAAIBGgCIBGgDQAmgBATASQATASABAmQACBzgCBAQgBAkgRARQgRARgkgBQgegCgtAAIhLABQg+AAgCg/IgChBIgBhCIABggQABgVAAgMIgHAgQgFATgFAMQgXA5g3AWQgLAEgEAHQgEAHAAALQAAAdgGAXQgGAWgUAOQgTAOgWAAIgCAAgANUBLQgjgSgTgqQgoAYgPAGQghALgfgKQhFgWgHhEIhXgMQgRgCgMADQgNAEgLANQgSAWgZAIQgYAHgdgGQgagFgNgSQgMgRACgbIgWgHIgOASIgQASQgXAWgkAEQglADgTgVQgLgMgbgNQgagMgKgMQgDgDgGAAIiVASQgFABgHAGQgcAagTACQgUABgggVIgJgGQgTAZgaALQgXAJgZgBIgpATQgVAKgOAFIguANQgaAHgVAAQgMABgRgJQgUgLgKgFQgKApghATQgdAQglgFQgbgEgLgOQgLgOAAgcIAAgZQgpgKgSgdQgTgeAPghQAFgLALgLQALgKAMgEQAfgLAugNIBPgWIBlgeQAmgLAeAPQAbAOARAjQAng0A6AfIAMgaQAHgOAGgJQAHgIAIgGQAJgHAIgBQAvgFANACQAgADAUAcQAEAFAQAAIAbgBQAsABAngBQANAAAEgFQAMgNATgFQALgDAYgCIAngFQAYgEAPgBQAJAAAPADIAYAEIAGABIAGAAIAegFQASgDAMAAQAtAAA4AFQAdADANALQAOAMAIAcIBzAQQAMABACgDQALgRAYgGIApgIQAYgIAhANQAfANAPAWQAFAHAVAFQAgAJATABQASABAfgEQA6gJAmAjQARAPAFATQAFAUgKAUQgKAWgTANQgKAHgRAHIgcALQADAegNAXQgNAXgWAHQgPAEgOAAQgXAAgVgMg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 106.0348,
            y: 76.7393
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w4;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day7;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day6mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("ACbMDIgigKQg4gOgag0QgZgzATg1QAIgWAYgMQAXgLAaAEQAcAEAOgBQAXgBAQgMQAHgGAGgKQAGgKgCgGQgCgHgJgGQgLgIgHABQg3AEgqAMQgjAKgVgEQgYgEgOgXQgPgVgEglQgFgjgEg2IgIhZQgIhZgFgkQgOhqBhgFQBAgEBegHICcgNIgbg7IAGgDIgWgIIgMAPQgXAmgrAIQgnAIgXgVQgNgLgagOQgbgPgLgKQgGgFgHABIiIAQQgPACgOANQgWAUgWAAQgVgBgkgWQg4AygqgIIggASQgRAIgKAEQgTAGgaAHIguALQgVAFgTgJQgQgHgRgVQgIAkgWAUQgVASgjAFQghAFgWgRQgWgSAEggIAAgMIAAgLQgpgLgTgdQgSgdAOghQAFgLALgKQALgMAMgDQAfgLAvgNIBQgWIBlgfQAlgLAeAQQAdAPAOAiQApg1A4AgIAMgaQAHgOAHgIQAIgJAMgGQAMgHALgCQAigGAGAAQAXAAAMAOQATAVAYAEQAQADAggFQAMgCAVACIAhADQAEAAAFgCIAIgFIASgKQALgGAIgBIA5gLQAhgFAYACQAUACAlgCQAngCASABQAvADBDAGQAVACAMAOQAKALAFAXIB1APIAIABQAFgBABgCQAIgNARgEIAdgIQAlgNArAPQAeALAIAPQAFAJAIAEQAFADALADQAdAHArAIQALACAIgEQAYgNAbAGQARAEAdAPQATAJAIASQAIARgDAVQgFAtgpAMQgJACgMAIIgUAMQABAdgNAXQgMAWgVAGQgmALghgQQgkgRgWguQgkAYgTAHQggALgfgKQhHgXgEhFIg1gFQgfgEgVgBQgLAAgTANIgYASIgXASQAdAPAIAgQAIAegKApQgNA5gYAcQgYAcg3AXIAjAVIAiAXQBTA7AQB4QAOBshIBWQg/BLhYATIgcAHIgcAHgAivL0QgtgEglgjQgXAagZAGQgaAFgggPQgMgFgVADIgkAGIggAIQgTAFgLgBQgegDgUgfQgUgeAHgfQAEgPAJgWIAOglQAFgNgDgMQgFgbAJgUQAJgUAXgOIAFgCIAEgDQAPgeAfgHQAOgCAsABQAoABALAjIALAmQAHAWAIAOQAEAKAMALIAXARIgFgRIgGgRQgYgxAVgdQAQgWAvgOQAtgOAaAqQAIANAJAIQALAIAOAEQAmALAHAkQAHAlgeAhQASAhgGAhQgGAhgcAVQgcAVgkAAIgKAAgAJJLvQgWAAgQgNQgPgOgBgUQgDhrADhwQAAgUAQgOQAQgNAWgBICYgFQAmgBAUASQASASABAnIABAtIgBAtIADAAIgDA5QgBAigDAXQgDATgNALQgNALgVABIhJAAIhmgBg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 106.0003,
            y: 77.15
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w5;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day6;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day5mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("AAuLWQgkgWgagkQgYgfgTguIgTAWQARAkgGAfQgGAhgfAXQggAXgpgEQgrgFgmgiQgXAZgYAGQgZAGgggPQgMgFgWADIglAGIgkALQgVAFgPgIQgggTgIgQQgcg5AlhCQAEgHACgKQACgJgBgJQgEgbAJgTQAJgTAXgOIAFgCIADgDQAQgeAfgGQANgDAtABQAoACALAkIALAlQAHAWAHAOQAEAKAMALIAUATIAEgDIgLgfQgHgSgDgNQgEgWAGgSQAKgcArgNQArgNAZARIAFADIADADIAMAUQAIANAHAFQAHAFANAEIAYAGIACgBQgJg6AShFQAGgWAihiQAQgrAbhAIAvhqQAKgXAPgNQARgMAWgBQAtgCBZAEQAfACAQAdQAPAcgGAdIgZB4QDhApAcDJIAogFIAogFQAygDBDgCQAlgBATASQATARABAlQADBrgDBMQgBAjgQAQQgSASglgCQgdgBgtAAIhJAAQggAAgQgQQgQgPgBggIgHhvQgzBuhhAtQhXAohOABIgCAAQhVAAhNgugADTGtQgEAEgBADQgIAeABAYQAAAdAMAYQAFAMAKABQAKABAGgMQAEgJADgOIAFgbIgHgdQgEgRgEgMQgCgEgGgDQgGgDgGgBIAAAAQgDAAgFADgANUBIQgigSgTgrQgnAYgRAGQghAMgfgKQhGgXgFhEIhlgMQgLgBgJAEQgIADgIAKQgpAtg7gLQgagFgMgSQgNgSACgbIgWgHQgWAdgGAGQgSASgWAEQggAGgUgFQgagGgQgYQgDgEgMgDQgMgDgDgEQgVgWgjAEIgeAFQgRACgLgBQgHgBgLABIgSAEIgeAEQgQAFgKALQgQASgXABQgVABgUgOIgSgLQgZAYgaAMQgZALgSgEIgpAUQgVAJgOAFIgsANQgZAGgUABQgMAAgTgIQgVgKgLgEQgKAkgbASQgbASgogCQgmgDgLgbQgHgRACgnQgogKgTgeQgTgeAOghQAGgLALgKQALgLAMgEQAfgKAugOIBPgVIBlgfQAmgKAdAOQAbANARAiQAegcAUgCQAMgCAlAMIALgYQAHgPAHgIQAGgJAIgGQAJgGAIgBQAwgFAMABQAhAEAUAcQADAFAPAAIAaAAIBVgBQANgBAEgEQAMgNATgGQALgDAYgCIAngFQAZgDAOgBQAKgBAOADIAZAEIALABIAdgEQASgDALAAQAuAAA5AFQAdACAOAMQANALAIAcIBzAQQAMABADgCQAdgbAmgEQAggEApAMQAIACAKAJIARAOIALAJQAHAGAFACQATAFA6AMQAKACAEgDQASgLAVACQAOABAZAIQA2ATACAwQAAAVgMATQgOAVgWAFQgJACgMAIIgUANQACAcgNAWQgMAXgXAGQgOAFgOAAQgXAAgWgMg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 105.9885,
            y: 77.1878
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w6;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day5;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day4mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("AEnMCIhygUIgfgGQgRgEgLgHQgUgMgIgTQgKgXAIgeIBqmTIgBgEQgXgKgOADQgOACgQAQQhBA+hlgaQgTgFgNgVQgMgVABgZQABgmAEg2IAFgjIAFgkQAFgoAagRQAYgRAmACIAzAEIAyAFICJAIICJAHIAlAEIAlAFQAdAFARAcQAPAagFAbQghCoglCKQgqCgg0CLQgJAagSAQQgRAPgaAHgAixLyQgugEgigiQgXAagZAFQgbAGgggPQgMgGgVAEIglAHIgfAHQgTAFgMgCQgegDgTgfQgUgeAHgfQAEgPAJgWIAPglQAEgMgBgIQgGggAIgVQAIgYAbgLIADgBIADgDQAQgeAggGQASgEAqAFQALABAOAJQAMAIAIALQAOAUAIAnQADASAOAQQAIAKAXAUIgHgWIgHgRQgXgxATgcQAPgVAugQQAYgJATAIQATAHAPAYIALAQQAHAIALADQAuALAKAlQAKAlghAjQAUAigIAjQgHAhgdAUQgbAUgjAAIgMgBgALtLwQhRgCg9ABQgrABgQgPQgRgPgCgqQgChSADhtQABgYAPgOQAOgPAYgBQBegDA/gBQBIgBABBJIABBaIACAAIgDA5QgBAigEAXQgGAtgzAAIgDAAgANeBOQgmgPgbgxQgkAWgTAHQggALgfgKQhFgWgGhFIhbgLQgPgCgKADQgNADgKAMQgVAZgbAIQgcAIgfgLQgWgHgKgRQgKgQACgZIgXgHQgpBHhCgMQgLgCgPgJIgagRIgSgLIgHgCIgHgDQgkgYg5AIIgvAIQgcAFgTgBQgCAAgEADQgmAegRABQgRABgogaQgkAvhAgDIgEgBIgDABQgSAYgmAJQgsAIgUAIQgLAFgNABQgoAFgagkIgSAmQgLAVgjANQgkANgcgKQgQgHgKgOQgJgPAAgTIACgdQgdgCgRgRQgQgPgGgeQgFgaAKgUQALgVAYgHQA0gQBpgeIAxgPQAegKAUgEQArgLAZALQAZALAYAnQAlgxA7AdIALgYQAGgOAHgHQAJgKAMgGQAMgIAMgCQAhgGAWAFQAcAGATAaQADAEAOAAIAXgBQA0ABAmgBQAEgBANgFIAWgNQANgIAIAAQAQAAAWgEIAmgHQAtgHAfANQAFACALgFIATgJIAKAAIAoADQAXABAQADQA3AJAjANQAGACAFAMIAKAVIBxAPQAKABAEgDQAfgaAngEQAggDAqAMQAJACAIAHQAIAGADAHQAFALAKAFQAFADAPADIBBANIAIACQAFABACgCQATgLAWABQAQABAZAJQAZAJAOAQQAOARABAYQABAYgMAQQgMAQgZALIgVALIgUALQAEAZgMAXQgMAYgVAHQgRAGgRAAQgRAAgRgHg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 105.9914,
            y: 77.0125
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w7;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day4;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day3mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("AC+MDIg7gOQiFgkgyiOIgaAlQARAigGAfQgGAhgbAUQggAYgogCQgsgCgqglQgZAbgWAFQgSADglgMQgOgEgWACQgZAFgNABIgjAFQgVAEgNgDQgMgCgMgLQgNgKgFgMQgcg6AmhAQAEgHACgKQABgJgBgJQgEgbAJgTQAJgTAWgNIAGgDQADgBABgCQAQgfAggGQARgDAqAEQALABAOAKQAKAIAKALQAIAKAGANQAFAOABAMQACAWAOATQAKAMAYAVIgNglQgHgTgDgNQgFgZAIgPQALgXAYgMQASgJAdgEQASgDAQAJQAPAKAJASQAGAMAJAHQAJAGAOAEQAIADALAIIAQANIAGguQADgcAGgSQAIgagBgZQgBgXgJgcQgXhIAQhDQAQhBAzg5QA6g/BlgPQClgaB5BZQAyAlAZAxQAZAyAAA8QgBA/gnA8QgEAGgCAHQgCAIABAFIAOBCQAJApAFAaIAAglQABgYAPgPQAPgPAYgBICYgFQAmgBATASQATARABAmQACB0gCBAQgBAkgRARQgRARgkgCQgdgBguAAIhLABQgfgBgQgPQgQgQAAgfIAAiRIgbA8QgPAhgNAUQgcArgtAaQgoAYg3ALIgqAKgADdH0QgPACgFAGQgEAGABAPQABAGAEATQABADAJACQAJADAEgCQAQgIAEgRQAEgMgBgcIgcAFgADUDWQgEAHACAPQAAAbAJAOQAJAOAQAAQAOAAALgOQALgPAAgRQAAgUgKgJQgKgIgXgCIgFAAQgPAAgFAIgANVBKQgjgSgUgrQglAYgSAGQggAMgfgKQgjgLgSgWQgUgWgDgkIhjgMQgMgBgJAEQgJAEgJAJQgvAzg+gVQgWgIgJgPQgKgPADgZIgYgIQgmBChBgFQgTgCgMgGQgQgHgJgPQgCgDgFgDIgIgFIgGgCIgFgCQgmgZg6AHQg/ANghAAQgDAAgFAEQgmAdgRABQgQABgogaQgUAbghALQgdAJgZgFQgIASgVAIIgmALIgZAGQgPADgIADQgeAMgWgFQgZgGgUgbQgIAkgWAUQgVATgjAFQghAFgUgQQgVgRABghIAAgaQgegBgQgRQgPgQgGgeQgFgaAKgTQALgUAZgIQA0gQBqgdIBngfQAjgKAeAPQAeAPANAiQAqg2A4AhIAMgZQAHgPAGgIQAGgIAIgGQAJgHAIgCQAegFAoAEQAJABAJAFQAKAFAEAHQAIANAPADIAbABIBegBQADAAAFgCIAHgEIAUgLQALgHAIgBIA2gKQAfgFAWACQAWACAmgCQApgCASABQAcABBWAIQAnADAJAuIB1AQQALACAEgEQAdgaAngEQAggDArALQAJADAIAHQAJAHADAHQAEAKAIAEIAQAFQAjAJAlAGQAKACAOgGQAcgLAkAMQAkALAQAbQAQAbgKAeQgLAdgeALIgWAKIgVAMQAAAfgNAWQgNAWgWAGQgOAEgOAAQgWAAgVgLg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 105.983,
            y: 77.125
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w8;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day2mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("AEsMBIgvgIIgvgHQglgEgSgQQgUgRgEgjQgBgOAEgXQAGgZACgNQifgqg3iaQgtiDBDh9QAfg4AvgpQAwgqA5gSQB4gpBuA0QBpAyAsBqQAZA5gDBAQgCA4gYBAIhyEwQgRAug1ANgADAExQAAAfAHAXQAIAZAPAFQAUhLACgnQADg0gXgTQgfAdgBBIgAirLyQgtgDgqgkQgXAZgYAGQgZAGgggPQgMgFgWADIglAGIgjAGQgVAEgNgDQgMgDgNgKQgNgKgFgMQgcg7Amg/QAJgOgDgWQgDgaAIgTQAJgTAWgNIAGgDIAFgEQAQgeAggGQAPgDAsAEQALABANAJQALAIAJAMQAJAKAFANQAGAOABAMQACAWAOATQAJAMAYAUIgNglQgHgVgCgOQgCgMACgNQACgPAHgHQAugxAwAPQAKADAMAMIAUAUIAOANQAIAIAHABQAjAJARAoQAQAmgmAhQASAjgGAgQgFAggcAVQgdAWgkAAIgGAAgAJJLtQgWAAgQgOQgQgOAAgUQgDhtADhtQAAgVAQgNQAQgOAWgBICXgFQAngBATATQATASABAmIABAtIgBAtIADAAIgDA5QgCAigCAXQgDAUgNALQgOALgUAAIhJABIhmgBgANVBIQgigSgVgrQglAXgSAHQggAMgegKQhHgXgGhEIhXgLQgRgCgMADQgOAEgMANQgUAYgbAHQgbAGgfgLQgWgHgJgPQgJgQACgZIgWgHIgMAOQgXAmgrAIQgnAIgXgUQgNgLgagPQgbgOgLgKQgHgGgGABIiIARQgNACgQAMQgWASgSACQgbACgkgaQgTAZgbALQgVAJgYgCIgtAVQgWAJgOAFQgIAEgRACQgRADgIAEQgdALgXgFQgZgFgUgbQgIAkgWAUQgVATgjAFQghAFgWgSQgWgSAEgfIAAgMIAAgLQgpgMgTgdQgSgdAOggQAFgLALgLQALgLALgEQAggKAvgOIBQgWIBngfQAjgKAeAPQAdAOAMAfIAXgPQAOgIALgDQAKgCAQACIAcAFIAJgWQAGgOAIgHQAIgJAMgHQALgGAMgCQAhgGAHAAQAXgBAMAOQASAVAZAEQAQADAggFQAMgCAUACIAiADQADAAAFgCIAJgEIASgKQALgGAIgCIA5gKQAhgFAYACQAUACAlgCQAngDARABQAwADBDAGQAUACAMAOQALAMAFAWIB1AQQAKACAEgEQAegbAngEQAfgDArAMQAJADAJAGQAJAIADAHQAEAKAIAEIAPAFQAcAHAtAIQALACAIgEQAYgMAcAGQASAEAdAQQASAJAIATQAHARgDAUQgGAsgoALQgJADgMAHIgUANQAAAegNAWQgMAWgXAGQgOAEgNAAQgXAAgVgLg");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 106.0064,
            y: 76.9
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w9;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.day1mc = function(d, e, f) {
        this.initialize(d, e, f, {
            repeat: 29
        });
        this.frame_79 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        d = new a.Shape;
        d._off = !0;
        e = (new a.Graphics).p("AFvMCQhYgChCgwQg9grgvhUIgBAiQAAASACALQAIAvgXAdQgYAcguABQgjAAhJAGQgdADgXgSQgXgRgHgfQgEgQgCgGQgFAbgUAUQgUAUgcAHQhAAQg5gzQgWAZgYAGQgaAGgggPQgMgFgWADQgZAFgMABIgjAGQgVADgNgCQgMgCgNgLQgMgKgGgMQgcg6AmhAQAJgPgDgVQgDgaAIgTQAJgTAWgNIAGgDQAEgCABgCQAQgeAggGQAQgDArAEQALABANAJQALAIAJAMQAJAKAFANQAGANABANQACAWAOASQAJANAYAUIgNglQgHgVgCgNQgCgMADgNQACgNAGgKQAMgTAggLQAfgLAWAHQAVAGAEAIQATAqAxAKIAAg9IAAg+IgChBIgChAQAAgMgFgGQgEgGgLgBQgjgCgTgjQgRghAJggQAHgeAHgQQAJgYAPgRQAogvBAgCQBIgBBOALQAlAFAPAXQANASADAnIADAqIAEArQBQioCogQIgWg+IgRgFQgRAZgNAMQgTASgYADQgeAFgSgFQgZgGgPgYQgBgDgHgCQgHgDgDgCQgWgTgggCQgQgCgrAFIhSAKQgIABgFAFQggAcgTABQgSABglgYIgZASQgPAKgLAEQgLAFgSACIghAGQgGANgUAIIgnALIgYAFQgPADgIADQgeAMgXgFQgZgFgTgcQgJAlgVATQgVATgjAFQgjAGgWgTQgVgSAEgeIAAgMIAAgNQgdgCgRgRQgPgPgGgeQgFgbAKgTQALgUAZgIQA0gQBqgdIBogfQAigKAfAPQAeAPANAiQApg1A4AgIAYguQAPgbAjAAIAaAAQAQAAALACQAJABAJAFQAJAFAEAGQAJAOAOACIAbABIBfgBQADAAAEgCIAIgEIATgLQAMgGAIgCIA1gKQAfgEAXABQAVACAmgCQApgCASABQAhACBSAHQAVACAMAOQAKALAFAXIB1AQQALABADgDQAdgaAlgFQAggEAoAMQALAEAJAGQALAHAEAIQAEAJAIAEQAEADALADQAnAJAiAGQAJABAOgFQAdgMAkAMQAkAMAQAaQAQAbgLAeQgKAegeAKQgJAEgNAHIgWALQABAfgNAXQgNAWgWAGQgmAKgigRQgigSgUgrQglAXgSAHQggALgfgJQhGgXgGhFIhhgLQgNgCgKAEQgKADgJALQgFAHgKAIIgTAPIAiAJQAUAFANAGQCdBBAiCzQAJAvABAnQABAugKAoIAAAFIAAADICAAAIAXgBIAYABQAcACAPASQAPASAAAgQADB2gCBBQgCAjgQAQQgRASglgCQgegCgsABIhKAAQggAAgQgQQgQgPgBggIgDgsIgDgvQgyBTg8AqQhBAshTAAIgIAAgAFWFjQAIB8AfA4IAFgZQADgNAAgIIABhoQAAg8gCgtQgBgfgDgKQgGgXgUgLQgZAaAJB8g");
        this.timeline.addTween(a.Tween.get(d).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: e,
            x: 105.9785,
            y: 77.0302
        }).wait(51));
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-17.1, 58.3, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        e = [this.instance];
        for (f = 0; f < e.length; f++) e[f].mask = d;
        this.timeline.addTween(a.Tween.get(this.instance).wait(29).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 4,
            y: 40.55
        }, 0).wait(1).to({
            x: 15,
            y: 52.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 32.35,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 132.85,
            y: 132.6
        }, 0).wait(1).to({
            x: 162.6,
            y: 147.85
        }, 0).wait(1).to({
            x: 182.9,
            y: 158.25
        }, 0).wait(1).to({
            x: 197.85,
            y: 165.9
        }, 0).wait(1).to({
            x: 209.1,
            y: 171.65
        }, 0).wait(1).to({
            x: 217.35,
            y: 175.9
        }, 0).wait(1).to({
            x: 223.05,
            y: 178.8
        }, 0).wait(1).to({
            x: 226.45,
            y: 180.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 99.7,
            x: 210.05,
            y: 202.8
        }, 0).to({
            _off: !0
        }, 1).wait(38));
        this.instance_1 = new b.w10;
        this.instance_1.parent = this;
        this.instance_1.setTransform(121.5, 102.1, 1, 1, 0, 0, 0, 90.5, 51.8);
        this.instance_1.alpha =
            .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 121.45,
            alpha: .0117
        }, 3).to({
            _off: !0
        }, 1).wait(44));
        this.instance_2 = new b.day1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(80))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.calender_page = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.effect = new b.hq_day;
        this.effect.name = "effect";
        this.effect.parent = this;
        this.effect.setTransform(480, 270, 1, 1, 0, 0, 0, 480, 270);
        this.timeline.addTween(a.Tween.get(this.effect).wait(10))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 960, 540);
    (b.calender_bg1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.day1mc;
        this.instance.parent = this;
        this.instance.setTransform(120, 147, 1,
            1, 0, 0, 0, 120, 147);
        this.instance_1 = new b.day2mc;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 147, 1, 1, 0, 0, 0, 120, 147);
        this.instance_2 = new b.day3mc;
        this.instance_2.parent = this;
        this.instance_2.setTransform(120, 147, 1, 1, 0, 0, 0, 120, 147);
        this.instance_3 = new b.day4mc;
        this.instance_3.parent = this;
        this.instance_3.setTransform(120, 147, 1, 1, 0, 0, 0, 120, 147);
        this.instance_4 = new b.day5mc;
        this.instance_4.parent = this;
        this.instance_4.setTransform(120, 147, 1, 1, 0, 0, 0, 120, 147);
        this.instance_5 = new b.day6mc;
        this.instance_5.parent =
            this;
        this.instance_5.setTransform(120, 147, 1, 1, 0, 0, 0, 120, 147);
        this.instance_6 = new b.day7mc;
        this.instance_6.parent = this;
        this.instance_6.setTransform(120, 147, 1, 1, 0, 0, 0, 120, 147);
        this.instance_7 = new b.day8mc;
        this.instance_7.parent = this;
        this.instance_7.setTransform(120, 147, 1, 1, 0, 0, 0, 120, 147);
        this.instance_8 = new b.day9mc;
        this.instance_8.parent = this;
        this.instance_8.setTransform(120, 147, 1, 1, 0, 0, 0, 120, 147);
        this.instance_9 = new b.day10mc;
        this.instance_9.parent = this;
        this.instance_9.setTransform(120, 147, 1, 1, 0,
            0, 0, 120, 147);
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
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.chara_replace8 =
        function(d, e, f) {
            this.initialize(d, e, f, {});
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
        }).prototype = h(b.chara_replace8, new a.Rectangle(-211.5, -399.4, 420, 525), null);
    (b.chara_replace7 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = h(b.chara_replace7, new a.Rectangle(-211.5, -399.4, 420, 525), null);
    (b.chara_replace6 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = h(b.chara_replace6, new a.Rectangle(-211.5, -399.4,
        420, 525), null);
    (b.chara_replace5 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = h(b.chara_replace5, new a.Rectangle(-211.5, -399.4, 420, 525), null);
    (b.chara_replace4 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = h(b.chara_replace4, new a.Rectangle(-211.5, -399.4, 420, 525), null);
    (b.chara_replace3 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
        new a.Rectangle(-211.5, -399.4, 420, 525), null);
    (b.chara_replace2 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = h(b.chara_replace2, new a.Rectangle(-211.5, -399.4, 420, 525), null);
    (b.chara_replace1 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = h(b.chara_replace1, new a.Rectangle(-211.5, -399.4, 420, 525), null);
    (b.square2c = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 =
            new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new b.squear;
        this.instance_6.parent = this;
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
                },
                {
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
    }).prototype = h(b.square2c, new a.Rectangle(0, 0, 1.5, 21.5), null);
    (b.square2 = function(d, e, f) {
        this.initialize(d, e, f, {});
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
        this.instance_3.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new b.squear;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.7,
            10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new b.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new b.squear;
        this.instance_8.parent = this;
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
    }).prototype = h(b.square2, new a.Rectangle(0, 0, 1.5, 26.5), null);
    (b.parts_particle1_2 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15));
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
        }, 0).wait(1).to({
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
            },
            1).wait(16))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.parts_particle1_1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.r = Math.floor(3 * Math.random() + 3);
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
            },
            0).wait(1).to({
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
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.cur_mc = function(d, e, f) {
        this.initialize(d,
            e, f, {});
        this.frame_8 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.yajirusi_p;
        this.instance.parent = this;
        this.instance.setTransform(-1.5, -1.5);
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
            },
            0).wait(1).to({
            x: -6.6,
            y: -6.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -1.5,
            y: -1.5
        }, 0).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-12.2, -11.8, 12.2, 11.8);
    (b.charaEffect_set = function(d, e, f) {
        this.initialize(d, e, f, {});
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
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-406.3,
        -411.2, 815.3, 814.7);
    (b.characters = function(d, e, f) {
        this.initialize(d, e, f, {});
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
        this.cf8.name = "cf8";
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
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-211.5, -399.4, 420, 525);
    (b.characters_b = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.cb1 = new b.cb1;
        this.cb1.name = "cb1";
        this.cb1.parent = this;
        this.cb1.setTransform(50, 121, 1, 1, 0, 0, 0, 200, 250);
        this.cb2 = new b.cb2;
        this.cb2.name = "cb2";
        this.cb2.parent = this;
        this.cb2.setTransform(50, 121, 1, 1, 0, 0, 0, 200, 250);
        this.cb3 = new b.cb3;
        this.cb3.name = "cb3";
        this.cb3.parent = this;
        this.cb3.setTransform(50, 121, 1, 1, 0, 0, 0, 200, 250);
        this.cb4 = new b.cb4;
        this.cb4.name = "cb4";
        this.cb4.parent = this;
        this.cb4.setTransform(50, 121, 1, 1, 0, 0, 0, 200, 250);
        this.cb5 = new b.cb5;
        this.cb5.name = "cb5";
        this.cb5.parent = this;
        this.cb5.setTransform(50, 121, 1, 1, 0, 0, 0, 200, 250);
        this.cb6 = new b.cb6;
        this.cb6.name = "cb6";
        this.cb6.parent = this;
        this.cb6.setTransform(50, 121, 1, 1, 0, 0, 0, 200, 250);
        this.cb7 = new b.cb7;
        this.cb7.name = "cb7";
        this.cb7.parent = this;
        this.cb7.setTransform(50, 121, 1, 1, 0, 0, 0, 200, 250);
        this.cb8 = new b.cb8;
        this.cb8.name = "cb8";
        this.cb8.parent = this;
        this.cb8.setTransform(50, 121, 1, 1, 0, 0, 0, 200, 250);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.cb1
            }]
        }).to({
                state: [{
                    t: this.cb2
                }]
            },
            1).to({
            state: [{
                t: this.cb3
            }]
        }, 1).to({
            state: [{
                t: this.cb4
            }]
        }, 1).to({
            state: [{
                t: this.cb5
            }]
        }, 1).to({
            state: [{
                t: this.cb6
            }]
        }, 1).to({
            state: [{
                t: this.cb7
            }]
        }, 1).to({
            state: [{
                t: this.cb8
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-150, -129, 400, 500);
    (b.spread_star = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_16 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(16).call(this.frame_16).wait(1));
        this.instance = new b.guideline;
        this.instance.parent = this;
        this.instance.setTransform(-.5,
            -.45, 1, 1, 0, 0, 0, .5, 1);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 16).wait(1));
        this.instance_1 = new b.spread_star_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .7487, .7487);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regY: -3,
            scaleX: .8883,
            scaleY: .8883,
            rotation: -139.8709,
            x: -1.8,
            y: -87.35,
            alpha: .9392
        }, 0).wait(1).to({
            scaleX: .9721,
            scaleY: .9721,
            rotation: -7.7935,
            x: -.45,
            y: -145.75,
            alpha: .9028
        }, 0).wait(1).to({
            regX: -.1,
            regY: -.1,
            scaleX: 1,
            scaleY: 1,
            rotation: 36.2324,
            x: -.15,
            y: -160.85,
            alpha: .8906
        }, 0).wait(1).to({
            regX: 0,
            regY: -3,
            scaleX: .9455,
            scaleY: .9455,
            rotation: 43.0499,
            x: 1.85,
            y: -169.9,
            alpha: .8239
        }, 0).wait(1).to({
            scaleX: .891,
            scaleY: .891,
            rotation: 49.8675,
            x: 1.95,
            y: -176.75,
            alpha: .7572
        }, 0).wait(1).to({
            scaleX: .8365,
            scaleY: .8365,
            rotation: 56.685,
            x: 2,
            y: -183.6,
            alpha: .6904
        }, 0).wait(1).to({
            scaleX: .782,
            scaleY: .782,
            rotation: 63.5025,
            y: -190.45,
            alpha: .6237
        }, 0).wait(1).to({
            scaleX: .7275,
            scaleY: .7275,
            rotation: 70.3201,
            x: 1.95,
            y: -197.3,
            alpha: .557
        }, 0).wait(1).to({
            scaleX: .673,
            scaleY: .673,
            rotation: 77.1376,
            x: 1.85,
            y: -204.2,
            alpha: .4902
        }, 0).wait(1).to({
            scaleX: .6185,
            scaleY: .6185,
            rotation: 83.9552,
            x: 1.75,
            y: -211.15,
            alpha: .4235
        }, 0).wait(1).to({
            scaleX: .564,
            scaleY: .564,
            rotation: 90.7727,
            x: 1.6,
            y: -218.1,
            alpha: .3568
        }, 0).wait(1).to({
            scaleX: .5096,
            scaleY: .5096,
            rotation: 97.5903,
            x: 1.4,
            y: -225.1,
            alpha: .29
        }, 0).wait(1).to({
            scaleX: .4551,
            scaleY: .4551,
            rotation: 104.4078,
            x: 1.2,
            y: -232.15,
            alpha: .2233
        }, 0).wait(1).to({
            scaleX: .4006,
            scaleY: .4006,
            rotation: 111.2254,
            x: 1,
            y: -239.2,
            alpha: .1566
        }, 0).wait(1).to({
            regY: 0,
            scaleX: .3461,
            scaleY: .3461,
            rotation: 118.0429,
            x: -.1,
            y: -246.9,
            alpha: .0898
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-40.2, -260.4, 83.80000000000001, 280.59999999999997);
    (b.effect_star = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.spread_star;
        this.instance.parent = this;
        this.instance.setTransform(.7, 5.55, .5235, .5235, -177.0259, 0, 0, -.1, -.1);
        this.instance_1 = new b.spread_star;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-16.9, -2.2, .4695, .4695, -81.4512);
        this.instance_2 = new b.spread_star;
        this.instance_2.parent = this;
        this.instance_2.setTransform(14.75, -5.65, .416, .416, 66.1694);
        this.instance_3 = new b.spread_star;
        this.instance_3.parent = this;
        this.instance_3.setTransform(15.05, 5.9, .416, .416, 118.5873);
        this.instance_4 = new b.spread_star;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-3.85, -14, .4603, .4603, -23.464);
        this.instance_5 = new b.spread_star;
        this.instance_5.parent = this;
        this.instance_5.setTransform(9.05, -15.9, .3386, .3386, 44.3135);
        this.instance_6 =
            new b.spread_star;
        this.instance_6.parent = this;
        this.instance_6.setTransform(3.15, -1.2, .5521, .5521, -147.5499);
        this.instance_7 = new b.spread_star;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.4, 1.1, .5521, .5521, 90.4165, 0, 0, .1, -.1);
        this.instance_8 = new b.spread_star;
        this.instance_8.parent = this;
        this.instance_8.setTransform(12.25, 14.2, .4101, .4101, 155.3315);
        this.instance_9 = new b.spread_star;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-11.05, 5.95, .4731, .4731, -116.6808);
        this.instance_10 =
            new b.spread_star;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-11.8, -5.8, .5201, .5201, -44.477);
        this.instance_11 = new b.spread_star;
        this.instance_11.parent = this;
        this.instance_11.setTransform(3.1, 11.3, .5316, .5316, 7.4749, 0, 0, .1, .1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
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
    }).prototype = h(b.effect_star, new a.Rectangle(-29.9, -28.5, 58.4, 55.8), null);
    (b.yajirusi_wt = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.ar1 = new b.cursol_container_w;
        this.ar1.name = "ar1";
        this.ar1.parent = this;
        this.ar1.setTransform(-6.65, -6.45, 1, 1, 0, 0, 0, 6.3, 5.5);
        this.timeline.addTween(a.Tween.get(this.ar1).wait(1))
    }).prototype = h(b.yajirusi_wt, new a.Rectangle(-8.8, -11.5, 10.8, 9.4), null);
    (b.yajirusi = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.ar1 = new b.cursol_container;
        this.ar1.name =
            "ar1";
        this.ar1.parent = this;
        this.ar1.setTransform(-6.65, -6.45, 1, 1, 0, 0, 0, 6.3, 5.5);
        this.timeline.addTween(a.Tween.get(this.ar1).wait(1))
    }).prototype = h(b.yajirusi, new a.Rectangle(-8.8, -9.6, 10.700000000000001, 9.4), null);
    (b.spread_container = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_99 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(99).call(this.frame_99).wait(1));
        this.instance = new b.spread;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
                rotation: 360
            },
            99).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-221.3, -221.3, 442.70000000000005, 442.70000000000005);
    (b.mc_bubble_set = function(d, e, f) {
        null == f && (f = !1);
        this.initialize(d, e, f, {});
        this.instance = new b.mc_bubble;
        this.instance.parent = this;
        this.instance.setTransform(-115, 116);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.mc_bubble;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-20, -107);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1));
        this.instance_2 = new b.mc_bubble;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-330, 80);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1));
        this.instance_3 = new b.mc_bubble;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-44, 74);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1));
        this.instance_4 = new b.mc_bubble;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-250, 100);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1));
        this.instance_5 = new b.mc_bubble;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-89, -74);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1));
        this.instance_6 = new b.mc_bubble;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-300, -110);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(1));
        this.instance_7 = new b.mc_bubble;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-135, -107);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(1))
    }).prototype = h(b.mc_bubble_set, new a.Rectangle(-344, -124,
        376.5, 254), null);
    (b.g\uff4citter_rise_core = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.visible = !1;
            this.gotoAndPlay(1 + Math.floor(30 * Math.random()))
        };
        this.frame_1 = function() {
            this.visible = !1;
            this.gotoAndPlay(this.timeline.position + Math.floor(20 * Math.random()))
        };
        this.frame_31 = function() {
            this.visible = !0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(30).call(this.frame_31).wait(9));
        this.instance = new b.glitter_first_inner;
        this.instance.parent =
            this;
        this.instance.setTransform(0, 0, .5144, .5144);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(30).to({
            _off: !1,
            scaleX: .1949,
            scaleY: .1949,
            rotation: -44.8223,
            alpha: .4297
        }, 0).wait(1).to({
            scaleX: .4345,
            scaleY: .4345,
            rotation: -11.2056,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: .5144,
            scaleY: .5144,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: .5051,
            scaleY: .5051,
            rotation: 1.94,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: .479,
            scaleY: .479,
            rotation: 7.4007,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: .436,
            scaleY: .436,
            rotation: 16.3821,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: .3762,
            scaleY: .3762,
            rotation: 28.8843,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: .2995,
            scaleY: .2995,
            rotation: 44.9071,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-9.6, -11.2, 19.299999999999997, 22.5);
    (b.asset_efc_partilceSarcle = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.asset_efc_particle2;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
        this.instance_1 = new b.asset_efc_particle2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
        this.instance_2 = new b.asset_efc_particle2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(8.15, 26.5, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_3 = new b.asset_efc_particle1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new b.asset_efc_particle1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12,
            28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.asset_efc_particle1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.asset_efc_particle2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.asset_efc_particle1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.asset_efc_particle1;
        this.instance_8.parent =
            this;
        this.instance_8.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_9 = new b.asset_efc_particle2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);
        this.instance_10 = new b.asset_efc_particle1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_11 = new b.asset_efc_particle2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_12 = new b.asset_efc_particle2;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_13 = new b.asset_efc_particle2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_14 = new b.asset_efc_particle2;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-12.4, 14, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_15 = new b.asset_efc_particle1;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085,
            0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.asset_efc_particle1;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 = new b.asset_efc_particle1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_18 = new b.asset_efc_particle2;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.asset_efc_particle1;
        this.instance_19.parent =
            this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.asset_efc_particle1;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65, 1.75, .5292, .5292, -118.5129);
        this.instance_21 = new b.asset_efc_particle2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_22 = new b.asset_efc_particle1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_23 =
            new b.asset_efc_particle2;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-10.95, 8.25, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_24 = new b.asset_efc_particle2;
        this.instance_24.parent = this;
        this.instance_24.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_25 = new b.asset_efc_particle2;
        this.instance_25.parent = this;
        this.instance_25.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_26 = new b.asset_efc_particle2;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-5.3,
            -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_27 = new b.asset_efc_particle1;
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.asset_efc_particle1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 = new b.asset_efc_particle1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_30 = new b.asset_efc_particle2;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_31 = new b.asset_efc_particle1;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_32 = new b.asset_efc_particle1;
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_33 = new b.asset_efc_particle2;
        this.instance_33.parent = this;
        this.instance_33.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_34 = new b.asset_efc_particle1;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_35 = new b.asset_efc_particle2;
        this.instance_35.parent = this;
        this.instance_35.setTransform(.6, -8.6, .5292, .5292, -45.4801);
        this.instance_36 = new b.asset_efc_particle2;
        this.instance_36.parent = this;
        this.instance_36.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_37 = new b.asset_efc_particle2;
        this.instance_37.parent = this;
        this.instance_37.setTransform(8.5,
            6.25, .5292, .5292, 0, 126.7457, -53.2543);
        this.instance_38 = new b.asset_efc_particle2;
        this.instance_38.parent = this;
        this.instance_38.setTransform(14.45, -1.3, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_39 = new b.asset_efc_particle1;
        this.instance_39.parent = this;
        this.instance_39.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_40 = new b.asset_efc_particle1;
        this.instance_40.parent = this;
        this.instance_40.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_41 = new b.asset_efc_particle1;
        this.instance_41.parent = this;
        this.instance_41.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_42 = new b.asset_efc_particle2;
        this.instance_42.parent = this;
        this.instance_42.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_43 = new b.asset_efc_particle1;
        this.instance_43.parent = this;
        this.instance_43.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_44 = new b.asset_efc_particle1;
        this.instance_44.parent = this;
        this.instance_44.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_45 = new b.asset_efc_particle2;
        this.instance_45.parent = this;
        this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);
        this.instance_46 = new b.asset_efc_particle1;
        this.instance_46.parent = this;
        this.instance_46.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_47 = new b.asset_efc_particle2;
        this.instance_47.parent = this;
        this.instance_47.setTransform(8.9, 4.6, .5292, .5292, 44.5199);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_47
                }, {
                    t: this.instance_46
                }, {
                    t: this.instance_45
                },
                {
                    t: this.instance_44
                }, {
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
                },
                {
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
    }).prototype = h(b.asset_efc_partilceSarcle, new a.Rectangle(-320.5,
        -245.4, 564, 474.70000000000005), null);
    (b.window22 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3));
        this.instance = new b.square2;
        this.instance.parent = this;
        this.instance.setTransform(218.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_1 = new b.square2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(191.35, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_2 = new b.square2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(163.9,
            24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_3 = new b.square2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(136.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_4 = new b.square2;
        this.instance_4.parent = this;
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
        this.instance_8.setTransform(5.95, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_9 = new b.square2c;
        this.instance_9.parent = this;
        this.instance_9.setTransform(8.6, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_10 = new b.square2c;
        this.instance_10.parent = this;
        this.instance_10.setTransform(11.25, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
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
        }).wait(3));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AxGFtQhQAAAAhQIAAqJIV3AAIAIAAINeAAQBQAAAABQIAAI5QAABQhQAAg");
        this.shape.setTransform(117.5, 55.75);
        this.timeline.addTween(a.Tween.get(this.shape).wait(3));
        this.instance_11 = new b.window_shadow;
        this.instance_11.parent =
            this;
        this.instance_11.setTransform(118.6, 47.65, 1, 1, 0, 0, 0, 117.9, 46.9);
        this.instance_11.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(3));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.702)").s().p("AASAmQgNgTgHgTQgSgkgKgSIAFAHQAJALAaA2IAVAkQgGgGgHgKg");
        this.shape_1.setTransform(77.125, 8.9);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AAbA1IgVglQgZg1gJgMIgFgGIgGgJQAHAGAGAIIAEAHQAMATASAnIAMAVIAUAdIgNgMg");
        this.shape_2.setTransform(77.475,
            9.075);
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
        this.shape_15.setTransform(77.925,
            9.625);
        this.shape_16 = new a.Shape;
        this.shape_16.graphics.f("rgba(0,0,0,0.231)").s().p("AA2BQIgHgGQgMgLgMgQIgIgMIgMgXQgZg2gKgMQgNgRgRgJIgGgFQAVAIARAVQAJAMAbA3QAGAOAGAKIAFAHQANATANALQAIAIAMAGg");
        this.shape_16.setTransform(143.45, 9.175);
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
            }, {
                t: this.shape_12
            }, {
                t: this.shape_1,
                p: {
                    x: 142.125
                }
            }, {
                t: this.shape_11
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 236.5, 94.5);
    (b.win_mc = function(d, e, f) {
        this.initialize(d, e, f, {
            f1: 1,
            out: 13,
            "in": 24,
            close: 32
        });
        this.frame_0 = function() {
            this.scene =
                "out";
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
        this.cur = new b.cur_mc;
        this.cur.name = "cur";
        this.cur.parent = this;
        this.cur.setTransform(229.55,
            88.4);
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
        this.c_name = new b.gr_nametxt;
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
        }, 3, a.Ease.get(1)).wait(1).to({
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
        this.tmsg.alpha =
            0;
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
            },
            2, a.Ease.get(1)).to({
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
            },
            0).wait(1).to({
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
        }, 2, a.Ease.get(-1)).wait(3).to({
            y: 2,
            alpha: .6016
        }, 0).wait(1).to({
            y: 6,
            alpha: .3008
        }, 0).wait(1).to({
            y: 116,
            alpha: 1
        }, 0).wait(7))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, -2, 502, 212.5);
    (b.set_particle1 = function(d, e, f) {
        this.initialize(d, e, f, {});
        this.instance = new b.parts_particle1_2;
        this.instance.parent =
            this;
        this.instance.setTransform(-1.4, 38.65, .8585, .8585, -173.2888);
        this.instance_1 = new b.parts_particle1_1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-26.5, 10.95, .8544, .5085, 0, -124.1522, 76.2156, -59.8, -3.9);
        this.instance_2 = new b.parts_particle1_1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-12, 28, .6032, .6714, 0, 102.0907, 76.0495);
        this.instance_3 = new b.parts_particle1_1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_4 = new b.parts_particle1_2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8834);
        this.instance_5 = new b.parts_particle1_1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0591, 42.7308);
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
        this.instance_9.parent = this;
        this.instance_9.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5011);
        this.instance_10 = new b.parts_particle1_1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-6.95, -18.05, .6032, .6032, -115.4488);
        this.instance_11 = new b.parts_particle1_2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-30,
            16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_12 = new b.parts_particle1_1;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0591, 132.7308);
        this.instance_13 = new b.parts_particle1_2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_14 = new b.parts_particle1_1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9907);
        this.instance_15 = new b.parts_particle1_2;
        this.instance_15.parent =
            this;
        this.instance_15.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_16 = new b.parts_particle1_2;
        this.instance_16.parent = this;
        this.instance_16.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_17 = new b.parts_particle1_1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(29.35, 1.45, .8544, .5085, 0, 20.643, -138.9898, -59.9, -3.9);
        this.instance_18 = new b.parts_particle1_1;
        this.instance_18.parent = this;
        this.instance_18.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_19 = new b.parts_particle1_1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_20 = new b.parts_particle1_2;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_21 = new b.parts_particle1_2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_22 = new b.parts_particle1_1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-10.75, -12.3,
            .5925, .5292, 0, 17.9935, -162.0093);
        this.instance_23 = new b.parts_particle1_2;
        this.instance_23.parent = this;
        this.instance_23.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_24 = new b.parts_particle1_1;
        this.instance_24.parent = this;
        this.instance_24.setTransform(13.4, 36.85, .8544, .5085, 0, 110.643, -48.9898, -59.7, -3.7);
        this.instance_25 = new b.parts_particle1_1;
        this.instance_25.parent = this;
        this.instance_25.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_26 = new b.parts_particle1_1;
        this.instance_26.parent =
            this;
        this.instance_26.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_27 = new b.parts_particle1_2;
        this.instance_27.parent = this;
        this.instance_27.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_28 = new b.parts_particle1_1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9409, -47.2692);
        this.instance_29 = new b.parts_particle1_1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_29
                },
                {
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
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = h(b.set_particle1, new a.Rectangle(-259.5, -245.4, 503, 474.70000000000005), null);
    (b.c_col = function(d, e, f) {
        this.initialize(d, e, f, {
            def: 0,
            dark: 5
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_5 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));
        this.c_b = new b.characters_b;
        this.c_b.name = "c_b";
        this.c_b.parent = this;
        this.c_b.setTransform(-6.75,
            -187.45, 1.05, 1.05, 0, 0, 0, 45, 72.9);
        this.c_b.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.c_b).wait(5).to({
            alpha: .3984
        }, 0).wait(5));
        this.c = new b.characters;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(0, -250, 1, 1, 0, 0, 0, 0, -250);
        this.timeline.addTween(a.Tween.get(this.c).wait(10))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-211.5, -399.4, 420.1, 525);
    (b.g\uff4citter_rise_inner = function(d, e, f) {
        this.initialize(d, e, f, {
            r: 46,
            "-": 142
        });
        this.frame_0 = function() {
            this.rotation += Math.floor(14 *
                Math.random());
            this.gotoAndPlay(Math.floor(40 * Math.random() + 42))
        };
        this.frame_142 = function() {
            this.gotoAndPlay("r")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(142).call(this.frame_142).wait(1));
        this.instance = new b.g\uff4citter_rise_core;
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(46).to({
            x: .6,
            y: 355.55
        }, 96).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-42.1, -28.7, 86.7, 395.5);
    (b.glitter_rise =
        function(d, e, f) {
            this.initialize(d, e, f, {});
            this.instance = new b.g\uff4citter_rise_inner;
            this.instance.parent = this;
            this.instance.setTransform(150.4, 8.8, .6479, .6442);
            this.instance_1 = new b.g\uff4citter_rise_inner;
            this.instance_1.parent = this;
            this.instance_1.setTransform(182.95, 13.55, .6479, .6442);
            this.instance_2 = new b.g\uff4citter_rise_inner;
            this.instance_2.parent = this;
            this.instance_2.setTransform(178.05, 1.4, .3695, .3674);
            this.instance_3 = new b.g\uff4citter_rise_inner;
            this.instance_3.parent = this;
            this.instance_3.setTransform(165.35,
                4.1, .3695, .3674);
            this.instance_4 = new b.g\uff4citter_rise_inner;
            this.instance_4.parent = this;
            this.instance_4.setTransform(144.85, 12.05, .6947, .692);
            this.instance_5 = new b.g\uff4citter_rise_inner;
            this.instance_5.parent = this;
            this.instance_5.setTransform(97.8, 10, .6947, .692);
            this.instance_6 = new b.g\uff4citter_rise_inner;
            this.instance_6.parent = this;
            this.instance_6.setTransform(117.35, -2.25, .3962, .3946);
            this.instance_7 = new b.g\uff4citter_rise_inner;
            this.instance_7.parent = this;
            this.instance_7.setTransform(81.8,
                8.2, .3962, .3946);
            this.instance_8 = new b.g\uff4citter_rise_inner;
            this.instance_8.parent = this;
            this.instance_8.setTransform(107.3, 15.65, .6947, .692);
            this.instance_9 = new b.g\uff4citter_rise_inner;
            this.instance_9.parent = this;
            this.instance_9.setTransform(129.05, 5.8, .6947, .692);
            this.instance_10 = new b.g\uff4citter_rise_inner;
            this.instance_10.parent = this;
            this.instance_10.setTransform(24.05, 7.05, .3962, .3946);
            this.instance_11 = new b.g\uff4citter_rise_inner;
            this.instance_11.parent = this;
            this.instance_11.setTransform(49.85,
                11.35, .6947, .692);
            this.instance_12 = new b.g\uff4citter_rise_inner;
            this.instance_12.parent = this;
            this.instance_12.setTransform(-22.4, 9.85, .6947, .692);
            this.instance_13 = new b.g\uff4citter_rise_inner;
            this.instance_13.parent = this;
            this.instance_13.setTransform(62.8, 8.25, .6947, .692);
            this.instance_14 = new b.g\uff4citter_rise_inner;
            this.instance_14.parent = this;
            this.instance_14.setTransform(34.2, 5.1, .6947, .692);
            this.instance_15 = new b.g\uff4citter_rise_inner;
            this.instance_15.parent = this;
            this.instance_15.setTransform(7.25,
                1.75, .3962, .3946);
            this.instance_16 = new b.g\uff4citter_rise_inner;
            this.instance_16.parent = this;
            this.instance_16.setTransform(-6.35, 4.7, .3962, .3946);
            this.instance_17 = new b.g\uff4citter_rise_inner;
            this.instance_17.parent = this;
            this.instance_17.setTransform(-47.95, 11.35, .6947, .692);
            this.instance_18 = new b.g\uff4citter_rise_inner;
            this.instance_18.parent = this;
            this.instance_18.setTransform(-119.75, 9.85, .6947, .692);
            this.instance_19 = new b.g\uff4citter_rise_inner;
            this.instance_19.parent = this;
            this.instance_19.setTransform(-94.85,
                9.25, .6947, .692);
            this.instance_20 = new b.g\uff4citter_rise_inner;
            this.instance_20.parent = this;
            this.instance_20.setTransform(-75.25, -2.95, .3962, .3946);
            this.instance_21 = new b.g\uff4citter_rise_inner;
            this.instance_21.parent = this;
            this.instance_21.setTransform(-110.9, 7.45, .3962, .3946);
            this.instance_22 = new b.g\uff4citter_rise_inner;
            this.instance_22.parent = this;
            this.instance_22.setTransform(-63.5, 5.1, .6947, .692);
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                        t: this.instance_22
                    }, {
                        t: this.instance_21
                    }, {
                        t: this.instance_20
                    },
                    {
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
        }).prototype = h(b.glitter_rise, new a.Rectangle(-126.4, -14.7, 315.6, 26), null);
    (b.c_mc =
        function(d, e, f) {
            this.initialize(d, e, f, {
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
            this.frame_7 = function() {
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
        }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-759.6, -430.4, 990.3, 596);
    (b.countdown_login = function(d, e, f) {
        this.initialize(d, e, f, {
            scene_play: 90,
            scene_end: 99,
            select_wait: 107,
            talk_end: 115,
            last: 135
        });
        this.frame_0 = function() {
            this.jump = function() {
                window.location.href = exportRoot._url
            };
            this.ch_move1 = function() {
                this.ch.gotoAndPlay(this.chara_action1);
                this.ch.eff.gotoAndPlay(this.chara_eff1)
            };
            this.ch_move2 = function() {
                this.ch.gotoAndPlay(this.chara_action2);
                this.ch.eff.gotoAndStop(this.chara_eff2)
            };
            this.condition_init = function() {
                this.RR_back = this.R_back = this.CR_back = this.C_back = this.CL_back = this.L_back = this.LL_back = this.RR_front = this.R_front = this.CR_front = this.C_front = this.CL_front =
                    this.L_front = this.LL_front = 0
            };
            this.chara_control = function() {
                for (var n = 1; n < this.MAXNUM + 1; n++) this["c" + n].visible = !1;
                for (n = 1; n <= this.position_len; n++) this._position = this["position" + n], this._num_front = this[this._position + "_front"], this._num_back = this[this._position + "_back"], 0 < this._num_front ? (this["c" + this._num_front + "_t"].visible = !1, this[this._position + "_back"] = this._num_front, this[this._position + "_front"] = 0, this["c" + this._num_front].visible = !0, this["c" + this._num_front].gotoAndStop("stay"), this["c" +
                    this._num_front].x = this[this._position + "X"]) : 0 < this._num_back && (this["c" + this._num_back].visible = !0)
            };
            this.boot_effect = function() {
                this._chara_effect = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_chara_effect"];
                if (0 < this._chara_effect) {
                    this._ef_pos = this.t_pos;
                    this.temp_id = parseInt(10 * this.scene_m + this.scene_s);
                    var n = "_effect" + this.temp_id,
                        p = new b.replace_effect1;
                    p.name = n;
                    this.charaEffect_set.addChild(p);
                    p.x = 120;
                    p.y = 120;
                    p.x = 0 != this._ef_pos ? this[this._ef_pos + "X"] + this["ch" + this.t_no + "_efposition_x"] :
                        this.CX;
                    p.y = parseInt(this["ch" + this.t_no + "_efposition_y"]);
                    "R" == this.t_efdir ? p.gotoAndStop("R") : p.gotoAndStop("L")
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
                window.location.href = this._url
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
                this.scene_m < this.select_end_id ?
                    (this.scene_m++, this.scene_s = 1, this.gotoAndPlay("scene_play")) : this.gotoAndPlay("ending_movie")
            };
            for (var k in window.im_cjs) exportRoot[k] = window.im_cjs[k];
            exportRoot._url = window.im_cjs._url;
            this.num_countdown = im_cjs.num_countdown;
            this.num_today = im_cjs.num_today;
            this.chara_action1 = im_cjs.chara_action1;
            this.chara_action2 = im_cjs.chara_action2;
            this.chara_eff1 = im_cjs.chara_eff1;
            this.chara_eff2 = im_cjs.chara_eff2;
            this.ch_direction = im_cjs.ch_direction;
            this.msg1_1 = im_cjs.msg1_1;
            this.msg1_2 = im_cjs.msg1_2;
            this.msg1_3 =
                im_cjs.msg1_3;
            this.msg1_4 = im_cjs.msg1_4;
            this.msg2_1 = im_cjs.msg2_1;
            this.msg2_2 = im_cjs.msg2_2;
            this.msg2_3 = im_cjs.msg2_3;
            this.msg2_4 = im_cjs.msg2_4;
            this.txt1_1 = im_cjs.txt1_1;
            this.txt1_2 = im_cjs.txt1_2;
            this.txt1_3 = im_cjs.txt1_3;
            this.txt1_4 = im_cjs.txt1_4;
            Object.assign(this, im_cjs);
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
            this.CLX =
                90;
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
            this.total_view_point = parseInt(this.total_point, 10)
        };
        this.frame_9 = function() {
            window.se_play("se_070")
        };
        this.frame_36 = function() {
            window.se_play("se_110")
        };
        this.frame_47 = function() {
            window.se_play("se_010")
        };
        this.frame_55 = function() {
            this.b.gotoAndPlay("black")
        };
        this.frame_59 = function() {
            function k() {
                n.play();
                n.btn.removeEventListener("click", k)
            }
            this.stop();
            this.m1.text = this.txt1_1;
            this.m2.text = this.txt1_2;
            this.m3.text = this.txt1_3;
            this.m4.text = this.txt1_4;
            var n = this;
            this.btn.addEventListener("click", k)
        };
        this.frame_88 = function() {
            this.condition_init();
            for (var k = 1; k < this.MAXNUM + 1; k++) this["c" + k].c_col.c.gotoAndStop(k - 1), this["c" + k].c_col.c_b.gotoAndStop(k - 1), this["c" + k].c_col.gotoAndStop("dark"), this["c" + k + "_t"].c_col.c.gotoAndStop(k - 1), this["c" + k].visible = !1,
                this["c" + k + "_t"].visible = !1, this["ch" + k + "_efposition_x"] = "" != this["cf" + k].ef_position.x ? this["cf" + k].ef_position.x : 0, this["ch" + k + "_efposition_y"] = "" != this["cf" + k].ef_position.y ? this["cf" + k].ef_position.y + 310 : 100;
            for (var n = k = 1; void 0 != this["s" + k + "_1_name"];) {
                for (; void 0 != this["s" + k + "_" + n + "_name"];) {
                    if (void 0 != this["s" + k + "_" + n + "_name"]) var p = this["s" + k + "_" + n + "_name"].length;
                    6 <= p ? (this.window_1.win_base.gotoAndStop(2), this.window_width = 3) : 3 < p && 3 > this.window_width && (this.window_1.win_base.gotoAndStop(1),
                        this.window_width = 2);
                    n++
                }
                n = 1;
                k++
            }
            1 == this.now_scene ? this.gotoAndPlay("first_movie") : this.play()
        };
        this.frame_89 = function() {
            if (0 < this.init_chara_num)
                for (var k = 1; k <= this.init_chara_num; k++)
                    if (this.t_no = this["init_chara" + k + "_no"], this.t_pos = this["init_chara" + k + "_pos"], this.t_fce = this["init_chara" + k + "_face"], this.t_act = this["init_chara" + k + "_active"], this.t_posX = this[this.t_pos + "X"], 1 == this.t_act ? (this["c" + this.t_no + "_t"].visible = !0, this["c" + this.t_no + "_t"].gotoAndPlay("stay"), "" != this.t_posX && (this["c" +
                            this.t_no + "_t"].x = this[this.t_pos + "X"]), this[this.t_pos + "_front"] = this.t_no) : (this["c" + this.t_no].visible = !0, this["c" + this.t_no].gotoAndPlay("stay"), "" != this.t_posX && (this["c" + this.t_no].x = this[this.t_pos + "X"])), this[this.t_pos + "_back"] = this.t_no, void 0 != this.t_fce) {
                        var n = this["c" + this.t_no + "_t"].c_col.c["cf" + this.t_no];
                        n.c.gotoAndStop(this.t_fce - 1);
                        this["c" + this.t_no].c_col.c["cf" + this.t_no].c.gotoAndStop(this.t_fce - 1);
                        var p = this["c" + this.t_no].c_col.c_b["cb" + this.t_no];
                        1 == this["c" + this.t_no + "_shadow_is"] ?
                            (n.gotoAndStop(this.t_fce - 1), p.gotoAndStop(this.t_fce - 1)) : (n.gotoAndStop(0), p.gotoAndStop(0))
                    } this.gotoAndPlay("scene_play")
        };
        this.frame_90 = function() {
            this.chara_control();
            this.t_txt = this["s" + this.scene_m + "_" + this.scene_s + "_txt"];
            this.t_name = this["s" + this.scene_m + "_" + this.scene_s + "_name"];
            6 <= this.t_name.length ? (this.window_1.win_base.gotoAndStop(2), this.window_width = 3) : 3 < this.t_name.length ? 3 > this.window_width && (this.window_1.win_base.gotoAndStop(1), this.window_width = 2) : (this.window_1.win_base.gotoAndStop(0),
                this.window_width = 1);
            for (this.count_ch = 1; void 0 != this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_no"];) {
                this.t_no = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_no"];
                this.t_mov = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_mov"];
                this.t_pos = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_pos"];
                this.t_chef = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_chara_effect"];
                this.t_efdir = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch +
                    "_effect_dir"];
                this.t_fce = this["s" + this.scene_m + "_" + this.scene_s + "_ch" + this.count_ch + "_face"];
                this.t_posX = this[this.t_pos + "X"];
                0 < this[this.t_pos + "_back"] && this[this.t_pos + "_back"] != this.t_no && (this._t_no = this[this.t_pos + "_back"], this["c" + this._t_no].visible = !1, this[this.t_pos + "_back"] = 0);
                for (var k = 1; k <= this.position_len; k++) this._position = this["position" + k], this._num_back = this[this._position + "_back"], this.t_no == this._num_back && (this[this._position + "_back"] = 0);
                this["c" + this.t_no].visible = !1;
                this[this.t_pos +
                    "_back"] = 0;
                this["c" + this.t_no + "_t"].visible = !0;
                "" != this.t_mov && this["c" + this.t_no + "_t"].gotoAndPlay(this.t_mov);
                "" != this.t_posX && (this["c" + this.t_no + "_t"].x = this[this.t_pos + "X"]);
                "out" == this.t_mov.substring(0, 2) ? this[this.t_pos + "_front"] = 0 : this[this.t_pos + "_front"] = this.t_no;
                "" != this.t_fce && (this["c" + this.t_no + "_t"].c_col.c["cf" + this.t_no].c.gotoAndStop(this.t_fce - 1), this["c" + this.t_no].c_col.c["cf" + this.t_no].c.gotoAndStop(this.t_fce - 1), 1 == this["c" + this.t_no + "_shadow_is"] ? (this["c" + this.t_no + "_t"].c_col.c_b["cb" +
                    this.t_no].gotoAndStop(this.t_fce - 1), this["c" + this.t_no].c_col.c_b["cb" + this.t_no].gotoAndStop(this.t_fce - 1)) : (this["c" + this.t_no + "_t"].c_col.c_b["cb" + this.t_no].gotoAndStop(0), this["c" + this.t_no].c_col.c_b["cb" + this.t_no].gotoAndStop(0)));
                this.boot_effect();
                this.count_ch++
            }
            this.setMsg();
            this.key_act_flag = 1;
            this.key_log_flag = 0;
            this.stop();
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.window_1.tmsg.skip_run();
                this.gotoAndPlay("scene_end")
            }, this, !0)
        };
        this.frame_99 = function() {
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                0 == this.key_act_flag && (this.window_flag ? (this.key_act_flag = this.key_log_flag = 1, this.keyAct()) : (this.window_flag = 1, this.key_log_flag = 0, this.window_1.gotoAndPlay("in")))
            }, this, !1);
            void 0 == this["s" + this.scene_m + "_" + (this.scene_s + 1) + "_txt"] ? this.scene_m > this.select_end_id ? this.gotoAndPlay("last") : (this.call_selected, this.gotoAndStop("select_wait")) : (1 == this.win_open && (this.window_1.cur.visible = !0), this.key_log_flag = this.key_act_flag = 0, this.stop())
        };
        this.frame_107 = function() {
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                exportRoot.scene_m < exportRoot.select_end_id ? (exportRoot.scene_m++, exportRoot.scene_s = 1, exportRoot.gotoAndPlay("scene_play")) : (this.btn.removeAllEventListeners("click"), exportRoot.gotoAndPlay("talk_end"))
            }, this, !1);
            this.key_act_flag = 1;
            this.stop()
        };
        this.frame_135 = function() {
            window.se_play("se_093");
            for (var k = 1; k < this.MAXNUM + 1; k++) this["c" + k].visible = !1, this["c" + k + "_t"].visible = !1, this["c" + k + "_t"].x = -300;
            this.window_1.gotoAndStop(0);
            this.today.gotoAndStop(10 - this.num_countdown);
            this.tomorrow.gotoAndStop(11 - this.num_countdown)
        };
        this.frame_156 = function() {
            this.mekuri.effect.gotoAndPlay(0)
        };
        this.frame_161 = function() {
            window.se_play("se_118")
        };
        this.frame_179 = function() {
            window.se_play("se_010")
        };
        this.frame_211 = function() {
            this.stop();
            var k = this;
            this.btn.addEventListener("click", function() {
                k.jump()
            })
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(27).call(this.frame_36).wait(11).call(this.frame_47).wait(8).call(this.frame_55).wait(4).call(this.frame_59).wait(29).call(this.frame_88).wait(1).call(this.frame_89).wait(1).call(this.frame_90).wait(9).call(this.frame_99).wait(8).call(this.frame_107).wait(28).call(this.frame_135).wait(21).call(this.frame_156).wait(5).call(this.frame_161).wait(18).call(this.frame_179).wait(32).call(this.frame_211).wait(1));
        this.instance = new b.white_rect;
        this.instance.parent = this;
        this.instance.setTransform(121, 149.55, 1, 1, 0, 0, 0, 181, 235.5);
        this.instance.alpha = .0117;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(126).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 8).wait(1).to({
            alpha: .0117
        }, 4).to({
            _off: !0
        }, 1).wait(39).to({
            _off: !1
        }, 0).to({
            alpha: .5
        }, 4).wait(1).to({
            alpha: .6016
        }, 0).to({
            alpha: .0117
        }, 4).to({
            _off: !0
        }, 1).wait(23));
        this.instance_1 = new b.bk_logo;
        this.instance_1.parent = this;
        this.instance_1.setTransform(111.15,
            133.55, 2.1, 2.1, 0, 0, 0, 255.6, 200.7);
        this.instance_1.alpha = .8984;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).to({
            regX: 255.7,
            scaleX: .95,
            scaleY: .9497,
            x: 113.95,
            y: 153.8,
            alpha: 0
        }, 7, a.Ease.quadIn).to({
            _off: !0
        }, 1).wait(203));
        this.instance_2 = new b.wt_logo;
        this.instance_2.parent = this;
        this.instance_2.setTransform(112.2, 134.5, 2.1099, 2.1099, 0, 0, 0, 100, 78.4);
        this.instance_2.alpha = 0;
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
                _off: !1
            },
            0).to({
            scaleX: .95,
            scaleY: .95,
            x: 114.9,
            y: 153.4,
            alpha: .8008
        }, 7, a.Ease.quadIn).to({
            scaleX: 1.0488,
            scaleY: 1.0485,
            x: 115.75,
            y: 153.3
        }, 3, a.Ease.get(1)).to({
            scaleX: 1.0052,
            scaleY: 1.005,
            x: 115.35,
            y: 153.25,
            alpha: .6016
        }, 3, a.Ease.get(1)).to({
            alpha: 0
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(12).to({
            _off: !1,
            alpha: .6016
        }, 0).to({
            y: 162.25
        }, 2, a.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            x: 114.85,
            y: -101.65,
            alpha: .5898
        }, 4, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(172));
        this.logo_400_large = new b.logo_400_large;
        this.logo_400_large.name =
            "logo_400_large";
        this.logo_400_large.parent = this;
        this.logo_400_large.setTransform(109, 147.35, 2.5567, 2.5567);
        this.logo_400_large._off = !0;
        this.timeline.addTween(a.Tween.get(this.logo_400_large).wait(1).to({
            _off: !1
        }, 0).to({
            scaleX: 1.1523,
            scaleY: 1.1523,
            x: 113.45,
            y: 159.45
        }, 7, a.Ease.quadIn).to({
            scaleX: 1.2791,
            scaleY: 1.2791,
            x: 114.2,
            y: 159.8
        }, 3, a.Ease.get(1)).to({
            scaleX: 1.2258,
            scaleY: 1.2258,
            x: 113.85,
            y: 159.6
        }, 3, a.Ease.get(1)).to({
            scaleY: 1.2254
        }, 6, a.Ease.quadInOut).wait(13).to({
            regX: 2,
            regY: 66,
            scaleY: 1.2258,
            x: 116.3,
            y: 240.5
        }, 0).to({
            scaleY: 1.189,
            y: 246.2
        }, 2, a.Ease.get(1)).to({
            scaleY: 1.2258,
            y: -13.85
        }, 4, a.Ease.quadInOut).wait(1).to({
            regY: 66.1,
            y: -30.9
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            regX: 1.9,
            regY: 66,
            scaleX: .5592,
            scaleY: .5592,
            x: 118.05,
            y: .5
        }, 0).wait(1).to({
            regX: 5.3,
            regY: -12.6,
            x: 119.95,
            y: -33.9
        }, 0).wait(1).to({
            y: -.6
        }, 0).wait(1).to({
            y: 32.9
        }, 0).wait(1).to({
            regX: 1.9,
            regY: 66,
            x: 118.05,
            y: 86.5
        }, 0).to({
            y: 94.5
        }, 3).wait(25).to({
            x: 190.85,
            y: 77.5
        }, 13, a.Ease.get(-1)).to({
            _off: !0
        }, 48).wait(77));
        this.ar = new b.yajirusi;
        this.ar.name =
            "ar";
        this.ar.parent = this;
        this.ar.setTransform(193.35, 411.85, 1, 1, 0, 0, 0, .2, -.1);
        this.ar.alpha = .0117;
        this.ar_1 = new b.yajirusi_wt;
        this.ar_1.name = "ar_1";
        this.ar_1.parent = this;
        this.ar_1.setTransform(231.2, 299.7, .74, .74, 0, 0, 0, .2, -.1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.ar
            }]
        }).to({
            state: [{
                t: this.ar_1
            }]
        }, 57).to({
            state: []
        }, 16).wait(139));
        this.m4 = new a.Text("", "12px 'Arial'", "#FFFFFF");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(-310,
            416.5);
        this.timeline.addTween(a.Tween.get(this.m4).wait(59).to({
            x: 10,
            y: 286.5
        }, 0).to({
            _off: !0
        }, 10).wait(143));
        this.m3 = new a.Text("", "12px 'Arial'", "#FFFFFF");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(-310, 401.5);
        this.timeline.addTween(a.Tween.get(this.m3).wait(59).to({
            x: 10,
            y: 271.5
        }, 0).to({
            _off: !0
        }, 10).wait(143));
        this.m2 = new a.Text("", "12px 'Arial'", "#FFFFFF");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(-310, 385.5);
        this.timeline.addTween(a.Tween.get(this.m2).wait(59).to({
            x: 10,
            y: 255.5
        }, 0).to({
            _off: !0
        }, 10).wait(143));
        this.m1 = new a.Text("", "12px 'Arial'", "#FFFFFF");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(-310, 369.5);
        this.timeline.addTween(a.Tween.get(this.m1).wait(59).to({
            x: 10,
            y: 239.5
        }, 0).to({
            _off: !0
        }, 10).wait(143));
        this.b = new b.text_window;
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(116.5, 385.5, 1, .1);
        this.timeline.addTween(a.Tween.get(this.b).wait(55).to({
            x: 120.5,
            y: 269
        }, 0).wait(1).to({
            scaleY: .6222
        }, 0).wait(1).to({
            scaleY: .9355
        }, 0).wait(1).to({
            scaleY: 1.04
        }, 0).wait(1).to({
            scaleY: 1
        }, 0).wait(10).to({
            scaleY: .1
        }, 3).to({
            _off: !0
        }, 1).wait(139));
        this.instance_3 = new b.asset_efc_partilceSarcle;
        this.instance_3.parent = this;
        this.instance_3.setTransform(120.35, 155.2, .7363, .7363);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(48).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 16).wait(148));
        this.instance_4 = new b.set_particle1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(123.9,
            133.55, .4814, .4814, 0, 0, 0, .1, .1);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(179).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 31).wait(2));
        this.instance_5 = new b.effect_star;
        this.instance_5.parent = this;
        this.instance_5.setTransform(120.45, 136.4, .5976, .5976, 0, 0, 0, .1, .1);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(179).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 31).wait(2));
        this.instance_6 = new b.effect_001;
        this.instance_6.parent = this;
        this.instance_6.setTransform(120.05,
            136.3, .2437, .2437, 0, 0, 0, 80.2, 80.4);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(179).to({
            _off: !1
        }, 0).to({
            regX: 80,
            regY: 80,
            scaleX: 1.0834,
            scaleY: 1.0834,
            x: 120,
            y: 136.4
        }, 3).to({
            scaleX: 1.1195,
            scaleY: 1.1195,
            alpha: 0
        }, 20).to({
            _off: !0
        }, 1).wait(9));
        this.instance_7 = new b.wt_item;
        this.instance_7.parent = this;
        this.instance_7.setTransform(120, 155, 1, 1, 0, 0, 0, 60, 60);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(48).to({
            _off: !1
        }, 0).to({
                y: 140,
                alpha: .0117
            },
            2).to({
            _off: !0
        }, 1).wait(161));
        this.r = new b.reward;
        this.r.name = "r";
        this.r.parent = this;
        this.r.setTransform(120, 155, 1, 1, 0, 0, 0, 60, 60);
        this.r._off = !0;
        this.timeline.addTween(a.Tween.get(this.r).wait(48).to({
            _off: !1
        }, 0).to({
            y: 140
        }, 2).wait(1).to({
            y: 140.2
        }, 0).wait(1).to({
            y: 141
        }, 0).wait(1).to({
            y: 142.5
        }, 0).wait(1).to({
            y: 145
        }, 0).wait(1).to({
            y: 149.3
        }, 0).wait(1).to({
            y: 160
        }, 0).to({
            y: 160.4
        }, 3, a.Ease.get(1)).wait(5).to({
            alpha: 0
        }, 8).to({
            _off: !0
        }, 1).wait(139));
        this.window_1 = new b.win_mc;
        this.window_1.name = "window_1";
        this.window_1.parent = this;
        this.window_1.setTransform(2.75, 215.05);
        this.timeline.addTween(a.Tween.get(this.window_1).wait(212));
        this.charaEffect_set = new b.charaEffect_set;
        this.charaEffect_set.name = "charaEffect_set";
        this.charaEffect_set.parent = this;
        this.timeline.addTween(a.Tween.get(this.charaEffect_set).wait(212));
        this.c8_t = new b.c_mc;
        this.c8_t.name = "c8_t";
        this.c8_t.parent = this;
        this.c8_t.setTransform(-840.75, 59.9, 1, 1, 0, 0, 0, 0, -250.1);
        this.c7_t = new b.c_mc;
        this.c7_t.name = "c7_t";
        this.c7_t.parent = this;
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
        }).wait(212));
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
        }).wait(212));
        this.instance_8 = new b.lightburst_container("synched",
            0, !1);
        this.instance_8.parent = this;
        this.instance_8.setTransform(64.9, 150.65);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(47).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 9).wait(156));
        this.instance_9 = new b.arrow_container;
        this.instance_9.parent = this;
        this.instance_9.setTransform(223.2, 293.6, 2, 2, 0, 0, 0, -6.9, -6.7);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(211).to({
            _off: !1
        }, 0).wait(1));
        this.instance_10 = new b.spread_container;
        this.instance_10.parent =
            this;
        this.instance_10.setTransform(120, 155);
        this.instance_10.alpha = .0508;
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(5).to({
            _off: !1
        }, 0).wait(4).to({
            alpha: 1
        }, 0).wait(28).to({
            alpha: 0
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(171));
        this.instance_11 = new b.glitter_rise;
        this.instance_11.parent = this;
        this.instance_11.setTransform(84.15, -2.4, 1, 1, -6.1966, 0, 0, 0, 6.6);
        this.instance_11.alpha = .6992;
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(1).to({
                _off: !1
            },
            0).wait(211));
        this.lighter_tgt = new b.mc_bubble_set;
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(121, 336, 1, 1, 89.9781);
        this.lighter_tgt.alpha = .0117;
        this.lighter_tgt._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt).wait(116).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 7).wait(89));
        this.instance_12 = new b.white_rect;
        this.instance_12.parent = this;
        this.instance_12.setTransform(121, 149.55, 1, 1, 0, 0, 0, 181, 235.5);
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(5).to({
                _off: !1
            },
            0).to({
            alpha: .0117
        }, 3).wait(1).to({
            alpha: .6016
        }, 0).to({
            alpha: .0117
        }, 7).to({
            _off: !0
        }, 1).wait(18).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 4, a.Ease.get(-1)).wait(1).to({
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(166));
        this.instance_13 = new b.black_rect;
        this.instance_13.parent = this;
        this.instance_13.setTransform(118, 158.55, 1, 1, 0, 0, 0, 137, 175.5);
        this.instance_13.alpha = .0117;
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(5).to({
            _off: !1
        }, 0).to({
            alpha: .3984
        }, 3).to({
                _off: !0
            },
            1).wait(203));
        this.mekuri = new b.calender_page;
        this.mekuri.name = "mekuri";
        this.mekuri.parent = this;
        this.mekuri.setTransform(120, 163, 1, 1, 0, 0, 0, 480, 270);
        this.mekuri._off = !0;
        this.timeline.addTween(a.Tween.get(this.mekuri).wait(156).to({
            _off: !1
        }, 0).wait(56));
        this.instance_14 = new b.calender_frame;
        this.instance_14.parent = this;
        this.instance_14.setTransform(0, 0, .5, .5);
        this.instance_14._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(135).to({
            _off: !1
        }, 0).wait(77));
        this.today = new b.calender_bg1;
        this.today.name = "today";
        this.today.parent = this;
        this.today.setTransform(120, 483.2, 1, 1, 0, 0, 0, 120, 147.2);
        this.timeline.addTween(a.Tween.get(this.today).wait(135).to({
            y: 163.2
        }, 0).to({
            _off: !0
        }, 21).wait(56));
        this.tomorrow = new b.calender_bg1;
        this.tomorrow.name = "tomorrow";
        this.tomorrow.parent = this;
        this.tomorrow.setTransform(120, 478.2, 1, 1, 0, 0, 0, 120, 147.2);
        this.timeline.addTween(a.Tween.get(this.tomorrow).wait(135).to({
            y: 163.2
        }, 0).wait(77));
        this.instance_15 = new b.bg_pre;
        this.instance_15.parent = this;
        this.instance_15.setTransform(120,
            155);
        this.instance_15._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(40).to({
            _off: !1
        }, 0).wait(35).to({
            regX: -70.5,
            x: 49.65
        }, 0).wait(1).to({
            x: 50.3
        }, 0).wait(1).to({
            x: 51.5
        }, 0).wait(1).to({
            x: 53.4
        }, 0).wait(1).to({
            x: 56.25
        }, 0).wait(1).to({
            x: 60.3
        }, 0).wait(1).to({
            x: 65.65
        }, 0).wait(1).to({
            x: 71.9
        }, 0).wait(1).to({
            x: 77.85
        }, 0).wait(1).to({
            x: 82.7
        }, 0).wait(1).to({
            x: 86.25
        }, 0).wait(1).to({
            x: 88.75
        }, 0).wait(1).to({
            x: 90.45
        }, 0).wait(1).to({
            x: 91.45
        }, 0).wait(1).to({
            regX: 0,
            x: 162.5
        }, 0).to({
            _off: !0
        }, 46).wait(77));
        this.bg_first = new b.bg_first;
        this.bg_first.name = "bg_first";
        this.bg_first.parent = this;
        this.bg_first.setTransform(0, 0, 1, 1.0002);
        this.bg_first._off = !0;
        this.timeline.addTween(a.Tween.get(this.bg_first).wait(5).to({
            _off: !1
        }, 0).wait(35).to({
            _off: !0
        }, 1).wait(94).to({
            _off: !1
        }, 0).wait(77));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(119, 156.55, 1, 1, 0, 0, 0, 133, 168.5);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(212));
        this.effect8 = new b.replace_effect8;
        this.effect8.name = "effect8";
        this.effect8.parent = this;
        this.effect8.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect8).to({
            _off: !0
        }, 1).wait(211));
        this.effect7 = new b.replace_effect7;
        this.effect7.name = "effect7";
        this.effect7.parent = this;
        this.effect7.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect7).to({
            _off: !0
        }, 1).wait(211));
        this.effect6 = new b.replace_effect6;
        this.effect6.name = "effect6";
        this.effect6.parent = this;
        this.effect6.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect6).to({
                _off: !0
            },
            1).wait(211));
        this.effect5 = new b.replace_effect5;
        this.effect5.name = "effect5";
        this.effect5.parent = this;
        this.effect5.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect5).to({
            _off: !0
        }, 1).wait(211));
        this.effect4 = new b.replace_effect4;
        this.effect4.name = "effect4";
        this.effect4.parent = this;
        this.effect4.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect4).to({
            _off: !0
        }, 1).wait(211));
        this.effect3 = new b.replace_effect3;
        this.effect3.name = "effect3";
        this.effect3.parent = this;
        this.effect3.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect3).to({
            _off: !0
        }, 1).wait(211));
        this.effect2 = new b.replace_effect2;
        this.effect2.name = "effect2";
        this.effect2.parent = this;
        this.effect2.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect2).to({
            _off: !0
        }, 1).wait(211));
        this.effect1 = new b.replace_effect1;
        this.effect1.name = "effect1";
        this.effect1.parent = this;
        this.effect1.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect1).to({
                _off: !0
            },
            1).wait(211));
        this.cf8 = new b.chara_replace8;
        this.cf8.name = "cf8";
        this.cf8.parent = this;
        this.cf8.setTransform(679, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf8).to({
            _off: !0
        }, 1).wait(211));
        this.cf7 = new b.chara_replace7;
        this.cf7.name = "cf7";
        this.cf7.parent = this;
        this.cf7.setTransform(531, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf7).to({
            _off: !0
        }, 1).wait(211));
        this.cf6 = new b.chara_replace6;
        this.cf6.name = "cf6";
        this.cf6.parent = this;
        this.cf6.setTransform(334,
            -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf6).to({
            _off: !0
        }, 1).wait(211));
        this.cf5 = new b.chara_replace5;
        this.cf5.name = "cf5";
        this.cf5.parent = this;
        this.cf5.setTransform(101, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf5).to({
            _off: !0
        }, 1).wait(211));
        this.cf4 = new b.chara_replace4;
        this.cf4.name = "cf4";
        this.cf4.parent = this;
        this.cf4.setTransform(-114.95, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf4).to({
            _off: !0
        }, 1).wait(211));
        this.cf3 =
            new b.chara_replace3;
        this.cf3.name = "cf3";
        this.cf3.parent = this;
        this.cf3.setTransform(-345.95, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf3).to({
            _off: !0
        }, 1).wait(211));
        this.cf2 = new b.chara_replace2;
        this.cf2.name = "cf2";
        this.cf2.parent = this;
        this.cf2.setTransform(-548.95, -550.25, 1, 1, 0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf2).to({
            _off: !0
        }, 1).wait(211));
        this.cf1 = new b.chara_replace1;
        this.cf1.name = "cf1";
        this.cf1.parent = this;
        this.cf1.setTransform(-750.95, -550.25, 1, 1,
            0, 0, 0, 0, -187);
        this.timeline.addTween(a.Tween.get(this.cf1).to({
            _off: !0
        }, 1).wait(211));
        this.instance_16 = new b.replace_day_14;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_16).to({
            _off: !0
        }, 1).wait(211));
        this.instance_17 = new b.replace_day_13;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_17).to({
            _off: !0
        }, 1).wait(211));
        this.instance_18 = new b.replace_day_12;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_18).to({
            _off: !0
        }, 1).wait(211));
        this.instance_19 = new b.replace_day_11;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_19).to({
            _off: !0
        }, 1).wait(211));
        this.instance_20 = new b.replace_day_10;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-438.95,
            204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_20).to({
            _off: !0
        }, 1).wait(211));
        this.instance_21 = new b.replace_day_9;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_21).to({
            _off: !0
        }, 1).wait(211));
        this.instance_22 = new b.replace_day_8;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_22).to({
                _off: !0
            },
            1).wait(211));
        this.instance_23 = new b.replace_day_7;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_23).to({
            _off: !0
        }, 1).wait(211));
        this.instance_24 = new b.replace_day_6;
        this.instance_24.parent = this;
        this.instance_24.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_24).to({
            _off: !0
        }, 1).wait(211));
        this.instance_25 = new b.replace_day_5;
        this.instance_25.parent = this;
        this.instance_25.setTransform(-438.95,
            204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_25).to({
            _off: !0
        }, 1).wait(211));
        this.instance_26 = new b.replace_day_4;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_26).to({
            _off: !0
        }, 1).wait(211));
        this.instance_27 = new b.replace_day_3;
        this.instance_27.parent = this;
        this.instance_27.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_27).to({
                _off: !0
            },
            1).wait(211));
        this.instance_28 = new b.replace_day_2;
        this.instance_28.parent = this;
        this.instance_28.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_28).to({
            _off: !0
        }, 1).wait(211));
        this.instance_29 = new b.replace_day_1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_29).to({
            _off: !0
        }, 1).wait(211));
        this.instance_30 = new b.replace_day_10;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-438.95,
            204.05, .5, .5, 0, 0, 0, 960, 540.1);
        this.timeline.addTween(a.Tween.get(this.instance_30).to({
            _off: !0
        }, 1).wait(211));
        this.instance_31 = new b.replace_day_0;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-438.95, 204, .5, .5, 0, 0, 0, 960, 540);
        this.timeline.addTween(a.Tween.get(this.instance_31).to({
            _off: !0
        }, 1).wait(211))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-932.2, -607.7, 1819.7, 1482.4);
    b.properties = {
        id: "countdown_login",
        width: 240,
        height: 310,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1,
        manifest: [{
                src: "images/bg.jpg",
                id: "countdown_login_bg"
            }, {
                src: "images/calender_frame.png",
                id: "countdown_login_calender_frame"
            }, {
                src: "images/circre_rainbaw_small.png",
                id: "countdown_login_circre_rainbaw_small"
            }, {
                src: "images/day1.png",
                id: "countdown_login_day1"
            }, {
                src: "images/day10.png",
                id: "countdown_login_day10"
            }, {
                src: "images/day1_00000.png",
                id: "countdown_login_day1_00000"
            }, {
                src: "images/day1_00001.png",
                id: "countdown_login_day1_00001"
            }, {
                src: "images/day1_00002.png",
                id: "countdown_login_day1_00002"
            }, {
                src: "images/day1_00003.png",
                id: "countdown_login_day1_00003"
            }, {
                src: "images/day1_00004.png",
                id: "countdown_login_day1_00004"
            }, {
                src: "images/day1_00005.png",
                id: "countdown_login_day1_00005"
            }, {
                src: "images/day1_00006.png",
                id: "countdown_login_day1_00006"
            }, {
                src: "images/day1_00007.png",
                id: "countdown_login_day1_00007"
            }, {
                src: "images/day1_00008.png",
                id: "countdown_login_day1_00008"
            }, {
                src: "images/day1_00009.png",
                id: "countdown_login_day1_00009"
            }, {
                src: "images/day1_00010.png",
                id: "countdown_login_day1_00010"
            }, {
                src: "images/day1_00011.png",
                id: "countdown_login_day1_00011"
            }, {
                src: "images/day1_00012.png",
                id: "countdown_login_day1_00012"
            }, {
                src: "images/day1_00013.png",
                id: "countdown_login_day1_00013"
            }, {
                src: "images/day1_00014.png",
                id: "countdown_login_day1_00014"
            }, {
                src: "images/day2.png",
                id: "countdown_login_day2"
            }, {
                src: "images/day3.png",
                id: "countdown_login_day3"
            }, {
                src: "images/day4.png",
                id: "countdown_login_day4"
            }, {
                src: "images/day5.png",
                id: "countdown_login_day5"
            }, {
                src: "images/day6.png",
                id: "countdown_login_day6"
            }, {
                src: "images/day7.png",
                id: "countdown_login_day7"
            }, {
                src: "images/day8.png",
                id: "countdown_login_day8"
            }, {
                src: "images/day9.png",
                id: "countdown_login_day9"
            }, {
                src: "images/logo.png",
                id: "countdown_login_logo"
            }, {
                src: "images/logo_b.png",
                id: "countdown_login_logo_b"
            }, {
                src: "images/logo_w.png",
                id: "countdown_login_logo_w"
            }, {
                src: "images/office_bg.jpg",
                id: "countdown_login_office_bg"
            }, {
                src: "images/replace_character1_1.png",
                id: "countdown_login_replace_character1_1"
            }, {
                src: "images/replace_character1_2.png",
                id: "countdown_login_replace_character1_2"
            }, {
                src: "images/replace_character1_3.png",
                id: "countdown_login_replace_character1_3"
            }, {
                src: "images/replace_character1_4.png",
                id: "countdown_login_replace_character1_4"
            }, {
                src: "images/replace_character1_5.png",
                id: "countdown_login_replace_character1_5"
            }, {
                src: "images/replace_character1_6.png",
                id: "countdown_login_replace_character1_6"
            }, {
                src: "images/replace_character1_7.png",
                id: "countdown_login_replace_character1_7"
            }, {
                src: "images/replace_character1_b.png",
                id: "countdown_login_replace_character1_b"
            }, {
                src: "images/replace_character1_b2.png",
                id: "countdown_login_replace_character1_b2"
            },
            {
                src: "images/replace_character1_b3.png",
                id: "countdown_login_replace_character1_b3"
            }, {
                src: "images/replace_character1_b4.png",
                id: "countdown_login_replace_character1_b4"
            }, {
                src: "images/replace_character1_b5.png",
                id: "countdown_login_replace_character1_b5"
            }, {
                src: "images/replace_character1_b6.png",
                id: "countdown_login_replace_character1_b6"
            }, {
                src: "images/replace_character1_b7.png",
                id: "countdown_login_replace_character1_b7"
            }, {
                src: "images/replace_character2_1.png",
                id: "countdown_login_replace_character2_1"
            }, {
                src: "images/replace_character2_2.png",
                id: "countdown_login_replace_character2_2"
            }, {
                src: "images/replace_character2_3.png",
                id: "countdown_login_replace_character2_3"
            }, {
                src: "images/replace_character2_4.png",
                id: "countdown_login_replace_character2_4"
            }, {
                src: "images/replace_character2_5.png",
                id: "countdown_login_replace_character2_5"
            }, {
                src: "images/replace_character2_6.png",
                id: "countdown_login_replace_character2_6"
            },
            {
                src: "images/replace_character2_7.png",
                id: "countdown_login_replace_character2_7"
            }, {
                src: "images/replace_character2_b.png",
                id: "countdown_login_replace_character2_b"
            }, {
                src: "images/replace_character2_b2.png",
                id: "countdown_login_replace_character2_b2"
            }, {
                src: "images/replace_character2_b3.png",
                id: "countdown_login_replace_character2_b3"
            }, {
                src: "images/replace_character2_b4.png",
                id: "countdown_login_replace_character2_b4"
            }, {
                src: "images/replace_character2_b5.png",
                id: "countdown_login_replace_character2_b5"
            }, {
                src: "images/replace_character2_b6.png",
                id: "countdown_login_replace_character2_b6"
            }, {
                src: "images/replace_character2_b7.png",
                id: "countdown_login_replace_character2_b7"
            }, {
                src: "images/replace_character3_1.png",
                id: "countdown_login_replace_character3_1"
            }, {
                src: "images/replace_character3_2.png",
                id: "countdown_login_replace_character3_2"
            }, {
                src: "images/replace_character3_3.png",
                id: "countdown_login_replace_character3_3"
            },
            {
                src: "images/replace_character3_4.png",
                id: "countdown_login_replace_character3_4"
            }, {
                src: "images/replace_character3_5.png",
                id: "countdown_login_replace_character3_5"
            }, {
                src: "images/replace_character3_6.png",
                id: "countdown_login_replace_character3_6"
            }, {
                src: "images/replace_character3_7.png",
                id: "countdown_login_replace_character3_7"
            }, {
                src: "images/replace_character3_b.png",
                id: "countdown_login_replace_character3_b"
            }, {
                src: "images/replace_character3_b2.png",
                id: "countdown_login_replace_character3_b2"
            }, {
                src: "images/replace_character3_b3.png",
                id: "countdown_login_replace_character3_b3"
            }, {
                src: "images/replace_character3_b4.png",
                id: "countdown_login_replace_character3_b4"
            }, {
                src: "images/replace_character3_b5.png",
                id: "countdown_login_replace_character3_b5"
            }, {
                src: "images/replace_character3_b6.png",
                id: "countdown_login_replace_character3_b6"
            }, {
                src: "images/replace_character3_b7.png",
                id: "countdown_login_replace_character3_b7"
            },
            {
                src: "images/replace_character4_1.png",
                id: "countdown_login_replace_character4_1"
            }, {
                src: "images/replace_character4_2.png",
                id: "countdown_login_replace_character4_2"
            }, {
                src: "images/replace_character4_3.png",
                id: "countdown_login_replace_character4_3"
            }, {
                src: "images/replace_character4_4.png",
                id: "countdown_login_replace_character4_4"
            }, {
                src: "images/replace_character4_5.png",
                id: "countdown_login_replace_character4_5"
            }, {
                src: "images/replace_character4_6.png",
                id: "countdown_login_replace_character4_6"
            }, {
                src: "images/replace_character4_7.png",
                id: "countdown_login_replace_character4_7"
            }, {
                src: "images/replace_character4_b.png",
                id: "countdown_login_replace_character4_b"
            }, {
                src: "images/replace_character4_b2.png",
                id: "countdown_login_replace_character4_b2"
            }, {
                src: "images/replace_character4_b3.png",
                id: "countdown_login_replace_character4_b3"
            }, {
                src: "images/replace_character4_b4.png",
                id: "countdown_login_replace_character4_b4"
            },
            {
                src: "images/replace_character4_b5.png",
                id: "countdown_login_replace_character4_b5"
            }, {
                src: "images/replace_character4_b6.png",
                id: "countdown_login_replace_character4_b6"
            }, {
                src: "images/replace_character4_b7.png",
                id: "countdown_login_replace_character4_b7"
            }, {
                src: "images/replace_character5_1.png",
                id: "countdown_login_replace_character5_1"
            }, {
                src: "images/replace_character5_2.png",
                id: "countdown_login_replace_character5_2"
            }, {
                src: "images/replace_character5_3.png",
                id: "countdown_login_replace_character5_3"
            }, {
                src: "images/replace_character5_4.png",
                id: "countdown_login_replace_character5_4"
            }, {
                src: "images/replace_character5_5.png",
                id: "countdown_login_replace_character5_5"
            }, {
                src: "images/replace_character5_6.png",
                id: "countdown_login_replace_character5_6"
            }, {
                src: "images/replace_character5_7.png",
                id: "countdown_login_replace_character5_7"
            }, {
                src: "images/replace_character5_b.png",
                id: "countdown_login_replace_character5_b"
            },
            {
                src: "images/replace_character5_b2.png",
                id: "countdown_login_replace_character5_b2"
            }, {
                src: "images/replace_character5_b3.png",
                id: "countdown_login_replace_character5_b3"
            }, {
                src: "images/replace_character5_b4.png",
                id: "countdown_login_replace_character5_b4"
            }, {
                src: "images/replace_character5_b5.png",
                id: "countdown_login_replace_character5_b5"
            }, {
                src: "images/replace_character5_b6.png",
                id: "countdown_login_replace_character5_b6"
            }, {
                src: "images/replace_character5_b7.png",
                id: "countdown_login_replace_character5_b7"
            }, {
                src: "images/replace_character6_1.png",
                id: "countdown_login_replace_character6_1"
            }, {
                src: "images/replace_character6_2.png",
                id: "countdown_login_replace_character6_2"
            }, {
                src: "images/replace_character6_3.png",
                id: "countdown_login_replace_character6_3"
            }, {
                src: "images/replace_character6_4.png",
                id: "countdown_login_replace_character6_4"
            }, {
                src: "images/replace_character6_5.png",
                id: "countdown_login_replace_character6_5"
            },
            {
                src: "images/replace_character6_6.png",
                id: "countdown_login_replace_character6_6"
            }, {
                src: "images/replace_character6_7.png",
                id: "countdown_login_replace_character6_7"
            }, {
                src: "images/replace_character6_b.png",
                id: "countdown_login_replace_character6_b"
            }, {
                src: "images/replace_character6_b2.png",
                id: "countdown_login_replace_character6_b2"
            }, {
                src: "images/replace_character6_b3.png",
                id: "countdown_login_replace_character6_b3"
            }, {
                src: "images/replace_character6_b4.png",
                id: "countdown_login_replace_character6_b4"
            }, {
                src: "images/replace_character6_b5.png",
                id: "countdown_login_replace_character6_b5"
            }, {
                src: "images/replace_character6_b6.png",
                id: "countdown_login_replace_character6_b6"
            }, {
                src: "images/replace_character6_b7.png",
                id: "countdown_login_replace_character6_b7"
            }, {
                src: "images/replace_character7_1.png",
                id: "countdown_login_replace_character7_1"
            }, {
                src: "images/replace_character7_2.png",
                id: "countdown_login_replace_character7_2"
            },
            {
                src: "images/replace_character7_3.png",
                id: "countdown_login_replace_character7_3"
            }, {
                src: "images/replace_character7_4.png",
                id: "countdown_login_replace_character7_4"
            }, {
                src: "images/replace_character7_5.png",
                id: "countdown_login_replace_character7_5"
            }, {
                src: "images/replace_character7_6.png",
                id: "countdown_login_replace_character7_6"
            }, {
                src: "images/replace_character7_7.png",
                id: "countdown_login_replace_character7_7"
            }, {
                src: "images/replace_character7_b.png",
                id: "countdown_login_replace_character7_b"
            }, {
                src: "images/replace_character7_b2.png",
                id: "countdown_login_replace_character7_b2"
            }, {
                src: "images/replace_character7_b3.png",
                id: "countdown_login_replace_character7_b3"
            }, {
                src: "images/replace_character7_b4.png",
                id: "countdown_login_replace_character7_b4"
            }, {
                src: "images/replace_character7_b5.png",
                id: "countdown_login_replace_character7_b5"
            }, {
                src: "images/replace_character7_b6.png",
                id: "countdown_login_replace_character7_b6"
            },
            {
                src: "images/replace_character7_b7.png",
                id: "countdown_login_replace_character7_b7"
            }, {
                src: "images/replace_character8_1.png",
                id: "countdown_login_replace_character8_1"
            }, {
                src: "images/replace_character8_2.png",
                id: "countdown_login_replace_character8_2"
            }, {
                src: "images/replace_character8_3.png",
                id: "countdown_login_replace_character8_3"
            }, {
                src: "images/replace_character8_4.png",
                id: "countdown_login_replace_character8_4"
            }, {
                src: "images/replace_character8_5.png",
                id: "countdown_login_replace_character8_5"
            }, {
                src: "images/replace_character8_6.png",
                id: "countdown_login_replace_character8_6"
            }, {
                src: "images/replace_character8_7.png",
                id: "countdown_login_replace_character8_7"
            }, {
                src: "images/replace_character8_b.png",
                id: "countdown_login_replace_character8_b"
            }, {
                src: "images/replace_character8_b2.png",
                id: "countdown_login_replace_character8_b2"
            }, {
                src: "images/replace_character8_b3.png",
                id: "countdown_login_replace_character8_b3"
            },
            {
                src: "images/replace_character8_b4.png",
                id: "countdown_login_replace_character8_b4"
            }, {
                src: "images/replace_character8_b5.png",
                id: "countdown_login_replace_character8_b5"
            }, {
                src: "images/replace_character8_b6.png",
                id: "countdown_login_replace_character8_b6"
            }, {
                src: "images/replace_character8_b7.png",
                id: "countdown_login_replace_character8_b7"
            }, {
                src: "images/replace_target_240x240_item_l.png",
                id: "countdown_login_replace_target_240x240_item_l"
            },
            {
                src: "images/star1.png",
                id: "countdown_login_star1"
            }, {
                src: "images/wt_replace_item.png",
                id: "countdown_login_wt_replace_item"
            }
        ],
        preloads: []
    };
    (b.Stage = function(d) {
        createjs.Stage.call(this, d)
    }).prototype = c = new createjs.Stage;
    c.setAutoPlay = function(d) {
        this.tickEnabled = d
    };
    c.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    };
    c.stop = function(d) {
        d && this.seek(d);
        this.tickEnabled = !1
    };
    c.seek = function(d) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(b.properties.fps *
            d / 1E3)
    };
    c.getDuration = function() {
        return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
    };
    c.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / b.properties.fps * 1E3
    };
    l.bootcompsLoaded = l.bootcompsLoaded || [];
    l.bootstrapListeners || (l.bootstrapListeners = []);
    l.bootstrapCallback = function(d) {
        l.bootstrapListeners.push(d);
        if (0 < l.bootcompsLoaded.length)
            for (var e = 0; e < l.bootcompsLoaded.length; ++e) d(l.bootcompsLoaded[e])
    };
    l.compositions = l.compositions || {};
    l.compositions.countdown_login = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return q
        },
        getImages: function() {
            return g
        }
    };
    l.compositionLoaded = function(d) {
        l.bootcompsLoaded.push(d);
        for (var e = 0; e < l.bootstrapListeners.length; e++) l.bootstrapListeners[e](d)
    };
    l.getComposition = function(d) {
        return l.compositions[d]
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;