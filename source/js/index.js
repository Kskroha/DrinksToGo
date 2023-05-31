const navWrapper = document.querySelector('.main-nav__wrapper');
const menuBtn = document.querySelector('.menu-btn');
const newMap = document.getElementById('map');
const slider = document.querySelector('.swiper');

navWrapper.classList.remove('main-nav__wrapper--nojs');
menuBtn.classList.remove('menu-btn--nojs');
newMap.classList.remove('map__box--nojs');

menuBtn.addEventListener('click', () => {
  navWrapper.classList.toggle('main-nav__wrapper--closed');
  menuBtn.classList.toggle('menu-btn--active');
  document.body.classList.toggle('stop-scroll');
});

const swiper = new Swiper(slider, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var map = L.map(newMap, {
  center: [59.96813706412382,30.316272500000004],
  zoom: 17
});

var marker = L.marker([59.96813706412382,30.316272500000004]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
