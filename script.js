const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
