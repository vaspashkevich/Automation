const { Given, When, Then } = require('@wdio/cucumber-framework');
const catalogPage = require('../pageObject/CatalogPage')
const itemDetailsPage = require('../pageObject/ItemDetailsPage')
const cartPage = require('../pageObject/CartPage')

Given('I include feature and story name', () => {
  allureReporter.addFeature('addItem.feature');
});

Given(/^User had navigated to the application$/, async function() {
  await catalogPage.openApplication();
  await browser.takeScreenshot();
});

When(/^Add item with index (.*) to the cart$/, async function(index) {
  await catalogPage.waitForPageOpened();
  await catalogPage.selectAccesoriesCategory();
  await catalogPage.filterByAvailability();
  await catalogPage.selectCatalogItem(index - 1);
  await itemDetailsPage.waitForPageOpened();
  await itemDetailsPage.addItemToCart();
  await browser.takeScreenshot();
});

When(/^Open cart$/, async function() {
  await itemDetailsPage.showCart();
  await cartPage.waitForPageOpened();
  await browser.takeScreenshot();
});

Then(/^Item is in the cart$/, async function() {
});
