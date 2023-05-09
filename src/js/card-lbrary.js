import { modalMovie } from './modal_movie';
import { createGallery } from './render-card';

// import { refs } from './modal_movie';
const KEY_MOVIE_LS = 'LibraryMovie';

const movieClicked = document.querySelector('.library-cards__list');
const noFilmsMessage = document.querySelector('.alert__message');

movieClicked.addEventListener('click', onMovieClicked);
window.addEventListener('load', onLoadPage);

function onLoadPage() {
  const data = null
    ? undefined
    : JSON.parse(localStorage.getItem(KEY_MOVIE_LS));
  if (data === null || data.length === 0) {
    noFilmsMessage.classList.remove('hidden');
  } else if (data) {
    createGallery(data);
  }
}

function onMovieClicked(event) {
  let idOfCard = event.target.closest('.gallery__item ').id;
  modalMovie(idOfCard);
}
