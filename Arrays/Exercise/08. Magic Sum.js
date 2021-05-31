function magicSum(array, number) {

    for (let index1 = 0; index1 < array.length - 1; index1++) {
        
        let output = '';
        for (let index2 = index1 + 1; index2 < array.length; index2++) {
            if (array[index1] + array[index2] === number) {
               console.log(`${array[index1]} ${array[index2]}`) 
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);