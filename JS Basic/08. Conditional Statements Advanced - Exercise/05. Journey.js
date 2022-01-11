function journey(input) {
  let budget = Number(input.shift());
  let season = input.shift();

  let destination = '';
  let placeOfRest = '';
  let totalPrice = 0.00;

  if (budget <= 100) {
    destination = 'Bulgaria';
    if (season === 'summer') {
      totalPrice = budget * 0.3;
      placeOfRest = 'Camp';
    } else {
      totalPrice = budget * 0.7;
      placeOfRest = 'Hotel';
    }
  } else if (budget > 1000) {
    destination = 'Europe';
    totalPrice = budget * 0.9;
    placeOfRest = 'Hotel';
  } else {
    destination = 'Balkans';
    if (season === 'summer') {
      totalPrice = budget * 0.4;
      placeOfRest = 'Camp';
    } else {
      totalPrice = budget * 0.8;
      placeOfRest = 'Hotel';
    }
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${placeOfRest} - ${totalPrice.toFixed(2)}`);
}

journey(['50', 'summer']);
journey(['75', 'winter']);
journey(['312', 'summer']);
journey(['678.53', 'winter']);
journey(['1500', 'summer']);