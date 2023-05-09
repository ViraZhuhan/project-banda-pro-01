
const axios = require('axios').default;

const API_KEY = '225e339996bc91260b33199c383c8881';
const BASE_URL = 'https://api.themoviedb.org/3';
const URL_SEARCH_MOVIE = `${BASE_URL}/search/movie`;
const URL_GET_MOVIE = `${BASE_URL}/movie`;

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const movieList = document.querySelector('#movie-list');
const prevButton = document.querySelector('#btn-back');
const nextButton = document.querySelector('#btn-next');

let currentPage = 1;
let totalPages = 1;

async function searchMovies(query, page = 1) {
  const response = await axios.get(URL_SEARCH_MOVIE, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
  const { results, total_pages } = response.data;
  totalPages = total_pages;
  return results;
}

async function renderMovie(movie) {
  const movieGenre = await getGenre(movie.id);
  const movieYear = await getYear(movie.release_date);
  const imgSrc = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return `<li class='cards__list'>
    <img src='${imgSrc}' alt='${movie.title}' width='395' height='574' />
    <div class="search__render">
      <h3>${movie.title}</h3>
      <p>${movieGenre} <span>| ${movieYear}</span></p>
      <p>${movie.vote_average}</p>
    </div>
  </li>`;
}

async function getGenre(movieId) {
  const response = await axios.get(`${URL_GET_MOVIE}/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  const genres = response.data.genres
    .slice(0, 2)
    .map(genre => genre.name)
    .join(', ');
  return genres;
}

function getYear(dateString) {
  return dateString ? dateString.slice(0, 4) : '';
}

// async function renderMovies(movies) {
//   let markup = '';
//   for (const movie of movies) {
//     if (!movie || !movie.poster_path) continue;
//     markup += await renderMovie(movie);
//   }
//   movieList.innerHTML = markup;
// }
async function renderMovies(movies) {
  let markup = '';
  if (movies.length === 0) {
    markup = "<li class='cards__error'>OOPS...<br/>We are very sorry!<br/>We don’t have any results due to your search.</li > ";
  } else {
    for (const movie of movies) {
      if (!movie || !movie.poster_path) continue;
      markup += await renderMovie(movie);
    }
  }
  movieList.innerHTML = markup;
}


async function handleSearchFormSubmit(e) {
  e.preventDefault();
  const query = searchInput.value;
  const movies = await searchMovies(query);
  await renderMovies(movies);
  // currentPage = 1;
}

function handlePrevButtonClick() {
  if (currentPage > 1) {
    currentPage--;
    renderMovies(searchInput.value, currentPage);
  }
}

function handleNextButtonClick() {
  if (currentPage < totalPages) {
    currentPage++;
    renderMovies(searchInput.value, currentPage);
  }
}

searchForm.addEventListener('submit', handleSearchFormSubmit);
prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);

async function renderWeekMovies() {
  const movies = await searchMovies('week');
  // await renderMovies(movies);
}

renderWeekMovies();
