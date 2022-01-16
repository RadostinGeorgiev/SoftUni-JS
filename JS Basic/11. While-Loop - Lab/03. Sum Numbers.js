function sumNumbers(input) {
    let number = Number(input.shift());
    let sum = 0;

    while (sum < number) {
        sum += Number(input.shift());
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);