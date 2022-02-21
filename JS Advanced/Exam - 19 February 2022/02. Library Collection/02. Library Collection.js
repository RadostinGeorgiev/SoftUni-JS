class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    /**
     * --- addBook -------------------------------------------
     * @param {*} bookName 
     * @param {*} bookAuthor 
     * @returns 
     */
    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw new Error('Not enough space in the collection.');
        }

        const book = {
            bookName,
            bookAuthor,
            payed: false,
        }

        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    /**
     * --- payBook -------------------------------------------
     * @param {*} bookName 
     * @returns 
     */
    payBook(bookName) {
        let book = this.books.find(b => b.bookName === bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        }

        book.payed = true;

        return (`${bookName} has been successfully paid.`);
    }

    /**
     * --- removeBook -------------------------------------------
     * @param {*} bookName 
     * @returns 
     */
    removeBook(bookName) {
        let book = this.books.find(b => b.bookName === bookName);

        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (book.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books.splice(this.books.indexOf(book), 1);

        return `${bookName} remove from the collection.`;
    }

    /**
     * --- getStatistics -------------------------------------------
     * @param  {...any} bookAuthor 
     * @returns 
     */
    getStatistics(...bookAuthor) {
        if (bookAuthor.length === 0) {
            let output = [];

            output.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);

            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .map(b => `${b.bookName} == ${b.bookAuthor} - ${(b.payed ? 'Has Paid' : 'Not Paid')}.`)
                .forEach(b => output.push(b));

            return output.join('\n');
        } else {
            let book = this.books.find(b => b.bookAuthor === bookAuthor[0]);

            if (!book) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            return `${book.bookName} == ${book.bookAuthor} - ${(book.payed ? 'Has Paid' : 'Not Paid')}.`
        }
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));

const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));

const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));
console.log(library.removeBook('In Search of Lost Time'));

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

let library = new LibraryCollection(2);
console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.payBook('Don Quixote'));
console.log(library.removeBook('Don Quixote'), "Don Quixote remove from the collection.");
console.log(library.removeBook('In Search of Lost Time'));