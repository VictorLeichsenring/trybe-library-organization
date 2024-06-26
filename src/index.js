const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () =>
  books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

// Requisito 2
const oldBooksOrdered = (year) => {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => (currentYear - book.releaseYear) > 60 && book.releaseYear <= year)
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

// Requisito 3
const booksByAuthorBirthYear = (birthYear) =>
  books.filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  const filteredBooks = fantasyOrScienceFiction();
  const authors = filteredBooks.map((book) => book.author.name);
  return authors.sort();
};

// Requisito 5
const oldBooks = (year) => {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => (currentYear - book.releaseYear) > 60 && book.releaseYear <= year)
    .map((book) => book.name);
};

// Requisito 6
const authorWith3DotsOnName = () => {
  const targetBook = books.find((book) => book.author.name.match(/^\w{1}\.\s\w{1}\.\s\w{1}\./));
  return targetBook.name;
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
