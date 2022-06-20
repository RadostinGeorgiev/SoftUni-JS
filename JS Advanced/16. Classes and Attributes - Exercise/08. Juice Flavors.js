function juiceFlavors(input) {
    const juice = {};
    const bottles = new Map();

    input.forEach(x => {
        [juiceName, juiceQuantity] = x.split(' => ');

        if (!juice.hasOwnProperty(juiceName)) { juice[juiceName] = 0; }

        juice[juiceName] += Number(juiceQuantity);
        if (juice[juiceName] >= 1000) { bottles.set(juiceName, Math.floor(juice[juiceName] / 1000)) };
    });

    for (const [juiceName, juiceQuantity] of bottles) {
        console.log(`${juiceName} => ${juiceQuantity}`);
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);