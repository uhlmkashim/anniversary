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
    (b.bg_off = function() {
        this.initialize(h.vote_group_shot_5_bg_off)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.bg_on = function() {
        this.initialize(h.vote_group_shot_5_bg_on)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.cd_debut = function() {
        this.initialize(h.vote_group_shot_5_cd_debut)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 472, 88);
    (b.cd_debut_white = function() {
        this.initialize(h.vote_group_shot_5_cd_debut_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 472, 88);
    (b.ch1 = function() {
        this.initialize(h.vote_group_shot_5_ch1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch1_w = function() {
        this.initialize(h.vote_group_shot_5_ch1_w)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch2 = function() {
        this.initialize(h.vote_group_shot_5_ch2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch2_w = function() {
        this.initialize(h.vote_group_shot_5_ch2_w)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch3 = function() {
        this.initialize(h.vote_group_shot_5_ch3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch3_w = function() {
        this.initialize(h.vote_group_shot_5_ch3_w)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch4 = function() {
        this.initialize(h.vote_group_shot_5_ch4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch4_w = function() {
        this.initialize(h.vote_group_shot_5_ch4_w)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch5 = function() {
        this.initialize(h.vote_group_shot_5_ch5)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch5_w = function() {
        this.initialize(h.vote_group_shot_5_ch5_w)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 768);
    (b.ch_all = function() {
        this.initialize(h.vote_group_shot_5_ch_all)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.ch_all_blur = function() {
        this.initialize(h.vote_group_shot_5_ch_all_blur)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.fp_kira = function() {
        this.initialize(h.vote_group_shot_5_fp_kira)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 20, 20);
    (b.logo_result = function() {
        this.initialize(h.vote_group_shot_5_logo_result)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 448, 260);
    (b.logo_result_white = function() {
        this.initialize(h.vote_group_shot_5_logo_result_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 448, 260);
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
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.\u30b7\u30f3\u30dc\u30eb10000 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb10000,
        new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.\u30b7\u30f3\u30dc\u30eb5000 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF62FF").s().p("AhIBJIAAiRICRAAIAACRg");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb5000, new a.Rectangle(-7.3, -7.3, 14.6, 14.6),
        null);
    (b.\u30b7\u30f3\u30dc\u30eb25 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFF3BD", "rgba(247,239,184,0)"], [.341, .506, 1], 0, 0, 0, 0, 0, 80.3).s().p("AotIuQjnjnAAlHQAAlGDnjnQDnjnFGAAQFHAADnDnQDnDnAAFGQAAFHjnDnQjnDnlHAAQlGAAjnjng");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb25, new a.Rectangle(-78.9, -78.9, 157.8, 157.8), null);
    (b.\u30b7\u30f3\u30dc\u30eb12 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AhUgpICpAAIhVBUg");
        this.shape.setTransform(-.025, -4.25);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb12, new a.Rectangle(-8.5, -8.5, 17, 8.5), null);
    (b.\u30b7\u30f3\u30dc\u30eb9 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = 0
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
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb9, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.white, new a.Rectangle(0, 0, 240, 320), null);
    (b.title_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.cd_debut_white;
        this.instance.parent = this;
        this.instance.setTransform(-118, -22, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.title_white, new a.Rectangle(-118, -22, 236, 44), null);
    (b.shape38 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AufO/IAA99Ic+AAIAAd9g");
        this.shape.setTransform(10.05, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-82.7, -95.8, 185.5, 191.7);
    (b.powder_paper_core_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(4 * Math.random() + 2))
        };
        this.frame_5 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgYAOIAAguIArAeIAGAjg");
        this.shape.setTransform(.3, -.225);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgQgcIAeAMIADAgIgSANg");
        this.shape_1.setTransform(-.675, -.15);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AgXAYIAagzIAVAUIgIAjg");
        this.shape_2.setTransform(-.6, -.275);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFFFF").s().p("AgbgGIAWgYIAhAyIgJALg");
        this.shape_3.setTransform(.025, .425);
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-3, -3.5, 5.9, 7.1);
    (b.pointGlitter2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-34.6, -34.6, 69.30000000000001, 69.30000000000001);
    (b.light = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["#FFFFFF", "rgba(255,255,255,0)"], [0, 1], -26.5, -84, -26.5, 84).s().p("AmeNcIAA2eQCvkZDvAAQDwAACvEZIAAWeg");
        this.shape.setTransform(0, 86);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-41.5, 0, 83, 172);
    (b.gr_bubble_parts = function(c, d, e) {
        null ==
            e && (e = !1);
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(252,194,242,0)", "rgba(255,255,255,0.6)", "rgba(255,196,238,0)"], [.251, .855, .882], 0, 0, 0, 0, 0, 70.4).s().p("AnuHvQjNjMAAkjQAAkiDNjMQDMjNEiAAQEjAADMDNQDNDMAAEiQAAEjjNDMQjMDNkjAAQkiAAjMjNg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.gr_bubble_parts, new a.Rectangle(-70, -70, 140, 140), null);
    (b.ef_\u767d\u653e\u5c04 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF",
            "rgba(255,255,255,0)"
        ], [.259, 1], 0, 0, 0, 0, 0, 24.5).s().p("AinCoQhGhFAAhjQAAhiBGhFQBFhGBiAAQBjAABFBGQBGBFAABiQAABjhGBFQhFBGhjAAQhiAAhFhGg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.ef_\u767d\u653e\u5c04, new a.Rectangle(-23.7, -23.7, 47.5, 47.5), null);
    (b.card_tekari = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AnSEIIAGgmIWCAAIgGAmgArcDJIAAj4IWCAAIAAD4gAu1i0IAAhUIWCAAIAABUg");
        this.shape.setTransform(2.775, 1.1);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        g(b.card_tekari, new a.Rectangle(-92.2, -25.3, 190, 52.900000000000006), null);
    (b.black = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.black, new a.Rectangle(0, 0, 240, 320), null);
    (b.bg2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg_on;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 240, 310);
    (b._\u82b1\u3073\u30891_1\u306e\u30b3\u30d4\u30fc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.663)").s().p("Ag3BXQgFgCgDgFQgHgJgCgLQgTgIgIglIAAAAQgGgcAVgSQAOgOAjgHIAFAAQAnACA4gkQAGgEAJACQAMACAEAOQASBFgsAvQgjAphQAEIgCAAQgEAAgEgCgAghgqQgfAGgOAMQgQAPAFAWQAHAjASAEQACAMAHALIAEADIAFABQBLgDAhgmQAogrgQhBQgCgIgGgBQgEgBgDADQg8AmgqgDIAAAAIgCAAg");
        this.shape.setTransform(-.4522, .0056);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.329)").s().p("Ag7BgQgHgDgEgHQgGgIgDgJQgUgLgIgpQgHghAYgWQAQgRAngGIAHgBQAlABA0ghQAJgFAKABQALABAHAHQAIAHABAKQAMBRgoArQglAshWAFIgBAAQgHAAgHgEgAgig0QgiAHgPAOQgUATAGAbIAAAAQAHAlATAJQADAKAGAKQADAEAFADQAFACAFAAQBQgFAjgpQAsgvgShFQgEgOgMgCQgJgBgFADQg5AkgngCIgBAAIgEAAg");
        this.shape_1.setTransform(-.5846, -.0065);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AgzBPIgDgEQgIgLgBgMQgSgEgIgjQgEgWAQgOQANgNAfgGIADAAQApADA8gmQADgCAEABQAGAAACAIQAQBBgnArQghAmhMAEIAAAAIgFgBg");
        this.shape_2.setTransform(-.4869, -.0144);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = g(b._\u82b1\u3073\u30891_1\u306e\u30b3\u30d4\u30fc, new a.Rectangle(-11.5, -9.9, 21.9, 19.9), null);
    (b._yusho_p = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.cd_debut;
        this.instance.parent = this;
        this.instance.setTransform(-118, -22, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._yusho_p, new a.Rectangle(-118,
        -22, 236, 44), null);
    (b._\u304d\u3089\u304d\u3089 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.fp_kira;
        this.instance.parent = this;
        this.instance.setTransform(-10, -10);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.fp_kira;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-10, -10);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = g(b._\u304d\u3089\u304d\u3089, new a.Rectangle(-10, -10, 20, 20), null);
    (b._bg = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b.bg_off;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._bg, new a.Rectangle(0, 0, 240, 310), null);
    (b.unit = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch_all_blur;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.unit, new a.Rectangle(0, 0, 240, 320), null);
    (b.main = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b.ch_all;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 240, 320);
    (b.logo_result_white_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.logo_result_white;
        this.instance.parent = this;
        this.instance.setTransform(-112, -65, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.logo_result_white_1, new a.Rectangle(-112,
        -65, 224, 130), null);
    (b.logo_result_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.logo_result;
        this.instance.parent = this;
        this.instance.setTransform(-112, -65, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.logo_result_1, new a.Rectangle(-112, -65, 224, 130), null);
    (b.chara4_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch4_w;
        this.instance.parent = this;
        this.instance.setTransform(-57, -59, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.chara4_white, new a.Rectangle(-57, -59, 320, 384), null);
    (b.chara3_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch3_w;
        this.instance.parent = this;
        this.instance.setTransform(-24, -37, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.chara3_white, new a.Rectangle(-24, -37, 320, 384), null);
    (b.chara2_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch2_w;
        this.instance.parent = this;
        this.instance.setTransform(-41, -12, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.chara2_white, new a.Rectangle(-41, -12, 320, 384), null);
    (b.chara1_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch1_w;
        this.instance.parent = this;
        this.instance.setTransform(-49, -9, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.chara1_white, new a.Rectangle(-49, -9, 320, 384), null);
    (b.chara_5_gra = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch5;
        this.instance.parent = this;
        this.instance.setTransform(-151, -7, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-151, -7, 320, 384);
    (b.chara_4_gra = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch4;
        this.instance.parent = this;
        this.instance.setTransform(-147, 17, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-147, 17, 320, 384);
    (b.chara_3 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch3;
        this.instance.parent = this;
        this.instance.setTransform(-149, 55, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-149, 55, 320, 384);
    (b.chara_2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch2;
        this.instance.parent = this;
        this.instance.setTransform(-46, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-46, 0, 320, 384);
    (b.chara_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch1;
        this.instance.parent = this;
        this.instance.setTransform(-154, 60, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-154, 60, 320, 384);
    (b.ch5_w_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.ch5_w;
        this.instance.parent = this;
        this.instance.setTransform(-160, -192, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.ch5_w_1, new a.Rectangle(-160, -192, 320, 384), null);
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
    (b.\u30b7\u30f3\u30dc\u30eb13 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_12 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb12;
        this.instance.parent = this;
        this.instance.setTransform(0, -10.05, 1, 1, 0, 0, 0, 0, -5.6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regY: -4.2,
            y: -8.3
        }, 0).wait(1).to({
            y: -7.5
        }, 0).wait(1).to({
            y: -6.4
        }, 0).wait(1).to({
            y: -5.3
        }, 0).wait(1).to({
                y: -4.5
            },
            0).wait(1).to({
            regY: -5.6,
            y: -5.6
        }, 0).wait(1).to({
            regY: -4.2,
            y: -4.5
        }, 0).wait(1).to({
            y: -5.3
        }, 0).wait(1).to({
            y: -6.4
        }, 0).wait(1).to({
            y: -7.5
        }, 0).wait(1).to({
            y: -8.3
        }, 0).wait(1).to({
            regY: -5.6,
            y: -10.05
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-8.5, -12.9, 17, 12.9);
    (b.\u30b7\u30f3\u30dc\u30eb4\u306e\u30b3\u30d4\u30fc000 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            1 == exportRoot.iosFlg ? (this.visible = !1, this.gotoAndStop(2)) : this.gotoAndPlay(Math.floor(40 * Math.random() +
                2));
            this.x = Math.floor(Math.random(240))
        };
        this.frame_79 = function() {
            this.x = Math.floor(241 * Math.random());
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1));
        this.instance = new b._\u82b1\u3073\u30891_1\u306e\u30b3\u30d4\u30fc;
        this.instance.parent = this;
        this.instance.setTransform(-1, -.3, 1, 1, -53.9686);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -.6,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 36.3237,
            x: -1.4,
            y: 1.9
        }, 0).wait(1).to({
            rotation: 41.6721,
            x: -1.35,
            y: 7.3
        }, 0).wait(1).to({
            rotation: 48.9352,
            x: -1.7,
            y: 14.3
        }, 0).wait(1).to({
            scaleX: .9998,
            scaleY: .9998,
            rotation: 57.7881,
            x: -2.55,
            y: 22.55
        }, 0).wait(1).to({
            rotation: 68.0728,
            x: -4.3,
            y: 31.7
        }, 0).wait(1).to({
            scaleX: .9997,
            scaleY: .9997,
            rotation: 79.6582,
            x: -7.25,
            y: 41.55
        }, 0).wait(1).to({
            rotation: 92.337,
            x: -11.65,
            y: 51.85
        }, 0).wait(1).to({
            scaleX: .9996,
            scaleY: .9996,
            rotation: 105.7078,
            x: -17.7,
            y: 62.15
        }, 0).wait(1).to({
            scaleX: .9995,
            scaleY: .9995,
            rotation: 119.1592,
            x: -25.45,
            y: 72.05
        }, 0).wait(1).to({
            scaleX: .9994,
            scaleY: .9994,
            rotation: 132.0296,
            x: -34.55,
            y: 81
        }, 0).wait(1).to({
            rotation: 143.8226,
            x: -44.4,
            y: 88.7
        }, 0).wait(1).to({
            scaleX: .9993,
            scaleY: .9993,
            rotation: 154.2665,
            x: -54.45,
            y: 95
        }, 0).wait(1).to({
            scaleY: .9992,
            rotation: 163.1812,
            x: -63.9,
            y: 100
        }, 0).wait(1).to({
            scaleX: .9992,
            rotation: 170.175,
            x: -71.75,
            y: 103.6
        }, 0).wait(1).to({
            regX: 0,
            rotation: 15.0346,
            x: -76.45,
            y: 105.35
        }, 0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -133.0049,
            x: -74.6,
            y: 117.95
        }, 0).wait(1).to({
            regX: -.6,
            skewX: 45.9223,
            skewY: -134.0778,
            x: -73.55,
            y: 120.85
        }, 0).wait(1).to({
            skewX: 43.376,
            skewY: -136.6242,
            x: -72.1,
            y: 126.45
        }, 0).wait(1).to({
            skewX: 39.917,
            skewY: -140.0832,
            x: -69.8,
            y: 133.7
        }, 0).wait(1).to({
            skewX: 35.834,
            skewY: -144.1662,
            x: -66.75,
            y: 142.25
        }, 0).wait(1).to({
            skewX: 31.3009,
            skewY: -148.6992,
            x: -62.6,
            y: 151.65
        }, 0).wait(1).to({
            skewX: 26.4342,
            skewY: -153.5659,
            x: -57.35,
            y: 161.7
        }, 0).wait(1).to({
            skewX: 21.3187,
            skewY: -158.6814,
            x: -50.6,
            y: 172.1
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 16.0203,
            skewY: -163.9798,
            x: -42.25,
            y: 182.5
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: 10.5947,
            skewY: -169.4054,
            x: -32.25,
            y: 192.5
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 5.0919,
            skewY: -174.9082,
            x: -20.55,
            y: 201.7
        }, 0).wait(1).to({
            skewX: -.4393,
            skewY: -180.4394,
            x: -7.55,
            y: 209.75
        }, 0).wait(1).to({
            skewX: -5.9467,
            skewY: -185.9467,
            x: 6.25,
            y: 216.35
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -11.3694,
            skewY: -191.3694,
            x: 20.35,
            y: 221.45
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: -16.629,
            skewY: -196.629,
            x: 34.15,
            y: 225.25
        }, 0).wait(1).to({
            skewX: -21.6126,
            skewY: -201.6126,
            x: 47.1,
            y: 227.9
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -26.1353,
            skewY: -206.1353,
            x: 58.65,
            y: 229.6
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: -29.8313,
            skewY: -209.8313,
            x: 68,
            y: 230.55
        }, 0).wait(1).to({
            regX: 0,
            scaleX: .9446,
            skewX: -31.6765,
            skewY: -211.6764,
            x: 72.1,
            y: 231.3
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -47.468,
            skewX: 0,
            skewY: -360,
            x: 75.1,
            y: 239.7
        }, 0).wait(1).to({
            regX: -.6,
            rotation: 60.3409,
            x: 74,
            y: 241.6
        }, 0).wait(1).to({
            rotation: 63.3419,
            x: 72.4,
            y: 246.8
        }, 0).wait(1).to({
            rotation: 67.4378,
            x: 70.1,
            y: 253.5
        }, 0).wait(1).to({
            rotation: 72.4088,
            x: 67.25,
            y: 261.3
        }, 0).wait(1).to({
            rotation: 78.1257,
            x: 63.7,
            y: 269.9
        }, 0).wait(1).to({
            rotation: 84.529,
            x: 59.4,
            y: 279.15
        }, 0).wait(1).to({
            rotation: 91.5968,
            x: 54.25,
            y: 288.8
        }, 0).wait(1).to({
            rotation: 99.3239,
            x: 48.25,
            y: 298.7
        }, 0).wait(1).to({
            rotation: 107.6989,
            x: 41.2,
            y: 308.65
        }, 0).wait(1).to({
            rotation: 116.6928,
            x: 32.95,
            y: 318.45
        }, 0).wait(1).to({
            rotation: 126.2253,
            x: 23.6,
            y: 327.85
        }, 0).wait(1).to({
            rotation: 136.1379,
            x: 13.05,
            y: 336.6
        }, 0).wait(1).to({
            rotation: 146.1747,
            x: 1.45,
            y: 344.35
        }, 0).wait(1).to({
            rotation: 156.0145,
            x: -10.8,
            y: 350.9
        }, 0).wait(1).to({
            rotation: 165.3168,
            x: -23.4,
            y: 356.1
        }, 0).wait(1).to({
            rotation: 173.7651,
            x: -35.7,
            y: 359.95
        }, 0).wait(1).to({
            rotation: 181.0466,
            x: -46.95,
            y: 362.55
        }, 0).wait(1).to({
            rotation: 186.6915,
            x: -56.05,
            y: 364.1
        }, 0).wait(1).to({
            regX: 0,
            rotation: 15.9802,
            x: -61.15,
            y: 364.75
        }, 0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -493.0049,
            x: -70.3,
            y: 369.75
        }, 0).wait(1).to({
            regX: -.6,
            skewX: 136.2691,
            skewY: -403.7311,
            x: -70.95,
            y: 372.55
        }, 0).wait(1).to({
            skewX: 131,
            skewY: -409.0001,
            x: -70.8,
            y: 378.05
        }, 0).wait(1).to({
            skewX: 123.6933,
            skewY: -416.3068,
            x: -70.3,
            y: 385.4
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 114.7091,
            skewY: -425.291,
            x: -69.05,
            y: 394.2
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: 104.2375,
            skewY: -435.7625,
            x: -66.65,
            y: 404.2
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 92.4922,
            skewY: -447.5078,
            x: -62.8,
            y: 414.95
        }, 0).wait(1).to({
            skewX: 79.803,
            skewY: -460.1969,
            x: -57.3,
            y: 426.2
        }, 0).wait(1).to({
            skewX: 66.682,
            skewY: -473.3178,
            x: -49.8,
            y: 437.4
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: 53.7458,
            skewY: -486.2539,
            x: -40.5,
            y: 448.1
        }, 0).wait(1).to({
            skewX: 41.5096,
            skewY: -498.4901,
            x: -29.85,
            y: 457.8
        }, 0).wait(1).to({
            skewX: 30.2585,
            skewY: -509.7412,
            x: -18.35,
            y: 466.25
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 20.0502,
            skewY: -519.9494,
            x: -6.65,
            y: 473.4
        }, 0).wait(1).to({
            skewX: 10.8518,
            skewY: -529.1478,
            x: 4.75,
            y: 479.35
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: 2.6467,
            skewY: -537.3528,
            x: 15.55,
            y: 484.25
        }, 0).wait(1).to({
            skewX: -4.463,
            skewY: -544.4624,
            x: 25.35,
            y: 488.15
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: -10.0942,
            skewY: -550.0936,
            x: 33.3,
            y: 491
        }, 0).wait(1).to({
            regX: 0,
            scaleX: .9446,
            skewX: -31.5042,
            skewY: -571.5036,
            x: 36.75,
            y: 492.5
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_1 =
            new b.\u30b7\u30f3\u30dc\u30eb5000;
        this.instance_1.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            _off: !0
        }, 1).wait(79))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-90.2, -14.5, 179.7, 520.6);
    (b.yusho_mc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_45 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(45).call(this.frame_45).wait(1));
        c = new a.Shape;
        c._off = !0;
        c.graphics.p("AtQCsQgTgGgSgBQgVgBgPAFQgyAQgugNQgrgMgfgiQgfgggMgtQgNgtAKgtQARhJA6glQA5gkBLAPQASAEAdgBIAwgCIBIADQAqACAeAEQAPACAXALIAmATQAJgTAUgIQAQgGAaABQAuABA9gBQAPAAAdgGIANgCQAIgBADACQAQAJAVgCQAMgBAYgFQAqgHAQAJQAQAKAQAtIAEgNQANgbAWgOQAWgQAZADQBAAIAPA2QABAFAHAEQAGADAFABIAcABIAdAAQAeAAARAFQAZAIAOAUQAEAGAOAAIB6AAQAbAAAJgMQAKgMgEgaQgFgeAWgSQAWgSAfALQAZAJAKABQASACARgLQAJgGANgCQAMgDALABQAOABAMAEQAPAFAIAIQANANANACQAMADASgHQAPgFAYgEIApgHIAggIQAUgFANgBQAKgBARAFQATAEAIABQASABAjAJQAgAGAWgMQAhgRAyAOQAHADALgBIATgBIAhgDQAUgBANACQAeAFAQAYQAQAYgGAfQgDAQgKAoQgIAdAAAMQgBAXALAWQARAigUAiQgUAhgnAGQgTADgegQQgLgFgGgBQgIAAgIAGQgqAegsgfQgEgDgIAAQgIAAgGACQg5ASgeAFQgxAIgqgLQgXgGgkAEQg+AGg2gcQgRgJgQABQgQAAgRAKQgXAOgOAEQgVAHgVgFQghgIgTgeIgbg5IgDgJIgBgIIiGAAIAFAUIADAQQADARgGANQgGAOgPAFQgoAPgQADQggAHgbgJQgLgDgSgBIgegBIhBgGIgKgBIiMAUQgcADgggUQghgVgMgdQgJgWgTgCQgTgDgRASQgRATgZAXQgUASgcAIQgWAFggAAQgUABgOgOQgKgJgMgUIgbAVQgQANgNADQg0ARgjAEQgRACgQAAQgeAAgbgHgAo6AWQgHAJgCAeQATgHAJgKQAKgMAAgTIgCAAQgUAAgHAJgAvBg+QgIABgDAMQgIAkgBAjQAAAJAEAKQAFALAFABQAIADALgDQAKgCAKgFQAJgGAMgLIASgQIg3hDQgIgIgHAAIgCAAgAh1ABQAJAEARAFQAOAFAFAHQANARASADQAJABAbgDQABgRAAgHQgCgNgQACQgWADgQgEQgSgEgNgOg");
        c.setTransform(-1.8861, -3.2316);
        this.instance = new b.card_tekari;
        this.instance.parent = this;
        this.instance.setTransform(-128.45, 7.65, 1.265, 1, -41.6902, 0, 0, .1, 8.3);
        this.instance._off = !0;
        d = [this.instance];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance).wait(7).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 2.8,
            regY: 1.1,
            rotation: -41.6897,
            x: -129.6,
            y: -.05
        }, 0).wait(1).to({
            scaleY: .9999,
            rotation: -41.6882,
            x: -126.5
        }, 0).wait(1).to({
            scaleX: 1.2649,
            rotation: -41.6857,
            x: -121.3
        }, 0).wait(1).to({
            scaleX: 1.2648,
            scaleY: .9998,
            rotation: -41.6822,
            x: -114.05
        }, 0).wait(1).to({
            scaleX: 1.2646,
            scaleY: .9996,
            rotation: -41.6776,
            x: -104.7
        }, 0).wait(1).to({
            scaleX: 1.2644,
            scaleY: .9995,
            rotation: -41.6721,
            x: -93.3
        }, 0).wait(1).to({
            scaleX: 1.2642,
            scaleY: .9993,
            rotation: -41.6656,
            x: -79.8
        }, 0).wait(1).to({
            scaleX: 1.2639,
            scaleY: .9991,
            rotation: -41.6581,
            x: -64.25
        }, 0).wait(1).to({
            scaleX: 1.2636,
            scaleY: .9989,
            rotation: -41.6496,
            x: -46.6
        }, 0).wait(1).to({
            scaleX: 1.2633,
            scaleY: .9986,
            rotation: -41.6401,
            x: -26.9
        }, 0).wait(1).to({
            regX: .1,
            regY: 8.3,
            scaleX: 1.263,
            scaleY: .9984,
            rotation: -41.6295,
            x: -2.95,
            y: 7.6
        }, 0).wait(1).to({
            regX: 2.8,
            regY: 1.1,
            scaleX: 1.2634,
            scaleY: .9987,
            rotation: -41.6411,
            x: 26.9,
            y: -.05
        }, 0).wait(1).to({
            scaleX: 1.2637,
            scaleY: .9989,
            rotation: -41.6514,
            x: 55.65
        }, 0).wait(1).to({
            scaleX: 1.264,
            scaleY: .9992,
            rotation: -41.6605,
            x: 81
        }, 0).wait(1).to({
            scaleX: 1.2643,
            scaleY: .9994,
            rotation: -41.6683,
            x: 102.95
        }, 0).wait(1).to({
            scaleX: 1.2645,
            scaleY: .9996,
            rotation: -41.675,
            x: 121.55
        }, 0).wait(1).to({
            scaleX: 1.2647,
            scaleY: .9997,
            rotation: -41.6805,
            x: 136.75
        }, 0).wait(1).to({
            scaleX: 1.2648,
            scaleY: .9998,
            rotation: -41.6847,
            x: 148.55
        }, 0).wait(1).to({
            scaleX: 1.2649,
            scaleY: .9999,
            rotation: -41.6877,
            x: 157
        }, 0).wait(1).to({
            scaleX: 1.265,
            scaleY: 1,
            rotation: -41.6896,
            x: 162.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 8.2,
            rotation: -41.6902,
            x: 165.95,
            y: 7.65
        }, 0).to({
            _off: !0
        }, 1).wait(17));
        this.instance_1 = new b.title_white;
        this.instance_1.parent = this;
        this.instance_1.setTransform(107.5, 20.8, 1, 1, 0, 0, 0, 107.5, 20.8);
        this.instance_1.alpha = .0117;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(7).to({
                _off: !1
            },
            0).to({
            alpha: .3984
        }, 11, a.Ease.quadIn).to({
            alpha: .0117
        }, 11).to({
            _off: !0
        }, 1).wait(16));
        this.instance_2 = new b._yusho_p;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 34, 1, 1, 0, 0, 0, 0, 34);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(46))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-118, -22, 236, 44);
    (b.sprite43 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(this.timeline.position + Math.floor(7 * Math.random() + 1))
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(10));
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb10000;
        this.instance.parent = this;
        this.instance.setTransform(-.05, 0, .1255, 1);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .372
        }, 0).to({
            scaleX: .5,
            alpha: .1289
        }, 4).to({
            _off: !0
        }, 1).wait(11));
        this.instance_1 = new b._\u304d\u3089\u304d\u3089;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_1.alpha = .4297;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            scaleX: 1.9067,
            scaleY: 1.9067,
            rotation: -11.2055,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: 2.328,
            scaleY: 2.328,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
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
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.1, -42.3, 148.2, 84.69999999999999);
    (b.sprite39 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.shape38("synched", 0);
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.sprite39, new a.Rectangle(-82.7, -95.8, 185.5, 191.7), null);
    (b.powder_paper_core = function(c, d, e) {
        this.initialize(c,
            d, e, {
                r: 58,
                "-": 126
            });
        this.frame_0 = function() {
            this.rotation += Math.floor(14 * Math.random());
            this.gotoAndPlay(Math.floor(65 * Math.random() + 15))
        };
        this.frame_126 = function() {
            this.gotoAndPlay("r")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(126).call(this.frame_126).wait(1));
        this.instance = new b.powder_paper_core_inner;
        this.instance.parent = this;
        this.instance.setTransform(-1.4, -17.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(58).to({
            x: 0
        }, 0).to({
            x: 2.1,
            y: 692.85
        }, 68).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-3.5, -20.9, 8.4, 716.8);
    (b.powder_paper = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.powder_paper_core;
        this.instance.parent = this;
        this.instance.setTransform(-150.15, 45.45);
        this.instance_1 = new b.powder_paper_core;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-141.65, 38.15, .8151, .8151, 0, 0, 180);
        this.instance_2 = new b.powder_paper_core;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-50.85, 39.3, 1.0436, 1.0436, 0, 0, 180);
        this.instance_3 =
            new b.powder_paper_core;
        this.instance_3.parent = this;
        this.instance_3.setTransform(16.2, 39.4);
        this.instance_4 = new b.powder_paper_core;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-74.85, 40.1, .5634, .5634);
        this.instance_5 = new b.powder_paper_core;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-132.7, 42.9, 1.0737, 1.1914);
        this.instance_6 = new b.powder_paper_core;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-127, 43.5, .5916, .5916);
        this.instance_7 = new b.powder_paper_core;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(73.95, 35.3, .7145, .7145, 0, 0, 180);
        this.instance_8 = new b.powder_paper_core;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-32.5, 26.5, .423, .423, 0, 0, 180);
        this.instance_9 = new b.powder_paper_core;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-56.8, 31.1, .5775, .5775);
        this.instance_10 = new b.powder_paper_core;
        this.instance_10.parent = this;
        this.instance_10.setTransform(131.1, 34.25, .5106, .5106);
        this.instance_11 = new b.powder_paper_core;
        this.instance_11.parent =
            this;
        this.instance_11.setTransform(35.95, 52.4, .8962, .8962);
        this.instance_12 = new b.powder_paper_core;
        this.instance_12.parent = this;
        this.instance_12.setTransform(117.9, 39.2, .9937, .8943);
        this.instance_13 = new b.powder_paper_core;
        this.instance_13.parent = this;
        this.instance_13.setTransform(115.45, 36.35, 1.0614, 1.0614);
        this.instance_14 = new b.powder_paper_core;
        this.instance_14.parent = this;
        this.instance_14.setTransform(107.05, 38.25, .571, .571);
        this.instance_15 = new b.powder_paper_core;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-11.85, 42);
        this.instance_16 = new b.powder_paper_core;
        this.instance_16.parent = this;
        this.instance_16.setTransform(1.35, 47.05);
        this.instance_17 = new b.powder_paper_core;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-82.55, 37.2);
        this.instance_18 = new b.powder_paper_core;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-103.6, 34.85, .5557, .5557, 2.4518);
        this.instance_19 = new b.powder_paper_core;
        this.instance_19.parent = this;
        this.instance_19.setTransform(66.8,
            47.6, 1.1856, 1.1856);
        this.instance_20 = new b.powder_paper_core;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-22.2, 34.75);
        this.instance_21 = new b.powder_paper_core;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-115.55, 33.65, .7145, .7145);
        this.instance_22 = new b.powder_paper_core;
        this.instance_22.parent = this;
        this.instance_22.setTransform(84.95, 45.05);
        this.instance_23 = new b.powder_paper_core;
        this.instance_23.parent = this;
        this.instance_23.setTransform(11.05, 27.85, .4547, .4547);
        this.instance_24 =
            new b.powder_paper_core;
        this.instance_24.parent = this;
        this.instance_24.setTransform(57.45, 34.75);
        this.instance_25 = new b.powder_paper_core;
        this.instance_25.parent = this;
        this.instance_25.setTransform(-92.25, 47.85);
        this.instance_26 = new b.powder_paper_core;
        this.instance_26.parent = this;
        this.instance_26.setTransform(99.75, 49.9, 1.096, 1.096);
        this.instance_27 = new b.powder_paper_core;
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.45, 35.9, .7145, .7145);
        this.instance_28 = new b.powder_paper_core;
        this.instance_28.parent =
            this;
        this.instance_28.setTransform(46.15, 43.75);
        this.instance_29 = new b.powder_paper_core;
        this.instance_29.parent = this;
        this.instance_29.setTransform(-40.5, 33.4);
        this.instance_30 = new b.powder_paper_core;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-62.55, 36, .7211, .7211);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
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
    }).prototype = g(b.powder_paper,
        new a.Rectangle(-153.7, 12.5, 285.5, 27), null);
    (b.mc_bubble = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(20 * Math.random() + 1));
            this.scaleX = this.scaleY = 1 * Math.random();
            this.visible = !1
        };
        this.frame_21 = function() {
            this.visible = !0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(25));
        this.instance = new b.gr_bubble_parts("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .2, .2, 89.9956);
        this.timeline.addTween(a.Tween.get(this.instance).to({
                _off: !0
            },
            1).wait(20).to({
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-106.5, -70, 169.5, 140);
    (b.glitter_first_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.pointGlitter2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .0121, .6227, 59.2024);
        this.instance_1 =
            new b.pointGlitter2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .0109, .7287, -30.7981);
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
    }).prototype = g(b.glitter_first_inner,
        new a.Rectangle(-18.5, -21.7, 37.1, 43.4), null);
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
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_5.parent =
            this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-4.25, 24.65,
            .5292, .8921, -178.5141);
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
        this.instance_14.setTransform(-12.4, 14, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_15 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_15.parent =
            this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_18 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30,
            16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65, 1.75, .5292, .5292, -118.5129);
        this.instance_21 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_22 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
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
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_30 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_31 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_32 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_33 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_33.parent = this;
        this.instance_33.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_34 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-10.75, -12.3, .5925,
            .5292, 0, 17.9935, -162.0079);
        this.instance_35 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_35.parent = this;
        this.instance_35.setTransform(.6, -8.6, .5292, .5292, -45.4801);
        this.instance_36 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_36.parent = this;
        this.instance_36.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_37 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_37.parent = this;
        this.instance_37.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
        this.instance_38 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_38.parent = this;
        this.instance_38.setTransform(14.45, -1.3, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_39 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_39.parent = this;
        this.instance_39.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_40 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_40.parent = this;
        this.instance_40.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_41 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_41.parent = this;
        this.instance_41.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_42 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_42.parent = this;
        this.instance_42.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_43 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_43.parent = this;
        this.instance_43.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_44 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_44.parent = this;
        this.instance_44.setTransform(13.6,
            24.65, .5292, .5292, 61.4871);
        this.instance_45 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_45.parent = this;
        this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);
        this.instance_46 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_46.parent = this;
        this.instance_46.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_47 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
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
    }).prototype = g(b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408,
        new a.Rectangle(-320.5, -245.4, 564, 474.70000000000005), null);
    (b.chara_5 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_31 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(1));
        this.instance = new b.ch5_w_1;
        this.instance.parent = this;
        this.instance.setTransform(9, 185);
        this.instance.alpha = .8008;
        this.instance.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance).to({
                alpha: .0117
            },
            14, a.Ease.quadOut).wait(4).to({
            alpha: .6992
        }, 7, a.Ease.quadIn).to({
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.chara_5_gra("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 160, 1, 1, 0, 0, 0, 0, 160);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(25).to({
            startPosition: 0
        }, 0).to({
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-151, -7, 320, 384);
    (b.chara_4 = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_34 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(1));
        this.instance = new b.chara4_white;
        this.instance.parent = this;
        this.instance.setTransform(2.8, 238.25, 1, 1, 0, 0, 0, 92.2, 162.5);
        this.instance.alpha = .8008;
        this.instance.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: .0117
        }, 14, a.Ease.get(1)).wait(6).to({
            alpha: .8008
        }, 8, a.Ease.quadIn).to({
            x: 3.3,
            y: 239.25,
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.chara_4_gra("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 160, 1, 1, 0, 0, 0, 0, 160);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(28).to({
            startPosition: 0
        }, 0).to({
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-147, 0, 321.1, 401.8);
    (b.chara_3_mc = function(c, d, e) {
        this.initialize(c, d, e, {
            visible: 1
        });
        this.frame_0 = function() {
            this.play()
        };
        this.frame_28 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));
        this.instance = new b.chara3_white;
        this.instance.parent = this;
        this.instance.setTransform(18.6, 422.45, 1, 1, 0, 0, 0, 144, 173.5);
        this.instance.alpha = .8008;
        this.instance.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: .0117
        }, 14, a.Ease.get(1)).wait(1).to({
            alpha: .8008
        }, 7, a.Ease.quadIn).to({
            x: 18.1,
            y: 422.7,
            alpha: .0117
        }, 5).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.chara_3("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 550.2, 1, 1, 0, 0, 0, 0, 393);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            _off: !0
        }, 28).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-149.9, 0, 320.9, 596.2);
    (b.chara_2_mc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_22 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(1));
        this.instance = new b.chara2_white;
        this.instance.parent = this;
        this.instance.setTransform(-22.7, 198.3, 1, 1, 0, 0, 0, 102.2, 185.8);
        this.instance.alpha = .8008;
        this.instance.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: .0117
        }, 11, a.Ease.get(1)).wait(1).to({
            alpha: .8008
        }, 6, a.Ease.quadIn).to({
            x: -22.95,
            alpha: .0117
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.chara_2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(4, 324, 1, 1, 0, 0, 0,
            124, 324);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            startPosition: 0
        }, 11, a.Ease.get(1)).wait(1).to({
            startPosition: 0
        }, 0).to({
            startPosition: 0
        }, 6, a.Ease.quadIn).to({
            alpha: .0117
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-166.1, 0, 320.2, 384.5);
    (b.chara_1_mc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_24 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));
        this.instance = new b.chara1_white;
        this.instance.parent = this;
        this.instance.setTransform(-8.9, 242.3, 1, 1, 0, 0, 0, 96, 187.8);
        this.instance.alpha = .8008;
        this.instance.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: .0117
        }, 12, a.Ease.get(1)).wait(1).to({
            alpha: .8008
        }, 10, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.chara_1("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 379, 1, 1, 0, 0, 0, 0, 393);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
                _off: !0
            },
            24).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-154, 0, 320.1, 430);
    (b.sprite44\u306e\u30b3\u30d4\u30fc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.sprite43;
        this.instance.parent = this;
        this.instance.setTransform(97, 6.5, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(13));
        this.instance_1 = new b.sprite43;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(-75.7, 10.8, .281, .281);
        this.instance_2 = new b.sprite43;
        this.instance_2.parent = this;
        this.instance_2.setTransform(114.45, -14.55, .281, .281);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }]
        }, 3).wait(10));
        this.instance_3 = new b.sprite43;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-27.1, 8.25, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_4 = new b.sprite43;
        this.instance_4.parent = this;
        this.instance_4.setTransform(109.65, 9.8, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_5 = new b.sprite43;
        this.instance_5.parent = this;
        this.instance_5.setTransform(4.25, -14.8, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_6 = new b.sprite43;
        this.instance_6.parent = this;
        this.instance_6.setTransform(43.05,
            1.4, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_7 = new b.sprite43;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-81.7, -15.4, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_8 = new b.sprite43;
        this.instance_8.parent = this;
        this.instance_8.setTransform(82.85, -13.4, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(10).to({
                _off: !1
            },
            0).wait(3));
        this.instance_9 = new b.sprite43;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-43.65, -11.1, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_10 = new b.sprite43;
        this.instance_10.parent = this;
        this.instance_10.setTransform(56.45, 13.35, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_11 = new b.sprite43;
        this.instance_11.parent =
            this;
        this.instance_11.setTransform(24.4, -3.7, .281, .281);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_12 = new b.sprite43;
        this.instance_12.parent = this;
        this.instance_12.setTransform(5.7, 14.4, .281, .281);
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_13 = new b.sprite39;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-.05, 0, .8771, .3961);
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(13))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-84.2, -37.9, 201.2, 75.9);
    (b.powder_rise_core = function(c, d, e) {
        this.initialize(c, d, e, {});
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
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5144, .5144);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(30).to({
            _off: !1,
            scaleX: .4992,
            scaleY: .4992,
            rotation: -44.8601,
            alpha: .4297
        }, 0).wait(1).to({
            scaleX: .8748,
            scaleY: .8748,
            rotation: -11.215,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: .9913,
            scaleY: .9913,
            rotation: 1.9389,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: .9668,
            scaleY: .9668,
            rotation: 7.3966,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: .9266,
            scaleY: .9266,
            rotation: 16.3731,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: .8705,
            scaleY: .8705,
            rotation: 28.8683,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: .7987,
            scaleY: .7987,
            rotation: 44.8823,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-19.3, -22.6, 38.7, 45.3);
    (b.powder_paper_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.instance = new b.powder_paper;
        this.instance.parent = this;
        this.instance.setTransform(69.05, 0, .489, .489);
        this.instance_1 = new b.powder_paper;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-66.05, 0, .489, .489);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).to({
            state: []
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-141.1, 0, 274.6, 19.3);
    (b.mc_bubble_set = function(c, d, e) {
        null == e && (e = !1);
        this.initialize(c, d, e, {});
        this.instance =
            new b.mc_bubble;
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
        this.instance_3.parent =
            this;
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
        this.instance_6.setTransform(-300,
            -110);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(1));
        this.instance_7 = new b.mc_bubble;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-135, -107);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(1))
    }).prototype = g(b.mc_bubble_set, new a.Rectangle(-344, -124, 376.5, 254), null);
    (b.award_txt_mc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sprite44\u306e\u30b3\u30d4\u30fc;
        this.instance.parent = this;
        this.instance.setTransform(4.65, 9.7, .9936, .9936, 0, 0, 0, 17.4, 0);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.title1 = new b.yusho_mc;
        this.title1.name = "title1";
        this.title1.parent = this;
        this.title1.setTransform(0, 14);
        this.timeline.addTween(a.Tween.get(this.title1).wait(1))
    }).prototype = g(b.award_txt_mc, new a.Rectangle(-118, -28, 236, 75.5), null);
    (b.powder_rise_inner = function(c, d, e) {
        this.initialize(c, d, e, {
            r: 46,
            "-": 204
        });
        this.frame_0 = function() {
            this.rotation += Math.floor(14 * Math.random());
            this.gotoAndPlay(Math.floor(80 * Math.random() + 1))
        };
        this.frame_204 = function() {
            this.gotoAndPlay("r")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(204).call(this.frame_204).wait(1));
        this.instance = new b.powder_rise_core;
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(46).to({
            x: .6,
            y: 575.55
        }, 158).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-42.1, -28.7, 86.7, 615.5);
    (b.rize_2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.powder_rise_inner;
        this.instance.parent = this;
        this.instance.setTransform(62.15, 14.05, .5, .5);
        this.instance_1 = new b.powder_rise_inner;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(9.65, 10.9, .5, .5);
        this.instance_2 = new b.powder_rise_inner;
        this.instance_2.parent = this;
        this.instance_2.setTransform(44.75, 11.55, .5, .5);
        this.instance_3 = new b.powder_rise_inner;
        this.instance_3.parent = this;
        this.instance_3.setTransform(26.85, 2.35, .5, .5);
        this.instance_4 = new b.powder_rise_inner;
        this.instance_4.parent = this;
        this.instance_4.setTransform(9.75, 18.1, .5, .5);
        this.instance_5 = new b.powder_rise_inner;
        this.instance_5.parent = this;
        this.instance_5.setTransform(35.6, 10.9,
            .5, .5);
        this.instance_6 = new b.powder_rise_inner;
        this.instance_6.parent = this;
        this.instance_6.setTransform(18.35, 14.85, .5, .5);
        this.instance_7 = new b.powder_rise_inner;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-54.05, 7.15, .5, .5);
        this.instance_8 = new b.powder_rise_inner;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-17.3, 6.2, .5, .5);
        this.instance_9 = new b.powder_rise_inner;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-41.7, 11.55, .5, .5);
        this.instance_10 = new b.powder_rise_inner;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-26.95, 8.85, .5, .5);
        this.instance_11 = new b.powder_rise_inner;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-37.4, 5.2, .5, .5);
        this.instance_12 = new b.powder_rise_inner;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-14.6, 13.25, .5, .5);
        this.instance_13 = new b.powder_rise_inner;
        this.instance_13.parent = this;
        this.instance_13.setTransform(73.6, 25.8, .5, .5);
        this.instance_14 = new b.powder_rise_inner;
        this.instance_14.parent = this;
        this.instance_14.setTransform(110.35, 24.85, .5, .5);
        this.instance_15 = new b.powder_rise_inner;
        this.instance_15.parent = this;
        this.instance_15.setTransform(85.95, 30.2, .5, .5);
        this.instance_16 = new b.powder_rise_inner;
        this.instance_16.parent = this;
        this.instance_16.setTransform(100.7, 27.5, .5, .5);
        this.instance_17 = new b.powder_rise_inner;
        this.instance_17.parent = this;
        this.instance_17.setTransform(90.25, 23.85, .5, .5);
        this.instance_18 = new b.powder_rise_inner;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-106.05,
            -1, .5, .5);
        this.instance_19 = new b.powder_rise_inner;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-70.95, -.35, .5, .5);
        this.instance_20 = new b.powder_rise_inner;
        this.instance_20.parent = this;
        this.instance_20.setTransform(113.05, 31.9, .5, .5);
        this.instance_21 = new b.powder_rise_inner;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-88.85, -9.55, .5, .5);
        this.instance_22 = new b.powder_rise_inner;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-105.95, 6.2, .5, .5);
        this.instance_23 =
            new b.powder_rise_inner;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-80.1, -1, .5, .5);
        this.instance_24 = new b.powder_rise_inner;
        this.instance_24.parent = this;
        this.instance_24.setTransform(-97.35, 2.95, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
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
                },
                {
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
    }).prototype = g(b.rize_2, new a.Rectangle(-110.8, -23.9, 228.7, 52.7), null);
    (b.vote_group_shot_5 = function(c, d, e) {
        this.initialize(c, d, e, {
            group_1: 22,
            group_2: 58,
            group_3: 120,
            skip: 121
        });
        this.frame_0 = function() {
            exportRoot.c_jump = function() {
                window.location.href =
                    exportRoot._url
            };
            exportRoot._url = window.im_cjs._url;
            this.play();
            comment = "\u3055\u3089\u306b\u2026"
        };
        this.frame_20 = function() {
            function m() {
                n.gotoAndPlay("skip");
                n.btn.removeEventListener("click", m)
            }
            var n = this;
            this.btn.addEventListener("click", m)
        };
        this.frame_22 = function() {
            window.se_play("se_041-1")
        };
        this.frame_58 = function() {
            window.se_play("se_122")
        };
        this.frame_121 = function() {
            window.se_play("se_123");
            this.play();
            this.btn.removeAllEventListeners("click")
        };
        this.frame_147 = function() {
            function m() {
                exportRoot.c_jump();
                n.btn.removeEventListener("click", m)
            }
            var n = this;
            this.btn.addEventListener("click", m)
        };
        this.frame_148 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(2).call(this.frame_22).wait(36).call(this.frame_58).wait(63).call(this.frame_121).wait(26).call(this.frame_147).wait(1).call(this.frame_148).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EgnqAztMAAAhnZMBPVAAAMAAABnZgAzDYiMAlgAAAMAAAgx/MglgAAAg");
        this.shape.setTransform(121.95,
            162.975);
        this.timeline.addTween(a.Tween.get(this.shape).wait(149));
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb13;
        this.instance.parent = this;
        this.instance.setTransform(232.5, 318, .75, .75);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(147).to({
            _off: !1
        }, 0).wait(2));
        this.lighter_tgt = new b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(119.8, 197.05);
        this.lighter_tgt._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt).wait(139).to({
            _off: !1
        }, 0).wait(10));
        this.lighter_tgt_1 = new b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.lighter_tgt_1.name = "lighter_tgt_1";
        this.lighter_tgt_1.parent = this;
        this.lighter_tgt_1.setTransform(119.8, 158.55, .4854, .4854);
        this.lighter_tgt_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_1).wait(31).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 45).wait(73));
        this.lighter_tgt_2 = new b.\u30b7\u30f3\u30dc\u30eb25;
        this.lighter_tgt_2.name =
            "lighter_tgt_2";
        this.lighter_tgt_2.parent = this;
        this.lighter_tgt_2.setTransform(120, 154.85, .8649, .8649);
        this.lighter_tgt_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_2).wait(121).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 1).wait(27));
        this.instance_1 = new b.title_white;
        this.instance_1.parent = this;
        this.instance_1.setTransform(227.5, 160.55, 1, 1, 0, 0, 0, 107.5, 20.8);
        this.instance_1.alpha = .6016;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(122).to({
            _off: !1
        }, 0).wait(1).to({
            x: 226.4,
            y: 68
        }, 0).to({
            x: 228.05,
            y: 66.85
        }, 1, a.Ease.get(1)).to({
            x: 227.5,
            y: 64.5
        }, 1).to({
            y: 326.3,
            alpha: .1992
        }, 14, a.Ease.quadIn).to({
            y: 316.95,
            alpha: .0117
        }, 6, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(3));
        this.sho = new b.award_txt_mc;
        this.sho.name = "sho";
        this.sho.parent = this;
        this.sho.setTransform(120, 156.15);
        this.sho.alpha = .0117;
        this.sho._off = !0;
        this.timeline.addTween(a.Tween.get(this.sho).wait(121).to({
            _off: !1
        }, 0).to({
            y: 124.35,
            alpha: 1
        }, 1).to({
            y: 32.2
        }, 1, a.Ease.get(1)).to({
            y: 30.5
        }, 2, a.Ease.get(1)).to({
            y: 292.2
        }, 14, a.Ease.quadIn).to({
                y: 282.25
            },
            6, a.Ease.quadInOut).to({
            y: 283
        }, 3).wait(1));
        this.lighter_tgt_3 = new b.\u30b7\u30f3\u30dc\u30eb25;
        this.lighter_tgt_3.name = "lighter_tgt_3";
        this.lighter_tgt_3.parent = this;
        this.lighter_tgt_3.setTransform(120, 154.9, 1.1561, 1.1561);
        this.lighter_tgt_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_3).wait(121).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 1).wait(27));
        this.instance_2 = new b.\u30b7\u30f3\u30dc\u30eb4\u306e\u30b3\u30d4\u30fc000;
        this.instance_2.parent = this;
        this.instance_2.setTransform(62.2, -84.7, 1.3542,
            1.3542);
        this.instance_3 = new b.\u30b7\u30f3\u30dc\u30eb4\u306e\u30b3\u30d4\u30fc000;
        this.instance_3.parent = this;
        this.instance_3.setTransform(102.95, -43.65, 2.1061, 1.9746, 0, 0, 180);
        this.instance_4 = new b.\u30b7\u30f3\u30dc\u30eb4\u306e\u30b3\u30d4\u30fc000;
        this.instance_4.parent = this;
        this.instance_4.setTransform(173.95, -60.5, 1.2566, 1.6126);
        this.instance_5 = new b.\u30b7\u30f3\u30dc\u30eb4\u306e\u30b3\u30d4\u30fc000;
        this.instance_5.parent = this;
        this.instance_5.setTransform(26.5, -31.8, 1.2566, 1.6126);
        this.instance_6 =
            new b.\u30b7\u30f3\u30dc\u30eb4\u306e\u30b3\u30d4\u30fc000;
        this.instance_6.parent = this;
        this.instance_6.setTransform(203.6, -215.8, 3.3643, 4.0483, 0, 0, 180);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }]
        }, 123).wait(26));
        this.instance_7 = new b.powder_paper_container;
        this.instance_7.parent = this;
        this.instance_7.setTransform(119.9, -19.45);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(123).to({
                _off: !1
            },
            0).wait(26));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("AJAMLQgGgGAAgIQAAgIAGgGQAGgGAIAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAQgIAAgGgGg");
        e = (new a.Graphics).p("AAONtQiKiMAAjMQAAjMCKiMQCMiMDMAAQDNAACLCMQCMCMAADMQAADMiMCMQiLCMjNAAQjMAAiMiMg");
        var q = (new a.Graphics).p("AoiPPQkSkSAAmQQAAmPESkSQERkRGPAAQGRAAERERQESESAAGPQAAGQkSESQkRERmRABQmPgBkRkRg"),
            p = (new a.Graphics).p("AvqQxQmYmYAApUQAApTGYmXQGXmYJTAAQJUAAGYGYQGXGXAAJTQAAJUmXGYQmYGXpUAAQpTAAmXmXg"),
            r = (new a.Graphics).p("A00U1QoeodAAsYQAAsWIeoeQIeoeMWAAQMYAAIdIeQIeIeAAMWQAAMYoeIdQodIesYAAQsWAAoeoeg"),
            t = (new a.Graphics).p("A5+Z/QqkqjAAvcQAAvaKkqkQKkqkPaAAQPcAAKjKkQKkKkAAPaQAAPcqkKjQqjKkvcAAQvaAAqkqkg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(139).to({
            graphics: d,
            x: 61.0243,
            y: 78.4993
        }).wait(1).to({
            graphics: e,
            x: 84.2045,
            y: 101.6745
        }).wait(1).to({
            graphics: q,
            x: 107.3846,
            y: 124.8496
        }).wait(1).to({
            graphics: p,
            x: 120.0051,
            y: 148.0247
        }).wait(1).to({
            graphics: r,
            x: 119.99,
            y: 154.9
        }).wait(1).to({
            graphics: t,
            x: 119.975,
            y: 154.875
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4));
        this.instance_8 =
            new b.main("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(0, 310, 1, 1, 0, 0, 0, 0, 310);
        this.instance_8._off = !0;
        d = [this.instance_8];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(139).to({
            _off: !1
        }, 0).wait(10));
        this.instance_9 = new b.white;
        this.instance_9.parent = this;
        this.instance_9.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_9.alpha = .8008;
        this.instance_9.compositeOperation = "lighter";
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(121).to({
                _off: !1
            },
            0).to({
            alpha: .3008
        }, 18, a.Ease.quadInOut).to({
            _off: !0
        }, 8).wait(2));
        this.unit = new b.unit;
        this.unit.name = "unit";
        this.unit.parent = this;
        this.unit._off = !0;
        this.timeline.addTween(a.Tween.get(this.unit).wait(121).to({
            _off: !1
        }, 0).wait(18).to({
            _off: !0
        }, 8).wait(2));
        this.lighter_tgt_4 = new b.rize_2;
        this.lighter_tgt_4.name = "lighter_tgt_4";
        this.lighter_tgt_4.parent = this;
        this.lighter_tgt_4.setTransform(120.25, 327.15, 1.0001, 1.0001, 172.9993, 0, 0, -.1, 10.5);
        this.lighter_tgt_4.alpha = 0;
        this.lighter_tgt_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_4).wait(32).to({
                _off: !1
            },
            0).to({
            alpha: 1
        }, 4, a.Ease.get(1)).wait(113));
        this.lighter_tgt_5 = new b.mc_bubble_set;
        this.lighter_tgt_5.name = "lighter_tgt_5";
        this.lighter_tgt_5.parent = this;
        this.lighter_tgt_5.setTransform(121.15, 333.45, 1, 1, 89.9781);
        this.lighter_tgt_5.alpha = 0;
        this.lighter_tgt_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_5).wait(32).to({
            _off: !1
        }, 0).to({
            alpha: .8008
        }, 4, a.Ease.get(1)).wait(113));
        this.lighter_tgt_6 = new b.ef_\u767d\u653e\u5c04;
        this.lighter_tgt_6.name = "lighter_tgt_6";
        this.lighter_tgt_6.parent =
            this;
        this.lighter_tgt_6.setTransform(120, 160, 4.1692, .6554);
        this.lighter_tgt_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_6).wait(28).to({
            _off: !1
        }, 0).to({
            scaleX: .9294,
            scaleY: .1722
        }, 2).wait(1).to({
            scaleX: .7781,
            scaleY: .1638
        }, 0).wait(1).to({
            scaleX: .3474,
            scaleY: .1398
        }, 0).wait(1).to({
            scaleX: .2,
            scaleY: .1316
        }, 0).to({
            _off: !0
        }, 1).wait(115));
        this.instance_10 = new b.logo_result_white_1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(240, 219, 1, 1, 0, 0, 0, 120, 57);
        this.instance_10.alpha =
            .0117;
        this.timeline.addTween(a.Tween.get(this.instance_10).to({
            alpha: .8984
        }, 3, a.Ease.get(-1)).to({
            alpha: .5
        }, 6, a.Ease.get(-1)).to({
            alpha: .1992
        }, 2).wait(1).to({
            alpha: .1016
        }, 0).wait(8).to({
            alpha: .3984
        }, 0).to({
            alpha: .6992
        }, 3, a.Ease.get(1)).to({
            regY: 57.1,
            scaleX: .773,
            scaleY: .773,
            x: 212.75,
            y: 203.9,
            alpha: .0117
        }, 7, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(118));
        this.trf = new b.logo_result_1;
        this.trf.name = "trf";
        this.trf.parent = this;
        this.trf.setTransform(120, 162);
        this.trf.alpha = .1016;
        this.timeline.addTween(a.Tween.get(this.trf).to({
                alpha: 1
            },
            3).wait(20).to({
            scaleX: .773,
            scaleY: .773,
            y: 159.75,
            alpha: .0117
        }, 7, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(118));
        this.instance_11 = new b.chara_5;
        this.instance_11.parent = this;
        this.instance_11.setTransform(120.8, 315.4, .4, .4, 0, 0, 0, 2, 320);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(41).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 9,
            regY: 185,
            scaleX: .5372,
            scaleY: .5372,
            x: 132.45,
            y: 254.25
        }, 0).wait(1).to({
            scaleX: .6407,
            scaleY: .6407,
            x: 139.05,
            y: 248.85
        }, 0).wait(1).to({
            scaleX: .7229,
            scaleY: .7229,
            x: 144.35,
            y: 244.55
        }, 0).wait(1).to({
            scaleX: .7902,
            scaleY: .7902,
            x: 148.7,
            y: 241.05
        }, 0).wait(1).to({
            scaleX: .8467,
            scaleY: .8467,
            x: 152.35,
            y: 238.1
        }, 0).wait(1).to({
            scaleX: .895,
            scaleY: .895,
            x: 155.45,
            y: 235.6
        }, 0).wait(1).to({
            scaleX: .937,
            scaleY: .937,
            x: 158.2,
            y: 233.4
        }, 0).wait(1).to({
            scaleX: .9741,
            scaleY: .9741,
            x: 160.55,
            y: 231.45
        }, 0).wait(1).to({
            scaleX: 1.0075,
            scaleY: 1.0075,
            x: 162.7,
            y: 229.75
        }, 0).wait(1).to({
            scaleX: 1.038,
            scaleY: 1.038,
            x: 164.7,
            y: 228.15
        }, 0).wait(1).to({
            scaleX: 1.0667,
            scaleY: 1.0667,
            x: 166.5,
            y: 226.65
        }, 0).wait(1).to({
            scaleX: 1.0942,
            scaleY: 1.0942,
            x: 168.3,
            y: 225.2
        }, 0).wait(1).to({
            scaleX: 1.1213,
            scaleY: 1.1213,
            x: 170.05,
            y: 223.8
        }, 0).wait(1).to({
            scaleX: 1.1488,
            scaleY: 1.1488,
            x: 171.8,
            y: 222.35
        }, 0).wait(1).to({
            scaleX: 1.1775,
            scaleY: 1.1775,
            x: 173.65,
            y: 220.85
        }, 0).wait(1).to({
            scaleX: 1.2083,
            scaleY: 1.2083,
            x: 175.6,
            y: 219.3
        }, 0).wait(1).to({
            scaleX: 1.2424,
            scaleY: 1.2424,
            x: 177.85,
            y: 217.5
        }, 0).wait(1).to({
            scaleX: 1.2812,
            scaleY: 1.2812,
            x: 180.35,
            y: 215.45
        }, 0).wait(1).to({
            scaleX: 1.3268,
            scaleY: 1.3268,
            x: 183.25,
            y: 213.1
        }, 0).wait(1).to({
            scaleX: 1.382,
            scaleY: 1.382,
            x: 186.85,
            y: 210.2
        }, 0).wait(1).to({
            scaleX: 1.4517,
            scaleY: 1.4517,
            x: 191.3,
            y: 206.6
        }, 0).wait(1).to({
            scaleX: 1.5449,
            scaleY: 1.5449,
            x: 197.3,
            y: 201.75
        }, 0).wait(1).to({
            scaleX: 1.684,
            scaleY: 1.684,
            x: 206.25,
            y: 194.5
        }, 0).wait(1).to({
            regX: 2,
            regY: 320,
            scaleX: 2,
            scaleY: 2,
            x: 212.65,
            y: 448
        }, 0).to({
            _off: !0
        }, 1).wait(83));
        this.instance_12 = new b.chara_4;
        this.instance_12.parent = this;
        this.instance_12.setTransform(115.25, 315.55, .4, .4, 0, 0, 0, 4, 321.9);
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(58).to({
                _off: !1
            },
            0).wait(1).to({
            regX: 13.5,
            regY: 209.2,
            scaleX: .5325,
            scaleY: .5325,
            x: 108.6,
            y: 265.05
        }, 0).wait(1).to({
            scaleX: .6333,
            scaleY: .6333,
            x: 100.65,
            y: 260.9
        }, 0).wait(1).to({
            scaleX: .7139,
            scaleY: .7139,
            x: 94.3,
            y: 257.6
        }, 0).wait(1).to({
            scaleX: .7803,
            scaleY: .7803,
            x: 89.1,
            y: 254.9
        }, 0).wait(1).to({
            scaleX: .8362,
            scaleY: .8362,
            x: 84.7,
            y: 252.6
        }, 0).wait(1).to({
            scaleX: .8841,
            scaleY: .8841,
            x: 80.9,
            y: 250.65
        }, 0).wait(1).to({
            scaleX: .9258,
            scaleY: .9258,
            x: 77.6,
            y: 248.95
        }, 0).wait(1).to({
            scaleX: .9627,
            scaleY: .9627,
            x: 74.7,
            y: 247.45
        }, 0).wait(1).to({
            scaleX: .9958,
            scaleY: .9958,
            x: 72.1,
            y: 246.05
        }, 0).wait(1).to({
            scaleX: 1.0261,
            scaleY: 1.0261,
            x: 69.7,
            y: 244.85
        }, 0).wait(1).to({
            scaleX: 1.0543,
            scaleY: 1.0543,
            x: 67.5,
            y: 243.7
        }, 0).wait(1).to({
            scaleX: 1.0811,
            scaleY: 1.0811,
            x: 65.4,
            y: 242.6
        }, 0).wait(1).to({
            scaleX: 1.1072,
            scaleY: 1.1072,
            x: 63.35,
            y: 241.55
        }, 0).wait(1).to({
            scaleX: 1.1333,
            scaleY: 1.1333,
            x: 61.3,
            y: 240.5
        }, 0).wait(1).to({
            scaleX: 1.1601,
            scaleY: 1.1601,
            x: 59.15,
            y: 239.45
        }, 0).wait(1).to({
            scaleX: 1.1883,
            scaleY: 1.1883,
            x: 56.95,
            y: 238.3
        }, 0).wait(1).to({
                scaleX: 1.2188,
                scaleY: 1.2188,
                x: 54.55,
                y: 237
            },
            0).wait(1).to({
            scaleX: 1.2527,
            scaleY: 1.2527,
            x: 51.85,
            y: 235.6
        }, 0).wait(1).to({
            scaleX: 1.2915,
            scaleY: 1.2915,
            x: 48.85,
            y: 234.05
        }, 0).wait(1).to({
            scaleX: 1.3369,
            scaleY: 1.3369,
            x: 45.25,
            y: 232.2
        }, 0).wait(1).to({
            scaleX: 1.392,
            scaleY: 1.392,
            x: 40.9,
            y: 229.95
        }, 0).wait(1).to({
            scaleX: 1.4614,
            scaleY: 1.4614,
            x: 35.45,
            y: 227.1
        }, 0).wait(1).to({
            scaleX: 1.5538,
            scaleY: 1.5538,
            x: 28.2,
            y: 223.3
        }, 0).wait(1).to({
            scaleX: 1.6913,
            scaleY: 1.6913,
            x: 17.4,
            y: 217.7
        }, 0).wait(1).to({
            regX: 4,
            regY: 321.9,
            scaleX: 2,
            scaleY: 2,
            x: -25.95,
            y: 430.45
        }, 0).to({
                _off: !0
            },
            1).wait(65));
        this.instance_13 = new b.chara_3_mc;
        this.instance_13.parent = this;
        this.instance_13.setTransform(120, 254.6, .4, .4, 0, 0, 0, 0, 393);
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(73).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 10.5,
            regY: 404.1,
            scaleX: .5537,
            scaleY: .5537,
            x: 137.3,
            y: 253.2
        }, 0).wait(1).to({
            scaleX: .666,
            scaleY: .666,
            x: 146.9,
            y: 248.95
        }, 0).wait(1).to({
            scaleX: .7533,
            scaleY: .7533,
            x: 154.35,
            y: 245.65
        }, 0).wait(1).to({
            scaleX: .8237,
            scaleY: .8237,
            x: 160.4,
            y: 243
        }, 0).wait(1).to({
            scaleX: .882,
            scaleY: .882,
            x: 165.35,
            y: 240.8
        }, 0).wait(1).to({
            scaleX: .9313,
            scaleY: .9313,
            x: 169.65,
            y: 238.9
        }, 0).wait(1).to({
            scaleX: .9741,
            scaleY: .9741,
            x: 173.3,
            y: 237.3
        }, 0).wait(1).to({
            scaleX: 1.012,
            scaleY: 1.012,
            x: 176.5,
            y: 235.9
        }, 0).wait(1).to({
            scaleX: 1.0464,
            scaleY: 1.0464,
            x: 179.45,
            y: 234.55
        }, 0).wait(1).to({
            scaleX: 1.0786,
            scaleY: 1.0786,
            x: 182.2,
            y: 233.35
        }, 0).wait(1).to({
            scaleX: 1.1097,
            scaleY: 1.1097,
            x: 184.85,
            y: 232.2
        }, 0).wait(1).to({
            scaleX: 1.1409,
            scaleY: 1.1409,
            x: 187.55,
            y: 230.95
        }, 0).wait(1).to({
            scaleX: 1.1733,
            scaleY: 1.1733,
            x: 190.25,
            y: 229.75
        }, 0).wait(1).to({
            scaleX: 1.2083,
            scaleY: 1.2083,
            x: 193.3,
            y: 228.4
        }, 0).wait(1).to({
            scaleX: 1.2476,
            scaleY: 1.2476,
            x: 196.65,
            y: 226.95
        }, 0).wait(1).to({
            scaleX: 1.2935,
            scaleY: 1.2935,
            x: 200.6,
            y: 225.2
        }, 0).wait(1).to({
            scaleX: 1.349,
            scaleY: 1.349,
            x: 205.3,
            y: 223.1
        }, 0).wait(1).to({
            scaleX: 1.4196,
            scaleY: 1.4196,
            x: 211.35,
            y: 220.4
        }, 0).wait(1).to({
            scaleX: 1.515,
            scaleY: 1.515,
            x: 219.5,
            y: 216.8
        }, 0).wait(1).to({
            scaleX: 1.6595,
            scaleY: 1.6595,
            x: 231.85,
            y: 211.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 393,
            scaleX: 2,
            scaleY: 2,
            x: 240,
            y: 176.2
        }, 0).to({
                _off: !0
            },
            1).wait(54));
        this.instance_14 = new b.chara_2_mc;
        this.instance_14.parent = this;
        this.instance_14.setTransform(121.55, 247.15, .4, .4, 0, 0, 0, 0, 162);
        this.instance_14._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(84).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -6,
            regY: 192.2,
            scaleX: .6136,
            scaleY: .6136,
            x: 101.75,
            y: 250.7
        }, 0).wait(1).to({
            scaleX: .7447,
            scaleY: .7447,
            x: 91.1,
            y: 245.45
        }, 0).wait(1).to({
            scaleX: .8386,
            scaleY: .8386,
            x: 83.4,
            y: 241.7
        }, 0).wait(1).to({
            scaleX: .9104,
            scaleY: .9104,
            x: 77.6,
            y: 238.8
        }, 0).wait(1).to({
            scaleX: .9677,
            scaleY: .9677,
            x: 72.95,
            y: 236.55
        }, 0).wait(1).to({
            scaleX: 1.015,
            scaleY: 1.015,
            x: 69.05,
            y: 234.65
        }, 0).wait(1).to({
            scaleX: 1.0551,
            scaleY: 1.0551,
            x: 65.8,
            y: 233.05
        }, 0).wait(1).to({
            scaleX: 1.0902,
            scaleY: 1.0902,
            x: 62.95,
            y: 231.65
        }, 0).wait(1).to({
            scaleX: 1.122,
            scaleY: 1.122,
            x: 60.35,
            y: 230.4
        }, 0).wait(1).to({
            scaleX: 1.152,
            scaleY: 1.152,
            x: 57.95,
            y: 229.15
        }, 0).wait(1).to({
            scaleX: 1.1816,
            scaleY: 1.1816,
            x: 55.5,
            y: 228
        }, 0).wait(1).to({
            scaleX: 1.2122,
            scaleY: 1.2122,
            x: 53.05,
            y: 226.85
        }, 0).wait(1).to({
                scaleX: 1.2454,
                scaleY: 1.2454,
                x: 50.35,
                y: 225.5
            },
            0).wait(1).to({
            scaleX: 1.2835,
            scaleY: 1.2835,
            x: 47.25,
            y: 224
        }, 0).wait(1).to({
            scaleX: 1.3293,
            scaleY: 1.3293,
            x: 43.5,
            y: 222.15
        }, 0).wait(1).to({
            scaleX: 1.3875,
            scaleY: 1.3875,
            x: 38.8,
            y: 219.85
        }, 0).wait(1).to({
            scaleX: 1.4671,
            scaleY: 1.4671,
            x: 32.3,
            y: 216.65
        }, 0).wait(1).to({
            scaleX: 1.591,
            scaleY: 1.591,
            x: 22.2,
            y: 211.7
        }, 0).wait(1).to({
            regX: 0,
            regY: 162,
            scaleX: 2,
            scaleY: 2,
            x: .95,
            y: 134.95
        }, 0).to({
            _off: !0
        }, 1).wait(45));
        this.instance_15 = new b.chara_1_mc("synched", 0, !1);
        this.instance_15.parent = this;
        this.instance_15.setTransform(120,
            176, .4, .4, 0, 0, 0, 0, 78.7);
        this.instance_15._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(99).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 6,
            regY: 237.8,
            scaleX: .5179,
            scaleY: .5179,
            x: 123.05,
            y: 238.35,
            startPosition: 1
        }, 0).wait(1).to({
            scaleX: .5949,
            scaleY: .5949,
            x: 123.5,
            y: 237.55,
            startPosition: 2
        }, 0).wait(1).to({
            scaleX: .6486,
            scaleY: .6486,
            x: 123.85,
            y: 237,
            startPosition: 3
        }, 0).wait(1).to({
            scaleX: .6876,
            scaleY: .6876,
            x: 124.1,
            y: 236.6,
            startPosition: 4
        }, 0).wait(1).to({
                scaleX: .7169,
                scaleY: .7169,
                x: 124.25,
                y: 236.3,
                startPosition: 5
            },
            0).wait(1).to({
            scaleX: .7398,
            scaleY: .7398,
            x: 124.4,
            y: 236.05,
            startPosition: 6
        }, 0).wait(1).to({
            scaleX: .7587,
            scaleY: .7587,
            x: 124.5,
            y: 235.85,
            startPosition: 7
        }, 0).wait(1).to({
            scaleX: .7753,
            scaleY: .7753,
            x: 124.55,
            y: 235.65,
            startPosition: 8
        }, 0).wait(1).to({
            scaleX: .7912,
            scaleY: .7912,
            x: 124.65,
            y: 235.5,
            startPosition: 9
        }, 0).wait(1).to({
            scaleX: .8078,
            scaleY: .8078,
            x: 124.75,
            y: 235.35,
            startPosition: 10
        }, 0).wait(1).to({
            scaleX: .8262,
            scaleY: .8262,
            x: 124.85,
            y: 235.1,
            startPosition: 11
        }, 0).wait(1).to({
            scaleX: .8478,
            scaleY: .8478,
            x: 125,
            y: 234.9,
            startPosition: 12
        }, 0).wait(1).to({
            scaleX: .8737,
            scaleY: .8737,
            x: 125.15,
            y: 234.65,
            startPosition: 13
        }, 0).wait(1).to({
            scaleX: .9054,
            scaleY: .9054,
            x: 125.35,
            y: 234.3,
            startPosition: 14
        }, 0).wait(1).to({
            scaleX: .9446,
            scaleY: .9446,
            x: 125.55,
            y: 233.9,
            startPosition: 15
        }, 0).wait(1).to({
            scaleX: .993,
            scaleY: .993,
            x: 125.85,
            y: 233.45,
            startPosition: 16
        }, 0).wait(1).to({
            scaleX: 1.0533,
            scaleY: 1.0533,
            x: 126.2,
            y: 232.8,
            startPosition: 17
        }, 0).wait(1).to({
            scaleX: 1.1285,
            scaleY: 1.1285,
            x: 126.65,
            y: 232,
            startPosition: 18
        }, 0).wait(1).to({
            scaleX: 1.2231,
            scaleY: 1.2231,
            x: 127.2,
            y: 231.05,
            startPosition: 19
        }, 0).wait(1).to({
            scaleX: 1.3434,
            scaleY: 1.3434,
            x: 127.9,
            y: 229.75,
            startPosition: 20
        }, 0).wait(1).to({
            regX: 0,
            regY: 78.6,
            scaleX: 1.5,
            scaleY: 1.5,
            x: 119.85,
            y: -10.6,
            startPosition: 23
        }, 0).to({
            _off: !0
        }, 1).wait(28));
        this.lighter_tgt_7 = new b.light;
        this.lighter_tgt_7.name = "lighter_tgt_7";
        this.lighter_tgt_7.parent = this;
        this.lighter_tgt_7.setTransform(120, 141, .8, .79);
        this.lighter_tgt_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_7).wait(31).to({
            _off: !1
        }, 0).to({
            scaleX: .95,
            scaleY: 1,
            y: 140
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(113));
        this.instance_16 = new b.bg2("synched", 0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(120, 167.1, 1.07, 1.07, 0, 0, 0, 120, 167.1);
        this.instance_16._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_16).wait(31).to({
            _off: !1
        }, 0).to({
            startPosition: 0
        }, 4, a.Ease.quadOut).wait(1).to({
            startPosition: 0
        }, 0).to({
            scaleX: 4,
            scaleY: 4,
            x: 121.15,
            y: -94.75
        }, 84, a.Ease.quadIn).to({
            _off: !0
        }, 1).wait(28));
        this.instance_17 = new b.black;
        this.instance_17.parent =
            this;
        this.instance_17.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_17.alpha = .6992;
        this.instance_17._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_17).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 35).wait(113));
        this.instance_18 = new b._bg;
        this.instance_18.parent = this;
        this.instance_18.setTransform(120.05, 159.15, 1.07, 1.07, 0, 0, 0, 120, 160);
        this.instance_18._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_18).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 35).wait(113));
        this.btn = new b.black;
        this.btn.name =
            "btn";
        this.btn.parent = this;
        this.btn.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(149))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-238.8, -603.1, 840, 1191.8000000000002);
    b.properties = {
        id: "vote_group_shot_5",
        width: 240,
        height: 320,
        fps: 18,
        color: "#000000",
        opacity: 1,
        manifest: [{
                src: "images/bg_off.jpg",
                id: "vote_group_shot_5_bg_off"
            }, {
                src: "images/bg_on.jpg",
                id: "vote_group_shot_5_bg_on"
            }, {
                src: "images/cd_debut.png",
                id: "vote_group_shot_5_cd_debut"
            },
            {
                src: "images/cd_debut_white.png",
                id: "vote_group_shot_5_cd_debut_white"
            }, {
                src: "images/ch1.png",
                id: "vote_group_shot_5_ch1"
            }, {
                src: "images/ch1_w.png",
                id: "vote_group_shot_5_ch1_w"
            }, {
                src: "images/ch2.png",
                id: "vote_group_shot_5_ch2"
            }, {
                src: "images/ch2_w.png",
                id: "vote_group_shot_5_ch2_w"
            }, {
                src: "images/ch3.png",
                id: "vote_group_shot_5_ch3"
            }, {
                src: "images/ch3_w.png",
                id: "vote_group_shot_5_ch3_w"
            }, {
                src: "images/ch4.png",
                id: "vote_group_shot_5_ch4"
            }, {
                src: "images/ch4_w.png",
                id: "vote_group_shot_5_ch4_w"
            }, {
                src: "images/ch5.png",
                id: "vote_group_shot_5_ch5"
            }, {
                src: "images/ch5_w.png",
                id: "vote_group_shot_5_ch5_w"
            }, {
                src: "images/ch_all.jpg",
                id: "vote_group_shot_5_ch_all"
            }, {
                src: "images/ch_all_blur.jpg",
                id: "vote_group_shot_5_ch_all_blur"
            }, {
                src: "images/fp_kira.png",
                id: "vote_group_shot_5_fp_kira"
            }, {
                src: "images/logo_result.png",
                id: "vote_group_shot_5_logo_result"
            }, {
                src: "images/logo_result_white.png",
                id: "vote_group_shot_5_logo_result_white"
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
    f.getDuration = function() {
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
    k.compositions.vote_group_shot_5 = {
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
    k.makeResponsive = function(c, d, e, q, p) {
        function r() {
            var u = b.properties.width,
                v = b.properties.height,
                w = window.innerWidth,
                x = window.innerHeight,
                y = window.devicePixelRatio || 1,
                z = w / u,
                A = x / v,
                l = 1;
            if (c)
                if ("width" == d && t == w || "height" == d && m == x) l = n;
                else if (e) 1 == q ? l = Math.min(z, A) : 2 == q && (l = Math.max(z, A));
            else if (w < u || x < v) l = Math.min(z, A);
            p[0].width = u * y * l;
            p[0].height = v * y * l;
            p.forEach(function(B) {
                B.style.width = u * l + "px";
                B.style.height = v * l + "px"
            });
            stage.scaleX = y * l;
            stage.scaleY =
                y * l;
            t = w;
            m = x;
            n = l;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var t, m, n = 1;
        window.addEventListener("resize", r);
        r()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
