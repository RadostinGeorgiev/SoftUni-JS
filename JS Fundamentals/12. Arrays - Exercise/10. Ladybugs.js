function ladybugs(array) {

    let length = array[0];
    let fields = [];

    for (let index = 0; index < length; index++) {
        fields[index] = 0;
    }

    let initialPositions = array[1].split(' ');

    for (const iterator of initialPositions) {
        bugPosition = Number(iterator);
        if (bugPosition >= 0 && bugPosition < length) {
            fields[bugPosition] = 1;
        }
    }

    for (let index = 2; index < array.length; index++) {
        const command = array[index].split(' ');

        let position = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if ((position >= 0) && (position < length) && (fields[position] == 1)) {
            fields[position] = 0;
            let newPosition = position;
            let isOutside = false;

            if (direction == "right") {
                newPosition = position + flyLength;
                if (newPosition >= length) {
                    isOutside = true;
                }
                else {
                    while (fields[newPosition] != 0) {
                        newPosition += flyLength;
                        if (newPosition >= length) {
                            isOutside = true;
                            break;
                        }
                    }
                }
            }
            else if (direction == "left") {
                newPosition = position - flyLength;
                if (newPosition < 0) {
                    isOutside = true;
                }
                else {
                    while (fields[newPosition] != 0) {
                        newPosition -= flyLength;
                        if (newPosition < 0) {
                            isOutside = true;
                            break;
                        }
                    }
                }
            }

            if (!isOutside) {
                fields[newPosition] = 1;
            }
        }
    }

    console.log(fields.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);