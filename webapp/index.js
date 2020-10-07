sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel"
], function (Text, JSONModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {

		//CReate a JSON model from an object literal
		var oModel = new JSONModel({
			greetingText: "Hi, my name ist Harry Hawk"
		});
		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);
		// Displa a text element whose text is delivered from the model object
		new Text({text: "{/greetingText}"}).placeAt("content");
	});
});