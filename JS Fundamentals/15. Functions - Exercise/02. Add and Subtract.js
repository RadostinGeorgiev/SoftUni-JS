function addAndSubtract(num1, num2, num3) {
    console.log(subtract(sum(num1, num2), num3));

    function sum(a, b) { return a + b }
    function subtract(a, b) { return a - b }
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);