class ProductPage {

    get linkProducts() {
        return 'a[href="/products"]';
    }
    
    get linkContactUs() {
        return 'a[href="/contact_us"]';
    }

    get btnAddToCartProduto1() {
        return 'a[data-product-id="1"]';
    }
    
    get modalViewCart() {
        return 'a:contains("View Cart")';
    }
    
    get productTableDescription() {
        return '.cart_description a';
    }

    get titleGetInTouch() {
        return '.contact-form h2.title';
    }
    
    get inputName() {
        return 'input[data-qa="name"]';
    }
    
    get inputEmail() {
        return 'input[data-qa="email"]';
    }
    
    get inputSubject() {
        return 'input[data-qa="subject"]';
    }
    
    get textareaMessage() {
        return 'textarea[data-qa="message"]';
    }
    
    get btnSubmit() {
        return 'input[data-qa="submit-button"]';
    }

    get alertSuccess() {
        return '.status.alert-success';
    }
    
    adicionarProduto1AoCarrinho() {
        cy.get(this.btnAddToCartProduto1)
          .first()
          .click({ force: true });
    }
    
    clicarViewCart() {
        cy.get(this.modalViewCart).click(); 
    }
    
    preencherFormularioContato(nome, email, assunto, mensagem) {
        cy.get(this.inputName).type(nome);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputSubject).type(assunto);
        cy.get(this.textareaMessage).type(mensagem);
    }
    
    enviarFormulario() {
        cy.get(this.btnSubmit).click();
    }
}

export default new ProductPage();