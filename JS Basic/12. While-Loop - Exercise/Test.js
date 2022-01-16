function bestPlayer(input) {
    let index = 0;
    let player = input[index++];
    let goals = 0;
    let bestPlayer = "";
    let maxGoals = 0;
    while (player !== "END") {
        goals = Number(input[index++]);
        if (goals > maxGoals) {
            bestPlayer = player; 
            maxGoals = goals;
        }
 
        if (goals >= 10) {
            break;
        }
        player = input[index++];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (goals >=3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
 
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
 
    }
}

bestPlayer(["Neymar", "3","Ronaldo","3","Messi","3","END"])


