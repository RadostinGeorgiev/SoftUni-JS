function solve() {
    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100,
            fight() {
                console.log(`${this.name} slashes at the foe!`);
                state.stamina--;
            }
        }

        return state;
    }

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100,
            cast(spell) {
                console.log(`${this.name} cast ${spell}`);
                state.mana--;
            }
        }

        return state;
    }

    return { mage, fighter };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);