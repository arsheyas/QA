describe('test',function(){
    it('verify coupons',()=>{
        cy.visit('https://iprice.my/')
        cy.get('#homepage > div:nth-child(2) > div > div > amp-carousel > div > div.i-amphtml-carousel-scroll > a:nth-child(1) > div').click()
        cy.url().should('contain','https://iprice.my/coupons/dell/')
    }
    );
}
)