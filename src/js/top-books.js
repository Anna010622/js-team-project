import { getTopBooks } from './get-top-books';
import { createBookMarkup } from './create-book-markup';
import { createMessageMarkup } from './message-markup';
import showHideLoader from './loader';

const booksSectionEl = document.querySelector('.books-section');
const allCategories = document.querySelector('[data-value="all-categories"]');

const mediaValue = window.matchMedia(
  '(min-width: 768px) and (max-width: 1279.98px)'
);

getAllBooks();
mediaValue.addEventListener('change', getAllBooks);

allCategories.addEventListener('click', getAllBooks);

async function getAllBooks() {
  showHideLoader();
  try {
    const response = await getTopBooks();

    if (response.data.length === 0) {
      const sectionMarkup = createMessageMarkup(
        selectedCategory,
        'There are no books'
      );
      booksSectionEl.innerHTML = sectionMarkup;
      return;
    }

    const allTopBooks = response.data;

    const items = allTopBooks.map(item => {
      const books = item.books;
      let bookMarkup;

      bookMarkup = createBookMarkup(books[0]);

      if (mediaValue.matches) {
        const booksArray = [];
        const BOOKS_QUANTITY = 3;
        books.forEach((book, i) => {
          if (i < BOOKS_QUANTITY) {
            booksArray.push(createBookMarkup(book));
          }
        });
        bookMarkup = booksArray.join(' ');
      }
      if (window.matchMedia('(min-width: 1280px)').matches) {
        bookMarkup = books.map(book => createBookMarkup(book)).join(' ');
      }
      const booksSectionListItem = createSectionListItemMarkup(
        item,
        bookMarkup
      );

      return booksSectionListItem;
    });

    const sectionMarkup = createSectionMarkup(items.join(' '));

    booksSectionEl.innerHTML = sectionMarkup;
  } catch (error) {
    console.log(error);
  }
  showHideLoader();
}

function createSectionListItemMarkup(section, bookMarkup) {
  return `
  <li class="books-section__list-item">
    <h2 class="books-section__list-item-title">${section.list_name}</h2>
    <ul class="books-list">
      ${bookMarkup}
    </ul>
    <button type="button" class="btn-see-more" data-value="${section.list_name}">See more</button>
  </li>
`;
}

function createSectionMarkup(items) {
  return `
    <div>
      <h1 class="books-section__title">Best Sellers <span class="accent">Books</span></h1>
      <ul class="books-section__list">
        ${items}
      </ul>
    </div>
  `;
}
