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
        "name": "Joao da silva",
        "avatar": "https://pickaface.net/gallery/avatar/unr_anakahfakesmith_181119_2202_v01a4.png",
        "whatsapp": "19999999999",
        "bio": "Lorem Ipsum Lorem Ipsum",
        "subject": "Matemática",
        "cost": 80,
        "schedule": [
          {
            "week_day": 0,
            "from": "08:00",
            "to": "20:00"
          }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(201)

      expect(response.body[0])
        .to.have.property('class_id')
        .to.be.a('number')
        .greaterThan(40)
      
      expect(response.body[0])
        .to.have.property('week_day')
        .to.be.a('number')
        .to.be.equal(0)

      expect(response.body[0])
        .to.have.property('from')
        .to.be.a('number')
        .to.be.equal(480)
      
      expect(response.body[0])
        .to.have.property('to')
        .to.be.a('number')
        .to.be.equal(1200)

     
      expect(response.headers)
        .to.have.property('content-type')
        .an('string')
        .equal('application/json; charset=utf-8')

    })
  });
});