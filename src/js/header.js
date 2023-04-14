(function () {
  var a = document.querySelectorAll('.nav a');
  for (var i = a.length; i--; ) {
    if (
      a[i].href === window.location.pathname ||
      a[i].href === window.location.href
    )
      a[i].className += ' nav__link--current';
  }
})();
