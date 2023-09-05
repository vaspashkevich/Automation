const BasePage = require('../pageObject/BasePage')

class CatalogPage extends BasePage {

    accesoriesCategory = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Home",
            "metadata": "sap.m.StandardListItem",
            "bindingContextPath": "/ProductCategories*'AC')"
        }
    };

    CatalogItem = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.ObjectListItem"
        }
    };

    filterItems = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.Button",
            "id": "*masterListFilterButton"
        }
    };

    filterPropertyAvailability = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.StandardListItem",
                "title": "Availability"
        }
    };

    filterCheckboxAvailable = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.CheckBox"
        },
        "ancestorProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.StandardListItem",
            "title": "Available"
        }
    };

    applyFiltersBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.Button",
            "id": "*categoryFilterDialog-acceptbutton"
        }
    };

    async filterByAvailability() {
        await ui5.userInteraction.click(this.filterItems);
        await ui5.userInteraction.click(this.filterPropertyAvailability);
        await ui5.userInteraction.click(this.filterCheckboxAvailable);
        await ui5.userInteraction.click(this.applyFiltersBtn);
    }

    async selectAccesoriesCategory() {
        await ui5.userInteraction.click(this.accesoriesCategory);
    }

    async selectCatalogItem(index) {
        await ui5.userInteraction.click(this.CatalogItem, index);
    }
}

module.exports = new CatalogPage();