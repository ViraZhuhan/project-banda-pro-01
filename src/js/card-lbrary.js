import { modalMovie } from './modal_movie';
import { createGallery } from './render-card';

// import { refs } from './modal_movie';

const movieClicked = document.querySelector('.library-cards__list');
const noFilmsMessage = document.querySelector('.alert__message');

movieClicked.addEventListener('click', onMovieClicked);
window.addEventListener('load', onLoadPage);

function onLoadPage() {
  const KEY_MOVIE_LS = 'LibraryMovie';
  // const data = null
  //   ? undefined
  //   : JSON.parse(localStorage.getItem(KEY_MOVIE_LS));
  const data = JSON.parse(localStorage.getItem(KEY_MOVIE_LS));

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

function movieCardRemove() {
  const KEY_MOVIE_LS = 'LibraryMovie';

  let objects = JSON.parse(localStorage.getItem(KEY_MOVIE_LS));
  console.log(objects);

  let index = objects.findIndex(object => object.id === object.target.id);
  if (index !== -1) {
    objects.splice(index, 1);
    localStorage.setItem('objects', JSON.stringify(objects));
    const objectCard = document.getElementById(objectId);
    if (objectCard) {
      objectCard.remove();
    }
  }
}

// const removeBtn = document.getElementById('.button-remove');
// console.log();
// removeBtn.addEventListener('click', removeMovie);

// function removeMovie(data) {
//   const movieId = data.id;
//   let movies = JSON.parse(localStorage.getItem('movies'));
//   const index = movies.findIndex(movie => movie.id === movieId);
//   movies.splice(index, 1);
//   localStorage.setItem('movies', JSON.stringify(movies));
//   const movieCard = document.getElementById(movieId);
//   movieCard.remove();
// }
