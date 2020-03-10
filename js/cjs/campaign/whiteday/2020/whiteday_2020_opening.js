(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];


    // symbols:



    (lib.bg_sp = function() {
        this.initialize(img.whiteday_2020_opening_bg_sp);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 520, 660);


    (lib.chihiro_base = function() {
        this.initialize(img.whiteday_2020_opening_chihiro_base);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 280, 600);


    (lib.chihiro_face_close = function() {
        this.initialize(img.whiteday_2020_opening_chihiro_face_close);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140, 70);


    (lib.chihiro_face_laugh = function() {
        this.initialize(img.whiteday_2020_opening_chihiro_face_laugh);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140, 140);


    (lib.chihiro_face_sad = function() {
        this.initialize(img.whiteday_2020_opening_chihiro_face_sad);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140, 140);


    (lib.chihiro_face_sad2 = function() {
        this.initialize(img.whiteday_2020_opening_chihiro_face_sad2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140, 140);


    (lib.chihiro_face_smile = function() {
        this.initialize(img.whiteday_2020_opening_chihiro_face_smile);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140, 140);


    (lib.chihiro_face_strong = function() {
        this.initialize(img.whiteday_2020_opening_chihiro_face_strong);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140, 140);


    (lib.chihiro_face_surprise1 = function() {
        this.initialize(img.whiteday_2020_opening_chihiro_face_surprise1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140, 140);


    (lib.logo_2020_flash = function() {
        this.initialize(img.whiteday_2020_opening_logo_2020_flash);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 400, 120);


    (lib.logo_2020_wd = function() {
        this.initialize(img.whiteday_2020_opening_logo_2020_wd);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 400, 120);


    (lib.shabon = function() {
        this.initialize(img.whiteday_2020_opening_shabon);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 100, 100);


    (lib.sp_glitter_title = function() {
        this.initialize(img.whiteday_2020_opening_sp_glitter_title);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 40, 40);


    (lib.tie_sp = function() {
        this.initialize(img.whiteday_2020_opening_tie_sp);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 480, 64); // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.wt_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("A1KaaMAAAg0zMAqVAAAMAAAA0zg");
        this.shape.setTransform(135.5, 168.975);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.wt_mc, new cjs.Rectangle(0, 0, 271, 338), null);


    (lib.white_logo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.logo_2020_flash();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5775, 0.5775);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.white_logo, new cjs.Rectangle(0, 0, 231, 69.3), null);


    (lib.btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Az1ZjMAAAgzFMAnrAAAMAAAAzFg");
        this.shape.setTransform(127, 163.475);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0, 0, 254, 327), null);


    (lib.black_rect = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("A1AZyMAAAgzjMAqBAAAMAAAAzjg");
        this.shape.setTransform(134.5, 164.975);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.black_rect, new cjs.Rectangle(0, 0, 269, 330), null);


    (lib.sender = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.play();
        }
        this.frame_55 = function() {
            key_flag = 1;
            this.gotoAndStop(0);
            //gotoAndPlay( "/pusher/:l" );
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(54).call(this.frame_55).wait(1));

        // Layer1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("Ah8B9IAAj5ID5AAIAAD5g");
        this.shape.setTransform(12.5, 12.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(56));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 25, 25);


    (lib.pointGlitter2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-34.6, -34.6, 69.30000000000001, 69.30000000000001);


    (lib.place = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // tf
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AAoBLIAAhXIgVAAQAAAdgFAWQgEAWgJANIgNgOQAIgJAEgSQADgTAAgbIAAg0IAggDIAVgEIAIgCIAHAPIgEABIgMACIgQADIgUACIAAAYIA4AAIAAAPIgTAAIAABXgAhKA9QAEgIABgNQABgMAAgPIAAgyIA+AAIAAA1IguAAIAAAVQgBALgCAJQgCAJgDAIgAg0AAIAdAAIAAgWIgdAAgAhJg0IAAgPIBHAAIAAAPg");
        this.shape.setTransform(15.975, 0.425);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#333333").s().p("AgOA+QAJgEAGgGQAFgFAFgGQADgGACgHIgVAAIAAgPIAaAAIABgKIABgEIAAgBIAPAAIAAABIAAAFIgBAJIAeAAIAAACIAAAdQgBAMgDAFQgDAHgGACQgGADgMABIgHgPQALABAEgCQAFgDABgFIABgSIAAgEIgSAAQgCAJgDAJQgFAIgIAIQgHAIgKAFgAg7A6IALAAQAEgBABgBQABgCAAgEIAAgsIgEAJIgFAMIgHAMIgJALIgIgSQAHgFAFgHIAJgPIAFgLIgYAAIAAgPIAjAAIgKgIIgJgFIgDgDIALgLIACACIAHAFIAHgHIAEgEIACgDIgqAAIAAgOIA9AAIAAAOIgDAFIgIAIIgKAKIAEACIADADIgHAGIAcAAIAAAJIAOgEIAKgGIgIgJIgFgHIgGAHIgFAEIgCACIgKgMIADgCIAIgHIAIgMQAFgHAEgJIAQAEIgCAEIgDAEIAtAAIAAANIgHAAIgGALQgDAHgHAIIAMAFIAQAFIgIAPQgKgDgIgEIgPgIIgOAJQgIAEgKAEIgFgIIgGAOIgGAMIgDAEIgKgLIAAAiQAAAJgBAGQgBAFgFACQgGADgLABgAgbAOIADgCIAEgIIAFgKIgMAAgAAagpIAJAJIAHgIIAEgJIgaAAIAGAIg");
        this.shape_1.setTransform(0, 0.45);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("AghA8IAGAAIAMgBQAFgBABgCQABgCABgDIg4AAIAAgOIA4AAIAAgKIhEAAIAAgLIBEAAIAAgJIg4AAIAAgNIA4AAIAAgIIg0AAIAAgfIA0AAIAAgIIhAAAIAAgOIBAAAIAAgHIAQAAIAAAHIBBAAIAAAOIhBAAIAAAIIA1AAIAAAfIg1AAIAAAIIA4AAIAAAWIAKAAIAAALIgKAAIAAAgIgRAAIAAgIIgnAAQAAAHgDAGQgDAGgGADQgIACgPAAgAAJAlIAnAAIAAgKIgnAAgAAJAQIAnAAIAAgJIgnAAgAAJgZIAkAAIAAgKIgkAAgAgqgZIAjAAIAAgKIgjAAg");
        this.shape_2.setTransform(-16, 0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

        // bmp_sp
        this.instance = new lib.tie_sp();
        this.instance.parent = this;
        this.instance.setTransform(-120, -16, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.place, new cjs.Rectangle(-120, -16, 240, 32), null);


    (lib.particle_common_parts4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.visible = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // レイヤー_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(0.575, -0.225);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // レイヤー_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQAOg+AOg3QARhAASg4QAehiAhhLQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.particle_common_parts4, new cjs.Rectangle(-5.2, -179.6, 149, 185.2), null);


    (lib.particle_common_parts3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-0.25, 0.525);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6.4, -5.7, 12.4, 12.5);


    (lib.logo_core = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.instance = new lib.logo_2020_wd();
        this.instance.parent = this;
        this.instance.setTransform(16, 18, 0.5775, 0.5775);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.logo_core, new cjs.Rectangle(0, 0, 260, 102), null);


    (lib.heart_core = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_3
        this.instance = new lib.shabon();
        this.instance.parent = this;
        this.instance.setTransform(-54.8, -52.65, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.heart_core, new cjs.Rectangle(-54.8, -52.6, 133.7, 131.7), null);


    (lib.drop2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#456CC4").ss(1, 1, 1).p("AhOAiIAbgjQAhgjAjgBQAwAAAMAhQALAegnALQgKABgmgHQghgHguAKg");
        this.shape.setTransform(0.004, 0.0059, 1, 1, 0, 0, 180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F0FAFF").s().p("AABAfQghgHguAKIAbgjQAhgjAjgBQAwAAAMAhQALAegnALIgDABQgMAAghgHg");
        this.shape_1.setTransform(0.004, 0.0059, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.9, -4.7, 17.8, 9.5);


    (lib.drop1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#456CC4").ss(1, 1, 1).p("AA4hDQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdQAJg5AjgZQAvghAhAYg");
        this.shape.setTransform(1.2129, 1.7575, 1, 1, 0, 0, 180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F0FAFF").s().p("AhEAYQAJg5AjgZQAvghAhAYQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdg");
        this.shape_1.setTransform(1.2129, 1.7575, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7, -7, 16.5, 17.6);


    (lib.cursor_core = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#353535").s().p("Al7lIIL3AAIl8KRg");
        this.shape.setTransform(-0.025, 0.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cursor_core, new cjs.Rectangle(-38, -32.8, 76, 65.69999999999999), null);


    (lib.chord2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FC8D05").s().p("AAZDjQgegIgGgUQgGgVAUgUQAWgUAkgJQAlgIAeAIIAMAEIAAjNQgJgHh6hUIAADGIADAHQAGAUgUAUQgWAUglAJQgkAIgegIQgfgIgGgUQgGgVAVgUQAWgUAkgJQAlgIAeAIIAMAEIAAj3IBXA8QBIAzANALQABAKAAB9IABB8IADAHQAGAUgVAUQgWAUglAJQgSAEgQAAQgRAAgPgEg");
        this.shape.setTransform(16.66, 23.1125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.chord2, new cjs.Rectangle(0, 0, 33.3, 46.2), null);


    (lib.chord1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FCE05F").s().p("Ah3CpQgfgIgGgUQgGgVAVgUQAWgUAkgJQAlgIAeAIIAMAEIAAj3QAIAIAiAKQArALASAJQBKAjgTBgQgShGg9gXQgUgHgVgCIgRAAIAADGIADAHQAGAUgVAUQgVAUglAJQgSAEgQAAQgRAAgPgEg");
        this.shape.setTransform(15.8526, 17.3125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.chord1, new cjs.Rectangle(0, 0, 31.7, 34.6), null);


    (lib.chihiro_face_close_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.chihiro_face_close();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.chihiro_face_close_1, new cjs.Rectangle(0, 0, 70, 35), null);


    (lib.base_messagewindow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AwYGQQhlAAAAhqIAApMQAAhpBlAAMAgwAAAQBmAAAABpIAAJMQAABqhmAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.base_messagewindow, new cjs.Rectangle(-115, -40, 230, 80), null);


    (lib.range = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.visible = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AufO/IAA99Ic+AAIAAd9g");
        this.shape.setTransform(0, 0.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.range, new cjs.Rectangle(-92.7, -95.8, 185.5, 191.7), null);


    (lib.grip = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.visible = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AkkAAIEkkkIElEkIklElg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.grip, new cjs.Rectangle(-29.3, -29.3, 58.7, 58.7), null);


    (lib.glitter_inner_line = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, 0.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.glitter_inner_line, new cjs.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);


    (lib.glitter_inner = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // _0x40
        this.instance = new lib.sp_glitter_title();
        this.instance.parent = this;
        this.instance.setTransform(-10, -10, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.glitter_inner, new cjs.Rectangle(-10, -10, 20, 20), null);


    (lib.shock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFCC00").ss(0.5, 1, 1).p("AgJAGIAciWIhpBvIgbkKIg4EaIhbiVIBFDUQA6AJAWAYQAWAXAHAZQAHAYgCAfICGB2Igzh/ICcgCIiWhEID5iRg");
        this.shape.setTransform(11.625, -8.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.rf(["#FFD200", "rgba(255,198,88,0.498)"], [0, 1], -18.7, 10.2, 0, -18.7, 10.2, 24.1).s().p("AhNC1QACgegHgZQgHgYgWgYQgWgXg6gKIhFjTIBbCVIA4kaIAbELIBphwIgcCWIEOgwIj5CRICWBEIicABIAzCAg");
        this.shape_1.setTransform(11.625, -8.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.5, -39.2, 54.3, 61.900000000000006);


    (lib.character1_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // base
        this.instance = new lib.chihiro_base();
        this.instance.parent = this;
        this.instance.setTransform(-70, -290, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-70, -290, 140, 300);


    (lib.シンボル1aaa = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-5.3448, -5.1698);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // レイヤー_2
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(68,69,69,0.702)").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape_1.setTransform(-4.7448, -3.9198);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.シンボル1aaa, new cjs.Rectangle(-10.7, -10.3, 11.299999999999999, 11.600000000000001), null);


    (lib.shield = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EhBnBH4MAAAiPvMCDPAAAMAAACPvgAyvXcMAlfAAAMAAAgwbMglfAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.shield, new cjs.Rectangle(-420, -460, 840, 920), null);


    (lib.bg2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_3
        this.instance = new lib.bg_sp();
        this.instance.parent = this;
        this.instance.setTransform(0, -9, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(0, -9, 260, 330), null);


    (lib.___bg1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // val_bg1_jpg
        this.instance = new lib.bg_sp();
        this.instance.parent = this;
        this.instance.setTransform(-130, -165, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.___bg1, new cjs.Rectangle(-130, -165, 260, 330), null);


    (lib.particle_common_parts2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_15 = function() {
            this.stop();
        }
        this.frame_29 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(14).call(this.frame_29).wait(1));

        // guide
        this.instance = new lib.particle_common_parts4();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

        // particle
        this.instance_1 = new lib.particle_common_parts3();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, 0.7674, 0.7674);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            scaleX: 0.382,
            scaleY: 0.382,
            rotation: 360,
            guide: {
                path: [20.1, -4.1, 22.9, -5.2, 25.7, -6.6, 52.7, -19.9, 60.5, -51.8, 63.7, -64.5, 69.7, -92.9, 75.6, -118.3, 82.4, -133.8, 82.5, -133.9, 82.5, -134]
            },
            alpha: 0.4609
        }, 13, cjs.Ease.quadOut).to({
            _off: true
        }, 1).wait(16));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.2, -178.7, 148.5, 184.7);


    (lib.particle_common_parts1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.r = Math.floor(Math.random() * 3 + 2);
            this.gotoAndPlay(this.r);
        }
        this.frame_21 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));

        // marker
        this.instance = new lib.particle_common_parts4();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

        // particle
        this.instance_1 = new lib.particle_common_parts3();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, 0.7347, 0.7347);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            regX: -0.3,
            regY: 0.5,
            scaleX: 0.5967,
            scaleY: 0.5967,
            rotation: 140.8707,
            x: 62.05,
            y: -58.8,
            alpha: 0.8319
        }, 0).wait(1).to({
            scaleX: 0.5493,
            scaleY: 0.5493,
            rotation: 189.3068,
            x: 69,
            y: -89.15,
            alpha: 0.774
        }, 0).wait(1).to({
            scaleX: 0.5163,
            scaleY: 0.5163,
            rotation: 222.9188,
            x: 73.15,
            y: -105.8,
            alpha: 0.7339
        }, 0).wait(1).to({
            scaleX: 0.4911,
            scaleY: 0.4911,
            rotation: 248.676,
            x: 76.1,
            y: -115.9,
            alpha: 0.7032
        }, 0).wait(1).to({
            scaleX: 0.4709,
            scaleY: 0.4709,
            rotation: 269.3198,
            x: 78.9,
            y: -124.25,
            alpha: 0.6785
        }, 0).wait(1).to({
            scaleX: 0.4543,
            scaleY: 0.4543,
            rotation: 286.2744,
            x: 81.55,
            y: -131.4,
            alpha: 0.6583
        }, 0).wait(1).to({
            scaleX: 0.4404,
            scaleY: 0.4404,
            rotation: 300.3959,
            x: 84.35,
            y: -137.6,
            alpha: 0.6415
        }, 0).wait(1).to({
            scaleX: 0.4288,
            scaleY: 0.4288,
            rotation: 312.2476,
            x: 86.65,
            y: -142.35,
            alpha: 0.6273
        }, 0).wait(1).to({
            scaleX: 0.4191,
            scaleY: 0.4191,
            rotation: 322.2242,
            x: 88.85,
            y: -146.2,
            alpha: 0.6154
        }, 0).wait(1).to({
            scaleX: 0.4108,
            scaleY: 0.4108,
            rotation: 330.6158,
            x: 90.85,
            y: -149.45,
            alpha: 0.6054
        }, 0).wait(1).to({
            scaleX: 0.404,
            scaleY: 0.404,
            rotation: 337.643,
            x: 92.7,
            y: -152.15,
            alpha: 0.597
        }, 0).wait(1).to({
            scaleX: 0.3982,
            scaleY: 0.3982,
            rotation: 343.4783,
            x: 94.3,
            y: -154.4,
            alpha: 0.59
        }, 0).wait(1).to({
            scaleX: 0.3936,
            scaleY: 0.3936,
            rotation: 348.2599,
            x: 95.7,
            y: -156.2,
            alpha: 0.5843
        }, 0).wait(1).to({
            scaleX: 0.3898,
            scaleY: 0.3898,
            rotation: 352.1005,
            x: 96.9,
            y: -157.65,
            alpha: 0.5797
        }, 0).wait(1).to({
            scaleX: 0.3869,
            scaleY: 0.3869,
            rotation: 355.0937,
            x: 97.85,
            y: -158.75,
            alpha: 0.5762
        }, 0).wait(1).to({
            scaleX: 0.3847,
            scaleY: 0.3847,
            rotation: 357.3179,
            x: 98.6,
            y: -159.55,
            alpha: 0.5735
        }, 0).wait(1).to({
            scaleX: 0.3832,
            scaleY: 0.3832,
            rotation: 358.8401,
            x: 99.1,
            y: -160.1,
            alpha: 0.5717
        }, 0).wait(1).to({
            scaleX: 0.3823,
            scaleY: 0.3823,
            rotation: 359.7175,
            x: 99.4,
            y: -160.4,
            alpha: 0.5706
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 0.382,
            scaleY: 0.382,
            rotation: 360,
            x: 99.8,
            y: -160.55,
            alpha: 0.5703
        }, 0).to({
            _off: true
        }, 1).wait(16));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.2, -178.7, 148.5, 184.7);


    (lib.glitter_first_inner = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.pointGlitter2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.0121, 0.6227, 59.2024);

        this.instance_1 = new lib.pointGlitter2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, 0.0109, 0.7287, -30.7981);

        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(255,252,237,0.051)", "rgba(255,255,255,0)"], [0, 0.055, 0.761, 1], 0, 0, 0, 0, 0, 5.4).s().p("AgZAtQgTgLgFgUQgGgVALgSQALgTAUgFQAVgGASALQATALAFAUQAGAVgLASQgLATgUAFQgIACgGAAQgNAAgMgHg");

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.glitter_first_inner, new cjs.Rectangle(-18.5, -21.7, 37.1, 43.4), null);


    (lib.cursor = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // カーソル
        this.instance = new lib.cursor_core();
        this.instance.parent = this;
        this.instance.setTransform(210, 135.75, 0.1846, 0.1863, 0, 0, 0, 0, -0.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            scaleX: 0.1844,
            y: 137.7
        }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(203, 129.8, 14, 14.199999999999989);


    (lib.chord = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_14 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

        // chord
        this.instance = new lib.chord2();
        this.instance.parent = this;
        this.instance.setTransform(-36, 76.7, 0.5582, 0.5582, -0.2819, 0, 0, 15.7, 17.4);
        this.instance.alpha = 0.1016;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).to({
            regX: 15.8,
            scaleX: 0.9628,
            scaleY: 0.9628,
            rotation: 14.3457,
            guide: {
                path: [-35.9, 76.7, -38.6, 65.6, -37.5, 54.3, -35.4, 34.2, -20.7, 22.9, -17.1, 20.1, -14.2, 16.9]
            },
            alpha: 0.6602
        }, 5).wait(1).to({
            regX: 16.7,
            regY: 23.1,
            scaleX: 1.0446,
            scaleY: 1.0446,
            rotation: -0.4369,
            x: -5.6,
            y: 11.55,
            alpha: 0.7734
        }, 0).wait(1).to({
            scaleX: 1.1264,
            scaleY: 1.1264,
            rotation: -15.2195,
            x: 0.2,
            y: -1.85,
            alpha: 0.8867
        }, 0).wait(1).to({
            regX: 15.8,
            regY: 17.3,
            scaleX: 1.2081,
            scaleY: 1.2081,
            rotation: -30.002,
            x: -2.25,
            y: -20.85,
            alpha: 1
        }, 0).to({
            scaleX: 1.2082,
            scaleY: 1.2082,
            rotation: -5.5524,
            guide: {
                path: [-2.3, -20.8, -2.4, -21.5, -2.6, -22.2, -4, -29.1, -7.5, -33]
            },
            alpha: 0
        }, 3).to({
            _off: true
        }, 1).wait(1));

        // chord
        this.instance_1 = new lib.chord1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-23.5, 77.25, 0.9892, 0.9892, -44.9988, 0, 0, 15.8, 17.4);
        this.instance_1.alpha = 0.1016;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            regY: 17.3,
            scaleX: 1.2082,
            scaleY: 1.2082,
            rotation: 29.9993,
            guide: {
                path: [-23.5, 77.2, -22.3, 75.1, -21.1, 72.9, -6.9, 48, 13.4, 39.4, 33.4, 31.3, 43.7, 10, 48.3, 0.5, 50, -7.9]
            },
            alpha: 1
        }, 7).to({
            rotation: 29.9993,
            x: 62.35,
            y: -32.75,
            alpha: 0
        }, 3).to({
            _off: true
        }, 1).wait(4));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-49, -60.4, 138.4, 201.20000000000002);


    (lib.glitter = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_8 = function() {
            this.gotoAndPlay(this.timeline + Math.floor(Math.random() * 7 + 1));
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(10));

        // Layer_1
        this.instance = new lib.grip();
        this.instance.parent = this;
        this.instance.alpha = 0.6602;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(17));

        // レイヤー_2
        this.instance_1 = new lib.glitter_inner_line();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.05, 0, 0.1255, 1);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            _off: false
        }, 0).wait(1).to({
            scaleX: 1
        }, 0).to({
            scaleX: 0.5,
            alpha: 0.1289
        }, 4).to({
            _off: true
        }, 1).wait(11));

        // レイヤー_3
        this.instance_2 = new lib.glitter_inner();
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, 0.6427, 0.6427, -44.822);
        this.instance_2.alpha = 0.4297;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({
            scaleX: 3.7607,
            scaleY: 3.7607,
            rotation: -11.2055,
            alpha: 0.8574
        }, 0).wait(1).to({
            scaleX: 4.8,
            scaleY: 4.8,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 4.722,
            scaleY: 4.722,
            rotation: 1.9399,
            alpha: 0.971
        }, 0).wait(1).to({
            scaleX: 4.5026,
            scaleY: 4.5026,
            rotation: 7.4005,
            alpha: 0.8893
        }, 0).wait(1).to({
            scaleX: 4.1415,
            scaleY: 4.1415,
            rotation: 16.3817,
            alpha: 0.7549
        }, 0).wait(1).to({
            scaleX: 3.6391,
            scaleY: 3.6391,
            rotation: 28.8836,
            alpha: 0.5678
        }, 0).wait(1).to({
            scaleX: 2.9951,
            scaleY: 2.9951,
            rotation: 44.9061,
            alpha: 0.3281
        }, 0).to({
            _off: true
        }, 1).wait(10));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-148.2, -51.3, 296.29999999999995, 102.69999999999999);


    (lib.powder_rise_glitter_core_inner = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_6
        this.instance = new lib.heart_core();
        this.instance.parent = this;
        this.instance.setTransform(0.05, -0.3, 1, 1, 0, 0, 0, 19.2, 18.4);
        this.instance.alpha = 0.6484;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.powder_rise_glitter_core_inner, new cjs.Rectangle(-73.9, -71.3, 78.4, 76), null);


    (lib.powder_rise_glitter_core = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(Math.random() * 4 + 2));
        }
        this.frame_14 = function() {
            this.gotoAndPlay(1);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

        // レイヤー_5
        this.instance = new lib.powder_rise_glitter_core_inner();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-73.9, -71.3, 69.60000000000001, 50);


    (lib.powder_rise_glitter_inner = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            r: 46,
            "-": 104
        });

        // timeline functions:
        this.frame_0 = function() {
            //_rotation = _rotation + Math.random()*14
            this.gotoAndPlay(Math.floor(Math.random() * 40 + 12));
        }
        this.frame_104 = function() {
            this.gotoAndPlay("r");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(104).call(this.frame_104).wait(1));

        // レイヤー_1
        this.instance = new lib.powder_rise_glitter_core();
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({
            x: -0.7,
            y: -17.7
        }, 0).to({
            guide: {
                path: [-0.6, -17.6, -6.9, 1.2, -13.2, 25.8, -26.5, 77.2, -26.5, 108.7, -26.5, 125.5, -17, 148.3, -11.3, 161.8, 3.9, 190, 19.1, 218.1, 24.9, 232, 34.4, 255, 34.4, 272.1, 34.4, 301.2, 19.5, 335.3]
            }
        }, 52).to({
            guide: {
                path: [19.5, 335.3, 18, 338.6, 16.4, 341.9, 7.8, 360.2, -0.9, 372.5]
            },
            alpha: 0
        }, 6).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-100.6, -89, 111.1, 440.2);


    (lib.powder_rise_glitter = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // powder_rise_glitter_inner
        this.instance = new lib.powder_rise_glitter_inner();
        this.instance.parent = this;
        this.instance.setTransform(16.6, -24, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // powder_rise_glitter_inner
        this.instance_1 = new lib.powder_rise_glitter_inner();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-21.85, -19.95, 1.6568, 1.6568);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // powder_rise_glitter_inner
        this.instance_2 = new lib.powder_rise_glitter_inner();
        this.instance_2.parent = this;
        this.instance_2.setTransform(105.3, 11.8, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // powder_rise_glitter_inner
        this.instance_3 = new lib.powder_rise_glitter_inner();
        this.instance_3.parent = this;
        this.instance_3.setTransform(55.65, 8.55, 2.4406, 2.4406);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // powder_rise_glitter_inner
        this.instance_4 = new lib.powder_rise_glitter_inner();
        this.instance_4.parent = this;
        this.instance_4.setTransform(94.85, -21.85, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

        // powder_rise_glitter_inner
        this.instance_5 = new lib.powder_rise_glitter_inner();
        this.instance_5.parent = this;
        this.instance_5.setTransform(66.4, -9.45, 0.8768, 0.8768);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

        // powder_rise_glitter_inner
        this.instance_6 = new lib.powder_rise_glitter_inner();
        this.instance_6.parent = this;
        this.instance_6.setTransform(75.6, 13.9, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

        // powder_rise_glitter_inner
        this.instance_7 = new lib.powder_rise_glitter_inner();
        this.instance_7.parent = this;
        this.instance_7.setTransform(25.3, 9.95, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

        // powder_rise_glitter_inner
        this.instance_8 = new lib.powder_rise_glitter_inner();
        this.instance_8.parent = this;
        this.instance_8.setTransform(223.85, -86.95, 1.7651, 1.7651);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

        // powder_rise_glitter_inner
        this.instance_9 = new lib.powder_rise_glitter_inner();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-5.4, -60.3, 0.8768, 0.8768);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

        // powder_rise_glitter_inner
        this.instance_10 = new lib.powder_rise_glitter_inner();
        this.instance_10.parent = this;
        this.instance_10.setTransform(190, 0.95, 1.2937, 1.2937);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

        // powder_rise_glitter_inner
        this.instance_11 = new lib.powder_rise_glitter_inner();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-31.8, 6.65, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

        // powder_rise_glitter_inner
        this.instance_12 = new lib.powder_rise_glitter_inner();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-46.95, 10.55, 0.8768, 0.8768);

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

        // powder_rise_glitter_inner
        this.instance_13 = new lib.powder_rise_glitter_inner();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-98.05, -10.05, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

    }).prototype = getMCSymbolPrototype(lib.powder_rise_glitter, new cjs.Rectangle(-297.7, -243.7, 479.29999999999995, 258.2), null);


    (lib.character1_face_close = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.chihiro_face_close = new lib.chihiro_face_close_1();
        this.chihiro_face_close.name = "chihiro_face_close";
        this.chihiro_face_close.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.chihiro_face_close).wait(1));

    }).prototype = getMCSymbolPrototype(lib.character1_face_close, new cjs.Rectangle(0, 0, 70, 35), null);


    (lib.character1_face = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_2 = function() {
            this.stop();
        }
        this.frame_3 = function() {
            this.stop();
        }
        this.frame_4 = function() {
            this.stop();
        }
        this.frame_5 = function() {
            this.stop();
        }
        this.frame_6 = function() {
            this.stop();
        }
        this.frame_7 = function() {
            this.stop();
        }
        this.frame_8 = function() {
            this.stop();
        }
        this.frame_9 = function() {
            this.stop();
        }
        this.frame_10 = function() {
            this.stop();
        }
        this.frame_11 = function() {
            this.stop();
        }
        this.frame_12 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1));

        // mask_face (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_6 = new cjs.Graphics().p("AASB9Qg2gJghgTQgugagVgzQgPgkgUgkQgIgXAcgdQAfgeA2ANQAmAJA4AhQAVAMBQANQA1AJgJAfQgKAlgVAbQgTAYgFgJQgKASgRAQQgeAbgfAAIgMgBg");
        var mask_graphics_8 = new cjs.Graphics().p("AlTCdIAAk5IFFAAIFiCjIAACWg");
        var mask_graphics_10 = new cjs.Graphics().p("AjHClIAAlJIFFAAIBKAmIhWEjg");
        var mask_graphics_11 = new cjs.Graphics().p("AlTCdIAAk5IFFAAIFiCjIAACWg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(6).to({
            graphics: mask_graphics_6,
            x: -6.8039,
            y: -187.0047
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(1).to({
            graphics: mask_graphics_8,
            x: -0.5,
            y: -209.2
        }).wait(2).to({
            graphics: mask_graphics_10,
            x: -14.5125,
            y: -210
        }).wait(1).to({
            graphics: mask_graphics_11,
            x: -0.5,
            y: -209.2
        }).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(1));

        // chihiro_face_close_png
        this.instance = new lib.chihiro_face_sad2();
        this.instance.parent = this;
        this.instance.setTransform(-35.5, -239, 0.5, 0.5);

        this.chihiro_face_close = new lib.chihiro_face_close_1();
        this.chihiro_face_close.name = "chihiro_face_close";
        this.chihiro_face_close.parent = this;
        this.chihiro_face_close.setTransform(-35.5, -227.5);

        var maskedShapeInstanceList = [this.instance, this.chihiro_face_close];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance
            }]
        }, 6).to({
            state: []
        }, 1).to({
            state: [{
                t: this.chihiro_face_close
            }]
        }, 1).to({
            state: [{
                t: this.chihiro_face_close
            }]
        }, 3).to({
            state: []
        }, 1).wait(1));

        // mask_face (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AlTn9IAAqoIKnAAIAAKog");
        mask_1.setTransform(-0.5035, -119.0015);

        // face
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(0.5, -0.5, 1, 1, 0, 0, 0, 0.5, -0.5);

        this.instance_1 = new lib.chihiro_face_laugh();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-35.5, -239, 0.5, 0.5);

        this.instance_2 = new lib.chihiro_face_smile();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-35.5, -239, 0.5, 0.5);

        this.instance_3 = new lib.chihiro_face_surprise1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-35.5, -239, 0.5, 0.5);

        this.instance_4 = new lib.chihiro_face_strong();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-35.5, -239, 0.5, 0.5);

        this.instance_5 = new lib.chihiro_face_sad();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-35.5, -239, 0.5, 0.5);

        this.instance_6 = new lib.chihiro_face_sad2();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-35.5, -239, 0.5, 0.5);

        var maskedShapeInstanceList = [this.b, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.b
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
                t: this.b
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_5
            }]
        }, 2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-41.5, -239, 75, 73);


    (lib.symbol_5aa = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_8 = function() {
            this.gotoAndPlay(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

        // レイヤー_1
        this.instance = new lib.シンボル1aaa();
        this.instance.parent = this;
        this.instance.setTransform(-2.7, -2.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
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
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.1, -21.1, 21.1, 21.1);


    (lib.logo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            loop: 20
        });

        // timeline functions:
        this.frame_49 = function() {
            /* gotoAndPlay("loop");*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

        // レイヤー_3
        this.instance = new lib.white_logo();
        this.instance.parent = this;
        this.instance.setTransform(91.5, 71.6, 1, 1, 0, 0, 0, 115.5, 34.6);
        this.instance.alpha = 0.0117;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({
            _off: false
        }, 0).to({
            x: 91.4,
            y: 70.25,
            alpha: 1
        }, 14).to({
            x: 91.5,
            y: 71.6,
            alpha: 0.0117
        }, 15).wait(1));

        // レイヤー_1
        this.instance_1 = new lib.logo_core();
        this.instance_1.parent = this;
        this.instance_1.setTransform(70, 65, 1, 1, 0, 0, 0, 110, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.1, 35.7, 231.1, 70.6);


    (lib.___place = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.instance = new lib.place();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.___place, new cjs.Rectangle(-120, -16, 240, 32), null);


    (lib.powder_rise_core2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.visible = false;
            this.gotoAndPlay(1 + Math.floor(Math.random() * 30));
        }
        this.frame_1 = function() {
            this.visible = false;
            this.gotoAndPlay(this.timeline + Math.floor(Math.random() * 20));
        }
        this.frame_31 = function() {
            this.visible = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(30).call(this.frame_31).wait(9));

        // glitter
        this.instance = new lib.glitter_first_inner();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5144, 0.5144);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(30).to({
            _off: false,
            scaleX: 0.1949,
            scaleY: 0.1949,
            rotation: -44.8223,
            alpha: 0.4297
        }, 0).wait(1).to({
            scaleX: 0.4345,
            scaleY: 0.4345,
            rotation: -11.2056,
            alpha: 0.8574
        }, 0).wait(1).to({
            scaleX: 0.5144,
            scaleY: 0.5144,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 0.5051,
            scaleY: 0.5051,
            rotation: 1.94,
            alpha: 0.971
        }, 0).wait(1).to({
            scaleX: 0.479,
            scaleY: 0.479,
            rotation: 7.4007,
            alpha: 0.8893
        }, 0).wait(1).to({
            scaleX: 0.436,
            scaleY: 0.436,
            rotation: 16.3821,
            alpha: 0.7549
        }, 0).wait(1).to({
            scaleX: 0.3762,
            scaleY: 0.3762,
            rotation: 28.8843,
            alpha: 0.5678
        }, 0).wait(1).to({
            scaleX: 0.2995,
            scaleY: 0.2995,
            rotation: 44.9071,
            alpha: 0.3281
        }, 0).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.6, -11.2, 19.299999999999997, 22.5);


    (lib.particle1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // particle_common_parts_aka
        this.instance = new lib.particle_common_parts2();
        this.instance.parent = this;
        this.instance.setTransform(-1.4, 38.65, 0.8585, 0.8585, -173.2889);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // particle_common_parts_kuro
        this.instance_1 = new lib.particle_common_parts1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-26.5, 10.95, 0.8544, 0.5085, 0, -124.1512, 76.2156, -59.8, -3.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // particle_common_parts_kuro
        this.instance_2 = new lib.particle_common_parts1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-12, 28, 0.6032, 0.6714, 0, 102.0919, 76.0499);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // particle_common_parts_kuro
        this.instance_3 = new lib.particle_common_parts1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(24, 22, 0.6032, 0.6032, 154.5512);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // particle_common_parts_aka
        this.instance_4 = new lib.particle_common_parts2();
        this.instance_4.parent = this;
        this.instance_4.setTransform(10, 40, 0.67, 0.5378, 0, -151.6456, 57.8841);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

        // particle_common_parts_kuro
        this.instance_5 = new lib.particle_common_parts1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

        // particle_common_parts_kuro
        this.instance_6 = new lib.particle_common_parts1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(13.6, 24.65, 0.5924, 0.5292, 0, 155.0554, -24.9453);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

        // particle_common_parts_aka
        this.instance_7 = new lib.particle_common_parts2();
        this.instance_7.parent = this;
        this.instance_7.setTransform(2.25, 20.95, 0.5292, 0.5292, 134.5199);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

        // particle_common_parts_aka
        this.instance_8 = new lib.particle_common_parts2();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-38, 10, 0.5292, 0.5292, 0, -53.2543, 126.7457);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

        // particle_common_parts_kuro
        this.instance_9 = new lib.particle_common_parts1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-28, -14, 0.6032, 0.6714, 0, -58.4598, -84.5013);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

        // particle_common_parts_kuro
        this.instance_10 = new lib.particle_common_parts1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-6.95, -18.05, 0.6032, 0.6032, -115.4488);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

        // particle_common_parts_aka
        this.instance_11 = new lib.particle_common_parts2();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-30, 16, 0.67, 0.5379, 0, -103.6061, 105.9244);

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

        // particle_common_parts_kuro
        this.instance_12 = new lib.particle_common_parts1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

        // particle_common_parts_aka
        this.instance_13 = new lib.particle_common_parts2();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-32.05, -3.5, 1, 1, -135.4791);

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

        // particle_common_parts_kuro
        this.instance_14 = new lib.particle_common_parts1();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-14.65, 19.6, 0.5925, 0.5292, 0, -72.0065, 107.9921);

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

        // particle_common_parts_aka
        this.instance_15 = new lib.particle_common_parts2();
        this.instance_15.parent = this;
        this.instance_15.setTransform(6.55, -31.7, 0.8585, 0.8585, -6.5255);

        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

        // particle_common_parts_aka
        this.instance_16 = new lib.particle_common_parts2();
        this.instance_16.parent = this;
        this.instance_16.setTransform(6.55, -31.7, 0.5292, 0.5292, 0, 36.7457, -143.2543);

        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

        // particle_common_parts_kuro
        this.instance_17 = new lib.particle_common_parts1();
        this.instance_17.parent = this;
        this.instance_17.setTransform(29.35, 1.45, 0.8544, 0.5085, 0, 20.6446, -138.9891, -59.9, -3.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

        // particle_common_parts_kuro
        this.instance_18 = new lib.particle_common_parts1();
        this.instance_18.parent = this;
        this.instance_18.setTransform(4.65, -27.5, 0.6032, 0.6714, 0, -19.4377, -45.4796);

        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

        // particle_common_parts_kuro
        this.instance_19 = new lib.particle_common_parts1();
        this.instance_19.parent = this;
        this.instance_19.setTransform(10, -24, 0.6032, 0.6032, 19.5497);

        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

        // particle_common_parts_aka
        this.instance_20 = new lib.particle_common_parts2();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-7.15, -27.65, 0.67, 0.5378, 0, -7.3809, -157.8494);

        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

        // particle_common_parts_aka
        this.instance_21 = new lib.particle_common_parts2();
        this.instance_21.parent = this;
        this.instance_21.setTransform(8, -18, 1, 1, -45.4791);

        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

        // particle_common_parts_kuro
        this.instance_22 = new lib.particle_common_parts1();
        this.instance_22.parent = this;
        this.instance_22.setTransform(-10.75, -12.3, 0.5925, 0.5292, 0, 17.9935, -162.0079);

        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

        // particle_common_parts_aka
        this.instance_23 = new lib.particle_common_parts2();
        this.instance_23.parent = this;
        this.instance_23.setTransform(50, 16, 0.8585, 0.8585, 61.4817);

        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

        // particle_common_parts_kuro
        this.instance_24 = new lib.particle_common_parts1();
        this.instance_24.parent = this;
        this.instance_24.setTransform(13.4, 36.85, 0.8544, 0.5085, 0, 110.6446, -48.9891, -59.7, -3.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

        // particle_common_parts_kuro
        this.instance_25 = new lib.particle_common_parts1();
        this.instance_25.parent = this;
        this.instance_25.setTransform(24, -2, 0.6032, 0.6714, 0, 70.5623, 44.5204);

        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1));

        // particle_common_parts_kuro
        this.instance_26 = new lib.particle_common_parts1();
        this.instance_26.parent = this;
        this.instance_26.setTransform(38, 6, 0.6032, 0.6032, 64.5512);

        this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1));

        // particle_common_parts_aka
        this.instance_27 = new lib.particle_common_parts2();
        this.instance_27.parent = this;
        this.instance_27.setTransform(27.95, -3.15, 0.67, 0.5378, 0, 73.3557, -77.1152);

        this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1));

        // particle_common_parts_kuro
        this.instance_28 = new lib.particle_common_parts1();
        this.instance_28.parent = this;
        this.instance_28.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);

        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1));

        // particle_common_parts_kuro
        this.instance_29 = new lib.particle_common_parts1();
        this.instance_29.parent = this;
        this.instance_29.setTransform(13.6, 24.65, 0.5292, 0.5292, 61.4871);

        this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1));

    }).prototype = getMCSymbolPrototype(lib.particle1, new cjs.Rectangle(-259.5, -245.4, 503, 474.70000000000005), null);


    (lib.message_window = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_3
        this.instance = new lib.cursor();
        this.instance.parent = this;
        this.instance.setTransform(104.55, 31.6, 0.6429, 0.6408, 0, 0, 0, 210, 135.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // レイヤー_1
        this.instance_1 = new lib.base_messagewindow();
        this.instance_1.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.message_window, new cjs.Rectangle(-115, -40, 230, 80), null);


    (lib.glitter_title = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_71 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

        // glitter
        this.instance = new lib.glitter();
        this.instance.parent = this;
        this.instance.setTransform(89.75, -22.3, 0.2, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(72));

        // glitter
        this.instance_1 = new lib.glitter();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-60, 27.55, 0.281, 0.281);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({
            _off: false
        }, 0).wait(62));

        // glitter
        this.instance_2 = new lib.glitter();
        this.instance_2.parent = this;
        this.instance_2.setTransform(97.4, 4.05, 0.281, 0.281);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({
            _off: false
        }, 0).wait(3));

        // glitter
        this.instance_3 = new lib.glitter();
        this.instance_3.parent = this;
        this.instance_3.setTransform(61.1, 23, 0.15, 0.15);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({
            _off: false
        }, 0).wait(20));

        // glitter
        this.instance_4 = new lib.glitter();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-85.6, 4.9, 0.15, 0.15);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({
            _off: false
        }, 0).wait(35));

        // glitter
        this.instance_5 = new lib.glitter();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-85.75, 29.05, 0.15, 0.15);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({
            _off: false
        }, 0).wait(47));

        // glitter
        this.instance_6 = new lib.glitter();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-79.75, -49.85, 0.15, 0.15);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({
            _off: false
        }, 0).wait(68));

        // glitter
        this.instance_7 = new lib.glitter();
        this.instance_7.parent = this;
        this.instance_7.setTransform(85.3, -32.1, 0.15, 0.15);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72));

        // glitter
        this.instance_8 = new lib.glitter();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-13.75, -9.5, 0.15, 0.15);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({
            _off: false
        }, 0).wait(3));

        // glitter
        this.instance_9 = new lib.glitter();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-87.6, -21.4, 0.281, 0.281);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({
            _off: false
        }, 0).wait(48));

        // glitter
        this.instance_10 = new lib.glitter();
        this.instance_10.parent = this;
        this.instance_10.setTransform(40.6, -35.65, 0.281, 0.281);
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({
            _off: false
        }, 0).wait(54));

        // glitter
        this.instance_11 = new lib.glitter();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-28.05, -57.2, 0.281, 0.281, 0, 0, 0, -1.3, -0.2);
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({
            _off: false
        }, 0).wait(62));

        // glitter
        this.instance_12 = new lib.glitter();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-7.7, 25, 0.15, 0.15);
        this.instance_12._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({
            _off: false
        }, 0).wait(69));

        // Layer_11
        this.instance_13 = new lib.glitter();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-60.95, -5228.2, 0.281, 0.281);
        this.instance_13._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({
            _off: false
        }, 0).wait(21));

        // range
        this.instance_14 = new lib.range();
        this.instance_14.parent = this;
        this.instance_14.setTransform(0, -0.05, 1.2937, 0.4485, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(72));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-120, -5236.4, 240, 5279.4);


    (lib.character1_face_close_container = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // close
        this.instance = new lib.character1_face_close();
        this.instance.parent = this;
        this.instance.alpha = 0.1992;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            regX: 35,
            regY: 17.5,
            x: 35,
            y: 17.5,
            alpha: 0.3015
        }, 0).wait(1).to({
            alpha: 0.0922
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: 0
        }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 70, 35);


    (lib.powder_rise_inner2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "r": 46,
            "-": 204
        });

        // timeline functions:
        this.frame_0 = function() {
            this.rotation = this.rotation + Math.floor(Math.random() * 14);
            this.gotoAndPlay(Math.floor(Math.random() * 80 + 1));
        }
        this.frame_204 = function() {
            this.gotoAndPlay("r");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(204).call(this.frame_204).wait(1));

        // レイヤー_1
        this.instance = new lib.powder_rise_core2();
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({
            x: 0.6,
            y: 575.55
        }, 158).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.1, -28.7, 86.7, 615.5);


    (lib.character1_face_container = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            init: 0,
            run: 5,
            stay: 10,
            s2: 11,
            s3: 12,
            blink1: 15,
            blink2: 21
        });

        // timeline functions:
        this.frame_0 = function() {
            /* //const
            //NORMAL = 1;
            //NORMAL2 = 2;
            //ANGRY = 3;
            //CLOSE = 4;
            
            //public var
            current_face = 1;	//現在の表情
            next_face = 1;		//次の表情
            blink = 100;			//まばたきまでの最大フレーム数 (小さい程頻繁にまばたきする)
            face1_blink = 1;		//0:まばたきしない 1~:まばたきする
            face2_blink = 1;
            face3_blink = 0;
            face4_blink = 1;
            face5_blink = 0;
            face6_blink = 0;
            face7_blink = 1;
            face8_blink = 0;
            face9_blink = 0;
            face10_blink = 0;
            face11_blink = 0;
            face12_blink = 0;
            face13_blink = 0;
            
            //private var
            cnt = 0;			//まばたきカウント
            
            call("setBlink");
            gotoAndPlay("stay");
            */

            // 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12
            this.face_blink_ary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.blink = 100; //まばたきまでの最大フレーム数 (小さい程頻繁にまばたきする)
            // 瞬き関数
            this.setBlink = function() {
                Math.floor(Math.random() * this.blink);
            }

            this.current_face = 0; //現在の表情
            exportRoot.next_face = 1; //次の表情
            this.cnt = 0; //まばたきカウント
            this.gotoAndPlay("stay");
        }
        this.frame_5 = function() {
            /* f1_alpha._visible = false;
            
            if (next_face eq current_face) {
            	gotoAndPlay("stay");
            } else {
            	//表情1から表情2に変わる
            	gotoAndStop("f1/:" add current_face);
            	gotoAndStop("f2/:" add next_face);
            	
            	if (current_face eq 1) {
            		f1._visible = false;
            	} else {
            		f1._visible = true;
            	}
            	if (next_face eq 1) {
            		f1._visible = false;
            		f2._visible = false;
            		f1_alpha._visible = true;
            		gotoAndStop("f1_alpha/:" add current_face);
            	} else {
            		f2._visible = true;
            	}
            }
            */

            this.f1_alpha.visible = false;

            if (exportRoot.next_face == this.current_face) {
                this.gotoAndPlay("stay");
            } else {
                //表情1から表情2に変わる
                this.f1.gotoAndStop(this.current_face);
                this.f2.gotoAndStop(exportRoot.next_face);

                this.f1.visible = true;

                if (exportRoot.next_face == 1) {
                    this.f1.visible = true;
                    this.f2.visible = true;
                    this.f1_alpha.visible = true;
                    this.f1_alpha.gotoAndStop(this.current_face);
                } else {
                    this.f2.visible = true;
                }
            }
        }
        this.frame_7 = function() {
            /* gotoAndPlay("stay");
             */

            this.gotoAndPlay("stay");
        }
        this.frame_10 = function() {
            /* current_face = next_face;
            
            gotoAndStop("f1/:" add current_face);
            gotoAndStop("f2/:" add next_face);
            f1._visible = false;
            f2._visible = true;
            
            face_blink = eval("face" add current_face add "_blink");
            
            //まばたきしないなら止まる
            if (face_blink > 0) {
            	play();
            } else {
            	stop();
            }
            
            */

            this.current_face = exportRoot.next_face;

            this.f1.gotoAndStop(this.current_face);
            this.f2.gotoAndStop(exportRoot.next_face);
            this.f1.visible = false;
            this.f2.visible = true;

            this.face_blink = this.face_blink_ary[this.current_face];

            //まばたきしないなら止まる
            if (this.face_blink > 0) {
                this.play();
            } else {
                this.stop();
            }
        }
        this.frame_11 = function() {
            /* //まばたき待ちループ
            if (cnt > 0) {
            	cnt--;
            } else {
            	call("setBlink");
            	gotoAndPlay("blink" add face_blink);
            }
            */

            //まばたき待ちループ
            if (this.cnt > 0) {
                this.cnt--;
            } else {
                this.cnt = this.setBlink();
                this.gotoAndPlay("blink" + this.face_blink);
            }
        }
        this.frame_12 = function() {
            /* gotoAndPlay(_currentframe - 1);
             */
            this.gotoAndPlay("s2");
        }
        this.frame_15 = function() {
            /* //まばたき
            f1._visible = false;
            f2._visible = true;
            */

            //まばたき
            this.f1.visible = false;
            this.f2.visible = true;
        }
        this.frame_19 = function() {
            /* gotoAndPlay("stay");
             */
            this.gotoAndPlay("stay");
        }
        this.frame_21 = function() {
            /* //まばたき
            f1._visible = false;
            f2._visible = true;
            */

            //まばたき
            this.f1.visible = false;
            this.f2.visible = true;
        }
        this.frame_25 = function() {
            /* gotoAndPlay("stay");
             */
            this.gotoAndPlay("stay");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(2).call(this.frame_7).wait(3).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(3).call(this.frame_15).wait(4).call(this.frame_19).wait(2).call(this.frame_21).wait(4).call(this.frame_25).wait(2));

        // mask_idn (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_15 = new cjs.Graphics().p("AlTClIAAlJIFFAAIFiCzIAACWg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(15).to({
            graphics: mask_graphics_15,
            x: -0.5,
            y: -210
        }).wait(6).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(6));

        // character1_face_close_container
        this.instance = new lib.character1_face_close_container("synched", 0, false);
        this.instance.parent = this;
        this.instance.setTransform(-35.5, -227.5);
        this.instance._off = true;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({
            _off: false
        }, 0).to({
            _off: true
        }, 6).wait(6));

        // f2
        this.f2 = new lib.character1_face();
        this.f2.name = "f2";
        this.f2.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({
            alpha: 0.1992
        }, 0).wait(1).to({
            regX: -0.5,
            regY: -119,
            x: -0.5,
            y: -119,
            alpha: 0.7998
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: 1
        }, 0).wait(20));

        // f1
        this.f1 = new lib.character1_face();
        this.f1.name = "f1";
        this.f1.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.f1).wait(7).to({
            alpha: 0
        }, 0).wait(20));

        // f1_alpha
        this.f1_alpha = new lib.character1_face();
        this.f1_alpha.name = "f1_alpha";
        this.f1_alpha.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({
            alpha: 0.8008
        }, 0).wait(1).to({
            regX: -0.5,
            regY: -119,
            x: -0.5,
            y: -119,
            alpha: 0.6006
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: 0
        }, 0).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-82, -290, 240, 327.1);


    (lib.character1_body = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // face
        this.f = new lib.character1_face_container();
        this.f.name = "f";
        this.f.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.f).wait(2));

        // base
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.b).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-70, -290, 140, 300);


    (lib.rize_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.powder_rise_inner2();
        this.instance.parent = this;
        this.instance.setTransform(-81.65, 13.3, 0.5, 0.5);

        this.instance_1 = new lib.powder_rise_inner2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-72.8, 14.45, 0.5, 0.5);

        this.instance_2 = new lib.powder_rise_inner2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(66.25, 29.2, 0.5, 0.5);

        this.instance_3 = new lib.powder_rise_inner2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(59.6, 31.7, 0.5, 0.5);

        this.instance_4 = new lib.powder_rise_inner2();
        this.instance_4.parent = this;
        this.instance_4.setTransform(74.35, 29, 0.5, 0.5);

        this.instance_5 = new lib.powder_rise_inner2();
        this.instance_5.parent = this;
        this.instance_5.setTransform(63.9, 25.35, 0.5, 0.5);

        this.instance_6 = new lib.powder_rise_inner2();
        this.instance_6.parent = this;
        this.instance_6.setTransform(89.1, 32.4, 0.5, 0.5);

        this.instance_7 = new lib.powder_rise_inner2();
        this.instance_7.parent = this;
        this.instance_7.setTransform(106.85, 29.55, 0.5, 0.5);

        this.instance_8 = new lib.powder_rise_inner2();
        this.instance_8.parent = this;
        this.instance_8.setTransform(82.45, 34.9, 0.5, 0.5);

        this.instance_9 = new lib.powder_rise_inner2();
        this.instance_9.parent = this;
        this.instance_9.setTransform(97.2, 32.2, 0.5, 0.5);

        this.instance_10 = new lib.powder_rise_inner2();
        this.instance_10.parent = this;
        this.instance_10.setTransform(86.75, 28.55, 0.5, 0.5);

        this.instance_11 = new lib.powder_rise_inner2();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-112.35, 1.4, 0.5, 0.5);

        this.instance_12 = new lib.powder_rise_inner2();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-96.25, 0.15, 0.5, 0.5);

        this.instance_13 = new lib.powder_rise_inner2();
        this.instance_13.parent = this;
        this.instance_13.setTransform(109.55, 36.6, 0.5, 0.5);

        this.instance_14 = new lib.powder_rise_inner2();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-96.15, -7.25, 0.5, 0.5);

        this.instance_15 = new lib.powder_rise_inner2();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-112.25, 8.6, 0.5, 0.5);

        this.instance_16 = new lib.powder_rise_inner2();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-87.4, 1.3, 0.5, 0.5);

        this.instance_17 = new lib.powder_rise_inner2();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-103.65, 5.35, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
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
            }]
        }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.rize_2, new cjs.Rectangle(-117.1, -21.6, 231.5, 55.1), null);


    (lib.character1_container = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "stay": 11,
            label_jump: 13,
            enter: 1,
            jump: 13,
            nod: 23,
            nod2: 33,
            shy: 48,
            shock: 58,
            kokubi: 65,
            kokubi2: 78,
            swing1: 87,
            swing3: 109,
            nod_chord: 143
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.play();
        }
        this.frame_12 = function() {
            this.stop();
        }
        this.frame_13 = function() {
            this.play();
        }
        this.frame_22 = function() {
            this.stop();
        }
        this.frame_23 = function() {
            this.play();
        }
        this.frame_32 = function() {
            this.stop();
        }
        this.frame_33 = function() {
            this.play();
        }
        this.frame_46 = function() {
            this.stop();
        }
        this.frame_48 = function() {
            this.play();
        }
        this.frame_57 = function() {
            this.stop();
        }
        this.frame_58 = function() {
            this.play();
        }
        this.frame_64 = function() {
            this.stop();
        }
        this.frame_65 = function() {
            this.play();
        }
        this.frame_77 = function() {
            this.stop();
        }
        this.frame_78 = function() {
            this.play();
        }
        this.frame_86 = function() {
            this.stop();
        }
        this.frame_87 = function() {
            this.play();
        }
        this.frame_107 = function() {
            this.stop();
        }
        this.frame_109 = function() {
            this.play();
        }
        this.frame_141 = function() {
            this.stop();
        }
        this.frame_143 = function() {
            this.play();
        }
        this.frame_158 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(11).call(this.frame_12).wait(1).call(this.frame_13).wait(9).call(this.frame_22).wait(1).call(this.frame_23).wait(9).call(this.frame_32).wait(1).call(this.frame_33).wait(13).call(this.frame_46).wait(2).call(this.frame_48).wait(9).call(this.frame_57).wait(1).call(this.frame_58).wait(6).call(this.frame_64).wait(1).call(this.frame_65).wait(12).call(this.frame_77).wait(1).call(this.frame_78).wait(8).call(this.frame_86).wait(1).call(this.frame_87).wait(20).call(this.frame_107).wait(2).call(this.frame_109).wait(32).call(this.frame_141).wait(2).call(this.frame_143).wait(15).call(this.frame_158).wait(1));

        // drop1
        this.instance = new lib.drop1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-41.95, -255.1);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({
            _off: false
        }, 0).wait(1).to({
            regX: 1.2,
            regY: 1.8,
            rotation: -33.7495,
            x: -63.95,
            y: -262.8,
            alpha: 0.4141
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -44.9994,
            x: -73.95,
            y: -266.5,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(1).to({
            _off: false,
            rotation: 0,
            x: -41.95,
            y: -255.1,
            alpha: 1
        }, 0).wait(1).to({
            regX: 1.2,
            regY: 1.8,
            rotation: -33.7495,
            x: -63.95,
            y: -262.8,
            alpha: 0.4141
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -44.9994,
            x: -73.95,
            y: -266.5,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(103));

        // drop2
        this.instance_1 = new lib.drop2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-43.5, -246.7, 0.8481, 0.8481, 14.9996);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({
            _off: false
        }, 0).wait(1).to({
            scaleX: 0.962,
            scaleY: 0.962,
            rotation: -18.7495,
            x: -70.5,
            y: -242.7625,
            alpha: 0.4141
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -29.9992,
            x: -79.5,
            y: -241.45,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(1).to({
            _off: false,
            scaleX: 0.8481,
            scaleY: 0.8481,
            rotation: 14.9996,
            x: -43.5,
            y: -246.7,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 0.962,
            scaleY: 0.962,
            rotation: -18.7495,
            x: -70.5,
            y: -246.5125,
            alpha: 0.4141
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -29.9992,
            x: -79.5,
            y: -246.45,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(103));

        // shock
        this.instance_2 = new lib.shock("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-46.75, -261.95, 0.9932, 0.9932, -110.5226);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(96));

        // chord
        this.instance_3 = new lib.chord("synched", 0, false);
        this.instance_3.parent = this;
        this.instance_3.setTransform(40.45, -170.3, 1.0034, 1.0034, -7.9999, 0, 0, -23.5, 77);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143).to({
            _off: false
        }, 0).wait(16));

        // c
        this.c = new lib.character1_body();
        this.c.name = "c";
        this.c.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.c).wait(1).to({
            y: 11
        }, 0).wait(1).to({
            regY: -140,
            y: -139.5
        }, 0).wait(1).to({
            y: -147
        }, 0).wait(1).to({
            y: -151.5
        }, 0).wait(1).to({
            regY: 0,
            y: -13
        }, 0).wait(1).to({
            regY: -140,
            y: -151.3
        }, 0).wait(1).to({
            y: -145
        }, 0).wait(1).to({
            y: -138.7
        }, 0).wait(1).to({
            regY: 0,
            y: 3
        }, 0).to({
            y: 0
        }, 2).wait(3).to({
            regY: -140,
            y: -148.35
        }, 0).wait(1).to({
            y: -151.15
        }, 0).wait(1).to({
            regY: 0,
            y: -12
        }, 0).wait(1).to({
            regY: -140,
            y: -148.9
        }, 0).wait(1).to({
            y: -140.05
        }, 0).wait(1).to({
            regY: 0,
            y: 3
        }, 0).wait(1).to({
            regY: -140,
            y: -138
        }, 0).wait(1).to({
            regY: 0,
            y: 1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(2).to({
            regY: -140,
            y: -139.5
        }, 0).wait(1).to({
            y: -137.5
        }, 0).wait(1).to({
            y: -135.55
        }, 0).wait(1).to({
            regY: 0,
            y: 5
        }, 0).wait(1).to({
            regY: -140,
            y: -135.65
        }, 0).wait(1).to({
            y: -138
        }, 0).wait(1).to({
            y: -140.35
        }, 0).wait(1).to({
            regY: 0,
            y: -1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(2).to({
            regY: -140,
            y: -139.7
        }, 0).wait(1).to({
            y: -138.4
        }, 0).wait(1).to({
            y: -136
        }, 0).wait(1).to({
            y: -133.65
        }, 0).wait(1).to({
            y: -132.35
        }, 0).wait(1).to({
            regY: 0,
            y: 8
        }, 0).wait(1).to({
            regY: -140,
            y: -132.4
        }, 0).wait(1).to({
            y: -133.85
        }, 0).wait(1).to({
            y: -136.5
        }, 0).wait(1).to({
            y: -139.2
        }, 0).wait(1).to({
            y: -140.6
        }, 0).wait(1).to({
            regY: 0,
            y: -1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(3).to({
            regY: -140,
            y: -139.5
        }, 0).wait(1).to({
            y: -137.5
        }, 0).wait(1).to({
            y: -135.55
        }, 0).wait(1).to({
            regY: 0,
            y: 5
        }, 0).wait(1).to({
            regY: -140,
            y: -135.65
        }, 0).wait(1).to({
            y: -138
        }, 0).wait(1).to({
            y: -140.35
        }, 0).wait(1).to({
            regY: 0,
            y: -1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(1).to({
            y: 3
        }, 0).wait(1).to({
            regY: -140,
            y: -140.6
        }, 0).wait(1).to({
            regY: 0,
            y: -2
        }, 0).wait(1).to({
            regY: -140,
            y: -140
        }, 0).wait(1).to({
            regY: 0,
            y: 2
        }, 0).wait(1).to({
            regY: -140,
            y: -139.6
        }, 0).wait(1).to({
            regY: 0,
            y: 0
        }, 0).wait(2).to({
            regY: -140,
            rotation: 0.0672,
            x: 0.15,
            y: -140
        }, 0).wait(1).to({
            rotation: 0.2998,
            x: 0.75
        }, 0).wait(1).to({
            rotation: 0.7254,
            x: 1.75
        }, 0).wait(1).to({
            rotation: 1.257,
            x: 3.05,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.6913,
            x: 4.15
        }, 0).wait(1).to({
            rotation: 1.9307,
            x: 4.7,
            y: -139.9
        }, 0).wait(1).to({
            regY: 0,
            rotation: 1.9999,
            x: 0,
            y: 0
        }, 0).wait(7).to({
            regY: -140,
            rotation: 1.9325,
            x: 4.7,
            y: -139.9
        }, 0).wait(1).to({
            rotation: 1.6979,
            x: 4.15,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.2673,
            x: 3.1
        }, 0).wait(1).to({
            rotation: 0.7325,
            x: 1.8,
            y: -140
        }, 0).wait(1).to({
            rotation: 0.302,
            x: 0.75
        }, 0).wait(1).to({
            rotation: 0.0674,
            x: 0.15
        }, 0).wait(1).to({
            regY: 0,
            rotation: 0,
            x: 0,
            y: 0
        }, 0).wait(3).to({
            regY: -140,
            rotation: 0.0672,
            x: 0.15,
            y: -140
        }, 0).wait(1).to({
            rotation: 0.2998,
            x: 0.75
        }, 0).wait(1).to({
            rotation: 0.7254,
            x: 1.75
        }, 0).wait(1).to({
            rotation: 1.257,
            x: 3.05,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.6913,
            x: 4.15
        }, 0).wait(1).to({
            rotation: 1.9307,
            x: 4.7,
            y: -139.9
        }, 0).wait(1).to({
            regY: 0,
            rotation: 1.9999,
            x: 0,
            y: 0
        }, 0).wait(6).to({
            regY: -140,
            rotation: 1.9325,
            x: 4.7,
            y: -139.9
        }, 0).wait(1).to({
            rotation: 1.6979,
            x: 4.15,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 1.2673,
            x: 3.1
        }, 0).wait(1).to({
            rotation: 0.7325,
            x: 1.8,
            y: -140
        }, 0).wait(1).to({
            rotation: 0.302,
            x: 0.75
        }, 0).wait(1).to({
            rotation: 0.0674,
            x: 0.15
        }, 0).wait(1).to({
            regY: 0,
            rotation: 0,
            x: 0,
            y: 0
        }, 0).wait(4).to({
            regY: -140,
            rotation: 0.0522,
            x: 0.15,
            y: -140
        }, 0).wait(1).to({
            rotation: 0.2246,
            x: 0.55
        }, 0).wait(1).to({
            rotation: 0.5416,
            x: 1.3
        }, 0).wait(1).to({
            rotation: 1.0193,
            x: 2.5
        }, 0).wait(1).to({
            rotation: 1.64,
            x: 4,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 2.3245,
            x: 5.7,
            y: -139.9
        }, 0).wait(1).to({
            rotation: 2.9543,
            x: 7.2,
            y: -139.8
        }, 0).wait(1).to({
            rotation: 3.4437,
            x: 8.4,
            y: -139.75
        }, 0).wait(1).to({
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: 3.7699,
            x: 9.2,
            y: -139.7
        }, 0).wait(1).to({
            rotation: 3.9475,
            x: 9.65,
            y: -139.65
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 4.0012,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regY: -140,
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: 3.9248,
            x: 9.6,
            y: -139.7
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 3.6737,
            x: 8.95
        }, 0).wait(1).to({
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: 3.2132,
            x: 7.85,
            y: -139.8
        }, 0).wait(1).to({
            rotation: 2.5153,
            x: 6.15,
            y: -139.85
        }, 0).wait(1).to({
            rotation: 1.5851,
            x: 3.85,
            y: -139.95
        }, 0).wait(1).to({
            rotation: 0.5006,
            x: 1.2,
            y: -140
        }, 0).wait(1).to({
            rotation: -0.5839,
            x: -1.4
        }, 0).wait(1).to({
            rotation: -1.5141,
            x: -3.7,
            y: -139.95
        }, 0).wait(1).to({
            rotation: -2.212,
            x: -5.4,
            y: -139.9
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -2.6725,
            x: -6.55,
            y: -139.85
        }, 0).wait(1).to({
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: -2.9236,
            x: -7.15,
            y: -139.8
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: -3,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regY: -140,
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: -2.9404,
            x: -7.2,
            y: -139.8
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -2.739,
            x: -6.7,
            y: -139.85
        }, 0).wait(1).to({
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: -2.3633,
            x: -5.75,
            y: -139.9
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -1.8144,
            x: -4.45,
            y: -139.95
        }, 0).wait(1).to({
            rotation: -1.1856,
            x: -2.9
        }, 0).wait(1).to({
            rotation: -0.6367,
            x: -1.55,
            y: -140
        }, 0).wait(1).to({
            rotation: -0.261,
            x: -0.65
        }, 0).wait(1).to({
            rotation: -0.0596,
            x: -0.15
        }, 0).wait(1).to({
            regY: 0,
            rotation: 0,
            x: 0,
            y: 0
        }, 0).wait(2).to({
            y: 0.55
        }, 1).wait(1).to({
            regY: -140,
            y: -137.5
        }, 0).wait(1).to({
            y: -135.55
        }, 0).wait(1).to({
            regY: 0,
            y: 5
        }, 0).wait(1).to({
            regY: -140,
            y: -135.65
        }, 0).wait(1).to({
            y: -138
        }, 0).wait(1).to({
            y: -140.35
        }, 0).wait(1).to({
            regY: 0,
            y: -1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(7));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-87.5, -311, 218.7, 332);


    // stage content:
    (lib.whiteday_2020_opening = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            label_last: 108,
            label_logo: 128,
            scene1: 0,
            scene2: 34,
            scene3: 58,
            scene4: 99,
            scene5: 108
        });

        // timeline functions:
        this.frame_0 = function() {
            c_jump = function() {
                window.location.href = exportRoot._url;
            }
            //---------------------
            //　置換パラメータ
            //---------------------

            /**
            //リンク
            url = "http://";
            
            /**/
            exportRoot._url = window.im_cjs._url || "";

            //----------------------
            //　初期化
            //----------------------

            key_flag = 1;

            //ちひろ台詞1
            //       "１２３４５６７８９０１２３４5"
            exportRoot.msg1_1 = "お疲れ様です､ﾌﾟﾛﾃﾞｭｰｻｰさん｡"
            exportRoot.msg1_2 = "もうすぐﾎﾜｲﾄﾃﾞｰですね｡ｱｲﾄﾞﾙ"
            exportRoot.msg1_3 = "へのﾌﾟﾚｾﾞﾝﾄは準備しています"
            exportRoot.msg1_4 = "か? きっと喜んでくれますよ!"

            //ちひろ台詞2
            //       "１２３４５６７８９０１２３４5"
            exportRoot.msg2_1 = "えっ!? ﾌﾟﾛﾃﾞｭｰｻｰさんが手作り"
            exportRoot.msg2_2 = "するんですか? わかりました｡"
            exportRoot.msg2_3 = "ｱｲﾄﾞﾙの好みの調査は､私に任せ"
            exportRoot.msg2_4 = "てください♪"

            /*
            //ちひろ台詞3
            //       "１２３４５６７８９０１２３４5"
            msg3_1 = "ぜひｱｲﾄﾞﾙに会いに行ってくだ"
            msg3_2 = "さいね♪きっと素敵な贈り物が"
            msg3_3 = "もらえるはずですよ!"
            msg3_4 = ""
            */
        }
        this.frame_3 = function() {
            var self = this;

            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                self.gotoAndPlay("scene2");
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    self.gotoAndPlay("scene2");
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }
        }
        this.frame_34 = function() {
            this.play();

            m1 = exportRoot.msg1_1;
            m2 = exportRoot.msg1_2;
            m3 = exportRoot.msg1_3;
            m4 = exportRoot.msg1_4;

            this.ch1.c.gotoAndPlay(1);

            //gotoAndStop("ch1/c/:2");
        }
        this.frame_45 = function() {
            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['msg1_' + i];
            }
        }
        this.frame_51 = function() {
            this.ch1.c.gotoAndStop(0);
        }
        this.frame_54 = function() {
            var self = this;

            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                self.gotoAndPlay("scene3");
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    self.gotoAndPlay("scene3");
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }
        }
        this.frame_57 = function() {
            this.stop();

            exportRoot.next_face = 6;
            this.ch1.c.f.gotoAndPlay("run");

            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_58 = function() {
            exportRoot.next_face = 3;

            this.ch1.c.f.gotoAndPlay("run");

            this.ch1.gotoAndPlay("jump");
        }
        this.frame_59 = function() {
            this.m1.text = exportRoot.msg2_1;
            this.m2.text = "するんですか? ";
            this.m3.text = "";
            this.m4.text = "";
        }
        this.frame_82 = function() {
            exportRoot.next_face = 2;
            this.ch1.c.f.gotoAndPlay("run");


            this.ch1.gotoAndPlay("nod_chord");

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['msg2_' + i];
            }
        }
        this.frame_96 = function() {
            var self = this;

            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                self.gotoAndPlay("scene5");
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    self.gotoAndPlay("scene5");
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }
        }
        this.frame_98 = function() {
            this.stop();
        }
        this.frame_99 = function() {
            this.ch.c.gotoAndPlay("n_to_s");
            this.ch.gotoAndPlay("jump");

            m1 = exportRoot.msg3_1;
            m2 = exportRoot.msg3_2;
            m3 = exportRoot.msg3_3;
            m4 = exportRoot.msg3_4;
        }
        this.frame_100 = function() {
            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['msg3_' + i];
            }
        }
        this.frame_106 = function() {
            var self = this;

            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                self.gotoAndPlay("scene5");
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    self.gotoAndPlay("scene5");
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }
        }
        this.frame_107 = function() {
            this.stop();
        }
        this.frame_108 = function() {
            window.se_play('se_093');
        }
        this.frame_128 = function() {
            window.se_play('se_062');
        }
        this.frame_144 = function() {
            var self = this;

            this.stop();

            this.btn.addEventListener('click', onClick);

            function onClick() {
                c_jump();
                window.removeEventListener("keydown", handleKeyDown);
                self.btn.removeEventListener('click', onClick);
            }

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    c_jump();
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(31).call(this.frame_34).wait(11).call(this.frame_45).wait(6).call(this.frame_51).wait(3).call(this.frame_54).wait(3).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(23).call(this.frame_82).wait(14).call(this.frame_96).wait(2).call(this.frame_98).wait(1).call(this.frame_99).wait(1).call(this.frame_100).wait(6).call(this.frame_106).wait(1).call(this.frame_107).wait(1).call(this.frame_108).wait(20).call(this.frame_128).wait(16).call(this.frame_144).wait(4));

        // shield
        this.instance = new lib.shield();
        this.instance.parent = this;
        this.instance.setTransform(120, 160);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(148));

        // btn
        this.btn = new lib.btn();
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(120, 154.55, 1, 1, 0, 0, 0, 127, 163.5);
        this.btn.alpha = 0.0117;

        this.timeline.addTween(cjs.Tween.get(this.btn).wait(148));

        // sender
        this.sender = new lib.sender();
        this.sender.name = "sender";
        this.sender.parent = this;
        this.sender.setTransform(-100, -26.1, 1, 1.1);
        this.sender._off = true;

        this.timeline.addTween(cjs.Tween.get(this.sender).wait(96).to({
            _off: false
        }, 0).to({
            _off: true
        }, 3).wait(7).to({
            _off: false
        }, 0).to({
            _off: true
        }, 2).wait(35).to({
            _off: false
        }, 0).wait(5));

        // text
        this.m4 = new cjs.Text("", "12px 'Arial'");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 236;
        this.m4.parent = this;
        this.m4.setTransform(2.5, 499.5);

        this.m3 = new cjs.Text("", "12px 'Arial'");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 236;
        this.m3.parent = this;
        this.m3.setTransform(2.5, 481.5);

        this.m2 = new cjs.Text("", "12px 'Arial'");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 236;
        this.m2.parent = this;
        this.m2.setTransform(2.5, 463.5);

        this.m1 = new cjs.Text("", "12px 'Arial'");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 236;
        this.m1.parent = this;
        this.m1.setTransform(2.5, 446.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.m1,
                p: {
                    x: 2.5,
                    y: 446.5
                }
            }, {
                t: this.m2,
                p: {
                    x: 2.5,
                    y: 463.5
                }
            }, {
                t: this.m3,
                p: {
                    x: 2.5,
                    y: 481.5
                }
            }, {
                t: this.m4,
                p: {
                    x: 2.5,
                    y: 499.5
                }
            }]
        }).to({
            state: [{
                t: this.m1,
                p: {
                    x: 13,
                    y: 232.3
                }
            }, {
                t: this.m2,
                p: {
                    x: 13,
                    y: 249.3
                }
            }, {
                t: this.m3,
                p: {
                    x: 13,
                    y: 267.3
                }
            }, {
                t: this.m4,
                p: {
                    x: 13,
                    y: 285.3
                }
            }]
        }, 45).to({
            state: [{
                t: this.m1,
                p: {
                    x: 2.5,
                    y: 446.5
                }
            }, {
                t: this.m2,
                p: {
                    x: 2.5,
                    y: 463.5
                }
            }, {
                t: this.m3,
                p: {
                    x: 2.5,
                    y: 481.5
                }
            }, {
                t: this.m4,
                p: {
                    x: 2.5,
                    y: 499.5
                }
            }]
        }, 13).to({
            state: [{
                t: this.m1,
                p: {
                    x: 13,
                    y: 232.3
                }
            }, {
                t: this.m2,
                p: {
                    x: 13,
                    y: 249.3
                }
            }, {
                t: this.m3,
                p: {
                    x: 13,
                    y: 267.3
                }
            }, {
                t: this.m4,
                p: {
                    x: 13,
                    y: 285.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    x: 2.5,
                    y: 446.5
                }
            }, {
                t: this.m2,
                p: {
                    x: 2.5,
                    y: 463.5
                }
            }, {
                t: this.m3,
                p: {
                    x: 2.5,
                    y: 481.5
                }
            }, {
                t: this.m4,
                p: {
                    x: 2.5,
                    y: 499.5
                }
            }]
        }, 40).to({
            state: [{
                t: this.m1,
                p: {
                    x: 13,
                    y: 232.3
                }
            }, {
                t: this.m2,
                p: {
                    x: 13,
                    y: 249.3
                }
            }, {
                t: this.m3,
                p: {
                    x: 13,
                    y: 267.3
                }
            }, {
                t: this.m4,
                p: {
                    x: 13,
                    y: 285.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    x: 2.5,
                    y: 446.5
                }
            }, {
                t: this.m2,
                p: {
                    x: 2.5,
                    y: 463.5
                }
            }, {
                t: this.m3,
                p: {
                    x: 2.5,
                    y: 481.5
                }
            }, {
                t: this.m4,
                p: {
                    x: 2.5,
                    y: 499.5
                }
            }]
        }, 8).wait(40));

        // text_base
        this.mw = new lib.message_window();
        this.mw.name = "mw";
        this.mw.parent = this;
        this.mw.setTransform(120, 266, 1, 0.1313);
        this.mw._off = true;

        this.timeline.addTween(cjs.Tween.get(this.mw).wait(43).to({
            _off: false
        }, 0).wait(1).to({
            scaleY: 0.8635
        }, 0).wait(1).to({
            scaleY: 1.1075
        }, 0).to({
            scaleY: 1
        }, 3, cjs.Ease.get(1)).wait(10).to({
            scaleY: 1.1075
        }, 0).to({
            scaleY: 1
        }, 3, cjs.Ease.get(1)).wait(38).to({
            scaleY: 1.1075
        }, 0).to({
            scaleY: 1
        }, 3, cjs.Ease.get(1)).wait(6).to({
            scaleY: 1.075
        }, 0).wait(1).to({
            scaleY: 0.8635
        }, 0).wait(1).to({
            scaleY: 0.1313
        }, 0).to({
            _off: true
        }, 1).wait(37));

        // scene1_
        this.instance_1 = new lib.___place();
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 153.6);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({
            _off: false
        }, 0).to({
            alpha: 1
        }, 4).wait(18).to({
            alpha: 0
        }, 4).to({
            _off: true
        }, 1).wait(115));

        // wt_mc
        this.instance_2 = new lib.wt_mc();
        this.instance_2.parent = this;
        this.instance_2.setTransform(120.5, 160.05, 1, 1, 0, 0, 0, 135.5, 169);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(108).to({
            _off: false
        }, 0).to({
            alpha: 1
        }, 9, cjs.Ease.get(-1)).wait(1).to({
            alpha: 0
        }, 6, cjs.Ease.get(1)).to({
            _off: true
        }, 1).wait(23));

        // chihiro
        this.ch1 = new lib.character1_container();
        this.ch1.name = "ch1";
        this.ch1.parent = this;
        this.ch1.setTransform(113, 322);
        this.ch1.alpha = 0;
        this.ch1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.ch1).wait(34).to({
            _off: false
        }, 0).wait(1).to({
            regX: -3,
            regY: -142.1,
            x: 110.15,
            y: 179.9,
            alpha: 0.01
        }, 0).wait(1).to({
            x: 110.65,
            alpha: 0.0433
        }, 0).wait(1).to({
            x: 111.65,
            y: 180,
            alpha: 0.1059
        }, 0).wait(1).to({
            x: 113.25,
            y: 180.1,
            alpha: 0.2037
        }, 0).wait(1).to({
            x: 115.4,
            y: 180.2,
            alpha: 0.3386
        }, 0).wait(1).to({
            x: 118,
            y: 180.4,
            alpha: 0.5
        }, 0).wait(1).to({
            x: 120.55,
            y: 180.55,
            alpha: 0.6614
        }, 0).wait(1).to({
            x: 122.7,
            y: 180.65,
            alpha: 0.7963
        }, 0).wait(1).to({
            x: 124.3,
            y: 180.75,
            alpha: 0.8941
        }, 0).wait(1).to({
            x: 125.3,
            y: 180.85,
            alpha: 0.9567
        }, 0).wait(1).to({
            x: 125.8,
            alpha: 0.99
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 129,
            y: 323,
            alpha: 1
        }, 0).wait(1).to({
            regX: -3,
            regY: -142.1,
            x: 125.85,
            y: 180.9
        }, 0).wait(1).to({
            x: 125.35
        }, 0).wait(1).to({
            x: 124.6
        }, 0).wait(1).to({
            x: 124.1
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 127,
            y: 323
        }, 0).wait(66).to({
            _off: true
        }, 1).wait(30));

        // ar
        this.instance_3 = new lib.symbol_5aa();
        this.instance_3.parent = this;
        this.instance_3.setTransform(237, 303, 1.5615, 1.5615);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({
            _off: false
        }, 0).to({
            alpha: 1
        }, 3).wait(27));

        // particle
        this.instance_4 = new lib.particle1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(91.1, 160.75, 0.7805, 0.7805, 0, 0, 0, -39.6, -8.1);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(127).to({
            _off: false
        }, 0).wait(21));

        // glitter
        this.instance_5 = new lib.glitter_title();
        this.instance_5.parent = this;
        this.instance_5.setTransform(119.7, 155, 1, 1, 0, 0, 0, -0.3, 0);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(127).to({
            _off: false
        }, 0).wait(21));

        // white_logo
        this.instance_6 = new lib.white_logo();
        this.instance_6.parent = this;
        this.instance_6.setTransform(121, -49.5, 1, 1, 0, 0, 0, 115.5, 34.6);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({
            _off: false
        }, 0).to({
            scaleX: 1.0229,
            scaleY: 1.0229,
            x: 121.2,
            y: 157.85
        }, 6, cjs.Ease.quadIn).wait(1).to({
            regY: 34.8,
            scaleX: 1.0837,
            scaleY: 0.7884,
            y: 173.05
        }, 0).to({
            regX: 115.8,
            regY: 35,
            scaleX: 0.8023,
            scaleY: 1.1318,
            x: 121.4,
            y: 128.2,
            alpha: 0.0117
        }, 4, cjs.Ease.get(1)).to({
            _off: true
        }, 1).wait(16));

        // logo
        this.instance_7 = new lib.logo();
        this.instance_7.parent = this;
        this.instance_7.setTransform(102.75, -62.3, 0.9805, 0.98, 0, 0, 0, 72, 58.1);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({
            _off: false
        }, 0).to({
            regY: 57.9,
            scaleX: 1.02,
            scaleY: 1.0195,
            x: 102.05,
            y: 144.45
        }, 6, cjs.Ease.quadIn).wait(1).to({
            regY: 58.1,
            scaleX: 1.08,
            scaleY: 0.8346,
            x: 101,
            y: 161.55
        }, 0).to({
            regX: 72.2,
            scaleX: 0.8021,
            scaleY: 1.1,
            x: 106.05,
            y: 113.6
        }, 4, cjs.Ease.get(1)).to({
            regX: 72,
            scaleX: 1.04,
            scaleY: 0.9458,
            x: 101.7,
            y: 157.75
        }, 4, cjs.Ease.get(-1)).to({
            regY: 58,
            scaleX: 1.0005,
            scaleY: 1,
            x: 102.4,
            y: 152.05
        }, 4, cjs.Ease.get(1)).wait(9));

        // rize
        this.instance_8 = new lib.rize_2();
        this.instance_8.parent = this;
        this.instance_8.setTransform(120.25, 327.15, 1.0001, 1.0001, 172.9993, 0, 0, -0.1, 10.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(148));

        // powder_rise
        this.lighter_tgt = new lib.powder_rise_glitter();
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(119.5, 333.5, 1, 1, 179.9991, 0, 0, -0.1, 6.5);
        this.lighter_tgt.alpha = 0;
        this.lighter_tgt._off = true;

        this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(108).to({
            _off: false
        }, 0).wait(20).to({
            alpha: 1
        }, 0).wait(20));

        // white_black
        this.instance_9 = new lib.black_rect();
        this.instance_9.parent = this;
        this.instance_9.setTransform(119.5, 160.05, 1, 1, 0, 0, 0, 134.5, 165);
        this.instance_9._off = true;

        this.instance_10 = new lib.wt_mc();
        this.instance_10.parent = this;
        this.instance_10.setTransform(120.5, 160.05, 1, 1, 0, 0, 0, 135.5, 169);
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({
            _off: false
        }, 0).to({
            alpha: 0.0117
        }, 4).to({
            _off: true
        }, 1).wait(121).to({
            _off: false,
            alpha: 0.6992
        }, 0).to({
            _off: true
        }, 1).wait(20));
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(128).to({
            _off: false
        }, 0).to({
            alpha: 0.0117
        }, 9, cjs.Ease.get(1)).wait(11));

        // bg2
        this.instance_11 = new lib.bg2();
        this.instance_11.parent = this;
        this.instance_11.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(118).to({
            _off: false
        }, 0).wait(30));

        // bg1
        this.instance_12 = new lib.___bg1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(130, 156.25);
        this.instance_12._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({
            _off: false
        }, 0).wait(116).to({
            _off: true
        }, 1).wait(30));

        // black
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(148));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-180, -145, 720, 765);
    // library properties:
    lib.properties = {
        id: 'whiteday_2020_opening',
        width: 240,
        height: 310,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
                src: "images/bg_sp.jpg?1583399825541",
                id: "whiteday_2020_opening_bg_sp"
            },
            {
                src: "images/chihiro_base.png?1583399825541",
                id: "whiteday_2020_opening_chihiro_base"
            },
            {
                src: "images/chihiro_face_close.png?1583399825541",
                id: "whiteday_2020_opening_chihiro_face_close"
            },
            {
                src: "images/chihiro_face_laugh.png?1583399825541",
                id: "whiteday_2020_opening_chihiro_face_laugh"
            },
            {
                src: "images/chihiro_face_sad.png?1583399825541",
                id: "whiteday_2020_opening_chihiro_face_sad"
            },
            {
                src: "images/chihiro_face_sad2.png?1583399825541",
                id: "whiteday_2020_opening_chihiro_face_sad2"
            },
            {
                src: "images/chihiro_face_smile.png?1583399825541",
                id: "whiteday_2020_opening_chihiro_face_smile"
            },
            {
                src: "images/chihiro_face_strong.png?1583399825541",
                id: "whiteday_2020_opening_chihiro_face_strong"
            },
            {
                src: "images/chihiro_face_surprise1.png?1583399825541",
                id: "whiteday_2020_opening_chihiro_face_surprise1"
            },
            {
                src: "images/logo_2020_flash.png?1583399825541",
                id: "whiteday_2020_opening_logo_2020_flash"
            },
            {
                src: "images/logo_2020_wd.png?1583399825541",
                id: "whiteday_2020_opening_logo_2020_wd"
            },
            {
                src: "images/shabon.png?1583399825541",
                id: "whiteday_2020_opening_shabon"
            },
            {
                src: "images/sp_glitter_title.png?1583399825541",
                id: "whiteday_2020_opening_sp_glitter_title"
            },
            {
                src: "images/tie_sp.png?1583399825541",
                id: "whiteday_2020_opening_tie_sp"
            }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['whiteday_2020_opening'] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
