// Theme Toggle Dark/Light
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => document.body.classList.toggle('dark-mode');

// AOS Animation
AOS.init({ duration: 1200 });

// Swiper Carousel Project
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: { el: '.swiper-pagination' },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});
