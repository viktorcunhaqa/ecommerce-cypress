import LoginPage from '../pages/LoginPage';
import userData from '../fixtures/userData.json'; 


Cypress.Commands.add('loginECommerce', (email = userData.validUser.email, password = userData.validUser.password) => {
    
    // 1. Visita a Home Page (usa o baseUrl da configuração)
    cy.visit('/'); 
    
    // 2. Acessa a página de Login/Signup (Clicando no link "Signup / Login")
    LoginPage.acessarPaginaLogin(); 

    // 3. Preenche o formulário e clica no botão "Login"
    LoginPage.preencherFormularioLogin(email, password);
    LoginPage.clicarLogin();
    
    // 4. Verifica o sucesso: o link "Logged in as [username]" deve estar visível
    cy.get(LoginPage.linkLoggedInAs).should('be.visible');
});


Cypress.Commands.add('logoutECommerce', () => {
    
    // 1. Clica no botão de Logout (o seletor é a[href="/logout"])
    cy.get(LoginPage.btnLogout).click();
    
    // 2. Verifica se a URL contém "/login" (a página de destino real após o logout)
    cy.url().should('include', '/login');
    
    // 3. Verifica se o link "Signup / Login" está visível (Confirma que o usuário está deslogado)
    cy.get(LoginPage.btnLoginSignup).should('be.visible');
    
    // 4. Verifica se o link "Logged in as" SUMIU (Confirma o logout)
    cy.get(LoginPage.linkLoggedInAs).should('not.exist');
});