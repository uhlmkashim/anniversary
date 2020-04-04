(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs005_omikuji = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs005_omikuji.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// cjs002_live_text
	this.cjs005_omikuji = new lib.cjs005_omikuji_1();
	this.cjs005_omikuji.setTransform(321,174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs005_omikuji}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.omikuji_00 = function() {
	this.initialize(img.omikuji_00);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.omikuji_01 = function() {
	this.initialize(img.omikuji_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.omikuji_02 = function() {
	this.initialize(img.omikuji_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.omikuji_03 = function() {
	this.initialize(img.omikuji_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.omikuji_04 = function() {
	this.initialize(img.omikuji_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.omikuji_05 = function() {
	this.initialize(img.omikuji_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.omikuji_06 = function() {
	this.initialize(img.omikuji_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.omikuji_reverse = function() {
	this.initialize(img.omikuji_reverse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.particle_flash_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAvBLIhKAwg");
	this.shape.setTransform(-0.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVguIA7AAIgQBdIg7AAg");
	this.shape_1.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-5.6,12.4,12.5);


(lib.gr_white = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AprU8MAAAgp3ITXAAMAAAAp3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.9,-133.9,124,268);


(lib.gr_omikuji_cover = function() {
	this.initialize();

	// レイヤー 2
	this.instance = new lib.omikuji_reverse();
	this.instance.setTransform(-61.9,-133.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.9,-133.9,124,268);


(lib.gr_omikuji_06 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.omikuji_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.gr_omikuji_05 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.omikuji_05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.gr_omikuji_04 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.omikuji_04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.gr_omikuji_03 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.omikuji_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.gr_omikuji_02 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.omikuji_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.gr_omikuji_01 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.omikuji_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.gr_omikuji_00 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.omikuji_00();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,268);


(lib.particle_flash2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(14));

	// レイヤー 2
	this.instance = new lib.particle_flash_core();
	this.instance.setTransform(20,-4,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:166,x:61.5,y:-55.6,alpha:0.75},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:220.7,x:66.6,y:-78.5,alpha:0.672},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:257.3,x:69.9,y:-93.6,alpha:0.609},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:283.9,x:72.6,y:-104.2,alpha:0.57},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:304.4,x:74.8,y:-112.2,alpha:0.539},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:320.2,x:76.7,y:-118.4,alpha:0.52},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:332.5,x:78.3,y:-123.1,alpha:0.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:342,x:79.6,y:-126.8,alpha:0.488},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:349.1,x:80.7,y:-129.6,alpha:0.48},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:354.3,x:81.5,y:-131.5,alpha:0.469},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:357.6,x:82,y:-132.9,alpha:0.461},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:359.6,x:82.4,y:-133.5},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:360,x:82.5,y:-133.8},0).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,-8.3,9.5,9.6);


(lib.particle_flash1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.random_num = Math.floor( Math.random() * 3 ) + 1;
		
		this.gotoAndPlay(this.random_num);
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(14));

	// レイヤー 2
	this.instance = new lib.particle_flash_core();
	this.instance.setTransform(20,-4,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:140.9,x:62,y:-57.8,alpha:0.828},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:189.4,x:67.5,y:-82.3,alpha:0.77},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:223,x:71.2,y:-99,alpha:0.73},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:248.8,x:74.5,y:-111.4,alpha:0.699},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:269.6,x:77.6,y:-121.2,alpha:0.68},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:286.4,x:80.5,y:-129.1,alpha:0.66},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:300.4,x:83.3,y:-135.6,alpha:0.641},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:312.2,x:85.9,y:-141,alpha:0.629},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:322.3,x:88.2,y:-145.3,alpha:0.621},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:330.8,x:90.5,y:-148.9,alpha:0.609},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:337.8,x:92.5,y:-151.9,alpha:0.602},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:343.6,x:94.2,y:-154.3,alpha:0.59},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:348.5,x:95.7,y:-156.1},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:352.3,x:96.9,y:-157.6,alpha:0.578},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:355.3,x:97.9,y:-158.7},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:357.6,x:98.7,y:-159.6,alpha:0.57},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:359.1,x:99.2,y:-160.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:359.8,x:99.5,y:-160.4},0).wait(1).to({rotation:360,x:99.8},0).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.2,-8.2,9.1,9.2);


