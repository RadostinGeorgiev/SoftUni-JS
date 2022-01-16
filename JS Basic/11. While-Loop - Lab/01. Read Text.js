function readText(input) {
    let text = input.shift();

    while (text !== "Stop") {
        console.log(text);
        text = input.shift();
    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText((["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]));