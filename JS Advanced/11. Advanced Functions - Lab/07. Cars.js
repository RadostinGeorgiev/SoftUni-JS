function cars(input) {
    const objects = {};

    const commands = {
        create,
        inherit,
        set,
        print,
    };

    input.forEach(x => {
        const params = x.split(' ');

        const command = params.shift();
        const name = params.shift();

        const action = {
            'create': () => {
                commands.create(name);

                if (params.length) {
                    params.shift();
                    const parent = params.shift();

                    commands.inherit(name, parent);
                }
            },

            'set': () => {
                const key = params.shift();
                const value = params.shift();

                commands.set(name, key, value);
            },

            'print': () => commands.print(name),
        }

        action[command]();

    })

    function create(name) {
        objects[name] = {};
    }

    function inherit(name, parent) {
        objects[name] = Object.setPrototypeOf(objects[name], objects[parent]);
    }

    function set(name, key, value) {
        objects[name][key] = value;
    }

    function print(name) {
        let output = [];

        for (const key in objects[name]) {
            output.push(`${key}:${objects[name][key]}`);
        }

        console.log(output.join(','));
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);