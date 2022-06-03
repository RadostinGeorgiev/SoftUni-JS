function heroicInventory(array) {
    const heroes = [];

    array.forEach(heroInfo => {
        [name, level, items] = heroInfo.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        const hero = Object.assign({}, { name, level, items });
        heroes.push(hero);
    });

    return JSON.stringify(heroes);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));

console.log(heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]));