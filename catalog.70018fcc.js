!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=r.parcelRequire991f;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},r.parcelRequire991f=a),a("cs7FV"),a("7jbwn"),a("i8Q71");var l=a("bpxeT"),o=a("2TvXO"),s=a("b7ONl");a("6JpON"),a("kgcWS");var u=a("bi3kq"),c=a("8nXZc");a("3HOTw");var i=a("cwHAv"),f=a("hbOBH"),p=new(0,s.default),d=(0,c.default)();function h(){return(h=e(l)(e(o).mark((function r(n){var t;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),""===(t=d.searchInput.value)&&(0,u.onFetchError)(),t&&v(t);case 4:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=e(l)(e(o).mark((function r(n){var t;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.searchMovieByQuery(n);case 3:t=e.sent,console.log(t),null===t.results||0===t.results.length?(b(),(0,i.clearGallery)()):t.results&&((0,i.createGallery)(t.results.slice(0,10)),(0,f.updateGalleryBySearch)(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,u.noFilmError)();case 11:case"end":return e.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}function b(){d.galleryCatalog.insertAdjacentHTML("beforebegin",'<p class="no-results">\n  OOPS...<br />\n  We are very sorry!<br />\n  We don’t have any results due to your search.\n  </p>')}d.searchForm.addEventListener("submit",(function(e){return h.apply(this,arguments)})),a("f6Iod"),a("23Ajj"),a("7lHWV"),a("jcFG7"),a("hbOBH"),a("gVa74"),a("aZhHc")}();
//# sourceMappingURL=catalog.70018fcc.js.map
