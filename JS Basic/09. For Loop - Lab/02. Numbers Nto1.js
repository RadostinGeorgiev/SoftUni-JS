function numbersNTo1(input) {
    let number = Number(input[0]);

    for (let i = number; i >= 1; i--) {
        console.log(i);
    }
}

numbersNTo1(["3"]);
numbersNTo1(["5"]);