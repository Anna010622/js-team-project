import BrowserSprite from '../images/icons.svg';

const headerNav = document.querySelector('nav');
const headerButton = document.querySelector('.header__container');
const mobileMenu = document.querySelector('.mobile-menu__flex');
let nameLogin = '';

if (localStorage.getItem('key')) {
  nameLogin = localStorage.getItem('key');
}

if (localStorage.getItem('key') !== null) {
  console.log(111);
  headerNav.insertAdjacentHTML(
    'beforeend',
    `<ul class="nav">
        <li class="nav__item">
          <a href="./index.html" class="nav__link">HOME</a>
        </li>
        <li class="nav__item">
          <a href="./shoppinglist.html" class="nav__link"
            >SHOPPING LIST
            <svg class="icon_shop" width="20" height="20">
              <use href=${BrowserSprite}#icon-shoppingcart></use>
            </svg>
          </a>
        </li>
      </ul>
    `
  );
  headerButton.insertAdjacentHTML(
    'beforeend',
    `<button
      type="button"
      class="js-open-modal button header__button header__button_logout"
      data-modal="buynow"
    >
      <svg class="button__icon" width="19" height="19">
        <use href=${BrowserSprite}#icon-user></use>
      </svg>
      ${nameLogin}
      <svg class="button__icon" width="23" height="26">
        <use href=${BrowserSprite}#icon-arrow-down></use>
      </svg>
    </button>`
  );
  mobileMenu.insertAdjacentHTML(
    'beforeend',
    `<button
        type="button"
        class="js-open-modal button mobile__button log-in"
        data-modal="buynow"
      >
        <svg class="button__icon mobile-button__icon" width="16" height="16">
          <use href=${BrowserSprite}#icon-user></use>
        </svg>
        ${nameLogin}
      </button>

      <ul class="mobile-nav">
        <li class="mobile-nav__item">
          <a href="./index.html" class="mobile-nav__link">HOME</a>
        </li>
        <li class="mobile-nav__item">
          <a href="./shoppinglist.html" class="mobile-nav__link"
            >SHOPPING LIST
            <svg class="icon_shop" width="13" height="16">
              <use href=${BrowserSprite}#icon-shoppingcart></use>
            </svg>
          </a>
        </li>
      </ul>
      <button
        type="button"
        class="js-open-modal button mobile__button log-out"
        data-modal="buynow"
      >
        Log out
        <svg class="button__icon log-out__icon" width="16" height="16">
          <use href=${BrowserSprite}#icon-arrow-right></use>
        </svg>
      </button>`
  );

  // headerNav.classList.add('hiden');
  // headerButton.classList.add('hiden');
} else {
  console.log(9999);
  headerButton.insertAdjacentHTML(
    'beforeend',
    `<button type="button" class="js-open-modal button header__button" data-modal="buynow">
        Sign up
          <svg class="button__icon " width="20" height="20">
            <use href=${BrowserSprite}#icon-arrow-right></use>
          </svg>
    </button>`
  );
  mobileMenu.insertAdjacentHTML(
    'beforeend',
    `<button
        type="button"
        class="js-open-modal button mobile__button"
        data-modal="buynow"
      >
        Sign up
        <svg class="button__icon" width="16" height="16">
          <use href=${BrowserSprite}#icon-arrow-right>></use>
        </svg>
      </button> `
  );

  //   // headerNav.classList.remove('hiden');
  //   // headerButton.classList.remove('hiden');
}

(function () {
  const a = document.querySelectorAll('.nav a');
  for (let i = a.length; i--; ) {
    if (
      a[i].href === window.location.pathname ||
      a[i].href === window.location.href
    )
      a[i].className += ' nav__link--current';
  }
})();

(function () {
  const a = document.querySelectorAll('.mobile-nav a');
  for (let i = a.length; i--; ) {
    if (
      a[i].href === window.location.pathname ||
      a[i].href === window.location.href
    )
      a[i].className += ' nav__link--current';
  }
})();
