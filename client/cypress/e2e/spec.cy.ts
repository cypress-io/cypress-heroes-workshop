describe('Hiring A Hero', () => {
  
  beforeEach(() => {
    // visit the app
    cy.visit('/')
    // login
    cy.get('[data-cy=login]').contains('Login').click()
    cy.get('input[type=email]').type('test@test.com')
    cy.get('input[type=password]').type('test123')
    cy.get('button').contains('Sign in').click()
  })

  it('can hire the Smoker', () => {
    cy.get('app-hero-list>ul')
      // this gets the list items <li>
      .children()
      // this gets the very first list item
      .first()
      // this scopes the subsequent cypress commands to within this element
      .within(() => {
        // validate that we have the correct hero
        cy.get("h5").contains('The Smoker')
        // click the hire button
        cy.get('[data-cy=hire]').click()
    })

    // Because this opens a modal we need to break outside of the .within
    // This makes sure that the confirmation modal that appears is once again for the smoker
    cy.get('[data-cy=confirm-hero-name').contains('The Smoker')

    // click the confirm hire button
    cy.get('[data-cy=confirm-hire]').click()
  })
})