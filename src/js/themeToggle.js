// Switch theme by changing root element class based on checkbox input state
export default (() => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('color-theme');
  const switcher = document.querySelector('.switch input[type="checkbox"]');
  if (savedTheme === 'light') switcher.checked = true;
  switcher.addEventListener('input', () => {
    const theme = html.className;
    html.className = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('color-theme', html.className);
  });
})();
