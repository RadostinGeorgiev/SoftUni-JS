function addAndRemove(array) {

    let counter = 1;
    let outputArray = [];

    for (const command of array) {
        if (command === 'add') {
            outputArray.push(counter);
        } else {
            if (outputArray.length > 0) {
                outputArray.pop();
            }
        }

        counter++;
    }

    console.log(outputArray.length === 0 ? 'Empty' : outputArray.join(' '));
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);