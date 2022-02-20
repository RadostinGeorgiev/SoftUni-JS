function printDeckOfCards(cards) {
    const output = [];

    for (const card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        try {
            output.push(createCard(face, suit));
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(output.join(' '));

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
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);