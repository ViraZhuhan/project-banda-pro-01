import Api from './api';
// // import getRefs from './get-refs';
// // import { noFilmError, onFetchError } from './msg-error';

import { initRatings } from './init-rating';

const refs = {
  heroRef: document.querySelector('.hero'),
  heroBtnRef: document.querySelector('.hero__button'),
};

import SubstructBlackDesk from '../images/hero-black-desk.png';
import SubstructBlackTab from '../images/hero-black-tab.png';
import homePageBg from '../images/hero-home-desk.jpg';

const pageHeroApi = new Api();

// const refs = {
//   container: document.querySelector('.hero-decription'),
//   hero: document.querySelector('.hero'),
// };

getDayMovieTrend();

async function getDayMovieTrend() {
  try {
    const response = await pageHeroApi.dayTrends();

    renderHeroPageMarkup(response.results[0]);
  } catch (err) {
    renderDefaultMarkup();
  }
}

export { getDayMovieTrend, renderHeroPageMarkup };

function renderDefaultMarkup() {
  refs.heroRef.innerHTML = `<div class="hero__wrapper container ">
    <h1 class="hero__title">Let’s Make Your Own Cinema</h1>
  <p class="hero__text paragraphs">Is a guide to creating a personalized movie theater experience.
   You'll need a projector, screen, and speakers.<span class="paragraph__hidden">Decorate your space,
   choose your films, and stock up on snacks for the full experience.</span></p>
   <a href="/src/catalog.html" class="hero__btn buttuns">Get Started</a>
   </div>`;

  changeHeroBackground(homePageBg);
}

function renderHeroPageMarkup({
  backdrop_path,
  title,
  overview,
  vote_average,
}) {
  const url = `https://image.tmdb.org/t/p/original${backdrop_path}`;

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

  changeHeroBackground(url);
}

function changeHeroBackground(bgImg) {
  // перевіряємо ширину екрану при завантаженні сторінки та додаємо відповідний фон
  if (window.matchMedia('(min-width: 1280px)').matches) {
    refs.heroRef.style.backgroundImage = `url('${SubstructBlackDesk}'), url('${bgImg}')`;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    refs.heroRef.style.backgroundImage = `url('${SubstructBlackTab}'), url('${bgImg}')`;
  } else {
    refs.heroRef.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('${bgImg}')`;
  }

  window.addEventListener('resize', onPageChangeSize);

  function onPageChangeSize(e) {
    const currentPageWidth = e.currentTarget.innerWidth;
    if (currentPageWidth >= 1280) {
      refs.heroRef.style.backgroundImage = `url('${SubstructBlackDesk}'), url('${bgImg}')`;
    } else if (currentPageWidth >= 768) {
      refs.heroRef.style.backgroundImage = `url('${SubstructBlackTab}'), url('${bgImg}')`;
    } else if (currentPageWidth < 768) {
      refs.heroRef.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('${bgImg}')`;
    }
  }
}
