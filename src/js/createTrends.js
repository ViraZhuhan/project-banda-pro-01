import Api from './api';
import { noFilmError, onFetchError } from './msg-error';
import getRefs from './components/get-refs';
import {createGallery}  from './render-card';

const seachApi = new Api();
const refs = getRefs();

async function createWeekTrends() {
  try {
    const response = await seachApi.weekTrends();
    createGallery(response.results.slice(0, 10));
  } catch (error) {
    noFilmError;
  }
}

createWeekTrends();

export { createWeekTrends };
