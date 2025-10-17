class LoginPage {
    
    // =========================================================
    // 🛑 NOVOS SELETORES (automationexercise.com)
    // =========================================================
    
    // Botão/Link "Signup / Login" no topo da Home Page
    get btnLoginSignup() {
        return 'a[href="/login"]';
    }

    // Campo de email no formulário de Login (tem o atributo data-qa)
    get inputEmail() {
        return 'input[data-qa="login-email"]';
    }

    // Campo de senha no formulário de Login (tem o atributo data-qa)
    get inputPassword() {
        return 'input[data-qa="login-password"]';
    }

    // Botão "Login"
    get btnLogin() {
        return 'button[data-qa="login-button"]';
    }
    
    // Seletor de sucesso após login (o link "Logged in as [username]")
    get linkLoggedInAs() {
        return 'a:contains("Logged in as")'; 
    }
    
    // Seletor de erro (após login com credenciais inválidas)
    get messageError() {
        return 'p:contains("Your email or password is incorrect!")'; 
    }
    
    // Seletor do botão de Logout
    get btnLogout() {
    return 'a[href="/logout"][style="color:brown;"]';
    }


    // =========================================================
    // MÉTODOS DE AÇÃO
    // =========================================================

    acessarPaginaLogin() {
        cy.get(this.btnLoginSignup).click();
        cy.url().should('include', '/login');
    }
    
    preencherFormularioLogin(email, password) {
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputPassword).type(password);
    }

    clicarLogin() {
        cy.get(this.btnLogin).click();
    }
}

export default new LoginPage();