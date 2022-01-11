function worldSwimmingRecord(input) {
    let swimingRecord = Number(input[0]); //seconds
    let distance = Number(input[1]); //meters
    let time = Number(input[2]); //seconds per 1 m

    let totalTime = distance * time;
    totalTime += Math.floor(distance / 15) * 12.5;

    console.log(totalTime >= swimingRecord
        ? `No, he failed! He was ${(totalTime - swimingRecord).toFixed(2)} seconds slower.`
        : `Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
}

worldSwimmingRecord(['10464', '1500', '20']);
worldSwimmingRecord(['55555.67', '3017', '5.03']);