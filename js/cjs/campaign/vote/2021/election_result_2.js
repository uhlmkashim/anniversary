(function(a, l) {
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
        m = {};
    b.ssMetadata = [];
    (b._005_shuttle_cu = function() {
        this.initialize(m.election_result_2__005_shuttle_cu)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 392, 392);
    (b._005_textflame =
        function() {
            this.initialize(m.election_result_2__005_textflame)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 432, 206);
    (b.bg = function() {
        this.initialize(m.election_result_2_bg)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.bottom = function() {
        this.initialize(m.election_result_2_bottom)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 182);
    (b.fp_flower3 = function() {
        this.initialize(m.election_result_2_fp_flower3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 24, 22);
    (b.result_ch2 = function() {
        this.initialize(m.election_result_2_result_ch2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 630, 620);
    (b.result_ch2_black = function() {
        this.initialize(m.election_result_2_result_ch2_black)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 630, 620);
    (b.result_ch2_white = function() {
        this.initialize(m.election_result_2_result_ch2_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 630, 620);
    (b.result_name2 = function() {
        this.initialize(m.election_result_2_result_name2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 102);
    (b.result_no2 = function() {
        this.initialize(m.election_result_2_result_no2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 286, 146);
    (b.result_no2_white = function() {
        this.initialize(m.election_result_2_result_no2_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 286, 146);
    (b.result_sign2 = function() {
        this.initialize(m.election_result_2_result_sign2)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 169, 218);
    (b.result_votes2 = function() {
        this.initialize(m.election_result_2_result_votes2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 422, 74);
    (b.sp_kirakira = function() {
        this.initialize(m.election_result_2_sp_kirakira)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 40, 40);
    (b.bg_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(119.95, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.bg_white, new a.Rectangle(0, 0, 240, 320), null);
    (b.bg_black = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.bg_black, new a.Rectangle(0, 0, 240, 320), null);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp = function(c,
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
        g(b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
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
    (b.tracer_grip = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#5FFFBC").s().p("AgxAyIAAhjIBjAAIAABjg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.tracer_grip, new a.Rectangle(-5, -5, 10, 10), null);
    (b.sign = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b.result_sign2;
        this.instance.parent = this;
        this.instance.setTransform(-62, -100);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.sign, new a.Rectangle(-62, -100, 169, 218), null);
    (b.shape38 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AufO/IAA99Ic+AAIAAd9g");
        this.shape.setTransform(10.05, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds =
        new a.Rectangle(-82.7, -95.8, 185.5, 191.7);
    (b.rank_all_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.result_no2_white;
        this.instance.parent = this;
        this.instance.setTransform(-72, -73, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.rank_all_white, new a.Rectangle(-72, -73, 143, 73), null);
    (b.particle_trace_core = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        g(b.particle_trace_core, new a.Rectangle(-1.2, -1.2, 2.4, 2.4), null);
    (b.kira_line = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.kira_line, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.grip = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF0000").s().p("AkkAAIEkkkIElEkIklElg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.grip, new a.Rectangle(-29.3, -29.3, 58.7, 58.7), null);
    (b.gr_votes = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.result_votes2;
        this.instance.parent = this;
        this.instance.setTransform(-106, -19, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_votes, new a.Rectangle(-106, -19, 211, 37), null);
    (b.gr_shuttle =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.frame_1 = function() {
                switch (exportRoot.attribute) {
                    case 1:
                    case 2:
                    case 3:
                        this.gotoAndStop(exportRoot.attribute);
                        break;
                    default:
                        this.stop()
                }
            };
            this.timeline.addTween(a.Tween.get(this).wait(1).call(this.frame_1).wait(3));
            this.instance = new b._005_shuttle_cu;
            this.instance.parent = this;
            this.instance.setTransform(-98, -98, .5, .5);
            this.timeline.addTween(a.Tween.get(this.instance).wait(4))
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-98, -98, 196, 196);
    (b.gr_number = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.result_name2;
        this.instance.parent = this;
        this.instance.setTransform(-240, -102);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_number, new a.Rectangle(-240, -102, 480, 102), null);
    (b.gr_base = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bottom;
        this.instance.parent = this;
        this.instance.setTransform(-120, -91, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_base,
        new a.Rectangle(-120, -91, 240, 91), null);
    (b.flower_check = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AhIBJIAAiRICRAAIAACRg");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.flower_check, new a.Rectangle(-7.3, -7.3, 14.6, 14.6), null);
    (b.ef_glow_yellow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,253,143,0.957)", "rgba(255,255,255,0)", "rgba(255,255,255,0)"], [.282, .455, 1, 1], 0, 0, 0, 0, 0, 130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.ef_glow_yellow, new a.Rectangle(-129.2, -129.2, 258.4, 258.4), null);
    (b.ef_glow_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF",
            "#FFFFFF", "rgba(255,255,255,0)", "rgba(255,255,255,0)"
        ], [.298, .522, 1, 1], 0, 0, 0, 0, 0, 130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.ef_glow_white, new a.Rectangle(-129.2, -129.2, 258.4, 258.4), null);
    (b.ef_flash = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["rgba(255,255,255,0.922)", "rgba(255,239,128,0.569)", "rgba(255,239,128,0)"], [0, .494, 1], 166,
            -.4, -165.9, -.4).s().p("A57HNIAAuZMAz3AAAIAAOZg");
        this.shape.setTransform(-166.025, -20.15);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.ef_flash, new a.Rectangle(-332, -66.2, 332, 92.1), null);
    (b.cursor_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AhUgpICpAAIhVBUg");
        this.shape.setTransform(-.025, -4.25);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.cursor_white, new a.Rectangle(-8.5, -8.5,
        17, 8.5), null);
    (b.cursor_black = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AmplwINTAAImqLhg");
        this.shape.setTransform(-8.15, -15.425);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#999999").s().p("Al7lIIL3AAIl8KRg");
        this.shape_1.setTransform(-.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = g(b.cursor_black, new a.Rectangle(-50.7, -52.3, 88.7, 85.19999999999999),
        null);
    (b.bg_gra = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.bg_gra, new a.Rectangle(0, 0, 240, 320), null);
    (b._kirakira = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_kirakira;
        this.instance.parent = this;
        this.instance.setTransform(-8, -8, .4, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._kirakira, new a.Rectangle(-8,
        -8, 16, 16), null);
    (b._flower1_1_copy = function(c, d, e) {
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
    }).prototype = g(b._flower1_1_copy, new a.Rectangle(-11.5, -9.9, 21.9, 19.9), null);
    (b._flower1_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.fp_flower3;
        this.instance.parent = this;
        this.instance.setTransform(-12, -11);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._flower1_1, new a.Rectangle(-12, -11, 24, 22), null);
    (b._btn = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b._btn, new a.Rectangle(0, 0, 240, 320), null);
    (b._bg1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg;
        this.instance.parent = this;
        this.instance.setTransform(-120, -160);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._bg1, new a.Rectangle(-120, -160, 480, 640), null);
    (b.___rank = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.result_no2;
        this.instance.parent = this;
        this.instance.setTransform(-72, -37, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.___rank, new a.Rectangle(-72,
        -37, 143, 73), null);
    (b.___character_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.result_ch2_white;
        this.instance.parent = this;
        this.instance.setTransform(-353, -620);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.___character_white, new a.Rectangle(-353, -620, 630, 620), null);
    (b.___character_black = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.result_ch2_black;
        this.instance.parent = this;
        this.instance.setTransform(-353, -620);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.___character_black, new a.Rectangle(-353, -620, 630, 620), null);
    (b.___character = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.result_ch2;
        this.instance.parent = this;
        this.instance.setTransform(-353, -620);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.___character, new a.Rectangle(-353, -620, 630, 620), null);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp;
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
            this.gotoAndPlay((3 * Math.random() | 0) + 1)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp;
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
            y: -154.4,
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
    (b.tracer = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.parent.c = 10
        };
        this.frame_1 = function() {
            for (var q = this.parent, p = 0; 3 > p; p++) {
                var n = new b.particle_trace;
                q.addChild(n);
                n.x = this.x + (40 * Math.random() | 0) - 20;
                n.y = this.y + (30 * Math.random() | 0) - 15;
                n.scaleX = n.scaleY = (100 * Math.random() | 0) / 100;
                q.c++
            }
        };
        this.frame_2 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.instance = new b.tracer_grip;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5, -5, 10, 10);
    (b.sprite39 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.shape38("synched", 0);
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.sprite39, new a.Rectangle(-82.7, -95.8, 185.5, 191.7), null);
    (b.particle_trace_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_19 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(19).call(this.frame_19).wait(1));
        this.instance = new b.particle_trace_core;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1.25, 1.25);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: 1.0461,
            scaleY: 1.0461
        }, 0).wait(1).to({
            scaleX: .9106,
            scaleY: .9106
        }, 0).wait(1).to({
            scaleX: .8063,
            scaleY: .8063
        }, 0).wait(1).to({
            scaleX: .7216,
            scaleY: .7216
        }, 0).wait(1).to({
            scaleX: .6507,
            scaleY: .6507
        }, 0).wait(1).to({
            scaleX: .5907,
            scaleY: .5907
        }, 0).wait(1).to({
            scaleX: .5394,
            scaleY: .5394
        }, 0).wait(1).to({
            scaleX: .4958,
            scaleY: .4958
        }, 0).wait(1).to({
            scaleX: .4587,
            scaleY: .4587
        }, 0).wait(1).to({
            scaleX: .4275,
            scaleY: .4275
        }, 0).wait(1).to({
            scaleX: .4018,
            scaleY: .4018
        }, 0).wait(1).to({
            scaleX: .3812,
            scaleY: .3812
        }, 0).wait(1).to({
            scaleX: .3655,
            scaleY: .3655
        }, 0).wait(1).to({
            scaleX: .3543,
            scaleY: .3543
        }, 0).wait(1).to({
            scaleX: .3477,
            scaleY: .3477
        }, 0).wait(1).to({
            scaleX: .3455,
            scaleY: .3455
        }, 0).to({
            _off: !0
        }, 1).wait(3))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-1.5, -1.5, 3, 3);
    (b.particle_trace = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(21).call(this.frame_21).wait(1));
        this.instance = new b.particle_trace_inner("synched", 0, !1);
        this.instance.parent = this;
        this.instance.setTransform(.3, -1.1);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            x: 3.9211,
            y: -14.5203,
            startPosition: 1
        }, 0).wait(1).to({
            x: 3.2129,
            y: -23.5615,
            startPosition: 2
        }, 0).wait(1).to({
            x: 1.3397,
            y: -30.4855,
            startPosition: 3
        }, 0).wait(1).to({
            x: -.5516,
            y: -35.6579,
            startPosition: 4
        }, 0).wait(1).to({
            x: -1.6987,
            y: -39.9101,
            startPosition: 5
        }, 0).wait(1).to({
            x: -2.3318,
            y: -43.695,
            startPosition: 6
        }, 0).wait(1).to({
            x: -2.5918,
            y: -47.1179,
            startPosition: 7
        }, 0).wait(1).to({
            x: -2.5741,
            y: -50.1833,
            startPosition: 8
        }, 0).wait(1).to({
            x: -2.3612,
            y: -52.9041,
            startPosition: 9
        }, 0).wait(1).to({
                x: -2.0208,
                y: -55.2998,
                startPosition: 10
            },
            0).wait(1).to({
            x: -1.6342,
            y: -57.3618,
            startPosition: 11
        }, 0).wait(1).to({
            x: -1.28,
            y: -58.911,
            startPosition: 12
        }, 0).wait(1).to({
            x: -.9104,
            y: -60.2762,
            startPosition: 13
        }, 0).wait(1).to({
            x: -.5325,
            y: -61.4736,
            startPosition: 14
        }, 0).wait(1).to({
            x: -.159,
            y: -62.5032,
            startPosition: 15
        }, 0).wait(1).to({
            x: .1948,
            y: -63.3645,
            startPosition: 16
        }, 0).wait(1).to({
            x: .5104,
            y: -64.054,
            startPosition: 17
        }, 0).wait(1).to({
            x: .7659,
            y: -64.565,
            startPosition: 18
        }, 0).wait(1).to({
            x: .9374,
            y: -64.8866,
            startPosition: 19
        }, 0).wait(1).to({
            x: 1,
            y: -65
        }, 0).to({
                _off: !0
            },
            1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-3.2, -63.7, 8.4, 64.10000000000001);
    (b.mc_votes = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_18 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(18).call(this.frame_18).wait(2));
        this.pa = new b.particle_trace;
        this.pa.name = "pa";
        this.pa.parent = this;
        this.pa.setTransform(-121.15, 4.1);
        this.timeline.addTween(a.Tween.get(this.pa).wait(20));
        this.pb = new b.tracer;
        this.pb.name = "pb";
        this.pb.parent = this;
        this.pb.setTransform(-121,
            -.1);
        this.timeline.addTween(a.Tween.get(this.pb).wait(2).to({
            x: -82.6496,
            y: -.2432
        }, 0).wait(1).to({
            x: -47.8279,
            y: -.3732
        }, 0).wait(1).to({
            x: -16.3944,
            y: -.4906
        }, 0).wait(1).to({
            x: 11.7473,
            y: -.5956
        }, 0).wait(1).to({
            x: 36.6577,
            y: -.6886
        }, 0).wait(1).to({
            x: 58.3675,
            y: -.7697
        }, 0).wait(1).to({
            x: 76.8809,
            y: -.8388
        }, 0).wait(1).to({
            x: 92.1785,
            y: -.8959
        }, 0).wait(1).to({
            x: 104.2187,
            y: -.9409
        }, 0).wait(1).to({
            x: 112.938,
            y: -.9734
        }, 0).wait(1).to({
            x: 118.251,
            y: -.9933
        }, 0).wait(1).to({
            x: 120.05,
            y: -1
        }, 0).to({
            _off: !0
        }, 1).wait(6));
        this.instance =
            new b.ef_flash;
        this.instance.parent = this;
        this.instance.setTransform(-122, 10, .1143, .5);
        this.instance.alpha = .8594;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            x: -112
        }, 1, a.Ease.get(1)).wait(1).to({
            regX: -166,
            regY: -20.2,
            scaleX: .1698,
            scaleY: .5238,
            x: -85.75,
            y: -.6,
            alpha: .6552
        }, 0).wait(1).to({
            scaleX: .2098,
            scaleY: .5409,
            x: -53.2,
            y: -.95,
            alpha: .5081
        }, 0).wait(1).to({
            scaleX: .2409,
            scaleY: .5542,
            x: -27.9,
            y: -1.2,
            alpha: .3936
        }, 0).wait(1).to({
            scaleX: .266,
            scaleY: .5649,
            x: -7.45,
            y: -1.4,
            alpha: .3012
        }, 0).wait(1).to({
            scaleX: .2866,
            scaleY: .5737,
            x: 9.3,
            y: -1.6,
            alpha: .2256
        }, 0).wait(1).to({
            scaleX: .3035,
            scaleY: .581,
            x: 23,
            y: -1.75,
            alpha: .1635
        }, 0).wait(1).to({
            scaleX: .3173,
            scaleY: .5869,
            x: 34.25,
            y: -1.85,
            alpha: .1129
        }, 0).wait(1).to({
            scaleX: .3283,
            scaleY: .5916,
            x: 43.2,
            y: -1.95,
            alpha: .0723
        }, 0).wait(1).to({
            scaleX: .3368,
            scaleY: .5952,
            x: 50.15,
            y: -2,
            alpha: .041
        }, 0).wait(1).to({
            scaleX: .3429,
            scaleY: .5978,
            x: 55.15,
            y: -2.1,
            alpha: .0185
        }, 0).wait(1).to({
            scaleX: .3467,
            scaleY: .5994,
            x: 58.15,
            alpha: .0047
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .3479,
            scaleY: .6,
            x: 117,
            y: 10,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(6));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("A8RZAMAAAgx/MAlfAAAMAAAAx/g");
        e = (new a.Graphics).p("A8HZAMAAAgx/MAlfAAAMAAAAx/g");
        var q = (new a.Graphics).p("A3qZAMAAAgx/MAlfAAAMAAAAx/g"),
            p = (new a.Graphics).p("A0dZAMAAAgx/MAlgAAAMAAAAx/g"),
            n = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            t = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            u = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            v = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            r = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            w = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            x = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            y = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            z = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g"),
            h = (new a.Graphics).p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: d,
            x: -181,
            y: -38
        }).wait(1).to({
            graphics: e,
            x: -180,
            y: -38
        }).wait(1).to({
            graphics: q,
            x: -151.4892,
            y: -38
        }).wait(1).to({
            graphics: p,
            x: -130.9499,
            y: -38
        }).wait(1).to({
            graphics: n,
            x: -109.9135,
            y: -38
        }).wait(1).to({
            graphics: t,
            x: -84.1288,
            y: -38
        }).wait(1).to({
            graphics: u,
            x: -63.0175,
            y: -38
        }).wait(1).to({
            graphics: v,
            x: -45.6715,
            y: -38
        }).wait(1).to({
            graphics: r,
            x: -31.5165,
            y: -38
        }).wait(1).to({
            graphics: w,
            x: -20.182,
            y: -38
        }).wait(1).to({
            graphics: x,
            x: -11.4367,
            y: -38
        }).wait(1).to({
            graphics: y,
            x: -5.1573,
            y: -38
        }).wait(1).to({
            graphics: z,
            x: -1.3185,
            y: -38
        }).wait(1).to({
            graphics: h,
            x: 0,
            y: -38
        }).wait(7));
        this.instance_1 = new b.gr_votes;
        this.instance_1.parent = this;
        d = [this.instance_1];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(20))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-159.9, -29.7, 285, 55.3);
    (b.mc_shuttle = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_74 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(74).call(this.frame_74).wait(1));
        this.shuttle = new b.gr_shuttle;
        this.shuttle.name = "shuttle";
        this.shuttle.parent = this;
        this.timeline.addTween(a.Tween.get(this.shuttle).to({
            rotation: 360
        }, 74).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-138.3, -138.3, 276.70000000000005,
        276.70000000000005);
    (b.kirakira_mov = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(this.currentFrame + (7 * Math.random() | 0) + 1)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(10));
        this.instance = new b.grip;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(17));
        this.instance_1 = new b.kira_line;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.05, 0, .1255, 1);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
                _off: !1
            },
            0).wait(1).to({
            scaleX: 1
        }, 0).to({
            scaleX: .5,
            alpha: .1289
        }, 4).to({
            _off: !0
        }, 1).wait(11));
        this.instance_2 = new b._kirakira;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_2.alpha = .4297;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            scaleX: 3.7607,
            scaleY: 3.7607,
            rotation: -11.2055,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: 4.8,
            scaleY: 4.8,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 4.722,
            scaleY: 4.722,
            rotation: 1.9399,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: 4.5026,
            scaleY: 4.5026,
            rotation: 7.4005,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: 4.1415,
            scaleY: 4.1415,
            rotation: 16.3817,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: 3.6391,
            scaleY: 3.6391,
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
    f.nominalBounds = new a.Rectangle(-148.2, -41, 296.29999999999995, 82.1);
    (b.kira_45 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_35 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(35).call(this.frame_35).wait(1));
        this.instance = new b.kirakira_mov;
        this.instance.parent = this;
        this.instance.setTransform(-59.45, 3.2, .281, .281);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(7).to({
            _off: !1
        }, 0).wait(29));
        this.instance_1 = new b.kirakira_mov;
        this.instance_1.parent = this;
        this.instance_1.setTransform(43.3, -.05, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(9).to({
            _off: !1
        }, 0).wait(27));
        this.instance_2 = new b.kirakira_mov;
        this.instance_2.parent = this;
        this.instance_2.setTransform(54.65,
            32.45, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(11).to({
            _off: !1
        }, 0).wait(25));
        this.instance_3 = new b.kirakira_mov;
        this.instance_3.parent = this;
        this.instance_3.setTransform(21.5, 12.6, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(19).to({
            _off: !1
        }, 0).wait(17));
        this.instance_4 = new b.kirakira_mov;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-4.1, -15.75, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(22).to({
                _off: !1
            },
            0).wait(14));
        this.instance_5 = new b.kirakira_mov;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-11.4, 36.95, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(33).to({
            _off: !1
        }, 0).wait(3));
        this.instance_6 = new b.kirakira_mov;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-50.85, 29.7, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(34).to({
            _off: !1
        }, 0).wait(2));
        this.instance_7 = new b.sprite39;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(-12, 15.5, 1.2729, .4534);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(36))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-117.2, -27.9, 236.10000000000002, 86.9);
    (b.flower_mov2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.frame_58 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));
        this.instance = new b._flower1_1_copy;
        this.instance.parent = this;
        this.instance.setTransform(-1,
            -.3, 1, 1, -53.9686);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -.6,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 39.7252,
            x: -1.35,
            y: 5.45
        }, 0).wait(1).to({
            scaleX: .9998,
            rotation: 51.913,
            x: -1.9,
            y: 17.3
        }, 0).wait(1).to({
            scaleY: .9998,
            rotation: 68.1774,
            x: -4.35,
            y: 31.9
        }, 0).wait(1).to({
            scaleX: .9997,
            scaleY: .9997,
            rotation: 87.8993,
            x: -9.9,
            y: 48.25
        }, 0).wait(1).to({
            scaleX: .9996,
            scaleY: .9995,
            rotation: 109.8504,
            x: -19.75,
            y: 65.1
        }, 0).wait(1).to({
            scaleX: .9994,
            scaleY: .9994,
            rotation: 131.6234,
            x: -33.95,
            y: 80.45
        }, 0).wait(1).to({
            scaleX: .9993,
            scaleY: .9993,
            rotation: 150.7176,
            x: -50.7,
            y: 92.75
        }, 0).wait(1).to({
            scaleY: .9992,
            rotation: 165.701,
            x: -66.55,
            y: 101.25
        }, 0).wait(1).to({
            regX: 0,
            scaleX: .9992,
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
            skewX: 45.0775,
            skewY: -134.9227,
            x: -73.05,
            y: 122.85
        }, 0).wait(1).to({
            skewX: 40.7786,
            skewY: -139.2215,
            x: -70.3,
            y: 132.15
        }, 0).wait(1).to({
            skewX: 35.1625,
            skewY: -144.8377,
            x: -66.1,
            y: 143.85
        }, 0).wait(1).to({
            skewX: 28.7159,
            skewY: -151.2842,
            x: -59.85,
            y: 157.1
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 21.7194,
            skewY: -158.2807,
            x: -51.2,
            y: 171.2
        }, 0).wait(1).to({
            skewX: 14.3621,
            skewY: -165.638,
            x: -39.6,
            y: 185.4
        }, 0).wait(1).to({
            skewX: 6.7903,
            skewY: -173.2097,
            x: -24.75,
            y: 198.65
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -.8645,
            skewY: -180.8646,
            x: -7.1,
            y: 210
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: -8.4642,
            skewY: -188.4642,
            x: 12.2,
            y: 218.65
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -15.8344,
            skewY: -195.8344,
            x: 31.65,
            y: 224.65
        }, 0).wait(1).to({
            skewX: -22.7064,
            skewY: -202.7064,
            x: 49.65,
            y: 228.35
        }, 0).wait(1).to({
            skewX: -28.5462,
            skewY: -208.5462,
            x: 64.7,
            y: 230.3
        }, 0).wait(1).to({
            regX: 0,
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
            rotation: 61.2863,
            x: 73.5,
            y: 243.35
        }, 0).wait(1).to({
            rotation: 66.2544,
            x: 70.7,
            y: 251.8
        }, 0).wait(1).to({
            rotation: 72.8937,
            x: 66.85,
            y: 262.3
        }, 0).wait(1).to({
                rotation: 80.9051,
                x: 61.75,
                y: 274.2
            },
            0).wait(1).to({
            rotation: 90.1522,
            x: 55.25,
            y: 287.05
        }, 0).wait(1).to({
            rotation: 100.5908,
            x: 47.1,
            y: 300.35
        }, 0).wait(1).to({
            rotation: 112.1971,
            x: 37.1,
            y: 313.75
        }, 0).wait(1).to({
            rotation: 124.8645,
            x: 24.95,
            y: 326.6
        }, 0).wait(1).to({
            rotation: 138.2593,
            x: 10.7,
            y: 338.3
        }, 0).wait(1).to({
            rotation: 151.7771,
            x: -5.3,
            y: 348.15
        }, 0).wait(1).to({
            rotation: 164.6088,
            x: -22.3,
            y: 355.7
        }, 0).wait(1).to({
            rotation: 175.9378,
            x: -38.95,
            y: 360.75
        }, 0).wait(1).to({
            rotation: 184.8983,
            x: -53.1,
            y: 363.65
        }, 0).wait(1).to({
                regX: 0,
                rotation: 15.9802,
                x: -61.15,
                y: 364.75
            },
            0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -493.0049,
            x: -70.3,
            y: 369.75
        }, 0).wait(1).to({
            regX: -.6,
            skewX: 134.3444,
            skewY: -405.6557,
            x: -70.95,
            y: 374.55
        }, 0).wait(1).to({
            skewX: 125.0094,
            skewY: -414.9907,
            x: -70.45,
            y: 384.1
        }, 0).wait(1).to({
            skewX: 112.2593,
            skewY: -427.7407,
            x: -68.55,
            y: 396.55
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 96.7257,
            skewY: -443.2742,
            x: -64.4,
            y: 410.95
        }, 0).wait(1).to({
            skewX: 79.0999,
            skewY: -460.9,
            x: -57.1,
            y: 426.55
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: 60.6403,
            skewY: -479.3595,
            x: -45.95,
            y: 442.15
        }, 0).wait(1).to({
            skewX: 42.9229,
            skewY: -497.0768,
            x: -31.55,
            y: 456.4
        }, 0).wait(1).to({
            skewX: 27.0151,
            skewY: -512.9845,
            x: -15.15,
            y: 468.3
        }, 0).wait(1).to({
            skewX: 13.1954,
            skewY: -526.8042,
            x: 1.45,
            y: 477.75
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 1.4332,
            skewY: -538.5663,
            x: 17.05,
            y: 484.85
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -7.9622,
            skewY: -547.9617,
            x: 30.2,
            y: 489.9
        }, 0).wait(1).to({
            regX: 0,
            skewX: -31.5042,
            skewY: -571.5036,
            x: 36.75,
            y: 492.5
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_1 = new b.flower_check;
        this.instance_1.parent =
            this;
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            _off: !0
        }, 1).wait(58))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-90.2, -14.5, 179.7, 520.6);
    (b.flower_mov1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.frame_58 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));
        this.instance = new b._flower1_1;
        this.instance.parent = this;
        this.instance.setTransform(-1, -.3, 1, 1, -53.9686);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: 39.7252,
            x: -.9155,
            y: 5.8655
        }, 0).wait(1).to({
            scaleX: .9998,
            rotation: 51.913,
            x: -1.591,
            y: 17.7944
        }, 0).wait(1).to({
            scaleY: .9998,
            rotation: 68.1774,
            x: -4.178,
            y: 32.4567
        }, 0).wait(1).to({
            scaleX: .9997,
            scaleY: .9997,
            rotation: 87.8993,
            x: -9.9359,
            y: 48.8766
        }, 0).wait(1).to({
            scaleX: .9996,
            scaleY: .9995,
            rotation: 109.8504,
            x: -19.982,
            y: 65.6581
        }, 0).wait(1).to({
            scaleX: .9994,
            scaleY: .9994,
            rotation: 131.6234,
            x: -34.3759,
            y: 80.9461
        }, 0).wait(1).to({
            scaleX: .9993,
            scaleY: .9993,
            rotation: 150.7176,
            x: -51.2095,
            y: 93.0807
        }, 0).wait(1).to({
            scaleY: .9992,
            rotation: 165.701,
            x: -67.1628,
            y: 101.4453
        }, 0).wait(1).to({
            scaleX: .9992,
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
            skewX: 45.0775,
            skewY: -134.9227,
            x: -73.4758,
            y: 122.4738
        }, 0).wait(1).to({
            skewX: 40.7786,
            skewY: -139.2215,
            x: -70.7949,
            y: 131.8075
        }, 0).wait(1).to({
            skewX: 35.1625,
            skewY: -144.8377,
            x: -66.5788,
            y: 143.5308
        }, 0).wait(1).to({
            skewX: 28.7159,
            skewY: -151.2842,
            x: -60.3987,
            y: 156.8658
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 21.7194,
            skewY: -158.2807,
            x: -51.763,
            y: 171.044
        }, 0).wait(1).to({
            skewX: 14.3621,
            skewY: -165.638,
            x: -40.1507,
            y: 185.2909
        }, 0).wait(1).to({
            skewX: 6.7903,
            skewY: -173.2097,
            x: -25.3215,
            y: 198.6214
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -.8645,
            skewY: -180.8646,
            x: -7.6655,
            y: 210.0087
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: -8.4642,
            skewY: -188.4642,
            x: 11.6655,
            y: 218.7629
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -15.8344,
            skewY: -195.8344,
            x: 31.1193,
            y: 224.807
        }, 0).wait(1).to({
            skewX: -22.7064,
            skewY: -202.7064,
            x: 49.1964,
            y: 228.5541
        }, 0).wait(1).to({
            skewX: -28.5462,
            skewY: -208.5462,
            x: 64.2311,
            y: 230.5734
        }, 0).wait(1).to({
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
            rotation: 61.2863,
            x: 73.8023,
            y: 243.9044
        }, 0).wait(1).to({
            rotation: 66.2544,
            x: 70.9938,
            y: 252.3826
        }, 0).wait(1).to({
            rotation: 72.8937,
            x: 67.0616,
            y: 262.8728
        }, 0).wait(1).to({
            rotation: 80.9051,
            x: 61.8722,
            y: 274.8177
        }, 0).wait(1).to({
            rotation: 90.1522,
            x: 55.2654,
            y: 287.6785
        }, 0).wait(1).to({
            rotation: 100.5908,
            x: 47.0232,
            y: 300.9965
        }, 0).wait(1).to({
            rotation: 112.1971,
            x: 36.8879,
            y: 314.3216
        }, 0).wait(1).to({
            rotation: 124.8645,
            x: 24.638,
            y: 327.1218
        }, 0).wait(1).to({
            rotation: 138.2593,
            x: 10.2663,
            y: 338.7284
        }, 0).wait(1).to({
            rotation: 151.7771,
            x: -5.884,
            y: 348.4802
        }, 0).wait(1).to({
            rotation: 164.6088,
            x: -22.9466,
            y: 355.889
        }, 0).wait(1).to({
            rotation: 175.9378,
            x: -39.5514,
            y: 360.8491
        }, 0).wait(1).to({
            rotation: 184.8983,
            x: -53.7334,
            y: 363.6449
        }, 0).wait(1).to({
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
            skewX: 134.3444,
            skewY: -405.6557,
            x: -70.5702,
            y: 374.199
        }, 0).wait(1).to({
            skewX: 125.0094,
            skewY: -414.9907,
            x: -70.1305,
            y: 383.689
        }, 0).wait(1).to({
            skewX: 112.2593,
            skewY: -427.7407,
            x: -68.369,
            y: 396.0601
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 96.7257,
            skewY: -443.2742,
            x: -64.3728,
            y: 410.4445
        }, 0).wait(1).to({
            skewX: 79.0999,
            skewY: -460.8999,
            x: -57.2005,
            y: 426.031
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: 60.6403,
            skewY: -479.3595,
            x: -46.2741,
            y: 441.6724
        }, 0).wait(1).to({
            skewX: 42.9229,
            skewY: -497.0768,
            x: -31.9709,
            y: 456.0157
        }, 0).wait(1).to({
            skewX: 27.0151,
            skewY: -512.9846,
            x: -15.6806,
            y: 468.0813
        }, 0).wait(1).to({
            skewX: 13.1954,
            skewY: -526.8042,
            x: .9382,
            y: 477.622
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 1.4332,
            skewY: -538.5663,
            x: 16.5332,
            y: 484.8688
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -7.9622,
            skewY: -547.9617,
            x: 29.6981,
            y: 490.0306
        }, 0).wait(1).to({
            skewX: -31.5042,
            skewY: -571.5036,
            x: 36.75,
            y: 492.5
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_1 = new b.flower_check;
        this.instance_1.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            _off: !0
        }, 1).wait(58))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-90.9, -16.4, 182.2, 524.2);
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
        this.instance_4 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_9 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);
        this.instance_10 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(13.6, 24.65, .5924,
            .5292, 0, 155.0554, -24.9453);
        this.instance_11 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_12 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_13 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_14 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-12.4, 14, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_15 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_18 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65,
            1.75, .5292, .5292, -118.5129);
        this.instance_21 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
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
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_30 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_30.parent =
            this;
        this.instance_30.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_31 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_32 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_33 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_33.parent = this;
        this.instance_33.setTransform(8,
            -18, 1, 1, -45.4791);
        this.instance_34 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
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
    (b.ef_glow_white_mov = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_24 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(24).call(this.frame_24).wait(1));
        this.instance = new b.ef_glow_white;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .9987,
            scaleY: .9987,
            alpha: .9974
        }, 0).wait(1).to({
            scaleX: .9956,
            scaleY: .9956,
            alpha: .9913
        }, 0).wait(1).to({
            scaleX: .9906,
            scaleY: .9906,
            alpha: .9815
        }, 0).wait(1).to({
            scaleX: .9838,
            scaleY: .9838,
            alpha: .9681
        }, 0).wait(1).to({
            scaleX: .9755,
            scaleY: .9755,
            alpha: .9519
        }, 0).wait(1).to({
            scaleX: .9664,
            scaleY: .9664,
            alpha: .9338
        }, 0).wait(1).to({
            scaleX: .957,
            scaleY: .957,
            alpha: .9155
        }, 0).wait(1).to({
                scaleX: .9483,
                scaleY: .9483,
                alpha: .8983
            },
            0).wait(1).to({
            scaleX: .9408,
            scaleY: .9408,
            alpha: .8835
        }, 0).wait(1).to({
            scaleX: .9349,
            scaleY: .9349,
            alpha: .872
        }, 0).wait(1).to({
            scaleX: .9309,
            scaleY: .9309,
            alpha: .864
        }, 0).wait(1).to({
            scaleX: .9285,
            scaleY: .9285,
            alpha: .8594
        }, 0).wait(1).to({
            scaleX: .9298,
            scaleY: .9298,
            alpha: .862
        }, 0).wait(1).to({
            scaleX: .933,
            scaleY: .933,
            alpha: .8681
        }, 0).wait(1).to({
            scaleX: .938,
            scaleY: .938,
            alpha: .8779
        }, 0).wait(1).to({
            scaleX: .9447,
            scaleY: .9447,
            alpha: .8912
        }, 0).wait(1).to({
            scaleX: .953,
            scaleY: .953,
            alpha: .9075
        }, 0).wait(1).to({
            scaleX: .9622,
            scaleY: .9622,
            alpha: .9255
        }, 0).wait(1).to({
            scaleX: .9715,
            scaleY: .9715,
            alpha: .9439
        }, 0).wait(1).to({
            scaleX: .9802,
            scaleY: .9802,
            alpha: .9611
        }, 0).wait(1).to({
            scaleX: .9877,
            scaleY: .9877,
            alpha: .9758
        }, 0).wait(1).to({
            scaleX: .9936,
            scaleY: .9936,
            alpha: .9874
        }, 0).wait(1).to({
            scaleX: .9977,
            scaleY: .9977,
            alpha: .9954
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-129.2, -129.2, 258.4, 258.4);
    (b.cursor_white_mov = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndStop(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.cursor_white;
        this.instance.parent = this;
        this.instance.setTransform(0, -10.05, 1, 1, 0, 0, 0, 0, -5.6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regY: -4.2,
            y: -7.95
        }, 0).wait(1).to({
            y: -6.4
        }, 0).wait(1).to({
            y: -4.85
        }, 0).wait(1).to({
            regY: -5.6,
            y: -5.6
        }, 0).wait(1).to({
            regY: -4.2,
            y: -4.85
        }, 0).wait(1).to({
            y: -6.4
        }, 0).wait(1).to({
            y: -7.95
        }, 0).wait(1).to({
            regY: -5.6,
            y: -10.05
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-8.5, -12.9, 17, 12.9);
    (b.cursor_black_mov = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.cursor_black;
        this.instance.parent = this;
        this.instance.setTransform(210, 135.75, .1846, .1863, 0, 0, 0, 0, -.6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
            scaleX: .1844,
            y: 137.7
        }, 0).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(200.7, 126.1, 16.30000000000001, 17.900000000000006);
    (b._mes =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.instance = new b.cursor_black_mov;
            this.instance.parent = this;
            this.instance.setTransform(92.4, 49.35, .6429, .6408, 0, 0, 0, 210.6, 136.3);
            this.timeline.addTween(a.Tween.get(this.instance).wait(1));
            this.instance_1 = new b._005_textflame;
            this.instance_1.parent = this;
            this.instance_1.setTransform(-108, -40, .5, .5);
            this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
        }).prototype = g(b._mes, new a.Rectangle(-121, -248, 240.6, 320), null);
    (b._bg3 = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.frame_0 = function() {};
        this.frame_24 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AjBDkIAAnHIGDAAIAAHHg");
        this.shape.setTransform(-49.825, 196.025);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(24));
        this.instance = new b.bg_white;
        this.instance.parent = this;
        this.instance.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 119.9,
            x: 119.9,
            alpha: .0037
        }, 0).wait(1).to({
            alpha: .0124
        }, 0).wait(1).to({
            alpha: .0263
        }, 0).wait(1).to({
            alpha: .0451
        }, 0).wait(1).to({
            alpha: .0682
        }, 0).wait(1).to({
            alpha: .0937
        }, 0).wait(1).to({
            alpha: .1198
        }, 0).wait(1).to({
            alpha: .1441
        }, 0).wait(1).to({
            alpha: .165
        }, 0).wait(1).to({
            alpha: .1813
        }, 0).wait(1).to({
            alpha: .1927
        }, 0).wait(1).to({
            regX: 120,
            x: 120,
            alpha: .1992
        }, 0).wait(1).to({
            regX: 119.9,
            x: 119.9,
            alpha: .1956
        }, 0).wait(1).to({
            alpha: .1869
        }, 0).wait(1).to({
            alpha: .173
        }, 0).wait(1).to({
            alpha: .1541
        }, 0).wait(1).to({
                alpha: .1311
            },
            0).wait(1).to({
            alpha: .1055
        }, 0).wait(1).to({
            alpha: .0795
        }, 0).wait(1).to({
            alpha: .0551
        }, 0).wait(1).to({
            alpha: .0342
        }, 0).wait(1).to({
            alpha: .0179
        }, 0).wait(1).to({
            alpha: .0065
        }, 0).wait(1).to({
            regX: 120,
            x: 120,
            alpha: 0
        }, 0).wait(1));
        this.instance_1 = new b.bg_gra;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(25))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-69.2, 0, 309.2, 320);
    (b._bg2 = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b.bg_gra;
        this.instance.parent = this;
        this.instance.setTransform(403.95, 160, 1.3667, 1, 0, 0, 0, 120, 160);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.bg_gra;
        this.instance_1.parent = this;
        this.instance_1.setTransform(685.95, 160, 1, 1, 0, 0, 0, 120, 160);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1));
        this.instance_2 = new b.bg_gra;
        this.instance_2.parent = this;
        this.instance_2.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1))
    }).prototype =
        g(b._bg2, new a.Rectangle(-69.2, 0, 875.2, 320), null);
    (b.___glitters = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.kira_45;
        this.instance.parent = this;
        this.instance.setTransform(-.8, 11.6, .9936, .9936);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.___glitters, new a.Rectangle(-117.3, -70.2, 234.6, 140.4), null);
    (b.rank_all = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.___glitters;
        this.instance.parent = this;
        this.instance.setTransform(0, -56.75);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.___rank;
        this.instance_1.parent = this;
        this.instance_1.setTransform(1, -36);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = g(b.rank_all, new a.Rectangle(-117.3, -73, 234.6, 86.5), null);
    (b.kirakira_mov_all = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_35 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(35).call(this.frame_35).wait(1));
        this.instance = new b.kirakira_mov;
        this.instance.parent = this;
        this.instance.setTransform(-67.2, 145.15, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.kirakira_mov;
        this.instance_1.parent = this;
        this.instance_1.setTransform(82.35, -73.85, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(33));
        this.instance_2 = new b.kirakira_mov;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-77.75, -114.8, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(13).to({
                _off: !1
            },
            0).wait(23));
        this.instance_3 = new b.kirakira_mov;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-90.65, 39.05, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(7).to({
            _off: !1
        }, 0).wait(29));
        this.instance_4 = new b.kirakira_mov;
        this.instance_4.parent = this;
        this.instance_4.setTransform(29.1, 146.65, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(9).to({
            _off: !1
        }, 0).wait(27));
        this.instance_5 = new b.kirakira_mov;
        this.instance_5.parent =
            this;
        this.instance_5.setTransform(56.5, -134.05, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(11).to({
            _off: !1
        }, 0).wait(25));
        this.instance_6 = new b.kirakira_mov;
        this.instance_6.parent = this;
        this.instance_6.setTransform(26.8, 35.85, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(19).to({
            _off: !1
        }, 0).wait(17));
        this.instance_7 = new b.kirakira_mov;
        this.instance_7.parent = this;
        this.instance_7.setTransform(71.55, 52.35, .281,
            .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(22).to({
            _off: !1
        }, 0).wait(14));
        this.instance_8 = new b.kirakira_mov;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-94.25, -62.4, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(26).to({
            _off: !1
        }, 0).wait(10));
        this.instance_9 = new b.kirakira_mov;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-19.55, -134.05, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(28).to({
                _off: !1
            },
            0).wait(8));
        this.instance_10 = new b.kirakira_mov;
        this.instance_10.parent = this;
        this.instance_10.setTransform(97.25, .3, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(33).to({
            _off: !1
        }, 0).wait(3));
        this.instance_11 = new b.kirakira_mov;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-44.75, -9.65, .281, .281);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(34).to({
            _off: !1
        }, 0).wait(2));
        this.instance_12 = new b.sprite39;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-12.2, -.05, 1.2124, 1.6844);
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(36))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-112.4, -161.5, 224.9, 323);
    (b.election_result_2 = function(c, d, e) {
        this.initialize(c, d, e, {
            top5_1: 3,
            top5_2: 25,
            top5_3: 49,
            wait1: 17,
            s1: 22,
            s2: 36,
            s3: 63,
            last: 72
        });
        this.frame_0 = function() {
            this.url = window.im_cjs._url;
            this.card_comm1_1 = window.im_cjs.card_comm1_1;
            this.card_comm1_2 = window.im_cjs.card_comm1_2;
            this.card_comm1_3 = window.im_cjs.card_comm1_3;
            this.card_comm1_4 = window.im_cjs.card_comm1_4;
            this.card_comm1_5 = window.im_cjs.card_comm1_5;
            this.attribute = 2;
            this.key_flag = 1;
            this.changeColor = function(h) {
                if (h.target && h.colorDetail) {
                    var A = h.target,
                        k = h.colorDetail;
                    h = h.cache ? {
                        x: h.cache[0],
                        y: h.cache[1],
                        width: h.cache[2],
                        height: h.cache[3]
                    } : A.getBounds();
                    k = new createjs.ColorFilter(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7]);
                    A.filters = [k];
                    A.cache(h.x, h.y, h.width, h.height)
                }
            };
            this.removeFilter = function(h) {
                h.target &&
                    (h = h.target, h.filters = [], h.uncache())
            }
        };
        this.frame_3 = function() {
            window.se_play("se_016")
        };
        this.frame_16 = function() {};
        this.frame_17 = function() {
            this.btn.on("click", function(h) {
                this.gotoAndPlay("s1")
            }, exportRoot, !0)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.frame_24 = function() {
            this.btn.on("click", function(h) {
                this.gotoAndPlay("s2")
            }, exportRoot, !0)
        };
        this.frame_25 = function() {
            window.se_play("se_057")
        };
        this.frame_38 = function() {
            this.btn.on("click", function(h) {
                this.gotoAndPlay("s3")
            }, exportRoot, !0)
        };
        this.frame_49 =
            function() {
                window.se_play("se_123")
            };
        this.frame_62 = function() {};
        this.frame_65 = function() {
            this.btn.on("click", function(h) {
                this.gotoAndPlay("last")
            }, exportRoot, !0);
            this.stop()
        };
        this.frame_71 = function() {
            this.stop()
        };
        this.frame_74 = function() {
            this.t1.text = this.card_comm1_1;
            this.t2.text = this.card_comm1_2;
            this.t3.text = this.card_comm1_3;
            this.t4.text = this.card_comm1_4;
            this.t5.text = this.card_comm1_5
        };
        this.frame_76 = function() {
            this.btn.on("click", function(h) {
                window.location.href = this.url
            }, exportRoot, !0)
        };
        this.frame_86 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(13).call(this.frame_16).wait(1).call(this.frame_17).wait(4).call(this.frame_21).wait(3).call(this.frame_24).wait(1).call(this.frame_25).wait(13).call(this.frame_38).wait(11).call(this.frame_49).wait(13).call(this.frame_62).wait(3).call(this.frame_65).wait(6).call(this.frame_71).wait(3).call(this.frame_74).wait(2).call(this.frame_76).wait(10).call(this.frame_86).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Egx/A3eMAAAhu7MBj/AAAMAAABu7gAyvZyMAlfAAAMAAAgx/MglfAAAg");
        this.shape.setTransform(120, 155);
        this.timeline.addTween(a.Tween.get(this.shape).wait(87));
        this.t5 = new a.Text("", "13px 'Arial'", "#36076F");
        this.t5.name = "t5";
        this.t5.lineHeight = 17;
        this.t5.lineWidth = 260;
        this.t5.parent = this;
        this.t5.setTransform(22, 280);
        this.t4 = new a.Text("", "13px 'Arial'", "#36076F");
        this.t4.name = "t4";
        this.t4.lineHeight = 17;
        this.t4.lineWidth = 260;
        this.t4.parent = this;
        this.t4.setTransform(22,
            266);
        this.t3 = new a.Text("", "13px 'Arial'", "#36076F");
        this.t3.name = "t3";
        this.t3.lineHeight = 17;
        this.t3.lineWidth = 260;
        this.t3.parent = this;
        this.t3.setTransform(22, 252);
        this.t2 = new a.Text("", "13px 'Arial'", "#36076F");
        this.t2.name = "t2";
        this.t2.lineHeight = 17;
        this.t2.lineWidth = 260;
        this.t2.parent = this;
        this.t2.setTransform(22, 238);
        this.t1 = new a.Text("", "13px 'Arial'", "#36076F");
        this.t1.name = "t1";
        this.t1.lineHeight = 17;
        this.t1.lineWidth = 260;
        this.t1.parent = this;
        this.t1.setTransform(22, 224);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                    t: this.t1
                },
                {
                    t: this.t2
                }, {
                    t: this.t3
                }, {
                    t: this.t4
                }, {
                    t: this.t5
                }
            ]
        }, 74).wait(13));
        this.instance = new b.cursor_white_mov;
        this.instance.parent = this;
        this.instance.setTransform(224.35, 318);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(17).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 5).wait(48).to({
            _off: !1,
            x: 227.85
        }, 0).to({
            _off: !0
        }, 2).wait(15));
        this.instance_1 = new b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.instance_1.parent = this;
        this.instance_1.setTransform(99.4, 121.05, .6762, .6762, 0, 0, 0,
            -38.6, -8.2);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 23).wait(61));
        this.instance_2 = new b.kirakira_mov_all;
        this.instance_2.parent = this;
        this.instance_2.setTransform(119.3, 160, .9936, .9936);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(50).to({
            _off: !1
        }, 0).wait(37));
        this.instance_3 = new b.ef_glow_yellow;
        this.instance_3.parent = this;
        this.instance_3.setTransform(119.7, 141, .3186, .3186);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(3).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .7938,
            scaleY: .7938,
            y: 134.45
        }, 0).wait(1).to({
            scaleX: .9487,
            scaleY: .9487,
            alpha: .3398
        }, 0).to({
            _off: !0
        }, 1).wait(81));
        this.tx = new b.mc_votes;
        this.tx.name = "tx";
        this.tx.parent = this;
        this.tx.setTransform(120, 197);
        this.tx._off = !0;
        this.timeline.addTween(a.Tween.get(this.tx).wait(11).to({
            _off: !1
        }, 0).wait(11).to({
            y: 196
        }, 0).wait(1).to({
            y: 195
        }, 0).to({
            y: 300
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(61));
        this.instance_4 =
            new b.rank_all_white;
        this.instance_4.parent = this;
        this.instance_4.setTransform(120, 180);
        this.instance_4.alpha = .0391;
        this.instance_4.compositeOperation = "lighter";
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1).to({
            _off: !1
        }, 0).to({
            alpha: .6992
        }, 3, a.Ease.get(-1)).to({
            alpha: .1016
        }, 8).to({
            _off: !0
        }, 1).wait(74));
        this.instance_5 = new b.rank_all;
        this.instance_5.parent = this;
        this.instance_5.setTransform(120, 180);
        this.instance_5.alpha = .0391;
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
                _off: !1
            },
            0).to({
            alpha: 1
        }, 3, a.Ease.get(-1)).wait(18).to({
            y: 182
        }, 0).wait(1).to({
            y: 176
        }, 0).to({
            y: 43.2
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(61));
        this.instance_6 = new b._mes;
        this.instance_6.parent = this;
        this.instance_6.setTransform(120.9, 253, .4203, .4203);
        this.instance_6.alpha = .1719;
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(72).to({
            _off: !1
        }, 0).to({
            scaleX: 1.0353,
            scaleY: 1.0353,
            y: 248,
            alpha: 1
        }, 2).to({
            scaleX: 1,
            scaleY: 1
        }, 3).wait(10));
        this.instance_7 = new b.gr_number;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(118, 336.45, .5, .5);
        this.instance_7.alpha = 0;
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(60).to({
            _off: !1
        }, 0).to({
            y: 314.45,
            alpha: 1
        }, 3, a.Ease.get(1)).wait(1).to({
            regY: -51,
            y: 289.9
        }, 0).wait(1).to({
            regY: 0,
            y: 316.45
        }, 0).wait(7).to({
            alpha: 0
        }, 2).to({
            _off: !0
        }, 1).wait(12));
        this.instance_8 = new b.bg_white;
        this.instance_8.parent = this;
        this.instance_8.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_8.compositeOperation = "lighter";
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(51).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 11, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(24));
        this.b = new b.mc_shuttle;
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(18, 304);
        this.b.alpha = 0;
        this.b._off = !0;
        this.timeline.addTween(a.Tween.get(this.b).wait(50).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(36));
        this.sign = new b.sign;
        this.sign.name = "sign";
        this.sign.parent = this;
        this.sign.setTransform(172, 210, .5, .5);
        this.sign.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.sign).wait(51).to({
                alpha: 1
            },
            0).wait(36));
        this.gr_base = new b.gr_base;
        this.gr_base.name = "gr_base";
        this.gr_base.parent = this;
        this.gr_base.setTransform(240, 355.5, 1, 1, 0, 0, 0, 120, 35.5);
        this.gr_base.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.gr_base).wait(51).to({
            alpha: 1
        }, 0).wait(36));
        this.instance_9 = new b.flower_mov2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(62.2, -84.7, 1.3542, 1.3542);
        this.instance_10 = new b.flower_mov2;
        this.instance_10.parent = this;
        this.instance_10.setTransform(102.95, -43.65, 2.1061, 1.9746, 0, 0, 180);
        this.instance_11 = new b.flower_mov2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(173.95, -60.5, 1.2566, 1.6126);
        this.instance_12 = new b.flower_mov2;
        this.instance_12.parent = this;
        this.instance_12.setTransform(26.5, -31.8, 1.2566, 1.6126);
        this.instance_13 = new b.flower_mov2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(203.6, -215.8, 3.3643, 4.0483, 0, 0, 180);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
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
                }
            ]
        }, 50).to({
            state: [{
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }]
        }, 22).wait(15));
        this.instance_14 = new b.ef_glow_white_mov;
        this.instance_14.parent = this;
        this.instance_14.setTransform(117, 121.05, .5015, .5015);
        this.instance_14._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(49).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: 1.2114,
            scaleY: 1.2114
        }, 0).to({
            _off: !0
        }, 1).wait(36));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("AiaOhQmBmAAAohQAAogGBmBQGAmBIhAAQIhAAGAGBQGCGBAAIgQAAIhmCGAQmAGCohAAQohAAmAmCg");
        e = (new a.Graphics).p("ABPJAQjujuAAlSQAAlQDujwQDujuFSAAQFRAADvDuQDvDwAAFQQAAFSjvDuQjvDvlRAAQlSAAjujvg");
        var q = (new a.Graphics).p("AoONsQjujuAAlSQAAlRDujuQDwjvFQAAQFSAADuDvQDvDuAAFRQAAFSjvDuQjuDvlSAAQlQAAjwjvg"),
            p = (new a.Graphics).p("ApVM8QkfkfAAmVQAAmVEfkgQEfkeGVgBQGWABEfEeQEfEgAAGVQAAGVkfEfQkfEgmWAAQmVAAkfkgg"),
            n = (new a.Graphics).p("AqdMpQlPlPAAnaQAAnZFPlQQFQlPHZAAQHaAAFPFPQFQFQAAHZQAAHalQFPQlPFQnaAAQnZAAlQlQg"),
            t = (new a.Graphics).p("AqfMNQlElDAAnKQAAnJFElEQFElDHIAAQHKAAFEFDQFEFEAAHJQAAHKlEFDQlEFEnKAAQnIAAlElEg"),
            u = (new a.Graphics).p("AqhMHQk7k7AAm9QAAm8E7k7QE7k6G8AAQG9AAE6E6QE7E7AAG8QAAG9k7E7Qk6E7m9AAQm8AAk7k7g"),
            v = (new a.Graphics).p("AqjMFQk0k0AAm0QAAmzE0k0QE1k0GzAAQG0AAEzE0QE1E0AAGzQAAG0k1E0QkzE0m0AAQmzAAk1k0g"),
            r = (new a.Graphics).p("AqkMEQkwkwAAmvQAAmtEwkxQExkwGuAAQGuAAEwEwQExExAAGtQAAGvkxEwQkwExmuAAQmuAAkxkxg"),
            w = (new a.Graphics).p("AqkMDQkvkuAAmtQAAmrEvkwQEwkvGrAAQGtAAEuEvQEwEwAAGrQAAGtkwEuQkuEwmtAAQmrAAkwkwg"),
            x = (new a.Graphics).p("AqkMDQkvkuAAmtQAAmrEvkwQEwkvGrAAQGtAAEuEvQEwEwAAGrQAAGtkwEuQkuEwmtAAQmrAAkwkwg"),
            y = (new a.Graphics).p("As+M+QlXlYAAnmQAAnlFXlZQFZlXHlAAQHmAAFYFXQFYFZAAHlQAAHmlYFYQlYFYnmAAQnlAAlZlYg"),
            z = (new a.Graphics).p("AxmRmQnSnSAAqUQAAqTHSnTQHTnSKTAAQKUAAHSHSQHTHTAAKTQAAKUnTHSQnSHTqUAAQqTAAnTnTg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(35).to({
            graphics: d,
            x: 208.9999,
            y: -3.5
        }).wait(1).to({
            graphics: e,
            x: 147,
            y: 63.5
        }).wait(1).to({
            graphics: q,
            x: 86.5,
            y: 111.5
        }).wait(1).to({
            graphics: p,
            x: 107.5,
            y: 111.55
        }).wait(1).to({
            graphics: n,
            x: 128.5,
            y: 108.7
        }).wait(1).to({
            graphics: t,
            x: 121.4749,
            y: 109.708
        }).wait(1).to({
            graphics: u,
            x: 116.011,
            y: 108.967
        }).wait(1).to({
            graphics: v,
            x: 112.1081,
            y: 108.1441
        }).wait(1).to({
            graphics: r,
            x: 109.7664,
            y: 107.6504
        }).wait(1).to({
            graphics: w,
            x: 108.9859,
            y: 107.4859
        }).wait(3).to({
            graphics: x,
            x: 108.9859,
            y: 107.4859
        }).wait(1).to({
            graphics: y,
            x: 114.5,
            y: 111.5
        }).wait(1).to({
            graphics: z,
            x: 114.5,
            y: 111.5
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(37));
        this.instance_15 = new b.___character_white;
        this.instance_15.parent = this;
        this.instance_15.setTransform(295.7, 320, .5, .5);
        this.instance_15.alpha =
            0;
        this.instance_15.compositeOperation = "lighter";
        this.instance_15._off = !0;
        d = [this.instance_15];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(33).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -38,
            regY: -310,
            x: 174,
            y: 165,
            alpha: .1309
        }, 0).wait(1).to({
            x: 130.85,
            alpha: .186
        }, 0).wait(1).to({
            x: 108.85,
            alpha: .214
        }, 0).wait(1).to({
            x: 98.65,
            alpha: .227
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 115,
            y: 320,
            alpha: .2305
        }, 0).to({
            x: 120,
            alpha: .1484
        }, 3, a.Ease.get(1)).wait(6).to({
            alpha: .4688
        }, 2, a.Ease.get(-.96)).to({
                _off: !0
            },
            1).wait(37));
        this.ch_spot = new b.___character;
        this.ch_spot.name = "ch_spot";
        this.ch_spot.parent = this;
        this.ch_spot.setTransform(295.7, 320, .5, .5);
        this.ch_spot.alpha = 0;
        d = [this.ch_spot];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.ch_spot).wait(33).to({
            alpha: 1
        }, 0).wait(1).to({
            regX: -38,
            regY: -310,
            x: 174,
            y: 165
        }, 0).wait(1).to({
            x: 130.85
        }, 0).wait(1).to({
            x: 108.85
        }, 0).wait(1).to({
            x: 98.65
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 115,
            y: 320
        }, 0).to({
            x: 120
        }, 3, a.Ease.get(1)).wait(8).to({
            _off: !0
        }, 1).wait(37));
        this.instance_16 = new b.___character_black;
        this.instance_16.parent = this;
        this.instance_16.setTransform(295.7, 320, .5, .5);
        this.instance_16.alpha = .6992;
        this.instance_16._off = !0;
        this.ch = new b.___character_black;
        this.ch.name = "ch";
        this.ch.parent = this;
        this.ch.setTransform(115, 320, .5, .5);
        this.ch.alpha = .6992;
        this.ch._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_16).wait(33).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -38,
            regY: -310,
            x: 174,
            y: 165
        }, 0).wait(1).to({
            x: 130.85
        }, 0).wait(1).to({
            x: 108.85
        }, 0).wait(1).to({
                x: 98.65
            },
            0).to({
            _off: !0
        }, 1).wait(49));
        this.timeline.addTween(a.Tween.get(this.ch).wait(38).to({
            _off: !1
        }, 0).to({
            x: 120
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 9).wait(37));
        this.ch_1 = new b.___character;
        this.ch_1.name = "ch_1";
        this.ch_1.parent = this;
        this.ch_1.setTransform(295.7, 320, .5, .5);
        this.ch_1.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.ch_1).wait(33).to({
            alpha: 1
        }, 0).wait(1).to({
            regX: -38,
            regY: -310,
            x: 174,
            y: 165
        }, 0).wait(1).to({
            x: 130.85
        }, 0).wait(1).to({
            x: 108.85
        }, 0).wait(1).to({
            x: 98.65
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 115,
            y: 320
        }, 0).to({
            x: 120
        }, 3, a.Ease.get(1)).wait(9).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(36));
        this.a = new b.mc_shuttle;
        this.a.name = "a";
        this.a.parent = this;
        this.a.setTransform(229, 8);
        this.a.alpha = 0;
        this.a._off = !0;
        this.timeline.addTween(a.Tween.get(this.a).wait(50).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(36));
        this.instance_17 = new b.ef_glow_white_mov;
        this.instance_17.parent = this;
        this.instance_17.setTransform(120.6, 12.75, 1.4263, 1.4263);
        this.instance_17._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_17).wait(51).to({
                _off: !1
            },
            0).wait(36));
        this.instance_18 = new b.flower_mov1;
        this.instance_18.parent = this;
        this.instance_18.setTransform(175.65, -9, .489, .5066, 0, 0, 180);
        this.instance_19 = new b.flower_mov1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(227, -7.95, .5066, .6501);
        this.instance_20 = new b.flower_mov1;
        this.instance_20.parent = this;
        this.instance_20.setTransform(32.15, -9, .489, .5066, 0, 0, 180);
        this.instance_21 = new b.flower_mov1;
        this.instance_21.parent = this;
        this.instance_21.setTransform(94.15, -9, .5066, .5066);
        this.instance_22 =
            new b.flower_mov1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(4.8, -9, .7961, .7961);
        this.instance_23 = new b.flower_mov1;
        this.instance_23.parent = this;
        this.instance_23.setTransform(186.35, -8.3, .4537, .6033, 0, 0, 180);
        this.instance_24 = new b.flower_mov1;
        this.instance_24.parent = this;
        this.instance_24.setTransform(218.05, -8.3, .4701, .6033);
        this.instance_25 = new b.flower_mov1;
        this.instance_25.parent = this;
        this.instance_25.setTransform(64.65, -8.3, .4537, .6033, 0, 0, 180);
        this.instance_26 = new b.flower_mov1;
        this.instance_26.parent = this;
        this.instance_26.setTransform(110.4, -7.3, .7878, .7387, 0, 0, 180);
        this.instance_27 = new b.flower_mov1;
        this.instance_27.parent = this;
        this.instance_27.setTransform(129.4, -8.3, .4701, .6033);
        this.instance_28 = new b.flower_mov1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(81.55, -8.3, .4701, .6033);
        this.instance_29 = new b.flower_mov1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(158.8, -9.7, .5013, .6033, 0, 0, 180);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
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
                }
            ]
        }, 50).wait(37));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("AohUKQiZiZAAjZQAAjYCZiaQCZiZDZAAQDYAACZCZQCZCaAADYQAADZiZCZQiZCajYAAQjZAAiZiag");
        e = (new a.Graphics).p("AoYSBQjejfAAk6QAAk7DejeQDejdE6AAQE7AADeDdQDeDeAAE7QAAE6jeDfQjeDek7AAQk6AAjejeg");
        q = (new a.Graphics).p("Aq+P3QkjkjAAmdQAAmbEjkjQEjkjGbAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmbAAkjkjg");
        p = (new a.Graphics).p("Aq+PUQkjkjAAmdQAAmbEjkjQEjkjGbAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmbAAkjkjg");
        n = (new a.Graphics).p("AqzOxQkjkjAAmdQAAmbEjkjQEjkjGbAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmbAAkjkjg");
        t = (new a.Graphics).p("ApuOOQkjkjAAmdQAAmbEjkjQEjkjGbAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmbAAkjkjg");
        u = (new a.Graphics).p("AoqNrQkjkjAAmdQAAmbEjkjQEjkjGcAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmcAAkjkjg");
        v = (new a.Graphics).p("AlHLUQkjkjAAmcQAAmcEjkjQEjkjGbAAQGdAAEjEjQEjEjAAGcQAAGckjEjQkjEjmdAAQmbAAkjkjg");
        r = (new a.Graphics).p("AFhK/QkjkjAAmcQAAmbEjkjQEjkjGcAAQGcAAEjEjQEjEjAAGbQAAGckjEjQkjEjmcAAQmcAAkjkjg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(24).to({
            graphics: d,
            x: -69.9067,
            y: 144.3567
        }).wait(1).to({
            graphics: e,
            x: -6.675,
            y: 137.4589
        }).wait(1).to({
            graphics: q,
            x: 74.15,
            y: 130.5612
        }).wait(1).to({
            graphics: p,
            x: 87.9,
            y: 127.0612
        }).wait(1).to({
            graphics: n,
            x: 100.5362,
            y: 123.5612
        }).wait(1).to({
            graphics: t,
            x: 107.4112,
            y: 120.0612
        }).wait(1).to({
            graphics: u,
            x: 114.2862,
            y: 116.5612
        }).wait(1).to({
            graphics: v,
            x: 136.9674,
            y: 101.4737
        }).wait(1).to({
            graphics: r,
            x: 205.0112,
            y: 13
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(54));
        this.instance_30 = new b._bg2;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-88.05, 0);
        this.instance_30._off = !0;
        d = [this.instance_30];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_30).wait(24).to({
            _off: !1
        }, 0).wait(1).to({
            x: -130.15
        }, 0).wait(1).to({
            x: -172.3
        }, 0).wait(1).to({
            x: -214.4
        }, 0).wait(1).to({
            x: -256.55
        }, 0).wait(1).to({
            x: -298.65
        }, 0).wait(1).to({
                x: -340.8
            },
            0).wait(1).to({
            x: -382.9
        }, 0).wait(1).to({
            x: -425.05
        }, 0).to({
            _off: !0
        }, 1).wait(54));
        this.instance_31 = new b.bg_black;
        this.instance_31.parent = this;
        this.instance_31.alpha = 0;
        this.instance_31._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_31).wait(1).to({
            _off: !1
        }, 0).to({
            alpha: .1992
        }, 3, a.Ease.get(-.93)).to({
            alpha: 0
        }, 5).to({
            _off: !0
        }, 1).wait(13).to({
            _off: !1,
            alpha: .6992
        }, 0).to({
            alpha: .8984
        }, 12, a.Ease.get(1)).to({
            alpha: .3516
        }, 3, a.Ease.get(1)).to({
            alpha: .1992
        }, 3, a.Ease.get(1)).wait(9).to({
            alpha: .75
        }, 0).to({
                _off: !0
            },
            1).wait(36));
        this.bg1 = new b._bg2;
        this.bg1.name = "bg1";
        this.bg1.parent = this;
        this.bg1.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.bg1).wait(23).to({
            alpha: 1
        }, 0).to({
            x: -551.4
        }, 12, a.Ease.get(1)).to({
            x: -569.1
        }, 3, a.Ease.get(1)).to({
            x: -566.6
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 9).wait(37));
        this.bg2 = new b._bg1;
        this.bg2.name = "bg2";
        this.bg2.parent = this;
        this.bg2.setTransform(120, 160, .5, .5, 0, 0, 0, 120, 160);
        this.timeline.addTween(a.Tween.get(this.bg2).wait(23).to({
            regX: 0,
            regY: 0,
            x: 60,
            y: 80,
            alpha: 0
        }, 0).wait(27).to({
                alpha: 1
            },
            0).to({
            _off: !0
        }, 1).wait(36));
        this.instance_32 = new b._bg3;
        this.instance_32.parent = this;
        this.instance_32._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_32).wait(51).to({
            _off: !1
        }, 0).wait(36));
        this.btn = new b._btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn._off = !0;
        this.timeline.addTween(a.Tween.get(this.btn).wait(17).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 5).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 12).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 25).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 7).wait(4).to({
                _off: !1
            },
            0).wait(11))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-449.1, -85.3, 1255.1, 595.3);
    b.properties = {
        id: "election_result_2",
        width: 240,
        height: 320,
        fps: 12,
        color: "#333333",
        opacity: 1,
        manifest: [{
                src: "images/_005_shuttle_cu.png",
                id: "election_result_2__005_shuttle_cu"
            }, {
                src: "images/_005_textflame.png",
                id: "election_result_2__005_textflame"
            }, {
                src: "images/bg.jpg",
                id: "election_result_2_bg"
            }, {
                src: "images/bottom.png",
                id: "election_result_2_bottom"
            }, {
                src: "images/fp_flower3.png",
                id: "election_result_2_fp_flower3"
            },
            {
                src: "images/result_ch2.png",
                id: "election_result_2_result_ch2"
            }, {
                src: "images/result_ch2_black.png",
                id: "election_result_2_result_ch2_black"
            }, {
                src: "images/result_ch2_white.png",
                id: "election_result_2_result_ch2_white"
            }, {
                src: "images/result_name2.png",
                id: "election_result_2_result_name2"
            }, {
                src: "images/result_no2.png",
                id: "election_result_2_result_no2"
            }, {
                src: "images/result_no2_white.png",
                id: "election_result_2_result_no2_white"
            }, {
                src: "images/result_sign2.png",
                id: "election_result_2_result_sign2"
            }, {
                src: "images/result_votes2.png",
                id: "election_result_2_result_votes2"
            }, {
                src: "images/sp_kirakira.png",
                id: "election_result_2_sp_kirakira"
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
    l.bootcompsLoaded = l.bootcompsLoaded || [];
    l.bootstrapListeners || (l.bootstrapListeners = []);
    l.bootstrapCallback = function(c) {
        l.bootstrapListeners.push(c);
        if (0 < l.bootcompsLoaded.length)
            for (var d = 0; d < l.bootcompsLoaded.length; ++d) c(l.bootcompsLoaded[d])
    };
    l.compositions = l.compositions || {};
    l.compositions.election_result_2 = {
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
            return m
        }
    };
    l.compositionLoaded = function(c) {
        l.bootcompsLoaded.push(c);
        for (var d = 0; d < l.bootstrapListeners.length; d++) l.bootstrapListeners[d](c)
    };
    l.getComposition = function(c) {
        return l.compositions[c]
    };
    l.makeResponsive = function(c, d, e, q, p) {
        function n() {
            var r = b.properties.width,
                w = b.properties.height,
                x = window.innerWidth,
                y = window.innerHeight,
                z = window.devicePixelRatio || 1,
                h = x / r,
                A = y / w,
                k = 1;
            if (c)
                if ("width" == d && t == x || "height" ==
                    d && u == y) k = v;
                else if (e) 1 == q ? k = Math.min(h, A) : 2 == q && (k = Math.max(h, A));
            else if (x < r || y < w) k = Math.min(h, A);
            p[0].width = r * z * k;
            p[0].height = w * z * k;
            p.forEach(function(B) {
                B.style.width = r * k + "px";
                B.style.height = w * k + "px"
            });
            stage.scaleX = z * k;
            stage.scaleY = z * k;
            t = x;
            u = y;
            v = k;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var t, u, v = 1;
        window.addEventListener("resize", n);
        n()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
