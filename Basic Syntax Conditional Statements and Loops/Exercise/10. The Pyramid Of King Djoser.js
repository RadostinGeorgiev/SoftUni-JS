function thePyramidOfKingDjoser(base, increment) {
    let length = base;
    let currentLayer = 1;
    let stoneLength = 0;
    let currentLayerSize = 0;
    let stoneSize = 0;
    let shellSize = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    while (length >= 3) {
        currentLayerSize = Math.pow(length, 2);

        stoneLength = length - 2;
        stoneSize = Math.pow(stoneLength, 2);
        stone += stoneSize * increment;

        shellSize = currentLayerSize - stoneSize;
        if (currentLayer % 5 == 0) {
            lapis += shellSize * increment;
        } else {
            marble += shellSize * increment;
        }

        currentLayer++;
        length -= 2;
    }

    currentLayerSize = Math.pow(length, 2);
    gold = currentLayerSize * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(currentLayer * increment)}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);