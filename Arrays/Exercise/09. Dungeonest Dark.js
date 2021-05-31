function dungeonestDark(array) {

    const rooms = array.shift().split('|');
    let health = 100;
    let coins = 0;

    for (let index = 0; index < rooms.length; index++) {
        const currentRoom = rooms[index].split(' ');

        switch (currentRoom[0]) {
            case "potion":
                let currentHealth = Number(currentRoom[1]);

                if (health + currentHealth > 100) {
                    currentHealth = 100 - health;
                }

                health += currentHealth;
                console.log(`You healed for ${currentHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                coins += Number(currentRoom[1]);
                console.log(`You found ${currentRoom[1]} coins.`);
                break;

            default:
                let monster = currentRoom[0];
                health -= Number(currentRoom[1]);
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${index + 1}`);
                    return;
                }
                break;
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);