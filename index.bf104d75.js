!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire991f;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire991f=a),a.register("i8Q71",(function(e,t){var n,r=(0,a("8nXZc").default)();n=window.location.pathname.split("?")[0],r.pageLinks.forEach((function(e){var t=e.getAttribute("href");"/index.html"===n&&"/"===t||t===n?e.classList.add("navigation__link--current"):e.classList.remove("navigation__link--current")})),r.pageLinksMobile.forEach((function(e){var t=e.getAttribute("href");"/index.html"===n&&"/"===t||t===n?e.classList.add("navigation-menu__link--current"):e.classList.remove("navigation-menu__link--current")}))})),a.register("8nXZc",(function(n,r){t(n.exports,"default",(function(){return i}));var o=a("hKHmD");function i(){var t;return t={html:document.documentElement,savedTheme:localStorage.getItem("color-theme"),switcher:document.querySelector('.switch input[type="checkbox"]'),rating:document.querySelectorAll(".rating"),gallery:document.querySelector(".gallery"),pageLinks:document.querySelectorAll(".navigation__link"),pageLinksMobile:document.querySelectorAll(".navigation-menu__link"),mobileMenu:document.querySelector(".mobile-menu"),headerContainer:document.querySelector(".header-menu"),openMenuBtn:document.querySelector(".menu-open"),body:document.getElementsByTagName("body")[0],linkButton:document.querySelectorAll(".navigation-menu__link"),backdrop:document.querySelector(".backdrop"),openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal"),teamModal:document.getElementsByClassName("team__modal")},e(o)(t,"body",document.querySelector("body")),e(o)(t,"closeModalBtn",document.querySelector(".modal__close-btn")),e(o)(t,"modal",document.querySelector(".modal")),e(o)(t,"backdrop",document.querySelector(".backdrop")),e(o)(t,"footerLink",document.querySelector(".team__modal-open")),e(o)(t,"footerBackdrop",document.querySelector('[data-action="deleted-class"]')),e(o)(t,"modalCloseBtn",document.querySelector(".footer-modal__close-btn")),e(o)(t,"watchedBtn",document.querySelector("button[name=watched]")),e(o)(t,"modalEmptyEl",document.querySelector(".modal-empty__backdrop")),e(o)(t,"closeModalEmptyEl",document.querySelector(".modal-empty__close")),e(o)(t,"scrollUpBtn",document.getElementById("scroll-up-btn")),t}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("cs7FV",(function(e,t){var n=(0,a("8nXZc").default)();!function(){console.log("hello");var e=function(){var e="true"===n.headerContainer.getAttribute("aria-expanded")||!1;n.headerContainer.setAttribute("aria-expanded",!e),n.mobileMenu.setAttribute("aria-hidden",e),n.headerContainer.classList.toggle("opened"),n.mobileMenu.classList.toggle("is-hidden"),n.body.classList.toggle("scroll-block")};n.openMenuBtn.addEventListener("click",e),n.linkButton.forEach((function(t){return t.addEventListener("click",e)})),n.mobileMenu.addEventListener("click",(function(t){return t.target===t.currentTarget&&e()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(n.mobileMenu.classList.add("is-hidden"),n.headerContainer.setAttribute("aria-expanded",!1),n.headerContainer.classList.remove("opened"),n.body.classList.remove("scroll-block"))}))}()})),a.register("7jbwn",(function(e,t){var n=(0,a("8nXZc").default)();"light"===n.savedTheme&&(n.switcher.checked=!0),n.switcher.addEventListener("input",(function(){var e=n.html.className;n.html.className="dark"===e?"light":"dark",localStorage.setItem("color-theme",n.html.className)}))})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,u,"next",e)}function u(e){n(i,o,a,c,u,"throw",e)}c(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(e,t,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",m={};function v(){}function g(){}function y(){}var _={};u(_,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==n&&r.call(w,a)&&(_=w);var k=y.prototype=v.prototype=Object.create(_);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function O(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:q}}function q(){return{value:t,done:!0}}return g.prototype=y,u(k,"constructor",y),u(y,"constructor",g),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(L.prototype),u(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new L(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("b7ONl",(function(n,r){t(n.exports,"default",(function(){return v}));var o=a("bpxeT"),i=a("8MBJY"),c=a("a2hTj"),u=a("2TvXO"),s="https://api.themoviedb.org/3/",l="225e339996bc91260b33199c383c8881",d=("".concat(s,"movie/550?api_key=").concat(l),"".concat(s,"trending/all/dayRoute?api_key=").concat(l)),p="".concat(s,"trending/all/week?api_key=").concat(l),f="".concat(s,"/genre/movie/list?api_key=").concat(l),h="".concat(s,"configuration/countries?api_key=").concat(l),m="".concat(s,"movie/upcoming?api_key=").concat(l),v=function(){"use strict";function t(){e(i)(this,t),this.page=1}return e(c)(t,[{key:"nextPage",value:function(){this.page+=1}},{key:"prevPage",value:function(){this.page-=1}},{key:"setPage",value:function(e){this.page=e}},{key:"getCurrentPage",value:function(){return this.page}},{key:"reset",value:function(){this.page=1}},{key:"dayTrends",value:function(){var t=this;return e(o)(e(u).mark((function n(){var r,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"&page=").concat(t.page));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching movie data: "+e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))()}},{key:"weekTrends",value:function(){var t=this;return e(o)(e(u).mark((function n(){var r,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"&page=").concat(t.page));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching movie data: "+e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))()}},{key:"upcoming",value:function(){var t=this;return e(o)(e(u).mark((function n(){var r,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"&page=").concat(t.page));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching movie data: "+e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))()}},{key:"getDetailsById",value:function(t){return e(o)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(l),e.abrupt("return",fetch(r).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),n)})))()}},{key:"fetchGenres",value:function(){return e(o)(e(u).mark((function t(){var n,r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(f);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.genres);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching genres data: "+e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))()}},{key:"countries",value:function(){var t=this;return e(o)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.abrupt("return",fetch("".concat(h,"&page=").concat(t.page)).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),n)})))()}},{key:"searhByNameYear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(o)(e(u).mark((function n(){var r,o,a,i,c,s,d,p;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="https://api.themoviedb.org/3/search/movie?api_key=".concat(l,"&language=en-US&include_adult=false"),0===(o=Object.keys(t)).length){e.next=20;break}for(a=!0,i=!1,c=void 0,e.prev=4,s=o[Symbol.iterator]();!(a=(d=s.next()).done);a=!0)null!==(("year"===(p=d.value)||"query"===p||"page"===p)&&t[p])&&(r+="&".concat(p,"=").concat(t[p]));e.next=12;break;case 8:e.prev=8,e.t0=e.catch(4),i=!0,c=e.t0;case 12:e.prev=12,e.prev=13,a||null==s.return||s.return();case 15:if(e.prev=15,!i){e.next=18;break}throw c;case 18:return e.finish(15);case 19:return e.finish(12);case 20:return e.next=22,new Promise((function(e){return setTimeout(e,1e3)}));case 22:return e.abrupt("return",fetch(r).then((function(e){return e.json()})));case 23:case"end":return e.stop()}}),n,null,[[4,8,12,20],[13,,15,19]])})))()}}]),t}()})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("23Ajj",(function(e,t){var n=(0,a("8nXZc").default)();window.addEventListener("scroll",(function(){window.scrollY>20?n.scrollUpBtn.style.display="block":n.scrollUpBtn.style.display="none"})),n.scrollUpBtn.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))})),a.register("f6Iod",(function(n,r){t(n.exports,"modalMovie",(function(){return l}));var o=a("bpxeT"),i=a("2TvXO"),c=new(0,a("b7ONl").default),u={backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),gallery:document.querySelector(".gallery")},s=function(){u.backdrop.classList.toggle("hidden")};function l(e){return d.apply(this,arguments)}function d(){return(d=e(o)(e(i).mark((function t(n){var r,o,a,l,d,p,f,h,m,v,g,y,_;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(){var e=JSON.parse(localStorage.getItem(m))||[];e.push(v),localStorage.setItem(m,JSON.stringify(e)),f.classList.add("hidden"),h.classList.remove("hidden")},y=function(){var e=JSON.parse(localStorage.getItem(m)),t=e.findIndex((function(e){return e.id===n}));e.splice(t,1),localStorage.setItem(m,JSON.stringify(e)),f.classList.remove("hidden"),h.classList.add("hidden")},_=function(){try{var e=localStorage.getItem(m),t=JSON.parse(e);if(null===t)return;t.map((function(e){e.id===n&&(f.classList.add("hidden"),h.classList.remove("hidden"))}))}catch(e){console.error(e)}},e.prev=3,e.next=6,c.getDetailsById(n);case 6:r=e.sent,o=r.genres,a=[],o.map((function(e){a.push(e.name)})),l=r.vote_average.toFixed(2),d=r.popularity.toFixed(1),p=r.poster_path?"https://image.tmdb.org/t/p/w500/".concat(r.poster_path):"https://via.placeholder.com/395x574?text=No+Image",u.modal.innerHTML='\n    <img class="modal__img" src='.concat(p," alt=").concat(r.original_name,' loading="lazy">\n    <div class="modal__items">\n      <h1 class="modal__title">').concat(r.title,'</h1>\n      <p class="modal__rating">Vote / Votes\n        <span class="modal__rating_span">\n          <span class="rating-vote">').concat(l,'</span> /\n          <span class="rating-vote">').concat(r.vote_count,'</span>\n        </span>\n      </p>\n      <p class="modal__popularity">Popularity <span>').concat(d,'</span> </p>\n      <p class="modal__genre">Genre <span>').concat(a.join(" "),'</span></p>\n      <p class="modal__about">ABOUT</p>\n      <p class="modal__description">').concat(r.overview,'</p>\n      <button class="button-add" type="button"><span class="button-add__tex">Add to my library</span> </button>\n      <button class="button-remove hidden" type="button"><span class="button-add__tex">Remove from my library</span> </button>\n    </div>'),f=document.querySelector(".button-add"),h=document.querySelector(".button-remove"),document.querySelector(".button__close").addEventListener("click",s),f.addEventListener("click",g),h.addEventListener("click",y),m="LibraryMovie",v={data:r.release_date,id:n,title:r.title,popularity:d,voteAverage:l,img:p,voteCount:r.vote_count,genres:a,overview:r.overview},_(),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(3),console.error(e.t0);case 31:case"end":return e.stop()}}),t,null,[[3,28]])})))).apply(this,arguments)}window.addEventListener("keydown",(function(e){"Escape"===e.key&&u.backdrop.classList.add("hidden")})),u.backdrop.addEventListener("click",(function(e){"backdrop"===e.target.className&&s()})),u.gallery.addEventListener("click",(function(e){s(),l(e.target.closest(".gallery__item ").id)}))})),a.register("cwHAv",(function(e,n){t(e.exports,"createGallery",(function(){return u}));var r=a("kgcWS"),o=a("8nXZc"),i=a("3HOTw"),c=(r=a("kgcWS"),(0,o.default)());function u(e){var t;c.gallery.innerHTML="",c.gallery.innerHTML=(t=e,t.map((function(e){var t=e.poster_path,n=e.title,o=e.vote_average,a=e.release_date,c=e.genre_ids,u=e.id,s=(0,i.genresList)(c),l=new Date(a).getFullYear(),d=t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://via.placeholder.com/395x574?text=No+Image";return(0,r.initRatings)(),'<li class="gallery__item" id=\''.concat(u,'\'>\n        <article>\n        <img class="gallery__img" src="').concat(d,'" alt="').concat(n,'" width="395" >\n          <div class="gallery__details">\n            <p class="details__title">').concat(n,'</p>\n            <div class="wraper__details">\n            <p class="movieGenres">').concat(s," | ").concat(l,'</p>\n             <div class="rating">\n              <div class="rating__body">\n              <div class="rating__active" style="width: ').concat(10*o,'%;"></div>>\n                <div class="rating__items">\n                  <input type="radio" class="rating__item" value="1" name="rating" />\n                  <input type="radio" class="rating__item" value="2" name="rating" />\n                  <input type="radio" class="rating__item" value="3" name="rating" />\n                  <input type="radio" class="rating__item" value="4" name="rating" />\n                  <input type="radio" class="rating__item" value="5" name="rating" />\n                </div>\n              </div>\n              <div class="rating__value">').concat(o,"</div>\n            </div>\n            </div>\n          </div>\n        </article>\n        </li>")}))).join("")}})),a.register("kgcWS",(function(e,n){t(e.exports,"initRatings",(function(){return o}));var r=(0,a("8nXZc").default)();function o(){if(r.rating.length>0)for(var e=0;e<r.rating.length;e++){i(r.rating[e])}}function i(e){var t=e.querySelector(".rating__active"),n=e.querySelector(".rating__value");e.querySelectorAll(".rating__item").forEach((function(e){e.addEventListener("click",(function(){n.innerHTML=e.value,c(t,n)}))})),c(t,n)}function c(e,t){var n=t.innerHTML/.025;e.style.width="".concat(n,"%")}})),a.register("3HOTw",(function(e,n){t(e.exports,"genresList",(function(){return o}));var r=a("lGIxQ"),o=function(e){if(!Array.isArray(e))return"Unknown genre";var t=r.genres.filter((function(t){var n=t.id;return e.includes(n)})).map((function(e){return e.name}));return t.length?t.length>2?"".concat(t.slice(0,2).join(", ")):t.join(", "):"Unknown genre"}})),a.register("lGIxQ",(function(e,n){t(e.exports,"genres",(function(){return r}));var r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]}))}();
//# sourceMappingURL=index.bf104d75.js.map
