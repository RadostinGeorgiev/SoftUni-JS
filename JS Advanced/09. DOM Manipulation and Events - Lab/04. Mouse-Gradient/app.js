function attachGradientEvents() {
    let gradient = document.querySelector('#gradient');

    gradient.addEventListener('mousemove', function calculatePosition(e) {
        let result = Math.floor(e.offsetX / gradient.clientWidth * 100);
        document.querySelector('#result').textContent = `${result}%`;
    });
}