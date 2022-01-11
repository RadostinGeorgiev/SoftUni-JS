function toyShop(input) {
    const puzzlesPrice = 2.60;
    const dollyPrice = 3.00;
    const bearsPrice = 4.10;
    const minionsPrice = 8.20;
    const lorryPrice = 2.00;

    let excursionPrice = Number(input[0]);
    let numPuzzles = Number(input[1]);
    let dolly = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let lorry = Number(input[5]);

    let totalAmount = (numPuzzles * puzzlesPrice) + (dolly * dollyPrice) + (bears * bearsPrice) + (minions * minionsPrice) + (lorry * lorryPrice);
    let toys = numPuzzles + dolly + bears + minions + lorry;

    if (toys >= 50) {
        totalAmount -= totalAmount * 0.25;
    }
    let loan = totalAmount * 0.1;
    let rest = totalAmount - loan - excursionPrice;

    rest >= 0
        ? console.log(`Yes! ${rest.toFixed(2)} lv left.`)
        : console.log(`Not enough money! ${Math.abs(rest).toFixed(2)} lv needed.`);
}

toyShop(['40.8', '20', '25', '30', '50', '10']);
toyShop(['320', '8', '2', '5', '5', '1']);