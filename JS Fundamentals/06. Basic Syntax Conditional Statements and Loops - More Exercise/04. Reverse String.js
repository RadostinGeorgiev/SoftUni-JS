function reverseString(input) {

    //console.log(input.split('').reverse().join(''));

    let reversedString = '';

    for (let index = input.length - 1; index >= 0; index--) {
        reversedString += input[index];
    }

    console.log(reversedString);
}

reverseString('Hello');