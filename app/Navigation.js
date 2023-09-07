const cartPage = require('../pageObject/CartPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const checkOutPage = require('../pageObject/CheckOutPage.js')
const catalogPage = require('../pageObject/CatalogPage.js')

class Navigation {
  async application() {
    await catalogPage.openApplication();
  }

  async cart() {
    await itemDetailsPage.showCart();
  }

  async accesoriesCategory() {
    await catalogPage.selectAccesoriesCategory();
  }

  async checkoutPage() {
    await cartPage.pressProceedBtn();
  }

  async confirmOrder() {
    await checkOutPage.pressStep2Btn();
  }

  async confirmPaymentMethod() {
    await checkOutPage.pressStep3Btn();
  }

  async confirmCreditCartData() {
    await checkOutPage.pressStep4Btn();
  }

  async clickOutOfField() {
    await checkOutPage.clickOutOfField();
  }

  async confirmCustomerData() {
    await checkOutPage.pressStep5Btn();
  }
}

module.exports = new Navigation();