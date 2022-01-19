export class ProductsPage {

    get backpack() {
        return cy.get("#add-to-cart-sauce-labs-backpack");
    }

    get backpackRemoveButton() {
        return cy.get("#remove-sauce-labs-backpack");
    }

    get productsSum() {
        return cy.get("[data-test*='remove']").parent("[class='pricebar']").children("[class='inventory_item_price']");
    }

    get jacket() {
        return cy.get("#add-to-cart-sauce-labs-fleece-jacket");
    }

    get jacketRemoveButton() {
        return cy.get("#remove-sauce-labs-fleece-jacket");
    }

    get cartLink() {
        return cy.get("[class='shopping_cart_link']");
    }

    addBackpackToCart() {
        this.backpack.click();
        this.backpackRemoveButton.should('be.visible');
        this.backpack.should('not.exist');
    }

    addJacketToCart() {
        this.jacket.click();
        this.jacketRemoveButton.should('be.visible');
        this.backpack.should('not.exist');
    }

    getProductsSum(){
        // Get the products sum
        let sum = 0;
        this.productsSum.each((index) => {
            sum += parseFloat(index.text().replace('$', ''))
            cy.wrap(sum)
            .as('totalSum')
        })
    }
}