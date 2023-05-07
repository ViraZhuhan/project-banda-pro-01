export default (() => {
  console.log('hello');
  const mobileMenu = document.querySelector('.mobile-menu');
  const headerContainer = document.querySelector('.header-menu');
  const openMenuBtn = document.querySelector('.menu-open');
  /* const closeMenuBtn = document.querySelector('.menu-close'); */
  const body = document.getElementsByTagName('body')[0];
  const linkButton = document.querySelectorAll('.navigation-menu__link');

  const toggleMenu = () => {
    const isMenuOpen =
      headerContainer.getAttribute('aria-expanded') === 'true' || false;
    headerContainer.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.setAttribute('aria-hidden', isMenuOpen);
    headerContainer.classList.toggle('opened');
    mobileMenu.classList.toggle('is-hidden');
    body.classList.toggle('scroll-block');

    /* const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body); */
  };

  const hideOnClickOutside = e => e.target === e.currentTarget && toggleMenu();

  openMenuBtn.addEventListener('click', toggleMenu);
  /* closeMenuBtn.addEventListener('click', toggleMenu); */
  linkButton.forEach(button => button.addEventListener('click', toggleMenu));
  mobileMenu.addEventListener('click', hideOnClickOutside);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.add('is-hidden');
    headerContainer.setAttribute('aria-expanded', false);
    headerContainer.classList.remove('opened');
    body.classList.remove('scroll-block');
    /* bodyScrollLock.enableBodyScroll(document.body); */
  });
})();
