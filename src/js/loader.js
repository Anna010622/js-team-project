const loader = document.querySelector('.js-page-loader');

export default function showHideLoader() {
  loader.classList.toggle('backdrop__is-hidden');
}
