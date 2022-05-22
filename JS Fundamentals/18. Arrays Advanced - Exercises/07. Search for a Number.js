function searchForNumber(numbers, [elements, deleted, searched]) {
    const result = numbers.slice(0, elements);
    result.splice(0, deleted);
    const count = result.filter(x => x == searched).length;

    console.log(`Number ${searched} occurs ${count} times.`);
}

searchForNumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]);

searchForNumber(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]);