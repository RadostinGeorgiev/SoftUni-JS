function townsToJSON(input) {
    let towns = [];
    let [name, latitude, longitude] = input.shift().split('|')
        .filter(v => v.length !== 0)
        .map(v => v.trim());

    for (const item of input) {
        let [currentTown, currentLatitude, currentLongitude] = item.split('|')
            .filter(v => v.length !== 0);

        let town = {}
        town[name] = currentTown.trim();
        town[latitude] = Number(Number(currentLatitude).toFixed(2));
        town[longitude] = Number(Number(currentLongitude).toFixed(2));

        towns.push(town);
    }

    return JSON.stringify(towns);
}

console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));