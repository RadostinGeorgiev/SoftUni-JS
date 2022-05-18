function pointsValidation(input) {
    const x1 = input.shift();
    const y1 = input.shift();
    const x2 = input.shift();
    const y2 = input.shift();

    console.log(`{${x1}, ${y1}} to {0, 0} ${Number.isInteger(distance(x1, y1, 0, 0)) ? 'is valid' : 'is invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${Number.isInteger(distance(x2, y2, 0, 0)) ? 'is valid' : 'is invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${Number.isInteger(distance(x1, y1, x2, y2)) ? 'is valid' : 'is invalid'}`);

    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);