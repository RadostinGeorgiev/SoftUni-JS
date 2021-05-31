function binaryToDecimal(input) {

    let inputString = input.toString();
    let output = Number(inputString[inputString.length - 1]);
    let exponent = 2;

    for (let index = inputString.length - 2; index >= 0; index--) {
        output += Number(inputString[index]) * exponent;
        exponent *= 2;
    }

    console.log(output);
}

binaryToDecimal('00001001');
binaryToDecimal('11110000');