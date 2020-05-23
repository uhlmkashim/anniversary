(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._003_voice_ch2 = function() {
	this.initialize(img.voice_election_result_2__003_voice_ch2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,640);


(lib._004_place_2 = function() {
	this.initialize(img.voice_election_result_2__004_place_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,152);


(lib._004_voice_votes_2 = function() {
	this.initialize(img.voice_election_result_2__004_voice_votes_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,472,84);


(lib._005_shuttle_co = function() {
	this.initialize(img.voice_election_result_2__005_shuttle_co);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,392);


(lib._005_shuttle_cu = function() {
	this.initialize(img.voice_election_result_2__005_shuttle_cu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,392);


(lib._005_shuttle_pa = function() {
	this.initialize(img.voice_election_result_2__005_shuttle_pa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,392);


(lib._005_textflame = function() {
	this.initialize(img.voice_election_result_2__005_textflame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,206);


(lib._005_voice_name_2 = function() {
	this.initialize(img.voice_election_result_2__005_voice_name_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,108);


(lib.bg = function() {
	this.initialize(img.voice_election_result_2_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,640);


(lib.bottom = function() {
	this.initialize(img.voice_election_result_2_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,182);


(lib.fp_flower3 = function() {
	this.initialize(img.voice_election_result_2_fp_flower3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,22);


(lib.sign_voice2 = function() {
	this.initialize(img.voice_election_result_2_sign_voice2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,108);


(lib.sp_kirakira = function() {
	this.initialize(img.voice_election_result_2_sp_kirakira);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);// helper functions:

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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	this.shape.setTransform(119.95,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,0,240,320), null);


(lib.パーティクル_pp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = 0*/
		this.visible = false;
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

}).prototype = getMCSymbolPrototype(lib.パーティクル_pp, new cjs.Rectangle(-5.2,-179.6,149,185.2), null);


(lib.パーティクル_p = function(mode,startPosition,loop) {
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


(lib.シンボル10000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル10000, new cjs.Rectangle(-148.1,-2.9,296.29999999999995,5.9), null);


(lib.シンボル5000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = 0*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF62FF").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル5000, new cjs.Rectangle(-7.3,-7.3,14.6,14.6), null);


(lib.シンボル12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUgpICpAAIhVBUg");
	this.shape.setTransform(-0.025,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル12, new cjs.Rectangle(-8.5,-8.5,17,8.5), null);


(lib.シンボル10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.298,0.522,1,1],0,0,0,0,0,130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル10, new cjs.Rectangle(-129.2,-129.2,258.4,258.4), null);


(lib.シンボル9のコピー = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,253,143,0.957)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.282,0.455,1,1],0,0,0,0,0,130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル9のコピー, new cjs.Rectangle(-129.2,-129.2,258.4,258.4), null);


(lib.tracer_grip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		_visible=0*/
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5FFFBC").s().p("AgxAyIAAhjIBjAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tracer_grip, new cjs.Rectangle(-5,-5,10,10), null);


(lib.sign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 9th_v2
	this.instance = new lib.sign_voice2();
	this.instance.parent = this;
	this.instance.setTransform(-111,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign, new cjs.Rectangle(-344,-420,482,640), null);


(lib.shape38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AufO/IAA99Ic+AAIAAd9g");
	this.shape.setTransform(10.05,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-95.8,185.5,191.7);


(lib.particle_trace_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.particle_trace_core, new cjs.Rectangle(-1.2,-1.2,2.4,2.4), null);


(lib.grip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = false;*/
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkkAAIEkkkIElEkIklElg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grip, new cjs.Rectangle(-29.3,-29.3,58.7,58.7), null);


(lib.gr_votes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 9th_v_votes2
	this.instance = new lib._004_voice_votes_2();
	this.instance.parent = this;
	this.instance.setTransform(-118,-14,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_votes, new cjs.Rectangle(-118,-17,236,45), null);


(lib.gr_shuttle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* switch(/:attribute){
		 case 1:
		 case 2:
		 case 3:
				gotoAndStop(/:attribute);
		
			break;
		default:
			stop();
		break;
		}
		*/
		
		switch(exportRoot.attribute){
		 case 1:
		 case 2:
		 case 3:
			this.gotoAndStop(exportRoot.attribute);
		
			break;
		default:
			this.stop();
		break;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// レイヤー_1
	this.instance = new lib._005_shuttle_cu();
	this.instance.parent = this;
	this.instance.setTransform(-98,-98,0.5,0.5);

	this.instance_1 = new lib._005_shuttle_co();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-98,-98,0.5,0.5);

	this.instance_2 = new lib._005_shuttle_pa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98,-98,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-98,196,196);


(lib.gr_number = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 9th_v_name_2
	this.instance = new lib._005_voice_name_2();
	this.instance.parent = this;
	this.instance.setTransform(-236,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_number, new cjs.Rectangle(-238,-108,657,200), null);


(lib.gr_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 9th_bottom
	this.instance = new lib.bottom();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_base, new cjs.Rectangle(0,0,240,91), null);


(lib.ef_flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.922)","rgba(255,239,128,0.569)","rgba(255,239,128,0)"],[0,0.494,1],166,-0.4,-165.9,-0.4).s().p("A57HNIAAuZMAz3AAAIAAOZg");
	this.shape.setTransform(-166.025,-20.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ef_flash, new cjs.Rectangle(-332,-66.2,332,92.1), null);


(lib.cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AmplwINTAAImqLhg");
	this.shape.setTransform(-8.15,-15.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Al7lIIL3AAIl8KRg");
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cursor, new cjs.Rectangle(-50.7,-52.3,88.7,85.19999999999999), null);


(lib.bg_gra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 9th_v_bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_gra, new cjs.Rectangle(0,0,240,320), null);


(lib._kirakira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _0x40
	this.instance = new lib.sp_kirakira();
	this.instance.parent = this;
	this.instance.setTransform(-8,-8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._kirakira, new cjs.Rectangle(-8,-8,16,16), null);


(lib._flower1_1_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.663)").s().p("Ag3BXQgFgCgDgFQgHgJgCgLQgTgIgIglIAAAAQgGgcAVgSQAOgOAjgHIAFAAQAnACA4gkQAGgEAJACQAMACAEAOQASBFgsAvQgjAphQAEIgCAAQgEAAgEgCgAghgqQgfAGgOAMQgQAPAFAWQAHAjASAEQACAMAHALIAEADIAFABQBLgDAhgmQAogrgQhBQgCgIgGgBQgEgBgDADQg8AmgqgDIAAAAIgCAAg");
	this.shape.setTransform(-0.4522,0.0056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.329)").s().p("Ag7BgQgHgDgEgHQgGgIgDgJQgUgLgIgpQgHghAYgWQAQgRAngGIAHgBQAlABA0ghQAJgFAKABQALABAHAHQAIAHABAKQAMBRgoArQglAshWAFIgBAAQgHAAgHgEgAgig0QgiAHgPAOQgUATAGAbIAAAAQAHAlATAJQADAKAGAKQADAEAFADQAFACAFAAQBQgFAjgpQAsgvgShFQgEgOgMgCQgJgBgFADQg5AkgngCIgBAAIgEAAg");
	this.shape_1.setTransform(-0.5846,-0.0065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBPIgDgEQgIgLgBgMQgSgEgIgjQgEgWAQgOQANgNAfgGIADAAQApADA8gmQADgCAEABQAGAAACAIQAQBBgnArQghAmhMAEIAAAAIgFgBg");
	this.shape_2.setTransform(-0.4869,-0.0144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._flower1_1_copy, new cjs.Rectangle(-11.5,-9.9,21.9,19.9), null);


(lib._flower1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.fp_flower3();
	this.instance.parent = this;
	this.instance.setTransform(-12,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._flower1_1, new cjs.Rectangle(-12,-11,24,22), null);


(lib._btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	this.shape.setTransform(120,160);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


(lib._bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 9th_v_bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._bg1, new cjs.Rectangle(-120,-160,480,640), null);


(lib.___rank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _
	this.instance = new lib._004_place_2();
	this.instance.parent = this;
	this.instance.setTransform(-62,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.___rank, new cjs.Rectangle(-71.5,-13,143,88), null);


(lib.___character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 9th_v2
	this.instance = new lib._003_voice_ch2();
	this.instance.parent = this;
	this.instance.setTransform(-290,-640);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.___character, new cjs.Rectangle(-355,-698,749,720), null);


(lib.パーティクル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		/* stop()*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(15));

	// レイヤー_3
	this.instance = new lib.パーティクル_pp();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 0, 0, 0)];
	this.instance.cache(-7,-182,153,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// レイヤー_2
	this.instance_1 = new lib.パーティクル_p();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.95,-4.05,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.3,regY:0.5,scaleX:0.5693,scaleY:0.5693,rotation:-174.9492,x:63.5,y:-63.95,alpha:0.7229},0).wait(1).to({scaleX:0.5097,scaleY:0.5097,rotation:-119.2289,x:69.8,y:-92.55,alpha:0.6395},0).wait(1).to({scaleX:0.4735,scaleY:0.4735,rotation:-85.4829,x:73.05,y:-105.4,alpha:0.5889},0).wait(1).to({scaleX:0.4484,scaleY:0.4484,rotation:-61.9876,x:75,y:-112.55,alpha:0.5538},0).wait(1).to({scaleX:0.4299,scaleY:0.4299,rotation:-44.682,x:76.65,y:-118.2,alpha:0.5278},0).wait(1).to({scaleX:0.4159,scaleY:0.4159,rotation:-31.6108,x:78.1,y:-122.6,alpha:0.5083},0).wait(1).to({scaleX:0.4052,scaleY:0.4052,rotation:-21.661,x:79.25,y:-126,alpha:0.4934},0).wait(1).to({scaleX:0.3972,scaleY:0.3972,rotation:-14.1306,x:80.25,y:-128.65,alpha:0.4821},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,rotation:-8.5439,x:81.05,y:-130.7,alpha:0.4737},0).wait(1).to({scaleX:0.3869,scaleY:0.3869,rotation:-4.5615,x:81.6,y:-132.1,alpha:0.4678},0).wait(1).to({scaleX:0.3841,scaleY:0.3841,rotation:-1.9317,x:82,y:-133.05,alpha:0.4638},0).wait(1).to({scaleX:0.3826,scaleY:0.3826,rotation:-0.4617,x:82.25,y:-133.6,alpha:0.4616},0).wait(1).to({regX:0,regY:0,scaleX:0.382,scaleY:0.382,rotation:0,x:82.45,y:-134,alpha:0.4609},0).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-178.7,148.5,184.7);


(lib.パーティクル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		r=random(3)+2
		gotoAndPlay(r)
		*/
		var r = (Math.random()*3|0)+1;
		this.gotoAndPlay(r);
	}
	this.frame_21 = function() {
		/* stop()*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));

	// レイヤー_3
	this.instance = new lib.パーティクル_pp();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// レイヤー_2
	this.instance_1 = new lib.パーティクル_p();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.95,-4.05,0.7347,0.7347);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.3,regY:0.5,scaleX:0.5967,scaleY:0.5967,rotation:140.8707,x:62.05,y:-58.8,alpha:0.8319},0).wait(1).to({scaleX:0.5493,scaleY:0.5493,rotation:189.3068,x:69,y:-89.15,alpha:0.774},0).wait(1).to({scaleX:0.5163,scaleY:0.5163,rotation:222.9188,x:73.15,y:-105.8,alpha:0.7339},0).wait(1).to({scaleX:0.4911,scaleY:0.4911,rotation:248.676,x:76.1,y:-115.9,alpha:0.7032},0).wait(1).to({scaleX:0.4709,scaleY:0.4709,rotation:269.3198,x:78.9,y:-124.25,alpha:0.6785},0).wait(1).to({scaleX:0.4543,scaleY:0.4543,rotation:286.2744,x:81.55,y:-131.4,alpha:0.6583},0).wait(1).to({scaleX:0.4404,scaleY:0.4404,rotation:300.3959,x:84.35,y:-137.6,alpha:0.6415},0).wait(1).to({scaleX:0.4288,scaleY:0.4288,rotation:312.2476,x:86.65,y:-142.35,alpha:0.6273},0).wait(1).to({scaleX:0.4191,scaleY:0.4191,rotation:322.2242,x:88.85,y:-146.2,alpha:0.6154},0).wait(1).to({scaleX:0.4108,scaleY:0.4108,rotation:330.6158,x:90.85,y:-149.45,alpha:0.6054},0).wait(1).to({scaleX:0.404,scaleY:0.404,rotation:337.643,x:92.7,y:-152.15,alpha:0.597},0).wait(1).to({scaleX:0.3982,scaleY:0.3982,rotation:343.4783,x:94.3,y:-154.4,alpha:0.59},0).wait(1).to({scaleX:0.3936,scaleY:0.3936,rotation:348.2599,x:95.7,y:-156.2,alpha:0.5843},0).wait(1).to({scaleX:0.3898,scaleY:0.3898,rotation:352.1005,x:96.9,y:-157.65,alpha:0.5797},0).wait(1).to({scaleX:0.3869,scaleY:0.3869,rotation:355.0937,x:97.85,y:-158.75,alpha:0.5762},0).wait(1).to({scaleX:0.3847,scaleY:0.3847,rotation:357.3179,x:98.6,y:-159.55,alpha:0.5735},0).wait(1).to({scaleX:0.3832,scaleY:0.3832,rotation:358.8401,x:99.1,y:-160.1,alpha:0.5717},0).wait(1).to({scaleX:0.3823,scaleY:0.3823,rotation:359.7175,x:99.4,y:-160.4,alpha:0.5706},0).wait(1).to({regX:0,regY:0,scaleX:0.382,scaleY:0.382,rotation:360,x:99.8,y:-160.55,alpha:0.5703},0).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-178.7,148.5,184.7);


(lib.シンボル4000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		if(/:iosFlg == 1) {
			_visible = 0
			gotoAndStop(3)
		}else {
			gotoAndPlay(random(40)+2)
		}*/
	}
	this.frame_58 = function() {
		/* _x = random(241)
		gotoAndPlay(2)*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));

	// 花びら
	this.instance = new lib._flower1_1();
	this.instance.parent = this;
	this.instance.setTransform(-1,-0.3,1,1,-53.9686);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:39.7252,x:-0.9155,y:5.8655},0).wait(1).to({scaleX:0.9998,rotation:51.913,x:-1.591,y:17.7944},0).wait(1).to({scaleY:0.9998,rotation:68.1774,x:-4.178,y:32.4567},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:87.8993,x:-9.9359,y:48.8766},0).wait(1).to({scaleX:0.9996,scaleY:0.9995,rotation:109.8504,x:-19.982,y:65.6581},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:131.6234,x:-34.3759,y:80.9461},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:150.7176,x:-51.2095,y:93.0807},0).wait(1).to({scaleY:0.9992,rotation:165.701,x:-67.1628,y:101.4453},0).wait(1).to({scaleX:0.9992,rotation:15.0346,x:-76.45,y:105.35},0).wait(1).to({scaleX:0.9446,scaleY:0.9985,rotation:0,skewX:46.9952,skewY:-133.0049,x:-74.6,y:117.95},0).wait(1).to({skewX:45.0775,skewY:-134.9227,x:-73.4758,y:122.4738},0).wait(1).to({skewX:40.7786,skewY:-139.2215,x:-70.7949,y:131.8075},0).wait(1).to({skewX:35.1625,skewY:-144.8377,x:-66.5788,y:143.5308},0).wait(1).to({skewX:28.7159,skewY:-151.2842,x:-60.3987,y:156.8658},0).wait(1).to({scaleX:0.9447,skewX:21.7194,skewY:-158.2807,x:-51.763,y:171.044},0).wait(1).to({skewX:14.3621,skewY:-165.638,x:-40.1507,y:185.2909},0).wait(1).to({skewX:6.7903,skewY:-173.2097,x:-25.3215,y:198.6214},0).wait(1).to({scaleX:0.9446,skewX:-0.8645,skewY:-180.8646,x:-7.6655,y:210.0087},0).wait(1).to({scaleX:0.9447,skewX:-8.4642,skewY:-188.4642,x:11.6655,y:218.7629},0).wait(1).to({scaleX:0.9446,skewX:-15.8344,skewY:-195.8344,x:31.1193,y:224.807},0).wait(1).to({skewX:-22.7064,skewY:-202.7064,x:49.1964,y:228.5541},0).wait(1).to({skewX:-28.5462,skewY:-208.5462,x:64.2311,y:230.5734},0).wait(1).to({skewX:-31.6765,skewY:-211.6764,x:72.1,y:231.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-47.468,skewX:0,skewY:-360,x:75.1,y:239.7},0).wait(1).to({rotation:61.2863,x:73.8023,y:243.9044},0).wait(1).to({rotation:66.2544,x:70.9938,y:252.3826},0).wait(1).to({rotation:72.8937,x:67.0616,y:262.8728},0).wait(1).to({rotation:80.9051,x:61.8722,y:274.8177},0).wait(1).to({rotation:90.1522,x:55.2654,y:287.6785},0).wait(1).to({rotation:100.5908,x:47.0232,y:300.9965},0).wait(1).to({rotation:112.1971,x:36.8879,y:314.3216},0).wait(1).to({rotation:124.8645,x:24.638,y:327.1218},0).wait(1).to({rotation:138.2593,x:10.2663,y:338.7284},0).wait(1).to({rotation:151.7771,x:-5.884,y:348.4802},0).wait(1).to({rotation:164.6088,x:-22.9466,y:355.889},0).wait(1).to({rotation:175.9378,x:-39.5514,y:360.8491},0).wait(1).to({rotation:184.8983,x:-53.7334,y:363.6449},0).wait(1).to({rotation:15.9802,x:-61.15,y:364.75},0).wait(1).to({scaleX:0.9446,scaleY:0.9985,rotation:0,skewX:46.9952,skewY:-493.0049,x:-70.3,y:369.75},0).wait(1).to({skewX:134.3444,skewY:-405.6557,x:-70.5702,y:374.199},0).wait(1).to({skewX:125.0094,skewY:-414.9907,x:-70.1305,y:383.689},0).wait(1).to({skewX:112.2593,skewY:-427.7407,x:-68.369,y:396.0601},0).wait(1).to({scaleX:0.9447,skewX:96.7257,skewY:-443.2742,x:-64.3728,y:410.4445},0).wait(1).to({skewX:79.0999,skewY:-460.8999,x:-57.2005,y:426.031},0).wait(1).to({scaleX:0.9446,skewX:60.6403,skewY:-479.3595,x:-46.2741,y:441.6724},0).wait(1).to({skewX:42.9229,skewY:-497.0768,x:-31.9709,y:456.0157},0).wait(1).to({skewX:27.0151,skewY:-512.9846,x:-15.6806,y:468.0813},0).wait(1).to({skewX:13.1954,skewY:-526.8042,x:0.9382,y:477.622},0).wait(1).to({scaleX:0.9447,skewX:1.4332,skewY:-538.5663,x:16.5332,y:484.8688},0).wait(1).to({scaleX:0.9446,skewX:-7.9622,skewY:-547.9617,x:29.6981,y:490.0306},0).wait(1).to({skewX:-31.5042,skewY:-571.5036,x:36.75,y:492.5},0).to({_off:true},1).wait(2));

	// レイヤー_3
	this.instance_1 = new lib.シンボル5000();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.9,-16.4,182.2,524.2);


(lib.シンボル13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		/* 
		gotoAndPlay(1)*/
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// レイヤー_1
	this.instance = new lib.シンボル12();
	this.instance.parent = this;
	this.instance.setTransform(0,-10.05,1,1,0,0,0,0,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-4.3,y:-8.05},0).wait(1).to({y:-6.5},0).wait(1).to({y:-4.95},0).wait(1).to({regY:-5.6,y:-5.6},0).wait(1).to({regY:-4.3,y:-4.95},0).wait(1).to({y:-6.5},0).wait(1).to({y:-8.05},0).wait(1).to({regY:-5.6,y:-10.05},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-12.9,17,12.9);


(lib.シンボル9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		/* gotoAndPlay( 1 );
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// レイヤー_1
	this.instance = new lib.シンボル10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9987,scaleY:0.9987,alpha:0.9974},0).wait(1).to({scaleX:0.9956,scaleY:0.9956,alpha:0.9913},0).wait(1).to({scaleX:0.9906,scaleY:0.9906,alpha:0.9815},0).wait(1).to({scaleX:0.9838,scaleY:0.9838,alpha:0.9681},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,alpha:0.9519},0).wait(1).to({scaleX:0.9664,scaleY:0.9664,alpha:0.9338},0).wait(1).to({scaleX:0.957,scaleY:0.957,alpha:0.9155},0).wait(1).to({scaleX:0.9483,scaleY:0.9483,alpha:0.8983},0).wait(1).to({scaleX:0.9408,scaleY:0.9408,alpha:0.8835},0).wait(1).to({scaleX:0.9349,scaleY:0.9349,alpha:0.872},0).wait(1).to({scaleX:0.9309,scaleY:0.9309,alpha:0.864},0).wait(1).to({scaleX:0.9285,scaleY:0.9285,alpha:0.8594},0).wait(1).to({scaleX:0.9298,scaleY:0.9298,alpha:0.862},0).wait(1).to({scaleX:0.933,scaleY:0.933,alpha:0.8681},0).wait(1).to({scaleX:0.938,scaleY:0.938,alpha:0.8779},0).wait(1).to({scaleX:0.9447,scaleY:0.9447,alpha:0.8912},0).wait(1).to({scaleX:0.953,scaleY:0.953,alpha:0.9075},0).wait(1).to({scaleX:0.9622,scaleY:0.9622,alpha:0.9255},0).wait(1).to({scaleX:0.9715,scaleY:0.9715,alpha:0.9439},0).wait(1).to({scaleX:0.9802,scaleY:0.9802,alpha:0.9611},0).wait(1).to({scaleX:0.9877,scaleY:0.9877,alpha:0.9758},0).wait(1).to({scaleX:0.9936,scaleY:0.9936,alpha:0.9874},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,alpha:0.9954},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,-129.2,258.4,258.4);


(lib.シンボル4のコピー000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		if(/:iosFlg == 1) {
			_visible = 0
			gotoAndStop(3)
		}else {
			gotoAndPlay(random(40)+2)
		}
		
		_x = random(240)*/
	}
	this.frame_58 = function() {
		/* _x = random(241)
		gotoAndPlay(2)*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));

	// 花びら
	this.instance = new lib._flower1_1_copy();
	this.instance.parent = this;
	this.instance.setTransform(-1,-0.3,1,1,-53.9686);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:-0.6,scaleX:0.9999,scaleY:0.9999,rotation:39.7252,x:-1.35,y:5.45},0).wait(1).to({scaleX:0.9998,rotation:51.913,x:-1.9,y:17.3},0).wait(1).to({scaleY:0.9998,rotation:68.1774,x:-4.35,y:31.9},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:87.8993,x:-9.9,y:48.25},0).wait(1).to({scaleX:0.9996,scaleY:0.9995,rotation:109.8504,x:-19.75,y:65.1},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:131.6234,x:-33.95,y:80.45},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:150.7176,x:-50.7,y:92.75},0).wait(1).to({scaleY:0.9992,rotation:165.701,x:-66.55,y:101.25},0).wait(1).to({regX:0,scaleX:0.9992,rotation:15.0346,x:-76.45,y:105.35},0).wait(1).to({scaleX:0.9446,scaleY:0.9985,rotation:0,skewX:46.9952,skewY:-133.0049,x:-74.6,y:117.95},0).wait(1).to({regX:-0.6,skewX:45.0775,skewY:-134.9227,x:-73.05,y:122.85},0).wait(1).to({skewX:40.7786,skewY:-139.2215,x:-70.3,y:132.15},0).wait(1).to({skewX:35.1625,skewY:-144.8377,x:-66.1,y:143.85},0).wait(1).to({skewX:28.7159,skewY:-151.2842,x:-59.85,y:157.1},0).wait(1).to({scaleX:0.9447,skewX:21.7194,skewY:-158.2807,x:-51.2,y:171.2},0).wait(1).to({skewX:14.3621,skewY:-165.638,x:-39.6,y:185.4},0).wait(1).to({skewX:6.7903,skewY:-173.2097,x:-24.75,y:198.65},0).wait(1).to({scaleX:0.9446,skewX:-0.8645,skewY:-180.8646,x:-7.1,y:210},0).wait(1).to({scaleX:0.9447,skewX:-8.4642,skewY:-188.4642,x:12.2,y:218.65},0).wait(1).to({scaleX:0.9446,skewX:-15.8344,skewY:-195.8344,x:31.65,y:224.65},0).wait(1).to({skewX:-22.7064,skewY:-202.7064,x:49.65,y:228.35},0).wait(1).to({skewX:-28.5462,skewY:-208.5462,x:64.7,y:230.3},0).wait(1).to({regX:0,skewX:-31.6765,skewY:-211.6764,x:72.1,y:231.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-47.468,skewX:0,skewY:-360,x:75.1,y:239.7},0).wait(1).to({regX:-0.6,rotation:61.2863,x:73.5,y:243.35},0).wait(1).to({rotation:66.2544,x:70.7,y:251.8},0).wait(1).to({rotation:72.8937,x:66.85,y:262.3},0).wait(1).to({rotation:80.9051,x:61.75,y:274.2},0).wait(1).to({rotation:90.1522,x:55.25,y:287.05},0).wait(1).to({rotation:100.5908,x:47.1,y:300.35},0).wait(1).to({rotation:112.1971,x:37.1,y:313.75},0).wait(1).to({rotation:124.8645,x:24.95,y:326.6},0).wait(1).to({rotation:138.2593,x:10.7,y:338.3},0).wait(1).to({rotation:151.7771,x:-5.3,y:348.15},0).wait(1).to({rotation:164.6088,x:-22.3,y:355.7},0).wait(1).to({rotation:175.9378,x:-38.95,y:360.75},0).wait(1).to({rotation:184.8983,x:-53.1,y:363.65},0).wait(1).to({regX:0,rotation:15.9802,x:-61.15,y:364.75},0).wait(1).to({scaleX:0.9446,scaleY:0.9985,rotation:0,skewX:46.9952,skewY:-493.0049,x:-70.3,y:369.75},0).wait(1).to({regX:-0.6,skewX:134.3444,skewY:-405.6557,x:-70.95,y:374.55},0).wait(1).to({skewX:125.0094,skewY:-414.9907,x:-70.45,y:384.1},0).wait(1).to({skewX:112.2593,skewY:-427.7407,x:-68.55,y:396.55},0).wait(1).to({scaleX:0.9447,skewX:96.7257,skewY:-443.2742,x:-64.4,y:410.95},0).wait(1).to({skewX:79.0999,skewY:-460.9,x:-57.1,y:426.55},0).wait(1).to({scaleX:0.9446,skewX:60.6403,skewY:-479.3595,x:-45.95,y:442.15},0).wait(1).to({skewX:42.9229,skewY:-497.0768,x:-31.55,y:456.4},0).wait(1).to({skewX:27.0151,skewY:-512.9845,x:-15.15,y:468.3},0).wait(1).to({skewX:13.1954,skewY:-526.8042,x:1.45,y:477.75},0).wait(1).to({scaleX:0.9447,skewX:1.4332,skewY:-538.5663,x:17.05,y:484.85},0).wait(1).to({scaleX:0.9446,skewX:-7.9622,skewY:-547.9617,x:30.2,y:489.9},0).wait(1).to({regX:0,skewX:-31.5042,skewY:-571.5036,x:36.75,y:492.5},0).to({_off:true},1).wait(2));

	// レイヤー_3
	this.instance_1 = new lib.シンボル5000();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-14.5,179.7,520.6);


(lib.tracer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* ../:c = 10;*/
		this.parent.c = 10;
	}
	this.frame_1 = function() {
		/* 
		tellTarget ("../") {
			bx = 40;
			by = 30;
			for( i = 0; i < 3; i++ ) {
				n = "p" add c;
				duplicateMovieClip( "pa", n, c );
				eval("/tx/" add n)._x = pb._x + random( bx ) - bx / 2;
				eval("/tx/" add n)._y = pb._y + random( by ) - by / 2;
				//eval("/tx/" add n)._rotation = random(60)-30
				eval("/tx/" add n)._xscale = eval("/tx/" add n)._yscale = random(100);
				c++;
			}
		}*/
		var parent = this.parent;
		var bx = 40;
		var by = 30;
		for( var i = 0; i < 3; i++ ) {
			// var n = "p" add parent.c;
			// duplicateMovieClip( "pa", n, c );
			var pa = new lib.particle_trace();
			// var pa = parent.pa.clone(true);
			parent.addChild(pa);
			//eval("/tx/" add n)._x = pb._x + random( bx ) - bx / 2;
			//eval("/tx/" add n)._y = pb._y + random( by ) - by / 2;
			pa.x = this.x + (Math.random()*bx|0) - bx/2;
			pa.y = this.y + (Math.random()*by|0) - by/2;
			//eval("/tx/" add n)._rotation = random(60)-30
			//eval("/tx/" add n)._xscale = eval("/tx/" add n)._yscale = random(100);
			pa.scaleX = pa.scaleY = (Math.random()*100|0)/100;
			parent.c++;
		}
	}
	this.frame_2 = function() {
		/* 
		gotoAndPlay(2)*/
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// dummy
	this.instance = new lib.tracer_grip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.sprite43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		/* gotoAndPlay(_currentFrame + random(7)+1)*/
		this.gotoAndPlay( this.currentFrame + (Math.random()*7|0) + 1 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(10));

	// Layer_1
	this.instance = new lib.grip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(17));

	// レイヤー_2
	this.instance_1 = new lib.シンボル10000();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.05,0,0.1255,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1},0).to({scaleX:0.5,alpha:0.1289},4).to({_off:true},1).wait(11));

	// レイヤー_3
	this.instance_2 = new lib._kirakira();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.6427,0.6427,-44.822);
	this.instance_2.alpha = 0.4297;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:3.7607,scaleY:3.7607,rotation:-11.2055,alpha:0.8574},0).wait(1).to({scaleX:4.8,scaleY:4.8,rotation:0,alpha:1},0).wait(1).to({scaleX:4.722,scaleY:4.722,rotation:1.9399,alpha:0.971},0).wait(1).to({scaleX:4.5026,scaleY:4.5026,rotation:7.4005,alpha:0.8893},0).wait(1).to({scaleX:4.1415,scaleY:4.1415,rotation:16.3817,alpha:0.7549},0).wait(1).to({scaleX:3.6391,scaleY:3.6391,rotation:28.8836,alpha:0.5678},0).wait(1).to({scaleX:2.9951,scaleY:2.9951,rotation:44.9061,alpha:0.3281},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.2,-41,296.29999999999995,82.1);


(lib.sprite39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* setProperty("", _visible, 0);
		*/
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.shape38("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite39, new cjs.Rectangle(-82.7,-95.8,185.5,191.7), null);


(lib.particle_trace_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* stop()*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// レイヤー_1
	this.instance = new lib.particle_trace_core();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0461,scaleY:1.0461},0).wait(1).to({scaleX:0.9106,scaleY:0.9106},0).wait(1).to({scaleX:0.8063,scaleY:0.8063},0).wait(1).to({scaleX:0.7216,scaleY:0.7216},0).wait(1).to({scaleX:0.6507,scaleY:0.6507},0).wait(1).to({scaleX:0.5907,scaleY:0.5907},0).wait(1).to({scaleX:0.5394,scaleY:0.5394},0).wait(1).to({scaleX:0.4958,scaleY:0.4958},0).wait(1).to({scaleX:0.4587,scaleY:0.4587},0).wait(1).to({scaleX:0.4275,scaleY:0.4275},0).wait(1).to({scaleX:0.4018,scaleY:0.4018},0).wait(1).to({scaleX:0.3812,scaleY:0.3812},0).wait(1).to({scaleX:0.3655,scaleY:0.3655},0).wait(1).to({scaleX:0.3543,scaleY:0.3543},0).wait(1).to({scaleX:0.3477,scaleY:0.3477},0).wait(1).to({scaleX:0.3455,scaleY:0.3455},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,3,3);


(lib.particle_trace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		/* stop()*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// レイヤー_2
	this.instance = new lib.particle_trace_inner("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:3.9211,y:-14.5203,startPosition:1},0).wait(1).to({x:3.2129,y:-23.5615,startPosition:2},0).wait(1).to({x:1.3397,y:-30.4855,startPosition:3},0).wait(1).to({x:-0.5516,y:-35.6579,startPosition:4},0).wait(1).to({x:-1.6987,y:-39.9101,startPosition:5},0).wait(1).to({x:-2.3318,y:-43.695,startPosition:6},0).wait(1).to({x:-2.5918,y:-47.1179,startPosition:7},0).wait(1).to({x:-2.5741,y:-50.1833,startPosition:8},0).wait(1).to({x:-2.3612,y:-52.9041,startPosition:9},0).wait(1).to({x:-2.0208,y:-55.2998,startPosition:10},0).wait(1).to({x:-1.6342,y:-57.3618,startPosition:11},0).wait(1).to({x:-1.28,y:-58.911,startPosition:12},0).wait(1).to({x:-0.9104,y:-60.2762,startPosition:13},0).wait(1).to({x:-0.5325,y:-61.4736,startPosition:14},0).wait(1).to({x:-0.159,y:-62.5032,startPosition:15},0).wait(1).to({x:0.1948,y:-63.3645,startPosition:16},0).wait(1).to({x:0.5104,y:-64.054,startPosition:17},0).wait(1).to({x:0.7659,y:-64.565,startPosition:18},0).wait(1).to({x:0.9374,y:-64.8866,startPosition:19},0).wait(1).to({x:1,y:-65},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-63.7,8.4,64.10000000000001);


(lib.mc_votes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(2));

	// particle
	this.pa = new lib.particle_trace();
	this.pa.name = "pa";
	this.pa.parent = this;
	this.pa.setTransform(-121.15,4.1);

	this.timeline.addTween(cjs.Tween.get(this.pa).wait(20));

	// trace_idn
	this.pb = new lib.tracer();
	this.pb.name = "pb";
	this.pb.parent = this;
	this.pb.setTransform(-121,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.pb).wait(2).to({x:-82.6496,y:-0.2432},0).wait(1).to({x:-47.8279,y:-0.3732},0).wait(1).to({x:-16.3944,y:-0.4906},0).wait(1).to({x:11.7473,y:-0.5956},0).wait(1).to({x:36.6577,y:-0.6886},0).wait(1).to({x:58.3675,y:-0.7697},0).wait(1).to({x:76.8809,y:-0.8388},0).wait(1).to({x:92.1785,y:-0.8959},0).wait(1).to({x:104.2187,y:-0.9409},0).wait(1).to({x:112.938,y:-0.9734},0).wait(1).to({x:118.251,y:-0.9933},0).wait(1).to({x:120.05,y:-1},0).to({_off:true},1).wait(6));

	// grd
	this.instance = new lib.ef_flash();
	this.instance.parent = this;
	this.instance.setTransform(-122,10,0.1143,0.5);
	this.instance.alpha = 0.8594;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-112},1,cjs.Ease.get(1)).wait(1).to({regX:-166,regY:-20.2,scaleX:0.1698,scaleY:0.5238,x:-85.75,y:-0.6,alpha:0.6552},0).wait(1).to({scaleX:0.2098,scaleY:0.5409,x:-53.2,y:-0.95,alpha:0.5081},0).wait(1).to({scaleX:0.2409,scaleY:0.5542,x:-27.9,y:-1.2,alpha:0.3936},0).wait(1).to({scaleX:0.266,scaleY:0.5649,x:-7.45,y:-1.4,alpha:0.3012},0).wait(1).to({scaleX:0.2866,scaleY:0.5737,x:9.3,y:-1.6,alpha:0.2256},0).wait(1).to({scaleX:0.3035,scaleY:0.581,x:23,y:-1.75,alpha:0.1635},0).wait(1).to({scaleX:0.3173,scaleY:0.5869,x:34.25,y:-1.85,alpha:0.1129},0).wait(1).to({scaleX:0.3283,scaleY:0.5916,x:43.2,y:-1.95,alpha:0.0723},0).wait(1).to({scaleX:0.3368,scaleY:0.5952,x:50.15,y:-2,alpha:0.041},0).wait(1).to({scaleX:0.3429,scaleY:0.5978,x:55.15,y:-2.1,alpha:0.0185},0).wait(1).to({scaleX:0.3467,scaleY:0.5994,x:58.15,alpha:0.0047},0).wait(1).to({regX:0,regY:0,scaleX:0.3479,scaleY:0.6,x:117,y:10,alpha:0},0).to({_off:true},1).wait(6));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A8RZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_1 = new cjs.Graphics().p("A8HZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_2 = new cjs.Graphics().p("A3qZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_3 = new cjs.Graphics().p("A0dZAMAAAgx/MAlgAAAMAAAAx/g");
	var mask_graphics_4 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_5 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_6 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_7 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_8 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_9 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_10 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_11 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_12 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
	var mask_graphics_13 = new cjs.Graphics().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-181,y:-38}).wait(1).to({graphics:mask_graphics_1,x:-180,y:-38}).wait(1).to({graphics:mask_graphics_2,x:-151.4892,y:-38}).wait(1).to({graphics:mask_graphics_3,x:-130.9499,y:-38}).wait(1).to({graphics:mask_graphics_4,x:-109.9135,y:-38}).wait(1).to({graphics:mask_graphics_5,x:-84.1288,y:-38}).wait(1).to({graphics:mask_graphics_6,x:-63.0175,y:-38}).wait(1).to({graphics:mask_graphics_7,x:-45.6715,y:-38}).wait(1).to({graphics:mask_graphics_8,x:-31.5165,y:-38}).wait(1).to({graphics:mask_graphics_9,x:-20.182,y:-38}).wait(1).to({graphics:mask_graphics_10,x:-11.4367,y:-38}).wait(1).to({graphics:mask_graphics_11,x:-5.1573,y:-38}).wait(1).to({graphics:mask_graphics_12,x:-1.3185,y:-38}).wait(1).to({graphics:mask_graphics_13,x:0,y:-38}).wait(7));

	// レイヤー_1
	this.instance_1 = new lib.gr_votes();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-29.7,285,57.7);


(lib.mc_shuttle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		/* gotoAndPlay(1);*/
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// レイヤー_1
	this.shuttle = new lib.gr_shuttle();
	this.shuttle.name = "shuttle";
	this.shuttle.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.shuttle).to({rotation:360},74).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.3,-138.3,276.70000000000005,276.70000000000005);


(lib.kira1のコピー2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer_31
	this.instance = new lib.sprite43();
	this.instance.parent = this;
	this.instance.setTransform(-67.2,145.15,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// Layer_29
	this.instance_1 = new lib.sprite43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.35,-73.85,0.281,0.281);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(33));

	// Layer_27
	this.instance_2 = new lib.sprite43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-77.75,-114.8,0.281,0.281);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(23));

	// Layer_25
	this.instance_3 = new lib.sprite43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-90.65,39.05,0.281,0.281);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(29));

	// Layer_23
	this.instance_4 = new lib.sprite43();
	this.instance_4.parent = this;
	this.instance_4.setTransform(29.1,146.65,0.281,0.281);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(27));

	// Layer_21
	this.instance_5 = new lib.sprite43();
	this.instance_5.parent = this;
	this.instance_5.setTransform(56.5,-134.05,0.281,0.281);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).wait(25));

	// Layer_19
	this.instance_6 = new lib.sprite43();
	this.instance_6.parent = this;
	this.instance_6.setTransform(26.8,35.85,0.281,0.281);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).wait(17));

	// Layer_15
	this.instance_7 = new lib.sprite43();
	this.instance_7.parent = this;
	this.instance_7.setTransform(71.55,52.35,0.281,0.281);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).wait(14));

	// Layer_13
	this.instance_8 = new lib.sprite43();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-94.25,-62.4,0.281,0.281);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).wait(10));

	// Layer_9
	this.instance_9 = new lib.sprite43();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-19.55,-134.05,0.281,0.281);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:false},0).wait(8));

	// Layer_7
	this.instance_10 = new lib.sprite43();
	this.instance_10.parent = this;
	this.instance_10.setTransform(97.25,0.3,0.281,0.281);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(33).to({_off:false},0).wait(3));

	// Layer_3
	this.instance_11 = new lib.sprite43();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-44.75,-9.65,0.281,0.281);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(34).to({_off:false},0).wait(2));

	// Layer_1
	this.instance_12 = new lib.sprite39();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-12.2,-0.05,1.2124,1.6844);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.4,-161.5,224.9,323);


(lib.kira_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		/* stop ();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer_25
	this.instance = new lib.sprite43();
	this.instance.parent = this;
	this.instance.setTransform(-59.45,3.2,0.281,0.281);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(29));

	// Layer_23
	this.instance_1 = new lib.sprite43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.3,-0.05,0.281,0.281);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(27));

	// Layer_21
	this.instance_2 = new lib.sprite43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.65,32.45,0.281,0.281);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(25));

	// Layer_19
	this.instance_3 = new lib.sprite43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.5,12.6,0.281,0.281);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(17));

	// Layer_15
	this.instance_4 = new lib.sprite43();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-4.1,-15.75,0.281,0.281);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).wait(14));

	// Layer_7
	this.instance_5 = new lib.sprite43();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11.4,36.95,0.281,0.281);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).wait(3));

	// Layer_3
	this.instance_6 = new lib.sprite43();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50.85,29.7,0.281,0.281);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).wait(2));

	// Layer_1
	this.instance_7 = new lib.sprite39();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-12,15.5,1.2729,0.4534);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.2,-27.9,236.10000000000002,86.9);


(lib.efa_パーティクル集合 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.パーティクル2();
	this.instance.parent = this;
	this.instance.setTransform(-3.7,44.05,0.8585,0.8585,-173.2889);

	this.instance_1 = new lib.パーティクル2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,24.65,0.5292,0.5292,0,-143.2543,36.7457);

	this.instance_2 = new lib.パーティクル2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.15,26.5,0.7527,0.5292,0,-164.9709,40.6843);

	this.instance_3 = new lib.パーティクル1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26.55,10.85,0.8544,0.5085,0,-124.1512,76.2156,-59.9,-3.9);

	this.instance_4 = new lib.パーティクル1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12,28,0.6032,0.6714,0,102.0919,76.0499);

	this.instance_5 = new lib.パーティクル1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24,22,0.6032,0.6032,154.5512);

	this.instance_6 = new lib.パーティクル2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(10,40,0.67,0.5378,0,-151.6456,57.8841);

	this.instance_7 = new lib.パーティクル1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(36,16.45,1.1194,1.0589,0,-118.0587,42.7302);

	this.instance_8 = new lib.パーティクル1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-4.25,24.65,0.5292,0.8921,-178.5141);

	this.instance_9 = new lib.パーティクル2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2,30.35,1,1,95.2812);

	this.instance_10 = new lib.パーティクル1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(13.6,24.65,0.5924,0.5292,0,155.0554,-24.9453);

	this.instance_11 = new lib.パーティクル2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(2.25,20.95,0.5292,0.5292,134.5199);

	this.instance_12 = new lib.パーティクル2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-40.35,-8.15,0.8585,0.8585,-88.5191);

	this.instance_13 = new lib.パーティクル2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-38,10,0.5292,0.5292,0,-53.2543,126.7457);

	this.instance_14 = new lib.パーティクル2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-12.4,14,0.7527,0.5292,0,-104.9694,100.6856);

	this.instance_15 = new lib.パーティクル1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.85,-20.4,0.8544,0.5085,0,-69.3554,131.0109,-59.8,-3.7);

	this.instance_16 = new lib.パーティクル1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-28,-14,0.6032,0.6714,0,-58.4598,-84.5013);

	this.instance_17 = new lib.パーティクル1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-34,20,0.6032,0.6032,-115.4488);

	this.instance_18 = new lib.パーティクル2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-30,16,0.67,0.5379,0,-103.6061,105.9244);

	this.instance_19 = new lib.パーティクル1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-24,30,1.1194,1.0589,0,-28.0587,132.7302);

	this.instance_20 = new lib.パーティクル1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-14.65,1.75,0.5292,0.5292,-118.5129);

	this.instance_21 = new lib.パーティクル2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-32.05,-3.5,1,1,-135.4791);

	this.instance_22 = new lib.パーティクル1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-14.65,19.6,0.5925,0.5292,0,-72.0065,107.9921);

	this.instance_23 = new lib.パーティクル2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-10.95,8.25,0.6817,1.3397,0,-100.0239,-139.0996);

	this.instance_24 = new lib.パーティクル2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(6.55,-31.7,0.8585,0.8585,-6.5255);

	this.instance_25 = new lib.パーティクル2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(6.55,-31.7,0.5292,0.5292,0,36.7457,-143.2543);

	this.instance_26 = new lib.パーティクル2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-5.3,-14.15,0.7527,0.5292,0,15.0291,-139.3157);

	this.instance_27 = new lib.パーティクル1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(29.35,1.45,0.8544,0.5085,0,20.6446,-138.9891,-59.9,-3.9);

	this.instance_28 = new lib.パーティクル1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(4.65,-27.5,0.6032,0.6714,0,-19.4377,-45.4796);

	this.instance_29 = new lib.パーティクル1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(10,-24,0.6032,0.6032,19.5497);

	this.instance_30 = new lib.パーティクル2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-7.15,-27.65,0.67,0.5378,0,-7.3809,-157.8494);

	this.instance_31 = new lib.パーティクル1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-14,-20,1.1195,1.0589,0,-5.3487,155.4402);

	this.instance_32 = new lib.パーティクル1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(7.1,-12.3,0.5292,0.5292,-28.5129);

	this.instance_33 = new lib.パーティクル2();
	this.instance_33.parent = this;
	this.instance_33.setTransform(8,-18,1,1,-45.4791);

	this.instance_34 = new lib.パーティクル1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-10.75,-12.3,0.5925,0.5292,0,17.9935,-162.0079);

	this.instance_35 = new lib.パーティクル2();
	this.instance_35.parent = this;
	this.instance_35.setTransform(0.6,-8.6,0.5292,0.5292,-45.4801);

	this.instance_36 = new lib.パーティクル2();
	this.instance_36.parent = this;
	this.instance_36.setTransform(50,16,0.8585,0.8585,61.4817);

	this.instance_37 = new lib.パーティクル2();
	this.instance_37.parent = this;
	this.instance_37.setTransform(8.5,6.25,0.5292,0.5292,0,126.7457,-53.2543);

	this.instance_38 = new lib.パーティクル2();
	this.instance_38.parent = this;
	this.instance_38.setTransform(14.45,-1.3,0.7527,0.5292,0,105.0291,-49.3157);

	this.instance_39 = new lib.パーティクル1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(13.3,36.9,0.8544,0.5085,0,110.6446,-48.9891,-59.8,-3.7);

	this.instance_40 = new lib.パーティクル1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(24,-2,0.6032,0.6714,0,70.5623,44.5204);

	this.instance_41 = new lib.パーティクル1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(38,6,0.6032,0.6032,64.5512);

	this.instance_42 = new lib.パーティクル2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(27.95,-3.15,0.67,0.5378,0,73.3557,-77.1152);

	this.instance_43 = new lib.パーティクル1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(28,-12,1.1194,1.0589,0,151.9413,-47.2698);

	this.instance_44 = new lib.パーティクル1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(13.6,24.65,0.5292,0.5292,61.4871);

	this.instance_45 = new lib.パーティクル2();
	this.instance_45.parent = this;
	this.instance_45.setTransform(21,11.9,1,1,23.5401);

	this.instance_46 = new lib.パーティクル1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(12.6,-6.75,0.5925,0.5292,0,107.9935,-72.0079);

	this.instance_47 = new lib.パーティクル2();
	this.instance_47.parent = this;
	this.instance_47.setTransform(8.9,4.6,0.5292,0.5292,44.5199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.efa_パーティクル集合, new cjs.Rectangle(-320.5,-245.4,564,474.70000000000005), null);


(lib.cursor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// カーソル
	this.instance = new lib.cursor();
	this.instance.parent = this;
	this.instance.setTransform(210,135.75,0.1846,0.1863,0,0,0,0,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.1844,y:137.7},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200.7,126.1,16.30000000000001,17.900000000000006);


(lib._mes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cursor1
	this.instance = new lib.cursor1();
	this.instance.parent = this;
	this.instance.setTransform(92.4,49.35,0.6429,0.6408,0,0,0,210.6,136.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// guide
	this.instance_1 = new lib._005_textflame();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-108,-40,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._mes, new cjs.Rectangle(-121,-248,240.6,320), null);


(lib._bg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
	}
	this.frame_24 = function() {
		/* gotoAndPlay( 1 );
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjBDkIAAnHIGDAAIAAHHg");
	this.shape.setTransform(-49.825,196.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(24));

	// レイヤー_3 コピー
	this.instance = new lib.white();
	this.instance.parent = this;
	this.instance.setTransform(120,160,1,1,0,0,0,120,160);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:119.9,x:119.9,alpha:0.0037},0).wait(1).to({alpha:0.0124},0).wait(1).to({alpha:0.0263},0).wait(1).to({alpha:0.0451},0).wait(1).to({alpha:0.0682},0).wait(1).to({alpha:0.0937},0).wait(1).to({alpha:0.1198},0).wait(1).to({alpha:0.1441},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.1813},0).wait(1).to({alpha:0.1927},0).wait(1).to({regX:120,x:120,alpha:0.1992},0).wait(1).to({regX:119.9,x:119.9,alpha:0.1956},0).wait(1).to({alpha:0.1869},0).wait(1).to({alpha:0.173},0).wait(1).to({alpha:0.1541},0).wait(1).to({alpha:0.1311},0).wait(1).to({alpha:0.1055},0).wait(1).to({alpha:0.0795},0).wait(1).to({alpha:0.0551},0).wait(1).to({alpha:0.0342},0).wait(1).to({alpha:0.0179},0).wait(1).to({alpha:0.0065},0).wait(1).to({regX:120,x:120,alpha:0},0).wait(1));

	// レイヤー_3 コピー 2
	this.instance_1 = new lib.bg_gra();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,160,1,1,0,0,0,120,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,0,309.2,320);


(lib._bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// c
	this.instance = new lib.bg_gra();
	this.instance.parent = this;
	this.instance.setTransform(403.95,160,1.3667,1,0,0,0,120,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// l
	this.instance_1 = new lib.bg_gra();
	this.instance_1.parent = this;
	this.instance_1.setTransform(685.95,160,1,1,0,0,0,120,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// r
	this.instance_2 = new lib.bg_gra();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,160,1,1,0,0,0,120,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib._bg2, new cjs.Rectangle(-69.2,0,875.2,320), null);


(lib.___glitters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _
	this.instance = new lib.kira_45();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,11.6,0.9936,0.9936);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.___glitters, new cjs.Rectangle(-117.3,-70.2,234.6,140.4), null);


(lib.___シンボル6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.___glitters();
	this.instance.parent = this;
	this.instance.setTransform(0,-56.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.___rank();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.___シンボル6, new cjs.Rectangle(-117.3,-72.9,234.6,86.4), null);


// stage content:
(lib.voice_election_result_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{top5_1:3,top5_2:25,top5_3:49,wait1:17,s1:22,s2:36,s3:63,last:72});

	// timeline functions:
	this.frame_0 = function() {
		/* //voteNum = 134592;*/
		////spm = "                                  "
		//
		////１位
		////voteNum = 253329;
		//
		////２位
		////voteNum = 202083;
		////
		//////３位
		////voteNum = 195744;
		////
		//////４位
		////voteNum = 162606;
		////
		//////５位
		////voteNum = 132458;
		//
		//
		///**
		////リンク
		//url="http://"
		//
		//card_comm1_1 = "……あの…皆のおかげで………";
		//card_comm1_2 = "1番になれました｡";
		//card_comm1_3 = "ﾌﾟﾛﾃﾞｭｰｻｰ､ありがとう……";
		//card_comm1_4 = "あ､あの…や､闇に飲まれよ!";
		//card_comm1_5 = "ですわ！";
		///**/
		//
		////card_comm = "あたし､1位に選んでもらえて" add spm add "\nすっごく嬉しいです!" add spm add "\nでも､みんなの1番になっても､" add spm add "\n私はﾌﾟﾛﾃﾞｭｰｻｰさんのものです" add spm add "\nからねっ!" add spm
		////card_comm = "我が友に捧ぐ､親愛の調べよ!" add spm add "\n(訳:嬉しくって歌いたい気分です!)" add spm add "\n……あ､あの…ﾌﾟﾛﾃﾞｭｰｻｰ" add spm add "\n…ありがとう" add spm
		////card_comm = "Pくん､ｱﾀｼたち超頑張ったよね☆" add spm add "\nこれからも一緒に2人でﾄｯﾌﾟｱｲﾄﾞﾙ" add spm add "\n目指して頑張ろうね!"  add spm add "\nよ～し､今日はﾊﾟｰﾃｨだ☆" add spm
		//
		//
		////----------------------
		////　埋め込み
		////----------------------
		//
		////voteNum=79256
		////voteNum=60197
		////voteNum=39669
		//
		////内部属性
		//attribute=1; //1:cu 2:co 3:pa
		//
		//
		////----------------------
		////　初期化
		////----------------------
		//key_flag=1
		this.url = window.im_cjs._url;
		
		this.card_comm1_1 = window.im_cjs.card_comm1_1;
		this.card_comm1_2 = window.im_cjs.card_comm1_2;
		this.card_comm1_3 = window.im_cjs.card_comm1_3;
		this.card_comm1_4 = window.im_cjs.card_comm1_4;
		this.card_comm1_5 = window.im_cjs.card_comm1_5;
		
		//this.attribute = 2; // 1位
		//this.attribute = 2; // 2位
		//this.attribute = 1; // 3位
		//this.attribute = 2; // 4位
		//this.attribute = 2; // 5位
		
		//this.attribute = 1; // 1位
		this.attribute = 2; // 2位
		//this.attribute = 2; // 3位
		
		this.key_flag = 1;
		
		this.changeColor = function(data){
			if (!data.target || !data.colorDetail) return;
			var targetObj = data.target;
			var d = data.colorDetail;
			var cache = null;
			if (data.cache) {
				cache = {
					x: data.cache[0],
					y: data.cache[1],
					width: data.cache[2],
					height: data.cache[3]
				};
			} else {
				cache = targetObj.getBounds();
			}
			
			var filter = new createjs.ColorFilter(
				d[0], d[1], d[2], d[3],
				d[4], d[5], d[6], d[7]
			);
			targetObj.filters = [filter];
			targetObj.cache(cache.x, cache.y, cache.width, cache.height);
		}
		
		this.removeFilter = function(data) {
			if (!data.target) return;
			var targetObj = data.target;
			targetObj.filters = [];
			targetObj.uncache();
		}
		exportRoot.removeFilter({
		    target: this.bg2
		});
	}
	this.frame_1 = function() {
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [1,1,1,1,0,0,0,0]
		});
	}
	this.frame_2 = function() {
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [0.98,0.98,0.98,1,0,0,0,0]
		});
	}
	this.frame_3 = function() {
		/* //SE
		gotoAndStop("/sound_mc/:top5_1_" add sound_postfix);*/
		// this.sound_mc.gotoAndStop("top5_1_" + this.sound_postfix);
		
		window.se_play("se_016");
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [0.91,0.91,0.91,1,0,0,0,0]
		});
	}
	this.frame_4 = function() {
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [0.8,0.8,0.8,1,0,0,0,0]
		});
	}
	this.frame_5 = function() {
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [0.84,0.84,0.84,1,0,0,0,0]
		});
	}
	this.frame_6 = function() {
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [0.88,0.88,0.88,1,0,0,0,0]
		});
	}
	this.frame_7 = function() {
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [0.92,0.92,0.92,1,0,0,0,0]
		});
	}
	this.frame_8 = function() {
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [0.96,0.96,0.96,1,0,0,0,0]
		});
	}
	this.frame_9 = function() {
		exportRoot.removeFilter({
		    target: this.bg2
		});
	}
	this.frame_16 = function() {
		/* //stop()*/
	}
	this.frame_17 = function() {
		this.btn.on("click", function(e){
			this.gotoAndPlay("s1");
		}, exportRoot, true);
	}
	this.frame_21 = function() {
		/* stop()*/
		this.stop();
	}
	this.frame_23 = function() {
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
	}
	this.frame_24 = function() {
		this.btn.on("click", function(e){
			this.gotoAndPlay("s2");
		}, exportRoot, true);
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.27,0.27,0.27,1,0,0,0,0]
		});
	}
	this.frame_25 = function() {
		/* //SE
		gotoAndStop("/sound_mc/:top5_2_" add sound_postfix);*/
		//this.sound_mc.gotoAndStop("top5_2_" + this.sound_postfix);
		window.se_play("se_057");
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.24,0.24,0.24,1,0,0,0,0]
		});
	}
	this.frame_26 = function() {
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.21,0.21,0.21,1,0,0,0,0]
		});
	}
	this.frame_27 = function() {
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.19,0.19,0.19,1,0,0,0,0]
		});
	}
	this.frame_28 = function() {
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.17,0.17,0.17,1,0,0,0,0]
		});
	}
	this.frame_29 = function() {
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.15,0.15,0.15,1,0,0,0,0]
		});
	}
	this.frame_30 = function() {
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.14,0.14,0.14,1,0,0,0,0]
		});
	}
	this.frame_31 = function() {
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.13,0.13,0.13,1,0,0,0,0]
		});
	}
	this.frame_32 = function() {
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.11,0.11,0.11,1,0,0,0,0]
		});
	}
	this.frame_33 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.11,0.11,0.11,1,0,0,0,0]
		});
	}
	this.frame_34 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,34,34,34,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.1,0.1,0.1,1,0,0,0,0]
		});
	}
	this.frame_35 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,48,48,48,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.1,0.1,0.1,1,0,0,0,0]
		});
	}
	this.frame_36 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,56,56,56,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.24,0.24,0.24,1,0,0,0,0]
		});
	}
	this.frame_37 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,59,59,59,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.32,0.32,0.32,1,0,0,0,0]
		});
	}
	this.frame_38 = function() {
		this.btn.on("click", function(e){
			this.gotoAndPlay("s3");
		}, exportRoot, true);
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,60,60,60,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.35,0.35,0.35,1,0,0,0,0]
		});
	}
	this.frame_39 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,49,49,49,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.27,0.27,0.27,1,0,0,0,0]
		});
	}
	this.frame_40 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,42,42,42,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.21,0.21,0.21,1,0,0,0,0]
		});
	}
	this.frame_41 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,40,40,40,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [0.3,0.3,0.3,1,0,0,0,0]
		});
		exportRoot.changeColor({
		    target: this.bg1,
		    colorDetail: [0.2,0.2,0.2,1,0,0,0,0]
		});
	}
	this.frame_47 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,40,40,40,0]
		});
	}
	this.frame_48 = function() {
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,61,61,61,0]
		});
	}
	this.frame_49 = function() {
		/* //SE
		gotoAndStop("/sound_mc/:top5_3_" add sound_postfix);*/
		//this.sound_mc.gotoAndStop("top5_3_" + this.sound_postfix);
		window.se_play("se_123");
		exportRoot.changeColor({
		    target: this.ch_spot,
		    colorDetail: [1,1,1,1,120,120,120,0]
		});
	}
	this.frame_50 = function() {
		exportRoot.changeColor({
		    target: this.bg2,
		    colorDetail: [0.25,0.25,0.25,1,0,0,0,0]
		});
	}
	this.frame_51 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,255,255,255,0]
		});
		exportRoot.changeColor({
		    target: this.gr_base,
		    colorDetail: [1,1,1,1,200,200,200,100]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,255,255,255,0]
		});
	}
	this.frame_52 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,214,214,214,0]
		});
		exportRoot.changeColor({
		    target: this.gr_base,
		    colorDetail: [1,1,1,1,113,113,113,56]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,214,214,214,0]
		});
	}
	this.frame_53 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,177,177,177,0]
		});
		exportRoot.changeColor({
		    target: this.gr_base,
		    colorDetail: [1,1,1,1,50,50,50,25]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,177,177,177,0]
		});
	}
	this.frame_54 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,143,143,143,0]
		});
		exportRoot.changeColor({
		    target: this.gr_base,
		    colorDetail: [1,1,1,1,13,13,13,6]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,143,143,143,0]
		});
	}
	this.frame_55 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,113,113,113,0]
		});
		exportRoot.removeFilter({
		    target: this.gr_base
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,113,113,113,0]
		});
	}
	this.frame_56 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,87,87,87,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,87,87,87,0]
		});
	}
	this.frame_57 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,64,64,64,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,64,64,64,0]
		});
	}
	this.frame_58 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,44,44,44,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,44,44,44,0]
		});
	}
	this.frame_59 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,28,28,28,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,28,28,28,0]
		});
	}
	this.frame_60 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,16,16,16,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,16,16,16,0]
		});
	}
	this.frame_61 = function() {
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,7,7,7,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,7,7,7,0]
		});
	}
	this.frame_62 = function() {
		/* //SE
		gotoAndStop("/sound_mc/:top5_5_" add my_id);*/
		//this.sound_mc.gotoAndStop("top5_5_" + this.my_id);
		exportRoot.changeColor({
		    target: this.sign,
		    colorDetail: [1,1,1,1,2,2,2,0]
		});
		exportRoot.changeColor({
		    target: this.ch,
		    colorDetail: [1,1,1,1,2,2,2,0]
		});
	}
	this.frame_63 = function() {
		exportRoot.removeFilter({
		    target: this.sign
		});
		exportRoot.removeFilter({
		    target: this.ch
		});
	}
	this.frame_65 = function() {
		this.btn.on("click", function(e){
			this.gotoAndPlay("last");
		}, exportRoot, true);
		this.stop();
	}
	this.frame_71 = function() {
		/* stop()*/
		this.stop();
	}
	this.frame_74 = function() {
		this.t1.text = this.card_comm1_1;
		this.t2.text = this.card_comm1_2;
		this.t3.text = this.card_comm1_3;
		this.t4.text = this.card_comm1_4;
		this.t5.text = this.card_comm1_5;
	}
	this.frame_76 = function() {
		this.btn.on("click", function(e){
			window.location.href = this.url;
		}, exportRoot, true);
	}
	this.frame_86 = function() {
		/* stop()*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(7).call(this.frame_16).wait(1).call(this.frame_17).wait(4).call(this.frame_21).wait(2).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(6).call(this.frame_47).wait(1).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1).call(this.frame_53).wait(1).call(this.frame_54).wait(1).call(this.frame_55).wait(1).call(this.frame_56).wait(1).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(1).call(this.frame_62).wait(1).call(this.frame_63).wait(2).call(this.frame_65).wait(6).call(this.frame_71).wait(3).call(this.frame_74).wait(2).call(this.frame_76).wait(10).call(this.frame_86).wait(1));

	// 黒目隠し
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/A3eMAAAhu7MBj/AAAMAAABu7gAyvZyMAlfAAAMAAAgx/MglfAAAg");
	this.shape.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(87));

	// text
	this.t5 = new cjs.Text("", "13px 'Arial'", "#36076F");
	this.t5.name = "t5";
	this.t5.lineHeight = 17;
	this.t5.lineWidth = 260;
	this.t5.parent = this;
	this.t5.setTransform(22,280);

	this.t4 = new cjs.Text("", "13px 'Arial'", "#36076F");
	this.t4.name = "t4";
	this.t4.lineHeight = 17;
	this.t4.lineWidth = 260;
	this.t4.parent = this;
	this.t4.setTransform(22,266);

	this.t3 = new cjs.Text("", "13px 'Arial'", "#36076F");
	this.t3.name = "t3";
	this.t3.lineHeight = 17;
	this.t3.lineWidth = 260;
	this.t3.parent = this;
	this.t3.setTransform(22,252);

	this.t2 = new cjs.Text("", "13px 'Arial'", "#36076F");
	this.t2.name = "t2";
	this.t2.lineHeight = 17;
	this.t2.lineWidth = 260;
	this.t2.parent = this;
	this.t2.setTransform(22,238);

	this.t1 = new cjs.Text("", "13px 'Arial'", "#36076F");
	this.t1.name = "t1";
	this.t1.lineHeight = 17;
	this.t1.lineWidth = 260;
	this.t1.parent = this;
	this.t1.setTransform(22,224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5}]},74).wait(13));

	// UI_navi
	this.instance = new lib.シンボル13();
	this.instance.parent = this;
	this.instance.setTransform(224.35,318);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({_off:true},5).wait(48).to({_off:false,x:227.85},0).to({_off:true},2).wait(15));

	// particle
	this.instance_1 = new lib.efa_パーティクル集合();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.4,121.05,0.6762,0.6762,0,0,0,-38.6,-8.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},23).wait(61));

	// きらきら
	this.instance_2 = new lib.kira1のコピー2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119.3,160,0.9936,0.9936);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(37));

	// light
	this.instance_3 = new lib.シンボル9のコピー();
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.7,141,0.3186,0.3186);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({scaleX:0.7938,scaleY:0.7938,y:134.45},0).wait(1).to({scaleX:0.9487,scaleY:0.9487,alpha:0.3398},0).to({_off:true},1).wait(81));

	// 得票数
	this.tx = new lib.mc_votes();
	this.tx.name = "tx";
	this.tx.parent = this;
	this.tx.setTransform(120,197);
	this.tx._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tx).wait(11).to({_off:false},0).wait(11).to({y:196},0).wait(1).to({y:195},0).to({y:300},2,cjs.Ease.get(-1)).to({_off:true},1).wait(61));

	// 順位
	this.instance_4 = new lib.___シンボル6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,180);
	this.instance_4.alpha = 0.0391;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(-1)).wait(18).to({y:182},0).wait(1).to({y:176},0).to({y:43.2},2,cjs.Ease.get(-1)).to({_off:true},1).wait(61));

	// ﾒｯｾｰｼﾞｴﾘｱ
	this.instance_5 = new lib._mes();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.9,253,0.4203,0.4203);
	this.instance_5.alpha = 0.1719;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).to({scaleX:1.0353,scaleY:1.0353,y:248,alpha:1},2).to({scaleX:1,scaleY:1},3).wait(10));

	// s_順位
	this.instance_6 = new lib.gr_number();
	this.instance_6.parent = this;
	this.instance_6.setTransform(118,336.45,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).to({y:314.45,alpha:1},3,cjs.Ease.get(1)).wait(1).to({regX:4,regY:-54,x:120,y:288.4},0).wait(1).to({regX:0,regY:0,x:118,y:316.45},0).wait(7).to({alpha:0},2).to({_off:true},1).wait(12));

	// shuttle_under
	this.b = new lib.mc_shuttle();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(18,304);
	this.b.alpha = 0;
	this.b._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b).wait(50).to({_off:false},0).wait(1).to({alpha:1},0).wait(36));

	// sign
	this.sign = new lib.sign();
	this.sign.name = "sign";
	this.sign.parent = this;
	this.sign.setTransform(172,210,0.5,0.5);
	this.sign.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.sign).wait(51).to({alpha:1},0).wait(36));

	// base
	this.gr_base = new lib.gr_base();
	this.gr_base.name = "gr_base";
	this.gr_base.parent = this;
	this.gr_base.setTransform(120,265.5,1,1,0,0,0,120,35.5);
	this.gr_base.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.gr_base).wait(51).to({alpha:1},0).wait(36));

	// 紙吹雪
	this.instance_7 = new lib.シンボル4のコピー000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(62.2,-84.7,1.3542,1.3542);

	this.instance_8 = new lib.シンボル4のコピー000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(102.95,-43.65,2.1061,1.9746,0,0,180);

	this.instance_9 = new lib.シンボル4のコピー000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(173.95,-60.5,1.2566,1.6126);

	this.instance_10 = new lib.シンボル4のコピー000();
	this.instance_10.parent = this;
	this.instance_10.setTransform(26.5,-31.8,1.2566,1.6126);

	this.instance_11 = new lib.シンボル4のコピー000();
	this.instance_11.parent = this;
	this.instance_11.setTransform(203.6,-215.8,3.3643,4.0483,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},50).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},22).wait(15));

	// burst
	this.instance_12 = new lib.シンボル9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(117,121.05,0.5015,0.5015);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},0).wait(1).to({scaleX:1.2114,scaleY:1.2114},0).to({_off:true},1).wait(36));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_35 = new cjs.Graphics().p("AiaOhQmBmAAAohQAAogGBmBQGAmBIhAAQIhAAGAGBQGCGBAAIgQAAIhmCGAQmAGCohAAQohAAmAmCg");
	var mask_graphics_36 = new cjs.Graphics().p("ABPJAQjujuAAlSQAAlQDujwQDujuFSAAQFRAADvDuQDvDwAAFQQAAFSjvDuQjvDvlRAAQlSAAjujvg");
	var mask_graphics_37 = new cjs.Graphics().p("AoONsQjujuAAlSQAAlRDujuQDwjvFQAAQFSAADuDvQDvDuAAFRQAAFSjvDuQjuDvlSAAQlQAAjwjvg");
	var mask_graphics_38 = new cjs.Graphics().p("ApVM8QkfkfAAmVQAAmVEfkgQEfkeGVgBQGWABEfEeQEfEgAAGVQAAGVkfEfQkfEgmWAAQmVAAkfkgg");
	var mask_graphics_39 = new cjs.Graphics().p("AqdMpQlPlPAAnaQAAnZFPlQQFQlPHZAAQHaAAFPFPQFQFQAAHZQAAHalQFPQlPFQnaAAQnZAAlQlQg");
	var mask_graphics_40 = new cjs.Graphics().p("AqfMNQlElDAAnKQAAnJFElEQFElDHIAAQHKAAFEFDQFEFEAAHJQAAHKlEFDQlEFEnKAAQnIAAlElEg");
	var mask_graphics_41 = new cjs.Graphics().p("AqhMHQk7k7AAm9QAAm8E7k7QE7k6G8AAQG9AAE6E6QE7E7AAG8QAAG9k7E7Qk6E7m9AAQm8AAk7k7g");
	var mask_graphics_42 = new cjs.Graphics().p("AqjMFQk0k0AAm0QAAmzE0k0QE1k0GzAAQG0AAEzE0QE1E0AAGzQAAG0k1E0QkzE0m0AAQmzAAk1k0g");
	var mask_graphics_43 = new cjs.Graphics().p("AqkMEQkwkwAAmvQAAmtEwkxQExkwGuAAQGuAAEwEwQExExAAGtQAAGvkxEwQkwExmuAAQmuAAkxkxg");
	var mask_graphics_44 = new cjs.Graphics().p("AqkMDQkvkuAAmtQAAmrEvkwQEwkvGrAAQGtAAEuEvQEwEwAAGrQAAGtkwEuQkuEwmtAAQmrAAkwkwg");
	var mask_graphics_47 = new cjs.Graphics().p("AqkMDQkvkuAAmtQAAmrEvkwQEwkvGrAAQGtAAEuEvQEwEwAAGrQAAGtkwEuQkuEwmtAAQmrAAkwkwg");
	var mask_graphics_48 = new cjs.Graphics().p("As+M+QlXlYAAnmQAAnlFXlZQFZlXHlAAQHmAAFYFXQFYFZAAHlQAAHmlYFYQlYFYnmAAQnlAAlZlYg");
	var mask_graphics_49 = new cjs.Graphics().p("AxmRmQnSnSAAqUQAAqTHSnTQHTnSKTAAQKUAAHSHSQHTHTAAKTQAAKUnTHSQnSHTqUAAQqTAAnTnTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_graphics_35,x:208.9999,y:-3.5}).wait(1).to({graphics:mask_graphics_36,x:147,y:63.5}).wait(1).to({graphics:mask_graphics_37,x:86.5,y:111.5}).wait(1).to({graphics:mask_graphics_38,x:107.5,y:111.55}).wait(1).to({graphics:mask_graphics_39,x:128.5,y:108.7}).wait(1).to({graphics:mask_graphics_40,x:121.4749,y:109.708}).wait(1).to({graphics:mask_graphics_41,x:116.011,y:108.967}).wait(1).to({graphics:mask_graphics_42,x:112.1081,y:108.1441}).wait(1).to({graphics:mask_graphics_43,x:109.7664,y:107.6504}).wait(1).to({graphics:mask_graphics_44,x:108.9859,y:107.4859}).wait(3).to({graphics:mask_graphics_47,x:108.9859,y:107.4859}).wait(1).to({graphics:mask_graphics_48,x:114.5,y:111.5}).wait(1).to({graphics:mask_graphics_49,x:114.5,y:111.5}).wait(1).to({graphics:null,x:0,y:0}).wait(37));

	// ch
	this.ch_spot = new lib.___character();
	this.ch_spot.name = "ch_spot";
	this.ch_spot.parent = this;
	this.ch_spot.setTransform(295.7,320,0.5,0.5);
	this.ch_spot.alpha = 0;

	var maskedShapeInstanceList = [this.ch_spot];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ch_spot).wait(33).to({alpha:1},0).wait(1).to({regX:-20,regY:-320,x:183,y:160},0).wait(1).to({x:139.85},0).wait(1).to({x:117.85},0).wait(1).to({x:107.65},0).wait(1).to({regX:0,regY:0,x:115,y:320},0).to({x:120},3,cjs.Ease.get(1)).wait(8).to({_off:true},1).wait(37));

	// ch
	this.ch = new lib.___character();
	this.ch.name = "ch";
	this.ch.parent = this;
	this.ch.setTransform(295.7,320,0.5,0.5);
	this.ch.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.ch).wait(33).to({alpha:1},0).wait(1).to({regX:-20,regY:-320,x:183,y:160},0).wait(1).to({x:139.85},0).wait(1).to({x:117.85},0).wait(1).to({x:107.65},0).wait(1).to({regX:0,regY:0,x:115,y:320},0).to({x:120},3,cjs.Ease.get(1)).wait(9).to({alpha:0},0).wait(1).to({alpha:1},0).wait(36));

	// shuttle_upper コピー
	this.a = new lib.mc_shuttle();
	this.a.name = "a";
	this.a.parent = this;
	this.a.setTransform(229,8);
	this.a.alpha = 0;
	this.a._off = true;

	this.timeline.addTween(cjs.Tween.get(this.a).wait(50).to({_off:false},0).wait(1).to({alpha:1},0).wait(36));

	// light
	this.instance_13 = new lib.シンボル9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120.6,12.75,1.4263,1.4263);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({_off:false},0).wait(36));

	// 花びら
	this.instance_14 = new lib.シンボル4000();
	this.instance_14.parent = this;
	this.instance_14.setTransform(175.65,-9,0.489,0.5066,0,0,180);
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_14.cache(-93,-18,186,528);

	this.instance_15 = new lib.シンボル4000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(227,-7.95,0.5066,0.6501);
	this.instance_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_15.cache(-93,-18,186,528);

	this.instance_16 = new lib.シンボル4000();
	this.instance_16.parent = this;
	this.instance_16.setTransform(32.15,-9,0.489,0.5066,0,0,180);
	this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_16.cache(-93,-18,186,528);

	this.instance_17 = new lib.シンボル4000();
	this.instance_17.parent = this;
	this.instance_17.setTransform(94.15,-9,0.5066,0.5066);
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_17.cache(-93,-18,186,528);

	this.instance_18 = new lib.シンボル4000();
	this.instance_18.parent = this;
	this.instance_18.setTransform(4.8,-9,0.7961,0.7961);
	this.instance_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_18.cache(-93,-18,186,528);

	this.instance_19 = new lib.シンボル4000();
	this.instance_19.parent = this;
	this.instance_19.setTransform(186.35,-8.3,0.4537,0.6033,0,0,180);
	this.instance_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_19.cache(-93,-18,186,528);

	this.instance_20 = new lib.シンボル4000();
	this.instance_20.parent = this;
	this.instance_20.setTransform(218.05,-8.3,0.4701,0.6033);
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_20.cache(-93,-18,186,528);

	this.instance_21 = new lib.シンボル4000();
	this.instance_21.parent = this;
	this.instance_21.setTransform(64.65,-8.3,0.4537,0.6033,0,0,180);
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_21.cache(-93,-18,186,528);

	this.instance_22 = new lib.シンボル4000();
	this.instance_22.parent = this;
	this.instance_22.setTransform(110.4,-7.3,0.7878,0.7387,0,0,180);
	this.instance_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_22.cache(-93,-18,186,528);

	this.instance_23 = new lib.シンボル4000();
	this.instance_23.parent = this;
	this.instance_23.setTransform(129.4,-8.3,0.4701,0.6033);
	this.instance_23.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_23.cache(-93,-18,186,528);

	this.instance_24 = new lib.シンボル4000();
	this.instance_24.parent = this;
	this.instance_24.setTransform(81.55,-8.3,0.4701,0.6033);
	this.instance_24.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_24.cache(-93,-18,186,528);

	this.instance_25 = new lib.シンボル4000();
	this.instance_25.parent = this;
	this.instance_25.setTransform(158.8,-9.7,0.5013,0.6033,0,0,180);
	this.instance_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_25.cache(-93,-18,186,528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},50).wait(37));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_24 = new cjs.Graphics().p("AohUKQiZiZAAjZQAAjYCZiaQCZiZDZAAQDYAACZCZQCZCaAADYQAADZiZCZQiZCajYAAQjZAAiZiag");
	var mask_1_graphics_25 = new cjs.Graphics().p("AoYSBQjejfAAk6QAAk7DejeQDejdE6AAQE7AADeDdQDeDeAAE7QAAE6jeDfQjeDek7AAQk6AAjejeg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Aq+P3QkjkjAAmdQAAmbEjkjQEjkjGbAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmbAAkjkjg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Aq+PUQkjkjAAmdQAAmbEjkjQEjkjGbAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmbAAkjkjg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AqzOxQkjkjAAmdQAAmbEjkjQEjkjGbAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmbAAkjkjg");
	var mask_1_graphics_29 = new cjs.Graphics().p("ApuOOQkjkjAAmdQAAmbEjkjQEjkjGbAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmbAAkjkjg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AoqNrQkjkjAAmdQAAmbEjkjQEjkjGcAAQGcAAEjEjQEjEjAAGbQAAGdkjEjQkjEjmcAAQmcAAkjkjg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AlHLUQkjkjAAmcQAAmcEjkjQEjkjGbAAQGdAAEjEjQEjEjAAGcQAAGckjEjQkjEjmdAAQmbAAkjkjg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AFhK/QkjkjAAmcQAAmbEjkjQEjkjGcAAQGcAAEjEjQEjEjAAGbQAAGckjEjQkjEjmcAAQmcAAkjkjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_1_graphics_24,x:-69.9067,y:144.3567}).wait(1).to({graphics:mask_1_graphics_25,x:-6.675,y:137.4589}).wait(1).to({graphics:mask_1_graphics_26,x:74.15,y:130.5612}).wait(1).to({graphics:mask_1_graphics_27,x:87.9,y:127.0612}).wait(1).to({graphics:mask_1_graphics_28,x:100.5362,y:123.5612}).wait(1).to({graphics:mask_1_graphics_29,x:107.4112,y:120.0612}).wait(1).to({graphics:mask_1_graphics_30,x:114.2862,y:116.5612}).wait(1).to({graphics:mask_1_graphics_31,x:136.9674,y:101.4737}).wait(1).to({graphics:mask_1_graphics_32,x:205.0112,y:13}).wait(1).to({graphics:null,x:0,y:0}).wait(54));

	// 明るいbg
	this.instance_26 = new lib._bg2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-88.05,0);
	this.instance_26._off = true;

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(24).to({_off:false},0).wait(1).to({x:-130.15},0).wait(1).to({x:-172.3},0).wait(1).to({x:-214.4},0).wait(1).to({x:-256.55},0).wait(1).to({x:-298.65},0).wait(1).to({x:-340.8},0).wait(1).to({x:-382.9},0).wait(1).to({x:-425.05},0).to({_off:true},1).wait(54));

	// bg1
	this.bg1 = new lib._bg2();
	this.bg1.name = "bg1";
	this.bg1.parent = this;
	this.bg1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bg1).wait(23).to({alpha:1},0).to({x:-551.4},12,cjs.Ease.get(1)).to({x:-569.1},3,cjs.Ease.get(1)).to({x:-566.6},3,cjs.Ease.get(1)).to({_off:true},9).wait(37));

	// bg2_
	this.bg2 = new lib._bg1();
	this.bg2.name = "bg2";
	this.bg2.parent = this;
	this.bg2.setTransform(120,160,0.5,0.5,0,0,0,120,160);

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(23).to({regX:0,regY:0,x:60,y:80,alpha:0},0).wait(27).to({alpha:1},0).to({_off:true},1).wait(36));

	// white
	this.instance_27 = new lib.white();
	this.instance_27.parent = this;
	this.instance_27.setTransform(120,160,1,1,0,0,0,120,160);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(51).to({_off:false},0).to({alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(24));

	// bg2_
	this.instance_28 = new lib._bg3();
	this.instance_28.parent = this;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(51).to({_off:false},0).wait(36));

	// btn
	this.btn = new lib._btn();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn._off = true;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib._btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(17).to({_off:false},0).to({_off:true},5).wait(2).to({_off:false},0).to({_off:true},12).wait(2).to({_off:false},0).to({_off:true},25).wait(2).to({_off:false},0).to({_off:true},7).wait(4).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-449.1,-85.3,1255.1,595.3);
// library properties:
lib.properties = {
	id: 'voice_election_result_2',
	width: 240,
	height: 320,
	fps: 12,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/003_voice_ch2.png", id:"voice_election_result_2__003_voice_ch2"},
		{src:"images/004_place_2.png", id:"voice_election_result_2__004_place_2"},
		{src:"images/004_voice_votes_2.png", id:"voice_election_result_2__004_voice_votes_2"},
		{src:"images/005_shuttle_co.png", id:"voice_election_result_2__005_shuttle_co"},
		{src:"images/005_shuttle_cu.png", id:"voice_election_result_2__005_shuttle_cu"},
		{src:"images/005_shuttle_pa.png", id:"voice_election_result_2__005_shuttle_pa"},
		{src:"images/005_textflame.png", id:"voice_election_result_2__005_textflame"},
		{src:"images/005_voice_name_2.png", id:"voice_election_result_2__005_voice_name_2"},
		{src:"images/bg.jpg", id:"voice_election_result_2_bg"},
		{src:"images/bottom.png", id:"voice_election_result_2_bottom"},
		{src:"images/fp_flower3.png", id:"voice_election_result_2_fp_flower3"},
		{src:"images/sign_voice2.png", id:"voice_election_result_2_sign_voice2"},
		{src:"images/sp_kirakira.png", id:"voice_election_result_2_sp_kirakira"}
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
an.compositions['voice_election_result_2'] = {
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
