Feature: Add item

  Scenario: Add Item to cart
    Given User had navigated to the application
    When Add item to the cart by name
    When Open cart
    When Go to Checkout Page
    When Confirm Cart Items
    When Select payment method
    When Fill in Payment Info
    When Fill in Invoice Info
    When Choose Delivery Type
    When Submit the Order
