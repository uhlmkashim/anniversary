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


(lib.reflect_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// standard
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,297.1,0.1,-297).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_inner, new cjs.Rectangle(0,0,300,1200), null);


(lib.reflect_mask_196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("AXnLgIg8gGIiUgQQh/gQiaAEIgKABQgwAHgWgSQjrAAjrgHImkgNQhKAAhLAEQhOAEg0gSIgKAAIhuAAIgBAFQgnAFgoAAQhqAMhygMQgogFgoAAQg/AAgbgFIAAAFQhkAFhkAAIgKABQjbALjdAIIgBAFQgxAFgyAAIgKABQg0AGgSgbQgsgGgGgsQgRhrAHiFQARg5gChTQgFjmAFjlQAAgFAFgFIgBgKQgQh2AHiOQARggAAg6QAAgcANgWIAAgKIAAgUQAUgPAVgNQAEgCAFAAIAAgKQC+geDmACQAWAAAcgCQEXgPEtAIQBkACBkAFIAAgKQAyAAAxAFIABAFQEbALEogCQDegBDGAYQBqAMB8gEQAtAAAsAFIABAFQDhgFDNANQAjACAhgHQBCgPAuAqIALATQAEAGABAGQAUCUgHCrQgHCeALCFQAWEWgKEsIAAAKQAFBagyAeQglAkhLAAQgSAAgVgCgAGwFCQAtAxAEhFIABgKQgcAIgWAWgAyXEMQg0ATgyAZQAIARAfADQBfAIgbhDQgCgFgCAAIgBAAgArDE4QAWASAvgLQAGgCgBgBQgMgTgTAAQgSAAgZAPgAU4inQABAFgBADQgOAqAVAeIAHALQAPAgAEAuQAJBvguAxQAAAFACAEQAjBPBTAgQgBARAVgBIAFgBQAWg0gJhTQgWjDAEjgQAAgKgDgBQg+gThLAAQAAA8AEA8gADABwQAHAwAKArIADAJQAngQAigeQArgngwgVQgIgEgFgFQgSgUgRAAQgWAAgSAjgAuzi7QApAdAVAyQAWA4giAtQgFAFAAAEQAFAnAagfQAVgYAAg1QAAgggFgkQgHgvgVglIgEgIQgeAPgeAZgA3FAMIAAAKQAWgCAVgNQATgMAZgJQAugSg0gMQgogJgpgOIAABPgAnqjtQgKBEANAqQAtAGAYgRQAXgQAdgGQAigHAWgOQBDgvAkhPQAtghhLADQiTAHh7gRQAbAmgKBIgAAClHQAAAFACADQApAxAbA/QAIAWAWACQBBAGA3AKQAKAYABgYQAHh6COAVQAnAGAOgUQAagkA9ABIAFgFQhagFhfgCIhGAAIgmAAQhzAAh1ACgANAk9QAPAPAHAZQADAKgCAJQgKBEAtALQBaAWgah4QgCgKgFgEQgggbg7AAIgYABgA0llXQhPAHhRAJIAAAoIAAAKQBjAGBRAOQAAgPAEgNQATg6glAAIgGAAg");
	this.shape.setTransform(0.0042,0.015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_mask_196, new cjs.Rectangle(-171,-73.7,342,147.5), null);


(lib.glitter_inner_sphere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.4).s().p("AlhFhQiSiSAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner_sphere, new cjs.Rectangle(-50,-50,100,100), null);


(lib.reflect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.setTransform(0,-301.7,1.2132,1.2132,0,0,-20.001);
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect, new cjs.Rectangle(0,-426.2,342,852.4), null);


(lib.reflect_container_cjs_196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flash:20});

	// timeline functions:
	this.frame_0 = function() {
		this.preview.visible = false;
	}
	this.frame_20 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(19));

	// preview
	this.preview = new lib.reflect();
	this.preview.name = "preview";
	this.preview.parent = this;
	this.preview.setTransform(-0.5,-0.1,1,1,0,0,0,-0.5,-0.1);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.preview).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,500.1,1,1,0,0,0,-0.5,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-0.1,y:-0.1},9,cjs.Ease.get(-1)).to({regY:0.1,y:-499.85},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-926.1,342,1852.3000000000002);


(lib.glitter_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.parent = this;
	this.instance.setTransform(0,0.05,1.5,0.0862,-45);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.3342,0.3342);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.05,1.5,0.0862,45);

	this.instance_3 = new lib.glitter_inner_sphere();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.glitter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.reflect_wrapper_196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.reflect = new lib.reflect_container_cjs_196();
	this.reflect.name = "reflect";
	this.reflect.parent = this;
	this.reflect.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.reflect).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_wrapper_196, new cjs.Rectangle(0,-426.2,342,852.4), null);


(lib.glitter_container_cjs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:20});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay( Math.floor( Math.random() * 20 ) );
	}
	this.frame_20 = function() {
		
	}
	this.frame_50 = function() {
		this.gotoAndPlay( 0 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50).wait(1));

	// mc
	this.lux = new lib.glitter();
	this.lux.name = "lux";
	this.lux.parent = this;

	this.instance = new lib.glitter();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lux}]}).to({state:[]},1).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},9).to({state:[]},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleX:0.7333,scaleY:0.7333,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.5)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


