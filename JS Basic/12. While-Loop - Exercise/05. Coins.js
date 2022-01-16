function coins(input) {
    let money = Number(input[0]) * 100;

    let restCoins = money;
    let coins = 0;

    while (restCoins >= 200) {
        restCoins -= 200;
        coins++;
    }

    while (restCoins >= 100) {
        restCoins -= 100;
        coins++;
    }

    while (restCoins >= 50) {
        restCoins -= 50;
        coins++;
    }

    while (restCoins >= 20) {
        restCoins -= 20;
        coins++;
    }

    while (restCoins >= 10) {
        restCoins -= 10;
        coins++;
    }

    while (restCoins >= 5) {
        restCoins -= 5;
        coins++;
    }

    while (restCoins >= 2) {
        restCoins -= 2;
        coins++;
    }

    coins += restCoins;
    console.log(coins.toFixed(0));
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);