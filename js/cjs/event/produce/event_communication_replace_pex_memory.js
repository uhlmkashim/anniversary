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
    (b.change = function() {
        this.initialize(h.event_communication_replace_pex_memory_change)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 200, 48);
    (b._continue =
        function() {
            this.initialize(h.event_communication_replace_pex_memory__continue)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 400, 48);
    (b.fp_kirakira = function() {
        this.initialize(h.event_communication_replace_pex_memory_fp_kirakira)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 20, 20);
    (b.heart_white = function() {
        this.initialize(h.event_communication_replace_pex_memory_heart_white)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 30, 30);
    (b.replace_bg = function() {
        this.initialize(h.event_communication_replace_pex_memory_replace_bg)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.replace_character1 = function() {
        this.initialize(h.event_communication_replace_pex_memory_replace_character1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 536);
    (b.replace_character2 = function() {
        this.initialize(h.event_communication_replace_pex_memory_replace_character2)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 536);
    (b.replace_character3 = function() {
        this.initialize(h.event_communication_replace_pex_memory_replace_character3)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 536);
    (b.replace_character4 = function() {
        this.initialize(h.event_communication_replace_pex_memory_replace_character4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 536);
    (b.replace_name = function() {
        this.initialize(h.event_communication_replace_pex_memory_replace_name)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 150, 46);
    (b.replace_name2 = function() {
        this.initialize(h.event_communication_replace_pex_memory_replace_name2)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 150, 46);
    (b.sp_kirakira = function() {
        this.initialize(h.event_communication_replace_pex_memory_sp_kirakira)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 40, 40);
    (b.sp_textRes1 = function() {
        this.initialize(h.event_communication_replace_pex_memory_sp_textRes1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_textRes2 = function() {
        this.initialize(h.event_communication_replace_pex_memory_sp_textRes2)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_textRes2_b = function() {
        this.initialize(h.event_communication_replace_pex_memory_sp_textRes2_b)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_textRes2_w = function() {
        this.initialize(h.event_communication_replace_pex_memory_sp_textRes2_w)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_textRes3 = function() {
        this.initialize(h.event_communication_replace_pex_memory_sp_textRes3)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_textRes3_b = function() {
        this.initialize(h.event_communication_replace_pex_memory_sp_textRes3_b)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.sp_textRes3_w = function() {
        this.initialize(h.event_communication_replace_pex_memory_sp_textRes3_w)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 380, 156);
    (b.white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvUAMAAAgn/MAlfAAAMAAAAn/g");
        this.shape.setTransform(120, 128);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.white, new a.Rectangle(0, 0, 240, 256), null);
    (b.sound_mc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop();
            this.visible = !1
        };
        this.frame_1 = function() {
            window.se_play("se_109");
            this.gotoAndStop(0)
        };
        this.frame_2 = function() {
            window.se_play("se_114");
            this.gotoAndStop(0)
        };
        this.frame_3 = function() {
            window.se_play("se_072");
            this.gotoAndStop(0)
        };
        this.frame_4 = function() {
            window.se_play("");
            this.gotoAndStop(0)
        };
        this.frame_5 = function() {
            window.se_play("");
            this.gotoAndStop(0)
        };
        this.frame_6 = function() {
            window.se_play("");
            this.gotoAndStop(0)
        };
        this.frame_7 = function() {
            window.se_play("");
            this.gotoAndStop(0)
        };
        this.frame_8 = function() {
            window.se_play("se_139");
            this.gotoAndStop(0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFCC").s().p("AhFBGIAAiLICLAAIAACLg");
        this.shape.setTransform(7, 7);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(8))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 14, 14);
    (b.replace_bg_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_bg;
        this.instance.parent = this;
        this.instance.setTransform(0, -27, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.replace_bg_1,
        new a.Rectangle(0, -27, 240, 310), null);
    (b.loght_gra = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AjmO5Igy2BIAoAFIAxWCgAjhrUID3gJIAxWBIj3AJgACVu7IBTgCIAxWBIhTADg");
        this.shape.setTransform(-2.875, 71.9727, 1, 1.8018);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-44.2, -100.7, 88.5, 345.4);
    (b.gr_tapchange = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.change;
        this.instance.parent =
            this;
        this.instance.setTransform(-52, -12, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.gr_tapchange, new a.Rectangle(-54, -12, 108, 24), null);
    (b.dark = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvUAMAAAgn/MAlfAAAMAAAAn/g");
        this.shape.setTransform(120, 128);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.dark, new a.Rectangle(0, 0, 240, 256), null);
    (b.continue_core = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b._continue;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .3225, .3219);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.continue_core, new a.Rectangle(0, 0, 129, 15.5), null);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp = function(c, d, e) {
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
    }).prototype = g(b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p = function(c, d, e) {
        this.initialize(c,
            d, e, {});
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
    (b.\u30b7\u30f3\u30dc\u30eb100 = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb100, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.\u30b7\u30f3\u30dc\u30eb7 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["rgba(255,255,255,0)", "#FFFFFF", "#FFFFFF", "rgba(255,255,255,0)"], [0, .043, .961, 1], 0, 43.5, 0, -43.5).s().p("A13E7IAAp1MArvAAAIAAJ1g");
        this.shape.setTransform(0, -2);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb7, new a.Rectangle(-140, -33.5, 280, 63), null);
    (b.squear = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#808080").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape.setTransform(.725, .725);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.squear, new a.Rectangle(0, 0, 1.5, 1.5), null);
    (b.shape65_star_b = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b.heart_white;
        this.instance.parent = this;
        this.instance.setTransform(-7.75, -7.95, .4, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-8.2, -8.4, 16.7, 16.700000000000003);
    (b.shape65_star = function(c, d, e) {
        this.initialize(c, d, e, {});
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-8.2, -8.4, 16.7, 16.700000000000003);
    (b.replace_name2_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_name2;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.replace_name2_1, new a.Rectangle(0, 0, 75, 23), null);
    (b.replace_name_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_name;
        this.instance.parent =
            this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.replace_name_1, new a.Rectangle(0, 0, 75, 23), null);
    (b.replace_effect8 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect7 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.frame_0 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect6 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect5 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect4 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.6, -91.9, 146.3, 105.9);
    (b.replace_effect3 = function(c, d, e) {
        this.initialize(c,
            d, e, {
                L: 1,
                R: 4
            });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-407.6, -407.3, 815.3, 814.7);
    (b.replace_effect2 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-38.7, -38.7, 77.5, 77.5);
    (b.replace_effect1 = function(c, d,
        e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-69.6, -85, 137.3, 99);
    (b.marker = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#CC0000").s().p("AkkAAIEkkkIElEkIklElg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        g(b.marker, new a.Rectangle(-29.3, -29.3, 58.7, 58.7), null);
    (b.lvup_ring = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,250,129,0.051)", "#FFFFFF"], [0, 1], 0, 0, 0, 0, 0, 67.4).s().p("AnWHWQjCjDAAkTQAAkSDCjEQDEjCESAAQETAADDDCQDDDEAAESQAAETjDDDQjDDDkTAAQkSAAjEjDg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["rgba(243,255,0,0.051)", "#FFFFFF"], [0, 1], 0, 0, 0, 0, 0, 75.7).s().p("AoPIPQjajZAAk2QAAk0DajbQDbjaE0AAQE2AADZDaQDbDbAAE0QAAE2jbDZQjZDbk2AAQk0AAjbjbg");
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = g(b.lvup_ring, new a.Rectangle(-74.6, -74.6, 149.3, 149.3), null);
    (b.lovemax_ring = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,0,252,0.047)", "#FFFFFF"], [0, 1], 0, 0, 0, 0, 0, 67.4).s().p("AnWHWQjCjDAAkTQAAkSDCjEQDEjCESAAQETAADDDCQDDDEAAESQAAETjDDDQjDDDkTAAQkSAAjEjDg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["rgba(229,0,255,0.047)",
            "#FFFFFF"
        ], [0, 1], 0, 0, 0, 0, 0, 75.7).s().p("AoPIPQjajZAAk2QAAk0DajbQDbjaE0AAQE2AADZDaQDbDbAAE0QAAE2jbDZQjZDbk2AAQk0AAjbjbg");
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = g(b.lovemax_ring, new a.Rectangle(-74.6, -74.6, 149.3, 149.3), null);
    (b.effect_grip = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF66CC").s().p("AhPBQIAAifICfAAIAACfg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.effect_grip, new a.Rectangle(-8, -8, 16, 16), null);
    (b.efa_\uff77\uff97\uff77\uff97_pp = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b.efa_\uff77\uff97\uff77\uff97_pp,
        new a.Rectangle(-120, -150, 240, 300), null);
    (b._window_shadow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AxJGpQgmAAgUgRQARAHAZAAMAiNAAAQBOAAAChLIAAAEQAABRhRAAgAl8lxQgTgmgJgRIAFAGQAJAMAaA2QALAVALAQQgTgVgPghg");
        this.shape.setTransform(118.95, 49.975);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.463)").s().p("AxEG0Qg1AAgUghIAIAGQAUAYAtAAMAh8AAAQBUAAAAhTIAAoKQAAgOgDgPIgDgQQAIAVAAAYIAAIKQAABWhWAAgAlJkpIAAAAQgRgUgPgeQgag4gJgLQgGgIgHgGIgGgHQAKAHALANQAIAKAcA5QAUAoAVAUg");
        this.shape_1.setTransform(118.45, 49.425);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AxGGvQguAAgUgZIAHAFQAVASAmAAMAh7AAAQBSAAgBhRIAAgFIAAoiQADAPAAAOIAAIKQAABThUAAgAlYk4QgLgPgKgWQgbg2gIgMIgGgGIgFgJQAHAGAFAIQAJAKAbA4QAPAeAQAVIgMgNg");
        this.shape_2.setTransform(118.7, 49.65);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(0,0,0,0.231)").s().p("AxAG9QhGAAgQg2IAGAKQAUApA8AAMAh8AAAQBYAAAAhYIAAoKQAAgjgOgXQgDgGgFgGQAZAYAAAuIAAIKQAABbhbAAgAkskVIgIgGQgXgUgVgqQgag3gKgNQgOgRgPgIIgHgGQAVAJARAVQAJALAbA4QAUApAXAVQAKAHALAHg");
        this.shape_3.setTransform(118.05, 49.025);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("rgba(0,0,0,0.349)").s().p("AxCG5Qg8AAgUgqIAHAHQAUAgA1AAMAh8AAAQBWAAAAhWIAAoKQAAgXgIgVIgEgOQAOAYAAAiIAAIKQAABZhYAAgAk7keQgVgUgUgoQgcg5gIgKQgLgNgKgGIgGgIQAPAJAOARQAKAMAaA3QAVAqAXAUIAIAGg");
        this.shape_4.setTransform(118.25, 49.175);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("rgba(0,0,0,0.114)").s().p("Aw+HBQhRAAgLhGQACAHADAHQARA1BGAAMAh7AAAQBbAAAAhbIAAoKQABgtgZgZQgFgHgHgEQAnAWAAA7IAAIKQAABeheAAgAkckOQgMgGgJgIQgXgUgUgpQgbg4gJgMQgRgVgWgIIgJgGQAcAGAWAcQAIALAcA5QATApAYATQAQAPAYAGIgVgFg");
        this.shape_5.setTransform(117.9, 48.875);
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
    }).prototype = g(b._window_shadow, new a.Rectangle(0, 4, 235.8, 89.8), null);
    (b._txt_rst2_w = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_textRes3_w;
        this.instance.parent = this;
        this.instance.setTransform(-66.5, -27.3, .35, .35);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b._txt_rst2_w, new a.Rectangle(-66.5, -27.3, 133, 54.6), null);
    (b._txt_rst2_b = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_textRes3_b;
        this.instance.parent = this;
        this.instance.setTransform(-66.5, -27.3, .35, .35);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._txt_rst2_b, new a.Rectangle(-66.5, -27.3, 133, 54.6), null);
    (b._txt_rst2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_textRes3;
        this.instance.parent = this;
        this.instance.setTransform(-66.5,
            -27.3, .35, .35);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._txt_rst2, new a.Rectangle(-66.5, -27.3, 133, 54.6), null);
    (b._txt_rst1_w = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_textRes2_w;
        this.instance.parent = this;
        this.instance.setTransform(-66.5, -27.3, .35, .35);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._txt_rst1_w, new a.Rectangle(-66.5, -27.3, 133, 54.6), null);
    (b._txt_rst1_b = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance =
            new b.sp_textRes2_b;
        this.instance.parent = this;
        this.instance.setTransform(-66.5, -27.3, .35, .35);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._txt_rst1_b, new a.Rectangle(-66.5, -27.3, 133, 54.6), null);
    (b._txt_rst1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_textRes2;
        this.instance.parent = this;
        this.instance.setTransform(-66.5, -27.3, .35, .35);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._txt_rst1, new a.Rectangle(-66.5, -27.3, 133,
        54.6), null);
    (b._txt_rst0 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_textRes1;
        this.instance.parent = this;
        this.instance.setTransform(-66.5, -27.3, .35, .35);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._txt_rst0, new a.Rectangle(-66.5, -27.3, 133, 54.6), null);
    (b._kirakira = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.sp_kirakira;
        this.instance.parent = this;
        this.instance.setTransform(-10, -10, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.fp_kirakira;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-10, -10);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = g(b._kirakira, new a.Rectangle(-10, -10, 20, 20), null);
    (b._btn = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g(b._btn, new a.Rectangle(0, 0, 240,
        320), null);
    (b._ch_replace4 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_character4;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4999, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._ch_replace4, new a.Rectangle(0, 0, 240, 320), null);
    (b._ch_replace3 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_character3;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4999, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b._ch_replace3, new a.Rectangle(0, 0, 240, 320), null);
    (b._ch_replace2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_character2;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4999, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._ch_replace2, new a.Rectangle(0, 0, 240, 320), null);
    (b._ch_replace1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_character1;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4999, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b._ch_replace1, new a.Rectangle(0, 0, 240, 320), null);
    (b.mc_tapchange = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop();
            2 != exportRoot.character_num && (this.visible = !1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.tapchangeimg = new b.gr_tapchange;
        this.tapchangeimg.name = "tapchangeimg";
        this.tapchangeimg.parent = this;
        this.tapchangeimg.setTransform(54, 11);
        this.timeline.addTween(a.Tween.get(this.tapchangeimg).wait(1))
    }).prototype =
        g(b.mc_tapchange, new a.Rectangle(2, -1, 100, 24), null);
    (b.mc_name = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.replace_name = new b.replace_name_1;
        this.replace_name.name = "replace_name";
        this.replace_name.parent = this;
        this.replace_name.setTransform(37.5, 11.5, 1, 1, 0, 0, 0, 37.5, 11.5);
        this.replace_name2 = new b.replace_name2_1;
        this.replace_name2.name = "replace_name2";
        this.replace_name2.parent = this;
        this.replace_name2.setTransform(37.5,
            11.5, 1, 1, 0, 0, 0, 37.5, 11.5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.replace_name
            }]
        }).to({
            state: [{
                t: this.replace_name2
            }]
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 75, 23);
    (b._continue_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        c = new a.Shape;
        c._off = !0;
        c.graphics.p("ACrBgIAAgDIgPADQgRACgKgCQgNgCgFgHQgDgEgDgKIgDgSQgTAEgZAAIgGASQgDAJgHAEIAAADQgFADgTAAQgSAAgEgDIAAgDIgHgGQgCgDgBgHIgJALQgGAGgHACIhlAAIAAADIgygGIAAgDIgTAAIAAgDIgTAAIgHAJIhoAAQglADhWAAIgvAAIAAgDIgNgDIAAgDQgFgBgCADIgCAEIgHAAIAAADQgIADgRgCIgWgEIgDgQIgDAAQgBgEAEgLIAGgNIADAAIAAgGIAEAAIAAgGIAGgEIAAgGIADAAIgGgTIADAAIADgOIAKgHIgEgWIAEAAIADgMIASgGQAMgEALADIAAAEIAPADIAEgHIAvAAIADAHIANAAIAAADQAFABACgDIACgEIAHAAIAAgEQAJgDAkACQAeACANADIADAMQAKACAtgBQAmAAAOAFIAAgGQAbgGAfgBQAsgCAJAMIADAAIADATIBGAAIAAADIAGAAIAAADIAJAEQADgGAHgDIALgHIAHgKIAGAAIAAgDIAKgDIAGgJQAGgEATAAIAcABIAEAEIAGACIAAAGIAZAAQAGgMAOgDQAJgBAZAAQAFAKARAJIAGAAIADAHIAHAAIAAADIAFACIAHABIADgKIAKgDIAAgDIAZAAIAKgMQAJgFAmAIIADAJIADAAIAAAZIAKAHIAAAGIADABIADAEIAGgEIAHgBIAAgTIgDAAIAAgDIADAAIAAgKIADAAIAAgGIADAAIADgJIANgDIAAgEIAWAAIApAAQAYABAOADIADAHIADAIIAHgCIADgHIAGAAIADgGIATAAIAAgEQAKgCARACIAXAEIAEAKQACAFABAHIAGAAIAAgKIAJgGQAEgDAJAAQAGgGAPADQAKABAKAFIAEALQACAGABAIIgEAAIgDATIgDAAIAAAIIgDAAIgDATIgDAAIAAAGIgEAAIAAAKIgDAAIAAAWIgDAAIgGAUQgEAHgPABQgDADgdgBIgpgCIhPAAIAAADIg4AAIAAgDQgFgBgDACIgCACQgLADgRgCIgagEIgDgQIgDAAQADgHAAgFIgMgBQgGAAgEgCIAAADIgDAAIgDAWQgDAFgSAEQgUAFgKgFIAAgDIgHgFQgDgDgFgBQgGAIgWAFQgKACgKAAQgKAAgJgDgAgOBBIADAAIAAgNIgGAAgACqAnQADAEARAAIADgGIgcgQIAFASgAk2ASIgKAZIApAAIADgMIADgNIgUAAQgMgBgFgCgAh2AoIAcAAIAAgHIgNgBIgMgCg");
        c.setTransform(66.0516, 9.8551);
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-10.35, -.9, .7219, .7219, 32.7738, 0, 0, 0, 99.8);
        this.instance.alpha = .3984;
        this.instance._off = !0;
        d = [this.instance];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance).wait(7).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 2.25,
            y: -16.65,
            alpha: .4202
        }, 0).wait(1).to({
            x: 13.1,
            y: -9.7,
            alpha: .4872
        }, 0).wait(1).to({
                regX: -.1,
                regY: 99.8,
                x: 38.35,
                y: 30.4,
                alpha: .6992
            },
            0).wait(1).to({
            regX: -2.9,
            regY: 72,
            x: 85.55,
            y: 34.5,
            alpha: .3727
        }, 0).wait(1).to({
            x: 99.2,
            y: 42.4,
            alpha: .2556
        }, 0).wait(1).to({
            x: 108.5,
            y: 47.75,
            alpha: .1758
        }, 0).wait(1).to({
            x: 115.4,
            y: 51.75,
            alpha: .1169
        }, 0).wait(1).to({
            x: 120.55,
            y: 54.75,
            alpha: .0727
        }, 0).wait(1).to({
            x: 124.35,
            y: 56.95,
            alpha: .0402
        }, 0).wait(1).to({
            x: 126.95,
            y: 58.45,
            alpha: .0177
        }, 0).wait(1).to({
            x: 128.5,
            y: 59.35,
            alpha: .0044
        }, 0).wait(1).to({
            regX: -.1,
            regY: 99.9,
            x: 119.85,
            y: 77.65,
            alpha: 0
        }, 0).wait(10));
        this.instance_1 = new b.continue_core;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(70, 11.95, 1, 1, 0, 0, 0, 64.5, 7.7);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(29))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-129.5, -78, 264, 150);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp;
        this.instance.parent = this;
        this.instance.setTransform(0,
            .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p;
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2,
        -178.7, 148.5, 184.7);
    (b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(3 * Math.random()) + 1)
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(40.95, -17, .7347, .7347);
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.\u30b7\u30f3\u30dc\u30eb8 = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb7;
        this.instance.parent = this;
        this.instance.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.\u30b7\u30f3\u30dc\u30eb8, new a.Rectangle(-140, -33.5, 280, 63), null);
    (b.square2c = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 18.2,
            1, 1, 0, 0, 0, .7, .7);
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
        g(b.square2c, new a.Rectangle(0, 0, 1.5, 21.5), null);
    (b.square2 = function(c, d, e) {
        this.initialize(c, d, e, {});
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
    }).prototype = g(b.square2, new a.Rectangle(0, 0, 1.5, 26.5), null);
    (b.sprite66b = function(c, d, e) {
        this.initialize(c, d, e, {});
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-10.2, -118.4, 95.7, 125.30000000000001);
    (b.sprite66 = function(c, d, e) {
        this.initialize(c, d, e, {});
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-59.8, -94.1, 92.3, 101);
    (b.result_base = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.\u30b7\u30f3\u30dc\u30eb8;
        this.instance.parent = this;
        this.instance.setTransform(-4.1, 83.2, 1, 1, 0, 0, 0, -.1, -1.1);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        g(b.result_base, new a.Rectangle(-144, 50.8, 280, 63), null);
    (b.particle_white_b = function(c, d, e) {
        this.initialize(c, d, e, {});
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
            },
            0).wait(1).to({
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
        }, 0).wait(1).to({
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-14.9,
        -122.8, 111.60000000000001, 123.89999999999999);
    (b.particle_white_a = function(c, d, e) {
        this.initialize(c, d, e, {});
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
        }, 0).wait(1).to({
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
        }, 1).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-65.8, -98.5, 92.19999999999999, 102.9);
    (b.lvup_ring_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_9 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(9).call(this.frame_9).wait(2));
        this.instance =
            new b.lvup_ring;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4284, .4284);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 2.2938,
            scaleY: 2.2938,
            alpha: .8008
        }, 4, a.Ease.get(.92)).to({
            scaleX: 2.7501,
            scaleY: 2.7501,
            alpha: .0703
        }, 4).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-205.3, -205.3, 410.6, 410.6);
    (b.lovemax_ring_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_9 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(9).call(this.frame_9).wait(2));
        this.instance = new b.lovemax_ring;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4284, .4284);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 1.9727,
            scaleY: 1.9727,
            alpha: .5781
        }, 4, a.Ease.get(.92)).to({
            scaleX: 2.2938,
            scaleY: 2.2938,
            alpha: .1289
        }, 4).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-171.2, -171.2, 342.5, 342.5);
    (b.effect_lovemax_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_19 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(19).call(this.frame_19).wait(1));
        this.instance = new b.lovemax_ring_container;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(20))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-32, -32, 64, 64);
    (b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
        this.instance_1 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(43.45, 31, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_2 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_3 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_4 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(32.95, 25.05, .6032, .6032, 154.5512);
        this.instance_5 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(7, 31.2, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_6 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_7 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(13.6, 24.65,
            .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_8 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_9 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_10 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_11 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_12 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-29.4, 10.5, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_13 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_14 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_15 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_15.parent = this;
        this.instance_15.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_16 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_16.parent = this;
        this.instance_16.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_17 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_17.parent =
            this;
        this.instance_17.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_18 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_18.parent = this;
        this.instance_18.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_19 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_20 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-7.15,
            -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_21 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_22 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_22.parent = this;
        this.instance_22.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_23 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_23.parent = this;
        this.instance_23.setTransform(46, 17.7, .8585, .8585, 61.4817);
        this.instance_24 =
            new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_24.parent = this;
        this.instance_24.setTransform(44.95, -25.6, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_25 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_25.parent = this;
        this.instance_25.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_26 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_26.parent = this;
        this.instance_26.setTransform(41.2, 5.95, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_27 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_27.parent = this;
        this.instance_27.setTransform(45.8, -7.4, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_28 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(37.4, -24.15, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_29 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_30 = new b.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_30.parent =
            this;
        this.instance_30.setTransform(46.15, -7.2, .5292, .5292, 44.5199);
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
                },
                {
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
    }).prototype = g(b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408, new a.Rectangle(-318.7, -245.4, 558.2, 474.70000000000005), null);
    (b.efa_\uff77\uff97\uff77\uff97 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(this.currentFrame +
                Math.floor(7 * Math.random()) + 1)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(10));
        this.instance = new b.marker;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(17));
        this.instance_1 = new b.\u30b7\u30f3\u30dc\u30eb100;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.05, 0, .1255, 1);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
                scaleX: .4367,
                scaleY: .6897
            },
            0).to({
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.1, -42.8, 148.2, 85.69999999999999);
    (b.charaEffect_set = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(13));
        this.effect1 = new b.replace_effect1;
        this.effect1.name = "effect1";
        this.effect1.parent = this;
        this.effect1.setTransform(-153.3, 133.4);
        this.timeline.addTween(a.Tween.get(this.effect1).wait(13));
        this.effect1_1 = new b.replace_effect1;
        this.effect1_1.name = "effect1_1";
        this.effect1_1.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect1_1).wait(13));
        this.effect2 = new b.replace_effect2;
        this.effect2.name = "effect2";
        this.effect2.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect2).wait(13));
        this.effect3 =
            new b.replace_effect3;
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
        this.effect6.parent =
            this;
        this.timeline.addTween(a.Tween.get(this.effect6).wait(13));
        this.effect7 = new b.replace_effect7;
        this.effect7.name = "effect7";
        this.effect7.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect7).wait(13));
        this.effect8 = new b.replace_effect8;
        this.effect8.name = "effect8";
        this.effect8.parent = this;
        this.timeline.addTween(a.Tween.get(this.effect8).wait(13))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-406.3, -411.2, 815.3, 814.7);
    (b.bg_container = function(c, d, e) {
        this.initialize(c, d, e, {
            good: 10,
            perfect: 25,
            last: 31
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_10 = function() {
            this.play()
        };
        this.frame_16 = function() {
            this.stop()
        };
        this.frame_25 = function() {
            this.play()
        };
        this.frame_31 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(6).call(this.frame_16).wait(9).call(this.frame_25).wait(6).call(this.frame_31).wait(14));
        this.instance = new b.white;
        this.instance.parent = this;
        this.instance.setTransform(0, -32, 1, 1, 0, 0, 0, 120,
            128);
        this.instance.alpha = .1211;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(10).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(8).to({
            _off: !1,
            alpha: .4688
        }, 0).to({
            alpha: .1211
        }, 6, a.Ease.get(1)).wait(14))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-120, -187, 240, 310);
    (b._window22 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.square2;
        this.instance.parent = this;
        this.instance.setTransform(218.95, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_1 = new b.square2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(191.35, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_2 = new b.square2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(163.9, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_3 = new b.square2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(136.45, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_4 = new b.square2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(108.95, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_5 = new b.square2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(81.45, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_6 = new b.square2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(53.95, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_7 = new b.square2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(26.45, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_8 = new b.square2c;
        this.instance_8.parent = this;
        this.instance_8.setTransform(5.95, 21, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_9 = new b.square2c;
        this.instance_9.parent = this;
        this.instance_9.setTransform(8.6, 21, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_10 = new b.square2c;
        this.instance_10.parent = this;
        this.instance_10.setTransform(11.25, 21, 1, 1, 0, 0, 0, .7, 13.2);
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
            }, {
                t: this.instance
            }]
        }).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AxGG5QhQAAAAhQIAArRQAAhQBQAAIJ+AAQAkAAAYAeQAIALAbA4QAWAuAYAUQAkAeA5gBIUlAAQBQAAAABQIAAIRQAABQhQAAg");
        this.shape.setTransform(117.5, 48.125);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.instance_11 = new b._window_shadow;
        this.instance_11.parent = this;
        this.instance_11.setTransform(118.35, 47.65, 1, 1, 0, 0, 0, 117.9, 46.9);
        this.instance_11.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(1))
    }).prototype = g(b._window22, new a.Rectangle(0, 4, 236.3, 90.5), null);
    (b.___\u4e0b\u90e8\u30a6\u30a4\u30f3\u30c9\u30a6___ = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.name = new b.mc_name;
        this.name.name =
            "name";
        this.name.parent = this;
        this.name.setTransform(37.5, 15.5, 1, 1, 0, 0, 0, 37.5, 11.5);
        this.timeline.addTween(a.Tween.get(this.name).wait(1));
        this.instance = new b._window22;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g(b.___\u4e0b\u90e8\u30a6\u30a4\u30f3\u30c9\u30a6___, new a.Rectangle(0, -2, 236.3, 96.5), null);
    (b.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.replace_character3 = new b._ch_replace3;
        this.replace_character3.name = "replace_character3";
        this.replace_character3.parent = this;
        this.replace_character4 = new b._ch_replace4;
        this.replace_character4.name = "replace_character4";
        this.replace_character4.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.replace_character3
            }]
        }).to({
            state: [{
                t: this.replace_character4
            }]
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-1.5, 0, 282, 321);
    (b.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___ =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.frame_0 = function() {
                this.stop()
            };
            this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
            this.replace_character1 = new b._ch_replace1;
            this.replace_character1.name = "replace_character1";
            this.replace_character1.parent = this;
            this.replace_character2 = new b._ch_replace2;
            this.replace_character2.name = "replace_character2";
            this.replace_character2.parent = this;
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                    t: this.replace_character1
                }]
            }).to({
                    state: [{
                        t: this.replace_character2
                    }]
                },
                1).wait(1))
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-1.5, 0, 282, 321);
    (b.\u30a8\u30d5\u30a7\u30af\u30c8_\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7\u306e\u30b3\u30d4\u30fc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.particle_white_a("synched", 0, !1);
        this.instance.parent = this;
        this.instance.setTransform(-.3, -.35,
            .6564, .6564, -135.1055);
        this.instance_1 = new b.particle_white_a("synched", 0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(1.7, -1.35, .6564, .6564, 0, 45.1055, -134.8945);
        this.instance_2 = new b.particle_white_a("synched", 0, !1);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-3.3, -2.35, .6564, .6564, 0, -134.8945, 45.1055);
        this.instance_3 = new b.particle_white_a("synched", 0, !1);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-1.3, -4.35, .6564, .6564, 44.8945);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                    t: this.instance_3
                },
                {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }, 1).to({
            state: []
        }, 11).wait(1));
        this.instance_4 = new b.particle_white_b("synched", 0, !1);
        this.instance_4.parent = this;
        this.instance_4.setTransform(-.25, -3.1, .4201, .4201, 89.8939);
        this.instance_5 = new b.particle_white_b("synched", 0, !1);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-1.7, -3.1, .4201, .4201, 0, -89.8939, 90.1061);
        this.instance_6 = new b.particle_white_b("synched", 0, !1);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-.25,
            -.35, .4201, .4201, 0, 90.1061, -89.8939);
        this.instance_7 = new b.particle_white_b("synched", 0, !1);
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
        }, 2).to({
            state: []
        }, 10).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-69.4, -70.5, 137.3, 136.3);
    (b.\u30a8\u30d5\u30a7\u30af\u30c8_\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7 =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.frame_12 = function() {
                this.stop()
            };
            this.timeline.addTween(a.Tween.get(this).wait(12).call(this.frame_12).wait(1));
            this.instance = new b.sprite66("synched", 0, !1);
            this.instance.parent = this;
            this.instance.setTransform(-2.15, -.65, .6564, .6564, -135.1055);
            this.instance_1 = new b.sprite66("synched", 0, !1);
            this.instance_1.parent = this;
            this.instance_1.setTransform(-.15, -1.65, .6564, .6564, 0, 45.1055, -134.8945);
            this.instance_2 = new b.sprite66("synched", 0, !1);
            this.instance_2.parent =
                this;
            this.instance_2.setTransform(-5.15, -2.65, .6564, .6564, 0, -134.8945, 45.1055);
            this.instance_3 = new b.sprite66("synched", 0, !1);
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
            this.instance_4 = new b.sprite66b("synched", 0, !1);
            this.instance_4.parent = this;
            this.instance_4.setTransform(-2.1,
                -3.4, .4201, .4201, 89.8939);
            this.instance_5 = new b.sprite66b("synched", 0, !1);
            this.instance_5.parent = this;
            this.instance_5.setTransform(-3.55, -3.4, .4201, .4201, 0, -89.8939, 90.1061);
            this.instance_6 = new b.sprite66b("synched", 0, !1);
            this.instance_6.parent = this;
            this.instance_6.setTransform(-2.1, -.65, .4201, .4201, 0, 90.1061, -89.8939);
            this.instance_7 = new b.sprite66b("synched", 0, !1);
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
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-69.9, -69.4, 134.5, 133.5);
    (b.result_normal = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_6 = function() {};
        this.frame_11 = function() {
            this.stop();
            window.cjsIpc("result_end")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(5).call(this.frame_11).wait(1));
        this.instance =
            new b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.instance.parent = this;
        this.instance.setTransform(-3.75, 76.3, .6802, .6802);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(3).to({
            _off: !1
        }, 0).wait(9));
        this.instance_1 = new b._txt_rst0;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 54.75, 1, 1, 0, 0, 0, 0, -.6);
        this.instance_1.alpha = .1602;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).to({
                regY: -1,
                y: 92,
                alpha: 1
            },
            2, a.Ease.get(-1)).to({
            regY: -.9,
            y: 78.1
        }, 3, a.Ease.get(1)).to({
            regY: -.2,
            y: 80.8
        }, 3, a.Ease.get(1)).wait(3));
        this.instance_2 = new b.\u30b7\u30f3\u30dc\u30eb8;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-4.1, 83.2, 1, .4471, 0, 0, 0, -.1, -.2);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            regY: -1.2,
            scaleY: .9308
        }, 1, a.Ease.get(1)).to({
            regY: -1,
            scaleY: 1.092
        }, 1).to({
            regY: -1.2,
            scaleY: .9719,
            y: 83.15
        }, 3, a.Ease.get(1)).to({
            regY: -1.1,
            scaleY: .9875,
            y: 83.2
        }, 1, a.Ease.get(1)).to({
            scaleY: 1
        }, 2).wait(4))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-180.2, -90.6, 339.29999999999995, 322.79999999999995);
    (b.effect_lovemax_container_arr = function(c, d, e) {
        this.initialize(c, d, e, {
            good: 1,
            perfect: 10
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.play()
        };
        this.frame_9 = function() {
            this.stop()
        };
        this.frame_10 = function() {
            this.play()
        };
        this.frame_19 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1).call(this.frame_10).wait(9).call(this.frame_19).wait(1));
        this.instance = new b.effect_grip;
        this.instance.parent = this;
        this.instance.setTransform(140, 0);
        this.instance_1 = new b.lvup_ring_container;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .6875, .6875);
        this.instance_2 = new b.effect_lovemax_container;
        this.instance_2.parent = this;
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
        }, 9).wait(10))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-32,
        -32, 180, 64);
    (b.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9\u30ab\u30fc\u30c9\u7528 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_16 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(16).call(this.frame_16).wait(1));
        this.instance = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance.parent = this;
        this.instance.setTransform(-36.1, -11.7, .281, .281);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.instance_1 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_1.parent = this;
        this.instance_1.setTransform(15.85, -3.75, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(2).to({
            _off: !1
        }, 0).wait(15));
        this.instance_2 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-31.3, 29.75, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(4).to({
            _off: !1
        }, 0).wait(13));
        this.instance_3 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_3.parent =
            this;
        this.instance_3.setTransform(91.55, -8.35, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(6).to({
            _off: !1
        }, 0).wait(11));
        this.instance_4 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-73.35, -24.85, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(9).to({
            _off: !1
        }, 0).wait(8));
        this.instance_5 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_5.parent = this;
        this.instance_5.setTransform(44.35,
            -17.9, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(11).to({
            _off: !1
        }, 0).wait(6));
        this.instance_6 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_6.parent = this;
        this.instance_6.setTransform(12.2, 25.75, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(14).to({
            _off: !1
        }, 0).wait(3));
        this.instance_7 = new b.efa_\uff77\uff97\uff77\uff97_pp;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, .7624, .2815);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(17))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-91.5, -42.2, 191.3, 84.4);
    (b.chs2 = function(c, d, e) {
        this.initialize(c, d, e, {
            appear: 1,
            standby: 7,
            good: 15,
            bad: 26
        });
        this.frame_0 = function() {
            this.stop();
            this.visible = !1
        };
        this.frame_1 = function() {
            this.play();
            this.visible = !0
        };
        this.frame_7 = function() {
            this.stop();
            this.visible = !0
        };
        this.frame_15 = function() {
            this.play()
        };
        this.frame_16 = function() {
            this.chp.gotoAndStop(1)
        };
        this.frame_25 = function() {
            this.stop()
        };
        this.frame_26 = function() {
            this.chp.gotoAndStop(1);
            this.play()
        };
        this.frame_33 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(8).call(this.frame_15).wait(1).call(this.frame_16).wait(9).call(this.frame_25).wait(1).call(this.frame_26).wait(7).call(this.frame_33).wait(1));
        this.chp = new b.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___2;
        this.chp.name = "chp";
        this.chp.parent = this;
        this.chp.setTransform(0, 16);
        this.timeline.addTween(a.Tween.get(this.chp).wait(1).to({
            y: 26
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 152.2
        }, 0).wait(1).to({
            y: 147.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 12
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 148.2
        }, 0).wait(1).to({
            y: 149.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 16
        }, 0).wait(8).to({
            y: 22.8
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 144.1
        }, 0).wait(1).to({
            y: 136.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 135.25
        }, 0).wait(1).to({
            y: 139
        }, 0).wait(1).to({
            y: 145.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 20
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 151.75
        }, 0).wait(1).to({
            y: 150.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 16
        }, 0).wait(2).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 152.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 19
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 151.9
        }, 0).wait(1).to({
            y: 151.05
        }, 0).wait(1).to({
            y: 150.45
        }, 0).wait(1).to({
            y: 150.1
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 16
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.chs = function(c, d, e) {
        this.initialize(c, d, e, {
            appear: 1,
            standby: 7,
            good: 15,
            bad: 26
        });
        this.frame_0 =
            function() {
                this.stop();
                this.visible = !1
            };
        this.frame_1 = function() {
            this.play();
            this.visible = !0
        };
        this.frame_7 = function() {
            this.stop();
            this.visible = !0
        };
        this.frame_15 = function() {
            this.play()
        };
        this.frame_16 = function() {
            this.chp.gotoAndStop(1)
        };
        this.frame_25 = function() {
            this.stop()
        };
        this.frame_26 = function() {
            this.chp.gotoAndStop(1);
            this.play()
        };
        this.frame_33 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(8).call(this.frame_15).wait(1).call(this.frame_16).wait(9).call(this.frame_25).wait(1).call(this.frame_26).wait(7).call(this.frame_33).wait(1));
        this.chp = new b.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___;
        this.chp.name = "chp";
        this.chp.parent = this;
        this.chp.setTransform(0, 16);
        this.timeline.addTween(a.Tween.get(this.chp).wait(1).to({
            y: 26
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 152.2
        }, 0).wait(1).to({
            y: 147.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 12
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 148.2
        }, 0).wait(1).to({
            y: 149.55
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 16
        }, 0).wait(8).to({
            y: 22.8
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 144.1
        }, 0).wait(1).to({
                y: 136.5
            },
            0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 135.25
        }, 0).wait(1).to({
            y: 139
        }, 0).wait(1).to({
            y: 145.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 20
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 151.75
        }, 0).wait(1).to({
            y: 150.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 16
        }, 0).wait(2).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 152.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 19
        }, 0).wait(1).to({
            regX: 120,
            regY: 134,
            x: 120,
            y: 151.9
        }, 0).wait(1).to({
            y: 151.05
        }, 0).wait(1).to({
            y: 150.45
        }, 0).wait(1).to({
            y: 150.1
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 16
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 240, 294);
    (b.result_perfect_continue = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_6 = function() {};
        this.frame_16 = function() {
            this.stop();
            window.cjsIpc("result_end")
        };
        this.timeline.addTween(a.Tween.get(this).wait(6).call(this.frame_6).wait(10).call(this.frame_16).wait(1));
        this.instance = new b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.instance.parent = this;
        this.instance.setTransform(-4.15,
            75.5, .8734, .8734);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.c2 = new b._continue_1;
        this.c2.name = "c2";
        this.c2.parent = this;
        this.c2.setTransform(-3.55, 239.45, 1.5317, 2.5811, 0, 0, 0, 67.6, 13.4);
        this.c2.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.c2).wait(8).to({
            y: -.55,
            alpha: 1
        }, 0).to({
            scaleY: 1.1375,
            x: -3.6,
            y: 46.15
        }, 3, a.Ease.get(-1)).to({
            scaleY: 1.5317,
            y: 43.55
        }, 3, a.Ease.get(1)).wait(3));
        this.instance_1 = new b.\u30a8\u30d5\u30a7\u30af\u30c8_\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7("synched",
            0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-5.75, 60.3, 1.4977, 1.4977, 23.8569);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.instance_2 = new b.\u30a8\u30d5\u30a7\u30af\u30c8_\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7\u306e\u30b3\u30d4\u30fc("synched", 0, !1);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-6.6, 69.9, 1.8254, 1.8254, 113.8308, 0, 0, .1, .2);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
                _off: !1
            },
            0).wait(16));
        this.instance_3 = new b.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9\u30ab\u30fc\u30c9\u7528;
        this.instance_3.parent = this;
        this.instance_3.setTransform(1.85, 78.2, .65, .65);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(5).to({
            _off: !1
        }, 0).wait(12));
        this.instance_4 = new b._txt_rst2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 80.75, .6028, .6028, 0, 0, 0, 0, -.4);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1).to({
            regY: 0,
            scaleX: 1.2227,
            scaleY: 1.2227,
            y: 81.2658
        }, 0).wait(1).to({
            regY: -.8,
            scaleX: 1.4321,
            scaleY: 1.4321,
            y: 80.85
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1.1632,
            scaleY: 1.1632,
            y: 81.763
        }, 0).wait(1).to({
            scaleX: 1.0019,
            scaleY: 1.0019,
            y: 81.6207
        }, 0).wait(1).to({
            regY: -1.3,
            scaleX: .9482,
            scaleY: .9482,
            y: 80.75
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1.0019,
            scaleY: 1.0019,
            y: 82.058
        }, 0).wait(1).to({
            scaleX: 1.0341,
            scaleY: 1.0341,
            y: 82.0929
        }, 0).wait(1).to({
            regY: -1.2,
            scaleX: 1.0448,
            scaleY: 1.0448,
            y: 80.75
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            y: 80.8
        }, 3).wait(6));
        this.instance_5 = new b.\u30b7\u30f3\u30dc\u30eb8;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-4.1, 82.9, 1, .4471, 0, 0, 0, -.1, -.2);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
            regX: 0,
            regY: -2,
            scaleY: .9308,
            x: -4,
            y: 81.2
        }, 0).wait(1).to({
            regX: -.1,
            regY: -1,
            scaleY: 1.092,
            x: -4.1,
            y: 82.9
        }, 0).wait(1).to({
            regX: 0,
            regY: -2,
            scaleY: 1.0252,
            x: -4,
            y: 81.85
        }, 0).wait(1).to({
            scaleY: .9852,
            y: 81.9
        }, 0).wait(1).to({
            regX: -.1,
            regY: -1.2,
            scaleY: .9719,
            x: -4.1,
            y: 82.85
        }, 0).wait(1).to({
            regX: 0,
            regY: -2,
            scaleY: .9875,
            x: -4,
            y: 82.05
        }, 0).wait(1).to({
                scaleY: .9969,
                y: 82
            },
            0).wait(1).to({
            regX: -.1,
            regY: -1.1,
            scaleY: 1,
            x: -4.1,
            y: 82.9
        }, 0).wait(9));
        this.c = new b._continue_1;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-3.6, 335.55, 1.5317, 1.5317, 0, 0, 0, 67.6, 13.4);
        this.c.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.c).wait(3).to({
            y: 65.55,
            alpha: 1
        }, 0).to({
            scaleY: 2.6774,
            y: -3.7
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(9))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-230.7, -138.9, 435.7, 484.1);
    (b.result_perfect = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_6 =
            function() {};
        this.frame_16 = function() {
            this.stop();
            window.cjsIpc("result_end")
        };
        this.timeline.addTween(a.Tween.get(this).wait(6).call(this.frame_6).wait(10).call(this.frame_16).wait(1));
        this.instance = new b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.instance.parent = this;
        this.instance.setTransform(-4.15, 75.5, .8734, .8734);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.instance_1 = new b.\u30a8\u30d5\u30a7\u30af\u30c8_\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7("synched",
            0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-5.75, 60.3, 1.4977, 1.4977, 23.8569);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(16));
        this.instance_2 = new b.\u30a8\u30d5\u30a7\u30af\u30c8_\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7\u306e\u30b3\u30d4\u30fc("synched", 0, !1);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-6.6, 69.9, 1.8254, 1.8254, 113.8308, 0, 0, .1, .2);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
                _off: !1
            },
            0).wait(16));
        this.instance_3 = new b.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9\u30ab\u30fc\u30c9\u7528;
        this.instance_3.parent = this;
        this.instance_3.setTransform(1.85, 78.2, .65, .65);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(5).to({
            _off: !1
        }, 0).wait(12));
        this.instance_4 = new b._txt_rst2_w;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 80.85, 1.4321, 1.4321, 0, 0, 0, 0, -.8);
        this.instance_4.alpha = .3008;
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(2).to({
                _off: !1
            },
            0).to({
            regY: -1.3,
            scaleX: .9482,
            scaleY: .9482,
            y: 80.75,
            alpha: .1484
        }, 3, a.Ease.get(1)).to({
            regY: -1.2,
            scaleX: 1.0448,
            scaleY: 1.0448,
            alpha: 0
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(8));
        this.instance_5 = new b._txt_rst2_b;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 80.75, .6028, .6028, 0, 0, 0, 0, -.4);
        this.instance_5.alpha = .5508;
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regY: -.8,
            scaleX: 1.4321,
            scaleY: 1.4321,
            y: 80.85,
            alpha: 0
        }, 2, a.Ease.get(.99)).to({
            _off: !0
        }, 1).wait(14));
        this.instance_6 = new b._txt_rst2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 80.75, .6028, .6028, 0, 0, 0, 0, -.4);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            regY: -.8,
            scaleX: 1.4321,
            scaleY: 1.4321,
            y: 80.85
        }, 2, a.Ease.get(.99)).to({
            regY: -1.3,
            scaleX: .9482,
            scaleY: .9482,
            y: 80.75
        }, 3, a.Ease.get(1)).to({
            regY: -1.2,
            scaleX: 1.0448,
            scaleY: 1.0448
        }, 3, a.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            y: 80.8
        }, 3).wait(6));
        this.instance_7 = new b.\u30b7\u30f3\u30dc\u30eb8;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-4.1, 82.9, 1, .4471,
            0, 0, 0, -.1, -.2);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            regY: -1,
            scaleY: 1.092
        }, 2, a.Ease.get(1)).to({
            regY: -1.2,
            scaleY: .9719,
            y: 82.85
        }, 3, a.Ease.get(1)).to({
            regY: -1.1,
            scaleY: 1,
            y: 82.9
        }, 3, a.Ease.get(1)).wait(9))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-230.7, -138.9, 435.7, 414.70000000000005);
    (b.result_good = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_6 = function() {};
        this.frame_14 = function() {
            this.stop();
            window.cjsIpc("result_end")
        };
        this.timeline.addTween(a.Tween.get(this).wait(6).call(this.frame_6).wait(8).call(this.frame_14).wait(1));
        this.instance = new b.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.instance.parent = this;
        this.instance.setTransform(-2.9, 68.75, .8734, .8734);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(14));
        this.instance_1 = new b.\u30a8\u30d5\u30a7\u30af\u30c8_\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7("synched", 0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(2.05, 74.7, 1.4977, 1.4977, 23.8569);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
                _off: !1
            },
            0).wait(14));
        this.instance_2 = new b.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9\u30ab\u30fc\u30c9\u7528;
        this.instance_2.parent = this;
        this.instance_2.setTransform(1.85, 79.65);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(7).to({
            _off: !1
        }, 0).wait(8));
        this.instance_3 = new b._txt_rst1_b;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 95.15, 1, .4588, 0, 0, 0, 0, -1.9);
        this.instance_3.alpha = .5313;
        this.instance_4 = new b._txt_rst1_w;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0,
            66.9, 1, 1, 0, 0, 0, 0, -1.1);
        this.instance_4.alpha = .25;
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).to({
            _off: !0,
            regY: -1.1,
            scaleY: 1,
            y: 66.9,
            alpha: .25
        }, 1, a.Ease.get(-1)).wait(14));
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            _off: !1
        }, 1, a.Ease.get(-1)).to({
            y: 42.9
        }, 2, a.Ease.get(1)).to({
            regY: -.8,
            y: 85.2,
            alpha: .0781
        }, 3, a.Ease.get(-1)).to({
            regY: -1.1,
            y: 78.9,
            alpha: 0
        }, 3, a.Ease.get(1)).to({
            regY: -1.2,
            y: 80.8
        }, 3).wait(3));
        this.instance_5 = new b._txt_rst1;
        this.instance_5.parent =
            this;
        this.instance_5.setTransform(0, 95.15, 1, .4588, 0, 0, 0, 0, -1.9);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            regY: -1.1,
            scaleY: 1,
            y: 66.9
        }, 1, a.Ease.get(-1)).to({
            y: 42.9
        }, 2, a.Ease.get(1)).to({
            regY: -.8,
            y: 85.2
        }, 3, a.Ease.get(-1)).to({
            regY: -1.1,
            y: 78.9
        }, 3, a.Ease.get(1)).to({
            regY: -1.2,
            y: 80.8
        }, 3).wait(3));
        this.instance_6 = new b.\u30b7\u30f3\u30dc\u30eb8;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-4.1, 82.9, 1, .4471, 0, 0, 0, -.1, -.2);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            regY: -1,
            scaleY: 1.092
        }, 2, a.Ease.get(1)).to({
            regY: -1.2,
            scaleY: .9719,
            y: 82.85
        }, 3, a.Ease.get(1)).to({
            regY: -1.1,
            scaleY: 1,
            y: 82.9
        }, 3, a.Ease.get(1)).wait(7))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-229.5, -145.7, 435.8, 414.7);
    (b.result_container = function(c, d, e) {
        this.initialize(c, d, e, {
            bad: 1,
            good: 10,
            perfect: 20,
            perfect_continue: 30
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.play()
        };
        this.frame_9 = function() {
            this.stop()
        };
        this.frame_19 = function() {
            this.stop()
        };
        this.frame_29 = function() {
            this.stop()
        };
        this.frame_42 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(13).call(this.frame_42).wait(1));
        this.instance = new b.result_base;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(42));
        this.instance_1 = new b.result_normal;
        this.instance_1.parent = this;
        this.instance_2 = new b.result_good;
        this.instance_2.parent =
            this;
        this.instance_2.setTransform(-4, 100.8, 1, 1, 0, 0, 0, -4, 100.8);
        this.instance_3 = new b.result_perfect;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-4, 94, 1, 1, 0, 0, 0, -4, 94);
        this.instance_4 = new b.result_perfect_continue;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-4, 94, 1, 1, 0, 0, 0, -4, 94);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 9).to({
            state: [{
                t: this.instance_3
            }]
        }, 10).to({
                state: [{
                    t: this.instance_4
                }]
            },
            10).wait(13))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-144, 50.8, 280, 294.4);
    (b.event_communication_replace_pex_memory = function(c, d, e) {
        this.initialize(c, d, e, {
            result: 15,
            last: 27
        });
        this.frame_0 = function() {
            this._url = im_cjs._url;
            this.comm_result = im_cjs.comm_result;
            this.lv_f = im_cjs.lv_f;
            this.lv_l = im_cjs.lv_l;
            this.lv_b = im_cjs.lv_b;
            this.lv_inf_flg = window.im_cjs.lv_inf_flg;
            this.lvup_flg = im_cjs.lvup_flg;
            this.heart_f = im_cjs.heart_f;
            this.heart_l = im_cjs.heart_l;
            this.emo = im_cjs.emo;
            this.emo2 =
                im_cjs.emo2;
            this.left_ch_back_flag = im_cjs.left_ch_back_flag;
            this.card_comm1_1 = im_cjs.card_comm1_1;
            this.card_comm1_2 = im_cjs.card_comm1_2;
            this.card_comm1_3 = im_cjs.card_comm1_3;
            this.card_comm1_4 = im_cjs.card_comm1_4;
            this.card_comm2_1 = im_cjs.card_comm2_1;
            this.card_comm2_2 = im_cjs.card_comm2_2;
            this.card_comm2_3 = im_cjs.card_comm2_3;
            this.card_comm2_4 = im_cjs.card_comm2_4;
            this.momorial_power = im_cjs.momorial_power;
            this.training_room_flag = im_cjs.training_room_flag;
            this.puchi_power = im_cjs.puchi_power;
            this.character_num =
                im_cjs.character_num;
            this.my_number = im_cjs.my_number;
            this.point = im_cjs.point;
            this.s1_1_ch1_chara_effect = im_cjs.s1_1_ch1_chara_effect;
            this.s1_1_ch1_chara_efdir = im_cjs.s1_1_ch1_chara_efdir;
            this.c_jump = function() {
                1 == this.key_flag && (this.key_flag = 0, cjsIpc("communicationResultFlashEnd"))
            };
            this.change = function() {
                2 == this.character_num && 0 == this.key_change_flag && (1 == this.chara_flg ? (this.chara_flg = 2, this.card_comm_1 = this.card_comm2_1, this.card_comm_2 = this.card_comm2_2, this.card_comm_3 = this.card_comm2_3, this.card_comm_4 =
                    this.card_comm2_4, this.w2.name.gotoAndStop(1), 0 == this.comm_result ? this.ch2.gotoAndPlay("bad") : this.ch2.gotoAndPlay("good")) : (this.chara_flg = 1, this.card_comm_1 = this.card_comm1_1, this.card_comm_2 = this.card_comm1_2, this.card_comm_3 = this.card_comm1_3, this.card_comm_4 = this.card_comm1_4, this.w2.name.gotoAndStop(0), 0 == this.comm_result ? (this.ch.gotoAndPlay("bad"), this.ch_back.gotoAndPlay("bad")) : (this.ch.gotoAndPlay("good"), this.ch_back.gotoAndPlay("good"))))
            };
            this.boot_effect = function() {
                var l = this["s" + this.scene_m +
                    "_" + this.scene_s + "_ch" + this.count_ch + "_chara_effect"];
                if (0 < l) {
                    var n = this.t_pos,
                        p = parseInt(10 * this.scene_m + this.scene_s);
                    l = new b["replace_effect" + l];
                    this["_effect" + p] = l;
                    l.name = "_effect" + p;
                    this.addChild(l);
                    l.x = void 0 != n ? this[n + "X"] + this["ch" + this.t_no + "_efposition_x"] : this.CX;
                    l.y = parseInt(this["ch" + this.t_no + "_efposition_y"]);
                    "R" == this.t_efdir ? l.gotoAndStop("R") : l.gotoAndStop("L")
                }
            };
            this.key_flag = 1;
            this.nextEmo = this.emo;
            this.heart_n = this.heart_f;
            this.chara_flg = 1;
            this.card_comm_1 = this.card_comm1_1;
            this.card_comm_2 =
                this.card_comm1_2;
            this.card_comm_3 = this.card_comm1_3;
            this.card_comm_4 = this.card_comm1_4;
            this.key_change_flag = 1;
            this.pnum = this.pDef = this.point.length;
            this.max_point_digit = 10;
            "" != this.s1_1_ch1_chara_effect && (this.t_pos = "C", this.t_no = 1, this.t_efdir = "R" == this.s1_1_ch1_chara_efdir ? "R" : "L", this.count_ch = this.scene_s = this.scene_m = 1, this.idol_y = this.ch.y, this.ch1_efposition_x = 120, this.ch1_efposition_y = 104 + this.idol_y)
        };
        this.frame_7 = function() {
            this.ch.gotoAndStop("appear");
            this.ch_back.gotoAndStop("appear");
            2 == this.character_num ? 1 == this.left_ch_back_flag ? (this.ch.visible = !1, this.ch2.x = 30, this.ch_back.x = -70) : (this.ch.x = -70, this.ch2.x = 30, this.ch_back.visible = !1) : (this.ch.x = 0, this.ch2.visible = !1, this.ch_back.visible = !1, this.CX = 0)
        };
        this.frame_8 = function() {
            2 == this.character_num && this.ch2.gotoAndPlay("appear");
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.gotoAndPlay("result")
            }, this, !0)
        };
        this.frame_15 = function() {
            switch (parseInt(this.comm_result)) {
                case 0:
                    this.ch.gotoAndPlay("bad");
                    this.ch_back.gotoAndPlay("bad");
                    this.result.gotoAndPlay("bad");
                    this.sound_mc.gotoAndStop(1);
                    break;
                case 1:
                    this.ch.gotoAndPlay("good");
                    this.ch_back.gotoAndPlay("good");
                    this.bg.gotoAndPlay("good");
                    this.result.gotoAndPlay("good");
                    this.sound_mc.gotoAndStop(2);
                    break;
                case 2:
                    this.ch.gotoAndPlay("good");
                    this.ch_back.gotoAndPlay("good");
                    this.bg.gotoAndPlay("perfect");
                    this.result.gotoAndPlay("perfect");
                    this.sound_mc.gotoAndStop(3);
                    break;
                case 3:
                    this.ch.gotoAndPlay("good"), this.ch_back.gotoAndPlay("good"), this.bg.gotoAndPlay("perfect"),
                        this.result.gotoAndPlay("perfect_continue"), this.sound_mc.gotoAndStop(8)
            }
            this.btn.removeAllEventListeners("click")
        };
        this.frame_17 = function() {
            if (2 == this.character_num) switch (this.comm_result) {
                case 0:
                    this.ch2.gotoAndPlay("bad");
                    break;
                case 1:
                case 2:
                case 3:
                    this.ch2.gotoAndPlay("good")
            }
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.gotoAndPlay("last")
            }, this, !0)
        };
        this.frame_26 = function() {
            this.stop()
        };
        this.frame_27 = function() {
            1 == this.comm_result && this.bg.gotoAndPlay("last");
            1 == this.character_num && this.boot_effect();
            window.cjsIpc("last");
            this.btn.removeAllEventListeners("click")
        };
        this.frame_28 = function() {
            this.btn.removeAllEventListeners("click");
            this.btn.on("click", function() {
                this.c_jump()
            }, this, !0)
        };
        this.frame_29 = function() {
            this.m1.text = this.card_comm_1;
            this.m2.text = this.card_comm_2;
            this.m3.text = this.card_comm_3;
            this.m4.text = this.card_comm_4
        };
        this.frame_33 = function() {
            this.stop();
            this.key_change_flag = 0;
            window.cjsIpc("end")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(2).call(this.frame_17).wait(9).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(4).call(this.frame_33).wait(4));
        this.sound_mc = new b.sound_mc;
        this.sound_mc.name = "sound_mc";
        this.sound_mc.parent = this;
        this.sound_mc.setTransform(192, -16, 1, 1, 0, 0, 0, 7, 7);
        this.timeline.addTween(a.Tween.get(this.sound_mc).wait(37));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EhBnBH4MAAAiPvMCDPAAAMAAACPvgAyvPAMAlfAAAMAAAgn/MglfAAAg");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(37));
        this.result = new b.result_container;
        this.result.name = "result";
        this.result.parent = this;
        this.result.setTransform(40,
            289.7);
        this.timeline.addTween(a.Tween.get(this.result).wait(15).to({
            x: 120,
            y: 109.7
        }, 0).to({
            _off: !0
        }, 12).wait(10));
        this.tapchange = new b.mc_tapchange;
        this.tapchange.name = "tapchange";
        this.tapchange.parent = this;
        this.tapchange.setTransform(143, 175, 1, 1, 0, 0, 0, 54, 11);
        this.tapchange._off = !0;
        this.timeline.addTween(a.Tween.get(this.tapchange).wait(33).to({
            _off: !1
        }, 0).wait(4));
        this.heart = new b.effect_lovemax_container_arr;
        this.heart.name = "heart";
        this.heart.parent = this;
        this.heart.setTransform(120, 208.15);
        this.heart._off = !0;
        this.timeline.addTween(a.Tween.get(this.heart).wait(15).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 12).wait(10));
        this.m4 = new a.Text("", "12px 'Arial'");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(9, 234.6);
        this.m3 = new a.Text("", "12px 'Arial'");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(9, 220.4);
        this.m2 = new a.Text("", "12px 'Arial'");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(9, 205.6);
        this.m1 = new a.Text("", "12px 'Arial'");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(9, 191.6);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.m1
            }, {
                t: this.m2
            }, {
                t: this.m3
            }, {
                t: this.m4
            }]
        }, 29).wait(8));
        this.w2 = new b.___\u4e0b\u90e8\u30a6\u30a4\u30f3\u30c9\u30a6___;
        this.w2.name = "w2";
        this.w2.parent = this;
        this.w2.setTransform(2, 217.55);
        this.w2._off = !0;
        this.timeline.addTween(a.Tween.get(this.w2).wait(27).to({
                _off: !1
            },
            0).to({
            y: 155.8
        }, 3, a.Ease.get(1)).to({
            y: 158.4
        }, 3, a.Ease.get(1)).wait(4));
        this.charaEffect_set = new b.charaEffect_set;
        this.charaEffect_set.name = "charaEffect_set";
        this.charaEffect_set.parent = this;
        this.timeline.addTween(a.Tween.get(this.charaEffect_set).wait(37));
        this.ch = new b.chs;
        this.ch.name = "ch";
        this.ch.parent = this;
        this.ch.setTransform(-280, -10.4, 1, 1, 0, 0, 0, 0, -.4);
        this.timeline.addTween(a.Tween.get(this.ch).wait(37));
        this.ch2 = new b.chs2;
        this.ch2.name = "ch2";
        this.ch2.parent = this;
        this.ch2.setTransform(-350,
            -10.4, 1, 1, 0, 0, 0, 0, -.4);
        this.timeline.addTween(a.Tween.get(this.ch2).wait(37));
        this.ch_back = new b.chs;
        this.ch_back.name = "ch_back";
        this.ch_back.parent = this;
        this.ch_back.setTransform(-420, -10.4, 1, 1, 0, 0, 0, 0, -.4);
        this.timeline.addTween(a.Tween.get(this.ch_back).wait(37));
        this.instance = new b.dark;
        this.instance.parent = this;
        this.instance.setTransform(120, 128, 1, 1, 0, 0, 0, 120, 128);
        this.instance.alpha = 0;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(8).to({
            _off: !1
        }, 0).to({
                alpha: .1484
            },
            6, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(22));
        this.bg = new b.bg_container;
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.bg).wait(37));
        this.btn_tap = new b._btn;
        this.btn_tap.name = "btn_tap";
        this.btn_tap.parent = this;
        this.btn_tap.setTransform(86, 156.95, .45, .1064);
        this.btn_tap.alpha = .0117;
        this.btn_tap._off = !0;
        this.timeline.addTween(a.Tween.get(this.btn_tap).wait(33).to({
            _off: !1
        }, 0).wait(4));
        this.btn = new b._btn;
        this.btn.name = "btn";
        this.btn.parent =
            this;
        this.btn.alpha = .0117;
        this.btn._off = !0;
        this.timeline.addTween(a.Tween.get(this.btn).wait(8).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 7).wait(2).to({
            _off: !1,
            x: -1,
            y: -1
        }, 0).to({
            _off: !0
        }, 10).wait(1).to({
            _off: !1,
            x: 0,
            y: 0
        }, 0).wait(9));
        this.effect8 = new b.replace_effect8;
        this.effect8.name = "effect8";
        this.effect8.parent = this;
        this.effect8.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect8).to({
            _off: !0
        }, 1).wait(36));
        this.effect7 = new b.replace_effect7;
        this.effect7.name = "effect7";
        this.effect7.parent =
            this;
        this.effect7.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect7).to({
            _off: !0
        }, 1).wait(36));
        this.effect6 = new b.replace_effect6;
        this.effect6.name = "effect6";
        this.effect6.parent = this;
        this.effect6.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect6).to({
            _off: !0
        }, 1).wait(36));
        this.effect5 = new b.replace_effect5;
        this.effect5.name = "effect5";
        this.effect5.parent = this;
        this.effect5.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect5).to({
                _off: !0
            },
            1).wait(36));
        this.effect4 = new b.replace_effect4;
        this.effect4.name = "effect4";
        this.effect4.parent = this;
        this.effect4.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect4).to({
            _off: !0
        }, 1).wait(36));
        this.effect3 = new b.replace_effect3;
        this.effect3.name = "effect3";
        this.effect3.parent = this;
        this.effect3.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect3).to({
            _off: !0
        }, 1).wait(36));
        this.effect2 = new b.replace_effect2;
        this.effect2.name = "effect2";
        this.effect2.parent = this;
        this.effect2.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.effect2).to({
            _off: !0
        }, 1).wait(36));
        this.replace_effect1 = new b.replace_effect1;
        this.replace_effect1.name = "replace_effect1";
        this.replace_effect1.parent = this;
        this.replace_effect1.setTransform(-224, -106);
        this.timeline.addTween(a.Tween.get(this.replace_effect1).to({
            _off: !0
        }, 1).wait(36));
        this.replace_name2 = new b.replace_name2_1;
        this.replace_name2.name = "replace_name2";
        this.replace_name2.parent = this;
        this.replace_name2.setTransform(-70,
            140.95, 1, 1, 0, 0, 0, 37.5, 11.5);
        this.timeline.addTween(a.Tween.get(this.replace_name2).to({
            _off: !0
        }, 1).wait(36));
        this.replace_name = new b.replace_name_1;
        this.replace_name.name = "replace_name";
        this.replace_name.parent = this;
        this.replace_name.setTransform(-70, 110.95, 1, 1, 0, 0, 0, 37.5, 11.5);
        this.timeline.addTween(a.Tween.get(this.replace_name).to({
            _off: !0
        }, 1).wait(36));
        this.replace_bg = new b.replace_bg_1;
        this.replace_bg.name = "replace_bg";
        this.replace_bg.parent = this;
        this.replace_bg.setTransform(-161, 130.85, .5, .5,
            0, 0, 0, 120, 160);
        this.timeline.addTween(a.Tween.get(this.replace_bg).to({
            _off: !0
        }, 1).wait(36))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-300, -172, 840, 792);
    b.properties = {
        id: "event_communication_replace_pex_memory",
        width: 240,
        height: 256,
        fps: 12,
        color: "#000000",
        opacity: 0,
        manifest: [{
            src: "images/change.png",
            id: "event_communication_replace_pex_memory_change"
        }, {
            src: "images/_continue.png",
            id: "event_communication_replace_pex_memory__continue"
        }, {
            src: "images/fp_kirakira.png",
            id: "event_communication_replace_pex_memory_fp_kirakira"
        }, {
            src: "images/heart_white.png",
            id: "event_communication_replace_pex_memory_heart_white"
        }, {
            src: "images/replace_bg.jpg",
            id: "event_communication_replace_pex_memory_replace_bg"
        }, {
            src: "images/replace_character1.png",
            id: "event_communication_replace_pex_memory_replace_character1"
        }, {
            src: "images/replace_character2.png",
            id: "event_communication_replace_pex_memory_replace_character2"
        }, {
            src: "images/replace_character3.png",
            id: "event_communication_replace_pex_memory_replace_character3"
        }, {
            src: "images/replace_character4.png",
            id: "event_communication_replace_pex_memory_replace_character4"
        }, {
            src: "images/replace_name.png",
            id: "event_communication_replace_pex_memory_replace_name"
        }, {
            src: "images/replace_name2.png",
            id: "event_communication_replace_pex_memory_replace_name2"
        }, {
            src: "images/sp_kirakira.png",
            id: "event_communication_replace_pex_memory_sp_kirakira"
        }, {
            src: "images/sp_textRes1.png",
            id: "event_communication_replace_pex_memory_sp_textRes1"
        }, {
            src: "images/sp_textRes2.png",
            id: "event_communication_replace_pex_memory_sp_textRes2"
        }, {
            src: "images/sp_textRes2_b.png",
            id: "event_communication_replace_pex_memory_sp_textRes2_b"
        }, {
            src: "images/sp_textRes2_w.png",
            id: "event_communication_replace_pex_memory_sp_textRes2_w"
        }, {
            src: "images/sp_textRes3.png",
            id: "event_communication_replace_pex_memory_sp_textRes3"
        }, {
            src: "images/sp_textRes3_b.png",
            id: "event_communication_replace_pex_memory_sp_textRes3_b"
        }, {
            src: "images/sp_textRes3_w.png",
            id: "event_communication_replace_pex_memory_sp_textRes3_w"
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
    k.bootcompsLoaded = k.bootcompsLoaded || [];
    k.bootstrapListeners || (k.bootstrapListeners = []);
    k.bootstrapCallback = function(c) {
        k.bootstrapListeners.push(c);
        if (0 < k.bootcompsLoaded.length)
            for (var d = 0; d < k.bootcompsLoaded.length; ++d) c(k.bootcompsLoaded[d])
    };
    k.compositions = k.compositions || {};
    k.compositions.event_communication_replace_pex_memory = {
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
    k.makeResponsive = function(c, d, e, l, n) {
        function p() {
            var q = b.properties.width,
                r = b.properties.height,
                t = window.innerWidth,
                u = window.innerHeight,
                v = window.devicePixelRatio ||
                1,
                w = t / q,
                x = u / r,
                m = 1;
            if (c)
                if ("width" == d && y == t || "height" == d && z == u) m = A;
                else if (e) 1 == l ? m = Math.min(w, x) : 2 == l && (m = Math.max(w, x));
            else if (t < q || u < r) m = Math.min(w, x);
            n[0].width = q * v * m;
            n[0].height = r * v * m;
            n.forEach(function(B) {
                B.style.width = q * m + "px";
                B.style.height = r * m + "px"
            });
            stage.scaleX = v * m;
            stage.scaleY = v * m;
            y = t;
            z = u;
            A = m;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var y, z, A = 1;
        window.addEventListener("resize", p);
        p()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
