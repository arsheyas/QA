describe('My First Test', function()
{
    it('Verify the title of the webpage',function () 
    {
        cy.visit("https://espn.insidedisney.com/"),
        cy.title().should('eq','Login to MyID | Identity And Access Management')
    })
  })