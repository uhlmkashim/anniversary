(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.drop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#71DCFF").ss(0.5,1,1).p("AhMgEQgLAeAnALQAKABAmgHQAhgHAuAKIgbgjQghgjgjgBQgwAAgMAhg");
	this.shape.setTransform(0.004,0.0059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(173,242,255,0)","#95EEFF"],[0,0.569],0,0,0,0,0,8.9).s().p("AgwAlQgngLALgeQAMghAwAAQAjABAhAjIAbAjQgugKghAHQghAHgMAAIgDgBg");
	this.shape_1.setTransform(0.004,0.0059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA5IgEAAIAAAAQgcgIgJgQQgNgSAJgaIAAAAQAOguBBAAIAAAAQAqAAAoArIAAAAIACACIAaAjIAAAAQAEAFAAAGQAAAGgDAFQgEAGgFACIgBAAQgFACgGgBIAAAAQgpgJgeAGQgjAHgOAAIgEgBgAhJgDQgFANAGAKQAHAKARAFIABAAQAKABAlgIQAfgGAqAJIgWgfIAAAAIAAAAQghghghgBQgvAAgLAfgABQAgIgBAAIAAAAIABAAg");
	this.shape_2.setTransform(-0.0112,0.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-5.7,19.8,11.5);


(lib.drop1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#71DCFF").ss(0.8,1,1).p("AA4hDQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdQAJg5AjgZQAvghAhAYg");
	this.shape.setTransform(1.2129,1.7575,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(173,242,255,0)","#95EEFF"],[0,0.569],-0.6,-2,0,-0.6,-2,10.4).s().p("AhEAYQAJg5AjgZQAvghAhAYQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdg");
	this.shape_1.setTransform(1.2129,1.7575,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABGBiQgIAAgGgGQgigmgigPQgwgUgKgKIgCgCQgVgZACgVQgBgZAZgSQArgjA9ArQAqAcAKBEQAFAfgDAbQgBAIgGAGQgFAEgIAAIgBAAgAg5hFQgSANAAARQgBARARAUIAAAAQAJAHAsATQAlAQAlApIADABIADgBIABgCQADgZgFgeQgJg7glgZQgcgUgXAAQgSAAgPALg");
	this.shape_2.setTransform(1.2117,1.7094);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8.1,18.5,19.7);


(lib.sweat_fly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// drop1
	this.instance = new lib.drop1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.25,-10.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.2,regY:1.7,skewX:33.7495,skewY:213.7495,x:25.3,y:-17.9,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9994,skewY:224.9994,x:35.25,y:-21.5,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,skewX:0,skewY:180,x:3.25,y:-10.1,alpha:1},0).wait(1).to({regX:1.2,regY:1.7,skewX:33.7495,skewY:213.7495,x:25.3,y:-17.9,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9994,skewY:224.9994,x:35.25,y:-21.5,alpha:0.2188},0).to({_off:true},1).wait(1));

	// drop2
	this.instance_1 = new lib.drop2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.8,-1.7,0.8481,0.8481,0,-14.9996,165.0004);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.962,scaleY:0.962,skewX:18.7495,skewY:198.7495,x:31.8,y:2.2375,alpha:0.4141},0).wait(1).to({scaleX:1,scaleY:1,skewX:29.9992,skewY:209.9992,x:40.8,y:3.55,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.8481,scaleY:0.8481,skewX:-14.9996,skewY:165.0004,x:4.8,y:-1.7,alpha:1},0).wait(1).to({scaleX:0.962,scaleY:0.962,skewX:18.7495,skewY:198.7495,x:31.8,y:-1.5125,alpha:0.4141},0).wait(1).to({scaleX:1,scaleY:1,skewX:29.9992,skewY:209.9992,x:40.8,y:-1.45,alpha:0.2188},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-29.2,57,40.7);


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
	this.L = new lib.sweat_fly();
	this.L.name = "L";
	this.L.parent = this;
	this.L.setTransform(-41,-37.7,0.9691,0.9691,0,-3.2423,176.7577);

	this.R = new lib.sweat_fly();
	this.R.name = "R";
	this.R.parent = this;
	this.R.setTransform(31.5,-47.7,1.0539,1.0539,-3.2346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.L}]},1).to({state:[{t:this.R}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-67.6,101,67.6);


// stage content:
(lib.eff_sweat_fly = function(mode,startPosition,loop) {
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
	id: 'eff_sweat_fly',
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
an.compositions['eff_sweat_fly'] = {
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
