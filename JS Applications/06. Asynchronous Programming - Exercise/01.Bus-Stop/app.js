async function getInfo() {
    //---- get elements -----------------------------------------------------
    const busId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const ulElement = document.getElementById('buses');
    ulElement.innerHTML = '';

    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    try {
        //---- make server request -----------------------------------------
        const response = await fetch(url);

        if (response.status != 200) {
            throw new Error('Error');
        }

        //---- parse data --------------------------------------------------
        const data = await response.json();
        stopName.textContent = data.name;

        Object.entries(data.buses)
            .forEach(([busId, time]) => {
                liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;

                ulElement.appendChild(liElement);
            });

    } catch (error) {
        //---- error processing --------------------------------------------
        stopName.textContent = error.message;
    }
}