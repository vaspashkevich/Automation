class BasePage {
  
  defaultTimeout = 10000;
  defaultInterval = 500;

  async openApplication() {
    await ui5.navigation.navigateToApplication("categories")
  }

    async getSelectorWithNewProperty(initialSelector, propertyName, propertyValue) {
      let newSelector = await structuredClone(initialSelector);
      newSelector.elementProperties[propertyName] = propertyValue;
  
      return newSelector;
    }
  
  async getElementByProperty(selector, propertyName, propertyValue) {
  let elementsBySelector = await ui5.element.getAllDisplayed(selector);
  for (let i = 0; i < elementsBySelector.length; i++ ) {
    let result = await ui5.control.getProperty(elementsBySelector[i], propertyName);
    if (result == propertyValue) {
      console.log (elementsBySelector[i]);
      return i;
    }}
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