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
	this.cjs004_balloon.setTransform(460,508);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs004_balloon}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,328,1678,262.6);


// symbols:
(lib.guest_1 = function() {
	this.initialize(img.guest_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_10 = function() {
	this.initialize(img.guest_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_11 = function() {
	this.initialize(img.guest_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_2 = function() {
	this.initialize(img.guest_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_3 = function() {
	this.initialize(img.guest_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_4 = function() {
	this.initialize(img.guest_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_5 = function() {
	this.initialize(img.guest_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_6 = function() {
	this.initialize(img.guest_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_7 = function() {
	this.initialize(img.guest_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_8 = function() {
	this.initialize(img.guest_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_9 = function() {
	this.initialize(img.guest_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_bg = function() {
	this.initialize(img.guest_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.guest_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//外部から変数を受け取るための関数
		this.guest_face = function(num) {
			this.currentface = num - 1;
			
			//表情変化
			this.gotoAndStop(this.currentface);
			
			return this.currentface;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// レイヤー_1
	this.instance = new lib.guest_1();

	this.instance_1 = new lib.guest_2();

	this.instance_2 = new lib.guest_3();

	this.instance_3 = new lib.guest_4();

	this.instance_4 = new lib.guest_5();

	this.instance_5 = new lib.guest_6();

	this.instance_6 = new lib.guest_7();

	this.instance_7 = new lib.guest_8();

	this.instance_8 = new lib.guest_9();

	this.instance_9 = new lib.guest_10();

	this.instance_10 = new lib.guest_11();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.gr_line_3_side = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,115,0.4)").s().p("AjBCgIg2gXIA1gbIAFg6IAqApIA5gMIgbA0IAeAzIg6gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIABBzg");
	this.shape.setTransform(265.8,80.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(27,122,255,0.4)").s().p("AjACgIg3gXIA1gbIAFg6IAqApIA5gMIgbA0IAfAzIg7gJIgnAsgAA7AkIhtAkIAqhrIhFheIBzAGIBEhfIAeByIBwAjIhjBAIABBzg");
	this.shape_1.setTransform(265.9,80.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,165,22,0.4)").s().p("AjBCfIg3gXIA1gbIAGg6IApApIA6gMIgbA0IAeAzIg7gJIgnAsgAA7AlIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIACBzg");
	this.shape_2.setTransform(265.8,80.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// レイヤー 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0073").ss(6,1,1).p("EAtKgOIMhA3AAAIktAAIyAAAQidAAAACdIAACKIivBkICvBkIAASFQAACdCdAAMBXkAAAQCdAAAAidIAA3XQAAididAAg");
	this.shape_3.setTransform(-8.7,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1B7AFF").ss(6,1,1).p("EAtKgOIMhA3AAAIktAAIyAAAQidAAAACdIAACKIivBkICvBkIAASFQAACdCdAAMBXkAAAQCdAAAAidIAA3XQAAididAAg");
	this.shape_4.setTransform(-8.7,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFA516").ss(6,1,1).p("EAtKgOIMhA3AAAIktAAIyAAAQidAAAACdIAACKIivBkICvBkIAASFQAACdCdAAMBXkAAAQCdAAAAidIAA3XQAAididAAg");
	this.shape_5.setTransform(-8.7,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.4,-73.6,609.5,181);


(lib.gr_line_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,115,0.4)").s().p("AjBCgIg2gXIA1gbIAFg6IAqApIA5gMIgbA0IAeAzIg6gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIABBzg");
	this.shape.setTransform(265.9,80.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(27,122,255,0.4)").s().p("AjBCgIg2gXIA1gbIAFg6IAqApIA5gMIgbA0IAfAzIg7gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBEhfIAeByIBwAjIhjBAIABBzg");
	this.shape_1.setTransform(266,80.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,165,22,0.4)").s().p("AjBCfIg3gXIA1gbIAGg6IApApIA6gMIgbA0IAeAzIg6gJIgoAsgAA8AlIhuAkIArhrIhGheIBzAGIBFhfIAdByIBxAjIhjBAIABBzg");
	this.shape_2.setTransform(265.9,80.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(3));

	// レイヤー_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0073").ss(6,1,1).p("EArzgLgMg8gAAAIiXlPIiWFPI2YAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1B7AFF").ss(6,1,1).p("EArzgLgMg8gAAAIiXlPIiWFPI2YAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFA516").ss(6,1,1).p("EArzgLgMg8gAAAIiXlPIiWFPI2YAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F55FA3").ss(6,1,1).p("EgnBgMeIkxAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAMg8gAAAIktAAIvkAAEglBgMfIg+jSIg7DS");
	this.shape_6.setTransform(0,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F9EF5").ss(6,1,1).p("EgnBgMeIkxAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAMg8gAAAI0RAAEglBgMfIg+jSIg7DS");
	this.shape_7.setTransform(0,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F5C35F").ss(6,1,1).p("EgnBgMeIkxAAQidAAAACdIAAXWQAACdCdAAMBXlAAAQCdAAAAidIAA3WQAAididAAMg8gAAAI0RAAEglBgMfIg+jSIg7DS");
	this.shape_8.setTransform(0,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

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

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,115,0.4)").s().p("AjBCgIg2gXIA1gbIAFg6IAqApIA5gMIgbA0IAeAzIg6gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIABBzg");
	this.shape.setTransform(265.9,70);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(27,122,255,0.4)").s().p("AjBCgIg2gXIA1gbIAFg6IAqApIA5gMIgbA0IAfAzIg7gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBEhfIAeByIBwAjIhjBAIABBzg");
	this.shape_1.setTransform(266,70);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,165,22,0.4)").s().p("AjBCfIg3gXIA1gbIAGg6IApApIA6gMIgbA0IAeAzIg6gJIgoAsgAA8AlIhuAkIArhrIhGheIBzAGIBFhfIAdByIBxAjIhjBAIABBzg");
	this.shape_2.setTransform(265.9,69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// レイヤー 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0073").ss(6,1,1).p("EAtKgMGMhA4AAAIksAAIyAAAQidAAAACdIAABOIivBkICvBkIAAO9QAACdCdAAMBXkAAAQCdAAAAidIAAzTQAAididAAg");
	this.shape_3.setTransform(-8.7,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1B7AFF").ss(6,1,1).p("EAtKgMGMhA4AAAIksAAIyAAAQidAAAACdIAABOIivBkICvBkIAAO9QAACdCdAAMBXkAAAQCdAAAAidIAAzTQAAididAAg");
	this.shape_4.setTransform(-8.7,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFA516").ss(6,1,1).p("EAtKgMGMhA4AAAIksAAIyAAAQidAAAACdIAABOIivBkICvBkIAAO9QAACdCdAAMBXkAAAQCdAAAAidIAAzTQAAididAAg");
	this.shape_5.setTransform(-8.7,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.4,-57.6,609.5,155);


(lib.gr_line_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,115,0.4)").s().p("AjBCgIg2gXIA1gbIAFg6IAqApIA5gMIgbA0IAeAzIg6gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIABBzg");
	this.shape.setTransform(265.8,70.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(27,122,255,0.4)").s().p("AjBCgIg2gXIA1gbIAGg6IApApIA6gMIgbA0IAdAzIg6gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBFhfIAcByIBxAjIhjBAIABBzg");
	this.shape_1.setTransform(265.9,70.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,165,22,0.4)").s().p("AjBCfIg2gXIA0gbIAGg6IAqApIA5gMIgbA0IAeAzIg6gJIgnAsgAA8AlIhtAkIAqhrIhFheIBzAGIBEhfIAdByIBxAjIhjBAIAABzg");
	this.shape_2.setTransform(265.7,70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(3));

	// レイヤー_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0073").ss(6,1,1).p("EArzgJeMg8hAAAIiVlPIiXFPI2YAAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAg");
	this.shape_3.setTransform(0,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1B7AFF").ss(6,1,1).p("EArzgJeMg8hAAAIiVlPIiXFPI2YAAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAg");
	this.shape_4.setTransform(0,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFA516").ss(6,1,1).p("EArzgJeMg8hAAAIiVlPIiXFPI2YAAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAg");
	this.shape_5.setTransform(0,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F55FA3").ss(6,1,1).p("Egm8gKaIk2AAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAMg8hAAAI0QAAEglBgKfIg+jSIg7DS");
	this.shape_6.setTransform(0,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F9EF5").ss(6,1,1).p("Egm7gKaIk3AAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAMg8hAAAI0RAAEglBgKfIg+jSIg7DS");
	this.shape_7.setTransform(0,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F5C35F").ss(6,1,1).p("Egm9gKaIk1AAQidAAAACdIAATSQAACdCdAAMBXlAAAQCdAAAAidIAAzSQAAididAAMg8hAAAI0OAAEglBgKfIg+jSIg7DS");
	this.shape_8.setTransform(0,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

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

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,115,0.4)").s().p("AjBCgIg2gXIA1gbIAFg6IAqApIA5gMIgbA0IAeAzIg6gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIABBzg");
	this.shape.setTransform(265.8,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(27,122,255,0.4)").s().p("AjACgIg3gXIA1gbIAFg6IAqApIA5gMIgbA0IAfAzIg7gJIgnAsgAA7AkIhtAkIAqhrIhFheIBzAGIBEhfIAeByIBwAjIhjBAIABBzg");
	this.shape_1.setTransform(265.9,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,165,22,0.4)").s().p("AjBCfIg3gXIA1gbIAGg6IApApIA6gMIgbA0IAeAzIg7gJIgnAsgAA7AlIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIACBzg");
	this.shape_2.setTransform(265.8,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// レイヤー 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0073").ss(6,1,1).p("EAtKgKJMhA3AAAIktAAIyAAAQidAAAACdIAACAIivBkICvBkIAAKRQAACdCdAAMBXkAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape_3.setTransform(-8.7,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1B7AFF").ss(6,1,1).p("EAtKgKJMhA3AAAIktAAIyAAAQidAAAACdIAACAIivBkICvBkIAAKRQAACdCdAAMBXkAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape_4.setTransform(-8.7,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFA516").ss(6,1,1).p("EAtKgKJMhA3AAAIktAAIyAAAQidAAAACdIAACAIivBkICvBkIAAKRQAACdCdAAMBXkAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape_5.setTransform(-8.7,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.4,-48.1,609.5,130);


(lib.gr_line_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,115,0.4)").s().p("AjBCgIg2gXIA1gbIAFg6IAqApIA5gMIgbA0IAeAzIg6gJIgnAsgAA7AkIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIABBzg");
	this.shape.setTransform(265.8,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(27,122,255,0.4)").s().p("AjACgIg3gXIA1gbIAFg6IAqApIA5gMIgbA0IAfAzIg7gJIgnAsgAA7AkIhtAkIAqhrIhFheIBzAGIBEhfIAeByIBwAjIhjBAIABBzg");
	this.shape_1.setTransform(265.9,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,165,22,0.4)").s().p("AjBCfIg3gXIA1gbIAGg6IApApIA6gMIgbA0IAeAzIg7gJIgnAsgAA7AlIhtAkIArhrIhGheIBzAGIBFhfIAdByIBwAjIhjBAIACBzg");
	this.shape_2.setTransform(265.8,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(3));

	// レイヤー_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0073").ss(6,1,1).p("EArzgHhMg8iAAAIiWlPIiXFPI2WAAQidAAAACdIAAPYQAACdCdAAMBXlAAAQCdAAAAidIAAvYQAAididAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1B7AFF").ss(6,1,1).p("EArzgHhMg8gAAAIiWlPIiXFPI2YAAQidAAAACdIAAPYQAACdCdAAMBXlAAAQCdAAAAidIAAvYQAAididAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFA516").ss(6,1,1).p("EArzgHhMg8gAAAIiWlPIiXFPI2YAAQidAAAACdIAAPYQAACdCdAAMBXlAAAQCdAAAAidIAAvYQAAididAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F55FA3").ss(6,1,1).p("EArzgIgMg8iAAAIxKAAIjIAAIg+jSIg7DSIk4AAQidAAAACdIAAPZQAACdCdAAMBXlAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape_6.setTransform(0,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F9EF5").ss(6,1,1).p("EArzgIgMg8gAAAI0UAAIg+jSIg7DSIk4AAQidAAAACdIAAPZQAACdCdAAMBXlAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape_7.setTransform(0,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F5C35F").ss(6,1,1).p("EArzgIgMg8gAAAI0UAAIg+jSIg7DSIk4AAQidAAAACdIAAPZQAACdCdAAMBXlAAAQCdAAAAidIAAvZQAAididAAg");
	this.shape_8.setTransform(0,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.9,-81.7,592,163.6);


(lib.gr_fkds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.chara_1.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// line1
	this.line1 = new lib.gr_line_1();
	this.line1.setTransform(150,81.8);

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1).to({x:1224,alpha:0.012},0).wait(5).to({x:150,alpha:1},0).to({_off:true},1).wait(2));

	// line2
	this.line2 = new lib.gr_line_2();
	this.line2.setTransform(916,66.3);
	this.line2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1).to({x:150,alpha:1},0).wait(1).to({x:1225,alpha:0.012},0).wait(5).to({x:150,alpha:1},0).to({_off:true},1).wait(1));

	// line3
	this.line3 = new lib.gr_line_3();
	this.line3.setTransform(922,56.3);
	this.line3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line3).wait(2).to({x:150,alpha:1},0).wait(1).to({x:922,alpha:0.012},0).wait(5).to({x:150,alpha:1},0).wait(1));

	// chara_icon
	this.chara_1 = new lib.guest_1_1();
	this.chara_1.setTransform(-92.9,-34.9,1,1,0,0,0,64,64);

	this.timeline.addTween(cjs.Tween.get(this.chara_1).wait(6).wait(1).to({y:-60},0).wait(1).to({y:-84.6},0).wait(1));

	// icon_bg
	this.instance = new lib.guest_bg();
	this.instance.setTransform(-156.9,-98.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{y:-98.9}}]},6).to({state:[{t:this.instance,p:{y:-123.9}}]},1).to({state:[{t:this.instance,p:{y:-148.9}}]},1).wait(1));

	// line1_side
	this.line1_side = new lib.gr_line_1_side();
	this.line1_side.setTransform(1224,81.8);
	this.line1_side.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line1_side).wait(3).to({x:150,alpha:1},0).wait(1).to({x:1224,alpha:0.012},0).to({_off:true},2).wait(3));

	// line2_side
	this.line2_side = new lib.gr_line_2_side();
	this.line2_side.setTransform(1225,66.3);
	this.line2_side.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line2_side).wait(4).to({x:150,alpha:1},0).wait(1).to({x:1225,alpha:0.012},0).to({_off:true},1).wait(3));

	// line3_side
	this.line3_side = new lib.gr_line_3_side();
	this.line3_side.setTransform(922,56.3);
	this.line3_side.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.line3_side).wait(5).to({x:150,alpha:1},0).to({_off:true},1).wait(3));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("EgryAMxQicAAAAidIAAvYQAAidCcAAIWTAAICdlPICYFPMA8cAAAQCeAAAACdIAAPYQAACdieAAg");
	this.shape.setTransform(150,81.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.898)").s().p("EgryAOuQicAAAAidIAAzSQAAidCcAAIWTAAICdlPICYFPMA8cAAAQCeAAAACdIAATSQAACdieAAg");
	this.shape_1.setTransform(150,69.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.898)").s().p("EgryAQwQicAAAAidIAA3WQAAidCcAAIWTAAICdlPICYFPMA8cAAAQCeAAAACdIAAXWQAACdieAAg");
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

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgryALDQicAAAAidIAAvYQAAidCcAAIFBAAIABgFQACgUACgJIABgQQAAgJAJgDQAKgDABgHIADgPIAHgPQAEgKAFgCQALgEAIAKIAKARQAUAmAEAUQALAFAAALIAAARIPlAAIE1AAMA8cAAAQCeAAAACdIAAPYQAACdieAAg");
	this.shape_6.setTransform(150,92.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AghBTIgZAAQgIgDgCgEIAAgIIALgdIABgDIAVgwIAMgzQAIgdAPAEQAFAGAHASQAGAOAAADIAMApIANAoIABACQADAKALAOIALAPQAAAFgHAEQgIAGgPAAIhIgHg");
	this.shape_7.setTransform(-92.3,4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.898)").s().p("EgryAMGQicAAAAicIAAzTQAAicCcAAIFDAAIgBACIgLAeIAAAHQACAEAIADIAZAAIBKAHQAOAAAIgGQAIgEgBgFIgKgOQgLgOgEgKIPrAAIE1AAMA8cAAAQCeAAAACcIAATTQAACcieAAg");
	this.shape_8.setTransform(150,86.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AAoBNIgCgHIhYAAQgIgBAAgJQAAgDANgeQAPgfADgKIANgmQABgGgCgOQABgMAQAEQAFAGAEAMIAFAUIAOAmIAQAfQAOAggBALQABAMgLAAQgGAAgDgFg");
	this.shape_9.setTransform(-93,-20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.898)").s().p("EgryAOIQicAAAAicIAA3WQAAieCcAAIFGAAQgNAeAAAEQAAAIAIACIBaAAIACAHQADAFAGAAQALAAgBgMQABgMgOggIPwAAIE1AAMA8cAAAQCeAAAACeIAAXWQAACcieAAg");
	this.shape_10.setTransform(150,73.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.9,-98.9,1678,262.6);


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
		
		//行数対応
		this.line_num = function(num, type){
			//num 0:3行まで, 1:4行, 2:5行,
			//type 0:通常(上), 1:横(左) 2:ゲスト(吹き出しなし)
			
			if(type == 1){
				//横
				this.core.gotoAndStop(num + 3);
			}
			else if(type == 0){
				//通常
				this.core.gotoAndStop(num);
			}else if(type == 2){
				this.core.gotoAndStop(num + 6);
			}
		}
		
		//属性対応
		this.attribute_change = function(num){
			
			if(num >= 0){
				//starの色変更はなくして枠と同じフレームに配置
				//0:cute, 1:cool, 2:passion 3:cute guest 4:cool guest 5:passion guest
				//this.core.star.gotoAndStop(num);
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

	this.timeline.addTween(cjs.Tween.get(this.core).wait(1).to({scaleX:0.57,scaleY:0.57,x:-277.8,y:-100.8},0).to({scaleX:1.02,scaleY:1.02,x:-289.8,y:-80.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(6).to({scaleX:0.8,scaleY:0.8,y:-89.8,alpha:0.012},3,cjs.Ease.get(-0.99)).wait(1).to({scaleX:1,scaleY:1,x:450,y:-80.8},0).wait(6).to({regX:-162.8,regY:70,scaleX:0.57,scaleY:0.57,x:-455.7,y:-10.8,alpha:1},0).to({scaleX:1.02,scaleY:1.02,x:-452.7},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(4).to({scaleX:0.8,scaleY:0.8,alpha:0.012},3,cjs.Ease.get(-0.99)).wait(1).to({x:319.7},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-446.9,-179.9,1678,262.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
