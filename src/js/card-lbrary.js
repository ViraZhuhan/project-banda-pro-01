export const addToStorage = (key, value) => {
    try {
      if (typeof value === 'string') {
        localStorage.setItem(key, value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getFromStorage = key => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  };
  
  export const removeFromStorage = key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };
  
  // не нашла где у нас есть кнопка "Add to My Library"
  // button "Add to My Library"
  //<button class="button button--modal-btn button--accent-btn" type="button" data-action="add">
  // Add to My Library
  //</button>;
  
  const addToLibraryBtn = document.querySelector('.button--modal-btn');
  const isAddTabActive = true;
  // из списка карточек с фильмани предположительно там такой  class -.cards__list
  const cardsContainer = document.querySelector('.cards__list');
  //from card-library.html
  const noFilmsMessage = document.querySelector('.alert__message'),
      
  
  addToLibraryBtn.addEventListener('click', handleClickAddToLibrary);
  
  export function handleClickAddToLibrary() {
    renderSavedFilms('add');
    setDisabled(addToLibraryBtn);
    isAddTabActive = false;
  }
  
  export function renderSavedFilms(name) {
    clearFilmList();
    const addedFilms = getFromStorage(name);
    if (addedFilms && addedFilms.length > 0) {
        renderCollection(addedFilms);
        noFilmsMessage.classList.add('is-hidden')
    } else {
        noFilmsMessage.classList.remove('is-hidden')
    }
  }
  
  function setDisabled(el) {
    el.setAttribute('disabled', '');
    el.classList.add('button-active');
  }
  
  
  function clearFilmList() {
    cardsContainer.innerHTML = '';
  }
  
  
  
  export function renderCollection(movies) {
    const markup = movies.map(movie => cardRender(movie)).join('');
    refs.cardsContainer.innerHTML = markup;
  }
  
  
  //стоит  может создать еще 1 файл js для localstorage-addBtcn.js
  // если нажали на кнопку  "Add to My Library" она становится  меняется на 
  // "Remove from My Library"
  
  function localStorageFunction(movieData) {
      const filmObject = JSON.stringify(movieData);
      const isLibraryPage = location.pathname.includes('library');
      const cartItem = document.querySelector(`[data-id="${movieData.id}"]`);
  
      const addBtn = document.querySelector('[data-action="add"]');
  
      addBtn.addEventListener('click', addedBtn);
  
       if (
      localStorage.getItem('add').includes(filmObject) &&
      localStorage.getItem('add').length > 2
    ) {
       addBtn.classList.add('button--accent-btn');
       addBtn.textContent = 'Remove from My Library';
    }
  }
  
  function addedBtn {
      
      const addBtn = document.querySelector('[data-action="add"]');
      
    if (movieData) {
        let film = JSON.parse(localStorage.getItem('add')) || [];
        if (film.find(e => e.id === movieData.id)) {
          addBtn.classList.remove('button--accent-btn');
          addBtn.textContent = 'Add to My Library';
          film = film.filter(e => e.id !== movieData.id);
          if (isLibraryPage && cartItem && refs.isWatchTabActive) {
            cartItem.remove();
          }
        } else {
          addBtn.classList.add('button--accent-btn');
          addBtn.textContent = 'Remove from My Library';
          film.push(movieData);
        }
        localStorage.setItem('add', JSON.stringify(film));
      }
      isLocalStorageEmpty('add');
    }
  
  
  function isLocalStorageEmpty(name) {
    if (getFromStorage(name).length === 0) {
      if (noFilmsMessage) {
        noFilmsMessage.classList.remove('is-hidden');
      }
      return;
    }
  }