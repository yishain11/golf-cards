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
        this.name;
        this.hand = [];
    }
}

class Deck {
    constructor() {
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
                this.cards.push(`${value}${suite}`);
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
}

const d1 = new Deck();

class Pile { }

class Game { }