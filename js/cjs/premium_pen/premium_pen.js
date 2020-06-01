(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.break_l_c01 = function() {
	this.initialize(img.premium_pen_break_l_c01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.flare = function() {
	this.initialize(img.premium_pen_flare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,931,504);


(lib.icon = function() {
	this.initialize(img.premium_pen_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,254);


(lib.icon_base = function() {
	this.initialize(img.premium_pen_icon_base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,508,502);


(lib.icon_glitter1 = function() {
	this.initialize(img.premium_pen_icon_glitter1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,181);


(lib.icon_glitter2 = function() {
	this.initialize(img.premium_pen_icon_glitter2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,81);


(lib.icon_pen = function() {
	this.initialize(img.premium_pen_icon_pen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,482);


(lib.icon_trail = function() {
	this.initialize(img.premium_pen_icon_trail);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,166);


(lib.pen = function() {
	this.initialize(img.premium_pen_pen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,439);


(lib.pen_blur = function() {
	this.initialize(img.premium_pen_pen_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,467,461);


(lib.replace_card1 = function() {
	this.initialize(img.premium_pen_replace_card1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.replace_card2 = function() {
	this.initialize(img.premium_pen_replace_card2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.star_rainbow = function() {
	this.initialize(img.premium_pen_star_rainbow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,792,774);


(lib.starParticle = function() {
	this.initialize(img.premium_pen_starParticle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,272);// helper functions:

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


(lib.lilght = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzhX8MAAAgv3MAnDAAAMAAAAv3g");
	this.shape.setTransform(124.975,153.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lilght, new cjs.Rectangle(0,0,250,306.5), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0xZAMAAAgx/MApjAAAMAAAAx/g");
	this.shape.setTransform(133,159.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0,0,266,320), null);


(lib.break_l_c01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.break_l_c01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.break_l_c01_1, new cjs.Rectangle(0,0,240,300), null);


(lib.twinkle2_basse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAAIBXgDIBWADIhXAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAAIADhWIAEBXIgEBWg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.twinkle2_basse, new cjs.Rectangle(-8.7,-8.7,17.4,17.4), null);


(lib.trail_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.starParticle();
	this.instance.parent = this;
	this.instance.setTransform(-77.85,-68.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trail_core, new cjs.Rectangle(-77.8,-68.4,149.1,136), null);


(lib.text_window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().rr(-116,-16,232,32,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_window, new cjs.Rectangle(-116,-16,232,32), null);


(lib.star_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.instance = new lib.star_rainbow();
	this.instance.parent = this;
	this.instance.setTransform(-198,-193.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_inner, new cjs.Rectangle(-198,-193.5,396,387), null);


(lib.shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhBnBH4MAAAiPvMCDPAAAMAAACPvgAyvXcMAlfAAAMAAAgu3MglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shield, new cjs.Rectangle(-420,-460,840,920), null);


(lib.pointGlitter2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-34.6,69.30000000000001,69.30000000000001);


(lib.pen_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.pen();
	this.instance.parent = this;
	this.instance.setTransform(-86.75,-109.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pen_inner, new cjs.Rectangle(-86.7,-109.7,173.5,219.5), null);


(lib.pen_blur_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.pen_blur();
	this.instance.parent = this;
	this.instance.setTransform(-116.75,-105.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pen_blur_1, new cjs.Rectangle(-116.7,-105.2,233.5,230.5), null);


(lib.particle_flash_guide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = 0*/
		
		this.visible = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape.setTransform(0.575,-0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6600FF").ss(1,1,1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
	this.shape_1.setTransform(71.375,-89.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.particle_flash_guide, new cjs.Rectangle(-5.2,-179.6,149,185.2), null);


(lib.particle_flash_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
	this.shape.setTransform(-0.25,0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
	this.shape_1.setTransform(-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-5.7,12.4,12.5);


(lib.icon_trail_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_trail();
	this.instance.parent = this;
	this.instance.setTransform(-100.75,-41.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_trail_1, new cjs.Rectangle(-100.7,-41.5,201.5,83), null);


(lib.icon_pen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_pen();
	this.instance.parent = this;
	this.instance.setTransform(-100.25,-110.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_pen_1, new cjs.Rectangle(-100.2,-110.5,240.5,241), null);


(lib.icon_glitter2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_glitter2();
	this.instance.parent = this;
	this.instance.setTransform(-20.75,-20.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_glitter2_1, new cjs.Rectangle(-20.7,-20.2,41.5,40.5), null);


(lib.icon_glitter1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_glitter1();
	this.instance.parent = this;
	this.instance.setTransform(-44.75,-45.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_glitter1_1, new cjs.Rectangle(-44.7,-45.2,89.5,90.5), null);


(lib.icon_base_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_base();
	this.instance.parent = this;
	this.instance.setTransform(-127,-125.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_base_1, new cjs.Rectangle(-127,-125.5,254,251), null);


(lib.icon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-63.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_1, new cjs.Rectangle(-63.5,-63.5,127,127), null);


(lib.flare_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.flare();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare_inner, new cjs.Rectangle(0,0,465.5,252), null);


(lib.fader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fader, new cjs.Rectangle(-120,-150,240,300), null);


(lib.efc_カードキラリ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0WUsIAAg8MAotAAAIAAA8gA0WSQIAAlCMAotAAAIAAFCgA0WFDIAA3CMAotAAAIAAXCgA0Wy3IAAh0MAotAAAIAAB0g");
	this.shape.setTransform(0.025,46.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.efc_カードキラリ, new cjs.Rectangle(-130.3,-85.7,260.70000000000005,264.8), null);


(lib.cursor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgngiIBPAAIgoBFg");
	this.shape.setTransform(4,3.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cursor2, new cjs.Rectangle(-38,-32.8,76,65.69999999999999), null);


(lib.replace_sign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,928.4);


(lib.replace_card_before = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replace
	this.instance = new lib.replace_card1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace_card_before, new cjs.Rectangle(0,0,240,300), null);


(lib.rare_effect_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ARLxKQHHHHAAKDQAAKEnHHHQnHHHqEAAQqDAAnHnHQnHnHAAqEQAAqDHHnHQHHnHKDAAQKEAAHHHHg");
	this.shape.setTransform(0,-155.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rare_effect_circle, new cjs.Rectangle(-157.9,-313.3,315.8,315.8), null);


(lib.glitter_inner_sphere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.4).s().p("AlhFhQiSiSAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner_sphere, new cjs.Rectangle(-50,-50,100,100), null);


(lib.glitter_inner_sphere_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,41.6).s().p("AkeEeQh2h2AAioQAAinB2h3QB3h2CnAAQCoAAB2B2QB3B3AACnQAACoh3B2Qh2B3ioAAQinAAh3h3g");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner_sphere_1, new cjs.Rectangle(-40.5,-40.5,81.1,81.1), null);


(lib.window_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_window
	this.instance = new lib.text_window();
	this.instance.parent = this;
	this.instance.setTransform(0,110,1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.04},3,cjs.Ease.get(1)).wait(1).to({scaleY:1},0).wait(25).to({scaleY:0.925},0).to({scaleY:1.2002},1).to({scaleY:1},4).wait(15).to({scaleY:1.1},1,cjs.Ease.get(1)).to({scaleY:0.1},3,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,0,232,129.2);


(lib.twinkle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.twinkle2_basse();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.8054,scaleY:0.8054,rotation:91.5939,x:-11.9721,y:-42.1077,alpha:0.7585},0).wait(1).to({scaleX:0.666,scaleY:0.666,rotation:157.2266,x:-6.7162,y:-74.2713,alpha:0.5854},0).wait(1).to({scaleX:0.5573,scaleY:0.5573,rotation:208.4219,x:-2.0098,y:-95.5814,alpha:0.4504},0).wait(1).to({scaleX:0.4695,scaleY:0.4695,rotation:249.7454,x:-0.7395,y:-111.6874,alpha:0.3415},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,rotation:283.4892,x:-1.5139,y:-127.1119,alpha:0.2525},0).wait(1).to({scaleX:0.3396,scaleY:0.3396,rotation:310.9151,x:-3.2991,y:-140,alpha:0.1802},0).wait(1).to({scaleX:0.2933,scaleY:0.2933,rotation:332.7003,x:-5.337,y:-149.9418,alpha:0.1228},0).wait(1).to({scaleX:0.2584,scaleY:0.2584,rotation:349.1061,x:-7.1425,y:-157.1169,alpha:0.0795},0).wait(1).to({scaleX:0.2353,scaleY:0.2353,rotation:360,x:-8.4,y:-161.6,alpha:0.0508},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-163.6,27.3,172.5);


(lib.twinkle1_basse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.glitter_inner_sphere();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,0.05,0.8623,0.0495,-45,0,0,-0.1,0.7);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.1921,0.1921);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.05,-0.05,0.8623,0.0495,45,0,0,-0.1,-0.7);

	this.instance_3 = new lib.glitter_inner_sphere();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.5749,0.5749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twinkle1_basse, new cjs.Rectangle(-32.2,-32.2,64.5,64.5), null);


(lib.twinkle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.twinkle1_basse();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.8218,scaleY:0.8218,x:-11.9751,y:-40.7655,alpha:0.7787},0).wait(1).to({scaleX:0.691,scaleY:0.691,x:-7.204,y:-72.5006,alpha:0.6164},0).wait(1).to({scaleX:0.5874,scaleY:0.5874,x:-2.2084,y:-94.3204,alpha:0.4878},0).wait(1).to({scaleX:0.5025,scaleY:0.5025,x:-0.7435,y:-110.6677,alpha:0.3824},0).wait(1).to({scaleX:0.4318,scaleY:0.4318,x:-1.4714,y:-126.6792,alpha:0.2948},0).wait(1).to({scaleX:0.373,scaleY:0.373,x:-3.3759,y:-140.4317,alpha:0.2217},0).wait(1).to({scaleX:0.3245,scaleY:0.3245,x:-5.6897,y:-151.4305,alpha:0.1615},0).wait(1).to({scaleX:0.2854,scaleY:0.2854,x:-7.8701,y:-159.7463,alpha:0.113},0).wait(1).to({scaleX:0.2556,scaleY:0.2556,x:-9.571,y:-165.3433,alpha:0.076},0).wait(1).to({scaleX:0.2353,scaleY:0.2353,x:-11.1,y:-169.2,alpha:0.0508},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-176.7,68.8,209.1);


(lib.star_sign_accentuator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* ../:c = 10;*/
		
		c = 10;
	}
	this.frame_1 = function() {
		//ややこしいのでコメントアウトのまま
		
		/* tellTarget( "../../" ) {
			bx = 40;
			by = 30;
			for( i = 0; i < 3; i++ ) {
				n = "p" add c;
				duplicateMovieClip( "pa", n, c );
				eval( "/" add n )._x = sign_accentuator.pb._x + random( bx ) - bx / 2 + sign_accentuator._x;
				eval( "/" add n )._y = sign_accentuator.pb._y + random( by ) - by / 2 + sign_accentuator._y;
				eval( "/" add n )._xscale = eval( "/" add n )._yscale = random( 50 ) + sign_accentuator.pb._xscale * 4;
				c++;
			}
		}*/
	}
	this.frame_2 = function() {
		/* gotoAndPlay( 2 );*/
		
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// star
	this.instance = new lib.star_inner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-193.5,396,387);


(lib.particle_flash2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		/* stop()*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(15));

	// レイヤー_3
	this.instance = new lib.particle_flash_guide();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 0, 0, 0)];
	this.instance.cache(-7,-182,153,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// レイヤー_2
	this.instance_1 = new lib.particle_flash_core();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.95,-4.05,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.3,regY:0.5,scaleX:0.5693,scaleY:0.5693,rotation:-174.9492,x:63.5,y:-63.95,alpha:0.7229},0).wait(1).to({scaleX:0.5097,scaleY:0.5097,rotation:-119.2289,x:69.8,y:-92.55,alpha:0.6395},0).wait(1).to({scaleX:0.4735,scaleY:0.4735,rotation:-85.4829,x:73.05,y:-105.4,alpha:0.5889},0).wait(1).to({scaleX:0.4484,scaleY:0.4484,rotation:-61.9876,x:75,y:-112.55,alpha:0.5538},0).wait(1).to({scaleX:0.4299,scaleY:0.4299,rotation:-44.682,x:76.65,y:-118.2,alpha:0.5278},0).wait(1).to({scaleX:0.4159,scaleY:0.4159,rotation:-31.6108,x:78.1,y:-122.6,alpha:0.5083},0).wait(1).to({scaleX:0.4052,scaleY:0.4052,rotation:-21.661,x:79.25,y:-126,alpha:0.4934},0).wait(1).to({scaleX:0.3972,scaleY:0.3972,rotation:-14.1306,x:80.25,y:-128.65,alpha:0.4821},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,rotation:-8.5439,x:81.05,y:-130.7,alpha:0.4737},0).wait(1).to({scaleX:0.3869,scaleY:0.3869,rotation:-4.5615,x:81.6,y:-132.1,alpha:0.4678},0).wait(1).to({scaleX:0.3841,scaleY:0.3841,rotation:-1.9317,x:82,y:-133.05,alpha:0.4638},0).wait(1).to({scaleX:0.3826,scaleY:0.3826,rotation:-0.4617,x:82.25,y:-133.6,alpha:0.4616},0).wait(1).to({regX:0,regY:0,scaleX:0.382,scaleY:0.382,rotation:0,x:82.45,y:-134,alpha:0.4609},0).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-178.7,148.5,184.7);


(lib.particle_flash1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		r=random(3)+2
		gotoAndPlay(r)
		*/
		
		this.r = Math.floor(Math.random() * 3 +2);
		this.gotoAndPlay(this.r);
	}
	this.frame_21 = function() {
		/* stop()*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));

	// レイヤー_3
	this.instance = new lib.particle_flash_guide();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// レイヤー_2
	this.instance_1 = new lib.particle_flash_core();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.95,-4.05,0.7347,0.7347);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.3,regY:0.5,scaleX:0.5967,scaleY:0.5967,rotation:140.8707,x:62.05,y:-58.8,alpha:0.8319},0).wait(1).to({scaleX:0.5493,scaleY:0.5493,rotation:189.3068,x:69,y:-89.15,alpha:0.774},0).wait(1).to({scaleX:0.5163,scaleY:0.5163,rotation:222.9188,x:73.15,y:-105.8,alpha:0.7339},0).wait(1).to({scaleX:0.4911,scaleY:0.4911,rotation:248.676,x:76.1,y:-115.9,alpha:0.7032},0).wait(1).to({scaleX:0.4709,scaleY:0.4709,rotation:269.3198,x:78.9,y:-124.25,alpha:0.6785},0).wait(1).to({scaleX:0.4543,scaleY:0.4543,rotation:286.2744,x:81.55,y:-131.4,alpha:0.6583},0).wait(1).to({scaleX:0.4404,scaleY:0.4404,rotation:300.3959,x:84.35,y:-137.6,alpha:0.6415},0).wait(1).to({scaleX:0.4288,scaleY:0.4288,rotation:312.2476,x:86.65,y:-142.35,alpha:0.6273},0).wait(1).to({scaleX:0.4191,scaleY:0.4191,rotation:322.2242,x:88.85,y:-146.2,alpha:0.6154},0).wait(1).to({scaleX:0.4108,scaleY:0.4108,rotation:330.6158,x:90.85,y:-149.45,alpha:0.6054},0).wait(1).to({scaleX:0.404,scaleY:0.404,rotation:337.643,x:92.7,y:-152.15,alpha:0.597},0).wait(1).to({scaleX:0.3982,scaleY:0.3982,rotation:343.4783,x:94.3,y:-154.4,alpha:0.59},0).wait(1).to({scaleX:0.3936,scaleY:0.3936,rotation:348.2599,x:95.7,y:-156.2,alpha:0.5843},0).wait(1).to({scaleX:0.3898,scaleY:0.3898,rotation:352.1005,x:96.9,y:-157.65,alpha:0.5797},0).wait(1).to({scaleX:0.3869,scaleY:0.3869,rotation:355.0937,x:97.85,y:-158.75,alpha:0.5762},0).wait(1).to({scaleX:0.3847,scaleY:0.3847,rotation:357.3179,x:98.6,y:-159.55,alpha:0.5735},0).wait(1).to({scaleX:0.3832,scaleY:0.3832,rotation:358.8401,x:99.1,y:-160.1,alpha:0.5717},0).wait(1).to({scaleX:0.3823,scaleY:0.3823,rotation:359.7175,x:99.4,y:-160.4,alpha:0.5706},0).wait(1).to({regX:0,regY:0,scaleX:0.382,scaleY:0.382,rotation:360,x:99.8,y:-160.55,alpha:0.5703},0).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-178.7,148.5,184.7);


(lib.particle_flash_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.particle_flash2();
	this.instance.parent = this;
	this.instance.setTransform(-3.7,44.05,0.8585,0.8585,-173.2889);

	this.instance_1 = new lib.particle_flash2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,24.65,0.5292,0.5292,0,-143.2543,36.7457);

	this.instance_2 = new lib.particle_flash2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.15,26.5,0.7527,0.5292,0,-164.9709,40.6843);

	this.instance_3 = new lib.particle_flash1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26.55,10.85,0.8544,0.5085,0,-124.1512,76.2156,-59.9,-3.9);

	this.instance_4 = new lib.particle_flash1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12,28,0.6032,0.6714,0,102.0919,76.0499);

	this.instance_5 = new lib.particle_flash1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24,22,0.6032,0.6032,154.5512);

	this.instance_6 = new lib.particle_flash2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(10,40,0.67,0.5378,0,-151.6456,57.8841);

	this.instance_7 = new lib.particle_flash1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(36,16.45,1.1194,1.0589,0,-118.0587,42.7302);

	this.instance_8 = new lib.particle_flash1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-4.25,24.65,0.5292,0.8921,-178.5141);

	this.instance_9 = new lib.particle_flash2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2,30.35,1,1,95.2812);

	this.instance_10 = new lib.particle_flash1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(13.6,24.65,0.5924,0.5292,0,155.0554,-24.9453);

	this.instance_11 = new lib.particle_flash2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(2.25,20.95,0.5292,0.5292,134.5199);

	this.instance_12 = new lib.particle_flash2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-40.35,-8.15,0.8585,0.8585,-88.5191);

	this.instance_13 = new lib.particle_flash2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-38,10,0.5292,0.5292,0,-53.2543,126.7457);

	this.instance_14 = new lib.particle_flash2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-12.4,14,0.7527,0.5292,0,-104.9694,100.6856);

	this.instance_15 = new lib.particle_flash1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.85,-20.4,0.8544,0.5085,0,-69.3554,131.0109,-59.8,-3.7);

	this.instance_16 = new lib.particle_flash1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-28,-14,0.6032,0.6714,0,-58.4598,-84.5013);

	this.instance_17 = new lib.particle_flash1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-34,20,0.6032,0.6032,-115.4488);

	this.instance_18 = new lib.particle_flash2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-30,16,0.67,0.5379,0,-103.6061,105.9244);

	this.instance_19 = new lib.particle_flash1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-24,30,1.1194,1.0589,0,-28.0587,132.7302);

	this.instance_20 = new lib.particle_flash1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-14.65,1.75,0.5292,0.5292,-118.5129);

	this.instance_21 = new lib.particle_flash2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-32.05,-3.5,1,1,-135.4791);

	this.instance_22 = new lib.particle_flash1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-14.65,19.6,0.5925,0.5292,0,-72.0065,107.9921);

	this.instance_23 = new lib.particle_flash2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-10.95,8.25,0.6817,1.3397,0,-100.0239,-139.0996);

	this.instance_24 = new lib.particle_flash2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(6.55,-31.7,0.8585,0.8585,-6.5255);

	this.instance_25 = new lib.particle_flash2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(6.55,-31.7,0.5292,0.5292,0,36.7457,-143.2543);

	this.instance_26 = new lib.particle_flash2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-5.3,-14.15,0.7527,0.5292,0,15.0291,-139.3157);

	this.instance_27 = new lib.particle_flash1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(29.35,1.45,0.8544,0.5085,0,20.6446,-138.9891,-59.9,-3.9);

	this.instance_28 = new lib.particle_flash1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(4.65,-27.5,0.6032,0.6714,0,-19.4377,-45.4796);

	this.instance_29 = new lib.particle_flash1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(10,-24,0.6032,0.6032,19.5497);

	this.instance_30 = new lib.particle_flash2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-7.15,-27.65,0.67,0.5378,0,-7.3809,-157.8494);

	this.instance_31 = new lib.particle_flash1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-14,-20,1.1195,1.0589,0,-5.3487,155.4402);

	this.instance_32 = new lib.particle_flash1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(7.1,-12.3,0.5292,0.5292,-28.5129);

	this.instance_33 = new lib.particle_flash2();
	this.instance_33.parent = this;
	this.instance_33.setTransform(8,-18,1,1,-45.4791);

	this.instance_34 = new lib.particle_flash1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-10.75,-12.3,0.5925,0.5292,0,17.9935,-162.0079);

	this.instance_35 = new lib.particle_flash2();
	this.instance_35.parent = this;
	this.instance_35.setTransform(0.6,-8.6,0.5292,0.5292,-45.4801);

	this.instance_36 = new lib.particle_flash2();
	this.instance_36.parent = this;
	this.instance_36.setTransform(50,16,0.8585,0.8585,61.4817);

	this.instance_37 = new lib.particle_flash2();
	this.instance_37.parent = this;
	this.instance_37.setTransform(8.5,6.25,0.5292,0.5292,0,126.7457,-53.2543);

	this.instance_38 = new lib.particle_flash2();
	this.instance_38.parent = this;
	this.instance_38.setTransform(14.45,-1.3,0.7527,0.5292,0,105.0291,-49.3157);

	this.instance_39 = new lib.particle_flash1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(13.3,36.9,0.8544,0.5085,0,110.6446,-48.9891,-59.8,-3.7);

	this.instance_40 = new lib.particle_flash1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(24,-2,0.6032,0.6714,0,70.5623,44.5204);

	this.instance_41 = new lib.particle_flash1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(38,6,0.6032,0.6032,64.5512);

	this.instance_42 = new lib.particle_flash2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(27.95,-3.15,0.67,0.5378,0,73.3557,-77.1152);

	this.instance_43 = new lib.particle_flash1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(28,-12,1.1194,1.0589,0,151.9413,-47.2698);

	this.instance_44 = new lib.particle_flash1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(13.6,24.65,0.5292,0.5292,61.4871);

	this.instance_45 = new lib.particle_flash2();
	this.instance_45.parent = this;
	this.instance_45.setTransform(21,11.9,1,1,23.5401);

	this.instance_46 = new lib.particle_flash1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(12.6,-6.75,0.5925,0.5292,0,107.9935,-72.0079);

	this.instance_47 = new lib.particle_flash2();
	this.instance_47.parent = this;
	this.instance_47.setTransform(8.9,4.6,0.5292,0.5292,44.5199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.particle_flash_container, new cjs.Rectangle(-320.5,-245.4,564,474.70000000000005), null);


(lib.glitter_first_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.pointGlitter2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.0121,0.6227,59.2024);

	this.instance_1 = new lib.pointGlitter2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.0109,0.7287,-30.7981);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,252,237,0.051)","rgba(255,255,255,0)"],[0,0.055,0.761,1],0,0,0,0,0,5.4).s().p("AgZAtQgTgLgFgUQgGgVALgSQALgTAUgFQAVgGASALQATALAFAUQAGAVgLASQgLATgUAFQgIACgGAAQgNAAgMgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_first_inner, new cjs.Rectangle(-18.5,-21.7,37.1,43.4), null);


(lib.flare_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.lighter_tgt = new lib.flare_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.setTransform(-32.75,-23,1,1,0,0,0,200,100);
	this.lighter_tgt.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.lighter_tgt.cache(-2,-2,470,256);

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare_1, new cjs.Rectangle(-232.7,-123,465.5,252), null);


(lib.cursor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* gotoAndPlay( 1 );
		*/
		
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// カーソル
	this.instance = new lib.cursor2();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.5,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:4,regY:3.5,x:4,y:3.55},0).wait(1).to({y:3.85},0).wait(1).to({y:4.5},0).wait(1).to({y:5.3},0).wait(1).to({y:6},0).wait(1).to({y:6.35},0).wait(1).to({regX:0,regY:-0.6,x:0,y:2.4},0).wait(1).to({regX:4,regY:3.5,x:4,y:6.4},0).wait(1).to({y:6.1},0).wait(1).to({y:5.45},0).wait(1).to({y:4.65},0).wait(1).to({y:3.95},0).wait(1).to({y:3.6},0).wait(1).to({regX:0,regY:-0.5,x:0,y:-0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,9.9);


(lib.card_before = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// break_idn
	this.instance = new lib.break_l_c01_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,120,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// card
	this.instance_1 = new lib.replace_card_before();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120,-150,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_before, new cjs.Rectangle(-120,-150,240.1,300.1), null);


(lib.card_after = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// effect
	this.replace_sign = new lib.replace_sign();
	this.replace_sign.name = "replace_sign";
	this.replace_sign.parent = this;
	this.replace_sign.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.replace_sign).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_after, new cjs.Rectangle(0,0,0,0), null);


(lib.replace_card_after = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.break_l_c01_1();
	this.instance.parent = this;
	this.instance.setTransform(120,150,1,1,0,0,0,120,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// replace
	this.instance_1 = new lib.replace_card2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace_card_after, new cjs.Rectangle(0,0,240,300), null);


(lib.rare_effect_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// circle
	this.instance = new lib.rare_effect_circle();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2574,0.2574,0,0,0,0,-155.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.535,scaleY:0.535,alpha:0.6468},0).wait(1).to({scaleX:0.6999,scaleY:0.6999,y:0.1,alpha:0.4371},0).wait(1).to({scaleX:0.8156,scaleY:0.8156,alpha:0.2898},0).wait(1).to({scaleX:0.9007,scaleY:0.9007,alpha:0.1816},0).wait(1).to({scaleX:0.9632,scaleY:0.9632,alpha:0.1021},0).wait(1).to({scaleX:1.0071,scaleY:1.0071,alpha:0.0463},0).wait(1).to({scaleX:1.0339,scaleY:1.0339,y:0.15,alpha:0.0121},0).wait(1).to({regY:-155.3,scaleX:1.0434,scaleY:1.0434,y:0.1,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-164.7,329.5,329.5);


(lib.glitter_innerのコピー = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.glitter_inner_sphere_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.05,1.5,0.0862,-45);

	this.instance_1 = new lib.glitter_inner_sphere_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.3342,0.3342);

	this.instance_2 = new lib.glitter_inner_sphere_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.05,1.5,0.0862,45);

	this.instance_3 = new lib.glitter_inner_sphere_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_innerのコピー, new cjs.Rectangle(-45.4,-45.4,90.9,90.9), null);


(lib.light_effect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// レイヤー_6
	this.instance = new lib.twinkle1_basse();
	this.instance.parent = this;
	this.instance.setTransform(1.45,27.85,0.3183,0.3183,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:0.6,regY:0,scaleX:0.0938,scaleY:0.0938,rotation:-90,y:-28.15,alpha:0.0117},8,cjs.Ease.quadOut).to({_off:true},1).wait(1));

	// レイヤー_5
	this.instance_1 = new lib.twinkle1_basse();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19.8,31.85,0.3427,0.3427,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regX:0.1,regY:-0.4,scaleX:0.1442,scaleY:0.1442,rotation:-104.9994,x:-19.85,y:-20.1,alpha:0.0117},8,cjs.Ease.quadOut).to({_off:true},1).wait(2));

	// レイヤー_4
	this.instance_2 = new lib.twinkle1_basse();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.4,24.55,0.1939,0.1939);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:-0.4,regY:0.3,scaleX:0.1069,scaleY:0.1069,rotation:-60.0015,x:25.45,y:-19.45,alpha:0.0117},8,cjs.Ease.quadOut).to({_off:true},1).wait(3));

	// レイヤー_3
	this.instance_3 = new lib.twinkle1_basse();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.8,28.95,0.4788,0.4788);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({scaleX:0.1685,scaleY:0.1685,rotation:-90,y:-29.45,alpha:0.0117},8,cjs.Ease.quadOut).to({_off:true},1).wait(4));

	// レイヤー_2
	this.instance_4 = new lib.twinkle1_basse();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-19.75,16.95,0.2424,0.2424);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({scaleX:0.1057,scaleY:0.1057,rotation:-59.9977,y:-39.05,alpha:0.0117},8,cjs.Ease.quadOut).to({_off:true},1).wait(5));

	// レイヤー_1
	this.instance_5 = new lib.twinkle1_basse();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.85,17.85,0.5535,0.5535,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0.4,regY:0,scaleX:0.1862,scaleY:0.1862,rotation:-44.9967,x:21.85,y:-45.4,alpha:0.0117},8,cjs.Ease.quadOut).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-53.4,67.4,97.8);


(lib.light_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// twinkle2
	this.instance = new lib.twinkle2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(336.8,321.05);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(34));

	// twinkle1
	this.instance_1 = new lib.twinkle1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(315.25,320.25,0.33,0.33);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(35));

	// twinkle1
	this.instance_2 = new lib.twinkle1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(330.1,324.65,0.65,0.65);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(36));

	// twinkle2
	this.instance_3 = new lib.twinkle2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(305.8,323.05,0.7059,0.7059);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({_off:true},35).wait(1));

	// twinkle2
	this.instance_4 = new lib.twinkle2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(344.85,330.8,0.6021,0.6021);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true},36).wait(1));

	// twinkle2
	this.instance_5 = new lib.twinkle2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(317.55,327.55,0.7059,0.7059);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({_off:true},37).wait(1));

	// twinkle1
	this.instance_6 = new lib.twinkle1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(326.25,316.5,0.33,0.33);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({_off:true},34).wait(4));

	// twinkle1
	this.instance_7 = new lib.twinkle1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(331.05,324.65,0.65,0.65);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({_off:true},35).wait(4));

	// twinkle2
	this.instance_8 = new lib.twinkle2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(325.55,327.05,0.7059,0.7059);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({_off:true},36).wait(4));

	// twinkle2
	this.instance_9 = new lib.twinkle2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(355.05,330.8,0.6021,0.6021);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({_off:true},37).wait(4));

	// twinkle2
	this.instance_10 = new lib.twinkle2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(322.9,325.3,0.7059,0.7059);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({_off:true},38).wait(4));

	// twinkle2
	this.instance_11 = new lib.twinkle2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(336.8,321.05);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).to({_off:true},39).wait(2));

	// twinkle1
	this.instance_12 = new lib.twinkle1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(322.65,311.75,0.33,0.33);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).to({_off:true},40).wait(1));

	// twinkle1
	this.instance_13 = new lib.twinkle1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(332.1,324.65,0.65,0.65);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({_off:true},40).wait(2));

	// twinkle2
	this.instance_14 = new lib.twinkle2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(325.55,327.05,0.7059,0.7059);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({_off:true},40).wait(3));

	// twinkle2
	this.instance_15 = new lib.twinkle2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(336.05,330.8,0.6021,0.6021);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({_off:true},40).wait(4));

	// twinkle2
	this.instance_16 = new lib.twinkle2("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(317.55,327.55,0.7059,0.7059);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({_off:true},40).wait(5));

	// twinkle2
	this.instance_17 = new lib.twinkle2("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(336.8,321.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},40).wait(6));

	// twinkle2
	this.instance_18 = new lib.twinkle2("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(312.55,323.05,0.7059,0.7059);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(6).to({_off:false},0).wait(40));

	// twinkle2
	this.instance_19 = new lib.twinkle2("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(355.05,330.8,0.6021,0.6021);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(5).to({_off:false},0).to({_off:true},40).wait(1));

	// twinkle2
	this.instance_20 = new lib.twinkle2("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(317.55,327.55,0.7059,0.7059);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(4).to({_off:false},0).to({_off:true},40).wait(2));

	// twinkle2
	this.instance_21 = new lib.twinkle2("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(336.8,321.05);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3).to({_off:false},0).to({_off:true},40).wait(3));

	// twinkle1
	this.instance_22 = new lib.twinkle1("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(330.75,315.25,0.65,0.65);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({_off:false},0).to({_off:true},40).wait(4));

	// twinkle1
	this.instance_23 = new lib.twinkle1("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(326.6,302.5,0.55,0.55);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({_off:false},0).to({_off:true},40).wait(5));

	// twinkle1
	this.instance_24 = new lib.twinkle1("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(329.9,330.5,0.5161,0.5161);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true},40).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(292.3,157.4,67.69999999999999,188.99999999999997);


(lib.sign_accentuator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{reverse:25});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		
		this.play();
	}
	this.frame_24 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_25 = function() {
		/* play();
		*/
		
		this.play();
	}
	this.frame_48 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1).call(this.frame_25).wait(23).call(this.frame_48).wait(1));

	// ring
	this.instance = new lib.rare_effect_container("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.7658,0.7658);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({_off:true},11).wait(13).to({_off:false},0).to({_off:true},11).wait(1));

	// レイヤー_2
	this.instance_1 = new lib.light_effect_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.9,7.5,1,1,0,0,0,17.9,17.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({_off:true},11).wait(13).to({_off:false},0).to({_off:true},11).wait(1));

	// star
	this.pb = new lib.star_sign_accentuator();
	this.pb.name = "pb";
	this.pb.parent = this;
	this.pb.setTransform(141.7,-261.85,2,2);
	this.pb._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pb).wait(1).to({_off:false},0).wait(1).to({scaleX:1.4855,scaleY:1.4855,rotation:-83.9985,x:146.3919,y:-115.4772},0).wait(1).to({scaleX:1.1303,scaleY:1.1303,rotation:-243.2529,x:126.7067,y:-24.0605},0).wait(1).to({scaleX:0.8571,scaleY:0.8571,rotation:-68.8099,x:82.9433,y:29.3592},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:65.5022,x:28.743,y:51.5843},0).wait(1).to({scaleX:0.4745,scaleY:0.4745,rotation:185.1221,x:-16.3688,y:46.6709},0).wait(1).to({scaleX:0.3524,scaleY:0.3524,rotation:282.8957,x:-41.6628,y:23.983},0).wait(1).to({scaleX:0.2773,scaleY:0.2773,rotation:342.7707,x:-49,y:3},0).to({scaleX:0.2351,scaleY:0.2351,rotation:350.3035,x:-46.45,y:-22.95},1).wait(1).to({scaleX:0.2326,scaleY:0.2326,rotation:372.8868,x:-42.7366,y:-30.6758},0).wait(1).to({scaleX:0.2276,scaleY:0.2276,rotation:412.5025,x:-31.5833,y:-43.1139},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:470.5563,x:-7.3021,y:-53.419},0).wait(1).to({scaleX:0.2091,scaleY:0.2091,rotation:556.7149,x:27.3851,y:-45.2703},0).wait(1).to({scaleX:0.1937,scaleY:0.1937,rotation:667.8755,x:52.0861,y:-2.0745},0).wait(1).to({scaleX:0.1711,scaleY:0.1711,rotation:823.1096,x:16.8455,y:59.5576},0).wait(1).to({scaleX:0.1314,scaleY:0.1314,rotation:718.2764,x:-88.35,y:16.2},0).to({_off:true},1).wait(8).to({_off:false,scaleX:2,scaleY:2,rotation:720,skewY:180,x:-145.5,y:-261.85},0).wait(1).to({scaleX:1.4856,scaleY:1.4856,skewX:-98.4592,skewY:81.5408,x:-150.1919,y:-115.4772},0).wait(1).to({scaleX:1.1303,scaleY:1.1303,skewX:71.9327,skewY:251.9327,x:-130.5067,y:-24.0605},0).wait(1).to({scaleX:0.8571,scaleY:0.8571,skewX:182.9844,skewY:362.9844,x:-86.7433,y:29.3592},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,skewX:273.7244,skewY:453.7244,x:-32.543,y:51.5843},0).wait(1).to({scaleX:0.4745,scaleY:0.4745,skewX:328.8331,skewY:508.8331,x:12.5688,y:46.6709},0).wait(1).to({scaleX:0.3524,scaleY:0.3524,skewX:358.6049,skewY:538.6049,x:37.8628,y:23.983},0).wait(1).to({scaleX:0.2773,scaleY:0.2773,skewX:377.2293,skewY:557.2293,x:45.2,y:3},0).to({scaleX:0.2351,scaleY:0.2351,skewX:369.6965,skewY:549.6965,x:42.65,y:-22.95},1).wait(1).to({scaleX:0.2326,scaleY:0.2326,skewX:373.564,skewY:553.564,x:38.9366,y:-30.6758},0).wait(1).to({scaleX:0.2276,scaleY:0.2276,skewX:385.4143,skewY:565.4143,x:27.7833,y:-43.1139},0).wait(1).to({scaleX:0.22,scaleY:0.22,skewX:406.8452,skewY:586.8452,x:3.5021,y:-53.419},0).wait(1).to({scaleX:0.2091,scaleY:0.2091,skewX:434.3796,skewY:614.3796,x:-31.1851,y:-45.2703},0).wait(1).to({scaleX:0.1937,scaleY:0.1937,skewX:483.4614,skewY:663.4614,x:-55.8861,y:-2.0745},0).wait(1).to({scaleX:0.1711,scaleY:0.1711,skewX:563.4559,skewY:743.4559,x:-20.6455,y:59.5576},0).wait(1).to({scaleX:0.1314,scaleY:0.1314,skewX:721.7236,skewY:901.7236,x:84.55,y:16.2},0).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-541.5,-648.8,1079.2,919.8);


(lib.powder_rise_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = false;
		gotoAndPlay( 1 + random( 30 ) );*/
		
		this.visible = false;
		this.gotoAndPlay( 1 + Math.floor(Math.random() * 30));
	}
	this.frame_1 = function() {
		/* _visible = false;
		gotoAndPlay( _currentframe + random( 20 ) );*/
		
		this.visible = false;
		this.gotoAndPlay( this.timeline.position + Math.floor(Math.random() * 20));
	}
	this.frame_31 = function() {
		/* _visible = true;*/
		
		this.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(30).call(this.frame_31).wait(9));

	// glitter
	this.instance = new lib.glitter_first_inner();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5144,0.5144);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30).to({_off:false,scaleX:0.1949,scaleY:0.1949,rotation:-44.8223,alpha:0.4297},0).wait(1).to({scaleX:0.4345,scaleY:0.4345,rotation:-11.2056,alpha:0.8574},0).wait(1).to({scaleX:0.5144,scaleY:0.5144,rotation:0,alpha:1},0).wait(1).to({scaleX:0.5051,scaleY:0.5051,rotation:1.94,alpha:0.971},0).wait(1).to({scaleX:0.479,scaleY:0.479,rotation:7.4007,alpha:0.8893},0).wait(1).to({scaleX:0.436,scaleY:0.436,rotation:16.3821,alpha:0.7549},0).wait(1).to({scaleX:0.3762,scaleY:0.3762,rotation:28.8843,alpha:0.5678},0).wait(1).to({scaleX:0.2995,scaleY:0.2995,rotation:44.9071,alpha:0.3281},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-11.2,19.299999999999997,22.5);


(lib.pen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
		
		this.play();
	}
	this.frame_27 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(2));

	// light_effect
	this.instance = new lib.light_effect();
	this.instance.parent = this;
	this.instance.setTransform(-321.85,-249.95,0.9995,0.9995,-8.8087,0,0,50,33.5);
	this.instance.alpha = 0.0117;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},16).wait(2));

	// pen
	this.instance_1 = new lib.pen_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.3,-108.1,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-217.7,197.3,242.7);


