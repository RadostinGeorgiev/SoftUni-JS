function priceOfBirthdayParty(input) {
    let hallRent = Number(input[0]);
    let piePrice = hallRent * 0.2;
    let drinksPrice = piePrice * 0.55;
    let animatorPrice = hallRent / 3;

    let totalBudget = hallRent + piePrice + drinksPrice + animatorPrice;

    console.log(totalBudget);
}

priceOfBirthdayParty(["2250"]);