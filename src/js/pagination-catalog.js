
  //последний с ошибкой пойска

// import Api from './api';
// import { createGallery } from './render-card';
// import { pagination } from './pagination';

// const api = new Api();

// // Установка обработчика события при смене страницы трендовых фильмов
// pagination.on('beforeMove', async function (eventData) {
//   const currentPage = eventData.page;
//   try {
//     api.setPage(currentPage);
//     const response = await api.weekTrends({ itemsPerPage: 10 });
//     console.log(response); // пагинация срабатывает
//     const films = response.results.slice(0, 10);
//     createGallery(films);
//   } catch (error) {
//     console.error('Error fetching movie data:', error);
//   }
// });

// // Обновление галереи при поиске фильмов
// async function updateGalleryBySearch(query) {
//   try {
//     api.setSearchQuery(query);
//     api.resetSearchPage();
//     const response = await api.searchMovieByQuery(query, { itemsPerPage: 10 });
//     const films = response.results.slice(0, 10);
//     createGallery(films);
//     pagination.reset(response.total_results);
//   } catch (error) {
//     console.error('Error updating gallery with search results:', error);
//   }
// }

// // Инициализация пагинации при загрузке страницы
// async function initializePagination(initializationType, query = null) {
//   try {
//     let response;
//     let totalItems;

//     if (initializationType === 'trends') {
//       response = await api.weekTrends({ itemsPerPage: 10 });
//       totalItems = response.total_results;
//     } else if (initializationType === 'search') {
//       response = await api.searchMovieByQuery(query, { itemsPerPage: 10 });
//       totalItems = response.total_results;
//       const films = response.results.slice(0, 10);
//       createGallery(films);
//     }

//     pagination.reset(totalItems);
//   } catch (error) {
//     console.error('Error initializing pagination:', error);
//   }
// }

// async function searchMovies(query) {
//   try {
//     const response = await api.searchMovieByQuery(query);
//     console.log(response); // выводит результат поиска сколько нашел
//     if (response.results === null || response.results.length === 0) {
//       noSearchResults();
//       clearGallery();
//     } else if (response.results) {
//       createGallery(response.results.slice(0, 10));
//       initializePagination('search', query); // Передаем тип и поисковой запрос в функцию инициализации пагинации
//     }
//   } catch (error) {
//     noFilmError();
//   }
// }

// // Инициализация пагинации при загрузке страницы
// initializePagination('trends');


// export { updateGalleryBySearch };




import Api from './api';
import { createGallery } from './render-card';
import { pagination } from './pagination';

const api = new Api();

