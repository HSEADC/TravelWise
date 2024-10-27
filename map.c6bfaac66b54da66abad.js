/******/ (() => { // webpackBootstrap
/******/ 	"use strict";


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
console.log('Страница "Карта"');
/******/ })()
;