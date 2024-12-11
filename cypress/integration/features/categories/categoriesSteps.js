import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ECommercePage from '../categoriesPage';

Given('I am on the homepage', () => {
  ECommercePage.visit();
});

When('I select the {string} category', (category) => {
  ECommercePage.selectCategory(category);
});

When('I select random product from the list', () => {
  ECommercePage.selectRandomProduct();
  cy.wait(1000);
  ECommercePage.selectRandomProduct();
  cy.wait(1000);

});

When('I click on the Cart menu item', () => {
    ECommercePage.clickCart();
    cy.wait(500);
});

When('I place an order with valid details', () => {
    ECommercePage.placeOrder();
  });

When('I remove a random product from the cart', () => {
    cy.wait(5000);
    ECommercePage.removeRandomProductFromCart();
    cy.wait(5000);
  });

Then('I should see the product details', () => {

});

When('I add the product to the cart', () => {
  ECommercePage.addToCart();
});

Then('the cart should have {int} items', (count) => {
  ECommercePage.checkCartItemCount(count);
});

Given('I have added products to the cart', () => {
  ECommercePage.visit();
  ECommercePage.selectCategory('Phones');
  ECommercePage.selectRandomProducts(2); // Selecciona 2 productos aleatorios
  ECommercePage.addToCart();
});

When('I go to the cart', () => {
  ECommercePage.goToCart();
});

When('I proceed to checkout', () => {
  ECommercePage.proceedToCheckout();
});

Then('I should see the checkout page', () => {
  cy.url().should('include', '/checkout'); // Cambia esto a la URL real de la página de checkout
});

When('I remove the product from the cart', () => {
  ECommercePage.removeProductFromCart();
});

Then('the cart should be empty', () => {
  ECommercePage.checkCartIsEmpty();
});