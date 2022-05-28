function cookingByNumbers(number, ...input) {
    const operations = {
        'chop': value => value / 2,
        'dice': value => Math.sqrt(value),
        'spice': value => value + 1,
        'bake': value => value * 3,
        'fillet': value => value * 0.8,
    }
    
    number = Number(number);

    input.forEach(x => {
        number = operations[x](number);
        console.log(number); 
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');