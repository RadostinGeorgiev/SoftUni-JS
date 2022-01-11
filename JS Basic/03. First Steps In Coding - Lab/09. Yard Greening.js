function yardGreening(input){
    let squareMeters = Number(input[0]);

    let finalPrice = squareMeters * 7.61;
    let discount = finalPrice *0.18;
    finalPrice -= discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["150"]);