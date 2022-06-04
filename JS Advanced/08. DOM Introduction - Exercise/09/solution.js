function solve() {
    document.querySelector('button').addEventListener('click', onClick);

    let outputFormat = document.getElementById('selectMenuTo');

    let binary = outputFormat.querySelector('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';
    outputFormat.appendChild(binary);

    let hexadecimal = document.createElement('option');
    hexadecimal.textContent = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';
    outputFormat.appendChild(hexadecimal);

    let result = {
        binary: (data) => data.toString(2),
        hexadecimal: (data) => data.toString(16).toUpperCase(),
    }

    function onClick() {
        let number = Number(document.querySelector('#input').value);
        document.querySelector('#result').value = result[outputFormat.value](number);
    }
}