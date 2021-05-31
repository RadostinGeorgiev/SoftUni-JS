function fuelMoney(distance, passengers, priceOfFuel) {

    let neededFuel = (distance / 100 * 7) + (passengers * 0.100);
    console.log(`Needed money for that trip is ${neededFuel * priceOfFuel}lv.`);
}

fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);