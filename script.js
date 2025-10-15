// Mobile Menu Toggle
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple scroll animation
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('section');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});