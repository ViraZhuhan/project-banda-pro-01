
export default function getRefs () {
    return {
        rating: document.querySelectorAll('.rating'),
        wrapper: document.querySelector('.article__list'),
        gallery: document.querySelector('.gallery')
      };
}