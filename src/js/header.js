// Higlights active link in navigation menu / mobile menu
import getRefs from './components/get-refs';

const refs = getRefs();

export default (() => {
 
  const pathName = window.location.pathname.split('?')[0];

  refs.pageLinks.forEach(link => {
    const url = link.getAttribute('href');
    if (pathName === '/index.html' && url === '/') {
      link.classList.add('navigation__link--current');
      return;
    }
    if (url === pathName) {
      link.classList.add('navigation__link--current');
      return;
    }
    link.classList.remove('navigation__link--current');
  });
  refs.pageLinksMobile.forEach(link => {
    const url = link.getAttribute('href');
    if (pathName === '/index.html' && url === '/') {
      link.classList.add('navigation-menu__link--current');
      return;
    }
    if (url === pathName) {
      link.classList.add('navigation-menu__link--current');
      return;
    }
    link.classList.remove('navigation-menu__link--current');
  });
})();
