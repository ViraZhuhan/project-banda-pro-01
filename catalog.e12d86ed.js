!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequire991f;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequire991f=o),o.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}})),o.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function d(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(P([])));b&&b!==r&&n.call(b,a)&&(w=b);var k=m.prototype=d.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=m,u(k,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),o.register("b7ONl",(function(e,r){var n,a,i,c;n=e.exports,a="default",i=function(){return w},Object.defineProperty(n,a,{get:i,set:c,enumerable:!0,configurable:!0});var u=o("bpxeT"),s=o("8MBJY"),f=o("a2hTj"),l=o("2TvXO"),h="https://api.themoviedb.org/3/",p="225e339996bc91260b33199c383c8881",v=("".concat(h,"movie/550?api_key=").concat(p),"".concat(h,"trending/all/dayRoute?api_key=").concat(p)),y="".concat(h,"trending/all/week?api_key=").concat(p),d="".concat(h,"/genre/movie/list?api_key=").concat(p),g="".concat(h,"configuration/countries?api_key=").concat(p),m="".concat(h,"all/upcoming?api_key=").concat(p),w=function(){"use strict";function e(){t(s)(this,e),this.page=1}return t(f)(e,[{key:"nextPage",value:function(){this.page+=1}},{key:"prevPage",value:function(){this.page-=1}},{key:"setPage",value:function(t){this.page=t}},{key:"getCurrentPage",value:function(){return this.page}},{key:"reset",value:function(){this.page=1}},{key:"dayTrends",value:function(){var e=this;return t(u)(t(l).mark((function r(){var n,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(v,"&page=").concat(e.page));case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error("Error fetching movie data: "+t.t0);case 13:case"end":return t.stop()}}),r,null,[[0,10]])})))()}},{key:"weekTrends",value:function(){var e=this;return t(u)(t(l).mark((function r(){var n,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(y,"&page=").concat(e.page));case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error("Error fetching movie data: "+t.t0);case 13:case"end":return t.stop()}}),r,null,[[0,10]])})))()}},{key:"upcoming",value:function(){var e=this;return t(u)(t(l).mark((function r(){var n,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(m,"&page=").concat(e.page));case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error("Error fetching movie data: "+t.t0);case 13:case"end":return t.stop()}}),r,null,[[0,10]])})))()}},{key:"getDetailsById",value:function(e){return t(u)(t(l).mark((function r(){var n;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(p),t.next=3,new Promise((function(t){return setTimeout(t,1e3)}));case 3:return t.abrupt("return",fetch(n).then((function(t){return t.json()})));case 4:case"end":return t.stop()}}),r)})))()}},{key:"fetchGenres",value:function(){return t(u)(t(l).mark((function e(){var r,n;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(d);case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n.genres);case 10:throw t.prev=10,t.t0=t.catch(0),new Error("Error fetching genres data: "+t.t0);case 13:case"end":return t.stop()}}),e,null,[[0,10]])})))()}},{key:"countries",value:function(){var e=this;return t(u)(t(l).mark((function r(){return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,1e3)}));case 2:return t.abrupt("return",fetch("".concat(g,"&page=").concat(e.page)).then((function(t){return t.json()})));case 3:case"end":return t.stop()}}),r)})))()}},{key:"searhByNameYear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(u)(t(l).mark((function r(){var n,o,a,i,c,u,s,f;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="https://api.themoviedb.org/3/search/movie?api_key=".concat(p,"&language=en-US&include_adult=false"),0===(o=Object.keys(e)).length){t.next=20;break}for(a=!0,i=!1,c=void 0,t.prev=4,u=o[Symbol.iterator]();!(a=(s=u.next()).done);a=!0)null!==(("year"===(f=s.value)||"query"===f||"page"===f)&&e[f])&&(n+="&".concat(f,"=").concat(e[f]));t.next=12;break;case 8:t.prev=8,t.t0=t.catch(4),i=!0,c=t.t0;case 12:t.prev=12,t.prev=13,a||null==u.return||u.return();case 15:if(t.prev=15,!i){t.next=18;break}throw c;case 18:return t.finish(15);case 19:return t.finish(12);case 20:return t.next=22,new Promise((function(t){return setTimeout(t,1e3)}));case 22:return t.abrupt("return",fetch(n).then((function(t){return t.json()})));case 23:case"end":return t.stop()}}),r,null,[[4,8,12,20],[13,,15,19]])})))()}}]),e}()})),o.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(t,e){"use strict";function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e&&r(t.prototype,e);n&&r(t,n);return t}}))}();
//# sourceMappingURL=catalog.e12d86ed.js.map