function rounding(input1, input2) {

    let number = Number(input1);
    let precision = Number(input2);

    if (precision <=0) {
        precision = 0;
    }

    if (precision > 15) {
        precision = 15;
    }

    console.log(parseFloat(number.toFixed(precision).toString()));

}

rounding(3.1415926535897932384626433832795, 2)
rounding(10.5, 3)