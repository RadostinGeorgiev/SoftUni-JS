function buildWall(array) {
    const concrete = [];
    array = array.map(Number);
    let count;

    do {
        count = 0;

        array = array.map(x => {
            if (x < 30) {
                x++;
                count++;
            }

            return x;
        });

        if (count > 0) { concrete.push(count * 195) };

    } while (count > 0);

    console.log(concrete.join(', '));
    console.log(`${concrete.reduce((a, b) => a + b) * 1900} pesos`);
}

buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);