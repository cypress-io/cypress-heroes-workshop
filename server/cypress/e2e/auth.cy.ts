describe('Auth', () => {
  it('can authenticate', () => {
    cy.api({
      method: 'POST',
      url: 'auth',
      body: {
        username: 'test@test.com',
        password: 'test123'
      }
    })

    cy.get('[data-cy=status]')
      .should('be.visible')
      .and('contain', '201')
      .and('have.css', 'color', 'rgb(31, 169, 113)')

    cy.contains('access_token')
  })
})