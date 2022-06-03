function lowestPricesInCities(array) {
    const products = {};

    array.forEach(x => {
        [town, product, price] = x.split(' | ');
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = [];
        }

        products[product].push({ town, price });
    });

    Object.entries(products).forEach(([product, prices]) => {
        prices.sort((a, b) => a.price - b.price);
        console.log(`${product} -> ${prices[0].price} (${prices[0].town})`)
    });
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',
]);