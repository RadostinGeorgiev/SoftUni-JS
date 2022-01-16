function sameNumbers(input) {
    input = input.toString().split('');3
    
    isSame = input.every(n => n == input[0]);
    sum = input.reduce((s, n) => s + Number(n), 0);

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);