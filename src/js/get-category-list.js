import axios from 'axios';

export function getCategoryList() {
  const URL = `https://books-backend.p.goit.global/books/category-list`;

  return axios.get(URL);
}