(lib.light_src = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		trace("pa")*/
	}
	this.frame_18 = function() {
		/* stop()*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));

	// glitter
	this.instance = new lib.glitter_innerのコピー();
	this.instance.parent = this;
	this.instance.setTransform(0.15,-33.8,0.2941,0.2941);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2496,scaleY:0.2496,x:4.3622,y:-47.0487},0).wait(1).to({scaleX:0.2138,scaleY:0.2138,x:3.66,y:-57.816},0).wait(1).to({scaleX:0.1841,scaleY:0.1841,x:0.7662,y:-66.7986},0).wait(1).to({scaleX:0.1589,scaleY:0.1589,x:-1.9962,y:-73.7492},0).wait(1).to({scaleX:0.1373,scaleY:0.1373,x:-3.3857,y:-80.4699},0).wait(1).to({scaleX:0.1187,scaleY:0.1187,x:-3.7375,y:-86.538},0).wait(1).to({scaleX:0.1026,scaleY:0.1026,x:-3.4837,y:-91.6703},0).wait(1).to({scaleX:0.0887,scaleY:0.0887,x:-2.9414,y:-95.935},0).wait(1).to({scaleX:0.0766,scaleY:0.0766,x:-2.2998,y:-99.4329},0).wait(1).to({scaleX:0.0663,scaleY:0.0663,x:-1.6893,y:-102.1809},0).wait(1).to({scaleX:0.0576,scaleY:0.0576,x:-1.117,y:-104.4094},0).wait(1).to({scaleX:0.0504,scaleY:0.0504,x:-0.5711,y:-106.293},0).wait(1).to({scaleX:0.0445,scaleY:0.0445,x:-0.0771,y:-107.8314},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:0.3421,y:-109.0321},0).wait(1).to({scaleX:0.0367,scaleY:0.0367,x:0.6643,y:-109.8975},0).wait(1).to({scaleX:0.0347,scaleY:0.0347,x:0.8695,y:-110.4245},0).wait(1).to({scaleX:0.0341,scaleY:0.0341,x:0.95,y:-110.6},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-112.1,28.299999999999997,91.8);


(lib.handwriting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pen
	this.pen = new lib.pen_1();
	this.pen.name = "pen";
	this.pen.parent = this;
	this.pen.setTransform(-195.45,-155.65,1.4377,1.4377,39.2674);

	this.timeline.addTween(cjs.Tween.get(this.pen).wait(1).to({regX:86,regY:-108,scaleX:1.2416,scaleY:1.2416,rotation:12.9526,x:-53.5,y:-190.6},0).wait(1).to({scaleX:1.1431,scaleY:1.1431,rotation:-0.2699,x:-86,y:-171.7},0).wait(1).to({scaleX:1.0785,scaleY:1.0785,rotation:-8.932,x:-107.6,y:-153.65},0).wait(1).to({scaleX:1.0353,scaleY:1.0353,rotation:-14.728,x:-121.7,y:-139.2},0).wait(1).to({scaleX:1.0092,scaleY:1.0092,rotation:-18.2221,x:-130,y:-129.6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-19.4602,x:-178,y:4.5},0).wait(1).to({regX:86,regY:-108,x:-127.85,y:-128.5},0).wait(1).to({x:-121.35,y:-140.25},0).wait(1).to({regX:0,regY:0,x:-204.45,y:-16.75},0).to({x:-202.65,y:-6.65},1).to({guide:{path:[-202.6,-6.6,-199.2,-3.7,-192.4,-3.1,-186,-2.5,-179,-3.9,-172.1,-5.2,-168.4,-7.7,-161,-12.6,-159.2,-18.6,-158.7,-20.5,-158.7,-22.2,-158.8,-22.8,-158.9,-23.3]}},2).wait(1).to({x:-172.15,y:-21.95},0).wait(1).to({regX:86,regY:-108,scaleX:0.9993,scaleY:0.9993,rotation:-19.358,x:-140.85,y:-122.15},0).wait(1).to({regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:-19.3239,x:-179.8,y:16.85},0).wait(1).to({regX:86,regY:-108,scaleX:0.9995,scaleY:0.9995,rotation:-19.3875,x:-119.5,y:-112.95},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-19.4223,x:-111.8,y:-119.15},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-19.444,x:-108.15,y:-123.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-19.4562,x:-106.4,y:-126.15},0).wait(1).to({regX:0,regY:0,rotation:-19.4602,x:-151.05,y:3.55},0).wait(1).to({x:-150.95,y:5.05},0).wait(1).to({regX:86,regY:-108,scaleX:0.9999,scaleY:0.9999,rotation:-19.4504,x:-102.4,y:-125.4},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-19.4364,x:-97.55,y:-125.2},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:-19.4171,x:-90.9,y:-125},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:-19.3916,x:-82.1,y:-124.75},0).wait(1).to({scaleX:0.999,scaleY:0.999,rotation:-19.3586,x:-70.6,y:-124.45},0).wait(1).to({regX:0,regY:0,scaleX:0.9986,scaleY:0.9986,rotation:-19.3167,x:-101.5,y:6.25},0).wait(1).to({regX:86,regY:-108,rotation:-19.3161,x:-37.5,y:-121.15},0).wait(1).to({rotation:-19.3153,x:-15,y:-117.7},0).wait(1).to({rotation:-19.3143,x:11.2,y:-113.65},0).wait(1).to({rotation:-19.3133,x:40.05,y:-109.25},0).wait(1).to({rotation:-19.3122,x:69.9,y:-104.65},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,rotation:-19.3112,x:99.15,y:-100.15},0).wait(1).to({regX:0,regY:0,rotation:-19.3102,x:81.2,y:34.2},0).wait(1).to({regX:86,regY:-108,scaleX:0.9991,scaleY:0.9991,rotation:-19.3707,x:179.95,y:-108.5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-19.4602,x:214.05,y:3.6},0).to({_off:true},1).wait(14));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_21 = new cjs.Graphics().p("Aw5FEQiFiGAAi+QAAi+CFiHQCIiGC/AAQC+AACGCGQCHCHAAC+QAAC+iHCGQiGCIi+AAQi/AAiIiIg");
	var mask_graphics_22 = new cjs.Graphics().p("Aw1FFQiHiHAAi+QAAi+CHiHQCIiGDCAAQDBAACICGQCICHAAC+QAAC+iICHQiICHjBAAQjCAAiIiHg");
	var mask_graphics_23 = new cjs.Graphics().p("AwtFFQiMiGAAi/QAAi+CMiIQCOiFDIAAQDIAACMCFQCOCIAAC+QAAC/iOCGQiMCHjIAAQjIAAiOiHg");
	var mask_graphics_24 = new cjs.Graphics().p("AwfFFQiUiGAAi/QAAi/CUiHQCViGDTAAQDTAACUCGQCVCHAAC/QAAC/iVCGQiUCIjTAAQjTAAiViIg");
	var mask_graphics_25 = new cjs.Graphics().p("AwNFGQieiHAAi/QAAi/CeiIQCfiGDjAAQDhAACeCGQCgCIAAC/QAAC/igCHQieCIjhAAQjjAAifiIg");
	var mask_graphics_26 = new cjs.Graphics().p("Av2FHQiriHAAjAQAAjACriIQCsiGD1AAQDzAACsCGQCtCIAADAQAADAitCHQisCIjzAAQj1AAisiIg");
	var mask_graphics_27 = new cjs.Graphics().p("AvbFIQi6iIAAjAQAAjAC6iJQC9iHELAAQEJAAC8CHQC7CJAADAQAADAi7CIQi8CJkJAAQkLAAi9iJg");
	var mask_graphics_28 = new cjs.Graphics().p("Au6FJQjMiIAAjBQAAjBDMiJQDQiIElAAQEkAADNCIQDPCJAADBQAADBjPCIQjNCKkkAAQklAAjQiKg");
	var mask_graphics_29 = new cjs.Graphics().p("AuTFLQjiiJAAjCQAAjCDiiKQDliIFEAAQFDAADiCIQDmCKAADCQAADCjmCJQjiCKlDAAQlEAAjliKg");
	var mask_graphics_30 = new cjs.Graphics().p("AtnFNQj7iKAAjDQAAjDD7iLQD/iIFoAAQFmAAD9CIQD+CLAADDQAADDj+CKQj9CKlmAAQloAAj/iKg");
	var mask_graphics_31 = new cjs.Graphics().p("AszFPQkYiLAAjEQAAjEEYiMQEdiJGSAAQGPAAEbCJQEcCMAADEQAADEkcCLQkbCLmPAAQmSAAkdiLg");
	var mask_graphics_32 = new cjs.Graphics().p("AsBFRQk7iLAAjGQAAjGE7iMQE/iKHCAAQHBAAE9CKQE/CMAADGQAADGk/CLQk9CMnBAAQnCAAk/iMg");
	var mask_graphics_33 = new cjs.Graphics().p("AtlFUQlkiNAAjHQAAjHFkiOQFoiLH9AAQH7AAFmCLQFpCOAADHQAADHlpCNQlmCNn7AAQn9AAloiNg");
	var mask_graphics_34 = new cjs.Graphics().p("AvgFXQmViOAAjJQAAjJGViPQGbiNJFAAQJDAAGYCNQGbCPAADJQAADJmbCOQmYCPpDAAQpFAAmbiPg");
	var mask_graphics_35 = new cjs.Graphics().p("Ax+FcQnWiQAAjMQAAjMHWiRQHdiPKhAAQKfAAHZCPQHdCRAADMQAADMndCQQnZCRqfAAQqhAAndiRg");
	var mask_graphics_36 = new cjs.Graphics().p("A1oFiQo1iSAAjQQAAjQI1iTQI+iSMqAAQMnAAI6CSQI9CTAADQQAADQo9CSQo6CUsnAAQsqAAo+iUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_graphics_21,x:-121.4801,y:-4.8}).wait(1).to({graphics:mask_graphics_22,x:-121.3479,y:-4.7757}).wait(1).to({graphics:mask_graphics_23,x:-120.9746,y:-4.7072}).wait(1).to({graphics:mask_graphics_24,x:-120.3829,y:-4.5985}).wait(1).to({graphics:mask_graphics_25,x:-119.5833,y:-4.4516}).wait(1).to({graphics:mask_graphics_26,x:-118.5779,y:-4.2669}).wait(1).to({graphics:mask_graphics_27,x:-117.3613,y:-4.0435}).wait(1).to({graphics:mask_graphics_28,x:-115.9212,y:-3.779}).wait(1).to({graphics:mask_graphics_29,x:-114.237,y:-3.4697}).wait(1).to({graphics:mask_graphics_30,x:-112.2772,y:-3.1097}).wait(1).to({graphics:mask_graphics_31,x:-109.9947,y:-2.6905}).wait(1).to({graphics:mask_graphics_32,x:-106.127,y:-2.1988}).wait(1).to({graphics:mask_graphics_33,x:-85.6775,y:-1.6135}).wait(1).to({graphics:mask_graphics_34,x:-60.6441,y:-0.8969}).wait(1).to({graphics:mask_graphics_35,x:-28.2876,y:0.0293}).wait(1).to({graphics:mask_graphics_36,x:19.6,y:1.4}).wait(15));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMVEzQgDgHAAgOQAAgdALgdQAMgeAXgdIADgBIAFADIABAEQgNAUgGARQgHASAAAQQAAAKACAJQACAJAEAIQAXgNAPghQAPghAKg2QAKg2AJhMQhCA6g4AdQg4AegwAAQgfgBgXgOQgYgOgOgaQgOgbAAgkIAAgHIAAgGIghAEIgeABQgwgBgigMQgjgMgSgWQgRgWgBgdQABgbARgVQASgWAigNQAhgMAwAAQAeAAAkAFQAjAGApALQApgyAvghQAughAtgQQAsgRAnAAQAkABAUAQQAUAQgBAfQABAigcAjQgbAjg3AlQg4Amg/AaQhAAZhKAOQgBAIgBAJIgBASQAAAoAWAWQAVAWAnAAQAsAABAgoQBBgnBQhRIAEAAQgMBbgPA+QgQA9gMAcQgQAjgSAXQgTAXgZATQgKAIgIADQgHAEgDAAQgFAAgCgHgAHKibQgeAMgQATQgQATAAAXQABAkAfAWQAfAVA6AAQAOAAAOgBIAdgDQAFggARgkQAQgkAcgnQgegIgcgEQgbgEgYAAQgrAAgeALgAKKhPQgPAegKAhQAwgJAogNQAmgMAggQQA1gcAlgfQAkgeASgfQATgegBgbQAAgYgNgNQgOgNgXAAQgYAAggAQQghAPgkAhQglAggnAyIAyATIABAFIgDAHIgEAAIgZgKIgdgKQgUAbgOAegAq9B2QgUgWAAgkQAAgLACgLIglAwQgVAZgSAOQgSANgTAAQgTAAgMgKQgKgLgBgTQAAgVARgkQARglAigyQgVANgQAGQgPAGgJAAQgIAAgFgCIgFAMQgHANgNATQgtA7gsAeQgtAegpAAQgigBgVgVQgTgWgBgkIABgPQgfArgYAYQgbAagZAAQgOAAgIgIQgIgJAAgMQgBgMAEgQIAKglQgZAvgXAXQgWAYgXAAQgYgBgOgRQgPgRAAgfIABgSQgdAmgXAVQgaAXgUAAQgQAAgLgLQgKgLgBgRQABgMAHgYIAUg8IAMgjQAEgNAAgEQAAgEgDgDQgDgCgEAAQgLAAgXAWQgXAXghAuQgPAVgMATQgLATgHAQIgHARQgDAGgJACIgYAEIgCAAQgFAAgBgGIAAgDIABgFIAkh0IgPAVQgoA2gfAcQggAcgcAAQgSgBgJgKQgKgKAAgSQgBgGADgKIAHgZIAoh9QADgGACgCQADgDAFgBIAXgEIADAAIADABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIAAACIgsCGIgIAbIgCAPQAAAIAEAFQAEAFAIAAQATAAAlgoQAjgmAzhLIAJgbQACgHADgEQACgFAHgBIAWgFIACgBIACAAIAEABQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIAAACIgBADIgrCJQAvhKAkgkQAjgmAYAAQAPABAKAKQAKAKAAAPQAAAKgEAQIgMAlIgTA2QgIAWABALQAAAEADADQAEAEAEAAQAPAAAigmQARgUAYgfIADgHQANgcAagaQAWgXAYgMQAZgMAVAAQAIAAAJADIARAGIAui0QABgGACgEQACgDAGgBIAZgDIABAAQAGAAAAAGIAAADIgBAEIhcFRIgDAPIgBAKQgBAJADAEQADAEAFAAQAPAAAggoQAWgaAggrQALgZAVgYQAUgYAYgMQAWgMAXAAQAXAAAPAMQAOANAAATQAAATgQAVQgRAUgfATQgfATguAOQAAAaAMAOQANAOAWABQAmAAAwgpQAsgmAuhIQgEgGAAgJQABgTALgPQAMgPAQgCIABACIgGAMIgBAIQAAAJADAEQAGADAJAAQALAAASgGQAUgFAbgLIADACQgjBHgRAqQgTArAAARQAAAIAFAFQAFAFAGAAQATAAAhgpQAZgdAkgwQAKgTAPgSQAVgYAXgMQAXgMAWAAQAXAAAPAMQAOANABATQAAATgRAVQgQAUgfATQggATguAOQAAAaANAOQAMAOAXABQAmAAAwgpQAsgmAvhKIAJgmQAKgrAOgmQAPgmAQgjQATgmAQgWQARgWAKgHIAEgBQAGAGADALQADAMAAASQAABBgbBFQgbBGg2BEIgFAfIgBAXQAAAbAHAOQAIAOAQAAQAYAAAkgoQAigmAxhIIAIgiQAKgrAOgmQAPgmARgjQASgmARgWQAQgWAKgHIAFgBQAGAGADALQACAMAAASQAABBgbBFQgaBGg3BEIgEAfIgCAXQAAAbAHAOQAIAOARAAQAYAAAkgoQARgUAVgcIAIgRQAQgeAggdQAVgTAXgKQAYgJAZAAQAPAAAOADQAOADANAGIADAEIAAACQAAAIgEANIgKAeIgdBhIgCAMQgCAFABAGQAAAFADAEQAEAEAFAAQAQAAAhgnQAhgoA1hLIACAEIABAFQAAAIgHAKIgRAXQgdAogXAcQgWAcgTAPQgTAPgTABQgQAAgHgJQgJgIAAgPQAAgJAFgSQAFgSAJgbQgdAzgYAaQgYAagWAAQgZAAgOgSQgOgSAAggIAAgJQgZAggWATQggAcgaAAQgaAAgQgUQgQgVAAgmQAAgTAFggIADgMIgWAeQgnA4ghAcQggAcgZAAQgbAAgQgUQgPgVgBgmQAAgTAGggIABgGIgMASQgsA7gtAeQgsAegpAAQgjgBgUgVgA0Tg/QgNAKgPASQgdAjgOAgQgNAgAAAXQAAAPAFAIQAGAHALAAQAOAAASgUQATgTAUgnQAUgnASg5QgEgIgGgDQgGgEgHAAQgLAAgNAJgAAVg9QgRAMgRAaQgYAhgMAcQgNAcAAAWQABANAFAIQAFAHAKAAQAUAAAggtQAggsAmhaQgFgFgIgCQgHgDgJAAQgPAAgQAMgApzg7QgRAPgOAcQgNAbgHApQAggHAXgQQAYgRAMgUQAMgUAAgWQABgMgGgGQgFgGgLAAQgPAAgQAPgAwlg7QgQAPgOAcQgOAbgGApQAggHAXgQQAXgRANgUQAMgUAAgWQAAgMgFgGQgGgGgKAAQgPAAgRAPgAi/iXQgQA8gHBIQAiguASgtQARgsAAgsIgBgaIgEghQgYAvgRA7gAmIiXQgQA8gIBIQAjguASgtQARgsAAgsIgBgaIgFghQgYAvgQA7gAWLB3QgPgVgBgmQABgTAFggIAEgSIgXAfQgcAmgVAaQgVAZgSAOQgSANgTAAQgUAAgKgKQgMgLAAgTQAAgVARgkQARglAigyQgVANgQAGQgQAGgIAAQgIAAgGgDQgCAIgFAIQgJAOgQAUQgoA2ggAcQgfAcgcAAQgRgBgKgKQgKgKgBgSQABgGACgKIAGgZIAqh9QABgGADgCQADgDAFgBIAXgEIADAAIADABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIAAACIgBACIgrCGIgIAbIgDAPQAAAIAEAFQAEAFAIAAQATAAAlgoQAiglAxhHQgDgFgBgIQABgTALgPQAMgPAQgCIABACIgGAMIgBAIQgBAJAEAEQAFADAKAAQALAAASgGQAUgFAbgLIADACQgjBHgRAqQgTArAAARQAAAIAFAFQAEAFAHAAQATAAAigpQAggnA1hKIAHgdQAKgrAPgmQAOgmARgjQASgmARgWQAQgWALgHIAEgBQAFAGADALQADAMAAASQAABBgbBFQgaBGg2BEIgFAfIgCAXQAAAbAIAOQAHAOAQAAQAYAAAkgoQAhglAuhDQACgNAKgNQANgOAWgKQAVgJAcgBQAXAAALAHQAMAHAAAPQgBALgMAKQgLAJgVACIgCgDQAGgFADgGQADgGAAgIQAAgHgHgGQgHgFgMAAQgUAAgMAJQgKAJgBANQAAALAHAJQAHAIAMAIIAbATQAQANAIANQAJAMAAAOQgBAKgEAKQgFAJgJAJQAYgDAjgmQAigmArhGIACADIABAFQAAAJgJAQQgIAPgSAZQggAsgfAZQgfAZgkAEQgQAHgPAEQgOADgPAAQgdAAgRgKQgRgKAAgQQAAgMAKgIQAKgHAQgBIAKABIAIACIAAADQgFAEgEAGQgDAGAAAGQgBAJAKAGQAJAGAPABQAZgBAPgLQAPgLAAgSQAAgPgLgMQgKgLgSgNQgVgPgNgNQgHgGgDgJQgJAOgRAYQgoA4ggAcQghAcgZAAQgbAAgQgUgAXHiXQgRA8gHBIQAiguASgtQASgsAAgsIgCgaIgFghQgXAvgQA7gARIiSQgMgHAAgGIAEgLQADgIAEgGQAEgGACAAQAFAAAFADIAKAIIAKAEQADACAAAFQAAAPgDAHQgCAHgIAAQgNgBgMgGgA7xiSQgMgHAAgGIAEgLQADgIAFgGQAEgGABAAQAEAAAFADIALAIIAKAEQADACAAAFQAAAPgCAHQgDAHgIAAQgOgBgLgGg");
	this.shape.setTransform(29.15,6.075);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21).to({_off:false},0).wait(30));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_13 = new cjs.Graphics().p("As2B5QhJhJAAhmQAAhpBJhJQBJhJBoAAQBoAABJBJQBJBJAABpQAABmhJBJQhJBJhoABQhogBhJhJg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Au7DVQhYhYAAh9QAAh8BYhZQBYhXB9AAQB9AABYBXQBYBZAAB8QAAB9hYBYQhYBYh9AAQh9AAhYhYg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AvoDhQhchdAAiEQAAiDBcheQBehcCEAAQCEAABdBcQBdBeAACDQAACEhdBdQhdBdiEAAQiEAAhehdg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AvCDbQhahbAAiAQAAiABahbQBbhaCBAAQCAAABbBaQBbBbAACAQAACAhbBbQhbBbiAAAQiBAAhbhbg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AuuDYQhZhZAAh/QAAh+BZhaQBahZB/AAQB/AABZBZQBaBaAAB+QAAB/haBZQhZBah/AAQh/AAhahag");
	var mask_1_graphics_18 = new cjs.Graphics().p("AuhDWQhYhZAAh9QAAh9BYhZQBZhYB+AAQB9AABZBYQBZBZAAB9QAAB9hZBZQhZBZh9AAQh+AAhZhZg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AuaDVQhXhYAAh9QAAh8BXhZQBZhXB9AAQB9AABYBXQBYBZAAB8QAAB9hYBYQhYBYh9AAQh9AAhZhYg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AuYDUQhXhXAAh9QAAh8BXhZQBZhXB9AAQB8AABYBXQBZBZAAB8QAAB9hZBXQhYBZh8AAQh9AAhZhZg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_1_graphics_13,x:-89.575,y:-30.55}).wait(1).to({graphics:mask_1_graphics_14,x:-104.3724,y:-18.2875}).wait(1).to({graphics:mask_1_graphics_15,x:-109.3048,y:-12.35}).wait(1).to({graphics:mask_1_graphics_16,x:-105.3304,y:-8.5917}).wait(1).to({graphics:mask_1_graphics_17,x:-103.1584,y:-6.5378}).wait(1).to({graphics:mask_1_graphics_18,x:-101.8034,y:-5.2565}).wait(1).to({graphics:mask_1_graphics_19,x:-101.0403,y:-4.5349}).wait(1).to({graphics:mask_1_graphics_20,x:-100.7919,y:-4.3}).wait(1).to({graphics:null,x:0,y:0}).wait(30));

	// C
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6C7QgsgsgBhFQABgRACgQQACgRAFgSQhfgDgwgZQgxgZAAgvQAAgrAugaQAtgZBNAAQAlgBAjAGQAiAFAhALQAkggAhgPQAggRAbABQAeAAARAQQASAQAAAcQAAAegWAfQgWAegoAbIAAAFQAAAuggAgQghAhg/AUIgDgCIgBgGIACgDQA4gUAegeQAdgcAAglIAAgBQghASgpAMQgnANgtAFQgFASgDAUQgDAVAAAVQAAA+AhAiQAhAjA5AAQA2AAAygoQAxgoA9hbIABAEIABAEQAAAKgMATQgMASgcAhQgrA0grAXQgpAXgxAAQhHABgtgtgAjQiWQgnAYAAAmQgBAnApAUQApAWBMABQAQgqAZgmQAagnAighQgZgIgcgEQgdgEghAAQhAAAgoAYgAgChUQgTAkgQAoQAsgHAngOQAmgPAggYQgGgagSgUQgUgUgggPQgXAfgTAigABhjKQgZAPgYAcQAhAPAUAUQATATAIAaQAagYAPgaQAPgaAAgVQAAgSgKgLQgMgMgSAAQgWAAgZAPg");
	this.shape_1.setTransform(-178.65,-3.05);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(13).to({_off:false},0).wait(38));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_10 = new cjs.Graphics().p("AyPCxQhJhKAAhnQAAhnBJhKQBJhIBoAAQBoAABJBIQBJBKAABnQAABnhJBKQhJBJhoAAQhoAAhJhJg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AwADVQhYhYAAh9QAAh9BYhZQBZhXB+AAQB9AABYBXQBZBZAAB9QAAB9hZBYQhYBZh9AAQh+AAhZhZg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AvQDiQhdheAAiEQAAiEBdheQBehdCFAAQCEAABdBdQBeBeAACEQAACEheBeQhdBeiEAAQiFAAheheg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_2_graphics_10,x:-124.075,y:-17.95}).wait(1).to({graphics:mask_2_graphics_11,x:-111.2541,y:-15.5875}).wait(1).to({graphics:mask_2_graphics_12,x:-106.9805,y:-14.8}).wait(1).to({graphics:null,x:0,y:0}).wait(38));

	// C
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjCbIgBgFIACgEQA5gUAegdQAdgeAAglIAAgBQgiASgoANQgnAMguAHIAAACIgzAAIABgBQhfgEgwgZQgygaAAgtQAAgrAugaQAugaBNAAQAkAAAkAFQAhAFAiALIABgBIAHAFQAIAEANABQAfAPASATQAUATAHAaQAbgYAPgaQAOgaAAgUQABgTgLgLQgKgKgPgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgCAHgEQAGgDAGgBQATADANAMQASARAAAbQAAAegWAfQgWAfgoAZIAAAGQAAAtghAhQggAihAATgAishNQgoAYAAAmQAAAmApAVQAoAUBIACIAQAAIAAgBQABgBAOAAIAOABIANgCIAAABIADgBIAKgBQAlgHAggMQAngPAggXQgGgagTgUQgTgUghgOIgCACIgLgGQgQgIgHAAQgWgGgYgEQgdgEghAAQhAAAgnAYg");
	this.shape_2.setTransform(-182.2,-10.3625);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(10).to({_off:false},0).wait(41));

	// mask_idn (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_6 = new cjs.Graphics().p("Au3DZQhJhJAAhnQAAhoBJhJQBJhJBoAAQBoAABIBJQBKBJAABoQAABnhKBJQhIBJhoABQhogBhJhJg");
	var mask_3_graphics_7 = new cjs.Graphics().p("Au6DIQhIhJAAhoQAAhnBIhJQBKhJBoAAQBnAABJBJQBKBJAABnQAABohKBJQhJBJhnAAQhoAAhKhJg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AvACxQhJhKAAhnQAAhnBJhJQBJhJBoAAQBoAABJBJQBJBJAABnQAABnhJBKQhJBJhoAAQhoAAhJhJg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AvTCwQhJhIAAhoQAAhnBJhKQBJhIBpAAQBnAABJBIQBJBKABBnQgBBohJBIQhJBKhnAAQhpAAhJhKg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_3_graphics_6,x:-102.5,y:29.05}).wait(1).to({graphics:mask_3_graphics_7,x:-102.7322,y:27.3189}).wait(1).to({graphics:mask_3_graphics_8,x:-103.3986,y:19.7026}).wait(1).to({graphics:mask_3_graphics_9,x:-105.25,y:-7.9}).wait(1).to({graphics:null,x:0,y:0}).wait(41));

	// C
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABLCHIgBgGIACgDQA5gUAegeQAcgcABgkIABgHQAAgMgBgHIAAgBQgGgagTgUQgSgUgegNIgEgCIgSgFQgFgCgGgBIAAgBQgagIgcgEQgdgEggAAQhAAAgnAYQghATgGAeIgEAAQgTAAgOgKQAIgfAkgVQAugaBNAAQAkAAAjAGQAiAFAiAKIAAAAQAfAPATAHIACADQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIABgBQANAJAJAJQAUAUAHAZIADgCIADAdIgCAAIAAAFQAAAtghAiQggAhhAAUg");
	this.shape_3.setTransform(-186.2,-8.325);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277.6,-398.7,655.1,436.2);


(lib.powder_rise_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{r:46,"-":142});

	// timeline functions:
	this.frame_0 = function() {
		/* _rotation = _rotation + Math.random()*14
		gotoAndPlay(random(40)+42)*/
		
		this.rotation = this.rotation + Math.floor(Math.random() * 14);
		this.gotoAndPlay(Math.floor(Math.random() * 40 + 42));
	}
	this.frame_142 = function() {
		/* gotoAndPlay("r")*/
		
		this.gotoAndPlay('r');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(142).call(this.frame_142).wait(1));

	// レイヤー_1
	this.instance = new lib.powder_rise_core();
	this.instance.parent = this;
	this.instance.setTransform(0,-17.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({x:0.6,y:355.55},96).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-28.7,86.7,395.5);


