// import Api from './api';

// import { initRatings } from './init-rating';
// import { noFilmError, onFetchError } from './msg-error';
// import getRefs from './get-refs';
// import { genresList } from './genre-list';

// const searchApi = new Api();
// const refs = getRefs();

// const form = document.getElementById('search-form');
// const input = document.getElementById('search-input');
// const movieList = document.getElementById('movie-list');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const searchQuery = input.value;
//   movieList.innerHTML = '';
//   try {
//     Loading.pulse();
//     const results = await searchApi.searchMovies(searchQuery);
//     Loading.remove();
//     if (results.length === 0) {
//       const message = document.createElement('p');
//       message.textContent = 'OOPS... We are very sorry! We don’t have any results due to your search.';
//       movieList.appendChild(message);
//     } else {
//       results.forEach(result => {
//         const movie = document.createElement('div');
//         movie.classList.add('movie');
//         movie.innerHTML = `
//           <h2>${result.title}</h2>
//           <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
//           <p>${result.overview}</p>
//         `;
//         movieList.appendChild(movie);
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     Loading.remove();
//     const message = document.createElement('p');
//     message.textContent = 'Oops! Something went wrong.';
//     movieList.appendChild(message);
//   }
// });

// // const form = document.getElementById('search-form');
// // const input = document.getElementById('search-input');
// // const movieList = document.getElementById('movie-list');
// // const MOVIE_URL = `https://api.themoviedb.org/3/`;
// // const API_KEY = '225e339996bc91260b33199c383c8881';

// // const searchForMovies = (apiKey, query) => {
// //   form.addEventListener('submit', (event) => {
// //     event.preventDefault();

// //     const searchQuery = input.value;

// //     // Clear the movie list
// //     movieList.innerHTML = '';

// //     // Call API to search for movies
// //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
// //       .then(response => response.json())
// //       .then(data => {
// //         if (data.total_results === 0) {
// //           // No results found
// //           const message = document.createElement('p');
// //           message.textContent = 'OOPS... We are very sorry! We don’t have any results due to your search.';
// //           movieList.appendChild(message);
// //         } else {
// //           // Results found
// //           const results = data.results;
// //           results.forEach(result => {
// //             const movie = document.createElement('div');
// //             movie.classList.add('movie');
// //             movie.innerHTML = `
// //               <h2>${result.title}</h2>
// //               <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
// //               <p>${result.overview}</p>
// //             `;
// //             movieList.appendChild(movie);
// //           });
// //         }
// //       })
// //       .catch(error => {
// //         console.error(error);
// //         const message = document.createElement('p');
// //         message.textContent = 'Oops! Something went wrong.';
// //         movieList.appendChild(message);
// //       });
// //   });
// // }
// // // Example usage:
// // searchForMovies('YOUR_API_KEY', '225e339996bc91260b33199c383c8881')
// import Api from './api';
// import { noFilmError, onFetchError } from './msg-error';
// import { genresList } from './components/genre-list';
// import { markup } from './render-card';

// const searchApi = new Api();

// // const refs = getRefs();
// const form = document.getElementById('search-form');
// const input = document.getElementById('search-input');
// const movieList = document.getElementById('movie-list');
// const btnBack = document.querySelector('.btn-back');
// const btnNext = document.querySelector('.btn-next');

// //вішаєм прослушку

// form.addEventListener('submit', onSearch);
// //потрібно додати в html шаблон картки фільму айдішку #movie-card?????
// function getMovieTemp() {
//   const movieTemp = document.querySelector('#movie-card').innerHTML.trim();
//   return movieTemp;
// }
// //відміняєм перезавантаження, отримуєм значення, передаєм запит для пошуку, викликаєм рендер
// function onSearch(e) {
//   e.preventDefault();
//   const searchQuery = input.value;
//   movieList.innerHTML = '';
//   Api.fetchMovies(searchQuery).then(renderMovies).catch(onFetchError);
// }
// //рендерим

// function renderMovies(results) {
//   let markup = '';
//   const movieList = document.getElementById('movie-list');
//   if (results.length === 0) {
//     const message = document.createElement('p');
//     message.textContent =
//       'OOPS... We are very sorry! We don’t have any results due to your search.';
//     movieList.appendChild(message);
//   } else {
//     results.forEach(result => {
//       const movie = document.createElement('div');
//       movie.classList.add('movie');
//       movie.innerHTML = `
//         <h2>${result.title}</h2>
//         <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
//         <p>${result.overview}</p>
//       `;
//       movieList.appendChild(movie);
//     });
//   }
// }
// renderMovies('');

