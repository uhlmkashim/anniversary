(function (lib, img, cjs) {
 
var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_2562702 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_2562702_1();

	// image_replace
	this.instance = new lib.replace_image_2562702();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,684.8,800);


// symbols:
(lib.replace_image_2562702 = function() {
	this.initialize(img.replace_image_2562702);
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


(lib.reflect_mask_2562702 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.4,-62.4,324.9,124.8);


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
	this.lighter_tgt.setTransform(0,-286.6,1.1525,1.1525,0,0,-20.0002);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-404.8,324.9,809.7);


(lib.reflect_container_cjs_2562702 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-0.5,467.4,1,1,0,0,0,-0.5,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-0.1,y:-0.1},9,cjs.Ease.get(-1)).to({regY:0.1,y:-467.15},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-872.1,324.9,1744.3000000000002);


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


(lib.reflect_wrapper_2562702 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_2562702();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-404.8,324.9,809.7);


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


(lib.sign_effect_2562702_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(452.5,587.7,0.9725,0.9725,0,0,0,0.5,0.5);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(614.65,555.7,0.9725,0.9725,0,0,0,0.5,0.2);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(314.45,515.55,0.9725,0.9725,0,0,0,0.2,0.3);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(386.35,551.05,0.7048,0.7048,0,0,0,0.5,0.4);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(297.65,595.85,0.6733,0.6733,0,0,0,0.3,0.4);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(523.95,582.6,0.6418,0.6418,0,0,0,0.5,0.6);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(499.45,520.5,0.9725,0.9725,0,0,0,0.3,0.3);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(374,624.85,0.9725,0.9725,0,0,0,0.3,0.5);

	// mask
	this.reflect_mask = new lib.reflect_mask_2562702();
	this.reflect_mask.setTransform(452.3,572.15);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(307.3834,317.265);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_2562702();
	this.reflect_wrapper.setTransform(289.85,572.15);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(320,400,348.70000000000005,577.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
