(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];


    // symbols:



    (lib._0000000_154_chihiro_base = function() {
        this.initialize(img.chara_9999999__0000000_154_chihiro_base);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 268, 604);


    (lib._0000000_154_chihiro_f2 = function() {
        this.initialize(img.chara_9999999__0000000_154_chihiro_f2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 168, 168); // helper functions:

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


    (lib.ef_position_core = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgDCWQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAiQIiqAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAICqAAIAAiKQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAACKICqgBQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIiqABIAACQQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
        this.shape.setTransform(18, 15.125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.ef_position_core, new cjs.Rectangle(0, 0, 36, 30.3), null);


    (lib.character1_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // base
        this.instance = new lib._0000000_154_chihiro_base();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.character1_base, new cjs.Rectangle(0, 0, 134, 302), null);


    (lib.ef_position = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* _visible = false;*/
        }
        this.frame_1 = function() {
            /* //pexで赤十字が顔に表示される不具合対策。
            stop();
            */
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // レイヤー_1
        this.instance = new lib.ef_position_core();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.35, 1, 1, 0, 0, 0, 18, 15.1);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18, -14.7, 36, 30.2);


    (lib.character1_face = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.b.visible = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

        // mask_idn (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AmUGpIAAtHIMzAAIAANHg");
        mask.setTransform(41.5021, 42.505);

        // face
        this.instance = new lib._0000000_154_chihiro_f2();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5, 0.5);
        this.instance._off = true;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(9));

        // base
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(134, 153, 1, 1, 0, 0, 0, 160, 195);

        var maskedShapeInstanceList = [this.b];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.b).wait(12));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 84, 85);


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
            /* //public var
            current_face = 1;	//現在の表情
            next_face = 1;		//次の表情
            blink = 100;		//まばたきまでの最大フレーム数 (小さい程頻繁にまばたきする)
            face1_blink = 0;	//0:まばたきしない 1~:まばたきする
            face2_blink = 0;
            face3_blink = 0;
            face4_blink = 0;
            face5_blink = 0;
            face6_blink = 0;
            face7_blink = 0;
            face8_blink = 0;
            face9_blink = 0;
            face10_blink = 0;
            face11_blink = 0;
            face12_blink = 0;
            //private var
            cnt = 0;			//まばたきカウント
            
            call("setBlink");
            gotoAndPlay("stay");
            */

            //                     1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12
            this.face_blink_ary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.blink = 100; //まばたきまでの最大フレーム数 (小さい程頻繁にまばたきする)
            // 瞬き関数
            this.setBlink = function() {
                Math.floor(Math.random() * this.blink);
            }

            this.current_face = 1; //現在の表情
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
            /* gotoAndPlay("stay");*/

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

            this.current_face = this.next_face;

            this.f1.gotoAndStop(this.current_face);
            this.f2.gotoAndStop(this.next_face);
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

        // f2
        this.f2 = new lib.character1_face();
        this.f2.name = "f2";
        this.f2.parent = this;
        this.f2.setTransform(35, 30, 1, 1, 0, 0, 0, 35, 30);

        this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({
            alpha: 0.1992
        }, 0).wait(1).to({
            regX: 41.5,
            regY: 42.5,
            x: 41.5,
            y: 42.5,
            alpha: 0.7998
        }, 0).wait(1).to({
            regX: 35,
            regY: 30,
            x: 35,
            y: 30,
            alpha: 1
        }, 0).wait(20));

        // f1
        this.f1 = new lib.character1_face();
        this.f1.name = "f1";
        this.f1.parent = this;
        this.f1.setTransform(35, 30, 1, 1, 0, 0, 0, 35, 30);

        this.timeline.addTween(cjs.Tween.get(this.f1).wait(7).to({
            alpha: 0
        }, 0).wait(20));

        // f1_alpha
        this.f1_alpha = new lib.character1_face();
        this.f1_alpha.name = "f1_alpha";
        this.f1_alpha.parent = this;
        this.f1_alpha.setTransform(35, 30, 1, 1, 0, 0, 0, 35, 30);

        this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({
            alpha: 0.8008
        }, 0).to({
            alpha: 0
        }, 2, cjs.Ease.get(-1)).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26, -42, 134, 302);


    (lib.replace = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // ef_position
        this.ef_position = new lib.ef_position();
        this.ef_position.name = "ef_position";
        this.ef_position.parent = this;
        this.ef_position.setTransform(0, -187.4);

        this.timeline.addTween(cjs.Tween.get(this.ef_position).wait(1));

        // f_表情差分ある場合のみ_
        this.f = new lib.character1_face_container();
        this.f.name = "f";
        this.f.parent = this;
        this.f.setTransform(-42, -230);

        this.timeline.addTween(cjs.Tween.get(this.f).wait(1));

        // b
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(-68, -272);

        this.timeline.addTween(cjs.Tween.get(this.b).wait(1));

    }).prototype = getMCSymbolPrototype(lib.replace, new cjs.Rectangle(-68, -272, 134, 302), null);


    // stage content:
    (lib.chara_9999999 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // replace
        this.instance = new lib.replace();
        this.instance.parent = this;
        this.instance.setTransform(16.5, 16.5, 1, 1, 0, 0, 0, 16.5, 16.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18, -222, 84, 252);
    // library properties:
    lib.properties = {
        id: 'chara_9999999',
        width: 100,
        height: 100,
        fps: 12,
        color: "#999999",
        opacity: 1.00,
        manifest: [{
                src: "images/0000000_154_chihiro_base.png",
                id: "chara_9999999__0000000_154_chihiro_base"
            },
            {
                src: "images/0000000_154_chihiro_f2.png",
                id: "chara_9999999__0000000_154_chihiro_f2"
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
    an.compositions['chara_9999999'] = {
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