function sumEvenNumbers(numbers) {

    let sum = 0;
    for (const iterator of numbers) {
        if (Number(iterator) % 2 === 0) {
            sum += Number(iterator);
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);