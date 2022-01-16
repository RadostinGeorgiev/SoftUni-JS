function evenPositionElements(array) {
    console.log(array.filter((x, i) => i % 2 == 0)
         .join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);