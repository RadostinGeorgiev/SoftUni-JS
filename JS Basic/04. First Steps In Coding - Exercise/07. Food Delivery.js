function foodDelivery(input) {
    const chickenPrice = 10.35;
    const fishPrice = 12.40;
    const vegetarianPrice = 8.15;
    const supplyPrice = 2.50;

    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetarian = Number(input[2]);

    let orderPrice = chicken * chickenPrice + fish * fishPrice + vegetarian * vegetarianPrice;
    let dessertPrice = orderPrice * 0.2;
    orderPrice += dessertPrice + supplyPrice; 

    console.log(orderPrice);
}

foodDelivery(['2 ', '4 ', '3 ']);
foodDelivery(['9 ', '2 ', '6 ']);