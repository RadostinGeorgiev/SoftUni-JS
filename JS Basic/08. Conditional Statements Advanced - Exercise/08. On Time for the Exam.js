function onTimeForExam(input) {
    let hourExam = Number(input.shift());
    let minutesExam = Number(input.shift());
    let hourArrival = Number(input.shift());
    let minutesArrival = Number(input.shift());
    
    let timeState = '';
    let beforeOrAfter = '';

    minutesExam += hourExam * 60;
    minutesArrival += hourArrival * 60;
    let difference = minutesExam - minutesArrival;

    if (difference > 30) {
        timeState = 'Early';
        beforeOrAfter = 'before';
    } else if (difference < 0) {
        timeState = 'Late';
        beforeOrAfter = 'after';
    } else {
        timeState = 'On time';
        beforeOrAfter = 'before';
    }

    difference = Math.abs(difference);

    console.log(`${timeState}`);

    if (difference !== 0) {
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;

        if (hours < 1) {
            console.log(`${minutes} minutes ${beforeOrAfter} the start`);
        } else {
            if (minutes >= 0 && minutes < 10) {
                console.log(`${hours}:0${minutes} hours ${beforeOrAfter} the start`);
            } else {
                console.log(`${hours}:${minutes} hours ${beforeOrAfter} the start`);
            }
        }
    }
}

onTimeForExam(['9', '30', '9', '50']);
onTimeForExam(['9', '00', '10', '30']);
onTimeForExam(['10', '00', '10', '00']);
onTimeForExam(['9', '00', '8', '30']);
onTimeForExam(['14', '00', '13', '55']);
onTimeForExam(['11', '30', '10', '55']);
onTimeForExam(['16', '00', '15', '00']);
onTimeForExam(['11', '30', '8', '12']);
onTimeForExam(['11', '30', '12', '29']);