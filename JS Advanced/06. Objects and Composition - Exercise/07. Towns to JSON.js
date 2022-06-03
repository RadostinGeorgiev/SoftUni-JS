function townsToJSON(array) {
    output = [];

    const headings = array
        .shift()
        .split('|')
        .filter(x => x.length > 0)
        .map(x => x.trim());

    array.forEach(x => {
        const data = x
            .split('|')
            .filter(x => x.length > 0)
            .map(x => x.trim());

        const town = {};
        town[headings[0]] = data[0];
        town[headings[1]] = Number(Number(data[1]).toFixed(2));
        town[headings[2]] = Number(Number(data[2]).toFixed(2));

        output.push(town);
    });

    return JSON.stringify(output);
}

console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));