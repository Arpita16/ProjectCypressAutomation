describe('TC02-Register Test',function(){


    it('TC02-Register Test',function(){
    
        cy.visit("https://tutorialsninja.com/demo/");
        cy.get('.dropdown > .dropdown-toggle > .fa').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.get('#input-firstname').type('Arpita');
        cy.get('#input-lastname').type('Banerjee Darnal');
        cy.get('#input-email').type('arpita@stockholmitacademy.org');
        cy.get('#input-telephone').type('0046-761668693');
        cy.get('#input-password').type('Arpita@2014',{log:false});
        cy.get('#input-confirm').type('Arpita@2014',{log:false});
        cy.get('.col-sm-10 > :nth-child(1) > input').check().should('be.checked');
        cy.get('[type="checkbox"]').check().should('be.checked');
        cy.get('.pull-right > .btn').click();
            })
    })