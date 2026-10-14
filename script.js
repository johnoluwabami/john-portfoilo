const words = [
  "Happy Coding!",
  "Junior Programmer",
  "Creative Designer"
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

function showTab(tabName) {

    let tabs = document.querySelectorAll(".tab-content");

    tabs.forEach(function(tab) {
        tab.style.display = "none";
    });

    document.getElementById(tabName).style.display = "grid";
}
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  hamburger.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';

  hamburger.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    hamburger.setAttribute("aria-expanded", "false");
  });
});