Cypress.Commands.add('logoutECommerce', () => {
    
    //Clica no botão de Logout
    cy.get(LoginPage.btnLogout).click();
    
    //Redireciona para /login, e NÃO para a Home Page (/)
    cy.url().should('include', '/login'); // Verifica se a URL contém "/login"
    
    //Verificar se o link "Signup / Login" está visível (confirma que está deslogado)
    cy.get(LoginPage.btnLoginSignup).should('be.visible');

});