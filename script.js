document.addEventListener("DOMContentLoaded", () => {
  /* ======================
     Typing Effect
  ====================== */
  const texts = [
    "Java Backend Developer",
    "Spring Boot Developer",
    "Backend Engineer"
  ];

  const typingElement = document.querySelector(".typing");
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[textIndex].length) {
      typingElement.textContent += texts[textIndex][charIndex++];
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent =
        texts[textIndex].substring(0, --charIndex);
      setTimeout(erase, 60);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 300);
    }
  }

  type();

  /* ======================
     Scroll Reveal
  ====================== */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ======================
     Theme Toggle
  ====================== */
  const toggle = document.getElementById("themeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggle.textContent = document.body.classList.contains("light-mode")
      ? "☀"
      : "🌙";
  });
});