function maxEqualSequence(array) {

    let maxSeq = [];

    for (let i = 0; i < array.length; i++) {

        let currentSeq = [array[i]]

        for (let j = i + 1; j < array.length; j++) {
            
            if (array[i] === array[j]) {
                currentSeq.push(array[j]);
            } else {
                break;
            }
        }

        if (currentSeq.length > maxSeq.length) {
            maxSeq = currentSeq;
        }
    }
    console.log(maxSeq.join(' '));
}

maxEqualSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxEqualSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxEqualSequence([4, 4, 4, 4]);
maxEqualSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);