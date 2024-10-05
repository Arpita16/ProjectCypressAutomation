describe('TC01-Validate URL',function(){


it('TC01-Validate URL',function(){

    cy.visit({
        url:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    })
    cy.get('.orangehrm-login-branding > img').should('be.visible');
})
})