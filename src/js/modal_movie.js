import Api from './api';
import modalTpl from '../templates/modal_movie.hbs';

const api = new Api();

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  closeModalBtn: document.querySelector('.button__close'),
  buttonAdd: document.querySelector('.button__add'),
  openModalBtn: document.querySelector('[data-modal-open]'),
};

const toggleModal = () => {
  refs.backdrop.classList.toggle('hidden');
};

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') refs.backdrop.classList.add('hidden');
});

refs.backdrop.addEventListener('click', event => {
  if (event.target.className === 'backdrop') toggleModal();
});
refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// !====================
// refs.buttonAdd.addEventListener('click', onClick);
// function onClick() {
//   console.log('click');
// }
// !====================

modalMovie();

async function modalMovie() {
  try {
    const data = await api.dayTrends();
    const movies = await data.results;
    console.log(movies);

    appendMoviesTpl(data.results);
  } catch (error) {
    console.error(error);
  }
}
const appendMoviesTpl = e => {
  refs.backdrop.innerHTML = modalTpl(e);
};
