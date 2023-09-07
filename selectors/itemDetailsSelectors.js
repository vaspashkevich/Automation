const ItemDetailsPage = require("../pageObject/ItemDetailsPage");

class ItemDetailsSelectors {
  addToCartBtn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Product",
      "metadata": "sap.m.Button",
      "text": [{
        "path": "i18n>addToCartShort"
      }]
    }
  };

  showCartBtn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Product",
      "metadata": "sap.ui.core.Icon",
      "src": "sap-icon://cart"
    }
  };

  itemHeader = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Product",
      "metadata": "sap.m.ObjectHeader"
    }
  };
}

module.exports = new ItemDetailsSelectors();