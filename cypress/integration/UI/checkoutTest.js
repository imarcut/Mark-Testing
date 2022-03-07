import { SignInPage } from "../../page-objects/SignInPage.js"
import { ProductsPage } from "../../page-objects/productsPage.js"
import { CartPage } from "../../page-objects/cartPage.js"

const signInPage = new SignInPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

describe('My First Test', () => {
  it('Visit the SwagLabs checkout page', () => {
    signInPage.goToApp('SwagLabs');
    signInPage.login('standard_user', 'secret_sauce');
    productsPage.addBackpackToCart();
    productsPage.addJacketToCart();
    productsPage.getProductsSum();
    cartPage.gotToCheckoutOverview("Test", "Test", "1244");
    cartPage.completeCheckout();
  })

  it('Visit the SwagLabs with locked out user', () => {
    signInPage.goToApp('SwagLabs');
    signInPage.login('locked_out_user', 'secret_sauce');
  })
})