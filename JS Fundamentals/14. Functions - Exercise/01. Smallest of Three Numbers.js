function smallestOfThreeNumbers(...params) {
    let min = Infinity;

    params.forEach(x => { x < min ? min = x : null })
    console.log(min);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);