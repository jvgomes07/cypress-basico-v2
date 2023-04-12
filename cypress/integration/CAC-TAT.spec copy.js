/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('https://google.com.br')
      
    })
    it.only('Login on Gmail', function() {

    cy.get('#APjFqb')
    .type('CDC BANK{enter}')

    cy.get('.MUFPAc > :nth-child(2) > a').click()
    cy.get('button', 'Rotas').click()


        
    
        
    })
})