const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const button = document.getElementById("button");
const showmore = document.querySelector(".portrait-showmore");
const down = document.getElementById("expand-down")

button.addEventListener("click", () => {
  showmore.classList.toggle("hide");
});

button.addEventListener("click", () => {
  if (button.textContent === "Скрыть") {
    button.textContent = "Показать все";
    down.src = "./icons/expand-down.svg";
  } else {
    button.textContent = "Скрыть";
    down.src = "./icons/expand-up.svg";
  }
});
