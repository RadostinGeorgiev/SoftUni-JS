function numbers1ToNSteps3(input) {
    let number = Number(input[0]);

    for (let i = 1; i <= number; i += 3) {
        console.log(i);
    }
}

numbers1ToNSteps3(["7"]);
numbers1ToNSteps3(["15"]);