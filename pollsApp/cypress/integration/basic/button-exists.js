import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const PAGE = '/';
const createButton = '#create-poll';
const refreshButton = '#refresh';


When('user opens page', () => {
  cy.visit(PAGE);
});

Then('user should see create button', () => {
  cy.get(createButton).should('exist');
});
Then('user should see refresh button', () => {
  cy.get(refreshButton).should('exist');
})