// function onFetchError(error) {
//   console.log('error', error);
//   noFilmError();
// }

// import axios from 'axios';
// const MOVIE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '225e339996bc91260b33199c383c8881';
// const searchForm = document.getElementById('search-form');
// const moviesContainer = document.getElementById('movies-container');

// searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const query = event.target.query.value;
//   searchMovies(query);
// });

// function searchMovies(query) {
//   axios
//     .get(`${MOVIE_URL}search/movie`, {
//       params: {
//         api_key: API_KEY,
//         query: query,
//       },
//     })
//     .then(response => {
//       const results = response.data.results;
//       if (results.length === 0) {
//         moviesContainer.innerHTML = 'No movies found';
//       } else {
//         const movieElements = results.map(movie => {
//           return `<div>${movie.title}</div>`;
//         });
//         moviesContainer.innerHTML = movieElements.join('');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }
// import Pagination from './Pagination';
const axios = require('axios').default;

// const API_KEY = '225e339996bc91260b33199c383c8881';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const URL_SEARCH_MOVIE = `${BASE_URL}/search/movie`;
// const URL_GET_MOVIE = `${BASE_URL}/movie`;

// const searchForm = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');
// const movieList = document.getElementById('movie-list');
// const prevButton = document.getElementById('btn-back');
// const nextButton = document.getElementById('btn-next');

// let currentPage = 1;
// let totalPages = 1;

// async function searchMovies(query, page = 1) {
//   const response = await axios.get(URL_SEARCH_MOVIE, {
//     params: {
//       api_key: API_KEY,
//       query: query,
//       page: page,
//     },
//   });
//   const results = response.data.results;
//   totalPages = response.data.total_pages;
//   return results;
// }

// async function renderWeekMovies(movies) {
//   const movieList = document.getElementById('movie-list');

//   let markup = '';

//   if (movies.length === []) {
//     document
//       .querySelector('.cards__message')
//       .classList.remove('cards__disabled');
//   } else {
//     for (let i = 0; i < 10; i++) {
//       const movie = movies[i];
//       if (!movie || !movie.poster_path) {
//         continue;
//       }
//       const movieGenre = await getGenre(movie.id);
//       const movieYear = await getYear(movie.release_date);
//       markup += `<li class='cards__list'>
//       <img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}' alt='${movie.title}' width='395' height='574' />
//       <div class="search__render">
//         <h3>${movie.title}</h3>
//         <p>${movieGenre} <span>| ${movieYear}</span></p>
//         <p>${movie.vote_average}</p>
//       </div>
//     </li>`;
//     }
//     movieList.innerHTML = markup;
//   }
// }

// async function getGenre(movieId) {
//   const response = await axios.get(`${URL_GET_MOVIE}/${movieId}`, {
//     params: {
//       api_key: API_KEY,
//     },
//   });
//   const genres = response.data.genres
//     .slice(0, 2)
//     .map(genre => genre.name)
//     .join(', ');
//   return genres;
// }

// function getYear(data) {
//   return data ? data.slice(0, 4) : '';
// }

// async function renderMovies(query, page = 1) {
//   const movies = await searchMovies(query, page);
//   await renderWeekMovies(movies);
// }

// searchForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const query = searchInput.value;
//   renderMovies(query);
//   currentPage = 1;
// });

// prevButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     renderMovies(searchInput.value, currentPage);
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     renderMovies(searchInput.value, currentPage);
//   }
// });

// renderMovies('');

// function getWeekMovies() {
//   const prevButton = document.getElementById('btn-back');
//   const nextButton = document.getElementById('btn-next');
//   let page = 1;

//   nextButton.addEventListener('click', () => {
//     page++;
//     getMoviesByPage(page);
//   });

//   prevButton.addEventListener('click', () => {
//     if (page > 1) {
//       page--;
//       getMoviesByPage(page);
//     }
//   });

//   async function getMoviesByPage(page) {
//     const movies = await searchMovies('week', page);
//     renderWeekMovies(movies);
//   }

//   getMoviesByPage(page);
// }
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

async function renderMovies(movies) {
  let markup = '';
  for (const movie of movies) {
    if (!movie || !movie.poster_path) continue;
    markup += await renderMovie(movie);
  }
  movieList.innerHTML = markup;
}

async function handleSearchFormSubmit(e) {
  e.preventDefault();
  const query = searchInput.value;
  const movies = await searchMovies(query);
  await renderMovies(movies);
  currentPage = 1;
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
  await renderMovies(movies);
}

renderWeekMovies();
