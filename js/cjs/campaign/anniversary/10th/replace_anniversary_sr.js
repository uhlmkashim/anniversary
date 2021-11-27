(function(b, h) {
    function C() {
        var c = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        c.gotoAndStop(this.currentFrame);
        c.paused = this.paused;
        c.framerate = this.framerate;
        return c
    }

    function g(c, d, e) {
        c = b.extend(c, b.MovieClip);
        c.clone = C;
        c.nominalBounds = d;
        c.frameBounds = e;
        return c
    }
    var f, a = {},
        D = {},
        p = {};
    a.ssMetadata = [];
    (a.chara = function() {
        this.initialize(p.replace_anniversary_sr_chara)
    }).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0, 0, 640, 800);
    (a.chara_blur = function() {
        this.initialize(p.replace_anniversary_sr_chara_blur)
    }).prototype =
        f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0, 0, 640, 800);
    (a.chara_sp = function() {
        this.initialize(p.replace_anniversary_sr_chara_sp)
    }).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0, 0, 480, 1E3);
    (a.kirakira = function() {
        this.initialize(p.replace_anniversary_sr_kirakira)
    }).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0, 0, 20, 20);
    (a.shape_panel_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype =
        g(a.shape_panel_white, new b.Rectangle(-1.2, -1.2, 2.4, 2.4), null);
    (a.shape_panel_gleen = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#5FFFBC").s().p("AgxAyIAAhjIBjAAIAABjg");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.shape_panel_gleen, new b.Rectangle(-5, -5, 10, 10), null);
    (a.shape_panel_black = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("Ay7EwIAApfMAl3AAAIAAJfg");
        this.shape.setTransform(241.45, 1.55);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.shape_panel_black, new b.Rectangle(120.3, -28.8, 242.39999999999998, 60.8), null);
    (a.powder_rise_glitter_core_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgDAqQgRgBgMgOQgLgNACgQQACgSANgLQANgLARABQARABALANQAMAOgCAQQgCASgNALQgMAKgPAAIgDAAg");
        this.shape.setTransform(-.1936, -4E-4, 1.1009, 1.1009);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1));
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgDAqQgRgBgMgOQgLgNACgQQACgSANgLQANgLARABQARABALANQAMAOgCAQQgCASgNALQgMAKgPAAIgDAAg");
        this.shape_1.setTransform(-.3437, -.2004, 1.0784, 1.0784);
        this.timeline.addTween(b.Tween.get(this.shape_1).wait(1));
        this.shape_2 = new b.Shape;
        this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("AgDAqQgRgBgMgOQgLgNACgQQACgSANgLQANgLARABQARABALANQAMAOgCAQQgCASgNALQgMAKgPAAIgDAAg");
        this.shape_2.setTransform(-.7445, -.1003, .9486, .9486);
        this.timeline.addTween(b.Tween.get(this.shape_2).wait(1));
        this.shape_3 = new b.Shape;
        this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AgDAqQgRgBgMgOQgLgNACgQQACgSANgLQANgLARABQARABALANQAMAOgCAQQgCASgNALQgMAKgPAAIgDAAg");
        this.shape_3.setTransform(-.0442, -3E-4);
        this.timeline.addTween(b.Tween.get(this.shape_3).wait(1))
    }).prototype = g(a.powder_rise_glitter_core_inner, new b.Rectangle(-4.9, -4.7, 9.4, 9.4), null);
    (a.overlay_white = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.shape.setTransform(119.975, 155);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.overlay_white, new b.Rectangle(0, 0, 240, 310), null);
    (a.icon = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-5.3448, -5.1698);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1));
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f("rgba(68,69,69,0.702)").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape_1.setTransform(-4.7448, -3.9198);
        this.timeline.addTween(b.Tween.get(this.shape_1).wait(1))
    }).prototype = g(a.icon, new b.Rectangle(-10.7, -10.3, 11.299999999999999, 11.600000000000001), null);
    (a.grip = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#CC0000").s().p("AkkAAIEkkkIElEkIklElg");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.grip, new b.Rectangle(-29.3, -29.3, 58.7, 58.7), null);
    (a.ef_Radial_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0)"], [.259, 1], 0, 0, 0, 0, 0, 24.5).s().p("AinCoQhGhFAAhjQAAhiBGhFQBFhGBiAAQBjAABFBGQBGBFAABiQAABjhGBFQhFBGhjAAQhiAAhFhGg");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype =
        g(a.ef_Radial_white, new b.Rectangle(-23.7, -23.7, 47.5, 47.5), null);
    (a.diff_w = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("EgSvAnEMAAAhOHMAlfAAAMAAABOHg");
        this.shape.setTransform(120, 250);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.diff_w, new b.Rectangle(0, 0, 240, 500), null);
    (a.chara_blur_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.chara_sp;
        this.instance.parent = this;
        this.instance.setTransform(0,
            0, .5, .5);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }).prototype = g(a.chara_blur_inner, new b.Rectangle(0, 0, 240, 500), null);
    (a.black_shape = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.lf(["rgba(0,0,0,0)", "#000000", "#000000", "rgba(0,0,0,0)"], [0, .247, .784, 1], 0, 78.6, 0, -78.4).s().p("A0TMgIAA4/MAonAAAIAAY/g");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.black_shape, new b.Rectangle(-130, -80, 260, 160), null);
    (a.black = function(c,
        d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-120, -155, 240, 310);
    (a.particle_guide_c = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f().s("#FF0000").ss(.1, 1,
            1).p("AgeCxQAcgEARgUQAlgmgwhJQgwhJAdhQQAIgZAPgXIANgR");
        this.shape.setTransform(.0256, -17.675);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.particle_guide_c, new b.Rectangle(-4.1, -36.3, 8.3, 37.3), null);
    (a.particle_guide_b = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(.575,
            -.225);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1));
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);
        this.timeline.addTween(b.Tween.get(this.shape_1).wait(1))
    }).prototype = g(a.particle_guide_b, new b.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (a.particle = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-.1, .8);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (a.asset_efc_particle_P2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-.1, .8);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (a.asset_efc_particle_p1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(.575, -.225);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1));
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);
        this.timeline.addTween(b.Tween.get(this.shape_1).wait(1))
    }).prototype = g(a.asset_efc_particle_p1, new b.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (a.asset_efc_flashBlade =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.shape = new b.Shape;
            this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
            this.shape.setTransform(0, .025);
            this.timeline.addTween(b.Tween.get(this.shape).wait(1))
        }).prototype = g(a.asset_efc_flashBlade, new b.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (a.asset_efc_cardReflectSA_p2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.shape.setTransform(120,
            150);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.asset_efc_cardReflectSA_p2, new b.Rectangle(0, 0, 240, 300), null);
    (a.asset_efc_cardReflectSA_p1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("EgkNAToIAAg4MBIaAAAIAAA4gEgkNARYIAAkrMBIaAAAIAAErgEgkNAFJIAA1WMBIaAAAIAAVWgEgkNgR7IAAhsMBIaAAAIAABsg");
        this.shape.setTransform(-114.2, -4.15);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.asset_efc_cardReflectSA_p1,
        new b.Rectangle(-345.9, -129.7, 463.5, 251.2), null);
    (a.asset_efc_cardKira_p = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a.asset_efc_cardKira_p, new b.Rectangle(-120, -150, 240, 300), null);
    (a._card1_w = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }).prototype = g(a._card1_w, new b.Rectangle(-120, -150, 240, 300), null);
    (a._card1_boke = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.chara_blur;
        this.instance.parent = this;
        this.instance.setTransform(-120, -150, .376, .376);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }).prototype = g(a._card1_boke, new b.Rectangle(-120, -150, 240.7,
        300.8), null);
    (a._card1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.chara;
        this.instance.parent = this;
        this.instance.setTransform(-120, -160, .376, .376);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }).prototype = g(a._card1, new b.Rectangle(-120, -160, 240.7, 300.8), null);
    (a._asset_efc_kira = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.kirakira;
        this.instance.parent = this;
        this.instance.setTransform(-10, -10);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1));
        this.instance_1 = new a.kirakira;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-10, -10);
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1))
    }).prototype = g(a._asset_efc_kira, new b.Rectangle(-10, -10, 20, 20), null);
    (a.shape_panel_white_innner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_26 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).wait(26).call(this.frame_26).wait(1));
        this.instance = new a.shape_panel_white;
        this.instance.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance).to({
            scaleX: .2222,
            scaleY: .2222
        }, 23).to({
            _off: !0
        }, 1).wait(3))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-1.2, -1.2, 2.4, 2.4);
    (a.shape_innner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.parent.c = 10
        };
        this.frame_1 = function() {
            var m = this.parent;
            m.bx = 40;
            m.by = 30;
            for (var n = 0; 2 > n; n++) {
                var q = "p" + m.c,
                    l = new a.particle_guide_a;
                m.addChild(l);
                m[q] = l;
                l.name = q;
                l.x = l.y = l.rotation = Math.floor(60 * Math.random()) - 30;
                l.scaleX = (Math.floor(200 * Math.random()) - 100) / 100;
                m.c++
            }
        };
        this.frame_2 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.instance = new a.shape_panel_gleen;
        this.instance.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-5, -5, 10, 10);
    (a.powder_rise_glitter_core = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(4 * Math.random()) + 2)
        };
        this.frame_7 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));
        this.instance = new a.powder_rise_glitter_core_inner;
        this.instance.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({
            alpha: .1016
        }, 3, b.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            alpha: .1992
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-4.9, -4.7, 9.4, 9.4);
    (a.icon_move = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(b.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new a.icon;
        this.instance.parent = this;
        this.instance.setTransform(-2.7, -2.7);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({
            regX: -5,
            regY: -4.5,
            x: -7.55,
            y: -7.05
        }, 0).wait(1).to({
            x: -7.2,
            y: -6.7
        }, 0).wait(1).to({
            x: -6.9,
            y: -6.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -1.8,
            y: -1.8
        }, 0).wait(1).to({
            regX: -5,
            regY: -4.5,
            x: -6.9,
            y: -6.4
        }, 0).wait(1).to({
            x: -7.25,
            y: -6.75
        }, 0).wait(1).to({
            x: -7.55,
            y: -7.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -2.7,
            y: -2.7
        }, 0).wait(1))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-13.4, -13, 12.200000000000001, 12.5);
    (a.chara_blur_1 = function(c, d, e) {
        this.initialize(c, d, e, {
            bright: 4
        });
        this.frame_3 = function() {
            this.stop()
        };
        this.frame_8 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).wait(3).call(this.frame_3).wait(5).call(this.frame_8).wait(1));
        this.instance = new a._card1_w;
        this.instance.parent = this;
        this.instance.setTransform(120, 249, 1, 1.6733);
        this.instance.alpha = 0;
        this.instance._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance).wait(4).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 4, b.Ease.get(-1)).wait(1));
        this.instance_1 = new a.chara_blur_inner;
        this.instance_1.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(9))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(0, -2, 240, 502);
    (a.particle_guide_e = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new a.particle_guide_b;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(b.Tween.get(this.instance).wait(30));
        this.instance_1 = new a.particle;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7674, .7674);
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1).to({
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
            },
            0).wait(1).to({
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
    }).prototype =
        f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (a.particle_guide_d = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(3 * Math.random()) + 1)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new a.particle_guide_b;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(b.Tween.get(this.instance).wait(36));
        this.instance_1 = new a.particle;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7347, .7347);
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1).to({
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
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (a.particle_guide_a = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.frame_0 = function() {};
        this.frame_26 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(1));
        this.instance = new a.particle_guide_c;
        this.instance.parent = this;
        this.instance.setTransform(3.2, -.75);
        this.timeline.addTween(b.Tween.get(this.instance).to({
            _off: !0
        }, 26).wait(1));
        this.instance_1 = new a.shape_panel_white_innner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.15, -.8);
        this.timeline.addTween(b.Tween.get(this.instance_1).to({
            guide: {
                path: [.2,
                    -.8, 3, -1.2, 4.7, -3.1, 8.4, -6.9, 3.6, -14.2, -1.2, -21.5, 1.7, -29.5, 2.5, -32, 4, -34.3, 4.3, -34.7, 4.5, -35
                ]
            }
        }, 25, b.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-1, -36.3, 8.5, 36.699999999999996);
    (a.efa_particle = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.particle_guide_e;
        this.instance.parent = this;
        this.instance.setTransform(-1.4, 38.65, .8585, .8585, -173.2889);
        this.instance_1 = new a.particle_guide_d;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-26.5,
            10.95, .8544, .5085, 0, -124.1512, 76.2156, -59.8, -3.9);
        this.instance_2 = new a.particle_guide_d;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_3 = new a.particle_guide_d;
        this.instance_3.parent = this;
        this.instance_3.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_4 = new a.particle_guide_e;
        this.instance_4.parent = this;
        this.instance_4.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_5 = new a.particle_guide_d;
        this.instance_5.parent =
            this;
        this.instance_5.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_6 = new a.particle_guide_d;
        this.instance_6.parent = this;
        this.instance_6.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_7 = new a.particle_guide_e;
        this.instance_7.parent = this;
        this.instance_7.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_8 = new a.particle_guide_e;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_9 = new a.particle_guide_d;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_10 = new a.particle_guide_d;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-6.95, -18.05, .6032, .6032, -115.4488);
        this.instance_11 = new a.particle_guide_e;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_12 = new a.particle_guide_d;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587,
            132.7302);
        this.instance_13 = new a.particle_guide_e;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_14 = new a.particle_guide_d;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_15 = new a.particle_guide_e;
        this.instance_15.parent = this;
        this.instance_15.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_16 = new a.particle_guide_e;
        this.instance_16.parent = this;
        this.instance_16.setTransform(6.55,
            -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_17 = new a.particle_guide_d;
        this.instance_17.parent = this;
        this.instance_17.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_18 = new a.particle_guide_d;
        this.instance_18.parent = this;
        this.instance_18.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_19 = new a.particle_guide_d;
        this.instance_19.parent = this;
        this.instance_19.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_20 = new a.particle_guide_e;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_21 = new a.particle_guide_e;
        this.instance_21.parent = this;
        this.instance_21.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_22 = new a.particle_guide_d;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_23 = new a.particle_guide_e;
        this.instance_23.parent = this;
        this.instance_23.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_24 =
            new a.particle_guide_d;
        this.instance_24.parent = this;
        this.instance_24.setTransform(13.4, 36.85, .8544, .5085, 0, 110.6446, -48.9891, -59.7, -3.7);
        this.instance_25 = new a.particle_guide_d;
        this.instance_25.parent = this;
        this.instance_25.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_26 = new a.particle_guide_d;
        this.instance_26.parent = this;
        this.instance_26.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_27 = new a.particle_guide_e;
        this.instance_27.parent = this;
        this.instance_27.setTransform(27.95,
            -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_28 = new a.particle_guide_d;
        this.instance_28.parent = this;
        this.instance_28.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_29 = new a.particle_guide_d;
        this.instance_29.parent = this;
        this.instance_29.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.timeline.addTween(b.Tween.get({}).to({
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
    }).prototype = g(a.efa_particle,
        new b.Rectangle(-259.5, -245.4, 503, 474.70000000000005), null);
    (a.asset_efc_particle2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new a.asset_efc_particle_p1;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(b.Tween.get(this.instance).wait(30));
        this.instance_1 = new a.asset_efc_particle_P2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95,
            -4.05, .7674, .7674);
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1).to({
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
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (a.asset_efc_particle1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(3 * Math.random()) + 1)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new a.asset_efc_particle_p1;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(b.Tween.get(this.instance).wait(36));
        this.instance_1 = new a.asset_efc_particle_P2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7347, .7347);
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1).to({
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
            },
            0).wait(1).to({
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
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (a.asset_efc_kiracardKira = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(this.currentFrame + Math.floor(7 * Math.random()))
        };
        this.timeline.addTween(b.Tween.get(this).wait(8).call(this.frame_8).wait(10));
        this.instance = new a.grip;
        this.instance.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance).to({
                _off: !0
            },
            1).wait(17));
        this.instance_1 = new a.asset_efc_flashBlade;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.05, 0, .1255, 1);
        this.instance_1._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .6761,
            scaleY: .8276
        }, 0).to({
            scaleX: .5,
            scaleY: 1,
            alpha: .1289
        }, 4).to({
            _off: !0
        }, 1).wait(11));
        this.instance_2 = new a._asset_efc_kira;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_2.alpha = .4297;
        this.timeline.addTween(b.Tween.get(this.instance_2).wait(1).to({
            scaleX: 2.5371,
            scaleY: 2.5371,
            rotation: -11.2055,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: 3.1685,
            scaleY: 3.1685,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 3.161,
            scaleY: 3.161,
            rotation: 1.9399,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: 3.14,
            scaleY: 3.14,
            rotation: 7.4005,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: 3.1052,
            scaleY: 3.1052,
            rotation: 16.3817,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: 3.0569,
            scaleY: 3.0569,
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
    }).prototype =
        f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-100.2, -42.3, 200.3, 84.69999999999999);
    (a.asset_efc_cardReflectSA = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Aj9B7IAAj0IH7AAIAAD0g");
        this.shape.setTransform(-6.7, -205.95);
        this.timeline.addTween(b.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(43));
        c = new b.Shape;
        c._off = !0;
        d = (new b.Graphics).p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(b.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(1).to({
            graphics: d,
            x: 0,
            y: 0
        }).wait(9).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(34));
        this.instance = new a.asset_efc_cardReflectSA_p1;
        this.instance.parent = this;
        this.instance.setTransform(-.45, 298.25, 1.2653, 1, 0, 0, -29.8292);
        this.instance._off = !0;
        d = [this.instance];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).to({
            scaleX: 1.2649,
            skewY: -29.8255,
            y: -34.55
        }, 5, b.Ease.get(-1)).to({
            scaleX: 1.2671,
            skewY: -29.8784,
            y: -285
        }, 3, b.Ease.get(1)).to({
            _off: !0
        }, 1).wait(34));
        this.instance_1 =
            new a.asset_efc_cardReflectSA_p2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(8, 15.2, 1, 1, 0, 0, 0, 128, 165.2);
        this.instance_1.alpha = .1289;
        this.instance_1._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(4).to({
            _off: !1
        }, 0).to({
            alpha: .4688
        }, 2, b.Ease.get(-1)).to({
            alpha: .0586
        }, 2).to({
            _off: !0
        }, 1).wait(35))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-120, -218.2, 240, 368.2);
    (a.asset_efc_cardKira = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_19 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).wait(19).call(this.frame_19).wait(1));
        this.instance = new a.asset_efc_kiracardKira;
        this.instance.parent = this;
        this.instance.setTransform(-96.5, -134.6, .281, .281);
        this.timeline.addTween(b.Tween.get(this.instance).wait(20));
        this.instance_1 = new a.asset_efc_kiracardKira;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-58.45, -113.5, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(2).to({
            _off: !1
        }, 0).wait(18));
        this.instance_2 =
            new a.asset_efc_kiracardKira;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-.2, 70.3, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_2).wait(4).to({
            _off: !1
        }, 0).wait(16));
        this.instance_3 = new a.asset_efc_kiracardKira;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-29.25, 148.95, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_3).wait(6).to({
            _off: !1
        }, 0).wait(14));
        this.instance_4 = new a.asset_efc_kiracardKira;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(74.3, 124.5, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_4).wait(8).to({
            _off: !1
        }, 0).wait(12));
        this.instance_5 = new a.asset_efc_kiracardKira;
        this.instance_5.parent = this;
        this.instance_5.setTransform(58.75, 10.15, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_5).wait(9).to({
            _off: !1
        }, 0).wait(11));
        this.instance_6 = new a.asset_efc_kiracardKira;
        this.instance_6.parent = this;
        this.instance_6.setTransform(91.9,
            -19, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_6).wait(10).to({
            _off: !1
        }, 0).wait(10));
        this.instance_7 = new a.asset_efc_kiracardKira;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-80.9, -35.7, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_7).wait(12).to({
            _off: !1
        }, 0).wait(8));
        this.instance_8 = new a.asset_efc_kiracardKira;
        this.instance_8.parent = this;
        this.instance_8.setTransform(103.9, -145.1, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_8).wait(13).to({
            _off: !1
        }, 0).wait(7));
        this.instance_9 = new a.asset_efc_kiracardKira;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-80.4, 25.85, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_9).wait(14).to({
            _off: !1
        }, 0).wait(6));
        this.instance_10 = new a.asset_efc_kiracardKira;
        this.instance_10.parent = this;
        this.instance_10.setTransform(50.7, -109, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_10).wait(16).to({
                _off: !1
            },
            0).wait(4));
        this.instance_11 = new a.asset_efc_kiracardKira;
        this.instance_11.parent = this;
        this.instance_11.setTransform(74.4, -67.35, .281, .281);
        this.instance_11._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_11).wait(17).to({
            _off: !1
        }, 0).wait(3));
        this.instance_12 = new a.asset_efc_kiracardKira;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-17.1, -29.5, .281, .281);
        this.instance_12._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_12).wait(8).to({
            _off: !1
        }, 0).wait(12));
        this.instance_13 =
            new a.asset_efc_cardKira_p;
        this.instance_13.parent = this;
        this.instance_13.setTransform(0, 0, 1.0001, 1.0663);
        this.timeline.addTween(b.Tween.get(this.instance_13).wait(20))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-120, -159.9, 240, 319.9);
    (a.text = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.cc.text = exportRoot.sr_idol_comment
        };
        this.frame_17 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#7D5FFF").s().p("AlJBXIAAitIKTAAIAACtg");
        this.shape.setTransform(-195.575, 0);
        this.timeline.addTween(b.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(17));
        this.pa = new a.particle_guide_a;
        this.pa.name = "pa";
        this.pa.parent = this;
        this.pa.setTransform(-151.15, -20.9);
        this.timeline.addTween(b.Tween.get(this.pa).wait(18));
        this.pb = new a.shape_innner;
        this.pb.name = "pb";
        this.pb.parent = this;
        this.pb.setTransform(-118.9, .15);
        this.timeline.addTween(b.Tween.get(this.pb).wait(1).to({
            x: -90.4863,
            y: .0358
        }, 0).wait(1).to({
            x: -63.8456,
            y: -.0712
        }, 0).wait(1).to({
            x: -38.9778,
            y: -.1712
        }, 0).wait(1).to({
            x: -15.883,
            y: -.264
        }, 0).wait(1).to({
            x: 5.4389,
            y: -.3497
        }, 0).wait(1).to({
            x: 24.9879,
            y: -.4282
        }, 0).wait(1).to({
            x: 42.7639,
            y: -.4997
        }, 0).wait(1).to({
            x: 58.767,
            y: -.564
        }, 0).wait(1).to({
            x: 72.9972,
            y: -.6212
        }, 0).wait(1).to({
            x: 85.4544,
            y: -.6712
        }, 0).wait(1).to({
            x: 96.1387,
            y: -.7142
        }, 0).wait(1).to({
            x: 105.05,
            y: -.75
        }, 0).to({
            _off: !0
        }, 1).wait(5));
        this.instance = new a.shape_panel_black;
        this.instance.parent = this;
        this.instance.setTransform(-236,
            1.3);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({
            regX: 241.4,
            regY: 1.5,
            x: 34,
            y: 2.8
        }, 0).wait(1).to({
            x: 60.75
        }, 0).wait(1).to({
            x: 85.65
        }, 0).wait(1).to({
            x: 108.65
        }, 0).wait(1).to({
            x: 129.9
        }, 0).wait(1).to({
            x: 149.25
        }, 0).wait(1).to({
            x: 166.75
        }, 0).wait(1).to({
            x: 182.4
        }, 0).wait(1).to({
            x: 196.25
        }, 0).wait(1).to({
            x: 208.25
        }, 0).wait(1).to({
            x: 218.4
        }, 0).wait(1).to({
            x: 226.65
        }, 0).wait(1).to({
            x: 233.15
        }, 0).wait(1).to({
            x: 237.75
        }, 0).wait(1).to({
            x: 240.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 1.3
        }, 0).wait(2));
        this.cc =
            new b.Text("", "14px 'MS PGothic'", "#FFFFFF");
        this.cc.name = "cc";
        this.cc.textAlign = "center";
        this.cc.lineHeight = 16;
        this.cc.lineWidth = 256;
        this.cc.parent = this;
        this.cc.setTransform(-.1, -8);
        this.timeline.addTween(b.Tween.get(this.cc).wait(18))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-228.6, -57, 591.3, 92);
    (a.powder_rise_glitter_inner = function(c, d, e) {
        this.initialize(c, d, e, {
            r: 46,
            "-": 90
        });
        this.frame_0 = function() {
            this.rotation += 14 * Math.random();
            this.gotoAndPlay(Math.floor(40 * Math.random()) +
                11)
        };
        this.frame_90 = function() {
            this.gotoAndPlay("r")
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(90).call(this.frame_90).wait(1));
        this.instance = new a.powder_rise_glitter_core;
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);
        this.timeline.addTween(b.Tween.get(this.instance).wait(46).to({
            x: -.9,
            y: 372.55
        }, 44).wait(1))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-5.8, -22.2, 10.3, 399.4);
    (a.powder_rise_glitter = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.powder_rise_glitter_inner;
        this.instance.parent = this;
        this.instance.setTransform(63.5, 12.8, .5, .5);
        this.instance_1 = new a.powder_rise_glitter_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(16.6, 6, .5, .5);
        this.instance_2 = new a.powder_rise_glitter_inner;
        this.instance_2.parent = this;
        this.instance_2.setTransform(48.55, 9.75, .8768, .8768);
        this.instance_3 = new a.powder_rise_glitter_inner;
        this.instance_3.parent = this;
        this.instance_3.setTransform(96.2, 18.2, .8768, .8768);
        this.instance_4 =
            new a.powder_rise_glitter_inner;
        this.instance_4.parent = this;
        this.instance_4.setTransform(51.7, 6.65, .5, .5);
        this.instance_5 = new a.powder_rise_glitter_inner;
        this.instance_5.parent = this;
        this.instance_5.setTransform(117.95, 19.7, .8768, .8768);
        this.instance_6 = new a.powder_rise_glitter_inner;
        this.instance_6.parent = this;
        this.instance_6.setTransform(5.05, 16.3, .8768, .8768);
        this.instance_7 = new a.powder_rise_glitter_inner;
        this.instance_7.parent = this;
        this.instance_7.setTransform(105.3, 11.8, .5, .5);
        this.instance_8 =
            new a.powder_rise_glitter_inner;
        this.instance_8.parent = this;
        this.instance_8.setTransform(3.5, 13.2, .5, .5);
        this.instance_9 = new a.powder_rise_glitter_inner;
        this.instance_9.parent = this;
        this.instance_9.setTransform(68.35, 16.95, .8768, .8768);
        this.instance_10 = new a.powder_rise_glitter_inner;
        this.instance_10.parent = this;
        this.instance_10.setTransform(37, 15.5, .8768, .8768);
        this.instance_11 = new a.powder_rise_glitter_inner;
        this.instance_11.parent = this;
        this.instance_11.setTransform(94.85, 8.15, .5, .5);
        this.instance_12 =
            new a.powder_rise_glitter_inner;
        this.instance_12.parent = this;
        this.instance_12.setTransform(61.8, .25, .5, .5);
        this.instance_13 = new a.powder_rise_glitter_inner;
        this.instance_13.parent = this;
        this.instance_13.setTransform(91.55, 6.65, .5, .5);
        this.instance_14 = new a.powder_rise_glitter_inner;
        this.instance_14.parent = this;
        this.instance_14.setTransform(16.7, 13.2, .5, .5);
        this.instance_15 = new a.powder_rise_glitter_inner;
        this.instance_15.parent = this;
        this.instance_15.setTransform(49.1, 22.7, .8768, .8768);
        this.instance_16 =
            new a.powder_rise_glitter_inner;
        this.instance_16.parent = this;
        this.instance_16.setTransform(112.7, 14.25, .8768, .8768);
        this.instance_17 = new a.powder_rise_glitter_inner;
        this.instance_17.parent = this;
        this.instance_17.setTransform(76.4, 10.55, .8768, .8768);
        this.instance_18 = new a.powder_rise_glitter_inner;
        this.instance_18.parent = this;
        this.instance_18.setTransform(85.9, 11.15, .5, .5);
        this.instance_19 = new a.powder_rise_glitter_inner;
        this.instance_19.parent = this;
        this.instance_19.setTransform(75.6, 13.9, .5, .5);
        this.instance_20 =
            new a.powder_rise_glitter_inner;
        this.instance_20.parent = this;
        this.instance_20.setTransform(42.55, 6, .5, .5);
        this.instance_21 = new a.powder_rise_glitter_inner;
        this.instance_21.parent = this;
        this.instance_21.setTransform(25.3, 9.95, .5, .5);
        this.instance_22 = new a.powder_rise_glitter_inner;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-59.85, 12.8, .5, .5);
        this.instance_23 = new a.powder_rise_glitter_inner;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-106.75, 6, .5, .5);
        this.instance_24 = new a.powder_rise_glitter_inner;
        this.instance_24.parent = this;
        this.instance_24.setTransform(-74.8, 9.75, .8768, .8768);
        this.instance_25 = new a.powder_rise_glitter_inner;
        this.instance_25.parent = this;
        this.instance_25.setTransform(-27.15, 18.2, .8768, .8768);
        this.instance_26 = new a.powder_rise_glitter_inner;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-71.65, 6.65, .5, .5);
        this.instance_27 = new a.powder_rise_glitter_inner;
        this.instance_27.parent = this;
        this.instance_27.setTransform(-5.4, 19.7, .8768, .8768);
        this.instance_28 = new a.powder_rise_glitter_inner;
        this.instance_28.parent = this;
        this.instance_28.setTransform(-118.3, 16.3, .8768, .8768);
        this.instance_29 = new a.powder_rise_glitter_inner;
        this.instance_29.parent = this;
        this.instance_29.setTransform(-18.05, 11.8, .5, .5);
        this.instance_30 = new a.powder_rise_glitter_inner;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-119.85, 13.2, .5, .5);
        this.instance_31 = new a.powder_rise_glitter_inner;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-55, 16.95, .8768, .8768);
        this.instance_32 = new a.powder_rise_glitter_inner;
        this.instance_32.parent = this;
        this.instance_32.setTransform(-86.35, 15.5, .8768, .8768);
        this.instance_33 = new a.powder_rise_glitter_inner;
        this.instance_33.parent = this;
        this.instance_33.setTransform(-28.5, 8.15, .5, .5);
        this.instance_34 = new a.powder_rise_glitter_inner;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-61.55, .25, .5, .5);
        this.instance_35 = new a.powder_rise_glitter_inner;
        this.instance_35.parent = this;
        this.instance_35.setTransform(-31.8, 6.65, .5, .5);
        this.instance_36 = new a.powder_rise_glitter_inner;
        this.instance_36.parent = this;
        this.instance_36.setTransform(-106.65, 13.2, .5, .5);
        this.instance_37 = new a.powder_rise_glitter_inner;
        this.instance_37.parent = this;
        this.instance_37.setTransform(-74.25, 22.7, .8768, .8768);
        this.instance_38 = new a.powder_rise_glitter_inner;
        this.instance_38.parent = this;
        this.instance_38.setTransform(-10.65, 14.25, .8768, .8768);
        this.instance_39 = new a.powder_rise_glitter_inner;
        this.instance_39.parent = this;
        this.instance_39.setTransform(-46.95, 10.55, .8768, .8768);
        this.instance_40 = new a.powder_rise_glitter_inner;
        this.instance_40.parent = this;
        this.instance_40.setTransform(-37.45, 11.15, .5, .5);
        this.instance_41 = new a.powder_rise_glitter_inner;
        this.instance_41.parent = this;
        this.instance_41.setTransform(-47.75, 13.9, .5, .5);
        this.instance_42 = new a.powder_rise_glitter_inner;
        this.instance_42.parent = this;
        this.instance_42.setTransform(-80.8, 6, .5, .5);
        this.instance_43 = new a.powder_rise_glitter_inner;
        this.instance_43.parent = this;
        this.instance_43.setTransform(-98.05, 9.95, .5, .5);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
                    t: this.instance_43
                },
                {
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
                }, {
                    t: this.instance_20
                }, {
                    t: this.instance_19
                },
                {
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
    }).prototype = g(a.powder_rise_glitter, new b.Rectangle(-122.6, -10.8, 244.5, 22.3), null);
    (a.asset_efc_partilceSarcle =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.instance = new a.asset_efc_particle2;
            this.instance.parent = this;
            this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
            this.instance_1 = new a.asset_efc_particle2;
            this.instance_1.parent = this;
            this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
            this.instance_2 = new a.asset_efc_particle2;
            this.instance_2.parent = this;
            this.instance_2.setTransform(8.15, 26.5, .7527, .5292, 0, -164.9709, 40.6843);
            this.instance_3 = new a.asset_efc_particle1;
            this.instance_3.parent =
                this;
            this.instance_3.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
            this.instance_4 = new a.asset_efc_particle1;
            this.instance_4.parent = this;
            this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
            this.instance_5 = new a.asset_efc_particle1;
            this.instance_5.parent = this;
            this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
            this.instance_6 = new a.asset_efc_particle2;
            this.instance_6.parent = this;
            this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
            this.instance_7 =
                new a.asset_efc_particle1;
            this.instance_7.parent = this;
            this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
            this.instance_8 = new a.asset_efc_particle1;
            this.instance_8.parent = this;
            this.instance_8.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
            this.instance_9 = new a.asset_efc_particle2;
            this.instance_9.parent = this;
            this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);
            this.instance_10 = new a.asset_efc_particle1;
            this.instance_10.parent = this;
            this.instance_10.setTransform(13.6, 24.65, .5924, .5292,
                0, 155.0554, -24.9453);
            this.instance_11 = new a.asset_efc_particle2;
            this.instance_11.parent = this;
            this.instance_11.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
            this.instance_12 = new a.asset_efc_particle2;
            this.instance_12.parent = this;
            this.instance_12.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
            this.instance_13 = new a.asset_efc_particle2;
            this.instance_13.parent = this;
            this.instance_13.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
            this.instance_14 = new a.asset_efc_particle2;
            this.instance_14.parent =
                this;
            this.instance_14.setTransform(-12.4, 14, .7527, .5292, 0, -104.9694, 100.6856);
            this.instance_15 = new a.asset_efc_particle1;
            this.instance_15.parent = this;
            this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
            this.instance_16 = new a.asset_efc_particle1;
            this.instance_16.parent = this;
            this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
            this.instance_17 = new a.asset_efc_particle1;
            this.instance_17.parent = this;
            this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
            this.instance_18 = new a.asset_efc_particle2;
            this.instance_18.parent = this;
            this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
            this.instance_19 = new a.asset_efc_particle1;
            this.instance_19.parent = this;
            this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
            this.instance_20 = new a.asset_efc_particle1;
            this.instance_20.parent = this;
            this.instance_20.setTransform(-14.65, 1.75, .5292, .5292, -118.5129);
            this.instance_21 = new a.asset_efc_particle2;
            this.instance_21.parent = this;
            this.instance_21.setTransform(-32.05,
                -3.5, 1, 1, -135.4791);
            this.instance_22 = new a.asset_efc_particle1;
            this.instance_22.parent = this;
            this.instance_22.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
            this.instance_23 = new a.asset_efc_particle2;
            this.instance_23.parent = this;
            this.instance_23.setTransform(-10.95, 8.25, .6817, 1.3397, 0, -100.0239, -139.0996);
            this.instance_24 = new a.asset_efc_particle2;
            this.instance_24.parent = this;
            this.instance_24.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
            this.instance_25 = new a.asset_efc_particle2;
            this.instance_25.parent =
                this;
            this.instance_25.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
            this.instance_26 = new a.asset_efc_particle2;
            this.instance_26.parent = this;
            this.instance_26.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
            this.instance_27 = new a.asset_efc_particle1;
            this.instance_27.parent = this;
            this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
            this.instance_28 = new a.asset_efc_particle1;
            this.instance_28.parent = this;
            this.instance_28.setTransform(4.65, -27.5, .6032,
                .6714, 0, -19.4377, -45.4796);
            this.instance_29 = new a.asset_efc_particle1;
            this.instance_29.parent = this;
            this.instance_29.setTransform(10, -24, .6032, .6032, 19.5497);
            this.instance_30 = new a.asset_efc_particle2;
            this.instance_30.parent = this;
            this.instance_30.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
            this.instance_31 = new a.asset_efc_particle1;
            this.instance_31.parent = this;
            this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
            this.instance_32 = new a.asset_efc_particle1;
            this.instance_32.parent =
                this;
            this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
            this.instance_33 = new a.asset_efc_particle2;
            this.instance_33.parent = this;
            this.instance_33.setTransform(8, -18, 1, 1, -45.4791);
            this.instance_34 = new a.asset_efc_particle1;
            this.instance_34.parent = this;
            this.instance_34.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
            this.instance_35 = new a.asset_efc_particle2;
            this.instance_35.parent = this;
            this.instance_35.setTransform(.6, -8.6, .5292, .5292, -45.4801);
            this.instance_36 = new a.asset_efc_particle2;
            this.instance_36.parent = this;
            this.instance_36.setTransform(50, 16, .8585, .8585, 61.4817);
            this.instance_37 = new a.asset_efc_particle2;
            this.instance_37.parent = this;
            this.instance_37.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
            this.instance_38 = new a.asset_efc_particle2;
            this.instance_38.parent = this;
            this.instance_38.setTransform(14.45, -1.3, .7527, .5292, 0, 105.0291, -49.3157);
            this.instance_39 = new a.asset_efc_particle1;
            this.instance_39.parent = this;
            this.instance_39.setTransform(13.3, 36.9, .8544, .5085, 0,
                110.6446, -48.9891, -59.8, -3.7);
            this.instance_40 = new a.asset_efc_particle1;
            this.instance_40.parent = this;
            this.instance_40.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
            this.instance_41 = new a.asset_efc_particle1;
            this.instance_41.parent = this;
            this.instance_41.setTransform(38, 6, .6032, .6032, 64.5512);
            this.instance_42 = new a.asset_efc_particle2;
            this.instance_42.parent = this;
            this.instance_42.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
            this.instance_43 = new a.asset_efc_particle1;
            this.instance_43.parent =
                this;
            this.instance_43.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
            this.instance_44 = new a.asset_efc_particle1;
            this.instance_44.parent = this;
            this.instance_44.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
            this.instance_45 = new a.asset_efc_particle2;
            this.instance_45.parent = this;
            this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);
            this.instance_46 = new a.asset_efc_particle1;
            this.instance_46.parent = this;
            this.instance_46.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
            this.instance_47 = new a.asset_efc_particle2;
            this.instance_47.parent = this;
            this.instance_47.setTransform(8.9, 4.6, .5292, .5292, 44.5199);
            this.timeline.addTween(b.Tween.get({}).to({
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
        }).prototype = g(a.asset_efc_partilceSarcle, new b.Rectangle(-320.5, -245.4, 564, 474.70000000000005), null);
    (a.replace = function(c, d, e) {
        this.initialize(c, d, e, {
            label_kirakira: 6,
            label_idolopen: 32,
            label_scrollup: 40,
            label_explosion2: 78,
            label_particle: 92,
            s2: 78,
            l: 94,
            sr_scene_end: 102
        });
        this.frame_0 = function() {};
        this.frame_1 = function() {
            this.play()
        };
        this.frame_74 = function() {};
        this.frame_94 = function() {
            exportRoot.anniversary_skip_flag =
                1
        };
        this.frame_101 = function() {
            this.stop()
        };
        this.frame_102 = function() {
            this.play()
        };
        this.frame_106 = function() {
            exportRoot.branch()
        };
        this.frame_112 = function() {
            this.stop()
        };
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(73).call(this.frame_74).wait(20).call(this.frame_94).wait(7).call(this.frame_101).wait(1).call(this.frame_102).wait(4).call(this.frame_106).wait(6).call(this.frame_112).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Aj9B7IAAj0IH7AAIAAD0g");
        this.shape.setTransform(-6.7, -205.95);
        this.timeline.addTween(b.Tween.get(this.shape).wait(113));
        this.overlay_white = new a.overlay_white;
        this.overlay_white.name = "overlay_white";
        this.overlay_white.parent = this;
        this.overlay_white.setTransform(.05, 0, 1, 1, 0, 0, 0, 120, 155);
        this.overlay_white.alpha = 0;
        this.overlay_white._off = !0;
        this.timeline.addTween(b.Tween.get(this.overlay_white).wait(102).to({
            _off: !1
        }, 0).to({
            alpha: .9492
        }, 3).to({
            alpha: 0
        }, 4).to({
            _off: !0
        }, 1).wait(3));
        this.instance = new a.icon_move;
        this.instance.parent =
            this;
        this.instance.setTransform(120, 155, 1.5615, 1.5615);
        this.instance.alpha = .2109;
        this.instance._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance).wait(95).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 2).to({
            _off: !0
        }, 9).wait(7));
        this.instance_1 = new a.ef_Radial_white;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, 3.9735, .1621);
        this.instance_1.alpha = .1289;
        this.instance_1._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(29).to({
            _off: !1
        }, 0).to({
                scaleX: 5.5775,
                scaleY: .5347,
                alpha: 1
            },
            3, b.Ease.get(-1)).wait(1).to({
            scaleX: 7.2558,
            scaleY: 4.8536
        }, 0).to({
            _off: !0
        }, 1).wait(79));
        this.instance_2 = new a.efa_particle;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, -.5, .6762, .6762);
        this.instance_3 = new a.asset_efc_partilceSarcle;
        this.instance_3.parent = this;
        this.timeline.addTween(b.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 33).to({
            state: []
        }, 16).to({
            state: [{
                t: this.instance_3
            }]
        }, 29).to({
            state: []
        }, 28).wait(7));
        this.instance_4 = new a.powder_rise_glitter;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(-102.25, 290.35, 2.9006, 2.9006, 175, 0, 0, -.1, 6.6);
        this.instance_5 = new a.powder_rise_glitter;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-.55, 187.5, 1, 1, 174.9999, 0, 0, 0, 6.5);
        this.timeline.addTween(b.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_5
            }, {
                t: this.instance_4
            }]
        }, 34).to({
            state: []
        }, 44).wait(35));
        this.haruchiha_blur = new a.diff_w;
        this.haruchiha_blur.name = "haruchiha_blur";
        this.haruchiha_blur.parent = this;
        this.haruchiha_blur.setTransform(-120, -160);
        this.haruchiha_blur.compositeOperation = "lighter";
        this.haruchiha_blur._off = !0;
        this.haruchiha_blur_1 = new a.chara_blur_1;
        this.haruchiha_blur_1.name = "haruchiha_blur_1";
        this.haruchiha_blur_1.parent = this;
        this.haruchiha_blur_1.setTransform(-120, -242);
        this.haruchiha_blur_1.compositeOperation = "lighter";
        this.timeline.addTween(b.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 34).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
                state: [{
                    t: this.haruchiha_blur
                }]
            },
            1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
                state: [{
                    t: this.haruchiha_blur
                }]
            },
            1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
                state: [{
                    t: this.haruchiha_blur
                }]
            },
            1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
                state: [{
                    t: this.haruchiha_blur
                }]
            },
            1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur
            }]
        }, 1).to({
            state: [{
                t: this.haruchiha_blur_1
            }]
        }, 9).to({
            state: []
        }, 1).wait(25));
        this.timeline.addTween(b.Tween.get(this.haruchiha_blur).wait(34).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 120,
            regY: 250,
            x: 0,
            y: 68.8,
            alpha: .6593
        }, 0).wait(1).to({
            y: 57.5,
            alpha: .4784
        }, 0).wait(1).to({
            y: 50.6,
            alpha: .3671
        }, 0).wait(1).to({
            y: 46.3,
            alpha: .2988
        }, 0).wait(1).to({
            y: 44,
            alpha: .2616
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -120,
            y: -206.75,
            alpha: .25
        }, 0).wait(1).to({
            regX: 120,
            regY: 250,
            x: 0,
            y: 42.35,
            alpha: .2432
        }, 0).wait(1).to({
            y: 41.4,
            alpha: .2365
        }, 0).wait(1).to({
            y: 40.5,
            alpha: .2297
        }, 0).wait(1).to({
            y: 39.55,
            alpha: .223
        }, 0).wait(1).to({
            y: 38.65,
            alpha: .2162
        }, 0).wait(1).to({
            y: 37.7,
            alpha: .2095
        }, 0).wait(1).to({
            y: 36.8,
            alpha: .2027
        }, 0).wait(1).to({
            y: 35.85,
            alpha: .1959
        }, 0).wait(1).to({
            y: 34.95,
            alpha: .1892
        }, 0).wait(1).to({
            y: 34,
            alpha: .1824
        }, 0).wait(1).to({
            y: 33.1,
            alpha: .1757
        }, 0).wait(1).to({
            y: 32.15,
            alpha: .1689
        }, 0).wait(1).to({
            y: 31.2,
            alpha: .1622
        }, 0).wait(1).to({
            y: 30.3,
            alpha: .1554
        }, 0).wait(1).to({
            y: 29.35,
            alpha: .1486
        }, 0).wait(1).to({
            y: 28.45,
            alpha: .1419
        }, 0).wait(1).to({
            y: 27.5,
            alpha: .1351
        }, 0).wait(1).to({
            y: 26.6,
            alpha: .1284
        }, 0).wait(1).to({
            y: 25.65,
            alpha: .1216
        }, 0).wait(1).to({
            y: 24.75,
            alpha: .1149
        }, 0).wait(1).to({
            y: 23.8,
            alpha: .1081
        }, 0).wait(1).to({
            y: 22.9,
            alpha: .1014
        }, 0).wait(1).to({
            y: 21.95,
            alpha: .0946
        }, 0).wait(1).to({
            y: 21.05,
            alpha: .0878
        }, 0).wait(1).to({
            y: 20.1,
            alpha: .0811
        }, 0).wait(1).to({
            y: 19.15,
            alpha: .0743
        }, 0).wait(1).to({
            y: 18.25,
            alpha: .0676
        }, 0).wait(1).to({
            y: 17.3,
            alpha: .0608
        }, 0).wait(1).to({
                y: 16.4,
                alpha: .0541
            },
            0).wait(1).to({
            y: 15.45,
            alpha: .0473
        }, 0).wait(1).to({
            y: 14.55,
            alpha: .0405
        }, 0).wait(1).to({
            y: 13.6,
            alpha: .0338
        }, 0).wait(1).to({
            y: 12.7,
            alpha: .027
        }, 0).wait(1).to({
            y: 11.75,
            alpha: .0203
        }, 0).wait(1).to({
            y: 10.85,
            alpha: .0135
        }, 0).wait(1).to({
            y: 9.9,
            alpha: .0068
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -120,
            y: -241.05,
            alpha: 0
        }, 0).to({
            y: -242
        }, 1).to({
            _off: !0,
            alpha: 1
        }, 9).wait(26));
        this.haruchiha_blur_2 = new a.chara_blur_1;
        this.haruchiha_blur_2.name = "haruchiha_blur_2";
        this.haruchiha_blur_2.parent = this;
        this.haruchiha_blur_2.setTransform(-120,
            -160);
        this.haruchiha_blur_2._off = !0;
        this.timeline.addTween(b.Tween.get(this.haruchiha_blur_2).wait(34).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 120,
            regY: 249,
            x: 0,
            y: 67.8
        }, 0).wait(1).to({
            y: 56.5
        }, 0).wait(1).to({
            y: 49.6
        }, 0).wait(1).to({
            y: 45.3
        }, 0).wait(1).to({
            y: 43
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -120,
            y: -206.75
        }, 0).wait(1).to({
            regX: 120,
            regY: 249,
            x: 0,
            y: 41.35
        }, 0).wait(1).to({
            y: 40.4
        }, 0).wait(1).to({
            y: 39.5
        }, 0).wait(1).to({
            y: 38.55
        }, 0).wait(1).to({
            y: 37.65
        }, 0).wait(1).to({
            y: 36.7
        }, 0).wait(1).to({
            y: 35.8
        }, 0).wait(1).to({
                y: 34.85
            },
            0).wait(1).to({
            y: 33.95
        }, 0).wait(1).to({
            y: 33
        }, 0).wait(1).to({
            y: 32.1
        }, 0).wait(1).to({
            y: 31.15
        }, 0).wait(1).to({
            y: 30.2
        }, 0).wait(1).to({
            y: 29.3
        }, 0).wait(1).to({
            y: 28.35
        }, 0).wait(1).to({
            y: 27.45
        }, 0).wait(1).to({
            y: 26.5
        }, 0).wait(1).to({
            y: 25.6
        }, 0).wait(1).to({
            y: 24.65
        }, 0).wait(1).to({
            y: 23.75
        }, 0).wait(1).to({
            y: 22.8
        }, 0).wait(1).to({
            y: 21.9
        }, 0).wait(1).to({
            y: 20.95
        }, 0).wait(1).to({
            y: 20.05
        }, 0).wait(1).to({
            y: 19.1
        }, 0).wait(1).to({
            y: 18.15
        }, 0).wait(1).to({
            y: 17.25
        }, 0).wait(1).to({
            y: 16.3
        }, 0).wait(1).to({
            y: 15.4
        }, 0).wait(1).to({
                y: 14.45
            },
            0).wait(1).to({
            y: 13.55
        }, 0).wait(1).to({
            y: 12.6
        }, 0).wait(1).to({
            y: 11.7
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            y: 9.85
        }, 0).wait(1).to({
            y: 8.9
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -120,
            y: -241.05
        }, 0).to({
            y: -242
        }, 1).to({
            _off: !0
        }, 9).wait(26));
        this.instance_6 = new a.asset_efc_cardKira;
        this.instance_6.parent = this;
        this.instance_6._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_6).wait(78).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 28).wait(7));
        this.card = new a.asset_efc_cardReflectSA;
        this.card.name = "card";
        this.card.parent =
            this;
        this.card._off = !0;
        this.timeline.addTween(b.Tween.get(this.card).wait(93).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 13).wait(7));
        this.instance_7 = new a._card1_w;
        this.instance_7.parent = this;
        this.instance_7.compositeOperation = "lighter";
        this.instance_7._off = !0;
        this.instance_8 = new a._card1_boke;
        this.instance_8.parent = this;
        this.instance_8.alpha = 0;
        this.instance_8.compositeOperation = "lighter";
        this.timeline.addTween(b.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_7
            }]
        }, 87).to({
                state: [{
                    t: this.instance_8
                }]
            },
            8).to({
            state: []
        }, 1).wait(17));
        this.timeline.addTween(b.Tween.get(this.instance_7).wait(87).to({
            _off: !1
        }, 0).to({
            _off: !0,
            alpha: 0
        }, 8, b.Ease.get(1)).wait(18));
        this.instance_9 = new a._card1_boke;
        this.instance_9.parent = this;
        this.instance_9._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_9).wait(87).to({
            _off: !1
        }, 0).to({
            alpha: .1094
        }, 8, b.Ease.get(1)).to({
            _off: !0
        }, 1).wait(17));
        this.instance_10 = new a._card1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 10);
        this.instance_10._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_10).wait(87).to({
                _off: !1
            },
            0).wait(12).to({
            _off: !0
        }, 7).wait(7));
        this.tx = new a.text;
        this.tx.name = "tx";
        this.tx.parent = this;
        this.tx.setTransform(0, 18.7, .95, .95);
        this.tx._off = !0;
        this.timeline.addTween(b.Tween.get(this.tx).wait(6).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 67,
            regY: -12.1,
            x: 63.65,
            y: 1.15
        }, 0).wait(1).to({
            y: -1.65
        }, 0).wait(1).to({
            y: -3.6
        }, 0).wait(1).to({
            y: -5.1
        }, 0).wait(1).to({
            y: -6.25
        }, 0).wait(1).to({
            y: -7.2
        }, 0).wait(1).to({
            y: -8
        }, 0).wait(1).to({
            y: -8.65
        }, 0).wait(1).to({
            y: -9.2
        }, 0).wait(1).to({
            y: -9.7
        }, 0).wait(1).to({
            y: -10.05
        }, 0).wait(1).to({
                y: -10.4
            },
            0).wait(1).to({
            y: -10.65
        }, 0).wait(1).to({
            y: -10.9
        }, 0).wait(1).to({
            y: -11.05
        }, 0).wait(1).to({
            y: -11.2
        }, 0).wait(1).to({
            y: -11.3
        }, 0).wait(1).to({
            y: -11.4
        }, 0).wait(1).to({
            y: -11.45
        }, 0).wait(1).to({
            y: -11.5
        }, 0).wait(2).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).to({
            _off: !0
        }, 6).wait(79));
        this.instance_11 = new a.black_shape;
        this.instance_11.parent = this;
        this.instance_11.alpha = 0;
        this.instance_11._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_11).wait(3).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            _off: !0
        }, 28).wait(79));
        this.instance_12 =
            new a.black("synched", 0);
        this.instance_12.parent = this;
        this.instance_12.alpha = .0391;
        this.instance_12._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_12).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: .2001
        }, 0).wait(1).to({
            alpha: .4978
        }, 0).wait(1).to({
            alpha: .7954
        }, 0).wait(1).to({
            alpha: .9565
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 100).wait(7))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-455, -245.4, 709.1, 602.4);
    (a.replace_anniversary_sr = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.replace;
        this.instance.parent = this;
        this.instance.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(87.9, -63.2, -69.10000000000001, -130.5);
    a.properties = {
        id: "replace_anniversary_sr",
        width: 240,
        height: 310,
        fps: 12,
        color: "#999999",
        opacity: 1,
        manifest: [{
                src: "images/chara.jpg",
                id: "replace_anniversary_sr_chara"
            }, {
                src: "images/chara_blur.jpg",
                id: "replace_anniversary_sr_chara_blur"
            },
            {
                src: "images/chara_sp.jpg",
                id: "replace_anniversary_sr_chara_sp"
            }, {
                src: "images/kirakira.png",
                id: "replace_anniversary_sr_kirakira"
            }
        ],
        preloads: []
    };
    (a.Stage = function(c) {
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
        this.getChildAt(0).gotoAndStop(a.properties.fps *
            c / 1E3)
    };
    f.getDuration = function() {
        return this.getChildAt(0).totalFrames / a.properties.fps * 1E3
    };
    f.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / a.properties.fps * 1E3
    };
    h.bootcompsLoaded = h.bootcompsLoaded || [];
    h.bootstrapListeners || (h.bootstrapListeners = []);
    h.bootstrapCallback = function(c) {
        h.bootstrapListeners.push(c);
        if (0 < h.bootcompsLoaded.length)
            for (var d = 0; d < h.bootcompsLoaded.length; ++d) c(h.bootcompsLoaded[d])
    };
    h.compositions = h.compositions || {};
    h.compositions.replace_anniversary_sr = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return a
        },
        getSpriteSheet: function() {
            return D
        },
        getImages: function() {
            return p
        }
    };
    h.compositionLoaded = function(c) {
        h.bootcompsLoaded.push(c);
        for (var d = 0; d < h.bootstrapListeners.length; d++) h.bootstrapListeners[d](c)
    };
    h.getComposition = function(c) {
        return h.compositions[c]
    };
    h.makeResponsive = function(c, d, e, m, n) {
        function q() {
            var r = a.properties.width,
                t = a.properties.height,
                u = window.innerWidth,
                v = window.innerHeight,
                w = window.devicePixelRatio ||
                1,
                x = u / r,
                y = v / t,
                k = 1;
            if (c)
                if ("width" == d && l == u || "height" == d && z == v) k = A;
                else if (e) 1 == m ? k = Math.min(x, y) : 2 == m && (k = Math.max(x, y));
            else if (u < r || v < t) k = Math.min(x, y);
            n[0].width = r * w * k;
            n[0].height = t * w * k;
            n.forEach(function(B) {
                B.style.width = r * k + "px";
                B.style.height = t * k + "px"
            });
            stage.scaleX = w * k;
            stage.scaleY = w * k;
            l = u;
            z = v;
            A = k;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var l, z, A = 1;
        window.addEventListener("resize", q);
        q()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;