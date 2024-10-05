describe('TC01-Login Test as Registered User',function(){

    it('TC01-Login Test as Registered User',function(){

cy.loginApplication(Cypress.env('Email'),Cypress.env('Password'));
cy.get('.nav > :nth-child(2) > .dropdown-toggle').click();
cy.get('.open > .dropdown-menu > .see-all').click();
cy.get(`[onclick="cart.add('47', '1');"]`).click();
cy.get('#button-cart').click();
cy.get('#cart-total').click();
cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout"] > strong').click();
cy.wait(2000);

cy.get(':nth-child(1) > label > input').check();
cy.get('#button-payment-address').click();
cy.get('#collapse-shipping-address > .panel-body > .form-horizontal > :nth-child(1) > label > input').check();
cy.get('#button-shipping-address').click();
cy.get(':nth-child(5) > .form-control').type("No Comments");
cy.get('#button-shipping-method').click();
cy.get(':nth-child(4) > .form-control').type('Wrap it properly');
cy.get('[type="checkbox"]').check();
cy.get('#button-payment-method').click();
cy.get('#button-confirm').click();
cy.xpath('//*[@id="content"]/div/div/a').click();


})
})