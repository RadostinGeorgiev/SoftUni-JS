function orbit(input) {
    const [cols, rows, x, y] = input;
    const directions =
        [[-1, -1], //up-left
        [-1, 0], //up
        [-1, 1], //up-right
        [0, 1], //right
        [1, 1], //down-right
        [1, 0], //down
        [1, -1], //down-left
        [0, -1]]; //left

    const matrix = new Array(rows).fill(false)
        .map(() => new Array(cols).fill(false));
    const visited = new Array(rows).fill(false)
        .map(() => new Array(cols).fill(false));

    BFS(matrix, x, y, 1);

    matrix.forEach(r => console.log(r.join(' ')));

    function BFS(matrix, row, col, value) {
        const queue = [[row, col]];

        while (queue.length) {
            const [row, col] = queue.shift();

            if (!isInBound(row, col)) continue;
            if (visited[row][col]) continue;

            visited[row][col] = true;

            matrix[row][col] = value + distance(row, col);

            for (const direction of directions) {
                queue.push([row + direction[0], col + direction[1]]);
            }
        }
    }

    function isInBound(row, col) {
        return (row >= 0 && row < rows &&
            col >= 0 && col < cols);
    }

    function distance(row, col) {
        return Math.max(Math.abs(row - x), Math.abs(col - y));
    }
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);