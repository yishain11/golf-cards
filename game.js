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

class Player { }

class Deck {
    constructor() {
        this.cards = [];
        this.generateDeck()
    }
    generateDeck() {
        // generate 52 cards - 1-13, 4 suites
        const suites = ["d", "s", "c", "h"];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            suites.forEach(suite => {
                this.cards.push(`${value}${suite}`);
            });
        }
    }
    shuffleDeck() { }
}

const d1 = new Deck();
console.log('✌️d1 --->', d1);

class Pile { }

class Game { }