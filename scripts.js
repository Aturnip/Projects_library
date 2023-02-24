// storage for book objects
let myLibrary = [];

// constructor of book objects
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        let infos = [title, author, pages, isRead];
        return infos;
    }
}

// function that lets u add book to library
function addBookToLibrary(book) {
    let bookInfo = book.info();
    myLibrary.push(bookInfo);
    return;
}

// one book for testing
myLibrary[0] = new Book("Kuba", "Rzepka", 290, false);
myLibrary[1] = new Book("Maria", "Olga", 20, false);

// function that adds book to a table
const libraryTable = document.querySelector("table");

function addBookToTable(book) {
    let bookRow = libraryTable.insertRow(-1);
    let cell1 = bookRow.insertCell(0);
    let cell2 = bookRow.insertCell(1);
    let cell3 = bookRow.insertCell(2);
    let cell4 = bookRow.insertCell(3);
    let cell5 = bookRow.insertCell(4);
    cell1.innerHTML = `${book.title}`;
    cell2.innerHTML = `${book.author}`;
    cell3.innerHTML = `${book.pages}`;
    cell4.innerHTML = `${book.isRead}`;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.dataset.index = `${myLibrary.indexOf(book)}`;
    cell5.appendChild(removeBtn);
}



// function that displays the books in form of a table
function displayBooks() {
    for (const book of myLibrary) {
        addBookToTable(book);
    }
}

// displaying available books right away
displayBooks();

// button that brings up a form for adding a book
const addBookBtn = document.querySelector(".addBook");
addBookBtn.addEventListener("click", function() {
    const form = document.querySelector("form");
    form.style.display = "block";
})

// submit button reads the info in form and creates a book object and adds it to the table and clears form inputs
document.querySelector(".submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    let myBook = new Book(`${(document.querySelector("#title").value)}`, `${(document.querySelector("#author").value)}`,
                            `${(document.querySelector("#pages").value)}`, `${(document.querySelector("#read").value)}`);
    addBookToTable(myBook);
    addBookToLibrary(myBook)
    const form = document.querySelector("form");
    form.style.display = "none";
    document.querySelector("#title").value = document.querySelector("#author").value = document.querySelector("#pages").value = 
                                             document.querySelector("#read").value = null;
})
