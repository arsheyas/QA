describe('List of Best Deals Online',function(){
    it('List of Best Deal Online',()=>{
        cy.visit('https://iprice.my/')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(1) > div')
        cy.title().should('eq','Online Shopping, Coupons & Discount Code at iprice Malaysia')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(1) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(2) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(3) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(4) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(5) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(6) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(7) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-arrows > div.amp-carousel-button.amp-carousel-button-next').click()
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(8) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(9) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(10) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(11) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(12) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(13) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-arrows > div.amp-carousel-button.amp-carousel-button-next').click()
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(14) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(15) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(16) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(17) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(18) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(19) > div').should('be.visible')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(20) > div').should('be.visible')
    }
    );
}
)