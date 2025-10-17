// PO para a Home Page (foco em busca)
class HomePage {
    // Seletores (Locators)
    getInputSearch() {
        return cy.get('#search_query_top');
    }

    getButtonSearch() {
        return cy.get('#searchbox > .btn');
    }

    // Ações (Actions)
    acessarHome() {
        cy.visit('/');
    }

    realizarBusca(query) {
        this.getInputSearch().type(query);
        this.getButtonSearch().click();
    }
}