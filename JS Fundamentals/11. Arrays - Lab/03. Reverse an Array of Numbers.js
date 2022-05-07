function reverseArray(length, array) {

    let output = '';
    for (let index = length - 1; index >= 0; index--) {
        output += array[index] + ' ';
    }

    console.log(output.trim());
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);