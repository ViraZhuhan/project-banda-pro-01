!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=r.parcelRequire991f;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},r.parcelRequire991f=a),a("cs7FV"),a("7jbwn"),a("i8Q71");var l=a("bpxeT"),o=a("2TvXO"),s=a("b7ONl");a("6JpON"),a("kgcWS"),a("bi3kq");var u=a("8nXZc");a("3HOTw");var c=a("cwHAv"),i=new(0,s.default),f=(0,u.default)();function p(){return(p=e(l)(e(o).mark((function r(n){var t;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),i.query=f.searchInput.value,(t=i.query)&&d(t);case 4:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=e(l)(e(o).mark((function r(n){var t;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.searchMovieByQuery(n);case 3:null===(t=e.sent).results||0===t.results.length?(console.log("not"),y(),(0,c.clearGallery)()):t.results&&(0,c.createGallery)(t.results.slice(0,10)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function y(){f.galleryCatalog.insertAdjacentHTML("beforebegin",'<p class="no-results">\n  OOPS...<br />\n  We are very sorry!<br />\n  We don’t have any results due to your search.\n  </p>')}f.searchForm.addEventListener("submit",(function(e){return p.apply(this,arguments)})),a("f6Iod"),a("23Ajj"),a("7lHWV")}();
//# sourceMappingURL=catalog.84ea1cd7.js.map
