function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        },
    };

    const order = function (input) {
        const [command, meal, quantity] = input.split(' ');
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
        for (const [ingredient, amount] of Object.entries(recipes[recipe])) {
            let total = quantity * amount;

            if (ingredients[ingredient] < total) {
                return `Error: not enough ${ingredient} in stock`;
            }

            ingredients[ingredient] -= total;
        }

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

// let manager = solution();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

// let manager2 = solution();
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("restock protein 10"));
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("restock carbohydrate 10"));
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("restock fat 10"));
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("restock flavour 10"));
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("report"));