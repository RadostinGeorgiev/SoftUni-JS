function studentInformation(input1, input2, input3) {
    let name = input1;
    let age = Number(input2);
    let grade = Number(input3);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

studentInformation('John', 15, 5.54678)
studentInformation('Steve', 16, 2.1426)
studentInformation('Marry', 12, 6.00)