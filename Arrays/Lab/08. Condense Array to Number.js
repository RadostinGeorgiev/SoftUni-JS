function condenseArrayToNumber(input) {

    while (input.length > 1) {
        let output = [];
        for (let index = 0; index < input.length - 1; index++) {
            output[index] = input[index] + input[index + 1];
        }

        input.length--;
        for (let index = 0; index < input.length; index++) {
            input[index] = output[index];
        }
    }

    console.log(input[0]);
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);