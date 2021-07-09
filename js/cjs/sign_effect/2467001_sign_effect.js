(function(c, f) {
    function B() {
        var b = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        b.gotoAndStop(this.currentFrame);
        b.paused = this.paused;
        b.framerate = this.framerate;
        return b
    }

    function k(b, d, e) {
        b = c.extend(b, c.MovieClip);
        b.clone = B;
        b.nominalBounds = d;
        b.frameBounds = e;
        return b
    }
    var g, a = {},
        C = {},
        D = {};
    a.ssMetadata = [];
    (a.reflect_inner = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new c.Shape;
        this.shape.graphics.lf(["rgba(255,255,255,0)", "rgba(255,255,255,0.749)", "rgba(255,255,255,0)"],
            [0, .51, 1], -.1, 297.1, 0, -297).s().p("EgfVAu4MAAAhdvMA+rAAAMAAABdvg");
        this.shape.setTransform(150.075, 300);
        this.timeline.addTween(c.Tween.get(this.shape).wait(1))
    }).prototype = k(a.reflect_inner, new c.Rectangle(-50.5, 0, 401.2, 600), null);
    (a.reflect_mask = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new c.Shape;
        this.shape.graphics.f("#231916").s().p("A1KJ/QhxgLhwgxQhngugUhjQgThiBMhUQA+hGBOglQBEghBPgHQAhgDANgIIAEgEQAJgMgFgmIgHg1IgCgMQgEgNgIgIQgLgMgXgCQg7gHgcgaQgcgbgIg7QgHgugDhJIgEhFIgDgyQgCgWgHgqQgHgsgCgVQgKhmBVgFQARgBAUADQAVADAzAAQAvABAZAFIAOADQBBAQA/AiQAWALAQgBQAPgBASgOQBRhEAlAJQAlAIAuBgIALAXQAGANADAKQAIAdAUAPQASANAfACQAmACAaAIQApANAQAeQAQAegPAnQgKAbAJARQAHAOAZANQAQAHArAZQAlAVAXAJQANAFASgCQARgCAPgHQAVgKA2gfQAvgaAcgMQBCgaAqAMQAYAHAaAWQASAQATAYQAFAGAPAMIBDhGQAmgoAVgeQAdgoAZhRQAZhSA6ADQAgACAWAZQASATAFAZIACASQAAALgDASIgDAUQgHAhAAAQQAAATAEAQQAFAUAKAIQASAQAWAJQAYALAPgFIAFgCQAOgHAOgTQAQgXABgTQADgtADgOQAHgeAUgWQAFgFgCgRQgCgOgFgNIgCgEQgRgtAQggQASgiAxgDQBfgGBzANQBEAHATBIIADAOQAJA2AYAxQAIARAoAVQAHAEAXAEQATAEAGAHQAVAYAKAPQAPAYgBARQAAARgTAUQgSATgUAJQgwAVgGAKQgHALAHA1QADAXgDAfIgHA2QgEAgAJAJQAJAJAfgJQASgFBRgcIJFjJQBDgXAXAxQAOAcgKAaQgJAZgbAPQhZAxgtAXQhOAog8AWQkiBrmUCEQhKAYh2AgIjBA1QgiAKhZAeQhOAbguAMQgoAKhRAQQhSAOgoALIhVAWQhkAYhjASQkjA0khAAQieAAidgQgA2SExIgtAfIgEACIgSALQgcAUgBAUQgBAVAdARQAxAdAqAIIAUACIBcAGICqAKQCXAHBugHQDUgODxgwIB6gaIB+geQC6gwD5hKQARgGApgZIhFgtIgngaQgqgcghAmIgPARIgCACIgNAOQgRATgPANQgcAYggAAQgfAAgagXQgZgXgBgfQgBgfAYgfIAhglQAVgXAJgQQAKgSADgUQADgYgHgOQgLgYgZgfIgpgzIhABhQgkA2gXAlQgEAIAGARQAGAPAJALQAcAgAGAXQAJAfgUAeQgSAbghAEQgiAEglgWQgfgTgVAEQgQAEgQAQQgGAGgGAIQgcAkgkABQgaABgXgUQgIgHgHgIQgXgcgRABQgRACgRAdQgJAOgMAPIgLANQgRARgQAJQgbANgggKQgJgDgHgEQgVgLgOgWQgVgeAGgkQAHgxAjg3IACgCQAQgbAAgTQAAgWgZgVQgagTgIgdQgIgYADgmQADgagHgoQgJgsgDgXIgRgEIg2A1QghAggVAXQgjAnACAWQACAaA1AXQBMAfATBAQAGAUAAAVQgBAtgfAwQg8BdhTBTIgBABQgvAtg0APQguAOgugLQgMgDgNgFQglgOgrgZQgZgPgzghQgKgHgeghQgYgZgPAAIgBAAQgTAAgcATgAvsByIgrAoIAoAnIABgBIAXgWQAOgNAFgMQADgGgGgOQgIgRgDgIgAFUgtQgHAAgKAEIgRAGIAEATQADALAFAEQApAbAlANQA7AUgChBQAAgYgJgKQgKgLgaAGQgMACgVgBIgfgBIgEAAg");
        this.shape.setTransform(.0092, .005);
        this.timeline.addTween(c.Tween.get(this.shape).wait(1))
    }).prototype = k(a.reflect_mask, new c.Rectangle(-170.6, -65.5, 341.29999999999995, 131), null);
    (a.glitter_inner_sphere = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new c.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0.302)", "rgba(255,255,255,0)"], [0, .522, 1], 0, 0, 0, 0, 0, 51.4).s().p("AlhFhQiSiSAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");
        this.timeline.addTween(c.Tween.get(this.shape).wait(1))
    }).prototype =
        k(a.glitter_inner_sphere, new c.Rectangle(-50, -50, 100, 100), null);
    (a.reflect = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.lighter_tgt = new a.reflect_inner;
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(0, -261.4, 1.0511, 1.0511, 0, 0, -20.001);
        this.lighter_tgt.compositeOperation = "lighter";
        this.timeline.addTween(c.Tween.get(this.lighter_tgt).wait(1))
    }).prototype = k(a.reflect, new c.Rectangle(-49.9, -387.5, 396.29999999999995, 774.9), null);
    (a.reflect_container_cjs =
        function(b, d, e) {
            this.initialize(b, d, e, {
                flash: 20
            });
            this.frame_0 = function() {
                this.preview.visible = !1
            };
            this.frame_20 = function() {
                this.play()
            };
            this.timeline.addTween(c.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(23));
            this.preview = new a.reflect;
            this.preview.name = "preview";
            this.preview.parent = this;
            this.preview.setTransform(-.5, -.1, 1, 1, 0, 0, 0, -.5, -.1);
            this.preview.compositeOperation = "lighter";
            this.timeline.addTween(c.Tween.get(this.preview).wait(43));
            this.instance = new a.reflect;
            this.instance.parent =
                this;
            this.instance.setTransform(-.5, 529.1, 1, 1, 0, 0, 0, -.5, .1);
            this.instance.compositeOperation = "lighter";
            this.instance._off = !0;
            this.timeline.addTween(c.Tween.get(this.instance).wait(20).to({
                _off: !1
            }, 0).to({
                regY: -.1,
                y: -.1
            }, 11, c.Ease.get(-1)).to({
                regY: .1,
                y: -529.9
            }, 11, c.Ease.get(1)).wait(1))
        }).prototype = g = new c.MovieClip;
    g.nominalBounds = new c.Rectangle(-50, -917.5, 396.4, 1833.9);
    (a.glitter_inner = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.instance = new a.glitter_inner_sphere;
        this.instance.parent = this;
        this.instance.setTransform(0, .05, 1.5, .0862, -45);
        this.instance_1 = new a.glitter_inner_sphere;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .3342, .3342);
        this.instance_2 = new a.glitter_inner_sphere;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, -.05, 1.5, .0862, 45);
        this.instance_3 = new a.glitter_inner_sphere;
        this.instance_3.parent = this;
        this.timeline.addTween(c.Tween.get({}).to({
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
    }).prototype =
        k(a.glitter_inner, new c.Rectangle(-56.1, -56.1, 112.2, 112.30000000000001), null);
    (a.glitter = function(b, d, e) {
        null == e && (e = !1);
        this.initialize(b, d, e, {});
        this.lighter_tgt = new a.glitter_inner;
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.compositeOperation = "lighter";
        this.timeline.addTween(c.Tween.get(this.lighter_tgt).wait(1))
    }).prototype = k(a.glitter, new c.Rectangle(-56.1, -56.1, 112.2, 112.30000000000001), null);
    (a.reflect_wrapper = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.reflect = new a.reflect_container_cjs;
        this.reflect.name = "reflect";
        this.reflect.parent = this;
        this.reflect.compositeOperation = "lighter";
        this.timeline.addTween(c.Tween.get(this.reflect).wait(1))
    }).prototype = k(a.reflect_wrapper, new c.Rectangle(-49.9, -387.5, 396.29999999999995, 774.9), null);
    (a.glitter_container_cjs = function(b, d, e) {
        null == e && (e = !1);
        this.initialize(b, d, e, {
            loop: 20
        });
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(20 * Math.random()))
        };
        this.frame_20 = function() {};
        this.frame_50 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(c.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50).wait(1));
        this.lux = new a.glitter;
        this.lux.name = "lux";
        this.lux.parent = this;
        this.instance = new a.glitter;
        this.instance.parent = this;
        this.instance.alpha = 0;
        this.instance._off = !0;
        this.timeline.addTween(c.Tween.get({}).to({
            state: [{
                t: this.lux
            }]
        }).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 19).to({
            state: [{
                t: this.instance
            }]
        }, 9).to({
            state: [{
                t: this.instance
            }]
        }, 9).to({
            state: []
        }, 1).wait(12));
        this.timeline.addTween(c.Tween.get(this.instance).wait(20).to({
            _off: !1
        }, 0).to({
            scaleX: .7333,
            scaleY: .7333,
            alpha: .75
        }, 9, c.Ease.get(.5)).to({
            scaleX: .7,
            scaleY: .7,
            alpha: 0
        }, 9, c.Ease.get(-.5)).to({
            _off: !0
        }, 1).wait(12))
    }).prototype = g = new c.MovieClip;
    g.nominalBounds = new c.Rectangle(-56.1, -56.1, 112.2, 112.30000000000001);
    (a.glitter_wrapper = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.instance = new a.glitter_container_cjs;
        this.instance.parent = this;
        this.timeline.addTween(c.Tween.get(this.instance).wait(1))
    }).prototype =
        k(a.glitter_wrapper, new c.Rectangle(-56.1, -56.1, 112.2, 112.30000000000001), null);
    (a.sign_effect = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.instance = new a.glitter_wrapper;
        this.instance.parent = this;
        this.instance.setTransform(27.25, 461.3, .67, .67);
        this.instance_1 = new a.glitter_wrapper;
        this.instance_1.parent = this;
        this.instance_1.setTransform(622.05, 751.15, .4831, .4831);
        this.instance_2 = new a.glitter_wrapper;
        this.instance_2.parent = this;
        this.instance_2.setTransform(106.8, 22.35, .67, .67);
        this.instance_3 =
            new a.glitter_wrapper;
        this.instance_3.parent = this;
        this.instance_3.setTransform(615.8, 611.55, .67, .67);
        this.instance_4 = new a.glitter_wrapper;
        this.instance_4.parent = this;
        this.instance_4.setTransform(25.8, 274, .4832, .4832);
        this.instance_5 = new a.glitter_wrapper;
        this.instance_5.parent = this;
        this.instance_5.setTransform(607.8, 64.65, .7778, .7778);
        this.instance_6 = new a.glitter_wrapper;
        this.instance_6.parent = this;
        this.instance_6.setTransform(622.7, 463.5, .5336, .5336);
        this.instance_7 = new a.glitter_wrapper;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(595.15, 38.2, .541, .541);
        this.instance_8 = new a.glitter_wrapper;
        this.instance_8.parent = this;
        this.instance_8.setTransform(17.45, 129.15, .67, .67);
        this.instance_9 = new a.glitter_wrapper;
        this.instance_9.parent = this;
        this.instance_9.setTransform(615.05, 332.35, .67, .67);
        this.instance_10 = new a.glitter_wrapper;
        this.instance_10.parent = this;
        this.instance_10.setTransform(538.3, 31.75, .868, .868);
        this.instance_11 = new a.glitter_wrapper;
        this.instance_11.parent = this;
        this.instance_11.setTransform(293.65,
            647.9, .6599, .6599);
        this.instance_12 = new a.glitter_wrapper;
        this.instance_12.parent = this;
        this.instance_12.setTransform(223.85, 667);
        this.instance_13 = new a.glitter_wrapper;
        this.instance_13.parent = this;
        this.instance_13.setTransform(351.35, 613.1);
        this.instance_14 = new a.glitter_wrapper;
        this.instance_14.parent = this;
        this.instance_14.setTransform(228.7, 571.95);
        this.instance_15 = new a.glitter_wrapper;
        this.instance_15.parent = this;
        this.instance_15.setTransform(26.4, 647.75, .7247, .7247);
        this.instance_16 = new a.glitter_wrapper;
        this.instance_16.parent = this;
        this.instance_16.setTransform(100, 695.6, .6923, .6923);
        this.instance_17 = new a.glitter_wrapper;
        this.instance_17.parent = this;
        this.instance_17.setTransform(275.6, 594, .6599, .6599);
        this.instance_18 = new a.glitter_wrapper;
        this.instance_18.parent = this;
        this.instance_18.setTransform(154.85, 648.35);
        this.instance_19 = new a.glitter_wrapper;
        this.instance_19.parent = this;
        this.instance_19.setTransform(72.1, 571.95);
        this.timeline.addTween(c.Tween.get({}).to({
            state: [{
                    t: this.instance_19
                }, {
                    t: this.instance_18
                },
                {
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
        }).wait(1));
        e = new c.Shape;
        e._off = !0;
        e.graphics.p("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");
        e.setTransform(320, 400);
        this.reflect_wrapper = new a.reflect_wrapper;
        this.reflect_wrapper.name = "reflect_wrapper";
        this.reflect_wrapper.parent = this;
        this.reflect_wrapper.setTransform(0, 400, 2.1563, 2.4924);
        b = [this.reflect_wrapper];
        for (d = 0; d < b.length; d++) b[d].mask = e;
        this.timeline.addTween(c.Tween.get(this.reflect_wrapper).wait(1));
        this.reflect_mask = new a.reflect_mask;
        this.reflect_mask.name = "reflect_mask";
        this.reflect_mask.parent = this;
        this.reflect_mask.setTransform(181.5, 628.6);
        this.reflect_mask.alpha = 0;
        this.timeline.addTween(c.Tween.get(this.reflect_mask).wait(1));
        e = new c.Shape;
        e._off = !0;
        e.graphics.p("EgUTA1/QhxgLhxgyQhngugThiQgUhiBMhVQA/hGBNglQBEggBPgHQAigEAMgIIAEgDQAKgMgFgmIgIg3IgCgMQgEgNgHgIQgMgLgWgDQg8gGgbgaQgdgbgIg7QgGgugEhJIgEhFIgDgzQgCgWgHgqQgHgsgCgUQgKhnBVgFQARgBAVADQAVADAzABQAuAAAaAGIANADQBCAPA+AiQAWAMAQgBQAQgBARgPQBShDAlAIQAlAJAuBgIALAWQAGAOADAKQAHAdAUAOQASANAfACQAmACAaAIQApANAQAeQAQAegOAoQgKAbAIAQQAIAPAZAMQAPAIAsAZQAkAVAXAJQANAFATgDQARgCAPgHQAVgKA1geQAvgbAdgLQBCgbAqAMQAYAHAZAXQASAQAUAYQAFAGAOAMIBDhHQAmgoAWgeQAdgnAZhSQAZhRA5ADQAgACAXAYQARATAFAaIACASQABALgDASIgEATQgGAigBAPQAAATAFARQAFATAKAJQASAPAVAKQAZALAOgFIAFgCQAOgHAOgUQAQgWACgUQACgsAEgOQAGgfAVgVQAFgGgCgQQgCgOgGgNIgCgFQgRgsAQggQASgjAygDQBegFBzAMQBFAIASBHIADAOQAJA3AYAxQAJARAnAVQAHADAXAFQATAEAHAHQAVAXAKAQQAPAXgBASQgBAQgTAVQgSASgUAJQgwAVgGALQgGALAGA1QADAXgDAfIgGA2QgEAhAIAIQAJAJAfgIQASgFBSgdIJEjJQBEgYAXAxQAOAdgKAaQgKAYgbAPIiGBJQhNAog8AXQkiBrmVCEQhJAYh2AgIjBA0QgiAKhaAfQhNAaguAMQgoALhSAPQhRAPgoALIhWAWQhjAXhjASQkkA1kgAAQieAAidgQgEgVcAwwIgtAfIgEADIgRAKQgcAUgBAVQgBAVAcAQQAxAeAqAIIAUACIBdAFICpAKQCYAIBugIQDTgODxgvIB7gbIB+geQC5gvD6hLQARgFApgaIhGgtIgngZQgpgdgiAmIgPASIgBABIgOAPQgRATgOAMQgcAZghAAQggAAgZgXQgagXAAgfQgBggAXgfIAiglQAWgWAIgRQAKgSADgVQAEgYgHgOQgMgYgYgeIgrg0Ig/BhQgkA2gWAnQgEAHAGARQAGAQAJAKQAbAgAHAXQAJAfgVAfQgSAbghAEQgiADgkgWQgfgSgWAEQgQADgQARQgGAFgGAIQgbAlgkAAQgbABgXgUQgHgGgHgJQgXgcgSACQgQABgSAeQgIAOgMAOIgLANQgRASgRAIQgbANgfgKIgRgHQgVgLgOgVQgUgfAFgjQAIgyAjg2IABgCQARgcAAgSQgBgXgZgUQgZgUgJgdQgHgZADglQACgbgGgnQgJgtgDgWIgRgEIg3A1QggAfgVAXQgkAoACAWQADAaA0AWQBNAhATA/QAGAUAAAWQgBAsgfAwQg8BehTBSIgCABQguAug1APQgtANgugLQgNgDgMgFQglgOgsgZQgYgOg0giQgKgGgeghQgXgZgPgBIgBAAQgUAAgcATgEgO1AtyIgrAoIAoAmIABAAIAXgWQANgOAFgLQADgHgGgOQgIgQgCgIgEAGLArRQgHABgKADIgSAGIAFAUQADALAFADQApAdAkANQA7AUgBhCQgBgZgIgJQgLgLgZAFQgNADgVgBIgfgCIgDAAg");
        e.setTransform(176.0833, 347.0525);
        this.reflect_wrapper_1 = new a.reflect_wrapper;
        this.reflect_wrapper_1.name = "reflect_wrapper_1";
        this.reflect_wrapper_1.parent = this;
        this.reflect_wrapper_1.setTransform(30.85, 559.15);
        b = [this.reflect_wrapper_1];
        for (d = 0; d < b.length; d++) b[d].mask = e;
        this.timeline.addTween(c.Tween.get(this.reflect_wrapper_1).wait(1))
    }).prototype = k(a.sign_effect, new c.Rectangle(-20.1, -17, 673.5, 817), null);
    (a.replace = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.sign_effect = new a.sign_effect;
        this.sign_effect.name = "sign_effect";
        this.sign_effect.parent = this;
        this.timeline.addTween(c.Tween.get(this.sign_effect).wait(1))
    }).prototype = k(a.replace, new c.Rectangle(-107.6, -565.7, 854.5, 1931.3), null);
    (a._2467001_sign_effect = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.instance = new a.replace;
        this.instance.parent = this;
        this.instance.setTransform(321, 400, 1, 1, 0, 0, 0, 321, 400);
        this.timeline.addTween(c.Tween.get(this.instance).wait(1))
    }).prototype = g = new c.MovieClip;
    g.nominalBounds = new c.Rectangle(212.4,
        -165.7, 534.5, 1531.3);
    a.properties = {
        id: "_2467001_sign_effect",
        width: 640,
        height: 800,
        fps: 18,
        color: "#333333",
        opacity: 1,
        manifest: [],
        preloads: []
    };
    (a.Stage = function(b) {
        createjs.Stage.call(this, b)
    }).prototype = g = new createjs.Stage;
    g.setAutoPlay = function(b) {
        this.tickEnabled = b
    };
    g.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    };
    g.stop = function(b) {
        b && this.seek(b);
        this.tickEnabled = !1
    };
    g.seek = function(b) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(a.properties.fps *
            b / 1E3)
    };
    g.getDuration = function() {
        return this.getChildAt(0).totalFrames / a.properties.fps * 1E3
    };
    g.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / a.properties.fps * 1E3
    };
    f.bootcompsLoaded = f.bootcompsLoaded || [];
    f.bootstrapListeners || (f.bootstrapListeners = []);
    f.bootstrapCallback = function(b) {
        f.bootstrapListeners.push(b);
        if (0 < f.bootcompsLoaded.length)
            for (var d = 0; d < f.bootcompsLoaded.length; ++d) b(f.bootcompsLoaded[d])
    };
    f.compositions = f.compositions || {};
    f.compositions._2467001_sign_effect = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return a
        },
        getSpriteSheet: function() {
            return C
        },
        getImages: function() {
            return D
        }
    };
    f.compositionLoaded = function(b) {
        f.bootcompsLoaded.push(b);
        for (var d = 0; d < f.bootstrapListeners.length; d++) f.bootstrapListeners[d](b)
    };
    f.getComposition = function(b) {
        return f.compositions[b]
    };
    f.makeResponsive = function(b, d, e, v, r) {
        function w() {
            var l = a.properties.width,
                m = a.properties.height,
                n = window.innerWidth,
                p = window.innerHeight,
                q = window.devicePixelRatio ||
                1,
                t = n / l,
                u = p / m,
                h = 1;
            if (b)
                if ("width" == d && x == n || "height" == d && y == p) h = z;
                else if (e) 1 == v ? h = Math.min(t, u) : 2 == v && (h = Math.max(t, u));
            else if (n < l || p < m) h = Math.min(t, u);
            r[0].width = l * q * h;
            r[0].height = m * q * h;
            r.forEach(function(A) {
                A.style.width = l * h + "px";
                A.style.height = m * h + "px"
            });
            stage.scaleX = q * h;
            stage.scaleY = q * h;
            x = n;
            y = p;
            z = h;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var x, y, z = 1;
        window.addEventListener("resize", w);
        w()
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
