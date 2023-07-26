document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll to sections when clicking on navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });

  // Toggle mobile navigation menu
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  mobileNavToggle.addEventListener("click", function() {
    mobileNav.classList.toggle("active");
  });

  // Hide mobile navigation menu when clicking outside
  document.addEventListener("click", function(event) {
    if (!mobileNav.contains(event.target) && !mobileNavToggle.contains(event.target)) {
      mobileNav.classList.remove("active");
    }
  });

  // Show scroll-to-top button when scrolling down
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Header animation
  const header = document.querySelector("header");
  setTimeout(function() {
    header.classList.add("animate");
  }, 1000);
});
