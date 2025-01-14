function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages ;
    this.read = read;

    this.info = function() {
        let string = 0;
        string = this.title + " by " + this.author + ", " + this.pages + " pages," + this.read + ".";
        return string;
    }
}

const libraryCollection = [];
const bookList = document.getElementById("book-list");
const submit = document.querySelector('.submit');
const addBook = document.getElementById("addBook");

//print library to page
function printLibrary() {
    let i = 0;
    bookList.innerHTML = ''

    libraryCollection.forEach((Book, index) => {
        //create elements
        const row = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");
        const remove = document.createElement("button");
        //add classes for styling
        row.classList.add(i, "flex-container");
        title.classList.add("title");
        author.classList.add("author");
        pages.classList.add("pages");
        read.classList.add("read");
        remove.classList.add("remove");
        remove.id = i;

        title.textContent = `${Book.title}`;
        author.textContent = `${Book.author}`;
        pages.textContent = `${Book.pages}`;
        read.textContent = `${Book.read}`;
        remove.textContent = "X";
        //console.log(Book.info());

        bookList.appendChild(row);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);
        row.appendChild(remove);
        i++;
    });
}

//event listener for adding a book to the library
submit.addEventListener("click", (addBookToLibrary) => {
    addBookToLibrary.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementsByClassName('.read').checked ? 'Not Read' : 'Read';
    const newBook = new Book(title, author, pages, read);
    libraryCollection.push(newBook);
    printLibrary();
    //form.reset();
    closeModal();
});

//event listener for removing a book from the library
bookList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const index = event.target.id;
        libraryCollection.splice(index, 1);
        printLibrary();
    }
});

//modal functionality
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);