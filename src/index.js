import { Api } from './js/api';
import createUpcominfOfNewMovieCard from './templates/upcoming.hbs'
// const a = new Api();
// a.dayTrends()
//   .then(res => console.log(res))
//   .catch(er => console.log(er.message));

const newMovies = new Api();
const refs = {
  galleryOfNewMovies: document.querySelector('.upcoming'),
  remindBtn: document.querySelector('.upcoming__button')
  
}
newMovies.upcoming()
.then(res => {
  console.log(res.results[0]);
  const markup = createUpcominfOfNewMovieCard(res.results[0]);
  console.log(markup);
  refs.galleryOfNewMovies.insertAdjacentHTML('beforeend', markup);
})
.catch(er =>console.log(er.message));



function renderUpcomingMovie(res){

try{
  const markupUpcomingMovie = createUpcominfOfNewMovieCard(res.results);
  console.log(markupUpcomingMovie);
}
catch (error) {
  console.log(error);
}
}

