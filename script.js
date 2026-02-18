// Typing Effect
const texts = ["Java Developer", "Spring Boot Developer", "Backend Engineer"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 300);
  }
}

type();

// Scroll Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      el.classList.add("active");
    }
  });
});
// Dark / Light Mode
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggle.textContent = "☀";
  } else {
    toggle.textContent = "🌙";
  }
});
