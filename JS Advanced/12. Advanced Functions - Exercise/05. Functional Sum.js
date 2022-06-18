function add(sum) {

    function internal(num) {
        sum += num;

        return internal;
    }

    internal.toString = function () {
        return sum;
    };

    return internal;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());