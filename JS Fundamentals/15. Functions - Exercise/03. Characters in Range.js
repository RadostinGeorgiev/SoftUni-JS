function charactersInRange(charOne, charTwo) {
    const start = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    const end = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let output = [];

    for (let index = start + 1; index < end; index++) {
        output.push(String.fromCharCode(index));
    }

    console.log(output.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');