const cartPage = require('../pageObject/CartPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const CheckOutPage = require('../pageObject/CheckOutPage.js')
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
    await CheckOutPage.pressStep2Btn();
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
}

module.exports = new Navigation();