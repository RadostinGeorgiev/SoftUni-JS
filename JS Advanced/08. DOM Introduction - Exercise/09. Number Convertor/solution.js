function solve() {
    document.querySelector('button').addEventListener('click', onClick);

    let outputFormat = document.querySelector('#selectMenuTo');

    let binary = document.createElement('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';
    outputFormat.appendChild(binary);

    let hexadecimal = document.createElement('option');
    hexadecimal.textContent = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';
    outputFormat.appendChild(hexadecimal);

    function onClick() {
        let number = Number(document.querySelector('#input').value);

        let result = {
            binary: () => { return number.toString(2); },
            hexadecimal: () => { return number.toString(16).toUpperCase(); }
        }

        document.querySelector('#result').value = result[outputFormat.value]();
    }
}