// Установка обработчика события при смене страницы трендовых фильмов
pagination.on('beforeMove', async function (eventData) {
  const currentPage = eventData.page;
  try {
    api.setPage(currentPage);
    const response = await api.weekTrends({ itemsPerPage: 10 });
    const films = response.results.slice(0, 10);
    createGallery(films);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
});

// Обновление галереи при поиске фильмов
async function updateGalleryBySearch(query) {
  try {
    api.setSearchQuery(query);
    api.resetSearchPage();
    const response = await api.searchMovieByQuery(query, { itemsPerPage: 10 });
    const films = response.results.slice(0, 10);
    createGallery(films);
    pagination.reset(response.total_results);
  } catch (error) {
    console.error('Error updating gallery with search results:', error);
  }
}

// Инициализация пагинации при загрузке страницы
async function initializePagination(initializationType) {
  try {
    let response;
    let totalItems;

    if (initializationType === 'trends') {
      response = await api.weekTrends({ itemsPerPage: 10 });
      totalItems = response.total_results;
    } else if (initializationType === 'search') {
      response = await api.searchMovieByQuery(api.getSearchQuery(), {
        itemsPerPage: 10,
      });
      totalItems = response.total_results;
    }

    pagination.reset(totalItems);
  } catch (error) {
    console.error('Error initializing pagination:', error);
  }
}

// Инициализация пагинации при загрузке страницы
initializePagination('trends');

export { updateGalleryBySearch };



// все что я не понял((((( в мусорррррр 4 дня минус


// import Api from './api';
// import { noFilmError, onFetchError } from './msg-error';
// import getRefs from './components/get-refs';
// import { createGallery } from './render-card';
// import Pagination from 'tui-pagination';

// const searchApi = new Api();
// const refs = getRefs();

// let currentPage = 1;
// const itemsPerPage = 10; // Кількість елементів на сторінці
// let totalItems = 0;
// let paginationInstance;

// async function getPageData(page) {
//   try {
//     const response = await searchApi.weekTrends();
//     totalItems = response.results.length;
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const items = response.results.slice(startIndex, endIndex);
//     return {
//       items,
//       currentPage: page,
//       totalPages: Math.ceil(totalItems / itemsPerPage),
//     };
//   } catch (error) {
//     onFetchError(error);
//     throw error;
//   }
// }

// function updatePage(data) {
//   createGallery(data.items);
//   createPagination();
// }

// function createPagination() {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   if (paginationInstance) {
//     paginationInstance.destroy();
//   }

//   paginationInstance = new Pagination('.tui-pagination', {
//     totalItems: totalItems,
//     itemsPerPage: itemsPerPage,
//     visiblePages: 5,
//     page: currentPage,
//     centerAlign: true,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     template: {
//       page: '<a href="#" class="tui-page-btn" data-page="{{page}}">{{page}}</a>',
//       currentPage:
//         '<strong class="tui-page-btn tui-is-selected" data-page="{{page}}">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//         '</a>',
//     },
//   });

//   paginationInstance.on('beforeMove', async event => {
//     const page = event.page;
//     const data = await getPageData(page);
//     currentPage = page;
//     updatePage(data);
//     paginationInstance.movePageTo(page);
//   });
// }

// async function createWeekTrends() {
//   try {
//     const data = await getPageData(currentPage);
//     updatePage(data);
//   } catch (error) {
//     noFilmError();
//   }
// }

// createWeekTrends();

// export { createWeekTrends };

// import Api from './api.js';
// import { noFilmError, onFetchError } from './msg-error';
// import getRefs from './components/get-refs';
// import { createGallery } from './render-card';
// import Pagination from 'tui-pagination';
// import { createWeekTrends } from './createTrends.js';

// const paginationElement = document.querySelector('.tui-pagination');
// const searchApi = new Api();
// const refs = getRefs();

// let currentPage = 1;
// const itemsPerPage = 10; // Кількість елементів на сторінці
// let totalItems = 0;
// let totalPages = 0;
// let paginationInstance;

// //Ця функція отримує загальну кількість трендових елементів і обчислює загальну кількість сторінок на основі кількості елементів
// async function getTrendsCount() {
//   try {
//     const response = await searchApi.weekTrends();
//     totalItems = response.total_results;
//     totalPages = Math.ceil(totalItems / itemsPerPage);
//     return totalItems;
//   } catch (error) {
//     onFetchError(error);
//     throw error;
//   }
// }
// getTrendsCount().then(total => {
//   console.log(total);
// });


// //Ця функція отримує дані для певної сторінки page
// async function getPageData(page) {
//   try {
//     const response = await searchApi.weekTrends(currentPage); // Використовуємо переданий параметр
//     //     const response = await searchApi.weekTrends();
//     console.log(response);
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const items = response.results.slice(startIndex, endIndex);
//     return {
//       items,
//       currentPage: page,
//       totalPages: totalPages,
//     };
//   } catch (error) {
//     onFetchError(error);
//     throw error;
//   }
// }

// //Ця функція оновлює галерею з трендовими елементами
// function updatePage(data) {
//   createGallery(data.items);
// }
// //Ця функція створює пагінацію
// function createPagination() {
//   if (paginationInstance) {
//     paginationInstance.destroy();
//   }

//   paginationInstance = new Pagination(paginationElement, {
//     totalItems: totalItems,
//     totalItems: totalItems,
//     itemsPerPage: itemsPerPage,
//     visiblePages: 5,
//     page: currentPage,
//     centerAlign: true,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     template: {
//       page: '<a href="#" class="tui-page-btn" data-page="{{page}}">{{page}}</a>',
//       currentPage:
//         '<strong class="tui-page-btn tui-is-selected" data-page="{{page}}">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//         '</a>',
//     },
//   });

// paginationInstance.on('beforeMove', async event => {
//   const page = event.page;
//   console.log(page);
//   const data = await getPageData(page);
//   currentPage = page;
//   console.log(currentPage);
//   // оновлення значення currentPage
//   updatePage(data);
// });
// }

// //Ця функція  ініціалізує процес створення трендових елементів за тиждень.
// async function createWeekTrends() {
//   try {
//     totalPages = await getTrendsCount();
//     createPagination();
//     const data = await getPageData(currentPage);
//     updatePage(data);
//   } catch (error) {
//     noFilmError();
//   }
// }

// createWeekTrends();

// export { createWeekTrends };