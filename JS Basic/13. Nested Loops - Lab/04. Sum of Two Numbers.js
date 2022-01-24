function sumOfTwoNumbers(input) {
  let start = Number(input.shift());
  let end = Number(input.shift());
  let magicalNumber = Number(input.shift());
  let combination = 0;
  let isFounded = false;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      combination++;

      if (i + j == magicalNumber) {
        console.log(`Combination N:${combination} (${i} + ${j} = ${magicalNumber})`);
        isFounded = true;
        break;
      }
    }

    if (isFounded) {
      break;
    }
  }

  if (!isFounded) {
    console.log(`${combination} combinations - neither equals ${magicalNumber}`);
  }
}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "2000"]);