function radioCrystals(params) {
    const target = params.shift();
    let thickness;

    const action = {
        'Cut': value => value /= 4,
        'Lap': value => value *= 0.8,
        'Grind': value => value -= 20,
        'Etch': value => value -= 2,
        'X-ray': value => value += 1,
        'Transporting and washing': value => {
            value = Math.floor(value);
            console.log('Transporting and washing');
            return value;
        },
    }

    params.forEach(x => {
        thickness = x;
        console.log(`Processing chunk ${thickness} microns`);

        operation('Cut');
        operation('Lap');
        operation('Grind');
        operation('Etch');
        
        if (thickness < target) {
            thickness = action['X-ray'](thickness);
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${thickness} microns`);
    });

    function operation(procedure) {
        let counter = 0;

        while (action[procedure](thickness) >= target - 1) {
            thickness = action[procedure](thickness);
            counter++;
        }

        if (counter > 0) {
            console.log(`${procedure} x${counter}`);
            thickness = action['Transporting and washing'](thickness);
        }
    }
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);