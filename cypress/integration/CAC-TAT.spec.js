/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')  
    })
        it('verifica o título da aplicação', function() {  
        
        
        
          
    })
    it('Preenche os campos obrigatórios', function(){
        const longText = 'Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste'
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Gomes')
        cy.get('#email').type('gomes@gomes.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.contains('button', 'Enviar').click()
        /* Validação*/
        cy.get('.success').should('be.visible')
        
        

    })
    it('Mensagem de Erro email invalido', function(){
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Gomes')
        cy.get('#email').type('gomes@gomes..com')
        cy.contains('button', 'Enviar').click()
        /* Validação*/
        cy.get('.error').should('be.visible')

    })
    it('Validar telefone', function(){
        cy.get('#phone')
        .type('a')
        .should('have.value','')

    


    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório', function(){
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Gomes')
        cy.get('#phone-checkbox').click()
        cy.get('#email').type('gomes@gomes..com')
        cy.contains('button', 'Enviar').click()
        /* Validação*/
        cy.get('.error').should('be.visible')
    
    })
    it('', function(){
        cy.get('#firstName')
        .type('Joao')
        .should('have.value', 'Joao')
        
        
        cy.get('#lastName')
        .type('Gomes')
        .should('have.value', 'Gomes')
        

        cy.get('#email')
        .type('gomes@gomes.com')
        .should('have.value','gomes@gomes.com')
        

        cy.get('#open-text-area').type('Teste')
        

        cy.contains('button', 'Enviar').click()
        

    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos', function(){
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')

    })
    
    it('Submit with comands person.', function(){
        cy.fillMandatoryFieldsAndSubmit()
        
    })
    
})

