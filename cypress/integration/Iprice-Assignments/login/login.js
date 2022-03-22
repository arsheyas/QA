import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the website',()=>{
    cy.visit('https://iprice.my/')
})
When('I click on Featured DELL Coupons',()=>{
    cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(1) > div').click()

})
Then('I validate the url',()=>{
    cy.url().should('contain','https://iprice.my/coupons/dell/')

})