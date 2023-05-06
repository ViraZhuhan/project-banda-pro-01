import Api from './api';
import { Loading } from 'notiflix';
import {initRatings} from './init-rating'
import { noFilmError, onFetchError} from './msg-error';

import Api from './api';
import cardsTpl from '../templates/cards.hbs';
import { noFilmError, onFetchError} from './msg-error';
import getRefs from './get-refs';



const weeklyTrendsApi = new Api();
const refs = getRefs();


const seachApi = new Api();

// function markup(data) {


//     return data.map(
//       ({ poster_path, title, vote_average, release_date, genre_ids }) =>
//       `
//       <li class="article__item">
//       <article>
//       <img class="article__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" width="395" >
//         <div class="details">
//           <p class="title__txt">${title}</p>
//           <div class="wraper__details">
//           <p class="movieGenres">${genre_ids} | ${release_date}</p>
          
//           <div class="rating">
//             <div class="rating__body">
//             <div class="rating__active" style="width: ${
//               vote_average * 10
//             }%;"></div>>
//               <div class="rating__items">
//                 <input type="radio" class="rating__item" value="1" name="rating" />
//                 <input type="radio" class="rating__item" value="2" name="rating" />
//                 <input type="radio" class="rating__item" value="3" name="rating" />
//                 <input type="radio" class="rating__item" value="4" name="rating" />
//                 <input type="radio" class="rating__item" value="5" name="rating" />
//               </div>
//             </div>
//             <div class="rating__value">${vote_average}</div>
//           </div>
//           </div>
//         </div>
//       </article>
        
//       </li>
//     `
//     );
//   }


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


async function genresList(idGenres) {
    const genresList = await saveGenresToStorage();
    
      let namesGenres = [];
      for (let i; i < genresList.length; i += 1) {
        const item = genres.find(el => el.id === idGenres[i]);
        namesGenres.push(item.name);
      }
      console.log(namesGenres);
      return namesGenres;
    }
    
    
     async function saveGenresToStorage() {
      try {
        const genres = await seachApi.fetchGenres();
        localStorage.setItem('genres', JSON.stringify(genres));
      const savedSettings = localStorage.getItem('genres');
      const parsedSettings = JSON.parse(savedSettings);
      const genresList = []
    
      for (const key in parsedSettings) {
        genresList.push(parsedSettings[key])
      }
    
      console.log(genresList);
     
      } catch (error) {
        console.log(error)
      }
    };




createWeekTrends();

export {createWeekTrends};
