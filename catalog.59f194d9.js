var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire991f;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire991f=i);const o=(0,i("dbTx9").default)();(()=>{console.log("hello");const e=()=>{const e="true"===o.headerContainer.getAttribute("aria-expanded")||!1;o.headerContainer.setAttribute("aria-expanded",!e),o.mobileMenu.setAttribute("aria-hidden",e),o.headerContainer.classList.toggle("opened"),o.mobileMenu.classList.toggle("is-hidden"),o.body.classList.toggle("scroll-block")};o.openMenuBtn.addEventListener("click",e),o.linkButton.forEach((t=>t.addEventListener("click",e))),o.mobileMenu.addEventListener("click",(t=>t.target===t.currentTarget&&e())),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(o.mobileMenu.classList.add("is-hidden"),o.headerContainer.setAttribute("aria-expanded",!1),o.headerContainer.classList.remove("opened"),o.body.classList.remove("scroll-block"))}))})();const a=(0,i("dbTx9").default)();"light"===a.savedTheme&&(a.switcher.checked=!0),a.switcher.addEventListener("input",(()=>{const e=a.html.className;a.html.className="dark"===e?"light":"dark",localStorage.setItem("color-theme",a.html.className)}));const l=(0,i("dbTx9").default)();(()=>{const e=window.location.pathname.split("?")[0];l.pageLinks.forEach((t=>{const n=t.getAttribute("href");("/index.html"!==e||"/"!==n)&&n!==e?t.classList.remove("navigation__link--current"):t.classList.add("navigation__link--current")})),l.pageLinksMobile.forEach((t=>{const n=t.getAttribute("href");("/index.html"!==e||"/"!==n)&&n!==e?t.classList.remove("navigation-menu__link--current"):t.classList.add("navigation-menu__link--current")}))})();i("2ukBh");const s=(0,i("dbTx9").default)();window.addEventListener("scroll",(function(){window.scrollY>20?s.scrollUpBtn.style.display="block":s.scrollUpBtn.style.display="none"})),s.scrollUpBtn.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),i("17t3Z");
//# sourceMappingURL=catalog.59f194d9.js.map