const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    // const element = this.books.indexOf(oldName);
    // console.log(newName);
    this.books.splice(this.books.indexOf(oldName), 1, newName);
    return this.books;
    // Change code above this line
  },
};

console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
