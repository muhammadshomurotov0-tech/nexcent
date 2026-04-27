let bars = document.querySelector(".bars");
let menu = document.querySelector(".top-middle");
let closeBtn = document.querySelector(".close");

bars.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});

let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}, 3000);