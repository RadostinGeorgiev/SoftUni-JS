function squareOfStars(input) {
    for (let index = 1; index <= input; index++) {
        let output = '*';

        for (let index = 1; index <= input - 1; index++) {
            output += ' *';
        }

        console.log(output);
    }
}

squareOfStars(5);