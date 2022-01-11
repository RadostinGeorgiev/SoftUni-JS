function metricConverter(input) {
    let number = Number(input[0]);
    let inputUnit = input[1];
    let outputUnit = input[2];

    if (inputUnit == 'mm') {
        number *= 0.001;
    } else if (inputUnit == 'cm') {
        number *= 0.01;
    }

    if (outputUnit == 'mm') {
        number *= 1000;
    } else if (outputUnit == 'cm') {
        number *= 100;
    }

    console.log(number.toFixed(3));
}

metricConverter(['12', 'mm', 'm']);