function storeCatalogue(array) {
    const products = {};

    array.forEach(x => {
        [product, price] = x.split(' : ');
        price = Number(price);

        let firstLetter = product[0];
        if (!products.hasOwnProperty(firstLetter)) {
            products[firstLetter] = {};
        }

        products[firstLetter][product] = price;
    });

    Object.keys(products)
        .sort()
        .forEach(k => {
            console.log(k);
            Object.keys(products[k])
                .sort((a, b) => a.localeCompare(b))
                .map(p => console.log(`  ${p}: ${products[k][p]}`));
        });
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