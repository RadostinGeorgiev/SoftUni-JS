function sumFirstLast(array) {
    let first = Number(array[0]);
    let last = Number(array[array.length - 1]);

    return first + last;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));