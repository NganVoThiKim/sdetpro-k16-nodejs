import Book from "./Book";
export default class Controller {

    public book: Book;
    private books: Book[];
    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    findBookByISBN(ISBN: number): Book | undefined {
        return this.books.find(book => book.getISBN() === ISBN);
    }

    updateBook(ISBN: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.findBookByISBN(ISBN);
        if (book) {
            book.setISBN(ISBN);
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
        }
    }

    deleteBook(ISBN: number): void {
        const index = this.books.findIndex(book => book.getISBN() === ISBN);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    getBookList(): Book[] {
        return this.books;
    }
}