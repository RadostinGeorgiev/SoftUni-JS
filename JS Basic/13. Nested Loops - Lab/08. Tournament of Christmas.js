function tournamentOfChristmas(input) {
    let days = Number(input.shift());
    let totalMoney = 0;
    let counterWonGamesTournament = 0;
    let counterLostGamesTournament = 0;

    for (let i = 1; i <= days; i++) {
        let gamesName = input.shift();
        let daysMoney = 0;
        let counterWonGamesDays = 0;
        let counterLostGamesDays = 0;
        while (gamesName !== "Finish") {
            let result = input.shift();
            if (result === "win") {
                counterWonGamesDays++;
                daysMoney += 20;
            } else {
                counterLostGamesDays++;
            }

            gamesName = input.shift();
        }

        if (counterWonGamesDays > counterLostGamesDays) {
            daysMoney *= 1.1;
        }

        counterWonGamesTournament += counterWonGamesDays;
        counterLostGamesTournament += counterLostGamesDays;
        totalMoney += daysMoney;
    }

    if (counterWonGamesTournament > counterLostGamesTournament) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }
}

tournamentOfChristmas(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose",
    "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"]);