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
        cy.get('#phone').type('31987165109')
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
        cy.get('#phone-checkbox').check()
        cy.get('#email').type('gomes@gomes..com')
        cy.contains('button', 'Enviar').click()
        
        cy.get('.error').should('not.have.value')
        
    
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
    
    it('Testanto a função select', function(){
    cy.get('select')
    .select('youtube')
    .should('have.value', 'youtube')
    //cy.get('#support-type').type('elogio').click()
    })
    
    it('selecionar produto mentoria', function(){
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
    })
    it('seleciona o valor Blog', function(){
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })
    it('marca o tipo de atendimento', function(){
        cy.get('input[type="radio"]')
            .should('have.length', 3)
                .each(function($radio){
                    cy.wrap($radio).check()
                    cy.wrap($radio).should('be.checked')    
                
                
                })
                
    })
    
    it('Marca ambos checkboxes', function(){
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')
        
    })

    it('seleciona um arquivo da pasta fixtures', function(){
        cy.get('#file-upload')
            .should('not.have.value')
                .selectFile('./cypress/fixtures/example.json')
                    .should(function($input)
                    {
                        expect($input[0].files[0].name).to.equal('example.json')

                    })


    })
    it('seleciona um arquivo simulando um drag-and-drop', function(){
        cy.get('#file-upload')
            .should('not.have.value')
                .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
                    .should(function($input)
                    {
                    expect($input[0].files[0].name).to.equal('example.json')
                    })
    })
    it('seleciona arquivo utilizando uma fixture para a qual foi dada um alias',function(){
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .selectFile('@sampleFile' )
        .should(function($input){ 
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })
    it('verifica que politica de privacidade seja aberta em uma nova pagina sem o click', function(){
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })
    
    it('abre politica de privacidade em uma nova pagina com o click', function(){
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()
        cy.contains('Talking About Testing').should('be.visible')
    })
})

