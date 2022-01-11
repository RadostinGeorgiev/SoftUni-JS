function shopping(input) {
    const videocardPrice = 250.0;


    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let cpuPrice = videoCards * videocardPrice * 0.35;
    let cpu = Number(input[2]);
    let memoryPrice = videoCards * videocardPrice * 0.1;
    let memory = Number(input[3]);

    let totalPrice = videoCards * videocardPrice + cpu * cpuPrice + memory * memoryPrice;

    if (videoCards > cpu) {
        totalPrice -= totalPrice * 0.15;
    }

    budget >= totalPrice
        ? console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
        : console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
}

shopping(['900', '2', '1', '3']);
shopping(['920.45', '3', '1', '1']);