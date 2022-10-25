let books = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    isSold: false,
    price: 25,
  },
  {
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    isSold: false,
    price: 30,
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    isSold: false,
    price: 25,
  },
];

let bookList = document.querySelector("#book-list");
let form = document.querySelector("form");
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPrice = document.querySelector("#price");

// sort the books alphabetically
function sortBooks() {
  return books.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

// creates a book object and adds to the books array
function addBook() {
  let book = {
    title: `${bookTitle.value}`,
    author: `${bookAuthor.value}`,
    isSold: false,
    price: `${bookPrice.value}`,
  };
  return books.push(book);
}

// Loops through the books array and renders all the books that are not sold
renderBooks();
function renderBooks() {
  bookList.innerHTML = "";
  sortBooks();
  books.forEach((book) => {
    if (book.isSold == false) {
      let listItem = document.createElement("li");
      listItem.innerHTML = `
            Tittle : ${book.title}
            Author: ${book.author} 
            Price: ${book.price} Chf`;
      bookList.appendChild(listItem);
    }
  });
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  sortBooks();
  renderBooks();
});
