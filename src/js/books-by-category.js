import { getBooksByCategory } from './get-books-by-category';
import { createBookMarkup } from './create-book-markup';
import { createMessageMarkup } from './message-markup';
import showHideLoader from './loader';

const booksSectionEl = document.querySelector('.books-section');
const mainEl = document.querySelector('main');

mainEl.addEventListener('click', showBooksByCategory);

async function showBooksByCategory(event) {
  if (!event.target.dataset.value) {
    return;
  }
  const selectedCategory = event.target.dataset.value;
  addClassCurrentCategory(selectedCategory);

  if (selectedCategory === 'all-categories') {
    return;
  }

  showHideLoader();

  try {
    const response = await getBooksByCategory(selectedCategory);

    if (response.data.length === 0) {
      const sectionMarkup = createMessageMarkup(
        selectedCategory,
        'There are no books'
      );
      booksSectionEl.innerHTML = sectionMarkup;
      return;
    }

    const books = response.data.map(book => createBookMarkup(book)).join(' ');

    const sectionMarkup = createSectionMarkup(selectedCategory, books);

    booksSectionEl.innerHTML = sectionMarkup;
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

function addClassCurrentCategory(selectedCategory) {
  const allLinks = document.querySelectorAll('.js-click-link');
  allLinks.forEach(link => {
    if (link.classList.contains('current-category')) {
      link.classList.remove('current-category');
    }
    if (link.dataset.value === selectedCategory) {
      link.classList.add('current-category');
    }
  });
}
