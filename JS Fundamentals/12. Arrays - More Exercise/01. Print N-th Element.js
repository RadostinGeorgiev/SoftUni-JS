function printNthElement(array) {

    let step = Number(array[array.length - 1]);
    output = '';

    for (let index = 0; index < array.length - 1; index += step) {
        output += array[index] + ' ';
    }

    console.log(output);
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);