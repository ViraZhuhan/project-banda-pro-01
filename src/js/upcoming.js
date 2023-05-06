import Api  from './api';
const refs = {
  galleryOfNewMovies: document.querySelector('.upcoming'),
  remindBtn: document.querySelector('.upcoming__button')
  
}
const newMovies = new Api();

fetchUpcomingMovie().then(renderUpcomingMovie)
.catch(er =>console.log(er.message));
renderUpcomingMovie();

fetchUpcomingGenre().then(renderUpcomingGenre).catch(er => console.log(er.message));

export function fetchUpcomingMovie(){ 
return newMovies.upcoming()
}; 

function renderUpcomingMovie(res){
  console.log(res);
const markup = creatUpcomingCard(res.results.slice(0,1))
console.log(markup);
refs.galleryOfNewMovies.insertAdjacentHTML('beforeend', markup);
}


function creatUpcomingCard(results) {
  console.log(results);
  return results.map(({backdrop_path, original_title, release_date, vote_average, vote_count, popularity, genre_ids, overview })=>{
    return `<div class="upcoming__info"> 
  <img src="https://image.tmdb.org/t/p/original/${backdrop_path}" alt="${original_title}"  loading="lazy" class="upcoming__img" />
  <div class="upcoming__info-btn">
  <div class="upcoming__info-layout">
  <h3 class ="upcoming__movie-title"><span class="upcoming__item-font-title">${original_title}</span></h3>
  <div class="upcoming__list-tablet">
  <ul class="upcoming__list">
  <li class ="upcoming__item"><span class="upcoming__item-font-date">Release date </span><span class="upcoming__item-data">${release_date}</span></li>
  <li class ="upcoming__item"><span class="upcoming__item-font-vote">Vote/Votes </span><span class="upcoming__item-vote">${vote_average}</span>  /  <span class="upcoming__item-votes">${vote_count}</span></li>
  </ul>
  <ul class="upcoming__list">
  <li class ="upcoming__item"><span class="upcoming__item-font-popularity">Popularity </span><span class="upcoming__item-pop">${popularity}</span></li>
  <li class ="upcoming__item"><span class="upcoming__item-font-genre">Genre </span><span class="upcoming__item-genre">${genre_ids}</span></li>
  </ul>
  </div>
  <p class ="upcoming__movie-about">About</p>
  <p class="upcoming__item-font-about">${overview}</p>
  </div>
  <button type="button" class="upcoming__button">Remind me</button>
  </div>
  </div>`;}).join('');
}


// export function renderUpcomingMovieCard(res){
//   console.log(res);
// const movie = res.results[1];
// const markup = createUpcominfOfNewMovieCard(movie);
// console.log(markup);
// refs.galleryOfNewMovies.insertAdjacentHTML('beforeend', markup);
// const genres =  newMovies.fetchGenres().then(genre => console.log(genre));
// }

// function upcomingGenre(genre,movie){
//   let nameGenres =[];
//   for(let i=0; i< movie.genre_ids.length; i+=1 ){
//     const item = genre.find(el => el.id === movie.genre_ids[i])
//     console.log(item);}
  
//     nameGenres.push(item.name)
// }

//  let upcomingMovieId =[];
//  for (let i=0; i < res.results.length; i +=1) {
//   const movie = res.results[i]
//   console.log(movie);
//   upcomingMovieId.push(movie.genre_ids)
//  }
//  console.log(upcomingMovieId);

// function fetchUpcomingGenre(){
//   return newMovies.fetchGenres()
// }

// function renderUpcomingGenre(genres){
//   console.log(genres);
//   return genres;
// }