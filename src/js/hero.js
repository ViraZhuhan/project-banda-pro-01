import Api from './api';
// // import getRefs from './get-refs';
// // import { noFilmError, onFetchError } from './msg-error';
import { onOpenHeroModal, getMovieById } from './hero-modal';


// import { initRatings } from './init-rating';

const refs = {
  heroRef: document.querySelector('.hero'),
  heroBtnRef: document.querySelector('.hero__button'),


};

import subDeskBlack from '../images/hero-black-desk.png';
import subTabBlack from '../images/hero-black-tab.png';
import subDeskWhite from '../images/hero-white-desk.png';
import subTabWhite from '../images/hero-white-tab.png';
import homePageBg from '../images/hero-home-desk.jpg';

const pageHeroApi = new Api();



  
getDayMovieTrend();
  
export { getDayMovieTrend, renderHeroPageMarkup };


// const refs = {
//   container: document.querySelector('.hero-decription'),
//   hero: document.querySelector('.hero'),
// };

let subtractHeroDesk;
let subtractHeroTab;

document.addEventListener('DOMContentLoaded', handleLoading);


async function getDayMovieTrend() {
  try {
    const response = await pageHeroApi.dayTrends();

    const random = response[Math.floor(Math.random(results.length) * 20)];

    renderHeroPageMarkup(response.results[random]);
    getMovieById(response.results[random].id);

  } catch (err) {
    renderDefaultMarkup();
  }
}

function handleLoading() {
  if (document.body.classList.contains('light')) {
    subtractHeroDesk = subDeskWhite;
    subtractHeroTab = subTabWhite;
  } else {
    subtractHeroDesk = subDeskBlack;
    subtractHeroTab = subTabBlack;
  }
}

function renderDefaultMarkup() {
  refs.heroRef.innerHTML = `<div class="hero__wrapper container ">
    <h1 class="hero__title">Let’s Make Your Own Cinema</h1>
  <p class="hero__text paragraphs">Is a guide to creating a personalized movie theater experience.
   You'll need a projector, screen, and speakers.<span class="paragraph__hidden">Decorate your space,
   choose your films, and stock up on snacks for the full experience.</span></p>
   <a href="/src/catalog.html" class="hero__btn buttuns">Get Started</a>
   </div>`;

  changeHeroBg(homePageBg);
}

function renderHeroPageMarkup({
  backdrop_path,
  title,
  overview,
  vote_average,
}) {
  const url = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const switchId = document.getElementById('switch__id');

  refs.heroRef.innerHTML = `<div class="hero__wrapper ">
    <h1 class="hero__movie-title">${title}</h1>
    <div class="rating">
      <div class="rating__body">
        <div class="rating__active" style="width: ${vote_average * 10}%;"></div>
        <div class="rating__items hero__vote">
          <input type="radio" class="rating__item" value="1" name="rating" />
          <input type="radio" class="rating__item" value="2" name="rating" />
          <input type="radio" class="rating__item" value="3" name="rating" />
          <input type="radio" class="rating__item" value="4" name="rating" />
          <input type="radio" class="rating__item" value="5" name="rating" />
        </div>
      </div>
      <div class="rating__value">${vote_average}</div>
    </div>
    <p class="hero__text hero__movie-descripton paragraphs">${overview}</p>
    <button class=" watch__btn buttons">Watch trailer</button>
   </div>`;

  changeHeroBg(url);

  const watchBtnRef = document.querySelector('.hero__btn');

  watchBtnRef.addEventListener('click', onOpenHeroModal);
  switchId.addEventListener('click', handleHero);

  function handleHero() {
    handleLoading();
    changeHeroBg(url);
  }
}

function changeHeroBg(bgImg) {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    refs.heroRef.style.backgroundImage = `url('${subtractHeroDesk}'), url('${bgImg}')`;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    refs.heroRef.style.backgroundImage = `url('${subtractHeroTab}'), url('${bgImg}')`;
  } else {
    refs.heroRef.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('${bgImg}')`;
  }

  window.addEventListener('resize', onPageChangeSize);

  function onPageChangeSize(e) {
    const currentWidth = e.currentTarget.innerWidth;
    if (currentWidth >= 1280) {
      refs.heroRef.style.backgroundImage = `url('${subtractHeroDesk}'), url('${bgImg}')`;
    } else if (currentWidth >= 768) {
      refs.heroRef.style.backgroundImage = `url('${subtractHeroTab}'), url('${bgImg}')`;
    } else {
      refs.heroRef.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('${bgImg}')`;
    }
  }
}

