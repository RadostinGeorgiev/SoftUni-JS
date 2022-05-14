function nonDecreasingSubsequence(array) {

    let maxNumber = array[0];

    let output = array.filter(isMax);
    console.log(output.join(' '));

    function isMax(item) {
        if (item >= maxNumber) { maxNumber = item; }
        return item >= maxNumber;
    };
}

nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequence([1, 2, 3, 4]);
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);