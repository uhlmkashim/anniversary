(function(a, g) {
    function C() {
        var c = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        c.gotoAndStop(this.currentFrame);
        c.paused = this.paused;
        c.framerate = this.framerate;
        return c
    }

    function k(c, d, e) {
        c = a.extend(c, a.MovieClip);
        c.clone = C;
        c.nominalBounds = d;
        c.frameBounds = e;
        return c
    }
    var f, b = {},
        D = {},
        l = {};
    b.ssMetadata = [];
    (b.replace_bg = function() {
        this.initialize(l.event_gift_chance_extra_replace_bg)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 310);
    (b.replace_card =
        function() {
            this.initialize(l.event_gift_chance_extra_replace_card)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_character1_1 = function() {
        this.initialize(l.event_gift_chance_extra_replace_character1_1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_2 = function() {
        this.initialize(l.event_gift_chance_extra_replace_character1_2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_3 =
        function() {
            this.initialize(l.event_gift_chance_extra_replace_character1_3)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_4 = function() {
        this.initialize(l.event_gift_chance_extra_replace_character1_4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_5 = function() {
        this.initialize(l.event_gift_chance_extra_replace_character1_5)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character1_6 =
        function() {
            this.initialize(l.event_gift_chance_extra_replace_character1_6)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_1 = function() {
        this.initialize(l.event_gift_chance_extra_replace_character2_1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_2 = function() {
        this.initialize(l.event_gift_chance_extra_replace_character2_2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_3 =
        function() {
            this.initialize(l.event_gift_chance_extra_replace_character2_3)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_4 = function() {
        this.initialize(l.event_gift_chance_extra_replace_character2_4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_5 = function() {
        this.initialize(l.event_gift_chance_extra_replace_character2_5)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.replace_character2_6 =
        function() {
            this.initialize(l.event_gift_chance_extra_replace_character2_6)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 800, 1E3);
    (b.sp_glitter_card = function() {
        this.initialize(l.event_gift_chance_extra_sp_glitter_card)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 78, 78);
    (b.white_rect = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A0TZtMAAAgzZMAonAAAMAAAAzZg");
        this.shape.setTransform(130, 164.475);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        k(b.white_rect, new a.Rectangle(0, 0, 260, 329), null);
    (b.sound_mc = function(c, d, e) {
        this.initialize(c, d, e, {
            appear: 1,
            happy: 6,
            item_normal: 11,
            item_rare: 19,
            unique_effect: 26,
            flower: 36,
            idol_get: 41
        });
        this.frame_0 = function() {
            this.stop();
            this.visible = !1
        };
        this.frame_1 = function() {
            window.se_play("se_007");
            this.gotoAndStop(0)
        };
        this.frame_6 = function() {
            window.se_play("se_081");
            this.gotoAndStop(0)
        };
        this.frame_11 = function() {
            window.se_play("se_116");
            this.gotoAndStop(0)
        };
        this.frame_19 = function() {
            window.se_play("item_rare");
            this.gotoAndStop(0)
        };
        this.frame_26 = function() {
            window.se_play("unique_effect");
            this.gotoAndStop(0)
        };
        this.frame_36 = function() {
            window.se_play("se_081");
            this.gotoAndStop(0)
        };
        this.frame_41 = function() {
            window.se_play("se_119");
            this.gotoAndStop(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(5).call(this.frame_11).wait(8).call(this.frame_19).wait(7).call(this.frame_26).wait(10).call(this.frame_36).wait(5).call(this.frame_41).wait(8));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag2A3IAAhtIBtAAIAABtg");
        this.shape.setTransform(5.5, 5.5);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(48))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 11, 11);
    (b.btn = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Az1ZjMAAAgzFMAnrAAAMAAAAzFg");
        this.shape.setTransform(127, 163.475);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        k(b.btn, new a.Rectangle(0, 0, 254, 327), null);
    (b.tie = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvAyIAAhjMAlfAAAIAABjg");
        this.shape.setTransform(120, 307.5, 1, .5);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#000000").s().p("AyvAZIAAgxMAlfAAAIAAAxg");
        this.shape_1.setTransform(120, 2.5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = k(b.tie, new a.Rectangle(0, 0, 240, 310), null);
    (b.text_win2 =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.shape = new a.Shape;
            this.shape.graphics.lf(["rgba(255,255,255,0.329)", "rgba(255,255,255,0.529)"], [0, 1], 0, 63.8, 0, -26.2).s().p("Ax9jnQAAgeAeAAMAi/AAAQAeAAAAAeIAAEiMgj7ADLg");
            this.shape.setTransform(115, 26.175);
            this.timeline.addTween(a.Tween.get(this.shape).wait(1));
            this.shape_1 = new a.Shape;
            this.shape_1.graphics.lf(["rgba(255,255,255,0.898)", "rgba(238,238,238,0.749)"], [0, 1], 0, 45, 0, -45).s().rr(-115, -45, 230, 90, 3);
            this.shape_1.setTransform(115, 45);
            this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
        }).prototype =
        k(b.text_win2, new a.Rectangle(0, 0, 230, 90), null);
    (b.sender = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.play()
        };
        this.frame_55 = function() {
            key_flag = 1;
            this.gotoAndStop(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(54).call(this.frame_55).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("Ah8B9IAAj5ID5AAIAAD5g");
        this.shape.setTransform(12.5, 12.5);
        this.timeline.addTween(a.Tween.get(this.shape).wait(56))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 25, 25);
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
    }).prototype = f =
        new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-1.4, -1.2, 4, 3.8);
    (b.glitter_card_range = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = k(b.glitter_card_range, new a.Rectangle(-120, -150, 240, 300), null);
    (b.glitter_card_inner = function(c,
        d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_glitter_card;
        this.instance.parent = this;
        this.instance.setTransform(-19.5, -19.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = k(b.glitter_card_inner, new a.Rectangle(-19.5, -19.5, 39, 39), null);
    (b.flash = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        k(b.flash, new a.Rectangle(0, 0, 240, 320), null);
    (b.fkds2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#CCCCCC").ss(1, 1, 1).p("ARMDDQAyAAAAgyIAAm3QAAgygyAAMgiXAAAQgyAAAAAyIAAG3QAAAyAyAAIdsAAIgXCWICbiWg");
        this.shape.setTransform(-1, 15);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.lf(["#FFFFFF", "rgba(255,255,255,0.851)"], [0, 1], 8.3, -22, 8.3, 21).s().p("AMgDDI9rAAQgyAAAAgyIAAm3QAAgyAyAAMAiXAAAQAyAAAAAyIAAG3QAAAygyAAIinAAIibCWg");
        this.shape_1.setTransform(-1, 15);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = k(b.fkds2, new a.Rectangle(-117, -20.5, 232, 71), null);
    (b.cursor_p = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("Al7lIIL3AAIl8KRg");
        this.shape.setTransform(-.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#999999").s().p("Al7lIIL3AAIl8KRg");
        this.shape_1.setTransform(6.575,
            4.825);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = k(b.cursor_p, new a.Rectangle(-38, -32.8, 82.6, 70.5), null);
    (b.card_reflect_whole = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A0WVgIAAg8MAotAAAIAAA8gA0WTFIAAlDMAotAAAIAAFDgA0WF4IAA3CMAotAAAIAAXCgA0WzrIAAh1MAotAAAIAAB1g");
        this.shape.setTransform(0, 46.65, 1, 1, 0, 0, 0, 0, 5.2);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = k(b.card_reflect_whole, new a.Rectangle(-130.3,
        -96.2, 260.70000000000005, 275.3), null);
    (b.card = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_card;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .375, .375);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = k(b.card, new a.Rectangle(0, 0, 240, 300.5), null);
    (b.bg = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_bg;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = k(b.bg, new a.Rectangle(0,
        0, 480, 310), null);
    (b.cursor_p_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#333333").s().p("Al7lIIL3AAIl8KRg");
        this.shape_2.setTransform(-.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape_2).wait(2).to({
            y: -11.675
        }, 0).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-38, -44.5, 76, 77.4);
    (b.pointGlitter = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFF6BB", "rgba(255,255,255,0)"],
            [0, .427, 1], 0, 0, 0, 0, 0, 34.6).s().p("AlaAAIFalaIFaFaIlaFag");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-34.6, -34.6, 69.30000000000001, 69.30000000000001);
    (b.good_circle = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,244,194,0.2)", "#FFCA4A"], [0, 1], 0, 0, 0, 0, 0, 47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        k(b.good_circle, new a.Rectangle(-47.5, -47.5, 95, 95), null);
    (b.flower2_good = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFCC66").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(.0156, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.6, -5.6, 11.3,
        11.3);
    (b.flower1_good = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFF99").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
        this.shape.setTransform(.017, -.0159);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-9.6, -9.6, 19.299999999999997, 19.299999999999997);
    (b._ch2_replace =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.frame_0 = function() {
                this.stop()
            };
            this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
            this.instance = new b.replace_character2_1;
            this.instance.parent = this;
            this.instance.setTransform(-76, -76, .5, .5);
            this.instance_1 = new b.replace_character2_2;
            this.instance_1.parent = this;
            this.instance_1.setTransform(-76, -76, .5, .5);
            this.instance_2 = new b.replace_character2_3;
            this.instance_2.parent = this;
            this.instance_2.setTransform(-76, -76, .5, .5);
            this.instance_3 =
                new b.replace_character2_4;
            this.instance_3.parent = this;
            this.instance_3.setTransform(-76, -76, .5, .5);
            this.instance_4 = new b.replace_character2_5;
            this.instance_4.parent = this;
            this.instance_4.setTransform(-76, -76, .5, .5);
            this.instance_5 = new b.replace_character2_6;
            this.instance_5.parent = this;
            this.instance_5.setTransform(-76, -76, .5, .5);
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
                },
                1).to({
                state: [{
                    t: this.instance_4
                }]
            }, 1).to({
                state: [{
                    t: this.instance_5
                }]
            }, 1).wait(1))
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-76, -76, 400, 500);
    (b._ch_replace = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6));
        this.instance = new b.replace_character1_1;
        this.instance.parent = this;
        this.instance.setTransform(-76, -76, .5, .5);
        this.instance_1 = new b.replace_character1_2;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(-76, -76, .5, .5);
        this.instance_2 = new b.replace_character1_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-76, -76, .5, .5);
        this.instance_3 = new b.replace_character1_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-76, -76, .5, .5);
        this.instance_4 = new b.replace_character1_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-76, -76, .5, .5);
        this.instance_5 = new b.replace_character1_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-76, -76,
            .5, .5);
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-76, -76, 400, 500);
    (b.bg_container = function(c, d, e) {
        this.initialize(c, d, e, {
            react: 1
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.play()
        };
        this.frame_11 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(10).call(this.frame_11).wait(1));
        this.bg = new b.bg;
        this.bg.name = "bg";
        this.bg.parent = this;
        this.timeline.addTween(a.Tween.get(this.bg).wait(2).to({
            regX: 240,
            regY: 155,
            x: 240,
            y: 155
        }, 0).wait(9).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 310);
    (b.symbol8_2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.cursor_p_1;
        this.instance.parent = this;
        this.instance.setTransform(106.05, 26.1, .1, .1006, 0, 0, 0, -3, -3.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#CCCCCC").ss(1, 1, 1).p("AxBjCQgyAAAAAyIAAG3QAAAyAyAAMAiDAAAQAyAAAAgyIAAm3QAAgygyAAI+8AAIAXiWIibCWg");
        this.shape.setTransform(1.8, 0);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.lf(["#FFFFFF", "rgba(255,255,255,0.851)"], [0, 1], -17.2, 22, -17.2, -21).s().p("AxBFZQgyAAAAgyIAAm3QAAgyAyAAIBEAAICaiWIgWCWIe7AAQAyAAAAAyIAAG3QAAAygyAAg");
        this.shape_1.setTransform(1.8,
            0);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = k(b.symbol8_2, new a.Rectangle(-113.2, -35.5, 230, 71), null);
    (b.silhouette = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.c = new b._ch2_replace;
        this.c.name = "c";
        this.c.parent = this;
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = k(b.silhouette, new a.Rectangle(-76, -76, 400, 500), null);
    (b.glitter_card = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.glitter_card_inner;
        this.instance.parent =
            this;
        this.instance.setTransform(0, 0, .4807, .4807);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: .7356,
            scaleY: .7356
        }, 1).to({
            scaleX: 1.4901,
            scaleY: 1.4901
        }, 1).to({
            scaleX: 2.1305,
            scaleY: 2.1305,
            rotation: -34.3349,
            alpha: .5
        }, 4).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-57.7, -57.7, 115.5, 115.5);
    (b.cursor = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.cursor_p;
        this.instance.parent = this;
        this.instance.setTransform(210, 135.75, .1846, .1863,
            0, 0, 0, 0, -.6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
            scaleX: .1844,
            y: 137.7
        }, 0).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(203, 129.8, 15.199999999999989, 15.099999999999994);
    (b.pointGlitterContainer = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.pointGlitter("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .0171, 2.2106, 90);
        this.instance_1 = new b.pointGlitter("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0,
            0, .0171, 2.2106);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-102.7, -102.8, 205.60000000000002, 205.5);
    (b.good_effect = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            exportRoot.positive_reaction ? this.play() : (this.stop(), this.visible = !1)
        };
        this.frame_5 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));
        this.instance = new b.flower2_good("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(21.35, 5.15, .7153, .7153);
        this.instance.filters = [new a.ColorFilter(.83, .83, .83, 1, 43.35, 43.35, 43.35, 0)];
        this.instance.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: 76.05,
            y: 1.65,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.flower2_good("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-14,
            -10.15);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            scaleX: 1.5357,
            scaleY: 1.5357,
            rotation: -360,
            x: -39.35,
            y: -44.65,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_2 = new b.flower1_good("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.8, -6.5, .7927, .7927);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            scaleX: 1.1049,
            scaleY: 1.1049,
            rotation: -360,
            x: 58.8,
            y: -51.65,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_3 = new b.flower2_good("synched",
            0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-14.45, 14.3, .7153, .7153);
        this.instance_3.filters = [new a.ColorFilter(.83, .83, .83, 1, 43.35, 43.35, 43.35, 0)];
        this.instance_3.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance_3).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: -48.25,
            y: 59.8,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_4 = new b.flower2_good("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(5.6, 19);
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            scaleX: 1.4861,
            scaleY: 1.4861,
            rotation: -360,
            x: 25.65,
            y: 70.8,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_5 = new b.flower2_good("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-20.9, 2.15);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            scaleX: 1.8929,
            scaleY: 1.8929,
            rotation: -360,
            x: -73.85,
            y: 6.65,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_6 = new b.flower1_good("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(.3, -12.15, .7812,
            .7812, -44.9992);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            scaleX: 1.3627,
            scaleY: 1.3627,
            rotation: -720,
            x: -3.2,
            y: -76.45,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_7 = new b.good_circle;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, .5578, .5578);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            scaleX: 1.7159,
            scaleY: 1.7159,
            alpha: .0508
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-84.4, -89.6,
        168.5, 171.1);
    (b.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___ = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.c = new b._ch_replace;
        this.c.name = "c";
        this.c.parent = this;
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype = k(b.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___, new a.Rectangle(-76, -76, 400, 500), null);
    (b.powder_rise_inner = function(c, d, e) {
        this.initialize(c, d, e, {
            r: 46,
            "-": 90
        });
        this.frame_0 = function() {
            this.rotation += Math.floor(14 * Math.random());
            this.gotoAndPlay(Math.floor(40 * Math.random() +
                42))
        };
        this.frame_90 = function() {
            this.gotoAndPlay("r")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(90).call(this.frame_90).wait(1));
        this.p_tgt = new b.pointGlitterContainer;
        this.p_tgt.name = "p_tgt";
        this.p_tgt.parent = this;
        this.p_tgt.setTransform(1.25, 186.8, .1658, .1658);
        this.p_tgt._off = !0;
        this.timeline.addTween(a.Tween.get(this.p_tgt).wait(70).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .566,
            scaleY: .566,
            y: 195.15
        }, 0).wait(1).to({
            scaleX: .5516,
            scaleY: .5516,
            x: 1.45,
            y: 203.85
        }, 0).wait(1).to({
            scaleX: .5535,
            scaleY: .5535,
            x: 1.35,
            y: 212.15,
            alpha: .4297
        }, 0).to({
            _off: !0
        }, 1).wait(17));
        this.instance = new b.powder_rise_core;
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(46).to({
            x: .6,
            y: 355.55
        }, 44).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-42.1, -18.2, 86.7, 375.5);
    (b.powder_rise = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.powder_rise_inner;
        this.instance.parent = this;
        this.instance.setTransform(63.5,
            12.8, .5, .5);
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
        this.instance_8.setTransform(3.5, 13.2, .5, .5);
        this.instance_9 = new b.powder_rise_inner;
        this.instance_9.parent = this;
        this.instance_9.setTransform(68.35,
            16.95, .8768, .8768);
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
        this.instance_13.parent = this;
        this.instance_13.setTransform(91.55, 6.65, .5, .5);
        this.instance_14 =
            new b.powder_rise_inner;
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
        this.instance_22.setTransform(-59.85,
            12.8, .5, .5);
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
        this.instance_27 =
            new b.powder_rise_inner;
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
        this.instance_34 = new b.powder_rise_inner;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-61.55, .25, .5, .5);
        this.instance_35 = new b.powder_rise_inner;
        this.instance_35.parent =
            this;
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
        this.instance_39.setTransform(-46.95,
            10.55, .8768, .8768);
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
    }).prototype = k(b.powder_rise, new a.Rectangle(-120.1, -8.8, 240.3, 17.700000000000003), null);
    (b.glitter_card_container =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.frame_12 = function() {
                this.stop()
            };
            this.timeline.addTween(a.Tween.get(this).wait(12).call(this.frame_12).wait(1));
            this.instance = new b.glitter_card;
            this.instance.parent = this;
            this.instance.setTransform(31.8, -142.55, .281, .281);
            this.instance._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance).wait(3).to({
                _off: !1
            }, 0).wait(10));
            this.instance_1 = new b.glitter_card;
            this.instance_1.parent = this;
            this.instance_1.setTransform(13.55, 95.25, .281, .281);
            this.instance_1._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
                _off: !1
            }, 0).wait(10));
            this.instance_2 = new b.glitter_card;
            this.instance_2.parent = this;
            this.instance_2.setTransform(-73.15, -81, .281, .281);
            this.instance_2._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_2).wait(3).to({
                _off: !1
            }, 0).wait(10));
            this.instance_3 = new b.glitter_card;
            this.instance_3.parent = this;
            this.instance_3.setTransform(-103.1, .35, .281, .281);
            this.instance_3._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_3).wait(3).to({
                    _off: !1
                },
                0).wait(10));
            this.instance_4 = new b.glitter_card;
            this.instance_4.parent = this;
            this.instance_4.setTransform(82.35, 122.15, .281, .281);
            this.instance_4._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_4).wait(6).to({
                _off: !1
            }, 0).wait(7));
            this.instance_5 = new b.glitter_card;
            this.instance_5.parent = this;
            this.instance_5.setTransform(20.3, -41.35, .281, .281);
            this.instance_5._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_5).wait(6).to({
                _off: !1
            }, 0).wait(7));
            this.instance_6 = new b.glitter_card;
            this.instance_6.parent =
                this;
            this.instance_6.setTransform(-59.1, 43.15, .281, .281);
            this.instance_6._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_6).wait(6).to({
                _off: !1
            }, 0).wait(7));
            this.instance_7 = new b.glitter_card;
            this.instance_7.parent = this;
            this.instance_7.setTransform(-10.5, .55, .281, .281);
            this.instance_7._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_7).wait(9).to({
                _off: !1
            }, 0).wait(4));
            this.instance_8 = new b.glitter_card;
            this.instance_8.parent = this;
            this.instance_8.setTransform(64.55, 23.3, .281, .281);
            this.instance_8._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_8).wait(9).to({
                _off: !1
            }, 0).wait(4));
            this.instance_9 = new b.glitter_card;
            this.instance_9.parent = this;
            this.instance_9.setTransform(1.45, -113.55, .281, .281);
            this.instance_9._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_9).wait(9).to({
                _off: !1
            }, 0).wait(4));
            this.instance_10 = new b.glitter_card;
            this.instance_10.parent = this;
            this.instance_10.setTransform(-71.3, -137.05, .281, .281);
            this.instance_10._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_10).wait(10).to({
                    _off: !1
                },
                0).wait(3));
            this.instance_11 = new b.glitter_card;
            this.instance_11.parent = this;
            this.instance_11.setTransform(84.6, -118.65, .281, .281);
            this.instance_11._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_11).wait(10).to({
                _off: !1
            }, 0).wait(3));
            this.instance_12 = new b.glitter_card;
            this.instance_12.parent = this;
            this.instance_12.setTransform(-69.25, 110.1, .281, .281);
            this.instance_12._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_12).wait(10).to({
                _off: !1
            }, 0).wait(3));
            this.instance_13 = new b.glitter_card;
            this.instance_13.parent = this;
            this.instance_13.setTransform(90.45, -64.95, .281, .281);
            this.instance_13._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_13).wait(11).to({
                _off: !1
            }, 0).wait(2));
            this.instance_14 = new b.glitter_card;
            this.instance_14.parent = this;
            this.instance_14.setTransform(54.05, -5.1, .281, .281);
            this.instance_14._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_14).wait(11).to({
                _off: !1
            }, 0).wait(2));
            this.instance_15 = new b.glitter_card;
            this.instance_15.parent = this;
            this.instance_15.setTransform(69.65,
                55.75, .281, .281);
            this.instance_15._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_15).wait(11).to({
                _off: !1
            }, 0).wait(2));
            this.instance_16 = new b.glitter_card;
            this.instance_16.parent = this;
            this.instance_16.setTransform(-56.05, 47.35, .281, .281);
            this.instance_16._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_16).wait(11).to({
                _off: !1
            }, 0).wait(2));
            this.instance_17 = new b.glitter_card;
            this.instance_17.parent = this;
            this.instance_17.setTransform(-62.45, -43.9, .281, .281);
            this.instance_17._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance_17).wait(11).to({
                _off: !1
            }, 0).wait(2));
            this.instance_18 = new b.glitter_card_range;
            this.instance_18.parent = this;
            this.timeline.addTween(a.Tween.get(this.instance_18).wait(13))
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-120, -150, 240, 300);
    (b.chs = function(c, d, e) {
        this.initialize(c, d, e, {
            good: 1,
            nod: 12
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_2 = function() {
            this.chp.c.gotoAndStop(exportRoot.nextEmo - 1)
        };
        this.frame_11 = function() {
            this.stop()
        };
        this.frame_12 = function() {
            this.chp.c.gotoAndStop(exportRoot.nextEmo - 1)
        };
        this.frame_20 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(9).call(this.frame_11).wait(1).call(this.frame_12).wait(8).call(this.frame_20).wait(1));
        this.chp = new b.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___;
        this.chp.name = "chp";
        this.chp.parent = this;
        this.chp.setTransform(0, 16);
        this.timeline.addTween(a.Tween.get(this.chp).to({
            y: 22.8
        }, 1, a.Ease.get(1)).wait(1).to({
            regX: 124,
            regY: 174,
            x: 124,
            y: 184.1
        }, 0).wait(1).to({
            y: 176.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: 124,
            regY: 174,
            x: 124,
            y: 175.15
        }, 0).wait(1).to({
            y: 178.75
        }, 0).wait(1).to({
            y: 184.7
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 19.05
        }, 0).wait(1).to({
            regX: 124,
            regY: 174,
            x: 124,
            y: 191.35
        }, 0).wait(1).to({
            y: 190.3
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 16
        }, 0).wait(2).to({
            regX: 124,
            regY: 174,
            x: 124,
            y: 195
        }, 0).wait(1).to({
            y: 198
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 25
        }, 0).to({
            y: 16
        }, 5, a.Ease.get(1)).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-76, -76, 400, 525);
    (b.event_gift_chance_extra = function(c, d, e) {
        this.initialize(c, d, e, {
            next: 11,
            shutter: 52
        });
        this.frame_0 = function() {
            this.push = function() {
                this.gotoAndPlay("shutter")
            };
            this.jump = function() {
                window.location.href = exportRoot._url;
                this.sender.gotoAndPlay(1)
            };
            var h = window.im_cjs;
            this._url = h._url;
            this.card_name1 = h.card_name1;
            this.rare1 = h.rare1;
            this.card_att1 = h.card_att1;
            this.card_def1 = h.card_def1;
            this.card_cost1 = h.card_cost1;
            this.idol_comment1_1 = h.idol_comment1_1;
            this.idol_comment1_2 = h.idol_comment1_2;
            this.idol_comment2_1 = h.idol_comment2_1;
            this.idol_comment2_2 = h.idol_comment2_2;
            this.idol_comment3_1 = h.idol_comment3_1;
            this.idol_comment3_2 = h.idol_comment3_2;
            this.character_face1 = h.character_face1;
            this.character_face2 = h.character_face2;
            this.character_face3 = h.character_face3;
            this.positive_reaction = h.positive_reaction;
            this.tf1 = this.card_name1 + (this.rare1 ? this.rare1 : "") + "\u304c\u6240\u5c5e!";
            this.tf2 = "\u653b : " + this.card_att1;
            this.tf3 = "\u5b88 : " + this.card_def1;
            this.tf4 = "\uff7a\uff7d\uff84 : " + this.card_cost1;
            this.nextEmo = 0;
            this.key_flag = 1
        };
        this.frame_1 = function() {
            this.ch.chp.c.gotoAndStop(exportRoot.character_face1)
        };
        this.frame_6 = function() {
            this.sound_mc.gotoAndStop("appear")
        };
        this.frame_7 = function() {
            this.btn.on("click", function() {
                this.gotoAndPlay("next")
            }, this, !0);
            this.m1.text = exportRoot.idol_comment1_1;
            this.m2.text = exportRoot.idol_comment1_2
        };
        this.frame_10 = function() {
            this.stop()
        };
        this.frame_12 = function() {};
        this.frame_21 = function() {
            this.sound_mc.gotoAndStop("appear")
        };
        this.frame_28 = function() {
            this.ch2.c.gotoAndStop(exportRoot.character_face2 - 1);
            exportRoot.positive_reaction && this.bg.gotoAndPlay("react");
            this.sound_mc.gotoAndStop("flower")
        };
        this.frame_29 = function() {
            this.m2_1.text = exportRoot.idol_comment2_1;
            this.m2_2.text = exportRoot.idol_comment2_2
        };
        this.frame_45 = function() {
            exportRoot.nextEmo = exportRoot.character_face3;
            this.ch.gotoAndPlay("nod")
        };
        this.frame_47 = function() {
            this.sound_mc.gotoAndStop("appear");
            this.m1.text = exportRoot.idol_comment3_1;
            this.m2.text = exportRoot.idol_comment3_2
        };
        this.frame_51 = function() {
            this.stop();
            this.btn.on("click", function() {
                this.push()
            }, this, !0)
        };
        this.frame_52 = function() {
            this.play()
        };
        this.frame_61 = function() {
            this.sound_mc.gotoAndStop("idol_get")
        };
        this.frame_78 = function() {
            this.stop();
            this.btn.on("click", function() {
                this.jump()
            }, this, !0);
            this.m3_1.text = exportRoot.tf1;
            this.m3_2.text = exportRoot.tf2;
            this.m3_3.text = exportRoot.tf3;
            this.m3_4.text = exportRoot.tf4
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(1).call(this.frame_7).wait(3).call(this.frame_10).wait(2).call(this.frame_12).wait(9).call(this.frame_21).wait(7).call(this.frame_28).wait(1).call(this.frame_29).wait(16).call(this.frame_45).wait(2).call(this.frame_47).wait(4).call(this.frame_51).wait(1).call(this.frame_52).wait(9).call(this.frame_61).wait(17).call(this.frame_78).wait(1));
        this.sound_mc = new b.sound_mc;
        this.sound_mc.name = "sound_mc";
        this.sound_mc.parent = this;
        this.sound_mc.setTransform(-25.5, -24.5, 1, 1, 0, 0, 0, 5.5, 5.5);
        this.timeline.addTween(a.Tween.get(this.sound_mc).wait(79));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Egx/A3eMAAAhu7MBj/AAAMAAABu7gAyvYOMAlfAAAMAAAgwbMglfAAAg");
        this.shape.setTransform(120, 155);
        this.timeline.addTween(a.Tween.get(this.shape).wait(79));
        this.sender = new b.sender;
        this.sender.name = "sender";
        this.sender.parent = this;
        this.sender.setTransform(-100,
            0);
        this.sender._off = !0;
        this.timeline.addTween(a.Tween.get(this.sender).wait(78).to({
            _off: !1
        }, 0).wait(1));
        this.instance = new b.flash;
        this.instance.parent = this;
        this.instance.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance.alpha = .3008;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(59).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: .8984
        }, 0).to({
            _off: !0
        }, 1).wait(18));
        this.sender_1 = new b.sender;
        this.sender_1.name = "sender_1";
        this.sender_1.parent = this;
        this.sender_1.setTransform(-100,
            0);
        this.sender_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.sender_1).wait(78).to({
            _off: !1
        }, 0).wait(1));
        this.instance_1 = new b.tie;
        this.instance_1.parent = this;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(60).to({
            _off: !1
        }, 0).wait(19));
        this.m3_4 = new a.Text("", "12px 'Arial'", "#333333");
        this.m3_4.name = "m3_4";
        this.m3_4.lineHeight = 15;
        this.m3_4.lineWidth = 260;
        this.m3_4.parent = this;
        this.m3_4.setTransform(11, 273);
        this.m3_3 = new a.Text("", "12px 'Arial'", "#333333");
        this.m3_3.name =
            "m3_3";
        this.m3_3.lineHeight = 15;
        this.m3_3.lineWidth = 260;
        this.m3_3.parent = this;
        this.m3_3.setTransform(11, 258);
        this.m3_2 = new a.Text("", "12px 'Arial'", "#333333");
        this.m3_2.name = "m3_2";
        this.m3_2.lineHeight = 15;
        this.m3_2.lineWidth = 260;
        this.m3_2.parent = this;
        this.m3_2.setTransform(11, 243);
        this.m3_1 = new a.Text("", "12px 'Arial'", "#333333");
        this.m3_1.name = "m3_1";
        this.m3_1.lineHeight = 15;
        this.m3_1.lineWidth = 260;
        this.m3_1.parent = this;
        this.m3_1.setTransform(11, 228);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                    t: this.m3_1
                },
                {
                    t: this.m3_2
                }, {
                    t: this.m3_3
                }, {
                    t: this.m3_4
                }
            ]
        }, 78).wait(1));
        this.instance_2 = new b.cursor;
        this.instance_2.parent = this;
        this.instance_2.setTransform(223.2, 287.2, .6429, .6408, 0, 0, 0, 210, 135.9);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(78).to({
            _off: !1
        }, 0).wait(1));
        this.instance_3 = new b.text_win2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(120, 262.25, 1, .0351, 0, 0, 0, 115, 44.1);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(75).to({
                _off: !1
            },
            0).to({
            regY: 45,
            scaleY: .8759,
            y: 260.4,
            alpha: .8984
        }, 2, a.Ease.get(-1)).wait(1).to({
            scaleY: .8315
        }, 0).wait(1));
        this.instance_4 = new b.glitter_card_container;
        this.instance_4.parent = this;
        this.instance_4.setTransform(120, 155);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(75).to({
            _off: !1
        }, 0).wait(4));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(66).to({
            graphics: d,
            x: 120,
            y: 155
        }).wait(12).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(1));
        this.instance_5 = new b.card_reflect_whole;
        this.instance_5.parent = this;
        this.instance_5.setTransform(119.55, 425.3, 1.2653, 1, 0, 0, -29.8292);
        this.instance_5._off = !0;
        d = [this.instance_5];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(66).to({
            _off: !1
        }, 0).to({
            scaleX: 1.2649,
            skewY: -29.8255,
            y: 81.1
        }, 5, a.Ease.get(-1)).to({
            scaleX: 1.2671,
            skewY: -29.8784,
            y: -184.75
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_6 = new b.white_rect;
        this.instance_6.parent =
            this;
        this.instance_6.setTransform(121, 156.55, 1, 1, 0, 0, 0, 130, 164.5);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(60).to({
            _off: !1
        }, 0).to({
            alpha: .0117
        }, 15, a.Ease.quadInOut).wait(4));
        this.instance_7 = new b.card;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 4.8, 1, 1, 0, 0, 0, 0, -.2);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(60).to({
            _off: !1
        }, 0).wait(19));
        this.m2_2 = new a.Text("", "14px 'Arial'", "#333333");
        this.m2_2.name = "m2_2";
        this.m2_2.lineHeight = 18;
        this.m2_2.lineWidth = 260;
        this.m2_2.parent = this;
        this.m2_2.setTransform(12, 32);
        this.m2_1 = new a.Text("", "14px 'Arial'", "#333333");
        this.m2_1.name = "m2_1";
        this.m2_1.lineHeight = 18;
        this.m2_1.lineWidth = 260;
        this.m2_1.parent = this;
        this.m2_1.setTransform(12, 14);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.m2_1
            }, {
                t: this.m2_2
            }]
        }, 28).to({
            state: []
        }, 24).wait(27));
        this.instance_8 = new b.fkds2;
        this.instance_8.parent = this;
        this.instance_8.setTransform(160.85, 74.85, .3282,
            .3282, 0, 0, 0, -.1, -.1);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(27).to({
            _off: !1
        }, 0).to({
            scaleX: 1.037,
            scaleY: 1.037,
            x: 119.9,
            y: 22.9
        }, 2, a.Ease.get(1)).to({
            scaleX: .9769,
            scaleY: .9769,
            x: 121.9,
            y: 25.9
        }, 2, a.Ease.get(-1)).wait(1).to({
            regX: -1,
            regY: 15,
            scaleX: .9815,
            scaleY: .9815,
            x: 120.75,
            y: 40.45
        }, 0).wait(1).to({
            scaleX: .9958,
            scaleY: .9958,
            x: 120.15,
            y: 40.1
        }, 0).wait(1).to({
            regX: -.1,
            regY: -.1,
            scaleX: 1,
            scaleY: 1,
            x: 120.9,
            y: 24.9
        }, 0).wait(18).to({
            scaleX: .7416,
            scaleY: .7416,
            x: 140.9,
            y: 54.9,
            alpha: .0508
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(22));
        this.m2 = new a.Text("", "14px 'Arial'", "#333333");
        this.m2.name = "m2";
        this.m2.lineHeight = 18;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(14, 232);
        this.m1 = new a.Text("", "14px 'Arial'", "#333333");
        this.m1.name = "m1";
        this.m1.lineHeight = 18;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(14, 214);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.m1,
                p: {
                    x: 14,
                    y: 214
                }
            }, {
                t: this.m2,
                p: {
                    x: 14,
                    y: 232
                }
            }]
        }, 7).to({
                state: []
            },
            4).to({
            state: [{
                t: this.m1,
                p: {
                    x: 16,
                    y: 237
                }
            }, {
                t: this.m2,
                p: {
                    x: 16,
                    y: 255
                }
            }]
        }, 36).to({
            state: []
        }, 5).wait(27));
        this.instance_9 = new b.symbol8_2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(119.85, 175.9, .2006, .2006, 0, 0, 0, -.2, 0);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(4).to({
            _off: !1
        }, 0).to({
            regX: -.1,
            regY: -.1,
            scaleX: 1.0416,
            scaleY: 1.0416,
            x: 119.9,
            y: 229.9
        }, 2).to({
            scaleX: .9815,
            scaleY: .9815,
            y: 223.9
        }, 2).to({
            scaleX: 1,
            scaleY: 1,
            y: 224.9
        }, 2).to({
            scaleX: .8844,
            scaleY: .8844,
            y: 204.9,
            alpha: .0508
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(31).to({
            _off: !1,
            regX: -.2,
            regY: 0,
            scaleX: .2006,
            scaleY: .2006,
            x: 119.85,
            y: 199.9,
            alpha: 1
        }, 0).to({
            regX: -.1,
            regY: -.1,
            scaleX: 1.0416,
            scaleY: 1.0416,
            x: 119.9,
            y: 253.9
        }, 2).to({
            scaleX: .9815,
            scaleY: .9815,
            y: 247.9
        }, 2).to({
            scaleX: 1,
            scaleY: 1,
            y: 248.9
        }, 2).wait(1).to({
            scaleX: .8844,
            scaleY: .8844,
            y: 218.9,
            alpha: .0508
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(22));
        this.instance_10 = new b.good_effect;
        this.instance_10.parent = this;
        this.instance_10.setTransform(170.45, 95.45,
            1.5286, 1.5286, 0, 0, 0, .3, .3);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(28).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 19).wait(32));
        this.instance_11 = new b.white_rect;
        this.instance_11.parent = this;
        this.instance_11.setTransform(121, 156.55, 1, 1, 0, 0, 0, 130, 164.5);
        this.instance_11.alpha = .0117;
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(52).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 7, a.Ease.quadIn).to({
            _off: !0
        }, 1).wait(19));
        this.ch2 = new b.silhouette;
        this.ch2.name =
            "ch2";
        this.ch2.parent = this;
        this.ch2.setTransform(230, 14);
        this.ch2._off = !0;
        this.timeline.addTween(a.Tween.get(this.ch2).wait(11).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 124,
            regY: 174,
            x: 347.85,
            y: 188
        }, 0).wait(1).to({
            x: 329.5
        }, 0).wait(1).to({
            x: 301.5
        }, 0).wait(1).to({
            x: 269.35
        }, 0).wait(1).to({
            x: 238.8
        }, 0).wait(1).to({
            x: 213.35
        }, 0).wait(1).to({
            x: 194.25
        }, 0).wait(1).to({
            x: 181.4
        }, 0).wait(1).to({
            x: 174.2
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 48,
            y: 14
        }, 0).wait(1).to({
            regX: 124,
            regY: 174,
            x: 172.35,
            y: 188
        }, 0).wait(1).to({
            x: 173.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 50,
            y: 14
        }, 0).wait(3).to({
            y: -10
        }, 3, a.Ease.get(1)).to({
            y: 17
        }, 3, a.Ease.get(-1)).wait(1).to({
            regX: 124,
            regY: 174,
            x: 174,
            y: 190.55
        }, 0).wait(1).to({
            y: 188.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 50,
            y: 14
        }, 0).wait(17).to({
            regX: 124,
            regY: 174,
            x: 174,
            y: 188
        }, 0).wait(6).to({
            regX: 0,
            regY: 0,
            x: 50,
            y: 14
        }, 0).to({
            _off: !0
        }, 1).wait(19));
        this.ch = new b.chs;
        this.ch.name = "ch";
        this.ch.parent = this;
        this.ch.setTransform(120, 177.75, 1, 1, 0, 0, 0, 120, 160);
        this.ch.alpha = .6016;
        this.ch._off = !0;
        this.timeline.addTween(a.Tween.get(this.ch).wait(1).to({
                _off: !1
            },
            0).to({
            y: 162.35,
            alpha: 1
        }, 3, a.Ease.get(1)).to({
            y: 166.75
        }, 3, a.Ease.get(1)).wait(5).to({
            regX: 124,
            regY: 186.5,
            scaleX: .9964,
            scaleY: .9964,
            x: 121.75,
            y: 193.6
        }, 0).wait(1).to({
            scaleX: .9857,
            scaleY: .9857,
            x: 114.95,
            y: 194.75
        }, 0).wait(1).to({
            scaleX: .9694,
            scaleY: .9694,
            x: 104.6,
            y: 196.45
        }, 0).wait(1).to({
            scaleX: .9507,
            scaleY: .9507,
            x: 92.7,
            y: 198.4
        }, 0).wait(1).to({
            scaleX: .9329,
            scaleY: .9329,
            x: 81.35,
            y: 200.3
        }, 0).wait(1).to({
            scaleX: .9181,
            scaleY: .9181,
            x: 71.95,
            y: 201.8
        }, 0).wait(1).to({
            scaleX: .9069,
            scaleY: .9069,
            x: 64.85,
            y: 203
        }, 0).wait(1).to({
            scaleX: .8994,
            scaleY: .8994,
            x: 60.15,
            y: 203.8
        }, 0).wait(1).to({
            scaleX: .8952,
            scaleY: .8952,
            x: 57.45,
            y: 204.2
        }, 0).wait(1).to({
            regX: 120,
            regY: 159.7,
            scaleX: .8939,
            scaleY: .8939,
            x: 52.95,
            y: 180.7
        }, 0).wait(1).to({
            regX: 124,
            regY: 186.5,
            scaleX: .8945,
            scaleY: .8945,
            x: 57.05,
            y: 204.45
        }, 0).wait(1).to({
            scaleX: .8971,
            scaleY: .8971,
            x: 59.2,
            y: 203.7
        }, 0).wait(1).to({
            scaleX: .8994,
            scaleY: .8994,
            x: 61.15,
            y: 203
        }, 0).wait(1).to({
            regX: 120,
            regY: 159.7,
            scaleX: .9,
            scaleY: .9,
            x: 58,
            y: 178.75
        }, 0).wait(28).to({
            regX: 124,
            regY: 186.5,
            x: 61.6,
            y: 202.85
        }, 0).wait(6).to({
            regX: 120,
            regY: 159.7,
            x: 58,
            y: 178.75
        }, 0).to({
            _off: !0
        }, 1).wait(19));
        this.instance_12 = new b.powder_rise;
        this.instance_12.parent = this;
        this.instance_12.setTransform(119.45, 333.5, 1, 1, 174.9999, 0, 0, 0, 6.5);
        this.timeline.addTween(a.Tween.get(this.instance_12).to({
            _off: !0
        }, 60).wait(19));
        this.bg = new b.bg_container;
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(240, 155, 1, 1, 0, 0, 0, 240, 155);
        this.timeline.addTween(a.Tween.get(this.bg).wait(11).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
                regX: 240,
                regY: 155,
                x: 225.7,
                y: 155
            },
            0).wait(1).to({
            x: 194.9
        }, 0).wait(1).to({
            x: 158.9
        }, 0).wait(1).to({
            x: 123.35
        }, 0).wait(1).to({
            x: 91
        }, 0).wait(1).to({
            x: 63.15
        }, 0).wait(1).to({
            x: 40.4
        }, 0).wait(1).to({
            x: 22.9
        }, 0).wait(1).to({
            x: 10.6
        }, 0).wait(1).to({
            x: 3.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -239,
            y: 0
        }, 0).wait(1).to({
            regX: 240,
            regY: 155,
            x: 2,
            y: 155
        }, 0).wait(1).to({
            x: 4.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -234,
            y: 0
        }, 0).wait(34).to({
            _off: !0
        }, 1).wait(19));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(120, 154.55, 1, 1, 0, 0, 0, 127,
            163.5);
        this.timeline.addTween(a.Tween.get(this.btn).wait(79));
        this.replace_character2 = new b.silhouette;
        this.replace_character2.name = "replace_character2";
        this.replace_character2.parent = this;
        this.replace_character2.setTransform(-180, .25, .5, .5, 0, 0, 0, 0, .5);
        this.timeline.addTween(a.Tween.get(this.replace_character2).to({
            _off: !0
        }, 1).wait(78));
        this.replace_character1 = new b.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___;
        this.replace_character1.name = "replace_character1";
        this.replace_character1.parent = this;
        this.replace_character1.setTransform(-179.95, -180, .4995, .5, 0, 0, 0, .1, 0);
        this.timeline.addTween(a.Tween.get(this.replace_character1).to({
            _off: !0
        }, 1).wait(78));
        this.bg_1 = new b.bg;
        this.bg_1.name = "bg_1";
        this.bg_1.parent = this;
        this.bg_1.setTransform(-170, 364.95, .25, .25, 0, 0, 0, 0, -.2);
        this.timeline.addTween(a.Tween.get(this.bg_1).to({
            _off: !0
        }, 1).wait(78));
        this.instance_13 = new b.card;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-169.75, 199.95, .5, .4999, 0, 0, 0, .5, -.1);
        this.timeline.addTween(a.Tween.get(this.instance_13).to({
                _off: !0
            },
            1).wait(78))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-119, -63, 673, 573);
    b.properties = {
        id: "event_gift_chance_extra",
        width: 240,
        height: 310,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1,
        manifest: [{
            src: "images/replace_bg.png",
            id: "event_gift_chance_extra_replace_bg"
        }, {
            src: "images/replace_card.jpg",
            id: "event_gift_chance_extra_replace_card"
        }, {
            src: "images/replace_character1_1.png",
            id: "event_gift_chance_extra_replace_character1_1"
        }, {
            src: "images/replace_character1_2.png",
            id: "event_gift_chance_extra_replace_character1_2"
        }, {
            src: "images/replace_character1_3.png",
            id: "event_gift_chance_extra_replace_character1_3"
        }, {
            src: "images/replace_character1_4.png",
            id: "event_gift_chance_extra_replace_character1_4"
        }, {
            src: "images/replace_character1_5.png",
            id: "event_gift_chance_extra_replace_character1_5"
        }, {
            src: "images/replace_character1_6.png",
            id: "event_gift_chance_extra_replace_character1_6"
        }, {
            src: "images/replace_character2_1.png",
            id: "event_gift_chance_extra_replace_character2_1"
        }, {
            src: "images/replace_character2_2.png",
            id: "event_gift_chance_extra_replace_character2_2"
        }, {
            src: "images/replace_character2_3.png",
            id: "event_gift_chance_extra_replace_character2_3"
        }, {
            src: "images/replace_character2_4.png",
            id: "event_gift_chance_extra_replace_character2_4"
        }, {
            src: "images/replace_character2_5.png",
            id: "event_gift_chance_extra_replace_character2_5"
        }, {
            src: "images/replace_character2_6.png",
            id: "event_gift_chance_extra_replace_character2_6"
        }, {
            src: "images/sp_glitter_card.png",
            id: "event_gift_chance_extra_sp_glitter_card"
        }],
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
        this.getChildAt(0).gotoAndStop(b.properties.fps *
            c / 1E3)
    };
    f.getDuration = function() {
        return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
    };
    f.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / b.properties.fps * 1E3
    };
    g.bootcompsLoaded = g.bootcompsLoaded || [];
    g.bootstrapListeners || (g.bootstrapListeners = []);
    g.bootstrapCallback = function(c) {
        g.bootstrapListeners.push(c);
        if (0 < g.bootcompsLoaded.length)
            for (var d = 0; d < g.bootcompsLoaded.length; ++d) c(g.bootcompsLoaded[d])
    };
    g.compositions = g.compositions || {};
    g.compositions.event_gift_chance_extra = {
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
            return l
        }
    };
    g.compositionLoaded = function(c) {
        g.bootcompsLoaded.push(c);
        for (var d = 0; d < g.bootstrapListeners.length; d++) g.bootstrapListeners[d](c)
    };
    g.getComposition = function(c) {
        return g.compositions[c]
    };
    g.makeResponsive = function(c, d, e, h, u) {
        function x() {
            var n = b.properties.width,
                p = b.properties.height,
                q = window.innerWidth,
                r = window.innerHeight,
                t = window.devicePixelRatio ||
                1,
                v = q / n,
                w = r / p,
                m = 1;
            if (c)
                if ("width" == d && y == q || "height" == d && z == r) m = A;
                else if (e) 1 == h ? m = Math.min(v, w) : 2 == h && (m = Math.max(v, w));
            else if (q < n || r < p) m = Math.min(v, w);
            u[0].width = n * t * m;
            u[0].height = p * t * m;
            u.forEach(function(B) {
                B.style.width = n * m + "px";
                B.style.height = p * m + "px"
            });
            stage.scaleX = t * m;
            stage.scaleY = t * m;
            y = q;
            z = r;
            A = m;
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