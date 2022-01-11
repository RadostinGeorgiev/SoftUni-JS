function oddOrEven(input) {
    let number = Number(input[0]);

    console.log(number % 2 === 0 ? 'even' : 'odd');
}

oddOrEven(['5']);
oddOrEven(['10']);