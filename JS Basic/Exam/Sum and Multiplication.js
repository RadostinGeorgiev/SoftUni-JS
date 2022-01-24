function sumAndMultiplication(input) {
    let number = Number(input[0]);

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    if ((a + b + c + d === a * b * c * d) && (number % 10 === 5)) {
                        console.log(`${a}${b}${c}${d}`);
                        return;
                    }

                    if (Math.floor((a * b * c * d) / (a + b + c + d)) === 3
                        && (number % 3 === 0)) {
                        console.log(`${d}${c}${b}${a}`);
                        return;
                    }
                }
            }
        }
    }

    console.log("Nothing found");
}

sumAndMultiplication(["123"]);
sumAndMultiplication(["145"]);
sumAndMultiplication(["214"]);