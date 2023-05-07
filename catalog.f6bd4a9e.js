!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequire991f;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequire991f=a);(function(){console.log("hello");var e=document.querySelector(".mobile-menu"),t=document.querySelector(".header-menu"),n=document.querySelector(".menu-open"),o=document.getElementsByTagName("body")[0],a=document.querySelectorAll(".navigation-menu__link"),c=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.setAttribute("aria-hidden",n),t.classList.toggle("opened"),e.classList.toggle("is-hidden"),o.classList.toggle("scroll-block")};n.addEventListener("click",c),a.forEach((function(e){return e.addEventListener("click",c)})),e.addEventListener("click",(function(e){return e.target===e.currentTarget&&c()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.add("is-hidden"),t.setAttribute("aria-expanded",!1),t.classList.remove("opened"),o.classList.remove("scroll-block"))}))})(),c=document.documentElement,r=localStorage.getItem("color-theme"),i=document.querySelector('.switch input[type="checkbox"]'),"light"===r&&(i.checked=!0),i.addEventListener("input",(function(){var e=c.className;c.className="dark"===e?"light":"dark",localStorage.setItem("color-theme",c.className)})),s=document.querySelectorAll(".navigation__link"),l=document.querySelectorAll(".navigation-menu__link"),d=window.location.href,s.forEach((function(e){e.href!==d?e.classList.remove("navigation__link--current"):e.classList.add("navigation__link--current")})),l.forEach((function(e){e.href!==d?e.classList.remove("navigation-menu__link--current"):e.classList.add("navigation-menu__link--current")}));var c,r,i,s,l,d,u=document.getElementById("search-form"),p=document.getElementById("search-input"),m=document.getElementById("movie-list");u.addEventListener("submit",(function(e){e.preventDefault();var t=p.value;m.innerHTML="",fetch("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("YOUR_API_KEY","&query=").concat(t)).then((function(e){return e.json()})).then((function(e){if(0===e.total_results){var t=document.createElement("p");t.textContent="OOPS... We are very sorry! We don’t have any results due to your search.",m.appendChild(t)}else{e.results.forEach((function(e){var t=document.createElement("div");t.classList.add("movie"),t.innerHTML="\n            <h2>".concat(e.title,'</h2>\n            <img src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'" alt="').concat(e.title,'">\n            <p>').concat(e.overview,"</p>\n          "),m.appendChild(t)}))}})).catch((function(e){console.error(e);var t=document.createElement("p");t.textContent="Oops! Something went wrong.",m.appendChild(t)}))}));var v=a("bpxeT"),g=a("2TvXO"),h=new(0,a("b7ONl").default),f={backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),gallery:document.querySelector(".gallery")},_=function(){f.backdrop.classList.toggle("hidden")};function y(){return(y=e(v)(e(g).mark((function t(n){var o,a,c,r,i,s,l,d,u,p,m,v;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=function(){var e={id:n,title:o.title,popularity:s,voteAverage:i,img:l,voteCount:o.vote_count,genres:c,overview:o.overview};localStorage.setItem(r,JSON.stringify(e)),d.classList.add("hidden"),u.classList.remove("hidden")},m=function(){localStorage.removeItem(r),d.classList.remove("hidden"),u.classList.add("hidden")},v=function(){var e=localStorage.getItem(r),t=JSON.parse(e);r===t.title&&(d.classList.add("hidden"),u.classList.remove("hidden"))},e.prev=3,e.next=6,h.getDetailsById(n);case 6:o=e.sent,a=o.genres,c=[],console.log(a),a.map((function(e){c.push(e.name)})),r=o.title,i=o.vote_average.toFixed(2),s=o.popularity.toFixed(1),l=o.poster_path?"https://image.tmdb.org/t/p/w500/".concat(o.poster_path):"https://via.placeholder.com/395x574?text=No+Image",f.modal.innerHTML='\n    <button class="button__close" type="button">\n      <svg>\n        <use href="./images/symbol-defs.svg#icon-close"></use>\n      </svg>\n    </button>\n    <img class="modal__img" src='.concat(l," alt=").concat(o.original_name,' loading="lazy">\n    <div class="modal__items">\n      <h1 class="modal__title">').concat(o.title,'</h1>\n      <p class="modal__rating">Vote / Votes\n        <span class="modal__rating_span">\n          <span class="rating-vote">').concat(i,'</span> /\n          <span class="rating-vote">').concat(o.vote_count,'</span>\n        </span>\n      </p>\n      <p class="modal__popularity">Popularity <span>').concat(s,'</span> </p>\n      <p class="modal__genre">Genre <span>').concat(c.join(" "),'</span></p>\n      <p class="modal__about">ABOUT</p>\n      <p class="modal__description">').concat(o.overview,'</p>\n      <button class="button-add" type="button"><span class="button-add__tex">Add to my library</span> </button>\n      <button class="button-remove hidden" type="button"><span class="button-add__tex">Remove from my library</span> </button>\n    </div>'),d=document.querySelector(".button-add"),u=document.querySelector(".button-remove"),document.querySelector(".button__close").addEventListener("click",_),d.addEventListener("click",p),u.addEventListener("click",m),v(),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(3),console.error(e.t0);case 31:case"end":return e.stop()}}),t,null,[[3,28]])})))).apply(this,arguments)}window.addEventListener("keydown",(function(e){"Escape"===e.key&&f.backdrop.classList.add("hidden")})),f.backdrop.addEventListener("click",(function(e){"backdrop"===e.target.className&&_()})),f.gallery.addEventListener("click",(function(e){_();var t=e.target.closest(".gallery__item ").id;console.log(t),function(e){y.apply(this,arguments)}(t)})),a("cwHAv");var b=document.getElementById("scroll-up-btn");window.addEventListener("scroll",(function(){window.scrollY>20?b.style.display="block":b.style.display="none"})),b.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=catalog.f6bd4a9e.js.map
