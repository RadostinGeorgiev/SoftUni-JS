function basketballEquipment(input) {
    let annualFee = Number(input[0]);

    let sneakersPrice = annualFee * (1 - 0.4);
    let outfitPrice = sneakersPrice * (1 - 0.2);
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalAmount = annualFee + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalAmount);
}

basketballEquipment(['365 ']);
basketballEquipment(['550 ']);