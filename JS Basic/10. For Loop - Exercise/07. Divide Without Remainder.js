function divideWithoutReminder(input) {
    let index = 0;
    let number = Number(input[index++]);
    let p2 = 0.00;
    let p3 = 0.00;
    let p4 = 0.00;

    for (let i = 0; i < number; i++) {
        let currentNumber = Number(input[index++]);

        if (currentNumber % 2 === 0) {
            p2++;
        }
        if (currentNumber % 3 === 0) {
            p3++;
        }
        if (currentNumber % 4 === 0) {
            p4++;
        }
    }

    console.log(`${(p2 / number * 100).toFixed(2)}%`);
    console.log(`${(p3 / number * 100).toFixed(2)}%`);
    console.log(`${(p4 / number * 100).toFixed(2)}%`);
}

divideWithoutReminder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
