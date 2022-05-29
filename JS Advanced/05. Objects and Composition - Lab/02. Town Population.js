function townPopulation(input) {
    const city = {};

    input.forEach(x => {
        [name, population] = x.split(' <-> ');

        city.hasOwnProperty(name)
            ? city[name] += Number(population)
            : city[name] = Number(population);
    });

    for (const name in city) {
        console.log(`${name} : ${city[name]}`);
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