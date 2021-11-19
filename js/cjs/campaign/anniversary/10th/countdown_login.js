(function(a, k) {
    function E() {
        var c = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        c.gotoAndStop(this.currentFrame);
        c.paused = this.paused;
        c.framerate = this.framerate;
        return c
    }

    function h(c, d, e) {
        c = a.extend(c, a.MovieClip);
        c.clone = E;
        c.nominalBounds = d;
        c.frameBounds = e;
        return c
    }
    var f, b = {},
        F = {},
        g = {};
    b.ssMetadata = [];
    (b.bg = function() {
        this.initialize(g.countdown_login_bg)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.bg_library = function() {
        this.initialize(g.countdown_login_bg_library)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.bg_page = function() {
        this.initialize(g.countdown_login_bg_page)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.book_bg = function() {
        this.initialize(g.countdown_login_book_bg)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.countdown_num_1 = function() {
        this.initialize(g.countdown_login_countdown_num_1)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_2 =
        function() {
            this.initialize(g.countdown_login_countdown_num_2)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_3 = function() {
        this.initialize(g.countdown_login_countdown_num_3)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_4 = function() {
        this.initialize(g.countdown_login_countdown_num_4)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_5 = function() {
        this.initialize(g.countdown_login_countdown_num_5)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_6 = function() {
        this.initialize(g.countdown_login_countdown_num_6)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_7 = function() {
        this.initialize(g.countdown_login_countdown_num_7)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_num_8 = function() {
        this.initialize(g.countdown_login_countdown_num_8)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,
        0, 364, 136);
    (b.countdown_num_9 = function() {
        this.initialize(g.countdown_login_countdown_num_9)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 364, 136);
    (b.countdown_text = function() {
        this.initialize(g.countdown_login_countdown_text)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 344, 78);
    (b.glitter = function() {
        this.initialize(g.countdown_login_glitter)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 40, 40);
    (b.logo = function() {
        this.initialize(g.countdown_login_logo)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 400, 314);
    (b.logo_b = function() {
        this.initialize(g.countdown_login_logo_b)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 400, 314);
    (b.logo_w = function() {
        this.initialize(g.countdown_login_logo_w)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 400, 314);
    (b.material_book_white_side = function() {
        this.initialize(g.countdown_login_material_book_white_side)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 40, 654);
    (b.material_book_white_under =
        function() {
            this.initialize(g.countdown_login_material_book_white_under)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 507, 19);
    (b.material_bookcover_back = function() {
        this.initialize(g.countdown_login_material_bookcover_back)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 494, 650);
    (b.material_bookcover_front = function() {
        this.initialize(g.countdown_login_material_bookcover_front)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.material_bookcover_side =
        function() {
            this.initialize(g.countdown_login_material_bookcover_side)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 34, 659);
    (b.page_mov = function() {
        this.initialize(g.countdown_login_page_mov)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.page_open01 = function() {
        this.initialize(g.countdown_login_page_open01)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open02 = function() {
        this.initialize(g.countdown_login_page_open02)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open03 = function() {
        this.initialize(g.countdown_login_page_open03)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open04 = function() {
        this.initialize(g.countdown_login_page_open04)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open05 = function() {
        this.initialize(g.countdown_login_page_open05)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open06 =
        function() {
            this.initialize(g.countdown_login_page_open06)
        }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open07 = function() {
        this.initialize(g.countdown_login_page_open07)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open08 = function() {
        this.initialize(g.countdown_login_page_open08)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open09 = function() {
        this.initialize(g.countdown_login_page_open09)
    }).prototype =
        f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.page_open10 = function() {
        this.initialize(g.countdown_login_page_open10)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 520, 660);
    (b.replace_chara = function() {
        this.initialize(g.countdown_login_replace_chara)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.replace_target_240x240_item_l = function() {
        this.initialize(g.countdown_login_replace_target_240x240_item_l)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds =
        new a.Rectangle(0, 0, 240, 240);
    (b.wt_replace_item = function() {
        this.initialize(g.countdown_login_wt_replace_item)
    }).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0, 0, 240, 240);
    (b.page_open_all = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_10 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(10).call(this.frame_10).wait(1));
        this.instance = new b.page_open01;
        this.instance.parent = this;
        this.instance.setTransform(0, -330);
        this.instance_1 = new b.page_open02;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(0, -330);
        this.instance_2 = new b.page_open03;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, -330);
        this.instance_3 = new b.page_open04;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -330);
        this.instance_4 = new b.page_open05;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, -330);
        this.instance_5 = new b.page_open06;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, -330);
        this.instance_6 = new b.page_open07;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0,
            -330);
        this.instance_7 = new b.page_open08;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, -330);
        this.instance_8 = new b.page_open09;
        this.instance_8.parent = this;
        this.instance_8.setTransform(0, -330);
        this.instance_9 = new b.page_open10;
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, -330);
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
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, -330, 520, 660);
    (b.text_base_b = function(c, d, e) {
        this.initialize(c, d, e, {
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
    (b.text_base = function(c, d, e) {
        this.initialize(c, d, e, {
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
    }).prototype =
        h(b.text_base, new a.Rectangle(0, 0, 232, 70), null);
    (b.replace_item_l = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_target_240x240_item_l;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_item_l, new a.Rectangle(0, 0, 120, 120), null);
    (b.replace_chara_core = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_chara;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.replace_chara_core, new a.Rectangle(0, 0, 480, 620), null);
    (b.pointGlitter2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-34.6, -34.6, 69.30000000000001, 69.30000000000001);
    (b.loght_gra = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AjmO5Igy2BIAoAFIAxWCgAjhrUID3gJIAxWBIj3AJgACVu7IBTgCIAxWBIhTADg");
        this.shape.setTransform(-2.875, 71.9727, 1, 1.8018);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-44.2, -100.7, 88.5, 345.4);
    (b.light_slush = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.light_slush, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9),
        null);
    (b.item_w = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.wt_replace_item;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.item_w, new a.Rectangle(0, 0, 120, 120), null);
    (b.gr_ring = function(c, d, e) {
        null == e && (e = !1);
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,255,255,0)", "rgba(255,255,255,0.788)", "#FFFFFF"], [.471, .722, 1], 0, 0, 0, 0, 0, 129.8).s().p("AuIOJQl3l3AAoSQAAoRF3l3QF3l3IRAAQISAAF3F3QF3F3AAIRQAAISl3F3Ql3F3oSAAQoRAAl3l3g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.gr_ring, new a.Rectangle(-128, -128, 256, 256), null);
    (b.gr_bubble_parts = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(252,194,242,0)", "rgba(255,255,255,0.6)", "rgba(255,196,238,0)"], [.251, .855, .882], 0, 0, 0, 0, 0, 70.4).s().p("AnuHvQjNjMAAkjQAAkiDNjMQDMjNEiAAQEjAADMDNQDNDMAAEiQAAEjjNDMQjMDNkjAAQkiAAjMjNg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.gr_bubble_parts,
        new a.Rectangle(-70, -70, 140, 140), null);
    (b.glitter_common_parts2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.glitter;
        this.instance.parent = this;
        this.instance.setTransform(-8, -8, .4, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.glitter_common_parts2, new a.Rectangle(-8, -8, 16, 16), null);
    (b.cursor_inner_w = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AmplwINTAAImqLhg");
        this.shape.setTransform(0, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.cursor_inner_w, new a.Rectangle(-42.6, -36.9, 85.2, 73.8), null);
    (b.cursor_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AmplwINTAAImqLhg");
        this.shape.setTransform(0, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.cursor_inner, new a.Rectangle(-42.6, -36.9, 85.2, 73.8), null);
    (b.count_num = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 =
            function() {
                this.stop()
            };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.instance = new b.countdown_num_1;
        this.instance.parent = this;
        this.instance.setTransform(-182, -68);
        this.instance_1 = new b.countdown_num_2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-182, -68);
        this.instance_2 = new b.countdown_num_3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-182, -68);
        this.instance_3 = new b.countdown_num_4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-182,
            -68);
        this.instance_4 = new b.countdown_num_5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-182, -68);
        this.instance_5 = new b.countdown_num_6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-182, -68);
        this.instance_6 = new b.countdown_num_7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-182, -68);
        this.instance_7 = new b.countdown_num_8;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-182, -68);
        this.instance_8 = new b.countdown_num_9;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-182,
            -68);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
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
    f.nominalBounds = new a.Rectangle(-182, -68, 364, 136);
    (b.btn = function(c,
        d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A0xaVMAAAg0pMApjAAAMAAAA0pg");
        this.shape.setTransform(133, 168.475);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.btn, new a.Rectangle(0, 0, 266, 337), null);
    (b.bg_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("EgcRAkzMAAAhJlMA4jAAAMAAABJlg");
        this.shape.setTransform(.0041, .0334, .7182, .7008);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.bg_white, new a.Rectangle(-130, -165, 260, 330.1), null);
    (b.bg_light = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Aj5xLIHzAAMgD6AiXg");
        this.shape.setTransform(0, -110);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.bg_light, new a.Rectangle(-25, -220, 50, 220), null);
    (b.bg_library_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg_library;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.bg_library_1, new a.Rectangle(0, 0, 480, 620), null);
    (b.bg_black = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("A0TZyMAAAgzjMAonAAAMAAAAzjg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.bg_black, new a.Rectangle(-130, -165, 260, 330.1), null);
    (b.bg_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.bg_1, new a.Rectangle(0, 0, 240, 310), null);
    (b.asset_efc_particle_P2 = function(c, d, e) {
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
    f.nominalBounds =
        new a.Rectangle(-6.4, -5.7, 12.4, 12.5);
    (b.asset_efc_particle_p1 = function(c, d, e) {
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
    }).prototype = h(b.asset_efc_particle_p1, new a.Rectangle(-5.2, -179.6, 149, 185.2), null);
    (b.asset_efc_flashWhite1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(255,255,255,0)", "rgba(255,255,255,0)"], [.298, .522, 1, 1], 0, 0, 0, 0, 0, 130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.asset_efc_flashWhite1, new a.Rectangle(-129.2, -129.2, 258.4, 258.4), null);
    (b.asset_efc_flashBlade1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.asset_efc_flashBlade1, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.arrow_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-5.3448, -5.1698);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#666666").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape_1.setTransform(-5.8448, -4.6698);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = h(b.arrow_inner, new a.Rectangle(-11.2, -10.3, 11.2, 10.8), null);
    (b.page_mov_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.page_mov;
        this.instance.parent =
            this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.bookcover_side = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.material_bookcover_side;
        this.instance.parent = this;
        this.instance.setTransform(0, -330);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, -330, 34, 659);
    (b.bookcover_front = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.material_bookcover_front;
        this.instance.parent = this;
        this.instance.setTransform(-7, -325);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-7, -325, 520, 660);
    (b.bookcover_back = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.material_bookcover_back;
        this.instance.parent = this;
        this.instance.setTransform(-7, -325);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds =
        new a.Rectangle(-7, -325, 494, 650);
    (b.book_white_under = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.material_book_white_under;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 507, 19);
    (b.book_white_side = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.material_book_white_side;
        this.instance.parent = this;
        this.instance.setTransform(0, -327);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, -327, 40, 654);
    (b.book_bg_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.book_bg;
        this.instance.parent = this;
        this.instance.setTransform(-240, -320);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-240, -320, 480, 640);
    (b.bg_page_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg_page;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.bg_page_1, new a.Rectangle(0, 0, 240, 310), null);
    (b.logo_w_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.logo_w;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.logo_w_1, new a.Rectangle(0, 0, 200, 157), null);
    (b.logo_b_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.logo_b;
        this.instance.parent = this;
        this.instance.setTransform(156, 122, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.logo_b_1, new a.Rectangle(156, 122, 200, 157), null);
    (b.logo_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.logo;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 200, 157);
    (b.text_window = function(c, d, e) {
        this.initialize(c, d, e, {
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
        this.b1_1.name = "b1_1";
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-116,
        -35, 232, 70);
    (b.spread = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg_light;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1, 1, 0, -119.9999, 60.0001);
        this.instance_1 = new b.bg_light;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, 1, 1, 0, -29.9996, 150.0004);
        this.instance_2 = new b.bg_light;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, 1, 1, 149.9988);
        this.instance_3 = new b.bg_light;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, 1, 1, 60.0001);
        this.instance_4 = new b.bg_light;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, 1, 1, 0, -150.0001, 29.9999);
        this.instance_5 = new b.bg_light;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, 1, 1, 0, -59.9992, 120.0008);
        this.instance_6 = new b.bg_light;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, 1, 1, 119.9993);
        this.instance_7 = new b.bg_light;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, 1, 1, 29.9999);
        this.instance_8 = new b.bg_light;
        this.instance_8.parent = this;
        this.instance_8.setTransform(0, 0, 1, 1, 0, 180, 0);
        this.instance_9 = new b.bg_light;
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, 0, 1, 1, 0, -89.9991, 90.0009);
        this.instance_10 = new b.bg_light;
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 0, 1, 1, 89.9991);
        this.instance_11 = new b.bg_light;
        this.instance_11.parent = this;
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
                },
                {
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
    }).prototype = h(b.spread, new a.Rectangle(-220, -220, 440, 440), null);
    (b.replace_chara_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.replace_chara_core;
        this.instance.parent = this;
        this.instance.setTransform(.1, 0, 1, 1, 0, 0, 0, .1, 0);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_chara_1, new a.Rectangle(0, 0, 480, 620), null);
    (b.mc_ring_move =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.instance = new b.gr_ring;
            this.instance.parent = this;
            this.instance.setTransform(0, 0, 1.55, 1.672);
            this.instance.alpha = .6016;
            this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
                scaleX: 1.5496,
                scaleY: 1.6714,
                alpha: .6032
            }, 0).wait(1).to({
                scaleX: 1.5482,
                scaleY: 1.6697,
                alpha: .6088
            }, 0).wait(1).to({
                scaleX: 1.5456,
                scaleY: 1.6664,
                alpha: .6192
            }, 0).wait(1).to({
                scaleX: 1.5415,
                scaleY: 1.6613,
                alpha: .6353
            }, 0).wait(1).to({
                scaleX: 1.5359,
                scaleY: 1.6542,
                alpha: .6579
            }, 0).wait(1).to({
                scaleX: 1.5288,
                scaleY: 1.6454,
                alpha: .686
            }, 0).wait(1).to({
                scaleX: 1.5212,
                scaleY: 1.6358,
                alpha: .7164
            }, 0).wait(1).to({
                scaleX: 1.5141,
                scaleY: 1.6269,
                alpha: .7445
            }, 0).wait(1).to({
                scaleX: 1.5085,
                scaleY: 1.6198,
                alpha: .767
            }, 0).wait(1).to({
                scaleX: 1.5044,
                scaleY: 1.6147,
                alpha: .7831
            }, 0).wait(1).to({
                scaleX: 1.5018,
                scaleY: 1.6115,
                alpha: .7935
            }, 0).wait(1).to({
                scaleX: 1.5004,
                scaleY: 1.6097,
                alpha: .7991
            }, 0).wait(1).to({
                scaleX: 1.5,
                scaleY: 1.6092,
                alpha: .8008
            }, 0).wait(1).to({
                scaleX: 1.5004,
                scaleY: 1.6097,
                alpha: .7991
            }, 0).wait(1).to({
                scaleX: 1.5018,
                scaleY: 1.6115,
                alpha: .7935
            }, 0).wait(1).to({
                scaleX: 1.5044,
                scaleY: 1.6147,
                alpha: .7831
            }, 0).wait(1).to({
                scaleX: 1.5085,
                scaleY: 1.6198,
                alpha: .767
            }, 0).wait(1).to({
                scaleX: 1.5141,
                scaleY: 1.6269,
                alpha: .7445
            }, 0).wait(1).to({
                scaleX: 1.5212,
                scaleY: 1.6358,
                alpha: .7164
            }, 0).wait(1).to({
                scaleX: 1.5288,
                scaleY: 1.6454,
                alpha: .686
            }, 0).wait(1).to({
                scaleX: 1.5359,
                scaleY: 1.6542,
                alpha: .6579
            }, 0).wait(1).to({
                scaleX: 1.5415,
                scaleY: 1.6613,
                alpha: .6353
            }, 0).wait(1).to({
                scaleX: 1.5456,
                scaleY: 1.6664,
                alpha: .6192
            }, 0).wait(1).to({
                scaleX: 1.5482,
                scaleY: 1.6697,
                alpha: .6088
            }, 0).wait(1).to({
                scaleX: 1.5496,
                scaleY: 1.6714,
                alpha: .6032
            }, 0).wait(1).to({
                scaleX: 1.55,
                scaleY: 1.672,
                alpha: .6016
            }, 0).wait(1))
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-198.4, -214, 396.8, 428);
    (b.mc_replace_chara = function(c, d, e) {
        this.initialize(c, d, e, {
            def: 0,
            nod: 4,
            nod2: 14,
            nod_double: 30,
            jump: 44,
            jump_double: 53,
            pop: 69,
            swing: 77,
            swing_L: 95,
            swing_R: 112
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_4 = function() {
            this.play()
        };
        this.frame_13 = function() {
            this.stop()
        };
        this.frame_14 =
            function() {
                this.play()
            };
        this.frame_29 = function() {
            this.stop()
        };
        this.frame_30 = function() {
            this.play()
        };
        this.frame_43 = function() {
            this.stop()
        };
        this.frame_44 = function() {
            this.play()
        };
        this.frame_52 = function() {
            this.stop()
        };
        this.frame_53 = function() {
            this.play()
        };
        this.frame_68 = function() {
            this.stop()
        };
        this.frame_69 = function() {
            this.play()
        };
        this.frame_76 = function() {
            this.stop()
        };
        this.frame_77 = function() {
            this.play()
        };
        this.frame_94 = function() {
            this.stop()
        };
        this.frame_95 = function() {
            this.play()
        };
        this.frame_111 = function() {
            this.stop()
        };
        this.frame_112 = function() {
            this.play()
        };
        this.frame_128 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(9).call(this.frame_13).wait(1).call(this.frame_14).wait(15).call(this.frame_29).wait(1).call(this.frame_30).wait(13).call(this.frame_43).wait(1).call(this.frame_44).wait(8).call(this.frame_52).wait(1).call(this.frame_53).wait(15).call(this.frame_68).wait(1).call(this.frame_69).wait(7).call(this.frame_76).wait(1).call(this.frame_77).wait(17).call(this.frame_94).wait(1).call(this.frame_95).wait(16).call(this.frame_111).wait(1).call(this.frame_112).wait(16).call(this.frame_128).wait(1));
        this.c = new b.replace_chara_1;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.c).wait(129))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-32.4, -31, 544.2, 675.2);
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-106.5, -70, 169.5, 140);
    (b.lightburst_container =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.instance = new b.asset_efc_flashWhite1;
            this.instance.parent = this;
            this.instance.setTransform(0, 0, .3426, .0553);
            this.instance_1 = new b.asset_efc_flashBlade1;
            this.instance_1.parent = this;
            this.instance_1.setTransform(0, 0, .4603, .4828, 0, 180, 0);
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                    t: this.instance_1,
                    p: {
                        scaleX: .4603,
                        scaleY: .4828,
                        skewX: 180,
                        y: 0
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
                        skewX: 0,
                        y: 0
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
                        skewX: 0,
                        y: -.05
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
        }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-186.5, -92.5, 373.1, 185.1);
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
    }).prototype = h(b.glitter_first_inner,
        new a.Rectangle(-18.5, -21.7, 37.1, 43.4), null);
    (b.g\uff4citter_rise_core = function(c, d, e) {
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-9.6, -11.2, 19.299999999999997, 22.5);
    (b.glitter_common_parts1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.frame_8 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(9));
        this.instance = new b.light_slush;
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
        }, 1).wait(10));
        this.instance_1 = new b.glitter_common_parts2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_1.alpha = .4297;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
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
        }, 1).wait(9))
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-74.1, -41, 148.2, 82.1);
    (b.cursol_container_w = function(c, d, e) {
        this.initialize(c, d, e, {});
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
            },
            0).wait(1).to({
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
        }, 0).wait(1).to({
            y: 5.4262
        }, 0).wait(1).to({
            regX: .4,
            x: 9.55,
            y: 5.15
        }, 0).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(4.1, .4, 10.8, 11.4);
    (b.cursol_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.cursor_inner;
        this.instance.parent =
            this;
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(4.1, 2.4, 10.8, 11.5);
    (b.asset_efc_particle2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 =
            function() {
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
    (b.asset_efc_particle1 = function(c, d, e) {
        this.initialize(c, d, e, {});
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
        this.instance_1 = new b.asset_efc_particle_P2;
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
            },
            0).wait(1).to({
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
    }).prototype =
        f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.arrow_container = function(c, d, e) {
        this.initialize(c, d, e, {});
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds =
        new a.Rectangle(-12.7, -11.8, 12.7, 12.3);
    (b.bookcover = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_2 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(2).call(this.frame_2).wait(1));
        this.instance = new b.bookcover_front("synched", 0);
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(3));
        this.instance_1 = new b.book_white_side("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(474.25, 12.4, 1, 1, 0, 0, 0, .3, 0);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3));
        this.instance_2 = new b.book_white_under("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(7.25, 320.4, 1, 1, 0, 0, 0, .3, 0);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(3));
        this.instance_3 = new b.bookcover_side("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-2.4, 21.3, 1, 1, 0, 0, 0, .2, .2);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(3));
        this.instance_4 = new b.bookcover_back("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(275.75,
            24.8, 1, 1, 0, 0, 0, 240, 0);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(3))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-7, -325, 529.8, 675.1);
    (b.logo_all = function(c, d, e) {
        this.initialize(c, d, e, {
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
        c = new a.Shape;
        c._off = !0;
        c.graphics.p("AghICQgSgCgOgPQgCgDgHAAQgHAAgFACQgWAIgLABQgSADgQgIQgEgCgHABIgMAEQgZAHgLAAQgTAAgPgOQgCgCgGABQgGAAgEACQgZAKgNACQgVADgRgMQgCgCgFABIgIADQgTAKgOgBQgOgBgRgMQgEgDgHgBQgHAAgFACQgXAIgLABQgTADgQgJQgEgBgHABIgLADIg8ADIg+AEIgSAAQgLABgHABQgPADgLgDQgNgEgIgMQgIgMACgNQABgOAMgLQAGgHAAgFQABgFgFgIQgNgTAFgSQAEgRAWgMIAYgNQAOgHAMgEQAGgCAJACQAIABAGAFQASAOAWAFQATAFAagCQASgBAZAFIAsALQANAEALgBQAMgBAKgGQAVgNAQAEQAQADAQATQAFAHAEgBQADAAAGgGIANgOIAOgPQgKgOAAgZQACgcgBgOIgCgTIgCgTQAAgRADgWIADgLIAGgNIg2gHIimgYQgHgBgJgEIgPgGQgggLAAggIgCgMQABgVgKgLQgJgMgVgCQgIgCgMgFIgVgLIgHAWIgsAAIgPgqQAPgHAFgFQAKgIgIgQIgTAJQgMAFgKgFQgPgJgCgOQgDgPAMgLIAFgEIADgFQAIgdAEgHQADgHALgMIgNgbIgeAKIAGgfIgJABIgIAAIgHgDIgHgDIADgGQACgEACgCIA4giIgOgCIgLgCIgFgEIgFgEIADgGQADgDACgBIAWgJIAWgJQACgCADgFQACgFgBgCIgJgPIgLgPQgFgIACgCQABgDADgCIAHgDQAHgBAGAEIAaAOQAPAIAJAIQAJAHAHgBQAGgBAHgIIAbgfQgRgIgEgXQgEgggEgGQgCgDABgFQABgGACgBQAKgDAEgJIAFgSQAFgQAJgEQAJgDAQAJQAIAEAUAGIAAgKIgDgSIAKACIAJACIAJADIAIAEIAMgaIAJAXIAfgDIASgOQgCARAIAJQAGAHAPAEQAIACABAFQABAEgGAHQgGAJgCAQQAHgRAPgFQALgEASAEQACAAAGgDQA5geBGgOQA7gLBLgCQCEgEAfABQBdABBGAPQAZAGAkAKIA9ATIACgDIADgDIAUgIIAAAKIgBALIgEAMIgGAPIAXgKIASgJQAFgDAEgFQAEgFAAgEQABgVAJgGQAJgFATAJIAHABIANgTIAKASIArgJQAAAZAbAEQACAAACAGQABAFAAAEQAAACgDADIgEAFIAZAAIAQgBQAEgBAIgGQAHgDAGAIIAPAVQAHANgGANQgBAEgEAEIgHAHQAQAVAMgXIACgFIADgGIAGgEIAHgEIAEAGQACADAAADQgBALAHADQAEACAMgBQAbgDAFAIQAGAHgJAbIgCAFIAZANIAXAMQADABACAFIADAHIgIADQgEABgDAAIgLgEIgKgFIgCARIgBAQIABAGIADAFIAJASQACAKgQAEQgBAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQgDAcgJgHQgKgPgFgEIgGgCQgKAPgBAGQAAAHAKAJQALgMARACQASABAMAOIgFggIAFgEIAKAKQAHAFACAFQABACgEAGQgEAFgEAEQgJAIADAJQACAFAHAJIgMAUQgHANgNAAIgGAAIgFABIgIAGQgFADgBAEQgDAMgJApQgFAZAUAGQAJACABAFQACAEgFAHQgDAFgCAJIgEAPIguAAIgFgVIghALIgfAMQgIAEgHAOQgDAGAAAMQACA6g9AKQgqAHiSAUIgaADIAABLIAABJQAAARgMAMQgKAJgTAIQASAIALABQAOABAQgKQAcgRAXgJQAegLAcABQATABAQANQAQAOACASQACAPAGADQAGACAMgHIALgHIAMgGIAXgKQAOgFAHACQASAHAZAAIAqgBQAiAAAJAKQAKAKgBAiQAAAJAGAMQAMAagQAUQgLAMgLAFQgNAGgPgDQgHgCgLAAIgSAAIgSgCIgTgDIgNgCQgIgBgFACQgbANgOgDQgNgDgTgXQgCgDgIgBQgHAAgDACQgOAOgXAHIgoAJQgMACgSgEQgLgDgTgHQgMgFgJAAQgKgBgLAEQgKADgPACIgbABIgXAEQgTAGgOgEQgNgEgMgQQgFgHgFgCQgGgBgIAFQg/ArhFgSQgDgBgEABIgIACQgRAEgLAAIgGAAgAigFpIAlAJIAkAHQAEAAAHgDIAMgGIgCgGQgKAAgNgDIgYgEIgQgCQgSAAgNAIgADIFcQgMAMgIAEQAMAJANgHQAQgJAGABQgKgNgJABQgEAAgEACgAKZghIgFAKIAJADQAFACACgBQAFgCADgFQAEgEAAgFQABgDgEgEIgGgIgAqngvQgCAAgCAFQgDAFAAADQAAADAEAEIAGAHIARgTIgLgGQgFgCgDAAIgBAAgArchcIALABIAEgbIgKgBgAMGjjQgCgBgBgFIgDgoIAQAJQAIAFACAFQABAEgFAJIgJAOQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAIgBAAIgDgBgAqOlUQgCgHgBgFQgBgMgGgEQgGgDgLAEQgDABgGgBIgKgCIALgQIAHgHIAGgIQAFgIAHgDQAGgDAKADQAKAEADAHQADAGgBALIgEAbIgDAcIgJABIgFgNgAL6lVIgOgBIANgmIAMANIAIAMQABACgCAFQgDAFgDABIgKABIgCAAgAK0mKIAYgWIAHAHIgWAZg");
        c.setTransform(.6438, -5.3039);
        this.instance = new b.loght_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-90.9, -63, 1, 1, 44.9994, 0, 0, 0, 99.7);
        this.instance._off = !0;
        d = [this.instance];
        for (e = 0; e < d.length; e++) d[e].mask = c;
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
        this.instance_1 = new b.logo_w_1;
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
            x: -.75,
            y: -3.7,
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-82.7, -69.6, 166.10000000000002, 130.39999999999998);
    (b.UI_arrow_w = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.ar1 =
            new b.cursol_container_w;
        this.ar1.name = "ar1";
        this.ar1.parent = this;
        this.ar1.setTransform(-6.65, -6.45, 1, 1, 0, 0, 0, 6.3, 5.5);
        this.timeline.addTween(a.Tween.get(this.ar1).wait(1))
    }).prototype = h(b.UI_arrow_w, new a.Rectangle(-8.8, -11.5, 10.8, 9.4), null);
    (b.UI_arrow_b = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.ar1 = new b.cursol_container;
        this.ar1.name = "ar1";
        this.ar1.parent = this;
        this.ar1.setTransform(-6.65, -6.45, 1, 1, 0, 0, 0, 6.3, 5.5);
        this.timeline.addTween(a.Tween.get(this.ar1).wait(1))
    }).prototype = h(b.UI_arrow_b,
        new a.Rectangle(-8.8, -9.6, 10.700000000000001, 9.4), null);
    (b.spread_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_99 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(99).call(this.frame_99).wait(1));
        this.instance = new b.spread;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            rotation: 360
        }, 99).wait(1))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-221.3, -221.3, 442.70000000000005, 442.70000000000005);
    (b.mc_bubble_all = function(c,
        d, e) {
        null == e && (e = !1);
        this.initialize(c, d, e, {});
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
    }).prototype = h(b.mc_bubble_all, new a.Rectangle(-344, -124, 338, 254), null);
    (b.item_glitter = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_35 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(35).call(this.frame_35).wait(1));
        this.instance = new b.glitter_common_parts1;
        this.instance.parent = this;
        this.instance.setTransform(-18.75, 15.9, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.glitter_common_parts1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-4.65, -33.4, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(33));
        this.instance_2 = new b.glitter_common_parts1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-46.05,
            24.15, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(7).to({
            _off: !1
        }, 0).wait(29));
        this.instance_3 = new b.glitter_common_parts1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(46.25, 15.55, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(9).to({
            _off: !1
        }, 0).wait(27));
        this.instance_4 = new b.glitter_common_parts1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(36.1, -10.2, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(11).to({
            _off: !1
        }, 0).wait(25));
        this.instance_5 = new b.glitter_common_parts1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(21.9, 47.1, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(26).to({
            _off: !1
        }, 0).wait(10));
        this.instance_6 = new b.glitter_common_parts1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-49.9, -47.15, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(28).to({
                _off: !1
            },
            0).wait(8));
        this.instance_7 = new b.glitter_common_parts1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(49.8, -45.45, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(36))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-51.9, -50, 103.69999999999999, 100);
    (b.g\uff4citter_rise_inner = function(c, d, e) {
        this.initialize(c, d, e, {
            r: 46,
            "-": 142
        });
        this.frame_0 = function() {
            this.rotation += Math.floor(14 * Math.random());
            this.gotoAndPlay(Math.floor(40 * Math.random() + 42))
        };
        this.frame_142 =
            function() {
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
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-9.6, -28.7, 19.9, 395.5);
    (b.glitter_rise = function(c, d, e) {
        this.initialize(c, d, e, {});
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
        this.instance_3.setTransform(165.35, 4.1, .3695, .3674);
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
        this.instance_7.setTransform(81.8, 8.2, .3962, .3946);
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
        this.instance_11.setTransform(49.85, 11.35, .6947, .692);
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
        this.instance_15.setTransform(7.25, 1.75, .3962, .3946);
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
        this.instance_19.setTransform(-94.85, 9.25, .6947, .692);
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
                }, {
                    t: this.instance_19
                }, {
                    t: this.instance_18
                }, {
                    t: this.instance_17
                },
                {
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
    (b.asset_efc_partilceSarcle = function(c, d, e) {
        this.initialize(c, d, e, {});
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
        this.instance_3.setTransform(-26.55,
            10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new b.asset_efc_particle1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.asset_efc_particle1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.asset_efc_particle2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.asset_efc_particle1;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.asset_efc_particle1;
        this.instance_8.parent = this;
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
        this.instance_14.setTransform(-12.4, 14, .7527, .5292, 0, -104.9694,
            100.6856);
        this.instance_15 = new b.asset_efc_particle1;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.asset_efc_particle1;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 = new b.asset_efc_particle1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_18 = new b.asset_efc_particle2;
        this.instance_18.parent =
            this;
        this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.asset_efc_particle1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.asset_efc_particle1;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65, 1.75, .5292, .5292, -118.5129);
        this.instance_21 = new b.asset_efc_particle2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_22 =
            new b.asset_efc_particle1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_23 = new b.asset_efc_particle2;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-10.95, 8.25, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_24 = new b.asset_efc_particle2;
        this.instance_24.parent = this;
        this.instance_24.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_25 = new b.asset_efc_particle2;
        this.instance_25.parent = this;
        this.instance_25.setTransform(6.55,
            -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_26 = new b.asset_efc_particle2;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_27 = new b.asset_efc_particle1;
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.asset_efc_particle1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 =
            new b.asset_efc_particle1;
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
        this.instance_32.setTransform(7.1,
            -12.3, .5292, .5292, -28.5129);
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
        this.instance_37.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
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
        this.instance_43.setTransform(28,
            -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
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
        this.instance_47.parent =
            this;
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
                }, {
                    t: this.instance_31
                }, {
                    t: this.instance_30
                }, {
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
    }).prototype = h(b.asset_efc_partilceSarcle, new a.Rectangle(-320.5, -245.4, 564, 474.70000000000005), null);
    (b.item_glitter_all = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.item_glitter;
        this.instance.parent = this;
        this.instance.setTransform(166.45, 168.45, .9936, .9936);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.item_glitter_all, new a.Rectangle(145.8, 121.3, 72.1, 64.89999999999999),
        null);
    (b.reward = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.glitter = new b.item_glitter_all;
        this.glitter.name = "glitter";
        this.glitter.parent = this;
        this.glitter.setTransform(4.1, 3.35, 1.1415, 1.1415, 0, 0, 0, 117.5, 118.4);
        this.timeline.addTween(a.Tween.get(this.glitter).wait(21));
        this.instance = new b.item_w;
        this.instance.parent = this;
        this.instance.setTransform(60, 60, 1, 1, 0, 0, 0, 60, 60);
        this.instance.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: .5
        }, 10, a.Ease.quadInOut).to({
                alpha: .0117
            },
            10, a.Ease.quadInOut).wait(1));
        this.instance_1 = new b.replace_item_l;
        this.instance_1.parent = this;
        this.instance_1.setTransform(60, 60, 1, 1, 0, 0, 0, 60, 60);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(21))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.countdown_login = function(c, d, e) {
        this.initialize(c, d, e, {
            talk1: 90,
            talk2: 116,
            last: 139
        });
        this.frame_0 = function() {
            this.jump = function() {
                window.location.href = exportRoot._url
            };
            this.ch_move1 = function() {
                this.ch.gotoAndPlay(this.chara_action1)
            };
            this.ch_move2 = function() {
                this.ch.gotoAndPlay(this.chara_action2)
            };
            exportRoot._url = window.im_cjs._url;
            this.num_countdown = im_cjs.num_countdown;
            this.chara_action1 = im_cjs.chara_action1;
            this.chara_action2 = im_cjs.chara_action2;
            this.chara_eff1 = im_cjs.chara_eff1;
            this.chara_eff2 = im_cjs.chara_eff2;
            this.ch_direction = im_cjs.ch_direction;
            this.msg1_1 = im_cjs.msg1_1;
            this.msg1_2 = im_cjs.msg1_2;
            this.msg1_3 = im_cjs.msg1_3;
            this.msg1_4 = im_cjs.msg1_4;
            this.msg2_1 = im_cjs.msg2_1;
            this.msg2_2 = im_cjs.msg2_2;
            this.msg2_3 = im_cjs.msg2_3;
            this.msg2_4 = im_cjs.msg2_4;
            this.txt1_1 = im_cjs.txt1_1;
            this.txt1_2 = im_cjs.txt1_2;
            this.txt1_3 = im_cjs.txt1_3;
            this.txt1_4 = im_cjs.txt1_4
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
            function m() {
                n.play();
                n.btn.removeEventListener("click", m)
            }
            this.stop();
            this.m1.text = this.txt1_1;
            this.m2.text = this.txt1_2;
            this.m3.text = this.txt1_3;
            this.m4.text = this.txt1_4;
            var n = this;
            this.btn.addEventListener("click", m)
        };
        this.frame_90 = function() {
            window.se_play("se_099")
        };
        this.frame_109 = function() {
            this.b.b1.gotoAndStop("line4")
        };
        this.frame_111 = function() {
            this.m1.text = "";
            this.m2.text = "";
            this.m3.text = "";
            this.m4.text = ""
        };
        this.frame_112 = function() {
            this.m1.text = this.msg1_1;
            this.m2.text = this.msg1_2;
            this.m3.text = this.msg1_3;
            this.m4.text = this.msg1_4;
            this.ch_move1()
        };
        this.frame_115 = function() {
            function m() {
                n.play();
                n.btn.removeEventListener("click", m)
            }
            var n = this;
            this.btn.addEventListener("click", m);
            this.stop()
        };
        this.frame_118 = function() {
            this.m1.text = "";
            this.m2.text = "";
            this.m3.text = "";
            this.m4.text = ""
        };
        this.frame_119 = function() {
            this.m1.text = this.msg2_1;
            this.m2.text = this.msg2_2;
            this.m3.text = this.msg2_3;
            this.m4.text = this.msg2_4;
            this.ch_move2()
        };
        this.frame_122 = function() {
            function m() {
                n.play();
                n.btn.removeEventListener("click", m)
            }
            this.stop();
            var n = this;
            this.btn.addEventListener("click", m)
        };
        this.frame_123 = function() {
            window.se_play("se_093")
        };
        this.frame_139 =
            function() {
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
                this.count.gotoAndStop(this.num_countdown)
            };
        this.frame_155 = function() {
            function m() {
                n.jump();
                n.btn.removeEventListener("click", m)
            }
            this.stop();
            var n = this;
            this.btn.addEventListener("click", m)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(27).call(this.frame_36).wait(11).call(this.frame_47).wait(8).call(this.frame_55).wait(4).call(this.frame_59).wait(31).call(this.frame_90).wait(19).call(this.frame_109).wait(2).call(this.frame_111).wait(1).call(this.frame_112).wait(3).call(this.frame_115).wait(3).call(this.frame_118).wait(1).call(this.frame_119).wait(3).call(this.frame_122).wait(1).call(this.frame_123).wait(16).call(this.frame_139).wait(16).call(this.frame_155).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EglfAwcMAAAhg3MBK/AAAMAAABg3gAyvYOMAlfAAAMAAAgwbMglfAAAg");
        this.shape.setTransform(120, 155);
        this.timeline.addTween(a.Tween.get(this.shape).wait(156));
        this.instance = new b.page_open_all;
        this.instance.parent = this;
        this.instance.setTransform(120, 155, .5, .5, 0, 0, 0, 260, 0);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(90).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 9).wait(57));
        this.instance_1 = new b.bookcover;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(17.6, 434.9, .2998, .3498, -7.7689, 0, 0, -.2, .4);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(59).to({
            _off: !1
        }, 0).to({
            regX: .5,
            regY: .5,
            scaleX: .45,
            scaleY: .45,
            rotation: 0,
            x: 3.3,
            y: 142.35
        }, 14, a.Ease.quadOut).to({
            regX: 0,
            regY: 0,
            scaleX: .5,
            scaleY: .5,
            x: -4.4,
            y: 152.8
        }, 13, a.Ease.quadInOut).to({
            _off: !0
        }, 4).wait(66));
        this.instance_2 = new b.page_mov_1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(243.05, 185, .2, .5, 0, 0, 0, -1.8, 320);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(89).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2209,
            scaleY: .5081,
            rotation: -.468,
            x: 273.6,
            y: 182.75
        }, 0).wait(1).to({
            scaleX: .2477,
            scaleY: .5184,
            rotation: -1.0676,
            x: 250.8,
            y: 179.7
        }, 0).wait(1).to({
            scaleX: .282,
            scaleY: .5317,
            rotation: -1.8346,
            x: 221.6,
            y: 175.7
        }, 0).wait(1).to({
            scaleX: .3258,
            scaleY: .5486,
            rotation: -2.8164,
            x: 184.15,
            y: 170.25
        }, 0).wait(1).to({
            scaleX: .3816,
            scaleY: .5702,
            rotation: -4.0644,
            x: 136.65,
            y: 162.75
        }, 0).wait(1).to({
            scaleX: .4497,
            scaleY: .5964,
            rotation: -5.5885,
            x: 78.45,
            y: 152.8
        }, 0).wait(1).to({
            scaleX: .5234,
            scaleY: .6249,
            rotation: -7.239,
            x: 15.2,
            y: 141
        }, 0).wait(1).to({
            scaleX: .5882,
            scaleY: .65,
            rotation: -8.6902,
            x: -40.65,
            y: 129.85
        }, 0).wait(1).to({
            scaleX: .6349,
            scaleY: .668,
            rotation: -9.7359,
            x: -80.95,
            y: 121.35
        }, 0).wait(1).to({
            scaleX: .6646,
            scaleY: .6794,
            rotation: -10.3988,
            x: -106.6,
            y: 115.7
        }, 0).wait(1).to({
            scaleX: .6813,
            scaleY: .6859,
            rotation: -10.7738,
            x: -121.05,
            y: 112.45
        }, 0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
            _off: !0
        }, 1).wait(20).to({
            _off: !1,
            regX: -1.8,
            regY: 320,
            scaleX: .2,
            scaleY: .5,
            rotation: 0,
            x: 243.05,
            y: 185
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2126,
            scaleY: .5049,
            rotation: -.2819,
            x: 280.65,
            y: 183.65
        }, 0).wait(1).to({
            scaleX: .2273,
            scaleY: .5106,
            rotation: -.6118,
            x: 268.1,
            y: 182
        }, 0).wait(1).to({
            scaleX: .2446,
            scaleY: .5172,
            rotation: -.9973,
            x: 253.5,
            y: 180.1
        }, 0).wait(1).to({
            scaleX: .2647,
            scaleY: .525,
            rotation: -1.4477,
            x: 236.3,
            y: 177.75
        }, 0).wait(1).to({
                scaleX: .2882,
                scaleY: .5341,
                rotation: -1.974,
                x: 216.25,
                y: 174.9
            },
            0).wait(1).to({
            scaleX: .3157,
            scaleY: .5447,
            rotation: -2.5892,
            x: 192.85,
            y: 171.5
        }, 0).wait(1).to({
            scaleX: .3477,
            scaleY: .5571,
            rotation: -3.307,
            x: 165.5,
            y: 167.35
        }, 0).wait(1).to({
            scaleX: .3849,
            scaleY: .5714,
            rotation: -4.1381,
            x: 133.8,
            y: 162.25
        }, 0).wait(1).to({
            scaleX: .427,
            scaleY: .5877,
            rotation: -5.0818,
            x: 97.8,
            y: 156.2
        }, 0).wait(1).to({
            scaleX: .473,
            scaleY: .6054,
            rotation: -6.1097,
            x: 58.45,
            y: 149.15
        }, 0).wait(1).to({
            scaleX: .5196,
            scaleY: .6234,
            rotation: -7.1541,
            x: 18.45,
            y: 141.65
        }, 0).wait(1).to({
            scaleX: .5629,
            scaleY: .6402,
            rotation: -8.1231,
            x: -18.75,
            y: 134.3
        }, 0).wait(1).to({
            scaleX: .5996,
            scaleY: .6544,
            rotation: -8.9458,
            x: -50.5,
            y: 127.8
        }, 0).wait(1).to({
            scaleX: .6288,
            scaleY: .6656,
            rotation: -9.5985,
            x: -75.65,
            y: 122.45
        }, 0).wait(1).to({
            scaleX: .6509,
            scaleY: .6742,
            rotation: -10.0919,
            x: -94.7,
            y: 118.35
        }, 0).wait(1).to({
            scaleX: .6669,
            scaleY: .6803,
            rotation: -10.4502,
            x: -108.55,
            y: 115.25
        }, 0).wait(1).to({
            scaleX: .6779,
            scaleY: .6846,
            rotation: -10.698,
            x: -118.2,
            y: 113.1
        }, 0).wait(1).to({
            scaleX: .685,
            scaleY: .6873,
            rotation: -10.8562,
            x: -124.25,
            y: 111.75
        }, 0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
            _off: !0
        }, 1).wait(14));
        this.instance_3 = new b.page_mov_1("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(243.05, 185, .2, .5, 0, 0, 0, -1.8, 320);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(92).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2231,
            scaleY: .5089,
            rotation: -.5167,
            x: 271.7,
            y: 182.45
        }, 0).wait(1).to({
            scaleX: .2533,
            scaleY: .5206,
            rotation: -1.1934,
            x: 246,
            y: 179.1
        }, 0).wait(1).to({
            scaleX: .2929,
            scaleY: .5359,
            rotation: -2.0789,
            x: 212.3,
            y: 174.35
        }, 0).wait(1).to({
            scaleX: .3446,
            scaleY: .5559,
            rotation: -3.2372,
            x: 168.15,
            y: 167.8
        }, 0).wait(1).to({
            scaleX: .4112,
            scaleY: .5816,
            rotation: -4.7266,
            x: 111.4,
            y: 158.5
        }, 0).wait(1).to({
            scaleX: .49,
            scaleY: .612,
            rotation: -6.4923,
            x: 43.85,
            y: 146.45
        }, 0).wait(1).to({
            scaleX: .5665,
            scaleY: .6416,
            rotation: -8.2046,
            x: -21.9,
            y: 133.7
        }, 0).wait(1).to({
            scaleX: .6241,
            scaleY: .6638,
            rotation: -9.4923,
            x: -71.55,
            y: 123.35
        }, 0).wait(1).to({
                scaleX: .6603,
                scaleY: .6778,
                rotation: -10.3025,
                x: -102.85,
                y: 116.55
            },
            0).wait(1).to({
            scaleX: .6802,
            scaleY: .6855,
            rotation: -10.7493,
            x: -120.15,
            y: 112.7
        }, 0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
            _off: !0
        }, 1).wait(24).to({
            _off: !1,
            regX: -1.8,
            regY: 320,
            scaleX: .2,
            scaleY: .5,
            rotation: 0,
            x: 243.05,
            y: 185
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2152,
            scaleY: .5059,
            rotation: -.3399,
            x: 278.45,
            y: 183.35
        }, 0).wait(1).to({
            scaleX: .2335,
            scaleY: .5129,
            rotation: -.7494,
            x: 262.9,
            y: 181.3
        }, 0).wait(1).to({
            scaleX: .2555,
            scaleY: .5214,
            rotation: -1.242,
            x: 244.1,
            y: 178.8
        }, 0).wait(1).to({
            scaleX: .282,
            scaleY: .5317,
            rotation: -1.8346,
            x: 221.6,
            y: 175.7
        }, 0).wait(1).to({
            scaleX: .3138,
            scaleY: .544,
            rotation: -2.5479,
            x: 194.45,
            y: 171.75
        }, 0).wait(1).to({
            scaleX: .3521,
            scaleY: .5588,
            rotation: -3.4045,
            x: 161.75,
            y: 166.8
        }, 0).wait(1).to({
            scaleX: .3975,
            scaleY: .5763,
            rotation: -4.4215,
            x: 122.95,
            y: 160.45
        }, 0).wait(1).to({
            scaleX: .4497,
            scaleY: .5964,
            rotation: -5.5885,
            x: 78.45,
            y: 152.8
        }, 0).wait(1).to({
            scaleX: .5052,
            scaleY: .6179,
            rotation: -6.8315,
            x: 30.8,
            y: 144
        }, 0).wait(1).to({
            scaleX: .5578,
            scaleY: .6382,
            rotation: -8.0089,
            x: -14.4,
            y: 135.2
        }, 0).wait(1).to({
            scaleX: .6017,
            scaleY: .6552,
            rotation: -8.9916,
            x: -52.2,
            y: 127.45
        }, 0).wait(1).to({
            scaleX: .6349,
            scaleY: .668,
            rotation: -9.7359,
            x: -80.95,
            y: 121.35
        }, 0).wait(1).to({
            scaleX: .6585,
            scaleY: .6771,
            rotation: -10.2638,
            x: -101.35,
            y: 116.9
        }, 0).wait(1).to({
            scaleX: .6743,
            scaleY: .6832,
            rotation: -10.6166,
            x: -115,
            y: 113.9
        }, 0).wait(1).to({
            scaleX: .6839,
            scaleY: .6869,
            rotation: -10.8326,
            x: -123.4,
            y: 111.95
        }, 0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
                _off: !0
            },
            1).wait(11));
        this.instance_4 = new b.page_mov_1("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(243.05, 185, .2, .5, 0, 0, 0, -1.8, 320);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(94).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2191,
            scaleY: .5074,
            rotation: -.4278,
            x: 275.1,
            y: 182.9
        }, 0).wait(1).to({
            scaleX: .2431,
            scaleY: .5167,
            rotation: -.9655,
            x: 254.7,
            y: 180.2
        }, 0).wait(1).to({
            scaleX: .2733,
            scaleY: .5283,
            rotation: -1.6405,
            x: 229,
            y: 176.75
        }, 0).wait(1).to({
            scaleX: .3112,
            scaleY: .5429,
            rotation: -2.4883,
            x: 196.7,
            y: 172.05
        }, 0).wait(1).to({
            scaleX: .3586,
            scaleY: .5613,
            rotation: -3.5503,
            x: 156.2,
            y: 165.85
        }, 0).wait(1).to({
            scaleX: .4169,
            scaleY: .5838,
            rotation: -4.8549,
            x: 106.5,
            y: 157.7
        }, 0).wait(1).to({
            scaleX: .4838,
            scaleY: .6096,
            rotation: -6.3525,
            x: 49.2,
            y: 147.5
        }, 0).wait(1).to({
            scaleX: .5502,
            scaleY: .6353,
            rotation: -7.8381,
            x: -7.85,
            y: 136.55
        }, 0).wait(1).to({
            scaleX: .6046,
            scaleY: .6563,
            rotation: -9.0573,
            x: -54.75,
            y: 126.9
        }, 0).wait(1).to({
                scaleX: .6432,
                scaleY: .6712,
                rotation: -9.9196,
                x: -88.05,
                y: 119.75
            },
            0).wait(1).to({
            scaleX: .6679,
            scaleY: .6807,
            rotation: -10.4729,
            x: -109.45,
            y: 115.05
        }, 0).wait(1).to({
            scaleX: .6822,
            scaleY: .6863,
            rotation: -10.7932,
            x: -121.85,
            y: 112.3
        }, 0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
            _off: !0
        }, 1).wait(23).to({
            _off: !1,
            regX: -1.8,
            regY: 320,
            scaleX: .2,
            scaleY: .5,
            rotation: 0,
            x: 243.05,
            y: 185
        }, 0).wait(1).to({
            regX: 240,
            scaleX: .2142,
            scaleY: .5055,
            rotation: -.3181,
            x: 279.25,
            y: 183.45
        }, 0).wait(1).to({
            scaleX: .2311,
            scaleY: .512,
            rotation: -.6972,
            x: 264.85,
            y: 181.65
        }, 0).wait(1).to({
            scaleX: .2513,
            scaleY: .5198,
            rotation: -1.1484,
            x: 247.7,
            y: 179.3
        }, 0).wait(1).to({
            scaleX: .2753,
            scaleY: .5291,
            rotation: -1.6852,
            x: 227.3,
            y: 176.5
        }, 0).wait(1).to({
            scaleX: .3038,
            scaleY: .5401,
            rotation: -2.3243,
            x: 202.95,
            y: 173
        }, 0).wait(1).to({
            scaleX: .3378,
            scaleY: .5532,
            rotation: -3.0845,
            x: 173.95,
            y: 168.65
        }, 0).wait(1).to({
            scaleX: .3779,
            scaleY: .5687,
            rotation: -3.983,
            x: 139.75,
            y: 163.25
        }, 0).wait(1).to({
            scaleX: .4244,
            scaleY: .5867,
            rotation: -5.0235,
            x: 100.05,
            y: 156.55
        }, 0).wait(1).to({
            scaleX: .4757,
            scaleY: .6065,
            rotation: -6.1716,
            x: 56.1,
            y: 148.75
        }, 0).wait(1).to({
            scaleX: .5276,
            scaleY: .6265,
            rotation: -7.3331,
            x: 11.6,
            y: 140.35
        }, 0).wait(1).to({
            scaleX: .5745,
            scaleY: .6447,
            rotation: -8.3822,
            x: -28.75,
            y: 132.3
        }, 0).wait(1).to({
            scaleX: .6126,
            scaleY: .6594,
            rotation: -9.2351,
            x: -61.65,
            y: 125.45
        }, 0).wait(1).to({
            scaleX: .6413,
            scaleY: .6705,
            rotation: -9.8781,
            x: -86.4,
            y: 120.15
        }, 0).wait(1).to({
            scaleX: .6618,
            scaleY: .6784,
            rotation: -10.3376,
            x: -104.2,
            y: 116.25
        }, 0).wait(1).to({
                scaleX: .6757,
                scaleY: .6837,
                rotation: -10.6485,
                x: -116.2,
                y: 113.6
            },
            0).wait(1).to({
            scaleX: .6844,
            scaleY: .6871,
            rotation: -10.8417,
            x: -123.75,
            y: 111.9
        }, 0).wait(1).to({
            regX: -2,
            regY: 319.9,
            scaleX: .6888,
            scaleY: .6888,
            rotation: -10.9415,
            x: -291.1,
            y: 142.55
        }, 0).to({
            _off: !0
        }, 1).wait(7));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("A6/62MA1/gExUgFAA1WgANACpQgDAjgQAbQgPAZgdAUQgeAVgYANQhxA4iEAhQh1AeiMANQkCAYq6A9QrZBAnoAqg");
        e = (new a.Graphics).p("A717MMA3rgF6UgEMA3MgAKACvQgDAkgQAcQgPAagdAWQgeAWgZAOQh0A8iIAlQh4AgiRAQQkJAerRBMQrvBPn4A0g");
        var y = (new a.Graphics).p("A8q7ZMA5VgHTUgDIA5DgAHAC0QgCAmgPAdQgQAcgdAWQgfAYgaAPQh1BAiMApQh8AkiUAUQkSAkrlBfQsGBioHBAg"),
            v = (new a.Graphics).p("A9Z7kMA6zgIjUgCLA6tgAEAC5QgBAngQAeQgPAdgdAXQggAagaAPQh4BEiPAtQh+AoiYAWQkZAqr5BvQsZBzoUBMg"),
            z = (new a.Graphics).p("A9/7pMA7/gJqUgBUA8CgABAC+QgBAngPAgQgPAdgeAZQggAagbAQQh5BIiRAwQiBAqibAaQkeAvsJB9QsoCCofBWg"),
            A = (new a.Graphics).p("A+b7sMA83gKhUgApA9DAABADAQAAApgPAfQgPAfgeAZQggAbgbARQh7BKiTAzQiCAsidAcQkiAzsVCJQs0CNonBeg"),
            B = (new a.Graphics).p("A+u7tMA9dgLJUgAIA9wAACADDQABAogQAhQgOAegfAaQggAcgbARQh7BMiVA0QiDAvifAdQklA3scCQQs8CWotBjg"),
            C = (new a.Graphics).p("A/G7tMA95gLnUAAQA+QAAEADFQABApgQAgQgPAfgeAbQggAcgbARQh8BOiWA1QiEAwigAeQknA5siCWQtCCdoxBng"),
            p = (new a.Graphics).p("A/n7tMA+KgL6UAAfA+lAAFADFQAAApgPAhQgPAfgeAbQggAcgcASQh8BPiWA2QiEAwihAfQkoA6smCaQtGChozBqg"),
            q = (new a.Graphics).p("EggJgbtMA+TgMDUAAnA+uAAFADGQABAqgQAhQgOAfgfAaQggAdgcASQh8BPiWA3QiFAwihAgQkpA7snCcQtICio0Brg"),
            r = (new a.Graphics).p("A6/62MA1/gExUgFAA1WgANACpQgDAjgQAbQgPAZgdAUQgeAVgYANQhxA4iEAhQh1AeiMANQkCAYq6A9QrZBAnoAqg"),
            t = (new a.Graphics).p("A7s7FMA3ZgFzUgEPA24gALACtQgCAlgQAbQgQAbgcAUQgfAXgZANQhzA8iHAkQh4AhiPAPQkIAdrNBLQrrBOn1Azg"),
            u = (new a.Graphics).p("A8Y7SMA4xgG6UgDZA4cgAIACyQgCAlgQAdQgPAbgdAWQgfAYgaAOQh1A/iKAoQh7AjiTASQkOAjrfBZQr+BdoCA9g"),
            w = (new a.Graphics).p("A9C7cMA6FgIAUgClA55gAFAC3QgBAmgQAdQgPAcgdAYQggAYgaAPQh2BDiOArQh8AmiXAVQkVAorwBoQsOBroOBHg"),
            x = (new a.Graphics).p("A9m7iMA7NgJBUgBzA7KgADAC7QgBAngPAeQgPAdgeAYQggAagaAQQh4BFiQAuQh/ApiZAYQkaAsr/B1QseB5oYBQg"),
            l = (new a.Graphics).p("A+D7nMA8HgJ3UgBJA8NAAAAC+QgBAngPAgQgPAdgeAZQggAbgbAQQh5BIiSAxQiAAqicAbQkeAwsLCAQsqCEogBYg"),
            D = (new a.Graphics).p("A+a7qMA81gKjUgAmA9BAABADBQAAAogQAgQgPAegeAZQggAcgbAQQh6BLiTAyQiCAtieAcQkhAzsUCJQs0COonBeg"),
            G = (new a.Graphics).p("A+r7rMA9XgLFUgALA9oAACADDQABAogQAhQgPAegeAaQggAcgbARQh7BMiUA0QiDAuifAdQklA2saCQQs7CVosBig"),
            H = (new a.Graphics).p("A++7sMA9wgLfUAAJA+GAAEADEQAAApgPAgQgPAfgeAaQggAcgbASQh8BNiVA1QiEAvigAeQkmA4sgCVQtACaovBng"),
            I = (new a.Graphics).p("A/O7tMA+BgLwUAAYA+aAAEADFQABApgPAgQgPAggfAaQggAcgbASQh8BOiWA2QiEAvigAgQkoA5skCYQtECfoxBog"),
            J = (new a.Graphics).p("A/m7tMA+NgL8UAAhA+nAAFADFQABApgQAiQgOAfgfAaQggAdgbARQh9BPiWA2QiEAxihAfQkpA7smCaQtGChozBqg"),
            K = (new a.Graphics).p("A/67tMA+TgMDUAAnA+uAAFADGQABAqgQAhQgOAfgfAaQggAdgcASQh8BPiWA3QiFAwihAgQkpA7snCcQtICio0Brg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(98).to({
            graphics: d,
            x: 93.3035,
            y: 166.3213
        }).wait(1).to({
            graphics: e,
            x: 53.982,
            y: 157.5459
        }).wait(1).to({
            graphics: y,
            x: 6.8749,
            y: 148.1837
        }).wait(1).to({
            graphics: v,
            x: -51.6047,
            y: 144.7924
        }).wait(1).to({
            graphics: z,
            x: -104.7289,
            y: 136.1367
        }).wait(1).to({
            graphics: A,
            x: -144.888,
            y: 129.5628
        }).wait(1).to({
            graphics: B,
            x: -173.6829,
            y: 124.8336
        }).wait(1).to({
            graphics: C,
            x: -192.525,
            y: 121.5251
        }).wait(1).to({
            graphics: p,
            x: -202.4161,
            y: 119.4579
        }).wait(1).to({
            graphics: q,
            x: -205.8224,
            y: 118.2696
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(29).to({
            graphics: r,
            x: 83.3035,
            y: 155.3213
        }).wait(1).to({
            graphics: t,
            x: 36.9918,
            y: 149.6338
        }).wait(1).to({
            graphics: u,
            x: -10.3822,
            y: 143.7461
        }).wait(1).to({
            graphics: w,
            x: -55.3842,
            y: 138.0892
        }).wait(1).to({
            graphics: x,
            x: -95.0309,
            y: 133.0551
        }).wait(1).to({
            graphics: l,
            x: -127.8661,
            y: 128.851
        }).wait(1).to({
            graphics: D,
            x: -153.8608,
            y: 125.5008
        }).wait(1).to({
            graphics: G,
            x: -173.7344,
            y: 122.9266
        }).wait(1).to({
            graphics: H,
            x: -187.7729,
            y: 121.0183
        }).wait(1).to({
            graphics: I,
            x: -197.3687,
            y: 119.6684
        }).wait(1).to({
            graphics: J,
            x: -202.3191,
            y: 118.784
        }).wait(1).to({
            graphics: K,
            x: -204.3224,
            y: 118.2696
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(7));
        this.instance_5 = new b.book_bg_1("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(120, 155, .5, .5);
        this.instance_5._off = !0;
        d = [this.instance_5];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(90).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 18).wait(21).to({
            _off: !1,
            x: 338.35
        }, 0).wait(1).to({
            x: 302.05
        }, 0).wait(1).to({
            x: 284.4
        }, 0).wait(1).to({
                x: 248.5
            },
            0).wait(1).to({
            x: 216.45
        }, 0).wait(1).to({
            x: 189.75
        }, 0).wait(1).to({
            x: 168.25
        }, 0).wait(1).to({
            x: 145.05
        }, 0).wait(1).to({
            x: 120
        }, 0).to({
            _off: !0
        }, 12).wait(7));
        this.instance_6 = new b.bg_white;
        this.instance_6.parent = this;
        this.instance_6.setTransform(120, 155);
        this.instance_6.alpha = .5;
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(100).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 6).to({
            _off: !0
        }, 1).wait(49));
        this.instance_7 = new b.logo_b_1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(122.15,
            133.55, 2.1, 2.1, 0, 0, 0, 255.6, 200.7);
        this.instance_7.alpha = .8984;
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(1).to({
            _off: !1
        }, 0).to({
            regX: 255.7,
            scaleX: .95,
            scaleY: .9497,
            x: 124.95,
            y: 153.8,
            alpha: 0
        }, 7, a.Ease.quadIn).to({
            _off: !0
        }, 1).wait(147));
        this.instance_8 = new b.logo_w_1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(123.2, 134.5, 2.1099, 2.1099, 0, 0, 0, 100, 78.4);
        this.instance_8.alpha = 0;
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(1).to({
                _off: !1
            },
            0).to({
            scaleX: .95,
            scaleY: .95,
            x: 125.9,
            y: 153.4,
            alpha: .8008
        }, 7, a.Ease.quadIn).to({
            scaleX: 1.05,
            scaleY: 1.0499
        }, 3, a.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            alpha: .6016
        }, 3, a.Ease.get(1)).to({
            alpha: 0
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(12).to({
            _off: !1
        }, 0).to({
            y: 158.9,
            alpha: .5898
        }, 2, a.Ease.get(1)).to({
            x: 125.85,
            y: -101.65
        }, 4, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(116));
        this.logo_400_large = new b.logo_all;
        this.logo_400_large.name = "logo_400_large";
        this.logo_400_large.parent = this;
        this.logo_400_large.setTransform(120,
            147.35, 2.5567, 2.5567);
        this.logo_400_large._off = !0;
        this.timeline.addTween(a.Tween.get(this.logo_400_large).wait(1).to({
            _off: !1
        }, 0).to({
            scaleX: 1.1523,
            scaleY: 1.1523,
            x: 124.45,
            y: 159.45
        }, 7, a.Ease.quadIn).to({
            scaleX: 1.2791,
            scaleY: 1.2791,
            x: 125.2,
            y: 159.8
        }, 3, a.Ease.get(1)).to({
            scaleX: 1.2258,
            scaleY: 1.2258,
            x: 124.85,
            y: 159.6
        }, 3, a.Ease.get(1)).wait(19).to({
            regX: 2,
            regY: 66,
            x: 127.3,
            y: 240.5
        }, 0).to({
            scaleY: 1.189,
            y: 246.2
        }, 2, a.Ease.get(1)).to({
            scaleY: 1.2258,
            y: -13.85
        }, 4, a.Ease.quadInOut).to({
            _off: !0
        }, 1).wait(2).to({
            _off: !1,
            regX: 1.9,
            scaleX: .5592,
            scaleY: .5592,
            x: 121.35,
            y: .5
        }, 0).wait(1).to({
            regX: .2,
            regY: -4.4,
            x: 120.65,
            y: -29.3
        }, 0).wait(1).to({
            x: 121.6,
            y: 4
        }, 0).wait(1).to({
            x: 122.6,
            y: 37.5
        }, 0).wait(1).to({
            regX: 1.9,
            regY: 66,
            x: 123.85,
            y: 86.5
        }, 0).to({
            y: 94.5
        }, 3).wait(41).to({
            x: 408.85,
            y: -8.15
        }, 0).wait(47).to({
            regX: 0,
            regY: 0,
            scaleX: 1.2258,
            scaleY: 1.2254,
            x: 124.85,
            y: 114.6
        }, 0).wait(19));
        this.ar = new b.UI_arrow_b;
        this.ar.name = "ar";
        this.ar.parent = this;
        this.ar.setTransform(193.35, 411.85, 1, 1, 0, 0, 0, .2, -.1);
        this.ar.alpha = .0117;
        this.ar_1 = new b.UI_arrow_w;
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
        }, 33).to({
            state: [{
                t: this.ar
            }]
        }, 24).to({
            state: [{
                t: this.ar
            }]
        }, 2).to({
            state: [{
                t: this.ar
            }]
        }, 2).to({
            state: [{
                t: this.ar
            }]
        }, 19).to({
            state: []
        }, 1).wait(18));
        this.timeline.addTween(a.Tween.get(this.ar).to({
            _off: !0
        }, 57).wait(57).to({
            _off: !1,
            scaleX: .74,
            scaleY: .74,
            x: 231.2,
            y: 305.65,
            alpha: 1
        }, 0).wait(2).to({
                y: 331.55
            },
            0).wait(2).to({
            y: 305.65
        }, 0).wait(19).to({
            alpha: .0117
        }, 0).to({
            _off: !0
        }, 1).wait(18));
        this.instance_9 = new b.arrow_container;
        this.instance_9.parent = this;
        this.instance_9.setTransform(223.2, 293.6, 2, 2, 0, 0, 0, -6.9, -6.7);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(155).to({
            _off: !1
        }, 0).wait(1));
        this.m4 = new a.Text("", "12px 'Arial'", "#FFFFFF");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(10, 379);
        this.m3 = new a.Text("",
            "12px 'Arial'", "#FFFFFF");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(10, 364);
        this.m2 = new a.Text("", "12px 'Arial'", "#FFFFFF");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(10, 348);
        this.m1 = new a.Text("", "12px 'Arial'", "#FFFFFF");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(10, 332);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.m1,
                p: {
                    y: 332,
                    color: "#FFFFFF",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m2,
                p: {
                    y: 348,
                    color: "#FFFFFF",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m3,
                p: {
                    y: 364,
                    color: "#FFFFFF",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m4,
                p: {
                    y: 379,
                    color: "#FFFFFF",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }]
        }).to({
            state: [{
                t: this.m1,
                p: {
                    y: 239.5,
                    color: "#FFFFFF",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m2,
                p: {
                    y: 255.5,
                    color: "#FFFFFF",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m3,
                p: {
                    y: 271.5,
                    color: "#FFFFFF",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m4,
                p: {
                    y: 286.5,
                    color: "#FFFFFF",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }]
        }, 57).to({
            state: []
        }, 33).to({
            state: [{
                t: this.m1,
                p: {
                    y: 237,
                    color: "#000000",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m2,
                p: {
                    y: 253,
                    color: "#000000",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m3,
                p: {
                    y: 269,
                    color: "#000000",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m4,
                p: {
                    y: 284,
                    color: "#000000",
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }]
        }, 21).to({
            state: [{
                t: this.m1,
                p: {
                    y: 237,
                    color: "#000000",
                    font: "14px 'Arial'",
                    lineHeight: 17.6
                }
            }, {
                t: this.m2,
                p: {
                    y: 253,
                    color: "#000000",
                    font: "14px 'Arial'",
                    lineHeight: 17.6
                }
            }, {
                t: this.m3,
                p: {
                    y: 269,
                    color: "#000000",
                    font: "14px 'Arial'",
                    lineHeight: 17.6
                }
            }, {
                t: this.m4,
                p: {
                    y: 284,
                    color: "#000000",
                    font: "14px 'Arial'",
                    lineHeight: 17.6
                }
            }]
        }, 26).to({
            state: []
        }, 1).wait(18));
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
            },
            0).to({
            scaleY: 1
        }, 1).to({
            _off: !0
        }, 31).wait(19).to({
            _off: !1,
            scaleY: .1
        }, 0).wait(1).to({
            scaleY: .7177,
            y: 269.0614
        }, 0).wait(1).to({
            scaleY: 1.0884,
            y: 269.0983
        }, 0).wait(1).to({
            scaleY: 1.2119,
            y: 269.05
        }, 0).to({
            scaleY: 1.1429,
            y: 269
        }, 1).wait(3).to({
            scaleY: 1
        }, 0).wait(1).to({
            scaleY: .9
        }, 0).wait(1).to({
            scaleY: 1.2119,
            y: 269.05
        }, 0).to({
            scaleY: 1.1429,
            y: 269
        }, 3).wait(16).to({
            alpha: .0117
        }, 0).to({
            _off: !0
        }, 1).wait(18));
        this.instance_10 = new b.asset_efc_partilceSarcle;
        this.instance_10.parent = this;
        this.instance_10.setTransform(120.35,
            155.2, .7363, .7363);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(48).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 16).wait(92));
        this.instance_11 = new b.item_w;
        this.instance_11.parent = this;
        this.instance_11.setTransform(120, 155, 1, 1, 0, 0, 0, 60, 60);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(48).to({
            _off: !1
        }, 0).to({
            y: 140,
            alpha: .0117
        }, 2).to({
            _off: !0
        }, 1).wait(105));
        this.r = new b.reward;
        this.r.name = "r";
        this.r.parent = this;
        this.r.setTransform(120, 155,
            1, 1, 0, 0, 0, 60, 60);
        this.r._off = !0;
        this.timeline.addTween(a.Tween.get(this.r).wait(48).to({
            _off: !1
        }, 0).to({
            y: 140
        }, 2).wait(1).to({
            regX: 59.9,
            regY: 60.5,
            x: 119.9,
            y: 140.7
        }, 0).wait(1).to({
            y: 141.5
        }, 0).wait(1).to({
            y: 143
        }, 0).wait(1).to({
            y: 145.5
        }, 0).wait(1).to({
            y: 149.8
        }, 0).wait(1).to({
            regX: 60,
            regY: 60,
            x: 120,
            y: 160
        }, 0).to({
            y: 160.4
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 31).wait(66));
        this.ch = new b.mc_replace_chara;
        this.ch.name = "ch";
        this.ch.parent = this;
        this.ch.setTransform(129.7, 715.55);
        this.timeline.addTween(a.Tween.get(this.ch).wait(100).to({
            regX: -.1,
            regY: .2,
            x: -.1,
            y: .2
        }, 0).to({
            _off: !0
        }, 37).wait(19));
        this.instance_12 = new b.lightburst_container("synched", 0, !1);
        this.instance_12.parent = this;
        this.instance_12.setTransform(120, 155);
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(47).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 9).wait(100));
        this.count = new b.count_num;
        this.count.name = "count";
        this.count.parent = this;
        this.count.setTransform(-36.75, 424.2, .5, .5);
        this.timeline.addTween(a.Tween.get(this.count).wait(137).to({
            scaleX: .4,
            scaleY: .4,
            x: 120,
            y: 245
        }, 0).wait(19));
        this.instance_13 = new b.countdown_text;
        this.instance_13.parent = this;
        this.instance_13.setTransform(219, 449, .39, .39);
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(137).to({
            x: 58,
            y: 185
        }, 0).wait(19));
        this.instance_14 = new b.spread_container;
        this.instance_14.parent = this;
        this.instance_14.setTransform(120, 155);
        this.instance_14.alpha = .0508;
        this.instance_14._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(5).to({
            _off: !1
        }, 0).wait(4).to({
            alpha: 1
        }, 0).wait(28).to({
                alpha: 0
            },
            3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(115));
        this.instance_15 = new b.glitter_rise;
        this.instance_15.parent = this;
        this.instance_15.setTransform(84.15, -2.4, 1, 1, -6.1966, 0, 0, 0, 6.6);
        this.instance_15.alpha = .6992;
        this.instance_15._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(1).to({
            _off: !1
        }, 0).wait(155));
        this.lighter_tgt = new b.mc_ring_move;
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(120, 155, 1.08, 1.08);
        this.lighter_tgt.alpha = .0117;
        this.lighter_tgt._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt).wait(136).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 10).wait(10));
        this.lighter_tgt_1 = new b.mc_bubble_all;
        this.lighter_tgt_1.name = "lighter_tgt_1";
        this.lighter_tgt_1.parent = this;
        this.lighter_tgt_1.setTransform(121, 336, 1, 1, 89.9781);
        this.lighter_tgt_1.alpha = .0117;
        this.lighter_tgt_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt_1).wait(136).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 10).wait(10));
        this.instance_16 = new b.bg_white;
        this.instance_16.parent = this;
        this.instance_16.setTransform(120,
            154.95);
        this.instance_16._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_16).wait(5).to({
            _off: !1
        }, 0).to({
            alpha: .0117
        }, 3).to({
            alpha: .6016
        }, 1).to({
            alpha: .0117
        }, 7).to({
            _off: !0
        }, 1).wait(18).to({
            _off: !1,
            regX: 181,
            regY: 235.5,
            x: 301,
            y: 390.45
        }, 0).to({
            alpha: 1
        }, 4, a.Ease.get(-1)).wait(1).to({
            alpha: .0117
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(110));
        this.instance_17 = new b.bg_black;
        this.instance_17.parent = this;
        this.instance_17.setTransform(120, 154.95);
        this.timeline.addTween(a.Tween.get(this.instance_17).wait(5).to({
                alpha: .0117
            },
            0).to({
            alpha: .3984
        }, 3).to({
            _off: !0
        }, 1).wait(147));
        this.bg_first = new b.bg_1;
        this.bg_first.name = "bg_first";
        this.bg_first.parent = this;
        this.bg_first.setTransform(0, 0, 1, 1.0002);
        this.timeline.addTween(a.Tween.get(this.bg_first).to({
            _off: !0
        }, 40).wait(116));
        this.instance_18 = new b.bg_library_1;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-546.95, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance_18).wait(40).to({
            x: 0
        }, 0).to({
            _off: !0
        }, 50).wait(66));
        this.bg_page = new b.bg_page_1;
        this.bg_page.name =
            "bg_page";
        this.bg_page.parent = this;
        this.bg_page.setTransform(-786.95, 0, 1, 1.0002);
        this.timeline.addTween(a.Tween.get(this.bg_page).wait(136).to({
            x: 0
        }, 0).wait(20));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(119, 156.55, 1, 1, 0, 0, 0, 133, 168.5);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(156))
    }).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-666.9, -25.1, 1125.3, 1050.6999999999998);
    b.properties = {
        id: "countdown_login",
        width: 240,
        height: 310,
        fps: 12,
        color: "#666666",
        opacity: 1,
        manifest: [{
                src: "images/bg.jpg",
                id: "countdown_login_bg"
            }, {
                src: "images/bg_library.jpg",
                id: "countdown_login_bg_library"
            }, {
                src: "images/bg_page.jpg",
                id: "countdown_login_bg_page"
            }, {
                src: "images/book_bg.jpg",
                id: "countdown_login_book_bg"
            }, {
                src: "images/countdown_num_1.png",
                id: "countdown_login_countdown_num_1"
            }, {
                src: "images/countdown_num_2.png",
                id: "countdown_login_countdown_num_2"
            }, {
                src: "images/countdown_num_3.png",
                id: "countdown_login_countdown_num_3"
            }, {
                src: "images/countdown_num_4.png",
                id: "countdown_login_countdown_num_4"
            }, {
                src: "images/countdown_num_5.png",
                id: "countdown_login_countdown_num_5"
            }, {
                src: "images/countdown_num_6.png",
                id: "countdown_login_countdown_num_6"
            }, {
                src: "images/countdown_num_7.png",
                id: "countdown_login_countdown_num_7"
            }, {
                src: "images/countdown_num_8.png",
                id: "countdown_login_countdown_num_8"
            }, {
                src: "images/countdown_num_9.png",
                id: "countdown_login_countdown_num_9"
            }, {
                src: "images/countdown_text.png",
                id: "countdown_login_countdown_text"
            }, {
                src: "images/glitter.png",
                id: "countdown_login_glitter"
            },
            {
                src: "images/logo.png",
                id: "countdown_login_logo"
            }, {
                src: "images/logo_b.png",
                id: "countdown_login_logo_b"
            }, {
                src: "images/logo_w.png",
                id: "countdown_login_logo_w"
            }, {
                src: "images/material_book_white_side.png",
                id: "countdown_login_material_book_white_side"
            }, {
                src: "images/material_book_white_under.png",
                id: "countdown_login_material_book_white_under"
            }, {
                src: "images/material_bookcover_back.png",
                id: "countdown_login_material_bookcover_back"
            }, {
                src: "images/material_bookcover_front.png",
                id: "countdown_login_material_bookcover_front"
            },
            {
                src: "images/material_bookcover_side.png",
                id: "countdown_login_material_bookcover_side"
            }, {
                src: "images/page_mov.png",
                id: "countdown_login_page_mov"
            }, {
                src: "images/page_open01.png",
                id: "countdown_login_page_open01"
            }, {
                src: "images/page_open02.png",
                id: "countdown_login_page_open02"
            }, {
                src: "images/page_open03.png",
                id: "countdown_login_page_open03"
            }, {
                src: "images/page_open04.png",
                id: "countdown_login_page_open04"
            }, {
                src: "images/page_open05.png",
                id: "countdown_login_page_open05"
            }, {
                src: "images/page_open06.png",
                id: "countdown_login_page_open06"
            },
            {
                src: "images/page_open07.png",
                id: "countdown_login_page_open07"
            }, {
                src: "images/page_open08.png",
                id: "countdown_login_page_open08"
            }, {
                src: "images/page_open09.png",
                id: "countdown_login_page_open09"
            }, {
                src: "images/page_open10.png",
                id: "countdown_login_page_open10"
            }, {
                src: "images/replace_chara.jpg",
                id: "countdown_login_replace_chara"
            }, {
                src: "images/replace_target_240x240_item_l.png",
                id: "countdown_login_replace_target_240x240_item_l"
            }, {
                src: "images/wt_replace_item.png",
                id: "countdown_login_wt_replace_item"
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
        return this.getChildAt(0).currentFrame /
            b.properties.fps * 1E3
    };
    k.bootcompsLoaded = k.bootcompsLoaded || [];
    k.bootstrapListeners || (k.bootstrapListeners = []);
    k.bootstrapCallback = function(c) {
        k.bootstrapListeners.push(c);
        if (0 < k.bootcompsLoaded.length)
            for (var d = 0; d < k.bootcompsLoaded.length; ++d) c(k.bootcompsLoaded[d])
    };
    k.compositions = k.compositions || {};
    k.compositions.countdown_login = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return F
        },
        getImages: function() {
            return g
        }
    };
    k.compositionLoaded =
        function(c) {
            k.bootcompsLoaded.push(c);
            for (var d = 0; d < k.bootstrapListeners.length; d++) k.bootstrapListeners[d](c)
        };
    k.getComposition = function(c) {
        return k.compositions[c]
    };
    k.makeResponsive = function(c, d, e, y, v) {
        function z() {
            var p = b.properties.width,
                q = b.properties.height,
                r = window.innerWidth,
                t = window.innerHeight,
                u = window.devicePixelRatio || 1,
                w = r / p,
                x = t / q,
                l = 1;
            if (c)
                if ("width" == d && A == r || "height" == d && B == t) l = C;
                else if (e) 1 == y ? l = Math.min(w, x) : 2 == y && (l = Math.max(w, x));
            else if (r < p || t < q) l = Math.min(w, x);
            v[0].width = p * u *
                l;
            v[0].height = q * u * l;
            v.forEach(function(D) {
                D.style.width = p * l + "px";
                D.style.height = q * l + "px"
            });
            stage.scaleX = u * l;
            stage.scaleY = u * l;
            A = r;
            B = t;
            C = l;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var A, B, C = 1;
        window.addEventListener("resize", z);
        z()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;