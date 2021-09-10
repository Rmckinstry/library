function Book(title,author,pages,haveRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.haveRead=haveRead;
}

Book.prototype.read=function(){
    this.haveRead=true;
}

function addBookToLibrary(){

}

let myLibrary=[];

const Book1 = new Book('The Outsiders', 'S.E. Hinton', 192, true);
const Book2 = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 223, true);
const Book3 = new Book('The Bible', 'Jesus', 1200, false);