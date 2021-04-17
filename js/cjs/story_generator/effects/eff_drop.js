(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.usamin_drop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sp
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3FAFD").s().p("AgOB4IAAgFIAOAAIAAAFgAAFBpIAAgFIAFAAIAAAFgAgJBpIAAgFIAFAAIAAAFgAAZBaIAAgFIAFAAIAAAFgAAeBQIAAgFIAFAAIAAAFgAAKBQIAAgFIAFAAIAAAFgAgJBQIAAgFIAFAAIAAAFgAgEBLIAAgFIAEAAIAAAFgAgEBLgAgEA8IAAgFIAEAAIAAAFgAgJAyIAAgFIAFAAIAAAFgAAtAtIAAgKIAFAAIAAAKgAAeAtIAAgKIAFAAIAAAKgAgYAtIAAgFIAKAAIAAAFgAgiAtIAAgKIAFAAIAAAFIAAAFgAgxAoIAAgFIAFAAIAAAFgAAZAUIAAgFIAAgFIAFAAIAAAKgAgdAUIAAgKIAFAAIAAAFIAAAFgAgsAUIAAgFIAFAAIAAAFgAAoAPIAAgFIAFAAIAAAFgAgnAAIAAgEIAFAAIAAAEgAAjgJIAAgFIAFAAIAAAFgAAUgJIAAgFIAFAAIAAAFgAgYgJIAAgKIAFAAIAAAFIAAAFgAAegiIAAgFIAFAAIAAAFgAAPgiIAAgFIAFAAIAAAFgAgTgiIAAgKIAFAAIAAAFIAAAFgAgdgnIAAgFIAFAAIAAAFgAAZg2IAAgFIAFAAIAAAFgAAKg7IAAgFIAFAAIAAAFgAgOg7IAAgFIAFAAIAAAFgAAFhPIAAgFIAFAAIAAAFgAgJhUIAAgFIAFAAIAAAFgAgOheIAAgFIAFAAIAAAFgAAPhjIAAgFIAFAAIAAAFgAAAhoIgEAAIAAgFIAJAAIAAAFgAgJhyIAAgFIAFAAIAAAFg");
	this.shape.setTransform(0,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(133,180,189,0.871)").s().p("AgOCOIAAgEIAOAAIAFAAIAAAEgAgiCFIAAgGIAFAAIAAAGgAAjB/IAAgEIAFAAIAAAEgAAoB7IAAgGIAFAAIAAAGgAAoB7gAgxB1IAAgEIAFAAIAAAEgAAyBrIAAgEIAFAAIAAAEgAg2BrIAAgEIAFAAIAAAEgAAyA+IAAgKIAFAAIAAAKgAAtAhIAAgGIAAgEIAFAAIAAAKgAAoAHIAAgEIAFAAIAAAEgAAjgRIAAgEIAFAAIAAAEgAAeglIAAgEIAFAAIAAAEgAAZg4IAAgGIAFAAIAAAGgAgYg4IAAgGIAFAAIAAAGgAgJh1IAAgEIAFAAIAAAEgAgEiJIAAgFIAEAAIAAAFg");
	this.shape_1.setTransform(0,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BEE5EE").s().p("AAKCKIAAgFIAFAAIAAAFgAAoB1IAAgEIAFAAIAAAEgAgOB1IAAgEIAFAAIAAAEgAAZBnIAAgGIAFAAIAAAGgAAyBhIAAgEIAFAAIAAAEgAgEBhIAAgEIAEAAIAAAEgAg2BhIAAgEIAFAAIAAAEgAAyBIIAAgEIAFAAIAAAEgAAZA0IAAgEIAFAAIAAAEgAgdA0IAAgEIAFAAIAAAEgAgxAwIAAgFIAFAAIAAAFgAAtArIAAgGIAFAAIAAAGgAAUAbIAAgEIAFAAIAAAEgAgYAbIAAgKIAFAAIAAAKgAAoARIAAgEIAFAAIAAAEgAAPADIAAgFIAFAAIAAAFgAgTgCIAAgFIAFAAIAAAFgAAjgHIAAgEIAFAAIAAAEgAAKgVIAAgGIAFAAIAAAGgAAegbIAAgEIAFAAIAAAEgAgOgbIAAgEIAFAAIAAAEgAAFgvIAAgFIAFAAIAAAFgAgJg0IAAgEIAFAAIAAAEgAAUhIIAAgEIAFAAIAAAEgAAFiDIAAgGIAFAAIAAAGgAgEiDIAAgGIAEAAIAAAGg");
	this.shape_2.setTransform(0,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDEBF3").s().p("AAFCHIAAgFIAFAAIAAAFgAgTCHIAAgFIAFAAIAAAFgAgdCCIAAgFIAFAAIAAAFgAAeB9IAAgFIAFAAIAAAFgAAKBzIAAgFIAFAAIAAAFgAgYBuIAAgFIAFAAIAAAFgAAKBkIAAgFIAFAAIAAAFgAgYBkIAAgFIAFAAIAAAFgAAUBfIAAgFIAFAAIAAAFgAAKBaIAAgFIAFAAIAAAFgAg2BaIAAgFIAFAAIAAAFgAAyBVIAAgPIAFAAIAAAPgAg2BGIAAgFIAFAAIAAAFgAAtAtIAAgFIAFAAIAAAFgAAZAtIAAgFIAFAAIAAAFgAgdAtIAAgFIAFAAIAAAFgAAoAUIAAgFIAFAAIAAAFgAAUAUIAAgFIAFAAIAAAFgAgYAPIAAgFIAFAAIAAAFgAAjgEIAAgFIAFAAIAAAFgAAPgEIAAgFIAFAAIAAAFgAgTgJIAAgFIAFAAIAAAFgAAKgdIAAgFIAFAAIAAAFgAgOgiIAAgFIAFAAIAAAFgAAZgxIAAgFIAFAAIAAAFgAgYgxIAAgFIAFAAIAAAFgAAFg2IAAgFIAFAAIAAAFgAgJg7IAAgFIAFAAIAAAFgAAUhFIAAgFIAFAAIAAAFgAgThFIAAgFIAFAAIAAAFgAAAhKIAAgFIAFAAIAAAFgAgEhUIAAgFIAEAAIAAAFgAgOhZIAAgFIAFAAIAAAFgAAPheIAAgFIAFAAIAAAFgAgJhtIAAgFIAFAAIAAAFgAAKhyIAAgFIAFAAIAAAFgAgEiBIAAgFIAEAAIAAAFg");
	this.shape_3.setTransform(0,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPCKIgFAAIgFAAIgFAAIgOAAIgFAAIgFAAIAAgGIgFAAIAAgEIgFAAIAAgGIgFAAIAAgEIgFAAIAAgGIAAgEIgFAAIAAgGIAAgEIAAgFIAAgKIAAgGIAAgEIAAgKIAFAAIAAgGIAAgEIAAgFIAAgGIAFAAIAAgEIAAgGIAAgKIAFAAIAAgEIAAgGIAAgJIAAgFIAFAAIAAgEIAAgKIAFAAIAAgGIAAgEIAAgGIAAgEIAFAAIAAgGIAAgFIAAgEIAAgGIAFAAIAAgEIAAgGIAAgEIAFAAIAAgGIAAgEIAAgGIAAgFIAFAAIAAgEIAAgGIAAgEIAAgGIAAgEIAEAAIAAgGIAAgEIAAgGIAAgFIAFAAIAAAFIAAAGIAAAEIAFAAIAAAGIAAAEIAAAGIAAAEIAFAAIAAAGIAAAEIAAAFIAAAGIAAAEIAFAAIAAAGIAAAEIAAAGIAAAEIAFAAIAAAGIAAAEIAAAFIAAAGIAAAEIAFAAIAAAGIAAAEIAAAGIAAAEIAFAAIAAAGIAAAEIAAAFIAAAFIAAAEIAFAAIAAAGIAAAEIAAAGIAAAEIAAAGIAFAAIAAAEIAAAGIAAAFIAAAEIAAAKIAFAAIAAAGIAAAEIAAAQIAAAFIAAAEIAAAGIgFAAIAAAEIAAAGIgFAAIAAAEIgFAAIAAAGIgFAAIAAAEIgFAAIgFAAIAAAGgAgdBwIAFAAIAAAGIAFAAIAAAEIAFAAIAFAAIAAAGIAFAAIAJAAIAFAAIAAgGIAFAAIAFAAIAAgEIAFAAIAAgGIAFAAIAAgEIAAgGIAFAAIAAgEIAAgFIAAgQIAAgKIAAgKIgFAAIAAgEIAAgFIAAgGIAAgKIgFAAIAAgEIAAgGIAAgEIAAgGIAAgEIgFAAIAAgFIAAgFIAAgEIAAgGIAAgEIgFAAIAAgGIAAgEIAAgGIAAgEIAAgGIgFAAIAAgFIAAgEIAAgGIAAgEIgFAAIAAgGIAAgEIAAgGIAAgEIAAgGIgJAAIAAAGIAAAEIAAAGIAAAEIgFAAIAAAGIAAAEIAAAGIAAAEIAAAFIgFAAIAAAGIAAAEIAAAGIAAAEIgFAAIAAAKIAAAGIAAAEIAAAFIgFAAIAAAJIAAAGIAAAEIAAAKIgFAAIAAAKIAAAGIAAAFIAAAEIgFAAIAAAKIAFAAIAFAAIAKAAIAFAAIAAAGIAFAAIAAAEIAAAGIAEAAIAAAKIgEAAIAAAFIgFAAIAAAEIgFAAIgFAAIgFAAIgFAAgAAPBmIAAgEIAFAAIAAAEg");
	this.shape_4.setTransform(0,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(87,122,130,0.604)").s().p("AAFCRIAAgFIAFAAIAAAFgAAUCMIAAgFIAFAAIAAAFgAgdCMIAAgFIAFAAIAAAFgAAeCHIAAgFIAFAAIAAAFgAAtB4IAAgFIAFAAIAAAFgAA3BfIAAgFIAAgPIAFAAIAAAUgAg7BVIAAgFIAFAAIAAAFgAg2A8IAAgFIAFAAIAAAFgAAyA3IAAgFIAAgFIAFAAIAAAKgAAtAZIAAgFIAFAAIAAAFgAAoAFIAAgFIAFAAIAAAFgAAjgTIAAgFIAFAAIAAAFgAgdgiIAAgFIAFAAIAAAFgAAegnIAAgFIAFAAIAAAFgAAZg7IAAgFIAFAAIAAAFgAgThKIAAgFIAFAAIAAAFgAAUhPIAAgFIAFAAIAAAFgAgOheIAAgFIAFAAIAAAFgAAPhjIAAgFIAFAAIAAAFgAAKh3IAAgFIAFAAIAAAFgAgJh3IAAgFIAFAAIAAAFgAgEiLIAAgFIAEAAIAAAFg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9F0F7").s().p("AAUCMIAAgFIAFAAIAAAFgAAjCCIAAgFIAFAAIAAAFgAgsB9IAAgFIAFAAIAAAFgAAUB4IAAgFIAFAAIAAAFgAAtBzIAAgFIAFAAIAAAFgAgOBuIAAgFIAFAAIAAAFgAAyBkIAAgFIAFAAIAAAFgAAPBkIAAgFIAFAAIAAAFgAAeBfIAAgPIAFAAIAAAPgAg2BVIAAgFIAFAAIAAAFgAgdBGIAAgFIAFAAIAAAFgAgxA8IAAgFIAFAAIAAAFgAAZAyIAAgFIAFAAIAAAFgAAUAZIAAgFIAFAAIAAAFgAAPAAIAAgEIAFAAIAAAEgAAegOIAAgFIAFAAIAAAFgAgdgTIAAgFIAFAAIAAAFgAAKgYIAAgFIAFAAIAAAFgAgOgdIAAgFIAFAAIAAAFgAAAhFIAAgFIAFAAIAAAFgAAPhPIAAgFIAFAAIAAAFgAAAiGIAAgFIAFAAIAAAFg");
	this.shape_6.setTransform(0,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(153,189,196,0.871)").s().p("AAXCPIAAgFIAEAAIAAAFgAgRCPIAAgFIAGAAIAAAFgAguBJIAAgKIAEAAIAAAKgAgqAwIAAgGIAFAAIAAAGgAglAgIAAgKIAGAAIAAAKgAgfAMIAAgJIAEAAIAAAJgAArgGIAAgGIAEAAIAAAGgAgbgGIAAgGIAAgEIAGAAIAAAKgAAlgaIAAgGIAGAAIAAAGgAgVgaIAAgGIAEAAIAAAGgAgRgvIAAgEIAGAAIAAAEgAgLhDIAAgEIAEAAIAAAEgAAbhHIAAgGIAGAAIAAAGgAgHhXIAAgFIAGAAIAAAFgAAXhcIAAgEIAEAAIAAAEgAARhwIAAgEIAGAAIAAAEgAANiEIAAgFIAAgEIAEAAIAAAJg");
	this.shape_7.setTransform(-0.75,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9E5F2").s().p("AAXCPIAAgGIAEAAIAAAGgAADB/IAAgEIgKAAIAAAEIgEAAIAAgEIAAgGIAEAAIAAgEIgEAAIAAgGIAEAAIAAAGIAFAAIAAgGIAJAAIAAAGIAGAAIAAAEIgGAAIAAAGIAAAEgAg0B7IAAgGIAFAAIAAAGgAARBxIAAgGIAGAAIAAAGgAARBnIAAgFIAAgGIgKAAIAAAGIgJAAIAAgKIAAgGIAFAAIAAgKIgFAAIAAgEIgFAAIAAgGIgKAAIAAAGIgKAAIgEAAIAAgGIAEAAIAGAAIAAgTIgGAAIAAgGIAGAAIAEAAIAAgYIgEAAIAAgFIAEAAIAGAAIAAgTIgGAAIAAgGIAGAAIAEAAIAAgOIgEAAIAAgGIAAgFIAEAAIAFAAIAAAFIAFAAIAEAAIAAAGIgEAAIAAAUIAEAAIAGAAIAAAEIgGAAIAAAUIAGAAIAEAAIAAAEIgEAAIAAAUIAEAAIAGAAIAAAGIgGAAIAAATIAGAAIAEAAIAAAKIgEAAIAAAfgAAwBOIAAgGIAEAAIAAAGgAgHBOIAAgGIgEAAIAAgEIAEAAIAAAEIAFAAIAAAGgAgCBIgAAXgqIAAgEIAEAAIAAAEgAgCg0IAAgKIAFAAIAAAGIAAAEgAgHhCIAAgGIAFAAIAAAGgAgLhlIAAgGIAEAAIAAAGgAgCiIIAAgGIAFAAIAAAGg");
	this.shape_8.setTransform(0.25,-0.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A0E1EF").s().p("AgnCOIAAgEIAFAAIAAAEgAgsCKIAAgGIAFAAIAAAGgAgECEIAAgEIAJAAIAAAEgAAtCAIAAgGIAFAAIAAAGgAAPCAIgFAAIAAgGIAFAAIAAgEIAFAAIAFAAIAAAEIgFAAIAAAGgAgOCAIgFAAIAAgGIgFAAIAAgEIAFAAIAFAAIAFAAIAFAAIAAAEIgFAAIAAAGgAAyB2IAAgGIAFAAIAAAGgAgEB2IAAgGIAEAAIAAgEIAAgFIAKAAIAAgGIAKAAIAAAGIgFAAIgFAAIAAAFIAAAEIgKAAIAAAGgAg2B2IAAgGIAFAAIAAAGgAAZBwIAAgEIAAgfIAFAAIAAAKIAAAQIAAAFIAAAEgAAABXIAAgEIAAgGIAFAAIAAAKgAgEBNIAAgEIgFAAIgFAAIAAgGIAKAAIAAAGIAEAAIAAAEgAAUBDIAAgTIAFAAIAAAEIAAAGIAAAFIAAAEgAgYBDIAAgEIAAgFIAAgGIAAgEIAFAAIAAATgAAtA0IAAgEIAFAAIAAAEgAAPAqIAAgUIAFAAIAAAGIAAAEIAAAGIAAAEgAgTAqIAAgKIAAgEIAAgGIAAgEIAFAAIAAAYgAAoAcIAAgGIAFAAIAAAGgAAKASIAAgUIAFAAIAAAFIAAAEIAAAGIAAAFgAgOANIAAgGIAAgEIAAgFIAAgEIAFAAIAAATgAAFgGIAAgUIAFAAIAAAEIAAAGIAAAEIAAAGgAgJgMIAAgEIAAgGIAAgEIAFAAIAAAOgAAAggIAAgFIgEAAIAAgEIAAgGIAAgEIAAgGIAAgEIAEAAIAAAEIAAAKIAFAAIAAAGIAAAEIAAAFgAAAiJIAAgEIAFAAIAAAEg");
	this.shape_9.setTransform(0,-1.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(58,81,86,0.404)").s().p("AgTCYIAAgEIAFAAIAAAEgAgsCJIAAgEIAFAAIAAAEgAg2B7IAAgGIAFAAIAAAGgAA3BrIAAgEIAFAAIAAAEgAg7BrIAAgPIAFAAIAAAGIAAAFIAAAEgAg7BYIAAgGIAFAAIAAAGgAA3BSIAAgEIAFAAIAAAEgAAyA1IAAgGIAFAAIAAAGgAgxAvIAAgKIAFAAIAAAGIAAAEgAAtAbIAAgEIAFAAIAAAEgAgsAbIAAgEIAFAAIAAAEgAAoAIIAAgGIAFAAIAAAGgAgnAIIAAgGIAFAAIAAAGgAgigLIAAgGIAFAAIAAAGgAAjgRIAAgEIAFAAIAAAEgAgdgfIAAgGIAFAAIAAAGgAAeglIAAgFIAFAAIAAAFgAgYg0IAAgEIAFAAIAAAEgAAZg4IAAgGIAFAAIAAAGgAgThIIAAgEIAFAAIAAAEgAAUhMIAAgGIAFAAIAAAGgAgOhbIAAgGIAFAAIAAAGgAAPhhIAAgEIAFAAIAAAEgAAKh1IAAgEIAFAAIAAAEgAgJh1IAAgEIAFAAIAAAEgAAFiIIAAgGIAFAAIAAAGgAgEiIIAAgGIAEAAIAAAGgAAAiSIAAgGIAFAAIAAAGg");
	this.shape_10.setTransform(0,-0.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(28,40,43,0.204)").s().p("AAKCYIAAgEIAFAAIAAAEgAgYCYIAAgEIAFAAIAAAEgAAZCUIAAgFIAFAAIAAAFgAgiCUIAAgFIAFAAIAAAFgAgnCPIAAgGIAFAAIAAAGgAAoCJIAAgEIAFAAIAAAEgAgxCFIAAgGIAFAAIAAAGgAAyB7IAAgGIAFAAIAAAGgAA3BxIAAgGIAFAAIAAAGgAg7BxIAAgGIAFAAIAAAGgAg7BSIAAgEIAFAAIAAAEgAA3BOIAAgGIAFAAIAAAGgAg2A+IAAgEIAFAAIAAAEgAAyAvIAAgEIAFAAIAAAEgAAtAXIAAgGIAFAAIAAAGgAgsAXIAAgGIAFAAIAAAGgAAoACIAAgDIAAgGIAFAAIAAAJgAgnACIAAgJIAFAAIAAAGIAAADgAgigRIAAgEIAFAAIAAAEgAAjgVIAAgGIAFAAIAAAGgAgdglIAAgFIAFAAIAAAFgAAegqIAAgEIAFAAIAAAEgAgYg4IAAgKIAFAAIAAAEIAAAGgAAZg+IAAgEIAAgGIAFAAIAAAKgAgThMIAAgGIAFAAIAAAGgAAUhSIAAgFIAFAAIAAAFgAgOhhIAAgKIAFAAIAAAGIAAAEgAAPhlIAAgGIAFAAIAAAGgAAKh5IAAgGIAFAAIAAAGgAgJh5IAAgGIAFAAIAAAGgAAFiOIAAgEIAAgGIAFAAIAAAKgAgEiOIAAgEIAEAAIAAAEg");
	this.shape_11.setTransform(0,-0.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2F4F9").s().p("AADCHIAAgFIAFAAIAAAFgAggB9IAAgFIgEAAIAAgFIAEAAIAAAFIAGAAIAAAFgAgCB4IAAgFIAKAAIAAAFgAASBzIAAgFIAEAAIAAAFgAgQBzIAAgFIAEAAIAAAFgAgaBpIAAgKIAEAAIAAAFIAAAFgAgvBpIAAgFIAFAAIAAAFgAASBkIAAgFIAEAAIAAAFgAgQBkIAAgFIAEAAIAAAFgAAgBaIAAgFIAGAAIAAAFgAgzBVIAAgFIAAgFIAEAAIAAAKgAAgBGIAAgKIAGAAIAAAKgAgCBGIAAgFIAFAAIAAAFgAgMA8IAAgFIAGAAIAAAFgAAwAyIAAgFIAFAAIAAAFgAgaAoIAAgFIAEAAIAAAFgAgqAeIAAgFIAGAAIAAAFgAAqAZIAAgFIAGAAIAAAFgAAWAKIAAgFIAGAAIAAAFgAgWAKIAAgFIAGAAIAAAFgAgkAKIAAgFIAEAAIAAAFgAAmAAIAAgEIAEAAIAAAEgAgggJIAAgFIAGAAIAAAFgAASgOIAAgFIAEAAIAAAFgAgQgOIAAgFIAEAAIAAAFgAAMgnIAAgFIAGAAIAAAFgAAcgsIAAgFIAEAAIAAAFgAgWgsIAAgFIAGAAIAAAFgAAIg7IAAgFIAEAAIAAAFgAAWhAIAAgFIAGAAIAAAFgAgGhAIAAgFIAEAAIAAAFgAgQhAIAAgFIAEAAIAAAFgAADhUIAAgFIAFAAIAAAFgAgMhUIAAgFIAGAAIAAAFgAgGhoIAAgFIAEAAIAAAFgAAMhtIAAgFIAGAAIAAAFgAgCh8IAAgFIAFAAIAAAFgAAIiBIAAgFIAEAAIAAAFg");
	this.shape_12.setTransform(-0.25,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.usamin_drop, new cjs.Rectangle(-6,-16,12,30.5), null);


(lib.drop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// sweat
	this.instance = new lib.usamin_drop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.2,1,1,0,0,0,-0.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:-0.8,x:0,y:5.75},0).wait(1).to({y:10.45},0).wait(1).to({y:13.25},0).wait(1).to({regX:-0.5,regY:0.2,x:-0.5,y:15.2},0).wait(6).to({startPosition:0},0).to({y:20.2,alpha:0.1016},2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-16,12,50.5);


(lib.replace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{L:1,R:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(3));

	// effect_4
	this.L = new lib.drop();
	this.L.name = "L";
	this.L.parent = this;
	this.L.setTransform(-39,-21);

	this.R = new lib.drop();
	this.R.name = "R";
	this.R.parent = this;
	this.R.setTransform(41,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.L}]},1).to({state:[{t:this.R}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-37,92,37);


// stage content:
(lib.eff_drop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.replace = new lib.replace();
	this.replace.name = "replace";
	this.replace.parent = this;
	this.replace.setTransform(115,140);

	this.timeline.addTween(cjs.Tween.get(this.replace).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'eff_drop',
	width: 230,
	height: 280,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['eff_drop'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
