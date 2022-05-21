function perfectNumber(input) {
    let sum = 0;

    for (let index = 0; index < input; index++) {
        if (input % index == 0) { sum += index };
    }

    console.log(input == sum ? 'We have a perfect number!' : "It's not so perfect.");
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);