function oddAndEvenSum(input) {
    let oddSum = 0, evenSum = 0;

    input
        .toString()
        .split('')
        .map(Number)
        .forEach(digit => { digit % 2 == 0 ? evenSum += digit : oddSum += digit });

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));