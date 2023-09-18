class BasePage {
  
  defaultTimeout = 10000;
  defaultInterval = 500;

  async openApplication() {
    await ui5.navigation.navigateToApplication("categories")
  }

  async getSelectorWithNewProperty(initialSelector, propertyName, propertyValue) {
    let elementPropertiesWithNewProperty = Object.assign({}, initialSelector.elementProperties, {[propertyName]: propertyValue});
    let selectorWithNewProperty = Object.assign({}, initialSelector, elementPropertiesWithNewProperty);

    return selectorWithNewProperty;
  }

  async setReferenceValue(valueName, value) {
    const references = await browser.config.params.import.references;
    await common.assertion.expectDefined(references);
    await common.assertion.expectDefined(references[valueName]);

    references[valueName] = value;
    browser.config.params.export.references = references;
  }

  async getReferenceValue(valueName) {
    const references = await browser.config.params.import.references;
    await common.assertion.expectDefined(references);
    await common.assertion.expectDefined(references[valueName]);

    return references[valueName];
  }
}

module.exports = BasePage;