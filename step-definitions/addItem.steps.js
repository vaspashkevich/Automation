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

When(/^Click proceed button$/, async function() {
	await cartPage.clickProceedBtn();
});

When(/^Click Step2 button$/, async function() {
  await checkOutPage.clickStep2Btn()
});

When(/^Click CreditCard button$/, async function() {
  await checkOutPage.clickCreditCardBtn();
});

When(/^Click Step3 button$/, async function() {
	await checkOutPage.clickStep3Btn()
});

When(/^Fill in Payment Info$/, async function() {
  await checkOutPage.enterCardholderName(dataFile.creditCardDetails.creditCardDetailsCardholderName);
  await checkOutPage.enterCardNumber(dataFile.creditCardDetails.creditCardDetailsCardNumber);
  await checkOutPage.enterCardSecurityCode(dataFile.creditCardDetails.creditCardDetailsSecurityCode);
  await checkOutPage.enterCardExpirationDate(dataFile.creditCardDetails.creditCardDetailsExpirationDate);
  await common.userInteraction.pressTab();
});

When(/^Click Step4 button$/, async function() {
  await checkOutPage.clickStep4Btn()
});

When(/^Fill in Invoice Info$/, async function() {
  await checkOutPage.enterInvoiceAddress(dataFile.InvoiceAddressDetails.invoiceAddress);
  await checkOutPage.enterInvoiceAddressCity(dataFile.InvoiceAddressDetails.invoiceAddressCity);
  await checkOutPage.enterInvoiceAddressZip(dataFile.InvoiceAddressDetails.invoiceAddressZip);
  await checkOutPage.enterInvoiceAddressCountry(dataFile.InvoiceAddressDetails.invoiceAddressCountry);
  await common.userInteraction.pressTab();
});

When(/^Click Step 5 button$/, async function() {
	await checkOutPage.clickStep5Btn()
});

When(/^Click Delivery Type button$/, async function() {
	await checkOutPage.clickDeliveryTypeBtn()
});

When(/^Click Order Summary button$/, async function() {
	await checkOutPage.clickOrderSummaryBtn()
});

When(/^Click Order Submit button$/, async function() {
	await checkOutPage.clickOrderSubmitBtn()
});

When(/^Click Completion button$/, async function() {
	await checkOutPage.clickCompletionBtn()
});

