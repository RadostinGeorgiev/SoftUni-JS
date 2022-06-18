function getFibonator() {
    const arr = [0, 1];

    return function () {
        const num = arr[arr.length - 1],
            len = arr.length;

        arr.push(arr[len - 1] + arr[len - 2]);
        return num;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13