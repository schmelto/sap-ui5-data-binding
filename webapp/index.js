sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			address: {
				street: "Dietmar-Hopp-Allee 16",
				city: "Walldorf",
				zip: "69190",
				country: "Germany"
			},
			salesAmount: 12345.6789,
			currencyCode: "EUR"

		});

		// Create a resource bundle for language specific texts
		// the configured supportedLocales represent the i18n files present:
		// * "" - i18n/i18n.properties
		// the configured fallbackLocale should represent one of these files
		// * "" - according to the fallback chain the root bundle is the last fallback.
		//   Configuring it explicitly avoids side effects when additional resource files are added.
		// @see https://sapui5.hana.ondemand.com/#/topic/ec753bc539d748f689e3ac814e129563
		var oResourceModel = new ResourceModel({
			bundleName: "webapp.i18n.i18n",
			supportedLocales: ["", "de"],
			fallbackLocale: ""
		});

		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");


		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		// Display the XML view called "App"
		var oView = new XMLView({
			viewName: "webapp.view.App"
		});

		// Register the view with the message manager
		sap.ui.getCore().getMessageManager().registerObject(oView, true);


		// Insert the view into the DOM
		oView.placeAt("content");
	});
});