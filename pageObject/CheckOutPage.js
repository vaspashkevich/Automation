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
    async pressStep2Btn() {
        await ui5.userInteraction.click(this.step2Button);
    }

    PaymentTypeCreditCardBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*payViaCC-button"
        }
    };

    async CreditCardBtn() {
        await ui5.userInteraction.clickAndRetry(this.PaymentTypeCreditCardBtn);
    }
    PaymentTypeStep3Btn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*paymentTypeStep-nextButton"
        }
    };

    async Step3Btn() {
        await ui5.userInteraction.click(this.PaymentTypeStep3Btn);
    }

    CreditCardDetailsCardholderName = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*creditCardHolderName"
        }
    };
    async fillCardholderName(name) {
        await ui5.userInteraction.clearAndFill(this.CreditCardDetailsCardholderName, name)
    }

    CreditCardDetailsCardNumber = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.MaskInput",
            "id": "*creditCardNumber"
        }
    };
    async fillCardNumber(number) {
        await ui5.userInteraction.clearAndFill(this.CreditCardDetailsCardNumber, number)
    }

    CreditCardDetailsSecurityCode = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.MaskInput",
            "id": "*creditCardSecurityNumber"
        }
    };
    async fillCardSecurityCode(code) {
        await ui5.userInteraction.clearAndFill(this.CreditCardDetailsSecurityCode, code);
    }

    CreditCardDetailsExpirationDate = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.DatePicker",
            "id": "*creditCardExpirationDate"
        }
    };
    async fillCardExpirationDate(date) {
        await ui5.userInteraction.clearAndFill(this.CreditCardDetailsExpirationDate, date);
    }

    CreditCardDetailsStep4Btn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*creditCardStep-nextButton"
        }
    };
    async clickStep4Btn() {
        await ui5.userInteraction.click(this.CreditCardDetailsStep4Btn);
    }
    InvoiceAddress = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressAddress"
        }
    };
    async fillInvoiceAddress(adress) {
        await ui5.userInteraction.clearAndFill(this.InvoiceAddress, adress);
    }

    InvoiceAddressCity = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressCity"
        }
    };

    InvoiceAddressZip = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressZip"
        }
    };

    InvoiceAddressCountry = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressCountry"
        }
    };

    InvoiceAddressCityStep5Btn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*invoiceStep-nextButton"
        }
    };
    async Step5Btn() {
        await ui5.userInteraction.click(this.InvoiceAddressCityStep5Btn);
    }
    DeliveryTypedStandardBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*payViaCC-button"
        }
    };

    async DeliveryTypeBtn() {
        await ui5.userInteraction.click(this.DeliveryTypedStandardBtn);
    }
    DeliveryTypedOrderSummaryBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*invoiceStep-nextButton"
        }
    };
    async OrderSummaryBtn() {
        await ui5.userInteraction.click(this.DeliveryTypedOrderSummaryBtn);
    }

    DeliveryTypedOrderSubmitBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*deliveryTypeStep-nextButton"
        }
    };
    async OrderSubmitBtn() {
        await ui5.userInteraction.click(this.DeliveryTypedOrderSubmitBtn);
    }

    OrderCreationCompletionBtn = {
        "elementProperties": {
            "metadata": "sap.m.Button",
            "text": "Yes"
        }
    };
    async CompletionBtn() {
        await ui5.userInteraction.click(this.DeliveryTypedOrderSubmitBtn);
    }
}
module.exports = new CheckOutPage();