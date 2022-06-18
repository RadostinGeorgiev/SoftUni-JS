function calculator() {
    let [firstNumber, secondNumber, result] = '';

    return calculate = {
        init,
        add,
        subtract,
    };

    function init(selector1, selector2, resultSelector) {
        firstNumber = document.querySelector(selector1);
        secondNumber = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    };

    function add() {
        result.value = Number(firstNumber.value) + Number(secondNumber.value);
    };

    function subtract() {
        result.value = Number(firstNumber.value) - Number(secondNumber.value);
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 