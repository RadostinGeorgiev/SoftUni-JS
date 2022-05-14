function orbit(input) {
    const width = input.shift();
    const height = input.shift();
    const x = input.shift();
    const y = input.shift();

    const array = Array(width).fill().map(() => Array(height).fill(0));

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            array[row][col] = 1 + Math.max(Math.abs(row - x), Math.abs(col - y));
        }
    }

    console.log(array.map(r => r.join(' ')).join('\n'));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);