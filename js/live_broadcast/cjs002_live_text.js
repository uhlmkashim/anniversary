(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs002_live_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		//this.cjs002_live_text.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// cjs002_live_text
	this.cjs002_live_text = new lib.cjs002_live_text_1();
	this.cjs002_live_text.setTransform(431,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs002_live_text}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(388,32,86,42);


// symbols:
(lib.live = function() {
	this.initialize(img.live);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,42);


(lib.live_text = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.live();
	this.instance.setTransform(-42.9,-20.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-20.9,86,42);


(lib.cjs002_live_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// live
	this.instance_1 = new lib.live_text();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({scaleX:0.03},5,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.03,skewY:180},0).to({scaleX:1},4,cjs.Ease.get(1)).to({scaleX:0.03},4,cjs.Ease.get(-0.99)).wait(1).to({scaleX:0.03,skewY:0},0).to({scaleX:1},5,cjs.Ease.get(1)).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-20.9,86,42);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
