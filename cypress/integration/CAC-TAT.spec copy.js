/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('https://cdccard.webpj.aplicativo.digital/criar-acesso')  
    })
    it.only('Testanto formulario', function(){
        cy.contains('button', 'Próximo')
        

    })
})