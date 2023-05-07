import Api from './api';
import { noFilmError, onFetchError } from './msg-error';
import {createGalleryCatalog}  from './render-card';

const seachApi = new Api();

async function createWeekTrendsCatalog() {
  try {
    const response = await seachApi.weekTrends();
    createGalleryCatalog(response.results.slice(0, 10));
  } catch (error) {
    noFilmError;
  }
}

createWeekTrendsCatalog();

export { createWeekTrendsCatalog };
