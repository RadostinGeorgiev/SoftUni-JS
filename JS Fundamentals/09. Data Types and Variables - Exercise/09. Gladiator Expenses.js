function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    const brokenHelmets = parseInt(lostFights / 2);
    const brokenSwords = parseInt(lostFights / 3);
    const brokenShields = parseInt(lostFights / 6);
    const brokenArmors = parseInt(lostFights / 12);

    let expenses =
        brokenHelmets * helmetPrice +
        brokenSwords * swordPrice +
        brokenShields * shieldPrice +
        brokenArmors * armorPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);