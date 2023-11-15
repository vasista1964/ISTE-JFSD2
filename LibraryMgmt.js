// Library object constructor
function Library() {
  this.books = [];
}

// Method to add a book to the library
Library.prototype.addBook = function(book) {
  this.books.push(book);
  console.log(`${book.title} has been added to the library.`);
};

// Method to remove a book from the library
Library.prototype.removeBook = function(bookTitle) {
  const index = this.books.findIndex(book => book.title === bookTitle);

  if (index !== -1) {
    const removedBook = this.books.splice(index, 1)[0];
    console.log(`${removedBook.title} has been removed from the library.`);
  } else {
    console.log(`Book with title "${bookTitle}" not found in the library.`);
  }
};

// Method to display the list of available books in the library
Library.prototype.displayBooks = function() {
  if (this.books.length === 0) {
    console.log('The library is empty.');
  } else {
    console.log('Available books in the library:');
    this.books.forEach(book => {
      console.log(`${book.title} by ${book.author}`);
    });
  }
};

// Example usage
const myLibrary = new Library();

const book1 = { title: 'The Definitive Guide', author: 'David Flanagan' };
const book2 = { title: 'The Full Stack Developer: Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer', author: 'Chris Northwood' };

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.displayBooks();

myLibrary.removeBook('The Definitive Guide');

myLibrary.displayBooks();