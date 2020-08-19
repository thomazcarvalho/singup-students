function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZT48_13_OVLY_T_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}