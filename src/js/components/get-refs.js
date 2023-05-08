export default function getRefs() {
  return {
    // theme-toggle
    html: document.documentElement,
    savedTheme: localStorage.getItem('color-theme'),
    switcher: document.querySelector('.switch input[type="checkbox"]'),

    // render-cards
    rating: document.querySelectorAll('.rating'),
    gallery: document.querySelector('.gallery'),

    // header
    pageLinks: document.querySelectorAll('.navigation__link'),
    pageLinksMobile: document.querySelectorAll('.navigation-menu__link'),

    // mobil-menu
    mobileMenu: document.querySelector('.mobile-menu'),
    headerContainer: document.querySelector('.header-menu'),
    openMenuBtn: document.querySelector('.menu-open'),
    body: document.getElementsByTagName('body')[0],
    linkButton: document.querySelectorAll('.navigation-menu__link'),
    backdrop: document.querySelector('.backdrop'),

    // modal-team
    openModal: document.querySelector('.open-modal-team'),
    closeModal: document.querySelector('.close-modal-team'),
    teamBackdrop: document.querySelector('.backdrop-modal'),
    teamModal: document.getElementsByClassName('team__modal'),

    // backdrop
    body: document.querySelector('body'),
    closeModalBtn: document.querySelector('.modal__close-btn'),
    modal: document.querySelector('.modal'),
    backdrop: document.querySelector('.backdrop'),
    footerLink: document.querySelector('.team__modal-open'),
    footerBackdrop: document.querySelector('[data-action="deleted-class"]'),
    modalCloseBtn: document.querySelector('.footer-modal__close-btn'),
    watchedBtn: document.querySelector('button[name=watched]'),

    // modal-emty
    modalEmptyEl: document.querySelector('.modal-empty__backdrop'),
    closeModalEmptyEl: document.querySelector('.modal-empty__close'),

    // scroll-up
    // Get the button element
    scrollUpBtn: document.getElementById('scroll-up-btn'),
  };
}
