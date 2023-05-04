import WeeklyTrendsApi from './WeeklyApi';
import GenresApi from './GenresApi';

const weeklyTrendsApi = new WeeklyTrendsApi();
const genresApi = new GenresApi();

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive;
  let ratingValue;

  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.5;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}

async function renderWeeklyTrends() {
  try {
    const data = await weeklyTrendsApi.fetchMovie();
    const movies = data.results.slice(0, 3);

    const wrapper = document.querySelector('.wrapper');
    const genres = await genresApi.fetchGenres();

    const moviesElements = movies.map(movie => {
      const { poster_path, title, vote_average, release_date, genre_ids } =
        movie;

      const voteAverage = vote_average;

      const release = new Date(release_date).getFullYear();
      const movieGenres = genres
        .filter(genre => genre_ids.includes(genre.id))
        .map(genre => genre.name);

      const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://via.placeholder.com/395x574?text=No+Image';

      return `
        <li class="movie">
          <img src="${imageUrl}" alt="${title}" width="395" haight="574">
          <div class="details">
            <h3>${title}</h3>
            <p>Release: ${release}</p>
            
            <p>genre: ${movieGenres.join(', ')}</p>
            <div class="rating">
            <div class="rating">
            <div class="rating__body">
              <div class="rating__active"></div>
              <div class="rating__items">
                <input type="radio" class="rating__item" value="1" name="rating" />
                <input type="radio" class="rating__item" value="2" name="rating" />
                <input type="radio" class="rating__item" value="3" name="rating" />
                <input type="radio" class="rating__item" value="4" name="rating" />
                <input type="radio" class="rating__item" value="5" name="rating" />
              </div>
            </div>
            <div class="rating__value">${voteAverage}</div>
          </div>
          </div>
        </li>
      `;
    });

    wrapper.innerHTML = moviesElements.join('');
  } catch (error) {
    console.error(error);
  }
}

renderWeeklyTrends();
