(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_2462701 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_2462701_1();

	// image_replace
	this.instance = new lib.replace_image_2462701();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,684.8,800);


// symbols:
(lib.replace_image_2462701 = function() {
	this.initialize(img.replace_image_2462701);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.reflect_inner = function() {
	this.initialize();

	// standard
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,297.1,0.1,-297).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.reflect_mask_2462701 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158.5,-61.7,317,123.4);


(lib.glitter_inner_sphere = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.4).s().p("AlhFhQiSiSAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.reflect = function() {
	this.initialize();

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.setTransform(0,-279.65,1.1245,1.1245,0,0,-20.0003);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-395,317,790.1);


(lib.reflect_container_cjs_2462701 = function(mode,startPosition,loop) {
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
	this.preview.setTransform(-0.5,-0.1,1,1,0,0,0,-0.5,-0.1);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preview}]}).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.setTransform(-0.5,456.85,1,1,0,0,0,-0.5,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-0.1,y:-0.1},9,cjs.Ease.get(-1)).to({regY:0.1,y:-456.65},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-851.8,317,1703.6);


(lib.glitter_inner = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.setTransform(0,0.05,1.5,0.0862,-45);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.setTransform(0,0,0.3342,0.3342);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.setTransform(0,-0.05,1.5,0.0862,45);

	this.instance_3 = new lib.glitter_inner_sphere();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


(lib.glitter = function() {
	this.initialize();

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


(lib.reflect_wrapper_2462701 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_2462701();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-395,317,790.1);


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

	this.timeline.addTween(cjs.Tween.get(this.lux).to({_off:true},1).wait(19).to({alpha:0,_off:false},0).to({scaleX:0.7333,scaleY:0.7333,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.49)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


(lib.glitter_wrapper = function() {
	this.initialize();

	// cjs
	this.instance = new lib.glitter_container_cjs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


(lib.sign_effect_2462701_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(472,589.75,0.9257,0.9257,0,0,0,0.3,0.3);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(626.35,559.4,0.9257,0.9257,0,0,0,0.3,0.1);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(340.7,521.1,0.9257,0.9257,0,0,0,0.1,0.1);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(406.3,555.85,0.6708,0.6708,0,0,0,0.2,0.2);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(324.65,597.65,0.6408,0.6408,0,0,0,0.1,0.3);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(540.15,584.95,0.6108,0.6108,0,0,0,0.4,0.4);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(516.65,525.8,0.9257,0.9257,0,0,0,0.1,0.1);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(397.35,625.15,0.9257,0.9257,0,0,0,0.2,0.3);

	// mask
	this.reflect_mask = new lib.reflect_mask_2462701();
	this.reflect_mask.setTransform(474.5,575.85);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(316.508,318.7853);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_2462701();
	this.reflect_wrapper.setTransform(316,575.85);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(320,400,358,570.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
