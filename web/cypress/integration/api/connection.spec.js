/// <reference types="cypress" />
import '@bahmutov/cy-api/support'

context('Connections endpoint', () => {
    it('GET - Obter total de conexoes realizadas', () => {
        // http://localhost:3333/connections
        
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((response) => {
            //console.log(response)
            expect(response.status).to.eq(200)
            expect(response.duration).lt(20)
            expect(response.body)
                .to.have.property('total')
                .to.be.a('number')
                .greaterThan(5)
            
            expect(response.body.total)
                .an('number')
                .satisfy((totalValue) => {
                    return totalValue >= 5
                })
            
            // Content-Type: application/json; charset=utf-8
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')

        })
    });
});