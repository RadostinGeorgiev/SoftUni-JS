function sumPrimeNonPrime(input) {
    let inputNumber = input.shift();
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (inputNumber !== "stop") {
        let currentNumber = Number(inputNumber);

        if (currentNumber < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;

            for (let i = 2; i * i <= currentNumber; i++) {
                if (currentNumber % i == 0) {
                    isPrime = false;
                }
            }

            if (isPrime) {
                sumPrime += currentNumber;
            } else {
                sumNonPrime += currentNumber;
            }
        }

        inputNumber = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);