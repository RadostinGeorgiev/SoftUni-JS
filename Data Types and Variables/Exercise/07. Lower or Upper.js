function lowerOrUpper(input) {

    let charCode = input.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        console.log('upper-case');
    } else if (charCode >= 97 && charCode <= 122) {
        console.log('lower-case');
    }
}

lowerOrUpper('L');
lowerOrUpper('f');