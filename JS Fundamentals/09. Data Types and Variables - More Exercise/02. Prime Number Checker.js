function primeNumberChecker(number) {

        let isPrime = true;
        for (let index = 2; index*index <= number; index++)
        {
            if (number % index == 0)
            {
                isPrime = false;
                break;
            }
        }
        
        console.log(isPrime);
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);