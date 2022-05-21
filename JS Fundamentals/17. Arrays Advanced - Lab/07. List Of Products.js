function listOfProducts(array) {
    let counter = 1;

    console.log(array
        .sort()
        .map(x => `${counter++}.${x}`)
        .join('\n'));
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
listOfProducts(['Apples', 'Banana', 'Apples']);