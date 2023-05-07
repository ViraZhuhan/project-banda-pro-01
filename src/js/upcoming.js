import Api  from './api';
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


export async function renderUpcomingMovieCard(res){
try{
// const release = new Date(res.result.release_date).getDate();
const genres = await newMovies.fetchGenres();
// console.log(genres);

const results = res.results.slice(0,1);

const createUpcomingCard = results.map(result => {const {backdrop_path, original_title, release_date, vote_average, vote_count, popularity, genre_ids, overview } = result
 
  // const release = new Date(release_date);
  function getFormatDate(join){
    join= join || ' '; // разделитель по дефолту
    
    const release = new Date(release_date); 
    return release.getDate() + join + release.getMonth() + join + release.getFullYear();  
  }
  console.log(getFormatDate('.'));

  const formatDate = getFormatDate('.');
  const title = res.results[0].original_title;
  const voteAverage = res.results[0].vote_average;
  const voteCount = res.results[0].vote_count;
  const idGenre = res.results[0].genre_ids;
  const imageUrl = res.results[0].backdrop_path;
  // console.log(idGenre);
  let nameGenres=[];
  for(let i=0; i < idGenre.length; i+=1 ){
    const item = genres.find(el => el.id === idGenre[i])
    // console.log(item);
    nameGenres.push(item.name);
  }
  

  // console.log(nameGenres);
return `<div class="upcoming__info"> 
<img src="https://image.tmdb.org/t/p/original/${imageUrl}" alt="${title}"  loading="lazy" class="upcoming__img" />
<div class="upcoming__info-btn">
<div class="upcoming__info-layout">
<h3 class ="upcoming__movie-title"><span class="upcoming__item-font-title">${title}</span></h3>
<div class="upcoming__list-tablet">
<ul class="upcoming__list">
<li class ="upcoming__item"><span class="upcoming__item-font-date">Release date</span><span class="upcoming__item-data">${formatDate}</span></li>
<li class ="upcoming__item"><span class="upcoming__item-font-vote">Vote/Votes </span><span class="upcoming__item-vote">${voteAverage}</span>  /  <span class="upcoming__item-votes">${voteCount}</span></li>
</ul>
<ul class="upcoming__list">
<li class ="upcoming__item"><span class="upcoming__item-font-popularity">Popularity </span><span class="upcoming__item-pop">${popularity}</span></li>
<li class ="upcoming__item"><span class="upcoming__item-font-genre">Genre </span><span class="upcoming__item-genre">${nameGenres.slice(0, 2).join(', ')}</span></li>
</ul>
</div>
<p class ="upcoming__movie-about">About</p>
<p class="upcoming__item-font-about">${overview}</p>
</div>
<button type="button" class="upcoming__button">Remind me</button>
</div>
</div>`;
});
refs.galleryOfNewMovies.insertAdjacentHTML('beforeend', createUpcomingCard);

console.log(refs.remindBtn);
console.log(refs.remindBtn.addEventListener('click', addLS));

function addLS() {
  const value = {
    title: data.title,
    popularity,
    voteAverage,
    img: imageUrl,
    voteCount,
    genres: nameGenres,
    overview,
  };
  localStorage.setItem(key, JSON.stringify(value));
  refs.remindBtn.disabled = true;
  refs.remindBtn.style.backgraundColor = "grey";
}

} catch {error => console.log(error.message)};
};



// function createUpcomingCard(results) {

//   // console.log(results);
//   return results.map(({backdrop_path, original_title, release_date, vote_average, vote_count, popularity, nameGenres, overview })=>{
//     return `<div class="upcoming__info"> 
//   <img src="https://image.tmdb.org/t/p/original/${backdrop_path}" alt="${original_title}"  loading="lazy" class="upcoming__img" />
//   <div class="upcoming__info-btn">
//   <div class="upcoming__info-layout">
//   <h3 class ="upcoming__movie-title"><span class="upcoming__item-font-title">${original_title}</span></h3>
//   <div class="upcoming__list-tablet">
//   <ul class="upcoming__list">
//   <li class ="upcoming__item"><span class="upcoming__item-font-date">Release date </span><span class="upcoming__item-data">${release_date}</span></li>
//   <li class ="upcoming__item"><span class="upcoming__item-font-vote">Vote/Votes </span><span class="upcoming__item-vote">${vote_average}</span>  /  <span class="upcoming__item-votes">${vote_count}</span></li>
//   </ul>
//   <ul class="upcoming__list">
//   <li class ="upcoming__item"><span class="upcoming__item-font-popularity">Popularity </span><span class="upcoming__item-pop">${popularity}</span></li>
//   <li class ="upcoming__item"><span class="upcoming__item-font-genre">Genre </span><span class="upcoming__item-genre">${nameGenres}</span></li>
//   </ul>
//   </div>
//   <p class ="upcoming__movie-about">About</p>
//   <p class="upcoming__item-font-about">${overview}</p>
//   </div>
//   <button type="button" class="upcoming__button">Remind me</button>
//   </div>
//   </div>`;}).join('');
// }
