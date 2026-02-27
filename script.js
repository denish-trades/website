const reveals = document.querySelectorAll(".section, .hero, .site-footer");

reveals.forEach((el, index) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${index * 0.08}s`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));
