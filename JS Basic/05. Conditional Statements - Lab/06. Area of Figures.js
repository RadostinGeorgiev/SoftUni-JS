function areaOfFigures(input) {
    let figure = input[0];
    let side = Number(input[1]);
    let area = 0;

    if (figure == 'square') {
        area = side * side;
    } else if (figure == 'rectangle') {
        let side2 = Number(input[2]);
        area = side * side2;
    } else if (figure == 'circle') {
        area = Math.PI * side * side;
    } else if (figure == 'triangle') {
        let side2 = Number(input[2]);
        area = side * side2 / 2;
    }

    console.log(area.toFixed(3));
}

areaOfFigures(['triangle', '4.5', '20']);