(lib.powder_rise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.powder_rise_inner();
	this.instance.parent = this;
	this.instance.setTransform(63.5,12.8,0.5,0.5);

	this.instance_1 = new lib.powder_rise_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.6,6,0.5,0.5);

	this.instance_2 = new lib.powder_rise_inner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.55,9.75,0.8768,0.8768);

	this.instance_3 = new lib.powder_rise_inner();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.2,18.2,0.8768,0.8768);

	this.instance_4 = new lib.powder_rise_inner();
	this.instance_4.parent = this;
	this.instance_4.setTransform(51.7,6.65,0.5,0.5);

	this.instance_5 = new lib.powder_rise_inner();
	this.instance_5.parent = this;
	this.instance_5.setTransform(117.95,19.7,0.8768,0.8768);

	this.instance_6 = new lib.powder_rise_inner();
	this.instance_6.parent = this;
	this.instance_6.setTransform(5.05,16.3,0.8768,0.8768);

	this.instance_7 = new lib.powder_rise_inner();
	this.instance_7.parent = this;
	this.instance_7.setTransform(105.3,11.8,0.5,0.5);

	this.instance_8 = new lib.powder_rise_inner();
	this.instance_8.parent = this;
	this.instance_8.setTransform(3.5,13.2,0.5,0.5);

	this.instance_9 = new lib.powder_rise_inner();
	this.instance_9.parent = this;
	this.instance_9.setTransform(68.35,16.95,0.8768,0.8768);

	this.instance_10 = new lib.powder_rise_inner();
	this.instance_10.parent = this;
	this.instance_10.setTransform(37,15.5,0.8768,0.8768);

	this.instance_11 = new lib.powder_rise_inner();
	this.instance_11.parent = this;
	this.instance_11.setTransform(94.85,8.15,0.5,0.5);

	this.instance_12 = new lib.powder_rise_inner();
	this.instance_12.parent = this;
	this.instance_12.setTransform(61.8,0.25,0.5,0.5);

	this.instance_13 = new lib.powder_rise_inner();
	this.instance_13.parent = this;
	this.instance_13.setTransform(91.55,6.65,0.5,0.5);

	this.instance_14 = new lib.powder_rise_inner();
	this.instance_14.parent = this;
	this.instance_14.setTransform(16.7,13.2,0.5,0.5);

	this.instance_15 = new lib.powder_rise_inner();
	this.instance_15.parent = this;
	this.instance_15.setTransform(49.1,22.7,0.8768,0.8768);

	this.instance_16 = new lib.powder_rise_inner();
	this.instance_16.parent = this;
	this.instance_16.setTransform(112.7,14.25,0.8768,0.8768);

	this.instance_17 = new lib.powder_rise_inner();
	this.instance_17.parent = this;
	this.instance_17.setTransform(76.4,10.55,0.8768,0.8768);

	this.instance_18 = new lib.powder_rise_inner();
	this.instance_18.parent = this;
	this.instance_18.setTransform(85.9,11.15,0.5,0.5);

	this.instance_19 = new lib.powder_rise_inner();
	this.instance_19.parent = this;
	this.instance_19.setTransform(75.6,13.9,0.5,0.5);

	this.instance_20 = new lib.powder_rise_inner();
	this.instance_20.parent = this;
	this.instance_20.setTransform(42.55,6,0.5,0.5);

	this.instance_21 = new lib.powder_rise_inner();
	this.instance_21.parent = this;
	this.instance_21.setTransform(25.3,9.95,0.5,0.5);

	this.instance_22 = new lib.powder_rise_inner();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-59.85,12.8,0.5,0.5);

	this.instance_23 = new lib.powder_rise_inner();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-106.75,6,0.5,0.5);

	this.instance_24 = new lib.powder_rise_inner();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-74.8,9.75,0.8768,0.8768);

	this.instance_25 = new lib.powder_rise_inner();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-27.15,18.2,0.8768,0.8768);

	this.instance_26 = new lib.powder_rise_inner();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-71.65,6.65,0.5,0.5);

	this.instance_27 = new lib.powder_rise_inner();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-5.4,19.7,0.8768,0.8768);

	this.instance_28 = new lib.powder_rise_inner();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-118.3,16.3,0.8768,0.8768);

	this.instance_29 = new lib.powder_rise_inner();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-18.05,11.8,0.5,0.5);

	this.instance_30 = new lib.powder_rise_inner();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-119.85,13.2,0.5,0.5);

	this.instance_31 = new lib.powder_rise_inner();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-55,16.95,0.8768,0.8768);

	this.instance_32 = new lib.powder_rise_inner();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-86.35,15.5,0.8768,0.8768);

	this.instance_33 = new lib.powder_rise_inner();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-28.5,8.15,0.5,0.5);

	this.instance_34 = new lib.powder_rise_inner();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-61.55,0.25,0.5,0.5);

	this.instance_35 = new lib.powder_rise_inner();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-31.8,6.65,0.5,0.5);

	this.instance_36 = new lib.powder_rise_inner();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-106.65,13.2,0.5,0.5);

	this.instance_37 = new lib.powder_rise_inner();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-74.25,22.7,0.8768,0.8768);

	this.instance_38 = new lib.powder_rise_inner();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-10.65,14.25,0.8768,0.8768);

	this.instance_39 = new lib.powder_rise_inner();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-46.95,10.55,0.8768,0.8768);

	this.instance_40 = new lib.powder_rise_inner();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-37.45,11.15,0.5,0.5);

	this.instance_41 = new lib.powder_rise_inner();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-47.75,13.9,0.5,0.5);

	this.instance_42 = new lib.powder_rise_inner();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-80.8,6,0.5,0.5);

	this.instance_43 = new lib.powder_rise_inner();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-98.05,9.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.powder_rise, new cjs.Rectangle(-126.7,-15.4,253.10000000000002,32.7), null);


