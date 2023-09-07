const cartPage = require('../pageObject/CartPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const checkOutPage = require('../pageObject/checkOutPage.js')
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
    await checkOutPage.pressCreditCardBtn();
  }

  async fillCreditCardData(dataFile) {
    await checkOutPage.enterCardholderName(dataFile.creditCardDetails.creditCardDetailsCardholderName);
    await checkOutPage.enterCardNumber(dataFile.creditCardDetails.creditCardDetailsCardNumber);
    await checkOutPage.enterCardSecurityCode(dataFile.creditCardDetails.creditCardDetailsSecurityCode);
    await checkOutPage.enterCardExpirationDate(dataFile.creditCardDetails.creditCardDetailsExpirationDate);
    await common.userInteraction.pressTab();
  }

  async fillCustomerData(dataFile) {
    await checkOutPage.enterInvoiceAddress(dataFile.InvoiceAddressDetails.invoiceAddress);
    await checkOutPage.enterInvoiceAddressCity(dataFile.InvoiceAddressDetails.invoiceAddressCity);
    await checkOutPage.enterInvoiceAddressZip(dataFile.InvoiceAddressDetails.invoiceAddressZip);
    await checkOutPage.enterInvoiceAddressCountry(dataFile.InvoiceAddressDetails.invoiceAddressCountry);
  }
}

module.exports = new Application()