function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire991f;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire991f=r),r.register("bUb57",(function(e,t){const n=(0,r("dbTx9").default)();(()=>{const e=window.location.pathname.split("?")[0],t=["/index.html","/"];n.pageLinks.forEach((n=>{const a=n.getAttribute("href");t.includes(e)&&t.includes(a)?n.classList.add("navigation__link--current"):a!==e?n.classList.remove("navigation__link--current"):n.classList.add("navigation__link--current")})),n.pageLinksMobile.forEach((n=>{const a=n.getAttribute("href");t.includes(e)&&t.includes(a)?n.classList.add("navigation-menu__link--current"):a!==e?n.classList.remove("navigation-menu__link--current"):n.classList.add("navigation-menu__link--current")}))})()})),r.register("dbTx9",(function(t,n){function a(){return{html:document.documentElement,savedTheme:localStorage.getItem("color-theme"),switcher:document.querySelector('.switch input[type="checkbox"]'),rating:document.querySelectorAll(".rating"),gallery:document.querySelector(".gallery"),pageLinks:document.querySelectorAll(".navigation__link"),pageLinksMobile:document.querySelectorAll(".navigation-menu__link"),mobileMenu:document.querySelector(".mobile-menu"),headerContainer:document.querySelector(".header-menu"),openMenuBtn:document.querySelector(".menu-open"),body:document.getElementsByTagName("body")[0],linkButton:document.querySelectorAll(".navigation-menu__link"),backdrop:document.querySelector(".backdrop"),openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal"),teamModal:document.getElementsByClassName("team__modal"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".modal__close-btn"),modal:document.querySelector(".modal"),backdrop:document.querySelector(".backdrop"),footerLink:document.querySelector(".team__modal-open"),footerBackdrop:document.querySelector('[data-action="deleted-class"]'),modalCloseBtn:document.querySelector(".footer-modal__close-btn"),watchedBtn:document.querySelector("button[name=watched]"),modalEmptyEl:document.querySelector(".modal-empty__backdrop"),closeModalEmptyEl:document.querySelector(".modal-empty__close"),scrollUpBtn:document.getElementById("scroll-up-btn")}}e(t.exports,"default",(function(){return a}))})),r.register("8FnLx",(function(e,t){const n=(0,r("dbTx9").default)();(()=>{const e=()=>{const e="true"===n.headerContainer.getAttribute("aria-expanded")||!1;n.headerContainer.setAttribute("aria-expanded",!e),n.mobileMenu.setAttribute("aria-hidden",e),n.headerContainer.classList.toggle("opened"),n.mobileMenu.classList.toggle("is-hidden"),n.body.classList.toggle("scroll-block")};n.openMenuBtn.addEventListener("click",e),n.linkButton.forEach((t=>t.addEventListener("click",e))),n.mobileMenu.addEventListener("click",(t=>t.target===t.currentTarget&&e())),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(n.mobileMenu.classList.add("is-hidden"),n.headerContainer.setAttribute("aria-expanded",!1),n.headerContainer.classList.remove("opened"),n.body.classList.remove("scroll-block"))}))})()})),r.register("MUwvu",(function(e,t){const n=(0,r("dbTx9").default)();"light"===n.savedTheme&&(n.switcher.checked=!0),n.switcher.addEventListener("input",(()=>{const e=n.html.className;n.html.className="dark"===e?"light":"dark",localStorage.setItem("color-theme",n.html.className)}))})),r.register("7rYDH",(function(t,n){e(t.exports,"default",(function(){return a}));class a{constructor(){this.page=1}nextPage(){this.page+=1}prevPage(){this.page-=1}setPage(e){this.page=e}getCurrentPage(){return this.page}reset(){this.page=1}async dayTrends(){try{const e=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=225e339996bc91260b33199c383c8881&page=${this.page}`);return await e.json()}catch(e){throw new Error("Error fetching movie data: "+e)}}async weekTrends(){try{const e=await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=225e339996bc91260b33199c383c8881&page=${this.page}`);return await e.json()}catch(e){throw new Error("Error fetching movie data: "+e)}}async upcoming(){try{const e=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=225e339996bc91260b33199c383c8881&page=${this.page}`);return await e.json()}catch(e){throw new Error("Error fetching movie data: "+e)}}async getDetailsById(e){return fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=225e339996bc91260b33199c383c8881`).then((e=>e.json()))}async fetchGenres(){try{const e=await fetch("https://api.themoviedb.org/3//genre/movie/list?api_key=225e339996bc91260b33199c383c8881");return(await e.json()).genres}catch(e){throw new Error("Error fetching genres data: "+e)}}async countries(){return await new Promise((e=>setTimeout(e,1e3))),fetch(`https://api.themoviedb.org/3/configuration/countries?api_key=225e339996bc91260b33199c383c8881&page=${this.page}`).then((e=>e.json()))}async searhByNameYear(e={}){let t="https://api.themoviedb.org/3/search/movie?api_key=225e339996bc91260b33199c383c8881&language=en-US&include_adult=false";const n=Object.keys(e);if(0!==n.length)for(const a of n)null!==(("year"===a||"query"===a||"page"===a)&&e[a])&&(t+=`&${a}=${e[a]}`);return await new Promise((e=>setTimeout(e,1e3))),fetch(t).then((e=>e.json()))}}})),r.register("ldvLh",(function(t,n){e(t.exports,"initRatings",(function(){return o}));const a=(0,r("dbTx9").default)();function o(){if(a.rating.length>0)for(let e=0;e<a.rating.length;e++){i(a.rating[e])}}function i(e){const t=e.querySelector(".rating__active"),n=e.querySelector(".rating__value");e.querySelectorAll(".rating__item").forEach((e=>{e.addEventListener("click",(()=>{n.innerHTML=e.value,s(t,n)}))})),s(t,n)}function s(e,t){const n=t.innerHTML/.025;e.style.width=`${n}%`}})),r.register("74Aiq",(function(e,t){const n=(0,r("dbTx9").default)();window.addEventListener("scroll",(function(){window.scrollY>20?n.scrollUpBtn.style.display="block":n.scrollUpBtn.style.display="none"})),n.scrollUpBtn.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))})),r.register("2ukBh",(function(t,n){e(t.exports,"modalMovie",(function(){return s}));const a=new(0,r("7rYDH").default),o={backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),gallery:document.querySelector(".gallery")},i=()=>{o.backdrop.classList.toggle("hidden")};async function s(e){try{const t=await a.getDetailsById(e),n=t.genres,r=[];n.map((e=>{r.push(e.name)}));const s=t.vote_average.toFixed(2),c=t.popularity.toFixed(1),l=t.poster_path?`https://image.tmdb.org/t/p/w500/${t.poster_path}`:"https://via.placeholder.com/395x574?text=No+Image";o.modal.innerHTML=`\n    <img class="modal__img" src=${l} alt=${t.original_name} loading="lazy">\n    <div class="modal__items">\n      <h1 class="modal__title">${t.title}</h1>\n      <p class="modal__rating">Vote / Votes\n        <span class="modal__rating_span">\n          <span class="rating-vote">${s}</span> /\n          <span class="rating-vote">${t.vote_count}</span>\n        </span>\n      </p>\n      <p class="modal__popularity">Popularity <span>${c}</span> </p>\n      <p class="modal__genre">Genre <span>${r.join(" ")}</span></p>\n      <p class="modal__about">ABOUT</p>\n      <p class="modal__description">${t.overview}</p>\n      <button class="button-add" type="button"><span class="button-add__tex">Add to my library</span> </button>\n      <button class="button-remove hidden" type="button"><span class="button-add__tex">Remove from my library</span> </button>\n    </div>`;const d=document.querySelector(".button-add"),u=document.querySelector(".button-remove");document.querySelector(".button__close").addEventListener("click",i),d.addEventListener("click",(function(){try{let e=JSON.parse(localStorage.getItem(p))||[];e.push(g),localStorage.setItem(p,JSON.stringify(e)),d.classList.add("hidden"),u.classList.remove("hidden")}catch(e){console.error(e)}})),u.addEventListener("click",(function(){try{let t=JSON.parse(localStorage.getItem(p));const n=t.findIndex((t=>t.id===e));t.splice(n,1),localStorage.setItem(p,JSON.stringify(t)),d.classList.remove("hidden"),u.classList.add("hidden")}catch(e){console.error(e)}}));const m=n.map((({id:e})=>e)),p="LibraryMovie",g={release_date:t.release_date,id:e,title:t.title,popularity:c,vote_average:s,poster_path:l,vote_count:t.vote_count,genre_ids:m,overview:t.overview};!function(){try{const t=localStorage.getItem(p),n=JSON.parse(t);if(null===n)return;n.map((t=>{t.id===e&&(d.classList.add("hidden"),u.classList.remove("hidden"))}))}catch(e){console.error(e)}}()}catch(e){console.error(e)}}window.addEventListener("keydown",(e=>{"Escape"===e.key&&o.backdrop.classList.add("hidden")})),o.backdrop.addEventListener("click",(e=>{"backdrop"===e.target.className&&i()})),o.gallery.addEventListener("click",(e=>{i(),s(e.target.closest(".gallery__item ").id)}))})),r.register("7X0WP",(function(t,n){e(t.exports,"createGallery",(function(){return c}));var a=r("ldvLh"),o=r("dbTx9"),i=r("jEZFs");a=r("ldvLh");const s=(0,o.default)();function c(e){var t;s.gallery.innerHTML="",s.gallery.innerHTML=(t=e,t.map((({poster_path:e,title:t,vote_average:n,release_date:r,genre_ids:o,id:s})=>{const c=(0,i.genresList)(o),l=new Date(r).getFullYear(),d=e?`https://image.tmdb.org/t/p/w500/${e}`:"https://via.placeholder.com/395x574?text=No+Image";return(0,a.initRatings)(),`<li class="gallery__item" id='${s}'>\n        <article>\n        <img class="gallery__img" src="${d}" alt="${t}" width="395" >\n          <div class="gallery__details">\n            <p class="details__title">${t}</p>\n            <div class="wraper__details">\n            <p class="movieGenres">${c} | ${l}</p>\n             <div class="rating">\n              <div class="rating__body">\n              <div class="rating__active" style="width: ${10*n}%;"></div>>\n                <div class="rating__items">\n                  <input type="radio" class="rating__item" value="1" name="rating" />\n                  <input type="radio" class="rating__item" value="2" name="rating" />\n                  <input type="radio" class="rating__item" value="3" name="rating" />\n                  <input type="radio" class="rating__item" value="4" name="rating" />\n                  <input type="radio" class="rating__item" value="5" name="rating" />\n                </div>\n              </div>\n              <div class="rating__value">${n}</div>\n            </div>\n            </div>\n          </div>\n        </article>\n        </li>`}))).join("")}})),r.register("jEZFs",(function(t,n){e(t.exports,"genresList",(function(){return o}));var a=r("haSTN");const o=e=>{if(!Array.isArray(e))return"Unknown genre";const t=a.genres.filter((({id:t})=>e.includes(t))).map((({name:e})=>e));return t.length?t.length>2?`${t.slice(0,2).join(", ")}`:t.join(", "):"Unknown genre"}})),r.register("haSTN",(function(t,n){e(t.exports,"genres",(function(){return a}));const a=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]}));
//# sourceMappingURL=index.198b577b.js.map
