import Api from './api';
import cardsTpl from '../templates/cards.hbs';

const gallery = document.querySelector('.gallery');

const seachApi = new Api();

async function createDayTrends() {
  try {
    const response = await seachApi.weekTrends();
    console.log(response.results);
    createGallery(response.results);
  } catch (error) {
    console.log(error);
  }
}

function createGallery(films) {
  clearGallery();
  gallery.insertAdjacentHTML('beforeend', cardsTpl(films));
}

function clearGallery() {
  gallery.innerHTML = '';
}

createDayTrends();

export { createDayTrends };
