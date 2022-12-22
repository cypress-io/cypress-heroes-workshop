# Lab 2 - E2E (Part 2)


## Writing A More Advanced Test
Now that you have a good working test written, it is time to write a more advanced test that validates that the number of saves and likes gets incremented upon click.

### Invoke
You will need to use the `cy.invoke()` method and some javascript to write this test.

```ts title='./client/cypress/e2e/spec.cy.ts'
describe('Hiring A Hero', () => {
  
  beforeEach(() => {
   ...
  })

  it('can hire the Smoker', () => { ... }

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
        cy.get('[data-cy=fans]')
          // invokes a function on the yielded subject (element)
          .invoke('text')
          // convert that value as a string to a Number
          .then(Number)
          // then create a function to work with this number
          .then(n => {
            // click the like button
            cy.get('[data-cy=like]').click()
            // get the number of current fans now
            cy.get('[data-cy=fans]')
              // make sure the new number is 1 more than the previous
              .contains(
                // Need to convert it back to a string
                String(n + 1)
              )
          })
        
        // do the same thing for saves
        cy.get('[data-cy=saves]')
          .invoke('text')
          .then(Number)
          .then(n => {
            // assign the saves variable we previously created to the current value of saves in the DOM
            saves = n
          })
        // click the hire button
        cy.get('[data-cy=hire]').click()
      })

      // we have to leave the context of the last hero item to confirm the hire
      cy.get('[data-cy=confirm-hero-name]').contains('Fly Girl')
      cy.get('[data-cy=confirm-hire]').click()

      // we need to reestablish the context of the last hero
      cy.get('app-hero-list>ul').children().last().within(() => {
        // get the number of saves now in the DOM
        cy.get('[data-cy=saves]')
          // make sure the new number is 1 more than the previous
          .contains(
            // Need to convert it back to a string
            String(saves + 1)
          )
      })
  })
```

You now have another passing test that makes sure the value which is dynamic and seeded from the database is incremented when either the like or hire buttons are clicked.

## Custom Commands
Though your selectors are written in a way that will save you headaches you may have noticed it isn't the easiest thing to type over and over. Thankfully Cypress comes with its own API for creating custom commands. Now its time to create a custom command to make this easier. 

:::info
We recommend defining quieries in your `cypress/support/commands.ts` file, since it is loaded before any test files are evaluated via an import state in the `cypress/support/e2e.ts` file
:::

### getBySel()

```ts title='./client/cypress/support/commands.ts'
declare namespace Cypress {
  interface Chainable {
    getBySel(selector: string): Chainable
  }
}

Cypress.Commands.add('getBySel', (selector: string, ...args): Cypress.Chainable => {
  return cy.get(`[data-cy=${selector}]`, ...args)
})
```

Now that you have a new custom command created you can now go in and replace all of your `cy.get('[data-cy=fans]')` commands with the new syntax `cy.getBySel('fans')`. 

### Login

Though we have 2 working tests, in a real-world app, your Cypress test suite will end up with more than 1 spec file. Inevitably you will run into a scenario where you need to reuse code or functionality across spec files. **Login** is a good example of this in the Heroes App. So now move the login code from the `beforeEach()` hook to a custom `login` command:

```ts title='./client/cypress/support/commands.ts'
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
  // notice we can still reference our other custom commands here!
  cy.getBySel('login').contains('Login').click()
  cy.get('input[type=email]').type('test@test.com')
  cy.get('input[type=password]').type('test123')
  cy.get('button').contains('Sign in').click()
})
```

Now all you need to do is change your `beforeEach()` hook:

```ts title='./client/cypress/e2e/spec.cy.ts'
describe('Hiring A Hero', () => {
  
  beforeEach(() => {
    // visit the app
    cy.visit('/')
    cy.login()
  })
```

## Extra Credit

- create a new spec called `admin.cy.ts`
- write tests to make sure admins can create, update, and delete heroes
- note: you will need to login using the admin credentials [found here](/#get-to-know-the-app)
- note: I recommend not deleting the first or last heroes as the test we just wrote will break