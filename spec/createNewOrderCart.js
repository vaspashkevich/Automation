// const catalogPage = require('../pageObject/catalogPage.js')
// const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
// const CartPage = require('../pageObject/CartPage.js')
// const CheckOutPage = require('../pageObject/CheckOutPage.js')
const app = require('../app/Execution.js')
const goTo = require('../app/Navigation.js')

var orderCart = require('../data/orderCart.json');

describe("Add/remove items to card", async function () {

  it('Step 1: Open the application', async function () {
    await goTo.openApplication();
  });

  it('Step 2: Add first item to the cart', async function () {
    await goTo.accesoriesCategory();
    await app.filterByAvailability();

    await app.addItemToCartByPosition(0);
  });

  it('Step 3: Open cart', async function () {
    await goTo.cart();
  });

  it('Step 4: Click proceed button', async function () {
    await goTo.checkoutPage();
  })

  it('Step 5: Click Step2 button', async function () {
    await app.confirmOrder();
  })

  it('Step 6: Click CreditCard button', async function () {
    await app.selectPaymentMethod();
  })

  it('Step 7: Click Step3 button', async function () {
    await app.confirmPaymentMethod();
  })

  it('Step 8: Fill in Payment Info', async function () {
    await app.fillCreditCardData(orderCart);
  });

  it('Step 9: Click Step4 button', async function () {
    await app.confirmCreditCartData();
  });

  it('Step 10: Fill in Invoice Info', async function () {
    await app.fillCustomerData(orderCart);
  });

  it('Step 11: Click Step 5 button', async function () {
    await app.clickOutOfField();
    await app.confirmCustomerData();
  });
});