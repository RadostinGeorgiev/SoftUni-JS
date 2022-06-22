(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str.concat(this);
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this.concat(str);
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }

    String.prototype.truncate = function (n) {
        if (Number(n) < 4) {
            return ".".repeat(Number(n));
        }

        if (Number(n) >= this.length) {
            return this.toString();
        }

        let lastSpace = this.toString().substring(0, n - 2).lastIndexOf(" ");

        return lastSpace !== -1
            ? `${this.toString().substring(0, lastSpace)}...`
            : `${this.toString().substring(0, n - 3)}...`;
    }

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    }
})();

var str = 'quick brown fox jumps over the lazy dog';
str = str.ensureStart('the ');
str = str.ensureStart('the ');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');