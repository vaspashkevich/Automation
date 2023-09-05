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
  })

  it('Step 4: Click proceed button', async function () {
    await CartPage.pressProceedBtn();
  })

  it('Step 5: Click Step2 button', async function () {
    await CheckOutPage.pressStep2Btn();
  })

  it('Step 6: Click CreditCard button', async function () {
    await CheckOutPage.pressCreditCardBtn();
  })

  it('Step 7: Click Step3 button', async function () {
    await CheckOutPage.pressStep3Btn();
  })

  it('Step 8: Fill in Payment Info', async function () {
    await CheckOutPage.enterCardholderName(orderCart.creditCardDetails.creditCardDetailsCardholderName);
    await CheckOutPage.enterCardNumber(orderCart.creditCardDetails.creditCardDetailsCardNumber);
    await CheckOutPage.enterCardSecurityCode(orderCart.creditCardDetails.creditCardDetailsSecurityCode);
    await CheckOutPage.enterCardExpirationDate(orderCart.creditCardDetails.creditCardDetailsExpirationDate);
    await common.userInteraction.pressTab();
  });

  it('Step 9: Click Step4 button', async function () {
    await CheckOutPage.pressStep4Btn();
  });

  it('Step 10: Fill in InvoiceAddress', async function () {
    const valueToEnter = "Nezavisimosti av 165 56";
    await CheckOutPage.enterInvoiceAddress(valueToEnter);
  });

  it('Step 11: Fill in InvoiceAddressCity', async function () {
    const valueToEnter = "Minsk";
    await CheckOutPage.enterInvoiceAddressCity(valueToEnter);
  });

  it('Step 12: Fill in InvoiceAddressZip', async function () {
    const valueToEnter = "220141";
    await CheckOutPage.enterInvoiceAddressZip(valueToEnter);
  });

  it('Step 13: Fill in InvoiceAddressCountry', async function () {
    const valueToEnter = "Belarus";
    await CheckOutPage.enterInvoiceAddressCountry(valueToEnter);
  });

  it('Step 14: Click Step5 button', async function () {
    await CheckOutPage.pressStep5Btn();
  });
});