function fishingBoat(input) {

    let budget = Number(input.shift());
    let season = input.shift();
    let fishermen = Number(input.shift());

    let boatLoan = 0;
    let discount = 0.00;

    if (fishermen <= 6) {
        discount = 0.1;
    } else if (fishermen >= 7 && fishermen <= 11) {
        discount = 0.15;
    } else {
        discount = 0.25;
    }

    switch (season) {
        case 'Spring':
            boatLoan = 3000;
            break;

        case 'Summer':
        case 'Autumn':
            boatLoan = 4200;
            break;

        case 'Winter':
            boatLoan = 2600;
            break;
    }

    let totalMoney = boatLoan * (1 - discount);

    if (fishermen % 2 == 0 && season !== 'Autumn') {
        totalMoney -= totalMoney * 0.05;
    }

    budget >= totalMoney
        ? console.log(`Yes! You have ${(budget - totalMoney).toFixed(2)} leva left.`)
        : console.log(`Not enough money! You need ${(totalMoney - budget).toFixed(2)} leva.`);
}

fishingBoat(['3000', 'Summer', '11']);
fishingBoat(['3600', 'Autumn', '6']);
fishingBoat(['2000', 'Winter', '13']);