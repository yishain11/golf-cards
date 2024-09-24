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
        this.shuffleDeck()
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
    shuffleDeck() {
        /*
            1. loop alot of times -V
            2. select 2 indx from cards array - V
            3. check that 2 indx are diff -V
            4. if not - select new - V
            5. replace 2 cards in cards array
        */
        for (let i = 0; i < 1000; i++) {
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