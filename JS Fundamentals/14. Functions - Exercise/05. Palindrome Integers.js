function palindromeIntegers(array) {
    array.forEach(x => {
        console.log(x.toString() == x.toString().split("").reverse().join("")
            ? 'true'
            : 'false');
    })
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);