function houseParty(input) {
    const guests = [];

    input.forEach(sentence => {
        [name, ...words] = sentence.split(' ');
        if (words.includes('not')) {
            const index = guests.indexOf(name);
            
            index != -1
                ? guests.splice(index, 1)
                : console.log(`${name} is not in the list!`);
        } else {
            const index = guests.indexOf(name);

            index == -1
                ? guests.push(name)
                : console.log(`${name} is already in the list!`);
        }
    });

    console.log(guests.join('\n'));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);

houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);