import Api from './api';
const api = new Api();

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  gallery: document.querySelector('.gallery'),
};
const toggleModal = () => {
  refs.backdrop.classList.toggle('hidden');
};
// ========================CLICK ESP=====================

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') refs.backdrop.classList.add('hidden');
});
// ========================CLICK backdrop================

refs.backdrop.addEventListener('click', event => {
  if (event.target.className === 'backdrop') {
    toggleModal();
  }
});

// ========================CLICK Open=====================

refs.gallery.addEventListener('click', event => {
  toggleModal();
  let idOfCard = event.target.closest('.gallery__item ').id;
  modalMovie(idOfCard);
});

// ========================CLICK closed=====================

// ========================================================

export async function modalMovie(id) {
  try {
    const data = await api.getDetailsById(id);
    console.log(data);
    const idGenres = data.genres;
    const newGenreMovie = [];
    idGenres.map(elem => {
      newGenreMovie.push(elem.name);
    });
    const key = data.title;
    const voteAverage = data.vote_average.toFixed(2);
    const popularity = data.popularity.toFixed(1);
    const imageUrl = data.poster_path
      ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      : 'https://via.placeholder.com/395x574?text=No+Image';

    refs.modal.innerHTML = `
    <button class="button__close" type="button">
      <svg>
        <use href="./images/symbol-defs.svg#icon-close"></use>
      </svg>
    </button>
    <img class="modal__img" src=${imageUrl} alt=${
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
      <button class="button-add" type="button"><span class="button-add__tex">Add to my library</span> </button>
      <button class="button-remove hidden" type="button"><span class="button-add__tex">Remove from my library</span> </button>
    </div>`;

    const buttonAdd = document.querySelector('.button-add');
    const buttonRemove = document.querySelector('.button-remove');
    const closeModalBtn = document.querySelector('.button__close');

    closeModalBtn.addEventListener('click', toggleModal);
    buttonAdd.addEventListener('click', addLS);
    buttonRemove.addEventListener('click', removeLS);
    ls();
    function addLS() {
      const value = {
        data: data.release_date,
        id,
        title: data.title,
        popularity,
        voteAverage,
        img: imageUrl,
        voteCount: data.vote_count,
        genres: newGenreMovie,
        overview: data.overview,
      };
      localStorage.setItem(key, JSON.stringify(value));
      buttonAdd.classList.add('hidden');
      buttonRemove.classList.remove('hidden');
    }
    function removeLS() {
      localStorage.removeItem(key);
      buttonAdd.classList.remove('hidden');
      buttonRemove.classList.add('hidden');
    }
    function ls() {
      try {
        const itemLs = localStorage.getItem(key);
        const parceLS = null ? undefined : JSON.parse(itemLs);
        if (parceLS === null) {
          return;
        }
        buttonAdd.classList.add('hidden');
        buttonRemove.classList.remove('hidden');
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
