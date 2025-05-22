describe('Login Page', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('/login'); // Assuming the login page is served at /login
  });

  it('should load the login page correctly', () => {
    cy.get('h2').should('contain.text', 'Login');
    cy.get('form').should('be.visible');
  });

  it('should have input fields for username and password', () => {
    cy.get('label').contains('Username').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('label').contains('Password').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });

  it('should have a login button', () => {
    cy.get('button[type="submit"]').should('contain.text', 'Login');
  });

  it('should allow typing into username and password fields', () => {
    cy.get('input[name="username"]').type('testuser').should('have.value', 'testuser');
    cy.get('input[name="password"]').type('testpassword').should('have.value', 'testpassword');
  });
});
