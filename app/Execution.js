const cartPage = require('../pageObject/CartPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const CheckOutPage = require('../pageObject/CheckOutPage.js')
const catalogPage = require('../pageObject/CatalogPage.js')

class Application {
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

  async selectPaymentMethod() {
    await CheckOutPage.pressCreditCardBtn();
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

module.exports = new Application()