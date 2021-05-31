function triangleOfNumbers(input) {

    
    for (let row = 1; row <= input; row++) {
        let output = "";
        for (let col = 1; col <= row; col++) {
            output += row + " ";
        }

        console.log(output.trim());
    }
}

triangleOfNumbers(5)