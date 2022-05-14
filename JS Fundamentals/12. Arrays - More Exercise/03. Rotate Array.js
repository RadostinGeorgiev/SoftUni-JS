function rotateArray(array) {

    let rotations = Number(array.pop());

    for (let index = 1; index <= rotations; index++) {
        let lastItem = array.pop();
        array.unshift(lastItem);
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);