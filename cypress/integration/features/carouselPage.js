class CarouselPage {
    // Selector para los elementos del carrusel
    getFeaturedItems() {
      return cy.get('.carousel-item'); // Asegúrate de que este selector sea correcto según la estructura HTML de la página
    }
  
    // Método para hacer clic en el botón "Siguiente" del carrusel
    clickNextButton() {
      return cy.get('.carousel-control-next').click(); // Selector para el botón "Siguiente"
    }
  
    // Método para hacer clic en el botón "Anterior" del carrusel
    clickPrevButton() {
      return cy.get('.carousel-control-prev').click(); // Selector para el botón "Anterior"
    }
  
    // Método para hacer clic en el primer elemento del carrusel
    clickFirstFeaturedItem() {
      return this.getFeaturedItems().first().click(); // Clic en el primer elemento del carrusel
    }
  
    // Método para verificar que el carrusel tiene al menos un número específico de elementos
    verifyFeaturedItemsCount(minCount) {
      this.getFeaturedItems().should('have.length.greaterThan', minCount);
    }
  
    // Método para verificar que el primer elemento del carrusel no tiene la clase 'active'
    verifyFirstItemIsNotActive() {
      this.getFeaturedItems().first().should('not.have.class', 'active');
    }
  }
  
  export default CarouselPage;