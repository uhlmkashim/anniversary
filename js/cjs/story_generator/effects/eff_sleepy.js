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
    
    
    (lib.sleepy_inner = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["rgba(255,255,255,0.2)","rgba(255,251,243,0.498)"],[0,1],0,0,0,0,0,7.8).s().p("AgxAyQgWgUABgeQgBgdAWgUQAUgWAdABQAegBAUAWQAWAUgBAdQABAegWAUQgUAWgegBQgdABgUgWg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.sleepy_inner, new cjs.Rectangle(-7.1,-7.1,14.3,14.3), null);
    
    
    (lib.sleepy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.sleepy_inner();
        this.instance.parent = this;
        this.instance.setTransform(-1.45,0.95);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.8625,scaleY:0.8625,rotation:23.4661,x:-4.9467,y:-6.2791},0).wait(1).to({scaleX:0.7359,scaleY:0.7359,rotation:45.0549,x:-6.1981,y:-12.9071},0).wait(1).to({scaleX:0.6204,scaleY:0.6204,rotation:64.7665,x:-5.8074,y:-19.1965},0).wait(1).to({scaleX:0.5159,scaleY:0.5159,rotation:82.6007,x:-4.408,y:-24.7632},0).wait(1).to({scaleX:0.4223,scaleY:0.4223,rotation:98.5577,x:-3.9483,y:-29.4039},0).wait(1).to({scaleX:0.3398,scaleY:0.3398,rotation:112.6373,x:-4.5436,y:-33.5819},0).wait(1).to({scaleX:0.2683,scaleY:0.2683,rotation:124.8397,x:-6.021,y:-37.2557},0).wait(1).to({scaleX:0.2078,scaleY:0.2078,rotation:135.1648,x:-7.9177,y:-40.1224},0).wait(1).to({scaleX:0.1583,scaleY:0.1583,rotation:143.6126,x:-9.6815,y:-42.1154},0).wait(1).to({scaleX:0.1197,scaleY:0.1197,rotation:150.1831,x:-11.1016,y:-43.4384},0).wait(1).to({scaleX:0.0922,scaleY:0.0922,rotation:154.8763,x:-12.2216,y:-44.325},0).wait(1).to({scaleX:0.0757,scaleY:0.0757,rotation:157.6923,x:-12.9407,y:-44.8271},0).wait(1).to({scaleX:0.0702,scaleY:0.0702,rotation:158.6309,x:-13.15,y:-45.05},0).to({_off:true},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-13.8,-45.7,19.5,53.800000000000004);
    
    
    (lib.sleepy_container = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            this.play();
        }
        this.frame_12 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));
    
        // レイヤー_4
        this.instance = new lib.sleepy("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(1.95,3.8,0.5161,0.5161);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},9).wait(1));
    
        // レイヤー_3
        this.instance_1 = new lib.sleepy("synched",0,false);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-2.8,4.6,1.16,1.16,-8.1999);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},10).wait(1));
    
        // レイヤー_2
        this.instance_2 = new lib.sleepy("synched",0,false);
        this.instance_2.parent = this;
        this.instance_2.setTransform(11.45,9.05,1.0843,1.0843,3.4676);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},11).wait(1));
    
        // レイヤー_1
        this.instance_3 = new lib.sleepy("synched",0,false);
        this.instance_3.parent = this;
        this.instance_3.setTransform(1.45,-0.95,1.4601,1.4601);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},12).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.9,-66.6,39.5,84.3);
    
    
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
        this.L = new lib.sleepy_container();
        this.L.name = "L";
        this.L.parent = this;
        this.L.setTransform(-39,-34);
    
        this.R = new lib.sleepy_container();
        this.R.name = "R";
        this.R.parent = this;
        this.R.setTransform(31,-34,1,1,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.L}]},1).to({state:[{t:this.R}]},3).wait(3));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.1,-44,92.2,44);
    
    
    // stage content:
    (lib.eff_sleepy = function(mode,startPosition,loop) {
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
        id: 'eff_sleepy',
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
    an.compositions['eff_sleepy'] = {
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