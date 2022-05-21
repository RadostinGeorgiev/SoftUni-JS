function loadingBar(input) {
    console.log(input == 100
        ? `100% Complete!\n[${'%'.repeat(10)}]`
        : `${input}% [${'%'.repeat(input / 10)}${'.'.repeat(10 - input / 10)}]\nStill loading...`);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);