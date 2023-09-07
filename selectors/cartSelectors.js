class CartSelectors {
  proceedBtnSelector = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Cart",
      "metadata": "sap.m.Button",
      "id": "*proceedButton"
    }
  };

  ItemInCart = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Cart",
      "metadata": "sap.m.ObjectListItem"
    }
  };

  editCartBtn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Cart",
      "metadata": "sap.ui.core.Icon",
      "id": "*editButton-img"
    }
  };

  deleteItemFromCartBtn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Cart",
      "metadata": "sap.ui.core.Icon"
    }
  };

  confirmDeleteBtn = {
    "elementProperties": {
      "metadata": "sap.m.Button",
      "text": "Delete"
    }
  };
}

module.exports = new CartSelectors();
