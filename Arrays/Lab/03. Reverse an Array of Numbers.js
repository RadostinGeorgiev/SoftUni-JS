function reverseArray(length, numbers) {

    let reversedArray = []
    for (let index = 0; index < length; index++) {
        reversedArray[length - 1 - index] = numbers[index];
    }

    let output = '';
    for (let index = 0; index < reversedArray.length; index++) {
        output += reversedArray[index] + ' ';
    }

    console.log(output);
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);