const BasePage = require('../pageObject/BasePage')
const checkOutSelectors = require('../selectors/checkOutSelectors');

class CheckOutPage extends BasePage {

  async pressStep2Btn() {
    await ui5.userInteraction.click(checkOutSelectors.step2Btn);
  }

  async pressCreditCardBtn() {
    await ui5.userInteraction.clickAndRetry(checkOutSelectors.paymentTypeCreditCardBtn);
  }

  async pressStep3Btn() {
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

  async pressStep4Btn() {
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

  async pressStep5Btn() {
    await ui5.userInteraction.click(checkOutSelectors.invoiceAddressCityStep5Btn);
  }

  async pressDeliveryTypeBtn() {
    await ui5.userInteraction.click(checkOutSelectors.deliveryTypedStandardBtn);
  }

  async pressOrderSummaryBtn() {
    await ui5.userInteraction.click(checkOutSelectors.deliveryTypedOrderSummaryBtn);
  }

  async pressOrderSubmitBtn() {
    await ui5.userInteraction.click(checkOutSelectors.deliveryTypedOrderSubmitBtn);
  }

  async pressCompletionBtn() {
    await ui5.userInteraction.click(checkOutSelectors.orderCreationCompletionBtn);
  }
}
module.exports = new CheckOutPage();