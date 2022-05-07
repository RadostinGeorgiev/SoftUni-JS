function equalArrays(firstArray, secondArray) {

    let iterations = Math.max(firstArray.length, secondArray.length);
    let sum = 0;
    let isEqual = true;
    let indexOfDifferentItem = 0;

    for (let index = 0; index < iterations; index++) {
        if (firstArray[index] === secondArray[index]) {
            sum += Number(firstArray[index]);
        } else {
            indexOfDifferentItem = index;
            isEqual = false;
            break;
        }
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexOfDifferentItem} index`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);