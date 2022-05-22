function sorting(array) {
    array.sort((a, b) => a - b);

    for (let index = 0; index < array.length; index += 2) {
        array.splice(index, 0, array.pop());
    }

    console.log(array.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);