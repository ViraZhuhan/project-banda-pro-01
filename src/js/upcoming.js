import Api  from './api';
import createUpcominfOfNewMovieCard from '../templates/upcoming.hbs'
const refs = {
  galleryOfNewMovies: document.querySelector('.upcoming'),
  remindBtn: document.querySelector('.upcoming__button')
  
}

const newMovies = new Api();

fetchUpcomingMovie().then(renderUpcomingMovieCard)
.catch(er =>console.log(er.message));
renderUpcomingMovieCard();

export function fetchUpcomingMovie(){ 
return newMovies.upcoming()
}; 

export function renderUpcomingMovieCard (res){
const movie = res.results[0];
console.log(movie.genre_ids);
const markup = createUpcominfOfNewMovieCard(movie);
console.log(markup);
refs.galleryOfNewMovies.insertAdjacentHTML('beforeend', markup);
const genres =  newMovies.fetchGenres().then(genre => console.log(genre));

}

// function upcomingGenre(genre,movie){
//   let nameGenres =[];
//   for(let i=0; i< movie.genre_ids.length; i+=1 ){
//     const item = genre.find(el => el.id === movie.genre_ids[i])
//     console.log(item);}
  
//     nameGenres.push(item.name)
// }



