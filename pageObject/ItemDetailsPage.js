var BasePage = require("./BasePage");
const itemDetailsSelectors = require('../selectors/itemDetailsSelectors.js');

class ItemDetailsPage extends BasePage {

  async addItemToCart() {
    await ui5.userInteraction.click(itemDetailsSelectors.addToCartBtn);
  }

  async showCart() {
    await ui5.userInteraction.click(itemDetailsSelectors.showCartBtn);
  }

  async getItemPrice() {
    return await ui5.control.getProperty(itemDetailsSelectors.itemHeader, "number");
  }

  async getItemName() {
    return await ui5.control.getProperty(itemDetailsSelectors.itemHeader, "title");
  }

  async waitForPageOpened() {
    await browser.waitUntil(
      async function () {
        return (await ui5.element.isVisible(itemDetailsSelectors.addToCartBtn));
      }, {
        timeout: this.defaultTimeout,
        timeoutMsg: `Cart Page has not been loaded. Add to cart Button is not visible`,
        interval: this.defaultInterval
      }
    );
  }
}

module.exports = new ItemDetailsPage();