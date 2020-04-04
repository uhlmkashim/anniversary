(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs004_balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs004_balloon.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// cjs004_balloon
	this.cjs004_balloon = new lib.cjs004_balloon_1();
	this.cjs004_balloon.setTransform(460,379);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs004_balloon}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24,247,1667,214.6);


// symbols:
(lib.gr_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,115,0.4)").s().p("AjBCgIg2gYIA1gbIAFg6IAqApIA5gMIgbA1IAeAyIg6gJIgnAsgAA7AkIhtAlIArhrIhGheIBzAGIBFhfIAdBxIBwAkIhjA/IABB0g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(27,122,255,0.4)").s().p("AjBCgIg2gYIA1gbIAFg6IAqApIA5gMIgbA1IAeAyIg6gJIgnAsgAA7AkIhtAlIArhrIhGheIBzAGIBFhfIAdBxIBwAkIhjA/IABB0g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,165,22,0.4)").s().p("AjBCgIg2gYIA1gbIAFg6IAqApIA5gMIgbA1IAeAyIg6gJIgnAsgAA7AkIhtAlIArhrIhGheIBzAGIBFhfIAdBxIBwAkIhjA/IABB0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-21.8,49.8,43.7);


(lib.gr_line_3_side = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0073").ss(6,1,1).p("EAtKgOIMhA3AAAIktAAIyAAAQidAAAACdIAACKIivBkICvBkIAASFQAACdCdAAMBXkAAAQCdAAAAidIAA3XQAAididAAg");
	this.shape.setTransform(-8.7,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B7AFF").ss(6,1,1).p("EAtKgOIMhA3AAAIktAAIyAAAQidAAAACdIAACKIivBkICvBkIAASFQAACdCdAAMBXkAAAQCdAAAAidIAA3XQAAididAAg");
	this.shape_1.setTransform(-8.7,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFA516").ss(6,1,1).p("EAtKgOIMhA3AAAIktAAIyAAAQidAAAACdIAACKIivBkICvBkIAASFQAACdCdAAMBXkAAAQCdAAAAidIAA3XQAAididAAg");
	this.shape_2.setTransform(-8.7,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.4,-73.6,609.5,181);


(lib.gr_line_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0073").ss(6,1,1).p("EArzgLgMhA4AAAIiXlPIiWFPIyAAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B7AFF").ss(6,1,1).p("EArzgLgMhA4AAAIiXlPIiWFPIyAAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFA516").ss(6,1,1).p("EArzgLgMhA4AAAIiXlPIiWFPIyAAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.9,-107.2,592,214.6);


(lib.gr_line_2_side = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0073").ss(6,1,1).p("EAtKgMGMhA4AAAIksAAIyAAAQidAAAACdIAABOIivBkICvBkIAAO9QAACdCdAAMBXkAAAQCdAAAAidIAAzTQAAididAAg");
	this.shape.setTransform(-8.7,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B7AFF").ss(6,1,1).p("EAtKgMGMhA4AAAIksAAIyAAAQidAAAACdIAABOIivBkICvBkIAAO9QAACdCdAAMBXkAAAQCdAAAAidIAAzTQAAididAAg");
	this.shape_1.setTransform(-8.7,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFA516").ss(6,1,1).p("EAtKgMGMhA4AAAIksAAIyAAAQidAAAACdIAABOIivBkICvBkIAAO9QAACdCdAAMBXkAAAQCdAAAAidIAAzTQAAididAAg");
	this.shape_2.setTransform(-8.7,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.4,-57.6,609.5,155);


(lib.gr_line_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0073").ss(6,1,1).p("EArzgJeMhA5AAAIiVlPIiXFPIyAAAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAg");
	this.shape.setTransform(0,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B7AFF").ss(6,1,1).p("EArzgJeMhA5AAAIiVlPIiXFPIyAAAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAg");
	this.shape_1.setTransform(0,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFA516").ss(6,1,1).p("EArzgJeMhA5AAAIiVlPIiXFPIyAAAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAg");
	this.shape_2.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.9,-91.2,592,188.6);


(lib.gr_line_1_side = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0073").ss(6,1,1).p("EAtKgKJMhA3AAAIktAAIyAAAQidAAAACdIAACAIivBkICvBkIAAKRQAACdCdAAMBXkAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape.setTransform(-8.7,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B7AFF").ss(6,1,1).p("EAtKgKJMhA3AAAIktAAIyAAAQidAAAACdIAACAIivBkICvBkIAAKRQAACdCdAAMBXkAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape_1.setTransform(-8.7,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFA516").ss(6,1,1).p("EAtKgKJMhA3AAAIktAAIyAAAQidAAAACdIAACAIivBkICvBkIAAKRQAACdCdAAMBXkAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape_2.setTransform(-8.7,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.4,-48.1,609.5,130);


(lib.gr_line_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0073").ss(6,1,1).p("EArzgHhMhA4AAAIiWlPIiXFPIyAAAQidAAAACdIAAPYQAACdCdAAMBXlAAAQCdAAAAidIAAvYQAAididAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B7AFF").ss(6,1,1).p("EArzgHhMhA4AAAIiWlPIiXFPIyAAAQidAAAACdIAAPYQAACdCdAAMBXlAAAQCdAAAAidIAAvYQAAididAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFA516").ss(6,1,1).p("EArzgHhMhA4AAAIiWlPIiXFPIyAAAQidAAAACdIAAPYQAACdCdAAMBXlAAAQCdAAAAidIAAvYQAAididAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.9,-81.7,592,163.6);


(lib.gr_fkds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// star
	this.star = new lib.gr_star();
	this.star.setTransform(415.8,136.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star}]}).wait(6));

	// line1
	this.line1 = new lib.gr_line_1();
	this.line1.setTransform(150,81.8);

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1).to({x:1224,alpha:0.012},0).wait(5));

	// line2
	this.line2 = new lib.gr_line_2();
	this.line2.setTransform(916,66.3);
	this.line2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1).to({x:150,alpha:1},0).wait(1).to({x:1225,alpha:0.012},0).wait(4));

	// line3
	this.line3 = new lib.gr_line_3();
	this.line3.setTransform(922,56.3);
	this.line3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line3).wait(2).to({x:150,alpha:1},0).wait(1).to({x:922,alpha:0.012},0).wait(3));

	// line1_side
	this.line1_side = new lib.gr_line_1_side();
	this.line1_side.setTransform(1224,81.8);
	this.line1_side.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line1_side).wait(3).to({x:150,alpha:1},0).wait(1).to({x:1224,alpha:0.012},0).wait(2));

	// line2_side
	this.line2_side = new lib.gr_line_2_side();
	this.line2_side.setTransform(1225,66.3);
	this.line2_side.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line2_side).wait(4).to({x:150,alpha:1},0).wait(1).to({x:1225,alpha:0.012},0).wait(1));

	// line3_side
	this.line3_side = new lib.gr_line_3_side();
	this.line3_side.setTransform(922,56.3);
	this.line3_side.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line3_side).wait(5).to({x:150,alpha:1},0).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("EgryAMxQicAAAAidIAAvYQAAidCcAAIR7AAICdlPICYFPMBA0AAAQCeAAAACdIAAPYQAACdieAAg");
	this.shape.setTransform(150,81.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.898)").s().p("EgryAOuQicAAAAidIAAzSQAAidCcAAIR7AAICdlPICYFPMBA0AAAQCeAAAACdIAATSQAACdieAAg");
	this.shape_1.setTransform(150,69.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.898)").s().p("EgryAQwQicAAAAidIAA3WQAAidCcAAIR7AAICdlPICYFPMBA0AAAQCeAAAACdIAAXWQAACdieAAg");
	this.shape_2.setTransform(150,56.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.898)").s().p("EgqaAKJQidAAAAicIAAqRIivhkICvhkIAAiAQAAicCdAAISAAAIEtAAMBA3AAAQCdAAAACcIAAPZQAACcidAAg");
	this.shape_3.setTransform(143.8,99);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.898)").s().p("EgqaAMGQidAAAAicIAAu9IivhkICvhkIAAhOQAAicCdAAISAAAIEsAAMBA4AAAQCdAAAACcIAATTQAACcidAAg");
	this.shape_4.setTransform(140.8,85.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.898)").s().p("EgqaAOIQidAAAAicIAAyFIivhkICvhkIAAiKQAAicCdgBISAAAIEtAAMBA3AAAQCdABAACcIAAXXQAACcidAAg");
	this.shape_5.setTransform(140.8,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.9,-50.9,1667,214.6);


