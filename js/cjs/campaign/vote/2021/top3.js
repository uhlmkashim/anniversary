(function(a, k) {
    function C() {
        var c = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        c.gotoAndStop(this.currentFrame);
        c.paused = this.paused;
        c.framerate = this.framerate;
        return c
    }

    function g(c, d, e) {
        c = a.extend(c, a.MovieClip);
        c.clone = C;
        c.nominalBounds = d;
        c.frameBounds = e;
        return c
    }
    var f, b = {},
        D = {},
        h = {};
    b.ssMetadata = [];
    (b._004_shuttle_all = function() {
        this.initialize(h.top3__004_shuttle_all)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 346, 346);
    (b.bg = function() {
        this.initialize(h.top3_bg)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.bg_op = function() {
        this.initialize(h.top3_bg_op)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.fp_kira = function() {
        this.initialize(h.top3_fp_kira)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 20, 20);
    (b.frame_bottom = function() {
        this.initialize(h.top3_frame_bottom)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 84);
    (b.frame_top = function() {
        this.initialize(h.top3_frame_top)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 72);
    (b.logo_result = function() {
        this.initialize(h.top3_logo_result)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 448, 260);
    (b.logo_result_black = function() {
        this.initialize(h.top3_logo_result_black)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 448, 260);
    (b.logo_result_white = function() {
        this.initialize(h.top3_logo_result_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 448, 260);
    (b.shuttle_co = function() {
        this.initialize(h.top3_shuttle_co)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 346, 346);
    (b.shuttle_cu = function() {
        this.initialize(h.top3_shuttle_cu)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 346, 346);
    (b.shuttle_pa = function() {
        this.initialize(h.top3_shuttle_pa)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 346, 346);
    (b.sp_kira = function() {
        this.initialize(h.top3_sp_kira)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 40, 40);
    (b.type_result = function() {
        this.initialize(h.top3_type_result)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 64);
    (b.type_result_co1 = function() {
        this.initialize(h.top3_type_result_co1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_co1_name = function() {
        this.initialize(h.top3_type_result_co1_name)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 157, 67);
    (b.type_result_co2 = function() {
        this.initialize(h.top3_type_result_co2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_co2_name =
        function() {
            this.initialize(h.top3_type_result_co2_name)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 157, 66);
    (b.type_result_co3 = function() {
        this.initialize(h.top3_type_result_co3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_co3_name = function() {
        this.initialize(h.top3_type_result_co3_name)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 123, 65);
    (b.type_result_cu1 = function() {
        this.initialize(h.top3_type_result_cu1)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_cu1_name = function() {
        this.initialize(h.top3_type_result_cu1_name)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 188, 68);
    (b.type_result_cu1_no_ = function() {
        this.initialize(h.top3_type_result_cu1_no_)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 104, 76);
    (b.type_result_cu2 = function() {
        this.initialize(h.top3_type_result_cu2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_cu2_name = function() {
        this.initialize(h.top3_type_result_cu2_name)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 191, 65);
    (b.type_result_cu2_no_ = function() {
        this.initialize(h.top3_type_result_cu2_no_)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 114, 75);
    (b.type_result_cu3 = function() {
        this.initialize(h.top3_type_result_cu3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_cu3_name = function() {
        this.initialize(h.top3_type_result_cu3_name)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 190, 66);
    (b.type_result_cu3_no_ = function() {
        this.initialize(h.top3_type_result_cu3_no_)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 112, 75);
    (b.type_result_pa1 = function() {
        this.initialize(h.top3_type_result_pa1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_pa1_name = function() {
        this.initialize(h.top3_type_result_pa1_name)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 157, 68);
    (b.type_result_pa2 = function() {
        this.initialize(h.top3_type_result_pa2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_pa2_name = function() {
        this.initialize(h.top3_type_result_pa2_name)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 123, 65);
    (b.type_result_pa3 = function() {
        this.initialize(h.top3_type_result_pa3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 640);
    (b.type_result_pa3_name = function() {
        this.initialize(h.top3_type_result_pa3_name)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 190, 66);
    (b.type_result_title_co = function() {
        this.initialize(h.top3_type_result_title_co)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 154, 68);
    (b.type_result_title_co_white = function() {
        this.initialize(h.top3_type_result_title_co_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 154, 68);
    (b.type_result_title_cu = function() {
        this.initialize(h.top3_type_result_title_cu)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,
        0, 160, 72);
    (b.type_result_title_cu_white = function() {
        this.initialize(h.top3_type_result_title_cu_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 160, 72);
    (b.type_result_title_pa = function() {
        this.initialize(h.top3_type_result_title_pa)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 240, 68);
    (b.type_result_title_pa_white = function() {
        this.initialize(h.top3_type_result_title_pa_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 240, 68);
    (b.type_result_white =
        function() {
            this.initialize(h.top3_type_result_white)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 64);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p = function(c, d, e) {
        this.initialize(c, d, e, {});
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.\u30b7\u30f3\u30dc\u30eb10000 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb10000, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.\u30b7\u30f3\u30dc\u30eb17 = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0)"], [.408, 1], -34.6, 37.5, 0, -34.6, 37.5, 76.7).s().p("AmIF7IAAr0IAkAAQE2AADbDbQDbDbAAE2IAAAIg");
        this.shape.setTransform(39.25, -37.85);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb17, new a.Rectangle(0, -75.7, 78.5, 75.7), null);
    (b.\u30b7\u30f3\u30dc\u30eb16 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["rgba(255,255,255,0)", "rgba(255,255,255,0.8)",
            "rgba(255,255,255,0)"
        ], [0, .51, 1], 0, 191.4, 0, -174.3).s().p("AkMfQMgGMg+fIUxAAMgGMA+fg");
        this.shape.setTransform(0, -292.35);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb16, new a.Rectangle(-66.5, -492.3, 133.1, 400), null);
    (b.\u30b7\u30f3\u30dc\u30eb12 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AhUgpICpAAIhVBUg");
        this.shape.setTransform(-.025, -4.25);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        g(b.\u30b7\u30f3\u30dc\u30eb12, new a.Rectangle(-8.5, -8.5, 17, 8.5), null);
    (b.\u30b7\u30f3\u30dc\u30eb9 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(.575, -.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1,
            1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb9, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.white_type = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_white;
        this.instance.parent = this;
        this.instance.setTransform(-120, -16, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.white_type,
        new a.Rectangle(-120, -16, 240, 32), null);
    (b.type_result_title_pa_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_title_pa;
        this.instance.parent = this;
        this.instance.setTransform(-120, -34);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.type_result_title_pa_1, new a.Rectangle(-120, -34, 240, 68), null);
    (b.type_result_title_co_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_title_co;
        this.instance.parent = this;
        this.instance.setTransform(-77,
            -34);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.type_result_title_co_1, new a.Rectangle(-77, -34, 154, 68), null);
    (b.type_result_cu3_no__1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_cu3_no_;
        this.instance.parent = this;
        this.instance.setTransform(-55.5, -38);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.type_result_cu3_no__1, new a.Rectangle(-55.5, -38, 112, 75), null);
    (b.type_result_cu2_no__1 = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b.type_result_cu2_no_;
        this.instance.parent = this;
        this.instance.setTransform(-55, -38);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.type_result_cu2_no__1, new a.Rectangle(-55, -38, 114, 75), null);
    (b.type_result_cu1_no = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_cu1_no_;
        this.instance.parent = this;
        this.instance.setTransform(-55, -38);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.type_result_cu1_no,
        new a.Rectangle(-55, -38, 104, 76), null);
    (b.title_cu = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_title_cu;
        this.instance.parent = this;
        this.instance.setTransform(-80, -36);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.title_cu, new a.Rectangle(-80, -36, 160, 72), null);
    (b.shape38 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AufO/IAA99Ic+AAIAAd9g");
        this.shape.setTransform(10.05,
            .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-82.7, -95.8, 185.5, 191.7);
    (b.powder_rise_core = function(c, d, e) {
        this.initialize(c, d, e, {});
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
            },
            2).to({
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-1.4, -1.2, 4, 3.8);
    (b.passion_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_title_pa_white;
        this.instance.parent = this;
        this.instance.setTransform(-120, -34);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.passion_white, new a.Rectangle(-120, -34, 240, 68), null);
    (b.particle_flash_guide = function(c,
        d, e) {
        this.initialize(c, d, e, {});
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
        g(b.particle_flash_guide, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.particle_flash_core_yellow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFF00").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFF00").s().p("AgVgvIA8AAIgQBfIg9AAg");
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
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.particle_flash_core_pink = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF99FF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FF99FF").s().p("AgVgvIA8AAIgQBfIg9AAg");
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
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.particle_flash_core_blue = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#00FFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#00FFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
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
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.light2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["rgba(255,255,255,0)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0)"], [0, .51, 1], 0, 191.4, 0, -174.3).s().p("AkMfQMgSmg+fMAtlAAAMgSmA+fg");
        this.shape.setTransform(66.55, 200);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-79.4, 0, 291.9, 400);
    (b.grip = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF0000").s().p("AkkAAIEkkkIElEkIklElg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.grip, new a.Rectangle(-29.3, -29.3, 58.7, 58.7), null);
    (b.gr_shuttlecu = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance =
            new b.shuttle_cu;
        this.instance.parent = this;
        this.instance.setTransform(-86.5, -86.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_shuttlecu, new a.Rectangle(-86.5, -86.5, 173, 173), null);
    (b.gr_shuttle_pa = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.shuttle_pa;
        this.instance.parent = this;
        this.instance.setTransform(-86.5, -86.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.gr_shuttle_pa, new a.Rectangle(-86.5, -86.5, 173, 173), null);
    (b.gr_shuttle_co = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.shuttle_co;
        this.instance.parent = this;
        this.instance.setTransform(-86.5, -86.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_shuttle_co, new a.Rectangle(-86.5, -86.5, 173, 173), null);
    (b.gr_shuttle = function(c, d, e) {
        this.initialize(c,
            d, e, {
                cu: 1,
                co: 2,
                pa: 3
            });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(4));
        this.instance = new b._004_shuttle_all;
        this.instance.parent = this;
        this.instance.setTransform(-86.5, -86.5, .5, .5);
        this.instance_1 = new b.shuttle_cu;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-86.5, -86.5, .5, .5);
        this.instance_2 = new b.shuttle_co;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-86.5, -86.5, .5, .5);
        this.instance_3 = new b.shuttle_pa;
        this.instance_3.parent =
            this;
        this.instance_3.setTransform(-86.5, -86.5, .5, .5);
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
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-86.5, -86.5, 173, 173);
    (b.ef_glow_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0)"], [.365, 1], 0, 0, 0, 0, 0, 55.8).s().p("AmEGFQihihAAjkQAAjjChihQChihDjAAQDkAAChChQChChAADjQAADkihChQihChjkAAQjjAAihihg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.ef_glow_white, new a.Rectangle(-55, -55, 110, 110), null);
    (b.ef_glow_red = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFDFF5", "rgba(247,184,184,0)"], [.341, .506, 1], 0, 0, 0, 0, 0, 80.3).s().p("AotIuQjnjnAAlHQAAlGDnjnQDnjnFGAAQFHAADnDnQDnDnAAFGQAAFHjnDnQjnDnlHAAQlGAAjnjng");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.ef_glow_red, new a.Rectangle(-78.9, -78.9,
        157.8, 157.8), null);
    (b.cute_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_title_cu_white;
        this.instance.parent = this;
        this.instance.setTransform(-80, -36);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.cute_white, new a.Rectangle(-80, -36, 160, 72), null);
    (b.cool_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_title_co_white;
        this.instance.parent = this;
        this.instance.setTransform(-77, -34);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.cool_white, new a.Rectangle(-77, -34, 154, 68), null);
    (b.card_tekari = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AnSEIIAGgmIWCAAIgGAmgArcDJIAAj4IWCAAIAAD4gAu1i0IAAhUIWCAAIAABUg");
        this.shape.setTransform(2.775, 1.1);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.card_tekari, new a.Rectangle(-92.2, -25.3, 190, 52.900000000000006), null);
    (b.btn = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.btn, new a.Rectangle(0, 0, 240, 320), null);
    (b.bg_black = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.bg_black, new a.Rectangle(0, 0, 240, 320), null);
    (b._yusho_p = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance =
            new b.type_result;
        this.instance.parent = this;
        this.instance.setTransform(-120, -16, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._yusho_p, new a.Rectangle(-120, -16, 240, 32), null);
    (b._\u304d\u3089\u304d\u3089 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_kira;
        this.instance.parent = this;
        this.instance.setTransform(-10, -10, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.fp_kira;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-10,
            -10);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = g(b._\u304d\u3089\u304d\u3089, new a.Rectangle(-10, -10, 20, 20), null);
    (b.circle1_yellow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFFF00").ss(.5, 1, 1).p("AIqopQDlDlAAFEQAAFFjlDlQjlDllFAAQlEAAjljlQjljlAAlFQAAlEDljlQDljlFEAAQFFAADlDlg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-79.2, -79.2, 158.5, 158.5);
    (b.circle1_pink = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FF99FF").ss(.5, 1, 1).p("AIqopQDlDlAAFEQAAFFjlDlQjlDllFAAQlEAAjljlQjljlAAlFQAAlEDljlQDljlFEAAQFFAADlDlg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-79.2, -79.2, 158.5, 158.5);
    (b.circle1_blue = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#00FFFF").ss(.5, 1, 1).p("AIqopQDlDlAAFEQAAFFjlDlQjlDllFAAQlEAAjljlQjljlAAlFQAAlEDljlQDljlFEAAQFFAADlDlg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-79.2, -79.2, 158.5, 158.5);
    (b._bg_op = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg_op;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._bg_op, new a.Rectangle(0, 0, 240, 320), null);
    (b._bg = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg;
        this.instance.parent = this;
        this.instance.setTransform(0,
            0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._bg, new a.Rectangle(0, 0, 240, 320), null);
    (b.gr_pa3 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_pa3;
        this.instance.parent = this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_pa3, new a.Rectangle(-40, -155, 80, 320), null);
    (b.gr_pa2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_pa2;
        this.instance.parent =
            this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_pa2, new a.Rectangle(-40, -155, 80, 320), null);
    (b.gr_pa1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_pa1;
        this.instance.parent = this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_pa1, new a.Rectangle(-40, -155, 80, 320), null);
    (b.gr_f_flame_up = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.frame_top;
        this.instance.parent = this;
        this.instance.setTransform(-120, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_f_flame_up, new a.Rectangle(-120, 0, 240, 36), null);
    (b.gr_f_flame_under = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.frame_bottom;
        this.instance.parent = this;
        this.instance.setTransform(-120, -42, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_f_flame_under, new a.Rectangle(-120,
        -42, 240, 42), null);
    (b.gr_cu3 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_cu3;
        this.instance.parent = this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_cu3, new a.Rectangle(-40, -155, 80, 320), null);
    (b.gr_cu2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_cu2;
        this.instance.parent = this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.gr_cu2, new a.Rectangle(-40, -155, 80, 320), null);
    (b.gr_cu1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_cu1;
        this.instance.parent = this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_cu1, new a.Rectangle(-40, -155, 80, 320), null);
    (b.gr_co3 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_co3;
        this.instance.parent = this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.gr_co3, new a.Rectangle(-40, -155, 80, 320), null);
    (b.gr_co2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_co2;
        this.instance.parent = this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_co2, new a.Rectangle(-40, -155, 80, 320), null);
    (b.gr_co1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_co1;
        this.instance.parent = this;
        this.instance.setTransform(-40, -155, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.gr_co1, new a.Rectangle(-40, -155, 80, 320), null);
    (b.\u540d\u524d = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_cu1_name;
        this.instance.parent = this;
        this.instance.setTransform(61, 25);
        this.instance_1 = new b.type_result_cu2_name;
        this.instance_1.parent = this;
        this.instance_1.setTransform(71, 25);
        this.instance_2 = new b.type_result_cu3_name;
        this.instance_2.parent = this;
        this.instance_2.setTransform(39, 25);
        this.instance_3 = new b.type_result_co1_name;
        this.instance_3.parent = this;
        this.instance_3.setTransform(77,
            25);
        this.instance_4 = new b.type_result_co2_name;
        this.instance_4.parent = this;
        this.instance_4.setTransform(88, 25);
        this.instance_5 = new b.type_result_co3_name;
        this.instance_5.parent = this;
        this.instance_5.setTransform(80, 25);
        this.instance_6 = new b.type_result_pa1_name;
        this.instance_6.parent = this;
        this.instance_6.setTransform(79, 25);
        this.instance_7 = new b.type_result_pa2_name;
        this.instance_7.parent = this;
        this.instance_7.setTransform(110, 25);
        this.instance_8 = new b.type_result_pa3_name;
        this.instance_8.parent = this;
        this.instance_8.setTransform(46, 25);
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
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(39, 25, 223, 68);
    (b.logo_result_white_1 =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.instance = new b.logo_result_white;
            this.instance.parent = this;
            this.instance.setTransform(-112, -65, .5, .5);
            this.timeline.addTween(a.Tween.get(this.instance).wait(1))
        }).prototype = g(b.logo_result_white_1, new a.Rectangle(-112, -65, 224, 130), null);
    (b.logo_result_black_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.logo_result_black;
        this.instance.parent = this;
        this.instance.setTransform(-112, -65, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.logo_result_black_1, new a.Rectangle(-112, -65, 224, 130), null);
    (b.logo_result_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.logo_result;
        this.instance.parent = this;
        this.instance.setTransform(-112, -65, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.logo_result_1, new a.Rectangle(-112, -65, 224, 130), null);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb9;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p;
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
            },
            0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.r = Math.floor(3 * Math.random() + 2);
            this.gotoAndPlay(this.r)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb9;
        this.instance.parent = this;
        this.instance.setTransform(0,
            .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(20.35, -4.2, .7347, .7347);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5967,
            scaleY: .5967,
            rotation: 140.8707,
            x: 62.05,
            y: -59.1,
            alpha: .8319
        }, 0).wait(1).to({
            scaleX: .5493,
            scaleY: .5493,
            rotation: 189.3068,
            x: 69,
            y: -89.45,
            alpha: .774
        }, 0).wait(1).to({
            scaleX: .5163,
            scaleY: .5163,
            rotation: 222.9188,
            x: 73.15,
            y: -106,
            alpha: .7339
        }, 0).wait(1).to({
            scaleX: .4911,
            scaleY: .4911,
            rotation: 248.676,
            x: 76.15,
            y: -116.05,
            alpha: .7032
        }, 0).wait(1).to({
            scaleX: .4709,
            scaleY: .4709,
            rotation: 269.3198,
            x: 78.9,
            y: -124.4,
            alpha: .6785
        }, 0).wait(1).to({
            scaleX: .4543,
            scaleY: .4543,
            rotation: 286.2744,
            x: 81.6,
            y: -131.5,
            alpha: .6583
        }, 0).wait(1).to({
            scaleX: .4404,
            scaleY: .4404,
            rotation: 300.3959,
            x: 84.35,
            y: -137.7,
            alpha: .6415
        }, 0).wait(1).to({
            scaleX: .4288,
            scaleY: .4288,
            rotation: 312.2476,
            x: 86.75,
            y: -142.45,
            alpha: .6273
        }, 0).wait(1).to({
            scaleX: .4191,
            scaleY: .4191,
            rotation: 322.2242,
            x: 88.95,
            y: -146.3,
            alpha: .6154
        }, 0).wait(1).to({
            scaleX: .4108,
            scaleY: .4108,
            rotation: 330.6158,
            x: 90.9,
            y: -149.5,
            alpha: .6054
        }, 0).wait(1).to({
            scaleX: .404,
            scaleY: .404,
            rotation: 337.643,
            x: 92.75,
            y: -152.2,
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
            y: -156.25,
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2,
        -178.7, 148.5, 184.7);
    (b.\u30b7\u30f3\u30dc\u30eb13 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb12;
        this.instance.parent = this;
        this.instance.setTransform(0, -10.05, 1, 1, 0, 0, 0, 0, -5.6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regY: -4.2,
            y: -8.15
        }, 0).wait(1).to({
            y: -7.1
        }, 0).wait(1).to({
            y: -6.05
        }, 0).wait(1).to({
            regY: -5.6,
            y: -7
        }, 0).wait(1).to({
            regY: -4.2,
            y: -6.05
        }, 0).wait(1).to({
            y: -7.1
        }, 0).wait(1).to({
            y: -8.15
        }, 0).wait(1).to({
            regY: -5.6,
            y: -10.05
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-8.5, -12.9, 17, 11.5);
    (b.\u30b7\u30f3\u30dc\u30eb3 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance.parent = this;
        this.instance.setTransform(-27.95, -10.6, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_1 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(6.6, -28.3, .8585, .8585, -6.5255);
        this.instance_2 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(6.6, -28.3, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_3 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-5.25, -10.75, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_4 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(29.4,
            4.9, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.8);
        this.instance_5 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(4.7, -24.1, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_6 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10.05, -20.6, .6032, .6032, 19.5497);
        this.instance_7 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-7.1, -24.25, .67, .5378, 0, -7.3809,
            -157.8494);
        this.instance_8 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(7.15, -8.9, .5292, .5292, -28.5129);
        this.instance_9 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(8.05, -14.6, 1, 1, -45.4791);
        this.instance_10 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-10.7, -8.9, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_11 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(.65, -5.2, .5292, .5292, -45.4801);
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
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb3, new a.Rectangle(-130.2, -242, 259.1, 250.9), null);
    (b.yusho_mc = function(c,
        d, e) {
        this.initialize(c, d, e, {
            repeat: 0
        });
        this.frame_20 = function() {
            this.gotoAndPlay("repeat")
        };
        this.timeline.addTween(a.Tween.get(this).wait(20).call(this.frame_20).wait(1));
        c = new a.Shape;
        c._off = !0;
        c.graphics.p("ADmCKQgFgBgEgDQgLgGgJgBQgKAAgKAHIgEACIgDAAQgOgHgPAAQgOAAgPADQgPADgOAAQgOABgPgGQgGgDgFADQgCABgEgGQgDgFgCABQgFADgEgCQgEgCgGAFQgIAFgDAAQgKAAgKACIgUAEQgEABgGgDIgKgDQgegGgeABQg1ACgVACQgNABgNgLQgLgKgWgKQgdgOgMAHQgaAQgoAHQgZAFgNgCQgSgDgEgRIgGgbQgCgOAHgGQAPgMAngOQAGgCACgDQACgEACgBQAKgFAGgHQADgCAFgPQAGgQADgEIg4gBQgCAAgGAFQgFAFgDgBIgSgHQgJgEgFAEQgGAEgEATQgDANAAAPIAAAkIgBAkQAAAKgEAGIgJAJQgNAMgXAAQgOAAgNgCQgOgDgGgGIgJgKQgEgFAAgLIAAgYQABgKgDgFQgEgFgLAEQgHADgJACIgEABIgDAAQgJgCgHgHQgFgDgCABQgCABgCADIgDAFQgRAXgTAOQgQALgfALQgVAHgaAFQgNACgMgDQgOgEgGgHQgGgHgBgKQgBgHACgSQAAgDAEgFQAFgFAAgCQAAgCgKgDQgKgCgBgCQgCgGgJgGQgIgFgDgMQgDgLAAgMQABgFAJgGQAKgHABgEQAEgMAGgHIAIgLIAIgLQADgDgGgLQgGgLABgDQAGgSAJgJQAEgEAPgCIAVgDQAMgDAQABQAHAAAJAIQAJAHAHAAIAVACIAWACQAVgBANAGQAMAGAFANIAHALQAEAHAAAJIAAATQANgEAWgJQAGgDAEgGQAEgIAEgEQAFgEABgKQAAgMAEgGQAHgNALgFQAKgFAMABIAcABQAWACAFABQAQAGAPAAIAggBIAeABIAgAAQAJAAAKgCIASACQAOACADgDQAJgIAKgCQAKgDAKAEQAGADAggBIAmgCQAhABAigCIBBgCQAgAAAhACQAQABARAAIAhgCQAQAAAQADQAQADAQAJIADABIAEgBQAJgMALgDQAKgDALACQALADAMAEQAEABADgBIAHgCQAOgFAOgCQANgCAMAGQAMAFALAQQAAABABAAQAAABAAAAQABAAABAAQAAAAABgBIAEAAQAAgBAAAAQgBAAAAgBQABAAAAgBQAAAAAAgBQAGgLAJgDQAJgDAKAAIAdgBIAcAAIAiABIAmgBQAegBAHgCQADgBAEABIAGADQAPAOAOADQAPAEAPgEQAFgBgFgDQgFgDAFgCQAQgGANgDIALgCIAKgBQARACAPADIALAEQAEADAGABQAQAFAQACQAKABAGAIQAFAIACAKQABALAAALIgBAYQAAANAFAMQADAKAAAKQAAALgEAKQgEAJABAHQAAAHAEAJQAGAOgCAMQAAAEAFAHQAFAGgCAEQgGAJgJALQgEAFgGABIgMAAQgHAAgSgDQgRgEgHgEQgIgFgHAAIgQABQgHABgKAFQgKAGgGABQgSAEgUAAIgUABQgMABgIgDQgIgDgLABIgXAFQgMADgLAAQgNAAgMgDQgNgDgJgMIgFgEQgCgCgEADQgOAPgRADQgRAEgRgBIgjgBIgrAAIgsAAQgWAAgWAFIgFAAIgGAAgAF6huQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIAAAAgAvUB3QgEgBgGgHQgMgPgOgBQgOAAgQANQgNAJgPABQgOABgNgIQgMgIgJgRIgBggQALgNABgNQABgOgHgOQgEgKAAgJIABgKQADgOAHgNQAKgUARgGQASgGAVAKIAJADQADABACgCQADgBAAgIQABgFADgCIAJgDQAJgDAHgGQAHgGADgLQAAgDACgEQACgDAEAAIABAAQAEAAADACQADACABAEQAEAMAIAIQAIAIAOABQAEABACACQACADAAADQgBAKAEAAQAEABAGgEQAagKASAIQATAHAJAZIAEAOQACAHAAAGIgFAdQgCAOACAPQABAOAIAQQAFAIgDAIQgCAJgHAHQgHAIgKAFQgMAGgNAAQgPAAgPgLQgQgMgMABQgNAAgOAOIgIAHQgCACgDAAIgCAAgAPPB2QgEgBgHgIQgLgOgOAAQgOABgQAMQgJAHgMACQgLACgMgDQgLgDgJgIQgIgIgFgKQgEgLACgLQABgMAHgJQAIgJAAgHQAAgHgEgKQgIgRABgTQACgSAKgRQAMgSAQgFQARgFAUAJIAIAEQAEABACgCQACgCABgGQABgFADgDIAIgDQAKgDAHgGQAHgGACgKQAAgEACgDQACgEAEAAIACAAQAEAAADACQADADABAFQADAHAHAFIAMAJQAHADACAEQAFAKAGACQAFADAGgBIAMgDQAFgCAGgBQARAAAMAIQALAHAIAPQAHANACAOQADAPgHANQgHAPACANQABAOALANIgBAfQgJARgOAJQgNAIgPgBQgPgCgNgMQgKgJgJgBQgJgCgIAEQgIAEgIAHIgJAJQgCACgDAAIgDgBgAPPgGQgBABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIABADQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABABABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAAAAAQAAgBAAgBIgBgCIgCgDIgBAAIgDABg");
        c.setTransform(.6125, -.3204);
        this.instance = new b.card_tekari;
        this.instance.parent = this;
        this.instance.setTransform(-128.45, -5.35, 1.265, 1, -41.6902, 0, 0, .1, 8.3);
        this.instance._off = !0;
        d = [this.instance];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 2.8,
            regY: 1.1,
            scaleX: 1.2649,
            scaleY: .9999,
            rotation: -41.6864,
            x: -122.8,
            y: -13
        }, 0).wait(1).to({
            scaleX: 1.2645,
            scaleY: .9996,
            rotation: -41.675,
            x: -99.25
        }, 0).wait(1).to({
            scaleX: 1.2639,
            scaleY: .9991,
            rotation: -41.6561,
            x: -60.05
        }, 0).wait(1).to({
            regX: .1,
            regY: 8.3,
            scaleX: 1.263,
            scaleY: .9984,
            rotation: -41.6295,
            x: -2.95,
            y: -5.4
        }, 0).wait(1).to({
            regX: 2.8,
            regY: 1.1,
            scaleX: 1.2639,
            scaleY: .9991,
            rotation: -41.6561,
            x: 51.25,
            y: -13
        }, 0).wait(1).to({
            scaleX: 1.2645,
            scaleY: .9996,
            rotation: -41.675,
            x: 91.55
        }, 0).wait(1).to({
            scaleX: 1.2649,
            scaleY: .9999,
            rotation: -41.6864,
            x: 115.7
        }, 0).wait(1).to({
            regX: 0,
            regY: 8.2,
            scaleX: 1.265,
            scaleY: 1,
            rotation: -41.6902,
            x: 125.95,
            y: -5.35
        }, 0).to({
            _off: !0
        }, 1).wait(7));
        this.instance_1 = new b.white_type;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(110.8, 15.2, 1, 1, 0, 0, 0, 110.8, 15.2);
        this.instance_1.alpha = .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(5).to({
            _off: !1
        }, 0).to({
            alpha: .3984
        }, 4).to({
            alpha: .0117
        }, 4).to({
            _off: !0
        }, 1).wait(7));
        this.instance_2 = new b._yusho_p;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 34, 1, 1, 0, 0, 0, 0, 34);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(21))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-120, -16,
        240, 32);
    (b.sprite43 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(this.timeline.position + Math.floor(7 * Math.random() + 1))
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(10));
        this.instance = new b.grip;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(17));
        this.instance_1 = new b.\u30b7\u30f3\u30dc\u30eb10000;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.05, 0, .1255, 1);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .372
        }, 0).to({
            scaleX: .5,
            alpha: .1289
        }, 4).to({
            _off: !0
        }, 1).wait(11));
        this.instance_2 = new b._\u304d\u3089\u304d\u3089;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_2.alpha = .4297;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            scaleX: 1.9067,
            scaleY: 1.9067,
            rotation: -11.2055,
            alpha: .8574
        }, 0).wait(1).to({
                scaleX: 2.328,
                scaleY: 2.328,
                rotation: 0,
                alpha: 1
            },
            0).wait(1).to({
            scaleX: 2.3568,
            scaleY: 2.3568,
            rotation: 1.9399,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: 2.438,
            scaleY: 2.438,
            rotation: 7.4005,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: 2.5713,
            scaleY: 2.5713,
            rotation: 16.3817,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: 2.7571,
            scaleY: 2.7571,
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.1, -42.3, 148.2, 84.69999999999999);
    (b.sprite39 = function(c,
        d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.shape38("synched", 0);
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.sprite39, new a.Rectangle(-82.7, -95.8, 185.5, 191.7), null);
    (b.powder_rise_inner = function(c, d, e) {
        this.initialize(c, d, e, {
            r: 46,
            "-": 90
        });
        this.frame_0 = function() {
            this.rotation += Math.floor(14 * Math.random());
            this.gotoAndPlay(Math.floor(40 *
                Math.random() + 12))
        };
        this.frame_90 = function() {
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-.6, -18.2, 3.8000000000000003, 375.5);
    (b.powder_rise = function(c, d, e) {
        this.initialize(c,
            d, e, {});
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
        this.instance_4.setTransform(51.7, 6.65, .5, .5);
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
        this.instance_8.setTransform(3.5,
            13.2, .5, .5);
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
        this.instance_13 =
            new b.powder_rise_inner;
        this.instance_13.parent = this;
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
        this.instance_17.setTransform(76.4, 10.55, .8768, .8768);
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
        this.instance_22 = new b.powder_rise_inner;
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
        this.instance_25.setTransform(-27.15,
            18.2, .8768, .8768);
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
        this.instance_30.parent = this;
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
        this.instance_34 =
            new b.powder_rise_inner;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-61.55, .25, .5, .5);
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
        this.instance_39 = new b.powder_rise_inner;
        this.instance_39.parent = this;
        this.instance_39.setTransform(-46.95, 10.55, .8768, .8768);
        this.instance_40 = new b.powder_rise_inner;
        this.instance_40.parent = this;
        this.instance_40.setTransform(-37.45, 11.15, .5, .5);
        this.instance_41 = new b.powder_rise_inner;
        this.instance_41.parent = this;
        this.instance_41.setTransform(-47.75, 13.9, .5, .5);
        this.instance_42 = new b.powder_rise_inner;
        this.instance_42.parent =
            this;
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
                },
                {
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
                },
                {
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
    }).prototype = g(b.powder_rise, new a.Rectangle(-120.1, -8.8, 240.3, 17.700000000000003), null);
    (b.passion = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_title_pa_1;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.passion, new a.Rectangle(-120, -34, 240, 68), null);
    (b.particle_flash2_yellow = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.particle_flash_guide;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.particle_flash_core_yellow;
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
            },
            0).wait(1).to({
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.particle_flash2_pink = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.particle_flash_guide;
        this.instance.parent = this;
        this.instance.setTransform(0,
            .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.particle_flash_core_pink;
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
        }, 1).wait(16))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7,
        148.5, 184.7);
    (b.particle_flash2_blue = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.particle_flash_guide;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.particle_flash_core_blue;
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
        }, 1).wait(16))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.particle_flash1_yelle = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.r = Math.floor(3 * Math.random() + 2);
            this.gotoAndPlay(this.r)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.particle_flash_guide;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.particle_flash_core_yellow;
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
            },
            0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.particle_flash1_pink = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.r = Math.floor(3 * Math.random() + 2);
            this.gotoAndPlay(this.r)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.particle_flash_guide;
        this.instance.parent = this;
        this.instance.setTransform(0,
            .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.particle_flash_core_pink;
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2,
        -178.7, 148.5, 184.7);
    (b.particle_flash1_blue = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.r = Math.floor(3 * Math.random() + 2);
            this.gotoAndPlay(this.r)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.particle_flash_guide;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.particle_flash_core_blue;
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
            },
            0).wait(1).to({
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.particle_flash_container_yellow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance =
            new b.particle_flash2_yellow;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
        this.instance_1 = new b.particle_flash2_yellow;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
        this.instance_2 = new b.particle_flash2_yellow;
        this.instance_2.parent = this;
        this.instance_2.setTransform(8.15, 26.5, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_3 = new b.particle_flash1_yelle;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55,
            10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new b.particle_flash1_yelle;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.particle_flash1_yelle;
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.particle_flash2_yellow;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.particle_flash1_yelle;
        this.instance_7.parent = this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.particle_flash1_yelle;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_9 = new b.particle_flash2_yellow;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);
        this.instance_10 = new b.particle_flash1_yelle;
        this.instance_10.parent = this;
        this.instance_10.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_11 = new b.particle_flash2_yellow;
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_12 = new b.particle_flash2_yellow;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_13 = new b.particle_flash2_yellow;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_14 = new b.particle_flash2_yellow;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-12.4,
            14, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_15 = new b.particle_flash1_yelle;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.particle_flash1_yelle;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 = new b.particle_flash1_yelle;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_18 = new b.particle_flash2_yellow;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.particle_flash1_yelle;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.particle_flash1_yelle;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65, 1.75, .5292, .5292, -118.5129);
        this.instance_21 = new b.particle_flash2_yellow;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1,
            1, -135.4791);
        this.instance_22 = new b.particle_flash1_yelle;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_23 = new b.particle_flash2_yellow;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-10.95, 8.25, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_24 = new b.particle_flash2_yellow;
        this.instance_24.parent = this;
        this.instance_24.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_25 = new b.particle_flash2_yellow;
        this.instance_25.parent =
            this;
        this.instance_25.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_26 = new b.particle_flash2_yellow;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_27 = new b.particle_flash1_yelle;
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.particle_flash1_yelle;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5,
            .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 = new b.particle_flash1_yelle;
        this.instance_29.parent = this;
        this.instance_29.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_30 = new b.particle_flash2_yellow;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_31 = new b.particle_flash1_yelle;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_32 = new b.particle_flash1_yelle;
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_33 = new b.particle_flash2_yellow;
        this.instance_33.parent = this;
        this.instance_33.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_34 = new b.particle_flash1_yelle;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_35 = new b.particle_flash2_yellow;
        this.instance_35.parent = this;
        this.instance_35.setTransform(.6, -8.6, .5292, .5292, -45.4801);
        this.instance_36 = new b.particle_flash2_yellow;
        this.instance_36.parent = this;
        this.instance_36.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_37 = new b.particle_flash2_yellow;
        this.instance_37.parent = this;
        this.instance_37.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
        this.instance_38 = new b.particle_flash2_yellow;
        this.instance_38.parent = this;
        this.instance_38.setTransform(14.45, -1.3, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_39 = new b.particle_flash1_yelle;
        this.instance_39.parent = this;
        this.instance_39.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_40 = new b.particle_flash1_yelle;
        this.instance_40.parent = this;
        this.instance_40.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_41 = new b.particle_flash1_yelle;
        this.instance_41.parent = this;
        this.instance_41.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_42 = new b.particle_flash2_yellow;
        this.instance_42.parent = this;
        this.instance_42.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_43 = new b.particle_flash1_yelle;
        this.instance_43.parent = this;
        this.instance_43.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_44 = new b.particle_flash1_yelle;
        this.instance_44.parent = this;
        this.instance_44.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_45 = new b.particle_flash2_yellow;
        this.instance_45.parent = this;
        this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);
        this.instance_46 = new b.particle_flash1_yelle;
        this.instance_46.parent = this;
        this.instance_46.setTransform(12.6,
            -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_47 = new b.particle_flash2_yellow;
        this.instance_47.parent = this;
        this.instance_47.setTransform(8.9, 4.6, .5292, .5292, 44.5199);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_47
                }, {
                    t: this.instance_46
                }, {
                    t: this.instance_45
                }, {
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
    }).prototype = g(b.particle_flash_container_yellow, new a.Rectangle(-320.5, -245.4, 564, 474.70000000000005), null);
    (b.particle_flash_container_pink = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.particle_flash2_pink;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585,
            .8585, -173.2889);
        this.instance_1 = new b.particle_flash2_pink;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
        this.instance_2 = new b.particle_flash2_pink;
        this.instance_2.parent = this;
        this.instance_2.setTransform(8.15, 26.5, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_3 = new b.particle_flash1_pink;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new b.particle_flash1_pink;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.particle_flash1_pink;
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.particle_flash2_pink;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.particle_flash1_pink;
        this.instance_7.parent = this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.particle_flash1_pink;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_9 = new b.particle_flash2_pink;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);
        this.instance_10 = new b.particle_flash1_pink;
        this.instance_10.parent = this;
        this.instance_10.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_11 = new b.particle_flash2_pink;
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.25,
            20.95, .5292, .5292, 134.5199);
        this.instance_12 = new b.particle_flash2_pink;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_13 = new b.particle_flash2_pink;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_14 = new b.particle_flash2_pink;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-12.4, 14, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_15 = new b.particle_flash1_pink;
        this.instance_15.parent =
            this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.particle_flash1_pink;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 = new b.particle_flash1_pink;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_18 = new b.particle_flash2_pink;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.particle_flash1_pink;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.particle_flash1_pink;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65, 1.75, .5292, .5292, -118.5129);
        this.instance_21 = new b.particle_flash2_pink;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_22 = new b.particle_flash1_pink;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-14.65,
            19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_23 = new b.particle_flash2_pink;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-10.95, 8.25, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_24 = new b.particle_flash2_pink;
        this.instance_24.parent = this;
        this.instance_24.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_25 = new b.particle_flash2_pink;
        this.instance_25.parent = this;
        this.instance_25.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_26 = new b.particle_flash2_pink;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_27 = new b.particle_flash1_pink;
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.particle_flash1_pink;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 = new b.particle_flash1_pink;
        this.instance_29.parent = this;
        this.instance_29.setTransform(10,
            -24, .6032, .6032, 19.5497);
        this.instance_30 = new b.particle_flash2_pink;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_31 = new b.particle_flash1_pink;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_32 = new b.particle_flash1_pink;
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_33 = new b.particle_flash2_pink;
        this.instance_33.parent =
            this;
        this.instance_33.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_34 = new b.particle_flash1_pink;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_35 = new b.particle_flash2_pink;
        this.instance_35.parent = this;
        this.instance_35.setTransform(.6, -8.6, .5292, .5292, -45.4801);
        this.instance_36 = new b.particle_flash2_pink;
        this.instance_36.parent = this;
        this.instance_36.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_37 = new b.particle_flash2_pink;
        this.instance_37.parent = this;
        this.instance_37.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
        this.instance_38 = new b.particle_flash2_pink;
        this.instance_38.parent = this;
        this.instance_38.setTransform(14.45, -1.3, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_39 = new b.particle_flash1_pink;
        this.instance_39.parent = this;
        this.instance_39.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_40 = new b.particle_flash1_pink;
        this.instance_40.parent = this;
        this.instance_40.setTransform(24,
            -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_41 = new b.particle_flash1_pink;
        this.instance_41.parent = this;
        this.instance_41.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_42 = new b.particle_flash2_pink;
        this.instance_42.parent = this;
        this.instance_42.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_43 = new b.particle_flash1_pink;
        this.instance_43.parent = this;
        this.instance_43.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_44 = new b.particle_flash1_pink;
        this.instance_44.parent =
            this;
        this.instance_44.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_45 = new b.particle_flash2_pink;
        this.instance_45.parent = this;
        this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);
        this.instance_46 = new b.particle_flash1_pink;
        this.instance_46.parent = this;
        this.instance_46.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_47 = new b.particle_flash2_pink;
        this.instance_47.parent = this;
        this.instance_47.setTransform(8.9, 4.6, .5292, .5292, 44.5199);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_47
                },
                {
                    t: this.instance_46
                }, {
                    t: this.instance_45
                }, {
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
                },
                {
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
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = g(b.particle_flash_container_pink,
        new a.Rectangle(-320.5, -245.4, 564, 474.70000000000005), null);
    (b.particle_flash_container_blue = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.particle_flash2_blue;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
        this.instance_1 = new b.particle_flash2_blue;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
        this.instance_2 = new b.particle_flash2_blue;
        this.instance_2.parent = this;
        this.instance_2.setTransform(8.15,
            26.5, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_3 = new b.particle_flash1_blue;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new b.particle_flash1_blue;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.particle_flash1_blue;
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.particle_flash2_blue;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.particle_flash1_blue;
        this.instance_7.parent = this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.particle_flash1_blue;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_9 = new b.particle_flash2_blue;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);
        this.instance_10 =
            new b.particle_flash1_blue;
        this.instance_10.parent = this;
        this.instance_10.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_11 = new b.particle_flash2_blue;
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_12 = new b.particle_flash2_blue;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_13 = new b.particle_flash2_blue;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-38,
            10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_14 = new b.particle_flash2_blue;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-12.4, 14, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_15 = new b.particle_flash1_blue;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.particle_flash1_blue;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 =
            new b.particle_flash1_blue;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_18 = new b.particle_flash2_blue;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.particle_flash1_blue;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.particle_flash1_blue;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65,
            1.75, .5292, .5292, -118.5129);
        this.instance_21 = new b.particle_flash2_blue;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_22 = new b.particle_flash1_blue;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_23 = new b.particle_flash2_blue;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-10.95, 8.25, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_24 = new b.particle_flash2_blue;
        this.instance_24.parent = this;
        this.instance_24.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_25 = new b.particle_flash2_blue;
        this.instance_25.parent = this;
        this.instance_25.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_26 = new b.particle_flash2_blue;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_27 = new b.particle_flash1_blue;
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, .8544,
            .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.particle_flash1_blue;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 = new b.particle_flash1_blue;
        this.instance_29.parent = this;
        this.instance_29.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_30 = new b.particle_flash2_blue;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_31 = new b.particle_flash1_blue;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_32 = new b.particle_flash1_blue;
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_33 = new b.particle_flash2_blue;
        this.instance_33.parent = this;
        this.instance_33.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_34 = new b.particle_flash1_blue;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_35 = new b.particle_flash2_blue;
        this.instance_35.parent = this;
        this.instance_35.setTransform(.6, -8.6, .5292, .5292, -45.4801);
        this.instance_36 = new b.particle_flash2_blue;
        this.instance_36.parent = this;
        this.instance_36.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_37 = new b.particle_flash2_blue;
        this.instance_37.parent = this;
        this.instance_37.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
        this.instance_38 = new b.particle_flash2_blue;
        this.instance_38.parent = this;
        this.instance_38.setTransform(14.45,
            -1.3, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_39 = new b.particle_flash1_blue;
        this.instance_39.parent = this;
        this.instance_39.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_40 = new b.particle_flash1_blue;
        this.instance_40.parent = this;
        this.instance_40.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_41 = new b.particle_flash1_blue;
        this.instance_41.parent = this;
        this.instance_41.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_42 = new b.particle_flash2_blue;
        this.instance_42.parent = this;
        this.instance_42.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_43 = new b.particle_flash1_blue;
        this.instance_43.parent = this;
        this.instance_43.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_44 = new b.particle_flash1_blue;
        this.instance_44.parent = this;
        this.instance_44.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_45 = new b.particle_flash2_blue;
        this.instance_45.parent = this;
        this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);
        this.instance_46 = new b.particle_flash1_blue;
        this.instance_46.parent = this;
        this.instance_46.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_47 = new b.particle_flash2_blue;
        this.instance_47.parent = this;
        this.instance_47.setTransform(8.9, 4.6, .5292, .5292, 44.5199);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_47
                }, {
                    t: this.instance_46
                }, {
                    t: this.instance_45
                }, {
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
                },
                {
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
                },
                {
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
    }).prototype = g(b.particle_flash_container_blue, new a.Rectangle(-320.5, -245.4, 564, 474.70000000000005), null);
    (b.mc_shuttlecu = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_74 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(74).call(this.frame_74).wait(1));
        this.shuttle = new b.gr_shuttlecu;
        this.shuttle.name = "shuttle";
        this.shuttle.parent = this;
        this.shuttle.setTransform(0, 14);
        this.timeline.addTween(a.Tween.get(this.shuttle).to({
            rotation: 360
        }, 74).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-122.1, -108.1, 244.2, 244.2);
    (b.mc_shuttleco = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_74 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(74).call(this.frame_74).wait(1));
        this.shuttle = new b.gr_shuttle_co;
        this.shuttle.name = "shuttle";
        this.shuttle.parent = this;
        this.shuttle.setTransform(0, 14);
        this.timeline.addTween(a.Tween.get(this.shuttle).to({
            rotation: 360
        }, 74).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-122.1, -108.1, 244.2, 244.2);
    (b.mc_shuttle_pa = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_74 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(74).call(this.frame_74).wait(1));
        this.shuttle = new b.gr_shuttle_pa;
        this.shuttle.name = "shuttle";
        this.shuttle.parent = this;
        this.shuttle.setTransform(0, 14);
        this.timeline.addTween(a.Tween.get(this.shuttle).to({
            rotation: 360
        }, 74).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-122.1, -108.1, 244.2, 244.2);
    (b.mc_shuttle = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_74 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(74).call(this.frame_74).wait(1));
        this.shuttle = new b.gr_shuttle;
        this.shuttle.name = "shuttle";
        this.shuttle.parent =
            this;
        this.shuttle.setTransform(0, 14);
        this.timeline.addTween(a.Tween.get(this.shuttle).to({
            rotation: 360
        }, 74).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-122.1, -108.1, 244.2, 244.2);
    (b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
        this.instance_1 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
        this.instance_2 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(8.15, 26.5, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_3 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(36, 16.45, 1.1194,
            1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_9 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);
        this.instance_10 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_11 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_12 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_13 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_14 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-12.4,
            14, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_15 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032,
            .6032, -115.4488);
        this.instance_18 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65, 1.75, .5292, .5292, -118.5129);
        this.instance_21 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_22 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_23 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-10.95, 8.25, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_24 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_24.parent = this;
        this.instance_24.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_25 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_25.parent = this;
        this.instance_25.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_26 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_27 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_27.parent =
            this;
        this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_30 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-7.15,
            -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_31 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_32 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_33 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_33.parent = this;
        this.instance_33.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_34 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_35 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_35.parent = this;
        this.instance_35.setTransform(.6, -8.6, .5292, .5292, -45.4801);
        this.instance_36 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_36.parent = this;
        this.instance_36.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_37 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_37.parent = this;
        this.instance_37.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
        this.instance_38 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_38.parent = this;
        this.instance_38.setTransform(14.45, -1.3, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_39 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_39.parent = this;
        this.instance_39.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_40 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_40.parent =
            this;
        this.instance_40.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_41 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_41.parent = this;
        this.instance_41.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_42 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_42.parent = this;
        this.instance_42.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_43 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_43.parent = this;
        this.instance_43.setTransform(28,
            -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_44 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_44.parent = this;
        this.instance_44.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_45 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_45.parent = this;
        this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);
        this.instance_46 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_46.parent = this;
        this.instance_46.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_47 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_47.parent = this;
        this.instance_47.setTransform(8.9, 4.6, .5292, .5292, 44.5199);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_47
                }, {
                    t: this.instance_46
                }, {
                    t: this.instance_45
                }, {
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
                },
                {
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
                }, {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                },
                {
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
    }).prototype = g(b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408, new a.Rectangle(-320.5, -245.4, 564, 474.70000000000005), null);
    (b.cute = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.title_cu;
        this.instance.parent = this;
        this.instance.setTransform(0, .15, 1, 1, 0, 0, 0, 0, .2);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.cute, new a.Rectangle(-80, -36, 160, 72), null);
    (b.cool = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_title_co_1;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.cool, new a.Rectangle(-77, -34, 154, 68), null);
    (b.circle_spread_container_yellow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_7 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(7).call(this.frame_7).wait(1));
        this.instance = new b.circle1_yellow("synched",
            0, !1);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5272, .5272);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 2.4444,
            scaleY: 2.4444
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-192.2, -192.2, 384.5, 384.5);
    (b.circle_spread_container_pink = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_7 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(7).call(this.frame_7).wait(1));
        this.instance = new b.circle1_pink("synched",
            0, !1);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5272, .5272);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 2.4444,
            scaleY: 2.4444
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-192.2, -192.2, 384.5, 384.5);
    (b.circle_spread_container_blue = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_7 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(7).call(this.frame_7).wait(1));
        this.instance = new b.circle1_blue("synched",
            0, !1);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5272, .5272);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 2.4444,
            scaleY: 2.4444
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-192.2, -192.2, 384.5, 384.5);
    (b.award_txt_mc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.yusho_mc;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.award_txt_mc, new a.Rectangle(-120,
        -16, 240, 32), null);
    (b.\u9806\u4f4d = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.type_result_cu3_no__1;
        this.instance.parent = this;
        this.instance.setTransform(88.25, 137.9, 2.4299, 2.4299);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
            _off: !1
        }, 0).wait(1));
        this.instance_1 = new b.type_result_cu2_no__1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(160.75, 140.8, 2.4299, 2.4299);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 1).wait(1));
        this.instance_2 = new b.type_result_cu1_no;
        this.instance_2.parent = this;
        this.instance_2.setTransform(122.35, 143.5, 2.4299, 2.4299);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-46.6, 45.6, 350.70000000000005, 190.3);
    (b.sprite44 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.sprite43;
        this.instance.parent = this;
        this.instance.setTransform(112, -18.95, .281, .281);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_1 = new b.sprite43;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-75.4, -34.3, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_2 = new b.sprite43;
        this.instance_2.parent = this;
        this.instance_2.setTransform(81.75,
            -34.3, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_3 = new b.sprite43;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-41.05, -34.3, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_4 = new b.sprite43;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-62.45, -18.95, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(9).to({
                _off: !1
            },
            0).wait(4));
        this.instance_5 = new b.sprite43;
        this.instance_5.parent = this;
        this.instance_5.setTransform(56.7, -25.7, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_6 = new b.sprite43;
        this.instance_6.parent = this;
        this.instance_6.setTransform(28.5, -14.45, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_7 = new b.sprite43;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(-89.5, -18.95, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_8 = new b.sprite43;
        this.instance_8.parent = this;
        this.instance_8.setTransform(81.75, -12.15, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_9 = new b.sprite43;
        this.instance_9.parent = this;
        this.instance_9.setTransform(27.35, -35.45, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_10 = new b.sprite43;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-18.15, -18.95, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_11 = new b.sprite39;
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.95, 0, .8771, .3961);
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(13))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-97.7, -43.7, 218, 81.7);
    (b.top3 = function(c, d, e) {
        this.initialize(c, d, e, {
            top3_1: 3,
            top3_2: 23,
            top3_cute1: 56,
            top3_cute2: 85,
            top3_cute3: 97,
            top3_cool1: 141,
            top3_cool2: 170,
            top3_cool3: 182,
            top3_passion1: 226,
            top3_passion2: 255,
            top3_passion3: 267,
            next1: 127,
            next2: 212
        });
        this.frame_0 = function() {
            exportRoot.voteNum = 448100;
            exportRoot.sound_postfix = 5;
            c_jump = function() {
                window.location.href = exportRoot._url
            };
            exportRoot._url = window.im_cjs._url;
            skip_flag = key_flag = 0;
            this.play()
        };
        this.frame_1 = function() {};
        this.frame_3 = function() {
            window.se_play("se_013_3")
        };
        this.frame_24 = function() {
            window.se_play("se_127")
        };
        this.frame_53 = function() {
            this.shuttle.shuttle.gotoAndStop(1)
        };
        this.frame_56 = function() {
            window.se_play("se_134")
        };
        this.frame_85 = function() {
            window.se_play("se_013_3")
        };
        this.frame_97 = function() {
            window.se_play("se_109")
        };
        this.frame_120 = function() {
            function l() {
                m.gotoAndPlay("next1");
                m.btn.removeEventListener("click", l)
            }
            var m = this;
            this.btn.addEventListener("click", l)
        };
        this.frame_126 =
            function() {
                this.stop()
            };
        this.frame_127 = function() {
            this.play()
        };
        this.frame_138 = function() {
            this.shuttle.shuttle.gotoAndStop(2)
        };
        this.frame_141 = function() {
            window.se_play("se_134")
        };
        this.frame_170 = function() {
            window.se_play("se_013_3")
        };
        this.frame_182 = function() {
            window.se_play("se_109")
        };
        this.frame_205 = function() {
            function l() {
                m.gotoAndPlay("next2");
                m.btn.removeEventListener("click", l)
            }
            var m = this;
            this.btn.addEventListener("click", l)
        };
        this.frame_211 = function() {
            this.stop()
        };
        this.frame_212 = function() {
            this.play()
        };
        this.frame_223 = function() {
            this.shuttle.shuttle.gotoAndStop(3)
        };
        this.frame_226 = function() {
            window.se_play("se_134")
        };
        this.frame_255 = function() {
            window.se_play("se_013_3")
        };
        this.frame_267 = function() {
            window.se_play("se_109")
        };
        this.frame_284 = function() {
            function l() {
                c_jump();
                m.btn.removeEventListener("click", l)
            }
            var m = this;
            this.btn.addEventListener("click", l)
        };
        this.frame_291 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(21).call(this.frame_24).wait(29).call(this.frame_53).wait(3).call(this.frame_56).wait(29).call(this.frame_85).wait(12).call(this.frame_97).wait(23).call(this.frame_120).wait(6).call(this.frame_126).wait(1).call(this.frame_127).wait(11).call(this.frame_138).wait(3).call(this.frame_141).wait(29).call(this.frame_170).wait(12).call(this.frame_182).wait(23).call(this.frame_205).wait(6).call(this.frame_211).wait(1).call(this.frame_212).wait(11).call(this.frame_223).wait(3).call(this.frame_226).wait(29).call(this.frame_255).wait(12).call(this.frame_267).wait(17).call(this.frame_284).wait(7).call(this.frame_291).wait(1));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(292));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EglmAyAMAAAhj/MBLNAAAMAAABj/gASpY/IAFABQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABMAAAgyCMglfAAAMAAAAyCQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABgBIAEgBg");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(292));
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb13;
        this.instance.parent = this;
        this.instance.setTransform(224.35, 320.25);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(120).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 7).wait(78).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 7).wait(72).to({
            _off: !1
        }, 0).wait(8));
        this.instance_1 = new b.sprite44;
        this.instance_1.parent = this;
        this.instance_1.setTransform(128.65, 32.95, .9936, .9936, 0, 0, 0, 17.4, 0);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(120).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 8).wait(77).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 8).wait(71).to({
            _off: !1
        }, 0).wait(8));
        this.instance_2 = new b.ef_glow_white;
        this.instance_2.parent = this;
        this.instance_2.setTransform(120, 205.45, 2.7086, .1837);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(47).to({
            _off: !1
        }, 0).wait(1).to({
            scaleY: 2.0286
        }, 0).to({
            scaleX: 2.2178,
            scaleY: .4405,
            alpha: .5391
        }, 1, a.Ease.get(1)).to({
            scaleX: 2.175,
            scaleY: .0803,
            alpha: .1797
        }, 3).to({
            _off: !0
        }, 1).wait(239));
        this.chiri = new b.powder_rise;
        this.chiri.name = "chiri";
        this.chiri.parent =
            this;
        this.chiri.setTransform(120, 335, 1, 1, 174.9999, 0, 0, 0, 6.5);
        this.timeline.addTween(a.Tween.get(this.chiri).to({
            _off: !0
        }, 48).wait(244));
        this.instance_3 = new b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.instance_3.parent = this;
        this.instance_3.setTransform(117.8, 174.05);
        this.instance_4 = new b.\u30b7\u30f3\u30dc\u30eb3;
        this.instance_4.parent = this;
        this.instance_4.setTransform(140.8, 232.55, .8278, 1.2022, 0, 17.9757, -162.0243);
        this.instance_5 = new b.\u30b7\u30f3\u30dc\u30eb3;
        this.instance_5.parent =
            this;
        this.instance_5.setTransform(111.3, 229.95, 1.0547, 1.2022, -24.9661);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_3
            }]
        }, 21).to({
            state: []
        }, 32).to({
            state: [{
                t: this.instance_5
            }, {
                t: this.instance_4
            }]
        }, 32).to({
            state: []
        }, 15).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: []
        }, 27).to({
            state: [{
                t: this.instance_5
            }, {
                t: this.instance_4
            }]
        }, 42).to({
            state: []
        }, 15).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: []
        }, 27).to({
            state: [{
                t: this.instance_3
            }]
        }, 58).wait(21));
        this.instance_6 =
            new b.\u30b7\u30f3\u30dc\u30eb3;
        this.instance_6.parent = this;
        this.instance_6.setTransform(140.8, 232.55, .8278, 1.2022, 0, 17.9757, -162.0243);
        this.instance_7 = new b.\u30b7\u30f3\u30dc\u30eb3;
        this.instance_7.parent = this;
        this.instance_7.setTransform(111.3, 229.95, 1.0547, 1.2022, -24.9661);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_7
            }, {
                t: this.instance_6
            }]
        }, 3).to({
            state: []
        }, 12).to({
            state: [{
                t: this.instance_7
            }, {
                t: this.instance_6
            }]
        }, 240).to({
            state: []
        }, 15).wait(22));
        this.instance_8 =
            new b.\u30b7\u30f3\u30dc\u30eb17;
        this.instance_8.parent = this;
        this.instance_8.setTransform(249.55, -7.6, 1.3659, 1.3659, 0, -90, 90);
        this.instance_9 = new b.\u30b7\u30f3\u30dc\u30eb17;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-5.7, -7.6, 1.3659, 1.3659, 90);
        this.instance_10 = new b.ef_glow_white;
        this.instance_10.parent = this;
        this.instance_10.setTransform(125.3, 314.3, 1.7742, .8943);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
                state: [{
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }]
            },
            2).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 9).to({
            state: [{
                t: this.instance_10
            }]
        }, 3).to({
            state: []
        }, 1).wait(276));
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(12).to({
            _off: !1
        }, 0).to({
            scaleX: 5.0254,
            scaleY: 5.304,
            y: 307.6
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(276));
        this.instance_11 = new b.ef_glow_red;
        this.instance_11.parent = this;
        this.instance_11.setTransform(120, 166.85, 2.3736, .1836);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(19).to({
                _off: !1
            },
            0).wait(1).to({
            scaleX: .5569,
            scaleY: .5569
        }, 0).wait(1).to({
            scaleX: .8649,
            scaleY: .8649
        }, 0).to({
            _off: !0
        }, 1).wait(270));
        this.sho = new b.white_type;
        this.sho.name = "sho";
        this.sho.parent = this;
        this.sho.setTransform(120, 165.05, .42, .42);
        this.sho.alpha = .5;
        this.sho.compositeOperation = "lighter";
        this.sho._off = !0;
        this.timeline.addTween(a.Tween.get(this.sho).wait(22).to({
            _off: !1
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            y: 145.05
        }, 1, a.Ease.get(1)).wait(1).to({
            y: 105.05
        }, 0).to({
            y: 214.7,
            alpha: .0117
        }, 6, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(10).to({
            _off: !1,
            y: 209.7
        }, 0).to({
            scaleX: 1.2,
            scaleY: 1.2,
            x: 119.95,
            y: 208.65,
            alpha: .8008
        }, 3, a.Ease.get(1)).to({
            scaleX: .55,
            scaleY: .55,
            x: 120,
            y: 205.8,
            alpha: .6992
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(245));
        this.sho_1 = new b.award_txt_mc;
        this.sho_1.name = "sho_1";
        this.sho_1.parent = this;
        this.sho_1.setTransform(120, 165.05, .42, .42);
        this.sho_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.sho_1).wait(22).to({
            _off: !1
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            y: 145.05
        }, 1, a.Ease.get(1)).wait(1).to({
            y: 105.05
        }, 0).to({
            y: 214.7
        }, 6, a.Ease.quadInOut).to({
                y: 209.7
            },
            4, a.Ease.get(1)).wait(7).to({
            scaleX: 1.2,
            scaleY: 1.2,
            x: 119.95,
            y: 208.65
        }, 3, a.Ease.get(1)).to({
            scaleX: .55,
            scaleY: .55,
            x: 120,
            y: 205.8
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(245));
        this.instance_12 = new b.ef_glow_red;
        this.instance_12.parent = this;
        this.instance_12.setTransform(120, 166.9, 1.1561, 1.1561);
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(22).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: 2.9761,
            scaleY: 2.9761
        }, 0).to({
            _off: !0
        }, 1).wait(268));
        this.instance_13 = new b.logo_result_white_1;
        this.instance_13.parent = this;
        this.instance_13.setTransform(120, 140.25);
        this.instance_13.alpha = .9102;
        this.instance_13.compositeOperation = "lighter";
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(3).to({
            _off: !1
        }, 0).to({
            alpha: .3984
        }, 3, a.Ease.get(1)).to({
            alpha: .1992
        }, 2).to({
            _off: !0
        }, 4).wait(5).to({
            _off: !1,
            y: 60.4,
            alpha: .0117
        }, 0).to({
            y: 40.4,
            alpha: .5
        }, 2, a.Ease.get(1)).to({
            y: 125.3,
            alpha: .0117
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            y: 130.25,
            alpha: .6992
        }, 0).to({
                alpha: .0117
            },
            5).to({
            _off: !0
        }, 1).wait(14).to({
            _off: !1,
            y: 80.2,
            alpha: .6992
        }, 0).to({
            y: -54
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(245));
        this.instance_14 = new b.logo_result_black_1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(120, 140);
        this.instance_14.alpha = .8984;
        this.instance_14._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 1).wait(9).to({
            _off: !1,
            alpha: .7695
        }, 0).wait(1).to({
            alpha: .8203
        }, 0).to({
            alpha: 1
        }, 2).to({
            y: 91.5,
            alpha: .8789
        }, 1).to({
                y: 61.5,
                alpha: .5
            },
            1).to({
            y: 39.2,
            alpha: .0117
        }, 2, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(272));
        this.trf = new b.logo_result_1;
        this.trf.name = "trf";
        this.trf.parent = this;
        this.trf.setTransform(120, 140);
        this.trf._off = !0;
        this.timeline.addTween(a.Tween.get(this.trf).wait(2).to({
            _off: !1
        }, 0).wait(14).to({
            y: 91.7
        }, 0).wait(1).to({
            y: 60.4,
            alpha: .2891
        }, 0).to({
            y: 39.2,
            alpha: 1
        }, 2, a.Ease.get(1)).to({
            y: 125.3
        }, 3, a.Ease.get(-1)).wait(2).to({
            y: 130.25
        }, 0).wait(20).to({
            y: 80.7
        }, 0).to({
            y: -54
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(245));
        this.instance_15 =
            new b.\u30b7\u30f3\u30dc\u30eb16;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-45, -85.9, .9985, .9984, 0, 145.6598, -34.3412);
        this.instance_15._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(3).to({
            _off: !1
        }, 0).to({
            scaleX: .7988,
            scaleY: .9985,
            skewX: 146.4068,
            skewY: -33.5929
        }, 3, a.Ease.get(1)).wait(4).to({
            scaleX: 1.1106,
            scaleY: 1,
            skewX: 152.816,
            skewY: -27.1832,
            x: -15,
            alpha: .3398
        }, 0).wait(1).to({
            scaleX: 1,
            skewX: 160.2904,
            skewY: -19.7096,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(280));
        this.instance_16 =
            new b.\u30b7\u30f3\u30dc\u30eb16;
        this.instance_16.parent = this;
        this.instance_16.setTransform(285, -86.2, .9984, .9985, -145.6669);
        this.instance_16._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_16).wait(3).to({
            _off: !1
        }, 0).to({
            scaleX: .7988,
            rotation: -146.4071
        }, 3, a.Ease.get(1)).wait(4).to({
            scaleX: 1.102,
            scaleY: 1,
            rotation: -152.0805,
            x: 255,
            alpha: .3398
        }, 0).wait(1).to({
            scaleX: 1,
            rotation: -160.5661,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(280));
        this.instance_17 = new b.\u540d\u524d("single", 2);
        this.instance_17.parent =
            this;
        this.instance_17.setTransform(171.2, 303.45, .5, .5, 0, 0, 0, 107.2, 27.3);
        this.instance_17._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_17).wait(100).to({
            _off: !1
        }, 0).to({
            regY: 27.4,
            y: 277.95
        }, 3, a.Ease.get(1)).to({
            regY: 27.3,
            y: 282.95
        }, 4, a.Ease.get(-1)).to({
            y: 280.3
        }, 2, a.Ease.get(1)).wait(17).to({
            startPosition: 2
        }, 0).to({
            regX: 107.1,
            x: 170.9,
            y: 280.95,
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(55).to({
            _off: !1,
            y: 303.45,
            alpha: 1,
            startPosition: 5
        }, 0).to({
            y: 278.95
        }, 3, a.Ease.get(1)).to({
                y: 282.95
            },
            4, a.Ease.get(-1)).to({
            y: 280.95
        }, 2, a.Ease.get(1)).wait(17).to({
            startPosition: 5
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(55).to({
            _off: !1,
            y: 303.45,
            alpha: 1,
            startPosition: 8
        }, 0).to({
            y: 278.95
        }, 3, a.Ease.get(1)).to({
            y: 282.95
        }, 4, a.Ease.get(-1)).to({
            y: 280.95
        }, 2, a.Ease.get(1)).wait(13));
        this.instance_18 = new b.\u540d\u524d("single", 1);
        this.instance_18.parent = this;
        this.instance_18.setTransform(25.2, 303.3, .5, .5, 0, 0, 0, 107.1, 27.3);
        this.instance_18._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_18).wait(100).to({
                _off: !1
            },
            0).to({
            y: 277.3
        }, 3, a.Ease.get(1)).to({
            y: 282.3
        }, 4, a.Ease.get(-1)).to({
            y: 280.3
        }, 2, a.Ease.get(1)).wait(17).to({
            startPosition: 1
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(55).to({
            _off: !1,
            x: 24.4,
            y: 303.45,
            alpha: 1,
            startPosition: 4
        }, 0).to({
            y: 278.95
        }, 3, a.Ease.get(1)).to({
            y: 282.95
        }, 4, a.Ease.get(-1)).to({
            y: 280.95
        }, 2, a.Ease.get(1)).wait(17).to({
            startPosition: 4
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(55).to({
            _off: !1,
            y: 303.45,
            alpha: 1,
            startPosition: 7
        }, 0).to({
            y: 278.95
        }, 3, a.Ease.get(1)).to({
                y: 282.95
            },
            4, a.Ease.get(-1)).to({
            y: 280.95
        }, 2, a.Ease.get(1)).wait(13));
        this.instance_19 = new b.\u540d\u524d("single", 0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(95.9, 271.45, .5, .5, 0, 0, 0, 107.2, 27.4);
        this.instance_19._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_19).wait(100).to({
            _off: !1
        }, 0).to({
            y: 225.95
        }, 3, a.Ease.get(1)).to({
            y: 230.95
        }, 4, a.Ease.get(-1)).to({
            y: 228.95
        }, 2, a.Ease.get(1)).wait(17).to({
            startPosition: 0
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(55).to({
            _off: !1,
            y: 271.45,
            alpha: 1,
            startPosition: 3
        }, 0).to({
            y: 226.95
        }, 3, a.Ease.get(1)).to({
            y: 230.95
        }, 4, a.Ease.get(-1)).to({
            y: 228.95
        }, 2, a.Ease.get(1)).wait(17).to({
            startPosition: 3
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(55).to({
            _off: !1,
            y: 271.45,
            alpha: 1,
            startPosition: 6
        }, 0).to({
            y: 226.95
        }, 3, a.Ease.get(1)).to({
            y: 230.95
        }, 4, a.Ease.get(-1)).to({
            y: 228.95
        }, 2, a.Ease.get(1)).wait(13));
        this.instance_20 = new b.\u9806\u4f4d("single", 2);
        this.instance_20.parent = this;
        this.instance_20.setTransform(192.2, 279.3, .2, .2,
            0, 0, 0, 120, 62.8);
        this.instance_20._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_20).wait(104).to({
            _off: !1
        }, 0).to({
            y: 250.3
        }, 2, a.Ease.get(1)).to({
            y: 253.3
        }, 3, a.Ease.get(-1)).wait(17).to({
            startPosition: 2
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(58).to({
            _off: !1,
            y: 279.3,
            alpha: 1
        }, 0).to({
            y: 250.3
        }, 3, a.Ease.get(1)).to({
            y: 253.3
        }, 3, a.Ease.get(-1)).wait(17).to({
            startPosition: 2
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(58).to({
            _off: !1,
            y: 279.3,
            alpha: 1
        }, 0).to({
                y: 250.3
            },
            3, a.Ease.get(1)).to({
            y: 253.3
        }, 3, a.Ease.get(-1)).wait(13));
        this.instance_21 = new b.\u9806\u4f4d("single", 1);
        this.instance_21.parent = this;
        this.instance_21.setTransform(46.7, 279.3, .2, .2, 0, 0, 0, 120, 62.8);
        this.instance_21._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_21).wait(104).to({
            _off: !1
        }, 0).to({
            y: 250.3
        }, 2, a.Ease.get(1)).to({
            y: 253.3
        }, 3, a.Ease.get(-1)).wait(17).to({
            startPosition: 1
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(58).to({
            _off: !1,
            y: 279.3,
            alpha: 1
        }, 0).to({
                y: 250.3
            }, 3,
            a.Ease.get(1)).to({
            y: 253.3
        }, 3, a.Ease.get(-1)).wait(17).to({
            startPosition: 1
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(58).to({
            _off: !1,
            y: 279.3,
            alpha: 1
        }, 0).to({
            y: 250.3
        }, 3, a.Ease.get(1)).to({
            y: 253.3
        }, 3, a.Ease.get(-1)).wait(13));
        this.instance_22 = new b.\u9806\u4f4d("single", 0);
        this.instance_22.parent = this;
        this.instance_22.setTransform(119.2, 228.3, .2, .2, 0, 0, 0, 120, 62.8);
        this.instance_22._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_22).wait(104).to({
            _off: !1
        }, 0).to({
                y: 199.3
            }, 2,
            a.Ease.get(1)).to({
            y: 202.3
        }, 3, a.Ease.get(-1)).wait(17).to({
            startPosition: 0
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(58).to({
            _off: !1,
            y: 228.3,
            alpha: 1
        }, 0).to({
            y: 199.3
        }, 3, a.Ease.get(1)).to({
            y: 202.3
        }, 3, a.Ease.get(-1)).wait(17).to({
            startPosition: 0
        }, 0).to({
            alpha: .0586
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(58).to({
            _off: !1,
            y: 228.3,
            alpha: 1
        }, 0).to({
            y: 199.3
        }, 3, a.Ease.get(1)).to({
            y: 202.3
        }, 3, a.Ease.get(-1)).wait(13));
        this.instance_23 = new b.\u30b7\u30f3\u30dc\u30eb17;
        this.instance_23.parent = this;
        this.instance_23.setTransform(249.55, -7.6, 1.3659, 1.3659, 0, -90, 90);
        this.instance_24 = new b.\u30b7\u30f3\u30dc\u30eb17;
        this.instance_24.parent = this;
        this.instance_24.setTransform(-5.7, -7.6, 1.3659, 1.3659, 90);
        this.instance_25 = new b.ef_glow_white;
        this.instance_25.parent = this;
        this.instance_25.setTransform(125.3, 314.3, 1.7742, .8943);
        this.instance_25._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_24
            }, {
                t: this.instance_23
            }]
        }, 84).to({
            state: []
        }, 1).to({
                state: [{
                    t: this.instance_25
                }]
            },
            10).to({
            state: [{
                t: this.instance_25
            }]
        }, 2).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_24
            }, {
                t: this.instance_23
            }]
        }, 71).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_25
            }]
        }, 10).to({
            state: [{
                t: this.instance_25
            }]
        }, 2).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_24
            }, {
                t: this.instance_23
            }]
        }, 71).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_25
            }]
        }, 10).to({
            state: [{
                t: this.instance_25
            }]
        }, 2).to({
            state: []
        }, 1).wait(24));
        this.timeline.addTween(a.Tween.get(this.instance_25).wait(95).to({
            _off: !1
        }, 0).to({
            scaleX: 5.0254,
            scaleY: 5.304,
            y: 307.6
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(82).to({
            _off: !1,
            scaleX: 1.7742,
            scaleY: .8943,
            y: 314.3
        }, 0).to({
            scaleX: 5.0254,
            scaleY: 5.304,
            y: 307.6
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(82).to({
            _off: !1,
            scaleX: 1.7742,
            scaleY: .8943,
            y: 314.3
        }, 0).to({
            scaleX: 5.0254,
            scaleY: 5.304,
            y: 307.6
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(24));
        this.instance_26 = new b.particle_flash_container_pink;
        this.instance_26.parent = this;
        this.instance_26.setTransform(91.5, 146.9, .6802, .6802, 0, 0, 0, -38.5, -8.1);
        this.instance_27 = new b.particle_flash_container_blue;
        this.instance_27.parent = this;
        this.instance_27.setTransform(91.5, 146.9, .6802, .6802, 0, 0, 0, -38.5, -8.1);
        this.instance_28 = new b.particle_flash_container_yellow;
        this.instance_28.parent = this;
        this.instance_28.setTransform(91.5, 146.9, .6802, .6802, 0, 0, 0, -38.5, -8.1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_26
            }]
        }, 56).to({
            state: []
        }, 20).to({
            state: [{
                t: this.instance_27
            }]
        }, 65).to({
            state: []
        }, 20).to({
            state: [{
                t: this.instance_28
            }]
        }, 65).to({
            state: []
        }, 20).wait(46));
        this.instance_29 =
            new b.circle_spread_container_pink;
        this.instance_29.parent = this;
        this.instance_29.setTransform(120, 155);
        this.instance_30 = new b.circle_spread_container_blue;
        this.instance_30.parent = this;
        this.instance_30.setTransform(120, 155);
        this.instance_31 = new b.circle_spread_container_yellow;
        this.instance_31.parent = this;
        this.instance_31.setTransform(120, 155);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_29
            }]
        }, 56).to({
            state: []
        }, 20).to({
            state: [{
                t: this.instance_30
            }]
        }, 65).to({
                state: []
            },
            20).to({
            state: [{
                t: this.instance_31
            }]
        }, 65).to({
            state: []
        }, 20).wait(46));
        this.instance_32 = new b.passion_white;
        this.instance_32.parent = this;
        this.instance_32.setTransform(120, 155, .1585, .1585);
        this.instance_32.alpha = .0586;
        this.instance_32.compositeOperation = "lighter";
        this.instance_32._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_32).wait(223).to({
            _off: !1
        }, 0).to({
            scaleX: .5861,
            scaleY: .5861,
            alpha: .4492
        }, 3, a.Ease.quadIn).to({
            scaleX: .5,
            scaleY: .5,
            alpha: .0117
        }, 7, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(36).to({
            _off: !1,
            scaleY: .1585,
            y: 27,
            alpha: .4492
        }, 0).to({
            scaleY: .5,
            y: -3
        }, 3, a.Ease.get(1)).to({
            y: 29
        }, 3, a.Ease.get(-1)).to({
            y: 26,
            alpha: .0117
        }, 4, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(11));
        this.instance_33 = new b.passion;
        this.instance_33.parent = this;
        this.instance_33.setTransform(120, 155, .1585, .1585);
        this.instance_33.alpha = .0586;
        this.instance_33._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_33).wait(223).to({
            _off: !1
        }, 0).to({
            scaleX: .5861,
            scaleY: .5861,
            alpha: 1
        }, 3, a.Ease.quadIn).to({
            scaleX: .5,
            scaleY: .5
        }, 7, a.Ease.quadInOut).wait(7).to({
            scaleX: .5479,
            scaleY: .5479
        }, 0).wait(1).to({
            scaleX: .5424,
            scaleY: .5424,
            alpha: .9833
        }, 0).wait(1).to({
            scaleX: .5231,
            scaleY: .5231,
            alpha: .9238
        }, 0).wait(1).to({
            scaleX: .4824,
            scaleY: .4824,
            alpha: .7989
        }, 0).wait(1).to({
            scaleX: .4048,
            scaleY: .4048,
            alpha: .5602
        }, 0).wait(1).to({
            scaleX: .2416,
            scaleY: .2416,
            alpha: .0586
        }, 0).to({
            _off: !0
        }, 1).wait(24).to({
            _off: !1,
            scaleX: .5,
            scaleY: .1585,
            y: 27,
            alpha: 1
        }, 0).to({
            scaleY: .5,
            y: -3
        }, 3, a.Ease.get(1)).to({
            y: 29
        }, 3, a.Ease.get(-1)).to({
            y: 26
        }, 4, a.Ease.quadInOut).wait(12));
        this.instance_34 = new b.cool_white;
        this.instance_34.parent = this;
        this.instance_34.setTransform(120, 155, .1585, .1585);
        this.instance_34.alpha = .0586;
        this.instance_34.compositeOperation = "lighter";
        this.instance_34._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_34).wait(138).to({
            _off: !1
        }, 0).to({
            scaleX: .5861,
            scaleY: .5861,
            alpha: .4492
        }, 3, a.Ease.quadIn).to({
            scaleX: .5,
            scaleY: .5,
            alpha: .0117
        }, 7, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(36).to({
            _off: !1,
            scaleY: .1585,
            y: 27,
            alpha: .4492
        }, 0).to({
            scaleY: .5,
            y: -3
        }, 3, a.Ease.get(1)).to({
            y: 29
        }, 3, a.Ease.get(-1)).to({
            y: 26,
            alpha: .0117
        }, 4, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(16).to({
            _off: !1,
            scaleX: .4915,
            scaleY: .105,
            y: 33.6,
            alpha: .4492
        }, 0).to({
            _off: !0
        }, 1).wait(79));
        this.instance_35 = new b.cool;
        this.instance_35.parent = this;
        this.instance_35.setTransform(120, 155, .1585, .1585);
        this.instance_35.alpha = .0586;
        this.instance_35._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_35).wait(138).to({
            _off: !1
        }, 0).to({
            scaleX: .5861,
            scaleY: .5861,
            alpha: 1
        }, 3, a.Ease.quadIn).to({
            scaleX: .5,
            scaleY: .5
        }, 7, a.Ease.quadInOut).wait(7).to({
            scaleX: .5479,
            scaleY: .5479
        }, 0).wait(1).to({
            scaleX: .5424,
            scaleY: .5424,
            alpha: .9833
        }, 0).wait(1).to({
            scaleX: .5231,
            scaleY: .5231,
            alpha: .9238
        }, 0).wait(1).to({
            scaleX: .4824,
            scaleY: .4824,
            alpha: .7989
        }, 0).wait(1).to({
            scaleX: .4048,
            scaleY: .4048,
            alpha: .5602
        }, 0).wait(1).to({
            scaleX: .2416,
            scaleY: .2416,
            alpha: .0586
        }, 0).to({
            _off: !0
        }, 1).wait(24).to({
            _off: !1,
            scaleX: .5,
            scaleY: .1585,
            y: 27,
            alpha: 1
        }, 0).to({
            scaleY: .5,
            y: -3
        }, 3, a.Ease.get(1)).to({
            y: 29
        }, 3, a.Ease.get(-1)).to({
            y: 26
        }, 4, a.Ease.quadInOut).wait(17).to({
                scaleX: .4915,
                scaleY: .105,
                y: 33.6
            },
            0).to({
            _off: !0
        }, 1).wait(79));
        this.instance_36 = new b.cute_white;
        this.instance_36.parent = this;
        this.instance_36.setTransform(120, 155, .1585, .1585);
        this.instance_36.alpha = .0586;
        this.instance_36.compositeOperation = "lighter";
        this.instance_36._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_36).wait(53).to({
            _off: !1
        }, 0).to({
            scaleX: .5861,
            scaleY: .5861,
            alpha: .4492
        }, 3, a.Ease.quadIn).to({
            scaleX: .5,
            scaleY: .5,
            alpha: .0117
        }, 7, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(36).to({
                _off: !1,
                scaleY: .1585,
                y: 27,
                alpha: .4492
            },
            0).to({
            scaleY: .5,
            y: -3
        }, 3, a.Ease.get(1)).to({
            y: 29
        }, 3, a.Ease.get(-1)).to({
            y: 26,
            alpha: .0117
        }, 4, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(16).to({
            _off: !1,
            scaleX: .4915,
            scaleY: .105,
            y: 33.6,
            alpha: .4492
        }, 0).to({
            _off: !0
        }, 1).wait(164));
        this.instance_37 = new b.cute;
        this.instance_37.parent = this;
        this.instance_37.setTransform(120, 155, .1585, .1585);
        this.instance_37.alpha = .0586;
        this.instance_37._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_37).wait(53).to({
            _off: !1
        }, 0).to({
                scaleX: .5861,
                scaleY: .5861,
                alpha: 1
            },
            3, a.Ease.quadIn).to({
            scaleX: .5,
            scaleY: .5
        }, 7, a.Ease.quadInOut).wait(7).to({
            scaleX: .5479,
            scaleY: .5479
        }, 0).wait(1).to({
            scaleX: .5424,
            scaleY: .5424,
            alpha: .9833
        }, 0).wait(1).to({
            scaleX: .5231,
            scaleY: .5231,
            alpha: .9238
        }, 0).wait(1).to({
            scaleX: .4824,
            scaleY: .4824,
            alpha: .7989
        }, 0).wait(1).to({
            scaleX: .4048,
            scaleY: .4048,
            alpha: .5602
        }, 0).wait(1).to({
            scaleX: .2416,
            scaleY: .2416,
            alpha: .0586
        }, 0).to({
            _off: !0
        }, 1).wait(24).to({
            _off: !1,
            scaleX: .5,
            scaleY: .1585,
            y: 27,
            alpha: 1
        }, 0).to({
            scaleY: .5,
            y: -3
        }, 3, a.Ease.get(1)).to({
            y: 29
        }, 3, a.Ease.get(-1)).to({
                y: 26
            },
            4, a.Ease.quadInOut).wait(17).to({
            scaleX: .4915,
            scaleY: .105,
            y: 33.6
        }, 0).to({
            _off: !0
        }, 1).wait(164));
        this.shuttle = new b.mc_shuttle;
        this.shuttle.name = "shuttle";
        this.shuttle.parent = this;
        this.shuttle.setTransform(360, 141);
        this.shuttle._off = !0;
        this.timeline.addTween(a.Tween.get(this.shuttle).wait(52).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .1,
            scaleY: .1,
            x: 120,
            alpha: .0117
        }, 0).to({
            scaleX: 1.05,
            scaleY: 1.05,
            alpha: 1
        }, 3, a.Ease.get(-1)).wait(1).to({
            regY: 14,
            scaleX: 1.0488,
            scaleY: 1.0488,
            y: 155.7
        }, 0).wait(1).to({
            scaleX: 1.0443,
            scaleY: 1.0443,
            y: 155.6
        }, 0).wait(1).to({
            scaleX: 1.0349,
            scaleY: 1.0349,
            y: 155.5
        }, 0).wait(1).to({
            scaleX: 1.0205,
            scaleY: 1.0205,
            y: 155.3
        }, 0).wait(1).to({
            scaleX: 1.008,
            scaleY: 1.008,
            y: 155.1
        }, 0).wait(1).to({
            scaleX: 1.0017,
            scaleY: 1.0017,
            y: 155
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: 141
        }, 0).wait(7).to({
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(61).to({
            _off: !1,
            x: 360,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: .1,
            scaleY: .1,
            x: 120,
            alpha: 0
        }, 0).to({
            scaleX: 1.05,
            scaleY: 1.05,
            alpha: 1
        }, 3, a.Ease.get(-1)).wait(1).to({
            regY: 14,
            scaleX: 1.0488,
            scaleY: 1.0488,
            y: 155.7
        }, 0).wait(1).to({
            scaleX: 1.0443,
            scaleY: 1.0443,
            y: 155.6
        }, 0).wait(1).to({
            scaleX: 1.0349,
            scaleY: 1.0349,
            y: 155.5
        }, 0).wait(1).to({
            scaleX: 1.0205,
            scaleY: 1.0205,
            y: 155.3
        }, 0).wait(1).to({
            scaleX: 1.008,
            scaleY: 1.008,
            y: 155.1
        }, 0).wait(1).to({
            scaleX: 1.0017,
            scaleY: 1.0017,
            y: 155
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: 141
        }, 0).wait(7).to({
            alpha: 0
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(61).to({
            _off: !1,
            x: 360,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: .1,
            scaleY: .1,
            x: 120,
            alpha: 0
        }, 0).to({
                scaleX: 1.05,
                scaleY: 1.05,
                alpha: 1
            },
            3, a.Ease.get(-1)).wait(1).to({
            regY: 14,
            scaleX: 1.0488,
            scaleY: 1.0488,
            y: 155.7
        }, 0).wait(1).to({
            scaleX: 1.0443,
            scaleY: 1.0443,
            y: 155.6
        }, 0).wait(1).to({
            scaleX: 1.0349,
            scaleY: 1.0349,
            y: 155.5
        }, 0).wait(1).to({
            scaleX: 1.0205,
            scaleY: 1.0205,
            y: 155.3
        }, 0).wait(1).to({
            scaleX: 1.008,
            scaleY: 1.008,
            y: 155.1
        }, 0).wait(1).to({
            scaleX: 1.0017,
            scaleY: 1.0017,
            y: 155
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: 141
        }, 0).wait(7).to({
            alpha: 0
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(46));
        this.instance_38 = new b.light2("synched", 0);
        this.instance_38.parent =
            this;
        this.instance_38.setTransform(119.85, 153.95, 1, 1, 0, -145, 35, 66.5, 200);
        this.instance_38._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_38).wait(85).to({
            _off: !1
        }, 0).to({
            scaleX: .7987,
            scaleY: .9984,
            skewX: -144.9384,
            skewY: 35.0621,
            x: 119.95,
            y: 153.9
        }, 3, a.Ease.get(1)).wait(5).to({
            regX: 66.7,
            scaleX: .7976,
            scaleY: .997,
            skewX: -149.9374,
            skewY: 30.0623,
            x: 120.05,
            y: 154
        }, 0).wait(1).to({
            regX: 66.5,
            scaleX: .7975,
            scaleY: .9969,
            skewX: -150.5344,
            skewY: 29.4654,
            x: 122.65,
            y: 153.9
        }, 0).wait(1).to({
            scaleX: .7973,
            scaleY: .9966,
            skewX: -153.6698,
            skewY: 26.3299,
            x: 137.05,
            y: 153.85
        }, 0).wait(1).to({
            regX: 66.6,
            regY: 199.9,
            scaleX: .7963,
            scaleY: .9953,
            skewX: -165.9733,
            skewY: 14.0264,
            x: 193.9,
            y: 154
        }, 0).to({
            _off: !0
        }, 1).wait(73).to({
            _off: !1,
            regX: 66.5,
            regY: 200,
            scaleX: 1,
            scaleY: 1,
            skewX: -145,
            skewY: 35,
            x: 119.85,
            y: 153.95
        }, 0).to({
            scaleX: .7987,
            scaleY: .9984,
            skewX: -144.9384,
            skewY: 35.0621,
            x: 119.95,
            y: 153.9
        }, 3, a.Ease.get(1)).wait(5).to({
            regX: 66.7,
            scaleX: .7976,
            scaleY: .997,
            skewX: -149.9374,
            skewY: 30.0623,
            x: 120.05,
            y: 154
        }, 0).wait(1).to({
            regX: 66.5,
            scaleX: .7975,
            scaleY: .9969,
            skewX: -150.5344,
            skewY: 29.4654,
            x: 122.65,
            y: 153.9
        }, 0).wait(1).to({
            scaleX: .7973,
            scaleY: .9966,
            skewX: -153.6698,
            skewY: 26.3299,
            x: 137.05,
            y: 153.85
        }, 0).wait(1).to({
            regX: 66.6,
            regY: 199.9,
            scaleX: .7963,
            scaleY: .9953,
            skewX: -165.9733,
            skewY: 14.0264,
            x: 193.9,
            y: 154
        }, 0).to({
            _off: !0
        }, 1).wait(73).to({
            _off: !1,
            regX: 66.5,
            regY: 200,
            scaleX: 1,
            scaleY: 1,
            skewX: -145,
            skewY: 35,
            x: 119.85,
            y: 153.95
        }, 0).to({
            scaleX: .7987,
            scaleY: .9984,
            skewX: -144.9384,
            skewY: 35.0621,
            x: 119.95,
            y: 153.9
        }, 3, a.Ease.get(1)).wait(5).to({
            regX: 66.7,
            scaleX: .7976,
            scaleY: .997,
            skewX: -149.9374,
            skewY: 30.0623,
            x: 120.05,
            y: 154
        }, 0).wait(1).to({
            regX: 66.5,
            scaleX: .7975,
            scaleY: .9969,
            skewX: -150.5344,
            skewY: 29.4654,
            x: 122.65,
            y: 153.9
        }, 0).wait(1).to({
            scaleX: .7973,
            scaleY: .9966,
            skewX: -153.6698,
            skewY: 26.3299,
            x: 137.05,
            y: 153.85
        }, 0).wait(1).to({
            regX: 66.6,
            regY: 199.9,
            scaleX: .7963,
            scaleY: .9953,
            skewX: -165.9733,
            skewY: 14.0264,
            x: 193.9,
            y: 154
        }, 0).to({
            _off: !0
        }, 1).wait(25));
        this.instance_39 = new b.light2("synched", 0);
        this.instance_39.parent = this;
        this.instance_39.setTransform(120.05, 153.95, 1,
            1, 145, 0, 0, 66.5, 200);
        this.instance_39._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_39).wait(85).to({
            _off: !1
        }, 0).to({
            scaleX: .7987,
            scaleY: .9984,
            rotation: 144.9384,
            x: 119.95,
            y: 153.9
        }, 3, a.Ease.get(1)).wait(5).to({
            regX: 66.7,
            scaleX: .7976,
            scaleY: .997,
            rotation: 149.9374,
            x: 119.85,
            y: 154
        }, 0).wait(1).to({
            regX: 66.5,
            scaleX: .7975,
            scaleY: .9969,
            rotation: 150.5344,
            x: 117.35,
            y: 153.9
        }, 0).wait(1).to({
            scaleX: .7973,
            scaleY: .9966,
            rotation: 153.6698,
            x: 103.5,
            y: 153.85
        }, 0).wait(1).to({
            regX: 66.6,
            regY: 199.9,
            scaleX: .7963,
            scaleY: .9953,
            rotation: 165.9733,
            x: 49,
            y: 154
        }, 0).to({
            _off: !0
        }, 1).wait(73).to({
            _off: !1,
            regX: 66.5,
            regY: 200,
            scaleX: 1,
            scaleY: 1,
            rotation: 145,
            x: 120.05,
            y: 153.95
        }, 0).to({
            scaleX: .7987,
            scaleY: .9984,
            rotation: 144.9384,
            x: 119.95,
            y: 153.9
        }, 3, a.Ease.get(1)).wait(5).to({
            regX: 66.7,
            scaleX: .7976,
            scaleY: .997,
            rotation: 149.9374,
            x: 119.85,
            y: 154
        }, 0).wait(1).to({
            regX: 66.5,
            scaleX: .7975,
            scaleY: .9969,
            rotation: 150.5344,
            x: 117.35,
            y: 153.9
        }, 0).wait(1).to({
            scaleX: .7973,
            scaleY: .9966,
            rotation: 153.6698,
            x: 103.5,
            y: 153.85
        }, 0).wait(1).to({
            regX: 66.6,
            regY: 199.9,
            scaleX: .7963,
            scaleY: .9953,
            rotation: 165.9733,
            x: 49,
            y: 154
        }, 0).to({
            _off: !0
        }, 1).wait(73).to({
            _off: !1,
            regX: 66.5,
            regY: 200,
            scaleX: 1,
            scaleY: 1,
            rotation: 145,
            x: 120.05,
            y: 153.95
        }, 0).to({
            scaleX: .7987,
            scaleY: .9984,
            rotation: 144.9384,
            x: 119.95,
            y: 153.9
        }, 3, a.Ease.get(1)).wait(5).to({
            regX: 66.7,
            scaleX: .7976,
            scaleY: .997,
            rotation: 149.9374,
            x: 119.85,
            y: 154
        }, 0).wait(1).to({
            regX: 66.5,
            scaleX: .7975,
            scaleY: .9969,
            rotation: 150.5344,
            x: 117.35,
            y: 153.9
        }, 0).wait(1).to({
            scaleX: .7973,
            scaleY: .9966,
            rotation: 153.6698,
            x: 103.5,
            y: 153.85
        }, 0).wait(1).to({
            regX: 66.6,
            regY: 199.9,
            scaleX: .7963,
            scaleY: .9953,
            rotation: 165.9733,
            x: 49,
            y: 154
        }, 0).to({
            _off: !0
        }, 1).wait(25));
        this.shuttle_up = new b.mc_shuttle;
        this.shuttle_up.name = "shuttle_up";
        this.shuttle_up.parent = this;
        this.shuttle_up.setTransform(120, -120);
        this.shuttle_up_1 = new b.mc_shuttlecu;
        this.shuttle_up_1.name = "shuttle_up_1";
        this.shuttle_up_1.parent = this;
        this.shuttle_up_1.setTransform(120, -30);
        this.shuttle_up_1._off = !0;
        this.shuttle_up_2 = new b.mc_shuttleco;
        this.shuttle_up_2.name = "shuttle_up_2";
        this.shuttle_up_2.parent =
            this;
        this.shuttle_up_2.setTransform(120, -120);
        this.shuttle_up_2._off = !0;
        this.shuttle_up_3 = new b.mc_shuttle_pa;
        this.shuttle_up_3.name = "shuttle_up_3";
        this.shuttle_up_3.parent = this;
        this.shuttle_up_3.setTransform(120, -120);
        this.shuttle_up_3._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shuttle_up
            }]
        }, 85).to({
            state: [{
                t: this.shuttle_up_1
            }]
        }, 12).to({
            state: [{
                t: this.shuttle_up_1
            }]
        }, 9).to({
            state: [{
                t: this.shuttle_up_1
            }]
        }, 24).to({
            state: [{
                t: this.shuttle_up_1
            }]
        }, 4).to({
                state: []
            },
            1).to({
            state: [{
                t: this.shuttle_up_2
            }]
        }, 35).to({
            state: [{
                t: this.shuttle_up_2
            }]
        }, 12).to({
            state: [{
                t: this.shuttle_up_2
            }]
        }, 9).to({
            state: [{
                t: this.shuttle_up_2
            }]
        }, 24).to({
            state: [{
                t: this.shuttle_up_2
            }]
        }, 4).to({
            state: []
        }, 1).to({
            state: [{
                t: this.shuttle_up_3
            }]
        }, 35).to({
            state: [{
                t: this.shuttle_up_3
            }]
        }, 12).to({
            state: [{
                t: this.shuttle_up_3
            }]
        }, 9).wait(16));
        this.timeline.addTween(a.Tween.get(this.shuttle_up_1).wait(97).to({
            _off: !1
        }, 0).wait(33).to({
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(157));
        this.timeline.addTween(a.Tween.get(this.shuttle_up_2).wait(170).to({
                _off: !1
            },
            0).wait(12).to({
            y: -30
        }, 0).wait(33).to({
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(72));
        this.timeline.addTween(a.Tween.get(this.shuttle_up_3).wait(255).to({
            _off: !1
        }, 0).wait(12).to({
            y: -30
        }, 0).wait(25));
        this.shuttle_under = new b.mc_shuttle;
        this.shuttle_under.name = "shuttle_under";
        this.shuttle_under.parent = this;
        this.shuttle_under.setTransform(120, 420);
        this.shuttle_under_1 = new b.mc_shuttlecu;
        this.shuttle_under_1.name = "shuttle_under_1";
        this.shuttle_under_1.parent = this;
        this.shuttle_under_1.setTransform(120,
            305);
        this.shuttle_under_1._off = !0;
        this.shuttle_under_2 = new b.mc_shuttleco;
        this.shuttle_under_2.name = "shuttle_under_2";
        this.shuttle_under_2.parent = this;
        this.shuttle_under_2.setTransform(120, 310);
        this.shuttle_under_2._off = !0;
        this.shuttle_under_3 = new b.mc_shuttle_pa;
        this.shuttle_under_3.name = "shuttle_under_3";
        this.shuttle_under_3.parent = this;
        this.shuttle_under_3.setTransform(120, 420);
        this.shuttle_under_3._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
                state: [{
                    t: this.shuttle_under
                }]
            },
            85).to({
            state: [{
                t: this.shuttle_under_1
            }]
        }, 12).to({
            state: [{
                t: this.shuttle_under_1
            }]
        }, 9).to({
            state: [{
                t: this.shuttle_under_1
            }]
        }, 24).to({
            state: [{
                t: this.shuttle_under_1
            }]
        }, 4).to({
            state: []
        }, 1).to({
            state: [{
                t: this.shuttle_under
            }]
        }, 35).to({
            state: [{
                t: this.shuttle_under_2
            }]
        }, 12).to({
            state: [{
                t: this.shuttle_under_2
            }]
        }, 9).to({
            state: [{
                t: this.shuttle_under_2
            }]
        }, 24).to({
            state: [{
                t: this.shuttle_under_2
            }]
        }, 4).to({
            state: []
        }, 1).to({
            state: [{
                t: this.shuttle_under_3
            }]
        }, 35).to({
            state: [{
                t: this.shuttle_under_3
            }]
        }, 12).to({
                state: [{
                    t: this.shuttle_under_3
                }]
            },
            9).wait(16));
        this.timeline.addTween(a.Tween.get(this.shuttle_under_1).wait(97).to({
            _off: !1
        }, 0).wait(33).to({
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(157));
        this.timeline.addTween(a.Tween.get(this.shuttle_under_2).wait(182).to({
            _off: !1
        }, 0).wait(33).to({
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(72));
        this.timeline.addTween(a.Tween.get(this.shuttle_under_3).wait(255).to({
            _off: !1
        }, 0).wait(12).to({
            y: 310
        }, 0).wait(25));
        this.instance_40 = new b.gr_f_flame_up;
        this.instance_40.parent = this;
        this.instance_40.setTransform(240,
            16.8, 1, 1, 0, 0, 0, 120, 16.8);
        this.instance_40.alpha = .0117;
        this.instance_40._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_40).wait(97).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 9, a.Ease.get(1)).wait(24).to({
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(47).to({
            _off: !1,
            alpha: .0117
        }, 0).to({
            alpha: 1
        }, 9, a.Ease.get(1)).wait(24).to({
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(47).to({
            _off: !1,
            alpha: .0117
        }, 0).to({
            alpha: 1
        }, 9, a.Ease.get(1)).wait(16));
        this.instance_41 = new b.gr_f_flame_under;
        this.instance_41.parent =
            this;
        this.instance_41.setTransform(240, 339.8, 1, 1, 0, 0, 0, 120, 19.8);
        this.instance_41.alpha = .0117;
        this.instance_41._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_41).wait(97).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 9, a.Ease.get(1)).wait(24).to({
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(47).to({
            _off: !1,
            alpha: .0117
        }, 0).to({
            alpha: 1
        }, 9, a.Ease.get(1)).wait(24).to({
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(47).to({
            _off: !1,
            alpha: .0117
        }, 0).to({
            alpha: 1
        }, 9, a.Ease.get(1)).wait(16));
        this.instance_42 = new b.ef_glow_white;
        this.instance_42.parent = this;
        this.instance_42.setTransform(120, 32.15, 2.7086, .1837);
        this.instance_42._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_42).wait(99).to({
            _off: !1
        }, 0).wait(1).to({
            scaleY: 2.0286
        }, 0).to({
            scaleX: 2.2178,
            scaleY: .4405,
            y: 44.15,
            alpha: .5391
        }, 1, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(82).to({
            _off: !1,
            scaleX: 2.7086,
            scaleY: .1837,
            y: 32.15,
            alpha: 1
        }, 0).wait(1).to({
            scaleY: 2.0286
        }, 0).to({
            scaleX: 2.2178,
            scaleY: .4405,
            y: 44.15,
            alpha: .5391
        }, 1, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(82).to({
            _off: !1,
            scaleX: 2.7086,
            scaleY: .1837,
            y: 32.15,
            alpha: 1
        }, 0).wait(1).to({
            scaleY: 2.0286
        }, 0).to({
            scaleX: 2.2178,
            scaleY: .4405,
            y: 44.15,
            alpha: .5391
        }, 1, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(20));
        this.instance_43 = new b.btn;
        this.instance_43.parent = this;
        this.instance_43.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_43.alpha = .6016;
        this.instance_43.compositeOperation = "lighter";
        this.instance_43._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_43).wait(85).to({
            _off: !1
        }, 0).to({
            alpha: .0117
        }, 11, a.Ease.quadIn).wait(1).to({
                alpha: .6016
            },
            0).to({
            alpha: .0117
        }, 6, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(66).to({
            _off: !1,
            alpha: .6016
        }, 0).to({
            alpha: .0117
        }, 11, a.Ease.quadIn).wait(1).to({
            alpha: .6016
        }, 0).to({
            alpha: .0117
        }, 6, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(66).to({
            _off: !1,
            alpha: .6016
        }, 0).to({
            alpha: .0117
        }, 11, a.Ease.quadIn).wait(1).to({
            alpha: .6016
        }, 0).to({
            alpha: .0117
        }, 6, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(18));
        this.instance_44 = new b.bg_black;
        this.instance_44.parent = this;
        this.instance_44.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_44.alpha =
            .8008;
        this.instance_44._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_44).wait(72).to({
            _off: !1
        }, 0).to({
            alpha: .8984
        }, 2, a.Ease.get(1)).to({
            _off: !0
        }, 11).wait(72).to({
            _off: !1,
            alpha: .8008
        }, 0).to({
            alpha: .8984
        }, 2, a.Ease.get(1)).to({
            _off: !0
        }, 11).wait(72).to({
            _off: !1,
            alpha: .8008
        }, 0).to({
            alpha: .8984
        }, 2, a.Ease.get(1)).to({
            _off: !0
        }, 11).wait(37));
        this.instance_45 = new b.gr_cu1;
        this.instance_45.parent = this;
        this.instance_45.setTransform(120, 130);
        this.instance_45.alpha = 0;
        this.instance_45._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_45).wait(71).to({
                _off: !1
            },
            0).to({
            y: 160,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 164.15
        }, 0).wait(1).to({
            y: 161.1
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(8).to({
            alpha: .3984
        }, 11, a.Ease.quadIn).wait(1).to({
            y: 140,
            alpha: 1
        }, 0).to({
            y: 158
        }, 6, a.Ease.quadInOut).wait(1).to({
            regY: 5,
            y: 162.7
        }, 0).wait(1).to({
            y: 161.65
        }, 0).wait(1).to({
            y: 160.35
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(19).to({
            y: 165,
            alpha: 0
        }, 6, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(159));
        this.instance_46 = new b.gr_cu2;
        this.instance_46.parent = this;
        this.instance_46.setTransform(40,
            220);
        this.instance_46.alpha = 0;
        this.instance_46._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_46).wait(71).to({
            _off: !1
        }, 0).to({
            y: 150,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 155.8
        }, 0).wait(1).to({
            y: 158.85
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(9).to({
            regY: 5,
            y: 160,
            alpha: .9976
        }, 0).wait(1).to({
            alpha: .9899
        }, 0).wait(1).to({
            alpha: .9764
        }, 0).wait(1).to({
            alpha: .9562
        }, 0).wait(1).to({
            alpha: .9281
        }, 0).wait(1).to({
            alpha: .8905
        }, 0).wait(1).to({
            alpha: .8412
        }, 0).wait(1).to({
            alpha: .7767
        }, 0).wait(1).to({
                alpha: .6912
            },
            0).wait(1).to({
            alpha: .5739
        }, 0).wait(1).to({
            regY: 0,
            y: 155,
            alpha: .3984
        }, 0).wait(1).to({
            y: 145,
            alpha: 1
        }, 0).wait(1).to({
            regY: 5,
            y: 150.4
        }, 0).wait(1).to({
            y: 152.1
        }, 0).wait(1).to({
            y: 155.7
        }, 0).wait(1).to({
            y: 160
        }, 0).wait(1).to({
            y: 162.35
        }, 0).wait(1).to({
            regY: 0,
            y: 158
        }, 0).wait(1).to({
            regY: 5,
            y: 162.5
        }, 0).wait(1).to({
            y: 160.65
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(20).to({
            y: 145,
            alpha: 0
        }, 6, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(159));
        this.instance_47 = new b.gr_cu3;
        this.instance_47.parent = this;
        this.instance_47.setTransform(200,
            220);
        this.instance_47.alpha = 0;
        this.instance_47._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_47).wait(71).to({
            _off: !1
        }, 0).to({
            y: 150,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 155.8
        }, 0).wait(1).to({
            y: 158.85
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(9).to({
            regY: 5,
            y: 160,
            alpha: .9976
        }, 0).wait(1).to({
            alpha: .9899
        }, 0).wait(1).to({
            alpha: .9764
        }, 0).wait(1).to({
            alpha: .9562
        }, 0).wait(1).to({
            alpha: .9281
        }, 0).wait(1).to({
            alpha: .8905
        }, 0).wait(1).to({
            alpha: .8412
        }, 0).wait(1).to({
            alpha: .7767
        }, 0).wait(1).to({
                alpha: .6912
            },
            0).wait(1).to({
            alpha: .5739
        }, 0).wait(1).to({
            regY: 0,
            y: 155,
            alpha: .3984
        }, 0).wait(1).to({
            y: 145,
            alpha: 1
        }, 0).wait(1).to({
            regY: 5,
            y: 150.4
        }, 0).wait(1).to({
            y: 152.1
        }, 0).wait(1).to({
            y: 155.7
        }, 0).wait(1).to({
            y: 160
        }, 0).wait(1).to({
            y: 162.35
        }, 0).wait(1).to({
            regY: 0,
            y: 158
        }, 0).wait(1).to({
            regY: 5,
            y: 162.5
        }, 0).wait(1).to({
            y: 160.65
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(20).to({
            y: 145,
            alpha: 0
        }, 6, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(159));
        this.instance_48 = new b.gr_co1;
        this.instance_48.parent = this;
        this.instance_48.setTransform(120,
            130);
        this.instance_48.alpha = .0117;
        this.instance_48._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_48).wait(156).to({
            _off: !1
        }, 0).to({
            y: 160,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 164.15
        }, 0).wait(1).to({
            y: 161.1
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(9).to({
            regY: 5,
            y: 160,
            alpha: .9976
        }, 0).wait(1).to({
            alpha: .9899
        }, 0).wait(1).to({
            alpha: .9764
        }, 0).wait(1).to({
            alpha: .9562
        }, 0).wait(1).to({
            alpha: .9281
        }, 0).wait(1).to({
            alpha: .8905
        }, 0).wait(1).to({
            alpha: .8412
        }, 0).wait(1).to({
            alpha: .7767
        }, 0).wait(1).to({
                alpha: .6912
            },
            0).wait(1).to({
            alpha: .5739
        }, 0).wait(1).to({
            regY: 0,
            y: 155,
            alpha: .3984
        }, 0).wait(1).to({
            y: 140,
            alpha: 1
        }, 0).wait(1).to({
            regY: 5,
            y: 145.6
        }, 0).wait(1).to({
            y: 147.95
        }, 0).wait(1).to({
            y: 152.9
        }, 0).wait(1).to({
            y: 158.85
        }, 0).wait(1).to({
            y: 162.15
        }, 0).wait(1).to({
            regY: 0,
            y: 158
        }, 0).wait(1).to({
            regY: 5,
            y: 162.7
        }, 0).wait(1).to({
            y: 161.65
        }, 0).wait(1).to({
            y: 160.35
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(19).to({
            y: 165,
            alpha: 0
        }, 6, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(74));
        this.instance_49 = new b.gr_co2;
        this.instance_49.parent = this;
        this.instance_49.setTransform(40, 220);
        this.instance_49.alpha = .0117;
        this.instance_49._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_49).wait(156).to({
            _off: !1
        }, 0).to({
            y: 150,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 155.8
        }, 0).wait(1).to({
            y: 158.85
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(9).to({
            regY: 5,
            y: 160,
            alpha: .9976
        }, 0).wait(1).to({
            alpha: .9899
        }, 0).wait(1).to({
            alpha: .9764
        }, 0).wait(1).to({
            alpha: .9562
        }, 0).wait(1).to({
            alpha: .9281
        }, 0).wait(1).to({
            alpha: .8905
        }, 0).wait(1).to({
            alpha: .8412
        }, 0).wait(1).to({
                alpha: .7767
            },
            0).wait(1).to({
            alpha: .6912
        }, 0).wait(1).to({
            alpha: .5739
        }, 0).wait(1).to({
            regY: 0,
            y: 155,
            alpha: .3984
        }, 0).wait(1).to({
            y: 145,
            alpha: 1
        }, 0).wait(1).to({
            regY: 5,
            y: 150.4
        }, 0).wait(1).to({
            y: 152.1
        }, 0).wait(1).to({
            y: 155.7
        }, 0).wait(1).to({
            y: 160
        }, 0).wait(1).to({
            y: 162.35
        }, 0).wait(1).to({
            regY: 0,
            y: 158
        }, 0).wait(1).to({
            regY: 5,
            y: 162.5
        }, 0).wait(1).to({
            y: 160.65
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(20).to({
            y: 145,
            alpha: 0
        }, 6, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(74));
        this.instance_50 = new b.gr_co3;
        this.instance_50.parent = this;
        this.instance_50.setTransform(200, 220);
        this.instance_50.alpha = .0117;
        this.instance_50._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_50).wait(156).to({
            _off: !1
        }, 0).to({
            y: 150,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 155.8
        }, 0).wait(1).to({
            y: 158.85
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(9).to({
            regY: 5,
            y: 160,
            alpha: .9976
        }, 0).wait(1).to({
            alpha: .9899
        }, 0).wait(1).to({
            alpha: .9764
        }, 0).wait(1).to({
            alpha: .9562
        }, 0).wait(1).to({
            alpha: .9281
        }, 0).wait(1).to({
            alpha: .8905
        }, 0).wait(1).to({
            alpha: .8412
        }, 0).wait(1).to({
                alpha: .7767
            },
            0).wait(1).to({
            alpha: .6912
        }, 0).wait(1).to({
            alpha: .5739
        }, 0).wait(1).to({
            regY: 0,
            y: 155,
            alpha: .3984
        }, 0).wait(1).to({
            y: 145,
            alpha: 1
        }, 0).wait(1).to({
            regY: 5,
            y: 150.4
        }, 0).wait(1).to({
            y: 152.1
        }, 0).wait(1).to({
            y: 155.7
        }, 0).wait(1).to({
            y: 160
        }, 0).wait(1).to({
            y: 162.35
        }, 0).wait(1).to({
            regY: 0,
            y: 158
        }, 0).wait(1).to({
            regY: 5,
            y: 162.5
        }, 0).wait(1).to({
            y: 160.65
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(20).to({
            y: 145,
            alpha: 0
        }, 6, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(74));
        this.instance_51 = new b.gr_pa1;
        this.instance_51.parent = this;
        this.instance_51.setTransform(120, 130);
        this.instance_51.alpha = 0;
        this.instance_51._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_51).wait(241).to({
            _off: !1
        }, 0).to({
            y: 160,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 164.15
        }, 0).wait(1).to({
            y: 161.1
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(9).to({
            regY: 5,
            y: 160,
            alpha: .9976
        }, 0).wait(1).to({
            alpha: .9899
        }, 0).wait(1).to({
            alpha: .9764
        }, 0).wait(1).to({
            alpha: .9562
        }, 0).wait(1).to({
            alpha: .9281
        }, 0).wait(1).to({
            alpha: .8905
        }, 0).wait(1).to({
            alpha: .8412
        }, 0).wait(1).to({
                alpha: .7767
            },
            0).wait(1).to({
            alpha: .6912
        }, 0).wait(1).to({
            alpha: .5739
        }, 0).wait(1).to({
            regY: 0,
            y: 155,
            alpha: .3984
        }, 0).wait(1).to({
            y: 140,
            alpha: 1
        }, 0).wait(1).to({
            regY: 5,
            y: 145.6
        }, 0).wait(1).to({
            y: 147.95
        }, 0).wait(1).to({
            y: 152.9
        }, 0).wait(1).to({
            y: 158.85
        }, 0).wait(1).to({
            y: 162.15
        }, 0).wait(1).to({
            regY: 0,
            y: 158
        }, 0).wait(1).to({
            regY: 5,
            y: 162.7
        }, 0).wait(1).to({
            y: 161.65
        }, 0).wait(1).to({
            y: 160.35
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(15));
        this.instance_52 = new b.gr_pa2;
        this.instance_52.parent = this;
        this.instance_52.setTransform(40,
            220);
        this.instance_52.alpha = 0;
        this.instance_52._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_52).wait(241).to({
            _off: !1
        }, 0).to({
            y: 150,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 155.8
        }, 0).wait(1).to({
            y: 158.85
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(9).to({
            regY: 5,
            y: 160,
            alpha: .9976
        }, 0).wait(1).to({
            alpha: .9899
        }, 0).wait(1).to({
            alpha: .9764
        }, 0).wait(1).to({
            alpha: .9562
        }, 0).wait(1).to({
            alpha: .9281
        }, 0).wait(1).to({
            alpha: .8905
        }, 0).wait(1).to({
            alpha: .8412
        }, 0).wait(1).to({
            alpha: .7767
        }, 0).wait(1).to({
                alpha: .6912
            },
            0).wait(1).to({
            alpha: .5739
        }, 0).wait(1).to({
            regY: 0,
            y: 155,
            alpha: .3984
        }, 0).wait(1).to({
            y: 145,
            alpha: 1
        }, 0).wait(1).to({
            regY: 5,
            y: 150.4
        }, 0).wait(1).to({
            y: 152.1
        }, 0).wait(1).to({
            y: 155.7
        }, 0).wait(1).to({
            y: 160
        }, 0).wait(1).to({
            y: 162.35
        }, 0).wait(1).to({
            regY: 0,
            y: 158
        }, 0).wait(1).to({
            regY: 5,
            y: 162.5
        }, 0).wait(1).to({
            y: 160.65
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(16));
        this.instance_53 = new b.gr_pa3;
        this.instance_53.parent = this;
        this.instance_53.setTransform(200, 220);
        this.instance_53.alpha = 0;
        this.instance_53._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_53).wait(241).to({
                _off: !1
            },
            0).to({
            y: 150,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: 5,
            y: 155.8
        }, 0).wait(1).to({
            y: 158.85
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(9).to({
            regY: 5,
            y: 160,
            alpha: .9976
        }, 0).wait(1).to({
            alpha: .9899
        }, 0).wait(1).to({
            alpha: .9764
        }, 0).wait(1).to({
            alpha: .9562
        }, 0).wait(1).to({
            alpha: .9281
        }, 0).wait(1).to({
            alpha: .8905
        }, 0).wait(1).to({
            alpha: .8412
        }, 0).wait(1).to({
            alpha: .7767
        }, 0).wait(1).to({
            alpha: .6912
        }, 0).wait(1).to({
            alpha: .5739
        }, 0).wait(1).to({
            regY: 0,
            y: 155,
            alpha: .3984
        }, 0).wait(1).to({
            y: 145,
            alpha: 1
        }, 0).wait(1).to({
            regY: 5,
            y: 150.4
        }, 0).wait(1).to({
            y: 152.1
        }, 0).wait(1).to({
            y: 155.7
        }, 0).wait(1).to({
            y: 160
        }, 0).wait(1).to({
            y: 162.35
        }, 0).wait(1).to({
            regY: 0,
            y: 158
        }, 0).wait(1).to({
            regY: 5,
            y: 162.5
        }, 0).wait(1).to({
            y: 160.65
        }, 0).wait(1).to({
            regY: 0,
            y: 155
        }, 0).wait(16));
        this.btn_1 = new b.btn;
        this.btn_1.name = "btn_1";
        this.btn_1.parent = this;
        this.btn_1.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.btn_1.alpha = .0117;
        this.btn_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.btn_1).wait(11).to({
            _off: !1
        }, 0).to({
            alpha: .3008
        }, 4, a.Ease.get(-1)).wait(1).to({
                alpha: .8203
            },
            0).to({
            alpha: .5
        }, 3, a.Ease.get(.5)).to({
            _off: !0
        }, 1).wait(4).to({
            _off: !1,
            alpha: .8203
        }, 0).to({
            alpha: .0117
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(263));
        this.instance_54 = new b.bg_black;
        this.instance_54.parent = this;
        this.instance_54.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_54.alpha = .8516;
        this.instance_54._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_54).wait(1).to({
            _off: !1
        }, 0).wait(10).to({
            alpha: 1
        }, 0).to({
            alpha: 0
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(4).to({
                _off: !1,
                alpha: .6797
            },
            0).wait(3).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(23).to({
            _off: !1,
            alpha: .0117
        }, 0).to({
            alpha: 1
        }, 4).to({
            alpha: .8008
        }, 4).wait(16).to({
            alpha: .8984
        }, 3).wait(52).to({
            alpha: .8516
        }, 11, a.Ease.quadInOut).wait(1).to({
            alpha: .8008
        }, 0).wait(18).to({
            alpha: .8984
        }, 3).to({
            _off: !0
        }, 23).wait(29).to({
            _off: !1
        }, 0).to({
            alpha: .8516
        }, 11, a.Ease.quadInOut).wait(1).to({
            alpha: .8008
        }, 0).wait(18).to({
            alpha: .8984
        }, 3).to({
            _off: !0
        }, 23).wait(25));
        this.instance_55 = new b._bg;
        this.instance_55.parent = this;
        this.instance_55.setTransform(120,
            158.3, 1, 1, 0, 0, 0, 120, 160);
        this.instance_55._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_55).wait(51).to({
            _off: !1
        }, 0).wait(241));
        this.instance_56 = new b._bg_op;
        this.instance_56.parent = this;
        this.instance_56.setTransform(120, 158.3, 1, 1, 0, 0, 0, 120, 160);
        this.instance_56._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_56).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 50).wait(241))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-82.7, -32.5, 529.2, 631.8);
    b.properties = {
        id: "top3",
        width: 240,
        height: 320,
        fps: 12,
        color: "#666666",
        opacity: 1,
        manifest: [{
                src: "images/_004_shuttle_all.png",
                id: "top3__004_shuttle_all"
            }, {
                src: "images/bg.jpg",
                id: "top3_bg"
            }, {
                src: "images/bg_op.jpg",
                id: "top3_bg_op"
            }, {
                src: "images/fp_kira.png",
                id: "top3_fp_kira"
            }, {
                src: "images/frame_bottom.png",
                id: "top3_frame_bottom"
            }, {
                src: "images/frame_top.png",
                id: "top3_frame_top"
            }, {
                src: "images/logo_result.png",
                id: "top3_logo_result"
            }, {
                src: "images/logo_result_black.png",
                id: "top3_logo_result_black"
            }, {
                src: "images/logo_result_white.png",
                id: "top3_logo_result_white"
            },
            {
                src: "images/shuttle_co.png",
                id: "top3_shuttle_co"
            }, {
                src: "images/shuttle_cu.png",
                id: "top3_shuttle_cu"
            }, {
                src: "images/shuttle_pa.png",
                id: "top3_shuttle_pa"
            }, {
                src: "images/sp_kira.png",
                id: "top3_sp_kira"
            }, {
                src: "images/type_result.png",
                id: "top3_type_result"
            }, {
                src: "images/type_result_co1.jpg",
                id: "top3_type_result_co1"
            }, {
                src: "images/type_result_co1_name.png",
                id: "top3_type_result_co1_name"
            }, {
                src: "images/type_result_co2.jpg",
                id: "top3_type_result_co2"
            }, {
                src: "images/type_result_co2_name.png",
                id: "top3_type_result_co2_name"
            },
            {
                src: "images/type_result_co3.jpg",
                id: "top3_type_result_co3"
            }, {
                src: "images/type_result_co3_name.png",
                id: "top3_type_result_co3_name"
            }, {
                src: "images/type_result_cu1.jpg",
                id: "top3_type_result_cu1"
            }, {
                src: "images/type_result_cu1_name.png",
                id: "top3_type_result_cu1_name"
            }, {
                src: "images/type_result_cu1_no_.png",
                id: "top3_type_result_cu1_no_"
            }, {
                src: "images/type_result_cu2.jpg",
                id: "top3_type_result_cu2"
            }, {
                src: "images/type_result_cu2_name.png",
                id: "top3_type_result_cu2_name"
            }, {
                src: "images/type_result_cu2_no_.png",
                id: "top3_type_result_cu2_no_"
            }, {
                src: "images/type_result_cu3.jpg",
                id: "top3_type_result_cu3"
            }, {
                src: "images/type_result_cu3_name.png",
                id: "top3_type_result_cu3_name"
            }, {
                src: "images/type_result_cu3_no_.png",
                id: "top3_type_result_cu3_no_"
            }, {
                src: "images/type_result_pa1.jpg",
                id: "top3_type_result_pa1"
            }, {
                src: "images/type_result_pa1_name.png",
                id: "top3_type_result_pa1_name"
            }, {
                src: "images/type_result_pa2.jpg",
                id: "top3_type_result_pa2"
            }, {
                src: "images/type_result_pa2_name.png",
                id: "top3_type_result_pa2_name"
            }, {
                src: "images/type_result_pa3.jpg",
                id: "top3_type_result_pa3"
            }, {
                src: "images/type_result_pa3_name.png",
                id: "top3_type_result_pa3_name"
            }, {
                src: "images/type_result_title_co.png",
                id: "top3_type_result_title_co"
            }, {
                src: "images/type_result_title_co_white.png",
                id: "top3_type_result_title_co_white"
            }, {
                src: "images/type_result_title_cu.png",
                id: "top3_type_result_title_cu"
            }, {
                src: "images/type_result_title_cu_white.png",
                id: "top3_type_result_title_cu_white"
            }, {
                src: "images/type_result_title_pa.png",
                id: "top3_type_result_title_pa"
            }, {
                src: "images/type_result_title_pa_white.png",
                id: "top3_type_result_title_pa_white"
            }, {
                src: "images/type_result_white.png",
                id: "top3_type_result_white"
            }
        ],
        preloads: []
    };
    (b.Stage = function(c) {
        createjs.Stage.call(this, c)
    }).prototype = f = new createjs.Stage;
    f.setAutoPlay = function(c) {
        this.tickEnabled = c
    };
    f.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    };
    f.stop = function(c) {
        c && this.seek(c);
        this.tickEnabled = !1
    };
    f.seek = function(c) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(b.properties.fps * c / 1E3)
    };
    f.getDuration =
        function() {
            return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
        };
    f.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / b.properties.fps * 1E3
    };
    k.bootcompsLoaded = k.bootcompsLoaded || [];
    k.bootstrapListeners || (k.bootstrapListeners = []);
    k.bootstrapCallback = function(c) {
        k.bootstrapListeners.push(c);
        if (0 < k.bootcompsLoaded.length)
            for (var d = 0; d < k.bootcompsLoaded.length; ++d) c(k.bootcompsLoaded[d])
    };
    k.compositions = k.compositions || {};
    k.compositions.top3 = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return D
        },
        getImages: function() {
            return h
        }
    };
    k.compositionLoaded = function(c) {
        k.bootcompsLoaded.push(c);
        for (var d = 0; d < k.bootstrapListeners.length; d++) k.bootstrapListeners[d](c)
    };
    k.getComposition = function(c) {
        return k.compositions[c]
    };
    k.makeResponsive = function(c, d, e, l, m) {
        function x() {
            var p = b.properties.width,
                q = b.properties.height,
                r = window.innerWidth,
                t = window.innerHeight,
                u = window.devicePixelRatio || 1,
                v = r / p,
                w = t / q,
                n = 1;
            if (c)
                if ("width" == d && y == r || "height" ==
                    d && z == t) n = A;
                else if (e) 1 == l ? n = Math.min(v, w) : 2 == l && (n = Math.max(v, w));
            else if (r < p || t < q) n = Math.min(v, w);
            m[0].width = p * u * n;
            m[0].height = q * u * n;
            m.forEach(function(B) {
                B.style.width = p * n + "px";
                B.style.height = q * n + "px"
            });
            stage.scaleX = u * n;
            stage.scaleY = u * n;
            y = r;
            z = t;
            A = n;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var y, z, A = 1;
        window.addEventListener("resize", x);
        x()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
