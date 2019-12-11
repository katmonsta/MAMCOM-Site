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



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1471,1600);


(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,713,550);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,517,483);


(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,617,717);


(lib.Image_3 = function() {
	this.initialize(img.Image_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,483);


(lib.Image_4 = function() {
	this.initialize(img.Image_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,417);


(lib.Image_6 = function() {
	this.initialize(img.Image_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,717,583);


(lib.Image_5 = function() {
	this.initialize(img.Image_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,813,392);// helper functions:

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


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77787B").s().p("AgXAxIAAgJIAFABQAJgBACgKIACgJIgShFIAMAAIALA4QADgSAJgmIAMAAIgUBOQgDAKgDAEQgEAGgLAAIgGgBg");
	this.shape.setTransform(104.5,7.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77787B").s().p("AALAkIAAg1QAAgIgIgBQgGABgEAGIAAA2IgNAAIAAhGIALAAIAAAHQAIgHAGgBQAQAAAAARIAAA3g");
	this.shape_1.setTransform(98.85,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#77787B").s().p("AgPAgQgGgFAAgIIAAgEQAAgSAggFIAAgJQgBgKgIAAQgJAAAAANIgMAAIAAgCQAAgUAVAAQATAAABATIAAA1IgKAAIAAgHQgIAIgHAAQgHAAgFgFgAgKAOIAAAEQABAIAIABQAFAAAHgHIAAgUIgBAAQgTACgBAMg");
	this.shape_2.setTransform(93.25,6.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#77787B").s().p("AgVAyIAAhiIALAAIAAAGQAIgHAHAAQAIAAAEAGQAEAFAAAIIAAAhQACAJgEAGQgEAHgJgBQgGABgJgIIAAAhgAgJghIAAAoQAGAGAFAAQAJAAAAgMIAAgdQAAgLgJAAQgFAAgGAGg");
	this.shape_3.setTransform(87.6583,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77787B").s().p("AAYAlIAAg3QAAgJgHAAQgHAAgDAHIAAA2IgMAAIAAgzQAAgIgGAAQgFAAgFAFIAAA4IgNAAIAAhGIALAAIAAAFQAIgGAHAAQAJAAAEAJQAGgJAJAAQAOgBABATIAAA2g");
	this.shape_4.setTransform(80.6,6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#77787B").s().p("AgVAPIAAgfQAAgVAVAAQAWAAAAAVIAAAfQAAAXgWAAQgVAAAAgXgAgJgPIAAAfQAAAMAKAAQALAAgBgMIAAgfQAAgEgCgDQgEgEgEAAQgKAAAAALg");
	this.shape_5.setTransform(73.55,6.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77787B").s().p("AgYAXIAAgtQAAgZAYAAQALAAAGAFQAHAGAAAKIAAALIgMAAIAAgGQAAgQgLAAQgLAAAAANIAAAtQAAAPALAAQAJAAACgIIABgPIAMAAIAAAKQgCAZgXAAQgYAAAAgZg");
	this.shape_6.setTransform(67.725,5.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#77787B").s().p("AgQAhIAAgDQADAAACgCQACgCAAgEIAAghQAAgGgBgCQgBgDgFAAQgEAAgEADIgEAEIAAAkQAAAFABABQACACADAAIAAADIghAAIAAgCIACAAQAEAAACgCQACgBAAgGIAAgoQAAgEgCgCQgCgCgFAAIAAgDIAbAAIAAAKIAHgHQAGgFAGAAQAJAAADAEIAFAHIABAAIAIgHQAFgEAHAAQAGAAAHAFQAGAEAAALIAAAiQAAAEACACIAFACIAAADIghAAIAAgDQADAAACgCQABgBAAgFIAAghQAAgFgCgDQgBgDgFAAQgEAAgEADQgEADAAACIAAAkQAAAFABABQACACADAAIAAADg");
	this.shape_7.setTransform(55.85,6.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#77787B").s().p("AgSAaQgJgIAAgSQADgQAHgIQAJgJAKAAQAHAAAGAEQAFADAEAHQADAFAAAHIAAAFIgiAAQAAAIADAFQADALAKAAQAEAAAFgCIAHgGIADACQgGAKgJAFQgGADgHAAQgIAAgKgIgAgEgWIgCARIASAAQAAgLgCgHQgCgFgFAAQgEAAgDAGg");
	this.shape_8.setTransform(47,6.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#77787B").s().p("AAEAvIAAgDQADAAACgDQABgBAAgEIAAgiQAAgGgBAAQgCgEgEAAQgDAAgDADQgEACAAACIAAAlQAAAEABABQABADAEAAIAAADIghAAIAAgDIgCAAQAEAAACgDQACgCAAgDIAAhGQAAgGgBgBQgBgBgEAAIAAgEIAbAAIAAAoIAIgIQAEgDAHAAQAHAAAGAEQAFAGAAAKIAAAhQAAAEACABQABADAEAAIAAADg");
	this.shape_9.setTransform(40.2375,5.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#77787B").s().p("AgHAqQgHgDAAgJIAAgsIgHAAIAAgEIAFgEIAHgHQAIgKACgEIAEAAIAAAWIANAAIAAAHIgNAAIAAAoIAAAGQACACADAAIAFgCIAEgFIADADQgEAGgCACQgHAHgIgBIgIgCg");
	this.shape_10.setTransform(34.2,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#77787B").s().p("AADAgIAAgDQAEAAACgBIAAgHIAAgpQgCgEgFAAQgCAAgEADIgEAFIAAAkQAAAFAAABQABACAFAAIAAADIghAAIAAgDIAAAAQAEAAACgCQACgCAAgEIAAgoIAAgGQgDgCgEAAIAAgDIAaAAIAAAKQADgEAFgEQADgCAHgBQAJAAAFAGQAFAEAAAMIAAAfQAAAEACADQACABADAAIAAADg");
	this.shape_11.setTransform(27.85,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#77787B").s().p("AgvAxIAAgEQAFAAADgFIAlhYIAEAAIAeBIQAEAJAEAIQAEADAEgBIAAAFIgtAAIAAgFIAJgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgGQgBgCgBgCIgFgIIgdAAIgHATQAAACAFABIAGABIAAAFgAgVAQIAaAAIgMgfIgBAAg");
	this.shape_12.setTransform(19,4.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#77787B").s().p("AALAkIAAg1QAAgIgIgBQgFABgGAGIAAA2IgMAAIAAhGIALAAIAAAHQAIgHAGgBQAQAAAAARIAAA3g");
	this.shape_13.setTransform(8.55,6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#77787B").s().p("AAPAuIgFgZIgTAAIgEAZIgNAAIARhbIARAAIATBbgAgHALIAQAAQgIgegBgRg");
	this.shape_14.setTransform(2.7,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,106.9,12.5), null);


(lib.SummitCClogo_FullColor_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Summit_CC_logo_Full_Color_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00468B").s().p("AkzCpQguAAgWgqQgWgpAagmQBeiJA0hKQAEgGAHACQAGACgBAIQgLBTBYAkQBVAjBfglQCdg8BbAdQAvAPAWAlQAkA6gbA+QgeBEhXAAg");
	this.shape.setTransform(38.5589,48.0382);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D6E70").s().p("AgvBJIAAiRIBbAAIAAASIhIAAIAAAsIBEAAIAAASIhEAAIAAAuIBNAAIAAATg");
	this.shape_1.setTransform(276.2,57.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6E70").s().p("AAbBJIgkhAIgWAAIAABAIgUAAIAAiRIAzAAQAQAAAHAFQAKAEAEAGQAGAIABAEIADAPIgDANIgHAMIgLAIQgLAEgEAAIApBCgAgegIIAaAAIAKgBIAKgDIAIgHQACgEAAgIQAAgGgCgGIgIgHQgFgDgFAAIgKgBIgaAAg");
	this.shape_2.setTransform(263.15,57.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6E70").s().p("AAxBJIgPgkIhEAAIgOAkIgXAAIA/iRIASAAIA+CRgAgaATIA1AAIgbhCg");
	this.shape_3.setTransform(248.3,57.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6E70").s().p("AgUBFQgQgIgIgIQgJgLgGgOQgFgPAAgLQAAgRAGgNQAGgPAJgKQAHgJARgHQANgGARAAQAOAAAOAGQAQAHAHAKIgSALQgGgIgKgEQgIgEgLAAQgMAAgJAFQgJAEgIAJQgFAFgGAOQgEAKAAANQAAANAEAIQADALAIAIQAJAIAIADQAKAFAMAAQAOAAAIgFQAKgFAGgJIARAMQgBADgFADQgFAGgGACQgGAEgKADQgJADgNAAQgSAAgMgHg");
	this.shape_4.setTransform(233.175,57.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D6E70").s().p("AgKBJIAAg+IACAAIg3hTIAZAAIAmBBIAphBIAXAAIg3BTIAAA+g");
	this.shape_5.setTransform(212.025,57.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D6E70").s().p("AgKBIIAAh+IguAAIAAgSIBxAAIAAASIgwAAIAAB+g");
	this.shape_6.setTransform(198.25,57.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D6E70").s().p("AgJBJIAAiRIATAAIAACRg");
	this.shape_7.setTransform(188.9,57.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D6E70").s().p("AAmBJIhQh2IAAB2IgUAAIAAiRIAaAAIBPB2IAAh2IAUAAIAACRg");
	this.shape_8.setTransform(177.275,57.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D6E70").s().p("AgVBHQgMgGgGgGQgHgIgFgKQgEgKAAgOIAAhbIATAAIAABYIADAOQABAHAFAHQACADAJAHQAHAEAJAAQALAAAGgEQAHgFAEgFQAEgHACgHIACgOIAAhYIAUAAIAABbQAAAOgEAKQgFALgHAHQgHAHgLAFQgJAEgNAAQgMAAgJgEg");
	this.shape_9.setTransform(161.1,57.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D6E70").s().p("AA3BJIAAh2IgwB2IgNAAIgwh2IAAB2IgVAAIAAiRIAdAAIAuBuIABAAIAthtIAdAAIAACQg");
	this.shape_10.setTransform(143.85,57.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6E70").s().p("AA4BJIAAh2IgxB2IgMAAIgxh2IAAB2IgUAAIgBiRIAdAAIAuBuIABAAIAuhtIAdAAIAACQg");
	this.shape_11.setTransform(124.525,57.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D6E70").s().p("AgdBGQgNgGgLgKQgJgJgHgPQgGgNAAgRQAAgQAGgNQAHgPAJgJQAKgKAOgGQAOgGAPAAQAOAAAQAGQAPAGAJAKQAKAJAGAPQAGANAAAQQAAARgGANQgGAPgKAJQgIAJgQAHQgLAGgTAAQgPAAgOgGgAgWgyQgJAFgIAIQgGAFgFANQgEAJAAALQAAANAEAKQAIAOADAEQAIAIAJAEQAQAEAGABQAMgBAKgEQAKgFAHgHQAGgGAFgMQAEgKAAgNQAAgLgEgJQgFgNgGgFQgHgIgKgFQgLgEgLAAQgKAAgMAEg");
	this.shape_12.setTransform(105.95,57.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D6E70").s().p("AgUBFQgPgIgJgIQgJgLgGgOQgFgPAAgLQAAgRAGgNQAHgQAIgJQAIgJAQgHQAOgGAQAAQAPAAANAGQAQAHAHAKIgSALQgGgHgKgFQgIgEgLAAQgLAAgKAFQgJAEgIAJQgFAFgGAOQgEAKAAANQAAANAEAIQADALAIAIQAJAIAIADQAKAFAMAAQAOAAAIgFQAJgEAHgKIARAMQgCADgEADQgHAHgEABQgGAEgKADQgJADgNAAQgRAAgNgHg");
	this.shape_13.setTransform(90.475,57.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00468B").s().p("ACICXIAAiYQABhBgtgBQgdgBgKAaQgGAOAAAbIAACXIhRAAIAAiXQACg+gugEQgTgBgSAJQgPAIgFAIIAADBIhWAAIAAkiIBVAAIAAAOQAOgKAVgGQAVgGAOAAQAvAAAdAeQAQgOAXgJQAogPAqALQAlAKAWAbQARAWAIAYQAGAYABAmIAACXg");
	this.shape_14.setTransform(174.65,26.2673);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00468B").s().p("AggC8QgYgRgKgSQgMgXAAgeIAAiJIgWAAIAAhBIAWAAIAAhiIBRAAIAABiIA3AAIAABBIg3AAIAACJQAAALAEAEQAGAFAIAAQAIAAAJgFQAFgCAMgKIAuAtQghA1g3AAQgXgBgWgMg");
	this.shape_15.setTransform(275.85,22.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00468B").s().p("AgqDKIAAkiIBVAAIAAEigAggh5QgOgOAAgTQAAgTAOgOQANgOATAAQATAAAOAOQAOAOAAATQAAATgOAOQgOAOgTAAQgTAAgNgOg");
	this.shape_16.setTransform(256.575,21.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00468B").s().p("ACICXIAAiYQAAhBgsgBQgdgBgKAaQgGAOAAAbIAACXIhRAAIAAiXQACg+gugEQgUgBgSAJQgOAIgGAIIAADBIhVAAIAAkiIBWAAIAAAOQAOgKAVgGQAUgGAPAAQAvAAAdAeQAPgOAXgJQApgPApALQAmAKAWAbQASAWAGAYQAHAYAAAmIAACXg");
	this.shape_17.setTransform(224.5,26.2673);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00468B").s().p("AhoBuQgfglAAhDIAAiYIBVAAIAACWQAAAkAKALQAWAYAhgJQAYgHALgMIAAjBIBWAAIAAEiIhVAAIAAgOQgaASgrgBQg3AAgfglg");
	this.shape_18.setTransform(133.175,26.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00468B").s().p("AhLDBQgogQgjgkIA7g9QAsAjArAGQAgAFAPgMQALgIgBgPQgBgQgOgHIgmgOQgXgGgagMQg1gXgRgYQgXggAAgkQAAgoAYggQAWgeAqgQQAcgKAfAAQAmAAAkANQAgAMAhAZIgzBBQgggUgfgHQgigHgcAMQgTAKABAVQABAWAaAMQAYAMAYAHQAVAIAfANQApAPASAcQAPAZgBAmQAAAfgRAaQgSAageANQggAOglAAIgKABQgrAAgmgPg");
	this.shape_19.setTransform(100.353,20.7608);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#59C4C6").s().p("ACTBgQhPghhOgBQhPgCg4AeQgHADgFgGQgFgGAEgGIBeiKQAXghAoAAQAoAAAWAhIBiCPQAEAGgFAGQgDAFgEAAIgEgBg");
	this.shape_20.setTransform(41.1625,10.3118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.9,65.4);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOFQQiKiLgBjEQAAjDCLiMQCKiKDEgBQDDAACLCLQCMCKAADEQAADDiKCLQiLCMjEAAIgBAAQjDAAiLiKg");
	mask.setTransform(47.4,47.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#F8F8FA","#EAEAEF","#D6D6E1","#BEBDCF","#A1A1BB","#8283A5","#61658F","#3C497A","#1E376C"],[0,0.161,0.294,0.412,0.525,0.631,0.737,0.839,0.937,1],24.3,-31.8,-29,24.6).s().p("ADbEjQgphXh5g0QgjgUhGgcQicg5hEg9Qh2hrA1iiQARgyAlgoQAkgnA2gZIgPAKQhRA7BIBYQA8BLBrAnIAEACQAbANA8ATQCdA7BCA5QB1BlgjCcQgQBDgpAzQgqAzg+AcQBMg5gqhag");
	this.shape.setTransform(47.8669,47.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(12.5,3.8,70.8,87.60000000000001), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOFQQiKiLgBjEQAAjDCLiMQCKiKDEgBQDDAACLCLQCMCKAADEQAADDiKCLQiLCMjEAAIgBAAQjDAAiLiKg");
	mask.setTransform(47.4,47.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#F6F6F8","#E4E3EA","#CBCBD9","#ACACC3","#8A8AAA","#656991","#3B4979","#1E376C"],[0,0.11,0.235,0.365,0.498,0.639,0.78,0.922,1],-33.4,-13.1,21.5,9.1).s().p("AhWCaQhrgog8hLQhIhXBRg7IAPgKIAZgLQBVgfBtAGQCUAICWBJIgtANQhGgeh0AuQhwArgdA9QgJAWgDAdQgCAjAQAIg");
	this.shape.setTransform(51.4933,15.527);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(22.7,0,57.599999999999994,31.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOFQQiKiLgBjEQAAjDCLiMQCKiKDEgBQDDAACLCLQCMCKAADEQAADDiKCLQiLCMjEAAIgBAAQjDAAiLiKg");
	mask.setTransform(47.4,47.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E8E7EF","#E3E2EB","#D6D5E2","#C3C2D4","#AAAAC3","#8E8EAE","#707299","#4D5684","#243A6F","#1E376C"],[0.004,0.157,0.29,0.416,0.537,0.651,0.765,0.878,0.984,1],-2.9,-14.1,27.5,8.3).s().p("AApCiQiSgIjBhaIAXguQCHA/CYhLQA0gZAtgmQAkgeAIgRQAIgPgHgNQgHgOgZgQQB5A0ApBYQAqBYhMA5IgUAJQhSAfhTAAIgYgBg");
	this.shape.setTransform(41.3943,79.0313);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(11.5,62.8,59.8,32), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAHaQjFgBiKiLQiLiLABjDQAAjECLiLQCMiKDDAAQDEABCLCLQCLCLgBDDQAADEiLCLQiMCKjDAAIAAAAg");
	mask.setTransform(62.55,54.825);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7DEEC").s().p("AiyH0QhLgNhIgPIgrqWICVjwIDzhYICQAOQgoBAgiBJQhFCSAZAtQAaAtCVCaQBKBNBGBEIAADYQlSB6gjAMQgFABgMAAQgoAAh1gTg");
	this.shape.setTransform(36.875,51.9352);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(15.2,7.5,58.599999999999994,94.7), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjiEDIghgEQg3gNgegwQgdgvAMg3QANg3AwgeQAvgdA3ANQAQADALAGQgOgIgKgHQgsgjgGg4QgHg4AjgsQAjgsA4gHQA3gGAtAjQAPALAIANIFxHPg");
	mask_1.setTransform(36.889,45.5806);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#F2F7EF","#D0E3C4","#9BC380","#6CA745"],[0,0.094,0.282,0.545,0.749],0,0,0,0,0,73.5).s().p("AreLrIAA3VIW8AAIAAXVg");
	this.shape_1.setTransform(73.45,74.7);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.4,19.7,73.1,51.8), null);


(lib.Phone_Greysvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Phone_Grey_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606161").s().p("AFEF0QgJgIAAgMQgRl8lBi3QihhciigRQgMgBgIgKQgHgJAAgMQABgMAKgIQAJgIAMABIBvAVQCBAiBsA+QFbDGATGcQABAMgIAJQgJAJgMABIgBABQgMAAgIgIg");
	this.shape.setTransform(103.0537,38.0234);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606161").s().p("AECEkQgMAAgIgIQgJgIAAgMQgNkZjoiGQhJgrhZgWQgzgOgegBQgMgBgIgKQgIgJABgMQABgMAJgIQAKgIAMABIBUAQQBiAZBSAwQEHCXAOE3QABAMgIAJQgJAJgMABg");
	this.shape_1.setTransform(90.5997,50.4484);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606161").s().p("ADADhQgMAAgJgIQgJgIAAgMQgJjNiohiQg2gfhBgRQgbgHghgEQgMgBgIgJQgHgKAAgMQABgMAKgIQAJgIAMABIBAAMQBKATA+AkQDHBzALDsQABAMgIAJQgJAKgMAAg");
	this.shape_2.setTransform(79.0037,62.0234);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606161").s().p("ADhJIQjohUj0jzQj1jyhWjqQglhkAChOQAChKAkglQAjgkAXgTQAjgeAhgOQAxgVAwAXQAxAYBABOQBNBfASAyQASAxgbAtQgUAggxAxQhSBTDUDRQBjBkBAAcQBEAdAsgrQAsgwAjgVQAugbAzAQQA2ARBfBLQBLA8AZAyQAYAwgRAwQgNAkgfAnQgUAaglAlQgkAlhKACIgKAAQhJAAhcgig");
	this.shape_3.setTransform(61.8116,82.1695);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.4,144);


(lib.MNBCBSBlueX_blue_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MN_BCBS_BlueX_blue_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009DE1").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAFgHAAQgFAAgFgFgAgIgJQgEAEAAAFQAAAGAEAEQAEAEAEAAQAGAAADgEQAEgEAAgGQAAgFgEgEQgDgEgGAAQgFAAgDAEgAAFAJIgFgIIgCAAIAAAIIgDAAIAAgRIAGAAQAHAAAAAGQAAADgFAAIAFAIgAgCAAIACAAQAFAAAAgCQAAgDgEgBIgDAAIAAAGg");
	this.shape.setTransform(27.375,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009DE1").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAFAFQAEAFAAAFQAAAGgFAFQgEAFgHAAQgFAAgFgFgAgIgJQgEAEAAAFQAAAHADADQAEAEAFAAQAGAAADgEQAEgEAAgGQAAgFgEgEQgDgEgGAAQgFAAgDAEgAAEAJIgEgIIgDAAIAAAIIgDAAIAAgRIAGAAQAHAAAAAGQAAADgFAAIAFAIgAgDAAIADAAQAEAAAAgCQAAgDgEgBIgDAAg");
	this.shape_1.setTransform(55.0977,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009DE1").s().p("AgBABIgBgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAGAAADACIgCAAIgDABIgBgBg");
	this.shape_2.setTransform(43.9,7.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009DE1").s().p("AgtA8QgXghgKgoQgOg2AOgmIAoAIQAUADASAAQAVAAASgDIAogIQAOAmgOA2QgKAogXAhQgVAfgZAPQgXgPgWgfgAgCBXQACADACAAQAEAAAAgDIABgaIgBgBIgEgCIgEgCgAgIBEQgEAEABAFQAAADACAEQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBIgBgGIACgDIAAgJgAgMAbQgFADAAACQgFALAMAFIAKAEIAGADQADACAAACIAAACIAAAIIAFgDQAFgCAAgGQAAgEgKgHIgQgIIAAAAIAAgDIAAgBIAAgKgAgCAlIAJAFIAAgUIgJgBgAgYgKQgEADAAAFQgBANASAEIAQACIAEABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIgBACIgBABIAAAMIAIgCQAHgEAAgFQACgEgGgJQgCgEgHgCQgDgCgSgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIABgCIABAAIgBgEIgEgHIgIADgAgGgTIgEACIAAADQAFAKAAAEIAMADIAAgWQgDgCgEAAIgHgBgAgghJQgIADgDAKQgDAHAEAJQAGAMAQAEIAOACIAQACQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABQACAFgEABIAAAPIALgDQALgHgDgNQgBgIgKgEQgGgDgMgBIgSgEQgHgCgCgFQgCgEADgCQACgCAHAEQAFACADgCQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgEgBIgIgEIAOAAIAKACIADACIABADIgOgFQAAAAAAAAQAAABAAAAQABAAAAAAQABABABAAIABACQAAAEgHAAIAAAGIASACIABgCIAHgHIAKgJQADgBAAgDQACgDgEgCQgBgBAAAAQgBAAAAAAQgBgBgBABQAAAAAAAAIgHAEIgGAFQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQABgIgBgDIgBgDQgDAAgJgFIgEABIAAAFIAGAEIADAEIACACIABADIgEABIgCAAIAAgBIgCgDQgDgFgDgBQgGgDgGAAQgGAAgGADg");
	this.shape_3.setTransform(45.0375,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009DE1").s().p("AhoAPQgNgoABgtQACgtAQgeQAvAZAzAAQAyAAAxgZQAPAgACArQACAugNAnQgcBahNApQhLgpgdhagAhfg1QABAgALAeQAaBMA5AlQA6glAahMQALgeABggQABgigLgbQgWAIgaAEQgWADgQAAQgPAAgWgDQgagEgWgIQgLAbABAig");
	this.shape_4.setTransform(45.0558,14.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009DE1").s().p("AgRALQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAEgDABgFQABgFgDgGQARAFAPAQg");
	this.shape_5.setTransform(17.9625,9.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009DE1").s().p("AhACRIAAhRIhRAAIAAh/IBRAAIAAhSIB/AAIAABSIBSAAIAAB/IhRAAIAABRgAgEAJIgoA7QAVANAXgBQAWABAVgNIgmg7QgDgCgCAAQgCAAgCACgAhQABQAAAmAgAZIAlhEQACgFgCgGQgDgGgGAAIg2gFQgGAPAAAMgAAVgVQgHAAgDAGQgBAFACAGIAlBDQAdgYACgnQAAgMgFgPgAAHg+QADAGgEAEQgEAGAAAFQAAADADADQADADAGAAIA5AAQgJgVgTgMQgUgNgXAAQgXAAgUANQgUAMgLAVIA5AAQAFAAAEgDQADgDAAgDQAAgGgEgFQgDgEACgGQADgGAGAAQAGAAACAGg");
	this.shape_6.setTransform(14.55,14.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009DE1").s().p("AgVgXQgBAAAAgBQABAAAAgBQAAAAAAAAQABAAABAAIAogFIACAQQAAAYgRAUg");
	this.shape_7.setTransform(19.0958,15.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009DE1").s().p("AgWgOIACgQIAoAFQABAAABAAQAAABABAAQAAABAAAAQgBABAAAAIgbA0QgRgSAAgag");
	this.shape_8.setTransform(9.8731,15.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009DE1").s().p("AgbASIAbgoIAAgBIABABIAbAoQgOAGgOAAQgOAAgNgGg");
	this.shape_9.setTransform(14.475,19.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009DE1").s().p("AgSALQAMgOAUgHQgFAKAIAIQABABAAAAQABABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_10.setTransform(11.1125,9.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6A7QgYgYAAgjQAAghAYgYQAYgZAiAAQAiAAAZAZQAYAYAAAhQAAAjgYAYQgZAYgiAAQgiAAgYgYg");
	this.shape_11.setTransform(14.4505,14.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAB5QgbgQgVgbQgXgcgPgsQgLghgBggQAAgiAKgaIABgCIADAAQAWAJAZADIAbAEIAVAAQAMAAAPgEQAagEAVgIIADAAIABACQAKAaAAAiQgBAggLAhQgQAtgWAbQgWAbgaAQIgBABg");
	this.shape_12.setTransform(44.975,14.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009DE1").s().p("AgYAmQgJgHAAgMQAAgRARgHQAHgDALAAIAUgBIAAgIIABAAQgCgSgSAAQgSAAgCAPIgLAAQAEgYAbAAQAfAAgBAcIABA7IgLAAIAAgNIgBABQgDAFgIAEQgIAFgHAAQgNAAgHgHgAgEACQgRAEAAAOQAAAHAGAFQAFAEAIABQAagBgBgjIgbABg");
	this.shape_13.setTransform(140.375,46.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009DE1").s().p("AgDAvQgCgDAAgNIAAg2IgSAAIAAgKIARAAIAAgSIAJgEIAAAXIATAAIAAAJIgTAAIAAA4QAAANAMAAIAJgBIAAAJQgGACgEAAQgOAAgDgJg");
	this.shape_14.setTransform(133.575,45.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009DE1").s().p("AgdAfQgKgNAAgSQAAgRAKgMQALgPASAAQATAAAMAOQAJAMAAASQAAATgKAMQgLAOgTAAQgSAAgLgOgAgVgXQgGAKAAANQAAANAGAKQAJAMANAAQAPAAAHgMQAGgKABgNQAAgNgHgKQgJgMgNAAQgOAAgIAMg");
	this.shape_15.setTransform(126,46.0991);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009DE1").s().p("AgWAoQgLgHAAgNIALAAQACARAVAAQAJAAAGgEQAHgEAAgJQAAgIgIgEQgFgCgNgDQgNgDgGgCQgIgGAAgLQgCgOAKgHQAJgFANAAQAcAAACAYIgLAAQgCgOgSAAQgTAAAAAOQAAAIAMAEIAbAIQAPAEAAAPQAAAOgLAHQgLAHgNAAQgMAAgJgGg");
	this.shape_16.setTransform(117.1,46.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009DE1").s().p("AgcAfQgKgNAAgSQAAgSAKgMQAKgOASAAQAnAAAAAvIhBAAQAAANAHAJQAIALAOAAQAJAAAGgGQAIgGACgJIALAAQgHAeggAAQgSAAgKgOgAgSgbQgGAJgCAMIA3AAQgBgNgHgIQgHgJgOAAQgKABgIAIg");
	this.shape_17.setTransform(107.9,46.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009DE1").s().p("AAYAtIAAg2QAAgLgGgHQgGgHgLAAQgLAAgHAJQgGAJAAAMIABAvIgKAAIgBhUIALAAIAAANQAJgQARAAQAeAAAAAjIAAA2g");
	this.shape_18.setTransform(98.525,45.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009DE1").s().p("AAYAtIAAg2QAAgLgGgHQgGgHgLAAQgLAAgHAJQgGAJAAAMIABAvIgKAAIgBhUIALAAIAAANQAJgQARAAQAeAAAAAjIAAA2g");
	this.shape_19.setTransform(89.025,45.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009DE1").s().p("AgFA+IAAhVIAKAAIAABVgAgFgwIAAgNIALAAIAAANg");
	this.shape_20.setTransform(82.4,44.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009DE1").s().p("AgEA+IgvhwIAABwIgMgBIAAh6IASAAIAtBrIAvhrIARAAIAAB6IgLAAIAAhwIgvBxg");
	this.shape_21.setTransform(72.475,44.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009DE1").s().p("AgjAxQgJgNAAgSQAAgSAKgMQALgOATAAQANAAAJAMIAAgwIAaAAIABB6IgaAAIgBgMQgJAPgQAAQgRAAgLgOgAgRASQgDAdAUAAQAJAAAFgLQAEgHAAgLQAAgKgEgIQgFgJgJAAQgRAAAAAbg");
	this.shape_22.setTransform(146.5,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009DE1").s().p("AgMA+IAAh6IAZAAIAAB6g");
	this.shape_23.setTransform(138.95,23.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009DE1").s().p("AgoABQgBgUALgMQALgOATAAQAaABALATQADAKAAAFIABAPIg4AAIAAABQAAAWAPAAQAMAAADgLIAYAAQgDAdgkAAQgoAAAAgtgAgPgLIAdAAQAAgSgOAAQgMAAgDASg");
	this.shape_24.setTransform(131.95,25.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009DE1").s().p("AgMA+IAAhVIAZAAIAABVgAgMgnIAAgWIAaAAIAAAWg");
	this.shape_25.setTransform(124.7,23.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009DE1").s().p("Agng9IAYAAIAAAwQAJgNAQAAQAJAAAIAFQAJAFACAJIADANIAAA4IgYAAIAAg0QgBgTgPAAQgFAAgEAFQgFAEABAKIAAA0IgbAAg");
	this.shape_26.setTransform(117.05,23.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009DE1").s().p("AgxAWIAbAAQgBALAGAGQAFAGALAAQAYAAAAgQQAAgKgKgEIgRgEQgpgLAAgWQAAgTAQgMQAOgKAUAAQATAAALAKQANAKAAASIgbAAQgBgTgTAAQgHAAgGAEQgGAFAAAHQAAAJAHAEQAFACAKACQAXAGAHAEQAQAIAAAQQAAAVgRALQgOAJgVAAQgxAAACgqg");
	this.shape_27.setTransform(106.196,23.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009DE1").s().p("AgpABQAAgUAMgMQAKgOATAAQAaABAKATQAEAKABAFIABAPIg5AAIAAABQAAAWAPAAQAMAAAEgLIAWAAQgBAdglAAQgpAAAAgtgAgPgLIAeAAQAAgSgPAAQgNAAgCASg");
	this.shape_28.setTransform(95.9,25.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009DE1").s().p("AgbAnQgJgFgDgJQgBgFAAgIIAAg3IAZAAIAAAyQAAAUAPAAQAGAAAEgFQAEgFAAgKIAAgyIAaAAIABBUIgaAAIgBgKQgIANgQAAQgJAAgIgFg");
	this.shape_29.setTransform(85.825,25.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009DE1").s().p("AgMA+IAAh6IAZAAIAAB6g");
	this.shape_30.setTransform(78.2,23.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009DE1").s().p("AgBA+IguAAIAAh7IAuAAQARgBANAIQAOAJAAARQAAATgWAIQAbAEAAAbQAAAQgSAJQgNAHgPAAIgDAAgAgVArIAVAAIAAgCQAJAAAEgCQAHgEAAgJQAAgKgHgEQgEgCgJAAIgVAAgAgVgMIAVAAIAAABQAPAAAAgPQAAgPgPAAIgVAAg");
	this.shape_31.setTransform(70.4,23.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009DE1").s().p("AgZAnQgLgHgBgOIAXAAQACALAMgBQAMABgBgLQABgHgRgDQgQgEgFgEQgLgGABgMQgBgNANgHQALgGANgBQAgAAADAaIgYAAQAAgIgLAAQgJAAAAAIQAAAEAYAHQAXAIAAARQAAAOgNAHQgMAIgNgBQgPAAgKgGg");
	this.shape_32.setTransform(141.7,8.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009DE1").s().p("AgZAnQgMgHgBgOIAZAAQABALAMgBQALABABgLQgBgHgPgDQgQgEgHgEQgJgGgBgMQAAgNAOgHQAKgGANgBQAgAAACAaIgWAAQAAgIgMAAQgJAAAAAIQAAAEAXAHQAZAIAAARQAAAOgOAHQgMAIgNgBQgPAAgKgGg");
	this.shape_33.setTransform(133.2,8.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009DE1").s().p("AggAhQgMgNAAgUQAAgUAMgLQAMgNAUAAQAVAAAMANQAMALAAAUQgBATgLANQgNANgUAAQgUAAgMgMgAgRAAQgDAbAUgBQASABAAgbQAAgcgSAAQgRAAAAAcg");
	this.shape_34.setTransform(123.8,8.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009DE1").s().p("AgYArIgBhUIAWAAIABAQQAGgSAWABIAAAWIgLAAQgIAAgEAHQgDAEAAAKIAAAqg");
	this.shape_35.setTransform(115.5,8.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009DE1").s().p("AgnAuQgMgSAAgcQAAgbAMgRQAOgTAZAAQAXAAANAKQAQALAAAWIgcAAIAAgCQAAgKgGgGQgGgHgMABQgMAAgHAPQgEANAAAQQAAAQAEAMQAHAQAMAAQAMAAAGgGQAGgHAAgKIAcAAQgBArgzAAQgZAAgOgSg");
	this.shape_36.setTransform(106.2,6.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009DE1").s().p("AgpAAQAAgSAMgNQAKgOATAAQAaABAKATQAEALABAFIABAPIg5AAIAAABQAAAVAPAAQANABADgMIAWAAQgBAcglAAQgpAAAAgtgAgPgJIAeAAQAAgSgPAAQgNAAgCASg");
	this.shape_37.setTransform(95.9,8.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009DE1").s().p("AgbAnQgJgFgDgJQgBgEAAgJIAAg3IAZAAIAAAyQAAAUAPAAQAGAAAEgFQAEgFAAgKIAAgyIAaAAIABBUIgaAAIgBgKQgIANgQAAQgJAAgIgFg");
	this.shape_38.setTransform(85.825,8.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009DE1").s().p("AgMA9IAAh5IAZAAIAAB5g");
	this.shape_39.setTransform(78.2,6.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009DE1").s().p("AgBA+IgugBIAAh5IAuAAQARgBANAHQAOAJAAARQAAAJgGAIQgHAHgJACQAbAFAAAbQAAAQgSAJQgOAHgQAAIgBAAgAgVApIAVAAIAAgBQAJAAAEgCQAHgEAAgKQAAgJgHgEQgEgDgJAAIgVAAgAgVgNIAVAAIAAABQAPAAAAgPQAAgPgPAAIgVAAg");
	this.shape_40.setTransform(70.4,6.2957);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,50.8);


(lib.healthybluelogocolor4csvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// healthy_blue_logo_color_4c_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBnQgPgaAAhEIAAghQABg8ATgXQAPgTAfAAQAhAAAOAYQAOAWAAAyIAAAZIhgAAIAAAkQAAAuAJARQAIANASAAQAggBAAg5IAAgCIAdAAIAAABQgEAlgLATQgPAXgfAAQglAAgOgYgAgbhUQgFAPAAAxIAAAAIBCAAIAAAAQAAgwgCgJQgFgdgWAAQgZABgHAVg");
	this.shape.setTransform(264.3992,25.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwBuQgPgQAAgcIAAi9IAfAAIAAC+QAAAiAaAAQAUAAATgYIAAjIIAfAAIAADyIgfAAIAAgXQgTAcgfAAQgSAAgNgOg");
	this.shape_1.setTransform(246.975,25.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOCuIAAlbIAdAAIAAFbg");
	this.shape_2.setTransform(233.575,20.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhPCuIAAlbIBLAAQApAAAVAcQAQAWAAAmQAAAWgKAUQgLAVgSAIQAYAKAMAaQAKAWgBAaQAAAxgOAYQgTAfguAAgAgxCXIA2AAQAaAAAKgYQAIgTAAglQABgigJgQQgKgVgaAAIg2AAgAgxgXIAxAAQAoAAAAg9QABhCgyAAIgoAAg");
	this.shape_3.setTransform(219.15,20.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/CYIAAgZQAugEAAgXQAAgQgCgMIg0jfIAhAAIAnDQIAmjQIAhAAIg9EDQgFAXgTALQgQAJgiABg");
	this.shape_4.setTransform(193.45,28.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhCuIAAi8QAAgPgIgJQgHgHgKAAQgUAAgUATIAADIIgfAAIAAlbIAeAAIAACBQATgdAeAAQATAAANAOQAQAQgBAcIAAC9g");
	this.shape_5.setTransform(176,20.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKCTQgHgNAAgdIAAinIghAAIAAgRIAhAAIAAhWIAdAAIAABWIAnAAIAAARIgnAAIAACmQAAAWAEAHQADALAOAAQAKAAAIgCIAAAVQgOADgMAAQgaAAgJgTg");
	this.shape_6.setTransform(160.6,21.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOCuIAAlbIAdAAIAAFbg");
	this.shape_7.setTransform(150.775,20.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgyBxQgPgQAAgYQAAgeANgRQAUgaA/gbIAAgBQAAgxgJgQQgHgNgOAAQgbAAgDAuIAAACIgfAAQACggARgSQAQgSAZAAQAjAAAQAZQALATAAAfIAAB0QAAAdAEAbIgdAAIgEgdQgJARgPAJQgNAJgNAAQgSAAgPgOgAgRAZQgRATAAAXQAAARAIAKQAGAIAKgBQALAAAMgHQAMgJAGgNIAAhUQgjAYgNANg");
	this.shape_8.setTransform(137.325,25.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgwBnQgQgaABhEIAAghQABg8ASgXQAPgTAgAAQAhAAAOAYQAOAXAAAxIAAAZIhgAAIAAAkQAAAuAJARQAIANASAAQAggBAAg5IAAgCIAcAAIAAABQgDAlgLATQgPAXgfAAQglAAgOgYgAgchUQgEAOAAAyIAAAAIBCAAIAAAAQgBgwgBgJQgGgdgWAAQgYABgIAVg");
	this.shape_9.setTransform(121.0242,25.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA2CuIAAipIhqAAIAACpIggAAIAAlbIAgAAIAACeIBqAAIAAieIAeAAIAAFbg");
	this.shape_10.setTransform(101,20.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009DE1").s().p("AAAABIgCgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAKAAADACIgBAAIgEACIgBABIgBgCg");
	this.shape_11.setTransform(59.075,10.8563);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009DE1").s().p("Ag+BTQgggvgOg2QgRhKASg0QAfAIAXADQAhAFAUAAIAAAAQAVAAAhgFQAXgDAfgIQATA1gTBJQgNA2ggAvQgdApgiAVQghgVgdgpgAgBB5QAAAEAFAAQAEABABgEIABgmIgBgCIgFgEIgGgCgAgJBfQgEAGgBAGQgBAEADAGQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAIACgBIAAgIIADgEIAAgOgAgOAmQgFAEgBADQgDAHADAHQACAGAHADIANAFQAMAFAAAEQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIAAALIADgBQADgBACgCQAGgEAAgHQAAgKgMgHQgIgEgNgGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAIABgCIAAgNIgIACgAgDA0IAOAGIAAgdIgOgCgAgcAAQgCARATAFIAWADIAFABIADADIgBADIgDABIgBARIAEgBIAIgDQAIgEABgHQADgJgGgIQgEgFgIgDQgGgCgJgBIgOgBQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIABgBIgCgHIgEgJQgLAFgBALgAgJgcIgFADIgBADQAJAUAAAFIASABIAAghIgLgCIgKAAgAgqhkQgKAFgEALQgDAMAEAKQAJASAUAGQAHACANABQAQABAGABQADABABACQAEAHgIADIAAAUIAPgFQAPgJgDgTQgCgLgLgGQgJgFgRgCQgSgCgHgCQgNgDgCgIQgCgHAFgBQAEgBALAFQAHABAEgCQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIgCgCIgGgCQgFgBgFgEQAGgBAFABIAMgBIABgBIgCgEQgEgGgEgCQgJgDgJAAQgIAAgIAEgAgChQQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQgCAEgHABIAAALIAZADIACgDQACgEAIgGIAOgNQADgEABgCQABgEgEgDQgEgEgDACQgEABgFAFIgJAGQAAABgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgLgBgFQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQgEgBgNgGQAAgBgBAAQAAAAgBAAQAAAAgBABQAAABgBABIAAAIIAGADIAEAGIADAEQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgFACIgJABIAPACIAEACQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgTgFg");
	this.shape_12.setTransform(60.6812,20.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009DE1").s().p("AgmCuQhKg6gfhgQgSg4ACg9QACg9AVgqQBDAhBFAAQBHAABBghQAWArACA8QADA+gTA3QgfBghKA6QgTAPgUAMQgTgMgTgPgAiDhKQABArAPAqQAkBqBPAyQAsgcAdgqQAagkARgyQAPgqABgrQACgwgPgkQgeALgkAGQgbADgaABQgYgBgcgDQgkgGgegLQgPAkACAwg");
	this.shape_13.setTransform(60.6799,20.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAZQgEAAgBgFIgBgsIAGADIAFAEIACABIgCAlQAAAEgEAAIgBAAg");
	this.shape_14.setTransform(61.05,30.6528);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALATQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgCgEgDIgIgEIgNgFQgHgCgCgGQgDgHADgHQABgEAGgDIAHgCIAAANIgBACQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQANAGAIAEQAMAGAAAJQAAAIgGAEQgCACgDABIgDABg");
	this.shape_15.setTransform(60.875,27.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAMQgCgHAAgDQABgGAEgFQAEgFAAACIAAAMIgDAEIAAAIQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_16.setTransform(59.6458,31.1313);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhzAHQgPgqgBgrQgCgvAPglQAeALAkAGQAbAEAZAAIAAAAQAaAAAbgEQAkgGAegLQAPAlgCAvQgBArgPAqQgRAzgaAkQgdAqgsAbQhPgygkhqgAhrgQQANA2AgAvQAdApAhAWQAigWAdgpQAggvAOg2QAShMgTgyQgeAIgYADQghAFgVAAQgTAAgigFQgXgDgfgIQgSAzASBLg");
	this.shape_17.setTransform(60.675,20.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMARIADgCQAAAAAAAAQAAAAABgBQAAAAgBgBQAAAAAAgBIgCgCIgFgBIgWgEQgIgBgFgEQgFgHABgJQABgMALgFIAEAJIACAIIgCAEQAAABAAAAQAAABAAAAQABAAAAAAQABABABAAIAOABQAJABAGACQAIADAEAEQAFAHgCAJQgBAHgIAFIgIADIgEAAg");
	this.shape_18.setTransform(60.9846,22.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXAgQADgBACgDQABgDgCgDQgBgCgDgBIgXgCQgLAAgHgDQgVgGgIgRQgFgKADgLQAEgMAKgFQAPgIATAHIAHAIIAEAEQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgIACgEgBIgMAAIAKAFIAFACIACACQAAAAAAAAQAAAAAAABQgBAAgBAAQAAAAAAABQgFABgGgBIgIgDQgFgCgCABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABgBABIAAAFQACAGANAFQAHACASACQARABAJAEQALAGACALQAEATgPAJIgQAFgAgJgqQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAEgCIABAAQgDgDgKAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIACADg");
	this.shape_19.setTransform(59.961,15.331);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbAZIAAgLQAHgBACgEIgCgCIgEgDQAMADAHADQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgEgCIgQgDIAKgBQAEAAABgBQAAAAAAAAQAAAAAAgBQAAgBgBAAQAAgBgBgBIgDgDIgFgGIgGgEIgBgDIABgFIACgBIACgBQALAGAHABIACAEIABAPIABABIAJgHQAFgEAEgCQADgBAEADQAEAEgBAEQgBADgDACQgKAHgFAGQgHAGgCAEIgBADIgagDg");
	this.shape_20.setTransform(62.4688,11.8667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAJIgBgXIAPABIAAAcg");
	this.shape_21.setTransform(61.05,24.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAQIgJgYIABgDIAEgDIAAgDIAWACIAAAhg");
	this.shape_22.setTransform(60.525,19.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009DE1").s().p("AglAYIAkg2IABgBIABABIAlA2QgTAIgTAAQgSAAgTgIg");
	this.shape_23.setTransform(19.625,26.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009DE1").s().p("AgXAOQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAFgFABgHQACgIgEgFQAZAHASAUg");
	this.shape_24.setTransform(24.2,12.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009DE1").s().p("AgdgfQgBgEAEAAIA2gFQADAKAAAMQAAAigXAZg");
	this.shape_25.setTransform(25.8409,21.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009DE1").s().p("AgYAOQASgTAagIQgEAGACAIQACAGAEAFQABAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_26.setTransform(15.0321,12.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009DE1").s().p("AgdgSQAAgKACgMIA2AFQAFAAgCAEIglBIQgWgZAAgig");
	this.shape_27.setTransform(13.3923,21.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009DE1").s().p("AhWDEIAAhtIhtAAIAAitIBtAAIAAhtICtAAIAABtIBtAAIAACtIhtAAIAABtgAgFAMIg1BOQAbASAfAAQAhAAAbgSIg1hOQgDgEgDAAQgDAAgDAEgAAdgeQgKACgCAIQgDAGADAHIAyBcQATgPALgWQALgWAAgaQAAgTgHgSgAhqABQAAAZALAWQALAWATAPIAxhcQAEgGgDgHQgDgIgJgBIhIgHQgHASAAATgAANhVQADAIgFAGQgGAIAAAHQABAMAPAAIBNAAQgNgcgagRQgbgRggAAQgfAAgaARQgaARgNAcIBNAAQAHAAAEgEQAEgDAAgFQABgEgBgDIgFgIQgFgGADgIQADgIAIAAQAJAAAEAIg");
	this.shape_28.setTransform(19.575,20.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVAfQgPAAgBgMQAAgHAGgHQAEgGgCgIQgEgHgJgBQgIABgDAHQgDAIAEAGQAHAHgBAHQAAAFgEADQgEAEgIAAIhNAAQANgcAbgPQAagSAfAAQAgAAAbASQAaAPAMAcgABGAQQgSgUgagHQAEAFgCAIQgBAHgFAFQAAAAAAABQgBAAAAAAQAAABABAAQAAAAAAAAIAwAAIAAAAgAhGAQIAxAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgFgFgCgHQgCgIAEgFQgZAHgUAUg");
	this.shape_29.setTransform(19.6,12.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag6AgIA1hNQACgEADAAQAEAAADAEIA0BNQgaASghAAQggAAgagSgAgBgbIgkA2QATAIASAAQAUAAASgIIglg2IgBgBg");
	this.shape_30.setTransform(19.6,25.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiAYQgLgWAAgYQAAgUAHgSIBHAGQAJACADAIQACAGgDAIIgwBbQgTgOgLgXgAgegWQAAAhAWAaIAlhIQACgEgFAAIg2gGQgCANAAAKg");
	this.shape_31.setTransform(13.4568,22.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgrgfQgDgHACgGQADgIAJgCIBIgGQAGAQAAAWQAAAYgLAWQgLAWgTAPgAgZgnQgEAAABAEIAlBIQAXgaAAghQAAgKgDgNg");
	this.shape_32.setTransform(25.7432,22.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009DE1").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgHAAgFgGgAgLgLQgEAGAAAFQAAAHAEAEQAFAFAGAAQAHAAAEgFQAFgEAAgHQAAgFgFgGQgFgEgGAAQgFAAgGAEgAAFAKIAAgDQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAAAIgDgBIgDAAIAAAIIgEAAIAAgUIAHAAIAFABQADABAAAEQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgDAAIAEACIABAEIAAADIAAABIAAAAgAgDAAIAGAAIACgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgDgBIgDAAg");
	this.shape_33.setTransform(69.325,37.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009DE1").s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGgAgKgLQgFAGAAAFQAAAHAFAEQAEAFAGAAQAHAAAFgFQAEgEAAgHQAAgFgEgGQgFgEgHAAQgGAAgEAEgAAFAKIAAgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAIgDgBIgDAAIAAAIIgDAAIAAgUIAGAAIAFABQAEABAAAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgDAAIADACIABAEIAAAEIABAAgAgDAAIAGAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgEgBIgDAAg");
	this.shape_34.setTransform(32.025,37.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270.8,43.6);


(lib.Envelope_Greysvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Envelope_Grey_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606161").s().p("Ap9I9QgIAAgOgDQgcgIgTgZQgNgUAAgaIAAvVQAAgKADgOQADgJAEgGIAIgNQAGgHAGgEIAGgFQAUgOAaAAIT7AAQAaAAAUAOIAGAFQAHAEAEAHQADADAGAKIAGAPIABADQADAKAAALIAAPVQAAAZgOAVQgLARgSAJQgSAKgVAAgAqRHrQAAAHAGAGQAGAFAIAAIT8AAQAHAAAGgGQAGgGAAgHIAAuxIqMKsQgIAKgOAAQgNAAgKgKIpqqngAp1oAIJmKhIKKqrg");
	this.shape.setTransform(72.025,57.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.1,114.6);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgXAwIAAgJIAFABQAKAAABgLIACgJIgShFIAMAAIALA6IAMg6IAMAAIgUBOQgDALgDAEQgFAGgKgBIgGgBg");
	this.shape_15.setTransform(104.5,7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AALAkIAAg1QgBgIgHgBQgGABgFAGIAAA2IgMAAIAAhGIALAAIAAAHQAIgHAGgBQAQAAAAARIAAA3g");
	this.shape_16.setTransform(98.85,6.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AgPAgQgGgFAAgIIAAgEQAAgSAggFIAAgJQgBgKgIAAQgGAAgCAEQgBADAAAGIgMAAIAAgCQAAgUAVAAQATAAABATIAAA1IgKAAIAAgGQgIAHgHAAQgHAAgFgFgAgKAPIAAADQABAJAIAAQAFAAAHgGIAAgVQgVACAAANg");
	this.shape_17.setTransform(93.25,6.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AgUAyIAAhiIALAAIAAAGQAHgHAHAAQAIAAAEAGQAEAFAAAIIAAAhQABAJgDAGQgEAGgIAAQgHAAgIgHIAAAhgAgJghIAAApQAGAFAGAAQAJABAAgMIAAgdQAAgMgJAAQgHABgFAFg");
	this.shape_18.setTransform(87.6361,7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AAYAlIAAg3QgBgJgGAAQgHAAgDAHIAAA2IgMAAIAAgzQAAgIgGAAQgFAAgFAFIAAA4IgNAAIAAhGIALAAIAAAFQAIgGAHAAQAJAAAEAJQAGgJAJAAQAOgBABATIAAA2g");
	this.shape_19.setTransform(80.6,6.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgVAPIAAgeQAAgWAVABQAWgBAAAWIAAAeQAAAXgWAAQgVAAAAgXgAgKgOIAAAfQAAALAKAAQALAAgBgLIAAgfQABgLgLAAQgKAAAAALg");
	this.shape_20.setTransform(73.6,6.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgYAWIAAgsQAAgZAYAAQAKAAAHAGQAHAFAAALIAAALIgMAAIAAgGQAAgQgLgBQgLAAAAAOIAAAsQAAAQALAAQAJAAACgIIABgPIAMAAIAAAKQgCAYgXAAQgYAAAAgag");
	this.shape_21.setTransform(67.725,5.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAWAhIAAgDQADAAACgCQABgBAAgFIAAghQAAgEgCgEQgBgDgFAAQgDAAgFADQgEACAAADIAAAkQAAAFABABQACACADAAIAAADIgcAAIAAgDQADAAACgCIACgGIAAghIgBgIQgBgCgFgBQgDABgFACIgEAEIAAAlQAAAEABACQACACADAAIAAACIghAAIAAgCQABAAAAAAQABAAABgBQAAAAABAAQAAgBAAAAQACgBAAgGIAAgoQAAgFgCgBQgBgCgEAAIAAgDIAZAAIAAAKIAHgHQAIgFAFAAQAJAAADAEIAFAHIABAAIAIgHQAGgEAGAAQAHAAAGAFQAGAEAAALIAAAiQAAAEACACIAFACIAAADg");
	this.shape_22.setTransform(55.925,6.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AgSAaQgJgIAAgSQAAgPAIgJQAIgJALAAQAIAAAEAEQAFADAFAIQADACAAAKIAAAEIggAAQAAAJACAFQAFALAJgBQAEAAAFgCIAHgHIADACQgGALgJAEQgGADgHAAQgIAAgKgHgAgGgWQgCAIAAAIIARAAQAAgMgBgFQgCgFgGAAQgEAAgCAGg");
	this.shape_23.setTransform(47.2,6.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AADAvIAAgEQADAAACgCQABAAAAgGIAAghQAAgGgBAAQgBgEgFgBQgDABgDADIgEAEIAAAkQAAAGABAAQACACADAAIAAAEIghAAIAAgEIAAAAQACAAADgCQACgCAAgEIAAhFQAAgGgBAAQgCgCgEAAIAAgEIAbAAIAAAoIAIgIQAFgDAGgBQAIABAFAEQAFAFAAALIAAAgQAAAFACABQACACADAAIAAAEg");
	this.shape_24.setTransform(40.2625,4.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgHAqQgHgDAAgKIAAgsIgHAAIAAgCIAFgEIAHgHQAGgHAEgIIAEAAIAAAWIANAAIAAAGIgNAAIAAAqQAAAEABABQAAAAABABQAAAAAAABQABAAABAAQAAAAABAAIAFgCIAEgFIADACIgGAJQgGAGgJAAIgIgCg");
	this.shape_25.setTransform(34.175,5.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AADAhIAAgDQADAAADgDQAAgBAAgEIAAghQAAgHAAAAQgCgEgFAAQgCAAgEADIgEAEIAAAlQAAAEAAABQADADADAAIAAADIghAAIAAgFIAAAAIAHgCIACgGIAAgnQAAgFgBgCQgDgCgEAAIAAgCIAaAAIAAAKQAEgGAEgCQAEgDAGAAQAIAAAHAEQAEAFAAAMIAAAgQAAADACACQADADACAAIAAADg");
	this.shape_26.setTransform(27.85,6.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgvAxIAAgFQAGAAACgEIAHgNIAehLIAEAAIAeBIQAEAJAEAIQAEADAEgBIAAAFIgtAAIAAgFIAJgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIgBgGIgCgEIgFgIIgdAAIgHATQAAACAFABIAGABIAAAFgAgWAQIAaAAIgLgfIgBAAg");
	this.shape_27.setTransform(19,4.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AALAkIAAg1QgBgIgGgBQgHABgFAGIAAA2IgMAAIAAhGIALAAIAAAHQAIgHAGgBQAQAAAAARIAAA3g");
	this.shape_28.setTransform(8.55,6.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AAOAuIgEgZIgUAAIgDAZIgNAAIARhbIARAAIATBbgAgHALIAQAAQgEgQgFggg");
	this.shape_29.setTransform(2.7,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,106.9,12.6), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhPBRQgiggAAgvQAAgvAggiQAhghAvAAQAugBAiAhQAhAgABAvQABAvghAiQghAhgvAAIgBAAQguAAghggg");
	mask_1.setTransform(11.4011,11.3761);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED2924").s().p("AgvAhIBFhCIAaAhQgiAigtAAIgQgBg");
	this.shape_1.setTransform(14.7,19.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED2924").s().p("AgVgEQAFgJAQgSQAPgQAAgEQAHAPAAATQAAAogXAdIgUg4g");
	this.shape_2.setTransform(20.7,13);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(9.9,7.8,12.9,14.899999999999999), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhPBRQgiggAAgvQAAgvAggiQAhghAvAAQAugBAiAhQAhAgABAvQABAvghAiQghAhgvAAIgBAAQguAAghggg");
	mask_1.setTransform(11.4511,11.4761);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005DA9").s().p("AhOBLQgbgfgBgpQAAgvAhghQAhgjAugBQAfABAcAQQAbAQAPAbIgVALIgPAHQgSgfgogjQAEAYAYBPIhOgHQAjAXAiAAQgBAIgVAnQgUAmgCAKQgogHgagfg");
	this.shape_1.setTransform(10.7,11.35);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0.1,0.2,21.299999999999997,22.5), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhPBRQgiggAAgvQAAgvAggiQAhghAvAAQAugBAiAhQAhAgABAvQABAvghAiQghAhgvAAIgBAAQguAAghggg");
	mask_2.setTransform(11.4011,11.3761);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBrQANgpADgnQgGgCgNgIQgagPgdgYQAqgBArgKQAFgygDgYIAXASQAbAWALATIAMgDQAOgEAFgEQAHALACAJIgJATQgIAQgJAKQAIAWABAkIgKALIgigZQg5A6gFAAIgHgBg");
	this.shape_2.setTransform(12.8,11.875);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(3.4,1.1,18.900000000000002,21.599999999999998), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhHBSIgKgBQgSgEgJgPQgKgPAEgSQAEgRAPgJQAQgJARAEIAJACIgIgEQgOgMgCgRQgCgSALgOQALgOASgCQASgCAOALIAHAIIB0CSg");
	mask_3.setTransform(11.6907,14.4346);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#F0F9EF","#C9E8C4","#8ACE7F","#3DAE2B"],[0,0.086,0.255,0.49,0.749],0,0,0,0,0,23.3).s().p("AjoDtIAAnZIHRAAIAAHZg");
	this.shape_3.setTransform(23.3,23.7);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0.1,6.2,23.2,16.5), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiCCEQg3g3AAhNQAAhMA2g2QA2g3BNAAQBNAAA2A2QA2A2ABBNQAABNg2A2Qg3A2hNABQhMAAg2g2g");
	mask_2.setTransform(18.5998,18.5998);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FCFCFD","#F2F3F6","#E1E4EB","#C9CFDC","#AAB3C8","#8492AF","#586A92","#253C71","#1F376D"],[0,0.173,0.31,0.435,0.553,0.667,0.776,0.886,0.988,1],9.6,-12.5,-11.3,9.7).s().p("ABWByQgQgjgvgUQgJgFgggNQg9gXgbgXQgvgqAVhAQAMgnAqgVIgEADQgfAYAcAiQAYAeAqAPIABAAQAGADAcAKQA9AXAbAXQAuAngOA9QgMA3gzAXQAegXgRgjg");
	this.shape_3.setTransform(18.7641,18.6875);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(4.9,1.6,27.800000000000004,34.3), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiCCEQg3g3AAhNQAAhMA2g2QA2g3BNAAQBNAAA2A2QA2A3ABBMQAABNg2A2Qg3A2hNABQhMAAg2g2g");
	mask_2.setTransform(18.5998,18.6998);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#FAFBFC","#EDEFF3","#D6DBE5","#B7BFD0","#8F9BB6","#5D6F96","#243B70","#1F376D"],[0,0.118,0.251,0.392,0.537,0.686,0.835,0.988,1],-13.1,-5.1,8.5,3.6).s().p("AghA9QgqgQgYgdQgcgiAggXIAGgEIAKgEQAjgNApADQA3ADA+AdIgSAFQgcgMguASQgrARgLAYQgEAIgBALQgBAOAGADg");
	this.shape_2.setTransform(20.1967,6.0719);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(8.9,0.1,22.700000000000003,12.1), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiCCEQg3g3AAhNQAAhMA2g2QA2g3BNAAQBNAAA2A2QA2A2ABBNQAABNg2A2Qg3A2hNABQhMAAg2g2g");
	mask_1.setTransform(18.5998,18.5998);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E7E6EE","#E4E3EC","#D9DAE5","#C7CADA","#AEB4C9","#8E98B5","#67769B","#394D7E","#1F376D"],[0.004,0.169,0.314,0.447,0.576,0.702,0.824,0.941,1],-1.2,-5.5,10.8,3.3).s().p("AAQBAQg8gEhIgjIAJgSQA1AZA7geQAugVAJgVQAHgMgSgLQAvAVAQAiQAQAigfAXIgHADQghAMgfAAIgKAAg");
	this.shape_1.setTransform(16.1473,30.9684);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(4.4,24.6,23.5,12.600000000000001), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AAAC6QhMAAg3g3Qg2g2AAhNQAAhMA3g3QA2g2BMAAQBNAAA3A3QA2A2AABMQgBBOg2A2Qg2A2hMAAIgBAAg");
	mask_4.setTransform(24.5498,21.5002);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A6DDEB").s().p("AiAC6IgQkEIA6heIBfgjIA5AFQgQAagNAcQgbA6AKARQAQAcBtBrIAABVIiSA1IgIAAQgaAAhdgSg");
	this.shape_4.setTransform(14.5,20.4446);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(6,2.9,23,37.2), null);


(lib.CCHA_Logo_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CCHA_Logo_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009E53").s().p("AJWB7IAAg/Ig3AAIAAA/IgfAAIAAiYIAfAAIAAA8IA3AAIAAg8IAgAAIAACYgAGvB7IAAh7IgoAAIAAgeIBvAAIAAAeIgoAAIAAB7gAEuB7IAAiYIAgAAIAAB7IA3AAIAAAdgAEBB7IgIgaIg0AAIgFAaIgfAAIAiiYIA7AAIAhCYgADyBEIgNhFIgKAAIgQBFIAnAAgAA0B7IAAiYIBgAAIAAAdIhCAAIAAAhIA2AAIAAAdIg2AAIAAAgIBCAAIAAAdgAgGB7IAAg/Ig4AAIAAA/IgeAAIAAiYIAeAAIAAA8IA4AAIAAg8IAdAAIAACYgApvhUQgGgGAAgKQAAgKAGgGQAHgGAJAAQALgBAGAIQAHAGAAAJQAAAKgGAGQgHAHgKAAQgJAAgIgHg");
	this.shape.setTransform(63,37.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D2E62").s().p("AmVFmQgcgIgOgYIhcidQgOgZAHgbQAIgcAZgOIBng8QABgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIhWiSQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAABIhPAtQgCgNgJgJQgKgIgOAAIgDAAIBdg3QASgKATAFQAUAGAJARIBWCTQAKAQgGAUQgGATgQAKIhpA8QgHAEgDAJQgCAJAEAJIBdCdQAFAIAIADQAKACAHgEICRhUQAIgFACgJQACgJgEgIIiDjhIAogXICEDgQAOAZgHAcQgHAbgZAPIiRBUQgQAJgSAAQgJAAgJgCgAHKEPQgJgNAAgiQABgjAKgOQAKgOAZAAQAQAAATAFIAAAVIgggCQgNAAgFAHQgFAIAAAYQgBAXAFAIQAFAIAQAAQAIAAAWgDIAAAWQgVAFgOAAQgaAAgLgQgAGLEeIgkhcIgCAAIAABcIgZAAIAAh7IAmAAIAiBcIACAAIAAhdIAaAAIAAB8gAEnEeIgGgVIgpAAIgFAVIgYAAIAbh8IAvABIAbB7gAEdDxIgNg4IgIAAIgMA4IAhAAgABgEeIAAh8IAZAAIAABkIAsAAIAAAYgAAMEeIAAh8IAZAAIAABkIAsAAIAAAYgAgXEeIgGgVIgpAAIgFAVIgZAAIAbh8IAwABIAaB7gAgjDxIgLg4IgIAAIgMA4IAfAAgAIjEdIAAh5IBNAAIAAAXIg2AAIAAAbIArAAIAAAXIgqAAIAAAZIA2AAIAAAXgAC1EdIAAh7IAZAAIAAB7gAojA0QgUgGgKgRIgxhTQAGADAIAAQAVAAAKgRIAsBKQABAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIBRguIAXAnIhRAvQgLAHgNAAQgGAAgHgCgAmIhKICthkQAEgDABgEQABgFgCgDIhGh2QgCgEgEgBQgFgBgDACIhzBDQgEACgBAFQgBAEACAEIBEB2IgoAXIhFh2QgLgVAGgWQAGgXAVgMIBzhDQAUgMAXAGQAXAGAMAVIBEB2QAMAUgGAXQgGAXgVAMIisBkgAEahNIAAg+IAUAAIAAA+QAAAOAPAAQARAAgBgOIAAg+IATAAIAAA+QAAARgIAHQgIAIgTAAQgiAAgBgggAgUg5QgJgLABgYQgBgZAJgLQAIgNAUAAQAWAAAIANQAJALAAAZQAAAYgJALQgIAMgWAAQgUAAgIgMgAgGh0QgDAHAAAQQAAAQADAHQAFAHAJAAQALAAAFgHQADgHAAgQQAAgQgDgHQgFgIgLAAQgJAAgFAIgAhbg6QgGgKAAgaQABgbAHgKQAIgLATAAQANAAAOAEIgBAQIgYgCQgLAAgDAGQgFAGAAASQABARADAGQAEAHALAAQAIAAAQgDIAAASQgQAEgLAAQgUAAgIgNgAJFgvIAAgnIgagyIAAAOIgYAAIAABLIgTAAIAAhLIgZAAIAAgRIBWAAIARAgIAPggIAWAAIgcA0IAAAogAHOgvIAAhcIATAAIAABcgAD5gvIAAhFIgCAAIgRBBIgTAAIgThCIgBAAIAABGIgTAAIAAhcIAeAAIATBDIAShDIAdAAIAABcgACJgvIAAhGIgBAAIgTBCIgTAAIgShCIgBAAIAABGIgTAAIAAhcIAdAAIATBDIAShDIAdAAIAABcgAGhgvIgbhGIgCAAIAABGIgTAAIAAhdIAdAAIAaBGIACAAIAAhGIATAAIAABdgAIjizQgKgMAAgdQAAgdAKgOQAKgOAYAAQAYAAAKAPQAKAOAAAcQAAAcgJANQgLAOgYAAQgYAAgKgOgAIzj3QgEAIAAATQAAASAFAHQAEAJANAAQANAAAFgJQAEgHAAgSQAAgTgEgIQgFgJgNAAQgNAAgFAJgAClizQgKgNAAgcQAAgdAKgOQAKgOAYAAQAZAAAKAPQAJANAAAdQAAAcgJANQgKAOgZAAQgYAAgKgOgAC2j3QgFAIABATQgBATAFAHQAFAIAMAAQAOAAAEgJQAFgHAAgSQAAgTgFgIQgEgJgOAAQgMAAgFAJgAgHizQgKgNAAgcQAAgdAKgOQAJgOAZAAQAYAAALAPQAJANAAAdQAAAcgJANQgLAOgYAAQgZAAgJgOgAAJj3QgEAJAAASQAAASAEAHQAFAJANAAQAMAAAFgJQAEgHAAgSQAAgTgEgIQgFgJgMAAQgMAAgGAJgAhZizQgIgMAAgfQAAgfAJgNQAJgMAXAAQANAAARAFIgBATIgbgCQgNAAgEAHQgFAHABAVQgBAUAFAHQAEAIANAAIAbgCIAAATQgSAEgMAAQgXAAgJgOgAG9imIAAhsIAkAAQAaAAAKAMQAJALAAAdQAAAdgIAMQgKAPgbAAgAHTi7IAOAAQAOAAAGgKQADgHAAgTQAAgSgDgGQgGgHgOAAIgOAAgAE7imIgNgjIgUAAIAAAiIgVAAIAAhrIApAAQAUAAAJAIQAJAJAAATQAAAVgQAKIAPApgAEZjeIAUAAQAPAAAAgQQAAgQgPAAIgUAAgABWimIAAhsIAWAAIAABXIAnAAIAAAVgAGcinIgFgSIgkAAIgEASIgXAAIAYhsIAqAAIAXBsgAGTjOIgKgxIgHAAIgLAxIAcAAg");
	this.shape_1.setTransform(63.5,36.0387);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.2,72.1);


(lib.btn_X_WV_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_WI_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_WA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_VA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_TX_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_TN_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_SC_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_NY_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_NV_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_NJ_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_NC_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_MN_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAhAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_MD_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_LA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_KY_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_IN_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_IA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_GA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_FL_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_DC_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAABIAaAbAAbgbIgbAcIgZAbAgagbIAaAc");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAABIAaAbAAbgbIgbAcAgagbIAaAcIgZAb");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.7,7.300000000000001,7.5);


(lib.btn_X_CO_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#50ADE3").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_CA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAgAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_X_AR_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0A72BA").ss(1,1,1).p("AAAAAIAhAiAAAAAIggAiAggghIAgAhAAhghIghAh");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.4,8.6,8.9);


(lib.btn_WV_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-48.5,-9,97,18);
	this.shape.setTransform(-68.95,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_WV_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("hannah.billings@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-97,-9.5,194,19);
	this.shape.setTransform(-21.45,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_WV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AHdkEQgHgJgDgEQgfgVgsgEQgQAAgdAZQgfAZgCAAQgHACgXgFIgWgEIgbA0IghgGIhIBQIgZiUIjUAiIgjj3QgNADgJAGQgLAHADAJQAPAjAAApQgCAqgGA3QgIBLgGAPQgGAPg6AvIg+AzQgFAEgLAdQgFAOgEAOQgGAjgHAGQgCABgZgHQgYgHgKANQgLANAEAvQADAZAEAhQAAAGgaARQgeAUgLAQQgQAUAIAaQAPA7AmAvQAnAwA3AbQACAAACACQA3AaACAaQABAFgDAKQgBAGAFABQARADBFgpQApAMAngUQAigVAdgbIAZgCQAbgFAQgOQAOgNAAgeQAAgkAFgLQAJgUAUgxQATgwAJgYIAZhjIAnAcQAnAZAEgNQALgjAJgaQASgvATgRQANgNAxgmQApgjgCgLQgBgMAAgwIABgtIBrA/QADgNACgRQAEghgIgVg");
	this.shape.setTransform(0.0303,-0.0539,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("AkNHsQgFgBABgGQADgKgBgFQgCgag3gaQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQg3gbgngwQgmgvgPg7QgIgaAQgUQALgQAegUQAagRAAgGIgHg6QgEgvALgNQAKgMAYAGQAZAHACgBQAHgGAGgjIAJgcQALgdAFgEIA+gzQA6gvAGgPQAGgPAIhLQAGg3ACgqQAAgpgPgjQgDgJALgHQAJgGANgDIAjD3IDUgiIAZCUIBIhQIAhAGIAbg0IAWAEQAXAFAHgCQACAAAfgZQAdgZAQAAQAsAEAfAVIAKANQAIAVgEAhQgCARgDANIhrg/IgBAtQAAAwABAMQACALgpAjQgxAmgNANQgTARgSAvQgJAagLAjQgEANgngZIgngcIgZBjIgcBIQgUAxgJAUQgFALAAAkQAAAegOANQgQAOgbAFIgZACQgdAbgiAVQgnAUgpgMQhAAmgUAAIgCAAg");
	this.shape_1.setTransform(0.0303,-0.0059,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AkNHsQgFgBABgGQADgKgBgFQgCgag3gaQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQg3gbgngwQgmgvgPg7QgIgaAQgUQALgQAegUQAagRAAgGIgHg6QgEgvALgNQAKgMAYAGQAZAHACgBQAHgGAGgjIAJgcQALgdAFgEIA+gzQA6gvAGgPQAGgPAIhLQAGg3ACgqQAAgpgPgjQgDgJALgHQAJgGANgDIAjD3IDUgiIAZCUIBIhQIAhAGIAbg0IAWAEQAXAFAHgCQACAAAfgZQAdgZAQAAQAsAEAfAVIAKANQAIAVgEAhQgCARgDANIhrg/IgBAtQAAAwABAMQACALgpAjQgxAmgNANQgTARgSAvQgJAagLAjQgEANgngZIgngcIgZBjIgcBIQgUAxgJAUQgFALAAAkQAAAegOANQgQAOgbAFIgZACQgdAbgiAVQgnAUgpgMQhAAmgUAAIgCAAg");
	this.shape_2.setTransform(0.0303,-0.0059,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-37.4,73.6,74.9);


(lib.btn_WI_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-51.75,-9.25,103.5,18.5);
	this.shape.setTransform(-65.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_WI_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("ashley.boggs@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-95,-9,190,18);
	this.shape.setTransform(-23.475,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_WI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AHTH3QgEg2ALh2QAKhyAKgbQAIgUAHhTQAGhXACgGQATg3APgrQAehUgFgLQgFgMgWAdIgVAfIgTAyIiCB9IAig7QAkg/AIgLQAEgEAQggIgghUQgJAEgIgFQgSgIABgnQACgmgOgPIgPgGQgMgYgHgMQgGgLgqgHIgqgFQgTAAiigkQh7gcgig8Ih8gRQAHgRADgTQAHgkgRgEQgJgDhuA5QhnA1gLgXIAAgCQgJAFgHAKQgGAKgBALQAAAZgIBdQgiAZghAcQhCA3AJAMQABABAkAbQAZATgBAUQgCAPgJAvQgIApAAAKIAABMIA0ArIBBAiIASAEQAUAJAOAVQATAbARAWQATAXAIAEQA/AcAAAdQAFAvAKAvQAIAuAJAtQAKAuAFAOQAHAXAWATQARAQAVAJQAOAGAOAYQAKAPAEAMIIwgbQgLgvAAgkg");
	this.shape.setTransform(0.0273,0.0072,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("AhgJLQgOgYgOgHQgVgJgRgPQgWgUgHgXQgFgOgKgtQgJgugIguQgKgvgFgvQAAgcg/gdQgIgDgTgYQgRgVgTgcQgOgVgUgIIgSgFIhBgiIg0grIAAhMQAAgKAIgpIALg+QABgTgZgTIglgdQgJgMBCg3QAhgbAigaQAIhdAAgZQABgLAGgKQAHgJAJgGIAAACQALAXBng0QBug5AJACQARAFgHAkQgDASgHARIB8ARQAiA8B7AcQCiAkATAAIAqAFQAqAIAGAKIATAkIAPAHQAOAOgCAmQgBAoASAIQAIAEAJgEIAgBUQgQAggEAEQgIAMgkA+IgiA7ICCh9IATgyIAVgfQAWgdAFAMQAFAMgeBTIgiBiQgCAGgGBYQgHBSgIAUQgKAcgKBxQgLB2AEA2QAAAlALAuIowAbQgEgLgKgPg");
	this.shape_1.setTransform(0.0273,0.0011,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AhgJLQgOgYgOgHQgVgJgRgPQgWgUgHgXQgFgOgKgtQgJgugIguQgKgvgFgvQAAgcg/gdQgIgDgTgYQgRgVgTgcQgOgVgUgIIgSgFIhBgiIg0grIAAhMQAAgKAIgpIALg+QABgTgZgTIglgdQgJgMBCg3QAhgbAigaQAIhdAAgZQABgLAGgKQAHgJAJgGIAAACQALAXBng0QBug5AJACQARAFgHAkQgDASgHARIB8ARQAiA8B7AcQCiAkATAAIAqAFQAqAIAGAKIATAkIAPAHQAOAOgCAmQgBAoASAIQAIAEAJgEIAgBUQgQAggEAEQgIAMgkA+IgiA7ICCh9IATgyIAVgfQAWgdAFAMQAFAMgeBTIgiBiQgCAGgGBYQgHBSgIAUQgKAcgKBxQgLB2AEA2QAAAlALAuIowAbQgEgLgKgPg");
	this.shape_2.setTransform(0.0273,0.0011,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-46.7,87.5,93.5);


(lib.btn_WA_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-50.75,-8.75,101.5,17.5);
	this.shape.setTransform(-66.25,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_WA_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("hayley.davis@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-87.75,-8.75,175.5,17.5);
	this.shape.setTransform(-30.25,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-11.3,236.7,22.6);


(lib.btn_WA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("Ak7ooIAPA9IAqBBIgbAsIAGAsQAEAzgKAfQgPAyAAAPIgsgZQgUAZgYAWQgvAtgQgOQgMgMA3g6QA7g9gGgSQgGgUhOgeQhUghgNgOQgcghgpgYQgygegWAUQgTAQAIA4QAEAeAHAxQAAAjgPCtIAAAiIgRAXIARA6QgGAZgLAJQgIAHAFAeQAGAeAMACQA7AHAZApQADAEABAEQAAADgCAAIA0A3IADA9QAIA/ASAPQAQAMAvgIQA1gJAOAFQASAGAzAdQAzAdAIADQAMAFAygCQAZgBAWgCIA4gDQA+gBAjAIQAbAGD8AaQDyAgAaAjICusXg");
	this.shape.setTransform(0.0483,0.1966,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51ACE1").s().p("AEQHkQj7gagbgGQgjgIg/ACIg3ACIgwADQgxACgMgFQgIgDgzgcQgzgegTgGQgNgFg1AJQgvAJgRgNQgSgOgHhAIgEg9Igzg3QAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgEQgagpg6gHQgMgBgGgfQgGgeAJgHQALgJAGgZIgRg6IARgXIAAgiQAPitAAgjIgMhPQgHg4ATgQQAVgUAzAeQAoAYAdAhQAMAOBUAhQBOAfAHATQAGASg7A9Qg4A7ANALQAPAPAwgtQAXgWAVgaIAsAZQAAgPAPgyQAJgfgEgyIgFgtIAbgsIgqhBIgPg9IQFE2IiuMXQgagjjzggg");
	this.shape_1.setTransform(0.0158,0.0308,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AEQHkQj7gagbgGQgjgIg/ACIg3ACIgwADQgxACgMgFQgIgDgzgcQgzgegTgGQgNgFg1AJQgvAJgRgNQgSgOgHhAIgEg9Igzg3QAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgEQgagpg6gHQgMgBgGgfQgGgeAJgHQALgJAGgZIgRg6IARgXIAAgiQAPitAAgjIgMhPQgHg4ATgQQAVgUAzAeQAoAYAdAhQAMAOBUAhQBOAfAHATQAGASg7A9Qg4A7ANALQAPAPAwgtQAXgWAVgaIAsAZQAAgPAPgyQAJgfgEgyIgFgtIAbgsIgqhBIgPg9IQFE2IiuMXQgagjjzggg");
	this.shape_2.setTransform(0.0158,0.0308,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-41.8,107.9,83.69999999999999);


(lib.btn_VA_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-48.5,-8.8,97,17.6);
	this.shape.setTransform(-68.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_VA_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("nate.levine@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-82.6,-8.8,165.2,17.6);
	this.shape.setTransform(-35.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_VA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AMODeQgGgggFgMQgJgVgNAEQgPAEgwAAIgsgCIAkgkIgihDIAggPQgOgGgOgLQgbgWADgVQAGghAAgRQABgdgRgUQgMgOhYgRQhZgSgZgbQgHgJAAgFQgBgEAGgDQACgXAAgaQgCglgIgVQgJgZgkgMQgmgKgHgDQgIgDADgTIAFgSIgsgLQgPgVgMgPQAIAXgEAgQgCAQgEALIhrg/IAAAuQgBAvABAMQABAMgoAhQg8AygCACQgQAQgSAxQgKAagMAjQgFANgngZIgmgcIgZBjQgKAogvBkQgFALAAAkQAAAegOANQgPAPgdAEIgZACQgcAbgjAVQgmAWgqgOQhFAogRgCQgFAAACgGQADgKgBgFQgCgag4gbQgCgCgCAAIhzBjQgPAcgXAhQguBCgmAcQBvgPDlgdQFVgtDMgjQC9ggEIgsQDcglAvgJQgHAAACgGg");
	this.shape.setTransform(1.1824,-0.6639,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("ArOFyQAXggAPgcIBzhjQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQA4AbACAaQAAAFgDAKQgBAFAFABQARACBFgoQAqAOAmgWQAigVAdgbIAZgCQAcgEAQgPQAOgNAAgeQAAgkAFgLQAvhlAKgnIAZhjIAlAcQAnAZAGgNIAVg+QASgwARgQIA+g0QAogigBgLQgBgMABgvIAAguIBrA/QAEgMACgPQAEghgIgWIAbAkIAsALIgFASQgEASAJAEQAHADAmAKQAjAMAKAZQAIAUACAlQAAAagCAYQgGADABAEQAAAFAHAJQAZAbBZASQBYARAMAOQARAUgBAdQgBARgFAhQgDAVAbAVQAOALAOAHIggAPIAiBDIgkAkIAsABQAvABAQgEQANgEAJAVQAFAMAFAgQgBAGAHAAIkLAuInFBMQjMAjlVAtIlUAsQAmgdAuhCg");
	this.shape_1.setTransform(0.0163,0.033,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("ArOFyQAXggAPgcIBzhjQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQA4AbACAaQAAAFgDAKQgBAFAFABQARACBFgoQAqAOAmgWQAigVAdgbIAZgCQAcgEAQgPQAOgNAAgeQAAgkAFgLQAvhlAKgnIAZhjIAlAcQAnAZAGgNIAVg+QASgwARgQIA+g0QAogigBgLQgBgMABgvIAAguIBrA/QAEgMACgPQAEghgIgWIAbAkIAsALIgFASQgEASAJAEQAHADAmAKQAjAMAKAZQAIAUACAlQAAAagCAYQgGADABAEQAAAFAHAJQAZAbBZASQBYARAMAOQARAUgBAdQgBARgFAhQgDAVAbAVQAOALAOAHIggAPIAiBDIgkAkIAsABQAvABAQgEQANgEAJAVQAFAMAFAgQgBAGAHAAIkLAuInFBMQjMAjlVAtIlUAsQAmgdAuhCg");
	this.shape_2.setTransform(0.0163,0.033,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,-36.1,124,71.6);


(lib.btn_TX_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-49,-9.4,98,18.8);
	this.shape.setTransform(-68.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.6,-11.3,235.1,22.6);


(lib.btn_TX_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("gregory.chandler@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-102,-9,204,18);
	this.shape.setTransform(-16.4,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_TX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-130.35,-141.7,0.1768,0.1768);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AYAA7QAAgPgZhGQgahHgIgJQgFgFgaglIgYgkQgEisAChvQgCgaAEghQAEg5g2ghQgRgKgVgGIgRgFIAAgEQgZAEgTgGQgMgEgtgeQgugggKgFQgOgGgRAKQgUALgBAAQgEAAgTgJQgTgKgKAAQgiADgbAHQgQANgUAMQgpAYgYgHQgWgGgkgZQgqgdgFgDQgOgGgcAiIgZAjIgTgyIg5AAQgWgGgUAEQgRADgYAAQgXAAgHgDQgDgBgJgcQgKgdgQgJQgSgJgmAEIgiAFIhSAAIhMgiQgIgsgLgIQgHgFgqACIgpADIhDg0IAPoRIqKgyIh2TsItVhnIAAA3IAoAEIFSFzIAJB0QAOB7AdAiQBBBHBIA3QBuBVA6gOQArgLA3heQAzhYAkAAQBKAAC4AUICmDIIAmBhQAqBmAVAcQASAXAPA1QAOAvAKAHIBqBSIAsCmQA3CsA4AeQA4AeDJAsQBlAXBZAQIhFkCIAZhOIgyggIBDgPIAbhWIg0giQA5gTAMgIQAPgIAVggIgXgZQAkgUAfgUQALgHAsgWQAhgQACgFQABgGgJgbQgJgdAAgDQAAgFAvgDQAggCAaAAQAHAAAjAPQAkAOATgKQBng5APgKQAGgFAOhDQANhEgBgYQgCgiAEgZQAFgiAQgHQAMgEAGAoQAGAqAIAAQAJAAA/gSQBIgVAOgDIA/gKQgSgfAYgnQAcgvAAgBQgBglAAgZQAAgwABgOQABgKAOhEQAOhBAAgMg");
	this.shape.setTransform(-4.6735,-27.0373,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51ACE1").s().p("AHlW4QjJgtg4geQg4gdg3isIgsinIhqhSQgKgGgOgvQgPg2gSgXQgVgbgqhnIgmhhIimjIQi4gThKAAQgkAAgzBYQg3BdgrAMQg6ANhuhUQhIg3hBhHQgdgjgOh6IgJh0IlSlzIgogEIAAg3INVBnIB2zsIKKAyIgPIRIBDA0IApgDQAqgCAHAFQALAIAIAsIBMAiIBSAAIAigGQAmgEASAKQAQAIAKAdQAJAdADABQAHADAXAAQAYAAARgDQAUgFAWAHIA5AAIATAyIAZgkQAcgiAOAHQAFACAqAeQAkAZAWAGQAYAGApgXQAUgMAQgNQAbgHAigDQAKAAATAJQATAKAEAAIAVgLQARgKAOAGQAKAEAuAgQAtAfAMAEQATAFAZgDIAAAEIARAEQAVAHARAKQA2AggEA6QgEAhACAaQgCBvAECsIAYAkQAaAlAFAFQAIAIAaBHQAZBGAAAQQAAALgOBCQgOBEgBAKQgBAOAAAvIABA/IgcAvQgYAoASAfIg/AKIhWAYQg/ASgJAAQgIAAgGgqQgGgpgMAFQgQAGgFAiQgEAZACAiQABAZgNBEQgOBDgGAEQgPALhnA4QgTAKgkgNQgjgQgHAAQgaAAggACQgvADAAAFQAAADAJAdQAJAcgBAFQgCAGghAQQgsAVgLAHQgfAVgkATIAXAZQgVAggPAIQgMAIg5ATIA0AiIgbBWIhDAPIAyAgIgZBOIBFECQhZgQhlgWg");
	this.shape_1.setTransform(-4.6735,-27.0726,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AHlW4QjJgtg4geQg4gdg3isIgsinIhqhSQgKgGgOgvQgPg2gSgXQgVgbgqhnIgmhhIimjIQi4gThKAAQgkAAgzBYQg3BdgrAMQg6ANhuhUQhIg3hBhHQgdgjgOh6IgJh0IlSlzIgogEIAAg3INVBnIB2zsIKKAyIgPIRIBDA0IApgDQAqgCAHAFQALAIAIAsIBMAiIBSAAIAigGQAmgEASAKQAQAIAKAdQAJAdADABQAHADAXAAQAYAAARgDQAUgFAWAHIA5AAIATAyIAZgkQAcgiAOAHQAFACAqAeQAkAZAWAGQAYAGApgXQAUgMAQgNQAbgHAigDQAKAAATAJQATAKAEAAIAVgLQARgKAOAGQAKAEAuAgQAtAfAMAEQATAFAZgDIAAAEIARAEQAVAHARAKQA2AggEA6QgEAhACAaQgCBvAECsIAYAkQAaAlAFAFQAIAIAaBHQAZBGAAAQQAAALgOBCQgOBEgBAKQgBAOAAAvIABA/IgcAvQgYAoASAfIg/AKIhWAYQg/ASgJAAQgIAAgGgqQgGgpgMAFQgQAGgFAiQgEAZACAiQABAZgNBEQgOBDgGAEQgPALhnA4QgTAKgkgNQgjgQgHAAQgaAAggACQgvADAAAFQAAADAJAdQAJAcgBAFQgCAGghAQQgsAVgLAHQgfAVgkATIAXAZQgVAggPAIQgMAIg5ATIA0AiIgbBWIhDAPIAyAgIgZBOIBFECQhZgQhlgWg");
	this.shape_2.setTransform(-4.6735,-27.0726,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.3,-141.7,260.1,282.9);


(lib.btn_TN_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s("#FFFFFF").ss(0.8).dr(-48.4,-8.8,96.8,17.6);
	this.shape.setTransform(-68.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.2,-11.3,235.7,22.6);


(lib.btn_TN_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("ashley.boggs@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s("#FFFFFF").ss(0.8).dr(-89.8,-9,179.6,18);
	this.shape.setTransform(-28.6,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-11.3,237.8,22.6);


(lib.btn_TN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AnBEqQBcgIAqgHQDngeC6gSQDsgYA6gFQAPg0ACgFQABgEAQACQAIAAAPACQADAAAHgeQAHggAKgHQALgHAngHQAmgHAJgGQALgHAXgbQAUgYAFgCIASgFQAOgEAKgIQAIgHANgfQAOggAHgGQAJgJARAEQAXAFADAAQAMgCAVgOQAVgNAFgJQAEgGAQAEQAQAEACgCQAsgsACgTQABgEAQh0QjqAdhvANQmpA1kmAdIlUAiIAAAuIk5AdIgPARIgMArQgNAvAAAWQAAAEgCAJQgCAPgOAfQgQAigEARQgKAqgmBlQgGANgLAQQERgGDOgTQgGgIgEgC");
	this.shape.setTransform(-0.1046,-0.0211,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("AuRElQAnhkAJgrQAFgRAPghQAOgfACgQQADgIAAgFQAAgWAMguIAMgrIAPgRIE5geIAAguIFUgiQEngcGog2IFagpIgSB3QgCATgrAsQgDADgQgEQgQgFgDAGQgGAKgUANQgWAOgMABQgDABgXgFQgRgEgJAIQgHAHgNAfQgOAggHAHQgKAHgPAEIgRAGQgFACgVAYQgXAbgLAGQgJAHgmAHQgnAHgKAGQgLAHgHAhQgGAegDAAIgYgCQgQgCgBAEIgRA4Qg6AGjrAYQi7ASjnAeQgqAGhcAJQgGgIgEgDQAEADAGAIQjOATkRAFQAMgQAFgNg");
	this.shape_1.setTransform(0.0355,-0.0007,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AuRElQAnhkAJgrQAFgRAPghQAOgfACgQQADgIAAgFQAAgWAMguIAMgrIAPgRIE5geIAAguIFUgiQEngcGog2IFagpIgSB3QgCATgrAsQgDADgQgEQgQgFgDAGQgGAKgUANQgWAOgMABQgDABgXgFQgRgEgJAIQgHAHgNAfQgOAggHAHQgKAHgPAEIgRAGQgFACgVAYQgXAbgLAGQgJAHgmAHQgnAHgKAGQgLAHgHAhQgGAegDAAIgYgCQgQgCgBAEIgRA4Qg6AGjrAYQi7ASjnAeQgqAGhcAJQgGgIgEgDQAEADAGAIQjOATkRAFQAMgQAFgNg");
	this.shape_2.setTransform(0.0355,-0.0007,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-24.9,139.9,50.3);


(lib.btn_SC_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-50,-8.8,100,17.6);
	this.shape.setTransform(-67.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.6,-11.3,235.1,22.6);


(lib.btn_SC_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("laura.livingston@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-98.4,-8.8,196.8,17.6);
	this.shape.setTransform(-20,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_SC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.instance = new lib.Image_4();
	this.instance.parent = this;
	this.instance.setTransform(-48.75,-36.65,0.1753,0.1753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AEKl1Ij6AbQgHgUghgUQhEgpiHABQhjAAg0AgQgqAagFADQgiARgxAKQgaAtgIAOQgUAlAGAHQAFAIA6AdQAdAOAcAMIAnA9QApA+APAHQAdAOAwAhQA8AqAMAXQAiA9AKAIQAFAEAgAQQAfASAIAMQAKAVAaBQIAYAKQAXAMAHAMQAEAKAKApQAKAmAKADQAXAHATADIAbg8IAqgZQgqgyAAgSQAAgHA/gDQBHgDARgOQAagTAJgNQALgOAgg7QBCguAPg0QAEgQgBgPIgCgMQBhiDAMgXQACgDALgHg");
	this.shape.setTransform(-6.2382,2.8637,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AA2GhQgKgEgKglQgKgqgEgJQgHgMgXgMIgYgKQgahQgKgVQgIgNgfgRQgggQgFgEQgKgIgig9QgMgXg8gqQgwghgdgOQgPgIgpg+Igng8Ig5gbQg6gcgFgIQgGgHAUgmIAig6QAxgLAigRIAvgdQA0gfBjAAQCHgBBEAoQAhAUAHAVID6gbIEgDRQgLAGgCAEQgMAXhhCDIACALQABAPgEARQgPA0hCAuQggA7gLAOQgJANgaATQgRANhHADQg/ADAAAIQAAARAqAyIgqAZIgbA9QgTgDgXgHg");
	this.shape_1.setTransform(-6.3902,2.8444,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AA2GhQgKgEgKglQgKgqgEgJQgHgMgXgMIgYgKQgahQgKgVQgIgNgfgRQgggQgFgEQgKgIgig9QgMgXg8gqQgwghgdgOQgPgIgpg+Igng8Ig5gbQg6gcgFgIQgGgHAUgmIAig6QAxgLAigRIAvgdQA0gfBjAAQCHgBBEAoQAhAUAHAVID6gbIEgDRQgLAGgCAEQgMAXhhCDIACALQABAPgEARQgPA0hCAuQggA7gLAOQgJANgaATQgRANhHADQg/ADAAAIQAAARAqAyIgqAZIgbA9QgTgDgXgHg");
	this.shape_2.setTransform(-6.3902,2.8444,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-36.6,97.1,73.1);


(lib.btn_NY_WNY_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737, ext.1061286022", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-47.6,-8.8,95.2,17.6);
	this.shape.setTransform(-69.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_NY_WNY_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("michelle.beck2@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-96.4,-9.6,192.8,19.2);
	this.shape.setTransform(-22,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_NY_ENY_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-51.4,-9,102.8,18);
	this.shape.setTransform(-66.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.6,-11.3,235.1,22.6);


(lib.btn_NY_ENY_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("hayley.davis@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-89.4,-9.6,178.8,19.2);
	this.shape.setTransform(-29,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_NY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(-62.95,-48.5,0.1759,0.1759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AL0GvIhRAfIiwBMIAPg0IABAAIgTgfIAdgkQgLgFgFgKQgDgDgDg2IgHiXQgChggGhZQAAgLgCgFQgGgxgZhWQgZhYgNgOQgOgQgOg5QgPg5ADgeQAEgagNgkQgKgcgKgLQgEgEgGgiQgFgdgEggIhJATQjoA5gkAbQgWARgiBHQgRAjgNAgIhSBpIAWAFQAWAGAAAIQAAAPgTAVIATAeQAQAggMAQQgLAQgbAVQgdAVgJAHQgQAPgvAZQg1AbgXABQgTABg2gFQg7gHgLAAQgMAAAAABQgEAFggAJQgkALgzAZIgtAXIAWA9QAUA/gKAKQhVBVg8BCIAABQIG4hVQG6hTAOAIQASAJAOAQQALAAAKAHQAKAGAFAKQAEAMAFAZQAGAVARAJQAKAGAgAJQAVAGAAAIQCzA0AEAHQAHArABAlQAoAfAXgGQAegIBfhMIB8hKg");
	this.shape.setTransform(1.9305,-1.0296,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AHWJCQgCglgGgrQgEgHizg0QAAgIgVgGQgggKgKgFQgSgKgGgVQgEgZgEgLQgFgLgKgGQgKgGgLAAQgPgRgRgIQgPgJm5BUIm4BVIAAhQQA8hCBVhVQAKgKgUg/IgWg9IAsgXQA0gaAkgKQAfgKAEgEQABgBAMAAQALAAA6AGQA3AGATgBQAXgCA1gbQAugZARgOQAIgIAdgVQAbgVAMgPQAMgQgRghIgSgdQATgVAAgPQAAgIgWgHIgWgEIBShpQAMggARgkQAihGAXgRQAjgcDpg4IBJgTQADAfAGAeQAGAiAEAEQAJAKALAdQANAkgEAaQgDAeAOA5QAOA5APAQQANAOAZBXQAZBWAGAyQACAFAAALQAGBYACBhIAHCWQADA2ACAEQAFAJAMAGIgdAkIATAfIgCAAIgPA0ICwhMIBSgfIAWAOIh8BKQhfBMgdAIIgIAAQgWAAghgZg");
	this.shape_1.setTransform(1.7599,-0.9816,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AHWJCQgCglgGgrQgEgHizg0QAAgIgVgGQgggKgKgFQgSgKgGgVQgEgZgEgLQgFgLgKgGQgKgGgLAAQgPgRgRgIQgPgJm5BUIm4BVIAAhQQA8hCBVhVQAKgKgUg/IgWg9IAsgXQA0gaAkgKQAfgKAEgEQABgBAMAAQALAAA6AGQA3AGATgBQAXgCA1gbQAugZARgOQAIgIAdgVQAbgVAMgPQAMgQgRghIgSgdQATgVAAgPQAAgIgWgHIgWgEIBShpQAMggARgkQAihGAXgRQAjgcDpg4IBJgTQADAfAGAeQAGAiAEAEQAJAKALAdQANAkgEAaQgDAeAOA5QAOA5APAQQANAOAZBXQAZBWAGAyQACAFAAALQAGBYACBhIAHCWQADA2ACAEQAFAJAMAGIgdAkIATAfIgCAAIgPA0ICwhMIBSgfIAWAOIh8BKQhfBMgdAIIgIAAQgWAAghgZg");
	this.shape_2.setTransform(1.7599,-0.9816,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-48.5,125.4,96.8);


(lib.btn_NV_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-50,-9,100,18);
	this.shape.setTransform(-67.45,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_NV_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("kristen.cayton@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-95.5,-9.5,191,19);
	this.shape.setTransform(-22.475,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-11.3,236.7,22.6);


(lib.btn_NV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("ABtuQIACgEIpFigIjpMrIN+U5IAEgKIAdi/QgDgPAAgPQAAgfASgCQATgCAnALQAeAJANAHQAKAIAmhBIE74eg");
	this.shape.setTransform(0.0284,0.1879,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51ACE1").s().p("Aq+kGIDosrIJFCgIgBADIJSB7Ik7YeQgnBAgJgIQgOgHgegJQgmgLgUACQgSACAAAfQAAAPAEAPIgeC/IgEALg");
	this.shape_1.setTransform(0.0122,0.0199,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("Aq+kGIDosrIJFCgIgBADIJSB7Ik7YeQgnBAgJgIQgOgHgegJQgmgLgUACQgSACAAAfQAAAPAEAPIgeC/IgEALg");
	this.shape_2.setTransform(0.0122,0.0199,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-80.5,106.2,161.1);


(lib.btn_NJ_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-51.25,-9.75,102.5,19.5);
	this.shape.setTransform(-66.725,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.9,-11.3,235.4,22.6);


(lib.btn_NJ_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("kristen.cayton@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-96.25,-8.5,192.5,17);
	this.shape.setTransform(-22.225,1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_NJ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AChgmQgKgRgegcIgdgYIAEhHQACABAEADQgBgjgHgtQgEgGiyg1QAAAJgPAhQgIASgLAWQgFALgjAhQAVAWgCAcQAAARA4A9QA2A7gDAPQgCANghAoQgnAvgQAUQgOASgEAGQgHAKAAAGQAAATAVAhQAEABBhAYQAeAIAaALIgGARQgCATASAIQAVAKAkhbQAhhTAAgbIAAhaQABAAAXgbQAVgcgLgRg");
	this.shape.setTransform(-0.0309,-0.0644,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AAkE6QgSgIACgSIAGgSQgagKgegIIhlgZQgVghAAgUQAAgGAHgKIASgYIA3hDQAhgoACgNQADgOg2g8Qg4g9AAgQQACgdgVgVQAjgiAFgLIATgnQAPgiAAgJQCyA1AEAGQAHAtABAjIgGgEIgEBHIAdAZQAeAbAKARQALARgVAdIgYAaIAABaQAAAcghBTQggBRgVAAIgEgBg");
	this.shape_1.setTransform(0.0455,-0.0016,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AAkE6QgSgIACgSIAGgSQgagKgegIIhlgZQgVghAAgUQAAgGAHgKIASgYIA3hDQAhgoACgNQADgOg2g8Qg4g9AAgQQACgdgVgVQAjgiAFgLIATgnQAPgiAAgJQCyA1AEAGQAHAtABAjIgGgEIgEBHIAdAZQAeAbAKARQALARgVAdIgYAaIAABaQAAAcghBTQggBRgVAAIgEgBg");
	this.shape_2.setTransform(0.0455,-0.0016,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-24.3,27.2,49.5);


(lib.btn_NC_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-104.1,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA",lineWidth:232},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-59,-11,118,22);
	this.shape.setTransform(-47.95,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.9,-12,237.3,23.3);


(lib.btn_NC_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("mary.johnson@amerigroup.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-104.3,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA",lineWidth:232},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-104.5,-8.5,209,17);
	this.shape.setTransform(-1.475,1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.3,-11.3,236.7,22.6);


(lib.btn_NC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.instance = new lib.Image_5();
	this.instance.parent = this;
	this.instance.setTransform(-71.15,-34.5,0.1743,0.1743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AOXjxIgsAwIgTg0QgYAJgbAIQg1AQgLgGQgLgFgDgQIgBgPIARAFQAWABAcgQQAWgMAngXQAdgOAPANQAOAMgSgyQgZg+gFgSQgEgMAAgHQj0AoncBSQjBAhlgAvQgCAJgHA2QgGAugCALQgEAXgqAoQgDADgQgEQgQgEgDAFQgFAIgVAOQgVAPgMABQgEABgXgGQgRgDgIAIQgGAHgOAfQgNAegJAHQgJAIgOAEQgOADgFACQgDACgWAZQgXAagLAIQgLAHgmAHQgnAIgJAGQgMAHgHAgQgGAdgCAAQgOgBgIgBQgRgBgBADQgBACgGAVQgGAYgEALQA3gEBtgLQA8gFA+gNQAxgKAhgQQAIgEAogZQA0gfBjgBQCHgCBEApQAiAUAHAVID5gcIEeDVQASgKA/gYQA6gZAQgZQANgYAUgtQAUgnAhgaQAbgUA1gWQAvgTAWgVQAlgiAHg0Ig5gSQAbgpgCgXQgBgOgegKIgegHIAwgiIAcAUQAhARAVgJQAYgLAWgkQAVgjACgbQACglgcgcg");
	this.shape.setTransform(-0.8244,1.9469,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AB1DhIj5AcQgHgVgigUQhEgpiHACQhiABg0AfIgwAdQgiAQgxAKQg9ANg9AFQhtALg3AEIALgjIAGgXQABgDARABIAWACQADAAAGgdQAGggAMgHQAKgGAmgIQAngHAKgHQAMgIAXgaQAVgZADgCIATgFQAOgEAJgIQAJgHANgeQAOgfAGgHQAIgIARADQAXAGAEgBQAMgBAWgPQAUgOAFgIQAEgFAPAEQARAEACgDQAqgoAEgXQADgLAGguIAIg/QFggvDBghQHdhSDzgoQAAAHAEAMQAGASAYA+QATAygPgMQgOgNgeAOIg8AjQgcAQgWgBIgRgFIABAPQADAQALAFQALAGA1gQQAagIAZgJIATA0IAsgwQAbAcgCAlQgBAbgVAjQgWAkgZALQgVAJgggRIgdgUIgwAiIAeAHQAeAKABAOQACAXgbApIA5ASQgGA0gmAiQgWAVgvATQg1AWgbAUQghAagUAnQgTAtgOAYQgPAZg6AZQhAAYgSAKg");
	this.shape_1.setTransform(-0.7378,1.9463,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AB1DhIj5AcQgHgVgigUQhEgpiHACQhiABg0AfIgwAdQgiAQgxAKQg9ANg9AFQhtALg3AEIALgjIAGgXQABgDARABIAWACQADAAAGgdQAGggAMgHQAKgGAmgIQAngHAKgHQAMgIAXgaQAVgZADgCIATgFQAOgEAJgIQAJgHANgeQAOgfAGgHQAIgIARADQAXAGAEgBQAMgBAWgPQAUgOAFgIQAEgFAPAEQARAEACgDQAqgoAEgXQADgLAGguIAIg/QFggvDBghQHdhSDzgoQAAAHAEAMQAGASAYA+QATAygPgMQgOgNgeAOIg8AjQgcAQgWgBIgRgFIABAPQADAQALAFQALAGA1gQQAagIAZgJIATA0IAsgwQAbAcgCAlQgBAbgVAjQgWAkgZALQgVAJgggRIgdgUIgwAiIAeAHQAeAKABAOQACAXgbApIA5ASQgGA0gmAiQgWAVgvATQg1AWgbAUQghAagUAnQgTAtgOAYQgPAZg6AZQhAAYgSAKg");
	this.shape_2.setTransform(-0.7378,1.9463,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.8,-34.5,142.5,69.9);


(lib.btn_MN_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-48.25,-9,96.5,18);
	this.shape.setTransform(-69.2,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_MN_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("kara-leigh.sakis@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-100.25,-9.5,200.5,19);
	this.shape.setTransform(-17.7,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-11.3,236.7,22.6);


(lib.btn_MN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(-54.35,-63.05,0.1755,0.1755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AIknVQgKgDgpABQgvAAgPAIQgPAHgwgTQglgPgrgZQg5gjghgSQg9ghggAAQg6AAiVgZQgtgIgtACQgIgdgMgjQgahHgXgfQgggpgLBFQgGAiABArQjYAGitgGIgHAAQATBQAEBLQABArAeBcQAdBcABAZQABAQgGBnQgFBWAKAiQAIAeAXA6QASAzgFAcQAAAFgEAIQgIATgaAhQgWAbABALQAAADAmAvQAlAuADA3QAEBfgVFPQgEAEgCAGIQfgKQgHgfgIhAQAAgQgcgUQgRgNgSgIQgJgEgTgXQgUgYgPgZQgPgVgUgJIgRgEIhBgiIg0gsIAAhJQAAgKAIgpQAJguACgQQACgVgZgSQgegTgIgJQgKgMBCg3QAhgcAjgZQAIhbAAgaQAAgJAIgKQADgEAMgNQAAgJACgEQAMghBQhEQApgiAlgbIBKhGQBLhFALAAQANAAAlgaQAlgbADgMQADgIhMgKQhOgJgEgBg");
	this.shape.setTransform(-1.2041,-1.8555,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("Ao8MkQAVlPgEhfQgDg2glguQgmgvAAgEQgBgKAWgcQAaggAIgUQAEgIAAgFQAFgcgSgyQgXg6gIgfQgKghAFhXQAGhngBgQQgBgYgdhcQgehdgBgrQgEhKgThRIAHAAQCtAGDYgGQgBgqAGgjQALhEAgAoQAXAgAaBGQAMAjAIAdQAtgBAtAHQCVAZA6AAQAgAAA9AhQAhASA5AjQArAZAlAQQAwATAPgIQAPgHAvgBQApAAAKACIBSAKQBMAKgDAIQgDANglAaQglAagNAAQgLAAhLBGIhKBFQglAcgpAiQhQBEgMAgQgCAEAAAJIgPASQgIAKAAAIQAAAagIBbQgjAaghAbQhCA3AKAMQAIAKAeASQAZATgCAUQgCARgJAuQgIAoAAAKIAABKIA0AsIBBAhIARAFQAUAIAPAVQAPAaAUAXQATAXAJAEQASAJARAMQAcAUAAAQQAIBAAHAfIwfAKQACgGAEgEg");
	this.shape_1.setTransform(-1.1553,-1.8579,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("Ao8MkQAVlPgEhfQgDg2glguQgmgvAAgEQgBgKAWgcQAaggAIgUQAEgIAAgFQAFgcgSgyQgXg6gIgfQgKghAFhXQAGhngBgQQgBgYgdhcQgehdgBgrQgEhKgThRIAHAAQCtAGDYgGQgBgqAGgjQALhEAgAoQAXAgAaBGQAMAjAIAdQAtgBAtAHQCVAZA6AAQAgAAA9AhQAhASA5AjQArAZAlAQQAwATAPgIQAPgHAvgBQApAAAKACIBSAKQBMAKgDAIQgDANglAaQglAagNAAQgLAAhLBGIhKBFQglAcgpAiQhQBEgMAgQgCAEAAAJIgPASQgIAKAAAIQAAAagIBbQgjAaghAbQhCA3AKAMQAIAKAeASQAZATgCAUQgCARgJAuQgIAoAAAKIAABKIA0AsIBBAhIARAFQAUAIAPAVQAPAaAUAXQATAXAJAEQASAJARAMQAcAUAAAQQAIBAAHAfIwfAKQACgGAEgEg");
	this.shape_2.setTransform(-1.1553,-1.8579,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-63.1,108.3,125.9);


(lib.btn_MD_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-55.5,-9,111,18);
	this.shape.setTransform(-61.5,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_MD_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("shelby.imes@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-89,-8,178,16);
	this.shape.setTransform(-29.5,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.5,-11.3,236.9,22.6);


(lib.btn_MD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AHygqIiJAbIhSlKIsICAIAZCTIBJhQIAgAGIAbg0IAXAFQAXAFAGgCQACAAAegZQAcgZASAAQAoADAkAWQAGAGAEAHQANAPAOAVIAsAKIgFATQgEATAJACQAIADAlAKQAiAMAKAZQAJAUABAmQABAZgDAXQAQgDA3AMQAdAGAiAIQATACAwAXIgshKIggiFIAChBIAVglQAXgkANAEQABAlASAUQALAMgHAFQgLAHAGAbQADAQAKAkQAEAOgDAyQgCAnAJAFQAEADAmAMQAiAMAOANQARAQANAXQAKAUAAAKQAAAIgTBhQgNBhAYAOQAaAPAQgqQAJgYAGgyQABgVAWhGQAUhCgBgJQgBgMgEgXIgFgWQASgYACgkg");
	this.shape.setTransform(-0.0019,-0.0237,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AGFFWQgYgOANhhQAThhAAgIQAAgKgLgUQgMgXgRgQQgPgNgigMQglgMgEgDQgJgFACgnQADgygEgOIgOg0QgFgbALgHQAGgFgKgMQgSgUgBglQgNgEgYAkIgUAlIgCBBIAgCFIAsBKQgwgXgTgCIg/gOQg4gMgPADQACgXgBgZQgBgmgIgUQgKgZgjgMQglgKgHgDQgKgCAFgTIAFgTIgsgKQgOgVgNgPQgFgHgFgGQgkgWgogDQgSAAgcAZIggAZQgGACgXgFIgXgFIgbA0IgggGIhJBQIgZiTIMIiAIBSFKICJgbQgDAkgRAYIAFAWQAEAXABAMQABAJgVBCQgVBGgBAVQgGAygJAYQgMAfgRAAQgGAAgHgEg");
	this.shape_1.setTransform(0.0267,0.0017,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AGFFWQgYgOANhhQAThhAAgIQAAgKgLgUQgMgXgRgQQgPgNgigMQglgMgEgDQgJgFACgnQADgygEgOIgOg0QgFgbALgHQAGgFgKgMQgSgUgBglQgNgEgYAkIgUAlIgCBBIAgCFIAsBKQgwgXgTgCIg/gOQg4gMgPADQACgXgBgZQgBgmgIgUQgKgZgjgMQglgKgHgDQgKgCAFgTIAFgTIgsgKQgOgVgNgPQgFgHgFgGQgkgWgogDQgSAAgcAZIggAZQgGACgXgFIgXgFIgbA0IgggGIhJBQIgZiTIMIiAIBSFKICJgbQgDAkgRAYIAFAWQAEAXABAMQABAJgVBCQgVBGgBAVQgGAygJAYQgMAfgRAAQgGAAgHgEg");
	this.shape_2.setTransform(0.0267,0.0017,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-26.6,75.69999999999999,53.6);


(lib.btn_LA_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-52,-8.75,104,17.5);
	this.shape.setTransform(-65.45,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_LA_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("nate.levine@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-83.75,-8.25,167.5,16.5);
	this.shape.setTransform(-34.7,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_LA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.instance = new lib.Image_3();
	this.instance.parent = this;
	this.instance.setTransform(-48.65,-42.65,0.176,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AJNHcQgLgPg/gkQgzgdABgdQABgWAngWQAkgUgHghQgGgkgnAMQgsAUgLACQgNABgOgVQgNgSgFAEQh6BFgChLQgBgwBQgDQArgBBSAKQgvhLgIgJQgFgGAAgwIABgvQhqAFhrACQjVAFgDgMQgCgJAKgqQALguAAgPQAAgSAqhNQAWgmAVgjIAmhMQgqhhgKg4QgDgLABgKIqZAAQgCBvAECsIAYAkQAYAlAHAFQAHAHAaBHQAaBJAAAPQAAALgNA/QgPBCgBAIQgBAOABAvQAAAZAAAmQAAACgcAvQgXAnARAeQBTgKBPAAQAZABBYAUQBOASAigEQAjgFAIgfQAIgfAKgBQARgBBSBJQBXBLATAEQAhAHBQAAQBUABAigIQAcgFAJggQAIgeAFAAQARAAAwAfQA1AjAVAhQAYAFAZgNQAfgQgVgcg");
	this.shape.setTransform(-0.88,0.4438,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("AISIQQgVghg1gjQgwgfgRAAQgFAAgIAeQgJAggcAFQgiAIhUgBQhQAAghgHQgTgEhXhLQhShJgRABQgKABgIAfQgIAfgjAFQgiAEhOgSQhYgUgZgBQhPAAhTAKQgRgeAXgnQAcgvAAgCIAAg/QgBgvABgOQABgIAPhCQANg/AAgLQAAgPgahJQgahHgHgHQgHgFgYglIgYgkQgEisAChvIKZAAQgBAKADALQAKA4AqBhIgmBMQgVAjgWAmQgqBNAAASQAAAPgLAuQgKAqACAJQADAMDVgFQBrgCBqgFIgBAvQAAAwAFAGQAIAJAvBLQhSgKgrABQhQADABAwQACBLB6hFQAFgEANASQAOAVANgBQALgCAsgUQAngMAGAkQAHAhgkAUQgnAWgBAWQgBAdAzAdQA/AkALAPQAVAcgfAQQgTAKgSAAIgMgCg");
	this.shape_1.setTransform(-0.88,0.4438,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AISIQQgVghg1gjQgwgfgRAAQgFAAgIAeQgJAggcAFQgiAIhUgBQhQAAghgHQgTgEhXhLQhShJgRABQgKABgIAfQgIAfgjAFQgiAEhOgSQhYgUgZgBQhPAAhTAKQgRgeAXgnQAcgvAAgCIAAg/QgBgvABgOQABgIAPhCQANg/AAgLQAAgPgahJQgahHgHgHQgHgFgYglIgYgkQgEisAChvIKZAAQgBAKADALQAKA4AqBhIgmBMQgVAjgWAmQgqBNAAASQAAAPgLAuQgKAqACAJQADAMDVgFQBrgCBqgFIgBAvQAAAwAFAGQAIAJAvBLQhSgKgrABQhQADABAwQACBLB6hFQAFgEANASQAOAVANgBQALgCAsgUQAngMAGAkQAHAhgkAUQgnAWgBAWQgBAdAzAdQA/AkALAPQAVAcgfAQQgTAKgSAAIgMgCg");
	this.shape_2.setTransform(-0.88,0.4438,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-42.6,96.80000000000001,85);


(lib.btn_KY_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737, ext.106127-5283", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-106.5,-9,213,18);
	this.shape.setTransform(-10.95,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_KY_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("maria.sabale@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-92.75,-8.25,185.5,16.5);
	this.shape.setTransform(-25.7,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_KY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AKWjhQgGgZAOgVQgKgLgdgPQgSgKgQgGQgGgFgHgQQgIgTgEgGQgFgIgbAfQggAkgOACQgMACgPgRQgPgSgPACQgQABgIAMQgKANgEABQgFACgRgOQgUgQgEgBQgSAHgMAEQgYAGgJggQgKgkgvgQQgogNgjAGQgVAEAJApQAJAugDAEQgHAJgVAIQgUAIgLAAQgogIgGAIQgFAFACAVQABAKACAKQgqAbgcAoQgQAYgFAjQgGArgCAFQgFANgngTQgrgWgKAHQgNAKgNAXIgKAWQgwgTgVACQgLABgeAaQgbAXgDgCQgDgEgPgGQgSgIgGgDQgGgFgiAHQgoAKgPADQgfAGgaAQQAAAEgCACIAABMQgQAGgRAIQgiAQAAAIIAABhIhtgZIguBOIAGAEIgDAbQgEAdgMALQgSASgcAgIE5gdIAAguIFUgiQCJgMJGhGQAmgdAuhCQAXghAPgbIBzhiQg1gggmgwQglgxgRg7g");
	this.shape.setTransform(-0.0824,0.0624,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("Ar2FlQAMgKAFgeIACgbIgGgEIAuhOIBuAZIAAhhQgBgIAigQIAhgOIAAhMQACgCAAgEQAagQAggGQAPgCAogKQAigIAFAFQAGAEASAHQAPAGAEAEQACACAbgWQAegbAMgBQAUgBAwATIAKgWQANgYANgJQAKgHArAVQAoAUAEgNQADgGAFgqQAFgkAQgXQAcgpAqgbIgCgUQgCgVAEgFQAHgIAnAIQAMAAATgHQAVgJAIgJQACgEgJguQgJgoAWgFQAigFAoANQAvAQAKAjQAKAhAXgHQANgDARgIQAFACATAQQARAOAFgDQAFAAAJgNQAJgNAPgBQAQgBAPARQAOARANgCQAOgCAfgjQAbgfAFAHQAEAGAJAUQAGAQAGAEQAQAHASAJQAdAPAKALQgOAWAGAYQARA7AmAxQAlAxA1AfIhzBiQgPAcgXAhQguBCgmAcQpFBGiKAMIlUAiIAAAuIk5AdQAcggASgSg");
	this.shape_1.setTransform(0.0466,0.0204,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("Ar2FlQAMgKAFgeIACgbIgGgEIAuhOIBuAZIAAhhQgBgIAigQIAhgOIAAhMQACgCAAgEQAagQAggGQAPgCAogKQAigIAFAFQAGAEASAHQAPAGAEAEQACACAbgWQAegbAMgBQAUgBAwATIAKgWQANgYANgJQAKgHArAVQAoAUAEgNQADgGAFgqQAFgkAQgXQAcgpAqgbIgCgUQgCgVAEgFQAHgIAnAIQAMAAATgHQAVgJAIgJQACgEgJguQgJgoAWgFQAigFAoANQAvAQAKAjQAKAhAXgHQANgDARgIQAFACATAQQARAOAFgDQAFAAAJgNQAJgNAPgBQAQgBAPARQAOARANgCQAOgCAfgjQAbgfAFAHQAEAGAJAUQAGAQAGAEQAQAHASAJQAdAPAKALQgOAWAGAYQARA7AmAxQAlAxA1AfIhzBiQgPAcgXAhQguBCgmAcQpFBGiKAMIlUAiIAAAuIk5AdQAcggASgSg");
	this.shape_2.setTransform(0.0466,0.0204,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-31.1,121.30000000000001,62.3);


(lib.btn_IN_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-52.25,-8.75,104.5,17.5);
	this.shape.setTransform(-65.225,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_IN_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("maria.sabale@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-90.25,-8.5,180.5,17);
	this.shape.setTransform(-28.225,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_IN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AD9pFImUAdIgCACQgnAvgzAFQgXADgXgLQACAjAKCwQALClAJAbQAOAsAKAwQALA5gGAQQgYAggQAXQgeAsALAZQALAVAiAzQAbArgNAPQgZAegWAiQggAxgFAeQgFAjgUBTQAbgSAegFQAOgCAngKQAigIAIAFQAFAEASAHQAQAHADADQADADAbgYQAegaALgBQAVgCAwATIAJgWQANgXANgKQAKgHAqAVQAnATAGgMQACgFAGgrQAFgjAQgYQAdgnAqgcQgCgJgBgLQgCgVAFgFQAIgIAmAIQAIACAUgIQAWgJAJgKQADgDgJguQgJgpAVgFg");
	this.shape.setTransform(-0.0978,0.2444,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("Ak5HNQAFgdAggxQAWgjAZgdQANgPgbgsQgigygLgVQgLgaAegrIAog3QAGgQgLg5QgKgwgOgsQgJgcgLikIgMjTQAXALAXgDQAzgFAngwIACgBIGUgdIBXLgQgVAFAJApQAJAtgDADQgJALgWAIQgUAJgIgDQgmgHgIAHQgFAGACAVIADAUQgqAcgdAnQgQAYgFAjQgGArgCAFQgGAMgngTQgqgVgKAHQgNAKgNAXIgJAWQgwgTgVACQgLABgeAaQgbAYgDgDQgDgEgQgGQgSgHgFgFQgIgEgiAIQgnAJgOACQgeAGgbASQAUhTAFgkg");
	this.shape_1.setTransform(-0.0142,0.0355,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("Ak5HNQAFgdAggxQAWgjAZgdQANgPgbgsQgigygLgVQgLgaAegrIAog3QAGgQgLg5QgKgwgOgsQgJgcgLikIgMjTQAXALAXgDQAzgFAngwIACgBIGUgdIBXLgQgVAFAJApQAJAtgDADQgJALgWAIQgUAJgIgDQgmgHgIAHQgFAGACAVIADAUQgqAcgdAnQgQAYgFAjQgGArgCAFQgGAMgngTQgqgVgKAHQgNAKgNAXIgJAWQgwgTgVACQgLABgeAaQgbAYgDgDQgDgEgQgGQgSgHgFgFQgIgEgiAIQgnAJgOACQgeAGgbASQAUhTAFgkg");
	this.shape_2.setTransform(-0.0142,0.0355,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-43.9,52.2,87.9);


(lib.btn_IA_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-54,-8.5,108,17);
	this.shape.setTransform(-63.45,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_IA_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("kara-leigh.sakis@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-103.5,-9.25,207,18.5);
	this.shape.setTransform(-14.95,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_IA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AJqheQgPgKgYgfIgVgeQgUgsgWgNQgWgLgRgOQgWgUgHgWQgKgjgWh0IweAKQgHAMgBAOQAAAOAFAMQAOAWAAAoQABApgPARQgOATAAAHQABAJAVAcQAQARgDAXQAAAJgBAUQAAASAJAUQAXAuAgBcQAlBrACAuQAHBZAXBXIM6AAIA5A7IAPgeQATgkASgfQAfg1AegZQAEgEgSgjQgUgmAEgUQAFgYA+ghQAfgRAegMIAthDQALgNgMgpQgMgqgUgLg");
	this.shape.setTransform(0.0074,0.1494,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("AFSF9Is6AAQgXhXgHhaQgCgtglhrQgghdgXgtQgJgUAAgSIABgeQADgWgQgSQgVgbgBgJQAAgIAOgTQAPgQgBgpQAAgogOgWQgFgMAAgOQABgOAHgMIQegKQAWBzAKAkQAHAVAWAUQARAPAWAKQAWAOAUArIAVAfQAYAfAPAJQAUAMAMAqQAMAogLANIgtBEQgeAMgfARQg+AhgFAXQgEAVAUAmQASAjgEADQgeAagfA1QgSAegTAkIgPAeg");
	this.shape_1.setTransform(0.0074,0.0192,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AFSF9Is6AAQgXhXgHhaQgCgtglhrQgghdgXgtQgJgUAAgSIABgeQADgWgQgSQgVgbgBgJQAAgIAOgTQAPgQgBgpQAAgogOgWQgFgMAAgOQABgOAHgMIQegKQAWBzAKAkQAHAVAWAUQARAPAWAKQAWAOAUArIAVAfQAYAfAPAJQAUAMAMAqQAMAogLANIgtBEQgeAMgfARQg+AhgFAXQgEAVAUAmQASAjgEADQgeAagfA1QgSAegTAkIgPAeg");
	this.shape_2.setTransform(0.0074,0.0192,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-33.5,99.2,67.1);


(lib.btn_GA_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-50.25,-7.75,100.5,15.5);
	this.shape.setTransform(-67.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_GA_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("laura.livingston@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-97.5,-8.25,195,16.5);
	this.shape.setTransform(-20.975,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_GA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AkgJsQAPAAEwgUQCZgKCVgKIAQAdQATAcAPgFQANgEgMg9QgMg8ALgBQA8gDA8ADQgCgIAAgFQgFgyAWhTQAbhZAIgiQAQg4AWgvQgcgGgOgEQgKgDgKgmQgMgwgCgDQgFgMgZgMIgZgJQgZhQgLgVQgKgThCgfQgGgFgMgUQgCgDgYgpQgMgUg9grQhBgrgLgHQgOgIgqg+Igng8QhugygJgNQgEgGAUgmQABgDAfg4Qg/ANg7AEQhrAIg5AHQg6AFjsAYIDvL5IgRAcQgPAeAFAQQAFANALAiQAKAdABAQQABANgIBBQgFBAAMASQANATgBAFQAAADgEgCIgCAAQAJALAUAkQASAeALAAg");
	this.shape.setTransform(0.0588,-0.0488,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AFdJgIgQgdIkuAUQkwAUgPAAQgLAAgSgeQgUgkgIgLIACAAQAAABABAAQABAAAAAAQABAAAAgBQAAAAAAgBQACgFgOgTQgMgSAFhAQAJhBgCgNQgBgQgJgdIgRgvQgFgQAPgeIARgcIjur5QDrgYA6gFQA5gHBrgIQA7gEBAgNIghA7QgUAmAFAGQAIANBvAyIAmA8QAqA+APAIIBLAyQA9ArAMAUIAaAsQAMAUAHAFQBBAfAKATQAMAVAYBQIAZAJQAaAMAFAMIANAzQALAmAJADIAqAKQgWAvgPA4QgJAigaBZQgWBTAEAyQAAAFACAIQg8gDg7ADQgMABAMA8QANA9gNAEIgGABQgNAAgQgYg");
	this.shape_1.setTransform(0.0361,0.0245,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AFdJgIgQgdIkuAUQkwAUgPAAQgLAAgSgeQgUgkgIgLIACAAQAAABABAAQABAAAAAAQABAAAAgBQAAAAAAgBQACgFgOgTQgMgSAFhAQAJhBgCgNQgBgQgJgdIgRgvQgFgQAPgeIARgcIjur5QDrgYA6gFQA5gHBrgIQA7gEBAgNIghA7QgUAmAFAGQAIANBvAyIAmA8QAqA+APAIIBLAyQA9ArAMAUIAaAsQAMAUAHAFQBBAfAKATQAMAVAYBQIAZAJQAaAMAFAMIANAzQALAmAJADIAqAKQgWAvgPA4QgJAigaBZQgWBTAEAyQAAAFACAIQg8gDg7ADQgMABAMA8QANA9gNAEIgGABQgNAAgQgYg");
	this.shape_2.setTransform(0.0361,0.0245,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-47.7,89.69999999999999,95.5);


(lib.btn_FL_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-49.25,-7.75,98.5,15.5);
	this.shape.setTransform(-68.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_FL_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("jana.barbir@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-83.25,-8.5,166.5,17);
	this.shape.setTransform(-35.2,1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_FL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AO9KEQAIg2AEhFQAHiLgZhOQgZhNhWioIhQiXIgThpQghglgog1QhOhqgghNQgwhtgTgwQgghPgGgxIh4AAQgLABAMA7QAMA8gNAFQgQAFgTgcIgPgdQiWAKiYAKQkyAUgNAAQgMAAgSgfQgCgEgUgrIoxA3QgMAEgJAIQgTARALAYQAKAXAQAMQAIAGAGABIACA/IBJgrIAAAcIDFgjIAAAoICgBDIBpBVIBUghQBYglAVgWQAeggAfgKQAmgNAjAWQAYAQAyA7QAtA2AXAMQARAJA/AbQAzAWAMAJQAMAKAMCkQALClAHAGQAJAJAKABQAFAAADgCIAAgdQAOABAKALQAKAKAAAOQABASgNAvQgJAuAVAeQAVAgApAkQAVASAQALIAqgCIARAsIA7BgIAiBhIAmADQApAEASAMQATAPAaA0QAbA2AKArQAaAqBVgmQArgSAlgcIAXAkQAYASAFhaQgQgUgHACg");
	this.shape.setTransform(0.0246,0.0145,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("ALmLeQgKgrgbg2Qgag0gTgPQgSgMgpgEIgmgDIgihhIg7hgIgRgsIgqACQgQgLgVgSQgpgkgVggQgVgeAJguQANgvgBgSQAAgOgKgKQgKgLgOgBIAAAdQgDACgFAAQgKgBgJgJQgHgGgLilQgMikgMgKQgMgJgzgWQg/gbgRgJQgXgMgtg2Qgyg7gYgQQgjgWgmANQgfAKgeAgQgVAWhYAlIhUAhIhphVIighDIAAgoIjFAjIAAgcIhJArIgCg/QgGgBgIgGQgQgMgKgXQgLgYATgRQAJgIAMgEIIxg3IAWAvQASAfAMAAQANAAEygUIEugUIAPAdQATAcAQgFQANgFgMg8QgMg7ALgBIB4AAQAGAxAgBPQATAwAwBtQAgBNBOBqQAoA1AhAlIATBpIBQCXQBWCoAZBNQAZBOgHCLQgEBFgIA2IAFgGQAHgCAQAUQgFBagYgSIgXgkQglAcgrASQgoASgbAAQgeAAgOgWg");
	this.shape_1.setTransform(0.0211,0.0145,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("ALmLeQgKgrgbg2Qgag0gTgPQgSgMgpgEIgmgDIgihhIg7hgIgRgsIgqACQgQgLgVgSQgpgkgVggQgVgeAJguQANgvgBgSQAAgOgKgKQgKgLgOgBIAAAdQgDACgFAAQgKgBgJgJQgHgGgLilQgMikgMgKQgMgJgzgWQg/gbgRgJQgXgMgtg2Qgyg7gYgQQgjgWgmANQgfAKgeAgQgVAWhYAlIhUAhIhphVIighDIAAgoIjFAjIAAgcIhJArIgCg/QgGgBgIgGQgQgMgKgXQgLgYATgRQAJgIAMgEIIxg3IAWAvQASAfAMAAQANAAEygUIEugUIAPAdQATAcAQgFQANgFgMg8QgMg7ALgBIB4AAQAGAxAgBPQATAwAwBtQAgBNBOBqQAoA1AhAlIATBpIBQCXQBWCoAZBNQAZBOgHCLQgEBFgIA2IAFgGQAHgCAQAUQgFBagYgSIgXgkQglAcgrASQgoASgbAAQgeAAgOgWg");
	this.shape_2.setTransform(0.0211,0.0145,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-57.9,149,115);


(lib.btn_DC_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 13px 'Roboto'", "#606060");
	this.text.lineHeight = 19;
	this.text.lineWidth = 208;
	this.text.parent = this;
	this.text.setTransform(-116.7,-7.6);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-44.1,-7.25,88.2,14.5);
	this.shape.setTransform(-74.675,1.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-9.6,212.2,22.6);


(lib.btn_DC_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("shelby.imes@anthem.com", "normal 500 13px 'Roboto'", "#606060");
	this.text.lineHeight = 19;
	this.text.lineWidth = 209;
	this.text.parent = this;
	this.text.setTransform(-116.7,-7.6);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-80.4,-8.15,160.8,16.3);
	this.shape.setTransform(-38.35,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-9.6,212.7,22.6);


(lib.btn_DC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AABh9IAoBUIBcANIhDBAIARBcIhSgsIhTAsIARhcIhDhAIBcgNg");
	this.shape.setTransform(0.0045,-0.0463,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AABBTIhTAsIARhcIhDhAIBcgNIAphUIAoBUIBcANIhDBAIARBcg");
	this.shape_1.setTransform(0.0065,0.0304,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AABBTIhTAsIARhcIhDhAIBcgNIAphUIAoBUIBcANIhDBAIARBcg");
	this.shape_2.setTransform(0.0065,0.0304,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.4,21.700000000000003,20.9);


(lib.btn_CO_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-54.25,-8.25,108.5,16.5);
	this.shape.setTransform(-63.225,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_CO_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("felicia.woods@amerigroup.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-102,-9,204,18);
	this.shape.setTransform(-16.475,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-11.3,236.8,22.6);


(lib.btn_CO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.instance = new lib.Image_6();
	this.instance.parent = this;
	this.instance.setTransform(-63.2,-51.35,0.1758,0.1758);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AGboFQhCAHnAg2Qnyg8gjgCIimRFIYKCfIA8xGg");
	this.shape.setTransform(-0.1358,0.9661,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51ACE1").s().p("AsiHTIClxEQAkACHxA7QHBA2BBgHIGJAxIg8RGg");
	this.shape_1.setTransform(-0.1179,0.9564,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AsiHTIClxEQAkACHxA7QHBA2BBgHIGJAxIg8RGg");
	this.shape_2.setTransform(-0.1179,0.9564,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-51.3,126.1,102.5);


(lib.btn_CA_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-55.75,-8.75,111.5,17.5);
	this.shape.setTransform(-61.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_CA_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("michelle.beck2@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-97.75,-8,195.5,16);
	this.shape.setTransform(-21.225,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-11.3,237.3,22.6);


(lib.btn_CA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AB20OIgEgCIsojjQgCAOAAAHIgYCRQgeCVggAVQgpAcgOAYQgRAdAHAxQAEAXAcBYQAXBHgDAgQgBAZgYBZQgWBPAFAVQAEANArBEQAmA9ABAYQABAVACAtQAIAnAlAZQAlAWAJgfIACgjIAlAFQAlAHAAALQAAAJggAhQghAhAAAHQAAAPg0AQQgHA0ABA1QAAAnAkAkQASASAWAUQAHAOgLArQgNAxgXAXQAZCMBQB0QAcAoASBEQANA0ACAqQABAOgZA6QgTAtAUARQANAMCDBSQB8BMAPAXQAeApAlAhIBMAAIACBaIAnAQQAqAWARAfIBcCsIAGCbIH0BKQAJgTASgEQAMgCAjgBQAdgFAAgeQAAgegagRIgagKIAAhWIAYgGQAcgMAWgeQAjgqgKg3QAagLAZgPQAygeAAgUQAAgPgrhGQgthHgCgQQgCgcARglIt+04g");
	this.shape.setTransform(0.0114,-0.0192,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51ACE1").s().p("ABjWrIgGibIhcisQgRgggqgVIgngRIgChaIhMAAQglgggegpQgPgXh8hMQiDhSgNgNQgUgQATguQAZg6gBgOQgCgpgNg1QgShDgcgoQhQh0gZiMQAXgXANgxQALgrgHgPQgWgTgSgSQgkgkAAgnQgBg1AHg0QA0gQAAgQQAAgHAhggQAgghAAgKQAAgKglgIIglgEIgCAjQgJAfglgWQglgZgIgnIgDhDQgBgXgmg9QgrhEgEgNQgFgVAWhPQAYhaABgYQADgggXhHQgchYgEgYQgHgwARgdQAOgYApgcQAggWAeiUIAYiRIACgWIMoDkIAEACIjtM0IN+U5QgRAlACAcQACAQAtBHQArBFAAAPQAAAUgyAfQgZAPgaAKQAKA3gjAqQgWAegcANIgYAGIAABVIAaALQAaARAAAdQAAAegdAGQgjABgMACQgSAEgJASg");
	this.shape_1.setTransform(0.0114,0.0126,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("ABjWrIgGibIhcisQgRgggqgVIgngRIgChaIhMAAQglgggegpQgPgXh8hMQiDhSgNgNQgUgQATguQAZg6gBgOQgCgpgNg1QgShDgcgoQhQh0gZiMQAXgXANgxQALgrgHgPQgWgTgSgSQgkgkAAgnQgBg1AHg0QA0gQAAgQQAAgHAhggQAgghAAgKQAAgKglgIIglgEIgCAjQgJAfglgWQglgZgIgnIgDhDQgBgXgmg9QgrhEgEgNQgFgVAWhPQAYhaABgYQADgggXhHQgchYgEgYQgHgwARgdQAOgYApgcQAggWAeiUIAYiRIACgWIMoDkIAEACIjtM0IN+U5QgRAlACAcQACAQAtBHQArBFAAAPQAAAUgyAfQgZAPgaAKQAKA3gjAqQgWAegcANIgYAGIAABVIAaALQAaARAAAdQAAAegdAGQgjABgMACQgSAEgJASg");
	this.shape_2.setTransform(0.0114,0.0126,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-113.9,127.9,227.9);


(lib.btn_AR_Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("757-473-2737", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-115.45,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-50,-6,100,12);
	this.shape.setTransform(-67,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-11.3,234.9,22.6);


(lib.btn_AR_Email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("felicia.woods@amerigroup.com", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.35,-9.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0A72BA"},0).wait(3));

	// BOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().dr(-104.9,-8,209.8,16);
	this.shape.setTransform(-13.375,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-11.3,236.7,22.6);


(lib.btn_AR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dots
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-45.65,-42.65,0.176,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AGRllIgDAAIAAADIABAAIACgDIAOgZQATggAPgQQAQgQgOgYIgRgVIvJAXIARMXIASAEQAUAHARAKQA2AggEA6QAAAPgCAsIKZAAQgEgpAChJIAChAQACgWAFgZQAKg0AMgVQATgiAwhDQAKgpATgrIBMh/QAmhlAKgqQAFgQAQgjQANgeACgQg");
	this.shape.setTransform(-0.2237,0.9884,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB1C84").s().p("AmfHtIACg8QAFg5g2ghQgSgJgUgHIgRgEIgRsYIPJgXIAQAWQAOAYgQAPQgPARgTAgIgOAYIgCAAIAAAEIABAAIABgEICHAAQgCARgOAeQgQAjgEAPQgLArgmBkIhMB/QgTArgJAqQgxBCgTAjQgLAVgKA0QgFAZgDAVIgCBBQgCBJAEApgAGPliIAAgEIACAAIgBAEgAGRlmg");
	this.shape_1.setTransform(-0.2435,0.9905,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A72BA").s().p("AmfHtIACg8QAFg5g2ghQgSgJgUgHIgRgEIgRsYIPJgXIAQAWQAOAYgQAPQgPARgTAgIgOAYIgCAAIAAAEIABAAIABgEICHAAQgCARgOAeQgQAjgEAPQgLArgmBkIhMB/QgTArgJAqQgxBCgTAjQgLAVgKA0QgFAZgDAVIgCBBQgCBJAEApgAGPliIAAgEIACAAIgBAEgAGRlmg");
	this.shape_2.setTransform(-0.2435,0.9905,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.6,-42.6,91,85);


(lib.BCBSHB_SC_HealthyBlueLogo_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BCBSHB_SC_Healthy_Blue_Logo_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B6770").s().p("AgwA6QgYgXAAgiQAAgiAXgYQAXgXAhAAQAmAAAZAdIgNAIQgTgYggAAQgaAAgTAUQgSATAAAcQAAAcATATQASATAbAAQAhAAAVgaIAMAIQgZAggpAAIgBABQggAAgWgXg");
	this.shape.setTransform(354.4,76.7505);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B6770").s().p("AgzAxIANgHQAMAZAcAAQAQAAAJgHQAJgHAAgMQAAgMgIgIQgHgHgPgHIgMgGQgTgJgIgIQgJgKAAgQQAAgRAMgKQALgLASAAQAbAAAPAXIgNAHQgKgRgTAAQgNAAgGAHQgIAHABAKQgBALAIAHQAFAFAPAHIAMAGQAVAJAJAKQAJALABAQQAAAUgOALQgNALgXAAQgjAAgSggg");
	this.shape_1.setTransform(340.25,76.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B6770").s().p("AgPBTIAAhAIgKAAIAAgMIAKAAIAAhAQAAgZAWAAQALAAAIAIIgIAJQgEgFgFAAQgJAAAAANIAABAIATAAIAAAMIgTAAIAABAg");
	this.shape_2.setTransform(327.775,76.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5B6770").s().p("AgbAcQgMgLgBgRQABgQAMgMQALgLARAAQARAAALALQALAMAAAQQAAARgLALQgLAMgRAAQgRAAgLgMgAgSgTQgHAHAAAMQgBAMAIAIQAGAIAMAAQALAAAIgIQAGgIABgMQgBgMgGgHQgIgIgLAAQgKAAgIAIg");
	this.shape_3.setTransform(320.15,80.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B6770").s().p("AAVAnIAAgsQAAgUgTAAQgJAAgHAGQgGAGAAALIAAApIgOAAIAAhLIAPAAIAAAMQAIgOARAAQANAAAIAIQAIAIAAAPIAAAug");
	this.shape_4.setTransform(306.525,80.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5B6770").s().p("AgYAhQgJgGAAgNQABgLAIgFQAJgGANAAIAVAAQABgSgTgBQgLAAgJAMIgJgIQAMgPARgBQAPABAJAHQAJAIAAAPIAAAvIgPAAIAAgJQgIAJgOABQgNAAgIgHgAgTAPQAAAOASAAQAIAAAGgFQAGgFAAgHIAAgIIgUAAQgSgBAAAMg");
	this.shape_5.setTransform(297.6,80.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B6770").s().p("AgGBTIAAilIANAAIAAClg");
	this.shape_6.setTransform(291.75,76.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B6770").s().p("AgxBPIAAidIAjAAQAeAAARARQAQAQAAAaQAAAZgQAQQgRARgeAAIgTAAIAAAogAghAaIASAAQAxAAAAgsQAAgVgMgLQgNgOgYAAIgSAAg");
	this.shape_7.setTransform(284.15,76.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5B6770").s().p("AAVBTIAAguQAAgVgTAAQgKABgGAGQgGAFAAAMIAAAqIgNAAIAAikIANAAIAABlQAKgOAQgBQANAAAHAJQAIAIAAAOIAAAwg");
	this.shape_8.setTransform(272.775,76.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B6770").s().p("AgNApIAAgqIgJAAIAAgOIAKAAIAAgvIANAAIAAAvIATAAIAAAMIgTAAIAAArQAAAKAIAAIAIgDIAGAKQgGAHgKAAQgUAAAAgXg");
	this.shape_9.setTransform(265.5,78.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B6770").s().p("AgGBTIAAilIANAAIAAClg");
	this.shape_10.setTransform(260.8,76.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5B6770").s().p("AgYAhQgJgGABgNQAAgLAJgFQAHgGAOAAIAWAAQAAgSgSgBQgMAAgKAMIgJgIQAMgPATgBQAPABAHAHQAKAIgBAPIAAAvIgNAAIAAgJQgJAJgOABQgNAAgIgHgAgTAPQAAAOARAAQAIAAAHgFQAGgFABgHIAAgIIgWAAQgRgBAAAMg");
	this.shape_11.setTransform(254.6,80.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5B6770").s().p("AgbAcQgMgKAAgSQAAgQAMgMQALgLAQAAQATAAAKANQALAMAAATIg/AAQABAXAYAAQAPAAAIgKIAJAJQgLANgUAAQgSAAgMgMgAgPgVQgIAHgBAJIAwAAQgFgVgTAAQgJAAgGAFg");
	this.shape_12.setTransform(246.05,80.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5B6770").s().p("AArBPIAAg0IhVAAIAAA0IgPAAIAAidIAPAAIAABbIBVAAIAAhbIAPAAIAACdg");
	this.shape_13.setTransform(233.65,76.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B6770").s().p("AgUAVQgJgJAAgMQAAgMAJgJQAIgIAMAAQANAAAJAIQAIAJAAAMQAAANgJAIQgJAJgMAAQgLgBgJgIgAgQgRQgHAHAAAKQAAAKAHAHQAGAHAKgBQALABAHgHQAHgHAAgKQAAgKgHgHQgGgHgMAAQgKAAgGAHgAAGAQIgGgIIgEAAIAAAIIgHAAIAAghIALAAQAOAAAAANQAAAHgHADIAHAKgAgDADIADAAQAGAAABgGQgBgHgGAAIgDAAg");
	this.shape_14.setTransform(217.95,73.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5B6770").s().p("AgbAcQgMgKAAgSQABgQAMgMQAKgLARAAQASAAAKANQAKAMAAATIg+AAQACAXAXAAQAPAAAIgKIAJAJQgKANgVAAQgSAAgMgMgAgPgVQgIAHgBAJIAwAAQgDgVgVAAQgJAAgGAFg");
	this.shape_15.setTransform(211.15,80.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5B6770").s().p("AgXAdQgLgLAAgSQAAgQALgMQALgLAQAAQATAAALAMIgKAJQgJgJgMAAQgKAAgHAIQgHAIAAALQAAAMAHAIQAHAIAKAAQAOAAAIgKIAKAIQgKANgWAAIgCABQgOAAgKgLg");
	this.shape_16.setTransform(202.575,80.804);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5B6770").s().p("AgGA+IAAhMIAOAAIAABMgAgGgrQgDgDAAgFQAAgKAJABQAKgBAAAKQAAAFgDADQgDADgEgBQgDAAgDgCg");
	this.shape_17.setTransform(196.6,78.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5B6770").s().p("AgbAcQgMgLgBgRQABgQAMgMQALgLARAAQARAAALALQALAMAAAQQAAARgLALQgMAMgQAAQgRAAgLgMgAgSgTQgIAHAAAMQAAAMAHAIQAHAIAMAAQALAAAHgIQAHgIAAgMQAAgMgHgHQgHgIgLAAQgLAAgHAIg");
	this.shape_18.setTransform(190.1,80.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5B6770").s().p("AAVBTIAAguQAAgVgTAAQgJABgHAGQgGAFAAAMIAAAqIgOAAIAAikIAPAAIAABlQAKgOAPgBQANAAAIAJQAIAIAAAOIAAAwg");
	this.shape_19.setTransform(180.85,76.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5B6770").s().p("AgxA6QgXgXAAgiQAAgiAXgYQAXgXAhAAQAnAAAXAdIgMAIQgTgYggAAQgbAAgSAUQgSATAAAcQAAAcATATQASATAbAAQAhAAAVgaIAMAIQgaAggoAAIgBABQggAAgXgXg");
	this.shape_20.setTransform(168.35,76.7505);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5B6770").s().p("AgbAcQgMgKABgSQAAgQAMgMQALgLAPAAQASAAALANQAKAMAAATIg/AAQAFAXAVAAQAPAAAJgKIAJAJQgLANgWAAQgRAAgMgMgAgPgVQgGAHgDAJIAxAAQgEgVgVAAQgIAAgHAFg");
	this.shape_21.setTransform(155.65,80.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5B6770").s().p("AgiAIIAAguIAOAAIAAAsQAAAUATAAQAWAAAAgXIAAgpIAOAAIAABLIgOAAIAAgMQgIAOgRAAQgeAAAAgfg");
	this.shape_22.setTransform(146.425,80.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5B6770").s().p("AgGBTIAAilIANAAIAAClg");
	this.shape_23.setTransform(140.025,76.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5B6770").s().p("Ag2BQIAAifIA1AAQAUAAANAMQAKAKAAARQAAAXgUAJQAPAEAJAKQAJAKgBARQAAAVgMAMQgOAOgYAAgAgmBAIAoAAQAlAAAAghQAAgPgJgIQgKgJgSAAIgoAAgAgmgOIAmAAIAAAAQAbAAAAgaQAAgLgHgHQgIgIgOAAIgkAAg");
	this.shape_24.setTransform(131.65,76.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AAVAsIAAhQIgSBQIgFAAIgRhQIAABQIgIAAIAAhXIAOAAIAOBBIANhBIAOAAIAABXg");
	this.shape_25.setTransform(366.3,15.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgOAnQgGgGAAgMIAIAAQAAAIADAEQAEAFAFAAQAMAAAAgPQAAgJgQgMQgQgMAAgOQAAgJAFgGQAGgGAJAAQATAAAAAYIgHAAIAAAAQgCgQgKAAQgLAAAAAMQAAAJAQAMQAQALAAAQQAAAXgVAAQgIAAgGgHg");
	this.shape_26.setTransform(360.325,15.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AhBB4QgWgmAAhSQAAhRAWgmQAUgmAtAAQAqAAAWAnQAUAlAABFIAAATIiFAAIAAAQQAAA2ANAXQAMAWAbAAQAlAAAKg5IAmAFQgGAlgWAYQgZAbgjAAQgtAAgUgmgAgkhnQgNAXAAA0IBdAAQgBgzgJgVQgMgXgYAAQgWAAgMAUg");
	this.shape_27.setTransform(349.7,35.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AhRBMIAAjnIAnAAIAADgQABAyAfAAQAZAAAcglIAAjtIAmAAIAAExIgkAAIAAghQgOAPgSAMQgTAMgMAAQg/AAAAhQg");
	this.shape_28.setTransform(326.85,35.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgSDUIAAmmIAlAAIAAGmg");
	this.shape_29.setTransform(308.775,29.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AhlDTIAAmlIBnAAQArAAAZAdQAYAbAAAwQAAAhgOAYQgPAbgfAJIAAACQAiAJASAcQAQAbAAApQAAA7gfAdQgfAdg/AAgAg7CtIAqAAQBNAAAAhPQAAgqgSgVQgTgWgoAAIgqAAgAg6geIAXAAQAuAAAUgRQAVgRAAgqQAAgkgQgQQgQgPgkAAIgqAAg");
	this.shape_30.setTransform(289.525,29.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AhUDKIAAgjIANAAQAvAAALhDIhLktIAoAAIA0DoIABAAIArjoIApAAIhAEpQgYBqhAAAg");
	this.shape_31.setTransform(254.55,40.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AArDUIAAjgQAAgyggAAQgYAAgdAlIAADtIgnAAIAAmnIAnAAIAACYQANgQARgLQARgMAOAAQA/AAgBBQIAADmg");
	this.shape_32.setTransform(233.6,29.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgNC+QgNgPAAgjIAAjRIgmAAIAAgiIAmAAIAAhmIAmAAIAABmIA1AAIAAAjIg1AAIAADUQAAAeAcAAIAYgGIAAAgQgTAGgSAAQgbAAgNgQg");
	this.shape_33.setTransform(213.375,30.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgTDUIAAmmIAmAAIAAGmg");
	this.shape_34.setTransform(200.5,29.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AhECJQgUgVAAgkQAAgzAtgiQAjgcA0gMIAAgWQAAgYgLgPQgLgPgUAAQgTABgNATQgLAPgEAZIglgIQAHgnAUgXQAWgbAhAAQAnABAWAXQAUAXAAApIAACpQAAApAIAMIgqAAIgDgaQgLANgSAJQgRALgNAAQghAAgUgWgAgQATQghAZAAAgQAAAwAoAAQAYgBAdggIAAhlQgkAKgYATg");
	this.shape_35.setTransform(181.95,35.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AhCB4QgVgmABhSQgBhRAVgmQAVgmAsAAQArAAAWAnQAVAlAABFIAAATIiGAAIAAAQQAAA2AMAXQANAWAbAAQAlAAAKg5IAlAFQgEAlgXAYQgZAbgkAAQgsAAgVgmgAgxgcIBdAAQgBgzgJgVQgLgXgZAAQgvAAAABfg");
	this.shape_36.setTransform(160.1,35.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AA6DUIAAjJIhyAAIAADJIgrAAIAAmmIArAAIAAC2IByAAIAAi2IApAAIAAGmg");
	this.shape_37.setTransform(135.8,29.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgBAQQgDgFgBgIQgBgGADgGIAEgFIAEgEIABARIgCABQgCABAAAEIAAAHIABAEQAAABAAABQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgBAAgBg");
	this.shape_38.setTransform(82.9125,43.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0067AC").s().p("Ag0AiIA0hMQABgEABAEIAyBMQgZALgbAAQgZAAgbgLg");
	this.shape_39.setTransform(27.15,36.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0067AC").s().p("AgBACIgDgCQgEAAgBgDQAOAAAFAEIgEAAIgEADIgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_40.setTransform(82.35,15.255);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgmAiIAAgLQANgBABgHQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgHgCQANACAQAHQACgBgEgFQgBgDgFAAIgVgDIAMAAIAHgEQABgBgDgEIgEgFQgDgGgDgCQgCgDgFgDIgGgCIAAgEIABgGQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQABAAAAAAQABgBABAAQAAAAAAABQABAAAAAAQAPAJALABQACABABADQABAHgBAPIACABIAMgJQAHgHAGgCQADgCAGAFQAHAFgCAHQgBACgEADIgVASQgKAHgEAHIgCAEIgkgEg");
	this.shape_41.setTransform(86.9985,16.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFAcIgDg9IAIAEQACAAAFAFIABACIgBAzQABAFgIAAIgBAAQgEAAAAgGg");
	this.shape_42.setTransform(84.85,42.9625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AARAaQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBgBAAQAAgCgHgFQgGgEgFgCIgTgHQgLgEgDgIQgEgIAFgKQACgFAIgFQADgCAFgBIABATIgCACQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAfAPQAJAEAEAFQADAFAAAGQAAAKgIAHQgDACgEACIgEABg");
	this.shape_43.setTransform(84.6029,38.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHALIgCgeIATADIAAAkg");
	this.shape_44.setTransform(84.9,34.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAWAXQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIABgDQAAgCgDgDIgHgBQgNAAgSgDQgPgDgJgIQgKgIABgOQABgIAIgGIANgIIAHAOIADAJIgCAAQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAcADANAFQAKACAHAIQAIAKgDALQgEALgJAFQgFADgFACIgFABg");
	this.shape_45.setTransform(84.4397,31.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgFATQgCgKgDgHIgHgNQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIABgCIADgCIAEgBIAAgEIAPACIAOADIgCAog");
	this.shape_46.setTransform(84.2667,26.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAjAsQAHgEgDgHQgBgCgGgDIgggEIgZgFQgggJgKgUQgIgPAGgRQAFgRAPgHQATgLAcAIQACABAJAKIAFAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgDABgOAAQgOAAgDABIAPAIIAHACIAEADQAAACgEABQgIADgJgDIgKgEQgFgBgDACQgEACACAJQACAKAPAEQAIACAcADQAWADANAGQATAKACANQAFAagVANIgWAIg");
	this.shape_47.setTransform(83.4984,21.552);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0067AC").s().p("AhXBzQgthBgShMQgZhnAZhIQAuANAeADQA1AGAVAAQAZAAAygGQAcgDAwgNQAZBGgZBpQgTBMgtBBQgoA5gvAeQgvgegog5g");
	this.shape_48.setTransform(84.7125,28.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AigAKQgVg8gCg8QgChBAVgzQAoAOA0AKQAfAFApAAQAmgBAjgEQAygJAqgPQAVAzgDBBQgBA8gVA8QgZBIgjAxQgpA6g8AlQhxhGgviSg");
	this.shape_49.setTransform(84.8,28.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0067AC").s().p("Ah/CqQgvg9gahQQgZhNADhXQAEhVAeg7QBdAvBfAAQBigBBbguQAeA7AEBWQADBVgZBOQg4CriRBQQhLgqg0hEg");
	this.shape_50.setTransform(84.75,27.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhSAtIBKhsQAEgGAEAAQAGAAADAGIBJBsQgjAZguAAQgsAAgngZg");
	this.shape_51.setTransform(27.25,36.1731);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0067AC").s().p("AgfAUIgCgBIAAgCQAHgHACgJQADgLgFgJQAkALAYAcg");
	this.shape_52.setTransform(33.5667,17.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0067AC").s().p("AgpgrQgCgHAHABIBLgHQAEAWgBAJQAAAsgfAng");
	this.shape_53.setTransform(35.9059,30.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgmArQgKAAgHgFQgFgFAAgGQAAgHACgEQABgEAFgGQAGgIgDgKQgFgLgNAAIAAgTQAtAAAkAYQAkAWASAng");
	this.shape_54.setTransform(34,17.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Ag9grQgEgJADgJQAFgLAMgCIBlgKQAIAWAAAeQAAAjgPAfQgPAfgbAUg");
	this.shape_55.setTransform(35.7734,31.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0067AC").s().p("AgiAUQAagdAjgKQgFAJADALQACAJAHAHIAAACIgCABg");
	this.shape_56.setTransform(20.9583,17.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0067AC").s().p("AgpgZQABgVACgKIBLAHQAHgBgCAHIg0BlQgfgnAAgsg");
	this.shape_57.setTransform(18.6472,30.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhDArQATgnAjgWQAlgYAsAAIAAATQgNAAgFALQgEAKAHAIIAGAKQACAEAAAHQAAAGgFAFQgHAFgKAAg");
	this.shape_58.setTransform(20.55,17.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgwAiQgPgfAAgjQAAgcAIgYIBlAKQANACAEALQADAJgEAJIhECAQgbgUgPgfg");
	this.shape_59.setTransform(18.7766,31.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0067AC").s().p("Ah4EQIAAiXIiYAAIAAjyICYAAIAAiXIDxAAIAACXICYAAIAADyIiYAAIAACXg");
	this.shape_60.setTransform(27.25,28.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0067AC").s().p("AgUAWQgJgJAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAJAAALQAAAMgJAJQgJAJgMAAIgBAAQgKAAgJgIgAgQgRQgIAIAAAJQAAALAIAIQAHAHALAAQAKAAAHgHQAIgIAAgLQAAgKgIgHQgHgHgKAAQgLAAgHAHgAALASIgJgPIgHAAIAAAPIgDAAIAAgiIANAAQAMAAABAKQgBAHgKACIAKAPgAgFgBIAFAAIAIAAQAEgBAAgFQAAgFgIAAIgJAAg");
	this.shape_61.setTransform(102,52.505);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0067AC").s().p("AgVAWQgIgJAAgNQAAgMAJgIQAJgJALAAQAMAAAKAJQAIAJAAALQAAAMgJAJQgJAJgMAAIgCAAQgLAAgIgIgAgSgRQgHAHAAAKQAAALAHAIQAIAHAKAAQALAAAHgHQAHgIAAgLQAAgKgHgHQgIgHgKAAQgKAAgIAHgAAJASIgJgPIgGAAIAAAPIgEAAIAAgiIAOAAQALAAAAAKQABAHgLACIAJAPgAgGgBIAGAAIAGAAQAEgBABgFQgBgFgHAAIgJAAg");
	this.shape_62.setTransform(48.95,52.505);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,369.1,85);


(lib.BCBSWNY4Color_Horizsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BCBS_WNY_4Color_Horiz_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B5EF").s().p("AiGDqIAAnTIB8AAQBbAAAeA6QAZAvgBCCQAAB+gcAwQgkA6hiAAgAhcDGIAyAAQBbABAYgpQAWgmgBiSQAAhngXghQgaglhSABIg3AAg");
	this.shape.setTransform(521.5,97.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B5EF").s().p("AgTDqIAAnTIAnAAIAAHTg");
	this.shape_1.setTransform(488.1,97.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B5EF").s().p("ACADqIgmh7Ii2AAIglB7IgpAAICUnTIAvAAICSHTgAhQBMICfAAIhPkIIgCAAg");
	this.shape_2.setTransform(455.05,97.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B5EF").s().p("AhvCpQgSguAAh7QAAh6ASguQAdhKBdAAQBKAAAaA0QAPAdAAA2IgpAAQAAhkhKAAQhBAAgVA5QgNAmAABwQAAByANAlQAUA5BCAAQAmAAATgfQARgcABgxIAsAAQAAAxgSAjQgeA7hHAAQhdAAgdhKg");
	this.shape_3.setTransform(413.55,97.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00B5EF").s().p("AgTDqIAAnTIAnAAIAAHTg");
	this.shape_4.setTransform(381.75,97.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B5EF").s().p("AiHDqIAAnTIB8AAQBcAAAeA6QAYAvAACCQAAB+gdAwQgiA6hkAAgAhcDGIAyAAQBbABAXgpQAXgmAAiSQAAhngYghQgaglhTABIg2AAg");
	this.shape_5.setTransform(349.1,97.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00B5EF").s().p("AhrDqIAAnTIDSAAIAAAjIipAAIAACvICiAAIAAAiIiiAAIAAC8ICvAAIAAAjg");
	this.shape_6.setTransform(309.8,97.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00B5EF").s().p("AClDqIAAmrIgBAAIiKGrIguAAIiNmrIgBAAIAAGrIgrAAIAAnTIBHAAICIGkIACAAICImkIBCAAIAAHTg");
	this.shape_7.setTransform(261.05,97.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#211E1F").s().p("AAVBuIgmhBIgOANIAAA0IgzAAIAAjbIAzAAIAABwIAug0IA8AAIg5A7IBBBkg");
	this.shape_8.setTransform(518.15,45.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#211E1F").s().p("Ag3BRIAAieIA0AAIAAAcIABAAQAKgfAkAAIAMABIAAAwQgMgDgIAAQgTAAgKAMQgJAKAAAPIAABOg");
	this.shape_9.setTransform(502.275,48.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#211E1F").s().p("Ag7A8QgYgYABgkQgBgkAYgYQAYgYAjABQAkAAAYAYQAXAYAAAjQAAAkgXAYQgYAYgkAAQgkAAgXgYgAgYgcQgHALABARQAAARAGAMQAJAPAPAAQAQAAAJgPQAGgMABgRQgBgRgGgLQgJgPgQAAQgQAAgIAPg");
	this.shape_10.setTransform(487.85,48.273);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#211E1F").s().p("AgbBuIAAhSIhQiJIBBAAIAqBaIArhaIBBAAIhQCJIAABSg");
	this.shape_11.setTransform(473.525,45.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#211E1F").s().p("AAYBQIgYhqIgYBqIg1AAIgxifIAzAAIAcBmIABAAIAWhmIAwAAIAYBmIAahmIA1AAIgxCfg");
	this.shape_12.setTransform(447.75,48.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#211E1F").s().p("Ag7A+QgYgXAAgnQAAgjAZgYQAYgYAjAAQApAAAXAcQAVAbgCApIhzAAQABARAJAKQAJAJAPAAQAXAAAHgRIAxAAQgHAZgXAOQgVANgcAAQgmAAgYgWgAAggPQgBgNgIgJQgJgKgNAAQgNABgJAIQgJAJgCAOIBAAAIAAAAg");
	this.shape_13.setTransform(427.3337,48.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#211E1F").s().p("AAkBuIhLiIIgBAAIAACIIg1AAIAAjbIA6AAIBLCGIAAiGIA2AAIAADbg");
	this.shape_14.setTransform(408.125,45.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#211E1F").s().p("AAbBSIAAhNQAAgWgCgHQgFgOgTAAQgMAAgIAKQgHAKAAAOIAABVIg0AAIAAieIAyAAIAAAWIABAAQAHgMAOgHQAOgHAOAAQA5AAAAA+IAABlg");
	this.shape_15.setTransform(382.35,48.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#211E1F").s().p("Ag3BRIAAieIA0AAIAAAcIABAAQALgfAiAAIAMABIAAAwQgLgDgJAAQgSAAgLAMQgJAKABAPIAABOg");
	this.shape_16.setTransform(367,48.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#211E1F").s().p("Ag7A+QgYgXAAgnQAAgjAZgYQAYgYAjAAQApAAAXAcQAVAbgCApIhyAAQABARAJAKQAJAJAPAAQAXAAAHgRIAwAAQgHAZgXAOQgVANgcAAQgmAAgYgWgAAhgPQgBgNgIgJQgJgKgNAAQgNABgJAIQgIAJgDAOIBAAAIAAAAg");
	this.shape_17.setTransform(351.8337,48.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#211E1F").s().p("AgRBdQgLgMAAggIAAhGIgaAAIAAgjIAaAAIAAgvIAzAAIAAAvIAgAAIAAAkIghAAIAABHQAAAJAFADQAEADAKAAIANgBIAAAmIgcACQggAAgLgMg");
	this.shape_18.setTransform(338.025,45.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#211E1F").s().p("AgyBIQgZgOAAgfIAwAAIAAAAQAAANAIAFQAHAFAMABQAXAAABgRQAAgNgZgEIgwgNQgZgKAAgcQABgaAYgMQAUgLAcAAQBFAAACA0IgvAAQAAgJgIgFQgEgEgLAAQgVAAAAAMQgBAJAVAHIAlAHQAWAEALAOQAIALAAANQgBAdgYAPQgUAMggAAQgfAAgTgMg");
	this.shape_19.setTransform(325.25,48.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#211E1F").s().p("Ag7A+QgYgXAAgnQAAgjAZgYQAYgYAjAAQApAAAXAcQAVAbgCApIhyAAQAAARAKAKQAJAJAPAAQAXAAAHgRIAwAAQgHAZgXAOQgVANgcAAQgmAAgYgWgAAggPQgBgNgJgJQgJgKgMAAQgMABgJAIQgJAJgCAOIA/AAIAAAAg");
	this.shape_20.setTransform(308.9337,48.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#211E1F").s().p("AAeBuIgeiXIgcCXIg7AAIg7jbIA5AAIAfCfIAgifIA1AAIAhCfIAeifIA5AAIg8Dbg");
	this.shape_21.setTransform(287.5,45.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#211E1F").s().p("AgdBtIAAh7IgZAAIAAgiIAZAAQAAgjANgMQAOgNAggBIAZABIAAAlIgNgBQgLAAgEAEQgEACAAAKIAAAIIAeAAIAAAiIgeAAIAAB7g");
	this.shape_22.setTransform(260.8,45.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#211E1F").s().p("Ag7A8QgYgYAAgkQABgkAXgYQAYgYAjABQAlAAAXAYQAYAXAAAkQAAAkgYAYQgYAYgkAAQgkAAgXgYgAgXgcQgHALAAARQAAASAHALQAIAPAPAAQAQAAAJgPQAHgMAAgRQAAgRgHgLQgJgPgQAAQgQAAgHAPg");
	this.shape_23.setTransform(247.15,48.273);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#211E1F").s().p("AhABUQgSgXABglQgBggASgWQASgZAgAAQAbAAARAWIAAAAIAAhNIA1AAIAADYIgxAAIAAgSIgCAAQgPAXgbAAQgkAAgSgbgAgWgBQgHAKAAARQAAATAHANQAIAOAQAAQAeAAAAgsQAAgrgeAAQgQAAgIAOg");
	this.shape_24.setTransform(529.95,16.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#211E1F").s().p("AgZBtIAAjZIAzAAIAADZg");
	this.shape_25.setTransform(517.825,16.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#211E1F").s().p("Ag7A+QgYgXAAgnQAAgjAZgYQAYgXAjAAQApAAAXAcQAVAagCAoIhyAAQABAlAhgBQAXAAAHgQIAwAAQgHAagXANQgVAMgcAAQgnAAgXgVgAAhgQQgBgMgJgJQgJgKgMAAQgNAAgJAIQgJAJgCAOIBAAAIAAAAg");
	this.shape_26.setTransform(505.5587,19.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#211E1F").s().p("AgYBtIAAidIAzAAIAACdgAgahEIAAgoIAzAAIAAAog");
	this.shape_27.setTransform(493.175,16.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#211E1F").s().p("AAbBtIAAhNQAAgXgDgHQgFgNgSAAQgNAAgHAKQgHAIABAPIAABWIg1AAIAAjYIA1AAIAABRIAAAAQAGgMAOgHQAMgHAPAAQA5AAAAA8IAABmg");
	this.shape_28.setTransform(480.6,16.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#211E1F").s().p("AhBBgQgdgVAAgnIA5AAQABASALAIQAKAGATAAQAOAAAJgEQALgHAAgKQAAgNgTgHIgpgMQgegIgOgLQgVgRAAgbQABggAdgSQAXgPAjAAQAkAAAYARQAbATAAAiIg4AAQAAgOgLgGQgKgGgNAAQgcAAAAATQAAALAUAHQALADAfAIQAdAIAOAMQAUAPAAAbQAAAmgeATQgYAQgpAAQgoAAgZgSg");
	this.shape_29.setTransform(462.3,16.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#211E1F").s().p("Ag7A+QgYgXAAgnQAAgjAZgYQAYgXAjAAQApAAAXAcQAVAagCAoIhyAAQAAARAKAKQAJAJAPAAQAWAAAHgQIAxAAQgHAagXANQgVAMgcAAQgmAAgYgVgAAhgQQgBgMgJgJQgJgKgMAAQgNAAgJAIQgJAJgCAOIBAAAIAAAAg");
	this.shape_30.setTransform(444.4337,19.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#211E1F").s().p("AhCBAQgMgRAAgiIAAhdIA0AAIAABbQAAAPAGAGQAHAHANAAQAKAAAHgIQAKgJAAgTIAAhTIA0AAIAACdIgyAAIAAgVIgCAAQgHALgOAIQgLAGgOABQggAAgPgSg");
	this.shape_31.setTransform(426.95,19.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#211E1F").s().p("AgZBtIAAjZIAzAAIAADZg");
	this.shape_32.setTransform(414.325,16.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#211E1F").s().p("AheBtIAAjZIBmAAQBPAAgBA3QAAAcgdAQQATAEAJAOQAKANAAAUQAABEhVgBgAglA/IAsAAQAeAAAAgYQAAgageAAIgsAAgAglgWIAqAAQAJAAAGgFQAIgFAAgLQAAgVgXAAIgqAAg");
	this.shape_33.setTransform(400.8,16.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#211E1F").s().p("AgzBHQgYgOAAgfIAwAAIAAABQAAALAIAHQAIAGALAAQAIAAAHgDQAJgEAAgKQgBgHgIgEQgFgDgKgDQgsgKgFgCQgYgKAAgcQAAgaAZgNQASgLAdAAQBGAAACA0IgwAAQAAgKgHgFQgGgDgKAAQgVgBAAAMQAAAKAUAGIAlAIQAWAEALAOQAHALABAMQAAAegZAOQgVANgfAAQgfAAgUgNg");
	this.shape_34.setTransform(374.45,19.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#211E1F").s().p("AgzBHQgYgOgBgfIAyAAIAAABQAAAMAJAGQAIAGAKAAQAJAAAHgDQAHgEAAgKQAAgHgJgEQgEgDgLgDQgtgKgEgCQgYgKAAgcQAAgaAYgNQAUgLAcAAQBFAAADA0IgwAAQAAgKgHgFQgGgDgKAAQgWgBAAAMQAAAKAVAGIAmAIQAVAEAKAOQAJALgBAMQABAegZAOQgVANgeAAQggAAgUgNg");
	this.shape_35.setTransform(358.85,19.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#211E1F").s().p("Ag7A8QgYgXAAglQABgjAXgXQAXgYAkgBQAlAAAXAYQAYAXAAAkQAAAkgYAYQgYAYgkAAQgkAAgXgYgAgXgdQgHAMAAARQAAASAHAMQAHAPAQgBQAQAAAJgOQAHgNAAgRQAAgQgHgNQgJgOgQAAQgQAAgHAOg");
	this.shape_36.setTransform(342.55,19.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#211E1F").s().p("Ag3BQIAAicIAzAAIAAAcIABAAQALggAjAAIANABIAAAwQgMgEgJAAQgSAAgLAMQgIAKAAAQIAABNg");
	this.shape_37.setTransform(329.75,19.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#211E1F").s().p("AhJBRQgeghAAgwQAAgwAegfQAfgiAvAAQAmAAAdAWQAfAXABAlIg5AAQgCgPgMgKQgMgIgSgBQgZAAgOAVQgLARAAAbQAAAbALARQAOAVAZAAQAUAAALgLQAMgKABgUIA5AAQgCAqgcAYQgbAYgqgBQgvAAgfggg");
	this.shape_38.setTransform(312.45,16.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#211E1F").s().p("Ag7A+QgYgXAAgnQAAgjAZgYQAYgXAjAAQApAAAXAcQAVAagCAoIhzAAQACAlAggBQAXAAAHgQIAxAAQgHAagXANQgVAMgcAAQgmAAgYgVgAAhgQQgBgMgJgJQgJgKgMAAQgNAAgJAIQgJAJgCAOIBAAAIAAAAg");
	this.shape_39.setTransform(292.9337,19.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#211E1F").s().p("AhBBAQgNgRAAgiIAAhdIA0AAIAABbQAAAPAHAGQAGAHANAAQAKAAAHgIQAKgJAAgTIAAhTIA0AAIAACdIgzAAIAAgVIgBAAQgHALgNAIQgNAGgNABQggAAgOgSg");
	this.shape_40.setTransform(275.45,19.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#211E1F").s().p("AgZBtIAAjZIAzAAIAADZg");
	this.shape_41.setTransform(262.925,16.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#211E1F").s().p("AheBtIAAjZIBlAAQBPAAAAA3QAAAcgcAQQARAEALAOQAJANAAAUQAABEhVgBgAglA/IAsAAQAfAAAAgYQAAgagfAAIgsAAgAglgWIArAAQAJAAAHgFQAHgFAAgLQAAgVgXAAIgrAAg");
	this.shape_42.setTransform(249.3,16.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAOFKIgDh/IASAHQAEADAKAIIABAFIgDBqQAAAGgCACQgDADgIAAQgOAAAAgNgAgJFDQgEAAgCgGQgIgNgBgNQgCgVAQgQQAFgFAFgDIABAkIgDACQgDAEgBAIQgBAGACAHIABAIQgCAGgDAAIAAAAgAA4DkQAEgDgBgEQgBgFgNgJQgNgJgKgEIgogPQgVgJgHgRQgIgRAJgVQADgIASgMQAHgEAKgDIADAmIgCACQgBAAAAABQgBAAAAABQgBAAAAAAQAAABAAAAQgCAHAIAEIAeAOQAVAJAMAHQATALAIAKQAHAJAAAOQAAAUgQANQgJAHgPAFgAALCDIgEhAIApAFIgBBNgAA9BTIAHgEQADgFgCgDQAAgFgGgEQgIgDgGAAQgqgEgXgEQgggGgSgRQgTgSACgbQACgRAQgLQAFgDAZgLQAMAVACAIQAFAKABAHIgEABQgEACAAAFQABAFALAEQBCAIATAHQAWAFAMARQAPAUgFAXQgFAUgWAPQgJAGgMADIgKABgAABgOQgDgUgGgPIgPgcQgEgGAEgCQABgCAGgDIAGgCIAAgHIAfADQASABAMAFIgCBUQgXgFgZgDgABFhJQAIgDACgHQACgHgDgHQgDgHgMgBQgOgEgSgCIgggDQgdgDgZgHQhAgQgVgtQgPggALgiQAMghAegQQAogXA3AVQAJAEANASIAKAKIgDAEQgFACgNAAQgMAAgGgBQgVgCgNAEIAeAQIAQAFIAEACQABABABAAQABABAAAAQAAABABAAQAAAAAAABQgBACgIADQgPAFgRgFIgVgIQgKgEgGAEQgJAGAEASQAEARAeAJQATAGA1AGQAvAFAaAOQAPAIALAMQAOAOACAOQAJA1gqAbQgOAIgRAEIgOADQADgoAAgSgAgokmIAFABQACABAEAGQACAEAFgBIALgHIAGACQgFgGgOgDIgVgBQACADADABgAAYjAIgigFIgBgXIANgCQANgEACgKIgDgIQgFgEgEgBQAUAEAiAPIgEgMQgGgGgHgBIgqgHIAYgBQAMgCACgEQADgFgIgIIgIgJQgHgMgFgFQgEgFgLgGIgLgFIAAgHQAAgIACgFQACgDAGgBQAFgBADABQAjATARACQAEADACAHQACAIgBAQQgCAPABAEQACAEAFgCQAJgEAQgOQAPgOAKgEQAIgDAMAJQAMAKgDANQgCAFgDADIgGAFIgVARQgPAMgIAIIgOANQgHAHgFAGIgFAKIgngFg");
	this.shape_43.setTransform(173.6638,60.305);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AjOEMQhJhngxiQQgph6gEh8QgFiGAqhnQBkAjBXAMQBFALBQABQBRgBBFgLQBVgMBmgjQAqBngECGQgEB6gqB8QgyCQhHBnQhUB2h8BNQh6hNhUh2gAlJjpQABBYAXBgQAmCeBbCEQBRB1BgA9QBhg9BRh1QBbiEAmieQAXhgABhYQABhigahMQhcAYg+AJQheANg6AAQhCgBhVgMQg8gJhegYQgbBMACBig");
	this.shape_44.setTransform(175.9456,58.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AirEFICYjjQAJgMAKAAQALABAIALICXDjQhPAzhbAAQhdAAhOgzgAgDBVIhpChQA0AXA4AAQA6AAAzgXIhoihIgFgDgAAxgWQgJgUAHgUQAIgXAbgEIDRgUQAUA1AAA4QAABJggBCQggA/g3AsgABmgwQgOACAEAKIBvDTQBBhNAAhiQAAgegIghgAkWCLQgghCAAhJQAAg5AUg0IDRAUQAaAEAJAXQAHAUgJAUIiPEMQg3gsggg/gAkMAAQAABkBBBLIBvjTQADgFgCgDQgDgEgIAAIiegPQgIAiAAAdgAA8iDQgVgBgNgLQgLgJgBgNQAAgNADgIQADgHALgPQANgRgJgXQgJgXgaAAQgYABgKAXQgJAWANARQALAOADAIQADAHAAAOQgBANgKAKQgNALgWAAIjeAAQAmhRBLgxQBNgyBbAAQBdAABMAyQBLAwAmBSgAjMitICMAAIACgHQgNgOgFgVQgFgYALgSQhOAXg0A9gABQjXQgEAUgNAOIABAGICLAAQg2g9hKgWQALASgGAZg");
	this.shape_45.setTransform(56.725,56.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1FB1E6").s().p("AkDFcQhhh/g1ijQgzieAHixQAHitA9h4QBfAwBaAXQBhAZBngBQBpAABggYQBbgXBegvQA9B3AHCuQAHCwgzCeQg1CjhhB/QhqCLiaBUQiZhVhqiKg");
	this.shape_46.setTransform(175.9062,57.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1FB1E6").s().p("AgrAsQgSgTAAgZQAAgYASgTQATgSAYAAQAaAAASASQASATAAAYQAAAZgSATQgTASgZAAQgYAAgTgSgAgkgjQgPAPAAAVQAAAXAPAPQAOAOAWAAQAWAAAPgOQAPgPAAgXQAAgVgPgPQgPgPgWAAQgWAAgOAPgAAUAkIgUggIgOAAIAAAgIgJAAIAAhGIAeAAQAOAAAFAEQAGAFAAAKQAAARgXACIAVAggAgOgEIANAAIAPgBQAHgCAAgJQAAgLgRAAIgSAAg");
	this.shape_47.setTransform(215.125,108.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1FB1E6").s().p("Aj6I5IAAk8Ik7AAIAAn5IE7AAIAAk8IH1AAIAAE8IE7AAIAAH5Ik7AAIAAE8g");
	this.shape_48.setTransform(56.625,56.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1FB1E6").s().p("AgsAtQgSgSAAgbQAAgZASgTQATgTAZAAQAaAAATATQASATAAAZQAAAbgSASQgSASgbAAQgZAAgTgSgAglglQgPAPAAAWQAAAYAPAPQAPAOAWAAQAYAAAOgOQAPgPAAgYQAAgVgPgQQgOgOgYAAQgWAAgPAOgAAVAjIgUgfIgOAAIAAAfIgJAAIAAhHIAeAAQAZAAAAAVQAAASgXABIAVAfgAgNgDIANAAIAPgBQAIgCAAgJQAAgMgRAAIgTAAg");
	this.shape_49.setTransform(106.925,107.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538.2,121.7);


(lib.BCBSNCHealthyBlueRGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BCBS_NC_Healthy_Blue_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEEF").s().p("AgaAbQgMgLAAgQQAAgPALgLQALgLAQAAQAQAAALALQAMALAAAPQAAAQgLALQgMALgQAAQgPAAgLgLgAgWgWQgKAKAAAMQAAAOAKAKQAJAJANAAQANAAAKgJQAKgKAAgOQAAgMgKgKQgKgJgNAAQgNAAgJAJgAAMAXIgMgTIgHAAIAAATIgGAAIAAgsIAOAAQAQAAAAANQAAAKgMABIANAUgAgIgBIAIAAQALAAAAgHQAAgHgKAAIgJAAg");
	this.shape.setTransform(611.375,30.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AEEF").s().p("AiXCZQg6g/AAhcQAAhbA4g8QA8hBBjAAQA5AAAtAVQAfAPAVAXQAfAgALApQAIAaAAAnIkfAAQABBFAGAgQAIAyAYAaQAcAdAxAAQBeAAAthqIAaAKQgcA2gfAbQg3AxhVAAQhhAAg7hCgAg/iVQgKAcgCBJICZAAQABhGgJgdQgQgwgzAAQgwAAgSAug");
	this.shape_1.setTransform(588.15,48.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AEEF").s().p("AiWDGQgdgPgNgaQgJgPgCgYIgBgqIgCkJIg/AAIAAgWIBYAAQAgAABFgCIgCEPQAAA1AJAWQAQAnAvAAQAlAAAZgZQAXgWAHgiQADgTAAgpIgCjaIhAAAIAAgYIBKAAIBzgCIAAGLIA+AAIAAAXIhCAAQg2AAg+ADIgChCQgYAdgZAQQgtAbg/AAQgvAAgggQg");
	this.shape_2.setTransform(539.525,49.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AEEF").s().p("Ah9EyIAAgWIBBAAIAAozIhBAAIAAgWIBnAAIAAgBQAiAAA3gDIAAJNIA7AAIAAAWg");
	this.shape_3.setTransform(501.8,38.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AEEF").s().p("AkVExIAAgXIBUAAIAAoyIhUAAIAAgYIFVAAQBEABAoARQAqAVARApQAIAXAAAZQAAA3glAkQgbAcgoANQgXAHgrAFQAxADAcAHQAzAOAjAjQAuAtAABBQAABEguAvQghAggvANQghAHg0ABgAg2EXIBAAAQAcAAASgGQAZgGATgUQAXgWAIgrQAEgVAAgiQAAhagogfQghgXhJAAIgtAAgAg4grIA4AAQAbABAXgJQAUgHAKgMQAWgZgBhCQAAhGgXgaQgVgVg0AAIg7AAg");
	this.shape_4.setTransform(460.85,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZEnIBBijIixmqIA+AAICPFlICPllIA3AAIjrJNg");
	this.shape_5.setTransform(408.475,56.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AinEzIAAplIAzAAIAAD6IACAAQAshNBYAAQBaAAAlBEQAXAqAAA+IAAELIgzAAIAAkTQAAg2gegfQgegfg0AAQg6AAgiAtQgdAoAAA9IAAD2g");
	this.shape_6.setTransform(368.05,39.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXDrQgLgVAAhBIAAkIIhVAAIAAgwIBWAAIAAhbIAxgVIAABwIBhAAIAAAwIhhAAIAAEdQAAAdAPAPQAPAQAdAAQAdAAAQgFIAAAsQgfAHgWAAQhGAAgUgpg");
	this.shape_7.setTransform(332.65,43.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYEzIAAplIAxAAIAAJlg");
	this.shape_8.setTransform(311.75,38.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah9DAQgpglAAg9QAAgqAYghQAXgfAngQQAjgPA7gDIBigCIAAgmIAAAAQgDgygbgWQgXgUgwAAQhfAAgJBKIg2AAQAKg/AsgfQApgbBAAAQBJAAAnAiQApAjgCBIIAADJQgBAhAFA/Ig0AAIgCg/IgCAAIgDAGQgPAcglAVQgoAVgoAAQg9AAgogigAgZAIQhVASAABFQAAAqAcAWQAaAVAqAAQBLAAAgg5QAYgugEhNQh4AEgSAEg");
	this.shape_9.setTransform(282.075,48.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiSCdQgug/AAheQABhcAvhAQA1hFBZAAQBlAAAyBFQArA9ABBrIlKAAQACBLAiArQAmAxBKAAQAsAAAjgdQAjgdAIgsIA2AAQgTBMgwAlQgvAkhNAAQhbAAgzhFgAhhiFQghAogFA8IEQAAQgEhBgjgmQgkgqg/AAQg7AAglAtg");
	this.shape_10.setTransform(241.1,48.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ACnEzIAAkmIlOAAIAAEmIg2AAIAAplIA2AAIAAENIFOAAIAAkNIA3AAIAAJlg");
	this.shape_11.setTransform(192.7,38.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AEEF").s().p("AgYAYQgKgJAAgPQAAgNALgLQAKgLAOABQANgBALALQAKAMAAAMQAAANgKALQgLAMgOAAQgNAAgLgMgAgVgVQgIAIAAANQAAAMAIAKQALAJAKAAQANAAAJgJQAJgJAAgMQAAgOgJgIQgJgJgNAAQgNAAgIAJgAAKATIgIgRIgGAAIAAARIgIAAIAAgoIAOAAQAQAAAAAMQAAAJgJABIAJASgAgGgDIAGAAQAJAAAAgFQAAgIgJABIgGAAg");
	this.shape_12.setTransform(59.4,71.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00AEEF").s().p("AgYAYQgKgJAAgPQAAgNALgLQAKgLAOABQAOgBAKALQAKAKAAAOQAAANgKALQgLAMgOAAQgNAAgLgMgAgVgVQgIAIAAANQAAAMAIAKQALAJAKAAQANAAAJgJQAJgJAAgMQAAgOgJgIQgJgJgNAAQgNAAgIAJgAAKATIgIgRIgHAAIAAARIgIAAIAAgoIANAAQASAAAAAMQAAAJgJABIAJASgAgFgDIAFAAQALAAAAgFQAAgIgLABIgFAAg");
	this.shape_13.setTransform(130.4,71.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00AEEF").s().p("AguAbQAkgoAvgNQgHAMAEAOQADANAIAKQAEAEgFAAg");
	this.shape_14.setTransform(28.2766,23.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAWIgDgIQgCgFABgGQACgNAHgIQAIgIABACIAAAYIgCACQgDACAAAEQgBADAAAFQABAFgBABQgCADgCAAQgDAAgBgDg");
	this.shape_15.setTransform(112.1938,58.5702);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00AEEF").s().p("AhGAtIBEhnQACgDADADIBEBnQghAPgmAAQglAAghgPg");
	this.shape_16.setTransform(36.9,49.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AEEF").s().p("AAAADIgEgEIgEgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQARAAAGAFIAAAAIgBAAQgFAEgCAAIgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_17.setTransform(111.1125,20.3643);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAyQgQgBgHgCIAAgUQAOgCACgHQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDgBQATADAOAGQACgDgDgDQgCgDgGgBIgfgFIATgBIAJgDQABgBgFgHIgGgHQgGgIgDgDIgLgHIAAgGIABgJQAEgGAEACQAWANAOACQADACABAEIABAPQAAALABADQAAABAAAAQABAAAAAAQAAAAAAAAQABAAABAAIAQgMQAKgIAHgEQAFgCAIAGQAIAGgDAIQgCAGgGADIgNAMIgOANIgKAJQgGAGgCAEQAAADgDADIgagDg");
	this.shape_18.setTransform(117.3909,22.0839);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAvIgGgDQgDgCAAgEIgBhUIAKAFIAKAHQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgBBGQAAAIgHAAIgDAAg");
	this.shape_19.setTransform(114.8,57.8107);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVAjQADgCgBgCQgBgEgJgFQgHgGgGgDIgbgKQgMgGgFgLQgGgNAGgMQAFgLAKgBQAFgDAJgCIAAAZIgCACQAAAFADACQAfAOAJAEQAWAOAAARQAAANgLAKIgLAFIgFACg");
	this.shape_20.setTransform(114.5935,51.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNARIAAgtIAbADIgBA2g");
	this.shape_21.setTransform(114.825,46.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVAgIAGgDQACgEgBgCQAAgCgEgCQgCgCgHAAQgbgDgPgDQgPgDgJgJQgKgMACgSQABgUATgLIAMAfIgCABQgCADAAADQAAAFAGAAIAbADQASABAKAEQAQAGAGAIQALANgEASQgCAMgPAKQgGAEgIACIgIABg");
	this.shape_22.setTransform(114.7021,41.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAfQgCgNgPgkQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIABgDIAIgEIAAgGIAVABQAMABAIADIAAA/IgigDg");
	this.shape_23.setTransform(113.8167,36.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAtA8QAFgBACgFQADgGgDgFQgBgDgHgDQgKgDghgCIgRgBQgLgBgHgDQgpgMgOggQgKgUAHgVQAHgVAUgLQAdgOAhAPQAGADAIAMIAHAHQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgNADgKgCQgIgCgOADQAIAFALAEIAKAEQAFABAAACIgGACQgJAEgLgEIgQgFQgIgEgFACQgEACgBAFQgBAFABAEQAEAQAZAFQAMAEAkAEQAeACASAIQAJAFAHAJQAHAKACAJQAHAjgdAQIgdAKg");
	this.shape_24.setTransform(112.737,28.7436);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00AEEF").s().p("Ah1CcQg9hYgYhnQgiiOAihgQA8ARAqAGQBEAHAgABQAwgBA1gHQAngGA/gRQARAygBBBQgBA7gPBAQgZBng8BYQg2BNhAApQhAgpg1hNg");
	this.shape_25.setTransform(114.1028,38.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiJCwQgxhEgfheQgbhRgDhRQgDhZAchEQBBAWA7AJQAjAGA/ACQA6gBApgHQA8gJBAgWQAcBEgDBZQgDBRgbBRQghBfgwBEQg3BOhSAzQhSg0g3hOg");
	this.shape_26.setTransform(114.1957,38.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AEEF").s().p("AirDlQhAhTgkhtQgihoAEh0QAFhxAohQQB6A+CGAAQCJgBB4g9QAoBPAFByQAEBzgiBpQgjBshABUQhHBchmA4Qhkg4hHhcg");
	this.shape_27.setTransform(114.075,37.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhuA9IBjiTQAFgHAGAAQAIAAAEAHIBjCTQg0Ahg7AAQg7AAgzghg");
	this.shape_28.setTransform(36.85,48.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00AEEF").s().p("AgrAbQgFAAAEgEQAIgKADgNQAEgOgHgMQAvAMAkApg");
	this.shape_29.setTransform(45.4234,23.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AEEF").s().p("Ag4g7QgDgGAJgCIBmgKQAFAOAAAcQAABAgqAxg");
	this.shape_30.setTransform(48.5029,41.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAnA6QgPAAgIgGQgHgHAAgJQAAgJACgFQACgFAHgIQAJgLgGgOQgGgQgRAAQgQAAgFAQQgHAPAJAKQAHAKACADQACAGAAAIQAAAJgHAHQgJAGgOAAIiQAAQAZg0AxgfQAyghA7AAQA7AAAzAhQAwAfAYA0g");
	this.shape_31.setTransform(36.8,23.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhTg7QgFgNAEgMQAGgPARgDICHgMQAMAeABApQAAAugVArQgVApgkAcg");
	this.shape_32.setTransform(48.4988,42.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00AEEF").s().p("Ag4gjQAAgVAFgVIBmAKQAJACgDAGIhHCJQgqgxAAhAg");
	this.shape_33.setTransform(25.1471,41.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhBAuQgVgrAAguQAAglANgiICHAMQASADAFAPQAFANgGAMIhcCuQgkgcgVgpg");
	this.shape_34.setTransform(25.2837,42.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00AEEF").s().p("AiiFxIAAjNIjOAAIAAlHIDOAAIAAjNIFFAAIAADNIDOAAIAAFHIjOAAIAADNg");
	this.shape_35.setTransform(36.85,37.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,615.3,85.9);


(lib.BCBSAnthemHealthKeepersPlusHKbluevertsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BCBS_Anthem_HealthKeepers_Plus_HK_blue_vert_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072BC").s().p("AgLANIAAgZIAXAAIAAAZg");
	this.shape.setTransform(301.875,95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0072BC").s().p("AgdA3QgOgPAAgmQAAghAIgOQALgUAcAAQATAAALALQAKAMgBAUIgVAAQAAgOgGgGQgFgGgHAAQgMAAgGAIQgHAKAAAYQAAAfAFALQAGANAOAAQAGAAAFgGQAIgHgBgPIAWAAQAAAYgOAMQgLAJgPAAQgWAAgLgLg");
	this.shape_1.setTransform(294.2258,89.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0072BC").s().p("AAYBAIAAhWQAAgZgVAAQgZAAAAAmIAABJIgVAAIgBh9IAWAAIAAARIAAAAQAGgLAJgFQAHgDAMAAQASAAAJALQAGAJAAAVIAABWg");
	this.shape_2.setTransform(283.05,89.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0072BC").s().p("AgKBaIAAizIAWAAIAACzg");
	this.shape_3.setTransform(274.75,87.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0072BC").s().p("AgSAdIANg5IAYAAIgVA5g");
	this.shape_4.setTransform(265.725,96.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0072BC").s().p("AgrAZIAXAAQAAAYAUAAQAWAAAAgTQAAgKgegPQgggOAAgVQAAgNAJgJQALgNAXAAQASAAALAJQAMAJgBASIgXAAQAAgUgUAAQgHAAgGAEQgFAFAAAIQAAAJAeAPQAgAOAAAVQAAAngsAAQgsAAABgpg");
	this.shape_5.setTransform(258.7726,89.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0072BC").s().p("AgdBAIAAh9IAUAAIAAATIABAAQAGgNAIgFQAIgEAQABIAAAVIgLgBQgbAAgBAiIAABJg");
	this.shape_6.setTransform(251.15,89.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0072BC").s().p("AggA3QgNgPAAgmQgBghAIgOQALgUAdAAQAZAAALAPQAJAOAAAhIAAAKIhHAAQABAYAHAKQAFAIAMAAQAUAAACgYIAXAAQgBAUgMALQgLAKgUAAQgXAAgLgLgAgQgqQgIAKAAAYIAwAAQAAgZgGgJQgGgHgMAAQgLAAgFAHg");
	this.shape_7.setTransform(241.4,89.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0072BC").s().p("AgsBYIAAitIAUAAIAAAPIABAAQAKgRASAAQASAAAKALQAMAPAAAlQAAAfgFAOQgJAWgbAAQgRAAgKgPIgBAAIAAA8gAgWgzQgCAJAAAaQAAARAEAKQAFAPAPAAQAOAAAGgNQAEgKAAgbQAAgVgDgJQgGgRgQAAQgQAAgFAUg");
	this.shape_8.setTransform(230.525,92.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0072BC").s().p("AgfA3QgPgPAAgmQAAghAIgOQALgUAdAAQAaAAAKAPQAIAOABAhIAAAKIhGAAQAAAYAHAKQAFAIAMAAQAUAAACgYIAXAAQAAAUgNALQgLAKgUAAQgXAAgKgLgAgQgqQgHAKAAAYIAvAAQABgZgIgJQgFgHgMAAQgLAAgFAHg");
	this.shape_9.setTransform(219.15,89.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0072BC").s().p("AggA3QgOgPAAgmQAAghAIgOQALgUAdAAQAaAAAKAPQAIAOABAhIAAAKIhGAAQAAAYAHAKQAFAIAMAAQAKAAAGgHQAFgHABgKIAXAAQAAAUgNALQgLAKgUAAQgXAAgLgLgAgQgqQgHAKAAAYIAwAAQAAgZgHgJQgFgHgNAAQgKAAgGAHg");
	this.shape_10.setTransform(208,89.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0072BC").s().p("AAdBaIg+hdIgBAAIAABdIgXAAIAAizIAXAAIAABPIABAAIA+hPIAaAAIhBBRIBEBig");
	this.shape_11.setTransform(197.575,87.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0072BC").s().p("AgsBaIAAizIAVAAIAABGIABAAQAGgLAIgEQAHgEAMAAQAiAAgBAmIAABaIgUAAIAAhVQAAgagWAAQgZAAAAAlIAABKg");
	this.shape_12.setTransform(184.85,87.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0072BC").s().p("AgNA6IAAhZIgUAAIAAgPIAUAAIAAgZIATgJIAAAiIAcAAIAAAPIgcAAIAABNQABAIACAEQAEAGAMAAIAJgBIAAAQIgUACQgbAAAAgXg");
	this.shape_13.setTransform(175.95,88.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0072BC").s().p("AgJBaIAAizIATAAIAACzg");
	this.shape_14.setTransform(170.625,87.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0072BC").s().p("AgsAYQAAgYAXgJQAOgGAdABQAAgRgDgHQgEgLgPAAQgJAAgFAGQgFAGABAKIgXAAQABgUALgJQAKgJAUAAQApAAAAAmIAAA8QAAAOADAQIgXAAIAAgSIAAAAQgJAVgWAAQgjAAAAgqgAgIADQgPAFAAASQAAAKAFAGQAFAHAKAAQAbAAgCgxQgXABgHACg");
	this.shape_15.setTransform(162.825,89.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0072BC").s().p("AggA3QgNgPAAgmQgBghAIgOQALgUAdAAQAZAAALAPQAJAOAAAhIAAAKIhHAAQABAYAHAKQAFAIAMAAQAKAAAGgHQAGgHAAgKIAXAAQgBAUgMALQgLAKgUAAQgXAAgLgLgAgQgqQgHAKAAAYIAwAAQAAgZgHgJQgFgHgNAAQgKAAgGAHg");
	this.shape_16.setTransform(151.85,89.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0072BC").s().p("AAgBaIAAhSIg/AAIAABSIgWAAIAAizIAWAAIAABOIA/AAIAAhOIAXAAIAACzg");
	this.shape_17.setTransform(139.35,87.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0072BC").s().p("AgYBXIAOgwIgqh9IAXAAIAdBmIABAAIAehmIAWAAIg4Ctg");
	this.shape_18.setTransform(124.375,92.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0072BC").s().p("AgXBKIgBAAIAAAPIgUAAIAAi0IAUAAIAABEIABAAQALgQAPAAQAcAAAJAWQAFAOAAAfQAAAlgNAQQgJAKgTABQgRAAgKgSgAgYAVQAAAaACAIQAFATAQABQAQgBAGgQQADgJAAgVQAAgcgEgJQgGgNgOAAQgYAAAAArg");
	this.shape_19.setTransform(114.225,87.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0072BC").s().p("AgfBRQgNgQAAglQAAgfAFgOQAKgWAbABQAQAAAKAOIABAAIAAhCIAUAAIAACzIgUAAIAAgPIAAAAQgKARgSAAQgTABgJgLgAgSgJQgFAJAAAcQAAAVADAKQAGAQAQAAQAPAAAFgSQADgJAAgbQABgrgZAAQgOAAgFANg");
	this.shape_20.setTransform(98.375,87.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0072BC").s().p("AggA3QgNgPAAgmQgBghAIgOQALgUAdAAQAZAAALAPQAJAOAAAhIAAAKIhHAAQABAYAHAKQAFAIAMAAQAKAAAGgHQAGgHAAgKIAXAAQgBAUgMALQgLAKgUAAQgXAAgLgLgAgQgqQgHAKAAAYIAwAAQAAgZgHgJQgFgHgNAAQgKAAgGAHg");
	this.shape_21.setTransform(87.5,89.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0072BC").s().p("AgdBAIAAh9IAUAAIAAATIABAAQAGgNAIgFQAHgEARABIAAAVIgLgBQgcAAAAAiIAABJg");
	this.shape_22.setTransform(79.2,89.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0072BC").s().p("AgfA3QgOgPgBgmQABghAHgOQALgUAcAAQAbAAAJAPQAJAOAAAhIAAAKIhGAAQABAYAGAKQAGAIAMAAQAUAAACgYIAWAAQAAApgsAAQgWAAgKgLgAgRgqQgGAKgBAYIAxAAQAAgZgIgJQgEgHgNAAQgLAAgGAHg");
	this.shape_23.setTransform(69.45,89.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0072BC").s().p("AgMBbIAAhuIgUAAIAAgQIAUAAIAAgYQAAgfAjAAIAKABIAAAPQgagCAAAUIAAAVIAaAAIAAAQIgaAAIAABug");
	this.shape_24.setTransform(61.125,87.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0072BC").s().p("AgMBbIAAhuIgUAAIAAgQIAUAAIAAgYQAAgfAjAAIAKABIAAAPQgagCAAAUIAAAVIAaAAIAAAQIgaAAIAABug");
	this.shape_25.setTransform(55.525,87.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0072BC").s().p("AgqBOQgOgRAAgkIAAg7QAAgbAOgQQAPgQAbAAQAcAAAPAQQAOAQAAAbIAAA7QAAAkgOARQgOAQgdAAQgcAAgOgQgAgggjIAAA9QAAAcAIALQAIAKAQAAQARAAAIgLQAIgLAAgbIAAg9QAAgmghAAQggAAAAAmg");
	this.shape_26.setTransform(45.775,87.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0072BC").s().p("AgnBOQgNgOABgcIAVAAQAAAUAGAJQAIALARAAQAfAAAAgfQAAgVgngVQgogTAAgfQAAgsA0AAQAZAAAMAPQAKAOAAAWIgVAAQgBgSgGgHQgHgJgRAAQgKAAgIAHQgIAHAAALQAAAVAnAUQAoATAAAfQAAAZgOANQgNAMgZAAQgcAAgMgOg");
	this.shape_27.setTransform(335.049,61.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0072BC").s().p("Ag2AjIAAh8IAVAAIAAB4QAAAqAdAAQATAAAKgPQAJgLAAgNIAAh7IAVAAIAACwIgSAAIAAgUIgBAAQgTAXgYAAQgvAAAAg3g");
	this.shape_28.setTransform(321.85,61.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0072BC").s().p("AgKB/IAAj9IAUAAIAAD9g");
	this.shape_29.setTransform(311.55,57.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0072BC").s().p("Ag+B/IAAj9IBFAAQAXABANAIQATAOABAnQgBAngNARQgOARghAAIgpAAIAAB2gAgngJIAoAAQAUAAAIgLQALgMAAgcQAAgdgMgLQgIgGgTAAIgoAAg");
	this.shape_30.setTransform(302,57.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0072BC").s().p("AgnBOQgNgOABgcIAVAAQAAAUAGAJQAIALASAAQAeAAAAgfQAAgVgngVQgogTAAgfQAAgsA0AAQAZAAAMAPQAKAOAAAWIgVAAQgBgSgGgHQgHgJgRAAQgKAAgIAHQgIAHAAALQAAAVAnAUQAoATAAAfQAAAZgOANQgOAMgZAAQgbAAgMgOg");
	this.shape_31.setTransform(281.649,61.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0072BC").s().p("AgiBaIAAiwIAVAAIAAAYIAAAAQAHgNAMgHQANgHAQAAIAAAVQgWgCgNANQgNAMAAAWIAABxg");
	this.shape_32.setTransform(272.275,61.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0072BC").s().p("Ag8AaIAAgqQAAhLA8AAQApAAAMAdQAIARAAAxIhkAAIAAAOQAAA5AnAAQATAAAKgLQAKgMAAgRIAWAAQgEA5g5AAQg8AAAAhCgAgfg6QgIAOAAAgIBPAAQAAgggHgOQgJgQgYAAQgXAAgIAQg");
	this.shape_33.setTransform(260.075,61.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0072BC").s().p("Ag7B7IAAjyIAVAAIAAAWIAAgBQAIgMAMgGQALgHALABQAkgBANAbQAHAQAAAdIAAAnQAAAkgOARQgPAUgfgBQgWABgPgXIgBgBIAABWgAgYhdQgOARAAAdIAAAgQAAAcAMAQQAKAPAQAAQAaAAAIgYQAFgLAAgoQAAgjgFgPQgIgZgZABQgNgBgMANg");
	this.shape_34.setTransform(246.325,64.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0072BC").s().p("Ag8AaIAAgqQAAhLA8AAQApAAAMAdQAIARAAAxIhkAAIAAAOQAAA5AnAAQATAAAKgLQAKgMAAgRIAWAAQgCAegQAOQgPANgcAAQg8AAAAhCgAgfg6QgIAOAAAgIBPAAQAAgggHgOQgJgQgYAAQgWAAgJAQg");
	this.shape_35.setTransform(231.725,61.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0072BC").s().p("Ag8AaIAAgqQAAhLA8AAQApAAANAdQAHARAAAxIhkAAIAAAOQAAAXAHAPQALATAVAAQATAAAKgLQALgMgBgRIAWAAQgEA5g5AAQg8AAAAhCgAggg6QgHAOAAAgIBPAAQAAgggIgOQgIgQgYAAQgXAAgJAQg");
	this.shape_36.setTransform(217.55,61.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0072BC").s().p("AArB/IhaiBIgBAAIAACBIgWAAIAAj9IAWAAIAAB0IABAAIBYh0IAbAAIhdB3IBgCGg");
	this.shape_37.setTransform(203.5,57.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0072BC").s().p("AAkB/IAAh8QgBgnggAAQgPAAgLAMQgLANgBAaIAABvIgUAAIAAj8IAUAAIAABiIABAAQASgZAYAAQAeAAALATQAIANgBAXIAAB9g");
	this.shape_38.setTransform(187.25,57.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0072BC").s().p("AgFBmQgIgHAAgSIAAh+IgdAAIAAgQIAdAAIAAglIAUgJIAAAuIAkAAIAAARIgkAAIAABwQAAASADAFQAEAGANAAIAQgBIAAASIgVABQgUABgHgKg");
	this.shape_39.setTransform(175.9,59.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0072BC").s().p("AgJB/IAAj9IATAAIAAD9g");
	this.shape_40.setTransform(168.6,57.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0072BC").s().p("AgvBNQgNgOAAgYQAAgnAkgLQAIgDA1gEIAAgPQAAgVgHgJQgIgLgUAAQgPAAgJAHQgKAJAAAPIgWAAQABgZARgMQAQgLAYAAQA3AAAAAvIAABYQAAAXACAVIgWAAIAAgWIgBAAQgRAaggAAQgXAAgNgPgAgLACQgaAJAAAcQAAAPAIALQAIAKAQAAQARAAANgNQANgOAAgSIAAgfIgBAAQglABgLACg");
	this.shape_41.setTransform(157.925,61.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0072BC").s().p("Ag8AaIAAgqQAAhLA8AAQApAAAMAdQAIARAAAxIhkAAIAAAOQAAA5AnAAQATAAAKgLQAKgLAAgSIAWAAQgEA5g5AAQg8AAAAhCgAgfg6QgIAOAAAgIBPAAQAAgggHgOQgJgQgYAAQgXAAgIAQg");
	this.shape_42.setTransform(144.125,61.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0072BC").s().p("AAxB/IAAh5IhiAAIAAB5IgWAAIAAj9IAWAAIAAByIBiAAIAAhyIAXAAIAAD9g");
	this.shape_43.setTransform(128,57.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0072BC").s().p("AA1BMIAAgKIAVAAIAAhbQAAgUgDgGQgFgKgMAAQgQAAgKAOQgIALgBAgIAABGIAVAAIAAAKIhPAAIAAgKIAWAAIAAhbQAAgUgDgGQgFgKgMAAQgQAAgKAOQgIAKgBAhIAABGIAVAAIAAAKIhRAAIAAgKIAYAAIAAh+IgZAAIAAgLIA8AAIAAAQQASgUAeAAQAdAAAMAXQAQgXAgAAQAVAAANAMQAMALAAATIAABjIAYAAIAAAKg");
	this.shape_44.setTransform(96.275,62.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0072BC").s().p("AAKB9IAAgKIAWAAIAAhhQABgdgZAAQgOAAgJAKQgQAOAAAfIAABHIAWAAIAAAKIhTAAIAAgKIAZAAIAAjlIgXAAIAAgLIA7AAIAAB6QARgWAhAAQAZAAAOAPQALAMAAAUIAABdIAYAAIAAAKg");
	this.shape_45.setTransform(58.95,57.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0072BC").s().p("AB1B+IAAgKIAVAAIAAhkQABgbgWAAQgOAAgLAMQgNAQAAAcIAABHIAWAAIAAAKIitAAIAAgKIAgAAIgXhFIhJAAIgYBFIAgAAIAAAKIhFAAIAAgKIAYAAIBSjwIAAgBIAKAAIABABIBSDwIApAAIAAh+IgXAAIAAgLIA7AAIAAAUQARgYAdAAQAVAAAPAOQANAMAAAWIAABdIAYAAIAAAKgAhDAlIgihhIghBhIBDAAg");
	this.shape_46.setTransform(19.75,57.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0072BC").s().p("AgdAwIAAhaIgXAAIAAgKIAXAAIAAgrIABAAQARAAAQgCIABAAIAAAtIAkAAIAAAKIgkAAIAABnQAAAXARAAQAQAAADgSIAAgBIAMAAIgBABQgCALgGAIQgLANgWAAQgpAAAAgyg");
	this.shape_47.setTransform(44.65,60.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0072BC").s().p("AguA5QgWgWAAgiQAAghAVgXQAUgWAbAAQAdAAATAQQAUATAAAhIABABIhgAAIAAAiQAAAoAiABQATAAAOgOQAMgMADgRIAAgBIAMAAIgBABQgDAWgPAPQgSARgaAAQgdAAgVgVgAgTg7QgJAIAAAQIAAAQIA3AAIAAgQQAAgggbAAQgLAAgIAIg");
	this.shape_48.setTransform(75.6,62.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0072BC").s().p("AgCAGIACgMIADABIgDAMg");
	this.shape_49.setTransform(114.825,65.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0072BC").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFgAgKgKQgFAEAAAGQAAAGAFAFQAEAEAGABQAHgBAEgEQAFgFAAgGQAAgGgFgEQgEgFgHAAQgGAAgEAFgAAGAKIgGgJIgEAAIAAAJIgCAAIAAgUIAIAAQAHAAABAGQgBAEgGABIAHAJgAgEAAIAEAAQAGgBABgDQgBgDgFgBIgFAAg");
	this.shape_50.setTransform(112.45,68);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0072BC").s().p("AgUBmQgQgPgHgIQgxg5gDhYQgBgoAIgMQAbAOA9AAQA+AAAbgOQAIANgCAnQgBA7gXAuQgJATgSAWQgGAIgRAPQgRAPgEABQgDgBgRgQgAgFBkQAEACADgCIABgUQABgNgCgBQgBgCgDgCIgEgBgAgOBZQAAAFACABIACgBIABgEQABgEABgBIAAgJQgHADAAAKgAgWAqQAAALAPAEIAHACIADAEQACABAAAEIAAALQAKgFABgJQABgKgKgEIgPgHQgBAAAAAAQgBgBAAAAQAAAAAAgBQABAAABAAIgBgMQgMAAgBAMgAgHAnIAAADIALAGIAAgUIAAgEIgFgBIgGgBgAgaAEQAAANANACIANACQAJABABABQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAIgCADIgBADIAAAJQAPgBABgPQACgPgRgEIgHgBIgMgBIgGgPQgKADABAMgAgRgQIAIARIANACIAAgbIgPgBgAgghSQgVAEADAWQACAYAiAEIAVACQAHAJgHABIAAAFIABALQARAAADgRQADgTgVgFIgZgFQgWgEAEgOQAGACAFAAQAJABAEgCIgIgDIgHgDIAMAAQAFAAAEgCQgEgLgRAAIgIAAgAgGg+QgCACgEAAIAAANIARACQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAgBIAVgVQAEgEgEgDQgDgEgEADIgNAKQgBAAAAgHIAAgHQAAgDgIgDIgBgBQgHgCgBAAQgBAAAAABQgBAAAAAAQAAABAAABQAAABAAABIABAEIADACIAGAGIABAFIgFACIAHACIACADIgLgCg");
	this.shape_51.setTransform(186.6,16.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0072BC").s().p("AAAABIgEgBIAEgBQACAAADABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_52.setTransform(184.8,8.8688);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0072BC").s().p("AgZCSQgRgNgLgMQgXgagTgkQggg8ABhDQgBg6AVgjQAtAZA9AAQA9AAAvgZQATAjAAA6QAABDgfA8QgSAkgYAaQgLAMgRANQgSAOgIACQgHgCgSgOgAhohFQABA8AZA1QAOAeAQATQAHAJATAQQASARAEABQAFgBASgRQASgQAIgJQARgVANgcQAZg1AAg8QAAgtgKgPQgPAIgYAFQgbAGgcAAQgbAAgagGQgagFgPgIQgJAPgBAtg");
	this.shape_53.setTransform(186.6,16.225);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0072BC").s().p("AgQASQgHgIAAgKQAAgJAHgHQAHgIAJABQAKgBAHAIQAHAHAAAJQAAAKgHAIQgHAGgKAAQgJAAgHgGgAgOgOQgGAGAAAIQAAAJAGAGQAGAFAIABQAJgBAGgFQAFgGAAgJQAAgIgFgGQgGgFgJgBQgIABgGAFgAAIANIgIgLIgFAAIAAALIgDAAIAAgaIALAAQAKAAAAAIQAAAFgJACIAIALgAgFgBIAFAAQAJAAAAgEQAAgFgHAAIgHAAg");
	this.shape_54.setTransform(195.425,30.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgZCSQgRgNgLgMQgXgagTgkQggg8ABhDQgBg6AVgjQAtAZA9AAQA9AAAvgZQATAjAAA6QAABDgfA8QgSAkgYAaQgLAMgRANQgSAOgIACQgHgCgSgOg");
	this.shape_55.setTransform(186.6,16.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0072BC").s().p("AhHCiIAAhaIhaAAIAAiOIBaAAIAAhaICOAAIAABaIBaAAIAACOIhaAAIAABagAgIAMIgpA9QAXAPAaABQAbAAAXgPIgrg+QgCgGgFAAQgDAAgFAGgAAegZQgLABgEAFQgFAHAGAKIAmBIQARgNAIgSQAKgSAAgVQAAgQgFgOIg2AFgAhXAAQAAAqAhAbIAmhHQAGgKgEgHQgFgFgKgBIg1gFQgFAOAAAQgAAAhMQAHAAADAHQAEAFgHAIQgGAJAFAGQAFAFAJAAIA9AAQgIgRgMgKQgagZgjAAQgjAAgaAaQgLAMgHAOIA7AAQAKAAAEgFQAGgGgHgJQgHgIAEgGQADgGAGAAIABAAg");
	this.shape_56.setTransform(153.35,16.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0072BC").s().p("AgfAUIAPgWQAPgXABAAQABAAAQAXIAPAWQgNAGgTAAQgSAAgNgGg");
	this.shape_57.setTransform(153.325,21.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0072BC").s().p("AgXggIArADQAHAAgDAGIgeA4QgXgcAGglg");
	this.shape_58.setTransform(148.1629,18);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0072BC").s().p("AgXgWQgCgEACgCIAEgBIAqgDQAHAlgXAcg");
	this.shape_59.setTransform(158.4732,18);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0072BC").s().p("AgUAMQAPgTAUgEQgCAKADAEIAFAJg");
	this.shape_60.setTransform(149.5,10.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0072BC").s().p("AgTAMIAEgJQADgFgDgJQAQADATAUg");
	this.shape_61.setTransform(157.125,10.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0072BC").s().p("AgQASQgIgIAAgKQAAgJAIgHQAHgIAJABQAKgBAIAIQAGAHABAJQgBAKgGAIQgIAGgKAAQgJAAgHgGgAgOgOQgFAGAAAIQAAAJAFAGQAGAFAIABQAJgBAGgFQAFgGAAgJQAAgIgFgGQgGgFgJgBQgIABgGAFgAAJANIgIgLIgGAAIAAALIgDAAIAAgaIALAAQAJAAAAAIQAAAFgIACIAIALgAgFgBIAFAAQAIAAABgEQgBgFgGAAIgHAAg");
	this.shape_62.setTransform(164.55,30.25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhHCiIAAhaIhaAAIAAiOIBaAAIAAhaICOAAIAABaIBaAAIAACOIhaAAIAABag");
	this.shape_63.setTransform(153.35,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340.3,101.1);


(lib.AnthemBCCMYKblueblackvectorsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Anthem_BC_CMYK_blue_black_vector_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072BC").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFgAgIgIQgEAEAAAEQAAAFAEAEQADADAFAAQAMAAAAgMQAAgFgDgDQgEgEgFAAQgEAAgEAEgAAFAIIgFgHIgCAAIAAAHIgDAAIAAgQIAHAAQAFAAAAAFQAAADgFABIAFAHgAgCAAIACAAQAFAAAAgDQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAIgDAAg");
	this.shape.setTransform(72.025,17.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0072BC").s().p("AAhAwIAAgHIAOAAIAAg4QAAgNgCgDQgDgHgIAAQgJAAgHAIQgFAHgBAVIAAArIANAAIAAAHIgxAAIAAgHIANAAIAAg4QAAgNgBgDQgDgHgIAAQgKAAgHAIQgEAIgBAUIAAArIANAAIAAAHIgzAAIAAgHIAPAAIAAhPIgQAAIAAgGIAmAAIAAAJQALgMATAAQATAAAHAPQALgPAUAAQANAAAIAIQAIAGAAANIAAA9IAPAAIAAAHg");
	this.shape_1.setTransform(60.975,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0072BC").s().p("AAGBPIAAgGIAPAAIAAg+QAAgSgQAAQgHAAgIAHQgJAJgBATIAAAtIAPAAIAAAGIg1AAIAAgGIAQAAIAAiRIgPAAIAAgGIAlAAIAABMQAMgOAUAAQAQAAAJAKQAGAHAAAMIAAA8IAQAAIAAAGg");
	this.shape_2.setTransform(37.35,10.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0072BC").s().p("ABKBPIAAgGIANAAIAAg/QABgRgOAAQgJAAgHAHQgIAKAAATIAAAsIAPAAIAAAGIhuAAIAAgGIAUAAIgOgrIgvAAIgPArIAUAAIAAAGIgrAAIAAgGIAPAAIA0iXIAAAAIAHAAIAAAAIA0CXIAZAAIAAhPIgOAAIAAgGIAlAAIAAALQALgOASAAQAOAAAJAJQAJAHAAANIAAA7IAOAAIAAAGgAgpAXIgXg9IgUA9IArAAg");
	this.shape_3.setTransform(12.5,10.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0072BC").s().p("AgSAfIAAg5IgPAAIAAgHIAPAAIAAgbIABAAIAVgBIAAAdIAXAAIAAAGIgXAAIAABBQAAAOALAAQAJAAADgLIAAgBIAHAAIAAABQgBAHgFAFQgHAIgNAAQgaAAAAgfg");
	this.shape_4.setTransform(28.3,12.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0072BC").s().p("AgdAkQgOgOAAgVQAAgUAOgPQAMgOARAAQATAAALAKQANALABAWIAAAAIg9AAIAAAVQAAAbAVAAQANAAAJgJQAIgIABgLIAAAAIAHAAIAAABQgCANgKAKQgLAKgQAAQgTAAgNgNgAgLglQgGAGAAAJIAAAKIAiAAIAAgJQAAgVgRAAQgHAAgEAFg");
	this.shape_5.setTransform(47.875,13.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBGIAog6QADgGAEAAQAEAAADAGIAoA6QgVAOgaAAQgYAAgXgOgAgPAsIgPAWQANAGARAAQASAAAMgGIgPgWQgOgWgBAAQgBAAgOAWgAAPgBQgLgUAYgDIAWgCQARgBAMAAQAFANAAAOQAAAqghAYgAAdgMIgEABQgBABABAEIAeA1QAWgbgHgkgAhTAAQAAgNAFgOQAVAAAdADQAYADgLAUIgkBCQgggZAAgogAg3AvIAdg1QACgEgBgBIgEgBIgpgEQgHAkAWAbgAATgiQgJAAgEgEQgGgGAHgJQAFgHgCgGQgEgFgGgBQgGAAgEAGQgCAGAFAHQAHAJgGAGQgDAEgKAAIg4AAQAGgNALgMQAYgYAiAAQAOAAARAHQAQAGALAKQAHAGAEAFQADAFAFAKgAA3gtQgTgTgPgEQADAJgEAGIgEAIIAnAAIAAAAgAgQgtIgEgIQgEgGADgJQgVAEgNATIAnAAIAAAAg");
	this.shape_6.setTransform(91.35,15.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0072BC").s().p("AhDCZIAAhVIhVAAIAAiHIBVAAIAAhVICHAAIAABVIBVAAIAACHIhVAAIAABVg");
	this.shape_7.setTransform(91.3,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0072BC").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFgAgIgIQgDAEAAAEQAAAFADAEQADADAFAAQAFAAAEgDQADgEABgFQgBgEgDgEQgEgEgFAAQgEAAgEAEgAAFAIIgFgHIgDAAIAAAHIgBAAIAAgQIAGAAQAGAAgBAFQAAADgEABIAEAHgAgDAAIADAAQAGAAgBgDQAAgBAAAAQAAgBAAAAQgBAAgBgBQAAAAgBAAIgFAAg");
	this.shape_8.setTransform(101.15,29.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAVIgEgCQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgCAAIAAgPIACAAQACAHAEADQAEAEAEAAQADAAADgCQADgCAAgDQAAgEgLgDIgKgEQgEgDAAgGQAAgGADgEQAFgEAGgBQAEAAADACIADACQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBIACAAIAAANIgCAAQgBgEgEgDQgDgCgEAAQgGAAAAAFQAAABAAABQAAAAAAABQAAAAABABQAAAAABABIAGACIADABQAMAEAAAJQAAAFgEAFQgEAFgHAAIgIgCg");
	this.shape_9.setTransform(68.05,28.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIAVIgDgCQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIgCAAIAAgPIACAAQACAHADADQAEAEAFAAQADAAADgCQACgCAAgDQAAgEgKgDQgOgEAAgJQAAgOAOgBQAEAAADACIACACQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIADAAIAAANIgDAAQgBgEgDgDQgEgCgDAAQgHAAAAAFQAAABAAABQABAAAAABQAAAAAAABQABAAAAABIAGACIADABQANAEAAAJQAAAFgDAFQgFAFgIAAIgIgCg");
	this.shape_10.setTransform(64.025,28.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAPQgGgFAAgKQAAgKAIgGQAHgFAIgBQAJAAAGAGQAJAFAAALQABAEgCAFQgFANgRAAQgLABgHgIgAgHgNQgCAFAAAIQAAALACAEQADAGAEAAQAHgBACgGQACgFgBgJQAAgLgBgCQgCgGgHAAQgFAAgCAGg");
	this.shape_11.setTransform(59.1813,28.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAWIAAgDIAHAAIAAgkIgHAAIAAgCIAUgBIAAAIIACgFQAFgEAFAAQAJAAAAAJQAAAGgHAAQgGAAAAgFIABgFIAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgFAFQgDAFAAAIIAAATIAIAAIAAADg");
	this.shape_12.setTransform(54.225,28.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAaQgIgKAAgPQAAgQALgLQAKgLANAAQALABAGAFIACgEIADAAIAAATIgDAAQgDgSgPAAQgOAAgCAPQgCAHAAAPQAAAfAQAAQAFAAAEgCQAIgDAEgNIADAAIgBAUIgCAAIgEgFQgEAHgNAAQgPAAgKgMg");
	this.shape_13.setTransform(48.675,27.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAQQgGgHAAgJQgBgJAHgGQAGgHAJAAQAKAAAFAHQAFAEABAJIgdAAIAAAHQAAAOAKAAQAJAAAGgLIADACQgGANgNAAQgJAAgHgHgAgGgKIgBAFIAPAAIAAgGQAAgIgHAAQgHAAAAAJg");
	this.shape_14.setTransform(43,28.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSARQgCgDAAgHIAAgZIgHAAIAAgDIAUAAIAAAfQAAAHAGAAIADgBQAGgEAAgKIAAgUIgHAAIAAgDIAUAAIAAAnIAHAAIAAADIgUAAIAAgHQgIAIgHAAQgIAAgDgFg");
	this.shape_15.setTransform(37.575,28.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAkIAAgCIAHAAIAAhBIgHAAIAAgDIAUgBIAABFIAGAAIAAACg");
	this.shape_16.setTransform(33.25,27.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfAkIAAgDIAJAAIAAhBIgJAAIAAgDIAhAAQAMAAAGAEQAIAEAAAKQAAAMgMADIgHABIAIABQAPAEAAANQAAAFgDADQgDAIgJABQgFACgMAAgAgHAhIAJAAQAHAAAEgEQACgDAAgJQAAgKgDgDQgDgEgHAAIgJAAgAgHgCIAIAAQAGAAADgDQADgDAAgIQAAgKgDgEQgDgCgHAAIgHAAg");
	this.shape_17.setTransform(28.175,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.6,30.9);


(lib.ABS_PMS300_20170_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ABS_PMS300_20170_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072BC").s().p("AgdA1QgggpgCg4QgCgSAGgRQAdALAegBIgBAKIgFgBQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABIAAADQADABADAEIABADIgEABIAFACIABACIgHgCIABACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAEABAEIAKACIAAABIARgRQACgDgCgCQgDgCgCABIgJAHIAAgKQABgBgGgDIAAgBIAAgKQAfABAdgLQAHARgDASQgBAogPAeQgGAMgMAPQgOAPgQAMQgQgMgNgPgAgFA6IAAAKQABABABAAQAAAAABAAQAAAAABAAQABAAAAgBQAAgBAAgMIABgBQAHgDABgGQAAgHgGgCIgKgFQgBAAgBAAQAAAAAAgBQAAAAAAAAQABAAABgBIAAgEIACAAIAAAFIADACIADABIAAgJIACgBIAAAGQAKgBABgJQABgFgDgEQgDgEgFAAIgEgBIgIgBIgCgEIABgDIACAGIAJAAIACgCQAGABAEgDQAEgEABgGQAAgGgEgEQgEgEgGgBIgDgBIAAgBIgNgCQgPgDADgJQADABAEAAQAEACAFgCQgJgDgBgCIAIAAIAGgBQgFgKgPADQgOACACAPQACAQAWADQACABAGAAIAGAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAHABAEIgCACIAAgRIgKgBIgEAGIADAGIgBADIgCgGQgFACgBAFQgBAFADADQADAEAEABIAIABQAGAAABABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIAAADIgCABIAAgHIgHAAIAAAFIAAADIgCAAIAAgDQgIAAAAAIQgBAHALADIAEABIACACQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIAAAIIgCAAQAAgJAAgBIgDgCIgCAAIAAAQIgBAAIAAgGQgFADAAAFQAAABAAABQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABgDIACgDg");
	this.shape.setTransform(134.4929,11.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0072BC").s().p("AAAABIgDgBQAEgBADABIgCABg");
	this.shape_1.setTransform(133.2,5.93);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0072BC").s().p("AgjBRQgwg3gBhHQgCghAPgeQAhASAmgBIAAAAQAnABAhgSQAPAegCAhQAABHgxA3QgPARgVALQgUgLgPgRgAhFguQAAA7AlAxQARASAPALQAjgXATglQATgkgDgpQABgVgIgTQgeAOghgBIAAAAQggABgegOQgIATABAVg");
	this.shape_2.setTransform(134.3752,10.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0072BC").s().p("AgLAMQgEgFAAgHQAAgFAFgGQAFgEAFAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEgAAAgNQgFAAgEAEQgEAFAAAEQAAAGAEAEQAEAEAFAAQAFAAAEgDQAEgEABgFIAAgCQAAgEgEgFQgEgEgFAAIgBAAgAgFAKIAAgTIAHAAQAGABAAAEQAAAEgGABIAGAIIgDAAIgFgIIgDAAIAAAJgAgDAAIADAAQAGAAAAgEQAAgCgFAAIgEAAg");
	this.shape_3.setTransform(140.325,20.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0072BC").s().p("AgvBQIAAg8Ig8AAIAAhfIA8AAIAGAGQgHAHgFAKIAoAAQAFAAAEgDQAEgEgFgGQgFgGAFgFQAFgGAFAFQAGAGgFAFIgBABQgEAFADAFQAEADAFAAIApAAQgFgLgHgHIAGgFIA8AAIAABfIg8AAIAAA8gAgFgTIgcAnQAPALASAAQASAAAQgKIgdgoQgDgEgCAAQgCAAgDAEgAAUgtQgHABgDAEQgDAEAEAHIAaAwQAPgMAFgSQAGgSgHgTIgkADgAg4gLQAFARAPAMIAagvQADgGgCgFQgEgEgGgBIgjgDQgHASAFATg");
	this.shape_4.setTransform(112.1,13.831);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0072BC").s().p("AAAARQgKABgKgFQALgRAJgNQAKAMALASQgIAFgKAAIgDgBg");
	this.shape_5.setTransform(112.075,14.3077);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0072BC").s().p("AgOgVIAcACQAEAAgCAEIgTAmQgRgVAGgXg");
	this.shape_6.setTransform(108.5911,12.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0072BC").s().p("AgPgPQgCgEAEAAIAcgCQAGAXgRAVg");
	this.shape_7.setTransform(115.5718,12.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0072BC").s().p("AgNAIQAKgMANgDQgCAGADADIADAGg");
	this.shape_8.setTransform(109.525,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0072BC").s().p("AgNAIIADgGQACgDgBgGQANAFAKAKg");
	this.shape_9.setTransform(114.625,6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0072BC").s().p("AgvAbIAAg7IBfAAIAAA7IgHAFQgRgRgYAAQgYABgRARg");
	this.shape_10.setTransform(112.1,3.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0072BC").s().p("AgLAMQgEgFAAgHQAAgFAEgGQAFgEAGAAQAHAAAFAEQAEAGAAAFQAAAHgEAFQgFAEgHAAQgGAAgFgEgAAAgNQgFAAgEAEQgEAFAAAEQAAAGAEAEQAEAEAFAAQAFAAAEgDQAFgFAAgEIAAgCIAAAAQAAgEgFgFQgDgEgFAAIgBAAgAgFAKIAAgTIAHAAQAHABgBAEQAAAEgFABIAFAIIgCAAIgGgIIgCAAIAAAJgAgDAAIADAAQAGAAAAgEQAAgCgEAAIgFAAg");
	this.shape_11.setTransform(119.6,20.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0072BC").s().p("AgKAMQgGgFAAgHQAAgFAGgGQAFgEAFAAQAHAAAEAEQAFAGABAFQgBAHgFAFQgEAEgHAAQgFAAgFgEgAgJgJQgEAFAAAEQAAAFAEAFQAEAEAFAAQAGAAAEgDQADgEAAgGIAAgBQAAgEgDgFQgEgEgGAAQgFAAgEAEgAAFAKIgFgIIgDAAIAAAIIgCAAIAAgSIAHAAQAGAAABAFQAAAEgHABIAGAIgAgDAAIADAAQAFAAAAgEQABgCgFAAIgEAAg");
	this.shape_12.setTransform(97.5,20.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0072BC").s().p("AAuBCIAAgIIASAAIAAhPQABgNgDgKQgEgJgLABQgOAAgJALQgGAKgBAcIAAA8IASAAIAAAJIhEAAIAAgJIASAAIAAhPQABgMgDgKQgEgKgLABQgOAAgJAMQgGAKgBAcIAAA8IASAAIAAAJIhGAAIAAgJIAVAAIAAhtIgWAAIAAgJIA0AAIAAANQARgRAYAAQAMAAAKAFQAJAFAFAKQAPgVAbABQASAAALAKQALAKAAARIAABVIATAAIABABIAAAIg");
	this.shape_13.setTransform(83.475,15.3977);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0072BC").s().p("AAIBtIAAgJIATAAIAAhVQABgZgWAAQgLABgJAIQgPARABAWIAAA+IAUAAIAAAJIhHAAIAAgJIAVAAIAAjHIgTAAIAAgJIAyAAIAABpQASgVAZACQAWAAAMANQAKALAAAQIAABSIAUAAIAAAJg");
	this.shape_14.setTransform(51.1,11.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0072BC").s().p("Ag+BtIAAgJIAbAAIgUg8Ig/AAIgUA8IAbAAIAAAJIg7AAIAAgJIAUAAIBHjPIAAgBIAJAAIAAABIBIDPIAjAAIAAhtIgUAAIAAgJIAzAAIAAARQAPgWAZABQARAAAOAMQAMAMgBASIAABQIAVAAIAAAJIhGAAIAAgJIATAAIAAhXQAAgXgTAAQgMAAgJALQgMAOAAAYIAAA9IAUAAIAAAJgAg7AfIgehUIgbBUIA5AAg");
	this.shape_15.setTransform(17.125,11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0072BC").s().p("AALBVQgkAAAAgrIAAhOIgVAAIAAgJIAVAAIAAglIABAAIAegCIAAAmIAfAAIAAAJIggAAIAABaQAAAUAPAAQAHAAAEgFQAFgEABgHIAAgBIAKAAIgBABQgCANgKAIQgJAHgLAAIgDAAg");
	this.shape_16.setTransform(38.7,13.7806);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0072BC").s().p("AADBDQgZABgSgTQgUgTABgdQgBgbATgWQAQgSAZgBQAXAAASAPQAUASgBAbIAAAAIhTAAIAAAdQAAAkAdAAQAQAAAMgKQALgLACgQIAAgBIAKAAIAAABQgCAUgQAOQgOANgUAAIgCgBgAgQgzQgIAIAAANIAAAOIAvAAIAAgOQABgcgYAAQgJAAgHAHg");
	this.shape_17.setTransform(65.55,15.6001);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBtIAAg9Ig8AAIAAhfIA8AAIAAg8IBfAAIAAA8IA8AAIAABfIg8AAIAAA9g");
	this.shape_18.setTransform(112.075,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjBRQgxg3gBhHQgBghAPgeQAhASAmgBQAoABAggSQAPAegCAhQgBBIgvA2QgQARgVALQgUgLgPgRg");
	this.shape_19.setTransform(134.4,10.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,22.4);


(lib.ABS_300_Medicaid_201804svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ABS_300_Medicaid_201804_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072BC").s().p("AgsBpQgKgNABgVIAAhSQgBgWAJgOQAKgQAWAAQATAAAUASIAAhKIAdAAIAADsIgcAAIgBgPQgUASgTAAQgUAAgLgPgAgVgdQgEAGAAAOIAABNQAAAaAVAAQAPAAAPgPIAAhmQgRgOgMAAQgNAAgFAIg");
	this.shape.setTransform(359.3,113.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0072BC").s().p("AgNB2IAAiwIAcAAIAACwgAgOhVIAAggIAdAAIAAAgg");
	this.shape_1.setTransform(349,113.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0072BC").s().p("AgpBQQgMgMgBgVIAAgJQABgeAagOQATgKAhgEIAAgXQABgYgXAAQgOgBgGAKQgDAHAAAPIgcAAIAAgFQgBgyA1AAQAyAAAAAvIAACFIgaAAIgBgPQgRASgUgBQgUAAgLgLgAgIAJQgRAJAAATIAAAHQAAAYAXAAQANAAAOgPIAAg1QgXADgKAGg");
	this.shape_2.setTransform(338.65,116.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0072BC").s().p("AgmBOQgNgOAAgaIAAhPQgBgXAPgOQAPgNAWAAQAXAAAOAMQAOANAAAXIAAAPIgcAAQAAgTgCgHQgGgMgPAAQgXAAABAeIAABHQgBAgAXAAQARAAAFgNQACgGAAgVIAcAAIAAAQQAAAYgNANQgOAMgYAAQgZAAgOgOg");
	this.shape_3.setTransform(325.45,116.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0072BC").s().p("AgOB2IAAiwIAdAAIAACwgAgOhVIAAggIAdAAIAAAgg");
	this.shape_4.setTransform(315.5,113.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0072BC").s().p("AgrBpQgLgNABgVIAAhSQgBgWAKgOQAKgQAVAAQAUAAATASIAAhKIAcAAIAADsIgbAAIAAgPQgVASgTAAQgTAAgLgPgAgUgdQgFAGAAAOIAABNQAAAaAWAAQAOAAAPgPIAAhmQgQgOgMAAQgNAAgFAIg");
	this.shape_5.setTransform(305.05,113.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0072BC").s().p("AgnBOQgNgOAAgaIAAhJQAAgbAOgPQAOgOAaAAQAYAAAOAOQANAOAAAZIAAAtIhMAAIAAAiQgBAaAYAAQARAAAFgJQADgGAAgSIAcAAIAAAJQAAAYgOANQgOAMgYAAQgZAAgPgOgAgSg8QgGAHAAANIAAAYIAxAAIAAgYQAAgbgYAAQgLAAgIAHg");
	this.shape_6.setTransform(291.15,116.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0072BC").s().p("AA7BzIAAjDIguC/IgaAAIgti/IAADDIgdAAIAAjlIAzAAIAeCDQAFAUACAWQADgWAEgUIAfiDIAxAAIAADlg");
	this.shape_7.setTransform(273.425,114.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0072BC").s().p("Ag1EHQgqgngRgVQgsg1gZg0Qg6h2gFiYQgBgoAEgiQAEgqALgQQAgAQBBAKQA9AKBEAAQBGAAA9gKQBAgKAggQQAVAfgDBlQgECYg7B2QgZAzgsA2QgRAVgqAnQgsAogKACQgJgCgsgogAgMEAQAJAFAJgEQACgMABgoQAAgigDgEQgEgGgJgDIgIgCgAggDQQgGAJAAAKIACAIQABAGADABQAAAAABAAQABAAAAAAQABAAAAgBQAAAAABgBIADgLQACgIAFgEIgBgXQgHADgGALgAg5BqQgBAfApAKIAOAEIALAIQAGAHAAAIIAAAcQAZgNACgYQABgXgYgLIgngSIgGgCQgCgBAGgEIgDgdQgdABgCAcgAgSBrQALAHAEABIAOAGIAAg9QgDgBgDAAIgKAAIgPgCgAhFAKQADAgAgAHQAMACAVABIAQACQAIABACADQAEAGgDADIgHAGIgCAKIgBAWQAogEAEglQAEgmgtgLIgQgDIgggCIgSgpQgYAKACAfgAgsgqIAUAuIAjADIAAhGIgpgDgAhTjTQgWAEgOAUQgNATADAYQAGA8BVALIAeADIAZADQAGAAAEAKQADALgNABIgBAOQAAARAEAOQAVAAAPgNQAOgNADgUQAHgvg4gOIgKgDIgcgFIgbgFQgjgHgJgQQgFgJAFgOQANAFAOACQAVACAMgFQgFgEgPgGQgPgEgDgEIAIAAQALAAANABQAKABANgGQgHgPgRgIQgOgGgRAAQgKAAgKACgAgQihQgGAFgLABQgBARADAPIAsAHQAEgCAEgJIA3g4QAJgIgJgJQgKgIgJAGQgaAWgIAEQgCAAgBgRIAAgTQABgGgVgJIgFgDQgPgGgEABQgHABABALIgBAEQAAADACADIAJAFQAKAIAEAIIAGANQgEADgKABIATAHIAGAGQgKACgTgHg");
	this.shape_8.setTransform(513.3291,42.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0072BC").s().p("AgBACIgLgEIAJgCQAIAAAIAEQgCAEgEABIgBAAQgEAAgDgDg");
	this.shape_9.setTransform(508.725,22.7253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0072BC").s().p("AhBF3QgqghgfggQg8hBgwhdQhQicAAisQAAiWA0hZQA8AhA+APQBEARBUgBQBVABBDgRQA+gPA9ghQA0BbAACUQAACshQCcQgwBdg8BBQggAggpAhQgvAlgTADQgTgDguglgAkFkIQgGAqAAArQAACaBBCJQAjBKArA0QASAXAwApQAwArAKADQALgDAwgrQAvgpATgXQAsg3AihHQBBiJgBiaQABgrgHgqQgHgxgMgTQgnAVg/AOQhFAPhHAAQhGAAhFgPQg+gOgogVQgMASgIAyg");
	this.shape_10.setTransform(513.35,41.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0072BC").s().p("AgrAsQgSgTAAgZQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAZgSATQgSASgaABQgZgBgSgSgAglglQgOAOAAAXQAAAWAOAQQAPAOAWAAQAXAAAPgOQAOgQAAgWQAAgXgOgOQgPgOgXAAQgWAAgPAOgAAVAjIgUggIgOAAIAAAgIgJAAIAAhGIAdAAQAZgBAAAVQABAQgXACIAVAggAgNgEIAMAAQAMAAADgBQAJgCAAgJQgBgLgRAAIgSAAg");
	this.shape_11.setTransform(535.95,77.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0072BC").s().p("Ai2EyIAAjmIjnAAIAAluIDnAAIAYAWQgcAbgSAmICYAAQAYAAALgMQAHgHgBgJQAAgLgJgLQgQgTAJgRQAJgRASABQASABAIAQQAJAQgQATQgJALAAALQAAAJAHAHQALAMAXAAICcAAQgSgngggfIAagRIDnAAIAAFuIjnAAIAADmgAgUhMIhqCaQA5AoBGAAQBFAAA5gmIhsicQgJgQgKAAQgLAAgJAQgACIi0Ig8AGQgbABgLAOQgMARAPAcIBjC5QApggAXgtQAYgwAAg2QAAgngNgnQghABguAFgAjhhsQAAA1AXAvQAWAsAoAgQA9huAlhIQAPgcgMgRQgKgOgcgBIg6gGQgsgFghAAQgNAmAAAng");
	this.shape_12.setTransform(428.175,52.8471);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0072BC").s().p("AhRAyIAmg6QAng7AEAAQAEAAAnA7IAmA6QghASgwAAQgvAAgigSg");
	this.shape_13.setTransform(428.1,54.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0072BC").s().p("Ag7hVIBvAJQAIABACACQAEAEgFAJIhNCSQg9hMAShfg");
	this.shape_14.setTransform(414.9007,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0072BC").s().p("Ag8g8QgFgJAEgEQACgCAIgBIBvgJQASBfg9BMg");
	this.shape_15.setTransform(441.2993,46.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0072BC").s().p("AgzAfQARgXAYgPQAYgRAagGQgHAYAJAOQALATAAAEg");
	this.shape_16.setTransform(418.35,26.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0072BC").s().p("AgzAfQAAgEAKgTQAJgOgHgYQAoAJAzA0g");
	this.shape_17.setTransform(437.825,26.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0072BC").s().p("Ai2BoIAAjlIFtAAIAADlIgaASQgfgegngQQgpgQgtAAQgtAAgqASQgpARgfAfg");
	this.shape_18.setTransform(428.175,13.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0072BC").s().p("AgrAsQgSgTAAgZQAAgZASgSQASgSAZAAQAaAAASASQASASABAZQgBAZgSATQgSASgaABQgZgBgSgSgAglglQgPAOABAXQgBAWAPAQQAPAOAWAAQAXAAAPgOQAOgQAAgWQAAgXgOgOQgPgOgXAAQgWAAgPAOgAAVAjIgUggIgOAAIAAAgIgJAAIAAhGIAdAAQAZgBAAAVQAAARgVABIAUAggAgNgEIAMAAQAMAAADgBQAJgCgBgJQAAgLgRAAIgSAAg");
	this.shape_19.setTransform(456.85,77.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0072BC").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgTAZAAQAaAAASATQATASAAAZQAAAagTASQgSASgaAAQgZAAgSgSgAgkglQgPAPgBAWQABAXAPAOQAOAPAWAAQAXAAAOgPQAQgOAAgXQAAgWgQgPQgOgPgXAAQgWAAgOAPgAAVAjIgUgfIgOAAIAAAfIgKAAIAAhHIAfAAQAZABgBATQAAARgWADIAVAfgAgNgEIANAAIAOAAQAIgDAAgJQABgLgSAAIgSAAg");
	this.shape_20.setTransform(372.45,77.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0072BC").s().p("ACuD7IAAgiIBHAAIAAkuQAAghgBgPQgCgYgHgNQgDgJgKgJQgRgQgaAAQgYAAgYAMQgXAMgQAVQgQAXgHAlQgEAagCA7IAADnIBFAAIAAAiIkGAAIAAgiIBHAAIAAkuIgBgwQgDgYgGgNQgEgKgKgIQgRgQgZAAQgZAAgXAMQgXAMgQAVQgRAXgGAlQgFAagBA7IAADnIBEAAIAAAiIkLAAIAAgiIBPAAIAAmkIhRAAIAAghIDFAAIABAzQAcgfApgRQAqgRAvAAQBkAAAmBKQAXgdAggTQAugaA7AAQBHAAApAlQApAmAABAIAAFIIBOAAIAAAig");
	this.shape_21.setTransform(318.975,58.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0072BC").s().p("AAgGfIAAghIBLAAIAAlCQAAgqgQgYQgUghgtAAQgsgBglAkQgzAzAABiIAADtIBLAAIAAAhIkSAAIAAghIBOAAIAAr6IhIAAIAAgiIDBAAIAAGPQA+hGBoAAQBWAAAtAzQAmAqAAA/IAAE3IBNAAIAAAhg");
	this.shape_22.setTransform(195.375,42.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0072BC").s().p("AGDGgIAAghIBHAAIAAlKQAAhdhJAAQgtABgkApQgrA1AABfIAADpIBLAAIAAAhIpCAAIAAghIBqAAIhMjkIjzAAIhMDkIBpAAIAAAhIjjAAIAAghIBNAAIEQseIAiAAIEVMeICHAAIAAmkIhLAAIAAgiIDBAAIABA/QA6hMBfAAQBJAAAtAtQAtAsAABIIAAEyIBNAAIAAAhgAjfB5IhylEIhqFEIDcAAg");
	this.shape_23.setTransform(65.375,42.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0072BC").s().p("AhiCfIAAksIhPAAIAAgjIBPAAIAAiNIAEAAQArAABFgHIAEgBIAACVIB2AAIAAAiIh2AAIAAFaQAABKA2AAQAfAAARgVQANgQAEgYIABgCIAkAAIgBAEQgHAlgWAaQglAshFAAQiMAAAAing");
	this.shape_24.setTransform(147.975,52.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0072BC").s().p("AhNDwQgsgSghgiQgkgkgTgvQgTgwABg2QAAg1ASgxQASgxAigkQAggjApgTQAqgTAqAAQBiAAA8A2QBDA5ADBwIAAAEIlAAAIAABzQABBBAeAkQAeAkA2AAQBBAAAtgtQAqgpAHg4IAAgEIAnAAIgBAFQgKBHgzAyQg6A4hXAAQgvAAgsgSgAhAjHQgcAdAAA0IAAA0IC3AAIAAg0QAAgzgYgbQgYgbgrAAQgnAAgZAYg");
	this.shape_25.setTransform(250.4244,59.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ai2GdIAAjmIjmAAIAAltIDmAAIAAjmIFtAAIAADmIDnAAIAAFtIjnAAIAADmg");
	this.shape_26.setTransform(428.15,42.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhBF3QgqghgfggQg8hBgwhdQhQicAAisQAAiWA0hZQA8AhA+APQBEARBUgBQBVABBDgRQA+gPA9ghQA0BbAACUQAACshQCcQgwBdg8BBQggAggpAhQgvAlgTADQgTgDguglg");
	this.shape_27.setTransform(513.35,41.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,546,126);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AgWAuIAAgJIAGABQAHAAADgKIACgJIgShBIAMAAIALA1IALg1IAKAAIgSBKQgCAKgEAEQgEAFgJAAg");
	this.shape_30.setTransform(98.1,6.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AAJAiIAAgxQAAgIgHAAQgFAAgFAGIAAAzIgLAAIAAhCIAKAAIABAGQAHgHAGAAQAPAAAAAQIAAAzg");
	this.shape_31.setTransform(92.925,5.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgPAeQgFgEABgIIAAgEQAAgRAdgEIAAgJQAAgJgJAAQgIAAAAAMIgKAAIAAgCQAAgTATAAQASAAAAASIAAAyIgJAAIAAgGQgHAHgHAAQgIAAgEgFgAgIAOIAAADQAAAJAIAAQAEAAAGgGIAAgUQgTADABALg");
	this.shape_32.setTransform(87.6,5.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AgTAvIAAhcIAKAAIAAAFQAHgGAIAAQAGAAAFAGQAEAEgBAIIAAAfQAAATgOAAQgIAAgHgHIAAAggAgJgfIAAAmQAHAFADAAQAJABgBgLIAAgcQABgKgJAAQgEAAgGAFg");
	this.shape_33.setTransform(82.4,6.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AAWAiIAAgwQAAgJgHABQgFAAgEAFIAAAzIgKAAIAAgxQAAgHgHAAQgFAAgFAEIAAA0IgLAAIAAhCIAKAAIABAGQAGgHAIAAQAIAAADAIQAFgIAKAAQAOAAAAAQIAAAzg");
	this.shape_34.setTransform(75.725,5.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgUAPIAAgeQAAgTAUAAQAVAAAAATIAAAeQAAAUgVAAQgUAAAAgUgAgJgOIAAAdQAAALAJAAQAKAAAAgLIAAgdQAAgKgKAAQgJAAAAAKg");
	this.shape_35.setTransform(69.125,5.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AgWAWIAAgqQAAgYAWAAQAWAAAAAUIAAAKIgLAAIAAgFQAAgPgLAAQgKAAAAAMIAAAqQAAAPAKAAQAIAAACgIQABgDAAgLIAMAAIAAAJQAAAXgXAAQgWAAAAgXg");
	this.shape_36.setTransform(63.575,4.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AAVAfIAAgDIAFgCQABgBAAgFIAAgeQAAgFgBgDQgCgDgEAAQgDAAgEADQgEADAAACIAAAhQAAAFACABQABABADABIAAADIgdAAIAAgDIAFgCQABgBAAgFIAAgeQAAgFgBgDQgCgDgEAAQgDAAgEADIgEAFIAAAhQAAAFACABIAEACIAAADIgfAAIAAgDIAFgCQACgBAAgFIAAglQAAgEgCgCQgCgCgDAAIAAgDIAYAAIAAAJIAHgGQAGgFAGAAQAIAAAEAEQACACACAFIABAAIAHgHQAGgEAGAAQAHAAAFAFQAFAEAAAKIAAAfQAAAFACABIAFACIAAADg");
	this.shape_37.setTransform(52.55,5.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AgRAYQgIgHAAgRQAAgOAIgIQAIgJAKAAQAFAAAHAEQAGAEADAFIADAMIAAAFIggAAIADANQAEAKAIAAQAFAAAEgDIAGgFIADABQgFAKgJAEQgGADgGAAQgIAAgJgIgAgFgVQgBAEgBALIAQAAQAAgLgBgFQgCgFgFAAQgEAAgCAGg");
	this.shape_38.setTransform(44.275,5.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AADAsIAAgDQAEgBABgBQABgBAAgEIAAggQAAgEgBgBQgCgFgEAAQgCAAgEADIgEAFIAAAiQAAAEACABIAEACIAAADIgeAAIAAgDIAEgCQACgCAAgEIAAhBQAAgEgBgBQgCgCgDAAIAAgEIAYAAIAAAlQAEgFAEgDQAFgDAFAAQAIABAFAEQAEAEAAAKIAAAfQAAAFACABIAEACIAAADg");
	this.shape_39.setTransform(37.7,4.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AgGAoQgGgDAAgJIAAgpIgHAAIAAgDIAKgLIAKgOIADAAIAAAWIANAAIAAAGIgNAAIAAAmIABAFQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgGIADACQgBAEgEAFQgFAGgJAAQgEAAgDgCg");
	this.shape_40.setTransform(32.025,4.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AADAfIAAgDIAFgCQABgBAAgFIAAgeIgBgHQgBgEgFAAQgCAAgDADIgEAFIAAAhQAAAFABABQABABAEABIAAADIggAAIAAgDIAGgCQABgCAAgEIAAglQAAgEgBgCQgCgCgEAAIAAgDIAZAAIAAAJQADgEAFgDQAEgEAGAAQAIAAAFAFQAEAEAAALIAAAeQAAAFACABIAFACIAAADg");
	this.shape_41.setTransform(26.125,5.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AACAtIAAgDIAIgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgEIgFgNIgcAAIgEAKIgBAIQAAACADACIAHABIAAADIgaAAIAAgDQAEgBADgEIAFgLIAdhGIADAAIAdBEIAHAOQACAEAFAAIAAADgAgUAOIAYAAIgLgdIgBAAg");
	this.shape_42.setTransform(17.825,4.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AAJAiIAAgxQAAgIgHAAQgEAAgGAGIAAAzIgLAAIAAhCIAKAAIABAGQAHgHAGAAQAPAAAAAQIAAAzg");
	this.shape_43.setTransform(8.025,5.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AANArIgEgXIgSAAIgEAXIgMAAIARhVIAQAAIASBVgAgHAKIAOAAIgHgtIgHAtg");
	this.shape_44.setTransform(2.55,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,100.4,11.6), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AhHBSIgKgBQgSgEgJgPQgKgPAEgSQAEgRAPgJQAQgJARAEIAIACIgHgEQgOgLgCgSQgCgSALgOQALgOASgCQASgCAOALQAFAEACAEIB0CSg");
	mask_5.setTransform(11.6907,14.4346);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#F0F9EF","#C9E8C4","#8ACE7F","#3DAE2B"],[0,0.086,0.255,0.49,0.749],0,0,0,0,0,23.3).s().p("AjoDtIAAnZIHRAAIAAHZg");
	this.shape_5.setTransform(23.3,23.7);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.1,6.2,23.2,16.5), null);


(lib.Unicare_25AnthemTag_Logo_Color_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Unicare_25AnthemTag_Logo_Color_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F51").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAPgKAKQgKAJgOAAQgMAAgLgKgAgSgTQgIAIAAALQAAAMAIAIQAIAIALAAQALAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgLAAQgLAAgIAIgAALATIgKgRIgGAAIAAARIgGAAIAAgmIAOAAQAOAAAAALQAAAJgKABIALARgAgFgCIAGAAQAKAAAAgGQAAgGgJAAIgHAAg");
	this.shape.setTransform(220.425,68.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919195").s().p("AiWCIQgRABgKgGQgIgFgFgMQgIgRgDgPIADgBQAFAVAjgBQAmABCdg0QCsg4ApACQASgBAKAFQAIAFAFAMIALAgIgEABQgFgVgjAAQgkABifAzQhWAcgvANQg3APgXAAIgCgBgAjHBHQgRAAgKgFQgIgFgGgMQgGgOgFgSIAEAAQAFATAjAAQAZAABBgSQAigKBJgXQCrg4ApABQARAAAKAGQAJAFAFANIALAeIgEABQgFgTgjgBQgmgBifA1QinA3grAAIgCgBgAj5AGQgSAAgJgGQgIgEgGgMIgLgfIAEgBQAFAUAjAAQAlAACfg1QBYgcAsgMQA5gPAXAAQASABAJAFQAIAGAGAMQAFANAGASIgEAAQgGgTgiAAQgYgBhAATIhrAiQioA2grAAIgCAAg");
	this.shape_1.setTransform(30.2,13.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F51").s().p("AhuB9IAAgHQAUgCAGgFQAHgHAAgUIAAinQAAgVgIgHQgFgFgUgBIAAgHIDIAAIABA2IgJAAQgFgZgLgIQgKgHggAAIgyAAQgHAAgDACQgDACAAAJIAABUIA5AAQAYAAAIgIQAGgGAEgWIAJAAIAABXIgJAAQgEgXgHgGQgIgHgXAAIg5gBIAABeQAAAMAHACQAHACAqAAQAjAAASgLQARgKANgdIALAAIgRBAg");
	this.shape_2.setTransform(201.025,58.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F51").s().p("AA9B9IhZh1IgVABIAABLQAAATAGAHQAGAHAWABIAAAHIhpAAIAAgHQAWgCAFgHQAFgGAAgXIAAijQAAgUgGgGQgGgHgUgBIAAgHIBpAAQAjAAAZALQAjARAAAmQAAAhgbARQgPAIgbAFIBOBgQANASATAAIAAAGgAguhsQgEACAAAJIAABdQAlAAASgHQAhgNAAgjQAAgggbgNQgPgHgWAAQgPAAgFADg");
	this.shape_3.setTransform(174.075,58.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F51").s().p("AAhB/IAAgHQAOAAAFgBQAIgDAAgJQAAgHgHgSIgQgkIhiAAIgRAsQgDAHAAAIQAAAPAaAAIAAAHIhLAAIAAgHQALAAAIgHQAGgGAJgSIANgeIBPi5IAHAAIBeDWQAJAUAGAGQAGAGANAAIAAAHgAg4AfIBXAAIgrhng");
	this.shape_4.setTransform(144.625,58.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F51").s().p("AhjCJQg3gwAAhZQAAhRA2gyQAygtBFAAQAbAAAgAIIAfAJQAUAAAEgRIALAAIAGBzIgNAAIAAACQgKgqgcgZQgegbgsAAQgsAAghAeQgTATgKAZQgNAgAAAyQAABMAnApQAhAjA0AAQBBABAzg1IAJAJQgMARgWAQQguAgg7AAQhFAAgugog");
	this.shape_5.setTransform(114,54.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F51").s().p("Ag3B9IAAgHQAXgBAHgGQAGgHAAgUIAAinQAAgVgGgGQgHgGgXgBIAAgHIBwAAIAAAHQgXABgHAFQgIAHAAAVIAACnQAAAVAIAHQAHAFAXABIAAAHg");
	this.shape_6.setTransform(85.3,58.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F51").s().p("ABaCAIinjOIgBAAIAACSQAAAdAIAKQAHAJAVACIAAAGIhZAAIAAgGQAXgCAHgJQAHgIAAgfIAAinQgLgNgIgEQgHgDgLgBIAAgHIBBAAICQC2IABAAIAAh/QAAgegJgJQgGgIgVgBIAAgHIBZAAIAAAIQgVADgGAGQgJAJAAAfIAADGg");
	this.shape_7.setTransform(60.925,58.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F51").s().p("AhyB4QgQgdAAgxIAAifQAAgcgIgIQgJgIgdgCIAAgKICRAAIAAAKQgeADgJAIQgIAIgBAbIAACjQAAArAMAWQAUAnA5AAQA7AAAZgoQAMgTAAgzIAAiJQAAgngKgNQgKgMgcgCIAAgKIB3AAIAAAKQgeADgIAMQgKAMAAAnIAACFQAAA3gQAdQgfA2hVAAQhSAAgdg2g");
	this.shape_8.setTransform(27.15,54.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AxMATIAAglMAiZAAAIgMAlg");
	this.shape_9.setTransform(113.35,85.825);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(57.45,107,1,1,0,0,0,53.5,6.2);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.9,113.3);


(lib.SimplyHealthcareLogo4csvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Simply_Healthcare_Logo_4c_svg
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(62.55,55,1,1,0,0,0,47.4,47.6);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.55,54.8,1,1,0,0,0,47.4,47.4);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.55,54.8,1,1,0,0,0,47.4,47.4);

	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55,51.9,1,1,0,0,0,55,51.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E366C").s().p("AlOFPQiLiLAAjEQAAjDCLiLQCLiLDDAAQDEAACMCLQCKCLAADDQAADEiKCLQiMCLjEAAQjDAAiLiLg");
	this.shape.setTransform(62.55,54.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E376C").s().p("AiDDXIBVi8IhujxIBiAAIA6CNIA9iNIBgAAIjBGtg");
	this.shape_1.setTransform(294.025,49.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E376C").s().p("AgtDVIAAmpIBbAAIAAGpg");
	this.shape_2.setTransform(270.9,35.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E376C").s().p("AiYDaIAAmtIBXAAIAAAYQARgPAVgHQAVgIAXAAQA9AAAlAqQAmApAABEQAABCgmAqQglApg9AAQgXAAgTgHQgWgIgOgNIAACjgAgkiPQgMAFgNAJIAAB7QALAJAMAEQANAFANgBQAgAAATgTQAUgXgBgkQABgjgUgXQgSgWgeAAQgNAAgOAEg");
	this.shape_3.setTransform(245.45,49);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E376C").s().p("ACVCTIAAipQAAgggJgOQgKgNgWgBQgSAAgRAMQgPAKgPAYIAAC3IhXAAIAAipQAAgggJgNQgJgOgWgBQgSAAgRAMQgPALgOAXIAAC3IhbAAIAAkgIBbAAIAAAlQAUgWAYgKQAWgKAeAAQAiAAASANQAVANAMAbQAcgeAYgMQAagLAfAAQAwAAAZAcQAZAdAAA2IAAC2g");
	this.shape_4.setTransform(199.05,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E376C").s().p("AgsDXIAAkfIBaAAIAAEfgAghiDQgPgPAAgTQAAgVAPgOQAOgOATAAQAUAAAPAOQAOAOAAAVQAAAVgOANQgOAOgVAAQgUAAgNgOg");
	this.shape_5.setTransform(163.275,35.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E376C").s().p("AhSDRQgmgLghgUIAAheQAuAdAjAMQAhAMAfAAQAfAAAPgJQAQgKABgTQgBgPgJgJQgLgKgkgMQhbghghgfQgjghABg0QAAg3AsgiQArgiBJAAQAiAAAmAJQAkAJAkARIAABXQgugXgggJQghgKgdAAQgcAAgRAJQgQAIAAARQAAANAPAMQAOAMAcAKIASAHQA9AXAaAQQAdAQANAbQAPAaAAAkQAAA7gtAiQgtAihOAAQgnAAglgLg");
	this.shape_6.setTransform(136.55,35.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0DC0DC").s().p("Ag/BFQgagbAAgsQAAgqAagbQAZgaAoAAQAoAAAYAaQAYAbAAAsIAAAGIiLAAQABAaAQAQQAQAPAZgBQAjABArgbIAAAlQglAZgrgBQgrAAgbgcgAgxgUIBiAAQgCgUgNgNQgNgMgTAAQgrABgIAsg");
	this.shape_7.setTransform(299.125,89.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0DC0DC").s().p("AhCBfIAAi6IAlAAIAAApQAPgXAMgKQAMgLAPAAQATAAAYASIgVAhQgRgPgRAAQgPAAgKANQgNANgEAXIAABog");
	this.shape_8.setTransform(280.95,89.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0DC0DC").s().p("AAWBOQgbATgaAAQgaAAgOgNQgOgMAAgVQAAgmA+gUIArgQIABgHQAAgRgJgHQgIgHgSAAQggAAghAaIAAglQAcgYAqAAQAkAAAQARQAQAPAAAjIAABOQAAATAHgBQAHAAANgKIAAAXQgUARgWAAQgVAAgBgTgAgdAVQgQAKAAAPQAAAYAcgBQATAAASgNIAAg3QgiALgPAJg");
	this.shape_9.setTransform(260.875,89.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0DC0DC").s().p("AgxBGQgdgcAAgqQAAgoAdgcQAdgdAsABQAbAAAZALIAAAoQgagPgZAAQgdAAgSARQgRARAAAaQAAAbASASQASARAeAAQAbAAAZgNIAAAmQgcALgaAAQgtAAgdgcg");
	this.shape_10.setTransform(239.675,89.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0DC0DC").s().p("AArCNIAAhyQAAgrgnAAQgbAAgTAXIAACGIglAAIAAkZIAlAAIAAB3QAcgaAdAAQAeAAASARQASASAAAdIAAB8g");
	this.shape_11.setTransform(219.45,84.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0DC0DC").s().p("AgUBkQgMgPAAgmIAAhXIggAAIAAgEIBBhIIAEAAIAAArIA7AAIAAAhIg7AAIAABVQAAAVAFAHQAFAIARAAQASAAAPgJIAAAkQgSAJgWAAQghAAgMgRg");
	this.shape_12.setTransform(200.175,87.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0DC0DC").s().p("AgSCNIAAkZIAlAAIAAEZg");
	this.shape_13.setTransform(187.075,84.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0DC0DC").s().p("AAVBOQgaATgbAAQgZAAgOgNQgOgMAAgVQAAgmA+gUIArgQIAAgHQABgRgJgHQgHgHgTAAQgfAAgiAaIAAglQAdgYApAAQAkAAAQARQAQAPAAAjIAABOQAAATAHgBQAHAAANgKIAAAXQgVARgVAAQgVAAgCgTgAgcAVQgRAKAAAPQAAAYAcgBQATAAASgNIAAg3QgiALgOAJg");
	this.shape_14.setTransform(172.65,89.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0DC0DC").s().p("Ag/BFQgagbAAgsQAAgqAagbQAZgaAoAAQAoAAAYAaQAYAbAAAsIAAAGIiLAAQABAaAQAQQAQAPAZgBQAjABArgbIAAAlQglAZgrgBQgrAAgbgcgAgxgUIBiAAQgCgUgNgNQgNgMgTAAQgrABgIAsg");
	this.shape_15.setTransform(149.675,89.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0DC0DC").s().p("AArCNIAAhyQAAgrgnAAQgbAAgTAXIAACGIglAAIAAkZIAlAAIAAB3QAbgaAeAAQAeAAASARQARASAAAdIAAB8g");
	this.shape_16.setTransform(128.425,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309.7,103.9);


(lib.RS_agp_logo_horizontal_rgbsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// RS_agp_logo_horizontal_rgb_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CA745").s().p("AgaAaQgKgLAAgPQAAgPALgLQALgKAOAAQAQAAAKALQALALAAAOQAAAPgLALQgLALgPAAQgPAAgLgLgAgTgUQgKAJABALQAAANAIAIQAJAJALAAQANAAAJgJQAJgIgBgNQABgMgJgIQgJgJgNAAQgLAAgIAJgAAIATIgDgGQgFgKgGAAIgCAAIAAAQIgIAAIAAgmIASAAQANAAABALQgBAIgKACQADABAEAIIAGAIgAgIgBIAGAAIAHgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAgBQgBgEgGAAIgIAAg");
	this.shape.setTransform(569.75,74.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0087C0").s().p("AiyDkIAAhCIAeAAIAAk5IgeAAIAAhBIByAAIAAAhQAqgsA5AAQA+AAApAzQApAyAABQQAABKgqAyQgqAyg+AAQgeAAgUgLQgWgLgYgZIAABRIAfAAIAABCgAgpiDQgMANgGATQgEASAAAhQAAAgAFASQAGAUAOAOQAKAKAOAGQAOAGAMAAQAlAAAVgcQAWgcgBgwQAAgzgUgeQgWgdglAAQgeAAgXAZg");
	this.shape_1.setTransform(517.45,36.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0087C0").s().p("Ah1CQQgbgdABg0IAAipIgiAAIAAhCIB0AAIAADZQAAA7AxAAQAdAAAXgaQAYgbAAgjIAAh6IghAAIAAhCIBzAAIAAEPIAgAAIAABCIhxAAIAAgpQgdAYgSAKQgbAPgiAAQgvAAgbgdg");
	this.shape_2.setTransform(477.85,32.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0087C0").s().p("Ah3B/QgvgygBhNQABhLAvgzQAxgzBIAAQBFAAAwA0QAwA0AABJQAABMgvAzQgwAzhGAAQhJAAgwgzgAg6hLQgWAdAAAuQAAAvAVAdQAWAdAkAAQAkAAAWgdQAWgcAAgwQAAgtgXgeQgWgdgjAAQgjAAgWAdg");
	this.shape_3.setTransform(439.85,31.8248);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0087C0").s().p("Ah2CtIAAhCIAhAAIAAjOIggAAIAAhCIBzAAIAAA1IAAAAQAQggAUgOQATgOAcAAQATAAATAEIAABPQgUgEgVAAQghAAgYAUQgXAVAAAdIAACCIAnAAIAABCg");
	this.shape_4.setTransform(409.775,31.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0087C0").s().p("AiCDDQgQgOgIgOQgJgPgHgfIBRAAQAIAYASAKQARAKAeAAQAjAAAWgRQAWgRAAgcIAAg2IgBAAQgQAUgRAKQgdAUgnAAQg7gBgnguQgmguAAhHQAAhJAnguQAogtA/gBQAYAAAVAKQAWAKAcAYIAAglIByAAIAABCIgeAAIAAEDQAAA8grAiQgqAjhMgBQhLABgogkgAhCiFQgWAaAAAsQAAAtATAYQATAZAkAAQAhAAAWgbQAWgaAAgrQAAgogVgbQgUgbgeAAIgCAAQgjAAgVAag");
	this.shape_5.setTransform(375.275,37.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0087C0").s().p("AhHDoIAAhCIAhAAIAAjNIggAAIAAhCIByAAIAAEPIAcAAIAABCgAgtiYIAAhPIBaAAIAABPg");
	this.shape_6.setTransform(346.75,25.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0087C0").s().p("Ah2CtIAAhCIAhAAIAAjOIggAAIAAhCIB0AAIAAA1QAPggAUgOQAUgOAbAAQATAAATAEIAABPQgUgEgVAAQghAAgYAUQgXAVAAAdIAACCIAnAAIAABCg");
	this.shape_7.setTransform(324.15,31.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0087C0").s().p("Ah0CAQgugzAAhMQAAhMAvgyQAugzBGgBQAoABAiARQAiASAWAiQAUAeAHAlQAFAWAAAkIjxAAQAFA4AgAWQATANAYABQAwAAAVgzIBXAAQgLA3grAgQgqAfg9AAQhHABgugygAguhXQgUARgIAfICSAAQgFgggSgRQgTgRgdAAQgbAAgUASg");
	this.shape_8.setTransform(291.925,31.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0087C0").s().p("Aj/CuIAAhCIAcAAIAAjOIgdAAIAAhCIBwAAIAAApQAbgdAUgLQAVgKAcAAQAcAAATAMQAQAMARAdQATgXASgLQAegTAjAAQAoAAAaAaQAZAaAAAsIAAC4IAgAAIAABCIhyAAIAAjjQAAgWgJgMQgKgNgRAAQgaAAgUAcQgVAcAAAjIAAB0IAhAAIAABDIhzAAIAAjfQAAgygjAAQgcAAgUAeQgVAdACAoIAABtIAhAAIAABCg");
	this.shape_9.setTransform(246.2,31.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0087C0").s().p("ABsDeIgdhgIibAAIgdBgIhnAAIAAhIIAiAAIB7lzIBpAAIB6FzIAhAAIAABIgAg4A6IB0AAIg7jEg");
	this.shape_10.setTransform(195.1,26.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#EFF7FB","#C4E3F0","#7FC3DF","#2197C8","#0087C0"],[0,0.075,0.22,0.42,0.667,0.749],-0.1,0,0,-0.1,0,74).s().p("AhfLDQgogoAAg5QAAgNADgPQgDAQgHALQgYAzg2ATQg1ASgzgZQgzgYgSg1QgTg1AYg0QAGgLAJgOQgKANgLAHQgsAjg4gFQg3gHgkgsQgjgsAHg4QAGg4AsgjQAMgIALgGQgLAFgPADQg2ANgwgeQgwgegNg3QgNg3AegwQAegvA3gMQAWgEAKABIJSAAIlznQIgCgCQgJgNgGgMQgYgzASg1QATg2AzgYQAzgZA1ATQA2ATAZAzIAKAbQgEgQAAgMQAAg4AogoQAogoA4AAQA4AAAnAoQAoAoAAA4QAAAOgDANQAEgPAGgKQAZgzA1gTQA1gSAzAYQAzAZATA1QASA1gYAzQgFAMgKANQAKgMALgIQAsgjA4AGQA4AHAjAsQAjAsgGA4QgGA4gtAjQgLAIgMAHQAMgFAPgEQA2gMAwAeQAwAdANA3QAMA3gdAwQgeAug3ANQgOACgNABQAOAAANADQA3AMAeAxQAeAvgNA3QgNA3gwAeQgwAdg2gMQgPgEgMgFQAMAGALAJQAsAjAHA4QAGA4gjArQgjAsg4AHQg3AGgtgiQgHgGgMgNQAGAHAIAPQAZA0gTA1QgTA0gzAZQgzAZg1gSQg1gTgZg0IgKgbQADAOAAAOQAAA5goAoQgoAog4AAQg3AAgogog");
	this.shape_11.setTransform(83.725,76.05);

	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(73.5,74.7,1,1,0,0,0,73.5,74.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6CA745").s().p("AgyA9QgVgYAAglQAAgjAVgYQAVgYAdAAQAfAAAUAWQAVAYAAApIh0AAQACAgAQAQQAMAMARAAQAPAAAIgGQAJgHAGgPIAaAAQgDAOgJALQgVAXgfAAQggAAgVgXgAgYg2QgLAJgGARQgCAKAAAGIBYAAIAAgBQgEgdgNgMQgLgKgQAAQgOAAgLAKg");
	this.shape_12.setTransform(354.925,140.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6CA745").s().p("Ag3BTIAAgTIAYAAIAAh6IgZAAIAAgTIAvAAIAAAiQAJgSAJgJQANgMARAAIASACIAAAYQgIgCgJAAQgcAAgNAYIgIAYIAABKIAcAAIAAATg");
	this.shape_13.setTransform(341.1,140.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6CA745").s().p("Ag8BGQgPgPAAgUQAAgXAVgMQAWgMAvgEIAPgCIAAgRQAAgOgJgHQgKgJgRAAQgSAAgIAHQgJAGgEAQIgYAAQAGgXAMgKQARgOAaAAQAaAAAQAMQATAPAAAdIAABYIAXAAIAAATIguAAIAAgcQgUAgggAAQgXAAgPgOgAAPAAQgkAEgOAIQgPAIAAAPQAAANAKAKQAJAJAOAAQATAAAOgPQANgOAAgNIAAgag");
	this.shape_14.setTransform(326.25,140.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6CA745").s().p("AgxA9QgUgYAAgnQAAgjATgXQATgXAdAAQATAAAOALQAIAHALAPIAAgeIASAAIAAA5IgSAAQgIgSgHgHQgNgPgVAAQgUAAgMARQgMASAAAeQAAAdANARQANARAWAAQALAAAKgGQALgGAFgLIAGgPIAWAAQgGAWgIAKQgVAZggAAQggAAgUgXg");
	this.shape_15.setTransform(309.025,140.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6CA745").s().p("AAnBvIAAhoQAAgngeAAQgJAAgKAGQgLAHgHAKQgFAIgCAFQgCAJAAAVIAAA6IAWAAIAAATIhGAAIAAgTIAYAAIAAi3IgYAAIAAgTIAwAAIAABcQAKgPAPgKQAOgKAQAAQASAAAMANQAOAOAAAmIAABQIAYAAIAAATg");
	this.shape_16.setTransform(291.175,137.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6CA745").s().p("AgJBgQgIgGAAgUIAAhwIgbAAIAAgTIAbAAIAAgpIAXAAIAAApIAnAAIAAATIgnAAIAABoQAAAQAGAEQAFADATAAIAIAAIAAASIgcAAQgSABgHgIg");
	this.shape_17.setTransform(276.525,138.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6CA745").s().p("AghBvIAAgTIAXAAIAAi3IgXAAIAAgTIAtAAIAADKIAWAAIAAATg");
	this.shape_18.setTransform(268,137.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6CA745").s().p("Ag8BGQgPgOAAgVQAAgXAWgMQAVgMAvgEIAPgCIAAgRQAAgOgKgHQgKgJgQAAQgSAAgJAHQgIAGgEAQIgYAAQAGgXAMgKQARgOAaAAQAaAAARAMQASAPAAAdIAABYIAXAAIAAATIguAAIAAgcQgVAgggAAQgXAAgOgOgAAQAAQgkAEgPAIQgPAIAAAPQABANAJAKQAKAJAOAAQATAAAPgPQAMgOAAgNIAAgag");
	this.shape_19.setTransform(255.55,140.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6CA745").s().p("AgxA9QgWgYAAglQAAgjAWgYQAUgYAdAAQAfAAAUAWQAUAYAAApIhzAAQACAeAQASQAMAMASAAQAOAAAIgGQAKgHAGgPIAaAAQgEAPgJAKQgVAXgeAAQghAAgUgXgAgZg2QgLAJgFARQgEAMAAAEIBYAAIAAgBQgDgdgNgMQgKgKgRAAQgOAAgLAKg");
	this.shape_20.setTransform(238.4,140.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6CA745").s().p("AAnBvIAAhoQAAgngeAAQgVAAgQAXQgFAIgCAFQgCAJAAAVIAAA6IAWAAIAAATIhGAAIAAgTIAYAAIAAi3IgYAAIAAgTIAwAAIAABcQALgPAOgKQAOgKAQAAQATAAALANQAOAOAAAmIAABQIAYAAIAAATg");
	this.shape_21.setTransform(220.475,137.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6CA745").s().p("AAmBTIAAhqQAAgRgIgKQgIgKgOAAQgSAAgNAPQgPAQAAATIAABKIAXAAIAAARIhFAAIAAgSIAYAAIAAh7IgYAAIAAgTIAuAAIAAAeQAKgOAIgGQAQgNASAAQAXAAAMAPQANAQAAAbIAABYIAWAAIAAATg");
	this.shape_22.setTransform(193.25,140.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6CA745").s().p("AgjBrIAAgTIAZAAIAAh7IgZAAIAAgUIAwAAIAACPIAWAAIAAATgAgQhPIAAgbIAaAAIAAAbg");
	this.shape_23.setTransform(179.7,137.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6CA745").s().p("AgyCaQgQgLgYgeIAAA4IgoAAIAAhtIAmAAQAIASAGAJQAFAJAKAJQAeAdAoAAQAhAAAVgRQAWgSAAgcQAAgYgSgMQgSgLgwgHIgTgCQg2gHgdgWQgdgYAAglQAAgtAegbQAegcAwAAQAmAAAdAVQAPALAUAaIAAg1IAoAAIAABkIgmAAIgOgYQgFgKgIgGQgdgbgpAAQgcAAgTAQQgTAQAAAWQAAAXARALQARAKAtAFQBIAJAfAXQAiAWAAAxQAAAsghAfQghAhguAAQgoAAgfgXg");
	this.shape_24.setTransform(553.825,95.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6CA745").s().p("ABRCsIAAjeQgBglgRgVQgRgVgeABQgjAAgfAgQgeAhAAAoIAACcIAwAAIAAAnIiPAAIAAgnIAuAAIAAkEIgvAAIAAgnIBfAAIAABAQAUgdASgOQAggbApAAQAuAAAaAhQAaAfAAA4IAAC5IAxAAIAAAng");
	this.shape_25.setTransform(519.85,94.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6CA745").s().p("AhwB/QgrgxAAhOQAAhOAsgxQArgwBEAAQBEAAAsAxQAsAyAABMQAABOgrAxQgsAxhFAAQhGAAgqgxgAhKhgQgaAjAAA+QAAA/AaAjQAaAjAvAAQAuAAAcgkQAcglAAg+QAAg8gdgkQgbgjguAAQguAAgbAkg");
	this.shape_26.setTransform(484.1,95.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6CA745").s().p("AhJDfIAAgoIAzAAIAAkDIgyAAIAAgoIBhAAIAAErIAxAAIAAAogAgiilIAAg5IA5AAIAAA5g");
	this.shape_27.setTransform(459.05,89.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6CA745").s().p("AgVDJQgPgOAAgoIAAjtIg5AAIAAgoIA5AAIAAhVIAwAAIAABVIBSAAIAAAoIhSAAIAADdQAAAfAMAJQAKAHAogBIASgBIAAAmQgaACghAAQgnAAgPgPg");
	this.shape_28.setTransform(439.825,91.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6CA745").s().p("AhpCSQgZgdABgvIAAjLIgtAAIAAgoIBdAAIAADqQAAAgAQAUQAQAUAcAAQAjAAAfggQAWgWAHgZQAIgagBgyIAAhvIgvAAIAAgoIBgAAIAAErIAuAAIAAAoIhhAAIAAhCQgWAhgUAPQgiAagrAAQgpAAgYgcg");
	this.shape_29.setTransform(412.1,95.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6CA745").s().p("AhGDoIAAgoIAxAAIAAl/IgwAAIAAgoIBfAAIAAGoIAtAAIAAAng");
	this.shape_30.setTransform(386.1,88.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6CA745").s().p("AhxB/QgqgxAAhOQAAhOArgxQAsgwBEAAQBDAAAtAxQAsAyAABMQAABOgsAxQgsAxhEAAQhGAAgrgxgAhLhgQgaAjAAA+QAAA+AaAkQAbAjAuAAQAuAAAcgkQAbglABg+QAAg8gcgkQgcgjguAAQguAAgbAkg");
	this.shape_31.setTransform(361.2,95.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6CA745").s().p("AgmDaQgdgNgXgXQgJgKgPgVIAABFIgvAAIAAiHIAvAAIAAgBQAIAXAGALQAGAKAKALQAoArA0ABQArgBAdgYQAcgYAAgmQAAgWgLgRQgMgSgUgJQgQgIgugEQgigDgOgDQgNgCgQgGQgPgEgLgGQgNgJgQgRQgbgbAAgvQAAg2AmgiQAlgkA6AAQAlAAAgATQAcAQAbAjIAAg+IAtAAIAAB5IgtAAQgKgTgGgKQgHgKgJgIQgkgjgwAAQgoAAgZAWQgZAUAAAgQAAASAKAQQAKARAQAHQAVAJAtADQA4AGAeAMQAgAMAUAYQAbAgAAAuQAAA7goAoQgoAng8gBQgfABgdgNg");
	this.shape_32.setTransform(325.075,90.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6CA745").s().p("AhJDoIAAhBIAhAAIAAlNIghAAIAAhCIByAAIAAGPIAhAAIAABBg");
	this.shape_33.setTransform(296.625,88.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6CA745").s().p("AiACSQgigdAAgtQAAhCBGgbQApgQBrgLQgBgmgMgNQgMgNgkgBQgbABgPAOQgRAOgBAXIhSgEQADgyAmgeQAmgeA8gBQBFABAlAeQAlAfAAA5IAAChIAcAAIAABCIhpAAIAAgpQgbAbgWAKQgUAKggAAQgyAAgjgegAgnAaQgkANAAAgQAAAUAQANQAPANAYAAQAfAAAWgWQAXgVgBggIAAggQhGAHgYAJg");
	this.shape_34.setTransform(269.35,95.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6CA745").s().p("Ah0B/QgugxgBhOQAAhLAwgzQAugzBGAAQAnAAAjASQAiATAVAhQAUAeAIAmQAFAVABAkIjyAAQAEA4AiAXQASANAYgBQAwAAAUgxIBYAAQgLA2grAgQgqAfg9ABQhHAAgugzgAguhXQgUARgIAgICTAAQgGghgSgRQgSgRgeAAQgaAAgVASg");
	this.shape_35.setTransform(232.65,95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6CA745").s().p("ABIDeIAAhwQAAhPhOAAIg/AAIAAB2IAgAAIAABJIigAAIAAhIIAlAAIAAkrIglAAIAAhIIDNAAQBaAAAmAuQAaAeAAAuQABBGg+AaQAiAQAMAYQAOAcAAA+IAAAXIAlAAIAABIgAhFgkIBHAAQAiAAATgQQATgPAAgcQAAg2hTAAIg8AAg");
	this.shape_36.setTransform(194,89.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573.5,150.8);


(lib.mc_WV_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AABh9IAoBUIBcANIhDBAIARBcIhSgsIhTAsIARhcIhDhAIBcgNg");
	this.shape.setTransform(232.0045,-31.1463,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AABBTIhTAsIARhcIhDhAIBcgNIAphUIAoBUIBcANIhDBAIARBcg");
	this.shape_1.setTransform(232.0065,-31.0696,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.8).p("AHdkEQgHgJgDgEQgfgVgsgEQgQAAgdAZQgfAZgCAAQgHACgXgFIgWgEIgbA0IghgGIhIBQIgZiUIjUAiIgjj3QgNADgJAGQgLAHADAJQAPAjAAApQgCAqgGA3QgIBLgGAPQgGAPg6AvIg+AzQgFAEgLAdQgFAOgEAOQgGAjgHAGQgCABgZgHQgYgHgKANQgLANAEAvQADAZAEAhQAAAGgaARQgeAUgLAQQgQAUAIAaQAPA7AmAvQAnAwA3AbQACAAACACQA3AaACAaQABAFgDAKQgBAGAFABQARADBFgpQApAMAngUQAigVAdgbIAZgCQAbgFAQgOQAOgNAAgeQAAgkAFgLQAJgUAUgxQATgwAJgYIAZhjIAnAcQAnAZAEgNQALgjAJgaQASgvATgRQANgNAxgmQApgjgCgLQgBgMAAgwIABgtIBrA/QADgNACgRQAEghgIgVg");
	this.shape_2.setTransform(194.4303,-18.7539,0.7407,0.7407);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A72BA").s().p("AkNHsQgFgBABgGQADgKgBgFQgCgag3gaQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQg3gbgngwQgmgvgPg7QgIgaAQgUQALgQAegUQAagRAAgGIgHg6QgEgvALgNQAKgMAYAGQAZAHACgBQAHgGAGgjIAJgcQALgdAFgEIA+gzQA6gvAGgPQAGgPAIhLQAGg3ACgqQAAgpgPgjQgDgJALgHQAJgGANgDIAjD3IDUgiIAZCUIBIhQIAhAGIAbg0IAWAEQAXAFAHgCQACAAAfgZQAdgZAQAAQAsAEAfAVIAKANQAIAVgEAhQgCARgDANIhrg/IgBAtQAAAwABAMQACALgpAjQgxAmgNANQgTARgSAvQgJAagLAjQgEANgngZIgngcIgZBjIgcBIQgUAxgJAUQgFALAAAkQAAAegOANQgQAOgbAFIgZACQgdAbgiAVQgnAUgpgMQhAAmgUAAIgCAAg");
	this.shape_3.setTransform(194.4303,-18.7059,0.7407,0.7407);

	this.instance = new lib.Unicare_25AnthemTag_Logo_Color_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2,-63.3,0.5155,0.5155,0,0,0,111.8,56.6);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Hannah Billings", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_4.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_7.setTransform(2,2.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_8.setTransform(2,2.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_9.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_WV_Contact, new cjs.Rectangle(-154.7,-106.2,397.6,212.5), null);


(lib.mc_WI_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AHTH3QgEg2ALh2QAKhyAKgbQAIgUAHhTQAGhXACgGQATg3APgrQAehUgFgLQgFgMgWAdIgVAfIgTAyIiCB9IAig7QAkg/AIgLQAEgEAQggIgghUQgJAEgIgFQgSgIABgnQACgmgOgPIgPgGQgMgYgHgMQgGgLgqgHIgqgFQgTAAiigkQh7gcgig8Ih8gRQAHgRADgTQAHgkgRgEQgJgDhuA5QhnA1gLgXIAAgCQgJAFgHAKQgGAKgBALQAAAZgIBdQgiAZghAcQhCA3AJAMQABABAkAbQAZATgBAUQgCAPgJAvQgIApAAAKIAABMIA0ArIBBAiIASAEQAUAJAOAVQATAbARAWQATAXAIAEQA/AcAAAdQAFAvAKAvQAIAuAJAtQAKAuAFAOQAHAXAWATQARAQAVAJQAOAGAOAYQAKAPAEAMIIwgbQgLgvAAgkg");
	this.shape.setTransform(197.6273,-9.4928,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AhgJLQgOgYgOgHQgVgJgRgPQgWgUgHgXQgFgOgKgtQgJgugIguQgKgvgFgvQAAgcg/gdQgIgDgTgYQgRgVgTgcQgOgVgUgIIgSgFIhBgiIg0grIAAhMQAAgKAIgpIALg+QABgTgZgTIglgdQgJgMBCg3QAhgbAigaQAIhdAAgZQABgLAGgKQAHgJAJgGIAAACQALAXBng0QBug5AJACQARAFgHAkQgDASgHARIB8ARQAiA8B7AcQCiAkATAAIAqAFQAqAIAGAKIATAkIAPAHQAOAOgCAmQgBAoASAIQAIAEAJgEIAgBUQgQAggEAEQgIAMgkA+IgiA7ICCh9IATgyIAVgfQAWgdAFAMQAFAMgeBTIgiBiQgCAGgGBYQgHBSgIAUQgKAcgKBxQgLB2AEA2QAAAlALAuIowAbQgEgLgKgPg");
	this.shape_1.setTransform(197.6273,-9.4989,0.7407,0.7407);

	this.instance = new lib.ABS_PMS300_20170_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.95,-61.25,1.405,1.405,0,0,0,71.5,11.2);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer Sr", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Ashley Boggs", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_WI_Contact, new cjs.Rectangle(-154.7,-106.2,396.1,212.5), null);


(lib.mc_VA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AABh9IAoBUIBcANIhDBAIARBcIhSgsIhTAsIARhcIhDhAIBcgNg");
	this.shape.setTransform(233.0045,-58.3463,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AABBTIhTAsIARhcIhDhAIBcgNIAphUIAoBUIBcANIhDBAIARBcg");
	this.shape_1.setTransform(233.0065,-58.2696,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.8).p("AMODeQgGgggFgMQgJgVgNAEQgPAEgwAAIgsgCIAkgkIgihDIAggPQgOgGgOgLQgbgWADgVQAGghAAgRQABgdgRgUQgMgOhYgRQhZgSgZgbQgHgJAAgFQgBgEAGgDQACgXAAgaQgCglgIgVQgJgZgkgMQgmgKgHgDQgIgDADgTIAFgSIgsgLQgPgVgMgPQAIAXgEAgQgCAQgEALIhrg/IAAAuQgBAvABAMQABAMgoAhQg8AygCACQgQAQgSAxQgKAagMAjQgFANgngZIgmgcIgZBjQgKAogvBkQgFALAAAkQAAAegOANQgPAPgdAEIgZACQgcAbgjAVQgmAWgqgOQhFAogRgCQgFAAACgGQADgKgBgFQgCgag4gbQgCgCgCAAIhzBjQgPAcgXAhQguBCgmAcQBvgPDlgdQFVgtDMgjQC9ggEIgsQDcglAvgJQgHAAACgGg");
	this.shape_2.setTransform(213.5824,-31.3639,0.7407,0.7407);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A72BA").s().p("ArOFyQAXggAPgcIBzhjQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQA4AbACAaQAAAFgDAKQgBAFAFABQARACBFgoQAqAOAmgWQAigVAdgbIAZgCQAcgEAQgPQAOgNAAgeQAAgkAFgLQAvhlAKgnIAZhjIAlAcQAnAZAGgNIAVg+QASgwARgQIA+g0QAogigBgLQgBgMABgvIAAguIBrA/QAEgMACgPQAEghgIgWIAbAkIAsALIgFASQgEASAJAEQAHADAmAKQAjAMAKAZQAIAUACAlQAAAagCAYQgGADABAEQAAAFAHAJQAZAbBZASQBYARAMAOQARAUgBAdQgBARgFAhQgDAVAbAVQAOALAOAHIggAPIAiBDIgkAkIAsABQAvABAQgEQANgEAJAVQAFAMAFAgQgBAGAHAAIkLAuInFBMQjMAjlVAtIlUAsQAmgdAuhCg");
	this.shape_3.setTransform(212.4163,-30.667,0.7407,0.7407);

	this.instance = new lib.BCBSAnthemHealthKeepersPlusHKbluevertsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.95,-63.2,0.5642,0.5642,0,0,0,170.2,50.8);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Nate Levine", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_4.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_7.setTransform(2,2.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_8.setTransform(2,2.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_9.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_VA_Contact, new cjs.Rectangle(-154.7,-106.2,430.4,212.5), null);


(lib.mc_SC_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BCBSHB_SC_HealthyBlueLogo_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.9,-63.35,0.5801,0.5801,0,0,0,184.7,42.4);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Laura Livingston", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_1.setTransform(2,2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_2.setTransform(2,2.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_5.setTransform(2,2.025);

	this.instance_3 = new lib.Image_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.55,22.15,0.1753,0.1753);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.8).p("AEKl1Ij6AbQgHgUghgUQhEgpiHABQhjAAg0AgQgqAagFADQgiARgxAKQgaAtgIAOQgUAlAGAHQAFAIA6AdQAdAOAcAMIAnA9QApA+APAHQAdAOAwAhQA8AqAMAXQAiA9AKAIQAFAEAgAQQAfASAIAMQAKAVAaBQIAYAKQAXAMAHAMQAEAKAKApQAKAmAKADQAXAHATADIAbg8IAqgZQgqgyAAgSQAAgHA/gDQBHgDARgOQAagTAJgNQALgOAgg7QBCguAPg0QAEgQgBgPIgCgMQBhiDAMgXQACgDALgHg");
	this.shape_6.setTransform(203.1618,61.7637,0.7407,0.7407);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A72BA").s().p("AA2GhQgKgEgKglQgKgqgEgJQgHgMgXgMIgYgKQgahQgKgVQgIgNgfgRQgggQgFgEQgKgIgig9QgMgXg8gqQgwghgdgOQgPgIgpg+Igng8Ig5gbQg6gcgFgIQgGgHAUgmIAig6QAxgLAigRIAvgdQA0gfBjAAQCHgBBEAoQAhAUAHAVID6gbIEgDRQgLAGgCAEQgMAXhhCDIACALQABAPgEARQgPA0hCAuQggA7gLAOQgJANgaATQgRANhHADQg/ADAAAIQAAARAqAyIgqAZIgbA9QgTgDgXgHg");
	this.shape_7.setTransform(203.0098,61.7444,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_SC_Contact, new cjs.Rectangle(-154.7,-106.2,412.4,212.5), null);


(lib.mc_NV_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// State_Selected_Blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("ABtuQIACgEIpFigIjpMrIN+U5IAEgKIAdi/QgDgPAAgPQAAgfASgCQATgCAnALQAeAJANAHQAKAIAmhBIE74eg");
	this.shape.setTransform(-211.9716,10.9879,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("Aq+kGIDosrIJFCgIgBADIJSB7Ik7YeQgnBAgJgIQgOgHgegJQgmgLgUACQgSACAAAfQAAAPAEAPIgeC/IgEALg");
	this.shape_1.setTransform(-211.9878,10.8199,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.ABS_PMS300_20170_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.95,-61.25,1.405,1.405,0,0,0,71.5,11.2);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Kristen Cayton", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_NV_Contact, new cjs.Rectangle(-265.1,-106.2,419.90000000000003,212.5), null);


(lib.mc_NC_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Phone
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AOXjxIgsAwIgTg0QgYAJgbAIQg1AQgLgGQgLgFgDgQIgBgPIARAFQAWABAcgQQAWgMAngXQAdgOAPANQAOAMgSgyQgZg+gFgSQgEgMAAgHQj0AoncBSQjBAhlgAvQgCAJgHA2QgGAugCALQgEAXgqAoQgDADgQgEQgQgEgDAFQgFAIgVAOQgVAPgMABQgEABgXgGQgRgDgIAIQgGAHgOAfQgNAegJAHQgJAIgOAEQgOADgFACQgDACgWAZQgXAagLAIQgLAHgmAHQgnAIgJAGQgMAHgHAgQgGAdgCAAQgOgBgIgBQgRgBgBADQgBACgGAVQgGAYgEALQA3gEBtgLQA8gFA+gNQAxgKAhgQQAIgEAogZQA0gfBjgBQCHgCBEApQAiAUAHAVID5gcIEeDVQASgKA/gYQA6gZAQgZQANgYAUgtQAUgnAhgaQAbgUA1gWQAvgTAWgVQAlgiAHg0Ig5gSQAbgpgCgXQgBgOgegKIgegHIAwgiIAcAUQAhARAVgJQAYgLAWgkQAVgjACgbQACglgcgcg");
	this.shape.setTransform(226.5256,-69.2031,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AB1DhIj5AcQgHgVgigUQhEgpiHACQhiABg0AfIgwAdQgiAQgxAKQg9ANg9AFQhtALg3AEIALgjIAGgXQABgDARABIAWACQADAAAGgdQAGggAMgHQAKgGAmgIQAngHAKgHQAMgIAXgaQAVgZADgCIATgFQAOgEAJgIQAJgHANgeQAOgfAGgHQAIgIARADQAXAGAEgBQAMgBAWgPQAUgOAFgIQAEgFAPAEQARAEACgDQAqgoAEgXQADgLAGguIAIg/QFggvDBghQHdhSDzgoQAAAHAEAMQAGASAYA+QATAygPgMQgOgNgeAOIg8AjQgcAQgWgBIgRgFIABAPQADAQALAFQALAGA1gQQAagIAZgJIATA0IAsgwQAbAcgCAlQgBAbgVAjQgWAkgZALQgVAJgggRIgdgUIgwAiIAeAHQAeAKABAOQACAXgbApIA5ASQgGA0gmAiQgWAVgvATQg1AWgbAUQghAagUAnQgTAtgOAYQgPAZg6AZQhAAYgSAKg");
	this.shape_1.setTransform(226.6122,-69.2037,0.7407,0.7407);

	this.instance = new lib.Image_5();
	this.instance.parent = this;
	this.instance.setTransform(156,-105.65,0.1743,0.1743);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Name_Title
	this.text = new cjs.Text("Marketing Communications Mgr", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Mary Johnson", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Icons
	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Plan_Logo
	this.instance_3 = new lib.BCBSNCHealthyBlueRGBsvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-61.5,0.3901,0.3901,0,0,0,307.7,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// White_Box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_NC_Contact, new cjs.Rectangle(-154.7,-106.2,452.5,212.5), null);


(lib.mc_MN_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AIknVQgKgDgpABQgvAAgPAIQgPAHgwgTQglgPgrgZQg5gjghgSQg9ghggAAQg6AAiVgZQgtgIgtACQgIgdgMgjQgahHgXgfQgggpgLBFQgGAiABArQjYAGitgGIgHAAQATBQAEBLQABArAeBcQAdBcABAZQABAQgGBnQgFBWAKAiQAIAeAXA6QASAzgFAcQAAAFgEAIQgIATgaAhQgWAbABALQAAADAmAvQAlAuADA3QAEBfgVFPQgEAEgCAGIQfgKQgHgfgIhAQAAgQgcgUQgRgNgSgIQgJgEgTgXQgUgYgPgZQgPgVgUgJIgRgEIhBgiIg0gsIAAhJQAAgKAIgpQAJguACgQQACgVgZgSQgegTgIgJQgKgMBCg3QAhgcAjgZQAIhbAAgaQAAgJAIgKQADgEAMgNQAAgJACgEQAMghBQhEQApgiAlgbIBKhGQBLhFALAAQANAAAlgaQAlgbADgMQADgIhMgKQhOgJgEgBg");
	this.shape.setTransform(208.0959,-13.9555,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("Ao8MkQAVlPgEhfQgDg2glguQgmgvAAgEQgBgKAWgcQAaggAIgUQAEgIAAgFQAFgcgSgyQgXg6gIgfQgKghAFhXQAGhngBgQQgBgYgdhcQgehdgBgrQgEhKgThRIAHAAQCtAGDYgGQgBgqAGgjQALhEAgAoQAXAgAaBGQAMAjAIAdQAtgBAtAHQCVAZA6AAQAgAAA9AhQAhASA5AjQArAZAlAQQAwATAPgIQAPgHAvgBQApAAAKACIBSAKQBMAKgDAIQgDANglAaQglAagNAAQgLAAhLBGIhKBFQglAcgpAiQhQBEgMAgQgCAEAAAJIgPASQgIAKAAAIQAAAagIBbQgjAaghAbQhCA3AKAMQAIAKAeASQAZATgCAUQgCARgJAuQgIAoAAAKIAABKIA0AsIBBAhIARAFQAUAIAPAVQAPAaAUAXQATAXAJAEQASAJARAMQAcAUAAAQQAIBAAHAfIwfAKQACgGAEgEg");
	this.shape_1.setTransform(208.1447,-13.9579,0.7407,0.7407);

	this.instance = new lib.MNBCBSBlueX_blue_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.05,-66.1,1.0254,1.0254,0,0,0,75.5,25.4);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Kara-Leigh Sakis", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.instance_3 = new lib.Image_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.7,-75.25,0.1755,0.1755);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_MN_Contact, new cjs.Rectangle(-154.7,-106.2,417.9,212.5), null);


(lib.mc_LA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.healthybluelogocolor4csvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2,-61.25,0.8892,0.8892,0,0,0,135.4,21.8);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Nate Levine", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_1.setTransform(2,2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_2.setTransform(2,2.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_5.setTransform(2,2.025);

	this.instance_3 = new lib.Image_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.25,-21.25,0.176,0.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.8).p("AJNHcQgLgPg/gkQgzgdABgdQABgWAngWQAkgUgHghQgGgkgnAMQgsAUgLACQgNABgOgVQgNgSgFAEQh6BFgChLQgBgwBQgDQArgBBSAKQgvhLgIgJQgFgGAAgwIABgvQhqAFhrACQjVAFgDgMQgCgJAKgqQALguAAgPQAAgSAqhNQAWgmAVgjIAmhMQgqhhgKg4QgDgLABgKIqZAAQgCBvAECsIAYAkQAYAlAHAFQAHAHAaBHQAaBJAAAPQAAALgNA/QgPBCgBAIQgBAOABAvQAAAZAAAmQAAACgcAvQgXAnARAeQBTgKBPAAQAZABBYAUQBOASAigEQAjgFAIgfQAIgfAKgBQARgBBSBJQBXBLATAEQAhAHBQAAQBUABAigIQAcgFAJggQAIgeAFAAQARAAAwAfQA1AjAVAhQAYAFAZgNQAfgQgVgcg");
	this.shape_6.setTransform(201.47,21.8438,0.7407,0.7407);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A72BA").s().p("AISIQQgVghg1gjQgwgfgRAAQgFAAgIAeQgJAggcAFQgiAIhUgBQhQAAghgHQgTgEhXhLQhShJgRABQgKABgIAfQgIAfgjAFQgiAEhOgSQhYgUgZgBQhPAAhTAKQgRgeAXgnQAcgvAAgCIAAg/QgBgvABgOQABgIAPhCQANg/AAgLQAAgPgahJQgahHgHgHQgHgFgYglIgYgkQgEisAChvIKZAAQgBAKADALQAKA4AqBhIgmBMQgVAjgWAmQgqBNAAASQAAAPgLAuQgKAqACAJQADAMDVgFQBrgCBqgFIgBAvQAAAwAFAGQAIAJAvBLQhSgKgrABQhQADABAwQACBLB6hFQAFgEANASQAOAVANgBQALgCAsgUQAngMAGAkQAHAhgkAUQgnAWgBAWQgBAdAzAdQA/AkALAPQAVAcgfAQQgTAKgSAAIgMgCg");
	this.shape_7.setTransform(201.47,21.8438,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_LA_Contact, new cjs.Rectangle(-154.7,-106.2,404.9,212.5), null);


(lib.mc_KY_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AKWjhQgGgZAOgVQgKgLgdgPQgSgKgQgGQgGgFgHgQQgIgTgEgGQgFgIgbAfQggAkgOACQgMACgPgRQgPgSgPACQgQABgIAMQgKANgEABQgFACgRgOQgUgQgEgBQgSAHgMAEQgYAGgJggQgKgkgvgQQgogNgjAGQgVAEAJApQAJAugDAEQgHAJgVAIQgUAIgLAAQgogIgGAIQgFAFACAVQABAKACAKQgqAbgcAoQgQAYgFAjQgGArgCAFQgFANgngTQgrgWgKAHQgNAKgNAXIgKAWQgwgTgVACQgLABgeAaQgbAXgDgCQgDgEgPgGQgSgIgGgDQgGgFgiAHQgoAKgPADQgfAGgaAQQAAAEgCACIAABMQgQAGgRAIQgiAQAAAIIAABhIhtgZIguBOIAGAEIgDAbQgEAdgMALQgSASgcAgIE5gdIAAguIFUgiQCJgMJGhGQAmgdAuhCQAXghAPgbIBzhiQg1gggmgwQglgxgRg7g");
	this.shape.setTransform(214.5176,-7.6876,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("Ar2FlQAMgKAFgeIACgbIgGgEIAuhOIBuAZIAAhhQgBgIAigQIAhgOIAAhMQACgCAAgEQAagQAggGQAPgCAogKQAigIAFAFQAGAEASAHQAPAGAEAEQACACAbgWQAegbAMgBQAUgBAwATIAKgWQANgYANgJQAKgHArAVQAoAUAEgNQADgGAFgqQAFgkAQgXQAcgpAqgbIgCgUQgCgVAEgFQAHgIAnAIQAMAAATgHQAVgJAIgJQACgEgJguQgJgoAWgFQAigFAoANQAvAQAKAjQAKAhAXgHQANgDARgIQAFACATAQQARAOAFgDQAFAAAJgNQAJgNAPgBQAQgBAPARQAOARANgCQAOgCAfgjQAbgfAFAHQAEAGAJAUQAGAQAGAEQAQAHASAJQAdAPAKALQgOAWAGAYQARA7AmAxQAlAxA1AfIhzBiQgPAcgXAhQguBCgmAcQpFBGiKAMIlUAiIAAAuIk5AdQAcggASgSg");
	this.shape_1.setTransform(214.6466,-7.7296,0.7407,0.7407);

	this.instance = new lib.ABS_300_Medicaid_201804svg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-77.05,-82.2,0.3817,0.3817,0,0,0,71.2,16.1);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer Sr", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Maria Sabale", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_KY_Contact, new cjs.Rectangle(-154.7,-106.2,430,212.5), null);


(lib.mc_IN_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AD9pFImUAdIgCACQgnAvgzAFQgXADgXgLQACAjAKCwQALClAJAbQAOAsAKAwQALA5gGAQQgYAggQAXQgeAsALAZQALAVAiAzQAbArgNAPQgZAegWAiQggAxgFAeQgFAjgUBTQAbgSAegFQAOgCAngKQAigIAIAFQAFAEASAHQAQAHADADQADADAbgYQAegaALgBQAVgCAwATIAJgWQANgXANgKQAKgHAqAVQAnATAGgMQACgFAGgrQAFgjAQgYQAdgnAqgcQgCgJgBgLQgCgVAFgFQAIgIAmAIQAIACAUgIQAWgJAJgKQADgDgJguQgJgpAVgFg");
	this.shape.setTransform(185.7522,-20.0056,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("Ak5HNQAFgdAggxQAWgjAZgdQANgPgbgsQgigygLgVQgLgaAegrIAog3QAGgQgLg5QgKgwgOgsQgJgcgLikIgMjTQAXALAXgDQAzgFAngwIACgBIGUgdIBXLgQgVAFAJApQAJAtgDADQgJALgWAIQgUAJgIgDQgmgHgIAHQgFAGACAVIADAUQgqAcgdAnQgQAYgFAjQgGArgCAFQgGAMgngTQgqgVgKAHQgNAKgNAXIgJAWQgwgTgVACQgLABgeAaQgbAYgDgDQgDgEgQgGQgSgHgFgFQgIgEgiAIQgnAJgOACQgeAGgbASQAUhTAFgkg");
	this.shape_1.setTransform(185.8358,-20.2145,0.7407,0.7407);

	this.instance = new lib.ABS_PMS300_20170_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.95,-61.25,1.405,1.405,0,0,0,71.5,11.2);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer Sr", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Maria Sabale", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_IN_Contact, new cjs.Rectangle(-154.7,-106.2,366.7,212.5), null);


(lib.mc_GA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AkgJsQAPAAEwgUQCZgKCVgKIAQAdQATAcAPgFQANgEgMg9QgMg8ALgBQA8gDA8ADQgCgIAAgFQgFgyAWhTQAbhZAIgiQAQg4AWgvQgcgGgOgEQgKgDgKgmQgMgwgCgDQgFgMgZgMIgZgJQgZhQgLgVQgKgThCgfQgGgFgMgUQgCgDgYgpQgMgUg9grQhBgrgLgHQgOgIgqg+Igng8QhugygJgNQgEgGAUgmQABgDAfg4Qg/ANg7AEQhrAIg5AHQg6AFjsAYIDvL5IgRAcQgPAeAFAQQAFANALAiQAKAdABAQQABANgIBBQgFBAAMASQANATgBAFQAAADgEgCIgCAAQAJALAUAkQASAeALAAg");
	this.shape.setTransform(199.1588,1.4512,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AFdJgIgQgdIkuAUQkwAUgPAAQgLAAgSgeQgUgkgIgLIACAAQAAABABAAQABAAAAAAQABAAAAgBQAAAAAAgBQACgFgOgTQgMgSAFhAQAJhBgCgNQgBgQgJgdIgRgvQgFgQAPgeIARgcIjur5QDrgYA6gFQA5gHBrgIQA7gEBAgNIghA7QgUAmAFAGQAIANBvAyIAmA8QAqA+APAIIBLAyQA9ArAMAUIAaAsQAMAUAHAFQBBAfAKATQAMAVAYBQIAZAJQAaAMAFAMIANAzQALAmAJADIAqAKQgWAvgPA4QgJAigaBZQgWBTAEAyQAAAFACAIQg8gDg7ADQgMABAMA8QANA9gNAEIgGABQgNAAgQgYg");
	this.shape_1.setTransform(199.1361,1.5245,0.7407,0.7407);

	this.instance = new lib.RS_agp_logo_horizontal_rgbsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2,-63.05,0.3628,0.3628,0,0,0,286.9,75.4);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Laura Livingston", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_GA_Contact, new cjs.Rectangle(-154.7,-106.2,398.7,212.5), null);


(lib.mc_CO_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// State_Selected_Blue
	this.instance = new lib.Image_6();
	this.instance.parent = this;
	this.instance.setTransform(-283.9,-52.65,0.1757,0.1757);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AGboFQhCAHnAg2Qnyg8gjgCIimRFIYKCfIA8xGg");
	this.shape.setTransform(-220.7358,-0.3339,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AsiHTIClxEQAkACHxA7QHBA2BBgHIGJAxIg8RGg");
	this.shape_1.setTransform(-220.7179,-0.3436,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_1 = new lib.CCHA_Logo_RGBsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,-63.25,0.889,0.889,0,0,0,63.1,36);

	this.instance_2 = new lib.Envelope_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_3 = new lib.Phone_Greysvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Felicia Woods", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_CO_Contact, new cjs.Rectangle(-283.9,-106.2,438.7,212.5), null);


(lib.mc_CA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AB20OIgEgCIsojjQgCAOAAAHIgYCRQgeCVggAVQgpAcgOAYQgRAdAHAxQAEAXAcBYQAXBHgDAgQgBAZgYBZQgWBPAFAVQAEANArBEQAmA9ABAYQABAVACAtQAIAnAlAZQAlAWAJgfIACgjIAlAFQAlAHAAALQAAAJggAhQghAhAAAHQAAAPg0AQQgHA0ABA1QAAAnAkAkQASASAWAUQAHAOgLArQgNAxgXAXQAZCMBQB0QAcAoASBEQANA0ACAqQABAOgZA6QgTAtAUARQANAMCDBSQB8BMAPAXQAeApAlAhIBMAAIACBaIAnAQQAqAWARAfIBcCsIAGCbIH0BKQAJgTASgEQAMgCAjgBQAdgFAAgeQAAgegagRIgagKIAAhWIAYgGQAcgMAWgeQAjgqgKg3QAagLAZgPQAygeAAgUQAAgPgrhGQgthHgCgQQgCgcARglIt+04g");
	this.shape.setTransform(-176.6386,103.9808,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("ABjWrIgGibIhcisQgRgggqgVIgngRIgChaIhMAAQglgggegpQgPgXh8hMQiDhSgNgNQgUgQATguQAZg6gBgOQgCgpgNg1QgShDgcgoQhQh0gZiMQAXgXANgxQALgrgHgPQgWgTgSgSQgkgkAAgnQgBg1AHg0QA0gQAAgQQAAgHAhggQAgghAAgKQAAgKglgIIglgEIgCAjQgJAfglgWQglgZgIgnIgDhDQgBgXgmg9QgrhEgEgNQgFgVAWhPQAYhaABgYQADgggXhHQgchYgEgYQgHgwARgdQAOgYApgcQAggWAeiUIAYiRIACgWIMoDkIAEACIjtM0IN+U5QgRAlACAcQACAQAtBHQArBFAAAPQAAAUgyAfQgZAPgaAKQAKA3gjAqQgWAegcANIgYAGIAABVIAaALQAaARAAAdQAAAegdAGQgjABgMACQgSAEgJASg");
	this.shape_1.setTransform(-176.6386,104.0126,0.7407,0.7407);

	this.instance = new lib.AnthemBCCMYKblueblackvectorsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.75,-64.3,1.6496,1.6496,0,0,0,53.4,15.4);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Michelle Beck", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_CA_Contact, new cjs.Rectangle(-240.6,-106.2,395.4,324.2), null);


(lib.mc_AR_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SummitCClogo_FullColor_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.85,-62.3,0.6924,0.6924,0,0,0,143.1,32.7);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Felicia Woods", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_1.setTransform(2,2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_2.setTransform(2,2.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_5.setTransform(2,2.025);

	this.instance_3 = new lib.Image_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(152.15,-72.55,0.176,0.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.8).p("AGRllIgDAAIAAADIABAAIACgDIAOgZQATggAPgQQAQgQgOgYIgRgVIvJAXIARMXIASAEQAUAHARAKQA2AggEA6QAAAPgCAsIKZAAQgEgpAChJIAChAQACgWAFgZQAKg0AMgVQATgiAwhDQAKgpATgrIBMh/QAmhlAKgqQAFgQAQgjQANgeACgQg");
	this.shape_6.setTransform(197.7763,-28.8616,0.7407,0.7407);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A72BA").s().p("AmfHtIACg8QAFg5g2ghQgSgJgUgHIgRgEIgRsYIPJgXIAQAWQAOAYgQAPQgPARgTAgIgOAYIgCAAIAAAEIABAAIABgEICHAAQgCARgOAeQgQAjgEAPQgLArgmBkIhMB/QgTArgJAqQgxBCgTAjQgLAVgKA0QgFAZgDAVIgCBBQgCBJAEApgAGPliIAAgEIACAAIgBAEgAGRlmg");
	this.shape_7.setTransform(197.7565,-28.8595,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_AR_Contact, new cjs.Rectangle(-154.7,-106.2,398,212.5), null);


(lib.Empire_25AnthemTag_Logo_CMYK_blk_vectorsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Empire_25AnthemTag_Logo_CMYK_blk_vector_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072BC").s().p("AhMA1QgwhVAVhlQBKAdBJgMQAlgHAWgLQAUBOghBMQgeBIg9AsQgqgZghg6gAgEBNIABAoQAAADADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQACgDABghQAAgGgGgCIgDAAIgBADgAgQBgIAAAFQABAGAEAEQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgDIgBgEIADgEIAAgKIAAAAQgFAAgDAHgAAIBcQAAAEAIgHQAIgIgEgHQgDgHgQgGQgMgHABgDIACgBIAAgPQgFgBgFAGQgFAEAAADQgDAIAIAGIAYAOQACAKAAgDgAADAcIgEABQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIgBAJQAAAKACABQABACADADIAGABQADAAgCgdIgCgBIgDAAgAANAcQADACgFAEIAAAOQgBADAHgEQAHgEAEgDQAHgKgFgIIgGgGQgEgCgMgCQgLgBgFgCIgDgCIgEgKIgDgKQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgFAFQgCADAAAEQgCAHAEAHQAGAHADABQADACAGACQADABAIAAIADgBQAFAAACACgAALAIQAAgYgBgIIgBgCIgCgBIgIAAIgIAAIgCAEIgFACQgBAFAGAHIACAIIADAGIAFACIAMABIAAAAgAgmhfIgKAHQgHAHgDALQgCANARAOQAIAHAFACQAFADAUAAQARABACACIAEADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgDACIAAAXQATgFAGgPQAHgRgRgMQgGgDgYgDQgWgDgJgJQgEgEADgDQADgCAEACIAPAAIAEgBIAEgCQABgDgIAAIgLgDIANABQAHAAACgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgHgHIgIgEQgFgCgIAAQgHAAgCABgAgChIIgEACIgDACIgCABIAAANIAYACIAAgDIAcgYQABgFgFgDQgGgDgDACQgJALgBgBIgCAAIgBgCIABgHQAAgHgBgBIgRgIIgDAAQAAAAgBAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQAAAAABAAQAKAMAAABIgDABQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQABADAIADIAAABIgJgDg");
	this.shape.setTransform(205.0137,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0060A9").s().p("AgCAAIAFAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgDgCgCAAg");
	this.shape_1.setTransform(203.475,12.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0072BC").s().p("Ag4CRQglgngagyQhEiDA+hvQBNAtBfgQQAxgIAhgSQA2Brg4B7QgwBthNAfQgYgHgigjgAhYA6QAtBOAtARQBGglAkhaQAlhcgchTQgXANgpAHQhQANhVghQgiBsA6Bjg");
	this.shape_2.setTransform(204.7712,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0072BC").s().p("AgjAWIAkg1IAkA3QgLAIgZAAQgaAAgKgKg");
	this.shape_3.setTransform(165.45,26.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0072BC").s().p("AAIAIQgBgDgFgBQgEgBgEAGIg5BSIgGgFIAuhMIAKgPQADgHAAgIQgBgMgdgDIg+gEIADgFIBXAAQANgDgCgLQgGgNgBgHQgBgEADgEQADgFAFAAQAKgBADAGQADAFgBAFIgIASQgDAOAQABIBPAAIACAEIg7AEQgeADAAALQAAAIADAHIAIAPIAsBOIgGAFg");
	this.shape_4.setTransform(165.275,20.5683);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0072BC").s().p("AgcgbIgBgEQgBgFAFAAIA0gDQAJAdgOAbQgHAOgIAJg");
	this.shape_5.setTransform(171.6367,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0072BC").s().p("AgWATQgNgaAJgfIA0AGQAHgBgEAKIglA+QgIgIgGgMg");
	this.shape_6.setTransform(159.4625,22.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0072BC").s().p("AgWAOQAHgMgEgOQAHgBAQAKQARAJACAIg");
	this.shape_7.setTransform(170.1,13.3488);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0072BC").s().p("AgXAOQADgIASgJQAPgKAGABQgEANAJANg");
	this.shape_8.setTransform(161.15,13.3488);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0072BC").s().p("AhSC5IAAhnIhrAAIAAioIBrAAIAAhiICpAAIAABiIBmAAIAACoIhmAAIAABngAhHhIQgfAfAAAqQAAArAfAfQAfAfAqAAQArAAAfgfQAfgfAAgrQAAgqgfgfQgfgfgrAAQgqAAgfAfg");
	this.shape_9.setTransform(165.4,20.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0072BC").s().p("AAEAIIAAgEQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgEAAIAAAHIgDAAIAAgPIAHAAQAFAAAAAEQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAADIABACgAgFAAIAFAAQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIgFAAg");
	this.shape_10.setTransform(212.475,37.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0072BC").ss(0.2,0,0,4).p("AAAgOQgEAAgFAEQgFAFAAAFQAAAFAFAFQAFAFAEAAQAHAAAEgFQAEgEAAgGQAAgFgEgFQgFgEgGAAg");
	this.shape_11.setTransform(212.35,37.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0072BC").s().p("AgGAJIAAgRIAHAAQAFAAAAAEQAAABAAAAQgBABAAABQAAAAAAAAQgBABAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAAABAAAAIAAADIABACIgDAAIAAgEQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgEAAIAAAJgAgFAAIAFAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIgFAAg");
	this.shape_12.setTransform(177.275,37.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0072BC").ss(0.2,0,0,4).p("AAAgOQgGAAgEAEQgEAFAAAFQAAAGAEAFQAFAEAFAAQAGAAAEgFQAFgEAAgGQAAgFgFgFQgEgEgGAAg");
	this.shape_13.setTransform(177.3,37.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AhbBmQgcgnAMhHQALg/AgggQAigkA8ABQArgBAWAZQAXAagJAyIgCAJIimAAIgCALQgIAwAXAoQAaAvA2AAQAJAAANgCIAUgEIgEATQggAJgoABQg/gBgcglgAgjhaQgNAQgHAZIB0AAIABgGQAFgZgLgSQgMgSgZAAQghAAgVAag");
	this.shape_14.setTransform(128.1718,25.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AhWCIIAljRQAEgXgOgJQgIgFgTgBIACgKIBZgOIgLBDIABAAQAOgdAOgNQAYgZAjAAIAFABIgIAwQgJgEgJAAQg9AAgSBaIgYCIg");
	this.shape_15.setTransform(110.85,25.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("Ag5DEIAljSQAEgWgOgJQgIgEgSgCIACgKIBYgOIgvEPgAgBiMQgIgJADgOQACgNAKgJQAMgKANAAQANAAAIAKQAIAJgDANQgCAOgMAKQgLAJgNAAQgOAAgGgKg");
	this.shape_16.setTransform(97.2659,19.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AiFDFIA6lNQAFgXgPgIQgGgDgWgDIACgKIBcgNIgIArIABAAQAJgPARgNQAYgPAZAAQA1AAAUAnQATAkgLA/QgMA9gdAkQgiAqg0AAQgaAAgSgPQgPgNgEgRIgBAAIgcChgAgLiRQgWAcgGAiIgHApQgGAmAJAbQALAkAgAAQAjAAAXgqQAQgcAIguQAIgrgHgeQgJgtgjABQgbAAgXAdg");
	this.shape_17.setTransform(77.2767,31.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("ABwCIIAeirQAGgogCgMQgEgUgagBQgXABgdAhQgdAigHAnIgYCIIgrAAIAhi3QAFgfgDgLQgFgTgYAAQgbAAgdAlQgbAigGAlIgYCHIgsAAIAjjQQAEgWgOgIQgIgFgTgCIACgKIBagOIgMBFIABAAQALgWAWgUQAfgbAfAAQAlAAANATQALAQgGAiIABAAQArhFA1AAQAtAAAJAcQAGASgIAtIggC0g");
	this.shape_18.setTransform(45.562,25.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AiLDAIA5lDQAFgZgJgKQgJgKgkgFIACgKIENAAIgJBGIgSAAQAAgcgFgHQgHgMggAAIg9AAQgWAAgHAHQgHAGgFAYIgUBxIBIAAQAhAAAOgOQAJgJAIgZIAOAAIgVB1IgNAAQAAgdgGgIQgIgMghAAIhIAAIgYCGQgFAYAHAFQAHAEAgAAIA9AAQAbAAAMgMQAIgIANgjIASAAIgSBOg");
	this.shape_19.setTransform(14,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AggApIAPhRIAQAAQAPABAKAJQAJAKAAAQQAAAUgNANQgNAMgUAAgAgSAfIAHAAQAOAAAJgKQAJgKAAgQQAAgLgGgGQgIgHgJAAIgGAAg");
	this.shape_20.setTransform(201.55,51.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgVApIAPhRIALAAIgMBGIAdAAIgBALg");
	this.shape_21.setTransform(195.025,51.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgcApIAQhRIApAAIgBALIgeAAIgEAXIATAAIgCAJIgUAAIgEAcIAcAAIgBAKg");
	this.shape_22.setTransform(189.8,51.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgMApIANhRIAMAAIgNBRg");
	this.shape_23.setTransform(184.9,51.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AAKApIAHgmIggAAIgGAmIgOAAIAPhRIALAAIgGAiIAgAAIAHgiIALAAIgOBRg");
	this.shape_24.setTransform(179.15,51.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgiAmQACgBAJgHQAGAMANAAQAIAAAFgGQAGgFAAgKQAAgLgKgFIgHgEQgKgFgEgFQgEgGAAgJQAAgOAJgIQAKgIANACQANAAAKAHIgHANQgJgJgKAAQgHAAgEAFQgGAEAAAIQAAAIAKAGIAIAEQASAJAAARQAAAPgKAJQgKAKgPAAQgTAAgIgQg");
	this.shape_25.setTransform(171.375,50.6382);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgbApIAOhRIApAAIAAALIgeAAIgFAXIATAAIgCAJIgSAAIgGAcIAeAAIgDAKg");
	this.shape_26.setTransform(164.1,51.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgiAPIABgKIAIguIAMAAIgJAvIgBAJQgBAQARAAQARAAAEgZIAJgvIAMAAIgJAxQgFAigfAAQgZAAABgbg");
	this.shape_27.setTransform(157.5,51.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgVApIAOhRIAMAAIgMBGIAdAAIgCALg");
	this.shape_28.setTransform(150.625,51.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgiA1IAShnQATAAAAgCQAPABAJAGQAIAGAAALQAAAQgTAHIgEADIAEABQAPADAAAQQAAAQgLAJQgLAKgSAAgAgVApIAAACIALAAQAbAAAAgZQAAgQgUgBIgLAAgAgLgJIAAACIAKAAQAYABAAgUQAAgPgUAAIgJAAg");
	this.shape_29.setTransform(144.325,50.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AgbAdIAJgHQAEAKAMAAQAEAAAFgEQADgFAAgGQABgIgIgDIgEgDQgOgGgBgOQAAgKAIgHQAHgHALAAQAMAAAGAHIgHALQgHgHgHgBQgGABgDADQgEADAAAGQABAFAGAFIAGADQAOAGAAANQAAANgHAHQgJAIgLAAQgQAAgFgNg");
	this.shape_30.setTransform(131.45,51.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgbAdIAKgHQAFAKAKAAQAFAAAEgEQAFgFAAgGQAAgIgIgDIgFgDQgOgGAAgOQAAgKAHgHQAIgHAKAAQALAAAHAHIgGALQgIgHgHgBQgGABgCADQgEADAAAGQAAAFAHAFIAGADQAOAGAAANQAAANgIAHQgIAIgLAAQgQAAgGgNg");
	this.shape_31.setTransform(125.45,51.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgcAhQgKgLABgPQgBgOAJgNQAOgWAWAAQAKABAJAGQAMAMAAARQgBAQgJALQgPAWgUAAQgNgBgIgJgAgPgUQgJANgBAOQABALAFAHQAGAGAIABQAMAAAIgMQALgNAAgOQAAgLgHgGQgFgHgJAAQgLAAgJALg");
	this.shape_32.setTransform(118.85,51.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AAHApIAFgaQAAgKgPAAIgJAAIgGAkIgLAAIAPhRIAQAAQAdACAAATQgBAQgPADQAJAEAAALIgBAIIgDASgAgKgEIAHAAQAVAAAAgPQAAgLgSAAIgGAAg");
	this.shape_33.setTransform(111.05,51.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgeAqQgLgMAAgTQAAghAbgVQAPgLARABQAMAAALAIIgFAMQgMgHgIAAQgRAAgNAPQgMAQAAAUQAAAOAHAIQAHAIAMAAQAMAAALgIQACAEABAIQgMAJgRAAQgQAAgLgMg");
	this.shape_34.setTransform(103.8,50.5663);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgbApIAPhRIAoAAIAAALIgeAAIgEAXIATAAIgCAJIgTAAIgFAcIAdAAIgCAKg");
	this.shape_35.setTransform(96,51.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgiAPIAAgKIAIguIAMAAIgJAvIgBAJQAAAQAQAAQASAAAEgZIAJgvIAMAAIgIAxQgGAigeAAQgZAAAAgbg");
	this.shape_36.setTransform(89.325,51.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgVApIAPhRIAKAAIgLBGIAcAAIAAALg");
	this.shape_37.setTransform(82.45,51.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgjA1IAShnQAUAAAAgCQAPABAJAGQAJAGgBALQABAQgUAHIgDADIADABQAPADABAQQgBAQgKAJQgLAKgTAAgAgUApIAAACIAKAAQAbAAAAgZQAAgQgTgBIgLAAgAgLgJIAAACIAJAAQAZABAAgUQgBgPgSAAIgJAAg");
	this.shape_38.setTransform(76.4,50.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgpCIQgegfgYgvQg+h3AhhZIAHgQQBQAeA3ACQBAACAsgiQAeBog0B3QgWAwgbAfQgbAfgVAAIgBAAQgSAAgdgfg");
	this.shape_39.setTransform(204.3973,21.0254);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAuABAgAgQAfAfAAAsQAAAtggAgQggAggtAAQgsAAggggg");
	this.shape_40.setTransform(165.675,20.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0072BC").s().p("AxIATIAAglMAiRAAAIgOAlg");
	this.shape_41.setTransform(109.85,70.325);

	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(54.7,90.6,1,1,0,0,0,53.5,6.2);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.3,97);


(lib.DCHP_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DCHP_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005DA9").s().p("AARArIgmhHIAABHIgLAAIAAhVIARAAIAlBEIAAhEIALAAIAABVg");
	this.shape.setTransform(102.95,58.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005DA9").s().p("AAeArIgJgVIgqAAIgJAVIgMAAIAkhVIAMAAIAmBVgAgQAMIAiAAIgSgrg");
	this.shape_1.setTransform(92.45,58.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005DA9").s().p("AgXAsIAAhXIALAAIAABMIAkAAIAAALg");
	this.shape_2.setTransform(83.7,58.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005DA9").s().p("AgaArIAAhVIAVAAQAhAAgBAaQAAANgJAGQgIAFgMAAIgNAAIAAAjgAgQgCIAMAAQAGABAFgEQAGgEAAgHQAAgIgGgEQgGgDgGAAIgLAAg");
	this.shape_3.setTransform(75.65,58.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005DA9").s().p("AAVArIAAgnIgpAAIAAAnIgMAAIAAhVIAMAAIAAAkIApAAIAAgkIAMAAIAABVg");
	this.shape_4.setTransform(60.65,58.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005DA9").s().p("AgFArIAAhKIgcAAIAAgLIBDAAIAAALIgbAAIAABKg");
	this.shape_5.setTransform(51.25,58.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005DA9").s().p("AgXAsIAAhXIAMAAIAABMIAjAAIAAALg");
	this.shape_6.setTransform(44.1,58.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005DA9").s().p("AAeArIgJgVIgqAAIgJAVIgNAAIAmhVIAMAAIAlBVgAgQAMIAiAAIgSgrg");
	this.shape_7.setTransform(34.7,58.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005DA9").s().p("AgYArIAAhVIAxAAIAAALIgjAAIAAAZIAgAAIAAAKIggAAIAAAcIAjAAIAAALg");
	this.shape_8.setTransform(25.325,58.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005DA9").s().p("AAWArIAAgnIgqAAIAAAnIgMAAIAAhVIAMAAIAAAkIAqAAIAAgkIALAAIAABVg");
	this.shape_9.setTransform(15.65,58.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBAF33").s().p("AgdgWQgsAAgiAMIAagMQAhgMAqgBQA1gCAkAlQASARAGATQgxg7hXABg");
	this.shape_10.setTransform(26.45,24.2198);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBAF33").s().p("AgJgcQAygkA1gPQABAQADAOQheAYg8A2QgeAcgMAXQAXg+BCgug");
	this.shape_11.setTransform(48.75,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#005DA9").s().p("AgNBHIAAiNIAbAAIAACNg");
	this.shape_12.setTransform(29.375,33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#005DA9").s().p("AgNBHIAAiNIAbAAIAACNg");
	this.shape_13.setTransform(24.7,33.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005DA9").s().p("AgkAnQgOgOAAgZQAAgXAOgPQAPgPAWAAQAZAAAOASQAMASgBAYIhJAAQABAaAXgBQAIAAAGgEQAGgEACgFIAZAAQgMAjgkAAQgXAAgOgPgAgQgXQgFAFAAAIIAsAAQgEgWgSABQgLgBgGAJg");
	this.shape_14.setTransform(16.758,35.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#005DA9").s().p("AgnA3QgMgPAAgWQAAgWAMgOQAMgRAWABQAVgBAIAQIAAg0IAcAAIAACNIgbAAIAAgMQgLAOgTABQgWgBgMgRgAgRgDQgGAIAAAOQAAAOAGAIQAHALALAAQAYAAAAghQACgggaAAQgLAAgHAKg");
	this.shape_15.setTransform(5.175,34.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#005DA9").s().p("AgfAuQgPgJAAgTIAbAAQAAAIAHAEQAFAFAIAAQASgBAAgNQABgFgJgFQgGgCgQgDQgRgFgGgCQgLgIAAgLQABgiAsABQASgBALAIQAOAIABASIgbAAQgCgOgQgBQgPAAgBAKQABAHAJADIAWAGQAPADAHAGQALAFgBANQAAATgOAJQgMAJgVgBQgSABgNgJg");
	this.shape_16.setTransform(115.35,35.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#005DA9").s().p("AgNASQANgEAAgPIgNAAIAAgeIAbAAIAAAeQAAANgIAJQgHAJgMACg");
	this.shape_17.setTransform(109.0015,29.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#005DA9").s().p("AAUA0IAAg5QAAgZgSAAQgVAAAAAdIAAA1IgcAAIAAhmIAaAAIAAAPIABAAQAKgQAUgBQAVAAAJAMQAIAJAAAVIAAA+g");
	this.shape_18.setTransform(101.8,35.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#005DA9").s().p("AgkAnQgOgOAAgZQAAgXAOgPQAPgPAWAAQAZAAAOASQAMASgBAYIhJAAQACAaAWgBQAIAAAGgEQAGgEACgFIAZAAQgMAjgkAAQgXAAgOgPgAgQgXQgFAFAAAIIAsAAQgEgWgSABQgLgBgGAJg");
	this.shape_19.setTransform(90.758,35.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#005DA9").s().p("AggA1IAAhmIAbAAIAAAUQAEgLAIgGQAJgFALgBIAGABIAAAaIgKgBQgbAAAAAhIAAAug");
	this.shape_20.setTransform(82.175,35.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#005DA9").s().p("AgnA3QgMgPAAgWQAAgWAMgOQAMgRAWABQAUgBAJAQIAAg0IAcAAIAACNIgbAAIAAgNQgKAQgUAAQgWgBgMgRgAgSgDQgFAIAAAOQAAAOAFAIQAHALALAAQAYAAAAghQAAgggYAAQgLAAgHAKg");
	this.shape_21.setTransform(71.9,34.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#005DA9").s().p("AgNBHIAAiNIAbAAIAACNg");
	this.shape_22.setTransform(63.875,33.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#005DA9").s().p("AgNBHIAAhmIAbAAIAABmgAgNgvIAAgXIAbAAIAAAXg");
	this.shape_23.setTransform(59.2,33.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#005DA9").s().p("AAUBHIAAg6QAAgYgSAAQgUAAAAAcIAAA2IgeAAIAAiNIAdAAIAAA2IABAAQAEgIAJgFQAHgEAJAAQAVAAAJAMQAHAJAAAUIAAA/g");
	this.shape_24.setTransform(51.15,33.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#005DA9").s().p("AgkAnQgOgOAAgXQAAgYAOgQQAOgPAXAAQATAAANAKQAPAKABATIgZAAIAAABQgDgRgSgBQgLABgHAKQgFAJAAANQAAANAFAIQAGAKALAAQAVABABgWIAbAAQgGArgsAAQgWAAgPgQg");
	this.shape_25.setTransform(39.875,35.65);

	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(70.95,11.4,1,1,0,0,0,11.4,11.3);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.9,11.4,1,1,0,0,0,11.4,11.4);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.05,11.5,1,1,0,0,0,11.5,11.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FBAF33").s().p("AhPBRQgiggAAgvQAAgvAggiQAhghAvAAQAugBAiAhQAhAgABAvQABAvghAiQghAhgvAAIgBAAQguAAghggg");
	this.shape_26.setTransform(70.9511,11.4761);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.1,62.5);


(lib.DC_Amerigroup_25Tag_Logo_CMYKsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DC_Amerigroup_25Tag_Logo_CMYK_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818285").s().p("AgWAaQgGgFAAgIQAAgGAFgFQAGgFATgCIAIgBIAAgFQAAgKgLAAQgLAAgCAKIgMAAQACgJAEgDQAGgHANAAQAXAAAAAUIAAAfIAHAAIAAAJIgTAAIAAgIQgKAJgJAAQgIAAgFgFgAAFABQgNACgEADQgDADAAADQAAAEADAEQADACAEAAQAFAAAFgEQAFgFAAgGIAAgHg");
	this.shape.setTransform(151.025,63.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#818285").s().p("AgLAoIAAgJIAGAAIAAgoIgGAAIAAgJIARAAIAAAxIAGAAIAAAJgAgGgbIAAgMIAMAAIAAAMg");
	this.shape_1.setTransform(146.3,62.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#818285").s().p("AgGAlIgFgFIAAAIIgSAAIAAgJIAGAAIAAg+IgGAAIAAgKIASAAIAAAgQAJgKAJAAQAKAAAHAJQAGAIAAANQAAAOgGAIQgHAJgLAAQgHAAgFgFgAgLALQAAAVAPAAQAGAAAEgGQAEgFAAgKQAAgUgPAAQgOAAAAAUg");
	this.shape_2.setTransform(141.375,62.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#818285").s().p("AAaAeIAAgpQAAgJgGAAQgGAAgEAGQgEAFAAAEIAAAaIAHAAIAAAJIgRAAIAAgpQAAgJgHAAQgGAAgEAHQgEAGAAAFIAAAXIAIAAIAAAJIgbAAIAAgJIAIAAIAAgnIgIAAIAAgKIATAAIAAAKQAIgLAKAAQAJAAAEALQAHgLAKAAQAHAAAEAEQAEAFAAAHIAAAiIAHAAIAAAJg");
	this.shape_3.setTransform(133.325,63.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#818285").s().p("AgTAZQgEgFAAgIIAAggIgHAAIAAgJIASAAIAAAnQABALAJAAQAGAAAEgFQAEgFAAgGIAAgZIgHAAIAAgJIATAAIAAAxIAHAAIAAAJIgTAAIAAgJQgDAEgHAEIgIACQgIAAgFgFg");
	this.shape_4.setTransform(125.2,63.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#818285").s().p("AgMApIAAgJIAHAAIAAg/IgHAAIAAgJIARAAIAABIIAIAAIAAAJg");
	this.shape_5.setTransform(120.5,62.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#818285").s().p("AgTAWQgIgJAAgNQAAgNAIgIQAIgJALAAQANAAAIAJQAHAIAAANQAAAOgIAIQgIAJgMAAQgMAAgHgJgAgOABQAAAJADAFQAFAHAGAAQAHAAAFgHQAEgFAAgKQAAgUgQAAQgOAAAAAVg");
	this.shape_6.setTransform(115.9,63.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#818285").s().p("AgYAeQgJgLAAgSQAAgRAJgMQAKgLAOAAQAKAAAHAFIAGAHIAAgLIAKAAIAAAbIgKAAQgBgGgDgEQgHgIgKAAQgJAAgGAJQgGAIAAANQAAANAGAIQAGAHAJAAQALAAAGgKIADgGIAMAAQgDAKgEAGQgKALgQAAQgPAAgKgKg");
	this.shape_7.setTransform(109.075,62.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#818285").s().p("AgNAqIAAgJIAHAAIAAgoIgJAAIAAgKIAJAAIAAgMQAAgLAOAAIAHAAIABAAIAAAJIgGAAQgFAAgBAFIAAAJIALAAIAAAKIgLAAIAAAoIAIAAIAAAJg");
	this.shape_8.setTransform(100.9,62.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#818285").s().p("AgTAWQgIgJAAgNQAAgNAIgIQAIgJALAAQANAAAHAJQAIAIAAANQAAAOgIAIQgHAJgNAAQgLAAgIgJgAgOABQAAAJADAFQAFAHAGAAQAHAAAEgHQAEgFAAgKQAAgUgPAAQgOAAAAAVg");
	this.shape_9.setTransform(96.05,63.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#818285").s().p("AgHAaIAAglIgJAAIAAgJIAJAAIAAgSIALAAIAAASIANAAIAAAJIgNAAIAAAhQAAAHAIAAIAFAAIAAAJIgJABQgPAAAAgNg");
	this.shape_10.setTransform(88.325,62.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#818285").s().p("AgSAWQgIgJAAgNQAAgNAIgIQAHgJAMAAQAIAAAHAIIAAgHIAJAAIAAAWIgJAAQgCgIgDgCQgEgDgGAAQgGAAgFAGQgDAFAAAJQAAAJADAGQAFAGAGAAQAIAAAEgHIACgFIAMAAQgCAHgEAGQgHAJgNAAQgMAAgHgJg");
	this.shape_11.setTransform(83.7,63.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#818285").s().p("AgMAoIAAgJIAHAAIAAgoIgHAAIAAgJIASAAIAAAxIAHAAIAAAJgAgGgbIAAgMIAMAAIAAAMg");
	this.shape_12.setTransform(79.125,62.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#818285").s().p("AgUAeIAAgJIAHAAIAAgnIgHAAIAAgKIATAAIAAANQAFgOALAAIAGABIAAALIgGgBQgJAAgFAHQgCAFAAAGIAAAVIAGAAIAAAJg");
	this.shape_13.setTransform(75.4,63.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#818285").s().p("AgHAaIAAglIgJAAIAAgJIAJAAIAAgSIAKAAIAAASIAOAAIAAAJIgOAAIAAAhQABAHAIAAIAFAAIAAAJIgJABQgPAAAAgNg");
	this.shape_14.setTransform(71.15,62.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#818285").s().p("AgJAaIgEgFIAAAJIgKAAIAAgUIAKAAIADAFQAGAHAHAAQAEAAAEgDQADgDAAgDQAAgEgEgDQgDgBgKgBQgUgDAAgOQAAgHAGgFQAFgFAIAAQAIAAAJAJIAAgIIAJAAIAAASIgJAAQgCgEgBgBQgFgFgHAAQgKgBAAAJQAAAFAMACQAPABAGAHQADAEAAAHQAAAHgGAGQgFAFgIAAQgHAAgHgFg");
	this.shape_15.setTransform(66.725,63.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#818285").s().p("AgMAoIAAgJIAHAAIAAgoIgHAAIAAgJIASAAIAAAxIAHAAIAAAJgAgGgbIAAgMIAMAAIAAAMg");
	this.shape_16.setTransform(62.525,62.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#818285").s().p("AgjAnIAAgKIAIAAIAAg5IgIAAIAAgKIAjAAQANAAAKAIQANALgBATQABASgLALQgKAKgRAAgAgOAdIALAAQAPAAAFgKQAFgHAAgMQgBgOgGgHQgHgHgJAAIgNAAg");
	this.shape_17.setTransform(56.95,62.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","#EFF7FC","#C4E2F3","#7FC0E4","#2192D1","#0082CA"],[0,0.075,0.22,0.42,0.667,0.749],0,0,0,0,0,23.5).s().p("AgeDhQgMgNAAgSIABgJIgDAJQgIAQgRAGQgRAGgQgIQgQgIgGgRQgGgRAIgQIAFgIIgHAHQgOALgSgCQgSgCgLgOQgLgOACgSQACgSAOgLIAIgFIgJADQgRAEgPgJQgPgKgEgRQgEgSAJgPQAKgPARgEIALgBIC7AAIh1iSIAAgBIgFgIQgIgQAGgRQAGgRAQgIQAQgHARAGQARAGAIAQIADAIIgBgJQAAgSAMgMQANgNARAAQASAAANANQAMAMAAASIgBAJIADgIQAIgQARgGQARgGAQAHQAQAIAGARQAGARgIAQIgFAIIAHgHQAOgLARACQASACALAOQAMAOgCASQgDASgOALIgHAFIAIgDQASgEAPAKQAPAJAEARQAEASgJAPQgKAPgRAEIgJAAIAJABQARAEAKAPQAJAPgEASQgEARgPAKQgPAJgSgEIgIgDIAIAFQAOAMACARQACASgMAOQgLAOgSACQgRACgOgLIgHgHIAFAIQAIAQgGARQgGARgQAIQgQAIgRgGQgRgGgIgQQgCgFgBgEIABAJQAAASgMANQgNAMgSAAQgRAAgNgMg");
	this.shape_18.setTransform(26.525,24.075);

	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(23.3,23.7,1,1,0,0,0,23.3,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0082CA").s().p("Ax/AUIAAgmMAj/AAAIgNAmg");
	this.shape_19.setTransform(168.425,45.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0082CA").s().p("AgPAQQgGgHAAgJQAAgIAHgHQAGgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAGgKAAQgIAAgHgGgAgMgMQgFAFAAAHQAAAIAFAFQAFAGAHAAQAIAAAGgGQAFgFAAgIQAAgHgFgFQgGgGgIAAQgHAAgFAGgAAIANIgHgMIgFAAIAAAMIgDAAIAAgZIAKAAQAJAAAAAHQAAAFgIABIAHAMgAgEgBIAEAAQAIAAAAgEQAAgEgGAAIgGAAg");
	this.shape_20.setTransform(46.875,44.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0082CA").s().p("AhyCSIAAgqIAUAAIAAjJIgUAAIAAgqIBJAAIAAAWQAcgcAjAAQApAAAaAgQAaAhAAAzQAAAwgbAfQgaAggpAAQgTAAgNgHQgOgHgQgQIAAA0IAVAAIAAAqgAgZhVQgJAJgDAMQgDALAAAWQAAAmAQAPQAPAQARgBQAXAAAOgSQAOgSAAgeQAAghgNgTQgOgTgYAAQgSAAgPAPg");
	this.shape_21.setTransform(273.9,22.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0082CA").s().p("AhLBcQgRgSAAgiIAAhsIgVAAIAAgqIBKAAIAACLQAAAmAgAAQASAAAPgRQAPgSAAgWIAAhOIgVAAIAAgqIBKAAIAACtIATAAIAAArIhHAAIAAgbQgUAQgKAGQgRAKgWAAQgfAAgRgTg");
	this.shape_22.setTransform(248.6,19.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0082CA").s().p("AhMBRQgeggAAgxQAAgwAeghQAfggAuAAQAtAAAeAhQAfAhABAvQAAAwgfAhQgfAhgtAAQguAAgfghgAglgwQgOATAAAdQAAAeAOATQAOASAXABQAXAAAOgTQAOgTAAgeQAAgdgOgTQgPgSgWAAQgXAAgOASg");
	this.shape_23.setTransform(224.2,19.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0082CA").s().p("AhLBvIAAgqIAVAAIAAiEIgVAAIAAgqIBKAAIAAAiQAJgVANgJQANgJASAAQAJAAAPADIAAAzQgMgDgOAAQgVAAgQANQgOANAAASIAABUIAZAAIAAAqg");
	this.shape_24.setTransform(204.875,19.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0082CA").s().p("AhTB+QgLgJgFgKQgFgJgFgUIA0AAQAFAPALAHQALAHAUAAQAVAAAPgLQAOgMAAgSIAAgiQgLANgLAHQgSAMgZAAQgmAAgZgeQgYgeAAgtQAAgvAZgdQAageAoAAQAPAAAOAHQAOAGASAPIAAgXIBJAAIAAAqIgUAAIAAClQAAAngbAWQgbAWgwAAQgxAAgZgWgAgrhVQgNARAAAcQAAAdAMAPQAMAQAXAAQAVAAAOgSQAPgQAAgcQAAgagOgRQgNgRgTAAQgYAAgOARg");
	this.shape_25.setTransform(182.75,22.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0082CA").s().p("AgtCVIAAgqIAVAAIAAiEIgUAAIAAgqIBIAAIAACuIASAAIAAAqgAgdhhIAAgzIA6AAIAAAzg");
	this.shape_26.setTransform(164.425,15.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0082CA").s().p("AhLBvIAAgqIAVAAIAAiEIgVAAIAAgqIBKAAIAAAiQAJgVANgJQANgJASAAQAJAAAPADIAAAzQgMgDgOAAQgVAAgQANQgOANAAASIAABUIAZAAIAAAqg");
	this.shape_27.setTransform(149.975,19.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0082CA").s().p("AhKBSQgeggAAgyQAAgwAeggQAeghAtAAQAaAAAVAMQAWALAOAVQANAUAFAYQADAOAAAWIibAAQAEAkAVAPQAMAIAOAAQAgAAANggIA4AAQgIAjgbAUQgbAVgoAAQgsAAgegggAgdg4QgNALgFAUIBdAAQgFgqgoAAQgRAAgNALg");
	this.shape_28.setTransform(129.25,19.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0082CA").s().p("ABcBvIAAiRQAAgOgGgIQgHgIgKAAQgRAAgNASQgNASAAAWIAABLIAVAAIAAAqIhJAAIAAiPQAAgggXAAQgSAAgNATQgNATABAZIAABGIAVAAIAAAqIhcAAIAAgqIASAAIAAiEIgTAAIAAgqIBIAAIAAAaQARgSANgGQANgHATAAQASAAALAIQALAHAKATQAfgiAjAAQAaAAAQARQARAQAAAcIAAB2IAUAAIAAAqg");
	this.shape_29.setTransform(99.875,19.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0082CA").s().p("ABFCPIgSg+IhjAAIgUA+IhCAAIAAgvIAXAAIBOjuIBEAAIBPDuIAUAAIAAAvgAgkAlIBKAAIglh9g");
	this.shape_30.setTransform(67.1,15.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.4,66.6);


(lib.ClearHealthAlliance_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Clear_Health_Alliance_RGB_svg
	this.instance = new lib.ClipGroup_0_1();
	this.instance.parent = this;
	this.instance.setTransform(212.3,198.3,1,1,0,0,0,18.6,18.7);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(212.3,198.2,1,1,0,0,0,18.6,18.7);

	this.instance_2 = new lib.ClipGroup_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.3,198.2,1,1,0,0,0,18.6,18.6);

	this.instance_3 = new lib.ClipGroup_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(209.3,197.05,1,1,0,0,0,21.6,20.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0ABFDC","#0ABCD9","#0CB2D1","#0FA1C3","#1289B0","#176A97","#1D4579","#1F376D"],[0,0.212,0.38,0.533,0.678,0.82,0.953,0.996],0,-3.5,0,40.2).s().p("AiCCEQg3g2AAhOQAAhMA3g2QA2g3BMAAQBNAAA2A3QA3A3AABLQAABOg3A2Qg2A2hNAAQhMAAg2g2g");
	this.shape.setTransform(212.3,198.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F376D").s().p("AgzBUIAihKIgrheIAlAAIAXA4IAXg4IAnAAIhNCog");
	this.shape_1.setTransform(303.5,196.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F376D").s().p("AgRBTIAAilIAjAAIAAClg");
	this.shape_2.setTransform(294.375,190.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F376D").s().p("Ag7BVIAAinIAiAAIAAAJQAHgFAIgEQAHgDAJAAQAZABAOAQQAPAQAAAbQAAAZgPAQQgOARgZgBQgIAAgIgCQgKgEgEgFIAABAgAgOg3IgKAFIAAAxIAJAEQAFACAFAAQAMAAAIgHQAIgKAAgNQAAgOgIgJQgHgJgMAAQgEAAgGACg");
	this.shape_3.setTransform(284.425,195.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F376D").s().p("AA7A6IAAhCQgBgMgDgGQgDgFgKAAQgIAAgGAEIgMANIAABHIgiAAIAAhCQAAgMgDgGQgEgFgJAAQgGAAgHAEQgHAFgFAIIAABHIgjAAIAAhvIAjAAIAAAOQAIgJAKgDQAHgEAOAAQAKAAAKAFQAJAGAEAKQAKgLAKgFQAMgFALAAQASAAALALQAKAMAAAVIAABHg");
	this.shape_4.setTransform(266.2,193.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F376D").s().p("AgRBUIAAhwIAjAAIAABwgAgMg0QgGgEAAgHQAAgIAGgGQAGgGAHAAQAHAAAGAFQAFAEAAAJQAAAIgFAGQgEAFgJAAQgHAAgGgGg");
	this.shape_5.setTransform(252.125,190.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F376D").s().p("AggBSQgPgBgPgKIAAglQASAMAOAFQAOAFALAAQAKAAAIgEQAGgFABgGQAAgFgFgFIgRgJQgigMgOgNQgOgNAAgUQAAgWASgNQASgOAcAAQALAAASAEQAIABAUAJIAAAhQgOgHgQgGQgMgEgMAAQgLAAgGAEQgHACAAAIQAAAFAHAFQAHAFAJADIAHADQAVAJAMAGQAMAGAEAKQAHALAAAOQgBAYgRANQgTANgeAAQgOAAgQgEg");
	this.shape_6.setTransform(241.75,190.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0ABFDC").s().p("AgYAcQgKgLAAgRQgBgRALgKQAKgLAPAAQAPAAAKALQAKAKAAARIAAADIg4AAQACAKAFAGQAHAGAIAAQAOAAAQgKIAAAPQgOAJgQAAQgQAAgKgLgAgUgGIAmAAQgCgSgQAAQgRAAgDASg");
	this.shape_7.setTransform(305.75,211.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0ABFDC").s().p("AgaAlIAAhJIAPAAIAAAQQAKgQALgBQAIAAAJAIIgIAMQgIgGgGAAQgLAAgFATIAAApg");
	this.shape_8.setTransform(298.6,211.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0ABFDC").s().p("AggAVQAAgQAYgHIAQgHIAAgCQAAgMgNAAQgNAAgNAKIAAgPQAMgKAQAAQAaAAAAAbIAAAdQAAAIADgBQACAAAFgDIAAAJQgHAGgJAAQgHAAgCgGQgIAHgLABQgVAAAAgSgAgRASQAAAJALAAQAHAAAHgGIAAgVQgZAHAAALg");
	this.shape_9.setTransform(290.625,211.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0ABFDC").s().p("AgSAbQgMgLAAgQQAAgPAMgLQALgLAQAAQAMAAAJAFIAAAQQgKgGgKAAQgKAAgHAHQgIAHAAAJQAAAKAHAHQAHAHALAAQAKAAALgFIAAAOQgKAEgLAAQgRAAgLgLg");
	this.shape_10.setTransform(282.35,211.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0ABFDC").s().p("AAQA4IAAgtQAAgQgPAAQgJAAgHAIIAAA1IgPAAIAAhvIAOAAIAAAvQAJgKAMAAQAMAAAHAHQAHAHAAALIAAAxg");
	this.shape_11.setTransform(274.425,209.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0ABFDC").s().p("AgHAnQgFgGAAgPIAAgiIgNAAIAAgBIAZgcIACAAIAAARIAXAAIAAAOIgXAAIAAAgQAAAJACADQACADAHAAQAHAAAGgDIAAANQgIADgIAAQgMAAgFgHg");
	this.shape_12.setTransform(266.8,211.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0ABFDC").s().p("AgGA4IAAhvIAOAAIAABvg");
	this.shape_13.setTransform(261.65,209.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0ABFDC").s().p("AgbAhQgFgEgBgIQAAgQAZgHIAQgHIAAgCQAAgMgNAAQgOAAgMAKIAAgPQAMgKAPAAQAbAAAAAbIAAAdQAAAIADgBQABAAAHgDIAAAJQgIAGgIAAQgIAAgBgGQgJAHgLABQgKgBgGgFgAgQASQAAAJALAAQAHAAAHgGIAAgVQgZAHAAALg");
	this.shape_14.setTransform(255.9,211.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0ABFDC").s().p("AgYAcQgLgLABgRQAAgRAKgKQAJgLAQAAQAPAAAKALQAKAKgBARIAAADIg2AAQACAKAFAGQAHAGAJAAQAOAAAPgKIAAAPQgQAJgOAAQgQAAgLgLgAgUgGIAnAAQgCgSgRAAQgRAAgDASg");
	this.shape_15.setTransform(247.05,211.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0ABFDC").s().p("AARA4IAAgtQgBgQgPAAQgJAAgIAIIAAA1IgOAAIAAhvIANAAIAAAvQAKgKANAAQALAAAIAHQAGAHABALIAAAxg");
	this.shape_16.setTransform(238.65,209.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7D858B").s().p("AgaBdIAPg0IgtiFIAZAAIAfBsIAihsIAXAAIg8C5g");
	this.shape_17.setTransform(179.85,202.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7D858B").s().p("AgZBOIgBAAIAAAQIgVAAIAAi+IAWAAIAABHIABAAQAKgQASAAQAdAAAJAYQAGANAAAiQAAAogOAPQgJAMgUAAQgTAAgLgTgAgaAVIADAkQAFAVARAAQARAAAFgRQAEgKAAgWQAAgdgFgKQgFgOgQAAQgZABAAAsg");
	this.shape_18.setTransform(167.575,196.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7D858B").s().p("AgiBWQgOgQAAgoQABghAFgOQAKgYAcAAQASAAALAQIABAAIAAhHIAWAAIAAC+IgVAAIAAgQIgBAAQgLATgUAAQgTAAgKgLgAgUgKQgFALAAAcQAAAXADAJQAHARAQAAQAQAAAEgSQADgLABgcQACgRgFgLQgFgQgQAAQgPAAgGANg");
	this.shape_19.setTransform(147.9,196.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7D858B").s().p("AghA6QgQgPAAgpQAAgiAJgQQALgVAfAAQAbAAALAQQAKAOAAAjIAAAKIhKAAIAAABQAAAaAHALQAGAIANAAQALAAAGgHQAGgIAAgKIAYAAQAAArgvAAQgYAAgLgMgAgQgsQgIAKAAAaIAzAAQAAgbgHgKQgGgHgOAAQgKgBgGAJg");
	this.shape_20.setTransform(134.825,199.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7D858B").s().p("AgfBEIAAiEIAWAAIAAAUQAHgOAJgFQAIgEARAAIAAAXQgEgCgIAAQgdAAAAAlIAABNg");
	this.shape_21.setTransform(124.55,199.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7D858B").s().p("AgiA6QgPgPAAgpQAAgiAJgQQALgVAeAAQAcAAALAQQAKAOAAAjIAAAKIhKAAIAAABQAAAaAHALQAGAIAMAAQALAAAHgHQAGgIAAgKIAXAAQAAArgvAAQgXAAgMgMgAgQgsQgHAKAAAaIAzAAQAAgbgIgKQgGgHgNAAQgLgBgGAJg");
	this.shape_22.setTransform(112.725,199.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7D858B").s().p("AgNBgIAAh0IgVAAIAAgQIAWAAIAAgbQAAggAlAAIAKABIAAAQQgagCAAAVIAAAXIAaAAIAAAQIgaAAIAAB0g");
	this.shape_23.setTransform(102.35,196.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7D858B").s().p("AgOBgIAAh0IgTAAIAAgQIAUAAIAAgbQABggAkAAIALABIAAAQQgbgCAAAVIAAAXIAbAAIAAAQIgbAAIAAB0g");
	this.shape_24.setTransform(95.15,196.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7D858B").s().p("AgsBTQgPgSAAgnIAAg+QAAgdAPgRQAQgRAcAAQA8AAAAA/IAAA+QAAAngPASQgPARgeAAQgdAAgPgRgAghglIAABBQAAAdAJAMQAIALARAAQASgBAJgKQAIgMAAgdIAAhBQAAgZgPgKQgIgGgMAAQgiAAAAApg");
	this.shape_25.setTransform(83.25,196.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E21936").s().p("ACFCBQg0gGgigKQiKgnhmiDQAmggAdgoQBjCDBtAjIAmALQArALAgACIgtBEIgRAAg");
	this.shape_26.setTransform(131.55,99.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E21936").s().p("Ag6gCQAvgtAUgaIAPAZIAjAyQgbAjgmAlQgegngWglg");
	this.shape_27.setTransform(112.925,86.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C31230").s().p("AiXAtQB+gtB9h0QAaArAaAiQhSBGh2AyIhnAjg");
	this.shape_28.setTransform(95.875,99.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E21936").s().p("AAJGlQhtjEgUkOQgJh1AchbQAkh1BZgnQAjgQBAgDQgHAHgEAhIgCAgQgUABgbASIgXARQgXAVgSAgQgRAfgJAgQgOA7AFBPQAEAvAPBZQAaCfBLCBQgTAXgzAwg");
	this.shape_29.setTransform(105.489,42.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C31230").s().p("AhwFeQgBgBAHgNIAJgNIARgkIAQgkQBNi2AJjJQADhAgNgxQgMgpgPgaQgKgPgSgLQgSgLgTgCQgBgPACgPQADggAJgJIAfADQAkAJAdAWQBfBJgMDEQgJCcgnCGQgSA9glBFQgQAhg1BYIg0hIg");
	this.shape_30.setTransform(126.3364,42.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7D858B").s().p("ADEH1IlOnFIAyAAIA5gBQAkgCATgDQAUgCAdgIQBJgXAug2QAtg3AAhOQgBg5gdg3Qgcg2gygbQgugZgygHQgygFgwAAIiuAAIAAONIhiAAIAAvpIE7ABIA+AFQApAFAWAGQAiAJAWAKQBWArAvBJQAuBMABBeQAAA/gYA3QgXA4goAmQgqArgzAWQg1AZhAAFIEaF0g");
	this.shape_31.setTransform(353.05,54.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7D858B").s().p("AEnH2IjqlTIl3AAIAAFTIhlAAIAAvrICIAAIK3PrgAk6BKIE6AAIk5nMIgBAAg");
	this.shape_32.setTransform(269.075,54.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7D858B").s().p("AkQH1IAAvpIIhAAIAABbIm8AAIAAFpIECAAIAABZIkCAAIAAFyIG8AAIAABag");
	this.shape_33.setTransform(187.25,54.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7D858B").s().p("ACbH2QhtAAhcgnQhfgog/hDQhBhDglhdQgkhbAAhrQAAhsAmhcQAoheBChBQBDhCBdglQBZglBoAAIC7AAIAABaIi2AAQhTgChOAgQhJAeg3A7Qg2A3gfBLQgeBOAABSQAABaAeBMQAhBMA1A3QA2A4BJAfQBHAfBVAAIC7AAIAABZg");
	this.shape_34.setTransform(34.25,54.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E21936").s().p("AhQBjIAAgKQAUgCAFgEQAEgFAAgTIAAh1QAAgTgEgFQgEgFgRgBIAAgKICKAAIADAtIgKACQgFgTgGgHQgGgIgaAAIgRAAQgIAAgCACQgBABAAAHIAABCIAWAAQATAAAGgDQAFgFADgPIAKAAIAAA7IgKAAQgDgQgFgDQgGgEgTAAIgWAAIAAA2QAAAVAHAEQAGADAWAAQAbAAAIgKQAIgIAIgVIALADQgGAlgFAMg");
	this.shape_35.setTransform(336.45,141.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E21936").s().p("AhBBGQgagbAAgoQAAgvAhgdQAggcA0AAQAWgBAgAJQAEAZADAWIgKACQgMgtgtgBQggABgUAaQgSAYAAAlQAAAoAVAaQAUAaAgAAQAUAAAOgMQAOgLAMgYIAJADQgHAdgKAUQgeAHgaABQg1gBgfggg");
	this.shape_36.setTransform(316.075,141.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E21936").s().p("ABDBkIh9iZIgBAAIAABGQAAAgACASQACALAGAEQAFAEAQABIAAAKIhJAAIAAgKQANgBAGgEQAFgEACgKQACgZAAgaIAAg/IgBgVQgBgGgEgFQgHgJgTgCIAAgKIAzAAIB2CLIABAAIAAg8QAAgggCgSQgBgKgGgEQgHgFgQAAIAAgKIBJAAIAAAJQgMABgGADQgFAFgBAKQgCARAAAiIAAB4g");
	this.shape_37.setTransform(292.85,141.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E21936").s().p("AhiBkIAAgJQAPgCAFgFQAFgFAIgTIA+icIANgDIA4CdQAIAUAGAFQAFAGAPABIAAAKIhQAAIAAgKQANgCADgEQADgDgDgKQgEgOgKgYIg7AAIgMAiQgEANADAEQADAEAPADIAAAJgAghATIAyAAIgXhFIgbBFg");
	this.shape_38.setTransform(269.3,141.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E21936").s().p("AgqBkIAAgMQASgBAEgEQAEgFAAgUIAAh1QAAgSgEgGQgEgEgSgBIAAgKIBVAAIAAAKQgSABgDAEQgFAGAAASIAAB2QAAAVAEAEQAEAEASACIAAAKg");
	this.shape_39.setTransform(252.7,141.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E21936").s().p("AhMBjIAAgKQAUgCAFgEQAEgFAAgTIAAh1QAAgTgEgFQgEgEgSgCIAAgKIBWAAIAAAKQgQACgEAEQgFAFAAATIAAB2QAAAMABAFQABAFAFABQAHADARAAQAYAAAIgKQAIgJAIgWIAKAEIgLAyg");
	this.shape_40.setTransform(237.6,141.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E21936").s().p("AhMBjIAAgKQAUgCAFgEQAEgFAAgTIAAh1QAAgTgEgFQgEgEgSgCIAAgKIBWAAIAAAKQgRACgDAEQgFAFAAATIAAB2QAAAMABAFQABAFAFABQAHADARAAQAXAAAJgKQAIgJAIgWIAKAEIgLAyg");
	this.shape_41.setTransform(219.25,141.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E21936").s().p("AhjBkIAAgJQAQgCAFgFQAFgFAIgTIA/icIALgDIA6CdQAHAUAFAFQAGAGAOABIAAAKIhQAAIAAgKQAOgCADgEQACgDgDgKQgEgOgJgYIg8AAIgLAiQgFANAEAEQACAEARADIAAAJgAghATIAxAAIgXhFQgHARgTA0g");
	this.shape_42.setTransform(198.25,141.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E21936").s().p("AASBiIAAgKQATgBAEgFQAEgEAAgTIAAg6IhZAAIAAA6QAAATAEAEQAEAFASABIAAAKIhWAAIAAgKQARgBAEgFQAEgEAAgTIAAh1QAAgTgFgEQgEgFgRgBIAAgKIBWAAIAAAKQgRABgEAFQgEAEAAATIAAAuIBZAAIAAguQAAgTgEgEQgEgFgRgBIAAgKIBWAAIAAAJQgSACgEAEQgEAFAAASIAAB2QAAATAEAEQAEAFASABIAAAKg");
	this.shape_43.setTransform(157.375,141.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E21936").s().p("AguBnIAAgLQATgBAFgEQAEgFABgTIAAiRIgNAAQgSABgIACQgGACgDAEQgHAHgFAWIgKAAIAFg5IAHAAQADAEADACQAEACAGAAIB4AAQAIgBAJgHIAGAAQABAcADAcIgMADQgGgZgGgFQgEgFgHgCQgGgCgOAAIgQAAIAACQQAAATAEAFQAFAEAUABIAAALg");
	this.shape_44.setTransform(134.6,141);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E21936").s().p("AhMBjIAAgKQAUgCAEgEQAFgFAAgTIAAh1QAAgTgEgFQgEgEgSgCIAAgKIBWAAIAAAKQgRACgEAEQgEAFAAATIAAB2QAAAMABAFQABAFAFABQAGADASAAQAXAAAJgKQAIgJAIgWIAKAEQgFAigGAQg");
	this.shape_45.setTransform(117.075,141.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E21936").s().p("AhjBkIAAgJQAPgCAFgFQAGgFAIgTIA+icIAMgDQApBwARAtQAHAUAGAFQAFAGAPABIAAAKIhRAAIAAgKQAOgCACgEQADgDgDgKQgEgOgKgYIg7AAIgMAiQgEANADAEQADAEAQADIAAAJgAghATIAxAAIgXhFQgKAYgQAtg");
	this.shape_46.setTransform(96.1,141.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E21936").s().p("AhQBjIAAgKQAVgCAEgEQAFgFAAgTIAAh1QAAgTgEgFQgEgFgRgBIAAgKICKAAIADAtIgKACQgFgTgGgHQgHgIgZAAIgRAAQgIAAgBACQgCABAAAHIAABCIAWAAQAUAAAFgDQAFgFADgPIAKAAIAAA7IgKAAQgDgQgFgDQgFgEgUAAIgWAAIAAA2IABARQACAGADACQAHADAVAAQAcAAAHgKQAIgIAIgVIAKADQAAAJgKAog");
	this.shape_47.setTransform(75.3,141.35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E21936").s().p("AASBiIAAgKQATgBAEgFQAEgEAAgTIAAg6IhZAAIAAA6QAAATAEAEQAEAFASABIAAAKIhWAAIAAgKQASgBADgFQAEgEAAgTIAAh1QAAgTgEgEQgEgFgTgBIAAgKIBWAAIAAAKQgQABgEAFQgFAEAAATIAAAuIBZAAIAAguQAAgTgDgEQgEgFgSgBIAAgKIBWAAIAAAJIACAAQgSACgEAEQgEAFAAASIAAB2QAAATAEAEQAEAFASABIAAAKg");
	this.shape_48.setTransform(52.925,141.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,386.9,217.6);


(lib._0315Amerigroup_25AnthemTag_Logo_RGBsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _3_15_Amerigroup_25AnthemTag_Logo_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EFF7FC","#C4E2F3","#7FC0E4","#2192D1","#0082CA"],[0,0.075,0.22,0.42,0.667,0.749],0,0,0,0,0,23.5).s().p("AgeDgQgMgMAAgSIABgJIgDAJQgIAQgRAFQgRAHgQgIQgQgIgGgRQgGgRAIgQIAFgIIgHAGQgOAMgRgCQgSgCgLgOQgLgOABgSQACgSAOgLIAIgFIgJADQgRAEgPgKQgPgJgEgRQgEgSAJgOQAKgQARgEIALgBIC7AAIh1iSIAAgBIgFgIQgIgQAGgRQAGgRAQgHQAQgIARAFQARAHAIAQIADAIIgBgJQAAgSAMgNQANgMARAAQASAAANAMQAMANAAASIgBAJIADgIQAIgQARgHQARgFAQAIQAQAHAGARQAGARgIAQIgFAIIAHgHQAOgLARACQASACALAOQALAOgBASQgCARgOAMIgIAEIAIgCQASgEAPAJQAPAKAEARQAEARgJAQQgKAPgRAEIgJAAIAJABQARAEAKAQQAJAOgEASQgEARgPAJQgPAKgSgEIgIgDIAIAFQAOALACASQABASgLAOQgLAOgRACQgSACgOgMIgGgFQACADACAEQAIAQgGARQgGARgQAIQgQAIgRgHQgRgFgIgQQgCgFgBgEIABAJQAAASgMAMQgNANgSAAQgRAAgNgNg");
	this.shape.setTransform(26.525,24.1);

	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(23.3,23.7,1,1,0,0,0,23.3,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0082CA").s().p("Ax/ATIAAglMAj/AAAIgNAlg");
	this.shape_1.setTransform(168.425,45.625);

	this.instance_1 = new lib.Group_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(104.4,64.35,1,1,0,0,0,50.1,5.8);
	this.instance_1.alpha = 0.8008;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0082CA").s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAGgKAAQgIAAgGgGgAgMgMQgFAFAAAHQAAAIAFAFQAFAGAHAAQAIAAAGgGQAFgFAAgIQAAgHgFgFQgGgGgIAAQgHAAgFAGgAAIAMIgHgLIgFAAIAAALIgDAAIAAgYIAKAAQAJAAAAAHQAAAFgIABIAHALgAgEgBIAEAAQAIAAAAgEQAAgEgGAAIgGAAg");
	this.shape_2.setTransform(46.875,44.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0082CA").s().p("AhyCSIAAgrIAUAAIAAjIIgUAAIAAgqIBJAAIAAAWQAcgcAjAAQApAAAaAgQAaAgAAA0QAAAwgbAfQgaAggpAAQgTAAgNgHQgOgHgQgQIAAAzIAVAAIAAArgAgZhVQgJAJgDAMQgDALAAAWQAAAlAQAQQAPAQARgBQAXAAAOgSQAOgSAAgeQAAghgNgTQgOgTgYAAQgSAAgPAPg");
	this.shape_3.setTransform(273.9,22.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0082CA").s().p("AhLBcQgRgSAAgiIAAhsIgVAAIAAgqIBKAAIAACLQAAAmAgAAQASAAAPgSQAPgRAAgWIAAhOIgVAAIAAgqIBKAAIAACuIATAAIAAApIhHAAIAAgZQgUAQgKAFQgRAKgWAAQgfAAgRgTg");
	this.shape_4.setTransform(248.6,19.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0082CA").s().p("AhMBRQgeggAAgxQAAgwAeghQAfggAuAAQAtAAAeAhQAfAhABAvQAAAwgfAhQgfAhgtAAQguAAgfghgAglgwQgOATAAAdQAAAeAOATQAOASAXABQAXAAAOgTQAOgTAAgeQAAgdgOgTQgPgSgWAAQgXAAgOASg");
	this.shape_5.setTransform(224.2,19.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0082CA").s().p("AhLBvIAAgqIAVAAIAAiDIgVAAIAAgrIBKAAIAAAiQAJgUANgKQANgJASAAQAJAAAPADIAAAzQgOgDgMAAQgVAAgQANQgOANAAATIAABTIAZAAIAAAqg");
	this.shape_6.setTransform(204.875,19.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0082CA").s().p("AhTB9QgLgIgFgKQgFgJgFgUIA0AAQAKAcAlAAQAWAAAOgLQAOgLAAgSIAAgiQgLANgLAHQgSAMgZAAQgmAAgZgeQgYgeAAgtQAAgvAZgdQAageAoAAQAcAAAhAcIAAgYIBJAAIAAArIgUAAIAAClQAAAngbAWQgcAWgvAAQgwAAgagXgAgrhVQgNARAAAcQAAAdAMAPQAMAPAXAAQAVAAAOgRQAPgQAAgcQAAgagOgRQgNgRgTAAQgYAAgOARg");
	this.shape_7.setTransform(182.75,22.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0082CA").s().p("AgtCVIAAgqIAVAAIAAiDIgUAAIAAgrIBIAAIAACuIASAAIAAAqgAgdhhIAAgzIA6AAIAAAzg");
	this.shape_8.setTransform(164.425,15.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0082CA").s().p("AhLBvIAAgqIAVAAIAAiDIgVAAIAAgrIBKAAIAAAiQAJgUANgKQANgJASAAQAJAAAPADIAAAzQgPgDgLAAQgVAAgQANQgOANAAATIAABTIAZAAIAAAqg");
	this.shape_9.setTransform(149.975,19.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0082CA").s().p("AhKBSQgeggAAgyQAAgwAeggQAeghAtAAQAaAAAVAMQAWALAOAVQANAUAFAYQADAOAAAWIibAAQAEAkAVAPQAMAIAOAAQAgAAANggIA4AAQgIAjgbAUQgbAVgoAAQgsAAgegggAgdg4QgNALgFAUIBdAAQgCgVgNgLQgMgLgSAAQgRAAgNAMg");
	this.shape_10.setTransform(129.25,19.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0082CA").s().p("ABcBvIAAiQQAAgPgGgIQgHgIgKAAQgRAAgNASQgNASAAAXIAABKIAVAAIAAAqIhJAAIAAiPQAAgggXAAQgSAAgNATQgNATABAZIAABGIAVAAIAAAqIhcAAIAAgqIASAAIAAiDIgTAAIAAgqIBIAAIAAAaQARgTANgGQANgHATAAQASAAALAHQALAIAKASQAOgOAKgGQATgNAXAAQAaAAAQARQARARAAAbIAAB2IAUAAIAAAqg");
	this.shape_11.setTransform(99.875,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0082CA").s().p("ABFCOIgSg9IhjAAIgUA9IhCAAIAAguIAXAAIBOjtIBEAAIBPDtIAUAAIAAAugAgkAlIBKAAIglh9g");
	this.shape_12.setTransform(67.1,15.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.4,70.2);


(lib.mc_WA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("Ak7ooIAPA9IAqBBIgbAsIAGAsQAEAzgKAfQgPAyAAAPIgsgZQgUAZgYAWQgvAtgQgOQgMgMA3g6QA7g9gGgSQgGgUhOgeQhUghgNgOQgcghgpgYQgygegWAUQgTAQAIA4QAEAeAHAxQAAAjgPCtIAAAiIgRAXIARA6QgGAZgLAJQgIAHAFAeQAGAeAMACQA7AHAZApQADAEABAEQAAADgCAAIA0A3IADA9QAIA/ASAPQAQAMAvgIQA1gJAOAFQASAGAzAdQAzAdAIADQAMAFAygCQAZgBAWgCIA4gDQA+gBAjAIQAbAGD8AaQDyAgAaAjICusXg");
	this.shape.setTransform(-214.2017,-74.0034,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AEQHkQj7gagbgGQgjgIg/ACIg3ACIgwADQgxACgMgFQgIgDgzgcQgzgegTgGQgNgFg1AJQgvAJgRgNQgSgOgHhAIgEg9Igzg3QAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgEQgagpg6gHQgMgBgGgfQgGgeAJgHQALgJAGgZIgRg6IARgXIAAgiQAPitAAgjIgMhPQgHg4ATgQQAVgUAzAeQAoAYAdAhQAMAOBUAhQBOAfAHATQAGASg7A9Qg4A7ANALQAPAPAwgtQAXgWAVgaIAsAZQAAgPAPgyQAJgfgEgyIgFgtIAbgsIgqhBIgPg9IQFE2IiuMXQgagjjzggg");
	this.shape_1.setTransform(-214.2342,-74.1692,0.7407,0.7407);

	this.instance = new lib._0315Amerigroup_25AnthemTag_Logo_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.9,-62.4,0.7143,0.7143,0,0,0,142.8,35);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Hayley Davis", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_WA_Contact, new cjs.Rectangle(-268.1,-116,422.90000000000003,222.3), null);


(lib.mc_TX_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DCHP_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.95,-67.5,0.7424,0.7424,0,0,0,60.1,31.2);

	this.instance_1 = new lib._0315Amerigroup_25AnthemTag_Logo_RGBsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60.1,-62.5,0.5143,0.5143,0,0,0,142.7,35);

	this.instance_2 = new lib.Envelope_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_3 = new lib.Phone_Greysvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer I", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Gregory Chandler", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_1.setTransform(2,2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_2.setTransform(2,2.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_5.setTransform(2,2.025);

	this.instance_4 = new lib.Image();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-300.45,56,0.1768,0.1768);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.8).p("AYAA7QAAgPgZhGQgahHgIgJQgFgFgaglIgYgkQgEisAChvQgCgaAEghQAEg5g2ghQgRgKgVgGIgRgFIAAgEQgZAEgTgGQgMgEgtgeQgugggKgFQgOgGgRAKQgUALgBAAQgEAAgTgJQgTgKgKAAQgiADgbAHQgQANgUAMQgpAYgYgHQgWgGgkgZQgqgdgFgDQgOgGgcAiIgZAjIgTgyIg5AAQgWgGgUAEQgRADgYAAQgXAAgHgDQgDgBgJgcQgKgdgQgJQgSgJgmAEIgiAFIhSAAIhMgiQgIgsgLgIQgHgFgqACIgpADIhDg0IAPoRIqKgyIh2TsItVhnIAAA3IAoAEIFSFzIAJB0QAOB7AdAiQBBBHBIA3QBuBVA6gOQArgLA3heQAzhYAkAAQBKAAC4AUICmDIIAmBhQAqBmAVAcQASAXAPA1QAOAvAKAHIBqBSIAsCmQA3CsA4AeQA4AeDJAsQBlAXBZAQIhFkCIAZhOIgyggIBDgPIAbhWIg0giQA5gTAMgIQAPgIAVggIgXgZQAkgUAfgUQALgHAsgWQAhgQACgFQABgGgJgbQgJgdAAgDQAAgFAvgDQAggCAaAAQAHAAAjAPQAkAOATgKQBng5APgKQAGgFAOhDQANhEgBgYQgCgiAEgZQAFgiAQgHQAMgEAGAoQAGAqAIAAQAJAAA/gSQBIgVAOgDIA/gKQgSgfAYgnQAcgvAAgBQgBglAAgZQAAgwABgOQABgKAOhEQAOhBAAgMg");
	this.shape_6.setTransform(-174.7735,171.0127,0.7407,0.7407);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A72BA").s().p("AHlW4QjJgtg4geQg4gdg3isIgsinIhqhSQgKgGgOgvQgPg2gSgXQgVgbgqhnIgmhhIimjIQi4gThKAAQgkAAgzBYQg3BdgrAMQg6ANhuhUQhIg3hBhHQgdgjgOh6IgJh0IlSlzIgogEIAAg3INVBnIB2zsIKKAyIgPIRIBDA0IApgDQAqgCAHAFQALAIAIAsIBMAiIBSAAIAigGQAmgEASAKQAQAIAKAdQAJAdADABQAHADAXAAQAYAAARgDQAUgFAWAHIA5AAIATAyIAZgkQAcgiAOAHQAFACAqAeQAkAZAWAGQAYAGApgXQAUgMAQgNQAbgHAigDQAKAAATAJQATAKAEAAIAVgLQARgKAOAGQAKAEAuAgQAtAfAMAEQATAFAZgDIAAAEIARAEQAVAHARAKQA2AggEA6QgEAhACAaQgCBvAECsIAYAkQAaAlAFAFQAIAIAaBHQAZBGAAAQQAAALgOBCQgOBEgBAKQgBAOAAAvIABA/IgcAvQgYAoASAfIg/AKIhWAYQg/ASgJAAQgIAAgGgqQgGgpgMAFQgQAGgFAiQgEAZACAiQABAZgNBEQgOBDgGAEQgPALhnA4QgTAKgkgNQgjgQgHAAQgaAAggACQgvADAAAFQAAADAJAdQAJAcgBAFQgCAGghAQQgsAVgLAHQgfAVgkATIAXAZQgVAggPAIQgMAIg5ATIA0AiIgbBWIhDAPIAyAgIgZBOIBFECQhZgQhlgWg");
	this.shape_7.setTransform(-174.7735,170.9774,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_TX_Contact, new cjs.Rectangle(-300.4,-106.2,455.2,445.2), null);


(lib.mc_TN_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AnBEqQBcgIAqgHQDngeC6gSQDsgYA6gFQAPg0ACgFQABgEAQACQAIAAAPACQADAAAHgeQAHggAKgHQALgHAngHQAmgHAJgGQALgHAXgbQAUgYAFgCIASgFQAOgEAKgIQAIgHANgfQAOggAHgGQAJgJARAEQAXAFADAAQAMgCAVgOQAVgNAFgJQAEgGAQAEQAQAEACgCQAsgsACgTQABgEAQh0QjqAdhvANQmpA1kmAdIlUAiIAAAuIk5AdIgPARIgMArQgNAvAAAWQAAAEgCAJQgCAPgOAfQgQAigEARQgKAqgmBlQgGANgLAQQERgGDOgTQgGgIgEgC");
	this.shape.setTransform(221.8954,-13.0211,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AuRElQAnhkAJgrQAFgRAPghQAOgfACgQQADgIAAgFQAAgWAMguIAMgrIAPgRIE5geIAAguIFUgiQEngcGog2IFagpIgSB3QgCATgrAsQgDADgQgEQgQgFgDAGQgGAKgUANQgWAOgMABQgDABgXgFQgRgEgJAIQgHAHgNAfQgOAggHAHQgKAHgPAEIgRAGQgFACgVAYQgXAbgLAGQgJAHgmAHQgnAHgKAGQgLAHgHAhQgGAegDAAIgYgCQgQgCgBAEIgRA4Qg6AGjrAYQi7ASjnAeQgqAGhcAJQgGgIgEgDQAEADAGAIQjOATkRAFQAMgQAFgNg");
	this.shape_1.setTransform(222.0355,-13.0007,0.7407,0.7407);

	this.instance = new lib._0315Amerigroup_25AnthemTag_Logo_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.9,-62.4,0.7143,0.7143,0,0,0,142.8,35);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer Sr", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Ashley Boggs", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_TN_Contact, new cjs.Rectangle(-154.7,-106.2,446.7,212.5), null);


(lib.mc_NY_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BCBSWNY4Color_Horizsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.95,41.1,0.3495,0.3495,0,0,0,269.2,61.1);

	this.instance_1 = new lib.Empire_25AnthemTag_Logo_CMYK_blk_vectorsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,-166.95,0.5909,0.5909,0,0,0,110.2,48.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.949)").s().p("A2uBVIAAipMAtdAAAIAACpg");
	this.shape.setTransform(-1.9618,1.4548,0.9519,0.1176);

	this.instance_2 = new lib.Envelope_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123.6,145.95,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_3 = new lib.Phone_Greysvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-123.55,179,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-136.95,106.65);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Michelle Beck", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-136.95,82.25);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.instance_4 = new lib.Envelope_Greysvg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-123.6,-67.05,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_5 = new lib.Phone_Greysvg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-123.55,-34,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text_2 = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 270;
	this.text_2.parent = this;
	this.text_2.setTransform(-136.95,-106.35);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("Hayley Davis", "normal 700 18px 'Roboto'", "#606060");
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 270;
	this.text_3.parent = this;
	this.text_3.setTransform(-136.95,-130.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_3);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.949)").s().p("A1ReoQhTAAAAhUMAAAg6nQAAhUBTAAMAqjAAAQBTAAAABUMAAAA6nQAABUhTAAg");
	this.shape_1.setTransform(-1.9959,-1.974,1.0765,1.0765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(83,83,83,0.086)").s().p("A1ReoQhTAAAAhUMAAAg6nQAAhUBTAAMAqjAAAQBTAAAABUMAAAA6nQAABUhTAAgA2a9TMAAAA6nQAABKBJAAMAqjAAAQBJAAAAhKMAAAg6nQAAhKhJAAMgqjAAAQhJAAAABKg");
	this.shape_2.setTransform(2.0041,2.026,1.0765,1.0765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.176)").s().p("A1ReeQhJAAAAhKMAAAg6nQAAhKBJAAMAqjAAAQBJAAAABKMAAAA6nQAABKhJAAgA2Q9TMAAAA6nQAABAA/AAMAqjAAAQA/AAAAhAMAAAg6nQAAhAg/AAMgqjAAAQg/AAAABAg");
	this.shape_3.setTransform(2.0041,2.026,1.0765,1.0765);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.267)").s().p("A1ReUQg/AAAAhAMAAAg6nQAAhAA/AAMAqjAAAQA/AAAABAMAAAA6nQAABAg/AAgA2G9TMAAAA6nQAAA2A1AAMAqjAAAQA1AAAAg2MAAAg6nQAAg2g1AAMgqjAAAQg1AAAAA2g");
	this.shape_4.setTransform(2.0041,2.026,1.0765,1.0765);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.353)").s().p("A1ReKQg1AAAAg2MAAAg6nQAAg2A1AAMAqjAAAQA1AAAAA2MAAAA6nQAAA2g1AAgA189TMAAAA6nQAAAsArAAMAqjAAAQArAAAAgsMAAAg6nQAAgsgrAAMgqjAAAQgrAAAAAsg");
	this.shape_5.setTransform(2.0041,2.026,1.0765,1.0765);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.447)").s().p("A1ReAQgrAAAAgsMAAAg6nQAAgsArAAMAqjAAAQArAAAAAsMAAAA6nQAAAsgrAAg");
	this.shape_6.setTransform(2.0041,2.026,1.0765,1.0765);

	this.instance_6 = new lib.Image_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(153.4,-180.75,0.1758,0.1758);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.8).p("AL0GvIhRAfIiwBMIAPg0IABAAIgTgfIAdgkQgLgFgFgKQgDgDgDg2IgHiXQgChggGhZQAAgLgCgFQgGgxgZhWQgZhYgNgOQgOgQgOg5QgPg5ADgeQAEgagNgkQgKgcgKgLQgEgEgGgiQgFgdgEggIhJATQjoA5gkAbQgWARgiBHQgRAjgNAgIhSBpIAWAFQAWAGAAAIQAAAPgTAVIATAeQAQAggMAQQgLAQgbAVQgdAVgJAHQgQAPgvAZQg1AbgXABQgTABg2gFQg7gHgLAAQgMAAAAABQgEAFggAJQgkALgzAZIgtAXIAWA9QAUA/gKAKQhVBVg8BCIAABQIG4hVQG6hTAOAIQASAJAOAQQALAAAKAHQAKAGAFAKQAEAMAFAZQAGAVARAJQAKAGAgAJQAVAGAAAIQCzA0AEAHQAHArABAlQAoAfAXgGQAegIBfhMIB8hKg");
	this.shape_7.setTransform(218.5805,-133.2796,0.7407,0.7407);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0A72BA").s().p("AHWJCQgCglgGgrQgEgHizg0QAAgIgVgGQgggKgKgFQgSgKgGgVQgEgZgEgLQgFgLgKgGQgKgGgLAAQgPgRgRgIQgPgJm5BUIm4BVIAAhQQA8hCBVhVQAKgKgUg/IgWg9IAsgXQA0gaAkgKQAfgKAEgEQABgBAMAAQALAAA6AGQA3AGATgBQAXgCA1gbQAugZARgOQAIgIAdgVQAbgVAMgPQAMgQgRghIgSgdQATgVAAgPQAAgIgWgHIgWgEIBShpQAMggARgkQAihGAXgRQAjgcDpg4IBJgTQADAfAGAeQAGAiAEAEQAJAKALAdQANAkgEAaQgDAeAOA5QAOA5APAQQANAOAZBXQAZBWAGAyQACAFAAALQAGBYACBhIAHCWQADA2ACAEQAFAJAMAGIgdAkIATAfIgCAAIgPA0ICwhMIBSgfIAWAOIh8BKQhfBMgdAIIgIAAQgWAAghgZg");
	this.shape_8.setTransform(218.4099,-133.2316,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.instance_6},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_3},{t:this.text_2},{t:this.instance_5},{t:this.instance_4},{t:this.text_1},{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_NY_Contact, new cjs.Rectangle(-157.5,-212.9,436.4,425.9), null);


(lib.mc_NJ_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AChgmQgKgRgegcIgdgYIAEhHQACABAEADQgBgjgHgtQgEgGiyg1QAAAJgPAhQgIASgLAWQgFALgjAhQAVAWgCAcQAAARA4A9QA2A7gDAPQgCANghAoQgnAvgQAUQgOASgEAGQgHAKAAAGQAAATAVAhQAEABBhAYQAeAIAaALIgGARQgCATASAIQAVAKAkhbQAhhTAAgbIAAhaQABAAAXgbQAVgcgLgRg");
	this.shape.setTransform(167.5691,-24.5644,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AAkE6QgSgIACgSIAGgSQgagKgegIIhlgZQgVghAAgUQAAgGAHgKIASgYIA3hDQAhgoACgNQADgOg2g8Qg4g9AAgQQACgdgVgVQAjgiAFgLIATgnQAPgiAAgJQCyA1AEAGQAHAtABAjIgGgEIgEBHIAdAZQAeAbAKARQALARgVAdIgYAaIAABaQAAAcghBTQggBRgVAAIgEgBg");
	this.shape_1.setTransform(167.6455,-24.5016,0.7407,0.7407);

	this.instance = new lib._0315Amerigroup_25AnthemTag_Logo_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.9,-62.4,0.7143,0.7143,0,0,0,142.8,35);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Kristen Cayton", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_NJ_Contact, new cjs.Rectangle(-154.7,-106.2,336.4,212.5), null);


(lib.mc_MD_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AABh9IAoBUIBcANIhDBAIARBcIhSgsIhTAsIARhcIhDhAIBcgNg");
	this.shape.setTransform(183.8545,-3.0463,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B427").s().p("AABBTIhTAsIARhcIhDhAIBcgNIAphUIAoBUIBcANIhDBAIARBcg");
	this.shape_1.setTransform(183.8565,-2.9696,0.7407,0.7407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.8).p("AHygqIiJAbIhSlKIsICAIAZCTIBJhQIAgAGIAbg0IAXAFQAXAFAGgCQACAAAegZQAcgZASAAQAoADAkAWQAGAGAEAHQANAPAOAVIAsAKIgFATQgEATAJACQAIADAlAKQAiAMAKAZQAJAUABAmQABAZgDAXQAQgDA3AMQAdAGAiAIQATACAwAXIgshKIggiFIAChBIAVglQAXgkANAEQABAlASAUQALAMgHAFQgLAHAGAbQADAQAKAkQAEAOgDAyQgCAnAJAFQAEADAmAMQAiAMAOANQARAQANAXQAKAUAAAKQAAAIgTBhQgNBhAYAOQAaAPAQgqQAJgYAGgyQABgVAWhGQAUhCgBgJQgBgMgEgXIgFgWQASgYACgkg");
	this.shape_2.setTransform(190.5981,4.9763,0.7407,0.7407);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A72BA").s().p("AGFFWQgYgOANhhQAThhAAgIQAAgKgLgUQgMgXgRgQQgPgNgigMQglgMgEgDQgJgFACgnQADgygEgOIgOg0QgFgbALgHQAGgFgKgMQgSgUgBglQgNgEgYAkIgUAlIgCBBIAgCFIAsBKQgwgXgTgCIg/gOQg4gMgPADQACgXgBgZQgBgmgIgUQgKgZgjgMQglgKgHgDQgKgCAFgTIAFgTIgsgKQgOgVgNgPQgFgHgFgGQgkgWgogDQgSAAgcAZIggAZQgGACgXgFIgXgFIgbA0IgggGIhJBQIgZiTIMIiAIBSFKICJgbQgDAkgRAYIAFAWQAEAXABAMQABAJgVBCQgVBGgBAVQgGAygJAYQgMAfgRAAQgGAAgHgEg");
	this.shape_3.setTransform(190.6267,5.0017,0.7407,0.7407);

	this.instance = new lib._0315Amerigroup_25AnthemTag_Logo_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.9,-62.4,0.7143,0.7143,0,0,0,142.8,35);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer I", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Shelby Imes", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_4.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_7.setTransform(2,2.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_8.setTransform(2,2.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_9.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_MD_Contact, new cjs.Rectangle(-154.7,-106.2,383.2,212.5), null);


(lib.mc_IA_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AJqheQgPgKgYgfIgVgeQgUgsgWgNQgWgLgRgOQgWgUgHgWQgKgjgWh0IweAKQgHAMgBAOQAAAOAFAMQAOAWAAAoQABApgPARQgOATAAAHQABAJAVAcQAQARgDAXQAAAJgBAUQAAASAJAUQAXAuAgBcQAlBrACAuQAHBZAXBXIM6AAIA5A7IAPgeQATgkASgfQAfg1AegZQAEgEgSgjQgUgmAEgUQAFgYA+ghQAfgRAegMIAthDQALgNgMgpQgMgqgUgLg");
	this.shape.setTransform(204.3574,23.8994,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AFSF9Is6AAQgXhXgHhaQgCgtglhrQgghdgXgtQgJgUAAgSIABgeQADgWgQgSQgVgbgBgJQAAgIAOgTQAPgQgBgpQAAgogOgWQgFgMAAgOQABgOAHgMIQegKQAWBzAKAkQAHAVAWAUQARAPAWAKQAWAOAUArIAVAfQAYAfAPAJQAUAMAMAqQAMAogLANIgtBEQgeAMgfARQg+AhgFAXQgEAVAUAmQASAjgEADQgeAagfA1QgSAegTAkIgPAeg");
	this.shape_1.setTransform(204.3574,23.7692,0.7407,0.7407);

	this.instance = new lib._0315Amerigroup_25AnthemTag_Logo_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.9,-62.4,0.7143,0.7143,0,0,0,142.8,35);

	this.instance_1 = new lib.Envelope_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_2 = new lib.Phone_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer II", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Kara-Leigh Sakis", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_IA_Contact, new cjs.Rectangle(-154.7,-106.2,408.7,212.5), null);


(lib.mc_FL_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AO9KEQAIg2AEhFQAHiLgZhOQgZhNhWioIhQiXIgThpQghglgog1QhOhqgghNQgwhtgTgwQgghPgGgxIh4AAQgLABAMA7QAMA8gNAFQgQAFgTgcIgPgdQiWAKiYAKQkyAUgNAAQgMAAgSgfQgCgEgUgrIoxA3QgMAEgJAIQgTARALAYQAKAXAQAMQAIAGAGABIACA/IBJgrIAAAcIDFgjIAAAoICgBDIBpBVIBUghQBYglAVgWQAeggAfgKQAmgNAjAWQAYAQAyA7QAtA2AXAMQARAJA/AbQAzAWAMAJQAMAKAMCkQALClAHAGQAJAJAKABQAFAAADgCIAAgdQAOABAKALQAKAKAAAOQABASgNAvQgJAuAVAeQAVAgApAkQAVASAQALIAqgCIARAsIA7BgIAiBhIAmADQApAEASAMQATAPAaA0QAbA2AKArQAaAqBVgmQArgSAlgcIAXAkQAYASAFhaQgQgUgHACg");
	this.shape.setTransform(230.8746,55.7645,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("ALmLeQgKgrgbg2Qgag0gTgPQgSgMgpgEIgmgDIgihhIg7hgIgRgsIgqACQgQgLgVgSQgpgkgVggQgVgeAJguQANgvgBgSQAAgOgKgKQgKgLgOgBIAAAdQgDACgFAAQgKgBgJgJQgHgGgLilQgMikgMgKQgMgJgzgWQg/gbgRgJQgXgMgtg2Qgyg7gYgQQgjgWgmANQgfAKgeAgQgVAWhYAlIhUAhIhphVIighDIAAgoIjFAjIAAgcIhJArIgCg/QgGgBgIgGQgQgMgKgXQgLgYATgRQAJgIAMgEIIxg3IAWAvQASAfAMAAQANAAEygUIEugUIAPAdQATAcAQgFQANgFgMg8QgMg7ALgBIB4AAQAGAxAgBPQATAwAwBtQAgBNBOBqQAoA1AhAlIATBpIBQCXQBWCoAZBNQAZBOgHCLQgEBFgIA2IAFgGQAHgCAQAUQgFBagYgSIgXgkQglAcgrASQgoASgbAAQgeAAgOgWg");
	this.shape_1.setTransform(230.8711,55.7645,0.7407,0.7407);

	this.instance = new lib.ClearHealthAlliance_RGBsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(82.9,-61.95,0.2405,0.2405,0,0,0,193.6,108.8);

	this.instance_1 = new lib.SimplyHealthcareLogo4csvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.7,-66.5,0.4338,0.4338,0,0,0,155,52.1);

	this.instance_2 = new lib.Envelope_Greysvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122.45,42.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_3 = new lib.Phone_Greysvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-122.4,75.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text = new cjs.Text("Marketing Comm Writer Sr", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-135.95,3.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Jana Barbir", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-135.95,-21);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(-1.9804,-1.9779,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(2,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(2,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(2,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(2,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(2,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_1},{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_FL_Contact, new cjs.Rectangle(-154.7,-106.2,459.5,219), null);


(lib.mc_DC_Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Phone
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("AABh9IAoBUIBcANIhDBAIARBcIhSgsIhTAsIARhcIhDhAIBcgNg");
	this.shape.setTransform(174.3545,-59.7963,0.7407,0.7407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A72BA").s().p("AABBTIhTAsIARhcIhDhAIBcgNIAphUIAoBUIBcANIhDBAIARBcg");
	this.shape_1.setTransform(174.3565,-59.7196,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Icons
	this.instance = new lib.Envelope_Greysvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-120.45,44.7,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_1 = new lib.Phone_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.4,77.75,0.1811,0.1811,0,0,0,70.2,72.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Plan_Logo
	this.instance_2 = new lib.DC_Amerigroup_25Tag_Logo_CMYKsvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.15,-60.55,0.6687,0.6687,0,0,0,142.9,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Title
	this.text = new cjs.Text("Marketing Comm Writer I", "normal 300 12px 'Roboto'", "#606060");
	this.text.lineHeight = 18;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-134,5.4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Name
	this.text_1 = new cjs.Text("Shelby Imes", "normal 700 18px 'Roboto'", "#606060");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 270;
	this.text_1.parent = this;
	this.text_1.setTransform(-134,-19);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// White_box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_2.setTransform(0.0196,0.0221,2.159,2.3825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_3.setTransform(4,4.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_4.setTransform(4,4.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_5.setTransform(4,4.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_6.setTransform(4,4.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_7.setTransform(4,4.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_DC_Contact, new cjs.Rectangle(-152.7,-104.2,338,212.5), null);


// stage content:
(lib.MAMCOM_Website_Map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Show an Object
		HIDE All Contact card Elements
		*/
		this.Inst_X_AR_Contact_btn.visible = false;
		this.Inst_AR_Email_btn.visible = false;
		this.Inst_AR_Phone_btn.visible = false;
		this.Inst_AR_Contact_mc.visible = false;
		
		this.Inst_X_CA_Contact_btn.visible = false;
		this.Inst_CA_Email_btn.visible = false;
		this.Inst_CA_Phone_btn.visible = false;
		this.Inst_CA_Contact_mc.visible = false;
		
		this.Inst_X_CO_Contact_btn.visible = false;
		this.Inst_CO_Email_btn.visible = false;
		this.Inst_CO_Phone_btn.visible = false;
		this.Inst_CO_Contact_mc.visible = false;
		
		this.Inst_X_DC_Contact_btn.visible = false;
		this.Inst_DC_Email_btn.visible = false;
		this.Inst_DC_Phone_btn.visible = false;
		this.Inst_DC_Contact_mc.visible = false;
		
		this.Inst_X_FL_Contact_btn.visible = false;
		this.Inst_FL_Email_btn.visible = false;
		this.Inst_FL_Phone_btn.visible = false;
		this.Inst_FL_Contact_mc.visible = false;
		
		this.Inst_X_GA_Contact_btn.visible = false;
		this.Inst_GA_Email_btn.visible = false;
		this.Inst_GA_Phone_btn.visible = false;
		this.Inst_GA_Contact_mc.visible = false;
		
		this.Inst_X_IA_Contact_btn.visible = false;
		this.Inst_IA_Email_btn.visible = false;
		this.Inst_IA_Phone_btn.visible = false;
		this.Inst_IA_Contact_mc.visible = false;
		
		this.Inst_X_IN_Contact_btn.visible = false;
		this.Inst_IN_Email_btn.visible = false;
		this.Inst_IN_Phone_btn.visible = false;
		this.Inst_IN_Contact_mc.visible = false;
		
		this.Inst_X_KY_Contact_btn.visible = false;
		this.Inst_KY_Email_btn.visible = false;
		this.Inst_KY_Phone_btn.visible = false;
		this.Inst_KY_Contact_mc.visible = false;
		
		this.Inst_X_LA_Contact_btn.visible = false;
		this.Inst_LA_Email_btn.visible = false;
		this.Inst_LA_Phone_btn.visible = false;
		this.Inst_LA_Contact_mc.visible = false;
		
		this.Inst_X_MD_Contact_btn.visible = false;
		this.Inst_MD_Email_btn.visible = false;
		this.Inst_MD_Phone_btn.visible = false;
		this.Inst_MD_Contact_mc.visible = false;
		
		this.Inst_X_MN_Contact_btn.visible = false;
		this.Inst_MN_Email_btn.visible = false;
		this.Inst_MN_Phone_btn.visible = false;
		this.Inst_MN_Contact_mc.visible = false;
		
		this.Inst_X_NC_Contact_btn.visible = false;
		this.Inst_NC_Email_btn.visible = false;
		this.Inst_NC_Phone_btn.visible = false;
		this.Inst_NC_Contact_mc.visible = false;
		
		this.Inst_X_NJ_Contact_btn.visible = false;
		this.Inst_NJ_Email_btn.visible = false;
		this.Inst_NJ_Phone_btn.visible = false;
		this.Inst_NJ_Contact_mc.visible = false;
		
		this.Inst_X_NV_Contact_btn.visible = false;
		this.Inst_NV_Email_btn.visible = false;
		this.Inst_NV_Phone_btn.visible = false;
		this.Inst_NV_Contact_mc.visible = false;
		
		this.Inst_X_NY_Contact_btn.visible = false;
		this.Inst_NY_ENY_Email_btn.visible = false;
		this.Inst_NY_ENY_Phone_btn.visible = false;
		this.Inst_NY_WNY_Email_btn.visible = false;
		this.Inst_NY_WNY_Phone_btn.visible = false;
		this.Inst_NY_Contact_mc.visible = false;
		
		this.Inst_X_SC_Contact_btn.visible = false;
		this.Inst_SC_Email_btn.visible = false;
		this.Inst_SC_Phone_btn.visible = false;
		this.Inst_SC_Contact_mc.visible = false;
		
		this.Inst_X_TN_Contact_btn.visible = false;
		this.Inst_TN_Email_btn.visible = false;
		this.Inst_TN_Phone_btn.visible = false;
		this.Inst_TN_Contact_mc.visible = false;
		
		this.Inst_X_TX_Contact_btn.visible = false;
		this.Inst_TX_Email_btn.visible = false;
		this.Inst_TX_Phone_btn.visible = false;
		this.Inst_TX_Contact_mc.visible = false;
		
		this.Inst_X_VA_Contact_btn.visible = false;
		this.Inst_VA_Email_btn.visible = false;
		this.Inst_VA_Phone_btn.visible = false;
		this.Inst_VA_Contact_mc.visible = false;
		
		this.Inst_X_WA_Contact_btn.visible = false;
		this.Inst_WA_Email_btn.visible = false;
		this.Inst_WA_Phone_btn.visible = false;
		this.Inst_WA_Contact_mc.visible = false;
		
		this.Inst_X_WI_Contact_btn.visible = false;
		this.Inst_WI_Email_btn.visible = false;
		this.Inst_WI_Phone_btn.visible = false;
		this.Inst_WI_Contact_mc.visible = false;
		
		this.Inst_X_WV_Contact_btn.visible = false;
		this.Inst_WV_Email_btn.visible = false;
		this.Inst_WV_Phone_btn.visible = false;
		this.Inst_WV_Contact_mc.visible = false;
		
		
		
		
		
		
		/* ARKANSAS
		Click STATE to show card
		*/
		this.Inst_AR_btn.addEventListener("click", fl_ClickToHide_13.bind(this));
		
		function fl_ClickToHide_13() {
			this.Inst_X_AR_Contact_btn.visible = true;
			this.Inst_AR_Email_btn.visible = true;
			this.Inst_AR_Phone_btn.visible = true;
			this.Inst_AR_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to hide card */
		this.Inst_X_AR_Contact_btn.addEventListener("click", fl_ClickToHide_14.bind(this));
		
		function fl_ClickToHide_14() {
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		}
		
		/* Click card to hide card */
		this.Inst_AR_Contact_mc.addEventListener("click", fl_ClickToHide_15.bind(this));
		
		function fl_ClickToHide_15() {
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_AR_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("mailto:felicia.woods@amerigroup.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		
		this.Inst_AR_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* CALIFORNIA
		Click STATE to show card.
		*/
		this.Inst_CA_btn.addEventListener("click", fl_ClickToHide_16.bind(this));
		
		function fl_ClickToHide_16() {
			this.Inst_X_CA_Contact_btn.visible = true;
			this.Inst_CA_Email_btn.visible = true;
			this.Inst_CA_Phone_btn.visible = true;
			this.Inst_CA_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to hide card */
		this.Inst_X_CA_Contact_btn.addEventListener("click", fl_ClickToHide_17.bind(this));
		
		function fl_ClickToHide_17() {
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		}
		
		/* Click card to hide card */
		this.Inst_CA_Contact_mc.addEventListener("click", fl_ClickToHide_18.bind(this));
		
		function fl_ClickToHide_18() {
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_CA_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_10);
		
		function fl_ClickToGoToWebPage_10() {
			window.open("mailto:michelle.beck2@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_CA_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* COLORADO
		Click STATE to show card
		*/
		this.Inst_CO_btn.addEventListener("click", fl_ClickToHide_19.bind(this));
		
		function fl_ClickToHide_19() {
			this.Inst_X_CO_Contact_btn.visible = true;
			this.Inst_CO_Email_btn.visible = true;
			this.Inst_CO_Phone_btn.visible = true;
			this.Inst_CO_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_CO_Contact_btn.addEventListener("click", fl_ClickToHide_20.bind(this));
		
		function fl_ClickToHide_20() {
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		}
		
		/* Click cardto Hide card. */
		this.Inst_CO_Contact_mc.addEventListener("click", fl_ClickToHide_21.bind(this));
		
		function fl_ClickToHide_21() {
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_CO_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("mailto: felicia.woods@amerigroup.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_CO_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* DISTRICT OF COLUMBIA
		Clicking STATE to show card.
		*/
		this.Inst_DC_btn.addEventListener("click", fl_ClickToHide_22.bind(this));
		
		function fl_ClickToHide_22() {
			this.Inst_X_DC_Contact_btn.visible = true;
			this.Inst_DC_Email_btn.visible = true;
			this.Inst_DC_Phone_btn.visible = true;
			this.Inst_DC_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card */
		this.Inst_X_DC_Contact_btn.addEventListener("click", fl_ClickToHide_23.bind(this));
		
		function fl_ClickToHide_23() {
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_DC_Contact_mc.addEventListener("click", fl_ClickToHide_24.bind(this));
		
		function fl_ClickToHide_24() {
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_DC_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_14);
		
		function fl_ClickToGoToWebPage_14() {
			window.open("mailto:shelby.imes@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_DC_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_15);
		
		function fl_ClickToGoToWebPage_15() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		/* FLORIDA
		Click STATE to show card.
		*/
		this.Inst_FL_btn.addEventListener("click", fl_ClickToHide_25.bind(this));
		
		function fl_ClickToHide_25() {
			this.Inst_X_FL_Contact_btn.visible = true;
			this.Inst_FL_Email_btn.visible = true;
			this.Inst_FL_Phone_btn.visible = true;
			this.Inst_FL_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card */
		this.Inst_X_FL_Contact_btn.addEventListener("click", fl_ClickToHide_26.bind(this));
		
		function fl_ClickToHide_26() {
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card */
		this.Inst_FL_Contact_mc.addEventListener("click", fl_ClickToHide_27.bind(this));
		
		function fl_ClickToHide_27() {
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_FL_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("mailto:jana.barbir@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_FL_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* GEORGIA
		Click STATE to show card
		*/
		this.Inst_GA_btn.addEventListener("click", fl_ClickToHide_28.bind(this));
		
		function fl_ClickToHide_28() {
			this.Inst_X_GA_Contact_btn.visible = true;
			this.Inst_GA_Email_btn.visible = true;
			this.Inst_GA_Phone_btn.visible = true;
			this.Inst_GA_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_GA_Contact_btn.addEventListener("click", fl_ClickToHide_29.bind(this));
		
		function fl_ClickToHide_29() {
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_GA_Contact_mc.addEventListener("click", fl_ClickToHide_30.bind(this));
		
		function fl_ClickToHide_30() {
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_GA_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("mailto:laura.livingston@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_GA_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* IOWA
		Click STATE to show card.
		*/
		this.Inst_IA_btn.addEventListener("click", fl_ClickToHide_31.bind(this));
		
		function fl_ClickToHide_31() {
			this.Inst_X_IA_Contact_btn.visible = true;
			this.Inst_IA_Email_btn.visible = true;
			this.Inst_IA_Phone_btn.visible = true;
			this.Inst_IA_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_IA_Contact_btn.addEventListener("click", fl_ClickToHide_32.bind(this));
		
		function fl_ClickToHide_32() {
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card.*/
		this.Inst_IA_Contact_mc.addEventListener("click", fl_ClickToHide_33.bind(this));
		
		function fl_ClickToHide_33() {
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL*/
		this.Inst_IA_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_20);
		
		function fl_ClickToGoToWebPage_20() {
			window.open("mailto:kara-leigh.sakis@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_IA_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_21);
		
		function fl_ClickToGoToWebPage_21() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* INDIANA
		Click STATE to show card.
		*/
		this.Inst_IN_btn.addEventListener("click", fl_ClickToHide_34.bind(this));
		
		function fl_ClickToHide_34() {
			this.Inst_X_IN_Contact_btn.visible = true;
			this.Inst_IN_Email_btn.visible = true;
			this.Inst_IN_Phone_btn.visible = true;
			this.Inst_IN_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card*/
		this.Inst_X_IN_Contact_btn.addEventListener("click", fl_ClickToHide_35.bind(this));
		
		function fl_ClickToHide_35() {
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_IN_Contact_mc.addEventListener("click", fl_ClickToHide_36.bind(this));
		
		function fl_ClickToHide_36() {
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_IN_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_22);
		
		function fl_ClickToGoToWebPage_22() {
			window.open("mailto:maria.sabale@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		
		this.Inst_IN_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_23);
		
		function fl_ClickToGoToWebPage_23() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* KENTUCKY
		Click STATE to show card
		*/
		this.Inst_KY_btn.addEventListener("click", fl_ClickToHide_37.bind(this));
		
		function fl_ClickToHide_37() {
			this.Inst_X_KY_Contact_btn.visible = true;
			this.Inst_KY_Email_btn.visible = true;
			this.Inst_KY_Phone_btn.visible = true;
			this.Inst_KY_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_KY_Contact_btn.addEventListener("click", fl_ClickToHide_38.bind(this));
		
		function fl_ClickToHide_38() {
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		}
		
		/* Click to Hide card */
		this.Inst_KY_Contact_mc.addEventListener("click", fl_ClickToHide_39.bind(this));
		
		function fl_ClickToHide_39() {
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_KY_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_24);
		
		function fl_ClickToGoToWebPage_24() {
			window.open("mailto:maria.sabale@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_KY_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_25);
		
		function fl_ClickToGoToWebPage_25() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		/* LOUISIANA
		Click STATE to show card.
		*/
		this.Inst_LA_btn.addEventListener("click", fl_ClickToHide_40.bind(this));
		
		function fl_ClickToHide_40() {
			this.Inst_X_LA_Contact_btn.visible = true;
			this.Inst_LA_Email_btn.visible = true;
			this.Inst_LA_Phone_btn.visible = true;
			this.Inst_LA_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card */
		this.Inst_X_LA_Contact_btn.addEventListener("click", fl_ClickToHide_41.bind(this));
		
		function fl_ClickToHide_41() {
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card */
		this.Inst_LA_Contact_mc.addEventListener("click", fl_ClickToHide_42.bind(this));
		
		function fl_ClickToHide_42() {
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_LA_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_26);
		
		function fl_ClickToGoToWebPage_26() {
			window.open("mailto:nate.levine@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_LA_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_27);
		
		function fl_ClickToGoToWebPage_27() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		/* MARYLAND
		Click STATE to show card
		*/
		this.Inst_MD_btn.addEventListener("click", fl_ClickToHide_43.bind(this));
		
		function fl_ClickToHide_43() {
			this.Inst_X_MD_Contact_btn.visible = true;
			this.Inst_MD_Email_btn.visible = true;
			this.Inst_MD_Phone_btn.visible = true;
			this.Inst_MD_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_MD_Contact_btn.addEventListener("click", fl_ClickToHide_44.bind(this));
		
		function fl_ClickToHide_44() {
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card*/
		this.Inst_MD_Contact_mc.addEventListener("click", fl_ClickToHide_45.bind(this));
		
		function fl_ClickToHide_45() {
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_MD_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_28);
		
		function fl_ClickToGoToWebPage_28() {
			window.open("mailto:shelby.imes@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_MD_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_29);
		
		function fl_ClickToGoToWebPage_29() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* MINNESOTA
		Click STATE to show card
		*/
		this.Inst_MN_btn.addEventListener("click", fl_ClickToHide_46.bind(this));
		
		function fl_ClickToHide_46() {
			this.Inst_X_MN_Contact_btn.visible = true;
			this.Inst_MN_Email_btn.visible = true;
			this.Inst_MN_Phone_btn.visible = true;
			this.Inst_MN_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_MN_Contact_btn.addEventListener("click", fl_ClickToHide_47.bind(this));
		
		function fl_ClickToHide_47() {
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_MN_Contact_mc.addEventListener("click", fl_ClickToHide_48.bind(this));
		
		function fl_ClickToHide_48() {
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_MN_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_30);
		
		function fl_ClickToGoToWebPage_30() {
			window.open("mailto:kara-leigh.sakis@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_MN_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_31);
		
		function fl_ClickToGoToWebPage_31() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* NORTH CAROLINA
		Click STATE to show card.
		*/
		this.Inst_NC_btn.addEventListener("click", fl_ClickToHide_49.bind(this));
		
		function fl_ClickToHide_49() {
			this.Inst_X_NC_Contact_btn.visible = true;
			this.Inst_NC_Email_btn.visible = true;
			this.Inst_NC_Phone_btn.visible = true;
			this.Inst_NC_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_NC_Contact_btn.addEventListener("click", fl_ClickToHide_50.bind(this));
		
		function fl_ClickToHide_50() {
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		}
		
		
		/* Click card to Hide card. */
		this.Inst_NC_Contact_mc.addEventListener("click", fl_ClickToHide_51.bind(this));
		
		function fl_ClickToHide_51() {
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_NC_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_32);
		
		function fl_ClickToGoToWebPage_32() {
			window.open("mailto:mary.johnson@amerigroup.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		
		this.Inst_NC_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_33);
		
		function fl_ClickToGoToWebPage_33() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* NEW JERSEY
		Click STATE to show card.
		*/
		this.Inst_NJ_btn.addEventListener("click", fl_ClickToHide_52.bind(this));
		
		function fl_ClickToHide_52() {
			this.Inst_X_NJ_Contact_btn.visible = true;
			this.Inst_NJ_Email_btn.visible = true;
			this.Inst_NJ_Phone_btn.visible = true;
			this.Inst_NJ_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_NJ_Contact_btn.addEventListener("click", fl_ClickToHide_53.bind(this));
		
		function fl_ClickToHide_53() {
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_NJ_Contact_mc.addEventListener("click", fl_ClickToHide_54.bind(this));
		
		function fl_ClickToHide_54() {
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_NJ_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_34);
		
		function fl_ClickToGoToWebPage_34() {
			window.open("mailto:kristen.cayton@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_NJ_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_35);
		
		function fl_ClickToGoToWebPage_35() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* NEVADA
		Click STATE to show card.
		*/
		this.Inst_NV_btn.addEventListener("click", fl_ClickToHide_59.bind(this));
		
		function fl_ClickToHide_59() {
			this.Inst_X_NV_Contact_btn.visible = true;
			this.Inst_NV_Email_btn.visible = true;
			this.Inst_NV_Phone_btn.visible = true;
			this.Inst_NV_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_NV_Contact_btn.addEventListener("click", fl_ClickToHide_60.bind(this));
		
		function fl_ClickToHide_60() {
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_NV_Contact_mc.addEventListener("click", fl_ClickToHide_61.bind(this));
		
		function fl_ClickToHide_61() {
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_NV_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_38);
		
		function fl_ClickToGoToWebPage_38() {
			window.open("mailto:kristen.cayton@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_NV_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_39);
		
		function fl_ClickToGoToWebPage_39() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		
		/* NEW YORK
		Click STATE to show card.
		*/
		this.Inst_NY_btn.addEventListener("click", fl_ClickToHide_62.bind(this));
		
		function fl_ClickToHide_62() {
			this.Inst_X_NY_Contact_btn.visible = true;
			this.Inst_NY_ENY_Email_btn.visible = true;
			this.Inst_NY_ENY_Phone_btn.visible = true;
			this.Inst_NY_WNY_Email_btn.visible = true;
			this.Inst_NY_WNY_Phone_btn.visible = true;
			this.Inst_NY_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_NY_Contact_btn.addEventListener("click", fl_ClickToHide_63.bind(this));
		
		function fl_ClickToHide_63() {
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_NY_Contact_mc.addEventListener("click", fl_ClickToHide_64.bind(this));
		
		function fl_ClickToHide_64() {
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL - ENY */
		this.Inst_NY_ENY_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_40);
		
		function fl_ClickToGoToWebPage_40() {
			window.open("mailto:hayley.davis@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE - ENY */
		this.Inst_NY_ENY_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_41);
		
		function fl_ClickToGoToWebPage_41() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		/* Click to Go to Web Page - EMAIL - WNY */
		this.Inst_NY_WNY_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_42);
		
		function fl_ClickToGoToWebPage_42() {
			window.open("mailto:michelle.beck2@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE - WNY */
		this.Inst_NY_WNY_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_43);
		
		function fl_ClickToGoToWebPage_43() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		
		
		/* SOUTH CAROLINA
		Click STATE to show card.
		*/
		this.Inst_SC_btn.addEventListener("click", fl_ClickToHide_65.bind(this));
		
		function fl_ClickToHide_65() {
			this.Inst_X_SC_Contact_btn.visible = true;
			this.Inst_SC_Email_btn.visible = true;
			this.Inst_SC_Phone_btn.visible = true;
			this.Inst_SC_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_SC_Contact_btn.addEventListener("click", fl_ClickToHide_66.bind(this));
		
		function fl_ClickToHide_66() {
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card */
		this.Inst_SC_Contact_mc.addEventListener("click", fl_ClickToHide_67.bind(this));
		
		function fl_ClickToHide_67() {
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_SC_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_44);
		
		function fl_ClickToGoToWebPage_44() {
			window.open("mailto:laura.livingston@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_SC_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_45);
		
		function fl_ClickToGoToWebPage_45() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		
		
		/* TENNESSEE
		Click STATE to show card. */
		this.Inst_TN_btn.addEventListener("click", fl_ClickToHide_68.bind(this));
		
		function fl_ClickToHide_68() {
			this.Inst_X_TN_Contact_btn.visible = true;
			this.Inst_TN_Email_btn.visible = true;
			this.Inst_TN_Phone_btn.visible = true;
			this.Inst_TN_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_TN_Contact_btn.addEventListener("click", fl_ClickToHide_69.bind(this));
		
		function fl_ClickToHide_69() {
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_TN_Contact_mc.addEventListener("click", fl_ClickToHide_70.bind(this));
		
		function fl_ClickToHide_70() {
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_TN_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_46);
		
		function fl_ClickToGoToWebPage_46() {
			window.open("mailto:ashley.boggs@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_TN_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_47);
		
		function fl_ClickToGoToWebPage_47() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		
		/* TEXAS
		Click STATE to show card.
		*/
		this.Inst_TX_btn.addEventListener("click", fl_ClickToHide_71.bind(this));
		
		function fl_ClickToHide_71() {
			this.Inst_X_TX_Contact_btn.visible = true;
			this.Inst_TX_Email_btn.visible = true;
			this.Inst_TX_Phone_btn.visible = true;
			this.Inst_TX_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_TX_Contact_btn.addEventListener("click", fl_ClickToHide_72.bind(this));
		
		function fl_ClickToHide_72() {
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_TX_Contact_mc.addEventListener("click", fl_ClickToHide_73.bind(this));
		
		function fl_ClickToHide_73() {
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_TX_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_48);
		
		function fl_ClickToGoToWebPage_48() {
			window.open("mailto:gregory.chandler@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_TX_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_49);
		
		function fl_ClickToGoToWebPage_49() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		
		
		
		/* VIRGINIA
		Click STATE to show card. */
		this.Inst_VA_btn.addEventListener("click", fl_ClickToHide_74.bind(this));
		
		function fl_ClickToHide_74() {
			this.Inst_X_VA_Contact_btn.visible = true;
			this.Inst_VA_Email_btn.visible = true;
			this.Inst_VA_Phone_btn.visible = true;
			this.Inst_VA_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_VA_Contact_btn.addEventListener("click", fl_ClickToHide_75.bind(this));
		
		function fl_ClickToHide_75() {
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_VA_Contact_mc.addEventListener("click", fl_ClickToHide_76.bind(this));
		
		function fl_ClickToHide_76() {
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_VA_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_50);
		
		function fl_ClickToGoToWebPage_50() {
			window.open("mailto:nate.levine@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		
		this.Inst_VA_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_51);
		
		function fl_ClickToGoToWebPage_51() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		
		/* WASHINGTON
		Click STATE to show card.
		*/
		this.Inst_WA_btn.addEventListener("click", fl_ClickToHide_77.bind(this));
		
		function fl_ClickToHide_77() {
			this.Inst_X_WA_Contact_btn.visible = true;
			this.Inst_WA_Email_btn.visible = true;
			this.Inst_WA_Phone_btn.visible = true;
			this.Inst_WA_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_WA_Contact_btn.addEventListener("click", fl_ClickToHide_78.bind(this));
		
		function fl_ClickToHide_78() {
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card*/
		this.Inst_WA_Contact_mc.addEventListener("click", fl_ClickToHide_79.bind(this));
		
		function fl_ClickToHide_79() {
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_WA_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_52);
		
		function fl_ClickToGoToWebPage_52() {
			window.open("mailto:hayley.davis@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_WA_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_53);
		
		function fl_ClickToGoToWebPage_53() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		/* WISCONSINt
		Click STATE to show card.
		*/
		this.Inst_WI_btn.addEventListener("click", fl_ClickToHide_80.bind(this));
		
		function fl_ClickToHide_80() {
			this.Inst_X_WI_Contact_btn.visible = true;
			this.Inst_WI_Email_btn.visible = true;
			this.Inst_WI_Phone_btn.visible = true;
			this.Inst_WI_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card. */
		this.Inst_X_WI_Contact_btn.addEventListener("click", fl_ClickToHide_81.bind(this));
		
		function fl_ClickToHide_81() {
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_WI_Contact_mc.addEventListener("click", fl_ClickToHide_82.bind(this));
		
		function fl_ClickToHide_82() {
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_WI_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_54);
		
		function fl_ClickToGoToWebPage_54() {
			window.open("mailto:ashley.boggs@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		this.Inst_WI_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_55);
		
		function fl_ClickToGoToWebPage_55() {
			window.open("tel:757-473-2737", "_blank");
		}
		
		
		
		
		
		/* WEST VIRGINIA
		Click STATE to show card.
		*/
		this.Inst_WV_btn.addEventListener("click", fl_ClickToHide_83.bind(this));
		
		function fl_ClickToHide_83() {
			this.Inst_X_WV_Contact_btn.visible = true;
			this.Inst_WV_Email_btn.visible = true;
			this.Inst_WV_Phone_btn.visible = true;
			this.Inst_WV_Contact_mc.visible = true;
		
			/* Hide all other cards */
			this.Inst_X_AR_Contact_btn.visible = false;
			this.Inst_AR_Email_btn.visible = false;
			this.Inst_AR_Phone_btn.visible = false;
			this.Inst_AR_Contact_mc.visible = false;
		
			this.Inst_X_CA_Contact_btn.visible = false;
			this.Inst_CA_Email_btn.visible = false;
			this.Inst_CA_Phone_btn.visible = false;
			this.Inst_CA_Contact_mc.visible = false;
		
			this.Inst_X_CO_Contact_btn.visible = false;
			this.Inst_CO_Email_btn.visible = false;
			this.Inst_CO_Phone_btn.visible = false;
			this.Inst_CO_Contact_mc.visible = false;
		
			this.Inst_X_DC_Contact_btn.visible = false;
			this.Inst_DC_Email_btn.visible = false;
			this.Inst_DC_Phone_btn.visible = false;
			this.Inst_DC_Contact_mc.visible = false;
		
			this.Inst_X_FL_Contact_btn.visible = false;
			this.Inst_FL_Email_btn.visible = false;
			this.Inst_FL_Phone_btn.visible = false;
			this.Inst_FL_Contact_mc.visible = false;
		
			this.Inst_X_GA_Contact_btn.visible = false;
			this.Inst_GA_Email_btn.visible = false;
			this.Inst_GA_Phone_btn.visible = false;
			this.Inst_GA_Contact_mc.visible = false;
		
			this.Inst_X_IA_Contact_btn.visible = false;
			this.Inst_IA_Email_btn.visible = false;
			this.Inst_IA_Phone_btn.visible = false;
			this.Inst_IA_Contact_mc.visible = false;
		
			this.Inst_X_IN_Contact_btn.visible = false;
			this.Inst_IN_Email_btn.visible = false;
			this.Inst_IN_Phone_btn.visible = false;
			this.Inst_IN_Contact_mc.visible = false;
		
			this.Inst_X_KY_Contact_btn.visible = false;
			this.Inst_KY_Email_btn.visible = false;
			this.Inst_KY_Phone_btn.visible = false;
			this.Inst_KY_Contact_mc.visible = false;
		
			this.Inst_X_LA_Contact_btn.visible = false;
			this.Inst_LA_Email_btn.visible = false;
			this.Inst_LA_Phone_btn.visible = false;
			this.Inst_LA_Contact_mc.visible = false;
		
			this.Inst_X_MD_Contact_btn.visible = false;
			this.Inst_MD_Email_btn.visible = false;
			this.Inst_MD_Phone_btn.visible = false;
			this.Inst_MD_Contact_mc.visible = false;
		
			this.Inst_X_MN_Contact_btn.visible = false;
			this.Inst_MN_Email_btn.visible = false;
			this.Inst_MN_Phone_btn.visible = false;
			this.Inst_MN_Contact_mc.visible = false;
		
			this.Inst_X_NC_Contact_btn.visible = false;
			this.Inst_NC_Email_btn.visible = false;
			this.Inst_NC_Phone_btn.visible = false;
			this.Inst_NC_Contact_mc.visible = false;
		
			this.Inst_X_NJ_Contact_btn.visible = false;
			this.Inst_NJ_Email_btn.visible = false;
			this.Inst_NJ_Phone_btn.visible = false;
			this.Inst_NJ_Contact_mc.visible = false;
		
			this.Inst_X_NV_Contact_btn.visible = false;
			this.Inst_NV_Email_btn.visible = false;
			this.Inst_NV_Phone_btn.visible = false;
			this.Inst_NV_Contact_mc.visible = false;
		
			this.Inst_X_NY_Contact_btn.visible = false;
			this.Inst_NY_ENY_Email_btn.visible = false;
			this.Inst_NY_ENY_Phone_btn.visible = false;
			this.Inst_NY_WNY_Email_btn.visible = false;
			this.Inst_NY_WNY_Phone_btn.visible = false;
			this.Inst_NY_Contact_mc.visible = false;
		
			this.Inst_X_SC_Contact_btn.visible = false;
			this.Inst_SC_Email_btn.visible = false;
			this.Inst_SC_Phone_btn.visible = false;
			this.Inst_SC_Contact_mc.visible = false;
		
			this.Inst_X_TN_Contact_btn.visible = false;
			this.Inst_TN_Email_btn.visible = false;
			this.Inst_TN_Phone_btn.visible = false;
			this.Inst_TN_Contact_mc.visible = false;
		
			this.Inst_X_TX_Contact_btn.visible = false;
			this.Inst_TX_Email_btn.visible = false;
			this.Inst_TX_Phone_btn.visible = false;
			this.Inst_TX_Contact_mc.visible = false;
		
			this.Inst_X_VA_Contact_btn.visible = false;
			this.Inst_VA_Email_btn.visible = false;
			this.Inst_VA_Phone_btn.visible = false;
			this.Inst_VA_Contact_mc.visible = false;
		
			this.Inst_X_WA_Contact_btn.visible = false;
			this.Inst_WA_Email_btn.visible = false;
			this.Inst_WA_Phone_btn.visible = false;
			this.Inst_WA_Contact_mc.visible = false;
		
			this.Inst_X_WI_Contact_btn.visible = false;
			this.Inst_WI_Email_btn.visible = false;
			this.Inst_WI_Phone_btn.visible = false;
			this.Inst_WI_Contact_mc.visible = false;
		}
		
		/* Click X to Hide card */
		this.Inst_X_WV_Contact_btn.addEventListener("click", fl_ClickToHide_84.bind(this));
		
		function fl_ClickToHide_84()
		{
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click card to Hide card. */
		this.Inst_WV_Contact_mc.addEventListener("click", fl_ClickToHide_85.bind(this));
		
		function fl_ClickToHide_85()
		{
			this.Inst_X_WV_Contact_btn.visible = false;
			this.Inst_WV_Email_btn.visible = false;
			this.Inst_WV_Phone_btn.visible = false;
			this.Inst_WV_Contact_mc.visible = false;
		}
		
		/* Click to Go to Web Page - EMAIL */
		this.Inst_WV_Email_btn.addEventListener("click", fl_ClickToGoToWebPage_56);
		
		function fl_ClickToGoToWebPage_56() {
			window.open("mailto:hannah.billings@anthem.com", "_blank");
		}
		
		/* Click to Go to Web Page - PHONE */
		
		this.Inst_WV_Phone_btn.addEventListener("click", fl_ClickToGoToWebPage_57);
		
		function fl_ClickToGoToWebPage_57() {
			window.open("tel:757-473-2737", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Master_X
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2B53A").ss(1,1,1).p("AAAAAIggAiAAAAAIAhAiAAhghIghAhAggghIAgAh");
	this.shape.setTransform(-61.95,266.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Master_Contact
	this.text = new cjs.Text("000-000-0000", "normal 500 14px 'Roboto'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(-300.9,430.7);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Name.Last@anthem.com", "normal 500 14px 'Roboto'", "#606060");
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 233;
	this.text_1.parent = this;
	this.text_1.setTransform(-301.1,395.5);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.instance = new lib.Envelope_Greysvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-325.05,405,0.1811,0.1811,0,0,0,72,57.7);

	this.instance_1 = new lib.Phone_Greysvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-325,438.05,0.1811,0.1811,0,0,0,70.2,72.6);

	this.text_2 = new cjs.Text("Title", "normal 300 12px 'Roboto'", "#606060");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 270;
	this.text_2.parent = this;
	this.text_2.setTransform(-338.6,365.7);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("Name", "normal 700 18px 'Roboto'", "#606060");
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 270;
	this.text_3.parent = this;
	this.text_3.setTransform(-338.6,341.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_3);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.949)").s().p("AqvG2QgTgBgBgTIAAtDQABgTATAAIVeAAQAVAAgBATIAANDQABATgVABg");
	this.shape_1.setTransform(-204.5804,360.3221,2.159,2.3825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(83,83,83,0.047)").s().p("A3LQSQgsAAAAgvIAA/FQAAgvAsAAMAuYAAAQArAAAAAvIAAfFQAAAvgrAAgA3tviIAAfFQAAAlAiAAMAuYAAAQAgAAABglIAA/FQgBglggAAMguYAAAQgiAAAAAlg");
	this.shape_2.setTransform(-200.6,364.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.098)").s().p("A3LQIQgiAAAAglIAA/FQAAglAiAAMAuYAAAQAgAAABAlIAAfFQgBAlggAAgA3jviIAAfFQAAAaAYABMAuYAAAQAXgBgBgaIAA/FQABgagXgBMguYAAAQgYABAAAag");
	this.shape_3.setTransform(-200.6,364.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(83,83,83,0.145)").s().p("A3LP+QgYgBAAgaIAA/FQAAgaAYgBMAuYAAAQAXABgBAaIAAfFQABAagXABgA3YviIAAfFQAAAQANABMAuYAAAQAMgBAAgQIAA/FQAAgQgMgBMguYAAAQgNABAAAQg");
	this.shape_4.setTransform(-200.6,364.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(83,83,83,0.196)").s().p("A3LP0QgNgBAAgQIAA/FQAAgQANgBMAuYAAAQAMABAAAQIAAfFQAAAQgMABgA3OviIAAfFQgBAGAEABMAuYAAAQACgBAAgGIAA/FQAAgGgCgBMguYAAAQgEABABAGg");
	this.shape_5.setTransform(-200.6,364.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(83,83,83,0.247)").s().p("A3LPqQgEgBABgGIAA/FQgBgGAEgBMAuYAAAQACABAAAGIAAfFQAAAGgCABg");
	this.shape_6.setTransform(-200.6,364.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_3},{t:this.text_2},{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	// X_AR_Contact
	this.Inst_X_AR_Contact_btn = new lib.btn_X_AR_Contact();
	this.Inst_X_AR_Contact_btn.name = "Inst_X_AR_Contact_btn";
	this.Inst_X_AR_Contact_btn.parent = this;
	this.Inst_X_AR_Contact_btn.setTransform(436,281.2);
	new cjs.ButtonHelper(this.Inst_X_AR_Contact_btn, 0, 1, 2, false, new lib.btn_X_AR_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_AR_Contact_btn).wait(1));

	// AR_Email
	this.Inst_AR_Email_btn = new lib.btn_AR_Email();
	this.Inst_AR_Email_btn.name = "Inst_AR_Email_btn";
	this.Inst_AR_Email_btn.parent = this;
	this.Inst_AR_Email_btn.setTransform(313.6,418.65);
	new cjs.ButtonHelper(this.Inst_AR_Email_btn, 0, 1, 2, false, new lib.btn_AR_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_AR_Email_btn).wait(1));

	// AR_Phone
	this.Inst_AR_Phone_btn = new lib.btn_AR_Phone();
	this.Inst_AR_Phone_btn.name = "Inst_AR_Phone_btn";
	this.Inst_AR_Phone_btn.parent = this;
	this.Inst_AR_Phone_btn.setTransform(312.6,450.65);
	new cjs.ButtonHelper(this.Inst_AR_Phone_btn, 0, 1, 2, false, new lib.btn_AR_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_AR_Phone_btn).wait(1));

	// AR_Contact
	this.Inst_AR_Contact_mc = new lib.mc_AR_Contact();
	this.Inst_AR_Contact_mc.name = "Inst_AR_Contact_mc";
	this.Inst_AR_Contact_mc.parent = this;
	this.Inst_AR_Contact_mc.setTransform(295.35,377.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_AR_Contact_mc).wait(1));

	// X_CA_Contact
	this.Inst_X_CA_Contact_btn = new lib.btn_X_CA_Contact();
	this.Inst_X_CA_Contact_btn.name = "Inst_X_CA_Contact_btn";
	this.Inst_X_CA_Contact_btn.parent = this;
	this.Inst_X_CA_Contact_btn.setTransform(380.05,45.25);
	new cjs.ButtonHelper(this.Inst_X_CA_Contact_btn, 0, 1, 2, false, new lib.btn_X_CA_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_CA_Contact_btn).wait(1));

	// CA_Email
	this.Inst_CA_Email_btn = new lib.btn_CA_Email();
	this.Inst_CA_Email_btn.name = "Inst_CA_Email_btn";
	this.Inst_CA_Email_btn.parent = this;
	this.Inst_CA_Email_btn.setTransform(255.5,182.55);
	new cjs.ButtonHelper(this.Inst_CA_Email_btn, 0, 1, 2, false, new lib.btn_CA_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_CA_Email_btn).wait(1));

	// CA_Phone
	this.Inst_CA_Phone_btn = new lib.btn_CA_Phone();
	this.Inst_CA_Phone_btn.name = "Inst_CA_Phone_btn";
	this.Inst_CA_Phone_btn.parent = this;
	this.Inst_CA_Phone_btn.setTransform(254.5,214.55);
	new cjs.ButtonHelper(this.Inst_CA_Phone_btn, 0, 1, 2, false, new lib.btn_CA_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_CA_Phone_btn).wait(1));

	// CA_Contact
	this.Inst_CA_Contact_mc = new lib.mc_CA_Contact();
	this.Inst_CA_Contact_mc.name = "Inst_CA_Contact_mc";
	this.Inst_CA_Contact_mc.parent = this;
	this.Inst_CA_Contact_mc.setTransform(239.4,141.35);

	this.timeline.addTween(cjs.Tween.get(this.Inst_CA_Contact_mc).wait(1));

	// X_CO_Contact
	this.Inst_X_CO_Contact_btn = new lib.btn_X_CO_Contact();
	this.Inst_X_CO_Contact_btn.name = "Inst_X_CO_Contact_btn";
	this.Inst_X_CO_Contact_btn.parent = this;
	this.Inst_X_CO_Contact_btn.setTransform(639,156.2);
	new cjs.ButtonHelper(this.Inst_X_CO_Contact_btn, 0, 1, 2, false, new lib.btn_X_CO_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_CO_Contact_btn).wait(1));

	// CO_Email
	this.Inst_CO_Email_btn = new lib.btn_CO_Email();
	this.Inst_CO_Email_btn.name = "Inst_CO_Email_btn";
	this.Inst_CO_Email_btn.parent = this;
	this.Inst_CO_Email_btn.setTransform(515.65,293.6);
	new cjs.ButtonHelper(this.Inst_CO_Email_btn, 0, 1, 2, false, new lib.btn_CO_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_CO_Email_btn).wait(1));

	// CO_Phone
	this.Inst_CO_Phone_btn = new lib.btn_CO_Phone();
	this.Inst_CO_Phone_btn.name = "Inst_CO_Phone_btn";
	this.Inst_CO_Phone_btn.parent = this;
	this.Inst_CO_Phone_btn.setTransform(514.65,326.6);
	new cjs.ButtonHelper(this.Inst_CO_Phone_btn, 0, 1, 2, false, new lib.btn_CO_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_CO_Phone_btn).wait(1));

	// CO_Contact
	this.Inst_CO_Contact_mc = new lib.mc_CO_Contact();
	this.Inst_CO_Contact_mc.name = "Inst_CO_Contact_mc";
	this.Inst_CO_Contact_mc.parent = this;
	this.Inst_CO_Contact_mc.setTransform(498.35,252.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_CO_Contact_mc).wait(1));

	// X_DC_Contact
	this.Inst_X_DC_Contact_btn = new lib.btn_X_DC_Contact();
	this.Inst_X_DC_Contact_btn.name = "Inst_X_DC_Contact_btn";
	this.Inst_X_DC_Contact_btn.parent = this;
	this.Inst_X_DC_Contact_btn.setTransform(686.8,201.25,1.2365,1.2365);
	new cjs.ButtonHelper(this.Inst_X_DC_Contact_btn, 0, 1, 2, false, new lib.btn_X_DC_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_DC_Contact_btn).wait(1));

	// DC_Email
	this.Inst_DC_Email_btn = new lib.btn_DC_Email();
	this.Inst_DC_Email_btn.name = "Inst_DC_Email_btn";
	this.Inst_DC_Email_btn.parent = this;
	this.Inst_DC_Email_btn.setTransform(577.35,339.55,1.1072,1.1072);
	new cjs.ButtonHelper(this.Inst_DC_Email_btn, 0, 1, 2, false, new lib.btn_DC_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_DC_Email_btn).wait(1));

	// DC_Phone
	this.Inst_DC_Phone_btn = new lib.btn_DC_Phone();
	this.Inst_DC_Phone_btn.name = "Inst_DC_Phone_btn";
	this.Inst_DC_Phone_btn.parent = this;
	this.Inst_DC_Phone_btn.setTransform(577.45,370.65,1.1072,1.1072);
	new cjs.ButtonHelper(this.Inst_DC_Phone_btn, 0, 1, 2, false, new lib.btn_DC_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_DC_Phone_btn).wait(1));

	// DC_Contact
	this.Inst_DC_Contact_mc = new lib.mc_DC_Contact();
	this.Inst_DC_Contact_mc.name = "Inst_DC_Contact_mc";
	this.Inst_DC_Contact_mc.parent = this;
	this.Inst_DC_Contact_mc.setTransform(544.05,295.1);

	this.timeline.addTween(cjs.Tween.get(this.Inst_DC_Contact_mc).wait(1));

	// X_FL_Contact
	this.Inst_X_FL_Contact_btn = new lib.btn_X_FL_Contact();
	this.Inst_X_FL_Contact_btn.name = "Inst_X_FL_Contact_btn";
	this.Inst_X_FL_Contact_btn.parent = this;
	this.Inst_X_FL_Contact_btn.setTransform(559,319.2);
	new cjs.ButtonHelper(this.Inst_X_FL_Contact_btn, 0, 1, 2, false, new lib.btn_X_FL_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_FL_Contact_btn).wait(1));

	// FL_Email
	this.Inst_FL_Email_btn = new lib.btn_FL_Email();
	this.Inst_FL_Email_btn.name = "Inst_FL_Email_btn";
	this.Inst_FL_Email_btn.parent = this;
	this.Inst_FL_Email_btn.setTransform(435.4,455.5);
	new cjs.ButtonHelper(this.Inst_FL_Email_btn, 0, 1, 2, false, new lib.btn_FL_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_FL_Email_btn).wait(1));

	// FL_Phone
	this.Inst_FL_Phone_btn = new lib.btn_FL_Phone();
	this.Inst_FL_Phone_btn.name = "Inst_FL_Phone_btn";
	this.Inst_FL_Phone_btn.parent = this;
	this.Inst_FL_Phone_btn.setTransform(434.5,489.45);
	new cjs.ButtonHelper(this.Inst_FL_Phone_btn, 0, 1, 2, false, new lib.btn_FL_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_FL_Phone_btn).wait(1));

	// FL_Contact
	this.Inst_FL_Contact_mc = new lib.mc_FL_Contact();
	this.Inst_FL_Contact_mc.name = "Inst_FL_Contact_mc";
	this.Inst_FL_Contact_mc.parent = this;
	this.Inst_FL_Contact_mc.setTransform(418.35,415.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_FL_Contact_mc).wait(1));

	// X_GA_Contact
	this.Inst_X_GA_Contact_btn = new lib.btn_X_GA_Contact();
	this.Inst_X_GA_Contact_btn.name = "Inst_X_GA_Contact_btn";
	this.Inst_X_GA_Contact_btn.parent = this;
	this.Inst_X_GA_Contact_btn.setTransform(587,280.2);
	new cjs.ButtonHelper(this.Inst_X_GA_Contact_btn, 0, 1, 2, false, new lib.btn_X_GA_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_GA_Contact_btn).wait(1));

	// GA_Email
	this.Inst_GA_Email_btn = new lib.btn_GA_Email();
	this.Inst_GA_Email_btn.name = "Inst_GA_Email_btn";
	this.Inst_GA_Email_btn.parent = this;
	this.Inst_GA_Email_btn.setTransform(463.5,418.45);
	new cjs.ButtonHelper(this.Inst_GA_Email_btn, 0, 1, 2, false, new lib.btn_GA_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_GA_Email_btn).wait(1));

	// GA_Phone
	this.Inst_GA_Phone_btn = new lib.btn_GA_Phone();
	this.Inst_GA_Phone_btn.name = "Inst_GA_Phone_btn";
	this.Inst_GA_Phone_btn.parent = this;
	this.Inst_GA_Phone_btn.setTransform(462.6,452.5);
	new cjs.ButtonHelper(this.Inst_GA_Phone_btn, 0, 1, 2, false, new lib.btn_GA_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_GA_Phone_btn).wait(1));

	// GA_Contact
	this.Inst_GA_Contact_mc = new lib.mc_GA_Contact();
	this.Inst_GA_Contact_mc.name = "Inst_GA_Contact_mc";
	this.Inst_GA_Contact_mc.parent = this;
	this.Inst_GA_Contact_mc.setTransform(446.35,376.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_GA_Contact_mc).wait(1));

	// X_IA_Contact
	this.Inst_X_IA_Contact_btn = new lib.btn_X_IA_Contact();
	this.Inst_X_IA_Contact_btn.name = "Inst_X_IA_Contact_btn";
	this.Inst_X_IA_Contact_btn.parent = this;
	this.Inst_X_IA_Contact_btn.setTransform(407,81.2);
	new cjs.ButtonHelper(this.Inst_X_IA_Contact_btn, 0, 1, 2, false, new lib.btn_X_IA_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_IA_Contact_btn).wait(1));

	// IA_Email
	this.Inst_IA_Email_btn = new lib.btn_IA_Email();
	this.Inst_IA_Email_btn.name = "Inst_IA_Email_btn";
	this.Inst_IA_Email_btn.parent = this;
	this.Inst_IA_Email_btn.setTransform(285,219.5);
	new cjs.ButtonHelper(this.Inst_IA_Email_btn, 0, 1, 2, false, new lib.btn_IA_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_IA_Email_btn).wait(1));

	// IA_Phone
	this.Inst_IA_Phone_btn = new lib.btn_IA_Phone();
	this.Inst_IA_Phone_btn.name = "Inst_IA_Phone_btn";
	this.Inst_IA_Phone_btn.parent = this;
	this.Inst_IA_Phone_btn.setTransform(285,251.45);
	new cjs.ButtonHelper(this.Inst_IA_Phone_btn, 0, 1, 2, false, new lib.btn_IA_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_IA_Phone_btn).wait(1));

	// IA_Contact
	this.Inst_IA_Contact_mc = new lib.mc_IA_Contact();
	this.Inst_IA_Contact_mc.name = "Inst_IA_Contact_mc";
	this.Inst_IA_Contact_mc.parent = this;
	this.Inst_IA_Contact_mc.setTransform(266.35,177.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_IA_Contact_mc).wait(1));

	// X_IN_Contact
	this.Inst_X_IN_Contact_btn = new lib.btn_X_IN_Contact();
	this.Inst_X_IN_Contact_btn.name = "Inst_X_IN_Contact_btn";
	this.Inst_X_IN_Contact_btn.parent = this;
	this.Inst_X_IN_Contact_btn.setTransform(537,164.2);
	new cjs.ButtonHelper(this.Inst_X_IN_Contact_btn, 0, 1, 2, false, new lib.btn_X_IN_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_IN_Contact_btn).wait(1));

	// IN_Email
	this.Inst_IN_Email_btn = new lib.btn_IN_Email();
	this.Inst_IN_Email_btn.name = "Inst_IN_Email_btn";
	this.Inst_IN_Email_btn.parent = this;
	this.Inst_IN_Email_btn.setTransform(413.5,300.55);
	new cjs.ButtonHelper(this.Inst_IN_Email_btn, 0, 1, 2, false, new lib.btn_IN_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_IN_Email_btn).wait(1));

	// IN_Phone
	this.Inst_IN_Phone_btn = new lib.btn_IN_Phone();
	this.Inst_IN_Phone_btn.name = "Inst_IN_Phone_btn";
	this.Inst_IN_Phone_btn.parent = this;
	this.Inst_IN_Phone_btn.setTransform(412.5,333.55);
	new cjs.ButtonHelper(this.Inst_IN_Phone_btn, 0, 1, 2, false, new lib.btn_IN_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_IN_Phone_btn).wait(1));

	// IN_Contact
	this.Inst_IN_Contact_mc = new lib.mc_IN_Contact();
	this.Inst_IN_Contact_mc.name = "Inst_IN_Contact_mc";
	this.Inst_IN_Contact_mc.parent = this;
	this.Inst_IN_Contact_mc.setTransform(396.35,260.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_IN_Contact_mc).wait(1));

	// X_KY_Contact
	this.Inst_X_KY_Contact_btn = new lib.btn_X_KY_Contact();
	this.Inst_X_KY_Contact_btn.name = "Inst_X_KY_Contact_btn";
	this.Inst_X_KY_Contact_btn.parent = this;
	this.Inst_X_KY_Contact_btn.setTransform(522,193.2);
	new cjs.ButtonHelper(this.Inst_X_KY_Contact_btn, 0, 1, 2, false, new lib.btn_X_KY_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_KY_Contact_btn).wait(1));

	// KY_Email
	this.Inst_KY_Email_btn = new lib.btn_KY_Email();
	this.Inst_KY_Email_btn.name = "Inst_KY_Email_btn";
	this.Inst_KY_Email_btn.parent = this;
	this.Inst_KY_Email_btn.setTransform(396.5,330.55);
	new cjs.ButtonHelper(this.Inst_KY_Email_btn, 0, 1, 2, false, new lib.btn_KY_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_KY_Email_btn).wait(1));

	// KY_Phone
	this.Inst_KY_Phone_btn = new lib.btn_KY_Phone();
	this.Inst_KY_Phone_btn.name = "Inst_KY_Phone_btn";
	this.Inst_KY_Phone_btn.parent = this;
	this.Inst_KY_Phone_btn.setTransform(396.5,363.5);
	new cjs.ButtonHelper(this.Inst_KY_Phone_btn, 0, 1, 2, false, new lib.btn_KY_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_KY_Phone_btn).wait(1));

	// KY_Contact
	this.Inst_KY_Contact_mc = new lib.mc_KY_Contact();
	this.Inst_KY_Contact_mc.name = "Inst_KY_Contact_mc";
	this.Inst_KY_Contact_mc.parent = this;
	this.Inst_KY_Contact_mc.setTransform(381.35,289.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_KY_Contact_mc).wait(1));

	// X_LA_Contact
	this.Inst_X_LA_Contact_btn = new lib.btn_X_LA_Contact();
	this.Inst_X_LA_Contact_btn.name = "Inst_X_LA_Contact_btn";
	this.Inst_X_LA_Contact_btn.parent = this;
	this.Inst_X_LA_Contact_btn.setTransform(443,312.2);
	new cjs.ButtonHelper(this.Inst_X_LA_Contact_btn, 0, 1, 2, false, new lib.btn_X_LA_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_LA_Contact_btn).wait(1));

	// LA_Email
	this.Inst_LA_Email_btn = new lib.btn_LA_Email();
	this.Inst_LA_Email_btn.name = "Inst_LA_Email_btn";
	this.Inst_LA_Email_btn.parent = this;
	this.Inst_LA_Email_btn.setTransform(322.6,443.65);
	new cjs.ButtonHelper(this.Inst_LA_Email_btn, 0, 1, 2, false, new lib.btn_LA_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_LA_Email_btn).wait(1));

	// LA_Phone
	this.Inst_LA_Phone_btn = new lib.btn_LA_Phone();
	this.Inst_LA_Phone_btn.name = "Inst_LA_Phone_btn";
	this.Inst_LA_Phone_btn.parent = this;
	this.Inst_LA_Phone_btn.setTransform(322.6,477.65);
	new cjs.ButtonHelper(this.Inst_LA_Phone_btn, 0, 1, 2, false, new lib.btn_LA_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_LA_Phone_btn).wait(1));

	// LA_Contact
	this.Inst_LA_Contact_mc = new lib.mc_LA_Contact();
	this.Inst_LA_Contact_mc.name = "Inst_LA_Contact_mc";
	this.Inst_LA_Contact_mc.parent = this;
	this.Inst_LA_Contact_mc.setTransform(305.35,402.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_LA_Contact_mc).wait(1));

	// X_MD_Contact
	this.Inst_X_MD_Contact_btn = new lib.btn_X_MD_Contact();
	this.Inst_X_MD_Contact_btn.name = "Inst_X_MD_Contact_btn";
	this.Inst_X_MD_Contact_btn.parent = this;
	this.Inst_X_MD_Contact_btn.setTransform(675,142.2);
	new cjs.ButtonHelper(this.Inst_X_MD_Contact_btn, 0, 1, 2, false, new lib.btn_X_MD_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_MD_Contact_btn).wait(1));

	// MD_Email
	this.Inst_MD_Email_btn = new lib.btn_MD_Email();
	this.Inst_MD_Email_btn.name = "Inst_MD_Email_btn";
	this.Inst_MD_Email_btn.parent = this;
	this.Inst_MD_Email_btn.setTransform(552.5,279.4);
	new cjs.ButtonHelper(this.Inst_MD_Email_btn, 0, 1, 2, false, new lib.btn_MD_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_MD_Email_btn).wait(1));

	// MD_Phone
	this.Inst_MD_Phone_btn = new lib.btn_MD_Phone();
	this.Inst_MD_Phone_btn.name = "Inst_MD_Phone_btn";
	this.Inst_MD_Phone_btn.parent = this;
	this.Inst_MD_Phone_btn.setTransform(551.5,312.45);
	new cjs.ButtonHelper(this.Inst_MD_Phone_btn, 0, 1, 2, false, new lib.btn_MD_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_MD_Phone_btn).wait(1));

	// MD_Contact
	this.Inst_MD_Contact_mc = new lib.mc_MD_Contact();
	this.Inst_MD_Contact_mc.name = "Inst_MD_Contact_mc";
	this.Inst_MD_Contact_mc.parent = this;
	this.Inst_MD_Contact_mc.setTransform(534.35,238.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_MD_Contact_mc).wait(1));

	// X_MN_Contact
	this.Inst_X_MN_Contact_btn = new lib.btn_X_MN_Contact();
	this.Inst_X_MN_Contact_btn.name = "Inst_X_MN_Contact_btn";
	this.Inst_X_MN_Contact_btn.parent = this;
	this.Inst_X_MN_Contact_btn.setTransform(399,27.2);
	new cjs.ButtonHelper(this.Inst_X_MN_Contact_btn, 0, 1, 2, false, new lib.btn_X_MN_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_MN_Contact_btn).wait(1));

	// MN_Email
	this.Inst_MN_Email_btn = new lib.btn_MN_Email();
	this.Inst_MN_Email_btn.name = "Inst_MN_Email_btn";
	this.Inst_MN_Email_btn.parent = this;
	this.Inst_MN_Email_btn.setTransform(275.6,164.55);
	new cjs.ButtonHelper(this.Inst_MN_Email_btn, 0, 1, 2, false, new lib.btn_MN_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_MN_Email_btn).wait(1));

	// MN_Phone
	this.Inst_MN_Phone_btn = new lib.btn_MN_Phone();
	this.Inst_MN_Phone_btn.name = "Inst_MN_Phone_btn";
	this.Inst_MN_Phone_btn.parent = this;
	this.Inst_MN_Phone_btn.setTransform(274.6,197.6);
	new cjs.ButtonHelper(this.Inst_MN_Phone_btn, 0, 1, 2, false, new lib.btn_MN_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_MN_Phone_btn).wait(1));

	// MN_Contact
	this.Inst_MN_Contact_mc = new lib.mc_MN_Contact();
	this.Inst_MN_Contact_mc.name = "Inst_MN_Contact_mc";
	this.Inst_MN_Contact_mc.parent = this;
	this.Inst_MN_Contact_mc.setTransform(258.35,123.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_MN_Contact_mc).wait(1));

	// X_NC_Contact
	this.Inst_X_NC_Contact_btn = new lib.btn_X_NC_Contact();
	this.Inst_X_NC_Contact_btn.name = "Inst_X_NC_Contact_btn";
	this.Inst_X_NC_Contact_btn.parent = this;
	this.Inst_X_NC_Contact_btn.setTransform(607.85,284.7);
	new cjs.ButtonHelper(this.Inst_X_NC_Contact_btn, 0, 1, 2, false, new lib.btn_X_NC_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_NC_Contact_btn).wait(1));

	// NC_Email
	this.Inst_NC_Email_btn = new lib.btn_NC_Email();
	this.Inst_NC_Email_btn.name = "Inst_NC_Email_btn";
	this.Inst_NC_Email_btn.parent = this;
	this.Inst_NC_Email_btn.setTransform(473.45,421.45);
	new cjs.ButtonHelper(this.Inst_NC_Email_btn, 0, 1, 2, false, new lib.btn_NC_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NC_Email_btn).wait(1));

	// NC_Phone
	this.Inst_NC_Phone_btn = new lib.btn_NC_Phone();
	this.Inst_NC_Phone_btn.name = "Inst_NC_Phone_btn";
	this.Inst_NC_Phone_btn.parent = this;
	this.Inst_NC_Phone_btn.setTransform(473.35,454.4);
	new cjs.ButtonHelper(this.Inst_NC_Phone_btn, 0, 1, 2, false, new lib.btn_NC_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NC_Phone_btn).wait(1));

	// NC_Contact
	this.Inst_NC_Contact_mc = new lib.mc_NC_Contact();
	this.Inst_NC_Contact_mc.name = "Inst_NC_Contact_mc";
	this.Inst_NC_Contact_mc.parent = this;
	this.Inst_NC_Contact_mc.setTransform(467.2,380.8);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NC_Contact_mc).wait(1));

	// X_NJ_Contact
	this.Inst_X_NJ_Contact_btn = new lib.btn_X_NJ_Contact();
	this.Inst_X_NJ_Contact_btn.name = "Inst_X_NJ_Contact_btn";
	this.Inst_X_NJ_Contact_btn.parent = this;
	this.Inst_X_NJ_Contact_btn.setTransform(734,132.2);
	new cjs.ButtonHelper(this.Inst_X_NJ_Contact_btn, 0, 1, 2, false, new lib.btn_X_NJ_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_NJ_Contact_btn).wait(1));

	// NJ_Email
	this.Inst_NJ_Email_btn = new lib.btn_NJ_Email();
	this.Inst_NJ_Email_btn.name = "Inst_NJ_Email_btn";
	this.Inst_NJ_Email_btn.parent = this;
	this.Inst_NJ_Email_btn.setTransform(611.5,271.55);
	new cjs.ButtonHelper(this.Inst_NJ_Email_btn, 0, 1, 2, false, new lib.btn_NJ_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NJ_Email_btn).wait(1));

	// NJ_Phone
	this.Inst_NJ_Phone_btn = new lib.btn_NJ_Phone();
	this.Inst_NJ_Phone_btn.name = "Inst_NJ_Phone_btn";
	this.Inst_NJ_Phone_btn.parent = this;
	this.Inst_NJ_Phone_btn.setTransform(611.5,301.55);
	new cjs.ButtonHelper(this.Inst_NJ_Phone_btn, 0, 1, 2, false, new lib.btn_NJ_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NJ_Phone_btn).wait(1));

	// NJ_Contact
	this.Inst_NJ_Contact_mc = new lib.mc_NJ_Contact();
	this.Inst_NJ_Contact_mc.name = "Inst_NJ_Contact_mc";
	this.Inst_NJ_Contact_mc.parent = this;
	this.Inst_NJ_Contact_mc.setTransform(593.35,228.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NJ_Contact_mc).wait(1));

	// X_NV_Contact
	this.Inst_X_NV_Contact_btn = new lib.btn_X_NV_Contact();
	this.Inst_X_NV_Contact_btn.name = "Inst_X_NV_Contact_btn";
	this.Inst_X_NV_Contact_btn.parent = this;
	this.Inst_X_NV_Contact_btn.setTransform(459,122.2);
	new cjs.ButtonHelper(this.Inst_X_NV_Contact_btn, 0, 1, 2, false, new lib.btn_X_NV_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_NV_Contact_btn).wait(1));

	// NV_Email
	this.Inst_NV_Email_btn = new lib.btn_NV_Email();
	this.Inst_NV_Email_btn.name = "Inst_NV_Email_btn";
	this.Inst_NV_Email_btn.parent = this;
	this.Inst_NV_Email_btn.setTransform(334.5,260.55);
	new cjs.ButtonHelper(this.Inst_NV_Email_btn, 0, 1, 2, false, new lib.btn_NV_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NV_Email_btn).wait(1));

	// NV_Phone
	this.Inst_NV_Phone_btn = new lib.btn_NV_Phone();
	this.Inst_NV_Phone_btn.name = "Inst_NV_Phone_btn";
	this.Inst_NV_Phone_btn.parent = this;
	this.Inst_NV_Phone_btn.setTransform(334.5,291.5);
	new cjs.ButtonHelper(this.Inst_NV_Phone_btn, 0, 1, 2, false, new lib.btn_NV_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NV_Phone_btn).wait(1));

	// NV_Contact
	this.Inst_NV_Contact_mc = new lib.mc_NV_Contact();
	this.Inst_NV_Contact_mc.name = "Inst_NV_Contact_mc";
	this.Inst_NV_Contact_mc.parent = this;
	this.Inst_NV_Contact_mc.setTransform(318.35,218.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NV_Contact_mc).wait(1));

	// X_NY_Contact
	this.Inst_X_NY_Contact_btn = new lib.btn_X_NY_Contact();
	this.Inst_X_NY_Contact_btn.name = "Inst_X_NY_Contact_btn";
	this.Inst_X_NY_Contact_btn.parent = this;
	this.Inst_X_NY_Contact_btn.setTransform(656.35,81.35);
	new cjs.ButtonHelper(this.Inst_X_NY_Contact_btn, 0, 1, 2, false, new lib.btn_X_NY_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_NY_Contact_btn).wait(1));

	// NY_ENY_Email
	this.Inst_NY_ENY_Email_btn = new lib.btn_NY_ENY_Email();
	this.Inst_NY_ENY_Email_btn.name = "Inst_NY_ENY_Email_btn";
	this.Inst_NY_ENY_Email_btn.parent = this;
	this.Inst_NY_ENY_Email_btn.setTransform(532.65,213.6);
	new cjs.ButtonHelper(this.Inst_NY_ENY_Email_btn, 0, 1, 2, false, new lib.btn_NY_ENY_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NY_ENY_Email_btn).wait(1));

	// NY_ENY_Phone
	this.Inst_NY_ENY_Phone_btn = new lib.btn_NY_ENY_Phone();
	this.Inst_NY_ENY_Phone_btn.name = "Inst_NY_ENY_Phone_btn";
	this.Inst_NY_ENY_Phone_btn.parent = this;
	this.Inst_NY_ENY_Phone_btn.setTransform(531.65,245.6);
	new cjs.ButtonHelper(this.Inst_NY_ENY_Phone_btn, 0, 1, 2, false, new lib.btn_NY_ENY_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NY_ENY_Phone_btn).wait(1));

	// NY_WNY_Email
	this.Inst_NY_WNY_Email_btn = new lib.btn_NY_WNY_Email();
	this.Inst_NY_WNY_Email_btn.name = "Inst_NY_WNY_Email_btn";
	this.Inst_NY_WNY_Email_btn.parent = this;
	this.Inst_NY_WNY_Email_btn.setTransform(532.65,425.65);
	new cjs.ButtonHelper(this.Inst_NY_WNY_Email_btn, 0, 1, 2, false, new lib.btn_NY_WNY_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NY_WNY_Email_btn).wait(1));

	// NY_WNY_Phone
	this.Inst_NY_WNY_Phone_btn = new lib.btn_NY_WNY_Phone();
	this.Inst_NY_WNY_Phone_btn.name = "Inst_NY_WNY_Phone_btn";
	this.Inst_NY_WNY_Phone_btn.parent = this;
	this.Inst_NY_WNY_Phone_btn.setTransform(531.65,458.65);
	new cjs.ButtonHelper(this.Inst_NY_WNY_Phone_btn, 0, 1, 2, false, new lib.btn_NY_WNY_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NY_WNY_Phone_btn).wait(1));

	// NY_Contact
	this.Inst_NY_Contact_mc = new lib.mc_NY_Contact();
	this.Inst_NY_Contact_mc.name = "Inst_NY_Contact_mc";
	this.Inst_NY_Contact_mc.parent = this;
	this.Inst_NY_Contact_mc.setTransform(515.5,265.15,1,1,0,0,0,0,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NY_Contact_mc).wait(1));

	// X_SC_Contact
	this.Inst_X_SC_Contact_btn = new lib.btn_X_SC_Contact();
	this.Inst_X_SC_Contact_btn.name = "Inst_X_SC_Contact_btn";
	this.Inst_X_SC_Contact_btn.parent = this;
	this.Inst_X_SC_Contact_btn.setTransform(620,198.2);
	new cjs.ButtonHelper(this.Inst_X_SC_Contact_btn, 0, 1, 2, false, new lib.btn_X_SC_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_SC_Contact_btn).wait(1));

	// SC_Email
	this.Inst_SC_Email_btn = new lib.btn_SC_Email();
	this.Inst_SC_Email_btn.name = "Inst_SC_Email_btn";
	this.Inst_SC_Email_btn.parent = this;
	this.Inst_SC_Email_btn.setTransform(496.65,335.6);
	new cjs.ButtonHelper(this.Inst_SC_Email_btn, 0, 1, 2, false, new lib.btn_SC_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_SC_Email_btn).wait(1));

	// SC_Phone
	this.Inst_SC_Phone_btn = new lib.btn_SC_Phone();
	this.Inst_SC_Phone_btn.name = "Inst_SC_Phone_btn";
	this.Inst_SC_Phone_btn.parent = this;
	this.Inst_SC_Phone_btn.setTransform(496.65,367.6);
	new cjs.ButtonHelper(this.Inst_SC_Phone_btn, 0, 1, 2, false, new lib.btn_SC_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_SC_Phone_btn).wait(1));

	// SC_Contact
	this.Inst_SC_Contact_mc = new lib.mc_SC_Contact();
	this.Inst_SC_Contact_mc.name = "Inst_SC_Contact_mc";
	this.Inst_SC_Contact_mc.parent = this;
	this.Inst_SC_Contact_mc.setTransform(479.35,294.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_SC_Contact_mc).wait(1));

	// X_TN_Contact
	this.Inst_X_TN_Contact_btn = new lib.btn_X_TN_Contact();
	this.Inst_X_TN_Contact_btn.name = "Inst_X_TN_Contact_btn";
	this.Inst_X_TN_Contact_btn.parent = this;
	this.Inst_X_TN_Contact_btn.setTransform(513,235.2);
	new cjs.ButtonHelper(this.Inst_X_TN_Contact_btn, 0, 1, 2, false, new lib.btn_X_TN_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_TN_Contact_btn).wait(1));

	// TN_Email
	this.Inst_TN_Email_btn = new lib.btn_TN_Email();
	this.Inst_TN_Email_btn.name = "Inst_TN_Email_btn";
	this.Inst_TN_Email_btn.parent = this;
	this.Inst_TN_Email_btn.setTransform(389.5,372.5);
	new cjs.ButtonHelper(this.Inst_TN_Email_btn, 0, 1, 2, false, new lib.btn_TN_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_TN_Email_btn).wait(1));

	// TN_Phone
	this.Inst_TN_Phone_btn = new lib.btn_TN_Phone();
	this.Inst_TN_Phone_btn.name = "Inst_TN_Phone_btn";
	this.Inst_TN_Phone_btn.parent = this;
	this.Inst_TN_Phone_btn.setTransform(389.5,405.45);
	new cjs.ButtonHelper(this.Inst_TN_Phone_btn, 0, 1, 2, false, new lib.btn_TN_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_TN_Phone_btn).wait(1));

	// TN_Contact
	this.Inst_TN_Contact_mc = new lib.mc_TN_Contact();
	this.Inst_TN_Contact_mc.name = "Inst_TN_Contact_mc";
	this.Inst_TN_Contact_mc.parent = this;
	this.Inst_TN_Contact_mc.setTransform(372.35,331.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_TN_Contact_mc).wait(1));

	// X_TX_Contact
	this.Inst_X_TX_Contact_btn = new lib.btn_X_TX_Contact();
	this.Inst_X_TX_Contact_btn.name = "Inst_X_TX_Contact_btn";
	this.Inst_X_TX_Contact_btn.parent = this;
	this.Inst_X_TX_Contact_btn.setTransform(673,152.2);
	new cjs.ButtonHelper(this.Inst_X_TX_Contact_btn, 0, 1, 2, false, new lib.btn_X_TX_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_TX_Contact_btn).wait(1));

	// TX_Email
	this.Inst_TX_Email_btn = new lib.btn_TX_Email();
	this.Inst_TX_Email_btn.name = "Inst_TX_Email_btn";
	this.Inst_TX_Email_btn.parent = this;
	this.Inst_TX_Email_btn.setTransform(548.65,288.6);
	new cjs.ButtonHelper(this.Inst_TX_Email_btn, 0, 1, 2, false, new lib.btn_TX_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_TX_Email_btn).wait(1));

	// TX_Phone
	this.Inst_TX_Phone_btn = new lib.btn_TX_Phone();
	this.Inst_TX_Phone_btn.name = "Inst_TX_Phone_btn";
	this.Inst_TX_Phone_btn.parent = this;
	this.Inst_TX_Phone_btn.setTransform(547.65,322.6);
	new cjs.ButtonHelper(this.Inst_TX_Phone_btn, 0, 1, 2, false, new lib.btn_TX_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_TX_Phone_btn).wait(1));

	// TX_Contact
	this.Inst_TX_Contact_mc = new lib.mc_TX_Contact();
	this.Inst_TX_Contact_mc.name = "Inst_TX_Contact_mc";
	this.Inst_TX_Contact_mc.parent = this;
	this.Inst_TX_Contact_mc.setTransform(532.35,248.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_TX_Contact_mc).wait(1));

	// X_VA_Contact
	this.Inst_X_VA_Contact_btn = new lib.btn_X_VA_Contact();
	this.Inst_X_VA_Contact_btn.name = "Inst_X_VA_Contact_btn";
	this.Inst_X_VA_Contact_btn.parent = this;
	this.Inst_X_VA_Contact_btn.setTransform(626,197.2);
	new cjs.ButtonHelper(this.Inst_X_VA_Contact_btn, 0, 1, 2, false, new lib.btn_X_VA_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_VA_Contact_btn).wait(1));

	// VA_Email
	this.Inst_VA_Email_btn = new lib.btn_VA_Email();
	this.Inst_VA_Email_btn.name = "Inst_VA_Email_btn";
	this.Inst_VA_Email_btn.parent = this;
	this.Inst_VA_Email_btn.setTransform(501.5,333.55);
	new cjs.ButtonHelper(this.Inst_VA_Email_btn, 0, 1, 2, false, new lib.btn_VA_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_VA_Email_btn).wait(1));

	// VA_Phone
	this.Inst_VA_Phone_btn = new lib.btn_VA_Phone();
	this.Inst_VA_Phone_btn.name = "Inst_VA_Phone_btn";
	this.Inst_VA_Phone_btn.parent = this;
	this.Inst_VA_Phone_btn.setTransform(500.5,366.5);
	new cjs.ButtonHelper(this.Inst_VA_Phone_btn, 0, 1, 2, false, new lib.btn_VA_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_VA_Phone_btn).wait(1));

	// VA_Contact
	this.Inst_VA_Contact_mc = new lib.mc_VA_Contact();
	this.Inst_VA_Contact_mc.name = "Inst_VA_Contact_mc";
	this.Inst_VA_Contact_mc.parent = this;
	this.Inst_VA_Contact_mc.setTransform(485.35,293.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_VA_Contact_mc).wait(1));

	// X_WA_Contact
	this.Inst_X_WA_Contact_btn = new lib.btn_X_WA_Contact();
	this.Inst_X_WA_Contact_btn.name = "Inst_X_WA_Contact_btn";
	this.Inst_X_WA_Contact_btn.parent = this;
	this.Inst_X_WA_Contact_btn.setTransform(450,19.2);
	new cjs.ButtonHelper(this.Inst_X_WA_Contact_btn, 0, 1, 2, false, new lib.btn_X_WA_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_WA_Contact_btn).wait(1));

	// WA_Email
	this.Inst_WA_Email_btn = new lib.btn_WA_Email();
	this.Inst_WA_Email_btn.name = "Inst_WA_Email_btn";
	this.Inst_WA_Email_btn.parent = this;
	this.Inst_WA_Email_btn.setTransform(327.5,156.55);
	new cjs.ButtonHelper(this.Inst_WA_Email_btn, 0, 1, 2, false, new lib.btn_WA_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WA_Email_btn).wait(1));

	// WA_Phone
	this.Inst_WA_Phone_btn = new lib.btn_WA_Phone();
	this.Inst_WA_Phone_btn.name = "Inst_WA_Phone_btn";
	this.Inst_WA_Phone_btn.parent = this;
	this.Inst_WA_Phone_btn.setTransform(326.5,189.5);
	new cjs.ButtonHelper(this.Inst_WA_Phone_btn, 0, 1, 2, false, new lib.btn_WA_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WA_Phone_btn).wait(1));

	// WA_Contact
	this.Inst_WA_Contact_mc = new lib.mc_WA_Contact();
	this.Inst_WA_Contact_mc.name = "Inst_WA_Contact_mc";
	this.Inst_WA_Contact_mc.parent = this;
	this.Inst_WA_Contact_mc.setTransform(309.35,115.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WA_Contact_mc).wait(1));

	// X_WI_Contact
	this.Inst_X_WI_Contact_btn = new lib.btn_X_WI_Contact();
	this.Inst_X_WI_Contact_btn.name = "Inst_X_WI_Contact_btn";
	this.Inst_X_WI_Contact_btn.parent = this;
	this.Inst_X_WI_Contact_btn.setTransform(461,57.2);
	new cjs.ButtonHelper(this.Inst_X_WI_Contact_btn, 0, 1, 2, false, new lib.btn_X_WI_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_WI_Contact_btn).wait(1));

	// WI_Email
	this.Inst_WI_Email_btn = new lib.btn_WI_Email();
	this.Inst_WI_Email_btn.name = "Inst_WI_Email_btn";
	this.Inst_WI_Email_btn.parent = this;
	this.Inst_WI_Email_btn.setTransform(337.5,194.55);
	new cjs.ButtonHelper(this.Inst_WI_Email_btn, 0, 1, 2, false, new lib.btn_WI_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WI_Email_btn).wait(1));

	// WI_Phone
	this.Inst_WI_Phone_btn = new lib.btn_WI_Phone();
	this.Inst_WI_Phone_btn.name = "Inst_WI_Phone_btn";
	this.Inst_WI_Phone_btn.parent = this;
	this.Inst_WI_Phone_btn.setTransform(337.5,226.55);
	new cjs.ButtonHelper(this.Inst_WI_Phone_btn, 0, 1, 2, false, new lib.btn_WI_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WI_Phone_btn).wait(1));

	// WI_Contact
	this.Inst_WI_Contact_mc = new lib.mc_WI_Contact();
	this.Inst_WI_Contact_mc.name = "Inst_WI_Contact_mc";
	this.Inst_WI_Contact_mc.parent = this;
	this.Inst_WI_Contact_mc.setTransform(320.35,153.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WI_Contact_mc).wait(1));

	// X_WV_Contact
	this.Inst_X_WV_Contact_btn = new lib.btn_X_WV_Contact();
	this.Inst_X_WV_Contact_btn.name = "Inst_X_WV_Contact_btn";
	this.Inst_X_WV_Contact_btn.parent = this;
	this.Inst_X_WV_Contact_btn.setTransform(627,170.2);
	new cjs.ButtonHelper(this.Inst_X_WV_Contact_btn, 0, 1, 2, false, new lib.btn_X_WV_Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_X_WV_Contact_btn).wait(1));

	// WV_Email
	this.Inst_WV_Email_btn = new lib.btn_WV_Email();
	this.Inst_WV_Email_btn.name = "Inst_WV_Email_btn";
	this.Inst_WV_Email_btn.parent = this;
	this.Inst_WV_Email_btn.setTransform(504.5,307.55);
	new cjs.ButtonHelper(this.Inst_WV_Email_btn, 0, 1, 2, false, new lib.btn_WV_Email(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WV_Email_btn).wait(1));

	// WV_Phone
	this.Inst_WV_Phone_btn = new lib.btn_WV_Phone();
	this.Inst_WV_Phone_btn.name = "Inst_WV_Phone_btn";
	this.Inst_WV_Phone_btn.parent = this;
	this.Inst_WV_Phone_btn.setTransform(503.5,340.5);
	new cjs.ButtonHelper(this.Inst_WV_Phone_btn, 0, 1, 2, false, new lib.btn_WV_Phone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WV_Phone_btn).wait(1));

	// WV_Contact
	this.Inst_WV_Contact_mc = new lib.mc_WV_Contact();
	this.Inst_WV_Contact_mc.name = "Inst_WV_Contact_mc";
	this.Inst_WV_Contact_mc.parent = this;
	this.Inst_WV_Contact_mc.setTransform(486.35,266.3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WV_Contact_mc).wait(1));

	// AR_magenta
	this.Inst_AR_btn = new lib.btn_AR();
	this.Inst_AR_btn.name = "Inst_AR_btn";
	this.Inst_AR_btn.parent = this;
	this.Inst_AR_btn.setTransform(493.4,347.3,1,1,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.Inst_AR_btn, 0, 1, 2, false, new lib.btn_AR(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_AR_btn).wait(1));

	// CA_Blue
	this.Inst_CA_btn = new lib.btn_CA();
	this.Inst_CA_btn.name = "Inst_CA_btn";
	this.Inst_CA_btn.parent = this;
	this.Inst_CA_btn.setTransform(62.75,245.4,1,1,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.Inst_CA_btn, 0, 1, 2, false, new lib.btn_CA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_CA_btn).wait(1));

	// CO_Blue
	this.Inst_CO_btn = new lib.btn_CO();
	this.Inst_CO_btn.name = "Inst_CO_btn";
	this.Inst_CO_btn.parent = this;
	this.Inst_CO_btn.setTransform(277.65,250.9,1,1,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.Inst_CO_btn, 0, 1, 2, false, new lib.btn_CO(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_CO_btn).wait(1));

	// DC_Star
	this.Inst_DC_btn = new lib.btn_DC();
	this.Inst_DC_btn.name = "Inst_DC_btn";
	this.Inst_DC_btn.parent = this;
	this.Inst_DC_btn.setTransform(718.3,235.05,1,1,0,0,0,0,-0.1);
	new cjs.ButtonHelper(this.Inst_DC_btn, 0, 1, 2, false, new lib.btn_DC(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_DC_btn).wait(1));

	// FL_green
	this.Inst_FL_btn = new lib.btn_FL();
	this.Inst_FL_btn.name = "Inst_FL_btn";
	this.Inst_FL_btn.parent = this;
	this.Inst_FL_btn.setTransform(648.45,470.25,1,1,0,0,0,-0.9,-0.8);
	new cjs.ButtonHelper(this.Inst_FL_btn, 0, 1, 2, false, new lib.btn_FL(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_FL_btn).wait(1));

	// GA_green
	this.Inst_GA_btn = new lib.btn_GA();
	this.Inst_GA_btn.name = "Inst_GA_btn";
	this.Inst_GA_btn.parent = this;
	this.Inst_GA_btn.setTransform(645.55,377.6);
	new cjs.ButtonHelper(this.Inst_GA_btn, 0, 1, 2, false, new lib.btn_GA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_GA_btn).wait(1));

	// IA_magenta
	this.Inst_IA_btn = new lib.btn_IA();
	this.Inst_IA_btn.name = "Inst_IA_btn";
	this.Inst_IA_btn.parent = this;
	this.Inst_IA_btn.setTransform(470.8,201.35);
	new cjs.ButtonHelper(this.Inst_IA_btn, 0, 1, 2, false, new lib.btn_IA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_IA_btn).wait(1));

	// IN_magenta
	this.Inst_IN_btn = new lib.btn_IN();
	this.Inst_IN_btn.name = "Inst_IN_btn";
	this.Inst_IN_btn.parent = this;
	this.Inst_IN_btn.setTransform(582.35,239.8,1,1,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.Inst_IN_btn, 0, 1, 2, false, new lib.btn_IN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_IN_btn).wait(1));

	// KY_magenta
	this.Inst_KY_btn = new lib.btn_KY();
	this.Inst_KY_btn.name = "Inst_KY_btn";
	this.Inst_KY_btn.parent = this;
	this.Inst_KY_btn.setTransform(595.7,281.65,1,1,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.Inst_KY_btn, 0, 1, 2, false, new lib.btn_KY(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_KY_btn).wait(1));

	// LA_magenta
	this.Inst_LA_btn = new lib.btn_LA();
	this.Inst_LA_btn.name = "Inst_LA_btn";
	this.Inst_LA_btn.parent = this;
	this.Inst_LA_btn.setTransform(507.55,423.4,1,1,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.Inst_LA_btn, 0, 1, 2, false, new lib.btn_LA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_LA_btn).wait(1));

	// MD_green
	this.Inst_MD_btn = new lib.btn_MD();
	this.Inst_MD_btn.name = "Inst_MD_btn";
	this.Inst_MD_btn.parent = this;
	this.Inst_MD_btn.setTransform(725.15,243.65,1,1,0,0,0,0,0.4);
	new cjs.ButtonHelper(this.Inst_MD_btn, 0, 1, 2, false, new lib.btn_MD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_MD_btn).wait(1));

	// MN_magenta
	this.Inst_MN_btn = new lib.btn_MN();
	this.Inst_MN_btn.name = "Inst_MN_btn";
	this.Inst_MN_btn.parent = this;
	this.Inst_MN_btn.setTransform(467.65,110.95,1,1,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.Inst_MN_btn, 0, 1, 2, false, new lib.btn_MN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_MN_btn).wait(1));

	// NC_green
	this.Inst_NC_btn = new lib.btn_NC();
	this.Inst_NC_btn.name = "Inst_NC_btn";
	this.Inst_NC_btn.parent = this;
	this.Inst_NC_btn.setTransform(694.05,309.9,1,1,0,0,0,-0.5,0.1);
	new cjs.ButtonHelper(this.Inst_NC_btn, 0, 1, 2, false, new lib.btn_NC(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NC_btn).wait(1));

	// NJ_green
	this.Inst_NJ_btn = new lib.btn_NJ();
	this.Inst_NJ_btn.name = "Inst_NJ_btn";
	this.Inst_NJ_btn.parent = this;
	this.Inst_NJ_btn.setTransform(761.7,204.7,1,1,0,0,0,0.8,0.7);
	new cjs.ButtonHelper(this.Inst_NJ_btn, 0, 1, 2, false, new lib.btn_NJ(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NJ_btn).wait(1));

	// NV_Blue
	this.Inst_NV_btn = new lib.btn_NV();
	this.Inst_NV_btn.name = "Inst_NV_btn";
	this.Inst_NV_btn.parent = this;
	this.Inst_NV_btn.setTransform(106.55,229.15,1,1,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.Inst_NV_btn, 0, 1, 2, false, new lib.btn_NV(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NV_btn).wait(1));

	// NY_green
	this.Inst_NY_btn = new lib.btn_NY();
	this.Inst_NY_btn.name = "Inst_NY_btn";
	this.Inst_NY_btn.parent = this;
	this.Inst_NY_btn.setTransform(732.15,148.7,1,1,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.Inst_NY_btn, 0, 1, 2, false, new lib.btn_NY(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_NY_btn).wait(1));

	// SC_green
	this.Inst_SC_btn = new lib.btn_SC();
	this.Inst_SC_btn.name = "Inst_SC_btn";
	this.Inst_SC_btn.parent = this;
	this.Inst_SC_btn.setTransform(688.65,353,1,1,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.Inst_SC_btn, 0, 1, 2, false, new lib.btn_SC(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_SC_btn).wait(1));

	// TN_magenta
	this.Inst_TN_btn = new lib.btn_TN();
	this.Inst_TN_btn.name = "Inst_TN_btn";
	this.Inst_TN_btn.parent = this;
	this.Inst_TN_btn.setTransform(594.6,318.55,1,1,0,0,0,-0.1,0.6);
	new cjs.ButtonHelper(this.Inst_TN_btn, 0, 1, 2, false, new lib.btn_TN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_TN_btn).wait(1));

	// TX_Blue
	this.Inst_TX_btn = new lib.btn_TX();
	this.Inst_TX_btn.name = "Inst_TX_btn";
	this.Inst_TX_btn.parent = this;
	this.Inst_TX_btn.setTransform(362,446.3,1,1,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.Inst_TX_btn, 0, 1, 2, false, new lib.btn_TX(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_TX_btn).wait(1));

	// VA_green
	this.Inst_VA_btn = new lib.btn_VA();
	this.Inst_VA_btn.name = "Inst_VA_btn";
	this.Inst_VA_btn.parent = this;
	this.Inst_VA_btn.setTransform(699.25,262.1,1,1,0,0,0,1.2,-0.6);
	new cjs.ButtonHelper(this.Inst_VA_btn, 0, 1, 2, false, new lib.btn_VA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_VA_btn).wait(1));

	// WA_Blue
	this.Inst_WA_btn = new lib.btn_WA();
	this.Inst_WA_btn.name = "Inst_WA_btn";
	this.Inst_WA_btn.parent = this;
	this.Inst_WA_btn.setTransform(94.6,41,1,1,0,0,0,-0.2,0.2);
	new cjs.ButtonHelper(this.Inst_WA_btn, 0, 1, 2, false, new lib.btn_WA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WA_btn).wait(1));

	// WI_magenta
	this.Inst_WI_btn = new lib.btn_WI();
	this.Inst_WI_btn.name = "Inst_WI_btn";
	this.Inst_WI_btn.parent = this;
	this.Inst_WI_btn.setTransform(518.6,144);
	new cjs.ButtonHelper(this.Inst_WI_btn, 0, 1, 2, false, new lib.btn_WI(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WI_btn).wait(1));

	// WV_magenta
	this.Inst_WV_btn = new lib.btn_WV();
	this.Inst_WV_btn.name = "Inst_WV_btn";
	this.Inst_WV_btn.parent = this;
	this.Inst_WV_btn.setTransform(680.25,247.5,1,1,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.Inst_WV_btn, 0, 1, 2, false, new lib.btn_WV(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Inst_WV_btn).wait(1));

	// IL_
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.8).p("AG4D9QANgPgbgtQgjgygKgUQgNgaAfgrQARgXAYgfQALgagoiMQgIgagLimQgLixgCgiQhDgkgcisIowAbIAUAeQAYAgARAJQASAKAMAqQAMApgIAMIgsBDQgeAMgfARQg+AhgFAYQgFAVAVAmQATAigGAEQgkAlgZApQgSAegTAlIgPAeIgEAPQgDATACAVQAHBEA9A7QBhBhAIAQIADAqQAHAqAPACQANACAwgNQAsgGAIAgQAFAbgcA/QgaA7AHANQALATAwApQAwAoAVAJQAXAKAXAWQAdAbACAXQACARACBFQAFA8AQAFQAWAIAYARIAuhOIBtAZIAAhhQAAgGAhgQQARgJARgHIAAhHQAAgCACgEQAThQAGgmQANgsBLhgg");
	this.shape_7.setTransform(532.6968,244.6823,0.7407,0.7407);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1D3D4").s().p("AA5LwQgQgFgFg8QgChFgCgRQgCgXgdgbQgXgWgXgKQgVgJgwgoQgwgpgLgTQgHgNAag7QAcg/gFgbQgIgggsAGQgwANgNgCQgPgCgHgqIgDgqQgIgQhhhhQg9g7gHhEQgCgVADgTIAEgPIAPgeQATglASgeQAZgpAkglQAGgEgTgiQgVgmAFgVQAFgYA+ghQAfgRAegMIAshDQAIgMgMgpQgMgqgSgKQgRgJgYggIgUgeIIwgbQAcCsBDAkIANDTQALCmAIAaQAoCMgLAZIgpA3QgfArANAaQAKAUAjAyQAbAtgNAPQhLBggNAsQgGAmgTBQIgCAGIAABHIgiAQQghAQAAAGIAABhIhtgZIguBOQgYgRgWgIg");
	this.shape_8.setTransform(532.6968,244.6053,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Maine_
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.8).p("AFwgzQAGg0gLgHQgDgCgsADQgpADgEgKQgCgDgMgoQgJghgJgKQgKgKgYABIgXADQgOhPgUhUQgoipgbgbQgfgegtgSQgogRgPAGQgHADgZAmQgZAlgVAGQgWAGgrgaQgsgagNACQgSAEgbBHQgYBAAAAVIAGF2IgQAmQgPAlAGACQADADgdAKQgmANgHADQAQA2BGDuQA/DVAGAFQAIAIA3A1QAUggAUgkQAbgxAAgNIAChDIAfgaQAhgWAMARQAMASADgdIACghIANANQAQAKAKgPQAPgZACgbIAwAAQgGgmgDgnQgGhOAPAAQAKAAAOAQQAPAQAUAAQAkAAAfABIAkgoQAngrALgNQAFgGA9gxQA2gqAEgLQAEgMgXgMg");
	this.shape_9.setTransform(819.534,84.9409,0.7407,0.7407);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1D3D4").s().p("Aj/I2QgGgFg/jVIhWkkIAugRQAdgKgEgCQgFgDAOglIAQglIgGl2QAAgWAZhAQAahGASgEQAOgDAsAbQArAaAVgGQAWgGAYglQAagmAGgDQAQgHAoASQAsASAfAeQAcAaAnCpQAUBVAOBPIAXgEQAZgBAJALQAJAKAKAhIANArQAFAKAogDQAsgDADACQAMAHgGA0IAYAJQAXAMgFAMQgDALg3ArQg8AwgGAGIgxA4IglApQgfgCgkAAQgTAAgPgPQgPgQgKAAQgOAAAGBNQADAnAFAnIgwAAQgBAbgQAZQgJAOgQgKIgOgMIgBAgQgEAdgMgRQgMgSghAXIgfAaIgCBDQAAAMgbAyQgTAjgVAhIg/g9g");
	this.shape_10.setTransform(819.5721,84.835,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Alabama_
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.8).p("AGRGuIACAAQABADAAgDQgBgGgMgTQgNgRAGhAQAIhCgBgNQgCgOgKggQgOgngCgHQgEgPAPgfIARgcIjwr5QjnAYi6AYQgQADh2AMQAWAjgFAxQgDArABIYQABEUABFdQAXACAWgIQAMgJALg3IAJg2QAqB6gIANQgFAJAvgOQAlgMAagLIATgKIACAAIgCg+QgGgBgIgGQgQgMgKgYQgLgXATgRQAJgIAMgEIIwg3QgCgFgCgD");
	this.shape_11.setTransform(590.7807,385.6782,0.7407,0.7407);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1D3D4").s().p("AkSKnQAIgMgqh6IgJA1QgLA3gMAKQgWAHgWgBIgCpyQgCoYAEgqQAEgxgVgjICGgPQC6gZDngXIDvL5IgQAbQgQAfAFAQIAPAuQALAfABAPQABANgIBCQgFA/AMASQANATAAAGQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAIgCAAQgBgFgDgDIAAAAIAAAAQADADABAFIowA3QgLADgKAJQgSAQAKAYQALAYAQALQAIAGAFABIACA/IgCAAIgTAKQgaALgkALQgdAJgKAAQgGAAACgEg");
	this.shape_12.setTransform(590.9069,385.6925,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// MS_
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.8).p("AGBpBQAEg2gWgeQjPATkPAGIg7BjQgTArgKApQgwBDgTAiQgMAVgJA0QgFAZgDAWIgCBBQgBBJADApQAAAIACANQAKA4AqBgIgmBMQgVAjgWAmQgrBNAAASQAAAOgLAuQgKArACAKQADAMDWgFQBsgCBpgFIgBAuQAAAwAFAHQAGAIAxBMIACAAQAqABAqgBIAqgiIA2ADQA8ACAlgBQgBlfgBkVQgBoaAEgrg");
	this.shape_13.setTransform(533.8455,388.9607,0.7407,0.7407);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1D3D4").s().p("ABrKWIgCAAIg3hUQgFgHAAgwIABguQhpAFhsACQjWAFgDgMQgCgKAKgrQALguAAgOQAAgSArhNQAWgmAVgjIAmhMQgqhggKg4QgCgNAAgIQgDgpABhJIAChBQADgWAFgZQAJg0AMgVQATgiAwhDQAKgpATgrIA7hjQEPgGDPgTQAWAegEA2QgEArABIaIACJ0QglABg8gCIg2gDIgqAiIgqAAIgqAAg");
	this.shape_14.setTransform(533.8455,388.9695,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// OH_
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.8).p("AHSiRIg3l+IgCACQgxAYgWALQgoAUgCAKQgGASgzAtQg3AxgfAEQgNACg5ARQgsANghgEQgfgDg8gUQg7gUgJgEIk3AXIBWLgQAkgFAnANQAvAQAKAjQAIAgAYgGQAMgEATgHQAEACAUARQAQANAGgDQAAAAALgOQAIgMASgBQAOgBAPASQAOARAPgDQAMgCAegjQAcggAGAIQAEAGAJAVQAHAQAFADQABABAiARQAeAPAIAJQAMgQAegVQAZgRAAgFQgEgggCgZQgEgwAKgMQAKgNAYAHQAZAHACgBQAJgGAEglQAFgMAFgOQAKgcAFgHQAEgDA5guQA5gwAIgPQAHgSAJhIQAHhDAAgeQACgogRgkQgCgEANgHQAJgFAOgEg");
	this.shape_15.setTransform(635.5263,222.0509,0.7407,0.7407);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D1D3D4").s().p("ABdH4IgigRQgGgEgGgQQgKgUgDgGQgHgIgbAgQgeAjgMACQgPADgOgSQgPgRgOABQgSABgIAMIgMAOQgFADgQgOQgUgRgFgBIgeALQgYAGgJggQgJgjgvgRQgogNgjAGIhXrgIE4gXIBEAYQA8AUAeADQAiADAsgMQA5gRANgCQAfgEA3gxQAzgtAGgSQABgKAogUIBHgjIACgCIA3F+QgNAEgJAFQgNAGACAFQAQAkgBAoQAAAdgHBDQgJBJgHARQgIAQg5AvIg9AyQgFAHgLAcIgJAaQgEAlgJAFQgCACgZgHQgYgHgKAMQgKANADAvIAHA6QAAAFgZARQgeAUgMARQgIgJgfgQg");
	this.shape_16.setTransform(635.5493,222.1448,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// OK_
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.8).p("AkwDgIBEA0IAogDQAqgCAIAFQAKAIAIAsIBNAiIBRAAIAjgGQAmgEARAKQAPAIAJAdQAJAdAFABQAHADAXAAQAXAAARgDQAWgEAUAGIA6AAIATAyIAZgkQAbgjAPAIQAHADAoAcQAkAaAWAGQAYAHApgYQAUgMAQgNQAjgIAZgCQALAAATAKQATAJAEAAQABAAAUgLQARgKAOAGQALAFAtAfQAtAfAMAEQATAGAZgEIgWukI5fg7IAAACIjXgXIgPCTIKLAyg");
	this.shape_17.setTransform(385.4482,334.2385,0.7407,0.7407);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1D3D4").s().p("AOCH4QgMgFgtgeQgtgggLgEQgOgGgRAKIgVALQgEAAgTgKQgTgJgLAAQgZABgjAJQgQANgUAMQgpAXgYgGQgWgHgkgZQgogcgHgDQgPgIgbAiIgZAlIgTgyIg6AAQgUgHgWAFQgRADgXAAQgXAAgHgDQgFgCgJgcQgJgdgPgJQgRgJgmAEIgjAFIhRAAIhNghQgIgtgKgIQgIgEgqABIgoADIhEg0IAOoUIqLgyIAPiTIDXAXIAAgCIZfA7IAWOkIgTABQgOAAgLgDg");
	this.shape_18.setTransform(385.4628,334.2573,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Missouri_
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(0.8).p("ALEFrQgWgOgYgLQgQgHgFg8QgDhDgBgRQgDgXgcgaQgYgXgXgKQgVgJgvgoQgxgogLgTQgHgMAag6QAchAgFgcQgGgggsAHQgyAMgNgCQgQgDgGgqIgDgpQgIgPhhhiQg9g9gHhDQgCgVADgTIAEgPIg5g7Is6AAQAIAiANAfQAVAmAiAuQAbAiALAAQAOgCATAHQAUAHAEAJQABACgXAlQgWAjAMAOQAKAMAuAqQAqAoABATQACATADDRQACBpABBlIAIEiIPJgXIARAVQANAZgPAPQgQAPgTAhIgPAcICLAAQACgIAAgFQAAgVAMgwIANgsIAPgRQAegiAQgQQAMgMAEgcIADgbQgJADgBgCg");
	this.shape_19.setTransform(488.3455,275.5465,0.7407,0.7407);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1D3D4").s().p("AHXJuIAQgdQATgfAQgQQAPgQgOgYIgRgVIvJAXIgHkiIgDjOQgDjQgCgUQgBgTgqgnQgvgqgJgNQgNgOAXgkQAWgkgBgCQgDgJgUgHQgUgHgNACQgLAAgbgiQgjgugUgmQgNgfgJgiIM6AAIA5A7IgEAPQgCATACAVQAHBDA8A9QBiBiAHAPIADApQAHArAQACQANACAygNQArgGAGAgQAGAcgcA/QgbA8AIALQALATAwApQAwAoAVAIQAXAKAYAXQAcAaADAXIADBUQAGA8APAHQAZALAWAOQABACAJgDIgDAbQgFAcgLAMQgRAQgeAiIgOARIgNAsQgNAwAAAVQAAAFgBAIg");
	this.shape_20.setTransform(488.3677,275.5465,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Layer_37
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.8).p("AomsRIjnYJIC/AZIAfhzIFmAsIAAg3INUBnICD1+g");
	this.shape_21.setTransform(258.8636,344.7631,0.7407,0.7407);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1D3D4").s().p("AsNL4IDn4JIU0CNIiDV+ItUhnIAAA3IlmgsIgfB0g");
	this.shape_22.setTransform(258.8733,344.7613,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// Layer_38
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.8).p("AMwG9IgFiRQgBhkgChpQgDjRgCgUQgCgTgpgoQgtgqgLgMQgMgOAWgjQAXgkgBgCQgCgIgVgHQgVgIgNACQgNAAgZgiI2Bg3IgvNBg");
	this.shape_23.setTransform(393.014,269.7691,0.7407,0.7407);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1D3D4").s().p("AsvGFIAvtBIWBA2QAZAjANgBQANgBAVAIQAVAHACAHQABADgXAkQgWAiAMAPIA4A1QApApACATQACAUADDQIADDOIAFCRg");
	this.shape_24.setTransform(393.0182,269.7693,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Layer_39
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(0.8).p("At+BaQADAAAKgCAt+BaIGHAwIgPEGIWCA0QgggogXgsQgPgggGghQgWhYgHhYQgDgvgkhoQghhhgXgrQgKgTgBgSQAAgGADgYQgaAAgQgRQgGgHgLgUQgFgKgdgHQgXgGgKAAQgEgBgTgTQgVgVgCgBQgGgEhlAEQgCAHgEAGQgKAOgQAAQgQABgsgiIgpgiIxehHIgyIdg");
	this.shape_25.setTransform(374.4494,207.187,0.7407,0.7407);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D3D4").s().p("AoDGQIAPkGImIgwIAOgCIgOACIgBAAIAxodIRfBHIAoAiQAtAjAPgCQARAAAKgOQAEgGACgHQBlgEAFAEIAXAWQAUATAEABQAKAAAWAGQAeAHAEAKQALAUAHAHQAQARAaAAIgDAeQABASAJATQAYArAhBhQAkBoACAvQAIBYAWBYQAFAhAQAgQAXAsAgAog");
	this.shape_26.setTransform(374.2594,207.1834,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// Layer_40
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.8).p("AHEGwQALgCAJgHQAJgIADgKQBlgEAGAEQACABAVAVQAUATADABQADABAeAFQAdAHAFAKQATAsAoAAQACgYgPgQQgVgbgBgJQgCgIAQgTQAOgTAAgnQgBgngNgXQgMgbAOgZIAGgLQAVlPgEhfQgCg5glguQgCgBgYgbQgMgNgBgHQgBgMAWgbQAbggAHgTI2ehFIhJMnIReBHQAAgBAqAgQAsAjAPAAg");
	this.shape_27.setTransform(368.452,151.9588,0.7407,0.7407);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D1D3D4").s().p("ALAHWQgFgKgdgHIghgHQgDgBgUgSIgXgXQgGgEhlAEQgDALgJAHQgJAIgLABQgPABgsgjIgqggIxehHIBJsnIWeBFQgHAUgbAgQgWAaABAMQABAIAMAMIAaAdQAlAuACA5QAEBfgVFPIgGAKQgOAaAMAbQANAWABAoQAAAngOASQgQAUACAIQABAIAVAbQAPAQgCAZQgoAAgTgsg");
	this.shape_28.setTransform(368.4684,151.9671,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

	// Layer_41
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(0.8).p("ALQG/QAFgcgRgzQgWg7gKgeQgKgjAFhWQAGhngBgPQgBgWgfheQgdhaAAgtQgFhTgShIIgHAAQh3gDlEgVIkrgUInlgyIhONUIWeBFQACgGAAgIg");
	this.shape_29.setTransform(370.4884,84.8139,0.7407,0.7407);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D1D3D4").s().p("ArQGIIBOtUIHlAyIErAUQFEAVB3ADIAHAAQASBHAFBUQAAAtAdBaQAfBeABAWQABAPgGBnQgFBVAKAkQAKAdAWA8QARAygFAdQAAAIgCAGg");
	this.shape_30.setTransform(370.5053,84.8261,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Layer_43
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(0.8).p("AFXnUIyqjQIjUgsIg/EEQAqBSAAARQAAANAJAoQAJAoADAEQAHAJAhAzQAmA8AMAbQAPAiAaAdQAbAfASAAQAOAAgaA1QggBAAAAKQAABHgKALQgQASgKAVQgQAhARAOQANAMAugYQAsgYAGALQAIAMADA0QADAxAFADQAJAHAQAfQARAhAAAPQAAAKgPAOQgMALAIANQAIANAhAEQAeAEAAAIQAAAJgGA1QgBAvAaAAQAZAAAJgLQAJgMABAAQAKAABnAEQAPAABiATIAqgqIAZAqIAfAVIAVh4IVSC5IBlxUg");
	this.shape_31.setTransform(239.5084,79.4111,0.7407,0.7407);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D1D3D4").s().p("AlQIYIgVB4IgfgVIgZgqIgqAqQhigTgPAAIhxgEQgBAAgJALQgJAMgZAAQgaAAABgwQAGg0AAgJQAAgJgegDQghgEgIgNQgIgOAMgKQAPgPAAgJQAAgQgRggQgQgfgJgHQgFgDgDgxQgDg0gIgMQgGgLgsAXQguAZgNgMQgRgOAQgiQAKgUAQgSQAKgLAAhHQAAgLAgg/QAag1gOAAQgSAAgbgfQgagegPghQgMgbgmg9QghgygHgJQgDgEgJgoQgJgpAAgMQAAgRgqhSIA/kEIDUAsISqDQIMQBRIhlRUg");
	this.shape_32.setTransform(239.5034,79.4193,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// Layer_44
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.8).p("AJ2EWIgqAqQhhgTgQAAQhlgEgMAAQgBAAgKALQgJAMgYAAQgaAAABgwQAGg0AAgJQAAgJgegDQgigEgHgNQgIgOAMgLQAPgOAAgJQAAgRgQggQgQgfgKgGQgFgEgDgwQgDgzgIgMQgHgLgrAXQgtAZgOgMQgQgPAQghQALgYAOgOQAKgKAAhIQAAgJAghBQAbg2gPAAQgSAAgbgfQgagegPghQgNgcgmg8Qghg2gFgFQgDgDgJgoQgJgpAAgNQAAgRgqhSIA/kEIisgkIiwMXQAVAcALALQADAEAHAOQAFAMANAVQAGAUgYAhQgxBQgfAyQg6BdgcALQgfANgHAbQgHAZAQANQASAOAIANQALARgDAXQgDAThFD3QgjB/gsCdQAAAEgCAAISlD4IAAACQAQgzAuj9QAThnA1krIgfgVg");
	this.shape_33.setTransform(161.8196,102.5438,0.7407,0.7407);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D1D3D4").s().p("AIQQhIylj4QAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAgBIBPkcQBFj2ADgUQADgWgLgSQgIgNgSgOQgQgMAHgaQAIgbAegNQAcgLA6heIBQiBQAZghgHgUQgNgUgFgNQgHgOgDgDQgLgMgVgcICwsXICsAkIg/EEQAqBSAAARQAAANAJApQAJAoADADQAFAFAiA2QAlA8ANAcQAPAiAaAdQAbAfASAAQAPAAgbA2QgfBBAAAJQAABIgLAKQgOAOgLAYQgQAhARAPQANAMAtgYQArgYAHALQAIAMAEAyQACAxAFAEQAKAGAQAfQAQAhAAAQQAAAJgOAOQgNAMAIANQAHANAiAEQAeADAAAJQAAAJgGA0QgBAwAaAAQAYAAAJgMIALgLIBxAEQAQAABhATIAqgqIAXApIAfAVIhIGSQguD+gQAyg");
	this.shape_34.setTransform(163.4127,101.565,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// Layer_45
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(0.8).p("ApdoHQhrJugbBTIglENIGaBMQAjACHxA7QHCA2BAgGIgCAAIBkxFI1Si6IgVB4IANAI");
	this.shape_35.setTransform(257.6993,166.4504,0.7407,0.7407);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D1D3D4").s().p("ACmJQQnxg7gkgCImZhMIAlkNQAbhTBrpuIANAIIgNgIIAVh4IVRC6IhkRFIADAAIgSAAQhfAAmRgwg");
	this.shape_36.setTransform(257.7067,166.4729,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer_47
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.8).p("AlItqIgqDQQgmA/gKgGQgJgIgigJQgmgLgUADQgTACAAAfQAAAPAEAPIgdC/QgDAEgBAGQgRAqACAXQACARAtBHQArBFAAAPQAAASgyAfQgZAPgaAMQAIA1ghArQgYAegbAMIgXAGIAABWIAaAKQAaAQAAAfQAAAfgdAFQgjAAgMACQgJACgHAGQgIAGgDAJINBINIGqA7IDk4Mg");
	this.shape_37.setTransform(162.9787,336.4403,0.7407,0.7407);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D1D3D4").s().p("ABaMwItBoNQADgJAIgGQAHgGAJgCQAMgCAjAAQAdgFAAgfQAAgfgagQIgagKIAAhWIAXgGQAbgMAYgeQAhgrgIg1QAagMAZgPQAygfAAgSQAAgPgrhFQgthHgCgRQgCgXARgqQABgGADgEIAdi/QgEgPAAgPQAAgfATgCQAUgDAmALQAiAJAJAIQAKAGAmg/IAqjQIQwDJIjkYMg");
	this.shape_38.setTransform(162.9868,336.4474,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// Layer_48
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.8).p("AD3qQIpRh8IkRVOIQyDMICmxFImahMg");
	this.shape_39.setTransform(184.5889,228.8461,0.7407,0.7407);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D1D3D4").s().p("ApsJBIES1NIJRB8IgkENIGZBLIilRGg");
	this.shape_40.setTransform(184.5973,228.8477,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).wait(1));

	// OR_
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.8).p("AKnAiQAbgLA7hdQAfgyAxhQQAYghgGgUQgNgUgFgNQgFgMgEgEQgMgMgVgdQgZgjjzgfQj7gagdgHQgjgIg/ABIg3ADQgWACgZABQgyACgLgFQgEgBg3gfQgzgdgTgGQgNgEg2AJQgvAIgQgNQgSgOgIhAIgDg9Ig0g3QgCABg3gQQgzgPgMATQgHAMgHAbQgEAQgJAlQgVBJgxAxQg2ChhACLQg0B6gNAmIgqAuQgsA5gGAtQgRCEgIBnIMpDjIAEACIJFCgQCVoHACgfQADgXgLgRQgIgMgSgPQgPgLAHgZQAIgbAfgOg");
	this.shape_41.setTransform(75.4289,107.3092,0.7407,0.7407);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D1D3D4").s().p("AgyI5IgEgCIspjjQAIhnARiEQAGgtAsg5IAqguQANgmA0h6QBAiLA2ihQAxgxAVhJIANg1QAHgbAHgMQAMgTAzAPQA3AQACgBIA0A3IADA9QAIBAASAOQAQANAvgIQA2gJANAEQATAGAzAdIA7AgQALAFAygCIAvgDIA3gDQA/gBAjAIQAdAHD7AaQDzAfAZAjQAVAdAMAMQAEAEAFAMQAFANANAUQAGAUgYAhIhQCCQg7BdgbALQgfAOgIAbQgHAZAPALQASAPAIAMQALARgDAXQgCAfiVIHg");
	this.shape_42.setTransform(75.4407,107.2673,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41}]}).wait(1));

	// DE_
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(0.8).p("ABqCEQgKgYg7hYQgwhJgbglQgCgEgCgCIACAAQAEAAABABQgUggAAgTQAAgJAZgfQg1gUgZBEIBSFJICIgbQABgMgFgUg");
	this.shape_43.setTransform(753.9888,228.0804,0.7407,0.7407);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D1D3D4").s().p("AhtiKQAZhEA1AUQgZAgAAAIQAAATAVAhQgBgCgFAAIgCAAIAEAGQAcAlAwBJQA6BZAKAXQAFAVgBALIiIAbg");
	this.shape_44.setTransform(753.997,228.0498,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).wait(1));

	// Penn_
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(0.8).p("AIDhSQABgegUgUQAkgfAEgNQAihDAAgPQAAgIgVgHQgigJgIgEQgQgJgGgVQgFgagFgLQgGgPgPgFIgPgDQgVgTgLgGQgPgKm6BUIm3BWIAAhQIgVAVQguAYgsAjQgKAIgNAHIBbJ0IPcihQAIgZAOgOQAWgWAiANQARgVAogvQAggnABgNQADgRg4g8Qg4g9AAgRg");
	this.shape_45.setTransform(712.0897,199.9727,0.7407,0.7407);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D1D3D4").s().p("ApvjiQANgGAKgJQAsgiAugZIAVgVIAABQIG3hVQG5hUAQAJQAKAGAWATIAOADQAQAGAGAOQAEAMAFAZQAGAWARAIQAIAEAhAKQAWAGAAAJQAAAPgjBDQgEANgkAfQAVATgBAfQAAAQA4A+QA3A7gCARQgBANggAnIg5BEQgjgMgWAWQgNANgIAZIvcCig");
	this.shape_46.setTransform(712.107,199.9447,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45}]}).wait(1));

	// Layer_54
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.8).p("ACqDGIAEgIQg3g3gIgGQgGgHhAjTQgvijgliAIgCAAQgGADAAADQgBAFgdAQQgdAOAAAFQAAAFgCAZQgCAagCAJQAQAagGAOQgEAMgFAMQgCAFAFAFQAHAFAAAYQABAYgIAQQgWAggeAhQAIBsgIAXQgKAbgCB2QgDCGAZAgQCfghBBgcQAhgNAggYQASgOAYgZQgFgSgCgcg");
	this.shape_47.setTransform(792.2414,117.2862,0.7407,0.7407);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D1D3D4").s().p("AiwDXQACh2AKgbQAIgXgIhsQAeghAWggQAIgQgBgYQAAgXgHgGQgFgFACgFQAFgLAEgNQAGgOgQgaIAEgjIACgeQAAgEAdgPQAdgQABgFQAAgDAGgDIACAAQAlCAAvCjQBADTAGAHQAIAGA3A3IgEAIQACAdAFARQgYAZgSAOQggAZghAMQhBAcifAhQgZggADiGg");
	this.shape_48.setTransform(792.219,117.2671,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47}]}).wait(1));

	// Layer_55
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.8).p("AB1AEQAIgWgIhtQAdgeAXgjQAHgOAAgZQgBgZgGgFQgFgDACgGQAFgMAEgNQAFgQgPgYIAAACQjVA0h+AgQADAcAGAhQAHAjADADQAJAJALAeQANAkgEAaQgEAeAOA4QAOA5AQAQQAOAOAZBYQAXBTAHA0ICQgdQgZghACiHQADh3AKgbg");
	this.shape_49.setTransform(771.4278,122.1374,0.7407,0.7407);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D1D3D4").s().p("AgwDOQgZhYgOgOQgPgPgOg5QgPg5AEgeQAFgagNgkQgLgdgKgJQgDgEgGgiQgHgigDgcQB+gfDVg0IAAgDQAPAZgFAQQgDAMgGAMQgCAGAFAEQAHAEAAAZQABAZgIAOQgWAjgdAfQAIBtgIAWQgLAagCB3QgDCIAaAgIiQAdQgHg0gYhTg");
	this.shape_50.setTransform(771.4441,122.5628,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49}]}).wait(1));

	// Layer_56
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.8).p("AFYAjQgHgCACAfQACAjgMADQgcAIgQAAQgeABgQgPQgNgLgTgpQgRglgIgDQgEgBglgCQgcgBAAgKQAAgFAagwQAYgtgIgLQgEgFgRgHQgNgFgIgZIgGgVQgtAwg+AcQg1AWirAnIiRAdQAAAGACAKQAEA+AEB7QAZgIBugbQBmgaBUgVQBIgSAAAFQAAAHBFBRIAAgGQAWAOAaABQAPAAAdgWQAOgLALgLQAQAPAUAEQAPACAlgQQAogSANgUQAPgWgJgZQgJgWgOgGg");
	this.shape_51.setTransform(797.4568,148.7876,0.7407,0.7407);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D1D3D4").s().p("ABnCqIAAAGQhFhRAAgHQAAgFhIASIi6AvQhuAbgZAIQgEh7gEg9IgCgRICRgdQCrgoA1gVQA+gcAtgwIAGAVQAIAYANAGQARAHAEAFQAIALgYAsQgaAxAAAFQAAAKAcABIApADQAIADARAkQATAqANALQAQAPAegBQAQAAAcgIQAMgEgCgiQgCggAHADQAOAGAJAVQAJAagPAWQgNAUgoASQglAQgPgCQgUgEgQgPQgLALgOALQgdAWgPAAQgagCgWgNg");
	this.shape_52.setTransform(797.4568,148.9674,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51}]}).wait(1));

	// Layer_57
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.8).p("AAChsQAAgCgTADQgXAEgeAIQABApAQApQAQA7AFA+QA7gZArgsIACg6QgdgigPgSQgaggAAgFg");
	this.shape_53.setTransform(800.0237,163.5115,0.7407,0.7407);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D1D3D4").s().p("Ag1gMQgQgpgCgpQAfgIAXgEQASgDAAACQABAFAaAgIAsA0IgCA6QgsAsg7AZQgEg+gQg7g");
	this.shape_54.setTransform(800.0268,163.4288,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).wait(1));

	// Layer_58
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.8).p("ACNi5QhIAQhyAeQhnAagfAKIAGCWQADA2ADADQAHAJAKAGIgdAkIATAfQABAAABgBQACgBACAAQAngPAlgXQAOgKAXgbQAVgaAHgEQAogRAtAAQAGABAHgIQALgMAxgMQAUgDAQgKQgFg9gQg8QgSgngBgrg");
	this.shape_55.setTransform(784.327,170.1503,0.7407,0.7407);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D1D3D4").s().p("AizCbIAcgkQgKgGgHgJQgCgEgDg2IgGiVQAfgKBngaQBygfBIgPQABAqASAoQAQA8AEA9QgPAKgVADQgwAMgLAMQgHAHgGAAQgtAAgpARQgGADgWAaQgWAcgPAKQgkAXgnAPIgEABIgDABg");
	this.shape_56.setTransform(784.3605,170.1503,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55}]}).wait(1));

	// Layer_60
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.8).p("AIfg3QAAgLghg4QguAOgzgIQgbgEgFggQgFgggHgBQgNgBgjAPQg3AXgKADQgWAIgoAHQgpAHgPAFQgDACgqAdQgdATgZAAQgrAFgUACQglADgOgQQgagcgdgXQgoghgXAAQgkACgqAJQgGgMABgRQADgjAlgcQAugiAQgSQARgVgHgRQgGgQhDAnQg9AjgzAqQglAehyBPIhqBJIgDAAQAKAXAfAVQArAbBKAQQCgAlAVAAIApAFQAqAHAHALQAMATAHARIAQAGQAOAPgDAmQgBAmASAJQAJAEAJgDIAgBUIBPibIBShBIAPAoIA5gwIBWglIBDgwQAFgDA5ATQA+AUAPAAQATAAAJgSQAFgJABgJIAXAPIBcgRQhAg5AAgKg");
	this.shape_57.setTransform(559.1704,109.1583,0.7407,0.7407);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D1D3D4").s().p("AhiD3QgJADgJgEQgRgJABgmQADgmgPgPIgPgGQgIgRgLgTQgIgLgqgHIgogFQgVAAigglQhLgQgqgcQgfgUgKgXIACAAIBrhJQByhPAlgeQAygqA9gjQBEgnAGAQQAHARgSAVQgPASgvAiQglAcgCAjQgBARAGAMQApgJAlgCQAWAAApAhQAdAXAaAcQAOAQAkgDIBAgHQAZAAAcgTIAugfQAPgFAogHQApgHAWgIQAJgDA3gXQAjgPAOABQAHABAFAgQAEAgAcAEQAyAIAvgOQAgA4AAALQAAAKBAA5IhcARIgXgPQgBAJgEAJQgKASgTAAQgPAAg+gUQg5gTgFADIhDAwIhWAlIg5AwIgPgoIhSBBIhPCbg");
	this.shape_58.setTransform(559.0512,108.8903,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57}]}).wait(1));

	// Layer_61
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.8).p("AGuCIQgGgsgUgfQgUgggCgPQgEgbgqhGQgqhFgJABQgJACglAZQgoAbAAAHQggBigugQQgfgLAMgyQAJgqAUgVQAJgJAighQAcgigEghQgEghgQg5QgNgpgHgSQAEgOgHgOQgNgag5gkQhFgrhNgXQhRgXgOAUQgMAQAFAhQADAQAEAOQgVAKgUAMQgqAXABAGQAHAhAAAHQADAjgQARQgPAQgJgcIgMgmQgHgFgqApQgrApgHAWQgGAWgHBQQgGBHAAAaQAAApAEAoQAGBBANAbQASAoAMBTQANBggQA2QgHAagUBFQgVA9gcAjILLgzQAAAAgEgDIAbhFQAEggAHglQAOhLAPgYQAPgSAngfQAdgggHgyg");
	this.shape_59.setTransform(602.0246,157.3093,0.7407,0.7407);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D1D3D4").s().p("Al6HOIAbheQAQg2gNhhQgMhTgSgnQgNgbgGhCQgEgnAAgpQAAgaAGhIQAHhQAGgVQAHgXArgpQAqgoAHAFIAMAlQAJAdAPgQQAQgRgDgkIgHgnQgBgGAqgYIApgWQgEgNgDgRQgFghAMgPQAOgVBRAYQBNAXBFArQA5AjANAbQAHAOgEAOQAHARANAqQAQA5AEAhQAEAhgcAiIgrAqQgUAVgJAqQgMAyAfALQAuAQAghiQAAgIAogaQAlgZAJgCQAJgCAqBFQAqBGAEAcQACAPAUAgQAUAfAGAsQAHAxgdAhQgnAfgPASQgPAYgOBKQgHAlgEAhIgbBFIAEACIrLA0QAcgjAVg+g");
	this.shape_60.setTransform(602.2487,157.2794,0.7407,0.7407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.6,265,783.4,322.6);
// library properties:
lib.properties = {
	id: 'D5A256C731C9461DABE42DE85E5737C9',
	width: 850,
	height: 532,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.png?1571927400754", id:"Image"},
		{src:"images/Image_0.png?1571927400754", id:"Image_0"},
		{src:"images/Image_1.png?1571927400754", id:"Image_1"},
		{src:"images/Image_2.png?1571927400754", id:"Image_2"},
		{src:"images/Image_3.png?1571927400754", id:"Image_3"},
		{src:"images/Image_4.png?1571927400755", id:"Image_4"},
		{src:"images/Image_6.png?1571927400755", id:"Image_6"},
		{src:"images/Image_5.png?1571927400755", id:"Image_5"}
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
an.compositions['D5A256C731C9461DABE42DE85E5737C9'] = {
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