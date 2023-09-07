class Application extends BasePage {

  async addItemToCartByPosition(position) {
    
    // const elem = await ui5.element.getDisplayed(cartSelectors.ItemInCart, index);
    await ui5.userInteraction.click(catalogSelectors.filterItems);
    await ui5.userInteraction.click(catalogSelectors.filterPropertyAvailability);
    await ui5.userInteraction.click(catalogSelectors.filterCheckboxAvailable);
    await ui5.userInteraction.click(catalogSelectors.applyFiltersBtn);
    await ui5.userInteraction.click(catalogSelectors.accesoriesCategory);
    await ui5.userInteraction.click(catalogSelectors.catalogItem, position);
    await ui5.userInteraction.click(itemDetailsSelectors.addToCartBtn);
  }

  async deleteItemFromCartByPosition(position) {
    await ui5.userInteraction.click(itemDetailsSelectors.showCartBtn);
    await ui5.userInteraction.click(cartSelectors.editCartBtn);
    await ui5.userInteraction.click(cartSelectors.deleteItemFromCartBtn, position);
    await ui5.userInteraction.click(cartSelectors.confirmDeleteBtn);
  }

  // async confirmOrder() {
  //   await ui5.userInteraction.click(cartSelectors.proceedBtnSelector);
  //   await ui5.userInteraction.click(checkOutSelectors.step2Btn);
  //   await ui5.userInteraction.clickAndRetry(checkOutSelectors.paymentTypeCreditCardBtn);
  // }

  async fillCreditCadrdData() {

    await CheckOutPage.enterCardholderName(orderCart.creditCardDetails.creditCardDetailsCardholderName);
    await CheckOutPage.enterCardNumber(orderCart.creditCardDetails.creditCardDetailsCardNumber);
    await CheckOutPage.enterCardSecurityCode(orderCart.creditCardDetails.creditCardDetailsSecurityCode);
    await CheckOutPage.enterCardExpirationDate(orderCart.creditCardDetails.creditCardDetailsExpirationDate);
    await common.userInteraction.pressTab();
  }

  async fillCustomerData() {
  await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddress, adress);
  await ui5.userInteraction.click(checkOutSelectors.creditCardDetailsStep4Btn);
  await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddress, adress);
  await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddressCity, city);
  await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddressZip, zip);
  await ui5.userInteraction.clearAndFill(checkOutSelectors.invoiceAddressCountry, country);
  await ui5.userInteraction.click(checkOutSelectors.stepOutOfField);
  await ui5.userInteraction.click(checkOutSelectors.invoiceAddressCityStep5Btn);
 }
}

    // await ui5.userInteraction.click(checkOutSelectors.deliveryTypedStandardBtn);
    // await ui5.userInteraction.click(checkOutSelectors.deliveryTypedOrderSummaryBtn);
    // await ui5.userInteraction.click(checkOutSelectors.deliveryTypedOrderSubmitBtn);
    // await ui5.userInteraction.click(checkOutSelectors.orderCreationCompletionBtn);
  

module.exports = new Application()