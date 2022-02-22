function juiceFlavors(input) {
    const juices = new Map();
    const bottles = new Map();

    input.forEach(j => {
        let [juiceName, juiceQuantity] = j.split(' => ');

        if (!juices.has(juiceName)) {
            juices.set(juiceName, 0);
        }

        let juiceQt = juices.get(juiceName) + Number(juiceQuantity);
        juices.set(juiceName, juiceQt);

        let bottleQt = Math.floor(juiceQt / 1000);

        if (bottleQt > 0) {
            juiceQt = juiceQt % 1000;

            if (!bottles.has(juiceName)) {
                bottles.set(juiceName, 0);
            }

            bottleQt = bottles.get(juiceName) + bottleQt;

            juices.set(juiceName, juiceQt);
            bottles.set(juiceName, bottleQt);
        }
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