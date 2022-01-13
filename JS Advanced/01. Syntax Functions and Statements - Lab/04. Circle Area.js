function circleArea(input) {
    let typeOfInput = typeof(input);

    typeOfInput == 'number'
        ? console.log((Math.PI * input ** 2).toFixed(2))
        : console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
}

circleArea(5);
circleArea('name');