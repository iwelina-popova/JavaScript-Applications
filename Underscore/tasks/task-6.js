/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
	*	if there is more than one author print them all sorted in ascending order by fullname
		*   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
  return function (books) {
    var authors = [],
      sortedAuthors = [],
      maxNumberOfBooks = 0;

    _.chain(books)
      .map(function (book) {
        book.author.fullname = book.author.firstName + ' ' + book.author.lastName;
        book.authorFullname = book.author.fullname;

        return book;
      })
      .groupBy('authorFullname')
      .each(function (books, author) {
        authors.push({ name: author, books: books.length });
      });
      
      var max = _.max(authors, function(author) {
        return author.books;
      });
      
      _.chain(authors)
      .filter(function(author) {
        return author.books == max.books;
      })
      .sortBy('name')
      .each(function(author) {
        console.log(author.name);
      });
  };
}

module.exports = solve;