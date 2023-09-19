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

  async getSelectorByProp(property, value) {
    catalogSelectors.catalogItem[property] = value;
  }

  async selectCatalogItemByName(name) {
    let catalogSelectorWithTitle = await this.getSelectorWithNewProperty(catalogSelectors.catalogItem, "title", name); 
    await ui5.userInteraction.click(catalogSelectorWithTitle);
  }
  
  async waitForPageOpened() {
    await browser.waitUntil(
      async function () {
        return (await ui5.element.isVisible(catalogSelectors.accesoriesCategory));
      }, {
        timeout: this.defaultTimeout,
        timeoutMsg: `Catalog Page has not been loaded. Accesories category element is not visible`,
        interval: this.defaultInterval
      }
    );
 };
}

module.exports = new CatalogPage();