import { all } from 'axios';

const backdropFirebase = document.querySelector('.backdrop-firebase');
const logoutButtonEl = document.querySelector('button[data-modal="logout"]');
const logoutButtonMobileEl = document.querySelector(
  'button[data-modal="logout-modal"]'
);
const submitModal = document.querySelector('.modal-form-button');

const signupButtonEl = document.querySelector('button[data-modal="signup"]');
const signupButtonModalEl = document.querySelector(
  'button[data-modal="signup-modal"]'
);

//*** */
const closeModalBtnEl = document.querySelector('[data-modal="close"]');
const modalEl = document.querySelector('[name="modal-form"]');

const bodyEl = document.querySelector('body');
// const headerEl = document.querySelector('header');
const modal = document.getElementById('modal');

modalEl.addEventListener('submit', localSet);
let nameUser = '';
submitModal.addEventListener('submit', localSet);

function localSet(event) {
  event.preventDefault();
  nameUser = modalEl.elements.user_name.value;
  localStorage.setItem('Name', `${nameUser}`);
  location.reload(all);
}
//
backdropFirebase.addEventListener('click', backdropClose);

if (signupButtonEl) {
  signupButtonEl.addEventListener('click', toggleModalOpen);
  signupButtonModalEl.addEventListener('click', toggleModalOpen);

  function toggleModalOpen() {
    closeModalBtnEl.addEventListener('click', toggleModalClose);

    backdropFirebase.classList.toggle('is-hidden');
    bodyEl.classList.toggle('no-scroll');
    window.addEventListener('keydown', escCloses);
  }

  function backdropClose() {
    backdropFirebase.classList.toggle('is-hidden');
    bodyEl.classList.toggle('no-scroll');
    window.removeEventListener('keydown', escCloses);
    closeModalBtnEl.removeEventListener('click', toggleModalClose);
  }
  function toggleModalClose() {
    backdropFirebase.classList.toggle('is-hidden');
    bodyEl.classList.toggle('no-scroll');
    window.removeEventListener('keydown', escCloses);

    closeModalBtnEl.removeEventListener('click', toggleModalClose);
  }

  // window.addEventListener('keydown', escCloses);
  function escCloses(event) {
    if (event.code === 'Escape') {
      backdropFirebase.classList.toggle('is-hidden');
      bodyEl.classList.toggle('no-scroll');
      window.removeEventListener('keydown', escCloses);
      backdropFirebase.removeEventListener('click', backdropClose);
      closeModalBtnEl.removeEventListener('click', toggleModalClose);
    }
  }
}

if (logoutButtonEl) {
  logoutButtonEl.addEventListener('click', localRemove);
  logoutButtonMobileEl.addEventListener('click', localRemove);
  function localRemove() {
    localStorage.removeItem('Name');

    window.location = './index.html';
    window.removeEventListener('keydown', escCloses);
  }
  return;
}
