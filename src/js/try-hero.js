// import Api from './api';
// // import getRefs from './get-refs';
// // import { noFilmError, onFetchError } from './msg-error';

// // // import { initRatings } from './init-rating';

// const refs = {
//   heroRef: document.querySelector('.hero'),
//   //   heroBtnRef: document.querySelector('.hero__link--btn'),
//   heroWrapperRef: document.querySelector('.hero__wrapper'),
// };

// // refs.heroBtnRef.addEventListener('click', renderDayTrendsMarkup);

// const heroApi = new Api();

// createDayTrendsHome();

// async function createDayTrendsHome() {
//   try {
//     const response = await heroApi.dayTrends();
//     renderDayTrendsMarkup(response.results[0]);
//   } catch (error) {
//     addBasisMarkup();
//   }
// }

// function addBasisMarkup() {
//   refs.heroRef.innerHTML = `
//         <h1 class="hero__title title">Let’s Make Your Own Cinema</h1>
//         <p class="hero__text paragraphs">Is a guide to creating a personalized movie theater experience. You'll need a
//             projector,
//             screen, and speakers.
//             <span class="paragraph__hidden">Decorate your space, choose your films,
//                 and stock up on snacks for the full experience.
//             </span>
//         </p>
//          <a href="/src/catalog.html" type="button" class="hero__link--btn buttons">Get Started </a>
//            <picture>
//     <img class="hero__bg--img " srcset="
//       ./images/hero-home-desk.jpg    1x,
//       ./images/hero-home-desk2x.jpg 2x
//     " src="./images/hero-home-desk.jpg" alt="bg" />
//   </picture>`;
// }

// export { createDayTrendsHome };

// // function clear() {
// //   refs.heroRef.innerHTML = '';
// // }
// function renderDayTrendsMarkup({
//   backdrop_path,
//   title,
//   overview,
//   vote_average,
// }) {
//   const urlHeroBGI = `https://image.tmdb.org/t/p/original${backdrop_path}`;

//     refs.heroWrapperRef.innerHTML = ` <div class="hero__wrapper hero__movie--wrapper container">
//    <h1 class="hero__movie-title title">${title}</h1>
//     <div class="rating">
//       <div class="rating__body">
//         <div class="rating__active" style="width: ${vote_average * 10}%;"></div>
//                 <div class="rating__items hero__vote">
//                   <input type="radio" class="rating__item" value="1" name="rating" />
//                   <input type="radio" class="rating__item" value="2" name="rating" />
//                   <input type="radio" class="rating__item" value="3" name="rating" />
//                   <input type="radio" class="rating__item" value="4" name="rating" />
//                   <input type="radio" class="rating__item" value="5" name="rating" />
//                 </div>
//               </div>
//               <div class="rating__value">${vote_average}</div>
//             </div>
//     <p class="hero__movie-descripton paragraphs">${overview}</p>
    
    
    
//     <button class="buttons watch__btn">Watch trailer</button>

//     <ul class="slider slider-nav">
//   <li class="slider__item">
//      <button class="hero__slider-btn">1</button>
//   </li>
//   <li class="slider__item">
//      <button class="hero__slider-btn">2</button>
//   </li>
//   <li class="slider__item">
//      <button class="hero__slider-btn">3</button>
//   </li>
//   <li class="slider__item">
//     <button class="hero__slider-btn">4</button>
//   </li>
//   <li class="slider__item">
//      <button class="hero__slider-btn">5</button>
//   </li>
//   </ul>
//   </div>
//   `;

//   changeHeroBackground(urlHeroBGI);
//   // refs.heroRef.style.backgroundImage = `linear-gradient(
//   //   87.8deg,
//   //   #0e0e0e 15.61%,
//   //   rgba(14, 14, 14, 0) 60.39%
//   // ), url('${urlHeroBGI}')`;
// }

// //!=====================SLIDER===========================

// // function changeHeroBackground(BGI) {
// //   refs.hero.style.backgroundImage = `linear-gradient(
// //       87.8deg,
// //       #0e0e0e 15.61%,
// //       rgba(14, 14, 14, 0) 60.39%
// //     ), url('${BGI}')`;
// // }

// function changeHeroBackground(BGI) {
//   // перевіряємо ширину екрану при завантаженні сторінки та додаємо відповідний фон
//   if (window.matchMedia('(min-width: 1280px)').matches) {
//       refs.heroRef.style.backgroundImage = `url('${BGI}')`;
//   } else if (window.matchMedia('(min-width: 768px)').matches) {
//     refs.heroRef.style.backgroundImage = `url('${BGI}')`;
//   } else {
//     refs.heroRef.style.backgroundImage = `linear-gradient(
//       87.8deg,
//       #0e0e0e 15.61%,
//       rgba(14, 14, 14, 0) 60.39%
//     ), url('${BGI}')`;
//   }

//   // Відслуховуємо зміну ширини сторінки...
//   window.addEventListener('resize', onResizePageWidth);
//   // ... та змінюємо на відповідний фон при зміні ширини екрану
//   function onResizePageWidth(events) {
//     const currentPageWidth = events.currentTarget.innerWidth;
//     if (currentPageWidth >= 1280) {
//       refs.heroRef.style.backgroundImage = `url('${BGI}')`;
//     } else if (currentPageWidth >= 768) {
//       refs.heroRef.style.backgroundImage = `url('${BGI}')`;
//     } else if (currentPageWidth < 768) {
//       refs.heroRef.style.backgroundImage = `linear-gradient(
//       87.8deg,
//       #0e0e0e 15.61%,
//       rgba(14, 14, 14, 0) 60.39%
//     ), url('${BGI}')`;
//     }
//   }
// }
