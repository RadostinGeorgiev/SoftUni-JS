function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let discount = 0;

    let profit = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
    if (puzzles + dolls + bears + minions + trucks >= 50) {
        discount = 0.25;
    }

    profit = profit - profit * discount;
    profit = profit - profit * 0.1;

    console.log(profit >= excursionPrice
        ? `Yes! ${(profit - excursionPrice).toFixed(2)} lv left.`
        : `Not enough money! ${(excursionPrice - profit).toFixed(2)} lv needed.`);
}

toyShop(['40.8', '20', '25', '30', '50', '10']);
toyShop(['320', '8', '2', '5', '5', '1']);