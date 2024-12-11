class NavigationPage {
    // Selector para el menú de navegación usando el texto
    getHomeMenu() {
      return cy.contains('a.nav-link', 'Home'); // Selecciona el enlace "Home"
    }
  
    getContactMenu() {
      return cy.contains('a.nav-link', 'Contact'); // Selecciona el enlace "Contact"
    }
  
    getAboutUsMenu() {
      return cy.contains('a.nav-link', 'About us'); // Selecciona el enlace "About us"
    }
  
    getCartMenu() {
      return cy.contains('a.nav-link', 'Cart'); // Selecciona el enlace "Cart"
    }
  
    getLoginMenu() {
      return cy.contains('a.nav-link', 'Log in'); // Selecciona el enlace "Log in"
    }
  
    getSignUpMenu() {
      return cy.contains('a.nav-link', 'Sign up'); // Selecciona el enlace "Sign up"
    }
  
    // Métodos para hacer clic en los elementos del menú
    clickHome() {
      this.getHomeMenu().click();
    }
  
    clickContact() {
      this.getContactMenu().click();
    }
  
    clickAboutUs() {
      this.getAboutUsMenu().click();
    }
  
    clickCart() {
      this.getCartMenu().click();
    }
  
    clickLogin() {
      this.getLoginMenu().click();
    }
  
    clickSignUp() {
      this.getSignUpMenu().click();
    }
  }
  
  export default NavigationPage;