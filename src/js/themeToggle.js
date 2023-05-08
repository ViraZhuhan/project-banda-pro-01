import getRefs from './components/get-refs';

const refs = getRefs();

// Switch theme by changing root element class based on checkbox input state
export default (() => {
  if (refs.savedTheme === 'light') refs.switcher.checked = true;
  refs.switcher.addEventListener('input', () => {
    const theme = refs.html.className;
    refs.html.className = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('color-theme', refs.html.className);
  });
})();
