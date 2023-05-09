import Api from './api';
// import { createGallery } from './render-card';
import { createWeekTrends } from './createTrends.js';
import { createGallery } from './render-card';
import { pagination } from './pagination';


const api = new Api();

// Установка обработчика события при смене страницы
pagination.on('beforeMove', async function (eventData) {
  const currentPage = eventData.page;
  try {
    api.setPage(currentPage);
    const response = await api.weeklyTrends({ itemsPerPage: 10 }); //Почему-то всё равно выводит 20
    const films = response.results.slice(0, 10); // Получить массив фильмов из полученных данных
    //добавил до results .slice(0, 10);
    console.log(response); //пагинация срабатывает
    createGallery(films); // Обновить галерею на новую страницу
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
});

// Инициализация пагинации при загрузке страницы
async function initializePagination() {
  try {
    const response = await api.weeklyTrends({ itemsPerPage: 10 }); //Почему-то всё равно выводит 20
    const totalItems = response.total_results;
    pagination.reset(totalItems);
  } catch (error) {
    console.error('Error initializing pagination:', error);
  }
}

initializePagination();


