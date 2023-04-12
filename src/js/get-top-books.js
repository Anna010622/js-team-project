import axios from 'axios';

export function getTopBooks() {
  const URL = `https://books-backend.p.goit.global/books/top-books`;

  return axios.get(URL);
}
