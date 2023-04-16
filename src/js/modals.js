import axios from 'axios';
import { toLocalStorage } from './local-storage-set';
import amazon1 from '../images/modal/amazon1@1x.png';
import amazon2 from '../images/modal/amazon2@2x.png';
import apple1 from '../images/modal/apple1@1x.png';
import apple2 from '../images/modal/apple2@2x.png';
import bookshop1 from '../images/modal/bookshop1@1x.png';
import bookshop2 from '../images/modal/bookshop2@2x.png';

const backdropEl = document.querySelector('[data-modal]');
const modalMainEl = document.querySelector('.modal-books-container');
const modalBookEl = document.querySelector('.modal-books-wrapper');
const closeModalBook = document.querySelector('[data-modal-close]');
const addBookBtn = document.querySelector('.modal__add-btn');
const booksSectionEl = document.querySelector('.books-section');


booksSectionEl.addEventListener('click', onBookClick);

async function onBookClick(event) {
  if (!event.target.dataset.book) {
    return;
  }

  try {
    const bookId = event.target.dataset.book;
    const response = await getBookById(bookId);
    const book = response.data;
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

function getBookById(bookId) {
  const URL = `https://books-backend.p.goit.global/books/${bookId}`;

  return axios.get(URL);
}

closeModalBook.addEventListener('click', toggleModal);
function toggleModal() {
  const {book_image, title, author, description } = book;

  const markup = `  
  <div class="book__img-wrapper"> 
    <img class="modal-book__img" src="${book_image}" alt="Book's image"/> 
      <div class="book__description"> 
        <div class="book__info"> 
          <h2 class="book__title">${title}</h2> 
          <h3 class="book__author">${author}</h3> 
          <p class="book__about">${description}</p> 
        </div> 
        <div> 
        <ul class="book-shops"> 
        <li class="book-shops__item"> 
          <a class="book-shops__link" href="${buy_links.find(link => link.name === 'Amazon')}" target="_blank" rel="noopener noreferrer" aria-label="Amazon"> 
          <img class="book-shops__img" srcset=" ${amazon1} 1x, ${amazon2} 2x "src="${amazon1}" alt="Amazon" width="62" height="19"> 
          </a> 
        </li> 
        <li class="book-shops__item"> 
          <a class="book-shops__link" href="${buy_links.find(link => link.name === 'Apple Books')}" target="_blank" rel="noopener noreferrer" aria-label="Apple Books"> 
          <img class="book-stores__img" srcset=" ${apple1} 1x, ${apple2} 2x "src="${apple1}" alt="Apple Books" width="33" height="32">
          </a> 
        </li> 
        <li class="book-stores__item"> 
          <a class="book-stores__link" href="${buy_links.find(link => link.name === 'Bookshop')}" target="_blank" rel="noopener noreferrer" aria-label="Bookshop"> 
          <img class="book-stores__img" srcset=" ${bookshop1} 1x, ${bookshop2} 2x "src="${bookshop1}" alt="Bookshops" width="38" height="36">
          </a> 
        </li> 
      </ul> 
        </div> 
      </div> 
  </div> `; 

  booksSectionEl.classList.toggle('modal-open');
  backdropEl.classList.toggle('visually-hidden');
  modalBookEl.insertAdjacentHTML('afterbegin', markup); 
  showModal();
  addBookBtn.addEventListener('click', addToShoppingList(book))
}
const underBtnText = document.createElement('p');
function addToShoppingList(book) { 
  let oneBook = { ...book }; 
  console.log(oneBook); 
  let bookArray = JSON.parse(localStorage.getItem('bookarray')) || []; 
  if (bookArray.find(book => book._id === oneBook._id)) { 
    addBookBtn.textContent = 'Remove from the shopping list'; 
    underBtnText.textContent = 
    'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'; 
    underBtnText.classList.add('modal-book__underbtn'); 
    modalWrapEl.appendChild(underBtnText);
    return; }
    addBookBtn.textContent = 'Add to shopping list'; 
    bookArray.push(oneBook); 
    toLocalStorage('bookarray', bookArray); 
isBookInShoppingList = true; 
updateModalBtn();
}

function showModal() {
  backdropEl.classList.remove('visually-hidden');
  document.addEventListener('keydown', handleCloseModal);
  closeModalBook.addEventListener('click', closeModal);
  document.addEventListener('click', handleCloseModal);
}

function closeModal() {
  document.body.style.overflow = '';
  backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', handleCloseModal);
  closeModalBook.removeEventListener('click', closeModal);
  document.removeEventListener('click', handleCloseModal);
}
function handleCloseModal(event) {
  if (event.target === backdropEl) {
    closeModal();
  }
}
