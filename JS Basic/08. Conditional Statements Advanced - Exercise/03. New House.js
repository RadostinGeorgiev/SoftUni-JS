function newHouse(input) {
  let flowers = input.shift();
  let flowersNumber = Number(input.shift());
  let budget = Number(input.shift());

  let price = 0.00;
  let discount = 0.00;
  let totalPrice = 0.00;

  switch (flowers) {
    case 'Roses':
      price = 5.00;
      if (flowersNumber > 80) {
        discount = 0.1;
      }
      break;

    case 'Dahlias':
      price = 3.80;
      if (flowersNumber > 90) {
        discount = 0.15;
      }
      break;

    case 'Tulips':
      price = 2.80;
      if (flowersNumber > 80) {
        discount = 0.15;
      }
      break;

    case 'Narcissus':
      price = 3.00;
      if (flowersNumber < 120) {
        discount = -0.15;
      }
      break;

    case 'Gladiolus':
      price = 2.50;
      if (flowersNumber < 80) {
        discount = -0.2;
      }
      break;
  }

  totalPrice = flowersNumber * price;
  totalPrice -= totalPrice * discount;

  budget >= totalPrice
    ? console.log(`Hey, you have a great garden with ${flowersNumber} ${flowers} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    : console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
}

newHouse(['Roses', '55', '250']);
newHouse(['Tulips', '88', '260']);
newHouse(['Narcissus', '119', '360']);