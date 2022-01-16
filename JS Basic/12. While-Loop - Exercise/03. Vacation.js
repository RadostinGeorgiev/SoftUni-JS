function vacation(input) {
    let moneyForExcursion = Number(input.shift());
    let availableMoney = Number(input.shift());

    let totalDays = 0;
    let currentSpend = 0;

    while (availableMoney < moneyForExcursion && currentSpend < 5) {
        let action = input.shift()
        let currentSum = Number(input.shift());
        totalDays++;

        switch (action) {
            case 'spend':
                {
                    currentSpend++;
                    if (currentSpend == 5) {
                        console.log("You can't save the money.");
                        console.log(`${totalDays}`);
                    }

                    availableMoney -= currentSum;

                    if (availableMoney < 0) {
                        availableMoney = 0;
                    }
                    break;
                }

            case 'save':
                currentSpend = 0;
                availableMoney += currentSum;
                break;
        }
    }

    if (availableMoney >= moneyForExcursion) {
        console.log(`You saved the money for ${totalDays} days.`);
    }

}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);