/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/assets/images/couple.jpg
const couple_namespaceObject = __webpack_require__.p + "assets/images/4b1ceb49c1b805949316.jpg";
;// ./src/pages/home/home.js



var img = document.createElement('img');
img.src = couple_namespaceObject;
document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.slide');
  var currentIndex = 0;
  var showSlide = function showSlide(index) {
    var slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = "translateX(-".concat(index * 100, "%)");
  };
  var nextSlide = function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };
  var prevSlide = function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };
  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);
  showSlide(currentIndex);
});
document.addEventListener('DOMContentLoaded', function () {
  var guidesDropdownButton = document.getElementById('guidesDropdownButton');
  var guidesDropdownContent = document.getElementById('guidesDropdownContent');
  var advicesDropdownButton = document.getElementById('advicesDropdownButton');
  var advicesDropdownContent = document.getElementById('advicesDropdownContent');
  var routsDropdownButton = document.getElementById('routsDropdownButton');
  var routsDropdownContent = document.getElementById('routsDropdownContent');
  guidesDropdownButton.addEventListener('click', function () {
    guidesDropdownContent.style.display = guidesDropdownContent.style.display === 'block' ? 'none' : 'block';
  });
  advicesDropdownButton.addEventListener('click', function () {
    advicesDropdownContent.style.display = advicesDropdownContent.style.display === 'block' ? 'none' : 'block';
  });
  routsDropdownButton.addEventListener('click', function () {
    routsDropdownContent.style.display = routsDropdownContent.style.display === 'block' ? 'none' : 'block';
  });
  window.addEventListener('click', function (event) {
    if (!event.target.matches('#guidesDropdownButton')) {
      guidesDropdownContent.style.display = 'none';
    }
    if (!event.target.matches('#advicesDropdownButton')) {
      advicesDropdownContent.style.display = 'none';
    }
    if (!event.target.matches('#routsDropdownButton')) {
      routsDropdownContent.style.display = 'none';
    }
  });
});
console.log('Страница "Домашняя"');
/******/ })()
;