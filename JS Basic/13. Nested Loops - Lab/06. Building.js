function building(input) {
    let maxFloors = Number(input[0]);
    let maxRooms = Number(input[1]);

    for (let floor = maxFloors; floor > 0; floor--) {
        let outputString = "";
        for (let room = 0; room < maxRooms; room++) {
            if (floor == maxFloors) {
                outputString += "L" + floor + room + " ";
            } else if (floor % 2 == 0) {
                outputString += "O" + floor + room + " ";
            } else {
                outputString += "A" + floor + room + " ";
            }
        }
        
        console.log(outputString);
    }
}

building(["1", "1"]);