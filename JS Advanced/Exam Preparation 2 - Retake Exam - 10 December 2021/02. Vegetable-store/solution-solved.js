class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }
  loadingVegetables(vegetables) {
    const types = new Set();
    vegetables
      .map(
        (x) =>
          [
            (x = x.split(" ")),
            types.add(x[0]),
            { type: x[0], quantity: Number(x[1]), price: Number(x[2]) },
          ][2]
      )
      .forEach((p) => {
        const find = this.availableProducts.find((x) => x.type === p.type);
        find
          ? [
              (find.quantity += p.quantity),
              find.price < p.price ? (find.price = p.price) : null,
            ]
          : this.availableProducts.push(p);
      });
    return `Successfully added ${[...types].join(", ")}`;
  }
  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    selectedProducts
      .map((p) => ({
        type: p.split(" ")[0],
        quantity: Number(p.split(" ")[1]),
      }))
      .map((p) => {
        const isExist = this.availableProducts.find((x) => x.type === p.type);
        if (!isExist) {
          throw new Error(
            `${
              p.type
            } is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        }
        if (isExist.quantity < p.quantity) {
          throw new Error(
            `The quantity ${p.quantity} for the vegetable ${
              p.type
            } is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        }
        isExist.quantity -= p.quantity;
        totalPrice += p.quantity * isExist.price;
      });
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }
  rottingVegetable(type, quantity) {
    const typeExist = this.availableProducts.find((p) => p.type === type);
    if (!typeExist) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (typeExist.quantity < quantity) {
      typeExist.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }
    typeExist.quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }
  revision() {
    const products = this.availableProducts
      .sort((a, b) => a.price - b.price)
      .map((p) => `${p.type}-${p.quantity}-$${p.price}`);

    return `Available vegetables:\n${products.join(
      "\n"
    )}\nThe owner of the store is ${this.owner}, and the location is ${
      this.location
    }.`;
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
