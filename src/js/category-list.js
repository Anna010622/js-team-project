import { getCategoryList } from './get-category-list';

const categoriesList = document.querySelector('.categories__list');

async function showCategories() {
  try {
    const response = await getCategoryList();
    const categories = response.data;
    const markup = categories
      .map(category => createCategoryItemMarkup(category.list_name))
      .join(' ');

    categoriesList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}
showCategories();

function createCategoryItemMarkup(category) {
  return `
    <li class="categories__item">
      <a class="categories__link" data-value="${category}">
        ${category}
       </a>
    </li>
  `;
}
