(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_3516202 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_3516202_1();

	// image_replace
	this.instance = new lib.replace_image_3516202();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,670.7,800);


// symbols:
(lib.replace_image_3516202 = function() {
	this.initialize(img.replace_image_3516202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.reflect_inner = function() {
	this.initialize();

	// standard
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,297.1,0.1,-296.9).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.reflect_mask_196 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("AXnLfIg8gGIiVgQQh/gPiaAEIgKAAQgvAHgXgRQjrAAjrgHImkgNQhJAAhLADQhNAEg1gRIgKAAIhuAAIAAAFQgoAFgoAAQhqALhygMQgogEgoAAQg/AAgbgFIAAAFQhkAFhkAAIgKAAQjaALjeAJIAAAFQgyAFgyAAIgKAAQgzAGgTgaQgrgHgHgrQgRhsAHiEQASg6gChSQgGjmAFjkQAAgFAFgFIAAgKQgQh3AGiNQASghAAg5QAAgcAMgWIAAgKIAAgUQAUgPAWgNQADgCAFAAIAAgKQC+geDmABQAWABAcgCQEXgQEtAIQBkADBkAFIAAgKQAyAAAyAFIAAAFQEaALEogCQDfgCDFAYQBqANB8gEQAtAAAtAFIAAAFQDhgFDNAMQAjADAigIQBBgPAuArIALATQAEAGABAFQAVCUgHCsQgHCdAKCFQAWEWgKEsIAAAJQAFBbgyAeQglAjhLAAQgSAAgUgCgAGvFCQAuAwAEhEIAAgKQgcAHgWAXgAyXEMQg0ATgyAZQAIARAfACQBgAIgbhCQgCgFgDAAIgBAAgArDE4QAXARAugLQAGgBgBgCQgLgSgUAAQgSAAgZAPgAU4inQAAAGgBADQgOApAVAeIAHAMQAPAfAEAtQAJBwguAxQAAAFACAEQAjBPBTAgQgBAQAWgBIAEAAQAXg1gJhSQgWjDADjfQAAgKgDgBQg+gThLAAQAAA8AFA7gAC/BwQAIAwAKAqIACAKQAngQAigfQArgngvgVQgJgDgEgFQgTgUgQAAQgWAAgTAjgAuzi6QAqAcAUAzQAXA3gjAuQgFAFABACQAFAoAaggQAVgXAAg0QAAghgGgkQgHgugVgmIgEgHQgeAPgeAZgA3FAMIAAAKQAXgDAUgNQATgKAZgKQAvgSg0gLQgpgJgpgOIAABOgAnqjtQgJBEAMArQAuAFAXgQQAYgRAdgFQAhgHAWgPQBDguAkhPQAugihMAEQiSAGh8gQQAbAlgKBIgAABlGQAAAFADADQAoAxAbA/QAJAVAWACQBBAGA2ALQAKAXACgYQAGh5COAVQAoAFANgTQAagkA9ABIAFgFQhagFhfgCIhGgBIglAAQhzAAh2ADgAM/k8QAQAOAGAZQADALgBAJQgLBEAtALQBaAVgah4QgCgJgFgEQgggbg6AAIgZABgA0klWQhQAHhRAJIAAAoIABAKQBiAGBRAOQAAgPAFgOQASg5glAAIgFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170.9,-73.7,342,147.6);


(lib.glitter_inner_sphere = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.reflect = function() {
	this.initialize();

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.setTransform(0,-301.6,1.213,1.213,0,0,-19.9);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-426.1,342,852.4);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

	// preview
	this.preview = new lib.reflect();
	this.preview.setTransform(-0.3,0,1,1,0,0,0,-0.4,0);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preview}]}).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.setTransform(-0.3,500.1,1,1,0,0,0,-0.4,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:0,y:0},9,cjs.Ease.get(-0.99)).to({regY:0.1,y:-499.6},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-426.1,342,852.4);