(lib.glitter_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.instance = new lib.glitter_container_cjs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_wrapper, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.sign_effect_3516202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.parent = this;
	this.instance.setTransform(423.3,485.6,0.5873,0.5873);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(336.35,566.15,0.89,0.89);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.parent = this;
	this.instance_2.setTransform(620.7,568.55,0.89,0.89);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.parent = this;
	this.instance_3.setTransform(587.95,496,0.89,0.89);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.parent = this;
	this.instance_4.setTransform(494.15,508.85,0.645,0.645);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.parent = this;
	this.instance_5.setTransform(549.15,544.55,0.6161,0.6161);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.parent = this;
	this.instance_6.setTransform(388.95,537.15,0.5873,0.5873);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.parent = this;
	this.instance_7.setTransform(620.7,465.3,0.89,0.89);

	this.instance_8 = new lib.glitter_wrapper();
	this.instance_8.parent = this;
	this.instance_8.setTransform(340.4,460,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// mask_idn
	this.reflect_mask = new lib.reflect_mask_196();
	this.reflect_mask.name = "reflect_mask";
	this.reflect_mask.parent = this;
	this.reflect_mask.setTransform(480.55,514.05,0.89,0.89);
	this.reflect_mask.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.reflect_mask).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAurAtRIg1gFIiFgPQhxgOiJAEIgJAAQgqAHgUgQQjRAAjRgGIl2gMQhDAAhCADQhFAEgvgQIgJAAIhiAAIAAAFQgkAEgjAAQhfALhlgLQgkgEgjAAQg4AAgYgFIAAAFQhZAEhZAAIgJABQjDAKjFAHIAAAFQgsAEgtAAIgJAAQguAGgQgYQgngGgFgmQgQhgAHh2QAPgzgChJQgEjNAEjNQAAgEAEgFIAAgJQgOhpAGh+QAPgdAAgzQAAgZALgUIAAgJIAAgRQASgOATgLQADgCAFAAIAAgJQCpgbDNACQATAAAZgCQD4gNEMAHQBZACBZAEIAAgJQAtAAAsAFIAAAEQD9AKEHgCQDGgBCwAVQBfAMBugEQAoAAAoAEIAAAFQDIgFC3AMQAfACAegHQA6gNApAmIAKAQQADAGABAFQASCDgGCZQgGCMAJB3QAUD4gJELIAAAJQAEBQgsAbQghAghDAAQgQAAgSgCgEAfqAnhQApArADg9IABgJQgZAHgUAUgEAJTAmxQguARgtAWQAHAPAcACQBVAHgYg7QgCgEgCAAIgBAAgEAP0AnYQAUAQApgKQAFgCgBgBQgKgRgRAAQgQAAgWAOgEAsPAgsIAAAIQgNAlATAbIAGAKQAOAcADAqQAIBjgpArQAAAFACADQAfBHBKAcQgBAPATgBIAEAAQAUgvgIhKQgTiuADjHQAAgJgDgBQg3gRhDAAQAAA1AEA1gEAcVAkmQAGArAJAlIACAJQAjgOAegbQAngjgrgTQgHgDgEgEQgRgSgPAAQgTAAgQAfgEAMeAgbQAlAZASAtQAUAygeAoQgFAFABAEQAEAjAXgcQATgXAAguQAAgdgFggQgGgqgTghIgEgHQgaAOgbAWgEAFGAjNIAAAJQAUgCATgMQARgLAWgJQApgQgugKQgkgIglgMIAABHgAS1fuQgJA9ALAlQApAFAVgOQAVgPAagFQAdgGAUgNQA8gqAghGQAogehDADQiCAGhugOQAYAhgJBAgAZseeQAAAFACACQAkAsAYA4QAHATAUACQA6AFAwAKQAJAVACgWQAFhsB/ATQAjAFAMgSQAXggA2ABIAFgEQhQgFhVgBIg+gBIgiAAQhmAAhoACgEAlOAenQAOANAGAWQACAKgBAIQgJA8AoAKQBQATgXhrQgCgIgEgEQgdgYg0AAIgWABgAHVeQQhHAGhIAIIAAAkIABAJQBXAFBJANQAAgOAEgMQAQgzghAAIgFAAg");
	mask.setTransform(316.3755,289.867);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_196();
	this.reflect_wrapper.name = "reflect_wrapper";
	this.reflect_wrapper.parent = this;
	this.reflect_wrapper.setTransform(328.4,514.05,0.89,0.89);

	var maskedShapeInstanceList = [this.reflect_wrapper];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.reflect_wrapper).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign_effect_3516202, new cjs.Rectangle(286.5,124.2,384.1,682.8), null);


(lib.replace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sign
	this.sign_effect = new lib.sign_effect_3516202();
	this.sign_effect.name = "sign_effect";
	this.sign_effect.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sign_effect).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace, new cjs.Rectangle(0,0,670.6,893.4), null);


// stage content:
(lib._3516202_sign_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replace
	this.instance = new lib.replace();
	this.instance.parent = this;
	this.instance.setTransform(335.3,446.7,1,1,0,0,0,335.3,446.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(606.5,534.7,64.10000000000002,358.69999999999993);
// library properties:
lib.properties = {
	id: '_3516202_sign_effect',
	width: 640,
	height: 800,
	fps: 18,
	color: "#333333",
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
an.compositions['_3516202_sign_effect'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
