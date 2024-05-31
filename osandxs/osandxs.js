(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.winline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("EgqLAOEIAA8HMBUXAAAIAAcHg");
	this.shape.setTransform(364.9,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.9,-60.7,540,180);


(lib.Win7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("EAPLAvMIAA/hIeVAAIAAfhgAvPPrIAA/bIeZAAIAAfbgEgtfgPwIAA/aIeQAAIAAfag");
	this.shape.setTransform(306.225,307.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Win7, new cjs.Rectangle(15.1,6,582.3,603.9), null);


(lib.restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ApQhoIShAAIAADRIyhAAg");
	this.shape.setTransform(59.25,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ApQBpIAAjRIShAAIAADRg");
	this.shape_1.setTransform(59.25,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,120.5,23);


(lib.info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap7p7IT3AAIAAT3Iz3AAg");
	this.shape.setTransform(63.6,63.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(239,239,239,0.059)").s().p("Ap7J8IAAz3IT3AAIAAT3g");
	this.shape_1.setTransform(63.6,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-1,-1,129.2,129.2), null);


(lib.ClickItem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(14,1,1).p("Am8m8IG8G8IG9G9AG9m8Im9G8Im8G9");
	this.shape.setTransform(62.75,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(14,1,1).p("AIDAAQAADWiXCWQiXCXjVAAQjVAAiXiXQiWiWAAjWQAAjVCWiWQCXiXDVAAQDVAACXCXQCXCWAADVg");
	this.shape_1.setTransform(64.25,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_3
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.setTransform(63.6,63.6,1,1,0,0,0,63.6,63.6);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,128.2,128.2);


// stage content:
(lib.osandxs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		
		this.stop;
		
		var currentUser = 1; // 1 is user X, 2 is user O
		var numberTries = 0;
		
		// setup onclick for each click area
		this.C_1_1.addEventListener("click", updateGrid.bind(this.C_1_1));
		this.C_1_2.addEventListener("click", updateGrid.bind(this.C_1_2));
		this.C_1_3.addEventListener("click", updateGrid.bind(this.C_1_3));
		
		this.C_2_1.addEventListener("click", updateGrid.bind(this.C_2_1));
		this.C_2_2.addEventListener("click", updateGrid.bind(this.C_2_2));
		this.C_2_3.addEventListener("click", updateGrid.bind(this.C_2_3));
		
		this.C_3_1.addEventListener("click", updateGrid.bind(this.C_3_1));
		this.C_3_2.addEventListener("click", updateGrid.bind(this.C_3_2));
		this.C_3_3.addEventListener("click", updateGrid.bind(this.C_3_3));
		
		this.restart.addEventListener("click", restart);
		
		restart();
		
		function updateGrid() {
			// check if already won
			if (checkifwinner()) {
				return;
			}
			// check if already select
			if (this.currentFrame == 0) {
				this.gotoAndStop(currentUser);
				if (currentUser == 1) {
					currentUser = 2;
				} else {
					currentUser = 1;
				}
				numberTries += 1;
				updateusertext();
			}
		}
		
		function updateusertext() {
			if (checkifwinner()) {
				return; // winner has been found
			}
			if (numberTries == 9) {
				self.info_text.text = "Game over";
			} else {
				if (currentUser == 1) {
					self.info_text.text = "X's turn";
				} else {
					self.info_text.text = "O's turn";
				}
			}
		}
		
		function checkifwinner() {
			// 8 possible combinations to win this game for each user
			// row s
			for (i = 1; i < 4; i++) {
		
				// rows
				if (self['C_' + i + '_1'].currentFrame == 1 && self['C_' + i + '_2'].currentFrame == 1 && self['C_' + i + '_3'].currentFrame == 1) {
					// x wins based on row
					self.info_text.text = "X WINS - Row " + i;
					showwin('Win' + i);
					return true;
				}
				if (self['C_' + i + '_1'].currentFrame == 2 && self['C_' + i + '_2'].currentFrame == 2 && self['C_' + i + '_3'].currentFrame == 2) {
					// o wins based on row
					self.info_text.text = "O WINS - Row " + i;
					showwin('Win' + i);
					return true;
				}
		
				// columns
				if (self['C_1_' + i].currentFrame == 1 && self['C_2_' + i].currentFrame == 1 && self['C_3_' + i].currentFrame == 1) {
					// x wins based on row
					self.info_text.text = "X WINS - Column " + i;
					showwin('Win' + (i + 3));
					return true;
				}
				if (self['C_1_' + i].currentFrame == 2 && self['C_2_' + i].currentFrame == 2 && self['C_3_' + i].currentFrame == 2) {
					// o wins based on row
					self.info_text.text = "O WINS - Column " + i;
					showwin('Win' + (i + 3));
					return true;
				}
			}
		
			// diagonals
			if (self['C_1_1'].currentFrame == 1 && self['C_2_2'].currentFrame == 1 && self['C_3_3'].currentFrame == 1) {
				// x wins based on row
				self.info_text.text = "X WINS - Diagonal";
				showwin('Win7');
				return true;
			}
			if (self['C_1_1'].currentFrame == 2 && self['C_2_2'].currentFrame == 2 && self['C_3_3'].currentFrame == 2) {
				// o wins based on row
				self.info_text.text = "O WINS - Diagonal ";
				showwin('Win7');
				return true;
			}
			if (self['C_1_3'].currentFrame == 1 && self['C_2_2'].currentFrame == 1 && self['C_3_1'].currentFrame == 1) {
				// x wins based on row
				self.info_text.text = "X WINS - Diagonal ";
				showwin('Win8');
				return true;
			}
			if (self['C_1_3'].currentFrame == 2 && self['C_2_2'].currentFrame == 2 && self['C_3_1'].currentFrame == 2) {
				// o wins based on row
				self.info_text.text = "O WINS - Diagonal ";
				showwin('Win8');
				return true;
			}
		}
		
		function showwin(win) {
			// win is the ID of the object to show
			self[win].alpha = 50;
		}
		
		function restart() {
			currentUser = 1; // 1 is user X, 2 is user O
			numberTries = 0;
		
			for (i = 1; i < 4; i++) {
				// rows
				self['C_' + i + '_1'].gotoAndStop(0);
				self['C_' + i + '_2'].gotoAndStop(0);
				self['C_' + i + '_3'].gotoAndStop(0);
		
				self['C_' + i + '_1'].cursor = "pointer";
				self['C_' + i + '_2'].cursor = "pointer";
				self['C_' + i + '_3'].cursor = "pointer";
		
			}
			for (i = 1; i < 9; i++) {
				self['Win' + i].alpha = 0;
			}
			updateusertext();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Controls
	this.info_text = new cjs.Text("X goes first", "27px 'Times'", "#999999");
	this.info_text.name = "info_text";
	this.info_text.textAlign = "center";
	this.info_text.lineHeight = 29;
	this.info_text.lineWidth = 537;
	this.info_text.parent = this;
	this.info_text.setTransform(295.6,44.5);

	this.timeline.addTween(cjs.Tween.get(this.info_text).wait(1));

	// ButtonLayer
	this.text = new cjs.Text("Noughts and Crosses - Tic Tac Toe", "18px 'Times'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 349;
	this.text.parent = this;
	this.text.setTransform(292.5,6.55);

	this.text_1 = new cjs.Text("Restart", "18px 'Times'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 123;
	this.text_1.parent = this;
	this.text_1.setTransform(296.7119,627.25,1.4028,1.4028);

	this.restart = new lib.restart();
	this.restart.name = "restart";
	this.restart.setTransform(296.5,639.3,1.5124,1.4028,0,0,0,59.4,10.6);
	new cjs.ButtonHelper(this.restart, 0, 1, 1);

	this.info_mc = new lib.info();
	this.info_mc.name = "info_mc";
	this.info_mc.setTransform(314.05,37.2,1.2409,1.4028,0,0,0,147.6,8);

	this.C_3_3 = new lib.ClickItem();
	this.C_3_3.name = "C_3_3";
	this.C_3_3.setTransform(466.05,516.95,1.4149,1.4149,0,0,0,56.1,56.1);

	this.C_3_2 = new lib.ClickItem();
	this.C_3_2.name = "C_3_2";
	this.C_3_2.setTransform(286.15,516.95,1.4149,1.4149,0,0,0,56.2,56.1);

	this.C_3_1 = new lib.ClickItem();
	this.C_3_1.name = "C_3_1";
	this.C_3_1.setTransform(106.1,516.95,1.4149,1.4149,0,0,0,56.1,56.1);

	this.C_2_3 = new lib.ClickItem();
	this.C_2_3.name = "C_2_3";
	this.C_2_3.setTransform(466.05,336.95,1.4149,1.4149,0,0,0,56.1,56.2);

	this.C_2_2 = new lib.ClickItem();
	this.C_2_2.name = "C_2_2";
	this.C_2_2.setTransform(286.15,337,1.4149,1.4149,0,0,0,56.2,56.2);

	this.C_2_1 = new lib.ClickItem();
	this.C_2_1.name = "C_2_1";
	this.C_2_1.setTransform(106.1,337.05,1.4149,1.4149,0,0,0,56.1,56.2);

	this.C_1_3 = new lib.ClickItem();
	this.C_1_3.name = "C_1_3";
	this.C_1_3.setTransform(466.05,156.95,1.4149,1.4149,0,0,0,56.1,56.1);

	this.C_1_2 = new lib.ClickItem();
	this.C_1_2.name = "C_1_2";
	this.C_1_2.setTransform(286.2,156.95,1.4149,1.4151,0,0,0,56.2,56.1);

	this.C_1_1 = new lib.ClickItem();
	this.C_1_1.name = "C_1_1";
	this.C_1_1.setTransform(106.1,156.95,1.4149,1.4149,0,0,0,56.1,56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.C_1_1},{t:this.C_1_2},{t:this.C_1_3},{t:this.C_2_1},{t:this.C_2_2},{t:this.C_2_3},{t:this.C_3_1},{t:this.C_3_2},{t:this.C_3_3},{t:this.info_mc},{t:this.restart},{t:this.text_1},{t:this.text}]}).wait(1));

	// Displaywin
	this.Win8 = new lib.Win7();
	this.Win8.name = "Win8";
	this.Win8.setTransform(486.3,148.95,0.9279,0.892,90,0,0,91.8,93.5);
	this.Win8.alpha = 0;

	this.Win7 = new lib.Win7();
	this.Win7.name = "Win7";
	this.Win7.setTransform(96.6,156.05,0.928,0.8937,0,0,0,91.8,93.8);
	this.Win7.alpha = 0;

	this.Win4 = new lib.winline();
	this.Win4.name = "Win4";
	this.Win4.setTransform(144.65,144.5,1,0.9999,90,0,0,161.8,-0.1);
	this.Win4.alpha = 0;

	this.Win5 = new lib.winline();
	this.Win5.name = "Win5";
	this.Win5.setTransform(324.65,144.55,0.9999,0.9995,90,0,0,161.8,-0.1);
	this.Win5.alpha = 0;

	this.Win6 = new lib.winline();
	this.Win6.name = "Win6";
	this.Win6.setTransform(504.85,144.65,1,1.0002,90,0,0,162,-0.2);
	this.Win6.alpha = 0;

	this.Win3 = new lib.winline();
	this.Win3.name = "Win3";
	this.Win3.setTransform(95.65,498.3,0.9927,0.9999,0,0,0,161.8,0.1);
	this.Win3.alpha = 0;

	this.Win2 = new lib.winline();
	this.Win2.name = "Win2";
	this.Win2.setTransform(92.25,318.2,1,0.9999,0,0,0,161.8,0);
	this.Win2.alpha = 0;

	this.Win1 = new lib.winline();
	this.Win1.name = "Win1";
	this.Win1.setTransform(95.65,138.25,0.9927,0.9987,0,0,0,161.8,0);
	this.Win1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Win1},{t:this.Win2},{t:this.Win3},{t:this.Win6},{t:this.Win5},{t:this.Win4},{t:this.Win7},{t:this.Win8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(325.3,354.6,242.09999999999997,300.69999999999993);
// library properties:
lib.properties = {
	id: '3C8B64AF89064849874B0F1744140956',
	width: 600,
	height: 700,
	fps: 24,
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
an.compositions['3C8B64AF89064849874B0F1744140956'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;