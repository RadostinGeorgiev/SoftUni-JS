function airPollution(matrix, forces) {
    matrix = matrix.map(r => r.split(' ').map(Number));
    const actions = {
        'breeze': (index) => {
            for (let col = 0; col < matrix[index].length; col++) {
                matrix[index][col] = matrix[index][col] - 15 <= 0 ? 0 : matrix[index][col] -= 15;
            }
        },
        'gale': (index) => {
            for (let row = 0; row < matrix.length; row++) {
                matrix[row][index] = matrix[row][index] - 20 <= 0 ? 0 : matrix[row][index] -= 20;
            }
        },
        'smog': (value) => matrix.forEach((x, r) => x.forEach((_, c) => matrix[r][c] += value)),
    }

    forces.forEach(x => {
        [force, value] = x.split(' ');
        actions[force](Number(value));
    });

    output = [];
    matrix.map((r, ri) => r.map((x, ci) => x >= 50 ? output.push(`[${ri}-${ci}]`) : null));

    console.log(output.length == 0
        ? 'No polluted areas'
        : `Polluted areas: ${output.join(', ')}`);
}

airPollution([
    '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);

airPollution([
    '5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);

airPollution([
    '5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']);