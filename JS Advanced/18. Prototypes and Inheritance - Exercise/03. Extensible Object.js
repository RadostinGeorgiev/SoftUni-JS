function extensibleObject() {
    let proto = Object.getPrototypeOf(this);

    this.extend = function (obj) {
        for (const [key, value] of Object.entries(obj)) {
            typeof value == 'function'
                ? proto[key] = value
                : this[key] = value;
        }
    }

    return this;
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);