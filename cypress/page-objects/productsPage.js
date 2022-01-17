
export class ProductsPage {

    get backpack() {
        return cy.get("#add-to-cart-sauce-labs-backpack");
    }

    get jacket() {
        return cy.get("#add-to-cart-sauce-labs-fleece-jacket");
    }

    get cartLink() {
        return cy.get("[class='shopping_cart_link']");
    }

    addBackpackToCart() {
        this.backpack.click();
        cy.get("#remove-sauce-labs-backpack").should('be.visible');
    }

    addJacketToCart() {
        this.jacket.click();
        cy.get("#remove-sauce-labs-fleece-jacket").should('be.visible');
    }
}