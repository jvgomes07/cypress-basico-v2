/// <reference types="Cypress" />

describe('CDC BANK', function() {
    const   THREE_SECONDS = 3000
    beforeEach(function(){
        cy.visit('https://cdcsaude.com.br/')
    })
    it.only('Teste 1', function(){
        cy.get('#menu-item-17217 > a').click()
        cy.get('.elementor-element-54a96169 > .elementor-widget-container > .pt-btn-container > .pt-button').click()
        //cy.get('.form-control').type('joao.gomes@cdcbank.com.br')
        //cy.get('.submit').click()
        cy.get('.wp-block-button__link').click()
})
})
