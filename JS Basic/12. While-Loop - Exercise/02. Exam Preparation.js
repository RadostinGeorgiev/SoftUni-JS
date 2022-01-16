function examPreparation(input) {
    let index = 0;
    let maxBadGrades = Number(input[index++]);
    let averageGrades = 0;
    let taskCounter = 0;
    let badGradesCounter = 0;
    let taskName = '';
    let command = input[index++];

    while (command !== "Enough") {
        let currentGrade = Number(input[index++]);

        averageGrades += currentGrade;
        taskCounter++;

        if (currentGrade <= 4) {
            badGradesCounter++;
        }

        if (badGradesCounter === maxBadGrades) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }

        taskName = command;
        command = input[index++];
    }

    if (command === "Enough") {
        averageGrades /= taskCounter;
        console.log(`Average score: ${averageGrades.toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${taskName}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])