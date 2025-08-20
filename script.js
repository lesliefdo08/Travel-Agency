document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu on link click (mobile UX)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  // Carousel functionality
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let idx = 0;

  function showSlide(n) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === n);
      if (dots[i]) dots[i].classList.toggle("active", i === n);
    });
    idx = n;
  }

  function nextSlide() {
    idx = (idx + 1) % slides.length;
    showSlide(idx);
  }

  if (slides.length) {
    setInterval(nextSlide, 4000);
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => showSlide(i));
    });
  }

  // Testimonials auto rotate
  const testimonials = document.querySelectorAll(".testimonial");
  let tidx = 0;

  function nextTestimonial() {
    if (testimonials.length) {
      testimonials[tidx].classList.remove("active");
      tidx = (tidx + 1) % testimonials.length;
      testimonials[tidx].classList.add("active");
    }
  }

  if (testimonials.length) setInterval(nextTestimonial, 5000);
});
