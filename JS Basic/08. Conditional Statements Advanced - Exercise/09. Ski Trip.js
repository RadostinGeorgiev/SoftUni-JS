function skiTrip(input) {
    const roomForOnePersonPrice = 18.00;
    const apartmentPrice = 25.00;
    const presidentApartmentPrice = 35.00;

    let daysInHotel = Number(input.shift());
    let typeOfRoom = input.shift();
    let rate = input.shift();

    let pricePerNight = 0.00;
    let discount = 0.00;

    switch (typeOfRoom) {
        case 'room for one person':
            discount = 0.00;
            pricePerNight = roomForOnePersonPrice;
            break;

        case 'apartment':
            if (daysInHotel < 10)
                discount = 0.30;
            else if (daysInHotel > 15)
                discount = 0.50;
            else
                discount = 0.35;

            pricePerNight = apartmentPrice;
            break;

        case 'president apartment':
            if (daysInHotel < 10)
                discount = 0.10;
            else if (daysInHotel > 15)
                discount = 0.20;
            else
                discount = 0.15;

            pricePerNight = presidentApartmentPrice;
            break;
    }

    let totalCosts = (daysInHotel - 1) * pricePerNight * (1 - discount);

    if (rate == 'positive')
        totalCosts += totalCosts * 0.25;
    else
        totalCosts -= totalCosts * 0.1;

    console.log(`${totalCosts.toFixed(2)}`);

}

skiTrip(['14', 'apartment', 'positive']);
skiTrip(['30', 'president apartment', 'negative']);
skiTrip(['12', 'room for one person', 'positive']);
skiTrip(['2', 'apartment', 'positive']);