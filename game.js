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
    getTopCard() {
        if (this.cards.length === 0) {
            return -1;
        }
        return this.cards.pop();
    }
}

const d1 = new Deck();

class Pile extends GeneralDeck {
    constructor() {
        super();
        this.cards = [];
    }
}
const p1 = new Pile();
console.log('✌️p1 --->', p1);
console.log("top card pile", p1.getTopCard())

class Game { }