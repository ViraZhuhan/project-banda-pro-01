import { modalMovie } from './modal_movie';
import { createGallery } from './render-card';
// import { refs } from './modal_movie';

const noFilmsMessage = document.querySelector('.alert__message');
const KEY_MOVIE_LS = 'LibraryMovie';

window.addEventListener('load', onLoadPage);

function onLoadPage() {
  const data = JSON.parse(localStorage.getItem(KEY_MOVIE_LS));
  if (data.length === 0) {
    noFilmsMessage.classList.remove('hidden');
  } else if (data) {
    createGallery(data);
  }
}

const movieClicked = document.querySelector('.library-cards__list');

movieClicked.addEventListener('click', onMovieClicked);

function onMovieClicked(event) {
  let idOfCard = event.target.closest('.gallery__item ').id;
  modalMovie(idOfCard);
}
