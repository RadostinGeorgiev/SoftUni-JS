function checkPassword(input) {
    console.log(input[0] === 's3cr3t!P@ssw0rd' ? 'Welcome' : 'Wrong password!');
}

checkPassword(['qwerty']);
checkPassword(['s3cr3t!P@ssw0rd']);