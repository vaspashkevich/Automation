var BasePage = require('../pageObject/BasePage')

class CartPage extends BasePage {
    viewName = "sap.ui5.demo.cart.view.Cart"

   proceedBtnSelector = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.Button",
            "id": "*proceedButton"
        }
    };
    async pressProceedBtn() {
        await ui5.userInteraction.click(this.proceedBtnSelector);
    }
}
module.exports = new CartPage();