var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire991f;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire991f=o);(()=>{const e=document.querySelectorAll(".navigation__link"),t=document.querySelectorAll(".navigation-menu__link"),n=window.location.href;e.forEach((e=>{e.href!==n?e.classList.remove("navigation__link--current"):e.classList.add("navigation__link--current")})),t.forEach((e=>{e.href!==n?e.classList.remove("navigation-menu__link--current"):e.classList.add("navigation-menu__link--current")}))})(),(()=>{console.log("hello");const e=document.querySelector(".mobile-menu"),t=document.querySelector(".header-menu"),n=document.querySelector(".menu-open"),o=document.getElementsByTagName("body")[0],a=document.querySelectorAll(".navigation-menu__link"),i=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.setAttribute("aria-hidden",n),t.classList.toggle("opened"),e.classList.toggle("is-hidden"),o.classList.toggle("scroll-block")};n.addEventListener("click",i),a.forEach((e=>e.addEventListener("click",i))),e.addEventListener("click",(e=>e.target===e.currentTarget&&i())),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.add("is-hidden"),t.setAttribute("aria-expanded",!1),t.classList.remove("opened"),o.classList.remove("scroll-block"))}))})(),(()=>{const e=document.documentElement,t=localStorage.getItem("color-theme"),n=document.querySelector('.switch input[type="checkbox"]');"light"===t&&(n.checked=!0),n.addEventListener("input",(()=>{const t=e.className;e.className="dark"===t?"light":"dark",localStorage.setItem("color-theme",e.className)}))})();var a=o("7rYDH");const i={galleryOfNewMovies:document.querySelector(".upcoming__container")},s=new(0,a.default);async function l(e){try{const t=await s.fetchGenres(),n=e.results.slice(0,1);n.map((o=>{const{backdrop_path:a,original_title:s,release_date:l,vote_average:c,vote_count:r,popularity:d,genre_ids:m,overview:u}=o;const p=e.results[0].genre_ids;let g=[];for(let e=0;e<p.length;e+=1){const n=t.find((t=>t.id===p[e]));g.push(n.name)}const _=n[0],v=_.original_title,y=_.backdrop_path?`https://image.tmdb.org/t/p/w500/${_.backdrop_path}`:"https://via.placeholder.com/395x574?text=No+Image",f=function(e){e=e||" ";const t=new Date(l);return t.getDate()+e+t.getMonth()+e+t.getFullYear()}("."),h=e.results[0].vote_average,b=e.results[0].vote_count,k=g.slice(0,2).join(", ");i.galleryOfNewMovies.innerHTML=`<div class="upcoming__info"> \n<img src="https://image.tmdb.org/t/p/original/${y}" alt="${v}"  loading="lazy" class="upcoming__img" />\n<div class="upcoming__info-btn">\n<div class="upcoming__info-layout">\n<h3 class ="upcoming__movie-title"><span class="upcoming__item-font-title">${v}</span></h3>\n<div class="upcoming__list-tablet">\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-date">Release date</span><span class="upcoming__item-data">${f}</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-vote">Vote/Votes </span><span class="upcoming__item-vote">${h}</span>  /  <span class="upcoming__item-votes">${b}</span></li>\n</ul>\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-popularity">Popularity </span><span class="upcoming__item-pop">${d}</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-genre">Genre </span><span class="upcoming__item-genre">${k}</span></li>\n</ul>\n</div>\n<p class ="upcoming__movie-about">About</p>\n<p class="upcoming__item-font-about">${u}</p>\n</div>\n<button type="button" class="upcoming__button">Remind me</button>\n</div>\n</div>`,remindBtn=document.querySelector(".upcoming__button"),remindBtn.addEventListener("click",(function(){const e=[],t=localStorage.getItem("key");console.log(t),null===t?(e.push(L),localStorage.setItem("key",JSON.stringify(e)),remindBtn.disabled=!0,remindBtn.style.backgraund="grey"):1==t&&e.length>=1&&(remindBtn.disabled=!0,remindBtn.style.backgraund="grey")}));const L={title:v,popularity:d,voteAverage:h,imageUrl:y,voteCount:b,genreUp:k,overview:u};console.log(L)}))}catch{}}s.upcoming().then(l).catch((e=>console.log(e.message))),l(),remindBtn.disabled=!0,remindBtn.style.backgraun="grey";a=o("7rYDH");var c=o("iLH9r");const r=new(0,a.default);!async function(){try{const e=await r.weekTrends();createGalleryHome(e.results.slice(0,3))}catch(e){c.noFilmError}}();const d=document.getElementById("scroll-up-btn");window.addEventListener("scroll",(function(){window.scrollY>20?d.style.display="block":d.style.display="none"})),d.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));const m={openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal"),teamModal:document.getElementsByClassName("team__modal")};function u(e){m.teamModal[0].classList.remove("closeModalAnimationTeam"),m.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",p),document.body.style.overflow=""}function p(e){"Escape"===e.code&&(m.teamModal[0].classList.remove("openModalAnimationTeam"),m.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((()=>{u()}),400),u())}function g(e){e.target===m.teamBackdrop&&(m.teamModal[0].classList.remove("openModalAnimationTeam"),m.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((()=>{u()}),400))}m.openModal&&m.openModal.addEventListener("click",(function(e){m.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",p),document.addEventListener("click",g),m.teamModal[0].classList.add("openModalAnimationTeam")})),m.closeModal&&m.closeModal.addEventListener("click",u);
//# sourceMappingURL=index.d8cc388b.js.map
