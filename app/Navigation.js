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
    await cartPage.clickProceedBtn();
  }

  async confirmOrder() {
    await checkOutPage.clickStep2Btn();
  }

  async confirmPaymentMethod() {
    await checkOutPage.clickStep3Btn();
  }

  async confirmCreditCartData() {
    await checkOutPage.clickStep4Btn();
  }

  async confirmCustomerData() {
    await checkOutPage.clickStep5Btn();
  }

  async orderSummary() {
    await checkOutPage.clickOrderSummaryBtn();
  }

  async deliveryType() {
    await checkOutPage.clickDeliveryTypeBtn();
  }

  async orderSubmit() {
    await checkOutPage.clickOrderSubmitBtn();
  }

  async Completion() {
    await checkOutPage.clickCompletionBtn()
  }
}

module.exports = new Navigation();