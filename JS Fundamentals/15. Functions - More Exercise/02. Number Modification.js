function numberModification(input) {
    let array = input.toString().split('').map(Number);

    while (average(array) < 5) {
        array.push(9);
    }

    console.log(array.join(''));

    function average(array) {
        return array.reduce((a, b) => (a + b)) / array.length;
    }
}

numberModification(101);
numberModification(5835);