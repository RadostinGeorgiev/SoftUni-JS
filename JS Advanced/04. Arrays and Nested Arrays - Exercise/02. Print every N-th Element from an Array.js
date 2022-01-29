function printEveryNthElementFromArray(array, step) {

    return array.filter((v, i) => i % step == 0);
}

console.log(printEveryNthElementFromArray(['5', '20', '31', '4', '20'], 2));
console.log(printEveryNthElementFromArray(['dsa','asd', 'test', 'tset'], 2));
console.log(printEveryNthElementFromArray(['1', '2','3', '4', '5'], 6));