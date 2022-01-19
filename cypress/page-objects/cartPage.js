import { ProductsPage } from "../page-objects/productsPage"

const productsPage = new ProductsPage();

export class CartPage {

    get checkout() {
        return cy.get("#checkout");
    }

    get firstName() {
        return cy.get("#first-name");
    }

    get lastName() {
        return cy.get("#last-name");
    }

    get zipCode() {
        return cy.get("#postal-code");
    }

    get continueButton() {
        return cy.get("#continue");
    }

    gotToCheckoutOverview(firstName, lastName, zipCode){
        productsPage.cartLink.click();
        this.checkout.click();
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.zipCode.type(zipCode);
        this.continueButton.click();

        // Assert that the products sum is equal to the total sum
        cy.get('@totalSum').then(total => {
            cy.get("[class='summary_subtotal_label']").should('contain.text', 'Item total: $' + total)
        })
    }
}