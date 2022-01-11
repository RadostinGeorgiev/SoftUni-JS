function skiTrip(input) {
    let days = Number(input[0]);
    let rooms = input[1];
    let rating = input[2];
    let price = 0.00;
    let discount = 0.00;
    let totalCosts = 0.00;

    switch (rooms) {
        case 'room for one person':
            price = 18;
            break;
        case 'apartment':
            price = 25;
            if (days < 10) {
                discount = 0.3;
            } else if (days <= 15) {
                discount = 0.35;
            } else if (days > 15)
                discount = 0.5;
            break;

        case 'president apartment':
            price = 35;
            if (days < 10) {
                discount = 0.1;
            } else if (days <= 15) {
                discount = 0.15;
            } else if (days > 15)
                discount = 0.2;
            break;
    }

    totalCosts = (days - 1) * price;
    totalCosts -= totalCosts * discount;

    if (rating == 'positive') {
        totalCosts += totalCosts * 0.25;
    } else {
        totalCosts -= totalCosts * 0.1;
    }

    console.log(totalCosts.toFixed(2));
}

skiTrip(['2', 'apartment', 'positive']);