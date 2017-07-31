// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
//          vvvvvvvv
cr.plugins_.CordovaTGSDK = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{

	/////////////////////////////////////
	// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
	//                            vvvvvvvv
	var pluginProto = cr.plugins_.CordovaTGSDK.prototype;

	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	var AppID="";
	var self;
	var debug;

	// called on startup for each object type
	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;

		// any other properties you need, e.g...
		// this.myValue = 0;
	};

	var instanceProto = pluginProto.Instance.prototype;

	// called whenever an instance is created
	instanceProto.onCreate = function()
	{
		// note the object is sealed after this call; ensure any properties you'll ever need are set on the object
		// e.g...
		// this.myValue = 0;

	self = this;
	debug = false;

	if (this.properties[1]=='true' || this.properties[1]==true) {debug=true;}

	AppID=this.properties[0];

	if (typeof window['tgsdk'] == 'undefined') {return;} else {
        if (!!console && !!console.log) {
            console.log('Construct2 CordovaTGSDK setDebugModel('+debug+'('+this.properties[1]+')) && initialize('+AppID+')');
        }
		window['tgsdk']['setDebugModel'](debug);
		window['tgsdk']['initialize'](AppID);
	}

	// set events
    document.addEventListener('onPreloadSuccess', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onPreloadSuccess : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onPreloadSuccess, self);
	});
	document.addEventListener('onPreloadFailed', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onPreloadFailed : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onPreloadFailed, self);
	});
	document.addEventListener('onCPADLoaded', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onCPADLoaded : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onCPADLoaded, self);
	});
	document.addEventListener('onVideoADLoaded', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onVideoADLoaded : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onVideoADLoaded, self);
	});
	document.addEventListener('onADAwardSuccess', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onADAwardSuccess : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onADAwardSuccess, self);
	});
	document.addEventListener('onADAwardFailed', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onADAwardFailed : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onADAwardFailed, self);
	});
	document.addEventListener('onShowSuccess', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onShowSuccess : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onShowSuccess, self);
	});
	document.addEventListener('onShowFailed', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onShowFailed : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onShowFailed, self);
	});
	document.addEventListener('onADComplete', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onADComplete : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onADComplete, self);
	});
	document.addEventListener('onADClick', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onADClick : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onADClick, self);
	});
	document.addEventListener('onADClose', function (evt) {
        if (!!evt && !!console && !!console.log) {
            var detail = evt.detail || {};
            var ret = detail.result || detail.error;
            console.log('Construct2 CordovaTGSDK onADClose : '+ret);
        }
		self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onADClose, self);
	});

	window['tgsdk']['preload']();

	};

	function indexToBoolean(index){

		switch (index) {
		case 0:		return true;
		case 1:		return false;
		}

	}

	//////////////////////////////////////
	// Conditions
	function Cnds() {};

	Cnds.prototype.onPreloadSuccess = function ()
	{
		return true;
	};

	Cnds.prototype.onPreloadFailed = function ()
	{
		return true;
	};

	Cnds.prototype.onCPADLoaded = function ()
	{
		return true;
	};

	Cnds.prototype.onVideoADLoaded = function ()
	{
		return true;
	};

	Cnds.prototype.onADAwardSuccess = function ()
	{
		return true;
	};

	Cnds.prototype.onADAwardFailed = function ()
	{
		return true;
	};

	Cnds.prototype.onShowSuccess = function ()
	{
		return true;
	};

	Cnds.prototype.onShowFailed = function ()
	{
		return true;
	};

	Cnds.prototype.onADComplete = function ()
	{
		return true;
	};

	Cnds.prototype.onADClick = function ()
	{
		return true;
	};

	Cnds.prototype.onADClose = function ()
	{
		return true;
	};

	Cnds.prototype.onCouldShowTrue = function ()
	{
		return true;
	};

	Cnds.prototype.onCouldShowFalse = function ()
	{
		return true;
	};

	pluginProto.cnds = new Cnds();

	//////////////////////////////////////
	// Actions
	function Acts() {};

	Acts.prototype.initialize = function ()
	{
		if (typeof window['tgsdk'] == 'undefined') {return;}else{
		  window['tgsdk']['initialize'](AppID);
	  }
	}

	Acts.prototype.preload = function ()
	{
		if (typeof window['tgsdk'] == 'undefined') {return;}else{
		  window['tgsdk']['preload']();
		}
	}

	Acts.prototype.couldShowAd = function (SceneID)
	{
		if (typeof window['tgsdk'] == 'undefined') {return;}else{
		  window['tgsdk']['couldShowAd'](
          SceneID,
          function(){
            self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onCouldShowTrue, self);
          },
          function() {
            self.runtime.trigger(cr.plugins_.CordovaTGSDK.prototype.cnds.onCouldShowFalse, self);
          }
      );
		}
	}

	Acts.prototype.showTestView = function (SceneID)
	{
		if (typeof window['tgsdk'] == 'undefined') {return;}else{
		  window['tgsdk']['showTestView'](SceneID);
		}
	}

	Acts.prototype.showAd = function (SceneID)
	{
		if (typeof window['tgsdk'] == 'undefined') {return;}else{
		  window['tgsdk']['showAd'](SceneID);
		}
	}

	pluginProto.acts = new Acts();

	//////////////////////////////////////
	// Expressions
	function Exps() {};
	pluginProto.exps = new Exps();

}());
