Feature: Carousel Functionality

  @carousel @regression
  Scenario: Verify that the carousel displays at least 3 featured items
    Given I visit the homepage
    Then I should see at least 3 featured items in the carousel

  @carousel @regression
  Scenario: Verify carousel navigation functionality
    Given I visit the homepage
    When I click on the next button in the carousel
    Then I should see a different featured item