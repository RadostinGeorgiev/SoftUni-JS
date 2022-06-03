function carFactory(order) {
    const storage = {
        engine: {
            'Small engine': { power: 90, volume: 1800 },
            'Normal engine': { power: 120, volume: 2400 },
            'Monster engine': { power: 200, volume: 3500 },
            get(power) {
                if (power <= 90) return this['Small engine'];
                if (power <= 120) return this['Normal engine'];
                return this['Monster engine'];
            }
        },

        carriage: {
            Hatchback: { type: 'hatchback' },
            Coupe: { type: 'coupe' },
            get(type, color) {
                if (type == 'hatchback') {
                    this.Hatchback.color = color;
                    return this.Hatchback
                } else {
                    this.Coupe.color = color;
                    return this.Coupe;
                }
            }
        },

        wheels: {
            get(size) {
                if (size % 2 == 0) { this.size = size--; }

                return new Array(4).fill(size);
            }
        },
    }

    let car = {};

    car.model = order.model;
    car.engine = storage.engine.get(order.power);
    car.carriage = storage.carriage.get(order.carriage, order.color);
    car.wheels = storage.wheels.get(order.wheelsize);

    return car;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));