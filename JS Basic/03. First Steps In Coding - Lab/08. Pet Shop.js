function dogsFood(input) {
    let dogsNumber = Number(input[0]);
    let animalsNumber = Number(input[1]);

    let total = dogsNumber * 2.5 + animalsNumber * 4;

    console.log(`${total} lv.`);
}

dogsFood(["13", "9"]);