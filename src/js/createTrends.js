import Api from './api';
import { noFilmError, onFetchError } from './msg-error';
import { createGallery } from './render-card';
import getRefs from './components/get-refs';

const refs = getRefs();

const seachApi = new Api();

async function createWeekTrendsCatalog() {
  try {
    const response = await seachApi.weekTrends();
    if (refs.gallery.classList.contains('gallery-catalog')) {
      createGallery(response.results.slice(0, 10));
    } else {
      createGallery(response.results.slice(0, 3));
    }
  } catch (error) {
    noFilmError;
  }
}

createWeekTrendsCatalog();

export { createWeekTrendsCatalog };
