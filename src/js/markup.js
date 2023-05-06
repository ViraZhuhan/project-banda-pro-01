import Api from './api';
import cardsTpl from '../templates/cards.hbs';
import { noFilmError, onFetchError} from './msg-error';

const gallery = document.querySelector('.gallery');

const seachApi = new Api();

async function createDayTrends() {
  try {
    const response = await seachApi.weekTrends();
    console.log(response.results)
    createGallery(response.results);
  } catch (error) {
    noFilmError();
  }
}

function createGallery(films) {
  clearGallery();
  refs.gallery.insertAdjacentHTML('beforeend', cardsTpl(films));
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}


function findGenreById(listId) {
  const arrayGenres = storageAPI.load('genres');
  const textGenres = [];

  for (const id of listId) {
    const findedId = arrayGenres.find(genre => genre.id === id);
    textGenres.push(findedId.name);
  }
  return textGenres.join(', ');
}


createDayTrends();

export { createDayTrends };
