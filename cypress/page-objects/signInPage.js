import { LOGIN_URLS} from "../constants/UI/baseURLs"

export class SignInPage {

    goToApp(application) {
        cy.visit(LOGIN_URLS[application]);
    }
}