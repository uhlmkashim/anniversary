(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_87 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_87_1();

	// image_replace
	this.instance = new lib.replace_image_87();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.4,0,667.4,800);


// symbols:
(lib.replace_image_87 = function() {
	this.initialize(img.replace_image_87);
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


(lib.reflect_mask_87 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("A7AICQAzg6BZgVQBlgYBcgcIB2giQAugMglghQgFAAgEgCQgUgJgBgdQgFAAAAgBQgbh1ACiOQAOgXATgWQACgDAFAAIAAgKQA6gLAwgaQAEgDADgJQACgGAFgFIAAgKIAAhGIAAg8QAAgKgBAAQg2gFguANQhPAWhPAZQg+ATg7gYQgFAAgEgCQg4gXAPhfQAagcAsgLIAKgBIAAgKQBwgXBsgZQA+gOAsggQARgMAIgXQAHgWAWgJQA6gpAxA2QAPAPASAMQB3gVCDgIIAKgBIAAgKQAtAAAsAFIABAFQAtAPAnAQQAVAJAZAAQBNgCA/AMQAMhcBggQQAhgFAfgMQB0gtBaAyQA4A2gUB+IgDALQgbBGA2gLQAJiCBughIAMgFQBKgkBSAfQAXAIAUAPQA8gFAxgRQA7gVA0AhQArAqgIBjQAAAEAFAFQAbAYANAkQAIB8gTBYQgKAsAOAcQAiBBgvAnQAQAiBAgGQBQgIBPgFQAmgCANARQAnAFAWgNQAEgCAFAAIAAgKIAAgKQAagrgBhLIAFAAIAAgKQAPhuhBgeQhCAFgrAbQgGADgFAAQhxADANiAQAtgxAvgwQADgDAFAAQAAgTAKgLIAFgFQg7gfAEheQA6hbCOgEIALACQBKASASBDQANAxgLAfQgMAlgXAVQAAAFgCAEQgDAGgFAFQAOA+A0AaQAEACADAJQACAGAFAFQBNBxghCwQgMBCAIAhQAbATArgBQA1gBAmAHQBVAPBdAGIAVAAQCDgGAJBvQgGAdgSARQg5Axh3gOQh/gOh7gQQhQgLgyAKQgFAAgEACIgMAHQgWANgOAYQg1BZhQBCQgFAEgGABQiBAOAUiMQAkgrAcgyQABgCgGgBQgOgEgPAAIgKAAIjwAAQhzAAhzACQgmABghACQkeAOkFAeQkKAfj1ArQiFAYh2AYQj7A0jjBDQg3AfhDAMQgYAEgUAAQhnAAAJh1gArPlnQhUAPhVAJQg8AHgoAYQgIBTAPA6QADAJABAAQBQAJAxAfQBAAzgJB1QgIBngbBXQAjAAAigGQAagEAZgBQBigGgmgrQgpg5Alg3QBSh6BmhoQgIggg1AJQgsAIgVgRQg1gqAdhMQAVgogogNQgQgGgXAAQgTAAgYAEgAnyCkQgHAqArgUQAVgJAqgCQA2gCA5gJQA2gFgUglQgEgIgFgEQgxglgQhFQAAgEgCgDIgDgGQhZBQhMBdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172.9,-63.1,346.1,126.4);


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
	this.lighter_tgt.setTransform(0,-305.2,1.228,1.228,0,0,-19.9);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-431.1,346.1,862.5);


(lib.reflect_container_cjs_87 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-0.3,494.6,1,1,0,0,0,-0.4,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:0,y:0},9,cjs.Ease.get(-0.99)).to({regY:0.1,y:-494.1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-431.1,346.1,862.5);


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


(lib.reflect_wrapper_87 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_87();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-431.1,346.1,862.5);


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


(lib.sign_effect_87_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(284.7,565.7);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(201.8,596.2,1,1,-0.6);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(28.7,590.2);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(232,642.2,0.725,0.725);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(16.1,675.6,0.692,0.692);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(345.1,645.8,0.66,0.66);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(90,739,1,1,0,0,0,-0.9,102);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(126.4,577.6);

	// mask
	this.reflect_mask = new lib.reflect_mask_87();
	this.reflect_mask.setTransform(181,619.5);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaYAzgQAzg7BYgVQBmgYBcgbIB2giQAugNgmggQgEAAgFgCQgTgJgBgdQgGAAAAgBQgbh1ACiOQAPgaASgWQACgCAGAAIAAgKQA6gMAwgaQADgCADgJQACgGAFgFIAAgKIAAhGIAAg8QAAgKAAAAQg2gFguAMQhPAXhPAYQg+AUg7gYQgFAAgEgCQg4gYAOheQAbgdAsgKIAJgBIAAgKQBxgXBsgZQA+gPAsggQARgMAHgXQAIgWAVgIQA7gqAxA2QAPAQARAMQB4gVCDgJIAKAAIAAgKQAsAAAtAFIABAFQAtAOAmARQAVAJAZgBQBNgBBAAMQAMhdBggPQAhgFAegMQB1guBZAzQA5A2gVB9IgCAMQgbBGA2gLQAJiDBtggIAMgFQBLgkBSAeQAXAJATAPQA9gFAxgSQA6gUA1AhQArAqgIBiQgBAFAGAEQAbAYANAlQAIB8gTBYQgKAsAOAbQAiBEgvAnQAQAhBAgGQBQgHBPgFQAlgCAOARQAnAEAWgMQADgCAGAAIAAgKIAAgKQAagsgChMIAGAAIAAgKQAPhvhCgdQhBAEgsAbQgGAEgEAAQhxADANiAQAtgyAvgwQADgCAFAAQAAgUAJgKIAGgFQg7ggAEhdQA6hcCOgDIALABQBKASARBEQAOAxgLAfQgMAlgXAVQgBAFgCAEQgCAGgGAFQAOA9A1AbQADACAEAJQACAGAEAFQBNBxggCyQgNBCAJAhQAaASAsgBQA1gBAmAHQBUAQBeAFIAVAAQCCgFAJBvQgFAdgSAQQg5Axh4gNQh/gOh7gRQhPgKgyAKQgGAAgDACIgMAGQgWAOgOAYQg1BZhQBBQgFAFgGAAQiBAPATiMQAlgsAcgyQAAgBgGgCQgNgDgPAAIgKAAIjwAAQh0AAhzACQglAAghACQkeAOkFAfQkKAej1AsQiFAXh2AZQj7A0jjBDQg3AehDANQgYAEgUAAQhnAAAJh1gEgKnAl1QhUAPhWAJQg7AGgpAZQgHBSAPA6QADAKAAAAQBQAJAyAfQBAAygJB3QgIBngbBYQAiAAAjgGQAZgEAagCQBigFgmgrQgpg6Akg3QBTh8BmhnQgIghg1AKQgsAHgVgRQg2gqAdhLQAWgogogOQgRgGgWAAQgUAAgXAFgEgHKAuCQgIAqAsgUQAVgKAqgBQA2gDA5gIQA1gGgTglQgFgHgEgEQgxgmgRhEQAAgFgCgEIgCgGQhZBRhMBeg");
	mask.setTransform(177,341.3);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_87();
	this.reflect_wrapper.setTransform(8,619.5);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.4,188.3,409.5,862.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
