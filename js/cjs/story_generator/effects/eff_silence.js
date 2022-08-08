(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];
    
    
    // symbols:
    // helper functions:
    
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
    
    
    (lib.gr_pop_base = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#333333").ss(1,1,1).p("ADgjCIm/AAQg5AAAAA5IAACMQAAA5A5AAIE1AAIBuCHIgZiHIA1AAQA5AAAAg5IAAiMQAAg5g5AAg");
        this.shape.setTransform(-0.025,-0.025);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("ABWA8Ik1AAQg5AAAAg5IAAiMQAAg5A5AAIG/AAQA5AAAAA5IAACMQAAA5g5AAIg1AAIAZCHg");
        this.shape_1.setTransform(-0.025,-0.025);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.gr_pop_base, new cjs.Rectangle(-29.1,-20.5,58.2,41), null);
    
    
    (lib.gr_dot = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
        this.shape.setTransform(-14,0);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#333333").s().p("AA8AKQgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEgAhPAKQgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
        this.shape_1.setTransform(-7,0);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("ACCAKQgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEgAiVAKQgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},5).wait(6));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.4,-1.4,30.8,2.8);
    
    
    (lib.mc_silence_core_reverse = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // dot
        this.instance = new lib.gr_dot("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(-20.25,-25.2,1,1,0,0,180);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(12));
    
        // レイヤー_2
        this.instance_1 = new lib.gr_pop_base();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-19.85,-19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-48.5,-39,57.3,40);
    
    
    (lib.mc_silence_core = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // dot
        this.instance = new lib.gr_dot("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(-20.25,-25.2);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(12));
    
        // レイヤー_2
        this.instance_1 = new lib.gr_pop_base();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-19.85,-19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-48.5,-39,57.3,40);
    
    
    (lib.silence_reverse = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            /* play();
            */
        }
        this.frame_20 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));
    
        // mc_silence_core
        this.instance = new lib.mc_silence_core_reverse("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(4,4.5,0.3645,0.3645);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0417,scaleY:1.0417,x:0,y:0,startPosition:2},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,startPosition:4},2).wait(1).to({regX:-19.9,regY:-19,x:-19.9,y:-18.95,startPosition:5},0).wait(1).to({y:-18.75,startPosition:6},0).wait(1).to({y:-18.45,startPosition:7},0).wait(1).to({y:-18.1,startPosition:8},0).wait(1).to({y:-17.8,startPosition:9},0).wait(1).to({y:-17.6,startPosition:10},0).wait(1).to({regX:0,regY:0,x:0,y:1.5,mode:"single",startPosition:13},0).wait(1).to({regX:-19.9,regY:-19,x:-19.9,y:-17.6},0).wait(1).to({y:-17.8},0).wait(1).to({y:-18.1},0).wait(1).to({y:-18.45},0).wait(1).to({y:-18.75},0).wait(1).to({y:-18.95},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({scaleX:0.6887,scaleY:0.6887,alpha:0},2,cjs.Ease.get(1)).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.9,-41.1,60.5,46.800000000000004);
    
    
    (lib.silence = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            /* play();
            */
        }
        this.frame_20 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));
    
        // mc_silence_core
        this.instance = new lib.mc_silence_core("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(4,4.5,0.3645,0.3645);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0417,scaleY:1.0417,x:0,y:0,startPosition:2},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,startPosition:4},2).wait(1).to({regX:-19.9,regY:-19,x:-19.9,y:-18.95,startPosition:5},0).wait(1).to({y:-18.75,startPosition:6},0).wait(1).to({y:-18.45,startPosition:7},0).wait(1).to({y:-18.1,startPosition:8},0).wait(1).to({y:-17.8,startPosition:9},0).wait(1).to({y:-17.6,startPosition:10},0).wait(1).to({regX:0,regY:0,x:0,y:1.5,mode:"single",startPosition:13},0).wait(1).to({regX:-19.9,regY:-19,x:-19.9,y:-17.6},0).wait(1).to({y:-17.8},0).wait(1).to({y:-18.1},0).wait(1).to({y:-18.45},0).wait(1).to({y:-18.75},0).wait(1).to({y:-18.95},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({scaleX:0.6887,scaleY:0.6887,alpha:0},2,cjs.Ease.get(1)).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.9,-41.1,60.5,46.800000000000004);
    
    
    (lib.replace = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{L:1,R:4});
    
        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_4 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(3));
    
        // effect_4
        this.L = new lib.silence();
        this.L.name = "L";
        this.L.parent = this;
        this.L.setTransform(-43,-32.7);
    
        this.R = new lib.silence_reverse();
        this.R.name = "R";
        this.R.parent = this;
        this.R.setTransform(36,-32.7,1,1,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.L}]},1).to({state:[{t:this.R}]},3).wait(3));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.6,-42.4,106.30000000000001,42.4);
    
    
    // stage content:
    (lib.eff_silence = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.replace = new lib.replace();
        this.replace.name = "replace";
        this.replace.parent = this;
        this.replace.setTransform(115,140);
    
        this.timeline.addTween(cjs.Tween.get(this.replace).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,0,0);
    // library properties:
    lib.properties = {
        id: 'eff_silence',
        width: 230,
        height: 280,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [],
        preloads: []
    };
    
    
    
    // bootstrap callback support:
    
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();
    
    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
    
    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
    
    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if(!an.bootstrapListeners) {
        an.bootstrapListeners=[];
    }
    
    an.bootstrapCallback=function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if(an.bootcompsLoaded.length > 0) {
            for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };
    
    an.compositions = an.compositions || {};
    an.compositions['eff_silence'] = {
        getStage: function() { return exportRoot.getStage(); },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };
    
    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j=0; j<an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }
    
    an.getComposition = function(id) {
        return an.compositions[id];
    }
    
    
    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
        var lastW, lastH, lastS=1;		
        window.addEventListener('resize', resizeCanvas);		
        resizeCanvas();		
        function resizeCanvas() {			
            var w = lib.properties.width, h = lib.properties.height;			
            var iw = window.innerWidth, ih=window.innerHeight;			
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
            if(isResp) {                
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                    sRatio = lastS;                
                }				
                else if(!isScale) {					
                    if(iw<w || ih<h)						
                        sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==1) {					
                    sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==2) {					
                    sRatio = Math.max(xRatio, yRatio);				
                }			
            }			
            domContainers[0].width = w * pRatio * sRatio;			
            domContainers[0].height = h * pRatio * sRatio;			
            domContainers.forEach(function(container) {				
                container.style.width = w * sRatio + 'px';				
                container.style.height = h * sRatio + 'px';			
            });			
            stage.scaleX = pRatio*sRatio;			
            stage.scaleY = pRatio*sRatio;			
            lastW = iw; lastH = ih; lastS = sRatio;            
            stage.tickOnUpdate = false;            
            stage.update();            
            stage.tickOnUpdate = true;		
        }
    }
    
    
    })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
    var createjs, AdobeAn;