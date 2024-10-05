describe("Dropdown Demo",function(){

    it("Dropdown Demo with select tag",function(){

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('.content-wrap-details > :nth-child(2)').should('have.text','Witness Zoho Commerce in action')
        
        cy.get('[name="Reported By"]').type('Demo')

        cy.get('[name="Email"]').type('demo@gmail.com')

        cy.get('#zcf_address_country').select('India').should('have.value','India')
        
        cy.wait(5000)

        cy.get('#zcf_address_country').select(6).should('have.value','Anguilla')
        
        cy.pause()

        cy.get('#zcf_users').select(1).should('have.value','Yes, I currently sell online')

        })

        it("Dropdown Demo without select tag",function(){

            cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
            
            cy.get('#select2-billing_country-container').click();

            cy.get('.select2-search__field').type("Argentina").type('{enter}')
            
            cy.get('#select2-billing_country-container').should('have.text','Argentina')

            cy.get('#select2-billing_state-container').click();

            cy.get('.select2-search__field').type("Chubut").type('{enter}')

            cy.get('#select2-billing_state-container').should('have.text', 'Chubut');
        })

        it.only("Dropdown Demo-Dynamic",function(){

            cy.visit('https://www.google.com')

            cy.get('#L2AGLb > .QS5gu').click()

            cy.get('#APjFqb').type('cypress automation')

            //cy.get('div.wM6W7d').should('have.length', '13');

            //cy.contains('cypress automation').click()

            cy.get('div.wM6W7d').each(($el, index, $list)=>{

                if($el.text() == 'cypress automation')
                {
                    cy.wrap($el).click();
                }

        })
    })
})