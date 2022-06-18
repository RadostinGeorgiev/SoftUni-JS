function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const order = function (input) {
        let [command, meal, quantity] = input.split(' ');
        quantity = Number(quantity);

        const instructions = {
            restock: () => restock(meal, quantity),
            prepare: () => prepare(meal, quantity),
            report: () => report(),
        }

        return instructions[command]();
    };

    return order;


    function restock(microelement, quantity) {
        ingredients[microelement] += quantity;

        return 'Success';
    }

    function prepare(recipe, quantity) {
        const remainingIngredients = {};

        for (const microelement in recipes[recipe]) {
            const remaining = (ingredients[microelement] - recipes[recipe][microelement] * quantity);

            if (remaining < 0) {
                return `Error: not enough ${microelement} in stock`;
            } else {
                remainingIngredients[microelement] = remaining;
            }
        }

        Object.assign(ingredients, remainingIngredients);
        return 'Success';
    }

    function report() {
        const result = Object.entries(ingredients)
            .map(([k, v]) => `${k}=${v}`)
            .join(' ');

        return result;
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

let manager2 = solution();
console.log(manager2("restock flavour 50"));
console.log(manager2("prepare lemonade 4"));
console.log(manager2("restock carbohydrate 10"));
console.log(manager2("restock flavour 10"));
console.log(manager2("prepare apple 1"));
console.log(manager2("restock fat 10"));
console.log(manager2("prepare burger 1"));
console.log(manager2("report"));

let manager3 = solution();
console.log(manager3("prepare turkey 1"));
console.log(manager3("restock protein 10"));
console.log(manager3("prepare turkey 1"));
console.log(manager3("restock carbohydrate 10"));
console.log(manager3("prepare turkey 1"));
console.log(manager3("restock fat 10"));
console.log(manager3("prepare turkey 1"));
console.log(manager3("restock flavour 10"));
console.log(manager3("prepare turkey 1"));
console.log(manager3("report"));

let manager4 = solution();
console.log(manager4("restock protein 100")); // Success 
console.log(manager4("restock carbohydrate 100")); // Success 
console.log(manager4("restock fat 100")); // Success 
console.log(manager4("restock flavour 100")); // Success 
console.log(manager4("report"));
console.log(manager4("prepare apple 2"));
console.log(manager4("prepare lemonade 2"));
console.log(manager4("prepare burger 2"));
console.log(manager4("prepare eggs 2"));
console.log(manager4("prepare turkey 2"));
console.log(manager4("report"));