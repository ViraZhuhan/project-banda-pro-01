import Api from './api';
import cardsTpl from '../templates/cards.hbs';
import { noFilmError, onFetchError } from './msg-error';
import { Loading } from 'notiflix';

const gallery = document.querySelector('.gallery');

const seachApi = new Api();

async function createDayTrends() {
  try {
    const response = await seachApi.weekTrends();
    createGallery(response.results.slice(0, 10));
  } catch (error) {
    noFilmError();
  }
}

function markup(data) {
  return data.map(
    ({ poster_path, title, vote_average, release_date, genre_ids }) =>
      `
      <li class="gallery__item">
      <article>
      <img class="gallery__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" width="395" >
        <div class="details">
          <p class="details__title">${title}</p>
          <div class="wraper__details">
          <p class="movieGenres">${genresList(genre_ids)} | ${release_date}</p>
          
          <div class="rating">
            <div class="rating__body">
            <div class="rating__active" style="width: ${
              vote_average * 10
            }%;"></div>>
              <div class="rating__items">
                <input type="radio" class="rating__item" value="1" name="rating" />
                <input type="radio" class="rating__item" value="2" name="rating" />
                <input type="radio" class="rating__item" value="3" name="rating" />
                <input type="radio" class="rating__item" value="4" name="rating" />
                <input type="radio" class="rating__item" value="5" name="rating" />
              </div>
            </div>
            <div class="rating__value">${vote_average}</div>
          </div>
          </div>
        </div>
      </article>
        
      </li>
    `
  );
}

async function genresList(idGenres) {
  const genres = await saveGenresToStorage()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });

  console.log(genres);

  let namesGenres = [];

  for (let i; i < genresList.length; i += 1) {
    const item = genres.find(el => el.id === idGenres[i]);
    namesGenres.push(item.name);
  }
//   console.log(namesGenres);
  return namesGenres;
}

async function saveGenresToStorage() {
  try {
    const genres = await seachApi.fetchGenres();
    localStorage.setItem('genres', JSON.stringify(genres));
    const savedSettings = localStorage.getItem('genres');
    const parsedSettings = JSON.parse(savedSettings);
    const genresList = [];

    for (const key in parsedSettings) {
      genresList.push(parsedSettings[key]);
    }

    return genresList;
  } catch (error) {
    console.log(error);
  }
}

function createGallery(films) {
  clearGallery();
  gallery.insertAdjacentHTML('beforeend', markup(films));
}

function clearGallery() {
  gallery.innerHTML = '';
}

function findGenreById(listId) {
  const arrayGenres = storageAPI.load('genres');
  const textGenres = [];

  for (const id of listId) {
    const findedId = arrayGenres.find(genre => genre.id === id);
    textGenres.push(findedId.name);
  }
  return textGenres.join(', ');
}

createDayTrends();

export { createDayTrends };
