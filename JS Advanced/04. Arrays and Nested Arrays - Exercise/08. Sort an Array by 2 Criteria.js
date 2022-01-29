function sortArrayBy2Criteria(array) {
    array.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach(x => console.log(x));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);