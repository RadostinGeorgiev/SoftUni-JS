function cinema(input) {
    let index = 0;
    let projection = input[index++];

    let rows = Number(input[index++]);
    let columns = Number(input[index++]);
    let ticketPrice = 0;

    switch (projection) {
        case 'Premiere':
            ticketPrice = 12.0;
            break;

        case 'Normal':
            ticketPrice = 7.5;
            break;

        case 'Discount':
            ticketPrice = 5;
            break;
    }

    let totalProfit = rows * columns * ticketPrice;

    console.log(`${totalProfit.toFixed(2)} leva`);
}

cinema(['Premiere', '10', '12']);
cinema(['Normal', '21', '13']);
cinema(['Discount', '12', '30']);