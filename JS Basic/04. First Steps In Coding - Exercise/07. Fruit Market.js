function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberries = Number(input[4]);

    let raspberriesPrice = strawberriesPrice * 0.5;
    let orangesPrice = raspberriesPrice * 0.6;
    let bananasPrice = raspberriesPrice * 0.2;

    let totalMoney = bananas * bananasPrice + oranges * orangesPrice + raspberries * raspberriesPrice + strawberries * strawberriesPrice;

    console.log(totalMoney);
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);