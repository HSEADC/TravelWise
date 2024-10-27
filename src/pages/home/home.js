import '../../styles/main.scss';
import './home.scss';

import logo from '../../assets/images/couple.jpg';

const img = document.createElement('img');
img.src = logo;

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  const showSlide = (index) => {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {
  const guidesDropdownButton = document.getElementById('guidesDropdownButton');
  const guidesDropdownContent = document.getElementById('guidesDropdownContent');
  const advicesDropdownButton = document.getElementById('advicesDropdownButton');
  const advicesDropdownContent = document.getElementById('advicesDropdownContent');
  const routsDropdownButton = document.getElementById('routsDropdownButton');
  const routsDropdownContent = document.getElementById('routsDropdownContent');

  guidesDropdownButton.addEventListener('click', function () {
    guidesDropdownContent.style.display =
      guidesDropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  advicesDropdownButton.addEventListener('click', function () {
    advicesDropdownContent.style.display =
      advicesDropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  routsDropdownButton.addEventListener('click', function () {
    routsDropdownContent.style.display =
      routsDropdownContent.style.display === 'block' ? 'none' : 'block';
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
