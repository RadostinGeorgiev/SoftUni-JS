function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('#main button'));
    
    const encodeButton = buttons.find(el => el.textContent.includes('Encode'));
    encodeButton.addEventListener('click', onClickEncode);

    const decodeButton = buttons.find(el => el.textContent.includes('Decode'));
    decodeButton.addEventListener('click', onClickDecode);

    function onClickEncode(ev) {
        const text = ev.target.parentElement.querySelector('textarea');

        let codedText = [...text.value]
            .map(c => String.fromCharCode(c.charCodeAt(0) + 1))
            .join('');

        text.value = '';
        decodeButton.parentElement.querySelector('textarea').value = codedText;
    }

    function onClickDecode(ev) {
        const text = ev.target.parentElement.querySelector('textarea');

        let decodedText = [...text.value]
            .map(c => String.fromCharCode(c.charCodeAt(0) - 1))
            .join('');

        text.value = decodedText;
    }
}