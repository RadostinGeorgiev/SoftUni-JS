function sumFirstAndLast(input) {
    array = input.map(Number);
    console.log(array.shift() + array.pop());
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);