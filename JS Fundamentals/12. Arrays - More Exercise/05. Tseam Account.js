function tseamAccount(array) {
    
    let games = array.shift().split(' ');

    while ((input = array.shift()) !== 'Play!') {
        command = input.split('-').join(' ').split(' ');

        action = command[0];
        game = command[1];
        let index = -1;

        switch (action) {
            case 'Install':
                if (!(games.includes(game))) {
                    games.push(game);
                }
                break;

            case 'Uninstall':
                index = games.findIndex(item => item === game);
                
                if (index > -1) {
                    games.splice(index, 1);
                }
                break;

            case 'Update':
                index = games.findIndex(item => item === game);

                if (index > -1) {
                    games.splice(index, 1);
                    games.push(game);
                }
                break;

            case 'Expansion':
                let expansion = command[2];
                index = games.findIndex(item => item === game);

                if (index > -1) {
                    games.splice(index + 1, 0, game + ':' + expansion);
                }
                break;
        }
    }

    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!']);
tseamAccount(['CS WoW Diablo','Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V','Play!']);