function hairSalon(input) {

    let index = 0;
    let dayTarget = Number(input[index++]);
    let procedure = input[index++];
    let budget = 0;

    while (procedure !== "closed") {

        let type = input[index++];

        switch (procedure) {
            case "haircut":
                if (type === "mens") {
                    budget += 15;
                } else if (type === "ladies") {
                    budget += 20;
                } else {
                    budget += 10;
                }
                break;

            case "color":
                if (type === "touch up") {
                    budget += 20;
                } else if (type === "full color") {
                    budget += 30;
                }
                break;
        }

        if (budget >= dayTarget) {
            break;
        }

        procedure = input[index++];
    }


    budget >= dayTarget
        ? console.log("You have reached your target for the day!")
        : console.log(`Target not reached! You need ${dayTarget - budget}lv. more.`);

    console.log(`Earned money: ${budget}lv.`);
}

hairSalon(["300", "haircut", "ladies", "haircut", "kids", "color", "touch up", "closed"]);
hairSalon(["50", "color", "full color", "haircut", "ladies"]);