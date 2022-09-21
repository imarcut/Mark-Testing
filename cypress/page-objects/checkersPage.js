
export class CheckersPage {

    get restart() {
        return cy.get("p.footnote > a:nth-child(1)");
    }

    get message() {
        return cy.get("#message");
    }

    pieceSpace(space) {
        return cy.get(`[name=` + space + `]`);
    }

    acceptCookies(){
        cy.get('[aria-modal="true"]').should('be.visible')
        cy.get('button[mode="primary"]:visible').click({ force: true })
    }

    restartGame(){
        this.restart.should("be.visible");
        this.restart.click();
        this.message.should('be.visible').and('contain.text', 'Select an orange piece to move.')
    }

    selectPiece(space){
        this.restart.should("be.visible");
        this.pieceSpace(space).click();
    }

    checkPiece(space){
        this.restart.should("be.visible");
        cy.get('[src="you1.gif"]' + `[name=` + space + `]`).should('not.exist');
    }

    checkMessage(message){
        this.message.should('be.visible').and('contain.text', message)
    }
}