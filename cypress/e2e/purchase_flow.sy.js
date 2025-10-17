import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';
import userData from '../fixtures/userData.json';

describe('Fluxo de Compra Completa (E2E) no QualityStore', () => {

    // Pré-condição: O usuário deve estar logado para finalizar a compra
    beforeEach(() => {
        cy.loginECommerce();
    });

    it('TC004 - Deve buscar um produto, adicionar ao carrinho e completar o checkout com sucesso', () => {
        
        // 1. Busca do Produto
        HomePage.realizarBusca(userData.searchQuery);
        cy.url().should('include', 'search_query=');
        
        // 2. Seleção e Adição ao Carrinho
        ProductPage.selecionarProduto('Faded Short Sleeve T-shirts'); 
        ProductPage.adicionarAoCarrinho();
        
        // 3. Etapa 1: Summary (Review do Carrinho)
        cy.url().should('include', 'controller=order');
        CheckoutPage.proceedToAddress(); 
        
        // 4. Etapa 2: Address (Endereço)
        cy.url().should('include', 'step=1');
        CheckoutPage.proceedToShipping();
        
        // 5. Etapa 3: Shipping (Entrega/Termos)
        cy.url().should('include', 'step=2');
        CheckoutPage.agreeToTermsAndProceed();
        
        // 6. Etapa 4: Payment (Pagamento)
        cy.url().should('include', 'step=3');
        CheckoutPage.selectPaymentBankWire();
        
        // 7. Etapa 5: Confirmação
        cy.url().should('include', 'payment');
        CheckoutPage.confirmOrder();

        // 8. Verificação Final (Asserção)
        cy.url().should('include', 'controller=order-confirmation');
        CheckoutPage.getSuccessMessage().should('contain', 'Your order on My Store is complete.');
    });
});