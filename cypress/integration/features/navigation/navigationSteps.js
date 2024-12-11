import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import NavigationPage from '../navigationPage';

const navigationPage = new NavigationPage();

Given('I visit the homepage', () => {
  cy.visit('https://www.demoblaze.com/');
  cy.wait(500);
});

When('I click on the Home menu item', () => {
  navigationPage.clickHome();
  cy.wait(500);
});

When('I click on the Contact menu item', () => {
  navigationPage.clickContact();
  cy.wait(500);
  cy.get('#exampleModal').should('be.visible');
});

When('I close the Contact modal', () => {
  cy.contains('button', '×').click(); 
  cy.wait(500);
});

When('I click on the About Us menu item', () => {
  navigationPage.clickAboutUs();
  cy.wait(500);
  cy.contains('About Us');
});

When('I click on the Cart menu item', () => {
  navigationPage.clickCart();
  cy.wait(500);
});

When('I click on the Log In menu item', () => {
  navigationPage.clickLogin();
  cy.wait(500);
  cy.contains('Log in');
});

When('I click on the Sign Up menu item', () => {
  navigationPage.clickSignUp();
  cy.wait(500);
});

When('I close the Sign modal', () => {
  cy.get('button.close').click({ multiple: true, force: true });
});

When('I close the About modal', () => {
  cy.get('button.close').click({ multiple: true, force: true });
  cy.wait(500);
});

When('I close the Login modal', () => {
  cy.get('button.close').click({ multiple: true, force: true });
  cy.wait(500);
});

Then('I should be on the homepage', () => {
  cy.wait(500);
  cy.url().should('include', 'index.html'); // Verifica que la URL incluya 'index.html'
});

Then('I should be redirected to the Contact page', () => {
  cy.wait(500);
  cy.get('#exampleModal').should('be.visible'); // Verifica que el modal esté visible
});

Then('I should be redirected to the About Us page', () => {
  cy.contains('About Us'); // Verifica que el contenido de la página "About Us" se muestre
});

Then('I should be redirected to the Cart page', () => {
});

Then('I should be redirected to the Log In page', () => {
  cy.contains('Log in'); // Verifica que el contenido de la página de inicio de sesión se muestre
});

Then('I should be redirected to the Sign Up page', () => {
  cy.contains('Sign up');
});