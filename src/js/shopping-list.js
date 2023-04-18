import Pagination from 'tui-pagination';

import { booksItems } from './books';
import bookImg from '../images/shopping_list/not_fond_img@1x.png';
import bookImgRetina from '../images/shopping_list/not_fond_img@2x.png';
import sprite from '../images/icons.svg';

const STORAGE_KEY = 'book-list';
const booksListEl = document.querySelector('.shopping-list__books-list');
const paginationEl = document.querySelector('.tui-pagination');
const btnPaginationConteinerEl = document.querySelector(
  '#tui-pagination-container'
);
const putBtnEl = document.querySelector('.put__btn');
let currentPage = 1;

function inputTextarea(e) {
  e.preventDefault();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(booksItems));
}

const bookListMarkup = data => {
  return data
    .map(
      element => `
      <div class="shopping-list__card">
      <div class="shopping-list__wrapper">
      <img
        class="shopping-list__img"
        src="${element.book_image}"
        alt="book ${element.list_name}"
      />
      <div class="shopping-list__about-wrapper">
      <div class="shopping-list__about-book">
      <h2 class="shopping-list__title">${element.title}</h2>
      <h3 class="shopping-list__category">${element.list_name}</h3>
      <ul class="shopping-list__link-list">
        <li>
          <a
            class="shopping-list__link shopping-list__amazon"
            href="${element.buy_links.find(shop => shop.name === 'Amazon').url}"
            aria-label="link to amazon"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
        <li>
          <a
            class="shopping-list__link shopping-list__apple-book"
            href="${
              element.buy_links.find(shop => shop.name === 'Apple Books').url
            }"
            aria-label="link to apple books"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
        <li>
          <a
            class="shopping-list__link shopping-list__bookshop"
            href="${
              element.buy_links.find(shop => shop.name === 'Bookshop').url
            }"
            aria-label="link to Bookshop"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
      </ul>
      </div>
      <p class="shopping-list__author">${element.author}</p>
      <p class="shopping-list__description">${element.description}</p>
      </div>
      <button class="shopping-list__btn" onclick="location.reload()"  data-id="${
        element._id
      }">
        <svg class="shopping-list__icon" width="14" height="14">
          <use href="${sprite}#icon-trash"></use>
        </svg>
      </button>
      </div>
    </div>`
    )
    .join(' ');
};

function getBooks() {
  const savedBooks = localStorage.getItem(STORAGE_KEY);
  if (savedBooks && savedBooks !== '[]') {
    const parsedCards = JSON.parse(savedBooks);
    const pagination = new Pagination(paginationEl, {
      totalItems: Math.ceil(parsedCards.length),
      itemsPerPage: 3,
      visiblePages: 2,
    });
    if (pagination.getCurrentPage() === 1) {
      const onePageArray = parsedCards.splice(0, 3);
      booksListEl.insertAdjacentHTML(
        'afterbegin',
        bookListMarkup(onePageArray)
      );
    }
  } else {
    booksListEl.innerHTML = `<p class="shopping-list-not-found-text">This page is empty, add some books and proceed to order.<p>
<img
    class="shopping-list--not-found"
    srcset=${bookImg} 1x, ${bookImgRetina} 2x
    src=${bookImg}
    alt="books"
    width="322"
    height="241" loading="lazy"
    />`;
  }
}

getBooks();

const onPaginationButton = event => {
  if (event.target.tagName !== 'A' && event.target.tagName !== 'SPAN') {
    return;
  }
  const savedBooks = localStorage.getItem(STORAGE_KEY);
  const parsedCards = JSON.parse(savedBooks);
  if (
    event.target.classList.contains('tui-next-is-ellip') ||
    (event.target.classList.contains('tui-next') &&
      currentPage < Math.ceil(parsedCards.length / 3))
  ) {
    currentPage = currentPage + 1;
    console.log(currentPage);
    const onePageArray = parsedCards.splice((currentPage - 1) * 3, 3);
    booksListEl.innerHTML = bookListMarkup(onePageArray);
    event.target.classList.add('tui-is-selected');
    return currentPage;
  } else if (event.target.classList.contains('tui-last')) {
    currentPage = Math.ceil(parsedCards.length / 3);
    console.log(currentPage);
    const onePageArray = parsedCards.splice((currentPage - 1) * 3, 3);
    booksListEl.innerHTML = bookListMarkup(onePageArray);
    event.target.classList.add('tui-is-selected');
    return currentPage;
  } else if (
    event.target.classList.contains('tui-ico-ellip') ||
    (event.target.classList.contains('tui-prev') && currentPage > 1)
  ) {
    currentPage = currentPage - 1;
    console.log(currentPage);
    const onePageArray = parsedCards.splice((currentPage - 1) * 3, 3);
    booksListEl.innerHTML = bookListMarkup(onePageArray);
    event.target.classList.add('tui-is-selected');
    return currentPage;
  } else if (event.target.classList.contains('tui-first')) {
    currentPage = 1;
    console.log(currentPage);
    const onePageArray = parsedCards.splice((currentPage - 1) * 3, 3);
    booksListEl.innerHTML = bookListMarkup(onePageArray);
    event.target.classList.add('tui-is-selected');
    return currentPage;
  }
  {
    currentPage = Number(event.target.textContent);
    console.log(currentPage);
    const onePageArray = parsedCards.splice((currentPage - 1) * 3, 3);
    booksListEl.innerHTML = bookListMarkup(onePageArray);
    event.target.classList.add('tui-is-selected');
    return currentPage;
  }
};

const onBtnTrash = event => {
  const savedBooks = localStorage.getItem(STORAGE_KEY);

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const parsedCards = JSON.parse(savedBooks);
  const selectedID = event.target.dataset.id;
  const deleteBookId = parsedCards.findIndex(book => book._id === selectedID);
  const newArray = parsedCards.splice(deleteBookId, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedCards));
};

booksListEl.addEventListener('click', onBtnTrash);

btnPaginationConteinerEl.addEventListener('click', onPaginationButton);

putBtnEl.addEventListener('click', inputTextarea);
