function printDNA(rows) {
    const DNAlength = 6;
    const DNA = 'ATCGTTAGGG';
    const dashes = [0, 2, 4, 2];
    let DNAposition = 0;
    let dashPosition = 0;

    for (let index = 0; index < rows; index++) {
        console.log(createDNArow());
    }

    function createDNArow() {
        let output = [];
        let dashPcs = getDash();

        output.push(('*').repeat((DNAlength - 2 - dashPcs)/2));
        output.push(getDNA());
        output.push(('-').repeat(dashPcs));
        output.push(getDNA());
        output.push(('*').repeat((DNAlength - 2 - dashPcs)/2));

        return output.join('');
    }

    function getDNA() {
        const value = DNA[DNAposition++];

        if (DNAposition == DNA.length) {
            DNAposition = 0;
        }

        return value;
    }

    function getDash() {
        const value = dashes[dashPosition++];

        if (dashPosition == dashes.length) {
            dashPosition = 0;
        }

        return value;
    }
}

printDNA(4);
printDNA(10);