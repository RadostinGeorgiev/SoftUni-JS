function stringLength(...input) {
    let sum = input.reduce((a, b) => (a + b.length), 0);
    let average = Math.floor(sum / input.length);

    console.log(sum);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');