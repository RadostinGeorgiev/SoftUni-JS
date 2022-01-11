function projectsTime(input){
    let architectName = input[0];
    let projectsNumber = Number(input[1]);

    let totalTime = 3 * projectsNumber;

    console.log(`The architect ${architectName} will need ${totalTime} hours to complete ${projectsNumber} project/s.`);

}

projectsTime(["George","4"]);