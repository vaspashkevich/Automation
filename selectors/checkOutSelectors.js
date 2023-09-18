class CheckoutSelectors {
  step2Btn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Button",
      "id": "*contentsStep-nextButton"
    }
  };

  paymentTypeCreditCardBtn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Button",
      "id": "*payViaCC-button"
    }
  };

  paymentTypeStep3Btn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Button",
      "id": "*paymentTypeStep-nextButton"
    }
  };

  creditCardDetailsCardholderName = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Input",
      "id": "*creditCardHolderName"
    }
  };

  creditCardDetailsCardNumber = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.MaskInput",
      "id": "*creditCardNumber"
    }
  };

  creditCardDetailsSecurityCode = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.MaskInput",
      "id": "*creditCardSecurityNumber"
    }
  };

  creditCardDetailsExpirationDate = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.DatePicker",
      "id": "*creditCardExpirationDate"
    }
  };

  creditCardDetailsStep4Btn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Button",
      "id": "*creditCardStep-nextButton"
    }
  };

  invoiceAddress = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Input",
      "id": "*invoiceAddressAddress"
    }
  };

  invoiceAddressCity = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Input",
      "id": "*invoiceAddressCity"
    }
  };

  invoiceAddressZip = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Input",
      "id": "*invoiceAddressZip"
    }
  };

  invoiceAddressCountry = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Input",
      "id": "*invoiceAddressCountry"
    }
  };

  invoiceAddressCityStep5Btn = {
    "elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Checkout",
      "metadata": "sap.m.Button",
      "id": "*invoiceStep-nextButton"
    }
  };

  deliveryTypedStandardBtn = {
    "elementProperties": {
        "viewName": "sap.ui.demo.cart.view.Checkout",
        "metadata": "sap.m.Button",
        "text": "Standard"
    }
};

  deliveryTypedOrderSummaryBtn = {
    "elementProperties": {
        "viewName": "sap.ui.demo.cart.view.Checkout",
        "metadata": "sap.m.Button",
        "id": "*deliveryTypeStep-nextButton"
    }
};

  deliveryTypedOrderSubmitBtn = {
    "elementProperties": {
        "viewName": "sap.ui.demo.cart.view.Checkout",
        "metadata": "sap.m.Button",
        "id": "*submitOrder"
    }
};

  orderCreationCompletionBtn = {
    "elementProperties": {
      "metadata": "sap.m.Button",
      "text": "Yes"
    }
  };
}

module.exports = new CheckoutSelectors();