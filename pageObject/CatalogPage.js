const BasePage = require('../pageObject/BasePage')

class CatalogPage extends BasePage {

    accesoriesCategory = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Home",
            "metadata": "sap.m.StandardListItem",
            "bindingContextPath": "/ProductCategories*'AC')"
        }
    };

    firstItem = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.ObjectListItem"
        }
    };

    async selectAccesoriesCategory() {
        await ui5.userInteraction.click(this.accesoriesCategory);
        // await ui5.userInteraction.click(selector);
    }

    async selectFirstItem() {
        await ui5.userInteraction.click(this.firstItem, 0);
    }


}
module.exports = new CatalogPage();