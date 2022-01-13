function evenPowerOf2(input) {
    let number = Number(input[0]);

    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(2 ** i);
        }
    }
}

evenPowerOf2(["4"]);
evenPowerOf2(["5"]);
evenPowerOf2(["6"]);
evenPowerOf2(["7"]);