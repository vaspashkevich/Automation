const catalogPage = require('../pageObject/catalogPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const cartPage = require('../pageObject/CartPage.js')
const ShopItemsArray = require('../dataModel/ShopItemsArray.js')

describe("Add/remove items to card", async function () {
  let addedItems = new ShopItemsArray();
  let cartItems = new ShopItemsArray();
 
  it('Step 1: Open the application', async function () {
    await catalogPage.openApplication();
  });

  it('Step 2: Add first item to the cart', async function () {
    await catalogPage.selectAccesoriesCategory();
    await catalogPage.filterByAvailability();

    await catalogPage.selectCatalogItem(0);
    let name = await itemDetailsPage.getItemName();
    let price = await itemDetailsPage.getItemPrice();
    await addedItems.addItem(name, price, 1);
    await itemDetailsPage.addItemToCart();
  });

  it('Step 3: Add second item to the cart', async function () {
    await catalogPage.selectCatalogItem(1);
    let name = await itemDetailsPage.getItemName();
    let price = await itemDetailsPage.getItemPrice();
    await addedItems.addItem(name, price, 1);
    await itemDetailsPage.addItemToCart();
  });

  it('Step 4: Add second item to the cart', async function () {
    await catalogPage.selectCatalogItem(1);
    let name = await itemDetailsPage.getItemName();
    let price = await itemDetailsPage.getItemPrice();
    await addedItems.addItem(name, price, 1);
    await itemDetailsPage.addItemToCart();
  });

  it('Step 5: Add third item to the cart', async function () {
    await catalogPage.selectCatalogItem(2);
    let name = await itemDetailsPage.getItemName();
    let price = await itemDetailsPage.getItemPrice();
    await addedItems.addItem(name, price, 1);
    await itemDetailsPage.addItemToCart();
  });  
  
  it('Step 6: Show cart', async function () {
    await itemDetailsPage.showCart();
  });

  it('Step 7: Edit cart', async function () {
    await cartPage.editCart();
  });

  it('Step 8: Remove item to the cart', async function () {
    await cartPage.deleteItemFromCart(1);
    await cartPage.confirmDelete();
    addedItems.removeItem(1);
  });

  it('Step 9: Collect cart items info', async function () {
    let cartItemsArray = await cartPage.getCartItemsArray();
    let cartItemsQuantity = cartItemsArray.length;
    
    for (let i = 0; i < cartItemsQuantity; i++) {
      let name = await cartPage.getCartItemName(i);
      let price = await cartPage.getCartItemPrice(i);
      let quantity = await cartPage.getCartItemQuantity(i);
      await cartItems.addItem(name, price, quantity);
    }
  });

  it('Step 10: Compare arrays', async function () {
    await cartPage.getCartItemsArray();
    common.assertion.expectEqual(await addedItems.toSortedString(), await cartItems.toSortedString());
  });
});
