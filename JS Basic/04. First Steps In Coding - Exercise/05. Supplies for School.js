function suppliesForSchool(input) {
    const penPrice = 5.80;
    const markerPrice = 7.20;
    const detergentPrice = 1.20;

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let totalAmount = (pens * penPrice + markers * markerPrice + detergent * detergentPrice);
    totalAmount *= 1 - discountPercentage / 100.0;

    console.log(totalAmount);
}

suppliesForSchool(['2 ', '3 ', '4 ', '25 ']);
suppliesForSchool(['4 ', '2 ', '5 ', '13 ']);