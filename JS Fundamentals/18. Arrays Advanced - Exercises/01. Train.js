function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());
    [...commands] = input;

    commands.forEach(x => {
        [tokenOne, tokenTwo] = x.split(' ');

        if (tokenOne == 'Add') {
            const passengers = Number(tokenTwo);
            wagons.push(passengers);
        } else {
            const passengers = Number(tokenOne);
            const index = wagons.findIndex(w => passengers <= maxCapacity - w);
            wagons[index] += passengers;
        }

    });

    console.log(wagons.join(' '));
}

train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);

train([
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);