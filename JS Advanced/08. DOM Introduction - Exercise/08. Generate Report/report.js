function generateReport() {
    const headers = Array.from(document.querySelectorAll('th input'));
    const rows = Array.from(document.querySelectorAll('tr')).slice(1);
    const output = [];

    rows.forEach(r => {
        object = {};

        Array.from(r.children).forEach((v, i) => {
            if (headers[i].checked) { object[headers[i].name] = v.textContent; }
        })

        output.push(object);
    })

    document.getElementById('output').textContent = JSON.stringify(output, '', 2);
}