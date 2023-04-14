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
