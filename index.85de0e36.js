!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=n.parcelRequire991f;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire991f=a),a("i8Q71"),a("cs7FV"),a("7jbwn"),a("gVa74");var i=a("bpxeT"),s=a("2TvXO"),c=a("b7ONl"),l={galleryOfNewMovies:document.querySelector(".upcoming__container")},r=new(0,c.default);function d(e){return u.apply(this,arguments)}function u(){return(u=e(i)(e(s).mark((function n(t){var o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.fetchGenres();case 3:o=e.sent,a=t.results.slice(0,1),a.map((function(e){var n=function(e){var n=o.find((function(n){return n.id===r[e]}));d.push(n.name)},i=(e.backdrop_path,e.original_title,e.release_date),s=(e.vote_average,e.vote_count,e.popularity),c=(e.genre_ids,e.overview);for(var r=t.results[0].genre_ids,d=[],u=0;u<r.length;u+=1)n(u);var p=a[0],m=p.original_title,_=p.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(p.backdrop_path):"https://via.placeholder.com/395x574?text=No+Image",g=function(e){e=e||" ";var n=new Date(i);return n.getDate()+e+n.getMonth()+e+n.getFullYear()}("."),v=t.results[0].vote_average,f=t.results[0].vote_count,b=JSON.stringify(t.results[0].id),h=d.slice(0,2).join(", ");l.galleryOfNewMovies.innerHTML=' <h2 class="upcoming__title">Upcoming this month</h2>\n<div class="upcoming__info"> \n<img src="https://image.tmdb.org/t/p/original/'.concat(_,'" alt="').concat(m,'"  loading="lazy" class="upcoming__img" />\n<div class="upcoming__info-btn">\n<div class="upcoming__info-layout">\n<h3 class ="upcoming__movie-title"><span class="upcoming__item-font-title">').concat(m,'</span></h3>\n<div class="upcoming__list-tablet">\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-date">Release date</span><span class="upcoming__item-data">').concat(g,'</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-vote">Vote/Votes </span><span class="upcoming__item-vote">').concat(v,'</span>  /  <span class="upcoming__item-votes">').concat(f,'</span></li>\n</ul>\n<ul class="upcoming__list">\n<li class ="upcoming__item"><span class="upcoming__item-font-popularity">Popularity </span><span class="upcoming__item-pop">').concat(s,'</span></li>\n<li class ="upcoming__item"><span class="upcoming__item-font-genre">Genre </span><span class="upcoming__item-genre">').concat(h,'</span></li>\n</ul>\n</div>\n<p class ="upcoming__movie-about">About</p>\n<p class="upcoming__item-font-about">').concat(c,'</p>\n</div>\n<button type="button" class="upcoming__button">Remind me</button>\n</div>\n</div>'),remindBtn=document.querySelector(".upcoming__button"),remindBtn.addEventListener("click",(function(){var e=[],n=localStorage.getItem("LibraryMovie");console.log(n),null!==n&&n.includes(y)?1==n&&e.includes(y.data)&&(remindBtn.disabled=!0):(e.push(y),localStorage.setItem("LibraryMovie",JSON.stringify(e)),remindBtn.disabled=!0)}));var y={release_date:g,id:b,title:m,popularity:s,vote_average:v,poster_path:_,vote_count:f,genre_ids:r,overview:c};!function(){try{var e=localStorage.getItem("LibraryMovie"),n=JSON.parse(e);if(null===n)return;n.map((function(e){e.id===id&&(console.log(e.id),remindBtn.disabled=!0)}))}catch(e){console.error(e)}}()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}r.upcoming().then(d).catch((function(e){return console.log(e.message)})),d(),a("7lHWV"),a("23Ajj");var p=(0,a("8nXZc").default)();function m(e){p.teamModal[0].classList.remove("closeModalAnimationTeam"),p.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",_),document.body.style.overflow=""}function _(e){"Escape"===e.code&&(p.teamModal[0].classList.remove("openModalAnimationTeam"),p.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((function(){m()}),400),m())}function g(e){e.target===p.teamBackdrop&&(p.teamModal[0].classList.remove("openModalAnimationTeam"),p.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((function(){m()}),400))}p.openModal&&p.openModal.addEventListener("click",(function(e){p.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",_),document.addEventListener("click",g),p.teamModal[0].classList.add("openModalAnimationTeam")})),p.closeModal&&p.closeModal.addEventListener("click",m),a("f6Iod")}();
//# sourceMappingURL=index.85de0e36.js.map
