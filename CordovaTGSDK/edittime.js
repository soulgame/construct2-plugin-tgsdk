function GetPluginSettings()
{
	return {
		"name":			"CordovaTGSDK",
		"id":			"CordovaTGSDK",
		"version":		"1.0",
		"description":	"Cordova Plugin For TGSDK",
		"author":		"YoMob",
		"help url":		"https://www.yomob.com/",
		"category":		"CordovaTGSDK",
		"type":			"object",
		"rotatable":	false,
		"flags":	pf_singleglobal
	};
};

AddCondition(0, cf_trigger, "On Preload Success", "Preload", "On Preload Success",
	"Triggered when preload success.", "onPreloadSuccess");

AddCondition(1, cf_trigger, "On Preload Failed", "Preload", "On Preload Failed",
	"Triggered when preload failed.", "onPreloadFailed");

AddCondition(2, cf_trigger, "On CP AD Loaded", "Preload", "On CP AD Loaded",
	"Triggered when a CP AD loaded.", "onCPADLoaded");

AddCondition(3, cf_trigger, "On Video AD Loaded", "Preload", "On Video AD Loaded",
	"Triggered when a Video AD loaded.", "onVideoADLoaded");

AddCondition(4, cf_trigger, "On AD Award Success", "RewardVideo", "On AD Award Success",
	"Triggered when an ad award success.", "onADAwardSuccess");

AddCondition(5, cf_trigger, "On AD Award Failed", "RewardVideo", "On AD Award Failed",
	"Triggered when an ad award failed.", "onADAwardFailed");

AddCondition(6, cf_trigger, "On Show Success", "RewardVideo", "On Show Success",
	"Triggered when an ad show success.", "onShowSuccess");

AddCondition(7, cf_trigger, "On Show Failed", "RewardVideo", "On Show Failed",
	"Triggered when an ad show failed.", "onShowFailed");

AddCondition(8, cf_trigger, "On AD Complete", "RewardVideo", "On AD Complete",
	"Triggered when an video ad complete.", "onADComplete");

AddCondition(9, cf_trigger, "On AD Click", "RewardVideo", "On AD Click",
	"Triggered when an ad click.", "onADClick");

AddCondition(10, cf_trigger, "On AD Close", "RewardVideo", "On AD Close",
	"Triggered when an ad fails close.", "onADClose");

AddCondition(11, cf_trigger, "On Could Show True", "RewardVideo", "On Could Show True",
	"Triggered when call couldShowAd with True.", "onCouldShowTrue");

AddCondition(12, cf_trigger, "On Could Show False", "RewardVideo", "On Could Show False",
	"Triggered when call couldShowAd with False.", "onCouldShowFalse");


AddAction(0, af_none, "Initialize TGSDK", "Preload", "Initialize TGSDK",
	"Initialize the TGSDK.", "initialize");

AddAction(1, af_none, "Preload Video Ads", "Preload", "Preload Video Ads", "To have enough time to load ads resources.", "preload");

AddStringParam("SceneID", "Your scene id from Yomob");
AddAction(2, af_none, "Could Show Ad", "RewardVideo", "Could Show Ad", "Video Ad could show if return ture.", "couldShowAd");

AddStringParam("SceneID", "Your scene id from Yomob");
AddAction(3, af_none, "Show Test View", "RewardVideo", "Show Test View",
	"APIs provided by Ads Test Tool instead of original ads API to better test your in App ads view logic.", "showTestView");

AddStringParam("SceneID", "Your scene id from Yomob");
AddAction(4, af_none, "Show A Video Ad", "RewardVideo", "Show A Video Ad",
	"If the ads of the corresponding scene are ready, the video ads play API can be called to play the ads.", "showAd");

ACESDone();

var property_list = [
    new cr.Property(ept_text,   "App ID",  "", "Your AppID from Yomob."),
    new cr.Property(ept_combo,   "Debug Mode", "true", "Show debug ads and logs.","false|true")
];

// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");

	// Save the constructor parameters
	this.instance = instance;
	this.type = type;

	// Set the default property values from the property table
	this.properties = {};

	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;

	// Plugin-specific variables
	// this.myValue = 0...
}

// Called when inserted via Insert Object Dialog for the first time
IDEInstance.prototype.OnInserted = function()
{
}

// Called when double clicked in layout
IDEInstance.prototype.OnDoubleClicked = function()
{
}

// Called after a property has been changed in the properties bar
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}

// For rendered objects to load fonts or textures
IDEInstance.prototype.OnRendererInit = function(renderer)
{
}

// Called to draw self in the editor if a layout object
IDEInstance.prototype.Draw = function(renderer)
{
}

// For rendered objects to release fonts or textures
IDEInstance.prototype.OnRendererReleased = function(renderer)
{
}
