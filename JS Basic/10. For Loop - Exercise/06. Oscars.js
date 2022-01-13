function oscars(input) {
    const nominationPoints = 1250.5;

    let actor = input.shift();
    let initialPoints = Number(input.shift());
    let jury = Number(input.shift());

    let totalPoints = initialPoints;

    for (let i = 0; i < jury; i++) {
        let name = input.shift();
        let points = Number(input.shift());

        totalPoints += name.length * points / 2;

        if (totalPoints >= nominationPoints) {
            break;
        }
    }

    totalPoints >= nominationPoints
        ? console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
        : console.log(`Sorry, ${actor} you need ${(nominationPoints - totalPoints).toFixed(1)} more!`);
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);