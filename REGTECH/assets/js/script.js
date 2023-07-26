// JavaScript Interactivity
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling to section
  const scrollLinks = document.querySelectorAll('a.scroll-link');

  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));
      const offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

  // Show/hide navigation menu on mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');

  menuToggle.addEventListener('click', function() {
    navigation.classList.toggle('show');
  });
});
