/// <reference types="cypress" />

context('Dar aulas', () => {
    beforeEach(() => {
        cy.visit('/give-classes')
    });
    it('Cadastrar um novo professor', () => {
        cy.intercept('POST', '**/classes').as('postCadProfessor');

        // Seus dados
        cy.get('#name').type('Joao da silva')
        cy.get('#avatar').type('https://pickaface.net/gallery/avatar/unr_anakahfakesmith_181119_2202_v01a4.png')
        cy.get('#whatsapp').type('19999999999')
        cy.get('#bio').type('Lorem Ipsum Lorem Ipsum')

        // Sobre a aula
        cy.get('#subject').select('Matemática')
        cy.get('#cost').type('80')

        // Horários Disponíveis
        cy.get('#week_day').select('6')
        cy.get('#from').type('08:00')
        cy.get('#to').type('20:00')

        // Salvar cadastro
        cy.get('form').submit()

        // Assertions
        cy.wait('@postCadProfessor').then((responsePostCadProfessor) => {
            expect(responsePostCadProfessor.response.statusCode).to.eq(201)
        })
        cy.url().should('eq',`${Cypress.config().baseUrl}`)
        cy.get('div a.study').should('be.visible')
        cy.get('div a.give-classes').should('be.visible')
    });
});