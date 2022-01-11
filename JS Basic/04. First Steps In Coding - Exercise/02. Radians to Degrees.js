function radiansConvertor(input) {
    let radians = Number(input[0]);
    let degree = radians * 180 / Math.PI;
    degree = degree.toFixed(0);

    console.log(degree);
}

radiansConvertor(["6.2832"]);