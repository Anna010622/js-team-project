// const headerNav = document.querySelector('nav');
// const headerButton = document.querySelector('.header__container');

// if (localStorage.getItem('key') !== null) {
//   console.log(111);
//   headerNav.innerHTML = `
//   <ul class="nav">
//     <li class="nav__item">
//       <a href="/index.html" class="nav__link ">
//       HOME
//       </a>
//     </li>
//     <li class="nav__item">
//       <a href="/shoppinglist.html" class="nav__link">
//       SHOPPING LIST
//         <svg class="icon_shop" width="13" height="16">
//           <use href="./images/icons.svg#icon-user"></use>
//         </svg>
//       </a>
//     </li>
//   </ul>`;
//   headerButton.insertAdjacentHTML(
//     'beforeend',
//     `<button type="button" class="js-open-modal button header__button" data-modal="buynow">
//         Sign up
//           <svg class="button__icon" width="16" height="16">
//             <use href='./images/icons.svg#icon-trash''></use>
//           </svg>
//     </button>`
//   );

//   // headerNav.classList.add('hiden');
//   // headerButton.classList.add('hiden');
// } else {
//   console.log(9999);
//   headerButton.insertAdjacentHTML(
//     'beforeend',
//     `<button type="button" class="js-open-modal button header__button" data-modal="buynow">
//     USER
//       <svg svg class= "button__icon" width = "16" height = "16" >
//         <use href="./images/icons.svg#icon-trash">
//         </use> <
//       /svg >
//     </button > `
//   );

//   //   // headerNav.classList.remove('hiden');
//   //   // headerButton.classList.remove('hiden');
// }

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
