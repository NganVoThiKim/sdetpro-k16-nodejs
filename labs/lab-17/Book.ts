export default class Book {
    private ISBN: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(ISBN: number, title: string, author: string, year: number) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getBookInfo(): string {
        return `ISBN: ${this.ISBN}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
    getISBN(): number {
        return this.ISBN;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getYear(): number {
        return this.year;
    }
    setISBN(ISBN: number): void {
        this.ISBN = ISBN;
    }
    setTitle(title: string): void {
        this.title = title;
    }
    setAuthor(author: string): void {
        this.author = author;
    }
    setYear(year: number): void {
        this.year = year;
    }

}