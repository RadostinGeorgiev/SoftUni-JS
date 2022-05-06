function rightPlace(wrongString, missingChar, finalString) {

    let correctedString = '';

    correctedString = wrongString.replace('_', missingChar);
    console.log(correctedString === finalString ? 'Matched' : 'Not Matched');
}


rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');