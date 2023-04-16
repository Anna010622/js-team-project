const openModalBtnEl = document.querySelector("[data-modal-open]");
const closeModalBtnEl = document.querySelector("[data-modal-close]");
const modalEl = document.querySelector("[data-modal]");
const bodyEl = document.querySelector('body');


openModalBtnEl.addEventListener("click", toggleModal);
closeModalBtnEl.addEventListener("click", toggleModal);

 function toggleModal() {
    modalEl.classList.toggle("is-hidden");
    bodyEl.classList.toggle('no-scroll');
    
}
  
window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
           modalEl.classList.toggle("is-hidden")
        }
     
    })
  