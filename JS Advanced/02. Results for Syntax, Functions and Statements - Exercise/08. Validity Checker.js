function validityChecker(x1, y1, x2, y2) {
    checkValidity(x1, y1, 0, 0);
    checkValidity(x2, y2, 0, 0);
    checkValidity(x1, y1, x2, y2);

    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function checkValidity(x1, y1, x2, y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${Number.isInteger(distance(x1, y1, x2, y2)) ? 'is valid' : 'is invalid'} `);
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);