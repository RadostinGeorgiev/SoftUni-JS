function sortArrayBy2Criteria(array) {
    console.log(array.sort((a, b) => a.length - b.length ||
                                     a.localeCompare(b))
        .join('\n'));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);