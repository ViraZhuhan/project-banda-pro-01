var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire991f;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire991f=o),o("bUb57"),o("8FnLx"),o("MUwvu"),o("eEHR3");var a=o("7rYDH");const i={galleryOfNewMovies:document.querySelector(".upcoming__container")},s=new(0,a.default);async function l(e){try{const t=await s.fetchGenres(),n=e.results.slice(0,1);n.map((o=>{const{backdrop_path:a,original_title:s,release_date:l,vote_average:c,vote_count:d,popularity:r,genre_ids:m,overview:p}=o;const u=e.results[0].genre_ids;let _=[];for(let e=0;e<u.length;e+=1){const n=t.find((t=>t.id===u[e]));_.push(n.name)}const g=n[0],v=g.original_title,f=g.backdrop_path?`https://image.tmdb.org/t/p/w500/${g.backdrop_path}`:"https://via.placeholder.com/395x574?text=No+Image",b=function(e){e=e||" ";const t=new Date(l);return t.getDate()+e+t.getMonth()+e+t.getFullYear()}("."),h=e.results[0].vote_average,y=e.results[0].vote_count,M=JSON.stringify(e.results[0].id),L=_.slice(0,2).join(", ");i.galleryOfNewMovies.innerHTML=` <h2 class="upcoming__title">Upcoming this month</h2>\n<div class="upcoming__info"> \n<img src="https://image.tmdb.org/t/p/original/${f}" alt="${v}"  loading="lazy" class="upcoming__img" />\n<div class="upcoming__info-btn">\n<div class="upcoming__info-layout">\n<h3 class ="upcoming__movie-title"><span class="upcoming__item-font-title">${v}</span></h3>\n<div class="upcoming__list-tablet">\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-date">Release date</span><span class="upcoming__item-data">${b}</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-vote">Vote/Votes </span><span class="upcoming__item-vote">${h}</span>  /  <span class="upcoming__item-votes">${y}</span></li>\n</ul>\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-popularity">Popularity </span><span class="upcoming__item-pop">${r}</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-genre">Genre </span><span class="upcoming__item-genre">${L}</span></li>\n</ul>\n</div>\n<p class ="upcoming__movie-about">About</p>\n<p class="upcoming__item-font-about">${p}</p>\n</div>\n<button type="button" class="upcoming__button">Remind me</button>\n</div>\n</div>`,remindBtn=document.querySelector(".upcoming__button"),remindBtn.addEventListener("click",(function(){const e=[],t=localStorage.getItem("LibraryMovie");console.log(t),null!==t&&t.includes(w)?1==t&&e.includes(w.data)&&(remindBtn.disabled=!0):(e.push(w),localStorage.setItem("LibraryMovie",JSON.stringify(e)))}));const w={release_date:b,id:M,title:v,popularity:r,vote_average:h,poster_path:f,vote_count:y,genre_ids:u,overview:p};console.log(value),function(){try{const e=localStorage.getItem("LibraryMovie"),t=JSON.parse(e);if(null===t)return;t.map((e=>{e.id===id&&(remindBtn.disabled=!0)}))}catch(e){console.error(e)}}()}))}catch{}}s.upcoming().then(l).catch((e=>console.log(e.message))),l(),o("17t3Z"),o("74Aiq");const c=(0,o("dbTx9").default)();function d(e){c.teamModal[0].classList.remove("closeModalAnimationTeam"),c.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",r),document.body.style.overflow=""}function r(e){"Escape"===e.code&&(c.teamModal[0].classList.remove("openModalAnimationTeam"),c.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((()=>{d()}),400),d())}function m(e){e.target===c.teamBackdrop&&(c.teamModal[0].classList.remove("openModalAnimationTeam"),c.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((()=>{d()}),400))}c.openModal&&c.openModal.addEventListener("click",(function(e){c.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",r),document.addEventListener("click",m),c.teamModal[0].classList.add("openModalAnimationTeam")})),c.closeModal&&c.closeModal.addEventListener("click",d),o("2ukBh");
//# sourceMappingURL=index.779fab92.js.map