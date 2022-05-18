function carWash(input) {
    let value = 0;
    const command = {
        'soap': () => value += 10,
        'water': () => value += 0.2 * value,
        'vacuum cleaner': () => value += 0.25 * value,
        'mud': () => value -= 0.1 * value,
    }

    input.forEach(x => command[x]());
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(['soap', 'water', 'mud', 'mud', 'water', 'mud', 'vacuum cleaner']);