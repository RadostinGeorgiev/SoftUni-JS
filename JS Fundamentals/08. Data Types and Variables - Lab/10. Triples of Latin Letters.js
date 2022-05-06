function triplesOfLatinLetters(number) {
    
    for (let index1 = 0; index1 < number; index1++) {
        for (let index2 = 0; index2 < number; index2++) {
            for (let index3 = 0; index3 < number; index3++) {
                console.log(String.fromCharCode(97 + index1, 97 + index2, 97 + index3));
            }
        }
    }
}

triplesOfLatinLetters(3);
triplesOfLatinLetters(2);