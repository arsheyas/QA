describe('List of Best Deals Online',function(){
    
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

    it('List of Best Deal Online',()=>{
        cy.visit('https://iprice.my/coupons/')
        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(2) > p > a').click()
        cy.location('pathname').should('contains','/dell/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()
     
        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(3) > p > a').click()
        cy.location('pathname').should('contains','/lazada/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()
        
        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(4) > p > a').click()
        cy.location('pathname').should('contains','/shopee/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(5) > p > a').click()
        cy.location('pathname').should('contains','/lenovo/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(6) > p > a').click()
        cy.location('pathname').should('contains','/zalora/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(7) > p > a').click()
        cy.location('pathname').should('contains','/foodpanda/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(8) > p > a').click()
        cy.location('pathname').should('contains','/lalamove/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(9) > p > a').click()
        cy.location('pathname').should('contains','/adidas/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(10) > p > a').click()
        cy.location('pathname').should('contains','/grabfood/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(11) > p > a').click()
        cy.location('pathname').should('contains','/klook/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(12) > p > a').click()
        cy.location('pathname').should('contains','/agoda/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()

        cy.get('#coupon-overview > div > div.mu.lD > div > div > div.nz > section > div:nth-child(13) > p > a').click()
        cy.location('pathname').should('contains','/watsons-malaysia/')  
        cy.get('#hidden-ellipsis > div > div > h1').should('be.visible')
        cy.get('#breadcrumb-desktop > li:nth-child(1) > a > span').click()
    } );
    }
    )