(lib.particle_flash_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38));

	// particle_flash2
	this.instance = new lib.particle_flash2("synched",0,false);
	this.instance.setTransform(-3.6,44.1,0.859,0.859,-173.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_1 = new lib.particle_flash2("synched",0,false);
	this.instance_1.setTransform(13.6,24.7,0.529,0.529,0,-143.2,36.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_2 = new lib.particle_flash2("synched",0,false);
	this.instance_2.setTransform(8.2,26.5,0.753,0.529,0,-164.9,40.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_3 = new lib.particle_flash1("synched",0,false);
	this.instance_3.setTransform(-26.3,11,0.854,0.508,0,-124.1,76.2,-59.7,-3.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_4 = new lib.particle_flash1("synched",0,false);
	this.instance_4.setTransform(-11.9,28,0.603,0.671,0,102.1,76);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_5 = new lib.particle_flash1("synched",0,false);
	this.instance_5.setTransform(24,22,0.603,0.603,154.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_6 = new lib.particle_flash2("synched",0,false);
	this.instance_6.setTransform(10,40,0.67,0.538,0,-151.5,57.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_7 = new lib.particle_flash1("synched",0,false);
	this.instance_7.setTransform(36,16.5,1.119,1.059,0,-118,42.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_8 = new lib.particle_flash1("synched",0,false);
	this.instance_8.setTransform(-4.2,24.7,0.529,0.892,-178.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_9 = new lib.particle_flash2("synched",0,false);
	this.instance_9.setTransform(2,30.4,1,1,95.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_10 = new lib.particle_flash1("synched",0,false);
	this.instance_10.setTransform(13.6,24.7,0.592,0.529,0,155.1,-24.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_11 = new lib.particle_flash2("synched",0,false);
	this.instance_11.setTransform(2.3,21,0.529,0.529,134.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_12 = new lib.particle_flash2("synched",0,false);
	this.instance_12.setTransform(-40.3,-8.1,0.859,0.859,-88.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_13 = new lib.particle_flash2("synched",0,false);
	this.instance_13.setTransform(-37.9,10,0.529,0.529,0,-53.2,126.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_14 = new lib.particle_flash2("synched",0,false);
	this.instance_14.setTransform(-12.3,14,0.753,0.529,0,-104.9,100.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_15 = new lib.particle_flash1("synched",0,false);
	this.instance_15.setTransform(-0.8,-20.2,0.854,0.508,0,-69.3,131,-59.6,-3.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_16 = new lib.particle_flash1("synched",0,false);
	this.instance_16.setTransform(-27.9,-13.9,0.603,0.671,0,-58.4,-84.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_17 = new lib.particle_flash1("synched",0,false);
	this.instance_17.setTransform(-33.9,20,0.603,0.603,-115.3);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_18 = new lib.particle_flash2("synched",0,false);
	this.instance_18.setTransform(-29.9,16,0.67,0.538,0,-103.5,105.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_19 = new lib.particle_flash1("synched",0,false);
	this.instance_19.setTransform(-23.9,30,1.119,1.059,0,-28,132.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_20 = new lib.particle_flash1("synched",0,false);
	this.instance_20.setTransform(-14.6,1.8,0.529,0.529,-118.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_21 = new lib.particle_flash2("synched",0,false);
	this.instance_21.setTransform(-32,-3.4,1,1,-135.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_22 = new lib.particle_flash1("synched",0,false);
	this.instance_22.setTransform(-14.6,19.6,0.592,0.529,0,-71.9,108);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_23 = new lib.particle_flash2("synched",0,false);
	this.instance_23.setTransform(-10.9,8.3,0.682,1.34,0,-99.9,-139);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_24 = new lib.particle_flash2("synched",0,false);
	this.instance_24.setTransform(6.6,-31.6,0.859,0.859,-6.4);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_25 = new lib.particle_flash2("synched",0,false);
	this.instance_25.setTransform(6.6,-31.6,0.529,0.529,0,36.7,-143.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_26 = new lib.particle_flash2("synched",0,false);
	this.instance_26.setTransform(-5.2,-14.1,0.753,0.529,0,15,-139.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_27 = new lib.particle_flash1("synched",0,false);
	this.instance_27.setTransform(29.3,1.5,0.854,0.508,0,20.6,-138.9,-59.8,-3.8);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_28 = new lib.particle_flash1("synched",0,false);
	this.instance_28.setTransform(4.7,-27.4,0.603,0.671,0,-19.3,-45.4);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_29 = new lib.particle_flash1("synched",0,false);
	this.instance_29.setTransform(10,-23.9,0.603,0.603,19.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_30 = new lib.particle_flash2("synched",0,false);
	this.instance_30.setTransform(-7.1,-27.6,0.67,0.538,0,-7.3,-157.7);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_31 = new lib.particle_flash1("synched",0,false);
	this.instance_31.setTransform(-13.9,-19.9,1.119,1.059,0,-5.2,155.4);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_32 = new lib.particle_flash1("synched",0,false);
	this.instance_32.setTransform(7.1,-12.2,0.529,0.529,-28.4);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_33 = new lib.particle_flash2("synched",0,false);
	this.instance_33.setTransform(8,-17.9,1,1,-45.4);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_34 = new lib.particle_flash1("synched",0,false);
	this.instance_34.setTransform(-10.7,-12.2,0.592,0.529,0,18,-161.9);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_35 = new lib.particle_flash2("synched",0,false);
	this.instance_35.setTransform(0.6,-8.5,0.529,0.529,-45.4);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_36 = new lib.particle_flash2("synched",0,false);
	this.instance_36.setTransform(50,16,0.859,0.859,61.5);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_37 = new lib.particle_flash2("synched",0,false);
	this.instance_37.setTransform(8.5,6.3,0.529,0.529,0,126.7,-53.2);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_38 = new lib.particle_flash2("synched",0,false);
	this.instance_38.setTransform(14.5,-1.2,0.753,0.529,0,105,-49.2);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_39 = new lib.particle_flash1("synched",0,false);
	this.instance_39.setTransform(13.4,36.8,0.854,0.508,0,110.6,-48.9,-59.6,-3.5);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_40 = new lib.particle_flash1("synched",0,false);
	this.instance_40.setTransform(24,-1.9,0.603,0.671,0,70.6,44.5);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_41 = new lib.particle_flash1("synched",0,false);
	this.instance_41.setTransform(38,6,0.603,0.603,64.6);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_42 = new lib.particle_flash2("synched",0,false);
	this.instance_42.setTransform(28,-3.1,0.67,0.538,0,73.4,-77);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_43 = new lib.particle_flash1("synched",0,false);
	this.instance_43.setTransform(28,-11.9,1.119,1.059,0,151.9,-47.2);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_44 = new lib.particle_flash1("synched",0,false);
	this.instance_44.setTransform(13.6,24.7,0.529,0.529,61.5);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_45 = new lib.particle_flash2("synched",0,false);
	this.instance_45.setTransform(21,11.9,1,1,23.5);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_46 = new lib.particle_flash1("synched",0,false);
	this.instance_46.setTransform(12.6,-6.7,0.592,0.529,0,108,-71.9);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_47 = new lib.particle_flash2("synched",0,false);
	this.instance_47.setTransform(8.9,4.6,0.529,0.529,44.5);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1).to({startPosition:0,_off:false},0).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_omikuji_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// omikuji
	this.instance = new lib.gr_omikuji_00();
	this.instance.setTransform(0,0,1,1,0,0,0,62,134);

	this.instance_1 = new lib.gr_omikuji_01();
	this.instance_1.setTransform(0,0,1,1,0,0,0,62,134);

	this.instance_2 = new lib.gr_omikuji_02();
	this.instance_2.setTransform(0,0,1,1,0,0,0,62,134);

	this.instance_3 = new lib.gr_omikuji_03();
	this.instance_3.setTransform(0,0,1,1,0,0,0,62,134);

	this.instance_4 = new lib.gr_omikuji_04();
	this.instance_4.setTransform(0,0,1,1,0,0,0,62,134);

	this.instance_5 = new lib.gr_omikuji_05();
	this.instance_5.setTransform(0,0,1,1,0,0,0,62,134);

	this.instance_6 = new lib.gr_omikuji_06();
	this.instance_6.setTransform(0,0,1,1,0,0,0,62,134);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-133.9,124,268);


(lib.cjs005_omikuji_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.num=0;
		
		this.run = function(num){
			this.num = num;
			
			this.gotoAndPlay("start");
			
		}
	}
	this.frame_28 = function() {
		this.omikuji_set.gotoAndStop(this.num);
	}
	this.frame_34 = function() {
		this.particle.gotoAndPlay("start");
	}
	this.frame_73 = function() {
		this.particle.gotoAndStop(0);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(6).call(this.frame_34).wait(39).call(this.frame_73).wait(32));

	// particle
	this.particle = new lib.particle_flash_container();
	this.particle.setTransform(-28.3,-13.9,0.68,0.68,0,0,0,-38.4,-8);
	this.particle._off = true;

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(1).to({_off:false},0).wait(72).to({x:481.6},0).wait(33));

	// flash
	this.instance = new lib.gr_white();
	this.instance.alpha = 0.801;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({alpha:0.012},5).wait(34).to({x:530},0).wait(33));

	// cover
	this.instance_1 = new lib.gr_omikuji_cover();
	this.instance_1.setTransform(-0.1,-23.9,1,1,0,0,0,-0.2,0);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:0,x:0,y:2,alpha:1},5,cjs.Ease.get(1)).to({y:0},3,cjs.Ease.get(-0.99)).wait(6).to({scaleX:0.16},10,cjs.Ease.get(1)).to({scaleX:0.08},3).wait(1).to({scaleX:1,alpha:0.012},0).to({_off:true},5).wait(72));

	// omikuji_set
	this.omikuji_set = new lib.mc_omikuji_set();
	this.omikuji_set.setTransform(520,0);
	this.omikuji_set.alpha = 0.012;
	this.omikuji_set._off = true;

	this.timeline.addTween(cjs.Tween.get(this.omikuji_set).wait(1).to({_off:false},0).wait(27).to({scaleX:0.08,x:0,alpha:1},0).wait(2).to({scaleX:0.55},3,cjs.Ease.get(-0.99)).wait(1).to({scaleX:1},0).wait(34).to({y:23,alpha:0.012},4,cjs.Ease.get(-0.99)).wait(1).to({x:660},0).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
