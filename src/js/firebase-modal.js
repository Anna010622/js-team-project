import { all } from 'axios';

const backdropFirebase = document.querySelector('.backdrop-firebase');
const logoutButtonEl = document.querySelector('button[data-modal="logout"]');
const logoutButtonMobileEl = document.querySelector(
  'button[data-modal="logout-modal"]'
);
const submitModal = document.querySelector(
  '.backdrop-firebase .modal-form-button'
);

const signupButtonEl = document.querySelector('button[data-modal="signup"]');
const signupButtonModalEl = document.querySelector(
  'button[data-modal="signup-modal"]'
);

//*** */
const closeModalBtnEl = document.querySelector('[data-modal="close"]');
const modalEl = document.querySelector('[data-modal]');
const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('header');
const modal = document.getElementById('modal');

let nameUser = '';
submitModal.addEventListener('click', localSet);
function localSet() {
  nameUser = document.querySelector('[id="user_name"]').value;
  localStorage.setItem('Name', `${nameUser}`);
  location.reload(all);
}

if (signupButtonEl) {
  signupButtonEl.addEventListener('click', toggleModal);
  signupButtonModalEl.addEventListener('click', toggleModal);
  closeModalBtnEl.addEventListener('click', toggleModal);
  function toggleModal() {
    backdropFirebase.classList.toggle('is-hidden');
    bodyEl.classList.toggle('no-scroll');
  }
  return;
}

if (logoutButtonEl) {
  logoutButtonEl.addEventListener('click', localRemove);
  logoutButtonMobileEl.addEventListener('click', localRemove);
  function localRemove() {
    localStorage.removeItem('Name');
    location.reload(all);
  }
  return;
}
// name = 'user_name';

// const signInLink = document.querySelector('a[data-modal-open]');

// const modal2 = document.getElementById('modal_2');

// signInLink.addEventListener('click', () => {
//   modal.classList.toggle('is-hidden');
//   modal2.classList.toggle('is-hidden');
// });

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalEl.classList.toggle('is-hidden');
    modal2.classList.toggle('is-hidden');
  }
});
