/// <reference types="cypress" />
import '@bahmutov/cy-api/support'

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        // Request URL: http://localhost:3333/classes
        // Request Method: POST
        // Status Code: 201 Created

        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Joao da silva",
                "avatar":"https://pickaface.net/gallery/avatar/unr_anakahfakesmith_181119_2202_v01a4.png",
                "whatsapp":"19999999999",
                "bio":"Lorem Ipsum Lorem Ipsum",
                "subject":"Matemática",
                "cost":80,
                "schedule":[
                  {
                    "week_day":0,
                    "from":"08:00",
                    "to":"20:00"
                  }
                ]
              }
        }).then((response) => {
            
        })
    });
});