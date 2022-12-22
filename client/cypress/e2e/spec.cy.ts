describe('Hiring A Hero', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.login()
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
        cy.getBySel('hire').click()
    })

    // Because this opens a modal we need to break outside of the .within
    // This makes sure that the confirmation modal that appears is once again for the smoker
    cy.getBySel('confirm-hero-name').contains('The Smoker')

    // click the confirm hire button
    cy.getBySel('confirm-hire').click()
  })

  it('increments the count when liking and hiring', () => {
    // we need a javascript variable to store the value of saves
    let saves = 0

    cy.get('app-hero-list>ul')
      // this gets the list items <li>
      .children()
      // this gets the very last list item
      .last()
      // this scopes the subsequent cypress commands to within this element
      .within(() => {
        // get the number of current fans
        cy.getBySel('fans')
          // invokes a function on the yielded subject (element)
          .invoke('text')
          // convert that value as a string to a Number
          .then(Number)
          // then create a function to work with this number
          .then(n => {
            // click the like button
            cy.getBySel('like').click()
            // get the number of current fans now
            cy.getBySel('fans')
              // make sure the new number is 1 more than the previous
              .contains(
                // Need to convert it back to a string
                String(n + 1)
              )
          })
        
        // do the same thing for saves
        cy.getBySel('saves')
          .invoke('text')
          .then(Number)
          .then(n => {
            // assign the saves variable we previously created to the current value of saves in the DOM
            saves = n
          })
        // click the hire button
        cy.getBySel('hire').click()
      })

      // we have to leave the context of the last hero item to confirm the hire
      cy.getBySel('confirm-hero-name').contains('Fly Girl')
      cy.getBySel('confirm-hire').click()

      // we need to reestablish the context of the last hero
      cy.get('app-hero-list>ul').children().last().within(() => {
        // get the number of saves now in the DOM
        cy.getBySel('saves')
          // make sure the new number is 1 more than the previous
          .contains(
            // Need to convert it back to a string
            String(saves + 1)
          )
      })
  })
})