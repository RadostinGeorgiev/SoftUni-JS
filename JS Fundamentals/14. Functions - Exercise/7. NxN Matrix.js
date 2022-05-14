function matrix(size) {
    const array = new Array(size).fill().map(() => Array(size).fill(size));

    console.log(array.map(r => r.join(' ')).join('\n'));
}

matrix(3);
matrix(7);
matrix(2);