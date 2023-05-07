// Higlights active link in navigation menu / mobile menu
export default (() => {
  const pageLinks = document.querySelectorAll('.navigation__link');
  const pageLinksMobile = document.querySelectorAll('.navigation-menu__link');
  const currentPath = window.location.href;
  pageLinks.forEach(link => {
    if (link.href === currentPath) {
      link.classList.add('navigation__link--current');
      return;
    }
    link.classList.remove('navigation__link--current');
  });
  pageLinksMobile.forEach(link => {
    if (link.href === currentPath) {
      link.classList.add('navigation-menu__link--current');
      return;
    }
    link.classList.remove('navigation-menu__link--current');
  });
})();
