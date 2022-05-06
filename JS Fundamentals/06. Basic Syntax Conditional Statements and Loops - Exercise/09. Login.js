function login(input) {

    let username = input.shift();
    let password = "";

    for (let index = username.length - 1; index >= 0; index--) {
        password += username[index];
    }

    let userinput = input.shift();
    let counter = 0;
    while (userinput != password) {
        if (counter == 3) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log('Incorrect password. Try again.');
        counter++;
        userinput = input.shift();
    }

    console.log(`User ${username} logged in.`);
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);