function tennisRanklist(input) {
    let tournaments = Number(input.shift());
    let initialPoints = Number(input.shift());

    let wonTournaments = 0;
    let points = 0;

    for (let i = 0; i < tournaments; i++) {
        let state = input.shift();

        switch (state) {
            case "W":
                points += 2000;
                wonTournaments++;
                break;

            case "F":
                points += 1200;
                break;

            case "SF":
                points += 720;
                break;
        }
    }

    console.log(`Final points: ${initialPoints + points}`);
    console.log(`Average points: ${Math.floor(points / tournaments)}`);
    console.log(`${(wonTournaments / tournaments * 100).toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);