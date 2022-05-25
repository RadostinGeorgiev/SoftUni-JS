function bunnyKill(input) {
    const coordinates = input.pop().split(' ');
    const matrix = input.map(r => r.split(' ').map(Number));

    let damage = 0;
    let killed = 0;

    coordinates.forEach(x => bunnyExplode(x));
    const survived = matrix.flat().filter(x => x > 0);

    damage += survived.reduce((a, b) => a + b);
    killed += survived.length;

    console.log(damage);
    console.log(killed);

    function bunnyExplode(coordinate) {
        [row, col] = coordinate.split(',').map(Number);
        const bomb = matrix[row][col];
        
        if (bomb > 0) {
            matrix[row][col] = 0;
            damage += bomb;
            killed++;

            kill(row - 1, col - 1, bomb);
            kill(row - 1, col, bomb);
            kill(row - 1, col + 1, bomb);
            kill(row, col - 1, bomb);
            kill(row, col + 1, bomb);
            kill(row + 1, col - 1, bomb);
            kill(row + 1, col, bomb);
            kill(row + 1, col + 1, bomb);
        }
    }

    function kill(r, c, power) {
        if (isValid(r, c)) {
            matrix[r][c] -= power;

            if (matrix[r][c] < 0) { matrix[r][c] = 0; }
        }
    }

    function isValid(r, c) {
        return r >= 0 && c >= 0 && r < matrix.length && c < matrix[r].length;
    }
}

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']);

bunnyKill([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);