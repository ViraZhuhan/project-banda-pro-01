import Api from './api.js';
import tuiPagination from 'tui-pagination';

const api = new Api();

const PAGE_SIZE = 10;
let currentPage = 1;
let totalPages = 0;

const paginationContainer = document.getElementById('pagination');
const listContainer = document.getElementById('list');

async function init() {
  const data = await api.dayTrends();
  renderList(data.results);
  totalPages = data.total_pages;
  renderPagination();
}

function renderList(items) {
  listContainer.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    listContainer.appendChild(li);
  });
}

function renderPagination() {
  const options = {
    totalItems: totalPages,
    itemsPerPage: PAGE_SIZE,
    visiblePages: 5,
    currentPage,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-btn">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}-btn">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-btn tui-has-next-page">' +
        '<span class="tui-ico-ellipses"></span>' +
        '</a>',
    },
  };

  const pagination = new tuiPagination(paginationContainer, options);

  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    loadPage(currentPage);
  });
}

async function loadPage(pageNumber) {
  const data = await api.dayTrends(pageNumber);
  renderList(data.results);
}

init();
