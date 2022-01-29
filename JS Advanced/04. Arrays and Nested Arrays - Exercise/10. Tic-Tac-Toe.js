function ticTacToe(moves) {
    const matrix = new Array(3).fill()
        .map(() => Array(3).fill(false));

    let player = 'X'

    for (const move of moves) {
        const [x, y] = move.split(' ');

        if (matrix[x][y]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        matrix[x][y] = player;

        if (IsWin()) {
            console.log(`Player ${player} wins!`);
            break;
        }

        player = player === 'X' ? 'O' : 'X';

        if (matrix.every(r => r.every(x => x))) {
            console.log('The game ended! Nobody wins :(');
            break;
        }

        function IsWin() {
            const isRow = matrix[x].every(x => x === player);
            const isCol = matrix.map(r => r[y]).every(e => e === player);
            const isPrimaryDiagonal = matrix.map((r, i) => r[i]).every(e => e === player);
            const isSecondaryDiagonal = matrix.map((r, i) => r[r.length - 1 - i]).every(x => x === player);

            return isRow || isCol || isPrimaryDiagonal || isSecondaryDiagonal;
        }
    }

    matrix.forEach(r => console.log(r.join('\t')));
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);