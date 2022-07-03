class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let types = new Set();

        [...vegetables].forEach(x => {
            let [type, quantity, price] = x.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            types.add(type);

            const foundProduct = this.availableProducts.find(p => p.type == type);
            if (foundProduct) {
                foundProduct.quantity += quantity;
                if (foundProduct.price < price) { foundProduct.price = price };
            } else {
                this.availableProducts.push({ type, quantity, price });
            }
        });

        return `Successfully added ${[...types].join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        [...selectedProducts].forEach(x => {
            let [type, quantity] = x.split(' ');
            quantity = Number(quantity);

            const foundProduct = this.availableProducts.find(p => p.type == type);
            if (!foundProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (foundProduct.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            };

            totalPrice += foundProduct.price * quantity;
            foundProduct.quantity -= quantity;
        })

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        const foundProduct = this.availableProducts.find(p => p.type == type);

        if (!foundProduct) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (foundProduct.quantity < quantity) {
            foundProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        };

        foundProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        let output = ["Available vegetables:"];

        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach(x => output.push(`${x.type}-${x.quantity}-$${x.price}`));

        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return output.join('\n');
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());