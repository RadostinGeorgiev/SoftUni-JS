class List {
    constructor() {
        this.elements = []
        this.size = 0;
    }

    add(value) {
        this.elements.push(value);
        this.elements.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (this.checkIndex(index)) {
            this.elements.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (this.checkIndex(index)) {
            return this.elements[index];
        }
    }

    checkIndex(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index is outside of the bounds of the array');
        }

        return true;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);