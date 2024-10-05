describe('TC01-Test URL',function(){


    it('TC01-Test URL',function(){
    
        cy.visit({
            url:"https://tutorialsninja.com/demo/",
        })
        cy.url().should('equal',"https://tutorialsninja.com/demo/")
        cy.get('#logo').should('be.visible').contains('Qafox.com');
    })
    })