Feature: Add item

  Scenario: Add Item to cart
    Given User had navigated to the application
    When Add item with index 1 to the cart
    When Open cart
    When Click proceed button
    When Click Step2 button
    When Click CreditCard button
    When Click Step3 button
    When Fill in Payment Info
    When Click Step4 button
    When Fill in Invoice Info
    When Click Step 5 button
    When Click Delivery Type button
    When Click Order Summary button
    When Click Order Submit button
    When Click Completion button
