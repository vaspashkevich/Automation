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
        timeout: 10000,
        timeoutMsg: `Page is not open because element "addToCartBtn" is not visible`,
        interval: 500
      }
    );
  }
}

module.exports = new ItemDetailsPage();