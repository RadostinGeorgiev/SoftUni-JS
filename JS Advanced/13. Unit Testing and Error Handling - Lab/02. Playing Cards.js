function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '♠',
        'H': '♥',
        'D': '♦',
        'C': '♣'
    };

    if (!validFaces.includes(face) || !validSuits[suit]) {
        throw new Error('Invalid input');
    }

    return {
        face,
        suit: validSuits[suit],
        toString() {
            return `${this.face}${this.suit}`
        }
    }
}

console.log(createCard('A', 'S').toString());
console.log(createCard('10', 'S').toString());
console.log(createCard('1', 'S').toString());
console.log(createCard('A', 'Y').toString());