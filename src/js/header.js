// Higlights active link in navigation menu / mobile menu
export default (() => {
  const pageLinks = document.querySelectorAll('.navigation__link');
  const pageLinksMobile = document.querySelectorAll('.navigation-menu__link');
  const pathName = window.location.pathname.split('?')[0];
  const homeHrefs = ['/index.html', '/'];

  pageLinks.forEach(link => {
    const url = link.getAttribute('href');
    if (homeHrefs.includes(pathName) && homeHrefs.includes(url)) {
      link.classList.add('navigation__link--current');
      return;
    }
    if (url === pathName) {
      link.classList.add('navigation__link--current');
      return;
    }
    link.classList.remove('navigation__link--current');
  });
  pageLinksMobile.forEach(link => {
    const url = link.getAttribute('href');
    if (homeHrefs.includes(pathName) && homeHrefs.includes(url)) {
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
