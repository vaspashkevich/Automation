Feature: Add item

  Scenario: Add Item to cart
    Given User had navigated to the application
    When Add item with index 1 to the cart
    And Open cart
    Then Item is in the cart
