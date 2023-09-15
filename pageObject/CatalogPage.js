const BasePage = require('../pageObject/BasePage')
const catalogSelectors = require('../selectors/catalogSelectors.js');

let timeout = 6000;
let currentTime = 0;
let step = 1000;

class CatalogPage extends BasePage {

  async filterByAvailability() {
    await ui5.userInteraction.click(catalogSelectors.filterItems);
    await ui5.userInteraction.click(catalogSelectors.filterPropertyAvailability);
    await ui5.userInteraction.click(catalogSelectors.filterCheckboxAvailable);
    await ui5.userInteraction.click(catalogSelectors.applyFiltersBtn);
  }

  async selectAccesoriesCategory() {
    await ui5.userInteraction.click(catalogSelectors.accesoriesCategory);
  }

  async selectCatalogItem(index) {
    await ui5.userInteraction.click(catalogSelectors.catalogItem, index);
  }

  async waitForPageOpened() {
    await browser.waitUntil(
      async function () {
        return (await ui5.element.isVisible(catalogSelectors.accesoriesCategory));
      }, {
        timeout: 5000,
        timeoutMsg: `Page is not open because element "accesoriesCategory" is not visible`,
        interval: 500
      }
    );
 };

  async waitForPageOpenedAssert() {
    await ui5.assertion.expectToBeVisible(catalogSelectors.accesoriesCategory, 0, 5000);
  }
}

module.exports = new CatalogPage();