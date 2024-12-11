class ECommercePage {
  visit() {
    cy.visit('https://www.demoblaze.com/index.html'); // Cambia esto a la URL de tu página de inicio
  }

  selectCategory(category) {
    cy.contains(category).click(); // Selecciona la categoría por su nombre
  }

  selectRandomProduct() {
    this.visit();
    cy.get('.card-title a.hrefch') // Selecciona todos los enlaces de productos
      .then($products => {
        const randomProduct = Cypress._.sample($products); // Selecciona un producto
        cy.wrap(randomProduct).click(); // Haz clic en el producto seleccionado
        cy.url().should('include', 'prod.html'); // Verifica que la URL contenga 'prod.html'
      });
  }

  removeRandomProductFromCart() {
    // Selecciona todos los enlaces "Delete" en la tabla
    cy.get('a').filter((index, element) => {
      return Cypress.$(element).text().trim() === 'Delete'; // Filtra los enlaces que tienen el texto "Delete"
    })
    .then($deleteButtons => {
      if ($deleteButtons.length > 0) { // Verifica si hay botones de eliminar
        const randomButton = Cypress._.sample($deleteButtons); // Selecciona un botón de eliminar aleatorio
        cy.wrap(randomButton).click({ force: true }); // Haz clic en el botón de eliminar seleccionado, forzando el clic
      } else {
        cy.log('No hay productos en el carrito para eliminar.'); // Mensaje de log si no hay productos
      }
    });
  }

  placeOrder() {
    // Haz clic en el botón "Place Order"
    cy.contains('Place Order').click();
  
    // Rellena los campos del formulario
    cy.get('#name').type('John Doe'); // Rellena el campo "Name"
    cy.get('#country').type('USA'); // Rellena el campo "Country"
    cy.get('#city').type('New York'); // Rellena el campo "City"
    cy.get('#card').type('1234 5678 9012 3456'); // Rellena el campo "Credit card"
    cy.get('#month').type('12'); // Rellena el campo "Month"
    cy.get('#year').type('2025'); // Rellena el campo "Year"
  
    // Haz clic en el botón "Purchase"
    cy.contains('Purchase').click();
    cy.wait(2000);
    cy.contains('OK').click();
  }

  getCartMenu() {
    return cy.contains('a.nav-link', 'Cart'); // Selecciona el enlace "Cart"
  }

  addToCart() {
    cy.get('a.btn.btn-success.btn-lg').click(); // Cambia esto al selector real del botón "Añadir al carrito"
  }

  clickCart() {
    this.getCartMenu().click();
  }

  goToCart() {
    cy.get('a.cart').click(); // Cambia esto al selector real del enlace del carrito
  }

  proceedToCheckout() {
    cy.get('button.checkout').click(); // Cambia esto al selector real del botón de checkout
  }

  removeProductFromCart() {
    cy.get('button.remove').click(); // Cambia esto al selector real del botón de eliminar
  }

  checkCartItemCount(count) {
    cy.get('.cart-item-count').should('have.text', count); // Cambia esto al selector real del contador de ítems en el carrito
  }

  checkCartIsEmpty() {
    cy.get('.cart-empty-message').should('be.visible'); // Cambia esto al selector real del mensaje de carrito vacío
  }
}

export default new ECommercePage();