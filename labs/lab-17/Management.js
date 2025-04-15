"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = require("./Controller");
var Book_1 = require("./Book");
runManagement();
function runManagement() {
    var readline = require('readline-sync');
    var isInteracting = true;
    var controller = new Controller_1.default();
    var book;
    while (isInteracting) {
        printMenuApp();
        var choice = getChoice();
        switch (choice) {
            case 1:
                console.log("Old book list: ", controller.getBookList());
                console.log("ADD NEW BOOK: ");
                var ISBN = Number(readline.question('Please enter ISBN: '));
                var title = readline.question('Please enter title: ');
                var author = readline.question('Please enter author: ');
                var year = Number(readline.question('Please enter year: '));
                var book_1 = new Book_1.default(ISBN, title, author, year);
                controller.addBook(book_1);
                console.log("Book list after adding: ", controller.getBookList());
                break;
            case 2:
                var findISBN = Number(readline.question('Input ISBN to find: '));
                var findBook = controller.findBookByISBN(findISBN);
                if (findBook) {
                    console.log("Book found: ", findBook.getBookInfo());
                }
                else {
                    console.log("Book with ISBN ".concat(findISBN, " is not found"));
                }
                break;
            case 3:
                console.log("Old book list: ", controller.getBookList());
                var findISBNToUpdate = Number(readline.question('Input ISBN to update: '));
                var findBookToUpdate = controller.findBookByISBN(findISBNToUpdate);
                if (findBookToUpdate) {
                    var newTitle = readline.question('Input new title: ');
                    var newAuthor = readline.question('Input new author: ');
                    var newYear = Number(readline.question('Input new year: '));
                    controller.updateBook(findISBNToUpdate, newTitle, newAuthor, newYear);
                    console.log("Book list after updating: ", controller.getBookList());
                }
                else {
                    console.log("Book with ISBN ".concat(findISBNToUpdate, " is not found"));
                }
                break;
            case 4:
                console.log("Old book list: ", controller.getBookList());
                var findISBNToDelete = Number(readline.question('Input ISBN to find: '));
                if (findISBNToDelete) {
                    controller.deleteBook(findISBNToDelete);
                    console.log("Book list after deleting: ", controller.getBookList());
                }
                else {
                    console.log("Book with ISBN ".concat(findISBNToDelete, " is not found"));
                }
                break;
            case 5:
                console.log("Book list: ", controller.getBookList());
                break;
            case 0:
                isInteracting = false;
                console.log("Exiting the program.");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}
function printMenuApp() {
    console.log("\n    ======= Book Management Program (CRUD)============\n        1. New book\n        2. Find a book(ISBN)\n        3. Update a book\n        4. Delete a book\n        5. Print the book list\n        0. Exit\n        ");
}
function getChoice() {
    var readline = require('readline-sync');
    return Number(readline.question("Enter your choice: "));
}
