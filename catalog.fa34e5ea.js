var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire991f;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire991f=o);(()=>{console.log("hello");const e=document.querySelector(".mobile-menu"),t=document.querySelector(".header-menu"),n=document.querySelector(".menu-open"),o=document.getElementsByTagName("body")[0],a=document.querySelectorAll(".navigation-menu__link"),s=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.setAttribute("aria-hidden",n),t.classList.toggle("opened"),e.classList.toggle("is-hidden"),o.classList.toggle("scroll-block")};n.addEventListener("click",s),a.forEach((e=>e.addEventListener("click",s))),e.addEventListener("click",(e=>e.target===e.currentTarget&&s())),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.add("is-hidden"),t.setAttribute("aria-expanded",!1),t.classList.remove("opened"),o.classList.remove("scroll-block"))}))})(),(()=>{const e=document.documentElement,t=localStorage.getItem("color-theme"),n=document.querySelector('.switch input[type="checkbox"]');"light"===t&&(n.checked=!0),n.addEventListener("input",(()=>{const t=e.className;e.className="dark"===t?"light":"dark",localStorage.setItem("color-theme",e.className)}))})(),(()=>{const e=document.querySelectorAll(".navigation__link"),t=document.querySelectorAll(".navigation-menu__link"),n=window.location.href;e.forEach((e=>{e.href!==n?e.classList.remove("navigation__link--current"):e.classList.add("navigation__link--current")})),t.forEach((e=>{e.href!==n?e.classList.remove("navigation-menu__link--current"):e.classList.add("navigation-menu__link--current")}))})();const a=new(0,o("7rYDH").default),s={backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),gallery:document.querySelector(".gallery")},l=()=>{s.backdrop.classList.toggle("hidden")};window.addEventListener("keydown",(e=>{"Escape"===e.key&&s.backdrop.classList.add("hidden")})),s.backdrop.addEventListener("click",(e=>{"backdrop"===e.target.className&&l()})),s.gallery.addEventListener("click",(e=>{l(),async function(e){try{const r=await a.getDetailsById(e);console.log(r);const i=r.genres,c=[];i.map((e=>{c.push(e.name)}));const d=r.title,u=r.vote_average.toFixed(2),m=r.popularity.toFixed(1),p=r.poster_path?`https://image.tmdb.org/t/p/w500/${r.poster_path}`:"https://via.placeholder.com/395x574?text=No+Image";s.modal.innerHTML=`\n    <button class="button__close" type="button">\n      <svg>\n        <use href="./images/symbol-defs.svg#icon-close"></use>\n      </svg>\n    </button>\n    <img class="modal__img" src=${p} alt=${r.original_name} loading="lazy">\n    <div class="modal__items">\n      <h1 class="modal__title">${r.title}</h1>\n      <p class="modal__rating">Vote / Votes\n        <span class="modal__rating_span">\n          <span class="rating-vote">${u}</span> /\n          <span class="rating-vote">${r.vote_count}</span>\n        </span>\n      </p>\n      <p class="modal__popularity">Popularity <span>${m}</span> </p>\n      <p class="modal__genre">Genre <span>${c.join(" ")}</span></p>\n      <p class="modal__about">ABOUT</p>\n      <p class="modal__description">${r.overview}</p>\n      <button class="button-add" type="button"><span class="button-add__tex">Add to my library</span> </button>\n      <button class="button-remove hidden" type="button"><span class="button-add__tex">Remove from my library</span> </button>\n    </div>`;const g=document.querySelector(".button-add"),v=document.querySelector(".button-remove");function t(){const t={data:r.release_date,id:e,title:r.title,popularity:m,voteAverage:u,img:p,voteCount:r.vote_count,genres:c,overview:r.overview};localStorage.setItem(d,JSON.stringify(t)),g.classList.add("hidden"),v.classList.remove("hidden")}function n(){localStorage.removeItem(d),g.classList.remove("hidden"),v.classList.add("hidden")}function o(){try{const e=localStorage.getItem(d);if(null===JSON.parse(e))return;g.classList.add("hidden"),v.classList.remove("hidden")}catch(e){console.error(e)}}document.querySelector(".button__close").addEventListener("click",l),g.addEventListener("click",t),v.addEventListener("click",n),o()}catch(_){console.error(_)}}(e.target.closest(".gallery__item ").id)})),o("7X0WP");const r=document.getElementById("scroll-up-btn");window.addEventListener("scroll",(function(){window.scrollY>20?r.style.display="block":r.style.display="none"})),r.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=catalog.fa34e5ea.js.map