(lib.cjs004_balloon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:1,opened:8,close:14,closed:18,open_side:24,opened_side:31,close_side:35,closed_side:39});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		//吹き出しの動作の命令
		this.motion_run = function(order, type){
			
			if(type == 1){
				this.gotoAndPlay(order + "_side");
			}
			else{
				this.gotoAndPlay(order);
			}
			
		}
		
		
		//属性対応
		this.attribute_change = function(num){
			
			if(num >= 0){
				//0:cute, 1:cool, 2:passion
				this.core.star.gotoAndStop(num);
				//通常吹き出し
				this.core.line1.gotoAndStop(num);
				this.core.line2.gotoAndStop(num);
				this.core.line3.gotoAndStop(num);
				//横吹き出し
				this.core.line1_side.gotoAndStop(num);
				this.core.line2_side.gotoAndStop(num);
				this.core.line3_side.gotoAndStop(num);
			}
			
		}
		
		
		//行数対応
		this.line_num = function(num, type){
			//num 0:3行まで, 1:4行, 2:5行,
			//type 0:通常(上), 1:横(左)
			
			if(type == 1){
				//横
				this.core.gotoAndStop(num + 3);
			}
			else{
				//通常
				this.core.gotoAndStop(num);
			}
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11).call(this.frame_20).wait(12).call(this.frame_32).wait(9).call(this.frame_41).wait(7));

	// core
	this.core = new lib.gr_fkds();
	this.core.setTransform(-289.9,-80.9);

	this.timeline.addTween(cjs.Tween.get(this.core).wait(1).to({scaleX:0.57,scaleY:0.57,y:-100.8},0).to({scaleX:1.02,scaleY:1.02,y:-80.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(6).to({scaleX:0.8,scaleY:0.8,y:-89.8,alpha:0.012},3,cjs.Ease.get(-0.99)).wait(1).to({scaleX:1,scaleY:1,x:450,y:-80.8},0).wait(6).to({regX:-162.8,regY:70,scaleX:0.57,scaleY:0.57,x:-455.7,y:-10.8,alpha:1},0).to({scaleX:1.02,scaleY:1.02,x:-452.7},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(4).to({scaleX:0.8,scaleY:0.8,alpha:0.012},3,cjs.Ease.get(-0.99)).wait(1).to({x:319.7},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-435.9,-131.9,1667,214.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
