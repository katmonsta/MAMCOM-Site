(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgMAQAAQAPAAAIALQAHAJAAAQIAAAGIgsAAQABAWANgBQAMABAEgMIAOAGQgJATgVAAQgQAAgIgMgAAPgGQAAgTgPAAQgMAAgCATIAdAAIAAAAg");
	this.shape.setTransform(80,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAlIAAhHIAPAAIAAAOQAFgJAEgDQAFgEAKAAIAAARQgJAAgGADQgFAEgDAJIAAAog");
	this.shape_1.setTransform(74.1,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbANIAAgxIAQAAIAAAvQAAANAJAAQAFAAAJgIIAAg0IAQAAIAABHIgPAAIAAgIQgNAKgIAAQgTAAAAgYg");
	this.shape_2.setTransform(67.4,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_3.setTransform(61.3,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAcQgHgKAAgQQAAgRAHgKQAIgNAPAAQASABAIAQQADAEAAAEIgQADQgBgGgDgEQgEgEgFAAQgNAAAAAZQAAAZANgBQAFAAAEgDQAEgFABgFIAPAFIgDAIQgJAOgRAAQgPAAgIgLg");
	this.shape_4.setTransform(55.6,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcANIAAgxIARAAIAAAvQAAANAJAAQAFAAAJgIIAAg0IARAAIAABHIgPAAIgBgIQgNAKgIAAQgTAAgBgYg");
	this.shape_5.setTransform(48.2,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAlIAAhHIAPAAIAAAOQAFgJAEgDQAFgEAKAAIAAARQgJAAgGADQgFAEgDAJIAAAog");
	this.shape_6.setTransform(42.2,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_7.setTransform(36.9,20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAbIgDgEIANgIQACAFAFADQAFADAEgBQANABAAgIQgBgEgFgDIgNgGQgJgDgFgEQgFgFgBgKQAAgKAJgFQAHgGAKAAQAQAAAIALIADAFIgNAGQgBgEgFgCQgEgCgEAAQgKgBAAAIQAAAEAGADIAMAGQAKADAEADQAGAGAAAIQAAAXgcAAQgQAAgKgMg");
	this.shape_8.setTransform(31.2,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_9.setTransform(24.3,21.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAlIAAhHIAPAAIAAAOQAFgJAEgDQAFgEAKAAIAAARQgJAAgGADQgFAEgDAJIAAAog");
	this.shape_10.setTransform(18.7,21.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAzIAAg6IgLAAIAAgNIALAAQAAgQADgGQAEgJANABIAMAAIgBANIgHgBQgGAAgCAGIgBAMIAOAAIAAANIgOAAIAAA6g");
	this.shape_11.setTransform(13.7,20.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAIIAAA0IgQAAIAAhHIAOAAIABAIQAMgKAKAAQALAAAEAGQADAGAAALIAAAyg");
	this.shape_12.setTransform(7.6,21.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgHgeIAAgSIAQAAIAAASg");
	this.shape_13.setTransform(2.1,20.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_14.setTransform(79.8,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_15.setTransform(74.1,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_16.setTransform(67.8,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAlQgGgKAAgPQAAgPAFgJQAHgNAOAAQAKAAAIAHIAAgeIARAAIAABgIgQAAIgBgHQgIAIgKABQgOAAgGgNgAgMAMQAAAZANgBQAHABAGgIIAAgkQgHgFgGAAQgNAAAAAYg");
	this.shape_17.setTransform(60.5,6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAlQgGgKAAgPQAAgPAFgJQAHgNAOAAQAKAAAIAHIAAgeIARAAIAABgIgQAAIgBgHQgIAIgKABQgOAAgGgNgAgMAMQAAAZANgBQAHABAGgIIAAgkQgHgFgGAAQgNAAAAAYg");
	this.shape_18.setTransform(49.3,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAHIAAA1IgRAAIAAhIIAPAAIABAIQAMgJAKAAQAKAAAFAHQADAFABALIAAAyg");
	this.shape_19.setTransform(42,7.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_20.setTransform(34.4,7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdAvIAAgzIABgcIgHAaIgPA1IgPAAIgRg6IgFgVIABAcIAAAzIgQAAIAAhdIAbAAIAPA3IADASIAEgSIAPg3IAZAAIAABdg");
	this.shape_21.setTransform(22.1,6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPAvIgQgnIgQAAIAAAnIgQAAIAAhdIAhAAQAOAAAIAGQAJAGAAAOQAAATgRAFIAUArgAgRgFIAOAAQAHAAAEgDQAFgDABgIQAAgIgGgDQgDgCgIAAIgOAAg");
	this.shape_22.setTransform(13,6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkACQAAgVAIgOQALgPATAAQAOAAAKAIQAIAJADAOIgSADQgBgUgQAAQgTgBAAAkQAAAiATAAQAPAAACgUIASACQgCAPgJAIQgJAJgPAAQgmAAAAgvg");
	this.shape_23.setTransform(4.4,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-2,-0.9,91.3,32), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape.setTransform(70.2,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAlIAAhHIAPAAIAAAOQAFgJAEgDQAFgEAKAAIAAARQgJAAgGADQgFAEgDAJIAAAog");
	this.shape_1.setTransform(65.5,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAcQgHgLAAgRQAAgQAHgKQAJgLAPAAQAgAAAAAlQAAAmggAAQgQABgIgLgAgMgPQgCAFAAALQAAAYAOABQAJAAADgJQADgGAAgLQAAgYgPAAQgIAAgEAJg");
	this.shape_2.setTransform(58.8,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAyIAAhhIAOAAIABAHQAJgJAKAAQAOAAAHANQAEAJAAAQQAAAOgEAKQgHANgOAAQgIAAgKgIIAAAggAgNgcIAAAjQAGAGAHAAQANAAAAgYQAAgZgNAAQgHAAgGAIg");
	this.shape_3.setTransform(51.4,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAyIAAhhIAOAAIABAHQAJgJAKAAQAOAAAHANQAEAJAAAQQAAAOgEAKQgHANgOAAQgIAAgKgIIAAAggAgNgcIAAAjQAGAGAHAAQANAAAAgYQAAgZgNAAQgHAAgGAIg");
	this.shape_4.setTransform(43.7,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAMIAAgwIARAAIAAAvQAAANAJAAQAFAAAJgHIAAg1IARAAIAABHIgPAAIgBgIQgNAKgIAAQgUAAAAgZg");
	this.shape_5.setTransform(35.9,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAcIgDgGIANgHQACAFAFADQAFACAEABQANAAAAgHQgBgFgGgEIgMgEQgJgEgFgDQgFgGgBgKQAAgKAJgGQAHgEAKAAQAQAAAIAKIADAEIgNAHQgBgEgFgCQgEgCgEgBQgKABAAAHQAAAEAGAEIAMAEQAKAEAEADQAGAGAAAJQAAAVgcAAQgQABgKgLg");
	this.shape_6.setTransform(29,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAlQgGgKAAgPQAAgPAFgJQAHgNAOAAQAKAAAIAHIAAgeIARAAIAABgIgQAAIgBgHQgIAIgKABQgOAAgGgNgAgMAMQAAAZANgBQAHABAGgIIAAgkQgHgFgGAAQgNAAAAAYg");
	this.shape_7.setTransform(18.3,20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgFAAgJAIIAAA0IgRAAIAAhIIAQAAIAAAIQAMgJAJAAQAMAAAEAGQAEAGgBALIAAAyg");
	this.shape_8.setTransform(11,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_9.setTransform(3.4,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgMAQAAQAPAAAIALQAHAJAAAQIAAAGIgsAAQABAWANgBQAMABAEgMIAOAGQgJATgVAAQgQAAgIgMgAAPgGQAAgTgPAAQgMAAgCATIAdAAIAAAAg");
	this.shape_10.setTransform(68.2,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAcQgHgKAAgQQAAgRAHgKQAIgNAPAAQASABAIAQQADAEAAAEIgQADQgBgGgDgEQgEgEgFAAQgNAAAAAZQAAAZANgBQAFAAAEgDQAEgFABgFIAPAFIgDAIQgJAOgRAAQgPAAgIgLg");
	this.shape_11.setTransform(61.3,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAHIAAA1IgRAAIAAhHIAPAAIABAIQAMgKAKAAQAKAAAFAGQAEAGAAALIAAAyg");
	this.shape_12.setTransform(54,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_13.setTransform(46.4,8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgIgeIAAgSIARAAIAAASg");
	this.shape_14.setTransform(41.4,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_15.setTransform(37.9,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAyIAAhhIAQAAIAAAHQAJgJAKAAQAPAAAFANQAGAJgBAQQABAOgGAKQgGANgOAAQgIAAgKgIIAAAggAgNgcIAAAjQAGAGAHAAQANAAAAgYQAAgZgNAAQgHAAgGAIg");
	this.shape_16.setTransform(32.5,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAgAlIAAguQAAgHgBgCQgCgFgGAAQgIAAgHAJIAAAzIgPAAIAAgvQAAgNgJAAQgHAAgIAJIAAAzIgQAAIAAhHIAPAAIAAAJQAEgFAGgDQAGgDAHAAQALAAAFAMQAKgMANAAQASAAAAAVIAAA0g");
	this.shape_17.setTransform(22.8,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAbQgHgJAAgSQAAgQAHgKQAJgMAPAAQAgAAAAAmQAAAnggAAQgQAAgIgMgAgMgPQgCAGAAAKQAAAZAOgBQAJAAADgIQADgGAAgLQAAgYgPAAQgIAAgEAJg");
	this.shape_18.setTransform(13.2,8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkABQAAgUAIgNQALgQATAAQAOAAAKAJQAIAHADAPIgSADQgBgVgQAAQgTABAAAiQAAAjATAAQAPAAACgUIASACQgCAPgJAIQgJAJgPAAQgmAAAAgwg");
	this.shape_19.setTransform(5.3,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-2,-0.8,83.1,32), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAiQAAgGAEgEIAKgGQgEgBgDgCQgCgDAAgEQAAgIALgCQgLgGAAgPQAAgMAIgHQAIgHAMAAQAIAAAIAFQAEgEAEgCQADgBAHAAIAAALIgEAAQgFAAgCACQAEAHAAAIQABAMgJAHQgHAGgMAAQgGAAgEgCQgBABgBAAQgBAAAAABQgBAAAAABQAAAAAAABQAAACAFACIAJACIALACQALACAEAEQAHAFAAAJQgBAUggAAQghAAAAgSgAgTAdQgBAGAJADQAEACAHAAQASAAAAgHQAAgEgHgCIgKgDIgNgDQgHAEAAAEgAgMgXQAAAOAMAAQALAAAAgOQAAgGgDgEQgDgEgFAAQgMAAAAAOg");
	this.shape.setTransform(45.6,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAIIAAA0IgRAAIAAhIIAPAAIABAIQAMgJAKAAQAKAAAFAGQAEAGAAALIAAAyg");
	this.shape_1.setTransform(38.3,35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgIgeIAAgSIAQAAIAAASg");
	this.shape_2.setTransform(32.8,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAxIgRgkIgJALIAAAZIgRAAIAAhhIARAAIAAAoIgCAOIAKgLIAOgSIATAAIgWAZIAZAvg");
	this.shape_3.setTransform(28.1,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAcQgHgKAAgRQAAgQAHgKQAIgMAPAAQASAAAIAPQADAFAAADIgQAEQgBgGgDgDQgEgFgFAAQgNAAAAAZQAAAYANABQAFAAAEgFQAEgEABgFIAPAFIgDAIQgJANgRAAQgPAAgIgKg");
	this.shape_4.setTransform(20.8,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_5.setTransform(13.4,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAlIAAhHIAPAAIAAAOQAFgJAEgDQAFgEAKAAIAAARQgJAAgGADQgFAEgDAJIAAAog");
	this.shape_6.setTransform(7.8,35.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_7.setTransform(2.5,34.9);

	this.text = new cjs.Text(" ", "14px 'TVNordEF-Regular'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.parent = this;
	this.text.setTransform(84.2,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAlQgGgKAAgPQAAgPAFgKQAHgMAOAAQAKAAAIAIIAAggIARAAIAABhIgQAAIgBgIQgIAKgKgBQgOAAgGgMgAgMAMQAAAZANAAQAHgBAGgGIAAgkQgHgHgGAAQgNABAAAYg");
	this.shape_8.setTransform(80.9,20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgFAAgJAIIAAA0IgQAAIAAhHIAOAAIABAIQAMgKAKAAQALAAAEAGQADAGABALIAAAyg");
	this.shape_9.setTransform(73.6,21.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_10.setTransform(66,21.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAIIAAA0IgQAAIAAhHIAPAAIAAAIQAMgKAJAAQAMAAAEAGQAEAGgBALIAAAyg");
	this.shape_11.setTransform(55.4,21.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAbQgHgJAAgSQAAgQAHgKQAJgMAPAAQAgAAAAAmQAAAnggAAQgQAAgIgMgAgMgPQgCAGAAAKQAAAZAOgBQAJAAADgIQADgGAAgLQAAgYgPAAQgIAAgEAJg");
	this.shape_12.setTransform(47.8,22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgIgeIAAgSIARAAIAAASg");
	this.shape_13.setTransform(42.4,20.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_14.setTransform(38.3,20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcANIAAgxIARAAIAAAvQAAANAJAAQAFAAAJgIIAAg0IARAAIAABHIgQAAIAAgIQgNAKgIAAQgTAAgBgYg");
	this.shape_15.setTransform(32.1,22.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAcQgHgKAAgQQAAgRAHgKQAIgNAPAAQASABAIAQQADAEAAAEIgQADQgBgGgDgEQgEgEgFAAQgNAAAAAZQAAAZANgBQAFAAAEgDQAEgFABgFIAPAFIgDAIQgJAOgRAAQgPAAgIgLg");
	this.shape_16.setTransform(25.1,22);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgMAQAAQAPAAAIALQAHAJAAAQIAAAGIgsAAQABAWANgBQAMABAEgMIAOAGQgJATgVAAQgQAAgIgMgAAPgGQAAgTgPAAQgMAAgCATIAdAAIAAAAg");
	this.shape_17.setTransform(17.8,22);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPAkIgIgOIgHgQIgEAOIgDAGIgGAKIgTAAIAWglIgUgiIATAAIAHAMQAEAIAAAFQABgGAEgHIAHgMIATAAIgUAiIAWAlg");
	this.shape_18.setTransform(10.7,22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgMAQAAQAPAAAIALQAHAJAAAQIAAAGIgsAAQABAWANgBQAMABAEgMIAOAGQgJATgVAAQgQAAgIgMgAAPgGQAAgTgPAAQgMAAgCATIAdAAIAAAAg");
	this.shape_19.setTransform(3.6,22);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgFAAgJAHIAAA1IgRAAIAAhIIAQAAIAAAIQAMgJAJAAQAMAAAEAHQAEAFgBALIAAAyg");
	this.shape_20.setTransform(56.4,7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggAiQgBgGAEgEIAJgGQgDgBgCgCQgDgDAAgEQAAgIALgCQgMgGAAgPQAAgMAJgHQAIgHAMAAQAJAAAHAFQAEgEAEgCQADgBAGAAIAAALIgDAAQgFAAgDACQAFAHABAIQgBAMgHAHQgIAGgMAAQgGAAgFgCQAAABgBAAQgBAAAAABQgBAAAAABQAAAAAAABQAAACAFACIAIACIAMACQALACAEAEQAHAFgBAJQAAAUggAAQghAAABgSgAgUAdQABAGAHADQAFACAHAAQASAAAAgHQAAgEgHgCIgKgDIgNgDQgIAEAAAEgAgMgXQgBAOANAAQALAAAAgOQAAgGgDgEQgDgEgFAAQgNAAABAOg");
	this.shape_21.setTransform(49.1,9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgIgeIAAgSIAQAAIAAASg");
	this.shape_22.setTransform(43.7,6.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_23.setTransform(38.2,7.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAyIAAhhIAOAAIACAHQAIgJAKAAQAPAAAGANQAEAJABAQQgBAOgEAKQgHANgOAAQgHAAgLgIIAAAggAgNgcIAAAjQAHAGAGAAQANAAAAgYQAAgZgNAAQgHAAgGAIg");
	this.shape_24.setTransform(31.2,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgAlIAAguQAAgHgBgDQgCgEgGAAQgIAAgHAJIAAAzIgPAAIAAgwQAAgMgJAAQgHAAgIAJIAAAzIgQAAIAAhIIAPAAIAAAKQAEgFAGgDQAGgDAHAAQALAAAFALQAKgLANAAQASAAAAAWIAAAzg");
	this.shape_25.setTransform(21.5,7.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_26.setTransform(11.9,7.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgkACQAAgVAIgOQALgPATAAQAOAAAKAIQAIAJADAOIgSADQgBgUgQAAQgTgBAAAkQAAAiATAAQAPAAACgUIASACQgCAPgJAIQgJAJgPAAQgmAAAAgvg");
	this.shape_27.setTransform(4.4,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.text},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-2,-0.9,94.4,46), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape.setTransform(70.5,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAIIAAA0IgRAAIAAhHIAQAAIAAAIQAMgKAKAAQAKAAAFAGQAEAGAAALIAAAyg");
	this.shape_1.setTransform(64.4,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgMAQAAQAPAAAIALQAHAJAAAQIAAAGIgsAAQABAWANgBQAMABAEgMIAOAGQgJATgVAAQgQAAgIgMgAAPgGQAAgTgPAAQgMAAgCATIAdAAIAAAAg");
	this.shape_2.setTransform(56.9,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgAlIAAguQAAgHgBgCQgCgFgGAAQgIAAgHAJIAAAzIgPAAIAAgvQAAgNgJAAQgHAAgIAJIAAAzIgQAAIAAhHIAPAAIAAAJQAEgFAGgDQAGgDAHAAQALAAAFAMQAKgMANAAQASAAAAAVIAAA0g");
	this.shape_3.setTransform(47.5,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_4.setTransform(40,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_5.setTransform(36.5,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgHgeIAAgSIAQAAIAAASg");
	this.shape_6.setTransform(33.1,20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAzIAAg6IgLAAIAAgNIALAAQAAgQADgGQAEgJANABIAMAAIgBANIgHgBQgGAAgCAGIgBAMIAOAAIAAANIgOAAIAAA6g");
	this.shape_7.setTransform(29.4,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_8.setTransform(25.2,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbANIAAgxIAQAAIAAAvQAAANAJAAQAFAAAJgIIAAg0IARAAIAABHIgQAAIAAgIQgNAKgIAAQgTAAAAgYg");
	this.shape_9.setTransform(19.7,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAzIAAg6IgLAAIAAgNIALAAQAAgQADgGQADgJANABIANAAIgBANIgGgBQgIAAgBAGIAAAMIANAAIAAANIgNAAIAAA6g");
	this.shape_10.setTransform(13.9,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAlQgGgKAAgPQAAgPAFgJQAHgNAOAAQAKAAAIAHIAAgeIARAAIAABgIgQAAIgBgHQgIAIgKABQgOAAgGgNgAgMAMQAAAZANgBQAHABAGgIIAAgkQgHgFgGAAQgNAAAAAYg");
	this.shape_11.setTransform(69.6,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAHIAAA1IgRAAIAAhIIAPAAIABAIQAMgJAKAAQAKAAAFAHQADAFABALIAAAyg");
	this.shape_12.setTransform(62.2,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_13.setTransform(54.6,7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAHIAAA1IgQAAIAAhIIAOAAIABAIQAMgJAKAAQALAAAEAHQADAFAAALIAAAyg");
	this.shape_14.setTransform(44.1,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAcQgHgLAAgQQAAgRAHgKQAJgMAPABQAggBAAAmQAAAmggAAQgQABgIgLgAgMgPQgCAGAAAKQAAAZAOAAQAJAAADgJQADgGAAgKQAAgZgPAAQgIAAgEAJg");
	this.shape_15.setTransform(36.5,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgIgeIAAgSIARAAIAAASg");
	this.shape_16.setTransform(31,6.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_17.setTransform(27,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAcQgHgKAAgRQAAgPAHgLQAIgMAPAAQASAAAIAPQADAFAAADIgQAEQgBgGgDgDQgEgFgFAAQgNAAAAAZQAAAZANAAQAFAAAEgFQAEgEABgFIAPAFIgDAIQgJANgRAAQgPAAgIgKg");
	this.shape_18.setTransform(21.3,8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAMIAAgwIARAAIAAAvQAAANAJAAQAFAAAJgHIAAg1IARAAIAABIIgPAAIgBgJQgNAKgIAAQgUAAAAgZg");
	this.shape_19.setTransform(13.9,8.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAlQgGgKAAgPQAAgPAFgJQAHgNAOAAQAKAAAIAHIAAgeIARAAIAABgIgQAAIgBgHQgIAIgKABQgOAAgGgNgAgMAMQAAAZANgBQAHABAGgIIAAgkQgHgFgGAAQgNAAAAAYg");
	this.shape_20.setTransform(6.1,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAcQgHgLAAgQQAAgRAHgKQAJgMAPABQAggBAAAmQAAAmggAAQgQABgIgLgAgMgPQgCAGAAAKQAAAZAOAAQAJAAADgJQADgGAAgKQAAgZgPAAQgIAAgEAJg");
	this.shape_21.setTransform(-1.3,8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTAlIAAhHIAPAAIAAAOQAFgJAEgDQAFgEAKAAIAAARQgJAAgGADQgFAEgDAJIAAAog");
	this.shape_22.setTransform(-7.3,7.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIAhAAQAeAAAAAcQAAAbggAAIgOAAIAAAmgAgOgEIAMAAQARAAAAgOQAAgIgFgDQgEgDgIAAIgMAAg");
	this.shape_23.setTransform(-13.8,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-20,-0.9,95.8,32), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape.setTransform(76.1,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgFAAgJAIIAAA0IgQAAIAAhIIAOAAIABAIQAMgJAKAAQALAAAEAGQADAGABALIAAAyg");
	this.shape_1.setTransform(70,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgLAQAAQAPAAAIAKQAHAJAAAQIAAAGIgsAAQABAVANABQAMgBAEgMIAOAGQgJAUgVgBQgQAAgIgLgAAPgHQAAgSgPAAQgMAAgCASIAdAAIAAAAg");
	this.shape_2.setTransform(62.5,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgAlIAAguQAAgHgBgDQgCgEgGAAQgIAAgHAJIAAAzIgPAAIAAgwQAAgMgJAAQgHAAgIAJIAAAzIgQAAIAAhIIAPAAIAAAKQAEgFAGgDQAGgDAHAAQALAAAFAMQAKgMANAAQASAAAAAWIAAAzg");
	this.shape_3.setTransform(53.1,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAyIAAhhIAOAAIABAHQAJgJAKAAQAOAAAHANQAEAJAAAQQAAAOgEAKQgHANgOAAQgIAAgKgIIAAAggAgNgcIAAAjQAGAGAHAAQANAAAAgYQAAgZgNAAQgHAAgGAIg");
	this.shape_4.setTransform(43.7,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAcQgHgLAAgRQAAgQAHgKQAJgLAPAAQAgAAAAAlQAAAmggAAQgQABgIgLgAgMgPQgCAFAAALQAAAYAOABQAJAAADgJQADgGAAgLQAAgYgPAAQgIAAgEAJg");
	this.shape_5.setTransform(35.9,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_6.setTransform(30.4,20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgLAQAAQAPAAAIAKQAHAJAAAQIAAAGIgsAAQABAVANABQAMgBAEgMIAOAGQgJAUgVgBQgQAAgIgLgAAPgHQAAgSgPAAQgMAAgCASIAdAAIAAAAg");
	this.shape_7.setTransform(25,22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAkIgXhHIARAAIALAjIADAUQACgMAFgPIAJgcIAQAAIgYBHg");
	this.shape_8.setTransform(18.2,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgLAQAAQAPAAAIAKQAHAJAAAQIAAAGIgsAAQABAVANABQAMgBAEgMIAOAGQgJAUgVgBQgQAAgIgLgAAPgHQAAgSgPAAQgMAAgCASIAdAAIAAAAg");
	this.shape_9.setTransform(11.3,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAlQgGgKAAgPQAAgPAFgJQAHgNAOAAQAKAAAIAHIAAgeIARAAIAABgIgQAAIgBgHQgIAIgKABQgOAAgGgNgAgMAMQAAAZANgBQAHABAGgIIAAgkQgHgFgGAAQgNAAAAAYg");
	this.shape_10.setTransform(3.7,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_11.setTransform(61.8,6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgFAAgJAHIAAA1IgRAAIAAhHIAQAAIAAAIQAMgKAJAAQALAAAFAGQADAGAAALIAAAyg");
	this.shape_12.setTransform(55.6,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgMAQAAQAPAAAIALQAHAJAAAQIAAAGIgsAAQABAWANgBQAMABAEgMIAOAGQgJATgVAAQgQAAgIgMgAAPgGQAAgTgPAAQgMAAgCATIAdAAIAAAAg");
	this.shape_13.setTransform(48.1,8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_14.setTransform(42.2,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgGAAgIAHIAAA1IgRAAIAAhHIAPAAIABAIQAMgKAKAAQAKAAAFAGQAEAGAAALIAAAyg");
	this.shape_15.setTransform(36,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAbQgHgJAAgSQAAgQAHgKQAJgMAPAAQAgAAAAAmQAAAnggAAQgQAAgIgMgAgMgPQgCAGAAAKQAAAZAOgBQAJAAADgIQADgGAAgLQAAgYgPAAQgIAAgEAJg");
	this.shape_16.setTransform(28.4,8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkABQAAgUAIgNQALgQATAAQAOAAAKAJQAIAHADAPIgSADQgBgVgQAAQgTABAAAiQAAAjATAAQAPAAACgUIASACQgCAPgJAIQgJAJgPAAQgmAAAAgwg");
	this.shape_17.setTransform(20.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-2,-0.8,82.7,32), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al0F2QibibAAjbQAAjaCbiaQCaibDaAAQDbAACbCbQCaCaAADaQAADbibCbQiaCajbAAQjZAAibiag");
	mask.setTransform(52.8,52.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIAlIgBgSQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIABgKQAAgEACgFQADgHACgDIAEgFIAIgHIAJgGIAEgGIAMgJIAOgHIAEgBIACgBIAEgBIAIAAIAHABIABAAQADAAAEACIABAAIAHADIABAAIAGAEIABAAIAGAFIABABIAGAFIABABIAFAGIAAABIAFAHIABABIAFAIIADAIIAAABIACAHIAAACIABAIIAAAJIgBAJIAAACIgCAIIAAACIgDAIIgCgCIgDgEIAAAEIgDAAIgCgBIgBAAIgCgCIgBAAIgFgFQgFgHgHgRIgBgCIAEAPIAFAMQACAEAGAGIgMgCIgKgDIgJgEIgGgEQgJgGgGgGIgDgEIgJgMIgDgFIABADIABACIAGASQAFAKAGAHQgKgBgJgFQgJgEgIgHIgHgGQgIgIgCgEIgDgFIgCADIAAAGQgCAMgEAJQgCAEAAADIgGAOQgDgJgCgMg");
	this.shape.setTransform(67.2,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguDQIgVAAQgFAAgHACQAEhHgFi2IgCg3QAUgNANgeQACgEgCgEQgBgGgGgDQgKgCgFAHIgBACQgJAWgKAIIgBgDIgHgbQACgCgBgFIABgPIAAgBIAGgPIAAgBIAJgWQAKgBAaAJQAkALAaAEQAqAGAqgHIAAADIgBAQIgBARIgEA8QgMC6ABBXIAAAGIgRAFQgJADACAJIABAFQgGACgKAAIgIgBIgMkrIAbgJQAIgBAEgGQAEgFgDgHQgCgGgGgDQgGgDgFACIg9AVQgGADgDAGQgDAFACAGQADAMAMAAQADAAACgCIgaEjQgHgFgHAAg");
	this.shape_1.setTransform(66.2,115.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARCqQgXgDgogLQgYgHgKgBQgRgCgKAEIALiiQAAgIgGgFQgHgFgIADIgBABIgBAAQgZALgegHIALg2IAAgFQACghAPgVQARgaAeAAIADAAIAqgJIAqBwQADAKAJAAQAMAAACgKIAthxIAnAKIAEAAQAWAAAQAOQAYAXAAArIAAADIALA3QgbAFgVgHIgMgEQgIgBgGAEQgGAFAAAIIALCzIgCAAQgcAGgcAAQgPAAgQgCg");
	this.shape_2.setTransform(67.1,76.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.5,0,1).p("ACWHoQgQgQgUgKIAAgHQAAgGgDgFQgChgAMi7QADgrABgaIAIgDQAKgEAAgMIgNjLIAFABIAkCzIgSAqQgFAKALAFQAJAFAGgLIAJgVIABADIgMA+QgBAFADADQADAEAEABQALACACgLIAAgBIACAAQAMAAAAgLQAKhLAAgQIgNiiIgEgUIABAAQANgGgEgMIgOhEQgBgxgZgeQgZgegpgBIgygNIgIAAIgCgKQAZgSAIgjQACABAHgDQAIgDAAgEIAIgdQACgHgGgEQALgsgagoQgOgWgUgMQgVgMgWAAQgSAAgUAKQgNAHgNANQghASgDAjQgDATAEAaQgHAEAAAKIAIAeQABAFAIADQAIACACgBQAKAjAWAPIgCALIgGAAIg0AMQgpABgZAeQgZAegBAxIgOBEQgCALAJAFQgIAkgFAfQgGAgACAGQAIAbAeAzQAdAzALAIQACAPAFARQABAFAIAMQAAASACAmQAHDLgHBFIgBAKIAFADIgLAeQgEAGAAAGIAAAMQAAAKARAOQAVARAcAAQAdAAAWgRQARgOAAgKIAAgMQAAgIgEgFQgIgYgDgGIACgBIAIhaIACBQIAGAEQAAAHADAMQAAAeACAGQgBABAAAEIAAAFQAAAGAEADQADADAFAAICyAAQAGAAADgDQADgDAAgGIAAgBQAFgEAAgJQAAgUgZgIQgigLgIgJgAiTgrQgBgDAHgXQAQgwAAgBIgHBxQgOgggBgGg");
	this.shape_3.setTransform(66.9,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0072BC").s().p("AhyI7QgRgPAAgJIAAgMQAAgGAEgGIALgeIgFgDIABgKQAHhFgHjLIgCg4QgIgNgBgEQgFgRgCgPQgLgHgdg0QgegzgIgbQgCgGAGggQAFgfAIgkQgJgGACgKIAOhEQABgxAZgeQAZgeApgBIA0gMIAGAAIACgLQgWgPgKgjQgCABgIgCQgIgDgBgFIgIgeQAAgKAHgEQgEgaADgTQADgjAhgSQANgNANgHQAUgKASAAQAWAAAVAMQAUAMAOAWQAaAogLAsQAGAEgCAHIgIAdQAAAFgIADQgHACgCgBQgIAjgZASIACAKIAIAAIAyANQApABAZAeQAZAeABAxIAOBEQAEAMgNAGIgBAAIAEAUIANCiQAAAQgKBLQAAALgMAAIgCAAIAAABQgCAKgLgBQgEgBgDgDQgDgFABgEIAMg+IgBgDIgJAVQgGAKgJgEQgLgFAFgKIASgqIgkizIgFgBIANDLQAAAMgKAEIgIADQgBAagDArQgMC8ACBfQADAGAAAFIAAAHQAUAKAQAQQAIAJAiALQAZAHAAAVQAAAJgFAEIAAABQAAAGgDADQgDADgGAAIiyAAQgFAAgDgDQgEgDAAgGIAAgFQAAgEABgBQgCgFAAgfQgDgMAAgHIgGgEIgChQIgIBaIgCABQADAGAIAYQAEAFAAAIIAAAMQAAAKgRAOQgWARgdAAQgcAAgVgRgAiNhEQgHAWABADQABAGAOAgIAHhxIgQAyg");
	this.shape_4.setTransform(66.9,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBHIAAiNIA9AAIAACNg");
	this.shape_5.setTransform(62.1,50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0072BC").s().p("AhWKVQgRgOAAgOIAAgJQAAgLAEgGQAGgSAFgJQAIgMAMAAIADAAIgJh9QgFhIAJg0IgGgiIgPAAQgLABgEgMQgIgpgEg4QgHhuAUhcIgCgCIiHhVQgMgJgDgNQgEgMAEgMQAEgMAHgKIASgXQADgNAHgJIAHgGQgDgKADgGQAUglAaggQAvg6AmAAIAkgCQAHgCAFAGIABABIAKgBIAFgdQgNgMgGgLIgDABQgFAAgDgDQgEgEAAgFQAAgDAEgFIgCAAQgFABgDgEQgEgEAAgEIABgDQgHgDgCgFIgIgiQgBgNALgEIAAAAQAAgFADgDQADgCADgBQgGgDAAgHQAAgGAEgDQAEgEAEAAQgFgDAAgGQAAgFAEgDQAEgDAEgBIABAAQgDgDAAgFQAAgEAEgEQAEgEAEABIADABIgBgGQAAgHAHgEIgBgEQAAgHAGgEQgHgBAAgJQAAgFAEgDQAEgDAEgBQgDgDAAgFQAAgEAEgEQAEgEAEABQAFAAACACIgBgCQAAgFAEgEQAEgEAEAAQAHABACAEQADgHAHAAQAKABABAJQAGgDADAAQAFAAAEADQADAEAAAEIAAACIABAAQAFABAEAEQADADAAAFIgCAFQAGAFAAAGQAAAFgFAEQADADAAAEIgBAEQAKABAAAJIgBADIAEgBQAFAAADAFQAEADAAAFQAAAEgDACIACAAQAFAAADAFQAEADAAAFQAAAFgFAEQAEABAEACQADAEAAAEQAAAGgFADQAJADAAAIQAAAFgDADQAKAFgBAMIgIAhQAAADgJAEIABAEQAAAEgEAEQgEADgEAAIgCAAQAEADAAAGQAAAEgEAEQgEAEgEgBIgDgBQgIAOgLAJIAFAdIAEABIABgBQAEgHAJAAIAqAFQAqgBAbAhQAaAgABA1IAOApQADAIgFAHQAAABgOAOIAgBgIgRBlQhCh3AAgDIgSgwQgIgCgGgDIgDAAIgIAvIAGAkIACAFQAiBNgGCOQgEBIgLA9QgEAMgLAAIgJAAIgEAXQAIAmgEBEIgIB9QAHgEAGABQADABARAHQAVAKAOAMQAEADASAEQASAFAIAGQAPAJAAATQAAALgFAHQgDAHgGAFQgHAFgIABIiaAAQgKgBgHgHQgIgIAAgLIAAgFIgBgUIAAgIQgGgZAQgLQAFgEAHACQgBgRgNhhQgKhHADgvIABgjIgkAAIABAkQACApgLBPQgMBYgBAnIADAAQAKAAAHALQAEAGAIAWQAGAGAAALIAAAJQAAANgSAPQgUARgcAAQgcgBgUgQgAhEJqQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIAAAFQADAFAHAEQAJAGANAAQAVAAANgPIAAgEIgDgFIgBgFIgCgGQgUADgGAAQgNAAgOgEgABPJiQACACAAADICLAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQgCgCgOgDQgZgHgKgIQgHgGgMgGIgRgJIgDACQgbASgagDgAhNgMIgDAOQgNBHAEBTQADAzAIAuIDQAAQAYiUgShpIgPg5IgGACQgtAPgrAAIgDAQQACACgCADQAAAEgCACIgBABQgEAGgIgDIgBAAIAAADQgCAEgFACQgDABgFgBIhFgTIgBAHgAgtguQAQAFAdAHIAAgFIABgdQgBglgSgTQgKgLgKgEQgHgGgMgCIgQgEIgCAAIgHgBIgOAAQAAADgCADQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgDAGgGAFQgMAMgQAFIAqAnIBJADQADABADACQAFADAAAHIgBADQgEAIgHAAIgYAAIACACgAhLj/QAGACADAFQADAGgCAFQgCAEgBAMQgCAQAEANIACADIABAFQACAFAEAEQAnAJAUAYQAaAbABAxQAqAAAogPIgGghIAAgGIAEgbIgOAFIgDAAQgFAAgEgEQgFgEgBgFQgBgFADgGQAEgGAGgBQAagGAIgeIACgeQgBgEADgGQADgEAIgDQAGgBAFAEQAFAEABAGQADAYgIAUIAGADQAaAKAgggIgMgkIgBgEQAAgQgDgPIgFgRIgBgDQgSgngnABIgjgEIg9BOQgFAHgHAAQgHAAgFgGIg/hLIgdACQgNAAgRAOQgiAcghA3IACAAQAjgDAWAaQAHAIAJAVIABAAQgDgcAHgWQACgFAGgDQADgCAEAAIAEABgAixjZQgJAEgEAEIgCACQgHALABARQAAAHAFAHIAHAIQACABADADIAEAEIABABIAEABQAIAFAKABIAFgBQAJgDAJgIQAGgGAAgCIABgCIABgEIAAgCIgBgHIgBgGQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIgBAAQgDgLgFgGIgDgDQgIgMgKgCQgDgBgFAAIgFAAIgIACg");
	this.shape_6.setTransform(41.3,80.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(15.4,12.4,74.4,93.3), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAiIAAgwIgOAAIAAgRIAOAAIAAgdIAaAAIAAAeIATAAIAAARIgSAAIAAAsQAAAIAHAAIAKAAIAAAVIgSABQgaAAAAgbg");
	this.shape.setTransform(23.7,14.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(20.7,8.2,6,12.2), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBAIAAhmIghAAIAAgZIBhAAIAAAZIghAAIAABmg");
	this.shape.setTransform(14.7,13.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(9.8,7.6,9.8,12.8), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAFQgFAAAAgFQAAgEAFAAIAFAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(39,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(38.2,26.7,1.6,1), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgEAAAAgFQAAgEAEAAIANAAQAEAAAAAEQAAAFgEAAg");
	this.shape.setTransform(10.2,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(9.1,26.7,2.3,1), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgFAAAAgFQAAgEAFAAIALAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(19.9,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(18.8,26.7,2.3,1), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgEAAAAgFQAAgEAEAAIANAAQAEAAAAAEQAAAFgEAAg");
	this.shape.setTransform(16.7,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(15.6,26.7,2.3,1), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgFAAAAgFQAAgEAFAAIALAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(13.4,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(12.3,26.7,2.3,1), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgGAAAAgFQAAgEAGAAIALAAQAFAAABAEQgBAFgFAAg");
	this.shape.setTransform(26.5,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(25.3,26.7,2.3,1), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgFAAAAgFQAAgEAFAAIANAAQAFAAAAAEQAAAFgEAAg");
	this.shape.setTransform(36,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(34.9,26.7,2.4,1), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgEAAAAgFQAAgEAEAAIANAAQAEAAAAAEQAAAFgEAAg");
	this.shape.setTransform(32.8,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(31.7,26.7,2.3,1), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgDAAgCgFQAAgEAFAAIANAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(23.1,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(22,26.7,2.4,1), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgFAAAAgFQAAgEAFAAIANAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(29.6,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(28.5,26.7,2.4,1), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAFQgFAAAAgFQAAgEAFAAIAFAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(7.3,27.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(6.5,26.7,1.6,1), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAFQgFAAAAgFQAAgEAFAAIAFAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(40.3,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(39.5,28.5,1.6,1), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgGAAAAgFQAAgEAGAAIALAAQAFAAABAEQgBAFgFAAg");
	this.shape.setTransform(12.1,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(10.9,28.5,2.3,1), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgFAAAAgFQAAgEAFAAIALAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(8.9,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(7.8,28.5,2.3,1), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgFAAgBgFQABgEAFAAIAKAAQAGAAABAEQAAAFgGAAg");
	this.shape.setTransform(37.5,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(36.3,28.5,2.3,1), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1AFQgFAAAAgFQAAgEAFAAIBrAAQACAAADAEQAAAFgFAAg");
	this.shape.setTransform(23.2,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(17.3,28.5,11.8,1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgGAAAAgFQAAgEAGAAIALAAQAFAAABAEQgBAFgFAAg");
	this.shape.setTransform(15.2,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(14.1,28.5,2.3,1), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgFAAAAgFQAAgEAFAAIANAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIACACQAAAFgFAAg");
	this.shape.setTransform(31,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(29.9,28.5,2.4,1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgGAAAAgFQAAgEAGAAIALAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACACQAAAFgGAAg");
	this.shape.setTransform(34.2,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(33.1,28.5,2.3,1), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnCwIAAlfIHOAAIAAFfg");
	mask.setTransform(23.2,17.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAFQgFAAAAgFQAAgEAFAAIAFAAQAFAAAAAEQAAAFgFAAg");
	this.shape.setTransform(6.1,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(5.3,28.5,1.5,1), null);


(lib.btnStrategyClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AgagbIAaAbIAaAcAAbgbIgbAbIgZAc");
	this.shape.setTransform(-12.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#50ADE3").ss(1,1,1).p("AAAAAIAaAcAAAAAIgZAcAAbgbIgbAbAgagbIAaAb");
	this.shape_1.setTransform(-12.1,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-1,7.3,7.5);


(lib.btnStrategy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAwIACgMIAGAAQAIAAADgEIAEgLIgZhGIARAAIAMAiQADANAAAGIAGgUIAKghIARAAIgaBLQgFAPgFAFQgGADgMAAIgJgBg");
	this.shape.setTransform(80.6,99.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAiQAAgGAEgEIAKgGQgEgBgDgCQgCgDAAgEQAAgIALgCQgLgGAAgPQAAgMAIgHQAIgHAMAAQAIAAAJAFQADgEAEgCQADgBAHAAIAAALIgEAAQgFAAgCACQAEAHAAAIQABAMgJAHQgHAGgMAAQgGAAgEgCQgBABgBAAQgBAAAAABQgBAAAAABQAAAAAAABQAAACAGACIAIACIALACQALACAFAEQAFAFABAJQAAAUghAAQghAAAAgSgAgTAdQgBAGAJADQAEACAHAAQASAAAAgHQAAgEgHgCIgKgDIgNgDQgHAEAAAEgAgMgXQAAAOAMAAQALAAAAgOQAAgGgDgEQgDgEgFAAQgMAAAAAOg");
	this.shape_1.setTransform(73.9,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgMAQABQAPgBAIALQAHAJAAAQIAAAGIgsAAQABAVANABQAMAAAEgNIAOAGQgJATgVAAQgQAAgIgLgAAPgGQAAgTgPAAQgMAAgCATIAdAAIAAAAg");
	this.shape_2.setTransform(66.5,98.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_3.setTransform(60.6,97.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_4.setTransform(54.3,98.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAlIAAhHIAPAAIAAAOQAFgJAEgDQAFgEAKAAIAAARQgJAAgGADQgFAEgDAJIAAAog");
	this.shape_5.setTransform(48.7,98.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_6.setTransform(43.4,97.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAgIgDgIIARgEQABAHAGAEQAGAEAGAAQAHAAAFgDQAFgDAAgHQAAgGgIgFIgQgGQgMgEgGgEQgHgHgBgLQAAgOAKgHQAJgGAOAAQAVAAAKAOIAEAHIgRAFQgCgGgFgDQgFgDgGAAQgOAAgBALQAAAHAJAEIAQAGQAMAEAGAEQAHAHABALQAAAdglAAQgWAAgKgRg");
	this.shape_7.setTransform(37,97.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAZQgFAAgDgDIgNgUIgaAAQgGAAAAgIIAAgSICSAAIAAASQABAGgBABQgBADgFAAIgbAAIgNASQgDADgFAAg");
	this.shape_8.setTransform(59.1,81.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhIAIIAAgPICSAAIAAAPg");
	this.shape_9.setTransform(59.1,77.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhIC1IAAgRQAAgLACgBQgDgJAAgKIAAgMQAAgRgkgtQgkgtAAgwQAAg5ArgsQAsgtA7AAQA7AAAsAtQArAsgBA5QAAAtgkAsQgkAsAAAWIAAAMQAAAJgDAKQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAAIIAAARgABNgvQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAEgBABIgxBTIAABsIATAAQAFgHAAgLIAAgMQAAgTALgTQAGgKARgVQAUgZAGgLQAMgXAAgbQAAgzgmgmQgngmgzAAQgyAAgmAmQgnAmAAAzQAAAeANAXQAIAPAUAYQAQARAHANQAJAQAAARIAAAMQAAAKAFAIIASAAIAAhsIgthTQgCgEACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAgAgWAoQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAABtIAsAAIAAhtIABgCIAuhNIiGAAg");
	this.shape_10.setTransform(59,57.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2).p("AtgJhQAAknBikXIBWjIQB4jwDGjGIS8S8g");
	this.shape_11.setTransform(86.5,60.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BA1D84").s().p("AtZJeQAAknBikXIBWjIQB5jwDFjGIS9S8g");
	this.shape_12.setTransform(85.8,60.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghA2IACgPIAHABQAJAAADgEIAFgNIgchMIAUAAIALAlQAEAOABAHQACgJAEgMIALglIASAAIgcBRQgFAQgGAGQgHAEgNABIgKgBg");
	this.shape_13.setTransform(71.1,96.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkAlQAAgHAEgEQADgCAHgEQgEgBgCgDQgDgDAAgEQAAgJANgCQgNgHgBgQQAAgNAKgIQAIgIAOAAQAKAAAIAGQAEgFAFgCQADgBAHAAIAAAMIgEAAQgGAAgDACQAHAHgBAKQABANgKAIQgIAGgNAAQgGAAgGgCQgDACAAACQAAADAGACIAJABIAMADQAMADAFAEQAHAFAAAKQAAAWgkAAQgkAAAAgUgAgWAgQAAAHAJADQAGACAHAAQAUAAAAgIQAAgEgIgDIgKgCIgPgDQgJAEAAAEgAgOgaQAAAQAOAAQAMAAAAgPQAAgHgDgEQgDgFgGAAQgOAAAAAPg");
	this.shape_14.setTransform(63.7,96.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAdQgIgLAAgSQAAgSAIgLQAJgNARABQARAAAIALQAIAKAAASIAAAGIgxAAQABAYAPAAQAMAAAGgOIAPAHQgKAWgXgBQgRAAgJgNgAAQgHQAAgVgPABQgOgBgCAVIAfAAIAAAAg");
	this.shape_15.setTransform(55.7,95.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAwQgGgGAAgMIAAgqIgLAAIAAgPIALAAIAAgVIARgEIAAAZIASAAIAAAPIgSAAIAAAqQAAAEACACQACADAGAAQAEAAAEgCIABAOQgIACgFAAQgMAAgFgFg");
	this.shape_16.setTransform(49.1,94);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAkQgGgFAAgLQgBgQARgGQAJgFATgDIAAgEQAAgGgEgEQgDgDgHAAQgEABgEACQgFADgBAEIgPgHQAEgIAJgFQAJgEAJAAQAeAAAAAZIAAA5IgRAAIAAgJQgJAKgNAAQgKAAgHgGgAgDAFQgKAEABAJQAAAKAKAAQAHAAAJgJIAAgSQgMACgFACg");
	this.shape_17.setTransform(42.2,95.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVApIAAhPIAQAAIABAPQAFgKAFgCQAFgFALAAIAAASQgKABgGAEQgGAEgDAJIAAAtg");
	this.shape_18.setTransform(36,95.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAwQgEgGAAgMIAAgqIgNAAIAAgPIANAAIAAgVIARgEIAAAZIARAAIAAAPIgRAAIAAAqQAAAEACACQACADAFAAQAEAAAFgCIABAOQgJACgGAAQgLAAgGgFg");
	this.shape_19.setTransform(30.2,94);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjAkQgDgFgBgFIASgEQACAIAHAEQAGAEAHAAQAIAAAEgDQAHgDAAgHQAAgIgJgEIgSgHQgOgFgFgEQgJgIAAgMQAAgQALgHQAJgHAQAAQAXAAALAQQADAEABAEIgTAFQgCgHgFgDQgGgEgGAAQgQAAAAANQAAAHAJAFIASAHQAOAEAFAFQAJAHAAANQAAAfgoAAQgYAAgLgSg");
	this.shape_20.setTransform(23.2,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12,p:{scaleX:1,scaleY:1,x:85.8,y:60.7}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:86.5,y:60.4}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:59,y:57.7}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:59.1,y:77.6}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:59.1,y:81.8}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12,p:{scaleX:1.1,scaleY:1.1,x:76.8,y:53.7}},{t:this.shape_11,p:{scaleX:1.1,scaleY:1.1,x:77.5,y:53.4}},{t:this.shape_10,p:{scaleX:1.1,scaleY:1.1,x:47.3,y:50.4}},{t:this.shape_9,p:{scaleX:1.1,scaleY:1.1,x:47.4,y:72.3}},{t:this.shape_8,p:{scaleX:1.1,scaleY:1.1,x:47.4,y:76.9}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.3,174.9,123.7);


(lib.btnProductionClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AgagbIAaAbIAaAcAAbgbIgbAbIgZAc");
	this.shape.setTransform(2.7,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#50ADE3").ss(1,1,1).p("AgagbIAaAbIAaAcAAbgbIgbAbIgZAc");
	this.shape_1.setTransform(2.7,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,7.3,7.5);


(lib.btnInfrastructureClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIAaAcAAAAAIgZAcAAbgbIgbAbAgagbIAaAb");
	this.shape.setTransform(-12.3,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#69B3E7").ss(1,1,1).p("AgagbIAaAbIAaAcAAbgbIgbAbIgZAc");
	this.shape_1.setTransform(-12.3,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-1,7.3,7.5);


(lib.btnEfficiencyClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIgZAbAAAAAIAaAbAgagbIAaAbAAagbIgaAb");
	this.shape.setTransform(-7.3,-13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#50ADE3").ss(1,1,1).p("AAAABIgZAbAAAABIAaAbAgagbIAaAcAAagbIgaAc");
	this.shape_1.setTransform(-7.3,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-17.4,7.3,7.5);


(lib.btnEfficiency = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAxIABgOIAHABQAHAAAEgEIAFgLIgZhFIARAAIALAhQADANABAHIAEgUIALghIAQAAIgZBJQgFAPgFAFQgGAFgMAAIgJgBg");
	this.shape.setTransform(98.1,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAcQgHgKAAgQQAAgRAHgKQAIgNAPAAQASABAIAQQADAEAAAEIgQADQgBgGgDgEQgEgEgFAAQgNAAAAAZQAAAZANgBQAFAAAEgDQAEgFABgFIAPAFIgDAIQgJAOgRAAQgPAAgIgLg");
	this.shape_1.setTransform(91.7,42.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgFAAgJAIIAAA0IgQAAIAAhHIAOAAIABAIQAMgKAKAAQALAAAEAGQADAGABALIAAAyg");
	this.shape_2.setTransform(84.4,42.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAbQgHgKAAgRQAAgQAHgKQAIgMAQAAQAPAAAIALQAHAJAAAQIAAAGIgsAAQABAWANgBQAMABAEgMIAOAGQgJATgVAAQgQAAgIgMgAAPgGQAAgTgPAAQgMAAgCATIAdAAIAAAAg");
	this.shape_3.setTransform(76.9,42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgHgeIAAgSIAPAAIAAASg");
	this.shape_4.setTransform(71.6,41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAcQgHgKAAgQQAAgRAHgKQAIgNAPAAQASABAIAQQADAEAAAEIgQADQgBgGgDgEQgEgEgFAAQgNAAAAAZQAAAZANgBQAFAAAEgDQAEgFABgFIAPAFIgDAIQgJAOgRAAQgPAAgIgLg");
	this.shape_5.setTransform(66.6,42.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgHgeIAAgSIAQAAIAAASg");
	this.shape_6.setTransform(61.3,41.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAzIAAg6IgLAAIAAgNIALAAQAAgQADgGQAEgJANABIAMAAIgBANIgHgBQgGAAgCAGIgBAMIAOAAIAAANIgOAAIAAA6g");
	this.shape_7.setTransform(57.6,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAzIAAg6IgLAAIAAgNIALAAQAAgQADgGQAEgJANABIAMAAIgBANIgHgBQgGAAgCAGIgBAMIAOAAIAAANIgOAAIAAA6g");
	this.shape_8.setTransform(53.2,41.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAvIAAhdIA5AAIAAAOIgoAAIAAAZIAhAAIAAANIghAAIAAAbIAqAAIAAAOg");
	this.shape_9.setTransform(47.4,41.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAoQgNgKgFgQQgGgTAKgTQAKgSAUgFIANgCQAQAAANALQAOAKAFAQQAGATgKASQgKARgUAGIgOACQgQAAgNgKgAgFgUQgIACgFAIQgEAIADAHQACAIAIAFQAIAEAHgCQAIgDAEgHQAFgHgCgIQgCgJgIgFQgFgCgFAAIgGABg");
	this.shape_10.setTransform(91.5,86);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBBkQgNAAgIgCIgOAZIgxgbIAPgZQgGgGgIgLIgcAIIgPg2IAcgIIADgVIgZgNIAAgBIAbgyIAaAPQAEgGANgIIgIgcIA2gOIAHAcQANAAAHACIAPgbIAwAcIgOAaQAGAFAIALIAbgIIAQA2IgcAHQgBALgDALIAaAOIgbAxIgagOIgRANIAIAcIg2AQgAgRg6QgVAHgMASQgMASACATIABANIACAFIABACIACAFIACABIACADIABADQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAABIABAAIAFAFIAEAEIAEACIACABIACADIAHACIABABIAEACIACAAIAEABIABAAIAFABIAMAAIAGgBIABAAIAEgBIANgEIAKgIIADgDQAGgFAGgJQADgNAGgHIAAgBQABgKgEgNIgCgHIgCgFIgCgDIgCgDIgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgBgCIgEgEIgBAAIgEgDIgBgCIgDgCIgCgBIgDgBIgGgDIgBgCIgFgCIgBAAIgEgBIgCAAIgEAAIgMAAIgGAAIgBAAIgGABg");
	this.shape_11.setTransform(91.5,86.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABA9IgLgBQgFAAgGgDQgSgIgKgPQgLgQAAgSQAAgWAPgQQACgFAGgEQAJgHAFgCQAMgEALgBQANABAKAEIADABIANAIQADADAFAHQAOARAAAVQAAAUgJAMIgCADIgGAJQgGAGgMAGQgMAEgHAAgAgOgNQgGAGAAAHQAAAKAGAFQAGAGAIABQAJAAAHgHQAGgGgBgJQAAgHgGgGQgGgGgJAAQgIAAgGAGg");
	this.shape_12.setTransform(65,73.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglCrIAAgpQgUgGgIgFIgbAcIg2g2IAcgcIgLgbIgpAAIAAhLIApAAQAGgVAFgGIgcgcIA2g2IAbAcIAcgMIAAgoIBMAAIAAAoQARAGAKAGIAcgcIA2A2IgcAcQAEAIAHATIAnAAIAABLIgnAAQgHAVgEAGIAcAcIg2A2IgcgcQgMAHgPAEIAAApgAg1g0QgVAWAAAeQAAAdAVAWQAWAWAeAAQAeAAAWgWQAUgVAAgeQABgegWgWQgWgVgdAAQgeAAgWAVg");
	this.shape_13.setTransform(65.2,73.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2).p("AJhtfIAAaxIy8y8QDGjGD7h9IDBhSQEThgEnAAg");
	this.shape_14.setTransform(60.4,86.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5BB6E7").s().p("ApdljQDGjGD7h9IDBhSQEThgEnAAIAAaxg");
	this.shape_15.setTransform(60.7,85.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghA1IACgOIAHABQAJAAADgFIAFgLIgchOIAUAAIALAlQAEAPABAHQACgKAEgMIALglIASAAIgcBSQgFARgGAFQgHAFgNgBIgKgBg");
	this.shape_16.setTransform(92.6,28.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAeQgHgKAAgTQAAgRAHgLQAJgOARgBIAAAAQAUABAJARQADAFAAAEIgRAEQgBgHgEgEQgEgFgGAAQgPAAAAAcQAAAbAPAAQAGAAAEgEQAEgFABgGIARAFIgEAJQgJAPgTABQgRgBgJgMg");
	this.shape_17.setTransform(85.5,27.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANApIAAg2QAAgNgJAAQgHAAgJAJIAAA6IgSAAIAAhPIAQAAIABAJQANgLALAAQALAAAFAIQAEAFAAANIAAA3g");
	this.shape_18.setTransform(77.5,27);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAdQgIgKAAgTQAAgSAIgLQAJgNARAAQAQAAAJAMQAIAKAAASIAAAHIgwAAQAAAXAPAAQANAAAFgNIAOAGQgIAWgYAAQgSgBgIgNgAAQgIQAAgTgPAAQgPAAgBATIAfAAIAAAAg");
	this.shape_19.setTransform(69.3,27.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIA2IAAhPIARAAIAABPgAgIghIAAgUIARAAIAAAUg");
	this.shape_20.setTransform(63.4,25.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAeQgHgKAAgTQAAgRAHgLQAJgOARgBIAAAAQAUABAJARQADAFAAAEIgRAEQgBgHgEgEQgEgFgGAAQgPAAAAAcQAAAbAPAAQAGAAAEgEQAEgFABgGIARAFIgEAJQgJAPgTABQgRgBgJgMg");
	this.shape_21.setTransform(58,27.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIA2IAAhPIARAAIAABPgAgJghIAAgUIASAAIAAAUg");
	this.shape_22.setTransform(52.1,25.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLA4IAAhAIgMAAIAAgPIAMAAQAAgRADgFQAEgLAOAAIAOACIgCANIgGgBQgHAAgCAHIgBAMIAPAAIAAAPIgPAAIAABAg");
	this.shape_23.setTransform(48.1,25.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLA4IAAhAIgMAAIAAgPIAMAAQAAgRACgFQAFgLAOAAIAOACIgBANIgHgBQgHAAgCAHIgBAMIAPAAIAAAPIgPAAIAABAg");
	this.shape_24.setTransform(43.3,25.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggAzIAAhlIA/AAIAAAPIgsAAIAAAbIAkAAIAAAOIgkAAIAAAeIAuAAIAAAPg");
	this.shape_25.setTransform(36.8,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15,p:{scaleX:1,scaleY:1,x:60.7,y:85.7}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:60.4,y:86.4}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:65.2,y:73.7}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:65,y:73.5}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:91.5,y:86.1}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:91.5,y:86}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15,p:{scaleX:1.1,scaleY:1.1,x:54.1,y:77.2}},{t:this.shape_14,p:{scaleX:1.1,scaleY:1.1,x:53.9,y:78}},{t:this.shape_13,p:{scaleX:1.1,scaleY:1.1,x:59,y:63.9}},{t:this.shape_12,p:{scaleX:1.1,scaleY:1.1,x:58.8,y:63.7}},{t:this.shape_11,p:{scaleX:1.1,scaleY:1.1,x:88,y:77.6}},{t:this.shape_10,p:{scaleX:1.1,scaleY:1.1,x:88,y:77.5}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1,123.7,174.9);


(lib.btnContentClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIgZAcAAAAAIAaAcAgZgbIAZAbAAbgbIgbAb");
	this.shape.setTransform(18.7,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#50ADE3").ss(1,1,1).p("AAbgbIgbAbIgZAcAgZgbIAZAbIAaAc");
	this.shape_1.setTransform(18.7,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,3,7.3,7.5);


(lib.btnComplianceClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIAaAcAAAAAIgZAcAAbgbIgbAbAgagbIAaAb");
	this.shape.setTransform(13.7,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#50ADE3").ss(1,1,1).p("AgagbIAaAbIAaAcAAbgbIgbAbIgZAc");
	this.shape_1.setTransform(14.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,2,7.3,7.5);


(lib.btnCampaign_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AgagbIAaAcIAaAbAAbgbIgbAcIgZAb");
	this.shape.setTransform(2.7,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#50ADE3").ss(1,1,1).p("AgagbIAaAbIAaAcAAbgbIgbAbIgZAc");
	this.shape_1.setTransform(2.7,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,8,7.3,7.5);


(lib.btnAnalyticsClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIgZAcAAAAAIAaAcAgagbIAaAbAAbgbIgbAb");
	this.shape.setTransform(-3.2,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#50ADE3").ss(1,1,1).p("AgagbIAaAcIgZAbAAbgbIgbAcIAaAb");
	this.shape_1.setTransform(-5.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-0.7,7.3,7.5);


(lib.btnAnalytics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAbIgDgEIANgIQACAFAFADQAFADAEgBQAMABAAgIQABgEgHgDIgMgFQgJgEgFgEQgFgFAAgKQgBgKAJgFQAHgGAKAAQAQAAAIALIADAFIgOAGQgBgEgDgCQgFgCgEAAQgKgBAAAIQAAAEAGADIANAGQAIADAFADQAGAGAAAIQAAAXgcAAQgQAAgKgMg");
	this.shape.setTransform(68.4,42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAcQgHgKAAgQQAAgRAHgKQAIgNAPAAQASABAIAQQADAEAAAEIgQADQgBgGgDgEQgEgEgFAAQgNAAAAAZQAAAZANgBQAFAAAEgDQAEgFABgFIAPAFIgDAIQgJAOgRAAQgPAAgIgLg");
	this.shape_1.setTransform(62,42.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAxIAAhIIAPAAIAABIgAgHgeIAAgSIAPAAIAAASg");
	this.shape_2.setTransform(56.7,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGArQgFgFAAgLIAAgmIgKAAIAAgNIAKAAIAAgTIAQgEIAAAXIAQAAIAAANIgQAAIAAAmQAAAEACACQACACAEAAIAIgBIABANIgNABQgKAAgFgFg");
	this.shape_3.setTransform(52.7,41.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAxIABgOIAHABQAIAAADgEIAEgLIgYhFIARAAIALAhQADANAAAHIAGgUIAKghIARAAIgaBJQgFAPgFAFQgGAFgMAAIgJgBg");
	this.shape_4.setTransform(47.1,44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_5.setTransform(42.1,41.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgOAPgGQAIgEARgDIAAgEQAAgFgDgDQgDgDgGAAQgDAAgEACQgFADgBAEIgNgGQADgIAJgEQAHgEAIAAQAcAAAAAXIAAAzIgPAAIgBgIQgHAJgNAAQgJAAgGgFgAgCAEQgJAEAAAIQAAAKAJAAQAGAAAIgIIAAgRQgLABgDACg");
	this.shape_6.setTransform(36.6,42.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMAlIAAgxQAAgLgJAAQgFAAgJAIIAAA0IgRAAIAAhHIAQAAIAAAIQAMgKAJAAQALAAAFAGQADAGAAALIAAAyg");
	this.shape_7.setTransform(29.5,42.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAvIgHgXIgdAAIgGAXIgSAAIAdhdIAVAAIAdBdgAALAKIgIgcIgDgQQgBAJgCAHIgIAcIAWAAg");
	this.shape_8.setTransform(21.8,41.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACcDIIh5h5QgnAXgqAAQhBAAgtgtQgtgtAAhAQAAhBAtgsQAuguBAAAQA/AAAuAuQAtAtAABAQAAA1ggApIB3B3QAHAJAAALQAAALgJAIQgIAIgKAAQgLAAgIgIgAiPiUQgpAoAAA5QAAA4ApAoQAoAoA4AAQA4AAAogoQAogoAAg4QAAg5gogoQgogog4AAQg4AAgoAog");
	this.shape_9.setTransform(40.3,77);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2).p("AJglqIy8S8IAA6xQEbAAEOBaIDFBSQECB9DMDMg");
	this.shape_10.setTransform(60.5,86.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2B439").s().p("ApetYQEbAAEOBaIDFBSQECB9DNDMIy9S8g");
	this.shape_11.setTransform(60.7,85.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAeIgEgFIAPgIQACAEAFAEQAFADAGAAQANAAAAgIQAAgFgHgEIgNgFQgLgEgFgDQgGgHAAgKQAAgMAJgGQAIgGAMAAQAQAAAKAMIADAFIgPAHQgBgEgEgDQgFgCgEAAQgMAAAAAIQAAAFAGADIAPAGQAJADAFAEQAHAGAAAKQAAAYgeABQgTgBgKgMg");
	this.shape_12.setTransform(75.2,29.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAeQgHgKAAgTQAAgRAHgLQAJgOARgBIAAAAQAUABAJARQADAFAAAEIgRAEQgBgHgEgEQgEgFgGAAQgPAAAAAcQAAAbAPAAQAGAAAEgEQAEgFABgGIARAFIgEAJQgJAPgTABQgRgBgJgMg");
	this.shape_13.setTransform(68.1,29.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA2IAAhPIARAAIAABPgAgJghIAAgUIASAAIAAAUg");
	this.shape_14.setTransform(62.3,27.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAvQgEgFAAgMIAAgrIgMAAIAAgOIAMAAIAAgVIARgEIAAAZIARAAIAAAOIgRAAIAAAqQAAAFABADQACACAGAAQAEAAAFgCIAAAOQgIACgGAAQgLAAgGgGg");
	this.shape_15.setTransform(57.9,28.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghA1IACgOIAHABQAJAAADgFIAFgLIgchOIAUAAIALAlQAEAPABAHQACgKAEgMIALglIASAAIgcBSQgFARgGAFQgHAFgNgBIgKgBg");
	this.shape_16.setTransform(51.6,30.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIA2IAAhrIARAAIAABrg");
	this.shape_17.setTransform(46.3,27.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAlQgGgHgBgKQABgPAQgIQAJgEATgDIAAgEQAAgGgEgDQgEgDgFgBQgFAAgEADQgFADgBAFIgPgHQAEgJAJgFQAJgEAJAAQAdAAAAAaIAAA3IgQAAIAAgJQgJALgNAAQgLAAgGgFgAgDAFQgKAEAAAJQAAALALAAQAHgBAJgIIAAgTQgMACgFACg");
	this.shape_18.setTransform(40.2,29.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANApIAAg2QAAgNgJAAQgHAAgJAJIAAA6IgSAAIAAhPIAQAAIABAJQANgLALAAQALAAAFAIQAEAFAAANIAAA3g");
	this.shape_19.setTransform(32.4,29.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAzIgHgZIggAAIgHAZIgUAAIAghlIAYAAIAfBlgAAMALIgJgfIgDgRIgEARIgJAfIAZAAg");
	this.shape_20.setTransform(23.8,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{scaleX:1,scaleY:1,x:60.7,y:85.7}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:60.5,y:86.4}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:40.3,y:77}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11,p:{scaleX:1.1,scaleY:1.1,x:66.7,y:76.7}},{t:this.shape_10,p:{scaleX:1.1,scaleY:1.1,x:66.6,y:77.5}},{t:this.shape_9,p:{scaleX:1.1,scaleY:1.1,x:44.3,y:67.1}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,123.8,174.8);


(lib.mcStrategyMsg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Campaign development\nDigital content and\nsocial media strategy\nMessaging and\ntactics planning", "normal 400 13px 'Roboto'", "#606060");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 150;
	this.text.parent = this;
	this.text.setTransform(62.6,12.5);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArwG4QgTAAgBgUIAAtHQABgUATAAIXhAAQATAAABAUIAANHQgBAUgTAAg");
	this.shape.setTransform(62.9,51.1,1,1.158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,96,96,0.596)").s().p("ArwGkIAAtHIXhAAIAANHgArmGaIXMAAIAAszI3MAAg");
	this.shape_1.setTransform(64.4,53.1,1,1.158);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,96,96,0.796)").s().p("ArmGaIAAszIXMAAIAAMzgArbGQIW3AAIAAsfI23AAg");
	this.shape_2.setTransform(64.4,53.1,1,1.158);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,96,96,0.396)").s().p("ArwGuQgJAAgBgKIAAtHQABgKAJAAIXhAAQAJAAABAKIAANHQgBAKgJAAgArwGkIXhAAIAAtHI3hAAg");
	this.shape_3.setTransform(64.4,53.1,1,1.158);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,96,96,0.196)").s().p("ArwG4QgTAAgBgUIAAtHQABgUATAAIXhAAQATAAABAUIAANHQgBAUgTAAgAr6mjIAANHQABAKAJAAIXhAAQAJAAABgKIAAtHQgBgKgJAAI3hAAQgJAAgBAKg");
	this.shape_4.setTransform(64.4,53.1,1,1.158);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606060").s().p("ArbGQIAAsfIW3AAIAAMfg");
	this.shape_5.setTransform(64.4,53.1,1,1.158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape_6.setTransform(138.5,10.7);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(138.5,32.4,1,1,0,0,0,52.8,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_7.setTransform(138.5,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6}]}).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA1IACgOIAHABQAJAAADgFIAFgMIgchNIAUAAIALAmQAEAOABAHQACgKAEgLIALgmIASAAIgcBSQgFAQgGAGQgHAFgNAAIgKgCg");
	this.shape_8.setTransform(37.7,-10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAlQAAgHAFgEQACgCAIgEQgEgBgDgDQgDgDAAgEQAAgJANgCQgNgHAAgQQgBgNAKgIQAJgIANAAQAJAAAJAGQAEgFAEgCQAEgBAHAAIAAAMIgEAAQgFAAgDACQAFAHABAKQgBANgIAIQgJAGgNAAQgGAAgFgCQgFACAAACQAAADAHACIAIABIAOADQALADAFAEQAHAFAAAKQAAAWgkAAQgkAAAAgUgAgVAgQgBAHAJADQAGACAHAAQAUAAAAgIQAAgEgHgDIgMgCIgOgDQgJAEABAEgAgNgaQAAAQANAAQANAAAAgPQAAgHgEgEQgEgFgFAAQgNAAAAAPg");
	this.shape_9.setTransform(30.3,-11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAeQgHgLAAgTQAAgSAIgLQAJgMAQAAQASAAAIALQAIAKAAASIAAAHIgwAAQAAAXAPAAQAMAAAGgOIAOAIQgJAUgXAAQgRABgKgNgAAQgIQAAgTgQgBQgOABgBATIAfAAIAAAAg");
	this.shape_10.setTransform(22.3,-12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAvQgEgFAAgMIAAgqIgNAAIAAgPIANAAIAAgUIARgFIAAAZIARAAIAAAPIgRAAIAAApQAAAGACABQACADAFAAQAEAAAFgCIABAOQgJACgGAAQgLAAgGgGg");
	this.shape_11.setTransform(15.7,-13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAlQgHgHAAgKQAAgQAQgHQAKgEATgCIAAgFQAAgGgEgEQgEgCgFAAQgFgBgEADQgFADgCAFIgOgIQAEgIAJgEQAIgFAKAAQAdAAAAAZIAAA4IgPAAIgBgJQgIALgOAAQgKAAgHgFgAgDAFQgJAEgBAJQAAAKALAAQAHABAJgKIAAgSQgMACgFACg");
	this.shape_12.setTransform(8.9,-12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVApIAAhPIAQAAIABAQQAFgLAFgDQAFgEALAAIAAATQgKgBgGAFQgGAEgDAKIAAAsg");
	this.shape_13.setTransform(2.7,-12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAvQgGgFAAgMIAAgqIgLAAIAAgPIALAAIAAgUIARgFIAAAZIASAAIAAAPIgSAAIAAApQAAAGACABQACADAGAAQAEAAAEgCIABAOQgIACgFAAQgMAAgFgGg");
	this.shape_14.setTransform(-3.1,-13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjAkQgDgFgBgFIATgEQABAIAHAEQAGAEAHAAQAHAAAGgDQAFgDAAgHQABgIgJgEIgTgHQgMgFgHgEQgIgIAAgMQAAgQALgHQAKgHAPAAQAXAAALAQQADAEAAAEIgSAFQgCgHgFgDQgGgEgGAAQgQAAAAANQAAAHAIAFIATAHQANAEAHAFQAIAHAAANQAAAfgoAAQgYAAgLgSg");
	this.shape_15.setTransform(-10.2,-13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAZQgFAAgDgDIgNgUIgaAAQgGAAAAgIIAAgSICSAAIAAASQABAGgBABQgBADgFAAIgbAAIgNASQgDADgFAAg");
	this.shape_16.setTransform(14.1,-30.6,1.1,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIAIIAAgPICSAAIAAAPg");
	this.shape_17.setTransform(14.1,-35.1,1.1,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhIC1IAAgRQAAgLACgBQgDgJAAgKIAAgMQAAgRgkgtQgkgtAAgwQAAg5ArgsQAsgtA7AAQA7AAAsAtQArAsgBA5QAAAtgkAsQgkAsAAAWIAAAMQAAAJgDAKQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAAIIAAARgABNgvQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAEgBABIgxBTIAABsIATAAQAFgHAAgLIAAgMQAAgTALgTQAGgKARgVQAUgZAGgLQAMgXAAgbQAAgzgmgmQgngmgzAAQgyAAgmAmQgnAmAAAzQAAAeANAXQAIAPAUAYQAQARAHANQAJAQAAARIAAAMQAAAKAFAIIASAAIAAhsIgthTQgCgEACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAgAgWAoQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAABtIAsAAIAAhtIABgCIAuhNIiGAAg");
	this.shape_18.setTransform(13.9,-57,1.1,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2).p("AtgJhQAAknBikXIBWjIQB4jwDGjGIS8S8g");
	this.shape_19.setTransform(44.2,-54,1.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BA1D84").s().p("AtZJeQAAknBikXIBWjIQB5jwDFjGIS9S8g");
	this.shape_20.setTransform(43.4,-53.8,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcStrategyMsg, new cjs.Rectangle(-51.9,-121.8,244.3,237.4), null);


(lib.mcProductionMsg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Print collaterals production\nMass mailings\nLogos for sponsorships and giveaways\nTranslation and alternate format fulfillment", "normal 400 13px 'Roboto'", "#606060");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 257;
	this.text.alpha = 0.92941176;
	this.text.parent = this;
	this.text.setTransform(130.8,14.5);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0EF8QgUAAAAgUIAArPQAAgUAUAAMAoJAAAQAUAAAAAUIAALPQAAAUgUAAg");
	this.shape.setTransform(130.5,43.5,1,1.145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,96,96,0.596)").s().p("A0EFoIAArPMAoJAAAIAALPgAz6FeMAn1AAAIAAq7Mgn1AAAg");
	this.shape_1.setTransform(133.5,47,1,1.145);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,96,96,0.796)").s().p("Az6FeIAAq7MAn1AAAIAAK7gAzwFUMAnhAAAIAAqnMgnhAAAg");
	this.shape_2.setTransform(133.5,47,1,1.145);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,96,96,0.396)").s().p("A0EFyQgKAAAAgKIAArPQAAgKAKAAMAoJAAAQAKAAAAAKIAALPQAAAKgKAAgA0EFoMAoJAAAIAArPMgoJAAAg");
	this.shape_3.setTransform(133.5,47,1,1.145);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,96,96,0.196)").s().p("A0EF8QgUAAAAgUIAArPQAAgUAUAAMAoJAAAQAUAAAAAUIAALPQAAAUgUAAgA0OlnIAALPQAAAKAKAAMAoJAAAQAKAAAAgKIAArPQAAgKgKAAMgoJAAAQgKAAAAAKg");
	this.shape_4.setTransform(133.5,47,1,1.145);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606060").s().p("AzwFUIAAqnMAnhAAAIAAKng");
	this.shape_5.setTransform(133.5,47,1,1.145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape_6.setTransform(179,-38.9);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(179,-17.2,1,1,0,0,0,52.8,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_7.setTransform(179,-38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6}]}).wait(1));

	// Layer_3
	this.instance_1 = new lib.Group_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.8,107.3,1.1,1.1,0,0,0,36.6,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhJDJQgKgBgGgIIgBgBIgCgIIAAgQIgTAAIgHgBIgBgBIgCgBQgEgCgBgDIgCgGIgBgCIAAgaIgTAAQgKAAgFgIIgBgBIgCgJIAAkhIACgJIABgBIACgCIAGgFIAHgBIDeAAIAHABIADACIADADQAGAEAAAIIAAAYIATAAQAKAAAFAIIABABIACAJIAAAPIATAAQAHABAGAEIAEAHQACAFgBABIAAEiQAAAFgDAFIgCACQgFAFgIABgAhMC3QAAAAAAAAQAAABAAAAQAAAAABAAQAAABABAAIDeAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIAAkiQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgTAAIAAEEIgBACQAAAEgCACQgCADgDACQgFADgFAAIi7AAgAhwCUQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIDeAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIAAkhQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgTAAIAAD6QAAAJgGAFQgGAGgHgBIi6AAgAiXi1IAAEhQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIDeAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAkhQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIjeAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_8.setTransform(142,55.4,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("ApfFqIS8y8IAAazQkaAAkPhbIjEhSQkCh8jNjOg");
	this.shape_9.setTransform(111.4,57.4,1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A2B439").s().p("AA1L/IjEhSQkCh8jMjOIS8y8IAAazQkaAAkQhbg");
	this.shape_10.setTransform(111.3,58.2,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcProductionMsg, new cjs.Rectangle(0,-92.7,264,246.3), null);


(lib.mcInfrastructureMsg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Salesforce support \nCampaign engine management Inventory and job status reporting", "normal 400 13px 'Roboto'", "#606060");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(69.2,14.9);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("APQFhI+pAAQgVgCAAgbIAAqLQgBgKAGgIQAGgHAKAAIe0AAQAJAAAGAJQAFAIAAAIIAAKNQAAAJgIAIQgJAKgNAAIgBAAg");
	this.shape.setTransform(69.5,37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,96,96,0.396)").s().p("APQFXI+oAAQgMgCAAgRIAAqLIAAgCQgBgFADgEIAAgBQAEgDAFAAIe0AAQAEAAADAFIAAAAQADAFAAAFIAAKNQAAAFgFAFIAAAAQgHAHgIAAIgBAAgAPQFNQAFAAADgDIABgBIACgDIAAqNIgCgFIABAAQgBAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAI+0AAIgBAAIAAACIAAADIAAKLQAAAHADACIenAAIAAAAIAAAAg");
	this.shape_1.setTransform(72,40.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,96,96,0.796)").s().p("APPFFI+fAAIAAqFIehAAIAAKFIAAAAIgBAAIgBAAgAvGE7IeNAAIAApxI+NAAgAPRlEIAAAAIAAAAg");
	this.shape_2.setTransform(72.1,40.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,96,96,0.596)").s().p("APQFNIAAAAI+nAAQgDgCAAgHIAAqLIAAgDIAAgCIABAAIe0AAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgBgBIACAFIAAKNIgCAEIgBAAQgDADgEAAIgBAAgAPRFDIAAAAIAAAAIAAqFI+hAAIAAKFIegAAIAAAAIABAAgAPRlGIAAAAIAAAAg");
	this.shape_3.setTransform(72,40.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,96,96,0.196)").s().p("APQFhI+pAAQgVgCAAgbIAAqLQgBgKAGgIQAGgHAKAAIe0AAQAJAAAGAJQAFAIAAAIIAAKNQAAAJgIAIQgJAKgNAAIgBAAgAvilTIAAABQgDAEABAFIAAACIAAKLQAAARAMACIeoAAQAJABAHgIIAAAAQAFgFAAgFIAAqNQAAgFgDgFIAAAAQgDgFgEAAI+0AAIAAAAQgFAAgEADg");
	this.shape_4.setTransform(72,40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606060").s().p("AvGE5IAApxIeNAAIAAJxg");
	this.shape_5.setTransform(72.1,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape_6.setTransform(7.1,7.2);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(7.1,28.9,1,1,0,0,0,52.8,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_7.setTransform(7.1,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6}]}).wait(1));

	// Layer_2
	this.instance_1 = new lib.Group_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.5,-14.9,1.1,1.1,0,0,0,44.2,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvDGIAAmLIBfAAIAAGLg");
	this.shape_8.setTransform(138.5,-60.4,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtCFIAAkJIBbAAIAAEJg");
	this.shape_9.setTransform(125.1,-53.1,1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBYIAAivIBaAAIAACvg");
	this.shape_10.setTransform(112,-48.1,1.1,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2).p("ANhJhI6zAAIS9y8QC8C9B5DpIBZDJQBoEfAAEug");
	this.shape_11.setTransform(99.1,-55.8,1.1,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D73BB").s().p("AtZJeIS9y8QC7C9B5DqIBZDJQBpEfAAEtg");
	this.shape_12.setTransform(99.9,-55.6,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcInfrastructureMsg, new cjs.Rectangle(-46.7,-123.7,242,227.2), null);


(lib.mcEfficiencyMsg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Vendor management\nCompetitive bidding/economies \nof scale", "13px 'Roboto'", "#606060");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 137;
	this.text.alpha = 0.98823529;
	this.text.parent = this;
	this.text.setTransform(59.9,-3.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape.setTransform(60.4,24.7,1,0.92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,96,96,0.565)").s().p("AqvGiIAAtDIVeAAIAANDgAqkGYIVJAAIAAsvI1JAAg");
	this.shape_1.setTransform(62.9,26.7,1,0.92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,96,96,0.753)").s().p("AqkGYIAAsvIVJAAIAAMvgAqaGOIU2AAIAAsbI02AAg");
	this.shape_2.setTransform(62.9,26.7,1,0.92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,96,96,0.376)").s().p("AqvGsQgJAAgBgKIAAtDQABgKAJABIVeAAQAKgBAAAKIAANDQAAAKgKAAgAqvGiIVeAAIAAtDI1eAAg");
	this.shape_3.setTransform(62.9,26.7,1,0.92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,96,96,0.188)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABgAq5mhIAANDQABAKAJAAIVeAAQAKAAAAgKIAAtDQAAgKgKABI1eAAQgJgBgBAKg");
	this.shape_4.setTransform(62.9,26.7,1,0.92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(96,96,96,0.949)").s().p("AqaGOIAAsbIU2AAIAAMbg");
	this.shape_5.setTransform(62.9,26.7,1,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape_6.setTransform(78,116);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(78,137.7,1,1,0,0,0,52.8,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_7.setTransform(78,116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6}]}).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA1IACgOIAHABQAJAAADgFIAFgMIgchNIAUAAIALAlQAEAPABAHQACgJAEgNIALglIASAAIgcBSQgFAQgGAGQgHAFgNgBIgKgBg");
	this.shape_8.setTransform(49,-23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAfQgHgLAAgTQAAgRAHgMQAJgNARAAIAAAAQAUAAAJASQADAEAAAEIgRAEQgBgGgEgFQgEgFgGAAQgPAAAAAcQAAAbAPAAQAGAAAEgEQAEgFABgGIARAFIgEAJQgJAPgTAAQgRABgJgMg");
	this.shape_9.setTransform(41.9,-25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANApIAAg2QAAgNgJAAQgHAAgJAJIAAA6IgSAAIAAhPIAQAAIABAJQANgLALAAQALAAAFAIQAEAFAAANIAAA3g");
	this.shape_10.setTransform(33.9,-25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAeQgHgLAAgTQAAgSAIgLQAJgMAQAAQARgBAJAMQAIAKAAASIAAAHIgxAAQABAXAPAAQAMAAAGgNIAPAHQgKAUgXAAQgSABgJgNgAAQgIQAAgTgQgBQgNABgCATIAfAAIAAAAg");
	this.shape_11.setTransform(25.7,-25.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA2IAAhPIARAAIAABPgAgJghIAAgUIATAAIAAAUg");
	this.shape_12.setTransform(19.8,-26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAfQgHgLAAgTQAAgRAHgMQAJgNARAAIAAAAQAUAAAJASQADAEAAAEIgRAEQgBgGgEgFQgEgFgGAAQgPAAAAAcQAAAbAPAAQAGAAAEgEQAEgFABgGIARAFIgEAJQgJAPgTAAQgRABgJgMg");
	this.shape_13.setTransform(14.4,-25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA2IAAhPIARAAIAABPgAgIghIAAgUIARAAIAAAUg");
	this.shape_14.setTransform(8.5,-26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLA4IAAhAIgMAAIAAgPIAMAAQAAgRACgFQAFgKAPAAIANABIgBANIgHgBQgIAAgCAHIAAAMIAPAAIAAAPIgPAAIAABAg");
	this.shape_15.setTransform(4.5,-27);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLA4IAAhAIgMAAIAAgPIAMAAQAAgRADgFQAEgKAPAAIANABIgCANIgGgBQgIAAgCAHIAAAMIAPAAIAAAPIgPAAIAABAg");
	this.shape_16.setTransform(-0.3,-27);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggAzIAAhlIA+AAIAAAPIgrAAIAAAbIAjAAIAAAOIgjAAIAAAeIAuAAIAAAPg");
	this.shape_17.setTransform(-6.8,-26.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAoQgNgKgFgQQgGgTAKgTQAKgSAUgFIANgCQAQAAANALQAOAKAFAQQAGATgKASQgKARgUAGIgOACQgQAAgNgKgAgFgUQgIACgFAIQgEAIADAHQACAIAIAFQAIAEAHgCQAIgDAEgHQAFgHgCgIQgCgJgIgFQgFgCgFAAIgGABg");
	this.shape_18.setTransform(44.4,25,1.1,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBBkQgNAAgIgCIgOAZIgxgbIAPgZQgGgGgIgLIgcAIIgPg2IAcgIIADgVIgZgNIAAgBIAbgyIAaAPQAEgGANgIIgIgcIA2gOIAHAcQANAAAHACIAPgbIAwAcIgOAaQAGAFAIALIAbgIIAQA2IgcAHQgBALgDALIAaAOIgbAxIgagOIgRANIAIAcIg2AQgAgRg6QgVAHgMASQgMASACATIABANIACAFIABACIACAFIACABIACADIABADQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAABIABAAIAFAFIAEAEIAEACIACABIACADIAHACIABABIAEACIACAAIAEABIABAAIAFABIAMAAIAGgBIABAAIAEgBIANgEIAKgIIADgDQAGgFAGgJQADgNAGgHIAAgBQABgKgEgNIgCgHIgCgFIgCgDIgCgDIgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgBgCIgEgEIgBAAIgEgDIgBgCIgDgCIgCgBIgDgBIgGgDIgBgCIgFgCIgBAAIgEgBIgCAAIgEAAIgMAAIgGAAIgBAAIgGABg");
	this.shape_19.setTransform(44.4,25.1,1.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AABA9IgLgBQgFAAgGgDQgSgIgKgPQgLgQAAgSQAAgWAPgQQACgFAGgEQAJgHAFgCQAMgEALgBQANABAKAEIADABIANAIQADADAFAHQAOARAAAVQAAAUgJAMIgCADIgGAJQgGAGgMAGQgMAEgHAAgAgOgNQgGAGAAAHQAAAKAGAFQAGAGAIABQAJAAAHgHQAGgGgBgJQAAgHgGgGQgGgGgJAAQgIAAgGAGg");
	this.shape_20.setTransform(15.2,11.2,1.1,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglCrIAAgpQgUgGgIgFIgbAcIg2g2IAcgcIgLgbIgpAAIAAhLIApAAQAGgVAFgGIgcgcIA2g2IAbAcIAcgMIAAgoIBMAAIAAAoQARAGAKAGIAcgcIA2A2IgcAcQAEAIAHATIAnAAIAABLIgnAAQgHAVgEAGIAcAcIg2A2IgcgcQgMAHgPAEIAAApgAg1g0QgVAWAAAeQAAAdAVAWQAWAWAeAAQAeAAAWgWQAUgVAAgeQABgegWgWQgWgVgdAAQgeAAgWAVg");
	this.shape_21.setTransform(15.4,11.4,1.1,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2).p("AJhtfIAAaxIy8y8QDGjGD7h9IDBhSQEThgEnAAg");
	this.shape_22.setTransform(10.3,25.5,1.1,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5BB6E7").s().p("ApdljQDGjGD7h9IDBhSQEThgEnAAIAAaxg");
	this.shape_23.setTransform(10.5,24.7,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcEfficiencyMsg, new cjs.Rectangle(-57.6,-70.6,191.3,282.9), null);


(lib.mcContentMsg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Copywriting\nMotion graphics\nVideo editing\nGraphic design", "normal 400 13px 'Roboto'", "#606060");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(88,13.7);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq7FmQgUAAAAgVIAAqiQAAgTAUgBIV3AAQAUABAAATIAAKiQAAAVgUAAg");
	this.shape.setTransform(87.5,45.3,1,1.14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,96,96,0.596)").s().p("Aq7FRIAAqiIV3AAIAAKigAqxFHIVjAAIAAqNI1jAAg");
	this.shape_1.setTransform(90,47.8,1,1.14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,96,96,0.796)").s().p("AqxFHIAAqNIVjAAIAAKNgAqnE9IVPAAIAAp5I1PAAg");
	this.shape_2.setTransform(90,47.8,1,1.14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,96,96,0.396)").s().p("Aq7FcQgKAAAAgLIAAqiQAAgJAKgBIV3AAQAKABAAAJIAAKiQAAALgKAAgAq7FRIV3AAIAAqiI13AAg");
	this.shape_3.setTransform(90,47.8,1,1.14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,96,96,0.196)").s().p("Aq7FmQgUAAAAgVIAAqiQAAgTAUgBIV3AAQAUABAAATIAAKiQAAAVgUAAgArFlRIAAKiQAAALAKAAIV3AAQAKAAAAgLIAAqiQAAgJgKgBI13AAQgKABAAAJg");
	this.shape_4.setTransform(90,47.8,1,1.14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606060").s().p("AqnE9IAAp5IVPAAIAAJ5g");
	this.shape_5.setTransform(90,47.8,1,1.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape_6.setTransform(186.6,-43.4);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(186.6,-21.7,1,1,0,0,0,52.8,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_7.setTransform(186.6,-43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6}]}).wait(1));

	// Layer_3
	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58,-14.9,1.1,1.1,0,0,0,39.9,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjRCwQgJAAgHgHQgGgHAAgIIAAgRQAfgvAQgTQgDgFAAgHIAAjUQAAgJAHgGQAGgHAJABIFKAAQAJAAAHAFQAGAHAAAJIAADUQAAAHgDAFQAQATAfAvIABARQAAAJgGAGQgHAHgJAAgAjTCZIAAABQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABAAIGjAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAImjAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABgADMCBQgZgigLgOIlPAAQgPASgVAeIGXAAIAAAAgAinA7QAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIFNAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIAAjDIgMAAIAAC3QAAAGgFAAIhEAAQgFAAAAgGIAAi3Ij3AAgABZAqIA6AAIAAhjIg6AAgABZhCIA6AAIAAgfIg6AAgABZhrIA6AAIAAgdIg6AAgAiniZIAAAHIFQAAIAAgHIgCgCIlMAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABg");
	this.shape_8.setTransform(58.8,28,1.1,1.1);

	this.instance_2 = new lib.ClipGroup_20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_3 = new lib.ClipGroup_19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_4 = new lib.ClipGroup_18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_5 = new lib.ClipGroup_17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_6 = new lib.ClipGroup_16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_7 = new lib.ClipGroup_15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_8 = new lib.ClipGroup_14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_9 = new lib.ClipGroup_13();
	this.instance_9.parent = this;
	this.instance_9.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_10 = new lib.ClipGroup_12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_11 = new lib.ClipGroup_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_12 = new lib.ClipGroup_10();
	this.instance_12.parent = this;
	this.instance_12.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_13 = new lib.ClipGroup_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_14 = new lib.ClipGroup_8();
	this.instance_14.parent = this;
	this.instance_14.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_15 = new lib.ClipGroup_7();
	this.instance_15.parent = this;
	this.instance_15.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_16 = new lib.ClipGroup_6();
	this.instance_16.parent = this;
	this.instance_16.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_17 = new lib.ClipGroup_5();
	this.instance_17.parent = this;
	this.instance_17.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_18 = new lib.ClipGroup_4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_19 = new lib.ClipGroup_3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_20 = new lib.ClipGroup_2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_21 = new lib.ClipGroup_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_22 = new lib.ClipGroup_0();
	this.instance_22.parent = this;
	this.instance_22.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.instance_23 = new lib.ClipGroup();
	this.instance_23.parent = this;
	this.instance_23.setTransform(58.9,28,1.1,1.1,0,0,0,23.2,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("AtgpgIayAAIy8S8Qi6i5h7jtIhZjJQhokbAAkyg");
	this.shape_9.setTransform(92.6,26.5,1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D73BB").s().p("AqXC5IhZjKQhpkbAAkxIazAAIy8S8Qi6i6h7jsg");
	this.shape_10.setTransform(91.8,26.3,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_8},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcContentMsg, new cjs.Rectangle(-3.5,-97.2,244,193.4), null);


(lib.mcComplianceMsg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Compliance approvals and documentation Branding, grade-leveling and translation Implementation support \nProject management \nInventory management", "13px 'Roboto'", "#606060");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 263;
	this.text.alpha = 0.92549020;
	this.text.parent = this;
	this.text.setTransform(144.2,13);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0kFrQgXAAAAgXIAAqnQAAgXAXAAMApJAAAQAXAAAAAXIAAKnQAAAXgXAAg");
	this.shape.setTransform(145,52.3,1,1.354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,96,96,0.796)").s().p("A0dFNIAAqZMAo7AAAIAAKZgA0TFDMAonAAAIAAqFMgonAAAg");
	this.shape_1.setTransform(147.5,55.6,1,1.354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,96,96,0.196)").s().p("A0kFrQgXAAAAgXIAAqnQAAgXAXAAMApJAAAQAXAAAAAXIAAKnQAAAXgXAAgA0xlTIAAKnQAAANANAAMApJAAAQANAAAAgNIAAqnQAAgNgNAAMgpJAAAQgNAAAAANg");
	this.shape_2.setTransform(147.5,55.6,1,1.354);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,96,96,0.596)").s().p("A0kFXQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAqnQAAAAAAgBQABgBAAAAQAAAAABgBQABAAAAAAMApJAAAQAAAAABAAQABABAAAAQAAAAABABQAAABAAAAIAAKnQAAABAAAAQgBABAAAAQAAAAgBABQgBAAAAAAgA0dFNMAo7AAAIAAqZMgo7AAAg");
	this.shape_3.setTransform(147.5,55.6,1,1.354);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,96,96,0.396)").s().p("A0kFhQgNAAAAgNIAAqnQAAgNANAAMApJAAAQANAAAAANIAAKnQAAANgNAAgA0nlTIAAKnQAAABAAAAQABABAAAAQAAAAABABQABAAAAAAMApJAAAQAAAAABAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAqnQAAAAAAgBQgBgBAAAAQAAAAgBgBQgBAAAAAAMgpJAAAQAAAAgBAAQgBABAAAAQAAAAgBABQAAABAAAAg");
	this.shape_4.setTransform(147.5,55.6,1,1.354);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606060").s().p("A0TFDIAAqFMAonAAAIAAKFg");
	this.shape_5.setTransform(147.5,55.6,1,1.354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape_6.setTransform(119.5,-43.1);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(119.5,-21.4,1,1,0,0,0,52.8,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_7.setTransform(119.5,-43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6}]}).wait(1));

	// Layer_2
	this.instance_1 = new lib.Group_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(242.7,-14.8,1.1,1.1,0,0,0,39.6,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwDDIgEgEQgIgHgCgNQgHADgIAAQgQAAgLgLQgJgKgBgJIgCgHIgBgIQgPAAgLgLQgMgMABgRQgBgEABgFQgLAAgJgIIgHgHQgKgKAAgNQAAgNAKgLIgCgBQgWgSAIgZIgegaQgDgCAAgEQAAgEACgDIB2iIQACgDAEAAQAEAAADACIAsAkQANgSAZgHQAVgGAVAEIACAAQAUAGAQAKIAggZQAIgFAFAGIB3CJQACADAAADQAAAEgDACIgeAaQAEAKgCALQgDAMgNAKIgKAJIABAGQAAANgJAKQgIAJgKADQAJALgCAOQgBANgJAKQgJANgRABQACAFgCAEQgCALgIAJQgHAJgLADQgRAFgNgKIgCgBIgHAMQgMAMgOAAQgIAAgGgEIgLALQgKAKgOAAQgPAAgKgKgAgSCHIgEADIgRARQgFAFAAAHQAAAHAFAFIAEAEQAEAFAHAAQAHAAAFgFIAUgYQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABgEgDgHIgGgHQgFgFgGAAQgEAAgEACgAAaCPQACAGAAAEQAAAKgEAJQAHABAGgHIADgHQACgGgEgEIgQgOgAhABhIgbAbQgHAIACAIQAAAFAFAGQAFAGAIAAQAIAAAGgGIAdgdQAJgOgLgLQgFgFgIAAQgIAAgGAFgAAUBvIAwAoQAHAFAHgDQAPgFABgNQAAgIgFgFIgwgoQgGgGAFgIQACgDAEAAQAEAAADACIAwAoIABABQALAKANgNQAEgGACgGQABgIgGgFIgxgqQgDgCAAgEQAAgEACgDQACgDAEgBQAEAAADACIAhAdIACABQAFACAIgEQAGgDADgDQAFgIgCgGQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgDgEgFIgEgEQgSgQh6hhQgNAEgVAMIgHAEQgKAGgUAIIgUAFIgJABIgEAAQgSgBgMgLQgOgMACgSQABgPAMgIQANgIAUABQARABAPgXIgnggIhqB7IAdAZQAGAFgEAHQgDAFAAAGQABAJAJAHIAEAEIAIgDQAHgBAHABIAKAEIANAMQAIAIABAIQAMgJAOABQAOABAKAKQALALAAAQIAAAGIABAAQAQAAALALQANANgCASIABABIABAAQAKAAAHAFQgCgDADgGQACgDAEAAIABAAQAEAAACACgAhnA0IgbAbQgFAFAAAHQgCAJAHAHQAGAGAIAAQAIAAAGgGIAbgbQAGgHAAgHQAAgHgGgHQgGgGgIAAQgIAAgGAGgAigAYIgIAIQgEAGAAADIAAABQAAAGAEAEIAGAGIAFAEQAHAFAJgHIAFgEIAFgGQABgDAAgEQAAgCgCgEIgCgEIgOgLIgCAAIgDAAQgEAAgDACgAAhhvIAHAFQAGAIgGAGIgCABIB4BgIAGAGIAHgGQAJgIAAgKQABgGgDgDQgDgHAFgFIAdgWIhqh7IgeAXQgGADgFgDQgRgMgQgEIAAgBIgDAAQgNgFgUAGIgKAEQgMAEgHALIgDAEIgCAEIgFAIQgVAfgbgCQgIgCgIADQgLADAAAJQgBAKAJAGQAHAFAKABQAPABAkgRIAJgEIAXgLIAEgCIAIgDIABgCIALgDIAFAAQAKAAAHADg");
	this.shape_8.setTransform(240.1,40.8,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("ANhpgQAAEohiEXIhWDIQh6DzjEDCIy9y8g");
	this.shape_9.setTransform(211.4,26.6,1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BA1D84").s().p("AtZpdIazAAQAAEnhiEXIhWDIQh7DzjDDDg");
	this.shape_10.setTransform(212.2,26.3,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcComplianceMsg, new cjs.Rectangle(10.5,-96.9,297.1,201.7), null);


(lib.mcCampaignMsg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Media buying and placement\nCampaign assessment\nTesting and reporting\nQuality assurance", "normal 400 13px 'Roboto'", "#606060");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 177;
	this.text.alpha = 0.93333333;
	this.text.parent = this;
	this.text.setTransform(90.7,27.9);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("At5GzQgUAAAAgUIAAs9QAAgUAUAAIbzAAQAUAAAAAUIAAM9QAAAUgUAAg");
	this.shape.setTransform(91,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,96,96,0.596)").s().p("At5GfIAAs9IbzAAIAAM9gAtvGVIbfAAIAAspI7fAAg");
	this.shape_1.setTransform(93.5,56.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,96,96,0.796)").s().p("AtvGVIAAspIbfAAIAAMpgAtlGLIbLAAIAAsVI7LAAg");
	this.shape_2.setTransform(93.5,56.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,96,96,0.396)").s().p("At5GpQgKAAAAgKIAAs9QAAgKAKAAIbzAAQAKAAAAAKIAAM9QAAAKgKAAgAt5GfIbzAAIAAs9I7zAAg");
	this.shape_3.setTransform(93.5,56.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,96,96,0.196)").s().p("At5GzQgUAAAAgUIAAs9QAAgUAUAAIbzAAQAUAAAAAUIAAM9QAAAUgUAAgAuDmeIAAM9QAAAKAKAAIbzAAQAKAAAAgKIAAs9QAAgKgKAAI7zAAQgKAAAAAKg");
	this.shape_4.setTransform(93.5,56.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606060").s().p("AtlGLIAAsVIbLAAIAAMVg");
	this.shape_5.setTransform(93.5,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape_6.setTransform(-8.5,-25);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(-8.5,-3.3,1,1,0,0,0,52.8,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_7.setTransform(-8.5,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6}]}).wait(1));

	// Layer_5
	this.instance_1 = new lib.Group_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.8,125.8,1.1,1.1,0,0,0,45.2,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1AJQgDAAgDgDQgDgCAAgEQABgIAIAAIBqAAQAJAAAAAIQAAAEgCACQgDADgEAAg");
	this.shape_8.setTransform(30.4,82,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1AJQgDAAgDgDQgDgCAAgEQABgIAIAAIBqAAQAJAAAAAIQAAAEgCACQgDADgEAAg");
	this.shape_9.setTransform(30.4,74.9,1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAUIgOgNQgCgCAAgEQAAgDACgDQACgBAEAAQADAAADABIAIAIIAXgYQADgCADAAQAEAAACACQACADAAADQAAAFgCACIgdAcQgBADgFAAQgDAAgDgDg");
	this.shape_10.setTransform(18.4,67.6,1.1,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1AJQgDAAgDgCQgDgDAAgEQAAgDADgDQADgCADAAIBqAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAg");
	this.shape_11.setTransform(30.4,67.6,1.1,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAUIgOgNQgCgDAAgEQAAgCACgDQACgCAEAAQAEAAACACIAIAHIAXgWQADgCADgBQAEABACACQACACAAADQAAAFgCABIgdAdQgCAEgEAAQgDAAgDgEg");
	this.shape_12.setTransform(18.4,60.5,1.1,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1AJQgDAAgDgDQgDgCAAgEQAAgCADgDQADgDADAAIBqAAQAEAAADADQACADAAACQAAAEgCACQgDADgEAAg");
	this.shape_13.setTransform(30.4,60.5,1.1,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah3DXQgIABgFgHQgGgFgBgIQgHAAgGgHQgGgFAAgIIAAlMQAAgKAHgFQAGgHAJAAIAmAAIAAgEQAAgJAIABIAvAAQADgBAHgMQAHgLASgBQAQABAIALQAHAMADABIAuAAQAIgBAAAJIAAAEIAnAAQAIAAAGAGQAFAFABAIQAIABAFAGQAGAGABAKIAAFMQAAAHgHAGQgGAHgIgBgAiMifIAAFMQAAABAAABQAAAAAAABQABAAAAAAQAAAAABABID/AAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBIAAlNIgDgCIgnAAIAAAGQAAAHgIAAIigAAQgIAAAAgHIAAgGIgnAAQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAgAgUi9QAAAFADADQAEACADAAQAEABADgDQADgDAAgFQAAgKgKABQgKgBAAAKg");
	this.shape_14.setTransform(27.6,69.5,1.1,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("ApfNhIAA6zIS7S8QjFDHj9B8IjBBSQkSBikmAAg");
	this.shape_15.setTransform(58,71.3,1.1,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5BB6E7").s().p("ApdtZIS7S8QjFDHj9B8IjBBSQkSBikmAAg");
	this.shape_16.setTransform(57.7,72.1,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcCampaignMsg, new cjs.Rectangle(-62.3,-78.8,246.8,246.3), null);


(lib.mcAnalyticsMsg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Opportunity assessment\nMarket share analysis", "normal 400 13px 'Roboto'", "#606060");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 146;
	this.text.parent = this;
	this.text.setTransform(-1,-24.5);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArbESQgVAAABgUIAAn7QgBgUAVAAIW4AAQATAAABAUIAAH7QgBAUgTAAg");
	this.shape.setTransform(-0.7,-11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,96,96,0.796)").s().p("ArRD0IAAnnIWjAAIAAHngArHDqIWPAAIAAnTI2PAAg");
	this.shape_1.setTransform(1.8,-8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,96,96,0.596)").s().p("ArbD+IAAn7IW3AAIAAH7gArRD0IWjAAIAAnnI2jAAg");
	this.shape_2.setTransform(1.8,-8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,96,96,0.396)").s().p("ArbEIQgLAAAAgKIAAn7QAAgKALAAIW3AAQAKAAAAAKIAAH7QAAAKgKAAgArbD+IW3AAIAAn7I23AAg");
	this.shape_3.setTransform(1.8,-8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,96,96,0.196)").s().p("ArbESQgVAAAAgUIAAn7QAAgUAVAAIW3AAQAVAAAAAUIAAH7QAAAUgVAAgArmj9IAAH7QAAAKALAAIW3AAQAKAAAAgKIAAn7QAAgKgKAAI23AAQgLAAAAAKg");
	this.shape_4.setTransform(1.8,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606060").s().p("ArHDqIAAnTIWPAAIAAHTg");
	this.shape_5.setTransform(1.8,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape_6.setTransform(-93.5,88.1);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,109.8,1,1,0,0,0,52.8,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_7.setTransform(-93.5,88.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6}]}).wait(1));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAeIgEgGIAOgHQADAFAFADQAGADAEAAQAOAAAAgIQAAgFgHgEIgNgGQgLgDgEgEQgHgGAAgKQAAgMAJgGQAIgFALgBQASAAAIAMIAEAFIgPAHQgBgEgFgCQgDgDgGAAQgLAAAAAIQAAAEAHAEIANAGQALAEAEADQAHAHAAAJQAAAYgfAAQgSAAgKgMg");
	this.shape_8.setTransform(-19.1,-51.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAeQgHgKAAgSQAAgSAHgLQAJgOARgBIAAAAQAUABAJARQADAFAAAEIgRADQgBgFgEgFQgEgFgGAAQgPAAAAAcQAAAbAPAAQAGAAAEgFQAEgEABgGIARAGIgEAJQgJAOgTAAQgRAAgJgMg");
	this.shape_9.setTransform(-26.1,-51.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA2IAAhPIARAAIAABPgAgIghIAAgUIARAAIAAAUg");
	this.shape_10.setTransform(-32,-52.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAwQgEgGAAgMIAAgqIgNAAIAAgPIANAAIAAgVIARgEIAAAZIARAAIAAAPIgRAAIAAAqQAAAEACACQACADAFAAQAEAAAFgCIABAOQgJACgGAAQgLAAgGgFg");
	this.shape_11.setTransform(-36.4,-52.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghA2IACgPIAHABQAJAAADgEIAFgNIgchMIAUAAIALAlQAEAOABAHQACgJAEgMIALglIASAAIgcBRQgFAQgGAGQgHAEgNABIgKgBg");
	this.shape_12.setTransform(-42.6,-49.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIA2IAAhrIARAAIAABrg");
	this.shape_13.setTransform(-48,-52.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAkQgGgFAAgLQgBgQARgGQAJgFATgDIAAgEQAAgGgEgEQgDgDgHAAQgEABgEACQgFADgBAEIgPgHQAEgIAJgFQAJgEAJAAQAeAAAAAZIAAA5IgRAAIAAgJQgJAKgNAAQgKAAgHgGgAgDAFQgKAEABAJQAAAKAKAAQAHAAAJgJIAAgSQgMACgFACg");
	this.shape_14.setTransform(-54.1,-51.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANApIAAg2QAAgNgJAAQgHAAgJAJIAAA6IgSAAIAAhPIAQAAIABAJQANgLALAAQALAAAFAIQAEAFAAANIAAA3g");
	this.shape_15.setTransform(-61.9,-51.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAzIgHgZIggAAIgHAZIgUAAIAghlIAYAAIAfBlgAAMALIgJgfIgDgRIgEARIgJAfIAZAAg");
	this.shape_16.setTransform(-70.4,-52.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACcDIIh5h5QgnAXgqAAQhBAAgtgtQgtgtAAhAQAAhBAtgsQAuguBAAAQA/AAAuAuQAtAtAABAQAAA1ggApIB3B3QAHAJAAALQAAALgJAIQgIAIgKAAQgLAAgIgIgAiPiUQgpAoAAA5QAAA4ApAoQAoAoA4AAQA4AAAogoQAogoAAg4QAAg5gogoQgogog4AAQg4AAgoAog");
	this.shape_17.setTransform(-49.9,-13.4,1.1,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2).p("AJglqIy8S8IAA6xQEbAAEOBaIDFBSQECB9DMDMg");
	this.shape_18.setTransform(-27.7,-2.9,1.1,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A2B439").s().p("ApetYQEbAAEOBaIDFBSQECB9DNDMIy9S8g");
	this.shape_19.setTransform(-27.5,-3.7,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcAnalyticsMsg, new cjs.Rectangle(-147.3,-99,224.3,283.3), null);


(lib.btnProduction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(72.1,130.3,1,1,0,0,0,36.6,15.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJDJQgKgBgGgIIgBgBIgCgIIAAgQIgTAAIgHgBIgBgBIgCgBQgEgCgBgDIgCgGIgBgCIAAgaIgTAAQgKAAgFgIIgBgBIgCgJIAAkhIACgJIABgBIACgCIAGgFIAHgBIDeAAIAHABIADACIADADQAGAEAAAIIAAAYIATAAQAKAAAFAIIABABIACAJIAAAPIATAAQAHABAGAEIAEAHQACAFgBABIAAEiQAAAFgDAFIgCACQgFAFgIABgAhMC3QAAAAAAAAQAAABAAAAQAAAAABAAQAAABABAAIDeAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIAAkiQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgTAAIAAEEIgBACQAAAEgCACQgCADgDACQgFADgFAAIi7AAgAhwCUQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIDeAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIAAkhQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgTAAIAAD6QAAAJgGAFQgGAGgHgBIi6AAgAiXi1IAAEhQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIDeAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAkhQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIjeAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape.setTransform(88.6,83.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("ApfFqIS8y8IAAazQkaAAkPhbIjEhSQkCh8jNjOg");
	this.shape_1.setTransform(60.8,85.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2B439").s().p("AA1L/IjEhSQkCh8jMjOIS8y8IAAazQkaAAkQhbg");
	this.shape_2.setTransform(60.7,85.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:60.7,y:85.8}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:60.8,y:85.1}},{t:this.shape,p:{scaleX:1,scaleY:1,x:88.6,y:83.3}},{t:this.instance,p:{regY:15.1,scaleX:1,scaleY:1,x:72.1,y:130.3}}]}).to({state:[{t:this.shape_2,p:{scaleX:1.1,scaleY:1.1,x:54.2,y:94.3}},{t:this.shape_1,p:{scaleX:1.1,scaleY:1.1,x:54.3,y:93.5}},{t:this.shape,p:{scaleX:1.1,scaleY:1.1,x:84.9,y:91.5}},{t:this.instance,p:{regY:15.2,scaleX:1.1,scaleY:1.1,x:66.7,y:143.4}}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-2.4,123.7,175);


(lib.btnInfrastructure = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_5();
	this.instance.parent = this;
	this.instance.setTransform(110,97.7,1,1,0,0,0,44.1,15.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvDGIAAmLIBfAAIAAGLg");
	this.shape.setTransform(121,56.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtCFIAAkJIBbAAIAAEJg");
	this.shape_1.setTransform(108.8,62.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsBYIAAivIBaAAIAACvg");
	this.shape_2.setTransform(96.8,67.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2).p("ANhJhI6zAAIS9y8QC8C9B5DpIBZDJQBoEfAAEug");
	this.shape_3.setTransform(85.1,60.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D73BB").s().p("AtZJeIS9y8QC7C9B5DqIBZDJQBpEfAAEtg");
	this.shape_4.setTransform(85.8,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:1,scaleY:1,x:85.8,y:60.7}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:85.1,y:60.4}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:96.8,y:67.5}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:108.8,y:62.9}},{t:this.shape,p:{scaleX:1,scaleY:1,x:121,y:56.4}},{t:this.instance,p:{regX:44.1,scaleX:1,scaleY:1,x:110,y:97.7}}]}).to({state:[{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:93.3,y:55.7}},{t:this.shape_3,p:{scaleX:1.1,scaleY:1.1,x:92.5,y:55.5}},{t:this.shape_2,p:{scaleX:1.1,scaleY:1.1,x:105.4,y:63.2}},{t:this.shape_1,p:{scaleX:1.1,scaleY:1.1,x:118.6,y:58.2}},{t:this.shape,p:{scaleX:1.1,scaleY:1.1,x:132,y:50.9}},{t:this.instance,p:{regX:44.2,scaleX:1.1,scaleY:1.1,x:119.9,y:96.4}}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-1.4,175,123.7);


(lib.btnContent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(55.1,23.3,1,1,0,0,0,39.9,15.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjRCwQgJAAgHgHQgGgHAAgIIAAgRQAfgvAQgTQgDgFAAgHIAAjUQAAgJAHgGQAGgHAJABIFKAAQAJAAAHAFQAGAHAAAJIAADUQAAAHgDAFQAQATAfAvIABARQAAAJgGAGQgHAHgJAAgAjTCZIAAABQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABAAIGjAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAImjAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABgADMCBQgZgigLgOIlPAAQgPASgVAeIGXAAIAAAAgAinA7QAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIFNAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIAAjDIgMAAIAAC3QAAAGgFAAIhEAAQgFAAAAgGIAAi3Ij3AAgABZAqIA6AAIAAhjIg6AAgABZhCIA6AAIAAgfIg6AAgABZhrIA6AAIAAgdIg6AAgAiniZIAAAHIFQAAIAAgHIgCgCIlMAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABg");
	this.shape.setTransform(55.8,62.3);

	this.instance_1 = new lib.ClipGroup_20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_2 = new lib.ClipGroup_19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_3 = new lib.ClipGroup_18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_4 = new lib.ClipGroup_17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_5 = new lib.ClipGroup_16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_6 = new lib.ClipGroup_15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_7 = new lib.ClipGroup_14();
	this.instance_7.parent = this;
	this.instance_7.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_8 = new lib.ClipGroup_13();
	this.instance_8.parent = this;
	this.instance_8.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_9 = new lib.ClipGroup_12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_10 = new lib.ClipGroup_11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_11 = new lib.ClipGroup_10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_12 = new lib.ClipGroup_9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_13 = new lib.ClipGroup_8();
	this.instance_13.parent = this;
	this.instance_13.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_14 = new lib.ClipGroup_7();
	this.instance_14.parent = this;
	this.instance_14.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_15 = new lib.ClipGroup_6();
	this.instance_15.parent = this;
	this.instance_15.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_16 = new lib.ClipGroup_5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_17 = new lib.ClipGroup_4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_18 = new lib.ClipGroup_3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_19 = new lib.ClipGroup_2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_20 = new lib.ClipGroup_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_21 = new lib.ClipGroup_0();
	this.instance_21.parent = this;
	this.instance_21.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.instance_22 = new lib.ClipGroup();
	this.instance_22.parent = this;
	this.instance_22.setTransform(55.9,62.3,1,1,0,0,0,23.2,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("AtgpgIayAAIy8S8Qi6i5h7jtIhZjJQhokbAAkyg");
	this.shape_1.setTransform(86.5,60.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D73BB").s().p("AqXC5IhZjKQhpkbAAkxIazAAIy8S8Qi6i6h7jsg");
	this.shape_2.setTransform(85.8,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:85.8,y:60.7}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:86.5,y:60.9}},{t:this.instance_22,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_21,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_20,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_19,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_18,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_17,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_16,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_15,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_13,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_12,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_11,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_10,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_9,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_8,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_7,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:55.9,y:62.3}},{t:this.shape,p:{scaleX:1,scaleY:1,x:55.8,y:62.3}},{t:this.instance,p:{scaleX:1,scaleY:1,x:55.1,y:23.3}}]}).to({state:[{t:this.shape_2,p:{scaleX:1.1,scaleY:1.1,x:77.3,y:67.2}},{t:this.shape_1,p:{scaleX:1.1,scaleY:1.1,x:78.1,y:67.4}},{t:this.instance_22,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_21,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_20,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_19,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_18,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_17,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_16,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_15,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_14,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_13,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_12,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_11,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_10,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_9,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_8,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_7,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_6,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_5,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_4,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_3,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_2,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance_1,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.shape,p:{scaleX:1.1,scaleY:1.1,x:44.4,y:68.9}},{t:this.instance,p:{scaleX:1.1,scaleY:1.1,x:43.6,y:26}}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,174.9,123.7);


(lib.btnCompliance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(115.5,23.3,1,1,0,0,0,39.5,15.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwDDIgEgEQgIgHgCgNQgHADgIAAQgQAAgLgLQgJgKgBgJIgCgHIgBgIQgPAAgLgLQgMgMABgRQgBgEABgFQgLAAgJgIIgHgHQgKgKAAgNQAAgNAKgLIgCgBQgWgSAIgZIgegaQgDgCAAgEQAAgEACgDIB2iIQACgDAEAAQAEAAADACIAsAkQANgSAZgHQAVgGAVAEIACAAQAUAGAQAKIAggZQAIgFAFAGIB3CJQACADAAADQAAAEgDACIgeAaQAEAKgCALQgDAMgNAKIgKAJIABAGQAAANgJAKQgIAJgKADQAJALgCAOQgBANgJAKQgJANgRABQACAFgCAEQgCALgIAJQgHAJgLADQgRAFgNgKIgCgBIgHAMQgMAMgOAAQgIAAgGgEIgLALQgKAKgOAAQgPAAgKgKgAgSCHIgEADIgRARQgFAFAAAHQAAAHAFAFIAEAEQAEAFAHAAQAHAAAFgFIAUgYQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABgEgDgHIgGgHQgFgFgGAAQgEAAgEACgAAaCPQACAGAAAEQAAAKgEAJQAHABAGgHIADgHQACgGgEgEIgQgOgAhABhIgbAbQgHAIACAIQAAAFAFAGQAFAGAIAAQAIAAAGgGIAdgdQAJgOgLgLQgFgFgIAAQgIAAgGAFgAAUBvIAwAoQAHAFAHgDQAPgFABgNQAAgIgFgFIgwgoQgGgGAFgIQACgDAEAAQAEAAADACIAwAoIABABQALAKANgNQAEgGACgGQABgIgGgFIgxgqQgDgCAAgEQAAgEACgDQACgDAEgBQAEAAADACIAhAdIACABQAFACAIgEQAGgDADgDQAFgIgCgGQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgDgEgFIgEgEQgSgQh6hhQgNAEgVAMIgHAEQgKAGgUAIIgUAFIgJABIgEAAQgSgBgMgLQgOgMACgSQABgPAMgIQANgIAUABQARABAPgXIgnggIhqB7IAdAZQAGAFgEAHQgDAFAAAGQABAJAJAHIAEAEIAIgDQAHgBAHABIAKAEIANAMQAIAIABAIQAMgJAOABQAOABAKAKQALALAAAQIAAAGIABAAQAQAAALALQANANgCASIABABIABAAQAKAAAHAFQgCgDADgGQACgDAEAAIABAAQAEAAACACgAhnA0IgbAbQgFAFAAAHQgCAJAHAHQAGAGAIAAQAIAAAGgGIAbgbQAGgHAAgHQAAgHgGgHQgGgGgIAAQgIAAgGAGgAigAYIgIAIQgEAGAAADIAAABQAAAGAEAEIAGAGIAFAEQAHAFAJgHIAFgEIAFgGQABgDAAgEQAAgCgCgEIgCgEIgOgLIgCAAIgDAAQgEAAgDACgAAhhvIAHAFQAGAIgGAGIgCABIB4BgIAGAGIAHgGQAJgIAAgKQABgGgDgDQgDgHAFgFIAdgWIhqh7IgeAXQgGADgFgDQgRgMgQgEIAAgBIgDAAQgNgFgUAGIgKAEQgMAEgHALIgDAEIgCAEIgFAIQgVAfgbgCQgIgCgIADQgLADAAAJQgBAKAJAGQAHAFAKABQAPABAkgRIAJgEIAXgLIAEgCIAIgDIABgCIALgDIAFAAQAKAAAHADg");
	this.shape.setTransform(111.1,66.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("ANhpgQAAEohiEXIhWDIQh6DzjEDCIy9y8g");
	this.shape_1.setTransform(85.1,60.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA1D84").s().p("AtZpdIazAAQAAEnhiEXIhWDIQh7DzjDDDg");
	this.shape_2.setTransform(85.8,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:85.8,y:60.7}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:85.1,y:60.9}},{t:this.shape,p:{scaleX:1,scaleY:1,x:111.1,y:66.5}},{t:this.instance,p:{regX:39.5,scaleX:1,scaleY:1,x:115.5,y:23.3}}]}).to({state:[{t:this.shape_2,p:{scaleX:1.1,scaleY:1.1,x:93.3,y:66.2}},{t:this.shape_1,p:{scaleX:1.1,scaleY:1.1,x:92.5,y:66.4}},{t:this.shape,p:{scaleX:1.1,scaleY:1.1,x:121.2,y:72.6}},{t:this.instance,p:{regX:39.6,scaleX:1.1,scaleY:1.1,x:123.8,y:25}}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-1,175,123.6);


(lib.btnCampaign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(54.4,134.6,1,1,0,0,0,45.2,22.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1AJQgDAAgDgDQgDgCAAgEQABgIAIAAIBqAAQAJAAAAAIQAAAEgCACQgDADgEAAg");
	this.shape.setTransform(35.8,94.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1AJQgDAAgDgDQgDgCAAgEQABgIAIAAIBqAAQAJAAAAAIQAAAEgCACQgDADgEAAg");
	this.shape_1.setTransform(35.8,88.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAUIgOgNQgCgCAAgEQAAgDACgDQACgBAEAAQADAAADABIAIAIIAXgYQADgCADAAQAEAAACACQACADAAADQAAAFgCACIgdAcQgBADgFAAQgDAAgDgDg");
	this.shape_2.setTransform(24.9,81.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1AJQgDAAgDgCQgDgDAAgEQAAgDADgDQADgCADAAIBqAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAg");
	this.shape_3.setTransform(35.8,81.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAUIgOgNQgCgDAAgEQAAgCACgDQACgCAEAAQAEAAACACIAIAHIAXgWQADgCADgBQAEABACACQACACAAADQAAAFgCABIgdAdQgCAEgEAAQgDAAgDgEg");
	this.shape_4.setTransform(24.9,75.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1AJQgDAAgDgDQgDgCAAgEQAAgCADgDQADgDADAAIBqAAQAEAAADADQACADAAACQAAAEgCACQgDADgEAAg");
	this.shape_5.setTransform(35.8,75.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah3DXQgIABgFgHQgGgFgBgIQgHAAgGgHQgGgFAAgIIAAlMQAAgKAHgFQAGgHAJAAIAmAAIAAgEQAAgJAIABIAvAAQADgBAHgMQAHgLASgBQAQABAIALQAHAMADABIAuAAQAIgBAAAJIAAAEIAnAAQAIAAAGAGQAFAFABAIQAIABAFAGQAGAGABAKIAAFMQAAAHgHAGQgGAHgIgBgAiMifIAAFMQAAABAAABQAAAAAAABQABAAAAAAQAAAAABABID/AAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBIAAlNIgDgCIgnAAIAAAGQAAAHgIAAIigAAQgIAAAAgHIAAgGIgnAAQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAgAgUi9QAAAFADADQAEACADAAQAEABADgDQADgDAAgFQAAgKgKABQgKgBAAAKg");
	this.shape_6.setTransform(33.2,83.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("ApfNhIAA6zIS7S8QjFDHj9B8IjBBSQkSBikmAAg");
	this.shape_7.setTransform(60.8,85.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5BB6E7").s().p("ApdtZIS7S8QjFDHj9B8IjBBSQkSBikmAAg");
	this.shape_8.setTransform(60.6,85.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{scaleX:1,scaleY:1,x:60.6,y:85.8}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:60.8,y:85.1}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:33.2,y:83.4}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:35.8,y:75.3}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:24.9,y:75.3}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:35.8,y:81.7}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:24.9,y:81.8}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:35.8,y:88.3}},{t:this.shape,p:{scaleX:1,scaleY:1,x:35.8,y:94.8}},{t:this.instance,p:{regY:22.1,scaleX:1,scaleY:1,x:54.4,y:134.6}}]}).to({state:[{t:this.shape_8,p:{scaleX:1.1,scaleY:1.1,x:66.6,y:94.3}},{t:this.shape_7,p:{scaleX:1.1,scaleY:1.1,x:66.9,y:93.5}},{t:this.shape_6,p:{scaleX:1.1,scaleY:1.1,x:36.5,y:91.7}},{t:this.shape_5,p:{scaleX:1.1,scaleY:1.1,x:39.3,y:82.7}},{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:27.3,y:82.8}},{t:this.shape_3,p:{scaleX:1.1,scaleY:1.1,x:39.3,y:89.8}},{t:this.shape_2,p:{scaleX:1.1,scaleY:1.1,x:27.3,y:89.9}},{t:this.shape_1,p:{scaleX:1.1,scaleY:1.1,x:39.3,y:97.1}},{t:this.shape,p:{scaleX:1.1,scaleY:1.1,x:39.3,y:104.3}},{t:this.instance,p:{regY:22.2,scaleX:1.1,scaleY:1.1,x:59.7,y:148}}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.4,123.6,175);


// stage content:
(lib.OurServiceWheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{instInfrastructure:0});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		   Hiding all popup elements
		*/
		this.Inst_AnalyticsMsg.visible = false;
		this.inst_btnAnalyticsClose.visible = false;
		
		this.inst_infrastructureMsg.visible = false;
		this.inst_btnInfrastructureClose.visible = false;
		
		this.inst_ComplianceMsg.visible = false;
		this.inst_btnComplianceClose.visible = false;
		
		this.isnt_CampaginMsg.visible = false;
		this.inst_btnCampaignClose.visible = false;
		
		this.inst_ProductionMsg.visible = false;
		this.inst_btnProductionClose.visible = false;
		
		this.inst_ContentMsg.visible = false;
		this.inst_btnContentClose.visible = false;
		
		this.inst_StrategyMsg.visible = false;
		this.isnt_btnStrategyClose.visible = false;
		
		this.inst_EfficiencyMsg.visible = false;
		this.inst_btnEfficiencyClose.visible = false;
		
		
		
		/* ------------------Analitics Message functions------------------*/
		/* Click to show button closing the box*/
		this.Inst_btnAnalytics_Show.addEventListener("click", fl_ClickToHide.bind(this));
		
		function fl_ClickToHide()
		{
			this.inst_btnAnalyticsClose.visible = true;
			this.Inst_AnalyticsMsg.visible = true;
			
			/* hide all other open popups*/
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
		
		/* Message box closing the box*/
		this.Inst_AnalyticsMsg.addEventListener("click", fl_ClickToHide_4.bind(this));
		
		function fl_ClickToHide_4()
		{
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		}
		
		/* Close button closing the box*/
		this.inst_btnAnalyticsClose.addEventListener("click", fl_ClickToHide_5.bind(this));
		
		function fl_ClickToHide_5()
		{
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		}
		
		
		
		
		/* ---------------Infrastructure Message functions------------------*/
		/* Click to show button closing the box*/
		this.Inst_btnInfrastructure.addEventListener("click", fl_ClickToHide_6.bind(this));
		
		function fl_ClickToHide_6()
		{
			this.inst_infrastructureMsg.visible = true;
			this.inst_btnInfrastructureClose.visible = true;
			
			/* hide all other open popups*/
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
		
		/* click box to close pop up*/
		this.inst_infrastructureMsg.addEventListener("click", fl_ClickToHide_7.bind(this));
		
		function fl_ClickToHide_7()
		{
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		}
		
		/* Click to x to close pop up*/
		this.inst_btnInfrastructureClose.addEventListener("click", fl_ClickToHide_8.bind(this));
		
		function fl_ClickToHide_8()
		{
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		}
		
		
		
		
		/* ---------------Compliance Message functions------------------*/
		/* Click to show message and X
		*/
		this.inst_btnCompliance.addEventListener("click", fl_ClickToHide_9.bind(this));
		
		function fl_ClickToHide_9()
		{
			this.inst_ComplianceMsg.visible = true;
			this.inst_btnComplianceClose.visible = true;
			
			/* hide all other open popups*/
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
		
		/* Click message to hide message and x
		*/
		this.inst_ComplianceMsg.addEventListener("click", fl_ClickToHide_10.bind(this));
		
		function fl_ClickToHide_10()
		{
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		}
		
		/* Click x to hide message and x
		*/
		this.inst_btnComplianceClose.addEventListener("click", fl_ClickToHide_11.bind(this));
		
		function fl_ClickToHide_11()
		{
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		}
		
		
		/* ---------------Campaign Message functions------------------*/
		/* Click to show message and X
		*/
		this.inst_btnCampaign.addEventListener("click", fl_ClickToHide_12.bind(this));
		
		function fl_ClickToHide_12()
		{
			this.isnt_CampaginMsg.visible = true;
			this.inst_btnCampaignClose.visible = true;
			
			/* hide all other open popups*/
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
		
		/* Click message to hide message and x
		*/
		this.isnt_CampaginMsg.addEventListener("click", fl_ClickToHide_13.bind(this));
		
		function fl_ClickToHide_13()
		{
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		}
		
		/* Click x to hide message and x
		*/
		this.inst_btnCampaignClose.addEventListener("click", fl_ClickToHide_14.bind(this));
		
		function fl_ClickToHide_14()
		{
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		}
		
		
		
		
		/* ---------------Production Message functions------------------*/
		/* Click to show message and X
		*/
		this.inst_btnProduction.addEventListener("click", fl_ClickToHide_15.bind(this));
		
		function fl_ClickToHide_15()
		{
			this.inst_ProductionMsg.visible = true;
			this.inst_btnProductionClose.visible = true;
			
			/* hide all other open popups*/
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
		
		/* Click message to hide message and x
		*/
		this.inst_ProductionMsg.addEventListener("click", fl_ClickToHide_16.bind(this));
		
		function fl_ClickToHide_16()
		{
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		}
		
		/* Click x to hide message and x
		*/
		this.inst_btnProductionClose.addEventListener("click", fl_ClickToHide_17.bind(this));
		
		function fl_ClickToHide_17()
		{
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		}
		
		
		
		
		/* ---------------Content Message functions------------------*/
		/* Click to show message and X
		*/
		this.inst_Content.addEventListener("click", fl_ClickToHide_18.bind(this));
		
		function fl_ClickToHide_18()
		{
			this.inst_ContentMsg.visible = true;
			this.inst_btnContentClose.visible = true;
			
			/* hide all other open popups*/
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
		
		/* Click message to hide message and x
		*/
		this.inst_ContentMsg.addEventListener("click", fl_ClickToHide_19.bind(this));
		
		function fl_ClickToHide_19()
		{
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		}
		
		/* Click x to hide message and x
		*/
		this.inst_btnContentClose.addEventListener("click", fl_ClickToHide_20.bind(this));
		
		function fl_ClickToHide_20()
		{
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		}
		
		
		
		
		
		/* ---------------Strategy Message functions------------------*/
		/* Click to show message and X
		*/
		this.ints_btnStrategy.addEventListener("click", fl_ClickToHide_21.bind(this));
		
		function fl_ClickToHide_21()
		{
			this.inst_StrategyMsg.visible = true;
			this.isnt_btnStrategyClose.visible = true;
			
			/* hide all other open popups*/
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
		
		/* Click message to hide message and x
		*/
		this.inst_StrategyMsg.addEventListener("click", fl_ClickToHide_22.bind(this));
		
		function fl_ClickToHide_22()
		{
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		}
		
		/* Click x to hide message and x
		*/
		this.isnt_btnStrategyClose.addEventListener("click", fl_ClickToHide_23.bind(this));
		
		function fl_ClickToHide_23()
		{
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		}
		
		
		
		
		/* ---------------Efficiency Message functions------------------*/
		/* Click to show message and X
		*/
		this.inst_btnEfficiency.addEventListener("click", fl_ClickToHide_24.bind(this));
		
		function fl_ClickToHide_24()
		{
			this.inst_EfficiencyMsg.visible = true;
			this.inst_btnEfficiencyClose.visible = true;
			
			/* hide all other open popups*/
			this.Inst_AnalyticsMsg.visible = false;
			this.inst_btnAnalyticsClose.visible = false;
		
			this.inst_infrastructureMsg.visible = false;
			this.inst_btnInfrastructureClose.visible = false;
		
			this.inst_ComplianceMsg.visible = false;
			this.inst_btnComplianceClose.visible = false;
		
			this.isnt_CampaginMsg.visible = false;
			this.inst_btnCampaignClose.visible = false;
		
			this.inst_ProductionMsg.visible = false;
			this.inst_btnProductionClose.visible = false;
		
			this.inst_ContentMsg.visible = false;
			this.inst_btnContentClose.visible = false;
		
			this.inst_StrategyMsg.visible = false;
			this.isnt_btnStrategyClose.visible = false;
		}
		
		
		/* Click message to hide message and x
		*/
		this.inst_EfficiencyMsg.addEventListener("click", fl_ClickToHide_25.bind(this));
		
		function fl_ClickToHide_25()
		{
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
		
		/* Click x to hide message and x
		*/
		this.inst_btnEfficiencyClose.addEventListener("click", fl_ClickToHide_26.bind(this));
		
		function fl_ClickToHide_26()
		{
			this.inst_EfficiencyMsg.visible = false;
			this.inst_btnEfficiencyClose.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Efficiency-Close
	this.inst_btnEfficiencyClose = new lib.btnEfficiencyClose();
	this.inst_btnEfficiencyClose.name = "inst_btnEfficiencyClose";
	this.inst_btnEfficiencyClose.parent = this;
	this.inst_btnEfficiencyClose.setTransform(255.5,88.1,1,1,0,0,0,2.6,2.8);
	new cjs.ButtonHelper(this.inst_btnEfficiencyClose, 0, 1, 2, false, new lib.btnEfficiencyClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnEfficiencyClose).wait(1));

	// EfficiencyMsg
	this.inst_EfficiencyMsg = new lib.mcEfficiencyMsg();
	this.inst_EfficiencyMsg.name = "inst_EfficiencyMsg";
	this.inst_EfficiencyMsg.parent = this;
	this.inst_EfficiencyMsg.setTransform(191.3,121.2,1,1,0,0,0,70.8,40.2);

	this.timeline.addTween(cjs.Tween.get(this.inst_EfficiencyMsg).wait(1));

	// Strategy-Close
	this.isnt_btnStrategyClose = new lib.btnStrategyClose();
	this.isnt_btnStrategyClose.name = "isnt_btnStrategyClose";
	this.isnt_btnStrategyClose.parent = this;
	this.isnt_btnStrategyClose.setTransform(208.7,192.6,1,1,0,0,0,2.6,2.8);
	new cjs.ButtonHelper(this.isnt_btnStrategyClose, 0, 1, 2, false, new lib.btnStrategyClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.isnt_btnStrategyClose).wait(1));

	// StrategyMsg
	this.inst_StrategyMsg = new lib.mcStrategyMsg();
	this.inst_StrategyMsg.name = "inst_StrategyMsg";
	this.inst_StrategyMsg.parent = this;
	this.inst_StrategyMsg.setTransform(137.2,232.8,1,1,0,0,0,77.2,46.5);

	this.timeline.addTween(cjs.Tween.get(this.inst_StrategyMsg).wait(1));

	// Content-Close
	this.inst_btnContentClose = new lib.btnContentClose();
	this.inst_btnContentClose.name = "inst_btnContentClose";
	this.inst_btnContentClose.parent = this;
	this.inst_btnContentClose.setTransform(149.7,247.3,1,1,0,0,0,2.6,2.8);
	new cjs.ButtonHelper(this.inst_btnContentClose, 0, 1, 2, false, new lib.btnContentClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnContentClose).wait(1));

	// ContentMsg
	this.inst_ContentMsg = new lib.mcContentMsg();
	this.inst_ContentMsg.name = "inst_ContentMsg";
	this.inst_ContentMsg.parent = this;
	this.inst_ContentMsg.setTransform(84.2,276.3,1,1,0,0,0,72.2,35.8);

	this.timeline.addTween(cjs.Tween.get(this.inst_ContentMsg).wait(1));

	// Production-Close
	this.inst_btnProductionClose = new lib.btnProductionClose();
	this.inst_btnProductionClose.name = "inst_btnProductionClose";
	this.inst_btnProductionClose.parent = this;
	this.inst_btnProductionClose.setTransform(273.2,243.8,1,1,0,0,0,2.6,2.8);
	new cjs.ButtonHelper(this.inst_btnProductionClose, 0, 1, 2, false, new lib.btnProductionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnProductionClose).wait(1));

	// ProductionMsg
	this.inst_ProductionMsg = new lib.mcProductionMsg();
	this.inst_ProductionMsg.name = "inst_ProductionMsg";
	this.inst_ProductionMsg.parent = this;
	this.inst_ProductionMsg.setTransform(150.3,274,1,1,0,0,0,130.8,38);

	this.timeline.addTween(cjs.Tween.get(this.inst_ProductionMsg).wait(1));

	// Campaign-Close
	this.inst_btnCampaignClose = new lib.btnCampaign_close();
	this.inst_btnCampaignClose.name = "inst_btnCampaignClose";
	this.inst_btnCampaignClose.parent = this;
	this.inst_btnCampaignClose.setTransform(381.7,230.8,1,1,0,0,0,2.6,2.8);
	new cjs.ButtonHelper(this.inst_btnCampaignClose, 0, 1, 2, false, new lib.btnCampaign_close(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnCampaignClose).wait(1));

	// CampaignMsg
	this.isnt_CampaginMsg = new lib.mcCampaignMsg();
	this.isnt_CampaginMsg.name = "isnt_CampaginMsg";
	this.isnt_CampaginMsg.parent = this;
	this.isnt_CampaginMsg.setTransform(298,265.6,1,1,0,0,0,91,43.5);

	this.timeline.addTween(cjs.Tween.get(this.isnt_CampaginMsg).wait(1));

	// Compliance-Close
	this.inst_btnComplianceClose = new lib.btnComplianceClose();
	this.inst_btnComplianceClose.name = "inst_btnComplianceClose";
	this.inst_btnComplianceClose.parent = this;
	this.inst_btnComplianceClose.setTransform(339.7,247.6,1,1,0,0,0,2.6,2.8);
	new cjs.ButtonHelper(this.inst_btnComplianceClose, 0, 1, 2, false, new lib.btnComplianceClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnComplianceClose).wait(1));

	// ComplianceMsg
	this.inst_ComplianceMsg = new lib.mcComplianceMsg();
	this.inst_ComplianceMsg.name = "inst_ComplianceMsg";
	this.inst_ComplianceMsg.parent = this;
	this.inst_ComplianceMsg.setTransform(213.3,284.8,1,1,0,0,0,134.2,44.8);

	this.timeline.addTween(cjs.Tween.get(this.inst_ComplianceMsg).wait(1));

	// Infrastructure-Close
	this.inst_btnInfrastructureClose = new lib.btnInfrastructureClose();
	this.inst_btnInfrastructureClose.name = "inst_btnInfrastructureClose";
	this.inst_btnInfrastructureClose.parent = this;
	this.inst_btnInfrastructureClose.setTransform(368.7,198.9,1,1,0,0,0,2.6,2.8);
	new cjs.ButtonHelper(this.inst_btnInfrastructureClose, 0, 1, 2, false, new lib.btnInfrastructureClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnInfrastructureClose).wait(1));

	// InfrastructureMsg
	this.inst_infrastructureMsg = new lib.mcInfrastructureMsg();
	this.inst_infrastructureMsg.name = "inst_infrastructureMsg";
	this.inst_infrastructureMsg.parent = this;
	this.inst_infrastructureMsg.setTransform(284.1,227.1,1,1,0,0,0,92.5,37.4);

	this.timeline.addTween(cjs.Tween.get(this.inst_infrastructureMsg).wait(1));

	// Analytics-Close
	this.inst_btnAnalyticsClose = new lib.btnAnalyticsClose();
	this.inst_btnAnalyticsClose.name = "inst_btnAnalyticsClose";
	this.inst_btnAnalyticsClose.parent = this;
	this.inst_btnAnalyticsClose.setTransform(363.1,74.1);
	new cjs.ButtonHelper(this.inst_btnAnalyticsClose, 0, 1, 2, false, new lib.btnAnalyticsClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnAnalyticsClose).wait(1));

	// AnalyticsMsg
	this.Inst_AnalyticsMsg = new lib.mcAnalyticsMsg();
	this.Inst_AnalyticsMsg.name = "Inst_AnalyticsMsg";
	this.Inst_AnalyticsMsg.parent = this;
	this.Inst_AnalyticsMsg.setTransform(292.2,109);

	this.timeline.addTween(cjs.Tween.get(this.Inst_AnalyticsMsg).wait(1));

	// Center
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B5DEF4").ss(2).p("AAAIQQDbAACaiaQCbibAAjbQAAjaiaiaQibibjbAAQjaAAiaCbQibCaAADaQAADbCbCbQCbCaDZAAg");
	this.shape.setTransform(198.5,197);

	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(198.5,218.7,1,1,0,0,0,52.8,74.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al0F1QibiaAAjbQAAjaCbibQCaiaDaAAQDbAACbCaQCaCbAADaQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_1.setTransform(198.5,197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	// Analitics
	this.Inst_btnAnalytics_Show = new lib.btnAnalytics();
	this.Inst_btnAnalytics_Show.name = "Inst_btnAnalytics_Show";
	this.Inst_btnAnalytics_Show.parent = this;
	this.Inst_btnAnalytics_Show.setTransform(258.9,115.1,1,1,0,0,0,60.9,86.4);
	new cjs.ButtonHelper(this.Inst_btnAnalytics_Show, 0, 1, 2, false, new lib.btnAnalytics(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_btnAnalytics_Show).wait(1));

	// Inftastructure
	this.Inst_btnInfrastructure = new lib.btnInfrastructure();
	this.Inst_btnInfrastructure.name = "Inst_btnInfrastructure";
	this.Inst_btnInfrastructure.parent = this;
	this.Inst_btnInfrastructure.setTransform(283.2,138.9,1,1,0,0,0,85.1,60.5);
	new cjs.ButtonHelper(this.Inst_btnInfrastructure, 0, 1, 2, false, new lib.btnInfrastructure(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_btnInfrastructure).wait(1));

	// Compliance
	this.inst_btnCompliance = new lib.btnCompliance();
	this.inst_btnCompliance.name = "inst_btnCompliance";
	this.inst_btnCompliance.parent = this;
	this.inst_btnCompliance.setTransform(283.1,261,1,1,0,0,0,85.1,60.8);
	new cjs.ButtonHelper(this.inst_btnCompliance, 0, 1, 2, false, new lib.btnCompliance(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnCompliance).wait(1));

	// Campaign
	this.inst_btnCampaign = new lib.btnCampaign();
	this.inst_btnCampaign.name = "inst_btnCampaign";
	this.inst_btnCampaign.parent = this;
	this.inst_btnCampaign.setTransform(258.9,285,1,1,0,0,0,60.8,85);
	new cjs.ButtonHelper(this.inst_btnCampaign, 0, 1, 2, false, new lib.btnCampaign(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnCampaign).wait(1));

	// Production
	this.inst_btnProduction = new lib.btnProduction();
	this.inst_btnProduction.name = "inst_btnProduction";
	this.inst_btnProduction.parent = this;
	this.inst_btnProduction.setTransform(137.2,284.7,1,1,0,0,0,60.5,85);
	new cjs.ButtonHelper(this.inst_btnProduction, 0, 1, 2, false, new lib.btnProduction(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnProduction).wait(1));

	// Content
	this.inst_Content = new lib.btnContent();
	this.inst_Content.name = "inst_Content";
	this.inst_Content.parent = this;
	this.inst_Content.setTransform(113,260.5,1,1,0,0,0,86.5,60.8);
	new cjs.ButtonHelper(this.inst_Content, 0, 1, 2, false, new lib.btnContent(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_Content).wait(1));

	// Strategy
	this.ints_btnStrategy = new lib.btnStrategy();
	this.ints_btnStrategy.name = "ints_btnStrategy";
	this.ints_btnStrategy.parent = this;
	this.ints_btnStrategy.setTransform(113,139.4,1,1,0,0,0,86.5,60.5);
	new cjs.ButtonHelper(this.ints_btnStrategy, 0, 1, 2, false, new lib.btnStrategy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ints_btnStrategy).wait(1));

	// Efficientcy
	this.inst_btnEfficiency = new lib.btnEfficiency();
	this.inst_btnEfficiency.name = "inst_btnEfficiency";
	this.inst_btnEfficiency.parent = this;
	this.inst_btnEfficiency.setTransform(137.2,114.9,1,1,0,0,0,60.5,86.4);
	new cjs.ButtonHelper(this.inst_btnEfficiency, 0, 1, 2, false, new lib.btnEfficiency(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inst_btnEfficiency).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(207.9,210,383.6,379.6);
// library properties:
lib.properties = {
	id: '01224C88C6E443ABA5F6D52164FD3043',
	width: 400,
	height: 400,
	fps: 24,
	color: "#EDF7FC",
	opacity: 1.00,
	webfonts: {},
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
an.compositions['01224C88C6E443ABA5F6D52164FD3043'] = {
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