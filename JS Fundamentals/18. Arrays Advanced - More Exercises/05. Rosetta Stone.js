function rosettaStone(input) {
    const size = input.shift();
    const template = [];

    for (let index = 0; index < size; index++) {
        template.push(input.shift().split(' ').map(Number));
    }

    const message = (input.map(x =>
        x.split(' ').map(Number)));
    const overlay = message.map((r, ri) => r.map((x, ci) =>
        x += template[ri % template.length][ci % template[ri % size].length]));
    const result = overlay.map(r => r.map(x =>
        x = x % 27 == 0 ? ' ' : String.fromCharCode(x % 27 + 64)));

    console.log(result.flat().join(''));
}

rosettaStone([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
);

rosettaStone([
    '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']);

rosettaStone([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0']);