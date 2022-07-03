class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.soldCounter = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' ||
            horsepower == null || horsepower < 0 || !Number.isInteger(horsepower) ||
            price == null || price < 0 ||
            mileage == null || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(c => c.model == model);
        let soldPrice;

        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        if (car.mileage <= desiredMileage) {
            soldPrice = car.price;
        } else if (car.mileage - desiredMileage <= 40000) {
            soldPrice = car.price * 0.95;
        } else {
            soldPrice = car.price * 0.9;
        }

        this.availableCars.splice(this.availableCars.indexOf(car), 1);
        this.soldCars.push({ model, horsepower: car.horsepower, soldPrice });

        this.totalIncome += soldPrice;
        this.soldCounter++;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        } else {
            let output = ['-Available cars:'];

            this.availableCars
                .map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)
                .forEach(c => output.push(c));

            return output.join('\n');
        }
    }

    salesReport(criteria) {
        let output = [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCounter} cars sold:`];

        if (criteria === 'horsepower') {
            this.soldCars
                .sort((a, b) => b.horsepower - a.horsepower)
                .map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)
                .forEach(c => output.push(c));

        } else if (criteria === 'model') {
            this.soldCars
                .sort((a, b) => a.model.localeCompare(b.model))
                .map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)
                .forEach(c => output.push(c));
        } else {
            throw new Error(`Invalid criteria!`)
        }

        return output.join('\n');
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// // console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// //dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// //dealership.addCar('Mercedes C63', 300, 29000, 187000);
// //dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));