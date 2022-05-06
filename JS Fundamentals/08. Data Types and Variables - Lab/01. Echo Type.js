function echoType(params) {
    let paramType = typeof (params);

    console.log(paramType);

    if (paramType == 'string' || paramType == 'number') {
        console.log(params);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);