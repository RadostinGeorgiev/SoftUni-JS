function reverseArray(array) {

    let tempString = '';
    for (let index = 0; index < array.length / 2; index++) {
        tempString = array[index];
        array[index] = array[array.length - 1 - index];
        array[array.length - 1 - index] = tempString;
    }

    console.log(array.join(' '));
}

reverseArray(['a', 'b', 'c', 'd', 'e']);
reverseArray(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArray(['33', '123', '0', 'dd']);