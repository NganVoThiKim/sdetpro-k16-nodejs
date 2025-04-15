"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
        this.books = [];
    }
    Controller.prototype.addBook = function (book) {
        this.books.push(book);
    };
    // getBook(ISBN:string): Book | undefined {
    //     const book = this.findBookByISBN(ISBN);
    //     if (book) {
    //         return book;       
    //     } else {
    //         console.log(`Book with ISBN ${ISBN} is not found`);
    //     }
    // }
    Controller.prototype.findBookByISBN = function (ISBN) {
        return this.books.find(function (book) { return book.getISBN() === ISBN; });
    };
    Controller.prototype.updateBook = function (ISBN, newTitle, newAuthor, newYear) {
        var book = this.findBookByISBN(ISBN);
        if (book) {
            book.setISBN(ISBN);
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
        }
    };
    Controller.prototype.deleteBook = function (ISBN) {
        var index = this.books.findIndex(function (book) { return book.getISBN() === ISBN; });
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    };
    Controller.prototype.getBookList = function () {
        return this.books;
    };
    return Controller;
}());
exports.default = Controller;
