function solve() {
    const infoBoxElement = document.querySelector('#info span');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let stopId = {
        name: '',
        next: 'depot',
    };

    async function depart() {
        toggleButtons();

        //---- get info from request -----------------------------------------
        stopId = await getRequest();
        infoBoxElement.textContent = `Next stop ${stopId.name}`;
    }

    function arrive() {
        toggleButtons();

        infoBoxElement.textContent = `Arriving at ${stopId.name}`;
    }

    return {
        depart,
        arrive
    };


    async function getRequest() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;

        try {
            //---- make server request ---------------------------------------
            const response = await fetch(url);

            if (response.status != 200) {
                throw new Error('Error');
            }
            //---- parse data ------------------------------------------------
            return data = await response.json();

        } catch (error) {
            //---- error processing ------------------------------------------
            infoBoxElement.textContent = error.message;
        }
    }

    //---- function for toggle buttons status ---------------------------------------------
    function toggleButtons() {
        arriveButton.disabled = !arriveButton.disabled;
        departButton.disabled = !departButton.disabled;
    }
}

let result = solve();