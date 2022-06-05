function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);

    function onMouseMove(ev) {
        const result = Math.floor(ev.offsetX / gradient.clientWidth * 100);
        document.getElementById('result').textContent = `${result}%`;
    }
}