function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    switch (city) {
        case 'Sofia':
            switch (product) {
                case 'coffee':
                    console.log(0.5 * quantity);
                    break;
                case 'water':
                    console.log(0.8 * quantity);
                    break;
                case 'beer':
                    console.log(1.2 * quantity);
                    break;
                case 'sweets':
                    console.log(1.45 * quantity);
                    break;
                case 'peanuts':
                    console.log(1.6 * quantity);
                    break;
            }
            break;

        case 'Plovdiv':
            switch (product) {
                case 'coffee':
                    console.log(0.4 * quantity);
                    break;
                case 'water':
                    console.log(0.7 * quantity);
                    break;
                case 'beer':
                    console.log(1.15 * quantity);
                    break;
                case 'sweets':
                    console.log(1.3 * quantity);
                    break;
                case 'peanuts':
                    console.log(1.5 * quantity);
                    break;
            }
            break;

        case 'Varna':
            switch (product) {
                case 'coffee':
                    console.log(0.45 * quantity);
                    break;
                case 'water':
                    console.log(0.7 * quantity);
                    break;
                case 'beer':
                    console.log(1.1 * quantity);
                    break;
                case 'sweets':
                    console.log(1.35 * quantity);
                    break;
                case 'peanuts':
                    console.log(1.55 * quantity);
                    break;
            }
            break;
    }
}

smallShop(['coffee', 'Varna', '2']);
smallShop(['peanuts','Plovdiv','1']);
smallShop(['beer','Sofia','6']);
smallShop(['water','Plovdiv','3']);
smallShop(['sweets','Sofia','2.23']);
