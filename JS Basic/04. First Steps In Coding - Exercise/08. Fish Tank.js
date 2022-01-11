function fishTankVolume(input) {
    let length = Number(input[0]) / 10;
    let width = Number(input[1]) / 10;
    let height = Number(input[2]) / 10;
    let percentage = Number(input[3]);

    let volumeFishTank = length * width * height;
    volumeFishTank = volumeFishTank - volumeFishTank * percentage / 100;

    console.log(volumeFishTank);
}

fishTankVolume(['105', '77', '89', '18.5']);