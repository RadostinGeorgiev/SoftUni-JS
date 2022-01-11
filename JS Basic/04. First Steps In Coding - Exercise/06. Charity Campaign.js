function charity(input) {
    let days = Number(input[0]);
    let bakers = Number(input[1]);
    let pies = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    let totalPrice = days * bakers * (pies * 45 + waffles * 5.8 + pancakes * 3.20)
    totalPrice = totalPrice - (totalPrice / 8);

    console.log(totalPrice);
}

charity(["23", "8", "14", "30", "16"]);