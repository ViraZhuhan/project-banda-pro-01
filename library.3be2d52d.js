function e(){return{html:document.documentElement,savedTheme:localStorage.getItem("color-theme"),switcher:document.querySelector('.switch input[type="checkbox"]'),rating:document.querySelectorAll(".rating"),gallery:document.querySelector(".gallery"),pageLinks:document.querySelectorAll(".navigation__link"),pageLinksMobile:document.querySelectorAll(".navigation-menu__link"),mobileMenu:document.querySelector(".mobile-menu"),headerContainer:document.querySelector(".header-menu"),openMenuBtn:document.querySelector(".menu-open"),body:document.getElementsByTagName("body")[0],linkButton:document.querySelectorAll(".navigation-menu__link"),backdrop:document.querySelector(".backdrop"),openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal"),teamModal:document.getElementsByClassName("team__modal"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".modal__close-btn"),modal:document.querySelector(".modal"),backdrop:document.querySelector(".backdrop"),footerLink:document.querySelector(".team__modal-open"),footerBackdrop:document.querySelector('[data-action="deleted-class"]'),modalCloseBtn:document.querySelector(".footer-modal__close-btn"),watchedBtn:document.querySelector("button[name=watched]"),modalEmptyEl:document.querySelector(".modal-empty__backdrop"),closeModalEmptyEl:document.querySelector(".modal-empty__close"),scrollUpBtn:document.getElementById("scroll-up-btn")}}const t=e();(()=>{console.log("hello");const e=()=>{const e="true"===t.headerContainer.getAttribute("aria-expanded")||!1;t.headerContainer.setAttribute("aria-expanded",!e),t.mobileMenu.setAttribute("aria-hidden",e),t.headerContainer.classList.toggle("opened"),t.mobileMenu.classList.toggle("is-hidden"),t.body.classList.toggle("scroll-block")};t.openMenuBtn.addEventListener("click",e),t.linkButton.forEach((t=>t.addEventListener("click",e))),t.mobileMenu.addEventListener("click",(t=>t.target===t.currentTarget&&e())),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(t.mobileMenu.classList.add("is-hidden"),t.headerContainer.setAttribute("aria-expanded",!1),t.headerContainer.classList.remove("opened"),t.body.classList.remove("scroll-block"))}))})();const o=e();"light"===o.savedTheme&&(o.switcher.checked=!0),o.switcher.addEventListener("input",(()=>{const e=o.html.className;o.html.className="dark"===e?"light":"dark",localStorage.setItem("color-theme",o.html.className)}));const n=e();(()=>{const e=window.location.pathname.split("?")[0];n.pageLinks.forEach((t=>{const o=t.getAttribute("href");("/index.html"!==e||"/"!==o)&&o!==e?t.classList.remove("navigation__link--current"):t.classList.add("navigation__link--current")})),n.pageLinksMobile.forEach((t=>{const o=t.getAttribute("href");("/index.html"!==e||"/"!==o)&&o!==e?t.classList.remove("navigation-menu__link--current"):t.classList.add("navigation-menu__link--current")}))})();const l=e();window.addEventListener("scroll",(function(){window.scrollY>20?l.scrollUpBtn.style.display="block":l.scrollUpBtn.style.display="none"})),l.scrollUpBtn.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=library.3be2d52d.js.map