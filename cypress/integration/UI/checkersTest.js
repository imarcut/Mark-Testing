import { CheckersPage } from "../../page-objects/checkersPage"
import { SignInPage } from "../../page-objects/signInPage"

const signInPage = new SignInPage();
const checkersPage = new CheckersPage();

describe('Checkers Game', () => {
  it('Visit the Checkers game page and let the CPU take a piece', () => {
    // Visit the checkers page, accept cookies and restart the game
    signInPage.goToApp('Checkers');
//    checkersPage.acceptCookies();
    checkersPage.restartGame();
    checkersPage.checkMessage("Select an orange piece to move.");
    // Move a piece
    checkersPage.selectPiece("space62");
    checkersPage.checkMessage("Select an orange piece to move.");
    checkersPage.selectPiece("space73");
    cy.wait(3000);
    // Move a piece and wait for the CPU to take it
    checkersPage.checkMessage("Make a move.");
    checkersPage.selectPiece("space73");
    checkersPage.checkMessage("Make a move.");
    checkersPage.selectPiece("space64");
    checkersPage.checkMessage("Make a move.");
    cy.wait(3000);
    //Check that the piece is taken by the CPU and restart the game
    checkersPage.checkPiece("space64");
    checkersPage.restartGame();
    checkersPage.checkMessage("Select an orange piece to move.");
  })
})