var BasePage = require("./BasePage");
const cartSelectors = require('../selectors/cartSelectors.js');

class CartPage extends BasePage {

  async pressProceedBtn() {
    await ui5.userInteraction.click(cartSelectors.proceedBtnSelector);
  }

  async editCart() {
    await ui5.userInteraction.click(cartSelectors.editCartBtn);
  }

  async deleteItemFromCart(index) {
    await ui5.userInteraction.click(cartSelectors.deleteItemFromCartBtn, index);
  }

  async confirmDelete() {
    await ui5.userInteraction.click(cartSelectors.confirmDeleteBtn);
  }

  async getCartItemName(index) {
    const elem = await ui5.element.getDisplayed(cartSelectors.ItemInCart, index);
    return await ui5.control.getProperty(elem, "title");
  }

  async getCartItemQuantity(index) {
    const elem = await ui5.element.getDisplayed(cartSelectors.ItemInCart, index);
    let cartQuantity = await ui5.control.getProperty(elem, "intro");
    cartQuantity = cartQuantity.slice(0, -2);
    return Number(cartQuantity);
  }

  async getCartItemPrice(index) {
    const elem = await ui5.element.getDisplayed(cartSelectors.ItemInCart, index);
    return await ui5.control.getProperty(elem, "number");
  }

  async getCartItemsArray() {
    console.log(await ui5.element.getDisplayed(cartSelectors.ItemInCart));
    return await ui5.element.getAllDisplayed(cartSelectors.ItemInCart);
  }

  async waitForPageOpened() {
    await browser.waitUntil(
      async function () {
        return (await ui5.element.isVisible(cartSelectors.proceedBtnSelector));
      }, {
        timeout: this.defaultTimeout,
        timeoutMsg: `Cart Page has not been loaded. Proceed Button is not visible`,
        interval: this.defaultInterval
      }
    );
  }
};

module.exports = new CartPage();