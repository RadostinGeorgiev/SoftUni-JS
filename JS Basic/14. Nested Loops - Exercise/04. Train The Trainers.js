function trainTheTrainers(input) {
  let peoples = Number(input.shift());
  let presentationName = input.shift();
  let presentationCounter = 0;
  let totalAverageGrade = 0.00;

  while (presentationName !== "Finish") {

    let presentationAverageGrade = 0.00;
    presentationCounter++;
    for (let i = 1; i <= peoples; i++) {
      presentationAverageGrade += Number(input.shift());
    }

    presentationAverageGrade /= peoples;
    totalAverageGrade += presentationAverageGrade;
    console.log(`${presentationName} - ${presentationAverageGrade.toFixed(2)}.`);

    presentationName = input.shift();
  }

  totalAverageGrade /= presentationCounter;
  console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);