import { DeckOfCards } from "../../services/deckOfCards.js"

const deckOfCards = new DeckOfCards();

describe('Deck Of Cards API Testing', () => {
   it('Create Test with the deck of cards', () => {
       // Create a new deck of cards
       deckOfCards.createDeckOfCards();
       // Shuffle the newly created deck
       deckOfCards.shuffleTheCards();
       // Draw 3 cards from the deck
       deckOfCards.drawCards(3);
       // Create 2 piles with 5 cards each
       deckOfCards.drawCards(5);
       deckOfCards.createPile("Pile1");
       deckOfCards.drawCards(5);
       deckOfCards.createPile("Pile2");
       // List the pile of cards
       deckOfCards.listPile("Pile1");
       deckOfCards.listPile("Pile2");
       // Shuffle the first pile
       deckOfCards.shufflePile("Pile1");
       // Draw cards from the piles
       deckOfCards.drawCardsFromPile("Pile1", 2);
       deckOfCards.drawCardsFromPile("Pile2", 3);
   });
});