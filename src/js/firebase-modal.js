const closeModalBtnEl = document.querySelector("[data-modal-close]");
const modalEl = document.querySelector("[data-modal]");
const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('header');
const signupButtonEl = document.querySelector('button[data-modal="singup"]');
const modal = document.getElementById('modal');


signupButtonEl.addEventListener("click", toggleModal);
closeModalBtnEl.addEventListener("click", toggleModal);

 function toggleModal() {
    modalEl.classList.toggle("is-hidden");
    bodyEl.classList.toggle('no-scroll');
    
}
  
const signInLink = document.querySelector('a[data-modal-open="#modal_2"]');
const modal2 = document.getElementById('modal_2');

signInLink.addEventListener('click', () => {
  
  modal.classList.toggle("is-hidden");
  modal2.classList.toggle("is-hidden");
});

window.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      modalEl.classList.toggle("is-hidden");
      modal2.classList.toggle("is-hidden");
        }
})