Feature: Navigation

  Scenario: Navigate to Home
    Given I visit the homepage
    When I click on the Home menu item
    Then I should be on the homepage

  Scenario: Navigate to Contact
    Given I visit the homepage
    When I click on the Contact menu item
    Then I should be redirected to the Contact page
    When I close the Contact modal

  Scenario: Navigate to About Us
    Given I visit the homepage
    When I click on the About Us menu item
    Then I should be redirected to the About Us page
    When I close the About modal

  Scenario: Navigate to Cart
    Given I visit the homepage
    When I click on the Cart menu item
    Then I should be redirected to the Cart page

  Scenario: Navigate to Log In
    Given I visit the homepage
    When I click on the Log In menu item
    Then I should be redirected to the Log In page
    When I close the Login modal

  Scenario: Navigate to Sign Up
    Given I visit the homepage
    When I click on the Sign Up menu item
    Then I should be redirected to the Sign Up page
    When I close the Sign modal