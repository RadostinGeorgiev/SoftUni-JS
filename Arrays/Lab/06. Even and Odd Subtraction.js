function substractEvenAndOdd(numbers) {

    let sumOdd = 0;
    let sumEven = 0;
    for (const iterator of numbers) {
        if (Number(iterator) % 2 !== 0) {
            sumOdd += Number(iterator);
        } else {
            sumEven += Number(iterator);
        }
    }

    console.log(sumEven - sumOdd);
}

substractEvenAndOdd([1,2,3,4,5,6]);
substractEvenAndOdd([3,5,7,9]);
substractEvenAndOdd([2,4,6,8,10]);