function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    startIndex = Math.max(startIndex, 0);
    endIndex = Math.min(endIndex, array.length - 1);

    return array.slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

module.exports = subSum;

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2)); 