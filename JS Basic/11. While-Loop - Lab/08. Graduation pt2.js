function graduation(input) {
    let studentName = input.shift();
    let currentClass = 1;
    let averageGrade = 0.00;
    let isTerminatedOnExam = false;

    while (currentClass <= 12) {
        let currentGrade = Number(input.shift());

        if (isTerminatedOnExam) {
            console.log(`${studentName} has been excluded at ${currentClass} grade`);
            break;
        } else {
            if (currentGrade >= 4.0) {
                averageGrade += currentGrade;
                currentClass++;
            } else {
                isTerminatedOnExam = true;
            }
        }
    }

    if (!isTerminatedOnExam) {
        averageGrade /= 12;
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);