// stage content:
(lib.premium_pen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{transform:72,premium_ef:83});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		
		// call jump
		jump = function(){
			if( key_flag == 1 ) {
				key_flag = 0;
				window.location.href = exportRoot._url;
				//self.sender.gotoAndPlay(1);
			}
		}
		
		
		//サインエフェクト一時停止
		sign_effect_stop = function(){
			self.card_after.replace_sign.sign_effect.reflect_wrapper.reflect.gotoAndPlay(1);
		}
		
		//サインエフェクト発光
		sign_effect_play = function(){
			self.card_after.replace_sign.sign_effect.reflect_wrapper.reflect.gotoAndPlay('flash');
		}
		
		//サイン強調エフェクトの位置合わせ
		sign_effect_adjust = function(){
			sign_x = self.card_after.replace_sign.sign_effect.reflect_mask.x;
			sign_y = self.card_after.replace_sign.sign_effect.reflect_mask.y;
			_ratio = 240 / 640;
		
			//この階層での左上からサイン中心の距離
			self.sign_accentuator.x = sign_x * _ratio;
			self.sign_accentuator.y = sign_y * _ratio + 10;
		
			if( self.sign_accentuator.x > 120 ){
				self.sign_accentuator.gotoAndPlay("reverse");
			}
		}
		//-----------------------------------
		// パラメータ
		//-----------------------------------
		
		exportRoot._url = window.im_cjs._url || "http://sp.pf.mbga.jp/12008305/";
		
		//-----------------------------------
		// 初期化
		//-----------------------------------
		
		key_flag = 1;
		
		exportRoot.m1 = window.im_cjs.m1 || "";
		exportRoot.m2 = window.im_cjs.m2 || "";
		exportRoot.m3 = window.im_cjs.m3 || "";
		
		
		/*
		m1 = "プレミアムサインになりました!";
		m2 = "";
		m3 = "";
		*/
	}
	this.frame_1 = function() {
		var self = this;
		this.btn.addEventListener('click',onClick);
		
		function onClick(event){
			self.gotoAndPlay( "transform" );
			self.btn.removeEventListener('click',onClick);
		}
	}
	this.frame_3 = function() {
		window.se_play( 'se_115');
	}
	this.frame_22 = function() {
		window.se_play( 'se_084');
	}
	this.frame_38 = function() {
		window.se_play( 'se_093');
	}
	this.frame_71 = function() {
		//this.btn.removeEventListener('click',onClick);
	}
	this.frame_72 = function() {
		window.se_play( 'se_070');
		/* play();
		*/
		this.btn.removeAllEventListeners('click');
		
		this.play();
		
		
		var self = this;
		this.btn.addEventListener('click',onClick);
		
		function onClick(event){
			jump();
			self.btn.removeEventListener('click',onClick);
		}
	}
	this.frame_73 = function() {
		/* call( "sign_effect_stop" );*/
		
		sign_effect_stop();
	}
	this.frame_84 = function() {
		window.se_play( 'se_093');
		sign_effect_adjust();
		this.sign_accentuator.play();
	}
	this.frame_95 = function() {
		/* call( "sign_effect_play" );*/
		
		sign_effect_play();
	}
	this.frame_98 = function() {
		window.se_play( 'se_004');
	}
	this.frame_102 = function() {
		window.se_play( 'se_115');
	}
	this.frame_105 = function() {
		// m1だと動作しないので、t1にリネーム
		for(i=1;i<=3;i++){
			this['t' + i].text = exportRoot['m' + i];
		}
	}
	this.frame_111 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(19).call(this.frame_22).wait(16).call(this.frame_38).wait(33).call(this.frame_71).wait(1).call(this.frame_72).wait(1).call(this.frame_73).wait(11).call(this.frame_84).wait(11).call(this.frame_95).wait(3).call(this.frame_98).wait(4).call(this.frame_102).wait(3).call(this.frame_105).wait(6).call(this.frame_111).wait(4));

	// shield
	this.instance = new lib.shield();
	this.instance.parent = this;
	this.instance.setTransform(120,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(120,151.05,1,1,0,0,0,133,160);
	this.btn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(115));

	// fader
	this.instance_1 = new lib.fader();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.9095},0).wait(1).to({alpha:0.5618},0).wait(1).to({alpha:0.1307},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(110));

	// cursor
	this.instance_2 = new lib.cursor3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(222.5,280.5,1,1,0,0,0,-0.5,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).wait(9));

	// text
	this.t3 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t3.name = "t3";
	this.t3.lineHeight = 15;
	this.t3.lineWidth = 260;
	this.t3.parent = this;
	this.t3.setTransform(12,376);

	this.t2 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t2.name = "t2";
	this.t2.lineHeight = 15;
	this.t2.lineWidth = 260;
	this.t2.parent = this;
	this.t2.setTransform(12,360);

	this.t1 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t1.name = "t1";
	this.t1.lineHeight = 15;
	this.t1.lineWidth = 260;
	this.t1.parent = this;
	this.t1.setTransform(12,344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1,p:{y:344}},{t:this.t2,p:{y:360}},{t:this.t3,p:{y:376}}]}).to({state:[{t:this.t1,p:{y:269}},{t:this.t2,p:{y:285}},{t:this.t3,p:{y:301}}]},105).wait(10));

	// window
	this.instance_3 = new lib.window_container("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.3,169.35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).wait(5).to({mode:"single",startPosition:4},0).wait(8));

	// pen_blur
	this.pen_blur = new lib.pen_blur_1();
	this.pen_blur.name = "pen_blur";
	this.pen_blur.parent = this;
	this.pen_blur.setTransform(141.25,116,0.6979,0.6979,5.1717);
	this.pen_blur._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pen_blur).wait(23).to({_off:false},0).wait(1).to({regY:10,scaleX:1.1167,scaleY:1.1167,rotation:9.9487,x:194.15,y:-24.15},0).wait(1).to({scaleX:1.2649,scaleY:1.2649,rotation:11.6398,x:213,y:-76.25},0).wait(1).to({regY:0,scaleX:1.3087,scaleY:1.3087,rotation:12.1395,x:221.3,y:-104.5},0).to({_off:true},1).wait(88));

	// src
	this.pa = new lib.light_src();
	this.pa.name = "pa";
	this.pa.parent = this;
	this.pa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pa).wait(83).to({_off:false},0).to({_off:true},19).wait(13));

	// star
	this.sign_accentuator = new lib.sign_accentuator();
	this.sign_accentuator.name = "sign_accentuator";
	this.sign_accentuator.parent = this;
	this.sign_accentuator.setTransform(120,160);

	this.timeline.addTween(cjs.Tween.get(this.sign_accentuator).wait(84).to({_off:true},18).wait(13));

	// reflect
	this.instance_4 = new lib.trail_core();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.85,153.95,2.7861,2.7861);
	this.instance_4.filters = [new cjs.ColorFilter(1, 1, 1, 1, 160, 200, 160, 0)];
	this.instance_4.cache(-80,-70,153,140);

	this.instance_5 = new lib.particle_flash_container();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,120,0.8956,0.8956);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},22).to({state:[]},1).to({state:[{t:this.instance_5}]},58).to({state:[]},26).wait(8));

	// burst
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.184,1],0,0,0,0,0,199).s().p("A1tVuQpApAAAsuQAAstJApAQJAo/MtAAQMuAAJAI/QJAJAAAMtQAAMupAJAQpAI/suABQstgBpAo/g");
	this.shape.setTransform(120.025,150);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22).to({_off:false},0).to({_off:true},1).wait(92));

	// icon_pen
	this.icon_pen = new lib.icon_pen_1();
	this.icon_pen.name = "icon_pen";
	this.icon_pen.parent = this;
	this.icon_pen.setTransform(110.8,181.05,0.5722,0.5722,11.6986,0,0,0,-0.1);
	this.icon_pen._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_pen).wait(22).to({_off:false},0).to({_off:true},1).wait(92));

	// icon_glitter1
	this.icon_glitter1 = new lib.icon_glitter1_1();
	this.icon_glitter1.name = "icon_glitter1";
	this.icon_glitter1.parent = this;
	this.icon_glitter1.setTransform(157.5,195.4,0.3324,0.3322,11.7007);
	this.icon_glitter1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_glitter1).wait(22).to({_off:false},0).wait(1).to({scaleX:0.4627,scaleY:0.4624,rotation:8.5594,x:206.4079,y:174.3768},0).wait(1).to({scaleX:0.5285,scaleY:0.5281,rotation:6.9733,x:231.1031,y:163.7615},0).wait(1).to({scaleX:0.567,scaleY:0.5666,rotation:6.0442,x:245.5699,y:157.5429},0).wait(1).to({regY:-0.1,scaleX:0.5809,scaleY:0.5806,rotation:5.7079,x:250.8,y:155.3},0).to({_off:true},1).wait(88));

	// icon_glitter1
	this.icon_glitter1_1 = new lib.icon_glitter1_1();
	this.icon_glitter1_1.name = "icon_glitter1_1";
	this.icon_glitter1_1.parent = this;
	this.icon_glitter1_1.setTransform(95.05,149.75,0.5722,0.5722,11.6986);
	this.icon_glitter1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_glitter1_1).wait(22).to({_off:false},0).wait(1).to({scaleX:0.7965,scaleY:0.7965,rotation:8.5584,x:42.3449,y:102.3914},0).wait(1).to({scaleX:0.9097,scaleY:0.9097,rotation:6.9729,x:15.7324,y:78.4785},0).wait(1).to({scaleX:0.976,scaleY:0.976,rotation:6.0441,x:0.1424,y:64.47},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.7079,x:-5.5,y:59.4},0).to({_off:true},1).wait(88));

	// icon_glitter2
	this.icon_glitter2 = new lib.icon_glitter2_1();
	this.icon_glitter2.name = "icon_glitter2";
	this.icon_glitter2.parent = this;
	this.icon_glitter2.setTransform(78.75,234.05,0.1563,0.1563,11.695);
	this.icon_glitter2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_glitter2).wait(22).to({_off:false},0).wait(1).to({scaleX:0.2175,scaleY:0.2175,rotation:8.5567,x:53.8782,y:258.8956},0).wait(1).to({scaleX:0.2484,scaleY:0.2484,rotation:6.972,x:41.3197,y:271.4409},0).wait(1).to({scaleX:0.2666,scaleY:0.2666,rotation:6.0437,x:33.9627,y:278.7901},0).wait(1).to({scaleX:0.2731,scaleY:0.2731,rotation:5.7077,x:31.3,y:281.45},0).to({_off:true},1).wait(88));

	// icon_glitter2
	this.icon_glitter2_1 = new lib.icon_glitter2_1();
	this.icon_glitter2_1.name = "icon_glitter2_1";
	this.icon_glitter2_1.parent = this;
	this.icon_glitter2_1.setTransform(159.55,233.3,0.1563,0.1563,11.695);
	this.icon_glitter2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_glitter2_1).wait(22).to({_off:false},0).wait(1).to({scaleX:0.2175,scaleY:0.2175,rotation:8.5567,x:195.7176,y:239.0658},0).wait(1).to({scaleX:0.2484,scaleY:0.2484,rotation:6.972,x:213.9798,y:241.9772},0).wait(1).to({scaleX:0.2666,scaleY:0.2666,rotation:6.0437,x:224.678,y:243.6827},0).wait(1).to({scaleX:0.2731,scaleY:0.2731,rotation:5.7077,x:228.55,y:244.3},0).to({_off:true},1).wait(88));

	// icon_glitter2
	this.icon_glitter2_2 = new lib.icon_glitter2_1();
	this.icon_glitter2_2.name = "icon_glitter2_2";
	this.icon_glitter2_2.parent = this;
	this.icon_glitter2_2.setTransform(152.3,212.25,0.3684,0.3684,11.6995);
	this.icon_glitter2_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_glitter2_2).wait(22).to({_off:false},0).wait(1).to({scaleX:0.5128,scaleY:0.5128,rotation:8.5592,x:193.7093,y:184.1808},0).wait(1).to({scaleX:0.5857,scaleY:0.5857,rotation:6.9735,x:214.6182,y:170.0078},0).wait(1).to({scaleX:0.6284,scaleY:0.6284,rotation:6.0446,x:226.8669,y:161.705},0).wait(1).to({scaleX:0.6439,scaleY:0.6439,rotation:5.7084,x:231.3,y:158.7},0).to({_off:true},1).wait(88));

	// icon_glitter2
	this.icon_glitter2_3 = new lib.icon_glitter2_1();
	this.icon_glitter2_3.name = "icon_glitter2_3";
	this.icon_glitter2_3.parent = this;
	this.icon_glitter2_3.setTransform(130.3,233.6,0.4578,0.4578,11.6987);
	this.icon_glitter2_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_glitter2_3).wait(22).to({_off:false},0).wait(1).to({scaleX:0.6372,scaleY:0.6372,rotation:8.5583,x:163.2964,y:267.2254},0).wait(1).to({scaleX:0.7277,scaleY:0.7277,rotation:6.9727,x:179.9573,y:284.2039},0).wait(1).to({scaleX:0.7808,scaleY:0.7808,rotation:6.0437,x:189.7175,y:294.1502},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:5.7075,x:193.25,y:297.75},0).to({_off:true},1).wait(88));

	// icon_glitter2
	this.icon_glitter2_4 = new lib.icon_glitter2_1();
	this.icon_glitter2_4.name = "icon_glitter2_4";
	this.icon_glitter2_4.parent = this;
	this.icon_glitter2_4.setTransform(114.05,213.45,0.4578,0.4578,11.6987);
	this.icon_glitter2_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_glitter2_4).wait(22).to({_off:false},0).wait(1).to({scaleX:0.6372,scaleY:0.6372,rotation:8.5583,x:67.6087,y:162.4484},0).wait(1).to({scaleX:0.7277,scaleY:0.7277,rotation:6.9727,x:44.159,y:136.6961},0).wait(1).to({scaleX:0.7808,scaleY:0.7808,rotation:6.0437,x:30.4218,y:121.61},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:5.7075,x:25.45,y:116.15},0).to({_off:true},1).wait(88));

	// icon_glitter2
	this.icon_glitter2_5 = new lib.icon_glitter2_1();
	this.icon_glitter2_5.name = "icon_glitter2_5";
	this.icon_glitter2_5.parent = this;
	this.icon_glitter2_5.setTransform(90.65,219,0.5722,0.5722,11.6986);
	this.icon_glitter2_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_glitter2_5).wait(22).to({_off:false},0).wait(1).to({scaleX:0.7965,scaleY:0.7965,rotation:8.5584,x:41.1947,y:189.07},0).wait(1).to({scaleX:0.9097,scaleY:0.9097,rotation:6.9729,x:16.2232,y:173.9574},0).wait(1).to({scaleX:0.976,scaleY:0.976,rotation:6.0441,x:1.5945,y:165.1042},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.7079,x:-3.7,y:161.9},0).to({_off:true},1).wait(88));

	// icon_trail
	this.icon_trail = new lib.icon_trail_1();
	this.icon_trail.name = "icon_trail";
	this.icon_trail.parent = this;
	this.icon_trail.setTransform(103.8,228.75,0.5722,0.5722,11.6986);
	this.icon_trail._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_trail).wait(22).to({_off:false},0).wait(1).to({scaleX:0.7965,scaleY:0.7965,rotation:18.8818,x:85.6376,y:269.242},0).wait(1).to({scaleX:0.9097,scaleY:0.9097,rotation:22.5088,x:76.4668,y:289.6877},0).wait(1).to({scaleX:0.976,scaleY:0.976,rotation:24.6336,x:71.0944,y:301.6651},0).wait(1).to({scaleX:1,scaleY:1,rotation:25.4026,x:69.15,y:306},0).to({_off:true},1).wait(88));

	// icon_base
	this.icon_base = new lib.icon_base_1();
	this.icon_base.name = "icon_base";
	this.icon_base.parent = this;
	this.icon_base.setTransform(118.65,185.65,0.5722,0.5722,11.6986);
	this.icon_base._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_base).wait(22).to({_off:false},0).wait(1).to({scaleX:0.7094,scaleY:0.7094,rotation:24.2822,x:189.7534,y:305.5534},0).wait(1).to({scaleX:0.7786,scaleY:0.7786,rotation:30.636,x:225.6558,y:366.0966},0).wait(1).to({scaleX:0.8192,scaleY:0.8192,rotation:34.3582,x:246.6879,y:401.5636},0).wait(1).to({scaleX:0.8338,scaleY:0.8338,rotation:35.7054,x:254.3,y:414.4},0).to({_off:true},1).wait(88));

	// icon
	this.icon = new lib.icon_1();
	this.icon.name = "icon";
	this.icon.parent = this;
	this.icon.setTransform(120,360);
	this.icon._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(3).to({_off:false},0).wait(1).to({y:277.2758},0).wait(1).to({y:236.2912},0).wait(1).to({y:214.0181},0).wait(1).to({y:203.1048},0).wait(1).to({y:200},0).wait(1).to({y:200.9203},0).wait(1).to({y:204.3608},0).wait(1).to({y:208.6423},0).wait(1).to({y:210},0).wait(3).to({regX:-0.1,regY:-0.1,scaleX:0.6618,scaleY:0.6618,rotation:12.7035,y:209.9},2,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:0.6803,scaleY:0.6803,rotation:12.6616,x:120.0538,y:209.1193},0).wait(1).to({scaleX:0.7447,scaleY:0.7447,rotation:12.5158,x:120.0671,y:206.2314},0).wait(1).to({scaleX:0.8839,scaleY:0.8839,rotation:12.2007,x:120.0959,y:199.9902},0).wait(1).to({regY:-0.2,scaleX:1.2114,scaleY:1.2114,rotation:11.4595,x:120,y:185.2},0).to({_off:true},1).wait(93));

	// flare
	this.flare = new lib.flare_1();
	this.flare.name = "flare";
	this.flare.parent = this;
	this.flare.setTransform(68.65,170.05,0.3265,0.3265);
	this.flare._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flare).wait(65).to({_off:false},0).wait(1).to({regY:3,scaleX:0.4069,scaleY:0.4069,x:82.25,y:171.15},0).wait(1).to({scaleX:0.5209,scaleY:0.5209,x:101.6,y:171.35},0).wait(1).to({scaleX:0.664,scaleY:0.664,x:125.9,y:171.65},0).wait(1).to({scaleX:0.8378,scaleY:0.8378,x:155.4,y:172},0).wait(1).to({scaleX:1.0513,scaleY:1.0513,x:191.65,y:172.4},0).wait(1).to({regY:0,scaleX:1.3362,scaleY:1.3362,x:240,y:169},0).to({_off:true},1).wait(43));

	// handwriting
	this.instance_6 = new lib.handwriting();
	this.instance_6.parent = this;
	this.instance_6.setTransform(220,150);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).wait(12).to({regX:3.7,regY:5.6,x:223.2,y:155.6},0).wait(1).to({x:222.25},0).wait(1).to({x:220.95},0).wait(1).to({x:219.25},0).wait(1).to({x:217.2},0).wait(1).to({x:214.8},0).wait(1).to({x:212.05},0).wait(1).to({x:208.95},0).wait(1).to({x:205.5},0).wait(1).to({x:201.7},0).wait(1).to({x:197.55},0).wait(1).to({x:193.05},0).wait(1).to({x:188.15},0).wait(1).to({x:182.85},0).wait(1).to({x:177.15},0).wait(1).to({x:171},0).wait(1).to({x:164.35},0).wait(1).to({x:157.2},0).wait(1).to({x:149.45},0).wait(1).to({x:141.05},0).wait(1).to({x:131.9},0).wait(1).to({x:121.85},0).wait(1).to({x:110.8},0).wait(1).to({x:98.4},0).wait(1).to({x:84.25},0).wait(1).to({x:67.75},0).wait(1).to({x:47.45},0).wait(1).to({regX:0,regY:0,x:16,y:150},0).to({_off:true},1).wait(43));

	// fader
	this.instance_7 = new lib.fader();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,150);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).to({alpha:0.3984},12).to({alpha:0.8008},33).to({_off:true},1).wait(43));

	// effect
	this.instance_8 = new lib.powder_rise();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,-33.4,1,1,0,0,0,0,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(115));

	// card_before
	this.card_before = new lib.card_before();
	this.card_before.name = "card_before";
	this.card_before.parent = this;
	this.card_before.setTransform(45.05,56.3,0.375,0.375,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.card_before).wait(23).to({regX:0,regY:0,scaleX:0.3768,scaleY:0.3768,x:44.9941,y:56.2573},0).wait(1).to({scaleX:0.3825,scaleY:0.3825,x:44.9755,y:56.2804},0).wait(1).to({scaleX:0.3925,scaleY:0.3925,x:44.9424,y:56.3213},0).wait(1).to({scaleX:0.4075,scaleY:0.4075,x:44.8935,y:56.3819},0).wait(1).to({scaleX:0.4276,scaleY:0.4276,x:44.8273,y:56.4639},0).wait(1).to({scaleX:0.4532,scaleY:0.4532,x:44.7433,y:56.5679},0).wait(1).to({scaleX:0.4839,scaleY:0.4839,x:44.6426,y:56.6925},0).wait(1).to({scaleX:0.5186,scaleY:0.5186,x:44.5289,y:56.8333},0).wait(1).to({scaleX:0.5551,scaleY:0.5551,x:44.4089,y:56.9819},0).wait(1).to({scaleX:0.5909,scaleY:0.5909,x:44.2915,y:57.1271},0).wait(1).to({scaleX:0.6232,scaleY:0.6232,x:44.1856,y:57.2582},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:44.0976,y:57.3673},0).wait(1).to({scaleX:0.6705,scaleY:0.6705,x:44.0304,y:57.4505},0).wait(1).to({scaleX:0.6845,scaleY:0.6845,x:43.9844,y:57.5075},0).wait(1).to({scaleX:0.6925,scaleY:0.6925,x:43.9582,y:57.5398},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.695,scaleY:0.695,x:44,y:57.6},0).wait(1).to({regX:0,regY:0,x:43.9313,y:57.55},0).wait(1).to({x:43.8746},0).wait(1).to({x:43.779},0).wait(1).to({x:43.6436},0).wait(1).to({x:43.4673},0).wait(1).to({x:43.2488},0).wait(1).to({x:42.9868},0).wait(1).to({x:42.6798},0).wait(1).to({x:42.3261},0).wait(1).to({x:41.9238},0).wait(1).to({x:41.4708},0).wait(1).to({x:40.9648},0).wait(1).to({x:40.4031},0).wait(1).to({x:39.7827},0).wait(1).to({x:39.1003},0).wait(1).to({x:38.3521},0).wait(1).to({x:37.5338},0).wait(1).to({x:36.6403},0).wait(1).to({x:35.666},0).wait(1).to({x:34.6041},0).wait(1).to({x:33.4469},0).wait(1).to({x:32.185},0).wait(1).to({x:30.8074},0).wait(1).to({x:29.3005},0).wait(1).to({x:27.6477},0).wait(1).to({x:25.8281},0).wait(1).to({x:23.8146},0).wait(1).to({x:21.5717},0).wait(1).to({x:19.0505},0).wait(1).to({x:16.1808},0).wait(1).to({x:12.8552},0).wait(1).to({x:8.8941},0).wait(1).to({regX:0.1,regY:0.1,x:4,y:57.6},0).to({_off:true},1).wait(43));

	// reflect
	this.instance_9 = new lib.efc_カードキラリ();
	this.instance_9.parent = this;
	this.instance_9.setTransform(119.55,430.3,1.2653,1,0,0,-29.8292);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76).to({_off:false},0).to({scaleX:1.2649,skewY:-29.8255,y:86.1},4,cjs.Ease.get(-1)).to({scaleX:1.2652,skewY:-29.8278,x:119.6,y:-163.15},4,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	// light
	this.light = new lib.lilght();
	this.light.name = "light";
	this.light.parent = this;
	this.light.setTransform(120.05,150.85,1,1,0,0,0,125,153.3);
	this.light.alpha = 0.8008;
	this.light._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light).wait(72).to({_off:false},0).to({alpha:0.0117},12,cjs.Ease.quadInOut).to({_off:true},1).wait(30));

	// premium_sign
	this.card_after = new lib.card_after();
	this.card_after.name = "card_after";
	this.card_after.parent = this;
	this.card_after._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card_after).wait(72).to({_off:false},0).wait(43));

	// card_after
	this.instance_10 = new lib.replace_card_after();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,0.375,0.3749);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72).to({_off:false},0).wait(43));

	// replace_effect
	this.replace_sign = new lib.replace_sign();
	this.replace_sign.name = "replace_sign";
	this.replace_sign.parent = this;
	this.replace_sign.setTransform(-160,220,0.1875,0.1875);

	this.timeline.addTween(cjs.Tween.get(this.replace_sign).to({_off:true},1).wait(114));

	// break_l_c01
	this.instance_11 = new lib.break_l_c01_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(480,-37,1,1,0,0,0,120,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(114));

	// replace_card_after
	this.instance_12 = new lib.replace_card_after();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-100,-25.05,0.5,0.5,0,0,0,120,149.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(114));

	// replace_card_before
	this.instance_13 = new lib.replace_card_before();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-100,134.95,0.5,0.5,0,0,0,120,149.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-264.8,785.7,956.2);
