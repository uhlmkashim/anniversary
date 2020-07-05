(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_3538602 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_3538602_1();

	// image_replace
	this.instance = new lib.replace_image_3538602();
	this.instance.setTransform(0,-0.1);

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.7,-0.1,675.7,800);


// symbols:
(lib.replace_image_3538602 = function() {
	this.initialize(img.replace_image_3538602);
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


(lib.reflect_mask_3538602 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("AVTKXIg2gFIiGgOQhzgOiKADIgJABQgrAGgUgQQjVAAjUgGIl7gMQhCAAhDADQhGAEgvgQIgJAAIhkAAIAAAFQgkAEgkAAQhgALhmgLQglgEgkAAQg5AAgYgFIAAAFQhaAEhaAAIgJABQjGAKjIAHIAAAFQgtAEgtAAIgJABQguAFgRgYQgngGgGgnQgPhhAGh3QAQg1gChKQgFjPAEjOQAAgFAFgEIgBgJQgOhrAGiAQAQgdAAg0QAAgZALgUIAAgJIAAgSQASgOATgLQADgCAFAAIAAgJQCsgbDPABQAUABAZgCQD8gOEQAHQBaACBaAFIAAgJQAtAAAtAEIAAAFQD/AKELgCQDJgCCyAWQBfALBxgDQAoAAAoAEIABAFQDLgFC5AMQAfACAfgHQA7gNApAmQAFAJAFAIQAEAFABAGQASCFgGCbQgGCOAJB4QAUD6gJEPIAAAJQAEBRgtAbQghAghEAAQgQAAgTgCgAGFEiQApAsAEg+IAAgJQgZAHgUAUgAwkDyQgvARgtAWQAHAQAcACQBWAHgYg8QgCgEgCAAIgBAAgAp+EZQAVAQAqgKQAFgBgBgCQgKgQgSAAQgQAAgXANgAS1iWQABAEgBADQgNAmATAbIAHAKQANAdAEAoQAIBlgqAsQAAAEACAEQAgBHBLAdQgBAPATgBIAEAAQAVgwgJhKQgTiwADjJQAAgJgDgBQg4gRhEAAQAAA2AEA2gACtBlQAGArAJAnIADAIQAjgPAegbQAngjgrgTQgHgDgEgFQgRgSgPAAQgUAAgQAggAtWioQAlAaATAtQAUAygfAqQgFAEABACQAEAkAYgdQATgUAAgwQAAgdgFggQgHgrgTghIgDgHQgbANgbAXgA01ALIAAAJQAVgDASgMQARgJAXgIQAqgRgvgKQglgIglgNIAABHgAm6jVQgIA9ALAmQApAFAVgPQAWgOAagGQAegGAUgNQA8gqAhhHQAogfhDAEQiFAFhvgOQAYAhgJBCgAABkmQAAAEADADQAkAsAYA5QAIAUAUABQA6AGAyAJQAJAVABgVQAGhuCAATQAkAFAMgSQAXggA3ABIAFgFQhRgEhWgCIg/gBIgiAAQhoAAhqADgALukdQAOANAGAWQADAKgCAIQgJA9AoAKQBSAUgYhtQgBgIgFgEQgdgYg0AAIgXABgAykk1IiRAPIAAAkIABAJQBZAFBJANQAAgOAEgMQAQg0ghAAIgFAAg");
	this.shape.setTransform(0,0,0.99,0.99);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152.7,-65.8,305.6,131.9);


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
	this.lighter_tgt.setTransform(0,-270.2,1.087,1.087,0,0,-19.9);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-381.7,306.4,763.6);


(lib.reflect_container_cjs_3538602 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-0.3,448.6,1,1,0,0,0,-0.4,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:0,y:0},9,cjs.Ease.get(-0.99)).to({regY:0.1,y:-448.2},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-381.7,306.4,763.6);


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


(lib.reflect_wrapper_3538602 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_3538602();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-381.7,306.4,763.6);


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


(lib.sign_effect_3538602_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(105.1,568.2,0.66,0.66);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(20.4,649.7);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(305,652.6);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(270.5,576.9);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(176.4,593.2,0.725,0.725);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(233.8,627.7,0.692,0.692);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(71,621.3,0.66,0.66);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(304.3,547.7);

	this.instance_8 = new lib.glitter_wrapper();
	this.instance_8.setTransform(22.3,542.5);

	// mask
	this.reflect_mask = new lib.reflect_mask_3538602();
	this.reflect_mask.setTransform(163.1,597.3);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAV5AzyIg1gFIiFgPQhygOiJAEIgJAAQgqAHgUgQQjTAAjRgHIl4gLQhDAAhBADQhFAEgvgQIgJAAIhiAAIgBAFQgjAEgjAAQhfAKhmgKQgkgEgkAAQg4AAgYgFIAAAFQhZAEhZAAIgJABQjEAJjGAIIAAAEQgsAFgtAAIgJAAQguAGgQgYQgngGgGgnQgPhgAGh2QAQg0gChJQgFjOAEjNQAAgFAFgEIgBgJQgOhqAGh+QAQgeAAgzQAAgZAKgTIAAgJIAAgSQATgOATgLQACgCAFAAIAAgJQCqgbDOACQATAAAZgCQD6gOEMAIQBaACBZAEIAAgJQAtAAAsAFIAAAEQD8AKEJgCQDGgBCxAVQBeALBwgDQAnAAAoAEIABAFQDJgFC3AMQAfACAegHQA7gNApAmQAEAJAGAIQADAFABAFQASCEgGCZQgGCNAJB3QAUD6gJEMIAAAIQAEBRgsAbQghAfhEAAQgQAAgSgBgEAG1AuAQApAsADg+IAAgIQgYAGgUAUgEgPmAtQQguARgtAWQAHAQAcACQBVAHgYg7QgCgFgCAAIgBAAgEgJEAt3QAVAQApgKQABAAABAAQABgBABAAQAAgBAAAAQAAAAAAgBQgKgQgSAAQgQAAgWANgEATdAnKQAAAFgBADQgMAlATAaIAGALQANAcAEAqQAIBkgpAsQAAAEACAEQAfBGBKAdQgBAOAUgBIADAAQAVgvgJhJQgTixADjHQAAgJgDgBQg3gRhDAAQAAA2AEA1gEADfArFQAGArAJAmIACAIQAjgPAegbQAngigrgTQgHgDgEgFQgRgSgPAAQgTAAgQAggEgMaAm5QAlAZASAtQAUAygfApQgEAEAAAEQAFAjAXgcQATgWAAgvQAAgdgFggQgGgqgTghIgEgHQgaANgbAXgEgT0ApsIAAAIQAUgCATgMQARgLAWgIQApgRgugKQgkgIglgMIAABIgEgGCAmMQgIA8ALAmQAoAFAWgPQAVgOAagFQAdgGAUgOQA8gpAghHQAogehDAEQiDAFhugOQAYAhgJBBgEAA1Ak8QAAAEACADQAkAsAYA4QAIATATABQA6AGAxAKQAJAUACgVQAFhtB/ATQAkAFALgRQAYggA2ABIAFgFQhRgEhUgCIg/gBIgiAAQhmAAhpADgEAMaAlFQAOAMAGAXQADAJgCAIQgJA9AoAKQBQATgXhrQgBgJgFgDQgdgYg0AAIgWABgEgRkAktIiQAPIAAAjIABAJQBYAGBIAMQAAgNAEgMQAQg0ghAAIgEAAg");
	mask.setTransform(157.9,331.6);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_3538602();
	this.reflect_wrapper.setTransform(9.9,597.3);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.7,215.5,396.9,763.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
