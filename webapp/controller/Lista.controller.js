sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.fiori_13_t.cadastro_de_alunos.controller.Lista", {

		/*
				onInit: function () {
					var sURL = "https://run.mocky.io/v3/4af39bbc-1909-4c96-a283-a1d92c7757ae";
					var oModelo = new sap.ui.model.json.JSONModel(sURL); // GET
					this.byId("list").setModel(oModelo);
				},
		*/

		onSearch: function (oControlEvent) {
			var oControlField = oControlEvent.getSource();
			var sValue = oControlField.getValue();
			sap.m.MessageToast.show(sValue);
		},

		onAdd: function () {
			sap.m.MessageToast.show("Clicou!");
		},

		onItemPress: function (oEvent) {
			// sap.m.MessageToast.show("Clicou na lista!");
			var oItem = oEvent.getParameters().listItem;
			var oContext = oItem.getBindingContext();
			var oAluno = oContext.getObject();
			var sId = oAluno.Id;
			this.getOwnerComponent().getRouter().navTo("exibir", {
				codigo: sId
			});
		}
	});
});