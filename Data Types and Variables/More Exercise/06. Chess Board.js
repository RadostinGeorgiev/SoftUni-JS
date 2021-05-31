function chessBoard(size) {

    let isWhite = false;
    console.log('<div class="chessboard">');

    for (let row = 1; row <= size; row++) {
        console.log('  <div>');

        for (let col = 1; col <= size; col++) {
            if ((row + col) % 2 == 0) {
                isWhite = false;
            } else {
                isWhite = true;
            }

            console.log(isWhite ? '    <span class="white"></span>' : '    <span class="black"></span>');
        }

        console.log('  </div>');
    }

    console.log('</div>');
}

chessBoard(3);