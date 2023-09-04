const catalogPage = require('../pageObject/catalogPage.js')
const itemDetailsPage = require('../pageObject/ItemDetailsPage.js')
const cartPage = require('../pageObject/CartPage.js')
// const CartTools = require('../Tools/CartTools.js')
// const ItemDetailsTools = require('../Tools/ItemdetailsTools.js')
const ShopItemsArray = require('../dataModel/ShopItemsArray.js')

describe("Add/remove items to card", async function () {

  let addItems = new ShopItemsArray();
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
    await addItems.addItem(name, price, 1)

    await itemDetailsPage.addItemToCart();
  });

  it('Step 3: Add second item to the cart', async function () {
    await catalogPage.selectCatalogItem(1);

    let name = await itemDetailsPage.getItemName();
    let price = await itemDetailsPage.getItemPrice();
    await addItems.addItem(name, price, 1)

    await itemDetailsPage.addItemToCart();
  });

  it('Step 4: Add second item to the cart', async function () {
    await catalogPage.selectCatalogItem(1);

    let name = await itemDetailsPage.getItemName();
    let price = await itemDetailsPage.getItemPrice();
    await addItems.addItem(name, price, 1)

    await itemDetailsPage.addItemToCart();
  });

  it('Step 5: Add third item to the cart', async function () {
    await catalogPage.selectCatalogItem(2);

    let name = await itemDetailsPage.getItemName();
    let price = await itemDetailsPage.getItemPrice();
    await addItems.addItem(name, price, 1)

    await itemDetailsPage.addItemToCart();
  });  
  
  it('Step 6: Show cart', async function () {
    await itemDetailsPage.showCart();
  });

  it('Step 7: Edit cart', async function () {
    await cartPage.editCart();
  });


  it('Step 8: Collect cart items info', async function () {
    let name = await cartPage.getCartItemName(0);
    let price = await cartPage.getCartItemPrice(0);
    let quantity = await cartPage.getCartItemQuantity(0);
    await cartItems.addItem(name, price, quantity)

    name = await cartPage.getCartItemName(1);
    price = await cartPage.getCartItemPrice(1);
    quantity = await cartPage.getCartItemQuantity(1);
    await cartItems.addItem(name, price, quantity)

    name = await cartPage.getCartItemName(2);
    price = await cartPage.getCartItemPrice(2);
    quantity = await cartPage.getCartItemQuantity(2);
    await cartItems.addItem(name, price, quantity)
  });

  it('Step 9: Compare arrays', async function () {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(addItems);
    console.log(cartItems);
    if (await addItems.equals(cartItems) == false){
    console.error('Cart data is incorrect');
    console.assert(await addItems.equals(cartItems) == false, { number, errorMsg });
  }
  });



























    

    // const name2 = await itemDetailsPage.getItemName();
    // const price2 = await itemDetailsPage.getItemPrice();
    // let counter2 = 0;
    // await ArrayTool.isInCartCheck2(name2, addedItems);

    // ArrayTool.addItemToArray(name2, price2, counter2, addedItems);

    // await itemDetailsPage.addItemToCart();

    // await catalogPage.selectThirdItem();
    // const name3 = await itemDetailsPage.getItemName();
    // const price3 = await itemDetailsPage.getItemPrice();
    // let counter3 = 0;
    // await ArrayTool.isInCartCheck3(name3, addedItems);






 
    






    // const isInCart3 = await ArrayTool.isInCartCheck(name3, addedItems);
    //   if (isInCart3 == true){
    //     addedItems[2].counter = (addedItems[2].counter + 1);
      
        // addedItems.map(obj => {
        //   if (obj.name === name3) {
        //     obj.counter = (obj.counter + 1);
        //   }
        //   return obj;
        
      // }
      // else{
      // ArrayTool.addItemToArray(name3, price3, counter3, addedItems);
      // } 
    // await itemDetailsPage.addItemToCart();
    
    // addedItems.sort((a,b) => a.name.localeCompare(b.name));
    // console.log(addedItems);
  // })

  // it('Step 3: Show cart', async function () {
  //   await itemDetailsPage.showCart();
  // })

  // it('Step 4: Collect order data', async function () {

    // const name = await cartPage.getFirstItemName();
    // const price = await cartPage.getFirstItemPrice();
    // const quantity = await cartPage.introToCartQuantity2();

    // ArrayTool.addItemToArray(name, price, quantity, cartItems);

    // const name2 = await cartPage.getSecondItemName();
    // const price2 = await cartPage.getSecondItemPrice();
    // const quantity2 = await cartPage.introToCartQuantity2();

    // ArrayTool.addItemToArray2(name2, price2, quantity2, cartItems);

    // const name3 = await cartPage.getThirdItemName();
    // const price3 = await cartPage.getThirdItemPrice();
    // const quantity3 = await cartPage.introToCartQuantity3();

    // ArrayTool.addItemToArray3(name3, price3, quantity3, cartItems);
    
    // cartItems.sort((a,b) => a.name.localeCompare(b.name));
    // console.log(cartItems);
  //   console.log(addedItems);
  //   console.log(cartItems);
    
  //   if(JSON.stringify(addedItems)==JSON.stringify(cartItems)) {
  //     console.log("success");
  //   }
  //     else {
  //       console.log("Incorrect cart data");//accertion
  //     }
  
})
