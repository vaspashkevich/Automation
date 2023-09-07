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
}

module.exports = new ItemDetailsPage();