const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-white");
});
