let myLibrary = [];
const button = document.getElementById('btn');

function Book(title, author, pages, readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
}


function displayBooks() {
    var library = document.querySelector('.displayBooks');
    library.innerHTML = '';
    for (let i=0; i<myLibrary.length; i++) {
        var newBook = document.createElement('div');
        var string = `Title: ${myLibrary[i].title} Author: ${myLibrary[i].author} Number Of Pages: ${myLibrary[i].pages} Status: ${myLibrary[i].readYet}`;
        newBook.append(string);
        library.append(newBook);
        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        newBook.append(deleteBtn);
        newBook.classList.add('book');
        deleteBtn.value = i;
        deleteBtn.classList.add('delete');
        deleteBtn.onclick = function() {
            console.log(this.value);
            myLibrary.splice(this.value, 1);
            console.log(myLibrary);
            displayBooks();
        }
    }  
}

function addBookToLibrary(e) {
    e.preventDefault();
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var readYet = document.getElementById('readYet').value;
    myLibrary.push(new Book(title, author, pages, readYet));
    displayBooks();
    document.getElementById('form').reset();   
}

button.onclick = addBookToLibrary;
