import '../../styles/main.scss';
import './home.scss';
import logo from '../../assets/images/couple.jpg';
var img = document.createElement('img');
img.src = logo;
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