//The following will create the deck for the game and shuffle and deal the cards to each player

//initialize deck values

class Deck {
    constructor() {
        this.deckOfCards =[];
    }
    makeDeck() {
        this.suit = ['♠', '♣', '♥', '♦']
        this.value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        for (let x = 0; x < this.suit.length; x++) {
            for (let i = 0; i < this.value.length; i++) {
            this.deckOfCards.push(this.value[i] + this.suit[x]);
            }
        }
    }

    shuffleDeck() {
        let i = 0;
        let y = 0;
        let tempCard = 0;
        for (i = this.deckOfCards.length - 1; i > 0; i--) {
            y = Math.floor(Math.random() * (i + 1));
            tempCard = this.deckOfCards[i];
            this.deckOfCards[i] = this.deckOfCards[y];
            this.deckOfCards[y] = tempCard;
        }
    }
    showDeck() {
        return this.deckOfCards;
    }
    dealACard() {
        return this.deckOfCards.pop();
    }
}


//creating a player

class Player {
    constructor() {
        this.hand = [];
        this.score = 0;
    }
    takeACard(card) {
        this.hand.push(card);
    }
    showHand() {
        return this.hand;
    }
    playCard() {
        return this.hand.pop();
    }
    showScore() {
        return this.score;
    }
    addScore() {
        return this.score++;
    }
    showCardValue(card) {
        if (card.startsWith('2')) {
            return 2;
    }   else if (card.startsWith('3')) {
        return 3;
    }   else if (card.startsWith('4')) {
        return 4
    }   else if (card.startsWith('5')) {
        return 5;
    }   else if (card.startsWith('6')) {
        return 6;
    }   else if (card.startsWith('7')) {
        return 7;
    }   else if (card.startsWith('8')) {
        return 8;
    }   else if (card.startsWith('9')) {
        return 9;
    }   else if (card.startsWith('10')) {
        return 10;
    }   else if (card.startsWith('J')) {
        return 11;
    }   else if (card.startsWith('Q')) {
        return 12;
    }   else if (card.startsWith('K')) {
        return 13;
    }   else if (card.startsWith('A')) {
        return 14;
    }
}}

//Deal cards and set up the game

const gameDeck = new Deck();
gameDeck.makeDeck();
gameDeck.shuffleDeck();

//Define players

james = new Player();
ruby = new Player();

for (let x = 0; x < 26; x++) {
    james.takeACard(gameDeck.dealACard());
    ruby.takeACard(gameDeck.dealACard());
}

for (let x = 0; x < 26; x++) {

    let jamesCard = james.playCard();
    let rubyCard = ruby.playCard();
    
    if (james.showCardValue(jamesCard) > ruby.showCardValue(rubyCard)) {
        console.log('James wins this round! ' + jamesCard + ' beats ' + rubyCard);
        james.addScore();
    }
    else if (james.showCardValue(jamesCard) < ruby.showCardValue(rubyCard)) {
        console.log('Ruby wins this round! ' + rubyCard  + ' beats ' + jamesCard);
        ruby.addScore();
    }
    else {
        console.log('Tie goes to this round! ' + rubyCard + ' ' + jamesCard);
    }
}

console.log('James Final Score: ' + james.showScore());
console.log("Ruby Final Score: " + ruby.showScore());