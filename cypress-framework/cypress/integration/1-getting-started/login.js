/// <reference types= "cypress"/>
describe('Login',function()
{
    it('verify the Login',function()
    {
        cy.visit('https://espnappsqa.corp.disney.com/authorizationmgr/index.jsp/')
        cy.request('https://qa-homefield.espn.com/idp/M8qzS/resumeSAML20/idp/startSSO.ping')
        cy.request('https://qa-homefield.espn.com/idp/startSSO.ping?PartnerSpId=authorizationmanager')
        cy.get('#inputBox initialScreen').type("arsheya.x.sardar.-nd@disney.com")
        cy.contains('Next').click()
        cy.get('#inputBox loginBlock').type("Awesome@1")
        cy.contains('Sign In').click()
        cy.title().should('eq','Authorization Manager') 
    }
    )
}
)
