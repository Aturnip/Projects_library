// storage for book objects
let library = [];

// constructor of book objects
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return [title, author, pages, isRead];
    }
}

// books for testing
const book2 = new Book("Kuba", "Rzepka", 290, false);
const book1 = new Book("Maria", "Olga", 20, false);

// function that lets u add book to library
function addBookToLibrary(book) {
    library.push(book.info());
    return;
}

// button that brings up a form
function visibilityToggle(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

const addBookForm = document.querySelector(".add_book_form");
const addBookButton = document.querySelector(".add_book_button");

addBookButton.addEventListener("click", () => {
    visibilityToggle(addBookForm);
});

// submit button adds a book to a library array
const submitAddBookFormButton = document.querySelector(".form_submit_button");

function readFormInfo() {
    let bookTitle = document.querySelector("#book_title").value;
    let bookAuthor = document.querySelector("#book_author").value;
    let bookPages = document.querySelector("#book_pages").value;
    let bookIsRead = document.querySelector("#book_is_read").checked;
    return [bookTitle, bookAuthor, bookPages, bookIsRead];
}

function createBookObject(array) {
    return new Book(array[0], array[1], array[2], array[3]);
}

// after sumbitting, new book is added to the library table
const libraryTable = document.querySelector(".table_library");

// adds a row with columns, everything gets ID
function addABookToTable(book) {
    let bookInfo = book.info();
    let row = document.createElement("tr");
    row.setAttribute("id", `${library.length}`);
    for (let i=0; i<4; i++) {
        let column = document.createElement("th");
        column.textContent = `${bookInfo[i]}`;
        row.appendChild(column);
    }
    libraryTable.appendChild(row);
}

function populateARow(book) {
    let bookInfo = book.info();
}

submitAddBookFormButton.addEventListener("click", () => {
    let book = createBookObject(readFormInfo());
    addBookToLibrary(book);
    addABookToTable(book);
});

