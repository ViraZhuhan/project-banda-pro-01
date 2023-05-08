import Api from './api';
// import getRefs from './get-refs';
// import { noFilmError, onFetchError } from './msg-error';

// // import { initRatings } from './init-rating';

const refs = {
  heroRef: document.querySelector('.hero'),
  heroBtnRef: document.querySelector('.hero__button'),
};

refs.heroBtnRef.addEventListener('click', renderDayTrends);

const heroApi = new Api();

async function createDayTrendsHome() {
  try {
    const response = await heroApi.dayTrends();
  } catch (error) {
    console.log(error); //onFilmError
  }
}

createDayTrendsHome();

// export { createDayTrendsHome };

function clear() {
  refs.heroRef.innerHTML = '';
}

export async function renderDayTrends() {
  try {
    const data = await heroApi.dayTrends();
    const movies = data.results.slice(0, 1);

    const moviesElements = movies.map(movie => {
      const { backdrop_path, title, vote_average, overview } = movie;

      //  const voteAverage = vote_average;

      const imageUrl = backdrop_path
        ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
        : 'https://via.placeholder.com/395x574?text=No+Image';

      return `
<section class="hero">

<img src="https://image.tmdb.org/t/p/original/${imageUrl}" 
    alt="${title}"  class='hero__bg--img slider-for'/>
  
  
  <div class="hero__movie--wrapper container ">
    <h1 class="hero__movie-title title">${title}</h1>
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
    <p class="hero__movie-descripton paragraphs">${overview}</p>
    
    <button class="buttons watch__btn">Watch trailer</button>

    <ul class="slider slider-nav">
  <li class="slider__item">
     <button class="hero__slider-btn">1</button>
  </li>
  <li class="slider__item">
     <button class="hero__slider-btn">2</button>
  </li>
  <li class="slider__item">
     <button class="hero__slider-btn">3</button>
  </li>
  <li class="slider__item">
    <button class="hero__slider-btn">4</button>
  </li>
  <li class="slider__item">
     <button class="hero__slider-btn">5</button>
  </li>
  </div>


  
    
  <picture>
    <img class="hero__movie--subtract subtract" srcset="
          ./images/hero-black-desk.png    1x,
          ./images/hero-black-desk2x.png 2x
        " src="./images/hero-black-desk.png" alt="subtract" />
  </picture>

</section>
`;
    });

    // console.log(moviesElements );
    refs.heroRef.innerHTML = moviesElements.join('');
    //!=====================SLIDER===========================

    //  $('.slider-for').slick({
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    //    arrows: false,
    //    fade: true,
    //    asNavFor: '.slider-nav',
    //  });
    //  $('.slider-nav').slick({
    //    slidesToShow: 5,
    //   //  slidesToScroll: 1,
    //    asNavFor: '.slider-for',
    //    dots: true,
    //    centerMode: true,
    //    focusOnSelect: true,
    //   //  arrows: true,
    //  });
  } catch {
    err => console.log(err);
  }
}

// setTimeout(() => {

// }, 1000);

