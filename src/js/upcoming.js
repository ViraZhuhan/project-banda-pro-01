import { Api } from '../js/api';
import createUpcominfOfNewMovieCard from '../templates/upcoming.hbs'
const refs = {
  galleryOfNewMovies: document.querySelector('.upcoming'),
  remindBtn: document.querySelector('.upcoming__button')
  
}
const newMovies = new Api();


export function fetchUpcomingMovie(){
newMovies.upcoming()
.then(renderUpcomingMovieCard)
.catch(er =>console.log(er.message));
}; 

export function renderUpcomingMovieCard (res){
const markup = createUpcominfOfNewMovieCard(res.results[0]);
console.log(markup);
refs.galleryOfNewMovies.insertAdjacentHTML('beforeend', markup);
}


