import Api from './api';
// import openTrailerModal from './hero-trailer';

// // import getRefs from './get-refs';
// // import { noFilmError, onFetchError } from './msg-error';
import { onOpenHeroModal, getMovieById } from '/src/js/hero-trailer';
// import { initRatings } from './init-rating';

const refs = {
  heroRef: document.querySelector('.hero'),
  heroBtnRef: document.querySelector('.hero__button'),
};

const root = document.documentElement;

import SubstructBlackDesk from '../images/hero-black-desk.png';
import SubstructBlackTab from '../images/hero-black-tab.png';
import SubstructWhiteDesk from '../images/hero-white-desk.png';
import SubstructWhiteTab from '../images/hero-white-tab.png';
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
    const random = Math.floor(Math.random() * response.results.length);

    renderHeroPageMarkup(response.results[random]);
  } catch (err) {
    renderDefaultMarkup();
  }
}

export { getDayMovieTrend, renderHeroPageMarkup };

function renderDefaultMarkup() {
  refs.heroRef.innerHTML = `<div class="hero__wrapper hero__additional-container">
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
  original_title,
  overview,
  vote_average,
}) {
  const url = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  refs.heroRef.innerHTML = `<div class="hero__wrapper hero__additional-container">
    <h1 class="hero__movie-title">${original_title}</h1>
    <div class="rating hero__vote">
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
    <button class="hero-btn watch__btn buttons">Watch trailer</button>
   </div>`;

  changeHeroBackground(url);

   const WatchTrailerBtn = document.querySelector('.hero-btn');
   WatchTrailerBtn.addEventListener('click', onOpenHeroModal);

}

function changeHeroBackground(bgImg) {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    const bgDecorator = root.classList.contains('light')
      ? SubstructWhiteDesk
      : SubstructBlackDesk;
    refs.heroRef.style.backgroundImage = `url('${bgDecorator}'), url('${bgImg}')`;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    const bgDecorator = root.classList.contains('light')
      ? SubstructWhiteTab
      : SubstructBlackTab;
    refs.heroRef.style.backgroundImage = `url('${bgDecorator}'), url('${bgImg}')`;
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
      const bgDecorator = root.classList.contains('light')
        ? SubstructWhiteDesk
        : SubstructBlackDesk;
      refs.heroRef.style.backgroundImage = `url('${bgDecorator}'), url('${bgImg}')`;
    } else if (currentPageWidth >= 768) {
      const bgDecorator = root.classList.contains('light')
        ? SubstructWhiteTab
        : SubstructBlackTab;
      refs.heroRef.style.backgroundImage = `url('${bgDecorator}'), url('${bgImg}')`;
    } else if (currentPageWidth < 768) {
      refs.heroRef.style.backgroundImage = `linear-gradient(
      87.8deg,
      #0e0e0e 15.61%,
      rgba(14, 14, 14, 0) 60.39%
    ), url('${bgImg}')`;
    }
  }
}
