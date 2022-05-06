function bitcoinMining(input) {

    let money = 0;
    let bitcoins = 0;
    let boughtBitcoins = 0;
    let day = 0;
    let firstDay = 0;

    for (let index = 0; index < input.length; index++) {
        let gold = input[index];

        day++;
        if (day % 3 == 0) {
            gold -= gold * 0.3;
        }

        money += gold * 67.51;
        bitcoins = Math.trunc(money / 11949.16);

        if (bitcoins > 0 && firstDay == 0) {
            firstDay = day;
        }

        boughtBitcoins += bitcoins;
        money -= bitcoins * 11949.16;
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);