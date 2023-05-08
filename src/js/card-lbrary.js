import { modalMovie } from './modal_movie';
import { createGallery } from './render-card';
// import { refs } from './modal_movie';

const noFilmsMessage = document.querySelector('.alert__message');

window.addEventListener('load', onLoadPage);

// const KEY = 'LibraryMovie';
// localStorage.setItem(key, JSON.stringify({ title: 123 }));
// localStorage.removeItem(key);

function onLoadPage() {
  const data = localStorage.getItem('LibraryMovie');
  const moviesArr = JSON.parse(data);

  if (localStorage.getItem('LibraryMovie')) {
    console.log(localStorage.getItem('LibraryMovie'));
    console.log(moviesArr);
    createGallery(moviesArr);
  } else {
    noFilmsMessage.classList.remove('hidden');
  }
}

const movieClicked = document.querySelector('.library-cards__list');

movieClicked.addEventListener('click', onMovieClicked);

function onMovieClicked(event) {
  let idOfCard = event.target.closest('.gallery__item ').id;
  modalMovie(idOfCard);
}
