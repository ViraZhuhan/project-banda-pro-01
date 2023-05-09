import Api from './api';
import { noFilmError, onFetchError } from './msg-error';
import { createGallery } from './render-card';
import getRefs from './components/get-refs';
// import onOpenModalEmpty from './modal-empty';
import { updateGalleryBySearch } from './pagination-catalog'; 

const refs = getRefs();

const searchApi = new Api();

async function createWeekTrendsCatalog() {
  try {
    const response = await searchApi.weekTrends();
    if (response.results === null || response.results.length === 0) {
      // onOpenModalEmpty();
    } else if (response.results) {
      if (refs.gallery.classList.contains('gallery-catalog')) {
        createGallery(response.results.slice(0, 10));
      } else {
        createGallery(response.results.slice(0, 3));
      }
    }
  } catch (error) {
    noFilmError;
  }
}

createWeekTrendsCatalog();

// export { createWeekTrendsCatalog };
export { createWeekTrendsCatalog, updateGalleryBySearch };