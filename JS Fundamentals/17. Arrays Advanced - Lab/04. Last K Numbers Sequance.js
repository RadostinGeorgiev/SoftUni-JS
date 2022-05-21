function lastKNumbersSequence(n, k) {
    let array = [1];

    for (let index = 1; index < n; index++) {
        array.push(
            array.slice(index - k < 0 ? 0 : index - k, index)
                .reduce((a, b) => a + b));
    }

    console.log(array.join(' '));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);