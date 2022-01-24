function numberPyramid(input) {
    let number = Number(input[0]);
    let counter = 0;
    let isFinish = false;

    for (let i = 1; i <= number; i++) {
        let outputString = "";
        for (let j = 1; j <= i; j++) {
            counter++;
            if (counter > number) {
                isFinish = true;
                break;
            }

            outputString += counter + " ";
        }
        console.log(outputString);

        if (isFinish) {
            break;
        }
    }
}

numberPyramid(["7"]);