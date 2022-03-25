describe('List of Best Deals Online',function(){
    it('List of Best Deal Online',()=>{
        cy.visit('https://iprice.my/')
        cy.get('').contains('title="Next item in carousel (2 of 20)"')
    })
})