(lib.glitter_inner = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.setTransform(0,0.1,1.5,0.086,-44.9);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.setTransform(0,0,0.334,0.334);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.setTransform(0,0,1.5,0.086,45);

	this.instance_3 = new lib.glitter_inner_sphere();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter = function() {
	this.initialize();

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.reflect_wrapper_196 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_196();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-426.1,342,852.4);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50));

	// mc
	this.lux = new lib.glitter();

	this.timeline.addTween(cjs.Tween.get(this.lux).to({_off:true},1).wait(19).to({alpha:0,_off:false},0).to({scaleX:0.73,scaleY:0.73,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.49)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter_wrapper = function() {
	this.initialize();

	// cjs
	this.instance = new lib.glitter_container_cjs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.sign_effect_3516202_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(423.3,485.6,0.587,0.587);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(336.4,566.2,0.89,0.89);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(620.7,568.6,0.89,0.89);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(588,496,0.89,0.89);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(494.2,508.9,0.645,0.645);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(549.2,544.6,0.616,0.616);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(389,537.2,0.587,0.587);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(620.7,465.3,0.89,0.89);

	this.instance_8 = new lib.glitter_wrapper();
	this.instance_8.setTransform(340.4,460,0.89,0.89);

	// mask
	this.reflect_mask = new lib.reflect_mask_196();
	this.reflect_mask.setTransform(480.6,514.1,0.89,0.89);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAuqAtQIg1gFIiEgOQhxgOiJAEIgJAAQgqAGgUgPQjSAAjRgHIl1gLQhDAAhDADQhFAEgvgQIgJAAIhhAAIgBAEQgjAFgkAAQheAKhlgLQgkgEgkAAQg4AAgYgEIAAAEQhZAFhZAAIgJAAQjCAKjFAIIgBAEQgsAFgsAAIgJAAQguAFgQgXQgngGgGgnQgPhfAGh2QAQg0gChJQgFjNAEjMQAAgFAFgEIgBgJQgOhqAGh+QAQgcAAg0QAAgZALgTIAAgJIAAgSQASgNATgMQADgCAEAAIAAgIQCpgbDNABQAUABAZgCQD4gOEMAHQBZACBZAFIAAgJQAsAAAsAEIABAFQD8AKEIgCQDGgBCwAVQBeALBugEQAoAAAoAFIABAEQDIgEC2ALQAfACAegGQA6gOApAmIAKARQAEAFABAFQASCEgGCZQgHCMAKB2QATD5gJELIAAAIQAFBRgtAbQghAfhDAAQgQAAgSgCgEAfqAngQAoAsAEg9IAAgJQgZAGgTAUgEAJTAmwQgvARgsAWQAHAQAcACQBVAHgZg7QgBgFgDAAIAAAAgEAPzAnXQAUAQAqgKQAFgBgBgBQgKgRgSAAQgQAAgWANgEAsPAgsIgBAHQgMAlATAbIAGAKQANAcAEAqQAIBjgpAsQAAAEACAEQAfBGBKAdQgBAOATAAIAEgBQAUgvgIhJQgUivADjHQAAgJgCgBQg4gRhCAAQAAA2AEA1gEAcUAklQAHArAJAmIACAIQAjgOAegbQAmgjgqgSQgIgDgEgFQgQgSgPAAQgUAAgQAfgEAMeAgaQAkAaATAtQAUAxgfApQgEAEAAAEQAEAjAYgcQASgWAAgvQAAgdgFggQgGgpgTghIgDgHQgbANgaAWgEAFGAjMIAAAJQAUgCASgLQARgMAWgIQAqgQgvgKQgkgIgkgNIAABHgAS0fuQgIA8ALAmQAoAFAVgPQAVgPAagFQAegGATgNQA8gpAghGQApgehEADQiCAGhugPQAYAhgJBBgAZreeQAAAEACADQAkAsAYA4QAIATATACQA6AFAxAJQAJAVABgVQAGhsB+ASQAjAFAMgRQAYggA2ABIAEgFQhQgEhUgCIg/AAIghAAQhmAAhpACgEAlOAenQAOANAFAWQADAJgBAIQgKA9AoAKQBQATgXhrQgBgJgFgDQgcgYg1AAIgVABgAHVeQQhHAGhIAIIAAAjIAAAJQBYAGBIAMQAAgNAEgMQAQg0ghAAIgEABg");
	mask.setTransform(316.4,289.9);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_196();
	this.reflect_wrapper.setTransform(328.4,514.1,0.89,0.89);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(286.4,134.8,384.3,758.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
