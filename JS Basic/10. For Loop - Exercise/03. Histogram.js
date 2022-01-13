function histogram(input) {
    let index = 0;
    let number = Number(input[index++]);
    let p1 = 0.00;
    let p2 = 0.00;
    let p3 = 0.00;
    let p4 = 0.00;
    let p5 = 0.00;

    for (let i = 0; i < number; i++) {
        let currentNumber = Number(input[index++]);

        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber <= 399) {
            p2++;
        } else if (currentNumber <= 599) {
            p3++;
        } else if (currentNumber <= 799) {
            p4++;
        } else {
            p5++;
        }
    }

    console.log(`${(p1 / number * 100).toFixed(2)}%`);
    console.log(`${(p2 / number * 100).toFixed(2)}%`);
    console.log(`${(p3 / number * 100).toFixed(2)}%`);
    console.log(`${(p4 / number * 100).toFixed(2)}%`);
    console.log(`${(p5 / number * 100).toFixed(2)}%`);
}

histogram(["20", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);