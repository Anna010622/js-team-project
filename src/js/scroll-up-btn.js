const upBtn = document.querySelector('.up-btn');
window.addEventListener('scroll', scroll);

function scroll() {
  if (window.scrollY > 500) {
    upBtn.style.display = 'block';
  } else {
    upBtn.style.display = 'none';
  }
}

upBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
