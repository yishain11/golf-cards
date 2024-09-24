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
    }
    shuffleDeck() { }
}


class Pile { }

class Game { }