
const refs = {
    galleryOfNewMovies: document.querySelector('.upcoming'),
    remindBtn: document.querySelector('.upcoming__button')
    
  }
  console.log(refs.remindBtn);

refs.remindBtn.addEventListener('click', onAddMoreMovieBtn);

function createUpcominfOfNewMovieCard(results) {
    console.log(results);
    return results.map(({original_title, release_date, vote_average, vote_count, popularity, genre_ids, overview}) => {
     return `<div class="upcoming__info">
     <img src="https://image.tmdb.org/t/p/original/${backdrop_path}" alt="${original_title}" loading="lazy" /></a>
     <ul class="upcoming__list">
     <li class ="upcoming__item"><span>${original_title}</span></li>
     <li class ="upcoming__item"><span class="upcoming__item-font">Release date </span>${release_date}</li>
     <li class ="upcoming__item"><span class="upcoming__item-font">Vote/Votes </span>${vote_average}/${vote_count}</li>
     <li class ="upcoming__item"><span class="upcoming__item-font">Popularity </span>${popularity}</li>
     <li class ="upcoming__item"><span class="upcoming__item-font">Genre </span>${genre_ids}</li>
     <li class ="upcoming__item">
     <span class="upcoming__item-uppercase">About
      </span>${overview}</li>
     </ul>
     </div>`;
   }).join('');
  };
  
