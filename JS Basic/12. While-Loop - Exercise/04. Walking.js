function walking(input) {
  let target = 10000;
  let line = input.shift();
  let sum = 0;

  while (line !== "Going home") {
    sum += Number(line);

    if (sum >= target) break;

    line = input.shift();
  }

  if (line === "Going home") {
    sum += Number(input.shift());
  }

  if (sum >= target) {
    console.log(`Goal reached! Good job!`);
    console.log(`${sum - target} steps over the goal!`);
  } else {
    console.log(`${target - sum} more steps to reach goal.`);
  }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["125", "250", "4000", "30", "2678", "4682"]); 