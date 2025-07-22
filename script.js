document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  const root = document.documentElement;


  if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
    toggleBtn.innerText = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      toggleBtn.innerText = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      toggleBtn.innerText = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  });
});

