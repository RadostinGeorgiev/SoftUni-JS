function sumSeconds(input) {
    let totalSeconds = Number(input[0]) + Number(input[1]) + Number(input[2]);

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    console.log(seconds <= 9
        ? `${minutes}:0${seconds}`
        : `${minutes}:${seconds}`);
}

sumSeconds(['35', '45', '44']);