// import { sendAddedToStorage } from './local-storage-set';
// import { createBookMarkup } from "./create-book-markup";
import axios from 'axios'

const openModalBookEl = document.querySelector('[data-modal-book-open]');
const closeModalBookBtn = document.querySelector('[data-modal-book-close]');
const modalBook = document.querySelector('[data-modal-book]');
const modalBookInf = document.querySelector('[data-modal-book-inf]');

openModalBookEl.addEventListener('click', onOpenModalBook);
closeModalBookBtn.addEventListener('click', onCloseModalBook);
modalBook.addEventListener('click', onBackdropClick);

bookSectionEl.addEventListener('click', onBookClick);
async function onBookClick(event) {
  if(!event.target.dataset.book) {
    return;
  }

  try {
    const bookId = event.target.dataset.book;
    const response = await getBookById(bookId);
    const book = response.data;
    console.log(book);
  }
  catch (error) {
    console.log(error);
  }
}
function getBookById(bookid) {
  const URL = `https://books-backend.p.goit.global/books/top-books/${bookid}`;
  return axios.get(URL);
}

let currentId = null;

async function onOpenModalBook(e) {
  if (!e.target.closest('.book-item')) {
    return;
  }

  const bookId = e.target.closest('.book-item').dataset.id;

  if (currentId !== bookId) {
    currentId = bookId;

    const bookDetailsById = await api.getBookById(bookId);
    // console.log('bookDetailsById', bookDetailsById);

    createBookMarkup(bookDetailsById);
  }

  window.addEventListener('keydown', onEscKeyPress);

 modalBook.classList.add('show-modal');
}

function createBookMarkup(bookById) {
  modalBookInf.innerHTML = '';

  console.log('books', bookById);

  const { book_image, _id, title, author } =
  bookById;

  const markup = `<li class="books-list__item book" data-modal-book-open>
  <div class="book__img-wrapper">
    <img class="book__img" src="${book_image}" alt="book's image" data-book="${_id}" />
    <div class="book__overlay" data-book="${_id}">
      <p class="book__quick-view" data-book="${_id}">Quick view</p>
    </div>
  </div>
  <div class="book__text" data-book="${_id}">
    <h3 class="book__title" data-book="${_id}">${title}</h3>
    <p class="book__author" data-book="${_id}">${author}</p>
  </div>
  <div class="book-shops">
  </div>
  </li>
  `;

modalBookInf.insertAdjacentHTML('beforeend', markup);
}

function onCloseModalBook() {
  window.removeEventListener('keydown', onEscKeyPress);

  modalBook.classList.remove('show-modal');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalBook();
  }
}

function onEscKeyPress(e) {
  const isEscKey = e.code === 'Escape';
  if (isEscKey) {
    onCloseModalBook();
  }
}
