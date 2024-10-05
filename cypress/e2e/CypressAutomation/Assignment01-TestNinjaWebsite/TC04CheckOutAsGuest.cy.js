describe('TC02-Test Check Out as Guest',function(){


    it('TC02-Test Check Out as Guest',function(){
    
        cy.visit("https://tutorialsninja.com/demo/");
       //cy.get(`[onclick="cart.add('43');"]`).click();
       //cy.xpath('(//button[@type="button"]/i)[4]').click();
       //cy.xpath('(//span[text() ="Add to Cart"])[4])').click();
       //cy.get('.btn-inverse').click();
       //cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout"] > strong').click();
       cy.get('.nav > :nth-child(2) > .dropdown-toggle').click();
       cy.get('.open > .dropdown-menu > .see-all').click();
       cy.get(`[onclick="cart.add('47', '1');"]`).click();
       cy.get('#button-cart').click();
       cy.get('#cart-total').click();
       cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout"] > strong').click();
       cy.wait(2000);
       cy.get(':nth-child(4) > label > input').check();
       cy.get('#button-account').click();
       cy.get('#input-payment-firstname').type("Arpita");
       cy.get('#input-payment-lastname').type("Banerjee Darnal");
       cy.get('#input-payment-email').type("arpita16.4u@gmail.com");
       cy.get('#input-payment-telephone').type("0761668693");
       cy.get('#input-payment-company').type("SITA");
       cy.get('#input-payment-address-1').type("Centralvägen 21");
       cy.get('#input-payment-city').type("Solna");
       cy.get('#input-payment-postcode').type("17168");
       cy.get('#input-payment-country').select('Sweden');
       cy.get('#input-payment-zone').select('Stockholm');
       cy.get('#button-guest').click();
       cy.get('.panel-body > :nth-child(5) > .form-control').type('Wrap it properly');
       cy.get('#button-shipping-method').click();
       cy.get('.pull-right > [type="checkbox"]').check();
       cy.get('#button-payment-method').click();
       cy.get('#button-confirm').click();
       cy.xpath('//*[@id="content"]/div/div/a').click();
       




    })
})