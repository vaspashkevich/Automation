const BasePage = require('../pageObject/BasePage')
const checkOutSelectors = require('../selectors/checkOutSelectors');

class CheckOutPage extends BasePage {

  async clickStep2Btn() {
    await ui5.userInteraction.click(checkOutSelectors.step2Btn);
  }

  async clickCreditCardBtn() {
    await ui5.userInteraction.clickAndRetry(checkOutSelectors.paymentTypeCreditCardBtn);
  }

  async clickStep3Btn() {
    await ui5.userInteraction.click(checkOutSelectors.paymentTypeStep3Btn);
  }

  async enterCardholderName(name) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.creditCardDetailsCardholderName, name)
  }

  async enterCardNumber(number) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.creditCardDetailsCardNumber, number)
  }

  async enterCardSecurityCode(code) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.creditCardDetailsSecurityCode, code);
  }

  async enterCardExpirationDate(date) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.creditCardDetailsExpirationDate, date);
  }

  async enterInvoiceAddress(adress) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddress, adress);
  }

  async clickStep4Btn() {
    await ui5.userInteraction.click(checkOutSelectors.creditCardDetailsStep4Btn);
  }

  async enterInvoiceAddress(adress) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddress, adress);
  }
  async enterInvoiceAddressCity(city) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddressCity, city);
  }

  async enterInvoiceAddressZip(zip) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddressZip, zip);
  }

  async enterInvoiceAddressCountry(country) {
    await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddressCountry, country);
  }

  async clickStep5Btn() {
    await ui5.userInteraction.click(checkOutSelectors.invoiceAddressCityStep5Btn);
  }

  async clickDeliveryTypeBtn() {
    await ui5.userInteraction.click(checkOutSelectors.deliveryTypedStandardBtn);
  }

  async clickOrderSummaryBtn() {
    await ui5.userInteraction.click(checkOutSelectors.deliveryTypedOrderSummaryBtn);
  }

  async clickOrderSubmitBtn() {
    await ui5.userInteraction.click(checkOutSelectors.deliveryTypedOrderSubmitBtn);
  }

  async clickCompletionBtn() {
    await ui5.userInteraction.click(checkOutSelectors.orderCreationCompletionBtn);
  }
}
module.exports = new CheckOutPage();