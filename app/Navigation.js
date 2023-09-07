const cartPage = require('../pageObject/CartPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const CheckOutPage = require('../pageObject/CheckOutPage.js')
const catalogPage = require('../pageObject/CatalogPage.js')

var BasePage = require("../pageObject/BasePage.js");

class Navigation extends BasePage {

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
}

module.exports = new Navigation();