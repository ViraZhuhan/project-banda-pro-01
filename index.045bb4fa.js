const e=new class{nextPage(){this.page+=1}prevPage(){this.page-=1}setPage(e){this.page=e}getCurrentPage(){return this.page}reset(){this.page=1}async dayTrends(){try{const e=await fetch(`https://api.themoviedb.org/3/trending/all/dayRoute?api_key=225e339996bc91260b33199c383c8881&page=${this.page}`);return await e.json()}catch(e){throw new Error("Error fetching movie data: "+e)}}async weekTrends(){try{const e=await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=225e339996bc91260b33199c383c8881&page=${this.page}`);return await e.json()}catch(e){throw new Error("Error fetching movie data: "+e)}}async upcoming(){try{const e=await fetch(`https://api.themoviedb.org/3/all/upcoming?api_key=225e339996bc91260b33199c383c8881&page=${this.page}`);return await e.json()}catch(e){throw new Error("Error fetching movie data: "+e)}}async getDetailsById(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=225e339996bc91260b33199c383c8881`;return await new Promise((e=>setTimeout(e,1e3))),fetch(t).then((e=>e.json()))}async fetchGenres(){try{const e=await fetch("https://api.themoviedb.org/3//genre/movie/list?api_key=225e339996bc91260b33199c383c8881");return(await e.json()).genres}catch(e){throw new Error("Error fetching genres data: "+e)}}async countries(){return await new Promise((e=>setTimeout(e,1e3))),fetch(`https://api.themoviedb.org/3/configuration/countries?api_key=225e339996bc91260b33199c383c8881&page=${this.page}`).then((e=>e.json()))}async searhByNameYear(e={}){let t="https://api.themoviedb.org/3/search/movie?api_key=225e339996bc91260b33199c383c8881&language=en-US&include_adult=false";const a=Object.keys(e);if(0!==a.length)for(const i of a)null!==(("year"===i||"query"===i||"page"===i)&&e[i])&&(t+=`&${i}=${e[i]}`);return await new Promise((e=>setTimeout(e,1e3))),fetch(t).then((e=>e.json()))}constructor(){this.page=1}},t={rating:document.querySelectorAll(".rating"),wrapper:document.querySelector(".article__list")};function a(e){const t=e.querySelector(".rating__active"),a=e.querySelector(".rating__value");e.querySelectorAll(".rating__item").forEach((e=>{e.addEventListener("click",(()=>{a.innerHTML=e.value,i(t,a)}))})),i(t,a)}function i(e,t){const a=t.innerHTML/.025;e.style.width=`${a}%`}!async function(){try{const i=(await e.weekTrends()).results.slice(0,3),n=await e.fetchGenres(),r=i.map((e=>{const{poster_path:t,title:a,vote_average:i,release_date:r,genre_ids:s}=e,c=i,o=new Date(r).getFullYear();return`\n        <li class="article__item">\n        <article>\n        <img class="article__img" src="${t?`https://image.tmdb.org/t/p/w500/${t}`:"https://via.placeholder.com/395x574?text=No+Image"}" alt="${a}" width="395" >\n          <div class="details">\n            <p class="title__txt">${a}</p>\n            <div class="wraper__details">\n            <p class="movieGenres">${n.filter((e=>s.includes(e.id))).map((e=>e.name)).slice(0,2).join(", ")} | ${o}</p>\n            \n            <div class="rating">\n              <div class="rating__body">\n              <div class="rating__active" style="width: ${10*c}%;"></div>>\n                <div class="rating__items">\n                  <input type="radio" class="rating__item" value="1" name="rating" />\n                  <input type="radio" class="rating__item" value="2" name="rating" />\n                  <input type="radio" class="rating__item" value="3" name="rating" />\n                  <input type="radio" class="rating__item" value="4" name="rating" />\n                  <input type="radio" class="rating__item" value="5" name="rating" />\n                </div>\n              </div>\n              <div class="rating__value">${c}</div>\n            </div>\n            </div>\n          </div>\n        </article>\n          \n        </li>\n      `}));t.wrapper.innerHTML=r.join(""),function(){if(t.rating.length>0)for(let e=0;e<t.rating.length;e++)a(t.rating[e])}()}catch(e){console.error(e)}}();
//# sourceMappingURL=index.045bb4fa.js.map