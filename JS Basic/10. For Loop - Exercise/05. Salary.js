function salary(input) {
  let tabs = Number(input.shift());
  let salary = Number(input.shift());

  for (let i = 0; i < tabs; i++) {
    let text = input.shift();

    switch (text) {
      case "Facebook":
        salary -= 150;
        break;

      case "Instagram":
        salary -= 100;
        break;
        
      case "Reddit":
        salary -= 50;
        break;
    }

    if (salary == 0) {
      console.log("You have lost your salary.");
      break;
    }
  }

  if (salary != 0) {
    console.log(salary.toFixed(0));
  }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
