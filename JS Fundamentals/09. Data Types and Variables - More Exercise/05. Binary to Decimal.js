function binaryToDecimal(input) {

    let output = Number(input[7]);
    let exponent = 2;

    for (let index = input.length - 2; index >= 0; index--) {
        output += Number(input[index]) * exponent;
        exponent *= 2;
    }

    console.log(output);
}

binaryToDecimal('00001001');
binaryToDecimal('11110000');