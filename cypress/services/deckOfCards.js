export class DeckOfCards {

    createDeckOfCards(){
        cy.request({
            method: 'POST',
            form: true,
            url: `deck/new/`
        }).then(response => {
            cy.wrap(response)
                .as('response')
            cy.get('@response').then(res => {
               expect(res.status).to.eq(200);
               expect(res.body, 'Response body should have "deck_id" property').to.have.property("deck_id");
               expect(res.body, 'Response body should have "success" property').to.have.property("success");
               expect(res.body, 'Response body should have "shuffled" property').to.have.property("shuffled");
               expect(res.body).to.have.property('shuffled', false);
               expect(res.body, 'Response body should have "remaining" property').to.have.property("remaining");
            });
        })
    }

    shuffleTheCards(){
        cy.get('@response').then(res => {
            let deckId = res.body.deck_id;
            cy.request({
                method: 'POST',
                form: true,
                url: `deck/` + deckId + `/shuffle/`
            }).then(response => {
                cy.wrap(response)
                    .as('response')
                cy.get('@response').then(res => {
                   expect(res.status).to.eq(200);
                   expect(res.body, 'Response body should have "deck_id" property').to.have.property("deck_id");
                   expect(res.body).to.have.property('deck_id', deckId);
                   expect(res.body, 'Response body should have "success" property').to.have.property("success");
                   expect(res.body, 'Response body should have "shuffled" property').to.have.property("shuffled");
                   expect(res.body).to.have.property('shuffled', true);
                   expect(res.body, 'Response body should have "remaining" property').to.have.property("remaining");
                });
            })
        });
    }

    drawCards(numberOfCards){
        cy.get('@response').then(res => {
            let deckId = res.body.deck_id;
            cy.request({
                method: 'GET',
                form: true,
                url: `deck/` + deckId + `/draw/?count=` + numberOfCards
            }).then(response => {
                cy.wrap(response)
                    .as('response')
                cy.get('@response').then(res => {
                   expect(res.status).to.eq(200);
                   expect(res.body, 'Response body should have "deck_id" property').to.have.property("deck_id");
                   expect(res.body).to.have.property('deck_id', deckId);
                   expect(res.body, 'Response body should have "success" property').to.have.property("success");
                   expect(res.body).to.have.property('success', true);
                   expect(res.body, 'Response body should have "remaining" property').to.have.property("remaining");
                   for (let i = 0; i < res.body.cards.length; i++){
                        expect(res.body.cards[i], 'Response body should have "code" property').to.have.property("code");
                        expect(res.body.cards[i], 'Response body should have "value" property').to.have.property("value");
                        expect(res.body.cards[i], 'Response body should have "suit" property').to.have.property("suit");

                   }
                });
            })
        });
    }

    createPile(pileName){
        cy.get('@response').then(res => {
            let deckId = res.body.deck_id;
            let drawnCards = "";
            let drawnCardsParsed = "";
            for (let i = 0; i < res.body.cards.length; i++){
                drawnCards = drawnCards + "," +  res.body.cards[i].code;
            }
            drawnCardsParsed += drawnCards.substring(1);
            cy.request({
                method: 'POST',
                form: true,
                url: `deck/` + deckId + `/pile/` + pileName + `/add?cards=` + drawnCardsParsed
            }).then(response => {
                cy.wrap(response)
                    .as('response')
                cy.get('@response').then(res => {
                   expect(res.status).to.eq(200);
                   expect(res.body, 'Response body should have "deck_id" property').to.have.property("deck_id");
                   expect(res.body).to.have.property('deck_id', deckId);
                   expect(res.body, 'Response body should have "success" property').to.have.property("success");
                   expect(res.body).to.have.property('success', true);
                   expect(res.body, 'Response body should have "remaining" property').to.have.property("remaining");
                   expect(res.body.piles, 'Response body should have "pileName" property').to.have.property(pileName);
                   expect(res.body.piles[pileName], 'Response body should have "remaining" property').to.have.property("remaining");
                });
            })
        });
    }

    listPile(pileName){
        cy.get('@response').then(res => {
            let deckId = res.body.deck_id;
            cy.request({
                method: 'GET',
                form: true,
                url: `deck/` + deckId + `/pile/` + pileName + `/list/`
            }).then(response => {
                cy.wrap(response)
                    .as('response')
                cy.get('@response').then(res => {
                   expect(res.status).to.eq(200);
                   expect(res.body, 'Response body should have "deck_id" property').to.have.property("deck_id");
                   expect(res.body).to.have.property('deck_id', deckId);
                   expect(res.body, 'Response body should have "success" property').to.have.property("success");
                   expect(res.body).to.have.property('success', true);
                   expect(res.body, 'Response body should have "remaining" property').to.have.property("remaining");
                   for (let i = 0; i < res.body.piles[pileName].cards.length; i++){
                        expect(res.body.piles[pileName].cards[i], 'Response body should have "code" property').to.have.property("code");
                        expect(res.body.piles[pileName].cards[i], 'Response body should have "value" property').to.have.property("value");
                        expect(res.body.piles[pileName].cards[i], 'Response body should have "suit" property').to.have.property("suit");

                   }
                });
            })
        });
    }

    shufflePile(pileName){
        cy.get('@response').then(res => {
            let deckId = res.body.deck_id;
            cy.request({
                method: 'GET',
                form: true,
                url: `deck/` + deckId + `/pile/` + pileName + `/shuffle/`
            }).then(response => {
                cy.wrap(response)
                    .as('response')
                cy.get('@response').then(res => {
                   expect(res.status).to.eq(200);
                   expect(res.body, 'Response body should have "deck_id" property').to.have.property("deck_id");
                   expect(res.body).to.have.property('deck_id', deckId);
                   expect(res.body, 'Response body should have "success" property').to.have.property("success");
                   expect(res.body).to.have.property('success', true);
                   expect(res.body, 'Response body should have "remaining" property').to.have.property("remaining");
                   expect(res.body.piles[pileName], 'Response body should have "remaining" property').to.have.property("remaining");

                });
            })
        });
    }

    drawCardsFromPile(pileName, numberOfCards){
        cy.get('@response').then(res => {
            let deckId = res.body.deck_id;
            let numberOfCardsRemaining = res.body.piles[pileName].remaining;
            cy.request({
                method: 'GET',
                form: true,
                url: `deck/` + deckId + `/pile/` + pileName + `/draw/?count=` + numberOfCards
            }).then(response => {
                cy.wrap(response)
                    .as('response')
                cy.get('@response').then(res => {
                   expect(res.status).to.eq(200);
                   expect(res.body, 'Response body should have "deck_id" property').to.have.property("deck_id");
                   expect(res.body).to.have.property('deck_id', deckId);
                   expect(res.body, 'Response body should have "success" property').to.have.property("success");
                   expect(res.body).to.have.property('success', true);
                   for (let i = 0; i < res.body.cards.length; i++){
                        expect(res.body.cards[i], 'Response body should have "code" property').to.have.property("code");
                        expect(res.body.cards[i], 'Response body should have "value" property').to.have.property("value");
                        expect(res.body.cards[i], 'Response body should have "suit" property').to.have.property("suit");

                   }
                   expect(res.body.piles[pileName]).to.have.property('remaining', numberOfCardsRemaining - numberOfCards);
                });
            })
        });
    }
}