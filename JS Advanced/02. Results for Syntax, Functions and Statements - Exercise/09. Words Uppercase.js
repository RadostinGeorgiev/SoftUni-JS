function wordsUppercase(input) {
    let regex = /\w+/g;

    let words = input.match(regex).map(w => w.toUpperCase()).join(', ');
    console.log(words);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');