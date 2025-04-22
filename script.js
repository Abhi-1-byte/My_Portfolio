// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Reveal sections on scroll
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const scrollY = window.scrollY + window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY > sectionTop + 100) {
      section.classList.add("visible");
    }
  });
}

document.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);
