function storeCatalogue(input) {
    let products = {};

    for (const item of input) {
        let [name, price] = item.split(' : ');
        price = Number(price);

        let firstLetter = name[0]
        if (!products.hasOwnProperty(firstLetter)) {
            products[firstLetter] = {};
        }

        products[firstLetter][name] = price;
    }

    let sortedKeys = Object.keys(products).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
        console.log(key);

        let items = Object.entries(products[key]).sort((a, b) => a[0].localeCompare(b[0]));
        items.forEach((el) => console.log(`  ${el[0]}: ${el[1]}`))
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);