const toggleArray = document.querySelectorAll('.switch__input');
const currentTheme = localStorage.getItem('theme');

for (toggleEl of toggleArray) {
  if (currentTheme === 'dark-theme') {
    toggleEl.checked = true;
    document.body.classList.add('dark');
  }
  
  function switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }
  
  toggleEl.addEventListener('change', switchTheme);
}
