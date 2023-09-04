const catalogPage = require('../pageObject/catalogPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const CartPage = require('../pageObject/CartPage.js')
const CheckOutPage = require('../pageObject/CheckOutPage.js')

var orderCart = require('../data/orderCart.json');

describe("Add/remove items to card", async function () {

  it('Step 1: Open the application', async function () {
    await ui5.navigation.navigateToApplication("categories");
  })

  it('Step 2: Add Item to the cart', async function () {
    await catalogPage.selectAccesoriesCategory();
    await catalogPage.selectFirstItem();
    await itemDetailsPage.addItemToCart()
  })

  it('Step 3: Show cart', async function () {
    await itemDetailsPage.showCart();
    // await browser.pause(5000)
  })

  it('Step 4: Click proceed button', async function () {
    await CartPage.pressProceedBtn();

  })

  it('Step 5: Click Step2 button', async function () {
    await CheckOutPage.pressStep2Btn();
  })

  it('Step 6: Click CreditCard button', async function () {
    await CheckOutPage.CreditCardBtn();
  })

  it('Step 7: Click Step3 button', async function () {
    await CheckOutPage.Step3Btn();
  })

  it('Step 8: Fill in CardholdersName', async function () {
    const valueToEnter = "Marya Malyshava";
    // await ui5.userInteraction.clearAndFill(CheckOutPage.CreditCardDetailsCardholderName, orderCart. creditCardDetails. CreditCardDetailsCardholderName);
    await CheckOutPage.fillCardholderName(valueToEnter);
    // await util.browser.sleep(3000);
    // await ui5.assertion.expectValueToBe(CheckOutPage.CreditCardDetailsCardholderName, "Marya Malyshava");
  })

  it('Step 9: Fill in CreditCardNumber', async function () {
    const valueToEnter = "1111222233334444";
    // await ui5.userInteraction.clearAndFill(CheckOutPage.CreditCardDetailsCardNumber, orderCart. creditCardDetails. CreditCardDetailsCardNumber);
    await CheckOutPage.fillCardNumber(valueToEnter);
  });

  it('Step 10: Fill in CreditCardSecurityCode', async function () {
    const valueToEnter = "555";
    // await ui5.userInteraction.clearAndFill(CheckOutPage.CreditCardDetailsSecurityCode, orderCart. creditCardDetails. CreditCardDetailsSecurityCode);
    await CheckOutPage.fillCardSecurityCode(valueToEnter);
  });

  it('Step 11: Fill in CreditCardExpirationDate', async function () {
    const valueToEnter = "12/2023";
    // await ui5.userInteraction.clearAndFill(CheckOutPage.CreditCardDetailsExpirationDate, orderCart.creditCardDetails. CreditCardDetailsExpirationDate);
    await CheckOutPage.fillCardExpirationDate(valueToEnter);
    await common.userInteraction.pressTab();
  });

  it('Step 12: Click Step4 button', async function () {
    await CheckOutPage.clickStep4Btn();
  });

  it('Step 13: Fill in InvoiceAddress', async function () {
    const valueToEnter = "Nezavisimosti av., 165, 56";
    // await ui5.userInteraction.clearAndFill(CheckOutPage.InvoiceAddress, orderCart.creditCardDetails.InvoiceAddress);
    await CheckOutPage.fillInvoiceAddress(valueToEnter);
  });

});