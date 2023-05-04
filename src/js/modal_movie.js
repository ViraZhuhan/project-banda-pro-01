import modalTpl from './templates/modal_movie.hbs';

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  buttonClose: document.querySelector('.button__close'),
  buttonAdd: document.querySelector('.button__add'),
};

refs.buttonClose.addEventListener(
  'click',
  () => (refs.backdrop.classList = 'hidden')
);

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') refs.backdrop.classList = 'hidden';
});

refs.backdrop.addEventListener('click', event => {
  if (event.target.className === 'backdrop') refs.backdrop.classList = 'hidden';
});

// !====================
refs.buttonAdd.addEventListener('click', onClick);
function onClick() {
  console.log('click');
}
// !====================

const appendHitsTpl = e => {
  backdrop.insertAdjacentHTML('beforeend', modalTpl(e));
};
