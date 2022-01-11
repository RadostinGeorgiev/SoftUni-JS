function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    switch (gender) {
        case 'm':
            age >= 16
                ? console.log('Mr.')
                : console.log('Master')
            break;
        case 'f':
            age >= 16
                ? console.log('Ms.')
                : console.log('Miss')
            break;
    }
}

personalTitles(['12', 'f']);