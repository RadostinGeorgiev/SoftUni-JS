function cleverLily(input) {
    let age = Number(input.shift());
    let priceLaundry = Number(input.shift());
    let priceToys = Number(input.shift());

    let numberToys = 0;
    let totalMoney = 0;
    let moneyInCurrentYear = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            totalMoney += 10 + moneyInCurrentYear;
            moneyInCurrentYear += 10;
            totalMoney--;
        } else {
            numberToys++;
        }
    }

    totalMoney += numberToys * priceToys;

    totalMoney >= priceLaundry
        ? console.log(`Yes! ${(totalMoney - priceLaundry).toFixed(2)}`)
        : console.log(`No! ${(priceLaundry - totalMoney).toFixed(2)}`);
}

cleverLily(["10", "170", "6"]);
cleverLily(["21", "1570.98", "3"]);