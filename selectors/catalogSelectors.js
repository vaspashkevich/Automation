class CatalogSelectors {

  accesoriesCategory = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Home",
      "metadata": "sap.m.StandardListItem",
      "bindingContextPath": "/ProductCategories*'AC')"
    }
  };

  catalogItem = {
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
}

module.exports = new CatalogSelectors();