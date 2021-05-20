let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayLibrary() {

}

let newBookBtn = document.querySelector('#new-book')
let newBookForm = document.querySelector('.form-container')

newBookBtn.addEventListener('click', () => {
  if(newBookForm.style.display === 'none') {
    newBookForm.style.display = 'block'
  } else {
    newBookForm.style.display = 'none'
  }
})

const addForm = document.forms['new-book-form']

addForm.addEventListener('submit', function(e) {
  e.preventDefault()

  let bookTitle = addForm.querySelector('[name="title"]').value
  let bookAuthor = addForm.querySelector('[name="author"]').value
  let bookPages = addForm.querySelector('[name="pages"]').value
  let bookRead = addForm.querySelector('[name="read"]').checked

  book = new Book(bookTitle, bookAuthor, bookPages, bookRead)
  addBookToLibrary(book)

  console.log(book)
})