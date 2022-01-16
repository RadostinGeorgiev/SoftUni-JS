function lastKNumbersSequence(lengthArray, lengthSequence) {
    let array = [1];

    for (let index = 1; index < lengthArray; index++) {
        array[index] = array.slice(-lengthSequence)
                            .reduce((a, b) => a + b, 0);
    }

    return array;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));