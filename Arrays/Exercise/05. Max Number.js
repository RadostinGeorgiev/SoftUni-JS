function maxNumber(array) {

    let output = '';

    for (let index = 0; index < array.length; index++) {

        let isMax = true;
        for (let index2 = index + 1; index2 < array.length; index2++) {
            if (array[index] <= array[index2]) {
                isMax = false;
                break;
            }
        }

        if (isMax) {
            output += array[index] + ' ';
        }
    }

    console.log(output);
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);