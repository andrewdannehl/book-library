function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages ;
    this.read = read;

    this.info = function() {
        let string = 0;
        string = this.title + " by " + this.author + ", " + this.pages + " pages.";
        return string;
    }
}

const myLibrary = [];
const bookDisplay = document.getElementById("book-display");
const submit = document.querySelector('.submit');
const addBook = document.getElementById("addBook");
//print library to page


function printLibrary() {
    let i = 0;
    bookDisplay.innerHTML = '';

    myLibrary.forEach((Book, index) => {
        const listItem = document.createElement("li");
        const container = document.createElement("div");
        const div = document.createElement("div");
        const remove = document.createElement("button");
        listItem.classList.add(i);
        container.classList.add(i, "container");
        div.classList.add(i);
        remove.classList.add("remove");
        remove.id = i;
        //un-needed now?
        div.textContent = Book.info();
        remove.textContent = "X";
        console.log(Book.info());
        bookDisplay.appendChild(listItem);
        listItem.appendChild(container);
        container.appendChild(div);
        container.appendChild(remove);
        i++;
    });
}
//testing stuff
//Working OK - good to delete
//const theHobbit = new Book('The Hobbit', 'Tolkein', '356');
//const MASH = new Book('M*A*S*H', 'Richad Hooker', '219');
//const achilles = new Book('The Song of Achilles', 'Madeline Miller', '369');
//myLibrary = [achilles, theHobbit, MASH];
//printLibrary();




    //call this when submit is pressed.
submit.addEventListener("click", (addBookToLibrary) => {
    addBookToLibrary.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    printLibrary();
    //form.reset();
    closeModal();
});


bookDisplay.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const index = event.target.id;
        myLibrary.splice(index, 1);
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
//end modal stuff