// library properties:
lib.properties = {
	id: 'premium_pen',
	width: 240,
	height: 300,
	fps: 12,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/break_l_c01.png?1579075414194", id:"premium_pen_break_l_c01"},
		{src:"images/flare.png?1579075414194", id:"premium_pen_flare"},
		{src:"images/icon.png?1579075414194", id:"premium_pen_icon"},
		{src:"images/icon_base.png?1579075414194", id:"premium_pen_icon_base"},
		{src:"images/icon_glitter1.png?1579075414194", id:"premium_pen_icon_glitter1"},
		{src:"images/icon_glitter2.png?1579075414194", id:"premium_pen_icon_glitter2"},
		{src:"images/icon_pen.png?1579075414194", id:"premium_pen_icon_pen"},
		{src:"images/icon_trail.png?1579075414194", id:"premium_pen_icon_trail"},
		{src:"images/pen.png?1579075414194", id:"premium_pen_pen"},
		{src:"images/pen_blur.png?1579075414194", id:"premium_pen_pen_blur"},
		{src:"images/replace_card1.png?1579075414194", id:"premium_pen_replace_card1"},
		{src:"images/replace_card2.png?1579075414194", id:"premium_pen_replace_card2"},
		{src:"images/star_rainbow.png?1579075414194", id:"premium_pen_star_rainbow"},
		{src:"images/starParticle.png?1579075414194", id:"premium_pen_starParticle"}
	],
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
an.compositions['premium_pen'] = {
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
