function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},i=t.parcelRequire991f;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return a[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequire991f=i),i.register("kyEFX",(function(n,t){var a,o;e(n.exports,"register",(function(){return a}),(function(e){return a=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};a=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.fec2e781.js","dqmh8":"hero-black-desk.9dbbb261.png","gPbSM":"hero-black-tab.f76a53e2.png","jxqIU":"hero-home-desk.783caea1.jpg","co8kk":"index.974a4e17.js","eI4vf":"index.98f0c90e.js"}')),i("bUb57"),i("8FnLx"),i("MUwvu");var r=i("7rYDH");i("ldvLh");var s;s=new URL(i("kyEFX").resolve("dqmh8"),import.meta.url).toString();var l;l=new URL(i("kyEFX").resolve("gPbSM"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("jxqIU"),import.meta.url).toString();const d={heroRef:document.querySelector(".hero"),heroBtnRef:document.querySelector(".hero__button")},u=new(0,r.default);function p(e){window.matchMedia("(min-width: 1280px)").matches?d.heroRef.style.backgroundImage=`url('${n(s)}'), url('${e}')`:window.matchMedia("(min-width: 768px)").matches?d.heroRef.style.backgroundImage=`url('${n(l)}'), url('${e}')`:d.heroRef.style.backgroundImage=`linear-gradient(\n      87.8deg,\n      #0e0e0e 15.61%,\n      rgba(14, 14, 14, 0) 60.39%\n    ), url('${e}')`,window.addEventListener("resize",(function(t){const a=t.currentTarget.innerWidth;a>=1280?d.heroRef.style.backgroundImage=`url('${n(s)}'), url('${e}')`:a>=768?d.heroRef.style.backgroundImage=`url('${n(l)}'), url('${e}')`:a<768&&(d.heroRef.style.backgroundImage=`linear-gradient(\n      87.8deg,\n      #0e0e0e 15.61%,\n      rgba(14, 14, 14, 0) 60.39%\n    ), url('${e}')`)}))}!async function(){try{!function({backdrop_path:e,title:n,overview:t,vote_average:a}){const o=`https://image.tmdb.org/t/p/original${e}`;d.heroRef.innerHTML=`<div class="hero__wrapper ">\n    <h1 class="hero__movie-title">${n}</h1>\n    <div class="rating">\n      <div class="rating__body">\n        <div class="rating__active" style="width: ${10*a}%;"></div>\n        <div class="rating__items hero__vote">\n          <input type="radio" class="rating__item" value="1" name="rating" />\n          <input type="radio" class="rating__item" value="2" name="rating" />\n          <input type="radio" class="rating__item" value="3" name="rating" />\n          <input type="radio" class="rating__item" value="4" name="rating" />\n          <input type="radio" class="rating__item" value="5" name="rating" />\n        </div>\n      </div>\n      <div class="rating__value">${a}</div>\n    </div>\n    <p class="hero__text hero__movie-descripton paragraphs">${t}</p>\n    <button class=" watch__btn buttons">Watch trailer</button>\n   </div>`,p(o)}((await u.dayTrends()).results[0])}catch(e){d.heroRef.innerHTML='<div class="hero__wrapper container ">\n    <h1 class="hero__title">Let’s Make Your Own Cinema</h1>\n  <p class="hero__text paragraphs">Is a guide to creating a personalized movie theater experience.\n   You\'ll need a projector, screen, and speakers.<span class="paragraph__hidden">Decorate your space,\n   choose your films, and stock up on snacks for the full experience.</span></p>\n   <a href="/src/catalog.html" class="hero__btn buttuns">Get Started</a>\n   </div>',p(n(c))}}();r=i("7rYDH");const m={galleryOfNewMovies:document.querySelector(".upcoming__container")},_=new(0,r.default);async function g(e){try{const n=await _.fetchGenres(),t=e.results.slice(0,1);t.map((a=>{const{backdrop_path:o,original_title:i,release_date:r,vote_average:s,vote_count:l,popularity:c,genre_ids:d,overview:u}=a;const p=e.results[0].genre_ids;let _=[];for(let e=0;e<p.length;e+=1){const t=n.find((n=>n.id===p[e]));_.push(t.name)}const g=t[0],v=g.original_title,h=g.backdrop_path?`https://image.tmdb.org/t/p/w500/${g.backdrop_path}`:"https://via.placeholder.com/395x574?text=No+Image",f=function(e){e=e||" ";const n=new Date(r);return n.getDate()+e+n.getMonth()+e+n.getFullYear()}("."),b=e.results[0].vote_average,y=e.results[0].vote_count,k=e.results[0].id,w=_.slice(0,2).join(", ");m.galleryOfNewMovies.innerHTML=` <h2 class="upcoming__title">Upcoming this month</h2>\n<div class="upcoming__info"> \n<img src="https://image.tmdb.org/t/p/original/${h}" alt="${v}"  loading="lazy" class="upcoming__img" />\n<div class="upcoming__info-btn">\n<div class="upcoming__info-layout">\n<h3 class ="upcoming__movie-title"><span class="upcoming__item-font-title">${v}</span></h3>\n<div class="upcoming__list-tablet">\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-date">Release date</span><span class="upcoming__item-data">${f}</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-vote">Vote/Votes </span><span class="upcoming__item-vote">${b}</span>  /  <span class="upcoming__item-votes">${y}</span></li>\n</ul>\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-popularity">Popularity </span><span class="upcoming__item-pop">${c}</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-genre">Genre </span><span class="upcoming__item-genre">${w}</span></li>\n</ul>\n</div>\n<p class ="upcoming__movie-about">About</p>\n<p class="upcoming__item-font-about">${u}</p>\n</div>\n<button type="button" class="upcoming__button">Remind me</button>\n</div>\n</div>`,remindBtn=document.querySelector(".upcoming__button"),remindBtn.addEventListener("click",(function(){const e=[],n=localStorage.getItem("LibraryMovie");console.log(n),null!==n&&n.includes(M)?1==n&&e.includes(M.data)&&(remindBtn.disabled=!0,remindBtn.style.backgraund="grey"):(e.push(M),localStorage.setItem("LibraryMovie",JSON.stringify(e)),remindBtn.disabled=!0,remindBtn.style.backgraund="grey")}));const M={release_date:f,id:k,title:v,popularity:c,vote_average:b,poster_path:h,vote_count:y,genre_ids:w,overview:u};console.log(value),function(){try{const e=localStorage.getItem("LibraryMovie"),n=JSON.parse(e);if(null===n)return;n.map((e=>{e.id===id&&(remindBtn.disabled=!0,remindBtn.style.backgraund="grey")}))}catch(e){console.error(e)}}()}))}catch{}}_.upcoming().then(g).catch((e=>console.log(e.message))),g(),i("17t3Z"),i("74Aiq");const v=(0,i("dbTx9").default)();function h(e){v.teamModal[0].classList.remove("closeModalAnimationTeam"),v.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",f),document.body.style.overflow=""}function f(e){"Escape"===e.code&&(v.teamModal[0].classList.remove("openModalAnimationTeam"),v.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((()=>{h()}),400),h())}function b(e){e.target===v.teamBackdrop&&(v.teamModal[0].classList.remove("openModalAnimationTeam"),v.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((()=>{h()}),400))}v.openModal&&v.openModal.addEventListener("click",(function(e){v.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",f),document.addEventListener("click",b),v.teamModal[0].classList.add("openModalAnimationTeam")})),v.closeModal&&v.closeModal.addEventListener("click",h),i("2ukBh");
//# sourceMappingURL=index.fec2e781.js.map
