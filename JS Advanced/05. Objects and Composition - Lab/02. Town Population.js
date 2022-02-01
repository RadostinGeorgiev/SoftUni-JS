function townPopulation(input) {
    const towns = {};

    for (const data of input) {
        const tokens = data.split(' <-> ');
        const town = tokens[0];
        let population = Number(tokens[1]);

        if (towns.hasOwnProperty(town)) {
            population += towns[town];
        }

        towns[town] = population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);