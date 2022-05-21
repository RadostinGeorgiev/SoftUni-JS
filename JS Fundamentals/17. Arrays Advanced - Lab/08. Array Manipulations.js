function arrayManipulations(input) {
    const array = input.shift().split(' ');
    const actions = {
        'Add': (value) => array.push(value),
        'Remove': (value) => array.forEach((x, i) => { if (x == value) { array.splice(i, 1) } }),
        'RemoveAt': (value) => array.splice(value, 1),
        'Insert': (value, index) => array.splice(index, 0, value),
    };

    input.forEach(x => {
        [commands, value, index] = x.split(' ');
        actions[commands](value, index);
    })
    
    console.log(array.join(' '));
}

arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);

arrayManipulations([
    '6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);