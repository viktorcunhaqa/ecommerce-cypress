import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage'; 
import userData from '../fixtures/userData.json'; 

describe('Funcionalidades E2E (Autenticação, Carrinho e Contato)', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('#header .logo').should('be.visible'); 
    });

    it('TC001 - Deve realizar o login com sucesso', () => {
        cy.loginECommerce();
    });

    it('TC002 - Não deve permitir o login com senha inválida', () => {
        LoginPage.acessarPaginaLogin(); 
        
        LoginPage.preencherFormularioLogin(userData.invalidUser.email, userData.invalidUser.password);
        LoginPage.clicarLogin();

        cy.get(LoginPage.messageError).should('be.visible');
    });

    it('TC003 - Deve realizar o Logout com sucesso', () => {
        cy.loginECommerce();
        cy.logoutECommerce();
    });

    it('TC004 - Deve adicionar um produto ao carrinho e verificar o item', () => {
        
        // 1. Navega para a página de Produtos
        cy.get(ProductPage.linkProducts).click();
        cy.url().should('include', '/products');

        // 2. Adiciona o Produto 1
        ProductPage.adicionarProduto1AoCarrinho(); 
        
        // 3. Verifica o modal e clica em "View Cart"
        cy.get('.modal-content').should('be.visible'); 
        ProductPage.clicarViewCart(); 
        
        // 4. Verifica o item na página do carrinho
        cy.url().should('include', '/view_cart');
        cy.get(ProductPage.productTableDescription).should('be.visible');
        cy.get('#product-1 .cart_quantity button').should('have.text', '1');
    });

    it('TC005 - Deve submeter o formulário "Fale Conosco" com sucesso', () => {
        
        const nome = 'Cypress Test';
        const email = 'cypress.test@example.com';
        const assunto = 'Dúvida sobre o produto';
        const mensagem = 'Esta é uma mensagem de teste automatizado.';
        
        // 1. Navega para a página de Contato
        cy.get(ProductPage.linkContactUs).click();
        cy.url().should('include', '/contact_us');
        
        // 2. SELETOR DE ASSERÇÃO 
        cy.get(ProductPage.titleGetInTouch).should('be.visible').and('contain.text', 'Get In Touch'); 

        // 3. Preenche o formulário
        ProductPage.preencherFormularioContato(nome, email, assunto, mensagem);
        
        // 4. Simula o clique em "OK" no alert de confirmação
        cy.on('window:confirm', () => true); 
        ProductPage.enviarFormulario();

        // 5. Verifica a mensagem de sucesso
        cy.get(ProductPage.alertSuccess).should('contain', 'Success! Your details have been submitted successfully.');
    });
});