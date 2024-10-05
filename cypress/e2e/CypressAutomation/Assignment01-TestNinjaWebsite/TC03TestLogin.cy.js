describe('TC01-Login Test as Registered User',function(){

    it('TC01-Login Test as Registered User',function(){

cy.loginApplication(Cypress.env('Email'),Cypress.env('Password'));
})
})