// Add small animation on scroll or button hover if needed
document.querySelector(".btn").addEventListener("mouseenter", () => {
  document.querySelector(".btn").classList.add("fa-beat-fade");
});
 const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
 document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;
      const animation = target.getAttribute('data-animate');

      if (entry.isIntersecting) {
        target.classList.remove(animation); // reset animation
        void target.offsetWidth;            // force reflow
        target.classList.add(animation);    // re-add animation
      }
    });
  }, {
    threshold: 0.3,
  });

  animatedSections.forEach(section => observer.observe(section));
});


 let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(autoSlide, 4000); // every 4 seconds