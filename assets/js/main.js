// Placeholder for future JavaScript functionality
console.log("Welcome to My Cloud Journey Blog!");

/* main.js */
const phrases = ["Welcome to My Cloud Journey", "Explore My Cloud Projects", "Learn and Grow with Me"];
let currentPhrase = 0, currentChar = 0, isDeleting = false;
const typedText = document.getElementById('typed-text');

function type() {
  const fullText = phrases[currentPhrase];
  typedText.textContent = fullText.substring(0, currentChar);
  if (!isDeleting && currentChar < fullText.length) {
    currentChar++;
    setTimeout(type, 100);
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();

const switchToggle = document.getElementById("theme-switch");
const userPref = localStorage.getItem("theme");

if (userPref === "dark") {
  document.body.classList.add("dark-mode");
  switchToggle.checked = true;
}

switchToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
