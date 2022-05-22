function gladiatorInventory(input) {
    const action = {
        'Buy': (equipment) => {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment)
            }
        },
        'Trash': (equipment) => {
            const index = inventory.indexOf(equipment);

            if (index != -1) {
                inventory.splice(index, 1);
            }
        },
        'Repair': (equipment) => {
            const index = inventory.indexOf(equipment);

            if (index != -1) {
                inventory.push(inventory.splice(index, 1));
            }
        },
        'Upgrade': (equipment) => {
            [equipment, upgrade] = equipment.split('-');
            const index = inventory.indexOf(equipment);

            if (index != -1) {
                inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
            }
        },
    }
    const inventory = input.shift().split(' ');

    input.forEach(x => {
        let [command, equipment] = x.split(' ');

        action[command](equipment);
    });

    console.log(inventory.join(' '));
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);

gladiatorInventory([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);