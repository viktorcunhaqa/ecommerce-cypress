# 🛒 Projeto de Automação E2E - E-commerce

Este projeto contém testes de ponta a ponta (E2E) para a plataforma de demonstração **[Automation Exercise](https://www.automationexercise.com/)**, utilizando o framework Cypress

##O que Foi Feito

Este trabalho envolveu a migração completa de um projeto de testes de uma URL antiga e fora do ar para o novo site (`automationexercise.com`), refatorando o código para garantir a estabilidade e a manutenibilidade.

**Principais Entregas:**

* **Migração e Refatoração:** Código atualizado para os novos seletores e fluxos da plataforma.
* **Padrão de Projeto:** Implementação de Page Object Model (POM) para organização e reutilização de código.
* **Comandos Customizados:** Criação de comandos `cy.loginECommerce` e `cy.logoutECommerce` para simplificar a suíte de testes.
* **Correção de Fluxos Críticos:** Garantia de que fluxos complexos como `Adicionar ao Carrinho` e `Formulário de Contato` funcionam corretamente.

# Testes Automatizados

A suíte de testes cobre as seguintes funcionalidades essenciais do e-commerce:

| ID | Funcionalidade | Status |
| :--- | :--- | :--- |
| **TC001** | Login Válido | **PASS** |
| **TC002** | Login Inválido | **PASS** |
| **TC003** | Logout | **PASS** |
| **TC004** | Adicionar Produto ao Carrinho | **PASS** |
| **TC005** | Envio de Formulário de Contato | **PASS** |

## Como Executar

Para rodar os testes localmente, siga estes passos:

1.  **Instalação das dependências:**
    ```bash
    npm install
    ```

2.  **Abrir o Cypress Test Runner (GUI):**
    ```bash
    npx cypress open
    ```
    *Selecione o arquivo `auth.cy.js` para iniciar os 5 testes.*

---
Desenvolvido por **Viktor Cunha**
