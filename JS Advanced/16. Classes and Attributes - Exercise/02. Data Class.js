class Request {
    constructor(method, uri, version, message) {
        Object.assign(this, { method, uri, version, message });
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);