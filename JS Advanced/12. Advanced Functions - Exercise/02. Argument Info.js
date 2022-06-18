function argumentInfo(...input) {
    let types = {};

    input.forEach(v => {
        const type = typeof (v);
        console.log(`${type}: ${v}`);

        if (!types.hasOwnProperty(type)) {
            types[type] = 0;
        }

        types[type]++;
    });

    Object.keys(types)
        .sort((a, b) => types[b] - types[a])
        .forEach(k => console.log(`${k} = ${types[k]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });