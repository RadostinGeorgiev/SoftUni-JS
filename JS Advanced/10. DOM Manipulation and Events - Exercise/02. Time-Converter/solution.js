function attachEventsListeners() {
    const multiplier = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    document.querySelector('body').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.type == 'button') {
            let unit = ev.target.parentElement.querySelector('[type=text]').id;
            let value = ev.target.parentElement.querySelector('[type=text]').value;

            let result = convert(value, unit);

            Array.from(ev.currentTarget.querySelectorAll('[type=text]'))
                .forEach(el => el.value = result[el.id]);
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