# Lab 2 - E2E (Part 2)

You will start out working in this lab by learning how to do end-to-end testing. The Cypress Heroes app's main feature is it's ability to hire a hero. In this lab you will learn how to write and end-to-end test to cover this use case.


## Getting Started

To get started, make checkout the `lab1-start` branch:

```
git checkout lab1-start
```

You can find a completed version of this lab in the [lab2-start](https://github.com/cypress-io/cypress-heroes-workshop/tree/lab2-start) branch.

If the app is not currently running, start it:

```bash title='./client'
npm run start
```

## Installing Cypress

To begin you need to first install cypress as a dev dependency in our project:

```bash title='./client'
npm install cypress@latest -D
```

### Launching Cypress

Once you have cypress installed in our project you are ready to launch it:

```bash title='./client'
npx cypress open
```

When Cypress launches, you need to choose whether you want to do end-to-end testing or component testing. Since this lab is focused on end-to-end testing go ahead and choose E2E Testing.

![Choose Testing Type](/img/choose-testing-type.jpg)

Next, choose what browser you want to use for testing and click the start button.


### Creating Your First Test

After the browser opens, you will see a screen that says the project is new and that you need to create your first spec. At this point you can either let Cypress scaffold out example specs or generate an empty spec for you. Go ahead and click the **Create new empty spec** button.

![Create Your First Spec](/img/create-your-first-spec.png)

The Cypress app will now prompt you where you want it to create your new spec. You can use the default and click **Create Spec**. You will now see a success messsage saying that the spec was created successfully. 

### Running Your First Test

Finally you are ready to run your first Cypress tests by clicking the **Okay, run the spec** button.

![Spec Created Successfully](/img/spec-created-successfully.png)


## Writing Your First Test

Now that you have Cypress fully configured and your first example tests created go ahead and open it in your editor to begin writing your first test.

### Visiting The App
In the spec file, you should see following code:

```ts title='./client/cypress/e2e/spec.cy.ts'
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

```

You now want to update the test so it looks like the following:

```ts title='./client/cypress/e2e/spec.cy.ts'
describe('Hiring A Hero', () => {
  it('visits our app', () => {
    cy.visit('http://localhost:4200')
  })
})
```

You will now see the Cypress Heroes App running inside of Cypress. Let's make one more change though before you move one. Let's set the baseUrl of our app inside the `cypress.config.ts`:

```ts title='./client/cypress.config.ts'
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

Now you no longer have to preface each test's `cy.visit()` urls with the app's **baseUrl**. You can change your original test to the following:

```ts title='./client/cypress/e2e/spec.cy.ts'
describe('Hiring A Hero', () => {
  it('visits our app', () => {
    cy.visit('/')
  })
})
```
### Selecting Elements from the DOM


:::info

Every test you write will include selectors for elements. To save yourself a lot of headaches, you should write selectors that are resilient to changes. See our [Best Practices Docs](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) to learn more.

:::


Users must be logged in before they can hire a hero so now first write a test that makes sure the application is able to login effectively.

```ts title='./client/cypress/e2e/spec.cy.ts'
describe('Hiring A Hero', () => {
  it('can log in', () => {
    cy.visit('/')
    cy.get('[data-cy=login]').contains('Login').click()
    cy.get('[input[type=email]').type('test@test.com')
    cy.get('[input[type=password]').type('test123')
    cy.get('button').contains('Sign in').click(0)
  })
})
```

Now if you re-run your tests you will see the app clicks the **Login Button** then types an __email__ and __password__ into the corresponding inputs and clicks the __Log In Button__. Finally you will see in the top right corner that the app is now logged in. 

Congratulations you've written your first useful test. Now go ahead and write a test that validates that you can hire **"The Smoker"**.

```ts title='./client/cypress/e2e/spec.cy.ts'
describe('Hiring A Hero', () => {
  it('can log in', () => {
    cy.visit('/')
    cy.get('[data-cy=login]').contains('Login').click()
    cy.get('[input[type=email]').type('test@test.com')
    cy.get('[input[type=password]').type('test123')
    cy.get('button').contains('Sign in').click()
  })

  it('can hire the Smoker', () => {
    // We need to visit the site and login before we can hire the Smoker
    cy.visit('/')
    cy.get('[data-cy=login]').contains('Login').click()
    cy.get('[input[type=email]').type('test@test.com')
    cy.get('[input[type=password]').type('test123')
    cy.get('button').contains('Sign in').click()

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
    cy.get('[data-cy="confirm-hero-name').contains('The Smoker')

    // click the confirm hire button
    cy.get('[data-cy=confirm-hire]').click()
  })
})
```

Now if you save and re-run your tests you will see that the app is officially hiring the smoker. However, you should start to see a problem with the code above in that we are having to repeat `cy.visit()` and the login steps at the beginning of both tests. The good news is that you can move that code to to a `beforeEach()` hook that will run before each test starts and then remove the login test: 

```ts title='./client/cypress/e2e/spec.cy.ts'
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
```
