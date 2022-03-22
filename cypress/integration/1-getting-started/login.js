/// <reference types="cypress"/>
describe('My First Test'), function()
{
it('verify title of the webpage'), function()
{
    cy.visit('https://inside.disney.com/')
    cy.title().should('eq','Login to MyID | Identity And Access Management')
}
}
