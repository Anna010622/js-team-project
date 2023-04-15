import { trimString } from './trim-string';

export function createBookMarkup({ book_image, _id, title, author }) {
  let size = 30;
  if (window.matchMedia('(min-width: 768px)').matches) {
    size = 20;
  }
  if (window.matchMedia('(min-width: 1280px)').matches) {
    size = 15;
  }
  const trimmedTitle = trimString(title, size);

  let size2 = 55;
  if (window.matchMedia('(min-width: 768px)').matches) {
    size2 = 37;
  }
  if (window.matchMedia('(min-width: 1280px)').matches) {
    size2 = 25;
  }
  const trimmedAuthor = trimString(author, size2);

  return `
    <li class="books-list__item book" data-modal-book-open>
      <div class="book__img-wrapper">
        <img class="book__img" src="${book_image}" alt="book's image" data-book="${_id}" />
        <div class="book__overlay" data-book="${_id}">
          <p class="book__quick-view" data-book="${_id}">Quick view</p>
        </div>
      </div>
      <div class="book__text" data-book="${_id}">
        <h3 class="book__title" data-book="${_id}">${trimmedTitle}</h3>
        <p class="book__author" data-book="${_id}">${trimmedAuthor}</p>
      </div>
    </li>
  `;
}
