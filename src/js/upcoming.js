function getRandomNewMovie() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
function creatInfoOfNewMovie(name) {
    return name.map(({ capital, population, languages }) => {
     return `<div class="upcoming__info">
     <img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
     <ul class="upcoming__list">
     <li class ="upcoming__item"></li>
     <li class ="upcoming__item"><span class="country-info__item-bold">Release date </span></li>
     <li class ="upcoming__item"><span class="country-info__item-bold">Vote/Votes </span></li>
     <li class ="upcoming__item"><span class="country-info__item-bold">Popularity </span></li>
     <li class ="upcoming__item"><span class="country-info__item-bold">Genre </span></li>
     <li class ="upcoming__item">
     <span class="upcoming__item-uppercase">About
      </span></li>
     </ul>
     </div>`;
   }).join('');
 };
