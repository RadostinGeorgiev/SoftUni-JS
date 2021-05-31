function spiceMustFlow(startingYield) {

    let daiLyYield = startingYield;
    let daysCounter = 0;
    let spicesInStore = 0;

    while (daiLyYield >= 100) {
        daysCounter++;
        spicesInStore += daiLyYield - 26;
        daiLyYield -= 10;
    }

    spicesInStore -= 26;

    if (spicesInStore < 0) {
        spicesInStore = 0;
    }

    console.log(daysCounter);
    console.log(spicesInStore);
}

spiceMustFlow(111);