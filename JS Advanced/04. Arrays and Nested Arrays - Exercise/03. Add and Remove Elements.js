function addAndRemoveElements(command) {
    let array = [];
    let number = 0;

    command.forEach((x) => {
        number++;
        x === 'add'
            ? array.push(number)
            : array.pop()
    });

    array.length == 0
        ? console.log("Empty")
        : console.log(array.join('\n'));
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);