function dayOfWeeks(day) {

    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

    if (day < 1 || day > 7) {
       console.log('Invalid day!'); 
    } else {
        console.log(days[day - 1]);
    }
}

dayOfWeeks(3);
dayOfWeeks(6);
dayOfWeeks(11);