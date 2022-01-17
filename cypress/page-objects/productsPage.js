
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

    sum(){
        let sum = 0;
        let sum1;
//        cy.get("[class='inventory_item_price']").eq(3)
//        .invoke('text')
//        .then(text => +text.replace('$', '').trim())
//        .then(initial => {
//            cy.wrap(sum1)
//        })
//        sum = sum + sum1;
        cy.get("[class='inventory_item_price']")
        .each((index) => {
            sum += parseFloat(index.text().replace('$', ''))
            cy.log(sum);
        })
        cy.log(sum);
    }
}