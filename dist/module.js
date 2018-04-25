'use strict';

System.register(['./components/assets', './components/credentials', './components/config'], function (_export, _context) {
  "use strict";

  var AssetPageCtrl, CredentialPageCtrl, ExampleAppConfigCtrl;
  return {
    setters: [function (_componentsAssets) {
      AssetPageCtrl = _componentsAssets.AssetPageCtrl;
    }, function (_componentsCredentials) {
      CredentialPageCtrl = _componentsCredentials.CredentialPageCtrl;
    }, function (_componentsConfig) {
      ExampleAppConfigCtrl = _componentsConfig.ExampleAppConfigCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', ExampleAppConfigCtrl);

      _export('AssetPageCtrl', AssetPageCtrl);

      _export('CredentialPageCtrl', CredentialPageCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
