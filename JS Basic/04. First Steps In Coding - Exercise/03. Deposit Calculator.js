function depositCalculator(input) {
   let depositedSum = Number(input[0]);
   let depositedTerm = Number(input[1]);
   let depositedInterest = Number(input[2]);

   let total = depositedSum + depositedTerm * ((depositedSum * depositedInterest / 100) / 12);

   console.log(total);
}

depositCalculator(['200', '3', '5.7']);