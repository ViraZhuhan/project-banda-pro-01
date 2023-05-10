// !===========================================================================
import Api from './api';
import oopsImg from '../images/oops.png';

const refs = {
  containerModalRef: document.querySelector('.hero-modal-container'),

  heroModalRef: document.querySelector('.hero-modal'),
  overlayRef: document.querySelector('.hero-overlay'),
  closeModalRef: document.querySelector('.hero-close-btn'),
};

refs.closeModalRef.addEventListener('click', onCloseHeroModal);
refs.overlayRef.addEventListener('click', onClickOverlay);

const movieHeroApi = new Api();

let currentId;

// Відкриття модального вікна
function onOpenHeroModal() {
  if (refs.containerModalRef.innerHTML === '') {
    getCurrentMovieTrailer(currentId);
  }
  window.addEventListener('keydown', onEscKeyPress);
  refs.heroModalRef.classList.add('active');
  refs.overlayRef.classList.add('active');
}

function onCloseHeroModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.heroModalRef.classList.remove('active');
  refs.overlayRef.classList.remove('active');
  refs.containerModalRef.innerHTML = '';
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseHeroModal();
  }
}

function onClickOverlay(event) {
  if (event.target === event.currentTarget) {
    onCloseHeroModal();
  }
}

function getMovieById(id) {
  currentId = id;
  getCurrentMovieTrailer(id);
}

async function getCurrentMovieTrailer(id) {
  try {
    const response = await movieHeroApi.getDetailsById(id);
    findMovieTrailer(response.results);
  } catch (err) {
    addBasicHeroModal();
  }
}

function findMovieTrailer(videos) {
  const OfficialTrailer = videos.find(video => video.type === 'Trailer');

  if (OfficialTrailer) {
    addTrailerByKey(OfficialTrailer);
  } else {
    addBasicHeroModal();
  }
}

function addBasicHeroModal() {
  const modalMarkup = `<div class="hero-modal-box">
      <p class="hero-modal-text">OOPS...</p>
      <p class="hero-modal-text">We are very sorry!</p>
      <p class="hero-modal-text">But we couldn’t find the trailer.</p>
    </div>
    <img class="hero-modal-img" src="${oopsImg}" alt="Cinema" />
  </div>`;

  refs.containerModalRef.innerHTML = modalMarkup;
}

function addTrailerByKey({ key }) {
  const modalMarkup = `<iframe class='player'
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${key}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>`;

  refs.containerModalRef.innerHTML = modalMarkup;
}

export { onOpenHeroModal, getMovieById };
