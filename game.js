const rl = require('readline-sync');

class GeneralDeck {
    constructor() { }
    getTopCard() {
        if (this.cards.length === 0) {
            return -1;
        }
        return this.cards.pop();
    }
}

class Card {
    constructor(value, suite) {
        this.value = value;
        this.suite = suite;
        this.isFlipped = false;
    }
    showCard() {
        console.log(`${this.value}${this.suite}`);
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.numCardsFlipped = 0;
    }
    countFlippedCards() {
        let count = 0;
        this.hand.forEach(card => {
            if (card.isFlipped) {
                count += 1;
            }
        });
        this.numCardsFlipped = count;
        return count
    }
}

class Deck extends GeneralDeck {
    constructor() {
        super();
        this.cards = [];
        this.generateDeck()
        this.shuffleDeck()
    }
    generateDeck() {
        const suites = ["d", "s", "c", "h"];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            suites.forEach(suite => {
                this.cards.push(new Card(value, suite));
            });
        }
    }
    shuffleDeck() {
        for (let i = 0; i < 5000; i++) {
            let idx1 = Math.floor(Math.random() * this.cards.length);
            let idx2 = Math.floor(Math.random() * this.cards.length);
            while (idx2 === idx1) {
                idx1 = Math.floor(Math.random() * this.cards.length);
            }
            const temp = this.cards[idx1];
            this.cards[idx1] = this.cards[idx2];
            this.cards[idx2] = temp;
        }
    }
    getTopCard() {
        if (this.cards.length === 0) {
            return -1;
        }
        return this.cards.pop();
    }
}

class Pile extends GeneralDeck {
    constructor() {
        super();
        this.cards = [];
    }
}

class Game {
    constructor() {
        this.players = [new Player(0), new Player(1)];
        this.deck = new Deck();
        this.pile = new Pile();
        this.dealInitHands();
        this.isGameOn = true;
        this.currentPlayerIndex = 0;
        this.playRound()
    }
    dealInitHands() {
        for (let j = 0; j < 2; j++) {
            const player = this.players[j];
            for (let i = 0; i < 4; i++) {
                const card = this.deck.getTopCard();
                player.hand.push(card)
            }
        }
    }
    checkIfGameOn() {
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            if (player.countFlippedCards() === 4) {
                return false;
            }
        }
        return true;
    }
    playRound() {
        while (this.checkIfGameOn()) {
            const currentPlayer = this.players[this.currentPlayerIndex];
            const action = rl.question("select what to do - 0 for pick from pile, 1 for pick from deck ");
            // TODO: validate user input - 0 or 1 and nothing else
            switch (action) {
                case "0":

                    break;
                case "1":
                    console.log(`player ${this.currentPlayerIndex} selected to pick from deck`);
                    const cardFromDeck = this.deck.getTopCard();
                    const wantToReplace = rl.question(`do you want to replace card ${cardFromDeck.showCard()} with one in your hand? y/n`);
                    // TODO validate input + uppercase?
                    switch (wantToReplace) {
                        case "y":

                            break;

                        case "n":
                            console.log("player selected to pud card from deck on pile");
                            this.pile.cards.push(cardFromDeck);
                            break;
                    }
                    break;

            }
        }
    }
}

const g1 = new Game();
