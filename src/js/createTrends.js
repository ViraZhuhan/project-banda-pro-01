import Api from './api';
import { initRatings } from './init-rating';
import { noFilmError, onFetchError } from './msg-error';
import getRefs from './components/get-refs';
import {markup}  from './render-card';

const seachApi = new Api();
const refs = getRefs();

async function createWeekTrends() {
  try {
    const response = await seachApi.weekTrends();
    createGallery(response.results);
  } catch (error) {
    console.log('error');
  }
}

createWeekTrends();

// export { createWeekTrends };
