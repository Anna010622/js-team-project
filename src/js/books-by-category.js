import { getBooksByCategory } from './get-books-by-category';
import { createBookMarkup } from './create-book-markup';
import showHideLoader from './loader';

const booksSectionEl = document.querySelector('.books-section');
const mainEl = document.querySelector('main');

mainEl.addEventListener('click', showBooksByCategory);

async function showBooksByCategory(event) {
  if (!event.target.dataset.value) {
    return;
  }
  const selectedCategory = event.target.dataset.value;
  showHideLoader();
  try {
    const response = await getBooksByCategory(selectedCategory);

    const books = response.data.map(book => createBookMarkup(book)).join(' ');

    const sectionMarkup = createSectionMarkup(selectedCategory, books);

    booksSectionEl.innerHTML = sectionMarkup;

    if (event.target.classList.contains('js-click-link')) {
      const currentLink = document.querySelector('.current-category');
      currentLink.classList.remove('current-category');

      event.target.classList.add('current-category');
    }
  } catch (error) {
    console.log(error);
  }
  showHideLoader();
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
