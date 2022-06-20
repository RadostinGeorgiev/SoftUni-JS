class Stringer {
    _length = 0;

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    get innerLength() {
        return this._length;
    }

    set innerLength(value) {
        value < 0
            ? this._length = 0
            : this._length = value;
    }

    increase(length) {
        return this.innerLength += length;
    }

    decrease(length) {
        return this.innerLength -= length;
    }

    toString() {
        return this.innerLength == 0
            ? '...'
            : this.innerLength >= this.innerString.length
                ? this.innerString
                : this.innerString.slice(0, this.innerLength).concat('...');
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test