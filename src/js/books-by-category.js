import { getBooksByCategory } from './get-books-by-category';
import { trimString } from './trim-string';

const booksSectionEl = document.querySelector('.books-section');
const mainEl = document.querySelector('main');

mainEl.addEventListener('click', showBooksByCategory);

async function showBooksByCategory(event) {
  if (!event.target.dataset.value) {
    return;
  }
  const selectedCategory = event.target.dataset.value;

  try {
    const response = await getBooksByCategory(selectedCategory);
    const books = response.data.map(book => createBookMarkup(book)).join(' ');

    const sectionMarkup = createSectionMarkup(selectedCategory, books);

    booksSectionEl.innerHTML = sectionMarkup;
  } catch (error) {
    console.log(error);
  }
}

export function createBookMarkup({ book_image, _id, title, author }) {
  let size = 30;
  if (window.matchMedia('(min-width: 768px)').matches) {
    size = 22;
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
  const trimmedAuthor = trimString(title, size2);

  return `
    <li class="books-list__item book">
      <div class="book__img-wrapper">
        <img class="book__img" src="${book_image}" alt="book's image" data-book="${_id}" />
      </div>
      <div class="book__text" data-book="${_id}>
        <h3 class="book__title" data-book="${_id}">${trimmedTitle}</h3>
        <p class="book__author" data-book="${_id}">${trimmedAuthor}</p>
      </div>
    </li>
  `;
}

function createSectionMarkup(selectedCategory, books) {
  const title = selectedCategory.split(' ');
  const titleWithAccent = title.splice(-1).join(' ');
  const titleWithOutAccent = title.join(' ');
  return `
            <div>
              <h1 class="books-section__title">${titleWithOutAccent} <span class="accent">${titleWithAccent}</span></h1>
              <ul class="category-books-list">
                ${books}
              </ul>
            </div>
      `;
}
