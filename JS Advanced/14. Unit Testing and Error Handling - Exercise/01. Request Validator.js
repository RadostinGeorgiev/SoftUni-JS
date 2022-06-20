function solve(inputObject) {

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!inputObject.hasOwnProperty('method') ||
        !validMethods.includes(inputObject['method'])) {

        throw new Error('Invalid request header: Invalid Method');
    }

    const uriRegex = /^([*]|[a-zA-Z0-9.]+)$/g;
    if (!inputObject.hasOwnProperty('uri') ||
        !uriRegex.test(inputObject.uri)) {

        throw new Error('Invalid request header: Invalid URI');
    }

    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!inputObject.hasOwnProperty('version') ||
        !validVersions.includes(inputObject['version'])) {

        throw new Error('Invalid request header: Invalid Version');
    }

    const messageRegex = /^([^<>\\&'"]*)$/g;
    if (!inputObject.hasOwnProperty('message') ||
        !messageRegex.test(inputObject.message)) {

        throw new Error('Invalid request header: Invalid Message');
    }

    return inputObject;
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

 console.log(solve({
     method: 'POST',
     uri: 'home.bash',
     message: 'rm -rf /*'
 }));