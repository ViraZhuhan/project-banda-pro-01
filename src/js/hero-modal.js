import Api from './api';
import imageModalJPG from '/src/images/image-modal.jpg';

const refs = {
  heroModalRef: document.querySelector('.hero__modal'),
  overlayRef: document.querySelector('.hero__overlay'),
  modalContainerRef: document.querySelector('.hero__modal-container'),
  closeBtnRef: document.querySelector('.hero__close-btn'),
};

refs.closeBtnRef.addEventListener('click', onCloseHeroModal);

const api = new Api();

let currentId;

function onCloseHeroModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.heroModalRef.classList.remove('active');
  refs.overlayRef.classList.remove('active');
  refs.modalContainerRef.innerHTML = '';
}

export { onOpenHeroModal, getMovieById };

function getMovieById(id) {
  currentId = id;
  getMovieById(id);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseHeroModal();
  }
}

function onOpenHeroModal() {
  if (refs.modalContainerRef.innerHTML === '') {
    getMovieById(currentId);
  }
  window.addEventListener('keydown', onEscKeyPress);
  refs.heroModalRef.classList.add('active');

  refs.overlayRef.classList.add('active');
}

async function getMovieById(id) {
  try {
    const response = await api.getDetailsById(id);
    findTrailer(response.results);
  } catch (err) {
    addBasicHeroModal();
  }
}

function findTrailer(videos) {
  const trailer = videos.find(video => video.type === 'Trailer');

  if (trailer) {
    addMovieTrailer(trailer);
  } else {
    addBasicHeroModal();
  }
}

function addBasicHeroModal() {
  let markup = '';
  markup += `
<div class="hero__modal-box">
  <h2 class="hero__modal-title">
    OOPS...<br />
    We are very sorry!<br />
    You don’t have any movies at <br /> your library.
  </h2>
  <img class="hero__modal-img" src="${imageModalJPG}" alt="Cinema" />
</div>`;

  return (refs.modalContainerRef.innerHTML += markup);
}

function addMovieTrailer({ key }) {
  let movieMarkup = '';
  movieMarkup += `<iframe class='player'
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${key}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>`;

  return (refs.modalContainerRef.innerHTML = movieMarkup);
}
