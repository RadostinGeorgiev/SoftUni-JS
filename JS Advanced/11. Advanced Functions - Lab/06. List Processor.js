function listProcessor(input) {
    const array = [];
    
    const commands = {
        add,
        remove,
        print,
    };

    input.forEach(c => {
        const [command, value] = c.split(' ');
        commands[command](value);
    });

    function add(str) {
        array.push(str);
    }

    function remove(str) {
        array = array.filter(x => x != str);
    }

    function print() {
        console.log(array.join(','));
    }
}


listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);