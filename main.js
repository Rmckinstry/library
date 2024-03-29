class Book {
  constructor(title, author, pages, haveRead, key){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.bookKey = key;
  }

  toggleRead(){
    if (this.haveRead == true) {
      this.haveRead = false;
    } else {
      this.haveRead = true;
    }
  }
}

//adds a book object to myLibrary function
function addBookToLibrary(book) {
  myLibrary.push(book);
  addCard(book);
  return myLibrary;
}

//modifys DOM to add card div, and buttons to remove and toggle read
function addCard(object) {
  const div = document.createElement("div");
  div.setAttribute("data-key", object.bookKey);
  const datakey = Number(div.getAttribute("data-key"));

  div.classList.add("book-card");
  libraryContainer.append(div);

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = `Title: ${object.title}`;

  const cardAuthor = document.createElement("h3");
  cardAuthor.textContent = `Author: ${object.author}`;

  const cardPages = document.createElement("h3");
  cardPages.textContent = `Pages: ${object.pages}`;

  const cardRead = document.createElement("h3");
  cardRead.setAttribute("id", "have-read");
  cardRead.textContent = `Have Read: ${object.haveRead}`;

  const removeBttn = document.createElement("button");
  removeBttn.textContent = "Remove Book";

  const toggleReadBttn = document.createElement("button");
  toggleReadBttn.textContent = "Toggle Read";

  div.append(cardTitle,cardAuthor,cardPages,cardRead,removeBttn,toggleReadBttn);

  // remove book event
  removeBttn.addEventListener("click", () => {
    parent = removeBttn.parentNode;
    parent.remove();

    removeBook(getIndex(datakey));
  });

  // toggle read event
  toggleReadBttn.addEventListener("click", () => {
    //changes HTML display
    parent = toggleReadBttn.parentNode;
    child = parent.querySelector("#have-read");
    if (child.textContent == "Have Read: false") {
      child.textContent = "Have Read: true";
    } else {
      child.textContent = "Have Read: false";
    }
    //changes value in object
    myLibrary[getIndex(datakey)].toggleRead();
  });
}

//finds object index in MyLibrary
function getIndex(uniqueKey) {
  const index = myLibrary.findIndex((key) => key.bookKey == uniqueKey);
  return index;
}
//removes book object from myLibrary array
function removeBook(position) {
  myLibrary.splice(position, 1);
  return myLibrary;
}

// resets form values - clearing form
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

//start of program
let myLibrary = [];

let keyTracker = 0;

const libraryContainer = document.querySelector("#library-container");

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const book = new Book(title, author, pages, read, ++keyTracker);
  addBookToLibrary(book);
  clearForm();
});
