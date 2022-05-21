function orders(product, quantity) {
    const coffee = 1.50;
    const water = 1.00;
    const coke = 1.40;
    const snacks = 2.00;

    switch (product) {
        case "coffee":
            console.log((coffee * quantity).toFixed(2));
            break;
        case "coke":
            console.log((coke * quantity).toFixed(2));
            break;
        case "water":
            console.log((water * quantity).toFixed(2));
            break;
        case "snacks":
            console.log((snacks * quantity).toFixed(2));
            break;
    }
}

orders("water", 5);
orders("coffee", 2);