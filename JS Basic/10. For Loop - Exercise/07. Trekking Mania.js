function trekkingMania(input) {
    let groups = Number(input.shift());

    let peoplesMusala = 0;
    let peoplesMontBlanc = 0;
    let peoplesKilimanjaro = 0;
    let peoplesK2 = 0;
    let peoplesEverest = 0;
    let totalPeoples = 0;

    for (let i = 0; i < groups; i++) {
        let peoples = Number(input.shift());

        if (peoples <= 5) {
            peoplesMusala += peoples;
        }
        else if (peoples <= 12) {
            peoplesMontBlanc += peoples;
        }
        else if (peoples <= 25) {
            peoplesKilimanjaro += peoples;
        }
        else if (peoples <= 40) {
            peoplesK2 += peoples;
        }
        else {
            peoplesEverest += peoples;
        }

        totalPeoples += peoples;
    }

    console.log(`${(peoplesMusala / totalPeoples * 100.0).toFixed(2)}%`);
    console.log(`${(peoplesMontBlanc / totalPeoples * 100.0).toFixed(2)}%`);
    console.log(`${(peoplesKilimanjaro / totalPeoples * 100.0).toFixed(2)}%`);
    console.log(`${(peoplesK2 / totalPeoples * 100.0).toFixed(2)}%`);
    console.log(`${(peoplesEverest / totalPeoples * 100.0).toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
