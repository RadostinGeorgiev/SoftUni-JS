function arrayManipulator(numbers, commands) {
    const actions = {
        'add': ([index, element]) => numbers.splice(index, 0, element),
        'addMany': ([index, ...elements]) => numbers.splice(index, 0, ...elements),
        'contains': ([element]) => console.log(numbers.indexOf(element)),
        'remove': (index) => numbers.splice(index, 1),
        'shift': (positions) => {
            for (let index = 0; index < positions; index++) {
                numbers.push(numbers.shift());
            }
        },
        'sumPairs': () => {
            const output = [];

            for (let index = 0; index < numbers.length; index += 2) {
                output.push(numbers[index + 1]
                    ? numbers[index] + numbers[index + 1]
                    : numbers[index]);
            }

            numbers = output;
        },
        'print': () => console.log(`[ ${numbers.join(', ')} ]`),
    }

    commands.forEach(x => {
        const [command, ...rest] = x.split(' ');
        actions[command](rest.map(Number));
    });
}

arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);

arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

arrayManipulator(
    [1, 2, 4, 5, 6, 7, 8],
    ['sumPairs', 'print']);