import Api from './api';


const api = new Api();
const refs = getRefs();

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const movieList = document.getElementById('movie-list');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = input.value;
  movieList.innerHTML = '';
  api.searchMovies(searchQuery)
    .then(results => {
      if (results.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'OOPS... We are very sorry! We don’t have any results due to your search.';
        movieList.appendChild(message);
      } else {
        results.forEach(result => {
          const movie = document.createElement('div');
          movie.classList.add('movie');
          movie.innerHTML = `
            <h2>${result.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
            <p>${result.overview}</p>
          `;
          movieList.appendChild(movie);
        });
      }
    })
    .catch(error => {
      console.error(error);
      const message = document.createElement('p');
      message.textContent = 'Oops! Something went wrong.';
      movieList.appendChild(message);
    });
});



// const form = document.getElementById('search-form');
// const input = document.getElementById('search-input');
// const movieList = document.getElementById('movie-list');
// const MOVIE_URL = `https://api.themoviedb.org/3/`;
// const API_KEY = '225e339996bc91260b33199c383c8881';

// const searchForMovies = (apiKey, query) => {
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const searchQuery = input.value;

//     // Clear the movie list
//     movieList.innerHTML = '';

//     // Call API to search for movies
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.total_results === 0) {
//           // No results found
//           const message = document.createElement('p');
//           message.textContent = 'OOPS... We are very sorry! We don’t have any results due to your search.';
//           movieList.appendChild(message);
//         } else {
//           // Results found
//           const results = data.results;
//           results.forEach(result => {
//             const movie = document.createElement('div');
//             movie.classList.add('movie');
//             movie.innerHTML = `
//               <h2>${result.title}</h2>
//               <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
//               <p>${result.overview}</p>
//             `;
//             movieList.appendChild(movie);
//           });
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         const message = document.createElement('p');
//         message.textContent = 'Oops! Something went wrong.';
//         movieList.appendChild(message);
//       });
//   });
// }
// // Example usage:
// searchForMovies('YOUR_API_KEY', '225e339996bc91260b33199c383c8881')
