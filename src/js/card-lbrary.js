import { modalMovie } from './modal_movie';
import { markup } from './render-card';

const noFilmsMessage = document.querySelector('.alert__message');

window.addEventListener('load', onLoadPage);

const key = 'data.title';
// localStorage.setItem(key, JSON.stringify({ title: 123 }));
// localStorage.removeItem(key);

function onLoadPage() {
  const data = localStorage.getItem(key);
  // const moviesArr = JSON.parse(data);

  if (data) {
    markup(data);
  } else {
    noFilmsMessage.classList.remove('hidden');
  }
}

const movieClicked = document.querySelector('library-cards__list');

movieClicked.addEventListener('click', onMovieClicked);

function onMovieClicked(event) {
  let idOfCard = event.target.closest('.gallery__item ').id;
  modalMovie(idOfCard);
}
