const BasePage = require('../pageObject/BasePage')
const catalogSelectors = require('../selectors/catalogSelectors.js');

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
        timeoutMsg: `Catalog Page has not been loaded. Accesories category element is not visible`,
        interval: 500
      }
    );
 };
}

module.exports = new CatalogPage();