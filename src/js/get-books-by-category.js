import axios from 'axios';

export function getBooksByCategory(selectedCategory) {
  const URL = `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`;

  return axios.get(URL);
}
