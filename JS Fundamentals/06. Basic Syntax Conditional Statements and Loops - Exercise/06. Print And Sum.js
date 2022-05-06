function printAndSum(startNum, endNum) {

    let output = "";
    let sum = 0;

    for (let index = startNum; index <= endNum; index++) {
        output += index + " ";
        sum += index;
    }

    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)