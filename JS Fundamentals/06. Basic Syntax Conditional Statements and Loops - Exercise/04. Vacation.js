function vacation(numberOfPeoples, typeOfGroup, dayOfWeek) {
    let price = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek == "Friday") {
                price = 8.45;
            } else if (dayOfWeek == "Saturday") {
                price = 9.80;
            } else if (dayOfWeek == "Sunday") {
                price = 10.46;
            }

            if (numberOfPeoples >= 30) {
                price -= price * 0.15;
            }       
            break;

        case "Business":
            if (dayOfWeek == "Friday") {
                price = 10.90;
            } else if (dayOfWeek == "Saturday") {
                price = 15.60;
            } else if (dayOfWeek == "Sunday") {
                price = 16.00;
            }

            if (numberOfPeoples >= 100) {
                numberOfPeoples -= 10;
            }       
            break;

        case "Regular":
            if (dayOfWeek == "Friday") {
                price = 15;
            } else if (dayOfWeek == "Saturday") {
                price = 20;
            } else if (dayOfWeek == "Sunday") {
                price = 22.50;
            }

            if (numberOfPeoples >= 10 && numberOfPeoples <= 20) {
                price -= price * 0.05;
            }       
            break;
    }

    let totalPrice = price * numberOfPeoples;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")