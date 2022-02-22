function autoEngineeringCompany(input) {
    const cars = new Map();

    input.forEach(c => {
        const [carBrand, carModel, producedCars] = c.split(' | ');

        if (!cars.has(carBrand)) {
            cars.set(carBrand, {});
        }

        if (!cars.get(carBrand)[carModel]) {
            cars.get(carBrand)[carModel] = 0;
        }

        cars.get(carBrand)[carModel] += Number(producedCars);
    });

    for (const [carBrand, carModel] of cars) {
        console.log(carBrand);

        for (const model in carModel) {
            console.log(`###${model} -> ${carModel[model]}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);