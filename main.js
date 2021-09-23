class Book{
    constructor(title,author,pages,haveRead){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.haveRead=haveRead;
        this.bookKey=Math.floor(Math.random()*99999999999999);
    }

    toggleRead(){
        if (this.haveRead==true){
            this.haveRead=false
        }
        else{
            this.haveRead=true
        }  
    }

    addBookToLibrary(library){
        library.push(this);
        addCard(this)
        return(library)
    }
}


//modifys DOM to add card div, and buttons to remove and toggle read
function addCard(object){
    const div = document.createElement('div');
    div.setAttribute('data-key',object.bookKey)
    div.classList.add('book-card')
    libraryContainer.append(div)

    const cardTitle = document.createElement('h2');
    cardTitle.textContent=`Title: ${object.title}`;
    const cardAuthor = document.createElement('h3');
    cardAuthor.textContent=`Author: ${object.author}`;
    const cardPages = document.createElement('h3');
    cardPages.textContent=`Pages: ${object.pages}`;
    const cardRead = document.createElement('h3');
    cardRead.setAttribute('id','have-read')
    cardRead.textContent = `Have Read: ${object.haveRead}`
    div.append(cardTitle);
    div.append(cardAuthor);
    div.append(cardPages);
    div.append(cardRead);

    const removeBttn = document.createElement('button');
    removeBttn.textContent = "Remove Book"
    div.append(removeBttn);
    
    const toggleReadBttn = document.createElement('button');
    toggleReadBttn.textContent = "Toggle Read"
    div.append(toggleReadBttn);

    removeBttn.addEventListener('click',()=>{
        datakey=Number(removeBttn.parentNode.getAttribute('data-key'))
        
        parent = removeBttn.parentNode;
        parent.remove();

        removeBook(getIndex(datakey));
    })

    toggleReadBttn.addEventListener('click', ()=>{
        //changes HTML display
        parent = toggleReadBttn.parentNode;
        child = parent.querySelector('#have-read');
        if (child.textContent == 'Have Read: false'){
            child.textContent='Have Read: true'
        }
        else{
            child.textContent='Have Read: false'
        }
        //changes value in object
        datakey=Number(toggleReadBttn.parentNode.getAttribute('data-key'))
        myLibrary[getIndex(datakey)].toggleRead()
    })

}

//finds object index in MyLibrary
function getIndex(uniqueKey){
    const index = myLibrary.findIndex(key=> key.bookKey == uniqueKey)
    return(index)
}
//removes book object from myLibrary array
function removeBook(position){
    myLibrary.splice(position,1)
    return(myLibrary)
}

//start of program
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
        newBook.addBookToLibrary(myLibrary)
    }
    else{
        const newBook = new Book (title, author, pages, false)
        newBook.addBookToLibrary(myLibrary)
    }
    //clears input field (kinda)
    document.getElementById('title').value= ""
    document.getElementById('author').value= ""
    document.getElementById('pages').value= ""
    document.getElementById('read').checked= false;
})

let book1 = new Book ('sdf','sdfdfg','109', true);