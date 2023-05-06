function slowScroll() {
    const galleryElement = document.querySelector('.header').firstElementChild;
    if (galleryElement) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }