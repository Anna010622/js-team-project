import { getBookById } from './get-book-by-id';
import showHideLoader from './loader';
import BrowserSprite from '../images/icons.svg';

const body = document.querySelector('body');
const booksSectionEl = document.querySelector('.books-section');
const backdropEl = document.querySelector('.modal-book__backdrop');

const STORAGE_KEY = 'books';
let bookList = [];

booksSectionEl.addEventListener('click', openModal);

async function openModal(event) {
  let getArray = localStorage.getItem(STORAGE_KEY);
  bookList = JSON.parse(getArray);
  if (!event.target.dataset.book) {
    return;
  }
  showHideLoader();
  try {
    const bookId = event.target.dataset.book;
    const response = await getBookById(bookId);
    const book = response.data;

    const modalMarkup = createModalMarkup(book);

    backdropEl.innerHTML = modalMarkup;
    backdropEl.classList.add('show-modal-book');
    body.classList.add('noScroll');

    const btnAdd = document.querySelector('.js-btn-add');
    btnAdd.addEventListener('click', onBtnAdd);

    const blockRemove = document.querySelector('.remove-block');

    if (localStorage.getItem('Name') === null) {
      btnAdd.style.display = 'none';
      blockRemove.style.display = 'none';
    }

    if (
      bookList !== null &&
      bookList.find(bookObj => bookObj._id === book._id)
    ) {
      blockRemove.classList.remove('hidden-btn');
      btnAdd.classList.add('hidden-btn');
    }

    function onBtnAdd() {
      if (bookList === null) {
        bookList = [];
        bookList.push(book);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookList));
        blockRemove.classList.remove('hidden-btn');
        btnAdd.classList.add('hidden-btn');
      } else if (!bookList.find(bookObj => bookObj._id === book._id)) {
        bookList.push(book);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookList));
        blockRemove.classList.remove('hidden-btn');
        btnAdd.classList.add('hidden-btn');
      }
    }

    const btnRemove = document.querySelector('.js-btn-remove');
    btnRemove.addEventListener('click', onBtnRemove);
    function onBtnRemove() {
      if (bookList.find(bookObj => bookObj._id === book._id)) {
        const foundBook = bookList.find(bookObj => bookObj._id === book._id);
        const bookIndex = bookList.indexOf(foundBook);
        bookList.splice(bookIndex, 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookList));
        blockRemove.classList.add('hidden-btn');
        btnAdd.classList.remove('hidden-btn');
      }
    }
    backdropEl.addEventListener('click', onBackdropClick);

    const btnClose = document.querySelector('[data-modal-close]');
    btnClose.addEventListener('click', onBtnClose);
    window.addEventListener('keydown', onEscKeyPress);
  } catch (error) {
    console.log(error);
  }
  showHideLoader();
}
function createModalMarkup({
  book_image,
  title,
  author,
  description,
  amazon_product_url,
  buy_links,
}) {
  return `
  <div class="modal-book">
    <button class="modal__btn-close" type="button" data-modal-close>
      <svg class="modal__button-icon " width="28" height="28">
        <use href=${BrowserSprite}#icon-close></use>
      </svg>
    </button>
    <div class="modal__inner">
      <div class="modal__img-wrapper">
        <img class="modal__img" src="${book_image}" alt="book's image" />
      </div>
      <div class="modal__information">
        <p class="modal__book-title">${title}</p>
        <p class="modal__book-author">${author}</p>
        <p class="modal__book-description">${description}</p>
        <ul class="modal__book-links">
          <li>
            <a class="modal__book-link shopping-list__link shopping-list__amazon" href="${amazon_product_url}" target="_blank"
            rel="noopener noreferrer nofollow" aria-label="link to amazon"></a>
          </li>
          <li>
            <a class="modal__book-link shopping-list__link shopping-list__apple-book" href="${buy_links[1].url}" target="_blank"
            rel="noopener noreferrer nofollow" aria-label="link to apple books"></a>
          </li>
          <li>
          <a class="modal__book-link shopping-list__link shopping-list__bookshop" href="${buy_links[4].url}" target="_blank"
          rel="noopener noreferrer nofollow" aria-label="link to Bookshop"></a>
          </li>
        </ul>
      </div>
    </div>
    <button class="modal__button js-btn-add" type="button" >Add to shopping list</button>
    <div class="remove-block hidden-btn">
      <button class="modal__button modal__button--remote js-btn-remove" type="button">
        Remove from the shopping list
      </button>
      <p class="modal__message">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    </div>
  </div>
  `;
}

function onBtnClose() {
  backdropEl.classList.remove('show-modal-book');
  body.classList.remove('noScroll');
  backdropEl.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscKeyPress);
}
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    backdropEl.classList.remove('show-modal-book');
    body.classList.remove('noScroll');
    window.removeEventListener('keydown', onEscKeyPress);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    event.target.classList.remove('show-modal-book');
    body.classList.remove('noScroll');
    window.removeEventListener('keydown', onEscKeyPress);
  }
}
