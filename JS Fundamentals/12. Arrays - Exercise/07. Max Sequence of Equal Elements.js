function maxSequenceOfEqualElements(array) {

    let firstIndex = 0;
    let maxFirstIndex = 0;
    let sequenceLength = 1;
    let maxSequenceLength = 0;

    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] === array[index + 1]) {
            sequenceLength++;
        } else {
            firstIndex = index + 1;
            sequenceLength = 1;
        }

        sequenceLength > maxSequenceLength
            ? maxSequenceLength = sequenceLength
            : maxFirstIndex = firstIndex;
    }

    console.log(array.slice(maxFirstIndex, maxFirstIndex + maxSequenceLength).join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);