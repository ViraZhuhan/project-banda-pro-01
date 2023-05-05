import Notiflix from 'notiflix';

export { noFilmError, onFetchError};

function noFilmError() {
  Notiflix.Notify.warning(
    `Sorry, there are no films. Please try again late`
  );
}

function onFetchError() {
  Notiflix.Notify.failure(`Please write something and try again`);
}



