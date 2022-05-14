function addAndSubtract(array) {

    let sumArray = 0;
    let sumNewArray = 0;

    for (let index = 0; index < array.length; index++) {
        sumArray += array[index];

        array[index] % 2 != 0
            ? array[index] -= index
            : array[index] += index;

        sumNewArray += array[index];
    }

    console.log(array);
    console.log(sumArray);
    console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);