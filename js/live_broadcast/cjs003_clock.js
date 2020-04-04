(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs003_clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.cjs003_clock.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// cjs003_clock
	this.cjs003_clock = new lib.cjs003_clock_1();
	this.cjs003_clock.setTransform(494,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs003_clock}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(483,38,136,28);


// symbols:
(lib.no_0 = function() {
	this.initialize(img.no_0);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.no_1 = function() {
	this.initialize(img.no_1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,28);


(lib.no_2 = function() {
	this.initialize(img.no_2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.no_3 = function() {
	this.initialize(img.no_3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.no_4 = function() {
	this.initialize(img.no_4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.no_5 = function() {
	this.initialize(img.no_5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.no_6 = function() {
	this.initialize(img.no_6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.no_7 = function() {
	this.initialize(img.no_7);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.no_8 = function() {
	this.initialize(img.no_8);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.no_9 = function() {
	this.initialize(img.no_9);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,28);


(lib.second = function() {
	this.initialize(img.second);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,28);


(lib.gr_second = function() {
	this.initialize();

	// レイヤー 2
	this.instance = new lib.second();
	this.instance.setTransform(-5.4,-15.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.4,-15.9,12,28);


(lib.gr_number = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// num
	this.instance_1 = new lib.no_0();
	this.instance_1.setTransform(-10.9,-13.9);

	this.instance_2 = new lib.no_1();
	this.instance_2.setTransform(-5.9,-13.9);

	this.instance_3 = new lib.no_2();
	this.instance_3.setTransform(-10.9,-13.9);

	this.instance_4 = new lib.no_3();
	this.instance_4.setTransform(-10.9,-13.9);

	this.instance_5 = new lib.no_4();
	this.instance_5.setTransform(-10.9,-13.9);

	this.instance_6 = new lib.no_5();
	this.instance_6.setTransform(-10.9,-13.9);

	this.instance_7 = new lib.no_6();
	this.instance_7.setTransform(-10.9,-13.9);

	this.instance_8 = new lib.no_7();
	this.instance_8.setTransform(-10.9,-13.9);

	this.instance_9 = new lib.no_8();
	this.instance_9.setTransform(-10.9,-13.9);

	this.instance_10 = new lib.no_9();
	this.instance_10.setTransform(-10.9,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-13.9,22,28);


(lib.mc_second = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_18 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18));

	// レイヤー 1
	this.instance_11 = new lib.gr_second();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-15.9,12,28);


(lib.cjs003_clock_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.param={};
		
		//時
		this.param.h1=0;
		this.param.h2=0;
		//分
		this.param.m1=0;
		this.param.m2=0;
		//秒
		this.param.s1=0;
		this.param.s2=0;
		
		
		this.update_timer = function(param){
			
			this.param = param;
			
			this.h1.gotoAndStop(this.param.h1);
			this.h2.gotoAndStop(this.param.h2);
			this.m1.gotoAndStop(this.param.m1);
			this.m2.gotoAndStop(this.param.m2);
			this.s1.gotoAndStop(this.param.s1);
			this.s2.gotoAndStop(this.param.s2);
			
			this.second.gotoAndPlay(0);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));

	// s2
	this.s2 = new lib.gr_number();
	this.s2.setTransform(114,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s2}]}).wait(36));

	// s1
	this.s1 = new lib.gr_number();
	this.s1.setTransform(95,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1}]}).wait(36));

	// second
	this.second = new lib.mc_second();
	this.second.setTransform(81,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.second}]}).wait(36));

	// m2
	this.m2 = new lib.gr_number();
	this.m2.setTransform(66.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m2}]}).wait(36));

	// m1
	this.m1 = new lib.gr_number();
	this.m1.setTransform(47.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1}]}).wait(36));

	// second
	this.second_1 = new lib.mc_second();
	this.second_1.setTransform(33.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.second_1}]}).wait(36));

	// h2
	this.h2 = new lib.gr_number();
	this.h2.setTransform(19,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.h2}]}).wait(36));

	// h1
	this.h1 = new lib.gr_number();
	this.h1.setTransform(0,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.h1}]}).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-2.4,136,28);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
