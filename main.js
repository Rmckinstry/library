function Book(title,author,pages,haveRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.haveRead=haveRead;
    this.bookKey=Math.floor(Math.random()*99999999999999);
}

function addBookToLibrary(library,book){
    library.push(book);
    addCard(book)
    return (library)
}

function addCard(object){
    const div = document.createElement('div');
    div.setAttribute('data-key',object.bookKey)
    div.classList.add('test')
    libraryContainer.append(div)

    const title = document.createElement('h2');
    title.textContent=`Title: ${object.title}`;
    const author = document.createElement('h3');
    author.textContent=`Author: ${object.author}`;
    const pages = document.createElement('h3');
    pages.textContent=`Pages: ${object.pages}`;
    const read = document.createElement('h3');
    read.textContent = `Have Read: ${object.haveRead}`
    div.append(title);
    div.append(author);
    div.append(pages);
    div.append(read);

    const removeBttn = document.createElement('button');
    removeBttn.textContent = "Remove Book"
    div.append(removeBttn);
    
    removeBttn.addEventListener('click',()=>{
        datakey=Number(removeBttn.parentNode.getAttribute('data-key'))
        
        parent = removeBttn.parentNode;
        parent.remove();

        removeBook(datakey);
    })

}

function removeBook(uniqueKey){
    const position = myLibrary.findIndex(key=> key.bookKey == uniqueKey)
    myLibrary.splice(position,1)
    return(myLibrary)
}

Book.prototype.read=function(){
    this.haveRead=true;
}

let myLibrary=[];

const libraryContainer = document.querySelector('#library-container')

const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click',()=>{
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    const read = document.querySelector('#read').checked

    if (read == true){
        const newBook = new Book (title, author, pages, true)
        addBookToLibrary(myLibrary,newBook)
    }
    else{
        const newBook = new Book (title, author, pages, false)
        addBookToLibrary(myLibrary,newBook)
    }
})
