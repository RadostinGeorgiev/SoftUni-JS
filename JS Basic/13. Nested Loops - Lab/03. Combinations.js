function combinations(input) {
    let number = Number(input.shift());
    let combinationCounter = 0;

    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= number; j++) {
            for (let k = 0; k <= number; k++) {
                if (i + j + k == number) {
                    combinationCounter++;
                }
            }
        }
    }

    console.log(combinationCounter);
}

combinations(["25"]);