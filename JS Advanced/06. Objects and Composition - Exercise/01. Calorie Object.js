function calorieObject(array) {
    let food = {};

    while (array.length > 0) {
        const name = array.shift();
        const calories = Number(array.shift());

        food[name] = calories;
    }

    console.log(food);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);