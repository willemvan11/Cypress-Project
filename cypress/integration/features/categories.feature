Feature: E-commerce Navigation

  Scenario: Select category and add products to cart
    Given I am on the homepage
    When I select the "Phones" category
    When I select random product from the list
    Then I should see the product details
    When I add the product to the cart

  Scenario: Navigate to Cart
    When I click on the Cart menu item
    When I remove a random product from the cart
    When I place an order with valid details