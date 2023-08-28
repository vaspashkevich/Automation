var BasePage = require("./BasePage");

class ItemDetailsPage extends BasePage {

    viewName = "sap.ui.demo.cart.view.Welcome";

    addToCartBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.Button",
            "text": [{
                "path": "i18n>addToCartShort"
            }]
        }
    };

    showCartBtnSelector = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.ui.core.Icon",
            "src": "sap-icon://cart"
        }
    };

    async addItemToCart() {
        await ui5.userInteraction.click(this.addToCartBtn);
    
    }
}

module.exports = new ItemDetailsPage();