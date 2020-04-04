(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.christmas_present = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.christmas_present.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// main
	this.christmas_present = new lib.cjs_();
	this.christmas_present.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.christmas_present}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(309,148.3,531.7,371.3);


// symbols:
(lib.box_light_04 = function() {
	this.initialize(img.box_light_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,750);


(lib.box_top = function() {
	this.initialize(img.box_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,143);


(lib.box_under = function() {
	this.initialize(img.box_under);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,170);


(lib.dummy_white_mask = function() {
	this.initialize(img.dummy_white_mask);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.eff_star_a = function() {
	this.initialize(img.eff_star_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.guide = function() {
	this.initialize(img.guide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1540);


(lib.light_star = function() {
	this.initialize(img.light_star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.line_light = function() {
	this.initialize(img.line_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,625);


(lib.present_1 = function() {
	this.initialize(img.present_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_10 = function() {
	this.initialize(img.present_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_11 = function() {
	this.initialize(img.present_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_12 = function() {
	this.initialize(img.present_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_13 = function() {
	this.initialize(img.present_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_14 = function() {
	this.initialize(img.present_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_15 = function() {
	this.initialize(img.present_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_16 = function() {
	this.initialize(img.present_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_17 = function() {
	this.initialize(img.present_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_18 = function() {
	this.initialize(img.present_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_19 = function() {
	this.initialize(img.present_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_2 = function() {
	this.initialize(img.present_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_20 = function() {
	this.initialize(img.present_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_21 = function() {
	this.initialize(img.present_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_22 = function() {
	this.initialize(img.present_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_23 = function() {
	this.initialize(img.present_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_24 = function() {
	this.initialize(img.present_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_25 = function() {
	this.initialize(img.present_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_26 = function() {
	this.initialize(img.present_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_27 = function() {
	this.initialize(img.present_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_28 = function() {
	this.initialize(img.present_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_29 = function() {
	this.initialize(img.present_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_3 = function() {
	this.initialize(img.present_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_4 = function() {
	this.initialize(img.present_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_5 = function() {
	this.initialize(img.present_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_6 = function() {
	this.initialize(img.present_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_7 = function() {
	this.initialize(img.present_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_8 = function() {
	this.initialize(img.present_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.present_9 = function() {
	this.initialize(img.present_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,55);


(lib.star_y = function() {
	this.initialize();

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AB2C+Ih2hRIh1BRIgDABIgDgBIgBgCIAAgDIAoiKIhyhWIgBgCIAAgDIABgDIADAAICQgEIAwiIIACgCIABgBIACABIACACIAwCIICQAEIACAAIACADIAAADIgCACIhyBWIAqCKIAAADIgCACIgDABIgDgBg");
	this.shape.setTransform(20.2,19.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,38.4);


(lib.star_l = function() {
	this.initialize();

	// レイヤー_1
	this.instance = new lib.light_star();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.star_g = function() {
	this.initialize();

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC66").s().p("Ah+B8ImAgKIExjnIhtlwIE6DaIE7jaIhtFwIExDnImAAKIh/Fqg");
	this.shape.setTransform(51.1,48.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102.3,97.3);


(lib.line_light_1 = function() {
	this.initialize();

	// レイヤー_1
	this.instance = new lib.line_light();
	this.instance.setTransform(19,169,0.913,0.621);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19,169,295.7,388.1);


(lib.heart = function() {
	this.initialize();

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF66CC").s().p("AgdClQgfgjgngZIgugeQgdgTgSgRQgzgsgFg4QgEg8AdgpQAbgmAtgKQAtgKAqAVQAtAYAVA2QAWg0AsgXQApgWAtAJQAtAJAaAlQAdAogFA8QgDAkgQAbQgMAWgXAVQgRAOgcASIguAdQgsAegdAhQgYAcgFATQgDgTgcgeg");
	this.shape.setTransform(25,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,42.9);


(lib.first_item = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28));

	// icon
	this.instance = new lib.present_1();
	this.instance.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_1 = new lib.present_2();
	this.instance_1.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_2 = new lib.present_3();
	this.instance_2.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_3 = new lib.present_4();
	this.instance_3.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_4 = new lib.present_5();
	this.instance_4.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_5 = new lib.present_6();
	this.instance_5.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_6 = new lib.present_7();
	this.instance_6.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_7 = new lib.present_8();
	this.instance_7.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_8 = new lib.present_9();
	this.instance_8.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_9 = new lib.present_10();
	this.instance_9.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_10 = new lib.present_11();
	this.instance_10.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_11 = new lib.present_12();
	this.instance_11.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_12 = new lib.present_13();
	this.instance_12.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_13 = new lib.present_14();
	this.instance_13.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_14 = new lib.present_15();
	this.instance_14.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_15 = new lib.present_16();
	this.instance_15.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_16 = new lib.present_17();
	this.instance_16.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_17 = new lib.present_18();
	this.instance_17.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_18 = new lib.present_19();
	this.instance_18.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_19 = new lib.present_20();
	this.instance_19.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_20 = new lib.present_21();
	this.instance_20.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_21 = new lib.present_22();
	this.instance_21.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_22 = new lib.present_23();
	this.instance_22.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_23 = new lib.present_24();
	this.instance_23.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_24 = new lib.present_25();
	this.instance_24.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_25 = new lib.present_26();
	this.instance_25.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_26 = new lib.present_27();
	this.instance_26.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_27 = new lib.present_28();
	this.instance_27.setTransform(-19.9,-19.9,0.597,0.597);

	this.instance_28 = new lib.present_29();
	this.instance_28.setTransform(-19.9,-19.9,0.597,0.597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,160,160);


(lib.kira_mc = function() {
	this.initialize();

	// レイヤー 2
	this.instance = new lib.eff_star_a();
	this.instance.setTransform(-42.9,-28.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-28.4,87,87);


(lib.box_l_gra = function() {
	this.initialize();

	// レイヤー_1
	this.instance = new lib.box_light_04();
	this.instance.setTransform(13,51,1,0.864);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13,51,750,648.2);


(lib.箱の影 = function() {
	this.initialize();

	// レイヤー_1
	this.instance = new lib.shadow();
	this.instance.setTransform(-62.9,-26.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.9,-26.9,126,55);


(lib.プレゼントボックス上 = function() {
	this.initialize();

	// レイヤー_1
	this.instance = new lib.box_top();
	this.instance.setTransform(-82.9,-88.9,0.619,0.619);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.9,-88.9,166,88.6);


(lib.プレゼントボックス下 = function() {
	this.initialize();

	// レイヤー_1
	this.instance = new lib.box_under();
	this.instance.setTransform(-71.9,-103.9,0.606,0.606);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.9,-103.9,143,103);


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


(lib.cracker_ribbon2_inner_wp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AhbKbQgEgqgEhLQALkqBCoLIAvl5QAYjCAHhdQAJAXAJA8QATB3AHC3QhuIfgfINQgQEHAHCbQgciMgNiBg");
	this.shape.setTransform(8.6,-56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhZlrQgCkQAQh6QAEBLAEAqQANCBAcCMIA6HaIA6HMIhfDDQhQo+gEojg");
	this.shape_1.setTransform(6.2,73.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADTAQAcgZATgzQAmhlgrh+Qgrh+idh8QhPg+hIgkQgSgTgWgdQgqg6gQgzQAMAPBQA0QA+ApAcAPQBlA3BRA6QAtAiAfAcQBHA/AoBdQAiBKgBA1QABA0gaAoQgLARgZAfIg1BEQgJAMgbAVIgbATgAGMrKQgKg0gwhDQgyhEhKg8QhPhChXgnQhegrhZgCIBLiFIAZgDIASgBQA0AABGAyQBBAvBABRQBABRAsBcQAwBhAOBWg");
	this.shape_2.setTransform(5.4,-129.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCCFF").s().p("AheQBQAGhFAOgZQAIgEAJgKQAQgQAhgqIAVgFIAbgUQAbgVAJgMIAFAEIgOCIIikCVQAAgeADgjgAmZgbQgQgxAAgqQAAgnAEgTQAIglAcglQBJhlDriJQDjiGCRjcQAyhLAjhPQAYg3AKgmIAJAkQADAUAAAXQAAA4gxBWQguBRhSBfQhSBdhjBWQhmBZhmA+QitBrg8CRQgeBJAFAxQgHgOgIgZg");
	this.shape_3.setTransform(4.4,-89.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah1PIQgTgTgGgJIglg5QgQgbgGgOQgSghAEgpQAEgqAeg4QAlhHA6gsQAagUAngZQA/gnBRgmQAWgKAzgbQBBgkAJgLQgPAnglArQgRAVgQANQg4AYhCAtQiABWgpBhQgqBgAWBSQAMApASAXIgCAaIgTgRgAkNpNQARhDArhKQAohFA2g7QA3g9A1ghQA2gjAqAEIANADIATAEIAxBuQhFgFhMAcQhDAYhBAwQg8AqgrAyQgqAygLAog");
	this.shape_4.setTransform(0.1,-178.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCFF").s().p("AiaLsIgChsIAFgCQAGAJATATIATARIARAFQAXAkALANQAGAJAGAEQAJAUgBA3QAAAcgCAXgAD6gyQgjh4h9hfQhKg4hHhNQhGhKg4hQQg4hPgehEQgfhHADgsQACgSAEgPIAKgcQAEAeAPAtQAVBBAhA/QBgC2CkB6QCpB6AxBVQATAfAEAeQACAQgDAeQgDAhgQAkQgIATgGANQAHgpgSg4g");
	this.shape_5.setTransform(1,-148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABARrQANgaAHgxQAPhggbhyQgchyhVhmQgsg1gmgcQgKgPgMgaQgZgygJgvQAFAOAsAqQAhAgAQAMQA2AsAqAvQAZAdASAYQAnAzAZBUQAUBDADAxQACAwgLAoIgQAwIgZBDQgDALgNAWIgNAUgACNshQgdg8gogxQgrg5gsgcQgzghgvAGIAiiCIAMgFIAJgEQAcgEAjAqQAkAmAkBIQAlBGAbBRQAcBXAMBPIgFABQgGgwgdg6g");
	this.shape_6.setTransform(-25.8,-287.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCCFF").s().p("AAYPOQgBhBAHgYQADgFAFgKQAHgPAPgrIAMgHIAMgTQANgWAEgMIADADIgBCAIhOCWIgBg7gAi3ASQgLgrgCgnQgCgjABgTQADgkAMgkQAhhlByiQQBtiQBAjXQAWhKAOhMQAKg1ADgjIAHAgQADARABAXQACAzgVBUQgUBQgmBeQglBdgvBYQgvBbgxBBQhUBxgYCOQgMBDAFAvQgEgOgFgXg");
	this.shape_7.setTransform(-26.3,-251.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-150.6,21.5,300.4);


(lib.cracker_ribbon2_inner_p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9966FF").s().p("AhZlrQgCkQAQh6QAEBLAEAqQANCBAcCMIA6HaIA6HMIhfDDQhQo+gEojg");
	this.shape.setTransform(6.2,73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9999FF").s().p("AhbKbQgEgqgEhLQALkqBCoLIAvl5QAYjCAHhdQAJAXAJA8QATB3AHC3QhuIfgfINQgQEHAHCbQgciMgNiBg");
	this.shape_1.setTransform(8.6,-56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9999FF").s().p("AADTAQAcgZATgzQAmhlgrh+Qgrh+idh8QhPg+hIgkQgSgTgWgdQgqg6gQgzQAMAPBQA0QA+ApAcAPQBlA3BRA6QAtAiAfAcQBHA/AoBdQAiBKgBA1QABA0gaAoQgLARgZAfIg1BEQgJAMgbAVIgbATgAGMrKQgKg0gwhDQgyhEhKg8QhPhChXgnQhegrhZgCIBLiFIAZgDIASgBQA0AABGAyQBBAvBABRQBABRAsBcQAwBhAOBWg");
	this.shape_2.setTransform(5.4,-129.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9966FF").s().p("AheQBQAGhFAOgZQAIgEAJgKQAQgQAhgqIAVgFIAbgUQAbgVAJgMIAFAEIgOCIIikCVQAAgeADgjgAmZgbQgQgxAAgqQAAgnAEgTQAIglAcglQBJhlDriJQDjiGCRjcQAyhLAjhPQAYg3AKgmIAJAkQADAUAAAXQAAA4gxBWQguBRhSBfQhSBdhjBWQhmBZhmA+QitBrg8CRQgeBJAFAxQgHgOgIgZg");
	this.shape_3.setTransform(4.4,-89.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9966FF").s().p("AiaLsIgChsIAFgCQAGAJATATIATARIARAFQAXAkALANQAGAJAGAEQAJAUgBA3QAAAcgCAXgAD6gyQgjh4h9hfQhKg4hHhNQhGhKg4hQQg4hPgehEQgfhHADgsQACgSAEgPIAKgcQAEAeAPAtQAVBBAhA/QBgC2CkB6QCpB6AxBVQATAfAEAeQACAQgDAeQgDAhgQAkQgIATgGANQAHgpgSg4g");
	this.shape_4.setTransform(1,-148);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9999FF").s().p("Ah1PIQgTgTgGgJIglg5QgQgbgGgOQgSghAEgpQAEgqAeg4QAlhHA6gsQAagUAngZQA/gnBRgmQAWgKAzgbQBBgkAJgLQgPAnglArQgRAVgQANQg4AYhCAtQiABWgpBhQgqBgAWBSQAMApASAXIgCAaIgTgRgAkNpNQARhDArhKQAohFA2g7QA3g9A1ghQA2gjAqAEIANADIATAEIAxBuQhFgFhMAcQhDAYhBAwQg8AqgrAyQgqAygLAog");
	this.shape_5.setTransform(0.1,-178.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9999FF").s().p("ABARrQANgaAHgxQAPhggbhyQgchyhVhmQgsg1gmgcQgKgPgMgaQgZgygJgvQAFAOAsAqQAhAgAQAMQA2AsAqAvQAZAdASAYQAnAzAZBUQAUBDADAxQACAwgLAoIgQAwIgZBDQgDALgNAWIgNAUgACNshQgdg8gogxQgrg5gsgcQgzghgvAGIAiiCIAMgFIAJgEQAcgEAjAqQAkAmAkBIQAlBGAbBRQAcBXAMBPIgFABQgGgwgdg6g");
	this.shape_6.setTransform(-25.8,-287.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9966FF").s().p("AAYPOQgBhBAHgYQADgFAFgKQAHgPAPgrIAMgHIAMgTQANgWAEgMIADADIgBCAIhOCWIgBg7gAi3ASQgLgrgCgnQgCgjABgTQADgkAMgkQAhhlByiQQBtiQBAjXQAWhKAOhMQAKg1ADgjIAHAgQADARABAXQACAzgVBUQgUBQgmBeQglBdgvBYQgvBbgxBBQhUBxgYCOQgMBDAFAvQgEgOgFgXg");
	this.shape_7.setTransform(-26.3,-251.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-150.6,21.5,300.4);


(lib.cracker_ribbon2_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("AhZlrQgCkQAQh6QAEBLAEAqQANCBAcCMIA6HaIA6HMIhfDDQhQo+gEojg");
	this.shape.setTransform(6.2,73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("AhbKbQgEgqgEhLQALkqBCoLIAvl5QAYjCAHhdQAJAXAJA8QATB3AHC3QhuIfgfINQgQEHAHCbQgciMgNiBg");
	this.shape_1.setTransform(8.6,-56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CCFF").s().p("AADTAQAcgZATgzQAmhlgrh+Qgrh+idh8QhPg+hIgkQgSgTgWgdQgqg6gQgzQAMAPBQA0QA+ApAcAPQBlA3BRA6QAtAiAfAcQBHA/AoBdQAiBKgBA1QABA0gaAoQgLARgZAfIg1BEQgJAMgbAVIgbATgAGMrKQgKg0gwhDQgyhEhKg8QhPhChXgnQhegrhZgCIBLiFIAZgDIASgBQA0AABGAyQBBAvBABRQBABRAsBcQAwBhAOBWg");
	this.shape_2.setTransform(5.4,-129.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699FF").s().p("AheQBQAGhFAOgZQAIgEAJgKQAQgQAhgqIAVgFIAbgUQAbgVAJgMIAFAEIgOCIIikCVQAAgeADgjgAmZgbQgQgxAAgqQAAgnAEgTQAIglAcglQBJhlDriJQDjiGCRjcQAyhLAjhPQAYg3AKgmIAJAkQADAUAAAXQAAA4gxBWQguBRhSBfQhSBdhjBWQhmBZhmA+QitBrg8CRQgeBJAFAxQgHgOgIgZg");
	this.shape_3.setTransform(4.4,-89.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699FF").s().p("AiaLsIgChsIAFgCQAGAJATATIATARIARAFQAXAkALANQAGAJAGAEQAJAUgBA3QAAAcgCAXgAD6gyQgjh4h9hfQhKg4hHhNQhGhKg4hQQg4hPgehEQgfhHADgsQACgSAEgPIAKgcQAEAeAPAtQAVBBAhA/QBgC2CkB6QCpB6AxBVQATAfAEAeQACAQgDAeQgDAhgQAkQgIATgGANQAHgpgSg4g");
	this.shape_4.setTransform(1,-148);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CCFF").s().p("Ah1PIQgTgTgGgJIglg5QgQgbgGgOQgSghAEgpQAEgqAeg4QAlhHA6gsQAagUAngZQA/gnBRgmQAWgKAzgbQBBgkAJgLQgPAnglArQgRAVgQANQg4AYhCAtQiABWgpBhQgqBgAWBSQAMApASAXIgCAaIgTgRgAkNpNQARhDArhKQAohFA2g7QA3g9A1ghQA2gjAqAEIANADIATAEIAxBuQhFgFhMAcQhDAYhBAwQg8AqgrAyQgqAygLAog");
	this.shape_5.setTransform(0.1,-178.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6699FF").s().p("AAYPOQgBhBAHgYQADgFAFgKQAHgPAPgrIAMgHIAMgTQANgWAEgMIADADIgBCAIhOCWIgBg7gAi3ASQgLgrgCgnQgCgjABgTQADgkAMgkQAhhlByiQQBtiQBAjXQAWhKAOhMQAKg1ADgjIAHAgQADARABAXQACAzgVBUQgUBQgmBeQglBdgvBYQgvBbgxBBQhUBxgYCOQgMBDAFAvQgEgOgFgXg");
	this.shape_6.setTransform(-26.3,-251.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CCFF").s().p("ABARrQANgaAHgxQAPhggbhyQgchyhVhmQgsg1gmgcQgKgPgMgaQgZgygJgvQAFAOAsAqQAhAgAQAMQA2AsAqAvQAZAdASAYQAnAzAZBUQAUBDADAxQACAwgLAoIgQAwIgZBDQgDALgNAWIgNAUgACNshQgdg8gogxQgrg5gsgcQgzghgvAGIAiiCIAMgFIAJgEQAcgEAjAqQAkAmAkBIQAlBGAbBRQAcBXAMBPIgFABQgGgwgdg6g");
	this.shape_7.setTransform(-25.8,-287.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-150.6,21.5,300.4);


(lib.cracker_ribbon1_inner_y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AA4MjQgXiEhQh1QAIgkAZgyQAUgrAVgcQBjCAAmDMQAgCugTCxQgGAZgZAhQgfAngtAiQAHkbgVh9gAg+E7QgPglgJgTQgjhIgqAuQAFgaAfgUQAagRAQAAQAtAAAbAcQAcAggKA5QgFAagTASQgPAMgHAAQgIAAgNgcgAArB2QAHhKAAhMQAAlahblPQgyi3hcjwIA7grQAtghABACQBvFBA9EzQAzD/AACbQAAC+gcCFQgGAOgvA4QgtA3gNAKQAag0ALh0g");
	this.shape.setTransform(-5.4,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AAiG6QAbiFADgpQAugiAegmQAagiAFgZQgRCfgvDWQgXBsgUBLIhsBiQAvjEAfiZgAh+oDQgzhvAIhSQArgtAjBIQAJASAPAlQAMAcAJAAQAGAAAPgMQAWgRADgbIABgBQAMgKAtg2QAvg4AGgOQgqDFg/AKIAHAUQAEAMAEAGQgVAcgTArQgaAzgHAjQgrg9gfhDg");
	this.shape_1.setTransform(-4.9,97.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF33").s().p("Ag7H/Qg+hbg8ggQgygEgsARQASghBGgTQA0gOAnAAQAoAAA4AxQA3AwBEAAQAWAAAggYQAegXAUggQAFAggIAdQgEATgHALQgXA7gzAoQgwAlgrAAQg8AAgvhFgAhYlSQhOhLh5iTIAEgTQBxA9CFB0QAmAjAeANQAoAQA9AAQA4AAAdgLQAmgQAhgvQgHAmgdA5QgdA2gSAQQgVAahQAAQhHAAh5h1g");
	this.shape_2.setTransform(2.2,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("AAHTZQAAglgogdQg7gjgigXQiHhcAAi9QAAgzAjgUQAsgRAyAEQgOAMgCAFQgDAHAAAYQAAA1AoAuQAYAcA/AvQA8AxAYAaQAoAuAAA0IgPAgQgcArhAA7QAOgVAAgTgAEGMoQAHgLAEgSQAIgegFgfQgHi6hwheQhGg6iqg0Qivg2g9gvQhrhSAAilQAAhRA9hDQAxg3AeAAQAOAAAOAOQANAOAGAAQgcAKgZAdQggAkAAAsQABCVBoBRQA+AxCnA2QCmA3BAAyQBoBSABCZQgBARgQAjQgfBGghBbgAEtAtQAdg2AHgmQAHgPABgMQACgSAAhIQAAm9iXkgQiGkCjjhaQAOgcA5gHQA3AABJAwQBgA7BPBvQDaE0AAI+QAACAgtBAQggAuhgA6QASgQAdg3g");
	this.shape_3.setTransform(-2.7,-20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("Ag5M3IgKgWQAAgjAbgjQAQgSAqglQArgkAPgVQAbghAAglQABgRgCgEQgCgFgJgGQAigFAeAIQAYAMAAAkQAACDhdBGQgWASgpAaQgaAYgBAZQABANAIANQgrglgTgcgAjeHVQgLgYAAgMQAAhqBHg9QArgmByguQBxgvAqglQBHg9AAhmQAAgfgVgXQgRgTgTgGQAEAAAIgKQAKgKAJgBQAVgCAhAjQApAsABA5QAABxhJA+QgqAjh3AvQhyAsgwAsQhMBHgGCBQgCAVAEAVQADAMAFAHIgBACQgWg9gWgvgAkCAeQgggoAAhZQAAmNCVjhQA1hQBCguQAxglAmgDQAnADAJASQiaBKhbC5QhnDOAAE1QAAAxACANQAAAIAEAKQAFAYAVAlQATAkANAMQhCgjgVggg");
	this.shape_4.setTransform(6.9,-96.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF33").s().p("AhdGFQgjgZgQgoQgEgIgDgMQgFgUACgWQAOAVAVAPQAVAPAQgBQAugEAkgkQAngmAbgCQAbgCAjAIQAwAKAMAVQgegJgiAFQgpAZgqBDQghAygnADIgFAAQgbAAgegVgAiKiZQgNgLgTgkQgUgmgFgZQAWAeAbAIQATAIAmgDQAqgDAbgNQAUgLAagaQBahYBNgwIADAOQhSBsg1A3QhSBYgxAEIgTAAQglAAgMgNg");
	this.shape_5.setTransform(3.6,-71.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-117.4,37,294.5);


(lib.cracker_ribbon1_inner_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AAiG6QAbiFADgpQAugiAegmQAagiAFgZQgRCfgvDWQgXBsgUBLIhsBiQAvjEAfiZgAh+oDQgzhvAIhSQArgtAjBIQAJASAPAlQAMAcAJAAQAGAAAPgMQAWgRADgbIABgBQAMgKAtg2QAvg4AGgOQgqDFg/AKIAHAUQAEAMAEAGQgVAcgTArQgaAzgHAjQgrg9gfhDg");
	this.shape.setTransform(-4.9,97.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AA4MjQgXiEhQh1QAIgkAZgyQAUgrAVgcQBjCAAmDMQAgCugTCxQgGAZgZAhQgfAngtAiQAHkbgVh9gAg+E7QgPglgJgTQgjhIgqAuQAFgaAfgUQAagRAQAAQAtAAAbAcQAcAggKA5QgFAagTASQgPAMgHAAQgIAAgNgcgAArB2QAHhKAAhMQAAlahblPQgyi3hcjwIA7grQAtghABACQBvFBA9EzQAzD/AACbQAAC+gcCFQgGAOgvA4QgtA3gNAKQAag0ALh0g");
	this.shape_1.setTransform(-5.4,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("Ag7H/Qg+hbg8ggQgygEgsARQASghBGgTQA0gOAnAAQAoAAA4AxQA3AwBEAAQAWAAAggYQAegXAUggQAFAggIAdQgEATgHALQgXA7gzAoQgwAlgrAAQg8AAgvhFgAhYlSQhOhLh5iTIAEgTQBxA9CFB0QAmAjAeANQAoAQA9AAQA4AAAdgLQAmgQAhgvQgHAmgdA5QgdA2gSAQQgVAahQAAQhHAAh5h1g");
	this.shape_2.setTransform(2.2,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AAHTZQAAglgogdQg7gjgigXQiHhcAAi9QAAgzAjgUQAsgRAyAEQgOAMgCAFQgDAHAAAYQAAA1AoAuQAYAcA/AvQA8AxAYAaQAoAuAAA0IgPAgQgcArhAA7QAOgVAAgTgAEGMoQAHgLAEgSQAIgegFgfQgHi6hwheQhGg6iqg0Qivg2g9gvQhrhSAAilQAAhRA9hDQAxg3AeAAQAOAAAOAOQANAOAGAAQgcAKgZAdQggAkAAAsQABCVBoBRQA+AxCnA2QCmA3BAAyQBoBSABCZQgBARgQAjQgfBGghBbgAEtAtQAdg2AHgmQAHgPABgMQACgSAAhIQAAm9iXkgQiGkCjjhaQAOgcA5gHQA3AABJAwQBgA7BPBvQDaE0AAI+QAACAgtBAQggAuhgA6QASgQAdg3g");
	this.shape_3.setTransform(-2.7,-20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCFF").s().p("Ag5M3IgKgWQAAgjAbgjQAQgSAqglQArgkAPgVQAbghAAglQABgRgCgEQgCgFgJgGQAigFAeAIQAYAMAAAkQAACDhdBGQgWASgpAaQgaAYgBAZQABANAIANQgrglgTgcgAjeHVQgLgYAAgMQAAhqBHg9QArgmByguQBxgvAqglQBHg9AAhmQAAgfgVgXQgRgTgTgGQAEAAAIgKQAKgKAJgBQAVgCAhAjQApAsABA5QAABxhJA+QgqAjh3AvQhyAsgwAsQhMBHgGCBQgCAVAEAVQADAMAFAHIgBACQgWg9gWgvgAkCAeQgggoAAhZQAAmNCVjhQA1hQBCguQAxglAmgDQAnADAJASQiaBKhbC5QhnDOAAE1QAAAxACANQAAAIAEAKQAFAYAVAlQATAkANAMQhCgjgVggg");
	this.shape_4.setTransform(6.9,-96.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AhdGFQgjgZgQgoQgEgIgDgMQgFgUACgWQAOAVAVAPQAVAPAQgBQAugEAkgkQAngmAbgCQAbgCAjAIQAwAKAMAVQgegJgiAFQgpAZgqBDQghAygnADIgFAAQgbAAgegVgAiKiZQgNgLgTgkQgUgmgFgZQAWAeAbAIQATAIAmgDQAqgDAbgNQAUgLAagaQBahYBNgwIADAOQhSBsg1A3QhSBYgxAEIgTAAQglAAgMgNg");
	this.shape_5.setTransform(3.6,-71.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-117.4,37,294.5);


(lib.cracker_ribbon1_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF66FF").s().p("AAiG6QAbiFADgpQAugiAegmQAagiAFgZQgRCfgvDWQgXBsgUBLIhsBiQAvjEAfiZgAh+oDQgzhvAIhSQArgtAjBIQAJASAPAlQAMAcAJAAQAGAAAPgMQAWgRADgbIABgBQAMgKAtg2QAvg4AGgOQgqDFg/AKIAHAUQAEAMAEAGQgVAcgTArQgaAzgHAjQgrg9gfhDg");
	this.shape.setTransform(-4.9,97.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AA4MjQgXiEhQh1QAIgkAZgyQAUgrAVgcQBjCAAmDMQAgCugTCxQgGAZgZAhQgfAngtAiQAHkbgVh9gAg+E7QgPglgJgTQgjhIgqAuQAFgaAfgUQAagRAQAAQAtAAAbAcQAcAggKA5QgFAagTASQgPAMgHAAQgIAAgNgcgAArB2QAHhKAAhMQAAlahblPQgyi3hcjwIA7grQAtghABACQBvFBA9EzQAzD/AACbQAAC+gcCFQgGAOgvA4QgtA3gNAKQAag0ALh0g");
	this.shape_1.setTransform(-5.4,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCFF").s().p("Ag7H/Qg+hbg8ggQgygEgsARQASghBGgTQA0gOAnAAQAoAAA4AxQA3AwBEAAQAWAAAggYQAegXAUggQAFAggIAdQgEATgHALQgXA7gzAoQgwAlgrAAQg8AAgvhFgAhYlSQhOhLh5iTIAEgTQBxA9CFB0QAmAjAeANQAoAQA9AAQA4AAAdgLQAmgQAhgvQgHAmgdA5QgdA2gSAQQgVAahQAAQhHAAh5h1g");
	this.shape_2.setTransform(2.2,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF66FF").s().p("AAHTZQAAglgogdQg7gjgigXQiHhcAAi9QAAgzAjgUQAsgRAyAEQgOAMgCAFQgDAHAAAYQAAA1AoAuQAYAcA/AvQA8AxAYAaQAoAuAAA0IgPAgQgcArhAA7QAOgVAAgTgAEGMoQAHgLAEgSQAIgegFgfQgHi6hwheQhGg6iqg0Qivg2g9gvQhrhSAAilQAAhRA9hDQAxg3AeAAQAOAAAOAOQANAOAGAAQgcAKgZAdQggAkAAAsQABCVBoBRQA+AxCnA2QCmA3BAAyQBoBSABCZQgBARgQAjQgfBGghBbgAEtAtQAdg2AHgmQAHgPABgMQACgSAAhIQAAm9iXkgQiGkCjjhaQAOgcA5gHQA3AABJAwQBgA7BPBvQDaE0AAI+QAACAgtBAQggAuhgA6QASgQAdg3g");
	this.shape_3.setTransform(-2.7,-20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF66FF").s().p("Ag5M3IgKgWQAAgjAbgjQAQgSAqglQArgkAPgVQAbghAAglQABgRgCgEQgCgFgJgGQAigFAeAIQAYAMAAAkQAACDhdBGQgWASgpAaQgaAYgBAZQABANAIANQgrglgTgcgAjeHVQgLgYAAgMQAAhqBHg9QArgmByguQBxgvAqglQBHg9AAhmQAAgfgVgXQgRgTgTgGQAEAAAIgKQAKgKAJgBQAVgCAhAjQApAsABA5QAABxhJA+QgqAjh3AvQhyAsgwAsQhMBHgGCBQgCAVAEAVQADAMAFAHIgBACQgWg9gWgvgAkCAeQgggoAAhZQAAmNCVjhQA1hQBCguQAxglAmgDQAnADAJASQiaBKhbC5QhnDOAAE1QAAAxACANQAAAIAEAKQAFAYAVAlQATAkANAMQhCgjgVggg");
	this.shape_4.setTransform(6.9,-96.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCFF").s().p("AhdGFQgjgZgQgoQgEgIgDgMQgFgUACgWQAOAVAVAPQAVAPAQgBQAugEAkgkQAngmAbgCQAbgCAjAIQAwAKAMAVQgegJgiAFQgpAZgqBDQghAygnADIgFAAQgbAAgegVgAiKiZQgNgLgTgkQgUgmgFgZQAWAeAbAIQATAIAmgDQAqgDAbgNQAUgLAagaQBahYBNgwIADAOQhSBsg1A3QhSBYgxAEIgTAAQglAAgMgNg");
	this.shape_5.setTransform(3.6,-71.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-117.4,37,294.5);


(lib.glitter_inner_sphere = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.yellow_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9));

	// レイヤー_1
	this.instance = new lib.star_y("synched",0);
	this.instance.setTransform(20.1,19.2,1,1,0,0,0,20.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({alpha:0.012},4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,38.4);


(lib.light_star_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8));

	// レイヤー_1
	this.instance = new lib.star_l("synched",0);
	this.instance.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({alpha:0.012},3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.green_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9));

	// レイヤー_1
	this.instance = new lib.star_g("synched",0);
	this.instance.setTransform(51.1,48.6,1,1,0,0,0,51.1,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0},0).to({alpha:0.012},3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.3,97.3);


(lib.kira_mc_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(Math.floor(Math.random() * 15));
	}
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38));

	// img
	this.kira_mc = new lib.kira_mc();
	this.kira_mc.setTransform(-0.2,21.1,0.45,0.45,45,0,0,0,15);
	this.kira_mc.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.kira_mc).to({scaleX:0.5,scaleY:0.5,y:20.8,alpha:0.699},2).to({y:20.3,alpha:0.891},6).to({alpha:0.5},1).to({alpha:0.891},1).to({alpha:0.602},1).to({alpha:0.891},1).to({y:20.1},7).to({y:19.6,alpha:0.191},8).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-6.4,55.4,55.4);


(lib.ef_ribbon_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(29));

	// レイヤー 1
	this.instance = new lib.cracker_ribbon1_inner_y();
	this.instance.setTransform(-1.5,54.5,0.525,0.788,0,-47.5,132.4,0,0.3);

	this.instance_1 = new lib.cracker_ribbon1_inner();
	this.instance_1.setTransform(58.2,-21.2,0.292,0.676,0,-9.5,4.2,0.1,0);

	this.instance_2 = new lib.cracker_ribbon2_inner_p();
	this.instance_2.setTransform(34.1,17.3,0.591,0.778,-23.6,0,0,0,0.2);

	this.instance_3 = new lib.cracker_ribbon1_inner_y();
	this.instance_3.setTransform(79.1,-20.5,0.328,0.642,-2.6,0,0,0.5,0);

	this.instance_4 = new lib.cracker_ribbon2_inner();
	this.instance_4.setTransform(16.6,-11.3,0.444,0.956,0,-21.3,-11.1,0,0.1);

	this.instance_5 = new lib.cracker_ribbon1_inner_b();
	this.instance_5.setTransform(48.7,17.1,0.463,0.463,0,-26.5,153.4,0.1,0.1);

	this.instance_6 = new lib.cracker_ribbon2_inner_wp();
	this.instance_6.setTransform(25.5,45.3,0.67,0.784,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ef_ribbon_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(29));

	// レイヤー 1
	this.instance = new lib.cracker_ribbon2_inner();
	this.instance.setTransform(-2.5,91.8,0.524,0.524,0,56.3,-123.6,0.1,0.1);

	this.instance_1 = new lib.cracker_ribbon2_inner_wp();
	this.instance_1.setTransform(-73.9,-20.4,1.401,0.833,0,4.5,121.1,0,0.2);

	this.instance_2 = new lib.cracker_ribbon2_inner_p();
	this.instance_2.setTransform(-69,-0.6,0.724,0.892,0,11.5,24.6,0.1,0.1);

	this.instance_3 = new lib.cracker_ribbon1_inner();
	this.instance_3.setTransform(32,27.5,0.391,0.767,43.4,0,0,0.5,0.4);

	this.instance_4 = new lib.cracker_ribbon2_inner();
	this.instance_4.setTransform(-5.4,14.6,1.401,0.876,0,34,97.4,-0.1,0.3);

	this.instance_5 = new lib.cracker_ribbon1_inner_y();
	this.instance_5.setTransform(-11.6,1.5,0.553,0.877,0,29.5,-150.4);

	this.instance_6 = new lib.cracker_ribbon1_inner_b();
	this.instance_6.setTransform(-30.6,-11.9,0.653,0.851,0,19.6,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.box_light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_8
	this.instance = new lib.line_light_1("synched",0);
	this.instance.setTransform(369.2,504.7,1,1,32.1,0,0,251.2,597.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:251.3,rotation:36,y:504.8},22).to({regX:251.2,rotation:32.1,y:504.7},24).wait(1));

	// レイヤー_7
	this.instance_1 = new lib.line_light_1("synched",0);
	this.instance_1.setTransform(407.1,460.5,1,1,-1.6,0,0,251.1,597.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:251.2,regY:597.5,rotation:-3.8,y:460.4},22).to({regX:251.1,regY:597.6,rotation:-1.5,y:460.5},24).wait(1));

	// レイヤー_6
	this.instance_2 = new lib.line_light_1("synched",0);
	this.instance_2.setTransform(362.1,492.5,1,1,42.2,0,0,251.1,597.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:47.7,x:362,y:492.6},22).to({rotation:42.2,x:362.1,y:492.5},24).wait(1));

	// レイヤー_5
	this.instance_3 = new lib.line_light_1("synched",0);
	this.instance_3.setTransform(376.1,483.4,1,1,19.8,0,0,251.1,597.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:23.7,y:483.5},22).to({rotation:19.8,y:483.4},24).wait(1));

	// レイヤー_4
	this.instance_4 = new lib.line_light_1("synched",0);
	this.instance_4.setTransform(389.2,475.7,1,1,-3.8,0,0,251.1,597.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:251,regY:597.5,rotation:-14,x:409.1,y:475.6},22).to({regX:251.1,regY:597.6,rotation:-3.7,x:389.2,y:475.7},24).wait(1));

	// レイヤー_3
	this.instance_5 = new lib.box_l_gra("synched",0);
	this.instance_5.setTransform(375,374.9,1,1,-14.9,0,0,375,374.9);
	this.instance_5.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:375,rotation:-23.5,x:375.1,y:375},22).to({regY:374.9,rotation:-14.8,x:375,y:374.9},24).wait(1));

	// レイヤー_2
	this.instance_6 = new lib.box_l_gra("synched",0);
	this.instance_6.setTransform(375,375.1,1,1,11,0,0,375,375);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:16.7},22).to({rotation:11},24).wait(1));

	// レイヤー_1
	this.instance_7 = new lib.box_l_gra("synched",0);
	this.instance_7.setTransform(375,375,1,1,0,0,0,375,375);
	this.instance_7.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:374.9,scaleY:1.18,y:374.9},22).to({regY:375,scaleY:1,y:375},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-38.3,892.2,820.3);


(lib.箱 = function() {
	this.initialize();

	// レイヤー_1
	this.instance = new lib.プレゼントボックス上();
	this.instance.setTransform(0,-62.9);

	this.instance_1 = new lib.プレゼントボックス下();
	this.instance_1.setTransform(3,-51.8,1,1,0,0,0,0,-51.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.9,-151.9,166,151);


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
	this.instance.setTransform(-3.4,103.7,1.092,1.092,-173.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_1 = new lib.particle_flash2("synched",0,false);
	this.instance_1.setTransform(18.6,79.1,0.673,0.673,0,-143.2,36.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_2 = new lib.particle_flash2("synched",0,false);
	this.instance_2.setTransform(11.7,81.4,0.957,0.673,0,-164.9,40.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_3 = new lib.particle_flash1("synched",0,false);
	this.instance_3.setTransform(-32.3,61.7,1.087,0.647,0,-124.1,76.2,-59.7,-3.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_4 = new lib.particle_flash1("synched",0,false);
	this.instance_4.setTransform(-13.9,83.3,0.767,0.854,0,102.1,76.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_5 = new lib.particle_flash1("synched",0,false);
	this.instance_5.setTransform(31.8,75.7,0.767,0.767,154.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_6 = new lib.particle_flash2("synched",0,false);
	this.instance_6.setTransform(14,98.6,0.852,0.684,0,-151.5,57.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_7 = new lib.particle_flash1("synched",0,false);
	this.instance_7.setTransform(47.1,68.7,1.424,1.347,0,-118,42.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_8 = new lib.particle_flash1("synched",0,false);
	this.instance_8.setTransform(-4,79.1,0.673,1.135,-178.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_9 = new lib.particle_flash2("synched",0,false);
	this.instance_9.setTransform(3.8,86.3,1.272,1.272,95.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_10 = new lib.particle_flash1("synched",0,false);
	this.instance_10.setTransform(18.6,79.1,0.754,0.673,0,155.1,-24.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_11 = new lib.particle_flash2("synched",0,false);
	this.instance_11.setTransform(4.1,74.4,0.673,0.673,134.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_12 = new lib.particle_flash2("synched",0,false);
	this.instance_12.setTransform(-50,37.4,1.092,1.092,-88.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_13 = new lib.particle_flash2("synched",0,false);
	this.instance_13.setTransform(-47,60.4,0.673,0.673,0,-53.2,126.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_14 = new lib.particle_flash2("synched",0,false);
	this.instance_14.setTransform(-14.4,65.5,0.957,0.673,0,-104.9,100.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_15 = new lib.particle_flash1("synched",0,false);
	this.instance_15.setTransform(0.1,22,1.087,0.647,0,-69.3,131,-59.6,-3.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_16 = new lib.particle_flash1("synched",0,false);
	this.instance_16.setTransform(-34.3,29.9,0.767,0.854,0,-58.4,-84.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_17 = new lib.particle_flash1("synched",0,false);
	this.instance_17.setTransform(-41.9,73.2,0.767,0.767,-115.3);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_18 = new lib.particle_flash2("synched",0,false);
	this.instance_18.setTransform(-36.8,68.1,0.852,0.684,0,-103.5,105.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_19 = new lib.particle_flash1("synched",0,false);
	this.instance_19.setTransform(-29.2,85.9,1.424,1.347,0,-28,132.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_20 = new lib.particle_flash1("synched",0,false);
	this.instance_20.setTransform(-17.3,50,0.673,0.673,-118.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_21 = new lib.particle_flash2("synched",0,false);
	this.instance_21.setTransform(-39.4,43.3,1.272,1.272,-135.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_22 = new lib.particle_flash1("synched",0,false);
	this.instance_22.setTransform(-17.3,72.7,0.754,0.673,0,-71.9,108);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_23 = new lib.particle_flash2("synched",0,false);
	this.instance_23.setTransform(-12.6,58.2,0.867,1.704,0,-99.9,-139);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_24 = new lib.particle_flash2("synched",0,false);
	this.instance_24.setTransform(9.6,7.4,1.092,1.092,-6.4);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_25 = new lib.particle_flash2("synched",0,false);
	this.instance_25.setTransform(9.6,7.4,0.673,0.673,0,36.7,-143.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_26 = new lib.particle_flash2("synched",0,false);
	this.instance_26.setTransform(-5.4,29.7,0.957,0.673,0,15,-139.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_27 = new lib.particle_flash1("synched",0,false);
	this.instance_27.setTransform(38.5,49.5,1.087,0.647,0,20.6,-138.9,-59.8,-3.8);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_28 = new lib.particle_flash1("synched",0,false);
	this.instance_28.setTransform(7.2,12.7,0.767,0.854,0,-19.3,-45.4);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_29 = new lib.particle_flash1("synched",0,false);
	this.instance_29.setTransform(14,17.2,0.767,0.767,19.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_30 = new lib.particle_flash2("synched",0,false);
	this.instance_30.setTransform(-7.8,12.6,0.852,0.684,0,-7.3,-157.7);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_31 = new lib.particle_flash1("synched",0,false);
	this.instance_31.setTransform(-16.4,22.3,1.424,1.347,0,-5.2,155.4);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_32 = new lib.particle_flash1("synched",0,false);
	this.instance_32.setTransform(10.3,32.1,0.673,0.673,-28.4);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_33 = new lib.particle_flash2("synched",0,false);
	this.instance_33.setTransform(11.4,24.8,1.272,1.272,-45.4);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_34 = new lib.particle_flash1("synched",0,false);
	this.instance_34.setTransform(-12.3,32.1,0.754,0.673,0,18,-161.9);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_35 = new lib.particle_flash2("synched",0,false);
	this.instance_35.setTransform(2.1,36.8,0.673,0.673,-45.4);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_36 = new lib.particle_flash2("synched",0,false);
	this.instance_36.setTransform(64.9,68.1,1.092,1.092,61.5);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_37 = new lib.particle_flash2("synched",0,false);
	this.instance_37.setTransform(12.1,55.7,0.673,0.673,0,126.7,-53.2);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_38 = new lib.particle_flash2("synched",0,false);
	this.instance_38.setTransform(19.7,46.1,0.957,0.673,0,105,-49.2);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_39 = new lib.particle_flash1("synched",0,false);
	this.instance_39.setTransform(18.2,94.4,1.087,0.647,0,110.6,-48.9,-59.6,-3.5);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_40 = new lib.particle_flash1("synched",0,false);
	this.instance_40.setTransform(31.8,45.2,0.767,0.854,0,70.6,44.5);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_41 = new lib.particle_flash1("synched",0,false);
	this.instance_41.setTransform(49.6,55.3,0.767,0.767,64.6);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_42 = new lib.particle_flash2("synched",0,false);
	this.instance_42.setTransform(36.9,43.7,0.852,0.684,0,73.4,-77);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_43 = new lib.particle_flash1("synched",0,false);
	this.instance_43.setTransform(36.9,32.4,1.424,1.347,0,151.9,-47.2);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_44 = new lib.particle_flash1("synched",0,false);
	this.instance_44.setTransform(18.6,79.1,0.673,0.673,61.5);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_45 = new lib.particle_flash2("synched",0,false);
	this.instance_45.setTransform(28,62.9,1.272,1.272,23.5);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash1
	this.instance_46 = new lib.particle_flash1("synched",0,false);
	this.instance_46.setTransform(17.3,39.1,0.754,0.673,0,108,-71.9);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1).to({startPosition:0,_off:false},0).wait(38));

	// particle_flash2
	this.instance_47 = new lib.particle_flash2("synched",0,false);
	this.instance_47.setTransform(12.6,53.6,0.673,0.673,44.5);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1).to({startPosition:0,_off:false},0).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.glitter_inner = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.setTransform(0,0.1,1.5,0.086,-44.9);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.setTransform(0,0,0.334,0.334);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.setTransform(0,0,1.5,0.086,45);

	this.instance_3 = new lib.glitter_inner_sphere();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter = function() {
	this.initialize();

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.heart_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9));

	// レイヤー 1
	this.instance = new lib.heart("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,25,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({alpha:0.012},4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-21.4,50,42.9);


(lib.kira_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29));

	// レイヤー_9
	this.instance_1 = new lib.kira_mc_mov();
	this.instance_1.setTransform(-100.2,-2.8,0.87,0.87,0,0,0,0,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-22.7},28).to({_off:true},1).wait(1));

	// レイヤー_8
	this.instance_2 = new lib.kira_mc_mov();
	this.instance_2.setTransform(-199.2,47.1,0.87,0.87,0,0,0,0,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-219.1,y:27.1},28).to({_off:true},1).wait(1));

	// レイヤー_6
	this.instance_3 = new lib.kira_mc_mov();
	this.instance_3.setTransform(-50.2,-37.7,0.87,0.87,0,0,0,0,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-46.1,y:-49.6},28).to({_off:true},1).wait(1));

	// レイヤー_5
	this.instance_4 = new lib.kira_mc_mov();
	this.instance_4.setTransform(-25.3,105.2,0.472,0.472,0,0,0,0,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-15.2,y:95.2},28).to({_off:true},1).wait(1));

	// レイヤー_4
	this.instance_5 = new lib.kira_mc_mov();
	this.instance_5.setTransform(-229.2,68.1,0.87,0.87,0,0,0,0,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-259.1,y:53.1},28).to({_off:true},1).wait(1));

	// レイヤー_3
	this.instance_6 = new lib.kira_mc_mov();
	this.instance_6.setTransform(-189.2,-77.9,0.581,0.581,0,0,0,0,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-191.1,y:-99.8},28).to({_off:true},1).wait(1));

	// レイヤー_2
	this.instance_7 = new lib.kira_mc_mov();
	this.instance_7.setTransform(-229.2,-32.8,0.87,0.87,0,0,0,0,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-259.1,y:-72.7},28).to({_off:true},1).wait(1));

	// レイヤー_1
	this.instance_8 = new lib.kira_mc_mov();
	this.instance_8.setTransform(24.3,24.1,0.87,0.87,0,0,0,0,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:56.3,y:-8.8},28).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.5,-94,301.8,212.4);


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

	this.timeline.addTween(cjs.Tween.get(this.lux).to({_off:true},1).wait(19).to({alpha:0,_off:false},0).to({scaleX:0.73,scaleY:0.73,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.49)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.spread_star_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(8));

	// レイヤー_15
	this.instance = new lib.light_star_1();
	this.instance.setTransform(79.8,-2,0.56,0.56,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regY:30.1,scaleX:0.37,scaleY:0.37,rotation:77.4,x:47.3,y:-156.1},0).wait(1).to({regX:29.9,regY:30.2,scaleX:0.32,scaleY:0.32,rotation:96.8,x:59.3,y:-195.6},0).wait(1).to({regY:30.3,scaleX:0.29,scaleY:0.29,rotation:107.5,x:70.3,y:-215.5},0).wait(1).to({regY:30.4,scaleX:0.28,scaleY:0.28,rotation:113.8,x:78.1,y:-226.6},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:117.6,x:83,y:-232.8},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:119.3,x:85.6,y:-235.9},0).wait(1).to({regY:30,scaleX:0.26,scaleY:0.26,rotation:120,x:87.8,y:-236.4},0).wait(1));

	// レイヤー_13
	this.instance_1 = new lib.green_star();
	this.instance_1.setTransform(104.6,10.5,0.285,0.285,-29.9,0,0,51,48.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:50.9,regY:48.9,scaleX:0.23,scaleY:0.23,rotation:47.9,x:110.6,y:-117.3},0).wait(1).to({regY:48.6,scaleX:0.22,scaleY:0.22,rotation:67.4,x:129.7,y:-144.4},0).wait(1).to({regX:50.7,regY:48.8,scaleX:0.21,scaleY:0.21,rotation:78,x:143.7,y:-155.9},0).wait(1).to({regX:50.8,regY:48.9,scaleX:0.21,scaleY:0.21,rotation:84.2,x:153,y:-161.3},0).wait(1).to({regY:49.1,scaleX:0.21,scaleY:0.21,rotation:87.7,x:158.6,y:-164.1},0).wait(1).to({regX:50.6,regY:49.3,scaleX:0.21,scaleY:0.21,rotation:89.5,x:161.5,y:-165.4},0).wait(1).to({regX:50.8,regY:48.4,rotation:90,x:162.3,y:-165.8},0).wait(1));

	// レイヤー_11
	this.instance_2 = new lib.yellow_star();
	this.instance_2.setTransform(10.9,57.2,0.541,0.541,0,0,0,20.1,19.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({regY:19.1,scaleX:0.44,scaleY:0.44,rotation:-38.7,x:-87,y:39},0).wait(1).to({regY:19.2,scaleX:0.41,scaleY:0.41,rotation:-48.4,x:-110.3,y:54.9},0).wait(1).to({regX:20.3,regY:19.1,scaleX:0.4,scaleY:0.4,rotation:-53.7,x:-121.7,y:65},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-56.9,x:-128.1,y:71.3},0).wait(1).to({regX:20.4,regY:19.3,scaleX:0.38,scaleY:0.38,rotation:-58.7,x:-131.7,y:75.1},0).wait(1).to({regY:19.2,scaleX:0.38,scaleY:0.38,rotation:-59.7,x:-133.5,y:77},0).wait(1).to({regX:19.9,regY:19.1,rotation:-59.8,x:-135,y:76.8},0).wait(1));

	// レイヤー_9
	this.instance_3 = new lib.heart_1();
	this.instance_3.setTransform(73.1,24.9,0.555,0.555,-59.9,0,0,0.1,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-89,x:-67.6,y:-6.1},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:-96.3,x:-99.8,y:15.9},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-100.1,x:-113.8,y:32.1},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-102.4,x:-120.9,y:42.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-103.8,x:-124.6,y:48.8},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:-104.6,x:-126.4,y:52},0).wait(1).to({regY:-0.1,scaleX:0.38,scaleY:0.38,rotation:-104.8,x:-127.1,y:54.9},0).wait(1));

	// レイヤー 4
	this.instance_4 = new lib.heart_1();
	this.instance_4.setTransform(99.2,-22.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:29.1,x:111.8,y:-183.8},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:36.4,x:141.8,y:-214.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:40.4,x:161.2,y:-228.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:42.6,x:173.4,y:-235.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:44.1,x:180.6,y:-238.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:44.9,x:184.3,y:-240.5},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:45,x:185.3,y:-240.9},0).wait(1));

	// レイヤー 3
	this.instance_5 = new lib.light_star_1();
	this.instance_5.setTransform(37,37,1,1,0,0,0,30,30);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(1).to({regX:29.9,scaleX:0.72,scaleY:0.72,rotation:-38.7,x:-98.3,y:-37.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-48.4,x:-137.5,y:-25.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-53.7,x:-155.8,y:-11.5},0).wait(1).to({regY:29.9,scaleX:0.58,scaleY:0.58,rotation:-56.9,x:-165.2,y:-2},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:-58.7,x:-170.3,y:3.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-59.7,x:-172.8,y:6.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-59.8,x:-174.4,y:6.9},0).wait(1));

	// レイヤー 2
	this.instance_6 = new lib.yellow_star();
	this.instance_6.setTransform(65,-14.3,1,1,0,0,0,20.1,19.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).wait(1).to({regY:19.1,scaleX:0.69,scaleY:0.69,rotation:58.4,x:22.2,y:-171.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:73,x:36.2,y:-212},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:81,x:48.2,y:-232},0).wait(1).to({regX:20,scaleX:0.55,scaleY:0.55,rotation:85.7,x:56.5,y:-243.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:88.5,x:61.6,y:-249.3},0).wait(1).to({regX:20.1,scaleX:0.53,scaleY:0.53,rotation:89.7,x:64.2,y:-252.2},0).wait(1).to({regY:19.2,scaleX:0.53,scaleY:0.53,rotation:90,x:65,y:-253.1},0).wait(1));

	// レイヤー 1
	this.instance_7 = new lib.green_star();
	this.instance_7.setTransform(21.1,11.8,0.581,0.581,-29.9,0,0,50.9,48.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({regX:51,scaleX:0.44,scaleY:0.44,rotation:-88.3,x:-104.1,y:5.1,alpha:0.93},0).wait(1).to({regY:48.8,scaleX:0.41,scaleY:0.41,rotation:-102.8,x:-132.9,y:19.6,alpha:0.91},0).wait(1).to({regY:48.7,scaleX:0.39,scaleY:0.39,rotation:-110.6,x:-146.5,y:31,alpha:0.898},0).wait(1).to({regY:48.8,scaleX:0.38,scaleY:0.38,rotation:-115.3,x:-153.6,y:38.6,alpha:0.891},0).wait(1).to({regX:51.1,scaleX:0.37,scaleY:0.37,rotation:-117.9,x:-157.5,y:43.2},0).wait(1).to({regX:50.9,scaleX:0.37,scaleY:0.37,rotation:-119.4,x:-159.4,y:45.8},0).wait(1).to({x:-160.4,y:47.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.glitter_wrapper = function() {
	this.initialize();

	// cjs
	this.instance = new lib.glitter_container_cjs();
	this.instance.setTransform(-398.9,-233.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-455,-290,112.2,112.3);


(lib.item = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kirakira
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(249,162.6,0.348,0.348);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(142.7,86.1,0.348,0.348);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(254.2,97.2,0.348,0.348);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(155.2,66.9,0.252,0.252);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(205.2,174.5,0.241,0.241);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(102.1,157.4,0.23,0.23);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(181.8,199.6,0.348,0.348);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(134,154.8,0.348,0.348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(20));

	// item
	this.item = new lib.first_item();
	this.item.setTransform(60,60,1,1,0,0,0,60,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-19.9,164.5,160);


(lib.item_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.last_item = new lib.item();
	this.last_item.setTransform(60.1,60.1,1,1,0,0,0,60.1,60.1);

	this.timeline.addTween(cjs.Tween.get(this.last_item).wait(1).to({y:59.9},0).wait(1).to({y:59.2},0).wait(1).to({y:57.9},0).wait(1).to({y:56},0).wait(1).to({y:53.9},0).wait(1).to({y:52.2},0).wait(1).to({y:51},0).wait(1).to({y:50.3},0).wait(1).to({y:50.1},0).wait(1).to({y:50.3},0).wait(1).to({y:50.7},0).wait(1).to({y:51.6},0).wait(1).to({y:52.9},0).wait(1).to({y:54.7},0).wait(1).to({y:56.6},0).wait(1).to({y:58.2},0).wait(1).to({y:59.3},0).wait(1).to({y:59.9},0).wait(1).to({y:60.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-19.9,164.5,160);


(lib.cjs_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.num = 0;
		
		this.run = function(num){
			this.num = num;
			
			this.gotoAndPlay("start");
			
		}
	}
	this.frame_22 = function() {
		if(this.num == null || false){
			this.num = 0;
		}
		
		this.item.gotoAndStop(this.num);
	}
	this.frame_24 = function() {
		this.light_star_mc.gotoAndPlay('start');
		this.obi1.gotoAndPlay('start');
		this.obi2.gotoAndPlay('start');
	}
	this.frame_32 = function() {
		this.particle.gotoAndPlay("run");
	}
	this.frame_33 = function() {
		this.last_item.last_item.item.gotoAndStop(this.num);
	}
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(2).call(this.frame_24).wait(8).call(this.frame_32).wait(1).call(this.frame_33).wait(44).call(this.frame_77));

	// box_top
	this.instance = new lib.プレゼントボックス上();
	this.instance.setTransform(454.9,216,1,1.961,-26.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({rotation:-68.5,x:476.7,y:99.9},0).wait(1).to({rotation:-56.8,x:432,y:118.9},0).wait(1).to({x:428,y:121.9},0).to({rotation:-156.2,x:328.6,y:322.8,alpha:0.012},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(47));

	// box_main
	this.instance_1 = new lib.箱();
	this.instance_1.setTransform(427.5,153.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleY:1.2,y:378.3},3,cjs.Ease.get(-0.93)).to({scaleX:1.04,scaleY:0.9,y:423},1).to({scaleX:0.98,scaleY:1.03,y:421},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(2).to({regY:0.1,rotation:-6,y:421.1},0).wait(1).to({regX:0.1,rotation:9.4,x:427.7},0).wait(1).to({regX:0,regY:0.3,rotation:-5.5,x:427.6,y:421.3},0).wait(1).to({regX:0.1,regY:0.2,rotation:4.3,y:421.2},0).wait(1).to({regY:0.1,rotation:-0.5,x:427.7,y:421.1},0).to({regX:0,regY:0,scaleY:0.96,rotation:0,x:427.5,y:421},5).to({scaleY:1.19},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(54));

	// star_motion
	this.light_star_mc = new lib.spread_star_inner();
	this.light_star_mc.setTransform(382.2,266.4,1,1,36.2);
	this.light_star_mc.alpha = 0.891;

	this.timeline.addTween(cjs.Tween.get(this.light_star_mc).to({_off:true},77).wait(1));

	// obi
	this.obi2 = new lib.ef_ribbon_a();
	this.obi2.setTransform(515,172);

	this.timeline.addTween(cjs.Tween.get(this.obi2).to({_off:true},77).wait(1));

	// obi
	this.obi1 = new lib.ef_ribbon_b();
	this.obi1.setTransform(309,148.3);

	this.timeline.addTween(cjs.Tween.get(this.obi1).to({_off:true},77).wait(1));

	// particle
	this.particle = new lib.particle_flash_container();
	this.particle.setTransform(399.1,195.7,0.68,0.68,0,0,0,-38.4,-8);

	this.timeline.addTween(cjs.Tween.get(this.particle).to({_off:true},77).wait(1));

	// item_MC
	this.last_item = new lib.item_mc();
	this.last_item.setTransform(760.7,439.6,1,1,0,0,0,60,60);
	this.last_item.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.last_item).wait(33).to({x:427.4,y:240,alpha:1},0).wait(38).to({alpha:0.012},5).to({_off:true},1).wait(1));

	// item
	this.item = new lib.first_item();
	this.item.setTransform(693.2,273,0.583,0.583,0,0,0,60,60);
	this.item.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.item).wait(24).to({x:431.5,y:270.1,alpha:1},0).to({regY:60.1,scaleX:1,scaleY:1,rotation:-21.8,x:417.5,y:110},2,cjs.Ease.get(1)).to({regX:60.1,rotation:0,x:427.5,y:240.1},6,cjs.Ease.get(-0.99)).to({_off:true},1).wait(45));

	// kirakira
	this.instance_2 = new lib.kira_mc_1();
	this.instance_2.setTransform(566.9,157.9,1,1,0,0,0,24.1,24.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true},53).wait(1));

	// box_light_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("ArWSpMgfTgouMBVTAAAMghNAnfIoJErg");
	var mask_graphics_25 = new cjs.Graphics().p("Ar9TKMgesgpOMBVTAAAMggyAoGIoXEEg");
	var mask_graphics_26 = new cjs.Graphics().p("AskTrMgeFgpvMBVTAAAMggWAouIomDbg");
	var mask_graphics_27 = new cjs.Graphics().p("AsDTpMgemgp2MBVTAAAMgg1Ao2IoRDlg");
	var mask_graphics_28 = new cjs.Graphics().p("ArhTnMgfIgp8MBVTAAAMghUAo/In8Dsg");
	var mask_graphics_29 = new cjs.Graphics().p("ArATlMgfpgqCMBVTAAAMghyApGInpD2g");
	var mask_graphics_30 = new cjs.Graphics().p("ArGTXMgfjgpgMBVTAAAMghpAoiInuDxg");
	var mask_graphics_31 = new cjs.Graphics().p("ArMTIMgfdgo9MBVTAAAMghgAn+In0Dtg");
	var mask_graphics_32 = new cjs.Graphics().p("ArSS5MgfXgoZMBVTAAAMghXAnZIn5Dog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:436.6,y:172.7}).wait(1).to({graphics:mask_graphics_25,x:436.6,y:193.7}).wait(1).to({graphics:mask_graphics_26,x:436.6,y:214.7}).wait(1).to({graphics:mask_graphics_27,x:436.6,y:212.5}).wait(1).to({graphics:mask_graphics_28,x:436.6,y:210.3}).wait(1).to({graphics:mask_graphics_29,x:436.6,y:208.2}).wait(1).to({graphics:mask_graphics_30,x:436.6,y:210.6}).wait(1).to({graphics:mask_graphics_31,x:436.6,y:213.1}).wait(1).to({graphics:mask_graphics_32,x:436.6,y:215.6}).wait(46));

	// box_light
	this.instance_3 = new lib.box_light_mc();
	this.instance_3.setTransform(423.5,372,1,1,0,0,0,375,375);
	this.instance_3.alpha = 0.602;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(47).to({alpha:0.012},5).to({_off:true},1).wait(1));

	// boc_under
	this.instance_4 = new lib.プレゼントボックス下();
	this.instance_4.setTransform(430.5,401.5,1,1.296);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({scaleX:1.09,scaleY:0.95,y:421},2,cjs.Ease.get(-0.99)).to({scaleX:0.97,scaleY:1.03},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(39).to({alpha:0.012},5).to({_off:true},1).wait(1));

	// shadow
	this.instance_5 = new lib.箱の影();
	this.instance_5.setTransform(429.5,399.4,0.787,0.787,0,0,0,0,0.5);
	this.instance_5.alpha = 0.078;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,y:399.5,alpha:0.281},3,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,x:429.3,y:401.4,alpha:0.441},1).to({y:399.4},2,cjs.Ease.get(1)).wait(17).to({scaleX:0.92,scaleY:0.92,alpha:0.199},0).to({scaleX:1.09,scaleY:1.09,x:429.7,y:398.6,alpha:0.441},2).to({scaleX:1,scaleY:1,x:429.3,y:399.4},3,cjs.Ease.get(1)).wait(42).to({alpha:0.012},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(646.6,226.4,194.1,293.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
