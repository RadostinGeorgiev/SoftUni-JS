function cinemaTickets(input) {
    let movie = input.shift();
    let totalSoldSeats = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    while (movie !== "Finish") {
        let totalSeats = Number(input.shift());

        let soldSeats = 0;
        let tickedType = input.shift();

        while (tickedType !== "End") {
            soldSeats++;
            if (tickedType === "student") {
                studentTickets++;
            } else if (tickedType === "standard") {
                standardTickets++;
            } else if (tickedType === "kid") {
                kidsTickets++;
            }

            if ((soldSeats == totalSeats) ||
                (tickedType === "Finish")) {
                break;
            }

            tickedType = input.shift();
        }

        console.log(`${movie} - ${(soldSeats / totalSeats * 100).toFixed(2)}% full.`);
        totalSoldSeats += soldSeats;

        movie = input.shift();
    }

    console.log(`Total tickets: ${totalSoldSeats}`);
    console.log(`${(studentTickets / totalSoldSeats * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalSoldSeats * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / totalSoldSeats * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student",
    "student", "student", "student", "student", "Finish"]);