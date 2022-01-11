function repainting(input) {
    const nylonPrice = 1.50;
    const paintPrice = 14.50;
    const thinnerPrice = 5.00;
    const bagsPrice = 0.40;

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursWork = Number(input[3]);

    let totalAmount = (nylon + 2) * nylonPrice + paint * 1.1 * paintPrice + thinner * thinnerPrice + bagsPrice;
    totalAmount += totalAmount * 0.30 * hoursWork;

    console.log(totalAmount.toFixed(2));
}

repainting(['10 ', '11 ', '4 ', '8 ']);
repainting(['5 ', '10 ', '10 ', '1 ']);