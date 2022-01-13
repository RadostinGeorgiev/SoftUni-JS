function factorial(input) {
    let number = Number(input[0]);
    let factorial = 1;
   
    for (let i = 2; i <= number; i ++) {
        factorial *= i;
    }

    console.log(factorial);
}

factorial(["4"]);
factorial(["8"]);