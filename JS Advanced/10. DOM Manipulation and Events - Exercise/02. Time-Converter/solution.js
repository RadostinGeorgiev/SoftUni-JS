function attachEventsListeners() {
    const multiplier = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    document.querySelector('body').addEventListener('click', onClick);

    function onClick({ target }) {
        if (target.type == 'button') {
            const inputField = target.parentElement.querySelector('[type=text]');
            const unit = inputField.id;
            const value = inputField.value;

            let result = convert(value, unit);

            [...document.querySelectorAll('[type=text]')]
                .forEach(f => f.value = result[f.id]);
        }
    }

    function convert(input, units) {
        const inDays = input / multiplier[units];

        return {
            days: inDays,
            hours: inDays * multiplier.hours,
            minutes: inDays * multiplier.minutes,
            seconds: inDays * multiplier.seconds,
        }
    }
}