function moving(input) {
  let boxVolume = 1;
  let width = Number(input.shift());
  let length = Number(input.shift());
  let height = Number(input.shift());
  let command = input.shift();
  
  let freeVolume = width * length * height;

  while (command !== "Done") {
    let currentBoxVolume = Number(command) * boxVolume;
    freeVolume -= currentBoxVolume;

    if (freeVolume <= 0) {
      console.log(`No more free space! You need ${Math.abs(freeVolume)} Cubic meters more.`);
      break;
    }

    command = input.shift();
  }

  if (command == "Done") {
    console.log(`${freeVolume} Cubic meters left.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"])
moving(["10", "1", "2", "4", "6", "Done"]);