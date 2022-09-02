const monthByName = {
    Jan: '1',
    Feb: '2',
    Mar: '3',
    Apr: '4',
    May: '5',
    Jun: '6',
    Jul: '7',
    Aug: '8',
    Sep: '9',
    Oct: '10',
    Nov: '11',
    Dec: '12',
};

const body = document.querySelector('body');
const years = document.getElementById('years');

document.addEventListener('DOMContentLoaded', onLoad);
body.addEventListener('click', onClick);

//---- creaate associative array from sections -----------------------------   
const sections = [...document.querySelectorAll('section')]
    .reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
    }, {});


//---- initializing the page -----------------------------------------------   
function onLoad() {
    body.replaceChildren();
    loadView(years.id);
}

//---- processing click event ----------------------------------------------  
function onClick({ target }) {
    const caption = document.querySelector('caption');
    const section = document.querySelector('section');
    let view = section.id;

    //---- if click over the caption ---------------------------------------   
    if (target.tagName == 'CAPTION') {
        if (section.className == 'monthCalendar') {
            view = `years`;
        }
        else if (section.className == 'daysCalendar') {
            view = `year-${caption.textContent.slice(-4)}`;
        }
    }

    //---- if click over the calendar --------------------------------------   
    if (target.className == 'day' || target.className == 'date') {
        if (section.className == 'yearsCalendar') {
            view = `year-${target.textContent.trim()}`;
        }
        else if (section.className == 'monthCalendar') {
            view = `month-${caption.textContent}-${monthByName[target.textContent.trim()]}`;
        }
    }

    loadView(view);
}

//---- change view function ------------------------------------------------   
function loadView(view) {
    const body = document.querySelector('body');
    body.replaceChildren(sections[view]);
}