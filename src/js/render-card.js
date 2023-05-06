import Api from './api';
import cardsTpl from '../templates/cards.hbs';
import { noFilmError, onFetchError } from './msg-error';
import { Loading } from 'notiflix';
import {initRatings} from './init-rating'

const weeklyTrendsApi = new Api();
const refs = getRefs();


import Api from './api';
import cardsTpl from '../templates/cards.hbs';
import { noFilmError, onFetchError} from './msg-error';
import { Loading } from 'notiflix';



const seachApi = new Api();

async function createDayTrends() {
  try {
    const response = await seachApi.weekTrends();
    createGallery(response.results.slice(0, 10));
  } catch (error) {
    console.log(error)
  }
}


function markup(data) {
  
    return data.map(
      ({ poster_path, title, vote_average, release_date, genre_ids }) =>
      `
      <li class="article__item">
      <article>
      <img class="article__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" width="395" >
        <div class="details">
          <p class="title__txt">${title}</p>
          <div class="wraper__details">
          <p class="movieGenres">${genre_ids} | ${release_date}</p>
          
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

import Api from './api';
import cardsTpl from '../templates/cards.hbs';
import { noFilmError, onFetchError} from './msg-error';
import getRefs from './get-refs';



async function createWeekTrends() {
  try {
    const response = await seachApi.weekTrends();
   
    createGallery(response.results);
  } catch (error) {
    console.log(error)
  }
}

function createGallery(films) {
  clearGallery();
  refs.gallery.insertAdjacentHTML('beforeend', cardsTpl(films));
  initRatings();
}

function clearGallery() {
    refs.gallery.innerHTML = '';
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


createWeekTrends();

export {createWeekTrends};
