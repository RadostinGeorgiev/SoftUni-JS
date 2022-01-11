function volleyball(input) {
    const totalWeekends = 48;
    
    let year = input[0];
    let holidaysInYear = Number(input[1]);
    let weekendsInHometown = Number(input[2]);

    let weekendsInSofia = totalWeekends - weekendsInHometown;
    let freeWeekendsInSofia = weekendsInSofia * 3 / 4;
    let gamesInHolidays = holidaysInYear * 2 / 3;
    let totalGames = freeWeekendsInSofia + gamesInHolidays + weekendsInHometown;

    if (year === 'leap') {
        totalGames += totalGames * 0.15;
    }

    totalGames = Math.floor(totalGames);

    console.log(`${totalGames.toFixed(0)}`);
}

volleyball(['leap', '5', '2']);
volleyball(['normal', '3', '2']);
volleyball(['leap', '2', '3']);
volleyball(['normal', '11', '6']);
volleyball(['leap', '0', '1']);
volleyball(['normal', '6', '13']);