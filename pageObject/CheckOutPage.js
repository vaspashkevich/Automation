const BasePage = require('../pageObject/BasePage')

class CheckOutPage extends BasePage {
    viewName = "sap.ui5.demo.cart.view.CheckOutPage"

    step2Button = {
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
            "id": "*payViaCC-button"
        }
    };

    deliveryTypedOrderSummaryBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*invoiceStep-nextButton"
        }
    };

    deliveryTypedOrderSubmitBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*deliveryTypeStep-nextButton"
        }
    };

    orderCreationCompletionBtn = {
        "elementProperties": {
            "metadata": "sap.m.Button",
            "text": "Yes"
        }
    };

    async pressStep2Btn() {
        await ui5.userInteraction.click(this.step2Button);
    }

    async pressCreditCardBtn() {
        await ui5.userInteraction.clickAndRetry(this.paymentTypeCreditCardBtn);
    }

    async pressStep3Btn() {
        await ui5.userInteraction.click(this.paymentTypeStep3Btn);
    }

    async enterCardholderName(name) {
        await ui5.userInteraction.clearAndFill(this.creditCardDetailsCardholderName, name)
    }

    async enterCardNumber(number) {
        await ui5.userInteraction.clearAndFill(this.creditCardDetailsCardNumber, number)
    }

    async enterCardSecurityCode(code) {
        await ui5.userInteraction.clearAndFill(this.creditCardDetailsSecurityCode, code);
    }

    async enterCardExpirationDate(date) {
        await ui5.userInteraction.clearAndFill(this.creditCardDetailsExpirationDate, date);
    }

    async enterInvoiceAddress(adress) {
        await ui5.userInteraction.clearAndFill(this.invoiceAddress, adress);
    }

    async pressStep4Btn() {
        await ui5.userInteraction.click(this.creditCardDetailsStep4Btn);
    }

    async enterInvoiceAddress(adress) {
        await ui5.userInteraction.clearAndFill(this.invoiceAddress, adress);
    }
    async enterInvoiceAddressCity(city) {
        await ui5.userInteraction.clearAndFill(this.invoiceAddressCity, city);
    }

    async enterInvoiceAddressZip(zip) {
        await ui5.userInteraction.clearAndFill(this.invoiceAddressZip, zip);
    }

    async enterInvoiceAddressCountry(country) {
        await ui5.userInteraction.clearAndFill(this.invoiceAddressCountry, country);
    }

    async pressStep5Btn() {
        await ui5.userInteraction.click(this.invoiceAddressCityStep5Btn);
    }

    async pressDeliveryTypeBtn() {
        await ui5.userInteraction.click(this.deliveryTypedStandardBtn);
    }

    async pressOrderSummaryBtn() {
        await ui5.userInteraction.click(this.deliveryTypedOrderSummaryBtn);
    }

    async pressOrderSubmitBtn() {
        await ui5.userInteraction.click(this.deliveryTypedOrderSubmitBtn);
    }

    async pressCompletionBtn() {
        await ui5.userInteraction.click(this.orderCreationCompletionBtn);
    }

}
module.exports = new CheckOutPage();