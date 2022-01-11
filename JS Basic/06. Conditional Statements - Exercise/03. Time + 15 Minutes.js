function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    minutes = hours * 60 + minutes;
    minutes += 15;
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    if (hours >= 24) {
        hours -= 24;
    }
    console.log(minutes <= 9
        ? `${hours}:0${minutes}`
        : `${hours}:${minutes}`);
}

timePlus15Minutes(['1', '46']);
timePlus15Minutes(['0', '01']);
timePlus15Minutes(['23', '59']);
timePlus15Minutes(['11', '08']);
timePlus15Minutes(['12', '49']);