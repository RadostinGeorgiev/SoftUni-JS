function movieBudget(input) {
    let budget = Number(input[0]);
    let muteNumber = Number(input[1]);
    let muteDressPrice = Number(input[2]);

    let decorCosts = budget * 0.1;
    let dressCosts = muteNumber * muteDressPrice;

    if (muteNumber > 150) {
        dressCosts *= 0.9;
    }

    let totalCosts = decorCosts + dressCosts;

    if (totalCosts > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalCosts - budget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalCosts).toFixed(2)} leva left.`);
    }
}

movieBudget(['20000', '120', '55.5']);