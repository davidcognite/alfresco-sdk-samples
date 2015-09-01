function addMyRMComplianceMetadata(){
   // Get the search result widget from the model.
   var result = widgetUtils.findObject(model.jsonModel.widgets, "id", "FCTSRCH_SEARCH_RESULT");

   // Preserve existing config if it's there, but create if not.
   result.config = result.config || {};
   result.config.widgetsBelow = result.config.widgetsBelow || [];

   // Render our custom properties.
   result.config.widgetsBelow.push({
      name: "alfresco/renderers/Property",
      config: {
         propertyToRender: "node.properties.myrm_myComplianceID",
         label: "label.renderer.myComplianceID",
         renderOnNewLine: true
      }
   });
   result.config.widgetsBelow.push({
      name: "alfresco/renderers/Property",
      config: {
         propertyToRender: "node.properties.myrm_myComplianceOfficer",
         label: "label.renderer.myComplianceOfficer",
         renderOnNewLine: true
      }
   });
}

addMyRMComplianceMetadata();