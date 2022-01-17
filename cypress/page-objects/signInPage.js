import { LOGIN_URLS} from "../constants/UI/baseURLs"

export class SignInPage {

    get userName() {
        return cy.get("#user-name");
    }

    get passwordField() {
        return cy.get("#password");
    }

    get loginButton() {
        return cy.get("#login-button");
    }

    get loginError() {
        return cy.get("[data-test='error']");
    }

    goToApp(application) {
        cy.visit(LOGIN_URLS[application]);
        cy.get("[class='login_logo']").should('be.visible');
    }

    login(username, password) {
        this.userName.type(username);
        this.passwordField.type(password);
        this.loginButton.click();
        if (username === "locked_out_user"){
            this.loginError.should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
        }else{
            cy.get("[class='title']").should('be.visible');
        }
    }
}