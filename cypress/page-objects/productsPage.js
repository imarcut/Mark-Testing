
export class ProductsPage {

    get backpack() {
        return cy.get("#add-to-cart-sauce-labs-backpack");
    }

    get productsSum() {
        return cy.get("[data-test*='remove']").parent("[class='pricebar']").children("[class='inventory_item_price']");
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