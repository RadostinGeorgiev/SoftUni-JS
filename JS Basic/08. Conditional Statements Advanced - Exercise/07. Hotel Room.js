function hotelRoom(input) {
    let month = input.shift();
    let numberOvernight = Number(input.shift());

    let pricePerStudio = 0.00;
    let pricePerApartment = 0.00;

    switch (month) {
        case 'May':
        case 'October':
            pricePerStudio = 50;
            pricePerApartment = 65;

            if (numberOvernight > 14) {
                pricePerStudio -= pricePerStudio * 0.3;
                pricePerApartment -= pricePerApartment * 0.1;
            } else if (numberOvernight > 7) {
                pricePerStudio -= pricePerStudio * 0.05;
            }
            break;

        case 'June':
        case 'September':
            pricePerStudio = 75.20;
            pricePerApartment = 68.70;

            if (numberOvernight > 14) {
                pricePerStudio -= pricePerStudio * 0.2;
                pricePerApartment -= pricePerApartment * 0.1;
            }
            break;

        case 'July':
        case 'August':
            pricePerStudio = 76;
            pricePerApartment = 77;
            
            if (numberOvernight > 14) {
                pricePerApartment -= pricePerApartment * 0.1;
            }
            break;
    }

    console.log(`Apartment: ${(pricePerApartment * numberOvernight).toFixed(2)} lv.`);
    console.log(`Studio: ${(pricePerStudio * numberOvernight).toFixed(2)} lv.`);
}

hotelRoom(['May', '15']);
hotelRoom(['June', '14']);
hotelRoom(['August', '20']);