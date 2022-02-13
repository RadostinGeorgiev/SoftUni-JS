function solution() {
    let string = '';

    let result = {
        append,
        removeStart,
        removeEnd,
        print,
    };

    return result;

    function append(str) {
        string += str;
        return result;
    }

    function removeStart(n) {
        string = string.slice(n);
        return result;
    }

    function removeEnd(n) {
        string = string.slice(0, -n);
        return result;
    }

    function print() {
        console.log(string);
        return result;
    }
}


let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

let thirdZeroTest = solution();
thirdZeroTest
    .append('hello')
    .append('again')
    .removeStart(3)
    .removeEnd(4)
    .print();