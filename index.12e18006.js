!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequire991f;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire991f=o);i=document.querySelectorAll(".navigation__link"),c=document.querySelectorAll(".navigation-menu__link"),l=window.location.pathname.split("?")[0],i.forEach((function(e){var t=e.getAttribute("href");"/index.html"===l&&"/"===t||t===l?e.classList.add("navigation__link--current"):e.classList.remove("navigation__link--current")})),c.forEach((function(e){var t=e.getAttribute("href");"/index.html"===l&&"/"===t||t===l?e.classList.add("navigation-menu__link--current"):e.classList.remove("navigation-menu__link--current")})),function(){console.log("hello");var e=document.querySelector(".mobile-menu"),t=document.querySelector(".header-menu"),n=document.querySelector(".menu-open"),a=document.getElementsByTagName("body")[0],o=document.querySelectorAll(".navigation-menu__link"),i=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.setAttribute("aria-hidden",n),t.classList.toggle("opened"),e.classList.toggle("is-hidden"),a.classList.toggle("scroll-block")};n.addEventListener("click",i),o.forEach((function(e){return e.addEventListener("click",i)})),e.addEventListener("click",(function(e){return e.target===e.currentTarget&&i()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.add("is-hidden"),t.setAttribute("aria-expanded",!1),t.classList.remove("opened"),a.classList.remove("scroll-block"))}))}(),s=document.documentElement,r=localStorage.getItem("color-theme"),d=document.querySelector('.switch input[type="checkbox"]'),"light"===r&&(d.checked=!0),d.addEventListener("input",(function(){var e=s.className;s.className="dark"===e?"light":"dark",localStorage.setItem("color-theme",s.className)}));var i,c,l,s,r,d,u=o("bpxeT"),m=o("2TvXO"),p=o("b7ONl"),g={galleryOfNewMovies:document.querySelector(".upcoming__container")},v=new(0,p.default);function _(e){return f.apply(this,arguments)}function f(){return(f=e(u)(e(m).mark((function t(n){var a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.fetchGenres();case 3:a=e.sent,o=n.results.slice(0,1),o.map((function(e){var t=function(e){var t=a.find((function(t){return t.id===s[e]}));r.push(t.name)},i=(e.backdrop_path,e.original_title,e.release_date),c=(e.vote_average,e.vote_count,e.popularity),l=(e.genre_ids,e.overview);for(var s=n.results[0].genre_ids,r=[],d=0;d<s.length;d+=1)t(d);var u=o[0],m=u.original_title,p=u.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(u.backdrop_path):"https://via.placeholder.com/395x574?text=No+Image",v=function(e){e=e||" ";var t=new Date(i);return t.getDate()+e+t.getMonth()+e+t.getFullYear()}("."),_=n.results[0].vote_average,f=n.results[0].vote_count,h=r.slice(0,2).join(", ");g.galleryOfNewMovies.innerHTML='<div class="upcoming__info"> \n<img src="https://image.tmdb.org/t/p/original/'.concat(p,'" alt="').concat(m,'"  loading="lazy" class="upcoming__img" />\n<div class="upcoming__info-btn">\n<div class="upcoming__info-layout">\n<h3 class ="upcoming__movie-title"><span class="upcoming__item-font-title">').concat(m,'</span></h3>\n<div class="upcoming__list-tablet">\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-date">Release date</span><span class="upcoming__item-data">').concat(v,'</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-vote">Vote/Votes </span><span class="upcoming__item-vote">').concat(_,'</span>  /  <span class="upcoming__item-votes">').concat(f,'</span></li>\n</ul>\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-popularity">Popularity </span><span class="upcoming__item-pop">').concat(c,'</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-genre">Genre </span><span class="upcoming__item-genre">').concat(h,'</span></li>\n</ul>\n</div>\n<p class ="upcoming__movie-about">About</p>\n<p class="upcoming__item-font-about">').concat(l,'</p>\n</div>\n<button type="button" class="upcoming__button">Remind me</button>\n</div>\n</div>'),remindBtn=document.querySelector(".upcoming__button"),remindBtn.addEventListener("click",(function(){var e=[],t=localStorage.getItem("key");console.log(t),null===t?(e.push(y),localStorage.setItem("key",JSON.stringify(e)),remindBtn.disabled=!0,remindBtn.style.backgraund="grey"):1==t&&e.length>=1&&(remindBtn.disabled=!0,remindBtn.style.backgraund="grey")}));var y={title:m,popularity:c,voteAverage:_,imageUrl:p,voteCount:f,genreUp:h,overview:l};console.log(y)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}v.upcoming().then(_).catch((function(e){return console.log(e.message)})),_(),remindBtn.disabled=!0,remindBtn.style.backgraun="grey";u=o("bpxeT"),m=o("2TvXO"),p=o("b7ONl");var h=o("bi3kq"),y=new(0,p.default);function b(){return(b=e(u)(e(m).mark((function t(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.weekTrends();case 3:n=e.sent,createGalleryHome(n.results.slice(0,3)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h.noFilmError;case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){b.apply(this,arguments)}();var k=document.getElementById("scroll-up-btn");window.addEventListener("scroll",(function(){window.scrollY>20?k.style.display="block":k.style.display="none"})),k.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var w={openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal"),teamModal:document.getElementsByClassName("team__modal")};function L(e){w.teamModal[0].classList.remove("closeModalAnimationTeam"),w.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",M),document.body.style.overflow=""}function M(e){"Escape"===e.code&&(w.teamModal[0].classList.remove("openModalAnimationTeam"),w.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((function(){L()}),400),L())}function E(e){e.target===w.teamBackdrop&&(w.teamModal[0].classList.remove("openModalAnimationTeam"),w.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((function(){L()}),400))}w.openModal&&w.openModal.addEventListener("click",(function(e){w.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",M),document.addEventListener("click",E),w.teamModal[0].classList.add("openModalAnimationTeam")})),w.closeModal&&w.closeModal.addEventListener("click",L)}();
//# sourceMappingURL=index.12e18006.js.map
