function rotateArray(array, rotations) {
    for (let index = 0; index < rotations; index++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);