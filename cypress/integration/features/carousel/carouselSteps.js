import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CarouselPage from '../carouselPage';

const carouselPage = new CarouselPage();

Given('I visit the homepage', () => {
  cy.visit('https://www.demoblaze.com/');
});

Then('I should see at least 3 featured items in the carousel', () => {
  carouselPage.getFeaturedItems().should('have.length.greaterThan', 2);
});

When('I click on the next button in the carousel', () => {
  carouselPage.clickNextButton();
});

Then('I should see a different featured item', () => {
  carouselPage.getFeaturedItems().first().should('not.have.class', 'active');
});

When('I click on a featured item', () => {
  carouselPage.getFeaturedItems().first().click();
});