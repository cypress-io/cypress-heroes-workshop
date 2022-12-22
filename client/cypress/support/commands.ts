declare namespace Cypress {
    interface Chainable {
        getBySel(selector: string): Chainable
        login(email?: string, password?: string): void
    }
}

Cypress.Commands.add('getBySel', (selector: string, ...args): Cypress.Chainable => {
    return cy.get(`[data-cy=${selector}]`, ...args)
})

Cypress.Commands.add('login', (email = 'test@test.com', password = 'test123'): void => {
     cy.getBySel('login').contains('Login').click()
     cy.get('input[type=email]').type('test@test.com')
     cy.get('input[type=password]').type('test123')
     cy.get('button').contains('Sign in').click()
})