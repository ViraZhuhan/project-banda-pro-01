const modalEmptyEl = document.querySelector('.modal-empty__backdrop');
const closeModalEmptyEl = document.querySelector('.modal-empty__close');

modalEmptyEl.addEventListener('click', onModalEmpty);
closeModalEmptyEl.addEventListener('click', onCloseModalEmpty);

export function onOpenModalEmpty() {
  toggleModalEmpty();
  window.document.addEventListener('keydown', onTapEsc);
}

function onModalEmpty(e) {
  if (e.target === e.currentTarget) {
    toggleModalEmpty();
    window.document.removeEventListener('keydown', onTapEsc);
  }
}

function onCloseModalEmpty() {
  toggleModalEmpty();
  window.document.removeEventListener('keydown', onTapEsc);
}

function onTapEsc(e) {
  if (e.key === 'Escape') {
    toggleModalEmpty();
  }
}

function toggleModalEmpty() {
  if (modalEmptyEl.classList.contains('modal-empty__backdrop--close')) {
    modalEmptyEl.classList.remove('modal-empty__backdrop--close');
  } else {
    modalEmptyEl.classList.add('modal-empty__backdrop--close');
  }
}
