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

    get itemTotalSumValue() {
        return cy.get("[class='summary_subtotal_label']");
    }

    get finishButton() {
        return cy.get("#finish");
    }

    get completeOrderTextMessage() {
        return cy.get("[class='complete-text']");
    }

    gotToCheckoutOverview(firstName, lastName, zipCode){
        productsPage.cartLink.click();
        this.checkout.should("be.visible");
        this.checkout.click();
        this.firstName.should("be.visible");
        this.firstName.type(firstName);
        this.lastName.should("be.visible");
        this.lastName.type(lastName);
        this.zipCode.should("be.visible");
        this.zipCode.type(zipCode);
        this.continueButton.should("be.visible");
        this.continueButton.click();

        // Assert that the products sum is equal to the total sum
        cy.get('@totalSum').then(total => {
            this.itemTotalSumValue.should('contain.text', 'Item total: $' + total)
        })
    }

    completeCheckout(){
        this.finishButton.should("be.visible");
        this.finishButton.click();
        this.completeOrderTextMessage.should('be.visible').and('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }
}