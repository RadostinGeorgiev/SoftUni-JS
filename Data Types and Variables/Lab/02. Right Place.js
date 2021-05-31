function rightPlace(wrongString, missingChar, finalString) {

    let correctedString = '';

    correctedString = wrongString.replace('_', missingChar);

    // for (let index = 0; index < wrongString.length; index++) {
    //     if (wrongString[index] == '_') {
    //         correctedString += missingChar;
    //     } else {
    //         correctedString += wrongString[index];
    //     }
    // }

    console.log(correctedString === finalString ? 'Matched' : 'Not Matched');
}


rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');