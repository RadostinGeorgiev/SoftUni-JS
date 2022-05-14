function equalSums(array) {

    if (array.length === 1) {
        console.log(0);
        return;
    }

    let isFound = false;

    for (let index1 = 1; index1 < array.length - 1; index1++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let index2 = 0; index2 < array.length; index2++) {
            if (index2 < index1) {
                leftSum += array[index2];
            } else if (index2 > index1) {
                rightSum += array[index2];
            }
        }

        if (leftSum === rightSum) {
            console.log(index1);
            isFound = true;
            break;
        }
    }

    if (!isFound) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);