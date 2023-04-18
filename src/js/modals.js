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
    const markup = toggleModal(book);
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

function toggleModal({book_image, title, author, description, buy_links}) {
    const urls = buy_links
    .filter(buyLink => ['Amazon', 'Apple Books', 'Bookshop'].includes(buyLink.name))
    .map(buyLink => buyLink.url);
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
                <a class="book-shops__link" href="${urls[0]}" target="_blank" rel="noopener noreferrer" aria-label="Amazon"> 
                <img class="book-shops__img" srcset=" ${amazon1} 1x, ${amazon2} 2x "src="${amazon1}" alt="Amazon" width="62" height="19"> 
                </a> 
              </li> 
              <li class="book-shops__item"> 
                <a class="book-shops__link" href="${urls[1]}" target="_blank" rel="noopener noreferrer" aria-label="Apple Books"> 
                <img class="book-stores__img" srcset=" ${apple1} 1x, ${apple2} 2x "src="${apple1}" alt="Apple Books" width="33" height="32">
                </a> 
              </li> 
              <li class="book-stores__item"> 
                <a class="book-stores__link" href="${urls[2]}" target="_blank" rel="noopener noreferrer" aria-label="Bookshop"> 
                <img class="book-stores__img" srcset=" ${bookshop1} 1x, ${bookshop2} 2x "src="${bookshop1}" alt="Bookshops" width="38" height="36">
                </a> 
              </li> 
            </ul>  
          </div> 
        </div> 
    </div> `; 
  modalBookEl.innerHTML = '';
  modalBookEl.insertAdjacentHTML('afterbegin', markup); 
  backdropEl.classList.toggle('is-hidden');
  booksSectionEl.classList.toggle('modal-open');
  showModal();
  addBookBtn.addEventListener('click', addToShoppingList);
}

const underBtnNote = document.querySelector('p');

// function addToShoppingList(book) { 
// let oneBook = { ...book };
// let bookArray = JSON.parse(localStorage.getItem('bookarray')) || []; 

// if (bookArray.find(book => book._id === oneBook._id)) { 
//   addBookBtn.textContent = 'Remove from the shopping list'; 
//   underBtnNote.textContent = 'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'; 
//   underBtnNote.classList.add('modal-book__underbtn'); 
//   modalMainEl.appendChild(underBtnNote); 
//   return; 
// } 
//   addBookBtn.textContent = 'Add to shopping list'; 
//   bookArray.push(oneBook); 
//   toLocalStorage('bookarray', bookArray); 
// isBookInList = true;
// // updateModalBtn();
// }

function addToShoppingList(book) { 
let oneBook = { ...book };
let bookArray = JSON.parse(localStorage.getItem('bookarray')) || []; 

if (bookArray.find(book => book._id === oneBook._id)) { 
  addBookBtn.classList.add('active');
  addBookBtn.textContent = 'Remove from the shopping list'; 
  underBtnNote.textContent = 'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'; 
  underBtnNote.classList.add('modal-book__underbtn'); 
  modalMainEl.appendChild(underBtnNote); 
  return; 
} 

  addBookBtn.textContent = 'Add to shopping list'; 
  bookArray.push(oneBook); 
  toLocalStorage('bookarray', bookArray); 
  
if (addBookBtn.classList.contains('active')) {
  addBookBtn.classList.remove('active');
}
// isBookInList = true;
// updateModalBtn();
}






function showModal() {
  backdropEl.classList.remove('is-hidden');
  document.addEventListener('keydown', handleCloseModal);
  closeModalBook.addEventListener('click', closeModal);
  document.addEventListener('click', handleCloseModal);
}

function closeModal() {
  document.body.style.overflow = 'hidden';
  backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', handleCloseModal);
  closeModalBook.removeEventListener('click', closeModal);
  document.removeEventListener('click', handleCloseModal);
}
function handleCloseModal(event) {
  if (event.target === backdropEl) {
    closeModal();
  }
  const Esc_key = 'Escape';
  if (event.code === Esc_key) {
    closeModal();
  }
}
