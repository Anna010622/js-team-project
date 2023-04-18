import axios from 'axios';

export function getBookById(bookId) {
  const URL = `https://books-backend.p.goit.global/books/${bookId}`;

  return axios.get(URL);
}
