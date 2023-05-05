import Api from './api';

const api = new Api();

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  closeModalBtn: document.querySelector('.button__close'),
  gallery: document.querySelector('.gallery'),
};

const toggleModal = () => {
  refs.backdrop.classList.toggle('hidden');
};

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') refs.backdrop.classList.add('hidden');
});

refs.backdrop.addEventListener('click', event => {
  if (event.target.className === 'backdrop') toggleModal();
});
refs.gallery.addEventListener('click', event => {
  if (event.target.nodeName === 'IMG' || event.target.nodeName === 'DIV')
    toggleModal();
});
refs.closeModalBtn.addEventListener('click', toggleModal);

// !====================
// refs.buttonAdd.addEventListener('click', onClick);
// function onClick() {
//   console.log('click');
// }
// !====================
modalMovie(588);
async function modalMovie(id) {
  try {
    const data = await api.getDetailsById(id);
    const idGenres = data.genres;

    const newGenreMovie = [];

    idGenres.map(elem => {
      newGenreMovie.push(elem.name);
    });

    const voteAverage = data.vote_average.toFixed(2);
    const popularity = data.popularity.toFixed(1);
    const imageUrl = data.poster_path
      ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      : 'https://via.placeholder.com/395x574?text=No+Image';

    refs.modal.insertAdjacentHTML(
      'beforeend',
      `<img class="modal__img" src=${imageUrl} alt=${
        data.original_name
      } loading="lazy">
    <div class="modal__items">
      <h1 class="modal__title">${data.title}</h1>
      <p class="modal__rating">Vote / Votes
        <span class="modal__rating_span">
          <span class="rating-vote">${voteAverage}</span> /
          <span class="rating-vote">${data.vote_count}</span>
        </span>
      </p>
      <p class="modal__popularity">Popularity <span>${popularity}</span> </p>
      <p class="modal__genre">Genre <span>${newGenreMovie.join(' ')}</span></p>
      <p class="modal__about">ABOUT</p>
      <p class="modal__description">${data.overview}</p>
      <button class="button__add" type="button"><span class="button__text">Add to my library</span> </button>
    </div>`
    );
  } catch (error) {
    console.error(error);
  }
}
