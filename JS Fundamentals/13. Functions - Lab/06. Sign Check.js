function signCheck(...params) {
    let count = 0;

    params.forEach(x => { x < 0 ? count++ : null });
    console.log(count % 2 == 0 ? 'Positive' : 'Negative');
}

signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)