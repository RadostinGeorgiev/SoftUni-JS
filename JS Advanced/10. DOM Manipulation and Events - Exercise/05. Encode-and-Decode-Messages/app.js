function encodeAndDecodeMessages() {
    document.getElementById('container').addEventListener('click', onClick);
    const textFields = [...document.getElementsByTagName('textarea')];

    function onClick({ target }) {
        if (target.tagName == 'BUTTON') {
            const text = target.parentElement.querySelector('textarea');

            const sign = target.textContent == 'Encode and send it' ? 1 : -1;
            let convertedText = [...text.value]
                .map(c => String.fromCharCode(c.charCodeAt(0) + sign))
                .join('');

            textFields[0].value = '';
            textFields[1].value = convertedText;
        }
    }
}