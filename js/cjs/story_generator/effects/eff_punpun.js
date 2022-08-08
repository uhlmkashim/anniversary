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
    
    
    (lib.pin = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F96A05").s().p("ALwXgQgcgQgRgcIiWkCIAEAoQAFApgWAjQgWAjgnAPQgTAHgWAAQgeAAgagOQgbgOgQgZInMqnQibCTi/AAQiDAAh4hGQh5hGhZh/QhYh8gTiCQgUiBA0hwQAdg/AxgyQhqg/hKhZQhKhZgnhvQhBi4AtjNQAsjOCQi1QBuiLCvhTQCuhTC1AAQBwAABiAiQBjAiBOBBQA9AzAwBIQBPhlB2gzQBoguB2AAQCXAACKBIQCLBHBRB5QCuEAg5DrQgYBhg8BVQBlAuA2BeQAyBXgDBpQgDBog4BgQgzBahQAwQhPAwhjAAQguAAgvgLICKSxQAFArgXAjQgXAkgoAOQgSAGgUAAQggAAgbgPgAMrV3Iii17IBIAnQBYAoBMAAQCFAABIh8QBSiQhDh8Qgeg4g4ggQg6ghhJAAQhVAAheAwQDsiCA/iyQBFjFiejqQhChhhwg6Qhwg4h4AAQicAAhvBdQh+BqgiDJQgljqiNh3Qh+hpi4AAQiZAAiXBIQiWBHhcB1Qh2CTgqClQgpCjAoCUQApCZB5BrQCBBzDLAuQhnAKhJAyQhHAwgeBOQgfBOAQBcQASBgBDBgQBGBkBdA5QBiA7BmAAQBfAABYg1QBfg5BPhzIIkMqIhEpbg");
        this.shape.setTransform(18.6476,28.4776,0.1749,0.1749,29.9978);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AF2KMIBEJbIoksqQilDxjbgRQhfgIhag6QhWg4hBhdQhDhggShgQgQhcAfhOQAehOBHgwQBJgyBngKQjLguiBhzQh5hrgpiZQgoiUApijQAqilB2iTQBhh7CghIQChhJCfAJQCuAJB1BpQCDB3AjDgQAgi6BthoQBiheCMgOQCDgNB/A5QCAA6BIBrQCgDthKDIQhACujpCAQBmg1BfAFQBdAFA/A7QA9A5AKBVQAKBbg0BcQhaCci5goQg5gNg9gfIgwgbICiV7g");
        this.shape_1.setTransform(18.646,28.4779,0.1749,0.1749,29.9978);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.pin, new cjs.Rectangle(0,0,44.6,58.9), null);
    
    
    (lib.punpun = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_5 = function() {
            /* stop();
            */
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));
    
        // sigh
        this.instance = new lib.pin();
        this.instance.parent = this;
        this.instance.setTransform(48.85,-2.05,1,1,0,0,0,22.3,29.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:18.6,regY:28.5,x:45.4,y:-4.55,alpha:0.9375},0).wait(1).to({x:46.3,y:-9.5,alpha:0.75},0).wait(1).to({x:47.75,y:-17.7,alpha:0.4375},0).wait(1).to({regX:22.3,regY:29.4,x:53.5,y:-28.3,alpha:0},0).to({_off:true},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-57.7,75.8,85.2);
    
    
    (lib.mc_punpun = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            /* play();*/
        }
        this.frame_18 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));
    
        // レイヤー_3
        this.instance = new lib.punpun("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(96.95,4.95,0.7347,0.7347,45.4813,0,0,48.8,-2);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},5).wait(3).to({_off:false},0).to({_off:true},4).wait(2));
    
        // レイヤー_1
        this.instance_1 = new lib.punpun("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.05,-0.05,1,1,-42.2096,0,0,48.9,-2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},6).wait(3).to({_off:false},0).to({_off:true},5).wait(5));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-41.7,-47.9,173.5,72.7);
    
    
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
        this.L = new lib.mc_punpun();
        this.L.name = "L";
        this.L.parent = this;
        this.L.setTransform(-46.7,-73.2);
    
        this.R = new lib.mc_punpun();
        this.R.name = "R";
        this.R.parent = this;
        this.R.setTransform(47.3,-73.2,1,1,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.L}]},1).to({state:[{t:this.R}]},3).wait(3));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-82.9,-109.9,166.5,109.9);
    
    
    // stage content:
    (lib.eff_punpun = function(mode,startPosition,loop) {
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
        id: 'eff_punpun',
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
    an.compositions['eff_punpun'] = {
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