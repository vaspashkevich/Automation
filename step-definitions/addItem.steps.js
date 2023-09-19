const { Given, When, Then } = require('@wdio/cucumber-framework');
const catalogPage = require('../pageObject/CatalogPage')
const itemDetailsPage = require('../pageObject/ItemDetailsPage')
const cartPage = require('../pageObject/CartPage')
const checkOutPage = require('../pageObject/CheckOutPage')

var dataFile = require('../data/orderCart.json');

Given('I include feature and story name', async function() {
  allureReporter.addFeature('addItem.feature');
});

Given(/^User had navigated to the application$/, async function() {
  await catalogPage.openApplication();
  await browser.takeScreenshot();
});

When(/^Add item to the cart by name$/, async function() {
  await catalogPage.waitForPageOpened();
  await catalogPage.selectAccesoriesCategory();
  await catalogPage.filterByAvailability();
  await catalogPage.selectCatalogItemByName("Beam Breaker B-2");
  await itemDetailsPage.waitForPageOpened();
  await itemDetailsPage.addItemToCart();
  await browser.takeScreenshot();
});

When(/^Open cart$/, async function() {
  await itemDetailsPage.showCart();
  await cartPage.waitForPageOpened();
  await browser.takeScreenshot();
});

When(/^Go to Checkout Page$/, async function() {
  await cartPage.clickProceedBtn();
  await checkOutPage.waitForPageOpened();
  await browser.takeScreenshot();
});

When(/^Confirm Cart Items$/, async function() {
  await checkOutPage.clickStep2Btn();
});

When(/^Select payment method$/, async function() {
  await checkOutPage.clickCreditCardBtn();
  await checkOutPage.clickStep3Btn();
});

When(/^Fill in Payment Info$/, async function() {
  await checkOutPage.enterCardholderName(dataFile.creditCardDetails.creditCardDetailsCardholderName);
  await checkOutPage.enterCardNumber(dataFile.creditCardDetails.creditCardDetailsCardNumber);
  await checkOutPage.enterCardSecurityCode(dataFile.creditCardDetails.creditCardDetailsSecurityCode);
  await checkOutPage.enterCardExpirationDate(dataFile.creditCardDetails.creditCardDetailsExpirationDate);
  await browser.takeScreenshot();
  await common.userInteraction.pressTab();
  await checkOutPage.clickStep4Btn();
});

When(/^Fill in Invoice Info$/, async function() {
  await checkOutPage.enterInvoiceAddress(dataFile.InvoiceAddressDetails.invoiceAddress);
  await checkOutPage.enterInvoiceAddressCity(dataFile.InvoiceAddressDetails.invoiceAddressCity);
  await checkOutPage.enterInvoiceAddressZip(dataFile.InvoiceAddressDetails.invoiceAddressZip);
  await checkOutPage.enterInvoiceAddressCountry(dataFile.InvoiceAddressDetails.invoiceAddressCountry);
  await browser.takeScreenshot();
  await common.userInteraction.pressTab();
  await checkOutPage.clickStep5Btn();
});

When(/^Choose Delivery Type$/, async function() {
	await checkOutPage.clickDeliveryTypeBtn();
  await checkOutPage.clickOrderSummaryBtn();
});

When(/^Submit the Order$/, async function() {
	await checkOutPage.clickOrderSubmitBtn();
  await checkOutPage.clickCompletionBtn();
});

