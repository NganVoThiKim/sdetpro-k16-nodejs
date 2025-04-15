import Controller from "./Controller";
import Book from "./Book";
import { log } from "console";

runManagement();

function runManagement(): void {

    const readline = require('readline-sync');
    let isInteracting = true;
    let controller = new Controller();
    let book: Book;

    while (isInteracting) {
        printMenuApp();
        let choice = getChoice();

        switch (choice) {
            case 1:
                console.log(`Old book list: `, controller.getBookList());
                console.log(`ADD NEW BOOK: `);
                let ISBN: number = Number(readline.question('Please enter ISBN: '));
                let title: string = readline.question('Please enter title: ');
                let author: string = readline.question('Please enter author: ');
                let year: number = Number(readline.question('Please enter year: '));

                let book = new Book(ISBN, title, author, year);
                controller.addBook(book);
                console.log(`Book list after adding: `, controller.getBookList());
                break;

            case 2:
                let findISBN: number = Number(readline.question('Input ISBN to find: '));
                let findBook = controller.findBookByISBN(findISBN);
                if (findBook) {
                    console.log(`Book found: `,findBook.getBookInfo());
                } else {
                    console.log(`Book with ISBN ${findISBN} is not found`);
                }
                break;

            case 3:
                console.log(`Old book list: `, controller.getBookList());
                let findISBNToUpdate: number = Number(readline.question('Input ISBN to update: '));
                let findBookToUpdate = controller.findBookByISBN(findISBNToUpdate);
                if (findBookToUpdate) {
                    let newTitle: string = readline.question('Input new title: ');
                    let newAuthor: string = readline.question('Input new author: ');
                    let newYear: number = Number(readline.question('Input new year: '));
                    controller.updateBook(findISBNToUpdate, newTitle, newAuthor, newYear);
                    console.log(`Book list after updating: `, controller.getBookList());
                } else {
                    console.log(`Book with ISBN ${findISBNToUpdate} is not found`);
                }
                break;

            case 4:
                console.log(`Old book list: `, controller.getBookList());
                let findISBNToDelete: number = Number(readline.question('Input ISBN to find: '));
                if (findISBNToDelete) {
                    controller.deleteBook(findISBNToDelete);
                    console.log(`Book list after deleting: `, controller.getBookList());
                } else {
                    console.log(`Book with ISBN ${findISBNToDelete} is not found`);
                }
                break;

            case 5:
                console.log(`Book list: `, controller.getBookList());
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

function printMenuApp(): void {
    console.log(`
    ======= Book Management Program (CRUD)============
        1. New book
        2. Find a book(ISBN)
        3. Update a book
        4. Delete a book
        5. Print the book list
        0. Exit
        `);
}

function getChoice(): number {
    const readline = require('readline-sync');
    return Number(readline.question("Enter your choice: "));
}

