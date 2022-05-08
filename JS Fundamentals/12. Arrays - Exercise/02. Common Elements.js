function commonElements(firstArray, secondArray) {

    for (let index = 0; index < firstArray.length; index++) {
        for (let index2 = 0; index2 < secondArray.length; index2++) {
            if (firstArray[index] === secondArray[index2]) {
                console.log(firstArray[index]);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']);