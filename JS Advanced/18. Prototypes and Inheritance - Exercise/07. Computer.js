function createComputerHierarchy() {
    class Device {
        constructor(manufacturer) {
            if (new.target.name == 'Device') {
                throw new TypeError('Attempting to instantiate an abstract class');
            }

            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Device {
        constructor(manufacturer, responseTime) {
            super(manufacturer);

            this.responseTime = responseTime;
        }
    }

    class Monitor extends Device {
        constructor(manufacturer, width, height) {
            super(manufacturer);

            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Device {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);

            this.expectedLife = expectedLife;
        }
    }

    class Computer  extends Device {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new TypeError('Attempting to instantiate an abstract class');
            }

            super(manufacturer);

            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacture, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacture, processorSpeed, ram, hardDiskSpace);

            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError('Incorrect object type of battery');
            }

            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacture, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacture, processorSpeed, ram, hardDiskSpace);

            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError('Incorrect object type of keyboard');
            }

            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError('Incorrect object type of monitor');
            }

            this._monitor = value;
        }
    }

    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Device = classes.Device;
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);

let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);

let keyboard = new Keyboard('Logitech',70);
console.log(keyboard);

let monitor = new Monitor('Benq',28,18);
console.log(monitor);

let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
console.log(desktop);
