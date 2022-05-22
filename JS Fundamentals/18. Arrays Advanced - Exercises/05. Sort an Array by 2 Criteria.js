function sortArrayBy2Criteria(array) {
    console.log(array
        .sort((a, b) => {
            if (a.length == b.length) return a.localeCompare(b);

            return a.length - b.length
        })
        .join('\n'));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);