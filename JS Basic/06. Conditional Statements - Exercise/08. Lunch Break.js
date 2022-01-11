function lunchBreak(input) {
    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let lunchTime = restDuration / 8;
    let restTime = restDuration / 4;

    let timeForMovie = restDuration - lunchTime - restTime;

    timeForMovie >= episodeDuration
        ? console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeForMovie - episodeDuration)} minutes free time.`)
        : console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(episodeDuration - timeForMovie)} more minutes.`);
}

lunchBreak(['Game of Thrones', '60', '96']);
lunchBreak(['Teen Wolf', '48', '60']);