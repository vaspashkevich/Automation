const cartPage = require('../pageObject/CartPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const CheckOutPage = require('../pageObject/CheckOutPage.js')
const catalogPage = require('../pageObject/CatalogPage.js')


var BasePage = require("../pageObject/BasePage.js");

class Application extends BasePage {

  async addItemToCartByPosition(position) {
    await catalogPage.selectCatalogItem(position);
    await itemDetailsPage.addItemToCart();
  }

  async filterByAvailability() {
    await catalogPage.filterByAvailability();
  }

  async deleteItemFromCartByPosition(position) {
    await cartPage.deleteItemFromCart(position);
    await cartPage.confirmDelete();
  }

  async confirmOrder() {
    await CheckOutPage.pressStep2Btn();
  }

  async selectPaymentMethod() {
    await CheckOutPage.pressCreditCardBtn();
  }

  async confirmPaymentMethod() {
    await CheckOutPage.pressStep3Btn();
  }

  async confirmCreditCartData() {
  await CheckOutPage.pressStep4Btn();
  }

  async clickOutOfField() {
  await CheckOutPage.clickOutOfField();
  }

  async confirmCustomerData() {
  await CheckOutPage.pressStep5Btn();
  }

  async fillCreditCardData(dataFile) {
    await CheckOutPage.enterCardholderName(dataFile.creditCardDetails.creditCardDetailsCardholderName);
    await CheckOutPage.enterCardNumber(dataFile.creditCardDetails.creditCardDetailsCardNumber);
    await CheckOutPage.enterCardSecurityCode(dataFile.creditCardDetails.creditCardDetailsSecurityCode);
    await CheckOutPage.enterCardExpirationDate(dataFile.creditCardDetails.creditCardDetailsExpirationDate);
    await common.userInteraction.pressTab();
  }

  async fillCustomerData(dataFile) {
    await CheckOutPage.enterInvoiceAddress(dataFile.InvoiceAddressDetails.invoiceAddress);
    await CheckOutPage.enterInvoiceAddressCity(dataFile.InvoiceAddressDetails.invoiceAddressCity);
    await CheckOutPage.enterInvoiceAddressZip(dataFile.InvoiceAddressDetails.invoiceAddressZip);
    await CheckOutPage.enterInvoiceAddressCountry(dataFile.InvoiceAddressDetails.invoiceAddressCountry);
 }
}

    // await ui5.userInteraction.click(checkOutSelectors.deliveryTypedStandardBtn);
    // await ui5.userInteraction.click(checkOutSelectors.deliveryTypedOrderSummaryBtn);
    // await ui5.userInteraction.click(checkOutSelectors.deliveryTypedOrderSubmitBtn);
    // await ui5.userInteraction.click(checkOutSelectors.orderCreationCompletionBtn);
  

module.exports = new Application()