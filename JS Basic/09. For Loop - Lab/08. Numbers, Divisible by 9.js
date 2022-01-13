function numbersDivisibleBy9(...input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

numbersDivisibleBy9(["100", "200"]);