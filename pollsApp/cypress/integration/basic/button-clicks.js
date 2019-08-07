import { When, Then } from 'cypress-cucumber-preprocessor/steps';


const createButton = '#create-poll';
const createPanel = '#create-panel';

When('user clicks create button', () => {
    cy.get(createButton).click();
});

Then('user should see create panel', () => {
  cy.get(createPanel).should('exist');
})
