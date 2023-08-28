const catalogPage = require('../pageObject/catalogPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')


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
});